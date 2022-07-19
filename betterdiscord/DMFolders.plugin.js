/**
 * @name DMFolders
 * @version 0.4.0
 * @main index.js
 * @description Organize your DMs with folders
 * @license MIT
 * @source https://github.com/abUwUser/DMFolders.git
 * @updateUrl https://raw.githubusercontent.com/abUwUser/DMFolders/release/index.js
 * @author A user
 */
(function () {
    'use strict';

    // Made with Ittai - https://git.catvibers.me/ittai/ittai
    let IttaiInternals = {};
    let ittaiPluginExport=(()=>{

    var manifest$1 = {
    	name: "DMFolders",
    	version: "0.4.0",
    	license: "MIT",
    	source: "https://github.com/abUwUser/DMFolders.git",
    	updateUrl: "https://raw.githubusercontent.com/abUwUser/DMFolders/release/index.js",
    	author: "A user",
    	description: "Organize your DMs with folders"
    };
    var changelog = {
    	date: "11 July 2022",
    	contents: {
    		"New stuff": {
    			type: "added",
    			items: [
    				"**The categories are also in the friends list!** If you ever wanted to categorize not just your DMs, but your friends as well, you can now do that with new brand ✨ custom tabs ✨ in your Friends list. Give life to your friendships by making them interactive!",
    				"**cUsToMiZeD mEnUs FoR cAtEgOrIeS!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!** Yes, I've added a context menu for when you right click a context menu. Because why not?",
    				"**This page!** WOOOOOO~ I've took the time to add a new feature to Ittai to display changelogs"
    			]
    		},
    		"\"\"\"\"\"\"\"\"\"\"Fixes\"\"\"\"\"\"\"\"\"\"": {
    			type: "progress",
    			items: [
    				"**Clicking on the edit category button does not long crash.** To be honest, I've just made it to display an error message instead of just crashing. More info at your beloved 2GB bundler: https://git.catvibers.me/Ittai/ittai/pulls/13"
    			]
    		},
    		"Current issues": {
    			type: "fixed",
    			items: [
    				"**Uhhh... scrolling isn't still fixed.** Yeah, i need to figure it out (and when i say \"i\" i mean you guys that know how to code better than me)"
    			]
    		},
    		"A message before you go": {
    			type: "improved",
    			items: [
    				"Listen to this: https://www.youtube.com/watch?v=671TWa_2w6c"
    			]
    		}
    	}
    };
    var ittaiconfig = {
    	manifest: manifest$1,
    	changelog: changelog
    };

    var config = /*#__PURE__*/Object.freeze({
        __proto__: null,
        manifest: manifest$1,
        changelog: changelog,
        'default': ittaiconfig
    });

    let clientWebpack = (() => {
      return globalThis.BdApi ?? BdApi;
    })();
    function find(filter) {
      return clientWebpack.findModule(filter);
    }
    function findAll(filter) {
      return clientWebpack.findAllModules(filter);
    }
    function findByProps(...props) {
      return find((m) => props.every((p) => m?.[p] !== void 0));
    }
    function findAllByProps(...props) {
      return findAll((m) => props.every((p) => m?.[p] !== void 0));
    }
    function findByPrototype(...props) {
      return find((m) => props.every((p) => m?.prototype?.[p] !== void 0));
    }
    function findAllByPrototype(...props) {
      return findAll((m) => props.every((p) => m?.prototype?.[p] !== void 0));
    }
    function findByDisplayName(name, returnDefault = true) {
      let ret = find((m) => m?.default?.displayName === name);
      if (returnDefault)
        return ret.default;
      return ret;
    }
    function findAllByDisplayName(name) {
      return find((m) => m?.displayName === name);
    }

    const React$2 = /* @__PURE__ */ findByProps("useState");
    const ReactDOM = /* @__PURE__ */ findByProps("render", "unmountComponentAtNode");
    const ReactSpring = /* @__PURE__ */ findByProps("useSpring", "useTransition");
    const Lodash = globalThis._;
    const _ = globalThis._;
    const AvatarManager = /* @__PURE__ */ findByProps("getUserAvatarURL", "hasAnimatedGuildIcon");
    const ModalActions = /* @__PURE__ */ findByProps("openModal", "updateModal");
    const ModalStack = /* @__PURE__ */ findByProps("push", "update", "pop", "popWithKey");
    const Dispatcher = /* @__PURE__ */ findByProps("dirtyDispatch");
    const Flux = /* @__PURE__ */ findByProps("Store", "connectStores");
    const FluxDispatcher$1 = /* @__PURE__ */ findByProps("_currentDispatchActionType", "_processingWaitQueue");
    const ColorUtils = /* @__PURE__ */ findByProps("isValidHex");
    const Constants = /* @__PURE__ */ findByProps("API_HOST");
    const ContextMenu$1 = /* @__PURE__ */ findByProps("openContextMenu");
    const Platform = /* @__PURE__ */ find((m) => m.PlatformTypes?.WINDOWS);

    IttaiInternals.React = React$2;
    IttaiInternals.ReactDOM = ReactDOM;
    IttaiInternals.ReactSpring = ReactSpring;
    IttaiInternals.Lodash = Lodash;

    var webpack = /*#__PURE__*/Object.freeze({
        __proto__: null,
        find: find,
        findAll: findAll,
        findByProps: findByProps,
        findAllByProps: findAllByProps,
        findByPrototype: findByPrototype,
        findAllByPrototype: findAllByPrototype,
        findByDisplayName: findByDisplayName,
        findAllByDisplayName: findAllByDisplayName,
        React: React$2,
        ReactDOM: ReactDOM,
        ReactSpring: ReactSpring,
        Lodash: Lodash,
        _: _,
        AvatarManager: AvatarManager,
        ModalActions: ModalActions,
        ModalStack: ModalStack,
        Dispatcher: Dispatcher,
        Flux: Flux,
        FluxDispatcher: FluxDispatcher$1,
        ColorUtils: ColorUtils,
        Constants: Constants,
        ContextMenu: ContextMenu$1,
        Platform: Platform
    });

    var __defProp$1 = Object.defineProperty;
    var __defNormalProp$1 = (obj, key, value) => key in obj ? __defProp$1(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
    var __publicField$1 = (obj, key, value) => {
      __defNormalProp$1(obj, typeof key !== "symbol" ? key + "" : key, value);
      return value;
    };
    class BDPlugin {
      constructor() {
        __publicField$1(this, "__ittaiInternals", {
          getAllSettings: () => {
            return globalThis.BdApi.loadData(manifest$1.name, "settings") ?? {};
          },
          getSetting: (key, defaultValue) => {
            return (globalThis.BdApi.loadData(manifest$1.name, "settings") ?? {})[key] ?? defaultValue;
          },
          setSettings: (newSettings) => {
            if (typeof newSettings !== "object")
              return;
            globalThis.BdApi.saveData(manifest$1.name, "settings", Object.assign(this.__ittaiInternals.getAllSettings(), newSettings));
          },
          setSetting: (key, value) => {
            globalThis.BdApi.saveData(manifest$1.name, "settings", Object.assign(this.__ittaiInternals.getAllSettings(), { [key]: value }));
          },
          removeSetting: (key) => {
            let outputSetting = this.__ittaiInternals.getAllSettings();
            delete outputSetting?.[key];
            globalThis.BdApi.saveData(manifest$1.name, "settings", outputSetting);
          },
          resetSettings: () => {
            globalThis.BdApi.saveData(manifest$1.name, "settings", {});
          },
          setSettingsPanel: (component) => {
            this.getSettingsPanel = () => {
              try {
                if (typeof component === "function")
                  component = React$2.createElement(component);
                return component;
              } catch (e) {
                this.error("Failed to load settings panel.", e);
              }
              return null;
            };
          },
          removeSettingsPanel: () => {
            delete this.getSettingsPanel;
          }
        });
      }
      log() {
        logger.log(...arguments);
      }
      debug() {
        logger.debug(...arguments);
      }
      warn() {
        logger.warn(...arguments);
      }
      error() {
        logger.error(...arguments);
      }
    }

    const get = (key, defaultValue) => {
      return settingsInstance.getSetting(key, defaultValue);
    };
    const getAll$1 = () => {
      return settingsInstance.getAllSettings();
    };
    const set = (key, value) => {
      return settingsInstance.setSetting(key, value);
    };
    const setAll = (settings) => {
      return settingsInstance.setSettings(settings);
    };
    const remove = (key) => {
      return settingsInstance.removeSetting(key, void 0);
    };
    const reset = () => {
      return settingsInstance.resetSettings();
    };
    let settingsInstance;
    const setInstance = (i) => {
      settingsInstance = i;
    };

    var index$a = /*#__PURE__*/Object.freeze({
        __proto__: null,
        get: get,
        getAll: getAll$1,
        set: set,
        setAll: setAll,
        remove: remove,
        reset: reset,
        get settingsInstance () { return settingsInstance; },
        setInstance: setInstance
    });

    const classes$1 = {
      default: /* @__PURE__ */ (() => findByProps("icon", "selected").icon)(),
      contextmenu: /* @__PURE__ */ (() => findByProps("icon", "submenu").icon)(),
      minipopover: /* @__PURE__ */ (() => findByProps("icon", "isHeader").icon)()
    };
    function DiscordIcon(props) {
      const choosenClass = React$2.useMemo(() => {
        switch (props.type) {
          case "minipopover":
            return classes$1.minipopover;
          case "contextmenu":
            return classes$1.contextmenu;
          case "none":
            return "";
          default:
            return classes$1.default;
        }
      });
      const IconSVG = findByDisplayName(props.name) ?? (() => {
        return "";
      });
      return /* @__PURE__ */ React$2.createElement(IconSVG, {
        ...props,
        className: [choosenClass, props.className].filter((c) => typeof c === "string").join(" "),
        style: Object.assign({}, {
          width: "inherit",
          height: "inherit"
        }, props.style)
      });
    }

    const LayerProvider = /* @__PURE__ */ (() => findByProps("AppLayerProvider").AppLayerProvider().props.layerContext.Provider)();
    const AccessibilityProvider = /* @__PURE__ */ (() => findByProps("AccessibilityPreferencesContext").AccessibilityPreferencesContext.Provider)();
    const layerClass = /* @__PURE__ */ (() => findByProps("LayerClassName").LayerClassName)();
    function DiscordProviders(props) {
      return /* @__PURE__ */ React$2.createElement(AccessibilityProvider, {
        value: { reducedMotion: { enabled: false, rawValue: "no-preference" } }
      }, /* @__PURE__ */ React$2.createElement(LayerProvider, {
        value: [document.querySelector("#app-mount > ." + layerClass)]
      }, props.children));
    }

    function FluxWrapper(props) {
      if (!props.children.displayName)
        props.children.displayName = "FluxProxy";
      const ConnectedComponent = Flux.connectStores(props.stores ? Object.values(props.stores) : [], props.createProps ?? (() => {
        return { [Math.random()]: Math.random() };
      }))(props.children);
      return /* @__PURE__ */ React$2.createElement(ConnectedComponent, {
        ...props.stores
      });
    }

    const Changelog = /* @__PURE__ */ findByProps("lead", "socialLink");
    const ChangelogModal = /* @__PURE__ */ findByProps("maxModalWidth", "content");
    const Margins$1 = /* @__PURE__ */ findByProps("marginLarge", "marginTop20");
    const CardLook = /* @__PURE__ */ findByProps("arrow", "container", "description");

    function Category$1({ title, description, icon, children, openedByDefault = false }) {
      const [opened, setOpened] = React$2.useState(openedByDefault);
      return /* @__PURE__ */ React$2.createElement("div", {
        styles: { marginBottom: "20px" }
      }, /* @__PURE__ */ React$2.createElement("div", {
        className: CardLook.container,
        onClick: () => setOpened(!opened)
      }, icon && /* @__PURE__ */ React$2.createElement("div", {
        className: CardLook.icon
      }, /* @__PURE__ */ React$2.createElement(DiscordIcon, {
        name: icon,
        style: { width: "20px", height: "20px" }
      })), /* @__PURE__ */ React$2.createElement("div", {
        className: CardLook.description
      }, /* @__PURE__ */ React$2.createElement("div", {
        className: "title-2dsDLn"
      }, title), description && /* @__PURE__ */ React$2.createElement(Text, null, description)), /* @__PURE__ */ React$2.createElement("div", {
        className: CardLook.arrow
      }, /* @__PURE__ */ React$2.createElement(DiscordIcon, {
        name: "DropdownArrow",
        style: { width: "24px", height: "24px", color: "var(--interactive-active)", transform: !opened ? "rotate(-90deg)" : void 0 }
      }))), opened && /* @__PURE__ */ React$2.createElement("div", {
        style: { marginTop: "16px", padding: "0 20px" }
      }, children));
    }

    const makeUpdateWrapper = (Component, checkPropName = "value", type = "switch") => {
      const typeSwitch = (v) => {
        switch (type) {
          case "switch": {
            return v;
          }
          case "radio": {
            return v.value;
          }
          default: {
            return v;
          }
        }
      };
      return (props) => {
        const [value, setValue] = React$2.useState(props[checkPropName]);
        return /* @__PURE__ */ React$2.createElement(Component, {
          ...{
            ...props,
            [checkPropName]: value,
            onChange: (...args) => {
              const value2 = args[0];
              if (typeof props.onChange === "function")
                props.onChange(value2);
              setValue(typeSwitch(value2));
            }
          }
        });
      };
    };
    const Button = /* @__PURE__ */ findByProps("Colors", "Looks", "DropdownSizes");
    const Spinner = /* @__PURE__ */ findByDisplayName("Spinner");
    const Text = /* @__PURE__ */ findByDisplayName("LegacyText");
    const TextInput = /* @__PURE__ */ findByDisplayName("TextInput");
    const Tooltip = /* @__PURE__ */ findByDisplayName("Tooltip");
    const TooltipContainer = /* @__PURE__ */ (() => findByProps("TooltipContainer")?.TooltipContainer)();
    const SlideIn = /* @__PURE__ */ findByDisplayName("SlideIn");
    const SettingsNotice = /* @__PURE__ */ findByDisplayName("SettingsNotice");
    const TransitionGroup = /* @__PURE__ */ findByDisplayName("TransitionGroup");
    const Flex = /* @__PURE__ */ findByDisplayName("Flex");
    const Card = /* @__PURE__ */ findByDisplayName("Card");
    const Popout = /* @__PURE__ */ findByDisplayName("Popout");
    const Progress = /* @__PURE__ */ findByDisplayName("Progress");
    const Modal = /* @__PURE__ */ findByProps("ModalRoot");
    const Forms = /* @__PURE__ */ findByProps("FormItem");
    const ColorPicker$1 = /* @__PURE__ */ findByDisplayName("ColorPicker");
    const Anchor = /* @__PURE__ */ findByDisplayName("Anchor");
    const Heading = /* @__PURE__ */ (() => findByProps("Heading").Heading)();
    const KeyboardShortcut = /* @__PURE__ */ (() => findByProps("PRETTY_KEYS").default)();
    const SearchBar = /* @__PURE__ */ (() => findByProps("SearchIcon").default)();
    const OriginalRadioGroup = /* @__PURE__ */ findByDisplayName("RadioGroup");
    const RadioGroup = makeUpdateWrapper(OriginalRadioGroup, "value", "radio");
    const OriginalSwitch = /* @__PURE__ */ findByDisplayName("Switch");
    const Switch = makeUpdateWrapper(OriginalSwitch, "checked");
    const OriginalSwitchItem = /* @__PURE__ */ findByDisplayName("SwitchItem");
    const SwitchItem = makeUpdateWrapper(OriginalSwitchItem, "value");
    const Markdown = /* @__PURE__ */ (() => find((m) => m?.default?.displayName == "Markdown" && m?.default?.rules)?.default)();
    const ContextMenu = findByProps("MenuItem").default;
    Object.entries(findByProps("MenuItem")).forEach(([key, contents]) => {
      if (!ContextMenu[key]) {
        ContextMenu[key] = contents;
      }
    });
    const Avatar = /* @__PURE__ */ (() => findByProps("AnimatedAvatar").default)();
    const AnimatedAvatar = /* @__PURE__ */ (() => findByProps("AnimatedAvatar").AnimatedAvatar)();
    const AvatarSizes = /* @__PURE__ */ (() => findByProps("AnimatedAvatar").Sizes)();
    const Slider = /* @__PURE__ */ (() => findByProps("MarkerPositions").default)();
    const SliderMarkerPositions = /* @__PURE__ */ (() => findByProps("MarkerPositions").MarkerPositions)();

    var index$9 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        makeUpdateWrapper: makeUpdateWrapper,
        Button: Button,
        Spinner: Spinner,
        Text: Text,
        TextInput: TextInput,
        Tooltip: Tooltip,
        TooltipContainer: TooltipContainer,
        SlideIn: SlideIn,
        SettingsNotice: SettingsNotice,
        TransitionGroup: TransitionGroup,
        Flex: Flex,
        Card: Card,
        Popout: Popout,
        Progress: Progress,
        Modal: Modal,
        Forms: Forms,
        ColorPicker: ColorPicker$1,
        Anchor: Anchor,
        Heading: Heading,
        KeyboardShortcut: KeyboardShortcut,
        SearchBar: SearchBar,
        OriginalRadioGroup: OriginalRadioGroup,
        RadioGroup: RadioGroup,
        OriginalSwitch: OriginalSwitch,
        Switch: Switch,
        OriginalSwitchItem: OriginalSwitchItem,
        SwitchItem: SwitchItem,
        Markdown: Markdown,
        ContextMenu: ContextMenu,
        Avatar: Avatar,
        AnimatedAvatar: AnimatedAvatar,
        AvatarSizes: AvatarSizes,
        Slider: Slider,
        SliderMarkerPositions: SliderMarkerPositions,
        DiscordIcon: DiscordIcon,
        DiscordProviders: DiscordProviders,
        FluxWrapper: FluxWrapper,
        Category: Category$1
    });

    function getClientMod() {
      return "betterdiscord";
    }

    function nanoseconds() {
      const hrTime = process.hrtime();
      return hrTime[0] * 1e9 + hrTime[1];
    }

    function randomString$1(time) {
      return new Promise((resolve) => setTimeout(() => resolve(), time));
    }

    function createArguments(...args) {
      return [
        "%cIttai",
        "color: #000; background-color: #42ffa7; font-family: default; padding-left: 3px; padding-right: 3px; border-radius: 2px; font-weight: bold;",
        ...args
      ];
    }

    function log(...args) {
      consoleCopy.log(...createArguments(...args));
    }

    function debug(...args) {
      consoleCopy.debug(...createArguments(...args));
    }

    function warn(...args) {
      consoleCopy.warn(...createArguments(...args));
    }

    function error(...args) {
      consoleCopy.error(...createArguments(...args));
    }

    function group(...args) {
      consoleCopy.group(...createArguments(...args));
    }

    function groupEnd(...args) {
      consoleCopy.groupEnd(...createArguments(...args));
    }

    function count(...args) {
      consoleCopy.count(...args);
    }

    function countReset(...args) {
      consoleCopy.countReset(...args);
    }

    const consoleCopy = { ...console };

    var index$8 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        consoleCopy: consoleCopy,
        createArguments: createArguments,
        log: log,
        debug: debug,
        warn: warn,
        error: error,
        group: group,
        groupEnd: groupEnd,
        count: count,
        countReset: countReset
    });

    function findInTree(tree, filter, {
      walkable = [],
      exclude = [],
      whileLoop = false,
      maxDepth = 100,
      depth = 0
    } = {}) {
      if (depth === maxDepth)
        return null;
      if (tree === null || tree === void 0)
        return null;
      if (typeof tree !== "object")
        return null;
      if (typeof filter === "string")
        return tree[filter];
      if (whileLoop) {
        const stack = [tree];
        while (stack.length) {
          const node = stack[whileLoop === "reverse" ? "pop" : "shift"]();
          try {
            if (filter(node))
              return node;
          } catch {
          }
          if (stack.length >= maxStack)
            continue;
          if (Array.isArray(node)) {
            stack.push(...node);
          } else if (typeof node === "object" && node !== null) {
            if (walkable.length > 0) {
              stack.push(...Object.entries(node).filter(([key, value]) => walkable.indexOf(key) !== -1 && exclude.indexOf(key) === -1).map(([key, value]) => value));
            } else {
              stack.push(...Object.values(node).filter((key) => exclude.indexOf(key) === -1 && node));
            }
          }
          depth++;
        }
        return null;
      } else {
        let returnValue;
        try {
          if (filter(tree))
            return tree;
        } catch {
        }
        if (Array.isArray(tree)) {
          for (const value of tree) {
            returnValue = findInTree(value, filter, {
              walkable,
              exclude,
              whileLoop,
              maxDepth,
              depth: depth + 1
            });
            if (returnValue)
              return returnValue;
          }
        }
        let keys = walkable.length > 0 ? walkable : Object.keys(tree);
        for (const key of keys) {
          if (!tree.hasOwnProperty(key) || exclude.includes(key))
            continue;
          returnValue = findInTree(tree[key], filter, {
            walkable,
            exclude,
            whileLoop,
            maxDepth,
            depth: depth + 1
          });
          if (returnValue)
            return returnValue;
        }
        return null;
      }
    }

    function findInReactTree(tree, filter, { whileLoop = false, maxDepth = 100, depth = 0 } = {}) {
      return findInTree(tree, filter, {
        walkable: ["props", "children", "child", "sibling"],
        exclude: ["__reactFiber$", "__reactFiber", "__reactInternalInstance$", "__reactInternalInstance"],
        whileLoop,
        maxDepth,
        depth
      });
    }

    function getReactInstance(node) {
      if (typeof node === "string")
        node = document.querySelector(`${node}, .${node}, #${node}, [class*="${node}"]`);
      if (!node)
        return null;
      if (node.__reactFiber$)
        return node.__reactFiber$;
      if (node.__reactInternalInstance$)
        return node.__reactInternalInstance$;
      return node[Object.keys(node).find((e) => e.startsWith("__reactFiber$"))] || node[Object.keys(node).find((e) => e.startsWith("__reactInternalInstance"))];
    }

    function getOwnerInstance(node) {
      for (let curr = getReactInstance(node); curr; curr = curr.return) {
        const owner = curr.stateNode;
        if (owner)
          return owner;
      }
      return null;
    }

    function testComponent(Component) {
      ModalStack.openModal(() => Component);
    }

    function benchmark(codeblock, times) {
      return new Promise((resolve) => {
        const pre = codeblock.pre ?? (() => {
        });
        delete codeblock.pre;
        const post = codeblock.post ?? (() => {
        });
        delete codeblock.post;
        const name = Object.keys(codeblock)[0];
        codeblock = codeblock[Object.keys(codeblock)[0]];
        let promises = [];
        for (let i = 0; i < times; i++) {
          promises.push(new Promise((resolve2) => {
            let returns, start, end;
            try {
              pre();
              start = nanoseconds();
              returns = codeblock();
              end = nanoseconds();
              post();
            } catch (e) {
              resolve2({ returns, time: 0, error: e });
            }
            resolve2({ returns, time: end - start, error: false });
          }));
        }
        Promise.all(promises).then((allReturns) => {
          const finalTimes = allReturns.map((r) => r.time);
          resolve({
            name,
            average: average(finalTimes),
            median: median(finalTimes),
            error: allReturns[0].error,
            returns: allReturns[0].returns
          });
        });
      });
    }

    function multiBenchmark(codeblocks, times) {
      return new Promise((resolve) => {
        const start = nanoseconds();
        Promise.all(codeblocks.map((codeblock) => benchmark(codeblock, times))).then((results) => {
          const end = nanoseconds();
          const groupName = `Benchmarked ${codeblocks.length.toLocaleString()} functions ${times.toLocaleString()} times over ${(end - start).toLocaleString()}ns.`;
          group(groupName);
          const mappedResults = Object.values(results).map((result) => {
            return {
              Name: result.name,
              "Median Time": `${result.median.toLocaleString()}ns`,
              "Average Time": `${result.average.toLocaleString()}ns`,
              Returns: result.returns,
              Error: result.error,
              "(Median Time)": result.median,
              "(Average Time)": result.average
            };
          });
          const successfulResults = mappedResults.filter((result) => result.Error === false);
          const erroredResults = mappedResults.filter((result) => !!result.Error);
          console.table(successfulResults.sort((result1, result2) => {
            if (result1["(Median Time)"] > result2["(Median Time)"])
              return 1;
            if (result1["(Median Time)"] < result2["(Median Time)"])
              return -1;
            return 0;
          }), ["Name", "Median Time", "Average Time", "Returns"]);
          if (erroredResults.length > 0) {
            console.table(erroredResults, ["Name", "Error"]);
          }
          groupEnd(groupName);
          resolve(results);
        });
      });
    }

    function average(array) {
      if (array.length === 0)
        return 0;
      let total = 0;
      for (let i = 0; i < array.length; i++) {
        total += array[i];
      }
      return total / array.length;
    }

    function median(array) {
      if (array.length === 0)
        return 0;
      array.sort(function(a, b) {
        return a - b;
      });
      let half = Math.floor(array.length / 2);
      if (array.length % 2)
        return array[half];
      return (array[half - 1] + array[half]) / 2;
    }

    function randomNumber(min, max) {
      return Math.random() * max - min;
    }

    function randomString(length, dontMatch = "", charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789") {
      if (typeof length !== "number" && length <= 0)
        return;
      if (typeof dontMatch !== "string" && !Array.isArray(dontMatch))
        return;
      if (typeof charset !== "string" && !Array.isArray(charset))
        return;
      let string = "";
      do {
        while (string.length < length) {
          string += charset[Math.round(randomNumber(0, charset.length - 1))];
        }
        string = string.slice(0, length);
      } while (dontMatch && (string === dontMatch || dontMatch.some((m) => m === string)));
      return string;
    }

    var joinClasses$1 = (...classes) => classes.filter((s) => typeof s === "string").join(" ");

    function searchClassNameModules(className) {
      return find((m) => Object.values(m).some((v) => typeof v === "string" && ~v.split(" ").indexOf(className)));
    }

    var messageBox = (title, description, buttons) => {
      return new Promise((resolve) => {
        ModalActions.openModal((props) => /* @__PURE__ */ React$2.createElement(Modal.ModalRoot, {
          ...props
        }, /* @__PURE__ */ React$2.createElement(Modal.ModalHeader, {
          separator: false
        }, /* @__PURE__ */ React$2.createElement(Heading, {
          variant: "heading-lg/medium"
        }, title)), /* @__PURE__ */ React$2.createElement(Modal.ModalContent, null, /* @__PURE__ */ React$2.createElement(Text, null, description)), /* @__PURE__ */ React$2.createElement(Modal.ModalFooter, null, buttons.map((button) => /* @__PURE__ */ React$2.createElement(Button, {
          onClick: () => {
            button.action();
            props.onClose();
            resolve(button);
          },
          color: button.color ?? Button.Colors.BRAND,
          look: button.look ?? Button.Looks.FILLED
        }, button.text)))));
      });
    };

    const { getMessages: discordGetMessages$1 } = /* @__PURE__ */ findByProps("getMessages", "getMessage");
    function getMessages(channelID) {
      const messages = _.merge(_.keyBy(discordGetMessages$1(channelID)._array, "id"), messageCache[channelID] ?? {});
      return messageCache[channelID] = messages;
    }

    const { getMessage: discordGetMessage$1 } = /* @__PURE__ */ findByProps("getMessages", "getMessage");
    const { getMessageByReference } = /* @__PURE__ */ findByProps("getMessageByReference");
    function getMessage(channelID, messageID) {
      return _.set(messageCache, [channelID, messageID], discordGetMessage$1(channelID, messageID) ?? getMessageByReference({
        message_id: messageID,
        channel_id: channelID
      }).message ?? messageCache[channelID]?.[messageID])[channelID][messageID];
    }

    const { Endpoints } = /* @__PURE__ */ findByProps("Endpoints");
    const User$2 = /* @__PURE__ */ findByPrototype("tag");
    const Timestamp = /* @__PURE__ */ findByPrototype("toDate", "month");
    const Message = /* @__PURE__ */ findByPrototype("isEdited");
    const DiscordAPI = /* @__PURE__ */ findByProps("getAPIBaseURL");
    function fetchMessage(channelID, messageID) {
      return new Promise((resolve, reject) => {
        const message = getMessage(channelID, messageID);
        if (message)
          return resolve(message);
        DiscordAPI.get({
          url: Endpoints.MESSAGES(channelID),
          query: {
            limit: 100,
            around: messageID
          }
        }).then((res) => {
          if (res.status != 200)
            return reject();
          for (let m of res.body) {
            m.author = new User$2(m.author);
            m.timestamp = new Timestamp(m.timestamp);
            m = new Message(m);
            _.set(messageCache, [m.channel_id, m.id], m);
          }
          const foundMessage = messageCache[channelID]?.[messageID];
          if (foundMessage)
            resolve(foundMessage);
          reject();
        }).catch((res) => {
          if (res.status != 403)
            return reject();
        });
      });
    }

    const { getMessages: discordGetMessages } = /* @__PURE__ */ findByProps("getMessages", "getMessage");
    const { getChannelId } = /* @__PURE__ */ findByProps("getChannelId");
    function rerenderAllMessages(props = {}) {
      const messages = discordGetMessages(getChannelId())._array;
      for (const message of messages) {
        rerenderMessage(message, props);
      }
    }

    const { getMessage: discordGetMessage } = /* @__PURE__ */ findByProps("getMessages", "getMessage");
    function rerenderMessage(idOrMessage, props = {}) {
      let message = typeof idOrMessage === "string" ? discordGetMessage(idOrMessage) : idOrMessage;
      if (!message)
        return;
      message = {
        id: message.id,
        channel_id: message.channel_id,
        content: message.content
      };
      updateMessage(message, props);
    }

    const FluxDispatcher = /* @__PURE__ */ findByProps("dispatch", "dirtyDispatch");
    function updateMessage(message, props = {}) {
      FluxDispatcher.dirtyDispatch({
        ...props,
        type: "MESSAGE_UPDATE",
        message
      });
    }

    let messageCache = {};

    var index$7 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        messageCache: messageCache,
        getMessages: getMessages,
        getMessage: getMessage,
        fetchMessage: fetchMessage,
        rerenderAllMessages: rerenderAllMessages,
        rerenderMessage: rerenderMessage,
        updateMessage: updateMessage
    });

    var index$6 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        getClientMod: getClientMod,
        nanoseconds: nanoseconds,
        wait: randomString$1,
        findInTree: findInTree,
        findInReactTree: findInReactTree,
        getReactInstance: getReactInstance,
        getOwnerInstance: getOwnerInstance,
        testComponent: testComponent,
        benchmark: benchmark,
        multiBenchmark: multiBenchmark,
        average: average,
        median: median,
        randomNumber: randomNumber,
        randomString: randomString,
        joinClasses: joinClasses$1,
        searchClassNameModules: searchClassNameModules,
        messageBox: messageBox,
        messages: index$7
    });

    const renderChangelogContent = (content) => {
      return /* @__PURE__ */ React$2.createElement(React$2.Fragment, null, Object.entries(content).map(([title, { type, items }]) => /* @__PURE__ */ React$2.createElement("div", {
        className: ChangelogModal.content
      }, /* @__PURE__ */ React$2.createElement("h1", {
        className: joinClasses$1(Changelog[type], Changelog.marginTop)
      }, title), /* @__PURE__ */ React$2.createElement("ul", null, items.map((item) => /* @__PURE__ */ React$2.createElement("li", null, /* @__PURE__ */ React$2.createElement(Markdown, null, item)))))));
    };
    const openChangelogModal = (changelog = settingsChangelog) => {
      const { changelog: settingsChangelog2, manifest: manifest2 } = config;
      ModalActions.openModal((props) => /* @__PURE__ */ React$2.createElement(Modal.ModalRoot, {
        ...props,
        size: Modal.ModalSize.SMALL,
        className: ChangelogModal.modal
      }, /* @__PURE__ */ React$2.createElement(Modal.ModalHeader, {
        separator: false
      }, /* @__PURE__ */ React$2.createElement(Flex, null, /* @__PURE__ */ React$2.createElement(Flex.Child, {
        grow: 1,
        shrink: 1
      }, /* @__PURE__ */ React$2.createElement(Heading, {
        variant: "heading-lg/medium"
      }, manifest2.name, " - ", manifest2.version), changelog.date && /* @__PURE__ */ React$2.createElement(Text, {
        className: Changelog.date,
        size: Text.Sizes.SIZE_12
      }, changelog.date)), /* @__PURE__ */ React$2.createElement(Modal.ModalCloseButton, {
        onClick: props.onClose
      }))), /* @__PURE__ */ React$2.createElement(Modal.ModalContent, null, changelog.image && /* @__PURE__ */ React$2.createElement("img", {
        className: Changelog.video,
        src: changelog.image,
        width: "451"
      }), renderChangelogContent(changelog.contents))));
    };
    const hasSeenChangelog = () => get(`__ittai_changelog_${manifest.version}`);
    const setSeenChangelog = (set$1) => set(`__ittai_changelog_${manifest.version}`, set$1);

    var index$5 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        renderChangelogContent: renderChangelogContent,
        openChangelogModal: openChangelogModal,
        hasSeenChangelog: hasSeenChangelog,
        setSeenChangelog: setSeenChangelog
    });

    var __defProp = Object.defineProperty;
    var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
    var __publicField = (obj, key, value) => {
      __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
      return value;
    };
    class Plugin {
      constructor() {
        __publicField(this, "friendlyName", manifest$1.name);
      }
      start() {
      }
      stop() {
      }
      setSettingsPanel(component) {
        this.__ittaiInternalPlugin.setSettingsPanel(component);
      }
      removeSettingsPanel() {
        this.__ittaiInternalPlugin.removeSettingsPanel();
      }
      log(...args) {
        log(...args);
      }
      debug(...args) {
        debug(...args);
      }
      warn(...args) {
        warn(...args);
      }
      error(...args) {
        error(...args);
      }
    }

    var index$4 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Plugin: Plugin
    });

    function before(name, object, functionName, patchFunction) {
      return patch(name, object, functionName, "before", patchFunction);
    }

    function instead(name, object, functionName, patchFunction) {
      return patch(name, object, functionName, "instead", patchFunction);
    }

    function after(name, object, functionName, patchFunction) {
      return patch(name, object, functionName, "after", patchFunction);
    }

    function unpatchAll(unpatches) {
      if (!Array.isArray(unpatches))
        unpatches = patches;
      for (const object of Object.values(unpatches)) {
        for (const funct of Object.values(object)) {
          for (const patch of funct.patches) {
            patch.unpatch();
          }
        }
      }
    }

    function patch(name, object, functionName, type, patchFunction) {
      const id = object.__ittai__ ?? randomString(25, Object.keys(patches));
      object.__ittai__ = object.__ittai__ ?? id;
      if (!patches[id])
        patches[id] = {};
      const patchData = {
        name,
        type,
        patchFunction,
        unpatch: function() {
          try {
            const patchIndex = patches[id][functionName].patches.indexOf(this);
            if (patchIndex === -1)
              throw "Couldn't find the patch. This probably happened because the object was tampered with. Don't do that.";
            patches[id][functionName].patches.splice(patchIndex, 1);
            if (patches[id][functionName].patches.length === 0) {
              object[functionName] = patches[id][functionName].original;
              delete patches[id][functionName];
            }
            if (!Object.keys(patches[id]).length) {
              delete patches[id];
            }
          } catch (e) {
            error(`Failed to unpatch ${name}.`, e);
          }
        }
      };
      if (!patches[id][functionName]) {
        patches[id][functionName] = {
          original: object[functionName],
          patches: []
        };
        const props = { ...object[functionName] };
        object[functionName] = function(...args) {
          const functionData = patches[id][functionName];
          const befores = functionData.patches.filter((p) => p.type === "before");
          const insteads = functionData.patches.filter((p) => p.type === "instead");
          const afters = functionData.patches.filter((p) => p.type === "after");
          for (const before of befores) {
            try {
              const callback = before.patchFunction(args, this);
              if (callback)
                args = callback;
            } catch (e) {
              error(`Error running before patch ${name}.`, e);
            }
          }
          let res = {};
          let ranOnce = false;
          if (insteads.length === 0) {
            res = functionData.original.call(this, ...args), ranOnce = true;
          } else {
            for (const instead of insteads) {
              try {
                res = globalThis._.merge(res, instead.patchFunction(args, this) ?? {}), ranOnce = true;
              } catch (e) {
                error(`Error running instead patch ${name}.`, e);
              }
            }
          }
          if (!ranOnce) {
            res = functionData.original.call(this, ...args);
          }
          for (const after of afters) {
            try {
              const callback = after.patchFunction(args, res, this);
              if (callback)
                res = callback;
            } catch (e) {
              error(`Error running after patch ${name}.`, e);
            }
          }
          return res;
        };
        Object.assign(object[functionName], props);
        object[functionName].toString = () => patches[id][functionName].original.toString();
      }
      patches[id][functionName].patches.push(patchData);
      return patchData;
    }

    let patches = [];

    var index$3 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        patches: patches,
        before: before,
        instead: instead,
        after: after,
        unpatchAll: unpatchAll,
        patch: patch
    });

    const MessageCreators = findByProps("createBotMessage");
    const MessageActions = findByProps("receiveMessage");
    const AvatarDefaults = findByProps("BOT_AVATARS");
    const DefaultMessage = {
      state: "SENT",
      author: addBotAuthor({
        avatar: { avatarId: "ittai", imageUrl: "https://cdn.discordapp.com/avatars/264062457448759296/1f9b1743cf625ca2d51ee517b5efd8a7.webp" },
        author: { username: "Ittai" }
      }),
      content: 'Hello! By the way, you forgot to add a `"content"` attribute to the message!'
    };
    function addBotAuthor({ avatar, author }) {
      const avatarId = avatar?.avatarId ?? randomString(10);
      if (AvatarDefaults?.BOT_AVATARS && !AvatarDefaults.BOT_AVATARS[avatarId]) {
        AvatarDefaults.BOT_AVATARS[avatarId] = avatar.imageUrl;
      }
      return {
        avatar: avatarId,
        id: author?.authorId ?? randomString(10),
        bot: true,
        discriminator: author?.discriminator ?? "0000",
        username: author?.username ?? "BotUser"
      };
    }
    function sendMessage(channelId, message) {
      MessageActions.receiveMessage(channelId, Object.assign({}, MessageCreators.createBotMessage(channelId, message?.content), DefaultMessage, message));
    }
    const BotMessage = { sendMessage, addBotAuthor };

    const CommandTypes = Object.assign({}, findByProps("ApplicationCommandType"), findByProps("ApplicationCommandPermissionType"));
    const CommandsModule = findByProps("BUILT_IN_COMMANDS");
    const ApplicationCommandDiscoveryApplicationIcon = findByDisplayName("ApplicationCommandDiscoveryApplicationIcon");
    let iconPatch;
    function patchIcons() {
      if (!iconPatch) {
        iconPatch = after("IttaiIconCommandPatch", ApplicationCommandDiscoveryApplicationIcon, "default", (args, res, _this) => {
          const props = findInReactTree(res, (n) => n.src);
          const section = findInTree(args, (n) => n.icon);
          if (!props || !section || props.src.indexOf(section.icon) > 0)
            return res;
          res.props.onClick = () => {
          };
          props.src = section.icon;
          return res;
        });
      }
    }
    function unpatchIcons() {
      iconPatch.unpatch();
      iconPatch = null;
    }
    const COMMAND_ARGUMENT_TYPES = {
      SUB_COMMAND: 1,
      SUB_COMMAND_GROUP: 2,
      STRING: 3,
      INTEGER: 4,
      BOOLEAN: 5,
      USER: 6,
      CHANNEL: 7,
      ROLE: 8
    };
    let registeredCommands = [];
    let registeredSections = [];
    function registerCommand(command) {
      patchIcons();
      const currentIDs = CommandsModule.BUILT_IN_COMMANDS.map(({ id }) => id);
      if (!command.id)
        command.id = randomString(10, currentIDs);
      if (currentIDs.indexOf(command.id) > -1)
        command.id += randomString(10, currentIDs);
      command.applicationId ??= "-1";
      command.execute ??= () => {
      };
      command.displayName ??= command.name;
      command.displayDescription ??= command.description;
      command.options.map((opts) => {
        opts.displayName ??= opts.name;
        opts.displayDescription ??= opts.description;
        return opts;
      });
      CommandsModule.BUILT_IN_COMMANDS.push(command);
      registeredCommands.push(command.id);
      return command.id;
    }
    function unregisterCommand(id) {
      CommandsModule.BUILT_IN_COMMANDS.splice(CommandsModule.BUILT_IN_COMMANDS.findIndex((command) => command.id === id), 1);
    }
    function unregisterAllCommands() {
      for (const command of registeredCommands) {
        unregisterCommand(command);
      }
    }
    function registerSection(section) {
      patchIcons();
      const currentIDs = CommandsModule.BUILT_IN_SECTIONS.map(({ id }) => id);
      if (!section.id)
        section.id = randomString(10, currentIDs);
      if (currentIDs.indexOf(section.id) > -1)
        section.id += randomString(10, currentIDs);
      section.isBuiltIn = false;
      CommandsModule.BUILT_IN_SECTIONS.push(section);
      registeredSections.push(section.id);
      return section.id;
    }
    function unregisterSection(id) {
      CommandsModule.BUILT_IN_COMMANDS.splice(CommandsModule.BUILT_IN_COMMANDS.findIndex((command) => command.id === id), 1);
    }
    function unregisterAllSections() {
      for (const command of registeredSections) {
        unregisterCommand(command);
      }
    }

    var index$2 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        CommandTypes: CommandTypes,
        patchIcons: patchIcons,
        unpatchIcons: unpatchIcons,
        COMMAND_ARGUMENT_TYPES: COMMAND_ARGUMENT_TYPES,
        registeredCommands: registeredCommands,
        registeredSections: registeredSections,
        registerCommand: registerCommand,
        unregisterCommand: unregisterCommand,
        unregisterAllCommands: unregisterAllCommands,
        registerSection: registerSection,
        unregisterSection: unregisterSection,
        unregisterAllSections: unregisterAllSections,
        botMessage: BotMessage
    });

    const Messages = findByProps("getMessage", "getMessages");
    const Channels = findByProps("getChannel", "getDMFromUserId");
    const CurrentChannels = findByProps("getChannelId", "getLastSelectedChannelId");
    const Guilds = findByProps("getGuild");
    const CurrentGuilds = findByProps("getGuildId", "getLastSelectedGuildId");
    const Info = findByProps("getSessionId");
    const Status = findByProps("getStatus", "getActivities", "getState");
    const Users = findByProps("getUser", "getCurrentUser");
    const UserSettings = findByProps("guildFolders", "theme");
    const UserProfile = findByProps("getUserProfile");
    const Members = findByProps("getMember");
    const Activities = findByProps("getStatus", "getActivities", "getState");
    const Games = findByProps("getGame", "games");
    const Auth = findByProps("getId", "isGuest");
    const TypingUsers = findByProps("isTyping");

    var index$1 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Messages: Messages,
        Channels: Channels,
        CurrentChannels: CurrentChannels,
        Guilds: Guilds,
        CurrentGuilds: CurrentGuilds,
        Info: Info,
        Status: Status,
        Users: Users,
        UserSettings: UserSettings,
        UserProfile: UserProfile,
        Members: Members,
        Activities: Activities,
        Games: Games,
        Auth: Auth,
        TypingUsers: TypingUsers
    });

    var e=[],t=[];function n(n,r){if(n&&"undefined"!=typeof document){var a,s=!0===r.prepend?"prepend":"append",d=!0===r.singleTag,i="string"==typeof r.container?document.querySelector(r.container):document.getElementsByTagName("head")[0];if(d){var u=e.indexOf(i);-1===u&&(u=e.push(i)-1,t[u]={}),a=t[u]&&t[u][s]?t[u][s]:t[u][s]=c();}else a=c();65279===n.charCodeAt(0)&&(n=n.substring(1)),a.styleSheet?a.styleSheet.cssText+=n:a.appendChild(document.createTextNode(n));}function c(){var e=document.createElement("style");if(e.setAttribute("type","text/css"),r.attributes)for(var t=Object.keys(r.attributes),n=0;n<t.length;n++)e.setAttribute(t[n],r.attributes[t[n]]);var a="prepend"===s?"afterbegin":"beforeend";return i.insertAdjacentElement(a,e),e}}

    var css$8 = ".DMFoldersToastWrapperToast {\r\n    background: var(--background-secondary-alt);\r\n    border-radius: 8px;\r\n    padding: 12px;\r\n    color: var(--header-primary);\r\n    font-weight: 600;\r\n}";
    var modules_8dd5f89c = {"toast":"DMFoldersToastWrapperToast"};
    n(css$8,{});
    var styles = modules_8dd5f89c;

    function GenericToast({
      children
    }) {
      return /* @__PURE__ */ React$2.createElement("div", {
        className: styles.toast
      }, children);
    }

    const { showToast, popToast } = findByProps("showToast");
    const show = (text, options) => {
      const toastID = options?.id ?? randomString(10);
      showToast({
        id: toastID,
        options: Object.assign({}, options, {
          position: POSITIONS.BOTTOM,
          component: typeof text !== "function" ? /* @__PURE__ */ React$2.createElement(GenericToast, null, text) : text()
        })
      });
      return toastID;
    };
    const pop = (id) => popToast(id);
    const ToastWrapper = GenericToast;
    const POSITIONS = {
      TOP: 0,
      BOTTOM: 1
    };

    var index = /*#__PURE__*/Object.freeze({
        __proto__: null,
        show: show,
        pop: pop,
        ToastWrapper: ToastWrapper,
        POSITIONS: POSITIONS
    });

    var Ittai = /*#__PURE__*/Object.freeze({
        __proto__: null,
        changelog: index$5,
        components: index$9,
        commands: index$2,
        entities: index$4,
        logger: index$8,
        patcher: index$3,
        settings: index$a,
        stores: index$1,
        toast: index,
        utilities: index$6,
        webpack: webpack
    });

    const getAll = () => {
      return get("pinnedCategories", {});
    };
    const getCategories = () => {
      const pinnedCategories = Object.keys(getAll());
      return pinnedCategories;
    };
    const getCategory = (category) => {
      return getAll()[category];
    };
    const setRaw = (setting) => {
      set("pinnedCategories", setting);
      Dispatcher.dirtyDispatch({ type: "PINDMS_CHANGE_LIST" });
    };
    const addCategory = (category, settings2 = {
      color: ColorUtils.int2hex(Constants.DEFAULT_ROLE_COLOR),
      users: [],
      show: true
    }) => {
      let pinnedCategories = getAll();
      pinnedCategories[category] = settings2;
      setRaw(pinnedCategories);
    };
    const setColor = (category, color) => {
      let pinnedCategories = getAll();
      if (pinnedCategories[category] == null)
        throw new Error(`Category ${category} does not exist`);
      pinnedCategories[category].color = color;
      setRaw(pinnedCategories);
    };
    const getColor = (category) => {
      let pinnedCategories = getAll();
      if (pinnedCategories[category] == null)
        throw new Error(`Category ${category} does not exist`);
      return pinnedCategories[category].color;
    };
    const setVisibility = (category, visibility) => {
      let pinnedCategories = getAll();
      if (pinnedCategories[category] == null)
        throw new Error(`Category ${category} does not exist`);
      pinnedCategories[category].show = visibility;
      setRaw(pinnedCategories);
    };
    const getVisibility = (category) => {
      let pinnedCategories = getAll();
      if (pinnedCategories[category] == null)
        throw new Error(`Category ${category} does not exist`);
      return pinnedCategories[category].show ?? true;
    };
    const renameCategory = (oldCategoryName, newCategoryName) => {
      let pinnedCategories = getAll();
      Object.defineProperty(pinnedCategories, newCategoryName, Object.getOwnPropertyDescriptor(pinnedCategories, oldCategoryName));
      delete pinnedCategories[oldCategoryName];
      setRaw(pinnedCategories);
    };
    const removeCategory = (category) => {
      let pinnedCategories = getAll();
      if (pinnedCategories[category] == null)
        throw new Error(`Category ${category} does not exist`);
      delete pinnedCategories[category];
      setRaw(pinnedCategories);
    };
    const getUsers = (category) => {
      const pinnedCategories = getAll();
      if (pinnedCategories[category] == null)
        throw new Error(`Category ${category} does not exist`);
      return pinnedCategories[category].users;
    };
    const setUserList = (category, userList) => {
      let pinnedCategories = getAll();
      pinnedCategories[category].users = userList;
      setRaw(pinnedCategories);
    };
    const addUser = (category, userID) => {
      if (typeof userID !== "string")
        throw new Error(`Invalid User ID`);
      let pinnedCategories = getAll();
      if (pinnedCategories[category] == null)
        throw new Error(`Category ${category} does not exist`);
      let userList = pinnedCategories[category].users;
      userList.push(userID);
      setUserList(category, userList);
    };
    const removeUser = (category, userID) => {
      if (typeof userID !== "string")
        throw new Error(`Invalid User ID`);
      let pinnedCategories = getAll();
      if (pinnedCategories[category] == null)
        throw new Error(`Category ${category} does not exist`);
      let userList = pinnedCategories[category].users;
      userList = userList.filter((user) => user !== userID);
      setUserList(category, userList);
    };
    const isUserAdded = (userID) => {
      return Object.values(getAll()).some(({ users }) => users.includes(userID));
    };
    const getUserCategory = (userID) => {
      const pinnedCategories = getAll();
      for (const categoryName in pinnedCategories) {
        const category = pinnedCategories[categoryName];
        if (category.users.some((user) => user === userID))
          return categoryName;
      }
    };
    const useListUpdate = () => {
      const [, forceUpdate] = React$2.useReducer((n) => !n, true);
      React$2.useEffect(() => {
        const listener = () => void forceUpdate();
        Dispatcher.subscribe("PINDMS_CHANGE_LIST", listener);
        return () => Dispatcher.unsubscribe("PINDMS_CHANGE_LIST", listener);
      }, []);
    };
    var pinnedDMS = {
      getAll,
      getCategories,
      getCategory,
      setRaw,
      addCategory,
      renameCategory,
      removeCategory,
      getColor,
      setColor,
      getVisibility,
      setVisibility,
      setUserList,
      addUser,
      getUsers,
      removeUser,
      isUserAdded,
      getUserCategory,
      useListUpdate
    };

    function moveObjectKey(object, from, to) {
      if (typeof from === "string") {
        from = Object.keys(object).findIndex((key) => key === from);
      }
      const changedOrder = moveArray(Object.entries(object), from, to);
      const newObj = changedOrder.reduce((acc, [key, value]) => {
        acc[key] = value;
        return acc;
      }, {});
      return newObj;
    }
    function moveArray(arr, from, to) {
      let safeArr = arr;
      safeArr.splice(to, 0, safeArr.splice(from, 1)[0]);
      return safeArr;
    }

    const PrivateChannelsHeaderContainer = findByProps("privateChannelRecipientsInviteButtonIcon");
    const DMButtons = findByProps("channel", "linkButtonIcon");
    const Category = findByProps("addButtonIcon", "containerDragAfter");
    const Interactives = findByProps("interactive", "muted");
    const DeleteAccountButtonRow = findByProps("buttonContainer", "description", "disableButton");
    const Names = findByProps("nameAndDecorators");
    const Scrolling = findByProps("scrolling", "scrollerBase");
    const ServerMembers = findByProps("ui-scroller-wrap");
    const AccountControlButtons = findByProps("button", "disabled", "enabled");
    const ColorPicker = findByProps("custom", "customColorPickerInput", "colorPickerRow");
    const Margins = findByProps("marginLarge", "marginTop20");
    var classes = {
      PrivateChannelsHeaderContainer,
      DMButtons,
      ServerMembers,
      AccountControlButtons,
      ColorPicker,
      Margins,
      Scrolling,
      DeleteAccountButtonRow,
      Names,
      Interactives,
      Category
    };

    var css$7 = ".DMFoldersUserWrapper {\n  padding: 16px 10px;\n  margin: 0 12px;\n}";
    var modules_aba8aa42 = {"wrapper":"DMFoldersUserWrapper"};
    n(css$7,{});

    var joinClasses = (...classes) => classes.filter((s) => typeof s === "string").join(" ");

    const { React: React$1, React: {
      useState,
      useEffect
    } } = webpack;
    function User$1({ id, onMove, onRemove, disableUp = false, disableDown = false }) {
      const [user, setUser] = useState();
      useEffect(() => {
        const user2 = Users.getUser(id);
        if (!user2)
          throw new Error("User not found");
        setUser(Users.getUser(id));
      });
      return /* @__PURE__ */ React$1.createElement(Flex, {
        align: Flex.Align.CENTER,
        className: joinClasses(classes.ServerMembers.member, modules_aba8aa42.wrapper)
      }, /* @__PURE__ */ React$1.createElement("div", {
        className: classes.ServerMembers.avatar
      }, /* @__PURE__ */ React$1.createElement(Avatar, {
        src: user?.getAvatarURL(false, true)?.replace("?size=16", ""),
        size: Avatar.Sizes.SIZE_40
      })), /* @__PURE__ */ React$1.createElement("div", {
        className: classes.ServerMembers.nameTag,
        style: { marginRight: "auto" }
      }, /* @__PURE__ */ React$1.createElement("div", {
        className: classes.ServerMembers.name
      }, user?.username), /* @__PURE__ */ React$1.createElement(Text, {
        color: Text.Colors.MUTED,
        size: Text.Sizes.SIZE_14
      }, "@", user?.username, "#", user?.discriminator)), /* @__PURE__ */ React$1.createElement(Flex, {
        direction: Flex.Direction.VERTICAL,
        grow: 0,
        shrink: 0
      }, /* @__PURE__ */ React$1.createElement(Button, {
        size: Button.Sizes.ICON,
        onClick: () => onMove("up"),
        disabled: disableUp,
        look: Button.Looks.BLANK,
        className: [
          classes.AccountControlButtons.button,
          disableUp ? classes.AccountControlButtons.disabled : classes.AccountControlButtons.enabled
        ].join(" ")
      }, /* @__PURE__ */ React$1.createElement(DiscordIcon, {
        name: "ArrowDropUp"
      })), /* @__PURE__ */ React$1.createElement(Button, {
        size: Button.Sizes.ICON,
        onClick: () => onMove("down"),
        disabled: disableDown,
        look: Button.Looks.BLANK,
        className: [
          classes.AccountControlButtons.button,
          disableDown ? classes.AccountControlButtons.disabled : classes.AccountControlButtons.enabled
        ].join(" ")
      }, /* @__PURE__ */ React$1.createElement(DiscordIcon, {
        name: "ArrowDropDown"
      }))), /* @__PURE__ */ React$1.createElement(TooltipContainer, {
        text: "Delete"
      }, /* @__PURE__ */ React$1.createElement(Button, {
        size: Button.Sizes.ICON,
        color: Button.Colors.RED,
        onClick: onRemove,
        look: Button.Looks.LINK
      }, /* @__PURE__ */ React$1.createElement(DiscordIcon, {
        name: "Trash"
      }))));
    }

    const CategoryView = {
      settingsValue: "category"
    };
    const MinimalistView = {
      settingsValue: "minimalist",
      userIcons: true
    };
    var settings = {
      DefaultSettings: {
        DISPLAY_MODE: CategoryView.settingsValue,
        MinimalistView,
        CategoryView,
        PIN_ICON: true,
        STREAMER_MODE: true
      }
    };

    const DISPATCHER_PINDMS_CHANGE_LIST = "PINDMS_CHANGE_LIST";

    var css$6 = ".DMFoldersCategorySettingsModalNamingColorWrapper {\n  margin-bottom: 8px;\n}\n\n.DMFoldersCategorySettingsModalTextbox {\n  width: 100%;\n}\n\n.DMFoldersCategorySettingsModalProperSpacing li {\n  margin-left: 16px;\n}";
    var modules_6694d3dd = {"namingColorWrapper":"DMFoldersCategorySettingsModalNamingColorWrapper","textbox":"DMFoldersCategorySettingsModalTextbox","properSpacing":"DMFoldersCategorySettingsModalProperSpacing"};
    n(css$6,{});

    class ErrorBoundary extends React$2.Component {
      constructor() {
        super(...arguments);
        this.state = { hasError: false };
      }
      componentDidCatch() {
      }
      static getDerivedStateFromError() {
        return { hasError: true };
      }
      render() {
        if (this.state.hasError)
          return Boolean(this.props.renderError) ? this.props.renderError : null;
        return this.props.children;
      }
    }

    findByProps("DefaultColorButton");
    function ChangeCategoryNameModal(modalProps) {
      const [newName, setNewName] = React$2.useState(modalProps.category);
      const [newColor, setNewColor] = React$2.useState(pinnedDMS.getColor(modalProps.category));
      return /* @__PURE__ */ React$2.createElement(Modal.ModalRoot, {
        size: Modal.ModalSize.DYNAMIC,
        ...modalProps
      }, /* @__PURE__ */ React$2.createElement(Modal.ModalHeader, {
        separator: false
      }, /* @__PURE__ */ React$2.createElement(TextInput, {
        value: newName,
        onChange: setNewName,
        placeholder: "Rename",
        className: modules_6694d3dd.textbox
      })), /* @__PURE__ */ React$2.createElement(Modal.ModalContent, null, /* @__PURE__ */ React$2.createElement(Forms.FormItem, null, /* @__PURE__ */ React$2.createElement(Forms.FormTitle, null, "Color"), /* @__PURE__ */ React$2.createElement("div", {
        className: classes.Margins.marginBottom20
      }, /* @__PURE__ */ React$2.createElement(ErrorBoundary, {
        renderError: /* @__PURE__ */ React$2.createElement(Text, {
          color: Text.Colors.ERROR
        }, "An error happened while trying to load the ColorPicker. Check ", /* @__PURE__ */ React$2.createElement(Anchor, {
          href: "https://git.catvibers.me/Ittai/ittai/issues/9"
        }, "https://git.catvibers.me/Ittai/ittai/issues/9"), " for more information about.", /* @__PURE__ */ React$2.createElement("br", null), /* @__PURE__ */ React$2.createElement("br", null), "As of now, you can do these steps:", /* @__PURE__ */ React$2.createElement("ul", {
          className: modules_6694d3dd.properSpacing
        }, /* @__PURE__ */ React$2.createElement("li", null, "- Remove the plugin from the plugins folder"), /* @__PURE__ */ React$2.createElement("li", null, "- Go to any server's settings"), /* @__PURE__ */ React$2.createElement("li", null, '- Go to "Roles"'), /* @__PURE__ */ React$2.createElement("li", null, "- Click on any role"), /* @__PURE__ */ React$2.createElement("li", null, "- Put the plugin back")), "This will load the ColorPicker component and then fix this error")
      }, /* @__PURE__ */ React$2.createElement(ColorPicker$1, {
        colors: Constants.ROLE_COLORS,
        defaultColor: Constants.DEFAULT_ROLE_COLOR,
        value: ColorUtils.hex2int(newColor),
        onChange: (c) => setNewColor(ColorUtils.int2hex(c))
      }))), /* @__PURE__ */ React$2.createElement(SwitchItem, {
        value: !pinnedDMS.getVisibility(modalProps.category),
        onChange: (e) => pinnedDMS.setVisibility(modalProps.category, !e),
        disabled: get("display", settings.DefaultSettings.DISPLAY_MODE) === settings.DefaultSettings.MinimalistView.settingsValue,
        note: get("display", settings.DefaultSettings.DISPLAY_MODE) && "Disabled because it is using the Minimalist view"
      }, "Hide contents"))), /* @__PURE__ */ React$2.createElement(Modal.ModalFooter, null, /* @__PURE__ */ React$2.createElement(Button, {
        onClick: () => {
          if (modalProps.category !== newName)
            pinnedDMS.renameCategory(modalProps.category, newName);
          pinnedDMS.setColor(modalProps.category, newColor);
          modalProps.onClose();
        }
      }, "Save"), /* @__PURE__ */ React$2.createElement(Button, {
        look: Button.Looks.LINK,
        color: Button.Colors.WHITE,
        onClick: modalProps.onClose
      }, "Cancel")));
    }

    var css$5 = ".DMFoldersIndexCreateCategory {\n  gap: 10px;\n}\n.DMFoldersIndexCreateCategory .DMFoldersIndexTextbox {\n  flex-grow: 2;\n}\n\n.DMFoldersIndexDropdownArrow {\n  width: 16px !important;\n  height: 16px !important;\n  margin-right: 4px;\n}\n.DMFoldersIndexDropdownArrow.DMFoldersIndexHidden {\n  transform: rotate(-90deg);\n}\n\n.DMFoldersIndexExampleListSectionItem {\n  padding: 0;\n  width: auto;\n  flex: unset;\n  margin-right: 10px;\n  cursor: pointer;\n}\n\n.DMFoldersIndexUserList {\n  background: var(--background-secondary-alt);\n  margin-top: 10px;\n  padding-bottom: 20px;\n  border-radius: 8px;\n  overflow: hidden auto;\n  max-height: 40vh;\n  position: relative;\n}\n.DMFoldersIndexUserList .DMFoldersIndexEmpty {\n  margin-top: 20px;\n}";
    var modules_95a24927 = {"createCategory":"DMFoldersIndexCreateCategory","textbox":"DMFoldersIndexTextbox","dropdownArrow":"DMFoldersIndexDropdownArrow","hidden":"DMFoldersIndexHidden","exampleListSectionItem":"DMFoldersIndexExampleListSectionItem","userList":"DMFoldersIndexUserList","empty":"DMFoldersIndexEmpty"};
    n(css$5,{});

    var css$4 = ".DMFoldersAddUserModalUserGrid {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 8px;\n  margin-bottom: 16px;\n}\n.DMFoldersAddUserModalUserGrid .DMFoldersAddUserModalUser {\n  gap: 4px;\n  border-radius: 4px;\n  padding: 4px;\n  cursor: pointer;\n}\n.DMFoldersAddUserModalUserGrid .DMFoldersAddUserModalUser:hover {\n  background: var(--background-modifier-hover);\n}\n.DMFoldersAddUserModalUserGrid .DMFoldersAddUserModalUser.DMFoldersAddUserModalDisabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.DMFoldersAddUserModalUserGrid .DMFoldersAddUserModalUser .DMFoldersAddUserModalName {\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n}";
    var modules_0c3e6820 = {"userGrid":"DMFoldersAddUserModalUserGrid","user":"DMFoldersAddUserModalUser","disabled":"DMFoldersAddUserModalDisabled","name":"DMFoldersAddUserModalName"};
    n(css$4,{});

    var limit = (array, limit = 50, from = 0) => array.slice(from, from + limit);

    const dmUsers = Channels.getSortedPrivateChannels().filter((channel) => channel.recipients.length === 1 && channel.recipients[0] != null).map((channel) => Users.getUser(channel.recipients[0]));
    const MAX_USER_DISPLAY = 60;
    function AddUserModal(props) {
      const [users, setUsers] = React$2.useState([]);
      const [search, setSearch] = React$2.useState("");
      React$2.useEffect(() => {
        const searchResult = dmUsers.filter((user) => !user.bot && ~user.username.toLowerCase().indexOf(search.toLowerCase()));
        const limitedResult = limit(searchResult, MAX_USER_DISPLAY);
        setUsers(limitedResult);
      }, [search]);
      return /* @__PURE__ */ React$2.createElement(Modal.ModalRoot, {
        size: Modal.ModalSize.DYNAMIC,
        ...props
      }, /* @__PURE__ */ React$2.createElement(Modal.ModalHeader, {
        separator: false
      }, /* @__PURE__ */ React$2.createElement(TextInput, {
        value: search,
        onChange: setSearch,
        placeholder: "Search for user",
        className: modules_6694d3dd.textbox
      })), /* @__PURE__ */ React$2.createElement(Modal.ModalContent, null, /* @__PURE__ */ React$2.createElement("div", {
        className: modules_0c3e6820.userGrid
      }, users.map((user) => /* @__PURE__ */ React$2.createElement(User, {
        user,
        onClick: () => {
          props.onSelect(user);
          props.onClose();
        }
      })))));
    }
    const User = ({ user, onClick }) => {
      const isAdded = pinnedDMS.isUserAdded(user.id);
      return /* @__PURE__ */ React$2.createElement(Flex, {
        align: Flex.Align.CENTER,
        className: joinClasses(modules_0c3e6820.user, isAdded ? modules_0c3e6820.disabled : ""),
        onClick: () => {
          if (!isAdded)
            onClick?.();
        }
      }, /* @__PURE__ */ React$2.createElement(Avatar, {
        src: user.getAvatarURL(false, false),
        size: Avatar.Sizes.SIZE_16
      }), /* @__PURE__ */ React$2.createElement(Text, {
        color: Text.Colors.STANDARD,
        className: modules_0c3e6820.name
      }, user.username));
    };

    const ListSectionItem$1 = findByDisplayName("ListSectionItem");
    const { EmptyStateImage: EmptyStateImage$1, default: EmptyState$1, EmptyStateText: EmptyStateText$1 } = findByProps("EmptyStateImage");
    function UserListSettings({ openedCategory, showAddCategoryButton = true }) {
      useListUpdate();
      return /* @__PURE__ */ React$2.createElement(React$2.Fragment, null, showAddCategoryButton && /* @__PURE__ */ React$2.createElement(CreateCategory, null), Object.entries(pinnedDMS.getAll()).map(([category, { users }], index) => /* @__PURE__ */ React$2.createElement(UserCategory, {
        name: category,
        users,
        index,
        hidden: category !== openedCategory
      })));
    }
    const CreateCategory = () => {
      const [newCategory, setNewCategory] = React$2.useState("");
      const [error, setError] = React$2.useState("");
      return /* @__PURE__ */ React$2.createElement(Flex, {
        className: modules_95a24927.createCategory,
        align: Flex.Align.CENTER
      }, /* @__PURE__ */ React$2.createElement(TextInput, {
        className: modules_95a24927.textbox,
        value: newCategory,
        placeholder: "Name a new category",
        onChange: (e) => setNewCategory(e),
        error
      }), /* @__PURE__ */ React$2.createElement(Button, {
        onClick: () => {
          if (newCategory == "")
            setError("Please give a name");
          else {
            setError("");
            pinnedDMS.addCategory(newCategory);
          }
        }
      }, "Add"));
    };
    const UserCategory = ({ name, users, index, hidden = true }) => {
      const [hide, setHide] = React$2.useState(hidden);
      return /* @__PURE__ */ React$2.createElement("div", {
        key: name,
        className: modules_95a24927.category
      }, /* @__PURE__ */ React$2.createElement(CategoryHeader, {
        ...{ name, index },
        onHide: () => setHide(!hide),
        hidden: hide
      }), !hide && /* @__PURE__ */ React$2.createElement("div", {
        className: joinClasses(modules_95a24927.userList, classes.Scrolling.scrollerBase, classes.Scrolling.thin, classes.Scrolling.fade)
      }, users.length !== 0 ? users.map((id, index2) => /* @__PURE__ */ React$2.createElement(User$1, {
        id,
        onMove: (updn) => pinnedDMS.setUserList(name, moveArray(users, index2, index2 - (updn === "up" ? 1 : -1))),
        onRemove: () => pinnedDMS.removeUser(name, id),
        disableUp: index2 === 0,
        disableDown: index2 === users.length - 1
      })) : /* @__PURE__ */ React$2.createElement(React$2.Fragment, null, Math.floor(Math.random() * 20) === 3 ? /* @__PURE__ */ React$2.createElement("iframe", {
        width: "560",
        height: "315",
        src: "https://www.youtube-nocookie.com/embed/tjs2xR2RZp0?controls=0",
        allow: "clipboard-write; encrypted-media"
      }) : /* @__PURE__ */ React$2.createElement("div", {
        className: modules_95a24927.empty
      }, /* @__PURE__ */ React$2.createElement(EmptyState$1, {
        theme: UserSettings.theme
      }, /* @__PURE__ */ React$2.createElement(EmptyStateImage$1, {
        ...{
          "width": 376,
          "height": 162,
          "lightSrc": "/assets/02625ee29f851ec588c2020a88d82665.svg",
          "darkSrc": "/assets/b5eb2f7d6b3f8cc9b60be4a5dcf28015.svg"
        }
      }), /* @__PURE__ */ React$2.createElement(EmptyStateText$1, {
        note: /* @__PURE__ */ React$2.createElement(React$2.Fragment, null, "This category is empty. Oh nevermind, there is Wumpus, but he is alone.")
      }))))));
    };
    const CategoryHeader = ({ name, index, hidden = false, onHide }) => {
      const handleCategoryPos = (updn) => {
        const index2 = Object.keys(pinnedDMS.getAll()).findIndex((k) => k === name);
        pinnedDMS.setRaw(moveObjectKey(pinnedDMS.getAll(), index2, index2 - updn));
      };
      return /* @__PURE__ */ React$2.createElement(Flex, {
        align: Flex.Align.CENTER
      }, /* @__PURE__ */ React$2.createElement(ListSectionItem$1, {
        className: joinClasses(classes.PrivateChannelsHeaderContainer.privateChannelsHeaderContainer, modules_95a24927.exampleListSectionItem)
      }, /* @__PURE__ */ React$2.createElement(Flex, {
        style: { color: pinnedDMS.getColor(name), fontWeight: "bold" },
        align: Flex.Align.CENTER,
        onClick: onHide
      }, /* @__PURE__ */ React$2.createElement(DiscordIcon, {
        name: "DropdownArrow",
        className: joinClasses(modules_95a24927.dropdownArrow, hidden ? modules_95a24927.hidden : void 0)
      }), name)), /* @__PURE__ */ React$2.createElement(Popout, {
        position: Popout.Positions.BOTTOM,
        renderPopout: (props) => /* @__PURE__ */ React$2.createElement("div", {
          ...props
        }, /* @__PURE__ */ React$2.createElement(ChangeCategoryNameModal, {
          transitionState: 1,
          onClose: props.closePopout,
          category: name
        }))
      }, (popout) => /* @__PURE__ */ React$2.createElement(TooltipContainer, {
        text: "Edit category"
      }, /* @__PURE__ */ React$2.createElement(Button, {
        ...popout,
        size: Button.Sizes.ICON,
        look: Button.Looks.BLANK,
        className: joinClasses(classes.AccountControlButtons.button, classes.AccountControlButtons.enabled)
      }, /* @__PURE__ */ React$2.createElement(DiscordIcon, {
        name: "Pencil",
        style: { width: "20px", height: "20px" }
      })))), /* @__PURE__ */ React$2.createElement("div", {
        style: { marginRight: "auto" }
      }), /* @__PURE__ */ React$2.createElement(Popout, {
        position: Popout.Positions.LEFT,
        renderPopout: (props) => /* @__PURE__ */ React$2.createElement("div", {
          ...props
        }, /* @__PURE__ */ React$2.createElement(AddUserModal, {
          transitionState: 1,
          onClose: props.closePopout,
          onSelect: (user) => {
            if (user.id != null)
              pinnedDMS.addUser(name, user.id);
          }
        }))
      }, (popout) => /* @__PURE__ */ React$2.createElement(TooltipContainer, {
        text: "Add a new person"
      }, /* @__PURE__ */ React$2.createElement(Button, {
        ...popout,
        size: Button.Sizes.ICON,
        look: Button.Looks.BLANK,
        className: joinClasses(classes.AccountControlButtons.button, classes.AccountControlButtons.enabled)
      }, /* @__PURE__ */ React$2.createElement(DiscordIcon, {
        name: "PersonAdd",
        style: { width: "20px", height: "20px" }
      })))), /* @__PURE__ */ React$2.createElement(Flex, {
        direction: Flex.Direction.VERTICAL,
        grow: 0,
        shrink: 0
      }, /* @__PURE__ */ React$2.createElement(Button, {
        size: Button.Sizes.ICON,
        onClick: () => handleCategoryPos(1),
        disabled: index === 0,
        look: Button.Looks.BLANK,
        className: joinClasses(classes.AccountControlButtons.button, index === 0 ? classes.AccountControlButtons.disabled : classes.AccountControlButtons.enabled)
      }, /* @__PURE__ */ React$2.createElement(DiscordIcon, {
        name: "ArrowDropUp"
      })), /* @__PURE__ */ React$2.createElement(Button, {
        size: Button.Sizes.ICON,
        onClick: () => handleCategoryPos(-1),
        disabled: index === pinnedDMS.getCategories().length - 1,
        look: Button.Looks.BLANK,
        className: joinClasses(classes.AccountControlButtons.button, index === pinnedDMS.getCategories().length - 1 ? classes.AccountControlButtons.disabled : classes.AccountControlButtons.enabled)
      }, /* @__PURE__ */ React$2.createElement(DiscordIcon, {
        name: "ArrowDropDown"
      }))), /* @__PURE__ */ React$2.createElement(TooltipContainer, {
        text: "Delete"
      }, /* @__PURE__ */ React$2.createElement(Button, {
        size: Button.Sizes.ICON,
        color: Button.Colors.RED,
        onClick: () => pinnedDMS.removeCategory(name),
        look: Button.Looks.LINK
      }, /* @__PURE__ */ React$2.createElement(DiscordIcon, {
        name: "Trash"
      }))));
    };

    var css$3 = ".DMFoldersSettingsButtonFlex {\n  gap: 16px;\n}";
    var modules_e2937a4a = {"buttonFlex":"DMFoldersSettingsButtonFlex"};
    n(css$3,{});

    var isValidJSON = (json) => {
      try {
        JSON.parse(json);
        return true;
      } catch (e) {
      }
      return false;
    };

    function Settings() {
      const [, forceUpdate] = React$2.useReducer((v) => !v, false);
      return /* @__PURE__ */ React$2.createElement(React$2.Fragment, null, /* @__PURE__ */ React$2.createElement(Category$1, {
        title: "Listed categories",
        description: "Configure the folders and add or change the listed users",
        icon: "Person"
      }, /* @__PURE__ */ React$2.createElement(UserListSettings, null)), /* @__PURE__ */ React$2.createElement(Category$1, {
        title: "Other settings",
        description: "Other settings that you can tweak",
        icon: "Gear"
      }, /* @__PURE__ */ React$2.createElement(Forms.FormSection, null, /* @__PURE__ */ React$2.createElement(Forms.FormItem, null, /* @__PURE__ */ React$2.createElement(Forms.FormTitle, null, "Display mode"), /* @__PURE__ */ React$2.createElement(RadioGroup, {
        options: [
          { name: "Category", value: settings.DefaultSettings.CategoryView.settingsValue },
          { name: "Minimalist", value: settings.DefaultSettings.MinimalistView.settingsValue }
        ],
        value: get("display", settings.DefaultSettings.DISPLAY_MODE),
        onChange: (v) => {
          set("display", v.value);
          Dispatcher.dirtyDispatch({ type: DISPATCHER_PINDMS_CHANGE_LIST });
          forceUpdate();
        }
      }), /* @__PURE__ */ React$2.createElement(Forms.FormDivider, {
        className: joinClasses(classes.Margins.marginBottom20, classes.Margins.marginTop20)
      })), get("display", settings.DefaultSettings.DISPLAY_MODE) === settings.DefaultSettings.MinimalistView.settingsValue && /* @__PURE__ */ React$2.createElement(Category$1, {
        title: "Minimalist view settings",
        description: "Additional configuration for the Minimalist View"
      }, /* @__PURE__ */ React$2.createElement(SwitchItem, {
        value: get("minimal.userIcons", settings.DefaultSettings.MinimalistView.userIcons),
        onChange: (e) => {
          set("minimal.userIcons", e);
          Dispatcher.dirtyDispatch({ type: DISPATCHER_PINDMS_CHANGE_LIST });
        }
      }, "Show user icons")), /* @__PURE__ */ React$2.createElement(SwitchItem, {
        value: get("pinIcon", settings.DefaultSettings.PIN_ICON),
        onChange: (e) => set("pinIcon", e),
        note: "Adds an pin icon to the user so you can add it quickly to a category"
      }, "Add a quick shortcut to add people on categories"), /* @__PURE__ */ React$2.createElement(SwitchItem, {
        value: get("streamerMode", settings.DefaultSettings.STREAMER_MODE),
        onChange: (e) => set("streamerMode", e),
        note: "When Streamer mode is enabled, it will automatically hide the categories"
      }, "Hide users when Streamer mode is enabled"), /* @__PURE__ */ React$2.createElement(Forms.FormItem, null, /* @__PURE__ */ React$2.createElement(Forms.FormTitle, null, "Export and import settings"), /* @__PURE__ */ React$2.createElement(Flex, {
        className: modules_e2937a4a.buttonFlex
      }, /* @__PURE__ */ React$2.createElement(Button, {
        onClick: handleExport
      }, "Export"), /* @__PURE__ */ React$2.createElement(Button, {
        color: Button.Colors.RED,
        onClick: handleImport
      }, "Import"))))));
    }
    const handleExport = async () => {
      return DiscordNative.fileManager.saveWithDialog(JSON.stringify(getAll$1()), "settings.json");
    };
    const handleImport = async () => {
      const [selectedFile] = await DiscordNative.fileManager.openFiles("*.json");
      const newSettingsText = new TextDecoder().decode(new Uint8Array(selectedFile.data));
      if (!isValidJSON(newSettingsText))
        return void show('Invalid settings file. It should end with ".json".', {
          duration: 5e3
        });
      const newSettings = JSON.parse(newSettingsText);
      const overrideSettings = () => {
        reset();
        setAll(newSettings);
      };
      ModalActions.openModal((props) => /* @__PURE__ */ React$2.createElement(Modal.ModalRoot, {
        ...props,
        size: Modal.ModalSize.SMALL
      }, /* @__PURE__ */ React$2.createElement(Modal.ModalHeader, {
        separator: false
      }, /* @__PURE__ */ React$2.createElement(Heading, {
        variant: "heading-lg/medium"
      }, "Save a backup")), /* @__PURE__ */ React$2.createElement(Modal.ModalContent, null, /* @__PURE__ */ React$2.createElement(Text, null, "Do you want to save a backup?")), /* @__PURE__ */ React$2.createElement(Modal.ModalFooter, null, /* @__PURE__ */ React$2.createElement(Flex, {
        style: { gap: "8px" },
        justify: Flex.Justify.END
      }, /* @__PURE__ */ React$2.createElement(Button, {
        look: Button.Looks.LINK,
        color: Button.Colors.WHITE,
        onClick: props.onClose
      }, "Cancel"), /* @__PURE__ */ React$2.createElement(Button, {
        look: Button.Looks.LINK,
        color: Button.Colors.RED,
        onClick: () => {
          overrideSettings();
          props.onClose();
        }
      }, "Override without saving"), /* @__PURE__ */ React$2.createElement(Button, {
        onClick: async () => {
          await handleExport();
          overrideSettings();
          props.onClose();
        }
      }, "Save")))));
    };

    var css$2 = ".DMFoldersDmlistCategoryViewWrapper {\n  opacity: 0.7;\n}\n.DMFoldersDmlistCategoryViewWrapper:hover {\n  opacity: 1;\n}\n.DMFoldersDmlistCategoryViewWrapper:hover .DMFoldersDmlistIcon, .DMFoldersDmlistCategoryViewWrapper:hover .DMFoldersDmlistName {\n  color: unset;\n}\n.DMFoldersDmlistCategoryViewWrapper:not(.DMFoldersDmlistOpen) .DMFoldersDmlistIcon {\n  transform: rotate(-90deg);\n}\n\n.DMFoldersDmlistWrapper {\n  margin: 4px 0;\n  margin-left: 8px;\n  padding: 4px 0;\n  border-top: 1px solid var(--background-modifier-accent);\n  border-bottom: 1px solid var(--background-modifier-accent);\n}\n.DMFoldersDmlistWrapper > * {\n  margin-left: 0;\n}\n\n.DMFoldersDmlistMinimalisticPopout {\n  padding: 16px;\n  padding-left: 8px;\n  background: var(--background-tertiary);\n  min-width: 224px;\n}\n\n.DMFoldersDmlistMinimalisticView {\n  padding-top: 4px;\n  padding-bottom: 4px;\n  display: flex;\n  width: 100%;\n}\n.DMFoldersDmlistMinimalisticView .DMFoldersDmlistNameAndUsers {\n  gap: 4px;\n  flex-grow: 2 !important;\n}\n.DMFoldersDmlistMinimalisticView .DMFoldersDmlistNameAndUsers span {\n  opacity: 0.7;\n}";
    var modules_e82b6e90 = {"categoryViewWrapper":"DMFoldersDmlistCategoryViewWrapper","icon":"DMFoldersDmlistIcon","name":"DMFoldersDmlistName","open":"DMFoldersDmlistOpen","wrapper":"DMFoldersDmlistWrapper","minimalisticPopout":"DMFoldersDmlistMinimalisticPopout","minimalisticView":"DMFoldersDmlistMinimalisticView","nameAndUsers":"DMFoldersDmlistNameAndUsers"};
    n(css$2,{});

    var openCategorySettings = (openedCategory) => {
      ModalActions.openModal((props) => /* @__PURE__ */ React$2.createElement(Modal.ModalRoot, {
        ...props,
        size: Modal.ModalSize.MEDIUM
      }, /* @__PURE__ */ React$2.createElement(Modal.ModalHeader, {
        separator: false
      }, /* @__PURE__ */ React$2.createElement(CreateCategory, null)), /* @__PURE__ */ React$2.createElement(Modal.ModalContent, null, /* @__PURE__ */ React$2.createElement(UserListSettings, {
        ...{ openedCategory },
        showAddCategoryButton: false
      }), /* @__PURE__ */ React$2.createElement("div", {
        style: { paddingBottom: "16px" }
      }))));
    };

    function CategoryContextMenu(props) {
      return /* @__PURE__ */ React$2.createElement(ContextMenu, {
        navId: "pin-user",
        onClose: ContextMenu$1.closeContextMenu
      }, /* @__PURE__ */ React$2.createElement(ContextMenu.MenuItem, {
        id: "edit",
        label: "Edit category",
        action: () => openCategorySettings(props.category)
      }), /* @__PURE__ */ React$2.createElement(ContextMenu.MenuItem, {
        id: "delete",
        label: "Delete category",
        color: "colorDanger",
        action: () => {
          messageBox("Delete", `Are you sure that you want to delete "${props.category}"?`, [
            {
              text: "Delete",
              action: () => {
                pinnedDMS.removeCategory(props.category);
              },
              color: Button.Colors.RED
            },
            {
              text: "Cancel",
              action: () => {
              },
              color: Button.Colors.WHITE,
              look: Button.Looks.LINK
            }
          ]);
        }
      }));
    }

    const ListSectionItem = findByDisplayName("ListSectionItem");
    const { DirectMessage } = findByProps("DirectMessage");
    const { NumberBadge } = findByProps("NumberBadge");
    const { getMentionCount } = findByProps("getMentionCount");
    const UserSummaryItem$1 = findByDisplayName("UserSummaryItem");
    const USER_ICON_SIZE$1 = 16;
    function patchDmList() {
      let PinDMSRender = () => /* @__PURE__ */ React$2.createElement(CurrentLists, null);
      PinDMSRender.displayName = "PinnedDMS";
      after("DMListPatch", find((m) => m?.default?.displayName === "ConnectedPrivateChannelsList"), "default", ([props], res, _this) => {
        useListUpdate();
        let PrivateChannelsList = findInReactTree(res, (m) => m?.type?.displayName === "PrivateChannelsList");
        if (PrivateChannelsList == null)
          return;
        Object.values(pinnedDMS.getAll()).forEach(({ users }) => {
          const dmChannels = users.map((id) => Channels.getDMFromUserId(id));
          PrivateChannelsList.props.privateChannelIds = PrivateChannelsList.props.privateChannelIds.filter((id) => !dmChannels.includes(id));
        });
        const ogFunc = PrivateChannelsList.type.prototype.render;
        if (ogFunc == null)
          return;
        Object.assign(PrivateChannelsList.props, {
          original: ogFunc
        });
        if (PrivateChannelsList.props.children.find((m) => m?.type?.displayName === "PinnedDMS"))
          return;
        PrivateChannelsList.props.children.push(/* @__PURE__ */ React$2.createElement(PinDMSRender, null));
      });
    }
    const CurrentLists = () => {
      useListUpdate();
      switch (get("display", settings.DefaultSettings.DISPLAY_MODE)) {
        case settings.DefaultSettings.MinimalistView.settingsValue: {
          return /* @__PURE__ */ React$2.createElement("div", {
            className: modules_e82b6e90.wrapper
          }, pinnedDMS.getCategories().map((category) => {
            return /* @__PURE__ */ React$2.createElement(MinimalistList, {
              ...{ category }
            });
          }));
        }
        default: {
          return /* @__PURE__ */ React$2.createElement(React$2.Fragment, null, pinnedDMS.getCategories().map((category) => {
            return /* @__PURE__ */ React$2.createElement(CategoryList, {
              ...{ category }
            });
          }));
        }
      }
    };
    const CategoryList = ({ category }) => {
      const [show, setShow] = React$2.useState(pinnedDMS.getVisibility(category));
      return /* @__PURE__ */ React$2.createElement(React$2.Fragment, null, /* @__PURE__ */ React$2.createElement("div", {
        onClick: () => {
          pinnedDMS.setVisibility(category, !show);
          setShow(!show);
        }
      }, /* @__PURE__ */ React$2.createElement(ListSectionItem, {
        className: joinClasses(classes.Category.wrapper, modules_e82b6e90.categoryViewWrapper, show ? modules_e82b6e90.open : null)
      }, /* @__PURE__ */ React$2.createElement("span", {
        style: { color: pinnedDMS.getColor(category) }
      }, /* @__PURE__ */ React$2.createElement(DiscordIcon, {
        name: "DropdownArrow",
        type: "none",
        className: joinClasses(classes.Category.icon, modules_e82b6e90.icon)
      }), /* @__PURE__ */ React$2.createElement("h2", {
        className: joinClasses(searchClassNameModules("container-32HW5s").container, classes.Category.name, modules_e82b6e90.name)
      }, category)))), show && pinnedDMS.getUsers(category).map((userId) => {
        const dmId = Channels.getDMFromUserId(userId);
        if (dmId == null)
          return null;
        return /* @__PURE__ */ React$2.createElement(DirectMessage, {
          key: dmId,
          channel: Channels.getChannel(dmId),
          selected: CurrentChannels.getChannelId() === dmId
        });
      }));
    };
    const getPingCount = (currentUsers) => currentUsers.map((userId) => Channels.getDMFromUserId(userId)).reduce((acc, channelId) => acc + getMentionCount(channelId), 0);
    const MinimalistList = ({ category }) => {
      const currentUsers = React$2.useMemo(() => pinnedDMS.getUsers(category), []);
      const isCurrentChannel = React$2.useMemo(() => {
        return currentUsers.some((userId) => CurrentChannels.getChannelId() === Channels.getDMFromUserId(userId));
      }, []);
      const [pingCount, setPingCount] = React$2.useState(getPingCount(currentUsers));
      const [isStreamerModeEnabled, setStreamerMode] = React$2.useState(false);
      React$2.useEffect(() => {
        const messageCreateListener = ({ channelId }) => {
          if (currentUsers.some((userId) => channelId === Channels.getDMFromUserId(userId)))
            setPingCount(getPingCount(currentUsers));
        };
        const streamerModeListener = ({ value }) => {
          setStreamerMode(value);
        };
        Dispatcher.subscribe("CHANNEL_UNREAD_UPDATE", messageCreateListener);
        Dispatcher.subscribe("STREAMER_MODE_UPDATE", streamerModeListener);
        return () => {
          Dispatcher.unsubscribe("CHANNEL_UNREAD_UPDATE", messageCreateListener);
          Dispatcher.unsubscribe("STREAMER_MODE_UPDATE", streamerModeListener);
        };
      }, []);
      return /* @__PURE__ */ React$2.createElement(React$2.Fragment, null, /* @__PURE__ */ React$2.createElement(Popout, {
        position: Popout.Positions.RIGHT,
        animation: Popout.Animation.NONE,
        renderPopout: (props) => /* @__PURE__ */ React$2.createElement("div", {
          ...props
        }, /* @__PURE__ */ React$2.createElement(Modal.ModalRoot, {
          transitionState: 1,
          size: Modal.ModalSize.DYNAMIC
        }, /* @__PURE__ */ React$2.createElement("div", {
          className: modules_e82b6e90.minimalisticPopout
        }, currentUsers.length !== 0 ? currentUsers.map((userId) => {
          const dmId = Channels.getDMFromUserId(userId);
          if (dmId == null)
            return null;
          return /* @__PURE__ */ React$2.createElement(DirectMessage, {
            key: dmId,
            channel: Channels.getChannel(dmId),
            selected: CurrentChannels.getChannelId() === dmId
          });
        }) : /* @__PURE__ */ React$2.createElement(Text, {
          style: { marginLeft: "8px" }
        }, "There is nobody here currently. ", /* @__PURE__ */ React$2.createElement("a", {
          onClick: () => openCategorySettings(category)
        }, "Add a new person"), "."))))
      }, (props) => /* @__PURE__ */ React$2.createElement("div", {
        ...props,
        className: joinClasses(classes.DMButtons.channel, searchClassNameModules("container-32HW5s").container),
        onContextMenu: (e) => ContextMenu$1.openContextMenu(e, () => /* @__PURE__ */ React$2.createElement(CategoryContextMenu, {
          category
        }))
      }, /* @__PURE__ */ React$2.createElement("div", {
        className: joinClasses(classes.DMButtons.interactive, classes.Interactives.interactive, isCurrentChannel ? joinClasses(classes.DMButtons.interactiveSelected, classes.Interactives.selected) : void 0, classes.DMButtons.linkButton)
      }, /* @__PURE__ */ React$2.createElement("div", {
        className: joinClasses(classes.Names.layout, modules_e82b6e90.minimalisticView)
      }, /* @__PURE__ */ React$2.createElement(Flex, {
        direction: Flex.Direction.VERTICAL,
        className: modules_e82b6e90.nameAndUsers
      }, /* @__PURE__ */ React$2.createElement("span", {
        style: { color: pinnedDMS.getColor(category), fontWeight: "bold" }
      }, category), !isStreamerModeEnabled && get("minimal.userIcons", settings.DefaultSettings.MinimalistView.userIcons) && /* @__PURE__ */ React$2.createElement(UserSummaryItem$1, {
        size: USER_ICON_SIZE$1,
        users: pinnedDMS.getUsers(category).map((userId) => Users.getUser(userId))
      })), Boolean(pingCount) && /* @__PURE__ */ React$2.createElement(NumberBadge, {
        count: pingCount
      }))))));
    };

    var css$1 = ".DMFoldersDmbuttonPinButton {\n  margin: 2px;\n  display: none;\n  opacity: 0.6;\n}\n.DMFoldersDmbuttonPinButton:hover {\n  opacity: 1;\n}\n.DMFoldersDmbuttonPinButton.DMFoldersDmbuttonLonely {\n  padding-right: 8px;\n}\n.DMFoldersDmbuttonPinButton svg {\n  min-width: 16px;\n  width: 16px !important;\n  min-height: 16px;\n  height: 16px !important;\n}\n\n.DMFoldersDmbuttonPinHoverHandler:hover .DMFoldersDmbuttonPinButton {\n  display: block;\n}";
    var modules_531c3291 = {"pinButton":"DMFoldersDmbuttonPinButton","lonely":"DMFoldersDmbuttonLonely","pinHoverHandler":"DMFoldersDmbuttonPinHoverHandler"};
    n(css$1,{});

    var css = ".DMFoldersAddUserText {\n  font-weight: bold;\n  margin-right: auto;\n}\n\n[id^=pin-user-]:hover .DMFoldersAddUserText {\n  color: #fff !important;\n  font-weight: 600;\n}";
    var modules_9e889708 = {"text":"DMFoldersAddUserText"};
    n(css,{});

    const UserSummaryItem = findByDisplayName("UserSummaryItem");
    const USER_ICON_SIZE = 16;
    const MAX_USERS_DISPLAY = 4;
    function AddUser(props) {
      return /* @__PURE__ */ React$2.createElement(ContextMenu, {
        navId: "pin-user",
        onClose: ContextMenu$1.closeContextMenu
      }, /* @__PURE__ */ React$2.createElement(ContextMenu.MenuGroup, {
        label: "Add to category"
      }, pinnedDMS.getCategories().map((category) => /* @__PURE__ */ React$2.createElement(ContextMenu.MenuItem, {
        id: `category-${category}`,
        label: /* @__PURE__ */ React$2.createElement(Flex, null, /* @__PURE__ */ React$2.createElement("span", {
          className: modules_9e889708.text,
          style: { color: pinnedDMS.getColor(category) }
        }, category), /* @__PURE__ */ React$2.createElement(UserSummaryItem, {
          size: USER_ICON_SIZE,
          max: MAX_USERS_DISPLAY,
          users: pinnedDMS.getUsers(category).sort(() => Math.random() - 0.5).map((userId) => Users.getUser(userId))
        })),
        action: () => pinnedDMS.addUser(category, props.userId)
      }))), /* @__PURE__ */ React$2.createElement(ContextMenu.MenuSeparator, null), /* @__PURE__ */ React$2.createElement(ContextMenu.MenuItem, {
        id: "configure",
        label: "Configure categories",
        icon: () => /* @__PURE__ */ React$2.createElement(DiscordIcon, {
          name: "Gear",
          type: "contextmenu"
        }),
        action: openCategorySettings
      }));
    }

    const { React } = webpack;
    function patchDmButton() {
      after("DMButtonPatch", findByDisplayName("PrivateChannel").prototype, "render", (_, res, _this) => {
        const user = _this.props.user;
        const isAdded = pinnedDMS.isUserAdded(user.id);
        const ogChildren = res.props.children;
        if (ogChildren == null)
          return;
        res.props.children = function(...args) {
          const ret = ogChildren.apply(this, args);
          ret.props.className += ` ${modules_531c3291.pinHoverHandler}`;
          const Interactive = ret.props.children;
          if (user && !user.bot) {
            const closeIndex = Interactive.props.children.findIndex((e) => e.type.displayName === "CloseButton");
            if (isAdded && closeIndex) {
              delete Interactive.props.children[closeIndex];
            }
            if (get("pinIcon", settings.DefaultSettings.PIN_ICON)) {
              Interactive.props.children.splice(1, 0, /* @__PURE__ */ React.createElement("div", {
                className: joinClasses(modules_531c3291.pinButton, isAdded ? modules_531c3291.lonely : ""),
                onClick: (e) => {
                  if (isAdded) {
                    pinnedDMS.removeUser(pinnedDMS.getUserCategory(user.id), user.id);
                  } else {
                    ContextMenu$1.openContextMenu(e, () => /* @__PURE__ */ React.createElement(AddUser, {
                      userId: user.id
                    }));
                  }
                }
              }, !isAdded ? /* @__PURE__ */ React.createElement(DiscordIcon, {
                name: "PinLayer"
              }) : /* @__PURE__ */ React.createElement(DiscordIcon, {
                name: "UnpinLayer"
              })));
            }
          }
          return ret;
        };
      });
    }

    const { Item } = findByProps("Item");
    const { Divider } = find((m) => m?.default?.displayName === "HeaderBar");
    const PeopleListSectionedNonLazy = findByDisplayName("PeopleListSectionedNonLazy");
    const FriendRow = findByDisplayName("FriendRow");
    const SectionTitle = findByDisplayName("SectionTitle");
    const { EmptyStateImage, default: EmptyState, EmptyStateText } = findByProps("EmptyStateImage");
    const { iconWrapper, clickable, icon } = findByProps("caret", "clickable");
    const { button } = findByProps("friendsEmpty");
    const { searchBar } = findByProps("emptyStateContainer");
    const IDENTIFIER = "DMCATEGORIES";
    function patchFriendsPage() {
      after("FriendsHeaderPatch", find((m) => m?.default?.displayName === "HeaderBarContainer"), "default", ([props], res, _this) => {
        if (Boolean(props.channelId) || !~props.className.indexOf("theme-"))
          return;
        const OgTabBarChildrens = props.children[3].props.children;
        const AddFriendButton = OgTabBarChildrens[OgTabBarChildrens.length - 1];
        delete OgTabBarChildrens[OgTabBarChildrens.length - 1];
        const NewTabBarChildrens = [];
        for (const categoryName of pinnedDMS.getCategories()) {
          NewTabBarChildrens.push(/* @__PURE__ */ React$2.createElement(Item, {
            id: `${IDENTIFIER}-${categoryName}`,
            color: pinnedDMS.getColor(categoryName),
            onContextMenu: (e) => ContextMenu$1.openContextMenu(e, () => /* @__PURE__ */ React$2.createElement(CategoryContextMenu, {
              category: categoryName
            }))
          }, categoryName));
        }
        props.children[3].props.children = [...OgTabBarChildrens, /* @__PURE__ */ React$2.createElement(Divider, null), ...NewTabBarChildrens, /* @__PURE__ */ React$2.createElement(Divider, null), AddFriendButton];
      });
      after("FriendsListPatch", find((m) => m?.default?.displayName === "PeopleList"), "default", ([props], res, _this) => {
        if (~props.sectionFilter.indexOf(IDENTIFIER)) {
          const category = props.sectionFilter.substring(IDENTIFIER.length + 1);
          res.props.children = /* @__PURE__ */ React$2.createElement(DMFriendsRender, {
            ...{ category },
            key: category
          });
        }
      });
    }
    const DMFriendsRender = ({ category }) => {
      const [search, setSearch] = React$2.useState("");
      const userIDs = React$2.useMemo(() => pinnedDMS.getUsers(category), [category]);
      const searchedUserIDs = React$2.useMemo(() => userIDs.filter((id) => ~Users.getUser(id).username.toLowerCase().indexOf(search.toLowerCase())), [search]);
      if (userIDs.length !== 0) {
        return /* @__PURE__ */ React$2.createElement(React$2.Fragment, null, /* @__PURE__ */ React$2.createElement(SearchBar, {
          query: search,
          onChange: setSearch,
          onClear: () => setSearch(""),
          className: searchBar,
          size: SearchBar.Sizes.MEDIUM
        }), /* @__PURE__ */ React$2.createElement("div", null, /* @__PURE__ */ React$2.createElement(SectionTitle, {
          title: /* @__PURE__ */ React$2.createElement(Flex, null, /* @__PURE__ */ React$2.createElement("b", {
            style: { color: pinnedDMS.getColor(category), flexGrow: 1 }
          }, category, " \u2013 ", searchedUserIDs.length), /* @__PURE__ */ React$2.createElement(TooltipContainer, {
            text: "Add a new person",
            position: "bottom"
          }, /* @__PURE__ */ React$2.createElement("div", {
            className: joinClasses(iconWrapper, clickable),
            onClick: () => openCategorySettings(category),
            style: { width: "16px", height: "16px" }
          }, /* @__PURE__ */ React$2.createElement(DiscordIcon, {
            name: "PersonAdd",
            type: "none"
          }))))
        })), searchedUserIDs.length !== 0 ? /* @__PURE__ */ React$2.createElement(PeopleListSectionedNonLazy, {
          renderRow: (mysteriousObject) => /* @__PURE__ */ React$2.createElement(FriendRow, {
            ...Object.assign({}, mysteriousObject, { isFocused: true })
          }),
          statusSections: [
            searchedUserIDs.map((userId) => {
              const user = Users.getUser(userId);
              return {
                activities: Activities.getActivities(user.id),
                isMobile: user.mobile,
                key: user.id,
                nickname: user.username,
                status: Status.getStatus(user.id),
                type: 1,
                user
              };
            })
          ]
        }) : /* @__PURE__ */ React$2.createElement(EmptyState, {
          theme: UserSettings.theme
        }, /* @__PURE__ */ React$2.createElement(EmptyStateImage, {
          ...{
            "width": 421,
            "height": 218,
            "lightSrc": "/assets/fd879a28807b66b38d54e7db6ea18a69.svg",
            "darkSrc": "/assets/b36de980b174d7b798c89f35c116e5c6.svg"
          }
        }), /* @__PURE__ */ React$2.createElement(EmptyStateText, {
          note: /* @__PURE__ */ React$2.createElement(React$2.Fragment, null, "Wumpus looked but couldn't find anyone with that name in this category.")
        }), /* @__PURE__ */ React$2.createElement(Button, {
          onClick: () => openCategorySettings(category),
          className: button
        }, "Add a person with that name")));
      } else {
        return /* @__PURE__ */ React$2.createElement(React$2.Fragment, null, /* @__PURE__ */ React$2.createElement(EmptyState, {
          theme: UserSettings.theme
        }, /* @__PURE__ */ React$2.createElement(EmptyStateImage, {
          ...{
            "width": 415,
            "height": 200,
            "lightSrc": "/assets/36c9a2fb7d0593a581a92373121c2848.svg",
            "darkSrc": "/assets/b36c705f790dad253981f1893085015a.svg"
          }
        }), /* @__PURE__ */ React$2.createElement(EmptyStateText, {
          note: /* @__PURE__ */ React$2.createElement(React$2.Fragment, null, "Apparently this category does only have Wumpus.")
        }), /* @__PURE__ */ React$2.createElement(Button, {
          onClick: () => openCategorySettings(category),
          className: button
        }, "Add person")));
      }
    };

    const fromDevilbroPinDMs = () => {
      const DevilbroPinDMsData = globalThis.BdApi.getData("PinDMs", "all");
      const channelList = DevilbroPinDMsData.pinned[Users.getCurrentUser().id].channelList;
      console.log(Object.values(channelList));
      let category = {};
      for (const dbCategory of Object.values(channelList)) {
        const userIDs = dbCategory.dms.filter((cId) => Channels.getChannel(cId)?.type === 1).map((cId) => Channels.getChannel(cId).recipients[0]);
        if (userIDs.length !== 0) {
          category[dbCategory.name] = {
            color: ColorUtils.int2hex(ColorUtils.rgb2int(`rgba(${dbCategory.color[0]}, ${dbCategory.color[1]}, ${dbCategory.color[2]}, 1)`)),
            users: userIDs,
            show: !dbCategory.collapsed
          };
        }
      }
      return category;
    };
    const hasThemEnabled = () => {
      return {
        pinDMs: Boolean(globalThis.BdApi) && Boolean(globalThis.BdApi.Plugins.isEnabled("PinDMs"))
      };
    };
    const hasAnyOfThePlugins = () => {
      const results = hasThemEnabled();
      return results.pinDMs;
    };

    const { Slides, springConfig } = findByProps("Slide");
    const Pages = {
      SWITCH: "switch",
      SWITCH_DONE: "switchDone"
    };
    const WIDTH = 400;
    class MenuModal extends React$2.Component {
      constructor(props) {
        super(props);
        this.state = {
          page: Pages.SWITCH
        };
      }
      setPage(page) {
        this.setState({ page });
      }
      render() {
        return /* @__PURE__ */ React$2.createElement(Modal.ModalRoot, {
          size: Modal.ModalSize.DYNAMIC,
          ...this.props
        }, /* @__PURE__ */ React$2.createElement(Slides, {
          activeSlide: this.state.page,
          springConfig,
          width: WIDTH,
          children: [
            /* @__PURE__ */ React$2.createElement("div", {
              id: Pages.SWITCH
            }, /* @__PURE__ */ React$2.createElement(Modal.ModalHeader, {
              separator: false
            }, /* @__PURE__ */ React$2.createElement(Heading, {
              variant: "heading-md/normal"
            }, "Switch?")), /* @__PURE__ */ React$2.createElement(Modal.ModalContent, null, /* @__PURE__ */ React$2.createElement(Text, {
              className: Margins$1.marginBottom20
            }, "It seems that you have used PinDMs before. Do you want to switch the user list to this plugin?")), /* @__PURE__ */ React$2.createElement(Modal.ModalFooter, null, /* @__PURE__ */ React$2.createElement(Button, {
              onClick: async () => {
                await this.switch();
                this.setPage(Pages.SWITCH_DONE);
              }
            }, "Switch"), /* @__PURE__ */ React$2.createElement(Button, {
              color: Button.Colors.WHITE,
              look: Button.Looks.LINK,
              onClick: this.props.onClose
            }, "No"))),
            /* @__PURE__ */ React$2.createElement("div", {
              id: Pages.SWITCH_DONE
            }, /* @__PURE__ */ React$2.createElement(Modal.ModalHeader, {
              separator: false
            }, /* @__PURE__ */ React$2.createElement(Heading, {
              variant: "heading-md/normal"
            }, "Done")), /* @__PURE__ */ React$2.createElement(Modal.ModalContent, null, /* @__PURE__ */ React$2.createElement(Text, {
              className: Margins$1.marginBottom20
            }, "The switching was done sucessfully. We can disable them if you want")), /* @__PURE__ */ React$2.createElement(Modal.ModalFooter, null, /* @__PURE__ */ React$2.createElement(Button, {
              onClick: async () => {
                await this.disableAll();
                this.props.onClose();
              }
            }, "Disable"), /* @__PURE__ */ React$2.createElement(Button, {
              color: Button.Colors.WHITE,
              look: Button.Looks.LINK,
              onClick: this.props.onClose
            }, "I am fine")))
          ]
        }));
      }
      async switch() {
        if (hasThemEnabled().pinDMs) {
          const newSettings = fromDevilbroPinDMs();
          pinnedDMS.setRaw(newSettings);
        }
      }
      async disableAll() {
        if (hasThemEnabled().pinDMs)
          BdApi?.Plugins?.disable?.("PinDMs");
      }
    }

    let visibilityStorage = {};
    class DMFolders extends Plugin {
      start() {
        this.setSettingsPanel(() => /* @__PURE__ */ React$2.createElement(Settings, null));
        globalThis.Ittai = Ittai;
        patchDmList();
        patchDmButton();
        patchFriendsPage();
        this.openSettingsSwitcher();
        Dispatcher.subscribe("STREAMER_MODE_UPDATE", this.onStreamerModeChange);
      }
      openSettingsSwitcher() {
        if (hasAnyOfThePlugins())
          ModalActions.openModal((props) => /* @__PURE__ */ React$2.createElement(MenuModal, {
            ...props
          }));
      }
      onStreamerModeChange({ value }) {
        if (this.settings.get("streamerMode", settings.DefaultSettings.STREAMER_MODE))
          pinnedDMS.getCategories().forEach((category) => {
            if (value) {
              visibilityStorage[category] = pinnedDMS.getVisibility(category);
              pinnedDMS.setVisibility(category, false);
            } else {
              pinnedDMS.setVisibility(category, visibilityStorage[category] ?? false);
            }
          });
        Dispatcher.dirtyDispatch({ type: DISPATCHER_PINDMS_CHANGE_LIST });
      }
      stop() {
        unpatchAll();
        Dispatcher.unsubscribe("STREAMER_MODE_UPDATE", this.onStreamerModeChange);
      }
    }

    let IttaiPlugin = class IttaiPlugin2 extends (() => {
      return BDPlugin;
    })() {
      constructor(...args) {
        super(...args);
        this.hasSettingsPanel = false;
        this.cachedCss = [];
        setInstance(this.__ittaiInternals);
        this.instance = new DMFolders();
        this.friendlyName = this.instance.friendlyName;
        this.instance.__ittaiInternalPlugin = this;
      }
      start() {
        try {
          if (false) ;
          return this.instance.start();
        } catch (err) {
          console.error(err);
          throw err;
        }
      }
      stop() {
        try {
          const res = this.instance.stop();
          unpatchAll();
          if (this.hasSettingsPanel)
            this.removeSettingsPanel();
          return res;
        } catch (err) {
          console.error(err);
          throw err;
        }
      }
      setSettingsPanel(component) {
        this.hasSettingsPanel = true;
        this.__ittaiInternals.setSettingsPanel(component);
      }
      removeSettingsPanel() {
        if (this.hasSettingsPanel) {
          this.hasSettingsPanel = false;
          this.__ittaiInternals.removeSettingsPanel();
        }
      }
    };

    return IttaiPlugin;

    })();
    if (typeof module !== "undefined") module.exports = ittaiPluginExport;
    return ittaiPluginExport;

})();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50cnlwb2ludC5qcyIsInNvdXJjZXMiOlsiZmlsZTovLy9ETUZvbGRlcnMvLi4vLi4vaXR0YWkvY29yZS93ZWJwYWNrL2NvcmUuanMiLCJmaWxlOi8vL0RNRm9sZGVycy8uLi8uLi9pdHRhaS9jb3JlL3dlYnBhY2svY29tbW9uL2luZGV4LmpzIiwiZmlsZTovLy9ETUZvbGRlcnMvLi4vLi4vaXR0YWkvY29yZS9wYWNrYWdlcy9pbml0LmpzIiwiZmlsZTovLy9ETUZvbGRlcnMvLi4vLi4vaXR0YWkvY29yZS9lbnRpdGllcy9CRFBsdWdpbi5qcyIsImZpbGU6Ly8vRE1Gb2xkZXJzLy4uLy4uL2l0dGFpL2NvcmUvc2V0dGluZ3MvaW5kZXguanMiLCJmaWxlOi8vL0RNRm9sZGVycy8uLi8uLi9pdHRhaS9jb3JlL2NvbXBvbmVudHMvRGlzY29yZEljb24uanN4IiwiZmlsZTovLy9ETUZvbGRlcnMvLi4vLi4vaXR0YWkvY29yZS9jb21wb25lbnRzL0Rpc2NvcmRQcm92aWRlcnMuanN4IiwiZmlsZTovLy9ETUZvbGRlcnMvLi4vLi4vaXR0YWkvY29yZS9jb21wb25lbnRzL0ZsdXhXcmFwcGVyLmpzeCIsImZpbGU6Ly8vRE1Gb2xkZXJzLy4uLy4uL2l0dGFpL2NvcmUvY2xhc3Nlcy9pbmRleC5qcyIsImZpbGU6Ly8vRE1Gb2xkZXJzLy4uLy4uL2l0dGFpL2NvcmUvY29tcG9uZW50cy9DYXRlZ29yeS5qc3giLCJmaWxlOi8vL0RNRm9sZGVycy8uLi8uLi9pdHRhaS9jb3JlL2NvbXBvbmVudHMvaW5kZXguanN4IiwiZmlsZTovLy9ETUZvbGRlcnMvLi4vLi4vaXR0YWkvY29yZS91dGlsaXRpZXMvZ2V0Q2xpZW50TW9kLmpzIiwiZmlsZTovLy9ETUZvbGRlcnMvLi4vLi4vaXR0YWkvY29yZS91dGlsaXRpZXMvbmFub3NlY29uZHMuanMiLCJmaWxlOi8vL0RNRm9sZGVycy8uLi8uLi9pdHRhaS9jb3JlL3V0aWxpdGllcy93YWl0LmpzIiwiZmlsZTovLy9ETUZvbGRlcnMvLi4vLi4vaXR0YWkvY29yZS9sb2dnZXIvY3JlYXRlQXJndW1lbnRzLmpzIiwiZmlsZTovLy9ETUZvbGRlcnMvLi4vLi4vaXR0YWkvY29yZS9sb2dnZXIvbG9nLmpzIiwiZmlsZTovLy9ETUZvbGRlcnMvLi4vLi4vaXR0YWkvY29yZS9sb2dnZXIvZGVidWcuanMiLCJmaWxlOi8vL0RNRm9sZGVycy8uLi8uLi9pdHRhaS9jb3JlL2xvZ2dlci93YXJuLmpzIiwiZmlsZTovLy9ETUZvbGRlcnMvLi4vLi4vaXR0YWkvY29yZS9sb2dnZXIvZXJyb3IuanMiLCJmaWxlOi8vL0RNRm9sZGVycy8uLi8uLi9pdHRhaS9jb3JlL2xvZ2dlci9ncm91cC5qcyIsImZpbGU6Ly8vRE1Gb2xkZXJzLy4uLy4uL2l0dGFpL2NvcmUvbG9nZ2VyL2dyb3VwRW5kLmpzIiwiZmlsZTovLy9ETUZvbGRlcnMvLi4vLi4vaXR0YWkvY29yZS9sb2dnZXIvY291bnQuanMiLCJmaWxlOi8vL0RNRm9sZGVycy8uLi8uLi9pdHRhaS9jb3JlL2xvZ2dlci9jb3VudFJlc2V0LmpzIiwiZmlsZTovLy9ETUZvbGRlcnMvLi4vLi4vaXR0YWkvY29yZS9sb2dnZXIvaW5kZXguanMiLCJmaWxlOi8vL0RNRm9sZGVycy8uLi8uLi9pdHRhaS9jb3JlL3V0aWxpdGllcy9maW5kSW5UcmVlLmpzIiwiZmlsZTovLy9ETUZvbGRlcnMvLi4vLi4vaXR0YWkvY29yZS91dGlsaXRpZXMvZmluZEluUmVhY3RUcmVlLmpzIiwiZmlsZTovLy9ETUZvbGRlcnMvLi4vLi4vaXR0YWkvY29yZS91dGlsaXRpZXMvZ2V0UmVhY3RJbnN0YW5jZS5qcyIsImZpbGU6Ly8vRE1Gb2xkZXJzLy4uLy4uL2l0dGFpL2NvcmUvdXRpbGl0aWVzL2dldE93bmVySW5zdGFuY2UuanMiLCJmaWxlOi8vL0RNRm9sZGVycy8uLi8uLi9pdHRhaS9jb3JlL3V0aWxpdGllcy90ZXN0Q29tcG9uZW50LmpzIiwiZmlsZTovLy9ETUZvbGRlcnMvLi4vLi4vaXR0YWkvY29yZS91dGlsaXRpZXMvYmVuY2htYXJrLmpzIiwiZmlsZTovLy9ETUZvbGRlcnMvLi4vLi4vaXR0YWkvY29yZS91dGlsaXRpZXMvbXVsdGlCZW5jaG1hcmsuanMiLCJmaWxlOi8vL0RNRm9sZGVycy8uLi8uLi9pdHRhaS9jb3JlL3V0aWxpdGllcy9hdmVyYWdlLmpzIiwiZmlsZTovLy9ETUZvbGRlcnMvLi4vLi4vaXR0YWkvY29yZS91dGlsaXRpZXMvbWVkaWFuLmpzIiwiZmlsZTovLy9ETUZvbGRlcnMvLi4vLi4vaXR0YWkvY29yZS91dGlsaXRpZXMvcmFuZG9tTnVtYmVyLmpzIiwiZmlsZTovLy9ETUZvbGRlcnMvLi4vLi4vaXR0YWkvY29yZS91dGlsaXRpZXMvcmFuZG9tU3RyaW5nLmpzIiwiZmlsZTovLy9ETUZvbGRlcnMvLi4vLi4vaXR0YWkvY29yZS91dGlsaXRpZXMvam9pbkNsYXNzZXMuanMiLCJmaWxlOi8vL0RNRm9sZGVycy8uLi8uLi9pdHRhaS9jb3JlL3V0aWxpdGllcy9zZWFyY2hDbGFzc05hbWVNb2R1bGVzLmpzIiwiZmlsZTovLy9ETUZvbGRlcnMvLi4vLi4vaXR0YWkvY29yZS91dGlsaXRpZXMvbWVzc2FnZUJveC5qc3giLCJmaWxlOi8vL0RNRm9sZGVycy8uLi8uLi9pdHRhaS9jb3JlL3V0aWxpdGllcy9tZXNzYWdlcy9nZXRNZXNzYWdlcy5qcyIsImZpbGU6Ly8vRE1Gb2xkZXJzLy4uLy4uL2l0dGFpL2NvcmUvdXRpbGl0aWVzL21lc3NhZ2VzL2dldE1lc3NhZ2UuanMiLCJmaWxlOi8vL0RNRm9sZGVycy8uLi8uLi9pdHRhaS9jb3JlL3V0aWxpdGllcy9tZXNzYWdlcy9mZXRjaE1lc3NhZ2UuanMiLCJmaWxlOi8vL0RNRm9sZGVycy8uLi8uLi9pdHRhaS9jb3JlL3V0aWxpdGllcy9tZXNzYWdlcy9yZXJlbmRlckFsbE1lc3NhZ2VzLmpzIiwiZmlsZTovLy9ETUZvbGRlcnMvLi4vLi4vaXR0YWkvY29yZS91dGlsaXRpZXMvbWVzc2FnZXMvcmVyZW5kZXJNZXNzYWdlLmpzIiwiZmlsZTovLy9ETUZvbGRlcnMvLi4vLi4vaXR0YWkvY29yZS91dGlsaXRpZXMvbWVzc2FnZXMvdXBkYXRlTWVzc2FnZS5qcyIsImZpbGU6Ly8vRE1Gb2xkZXJzLy4uLy4uL2l0dGFpL2NvcmUvdXRpbGl0aWVzL21lc3NhZ2VzL2luZGV4LmpzIiwiZmlsZTovLy9ETUZvbGRlcnMvLi4vLi4vaXR0YWkvY29yZS9jaGFuZ2Vsb2cvaW5kZXguanN4IiwiZmlsZTovLy9ETUZvbGRlcnMvLi4vLi4vaXR0YWkvY29yZS9lbnRpdGllcy9QbHVnaW4uanMiLCJmaWxlOi8vL0RNRm9sZGVycy8uLi8uLi9pdHRhaS9jb3JlL3BhdGNoZXIvYmVmb3JlLmpzIiwiZmlsZTovLy9ETUZvbGRlcnMvLi4vLi4vaXR0YWkvY29yZS9wYXRjaGVyL2luc3RlYWQuanMiLCJmaWxlOi8vL0RNRm9sZGVycy8uLi8uLi9pdHRhaS9jb3JlL3BhdGNoZXIvYWZ0ZXIuanMiLCJmaWxlOi8vL0RNRm9sZGVycy8uLi8uLi9pdHRhaS9jb3JlL3BhdGNoZXIvdW5wYXRjaEFsbC5qcyIsImZpbGU6Ly8vRE1Gb2xkZXJzLy4uLy4uL2l0dGFpL2NvcmUvcGF0Y2hlci9wYXRjaC5qcyIsImZpbGU6Ly8vRE1Gb2xkZXJzLy4uLy4uL2l0dGFpL2NvcmUvcGF0Y2hlci9pbmRleC5qcyIsImZpbGU6Ly8vRE1Gb2xkZXJzLy4uLy4uL2l0dGFpL2NvcmUvY29tbWFuZHMvYm90TWVzc2FnZS5qcyIsImZpbGU6Ly8vRE1Gb2xkZXJzLy4uLy4uL2l0dGFpL2NvcmUvY29tbWFuZHMvaW5kZXguanMiLCJmaWxlOi8vL0RNRm9sZGVycy8uLi8uLi9pdHRhaS9jb3JlL3N0b3Jlcy9pbmRleC5qcyIsImZpbGU6Ly8vRE1Gb2xkZXJzLy4uLy4uL2l0dGFpL2J1aWxkZXIvbm9kZV9tb2R1bGVzLy5wbnBtL3JvbGx1cC1wbHVnaW4tc3R5bGVzQDQuMC4wX3JvbGx1cEAyLjc3LjAvbm9kZV9tb2R1bGVzL3JvbGx1cC1wbHVnaW4tc3R5bGVzL2Rpc3QvcnVudGltZS9pbmplY3QtY3NzLmpzIiwiZmlsZTovLy9ETUZvbGRlcnMvLi4vLi4vaXR0YWkvY29yZS90b2FzdC9Ub2FzdFdyYXBwZXIudHN4IiwiZmlsZTovLy9ETUZvbGRlcnMvLi4vLi4vaXR0YWkvY29yZS90b2FzdC9pbmRleC5qc3giLCJmaWxlOi8vL0RNRm9sZGVycy9oYW5kbGVycy9waW5uZWRETVMudHMiLCJmaWxlOi8vL0RNRm9sZGVycy91dGlscy9tb3ZlLnRzIiwiZmlsZTovLy9ETUZvbGRlcnMvdXRpbHMvY2xhc3Nlcy50cyIsImZpbGU6Ly8vRE1Gb2xkZXJzL3V0aWxzL2pvaW5DbGFzc2VzLnRzIiwiZmlsZTovLy9ETUZvbGRlcnMvY29tcG9uZW50cy9Vc2VyTGlzdFNldHRpbmdzL1VzZXIudHN4IiwiZmlsZTovLy9ETUZvbGRlcnMvY29uc3RhbnRzL3NldHRpbmdzLnRzIiwiZmlsZTovLy9ETUZvbGRlcnMvY29uc3RhbnRzL2luZGV4LnRzIiwiZmlsZTovLy9ETUZvbGRlcnMvdXRpbHMvRXJyb3JCb3VuZGFyeS50c3giLCJmaWxlOi8vL0RNRm9sZGVycy9jb21wb25lbnRzL1VzZXJMaXN0U2V0dGluZ3MvTW9kYWxzL0NhdGVnb3J5U2V0dGluZ3NNb2RhbC50c3giLCJmaWxlOi8vL0RNRm9sZGVycy91dGlscy9saW1pdC50cyIsImZpbGU6Ly8vRE1Gb2xkZXJzL2NvbXBvbmVudHMvVXNlckxpc3RTZXR0aW5ncy9Nb2RhbHMvQWRkVXNlck1vZGFsLnRzeCIsImZpbGU6Ly8vRE1Gb2xkZXJzL2NvbXBvbmVudHMvVXNlckxpc3RTZXR0aW5ncy9pbmRleC50c3giLCJmaWxlOi8vL0RNRm9sZGVycy91dGlscy9pc1ZhbGlkSlNPTi50cyIsImZpbGU6Ly8vRE1Gb2xkZXJzL2NvbXBvbmVudHMvU2V0dGluZ3MudHN4IiwiZmlsZTovLy9ETUZvbGRlcnMvdXRpbHMvb3BlbkNhdGVnb3J5U2V0dGluZ3MudHN4IiwiZmlsZTovLy9ETUZvbGRlcnMvY29tcG9uZW50cy9Db250ZXh0TWVudXMvQ2F0ZWdvcnkudHN4IiwiZmlsZTovLy9ETUZvbGRlcnMvcGF0Y2hlcy9kbWxpc3QudHN4IiwiZmlsZTovLy9ETUZvbGRlcnMvY29tcG9uZW50cy9Db250ZXh0TWVudXMvQWRkVXNlci50c3giLCJmaWxlOi8vL0RNRm9sZGVycy9wYXRjaGVzL2RtYnV0dG9uLnRzeCIsImZpbGU6Ly8vRE1Gb2xkZXJzL3BhdGNoZXMvZnJpZW5kc2xpc3QudHN4IiwiZmlsZTovLy9ETUZvbGRlcnMvaGFuZGxlcnMvaW1wb3J0RnJvbVBsdWdpbi50cyIsImZpbGU6Ly8vRE1Gb2xkZXJzL2NvbXBvbmVudHMvU2V0dGluZ3NTd2l0Y2hlci9pbmRleC50c3giLCJmaWxlOi8vL0RNRm9sZGVycy9pbmRleC50c3giLCJmaWxlOi8vL0RNRm9sZGVycy8uLi8uLi9pdHRhaS9jb3JlL2xvYWRlci9lbnRyeXBvaW50LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImxldCBjbGllbnRXZWJwYWNrID0gKCgpPT57XHJcbiAgICBpZiAocHJvY2Vzcy5lbnYuQ0xJRU5UX01PRCA9PSBcImdvb3NlbW9kXCIpIHJldHVybiBnbG9iYWxUaGlzLmdvb3NlbW9kLndlYnBhY2tNb2R1bGVzO1xyXG4gICAgZWxzZSBpZiAocHJvY2Vzcy5lbnYuQ0xJRU5UX01PRCA9PSBcInBvd2VyY29yZHYyXCIpIHJldHVybiByZXF1aXJlKFwicG93ZXJjb3JkL3dlYnBhY2tcIik7XHJcbiAgICBlbHNlIGlmIChwcm9jZXNzLmVudi5DTElFTlRfTU9EID09IFwiYmV0dGVyZGlzY29yZFwiKSByZXR1cm4gZ2xvYmFsVGhpcy5CZEFwaSA/PyBCZEFwaTtcclxufSkoKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmaW5kKGZpbHRlcikge1xyXG4gICAgaWYgKHByb2Nlc3MuZW52LkNMSUVOVF9NT0QgPT0gXCJnb29zZW1vZFwiKSByZXR1cm4gY2xpZW50V2VicGFjay5maW5kKGZpbHRlcik7XHJcbiAgICBlbHNlIGlmIChwcm9jZXNzLmVudi5DTElFTlRfTU9EID09IFwicG93ZXJjb3JkdjJcIikge1xyXG4gICAgICAgIGxldCBpc0RlZmF1bHQgPSBmYWxzZTtcclxuICAgICAgICBjb25zdCBtb2QgPSBjbGllbnRXZWJwYWNrLmdldE1vZHVsZSh4ID0+IHg/LmRlZmF1bHQgJiYgZmlsdGVyKHguZGVmYXVsdCkgJiYgKGlzRGVmYXVsdCA9IHRydWUpLCBmYWxzZSkgfHwgY2xpZW50V2VicGFjay5nZXRNb2R1bGUoZmlsdGVyLCBmYWxzZSk7XHJcblxyXG4gICAgICAgIHJldHVybiBpc0RlZmF1bHQgPyBtb2QuZGVmYXVsdCA6IG1vZDtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHByb2Nlc3MuZW52LkNMSUVOVF9NT0QgPT0gXCJiZXR0ZXJkaXNjb3JkXCIpIHJldHVybiBjbGllbnRXZWJwYWNrLmZpbmRNb2R1bGUoZmlsdGVyKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRBbGwoZmlsdGVyKSB7XHJcbiAgICBpZiAocHJvY2Vzcy5lbnYuQ0xJRU5UX01PRCA9PSBcImdvb3NlbW9kXCIpIHJldHVybiBjbGllbnRXZWJwYWNrLmZpbmRBbGwoZmlsdGVyKTtcclxuICAgIGVsc2UgaWYgKHByb2Nlc3MuZW52LkNMSUVOVF9NT0QgPT0gXCJwb3dlcmNvcmR2MlwiKSByZXR1cm4gY2xpZW50V2VicGFjay5nZXRBbGxNb2R1bGVzKHggPT4geD8uZGVmYXVsdCAmJiBmaWx0ZXIoeC5kZWZhdWx0KSwgZmFsc2UpIHx8IGNsaWVudFdlYnBhY2suZ2V0TW9kdWxlKGZpbHRlciwgZmFsc2UpO1xyXG4gICAgZWxzZSBpZiAocHJvY2Vzcy5lbnYuQ0xJRU5UX01PRCA9PSBcImJldHRlcmRpc2NvcmRcIikgcmV0dXJuIGNsaWVudFdlYnBhY2suZmluZEFsbE1vZHVsZXMoZmlsdGVyKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRCeVByb3BzKC4uLnByb3BzKSB7XHJcbiAgICByZXR1cm4gZmluZChtID0+IHByb3BzLmV2ZXJ5KHAgPT4gbT8uW3BdICE9PSB1bmRlZmluZWQpKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRBbGxCeVByb3BzKC4uLnByb3BzKSB7XHJcbiAgICByZXR1cm4gZmluZEFsbChtID0+IHByb3BzLmV2ZXJ5KHAgPT4gbT8uW3BdICE9PSB1bmRlZmluZWQpKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRCeVByb3RvdHlwZSguLi5wcm9wcykge1xyXG4gICAgcmV0dXJuIGZpbmQobSA9PiBwcm9wcy5ldmVyeShwID0+IG0/LnByb3RvdHlwZT8uW3BdICE9PSB1bmRlZmluZWQpKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRBbGxCeVByb3RvdHlwZSguLi5wcm9wcykge1xyXG4gICAgcmV0dXJuIGZpbmRBbGwobSA9PiBwcm9wcy5ldmVyeShwID0+IG0/LnByb3RvdHlwZT8uW3BdICE9PSB1bmRlZmluZWQpKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRCeURpc3BsYXlOYW1lKG5hbWUsIHJldHVybkRlZmF1bHQ9dHJ1ZSkge1xyXG4gICAgbGV0IHJldCA9IGZpbmQobSA9PiBtPy5kZWZhdWx0Py5kaXNwbGF5TmFtZSA9PT0gbmFtZSk7XHJcbiAgICBpZiAocmV0dXJuRGVmYXVsdCkgcmV0dXJuIHJldC5kZWZhdWx0O1xyXG4gICAgcmV0dXJuIHJldDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRBbGxCeURpc3BsYXlOYW1lKG5hbWUpIHtcclxuICAgIHJldHVybiBmaW5kKG0gPT4gbT8uZGlzcGxheU5hbWUgPT09IG5hbWUpO1xyXG59XHJcbiIsIi8qKlxyXG4gKiB7QGxpbmsgaHR0cHM6Ly9kaXNjb3JkLmNvbS9hY2tub3dsZWRnZW1lbnRzL3xGdWxsIGxpc3Qgb2YgbGlicmFyaWVzIHRoYXQgRGlzY29yZCB1c2VzLn1cclxuICogQG1vZHVsZSB3ZWJwYWNrL2NvbW1vblxyXG4gKi9cclxuXHJcbmltcG9ydCB7IGZpbmQsIGZpbmRCeVByb3BzIH0gZnJvbSBcIi4uXCI7XHJcblxyXG5leHBvcnQgLyoqXHJcbiAqIERpc2NvcmQncyB7QGxpbmsgaHR0cHM6Ly9yZWFjdGpzLm9yZy98UmVhY3R9IGluc3RhbmNlLlxyXG4gKiBAbWVtYmVyb2YgbW9kdWxlOndlYnBhY2svY29tbW9uXHJcbiAqLyBjb25zdCBSZWFjdCA9IC8qI19fUFVSRV9fKi8gZmluZEJ5UHJvcHMoXCJ1c2VTdGF0ZVwiKTtcclxuXHJcbmV4cG9ydCAvKipcclxuICogRGlzY29yZCdzIHtAbGluayBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtZG9tLmh0bWx8UmVhY3RET019IGluc3RhbmNlLlxyXG4gKiBAbWVtYmVyb2YgbW9kdWxlOndlYnBhY2svY29tbW9uXHJcbiAqLyBjb25zdCBSZWFjdERPTSA9IC8qI19fUFVSRV9fKi8gZmluZEJ5UHJvcHMoXCJyZW5kZXJcIiwgXCJ1bm1vdW50Q29tcG9uZW50QXROb2RlXCIpO1xyXG5cclxuZXhwb3J0IC8qKlxyXG4gKiBEaXNjb3JkJ3Mge0BsaW5rIGh0dHBzOi8vcmVhY3Qtc3ByaW5nLmlvL3xSZWFjdCBTcHJpbmd9IGluc3RhbmNlLlxyXG4gKiBAbWVtYmVyb2YgbW9kdWxlOndlYnBhY2svY29tbW9uXHJcbiAqLyBjb25zdCBSZWFjdFNwcmluZyA9IC8qI19fUFVSRV9fKi8gZmluZEJ5UHJvcHMoXCJ1c2VTcHJpbmdcIiwgXCJ1c2VUcmFuc2l0aW9uXCIpO1xyXG5cclxuZXhwb3J0IC8qKlxyXG4gKiBEaXNjb3JkJ3Mge0BsaW5rIGh0dHBzOi8vbG9kYXNoLmNvbS98TG9kYXNofSBpbnN0YW5jZS5cclxuICogQG1lbWJlcm9mIG1vZHVsZTp3ZWJwYWNrL2NvbW1vblxyXG4gKi8gY29uc3QgTG9kYXNoID0gZ2xvYmFsVGhpcy5fO1xyXG5cclxuZXhwb3J0IC8qKiBcclxuICogQWxpYXMgb2YgTG9kYXNoXHJcbiAqLyBjb25zdCBfID0gZ2xvYmFsVGhpcy5fO1xyXG5cclxuZXhwb3J0IC8qKlxyXG4gKiBEaXNjb3JkJ3MgQXZhdGFyIG1hbmFnZXIuIFxyXG4gKiBAbWVtYmVyb2YgbW9kdWxlOndlYnBhY2svY29tbW9uXHJcbiAqLyBjb25zdCBBdmF0YXJNYW5hZ2VyID0gLyojX19QVVJFX18qLyBmaW5kQnlQcm9wcyhcImdldFVzZXJBdmF0YXJVUkxcIiwgXCJoYXNBbmltYXRlZEd1aWxkSWNvblwiKTtcclxuXHJcbmV4cG9ydCAvKipcclxuICogRGlzY29yZCdzIG1vZGFsIGFjdGlvbnMuIFxyXG4gKiBAbWVtYmVyb2YgbW9kdWxlOndlYnBhY2svY29tbW9uXHJcbiAqLyBjb25zdCBNb2RhbEFjdGlvbnMgPSAvKiNfX1BVUkVfXyovIGZpbmRCeVByb3BzKFxyXG5cdFwib3Blbk1vZGFsXCIsXHJcblx0XCJ1cGRhdGVNb2RhbFwiXHJcbik7XHJcblxyXG5leHBvcnQgLyoqXHJcbiAqIERpc2NvcmQncyBtb2RhbCBzdGFjay4gUGxlYXNlIHVzZSBNb2RhbEFjdGlvbnMgaW5zdGVhZCwgdGhpcyBvbmUgaXMgZGVwcmVjYXRlZFxyXG4gKiBAbWVtYmVyb2YgbW9kdWxlOndlYnBhY2svY29tbW9uXHJcbiAqIEBkZXByZWNhdGVkXHJcbiAqLyBjb25zdCBNb2RhbFN0YWNrID0gLyojX19QVVJFX18qLyBmaW5kQnlQcm9wcyhcclxuXHRcInB1c2hcIixcclxuXHRcInVwZGF0ZVwiLFxyXG5cdFwicG9wXCIsXHJcblx0XCJwb3BXaXRoS2V5XCJcclxuKTtcclxuXHJcbmV4cG9ydCAvKipcclxuICogRGlzY29yZCdzIGRpc3BhdGNoZXJcclxuICogQG1lbWJlcm9mIG1vZHVsZTp3ZWJwYWNrL2NvbW1vblxyXG4gKi8gY29uc3QgRGlzcGF0Y2hlciA9IC8qI19fUFVSRV9fKi8gZmluZEJ5UHJvcHMoXCJkaXJ0eURpc3BhdGNoXCIpO1xyXG5cclxuZXhwb3J0IC8qKlxyXG4gKiBGbHV44oSiXHJcbiAqIEBtZW1iZXJvZiBtb2R1bGU6d2VicGFjay9jb21tb25cclxuICovIGNvbnN0IEZsdXggPSAvKiNfX1BVUkVfXyovIGZpbmRCeVByb3BzKFwiU3RvcmVcIiwgXCJjb25uZWN0U3RvcmVzXCIpO1xyXG5cclxuIGV4cG9ydCAvKipcclxuICogRGlzY29yZCdzIEZsdXggRGlzcGF0Y2hlci4gV2lzaCBpIGtuZXcgd3RmIHRoaXMgaXNcclxuICogQG1lbWJlcm9mIG1vZHVsZTp3ZWJwYWNrL2NvbW1vblxyXG4gKi9jb25zdCBGbHV4RGlzcGF0Y2hlciA9IC8qI19fUFVSRV9fKi8gZmluZEJ5UHJvcHMoXHJcblx0XCJfY3VycmVudERpc3BhdGNoQWN0aW9uVHlwZVwiLFxyXG5cdFwiX3Byb2Nlc3NpbmdXYWl0UXVldWVcIlxyXG4pO1xyXG5cclxuZXhwb3J0IC8qKlxyXG4gKiBEaXNjb3JkJ3MgY29sb3IgdXRsc1xyXG4gKiBAbWVtYmVyb2YgbW9kdWxlOndlYnBhY2svY29tbW9uXHJcbiAqLyBjb25zdCBDb2xvclV0aWxzID0gLyojX19QVVJFX18qLyBmaW5kQnlQcm9wcyhcImlzVmFsaWRIZXhcIik7XHJcblxyXG5leHBvcnQgLyoqXHJcbiAqIERpc2NvcmQncyBjb25zdGFudHNcclxuICogQG1lbWJlcm9mIG1vZHVsZTp3ZWJwYWNrL2NvbW1vblxyXG4gKi8gY29uc3QgQ29uc3RhbnRzID0gLyojX19QVVJFX18qLyBmaW5kQnlQcm9wcyhcIkFQSV9IT1NUXCIpO1xyXG5cclxuZXhwb3J0IC8qKlxyXG4gKiBEaXNjb3JkJ3MgY29udGV4dCBtZW51IGhhbmRsZXJcclxuICogQG1lbWJlcm9mIG1vZHVsZTp3ZWJwYWNrL2NvbW1vblxyXG4gKi8gY29uc3QgQ29udGV4dE1lbnUgPSAvKiNfX1BVUkVfXyovIGZpbmRCeVByb3BzKFwib3BlbkNvbnRleHRNZW51XCIpO1xyXG5cclxuZXhwb3J0IC8qKlxyXG4gKiBEaXNjb3JkJ3MgcGxhdGZvcm0gY2hlY2tlclxyXG4gKiBAbWVtYmVyb2YgbW9kdWxlOndlYnBhY2svY29tbW9uXHJcbiAqLyBjb25zdCBQbGF0Zm9ybSA9IC8qI19fUFVSRV9fKi8gZmluZCgobSkgPT4gbS5QbGF0Zm9ybVR5cGVzPy5XSU5ET1dTKTsiLCJpbXBvcnQgeyBSZWFjdCwgUmVhY3RET00sIFJlYWN0U3ByaW5nLCBMb2Rhc2ggfSBmcm9tIFwiLi4vd2VicGFjay9jb21tb25cIjtcclxuSXR0YWlJbnRlcm5hbHMuUmVhY3QgPSBSZWFjdDtcclxuSXR0YWlJbnRlcm5hbHMuUmVhY3RET00gPSBSZWFjdERPTTtcclxuSXR0YWlJbnRlcm5hbHMuUmVhY3RTcHJpbmcgPSBSZWFjdFNwcmluZztcclxuSXR0YWlJbnRlcm5hbHMuTG9kYXNoID0gTG9kYXNoO1xyXG4iLCJpbXBvcnQgeyBtYW5pZmVzdCB9IGZyb20gXCJAaXR0YWkvY29uZmlnXCI7XHJcbmltcG9ydCB7IFJlYWN0IH0gZnJvbSBcIi4uL3dlYnBhY2tcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJEUGx1Z2luIHtcclxuXHRfX2l0dGFpSW50ZXJuYWxzID0ge1xyXG5cdFx0Z2V0QWxsU2V0dGluZ3M6ICgpID0+IHtcclxuXHRcdFx0cmV0dXJuIGdsb2JhbFRoaXMuQmRBcGkubG9hZERhdGEobWFuaWZlc3QubmFtZSwgXCJzZXR0aW5nc1wiKSA/PyB7fTtcclxuXHRcdH0sXHJcblx0XHRnZXRTZXR0aW5nOiAoa2V5LCBkZWZhdWx0VmFsdWUpID0+IHtcclxuXHRcdFx0cmV0dXJuIChnbG9iYWxUaGlzLkJkQXBpLmxvYWREYXRhKG1hbmlmZXN0Lm5hbWUsIFwic2V0dGluZ3NcIikgPz8ge30pW2tleV0gPz8gZGVmYXVsdFZhbHVlO1xyXG5cdFx0fSxcclxuXHRcdHNldFNldHRpbmdzOiAobmV3U2V0dGluZ3MpID0+IHtcclxuXHRcdFx0aWYgKHR5cGVvZiBuZXdTZXR0aW5ncyAhPT0gXCJvYmplY3RcIikgcmV0dXJuO1xyXG5cdFx0XHRnbG9iYWxUaGlzLkJkQXBpLnNhdmVEYXRhKFxyXG5cdFx0XHRcdG1hbmlmZXN0Lm5hbWUsXHJcblx0XHRcdFx0XCJzZXR0aW5nc1wiLFxyXG5cdFx0XHRcdE9iamVjdC5hc3NpZ24odGhpcy5fX2l0dGFpSW50ZXJuYWxzLmdldEFsbFNldHRpbmdzKCksIG5ld1NldHRpbmdzKVxyXG5cdFx0XHQpO1xyXG5cdFx0fSxcclxuXHRcdHNldFNldHRpbmc6IChrZXksIHZhbHVlKSA9PiB7XHJcblx0XHRcdGdsb2JhbFRoaXMuQmRBcGkuc2F2ZURhdGEoXHJcblx0XHRcdFx0bWFuaWZlc3QubmFtZSxcclxuXHRcdFx0XHRcInNldHRpbmdzXCIsXHJcblx0XHRcdFx0T2JqZWN0LmFzc2lnbih0aGlzLl9faXR0YWlJbnRlcm5hbHMuZ2V0QWxsU2V0dGluZ3MoKSwge1trZXldOiB2YWx1ZX0pXHJcblx0XHRcdCk7XHJcblx0XHR9LFxyXG5cdFx0cmVtb3ZlU2V0dGluZzogKGtleSkgPT4ge1xyXG5cdFx0XHRsZXQgb3V0cHV0U2V0dGluZyA9IHRoaXMuX19pdHRhaUludGVybmFscy5nZXRBbGxTZXR0aW5ncygpXHJcblx0XHRcdGRlbGV0ZSBvdXRwdXRTZXR0aW5nPy5ba2V5XVxyXG5cdFx0XHRnbG9iYWxUaGlzLkJkQXBpLnNhdmVEYXRhKFxyXG5cdFx0XHRcdG1hbmlmZXN0Lm5hbWUsXHJcblx0XHRcdFx0XCJzZXR0aW5nc1wiLFxyXG5cdFx0XHRcdG91dHB1dFNldHRpbmdcclxuXHRcdFx0KTtcclxuXHRcdH0sXHJcblx0XHRyZXNldFNldHRpbmdzOiAoKSA9PiB7XHJcblx0XHRcdGdsb2JhbFRoaXMuQmRBcGkuc2F2ZURhdGEobWFuaWZlc3QubmFtZSwgXCJzZXR0aW5nc1wiLCB7fSlcclxuXHRcdH0sXHJcblxyXG5cdFx0c2V0U2V0dGluZ3NQYW5lbDogKGNvbXBvbmVudCkgPT4ge1xyXG5cdFx0XHR0aGlzLmdldFNldHRpbmdzUGFuZWwgPSAoKSA9PiB7XHJcblx0XHRcdFx0dHJ5IHtcclxuXHRcdFx0XHRcdGlmICh0eXBlb2YgY29tcG9uZW50ID09PSBcImZ1bmN0aW9uXCIpXHJcblx0XHRcdFx0XHRcdGNvbXBvbmVudCA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoY29tcG9uZW50KTtcclxuXHRcdFx0XHRcdHJldHVybiBjb21wb25lbnQ7XHJcblx0XHRcdFx0fSBjYXRjaCAoZSkge1xyXG5cdFx0XHRcdFx0dGhpcy5lcnJvcihcIkZhaWxlZCB0byBsb2FkIHNldHRpbmdzIHBhbmVsLlwiLCBlKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0cmV0dXJuIG51bGw7XHJcblx0XHRcdH07XHJcblx0XHR9LFxyXG5cdFx0cmVtb3ZlU2V0dGluZ3NQYW5lbDogKCkgPT4ge1xyXG5cdFx0XHRkZWxldGUgdGhpcy5nZXRTZXR0aW5nc1BhbmVsO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0bG9nKCkge1xyXG5cdFx0bG9nZ2VyLmxvZyguLi5hcmd1bWVudHMpO1xyXG5cdH1cclxuXHRkZWJ1ZygpIHtcclxuXHRcdGxvZ2dlci5kZWJ1ZyguLi5hcmd1bWVudHMpO1xyXG5cdH1cclxuXHR3YXJuKCkge1xyXG5cdFx0bG9nZ2VyLndhcm4oLi4uYXJndW1lbnRzKTtcclxuXHR9XHJcblx0ZXJyb3IoKSB7XHJcblx0XHRsb2dnZXIuZXJyb3IoLi4uYXJndW1lbnRzKTtcclxuXHR9XHJcbn1cclxuIiwiZXhwb3J0IGNvbnN0IGdldCA9IChrZXksIGRlZmF1bHRWYWx1ZSkgPT4ge1xyXG4gICAgcmV0dXJuIHNldHRpbmdzSW5zdGFuY2UuZ2V0U2V0dGluZyhrZXksIGRlZmF1bHRWYWx1ZSlcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldEFsbCA9ICgpID0+IHtcclxuICAgIHJldHVybiBzZXR0aW5nc0luc3RhbmNlLmdldEFsbFNldHRpbmdzKClcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHNldCA9IChrZXksIHZhbHVlKSA9PiB7XHJcbiAgICByZXR1cm4gc2V0dGluZ3NJbnN0YW5jZS5zZXRTZXR0aW5nKGtleSwgdmFsdWUpXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBzZXRBbGwgPSAoc2V0dGluZ3MpID0+IHtcclxuICAgIHJldHVybiBzZXR0aW5nc0luc3RhbmNlLnNldFNldHRpbmdzKHNldHRpbmdzKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcmVtb3ZlID0gKGtleSkgPT4ge1xyXG4gICAgcmV0dXJuIHNldHRpbmdzSW5zdGFuY2UucmVtb3ZlU2V0dGluZyhrZXksIHVuZGVmaW5lZClcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHJlc2V0ID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIHNldHRpbmdzSW5zdGFuY2UucmVzZXRTZXR0aW5ncygpXHJcbn1cclxuXHJcbi8vIEhBQ0tcclxuZXhwb3J0IGxldCBzZXR0aW5nc0luc3RhbmNlO1xyXG5leHBvcnQgY29uc3Qgc2V0SW5zdGFuY2UgPSAoaSkgPT4ge1xyXG4gICAgc2V0dGluZ3NJbnN0YW5jZSA9IGlcclxufVxyXG5cclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFNldHRpbmdzQVBJIHtcclxuLy8gICAgIGNvbnN0cnVjdG9yKHBsdWdpbkluc3RhbmNlOiBQbHVnaW4pIHtcclxuLy8gICAgICAgICB0aGlzLl9fcGx1Z2luSW5zdGFuY2UgPSBwbHVnaW5JbnN0YW5jZTtcclxuLy8gICAgIH1cclxuXHJcbi8vICAgICBwcml2YXRlIF9fcGx1Z2luSW5zdGFuY2U6IFBsdWdpblxyXG5cclxuLy8gICAgIGdldCAoa2V5OiBzdHJpbmcsIGRlZmF1bHRWYWx1ZTogYW55KSA6IGFueSB7XHJcbi8vICAgICAgICAgcmV0dXJuIHRoaXMuX19wbHVnaW5JbnN0YW5jZS5fX2l0dGFpSW50ZXJuYWxQbHVnaW4uX19pdHRhaUludGVybmFscy5nZXRTZXR0aW5nKGtleSwgZGVmYXVsdFZhbHVlKTsgLy8gWWVzIHRoaXMgaXMgZXhjZXNzaXZlLiBUb28gYmFkLlxyXG4vLyAgICAgfVxyXG5cclxuLy8gICAgIGdldEFsbCAoKSA6IE9iamVjdCB7XHJcbi8vICAgICAgICAgcmV0dXJuIHRoaXMuX19wbHVnaW5JbnN0YW5jZS5fX2l0dGFpSW50ZXJuYWxQbHVnaW4uX19pdHRhaUludGVybmFscy5nZXRBbGxTZXR0aW5ncygpO1xyXG4vLyAgICAgfVxyXG5cclxuLy8gICAgIHNldCAoa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpIDogdm9pZCB7XHJcbi8vICAgICAgICAgcmV0dXJuIHRoaXMuX19wbHVnaW5JbnN0YW5jZS5fX2l0dGFpSW50ZXJuYWxQbHVnaW4uX19pdHRhaUludGVybmFscy5zZXRTZXR0aW5nKGtleSwgdmFsdWUpO1xyXG4vLyAgICAgfVxyXG5cclxuLy8gICAgIHNldEFsbCAoc2V0dGluZ3M6IE9iamVjdCkgOiB2b2lkIHtcclxuLy8gICAgICAgICByZXR1cm4gdGhpcy5fX3BsdWdpbkluc3RhbmNlLl9faXR0YWlJbnRlcm5hbFBsdWdpbi5fX2l0dGFpSW50ZXJuYWxzLnNldFNldHRpbmdzKHNldHRpbmdzKTtcclxuLy8gICAgIH1cclxuLy8gfSIsImltcG9ydCB7IFJlYWN0IH0gZnJvbSBcIi4uL3dlYnBhY2tcIjtcclxuaW1wb3J0IHsgZmluZEJ5UHJvcHMsIGZpbmRCeURpc3BsYXlOYW1lIH0gZnJvbSBcIi4uL3dlYnBhY2tcIjtcclxuXHJcbmNvbnN0IGNsYXNzZXMgPSB7XHJcblx0ZGVmYXVsdDogLyojX19QVVJFX18qLygoKT0+ZmluZEJ5UHJvcHMoXCJpY29uXCIsIFwic2VsZWN0ZWRcIikuaWNvbikoKSxcclxuXHRjb250ZXh0bWVudTogLyojX19QVVJFX18qLygoKT0+ZmluZEJ5UHJvcHMoXCJpY29uXCIsIFwic3VibWVudVwiKS5pY29uKSgpLFxyXG5cdG1pbmlwb3BvdmVyOiAvKiNfX1BVUkVfXyovKCgpPT5maW5kQnlQcm9wcyhcImljb25cIiwgXCJpc0hlYWRlclwiKS5pY29uKSgpLFxyXG59O1xyXG5cclxuLyoqXHJcbiAqIFJlbmRlciBhbnkgRGlzY29yZCBpY29uLlxyXG4gKiBAbmFtZSBEaXNjb3JkSWNvblxyXG4gKiBAcGFyYW0ge29iamVjdH0gcHJvcHMgUmVhY3QgcHJvcGVydGllcy4gQWxsIHVubGlzdGVkIHByb3BlcnRpZXMgd2lsbCBiZSBwYXNzZWQgZG93biB0byB0aGUgY29tcG9uZW50LlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gW3Byb3BzLnR5cGU9XCJkZWZhdWx0XCJdIFRoZSBGb250QXdlc29tZSBpY29uIHR5cGUuIGBkZWZhdWx0YCwgYG1pbmlwb3BvdmVyYCwgYGNvbnRleHRtZW51YCwgYG5vbmVgLlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gW3Byb3BzLm5hbWVdIFRoZSBgZGlzcGxheU5hbWVgIG9mIHRoZSBpY29uIGNvbXBvbmVudCBpbiBEaXNjb3JkLlxyXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNvbXBvbmVudHNcclxuICogQGV4YW1wbGVcclxuICogcmV0dXJuIChcclxuICogICA8RGlzY29yZEljb24gdHlwZT1cIm1pbmlwb3BvdmVyXCIgLz5cclxuICogKTtcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERpc2NvcmRJY29uKHByb3BzKSB7XHJcblx0Y29uc3QgY2hvb3NlbkNsYXNzID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XHJcblx0XHRzd2l0Y2ggKHByb3BzLnR5cGUpIHtcclxuXHRcdFx0Y2FzZSBcIm1pbmlwb3BvdmVyXCI6XHJcblx0XHRcdFx0cmV0dXJuIGNsYXNzZXMubWluaXBvcG92ZXI7XHJcblx0XHRcdGNhc2UgXCJjb250ZXh0bWVudVwiOlxyXG5cdFx0XHRcdHJldHVybiBjbGFzc2VzLmNvbnRleHRtZW51O1xyXG5cdFx0XHRjYXNlIFwibm9uZVwiOlxyXG5cdFx0XHRcdHJldHVybiBcIlwiO1xyXG5cdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdHJldHVybiBjbGFzc2VzLmRlZmF1bHRcclxuXHRcdH1cclxuXHR9KVxyXG5cdGNvbnN0IEljb25TVkcgPVxyXG5cdFx0ZmluZEJ5RGlzcGxheU5hbWUocHJvcHMubmFtZSkgPz9cclxuXHRcdCgoKSA9PiB7XHJcblx0XHRcdHJldHVybiBcIlwiO1xyXG5cdFx0fSk7XHJcblx0cmV0dXJuIChcclxuXHRcdDxJY29uU1ZHXHJcblx0XHRcdHsuLi5wcm9wc31cclxuXHRcdFx0Y2xhc3NOYW1lPXtbY2hvb3NlbkNsYXNzLCBwcm9wcy5jbGFzc05hbWVdLmZpbHRlcihjID0+IHR5cGVvZiBjID09PSBcInN0cmluZ1wiKS5qb2luKFwiIFwiKX1cclxuXHRcdFx0c3R5bGU9e09iamVjdC5hc3NpZ24oe30sIHtcclxuXHRcdFx0XHR3aWR0aDogXCJpbmhlcml0XCIsXHJcblx0XHRcdFx0aGVpZ2h0OiBcImluaGVyaXRcIixcclxuXHRcdFx0fSwgcHJvcHMuc3R5bGUpfVxyXG5cdFx0Lz5cclxuXHQpO1xyXG59IiwiaW1wb3J0IHsgUmVhY3QgfSBmcm9tIFwiLi4vd2VicGFja1wiO1xyXG5pbXBvcnQgeyBmaW5kQnlQcm9wcyB9IGZyb20gXCIuLi93ZWJwYWNrXCI7XHJcblxyXG5jb25zdCBMYXllclByb3ZpZGVyID0gLyojX19QVVJFX18qLygoKT0+ZmluZEJ5UHJvcHMoXCJBcHBMYXllclByb3ZpZGVyXCIpLkFwcExheWVyUHJvdmlkZXIoKS5wcm9wcy5sYXllckNvbnRleHRcclxuXHQuUHJvdmlkZXIpKCk7XHJcbmNvbnN0IEFjY2Vzc2liaWxpdHlQcm92aWRlciA9IC8qI19fUFVSRV9fKi8oKCk9PmZpbmRCeVByb3BzKFxyXG5cdFwiQWNjZXNzaWJpbGl0eVByZWZlcmVuY2VzQ29udGV4dFwiXHJcbikuQWNjZXNzaWJpbGl0eVByZWZlcmVuY2VzQ29udGV4dC5Qcm92aWRlcikoKTtcclxuY29uc3QgbGF5ZXJDbGFzcyA9IC8qI19fUFVSRV9fKi8oKCk9PmZpbmRCeVByb3BzKFwiTGF5ZXJDbGFzc05hbWVcIikuTGF5ZXJDbGFzc05hbWUpKCk7XHJcblxyXG4vKipcclxuICogV3JhcCBhIGNvbXBvbmVudCByZW5kZXJlZCBvdXQtb2YtdHJlZSBpbiBEaXNjb3JkJ3MgcHJvdmlkZXJzXHJcbiAqIEBuYW1lIERpc2NvcmRQcm92aWRlcnNcclxuICogQG1lbWJlcm9mIG1vZHVsZTpjb21wb25lbnRzXHJcbiAqIEBleGFtcGxlXHJcbiAqIHJldHVybiAoXHJcbiAqICAgPERpc2NvcmRQcm92aWRlcnM+XHJcbiAqIFx0XHQ8V2hhdGV2ZXIvPlxyXG4gKiBcdCA8L0Rpc2NvcmRQcm92aWRlcnM+XHJcbiAqICk7XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEaXNjb3JkUHJvdmlkZXJzKHByb3BzKSB7XHJcblx0cmV0dXJuIChcclxuXHRcdDxBY2Nlc3NpYmlsaXR5UHJvdmlkZXJcclxuXHRcdFx0dmFsdWU9e3sgcmVkdWNlZE1vdGlvbjogeyBlbmFibGVkOiBmYWxzZSwgcmF3VmFsdWU6IFwibm8tcHJlZmVyZW5jZVwiIH0gfX1cclxuXHRcdD5cclxuXHRcdFx0PExheWVyUHJvdmlkZXJcclxuXHRcdFx0XHR2YWx1ZT17W2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYXBwLW1vdW50ID4gLlwiICsgbGF5ZXJDbGFzcyldfVxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0e3Byb3BzLmNoaWxkcmVufVxyXG5cdFx0XHQ8L0xheWVyUHJvdmlkZXI+XHJcblx0XHQ8L0FjY2Vzc2liaWxpdHlQcm92aWRlcj5cclxuXHQpO1xyXG59XHJcbiIsImltcG9ydCB7IFJlYWN0LCBGbHV4IH0gZnJvbSBcIi4uL3dlYnBhY2tcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZsdXhXcmFwcGVyKHByb3BzKSB7XHJcblx0aWYgKCFwcm9wcy5jaGlsZHJlbi5kaXNwbGF5TmFtZSkgcHJvcHMuY2hpbGRyZW4uZGlzcGxheU5hbWUgPSBcIkZsdXhQcm94eVwiO1xyXG5cdGNvbnN0IENvbm5lY3RlZENvbXBvbmVudCA9IEZsdXguY29ubmVjdFN0b3JlcyhcclxuXHRcdHByb3BzLnN0b3JlcyA/IE9iamVjdC52YWx1ZXMocHJvcHMuc3RvcmVzKSA6IFtdLFxyXG5cdFx0cHJvcHMuY3JlYXRlUHJvcHMgPz9cclxuXHRcdFx0KCgpID0+IHtcclxuXHRcdFx0XHRyZXR1cm4geyBbTWF0aC5yYW5kb20oKV06IE1hdGgucmFuZG9tKCkgfTtcclxuXHRcdFx0fSlcclxuXHQpKHByb3BzLmNoaWxkcmVuKTtcclxuXHRyZXR1cm4gPENvbm5lY3RlZENvbXBvbmVudCB7Li4ucHJvcHMuc3RvcmVzfSAvPjtcclxufVxyXG4iLCJpbXBvcnQgeyBmaW5kQnlQcm9wcyB9IGZyb20gXCIuLi93ZWJwYWNrXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQ2hhbmdlbG9nID0gLyojX19QVVJFX18qLyBmaW5kQnlQcm9wcyhcImxlYWRcIiwgXCJzb2NpYWxMaW5rXCIpXHJcbmV4cG9ydCBjb25zdCBDaGFuZ2Vsb2dNb2RhbCA9IC8qI19fUFVSRV9fKi8gZmluZEJ5UHJvcHMoXCJtYXhNb2RhbFdpZHRoXCIsIFwiY29udGVudFwiKSAvL2kgYXNzdW1lIGl0cyByZWxhdGVkIHRvIHRoZSBjaGFuZ2Vsb2cgbW9kYWxcclxuZXhwb3J0IGNvbnN0IE1hcmdpbnMgPSAvKiNfX1BVUkVfXyovIGZpbmRCeVByb3BzKFwibWFyZ2luTGFyZ2VcIiwgXCJtYXJnaW5Ub3AyMFwiKVxyXG5leHBvcnQgY29uc3QgQ2FyZExvb2sgPSAvKiNfX1BVUkVfXyovIGZpbmRCeVByb3BzKFwiYXJyb3dcIiwgXCJjb250YWluZXJcIiwgXCJkZXNjcmlwdGlvblwiKSIsImltcG9ydCB7IFJlYWN0IH0gZnJvbSBcIi4uL3dlYnBhY2tcIjtcclxuaW1wb3J0IERpc2NvcmRJY29uIGZyb20gXCIuL0Rpc2NvcmRJY29uXCI7XHJcbmltcG9ydCB7IFRleHQgfSBmcm9tIFwiLi9pbmRleFwiO1xyXG5pbXBvcnQgeyBDYXJkTG9vayB9IGZyb20gXCIuLi9jbGFzc2VzXCI7XHJcblxyXG4vKipcclxuICogQSBDYXRlZ29yeSBjb21wb25lbnQgdG8gaGlkZSBjb21wb25lbnRzLiBOb3RlIHRoYXQgdGhpcyBkb2VzIG5vdCB1c2UgdGhlIGN1cnJlbnQgY2F0ZWdvcnkgY29tcG9uZW50IG9mIHRoZSBtb2QuXHJcbiAqIEBuYW1lIERpc2NvcmRQcm92aWRlcnNcclxuICogQG1lbWJlcm9mIG1vZHVsZTpjb21wb25lbnRzXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wcyBSZWFjdCBwcm9wZXJ0aWVzLlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gW3Byb3BzLnRpdGxlXSBUaGUgdGl0bGUgb2YgdGhlIGNhdGVnb3J5LlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gW3Byb3BzLmRlc2NyaXB0aW9uXSBUaGUgZGVzY3JpcHRpb24gb2YgdGhlIGNhdGVnb3J5LlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gW3Byb3BzLmljb25dIFRoZSBkZXNjcmlwdGlvbiBvZiB0aGUgY2F0ZWdvcnkuXHJcbiAqIEBleGFtcGxlXHJcbiAqIHJldHVybiAoXHJcbiAqICAgPENhdGVnb3J5IHRpdGxlPVwiTmFtZVwiPlxyXG4gKiBcdFx0PFdoYXRldmVyLz5cclxuICogXHQgPC9DYXRlZ29yeT5cclxuICogKTtcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhdGVnb3J5KHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBpY29uLCBjaGlsZHJlbiwgb3BlbmVkQnlEZWZhdWx0ID0gZmFsc2UgfSkge1xyXG4gICAgY29uc3QgW29wZW5lZCwgc2V0T3BlbmVkXSA9IFJlYWN0LnVzZVN0YXRlKG9wZW5lZEJ5RGVmYXVsdCk7XHJcblxyXG4gICAgcmV0dXJuIDxkaXYgc3R5bGVzPXt7bWFyZ2luQm90dG9tOiBcIjIwcHhcIn19PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtDYXJkTG9vay5jb250YWluZXJ9IG9uQ2xpY2s9eygpID0+IHNldE9wZW5lZCghb3BlbmVkKX0+XHJcbiAgICAgICAgICAgIHtpY29uICYmIDxkaXYgY2xhc3NOYW1lPXtDYXJkTG9vay5pY29ufT5cclxuICAgICAgICAgICAgICAgIDxEaXNjb3JkSWNvbiBuYW1lPXtpY29ufSBzdHlsZT17e3dpZHRoOiBcIjIwcHhcIiwgaGVpZ2h0OiBcIjIwcHhcIn19IC8+XHJcbiAgICAgICAgICAgIDwvZGl2Pn1cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e0NhcmRMb29rLmRlc2NyaXB0aW9ufT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUtMmRzRExuXCI+e3RpdGxlfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAge2Rlc2NyaXB0aW9uICYmIDxUZXh0PntkZXNjcmlwdGlvbn08L1RleHQ+fVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e0NhcmRMb29rLmFycm93fT5cclxuICAgICAgICAgICAgICAgIDxEaXNjb3JkSWNvbiBuYW1lPVwiRHJvcGRvd25BcnJvd1wiIHN0eWxlPXt7d2lkdGg6IFwiMjRweFwiLCBoZWlnaHQ6IFwiMjRweFwiLCBjb2xvcjogXCJ2YXIoLS1pbnRlcmFjdGl2ZS1hY3RpdmUpXCIsIHRyYW5zZm9ybTogIW9wZW5lZCA/IFwicm90YXRlKC05MGRlZylcIiA6IHZvaWQgMH19IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICB7b3BlbmVkICYmIDxkaXYgc3R5bGU9e3ttYXJnaW5Ub3A6IFwiMTZweFwiLCBwYWRkaW5nOiBcIjAgMjBweFwifX0+e2NoaWxkcmVufTwvZGl2Pn1cclxuXHJcbiAgICAgICAgey8qIDxGb3Jtcy5Gb3JtRGl2aWRlciBjbGFzc05hbWU9XCJkaXZpZGVyRGVmYXVsdC0zQzItd3NcIi8+ICovfVxyXG4gICAgPC9kaXY+XHJcbn1cclxuIiwiLyoqXHJcbiAqIEBtb2R1bGUgY29tcG9uZW50c1xyXG4gKi9cclxuXHJcbmltcG9ydCB7IFJlYWN0LCBmaW5kQnlEaXNwbGF5TmFtZSwgZmluZEJ5UHJvcHMsIGZpbmQgfSBmcm9tIFwiLi4vd2VicGFja1wiO1xyXG5cclxuLy8gRG9uJ3QgcmUtZXhwb3J0IG91ciBjb21wb25lbnRzIGFzIHRoZXkgd29uJ3QgdHJlZXNoYWtlIHByb3Blcmx5LiBJbnN0ZWFkLCBwZW9wbGUgY2FuIG1hbnVhbGx5IGltcG9ydCB0aGVtLlxyXG5leHBvcnQgeyBkZWZhdWx0IGFzIERpc2NvcmRJY29uIH0gZnJvbSBcIi4vRGlzY29yZEljb25cIjtcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBEaXNjb3JkUHJvdmlkZXJzIH0gZnJvbSBcIi4vRGlzY29yZFByb3ZpZGVyc1wiO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIEZsdXhXcmFwcGVyIH0gZnJvbSBcIi4vRmx1eFdyYXBwZXJcIjtcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBDYXRlZ29yeSB9IGZyb20gXCIuL0NhdGVnb3J5XCI7XHJcblxyXG4vLyBXcmFwcGVyIGZvciBTd2l0Y2ggY29tcG9uZW50IHRvIGZpeCB0aGUgc3dpdGNoIGJveCBub3QgYmVpbmcgdXBkYXRhYmxlLiBDaGVjayBodHRwczovL2dpdGh1Yi5jb20vQmV0dGVyRGlzY29yZEJ1aWxkZXIvYmRidWlsZGVyL2Jsb2IvbWFzdGVyL2NvbW1vbi9ob29rcy9jcmVhdGVVcGRhdGVXcmFwcGVyLmpzXHJcbmV4cG9ydCBjb25zdCBtYWtlVXBkYXRlV3JhcHBlciA9IChDb21wb25lbnQsIGNoZWNrUHJvcE5hbWUgPSBcInZhbHVlXCIsIHR5cGUgPSBcInN3aXRjaFwiKSA9PiB7XHJcbiAgICBjb25zdCB0eXBlU3dpdGNoID0gKHYpID0+IHtcclxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBcInN3aXRjaFwiOiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgXCJyYWRpb1wiOiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdi52YWx1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB2XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKHByb3BzKSA9PiB7XHJcbiAgICAgICAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSBSZWFjdC51c2VTdGF0ZShwcm9wc1tjaGVja1Byb3BOYW1lXSlcclxuICAgICAgICByZXR1cm4gPENvbXBvbmVudFxyXG4gICAgICAgICAgICB7Li4ue1xyXG4gICAgICAgICAgICAgICAgLi4ucHJvcHMsXHJcbiAgICAgICAgICAgICAgICBbY2hlY2tQcm9wTmFtZV06IHZhbHVlLFxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U6ICguLi5hcmdzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBhcmdzWzBdXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBwcm9wcy5vbkNoYW5nZSA9PT0gXCJmdW5jdGlvblwiKSBwcm9wcy5vbkNoYW5nZSh2YWx1ZSlcclxuICAgICAgICAgICAgICAgICAgICBzZXRWYWx1ZSh0eXBlU3dpdGNoKHZhbHVlKSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAvPlxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQnV0dG9uID0gLyojX19QVVJFX18qL2ZpbmRCeVByb3BzKFwiQ29sb3JzXCIsIFwiTG9va3NcIiwgXCJEcm9wZG93blNpemVzXCIpO1xyXG5leHBvcnQgY29uc3QgU3Bpbm5lciA9IC8qI19fUFVSRV9fKi9maW5kQnlEaXNwbGF5TmFtZShcIlNwaW5uZXJcIik7XHJcbmV4cG9ydCBjb25zdCBUZXh0ID0gLyojX19QVVJFX18qL2ZpbmRCeURpc3BsYXlOYW1lKFwiTGVnYWN5VGV4dFwiKTtcclxuZXhwb3J0IGNvbnN0IFRleHRJbnB1dCA9IC8qI19fUFVSRV9fKi9maW5kQnlEaXNwbGF5TmFtZShcIlRleHRJbnB1dFwiKTtcclxuZXhwb3J0IGNvbnN0IFRvb2x0aXAgPSAvKiNfX1BVUkVfXyovZmluZEJ5RGlzcGxheU5hbWUoXCJUb29sdGlwXCIpO1xyXG5leHBvcnQgY29uc3QgVG9vbHRpcENvbnRhaW5lciA9IC8qI19fUFVSRV9fKi8oKCkgPT4gZmluZEJ5UHJvcHMoXCJUb29sdGlwQ29udGFpbmVyXCIpPy5Ub29sdGlwQ29udGFpbmVyKSgpO1xyXG5leHBvcnQgY29uc3QgU2xpZGVJbiA9IC8qI19fUFVSRV9fKi9maW5kQnlEaXNwbGF5TmFtZShcIlNsaWRlSW5cIik7XHJcbmV4cG9ydCBjb25zdCBTZXR0aW5nc05vdGljZSA9IC8qI19fUFVSRV9fKi9maW5kQnlEaXNwbGF5TmFtZShcIlNldHRpbmdzTm90aWNlXCIpO1xyXG5leHBvcnQgY29uc3QgVHJhbnNpdGlvbkdyb3VwID0gLyojX19QVVJFX18qL2ZpbmRCeURpc3BsYXlOYW1lKFwiVHJhbnNpdGlvbkdyb3VwXCIpO1xyXG5leHBvcnQgY29uc3QgRmxleCA9IC8qI19fUFVSRV9fKi9maW5kQnlEaXNwbGF5TmFtZShcIkZsZXhcIik7XHJcbmV4cG9ydCBjb25zdCBDYXJkID0gLyojX19QVVJFX18qL2ZpbmRCeURpc3BsYXlOYW1lKFwiQ2FyZFwiKTtcclxuZXhwb3J0IGNvbnN0IFBvcG91dCA9IC8qI19fUFVSRV9fKi9maW5kQnlEaXNwbGF5TmFtZShcIlBvcG91dFwiKTtcclxuZXhwb3J0IGNvbnN0IFByb2dyZXNzID0gLyojX19QVVJFX18qL2ZpbmRCeURpc3BsYXlOYW1lKFwiUHJvZ3Jlc3NcIik7XHJcbmV4cG9ydCBjb25zdCBNb2RhbCA9IC8qI19fUFVSRV9fKi9maW5kQnlQcm9wcyhcIk1vZGFsUm9vdFwiKVxyXG5leHBvcnQgY29uc3QgRm9ybXMgPSAvKiNfX1BVUkVfXyovZmluZEJ5UHJvcHMoJ0Zvcm1JdGVtJylcclxuZXhwb3J0IGNvbnN0IENvbG9yUGlja2VyID0gLyojX19QVVJFX18qL2ZpbmRCeURpc3BsYXlOYW1lKFwiQ29sb3JQaWNrZXJcIilcclxuZXhwb3J0IGNvbnN0IEFuY2hvciA9IC8qI19fUFVSRV9fKi9maW5kQnlEaXNwbGF5TmFtZShcIkFuY2hvclwiKVxyXG5leHBvcnQgY29uc3QgSGVhZGluZyA9IC8qI19fUFVSRV9fKi8oKCkgPT4gZmluZEJ5UHJvcHMoXCJIZWFkaW5nXCIpLkhlYWRpbmcpKCk7XHJcbmV4cG9ydCBjb25zdCBLZXlib2FyZFNob3J0Y3V0ID0gLyojX19QVVJFX18qLygoKSA9PiBmaW5kQnlQcm9wcyhcIlBSRVRUWV9LRVlTXCIpLmRlZmF1bHQpKCk7XHJcbmV4cG9ydCBjb25zdCBTZWFyY2hCYXIgPSAvKiNfX1BVUkVfXyovKCgpID0+IGZpbmRCeVByb3BzKFwiU2VhcmNoSWNvblwiKS5kZWZhdWx0KSgpO1xyXG5leHBvcnQgY29uc3QgT3JpZ2luYWxSYWRpb0dyb3VwID0gLyojX19QVVJFX18qL2ZpbmRCeURpc3BsYXlOYW1lKFwiUmFkaW9Hcm91cFwiKTtcclxuZXhwb3J0IGNvbnN0IFJhZGlvR3JvdXAgPSBtYWtlVXBkYXRlV3JhcHBlcihPcmlnaW5hbFJhZGlvR3JvdXAsIFwidmFsdWVcIiwgXCJyYWRpb1wiKTtcclxuZXhwb3J0IGNvbnN0IE9yaWdpbmFsU3dpdGNoID0gLyojX19QVVJFX18qL2ZpbmRCeURpc3BsYXlOYW1lKFwiU3dpdGNoXCIpO1xyXG5leHBvcnQgY29uc3QgU3dpdGNoID0gbWFrZVVwZGF0ZVdyYXBwZXIoT3JpZ2luYWxTd2l0Y2gsIFwiY2hlY2tlZFwiKTtcclxuZXhwb3J0IGNvbnN0IE9yaWdpbmFsU3dpdGNoSXRlbSA9IC8qI19fUFVSRV9fKi9maW5kQnlEaXNwbGF5TmFtZShcIlN3aXRjaEl0ZW1cIik7XHJcbmV4cG9ydCBjb25zdCBTd2l0Y2hJdGVtID0gbWFrZVVwZGF0ZVdyYXBwZXIoT3JpZ2luYWxTd2l0Y2hJdGVtLCBcInZhbHVlXCIpO1xyXG5leHBvcnQgY29uc3QgTWFya2Rvd24gPSAvKiNfX1BVUkVfXyovKCgpID0+IGZpbmQobSA9PiBtPy5kZWZhdWx0Py5kaXNwbGF5TmFtZSA9PSBcIk1hcmtkb3duXCIgJiYgbT8uZGVmYXVsdD8ucnVsZXMpPy5kZWZhdWx0KSgpO1xyXG5cclxuZXhwb3J0IGNvbnN0IENvbnRleHRNZW51ID0gLyojX19QVVJFX18qL2ZpbmRCeVByb3BzKFwiTWVudUl0ZW1cIikuZGVmYXVsdFxyXG5PYmplY3QuZW50cmllcyhmaW5kQnlQcm9wcyhcIk1lbnVJdGVtXCIpKS5mb3JFYWNoKChba2V5LCBjb250ZW50c10pID0+IHtcclxuICAgIGlmICghQ29udGV4dE1lbnVba2V5XSkge1xyXG4gICAgICAgIENvbnRleHRNZW51W2tleV0gPSBjb250ZW50c1xyXG4gICAgfVxyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IEF2YXRhciA9IC8qI19fUFVSRV9fKi8oKCkgPT4gZmluZEJ5UHJvcHMoXCJBbmltYXRlZEF2YXRhclwiKS5kZWZhdWx0KSgpXHJcbmV4cG9ydCBjb25zdCBBbmltYXRlZEF2YXRhciA9IC8qI19fUFVSRV9fKi8oKCkgPT4gZmluZEJ5UHJvcHMoXCJBbmltYXRlZEF2YXRhclwiKS5BbmltYXRlZEF2YXRhcikoKVxyXG5leHBvcnQgY29uc3QgQXZhdGFyU2l6ZXMgPSAvKiNfX1BVUkVfXyovKCgpID0+IGZpbmRCeVByb3BzKFwiQW5pbWF0ZWRBdmF0YXJcIikuU2l6ZXMpKClcclxuXHJcbmV4cG9ydCBjb25zdCBTbGlkZXIgPSAvKiNfX1BVUkVfXyovKCgpID0+IGZpbmRCeVByb3BzKFwiTWFya2VyUG9zaXRpb25zXCIpLmRlZmF1bHQpKClcclxuZXhwb3J0IGNvbnN0IFNsaWRlck1hcmtlclBvc2l0aW9ucyA9IC8qI19fUFVSRV9fKi8oKCkgPT4gZmluZEJ5UHJvcHMoXCJNYXJrZXJQb3NpdGlvbnNcIikuTWFya2VyUG9zaXRpb25zKSgpIiwiLy8gS25vdyBpdCB3aWxsIHdvcmsgb24gdGhpcyBjbGllbnQgbW9kIG9yIGl0J3MgZGV0ZWN0aW5nIHRoZSB3cm9uZyBvbmU/XHJcbi8vIFNldCB0aGlzIHZhcmlhYmxlLlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgLyoqXHJcbiAqIEBtZW1iZXJvZiBtb2R1bGU6dXRpbGl0aWVzXHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBuYW1lIG9mIHRoZSBydW5uaW5nIGNsaWVudCBtb2QuXHJcbiAqLyBmdW5jdGlvbiBnZXRDbGllbnRNb2QoKSB7XHJcblx0cmV0dXJuIHByb2Nlc3MuZW52LkNMSUVOVF9NT0RcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCAvKipcclxuICogQG1lbWJlcm9mIG1vZHVsZTp1dGlsaXRpZXNcclxuICogQHJldHVybnMge251bWJlcn0gVGhlIGN1cnJlbnQgdGltZSBpbiBuYW5vc2Vjb25kcy5cclxuICovIGZ1bmN0aW9uIG5hbm9zZWNvbmRzKCkge1xyXG5cdGNvbnN0IGhyVGltZSA9IHByb2Nlc3MuaHJ0aW1lKCk7XHJcblx0cmV0dXJuIGhyVGltZVswXSAqIDEwMDAwMDAwMDAgKyBoclRpbWVbMV07XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgLyoqXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSB0aW1lIFRpbWUgKGluIG1pbGxpc2Vjb25kcykuXHJcbiAqIEBtZW1iZXJvZiBtb2R1bGU6dXRpbGl0aWVzXHJcbiAqIEByZXR1cm5zIHtQcm9taXNlfSBBIHN0cmluZyBvZiByYW5kb20gY2hhcmFjdGVycy5cclxuICovIGZ1bmN0aW9uIHJhbmRvbVN0cmluZyh0aW1lKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KCgpID0+IHJlc29sdmUoKSwgdGltZSkpXHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlQXJndW1lbnRzKC4uLmFyZ3MpIHtcclxuXHRyZXR1cm4gW1xyXG5cdFx0XCIlY0l0dGFpXCIsXHJcblx0XHRcImNvbG9yOiAjMDAwOyBiYWNrZ3JvdW5kLWNvbG9yOiAjNDJmZmE3OyBmb250LWZhbWlseTogZGVmYXVsdDsgcGFkZGluZy1sZWZ0OiAzcHg7IHBhZGRpbmctcmlnaHQ6IDNweDsgYm9yZGVyLXJhZGl1czogMnB4OyBmb250LXdlaWdodDogYm9sZDtcIixcclxuXHRcdC4uLmFyZ3MsXHJcblx0XTtcclxufVxyXG4iLCJpbXBvcnQgeyBjb25zb2xlQ29weSwgY3JlYXRlQXJndW1lbnRzIH0gZnJvbSBcIi4uL2xvZ2dlclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgLyoqXHJcbiAqIEBtZW1iZXJvZiBtb2R1bGU6bG9nZ2VyXHJcbiAqIEBwYXJhbSAgey4uLmFueX0gYXJnc1xyXG4gKi8gZnVuY3Rpb24gbG9nKC4uLmFyZ3MpIHtcclxuXHRjb25zb2xlQ29weS5sb2coLi4uY3JlYXRlQXJndW1lbnRzKC4uLmFyZ3MpKTtcclxufVxyXG4iLCJpbXBvcnQgeyBjb25zb2xlQ29weSwgY3JlYXRlQXJndW1lbnRzIH0gZnJvbSBcIi4uL2xvZ2dlclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgLyoqXHJcbiAqIEBtZW1iZXJvZiBtb2R1bGU6bG9nZ2VyXHJcbiAqIEBwYXJhbSAgey4uLmFueX0gYXJnc1xyXG4gKi8gZnVuY3Rpb24gZGVidWcoLi4uYXJncykge1xyXG5cdGNvbnNvbGVDb3B5LmRlYnVnKC4uLmNyZWF0ZUFyZ3VtZW50cyguLi5hcmdzKSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgY29uc29sZUNvcHksIGNyZWF0ZUFyZ3VtZW50cyB9IGZyb20gXCIuLi9sb2dnZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IC8qKlxyXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmxvZ2dlclxyXG4gKiBAcGFyYW0gIHsuLi5hbnl9IGFyZ3NcclxuICovIGZ1bmN0aW9uIHdhcm4oLi4uYXJncykge1xyXG5cdGNvbnNvbGVDb3B5Lndhcm4oLi4uY3JlYXRlQXJndW1lbnRzKC4uLmFyZ3MpKTtcclxufVxyXG4iLCJpbXBvcnQgeyBjb25zb2xlQ29weSwgY3JlYXRlQXJndW1lbnRzIH0gZnJvbSBcIi4uL2xvZ2dlclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgLyoqXHJcbiAqIEBtZW1iZXJvZiBtb2R1bGU6bG9nZ2VyXHJcbiAqIEBwYXJhbSAgey4uLmFueX0gYXJnc1xyXG4gKi8gZnVuY3Rpb24gZXJyb3IoLi4uYXJncykge1xyXG5cdGNvbnNvbGVDb3B5LmVycm9yKC4uLmNyZWF0ZUFyZ3VtZW50cyguLi5hcmdzKSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgY29uc29sZUNvcHksIGNyZWF0ZUFyZ3VtZW50cyB9IGZyb20gXCIuLi9sb2dnZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IC8qKlxyXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmxvZ2dlclxyXG4gKiBAcGFyYW0gIHsuLi5hbnl9IGFyZ3NcclxuICovIGZ1bmN0aW9uIGdyb3VwKC4uLmFyZ3MpIHtcclxuXHRjb25zb2xlQ29weS5ncm91cCguLi5jcmVhdGVBcmd1bWVudHMoLi4uYXJncykpO1xyXG59XHJcbiIsImltcG9ydCB7IGNvbnNvbGVDb3B5LCBjcmVhdGVBcmd1bWVudHMgfSBmcm9tIFwiLi4vbG9nZ2VyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAvKipcclxuICogQG1lbWJlcm9mIG1vZHVsZTpsb2dnZXJcclxuICogQHBhcmFtICB7Li4uYW55fSBhcmdzXHJcbiAqLyBmdW5jdGlvbiBncm91cEVuZCguLi5hcmdzKSB7XHJcblx0Y29uc29sZUNvcHkuZ3JvdXBFbmQoLi4uY3JlYXRlQXJndW1lbnRzKC4uLmFyZ3MpKTtcclxufVxyXG4iLCJpbXBvcnQgeyBjb25zb2xlQ29weSB9IGZyb20gXCIuLi9sb2dnZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IC8qKlxyXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmxvZ2dlclxyXG4gKiBAcGFyYW0gIHsuLi5hbnl9IGFyZ3NcclxuICovIGZ1bmN0aW9uIGNvdW50KC4uLmFyZ3MpIHtcclxuXHRjb25zb2xlQ29weS5jb3VudCguLi5hcmdzKTtcclxufVxyXG4iLCJpbXBvcnQgeyBjb25zb2xlQ29weSB9IGZyb20gXCIuLi9sb2dnZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IC8qKlxyXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmxvZ2dlclxyXG4gKiBAcGFyYW0gIHsuLi5hbnl9IGFyZ3NcclxuICovIGZ1bmN0aW9uIGNvdW50UmVzZXQoLi4uYXJncykge1xyXG5cdGNvbnNvbGVDb3B5LmNvdW50UmVzZXQoLi4uYXJncyk7XHJcbn1cclxuIiwiLyoqXHJcbiAqIEBtb2R1bGUgbG9nZ2VyXHJcbiAqL1xyXG5cclxuZXhwb3J0IGNvbnN0IGNvbnNvbGVDb3B5ID0geyAuLi5jb25zb2xlIH07XHJcblxyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGNyZWF0ZUFyZ3VtZW50cyB9IGZyb20gXCIuL2NyZWF0ZUFyZ3VtZW50c1wiO1xyXG5cclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBsb2cgfSBmcm9tIFwiLi9sb2dcIjtcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBkZWJ1ZyB9IGZyb20gXCIuL2RlYnVnXCI7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgd2FybiB9IGZyb20gXCIuL3dhcm5cIjtcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBlcnJvciB9IGZyb20gXCIuL2Vycm9yXCI7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZ3JvdXAgfSBmcm9tIFwiLi9ncm91cFwiO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGdyb3VwRW5kIH0gZnJvbSBcIi4vZ3JvdXBFbmRcIjtcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBjb3VudCB9IGZyb20gXCIuL2NvdW50XCI7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgY291bnRSZXNldCB9IGZyb20gXCIuL2NvdW50UmVzZXRcIjtcclxuIiwiaW1wb3J0IHsgZXJyb3IgfSBmcm9tIFwiLi4vbG9nZ2VyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAvKipcclxuICogRmluZHMgYW4gb2JqZWN0IGluIGEgdHJlZS5cclxuICogQHBhcmFtIHtvYmplY3R9IHRyZWUgVGhlIHRyZWUgdG8gc2VhcmNoLlxyXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmaWx0ZXIgQSBmaWx0ZXIgZnVuY3Rpb24gdGhhdCBzaG91bGQgcmV0dXJuIHRydWUgd2hlbiBpdCBjaGVja3Mgd2hhdCB5b3Ugd2FudCB0byBmaW5kLlxyXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xyXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBbb3B0aW9ucy53YWxrYWJsZT1bXV0gV2hpY2ggbm9kZSBuYW1lcyBhcmUgd2Fsa2FibGUuXHJcbiAqIEBwYXJhbSB7c3RyaW5nW119IFtvcHRpb25zLmV4Y2x1ZGU9W11dIFdoaWNoIG5vZGUgbmFtZXMgdG8gbm90IHdhbGsuXHJcbiAqIEBwYXJhbSB7Ym9vbGVhbnxzdHJpbmd9IFtvcHRpb25zLndoaWxlTG9vcD1mYWxzZV0gV2hldGhlciBvciBub3QgdG8gdXNlIGEgd2hpbGUgbG9vcCBpbnN0ZWFkIG9mIHJlY3Vyc2lvbi4gVGhpcyBpcyBzbG93ZXIsIGJ1dCBub3QgcHJvbmUgdG8gc3RhY2sgb3ZlcmZsb3cuXHJcbiAqIEBwYXJhbSB7Ym9vbGVhbnxzdHJpbmd9IFtvcHRpb25zLm1heERlcHRoPTEwMF0gVGhlIG1heGltdW0gYW1vdW50IG9mIGxheWVycyBkZWVwIHRvIHNlYXJjaCB0aGUgdHJlZS4gYG9wdGlvbnMud2hpbGVMb29wPWZhbHNlYCBvbmx5LlxyXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnV0aWxpdGllc1xyXG4gKiBAcmV0dXJucyB7b2JqZWN0fG51bGx9XHJcbiAqLyBmdW5jdGlvbiBmaW5kSW5UcmVlKFxyXG5cdHRyZWUsXHJcblx0ZmlsdGVyLFxyXG5cdHtcclxuXHRcdHdhbGthYmxlID0gW10sXHJcblx0XHRleGNsdWRlID0gW10sXHJcblx0XHR3aGlsZUxvb3AgPSBmYWxzZSxcclxuXHRcdG1heERlcHRoID0gMTAwLFxyXG5cdFx0ZGVwdGggPSAwLFxyXG5cdH0gPSB7fVxyXG4pIHtcclxuXHRpZiAoZGVwdGggPT09IG1heERlcHRoKSByZXR1cm4gbnVsbDtcclxuXHRpZiAodHJlZSA9PT0gbnVsbCB8fCB0cmVlID09PSB1bmRlZmluZWQpIHJldHVybiBudWxsO1xyXG5cdGlmICh0eXBlb2YgdHJlZSAhPT0gXCJvYmplY3RcIikgcmV0dXJuIG51bGw7XHJcblxyXG5cdGlmICh0eXBlb2YgZmlsdGVyID09PSBcInN0cmluZ1wiKSByZXR1cm4gdHJlZVtmaWx0ZXJdO1xyXG5cclxuXHRpZiAod2hpbGVMb29wKSB7XHJcblx0XHRjb25zdCBzdGFjayA9IFt0cmVlXTtcclxuXHRcdHdoaWxlIChzdGFjay5sZW5ndGgpIHtcclxuXHRcdFx0Y29uc3Qgbm9kZSA9IHN0YWNrW3doaWxlTG9vcCA9PT0gXCJyZXZlcnNlXCIgPyBcInBvcFwiIDogXCJzaGlmdFwiXSgpO1xyXG5cdFx0XHR0cnkge1xyXG5cdFx0XHRcdGlmIChmaWx0ZXIobm9kZSkpIHJldHVybiBub2RlO1xyXG5cdFx0XHR9IGNhdGNoIHt9XHJcblx0XHRcdGlmIChzdGFjay5sZW5ndGggPj0gbWF4U3RhY2spIGNvbnRpbnVlO1xyXG5cdFx0XHRpZiAoQXJyYXkuaXNBcnJheShub2RlKSkge1xyXG5cdFx0XHRcdHN0YWNrLnB1c2goLi4ubm9kZSk7XHJcblx0XHRcdH0gZWxzZSBpZiAodHlwZW9mIG5vZGUgPT09IFwib2JqZWN0XCIgJiYgbm9kZSAhPT0gbnVsbCkge1xyXG5cdFx0XHRcdGlmICh3YWxrYWJsZS5sZW5ndGggPiAwKSB7XHJcblx0XHRcdFx0XHRzdGFjay5wdXNoKFxyXG5cdFx0XHRcdFx0XHQuLi5PYmplY3QuZW50cmllcyhub2RlKVxyXG5cdFx0XHRcdFx0XHRcdC5maWx0ZXIoXHJcblx0XHRcdFx0XHRcdFx0XHQoW2tleSwgdmFsdWVdKSA9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR3YWxrYWJsZS5pbmRleE9mKGtleSkgIT09IC0xICYmIGV4Y2x1ZGUuaW5kZXhPZihrZXkpID09PSAtMVxyXG5cdFx0XHRcdFx0XHRcdClcclxuXHRcdFx0XHRcdFx0XHQubWFwKChba2V5LCB2YWx1ZV0pID0+IHZhbHVlKVxyXG5cdFx0XHRcdFx0KTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0c3RhY2sucHVzaChcclxuXHRcdFx0XHRcdFx0Li4uT2JqZWN0LnZhbHVlcyhub2RlKS5maWx0ZXIoXHJcblx0XHRcdFx0XHRcdFx0KGtleSkgPT4gZXhjbHVkZS5pbmRleE9mKGtleSkgPT09IC0xICYmIG5vZGVcclxuXHRcdFx0XHRcdFx0KVxyXG5cdFx0XHRcdFx0KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0ZGVwdGgrKztcclxuXHRcdH1cclxuXHRcdHJldHVybiBudWxsO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRsZXQgcmV0dXJuVmFsdWU7XHJcblx0XHR0cnkge1xyXG5cdFx0XHRpZiAoZmlsdGVyKHRyZWUpKSByZXR1cm4gdHJlZTtcclxuXHRcdH0gY2F0Y2gge31cclxuXHRcdGlmIChBcnJheS5pc0FycmF5KHRyZWUpKSB7XHJcblx0XHRcdGZvciAoY29uc3QgdmFsdWUgb2YgdHJlZSkge1xyXG5cdFx0XHRcdHJldHVyblZhbHVlID0gZmluZEluVHJlZSh2YWx1ZSwgZmlsdGVyLCB7XHJcblx0XHRcdFx0XHR3YWxrYWJsZSxcclxuXHRcdFx0XHRcdGV4Y2x1ZGUsXHJcblx0XHRcdFx0XHR3aGlsZUxvb3AsXHJcblx0XHRcdFx0XHRtYXhEZXB0aCxcclxuXHRcdFx0XHRcdGRlcHRoOiBkZXB0aCArIDEsXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0aWYgKHJldHVyblZhbHVlKSByZXR1cm4gcmV0dXJuVmFsdWU7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGxldCBrZXlzID0gd2Fsa2FibGUubGVuZ3RoID4gMCA/IHdhbGthYmxlIDogT2JqZWN0LmtleXModHJlZSk7XHJcblx0XHRmb3IgKGNvbnN0IGtleSBvZiBrZXlzKSB7XHJcblx0XHRcdGlmICghdHJlZS5oYXNPd25Qcm9wZXJ0eShrZXkpIHx8IGV4Y2x1ZGUuaW5jbHVkZXMoa2V5KSkgY29udGludWU7XHJcblx0XHRcdHJldHVyblZhbHVlID0gZmluZEluVHJlZSh0cmVlW2tleV0sIGZpbHRlciwge1xyXG5cdFx0XHRcdHdhbGthYmxlLFxyXG5cdFx0XHRcdGV4Y2x1ZGUsXHJcblx0XHRcdFx0d2hpbGVMb29wLFxyXG5cdFx0XHRcdG1heERlcHRoLFxyXG5cdFx0XHRcdGRlcHRoOiBkZXB0aCArIDEsXHJcblx0XHRcdH0pO1xyXG5cdFx0XHRpZiAocmV0dXJuVmFsdWUpIHJldHVybiByZXR1cm5WYWx1ZTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBudWxsO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBmaW5kSW5UcmVlIH0gZnJvbSBcIi4uL3V0aWxpdGllc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgLyoqXHJcbiAqIEZpbmRzIGFuIG9iamVjdCBpbiBhIFJlYWN0IHRyZWUuXHJcbiAqIEBtZW1iZXJvZiBtb2R1bGU6dXRpbGl0aWVzXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSB0cmVlIFRoZSB0cmVlIHRvIHNlYXJjaC5cclxuICogQHBhcmFtIHtmdW5jdGlvbn0gZmlsdGVyIEEgZmlsdGVyIGZ1bmN0aW9uIHRoYXQgc2hvdWxkIHJldHVybiB0cnVlIHdoZW4gaXQgY2hlY2tzIHdoYXQgeW91IHdhbnQgdG8gZmluZC5cclxuICogQHBhcmFtIHtvYmplY3R9IFt3aGlsZUxvb3A9ZmFsc2VdIFdoZXRoZXIgb3Igbm90IHRvIHVzZSBhIHdoaWxlIGxvb3AgaW5zdGVhZCBvZiByZWN1cnNpb24uIFRoaXMgaXMgc2xvd2VyLCBidXQgbm90IHByb25lIHRvIHN0YWNrIG92ZXJmbG93LlxyXG4gKi8gZnVuY3Rpb24gZmluZEluUmVhY3RUcmVlKFxyXG5cdHRyZWUsXHJcblx0ZmlsdGVyLFxyXG5cdHsgd2hpbGVMb29wID0gZmFsc2UsIG1heERlcHRoID0gMTAwLCBkZXB0aCA9IDAgfSA9IHt9XHJcbikge1xyXG5cdHJldHVybiBmaW5kSW5UcmVlKHRyZWUsIGZpbHRlciwge1xyXG5cdFx0d2Fsa2FibGU6IFtcInByb3BzXCIsIFwiY2hpbGRyZW5cIiwgXCJjaGlsZFwiLCBcInNpYmxpbmdcIl0sXHJcblx0XHRleGNsdWRlOiBbXCJfX3JlYWN0RmliZXIkXCIsIFwiX19yZWFjdEZpYmVyXCIsIFwiX19yZWFjdEludGVybmFsSW5zdGFuY2UkXCIsIFwiX19yZWFjdEludGVybmFsSW5zdGFuY2VcIl0sXHJcblx0XHR3aGlsZUxvb3AsXHJcblx0XHRtYXhEZXB0aCxcclxuXHRcdGRlcHRoLFxyXG5cdH0pO1xyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IC8qKlxyXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fHN0cmluZ30gbm9kZSBUaGUgbm9kZSwgbm9kZSBJRCwgbm9kZSBjbGFzcyBuYW1lLCBvciBwYXJ0aWFsIG5vZGUgY2xhc3MgbmFtZSB0byBnZXQgdGhlIFJlYWN0IGluc3RhbmNlIGZyb20uXHJcbiAqIEBtZW1iZXJvZiBtb2R1bGU6dXRpbGl0aWVzXHJcbiAqIEByZXR1cm5zIHtvYmplY3R9XHJcbiAqLyBmdW5jdGlvbiBnZXRSZWFjdEluc3RhbmNlKG5vZGUpIHtcclxuXHRpZiAodHlwZW9mIG5vZGUgPT09IFwic3RyaW5nXCIpXHJcblx0XHRub2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuXHRcdFx0YCR7bm9kZX0sIC4ke25vZGV9LCAjJHtub2RlfSwgW2NsYXNzKj1cIiR7bm9kZX1cIl1gXHJcblx0XHQpO1xyXG5cdGlmICghbm9kZSkgcmV0dXJuIG51bGw7XHJcblx0aWYgKG5vZGUuX19yZWFjdEZpYmVyJCkgcmV0dXJuIG5vZGUuX19yZWFjdEZpYmVyJDsgLy8gbmV3IFJlYWN0XHJcblx0aWYgKG5vZGUuX19yZWFjdEludGVybmFsSW5zdGFuY2UkKSByZXR1cm4gbm9kZS5fX3JlYWN0SW50ZXJuYWxJbnN0YW5jZSQ7IC8vIG9sZCBSZWFjdFxyXG5cdHJldHVybiBub2RlW1xyXG5cdFx0T2JqZWN0LmtleXMobm9kZSkuZmluZCgoZSkgPT4gZS5zdGFydHNXaXRoKFwiX19yZWFjdEZpYmVyJFwiKSkgLy8gbmV3IFJlYWN0XHJcblx0XSB8fCBub2RlW1xyXG5cdFx0T2JqZWN0LmtleXMobm9kZSkuZmluZCgoZSkgPT4gZS5zdGFydHNXaXRoKFwiX19yZWFjdEludGVybmFsSW5zdGFuY2VcIikpIC8vIG9sZCBSZWFjdFxyXG5cdF07XHJcbn1cclxuIiwiaW1wb3J0IHsgZ2V0UmVhY3RJbnN0YW5jZSB9IGZyb20gXCIuLi91dGlsaXRpZXNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IC8qKlxyXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fHN0cmluZ30gbm9kZSBUaGUgbm9kZSwgbm9kZSBJRCwgbm9kZSBjbGFzcyBuYW1lLCBvciBwYXJ0aWFsIG5vZGUgY2xhc3MgbmFtZSB0byBnZXQgdGhlIG93bmVyIGluc3RhbmNlIGZyb20uXHJcbiAqIEBtZW1iZXJvZiBtb2R1bGU6dXRpbGl0aWVzXHJcbiAqIEByZXR1cm5zIHtvYmplY3R9XHJcbiAqLyBmdW5jdGlvbiBnZXRPd25lckluc3RhbmNlKG5vZGUpIHtcclxuXHRmb3IgKGxldCBjdXJyID0gZ2V0UmVhY3RJbnN0YW5jZShub2RlKTsgY3VycjsgY3VyciA9IGN1cnIucmV0dXJuKSB7XHJcblx0XHRjb25zdCBvd25lciA9IGN1cnIuc3RhdGVOb2RlO1xyXG5cdFx0aWYgKG93bmVyKVxyXG5cdFx0XHRyZXR1cm4gb3duZXI7XHJcblx0fVxyXG5cdHJldHVybiBudWxsO1xyXG59XHJcbiIsImltcG9ydCB7IE1vZGFsU3RhY2sgfSBmcm9tIFwiLi4vd2VicGFja1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdGVzdENvbXBvbmVudChDb21wb25lbnQpIHtcclxuXHRNb2RhbFN0YWNrLm9wZW5Nb2RhbCgoKSA9PiBDb21wb25lbnQpO1xyXG59XHJcbiIsImltcG9ydCB7IGF2ZXJhZ2UsIG1lZGlhbiwgbmFub3NlY29uZHMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAvKipcclxuICogQHBhcmFtIHtmdW5jdGlvbn0gY29kZWJsb2NrIFRoZSBjb2RlIHRvIGJlbmNobWFyay5cclxuICogQHBhcmFtIHtudW1iZXJ9IHRpbWVzIFRoZSBhbW91bnQgb2YgdGltZXMgdG8gcnVuIHRoZSBiZW5jaG1hcmsuXHJcbiAqIEBtZW1iZXJvZiBtb2R1bGU6dXRpbGl0aWVzXHJcbiAqIEByZXR1cm5zIHtQcm9taXNlfSBBIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHRoZSBiZW5jaG1hcmsgaXMgY29tcGxldGVkLlxyXG4gKi8gZnVuY3Rpb24gYmVuY2htYXJrKGNvZGVibG9jaywgdGltZXMpIHtcclxuXHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuXHRcdGNvbnN0IHByZSA9IGNvZGVibG9jay5wcmUgPz8gKCgpID0+IHt9KTtcclxuXHRcdGRlbGV0ZSBjb2RlYmxvY2sucHJlO1xyXG5cdFx0Y29uc3QgcG9zdCA9IGNvZGVibG9jay5wb3N0ID8/ICgoKSA9PiB7fSk7XHJcblx0XHRkZWxldGUgY29kZWJsb2NrLnBvc3Q7XHJcblxyXG5cdFx0Y29uc3QgbmFtZSA9IE9iamVjdC5rZXlzKGNvZGVibG9jaylbMF07XHJcblxyXG5cdFx0Y29kZWJsb2NrID0gY29kZWJsb2NrW09iamVjdC5rZXlzKGNvZGVibG9jaylbMF1dO1xyXG5cclxuXHRcdGxldCBwcm9taXNlcyA9IFtdO1xyXG5cclxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGltZXM7IGkrKykge1xyXG5cdFx0XHRwcm9taXNlcy5wdXNoKFxyXG5cdFx0XHRcdG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcblx0XHRcdFx0XHRsZXQgcmV0dXJucywgc3RhcnQsIGVuZDtcclxuXHRcdFx0XHRcdHRyeSB7XHJcblx0XHRcdFx0XHRcdHByZSgpO1xyXG5cdFx0XHRcdFx0XHRzdGFydCA9IG5hbm9zZWNvbmRzKCk7XHJcblx0XHRcdFx0XHRcdHJldHVybnMgPSBjb2RlYmxvY2soKTtcclxuXHRcdFx0XHRcdFx0ZW5kID0gbmFub3NlY29uZHMoKTtcclxuXHRcdFx0XHRcdFx0cG9zdCgpO1xyXG5cdFx0XHRcdFx0fSBjYXRjaCAoZSkge1xyXG5cdFx0XHRcdFx0XHRyZXNvbHZlKHsgcmV0dXJucywgdGltZTogMCwgZXJyb3I6IGUgfSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRyZXNvbHZlKHsgcmV0dXJucywgdGltZTogZW5kIC0gc3RhcnQsIGVycm9yOiBmYWxzZSB9KTtcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQpO1xyXG5cdFx0fVxyXG5cclxuXHRcdFByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKChhbGxSZXR1cm5zKSA9PiB7XHJcblx0XHRcdGNvbnN0IGZpbmFsVGltZXMgPSBhbGxSZXR1cm5zLm1hcCgocikgPT4gci50aW1lKTtcclxuXHRcdFx0cmVzb2x2ZSh7XHJcblx0XHRcdFx0bmFtZSxcclxuXHRcdFx0XHRhdmVyYWdlOiBhdmVyYWdlKGZpbmFsVGltZXMpLFxyXG5cdFx0XHRcdG1lZGlhbjogbWVkaWFuKGZpbmFsVGltZXMpLFxyXG5cdFx0XHRcdGVycm9yOiBhbGxSZXR1cm5zWzBdLmVycm9yLFxyXG5cdFx0XHRcdHJldHVybnM6IGFsbFJldHVybnNbMF0ucmV0dXJucyxcclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHR9KTtcclxufVxyXG4iLCJpbXBvcnQgeyBncm91cCwgZ3JvdXBFbmQgfSBmcm9tIFwiLi4vbG9nZ2VyXCI7XHJcbmltcG9ydCB7IGJlbmNobWFyaywgbmFub3NlY29uZHMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAvKipcclxuICogUHJpbnRzIG91dCB0aGUgYmVuY2htYXJrIHJlc3VsdHMgZm9yIGVhY2ggY29kZSBibG9jay5cclxuICogQG1lbWJlcm9mIG1vZHVsZTp1dGlsaXRpZXNcclxuICogQHBhcmFtIHtmdW5jdGlvbn0gY29kZWJsb2NrIFRoZSBjb2RlIHRvIGJlbmNobWFyay5cclxuICogQHBhcmFtIHtudW1iZXJ9IHRpbWVzIFRoZSBhbW91bnQgb2YgdGltZXMgdG8gcnVuIHRoZSBiZW5jaG1hcmsuXHJcbiAqLyBmdW5jdGlvbiBtdWx0aUJlbmNobWFyayhjb2RlYmxvY2tzLCB0aW1lcykge1xyXG5cdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG5cdFx0Y29uc3Qgc3RhcnQgPSBuYW5vc2Vjb25kcygpO1xyXG5cdFx0UHJvbWlzZS5hbGwoXHJcblx0XHRcdGNvZGVibG9ja3MubWFwKChjb2RlYmxvY2spID0+IGJlbmNobWFyayhjb2RlYmxvY2ssIHRpbWVzKSlcclxuXHRcdCkudGhlbigocmVzdWx0cykgPT4ge1xyXG5cdFx0XHRjb25zdCBlbmQgPSBuYW5vc2Vjb25kcygpO1xyXG5cdFx0XHRjb25zdCBncm91cE5hbWUgPSBgQmVuY2htYXJrZWQgJHtjb2RlYmxvY2tzLmxlbmd0aC50b0xvY2FsZVN0cmluZygpfSBmdW5jdGlvbnMgJHt0aW1lcy50b0xvY2FsZVN0cmluZygpfSB0aW1lcyBvdmVyICR7KFxyXG5cdFx0XHRcdGVuZCAtIHN0YXJ0XHJcblx0XHRcdCkudG9Mb2NhbGVTdHJpbmcoKX1ucy5gO1xyXG5cdFx0XHRncm91cChncm91cE5hbWUpO1xyXG5cdFx0XHRjb25zdCBtYXBwZWRSZXN1bHRzID0gT2JqZWN0LnZhbHVlcyhyZXN1bHRzKS5tYXAoKHJlc3VsdCkgPT4ge1xyXG5cdFx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0XHROYW1lOiByZXN1bHQubmFtZSxcclxuXHRcdFx0XHRcdFwiTWVkaWFuIFRpbWVcIjogYCR7cmVzdWx0Lm1lZGlhbi50b0xvY2FsZVN0cmluZygpfW5zYCxcclxuXHRcdFx0XHRcdFwiQXZlcmFnZSBUaW1lXCI6IGAke3Jlc3VsdC5hdmVyYWdlLnRvTG9jYWxlU3RyaW5nKCl9bnNgLFxyXG5cdFx0XHRcdFx0UmV0dXJuczogcmVzdWx0LnJldHVybnMsXHJcblx0XHRcdFx0XHRFcnJvcjogcmVzdWx0LmVycm9yLFxyXG5cdFx0XHRcdFx0XCIoTWVkaWFuIFRpbWUpXCI6IHJlc3VsdC5tZWRpYW4sXHJcblx0XHRcdFx0XHRcIihBdmVyYWdlIFRpbWUpXCI6IHJlc3VsdC5hdmVyYWdlLFxyXG5cdFx0XHRcdH07XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRjb25zdCBzdWNjZXNzZnVsUmVzdWx0cyA9IG1hcHBlZFJlc3VsdHMuZmlsdGVyKFxyXG5cdFx0XHRcdChyZXN1bHQpID0+IHJlc3VsdC5FcnJvciA9PT0gZmFsc2VcclxuXHRcdFx0KTtcclxuXHRcdFx0Y29uc3QgZXJyb3JlZFJlc3VsdHMgPSBtYXBwZWRSZXN1bHRzLmZpbHRlcigocmVzdWx0KSA9PiAhIXJlc3VsdC5FcnJvcik7XHJcblxyXG5cdFx0XHRjb25zb2xlLnRhYmxlKFxyXG5cdFx0XHRcdHN1Y2Nlc3NmdWxSZXN1bHRzLnNvcnQoKHJlc3VsdDEsIHJlc3VsdDIpID0+IHtcclxuXHRcdFx0XHRcdGlmIChyZXN1bHQxW1wiKE1lZGlhbiBUaW1lKVwiXSA+IHJlc3VsdDJbXCIoTWVkaWFuIFRpbWUpXCJdKSByZXR1cm4gMTtcclxuXHRcdFx0XHRcdGlmIChyZXN1bHQxW1wiKE1lZGlhbiBUaW1lKVwiXSA8IHJlc3VsdDJbXCIoTWVkaWFuIFRpbWUpXCJdKSByZXR1cm4gLTE7XHJcblx0XHRcdFx0XHRyZXR1cm4gMDtcclxuXHRcdFx0XHR9KSxcclxuXHRcdFx0XHRbXCJOYW1lXCIsIFwiTWVkaWFuIFRpbWVcIiwgXCJBdmVyYWdlIFRpbWVcIiwgXCJSZXR1cm5zXCJdXHJcblx0XHRcdCk7XHJcblx0XHRcdGlmIChlcnJvcmVkUmVzdWx0cy5sZW5ndGggPiAwKSB7XHJcblx0XHRcdFx0Y29uc29sZS50YWJsZShlcnJvcmVkUmVzdWx0cywgW1wiTmFtZVwiLCBcIkVycm9yXCJdKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Z3JvdXBFbmQoZ3JvdXBOYW1lKTtcclxuXHRcdFx0cmVzb2x2ZShyZXN1bHRzKTtcclxuXHRcdH0pO1xyXG5cdH0pO1xyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IC8qKlxyXG4gKiBAcGFyYW0ge251bWJlcltdfSBhcnJheSBBbiBhcnJheSBvZiBudW1iZXJzLlxyXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnV0aWxpdGllc1xyXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBUaGUgYXZlcmFnZSBvZiB0aGUgbnVtYmVycyBpbiB0aGUgYXJyYXkuXHJcbiAqLyBmdW5jdGlvbiBhdmVyYWdlKGFycmF5KSB7XHJcblx0aWYgKGFycmF5Lmxlbmd0aCA9PT0gMCkgcmV0dXJuIDA7XHJcblx0bGV0IHRvdGFsID0gMDtcclxuXHRmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XHJcblx0XHR0b3RhbCArPSBhcnJheVtpXTtcclxuXHR9XHJcblx0cmV0dXJuIHRvdGFsIC8gYXJyYXkubGVuZ3RoO1xyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IC8qKlxyXG4gKiBAcGFyYW0ge251bWJlcltdfSBhcnJheSBBbiBhcnJheSBvZiBudW1iZXJzLlxyXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnV0aWxpdGllc1xyXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBUaGUgbWVkaWFuIG9mIHRoZSBudW1iZXJzIGluIHRoZSBhcnJheS5cclxuICovIGZ1bmN0aW9uIG1lZGlhbihhcnJheSkge1xyXG5cdGlmIChhcnJheS5sZW5ndGggPT09IDApIHJldHVybiAwO1xyXG5cdGFycmF5LnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcclxuXHRcdHJldHVybiBhIC0gYjtcclxuXHR9KTtcclxuXHRsZXQgaGFsZiA9IE1hdGguZmxvb3IoYXJyYXkubGVuZ3RoIC8gMik7XHJcblx0aWYgKGFycmF5Lmxlbmd0aCAlIDIpIHJldHVybiBhcnJheVtoYWxmXTtcclxuXHRyZXR1cm4gKGFycmF5W2hhbGYgLSAxXSArIGFycmF5W2hhbGZdKSAvIDIuMDtcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCAvKipcclxuICogQHBhcmFtIHtudW1iZXJ9IG1pbiBUaGUgbWluaW11bSB2YWx1ZSBvZiB0aGUgcmV0dXJuZWQgbnVtYmVyLlxyXG4gKiBAcGFyYW0ge251bWJlcn0gbWl4IFRoZSBtYXhpbXVtIHZhbHVlIG9mIHRoZSByZXR1cm5lZCBudW1iZXIuXHJcbiAqIEBtZW1iZXJvZiBtb2R1bGU6dXRpbGl0aWVzXHJcbiAqIEByZXR1cm5zIHtudW1iZXJ9IEEgcmFuZG9tIG51bWJlci5cclxuICovIGZ1bmN0aW9uIHJhbmRvbU51bWJlcihtaW4sIG1heCkge1xyXG5cdHJldHVybiBNYXRoLnJhbmRvbSgpICogbWF4IC0gbWluO1xyXG59XHJcbiIsImltcG9ydCB7IHJhbmRvbU51bWJlciB9IGZyb20gXCIuLi91dGlsaXRpZXNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IC8qKlxyXG4gKiBAcGFyYW0ge251bWJlcn0gbGVuZ3RoIFRoZSBsZW5ndGggb2YgdGhlIHN0cmluZy5cclxuICogQHBhcmFtIHtzdHJpbmd8YXJyYXl9IGRvbnRNYXRjaCBBIHN0cmluZyBvciBhbiBhcnJheSBvZiBzdHJpbmdzIHRoYXQgd2lsbCBjYXVzZSBhIHJlZ2VuZXJhdGlvbiBpZiBhbnkgYXJlIG1hdGNoZWQuXHJcbiAqIEBwYXJhbSB7c3RyaW5nfGFycmF5fSBjaGFyc2V0IEEgbGlzdCBvZiB0aGUgY2hhcmFjdGVycyB0byB1c2Ugd2hlbiBnZW5lcmF0aW5nIHRoZSBzdHJpbmcuXHJcbiAqIEBtZW1iZXJvZiBtb2R1bGU6dXRpbGl0aWVzXHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9IEEgc3RyaW5nIG9mIHJhbmRvbSBjaGFyYWN0ZXJzLlxyXG4gKi8gZnVuY3Rpb24gcmFuZG9tU3RyaW5nKFxyXG5cdGxlbmd0aCxcclxuXHRkb250TWF0Y2ggPSBcIlwiLFxyXG5cdGNoYXJzZXQgPSBcImFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6QUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVowMTIzNDU2Nzg5XCJcclxuKSB7XHJcblx0aWYgKHR5cGVvZiBsZW5ndGggIT09IFwibnVtYmVyXCIgJiYgbGVuZ3RoIDw9IDApIHJldHVybjtcclxuXHRpZiAodHlwZW9mIGRvbnRNYXRjaCAhPT0gXCJzdHJpbmdcIiAmJiAhQXJyYXkuaXNBcnJheShkb250TWF0Y2gpKSByZXR1cm47XHJcblx0aWYgKHR5cGVvZiBjaGFyc2V0ICE9PSBcInN0cmluZ1wiICYmICFBcnJheS5pc0FycmF5KGNoYXJzZXQpKSByZXR1cm47XHJcblx0bGV0IHN0cmluZyA9IFwiXCI7XHJcblx0ZG8ge1xyXG5cdFx0d2hpbGUgKHN0cmluZy5sZW5ndGggPCBsZW5ndGgpIHtcclxuXHRcdFx0c3RyaW5nICs9IGNoYXJzZXRbTWF0aC5yb3VuZChyYW5kb21OdW1iZXIoMCwgY2hhcnNldC5sZW5ndGggLSAxKSldO1xyXG5cdFx0fVxyXG5cdFx0c3RyaW5nID0gc3RyaW5nLnNsaWNlKDAsIGxlbmd0aCk7XHJcblx0fSB3aGlsZSAoXHJcblx0XHRkb250TWF0Y2ggJiZcclxuXHRcdChzdHJpbmcgPT09IGRvbnRNYXRjaCB8fCBkb250TWF0Y2guc29tZSgobSkgPT4gbSA9PT0gc3RyaW5nKSlcclxuXHQpO1xyXG5cdHJldHVybiBzdHJpbmc7XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgKC4uLmNsYXNzZXMpID0+IGNsYXNzZXMuZmlsdGVyKHMgPT4gdHlwZW9mIHMgPT09ICdzdHJpbmcnKS5qb2luKFwiIFwiKSIsImltcG9ydCB7IGZpbmQgfSBmcm9tIFwiLi4vd2VicGFja1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgIC8qKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lIFRoZSBjbGFzcyBuYW1lIHRvIHNlYXJjaCBmb3JcclxuICogQG1lbWJlcm9mIG1vZHVsZTp1dGlsaXRpZXNcclxuICogQHJldHVybnMge29iamVjdH0gVGhlIG1vZHVsZVxyXG4gKi8gZnVuY3Rpb24gKGNsYXNzTmFtZSkge1xyXG4gICAgIHJldHVybiBmaW5kKG0gPT4gXHJcbiAgICAgICAgT2JqZWN0LnZhbHVlcyhtKS5zb21lKHYgPT4gXHJcbiAgICAgICAgICAgIHR5cGVvZiB2ID09PSBcInN0cmluZ1wiICYmIFxyXG4gICAgICAgICAgICB+di5zcGxpdChcIiBcIikuaW5kZXhPZihjbGFzc05hbWUpXHJcbiAgICAgICAgKVxyXG4gICAgKVxyXG59IiwiaW1wb3J0IHsgUmVhY3QsIE1vZGFsQWN0aW9ucyB9IGZyb20gXCIuLi93ZWJwYWNrXCI7XHJcbmltcG9ydCB7IE1vZGFsLCBIZWFkaW5nLCBCdXR0b24sIFRleHQgfSBmcm9tIFwiLi4vY29tcG9uZW50c1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKHRpdGxlLCBkZXNjcmlwdGlvbiwgYnV0dG9ucykgPT4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgTW9kYWxBY3Rpb25zLm9wZW5Nb2RhbCgocHJvcHMpID0+IDxNb2RhbC5Nb2RhbFJvb3Qgey4uLnByb3BzfT5cclxuICAgICAgICAgICAgPE1vZGFsLk1vZGFsSGVhZGVyIHNlcGFyYXRvcj17ZmFsc2V9PlxyXG4gICAgICAgICAgICAgICAgPEhlYWRpbmcgdmFyaWFudD1cImhlYWRpbmctbGcvbWVkaXVtXCI+e3RpdGxlfTwvSGVhZGluZz5cclxuICAgICAgICAgICAgPC9Nb2RhbC5Nb2RhbEhlYWRlcj5cclxuICAgICAgICAgICAgPE1vZGFsLk1vZGFsQ29udGVudD5cclxuICAgICAgICAgICAgICAgIDxUZXh0PntkZXNjcmlwdGlvbn08L1RleHQ+XHJcbiAgICAgICAgICAgIDwvTW9kYWwuTW9kYWxDb250ZW50PlxyXG4gICAgICAgICAgICA8TW9kYWwuTW9kYWxGb290ZXI+XHJcbiAgICAgICAgICAgICAgICB7YnV0dG9ucy5tYXAoYnV0dG9uID0+IDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbi5hY3Rpb24oKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5vbkNsb3NlKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShidXR0b24pXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICBjb2xvcj17YnV0dG9uLmNvbG9yID8/IEJ1dHRvbi5Db2xvcnMuQlJBTkR9XHJcbiAgICAgICAgICAgICAgICAgICAgbG9vaz17YnV0dG9uLmxvb2sgPz8gQnV0dG9uLkxvb2tzLkZJTExFRH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7YnV0dG9uLnRleHR9XHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj4pfVxyXG4gICAgICAgICAgICA8L01vZGFsLk1vZGFsRm9vdGVyPlxyXG4gICAgICAgIDwvTW9kYWwuTW9kYWxSb290PilcclxuICAgIH0pXHJcbn0iLCJpbXBvcnQgeyBmaW5kQnlQcm9wcywgXyB9IGZyb20gXCIuLi8uLi93ZWJwYWNrXCI7XHJcbmltcG9ydCB7IG1lc3NhZ2VDYWNoZSB9IGZyb20gXCIuLi9tZXNzYWdlc1wiO1xyXG5cclxuY29uc3QgeyBnZXRNZXNzYWdlczogZGlzY29yZEdldE1lc3NhZ2VzIH0gPSAvKiNfX1BVUkVfXyovZmluZEJ5UHJvcHMoXHJcblx0XCJnZXRNZXNzYWdlc1wiLFxyXG5cdFwiZ2V0TWVzc2FnZVwiXHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRNZXNzYWdlcyhjaGFubmVsSUQpIHtcclxuXHRjb25zdCBtZXNzYWdlcyA9IF8ubWVyZ2UoXHJcblx0XHRfLmtleUJ5KGRpc2NvcmRHZXRNZXNzYWdlcyhjaGFubmVsSUQpLl9hcnJheSwgXCJpZFwiKSxcclxuXHRcdG1lc3NhZ2VDYWNoZVtjaGFubmVsSURdID8/IHt9XHJcblx0KTtcclxuXHRyZXR1cm4gKG1lc3NhZ2VDYWNoZVtjaGFubmVsSURdID0gbWVzc2FnZXMpO1xyXG59XHJcbiIsImltcG9ydCB7IGZpbmRCeVByb3BzLCBfIH0gZnJvbSBcIi4uLy4uL3dlYnBhY2tcIjtcclxuaW1wb3J0IHsgbWVzc2FnZUNhY2hlIH0gZnJvbSBcIi4uL21lc3NhZ2VzXCI7XHJcblxyXG5jb25zdCB7IGdldE1lc3NhZ2U6IGRpc2NvcmRHZXRNZXNzYWdlIH0gPSAvKiNfX1BVUkVfXyovZmluZEJ5UHJvcHMoXHJcblx0XCJnZXRNZXNzYWdlc1wiLFxyXG5cdFwiZ2V0TWVzc2FnZVwiXHJcbik7XHJcbmNvbnN0IHsgZ2V0TWVzc2FnZUJ5UmVmZXJlbmNlIH0gPSAvKiNfX1BVUkVfXyovZmluZEJ5UHJvcHMoXCJnZXRNZXNzYWdlQnlSZWZlcmVuY2VcIik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRNZXNzYWdlKGNoYW5uZWxJRCwgbWVzc2FnZUlEKSB7XHJcblx0cmV0dXJuIF8uc2V0KFxyXG5cdFx0bWVzc2FnZUNhY2hlLFxyXG5cdFx0W2NoYW5uZWxJRCwgbWVzc2FnZUlEXSxcclxuXHRcdGRpc2NvcmRHZXRNZXNzYWdlKGNoYW5uZWxJRCwgbWVzc2FnZUlEKSA/P1xyXG5cdFx0XHRnZXRNZXNzYWdlQnlSZWZlcmVuY2Uoe1xyXG5cdFx0XHRcdG1lc3NhZ2VfaWQ6IG1lc3NhZ2VJRCxcclxuXHRcdFx0XHRjaGFubmVsX2lkOiBjaGFubmVsSUQsXHJcblx0XHRcdH0pLm1lc3NhZ2UgPz9cclxuXHRcdFx0bWVzc2FnZUNhY2hlW2NoYW5uZWxJRF0/LlttZXNzYWdlSURdXHJcblx0KVtjaGFubmVsSURdW21lc3NhZ2VJRF07XHJcbn1cclxuIiwiaW1wb3J0IHsgZmluZEJ5UHJvcHMsIGZpbmRCeVByb3RvdHlwZSwgXyB9IGZyb20gXCIuLi8uLi93ZWJwYWNrXCI7XHJcbmltcG9ydCB7IG1lc3NhZ2VDYWNoZSwgZ2V0TWVzc2FnZSB9IGZyb20gXCIuLi9tZXNzYWdlc1wiO1xyXG5cclxuY29uc3QgeyBFbmRwb2ludHMgfSA9IC8qI19fUFVSRV9fKi9maW5kQnlQcm9wcyhcIkVuZHBvaW50c1wiKTtcclxuY29uc3QgVXNlciA9IC8qI19fUFVSRV9fKi9maW5kQnlQcm90b3R5cGUoXCJ0YWdcIik7XHJcbmNvbnN0IFRpbWVzdGFtcCA9IC8qI19fUFVSRV9fKi9maW5kQnlQcm90b3R5cGUoXCJ0b0RhdGVcIiwgXCJtb250aFwiKTtcclxuY29uc3QgTWVzc2FnZSA9IC8qI19fUFVSRV9fKi9maW5kQnlQcm90b3R5cGUoXCJpc0VkaXRlZFwiKTtcclxuY29uc3QgRGlzY29yZEFQSSA9IC8qI19fUFVSRV9fKi9maW5kQnlQcm9wcyhcImdldEFQSUJhc2VVUkxcIik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmZXRjaE1lc3NhZ2UoY2hhbm5lbElELCBtZXNzYWdlSUQpIHtcclxuXHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cdFx0Y29uc3QgbWVzc2FnZSA9IGdldE1lc3NhZ2UoY2hhbm5lbElELCBtZXNzYWdlSUQpO1xyXG5cclxuXHRcdGlmIChtZXNzYWdlKSByZXR1cm4gcmVzb2x2ZShtZXNzYWdlKTtcclxuXHJcblx0XHREaXNjb3JkQVBJLmdldCh7XHJcblx0XHRcdHVybDogRW5kcG9pbnRzLk1FU1NBR0VTKGNoYW5uZWxJRCksXHJcblx0XHRcdHF1ZXJ5OiB7XHJcblx0XHRcdFx0bGltaXQ6IDEwMCxcclxuXHRcdFx0XHRhcm91bmQ6IG1lc3NhZ2VJRCxcclxuXHRcdFx0fSxcclxuXHRcdH0pXHJcblx0XHRcdC50aGVuKChyZXMpID0+IHtcclxuXHRcdFx0XHRpZiAocmVzLnN0YXR1cyAhPSAyMDApIHJldHVybiByZWplY3QoKTtcclxuXHRcdFx0XHRmb3IgKGxldCBtIG9mIHJlcy5ib2R5KSB7XHJcblx0XHRcdFx0XHRtLmF1dGhvciA9IG5ldyBVc2VyKG0uYXV0aG9yKTtcclxuXHRcdFx0XHRcdG0udGltZXN0YW1wID0gbmV3IFRpbWVzdGFtcChtLnRpbWVzdGFtcCk7XHJcblx0XHRcdFx0XHRtID0gbmV3IE1lc3NhZ2UobSk7XHJcblx0XHRcdFx0XHRfLnNldChtZXNzYWdlQ2FjaGUsIFttLmNoYW5uZWxfaWQsIG0uaWRdLCBtKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Y29uc3QgZm91bmRNZXNzYWdlID0gbWVzc2FnZUNhY2hlW2NoYW5uZWxJRF0/LlttZXNzYWdlSURdO1xyXG5cdFx0XHRcdGlmIChmb3VuZE1lc3NhZ2UpIHJlc29sdmUoZm91bmRNZXNzYWdlKTtcclxuXHRcdFx0XHRyZWplY3QoKTtcclxuXHRcdFx0fSlcclxuXHRcdFx0LmNhdGNoKChyZXMpID0+IHtcclxuXHRcdFx0XHQvLyBsb2dnZXIuZXJyb3IocmVzKTtcclxuXHRcdFx0XHRpZiAocmVzLnN0YXR1cyAhPSA0MDMpIHJldHVybiByZWplY3QoKTtcclxuXHRcdFx0fSk7XHJcblx0fSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgZmluZEJ5UHJvcHMgfSBmcm9tIFwiLi4vLi4vd2VicGFja1wiO1xyXG5pbXBvcnQgeyByZXJlbmRlck1lc3NhZ2UgfSBmcm9tIFwiLi4vbWVzc2FnZXNcIjtcclxuXHJcbmNvbnN0IHsgZ2V0TWVzc2FnZXM6IGRpc2NvcmRHZXRNZXNzYWdlcyB9ID0gLyojX19QVVJFX18qL2ZpbmRCeVByb3BzKFxyXG5cdFwiZ2V0TWVzc2FnZXNcIixcclxuXHRcImdldE1lc3NhZ2VcIlxyXG4pO1xyXG5jb25zdCB7IGdldENoYW5uZWxJZCB9ID0gLyojX19QVVJFX18qL2ZpbmRCeVByb3BzKFwiZ2V0Q2hhbm5lbElkXCIpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVyZW5kZXJBbGxNZXNzYWdlcyhwcm9wcyA9IHt9KSB7XHJcblx0Y29uc3QgbWVzc2FnZXMgPSBkaXNjb3JkR2V0TWVzc2FnZXMoZ2V0Q2hhbm5lbElkKCkpLl9hcnJheTtcclxuXHRmb3IgKGNvbnN0IG1lc3NhZ2Ugb2YgbWVzc2FnZXMpIHtcclxuXHRcdHJlcmVuZGVyTWVzc2FnZShtZXNzYWdlLCBwcm9wcyk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IGZpbmRCeVByb3BzIH0gZnJvbSBcIi4uLy4uL3dlYnBhY2tcIjtcclxuaW1wb3J0IHsgdXBkYXRlTWVzc2FnZSB9IGZyb20gXCIuLi9tZXNzYWdlc1wiO1xyXG5cclxuY29uc3QgeyBnZXRNZXNzYWdlOiBkaXNjb3JkR2V0TWVzc2FnZSB9ID0gLyojX19QVVJFX18qL2ZpbmRCeVByb3BzKFxyXG5cdFwiZ2V0TWVzc2FnZXNcIixcclxuXHRcImdldE1lc3NhZ2VcIlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVyZW5kZXJNZXNzYWdlKGlkT3JNZXNzYWdlLCBwcm9wcyA9IHt9KSB7XHJcblx0bGV0IG1lc3NhZ2UgPVxyXG5cdFx0dHlwZW9mIGlkT3JNZXNzYWdlID09PSBcInN0cmluZ1wiXHJcblx0XHRcdD8gZGlzY29yZEdldE1lc3NhZ2UoaWRPck1lc3NhZ2UpXHJcblx0XHRcdDogaWRPck1lc3NhZ2U7XHJcblx0aWYgKCFtZXNzYWdlKSByZXR1cm47XHJcblx0bWVzc2FnZSA9IHtcclxuXHRcdGlkOiBtZXNzYWdlLmlkLFxyXG5cdFx0Y2hhbm5lbF9pZDogbWVzc2FnZS5jaGFubmVsX2lkLFxyXG5cdFx0Y29udGVudDogbWVzc2FnZS5jb250ZW50LFxyXG5cdH07XHJcblx0dXBkYXRlTWVzc2FnZShtZXNzYWdlLCBwcm9wcyk7XHJcbn1cclxuIiwiaW1wb3J0IHsgZmluZEJ5UHJvcHMgfSBmcm9tIFwiLi4vLi4vd2VicGFja1wiO1xyXG5cclxuY29uc3QgRmx1eERpc3BhdGNoZXIgPSAvKiNfX1BVUkVfXyovZmluZEJ5UHJvcHMoXCJkaXNwYXRjaFwiLCBcImRpcnR5RGlzcGF0Y2hcIik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1cGRhdGVNZXNzYWdlKG1lc3NhZ2UsIHByb3BzID0ge30pIHtcclxuXHRGbHV4RGlzcGF0Y2hlci5kaXJ0eURpc3BhdGNoKHtcclxuXHRcdC4uLnByb3BzLFxyXG5cdFx0dHlwZTogXCJNRVNTQUdFX1VQREFURVwiLFxyXG5cdFx0bWVzc2FnZSxcclxuXHR9KTtcclxufVxyXG4iLCJleHBvcnQgbGV0IG1lc3NhZ2VDYWNoZSA9IHt9O1xyXG5cclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBnZXRNZXNzYWdlcyB9IGZyb20gXCIuL2dldE1lc3NhZ2VzXCI7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZ2V0TWVzc2FnZSB9IGZyb20gXCIuL2dldE1lc3NhZ2VcIjtcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBmZXRjaE1lc3NhZ2UgfSBmcm9tIFwiLi9mZXRjaE1lc3NhZ2VcIjtcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyByZXJlbmRlckFsbE1lc3NhZ2VzIH0gZnJvbSBcIi4vcmVyZW5kZXJBbGxNZXNzYWdlc1wiO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIHJlcmVuZGVyTWVzc2FnZSB9IGZyb20gXCIuL3JlcmVuZGVyTWVzc2FnZVwiO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIHVwZGF0ZU1lc3NhZ2UgfSBmcm9tIFwiLi91cGRhdGVNZXNzYWdlXCI7XHJcbiIsImltcG9ydCB7IFJlYWN0LCBNb2RhbEFjdGlvbnMgfSBmcm9tIFwiLi4vd2VicGFja1wiO1xyXG5pbXBvcnQgKiBhcyBzZXR0aW5ncyBmcm9tIFwiLi4vc2V0dGluZ3NcIjtcclxuaW1wb3J0IHsgTWFya2Rvd24sIE1vZGFsLCBGbGV4LCBIZWFkaW5nLCBUZXh0IH0gZnJvbSBcIi4uL2NvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgQ2hhbmdlbG9nLCBDaGFuZ2Vsb2dNb2RhbCB9IGZyb20gXCIuLi9jbGFzc2VzXCI7XHJcbmltcG9ydCAqIGFzIGNvbmZpZyBmcm9tIFwiQGl0dGFpL2NvbmZpZ1wiXHJcbmltcG9ydCB7IGpvaW5DbGFzc2VzIH0gZnJvbSBcIi4uL3V0aWxpdGllc1wiXHJcbmV4cG9ydCBjb25zdCByZW5kZXJDaGFuZ2Vsb2dDb250ZW50ID0gKGNvbnRlbnQpID0+IHtcclxuICAgIHJldHVybiA8PlxyXG4gICAgICAgIHtPYmplY3QuZW50cmllcyhjb250ZW50KS5tYXAoKFt0aXRsZSwgeyB0eXBlLCBpdGVtcyB9XSkgPT4gPGRpdiBjbGFzc05hbWU9e0NoYW5nZWxvZ01vZGFsLmNvbnRlbnR9PlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtqb2luQ2xhc3NlcyhDaGFuZ2Vsb2dbdHlwZV0sIENoYW5nZWxvZy5tYXJnaW5Ub3ApfT57dGl0bGV9PC9oMT5cclxuICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAge2l0ZW1zLm1hcChpdGVtID0+IDxsaT5cclxuICAgICAgICAgICAgICAgICAgICA8TWFya2Rvd24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvTWFya2Rvd24+XHJcbiAgICAgICAgICAgICAgICA8L2xpPil9XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9kaXY+KX1cclxuICAgIDwvPlxyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgb3BlbkNoYW5nZWxvZ01vZGFsID0gKGNoYW5nZWxvZyA9IHNldHRpbmdzQ2hhbmdlbG9nKSA9PiB7XHJcbiAgICBjb25zdCB7IGNoYW5nZWxvZzogc2V0dGluZ3NDaGFuZ2Vsb2csIG1hbmlmZXN0IH0gPSBjb25maWc7XHJcbiAgICBNb2RhbEFjdGlvbnMub3Blbk1vZGFsKChwcm9wcykgPT4gPE1vZGFsLk1vZGFsUm9vdCB7Li4ucHJvcHN9IHNpemU9e01vZGFsLk1vZGFsU2l6ZS5TTUFMTH0gY2xhc3NOYW1lPXtDaGFuZ2Vsb2dNb2RhbC5tb2RhbH0+XHJcbiAgICAgICAgPE1vZGFsLk1vZGFsSGVhZGVyIHNlcGFyYXRvcj17ZmFsc2V9PlxyXG4gICAgICAgICAgICA8RmxleD5cclxuICAgICAgICAgICAgICAgIDxGbGV4LkNoaWxkIGdyb3c9ezF9IHNocmluaz17MX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEhlYWRpbmcgdmFyaWFudD1cImhlYWRpbmctbGcvbWVkaXVtXCI+e21hbmlmZXN0Lm5hbWV9IC0ge21hbmlmZXN0LnZlcnNpb259PC9IZWFkaW5nPlxyXG4gICAgICAgICAgICAgICAgICAgIHtjaGFuZ2Vsb2cuZGF0ZSAmJiA8VGV4dCBjbGFzc05hbWU9e0NoYW5nZWxvZy5kYXRlfSBzaXplPXtUZXh0LlNpemVzLlNJWkVfMTJ9PntjaGFuZ2Vsb2cuZGF0ZX08L1RleHQ+fVxyXG4gICAgICAgICAgICAgICAgPC9GbGV4LkNoaWxkPlxyXG4gICAgICAgICAgICAgICAgPE1vZGFsLk1vZGFsQ2xvc2VCdXR0b24gb25DbGljaz17cHJvcHMub25DbG9zZX0vPlxyXG4gICAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgPC9Nb2RhbC5Nb2RhbEhlYWRlcj5cclxuICAgICAgICA8TW9kYWwuTW9kYWxDb250ZW50PlxyXG4gICAgICAgICAgICB7Y2hhbmdlbG9nLmltYWdlICYmIDxpbWcgY2xhc3NOYW1lPXtDaGFuZ2Vsb2cudmlkZW99IHNyYz17Y2hhbmdlbG9nLmltYWdlfSB3aWR0aD1cIjQ1MVwiIC8+fVxyXG4gICAgICAgICAgICB7cmVuZGVyQ2hhbmdlbG9nQ29udGVudChjaGFuZ2Vsb2cuY29udGVudHMpfVxyXG4gICAgICAgIDwvTW9kYWwuTW9kYWxDb250ZW50PlxyXG4gICAgPC9Nb2RhbC5Nb2RhbFJvb3Q+KVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgaGFzU2VlbkNoYW5nZWxvZyA9ICgpID0+IHNldHRpbmdzLmdldChgX19pdHRhaV9jaGFuZ2Vsb2dfJHttYW5pZmVzdC52ZXJzaW9ufWApXHJcbmV4cG9ydCBjb25zdCBzZXRTZWVuQ2hhbmdlbG9nID0gKHNldCkgPT4gc2V0dGluZ3Muc2V0KGBfX2l0dGFpX2NoYW5nZWxvZ18ke21hbmlmZXN0LnZlcnNpb259YCwgc2V0KSIsImltcG9ydCB7IGxvZywgZGVidWcsIHdhcm4sIGVycm9yIH0gZnJvbSBcIi4uL2xvZ2dlclwiO1xyXG5pbXBvcnQgKiBhcyBjb25maWcgZnJvbSBcIkBpdHRhaS9jb25maWdcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IC8qKlxyXG4gKiBUaGUgcGx1Z2luIGNsYXNzIGZvciB0aGUgcnVubmluZyBjbGllbnQgbW9kLlxyXG4gKiBAbmFtZSBQbHVnaW5cclxuICogQG1lbWJlcm9mIG1vZHVsZTplbnRpdGllc1xyXG4gKi8gY2xhc3MgUGx1Z2luIHtcclxuXHJcblx0ZnJpZW5kbHlOYW1lID0gY29uZmlnLm1hbmlmZXN0Lm5hbWVcclxuXHJcblx0c3RhcnQoKSB7fVxyXG5cdHN0b3AoKSB7fVxyXG5cclxuXHRzZXRTZXR0aW5nc1BhbmVsKGNvbXBvbmVudCkge1xyXG5cdFx0dGhpcy5fX2l0dGFpSW50ZXJuYWxQbHVnaW4uc2V0U2V0dGluZ3NQYW5lbChjb21wb25lbnQpO1xyXG5cdH1cclxuXHJcblx0cmVtb3ZlU2V0dGluZ3NQYW5lbCgpIHtcclxuXHRcdHRoaXMuX19pdHRhaUludGVybmFsUGx1Z2luLnJlbW92ZVNldHRpbmdzUGFuZWwoKTtcclxuXHR9XHJcblxyXG5cdGxvZyguLi5hcmdzKSB7XHJcblx0XHRsb2coLi4uYXJncyk7XHJcblx0fVxyXG5cdGRlYnVnKC4uLmFyZ3MpIHtcclxuXHRcdGRlYnVnKC4uLmFyZ3MpO1xyXG5cdH1cclxuXHR3YXJuKC4uLmFyZ3MpIHtcclxuXHRcdHdhcm4oLi4uYXJncyk7XHJcblx0fVxyXG5cdGVycm9yKC4uLmFyZ3MpIHtcclxuXHRcdGVycm9yKC4uLmFyZ3MpO1xyXG5cdH1cclxufSIsImltcG9ydCB7IHBhdGNoIH0gZnJvbSBcIi4uL3BhdGNoZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IC8qKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBUaGUgbmFtZSBvZiB0aGUgcGF0Y2guIEZvciBkZWJ1Z2dpbmcuXHJcbiAqIEBwYXJhbSB7YW55fSBvYmplY3QgVGhlIG9iamVjdCB0aGF0IHRoZSBmdW5jdGlvbiBpcyBpbi5cclxuICogQHBhcmFtIHtzdHJpbmd9IGZ1bmN0aW9uTmFtZSBUaGUgbmFtZSBvZiB0aGUgZnVuY3Rpb24gdG8gcGF0Y2guXHJcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IHBhdGNoRnVuY3Rpb24gVGhlIGNvZGUgdG8gcGF0Y2ggaW50byB0aGUgZnVuY3Rpb24uXHJcbiAqIEByZXR1cm5zIHtvYmplY3R9IHtAbGluayBtb2R1bGU6cGF0Y2hlci5wYXRjaH5wYXRjaERhdGF9XHJcbiAqIEBtZW1iZXJvZiBtb2R1bGU6cGF0Y2hlclxyXG4gKiBAdHV0b3JpYWwgcGF0Y2hpbmdCZWZvcmVcclxuICovIGZ1bmN0aW9uIGJlZm9yZShuYW1lLCBvYmplY3QsIGZ1bmN0aW9uTmFtZSwgcGF0Y2hGdW5jdGlvbikge1xyXG5cdHJldHVybiBwYXRjaChuYW1lLCBvYmplY3QsIGZ1bmN0aW9uTmFtZSwgXCJiZWZvcmVcIiwgcGF0Y2hGdW5jdGlvbik7XHJcbn1cclxuIiwiaW1wb3J0IHsgcGF0Y2ggfSBmcm9tIFwiLi4vcGF0Y2hlclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgLyoqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBwYXRjaC4gRm9yIGRlYnVnZ2luZy5cclxuICogQHBhcmFtIHthbnl9IG9iamVjdCBUaGUgb2JqZWN0IHRoYXQgdGhlIGZ1bmN0aW9uIGlzIGluLlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gZnVuY3Rpb25OYW1lIFRoZSBuYW1lIG9mIHRoZSBmdW5jdGlvbiB0byBwYXRjaC5cclxuICogQHBhcmFtIHtmdW5jdGlvbn0gcGF0Y2hGdW5jdGlvbiBUaGUgY29kZSB0byBwYXRjaCBpbnRvIHRoZSBmdW5jdGlvbi5cclxuICogQHJldHVybnMge09iamVjdH0ge0BsaW5rIG1vZHVsZTpwYXRjaGVyLnBhdGNofnBhdGNoRGF0YX1cclxuICogQG1lbWJlcm9mIG1vZHVsZTpwYXRjaGVyXHJcbiAqIEB0dXRvcmlhbCBwYXRjaGluZ0luc3RlYWRcclxuICovIGZ1bmN0aW9uIGluc3RlYWQobmFtZSwgb2JqZWN0LCBmdW5jdGlvbk5hbWUsIHBhdGNoRnVuY3Rpb24pIHtcclxuXHRyZXR1cm4gcGF0Y2gobmFtZSwgb2JqZWN0LCBmdW5jdGlvbk5hbWUsIFwiaW5zdGVhZFwiLCBwYXRjaEZ1bmN0aW9uKTtcclxufVxyXG4iLCJpbXBvcnQgeyBwYXRjaCB9IGZyb20gXCIuLi9wYXRjaGVyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAvKipcclxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgVGhlIG5hbWUgb2YgdGhlIHBhdGNoLiBGb3IgZGVidWdnaW5nLlxyXG4gKiBAcGFyYW0ge2FueX0gb2JqZWN0IFRoZSBvYmplY3QgdGhhdCB0aGUgZnVuY3Rpb24gaXMgaW4uXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBmdW5jdGlvbk5hbWUgVGhlIG5hbWUgb2YgdGhlIGZ1bmN0aW9uIHRvIHBhdGNoLlxyXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBwYXRjaEZ1bmN0aW9uIFRoZSBjb2RlIHRvIHBhdGNoIGludG8gdGhlIGZ1bmN0aW9uLlxyXG4gKiBAcmV0dXJucyB7b2JqZWN0fSB7QGxpbmsgbW9kdWxlOnBhdGNoZXIucGF0Y2h+cGF0Y2hEYXRhfVxyXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnBhdGNoZXJcclxuICogQHR1dG9yaWFsIHBhdGNoaW5nQWZ0ZXJcclxuICovIGZ1bmN0aW9uIGFmdGVyKG5hbWUsIG9iamVjdCwgZnVuY3Rpb25OYW1lLCBwYXRjaEZ1bmN0aW9uKSB7XHJcblx0cmV0dXJuIHBhdGNoKG5hbWUsIG9iamVjdCwgZnVuY3Rpb25OYW1lLCBcImFmdGVyXCIsIHBhdGNoRnVuY3Rpb24pO1xyXG59XHJcbiIsImltcG9ydCB7IHBhdGNoZXMgfSBmcm9tIFwiLi4vcGF0Y2hlclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgLyoqXHJcbiAqIFVucGF0Y2hlcyBhbGwgb2YgdGhlIHBhdGNoZXMgc3BlY2lmaWVkLCBvciBhbGwgb2YgdGhlbSBpZiBub25lIGFyZSBzcGVjaWZpZWQuXHJcbiAqIEBtZW1iZXJvZiBtb2R1bGU6cGF0Y2hlclxyXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBbdW5wYXRjaGVzPXtAbGluayBtb2R1bGU6cGF0Y2hlci5wYXRjaGVzfV0gQW4gYXJyYXkgcGF0Y2ggbmFtZXMuXHJcbiAqLyBmdW5jdGlvbiB1bnBhdGNoQWxsKHVucGF0Y2hlcykge1xyXG5cdGlmICghQXJyYXkuaXNBcnJheSh1bnBhdGNoZXMpKSB1bnBhdGNoZXMgPSBwYXRjaGVzO1xyXG5cdGZvciAoY29uc3Qgb2JqZWN0IG9mIE9iamVjdC52YWx1ZXModW5wYXRjaGVzKSkge1xyXG5cdFx0Zm9yIChjb25zdCBmdW5jdCBvZiBPYmplY3QudmFsdWVzKG9iamVjdCkpIHtcclxuXHRcdFx0Zm9yIChjb25zdCBwYXRjaCBvZiBmdW5jdC5wYXRjaGVzKSB7XHJcblx0XHRcdFx0cGF0Y2gudW5wYXRjaCgpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCAqIGFzIGxvZ2dlciBmcm9tIFwiLi4vbG9nZ2VyXCI7XHJcbmltcG9ydCB7IHJhbmRvbVN0cmluZyB9IGZyb20gXCIuLi91dGlsaXRpZXNcIjtcclxuaW1wb3J0IHsgcGF0Y2hlcyB9IGZyb20gXCIuLi9wYXRjaGVyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAvKipcclxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgVGhlIG5hbWUgb2YgdGhlIHBhdGNoLiBGb3IgZGVidWdnaW5nLlxyXG4gKiBAcGFyYW0ge2FueX0gb2JqZWN0IFRoZSBvYmplY3QgdGhhdCB0aGUgZnVuY3Rpb24gaXMgaW4uXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBmdW5jdGlvbk5hbWUgVGhlIG5hbWUgb2YgdGhlIGZ1bmN0aW9uIHRvIHBhdGNoLlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gdHlwZSBUaGUgdHlwZSBvZiBwYXRjaCB0byBhcHBseS4gYGJlZm9yZWAsIGBpbnN0ZWFkYCwgYGFmdGVyYC5cclxuICogQHBhcmFtIHtmdW5jdGlvbn0gcGF0Y2hGdW5jdGlvbiBUaGUgY29kZSB0byBwYXRjaCBpbnRvIHRoZSBmdW5jdGlvbi5cclxuICogQHJldHVybnMge29iamVjdH0ge0BsaW5rIG1vZHVsZTp1dGlscy9wYXRjaGVyLnBhdGNofnBhdGNoRGF0YX1cclxuICogQG1lbWJlcm9mIG1vZHVsZTpwYXRjaGVyXHJcbiAqIEB0dXRvcmlhbCBwYXRjaGluZ1xyXG4gKi8gZnVuY3Rpb24gcGF0Y2gobmFtZSwgb2JqZWN0LCBmdW5jdGlvbk5hbWUsIHR5cGUsIHBhdGNoRnVuY3Rpb24pIHtcclxuXHRjb25zdCBpZCA9IG9iamVjdC5fX2l0dGFpX18gPz8gcmFuZG9tU3RyaW5nKDI1LCBPYmplY3Qua2V5cyhwYXRjaGVzKSk7XHJcblx0b2JqZWN0Ll9faXR0YWlfXyA9IG9iamVjdC5fX2l0dGFpX18gPz8gaWQ7XHJcblx0aWYgKCFwYXRjaGVzW2lkXSkgcGF0Y2hlc1tpZF0gPSB7fTtcclxuXHJcblx0LyoqXHJcblx0ICogQG1lbWJlcm9mIG1vZHVsZTpwYXRjaGVyXHJcblx0ICogQHByb3Age3N0cmluZ30gbmFtZSBUaGUgbmFtZSBvZiB0aGUgZnVuY3Rpb24gYmVpbmcgcGF0Y2hlZC5cclxuXHQgKiBAcHJvcCB7c3RyaW5nfSB0eXBlIFRoZSB0eXBlIG9mIHRoZSBwYXRjaC5cclxuXHQgKiBAcHJvcCB7ZnVuY3Rpb259IHBhdGNoRnVuY3Rpb24gVGhlIG9yaWdpbmFsIGZ1bmN0aW9uLlxyXG5cdCAqIEBwcm9wIHtmdW5jdGlvbn0gdW5wYXRjaCBUaGUgZnVuY3Rpb24gdG8gY2FsbCB0byB1bnBhdGNoLlxyXG5cdCAqL1xyXG5cdGNvbnN0IHBhdGNoRGF0YSA9IHtcclxuXHRcdG5hbWUsXHJcblx0XHR0eXBlLFxyXG5cdFx0cGF0Y2hGdW5jdGlvbixcclxuXHRcdHVucGF0Y2g6IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0dHJ5IHtcclxuXHRcdFx0XHRjb25zdCBwYXRjaEluZGV4ID0gcGF0Y2hlc1tpZF1bZnVuY3Rpb25OYW1lXS5wYXRjaGVzLmluZGV4T2YodGhpcyk7XHJcblx0XHRcdFx0aWYgKHBhdGNoSW5kZXggPT09IC0xKVxyXG5cdFx0XHRcdFx0dGhyb3cgXCJDb3VsZG4ndCBmaW5kIHRoZSBwYXRjaC4gVGhpcyBwcm9iYWJseSBoYXBwZW5lZCBiZWNhdXNlIHRoZSBvYmplY3Qgd2FzIHRhbXBlcmVkIHdpdGguIERvbid0IGRvIHRoYXQuXCI7XHJcblx0XHRcdFx0Ly8gRGVsZXRlIHBhdGNoLlxyXG5cdFx0XHRcdHBhdGNoZXNbaWRdW2Z1bmN0aW9uTmFtZV0ucGF0Y2hlcy5zcGxpY2UocGF0Y2hJbmRleCwgMSk7XHJcblx0XHRcdFx0Ly8gQ2xlYW4gdXAgdGhlIG9iamVjdCBpZiB0aGVyZSBhcmUgbm8gcGF0Y2hlcyBsZWZ0LlxyXG5cdFx0XHRcdGlmIChwYXRjaGVzW2lkXVtmdW5jdGlvbk5hbWVdLnBhdGNoZXMubGVuZ3RoID09PSAwKSB7XHJcblx0XHRcdFx0XHQvLyBSZXN0b3JlIG9yaWdpbmFsIGZ1bmN0aW9uLlxyXG5cdFx0XHRcdFx0b2JqZWN0W2Z1bmN0aW9uTmFtZV0gPSBwYXRjaGVzW2lkXVtmdW5jdGlvbk5hbWVdLm9yaWdpbmFsO1xyXG5cdFx0XHRcdFx0ZGVsZXRlIHBhdGNoZXNbaWRdW2Z1bmN0aW9uTmFtZV07XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmICghT2JqZWN0LmtleXMocGF0Y2hlc1tpZF0pLmxlbmd0aCkge1xyXG5cdFx0XHRcdFx0ZGVsZXRlIHBhdGNoZXNbaWRdO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSBjYXRjaCAoZSkge1xyXG5cdFx0XHRcdGxvZ2dlci5lcnJvcihgRmFpbGVkIHRvIHVucGF0Y2ggJHtuYW1lfS5gLCBlKTtcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHR9O1xyXG5cclxuXHRpZiAoIXBhdGNoZXNbaWRdW2Z1bmN0aW9uTmFtZV0pIHtcclxuXHRcdHBhdGNoZXNbaWRdW2Z1bmN0aW9uTmFtZV0gPSB7XHJcblx0XHRcdG9yaWdpbmFsOiBvYmplY3RbZnVuY3Rpb25OYW1lXSxcclxuXHRcdFx0cGF0Y2hlczogW10sXHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbnN0IHByb3BzID0geyAuLi5vYmplY3RbZnVuY3Rpb25OYW1lXSB9O1xyXG5cclxuXHRcdG9iamVjdFtmdW5jdGlvbk5hbWVdID0gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcclxuXHRcdFx0Y29uc3QgZnVuY3Rpb25EYXRhID0gcGF0Y2hlc1tpZF1bZnVuY3Rpb25OYW1lXTtcclxuXHRcdFx0Y29uc3QgYmVmb3JlcyA9IGZ1bmN0aW9uRGF0YS5wYXRjaGVzLmZpbHRlcigocCkgPT4gcC50eXBlID09PSBcImJlZm9yZVwiKTtcclxuXHRcdFx0Y29uc3QgaW5zdGVhZHMgPSBmdW5jdGlvbkRhdGEucGF0Y2hlcy5maWx0ZXIoKHApID0+IHAudHlwZSA9PT0gXCJpbnN0ZWFkXCIpO1xyXG5cdFx0XHRjb25zdCBhZnRlcnMgPSBmdW5jdGlvbkRhdGEucGF0Y2hlcy5maWx0ZXIoKHApID0+IHAudHlwZSA9PT0gXCJhZnRlclwiKTtcclxuXHJcblx0XHRcdC8vIEJlZm9yZSBwYXRjaGVzLlxyXG5cdFx0XHRmb3IgKGNvbnN0IGJlZm9yZSBvZiBiZWZvcmVzKSB7XHJcblx0XHRcdFx0dHJ5IHtcclxuXHRcdFx0XHRcdGNvbnN0IGNhbGxiYWNrID0gYmVmb3JlLnBhdGNoRnVuY3Rpb24oYXJncywgdGhpcyk7XHJcblx0XHRcdFx0XHRpZiAoY2FsbGJhY2spIGFyZ3MgPSBjYWxsYmFja1xyXG5cdFx0XHRcdH0gY2F0Y2ggKGUpIHtcclxuXHRcdFx0XHRcdGxvZ2dlci5lcnJvcihgRXJyb3IgcnVubmluZyBiZWZvcmUgcGF0Y2ggJHtuYW1lfS5gLCBlKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIEluc3RlYWQgcGF0Y2hlcy5cclxuXHRcdFx0bGV0IHJlcyA9IHt9O1xyXG5cdFx0XHRsZXQgcmFuT25jZSA9IGZhbHNlO1xyXG5cdFx0XHRpZiAoaW5zdGVhZHMubGVuZ3RoID09PSAwKSB7XHJcblx0XHRcdFx0KHJlcyA9IGZ1bmN0aW9uRGF0YS5vcmlnaW5hbC5jYWxsKHRoaXMsIC4uLmFyZ3MpKSwgKHJhbk9uY2UgPSB0cnVlKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHQvLyBCYWQsIGZpeCBsYXRlci5cclxuXHRcdFx0XHRmb3IgKGNvbnN0IGluc3RlYWQgb2YgaW5zdGVhZHMpIHtcclxuXHRcdFx0XHRcdC8vIERvIHRyYXNoIG1lcmdlIHdpdGggTG9kYXNoLlxyXG5cdFx0XHRcdFx0dHJ5IHtcclxuXHRcdFx0XHRcdFx0KHJlcyA9IGdsb2JhbFRoaXMuXy5tZXJnZShcclxuXHRcdFx0XHRcdFx0XHRyZXMsXHJcblx0XHRcdFx0XHRcdFx0aW5zdGVhZC5wYXRjaEZ1bmN0aW9uKGFyZ3MsIHRoaXMpID8/IHt9XHJcblx0XHRcdFx0XHRcdCkpLFxyXG5cdFx0XHRcdFx0XHRcdChyYW5PbmNlID0gdHJ1ZSk7XHJcblx0XHRcdFx0XHR9IGNhdGNoIChlKSB7XHJcblx0XHRcdFx0XHRcdGxvZ2dlci5lcnJvcihgRXJyb3IgcnVubmluZyBpbnN0ZWFkIHBhdGNoICR7bmFtZX0uYCwgZSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGlmICghcmFuT25jZSkge1xyXG5cdFx0XHRcdHJlcyA9IGZ1bmN0aW9uRGF0YS5vcmlnaW5hbC5jYWxsKHRoaXMsIC4uLmFyZ3MpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyBBZnRlciBwYXRjaGVzLlxyXG5cdFx0XHRmb3IgKGNvbnN0IGFmdGVyIG9mIGFmdGVycykge1xyXG5cdFx0XHRcdHRyeSB7XHJcblx0XHRcdFx0XHRjb25zdCBjYWxsYmFjayA9IGFmdGVyLnBhdGNoRnVuY3Rpb24oYXJncywgcmVzLCB0aGlzKVxyXG5cdFx0XHRcdFx0aWYgKGNhbGxiYWNrKSByZXMgPSBjYWxsYmFja1xyXG5cdFx0XHRcdH0gY2F0Y2ggKGUpIHtcclxuXHRcdFx0XHRcdGxvZ2dlci5lcnJvcihgRXJyb3IgcnVubmluZyBhZnRlciBwYXRjaCAke25hbWV9LmAsIGUpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cmV0dXJuIHJlcztcclxuXHRcdH07XHJcblx0XHRPYmplY3QuYXNzaWduKG9iamVjdFtmdW5jdGlvbk5hbWVdLCBwcm9wcyk7XHJcblx0XHRvYmplY3RbZnVuY3Rpb25OYW1lXS50b1N0cmluZyA9ICgpID0+XHJcblx0XHRcdHBhdGNoZXNbaWRdW2Z1bmN0aW9uTmFtZV0ub3JpZ2luYWwudG9TdHJpbmcoKTtcclxuXHR9XHJcblx0cGF0Y2hlc1tpZF1bZnVuY3Rpb25OYW1lXS5wYXRjaGVzLnB1c2gocGF0Y2hEYXRhKTtcclxuXHJcblx0cmV0dXJuIHBhdGNoRGF0YTtcclxufVxyXG4iLCIvKipcclxuICogQG1vZHVsZSBwYXRjaGVyXHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIEEgbGlzdCBvZiB0aGUgY3VycmVudGx5IHBhdGNoZWQgY29tcG9uZW50cy5cclxuICovXHJcbmV4cG9ydCBsZXQgcGF0Y2hlcyA9IFtdO1xyXG5cclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBiZWZvcmUgfSBmcm9tIFwiLi9iZWZvcmVcIjtcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBpbnN0ZWFkIH0gZnJvbSBcIi4vaW5zdGVhZFwiO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGFmdGVyIH0gZnJvbSBcIi4vYWZ0ZXJcIjtcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyB1bnBhdGNoQWxsIH0gZnJvbSBcIi4vdW5wYXRjaEFsbFwiO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIHBhdGNoIH0gZnJvbSBcIi4vcGF0Y2hcIjtcclxuIiwiaW1wb3J0IHsgZmluZEJ5UHJvcHMgfSBmcm9tIFwiLi4vd2VicGFja1wiO1xyXG5pbXBvcnQgeyByYW5kb21TdHJpbmcgfSBmcm9tIFwiLi4vdXRpbGl0aWVzXCI7XHJcblxyXG5jb25zdCBNZXNzYWdlQ3JlYXRvcnMgPSBmaW5kQnlQcm9wcyhcImNyZWF0ZUJvdE1lc3NhZ2VcIik7XHJcbmNvbnN0IE1lc3NhZ2VBY3Rpb25zID0gZmluZEJ5UHJvcHMoXCJyZWNlaXZlTWVzc2FnZVwiKTtcclxuY29uc3QgQXZhdGFyRGVmYXVsdHMgPSBmaW5kQnlQcm9wcyhcIkJPVF9BVkFUQVJTXCIpO1xyXG5cclxuZXhwb3J0IGNvbnN0IERlZmF1bHRNZXNzYWdlID0ge1xyXG4gICAgc3RhdGU6IFwiU0VOVFwiLFxyXG4gICAgYXV0aG9yOiBhZGRCb3RBdXRob3Ioe1xyXG4gICAgICAgIGF2YXRhcjogeyBhdmF0YXJJZDogXCJpdHRhaVwiLCBpbWFnZVVybDogXCJodHRwczovL2Nkbi5kaXNjb3JkYXBwLmNvbS9hdmF0YXJzLzI2NDA2MjQ1NzQ0ODc1OTI5Ni8xZjliMTc0M2NmNjI1Y2EyZDUxZWU1MTdiNWVmZDhhNy53ZWJwXCIgfSxcclxuICAgICAgICBhdXRob3I6IHsgdXNlcm5hbWU6IFwiSXR0YWlcIiB9XHJcbiAgICB9KSxcclxuICAgIGNvbnRlbnQ6IFwiSGVsbG8hIEJ5IHRoZSB3YXksIHlvdSBmb3Jnb3QgdG8gYWRkIGEgYFxcXCJjb250ZW50XFxcImAgYXR0cmlidXRlIHRvIHRoZSBtZXNzYWdlIVwiXHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWRkQm90QXV0aG9yKHsgYXZhdGFyLCBhdXRob3IgfSkge1xyXG4gICAgY29uc3QgYXZhdGFySWQgPSBhdmF0YXI/LmF2YXRhcklkID8/IHJhbmRvbVN0cmluZygxMClcclxuICAgIGlmIChBdmF0YXJEZWZhdWx0cz8uQk9UX0FWQVRBUlMgJiYgIUF2YXRhckRlZmF1bHRzLkJPVF9BVkFUQVJTW2F2YXRhcklkXSkge1xyXG4gICAgICAgIEF2YXRhckRlZmF1bHRzLkJPVF9BVkFUQVJTW2F2YXRhcklkXSA9IGF2YXRhci5pbWFnZVVybDtcclxuICAgIH1cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgYXZhdGFyOiBhdmF0YXJJZCxcclxuICAgICAgICBpZDogYXV0aG9yPy5hdXRob3JJZCA/PyByYW5kb21TdHJpbmcoMTApLFxyXG4gICAgICAgIGJvdDogdHJ1ZSxcclxuICAgICAgICBkaXNjcmltaW5hdG9yOiBhdXRob3I/LmRpc2NyaW1pbmF0b3IgPz8gXCIwMDAwXCIsXHJcbiAgICAgICAgdXNlcm5hbWU6IGF1dGhvcj8udXNlcm5hbWUgPz8gXCJCb3RVc2VyXCJcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZW5kTWVzc2FnZShjaGFubmVsSWQsIG1lc3NhZ2UpIHtcclxuICAgIE1lc3NhZ2VBY3Rpb25zLnJlY2VpdmVNZXNzYWdlKFxyXG4gICAgICAgIGNoYW5uZWxJZCxcclxuICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBcclxuICAgICAgICAgICAgTWVzc2FnZUNyZWF0b3JzLmNyZWF0ZUJvdE1lc3NhZ2UoY2hhbm5lbElkLCBtZXNzYWdlPy5jb250ZW50KSxcclxuICAgICAgICAgICAgRGVmYXVsdE1lc3NhZ2UsXHJcbiAgICAgICAgICAgIG1lc3NhZ2VcclxuICAgICAgICApXHJcbiAgICApO1xyXG59O1xyXG5cclxuY29uc3QgQm90TWVzc2FnZSA9IHsgc2VuZE1lc3NhZ2UsIGFkZEJvdEF1dGhvciB9O1xyXG5leHBvcnQgZGVmYXVsdCBCb3RNZXNzYWdlOyIsImltcG9ydCAqIGFzIHBhdGNoZXIgZnJvbSBcIi4uL3BhdGNoZXJcIjtcclxuaW1wb3J0IHsgZmluZEJ5UHJvcHMsIGZpbmRCeURpc3BsYXlOYW1lIH0gZnJvbSBcIi4uL3dlYnBhY2tcIjtcclxuaW1wb3J0IHsgcmFuZG9tU3RyaW5nLCBmaW5kSW5UcmVlLCBmaW5kSW5SZWFjdFRyZWUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzXCI7XHJcblxyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGJvdE1lc3NhZ2UgfSBmcm9tIFwiLi9ib3RNZXNzYWdlXCI7XHJcbmV4cG9ydCBjb25zdCBDb21tYW5kVHlwZXMgPSBPYmplY3QuYXNzaWduKHt9LCBmaW5kQnlQcm9wcyhcIkFwcGxpY2F0aW9uQ29tbWFuZFR5cGVcIiksIGZpbmRCeVByb3BzKFwiQXBwbGljYXRpb25Db21tYW5kUGVybWlzc2lvblR5cGVcIikpXHJcblxyXG5jb25zdCBDb21tYW5kc01vZHVsZSA9IGZpbmRCeVByb3BzKFwiQlVJTFRfSU5fQ09NTUFORFNcIik7XHJcbmNvbnN0IEFwcGxpY2F0aW9uQ29tbWFuZERpc2NvdmVyeUFwcGxpY2F0aW9uSWNvbiA9IGZpbmRCeURpc3BsYXlOYW1lKFxyXG5cdFwiQXBwbGljYXRpb25Db21tYW5kRGlzY292ZXJ5QXBwbGljYXRpb25JY29uXCJcclxuKTtcclxuXHJcbmxldCBpY29uUGF0Y2g7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcGF0Y2hJY29ucygpIHtcclxuXHRpZiAoIWljb25QYXRjaCkge1xyXG5cdFx0aWNvblBhdGNoID0gcGF0Y2hlci5hZnRlcihcIkl0dGFpSWNvbkNvbW1hbmRQYXRjaFwiLCBBcHBsaWNhdGlvbkNvbW1hbmREaXNjb3ZlcnlBcHBsaWNhdGlvbkljb24sIFwiZGVmYXVsdFwiLCAoYXJncywgcmVzLCBfdGhpcykgPT4ge1xyXG5cdFx0XHRcdGNvbnN0IHByb3BzID0gZmluZEluUmVhY3RUcmVlKHJlcywgKG4pID0+IG4uc3JjKTtcclxuXHRcdFx0XHRjb25zdCBzZWN0aW9uID0gZmluZEluVHJlZShhcmdzLCAobikgPT4gbi5pY29uKTtcclxuXHJcblx0XHRcdFx0aWYgKCFwcm9wcyB8fCAhc2VjdGlvbiB8fCBwcm9wcy5zcmMuaW5kZXhPZihzZWN0aW9uLmljb24pID4gMClcclxuXHRcdFx0XHRcdHJldHVybiByZXM7XHJcblxyXG5cdFx0XHRcdHJlcy5wcm9wcy5vbkNsaWNrID0gKCkgPT4ge307XHJcblx0XHRcdFx0cHJvcHMuc3JjID0gc2VjdGlvbi5pY29uO1xyXG5cclxuXHRcdFx0XHRyZXR1cm4gcmVzO1xyXG5cdFx0XHR9XHJcblx0XHQpO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVucGF0Y2hJY29ucygpIHtcclxuXHRpY29uUGF0Y2gudW5wYXRjaCgpO1xyXG5cdGljb25QYXRjaCA9IG51bGw7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBDT01NQU5EX0FSR1VNRU5UX1RZUEVTID0ge1xyXG5cdFNVQl9DT01NQU5EOiAxLFxyXG5cdFNVQl9DT01NQU5EX0dST1VQOiAyLFxyXG5cdFNUUklORzogMyxcclxuXHRJTlRFR0VSOiA0LFxyXG5cdEJPT0xFQU46IDUsXHJcblx0VVNFUjogNixcclxuXHRDSEFOTkVMOiA3LFxyXG5cdFJPTEU6IDgsXHJcbn07XHJcblxyXG5leHBvcnQgbGV0IHJlZ2lzdGVyZWRDb21tYW5kcyA9IFtdO1xyXG5leHBvcnQgbGV0IHJlZ2lzdGVyZWRTZWN0aW9ucyA9IFtdO1xyXG5cclxuLyoqXHJcbiAqXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBpZFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyQ29tbWFuZChjb21tYW5kKSB7XHJcblx0cGF0Y2hJY29ucygpO1xyXG5cdGNvbnN0IGN1cnJlbnRJRHMgPSBDb21tYW5kc01vZHVsZS5CVUlMVF9JTl9DT01NQU5EUy5tYXAoKHsgaWQgfSkgPT4gaWQpO1xyXG5cdGlmICghY29tbWFuZC5pZCA/PyBmYWxzZSkgY29tbWFuZC5pZCA9IHJhbmRvbVN0cmluZygxMCwgY3VycmVudElEcyk7XHJcblx0aWYgKGN1cnJlbnRJRHMuaW5kZXhPZihjb21tYW5kLmlkKSA+IC0xKVxyXG5cdFx0Y29tbWFuZC5pZCArPSByYW5kb21TdHJpbmcoMTAsIGN1cnJlbnRJRHMpO1xyXG5cclxuXHRjb21tYW5kLmFwcGxpY2F0aW9uSWQgPz89IFwiLTFcIjtcclxuXHRjb21tYW5kLmV4ZWN1dGUgPz89ICgoKSA9PiB7fSk7XHJcblx0Y29tbWFuZC5kaXNwbGF5TmFtZSA/Pz0gY29tbWFuZC5uYW1lXHJcblx0Y29tbWFuZC5kaXNwbGF5RGVzY3JpcHRpb24gPz89IGNvbW1hbmQuZGVzY3JpcHRpb25cclxuXHRjb21tYW5kLm9wdGlvbnMubWFwKChvcHRzKSA9PiB7XHJcblx0XHRvcHRzLmRpc3BsYXlOYW1lID8/PSBvcHRzLm5hbWVcclxuXHRcdG9wdHMuZGlzcGxheURlc2NyaXB0aW9uID8/PSBvcHRzLmRlc2NyaXB0aW9uXHJcblx0XHRyZXR1cm4gb3B0c1xyXG5cdH0pXHJcblxyXG5cdENvbW1hbmRzTW9kdWxlLkJVSUxUX0lOX0NPTU1BTkRTLnB1c2goY29tbWFuZCk7XHJcblx0cmVnaXN0ZXJlZENvbW1hbmRzLnB1c2goY29tbWFuZC5pZCk7XHJcblx0cmV0dXJuIGNvbW1hbmQuaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1bnJlZ2lzdGVyQ29tbWFuZChpZCkge1xyXG5cdENvbW1hbmRzTW9kdWxlLkJVSUxUX0lOX0NPTU1BTkRTLnNwbGljZShcclxuXHRcdENvbW1hbmRzTW9kdWxlLkJVSUxUX0lOX0NPTU1BTkRTLmZpbmRJbmRleCgoY29tbWFuZCkgPT4gY29tbWFuZC5pZCA9PT0gaWQpLFxyXG5cdFx0MVxyXG5cdCk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHVucmVnaXN0ZXJBbGxDb21tYW5kcygpIHtcclxuXHRmb3IgKGNvbnN0IGNvbW1hbmQgb2YgcmVnaXN0ZXJlZENvbW1hbmRzKSB7XHJcblx0XHR1bnJlZ2lzdGVyQ29tbWFuZChjb21tYW5kKTtcclxuXHR9XHJcbn1cclxuXHJcbi8qKlxyXG4gKlxyXG4gKiBAcGFyYW0ge29iamVjdH0gaWRcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByZWdpc3RlclNlY3Rpb24oc2VjdGlvbikge1xyXG5cdHBhdGNoSWNvbnMoKTtcclxuXHRjb25zdCBjdXJyZW50SURzID0gQ29tbWFuZHNNb2R1bGUuQlVJTFRfSU5fU0VDVElPTlMubWFwKCh7IGlkIH0pID0+IGlkKTtcclxuXHRpZiAoIXNlY3Rpb24uaWQgPz8gZmFsc2UpIHNlY3Rpb24uaWQgPSByYW5kb21TdHJpbmcoMTAsIGN1cnJlbnRJRHMpO1xyXG5cdGlmIChjdXJyZW50SURzLmluZGV4T2Yoc2VjdGlvbi5pZCkgPiAtMSlcclxuXHRcdHNlY3Rpb24uaWQgKz0gcmFuZG9tU3RyaW5nKDEwLCBjdXJyZW50SURzKTtcclxuXHJcblx0c2VjdGlvbi5pc0J1aWx0SW4gPSBmYWxzZTtcclxuXHJcblx0Q29tbWFuZHNNb2R1bGUuQlVJTFRfSU5fU0VDVElPTlMucHVzaChzZWN0aW9uKTtcclxuXHRyZWdpc3RlcmVkU2VjdGlvbnMucHVzaChzZWN0aW9uLmlkKTtcclxuXHRyZXR1cm4gc2VjdGlvbi5pZDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVucmVnaXN0ZXJTZWN0aW9uKGlkKSB7XHJcblx0Q29tbWFuZHNNb2R1bGUuQlVJTFRfSU5fQ09NTUFORFMuc3BsaWNlKFxyXG5cdFx0Q29tbWFuZHNNb2R1bGUuQlVJTFRfSU5fQ09NTUFORFMuZmluZEluZGV4KChjb21tYW5kKSA9PiBjb21tYW5kLmlkID09PSBpZCksXHJcblx0XHQxXHJcblx0KTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gdW5yZWdpc3RlckFsbFNlY3Rpb25zKCkge1xyXG5cdGZvciAoY29uc3QgY29tbWFuZCBvZiByZWdpc3RlcmVkU2VjdGlvbnMpIHtcclxuXHRcdHVucmVnaXN0ZXJDb21tYW5kKGNvbW1hbmQpO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBmaW5kQnlEaXNwbGF5TmFtZSwgZmluZEJ5UHJvcHMgfSBmcm9tIFwiLi4vd2VicGFja1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IE1lc3NhZ2VzID0gZmluZEJ5UHJvcHMoJ2dldE1lc3NhZ2UnLCAnZ2V0TWVzc2FnZXMnKVxyXG5leHBvcnQgY29uc3QgQ2hhbm5lbHMgPSBmaW5kQnlQcm9wcygnZ2V0Q2hhbm5lbCcsICdnZXRETUZyb21Vc2VySWQnKVxyXG5leHBvcnQgY29uc3QgQ3VycmVudENoYW5uZWxzID0gZmluZEJ5UHJvcHMoJ2dldENoYW5uZWxJZCcsICdnZXRMYXN0U2VsZWN0ZWRDaGFubmVsSWQnKVxyXG5leHBvcnQgY29uc3QgR3VpbGRzID0gZmluZEJ5UHJvcHMoJ2dldEd1aWxkJylcclxuZXhwb3J0IGNvbnN0IEN1cnJlbnRHdWlsZHMgPSBmaW5kQnlQcm9wcygnZ2V0R3VpbGRJZCcsICdnZXRMYXN0U2VsZWN0ZWRHdWlsZElkJylcclxuZXhwb3J0IGNvbnN0IEluZm8gPSBmaW5kQnlQcm9wcygnZ2V0U2Vzc2lvbklkJylcclxuZXhwb3J0IGNvbnN0IFN0YXR1cyA9IGZpbmRCeVByb3BzKCdnZXRTdGF0dXMnLCAnZ2V0QWN0aXZpdGllcycsICdnZXRTdGF0ZScpXHJcbmV4cG9ydCBjb25zdCBVc2VycyA9IGZpbmRCeVByb3BzKCdnZXRVc2VyJywgJ2dldEN1cnJlbnRVc2VyJylcclxuZXhwb3J0IGNvbnN0IFVzZXJTZXR0aW5ncyA9IGZpbmRCeVByb3BzKCdndWlsZEZvbGRlcnMnLCAndGhlbWUnKVxyXG5leHBvcnQgY29uc3QgVXNlclByb2ZpbGUgPSBmaW5kQnlQcm9wcygnZ2V0VXNlclByb2ZpbGUnKVxyXG5leHBvcnQgY29uc3QgTWVtYmVycyA9IGZpbmRCeVByb3BzKCdnZXRNZW1iZXInKVxyXG5leHBvcnQgY29uc3QgQWN0aXZpdGllcyA9IGZpbmRCeVByb3BzKCdnZXRTdGF0dXMnLCAnZ2V0QWN0aXZpdGllcycsICdnZXRTdGF0ZScpXHJcbmV4cG9ydCBjb25zdCBHYW1lcyA9IGZpbmRCeVByb3BzKCdnZXRHYW1lJywgJ2dhbWVzJylcclxuZXhwb3J0IGNvbnN0IEF1dGggPSBmaW5kQnlQcm9wcygnZ2V0SWQnLCAnaXNHdWVzdCcpXHJcbmV4cG9ydCBjb25zdCBUeXBpbmdVc2VycyA9IGZpbmRCeVByb3BzKCdpc1R5cGluZycpIiwidmFyIGU9W10sdD1bXTtmdW5jdGlvbiBuKG4scil7aWYobiYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGRvY3VtZW50KXt2YXIgYSxzPSEwPT09ci5wcmVwZW5kP1wicHJlcGVuZFwiOlwiYXBwZW5kXCIsZD0hMD09PXIuc2luZ2xlVGFnLGk9XCJzdHJpbmdcIj09dHlwZW9mIHIuY29udGFpbmVyP2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioci5jb250YWluZXIpOmRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXTtpZihkKXt2YXIgdT1lLmluZGV4T2YoaSk7LTE9PT11JiYodT1lLnB1c2goaSktMSx0W3VdPXt9KSxhPXRbdV0mJnRbdV1bc10/dFt1XVtzXTp0W3VdW3NdPWMoKX1lbHNlIGE9YygpOzY1Mjc5PT09bi5jaGFyQ29kZUF0KDApJiYobj1uLnN1YnN0cmluZygxKSksYS5zdHlsZVNoZWV0P2Euc3R5bGVTaGVldC5jc3NUZXh0Kz1uOmEuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUobikpfWZ1bmN0aW9uIGMoKXt2YXIgZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7aWYoZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsXCJ0ZXh0L2Nzc1wiKSxyLmF0dHJpYnV0ZXMpZm9yKHZhciB0PU9iamVjdC5rZXlzKHIuYXR0cmlidXRlcyksbj0wO248dC5sZW5ndGg7bisrKWUuc2V0QXR0cmlidXRlKHRbbl0sci5hdHRyaWJ1dGVzW3Rbbl1dKTt2YXIgYT1cInByZXBlbmRcIj09PXM/XCJhZnRlcmJlZ2luXCI6XCJiZWZvcmVlbmRcIjtyZXR1cm4gaS5pbnNlcnRBZGphY2VudEVsZW1lbnQoYSxlKSxlfX1leHBvcnR7biBhcyBkZWZhdWx0fTtcbiIsImltcG9ydCB7IFJlYWN0IH0gZnJvbSBcIi4uL3dlYnBhY2tcIlxyXG4vL0B0cy1pZ25vcmVcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9Ub2FzdFdyYXBwZXIuY3NzXCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdlbmVyaWNUb2FzdCh7XHJcbiAgICBjaGlsZHJlbixcclxufSkge1xyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudG9hc3R9PntjaGlsZHJlbn08L2Rpdj5cclxufVxyXG4iLCIvKipcclxuICogQG1vZHVsZSBjb21wb25lbnRzXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgZmluZEJ5UHJvcHMgfSBmcm9tIFwiLi4vd2VicGFja1wiXHJcbmltcG9ydCB7IHJhbmRvbVN0cmluZyB9IGZyb20gXCIuLi91dGlsaXRpZXNcIlxyXG5pbXBvcnQgeyBSZWFjdCB9IGZyb20gXCIuLi93ZWJwYWNrXCJcclxuaW1wb3J0IFRvYXN0IGZyb20gXCIuL1RvYXN0V3JhcHBlclwiXHJcblxyXG5jb25zdCB7IHNob3dUb2FzdCwgcG9wVG9hc3QgfSA9IGZpbmRCeVByb3BzKFwic2hvd1RvYXN0XCIpXHJcblxyXG4vKipcclxuICogU2hvd3MgYSB0b2FzdCB1c2luZyBkaXNjb3JkJ3Mgb3duIHRvYXN0IGhhbmRsZXIgdGhhdCB3YXMgYWRkZWQgb24gaXRzIDd0aCBiaXJ0aGRheSBmb3IuLi4gYWNoaXZlbWVudHM/XHJcbiAqIEBwYXJhbSB7RnVuY3Rpb248aW1wb3J0KCdyZWFjdCcpLlJlYWN0RWxlbWVudDxhbnk+PiB8IHN0cmluZ30gdGV4dCBDb21wb25lbnQgdG8gcmVuZGVyXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIE9wdGlvbnMgZm9yIHRoZSB0b2FzdFxyXG4gKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnMuaWRdIFRoZSBJRCBvZiB0aGUgdG9hc3QuIElmIG5vdCBnaXZlbiwgaXQgd2lsbCBiZSBnZW5lcmF0ZWQgb25lIHJhbmRvbWx5XHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0aW9ucy5kdXJhdGlvbl0gSG93IGxvbmcgdGhlIHRvYXN0IHNob3VsZCBzdGF5IG9uIHNjcmVlblxyXG4gKiBAcGFyYW0ge251bWJlcn0gW29wdGlvbnMucG9zaXRpb24gPSAxXSBQb3NpdGlvbiBvZiB0aGUgdG9hc3QuIDAgaXMgdG9wLCAxIGlzIGJvdHRvbVxyXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgSUQgb2YgdGhlIHRvYXN0XHJcbiAqL1xyXG5leHBvcnQgY29uc3Qgc2hvdyA9ICh0ZXh0LCBvcHRpb25zKSA9PiB7XHJcbiAgICBjb25zdCB0b2FzdElEID0gb3B0aW9ucz8uaWQgPz8gcmFuZG9tU3RyaW5nKDEwKVxyXG4gICAgc2hvd1RvYXN0KHtcclxuICAgICAgICBpZDogdG9hc3RJRCxcclxuICAgICAgICBvcHRpb25zOiBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLCB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBQT1NJVElPTlMuQk9UVE9NLFxyXG4gICAgICAgICAgICBjb21wb25lbnQ6IHR5cGVvZiB0ZXh0ICE9PSBcImZ1bmN0aW9uXCIgPyA8VG9hc3Q+e3RleHR9PC9Ub2FzdD4gOiB0ZXh0KCksXHJcbiAgICAgICAgfSksXHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIHRvYXN0SURcclxufVxyXG5cclxuLyoqXHJcbiAqIFJlbW92ZXMgYSB0b2FzdFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gaWQgVGhlIElEIG9mIHRoZSB0b2FzdFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHBvcCA9IChpZCkgPT4gcG9wVG9hc3QoaWQpXHJcblxyXG5leHBvcnQgY29uc3QgVG9hc3RXcmFwcGVyID0gVG9hc3RcclxuXHJcbmV4cG9ydCBjb25zdCBQT1NJVElPTlMgPSB7XHJcbiAgICBUT1A6IDAsXHJcbiAgICBCT1RUT006IDFcclxufSIsImltcG9ydCAqIGFzIHNldHRpbmdzIGZyb20gXCJpdHRhaS9zZXR0aW5nc1wiXHJcbmltcG9ydCB7IENvbnN0YW50cywgRGlzcGF0Y2hlciwgUmVhY3QsIENvbG9yVXRpbHMgfSBmcm9tIFwiaXR0YWkvd2VicGFja1wiXHJcbmltcG9ydCB0eXBlIHsgQ2F0ZWdvcnksIENvbG9ySGV4LCBQaW5uZWRETVMgfSBmcm9tIFwiLi4vdHlwZXNcIlxyXG5cclxuZXhwb3J0IGNvbnN0IGdldEFsbCA9ICgpOiBQaW5uZWRETVMgPT4ge1xyXG4gICAgcmV0dXJuIHNldHRpbmdzLmdldChcInBpbm5lZENhdGVnb3JpZXNcIiwge30pXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRDYXRlZ29yaWVzID0gKCk6IHN0cmluZ1tdID0+IHtcclxuICAgIGNvbnN0IHBpbm5lZENhdGVnb3JpZXMgPSBPYmplY3Qua2V5cyhnZXRBbGwoKSlcclxuICAgIHJldHVybiBwaW5uZWRDYXRlZ29yaWVzXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRDYXRlZ29yeSA9IChjYXRlZ29yeTogc3RyaW5nKTogQ2F0ZWdvcnkgPT4ge1xyXG4gICAgcmV0dXJuIGdldEFsbCgpW2NhdGVnb3J5XVxyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0UmF3ID0gKHNldHRpbmc6IFBpbm5lZERNUykgPT4ge1xyXG4gICAgc2V0dGluZ3Muc2V0KFwicGlubmVkQ2F0ZWdvcmllc1wiLCBzZXR0aW5nKVxyXG4gICAgXHJcbiAgICBEaXNwYXRjaGVyLmRpcnR5RGlzcGF0Y2goeyB0eXBlOiBcIlBJTkRNU19DSEFOR0VfTElTVFwiIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBhZGRDYXRlZ29yeSA9IChjYXRlZ29yeTogc3RyaW5nLCBzZXR0aW5nczogQ2F0ZWdvcnkgPSB7XHJcbiAgICBjb2xvcjogQ29sb3JVdGlscy5pbnQyaGV4KENvbnN0YW50cy5ERUZBVUxUX1JPTEVfQ09MT1IpLFxyXG4gICAgdXNlcnM6IFtdLFxyXG4gICAgc2hvdzogdHJ1ZVxyXG59KSA9PiB7XHJcbiAgICBsZXQgcGlubmVkQ2F0ZWdvcmllcyA9IGdldEFsbCgpXHJcbiAgICBwaW5uZWRDYXRlZ29yaWVzW2NhdGVnb3J5XSA9IHNldHRpbmdzXHJcbiAgICBcclxuICAgIHNldFJhdyhwaW5uZWRDYXRlZ29yaWVzKVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHNldENvbG9yID0gKGNhdGVnb3J5OiBzdHJpbmcsIGNvbG9yOiBDb2xvckhleCkgPT4ge1xyXG4gICAgbGV0IHBpbm5lZENhdGVnb3JpZXMgPSBnZXRBbGwoKVxyXG4gICAgICAgIFxyXG4gICAgaWYgKHBpbm5lZENhdGVnb3JpZXNbY2F0ZWdvcnldID09IG51bGwpIHRocm93IG5ldyBFcnJvcihgQ2F0ZWdvcnkgJHtjYXRlZ29yeX0gZG9lcyBub3QgZXhpc3RgKVxyXG4gICAgcGlubmVkQ2F0ZWdvcmllc1tjYXRlZ29yeV0uY29sb3IgPSBjb2xvclxyXG5cclxuICAgIHNldFJhdyhwaW5uZWRDYXRlZ29yaWVzKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0Q29sb3IgPSAoY2F0ZWdvcnk6IHN0cmluZykgPT4ge1xyXG4gICAgbGV0IHBpbm5lZENhdGVnb3JpZXMgPSBnZXRBbGwoKVxyXG5cclxuICAgIGlmIChwaW5uZWRDYXRlZ29yaWVzW2NhdGVnb3J5XSA9PSBudWxsKSB0aHJvdyBuZXcgRXJyb3IoYENhdGVnb3J5ICR7Y2F0ZWdvcnl9IGRvZXMgbm90IGV4aXN0YClcclxuICAgIHJldHVybiBwaW5uZWRDYXRlZ29yaWVzW2NhdGVnb3J5XS5jb2xvciBhcyBDb2xvckhleFxyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0VmlzaWJpbGl0eSA9IChjYXRlZ29yeTogc3RyaW5nLCB2aXNpYmlsaXR5OiBib29sZWFuKSA9PiB7XHJcbiAgICBsZXQgcGlubmVkQ2F0ZWdvcmllcyA9IGdldEFsbCgpXHJcbiAgICBcclxuICAgIGlmIChwaW5uZWRDYXRlZ29yaWVzW2NhdGVnb3J5XSA9PSBudWxsKSB0aHJvdyBuZXcgRXJyb3IoYENhdGVnb3J5ICR7Y2F0ZWdvcnl9IGRvZXMgbm90IGV4aXN0YClcclxuICAgIHBpbm5lZENhdGVnb3JpZXNbY2F0ZWdvcnldLnNob3cgPSB2aXNpYmlsaXR5XHJcbiAgICBcclxuICAgIHNldFJhdyhwaW5uZWRDYXRlZ29yaWVzKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0VmlzaWJpbGl0eSA9IChjYXRlZ29yeTogc3RyaW5nKSA9PiB7XHJcbiAgICBsZXQgcGlubmVkQ2F0ZWdvcmllcyA9IGdldEFsbCgpXHJcblxyXG4gICAgaWYgKHBpbm5lZENhdGVnb3JpZXNbY2F0ZWdvcnldID09IG51bGwpIHRocm93IG5ldyBFcnJvcihgQ2F0ZWdvcnkgJHtjYXRlZ29yeX0gZG9lcyBub3QgZXhpc3RgKVxyXG4gICAgcmV0dXJuIHBpbm5lZENhdGVnb3JpZXNbY2F0ZWdvcnldLnNob3cgPz8gdHJ1ZVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcmVuYW1lQ2F0ZWdvcnkgPSAob2xkQ2F0ZWdvcnlOYW1lOiBzdHJpbmcsIG5ld0NhdGVnb3J5TmFtZTogc3RyaW5nKSA9PiB7XHJcbiAgICBsZXQgcGlubmVkQ2F0ZWdvcmllcyA9IGdldEFsbCgpXHJcbiAgICAvLyBjb25zb2xlLmxvZyhwaW5uZWRDYXRlZ29yaWVzKVxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHBpbm5lZENhdGVnb3JpZXMsIG5ld0NhdGVnb3J5TmFtZSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihwaW5uZWRDYXRlZ29yaWVzLCBvbGRDYXRlZ29yeU5hbWUpISk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhwaW5uZWRDYXRlZ29yaWVzKVxyXG4gICAgZGVsZXRlIHBpbm5lZENhdGVnb3JpZXNbb2xkQ2F0ZWdvcnlOYW1lXTtcclxuICAgIC8vIGNvbnNvbGUubG9nKHBpbm5lZENhdGVnb3JpZXMpXHJcbiAgICBcclxuICAgIHNldFJhdyhwaW5uZWRDYXRlZ29yaWVzKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcmVtb3ZlQ2F0ZWdvcnkgPSAoY2F0ZWdvcnk6IHN0cmluZykgPT4ge1xyXG4gICAgbGV0IHBpbm5lZENhdGVnb3JpZXMgPSBnZXRBbGwoKVxyXG4gICAgaWYgKHBpbm5lZENhdGVnb3JpZXNbY2F0ZWdvcnldID09IG51bGwpIHRocm93IG5ldyBFcnJvcihgQ2F0ZWdvcnkgJHtjYXRlZ29yeX0gZG9lcyBub3QgZXhpc3RgKVxyXG4gICAgZGVsZXRlIHBpbm5lZENhdGVnb3JpZXNbY2F0ZWdvcnldXHJcbiAgICBcclxuICAgIHNldFJhdyhwaW5uZWRDYXRlZ29yaWVzKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0VXNlcnMgPSAoY2F0ZWdvcnk6IHN0cmluZykgPT4ge1xyXG4gICAgY29uc3QgcGlubmVkQ2F0ZWdvcmllcyA9IGdldEFsbCgpXHJcbiAgICBpZiAocGlubmVkQ2F0ZWdvcmllc1tjYXRlZ29yeV0gPT0gbnVsbCkgdGhyb3cgbmV3IEVycm9yKGBDYXRlZ29yeSAke2NhdGVnb3J5fSBkb2VzIG5vdCBleGlzdGApXHJcblxyXG4gICAgcmV0dXJuIHBpbm5lZENhdGVnb3JpZXNbY2F0ZWdvcnldLnVzZXJzXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBzZXRVc2VyTGlzdCA9IChjYXRlZ29yeTogc3RyaW5nLCB1c2VyTGlzdDogc3RyaW5nW10pID0+IHtcclxuICAgIGxldCBwaW5uZWRDYXRlZ29yaWVzID0gZ2V0QWxsKClcclxuICAgIFxyXG4gICAgcGlubmVkQ2F0ZWdvcmllc1tjYXRlZ29yeV0udXNlcnMgPSB1c2VyTGlzdFxyXG4gICAgXHJcbiAgICBzZXRSYXcocGlubmVkQ2F0ZWdvcmllcylcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGFkZFVzZXIgPSAoY2F0ZWdvcnk6IHN0cmluZywgdXNlcklEOiBpbXBvcnQoXCJpdHRhaVwiKS5Vc2VySUQpID0+IHtcclxuICAgIGlmICh0eXBlb2YgdXNlcklEICE9PSBcInN0cmluZ1wiKSB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgVXNlciBJRGApXHJcbiAgICBcclxuICAgIGxldCBwaW5uZWRDYXRlZ29yaWVzID0gZ2V0QWxsKClcclxuICAgIGlmIChwaW5uZWRDYXRlZ29yaWVzW2NhdGVnb3J5XSA9PSBudWxsKSB0aHJvdyBuZXcgRXJyb3IoYENhdGVnb3J5ICR7Y2F0ZWdvcnl9IGRvZXMgbm90IGV4aXN0YClcclxuXHJcbiAgICBsZXQgdXNlckxpc3QgPSBwaW5uZWRDYXRlZ29yaWVzW2NhdGVnb3J5XS51c2Vyc1xyXG4gICAgdXNlckxpc3QucHVzaCh1c2VySUQpXHJcbiAgICBcclxuICAgIHNldFVzZXJMaXN0KGNhdGVnb3J5LCB1c2VyTGlzdClcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHJlbW92ZVVzZXIgPSAoY2F0ZWdvcnk6IHN0cmluZywgdXNlcklEOiBpbXBvcnQoXCJpdHRhaVwiKS5Vc2VySUQpID0+IHtcclxuICAgIGlmICh0eXBlb2YgdXNlcklEICE9PSBcInN0cmluZ1wiKSB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgVXNlciBJRGApXHJcbiAgICBcclxuICAgIGxldCBwaW5uZWRDYXRlZ29yaWVzID0gZ2V0QWxsKClcclxuICAgIGlmIChwaW5uZWRDYXRlZ29yaWVzW2NhdGVnb3J5XSA9PSBudWxsKSB0aHJvdyBuZXcgRXJyb3IoYENhdGVnb3J5ICR7Y2F0ZWdvcnl9IGRvZXMgbm90IGV4aXN0YClcclxuXHJcbiAgICBsZXQgdXNlckxpc3QgPSBwaW5uZWRDYXRlZ29yaWVzW2NhdGVnb3J5XS51c2Vyc1xyXG4gICAgdXNlckxpc3QgPSB1c2VyTGlzdC5maWx0ZXIoKHVzZXIpID0+IHVzZXIgIT09IHVzZXJJRClcclxuICAgIFxyXG4gICAgc2V0VXNlckxpc3QoY2F0ZWdvcnksIHVzZXJMaXN0KVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgaXNVc2VyQWRkZWQgPSAodXNlcklEOiBpbXBvcnQoXCJpdHRhaVwiKS5Vc2VySUQpID0+IHtcclxuICAgIHJldHVybiBPYmplY3QudmFsdWVzKGdldEFsbCgpKS5zb21lKCh7IHVzZXJzIH0pID0+IHVzZXJzLmluY2x1ZGVzKHVzZXJJRCkpXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRVc2VyQ2F0ZWdvcnkgPSAodXNlcklEOiBpbXBvcnQoXCJpdHRhaVwiKS5Vc2VySUQpID0+IHtcclxuICAgIGNvbnN0IHBpbm5lZENhdGVnb3JpZXMgPSBnZXRBbGwoKVxyXG4gICAgZm9yIChjb25zdCBjYXRlZ29yeU5hbWUgaW4gcGlubmVkQ2F0ZWdvcmllcykge1xyXG4gICAgICAgIGNvbnN0IGNhdGVnb3J5ID0gcGlubmVkQ2F0ZWdvcmllc1tjYXRlZ29yeU5hbWVdXHJcbiAgICAgICAgaWYgKGNhdGVnb3J5LnVzZXJzLnNvbWUoKHVzZXIpID0+IHVzZXIgPT09IHVzZXJJRCkpIHJldHVybiBjYXRlZ29yeU5hbWVcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHVzZUxpc3RVcGRhdGUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbLCBmb3JjZVVwZGF0ZV0gPSBSZWFjdC51c2VSZWR1Y2VyKG4gPT4gIW4sIHRydWUpO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbGlzdGVuZXIgPSAoKSA9PiB2b2lkIGZvcmNlVXBkYXRlKCk7XHJcblxyXG4gICAgICAgIERpc3BhdGNoZXIuc3Vic2NyaWJlKFwiUElORE1TX0NIQU5HRV9MSVNUXCIsIGxpc3RlbmVyKTtcclxuXHJcbiAgICAgICAgcmV0dXJuICgpID0+IERpc3BhdGNoZXIudW5zdWJzY3JpYmUoXCJQSU5ETVNfQ0hBTkdFX0xJU1RcIiwgbGlzdGVuZXIpO1xyXG4gICAgfSwgW10pO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBnZXRBbGwsXHJcbiAgICBnZXRDYXRlZ29yaWVzLFxyXG4gICAgZ2V0Q2F0ZWdvcnksXHJcbiAgICBzZXRSYXcsXHJcbiAgICBhZGRDYXRlZ29yeSxcclxuICAgIHJlbmFtZUNhdGVnb3J5LFxyXG4gICAgcmVtb3ZlQ2F0ZWdvcnksXHJcbiAgICBnZXRDb2xvcixcclxuICAgIHNldENvbG9yLFxyXG4gICAgZ2V0VmlzaWJpbGl0eSxcclxuICAgIHNldFZpc2liaWxpdHksXHJcbiAgICBzZXRVc2VyTGlzdCxcclxuICAgIGFkZFVzZXIsXHJcbiAgICBnZXRVc2VycyxcclxuICAgIHJlbW92ZVVzZXIsXHJcbiAgICBpc1VzZXJBZGRlZCxcclxuICAgIGdldFVzZXJDYXRlZ29yeSxcclxuICAgIHVzZUxpc3RVcGRhdGVcclxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChhcnI6IGFueVtdIHwgT2JqZWN0LCBmcm9tOiBudW1iZXIsIHRvOiBudW1iZXIpIHtcclxuICAgIGlmKEFycmF5LmlzQXJyYXkoYXJyKSkge1xyXG4gICAgICAgIHJldHVybiBtb3ZlQXJyYXkoYXJyLCBmcm9tLCB0bylcclxuICAgIH0gZWxzZSBpZiAodHlwZW9mIGFyciA9PT0gXCJvYmplY3RcIikge1xyXG4gICAgICAgIHJldHVybiBtb3ZlT2JqZWN0S2V5KGFyciwgZnJvbSwgdG8pXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtb3ZlT2JqZWN0S2V5KG9iamVjdDogT2JqZWN0LCBmcm9tOiBudW1iZXIgfCBzdHJpbmcsIHRvOiBudW1iZXIpOiBPYmplY3Qge1xyXG4gICAgaWYodHlwZW9mIGZyb20gPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICBmcm9tID0gT2JqZWN0LmtleXMob2JqZWN0KS5maW5kSW5kZXgoa2V5ID0+IGtleSA9PT0gZnJvbSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjaGFuZ2VkT3JkZXIgPSBtb3ZlQXJyYXkoT2JqZWN0LmVudHJpZXMob2JqZWN0KSwgZnJvbSwgdG8pXHJcbiAgICBjb25zdCBuZXdPYmo6IE9iamVjdCA9IGNoYW5nZWRPcmRlci5yZWR1Y2UoKGFjYywgW2tleSwgdmFsdWVdKSA9PiB7XHJcbiAgICAgICAgYWNjW2tleV0gPSB2YWx1ZVxyXG4gICAgICAgIHJldHVybiBhY2NcclxuICAgIH0sIHt9KVxyXG4gICAgcmV0dXJuIG5ld09ialxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbW92ZUFycmF5KGFycjogYW55W10sIGZyb206IG51bWJlciwgdG86IG51bWJlcikge1xyXG4gICAgbGV0IHNhZmVBcnIgPSBhcnJcclxuICAgIHNhZmVBcnIuc3BsaWNlKHRvLCAwLCBzYWZlQXJyLnNwbGljZShmcm9tLCAxKVswXSlcclxuICAgIHJldHVybiBzYWZlQXJyXHJcbn0iLCJpbXBvcnQgeyBzZWFyY2hDbGFzc05hbWVNb2R1bGVzIH0gZnJvbSBcIml0dGFpL3V0aWxpdGllc1wiXHJcbmltcG9ydCB7IGZpbmRCeVByb3BzIH0gZnJvbSBcIml0dGFpL3dlYnBhY2tcIlxyXG5cclxuZXhwb3J0IGNvbnN0IFByaXZhdGVDaGFubmVsc0hlYWRlckNvbnRhaW5lciA9IGZpbmRCeVByb3BzKFwicHJpdmF0ZUNoYW5uZWxSZWNpcGllbnRzSW52aXRlQnV0dG9uSWNvblwiKSBhcyB7XHJcbiAgICBlbXB0eTogc3RyaW5nXHJcbiAgICBoZWFkZXJUZXh0OiBzdHJpbmdcclxuICAgIHByaXZhdGVDaGFubmVsUmVjaXBpZW50c0ludml0ZUJ1dHRvbkljb246IHN0cmluZ1xyXG4gICAgcHJpdmF0ZUNoYW5uZWxzSGVhZGVyQ29udGFpbmVyOiBzdHJpbmdcclxuICAgIHNjcm9sbGVyOiBzdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IERNQnV0dG9ucyA9IGZpbmRCeVByb3BzKFwiY2hhbm5lbFwiLCBcImxpbmtCdXR0b25JY29uXCIpIGFzIHtcclxuICAgIGNoYW5uZWw6IHN0cmluZ1xyXG4gICAgZnVsbFdpZHRoOiBzdHJpbmdcclxuICAgIGludGVyYWN0aXZlOiBzdHJpbmdcclxuICAgIGludGVyYWN0aXZlU2VsZWN0ZWQ6IHN0cmluZ1xyXG4gICAgYXZhdGFyV2l0aFRleHQ6IHN0cmluZ1xyXG4gICAgbGluazogc3RyaW5nXHJcbiAgICBsaW5rQnV0dG9uOiBzdHJpbmdcclxuICAgIGxpbmtCdXR0b25JY29uOiBzdHJpbmdcclxuICAgIGNsb3NlQnV0dG9uOiBzdHJpbmdcclxuICAgIGNsb3NlSWNvbjogc3RyaW5nXHJcbiAgICBzdWJ0ZXh0OiBzdHJpbmdcclxuICAgIGFjdGl2aXR5OiBzdHJpbmdcclxuICAgIGFjdGl2aXR5VGV4dDogc3RyaW5nXHJcbiAgICBhY3Rpdml0eUVtb2ppOiBzdHJpbmdcclxuICAgIGRlY29yYXRvcjogc3RyaW5nXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBDYXRlZ29yeSA9IGZpbmRCeVByb3BzKFwiYWRkQnV0dG9uSWNvblwiLCBcImNvbnRhaW5lckRyYWdBZnRlclwiKSBhcyB7XHJcbiAgICBzcGFjZUJlZm9yZUNhdGVnb3J5OiBzdHJpbmdcclxuICAgIGNvbnRhaW5lckRlZmF1bHQ6IHN0cmluZ1xyXG4gICAgY29udGFpbmVyRHJhZ0FmdGVyOiBzdHJpbmdcclxuICAgIGNvbnRhaW5lckRyYWdCZWZvcmU6IHN0cmluZ1xyXG4gICAgY29udGFpbmVyVXNlck92ZXI6IHN0cmluZ1xyXG4gICAgZGlzYWJsZUNsaWNrOiBzdHJpbmdcclxuICAgIGFkZEJ1dHRvbjogc3RyaW5nXHJcbiAgICBmb3JjZVZpc2libGU6IHN0cmluZ1xyXG4gICAgaWNvblZpc2liaWxpdHk6IHN0cmluZ1xyXG4gICAgYWRkQnV0dG9uSWNvbjogc3RyaW5nXHJcbiAgICB3cmFwcGVyOiBzdHJpbmdcclxuICAgIGNsaWNrYWJsZTogc3RyaW5nXHJcbiAgICBjaGlsZHJlbjogc3RyaW5nXHJcbiAgICBtYWluQ29udGVudDogc3RyaW5nXHJcbiAgICBpY29uOiBzdHJpbmdcclxuICAgIGNvbGxhcHNlZDogc3RyaW5nXHJcbiAgICBtdXRlZDogc3RyaW5nXHJcbiAgICBuYW1lOiBzdHJpbmdcclxuICAgIGRpc21pc3NXcmFwcGVyOiBzdHJpbmdcclxuICAgIGRpc21pc3NCdXR0b246IHN0cmluZ1xyXG4gICAgZGlzbWlzczogc3RyaW5nXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBJbnRlcmFjdGl2ZXMgPSBmaW5kQnlQcm9wcyhcImludGVyYWN0aXZlXCIsIFwibXV0ZWRcIikgYXMge1xyXG4gICAgcmVzcG9uc2l2ZVdpZHRoTW9iaWxlRmlyc3Q6IHN0cmluZ1xyXG4gICAgaW50ZXJhY3RpdmU6IHN0cmluZ1xyXG4gICAgbXV0ZWQ6IHN0cmluZ1xyXG4gICAgc2VsZWN0ZWQ6IHN0cmluZ1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgRGVsZXRlQWNjb3VudEJ1dHRvblJvdyA9IGZpbmRCeVByb3BzKFwiYnV0dG9uQ29udGFpbmVyXCIsIFwiZGVzY3JpcHRpb25cIiwgXCJkaXNhYmxlQnV0dG9uXCIpIGFzIHtcclxuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmdcclxuICAgIGJ1dHRvbkNvbnRhaW5lcjogc3RyaW5nXHJcbiAgICBkaXNhYmxlQnV0dG9uOiBzdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IE5hbWVzID0gZmluZEJ5UHJvcHMoXCJuYW1lQW5kRGVjb3JhdG9yc1wiKSBhcyB7XHJcbiAgICBtdXRlZDogc3RyaW5nXHJcbiAgICBhdmF0YXI6IHN0cmluZ1xyXG4gICAgaGlnaGxpZ2h0ZWQ6IHN0cmluZ1xyXG4gICAgbGF5b3V0OiBzdHJpbmdcclxuICAgIGNvbnRlbnQ6IHN0cmluZ1xyXG4gICAgbmFtZTogc3RyaW5nXHJcbiAgICB3cmFwcGVkTGF5b3V0OiBzdHJpbmdcclxuICAgIHdyYXBwZWROYW1lOiBzdHJpbmdcclxuICAgIG5hbWVBbmREZWNvcmF0b3JzOiBzdHJpbmdcclxuICAgIHN1YlRleHQ6IHN0cmluZ1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgU2Nyb2xsaW5nID0gZmluZEJ5UHJvcHMoXCJzY3JvbGxpbmdcIiwgXCJzY3JvbGxlckJhc2VcIikgYXMge1xyXG4gICAgc2Nyb2xsZXJCYXNlOiBzdHJpbmdcclxuICAgIHRoaW46IHN0cmluZ1xyXG4gICAgZmFkZTogc3RyaW5nXHJcbiAgICBzY3JvbGxpbmc6IHN0cmluZ1xyXG4gICAgYXV0bzogc3RyaW5nXHJcbiAgICBub25lOiBzdHJpbmdcclxuICAgIGNvbnRlbnQ6IHN0cmluZ1xyXG4gICAgZGlzYWJsZVNjcm9sbEFuY2hvcjogc3RyaW5nXHJcbiAgICBtYW5hZ2VkUmVhY3RpdmVTY3JvbGxlcjogc3RyaW5nXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBTZXJ2ZXJNZW1iZXJzID0gZmluZEJ5UHJvcHMoXCJ1aS1zY3JvbGxlci13cmFwXCIpIGFzIHtcclxuICAgIHNlYXJjaEJhcjogc3RyaW5nXHJcbiAgICBtZW1iZXJzSGVhZGVyOiBzdHJpbmdcclxuICAgIFwidWktc2VsZWN0XCI6IHN0cmluZ1xyXG4gICAgc2VhcmNoOiBzdHJpbmdcclxuICAgIGRpdmlkZXI6IHN0cmluZ1xyXG4gICAgcHJ1bmVMaW5rOiBzdHJpbmdcclxuICAgIG1lbWJlcnNDb3VudDogc3RyaW5nXHJcbiAgICBtZW1iZXJzRmlsdGVyUG9wb3V0OiBzdHJpbmdcclxuICAgIFwidWktc2Nyb2xsZXItd3JhcFwiOiBzdHJpbmdcclxuICAgIG1lbWJlcjogc3RyaW5nXHJcbiAgICBhY3RpdmU6IHN0cmluZ1xyXG4gICAgb3ZlcmZsb3dJY29uOiBzdHJpbmdcclxuICAgIG5hbWVUYWc6IHN0cmluZ1xyXG4gICAgbmFtZTogc3RyaW5nXHJcbiAgICB0YWc6IHN0cmluZ1xyXG4gICAgdXNlcm5hbWU6IHN0cmluZ1xyXG4gICAgb3duZXJIZWxwSWNvbjogc3RyaW5nXHJcbiAgICByb2xlV3JhcHBlcjogc3RyaW5nXHJcbiAgICBvdmVyZmxvd0J1dHRvbjogc3RyaW5nXHJcbiAgICBhdmF0YXI6IHN0cmluZ1xyXG4gICAgb3ZlcmZsb3dJY29uRmc6IHN0cmluZ1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQWNjb3VudENvbnRyb2xCdXR0b25zID0gZmluZEJ5UHJvcHMoXCJidXR0b25cIiwgXCJkaXNhYmxlZFwiLCBcImVuYWJsZWRcIikgYXMge1xyXG4gICAgYnV0dG9uOiBzdHJpbmdcclxuICAgIGVuYWJsZWQ6IHN0cmluZ1xyXG4gICAgZGlzYWJsZWQ6IHN0cmluZ1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQ29sb3JQaWNrZXIgPSBmaW5kQnlQcm9wcyhcImN1c3RvbVwiLCBcImN1c3RvbUNvbG9yUGlja2VySW5wdXRcIiwgXCJjb2xvclBpY2tlclJvd1wiKSBhcyB7XHJcbiAgICBjb250YWluZXI6IHN0cmluZ1xyXG4gICAgY3VzdG9tQ29udGFpbmVyOiBzdHJpbmdcclxuICAgIGRlZmF1bHRDb250YWluZXI6IHN0cmluZ1xyXG4gICAgY3VzdG9tOiBzdHJpbmdcclxuICAgIHByZXNldDogc3RyaW5nXHJcbiAgICBjb2xvclBpY2tlckN1c3RvbTogc3RyaW5nXHJcbiAgICBjdXN0b21Db2xvclBpY2tlcklucHV0OiBzdHJpbmdcclxuICAgIGlucHV0OiBzdHJpbmdcclxuICAgIGNvbG9yUGlja2VyUm93OiBzdHJpbmdcclxuICAgIGNvbG9yUGlja2VyU3dhdGNoOiBzdHJpbmdcclxuICAgIGRlZmF1bHQ6IHN0cmluZ1xyXG4gICAgZGlzYWJsZWQ6IHN0cmluZ1xyXG4gICAgY29sb3JQaWNrZXJEcm9wcGVyOiBzdHJpbmdcclxuICAgIG5vQ29sb3I6IHN0cmluZ1xyXG4gICAgY29sb3JQaWNrZXJEcm9wcGVyRmc6IHN0cmluZ1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgTWFyZ2lucyA9IGZpbmRCeVByb3BzKFwibWFyZ2luTGFyZ2VcIiwgXCJtYXJnaW5Ub3AyMFwiKSBhcyB7XHJcbiAgICBtYXJnaW5YU21hbGw6IHN0cmluZ1xyXG4gICAgbWFyZ2luU21hbGw6IHN0cmluZ1xyXG4gICAgbWFyZ2luTWVkaXVtOiBzdHJpbmdcclxuICAgIG1hcmdpbkxhcmdlOiBzdHJpbmdcclxuICAgIG1hcmdpblhMYXJnZTogc3RyaW5nXHJcbiAgICBtYXJnaW5SZXNldDogc3RyaW5nXHJcbiAgICBtYXJnaW5Ub3A0OiBzdHJpbmdcclxuICAgIG1hcmdpbkJvdHRvbTQ6IHN0cmluZ1xyXG4gICAgbWFyZ2luVG9wODogc3RyaW5nXHJcbiAgICBtYXJnaW5Cb3R0b204OiBzdHJpbmdcclxuICAgIG1hcmdpblRvcDIwOiBzdHJpbmdcclxuICAgIG1hcmdpbkJvdHRvbTIwOiBzdHJpbmdcclxuICAgIG1hcmdpblRvcDQwOiBzdHJpbmdcclxuICAgIG1hcmdpbkJvdHRvbTQwOiBzdHJpbmdcclxuICAgIG1hcmdpblRvcDYwOiBzdHJpbmdcclxuICAgIG1hcmdpbkJvdHRvbTYwOiBzdHJpbmdcclxuICAgIG1hcmdpbkNlbnRlckhvcno6IHN0cmluZ1xyXG4gICAgbWFyZ2luTGVmdDg6IHN0cmluZ1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBQcml2YXRlQ2hhbm5lbHNIZWFkZXJDb250YWluZXIsXHJcbiAgICBETUJ1dHRvbnMsXHJcbiAgICBTZXJ2ZXJNZW1iZXJzLFxyXG4gICAgQWNjb3VudENvbnRyb2xCdXR0b25zLFxyXG4gICAgQ29sb3JQaWNrZXIsXHJcbiAgICBNYXJnaW5zLFxyXG4gICAgU2Nyb2xsaW5nLFxyXG4gICAgRGVsZXRlQWNjb3VudEJ1dHRvblJvdyxcclxuICAgIE5hbWVzLFxyXG4gICAgSW50ZXJhY3RpdmVzLFxyXG4gICAgQ2F0ZWdvcnlcclxufVxyXG5cclxuLyogY29weSB0eXBlc1xyXG5jb25zb2xlLmxvZyhPYmplY3Qua2V5cyhzZWFyY2hDbGFzc05hbWVNb2R1bGVzKFwibWVtYmVyLTJjajJQSVwiKSkuam9pbihcIjogc3RyaW5nXFxuXCIpICsgXCI6IHN0cmluZ1wiKVxyXG4qLyIsImV4cG9ydCBkZWZhdWx0ICguLi5jbGFzc2VzOiAoc3RyaW5nIHwgYW55KVtdKSA9PiBjbGFzc2VzLmZpbHRlcihzID0+IHR5cGVvZiBzID09PSAnc3RyaW5nJykuam9pbihcIiBcIikiLCJpbXBvcnQgeyBVc2VySUQsIFVzZXJPYmplY3QgfSBmcm9tIFwiaXR0YWlcIlxyXG5cclxuaW1wb3J0ICogYXMgd2VicGFjayBmcm9tIFwiaXR0YWkvd2VicGFja1wiXHJcbmNvbnN0IHsgUmVhY3QsIFJlYWN0OiB7XHJcbiAgICB1c2VTdGF0ZSxcclxuICAgIHVzZUVmZmVjdCxcclxufSB9ID0gd2VicGFja1xyXG5pbXBvcnQgeyBVc2VycyB9IGZyb20gXCJpdHRhaS9zdG9yZXNcIlxyXG5pbXBvcnQgeyBBdmF0YXIsIERpc2NvcmRJY29uLCBUb29sdGlwQ29udGFpbmVyIH0gZnJvbSBcIml0dGFpL2NvbXBvbmVudHNcIlxyXG5pbXBvcnQgeyBCdXR0b24sIFRleHQsIEZsZXggfSBmcm9tIFwiaXR0YWkvY29tcG9uZW50c1wiXHJcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuLi8uLi91dGlscy9jbGFzc2VzXCJcclxuLy9AdHMtaWdub3JlXHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vVXNlci5zY3NzXCJcclxuaW1wb3J0IGpvaW5DbGFzc2VzIGZyb20gXCIuLi8uLi91dGlscy9qb2luQ2xhc3Nlc1wiXHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gICAgaWQ6IFVzZXJJRCxcclxuICAgIG9uTW92ZTogKHVwZG46IFwidXBcIiB8IFwiZG93blwiKSA9PiB2b2lkLFxyXG4gICAgb25SZW1vdmU6ICgpID0+IHZvaWQsXHJcbiAgICBkaXNhYmxlVXA/OiBib29sZWFuLFxyXG4gICAgZGlzYWJsZURvd24/OiBib29sZWFuLFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbih7IGlkLCBvbk1vdmUsIG9uUmVtb3ZlLCBkaXNhYmxlVXAgPSBmYWxzZSwgZGlzYWJsZURvd24gPSBmYWxzZSB9OiBQcm9wcykge1xyXG4gICAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGU8VXNlck9iamVjdD4oKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdXNlciA9IFVzZXJzLmdldFVzZXIoaWQpXHJcbiAgICAgICAgaWYgKCF1c2VyKSB0aHJvdyBuZXcgRXJyb3IoXCJVc2VyIG5vdCBmb3VuZFwiKVxyXG4gICAgICAgIHNldFVzZXIoVXNlcnMuZ2V0VXNlcihpZCkpXHJcbiAgICB9KVxyXG4gICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxGbGV4XHJcbiAgICAgICAgICAgIGFsaWduPXtGbGV4LkFsaWduLkNFTlRFUn1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtqb2luQ2xhc3NlcyhjbGFzc2VzLlNlcnZlck1lbWJlcnMubWVtYmVyLCBzdHlsZXMud3JhcHBlcil9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5TZXJ2ZXJNZW1iZXJzLmF2YXRhcn0+XHJcbiAgICAgICAgICAgICAgICA8QXZhdGFyXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXsodXNlcj8uZ2V0QXZhdGFyVVJMKGZhbHNlLCB0cnVlKSBhcyBzdHJpbmcpPy5yZXBsYWNlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIj9zaXplPTE2XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXCJcclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU9e0F2YXRhci5TaXplcy5TSVpFXzQwfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLlNlcnZlck1lbWJlcnMubmFtZVRhZ30gc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IFwiYXV0b1wiIH19PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuU2VydmVyTWVtYmVycy5uYW1lfT5cclxuICAgICAgICAgICAgICAgICAgICB7dXNlcj8udXNlcm5hbWV9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxUZXh0IGNvbG9yPXtUZXh0LkNvbG9ycy5NVVRFRH0gc2l6ZT17VGV4dC5TaXplcy5TSVpFXzE0fT5cclxuICAgICAgICAgICAgICAgICAgICBAe3VzZXI/LnVzZXJuYW1lfSN7dXNlcj8uZGlzY3JpbWluYXRvcn1cclxuICAgICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxGbGV4XHJcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb249e0ZsZXguRGlyZWN0aW9uLlZFUlRJQ0FMfVxyXG4gICAgICAgICAgICAgICAgZ3Jvdz17MH1cclxuICAgICAgICAgICAgICAgIHNocmluaz17MH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU9e0J1dHRvbi5TaXplcy5JQ09OfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uTW92ZShcInVwXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlVXB9XHJcbiAgICAgICAgICAgICAgICAgICAgbG9vaz17QnV0dG9uLkxvb2tzLkJMQU5LfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17W1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc2VzLkFjY291bnRDb250cm9sQnV0dG9ucy5idXR0b24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVVcFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBjbGFzc2VzLkFjY291bnRDb250cm9sQnV0dG9ucy5kaXNhYmxlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBjbGFzc2VzLkFjY291bnRDb250cm9sQnV0dG9ucy5lbmFibGVkLFxyXG4gICAgICAgICAgICAgICAgICAgIF0uam9pbihcIiBcIil9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPERpc2NvcmRJY29uIG5hbWU9XCJBcnJvd0Ryb3BVcFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICBzaXplPXtCdXR0b24uU2l6ZXMuSUNPTn1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbk1vdmUoXCJkb3duXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlRG93bn1cclxuICAgICAgICAgICAgICAgICAgICBsb29rPXtCdXR0b24uTG9va3MuQkxBTkt9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzZXMuQWNjb3VudENvbnRyb2xCdXR0b25zLmJ1dHRvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZURvd25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gY2xhc3Nlcy5BY2NvdW50Q29udHJvbEJ1dHRvbnMuZGlzYWJsZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogY2xhc3Nlcy5BY2NvdW50Q29udHJvbEJ1dHRvbnMuZW5hYmxlZCxcclxuICAgICAgICAgICAgICAgICAgICBdLmpvaW4oXCIgXCIpfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxEaXNjb3JkSWNvbiBuYW1lPVwiQXJyb3dEcm9wRG93blwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgICAgICA8VG9vbHRpcENvbnRhaW5lciB0ZXh0PVwiRGVsZXRlXCI+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT17QnV0dG9uLlNpemVzLklDT059XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9e0J1dHRvbi5Db2xvcnMuUkVEfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uUmVtb3ZlfVxyXG4gICAgICAgICAgICAgICAgICAgIGxvb2s9e0J1dHRvbi5Mb29rcy5MSU5LfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxEaXNjb3JkSWNvbiBuYW1lPVwiVHJhc2hcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvVG9vbHRpcENvbnRhaW5lcj5cclxuICAgICAgICA8L0ZsZXg+XHJcbiAgICApXHJcbn0iLCJjb25zdCBDYXRlZ29yeVZpZXcgPSB7XHJcbiAgICBzZXR0aW5nc1ZhbHVlOiBcImNhdGVnb3J5XCJcclxufVxyXG5jb25zdCBNaW5pbWFsaXN0VmlldyA9IHtcclxuICAgIHNldHRpbmdzVmFsdWU6IFwibWluaW1hbGlzdFwiLFxyXG4gICAgdXNlckljb25zOiB0cnVlXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIERlZmF1bHRTZXR0aW5nczoge1xyXG4gICAgICAgIERJU1BMQVlfTU9ERTogQ2F0ZWdvcnlWaWV3LnNldHRpbmdzVmFsdWUsXHJcbiAgICAgICAgTWluaW1hbGlzdFZpZXcsXHJcbiAgICAgICAgQ2F0ZWdvcnlWaWV3LFxyXG4gICAgICAgIFBJTl9JQ09OOiB0cnVlLFxyXG4gICAgICAgIFNUUkVBTUVSX01PREU6IHRydWVcclxuICAgIH1cclxufSIsImV4cG9ydCB7IGRlZmF1bHQgYXMgU2V0dGluZ3MgfSBmcm9tIFwiLi9zZXR0aW5nc1wiXHJcblxyXG5leHBvcnQgY29uc3QgRElTUEFUQ0hFUl9QSU5ETVNfQ0hBTkdFX0xJU1QgPSBcIlBJTkRNU19DSEFOR0VfTElTVFwiIiwiaW1wb3J0IHsgUmVhY3QgfSBmcm9tIFwiaXR0YWkvd2VicGFja1wiXHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gICAgcmVuZGVyRXJyb3I/OiBzdHJpbmcgfCBSZWFjdC5SZWFjdEVsZW1lbnRcclxuICAgIGNoaWxkcmVuOiBhbnlcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXJyb3JCb3VuZGFyeSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcz4ge1xyXG4gICAgc3RhdGUgPSB7IGhhc0Vycm9yOiBmYWxzZSB9O1xyXG5cclxuICAgIGNvbXBvbmVudERpZENhdGNoKCkgeyB9XHJcblxyXG4gICAgc3RhdGljIGdldERlcml2ZWRTdGF0ZUZyb21FcnJvcigpIHsgcmV0dXJuIHsgaGFzRXJyb3I6IHRydWUgfTsgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5oYXNFcnJvcikgcmV0dXJuIChCb29sZWFuKHRoaXMucHJvcHMucmVuZGVyRXJyb3IpID8gdGhpcy5wcm9wcy5yZW5kZXJFcnJvciA6IG51bGwpO1xyXG4gICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgIHJldHVybiB0aGlzLnByb3BzLmNoaWxkcmVuO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0ICogYXMgd2VicGFjayBmcm9tIFwiaXR0YWkvd2VicGFja1wiXHJcbmltcG9ydCB7IENvbG9ySGV4LCBDb2xvclV0aWxzLCBDb25zdGFudHMsIFJlYWN0IH0gZnJvbSBcIml0dGFpL3dlYnBhY2tcIlxyXG5pbXBvcnQgeyBCdXR0b24sIE1vZGFsLCBUZXh0SW5wdXQsIEZvcm1zLCBDb2xvclBpY2tlciwgU3dpdGNoSXRlbSwgVGV4dCwgQW5jaG9yIH0gZnJvbSBcIml0dGFpL2NvbXBvbmVudHNcIjtcclxuaW1wb3J0IHBpbm5lZERNUyBmcm9tIFwiLi4vLi4vLi4vaGFuZGxlcnMvcGlubmVkRE1TXCI7XHJcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuLi8uLi8uLi91dGlscy9jbGFzc2VzXCJcclxuaW1wb3J0ICogYXMgY29uc3RhbnRzIGZyb20gXCIuLi8uLi8uLi9jb25zdGFudHNcIlxyXG5pbXBvcnQgKiBhcyBzZXR0aW5ncyBmcm9tIFwiaXR0YWkvc2V0dGluZ3NcIlxyXG4vL0B0cy1pZ25vcmVcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9DYXRlZ29yeVNldHRpbmdzTW9kYWwuc2Nzc1wiXHJcbmltcG9ydCBFcnJvckJvdW5kYXJ5IGZyb20gXCIuLi8uLi8uLi91dGlscy9FcnJvckJvdW5kYXJ5XCI7XHJcbmNvbnN0IHsgQ3VzdG9tQ29sb3JCdXR0b24gfSA9IHdlYnBhY2suZmluZEJ5UHJvcHMoXCJEZWZhdWx0Q29sb3JCdXR0b25cIilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChtb2RhbFByb3BzOiB7IHRyYW5zaXRpb25TdGF0ZTogMSB8IDIgfCAzLCBvbkNsb3NlOiAoKSA9PiB2b2lkLCBjYXRlZ29yeTogc3RyaW5nfSkge1xyXG4gICAgY29uc3QgW25ld05hbWUsIHNldE5ld05hbWVdID0gUmVhY3QudXNlU3RhdGUobW9kYWxQcm9wcy5jYXRlZ29yeSlcclxuICAgIGNvbnN0IFtuZXdDb2xvciwgc2V0TmV3Q29sb3JdID0gUmVhY3QudXNlU3RhdGU8Q29sb3JIZXg+KHBpbm5lZERNUy5nZXRDb2xvcihtb2RhbFByb3BzLmNhdGVnb3J5KSlcclxuXHJcbiAgICByZXR1cm4gPE1vZGFsLk1vZGFsUm9vdCBzaXplPXtNb2RhbC5Nb2RhbFNpemUuRFlOQU1JQ30gey4uLm1vZGFsUHJvcHN9PlxyXG4gICAgICAgIDxNb2RhbC5Nb2RhbEhlYWRlciBzZXBhcmF0b3I9e2ZhbHNlfT5cclxuICAgICAgICAgICAgPFRleHRJbnB1dFxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e25ld05hbWV9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17c2V0TmV3TmFtZX1cclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUmVuYW1lXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnRleHRib3h9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9Nb2RhbC5Nb2RhbEhlYWRlcj5cclxuICAgICAgICA8TW9kYWwuTW9kYWxDb250ZW50PlxyXG4gICAgICAgICAgICA8Rm9ybXMuRm9ybUl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybXMuRm9ybVRpdGxlPkNvbG9yPC9Gb3Jtcy5Gb3JtVGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5NYXJnaW5zLm1hcmdpbkJvdHRvbTIwfT5cclxuICAgICAgICAgICAgICAgICAgICA8RXJyb3JCb3VuZGFyeVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJFcnJvcj17PFRleHQgY29sb3I9e1RleHQuQ29sb3JzLkVSUk9SfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFuIGVycm9yIGhhcHBlbmVkIHdoaWxlIHRyeWluZyB0byBsb2FkIHRoZSBDb2xvclBpY2tlci4gQ2hlY2sgPEFuY2hvciBocmVmPVwiaHR0cHM6Ly9naXQuY2F0dmliZXJzLm1lL0l0dGFpL2l0dGFpL2lzc3Vlcy85XCI+aHR0cHM6Ly9naXQuY2F0dmliZXJzLm1lL0l0dGFpL2l0dGFpL2lzc3Vlcy85PC9BbmNob3I+IGZvciBtb3JlIGluZm9ybWF0aW9uIGFib3V0Ljxici8+PGJyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFzIG9mIG5vdywgeW91IGNhbiBkbyB0aGVzZSBzdGVwczpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlcy5wcm9wZXJTcGFjaW5nfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+LSBSZW1vdmUgdGhlIHBsdWdpbiBmcm9tIHRoZSBwbHVnaW5zIGZvbGRlcjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPi0gR28gdG8gYW55IHNlcnZlcidzIHNldHRpbmdzPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+LSBHbyB0byBcIlJvbGVzXCI8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT4tIENsaWNrIG9uIGFueSByb2xlPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+LSBQdXQgdGhlIHBsdWdpbiBiYWNrPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGlzIHdpbGwgbG9hZCB0aGUgQ29sb3JQaWNrZXIgY29tcG9uZW50IGFuZCB0aGVuIGZpeCB0aGlzIGVycm9yXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dD59XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29sb3JQaWNrZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9ycz17Q29uc3RhbnRzLlJPTEVfQ09MT1JTfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdENvbG9yPXtDb25zdGFudHMuREVGQVVMVF9ST0xFX0NPTE9SfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e0NvbG9yVXRpbHMuaGV4MmludChuZXdDb2xvcil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGM6IG51bWJlcikgPT4gc2V0TmV3Q29sb3IoQ29sb3JVdGlscy5pbnQyaGV4KGMpKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0Vycm9yQm91bmRhcnk+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxTd2l0Y2hJdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyFwaW5uZWRETVMuZ2V0VmlzaWJpbGl0eShtb2RhbFByb3BzLmNhdGVnb3J5KX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHBpbm5lZERNUy5zZXRWaXNpYmlsaXR5KG1vZGFsUHJvcHMuY2F0ZWdvcnksICFlKX1cclxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17c2V0dGluZ3MuZ2V0KCdkaXNwbGF5JywgY29uc3RhbnRzLlNldHRpbmdzLkRlZmF1bHRTZXR0aW5ncy5ESVNQTEFZX01PREUpID09PSBjb25zdGFudHMuU2V0dGluZ3MuRGVmYXVsdFNldHRpbmdzLk1pbmltYWxpc3RWaWV3LnNldHRpbmdzVmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgbm90ZT17c2V0dGluZ3MuZ2V0KCdkaXNwbGF5JywgY29uc3RhbnRzLlNldHRpbmdzLkRlZmF1bHRTZXR0aW5ncy5ESVNQTEFZX01PREUpICYmIFwiRGlzYWJsZWQgYmVjYXVzZSBpdCBpcyB1c2luZyB0aGUgTWluaW1hbGlzdCB2aWV3XCJ9XHJcbiAgICAgICAgICAgICAgICA+SGlkZSBjb250ZW50czwvU3dpdGNoSXRlbT5cclxuICAgICAgICAgICAgPC9Gb3Jtcy5Gb3JtSXRlbT5cclxuICAgICAgICA8L01vZGFsLk1vZGFsQ29udGVudD5cclxuICAgICAgICA8TW9kYWwuTW9kYWxGb290ZXI+XHJcbiAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKG1vZGFsUHJvcHMuY2F0ZWdvcnkgIT09IG5ld05hbWUpIHBpbm5lZERNUy5yZW5hbWVDYXRlZ29yeShtb2RhbFByb3BzLmNhdGVnb3J5LCBuZXdOYW1lKVxyXG4gICAgICAgICAgICAgICAgcGlubmVkRE1TLnNldENvbG9yKG1vZGFsUHJvcHMuY2F0ZWdvcnksIG5ld0NvbG9yKVxyXG4gICAgICAgICAgICAgICAgbW9kYWxQcm9wcy5vbkNsb3NlKClcclxuICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICBTYXZlXHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8QnV0dG9uIGxvb2s9e0J1dHRvbi5Mb29rcy5MSU5LfSBjb2xvcj17QnV0dG9uLkNvbG9ycy5XSElURX0gb25DbGljaz17bW9kYWxQcm9wcy5vbkNsb3NlfT5cclxuICAgICAgICAgICAgICAgIENhbmNlbFxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L01vZGFsLk1vZGFsRm9vdGVyPlxyXG4gICAgPC9Nb2RhbC5Nb2RhbFJvb3Q+XHJcbn0iLCJleHBvcnQgZGVmYXVsdCA8VHlwZT4oYXJyYXk6IFR5cGVbXSwgbGltaXQgPSA1MCwgZnJvbSA9IDApOiBUeXBlW10gPT4gYXJyYXkuc2xpY2UoZnJvbSwgZnJvbSArIGxpbWl0KSIsImltcG9ydCAqIGFzIHdlYnBhY2sgZnJvbSBcIml0dGFpL3dlYnBhY2tcIlxyXG5pbXBvcnQgeyBSZWFjdCB9IGZyb20gXCJpdHRhaS93ZWJwYWNrXCJcclxuaW1wb3J0IHsgTW9kYWwsIFRleHRJbnB1dCwgQXZhdGFyLCBGbGV4LCBUZXh0IH0gZnJvbSBcIml0dGFpL2NvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgQ2hhbm5lbHMsIFVzZXJzIH0gZnJvbSBcIml0dGFpL3N0b3Jlc1wiO1xyXG5pbXBvcnQgcGlubmVkRE1TIGZyb20gXCIuLi8uLi8uLi9oYW5kbGVycy9waW5uZWRETVNcIjtcclxuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4uLy4uLy4uL3V0aWxzL2NsYXNzZXNcIlxyXG4vL0B0cy1pZ25vcmVcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9BZGRVc2VyTW9kYWwuc2Nzc1wiXHJcbi8vQHRzLWlnbm9yZVxyXG5pbXBvcnQgY2F0ZWdvcnlTdHlsZXMgZnJvbSBcIi4vQ2F0ZWdvcnlTZXR0aW5nc01vZGFsLnNjc3NcIlxyXG5pbXBvcnQgbGltaXQgZnJvbSBcIi4uLy4uLy4uL3V0aWxzL2xpbWl0XCI7XHJcbmltcG9ydCB7IFVzZXJJRCwgVXNlck9iamVjdCB9IGZyb20gXCJpdHRhaVwiO1xyXG5pbXBvcnQgam9pbkNsYXNzZXMgZnJvbSBcIi4uLy4uLy4uL3V0aWxzL2pvaW5DbGFzc2VzXCI7XHJcblxyXG5jb25zdCBkbVVzZXJzOiBVc2VyT2JqZWN0W10gPSBDaGFubmVscy5nZXRTb3J0ZWRQcml2YXRlQ2hhbm5lbHMoKS5maWx0ZXIoY2hhbm5lbCA9PiBjaGFubmVsLnJlY2lwaWVudHMubGVuZ3RoID09PSAxICYmIGNoYW5uZWwucmVjaXBpZW50c1swXSAhPSBudWxsKS5tYXAoY2hhbm5lbCA9PiBVc2Vycy5nZXRVc2VyKGNoYW5uZWwucmVjaXBpZW50c1swXSkpXHJcblxyXG5jb25zdCBNQVhfVVNFUl9ESVNQTEFZID0gNjBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChwcm9wczogeyB0cmFuc2l0aW9uU3RhdGU6IDEgfCAyIHwgMywgb25DbG9zZTogKCkgPT4gdm9pZCwgb25TZWxlY3Q6IChpZDogVXNlck9iamVjdCkgPT4gdm9pZH0pIHtcclxuICAgIGNvbnN0IFt1c2Vycywgc2V0VXNlcnNdID0gUmVhY3QudXNlU3RhdGU8VXNlck9iamVjdFtdPihbXSlcclxuICAgIGNvbnN0IFtzZWFyY2gsIHNldFNlYXJjaF0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKVxyXG4gICAgXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHNlYXJjaFJlc3VsdCA9IGRtVXNlcnMuZmlsdGVyKHVzZXIgPT4gIXVzZXIuYm90ICYmIH51c2VyLnVzZXJuYW1lLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihzZWFyY2gudG9Mb3dlckNhc2UoKSkpXHJcbiAgICAgICAgY29uc3QgbGltaXRlZFJlc3VsdCA9IGxpbWl0KHNlYXJjaFJlc3VsdCwgTUFYX1VTRVJfRElTUExBWSlcclxuICAgICAgICBzZXRVc2VycyhsaW1pdGVkUmVzdWx0KVxyXG4gICAgfSwgW3NlYXJjaF0pXHJcblxyXG4gICAgcmV0dXJuIDxNb2RhbC5Nb2RhbFJvb3Qgc2l6ZT17TW9kYWwuTW9kYWxTaXplLkRZTkFNSUN9IHsuLi5wcm9wc30+XHJcbiAgICAgICAgPE1vZGFsLk1vZGFsSGVhZGVyIHNlcGFyYXRvcj17ZmFsc2V9PlxyXG4gICAgICAgICAgICA8VGV4dElucHV0XHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17c2VhcmNofVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3NldFNlYXJjaH1cclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGZvciB1c2VyXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2F0ZWdvcnlTdHlsZXMudGV4dGJveH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICA8L01vZGFsLk1vZGFsSGVhZGVyPlxyXG4gICAgICAgIDxNb2RhbC5Nb2RhbENvbnRlbnQ+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudXNlckdyaWR9PlxyXG4gICAgICAgICAgICAgICAge3VzZXJzLm1hcCh1c2VyID0+IDxVc2VyIHVzZXI9e3VzZXJ9IG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9wcy5vblNlbGVjdCh1c2VyKVxyXG4gICAgICAgICAgICAgICAgICAgIHByb3BzLm9uQ2xvc2UoKVxyXG4gICAgICAgICAgICAgICAgfX0gLz4pfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L01vZGFsLk1vZGFsQ29udGVudD5cclxuICAgIDwvTW9kYWwuTW9kYWxSb290PlxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgVXNlciA9ICh7IHVzZXIsIG9uQ2xpY2sgfTogeyB1c2VyOiBVc2VyT2JqZWN0LCBvbkNsaWNrPzogKCkgPT4gdm9pZCB9KSA9PiB7XHJcbiAgICBjb25zdCBpc0FkZGVkID0gcGlubmVkRE1TLmlzVXNlckFkZGVkKHVzZXIuaWQpXHJcbiAgICByZXR1cm4gPEZsZXggYWxpZ249e0ZsZXguQWxpZ24uQ0VOVEVSfVxyXG4gICAgICAgIGNsYXNzTmFtZT17am9pbkNsYXNzZXMoc3R5bGVzLnVzZXIsIGlzQWRkZWQgPyBzdHlsZXMuZGlzYWJsZWQgOiBcIlwiKX1cclxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7IGlmICghaXNBZGRlZCkgb25DbGljaz8uKCl9fVxyXG4gICAgPlxyXG4gICAgICAgIDxBdmF0YXJcclxuICAgICAgICAgICAgc3JjPXsodXNlci5nZXRBdmF0YXJVUkwoZmFsc2UsIGZhbHNlKSBhcyBzdHJpbmcpfVxyXG4gICAgICAgICAgICBzaXplPXtBdmF0YXIuU2l6ZXMuU0laRV8xNn1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxUZXh0IGNvbG9yPXtUZXh0LkNvbG9ycy5TVEFOREFSRH0gY2xhc3NOYW1lPXtzdHlsZXMubmFtZX0+XHJcbiAgICAgICAgICAgIHt1c2VyLnVzZXJuYW1lfVxyXG4gICAgICAgIDwvVGV4dD5cclxuICAgIDwvRmxleD5cclxufSIsImltcG9ydCAqIGFzIHdlYnBhY2sgZnJvbSBcIml0dGFpL3dlYnBhY2tcIlxyXG5pbXBvcnQgeyBSZWFjdCwgQ29sb3JVdGlscywgTW9kYWxBY3Rpb25zLCBDb25zdGFudHMgfSBmcm9tIFwiaXR0YWkvd2VicGFja1wiXHJcbmltcG9ydCB7XHJcbiAgICBCdXR0b24sXHJcbiAgICBUZXh0SW5wdXQsXHJcbiAgICBGbGV4LFxyXG4gICAgRGlzY29yZEljb24sXHJcbiAgICBDb2xvclBpY2tlcixcclxuICAgIFBvcG91dCxcclxuICAgIFRvb2x0aXBDb250YWluZXJcclxufSBmcm9tIFwiaXR0YWkvY29tcG9uZW50c1wiXHJcbmltcG9ydCBwaW5uZWRETVMsIHsgdXNlTGlzdFVwZGF0ZSB9IGZyb20gXCIuLi8uLi9oYW5kbGVycy9waW5uZWRETVNcIlxyXG5pbXBvcnQgeyBtb3ZlT2JqZWN0S2V5LCBtb3ZlQXJyYXkgfSBmcm9tIFwiLi4vLi4vdXRpbHMvbW92ZVwiXHJcbmltcG9ydCB7IENvbG9ySGV4LCBQaW5uZWRETVMgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIlxyXG5pbXBvcnQgVXNlciBmcm9tIFwiLi9Vc2VyXCJcclxuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4uLy4uL3V0aWxzL2NsYXNzZXNcIlxyXG5pbXBvcnQgQ2hhbmdlQ2F0ZWdvcnlOYW1lTW9kYWwgZnJvbSBcIi4vTW9kYWxzL0NhdGVnb3J5U2V0dGluZ3NNb2RhbFwiXHJcbi8vQHRzLWlnbm9yZVxyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL2luZGV4LnNjc3NcIlxyXG5pbXBvcnQgam9pbkNsYXNzZXMgZnJvbSBcIi4uLy4uL3V0aWxzL2pvaW5DbGFzc2VzXCJcclxuaW1wb3J0IEFkZFVzZXJNb2RhbCBmcm9tIFwiLi9Nb2RhbHMvQWRkVXNlck1vZGFsXCJcclxuaW1wb3J0IHsgVXNlclNldHRpbmdzIH0gZnJvbSBcIml0dGFpL3N0b3Jlc1wiXHJcblxyXG5jb25zdCBMaXN0U2VjdGlvbkl0ZW0gPSB3ZWJwYWNrLmZpbmRCeURpc3BsYXlOYW1lKFwiTGlzdFNlY3Rpb25JdGVtXCIpXHJcbmNvbnN0IHsgRW1wdHlTdGF0ZUltYWdlLCBkZWZhdWx0OiBFbXB0eVN0YXRlLCBFbXB0eVN0YXRlVGV4dCB9ID0gd2VicGFjay5maW5kQnlQcm9wcyhcIkVtcHR5U3RhdGVJbWFnZVwiKVxyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICAgIG9wZW5lZENhdGVnb3J5Pzogc3RyaW5nXHJcbiAgICBzaG93QWRkQ2F0ZWdvcnlCdXR0b24/OiBib29sZWFuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHsgb3BlbmVkQ2F0ZWdvcnksIHNob3dBZGRDYXRlZ29yeUJ1dHRvbiA9IHRydWUgfTogUHJvcHMpIHtcclxuICAgIHVzZUxpc3RVcGRhdGUoKVxyXG4gICAgLy8gY29uc29sZS5sb2coQ29sb3JQaWNrZXIpXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICB7c2hvd0FkZENhdGVnb3J5QnV0dG9uICYmIDxDcmVhdGVDYXRlZ29yeSAvPn1cclxuICAgICAgICAgICAge09iamVjdC5lbnRyaWVzKHBpbm5lZERNUy5nZXRBbGwoKSkubWFwKFxyXG4gICAgICAgICAgICAgICAgKFtjYXRlZ29yeSwgeyB1c2VycyB9XSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8VXNlckNhdGVnb3J5IG5hbWU9e2NhdGVnb3J5fSB1c2Vycz17dXNlcnN9IGluZGV4PXtpbmRleH0gaGlkZGVuPXtjYXRlZ29yeSAhPT0gb3BlbmVkQ2F0ZWdvcnl9IC8+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBDcmVhdGVDYXRlZ29yeSA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtuZXdDYXRlZ29yeSwgc2V0TmV3Q2F0ZWdvcnldID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nPihcIlwiKVxyXG4gICAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmc+KFwiXCIpXHJcblxyXG4gICAgcmV0dXJuIDxGbGV4IGNsYXNzTmFtZT17c3R5bGVzLmNyZWF0ZUNhdGVnb3J5fSBhbGlnbj17RmxleC5BbGlnbi5DRU5URVJ9PlxyXG4gICAgICAgIDxUZXh0SW5wdXQgY2xhc3NOYW1lPXtzdHlsZXMudGV4dGJveH1cclxuICAgICAgICAgICAgdmFsdWU9e25ld0NhdGVnb3J5fVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5hbWUgYSBuZXcgY2F0ZWdvcnlcIlxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5ld0NhdGVnb3J5KGUpfVxyXG4gICAgICAgICAgICBlcnJvcj17ZXJyb3J9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgaWYgKG5ld0NhdGVnb3J5ID09IFwiXCIpIHNldEVycm9yKFwiUGxlYXNlIGdpdmUgYSBuYW1lXCIpXHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2V0RXJyb3IoXCJcIilcclxuICAgICAgICAgICAgICAgIHBpbm5lZERNUy5hZGRDYXRlZ29yeShuZXdDYXRlZ29yeSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH19PlxyXG4gICAgICAgICAgICBBZGRcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgIDwvRmxleD5cclxufVxyXG5cclxuaW50ZXJmYWNlIENhdGVnb3J5UHJvcHMge1xyXG4gICAgbmFtZTogc3RyaW5nXHJcbiAgICB1c2Vyczogc3RyaW5nW11cclxuICAgIGluZGV4OiBudW1iZXIsXHJcbiAgICBoaWRkZW4/OiBib29sZWFuXHJcbn1cclxuZXhwb3J0IGNvbnN0IFVzZXJDYXRlZ29yeSA9ICh7IG5hbWUsIHVzZXJzLCBpbmRleCwgaGlkZGVuID0gdHJ1ZSB9OiBDYXRlZ29yeVByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBbaGlkZSwgc2V0SGlkZV0gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuPihoaWRkZW4pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGtleT17bmFtZX0gY2xhc3NOYW1lPXtzdHlsZXMuY2F0ZWdvcnl9PlxyXG4gICAgICAgICAgICA8Q2F0ZWdvcnlIZWFkZXIgey4uLnsgbmFtZSwgaW5kZXggfX0gb25IaWRlPXsoKSA9PiBzZXRIaWRlKCFoaWRlKX0gaGlkZGVuPXtoaWRlfSAvPlxyXG5cclxuICAgICAgICAgICAgeyFoaWRlICYmIDxkaXYgY2xhc3NOYW1lPXtqb2luQ2xhc3NlcyhzdHlsZXMudXNlckxpc3QsIGNsYXNzZXMuU2Nyb2xsaW5nLnNjcm9sbGVyQmFzZSwgY2xhc3Nlcy5TY3JvbGxpbmcudGhpbiwgY2xhc3Nlcy5TY3JvbGxpbmcuZmFkZSl9PlxyXG4gICAgICAgICAgICAgICAge3VzZXJzLmxlbmd0aCAhPT0gMCA/IHVzZXJzLm1hcCgoaWQsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPFVzZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2lkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbk1vdmU9eyh1cGRuKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGlubmVkRE1TLnNldFVzZXJMaXN0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW92ZUFycmF5KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VycyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4IC0gKHVwZG4gPT09IFwidXBcIiA/ICsxIDogLTEpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uUmVtb3ZlPXsoKSA9PiBwaW5uZWRETVMucmVtb3ZlVXNlcihuYW1lLCBpZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVVcD17aW5kZXggPT09IDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVEb3duPXtpbmRleCA9PT0gdXNlcnMubGVuZ3RoIC0gMX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgKSkgOiA8PlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjApID09PSAzIC8vZWFzdGVyIGVnZyB3b29vb29vXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IDxpZnJhbWUgd2lkdGg9XCI1NjBcIiBoZWlnaHQ9XCIzMTVcIiBzcmM9XCJodHRwczovL3d3dy55b3V0dWJlLW5vY29va2llLmNvbS9lbWJlZC90anMyeFIyUlpwMD9jb250cm9scz0wXCIgYWxsb3c9XCJjbGlwYm9hcmQtd3JpdGU7IGVuY3J5cHRlZC1tZWRpYVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZW1wdHl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RW1wdHlTdGF0ZSB0aGVtZT17VXNlclNldHRpbmdzLnRoZW1lfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxFbXB0eVN0YXRlSW1hZ2Ugey4uLntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIndpZHRoXCI6IDM3NixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImhlaWdodFwiOiAxNjIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsaWdodFNyY1wiOiBcIi9hc3NldHMvMDI2MjVlZTI5Zjg1MWVjNTg4YzIwMjBhODhkODI2NjUuc3ZnXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXJrU3JjXCI6IFwiL2Fzc2V0cy9iNWViMmY3ZDZiM2Y4Y2M5YjYwYmU0YTVkY2YyODAxNS5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxFbXB0eVN0YXRlVGV4dCBub3RlPXs8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoaXMgY2F0ZWdvcnkgaXMgZW1wdHkuIE9oIG5ldmVybWluZCwgdGhlcmUgaXMgV3VtcHVzLCBidXQgaGUgaXMgYWxvbmUuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz59IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRW1wdHlTdGF0ZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvPn1cclxuICAgICAgICAgICAgPC9kaXY+fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5pbnRlcmZhY2UgSGVhZGVyUHJvcHMge1xyXG4gICAgbmFtZTogc3RyaW5nXHJcbiAgICBpbmRleDogbnVtYmVyXHJcbiAgICBoaWRkZW4/OiBib29sZWFuXHJcbiAgICBvbkhpZGU6IEZ1bmN0aW9uXHJcbn1cclxuY29uc3QgQ2F0ZWdvcnlIZWFkZXIgPSAoeyBuYW1lLCBpbmRleCwgaGlkZGVuID0gZmFsc2UsIG9uSGlkZSB9OiBIZWFkZXJQcm9wcykgPT4ge1xyXG4gICAgY29uc3QgaGFuZGxlQ2F0ZWdvcnlQb3MgPSAodXBkbjogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgLy8gLTEgPSBtb3ZlIGRvd24gYnkgb25lXHJcbiAgICAgICAgLy8gKzEgPSBtb3ZlIHVwIGJ5IG9uZVxyXG5cclxuICAgICAgICBjb25zdCBpbmRleCA9IE9iamVjdC5rZXlzKHBpbm5lZERNUy5nZXRBbGwoKSkuZmluZEluZGV4KFxyXG4gICAgICAgICAgICAoaykgPT4gayA9PT0gbmFtZVxyXG4gICAgICAgIClcclxuICAgICAgICBwaW5uZWRETVMuc2V0UmF3KFxyXG4gICAgICAgICAgICBtb3ZlT2JqZWN0S2V5KHBpbm5lZERNUy5nZXRBbGwoKSwgaW5kZXgsIGluZGV4IC0gdXBkbikgYXMgUGlubmVkRE1TXHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiA8RmxleCBhbGlnbj17RmxleC5BbGlnbi5DRU5URVJ9PlxyXG4gICAgICAgIDxMaXN0U2VjdGlvbkl0ZW1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtqb2luQ2xhc3NlcyhjbGFzc2VzLlByaXZhdGVDaGFubmVsc0hlYWRlckNvbnRhaW5lci5wcml2YXRlQ2hhbm5lbHNIZWFkZXJDb250YWluZXIsIHN0eWxlcy5leGFtcGxlTGlzdFNlY3Rpb25JdGVtKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxGbGV4IHN0eWxlPXt7IGNvbG9yOiBwaW5uZWRETVMuZ2V0Q29sb3IobmFtZSksIGZvbnRXZWlnaHQ6IFwiYm9sZFwiIH19IGFsaWduPXtGbGV4LkFsaWduLkNFTlRFUn0gb25DbGljaz17b25IaWRlfT5cclxuICAgICAgICAgICAgICAgIDxEaXNjb3JkSWNvbiBuYW1lPVwiRHJvcGRvd25BcnJvd1wiIGNsYXNzTmFtZT17am9pbkNsYXNzZXMoc3R5bGVzLmRyb3Bkb3duQXJyb3csIGhpZGRlbiA/IHN0eWxlcy5oaWRkZW4gOiB1bmRlZmluZWQpfSAvPlxyXG4gICAgICAgICAgICAgICAge25hbWV9XHJcbiAgICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICA8L0xpc3RTZWN0aW9uSXRlbT5cclxuXHJcbiAgICAgICAgPFBvcG91dCBwb3NpdGlvbj17UG9wb3V0LlBvc2l0aW9ucy5CT1RUT019IHJlbmRlclBvcG91dD17KHByb3BzKSA9PiA8ZGl2IHsuLi5wcm9wc30+XHJcbiAgICAgICAgICAgIDxDaGFuZ2VDYXRlZ29yeU5hbWVNb2RhbCB0cmFuc2l0aW9uU3RhdGU9ezF9IG9uQ2xvc2U9e3Byb3BzLmNsb3NlUG9wb3V0fSBjYXRlZ29yeT17bmFtZX0gLz5cclxuICAgICAgICA8L2Rpdj59PlxyXG4gICAgICAgICAgICB7KHBvcG91dCkgPT4gPFRvb2x0aXBDb250YWluZXIgdGV4dD1cIkVkaXQgY2F0ZWdvcnlcIj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gey4uLnBvcG91dH1cclxuICAgICAgICAgICAgICAgICAgICBzaXplPXtCdXR0b24uU2l6ZXMuSUNPTn1cclxuICAgICAgICAgICAgICAgICAgICBsb29rPXtCdXR0b24uTG9va3MuQkxBTkt9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtqb2luQ2xhc3NlcyhjbGFzc2VzLkFjY291bnRDb250cm9sQnV0dG9ucy5idXR0b24sIGNsYXNzZXMuQWNjb3VudENvbnRyb2xCdXR0b25zLmVuYWJsZWQpfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxEaXNjb3JkSWNvbiBuYW1lPVwiUGVuY2lsXCIgc3R5bGU9e3sgd2lkdGg6IFwiMjBweFwiLCBoZWlnaHQ6IFwiMjBweFwiIH19IC8+XHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9Ub29sdGlwQ29udGFpbmVyPn1cclxuICAgICAgICA8L1BvcG91dD5cclxuXHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5SaWdodDogXCJhdXRvXCIgfX0gLz5cclxuXHJcbiAgICAgICAgPFBvcG91dCBwb3NpdGlvbj17UG9wb3V0LlBvc2l0aW9ucy5MRUZUfSByZW5kZXJQb3BvdXQ9eyhwcm9wcykgPT4gPGRpdiB7Li4ucHJvcHN9PlxyXG4gICAgICAgICAgICA8QWRkVXNlck1vZGFsIHRyYW5zaXRpb25TdGF0ZT17MX0gb25DbG9zZT17cHJvcHMuY2xvc2VQb3BvdXR9IG9uU2VsZWN0PXsodXNlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHVzZXIuaWQgIT0gbnVsbCkgcGlubmVkRE1TLmFkZFVzZXIobmFtZSwgdXNlci5pZClcclxuICAgICAgICAgICAgfX0gLz5cclxuICAgICAgICA8L2Rpdj59PlxyXG4gICAgICAgICAgICB7KHBvcG91dCkgPT4gPFRvb2x0aXBDb250YWluZXIgdGV4dD1cIkFkZCBhIG5ldyBwZXJzb25cIj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gey4uLnBvcG91dH1cclxuICAgICAgICAgICAgICAgICAgICBzaXplPXtCdXR0b24uU2l6ZXMuSUNPTn1cclxuICAgICAgICAgICAgICAgICAgICBsb29rPXtCdXR0b24uTG9va3MuQkxBTkt9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtqb2luQ2xhc3NlcyhjbGFzc2VzLkFjY291bnRDb250cm9sQnV0dG9ucy5idXR0b24sIGNsYXNzZXMuQWNjb3VudENvbnRyb2xCdXR0b25zLmVuYWJsZWQpfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxEaXNjb3JkSWNvbiBuYW1lPVwiUGVyc29uQWRkXCIgc3R5bGU9e3sgd2lkdGg6IFwiMjBweFwiLCBoZWlnaHQ6IFwiMjBweFwiIH19IC8+XHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9Ub29sdGlwQ29udGFpbmVyPn1cclxuICAgICAgICA8L1BvcG91dD5cclxuXHJcbiAgICAgICAgPEZsZXhcclxuICAgICAgICAgICAgZGlyZWN0aW9uPXtGbGV4LkRpcmVjdGlvbi5WRVJUSUNBTH1cclxuICAgICAgICAgICAgZ3Jvdz17MH1cclxuICAgICAgICAgICAgc2hyaW5rPXswfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgc2l6ZT17QnV0dG9uLlNpemVzLklDT059XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDYXRlZ29yeVBvcygrMSl9XHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17aW5kZXggPT09IDB9XHJcbiAgICAgICAgICAgICAgICBsb29rPXtCdXR0b24uTG9va3MuQkxBTkt9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2pvaW5DbGFzc2VzKGNsYXNzZXMuQWNjb3VudENvbnRyb2xCdXR0b25zLmJ1dHRvbiwgaW5kZXggPT09IDAgPyBjbGFzc2VzLkFjY291bnRDb250cm9sQnV0dG9ucy5kaXNhYmxlZCA6IGNsYXNzZXMuQWNjb3VudENvbnRyb2xCdXR0b25zLmVuYWJsZWQpfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8RGlzY29yZEljb24gbmFtZT1cIkFycm93RHJvcFVwXCIgLz5cclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgIHNpemU9e0J1dHRvbi5TaXplcy5JQ09OfVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlQ2F0ZWdvcnlQb3MoLTEpfVxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2luZGV4ID09PSBwaW5uZWRETVMuZ2V0Q2F0ZWdvcmllcygpLmxlbmd0aCAtIDF9XHJcbiAgICAgICAgICAgICAgICBsb29rPXtCdXR0b24uTG9va3MuQkxBTkt9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2pvaW5DbGFzc2VzKGNsYXNzZXMuQWNjb3VudENvbnRyb2xCdXR0b25zLmJ1dHRvbiwgaW5kZXggPT09IHBpbm5lZERNUy5nZXRDYXRlZ29yaWVzKCkubGVuZ3RoIC0gMSA/IGNsYXNzZXMuQWNjb3VudENvbnRyb2xCdXR0b25zLmRpc2FibGVkIDogY2xhc3Nlcy5BY2NvdW50Q29udHJvbEJ1dHRvbnMuZW5hYmxlZCl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxEaXNjb3JkSWNvbiBuYW1lPVwiQXJyb3dEcm9wRG93blwiIC8+XHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvRmxleD5cclxuICAgICAgICA8VG9vbHRpcENvbnRhaW5lciB0ZXh0PVwiRGVsZXRlXCI+XHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgIHNpemU9e0J1dHRvbi5TaXplcy5JQ09OfVxyXG4gICAgICAgICAgICAgICAgY29sb3I9e0J1dHRvbi5Db2xvcnMuUkVEfVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcGlubmVkRE1TLnJlbW92ZUNhdGVnb3J5KG5hbWUpfVxyXG4gICAgICAgICAgICAgICAgbG9vaz17QnV0dG9uLkxvb2tzLkxJTkt9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxEaXNjb3JkSWNvbiBuYW1lPVwiVHJhc2hcIiAvPlxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L1Rvb2x0aXBDb250YWluZXI+XHJcbiAgICA8L0ZsZXg+XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgKGpzb246IHN0cmluZykgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBKU09OLnBhcnNlKGpzb24pO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSBjYXRjaCAoZSkge31cclxuICAgIHJldHVybiBmYWxzZTtcclxufSIsImltcG9ydCB7IERpc3BhdGNoZXIsIFJlYWN0LCBNb2RhbEFjdGlvbnMgfSBmcm9tIFwiaXR0YWkvd2VicGFja1wiXHJcbmltcG9ydCB7IENhdGVnb3J5LCBTd2l0Y2hJdGVtLCBGb3JtcywgQnV0dG9uLCBGbGV4LCBSYWRpb0dyb3VwLCBNb2RhbCwgSGVhZGluZywgVGV4dCB9IGZyb20gXCJpdHRhaS9jb21wb25lbnRzXCJcclxuaW1wb3J0IFVzZXJMaXN0U2V0dGluZ3MgZnJvbSBcIi4vVXNlckxpc3RTZXR0aW5nc1wiXHJcbmltcG9ydCAqIGFzIHNldHRpbmdzIGZyb20gXCJpdHRhaS9zZXR0aW5nc1wiXHJcbmltcG9ydCAqIGFzIHRvYXN0IGZyb20gXCJpdHRhaS90b2FzdFwiXHJcbmltcG9ydCAqIGFzIGNvbnN0YW50cyBmcm9tIFwiLi4vY29uc3RhbnRzXCJcclxuLy9AdHMtaWdub3JlXHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vU2V0dGluZ3Muc2Nzc1wiXHJcbmltcG9ydCBpc1ZhbGlkSlNPTiBmcm9tIFwiLi4vdXRpbHMvaXNWYWxpZEpTT05cIlxyXG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi4vdXRpbHMvY2xhc3Nlc1wiXHJcbmltcG9ydCBqb2luQ2xhc3NlcyBmcm9tIFwiLi4vdXRpbHMvam9pbkNsYXNzZXNcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcbiAgICBjb25zdCBbLCBmb3JjZVVwZGF0ZV0gPSBSZWFjdC51c2VSZWR1Y2VyKCh2KSA9PiAhdiwgZmFsc2UpXHJcblxyXG4gICAgcmV0dXJuIDw+XHJcbiAgICAgICAgPENhdGVnb3J5IHRpdGxlPVwiTGlzdGVkIGNhdGVnb3JpZXNcIiBkZXNjcmlwdGlvbj1cIkNvbmZpZ3VyZSB0aGUgZm9sZGVycyBhbmQgYWRkIG9yIGNoYW5nZSB0aGUgbGlzdGVkIHVzZXJzXCIgaWNvbj1cIlBlcnNvblwiPlxyXG4gICAgICAgICAgICA8VXNlckxpc3RTZXR0aW5ncyAvPlxyXG4gICAgICAgIDwvQ2F0ZWdvcnk+XHJcblxyXG4gICAgICAgIDxDYXRlZ29yeSB0aXRsZT1cIk90aGVyIHNldHRpbmdzXCIgZGVzY3JpcHRpb249XCJPdGhlciBzZXR0aW5ncyB0aGF0IHlvdSBjYW4gdHdlYWtcIiBpY29uPVwiR2VhclwiPlxyXG4gICAgICAgICAgICA8Rm9ybXMuRm9ybVNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybXMuRm9ybUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1zLkZvcm1UaXRsZT5EaXNwbGF5IG1vZGU8L0Zvcm1zLkZvcm1UaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICA8UmFkaW9Hcm91cFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IG5hbWU6IFwiQ2F0ZWdvcnlcIiwgdmFsdWU6IGNvbnN0YW50cy5TZXR0aW5ncy5EZWZhdWx0U2V0dGluZ3MuQ2F0ZWdvcnlWaWV3LnNldHRpbmdzVmFsdWUgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgbmFtZTogXCJNaW5pbWFsaXN0XCIsIHZhbHVlOiBjb25zdGFudHMuU2V0dGluZ3MuRGVmYXVsdFNldHRpbmdzLk1pbmltYWxpc3RWaWV3LnNldHRpbmdzVmFsdWUgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2V0dGluZ3MuZ2V0KFwiZGlzcGxheVwiLCBjb25zdGFudHMuU2V0dGluZ3MuRGVmYXVsdFNldHRpbmdzLkRJU1BMQVlfTU9ERSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3Muc2V0KFwiZGlzcGxheVwiLCB2LnZhbHVlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRGlzcGF0Y2hlci5kaXJ0eURpc3BhdGNoKHsgdHlwZTogY29uc3RhbnRzLkRJU1BBVENIRVJfUElORE1TX0NIQU5HRV9MSVNUIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JjZVVwZGF0ZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybXMuRm9ybURpdmlkZXIgY2xhc3NOYW1lPXtqb2luQ2xhc3NlcyhjbGFzc2VzLk1hcmdpbnMubWFyZ2luQm90dG9tMjAsIGNsYXNzZXMuTWFyZ2lucy5tYXJnaW5Ub3AyMCl9IC8+XHJcbiAgICAgICAgICAgICAgICA8L0Zvcm1zLkZvcm1JdGVtPlxyXG5cclxuICAgICAgICAgICAgICAgIHtzZXR0aW5ncy5nZXQoXCJkaXNwbGF5XCIsIGNvbnN0YW50cy5TZXR0aW5ncy5EZWZhdWx0U2V0dGluZ3MuRElTUExBWV9NT0RFKSA9PT0gY29uc3RhbnRzLlNldHRpbmdzLkRlZmF1bHRTZXR0aW5ncy5NaW5pbWFsaXN0Vmlldy5zZXR0aW5nc1ZhbHVlICYmIDxDYXRlZ29yeSB0aXRsZT1cIk1pbmltYWxpc3QgdmlldyBzZXR0aW5nc1wiIGRlc2NyaXB0aW9uPVwiQWRkaXRpb25hbCBjb25maWd1cmF0aW9uIGZvciB0aGUgTWluaW1hbGlzdCBWaWV3XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFN3aXRjaEl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NldHRpbmdzLmdldChcIm1pbmltYWwudXNlckljb25zXCIsIGNvbnN0YW50cy5TZXR0aW5ncy5EZWZhdWx0U2V0dGluZ3MuTWluaW1hbGlzdFZpZXcudXNlckljb25zKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5ncy5zZXQoXCJtaW5pbWFsLnVzZXJJY29uc1wiLCBlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRGlzcGF0Y2hlci5kaXJ0eURpc3BhdGNoKHsgdHlwZTogY29uc3RhbnRzLkRJU1BBVENIRVJfUElORE1TX0NIQU5HRV9MSVNUIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlNob3cgdXNlciBpY29uczwvU3dpdGNoSXRlbT5cclxuICAgICAgICAgICAgICAgIDwvQ2F0ZWdvcnk+fVxyXG5cclxuICAgICAgICAgICAgICAgIDxTd2l0Y2hJdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NldHRpbmdzLmdldChcInBpbkljb25cIiwgY29uc3RhbnRzLlNldHRpbmdzLkRlZmF1bHRTZXR0aW5ncy5QSU5fSUNPTil9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXR0aW5ncy5zZXQoXCJwaW5JY29uXCIsIGUpfVxyXG4gICAgICAgICAgICAgICAgICAgIG5vdGU9XCJBZGRzIGFuIHBpbiBpY29uIHRvIHRoZSB1c2VyIHNvIHlvdSBjYW4gYWRkIGl0IHF1aWNrbHkgdG8gYSBjYXRlZ29yeVwiXHJcbiAgICAgICAgICAgICAgICA+QWRkIGEgcXVpY2sgc2hvcnRjdXQgdG8gYWRkIHBlb3BsZSBvbiBjYXRlZ29yaWVzPC9Td2l0Y2hJdGVtPlxyXG5cclxuICAgICAgICAgICAgICAgIDxTd2l0Y2hJdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NldHRpbmdzLmdldChcInN0cmVhbWVyTW9kZVwiLCBjb25zdGFudHMuU2V0dGluZ3MuRGVmYXVsdFNldHRpbmdzLlNUUkVBTUVSX01PREUpfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0dGluZ3Muc2V0KFwic3RyZWFtZXJNb2RlXCIsIGUpfVxyXG4gICAgICAgICAgICAgICAgICAgIG5vdGU9XCJXaGVuIFN0cmVhbWVyIG1vZGUgaXMgZW5hYmxlZCwgaXQgd2lsbCBhdXRvbWF0aWNhbGx5IGhpZGUgdGhlIGNhdGVnb3JpZXNcIlxyXG4gICAgICAgICAgICAgICAgPkhpZGUgdXNlcnMgd2hlbiBTdHJlYW1lciBtb2RlIGlzIGVuYWJsZWQ8L1N3aXRjaEl0ZW0+XHJcblxyXG4gICAgICAgICAgICAgICAgPEZvcm1zLkZvcm1JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3Jtcy5Gb3JtVGl0bGU+RXhwb3J0IGFuZCBpbXBvcnQgc2V0dGluZ3M8L0Zvcm1zLkZvcm1UaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICA8RmxleCBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25GbGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVFeHBvcnR9PkV4cG9ydDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNvbG9yPXtCdXR0b24uQ29sb3JzLlJFRH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUltcG9ydH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPkltcG9ydDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICAgICAgICAgIDwvRm9ybXMuRm9ybUl0ZW0+XHJcbiAgICAgICAgICAgIDwvRm9ybXMuRm9ybVNlY3Rpb24+XHJcbiAgICAgICAgPC9DYXRlZ29yeT5cclxuICAgIDwvPlxyXG59XHJcblxyXG5jb25zdCBoYW5kbGVFeHBvcnQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAvL0B0cy1pZ25vcmVcclxuICAgIHJldHVybiBEaXNjb3JkTmF0aXZlLmZpbGVNYW5hZ2VyLnNhdmVXaXRoRGlhbG9nKEpTT04uc3RyaW5naWZ5KHNldHRpbmdzLmdldEFsbCgpKSwgXCJzZXR0aW5ncy5qc29uXCIpXHJcbn1cclxuXHJcbmNvbnN0IGhhbmRsZUltcG9ydCA9IGFzeW5jICgpID0+IHtcclxuICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgY29uc3QgW3NlbGVjdGVkRmlsZV0gPSBhd2FpdCBEaXNjb3JkTmF0aXZlLmZpbGVNYW5hZ2VyLm9wZW5GaWxlcyhcIiouanNvblwiKVxyXG4gICAgY29uc3QgbmV3U2V0dGluZ3NUZXh0ID0gbmV3IFRleHREZWNvZGVyKCkuZGVjb2RlKG5ldyBVaW50OEFycmF5KHNlbGVjdGVkRmlsZS5kYXRhIGFzIEFycmF5QnVmZmVyKSlcclxuICAgIGlmICghaXNWYWxpZEpTT04obmV3U2V0dGluZ3NUZXh0KSkgcmV0dXJuIHZvaWQgdG9hc3Quc2hvdyhcIkludmFsaWQgc2V0dGluZ3MgZmlsZS4gSXQgc2hvdWxkIGVuZCB3aXRoIFxcXCIuanNvblxcXCIuXCIsIHtcclxuICAgICAgICBkdXJhdGlvbjogNTAwMFxyXG4gICAgfSlcclxuICAgIGNvbnN0IG5ld1NldHRpbmdzOiBKU09OID0gSlNPTi5wYXJzZShuZXdTZXR0aW5nc1RleHQpXHJcbiAgICBcclxuICAgIGNvbnN0IG92ZXJyaWRlU2V0dGluZ3MgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0dGluZ3MucmVzZXQoKVxyXG4gICAgICAgIHNldHRpbmdzLnNldEFsbChuZXdTZXR0aW5ncylcclxuICAgIH1cclxuXHJcbiAgICBNb2RhbEFjdGlvbnMub3Blbk1vZGFsKHByb3BzID0+IDxNb2RhbC5Nb2RhbFJvb3Qgey4uLnByb3BzfSBzaXplPXtNb2RhbC5Nb2RhbFNpemUuU01BTEx9PlxyXG4gICAgICAgIDxNb2RhbC5Nb2RhbEhlYWRlciBzZXBhcmF0b3I9e2ZhbHNlfT5cclxuICAgICAgICAgICAgPEhlYWRpbmcgdmFyaWFudD1cImhlYWRpbmctbGcvbWVkaXVtXCI+U2F2ZSBhIGJhY2t1cDwvSGVhZGluZz5cclxuICAgICAgICA8L01vZGFsLk1vZGFsSGVhZGVyPlxyXG4gICAgICAgIDxNb2RhbC5Nb2RhbENvbnRlbnQ+XHJcbiAgICAgICAgICAgIDxUZXh0PkRvIHlvdSB3YW50IHRvIHNhdmUgYSBiYWNrdXA/PC9UZXh0PlxyXG4gICAgICAgIDwvTW9kYWwuTW9kYWxDb250ZW50PlxyXG4gICAgICAgIDxNb2RhbC5Nb2RhbEZvb3Rlcj5cclxuICAgICAgICAgICAgPEZsZXggc3R5bGU9e3tnYXA6IFwiOHB4XCJ9fSBqdXN0aWZ5PXtGbGV4Lkp1c3RpZnkuRU5EfT5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gbG9vaz17QnV0dG9uLkxvb2tzLkxJTkt9IGNvbG9yPXtCdXR0b24uQ29sb3JzLldISVRFfSBvbkNsaWNrPXtwcm9wcy5vbkNsb3NlfT5cclxuICAgICAgICAgICAgICAgICAgICBDYW5jZWxcclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBsb29rPXtCdXR0b24uTG9va3MuTElOS30gY29sb3I9e0J1dHRvbi5Db2xvcnMuUkVEfSBvbkNsaWNrPXsoKSA9PiB7IG92ZXJyaWRlU2V0dGluZ3MoKTsgcHJvcHMub25DbG9zZSgpIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIE92ZXJyaWRlIHdpdGhvdXQgc2F2aW5nXHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17YXN5bmMgKCkgPT4geyBhd2FpdCBoYW5kbGVFeHBvcnQoKTsgb3ZlcnJpZGVTZXR0aW5ncygpOyBwcm9wcy5vbkNsb3NlKCk7IH19PlxyXG4gICAgICAgICAgICAgICAgICAgIFNhdmVcclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgPC9Nb2RhbC5Nb2RhbEZvb3Rlcj5cclxuICAgIDwvTW9kYWwuTW9kYWxSb290PilcclxuXHJcbiAgICAvLyBjb25zdCBzdHVmZjogeyBkYXRhOiBBcnJheUJ1ZmZlciwgZmlsZW5hbWU6IHN0cmluZyB9ID0gYXdhaXQgRGlzY29yZE5hdGl2ZS5maWxlTWFuYWdlci5vcGVuRmlsZXMoXCIqLmpzb25cIilcclxuICAgIC8vIGNvbnNvbGUubG9nKHN0dWZmKVxyXG59IiwiaW1wb3J0IHsgUmVhY3QsIE1vZGFsQWN0aW9ucyB9IGZyb20gXCJpdHRhaS93ZWJwYWNrXCJcclxuaW1wb3J0IHsgTW9kYWwgfSBmcm9tIFwiaXR0YWkvY29tcG9uZW50c1wiXHJcbmltcG9ydCBVc2VyTGlzdFNldHRpbmdzLCB7IENyZWF0ZUNhdGVnb3J5IH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvVXNlckxpc3RTZXR0aW5nc1wiXHJcblxyXG5leHBvcnQgZGVmYXVsdCAob3BlbmVkQ2F0ZWdvcnk/OiBzdHJpbmcpID0+IHtcclxuICAgIE1vZGFsQWN0aW9ucy5vcGVuTW9kYWwoKHByb3BzKSA9PiA8TW9kYWwuTW9kYWxSb290IHsuLi5wcm9wc30gc2l6ZT17TW9kYWwuTW9kYWxTaXplLk1FRElVTX0+XHJcbiAgICAgICAgPE1vZGFsLk1vZGFsSGVhZGVyIHNlcGFyYXRvcj17ZmFsc2V9PlxyXG4gICAgICAgICAgICA8Q3JlYXRlQ2F0ZWdvcnkgLz5cclxuICAgICAgICA8L01vZGFsLk1vZGFsSGVhZGVyPlxyXG4gICAgICAgIDxNb2RhbC5Nb2RhbENvbnRlbnQ+XHJcbiAgICAgICAgICAgIDxVc2VyTGlzdFNldHRpbmdzIHsuLi57IG9wZW5lZENhdGVnb3J5IH19IHNob3dBZGRDYXRlZ29yeUJ1dHRvbj17ZmFsc2V9IC8+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZ0JvdHRvbTogXCIxNnB4XCIgfX0gLz5cclxuICAgICAgICA8L01vZGFsLk1vZGFsQ29udGVudD5cclxuICAgIDwvTW9kYWwuTW9kYWxSb290PilcclxufSIsImltcG9ydCB7IFJlYWN0LCBDb250ZXh0TWVudSBhcyBDb250ZXh0TWVudUhhbmRsZXIgfSBmcm9tIFwiaXR0YWkvd2VicGFja1wiXHJcbmltcG9ydCB7IEJ1dHRvbiwgQ29udGV4dE1lbnUgfSBmcm9tIFwiaXR0YWkvY29tcG9uZW50c1wiXHJcbmltcG9ydCB7IG1lc3NhZ2VCb3ggfSBmcm9tIFwiaXR0YWkvdXRpbGl0aWVzXCJcclxuaW1wb3J0IG9wZW5DYXRlZ29yeVNldHRpbmdzIGZyb20gXCIuLi8uLi91dGlscy9vcGVuQ2F0ZWdvcnlTZXR0aW5nc1wiXHJcbmltcG9ydCBwaW5uZWRETVMgZnJvbSBcIi4uLy4uL2hhbmRsZXJzL3Bpbm5lZERNU1wiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAocHJvcHM6IHsgY2F0ZWdvcnk6IHN0cmluZyB9KSB7XHJcbiAgICByZXR1cm4gPENvbnRleHRNZW51IG5hdklkPXtcInBpbi11c2VyXCJ9IG9uQ2xvc2U9e0NvbnRleHRNZW51SGFuZGxlci5jbG9zZUNvbnRleHRNZW51fT5cclxuICAgICAgICA8Q29udGV4dE1lbnUuTWVudUl0ZW0gaWQ9XCJlZGl0XCJcclxuICAgICAgICAgICAgbGFiZWw9XCJFZGl0IGNhdGVnb3J5XCJcclxuICAgICAgICAgICAgYWN0aW9uPXsoKSA9PiBvcGVuQ2F0ZWdvcnlTZXR0aW5ncyhwcm9wcy5jYXRlZ29yeSl9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8Q29udGV4dE1lbnUuTWVudUl0ZW0gaWQ9XCJkZWxldGVcIlxyXG4gICAgICAgICAgICBsYWJlbD1cIkRlbGV0ZSBjYXRlZ29yeVwiXHJcbiAgICAgICAgICAgIGNvbG9yPVwiY29sb3JEYW5nZXJcIlxyXG4gICAgICAgICAgICBhY3Rpb249eygpID0+IHtcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2VCb3goXCJEZWxldGVcIiwgYEFyZSB5b3Ugc3VyZSB0aGF0IHlvdSB3YW50IHRvIGRlbGV0ZSBcIiR7cHJvcHMuY2F0ZWdvcnl9XCI/YCwgW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJEZWxldGVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwaW5uZWRETVMucmVtb3ZlQ2F0ZWdvcnkocHJvcHMuY2F0ZWdvcnkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBCdXR0b24uQ29sb3JzLlJFRFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIkNhbmNlbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb246ICgpID0+IHt9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogQnV0dG9uLkNvbG9ycy5XSElURSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9vazogQnV0dG9uLkxvb2tzLkxJTktcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdKVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgIC8+XHJcbiAgICA8L0NvbnRleHRNZW51PlxyXG59XHJcblxyXG4iLCJpbXBvcnQgKiBhcyBwYXRjaGVyIGZyb20gXCJpdHRhaS9wYXRjaGVyXCJcclxuaW1wb3J0ICogYXMgd2VicGFjayBmcm9tIFwiaXR0YWkvd2VicGFja1wiXHJcbmltcG9ydCB7IFJlYWN0LCBEaXNwYXRjaGVyIH0gZnJvbSBcIml0dGFpL3dlYnBhY2tcIlxyXG5pbXBvcnQgeyBDaGFubmVscywgQ3VycmVudENoYW5uZWxzLCBVc2VycyB9IGZyb20gXCJpdHRhaS9zdG9yZXNcIlxyXG5pbXBvcnQgeyBmaW5kSW5SZWFjdFRyZWUsIHNlYXJjaENsYXNzTmFtZU1vZHVsZXMgfSBmcm9tIFwiaXR0YWkvdXRpbGl0aWVzXCJcclxuaW1wb3J0IHsgRGlzY29yZEljb24sIEZsZXgsIE1vZGFsLCBQb3BvdXQsIFRleHQgfSBmcm9tIFwiaXR0YWkvY29tcG9uZW50c1wiXHJcbmltcG9ydCAqIGFzIHNldHRpbmdzIGZyb20gXCJpdHRhaS9zZXR0aW5nc1wiXHJcblxyXG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi4vdXRpbHMvY2xhc3Nlc1wiXHJcbmltcG9ydCBwaW5uZWRETVMsIHt1c2VMaXN0VXBkYXRlfSBmcm9tIFwiLi4vaGFuZGxlcnMvcGlubmVkRE1TXCJcclxuaW1wb3J0IGpvaW5DbGFzc2VzIGZyb20gXCIuLi91dGlscy9qb2luQ2xhc3Nlc1wiXHJcbmltcG9ydCAqIGFzIGNvbnN0YW50cyBmcm9tIFwiLi4vY29uc3RhbnRzXCJcclxuLy9AdHMtaWdub3JlXHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vZG1saXN0LnNjc3NcIlxyXG5pbXBvcnQgb3BlbkNhdGVnb3J5U2V0dGluZ3MgZnJvbSBcIi4uL3V0aWxzL29wZW5DYXRlZ29yeVNldHRpbmdzXCJcclxuaW1wb3J0IENhdGVnb3J5Q29udGV4dE1lbnUgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ29udGV4dE1lbnVzL0NhdGVnb3J5XCJcclxuXHJcbmNvbnN0IExpc3RTZWN0aW9uSXRlbSA9IHdlYnBhY2suZmluZEJ5RGlzcGxheU5hbWUoXCJMaXN0U2VjdGlvbkl0ZW1cIilcclxuY29uc3QgeyBEaXJlY3RNZXNzYWdlIH0gPSB3ZWJwYWNrLmZpbmRCeVByb3BzKFwiRGlyZWN0TWVzc2FnZVwiKVxyXG5jb25zdCB7IE51bWJlckJhZGdlIH0gPSB3ZWJwYWNrLmZpbmRCeVByb3BzKFwiTnVtYmVyQmFkZ2VcIilcclxuY29uc3QgeyBnZXRNZW50aW9uQ291bnQgfSA9IHdlYnBhY2suZmluZEJ5UHJvcHMoXCJnZXRNZW50aW9uQ291bnRcIilcclxuY29uc3QgVXNlclN1bW1hcnlJdGVtID0gd2VicGFjay5maW5kQnlEaXNwbGF5TmFtZShcIlVzZXJTdW1tYXJ5SXRlbVwiKVxyXG5cclxuY29uc3QgVVNFUl9JQ09OX1NJWkUgPSAxNlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcbiAgICBsZXQgUGluRE1TUmVuZGVyID0gKCkgPT4gPEN1cnJlbnRMaXN0cyAvPlxyXG4gICAgLy9AdHMtaWdub3JlXHJcbiAgICBQaW5ETVNSZW5kZXIuZGlzcGxheU5hbWUgPSBcIlBpbm5lZERNU1wiXHJcblxyXG4gICAgLy8gd2VicGFjay5EaXNwYXRjaGVyLnN1YnNjcmliZShcIkNIQU5ORUxfVU5SRUFEX1VQREFURVwiLCBjb25zb2xlLmxvZylcclxuICAgIFxyXG4gICAgcGF0Y2hlci5hZnRlcihcIkRNTGlzdFBhdGNoXCIsIHdlYnBhY2suZmluZChtID0+IG0/LmRlZmF1bHQ/LmRpc3BsYXlOYW1lID09PSBcIkNvbm5lY3RlZFByaXZhdGVDaGFubmVsc0xpc3RcIiksIFwiZGVmYXVsdFwiLCAoW3Byb3BzXSwgcmVzLCBfdGhpcykgPT4ge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHtwcm9wcywgcmVzLCBfdGhpc30pXHJcbiAgICAgICAgdXNlTGlzdFVwZGF0ZSgpIC8vdGVtcG9yYXJ5LCB3aWxsIHJlbW92ZSBsYXRlclxyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBQcml2YXRlQ2hhbm5lbHNMaXN0OiB7cHJvcHM6IHtjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlW10sIHByaXZhdGVDaGFubmVsSWRzOiBzdHJpbmdbXX0sIHR5cGU6IGFueX0gPSBmaW5kSW5SZWFjdFRyZWUocmVzLCAobTogeyB0eXBlOiB7IGRpc3BsYXlOYW1lOiBzdHJpbmcgfSB9KSA9PiBtPy50eXBlPy5kaXNwbGF5TmFtZSA9PT0gXCJQcml2YXRlQ2hhbm5lbHNMaXN0XCIpIGFzIGFueVxyXG4gICAgICAgIGlmIChQcml2YXRlQ2hhbm5lbHNMaXN0ID09IG51bGwpIHJldHVyblxyXG5cclxuICAgICAgICBPYmplY3QudmFsdWVzKHBpbm5lZERNUy5nZXRBbGwoKSkuZm9yRWFjaCgoe3VzZXJzfSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBkbUNoYW5uZWxzID0gdXNlcnMubWFwKGlkID0+IENoYW5uZWxzLmdldERNRnJvbVVzZXJJZChpZCkpXHJcbiAgICAgICAgICAgIFByaXZhdGVDaGFubmVsc0xpc3QucHJvcHMucHJpdmF0ZUNoYW5uZWxJZHMgPVxyXG4gICAgICAgICAgICAgICAgUHJpdmF0ZUNoYW5uZWxzTGlzdC5wcm9wcy5wcml2YXRlQ2hhbm5lbElkcy5maWx0ZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgKGlkKSA9PiAhZG1DaGFubmVscy5pbmNsdWRlcyhpZClcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBjb25zdCBvZ0Z1bmMgPSBQcml2YXRlQ2hhbm5lbHNMaXN0LnR5cGUucHJvdG90eXBlLnJlbmRlclxyXG4gICAgICAgIGlmIChvZ0Z1bmMgPT0gbnVsbCkgcmV0dXJuXHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbihQcml2YXRlQ2hhbm5lbHNMaXN0LnByb3BzLCB7XHJcbiAgICAgICAgICAgIG9yaWdpbmFsOiBvZ0Z1bmMsXHJcbiAgICAgICAgfSlcclxuICAgICAgICAvLyBpZighZmlzdFBhdGNoKSBQcml2YXRlQ2hhbm5lbHNMaXN0LnR5cGUucHJvdG90eXBlLnJlbmRlciA9IFBhdGNoZWRQcml2YXRlQ2hhbm5lbHNMaXN0XHJcbiAgICAgICAgXHJcblxyXG5cclxuICAgICAgICBpZiAoUHJpdmF0ZUNoYW5uZWxzTGlzdC5wcm9wcy5jaGlsZHJlbi5maW5kKFxyXG4gICAgICAgICAgICAobTogYW55KSA9PiBtPy50eXBlPy5kaXNwbGF5TmFtZSA9PT0gXCJQaW5uZWRETVNcIlxyXG4gICAgICAgICkpIHJldHVyblxyXG5cclxuICAgICAgICBQcml2YXRlQ2hhbm5lbHNMaXN0LnByb3BzLmNoaWxkcmVuLnB1c2goPFBpbkRNU1JlbmRlciAvPilcclxuICAgICAgICBcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhQcml2YXRlQ2hhbm5lbHNMaXN0KVxyXG4gICAgfSlcclxufVxyXG5cclxuY29uc3QgQ3VycmVudExpc3RzID0gKCkgPT4ge1xyXG4gICAgdXNlTGlzdFVwZGF0ZSgpXHJcblxyXG4gICAgc3dpdGNoIChzZXR0aW5ncy5nZXQoXCJkaXNwbGF5XCIsIGNvbnN0YW50cy5TZXR0aW5ncy5EZWZhdWx0U2V0dGluZ3MuRElTUExBWV9NT0RFKSkge1xyXG4gICAgICAgIGNhc2UgY29uc3RhbnRzLlNldHRpbmdzLkRlZmF1bHRTZXR0aW5ncy5NaW5pbWFsaXN0Vmlldy5zZXR0aW5nc1ZhbHVlOiB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndyYXBwZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtwaW5uZWRETVMuZ2V0Q2F0ZWdvcmllcygpLm1hcCgoY2F0ZWdvcnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxNaW5pbWFsaXN0TGlzdCB7Li4ueyBjYXRlZ29yeSB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICAgICAgZGVmYXVsdDoge1xyXG4gICAgICAgICAgICByZXR1cm4gPD5cclxuICAgICAgICAgICAgICAgIHtwaW5uZWRETVMuZ2V0Q2F0ZWdvcmllcygpLm1hcCgoY2F0ZWdvcnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPENhdGVnb3J5TGlzdCB7Li4ueyBjYXRlZ29yeSB9fSAvPlxyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IENhdGVnb3J5TGlzdCA9ICh7Y2F0ZWdvcnl9OiB7Y2F0ZWdvcnk6IHN0cmluZ30pID0+IHtcclxuICAgIGNvbnN0IFtzaG93LCBzZXRTaG93XSA9IFJlYWN0LnVzZVN0YXRlKHBpbm5lZERNUy5nZXRWaXNpYmlsaXR5KGNhdGVnb3J5KSlcclxuXHJcbiAgICByZXR1cm4gPD5cclxuICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgcGlubmVkRE1TLnNldFZpc2liaWxpdHkoY2F0ZWdvcnksICFzaG93KVxyXG4gICAgICAgICAgICBzZXRTaG93KCFzaG93KVxyXG4gICAgICAgIH19PlxyXG4gICAgICAgICAgICA8TGlzdFNlY3Rpb25JdGVtXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2pvaW5DbGFzc2VzKGNsYXNzZXMuQ2F0ZWdvcnkud3JhcHBlciwgc3R5bGVzLmNhdGVnb3J5Vmlld1dyYXBwZXIsIHNob3cgPyBzdHlsZXMub3BlbiA6IG51bGwpfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiBwaW5uZWRETVMuZ2V0Q29sb3IoY2F0ZWdvcnkpIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPERpc2NvcmRJY29uIG5hbWU9XCJEcm9wZG93bkFycm93XCIgdHlwZT1cIm5vbmVcIiBjbGFzc05hbWU9e2pvaW5DbGFzc2VzKGNsYXNzZXMuQ2F0ZWdvcnkuaWNvbiwgc3R5bGVzLmljb24pfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e2pvaW5DbGFzc2VzKChzZWFyY2hDbGFzc05hbWVNb2R1bGVzKFwiY29udGFpbmVyLTMySFc1c1wiKSBhcyBhbnkpLmNvbnRhaW5lciwgY2xhc3Nlcy5DYXRlZ29yeS5uYW1lLCBzdHlsZXMubmFtZSl9PntjYXRlZ29yeX08L2gyPlxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8L0xpc3RTZWN0aW9uSXRlbT5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAge3Nob3cgJiYgcGlubmVkRE1TLmdldFVzZXJzKGNhdGVnb3J5KS5tYXAoKHVzZXJJZCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBkbUlkID0gQ2hhbm5lbHMuZ2V0RE1Gcm9tVXNlcklkKHVzZXJJZClcclxuICAgICAgICAgICAgaWYgKGRtSWQgPT0gbnVsbCkgcmV0dXJuIG51bGxcclxuXHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8RGlyZWN0TWVzc2FnZSBrZXk9e2RtSWR9XHJcbiAgICAgICAgICAgICAgICAgICAgY2hhbm5lbD17Q2hhbm5lbHMuZ2V0Q2hhbm5lbChkbUlkKX1cclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZD17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEN1cnJlbnRDaGFubmVscy5nZXRDaGFubmVsSWQoKSA9PT0gZG1JZFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9KX1cclxuICAgIDwvPlxyXG59XHJcblxyXG5jb25zdCBnZXRQaW5nQ291bnQgPSAoY3VycmVudFVzZXJzOiBzdHJpbmdbXSkgPT4gY3VycmVudFVzZXJzLm1hcCh1c2VySWQgPT4gQ2hhbm5lbHMuZ2V0RE1Gcm9tVXNlcklkKHVzZXJJZCkpLnJlZHVjZSgoYWNjLCBjaGFubmVsSWQpID0+IGFjYyArIGdldE1lbnRpb25Db3VudChjaGFubmVsSWQpLCAwKVxyXG5cclxuZXhwb3J0IGNvbnN0IE1pbmltYWxpc3RMaXN0ID0gKHsgY2F0ZWdvcnkgfTogeyBjYXRlZ29yeTogc3RyaW5nIH0pID0+IHtcclxuICAgIGNvbnN0IGN1cnJlbnRVc2VycyA9IFJlYWN0LnVzZU1lbW8oKCkgPT4gcGlubmVkRE1TLmdldFVzZXJzKGNhdGVnb3J5KSwgW10pXHJcbiAgICBjb25zdCBpc0N1cnJlbnRDaGFubmVsID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRVc2Vycy5zb21lKCh1c2VySWQpID0+IEN1cnJlbnRDaGFubmVscy5nZXRDaGFubmVsSWQoKSA9PT0gQ2hhbm5lbHMuZ2V0RE1Gcm9tVXNlcklkKHVzZXJJZCkpXHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICBjb25zdCBbcGluZ0NvdW50LCBzZXRQaW5nQ291bnRdID0gUmVhY3QudXNlU3RhdGU8bnVtYmVyPihnZXRQaW5nQ291bnQoY3VycmVudFVzZXJzKSlcclxuICAgIGNvbnN0IFtpc1N0cmVhbWVyTW9kZUVuYWJsZWQsIHNldFN0cmVhbWVyTW9kZV0gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuPihmYWxzZSlcclxuXHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBtZXNzYWdlQ3JlYXRlTGlzdGVuZXIgPSAoe2NoYW5uZWxJZH06IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoY3VycmVudFVzZXJzLnNvbWUoKHVzZXJJZCkgPT4gY2hhbm5lbElkID09PSBDaGFubmVscy5nZXRETUZyb21Vc2VySWQodXNlcklkKSkpIHNldFBpbmdDb3VudChnZXRQaW5nQ291bnQoY3VycmVudFVzZXJzKSlcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBzdHJlYW1lck1vZGVMaXN0ZW5lciA9ICh7IHZhbHVlIH06IHsgdmFsdWU6IGJvb2xlYW4gfSkgPT4ge1xyXG4gICAgICAgICAgICBzZXRTdHJlYW1lck1vZGUodmFsdWUpXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgRGlzcGF0Y2hlci5zdWJzY3JpYmUoXCJDSEFOTkVMX1VOUkVBRF9VUERBVEVcIiwgbWVzc2FnZUNyZWF0ZUxpc3RlbmVyKTtcclxuICAgICAgICBEaXNwYXRjaGVyLnN1YnNjcmliZShcIlNUUkVBTUVSX01PREVfVVBEQVRFXCIsIHN0cmVhbWVyTW9kZUxpc3RlbmVyKTtcclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICBEaXNwYXRjaGVyLnVuc3Vic2NyaWJlKFwiQ0hBTk5FTF9VTlJFQURfVVBEQVRFXCIsIG1lc3NhZ2VDcmVhdGVMaXN0ZW5lcilcclxuICAgICAgICAgICAgRGlzcGF0Y2hlci51bnN1YnNjcmliZShcIlNUUkVBTUVSX01PREVfVVBEQVRFXCIsIHN0cmVhbWVyTW9kZUxpc3RlbmVyKVxyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICByZXR1cm4gPD5cclxuICAgICAgICA8UG9wb3V0IHBvc2l0aW9uPXtQb3BvdXQuUG9zaXRpb25zLlJJR0hUfSBhbmltYXRpb249e1BvcG91dC5BbmltYXRpb24uTk9ORX0gcmVuZGVyUG9wb3V0PXsocHJvcHMpID0+IDxkaXYgey4uLnByb3BzfT5cclxuICAgICAgICAgICAgPE1vZGFsLk1vZGFsUm9vdCB0cmFuc2l0aW9uU3RhdGU9ezF9IHNpemU9e01vZGFsLk1vZGFsU2l6ZS5EWU5BTUlDfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWluaW1hbGlzdGljUG9wb3V0fT5cclxuICAgICAgICAgICAgICAgICAgICB7Y3VycmVudFVzZXJzLmxlbmd0aCAhPT0gMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IGN1cnJlbnRVc2Vycy5tYXAoKHVzZXJJZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZG1JZCA9IENoYW5uZWxzLmdldERNRnJvbVVzZXJJZCh1c2VySWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhDaGFubmVscy5nZXRDaGFubmVsKGRtSWQpLCBDaGFubmVscy5nZXRDaGFubmVsKGRtSWQpLnJlY2lwaWVudHMuaW5jbHVkZXMoXCIzNzY0OTMyNjE3NTUyNTI3MzZcIikpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZG1JZCA9PSBudWxsKSByZXR1cm4gbnVsbFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERpcmVjdE1lc3NhZ2Uga2V5PXtkbUlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFubmVsPXtDaGFubmVscy5nZXRDaGFubmVsKGRtSWQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZD17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDdXJyZW50Q2hhbm5lbHMuZ2V0Q2hhbm5lbElkKCkgPT09IGRtSWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogPFRleHQgc3R5bGU9e3ttYXJnaW5MZWZ0OiBcIjhweFwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGVyZSBpcyBub2JvZHkgaGVyZSBjdXJyZW50bHkuIDxhIG9uQ2xpY2s9eygpID0+IG9wZW5DYXRlZ29yeVNldHRpbmdzKGNhdGVnb3J5KX0+QWRkIGEgbmV3IHBlcnNvbjwvYT4uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Nb2RhbC5Nb2RhbFJvb3Q+XHJcbiAgICAgICAgPC9kaXY+fT5cclxuICAgICAgICAgICAgeyhwcm9wcykgPT4gPGRpdiB7Li4ucHJvcHN9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2pvaW5DbGFzc2VzKGNsYXNzZXMuRE1CdXR0b25zLmNoYW5uZWwsIChzZWFyY2hDbGFzc05hbWVNb2R1bGVzKFwiY29udGFpbmVyLTMySFc1c1wiKSBhcyBhbnkpLmNvbnRhaW5lcil9XHJcbiAgICAgICAgICAgICAgICBvbkNvbnRleHRNZW51PXtlID0+IHdlYnBhY2suQ29udGV4dE1lbnUub3BlbkNvbnRleHRNZW51KGUsICgpID0+IDxDYXRlZ29yeUNvbnRleHRNZW51IGNhdGVnb3J5PXtjYXRlZ29yeX0gLz4pfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17am9pbkNsYXNzZXMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzZXMuRE1CdXR0b25zLmludGVyYWN0aXZlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc2VzLkludGVyYWN0aXZlcy5pbnRlcmFjdGl2ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNDdXJyZW50Q2hhbm5lbCA/IGpvaW5DbGFzc2VzKGNsYXNzZXMuRE1CdXR0b25zLmludGVyYWN0aXZlU2VsZWN0ZWQsIGNsYXNzZXMuSW50ZXJhY3RpdmVzLnNlbGVjdGVkKSA6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3Nlcy5ETUJ1dHRvbnMubGlua0J1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICl9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtqb2luQ2xhc3NlcyhjbGFzc2VzLk5hbWVzLmxheW91dCwgc3R5bGVzLm1pbmltYWxpc3RpY1ZpZXcpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZsZXggZGlyZWN0aW9uPXtGbGV4LkRpcmVjdGlvbi5WRVJUSUNBTH0gY2xhc3NOYW1lPXtzdHlsZXMubmFtZUFuZFVzZXJzfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGNvbG9yOiBwaW5uZWRETVMuZ2V0Q29sb3IoY2F0ZWdvcnkpLCBmb250V2VpZ2h0OiBcImJvbGRcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2F0ZWdvcnl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IWlzU3RyZWFtZXJNb2RlRW5hYmxlZCAmJiBzZXR0aW5ncy5nZXQoXCJtaW5pbWFsLnVzZXJJY29uc1wiLCBjb25zdGFudHMuU2V0dGluZ3MuRGVmYXVsdFNldHRpbmdzLk1pbmltYWxpc3RWaWV3LnVzZXJJY29ucykgJiYgPFVzZXJTdW1tYXJ5SXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9e1VTRVJfSUNPTl9TSVpFfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJzPXtwaW5uZWRETVMuZ2V0VXNlcnMoY2F0ZWdvcnkpLm1hcCh1c2VySWQgPT4gVXNlcnMuZ2V0VXNlcih1c2VySWQpKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtCb29sZWFuKHBpbmdDb3VudCkgJiYgPE51bWJlckJhZGdlIGNvdW50PXtwaW5nQ291bnR9IC8+fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2Pn1cclxuICAgICAgICA8L1BvcG91dD5cclxuICAgIDwvPlxyXG59IiwiaW1wb3J0IHsgUmVhY3QsIENvbnRleHRNZW51IGFzIENvbnRleHRNZW51SGFuZGxlciB9IGZyb20gXCJpdHRhaS93ZWJwYWNrXCJcclxuaW1wb3J0ICogYXMgd2VicGFjayBmcm9tIFwiaXR0YWkvd2VicGFja1wiXHJcbmltcG9ydCB7IENvbnRleHRNZW51LCBGbGV4LCBEaXNjb3JkSWNvbiB9IGZyb20gXCJpdHRhaS9jb21wb25lbnRzXCJcclxuaW1wb3J0IHsgVXNlcnMgfSBmcm9tIFwiaXR0YWkvc3RvcmVzXCJcclxuaW1wb3J0IHBpbm5lZERNUyBmcm9tIFwiLi4vLi4vaGFuZGxlcnMvcGlubmVkRE1TXCJcclxuaW1wb3J0IHsgVXNlcklEIH0gZnJvbSBcIml0dGFpXCJcclxuaW1wb3J0IG9wZW5DYXRlZ29yeVNldHRpbmdzIGZyb20gXCIuLi8uLi91dGlscy9vcGVuQ2F0ZWdvcnlTZXR0aW5nc1wiXHJcbi8vQHRzLWlnbm9yZVxyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL0FkZFVzZXIuc2Nzc1wiXHJcblxyXG5jb25zdCBVc2VyU3VtbWFyeUl0ZW0gPSB3ZWJwYWNrLmZpbmRCeURpc3BsYXlOYW1lKFwiVXNlclN1bW1hcnlJdGVtXCIpXHJcblxyXG5jb25zdCBVU0VSX0lDT05fU0laRSA9IDE2XHJcbmNvbnN0IE1BWF9VU0VSU19ESVNQTEFZID0gNFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHByb3BzOiB7dXNlcklkOiBVc2VySUR9KSB7XHJcbiAgICByZXR1cm4gPENvbnRleHRNZW51IG5hdklkPXtcInBpbi11c2VyXCJ9IG9uQ2xvc2U9e0NvbnRleHRNZW51SGFuZGxlci5jbG9zZUNvbnRleHRNZW51fT5cclxuICAgICAgICA8Q29udGV4dE1lbnUuTWVudUdyb3VwIGxhYmVsPVwiQWRkIHRvIGNhdGVnb3J5XCI+XHJcbiAgICAgICAgICAgIHtwaW5uZWRETVMuZ2V0Q2F0ZWdvcmllcygpLm1hcChjYXRlZ29yeSA9PiA8Q29udGV4dE1lbnUuTWVudUl0ZW0gaWQ9e2BjYXRlZ29yeS0ke2NhdGVnb3J5fWB9XHJcbiAgICAgICAgICAgICAgICBsYWJlbD17PEZsZXg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMudGV4dH0gc3R5bGU9e3sgY29sb3I6IHBpbm5lZERNUy5nZXRDb2xvcihjYXRlZ29yeSl9fT57Y2F0ZWdvcnl9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxVc2VyU3VtbWFyeUl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT17VVNFUl9JQ09OX1NJWkV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heD17TUFYX1VTRVJTX0RJU1BMQVl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJzPXtwaW5uZWRETVMuZ2V0VXNlcnMoY2F0ZWdvcnkpLnNvcnQoKCkgPT4gTWF0aC5yYW5kb20oKSAtIDAuNSkubWFwKHVzZXJJZCA9PiBVc2Vycy5nZXRVc2VyKHVzZXJJZCkpfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L0ZsZXg+fVxyXG5cclxuICAgICAgICAgICAgICAgIGFjdGlvbj17KCkgPT4gcGlubmVkRE1TLmFkZFVzZXIoY2F0ZWdvcnksIHByb3BzLnVzZXJJZCl9XHJcbiAgICAgICAgICAgIC8+KX1cclxuICAgICAgICA8L0NvbnRleHRNZW51Lk1lbnVHcm91cD5cclxuICAgICAgICA8Q29udGV4dE1lbnUuTWVudVNlcGFyYXRvciAvPlxyXG4gICAgICAgIDxDb250ZXh0TWVudS5NZW51SXRlbSBpZD1cImNvbmZpZ3VyZVwiXHJcbiAgICAgICAgICAgIGxhYmVsPVwiQ29uZmlndXJlIGNhdGVnb3JpZXNcIlxyXG4gICAgICAgICAgICBpY29uPXsoKSA9PiA8RGlzY29yZEljb24gbmFtZT1cIkdlYXJcIiB0eXBlPVwiY29udGV4dG1lbnVcIi8+fVxyXG4gICAgICAgICAgICBhY3Rpb249e29wZW5DYXRlZ29yeVNldHRpbmdzfVxyXG4gICAgICAgIC8+XHJcbiAgICA8L0NvbnRleHRNZW51PlxyXG59IiwiaW1wb3J0ICogYXMgcGF0Y2hlciBmcm9tIFwiaXR0YWkvcGF0Y2hlclwiXHJcbmltcG9ydCAqIGFzIHdlYnBhY2sgZnJvbSBcIml0dGFpL3dlYnBhY2tcIlxyXG5jb25zdCB7IFJlYWN0IH0gPSB3ZWJwYWNrXHJcbmltcG9ydCB7IENoYW5uZWxzLCBDdXJyZW50Q2hhbm5lbHMgfSBmcm9tIFwiaXR0YWkvc3RvcmVzXCJcclxuaW1wb3J0IHsgZmluZEluUmVhY3RUcmVlLCBzZWFyY2hDbGFzc05hbWVNb2R1bGVzIH0gZnJvbSBcIml0dGFpL3V0aWxpdGllc1wiXHJcbmltcG9ydCB7IERpc2NvcmRJY29uLCBDb250ZXh0TWVudSB9IGZyb20gXCJpdHRhaS9jb21wb25lbnRzXCJcclxuaW1wb3J0ICogYXMgc2V0dGluZ3MgZnJvbSBcIml0dGFpL3NldHRpbmdzXCJcclxuaW1wb3J0IHBpbm5lZERNUywgeyB1c2VMaXN0VXBkYXRlIH0gZnJvbSBcIi4uL2hhbmRsZXJzL3Bpbm5lZERNU1wiXHJcbmltcG9ydCB7IFVzZXJPYmplY3QgfSBmcm9tIFwiaXR0YWlcIjtcclxuaW1wb3J0ICogYXMgY29uc3RhbnRzIGZyb20gXCIuLi9jb25zdGFudHNcIlxyXG5cclxuLy9AdHMtaWdub3JlXHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vZG1idXR0b24uc2Nzc1wiXHJcbmltcG9ydCBqb2luQ2xhc3NlcyBmcm9tIFwiLi4vdXRpbHMvam9pbkNsYXNzZXNcIlxyXG5pbXBvcnQgQWRkVXNlciBmcm9tIFwiLi4vY29tcG9uZW50cy9Db250ZXh0TWVudXMvQWRkVXNlclwiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XHJcbiAgICBwYXRjaGVyLmFmdGVyKFwiRE1CdXR0b25QYXRjaFwiLCB3ZWJwYWNrLmZpbmRCeURpc3BsYXlOYW1lKFwiUHJpdmF0ZUNoYW5uZWxcIikucHJvdG90eXBlLCBcInJlbmRlclwiLCAoXywgcmVzLCBfdGhpcykgPT4ge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHsgX3RoaXMsIHJlcyB9KVxyXG4gICAgICAgIGNvbnN0IHVzZXI6IFVzZXJPYmplY3QgPSBfdGhpcy5wcm9wcy51c2VyXHJcblxyXG4gICAgICAgIGNvbnN0IGlzQWRkZWQgPSBwaW5uZWRETVMuaXNVc2VyQWRkZWQodXNlci5pZClcclxuXHJcbiAgICAgICAgY29uc3Qgb2dDaGlsZHJlbjogRnVuY3Rpb24gPSByZXMucHJvcHMuY2hpbGRyZW5cclxuICAgICAgICBpZihvZ0NoaWxkcmVuID09IG51bGwpIHJldHVyblxyXG4gICAgICAgIHJlcy5wcm9wcy5jaGlsZHJlbiA9IGZ1bmN0aW9uKC4uLmFyZ3M6IGFueSkge1xyXG4gICAgICAgICAgICBjb25zdCByZXQgPSBvZ0NoaWxkcmVuLmFwcGx5KHRoaXMsIGFyZ3MpXHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJldClcclxuXHJcbiAgICAgICAgICAgIHJldC5wcm9wcy5jbGFzc05hbWUgKz0gYCAke3N0eWxlcy5waW5Ib3ZlckhhbmRsZXJ9YFxyXG5cclxuICAgICAgICAgICAgY29uc3QgSW50ZXJhY3RpdmUgPSByZXQucHJvcHMuY2hpbGRyZW4gYXMge3Byb3BzOiB7Y2hpbGRyZW46IFthbnksIGFueV19fVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKHVzZXIgJiYgIXVzZXIuYm90KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjbG9zZUluZGV4ID0gSW50ZXJhY3RpdmUucHJvcHMuY2hpbGRyZW4uZmluZEluZGV4KGUgPT4gZS50eXBlLmRpc3BsYXlOYW1lID09PSBcIkNsb3NlQnV0dG9uXCIpXHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGlzQWRkZWQgJiYgY2xvc2VJbmRleCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBJbnRlcmFjdGl2ZS5wcm9wcy5jaGlsZHJlbltjbG9zZUluZGV4XVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChzZXR0aW5ncy5nZXQoXCJwaW5JY29uXCIsIGNvbnN0YW50cy5TZXR0aW5ncy5EZWZhdWx0U2V0dGluZ3MuUElOX0lDT04pKSB7ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIEludGVyYWN0aXZlLnByb3BzLmNoaWxkcmVuLnNwbGljZSgxLCAwLCA8ZGl2IGNsYXNzTmFtZT17am9pbkNsYXNzZXMoc3R5bGVzLnBpbkJ1dHRvbiwgaXNBZGRlZCA/IHN0eWxlcy5sb25lbHkgOiBcIlwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKENvbnRleHRNZW51KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzQWRkZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwaW5uZWRETVMucmVtb3ZlVXNlcihwaW5uZWRETVMuZ2V0VXNlckNhdGVnb3J5KHVzZXIuaWQpISwgdXNlci5pZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2VicGFjay5Db250ZXh0TWVudS5vcGVuQ29udGV4dE1lbnUoZSwgKCkgPT4gPEFkZFVzZXIgdXNlcklkPXt1c2VyLmlkfS8+KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgeyFpc0FkZGVkID8gPERpc2NvcmRJY29uIG5hbWU9XCJQaW5MYXllclwiIC8+IDogPERpc2NvcmRJY29uIG5hbWU9XCJVbnBpbkxheWVyXCIgLz59XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+KVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIHJldHVybiByZXRcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59IiwiaW1wb3J0ICogYXMgcGF0Y2hlciBmcm9tIFwiaXR0YWkvcGF0Y2hlclwiXHJcbmltcG9ydCAqIGFzIHdlYnBhY2sgZnJvbSBcIml0dGFpL3dlYnBhY2tcIlxyXG5pbXBvcnQgeyBSZWFjdCB9IGZyb20gXCJpdHRhaS93ZWJwYWNrXCJcclxuaW1wb3J0ICogYXMgc2V0dGluZ3MgZnJvbSBcIml0dGFpL3NldHRpbmdzXCJcclxuaW1wb3J0IHsgVXNlcnMsIEFjdGl2aXRpZXMsIFN0YXR1cywgVXNlclNldHRpbmdzIH0gZnJvbSBcIml0dGFpL3N0b3Jlc1wiXHJcbmltcG9ydCB0eXBlIHsgVXNlck9iamVjdCB9IGZyb20gXCJpdHRhaVwiXHJcbmltcG9ydCB7IEJ1dHRvbiwgRGlzY29yZEljb24sIEZsZXgsIFNlYXJjaEJhciwgVGV4dElucHV0LCBUb29sdGlwQ29udGFpbmVyIH0gZnJvbSBcIml0dGFpL2NvbXBvbmVudHNcIlxyXG5pbXBvcnQgcGlubmVkRE1TIGZyb20gXCIuLi9oYW5kbGVycy9waW5uZWRETVNcIlxyXG5pbXBvcnQgb3BlbkNhdGVnb3J5U2V0dGluZ3MgZnJvbSBcIi4uL3V0aWxzL29wZW5DYXRlZ29yeVNldHRpbmdzXCJcclxuaW1wb3J0IGpvaW5DbGFzc2VzIGZyb20gXCIuLi91dGlscy9qb2luQ2xhc3Nlc1wiXHJcbmltcG9ydCBDYXRlZ29yeUNvbnRleHRNZW51IGZyb20gXCIuLi9jb21wb25lbnRzL0NvbnRleHRNZW51cy9DYXRlZ29yeVwiXHJcblxyXG4vLyBzaHVsa2VyIGJveCBtb25zdGVyIC0gZldoaXBcclxuY29uc3QgeyBJdGVtIH0gPSB3ZWJwYWNrLmZpbmRCeVByb3BzKFwiSXRlbVwiKVxyXG5jb25zdCB7IERpdmlkZXIgfSA9IHdlYnBhY2suZmluZChtID0+IG0/LmRlZmF1bHQ/LmRpc3BsYXlOYW1lID09PSBcIkhlYWRlckJhclwiKVxyXG5jb25zdCBQZW9wbGVMaXN0U2VjdGlvbmVkTm9uTGF6eSA9IHdlYnBhY2suZmluZEJ5RGlzcGxheU5hbWUoJ1Blb3BsZUxpc3RTZWN0aW9uZWROb25MYXp5JylcclxuY29uc3QgRnJpZW5kUm93ID0gd2VicGFjay5maW5kQnlEaXNwbGF5TmFtZSgnRnJpZW5kUm93JylcclxuY29uc3QgU2VjdGlvblRpdGxlID0gd2VicGFjay5maW5kQnlEaXNwbGF5TmFtZShcIlNlY3Rpb25UaXRsZVwiKVxyXG5jb25zdCB7IEVtcHR5U3RhdGVJbWFnZSwgZGVmYXVsdDogRW1wdHlTdGF0ZSwgRW1wdHlTdGF0ZVRleHQgfSA9IHdlYnBhY2suZmluZEJ5UHJvcHMoXCJFbXB0eVN0YXRlSW1hZ2VcIilcclxuY29uc3QgeyBpY29uV3JhcHBlciwgY2xpY2thYmxlLCBpY29uIH0gPSB3ZWJwYWNrLmZpbmRCeVByb3BzKFwiY2FyZXRcIiwgXCJjbGlja2FibGVcIilcclxuY29uc3QgeyBidXR0b24gfSA9IHdlYnBhY2suZmluZEJ5UHJvcHMoXCJmcmllbmRzRW1wdHlcIilcclxuY29uc3QgeyBzZWFyY2hCYXIgfSA9IHdlYnBhY2suZmluZEJ5UHJvcHMoXCJlbXB0eVN0YXRlQ29udGFpbmVyXCIpXHJcblxyXG5jb25zdCBJREVOVElGSUVSID0gXCJETUNBVEVHT1JJRVNcIlxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNeXN0ZXJpb3VzT2JqZWN0IHtcclxuICAgIGFjdGl2aXRpZXM6IEFycmF5PGFueT4sXHJcbiAgICBpc01vYmlsZTogYm9vbGVhbixcclxuICAgIGtleTogc3RyaW5nLFxyXG4gICAgbmlja25hbWU6IHN0cmluZyxcclxuICAgIHN0YXR1czogXCJvbmxpbmVcIiB8IFwiZG5kXCIgfCBcImlkbGVcIiB8IFwic3RyZWFtaW5nXCIsXHJcbiAgICB0eXBlOiAxLCAvL3doYXRzIGRpcyB0YmhcclxuICAgIHVzZXI6IFVzZXJPYmplY3QsXHJcbn1cclxuXHJcbi8qXHJcbiAgICBNRVRIT0Q6XHJcbiAgICBUaGUgRnJpZW5kcyBsaXN0IChjYWxsZWQgYXMgXCJQZW9wbGVMaXN0XCIpIHRha2VzIHRyYWNrIG9mIHRoZSB0YWJzIGJ5IGEgSUQgYW5kIHJlbmRlcnMgdGhlIFVJIGJhc2VkIG9uIHRoYXQgSUQuIFRoZSBIZWFkZXJCYXIgZG9lcyB0aGVcclxuICAgIGpvYiBvZiByZW5kZXJpbmcgdGhlIHRhYiBwaWxscyBhbmQgbWFraW5nIHRoZSBmdW5jdGlvbmFsaXR5IG9mIGNoYW5naW5nIHRoZXNlIElEcy4gVGhlIHBpbGxzIGFyZSBtYW51YWxseSBhZGRlZCBieSB0aGUgZGV2ZWxvcGVyLCBhbmRcclxuICAgIHRoZSBjbGljayBldmVudCBoYW5kbGluZyBpcyBkb25lIGJ5IHRoZSBcIkl0ZW1cIiBjb21wb25lbnQsIHdoaWxlLCBhZ2FpbiwgdGhlIEhlYWRlckJhciBjaGFuZ2VzIHRoZSBJRHMuIE5laXRoZXIgdGhlIFBlb3BsZUxpc3QgYW5kIHRoZVxyXG4gICAgSGVhZGVyQmFyIHNwZWNpZmllcyB3aGljaCB0YWJzIHNob3VsZCBleGlzdCBhbmQgd2hvIGlzIHRoZSBpbXBvc3RvciwgbWVhbmluZyB0aGF0IGEgcGlsbCB3aXRoIGEgY3VzdG9tIElEIGNhbiBiZSBwdXNoZWQgYW5kIGV2ZXJ5dGhpbmdcclxuICAgIHdpbGwgZ28gZmluZSBsaWtlIG1hZ2ljLlxyXG4gICAgQnkgZGVmYXVsdCwgaWYgYW4gaW52YWxpZCBJRCBpcyBpbnNlcnRlZCwgUGVvcGxlTGlzdCB3aWxsIHJlbmRlciB0aGUgXCJBbGwgZnJpZW5kc1wiIHRhYiwgYnV0IGl0IHdpbGwgc3RpbGwgaWRlbnRpZnkgYXMgdGhhdCBmYWtlIElELiBcclxuICAgIFRoYXQgbWVhbnMgd2UgY2FuIGRlbGV0ZSB0aGF0IHJlbmRlciBhbmQgcmVwbGFjZSBieSBvdXIgb3duIHJlbmRlcmluZywgd2l0aG91dCBtdWNoIG9mIGEgaXNzdWUuXHJcbiovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcclxuICAgIHBhdGNoZXIuYWZ0ZXIoXCJGcmllbmRzSGVhZGVyUGF0Y2hcIiwgd2VicGFjay5maW5kKG0gPT4gbT8uZGVmYXVsdD8uZGlzcGxheU5hbWUgPT09IFwiSGVhZGVyQmFyQ29udGFpbmVyXCIpLCBcImRlZmF1bHRcIiwgKFtwcm9wc10sIHJlcywgX3RoaXMpID0+IHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhwcm9wcylcclxuICAgICAgICBpZihcclxuICAgICAgICAgICAgQm9vbGVhbihwcm9wcy5jaGFubmVsSWQpIHx8IC8vIGNoYW5uZWxcclxuICAgICAgICAgICAgKCF+cHJvcHMuY2xhc3NOYW1lLmluZGV4T2YoXCJ0aGVtZS1cIikpIC8vbm90IGZyaWVuZHMgbGlzdCB0YWJcclxuICAgICAgICApIHJldHVyblxyXG5cclxuXHJcbiAgICAgICAgY29uc3QgT2dUYWJCYXJDaGlsZHJlbnMgPSBwcm9wcy5jaGlsZHJlblszXS5wcm9wcy5jaGlsZHJlblxyXG4gICAgICAgIGNvbnN0IEFkZEZyaWVuZEJ1dHRvbiA9IE9nVGFiQmFyQ2hpbGRyZW5zW09nVGFiQmFyQ2hpbGRyZW5zLmxlbmd0aCAtIDFdXHJcbiAgICAgICAgZGVsZXRlIE9nVGFiQmFyQ2hpbGRyZW5zW09nVGFiQmFyQ2hpbGRyZW5zLmxlbmd0aCAtIDFdXHJcbiAgICAgICAgY29uc3QgTmV3VGFiQmFyQ2hpbGRyZW5zID0gW11cclxuICAgICAgICBmb3IgKGNvbnN0IGNhdGVnb3J5TmFtZSBvZiBwaW5uZWRETVMuZ2V0Q2F0ZWdvcmllcygpKSB7XHJcbiAgICAgICAgICAgIE5ld1RhYkJhckNoaWxkcmVucy5wdXNoKDxJdGVtXHJcbiAgICAgICAgICAgICAgICBpZD17YCR7SURFTlRJRklFUn0tJHtjYXRlZ29yeU5hbWV9YH1cclxuICAgICAgICAgICAgICAgIGNvbG9yPXtwaW5uZWRETVMuZ2V0Q29sb3IoY2F0ZWdvcnlOYW1lKX1cclxuICAgICAgICAgICAgICAgIG9uQ29udGV4dE1lbnU9eyhlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxEaXZFbGVtZW50LCBNb3VzZUV2ZW50PikgPT4gd2VicGFjay5Db250ZXh0TWVudS5vcGVuQ29udGV4dE1lbnUoZSwgKCkgPT4gPENhdGVnb3J5Q29udGV4dE1lbnUgY2F0ZWdvcnk9e2NhdGVnb3J5TmFtZX0gLz4pfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7Y2F0ZWdvcnlOYW1lfVxyXG4gICAgICAgICAgICA8L0l0ZW0+KVxyXG4gICAgICAgIH1cclxuICAgICAgICBwcm9wcy5jaGlsZHJlblszXS5wcm9wcy5jaGlsZHJlbiA9IFsuLi5PZ1RhYkJhckNoaWxkcmVucywgPERpdmlkZXIgLz4sIC4uLk5ld1RhYkJhckNoaWxkcmVucywgPERpdmlkZXIgLz4sIEFkZEZyaWVuZEJ1dHRvbl1cclxuICAgIH0pXHJcblxyXG4gICAgcGF0Y2hlci5hZnRlcihcIkZyaWVuZHNMaXN0UGF0Y2hcIiwgd2VicGFjay5maW5kKG0gPT4gbT8uZGVmYXVsdD8uZGlzcGxheU5hbWUgPT09IFwiUGVvcGxlTGlzdFwiKSwgXCJkZWZhdWx0XCIsIChbcHJvcHNdOiBbeyBzZWN0aW9uRmlsdGVyOiBzdHJpbmd9XSwgcmVzLCBfdGhpcykgPT4ge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHByb3BzLCByZXMsIF90aGlzKVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHJlcy5wcm9wcy5jaGlsZHJlblsyXS5wcm9wcy5zdGF0dXNTZWN0aW9ucylcclxuICAgICAgICBpZiAofnByb3BzLnNlY3Rpb25GaWx0ZXIuaW5kZXhPZihJREVOVElGSUVSKSkge1xyXG4gICAgICAgICAgICBjb25zdCBjYXRlZ29yeSA9IHByb3BzLnNlY3Rpb25GaWx0ZXIuc3Vic3RyaW5nKElERU5USUZJRVIubGVuZ3RoICsgMSlcclxuXHJcbiAgICAgICAgICAgIHJlcy5wcm9wcy5jaGlsZHJlbiA9IDxETUZyaWVuZHNSZW5kZXIgey4uLnsgY2F0ZWdvcnkgfX0ga2V5PXtjYXRlZ29yeX0vPlxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgLy8gZmFpbGVkIGF0dGVtcHQgdG8gdXNlIHRoZSBvZyBzZWFyY2hcclxuICAgIC8vIHBhdGNoZXIuYWZ0ZXIoXCJHZXRTdGF0ZVBhdGNoXCIsIHdlYnBhY2suZmluZEJ5UHJvcHMoXCJSb3dcIiwgXCJSb3dzXCIsIFwiZGVmYXVsdFwiKS5kZWZhdWx0LCBcImdldFN0YXRlXCIsIChbcHJvcHNdLCByZXMsIF90aGlzKSA9PiB7XHJcbiAgICAvLyAgICAgaWYgKHJlcy5zZWN0aW9uID09PSBcIk1FRVBcIikgcmVzLnJvd3MuX3Jvd3MgPSBbe1xyXG4gICAgLy8gICAgICAgICBhY3Rpdml0aWVzOiBBY3Rpdml0aWVzLmdldEFjdGl2aXRpZXMoVXNlcnMuZ2V0Q3VycmVudFVzZXIoKS5pZCksXHJcbiAgICAvLyAgICAgICAgIGFwcGxpY2F0aW9uU3RyZWFtOiBudWxsLFxyXG4gICAgLy8gICAgICAgICBpc01vYmlsZTogVXNlcnMuZ2V0Q3VycmVudFVzZXIoKS5tb2JpbGUsXHJcbiAgICAvLyAgICAgICAgIGtleTogVXNlcnMuZ2V0Q3VycmVudFVzZXIoKS5pZCxcclxuICAgIC8vICAgICAgICAgbmlja25hbWU6IHVuZGVmaW5lZCxcclxuICAgIC8vICAgICAgICAgc3RhdHVzOiBTdGF0dXMuZ2V0U3RhdHVzKFVzZXJzLmdldEN1cnJlbnRVc2VyKCkuaWQpLFxyXG4gICAgLy8gICAgICAgICB0eXBlOiAxLFxyXG4gICAgLy8gICAgICAgICB1c2VyOiBVc2Vycy5nZXRDdXJyZW50VXNlcigpLFxyXG4gICAgLy8gICAgIH1dXHJcbiAgICAvLyAgICAgY29uc29sZS5sb2coeyBwcm9wcywgcmVzIH0pXHJcbiAgICAvLyB9KVxyXG59XHJcblxyXG5pbnRlcmZhY2UgRnJpZW5kc1JlbmRlclByb3BzIHtcclxuICAgIGNhdGVnb3J5OiBzdHJpbmdcclxufVxyXG5jb25zdCBETUZyaWVuZHNSZW5kZXIgPSAoeyBjYXRlZ29yeSB9OiBGcmllbmRzUmVuZGVyUHJvcHMpID0+IHtcclxuICAgIGNvbnN0IFtzZWFyY2gsIHNldFNlYXJjaF0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKVxyXG4gICAgY29uc3QgdXNlcklEcyA9IFJlYWN0LnVzZU1lbW8oKCkgPT4gcGlubmVkRE1TLmdldFVzZXJzKGNhdGVnb3J5KSwgW2NhdGVnb3J5XSlcclxuICAgIGNvbnN0IHNlYXJjaGVkVXNlcklEcyA9IFJlYWN0LnVzZU1lbW8oKCkgPT4gdXNlcklEcy5maWx0ZXIoaWQgPT4gflVzZXJzLmdldFVzZXIoaWQpLnVzZXJuYW1lLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihzZWFyY2gudG9Mb3dlckNhc2UoKSkpLCBbc2VhcmNoXSlcclxuXHJcbiAgICBpZiAodXNlcklEcy5sZW5ndGggIT09IDApIHtcclxuICAgICAgICByZXR1cm4gPD5cclxuICAgICAgICAgICAgPFNlYXJjaEJhclxyXG4gICAgICAgICAgICAgICAgcXVlcnk9e3NlYXJjaH1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtzZXRTZWFyY2h9XHJcbiAgICAgICAgICAgICAgICBvbkNsZWFyPXsoKSA9PiBzZXRTZWFyY2goXCJcIil9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3NlYXJjaEJhcn1cclxuICAgICAgICAgICAgICAgIHNpemU9e1NlYXJjaEJhci5TaXplcy5NRURJVU19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8U2VjdGlvblRpdGxlIHRpdGxlPXs8RmxleD5cclxuICAgICAgICAgICAgICAgICAgICA8YiBzdHlsZT17eyBjb2xvcjogcGlubmVkRE1TLmdldENvbG9yKGNhdGVnb3J5KSwgZmxleEdyb3c6IDEgfX0+e2NhdGVnb3J5fSDigJMge3NlYXJjaGVkVXNlcklEcy5sZW5ndGh9PC9iPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcENvbnRhaW5lciB0ZXh0PVwiQWRkIGEgbmV3IHBlcnNvblwiIHBvc2l0aW9uPVwiYm90dG9tXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtqb2luQ2xhc3NlcyhpY29uV3JhcHBlciwgY2xpY2thYmxlKX0gb25DbGljaz17KCkgPT4gb3BlbkNhdGVnb3J5U2V0dGluZ3MoY2F0ZWdvcnkpfSBzdHlsZT17eyB3aWR0aDogXCIxNnB4XCIsIGhlaWdodDogXCIxNnB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGlzY29yZEljb24gbmFtZT1cIlBlcnNvbkFkZFwiIHR5cGU9XCJub25lXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPC9GbGV4Pn0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICB7c2VhcmNoZWRVc2VySURzLmxlbmd0aCAhPT0gMCA/IDxQZW9wbGVMaXN0U2VjdGlvbmVkTm9uTGF6eVxyXG4gICAgICAgICAgICAgICAgcmVuZGVyUm93PXsobXlzdGVyaW91c09iamVjdDogTXlzdGVyaW91c09iamVjdCkgPT4gPEZyaWVuZFJvdyB7Li4uT2JqZWN0LmFzc2lnbih7fSwgbXlzdGVyaW91c09iamVjdCwge2lzRm9jdXNlZDogdHJ1ZX0pfSAvPn1cclxuICAgICAgICAgICAgICAgIC8vIHNlYXJjaFF1ZXJ5PXtcImtcIn0gLy9mb3Igc29tZSByZWFzb24gdGhpcyBkb2VzIG5vdCB3b3JrXHJcbiAgICAgICAgICAgICAgICBzdGF0dXNTZWN0aW9ucz17W1xyXG4gICAgICAgICAgICAgICAgICAgIHNlYXJjaGVkVXNlcklEcy5tYXAodXNlcklkID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdXNlciA9IFVzZXJzLmdldFVzZXIodXNlcklkKSBhcyBVc2VyT2JqZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG1vY2tlZCBpZGVudGlmaWVyLiBhY2NvcmRpbmcgdG8gZGV2aWxicm8gKHllcywgaXZlIGFjdHVhbGx5IGxpc3RlbmVkIHRvIGhpbSkgdGhlIGZyaWVuZHMgbGlzdCBmZXRjaGVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpdml0aWVzOiBBY3Rpdml0aWVzLmdldEFjdGl2aXRpZXModXNlci5pZCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc01vYmlsZTogdXNlci5tb2JpbGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IHVzZXIuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuaWNrbmFtZTogdXNlci51c2VybmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1czogU3RhdHVzLmdldFN0YXR1cyh1c2VyLmlkKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IDEsIC8vd2hhdHMgZGlzIHRiaFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcjogdXNlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBhcyBNeXN0ZXJpb3VzT2JqZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgIC8+IDogPEVtcHR5U3RhdGUgdGhlbWU9e1VzZXJTZXR0aW5ncy50aGVtZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEVtcHR5U3RhdGVJbWFnZSB7Li4ue1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIndpZHRoXCI6IDQyMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJoZWlnaHRcIjogMjE4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpZ2h0U3JjXCI6IFwiL2Fzc2V0cy9mZDg3OWEyODgwN2I2NmIzOGQ1NGU3ZGI2ZWExOGE2OS5zdmdcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXJrU3JjXCI6IFwiL2Fzc2V0cy9iMzZkZTk4MGIxNzRkN2I3OThjODlmMzVjMTE2ZTVjNi5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEVtcHR5U3RhdGVUZXh0IG5vdGU9ezw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFd1bXB1cyBsb29rZWQgYnV0IGNvdWxkbid0IGZpbmQgYW55b25lIHdpdGggdGhhdCBuYW1lIGluIHRoaXMgY2F0ZWdvcnkuXHJcbiAgICAgICAgICAgICAgICAgICAgPC8+fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gb3BlbkNhdGVnb3J5U2V0dGluZ3MoY2F0ZWdvcnkpfSBjbGFzc05hbWU9e2J1dHRvbn0+QWRkIGEgcGVyc29uIHdpdGggdGhhdCBuYW1lPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvRW1wdHlTdGF0ZT59XHJcbiAgICAgICAgPC8+XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiA8PlxyXG4gICAgICAgICAgICA8RW1wdHlTdGF0ZSB0aGVtZT17VXNlclNldHRpbmdzLnRoZW1lfT5cclxuICAgICAgICAgICAgICAgIDxFbXB0eVN0YXRlSW1hZ2Ugey4uLntcclxuICAgICAgICAgICAgICAgICAgICBcIndpZHRoXCI6IDQxNSxcclxuICAgICAgICAgICAgICAgICAgICBcImhlaWdodFwiOiAyMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJsaWdodFNyY1wiOiBcIi9hc3NldHMvMzZjOWEyZmI3ZDA1OTNhNTgxYTkyMzczMTIxYzI4NDguc3ZnXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJkYXJrU3JjXCI6IFwiL2Fzc2V0cy9iMzZjNzA1Zjc5MGRhZDI1Mzk4MWYxODkzMDg1MDE1YS5zdmdcIlxyXG4gICAgICAgICAgICAgICAgfX0gLz5cclxuICAgICAgICAgICAgICAgIDxFbXB0eVN0YXRlVGV4dCBub3RlPXs8PlxyXG4gICAgICAgICAgICAgICAgICAgIEFwcGFyZW50bHkgdGhpcyBjYXRlZ29yeSBkb2VzIG9ubHkgaGF2ZSBXdW1wdXMuXHJcbiAgICAgICAgICAgICAgICA8Lz59IC8+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IG9wZW5DYXRlZ29yeVNldHRpbmdzKGNhdGVnb3J5KX0gY2xhc3NOYW1lPXtidXR0b259PkFkZCBwZXJzb248L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9FbXB0eVN0YXRlPlxyXG4gICAgICAgIDwvPlxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgQ2hhbm5lbElEIH0gZnJvbSBcIml0dGFpXCJcclxuaW1wb3J0IHsgQ29sb3JVdGlscyB9IGZyb20gXCJpdHRhaS93ZWJwYWNrXCJcclxuaW1wb3J0IHsgQ2hhbm5lbHMsIFVzZXJzIH0gZnJvbSBcIml0dGFpL3N0b3Jlc1wiXHJcbmltcG9ydCB7IFBpbm5lZERNUyB9IGZyb20gXCIuLi90eXBlc1wiXHJcblxyXG5pbnRlcmZhY2UgREJDYXRlZ29yeSB7XHJcbiAgICBjb2xsYXBzZWQ6IGJvb2xlYW5cclxuICAgIGNvbG9yOiBbbnVtYmVyLCBudW1iZXIsIG51bWJlciwgbnVtYmVyXVxyXG4gICAgZG1zOiBDaGFubmVsSURbXVxyXG4gICAgaWQ6IHN0cmluZ1xyXG4gICAgbmFtZTogc3RyaW5nXHJcbiAgICBwb3M6IG51bWJlclxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZnJvbURldmlsYnJvUGluRE1zID0gKCkgPT4ge1xyXG4gICAgLy9AdHMtaWdub3JlXHJcbiAgICBjb25zdCBEZXZpbGJyb1BpbkRNc0RhdGEgPSBnbG9iYWxUaGlzLkJkQXBpLmdldERhdGEoXCJQaW5ETXNcIiwgXCJhbGxcIilcclxuICAgIGNvbnN0IGNoYW5uZWxMaXN0ID0gRGV2aWxicm9QaW5ETXNEYXRhLnBpbm5lZFtVc2Vycy5nZXRDdXJyZW50VXNlcigpLmlkXS5jaGFubmVsTGlzdFxyXG4gICAgY29uc29sZS5sb2coT2JqZWN0LnZhbHVlcyhjaGFubmVsTGlzdCkpXHJcbiAgICBsZXQgY2F0ZWdvcnk6IFBpbm5lZERNUyA9IHt9XHJcbiAgICBmb3IgKGNvbnN0IGRiQ2F0ZWdvcnkgb2YgT2JqZWN0LnZhbHVlcyhjaGFubmVsTGlzdCkgYXMgREJDYXRlZ29yeVtdKSB7XHJcbiAgICAgICAgY29uc3QgdXNlcklEcyA9IGRiQ2F0ZWdvcnkuZG1zXHJcbiAgICAgICAgICAgIC5maWx0ZXIoY0lkID0+IENoYW5uZWxzLmdldENoYW5uZWwoY0lkKT8udHlwZSA9PT0gMSkgLy90aGUgPyBpcyB0byBpZ25vcmUgaW52YWxpZCBJRHNcclxuICAgICAgICAgICAgLm1hcChjSWQgPT4gQ2hhbm5lbHMuZ2V0Q2hhbm5lbChjSWQpLnJlY2lwaWVudHNbMF0pXHJcbiAgICAgICAgaWYodXNlcklEcy5sZW5ndGggIT09IDApIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnlbZGJDYXRlZ29yeS5uYW1lXSA9IHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBDb2xvclV0aWxzLmludDJoZXgoQ29sb3JVdGlscy5yZ2IyaW50KGByZ2JhKCR7ZGJDYXRlZ29yeS5jb2xvclswXX0sICR7ZGJDYXRlZ29yeS5jb2xvclsxXX0sICR7ZGJDYXRlZ29yeS5jb2xvclsyXX0sIDEpYCkpLFxyXG4gICAgICAgICAgICAgICAgdXNlcnM6IHVzZXJJRHMsXHJcbiAgICAgICAgICAgICAgICBzaG93OiAhZGJDYXRlZ29yeS5jb2xsYXBzZWRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBjYXRlZ29yeVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgaGFzVGhlbUVuYWJsZWQgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHBpbkRNczogQm9vbGVhbigoZ2xvYmFsVGhpcyBhcyBhbnkpLkJkQXBpKSAmJiBCb29sZWFuKChnbG9iYWxUaGlzIGFzIGFueSkuQmRBcGkuUGx1Z2lucy5pc0VuYWJsZWQoXCJQaW5ETXNcIikpXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBoYXNBbnlPZlRoZVBsdWdpbnMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCByZXN1bHRzID0gaGFzVGhlbUVuYWJsZWQoKVxyXG4gICAgcmV0dXJuIHJlc3VsdHMucGluRE1zXHJcbn0iLCJpbXBvcnQgKiBhcyB3ZWJwYWNrIGZyb20gXCJpdHRhaS93ZWJwYWNrXCJcclxuaW1wb3J0IHsgUmVhY3QgfSBmcm9tIFwiaXR0YWkvd2VicGFja1wiXHJcbmltcG9ydCB7IE1vZGFsLCBUZXh0LCBIZWFkaW5nLCBCdXR0b24gfSBmcm9tIFwiaXR0YWkvY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgeyBNYXJnaW5zIH0gZnJvbSBcIml0dGFpL2NsYXNzZXNcIjtcclxuaW1wb3J0ICogYXMgSW1wb3J0ZXIgZnJvbSBcIi4uLy4uL2hhbmRsZXJzL2ltcG9ydEZyb21QbHVnaW5cIlxyXG5pbXBvcnQgcGlubmVkRE1TIGZyb20gXCIuLi8uLi9oYW5kbGVycy9waW5uZWRETVNcIjtcclxuXHJcbmNvbnN0IHsgU2xpZGVzLCBzcHJpbmdDb25maWcgfSA9IHdlYnBhY2suZmluZEJ5UHJvcHMoXCJTbGlkZVwiKVxyXG5cclxuY29uc3QgUGFnZXMgPSB7XHJcbiAgICBTV0lUQ0g6IFwic3dpdGNoXCIsXHJcbiAgICBTV0lUQ0hfRE9ORTogXCJzd2l0Y2hEb25lXCJcclxufVxyXG5cclxuY29uc3QgV0lEVEggPSA0MDA7XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMgeyB0cmFuc2l0aW9uU3RhdGU6IDEgfCAyIHwgMywgb25DbG9zZTogKCkgPT4gdm9pZCB9XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lbnVNb2RhbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcywge3BhZ2U6IHN0cmluZ30+IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBQcm9wcyB8IFJlYWRvbmx5PFByb3BzPikge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBwYWdlOiBQYWdlcy5TV0lUQ0gsXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRQYWdlKHBhZ2U6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3BhZ2V9KVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gPE1vZGFsLk1vZGFsUm9vdCBzaXplPXtNb2RhbC5Nb2RhbFNpemUuRFlOQU1JQ30gey4uLnRoaXMucHJvcHN9PlxyXG4gICAgICAgICAgICA8U2xpZGVzXHJcbiAgICAgICAgICAgICAgICBhY3RpdmVTbGlkZT17dGhpcy5zdGF0ZS5wYWdlfVxyXG4gICAgICAgICAgICAgICAgc3ByaW5nQ29uZmlnPXtzcHJpbmdDb25maWd9XHJcbiAgICAgICAgICAgICAgICB3aWR0aD17V0lEVEh9XHJcbiAgICAgICAgICAgICAgICBjaGlsZHJlbj17W1xyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9e1BhZ2VzLlNXSVRDSH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNb2RhbC5Nb2RhbEhlYWRlciBzZXBhcmF0b3I9e2ZhbHNlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxIZWFkaW5nIHZhcmlhbnQ9XCJoZWFkaW5nLW1kL25vcm1hbFwiPlN3aXRjaD88L0hlYWRpbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTW9kYWwuTW9kYWxIZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNb2RhbC5Nb2RhbENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9e01hcmdpbnMubWFyZ2luQm90dG9tMjB9Pkl0IHNlZW1zIHRoYXQgeW91IGhhdmUgdXNlZCBQaW5ETXMgYmVmb3JlLiBEbyB5b3Ugd2FudCB0byBzd2l0Y2ggdGhlIHVzZXIgbGlzdCB0byB0aGlzIHBsdWdpbj88L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTW9kYWwuTW9kYWxDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TW9kYWwuTW9kYWxGb290ZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2FzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnN3aXRjaCgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRQYWdlKFBhZ2VzLlNXSVRDSF9ET05FKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+U3dpdGNoPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNvbG9yPXtCdXR0b24uQ29sb3JzLldISVRFfSBsb29rPXtCdXR0b24uTG9va3MuTElOS30gb25DbGljaz17dGhpcy5wcm9wcy5vbkNsb3NlfT5ObzwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L01vZGFsLk1vZGFsRm9vdGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PixcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPXtQYWdlcy5TV0lUQ0hfRE9ORX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNb2RhbC5Nb2RhbEhlYWRlciBzZXBhcmF0b3I9e2ZhbHNlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxIZWFkaW5nIHZhcmlhbnQ9XCJoZWFkaW5nLW1kL25vcm1hbFwiPkRvbmU8L0hlYWRpbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTW9kYWwuTW9kYWxIZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNb2RhbC5Nb2RhbENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9e01hcmdpbnMubWFyZ2luQm90dG9tMjB9PlRoZSBzd2l0Y2hpbmcgd2FzIGRvbmUgc3VjZXNzZnVsbHkuIFdlIGNhbiBkaXNhYmxlIHRoZW0gaWYgeW91IHdhbnQ8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTW9kYWwuTW9kYWxDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TW9kYWwuTW9kYWxGb290ZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2FzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmRpc2FibGVBbGwoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub25DbG9zZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5EaXNhYmxlPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNvbG9yPXtCdXR0b24uQ29sb3JzLldISVRFfSBsb29rPXtCdXR0b24uTG9va3MuTElOS30gb25DbGljaz17dGhpcy5wcm9wcy5vbkNsb3NlfT5JIGFtIGZpbmU8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Nb2RhbC5Nb2RhbEZvb3Rlcj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9Nb2RhbC5Nb2RhbFJvb3Q+XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgc3dpdGNoKCkge1xyXG4gICAgICAgIGlmIChJbXBvcnRlci5oYXNUaGVtRW5hYmxlZCgpLnBpbkRNcyl7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld1NldHRpbmdzID0gSW1wb3J0ZXIuZnJvbURldmlsYnJvUGluRE1zKClcclxuICAgICAgICAgICAgcGlubmVkRE1TLnNldFJhdyhuZXdTZXR0aW5ncylcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgZGlzYWJsZUFsbCgpIHtcclxuICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICBpZiAoSW1wb3J0ZXIuaGFzVGhlbUVuYWJsZWQoKS5waW5ETXMpIEJkQXBpPy5QbHVnaW5zPy5kaXNhYmxlPy4oXCJQaW5ETXNcIilcclxuICAgIH1cclxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL3R5cGVzLmQudHNcIiAvPlxyXG5cclxuaW1wb3J0IHsgUGx1Z2luIH0gZnJvbSBcIml0dGFpL2VudGl0aWVzXCJcclxuaW1wb3J0ICogYXMgcGF0Y2hlciBmcm9tIFwiaXR0YWkvcGF0Y2hlclwiXHJcbmltcG9ydCB7IHNlYXJjaENsYXNzTmFtZU1vZHVsZXMgfSBmcm9tIFwiaXR0YWkvdXRpbGl0aWVzXCJcclxuaW1wb3J0ICogYXMgd2VicGFjayBmcm9tIFwiaXR0YWkvd2VicGFja1wiXHJcbmltcG9ydCB7IFJlYWN0LCBEaXNwYXRjaGVyLCBNb2RhbEFjdGlvbnMgfSBmcm9tIFwiaXR0YWkvd2VicGFja1wiXHJcbmltcG9ydCAqIGFzIEl0dGFpIGZyb20gXCJpdHRhaVwiXHJcblxyXG5pbXBvcnQgU2V0dGluZ3MgZnJvbSBcIi4vY29tcG9uZW50cy9TZXR0aW5nc1wiXHJcbmltcG9ydCBwYXRjaERtTGlzdCBmcm9tIFwiLi9wYXRjaGVzL2RtbGlzdFwiXHJcbmltcG9ydCBwYXRjaERtQnV0dG9uIGZyb20gXCIuL3BhdGNoZXMvZG1idXR0b25cIlxyXG5pbXBvcnQgcGF0Y2hGcmllbmRzUGFnZSBmcm9tIFwiLi9wYXRjaGVzL2ZyaWVuZHNsaXN0XCJcclxuaW1wb3J0IHBpbm5lZERNUyBmcm9tIFwiLi9oYW5kbGVycy9waW5uZWRETVNcIlxyXG5pbXBvcnQgKiBhcyBjb25zdGFudHMgZnJvbSBcIi4vY29uc3RhbnRzXCJcclxuaW1wb3J0IFNldHRpbmdzU3dpdGNoZXIgZnJvbSBcIi4vY29tcG9uZW50cy9TZXR0aW5nc1N3aXRjaGVyXCJcclxuaW1wb3J0IHsgaGFzQW55T2ZUaGVQbHVnaW5zIH0gZnJvbSBcIi4vaGFuZGxlcnMvaW1wb3J0RnJvbVBsdWdpblwiXHJcblxyXG5sZXQgdmlzaWJpbGl0eVN0b3JhZ2U6IHtbY2F0ZWdvcnk6IHN0cmluZ106IGJvb2xlYW59ID0ge31cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERNRm9sZGVycyBleHRlbmRzIFBsdWdpbiB7XHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLnNldFNldHRpbmdzUGFuZWwoKCkgPT4gPFNldHRpbmdzIC8+KVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vQHRzLWlnbm9yZSBpbnRlcm5hbCB1c2FnZSBvbmx5XHJcbiAgICAgICAgZ2xvYmFsVGhpcy5JdHRhaSA9IEl0dGFpXHJcbiAgICAgICAgXHJcbiAgICAgICAgcGF0Y2hEbUxpc3QoKVxyXG4gICAgICAgIHBhdGNoRG1CdXR0b24oKVxyXG4gICAgICAgIHBhdGNoRnJpZW5kc1BhZ2UoKVxyXG5cclxuICAgICAgICB0aGlzLm9wZW5TZXR0aW5nc1N3aXRjaGVyKClcclxuXHJcbiAgICAgICAgRGlzcGF0Y2hlci5zdWJzY3JpYmUoXCJTVFJFQU1FUl9NT0RFX1VQREFURVwiLCB0aGlzLm9uU3RyZWFtZXJNb2RlQ2hhbmdlKVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb3BlblNldHRpbmdzU3dpdGNoZXIoKSB7XHJcbiAgICAgICAgaWYoaGFzQW55T2ZUaGVQbHVnaW5zKCkpIE1vZGFsQWN0aW9ucy5vcGVuTW9kYWwoKHByb3BzKSA9PiA8U2V0dGluZ3NTd2l0Y2hlciB7Li4ucHJvcHN9IC8+KVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25TdHJlYW1lck1vZGVDaGFuZ2Uoe3ZhbHVlfToge3ZhbHVlOiBib29sZWFufSkge1xyXG4gICAgICAgIGlmICh0aGlzLnNldHRpbmdzLmdldChcInN0cmVhbWVyTW9kZVwiLCBjb25zdGFudHMuU2V0dGluZ3MuRGVmYXVsdFNldHRpbmdzLlNUUkVBTUVSX01PREUpKVxyXG4gICAgICAgIHBpbm5lZERNUy5nZXRDYXRlZ29yaWVzKCkuZm9yRWFjaChjYXRlZ29yeSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgdmlzaWJpbGl0eVN0b3JhZ2VbY2F0ZWdvcnldID0gcGlubmVkRE1TLmdldFZpc2liaWxpdHkoY2F0ZWdvcnkpXHJcbiAgICAgICAgICAgICAgICBwaW5uZWRETVMuc2V0VmlzaWJpbGl0eShjYXRlZ29yeSwgZmFsc2UpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBwaW5uZWRETVMuc2V0VmlzaWJpbGl0eShjYXRlZ29yeSwgdmlzaWJpbGl0eVN0b3JhZ2VbY2F0ZWdvcnldID8/IGZhbHNlKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICBEaXNwYXRjaGVyLmRpcnR5RGlzcGF0Y2goeyB0eXBlOiBjb25zdGFudHMuRElTUEFUQ0hFUl9QSU5ETVNfQ0hBTkdFX0xJU1QgfSlcclxuICAgIH1cclxuXHJcbiAgICBzdG9wKCkge1xyXG4gICAgICAgIHBhdGNoZXIudW5wYXRjaEFsbCgpXHJcbiAgICAgICAgRGlzcGF0Y2hlci51bnN1YnNjcmliZShcIlNUUkVBTUVSX01PREVfVVBEQVRFXCIsIHRoaXMub25TdHJlYW1lck1vZGVDaGFuZ2UpXHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IEJEUGx1Z2luIGZyb20gXCIuLi9lbnRpdGllcy9CRFBsdWdpblwiO1xyXG5pbXBvcnQgR01QbHVnaW4gZnJvbSBcIi4uL2VudGl0aWVzL0dNUGx1Z2luXCI7XHJcbmltcG9ydCBQQ3YyUGx1Z2luIGZyb20gXCIuLi9lbnRpdGllcy9QQ3YyUGx1Z2luXCI7XHJcbmltcG9ydCB7IHNldEluc3RhbmNlIH0gZnJvbSBcIi4uL3NldHRpbmdzXCI7XHJcbmltcG9ydCAqIGFzIENoYW5nZWxvZ0hhbmRsZXIgZnJvbSBcIi4uL2NoYW5nZWxvZ1wiO1xyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCBwbHVnaW5DbGFzcyBmcm9tIFwiQGl0dGFpL3BsdWdpblwiO1xyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCAqIGFzIGNvbmZpZyBmcm9tIFwiQGl0dGFpL2NvbmZpZ1wiO1xyXG5pbXBvcnQgeyB1bnBhdGNoQWxsIH0gZnJvbSBcIi4uL3BhdGNoZXJcIjtcclxuaW1wb3J0IHsgbG9hZERldlBsdWdpbiwgbG9hZERldlNlcnZlciB9IGZyb20gXCIuLi9kZXZjbGllbnRcIjtcclxuaWYgKHByb2Nlc3MuZW52LkRFVl9NT0RFID09IFwidHJ1ZVwiKSBsb2FkRGV2U2VydmVyKCk7XHJcblxyXG5sZXQgSXR0YWlQbHVnaW4gPSBjbGFzcyBJdHRhaVBsdWdpbiBleHRlbmRzICgoKSA9PiB7XHJcbiAgICAvLyBzd2l0Y2ggKHByb2Nlc3MuZW52LkNMSUVOVF9NT0QpIHtcclxuICAgIC8vICAgICBjYXNlIFwicG93ZXJjb3JkdjJcIjpcclxuICAgIC8vICAgICAgICAgcmV0dXJuIFBDdjJQbHVnaW5cclxuICAgIC8vICAgICBjYXNlIFwiYmV0dGVyZGlzY29yZFwiOlxyXG4gICAgLy8gICAgICAgICByZXR1cm4gQkRQbHVnaW5cclxuICAgIC8vICAgICBjYXNlIFwiZ29vc2Vtb2RcIjpcclxuICAgIC8vICAgICAgICAgcmV0dXJuIEdNUGx1Z2luXHJcbiAgICAvLyAgICAgZGVmYXVsdDpcclxuICAgIC8vICAgICAgICAgcmV0dXJuIGNsYXNzIFBsdWdpbiB7fTtcclxuICAgIC8vIH1cclxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuQ0xJRU5UX01PRCA9PSBcInBvd2VyY29yZHYyXCIpIHJldHVybiBQQ3YyUGx1Z2luXHJcbiAgICAgICAgZWxzZSBpZiAocHJvY2Vzcy5lbnYuQ0xJRU5UX01PRCA9PSBcImJldHRlcmRpc2NvcmRcIikgcmV0dXJuIEJEUGx1Z2luXHJcbiAgICAgICAgZWxzZSBpZiAocHJvY2Vzcy5lbnYuQ0xJRU5UX01PRCA9PSBcImdvb3NlbW9kXCIpIHJldHVybiBHTVBsdWdpblxyXG4gICAgICAgIHJldHVybiBjbGFzcyBQbHVnaW4ge31cclxufSkoKSB7XHJcbiAgICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XHJcbiAgICAgICAgc3VwZXIoLi4uYXJncyk7XHJcbiAgICAgICAgc2V0SW5zdGFuY2UodGhpcy5fX2l0dGFpSW50ZXJuYWxzKVxyXG4gICAgICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgcGx1Z2luQ2xhc3MoKTtcclxuICAgICAgICB0aGlzLmZyaWVuZGx5TmFtZSA9IHRoaXMuaW5zdGFuY2UuZnJpZW5kbHlOYW1lO1xyXG4gICAgICAgIHRoaXMuaW5zdGFuY2UuX19pdHRhaUludGVybmFsUGx1Z2luID0gdGhpcztcclxuICAgICAgICAvLyBnbG9iYWxUaGlzW1wiaXR0YWlcIiArIHRoaXMuZnJpZW5kbHlOYW1lLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvIC9nLCBcIlwiKV0gPSBpdHRhaTtcclxuICAgICAgICAvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBzdHlsZVtpdHRhaV1bcGx1Z2luPVwiJHttYW5pZmVzdC5uYW1lLnJlcGxhY2UoLyAvZywgXCJcIil9XCJdYCk/LmZvckVhY2goKGU6IEhUTUxTdHlsZUVsZW1lbnQpID0+IHtcclxuICAgICAgICAvLyAgICAgdGhpcy5jYWNoZWRDc3MucHVzaChlLmlubmVyVGV4dCk7XHJcbiAgICAgICAgLy8gICAgIGUucmVtb3ZlKCk7XHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFzU2V0dGluZ3NQYW5lbCA9IGZhbHNlO1xyXG4gICAgY2FjaGVkQ3NzID0gW107XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgLy8gdGhpcy5jYWNoZWRDc3MuZm9yRWFjaCgoZSwgaykgPT4ge1xyXG4gICAgICAgICAgICAvLyAgICAgY29uc3QgZWxlbSA9IE9iamVjdC5hc3NpZ24oZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpLCB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgaW5uZXJUZXh0OiBlXHJcbiAgICAgICAgICAgIC8vICAgICB9KVxyXG4gICAgICAgICAgICAvLyAgICAgZWxlbS5zZXRBdHRyaWJ1dGUoXCJpdHRhaVwiLCBcInRydWVcIik7XHJcbiAgICAgICAgICAgIC8vICAgICBlbGVtLnNldEF0dHJpYnV0ZShcInBsdWdpblwiLCBtYW5pZmVzdC5uYW1lLnJlcGxhY2UoLyAvZywgXCJcIikpO1xyXG4gICAgICAgICAgICAvLyAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChlbGVtKTtcclxuICAgICAgICAgICAgLy8gICAgIGRlbGV0ZSB0aGlzLmNhY2hlZENzc1trXTtcclxuICAgICAgICAgICAgLy8gfSlcclxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52LkhBU19DSEFOR0VMT0cgPT0gXCJ0cnVlXCIgJiYgQm9vbGVhbihjb25maWcuY2hhbmdlbG9nKSAmJiAhQ2hhbmdlbG9nSGFuZGxlci5oYXNTZWVuQ2hhbmdlbG9nKCkpIHtcclxuICAgICAgICAgICAgICAgIENoYW5nZWxvZ0hhbmRsZXIuc2V0U2VlbkNoYW5nZWxvZyh0cnVlKVxyXG4gICAgICAgICAgICAgICAgQ2hhbmdlbG9nSGFuZGxlci5vcGVuQ2hhbmdlbG9nTW9kYWwoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlLnN0YXJ0KCk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxyXG4gICAgICAgICAgICB0aHJvdyBlcnJcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RvcCgpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXMgPSB0aGlzLmluc3RhbmNlLnN0b3AoKTtcclxuICAgICAgICAgICAgdW5wYXRjaEFsbCgpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5oYXNTZXR0aW5nc1BhbmVsKSB0aGlzLnJlbW92ZVNldHRpbmdzUGFuZWwoKTtcclxuICAgICAgICAgICAgLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgc3R5bGVbaXR0YWldW3BsdWdpbj1cIiR7bWFuaWZlc3QubmFtZS5yZXBsYWNlKC8gL2csIFwiXCIpfVwiXWApPy5mb3JFYWNoKGUgPT4ge1xyXG4gICAgICAgICAgICAvLyAgICAgdGhpcy5jYWNoZWRDc3MucHVzaChlLmlubmVyVGV4dCk7XHJcbiAgICAgICAgICAgIC8vICAgICBlLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAvLyB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcztcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpXHJcbiAgICAgICAgICAgIHRocm93IGVyclxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZXRTZXR0aW5nc1BhbmVsKGNvbXBvbmVudCkge1xyXG4gICAgICAgIHRoaXMuaGFzU2V0dGluZ3NQYW5lbCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5fX2l0dGFpSW50ZXJuYWxzLnNldFNldHRpbmdzUGFuZWwoY29tcG9uZW50KTtcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVTZXR0aW5nc1BhbmVsKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmhhc1NldHRpbmdzUGFuZWwpIHtcclxuICAgICAgICAgICAgdGhpcy5oYXNTZXR0aW5nc1BhbmVsID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuX19pdHRhaUludGVybmFscy5yZW1vdmVTZXR0aW5nc1BhbmVsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmlmIChwcm9jZXNzLmVudi5DTElFTlRfTU9EID09PSBcImdvb3NlbW9kXCIpIHtcclxuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IEl0dGFpUGx1Z2luKCk7XHJcbiAgICBjb25zdCBoYW5kbGVycyA9IHtnb29zZW1vZEhhbmRsZXJzOiBpbnN0YW5jZS5nb29zZW1vZEhhbmRsZXJzfVxyXG4gICAgaWYgKHByb2Nlc3MuZW52LkRFVl9NT0RFID09IFwidHJ1ZVwiKSB7XHJcbiAgICAgICAgbG9hZERldlBsdWdpbihoYW5kbGVycylcclxuICAgIH1cclxuICAgIC8vIEB0cy1pZ25vcmVcclxuICAgIEl0dGFpUGx1Z2luID0gaGFuZGxlcnM7XHJcbn1cclxuaWYgKHByb2Nlc3MuZW52LkRFVl9NT0RFID09PSBcInRydWVcIiAmJiBwcm9jZXNzLmVudi5DTElFTlRfTU9EICE9PSBcImdvb3NlbW9kXCIpIHtcclxuICAgIGxvYWREZXZQbHVnaW4oSXR0YWlQbHVnaW4pXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEl0dGFpUGx1Z2luO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJGbHV4RGlzcGF0Y2hlciIsIkNvbnRleHRNZW51IiwiX19kZWZQcm9wIiwiX19kZWZOb3JtYWxQcm9wIiwiX19wdWJsaWNGaWVsZCIsIm1hbmlmZXN0IiwiZ2V0QWxsIiwiY2xhc3NlcyIsIk1hcmdpbnMiLCJDYXRlZ29yeSIsIkNvbG9yUGlja2VyIiwicmFuZG9tU3RyaW5nIiwiZGlzY29yZEdldE1lc3NhZ2VzIiwiZGlzY29yZEdldE1lc3NhZ2UiLCJVc2VyIiwiam9pbkNsYXNzZXMiLCJzZXR0aW5ncy5nZXQiLCJzZXQiLCJzZXR0aW5ncy5zZXQiLCJjb25maWcubWFuaWZlc3QiLCJsb2dnZXIuZXJyb3IiLCJwYXRjaGVyLmFmdGVyIiwiVG9hc3QiLCJzdHlsZXMiLCJ3ZWJwYWNrLmZpbmRCeVByb3BzIiwiY29uc3RhbnRzLlNldHRpbmdzIiwiY2F0ZWdvcnlTdHlsZXMiLCJMaXN0U2VjdGlvbkl0ZW0iLCJ3ZWJwYWNrLmZpbmRCeURpc3BsYXlOYW1lIiwiRW1wdHlTdGF0ZUltYWdlIiwiRW1wdHlTdGF0ZSIsIkVtcHR5U3RhdGVUZXh0IiwiY29uc3RhbnRzLkRJU1BBVENIRVJfUElORE1TX0NIQU5HRV9MSVNUIiwic2V0dGluZ3MuZ2V0QWxsIiwidG9hc3Quc2hvdyIsInNldHRpbmdzLnJlc2V0Iiwic2V0dGluZ3Muc2V0QWxsIiwiQ29udGV4dE1lbnVIYW5kbGVyIiwiVXNlclN1bW1hcnlJdGVtIiwiVVNFUl9JQ09OX1NJWkUiLCJ3ZWJwYWNrLmZpbmQiLCJ3ZWJwYWNrLkNvbnRleHRNZW51IiwiSW1wb3J0ZXIuaGFzVGhlbUVuYWJsZWQiLCJJbXBvcnRlci5mcm9tRGV2aWxicm9QaW5ETXMiLCJTZXR0aW5nc1N3aXRjaGVyIiwicGF0Y2hlci51bnBhdGNoQWxsIiwicGx1Z2luQ2xhc3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBQUEsSUFBSSxhQUFhLEdBQUcsQ0FBQyxNQUFNO0lBQzNCLEVBS0ksT0FBTyxVQUFVLENBQUMsS0FBSyxJQUFJLEtBQUEsQ0FBQTtJQUMvQixDQUFDLEdBQUcsQ0FBQztJQUNFLFNBQU0sSUFBQSxDQUFBLE1BQUEsRUFBdUI7SUFDcEMsRUFPQyxPQUFBLGFBQUEsQ0FBQSxVQUFBLENBQUEsTUFBQSxDQUFBLENBQUE7SUFDRCxDQUFDO0lBQ00sU0FBQyxPQUFzQixDQUFDLE1BQU0sRUFBRTtJQUN2QyxFQUtJLE9BQU8sYUFBYSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBQ0EsU0FBQSxXQUFBLENBQUEsR0FBQSxLQUFBLEVBQUE7SUFDRCxFQUFFLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFFLENBQUEsQ0FBQSxLQUFBLEtBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQTtJQUMzQyxDQUFDO0lBQ0MsU0FBQSxjQUFBLENBQUEsR0FBQSxLQUFBLEVBQUE7SUFDRixFQUFDLE9BQUEsT0FBQSxDQUFBLENBQUEsQ0FBQSxL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LENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLFdBQVcsRUFBRSxPQUFPLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsUUFBUSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOzs7Ozs7O0lDRXR0QixTQUFTLFlBQVksQ0FBQztJQUNyQyxFQUFFLFFBQVE7SUFDVixDQUFDLEVBQUU7SUFDSCxFQUFFLHVCQUF1QnRCLE9BQUssQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFO0lBQ3BELElBQUksU0FBUyxFQUFFLE1BQU0sQ0FBQyxLQUFLO0lBQzNCLEdBQUcsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUNmOztJQ0pBLE1BQU0sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLEdBQUcsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2xELE1BQU0sSUFBSSxHQUFHLENBQUMsSUFBSSxFQUFFLE9BQU8sS0FBSztJQUN2QyxFQUFFLE1BQU0sT0FBTyxHQUFHLE9BQU8sRUFBRSxFQUFFLElBQUksWUFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2xELEVBQUUsU0FBUyxDQUFDO0lBQ1osSUFBSSxFQUFFLEVBQUUsT0FBTztJQUNmLElBQUksT0FBTyxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLE9BQU8sRUFBRTtJQUN4QyxNQUFNLFFBQVEsRUFBRSxTQUFTLENBQUMsTUFBTTtJQUNoQyxNQUFNLFNBQVMsRUFBRSxPQUFPLElBQUksS0FBSyxVQUFVLG1CQUFtQkEsT0FBSyxDQUFDLGFBQWEsQ0FBQ3VCLFlBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLEdBQUcsSUFBSSxFQUFFO0lBQzdHLEtBQUssQ0FBQztJQUNOLEdBQUcsQ0FBQyxDQUFDO0lBQ0wsRUFBRSxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDLENBQUM7SUFDSyxNQUFNLEdBQUcsR0FBRyxDQUFDLEVBQUUsS0FBSyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDakMsTUFBTSxZQUFZLEdBQUdBLFlBQUssQ0FBQztJQUMzQixNQUFNLFNBQVMsR0FBRztJQUN6QixFQUFFLEdBQUcsRUFBRSxDQUFDO0lBQ1IsRUFBRSxNQUFNLEVBQUUsQ0FBQztJQUNYLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNuQk0sTUFBTSxNQUFNLEdBQUcsTUFBTTtJQUM1QixFQUFFLE9BQU9OLEdBQVksQ0FBQyxrQkFBa0IsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUM5QyxDQUFDLENBQUM7SUFDSyxNQUFNLGFBQWEsR0FBRyxNQUFNO0lBQ25DLEVBQUUsTUFBTSxnQkFBZ0IsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFDakQsRUFBRSxPQUFPLGdCQUFnQixDQUFDO0lBQzFCLENBQUMsQ0FBQztJQUNLLE1BQU0sV0FBVyxHQUFHLENBQUMsUUFBUSxLQUFLO0lBQ3pDLEVBQUUsT0FBTyxNQUFNLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM1QixDQUFDLENBQUM7SUFDSyxNQUFNLE1BQU0sR0FBRyxDQUFDLE9BQU8sS0FBSztJQUNuQyxFQUFFRSxHQUFZLENBQUMsa0JBQWtCLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDNUMsRUFBRSxVQUFVLENBQUMsYUFBYSxDQUFDLEVBQUUsSUFBSSxFQUFFLG9CQUFvQixFQUFFLENBQUMsQ0FBQztJQUMzRCxDQUFDLENBQUM7SUFDSyxNQUFNLFdBQVcsR0FBRyxDQUFDLFFBQVEsRUFBRSxTQUFTLEdBQUc7SUFDbEQsRUFBRSxLQUFLLEVBQUUsVUFBVSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsa0JBQWtCLENBQUM7SUFDekQsRUFBRSxLQUFLLEVBQUUsRUFBRTtJQUNYLEVBQUUsSUFBSSxFQUFFLElBQUk7SUFDWixDQUFDLEtBQUs7SUFDTixFQUFFLElBQUksZ0JBQWdCLEdBQUcsTUFBTSxFQUFFLENBQUM7SUFDbEMsRUFBRSxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsR0FBRyxTQUFTLENBQUM7SUFDekMsRUFBRSxNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUMzQixDQUFDLENBQUM7SUFDSyxNQUFNLFFBQVEsR0FBRyxDQUFDLFFBQVEsRUFBRSxLQUFLLEtBQUs7SUFDN0MsRUFBRSxJQUFJLGdCQUFnQixHQUFHLE1BQU0sRUFBRSxDQUFDO0lBQ2xDLEVBQUUsSUFBSSxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsSUFBSSxJQUFJO0lBQ3hDLElBQUksTUFBTSxJQUFJLEtBQUssQ0FBQyxDQUFDLFNBQVMsRUFBRSxRQUFRLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztJQUMzRCxFQUFFLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDM0MsRUFBRSxNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUMzQixDQUFDLENBQUM7SUFDSyxNQUFNLFFBQVEsR0FBRyxDQUFDLFFBQVEsS0FBSztJQUN0QyxFQUFFLElBQUksZ0JBQWdCLEdBQUcsTUFBTSxFQUFFLENBQUM7SUFDbEMsRUFBRSxJQUFJLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxJQUFJLElBQUk7SUFDeEMsSUFBSSxNQUFNLElBQUksS0FBSyxDQUFDLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO0lBQzNELEVBQUUsT0FBTyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDMUMsQ0FBQyxDQUFDO0lBQ0ssTUFBTSxhQUFhLEdBQUcsQ0FBQyxRQUFRLEVBQUUsVUFBVSxLQUFLO0lBQ3ZELEVBQUUsSUFBSSxnQkFBZ0IsR0FBRyxNQUFNLEVBQUUsQ0FBQztJQUNsQyxFQUFFLElBQUksZ0JBQWdCLENBQUMsUUFBUSxDQUFDLElBQUksSUFBSTtJQUN4QyxJQUFJLE1BQU0sSUFBSSxLQUFLLENBQUMsQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7SUFDM0QsRUFBRSxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDO0lBQy9DLEVBQUUsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDM0IsQ0FBQyxDQUFDO0lBQ0ssTUFBTSxhQUFhLEdBQUcsQ0FBQyxRQUFRLEtBQUs7SUFDM0MsRUFBRSxJQUFJLGdCQUFnQixHQUFHLE1BQU0sRUFBRSxDQUFDO0lBQ2xDLEVBQUUsSUFBSSxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsSUFBSSxJQUFJO0lBQ3hDLElBQUksTUFBTSxJQUFJLEtBQUssQ0FBQyxDQUFDLFNBQVMsRUFBRSxRQUFRLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztJQUMzRCxFQUFFLE9BQU8sZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQztJQUNqRCxDQUFDLENBQUM7SUFDSyxNQUFNLGNBQWMsR0FBRyxDQUFDLGVBQWUsRUFBRSxlQUFlLEtBQUs7SUFDcEUsRUFBRSxJQUFJLGdCQUFnQixHQUFHLE1BQU0sRUFBRSxDQUFDO0lBQ2xDLEVBQUUsTUFBTSxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsRUFBRSxlQUFlLEVBQUUsTUFBTSxDQUFDLHdCQUF3QixDQUFDLGdCQUFnQixFQUFFLGVBQWUsQ0FBQyxDQUFDLENBQUM7SUFDL0gsRUFBRSxPQUFPLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQzNDLEVBQUUsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDM0IsQ0FBQyxDQUFDO0lBQ0ssTUFBTSxjQUFjLEdBQUcsQ0FBQyxRQUFRLEtBQUs7SUFDNUMsRUFBRSxJQUFJLGdCQUFnQixHQUFHLE1BQU0sRUFBRSxDQUFDO0lBQ2xDLEVBQUUsSUFBSSxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsSUFBSSxJQUFJO0lBQ3hDLElBQUksTUFBTSxJQUFJLEtBQUssQ0FBQyxDQUFDLFNBQVMsRUFBRSxRQUFRLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztJQUMzRCxFQUFFLE9BQU8sZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDcEMsRUFBRSxNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUMzQixDQUFDLENBQUM7SUFDSyxNQUFNLFFBQVEsR0FBRyxDQUFDLFFBQVEsS0FBSztJQUN0QyxFQUFFLE1BQU0sZ0JBQWdCLEdBQUcsTUFBTSxFQUFFLENBQUM7SUFDcEMsRUFBRSxJQUFJLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxJQUFJLElBQUk7SUFDeEMsSUFBSSxNQUFNLElBQUksS0FBSyxDQUFDLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO0lBQzNELEVBQUUsT0FBTyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDMUMsQ0FBQyxDQUFDO0lBQ0ssTUFBTSxXQUFXLEdBQUcsQ0FBQyxRQUFRLEVBQUUsUUFBUSxLQUFLO0lBQ25ELEVBQUUsSUFBSSxnQkFBZ0IsR0FBRyxNQUFNLEVBQUUsQ0FBQztJQUNsQyxFQUFFLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUM7SUFDOUMsRUFBRSxNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUMzQixDQUFDLENBQUM7SUFDSyxNQUFNLE9BQU8sR0FBRyxDQUFDLFFBQVEsRUFBRSxNQUFNLEtBQUs7SUFDN0MsRUFBRSxJQUFJLE9BQU8sTUFBTSxLQUFLLFFBQVE7SUFDaEMsSUFBSSxNQUFNLElBQUksS0FBSyxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztJQUN2QyxFQUFFLElBQUksZ0JBQWdCLEdBQUcsTUFBTSxFQUFFLENBQUM7SUFDbEMsRUFBRSxJQUFJLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxJQUFJLElBQUk7SUFDeEMsSUFBSSxNQUFNLElBQUksS0FBSyxDQUFDLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO0lBQzNELEVBQUUsSUFBSSxRQUFRLEdBQUcsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxDQUFDO0lBQ2xELEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN4QixFQUFFLFdBQVcsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDbEMsQ0FBQyxDQUFDO0lBQ0ssTUFBTSxVQUFVLEdBQUcsQ0FBQyxRQUFRLEVBQUUsTUFBTSxLQUFLO0lBQ2hELEVBQUUsSUFBSSxPQUFPLE1BQU0sS0FBSyxRQUFRO0lBQ2hDLElBQUksTUFBTSxJQUFJLEtBQUssQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7SUFDdkMsRUFBRSxJQUFJLGdCQUFnQixHQUFHLE1BQU0sRUFBRSxDQUFDO0lBQ2xDLEVBQUUsSUFBSSxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsSUFBSSxJQUFJO0lBQ3hDLElBQUksTUFBTSxJQUFJLEtBQUssQ0FBQyxDQUFDLFNBQVMsRUFBRSxRQUFRLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztJQUMzRCxFQUFFLElBQUksUUFBUSxHQUFHLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUNsRCxFQUFFLFFBQVEsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxLQUFLLElBQUksS0FBSyxNQUFNLENBQUMsQ0FBQztJQUN4RCxFQUFFLFdBQVcsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDbEMsQ0FBQyxDQUFDO0lBQ0ssTUFBTSxXQUFXLEdBQUcsQ0FBQyxNQUFNLEtBQUs7SUFDdkMsRUFBRSxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxLQUFLLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUM3RSxDQUFDLENBQUM7SUFDSyxNQUFNLGVBQWUsR0FBRyxDQUFDLE1BQU0sS0FBSztJQUMzQyxFQUFFLE1BQU0sZ0JBQWdCLEdBQUcsTUFBTSxFQUFFLENBQUM7SUFDcEMsRUFBRSxLQUFLLE1BQU0sWUFBWSxJQUFJLGdCQUFnQixFQUFFO0lBQy9DLElBQUksTUFBTSxRQUFRLEdBQUcsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDcEQsSUFBSSxJQUFJLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxLQUFLLElBQUksS0FBSyxNQUFNLENBQUM7SUFDdEQsTUFBTSxPQUFPLFlBQVksQ0FBQztJQUMxQixHQUFHO0lBQ0gsQ0FBQyxDQUFDO0lBQ0ssTUFBTSxhQUFhLEdBQUcsTUFBTTtJQUNuQyxFQUFFLE1BQU0sR0FBRyxXQUFXLENBQUMsR0FBR25CLE9BQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDNUQsRUFBRUEsT0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFNO0lBQ3hCLElBQUksTUFBTSxRQUFRLEdBQUcsTUFBTSxLQUFLLFdBQVcsRUFBRSxDQUFDO0lBQzlDLElBQUksVUFBVSxDQUFDLFNBQVMsQ0FBQyxvQkFBb0IsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUN6RCxJQUFJLE9BQU8sTUFBTSxVQUFVLENBQUMsV0FBVyxDQUFDLG9CQUFvQixFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ3hFLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNULENBQUMsQ0FBQztBQUNGLG9CQUFlO0lBQ2YsRUFBRSxNQUFNO0lBQ1IsRUFBRSxhQUFhO0lBQ2YsRUFBRSxXQUFXO0lBQ2IsRUFBRSxNQUFNO0lBQ1IsRUFBRSxXQUFXO0lBQ2IsRUFBRSxjQUFjO0lBQ2hCLEVBQUUsY0FBYztJQUNoQixFQUFFLFFBQVE7SUFDVixFQUFFLFFBQVE7SUFDVixFQUFFLGFBQWE7SUFDZixFQUFFLGFBQWE7SUFDZixFQUFFLFdBQVc7SUFDYixFQUFFLE9BQU87SUFDVCxFQUFFLFFBQVE7SUFDVixFQUFFLFVBQVU7SUFDWixFQUFFLFdBQVc7SUFDYixFQUFFLGVBQWU7SUFDakIsRUFBRSxhQUFhO0lBQ2YsQ0FBQzs7SUM5SE0sU0FBUyxhQUFhLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUU7SUFDaEQsRUFBRSxJQUFJLE9BQU8sSUFBSSxLQUFLLFFBQVEsRUFBRTtJQUNoQyxJQUFJLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxHQUFHLEtBQUssSUFBSSxDQUFDLENBQUM7SUFDaEUsR0FBRztJQUNILEVBQUUsTUFBTSxZQUFZLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ25FLEVBQUUsTUFBTSxNQUFNLEdBQUcsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsS0FBSztJQUM1RCxJQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUM7SUFDckIsSUFBSSxPQUFPLEdBQUcsQ0FBQztJQUNmLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNULEVBQUUsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQUNNLFNBQVMsU0FBUyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFO0lBQ3pDLEVBQUUsSUFBSSxPQUFPLEdBQUcsR0FBRyxDQUFDO0lBQ3BCLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDcEQsRUFBRSxPQUFPLE9BQU8sQ0FBQztJQUNqQjs7SUNyQk8sTUFBTSw4QkFBOEIsR0FBRyxXQUFXLENBQUMsMENBQTBDLENBQUMsQ0FBQztJQUMvRixNQUFNLFNBQVMsR0FBRyxXQUFXLENBQUMsU0FBUyxFQUFFLGdCQUFnQixDQUFDLENBQUM7SUFDM0QsTUFBTSxRQUFRLEdBQUcsV0FBVyxDQUFDLGVBQWUsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO0lBQ3BFLE1BQU0sWUFBWSxHQUFHLFdBQVcsQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDekQsTUFBTSxzQkFBc0IsR0FBRyxXQUFXLENBQUMsaUJBQWlCLEVBQUUsYUFBYSxFQUFFLGVBQWUsQ0FBQyxDQUFDO0lBQzlGLE1BQU0sS0FBSyxHQUFHLFdBQVcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0lBQy9DLE1BQU0sU0FBUyxHQUFHLFdBQVcsQ0FBQyxXQUFXLEVBQUUsY0FBYyxDQUFDLENBQUM7SUFDM0QsTUFBTSxhQUFhLEdBQUcsV0FBVyxDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDdEQsTUFBTSxxQkFBcUIsR0FBRyxXQUFXLENBQUMsUUFBUSxFQUFFLFVBQVUsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUMzRSxNQUFNLFdBQVcsR0FBRyxXQUFXLENBQUMsUUFBUSxFQUFFLHdCQUF3QixFQUFFLGdCQUFnQixDQUFDLENBQUM7SUFDdEYsTUFBTSxPQUFPLEdBQUcsV0FBVyxDQUFDLGFBQWEsRUFBRSxhQUFhLENBQUMsQ0FBQztBQUNqRSxrQkFBZTtJQUNmLEVBQUUsOEJBQThCO0lBQ2hDLEVBQUUsU0FBUztJQUNYLEVBQUUsYUFBYTtJQUNmLEVBQUUscUJBQXFCO0lBQ3ZCLEVBQUUsV0FBVztJQUNiLEVBQUUsT0FBTztJQUNULEVBQUUsU0FBUztJQUNYLEVBQUUsc0JBQXNCO0lBQ3hCLEVBQUUsS0FBSztJQUNQLEVBQUUsWUFBWTtJQUNkLEVBQUUsUUFBUTtJQUNWLENBQUM7Ozs7OztBQ3hCRCxzQkFBZSxDQUFDLEdBQUcsT0FBTyxLQUFLLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssT0FBTyxDQUFDLEtBQUssUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQzs7SUNDckYsTUFBTSxTQUFFQSxPQUFLLEVBQUUsS0FBSyxFQUFFO0lBQ3RCLEVBQUUsUUFBUTtJQUNWLEVBQUUsU0FBUztJQUNYLENBQUMsRUFBRSxHQUFHLE9BQU8sQ0FBQztJQU9DLGVBQVEsQ0FBQyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLFNBQVMsR0FBRyxLQUFLLEVBQUUsV0FBVyxHQUFHLEtBQUssRUFBRSxFQUFFO0lBQzFGLEVBQUUsTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsR0FBRyxRQUFRLEVBQUUsQ0FBQztJQUNyQyxFQUFFLFNBQVMsQ0FBQyxNQUFNO0lBQ2xCLElBQUksTUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNwQyxJQUFJLElBQUksQ0FBQyxLQUFLO0lBQ2QsTUFBTSxNQUFNLElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDeEMsSUFBSSxPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQy9CLEdBQUcsQ0FBQyxDQUFDO0lBQ0wsRUFBRSx1QkFBdUJBLE9BQUssQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFO0lBQ25ELElBQUksS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTTtJQUM1QixJQUFJLFNBQVMsRUFBRSxXQUFXLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUV3QixnQkFBTSxDQUFDLE9BQU8sQ0FBQztJQUN4RSxHQUFHLGtCQUFrQnhCLE9BQUssQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFO0lBQ2hELElBQUksU0FBUyxFQUFFLE9BQU8sQ0FBQyxhQUFhLENBQUMsTUFBTTtJQUMzQyxHQUFHLGtCQUFrQkEsT0FBSyxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUU7SUFDakQsSUFBSSxHQUFHLEVBQUUsSUFBSSxFQUFFLFlBQVksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEVBQUUsT0FBTyxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUM7SUFDakUsSUFBSSxJQUFJLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPO0lBQzlCLEdBQUcsQ0FBQyxDQUFDLGtCQUFrQkEsT0FBSyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUU7SUFDbEQsSUFBSSxTQUFTLEVBQUUsT0FBTyxDQUFDLGFBQWEsQ0FBQyxPQUFPO0lBQzVDLElBQUksS0FBSyxFQUFFLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRTtJQUNsQyxHQUFHLGtCQUFrQkEsT0FBSyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUU7SUFDaEQsSUFBSSxTQUFTLEVBQUUsT0FBTyxDQUFDLGFBQWEsQ0FBQyxJQUFJO0lBQ3pDLEdBQUcsRUFBRSxJQUFJLEVBQUUsUUFBUSxDQUFDLGtCQUFrQkEsT0FBSyxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUU7SUFDaEUsSUFBSSxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLO0lBQzVCLElBQUksSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTztJQUM1QixHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxhQUFhLENBQUMsQ0FBQyxrQkFBa0JBLE9BQUssQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFO0lBQ2hHLElBQUksU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUTtJQUN0QyxJQUFJLElBQUksRUFBRSxDQUFDO0lBQ1gsSUFBSSxNQUFNLEVBQUUsQ0FBQztJQUNiLEdBQUcsa0JBQWtCQSxPQUFLLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRTtJQUNqRCxJQUFJLElBQUksRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUk7SUFDM0IsSUFBSSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQy9CLElBQUksUUFBUSxFQUFFLFNBQVM7SUFDdkIsSUFBSSxJQUFJLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLO0lBQzVCLElBQUksU0FBUyxFQUFFO0lBQ2YsTUFBTSxPQUFPLENBQUMscUJBQXFCLENBQUMsTUFBTTtJQUMxQyxNQUFNLFNBQVMsR0FBRyxPQUFPLENBQUMscUJBQXFCLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxPQUFPO0lBQ2hHLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBQ2YsR0FBRyxrQkFBa0JBLE9BQUssQ0FBQyxhQUFhLENBQUMsV0FBVyxFQUFFO0lBQ3RELElBQUksSUFBSSxFQUFFLGFBQWE7SUFDdkIsR0FBRyxDQUFDLENBQUMsa0JBQWtCQSxPQUFLLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRTtJQUNuRCxJQUFJLElBQUksRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUk7SUFDM0IsSUFBSSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUMsTUFBTSxDQUFDO0lBQ2pDLElBQUksUUFBUSxFQUFFLFdBQVc7SUFDekIsSUFBSSxJQUFJLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLO0lBQzVCLElBQUksU0FBUyxFQUFFO0lBQ2YsTUFBTSxPQUFPLENBQUMscUJBQXFCLENBQUMsTUFBTTtJQUMxQyxNQUFNLFdBQVcsR0FBRyxPQUFPLENBQUMscUJBQXFCLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxPQUFPO0lBQ2xHLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBQ2YsR0FBRyxrQkFBa0JBLE9BQUssQ0FBQyxhQUFhLENBQUMsV0FBVyxFQUFFO0lBQ3RELElBQUksSUFBSSxFQUFFLGVBQWU7SUFDekIsR0FBRyxDQUFDLENBQUMsQ0FBQyxrQkFBa0JBLE9BQUssQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLEVBQUU7SUFDOUQsSUFBSSxJQUFJLEVBQUUsUUFBUTtJQUNsQixHQUFHLGtCQUFrQkEsT0FBSyxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUU7SUFDakQsSUFBSSxJQUFJLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJO0lBQzNCLElBQUksS0FBSyxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRztJQUM1QixJQUFJLE9BQU8sRUFBRSxRQUFRO0lBQ3JCLElBQUksSUFBSSxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSTtJQUMzQixHQUFHLGtCQUFrQkEsT0FBSyxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUU7SUFDdEQsSUFBSSxJQUFJLEVBQUUsT0FBTztJQUNqQixHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNSOztJQ3ZFQSxNQUFNLFlBQVksR0FBRztJQUNyQixFQUFFLGFBQWEsRUFBRSxVQUFVO0lBQzNCLENBQUMsQ0FBQztJQUNGLE1BQU0sY0FBYyxHQUFHO0lBQ3ZCLEVBQUUsYUFBYSxFQUFFLFlBQVk7SUFDN0IsRUFBRSxTQUFTLEVBQUUsSUFBSTtJQUNqQixDQUFDLENBQUM7QUFDRixtQkFBZTtJQUNmLEVBQUUsZUFBZSxFQUFFO0lBQ25CLElBQUksWUFBWSxFQUFFLFlBQVksQ0FBQyxhQUFhO0lBQzVDLElBQUksY0FBYztJQUNsQixJQUFJLFlBQVk7SUFDaEIsSUFBSSxRQUFRLEVBQUUsSUFBSTtJQUNsQixJQUFJLGFBQWEsRUFBRSxJQUFJO0lBQ3ZCLEdBQUc7SUFDSCxDQUFDOztJQ2RNLE1BQU0sNkJBQTZCLEdBQUcsb0JBQW9COzs7Ozs7SUNBbEQsTUFBTSxhQUFhLFNBQVNBLE9BQUssQ0FBQyxTQUFTLENBQUM7SUFDM0QsRUFBRSxXQUFXLEdBQUc7SUFDaEIsSUFBSSxLQUFLLENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQztJQUN4QixJQUFJLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUM7SUFDckMsR0FBRztJQUNILEVBQUUsaUJBQWlCLEdBQUc7SUFDdEIsR0FBRztJQUNILEVBQUUsT0FBTyx3QkFBd0IsR0FBRztJQUNwQyxJQUFJLE9BQU8sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7SUFDOUIsR0FBRztJQUNILEVBQUUsTUFBTSxHQUFHO0lBQ1gsSUFBSSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUTtJQUMzQixNQUFNLE9BQU8sT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO0lBQzdFLElBQUksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQztJQUMvQixHQUFHO0lBQ0g7O0FDUDhCeUIsZUFBbUIsQ0FBQyxvQkFBb0IsRUFBRTtJQUN6RCxnQ0FBUSxDQUFDLFVBQVUsRUFBRTtJQUNwQyxFQUFFLE1BQU0sQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDLEdBQUd6QixPQUFLLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNwRSxFQUFFLE1BQU0sQ0FBQyxRQUFRLEVBQUUsV0FBVyxDQUFDLEdBQUdBLE9BQUssQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUMxRixFQUFFLHVCQUF1QkEsT0FBSyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFO0lBQzlELElBQUksSUFBSSxFQUFFLEtBQUssQ0FBQyxTQUFTLENBQUMsT0FBTztJQUNqQyxJQUFJLEdBQUcsVUFBVTtJQUNqQixHQUFHLGtCQUFrQkEsT0FBSyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFO0lBQzVELElBQUksU0FBUyxFQUFFLEtBQUs7SUFDcEIsR0FBRyxrQkFBa0JBLE9BQUssQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFFO0lBQ3BELElBQUksS0FBSyxFQUFFLE9BQU87SUFDbEIsSUFBSSxRQUFRLEVBQUUsVUFBVTtJQUN4QixJQUFJLFdBQVcsRUFBRSxRQUFRO0lBQ3pCLElBQUksU0FBUyxFQUFFd0IsZ0JBQU0sQ0FBQyxPQUFPO0lBQzdCLEdBQUcsQ0FBQyxDQUFDLGtCQUFrQnhCLE9BQUssQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBRSxJQUFJLGtCQUFrQkEsT0FBSyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLElBQUksa0JBQWtCQSxPQUFLLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxrQkFBa0JBLE9BQUssQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFO0lBQy9PLElBQUksU0FBUyxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsY0FBYztJQUM3QyxHQUFHLGtCQUFrQkEsT0FBSyxDQUFDLGFBQWEsQ0FBQyxhQUFhLEVBQUU7SUFDeEQsSUFBSSxXQUFXLGtCQUFrQkEsT0FBSyxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUU7SUFDM0QsTUFBTSxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLO0lBQzlCLEtBQUssRUFBRSxnRUFBZ0Usa0JBQWtCQSxPQUFLLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRTtJQUNySCxNQUFNLElBQUksRUFBRSwrQ0FBK0M7SUFDM0QsS0FBSyxFQUFFLCtDQUErQyxDQUFDLEVBQUUsOEJBQThCLGtCQUFrQkEsT0FBSyxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLGtCQUFrQkEsT0FBSyxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQUUsb0NBQW9DLGtCQUFrQkEsT0FBSyxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUU7SUFDM1EsTUFBTSxTQUFTLEVBQUV3QixnQkFBTSxDQUFDLGFBQWE7SUFDckMsS0FBSyxrQkFBa0J4QixPQUFLLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsNkNBQTZDLENBQUMsa0JBQWtCQSxPQUFLLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsK0JBQStCLENBQUMsa0JBQWtCQSxPQUFLLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsaUJBQWlCLENBQUMsa0JBQWtCQSxPQUFLLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUscUJBQXFCLENBQUMsa0JBQWtCQSxPQUFLLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsdUJBQXVCLENBQUMsQ0FBQyxFQUFFLGtFQUFrRSxDQUFDO0lBQ25kLEdBQUcsa0JBQWtCQSxPQUFLLENBQUMsYUFBYSxDQUFDVyxhQUFXLEVBQUU7SUFDdEQsSUFBSSxNQUFNLEVBQUUsU0FBUyxDQUFDLFdBQVc7SUFDakMsSUFBSSxZQUFZLEVBQUUsU0FBUyxDQUFDLGtCQUFrQjtJQUM5QyxJQUFJLEtBQUssRUFBRSxVQUFVLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQztJQUN2QyxJQUFJLFFBQVEsRUFBRSxDQUFDLENBQUMsS0FBSyxXQUFXLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN2RCxHQUFHLENBQUMsQ0FBQyxDQUFDLGtCQUFrQlgsT0FBSyxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUU7SUFDeEQsSUFBSSxLQUFLLEVBQUUsQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUM7SUFDeEQsSUFBSSxRQUFRLEVBQUUsQ0FBQyxDQUFDLEtBQUssU0FBUyxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3JFLElBQUksUUFBUSxFQUFFaUIsR0FBWSxDQUFDLFNBQVMsRUFBRVMsUUFBa0IsQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDLEtBQUtBLFFBQWtCLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FBQyxhQUFhO0lBQzFKLElBQUksSUFBSSxFQUFFVCxHQUFZLENBQUMsU0FBUyxFQUFFUyxRQUFrQixDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUMsSUFBSSxrREFBa0Q7SUFDeEksR0FBRyxFQUFFLGVBQWUsQ0FBQyxDQUFDLENBQUMsa0JBQWtCMUIsT0FBSyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLElBQUksa0JBQWtCQSxPQUFLLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRTtJQUNsSSxJQUFJLE9BQU8sRUFBRSxNQUFNO0lBQ25CLE1BQU0sSUFBSSxVQUFVLENBQUMsUUFBUSxLQUFLLE9BQU87SUFDekMsUUFBUSxTQUFTLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDL0QsTUFBTSxTQUFTLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDeEQsTUFBTSxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDM0IsS0FBSztJQUNMLEdBQUcsRUFBRSxNQUFNLENBQUMsa0JBQWtCQSxPQUFLLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRTtJQUMxRCxJQUFJLElBQUksRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUk7SUFDM0IsSUFBSSxLQUFLLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLO0lBQzlCLElBQUksT0FBTyxFQUFFLFVBQVUsQ0FBQyxPQUFPO0lBQy9CLEdBQUcsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDakI7Ozs7Ozs7Ozs7QUN2REEsZ0JBQWUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxHQUFHLEVBQUUsRUFBRSxJQUFJLEdBQUcsQ0FBQyxLQUFLLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksR0FBRyxLQUFLLENBQUM7O0lDUS9FLE1BQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyx3QkFBd0IsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sS0FBSyxPQUFPLENBQUMsVUFBVSxDQUFDLE1BQU0sS0FBSyxDQUFDLElBQUksT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLEtBQUssS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNqTSxNQUFNLGdCQUFnQixHQUFHLEVBQUUsQ0FBQztJQUNiLHFCQUFRLENBQUMsS0FBSyxFQUFFO0lBQy9CLEVBQUUsTUFBTSxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsR0FBR0EsT0FBSyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUMvQyxFQUFFLE1BQU0sQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDLEdBQUdBLE9BQUssQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDakQsRUFBRUEsT0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFNO0lBQ3hCLElBQUksTUFBTSxZQUFZLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzNILElBQUksTUFBTSxhQUFhLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ2hFLElBQUksUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQzVCLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDZixFQUFFLHVCQUF1QkEsT0FBSyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFO0lBQzlELElBQUksSUFBSSxFQUFFLEtBQUssQ0FBQyxTQUFTLENBQUMsT0FBTztJQUNqQyxJQUFJLEdBQUcsS0FBSztJQUNaLEdBQUcsa0JBQWtCQSxPQUFLLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUU7SUFDNUQsSUFBSSxTQUFTLEVBQUUsS0FBSztJQUNwQixHQUFHLGtCQUFrQkEsT0FBSyxDQUFDLGFBQWEsQ0FBQyxTQUFTLEVBQUU7SUFDcEQsSUFBSSxLQUFLLEVBQUUsTUFBTTtJQUNqQixJQUFJLFFBQVEsRUFBRSxTQUFTO0lBQ3ZCLElBQUksV0FBVyxFQUFFLGlCQUFpQjtJQUNsQyxJQUFJLFNBQVMsRUFBRTJCLGdCQUFjLENBQUMsT0FBTztJQUNyQyxHQUFHLENBQUMsQ0FBQyxrQkFBa0IzQixPQUFLLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUUsSUFBSSxrQkFBa0JBLE9BQUssQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFO0lBQ2hILElBQUksU0FBUyxFQUFFd0IsZ0JBQU0sQ0FBQyxRQUFRO0lBQzlCLEdBQUcsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxxQkFBcUJ4QixPQUFLLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRTtJQUNuRSxJQUFJLElBQUk7SUFDUixJQUFJLE9BQU8sRUFBRSxNQUFNO0lBQ25CLE1BQU0sS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMzQixNQUFNLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUN0QixLQUFLO0lBQ0wsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNULENBQUM7SUFDTSxNQUFNLElBQUksR0FBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxLQUFLO0lBQzNDLEVBQUUsTUFBTSxPQUFPLEdBQUcsU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDakQsRUFBRSx1QkFBdUJBLE9BQUssQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFO0lBQ25ELElBQUksS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTTtJQUM1QixJQUFJLFNBQVMsRUFBRSxXQUFXLENBQUN3QixnQkFBTSxDQUFDLElBQUksRUFBRSxPQUFPLEdBQUdBLGdCQUFNLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztJQUN2RSxJQUFJLE9BQU8sRUFBRSxNQUFNO0lBQ25CLE1BQU0sSUFBSSxDQUFDLE9BQU87SUFDbEIsUUFBUSxPQUFPLElBQUksQ0FBQztJQUNwQixLQUFLO0lBQ0wsR0FBRyxrQkFBa0J4QixPQUFLLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRTtJQUNqRCxJQUFJLEdBQUcsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUM7SUFDeEMsSUFBSSxJQUFJLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPO0lBQzlCLEdBQUcsQ0FBQyxrQkFBa0JBLE9BQUssQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFO0lBQ2hELElBQUksS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUTtJQUMvQixJQUFJLFNBQVMsRUFBRXdCLGdCQUFNLENBQUMsSUFBSTtJQUMxQixHQUFHLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDckIsQ0FBQzs7SUNuQ0QsTUFBTUksaUJBQWUsR0FBR0MsaUJBQXlCLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUNyRSxNQUFNLG1CQUFFQyxpQkFBZSxFQUFFLE9BQU8sRUFBRUMsWUFBVSxrQkFBRUMsZ0JBQWMsRUFBRSxHQUFHUCxXQUFtQixDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDekYseUJBQVEsQ0FBQyxFQUFFLGNBQWMsRUFBRSxxQkFBcUIsR0FBRyxJQUFJLEVBQUUsRUFBRTtJQUMxRSxFQUFFLGFBQWEsRUFBRSxDQUFDO0lBQ2xCLEVBQUUsdUJBQXVCekIsT0FBSyxDQUFDLGFBQWEsQ0FBQ0EsT0FBSyxDQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUscUJBQXFCLG9CQUFvQkEsT0FBSyxDQUFDLGFBQWEsQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsS0FBSyxxQkFBcUJBLE9BQUssQ0FBQyxhQUFhLENBQUMsWUFBWSxFQUFFO0lBQ2xSLElBQUksSUFBSSxFQUFFLFFBQVE7SUFDbEIsSUFBSSxLQUFLO0lBQ1QsSUFBSSxLQUFLO0lBQ1QsSUFBSSxNQUFNLEVBQUUsUUFBUSxLQUFLLGNBQWM7SUFDdkMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNNLE1BQU0sY0FBYyxHQUFHLE1BQU07SUFDcEMsRUFBRSxNQUFNLENBQUMsV0FBVyxFQUFFLGNBQWMsQ0FBQyxHQUFHQSxPQUFLLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzNELEVBQUUsTUFBTSxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsR0FBR0EsT0FBSyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUMvQyxFQUFFLHVCQUF1QkEsT0FBSyxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUU7SUFDbkQsSUFBSSxTQUFTLEVBQUV3QixnQkFBTSxDQUFDLGNBQWM7SUFDcEMsSUFBSSxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNO0lBQzVCLEdBQUcsa0JBQWtCeEIsT0FBSyxDQUFDLGFBQWEsQ0FBQyxTQUFTLEVBQUU7SUFDcEQsSUFBSSxTQUFTLEVBQUV3QixnQkFBTSxDQUFDLE9BQU87SUFDN0IsSUFBSSxLQUFLLEVBQUUsV0FBVztJQUN0QixJQUFJLFdBQVcsRUFBRSxxQkFBcUI7SUFDdEMsSUFBSSxRQUFRLEVBQUUsQ0FBQyxDQUFDLEtBQUssY0FBYyxDQUFDLENBQUMsQ0FBQztJQUN0QyxJQUFJLEtBQUs7SUFDVCxHQUFHLENBQUMsa0JBQWtCeEIsT0FBSyxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUU7SUFDbEQsSUFBSSxPQUFPLEVBQUUsTUFBTTtJQUNuQixNQUFNLElBQUksV0FBVyxJQUFJLEVBQUU7SUFDM0IsUUFBUSxRQUFRLENBQUMsb0JBQW9CLENBQUMsQ0FBQztJQUN2QyxXQUFXO0lBQ1gsUUFBUSxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDckIsUUFBUSxTQUFTLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzNDLE9BQU87SUFDUCxLQUFLO0lBQ0wsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDYixDQUFDLENBQUM7SUFDSyxNQUFNLFlBQVksR0FBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsTUFBTSxHQUFHLElBQUksRUFBRSxLQUFLO0lBQ3ZFLEVBQUUsTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsR0FBR0EsT0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNqRCxFQUFFLHVCQUF1QkEsT0FBSyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUU7SUFDcEQsSUFBSSxHQUFHLEVBQUUsSUFBSTtJQUNiLElBQUksU0FBUyxFQUFFd0IsZ0JBQU0sQ0FBQyxRQUFRO0lBQzlCLEdBQUcsa0JBQWtCeEIsT0FBSyxDQUFDLGFBQWEsQ0FBQyxjQUFjLEVBQUU7SUFDekQsSUFBSSxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRTtJQUN0QixJQUFJLE1BQU0sRUFBRSxNQUFNLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQztJQUNoQyxJQUFJLE1BQU0sRUFBRSxJQUFJO0lBQ2hCLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxvQkFBb0JBLE9BQUssQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFO0lBQzFELElBQUksU0FBUyxFQUFFLFdBQVcsQ0FBQ3dCLGdCQUFNLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDO0lBQzNILEdBQUcsRUFBRSxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLE1BQU0scUJBQXFCeEIsT0FBSyxDQUFDLGFBQWEsQ0FBQ2UsTUFBSSxFQUFFO0lBQzlGLElBQUksRUFBRTtJQUNOLElBQUksTUFBTSxFQUFFLENBQUMsSUFBSSxLQUFLLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sSUFBSSxJQUFJLEtBQUssSUFBSSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDOUcsSUFBSSxRQUFRLEVBQUUsTUFBTSxTQUFTLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUM7SUFDbEQsSUFBSSxTQUFTLEVBQUUsTUFBTSxLQUFLLENBQUM7SUFDM0IsSUFBSSxXQUFXLEVBQUUsTUFBTSxLQUFLLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQztJQUM1QyxHQUFHLENBQUMsQ0FBQyxtQkFBbUJmLE9BQUssQ0FBQyxhQUFhLENBQUNBLE9BQUssQ0FBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsbUJBQW1CQSxPQUFLLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRTtJQUN2SixJQUFJLEtBQUssRUFBRSxLQUFLO0lBQ2hCLElBQUksTUFBTSxFQUFFLEtBQUs7SUFDakIsSUFBSSxHQUFHLEVBQUUsK0RBQStEO0lBQ3hFLElBQUksS0FBSyxFQUFFLGtDQUFrQztJQUM3QyxHQUFHLENBQUMsbUJBQW1CQSxPQUFLLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRTtJQUNsRCxJQUFJLFNBQVMsRUFBRXdCLGdCQUFNLENBQUMsS0FBSztJQUMzQixHQUFHLGtCQUFrQnhCLE9BQUssQ0FBQyxhQUFhLENBQUMrQixZQUFVLEVBQUU7SUFDckQsSUFBSSxLQUFLLEVBQUUsWUFBWSxDQUFDLEtBQUs7SUFDN0IsR0FBRyxrQkFBa0IvQixPQUFLLENBQUMsYUFBYSxDQUFDOEIsaUJBQWUsRUFBRTtJQUMxRCxJQUFJLEdBQUc7SUFDUCxNQUFNLE9BQU8sRUFBRSxHQUFHO0lBQ2xCLE1BQU0sUUFBUSxFQUFFLEdBQUc7SUFDbkIsTUFBTSxVQUFVLEVBQUUsOENBQThDO0lBQ2hFLE1BQU0sU0FBUyxFQUFFLDhDQUE4QztJQUMvRCxLQUFLO0lBQ0wsR0FBRyxDQUFDLGtCQUFrQjlCLE9BQUssQ0FBQyxhQUFhLENBQUNnQyxnQkFBYyxFQUFFO0lBQzFELElBQUksSUFBSSxrQkFBa0JoQyxPQUFLLENBQUMsYUFBYSxDQUFDQSxPQUFLLENBQUMsUUFBUSxFQUFFLElBQUksRUFBRSx5RUFBeUUsQ0FBQztJQUM5SSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDVixDQUFDLENBQUM7SUFDRixNQUFNLGNBQWMsR0FBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxNQUFNLEdBQUcsS0FBSyxFQUFFLE1BQU0sRUFBRSxLQUFLO0lBQ3BFLEVBQUUsTUFBTSxpQkFBaUIsR0FBRyxDQUFDLElBQUksS0FBSztJQUN0QyxJQUFJLE1BQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQztJQUNoRixJQUFJLFNBQVMsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxNQUFNLEVBQUUsTUFBTSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDL0UsR0FBRyxDQUFDO0lBQ0osRUFBRSx1QkFBdUJBLE9BQUssQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFO0lBQ25ELElBQUksS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTTtJQUM1QixHQUFHLGtCQUFrQkEsT0FBSyxDQUFDLGFBQWEsQ0FBQzRCLGlCQUFlLEVBQUU7SUFDMUQsSUFBSSxTQUFTLEVBQUUsV0FBVyxDQUFDLE9BQU8sQ0FBQyw4QkFBOEIsQ0FBQyw4QkFBOEIsRUFBRUosZ0JBQU0sQ0FBQyxzQkFBc0IsQ0FBQztJQUNoSSxHQUFHLGtCQUFrQnhCLE9BQUssQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFO0lBQy9DLElBQUksS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTtJQUNsRSxJQUFJLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU07SUFDNUIsSUFBSSxPQUFPLEVBQUUsTUFBTTtJQUNuQixHQUFHLGtCQUFrQkEsT0FBSyxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUU7SUFDdEQsSUFBSSxJQUFJLEVBQUUsZUFBZTtJQUN6QixJQUFJLFNBQVMsRUFBRSxXQUFXLENBQUN3QixnQkFBTSxDQUFDLGFBQWEsRUFBRSxNQUFNLEdBQUdBLGdCQUFNLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxDQUFDO0lBQ2pGLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLGtCQUFrQnhCLE9BQUssQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFO0lBQzFELElBQUksUUFBUSxFQUFFLE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTTtJQUNyQyxJQUFJLFlBQVksRUFBRSxDQUFDLEtBQUsscUJBQXFCQSxPQUFLLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRTtJQUN4RSxNQUFNLEdBQUcsS0FBSztJQUNkLEtBQUssa0JBQWtCQSxPQUFLLENBQUMsYUFBYSxDQUFDLHVCQUF1QixFQUFFO0lBQ3BFLE1BQU0sZUFBZSxFQUFFLENBQUM7SUFDeEIsTUFBTSxPQUFPLEVBQUUsS0FBSyxDQUFDLFdBQVc7SUFDaEMsTUFBTSxRQUFRLEVBQUUsSUFBSTtJQUNwQixLQUFLLENBQUMsQ0FBQztJQUNQLEdBQUcsRUFBRSxDQUFDLE1BQU0scUJBQXFCQSxPQUFLLENBQUMsYUFBYSxDQUFDLGdCQUFnQixFQUFFO0lBQ3ZFLElBQUksSUFBSSxFQUFFLGVBQWU7SUFDekIsR0FBRyxrQkFBa0JBLE9BQUssQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFO0lBQ2pELElBQUksR0FBRyxNQUFNO0lBQ2IsSUFBSSxJQUFJLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJO0lBQzNCLElBQUksSUFBSSxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSztJQUM1QixJQUFJLFNBQVMsRUFBRSxXQUFXLENBQUMsT0FBTyxDQUFDLHFCQUFxQixDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMscUJBQXFCLENBQUMsT0FBTyxDQUFDO0lBQ3ZHLEdBQUcsa0JBQWtCQSxPQUFLLENBQUMsYUFBYSxDQUFDLFdBQVcsRUFBRTtJQUN0RCxJQUFJLElBQUksRUFBRSxRQUFRO0lBQ2xCLElBQUksS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFO0lBQzVDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxrQkFBa0JBLE9BQUssQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFO0lBQ3BELElBQUksS0FBSyxFQUFFLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRTtJQUNsQyxHQUFHLENBQUMsa0JBQWtCQSxPQUFLLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRTtJQUNsRCxJQUFJLFFBQVEsRUFBRSxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUk7SUFDbkMsSUFBSSxZQUFZLEVBQUUsQ0FBQyxLQUFLLHFCQUFxQkEsT0FBSyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUU7SUFDeEUsTUFBTSxHQUFHLEtBQUs7SUFDZCxLQUFLLGtCQUFrQkEsT0FBSyxDQUFDLGFBQWEsQ0FBQyxZQUFZLEVBQUU7SUFDekQsTUFBTSxlQUFlLEVBQUUsQ0FBQztJQUN4QixNQUFNLE9BQU8sRUFBRSxLQUFLLENBQUMsV0FBVztJQUNoQyxNQUFNLFFBQVEsRUFBRSxDQUFDLElBQUksS0FBSztJQUMxQixRQUFRLElBQUksSUFBSSxDQUFDLEVBQUUsSUFBSSxJQUFJO0lBQzNCLFVBQVUsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzNDLE9BQU87SUFDUCxLQUFLLENBQUMsQ0FBQztJQUNQLEdBQUcsRUFBRSxDQUFDLE1BQU0scUJBQXFCQSxPQUFLLENBQUMsYUFBYSxDQUFDLGdCQUFnQixFQUFFO0lBQ3ZFLElBQUksSUFBSSxFQUFFLGtCQUFrQjtJQUM1QixHQUFHLGtCQUFrQkEsT0FBSyxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUU7SUFDakQsSUFBSSxHQUFHLE1BQU07SUFDYixJQUFJLElBQUksRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUk7SUFDM0IsSUFBSSxJQUFJLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLO0lBQzVCLElBQUksU0FBUyxFQUFFLFdBQVcsQ0FBQyxPQUFPLENBQUMscUJBQXFCLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxPQUFPLENBQUM7SUFDdkcsR0FBRyxrQkFBa0JBLE9BQUssQ0FBQyxhQUFhLENBQUMsV0FBVyxFQUFFO0lBQ3RELElBQUksSUFBSSxFQUFFLFdBQVc7SUFDckIsSUFBSSxLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUU7SUFDNUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLGtCQUFrQkEsT0FBSyxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUU7SUFDbkQsSUFBSSxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRO0lBQ3RDLElBQUksSUFBSSxFQUFFLENBQUM7SUFDWCxJQUFJLE1BQU0sRUFBRSxDQUFDO0lBQ2IsR0FBRyxrQkFBa0JBLE9BQUssQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFO0lBQ2pELElBQUksSUFBSSxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSTtJQUMzQixJQUFJLE9BQU8sRUFBRSxNQUFNLGlCQUFpQixDQUFDLENBQUMsQ0FBQztJQUN2QyxJQUFJLFFBQVEsRUFBRSxLQUFLLEtBQUssQ0FBQztJQUN6QixJQUFJLElBQUksRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUs7SUFDNUIsSUFBSSxTQUFTLEVBQUUsV0FBVyxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLEVBQUUsS0FBSyxLQUFLLENBQUMsR0FBRyxPQUFPLENBQUMscUJBQXFCLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxPQUFPLENBQUM7SUFDOUosR0FBRyxrQkFBa0JBLE9BQUssQ0FBQyxhQUFhLENBQUMsV0FBVyxFQUFFO0lBQ3RELElBQUksSUFBSSxFQUFFLGFBQWE7SUFDdkIsR0FBRyxDQUFDLENBQUMsa0JBQWtCQSxPQUFLLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRTtJQUNuRCxJQUFJLElBQUksRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUk7SUFDM0IsSUFBSSxPQUFPLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN4QyxJQUFJLFFBQVEsRUFBRSxLQUFLLEtBQUssU0FBUyxDQUFDLGFBQWEsRUFBRSxDQUFDLE1BQU0sR0FBRyxDQUFDO0lBQzVELElBQUksSUFBSSxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSztJQUM1QixJQUFJLFNBQVMsRUFBRSxXQUFXLENBQUMsT0FBTyxDQUFDLHFCQUFxQixDQUFDLE1BQU0sRUFBRSxLQUFLLEtBQUssU0FBUyxDQUFDLGFBQWEsRUFBRSxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsT0FBTyxDQUFDLHFCQUFxQixDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUMscUJBQXFCLENBQUMsT0FBTyxDQUFDO0lBQ2pNLEdBQUcsa0JBQWtCQSxPQUFLLENBQUMsYUFBYSxDQUFDLFdBQVcsRUFBRTtJQUN0RCxJQUFJLElBQUksRUFBRSxlQUFlO0lBQ3pCLEdBQUcsQ0FBQyxDQUFDLENBQUMsa0JBQWtCQSxPQUFLLENBQUMsYUFBYSxDQUFDLGdCQUFnQixFQUFFO0lBQzlELElBQUksSUFBSSxFQUFFLFFBQVE7SUFDbEIsR0FBRyxrQkFBa0JBLE9BQUssQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFO0lBQ2pELElBQUksSUFBSSxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSTtJQUMzQixJQUFJLEtBQUssRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUc7SUFDNUIsSUFBSSxPQUFPLEVBQUUsTUFBTSxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQztJQUNqRCxJQUFJLElBQUksRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUk7SUFDM0IsR0FBRyxrQkFBa0JBLE9BQUssQ0FBQyxhQUFhLENBQUMsV0FBVyxFQUFFO0lBQ3RELElBQUksSUFBSSxFQUFFLE9BQU87SUFDakIsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDUixDQUFDOzs7Ozs7QUNuTEQsc0JBQWUsQ0FBQyxJQUFJLEtBQUs7SUFDekIsRUFBRSxJQUFJO0lBQ04sSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3JCLElBQUksT0FBTyxJQUFJLENBQUM7SUFDaEIsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFFO0lBQ2QsR0FBRztJQUNILEVBQUUsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOztJQ0djLGlCQUFRLEdBQUc7SUFDMUIsRUFBRSxNQUFNLEdBQUcsV0FBVyxDQUFDLEdBQUdBLE9BQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDN0QsRUFBRSx1QkFBdUJBLE9BQUssQ0FBQyxhQUFhLENBQUNBLE9BQUssQ0FBQyxRQUFRLEVBQUUsSUFBSSxrQkFBa0JBLE9BQUssQ0FBQyxhQUFhLENBQUNVLFVBQVEsRUFBRTtJQUNqSCxJQUFJLEtBQUssRUFBRSxtQkFBbUI7SUFDOUIsSUFBSSxXQUFXLEVBQUUsMERBQTBEO0lBQzNFLElBQUksSUFBSSxFQUFFLFFBQVE7SUFDbEIsR0FBRyxrQkFBa0JWLE9BQUssQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLENBQUMsa0JBQWtCQSxPQUFLLENBQUMsYUFBYSxDQUFDVSxVQUFRLEVBQUU7SUFDakgsSUFBSSxLQUFLLEVBQUUsZ0JBQWdCO0lBQzNCLElBQUksV0FBVyxFQUFFLG1DQUFtQztJQUNwRCxJQUFJLElBQUksRUFBRSxNQUFNO0lBQ2hCLEdBQUcsa0JBQWtCVixPQUFLLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsSUFBSSxrQkFBa0JBLE9BQUssQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxJQUFJLGtCQUFrQkEsT0FBSyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxjQUFjLENBQUMsa0JBQWtCQSxPQUFLLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBRTtJQUN4UCxJQUFJLE9BQU8sRUFBRTtJQUNiLE1BQU0sRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRTBCLFFBQWtCLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQyxhQUFhLEVBQUU7SUFDaEcsTUFBTSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFQSxRQUFrQixDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUMsYUFBYSxFQUFFO0lBQ3BHLEtBQUs7SUFDTCxJQUFJLEtBQUssRUFBRVQsR0FBWSxDQUFDLFNBQVMsRUFBRVMsUUFBa0IsQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDO0lBQ25GLElBQUksUUFBUSxFQUFFLENBQUMsQ0FBQyxLQUFLO0lBQ3JCLE1BQU1QLEdBQVksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3ZDLE1BQU0sVUFBVSxDQUFDLGFBQWEsQ0FBQyxFQUFFLElBQUksRUFBRWMsNkJBQXVDLEVBQUUsQ0FBQyxDQUFDO0lBQ2xGLE1BQU0sV0FBVyxFQUFFLENBQUM7SUFDcEIsS0FBSztJQUNMLEdBQUcsQ0FBQyxrQkFBa0JqQyxPQUFLLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUU7SUFDN0QsSUFBSSxTQUFTLEVBQUUsV0FBVyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDO0lBQ3ZGLEdBQUcsQ0FBQyxDQUFDLEVBQUVpQixHQUFZLENBQUMsU0FBUyxFQUFFUyxRQUFrQixDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUMsS0FBS0EsUUFBa0IsQ0FBQyxlQUFlLENBQUMsY0FBYyxDQUFDLGFBQWEsb0JBQW9CMUIsT0FBSyxDQUFDLGFBQWEsQ0FBQ1UsVUFBUSxFQUFFO0lBQ3JNLElBQUksS0FBSyxFQUFFLDBCQUEwQjtJQUNyQyxJQUFJLFdBQVcsRUFBRSxrREFBa0Q7SUFDbkUsR0FBRyxrQkFBa0JWLE9BQUssQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFO0lBQ3JELElBQUksS0FBSyxFQUFFaUIsR0FBWSxDQUFDLG1CQUFtQixFQUFFUyxRQUFrQixDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDO0lBQ3pHLElBQUksUUFBUSxFQUFFLENBQUMsQ0FBQyxLQUFLO0lBQ3JCLE1BQU1QLEdBQVksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMzQyxNQUFNLFVBQVUsQ0FBQyxhQUFhLENBQUMsRUFBRSxJQUFJLEVBQUVjLDZCQUF1QyxFQUFFLENBQUMsQ0FBQztJQUNsRixLQUFLO0lBQ0wsR0FBRyxFQUFFLGlCQUFpQixDQUFDLENBQUMsa0JBQWtCakMsT0FBSyxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUU7SUFDMUUsSUFBSSxLQUFLLEVBQUVpQixHQUFZLENBQUMsU0FBUyxFQUFFUyxRQUFrQixDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUM7SUFDL0UsSUFBSSxRQUFRLEVBQUUsQ0FBQyxDQUFDLEtBQUtQLEdBQVksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO0lBQy9DLElBQUksSUFBSSxFQUFFLHNFQUFzRTtJQUNoRixHQUFHLEVBQUUsa0RBQWtELENBQUMsa0JBQWtCbkIsT0FBSyxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUU7SUFDMUcsSUFBSSxLQUFLLEVBQUVpQixHQUFZLENBQUMsY0FBYyxFQUFFUyxRQUFrQixDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUM7SUFDekYsSUFBSSxRQUFRLEVBQUUsQ0FBQyxDQUFDLEtBQUtQLEdBQVksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO0lBQ3BELElBQUksSUFBSSxFQUFFLDBFQUEwRTtJQUNwRixHQUFHLEVBQUUsMENBQTBDLENBQUMsa0JBQWtCbkIsT0FBSyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLElBQUksa0JBQWtCQSxPQUFLLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLDRCQUE0QixDQUFDLGtCQUFrQkEsT0FBSyxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUU7SUFDaFAsSUFBSSxTQUFTLEVBQUV3QixnQkFBTSxDQUFDLFVBQVU7SUFDaEMsR0FBRyxrQkFBa0J4QixPQUFLLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRTtJQUNqRCxJQUFJLE9BQU8sRUFBRSxZQUFZO0lBQ3pCLEdBQUcsRUFBRSxRQUFRLENBQUMsa0JBQWtCQSxPQUFLLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRTtJQUM1RCxJQUFJLEtBQUssRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUc7SUFDNUIsSUFBSSxPQUFPLEVBQUUsWUFBWTtJQUN6QixHQUFHLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BCLENBQUM7SUFDRCxNQUFNLFlBQVksR0FBRyxZQUFZO0lBQ2pDLEVBQUUsT0FBTyxhQUFhLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDa0MsUUFBZSxFQUFFLENBQUMsRUFBRSxlQUFlLENBQUMsQ0FBQztJQUN0RyxDQUFDLENBQUM7SUFDRixNQUFNLFlBQVksR0FBRyxZQUFZO0lBQ2pDLEVBQUUsTUFBTSxDQUFDLFlBQVksQ0FBQyxHQUFHLE1BQU0sYUFBYSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDN0UsRUFBRSxNQUFNLGVBQWUsR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLFVBQVUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUN0RixFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDO0lBQ25DLElBQUksT0FBTyxLQUFLQyxJQUFVLENBQUMsb0RBQW9ELEVBQUU7SUFDakYsTUFBTSxRQUFRLEVBQUUsR0FBRztJQUNuQixLQUFLLENBQUMsQ0FBQztJQUNQLEVBQUUsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUNsRCxFQUFFLE1BQU0sZ0JBQWdCLEdBQUcsTUFBTTtJQUNqQyxJQUFJQyxLQUFjLEVBQUUsQ0FBQztJQUNyQixJQUFJQyxNQUFlLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDakMsR0FBRyxDQUFDO0lBQ0osRUFBRSxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBSyxxQkFBcUJyQyxPQUFLLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUU7SUFDekYsSUFBSSxHQUFHLEtBQUs7SUFDWixJQUFJLElBQUksRUFBRSxLQUFLLENBQUMsU0FBUyxDQUFDLEtBQUs7SUFDL0IsR0FBRyxrQkFBa0JBLE9BQUssQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRTtJQUM1RCxJQUFJLFNBQVMsRUFBRSxLQUFLO0lBQ3BCLEdBQUcsa0JBQWtCQSxPQUFLLENBQUMsYUFBYSxDQUFDLE9BQU8sRUFBRTtJQUNsRCxJQUFJLE9BQU8sRUFBRSxtQkFBbUI7SUFDaEMsR0FBRyxFQUFFLGVBQWUsQ0FBQyxDQUFDLGtCQUFrQkEsT0FBSyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUFFLElBQUksa0JBQWtCQSxPQUFLLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsK0JBQStCLENBQUMsQ0FBQyxrQkFBa0JBLE9BQUssQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxJQUFJLGtCQUFrQkEsT0FBSyxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUU7SUFDaFIsSUFBSSxLQUFLLEVBQUUsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFO0lBQ3pCLElBQUksT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRztJQUM3QixHQUFHLGtCQUFrQkEsT0FBSyxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUU7SUFDakQsSUFBSSxJQUFJLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJO0lBQzNCLElBQUksS0FBSyxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSztJQUM5QixJQUFJLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTztJQUMxQixHQUFHLEVBQUUsUUFBUSxDQUFDLGtCQUFrQkEsT0FBSyxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUU7SUFDNUQsSUFBSSxJQUFJLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJO0lBQzNCLElBQUksS0FBSyxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRztJQUM1QixJQUFJLE9BQU8sRUFBRSxNQUFNO0lBQ25CLE1BQU0sZ0JBQWdCLEVBQUUsQ0FBQztJQUN6QixNQUFNLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUN0QixLQUFLO0lBQ0wsR0FBRyxFQUFFLHlCQUF5QixDQUFDLGtCQUFrQkEsT0FBSyxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUU7SUFDN0UsSUFBSSxPQUFPLEVBQUUsWUFBWTtJQUN6QixNQUFNLE1BQU0sWUFBWSxFQUFFLENBQUM7SUFDM0IsTUFBTSxnQkFBZ0IsRUFBRSxDQUFDO0lBQ3pCLE1BQU0sS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3RCLEtBQUs7SUFDTCxHQUFHLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNqQixDQUFDOzs7Ozs7QUNuR0QsK0JBQWUsQ0FBQyxjQUFjLEtBQUs7SUFDbkMsRUFBRSxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBSyxxQkFBcUJBLE9BQUssQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRTtJQUN6RixJQUFJLEdBQUcsS0FBSztJQUNaLElBQUksSUFBSSxFQUFFLEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBTTtJQUNoQyxHQUFHLGtCQUFrQkEsT0FBSyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFO0lBQzVELElBQUksU0FBUyxFQUFFLEtBQUs7SUFDcEIsR0FBRyxrQkFBa0JBLE9BQUssQ0FBQyxhQUFhLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxDQUFDLGtCQUFrQkEsT0FBSyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUFFLElBQUksa0JBQWtCQSxPQUFLLENBQUMsYUFBYSxDQUFDLGdCQUFnQixFQUFFO0lBQ3JMLElBQUksR0FBRyxFQUFFLGNBQWMsRUFBRTtJQUN6QixJQUFJLHFCQUFxQixFQUFFLEtBQUs7SUFDaEMsR0FBRyxDQUFDLGtCQUFrQkEsT0FBSyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUU7SUFDakQsSUFBSSxLQUFLLEVBQUUsRUFBRSxhQUFhLEVBQUUsTUFBTSxFQUFFO0lBQ3BDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ1IsQ0FBQzs7SUNWYyw0QkFBUSxDQUFDLEtBQUssRUFBRTtJQUMvQixFQUFFLHVCQUF1QkEsT0FBSyxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUU7SUFDMUQsSUFBSSxLQUFLLEVBQUUsVUFBVTtJQUNyQixJQUFJLE9BQU8sRUFBRXNDLGFBQWtCLENBQUMsZ0JBQWdCO0lBQ2hELEdBQUcsa0JBQWtCdEMsT0FBSyxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFO0lBQy9ELElBQUksRUFBRSxFQUFFLE1BQU07SUFDZCxJQUFJLEtBQUssRUFBRSxlQUFlO0lBQzFCLElBQUksTUFBTSxFQUFFLE1BQU0sb0JBQW9CLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQztJQUN0RCxHQUFHLENBQUMsa0JBQWtCQSxPQUFLLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUU7SUFDaEUsSUFBSSxFQUFFLEVBQUUsUUFBUTtJQUNoQixJQUFJLEtBQUssRUFBRSxpQkFBaUI7SUFDNUIsSUFBSSxLQUFLLEVBQUUsYUFBYTtJQUN4QixJQUFJLE1BQU0sRUFBRSxNQUFNO0lBQ2xCLE1BQU0sVUFBVSxDQUFDLFFBQVEsRUFBRSxDQUFDLHNDQUFzQyxFQUFFLEtBQUssQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEVBQUU7SUFDeEYsUUFBUTtJQUNSLFVBQVUsSUFBSSxFQUFFLFFBQVE7SUFDeEIsVUFBVSxNQUFNLEVBQUUsTUFBTTtJQUN4QixZQUFZLFNBQVMsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3JELFdBQVc7SUFDWCxVQUFVLEtBQUssRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUc7SUFDbEMsU0FBUztJQUNULFFBQVE7SUFDUixVQUFVLElBQUksRUFBRSxRQUFRO0lBQ3hCLFVBQVUsTUFBTSxFQUFFLE1BQU07SUFDeEIsV0FBVztJQUNYLFVBQVUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSztJQUNwQyxVQUFVLElBQUksRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUk7SUFDakMsU0FBUztJQUNULE9BQU8sQ0FBQyxDQUFDO0lBQ1QsS0FBSztJQUNMLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDTjs7SUN0QkEsTUFBTSxlQUFlLEdBQUc2QixpQkFBeUIsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ3JFLE1BQU0sRUFBRSxhQUFhLEVBQUUsR0FBR0osV0FBbUIsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUMvRCxNQUFNLEVBQUUsV0FBVyxFQUFFLEdBQUdBLFdBQW1CLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDM0QsTUFBTSxFQUFFLGVBQWUsRUFBRSxHQUFHQSxXQUFtQixDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDbkUsTUFBTWMsaUJBQWUsR0FBR1YsaUJBQXlCLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUNyRSxNQUFNVyxnQkFBYyxHQUFHLEVBQUUsQ0FBQztJQUNYLG9CQUFRLEdBQUc7SUFDMUIsRUFBRSxJQUFJLFlBQVksR0FBRyxzQkFBc0J4QyxPQUFLLENBQUMsYUFBYSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNuRixFQUFFLFlBQVksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO0lBQ3pDLEVBQUVzQixLQUFhLENBQUMsYUFBYSxFQUFFbUIsSUFBWSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsV0FBVyxLQUFLLDhCQUE4QixDQUFDLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxHQUFHLEVBQUUsS0FBSyxLQUFLO0lBQ3BKLElBQUksYUFBYSxFQUFFLENBQUM7SUFDcEIsSUFBSSxJQUFJLG1CQUFtQixHQUFHLGVBQWUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLElBQUksRUFBRSxXQUFXLEtBQUsscUJBQXFCLENBQUMsQ0FBQztJQUMxRyxJQUFJLElBQUksbUJBQW1CLElBQUksSUFBSTtJQUNuQyxNQUFNLE9BQU87SUFDYixJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsS0FBSztJQUM3RCxNQUFNLE1BQU0sVUFBVSxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEtBQUssUUFBUSxDQUFDLGVBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3pFLE1BQU0sbUJBQW1CLENBQUMsS0FBSyxDQUFDLGlCQUFpQixHQUFHLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDekksS0FBSyxDQUFDLENBQUM7SUFDUCxJQUFJLE1BQU0sTUFBTSxHQUFHLG1CQUFtQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDO0lBQzdELElBQUksSUFBSSxNQUFNLElBQUksSUFBSTtJQUN0QixNQUFNLE9BQU87SUFDYixJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsbUJBQW1CLENBQUMsS0FBSyxFQUFFO0lBQzdDLE1BQU0sUUFBUSxFQUFFLE1BQU07SUFDdEIsS0FBSyxDQUFDLENBQUM7SUFDUCxJQUFJLElBQUksbUJBQW1CLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLElBQUksRUFBRSxXQUFXLEtBQUssV0FBVyxDQUFDO0lBQzVGLE1BQU0sT0FBTztJQUNiLElBQUksbUJBQW1CLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLGlCQUFpQnpDLE9BQUssQ0FBQyxhQUFhLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDckcsR0FBRyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0QsTUFBTSxZQUFZLEdBQUcsTUFBTTtJQUMzQixFQUFFLGFBQWEsRUFBRSxDQUFDO0lBQ2xCLEVBQUUsUUFBUWlCLEdBQVksQ0FBQyxTQUFTLEVBQUVTLFFBQWtCLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQztJQUNsRixJQUFJLEtBQUtBLFFBQWtCLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FBQyxhQUFhLEVBQUU7SUFDMUUsTUFBTSx1QkFBdUIxQixPQUFLLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRTtJQUN4RCxRQUFRLFNBQVMsRUFBRXdCLGdCQUFNLENBQUMsT0FBTztJQUNqQyxPQUFPLEVBQUUsU0FBUyxDQUFDLGFBQWEsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsS0FBSztJQUNyRCxRQUFRLHVCQUF1QnhCLE9BQUssQ0FBQyxhQUFhLENBQUMsY0FBYyxFQUFFO0lBQ25FLFVBQVUsR0FBRyxFQUFFLFFBQVEsRUFBRTtJQUN6QixTQUFTLENBQUMsQ0FBQztJQUNYLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDVixLQUFLO0lBQ0wsSUFBSSxTQUFTO0lBQ2IsTUFBTSx1QkFBdUJBLE9BQUssQ0FBQyxhQUFhLENBQUNBLE9BQUssQ0FBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLFNBQVMsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLEtBQUs7SUFDbkgsUUFBUSx1QkFBdUJBLE9BQUssQ0FBQyxhQUFhLENBQUMsWUFBWSxFQUFFO0lBQ2pFLFVBQVUsR0FBRyxFQUFFLFFBQVEsRUFBRTtJQUN6QixTQUFTLENBQUMsQ0FBQztJQUNYLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDVixLQUFLO0lBQ0wsR0FBRztJQUNILENBQUMsQ0FBQztJQUNLLE1BQU0sWUFBWSxHQUFHLENBQUMsRUFBRSxRQUFRLEVBQUUsS0FBSztJQUM5QyxFQUFFLE1BQU0sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLEdBQUdBLE9BQUssQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQzVFLEVBQUUsdUJBQXVCQSxPQUFLLENBQUMsYUFBYSxDQUFDQSxPQUFLLENBQUMsUUFBUSxFQUFFLElBQUksa0JBQWtCQSxPQUFLLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRTtJQUM5RyxJQUFJLE9BQU8sRUFBRSxNQUFNO0lBQ25CLE1BQU0sU0FBUyxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMvQyxNQUFNLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3JCLEtBQUs7SUFDTCxHQUFHLGtCQUFrQkEsT0FBSyxDQUFDLGFBQWEsQ0FBQyxlQUFlLEVBQUU7SUFDMUQsSUFBSSxTQUFTLEVBQUUsV0FBVyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFd0IsZ0JBQU0sQ0FBQyxtQkFBbUIsRUFBRSxJQUFJLEdBQUdBLGdCQUFNLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUMzRyxHQUFHLGtCQUFrQnhCLE9BQUssQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFO0lBQ2pELElBQUksS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLFNBQVMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUU7SUFDbEQsR0FBRyxrQkFBa0JBLE9BQUssQ0FBQyxhQUFhLENBQUMsV0FBVyxFQUFFO0lBQ3RELElBQUksSUFBSSxFQUFFLGVBQWU7SUFDekIsSUFBSSxJQUFJLEVBQUUsTUFBTTtJQUNoQixJQUFJLFNBQVMsRUFBRSxXQUFXLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUV3QixnQkFBTSxDQUFDLElBQUksQ0FBQztJQUM5RCxHQUFHLENBQUMsa0JBQWtCeEIsT0FBSyxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUU7SUFDaEQsSUFBSSxTQUFTLEVBQUUsV0FBVyxDQUFDLHNCQUFzQixDQUFDLGtCQUFrQixDQUFDLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFd0IsZ0JBQU0sQ0FBQyxJQUFJLENBQUM7SUFDcEgsR0FBRyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksSUFBSSxTQUFTLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sS0FBSztJQUN4RSxJQUFJLE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbEQsSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJO0lBQ3BCLE1BQU0sT0FBTyxJQUFJLENBQUM7SUFDbEIsSUFBSSx1QkFBdUJ4QixPQUFLLENBQUMsYUFBYSxDQUFDLGFBQWEsRUFBRTtJQUM5RCxNQUFNLEdBQUcsRUFBRSxJQUFJO0lBQ2YsTUFBTSxPQUFPLEVBQUUsUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUM7SUFDeEMsTUFBTSxRQUFRLEVBQUUsZUFBZSxDQUFDLFlBQVksRUFBRSxLQUFLLElBQUk7SUFDdkQsS0FBSyxDQUFDLENBQUM7SUFDUCxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ04sQ0FBQyxDQUFDO0lBQ0YsTUFBTSxZQUFZLEdBQUcsQ0FBQyxZQUFZLEtBQUssWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sS0FBSyxRQUFRLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxFQUFFLFNBQVMsS0FBSyxHQUFHLEdBQUcsZUFBZSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQy9KLE1BQU0sY0FBYyxHQUFHLENBQUMsRUFBRSxRQUFRLEVBQUUsS0FBSztJQUNoRCxFQUFFLE1BQU0sWUFBWSxHQUFHQSxPQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sU0FBUyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUM3RSxFQUFFLE1BQU0sZ0JBQWdCLEdBQUdBLE9BQUssQ0FBQyxPQUFPLENBQUMsTUFBTTtJQUMvQyxJQUFJLE9BQU8sWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sS0FBSyxlQUFlLENBQUMsWUFBWSxFQUFFLEtBQUssUUFBUSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQzlHLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNULEVBQUUsTUFBTSxDQUFDLFNBQVMsRUFBRSxZQUFZLENBQUMsR0FBR0EsT0FBSyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztJQUMvRSxFQUFFLE1BQU0sQ0FBQyxxQkFBcUIsRUFBRSxlQUFlLENBQUMsR0FBR0EsT0FBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN6RSxFQUFFQSxPQUFLLENBQUMsU0FBUyxDQUFDLE1BQU07SUFDeEIsSUFBSSxNQUFNLHFCQUFxQixHQUFHLENBQUMsRUFBRSxTQUFTLEVBQUUsS0FBSztJQUNyRCxNQUFNLElBQUksWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sS0FBSyxTQUFTLEtBQUssUUFBUSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN2RixRQUFRLFlBQVksQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztJQUNqRCxLQUFLLENBQUM7SUFDTixJQUFJLE1BQU0sb0JBQW9CLEdBQUcsQ0FBQyxFQUFFLEtBQUssRUFBRSxLQUFLO0lBQ2hELE1BQU0sZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzdCLEtBQUssQ0FBQztJQUNOLElBQUksVUFBVSxDQUFDLFNBQVMsQ0FBQyx1QkFBdUIsRUFBRSxxQkFBcUIsQ0FBQyxDQUFDO0lBQ3pFLElBQUksVUFBVSxDQUFDLFNBQVMsQ0FBQyxzQkFBc0IsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO0lBQ3ZFLElBQUksT0FBTyxNQUFNO0lBQ2pCLE1BQU0sVUFBVSxDQUFDLFdBQVcsQ0FBQyx1QkFBdUIsRUFBRSxxQkFBcUIsQ0FBQyxDQUFDO0lBQzdFLE1BQU0sVUFBVSxDQUFDLFdBQVcsQ0FBQyxzQkFBc0IsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO0lBQzNFLEtBQUssQ0FBQztJQUNOLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNULEVBQUUsdUJBQXVCQSxPQUFLLENBQUMsYUFBYSxDQUFDQSxPQUFLLENBQUMsUUFBUSxFQUFFLElBQUksa0JBQWtCQSxPQUFLLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRTtJQUMvRyxJQUFJLFFBQVEsRUFBRSxNQUFNLENBQUMsU0FBUyxDQUFDLEtBQUs7SUFDcEMsSUFBSSxTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJO0lBQ3BDLElBQUksWUFBWSxFQUFFLENBQUMsS0FBSyxxQkFBcUJBLE9BQUssQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFO0lBQ3hFLE1BQU0sR0FBRyxLQUFLO0lBQ2QsS0FBSyxrQkFBa0JBLE9BQUssQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRTtJQUM1RCxNQUFNLGVBQWUsRUFBRSxDQUFDO0lBQ3hCLE1BQU0sSUFBSSxFQUFFLEtBQUssQ0FBQyxTQUFTLENBQUMsT0FBTztJQUNuQyxLQUFLLGtCQUFrQkEsT0FBSyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUU7SUFDbEQsTUFBTSxTQUFTLEVBQUV3QixnQkFBTSxDQUFDLGtCQUFrQjtJQUMxQyxLQUFLLEVBQUUsWUFBWSxDQUFDLE1BQU0sS0FBSyxDQUFDLEdBQUcsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sS0FBSztJQUNoRSxNQUFNLE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDcEQsTUFBTSxJQUFJLElBQUksSUFBSSxJQUFJO0lBQ3RCLFFBQVEsT0FBTyxJQUFJLENBQUM7SUFDcEIsTUFBTSx1QkFBdUJ4QixPQUFLLENBQUMsYUFBYSxDQUFDLGFBQWEsRUFBRTtJQUNoRSxRQUFRLEdBQUcsRUFBRSxJQUFJO0lBQ2pCLFFBQVEsT0FBTyxFQUFFLFFBQVEsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDO0lBQzFDLFFBQVEsUUFBUSxFQUFFLGVBQWUsQ0FBQyxZQUFZLEVBQUUsS0FBSyxJQUFJO0lBQ3pELE9BQU8sQ0FBQyxDQUFDO0lBQ1QsS0FBSyxDQUFDLG1CQUFtQkEsT0FBSyxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUU7SUFDbkQsTUFBTSxLQUFLLEVBQUUsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFO0lBQ2xDLEtBQUssRUFBRSxrQ0FBa0Msa0JBQWtCQSxPQUFLLENBQUMsYUFBYSxDQUFDLEdBQUcsRUFBRTtJQUNwRixNQUFNLE9BQU8sRUFBRSxNQUFNLG9CQUFvQixDQUFDLFFBQVEsQ0FBQztJQUNuRCxLQUFLLEVBQUUsa0JBQWtCLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbkMsR0FBRyxFQUFFLENBQUMsS0FBSyxxQkFBcUJBLE9BQUssQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFO0lBQzNELElBQUksR0FBRyxLQUFLO0lBQ1osSUFBSSxTQUFTLEVBQUUsV0FBVyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLHNCQUFzQixDQUFDLGtCQUFrQixDQUFDLENBQUMsU0FBUyxDQUFDO0lBQzNHLElBQUksYUFBYSxFQUFFLENBQUMsQ0FBQyxLQUFLMEMsYUFBbUIsQ0FBQyxlQUFlLENBQUMsQ0FBQyxFQUFFLHNCQUFzQjFDLE9BQUssQ0FBQyxhQUFhLENBQUMsbUJBQW1CLEVBQUU7SUFDaEksTUFBTSxRQUFRO0lBQ2QsS0FBSyxDQUFDLENBQUM7SUFDUCxHQUFHLGtCQUFrQkEsT0FBSyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUU7SUFDaEQsSUFBSSxTQUFTLEVBQUUsV0FBVyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLE9BQU8sQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLGdCQUFnQixHQUFHLFdBQVcsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLG1CQUFtQixFQUFFLE9BQU8sQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLEdBQUcsS0FBSyxDQUFDLEVBQUUsT0FBTyxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUM7SUFDeE8sR0FBRyxrQkFBa0JBLE9BQUssQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFO0lBQ2hELElBQUksU0FBUyxFQUFFLFdBQVcsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRXdCLGdCQUFNLENBQUMsZ0JBQWdCLENBQUM7SUFDekUsR0FBRyxrQkFBa0J4QixPQUFLLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRTtJQUMvQyxJQUFJLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVE7SUFDdEMsSUFBSSxTQUFTLEVBQUV3QixnQkFBTSxDQUFDLFlBQVk7SUFDbEMsR0FBRyxrQkFBa0J4QixPQUFLLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRTtJQUNqRCxJQUFJLEtBQUssRUFBRSxFQUFFLEtBQUssRUFBRSxTQUFTLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7SUFDdEUsR0FBRyxFQUFFLFFBQVEsQ0FBQyxFQUFFLENBQUMscUJBQXFCLElBQUlpQixHQUFZLENBQUMsbUJBQW1CLEVBQUVTLFFBQWtCLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsb0JBQW9CMUIsT0FBSyxDQUFDLGFBQWEsQ0FBQ3VDLGlCQUFlLEVBQUU7SUFDak0sSUFBSSxJQUFJLEVBQUVDLGdCQUFjO0lBQ3hCLElBQUksS0FBSyxFQUFFLFNBQVMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxLQUFLLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDOUUsR0FBRyxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsU0FBUyxDQUFDLG9CQUFvQnhDLE9BQUssQ0FBQyxhQUFhLENBQUMsV0FBVyxFQUFFO0lBQzlFLElBQUksS0FBSyxFQUFFLFNBQVM7SUFDcEIsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ1YsQ0FBQzs7Ozs7Ozs7OztJQ3pKRCxNQUFNLGVBQWUsR0FBRzZCLGlCQUF5QixDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDckUsTUFBTSxjQUFjLEdBQUcsRUFBRSxDQUFDO0lBQzFCLE1BQU0saUJBQWlCLEdBQUcsQ0FBQyxDQUFDO0lBQ2IsZ0JBQVEsQ0FBQyxLQUFLLEVBQUU7SUFDL0IsRUFBRSx1QkFBdUI3QixPQUFLLENBQUMsYUFBYSxDQUFDLFdBQVcsRUFBRTtJQUMxRCxJQUFJLEtBQUssRUFBRSxVQUFVO0lBQ3JCLElBQUksT0FBTyxFQUFFc0MsYUFBa0IsQ0FBQyxnQkFBZ0I7SUFDaEQsR0FBRyxrQkFBa0J0QyxPQUFLLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUU7SUFDaEUsSUFBSSxLQUFLLEVBQUUsaUJBQWlCO0lBQzVCLEdBQUcsRUFBRSxTQUFTLENBQUMsYUFBYSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxxQkFBcUJBLE9BQUssQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRTtJQUMzRyxJQUFJLEVBQUUsRUFBRSxDQUFDLFNBQVMsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUM5QixJQUFJLEtBQUssa0JBQWtCQSxPQUFLLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxJQUFJLGtCQUFrQkEsT0FBSyxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUU7SUFDdkcsTUFBTSxTQUFTLEVBQUV3QixnQkFBTSxDQUFDLElBQUk7SUFDNUIsTUFBTSxLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsU0FBUyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRTtJQUNwRCxLQUFLLEVBQUUsUUFBUSxDQUFDLGtCQUFrQnhCLE9BQUssQ0FBQyxhQUFhLENBQUMsZUFBZSxFQUFFO0lBQ3ZFLE1BQU0sSUFBSSxFQUFFLGNBQWM7SUFDMUIsTUFBTSxHQUFHLEVBQUUsaUJBQWlCO0lBQzVCLE1BQU0sS0FBSyxFQUFFLFNBQVMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sS0FBSyxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2hILEtBQUssQ0FBQyxDQUFDO0lBQ1AsSUFBSSxNQUFNLEVBQUUsTUFBTSxTQUFTLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDO0lBQzNELEdBQUcsQ0FBQyxDQUFDLENBQUMsa0JBQWtCQSxPQUFLLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLGtCQUFrQkEsT0FBSyxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFO0lBQ3hJLElBQUksRUFBRSxFQUFFLFdBQVc7SUFDbkIsSUFBSSxLQUFLLEVBQUUsc0JBQXNCO0lBQ2pDLElBQUksSUFBSSxFQUFFLHNCQUFzQkEsT0FBSyxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUU7SUFDakUsTUFBTSxJQUFJLEVBQUUsTUFBTTtJQUNsQixNQUFNLElBQUksRUFBRSxhQUFhO0lBQ3pCLEtBQUssQ0FBQztJQUNOLElBQUksTUFBTSxFQUFFLG9CQUFvQjtJQUNoQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ047O0lDbENBLE1BQU0sRUFBRSxLQUFLLEVBQUUsR0FBRyxPQUFPLENBQUM7SUFRWCxzQkFBUSxHQUFHO0lBQzFCLEVBQUVzQixLQUFhLENBQUMsZUFBZSxFQUFFTyxpQkFBeUIsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLFNBQVMsRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLEtBQUssS0FBSztJQUNySCxJQUFJLE1BQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO0lBQ2xDLElBQUksTUFBTSxPQUFPLEdBQUcsU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDbkQsSUFBSSxNQUFNLFVBQVUsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQztJQUMxQyxJQUFJLElBQUksVUFBVSxJQUFJLElBQUk7SUFDMUIsTUFBTSxPQUFPO0lBQ2IsSUFBSSxHQUFHLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxTQUFTLEdBQUcsSUFBSSxFQUFFO0lBQzNDLE1BQU0sTUFBTSxHQUFHLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDL0MsTUFBTSxHQUFHLENBQUMsS0FBSyxDQUFDLFNBQVMsSUFBSSxDQUFDLENBQUMsRUFBRUwsZ0JBQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO0lBQzFELE1BQU0sTUFBTSxXQUFXLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUM7SUFDN0MsTUFBTSxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUU7SUFDN0IsUUFBUSxNQUFNLFVBQVUsR0FBRyxXQUFXLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLEtBQUssYUFBYSxDQUFDLENBQUM7SUFDN0csUUFBUSxJQUFJLE9BQU8sSUFBSSxVQUFVLEVBQUU7SUFDbkMsVUFBVSxPQUFPLFdBQVcsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3hELFNBQVM7SUFDVCxRQUFRLElBQUlQLEdBQVksQ0FBQyxTQUFTLEVBQUVTLFFBQWtCLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxFQUFFO0lBQ2xGLFVBQVUsV0FBVyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLGtCQUFrQixLQUFLLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRTtJQUM3RixZQUFZLFNBQVMsRUFBRSxXQUFXLENBQUNGLGdCQUFNLENBQUMsU0FBUyxFQUFFLE9BQU8sR0FBR0EsZ0JBQU0sQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO0lBQ2xGLFlBQVksT0FBTyxFQUFFLENBQUMsQ0FBQyxLQUFLO0lBQzVCLGNBQWMsSUFBSSxPQUFPLEVBQUU7SUFDM0IsZ0JBQWdCLFNBQVMsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2xGLGVBQWUsTUFBTTtJQUNyQixnQkFBZ0JrQixhQUFtQixDQUFDLGVBQWUsQ0FBQyxDQUFDLEVBQUUsc0JBQXNCLEtBQUssQ0FBQyxhQUFhLENBQUMsT0FBTyxFQUFFO0lBQzFHLGtCQUFrQixNQUFNLEVBQUUsSUFBSSxDQUFDLEVBQUU7SUFDakMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDO0lBQ3BCLGVBQWU7SUFDZixhQUFhO0lBQ2IsV0FBVyxFQUFFLENBQUMsT0FBTyxtQkFBbUIsS0FBSyxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUU7SUFDekUsWUFBWSxJQUFJLEVBQUUsVUFBVTtJQUM1QixXQUFXLENBQUMsbUJBQW1CLEtBQUssQ0FBQyxhQUFhLENBQUMsV0FBVyxFQUFFO0lBQ2hFLFlBQVksSUFBSSxFQUFFLFlBQVk7SUFDOUIsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2YsU0FBUztJQUNULE9BQU87SUFDUCxNQUFNLE9BQU8sR0FBRyxDQUFDO0lBQ2pCLEtBQUssQ0FBQztJQUNOLEdBQUcsQ0FBQyxDQUFDO0lBQ0w7O0lDdkNBLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBR2pCLFdBQW1CLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDN0MsTUFBTSxFQUFFLE9BQU8sRUFBRSxHQUFHZ0IsSUFBWSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsV0FBVyxLQUFLLFdBQVcsQ0FBQyxDQUFDO0lBQ2pGLE1BQU0sMEJBQTBCLEdBQUdaLGlCQUF5QixDQUFDLDRCQUE0QixDQUFDLENBQUM7SUFDM0YsTUFBTSxTQUFTLEdBQUdBLGlCQUF5QixDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3pELE1BQU0sWUFBWSxHQUFHQSxpQkFBeUIsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUMvRCxNQUFNLEVBQUUsZUFBZSxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsY0FBYyxFQUFFLEdBQUdKLFdBQW1CLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUN4RyxNQUFNLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsR0FBR0EsV0FBbUIsQ0FBQyxPQUFPLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDbkYsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHQSxXQUFtQixDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ3ZELE1BQU0sRUFBRSxTQUFTLEVBQUUsR0FBR0EsV0FBbUIsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0lBQ2pFLE1BQU0sVUFBVSxHQUFHLGNBQWMsQ0FBQztJQUNuQix5QkFBUSxHQUFHO0lBQzFCLEVBQUVILEtBQWEsQ0FBQyxvQkFBb0IsRUFBRW1CLElBQVksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLFdBQVcsS0FBSyxvQkFBb0IsQ0FBQyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsR0FBRyxFQUFFLEtBQUssS0FBSztJQUNqSixJQUFJLElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDO0lBQ3ZFLE1BQU0sT0FBTztJQUNiLElBQUksTUFBTSxpQkFBaUIsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUM7SUFDL0QsSUFBSSxNQUFNLGVBQWUsR0FBRyxpQkFBaUIsQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDNUUsSUFBSSxPQUFPLGlCQUFpQixDQUFDLGlCQUFpQixDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztJQUMzRCxJQUFJLE1BQU0sa0JBQWtCLEdBQUcsRUFBRSxDQUFDO0lBQ2xDLElBQUksS0FBSyxNQUFNLFlBQVksSUFBSSxTQUFTLENBQUMsYUFBYSxFQUFFLEVBQUU7SUFDMUQsTUFBTSxrQkFBa0IsQ0FBQyxJQUFJLGlCQUFpQnpDLE9BQUssQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFO0lBQ3hFLFFBQVEsRUFBRSxFQUFFLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQyxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQzNDLFFBQVEsS0FBSyxFQUFFLFNBQVMsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDO0lBQy9DLFFBQVEsYUFBYSxFQUFFLENBQUMsQ0FBQyxLQUFLMEMsYUFBbUIsQ0FBQyxlQUFlLENBQUMsQ0FBQyxFQUFFLHNCQUFzQjFDLE9BQUssQ0FBQyxhQUFhLENBQUMsbUJBQW1CLEVBQUU7SUFDcEksVUFBVSxRQUFRLEVBQUUsWUFBWTtJQUNoQyxTQUFTLENBQUMsQ0FBQztJQUNYLE9BQU8sRUFBRSxZQUFZLENBQUMsQ0FBQyxDQUFDO0lBQ3hCLEtBQUs7SUFDTCxJQUFJLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxDQUFDLEdBQUcsaUJBQWlCLGtCQUFrQkEsT0FBSyxDQUFDLGFBQWEsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEVBQUUsR0FBRyxrQkFBa0Isa0JBQWtCQSxPQUFLLENBQUMsYUFBYSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsRUFBRSxlQUFlLENBQUMsQ0FBQztJQUM5TSxHQUFHLENBQUMsQ0FBQztJQUNMLEVBQUVzQixLQUFhLENBQUMsa0JBQWtCLEVBQUVtQixJQUFZLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxXQUFXLEtBQUssWUFBWSxDQUFDLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxHQUFHLEVBQUUsS0FBSyxLQUFLO0lBQ3ZJLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxFQUFFO0lBQ2xELE1BQU0sTUFBTSxRQUFRLEdBQUcsS0FBSyxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztJQUM1RSxNQUFNLEdBQUcsQ0FBQyxLQUFLLENBQUMsUUFBUSxtQkFBbUJ6QyxPQUFLLENBQUMsYUFBYSxDQUFDLGVBQWUsRUFBRTtJQUNoRixRQUFRLEdBQUcsRUFBRSxRQUFRLEVBQUU7SUFDdkIsUUFBUSxHQUFHLEVBQUUsUUFBUTtJQUNyQixPQUFPLENBQUMsQ0FBQztJQUNULEtBQUs7SUFDTCxHQUFHLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRCxNQUFNLGVBQWUsR0FBRyxDQUFDLEVBQUUsUUFBUSxFQUFFLEtBQUs7SUFDMUMsRUFBRSxNQUFNLENBQUMsTUFBTSxFQUFFLFNBQVMsQ0FBQyxHQUFHQSxPQUFLLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2pELEVBQUUsTUFBTSxPQUFPLEdBQUdBLE9BQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxTQUFTLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUNoRixFQUFFLE1BQU0sZUFBZSxHQUFHQSxPQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUN6SixFQUFFLElBQUksT0FBTyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7SUFDNUIsSUFBSSx1QkFBdUJBLE9BQUssQ0FBQyxhQUFhLENBQUNBLE9BQUssQ0FBQyxRQUFRLEVBQUUsSUFBSSxrQkFBa0JBLE9BQUssQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFFO0lBQ3BILE1BQU0sS0FBSyxFQUFFLE1BQU07SUFDbkIsTUFBTSxRQUFRLEVBQUUsU0FBUztJQUN6QixNQUFNLE9BQU8sRUFBRSxNQUFNLFNBQVMsQ0FBQyxFQUFFLENBQUM7SUFDbEMsTUFBTSxTQUFTLEVBQUUsU0FBUztJQUMxQixNQUFNLElBQUksRUFBRSxTQUFTLENBQUMsS0FBSyxDQUFDLE1BQU07SUFDbEMsS0FBSyxDQUFDLGtCQUFrQkEsT0FBSyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsSUFBSSxrQkFBa0JBLE9BQUssQ0FBQyxhQUFhLENBQUMsWUFBWSxFQUFFO0lBQzNHLE1BQU0sS0FBSyxrQkFBa0JBLE9BQUssQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLElBQUksa0JBQWtCQSxPQUFLLENBQUMsYUFBYSxDQUFDLEdBQUcsRUFBRTtJQUN0RyxRQUFRLEtBQUssRUFBRSxFQUFFLEtBQUssRUFBRSxTQUFTLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFLFFBQVEsRUFBRSxDQUFDLEVBQUU7SUFDbkUsT0FBTyxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsZUFBZSxDQUFDLE1BQU0sQ0FBQyxrQkFBa0JBLE9BQUssQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLEVBQUU7SUFDOUcsUUFBUSxJQUFJLEVBQUUsa0JBQWtCO0lBQ2hDLFFBQVEsUUFBUSxFQUFFLFFBQVE7SUFDMUIsT0FBTyxrQkFBa0JBLE9BQUssQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFO0lBQ3BELFFBQVEsU0FBUyxFQUFFLFdBQVcsQ0FBQyxXQUFXLEVBQUUsU0FBUyxDQUFDO0lBQ3RELFFBQVEsT0FBTyxFQUFFLE1BQU0sb0JBQW9CLENBQUMsUUFBUSxDQUFDO0lBQ3JELFFBQVEsS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFO0lBQ2hELE9BQU8sa0JBQWtCQSxPQUFLLENBQUMsYUFBYSxDQUFDLFdBQVcsRUFBRTtJQUMxRCxRQUFRLElBQUksRUFBRSxXQUFXO0lBQ3pCLFFBQVEsSUFBSSxFQUFFLE1BQU07SUFDcEIsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ1gsS0FBSyxDQUFDLENBQUMsRUFBRSxlQUFlLENBQUMsTUFBTSxLQUFLLENBQUMsbUJBQW1CQSxPQUFLLENBQUMsYUFBYSxDQUFDLDBCQUEwQixFQUFFO0lBQ3hHLE1BQU0sU0FBUyxFQUFFLENBQUMsZ0JBQWdCLHFCQUFxQkEsT0FBSyxDQUFDLGFBQWEsQ0FBQyxTQUFTLEVBQUU7SUFDdEYsUUFBUSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLGdCQUFnQixFQUFFLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxDQUFDO0lBQ25FLE9BQU8sQ0FBQztJQUNSLE1BQU0sY0FBYyxFQUFFO0lBQ3RCLFFBQVEsZUFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sS0FBSztJQUN4QyxVQUFVLE1BQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDN0MsVUFBVSxPQUFPO0lBQ2pCLFlBQVksVUFBVSxFQUFFLFVBQVUsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztJQUN6RCxZQUFZLFFBQVEsRUFBRSxJQUFJLENBQUMsTUFBTTtJQUNqQyxZQUFZLEdBQUcsRUFBRSxJQUFJLENBQUMsRUFBRTtJQUN4QixZQUFZLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtJQUNuQyxZQUFZLE1BQU0sRUFBRSxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7SUFDN0MsWUFBWSxJQUFJLEVBQUUsQ0FBQztJQUNuQixZQUFZLElBQUk7SUFDaEIsV0FBVyxDQUFDO0lBQ1osU0FBUyxDQUFDO0lBQ1YsT0FBTztJQUNQLEtBQUssQ0FBQyxtQkFBbUJBLE9BQUssQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFO0lBQ3pELE1BQU0sS0FBSyxFQUFFLFlBQVksQ0FBQyxLQUFLO0lBQy9CLEtBQUssa0JBQWtCQSxPQUFLLENBQUMsYUFBYSxDQUFDLGVBQWUsRUFBRTtJQUM1RCxNQUFNLEdBQUc7SUFDVCxRQUFRLE9BQU8sRUFBRSxHQUFHO0lBQ3BCLFFBQVEsUUFBUSxFQUFFLEdBQUc7SUFDckIsUUFBUSxVQUFVLEVBQUUsOENBQThDO0lBQ2xFLFFBQVEsU0FBUyxFQUFFLDhDQUE4QztJQUNqRSxPQUFPO0lBQ1AsS0FBSyxDQUFDLGtCQUFrQkEsT0FBSyxDQUFDLGFBQWEsQ0FBQyxjQUFjLEVBQUU7SUFDNUQsTUFBTSxJQUFJLGtCQUFrQkEsT0FBSyxDQUFDLGFBQWEsQ0FBQ0EsT0FBSyxDQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUseUVBQXlFLENBQUM7SUFDaEosS0FBSyxDQUFDLGtCQUFrQkEsT0FBSyxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUU7SUFDcEQsTUFBTSxPQUFPLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQyxRQUFRLENBQUM7SUFDbkQsTUFBTSxTQUFTLEVBQUUsTUFBTTtJQUN2QixLQUFLLEVBQUUsNkJBQTZCLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDeEMsR0FBRyxNQUFNO0lBQ1QsSUFBSSx1QkFBdUJBLE9BQUssQ0FBQyxhQUFhLENBQUNBLE9BQUssQ0FBQyxRQUFRLEVBQUUsSUFBSSxrQkFBa0JBLE9BQUssQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFO0lBQ3JILE1BQU0sS0FBSyxFQUFFLFlBQVksQ0FBQyxLQUFLO0lBQy9CLEtBQUssa0JBQWtCQSxPQUFLLENBQUMsYUFBYSxDQUFDLGVBQWUsRUFBRTtJQUM1RCxNQUFNLEdBQUc7SUFDVCxRQUFRLE9BQU8sRUFBRSxHQUFHO0lBQ3BCLFFBQVEsUUFBUSxFQUFFLEdBQUc7SUFDckIsUUFBUSxVQUFVLEVBQUUsOENBQThDO0lBQ2xFLFFBQVEsU0FBUyxFQUFFLDhDQUE4QztJQUNqRSxPQUFPO0lBQ1AsS0FBSyxDQUFDLGtCQUFrQkEsT0FBSyxDQUFDLGFBQWEsQ0FBQyxjQUFjLEVBQUU7SUFDNUQsTUFBTSxJQUFJLGtCQUFrQkEsT0FBSyxDQUFDLGFBQWEsQ0FBQ0EsT0FBSyxDQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsaURBQWlELENBQUM7SUFDeEgsS0FBSyxDQUFDLGtCQUFrQkEsT0FBSyxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUU7SUFDcEQsTUFBTSxPQUFPLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQyxRQUFRLENBQUM7SUFDbkQsTUFBTSxTQUFTLEVBQUUsTUFBTTtJQUN2QixLQUFLLEVBQUUsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3ZCLEdBQUc7SUFDSCxDQUFDOztJQ3pITSxNQUFNLGtCQUFrQixHQUFHLE1BQU07SUFDeEMsRUFBRSxNQUFNLGtCQUFrQixHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUN2RSxFQUFFLE1BQU0sV0FBVyxHQUFHLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsV0FBVyxDQUFDO0lBQ3ZGLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFDMUMsRUFBRSxJQUFJLFFBQVEsR0FBRyxFQUFFLENBQUM7SUFDcEIsRUFBRSxLQUFLLE1BQU0sVUFBVSxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLEVBQUU7SUFDdkQsSUFBSSxNQUFNLE9BQU8sR0FBRyxVQUFVLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsS0FBSyxRQUFRLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEtBQUssUUFBUSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM5SSxJQUFJLElBQUksT0FBTyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7SUFDOUIsTUFBTSxRQUFRLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHO0lBQ2xDLFFBQVEsS0FBSyxFQUFFLFVBQVUsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssRUFBRSxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDeEksUUFBUSxLQUFLLEVBQUUsT0FBTztJQUN0QixRQUFRLElBQUksRUFBRSxDQUFDLFVBQVUsQ0FBQyxTQUFTO0lBQ25DLE9BQU8sQ0FBQztJQUNSLEtBQUs7SUFDTCxHQUFHO0lBQ0gsRUFBRSxPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDLENBQUM7SUFDSyxNQUFNLGNBQWMsR0FBRyxNQUFNO0lBQ3BDLEVBQUUsT0FBTztJQUNULElBQUksTUFBTSxFQUFFLE9BQU8sQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksT0FBTyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM5RixHQUFHLENBQUM7SUFDSixDQUFDLENBQUM7SUFDSyxNQUFNLGtCQUFrQixHQUFHLE1BQU07SUFDeEMsRUFBRSxNQUFNLE9BQU8sR0FBRyxjQUFjLEVBQUUsQ0FBQztJQUNuQyxFQUFFLE9BQU8sT0FBTyxDQUFDLE1BQU0sQ0FBQztJQUN4QixDQUFDOztJQ3JCRCxNQUFNLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxHQUFHeUIsV0FBbUIsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM5RCxNQUFNLEtBQUssR0FBRztJQUNkLEVBQUUsTUFBTSxFQUFFLFFBQVE7SUFDbEIsRUFBRSxXQUFXLEVBQUUsWUFBWTtJQUMzQixDQUFDLENBQUM7SUFDRixNQUFNLEtBQUssR0FBRyxHQUFHLENBQUM7SUFDSCxNQUFNLFNBQVMsU0FBU3pCLE9BQUssQ0FBQyxTQUFTLENBQUM7SUFDdkQsRUFBRSxXQUFXLENBQUMsS0FBSyxFQUFFO0lBQ3JCLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pCLElBQUksSUFBSSxDQUFDLEtBQUssR0FBRztJQUNqQixNQUFNLElBQUksRUFBRSxLQUFLLENBQUMsTUFBTTtJQUN4QixLQUFLLENBQUM7SUFDTixHQUFHO0lBQ0gsRUFBRSxPQUFPLENBQUMsSUFBSSxFQUFFO0lBQ2hCLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7SUFDNUIsR0FBRztJQUNILEVBQUUsTUFBTSxHQUFHO0lBQ1gsSUFBSSx1QkFBdUJBLE9BQUssQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRTtJQUNoRSxNQUFNLElBQUksRUFBRSxLQUFLLENBQUMsU0FBUyxDQUFDLE9BQU87SUFDbkMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLO0lBQ25CLEtBQUssa0JBQWtCQSxPQUFLLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRTtJQUNuRCxNQUFNLFdBQVcsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUk7SUFDbEMsTUFBTSxZQUFZO0lBQ2xCLE1BQU0sS0FBSyxFQUFFLEtBQUs7SUFDbEIsTUFBTSxRQUFRLEVBQUU7SUFDaEIsd0JBQXdCQSxPQUFLLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRTtJQUNuRCxVQUFVLEVBQUUsRUFBRSxLQUFLLENBQUMsTUFBTTtJQUMxQixTQUFTLGtCQUFrQkEsT0FBSyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFO0lBQ2xFLFVBQVUsU0FBUyxFQUFFLEtBQUs7SUFDMUIsU0FBUyxrQkFBa0JBLE9BQUssQ0FBQyxhQUFhLENBQUMsT0FBTyxFQUFFO0lBQ3hELFVBQVUsT0FBTyxFQUFFLG1CQUFtQjtJQUN0QyxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUMsa0JBQWtCQSxPQUFLLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUUsSUFBSSxrQkFBa0JBLE9BQUssQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFO0lBQ2hJLFVBQVUsU0FBUyxFQUFFUyxTQUFPLENBQUMsY0FBYztJQUMzQyxTQUFTLEVBQUUsZ0dBQWdHLENBQUMsQ0FBQyxrQkFBa0JULE9BQUssQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxJQUFJLGtCQUFrQkEsT0FBSyxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUU7SUFDeE4sVUFBVSxPQUFPLEVBQUUsWUFBWTtJQUMvQixZQUFZLE1BQU0sSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2hDLFlBQVksSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDNUMsV0FBVztJQUNYLFNBQVMsRUFBRSxRQUFRLENBQUMsa0JBQWtCQSxPQUFLLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRTtJQUNsRSxVQUFVLEtBQUssRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUs7SUFDcEMsVUFBVSxJQUFJLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJO0lBQ2pDLFVBQVUsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTztJQUNyQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNsQix3QkFBd0JBLE9BQUssQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFO0lBQ25ELFVBQVUsRUFBRSxFQUFFLEtBQUssQ0FBQyxXQUFXO0lBQy9CLFNBQVMsa0JBQWtCQSxPQUFLLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUU7SUFDbEUsVUFBVSxTQUFTLEVBQUUsS0FBSztJQUMxQixTQUFTLGtCQUFrQkEsT0FBSyxDQUFDLGFBQWEsQ0FBQyxPQUFPLEVBQUU7SUFDeEQsVUFBVSxPQUFPLEVBQUUsbUJBQW1CO0lBQ3RDLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQyxrQkFBa0JBLE9BQUssQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBRSxJQUFJLGtCQUFrQkEsT0FBSyxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUU7SUFDN0gsVUFBVSxTQUFTLEVBQUVTLFNBQU8sQ0FBQyxjQUFjO0lBQzNDLFNBQVMsRUFBRSxxRUFBcUUsQ0FBQyxDQUFDLGtCQUFrQlQsT0FBSyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLElBQUksa0JBQWtCQSxPQUFLLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRTtJQUM3TCxVQUFVLE9BQU8sRUFBRSxZQUFZO0lBQy9CLFlBQVksTUFBTSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEMsWUFBWSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2pDLFdBQVc7SUFDWCxTQUFTLEVBQUUsU0FBUyxDQUFDLGtCQUFrQkEsT0FBSyxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUU7SUFDbkUsVUFBVSxLQUFLLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLO0lBQ3BDLFVBQVUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSTtJQUNqQyxVQUFVLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU87SUFDckMsU0FBUyxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFDekIsT0FBTztJQUNQLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDUixHQUFHO0lBQ0gsRUFBRSxNQUFNLE1BQU0sR0FBRztJQUNqQixJQUFJLElBQUkyQyxjQUF1QixFQUFFLENBQUMsTUFBTSxFQUFFO0lBQzFDLE1BQU0sTUFBTSxXQUFXLEdBQUdDLGtCQUEyQixFQUFFLENBQUM7SUFDeEQsTUFBTSxTQUFTLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3BDLEtBQUs7SUFDTCxHQUFHO0lBQ0gsRUFBRSxNQUFNLFVBQVUsR0FBRztJQUNyQixJQUFJLElBQUlELGNBQXVCLEVBQUUsQ0FBQyxNQUFNO0lBQ3hDLE1BQU0sS0FBSyxFQUFFLE9BQU8sRUFBRSxPQUFPLEdBQUcsUUFBUSxDQUFDLENBQUM7SUFDMUMsR0FBRztJQUNIOztJQ3BFQSxJQUFJLGlCQUFpQixHQUFHLEVBQUUsQ0FBQztJQUNaLE1BQU0sU0FBUyxTQUFTLE1BQU0sQ0FBQztJQUM5QyxFQUFFLEtBQUssR0FBRztJQUNWLElBQUksSUFBSSxDQUFDLGdCQUFnQixDQUFDLHNCQUFzQjNDLE9BQUssQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDckYsSUFBSSxVQUFVLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUM3QixJQUFJLFdBQVcsRUFBRSxDQUFDO0lBQ2xCLElBQUksYUFBYSxFQUFFLENBQUM7SUFDcEIsSUFBSSxnQkFBZ0IsRUFBRSxDQUFDO0lBQ3ZCLElBQUksSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7SUFDaEMsSUFBSSxVQUFVLENBQUMsU0FBUyxDQUFDLHNCQUFzQixFQUFFLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0lBQzVFLEdBQUc7SUFDSCxFQUFFLG9CQUFvQixHQUFHO0lBQ3pCLElBQUksSUFBSSxrQkFBa0IsRUFBRTtJQUM1QixNQUFNLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUFLLHFCQUFxQkEsT0FBSyxDQUFDLGFBQWEsQ0FBQzZDLFNBQWdCLEVBQUU7SUFDOUYsUUFBUSxHQUFHLEtBQUs7SUFDaEIsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUNWLEdBQUc7SUFDSCxFQUFFLG9CQUFvQixDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUU7SUFDbEMsSUFBSSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRW5CLFFBQWtCLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQztJQUMzRixNQUFNLFNBQVMsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxRQUFRLEtBQUs7SUFDdEQsUUFBUSxJQUFJLEtBQUssRUFBRTtJQUNuQixVQUFVLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDMUUsVUFBVSxTQUFTLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNuRCxTQUFTLE1BQU07SUFDZixVQUFVLFNBQVMsQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDO0lBQ2xGLFNBQVM7SUFDVCxPQUFPLENBQUMsQ0FBQztJQUNULElBQUksVUFBVSxDQUFDLGFBQWEsQ0FBQyxFQUFFLElBQUksRUFBRU8sNkJBQXVDLEVBQUUsQ0FBQyxDQUFDO0lBQ2hGLEdBQUc7SUFDSCxFQUFFLElBQUksR0FBRztJQUNULElBQUlhLFVBQWtCLEVBQUUsQ0FBQztJQUN6QixJQUFJLFVBQVUsQ0FBQyxXQUFXLENBQUMsc0JBQXNCLEVBQUUsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUM7SUFDOUUsR0FBRztJQUNIOztBQ2xDRyxRQUFDLFdBQXdCLEdBQUcsTUFBTSxZQUFZLFNBQUksQ0FBQSxNQUFBO0lBQ3JELEVBR0ksT0FBTyxRQUFRLENBRUM7SUFHcEIsQ0FBQyxHQUFHLENBQUM7SUFDTCxFQUFFLFdBQVcsQ0FBQyxHQUFHLElBQUcsRUFBQTtJQUNwQixJQUFJLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO0lBQ25CLElBQUksSUFBSSxDQUFDLGdCQUFBLEdBQUEsS0FBQSxDQUFBO0lBQ1QsSUFBSSxJQUFJLENBQUM7SUFDVCxJQUFJLFdBQVcsQ0FBQyxJQUFDLENBQUEsZ0JBQTJCLENBQUMsQ0FBQztJQUM5QyxJQUFJLElBQUksQ0FBQyxRQUFRLEdBQUEsSUFBQUMsU0FBeUIsRUFBRSxDQUFDO0lBQzdDLElBQUksSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsUUFBRSxDQUFBLFlBQUEsQ0FBQTtJQUMvQixJQUFJLElBQUcsQ0FBQSxRQUFBLENBQUEscUJBQUEsR0FBQSxJQUFBLENBQUE7SUFDUCxHQUFHO0lBQ0gsRUFBRSxLQUFLLEdBQUc7SUFDVixJQUFJLElBQUk7SUFDUixNQUFNLElBQUksS0FBSyxFQUFFLENBR1Y7SUFDUCxNQUFNLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNuQyxLQUFLLENBQUMsT0FBTyxHQUFHLEVBQUU7SUFDbEIsTUFBTSxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3pCLE1BQU0sTUFBTSxHQUFHLENBQUE7SUFDZixLQUFLO0lBQ0wsR0FBQztJQUNELEVBQUUsSUFBSSxHQUFHO0lBQ1QsSUFBSSxJQUFJO0lBQ1IsTUFBQyxNQUFBLEdBQUEsR0FBQSxJQUFBLENBQUEsUUFBQSxDQUFBLElBQUEsRUFBQSxDQUFBO0lBQ0QsTUFBTSxVQUFRLEVBQUEsQ0FBQTtJQUNkLE1BQU0sSUFBSSxJQUFJLENBQUEsZ0JBQUE7SUFDZCxRQUFRLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0lBQ25DLE1BQU0sT0FBTyxHQUFHLENBQUM7SUFDakIsS0FBSyxDQUFDLE9BQU8sR0FBRyxFQUFFO0lBQ2xCLE1BQU0sT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFFLENBQUEsQ0FBQTtJQUN0QixNQUFNLE1BQU0sR0FBRyxDQUFDO0lBQ2hCLEtBQUs7SUFDTCxHQUFHO0lBQ0gsRUFBRSxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUU7SUFDOUIsSUFBSSxJQUFJLENBQUMsZ0JBQVMsR0FBQSxJQUFBLENBQUE7SUFDbEIsSUFBSSxJQUFJLENBQUMsZ0JBQWtDLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDeEUsR0FBRztJQUNILEVBQUUsbUJBQW1CLEdBQUc7SUFDeEIsSUFBSSxJQUFJLElBQUksQ0FBQyxnQkFBQyxFQUFBO0lBQ2QsTUFBTSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO0lBQ3BDLE1BQU0sSUFBSSxDQUFDLGdCQUFhLENBQUEsbUJBQUEsRUFBQSxDQUFBO0lBQ3hCLEtBQUs7SUFDTCxHQUFHO0lBQ0g7Ozs7Ozs7Ozs7OzsifQ==