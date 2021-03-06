import { Dispatcher, React, ModalActions } from "ittai/webpack"
import { Category, SwitchItem, Forms, Button, Flex, RadioGroup, Modal, Heading, Text } from "ittai/components"
import UserListSettings from "./UserListSettings"
import * as settings from "ittai/settings"
import * as toast from "ittai/toast"
import * as constants from "../constants"
//@ts-ignore
import styles from "./Settings.scss"
import isValidJSON from "../utils/isValidJSON"
import classes from "../utils/classes"
import joinClasses from "../utils/joinClasses"

export default function() {
    const [, forceUpdate] = React.useReducer((v) => !v, false)

    return <>
        <Category title="Listed categories" description="Configure the folders and add or change the listed users" icon="Person">
            <UserListSettings />
        </Category>

        <Category title="Other settings" description="Other settings that you can tweak" icon="Gear">
            <Forms.FormSection>
                <Forms.FormItem>
                    <Forms.FormTitle>Display mode</Forms.FormTitle>
                    <RadioGroup
                        options={[
                            { name: "Category", value: constants.Settings.DefaultSettings.CategoryView.settingsValue },
                            { name: "Minimalist", value: constants.Settings.DefaultSettings.MinimalistView.settingsValue }
                        ]}
                        value={settings.get("display", constants.Settings.DefaultSettings.DISPLAY_MODE)}
                        onChange={(v) => {
                            settings.set("display", v.value)
                            Dispatcher.dirtyDispatch({ type: constants.DISPATCHER_PINDMS_CHANGE_LIST })
                            forceUpdate()
                        }}
                    />
                    <Forms.FormDivider className={joinClasses(classes.Margins.marginBottom20, classes.Margins.marginTop20)} />
                </Forms.FormItem>

                {settings.get("display", constants.Settings.DefaultSettings.DISPLAY_MODE) === constants.Settings.DefaultSettings.MinimalistView.settingsValue && <Category title="Minimalist view settings" description="Additional configuration for the Minimalist View">
                    <SwitchItem
                        value={settings.get("minimal.userIcons", constants.Settings.DefaultSettings.MinimalistView.userIcons)}
                        onChange={(e) => {
                            settings.set("minimal.userIcons", e)
                            Dispatcher.dirtyDispatch({ type: constants.DISPATCHER_PINDMS_CHANGE_LIST })
                        }}
                    >Show user icons</SwitchItem>
                </Category>}

                <SwitchItem
                    value={settings.get("pinIcon", constants.Settings.DefaultSettings.PIN_ICON)}
                    onChange={(e) => settings.set("pinIcon", e)}
                    note="Adds an pin icon to the user so you can add it quickly to a category"
                >Add a quick shortcut to add people on categories</SwitchItem>

                <SwitchItem
                    value={settings.get("streamerMode", constants.Settings.DefaultSettings.STREAMER_MODE)}
                    onChange={(e) => settings.set("streamerMode", e)}
                    note="When Streamer mode is enabled, it will automatically hide the categories"
                >Hide users when Streamer mode is enabled</SwitchItem>

                <Forms.FormItem>
                    <Forms.FormTitle>Export and import settings</Forms.FormTitle>
                    <Flex className={styles.buttonFlex}>
                        <Button onClick={handleExport}>Export</Button>
                        <Button color={Button.Colors.RED}
                            onClick={handleImport}
                        >Import</Button>
                    </Flex>
                </Forms.FormItem>
            </Forms.FormSection>
        </Category>
    </>
}

const handleExport = async () => {
    //@ts-ignore
    return DiscordNative.fileManager.saveWithDialog(JSON.stringify(settings.getAll()), "settings.json")
}

const handleImport = async () => {
    //@ts-ignore
    const [selectedFile] = await DiscordNative.fileManager.openFiles("*.json")
    const newSettingsText = new TextDecoder().decode(new Uint8Array(selectedFile.data as ArrayBuffer))
    if (!isValidJSON(newSettingsText)) return void toast.show("Invalid settings file. It should end with \".json\".", {
        duration: 5000
    })
    const newSettings: JSON = JSON.parse(newSettingsText)
    
    const overrideSettings = () => {
        settings.reset()
        settings.setAll(newSettings)
    }

    ModalActions.openModal(props => <Modal.ModalRoot {...props} size={Modal.ModalSize.SMALL}>
        <Modal.ModalHeader separator={false}>
            <Heading variant="heading-lg/medium">Save a backup</Heading>
        </Modal.ModalHeader>
        <Modal.ModalContent>
            <Text>Do you want to save a backup?</Text>
        </Modal.ModalContent>
        <Modal.ModalFooter>
            <Flex style={{gap: "8px"}} justify={Flex.Justify.END}>
                <Button look={Button.Looks.LINK} color={Button.Colors.WHITE} onClick={props.onClose}>
                    Cancel
                </Button>
                <Button look={Button.Looks.LINK} color={Button.Colors.RED} onClick={() => { overrideSettings(); props.onClose() }}>
                    Override without saving
                </Button>
                <Button onClick={async () => { await handleExport(); overrideSettings(); props.onClose(); }}>
                    Save
                </Button>
            </Flex>
        </Modal.ModalFooter>
    </Modal.ModalRoot>)

    // const stuff: { data: ArrayBuffer, filename: string } = await DiscordNative.fileManager.openFiles("*.json")
    // console.log(stuff)
}