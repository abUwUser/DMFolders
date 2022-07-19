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
    const BdAPIInstance = globalThis.BdApi ?? BdApi;
    class BDPlugin {
      constructor() {
        __publicField$1(this, "__ittaiInternals", {
          getAllSettings: () => {
            return BdAPIInstance.loadData(manifest$1.name, "settings") ?? {};
          },
          getSetting: (key, defaultValue) => {
            return (BdAPIInstance.loadData(manifest$1.name, "settings") ?? {})[key] ?? defaultValue;
          },
          setSettings: (newSettings) => {
            if (typeof newSettings !== "object")
              return;
            BdAPIInstance.saveData(manifest$1.name, "settings", Object.assign(this.__ittaiInternals.getAllSettings(), newSettings));
          },
          setSetting: (key, value) => {
            BdAPIInstance.saveData(manifest$1.name, "settings", Object.assign(this.__ittaiInternals.getAllSettings(), { [key]: value }));
          },
          removeSetting: (key) => {
            let outputSetting = this.__ittaiInternals.getAllSettings();
            delete outputSetting?.[key];
            BdAPIInstance.saveData(manifest$1.name, "settings", outputSetting);
          },
          resetSettings: () => {
            BdAPIInstance.saveData(manifest$1.name, "settings", {});
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
        __publicField$1(this, "getSettingsPanel", () => {
          return null;
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50cnlwb2ludC5qcyIsInNvdXJjZXMiOlsiZmlsZTovLy9ETUZvbGRlcnMvLi4vLi4vaXR0YWkvY29yZS93ZWJwYWNrL2NvcmUuanMiLCJmaWxlOi8vL0RNRm9sZGVycy8uLi8uLi9pdHRhaS9jb3JlL3dlYnBhY2svY29tbW9uL2luZGV4LmpzIiwiZmlsZTovLy9ETUZvbGRlcnMvLi4vLi4vaXR0YWkvY29yZS9wYWNrYWdlcy9pbml0LmpzIiwiZmlsZTovLy9ETUZvbGRlcnMvLi4vLi4vaXR0YWkvY29yZS9lbnRpdGllcy9CRFBsdWdpbi5qcyIsImZpbGU6Ly8vRE1Gb2xkZXJzLy4uLy4uL2l0dGFpL2NvcmUvc2V0dGluZ3MvaW5kZXguanMiLCJmaWxlOi8vL0RNRm9sZGVycy8uLi8uLi9pdHRhaS9jb3JlL2NvbXBvbmVudHMvRGlzY29yZEljb24uanN4IiwiZmlsZTovLy9ETUZvbGRlcnMvLi4vLi4vaXR0YWkvY29yZS9jb21wb25lbnRzL0Rpc2NvcmRQcm92aWRlcnMuanN4IiwiZmlsZTovLy9ETUZvbGRlcnMvLi4vLi4vaXR0YWkvY29yZS9jb21wb25lbnRzL0ZsdXhXcmFwcGVyLmpzeCIsImZpbGU6Ly8vRE1Gb2xkZXJzLy4uLy4uL2l0dGFpL2NvcmUvY2xhc3Nlcy9pbmRleC5qcyIsImZpbGU6Ly8vRE1Gb2xkZXJzLy4uLy4uL2l0dGFpL2NvcmUvY29tcG9uZW50cy9DYXRlZ29yeS5qc3giLCJmaWxlOi8vL0RNRm9sZGVycy8uLi8uLi9pdHRhaS9jb3JlL2NvbXBvbmVudHMvaW5kZXguanN4IiwiZmlsZTovLy9ETUZvbGRlcnMvLi4vLi4vaXR0YWkvY29yZS91dGlsaXRpZXMvZ2V0Q2xpZW50TW9kLmpzIiwiZmlsZTovLy9ETUZvbGRlcnMvLi4vLi4vaXR0YWkvY29yZS91dGlsaXRpZXMvbmFub3NlY29uZHMuanMiLCJmaWxlOi8vL0RNRm9sZGVycy8uLi8uLi9pdHRhaS9jb3JlL3V0aWxpdGllcy93YWl0LmpzIiwiZmlsZTovLy9ETUZvbGRlcnMvLi4vLi4vaXR0YWkvY29yZS9sb2dnZXIvY3JlYXRlQXJndW1lbnRzLmpzIiwiZmlsZTovLy9ETUZvbGRlcnMvLi4vLi4vaXR0YWkvY29yZS9sb2dnZXIvbG9nLmpzIiwiZmlsZTovLy9ETUZvbGRlcnMvLi4vLi4vaXR0YWkvY29yZS9sb2dnZXIvZGVidWcuanMiLCJmaWxlOi8vL0RNRm9sZGVycy8uLi8uLi9pdHRhaS9jb3JlL2xvZ2dlci93YXJuLmpzIiwiZmlsZTovLy9ETUZvbGRlcnMvLi4vLi4vaXR0YWkvY29yZS9sb2dnZXIvZXJyb3IuanMiLCJmaWxlOi8vL0RNRm9sZGVycy8uLi8uLi9pdHRhaS9jb3JlL2xvZ2dlci9ncm91cC5qcyIsImZpbGU6Ly8vRE1Gb2xkZXJzLy4uLy4uL2l0dGFpL2NvcmUvbG9nZ2VyL2dyb3VwRW5kLmpzIiwiZmlsZTovLy9ETUZvbGRlcnMvLi4vLi4vaXR0YWkvY29yZS9sb2dnZXIvY291bnQuanMiLCJmaWxlOi8vL0RNRm9sZGVycy8uLi8uLi9pdHRhaS9jb3JlL2xvZ2dlci9jb3VudFJlc2V0LmpzIiwiZmlsZTovLy9ETUZvbGRlcnMvLi4vLi4vaXR0YWkvY29yZS9sb2dnZXIvaW5kZXguanMiLCJmaWxlOi8vL0RNRm9sZGVycy8uLi8uLi9pdHRhaS9jb3JlL3V0aWxpdGllcy9maW5kSW5UcmVlLmpzIiwiZmlsZTovLy9ETUZvbGRlcnMvLi4vLi4vaXR0YWkvY29yZS91dGlsaXRpZXMvZmluZEluUmVhY3RUcmVlLmpzIiwiZmlsZTovLy9ETUZvbGRlcnMvLi4vLi4vaXR0YWkvY29yZS91dGlsaXRpZXMvZ2V0UmVhY3RJbnN0YW5jZS5qcyIsImZpbGU6Ly8vRE1Gb2xkZXJzLy4uLy4uL2l0dGFpL2NvcmUvdXRpbGl0aWVzL2dldE93bmVySW5zdGFuY2UuanMiLCJmaWxlOi8vL0RNRm9sZGVycy8uLi8uLi9pdHRhaS9jb3JlL3V0aWxpdGllcy90ZXN0Q29tcG9uZW50LmpzIiwiZmlsZTovLy9ETUZvbGRlcnMvLi4vLi4vaXR0YWkvY29yZS91dGlsaXRpZXMvYmVuY2htYXJrLmpzIiwiZmlsZTovLy9ETUZvbGRlcnMvLi4vLi4vaXR0YWkvY29yZS91dGlsaXRpZXMvbXVsdGlCZW5jaG1hcmsuanMiLCJmaWxlOi8vL0RNRm9sZGVycy8uLi8uLi9pdHRhaS9jb3JlL3V0aWxpdGllcy9hdmVyYWdlLmpzIiwiZmlsZTovLy9ETUZvbGRlcnMvLi4vLi4vaXR0YWkvY29yZS91dGlsaXRpZXMvbWVkaWFuLmpzIiwiZmlsZTovLy9ETUZvbGRlcnMvLi4vLi4vaXR0YWkvY29yZS91dGlsaXRpZXMvcmFuZG9tTnVtYmVyLmpzIiwiZmlsZTovLy9ETUZvbGRlcnMvLi4vLi4vaXR0YWkvY29yZS91dGlsaXRpZXMvcmFuZG9tU3RyaW5nLmpzIiwiZmlsZTovLy9ETUZvbGRlcnMvLi4vLi4vaXR0YWkvY29yZS91dGlsaXRpZXMvam9pbkNsYXNzZXMuanMiLCJmaWxlOi8vL0RNRm9sZGVycy8uLi8uLi9pdHRhaS9jb3JlL3V0aWxpdGllcy9zZWFyY2hDbGFzc05hbWVNb2R1bGVzLmpzIiwiZmlsZTovLy9ETUZvbGRlcnMvLi4vLi4vaXR0YWkvY29yZS91dGlsaXRpZXMvbWVzc2FnZUJveC5qc3giLCJmaWxlOi8vL0RNRm9sZGVycy8uLi8uLi9pdHRhaS9jb3JlL3V0aWxpdGllcy9tZXNzYWdlcy9nZXRNZXNzYWdlcy5qcyIsImZpbGU6Ly8vRE1Gb2xkZXJzLy4uLy4uL2l0dGFpL2NvcmUvdXRpbGl0aWVzL21lc3NhZ2VzL2dldE1lc3NhZ2UuanMiLCJmaWxlOi8vL0RNRm9sZGVycy8uLi8uLi9pdHRhaS9jb3JlL3V0aWxpdGllcy9tZXNzYWdlcy9mZXRjaE1lc3NhZ2UuanMiLCJmaWxlOi8vL0RNRm9sZGVycy8uLi8uLi9pdHRhaS9jb3JlL3V0aWxpdGllcy9tZXNzYWdlcy9yZXJlbmRlckFsbE1lc3NhZ2VzLmpzIiwiZmlsZTovLy9ETUZvbGRlcnMvLi4vLi4vaXR0YWkvY29yZS91dGlsaXRpZXMvbWVzc2FnZXMvcmVyZW5kZXJNZXNzYWdlLmpzIiwiZmlsZTovLy9ETUZvbGRlcnMvLi4vLi4vaXR0YWkvY29yZS91dGlsaXRpZXMvbWVzc2FnZXMvdXBkYXRlTWVzc2FnZS5qcyIsImZpbGU6Ly8vRE1Gb2xkZXJzLy4uLy4uL2l0dGFpL2NvcmUvdXRpbGl0aWVzL21lc3NhZ2VzL2luZGV4LmpzIiwiZmlsZTovLy9ETUZvbGRlcnMvLi4vLi4vaXR0YWkvY29yZS9jaGFuZ2Vsb2cvaW5kZXguanN4IiwiZmlsZTovLy9ETUZvbGRlcnMvLi4vLi4vaXR0YWkvY29yZS9lbnRpdGllcy9QbHVnaW4uanMiLCJmaWxlOi8vL0RNRm9sZGVycy8uLi8uLi9pdHRhaS9jb3JlL3BhdGNoZXIvYmVmb3JlLmpzIiwiZmlsZTovLy9ETUZvbGRlcnMvLi4vLi4vaXR0YWkvY29yZS9wYXRjaGVyL2luc3RlYWQuanMiLCJmaWxlOi8vL0RNRm9sZGVycy8uLi8uLi9pdHRhaS9jb3JlL3BhdGNoZXIvYWZ0ZXIuanMiLCJmaWxlOi8vL0RNRm9sZGVycy8uLi8uLi9pdHRhaS9jb3JlL3BhdGNoZXIvdW5wYXRjaEFsbC5qcyIsImZpbGU6Ly8vRE1Gb2xkZXJzLy4uLy4uL2l0dGFpL2NvcmUvcGF0Y2hlci9wYXRjaC5qcyIsImZpbGU6Ly8vRE1Gb2xkZXJzLy4uLy4uL2l0dGFpL2NvcmUvcGF0Y2hlci9pbmRleC5qcyIsImZpbGU6Ly8vRE1Gb2xkZXJzLy4uLy4uL2l0dGFpL2NvcmUvY29tbWFuZHMvYm90TWVzc2FnZS5qcyIsImZpbGU6Ly8vRE1Gb2xkZXJzLy4uLy4uL2l0dGFpL2NvcmUvY29tbWFuZHMvaW5kZXguanMiLCJmaWxlOi8vL0RNRm9sZGVycy8uLi8uLi9pdHRhaS9jb3JlL3N0b3Jlcy9pbmRleC5qcyIsImZpbGU6Ly8vRE1Gb2xkZXJzLy4uLy4uL2l0dGFpL2J1aWxkZXIvbm9kZV9tb2R1bGVzLy5wbnBtL3JvbGx1cC1wbHVnaW4tc3R5bGVzQDQuMC4wX3JvbGx1cEAyLjc3LjAvbm9kZV9tb2R1bGVzL3JvbGx1cC1wbHVnaW4tc3R5bGVzL2Rpc3QvcnVudGltZS9pbmplY3QtY3NzLmpzIiwiZmlsZTovLy9ETUZvbGRlcnMvLi4vLi4vaXR0YWkvY29yZS90b2FzdC9Ub2FzdFdyYXBwZXIudHN4IiwiZmlsZTovLy9ETUZvbGRlcnMvLi4vLi4vaXR0YWkvY29yZS90b2FzdC9pbmRleC5qc3giLCJmaWxlOi8vL0RNRm9sZGVycy9oYW5kbGVycy9waW5uZWRETVMudHMiLCJmaWxlOi8vL0RNRm9sZGVycy91dGlscy9tb3ZlLnRzIiwiZmlsZTovLy9ETUZvbGRlcnMvdXRpbHMvY2xhc3Nlcy50cyIsImZpbGU6Ly8vRE1Gb2xkZXJzL3V0aWxzL2pvaW5DbGFzc2VzLnRzIiwiZmlsZTovLy9ETUZvbGRlcnMvY29tcG9uZW50cy9Vc2VyTGlzdFNldHRpbmdzL1VzZXIudHN4IiwiZmlsZTovLy9ETUZvbGRlcnMvY29uc3RhbnRzL3NldHRpbmdzLnRzIiwiZmlsZTovLy9ETUZvbGRlcnMvY29uc3RhbnRzL2luZGV4LnRzIiwiZmlsZTovLy9ETUZvbGRlcnMvdXRpbHMvRXJyb3JCb3VuZGFyeS50c3giLCJmaWxlOi8vL0RNRm9sZGVycy9jb21wb25lbnRzL1VzZXJMaXN0U2V0dGluZ3MvTW9kYWxzL0NhdGVnb3J5U2V0dGluZ3NNb2RhbC50c3giLCJmaWxlOi8vL0RNRm9sZGVycy91dGlscy9saW1pdC50cyIsImZpbGU6Ly8vRE1Gb2xkZXJzL2NvbXBvbmVudHMvVXNlckxpc3RTZXR0aW5ncy9Nb2RhbHMvQWRkVXNlck1vZGFsLnRzeCIsImZpbGU6Ly8vRE1Gb2xkZXJzL2NvbXBvbmVudHMvVXNlckxpc3RTZXR0aW5ncy9pbmRleC50c3giLCJmaWxlOi8vL0RNRm9sZGVycy91dGlscy9pc1ZhbGlkSlNPTi50cyIsImZpbGU6Ly8vRE1Gb2xkZXJzL2NvbXBvbmVudHMvU2V0dGluZ3MudHN4IiwiZmlsZTovLy9ETUZvbGRlcnMvdXRpbHMvb3BlbkNhdGVnb3J5U2V0dGluZ3MudHN4IiwiZmlsZTovLy9ETUZvbGRlcnMvY29tcG9uZW50cy9Db250ZXh0TWVudXMvQ2F0ZWdvcnkudHN4IiwiZmlsZTovLy9ETUZvbGRlcnMvcGF0Y2hlcy9kbWxpc3QudHN4IiwiZmlsZTovLy9ETUZvbGRlcnMvY29tcG9uZW50cy9Db250ZXh0TWVudXMvQWRkVXNlci50c3giLCJmaWxlOi8vL0RNRm9sZGVycy9wYXRjaGVzL2RtYnV0dG9uLnRzeCIsImZpbGU6Ly8vRE1Gb2xkZXJzL3BhdGNoZXMvZnJpZW5kc2xpc3QudHN4IiwiZmlsZTovLy9ETUZvbGRlcnMvaGFuZGxlcnMvaW1wb3J0RnJvbVBsdWdpbi50cyIsImZpbGU6Ly8vRE1Gb2xkZXJzL2NvbXBvbmVudHMvU2V0dGluZ3NTd2l0Y2hlci9pbmRleC50c3giLCJmaWxlOi8vL0RNRm9sZGVycy9pbmRleC50c3giLCJmaWxlOi8vL0RNRm9sZGVycy8uLi8uLi9pdHRhaS9jb3JlL2xvYWRlci9lbnRyeXBvaW50LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImxldCBjbGllbnRXZWJwYWNrID0gKCgpPT57XHJcbiAgICBpZiAocHJvY2Vzcy5lbnYuQ0xJRU5UX01PRCA9PSBcImdvb3NlbW9kXCIpIHJldHVybiBnbG9iYWxUaGlzLmdvb3NlbW9kLndlYnBhY2tNb2R1bGVzO1xyXG4gICAgZWxzZSBpZiAocHJvY2Vzcy5lbnYuQ0xJRU5UX01PRCA9PSBcInBvd2VyY29yZHYyXCIpIHJldHVybiByZXF1aXJlKFwicG93ZXJjb3JkL3dlYnBhY2tcIik7XHJcbiAgICBlbHNlIGlmIChwcm9jZXNzLmVudi5DTElFTlRfTU9EID09IFwiYmV0dGVyZGlzY29yZFwiKSByZXR1cm4gZ2xvYmFsVGhpcy5CZEFwaSA/PyBCZEFwaTtcclxufSkoKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmaW5kKGZpbHRlcikge1xyXG4gICAgaWYgKHByb2Nlc3MuZW52LkNMSUVOVF9NT0QgPT0gXCJnb29zZW1vZFwiKSByZXR1cm4gY2xpZW50V2VicGFjay5maW5kKGZpbHRlcik7XHJcbiAgICBlbHNlIGlmIChwcm9jZXNzLmVudi5DTElFTlRfTU9EID09IFwicG93ZXJjb3JkdjJcIikge1xyXG4gICAgICAgIGxldCBpc0RlZmF1bHQgPSBmYWxzZTtcclxuICAgICAgICBjb25zdCBtb2QgPSBjbGllbnRXZWJwYWNrLmdldE1vZHVsZSh4ID0+IHg/LmRlZmF1bHQgJiYgZmlsdGVyKHguZGVmYXVsdCkgJiYgKGlzRGVmYXVsdCA9IHRydWUpLCBmYWxzZSkgfHwgY2xpZW50V2VicGFjay5nZXRNb2R1bGUoZmlsdGVyLCBmYWxzZSk7XHJcblxyXG4gICAgICAgIHJldHVybiBpc0RlZmF1bHQgPyBtb2QuZGVmYXVsdCA6IG1vZDtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHByb2Nlc3MuZW52LkNMSUVOVF9NT0QgPT0gXCJiZXR0ZXJkaXNjb3JkXCIpIHJldHVybiBjbGllbnRXZWJwYWNrLmZpbmRNb2R1bGUoZmlsdGVyKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRBbGwoZmlsdGVyKSB7XHJcbiAgICBpZiAocHJvY2Vzcy5lbnYuQ0xJRU5UX01PRCA9PSBcImdvb3NlbW9kXCIpIHJldHVybiBjbGllbnRXZWJwYWNrLmZpbmRBbGwoZmlsdGVyKTtcclxuICAgIGVsc2UgaWYgKHByb2Nlc3MuZW52LkNMSUVOVF9NT0QgPT0gXCJwb3dlcmNvcmR2MlwiKSByZXR1cm4gY2xpZW50V2VicGFjay5nZXRBbGxNb2R1bGVzKHggPT4geD8uZGVmYXVsdCAmJiBmaWx0ZXIoeC5kZWZhdWx0KSwgZmFsc2UpIHx8IGNsaWVudFdlYnBhY2suZ2V0TW9kdWxlKGZpbHRlciwgZmFsc2UpO1xyXG4gICAgZWxzZSBpZiAocHJvY2Vzcy5lbnYuQ0xJRU5UX01PRCA9PSBcImJldHRlcmRpc2NvcmRcIikgcmV0dXJuIGNsaWVudFdlYnBhY2suZmluZEFsbE1vZHVsZXMoZmlsdGVyKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRCeVByb3BzKC4uLnByb3BzKSB7XHJcbiAgICByZXR1cm4gZmluZChtID0+IHByb3BzLmV2ZXJ5KHAgPT4gbT8uW3BdICE9PSB1bmRlZmluZWQpKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRBbGxCeVByb3BzKC4uLnByb3BzKSB7XHJcbiAgICByZXR1cm4gZmluZEFsbChtID0+IHByb3BzLmV2ZXJ5KHAgPT4gbT8uW3BdICE9PSB1bmRlZmluZWQpKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRCeVByb3RvdHlwZSguLi5wcm9wcykge1xyXG4gICAgcmV0dXJuIGZpbmQobSA9PiBwcm9wcy5ldmVyeShwID0+IG0/LnByb3RvdHlwZT8uW3BdICE9PSB1bmRlZmluZWQpKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRBbGxCeVByb3RvdHlwZSguLi5wcm9wcykge1xyXG4gICAgcmV0dXJuIGZpbmRBbGwobSA9PiBwcm9wcy5ldmVyeShwID0+IG0/LnByb3RvdHlwZT8uW3BdICE9PSB1bmRlZmluZWQpKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRCeURpc3BsYXlOYW1lKG5hbWUsIHJldHVybkRlZmF1bHQ9dHJ1ZSkge1xyXG4gICAgbGV0IHJldCA9IGZpbmQobSA9PiBtPy5kZWZhdWx0Py5kaXNwbGF5TmFtZSA9PT0gbmFtZSk7XHJcbiAgICBpZiAocmV0dXJuRGVmYXVsdCkgcmV0dXJuIHJldC5kZWZhdWx0O1xyXG4gICAgcmV0dXJuIHJldDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRBbGxCeURpc3BsYXlOYW1lKG5hbWUpIHtcclxuICAgIHJldHVybiBmaW5kKG0gPT4gbT8uZGlzcGxheU5hbWUgPT09IG5hbWUpO1xyXG59XHJcbiIsIi8qKlxyXG4gKiB7QGxpbmsgaHR0cHM6Ly9kaXNjb3JkLmNvbS9hY2tub3dsZWRnZW1lbnRzL3xGdWxsIGxpc3Qgb2YgbGlicmFyaWVzIHRoYXQgRGlzY29yZCB1c2VzLn1cclxuICogQG1vZHVsZSB3ZWJwYWNrL2NvbW1vblxyXG4gKi9cclxuXHJcbmltcG9ydCB7IGZpbmQsIGZpbmRCeVByb3BzIH0gZnJvbSBcIi4uXCI7XHJcblxyXG5leHBvcnQgLyoqXHJcbiAqIERpc2NvcmQncyB7QGxpbmsgaHR0cHM6Ly9yZWFjdGpzLm9yZy98UmVhY3R9IGluc3RhbmNlLlxyXG4gKiBAbWVtYmVyb2YgbW9kdWxlOndlYnBhY2svY29tbW9uXHJcbiAqLyBjb25zdCBSZWFjdCA9IC8qI19fUFVSRV9fKi8gZmluZEJ5UHJvcHMoXCJ1c2VTdGF0ZVwiKTtcclxuXHJcbmV4cG9ydCAvKipcclxuICogRGlzY29yZCdzIHtAbGluayBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtZG9tLmh0bWx8UmVhY3RET019IGluc3RhbmNlLlxyXG4gKiBAbWVtYmVyb2YgbW9kdWxlOndlYnBhY2svY29tbW9uXHJcbiAqLyBjb25zdCBSZWFjdERPTSA9IC8qI19fUFVSRV9fKi8gZmluZEJ5UHJvcHMoXCJyZW5kZXJcIiwgXCJ1bm1vdW50Q29tcG9uZW50QXROb2RlXCIpO1xyXG5cclxuZXhwb3J0IC8qKlxyXG4gKiBEaXNjb3JkJ3Mge0BsaW5rIGh0dHBzOi8vcmVhY3Qtc3ByaW5nLmlvL3xSZWFjdCBTcHJpbmd9IGluc3RhbmNlLlxyXG4gKiBAbWVtYmVyb2YgbW9kdWxlOndlYnBhY2svY29tbW9uXHJcbiAqLyBjb25zdCBSZWFjdFNwcmluZyA9IC8qI19fUFVSRV9fKi8gZmluZEJ5UHJvcHMoXCJ1c2VTcHJpbmdcIiwgXCJ1c2VUcmFuc2l0aW9uXCIpO1xyXG5cclxuZXhwb3J0IC8qKlxyXG4gKiBEaXNjb3JkJ3Mge0BsaW5rIGh0dHBzOi8vbG9kYXNoLmNvbS98TG9kYXNofSBpbnN0YW5jZS5cclxuICogQG1lbWJlcm9mIG1vZHVsZTp3ZWJwYWNrL2NvbW1vblxyXG4gKi8gY29uc3QgTG9kYXNoID0gZ2xvYmFsVGhpcy5fO1xyXG5cclxuZXhwb3J0IC8qKiBcclxuICogQWxpYXMgb2YgTG9kYXNoXHJcbiAqLyBjb25zdCBfID0gZ2xvYmFsVGhpcy5fO1xyXG5cclxuZXhwb3J0IC8qKlxyXG4gKiBEaXNjb3JkJ3MgQXZhdGFyIG1hbmFnZXIuIFxyXG4gKiBAbWVtYmVyb2YgbW9kdWxlOndlYnBhY2svY29tbW9uXHJcbiAqLyBjb25zdCBBdmF0YXJNYW5hZ2VyID0gLyojX19QVVJFX18qLyBmaW5kQnlQcm9wcyhcImdldFVzZXJBdmF0YXJVUkxcIiwgXCJoYXNBbmltYXRlZEd1aWxkSWNvblwiKTtcclxuXHJcbmV4cG9ydCAvKipcclxuICogRGlzY29yZCdzIG1vZGFsIGFjdGlvbnMuIFxyXG4gKiBAbWVtYmVyb2YgbW9kdWxlOndlYnBhY2svY29tbW9uXHJcbiAqLyBjb25zdCBNb2RhbEFjdGlvbnMgPSAvKiNfX1BVUkVfXyovIGZpbmRCeVByb3BzKFxyXG5cdFwib3Blbk1vZGFsXCIsXHJcblx0XCJ1cGRhdGVNb2RhbFwiXHJcbik7XHJcblxyXG5leHBvcnQgLyoqXHJcbiAqIERpc2NvcmQncyBtb2RhbCBzdGFjay4gUGxlYXNlIHVzZSBNb2RhbEFjdGlvbnMgaW5zdGVhZCwgdGhpcyBvbmUgaXMgZGVwcmVjYXRlZFxyXG4gKiBAbWVtYmVyb2YgbW9kdWxlOndlYnBhY2svY29tbW9uXHJcbiAqIEBkZXByZWNhdGVkXHJcbiAqLyBjb25zdCBNb2RhbFN0YWNrID0gLyojX19QVVJFX18qLyBmaW5kQnlQcm9wcyhcclxuXHRcInB1c2hcIixcclxuXHRcInVwZGF0ZVwiLFxyXG5cdFwicG9wXCIsXHJcblx0XCJwb3BXaXRoS2V5XCJcclxuKTtcclxuXHJcbmV4cG9ydCAvKipcclxuICogRGlzY29yZCdzIGRpc3BhdGNoZXJcclxuICogQG1lbWJlcm9mIG1vZHVsZTp3ZWJwYWNrL2NvbW1vblxyXG4gKi8gY29uc3QgRGlzcGF0Y2hlciA9IC8qI19fUFVSRV9fKi8gZmluZEJ5UHJvcHMoXCJkaXJ0eURpc3BhdGNoXCIpO1xyXG5cclxuZXhwb3J0IC8qKlxyXG4gKiBGbHV44oSiXHJcbiAqIEBtZW1iZXJvZiBtb2R1bGU6d2VicGFjay9jb21tb25cclxuICovIGNvbnN0IEZsdXggPSAvKiNfX1BVUkVfXyovIGZpbmRCeVByb3BzKFwiU3RvcmVcIiwgXCJjb25uZWN0U3RvcmVzXCIpO1xyXG5cclxuIGV4cG9ydCAvKipcclxuICogRGlzY29yZCdzIEZsdXggRGlzcGF0Y2hlci4gV2lzaCBpIGtuZXcgd3RmIHRoaXMgaXNcclxuICogQG1lbWJlcm9mIG1vZHVsZTp3ZWJwYWNrL2NvbW1vblxyXG4gKi9jb25zdCBGbHV4RGlzcGF0Y2hlciA9IC8qI19fUFVSRV9fKi8gZmluZEJ5UHJvcHMoXHJcblx0XCJfY3VycmVudERpc3BhdGNoQWN0aW9uVHlwZVwiLFxyXG5cdFwiX3Byb2Nlc3NpbmdXYWl0UXVldWVcIlxyXG4pO1xyXG5cclxuZXhwb3J0IC8qKlxyXG4gKiBEaXNjb3JkJ3MgY29sb3IgdXRsc1xyXG4gKiBAbWVtYmVyb2YgbW9kdWxlOndlYnBhY2svY29tbW9uXHJcbiAqLyBjb25zdCBDb2xvclV0aWxzID0gLyojX19QVVJFX18qLyBmaW5kQnlQcm9wcyhcImlzVmFsaWRIZXhcIik7XHJcblxyXG5leHBvcnQgLyoqXHJcbiAqIERpc2NvcmQncyBjb25zdGFudHNcclxuICogQG1lbWJlcm9mIG1vZHVsZTp3ZWJwYWNrL2NvbW1vblxyXG4gKi8gY29uc3QgQ29uc3RhbnRzID0gLyojX19QVVJFX18qLyBmaW5kQnlQcm9wcyhcIkFQSV9IT1NUXCIpO1xyXG5cclxuZXhwb3J0IC8qKlxyXG4gKiBEaXNjb3JkJ3MgY29udGV4dCBtZW51IGhhbmRsZXJcclxuICogQG1lbWJlcm9mIG1vZHVsZTp3ZWJwYWNrL2NvbW1vblxyXG4gKi8gY29uc3QgQ29udGV4dE1lbnUgPSAvKiNfX1BVUkVfXyovIGZpbmRCeVByb3BzKFwib3BlbkNvbnRleHRNZW51XCIpO1xyXG5cclxuZXhwb3J0IC8qKlxyXG4gKiBEaXNjb3JkJ3MgcGxhdGZvcm0gY2hlY2tlclxyXG4gKiBAbWVtYmVyb2YgbW9kdWxlOndlYnBhY2svY29tbW9uXHJcbiAqLyBjb25zdCBQbGF0Zm9ybSA9IC8qI19fUFVSRV9fKi8gZmluZCgobSkgPT4gbS5QbGF0Zm9ybVR5cGVzPy5XSU5ET1dTKTsiLCJpbXBvcnQgeyBSZWFjdCwgUmVhY3RET00sIFJlYWN0U3ByaW5nLCBMb2Rhc2ggfSBmcm9tIFwiLi4vd2VicGFjay9jb21tb25cIjtcclxuSXR0YWlJbnRlcm5hbHMuUmVhY3QgPSBSZWFjdDtcclxuSXR0YWlJbnRlcm5hbHMuUmVhY3RET00gPSBSZWFjdERPTTtcclxuSXR0YWlJbnRlcm5hbHMuUmVhY3RTcHJpbmcgPSBSZWFjdFNwcmluZztcclxuSXR0YWlJbnRlcm5hbHMuTG9kYXNoID0gTG9kYXNoO1xyXG4iLCJpbXBvcnQgeyBtYW5pZmVzdCB9IGZyb20gXCJAaXR0YWkvY29uZmlnXCI7XHJcbmltcG9ydCB7IFJlYWN0IH0gZnJvbSBcIi4uL3dlYnBhY2tcIjtcclxuXHJcbmNvbnN0IEJkQVBJSW5zdGFuY2UgPSBnbG9iYWxUaGlzLkJkQXBpID8/IEJkQXBpIC8vdG9wYXogYW5kIG90aGVyIGNvbXBhdCBtb2RzIHN0dWZmXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCRFBsdWdpbiB7XHJcblx0X19pdHRhaUludGVybmFscyA9IHtcclxuXHRcdGdldEFsbFNldHRpbmdzOiAoKSA9PiB7XHJcblx0XHRcdHJldHVybiBCZEFQSUluc3RhbmNlLmxvYWREYXRhKG1hbmlmZXN0Lm5hbWUsIFwic2V0dGluZ3NcIikgPz8ge307XHJcblx0XHR9LFxyXG5cdFx0Z2V0U2V0dGluZzogKGtleSwgZGVmYXVsdFZhbHVlKSA9PiB7XHJcblx0XHRcdHJldHVybiAoQmRBUElJbnN0YW5jZS5sb2FkRGF0YShtYW5pZmVzdC5uYW1lLCBcInNldHRpbmdzXCIpID8/IHt9KVtrZXldID8/IGRlZmF1bHRWYWx1ZTtcclxuXHRcdH0sXHJcblx0XHRzZXRTZXR0aW5nczogKG5ld1NldHRpbmdzKSA9PiB7XHJcblx0XHRcdGlmICh0eXBlb2YgbmV3U2V0dGluZ3MgIT09IFwib2JqZWN0XCIpIHJldHVybjtcclxuXHRcdFx0QmRBUElJbnN0YW5jZS5zYXZlRGF0YShcclxuXHRcdFx0XHRtYW5pZmVzdC5uYW1lLFxyXG5cdFx0XHRcdFwic2V0dGluZ3NcIixcclxuXHRcdFx0XHRPYmplY3QuYXNzaWduKHRoaXMuX19pdHRhaUludGVybmFscy5nZXRBbGxTZXR0aW5ncygpLCBuZXdTZXR0aW5ncylcclxuXHRcdFx0KTtcclxuXHRcdH0sXHJcblx0XHRzZXRTZXR0aW5nOiAoa2V5LCB2YWx1ZSkgPT4ge1xyXG5cdFx0XHRCZEFQSUluc3RhbmNlLnNhdmVEYXRhKFxyXG5cdFx0XHRcdG1hbmlmZXN0Lm5hbWUsXHJcblx0XHRcdFx0XCJzZXR0aW5nc1wiLFxyXG5cdFx0XHRcdE9iamVjdC5hc3NpZ24odGhpcy5fX2l0dGFpSW50ZXJuYWxzLmdldEFsbFNldHRpbmdzKCksIHtba2V5XTogdmFsdWV9KVxyXG5cdFx0XHQpO1xyXG5cdFx0fSxcclxuXHRcdHJlbW92ZVNldHRpbmc6IChrZXkpID0+IHtcclxuXHRcdFx0bGV0IG91dHB1dFNldHRpbmcgPSB0aGlzLl9faXR0YWlJbnRlcm5hbHMuZ2V0QWxsU2V0dGluZ3MoKVxyXG5cdFx0XHRkZWxldGUgb3V0cHV0U2V0dGluZz8uW2tleV1cclxuXHRcdFx0QmRBUElJbnN0YW5jZS5zYXZlRGF0YShcclxuXHRcdFx0XHRtYW5pZmVzdC5uYW1lLFxyXG5cdFx0XHRcdFwic2V0dGluZ3NcIixcclxuXHRcdFx0XHRvdXRwdXRTZXR0aW5nXHJcblx0XHRcdCk7XHJcblx0XHR9LFxyXG5cdFx0cmVzZXRTZXR0aW5nczogKCkgPT4ge1xyXG5cdFx0XHRCZEFQSUluc3RhbmNlLnNhdmVEYXRhKG1hbmlmZXN0Lm5hbWUsIFwic2V0dGluZ3NcIiwge30pXHJcblx0XHR9LFxyXG5cclxuXHRcdHNldFNldHRpbmdzUGFuZWw6IChjb21wb25lbnQpID0+IHtcclxuXHRcdFx0dGhpcy5nZXRTZXR0aW5nc1BhbmVsID0gKCkgPT4ge1xyXG5cdFx0XHRcdHRyeSB7XHJcblx0XHRcdFx0XHRpZiAodHlwZW9mIGNvbXBvbmVudCA9PT0gXCJmdW5jdGlvblwiKVxyXG5cdFx0XHRcdFx0XHRjb21wb25lbnQgPSBSZWFjdC5jcmVhdGVFbGVtZW50KGNvbXBvbmVudCk7XHJcblx0XHRcdFx0XHRyZXR1cm4gY29tcG9uZW50O1xyXG5cdFx0XHRcdH0gY2F0Y2ggKGUpIHtcclxuXHRcdFx0XHRcdHRoaXMuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBzZXR0aW5ncyBwYW5lbC5cIiwgZSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHJldHVybiBudWxsO1xyXG5cdFx0XHR9O1xyXG5cdFx0fSxcclxuXHRcdHJlbW92ZVNldHRpbmdzUGFuZWw6ICgpID0+IHtcclxuXHRcdFx0ZGVsZXRlIHRoaXMuZ2V0U2V0dGluZ3NQYW5lbDtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGdldFNldHRpbmdzUGFuZWwgPSAoKSA9PiB7XHJcblx0XHRyZXR1cm4gbnVsbDtcclxuXHR9O1xyXG5cclxuXHRsb2coKSB7XHJcblx0XHRsb2dnZXIubG9nKC4uLmFyZ3VtZW50cyk7XHJcblx0fVxyXG5cdGRlYnVnKCkge1xyXG5cdFx0bG9nZ2VyLmRlYnVnKC4uLmFyZ3VtZW50cyk7XHJcblx0fVxyXG5cdHdhcm4oKSB7XHJcblx0XHRsb2dnZXIud2FybiguLi5hcmd1bWVudHMpO1xyXG5cdH1cclxuXHRlcnJvcigpIHtcclxuXHRcdGxvZ2dlci5lcnJvciguLi5hcmd1bWVudHMpO1xyXG5cdH1cclxufVxyXG4iLCJleHBvcnQgY29uc3QgZ2V0ID0gKGtleSwgZGVmYXVsdFZhbHVlKSA9PiB7XHJcbiAgICByZXR1cm4gc2V0dGluZ3NJbnN0YW5jZS5nZXRTZXR0aW5nKGtleSwgZGVmYXVsdFZhbHVlKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0QWxsID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIHNldHRpbmdzSW5zdGFuY2UuZ2V0QWxsU2V0dGluZ3MoKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0ID0gKGtleSwgdmFsdWUpID0+IHtcclxuICAgIHJldHVybiBzZXR0aW5nc0luc3RhbmNlLnNldFNldHRpbmcoa2V5LCB2YWx1ZSlcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHNldEFsbCA9IChzZXR0aW5ncykgPT4ge1xyXG4gICAgcmV0dXJuIHNldHRpbmdzSW5zdGFuY2Uuc2V0U2V0dGluZ3Moc2V0dGluZ3MpXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCByZW1vdmUgPSAoa2V5KSA9PiB7XHJcbiAgICByZXR1cm4gc2V0dGluZ3NJbnN0YW5jZS5yZW1vdmVTZXR0aW5nKGtleSwgdW5kZWZpbmVkKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcmVzZXQgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gc2V0dGluZ3NJbnN0YW5jZS5yZXNldFNldHRpbmdzKClcclxufVxyXG5cclxuLy8gSEFDS1xyXG5leHBvcnQgbGV0IHNldHRpbmdzSW5zdGFuY2U7XHJcbmV4cG9ydCBjb25zdCBzZXRJbnN0YW5jZSA9IChpKSA9PiB7XHJcbiAgICBzZXR0aW5nc0luc3RhbmNlID0gaVxyXG59XHJcblxyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2V0dGluZ3NBUEkge1xyXG4vLyAgICAgY29uc3RydWN0b3IocGx1Z2luSW5zdGFuY2U6IFBsdWdpbikge1xyXG4vLyAgICAgICAgIHRoaXMuX19wbHVnaW5JbnN0YW5jZSA9IHBsdWdpbkluc3RhbmNlO1xyXG4vLyAgICAgfVxyXG5cclxuLy8gICAgIHByaXZhdGUgX19wbHVnaW5JbnN0YW5jZTogUGx1Z2luXHJcblxyXG4vLyAgICAgZ2V0IChrZXk6IHN0cmluZywgZGVmYXVsdFZhbHVlOiBhbnkpIDogYW55IHtcclxuLy8gICAgICAgICByZXR1cm4gdGhpcy5fX3BsdWdpbkluc3RhbmNlLl9faXR0YWlJbnRlcm5hbFBsdWdpbi5fX2l0dGFpSW50ZXJuYWxzLmdldFNldHRpbmcoa2V5LCBkZWZhdWx0VmFsdWUpOyAvLyBZZXMgdGhpcyBpcyBleGNlc3NpdmUuIFRvbyBiYWQuXHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgZ2V0QWxsICgpIDogT2JqZWN0IHtcclxuLy8gICAgICAgICByZXR1cm4gdGhpcy5fX3BsdWdpbkluc3RhbmNlLl9faXR0YWlJbnRlcm5hbFBsdWdpbi5fX2l0dGFpSW50ZXJuYWxzLmdldEFsbFNldHRpbmdzKCk7XHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgc2V0IChrZXk6IHN0cmluZywgdmFsdWU6IGFueSkgOiB2b2lkIHtcclxuLy8gICAgICAgICByZXR1cm4gdGhpcy5fX3BsdWdpbkluc3RhbmNlLl9faXR0YWlJbnRlcm5hbFBsdWdpbi5fX2l0dGFpSW50ZXJuYWxzLnNldFNldHRpbmcoa2V5LCB2YWx1ZSk7XHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgc2V0QWxsIChzZXR0aW5nczogT2JqZWN0KSA6IHZvaWQge1xyXG4vLyAgICAgICAgIHJldHVybiB0aGlzLl9fcGx1Z2luSW5zdGFuY2UuX19pdHRhaUludGVybmFsUGx1Z2luLl9faXR0YWlJbnRlcm5hbHMuc2V0U2V0dGluZ3Moc2V0dGluZ3MpO1xyXG4vLyAgICAgfVxyXG4vLyB9IiwiaW1wb3J0IHsgUmVhY3QgfSBmcm9tIFwiLi4vd2VicGFja1wiO1xyXG5pbXBvcnQgeyBmaW5kQnlQcm9wcywgZmluZEJ5RGlzcGxheU5hbWUgfSBmcm9tIFwiLi4vd2VicGFja1wiO1xyXG5cclxuY29uc3QgY2xhc3NlcyA9IHtcclxuXHRkZWZhdWx0OiAvKiNfX1BVUkVfXyovKCgpPT5maW5kQnlQcm9wcyhcImljb25cIiwgXCJzZWxlY3RlZFwiKS5pY29uKSgpLFxyXG5cdGNvbnRleHRtZW51OiAvKiNfX1BVUkVfXyovKCgpPT5maW5kQnlQcm9wcyhcImljb25cIiwgXCJzdWJtZW51XCIpLmljb24pKCksXHJcblx0bWluaXBvcG92ZXI6IC8qI19fUFVSRV9fKi8oKCk9PmZpbmRCeVByb3BzKFwiaWNvblwiLCBcImlzSGVhZGVyXCIpLmljb24pKCksXHJcbn07XHJcblxyXG4vKipcclxuICogUmVuZGVyIGFueSBEaXNjb3JkIGljb24uXHJcbiAqIEBuYW1lIERpc2NvcmRJY29uXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wcyBSZWFjdCBwcm9wZXJ0aWVzLiBBbGwgdW5saXN0ZWQgcHJvcGVydGllcyB3aWxsIGJlIHBhc3NlZCBkb3duIHRvIHRoZSBjb21wb25lbnQuXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBbcHJvcHMudHlwZT1cImRlZmF1bHRcIl0gVGhlIEZvbnRBd2Vzb21lIGljb24gdHlwZS4gYGRlZmF1bHRgLCBgbWluaXBvcG92ZXJgLCBgY29udGV4dG1lbnVgLCBgbm9uZWAuXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBbcHJvcHMubmFtZV0gVGhlIGBkaXNwbGF5TmFtZWAgb2YgdGhlIGljb24gY29tcG9uZW50IGluIERpc2NvcmQuXHJcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y29tcG9uZW50c1xyXG4gKiBAZXhhbXBsZVxyXG4gKiByZXR1cm4gKFxyXG4gKiAgIDxEaXNjb3JkSWNvbiB0eXBlPVwibWluaXBvcG92ZXJcIiAvPlxyXG4gKiApO1xyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGlzY29yZEljb24ocHJvcHMpIHtcclxuXHRjb25zdCBjaG9vc2VuQ2xhc3MgPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcclxuXHRcdHN3aXRjaCAocHJvcHMudHlwZSkge1xyXG5cdFx0XHRjYXNlIFwibWluaXBvcG92ZXJcIjpcclxuXHRcdFx0XHRyZXR1cm4gY2xhc3Nlcy5taW5pcG9wb3ZlcjtcclxuXHRcdFx0Y2FzZSBcImNvbnRleHRtZW51XCI6XHJcblx0XHRcdFx0cmV0dXJuIGNsYXNzZXMuY29udGV4dG1lbnU7XHJcblx0XHRcdGNhc2UgXCJub25lXCI6XHJcblx0XHRcdFx0cmV0dXJuIFwiXCI7XHJcblx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0cmV0dXJuIGNsYXNzZXMuZGVmYXVsdFxyXG5cdFx0fVxyXG5cdH0pXHJcblx0Y29uc3QgSWNvblNWRyA9XHJcblx0XHRmaW5kQnlEaXNwbGF5TmFtZShwcm9wcy5uYW1lKSA/P1xyXG5cdFx0KCgpID0+IHtcclxuXHRcdFx0cmV0dXJuIFwiXCI7XHJcblx0XHR9KTtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PEljb25TVkdcclxuXHRcdFx0ey4uLnByb3BzfVxyXG5cdFx0XHRjbGFzc05hbWU9e1tjaG9vc2VuQ2xhc3MsIHByb3BzLmNsYXNzTmFtZV0uZmlsdGVyKGMgPT4gdHlwZW9mIGMgPT09IFwic3RyaW5nXCIpLmpvaW4oXCIgXCIpfVxyXG5cdFx0XHRzdHlsZT17T2JqZWN0LmFzc2lnbih7fSwge1xyXG5cdFx0XHRcdHdpZHRoOiBcImluaGVyaXRcIixcclxuXHRcdFx0XHRoZWlnaHQ6IFwiaW5oZXJpdFwiLFxyXG5cdFx0XHR9LCBwcm9wcy5zdHlsZSl9XHJcblx0XHQvPlxyXG5cdCk7XHJcbn0iLCJpbXBvcnQgeyBSZWFjdCB9IGZyb20gXCIuLi93ZWJwYWNrXCI7XHJcbmltcG9ydCB7IGZpbmRCeVByb3BzIH0gZnJvbSBcIi4uL3dlYnBhY2tcIjtcclxuXHJcbmNvbnN0IExheWVyUHJvdmlkZXIgPSAvKiNfX1BVUkVfXyovKCgpPT5maW5kQnlQcm9wcyhcIkFwcExheWVyUHJvdmlkZXJcIikuQXBwTGF5ZXJQcm92aWRlcigpLnByb3BzLmxheWVyQ29udGV4dFxyXG5cdC5Qcm92aWRlcikoKTtcclxuY29uc3QgQWNjZXNzaWJpbGl0eVByb3ZpZGVyID0gLyojX19QVVJFX18qLygoKT0+ZmluZEJ5UHJvcHMoXHJcblx0XCJBY2Nlc3NpYmlsaXR5UHJlZmVyZW5jZXNDb250ZXh0XCJcclxuKS5BY2Nlc3NpYmlsaXR5UHJlZmVyZW5jZXNDb250ZXh0LlByb3ZpZGVyKSgpO1xyXG5jb25zdCBsYXllckNsYXNzID0gLyojX19QVVJFX18qLygoKT0+ZmluZEJ5UHJvcHMoXCJMYXllckNsYXNzTmFtZVwiKS5MYXllckNsYXNzTmFtZSkoKTtcclxuXHJcbi8qKlxyXG4gKiBXcmFwIGEgY29tcG9uZW50IHJlbmRlcmVkIG91dC1vZi10cmVlIGluIERpc2NvcmQncyBwcm92aWRlcnNcclxuICogQG5hbWUgRGlzY29yZFByb3ZpZGVyc1xyXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNvbXBvbmVudHNcclxuICogQGV4YW1wbGVcclxuICogcmV0dXJuIChcclxuICogICA8RGlzY29yZFByb3ZpZGVycz5cclxuICogXHRcdDxXaGF0ZXZlci8+XHJcbiAqIFx0IDwvRGlzY29yZFByb3ZpZGVycz5cclxuICogKTtcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERpc2NvcmRQcm92aWRlcnMocHJvcHMpIHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PEFjY2Vzc2liaWxpdHlQcm92aWRlclxyXG5cdFx0XHR2YWx1ZT17eyByZWR1Y2VkTW90aW9uOiB7IGVuYWJsZWQ6IGZhbHNlLCByYXdWYWx1ZTogXCJuby1wcmVmZXJlbmNlXCIgfSB9fVxyXG5cdFx0PlxyXG5cdFx0XHQ8TGF5ZXJQcm92aWRlclxyXG5cdFx0XHRcdHZhbHVlPXtbZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhcHAtbW91bnQgPiAuXCIgKyBsYXllckNsYXNzKV19XHJcblx0XHRcdD5cclxuXHRcdFx0XHR7cHJvcHMuY2hpbGRyZW59XHJcblx0XHRcdDwvTGF5ZXJQcm92aWRlcj5cclxuXHRcdDwvQWNjZXNzaWJpbGl0eVByb3ZpZGVyPlxyXG5cdCk7XHJcbn1cclxuIiwiaW1wb3J0IHsgUmVhY3QsIEZsdXggfSBmcm9tIFwiLi4vd2VicGFja1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRmx1eFdyYXBwZXIocHJvcHMpIHtcclxuXHRpZiAoIXByb3BzLmNoaWxkcmVuLmRpc3BsYXlOYW1lKSBwcm9wcy5jaGlsZHJlbi5kaXNwbGF5TmFtZSA9IFwiRmx1eFByb3h5XCI7XHJcblx0Y29uc3QgQ29ubmVjdGVkQ29tcG9uZW50ID0gRmx1eC5jb25uZWN0U3RvcmVzKFxyXG5cdFx0cHJvcHMuc3RvcmVzID8gT2JqZWN0LnZhbHVlcyhwcm9wcy5zdG9yZXMpIDogW10sXHJcblx0XHRwcm9wcy5jcmVhdGVQcm9wcyA/P1xyXG5cdFx0XHQoKCkgPT4ge1xyXG5cdFx0XHRcdHJldHVybiB7IFtNYXRoLnJhbmRvbSgpXTogTWF0aC5yYW5kb20oKSB9O1xyXG5cdFx0XHR9KVxyXG5cdCkocHJvcHMuY2hpbGRyZW4pO1xyXG5cdHJldHVybiA8Q29ubmVjdGVkQ29tcG9uZW50IHsuLi5wcm9wcy5zdG9yZXN9IC8+O1xyXG59XHJcbiIsImltcG9ydCB7IGZpbmRCeVByb3BzIH0gZnJvbSBcIi4uL3dlYnBhY2tcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBDaGFuZ2Vsb2cgPSAvKiNfX1BVUkVfXyovIGZpbmRCeVByb3BzKFwibGVhZFwiLCBcInNvY2lhbExpbmtcIilcclxuZXhwb3J0IGNvbnN0IENoYW5nZWxvZ01vZGFsID0gLyojX19QVVJFX18qLyBmaW5kQnlQcm9wcyhcIm1heE1vZGFsV2lkdGhcIiwgXCJjb250ZW50XCIpIC8vaSBhc3N1bWUgaXRzIHJlbGF0ZWQgdG8gdGhlIGNoYW5nZWxvZyBtb2RhbFxyXG5leHBvcnQgY29uc3QgTWFyZ2lucyA9IC8qI19fUFVSRV9fKi8gZmluZEJ5UHJvcHMoXCJtYXJnaW5MYXJnZVwiLCBcIm1hcmdpblRvcDIwXCIpXHJcbmV4cG9ydCBjb25zdCBDYXJkTG9vayA9IC8qI19fUFVSRV9fKi8gZmluZEJ5UHJvcHMoXCJhcnJvd1wiLCBcImNvbnRhaW5lclwiLCBcImRlc2NyaXB0aW9uXCIpIiwiaW1wb3J0IHsgUmVhY3QgfSBmcm9tIFwiLi4vd2VicGFja1wiO1xyXG5pbXBvcnQgRGlzY29yZEljb24gZnJvbSBcIi4vRGlzY29yZEljb25cIjtcclxuaW1wb3J0IHsgVGV4dCB9IGZyb20gXCIuL2luZGV4XCI7XHJcbmltcG9ydCB7IENhcmRMb29rIH0gZnJvbSBcIi4uL2NsYXNzZXNcIjtcclxuXHJcbi8qKlxyXG4gKiBBIENhdGVnb3J5IGNvbXBvbmVudCB0byBoaWRlIGNvbXBvbmVudHMuIE5vdGUgdGhhdCB0aGlzIGRvZXMgbm90IHVzZSB0aGUgY3VycmVudCBjYXRlZ29yeSBjb21wb25lbnQgb2YgdGhlIG1vZC5cclxuICogQG5hbWUgRGlzY29yZFByb3ZpZGVyc1xyXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNvbXBvbmVudHNcclxuICogQHBhcmFtIHtvYmplY3R9IHByb3BzIFJlYWN0IHByb3BlcnRpZXMuXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBbcHJvcHMudGl0bGVdIFRoZSB0aXRsZSBvZiB0aGUgY2F0ZWdvcnkuXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBbcHJvcHMuZGVzY3JpcHRpb25dIFRoZSBkZXNjcmlwdGlvbiBvZiB0aGUgY2F0ZWdvcnkuXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBbcHJvcHMuaWNvbl0gVGhlIGRlc2NyaXB0aW9uIG9mIHRoZSBjYXRlZ29yeS5cclxuICogQGV4YW1wbGVcclxuICogcmV0dXJuIChcclxuICogICA8Q2F0ZWdvcnkgdGl0bGU9XCJOYW1lXCI+XHJcbiAqIFx0XHQ8V2hhdGV2ZXIvPlxyXG4gKiBcdCA8L0NhdGVnb3J5PlxyXG4gKiApO1xyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2F0ZWdvcnkoeyB0aXRsZSwgZGVzY3JpcHRpb24sIGljb24sIGNoaWxkcmVuLCBvcGVuZWRCeURlZmF1bHQgPSBmYWxzZSB9KSB7XHJcbiAgICBjb25zdCBbb3BlbmVkLCBzZXRPcGVuZWRdID0gUmVhY3QudXNlU3RhdGUob3BlbmVkQnlEZWZhdWx0KTtcclxuXHJcbiAgICByZXR1cm4gPGRpdiBzdHlsZXM9e3ttYXJnaW5Cb3R0b206IFwiMjBweFwifX0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e0NhcmRMb29rLmNvbnRhaW5lcn0gb25DbGljaz17KCkgPT4gc2V0T3BlbmVkKCFvcGVuZWQpfT5cclxuICAgICAgICAgICAge2ljb24gJiYgPGRpdiBjbGFzc05hbWU9e0NhcmRMb29rLmljb259PlxyXG4gICAgICAgICAgICAgICAgPERpc2NvcmRJY29uIG5hbWU9e2ljb259IHN0eWxlPXt7d2lkdGg6IFwiMjBweFwiLCBoZWlnaHQ6IFwiMjBweFwifX0gLz5cclxuICAgICAgICAgICAgPC9kaXY+fVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Q2FyZExvb2suZGVzY3JpcHRpb259PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZS0yZHNETG5cIj57dGl0bGV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7ZGVzY3JpcHRpb24gJiYgPFRleHQ+e2Rlc2NyaXB0aW9ufTwvVGV4dD59XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Q2FyZExvb2suYXJyb3d9PlxyXG4gICAgICAgICAgICAgICAgPERpc2NvcmRJY29uIG5hbWU9XCJEcm9wZG93bkFycm93XCIgc3R5bGU9e3t3aWR0aDogXCIyNHB4XCIsIGhlaWdodDogXCIyNHB4XCIsIGNvbG9yOiBcInZhcigtLWludGVyYWN0aXZlLWFjdGl2ZSlcIiwgdHJhbnNmb3JtOiAhb3BlbmVkID8gXCJyb3RhdGUoLTkwZGVnKVwiIDogdm9pZCAwfX0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIHtvcGVuZWQgJiYgPGRpdiBzdHlsZT17e21hcmdpblRvcDogXCIxNnB4XCIsIHBhZGRpbmc6IFwiMCAyMHB4XCJ9fT57Y2hpbGRyZW59PC9kaXY+fVxyXG5cclxuICAgICAgICB7LyogPEZvcm1zLkZvcm1EaXZpZGVyIGNsYXNzTmFtZT1cImRpdmlkZXJEZWZhdWx0LTNDMi13c1wiLz4gKi99XHJcbiAgICA8L2Rpdj5cclxufVxyXG4iLCIvKipcclxuICogQG1vZHVsZSBjb21wb25lbnRzXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgUmVhY3QsIGZpbmRCeURpc3BsYXlOYW1lLCBmaW5kQnlQcm9wcywgZmluZCB9IGZyb20gXCIuLi93ZWJwYWNrXCI7XHJcblxyXG4vLyBEb24ndCByZS1leHBvcnQgb3VyIGNvbXBvbmVudHMgYXMgdGhleSB3b24ndCB0cmVlc2hha2UgcHJvcGVybHkuIEluc3RlYWQsIHBlb3BsZSBjYW4gbWFudWFsbHkgaW1wb3J0IHRoZW0uXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRGlzY29yZEljb24gfSBmcm9tIFwiLi9EaXNjb3JkSWNvblwiO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIERpc2NvcmRQcm92aWRlcnMgfSBmcm9tIFwiLi9EaXNjb3JkUHJvdmlkZXJzXCI7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRmx1eFdyYXBwZXIgfSBmcm9tIFwiLi9GbHV4V3JhcHBlclwiO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIENhdGVnb3J5IH0gZnJvbSBcIi4vQ2F0ZWdvcnlcIjtcclxuXHJcbi8vIFdyYXBwZXIgZm9yIFN3aXRjaCBjb21wb25lbnQgdG8gZml4IHRoZSBzd2l0Y2ggYm94IG5vdCBiZWluZyB1cGRhdGFibGUuIENoZWNrIGh0dHBzOi8vZ2l0aHViLmNvbS9CZXR0ZXJEaXNjb3JkQnVpbGRlci9iZGJ1aWxkZXIvYmxvYi9tYXN0ZXIvY29tbW9uL2hvb2tzL2NyZWF0ZVVwZGF0ZVdyYXBwZXIuanNcclxuZXhwb3J0IGNvbnN0IG1ha2VVcGRhdGVXcmFwcGVyID0gKENvbXBvbmVudCwgY2hlY2tQcm9wTmFtZSA9IFwidmFsdWVcIiwgdHlwZSA9IFwic3dpdGNoXCIpID0+IHtcclxuICAgIGNvbnN0IHR5cGVTd2l0Y2ggPSAodikgPT4ge1xyXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwic3dpdGNoXCI6IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB2XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBcInJhZGlvXCI6IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB2LnZhbHVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGVmYXVsdDoge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiAocHJvcHMpID0+IHtcclxuICAgICAgICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IFJlYWN0LnVzZVN0YXRlKHByb3BzW2NoZWNrUHJvcE5hbWVdKVxyXG4gICAgICAgIHJldHVybiA8Q29tcG9uZW50XHJcbiAgICAgICAgICAgIHsuLi57XHJcbiAgICAgICAgICAgICAgICAuLi5wcm9wcyxcclxuICAgICAgICAgICAgICAgIFtjaGVja1Byb3BOYW1lXTogdmFsdWUsXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZTogKC4uLmFyZ3MpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGFyZ3NbMF1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHByb3BzLm9uQ2hhbmdlID09PSBcImZ1bmN0aW9uXCIpIHByb3BzLm9uQ2hhbmdlKHZhbHVlKVxyXG4gICAgICAgICAgICAgICAgICAgIHNldFZhbHVlKHR5cGVTd2l0Y2godmFsdWUpKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgIC8+XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBCdXR0b24gPSAvKiNfX1BVUkVfXyovZmluZEJ5UHJvcHMoXCJDb2xvcnNcIiwgXCJMb29rc1wiLCBcIkRyb3Bkb3duU2l6ZXNcIik7XHJcbmV4cG9ydCBjb25zdCBTcGlubmVyID0gLyojX19QVVJFX18qL2ZpbmRCeURpc3BsYXlOYW1lKFwiU3Bpbm5lclwiKTtcclxuZXhwb3J0IGNvbnN0IFRleHQgPSAvKiNfX1BVUkVfXyovZmluZEJ5RGlzcGxheU5hbWUoXCJMZWdhY3lUZXh0XCIpO1xyXG5leHBvcnQgY29uc3QgVGV4dElucHV0ID0gLyojX19QVVJFX18qL2ZpbmRCeURpc3BsYXlOYW1lKFwiVGV4dElucHV0XCIpO1xyXG5leHBvcnQgY29uc3QgVG9vbHRpcCA9IC8qI19fUFVSRV9fKi9maW5kQnlEaXNwbGF5TmFtZShcIlRvb2x0aXBcIik7XHJcbmV4cG9ydCBjb25zdCBUb29sdGlwQ29udGFpbmVyID0gLyojX19QVVJFX18qLygoKSA9PiBmaW5kQnlQcm9wcyhcIlRvb2x0aXBDb250YWluZXJcIik/LlRvb2x0aXBDb250YWluZXIpKCk7XHJcbmV4cG9ydCBjb25zdCBTbGlkZUluID0gLyojX19QVVJFX18qL2ZpbmRCeURpc3BsYXlOYW1lKFwiU2xpZGVJblwiKTtcclxuZXhwb3J0IGNvbnN0IFNldHRpbmdzTm90aWNlID0gLyojX19QVVJFX18qL2ZpbmRCeURpc3BsYXlOYW1lKFwiU2V0dGluZ3NOb3RpY2VcIik7XHJcbmV4cG9ydCBjb25zdCBUcmFuc2l0aW9uR3JvdXAgPSAvKiNfX1BVUkVfXyovZmluZEJ5RGlzcGxheU5hbWUoXCJUcmFuc2l0aW9uR3JvdXBcIik7XHJcbmV4cG9ydCBjb25zdCBGbGV4ID0gLyojX19QVVJFX18qL2ZpbmRCeURpc3BsYXlOYW1lKFwiRmxleFwiKTtcclxuZXhwb3J0IGNvbnN0IENhcmQgPSAvKiNfX1BVUkVfXyovZmluZEJ5RGlzcGxheU5hbWUoXCJDYXJkXCIpO1xyXG5leHBvcnQgY29uc3QgUG9wb3V0ID0gLyojX19QVVJFX18qL2ZpbmRCeURpc3BsYXlOYW1lKFwiUG9wb3V0XCIpO1xyXG5leHBvcnQgY29uc3QgUHJvZ3Jlc3MgPSAvKiNfX1BVUkVfXyovZmluZEJ5RGlzcGxheU5hbWUoXCJQcm9ncmVzc1wiKTtcclxuZXhwb3J0IGNvbnN0IE1vZGFsID0gLyojX19QVVJFX18qL2ZpbmRCeVByb3BzKFwiTW9kYWxSb290XCIpXHJcbmV4cG9ydCBjb25zdCBGb3JtcyA9IC8qI19fUFVSRV9fKi9maW5kQnlQcm9wcygnRm9ybUl0ZW0nKVxyXG5leHBvcnQgY29uc3QgQ29sb3JQaWNrZXIgPSAvKiNfX1BVUkVfXyovZmluZEJ5RGlzcGxheU5hbWUoXCJDb2xvclBpY2tlclwiKVxyXG5leHBvcnQgY29uc3QgQW5jaG9yID0gLyojX19QVVJFX18qL2ZpbmRCeURpc3BsYXlOYW1lKFwiQW5jaG9yXCIpXHJcbmV4cG9ydCBjb25zdCBIZWFkaW5nID0gLyojX19QVVJFX18qLygoKSA9PiBmaW5kQnlQcm9wcyhcIkhlYWRpbmdcIikuSGVhZGluZykoKTtcclxuZXhwb3J0IGNvbnN0IEtleWJvYXJkU2hvcnRjdXQgPSAvKiNfX1BVUkVfXyovKCgpID0+IGZpbmRCeVByb3BzKFwiUFJFVFRZX0tFWVNcIikuZGVmYXVsdCkoKTtcclxuZXhwb3J0IGNvbnN0IFNlYXJjaEJhciA9IC8qI19fUFVSRV9fKi8oKCkgPT4gZmluZEJ5UHJvcHMoXCJTZWFyY2hJY29uXCIpLmRlZmF1bHQpKCk7XHJcbmV4cG9ydCBjb25zdCBPcmlnaW5hbFJhZGlvR3JvdXAgPSAvKiNfX1BVUkVfXyovZmluZEJ5RGlzcGxheU5hbWUoXCJSYWRpb0dyb3VwXCIpO1xyXG5leHBvcnQgY29uc3QgUmFkaW9Hcm91cCA9IG1ha2VVcGRhdGVXcmFwcGVyKE9yaWdpbmFsUmFkaW9Hcm91cCwgXCJ2YWx1ZVwiLCBcInJhZGlvXCIpO1xyXG5leHBvcnQgY29uc3QgT3JpZ2luYWxTd2l0Y2ggPSAvKiNfX1BVUkVfXyovZmluZEJ5RGlzcGxheU5hbWUoXCJTd2l0Y2hcIik7XHJcbmV4cG9ydCBjb25zdCBTd2l0Y2ggPSBtYWtlVXBkYXRlV3JhcHBlcihPcmlnaW5hbFN3aXRjaCwgXCJjaGVja2VkXCIpO1xyXG5leHBvcnQgY29uc3QgT3JpZ2luYWxTd2l0Y2hJdGVtID0gLyojX19QVVJFX18qL2ZpbmRCeURpc3BsYXlOYW1lKFwiU3dpdGNoSXRlbVwiKTtcclxuZXhwb3J0IGNvbnN0IFN3aXRjaEl0ZW0gPSBtYWtlVXBkYXRlV3JhcHBlcihPcmlnaW5hbFN3aXRjaEl0ZW0sIFwidmFsdWVcIik7XHJcbmV4cG9ydCBjb25zdCBNYXJrZG93biA9IC8qI19fUFVSRV9fKi8oKCkgPT4gZmluZChtID0+IG0/LmRlZmF1bHQ/LmRpc3BsYXlOYW1lID09IFwiTWFya2Rvd25cIiAmJiBtPy5kZWZhdWx0Py5ydWxlcyk/LmRlZmF1bHQpKCk7XHJcblxyXG5leHBvcnQgY29uc3QgQ29udGV4dE1lbnUgPSAvKiNfX1BVUkVfXyovZmluZEJ5UHJvcHMoXCJNZW51SXRlbVwiKS5kZWZhdWx0XHJcbk9iamVjdC5lbnRyaWVzKGZpbmRCeVByb3BzKFwiTWVudUl0ZW1cIikpLmZvckVhY2goKFtrZXksIGNvbnRlbnRzXSkgPT4ge1xyXG4gICAgaWYgKCFDb250ZXh0TWVudVtrZXldKSB7XHJcbiAgICAgICAgQ29udGV4dE1lbnVba2V5XSA9IGNvbnRlbnRzXHJcbiAgICB9XHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgQXZhdGFyID0gLyojX19QVVJFX18qLygoKSA9PiBmaW5kQnlQcm9wcyhcIkFuaW1hdGVkQXZhdGFyXCIpLmRlZmF1bHQpKClcclxuZXhwb3J0IGNvbnN0IEFuaW1hdGVkQXZhdGFyID0gLyojX19QVVJFX18qLygoKSA9PiBmaW5kQnlQcm9wcyhcIkFuaW1hdGVkQXZhdGFyXCIpLkFuaW1hdGVkQXZhdGFyKSgpXHJcbmV4cG9ydCBjb25zdCBBdmF0YXJTaXplcyA9IC8qI19fUFVSRV9fKi8oKCkgPT4gZmluZEJ5UHJvcHMoXCJBbmltYXRlZEF2YXRhclwiKS5TaXplcykoKVxyXG5cclxuZXhwb3J0IGNvbnN0IFNsaWRlciA9IC8qI19fUFVSRV9fKi8oKCkgPT4gZmluZEJ5UHJvcHMoXCJNYXJrZXJQb3NpdGlvbnNcIikuZGVmYXVsdCkoKVxyXG5leHBvcnQgY29uc3QgU2xpZGVyTWFya2VyUG9zaXRpb25zID0gLyojX19QVVJFX18qLygoKSA9PiBmaW5kQnlQcm9wcyhcIk1hcmtlclBvc2l0aW9uc1wiKS5NYXJrZXJQb3NpdGlvbnMpKCkiLCIvLyBLbm93IGl0IHdpbGwgd29yayBvbiB0aGlzIGNsaWVudCBtb2Qgb3IgaXQncyBkZXRlY3RpbmcgdGhlIHdyb25nIG9uZT9cclxuLy8gU2V0IHRoaXMgdmFyaWFibGUuXHJcblxyXG5leHBvcnQgZGVmYXVsdCAvKipcclxuICogQG1lbWJlcm9mIG1vZHVsZTp1dGlsaXRpZXNcclxuICogQHJldHVybnMge3N0cmluZ30gVGhlIG5hbWUgb2YgdGhlIHJ1bm5pbmcgY2xpZW50IG1vZC5cclxuICovIGZ1bmN0aW9uIGdldENsaWVudE1vZCgpIHtcclxuXHRyZXR1cm4gcHJvY2Vzcy5lbnYuQ0xJRU5UX01PRFxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IC8qKlxyXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnV0aWxpdGllc1xyXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBUaGUgY3VycmVudCB0aW1lIGluIG5hbm9zZWNvbmRzLlxyXG4gKi8gZnVuY3Rpb24gbmFub3NlY29uZHMoKSB7XHJcblx0Y29uc3QgaHJUaW1lID0gcHJvY2Vzcy5ocnRpbWUoKTtcclxuXHRyZXR1cm4gaHJUaW1lWzBdICogMTAwMDAwMDAwMCArIGhyVGltZVsxXTtcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCAvKipcclxuICogQHBhcmFtIHtudW1iZXJ9IHRpbWUgVGltZSAoaW4gbWlsbGlzZWNvbmRzKS5cclxuICogQG1lbWJlcm9mIG1vZHVsZTp1dGlsaXRpZXNcclxuICogQHJldHVybnMge1Byb21pc2V9IEEgc3RyaW5nIG9mIHJhbmRvbSBjaGFyYWN0ZXJzLlxyXG4gKi8gZnVuY3Rpb24gcmFuZG9tU3RyaW5nKHRpbWUpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQoKCkgPT4gcmVzb2x2ZSgpLCB0aW1lKSlcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVBcmd1bWVudHMoLi4uYXJncykge1xyXG5cdHJldHVybiBbXHJcblx0XHRcIiVjSXR0YWlcIixcclxuXHRcdFwiY29sb3I6ICMwMDA7IGJhY2tncm91bmQtY29sb3I6ICM0MmZmYTc7IGZvbnQtZmFtaWx5OiBkZWZhdWx0OyBwYWRkaW5nLWxlZnQ6IDNweDsgcGFkZGluZy1yaWdodDogM3B4OyBib3JkZXItcmFkaXVzOiAycHg7IGZvbnQtd2VpZ2h0OiBib2xkO1wiLFxyXG5cdFx0Li4uYXJncyxcclxuXHRdO1xyXG59XHJcbiIsImltcG9ydCB7IGNvbnNvbGVDb3B5LCBjcmVhdGVBcmd1bWVudHMgfSBmcm9tIFwiLi4vbG9nZ2VyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAvKipcclxuICogQG1lbWJlcm9mIG1vZHVsZTpsb2dnZXJcclxuICogQHBhcmFtICB7Li4uYW55fSBhcmdzXHJcbiAqLyBmdW5jdGlvbiBsb2coLi4uYXJncykge1xyXG5cdGNvbnNvbGVDb3B5LmxvZyguLi5jcmVhdGVBcmd1bWVudHMoLi4uYXJncykpO1xyXG59XHJcbiIsImltcG9ydCB7IGNvbnNvbGVDb3B5LCBjcmVhdGVBcmd1bWVudHMgfSBmcm9tIFwiLi4vbG9nZ2VyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAvKipcclxuICogQG1lbWJlcm9mIG1vZHVsZTpsb2dnZXJcclxuICogQHBhcmFtICB7Li4uYW55fSBhcmdzXHJcbiAqLyBmdW5jdGlvbiBkZWJ1ZyguLi5hcmdzKSB7XHJcblx0Y29uc29sZUNvcHkuZGVidWcoLi4uY3JlYXRlQXJndW1lbnRzKC4uLmFyZ3MpKTtcclxufVxyXG4iLCJpbXBvcnQgeyBjb25zb2xlQ29weSwgY3JlYXRlQXJndW1lbnRzIH0gZnJvbSBcIi4uL2xvZ2dlclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgLyoqXHJcbiAqIEBtZW1iZXJvZiBtb2R1bGU6bG9nZ2VyXHJcbiAqIEBwYXJhbSAgey4uLmFueX0gYXJnc1xyXG4gKi8gZnVuY3Rpb24gd2FybiguLi5hcmdzKSB7XHJcblx0Y29uc29sZUNvcHkud2FybiguLi5jcmVhdGVBcmd1bWVudHMoLi4uYXJncykpO1xyXG59XHJcbiIsImltcG9ydCB7IGNvbnNvbGVDb3B5LCBjcmVhdGVBcmd1bWVudHMgfSBmcm9tIFwiLi4vbG9nZ2VyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAvKipcclxuICogQG1lbWJlcm9mIG1vZHVsZTpsb2dnZXJcclxuICogQHBhcmFtICB7Li4uYW55fSBhcmdzXHJcbiAqLyBmdW5jdGlvbiBlcnJvciguLi5hcmdzKSB7XHJcblx0Y29uc29sZUNvcHkuZXJyb3IoLi4uY3JlYXRlQXJndW1lbnRzKC4uLmFyZ3MpKTtcclxufVxyXG4iLCJpbXBvcnQgeyBjb25zb2xlQ29weSwgY3JlYXRlQXJndW1lbnRzIH0gZnJvbSBcIi4uL2xvZ2dlclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgLyoqXHJcbiAqIEBtZW1iZXJvZiBtb2R1bGU6bG9nZ2VyXHJcbiAqIEBwYXJhbSAgey4uLmFueX0gYXJnc1xyXG4gKi8gZnVuY3Rpb24gZ3JvdXAoLi4uYXJncykge1xyXG5cdGNvbnNvbGVDb3B5Lmdyb3VwKC4uLmNyZWF0ZUFyZ3VtZW50cyguLi5hcmdzKSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgY29uc29sZUNvcHksIGNyZWF0ZUFyZ3VtZW50cyB9IGZyb20gXCIuLi9sb2dnZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IC8qKlxyXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmxvZ2dlclxyXG4gKiBAcGFyYW0gIHsuLi5hbnl9IGFyZ3NcclxuICovIGZ1bmN0aW9uIGdyb3VwRW5kKC4uLmFyZ3MpIHtcclxuXHRjb25zb2xlQ29weS5ncm91cEVuZCguLi5jcmVhdGVBcmd1bWVudHMoLi4uYXJncykpO1xyXG59XHJcbiIsImltcG9ydCB7IGNvbnNvbGVDb3B5IH0gZnJvbSBcIi4uL2xvZ2dlclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgLyoqXHJcbiAqIEBtZW1iZXJvZiBtb2R1bGU6bG9nZ2VyXHJcbiAqIEBwYXJhbSAgey4uLmFueX0gYXJnc1xyXG4gKi8gZnVuY3Rpb24gY291bnQoLi4uYXJncykge1xyXG5cdGNvbnNvbGVDb3B5LmNvdW50KC4uLmFyZ3MpO1xyXG59XHJcbiIsImltcG9ydCB7IGNvbnNvbGVDb3B5IH0gZnJvbSBcIi4uL2xvZ2dlclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgLyoqXHJcbiAqIEBtZW1iZXJvZiBtb2R1bGU6bG9nZ2VyXHJcbiAqIEBwYXJhbSAgey4uLmFueX0gYXJnc1xyXG4gKi8gZnVuY3Rpb24gY291bnRSZXNldCguLi5hcmdzKSB7XHJcblx0Y29uc29sZUNvcHkuY291bnRSZXNldCguLi5hcmdzKTtcclxufVxyXG4iLCIvKipcclxuICogQG1vZHVsZSBsb2dnZXJcclxuICovXHJcblxyXG5leHBvcnQgY29uc3QgY29uc29sZUNvcHkgPSB7IC4uLmNvbnNvbGUgfTtcclxuXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgY3JlYXRlQXJndW1lbnRzIH0gZnJvbSBcIi4vY3JlYXRlQXJndW1lbnRzXCI7XHJcblxyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGxvZyB9IGZyb20gXCIuL2xvZ1wiO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGRlYnVnIH0gZnJvbSBcIi4vZGVidWdcIjtcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyB3YXJuIH0gZnJvbSBcIi4vd2FyblwiO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGVycm9yIH0gZnJvbSBcIi4vZXJyb3JcIjtcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBncm91cCB9IGZyb20gXCIuL2dyb3VwXCI7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZ3JvdXBFbmQgfSBmcm9tIFwiLi9ncm91cEVuZFwiO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGNvdW50IH0gZnJvbSBcIi4vY291bnRcIjtcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBjb3VudFJlc2V0IH0gZnJvbSBcIi4vY291bnRSZXNldFwiO1xyXG4iLCJpbXBvcnQgeyBlcnJvciB9IGZyb20gXCIuLi9sb2dnZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IC8qKlxyXG4gKiBGaW5kcyBhbiBvYmplY3QgaW4gYSB0cmVlLlxyXG4gKiBAcGFyYW0ge29iamVjdH0gdHJlZSBUaGUgdHJlZSB0byBzZWFyY2guXHJcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZpbHRlciBBIGZpbHRlciBmdW5jdGlvbiB0aGF0IHNob3VsZCByZXR1cm4gdHJ1ZSB3aGVuIGl0IGNoZWNrcyB3aGF0IHlvdSB3YW50IHRvIGZpbmQuXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXHJcbiAqIEBwYXJhbSB7c3RyaW5nW119IFtvcHRpb25zLndhbGthYmxlPVtdXSBXaGljaCBub2RlIG5hbWVzIGFyZSB3YWxrYWJsZS5cclxuICogQHBhcmFtIHtzdHJpbmdbXX0gW29wdGlvbnMuZXhjbHVkZT1bXV0gV2hpY2ggbm9kZSBuYW1lcyB0byBub3Qgd2Fsay5cclxuICogQHBhcmFtIHtib29sZWFufHN0cmluZ30gW29wdGlvbnMud2hpbGVMb29wPWZhbHNlXSBXaGV0aGVyIG9yIG5vdCB0byB1c2UgYSB3aGlsZSBsb29wIGluc3RlYWQgb2YgcmVjdXJzaW9uLiBUaGlzIGlzIHNsb3dlciwgYnV0IG5vdCBwcm9uZSB0byBzdGFjayBvdmVyZmxvdy5cclxuICogQHBhcmFtIHtib29sZWFufHN0cmluZ30gW29wdGlvbnMubWF4RGVwdGg9MTAwXSBUaGUgbWF4aW11bSBhbW91bnQgb2YgbGF5ZXJzIGRlZXAgdG8gc2VhcmNoIHRoZSB0cmVlLiBgb3B0aW9ucy53aGlsZUxvb3A9ZmFsc2VgIG9ubHkuXHJcbiAqIEBtZW1iZXJvZiBtb2R1bGU6dXRpbGl0aWVzXHJcbiAqIEByZXR1cm5zIHtvYmplY3R8bnVsbH1cclxuICovIGZ1bmN0aW9uIGZpbmRJblRyZWUoXHJcblx0dHJlZSxcclxuXHRmaWx0ZXIsXHJcblx0e1xyXG5cdFx0d2Fsa2FibGUgPSBbXSxcclxuXHRcdGV4Y2x1ZGUgPSBbXSxcclxuXHRcdHdoaWxlTG9vcCA9IGZhbHNlLFxyXG5cdFx0bWF4RGVwdGggPSAxMDAsXHJcblx0XHRkZXB0aCA9IDAsXHJcblx0fSA9IHt9XHJcbikge1xyXG5cdGlmIChkZXB0aCA9PT0gbWF4RGVwdGgpIHJldHVybiBudWxsO1xyXG5cdGlmICh0cmVlID09PSBudWxsIHx8IHRyZWUgPT09IHVuZGVmaW5lZCkgcmV0dXJuIG51bGw7XHJcblx0aWYgKHR5cGVvZiB0cmVlICE9PSBcIm9iamVjdFwiKSByZXR1cm4gbnVsbDtcclxuXHJcblx0aWYgKHR5cGVvZiBmaWx0ZXIgPT09IFwic3RyaW5nXCIpIHJldHVybiB0cmVlW2ZpbHRlcl07XHJcblxyXG5cdGlmICh3aGlsZUxvb3ApIHtcclxuXHRcdGNvbnN0IHN0YWNrID0gW3RyZWVdO1xyXG5cdFx0d2hpbGUgKHN0YWNrLmxlbmd0aCkge1xyXG5cdFx0XHRjb25zdCBub2RlID0gc3RhY2tbd2hpbGVMb29wID09PSBcInJldmVyc2VcIiA/IFwicG9wXCIgOiBcInNoaWZ0XCJdKCk7XHJcblx0XHRcdHRyeSB7XHJcblx0XHRcdFx0aWYgKGZpbHRlcihub2RlKSkgcmV0dXJuIG5vZGU7XHJcblx0XHRcdH0gY2F0Y2gge31cclxuXHRcdFx0aWYgKHN0YWNrLmxlbmd0aCA+PSBtYXhTdGFjaykgY29udGludWU7XHJcblx0XHRcdGlmIChBcnJheS5pc0FycmF5KG5vZGUpKSB7XHJcblx0XHRcdFx0c3RhY2sucHVzaCguLi5ub2RlKTtcclxuXHRcdFx0fSBlbHNlIGlmICh0eXBlb2Ygbm9kZSA9PT0gXCJvYmplY3RcIiAmJiBub2RlICE9PSBudWxsKSB7XHJcblx0XHRcdFx0aWYgKHdhbGthYmxlLmxlbmd0aCA+IDApIHtcclxuXHRcdFx0XHRcdHN0YWNrLnB1c2goXHJcblx0XHRcdFx0XHRcdC4uLk9iamVjdC5lbnRyaWVzKG5vZGUpXHJcblx0XHRcdFx0XHRcdFx0LmZpbHRlcihcclxuXHRcdFx0XHRcdFx0XHRcdChba2V5LCB2YWx1ZV0pID0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdHdhbGthYmxlLmluZGV4T2Yoa2V5KSAhPT0gLTEgJiYgZXhjbHVkZS5pbmRleE9mKGtleSkgPT09IC0xXHJcblx0XHRcdFx0XHRcdFx0KVxyXG5cdFx0XHRcdFx0XHRcdC5tYXAoKFtrZXksIHZhbHVlXSkgPT4gdmFsdWUpXHJcblx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRzdGFjay5wdXNoKFxyXG5cdFx0XHRcdFx0XHQuLi5PYmplY3QudmFsdWVzKG5vZGUpLmZpbHRlcihcclxuXHRcdFx0XHRcdFx0XHQoa2V5KSA9PiBleGNsdWRlLmluZGV4T2Yoa2V5KSA9PT0gLTEgJiYgbm9kZVxyXG5cdFx0XHRcdFx0XHQpXHJcblx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRkZXB0aCsrO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIG51bGw7XHJcblx0fSBlbHNlIHtcclxuXHRcdGxldCByZXR1cm5WYWx1ZTtcclxuXHRcdHRyeSB7XHJcblx0XHRcdGlmIChmaWx0ZXIodHJlZSkpIHJldHVybiB0cmVlO1xyXG5cdFx0fSBjYXRjaCB7fVxyXG5cdFx0aWYgKEFycmF5LmlzQXJyYXkodHJlZSkpIHtcclxuXHRcdFx0Zm9yIChjb25zdCB2YWx1ZSBvZiB0cmVlKSB7XHJcblx0XHRcdFx0cmV0dXJuVmFsdWUgPSBmaW5kSW5UcmVlKHZhbHVlLCBmaWx0ZXIsIHtcclxuXHRcdFx0XHRcdHdhbGthYmxlLFxyXG5cdFx0XHRcdFx0ZXhjbHVkZSxcclxuXHRcdFx0XHRcdHdoaWxlTG9vcCxcclxuXHRcdFx0XHRcdG1heERlcHRoLFxyXG5cdFx0XHRcdFx0ZGVwdGg6IGRlcHRoICsgMSxcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHRpZiAocmV0dXJuVmFsdWUpIHJldHVybiByZXR1cm5WYWx1ZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0bGV0IGtleXMgPSB3YWxrYWJsZS5sZW5ndGggPiAwID8gd2Fsa2FibGUgOiBPYmplY3Qua2V5cyh0cmVlKTtcclxuXHRcdGZvciAoY29uc3Qga2V5IG9mIGtleXMpIHtcclxuXHRcdFx0aWYgKCF0cmVlLmhhc093blByb3BlcnR5KGtleSkgfHwgZXhjbHVkZS5pbmNsdWRlcyhrZXkpKSBjb250aW51ZTtcclxuXHRcdFx0cmV0dXJuVmFsdWUgPSBmaW5kSW5UcmVlKHRyZWVba2V5XSwgZmlsdGVyLCB7XHJcblx0XHRcdFx0d2Fsa2FibGUsXHJcblx0XHRcdFx0ZXhjbHVkZSxcclxuXHRcdFx0XHR3aGlsZUxvb3AsXHJcblx0XHRcdFx0bWF4RGVwdGgsXHJcblx0XHRcdFx0ZGVwdGg6IGRlcHRoICsgMSxcclxuXHRcdFx0fSk7XHJcblx0XHRcdGlmIChyZXR1cm5WYWx1ZSkgcmV0dXJuIHJldHVyblZhbHVlO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIG51bGw7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IGZpbmRJblRyZWUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAvKipcclxuICogRmluZHMgYW4gb2JqZWN0IGluIGEgUmVhY3QgdHJlZS5cclxuICogQG1lbWJlcm9mIG1vZHVsZTp1dGlsaXRpZXNcclxuICogQHBhcmFtIHtvYmplY3R9IHRyZWUgVGhlIHRyZWUgdG8gc2VhcmNoLlxyXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmaWx0ZXIgQSBmaWx0ZXIgZnVuY3Rpb24gdGhhdCBzaG91bGQgcmV0dXJuIHRydWUgd2hlbiBpdCBjaGVja3Mgd2hhdCB5b3Ugd2FudCB0byBmaW5kLlxyXG4gKiBAcGFyYW0ge29iamVjdH0gW3doaWxlTG9vcD1mYWxzZV0gV2hldGhlciBvciBub3QgdG8gdXNlIGEgd2hpbGUgbG9vcCBpbnN0ZWFkIG9mIHJlY3Vyc2lvbi4gVGhpcyBpcyBzbG93ZXIsIGJ1dCBub3QgcHJvbmUgdG8gc3RhY2sgb3ZlcmZsb3cuXHJcbiAqLyBmdW5jdGlvbiBmaW5kSW5SZWFjdFRyZWUoXHJcblx0dHJlZSxcclxuXHRmaWx0ZXIsXHJcblx0eyB3aGlsZUxvb3AgPSBmYWxzZSwgbWF4RGVwdGggPSAxMDAsIGRlcHRoID0gMCB9ID0ge31cclxuKSB7XHJcblx0cmV0dXJuIGZpbmRJblRyZWUodHJlZSwgZmlsdGVyLCB7XHJcblx0XHR3YWxrYWJsZTogW1wicHJvcHNcIiwgXCJjaGlsZHJlblwiLCBcImNoaWxkXCIsIFwic2libGluZ1wiXSxcclxuXHRcdGV4Y2x1ZGU6IFtcIl9fcmVhY3RGaWJlciRcIiwgXCJfX3JlYWN0RmliZXJcIiwgXCJfX3JlYWN0SW50ZXJuYWxJbnN0YW5jZSRcIiwgXCJfX3JlYWN0SW50ZXJuYWxJbnN0YW5jZVwiXSxcclxuXHRcdHdoaWxlTG9vcCxcclxuXHRcdG1heERlcHRoLFxyXG5cdFx0ZGVwdGgsXHJcblx0fSk7XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgLyoqXHJcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR8c3RyaW5nfSBub2RlIFRoZSBub2RlLCBub2RlIElELCBub2RlIGNsYXNzIG5hbWUsIG9yIHBhcnRpYWwgbm9kZSBjbGFzcyBuYW1lIHRvIGdldCB0aGUgUmVhY3QgaW5zdGFuY2UgZnJvbS5cclxuICogQG1lbWJlcm9mIG1vZHVsZTp1dGlsaXRpZXNcclxuICogQHJldHVybnMge29iamVjdH1cclxuICovIGZ1bmN0aW9uIGdldFJlYWN0SW5zdGFuY2Uobm9kZSkge1xyXG5cdGlmICh0eXBlb2Ygbm9kZSA9PT0gXCJzdHJpbmdcIilcclxuXHRcdG5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG5cdFx0XHRgJHtub2RlfSwgLiR7bm9kZX0sICMke25vZGV9LCBbY2xhc3MqPVwiJHtub2RlfVwiXWBcclxuXHRcdCk7XHJcblx0aWYgKCFub2RlKSByZXR1cm4gbnVsbDtcclxuXHRpZiAobm9kZS5fX3JlYWN0RmliZXIkKSByZXR1cm4gbm9kZS5fX3JlYWN0RmliZXIkOyAvLyBuZXcgUmVhY3RcclxuXHRpZiAobm9kZS5fX3JlYWN0SW50ZXJuYWxJbnN0YW5jZSQpIHJldHVybiBub2RlLl9fcmVhY3RJbnRlcm5hbEluc3RhbmNlJDsgLy8gb2xkIFJlYWN0XHJcblx0cmV0dXJuIG5vZGVbXHJcblx0XHRPYmplY3Qua2V5cyhub2RlKS5maW5kKChlKSA9PiBlLnN0YXJ0c1dpdGgoXCJfX3JlYWN0RmliZXIkXCIpKSAvLyBuZXcgUmVhY3RcclxuXHRdIHx8IG5vZGVbXHJcblx0XHRPYmplY3Qua2V5cyhub2RlKS5maW5kKChlKSA9PiBlLnN0YXJ0c1dpdGgoXCJfX3JlYWN0SW50ZXJuYWxJbnN0YW5jZVwiKSkgLy8gb2xkIFJlYWN0XHJcblx0XTtcclxufVxyXG4iLCJpbXBvcnQgeyBnZXRSZWFjdEluc3RhbmNlIH0gZnJvbSBcIi4uL3V0aWxpdGllc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgLyoqXHJcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR8c3RyaW5nfSBub2RlIFRoZSBub2RlLCBub2RlIElELCBub2RlIGNsYXNzIG5hbWUsIG9yIHBhcnRpYWwgbm9kZSBjbGFzcyBuYW1lIHRvIGdldCB0aGUgb3duZXIgaW5zdGFuY2UgZnJvbS5cclxuICogQG1lbWJlcm9mIG1vZHVsZTp1dGlsaXRpZXNcclxuICogQHJldHVybnMge29iamVjdH1cclxuICovIGZ1bmN0aW9uIGdldE93bmVySW5zdGFuY2Uobm9kZSkge1xyXG5cdGZvciAobGV0IGN1cnIgPSBnZXRSZWFjdEluc3RhbmNlKG5vZGUpOyBjdXJyOyBjdXJyID0gY3Vyci5yZXR1cm4pIHtcclxuXHRcdGNvbnN0IG93bmVyID0gY3Vyci5zdGF0ZU5vZGU7XHJcblx0XHRpZiAob3duZXIpXHJcblx0XHRcdHJldHVybiBvd25lcjtcclxuXHR9XHJcblx0cmV0dXJuIG51bGw7XHJcbn1cclxuIiwiaW1wb3J0IHsgTW9kYWxTdGFjayB9IGZyb20gXCIuLi93ZWJwYWNrXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0ZXN0Q29tcG9uZW50KENvbXBvbmVudCkge1xyXG5cdE1vZGFsU3RhY2sub3Blbk1vZGFsKCgpID0+IENvbXBvbmVudCk7XHJcbn1cclxuIiwiaW1wb3J0IHsgYXZlcmFnZSwgbWVkaWFuLCBuYW5vc2Vjb25kcyB9IGZyb20gXCIuLi91dGlsaXRpZXNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IC8qKlxyXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBjb2RlYmxvY2sgVGhlIGNvZGUgdG8gYmVuY2htYXJrLlxyXG4gKiBAcGFyYW0ge251bWJlcn0gdGltZXMgVGhlIGFtb3VudCBvZiB0aW1lcyB0byBydW4gdGhlIGJlbmNobWFyay5cclxuICogQG1lbWJlcm9mIG1vZHVsZTp1dGlsaXRpZXNcclxuICogQHJldHVybnMge1Byb21pc2V9IEEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gdGhlIGJlbmNobWFyayBpcyBjb21wbGV0ZWQuXHJcbiAqLyBmdW5jdGlvbiBiZW5jaG1hcmsoY29kZWJsb2NrLCB0aW1lcykge1xyXG5cdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG5cdFx0Y29uc3QgcHJlID0gY29kZWJsb2NrLnByZSA/PyAoKCkgPT4ge30pO1xyXG5cdFx0ZGVsZXRlIGNvZGVibG9jay5wcmU7XHJcblx0XHRjb25zdCBwb3N0ID0gY29kZWJsb2NrLnBvc3QgPz8gKCgpID0+IHt9KTtcclxuXHRcdGRlbGV0ZSBjb2RlYmxvY2sucG9zdDtcclxuXHJcblx0XHRjb25zdCBuYW1lID0gT2JqZWN0LmtleXMoY29kZWJsb2NrKVswXTtcclxuXHJcblx0XHRjb2RlYmxvY2sgPSBjb2RlYmxvY2tbT2JqZWN0LmtleXMoY29kZWJsb2NrKVswXV07XHJcblxyXG5cdFx0bGV0IHByb21pc2VzID0gW107XHJcblxyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aW1lczsgaSsrKSB7XHJcblx0XHRcdHByb21pc2VzLnB1c2goXHJcblx0XHRcdFx0bmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuXHRcdFx0XHRcdGxldCByZXR1cm5zLCBzdGFydCwgZW5kO1xyXG5cdFx0XHRcdFx0dHJ5IHtcclxuXHRcdFx0XHRcdFx0cHJlKCk7XHJcblx0XHRcdFx0XHRcdHN0YXJ0ID0gbmFub3NlY29uZHMoKTtcclxuXHRcdFx0XHRcdFx0cmV0dXJucyA9IGNvZGVibG9jaygpO1xyXG5cdFx0XHRcdFx0XHRlbmQgPSBuYW5vc2Vjb25kcygpO1xyXG5cdFx0XHRcdFx0XHRwb3N0KCk7XHJcblx0XHRcdFx0XHR9IGNhdGNoIChlKSB7XHJcblx0XHRcdFx0XHRcdHJlc29sdmUoeyByZXR1cm5zLCB0aW1lOiAwLCBlcnJvcjogZSB9KTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdHJlc29sdmUoeyByZXR1cm5zLCB0aW1lOiBlbmQgLSBzdGFydCwgZXJyb3I6IGZhbHNlIH0pO1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdCk7XHJcblx0XHR9XHJcblxyXG5cdFx0UHJvbWlzZS5hbGwocHJvbWlzZXMpLnRoZW4oKGFsbFJldHVybnMpID0+IHtcclxuXHRcdFx0Y29uc3QgZmluYWxUaW1lcyA9IGFsbFJldHVybnMubWFwKChyKSA9PiByLnRpbWUpO1xyXG5cdFx0XHRyZXNvbHZlKHtcclxuXHRcdFx0XHRuYW1lLFxyXG5cdFx0XHRcdGF2ZXJhZ2U6IGF2ZXJhZ2UoZmluYWxUaW1lcyksXHJcblx0XHRcdFx0bWVkaWFuOiBtZWRpYW4oZmluYWxUaW1lcyksXHJcblx0XHRcdFx0ZXJyb3I6IGFsbFJldHVybnNbMF0uZXJyb3IsXHJcblx0XHRcdFx0cmV0dXJuczogYWxsUmV0dXJuc1swXS5yZXR1cm5zLFxyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cdH0pO1xyXG59XHJcbiIsImltcG9ydCB7IGdyb3VwLCBncm91cEVuZCB9IGZyb20gXCIuLi9sb2dnZXJcIjtcclxuaW1wb3J0IHsgYmVuY2htYXJrLCBuYW5vc2Vjb25kcyB9IGZyb20gXCIuLi91dGlsaXRpZXNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IC8qKlxyXG4gKiBQcmludHMgb3V0IHRoZSBiZW5jaG1hcmsgcmVzdWx0cyBmb3IgZWFjaCBjb2RlIGJsb2NrLlxyXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnV0aWxpdGllc1xyXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBjb2RlYmxvY2sgVGhlIGNvZGUgdG8gYmVuY2htYXJrLlxyXG4gKiBAcGFyYW0ge251bWJlcn0gdGltZXMgVGhlIGFtb3VudCBvZiB0aW1lcyB0byBydW4gdGhlIGJlbmNobWFyay5cclxuICovIGZ1bmN0aW9uIG11bHRpQmVuY2htYXJrKGNvZGVibG9ja3MsIHRpbWVzKSB7XHJcblx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcblx0XHRjb25zdCBzdGFydCA9IG5hbm9zZWNvbmRzKCk7XHJcblx0XHRQcm9taXNlLmFsbChcclxuXHRcdFx0Y29kZWJsb2Nrcy5tYXAoKGNvZGVibG9jaykgPT4gYmVuY2htYXJrKGNvZGVibG9jaywgdGltZXMpKVxyXG5cdFx0KS50aGVuKChyZXN1bHRzKSA9PiB7XHJcblx0XHRcdGNvbnN0IGVuZCA9IG5hbm9zZWNvbmRzKCk7XHJcblx0XHRcdGNvbnN0IGdyb3VwTmFtZSA9IGBCZW5jaG1hcmtlZCAke2NvZGVibG9ja3MubGVuZ3RoLnRvTG9jYWxlU3RyaW5nKCl9IGZ1bmN0aW9ucyAke3RpbWVzLnRvTG9jYWxlU3RyaW5nKCl9IHRpbWVzIG92ZXIgJHsoXHJcblx0XHRcdFx0ZW5kIC0gc3RhcnRcclxuXHRcdFx0KS50b0xvY2FsZVN0cmluZygpfW5zLmA7XHJcblx0XHRcdGdyb3VwKGdyb3VwTmFtZSk7XHJcblx0XHRcdGNvbnN0IG1hcHBlZFJlc3VsdHMgPSBPYmplY3QudmFsdWVzKHJlc3VsdHMpLm1hcCgocmVzdWx0KSA9PiB7XHJcblx0XHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRcdE5hbWU6IHJlc3VsdC5uYW1lLFxyXG5cdFx0XHRcdFx0XCJNZWRpYW4gVGltZVwiOiBgJHtyZXN1bHQubWVkaWFuLnRvTG9jYWxlU3RyaW5nKCl9bnNgLFxyXG5cdFx0XHRcdFx0XCJBdmVyYWdlIFRpbWVcIjogYCR7cmVzdWx0LmF2ZXJhZ2UudG9Mb2NhbGVTdHJpbmcoKX1uc2AsXHJcblx0XHRcdFx0XHRSZXR1cm5zOiByZXN1bHQucmV0dXJucyxcclxuXHRcdFx0XHRcdEVycm9yOiByZXN1bHQuZXJyb3IsXHJcblx0XHRcdFx0XHRcIihNZWRpYW4gVGltZSlcIjogcmVzdWx0Lm1lZGlhbixcclxuXHRcdFx0XHRcdFwiKEF2ZXJhZ2UgVGltZSlcIjogcmVzdWx0LmF2ZXJhZ2UsXHJcblx0XHRcdFx0fTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdGNvbnN0IHN1Y2Nlc3NmdWxSZXN1bHRzID0gbWFwcGVkUmVzdWx0cy5maWx0ZXIoXHJcblx0XHRcdFx0KHJlc3VsdCkgPT4gcmVzdWx0LkVycm9yID09PSBmYWxzZVxyXG5cdFx0XHQpO1xyXG5cdFx0XHRjb25zdCBlcnJvcmVkUmVzdWx0cyA9IG1hcHBlZFJlc3VsdHMuZmlsdGVyKChyZXN1bHQpID0+ICEhcmVzdWx0LkVycm9yKTtcclxuXHJcblx0XHRcdGNvbnNvbGUudGFibGUoXHJcblx0XHRcdFx0c3VjY2Vzc2Z1bFJlc3VsdHMuc29ydCgocmVzdWx0MSwgcmVzdWx0MikgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKHJlc3VsdDFbXCIoTWVkaWFuIFRpbWUpXCJdID4gcmVzdWx0MltcIihNZWRpYW4gVGltZSlcIl0pIHJldHVybiAxO1xyXG5cdFx0XHRcdFx0aWYgKHJlc3VsdDFbXCIoTWVkaWFuIFRpbWUpXCJdIDwgcmVzdWx0MltcIihNZWRpYW4gVGltZSlcIl0pIHJldHVybiAtMTtcclxuXHRcdFx0XHRcdHJldHVybiAwO1xyXG5cdFx0XHRcdH0pLFxyXG5cdFx0XHRcdFtcIk5hbWVcIiwgXCJNZWRpYW4gVGltZVwiLCBcIkF2ZXJhZ2UgVGltZVwiLCBcIlJldHVybnNcIl1cclxuXHRcdFx0KTtcclxuXHRcdFx0aWYgKGVycm9yZWRSZXN1bHRzLmxlbmd0aCA+IDApIHtcclxuXHRcdFx0XHRjb25zb2xlLnRhYmxlKGVycm9yZWRSZXN1bHRzLCBbXCJOYW1lXCIsIFwiRXJyb3JcIl0pO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRncm91cEVuZChncm91cE5hbWUpO1xyXG5cdFx0XHRyZXNvbHZlKHJlc3VsdHMpO1xyXG5cdFx0fSk7XHJcblx0fSk7XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgLyoqXHJcbiAqIEBwYXJhbSB7bnVtYmVyW119IGFycmF5IEFuIGFycmF5IG9mIG51bWJlcnMuXHJcbiAqIEBtZW1iZXJvZiBtb2R1bGU6dXRpbGl0aWVzXHJcbiAqIEByZXR1cm5zIHtudW1iZXJ9IFRoZSBhdmVyYWdlIG9mIHRoZSBudW1iZXJzIGluIHRoZSBhcnJheS5cclxuICovIGZ1bmN0aW9uIGF2ZXJhZ2UoYXJyYXkpIHtcclxuXHRpZiAoYXJyYXkubGVuZ3RoID09PSAwKSByZXR1cm4gMDtcclxuXHRsZXQgdG90YWwgPSAwO1xyXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcclxuXHRcdHRvdGFsICs9IGFycmF5W2ldO1xyXG5cdH1cclxuXHRyZXR1cm4gdG90YWwgLyBhcnJheS5sZW5ndGg7XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgLyoqXHJcbiAqIEBwYXJhbSB7bnVtYmVyW119IGFycmF5IEFuIGFycmF5IG9mIG51bWJlcnMuXHJcbiAqIEBtZW1iZXJvZiBtb2R1bGU6dXRpbGl0aWVzXHJcbiAqIEByZXR1cm5zIHtudW1iZXJ9IFRoZSBtZWRpYW4gb2YgdGhlIG51bWJlcnMgaW4gdGhlIGFycmF5LlxyXG4gKi8gZnVuY3Rpb24gbWVkaWFuKGFycmF5KSB7XHJcblx0aWYgKGFycmF5Lmxlbmd0aCA9PT0gMCkgcmV0dXJuIDA7XHJcblx0YXJyYXkuc29ydChmdW5jdGlvbiAoYSwgYikge1xyXG5cdFx0cmV0dXJuIGEgLSBiO1xyXG5cdH0pO1xyXG5cdGxldCBoYWxmID0gTWF0aC5mbG9vcihhcnJheS5sZW5ndGggLyAyKTtcclxuXHRpZiAoYXJyYXkubGVuZ3RoICUgMikgcmV0dXJuIGFycmF5W2hhbGZdO1xyXG5cdHJldHVybiAoYXJyYXlbaGFsZiAtIDFdICsgYXJyYXlbaGFsZl0pIC8gMi4wO1xyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IC8qKlxyXG4gKiBAcGFyYW0ge251bWJlcn0gbWluIFRoZSBtaW5pbXVtIHZhbHVlIG9mIHRoZSByZXR1cm5lZCBudW1iZXIuXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBtaXggVGhlIG1heGltdW0gdmFsdWUgb2YgdGhlIHJldHVybmVkIG51bWJlci5cclxuICogQG1lbWJlcm9mIG1vZHVsZTp1dGlsaXRpZXNcclxuICogQHJldHVybnMge251bWJlcn0gQSByYW5kb20gbnVtYmVyLlxyXG4gKi8gZnVuY3Rpb24gcmFuZG9tTnVtYmVyKG1pbiwgbWF4KSB7XHJcblx0cmV0dXJuIE1hdGgucmFuZG9tKCkgKiBtYXggLSBtaW47XHJcbn1cclxuIiwiaW1wb3J0IHsgcmFuZG9tTnVtYmVyIH0gZnJvbSBcIi4uL3V0aWxpdGllc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgLyoqXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBsZW5ndGggVGhlIGxlbmd0aCBvZiB0aGUgc3RyaW5nLlxyXG4gKiBAcGFyYW0ge3N0cmluZ3xhcnJheX0gZG9udE1hdGNoIEEgc3RyaW5nIG9yIGFuIGFycmF5IG9mIHN0cmluZ3MgdGhhdCB3aWxsIGNhdXNlIGEgcmVnZW5lcmF0aW9uIGlmIGFueSBhcmUgbWF0Y2hlZC5cclxuICogQHBhcmFtIHtzdHJpbmd8YXJyYXl9IGNoYXJzZXQgQSBsaXN0IG9mIHRoZSBjaGFyYWN0ZXJzIHRvIHVzZSB3aGVuIGdlbmVyYXRpbmcgdGhlIHN0cmluZy5cclxuICogQG1lbWJlcm9mIG1vZHVsZTp1dGlsaXRpZXNcclxuICogQHJldHVybnMge3N0cmluZ30gQSBzdHJpbmcgb2YgcmFuZG9tIGNoYXJhY3RlcnMuXHJcbiAqLyBmdW5jdGlvbiByYW5kb21TdHJpbmcoXHJcblx0bGVuZ3RoLFxyXG5cdGRvbnRNYXRjaCA9IFwiXCIsXHJcblx0Y2hhcnNldCA9IFwiYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXpBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWjAxMjM0NTY3ODlcIlxyXG4pIHtcclxuXHRpZiAodHlwZW9mIGxlbmd0aCAhPT0gXCJudW1iZXJcIiAmJiBsZW5ndGggPD0gMCkgcmV0dXJuO1xyXG5cdGlmICh0eXBlb2YgZG9udE1hdGNoICE9PSBcInN0cmluZ1wiICYmICFBcnJheS5pc0FycmF5KGRvbnRNYXRjaCkpIHJldHVybjtcclxuXHRpZiAodHlwZW9mIGNoYXJzZXQgIT09IFwic3RyaW5nXCIgJiYgIUFycmF5LmlzQXJyYXkoY2hhcnNldCkpIHJldHVybjtcclxuXHRsZXQgc3RyaW5nID0gXCJcIjtcclxuXHRkbyB7XHJcblx0XHR3aGlsZSAoc3RyaW5nLmxlbmd0aCA8IGxlbmd0aCkge1xyXG5cdFx0XHRzdHJpbmcgKz0gY2hhcnNldFtNYXRoLnJvdW5kKHJhbmRvbU51bWJlcigwLCBjaGFyc2V0Lmxlbmd0aCAtIDEpKV07XHJcblx0XHR9XHJcblx0XHRzdHJpbmcgPSBzdHJpbmcuc2xpY2UoMCwgbGVuZ3RoKTtcclxuXHR9IHdoaWxlIChcclxuXHRcdGRvbnRNYXRjaCAmJlxyXG5cdFx0KHN0cmluZyA9PT0gZG9udE1hdGNoIHx8IGRvbnRNYXRjaC5zb21lKChtKSA9PiBtID09PSBzdHJpbmcpKVxyXG5cdCk7XHJcblx0cmV0dXJuIHN0cmluZztcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCAoLi4uY2xhc3NlcykgPT4gY2xhc3Nlcy5maWx0ZXIocyA9PiB0eXBlb2YgcyA9PT0gJ3N0cmluZycpLmpvaW4oXCIgXCIpIiwiaW1wb3J0IHsgZmluZCB9IGZyb20gXCIuLi93ZWJwYWNrXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAgLyoqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWUgVGhlIGNsYXNzIG5hbWUgdG8gc2VhcmNoIGZvclxyXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnV0aWxpdGllc1xyXG4gKiBAcmV0dXJucyB7b2JqZWN0fSBUaGUgbW9kdWxlXHJcbiAqLyBmdW5jdGlvbiAoY2xhc3NOYW1lKSB7XHJcbiAgICAgcmV0dXJuIGZpbmQobSA9PiBcclxuICAgICAgICBPYmplY3QudmFsdWVzKG0pLnNvbWUodiA9PiBcclxuICAgICAgICAgICAgdHlwZW9mIHYgPT09IFwic3RyaW5nXCIgJiYgXHJcbiAgICAgICAgICAgIH52LnNwbGl0KFwiIFwiKS5pbmRleE9mKGNsYXNzTmFtZSlcclxuICAgICAgICApXHJcbiAgICApXHJcbn0iLCJpbXBvcnQgeyBSZWFjdCwgTW9kYWxBY3Rpb25zIH0gZnJvbSBcIi4uL3dlYnBhY2tcIjtcclxuaW1wb3J0IHsgTW9kYWwsIEhlYWRpbmcsIEJ1dHRvbiwgVGV4dCB9IGZyb20gXCIuLi9jb21wb25lbnRzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAodGl0bGUsIGRlc2NyaXB0aW9uLCBidXR0b25zKSA9PiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICBNb2RhbEFjdGlvbnMub3Blbk1vZGFsKChwcm9wcykgPT4gPE1vZGFsLk1vZGFsUm9vdCB7Li4ucHJvcHN9PlxyXG4gICAgICAgICAgICA8TW9kYWwuTW9kYWxIZWFkZXIgc2VwYXJhdG9yPXtmYWxzZX0+XHJcbiAgICAgICAgICAgICAgICA8SGVhZGluZyB2YXJpYW50PVwiaGVhZGluZy1sZy9tZWRpdW1cIj57dGl0bGV9PC9IZWFkaW5nPlxyXG4gICAgICAgICAgICA8L01vZGFsLk1vZGFsSGVhZGVyPlxyXG4gICAgICAgICAgICA8TW9kYWwuTW9kYWxDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgPFRleHQ+e2Rlc2NyaXB0aW9ufTwvVGV4dD5cclxuICAgICAgICAgICAgPC9Nb2RhbC5Nb2RhbENvbnRlbnQ+XHJcbiAgICAgICAgICAgIDxNb2RhbC5Nb2RhbEZvb3Rlcj5cclxuICAgICAgICAgICAgICAgIHtidXR0b25zLm1hcChidXR0b24gPT4gPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uLmFjdGlvbigpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLm9uQ2xvc2UoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGJ1dHRvbilcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPXtidXR0b24uY29sb3IgPz8gQnV0dG9uLkNvbG9ycy5CUkFORH1cclxuICAgICAgICAgICAgICAgICAgICBsb29rPXtidXR0b24ubG9vayA/PyBCdXR0b24uTG9va3MuRklMTEVEfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtidXR0b24udGV4dH1cclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPil9XHJcbiAgICAgICAgICAgIDwvTW9kYWwuTW9kYWxGb290ZXI+XHJcbiAgICAgICAgPC9Nb2RhbC5Nb2RhbFJvb3Q+KVxyXG4gICAgfSlcclxufSIsImltcG9ydCB7IGZpbmRCeVByb3BzLCBfIH0gZnJvbSBcIi4uLy4uL3dlYnBhY2tcIjtcclxuaW1wb3J0IHsgbWVzc2FnZUNhY2hlIH0gZnJvbSBcIi4uL21lc3NhZ2VzXCI7XHJcblxyXG5jb25zdCB7IGdldE1lc3NhZ2VzOiBkaXNjb3JkR2V0TWVzc2FnZXMgfSA9IC8qI19fUFVSRV9fKi9maW5kQnlQcm9wcyhcclxuXHRcImdldE1lc3NhZ2VzXCIsXHJcblx0XCJnZXRNZXNzYWdlXCJcclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldE1lc3NhZ2VzKGNoYW5uZWxJRCkge1xyXG5cdGNvbnN0IG1lc3NhZ2VzID0gXy5tZXJnZShcclxuXHRcdF8ua2V5QnkoZGlzY29yZEdldE1lc3NhZ2VzKGNoYW5uZWxJRCkuX2FycmF5LCBcImlkXCIpLFxyXG5cdFx0bWVzc2FnZUNhY2hlW2NoYW5uZWxJRF0gPz8ge31cclxuXHQpO1xyXG5cdHJldHVybiAobWVzc2FnZUNhY2hlW2NoYW5uZWxJRF0gPSBtZXNzYWdlcyk7XHJcbn1cclxuIiwiaW1wb3J0IHsgZmluZEJ5UHJvcHMsIF8gfSBmcm9tIFwiLi4vLi4vd2VicGFja1wiO1xyXG5pbXBvcnQgeyBtZXNzYWdlQ2FjaGUgfSBmcm9tIFwiLi4vbWVzc2FnZXNcIjtcclxuXHJcbmNvbnN0IHsgZ2V0TWVzc2FnZTogZGlzY29yZEdldE1lc3NhZ2UgfSA9IC8qI19fUFVSRV9fKi9maW5kQnlQcm9wcyhcclxuXHRcImdldE1lc3NhZ2VzXCIsXHJcblx0XCJnZXRNZXNzYWdlXCJcclxuKTtcclxuY29uc3QgeyBnZXRNZXNzYWdlQnlSZWZlcmVuY2UgfSA9IC8qI19fUFVSRV9fKi9maW5kQnlQcm9wcyhcImdldE1lc3NhZ2VCeVJlZmVyZW5jZVwiKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldE1lc3NhZ2UoY2hhbm5lbElELCBtZXNzYWdlSUQpIHtcclxuXHRyZXR1cm4gXy5zZXQoXHJcblx0XHRtZXNzYWdlQ2FjaGUsXHJcblx0XHRbY2hhbm5lbElELCBtZXNzYWdlSURdLFxyXG5cdFx0ZGlzY29yZEdldE1lc3NhZ2UoY2hhbm5lbElELCBtZXNzYWdlSUQpID8/XHJcblx0XHRcdGdldE1lc3NhZ2VCeVJlZmVyZW5jZSh7XHJcblx0XHRcdFx0bWVzc2FnZV9pZDogbWVzc2FnZUlELFxyXG5cdFx0XHRcdGNoYW5uZWxfaWQ6IGNoYW5uZWxJRCxcclxuXHRcdFx0fSkubWVzc2FnZSA/P1xyXG5cdFx0XHRtZXNzYWdlQ2FjaGVbY2hhbm5lbElEXT8uW21lc3NhZ2VJRF1cclxuXHQpW2NoYW5uZWxJRF1bbWVzc2FnZUlEXTtcclxufVxyXG4iLCJpbXBvcnQgeyBmaW5kQnlQcm9wcywgZmluZEJ5UHJvdG90eXBlLCBfIH0gZnJvbSBcIi4uLy4uL3dlYnBhY2tcIjtcclxuaW1wb3J0IHsgbWVzc2FnZUNhY2hlLCBnZXRNZXNzYWdlIH0gZnJvbSBcIi4uL21lc3NhZ2VzXCI7XHJcblxyXG5jb25zdCB7IEVuZHBvaW50cyB9ID0gLyojX19QVVJFX18qL2ZpbmRCeVByb3BzKFwiRW5kcG9pbnRzXCIpO1xyXG5jb25zdCBVc2VyID0gLyojX19QVVJFX18qL2ZpbmRCeVByb3RvdHlwZShcInRhZ1wiKTtcclxuY29uc3QgVGltZXN0YW1wID0gLyojX19QVVJFX18qL2ZpbmRCeVByb3RvdHlwZShcInRvRGF0ZVwiLCBcIm1vbnRoXCIpO1xyXG5jb25zdCBNZXNzYWdlID0gLyojX19QVVJFX18qL2ZpbmRCeVByb3RvdHlwZShcImlzRWRpdGVkXCIpO1xyXG5jb25zdCBEaXNjb3JkQVBJID0gLyojX19QVVJFX18qL2ZpbmRCeVByb3BzKFwiZ2V0QVBJQmFzZVVSTFwiKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZldGNoTWVzc2FnZShjaGFubmVsSUQsIG1lc3NhZ2VJRCkge1xyXG5cdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblx0XHRjb25zdCBtZXNzYWdlID0gZ2V0TWVzc2FnZShjaGFubmVsSUQsIG1lc3NhZ2VJRCk7XHJcblxyXG5cdFx0aWYgKG1lc3NhZ2UpIHJldHVybiByZXNvbHZlKG1lc3NhZ2UpO1xyXG5cclxuXHRcdERpc2NvcmRBUEkuZ2V0KHtcclxuXHRcdFx0dXJsOiBFbmRwb2ludHMuTUVTU0FHRVMoY2hhbm5lbElEKSxcclxuXHRcdFx0cXVlcnk6IHtcclxuXHRcdFx0XHRsaW1pdDogMTAwLFxyXG5cdFx0XHRcdGFyb3VuZDogbWVzc2FnZUlELFxyXG5cdFx0XHR9LFxyXG5cdFx0fSlcclxuXHRcdFx0LnRoZW4oKHJlcykgPT4ge1xyXG5cdFx0XHRcdGlmIChyZXMuc3RhdHVzICE9IDIwMCkgcmV0dXJuIHJlamVjdCgpO1xyXG5cdFx0XHRcdGZvciAobGV0IG0gb2YgcmVzLmJvZHkpIHtcclxuXHRcdFx0XHRcdG0uYXV0aG9yID0gbmV3IFVzZXIobS5hdXRob3IpO1xyXG5cdFx0XHRcdFx0bS50aW1lc3RhbXAgPSBuZXcgVGltZXN0YW1wKG0udGltZXN0YW1wKTtcclxuXHRcdFx0XHRcdG0gPSBuZXcgTWVzc2FnZShtKTtcclxuXHRcdFx0XHRcdF8uc2V0KG1lc3NhZ2VDYWNoZSwgW20uY2hhbm5lbF9pZCwgbS5pZF0sIG0pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRjb25zdCBmb3VuZE1lc3NhZ2UgPSBtZXNzYWdlQ2FjaGVbY2hhbm5lbElEXT8uW21lc3NhZ2VJRF07XHJcblx0XHRcdFx0aWYgKGZvdW5kTWVzc2FnZSkgcmVzb2x2ZShmb3VuZE1lc3NhZ2UpO1xyXG5cdFx0XHRcdHJlamVjdCgpO1xyXG5cdFx0XHR9KVxyXG5cdFx0XHQuY2F0Y2goKHJlcykgPT4ge1xyXG5cdFx0XHRcdC8vIGxvZ2dlci5lcnJvcihyZXMpO1xyXG5cdFx0XHRcdGlmIChyZXMuc3RhdHVzICE9IDQwMykgcmV0dXJuIHJlamVjdCgpO1xyXG5cdFx0XHR9KTtcclxuXHR9KTtcclxufVxyXG4iLCJpbXBvcnQgeyBmaW5kQnlQcm9wcyB9IGZyb20gXCIuLi8uLi93ZWJwYWNrXCI7XHJcbmltcG9ydCB7IHJlcmVuZGVyTWVzc2FnZSB9IGZyb20gXCIuLi9tZXNzYWdlc1wiO1xyXG5cclxuY29uc3QgeyBnZXRNZXNzYWdlczogZGlzY29yZEdldE1lc3NhZ2VzIH0gPSAvKiNfX1BVUkVfXyovZmluZEJ5UHJvcHMoXHJcblx0XCJnZXRNZXNzYWdlc1wiLFxyXG5cdFwiZ2V0TWVzc2FnZVwiXHJcbik7XHJcbmNvbnN0IHsgZ2V0Q2hhbm5lbElkIH0gPSAvKiNfX1BVUkVfXyovZmluZEJ5UHJvcHMoXCJnZXRDaGFubmVsSWRcIik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXJlbmRlckFsbE1lc3NhZ2VzKHByb3BzID0ge30pIHtcclxuXHRjb25zdCBtZXNzYWdlcyA9IGRpc2NvcmRHZXRNZXNzYWdlcyhnZXRDaGFubmVsSWQoKSkuX2FycmF5O1xyXG5cdGZvciAoY29uc3QgbWVzc2FnZSBvZiBtZXNzYWdlcykge1xyXG5cdFx0cmVyZW5kZXJNZXNzYWdlKG1lc3NhZ2UsIHByb3BzKTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgZmluZEJ5UHJvcHMgfSBmcm9tIFwiLi4vLi4vd2VicGFja1wiO1xyXG5pbXBvcnQgeyB1cGRhdGVNZXNzYWdlIH0gZnJvbSBcIi4uL21lc3NhZ2VzXCI7XHJcblxyXG5jb25zdCB7IGdldE1lc3NhZ2U6IGRpc2NvcmRHZXRNZXNzYWdlIH0gPSAvKiNfX1BVUkVfXyovZmluZEJ5UHJvcHMoXHJcblx0XCJnZXRNZXNzYWdlc1wiLFxyXG5cdFwiZ2V0TWVzc2FnZVwiXHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXJlbmRlck1lc3NhZ2UoaWRPck1lc3NhZ2UsIHByb3BzID0ge30pIHtcclxuXHRsZXQgbWVzc2FnZSA9XHJcblx0XHR0eXBlb2YgaWRPck1lc3NhZ2UgPT09IFwic3RyaW5nXCJcclxuXHRcdFx0PyBkaXNjb3JkR2V0TWVzc2FnZShpZE9yTWVzc2FnZSlcclxuXHRcdFx0OiBpZE9yTWVzc2FnZTtcclxuXHRpZiAoIW1lc3NhZ2UpIHJldHVybjtcclxuXHRtZXNzYWdlID0ge1xyXG5cdFx0aWQ6IG1lc3NhZ2UuaWQsXHJcblx0XHRjaGFubmVsX2lkOiBtZXNzYWdlLmNoYW5uZWxfaWQsXHJcblx0XHRjb250ZW50OiBtZXNzYWdlLmNvbnRlbnQsXHJcblx0fTtcclxuXHR1cGRhdGVNZXNzYWdlKG1lc3NhZ2UsIHByb3BzKTtcclxufVxyXG4iLCJpbXBvcnQgeyBmaW5kQnlQcm9wcyB9IGZyb20gXCIuLi8uLi93ZWJwYWNrXCI7XHJcblxyXG5jb25zdCBGbHV4RGlzcGF0Y2hlciA9IC8qI19fUFVSRV9fKi9maW5kQnlQcm9wcyhcImRpc3BhdGNoXCIsIFwiZGlydHlEaXNwYXRjaFwiKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVwZGF0ZU1lc3NhZ2UobWVzc2FnZSwgcHJvcHMgPSB7fSkge1xyXG5cdEZsdXhEaXNwYXRjaGVyLmRpcnR5RGlzcGF0Y2goe1xyXG5cdFx0Li4ucHJvcHMsXHJcblx0XHR0eXBlOiBcIk1FU1NBR0VfVVBEQVRFXCIsXHJcblx0XHRtZXNzYWdlLFxyXG5cdH0pO1xyXG59XHJcbiIsImV4cG9ydCBsZXQgbWVzc2FnZUNhY2hlID0ge307XHJcblxyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGdldE1lc3NhZ2VzIH0gZnJvbSBcIi4vZ2V0TWVzc2FnZXNcIjtcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBnZXRNZXNzYWdlIH0gZnJvbSBcIi4vZ2V0TWVzc2FnZVwiO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGZldGNoTWVzc2FnZSB9IGZyb20gXCIuL2ZldGNoTWVzc2FnZVwiO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIHJlcmVuZGVyQWxsTWVzc2FnZXMgfSBmcm9tIFwiLi9yZXJlbmRlckFsbE1lc3NhZ2VzXCI7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgcmVyZW5kZXJNZXNzYWdlIH0gZnJvbSBcIi4vcmVyZW5kZXJNZXNzYWdlXCI7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdXBkYXRlTWVzc2FnZSB9IGZyb20gXCIuL3VwZGF0ZU1lc3NhZ2VcIjtcclxuIiwiaW1wb3J0IHsgUmVhY3QsIE1vZGFsQWN0aW9ucyB9IGZyb20gXCIuLi93ZWJwYWNrXCI7XHJcbmltcG9ydCAqIGFzIHNldHRpbmdzIGZyb20gXCIuLi9zZXR0aW5nc1wiO1xyXG5pbXBvcnQgeyBNYXJrZG93biwgTW9kYWwsIEZsZXgsIEhlYWRpbmcsIFRleHQgfSBmcm9tIFwiLi4vY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgeyBDaGFuZ2Vsb2csIENoYW5nZWxvZ01vZGFsIH0gZnJvbSBcIi4uL2NsYXNzZXNcIjtcclxuaW1wb3J0ICogYXMgY29uZmlnIGZyb20gXCJAaXR0YWkvY29uZmlnXCJcclxuaW1wb3J0IHsgam9pbkNsYXNzZXMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzXCJcclxuZXhwb3J0IGNvbnN0IHJlbmRlckNoYW5nZWxvZ0NvbnRlbnQgPSAoY29udGVudCkgPT4ge1xyXG4gICAgcmV0dXJuIDw+XHJcbiAgICAgICAge09iamVjdC5lbnRyaWVzKGNvbnRlbnQpLm1hcCgoW3RpdGxlLCB7IHR5cGUsIGl0ZW1zIH1dKSA9PiA8ZGl2IGNsYXNzTmFtZT17Q2hhbmdlbG9nTW9kYWwuY29udGVudH0+XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e2pvaW5DbGFzc2VzKENoYW5nZWxvZ1t0eXBlXSwgQ2hhbmdlbG9nLm1hcmdpblRvcCl9Pnt0aXRsZX08L2gxPlxyXG4gICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICB7aXRlbXMubWFwKGl0ZW0gPT4gPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNYXJrZG93bj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW19XHJcbiAgICAgICAgICAgICAgICAgICAgPC9NYXJrZG93bj5cclxuICAgICAgICAgICAgICAgIDwvbGk+KX1cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj4pfVxyXG4gICAgPC8+XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBvcGVuQ2hhbmdlbG9nTW9kYWwgPSAoY2hhbmdlbG9nID0gc2V0dGluZ3NDaGFuZ2Vsb2cpID0+IHtcclxuICAgIGNvbnN0IHsgY2hhbmdlbG9nOiBzZXR0aW5nc0NoYW5nZWxvZywgbWFuaWZlc3QgfSA9IGNvbmZpZztcclxuICAgIE1vZGFsQWN0aW9ucy5vcGVuTW9kYWwoKHByb3BzKSA9PiA8TW9kYWwuTW9kYWxSb290IHsuLi5wcm9wc30gc2l6ZT17TW9kYWwuTW9kYWxTaXplLlNNQUxMfSBjbGFzc05hbWU9e0NoYW5nZWxvZ01vZGFsLm1vZGFsfT5cclxuICAgICAgICA8TW9kYWwuTW9kYWxIZWFkZXIgc2VwYXJhdG9yPXtmYWxzZX0+XHJcbiAgICAgICAgICAgIDxGbGV4PlxyXG4gICAgICAgICAgICAgICAgPEZsZXguQ2hpbGQgZ3Jvdz17MX0gc2hyaW5rPXsxfT5cclxuICAgICAgICAgICAgICAgICAgICA8SGVhZGluZyB2YXJpYW50PVwiaGVhZGluZy1sZy9tZWRpdW1cIj57bWFuaWZlc3QubmFtZX0gLSB7bWFuaWZlc3QudmVyc2lvbn08L0hlYWRpbmc+XHJcbiAgICAgICAgICAgICAgICAgICAge2NoYW5nZWxvZy5kYXRlICYmIDxUZXh0IGNsYXNzTmFtZT17Q2hhbmdlbG9nLmRhdGV9IHNpemU9e1RleHQuU2l6ZXMuU0laRV8xMn0+e2NoYW5nZWxvZy5kYXRlfTwvVGV4dD59XHJcbiAgICAgICAgICAgICAgICA8L0ZsZXguQ2hpbGQ+XHJcbiAgICAgICAgICAgICAgICA8TW9kYWwuTW9kYWxDbG9zZUJ1dHRvbiBvbkNsaWNrPXtwcm9wcy5vbkNsb3NlfS8+XHJcbiAgICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICA8L01vZGFsLk1vZGFsSGVhZGVyPlxyXG4gICAgICAgIDxNb2RhbC5Nb2RhbENvbnRlbnQ+XHJcbiAgICAgICAgICAgIHtjaGFuZ2Vsb2cuaW1hZ2UgJiYgPGltZyBjbGFzc05hbWU9e0NoYW5nZWxvZy52aWRlb30gc3JjPXtjaGFuZ2Vsb2cuaW1hZ2V9IHdpZHRoPVwiNDUxXCIgLz59XHJcbiAgICAgICAgICAgIHtyZW5kZXJDaGFuZ2Vsb2dDb250ZW50KGNoYW5nZWxvZy5jb250ZW50cyl9XHJcbiAgICAgICAgPC9Nb2RhbC5Nb2RhbENvbnRlbnQ+XHJcbiAgICA8L01vZGFsLk1vZGFsUm9vdD4pXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBoYXNTZWVuQ2hhbmdlbG9nID0gKCkgPT4gc2V0dGluZ3MuZ2V0KGBfX2l0dGFpX2NoYW5nZWxvZ18ke21hbmlmZXN0LnZlcnNpb259YClcclxuZXhwb3J0IGNvbnN0IHNldFNlZW5DaGFuZ2Vsb2cgPSAoc2V0KSA9PiBzZXR0aW5ncy5zZXQoYF9faXR0YWlfY2hhbmdlbG9nXyR7bWFuaWZlc3QudmVyc2lvbn1gLCBzZXQpIiwiaW1wb3J0IHsgbG9nLCBkZWJ1Zywgd2FybiwgZXJyb3IgfSBmcm9tIFwiLi4vbG9nZ2VyXCI7XHJcbmltcG9ydCAqIGFzIGNvbmZpZyBmcm9tIFwiQGl0dGFpL2NvbmZpZ1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgLyoqXHJcbiAqIFRoZSBwbHVnaW4gY2xhc3MgZm9yIHRoZSBydW5uaW5nIGNsaWVudCBtb2QuXHJcbiAqIEBuYW1lIFBsdWdpblxyXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmVudGl0aWVzXHJcbiAqLyBjbGFzcyBQbHVnaW4ge1xyXG5cclxuXHRmcmllbmRseU5hbWUgPSBjb25maWcubWFuaWZlc3QubmFtZVxyXG5cclxuXHRzdGFydCgpIHt9XHJcblx0c3RvcCgpIHt9XHJcblxyXG5cdHNldFNldHRpbmdzUGFuZWwoY29tcG9uZW50KSB7XHJcblx0XHR0aGlzLl9faXR0YWlJbnRlcm5hbFBsdWdpbi5zZXRTZXR0aW5nc1BhbmVsKGNvbXBvbmVudCk7XHJcblx0fVxyXG5cclxuXHRyZW1vdmVTZXR0aW5nc1BhbmVsKCkge1xyXG5cdFx0dGhpcy5fX2l0dGFpSW50ZXJuYWxQbHVnaW4ucmVtb3ZlU2V0dGluZ3NQYW5lbCgpO1xyXG5cdH1cclxuXHJcblx0bG9nKC4uLmFyZ3MpIHtcclxuXHRcdGxvZyguLi5hcmdzKTtcclxuXHR9XHJcblx0ZGVidWcoLi4uYXJncykge1xyXG5cdFx0ZGVidWcoLi4uYXJncyk7XHJcblx0fVxyXG5cdHdhcm4oLi4uYXJncykge1xyXG5cdFx0d2FybiguLi5hcmdzKTtcclxuXHR9XHJcblx0ZXJyb3IoLi4uYXJncykge1xyXG5cdFx0ZXJyb3IoLi4uYXJncyk7XHJcblx0fVxyXG59IiwiaW1wb3J0IHsgcGF0Y2ggfSBmcm9tIFwiLi4vcGF0Y2hlclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgLyoqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBwYXRjaC4gRm9yIGRlYnVnZ2luZy5cclxuICogQHBhcmFtIHthbnl9IG9iamVjdCBUaGUgb2JqZWN0IHRoYXQgdGhlIGZ1bmN0aW9uIGlzIGluLlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gZnVuY3Rpb25OYW1lIFRoZSBuYW1lIG9mIHRoZSBmdW5jdGlvbiB0byBwYXRjaC5cclxuICogQHBhcmFtIHtmdW5jdGlvbn0gcGF0Y2hGdW5jdGlvbiBUaGUgY29kZSB0byBwYXRjaCBpbnRvIHRoZSBmdW5jdGlvbi5cclxuICogQHJldHVybnMge29iamVjdH0ge0BsaW5rIG1vZHVsZTpwYXRjaGVyLnBhdGNofnBhdGNoRGF0YX1cclxuICogQG1lbWJlcm9mIG1vZHVsZTpwYXRjaGVyXHJcbiAqIEB0dXRvcmlhbCBwYXRjaGluZ0JlZm9yZVxyXG4gKi8gZnVuY3Rpb24gYmVmb3JlKG5hbWUsIG9iamVjdCwgZnVuY3Rpb25OYW1lLCBwYXRjaEZ1bmN0aW9uKSB7XHJcblx0cmV0dXJuIHBhdGNoKG5hbWUsIG9iamVjdCwgZnVuY3Rpb25OYW1lLCBcImJlZm9yZVwiLCBwYXRjaEZ1bmN0aW9uKTtcclxufVxyXG4iLCJpbXBvcnQgeyBwYXRjaCB9IGZyb20gXCIuLi9wYXRjaGVyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAvKipcclxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgVGhlIG5hbWUgb2YgdGhlIHBhdGNoLiBGb3IgZGVidWdnaW5nLlxyXG4gKiBAcGFyYW0ge2FueX0gb2JqZWN0IFRoZSBvYmplY3QgdGhhdCB0aGUgZnVuY3Rpb24gaXMgaW4uXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBmdW5jdGlvbk5hbWUgVGhlIG5hbWUgb2YgdGhlIGZ1bmN0aW9uIHRvIHBhdGNoLlxyXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBwYXRjaEZ1bmN0aW9uIFRoZSBjb2RlIHRvIHBhdGNoIGludG8gdGhlIGZ1bmN0aW9uLlxyXG4gKiBAcmV0dXJucyB7T2JqZWN0fSB7QGxpbmsgbW9kdWxlOnBhdGNoZXIucGF0Y2h+cGF0Y2hEYXRhfVxyXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnBhdGNoZXJcclxuICogQHR1dG9yaWFsIHBhdGNoaW5nSW5zdGVhZFxyXG4gKi8gZnVuY3Rpb24gaW5zdGVhZChuYW1lLCBvYmplY3QsIGZ1bmN0aW9uTmFtZSwgcGF0Y2hGdW5jdGlvbikge1xyXG5cdHJldHVybiBwYXRjaChuYW1lLCBvYmplY3QsIGZ1bmN0aW9uTmFtZSwgXCJpbnN0ZWFkXCIsIHBhdGNoRnVuY3Rpb24pO1xyXG59XHJcbiIsImltcG9ydCB7IHBhdGNoIH0gZnJvbSBcIi4uL3BhdGNoZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IC8qKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBUaGUgbmFtZSBvZiB0aGUgcGF0Y2guIEZvciBkZWJ1Z2dpbmcuXHJcbiAqIEBwYXJhbSB7YW55fSBvYmplY3QgVGhlIG9iamVjdCB0aGF0IHRoZSBmdW5jdGlvbiBpcyBpbi5cclxuICogQHBhcmFtIHtzdHJpbmd9IGZ1bmN0aW9uTmFtZSBUaGUgbmFtZSBvZiB0aGUgZnVuY3Rpb24gdG8gcGF0Y2guXHJcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IHBhdGNoRnVuY3Rpb24gVGhlIGNvZGUgdG8gcGF0Y2ggaW50byB0aGUgZnVuY3Rpb24uXHJcbiAqIEByZXR1cm5zIHtvYmplY3R9IHtAbGluayBtb2R1bGU6cGF0Y2hlci5wYXRjaH5wYXRjaERhdGF9XHJcbiAqIEBtZW1iZXJvZiBtb2R1bGU6cGF0Y2hlclxyXG4gKiBAdHV0b3JpYWwgcGF0Y2hpbmdBZnRlclxyXG4gKi8gZnVuY3Rpb24gYWZ0ZXIobmFtZSwgb2JqZWN0LCBmdW5jdGlvbk5hbWUsIHBhdGNoRnVuY3Rpb24pIHtcclxuXHRyZXR1cm4gcGF0Y2gobmFtZSwgb2JqZWN0LCBmdW5jdGlvbk5hbWUsIFwiYWZ0ZXJcIiwgcGF0Y2hGdW5jdGlvbik7XHJcbn1cclxuIiwiaW1wb3J0IHsgcGF0Y2hlcyB9IGZyb20gXCIuLi9wYXRjaGVyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAvKipcclxuICogVW5wYXRjaGVzIGFsbCBvZiB0aGUgcGF0Y2hlcyBzcGVjaWZpZWQsIG9yIGFsbCBvZiB0aGVtIGlmIG5vbmUgYXJlIHNwZWNpZmllZC5cclxuICogQG1lbWJlcm9mIG1vZHVsZTpwYXRjaGVyXHJcbiAqIEBwYXJhbSB7c3RyaW5nW119IFt1bnBhdGNoZXM9e0BsaW5rIG1vZHVsZTpwYXRjaGVyLnBhdGNoZXN9XSBBbiBhcnJheSBwYXRjaCBuYW1lcy5cclxuICovIGZ1bmN0aW9uIHVucGF0Y2hBbGwodW5wYXRjaGVzKSB7XHJcblx0aWYgKCFBcnJheS5pc0FycmF5KHVucGF0Y2hlcykpIHVucGF0Y2hlcyA9IHBhdGNoZXM7XHJcblx0Zm9yIChjb25zdCBvYmplY3Qgb2YgT2JqZWN0LnZhbHVlcyh1bnBhdGNoZXMpKSB7XHJcblx0XHRmb3IgKGNvbnN0IGZ1bmN0IG9mIE9iamVjdC52YWx1ZXMob2JqZWN0KSkge1xyXG5cdFx0XHRmb3IgKGNvbnN0IHBhdGNoIG9mIGZ1bmN0LnBhdGNoZXMpIHtcclxuXHRcdFx0XHRwYXRjaC51bnBhdGNoKCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0ICogYXMgbG9nZ2VyIGZyb20gXCIuLi9sb2dnZXJcIjtcclxuaW1wb3J0IHsgcmFuZG9tU3RyaW5nIH0gZnJvbSBcIi4uL3V0aWxpdGllc1wiO1xyXG5pbXBvcnQgeyBwYXRjaGVzIH0gZnJvbSBcIi4uL3BhdGNoZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IC8qKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBUaGUgbmFtZSBvZiB0aGUgcGF0Y2guIEZvciBkZWJ1Z2dpbmcuXHJcbiAqIEBwYXJhbSB7YW55fSBvYmplY3QgVGhlIG9iamVjdCB0aGF0IHRoZSBmdW5jdGlvbiBpcyBpbi5cclxuICogQHBhcmFtIHtzdHJpbmd9IGZ1bmN0aW9uTmFtZSBUaGUgbmFtZSBvZiB0aGUgZnVuY3Rpb24gdG8gcGF0Y2guXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIFRoZSB0eXBlIG9mIHBhdGNoIHRvIGFwcGx5LiBgYmVmb3JlYCwgYGluc3RlYWRgLCBgYWZ0ZXJgLlxyXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBwYXRjaEZ1bmN0aW9uIFRoZSBjb2RlIHRvIHBhdGNoIGludG8gdGhlIGZ1bmN0aW9uLlxyXG4gKiBAcmV0dXJucyB7b2JqZWN0fSB7QGxpbmsgbW9kdWxlOnV0aWxzL3BhdGNoZXIucGF0Y2h+cGF0Y2hEYXRhfVxyXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnBhdGNoZXJcclxuICogQHR1dG9yaWFsIHBhdGNoaW5nXHJcbiAqLyBmdW5jdGlvbiBwYXRjaChuYW1lLCBvYmplY3QsIGZ1bmN0aW9uTmFtZSwgdHlwZSwgcGF0Y2hGdW5jdGlvbikge1xyXG5cdGNvbnN0IGlkID0gb2JqZWN0Ll9faXR0YWlfXyA/PyByYW5kb21TdHJpbmcoMjUsIE9iamVjdC5rZXlzKHBhdGNoZXMpKTtcclxuXHRvYmplY3QuX19pdHRhaV9fID0gb2JqZWN0Ll9faXR0YWlfXyA/PyBpZDtcclxuXHRpZiAoIXBhdGNoZXNbaWRdKSBwYXRjaGVzW2lkXSA9IHt9O1xyXG5cclxuXHQvKipcclxuXHQgKiBAbWVtYmVyb2YgbW9kdWxlOnBhdGNoZXJcclxuXHQgKiBAcHJvcCB7c3RyaW5nfSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBmdW5jdGlvbiBiZWluZyBwYXRjaGVkLlxyXG5cdCAqIEBwcm9wIHtzdHJpbmd9IHR5cGUgVGhlIHR5cGUgb2YgdGhlIHBhdGNoLlxyXG5cdCAqIEBwcm9wIHtmdW5jdGlvbn0gcGF0Y2hGdW5jdGlvbiBUaGUgb3JpZ2luYWwgZnVuY3Rpb24uXHJcblx0ICogQHByb3Age2Z1bmN0aW9ufSB1bnBhdGNoIFRoZSBmdW5jdGlvbiB0byBjYWxsIHRvIHVucGF0Y2guXHJcblx0ICovXHJcblx0Y29uc3QgcGF0Y2hEYXRhID0ge1xyXG5cdFx0bmFtZSxcclxuXHRcdHR5cGUsXHJcblx0XHRwYXRjaEZ1bmN0aW9uLFxyXG5cdFx0dW5wYXRjaDogZnVuY3Rpb24gKCkge1xyXG5cdFx0XHR0cnkge1xyXG5cdFx0XHRcdGNvbnN0IHBhdGNoSW5kZXggPSBwYXRjaGVzW2lkXVtmdW5jdGlvbk5hbWVdLnBhdGNoZXMuaW5kZXhPZih0aGlzKTtcclxuXHRcdFx0XHRpZiAocGF0Y2hJbmRleCA9PT0gLTEpXHJcblx0XHRcdFx0XHR0aHJvdyBcIkNvdWxkbid0IGZpbmQgdGhlIHBhdGNoLiBUaGlzIHByb2JhYmx5IGhhcHBlbmVkIGJlY2F1c2UgdGhlIG9iamVjdCB3YXMgdGFtcGVyZWQgd2l0aC4gRG9uJ3QgZG8gdGhhdC5cIjtcclxuXHRcdFx0XHQvLyBEZWxldGUgcGF0Y2guXHJcblx0XHRcdFx0cGF0Y2hlc1tpZF1bZnVuY3Rpb25OYW1lXS5wYXRjaGVzLnNwbGljZShwYXRjaEluZGV4LCAxKTtcclxuXHRcdFx0XHQvLyBDbGVhbiB1cCB0aGUgb2JqZWN0IGlmIHRoZXJlIGFyZSBubyBwYXRjaGVzIGxlZnQuXHJcblx0XHRcdFx0aWYgKHBhdGNoZXNbaWRdW2Z1bmN0aW9uTmFtZV0ucGF0Y2hlcy5sZW5ndGggPT09IDApIHtcclxuXHRcdFx0XHRcdC8vIFJlc3RvcmUgb3JpZ2luYWwgZnVuY3Rpb24uXHJcblx0XHRcdFx0XHRvYmplY3RbZnVuY3Rpb25OYW1lXSA9IHBhdGNoZXNbaWRdW2Z1bmN0aW9uTmFtZV0ub3JpZ2luYWw7XHJcblx0XHRcdFx0XHRkZWxldGUgcGF0Y2hlc1tpZF1bZnVuY3Rpb25OYW1lXTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKCFPYmplY3Qua2V5cyhwYXRjaGVzW2lkXSkubGVuZ3RoKSB7XHJcblx0XHRcdFx0XHRkZWxldGUgcGF0Y2hlc1tpZF07XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGNhdGNoIChlKSB7XHJcblx0XHRcdFx0bG9nZ2VyLmVycm9yKGBGYWlsZWQgdG8gdW5wYXRjaCAke25hbWV9LmAsIGUpO1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdH07XHJcblxyXG5cdGlmICghcGF0Y2hlc1tpZF1bZnVuY3Rpb25OYW1lXSkge1xyXG5cdFx0cGF0Y2hlc1tpZF1bZnVuY3Rpb25OYW1lXSA9IHtcclxuXHRcdFx0b3JpZ2luYWw6IG9iamVjdFtmdW5jdGlvbk5hbWVdLFxyXG5cdFx0XHRwYXRjaGVzOiBbXSxcclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3QgcHJvcHMgPSB7IC4uLm9iamVjdFtmdW5jdGlvbk5hbWVdIH07XHJcblxyXG5cdFx0b2JqZWN0W2Z1bmN0aW9uTmFtZV0gPSBmdW5jdGlvbiAoLi4uYXJncykge1xyXG5cdFx0XHRjb25zdCBmdW5jdGlvbkRhdGEgPSBwYXRjaGVzW2lkXVtmdW5jdGlvbk5hbWVdO1xyXG5cdFx0XHRjb25zdCBiZWZvcmVzID0gZnVuY3Rpb25EYXRhLnBhdGNoZXMuZmlsdGVyKChwKSA9PiBwLnR5cGUgPT09IFwiYmVmb3JlXCIpO1xyXG5cdFx0XHRjb25zdCBpbnN0ZWFkcyA9IGZ1bmN0aW9uRGF0YS5wYXRjaGVzLmZpbHRlcigocCkgPT4gcC50eXBlID09PSBcImluc3RlYWRcIik7XHJcblx0XHRcdGNvbnN0IGFmdGVycyA9IGZ1bmN0aW9uRGF0YS5wYXRjaGVzLmZpbHRlcigocCkgPT4gcC50eXBlID09PSBcImFmdGVyXCIpO1xyXG5cclxuXHRcdFx0Ly8gQmVmb3JlIHBhdGNoZXMuXHJcblx0XHRcdGZvciAoY29uc3QgYmVmb3JlIG9mIGJlZm9yZXMpIHtcclxuXHRcdFx0XHR0cnkge1xyXG5cdFx0XHRcdFx0Y29uc3QgY2FsbGJhY2sgPSBiZWZvcmUucGF0Y2hGdW5jdGlvbihhcmdzLCB0aGlzKTtcclxuXHRcdFx0XHRcdGlmIChjYWxsYmFjaykgYXJncyA9IGNhbGxiYWNrXHJcblx0XHRcdFx0fSBjYXRjaCAoZSkge1xyXG5cdFx0XHRcdFx0bG9nZ2VyLmVycm9yKGBFcnJvciBydW5uaW5nIGJlZm9yZSBwYXRjaCAke25hbWV9LmAsIGUpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gSW5zdGVhZCBwYXRjaGVzLlxyXG5cdFx0XHRsZXQgcmVzID0ge307XHJcblx0XHRcdGxldCByYW5PbmNlID0gZmFsc2U7XHJcblx0XHRcdGlmIChpbnN0ZWFkcy5sZW5ndGggPT09IDApIHtcclxuXHRcdFx0XHQocmVzID0gZnVuY3Rpb25EYXRhLm9yaWdpbmFsLmNhbGwodGhpcywgLi4uYXJncykpLCAocmFuT25jZSA9IHRydWUpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdC8vIEJhZCwgZml4IGxhdGVyLlxyXG5cdFx0XHRcdGZvciAoY29uc3QgaW5zdGVhZCBvZiBpbnN0ZWFkcykge1xyXG5cdFx0XHRcdFx0Ly8gRG8gdHJhc2ggbWVyZ2Ugd2l0aCBMb2Rhc2guXHJcblx0XHRcdFx0XHR0cnkge1xyXG5cdFx0XHRcdFx0XHQocmVzID0gZ2xvYmFsVGhpcy5fLm1lcmdlKFxyXG5cdFx0XHRcdFx0XHRcdHJlcyxcclxuXHRcdFx0XHRcdFx0XHRpbnN0ZWFkLnBhdGNoRnVuY3Rpb24oYXJncywgdGhpcykgPz8ge31cclxuXHRcdFx0XHRcdFx0KSksXHJcblx0XHRcdFx0XHRcdFx0KHJhbk9uY2UgPSB0cnVlKTtcclxuXHRcdFx0XHRcdH0gY2F0Y2ggKGUpIHtcclxuXHRcdFx0XHRcdFx0bG9nZ2VyLmVycm9yKGBFcnJvciBydW5uaW5nIGluc3RlYWQgcGF0Y2ggJHtuYW1lfS5gLCBlKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKCFyYW5PbmNlKSB7XHJcblx0XHRcdFx0cmVzID0gZnVuY3Rpb25EYXRhLm9yaWdpbmFsLmNhbGwodGhpcywgLi4uYXJncyk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIEFmdGVyIHBhdGNoZXMuXHJcblx0XHRcdGZvciAoY29uc3QgYWZ0ZXIgb2YgYWZ0ZXJzKSB7XHJcblx0XHRcdFx0dHJ5IHtcclxuXHRcdFx0XHRcdGNvbnN0IGNhbGxiYWNrID0gYWZ0ZXIucGF0Y2hGdW5jdGlvbihhcmdzLCByZXMsIHRoaXMpXHJcblx0XHRcdFx0XHRpZiAoY2FsbGJhY2spIHJlcyA9IGNhbGxiYWNrXHJcblx0XHRcdFx0fSBjYXRjaCAoZSkge1xyXG5cdFx0XHRcdFx0bG9nZ2VyLmVycm9yKGBFcnJvciBydW5uaW5nIGFmdGVyIHBhdGNoICR7bmFtZX0uYCwgZSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZXR1cm4gcmVzO1xyXG5cdFx0fTtcclxuXHRcdE9iamVjdC5hc3NpZ24ob2JqZWN0W2Z1bmN0aW9uTmFtZV0sIHByb3BzKTtcclxuXHRcdG9iamVjdFtmdW5jdGlvbk5hbWVdLnRvU3RyaW5nID0gKCkgPT5cclxuXHRcdFx0cGF0Y2hlc1tpZF1bZnVuY3Rpb25OYW1lXS5vcmlnaW5hbC50b1N0cmluZygpO1xyXG5cdH1cclxuXHRwYXRjaGVzW2lkXVtmdW5jdGlvbk5hbWVdLnBhdGNoZXMucHVzaChwYXRjaERhdGEpO1xyXG5cclxuXHRyZXR1cm4gcGF0Y2hEYXRhO1xyXG59XHJcbiIsIi8qKlxyXG4gKiBAbW9kdWxlIHBhdGNoZXJcclxuICovXHJcblxyXG4vKipcclxuICogQSBsaXN0IG9mIHRoZSBjdXJyZW50bHkgcGF0Y2hlZCBjb21wb25lbnRzLlxyXG4gKi9cclxuZXhwb3J0IGxldCBwYXRjaGVzID0gW107XHJcblxyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGJlZm9yZSB9IGZyb20gXCIuL2JlZm9yZVwiO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGluc3RlYWQgfSBmcm9tIFwiLi9pbnN0ZWFkXCI7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgYWZ0ZXIgfSBmcm9tIFwiLi9hZnRlclwiO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIHVucGF0Y2hBbGwgfSBmcm9tIFwiLi91bnBhdGNoQWxsXCI7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgcGF0Y2ggfSBmcm9tIFwiLi9wYXRjaFwiO1xyXG4iLCJpbXBvcnQgeyBmaW5kQnlQcm9wcyB9IGZyb20gXCIuLi93ZWJwYWNrXCI7XHJcbmltcG9ydCB7IHJhbmRvbVN0cmluZyB9IGZyb20gXCIuLi91dGlsaXRpZXNcIjtcclxuXHJcbmNvbnN0IE1lc3NhZ2VDcmVhdG9ycyA9IGZpbmRCeVByb3BzKFwiY3JlYXRlQm90TWVzc2FnZVwiKTtcclxuY29uc3QgTWVzc2FnZUFjdGlvbnMgPSBmaW5kQnlQcm9wcyhcInJlY2VpdmVNZXNzYWdlXCIpO1xyXG5jb25zdCBBdmF0YXJEZWZhdWx0cyA9IGZpbmRCeVByb3BzKFwiQk9UX0FWQVRBUlNcIik7XHJcblxyXG5leHBvcnQgY29uc3QgRGVmYXVsdE1lc3NhZ2UgPSB7XHJcbiAgICBzdGF0ZTogXCJTRU5UXCIsXHJcbiAgICBhdXRob3I6IGFkZEJvdEF1dGhvcih7XHJcbiAgICAgICAgYXZhdGFyOiB7IGF2YXRhcklkOiBcIml0dGFpXCIsIGltYWdlVXJsOiBcImh0dHBzOi8vY2RuLmRpc2NvcmRhcHAuY29tL2F2YXRhcnMvMjY0MDYyNDU3NDQ4NzU5Mjk2LzFmOWIxNzQzY2Y2MjVjYTJkNTFlZTUxN2I1ZWZkOGE3LndlYnBcIiB9LFxyXG4gICAgICAgIGF1dGhvcjogeyB1c2VybmFtZTogXCJJdHRhaVwiIH1cclxuICAgIH0pLFxyXG4gICAgY29udGVudDogXCJIZWxsbyEgQnkgdGhlIHdheSwgeW91IGZvcmdvdCB0byBhZGQgYSBgXFxcImNvbnRlbnRcXFwiYCBhdHRyaWJ1dGUgdG8gdGhlIG1lc3NhZ2UhXCJcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRCb3RBdXRob3IoeyBhdmF0YXIsIGF1dGhvciB9KSB7XHJcbiAgICBjb25zdCBhdmF0YXJJZCA9IGF2YXRhcj8uYXZhdGFySWQgPz8gcmFuZG9tU3RyaW5nKDEwKVxyXG4gICAgaWYgKEF2YXRhckRlZmF1bHRzPy5CT1RfQVZBVEFSUyAmJiAhQXZhdGFyRGVmYXVsdHMuQk9UX0FWQVRBUlNbYXZhdGFySWRdKSB7XHJcbiAgICAgICAgQXZhdGFyRGVmYXVsdHMuQk9UX0FWQVRBUlNbYXZhdGFySWRdID0gYXZhdGFyLmltYWdlVXJsO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBhdmF0YXI6IGF2YXRhcklkLFxyXG4gICAgICAgIGlkOiBhdXRob3I/LmF1dGhvcklkID8/IHJhbmRvbVN0cmluZygxMCksXHJcbiAgICAgICAgYm90OiB0cnVlLFxyXG4gICAgICAgIGRpc2NyaW1pbmF0b3I6IGF1dGhvcj8uZGlzY3JpbWluYXRvciA/PyBcIjAwMDBcIixcclxuICAgICAgICB1c2VybmFtZTogYXV0aG9yPy51c2VybmFtZSA/PyBcIkJvdFVzZXJcIlxyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNlbmRNZXNzYWdlKGNoYW5uZWxJZCwgbWVzc2FnZSkge1xyXG4gICAgTWVzc2FnZUFjdGlvbnMucmVjZWl2ZU1lc3NhZ2UoXHJcbiAgICAgICAgY2hhbm5lbElkLFxyXG4gICAgICAgIE9iamVjdC5hc3NpZ24oe30sIFxyXG4gICAgICAgICAgICBNZXNzYWdlQ3JlYXRvcnMuY3JlYXRlQm90TWVzc2FnZShjaGFubmVsSWQsIG1lc3NhZ2U/LmNvbnRlbnQpLFxyXG4gICAgICAgICAgICBEZWZhdWx0TWVzc2FnZSxcclxuICAgICAgICAgICAgbWVzc2FnZVxyXG4gICAgICAgIClcclxuICAgICk7XHJcbn07XHJcblxyXG5jb25zdCBCb3RNZXNzYWdlID0geyBzZW5kTWVzc2FnZSwgYWRkQm90QXV0aG9yIH07XHJcbmV4cG9ydCBkZWZhdWx0IEJvdE1lc3NhZ2U7IiwiaW1wb3J0ICogYXMgcGF0Y2hlciBmcm9tIFwiLi4vcGF0Y2hlclwiO1xyXG5pbXBvcnQgeyBmaW5kQnlQcm9wcywgZmluZEJ5RGlzcGxheU5hbWUgfSBmcm9tIFwiLi4vd2VicGFja1wiO1xyXG5pbXBvcnQgeyByYW5kb21TdHJpbmcsIGZpbmRJblRyZWUsIGZpbmRJblJlYWN0VHJlZSB9IGZyb20gXCIuLi91dGlsaXRpZXNcIjtcclxuXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgYm90TWVzc2FnZSB9IGZyb20gXCIuL2JvdE1lc3NhZ2VcIjtcclxuZXhwb3J0IGNvbnN0IENvbW1hbmRUeXBlcyA9IE9iamVjdC5hc3NpZ24oe30sIGZpbmRCeVByb3BzKFwiQXBwbGljYXRpb25Db21tYW5kVHlwZVwiKSwgZmluZEJ5UHJvcHMoXCJBcHBsaWNhdGlvbkNvbW1hbmRQZXJtaXNzaW9uVHlwZVwiKSlcclxuXHJcbmNvbnN0IENvbW1hbmRzTW9kdWxlID0gZmluZEJ5UHJvcHMoXCJCVUlMVF9JTl9DT01NQU5EU1wiKTtcclxuY29uc3QgQXBwbGljYXRpb25Db21tYW5kRGlzY292ZXJ5QXBwbGljYXRpb25JY29uID0gZmluZEJ5RGlzcGxheU5hbWUoXHJcblx0XCJBcHBsaWNhdGlvbkNvbW1hbmREaXNjb3ZlcnlBcHBsaWNhdGlvbkljb25cIlxyXG4pO1xyXG5cclxubGV0IGljb25QYXRjaDtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwYXRjaEljb25zKCkge1xyXG5cdGlmICghaWNvblBhdGNoKSB7XHJcblx0XHRpY29uUGF0Y2ggPSBwYXRjaGVyLmFmdGVyKFwiSXR0YWlJY29uQ29tbWFuZFBhdGNoXCIsIEFwcGxpY2F0aW9uQ29tbWFuZERpc2NvdmVyeUFwcGxpY2F0aW9uSWNvbiwgXCJkZWZhdWx0XCIsIChhcmdzLCByZXMsIF90aGlzKSA9PiB7XHJcblx0XHRcdFx0Y29uc3QgcHJvcHMgPSBmaW5kSW5SZWFjdFRyZWUocmVzLCAobikgPT4gbi5zcmMpO1xyXG5cdFx0XHRcdGNvbnN0IHNlY3Rpb24gPSBmaW5kSW5UcmVlKGFyZ3MsIChuKSA9PiBuLmljb24pO1xyXG5cclxuXHRcdFx0XHRpZiAoIXByb3BzIHx8ICFzZWN0aW9uIHx8IHByb3BzLnNyYy5pbmRleE9mKHNlY3Rpb24uaWNvbikgPiAwKVxyXG5cdFx0XHRcdFx0cmV0dXJuIHJlcztcclxuXHJcblx0XHRcdFx0cmVzLnByb3BzLm9uQ2xpY2sgPSAoKSA9PiB7fTtcclxuXHRcdFx0XHRwcm9wcy5zcmMgPSBzZWN0aW9uLmljb247XHJcblxyXG5cdFx0XHRcdHJldHVybiByZXM7XHJcblx0XHRcdH1cclxuXHRcdCk7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdW5wYXRjaEljb25zKCkge1xyXG5cdGljb25QYXRjaC51bnBhdGNoKCk7XHJcblx0aWNvblBhdGNoID0gbnVsbDtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IENPTU1BTkRfQVJHVU1FTlRfVFlQRVMgPSB7XHJcblx0U1VCX0NPTU1BTkQ6IDEsXHJcblx0U1VCX0NPTU1BTkRfR1JPVVA6IDIsXHJcblx0U1RSSU5HOiAzLFxyXG5cdElOVEVHRVI6IDQsXHJcblx0Qk9PTEVBTjogNSxcclxuXHRVU0VSOiA2LFxyXG5cdENIQU5ORUw6IDcsXHJcblx0Uk9MRTogOCxcclxufTtcclxuXHJcbmV4cG9ydCBsZXQgcmVnaXN0ZXJlZENvbW1hbmRzID0gW107XHJcbmV4cG9ydCBsZXQgcmVnaXN0ZXJlZFNlY3Rpb25zID0gW107XHJcblxyXG4vKipcclxuICpcclxuICogQHBhcmFtIHtvYmplY3R9IGlkXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJDb21tYW5kKGNvbW1hbmQpIHtcclxuXHRwYXRjaEljb25zKCk7XHJcblx0Y29uc3QgY3VycmVudElEcyA9IENvbW1hbmRzTW9kdWxlLkJVSUxUX0lOX0NPTU1BTkRTLm1hcCgoeyBpZCB9KSA9PiBpZCk7XHJcblx0aWYgKCFjb21tYW5kLmlkID8/IGZhbHNlKSBjb21tYW5kLmlkID0gcmFuZG9tU3RyaW5nKDEwLCBjdXJyZW50SURzKTtcclxuXHRpZiAoY3VycmVudElEcy5pbmRleE9mKGNvbW1hbmQuaWQpID4gLTEpXHJcblx0XHRjb21tYW5kLmlkICs9IHJhbmRvbVN0cmluZygxMCwgY3VycmVudElEcyk7XHJcblxyXG5cdGNvbW1hbmQuYXBwbGljYXRpb25JZCA/Pz0gXCItMVwiO1xyXG5cdGNvbW1hbmQuZXhlY3V0ZSA/Pz0gKCgpID0+IHt9KTtcclxuXHRjb21tYW5kLmRpc3BsYXlOYW1lID8/PSBjb21tYW5kLm5hbWVcclxuXHRjb21tYW5kLmRpc3BsYXlEZXNjcmlwdGlvbiA/Pz0gY29tbWFuZC5kZXNjcmlwdGlvblxyXG5cdGNvbW1hbmQub3B0aW9ucy5tYXAoKG9wdHMpID0+IHtcclxuXHRcdG9wdHMuZGlzcGxheU5hbWUgPz89IG9wdHMubmFtZVxyXG5cdFx0b3B0cy5kaXNwbGF5RGVzY3JpcHRpb24gPz89IG9wdHMuZGVzY3JpcHRpb25cclxuXHRcdHJldHVybiBvcHRzXHJcblx0fSlcclxuXHJcblx0Q29tbWFuZHNNb2R1bGUuQlVJTFRfSU5fQ09NTUFORFMucHVzaChjb21tYW5kKTtcclxuXHRyZWdpc3RlcmVkQ29tbWFuZHMucHVzaChjb21tYW5kLmlkKTtcclxuXHRyZXR1cm4gY29tbWFuZC5pZDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVucmVnaXN0ZXJDb21tYW5kKGlkKSB7XHJcblx0Q29tbWFuZHNNb2R1bGUuQlVJTFRfSU5fQ09NTUFORFMuc3BsaWNlKFxyXG5cdFx0Q29tbWFuZHNNb2R1bGUuQlVJTFRfSU5fQ09NTUFORFMuZmluZEluZGV4KChjb21tYW5kKSA9PiBjb21tYW5kLmlkID09PSBpZCksXHJcblx0XHQxXHJcblx0KTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gdW5yZWdpc3RlckFsbENvbW1hbmRzKCkge1xyXG5cdGZvciAoY29uc3QgY29tbWFuZCBvZiByZWdpc3RlcmVkQ29tbWFuZHMpIHtcclxuXHRcdHVucmVnaXN0ZXJDb21tYW5kKGNvbW1hbmQpO1xyXG5cdH1cclxufVxyXG5cclxuLyoqXHJcbiAqXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBpZFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyU2VjdGlvbihzZWN0aW9uKSB7XHJcblx0cGF0Y2hJY29ucygpO1xyXG5cdGNvbnN0IGN1cnJlbnRJRHMgPSBDb21tYW5kc01vZHVsZS5CVUlMVF9JTl9TRUNUSU9OUy5tYXAoKHsgaWQgfSkgPT4gaWQpO1xyXG5cdGlmICghc2VjdGlvbi5pZCA/PyBmYWxzZSkgc2VjdGlvbi5pZCA9IHJhbmRvbVN0cmluZygxMCwgY3VycmVudElEcyk7XHJcblx0aWYgKGN1cnJlbnRJRHMuaW5kZXhPZihzZWN0aW9uLmlkKSA+IC0xKVxyXG5cdFx0c2VjdGlvbi5pZCArPSByYW5kb21TdHJpbmcoMTAsIGN1cnJlbnRJRHMpO1xyXG5cclxuXHRzZWN0aW9uLmlzQnVpbHRJbiA9IGZhbHNlO1xyXG5cclxuXHRDb21tYW5kc01vZHVsZS5CVUlMVF9JTl9TRUNUSU9OUy5wdXNoKHNlY3Rpb24pO1xyXG5cdHJlZ2lzdGVyZWRTZWN0aW9ucy5wdXNoKHNlY3Rpb24uaWQpO1xyXG5cdHJldHVybiBzZWN0aW9uLmlkO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdW5yZWdpc3RlclNlY3Rpb24oaWQpIHtcclxuXHRDb21tYW5kc01vZHVsZS5CVUlMVF9JTl9DT01NQU5EUy5zcGxpY2UoXHJcblx0XHRDb21tYW5kc01vZHVsZS5CVUlMVF9JTl9DT01NQU5EUy5maW5kSW5kZXgoKGNvbW1hbmQpID0+IGNvbW1hbmQuaWQgPT09IGlkKSxcclxuXHRcdDFcclxuXHQpO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiB1bnJlZ2lzdGVyQWxsU2VjdGlvbnMoKSB7XHJcblx0Zm9yIChjb25zdCBjb21tYW5kIG9mIHJlZ2lzdGVyZWRTZWN0aW9ucykge1xyXG5cdFx0dW5yZWdpc3RlckNvbW1hbmQoY29tbWFuZCk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IGZpbmRCeURpc3BsYXlOYW1lLCBmaW5kQnlQcm9wcyB9IGZyb20gXCIuLi93ZWJwYWNrXCI7XHJcblxyXG5leHBvcnQgY29uc3QgTWVzc2FnZXMgPSBmaW5kQnlQcm9wcygnZ2V0TWVzc2FnZScsICdnZXRNZXNzYWdlcycpXHJcbmV4cG9ydCBjb25zdCBDaGFubmVscyA9IGZpbmRCeVByb3BzKCdnZXRDaGFubmVsJywgJ2dldERNRnJvbVVzZXJJZCcpXHJcbmV4cG9ydCBjb25zdCBDdXJyZW50Q2hhbm5lbHMgPSBmaW5kQnlQcm9wcygnZ2V0Q2hhbm5lbElkJywgJ2dldExhc3RTZWxlY3RlZENoYW5uZWxJZCcpXHJcbmV4cG9ydCBjb25zdCBHdWlsZHMgPSBmaW5kQnlQcm9wcygnZ2V0R3VpbGQnKVxyXG5leHBvcnQgY29uc3QgQ3VycmVudEd1aWxkcyA9IGZpbmRCeVByb3BzKCdnZXRHdWlsZElkJywgJ2dldExhc3RTZWxlY3RlZEd1aWxkSWQnKVxyXG5leHBvcnQgY29uc3QgSW5mbyA9IGZpbmRCeVByb3BzKCdnZXRTZXNzaW9uSWQnKVxyXG5leHBvcnQgY29uc3QgU3RhdHVzID0gZmluZEJ5UHJvcHMoJ2dldFN0YXR1cycsICdnZXRBY3Rpdml0aWVzJywgJ2dldFN0YXRlJylcclxuZXhwb3J0IGNvbnN0IFVzZXJzID0gZmluZEJ5UHJvcHMoJ2dldFVzZXInLCAnZ2V0Q3VycmVudFVzZXInKVxyXG5leHBvcnQgY29uc3QgVXNlclNldHRpbmdzID0gZmluZEJ5UHJvcHMoJ2d1aWxkRm9sZGVycycsICd0aGVtZScpXHJcbmV4cG9ydCBjb25zdCBVc2VyUHJvZmlsZSA9IGZpbmRCeVByb3BzKCdnZXRVc2VyUHJvZmlsZScpXHJcbmV4cG9ydCBjb25zdCBNZW1iZXJzID0gZmluZEJ5UHJvcHMoJ2dldE1lbWJlcicpXHJcbmV4cG9ydCBjb25zdCBBY3Rpdml0aWVzID0gZmluZEJ5UHJvcHMoJ2dldFN0YXR1cycsICdnZXRBY3Rpdml0aWVzJywgJ2dldFN0YXRlJylcclxuZXhwb3J0IGNvbnN0IEdhbWVzID0gZmluZEJ5UHJvcHMoJ2dldEdhbWUnLCAnZ2FtZXMnKVxyXG5leHBvcnQgY29uc3QgQXV0aCA9IGZpbmRCeVByb3BzKCdnZXRJZCcsICdpc0d1ZXN0JylcclxuZXhwb3J0IGNvbnN0IFR5cGluZ1VzZXJzID0gZmluZEJ5UHJvcHMoJ2lzVHlwaW5nJykiLCJ2YXIgZT1bXSx0PVtdO2Z1bmN0aW9uIG4obixyKXtpZihuJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgZG9jdW1lbnQpe3ZhciBhLHM9ITA9PT1yLnByZXBlbmQ/XCJwcmVwZW5kXCI6XCJhcHBlbmRcIixkPSEwPT09ci5zaW5nbGVUYWcsaT1cInN0cmluZ1wiPT10eXBlb2Ygci5jb250YWluZXI/ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihyLmNvbnRhaW5lcik6ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdO2lmKGQpe3ZhciB1PWUuaW5kZXhPZihpKTstMT09PXUmJih1PWUucHVzaChpKS0xLHRbdV09e30pLGE9dFt1XSYmdFt1XVtzXT90W3VdW3NdOnRbdV1bc109YygpfWVsc2UgYT1jKCk7NjUyNzk9PT1uLmNoYXJDb2RlQXQoMCkmJihuPW4uc3Vic3RyaW5nKDEpKSxhLnN0eWxlU2hlZXQ/YS5zdHlsZVNoZWV0LmNzc1RleHQrPW46YS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShuKSl9ZnVuY3Rpb24gYygpe3ZhciBlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtpZihlLnNldEF0dHJpYnV0ZShcInR5cGVcIixcInRleHQvY3NzXCIpLHIuYXR0cmlidXRlcylmb3IodmFyIHQ9T2JqZWN0LmtleXMoci5hdHRyaWJ1dGVzKSxuPTA7bjx0Lmxlbmd0aDtuKyspZS5zZXRBdHRyaWJ1dGUodFtuXSxyLmF0dHJpYnV0ZXNbdFtuXV0pO3ZhciBhPVwicHJlcGVuZFwiPT09cz9cImFmdGVyYmVnaW5cIjpcImJlZm9yZWVuZFwiO3JldHVybiBpLmluc2VydEFkamFjZW50RWxlbWVudChhLGUpLGV9fWV4cG9ydHtuIGFzIGRlZmF1bHR9O1xuIiwiaW1wb3J0IHsgUmVhY3QgfSBmcm9tIFwiLi4vd2VicGFja1wiXHJcbi8vQHRzLWlnbm9yZVxyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL1RvYXN0V3JhcHBlci5jc3NcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR2VuZXJpY1RvYXN0KHtcclxuICAgIGNoaWxkcmVuLFxyXG59KSB7XHJcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50b2FzdH0+e2NoaWxkcmVufTwvZGl2PlxyXG59XHJcbiIsIi8qKlxyXG4gKiBAbW9kdWxlIGNvbXBvbmVudHNcclxuICovXHJcblxyXG5pbXBvcnQgeyBmaW5kQnlQcm9wcyB9IGZyb20gXCIuLi93ZWJwYWNrXCJcclxuaW1wb3J0IHsgcmFuZG9tU3RyaW5nIH0gZnJvbSBcIi4uL3V0aWxpdGllc1wiXHJcbmltcG9ydCB7IFJlYWN0IH0gZnJvbSBcIi4uL3dlYnBhY2tcIlxyXG5pbXBvcnQgVG9hc3QgZnJvbSBcIi4vVG9hc3RXcmFwcGVyXCJcclxuXHJcbmNvbnN0IHsgc2hvd1RvYXN0LCBwb3BUb2FzdCB9ID0gZmluZEJ5UHJvcHMoXCJzaG93VG9hc3RcIilcclxuXHJcbi8qKlxyXG4gKiBTaG93cyBhIHRvYXN0IHVzaW5nIGRpc2NvcmQncyBvd24gdG9hc3QgaGFuZGxlciB0aGF0IHdhcyBhZGRlZCBvbiBpdHMgN3RoIGJpcnRoZGF5IGZvci4uLiBhY2hpdmVtZW50cz9cclxuICogQHBhcmFtIHtGdW5jdGlvbjxpbXBvcnQoJ3JlYWN0JykuUmVhY3RFbGVtZW50PGFueT4+IHwgc3RyaW5nfSB0ZXh0IENvbXBvbmVudCB0byByZW5kZXJcclxuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgT3B0aW9ucyBmb3IgdGhlIHRvYXN0XHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9ucy5pZF0gVGhlIElEIG9mIHRoZSB0b2FzdC4gSWYgbm90IGdpdmVuLCBpdCB3aWxsIGJlIGdlbmVyYXRlZCBvbmUgcmFuZG9tbHlcclxuICogQHBhcmFtIHtudW1iZXJ9IFtvcHRpb25zLmR1cmF0aW9uXSBIb3cgbG9uZyB0aGUgdG9hc3Qgc2hvdWxkIHN0YXkgb24gc2NyZWVuXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0aW9ucy5wb3NpdGlvbiA9IDFdIFBvc2l0aW9uIG9mIHRoZSB0b2FzdC4gMCBpcyB0b3AsIDEgaXMgYm90dG9tXHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBJRCBvZiB0aGUgdG9hc3RcclxuICovXHJcbmV4cG9ydCBjb25zdCBzaG93ID0gKHRleHQsIG9wdGlvbnMpID0+IHtcclxuICAgIGNvbnN0IHRvYXN0SUQgPSBvcHRpb25zPy5pZCA/PyByYW5kb21TdHJpbmcoMTApXHJcbiAgICBzaG93VG9hc3Qoe1xyXG4gICAgICAgIGlkOiB0b2FzdElELFxyXG4gICAgICAgIG9wdGlvbnM6IE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMsIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IFBPU0lUSU9OUy5CT1RUT00sXHJcbiAgICAgICAgICAgIGNvbXBvbmVudDogdHlwZW9mIHRleHQgIT09IFwiZnVuY3Rpb25cIiA/IDxUb2FzdD57dGV4dH08L1RvYXN0PiA6IHRleHQoKSxcclxuICAgICAgICB9KSxcclxuICAgIH0pXHJcbiAgICByZXR1cm4gdG9hc3RJRFxyXG59XHJcblxyXG4vKipcclxuICogUmVtb3ZlcyBhIHRvYXN0XHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBpZCBUaGUgSUQgb2YgdGhlIHRvYXN0XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgcG9wID0gKGlkKSA9PiBwb3BUb2FzdChpZClcclxuXHJcbmV4cG9ydCBjb25zdCBUb2FzdFdyYXBwZXIgPSBUb2FzdFxyXG5cclxuZXhwb3J0IGNvbnN0IFBPU0lUSU9OUyA9IHtcclxuICAgIFRPUDogMCxcclxuICAgIEJPVFRPTTogMVxyXG59IiwiaW1wb3J0ICogYXMgc2V0dGluZ3MgZnJvbSBcIml0dGFpL3NldHRpbmdzXCJcclxuaW1wb3J0IHsgQ29uc3RhbnRzLCBEaXNwYXRjaGVyLCBSZWFjdCwgQ29sb3JVdGlscyB9IGZyb20gXCJpdHRhaS93ZWJwYWNrXCJcclxuaW1wb3J0IHR5cGUgeyBDYXRlZ29yeSwgQ29sb3JIZXgsIFBpbm5lZERNUyB9IGZyb20gXCIuLi90eXBlc1wiXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0QWxsID0gKCk6IFBpbm5lZERNUyA9PiB7XHJcbiAgICByZXR1cm4gc2V0dGluZ3MuZ2V0KFwicGlubmVkQ2F0ZWdvcmllc1wiLCB7fSlcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldENhdGVnb3JpZXMgPSAoKTogc3RyaW5nW10gPT4ge1xyXG4gICAgY29uc3QgcGlubmVkQ2F0ZWdvcmllcyA9IE9iamVjdC5rZXlzKGdldEFsbCgpKVxyXG4gICAgcmV0dXJuIHBpbm5lZENhdGVnb3JpZXNcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldENhdGVnb3J5ID0gKGNhdGVnb3J5OiBzdHJpbmcpOiBDYXRlZ29yeSA9PiB7XHJcbiAgICByZXR1cm4gZ2V0QWxsKClbY2F0ZWdvcnldXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBzZXRSYXcgPSAoc2V0dGluZzogUGlubmVkRE1TKSA9PiB7XHJcbiAgICBzZXR0aW5ncy5zZXQoXCJwaW5uZWRDYXRlZ29yaWVzXCIsIHNldHRpbmcpXHJcbiAgICBcclxuICAgIERpc3BhdGNoZXIuZGlydHlEaXNwYXRjaCh7IHR5cGU6IFwiUElORE1TX0NIQU5HRV9MSVNUXCIgfSlcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGFkZENhdGVnb3J5ID0gKGNhdGVnb3J5OiBzdHJpbmcsIHNldHRpbmdzOiBDYXRlZ29yeSA9IHtcclxuICAgIGNvbG9yOiBDb2xvclV0aWxzLmludDJoZXgoQ29uc3RhbnRzLkRFRkFVTFRfUk9MRV9DT0xPUiksXHJcbiAgICB1c2VyczogW10sXHJcbiAgICBzaG93OiB0cnVlXHJcbn0pID0+IHtcclxuICAgIGxldCBwaW5uZWRDYXRlZ29yaWVzID0gZ2V0QWxsKClcclxuICAgIHBpbm5lZENhdGVnb3JpZXNbY2F0ZWdvcnldID0gc2V0dGluZ3NcclxuICAgIFxyXG4gICAgc2V0UmF3KHBpbm5lZENhdGVnb3JpZXMpXHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3Qgc2V0Q29sb3IgPSAoY2F0ZWdvcnk6IHN0cmluZywgY29sb3I6IENvbG9ySGV4KSA9PiB7XHJcbiAgICBsZXQgcGlubmVkQ2F0ZWdvcmllcyA9IGdldEFsbCgpXHJcbiAgICAgICAgXHJcbiAgICBpZiAocGlubmVkQ2F0ZWdvcmllc1tjYXRlZ29yeV0gPT0gbnVsbCkgdGhyb3cgbmV3IEVycm9yKGBDYXRlZ29yeSAke2NhdGVnb3J5fSBkb2VzIG5vdCBleGlzdGApXHJcbiAgICBwaW5uZWRDYXRlZ29yaWVzW2NhdGVnb3J5XS5jb2xvciA9IGNvbG9yXHJcblxyXG4gICAgc2V0UmF3KHBpbm5lZENhdGVnb3JpZXMpXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRDb2xvciA9IChjYXRlZ29yeTogc3RyaW5nKSA9PiB7XHJcbiAgICBsZXQgcGlubmVkQ2F0ZWdvcmllcyA9IGdldEFsbCgpXHJcblxyXG4gICAgaWYgKHBpbm5lZENhdGVnb3JpZXNbY2F0ZWdvcnldID09IG51bGwpIHRocm93IG5ldyBFcnJvcihgQ2F0ZWdvcnkgJHtjYXRlZ29yeX0gZG9lcyBub3QgZXhpc3RgKVxyXG4gICAgcmV0dXJuIHBpbm5lZENhdGVnb3JpZXNbY2F0ZWdvcnldLmNvbG9yIGFzIENvbG9ySGV4XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBzZXRWaXNpYmlsaXR5ID0gKGNhdGVnb3J5OiBzdHJpbmcsIHZpc2liaWxpdHk6IGJvb2xlYW4pID0+IHtcclxuICAgIGxldCBwaW5uZWRDYXRlZ29yaWVzID0gZ2V0QWxsKClcclxuICAgIFxyXG4gICAgaWYgKHBpbm5lZENhdGVnb3JpZXNbY2F0ZWdvcnldID09IG51bGwpIHRocm93IG5ldyBFcnJvcihgQ2F0ZWdvcnkgJHtjYXRlZ29yeX0gZG9lcyBub3QgZXhpc3RgKVxyXG4gICAgcGlubmVkQ2F0ZWdvcmllc1tjYXRlZ29yeV0uc2hvdyA9IHZpc2liaWxpdHlcclxuICAgIFxyXG4gICAgc2V0UmF3KHBpbm5lZENhdGVnb3JpZXMpXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRWaXNpYmlsaXR5ID0gKGNhdGVnb3J5OiBzdHJpbmcpID0+IHtcclxuICAgIGxldCBwaW5uZWRDYXRlZ29yaWVzID0gZ2V0QWxsKClcclxuXHJcbiAgICBpZiAocGlubmVkQ2F0ZWdvcmllc1tjYXRlZ29yeV0gPT0gbnVsbCkgdGhyb3cgbmV3IEVycm9yKGBDYXRlZ29yeSAke2NhdGVnb3J5fSBkb2VzIG5vdCBleGlzdGApXHJcbiAgICByZXR1cm4gcGlubmVkQ2F0ZWdvcmllc1tjYXRlZ29yeV0uc2hvdyA/PyB0cnVlXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCByZW5hbWVDYXRlZ29yeSA9IChvbGRDYXRlZ29yeU5hbWU6IHN0cmluZywgbmV3Q2F0ZWdvcnlOYW1lOiBzdHJpbmcpID0+IHtcclxuICAgIGxldCBwaW5uZWRDYXRlZ29yaWVzID0gZ2V0QWxsKClcclxuICAgIC8vIGNvbnNvbGUubG9nKHBpbm5lZENhdGVnb3JpZXMpXHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocGlubmVkQ2F0ZWdvcmllcywgbmV3Q2F0ZWdvcnlOYW1lLCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHBpbm5lZENhdGVnb3JpZXMsIG9sZENhdGVnb3J5TmFtZSkhKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKHBpbm5lZENhdGVnb3JpZXMpXHJcbiAgICBkZWxldGUgcGlubmVkQ2F0ZWdvcmllc1tvbGRDYXRlZ29yeU5hbWVdO1xyXG4gICAgLy8gY29uc29sZS5sb2cocGlubmVkQ2F0ZWdvcmllcylcclxuICAgIFxyXG4gICAgc2V0UmF3KHBpbm5lZENhdGVnb3JpZXMpXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCByZW1vdmVDYXRlZ29yeSA9IChjYXRlZ29yeTogc3RyaW5nKSA9PiB7XHJcbiAgICBsZXQgcGlubmVkQ2F0ZWdvcmllcyA9IGdldEFsbCgpXHJcbiAgICBpZiAocGlubmVkQ2F0ZWdvcmllc1tjYXRlZ29yeV0gPT0gbnVsbCkgdGhyb3cgbmV3IEVycm9yKGBDYXRlZ29yeSAke2NhdGVnb3J5fSBkb2VzIG5vdCBleGlzdGApXHJcbiAgICBkZWxldGUgcGlubmVkQ2F0ZWdvcmllc1tjYXRlZ29yeV1cclxuICAgIFxyXG4gICAgc2V0UmF3KHBpbm5lZENhdGVnb3JpZXMpXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRVc2VycyA9IChjYXRlZ29yeTogc3RyaW5nKSA9PiB7XHJcbiAgICBjb25zdCBwaW5uZWRDYXRlZ29yaWVzID0gZ2V0QWxsKClcclxuICAgIGlmIChwaW5uZWRDYXRlZ29yaWVzW2NhdGVnb3J5XSA9PSBudWxsKSB0aHJvdyBuZXcgRXJyb3IoYENhdGVnb3J5ICR7Y2F0ZWdvcnl9IGRvZXMgbm90IGV4aXN0YClcclxuXHJcbiAgICByZXR1cm4gcGlubmVkQ2F0ZWdvcmllc1tjYXRlZ29yeV0udXNlcnNcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHNldFVzZXJMaXN0ID0gKGNhdGVnb3J5OiBzdHJpbmcsIHVzZXJMaXN0OiBzdHJpbmdbXSkgPT4ge1xyXG4gICAgbGV0IHBpbm5lZENhdGVnb3JpZXMgPSBnZXRBbGwoKVxyXG4gICAgXHJcbiAgICBwaW5uZWRDYXRlZ29yaWVzW2NhdGVnb3J5XS51c2VycyA9IHVzZXJMaXN0XHJcbiAgICBcclxuICAgIHNldFJhdyhwaW5uZWRDYXRlZ29yaWVzKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgYWRkVXNlciA9IChjYXRlZ29yeTogc3RyaW5nLCB1c2VySUQ6IGltcG9ydChcIml0dGFpXCIpLlVzZXJJRCkgPT4ge1xyXG4gICAgaWYgKHR5cGVvZiB1c2VySUQgIT09IFwic3RyaW5nXCIpIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBVc2VyIElEYClcclxuICAgIFxyXG4gICAgbGV0IHBpbm5lZENhdGVnb3JpZXMgPSBnZXRBbGwoKVxyXG4gICAgaWYgKHBpbm5lZENhdGVnb3JpZXNbY2F0ZWdvcnldID09IG51bGwpIHRocm93IG5ldyBFcnJvcihgQ2F0ZWdvcnkgJHtjYXRlZ29yeX0gZG9lcyBub3QgZXhpc3RgKVxyXG5cclxuICAgIGxldCB1c2VyTGlzdCA9IHBpbm5lZENhdGVnb3JpZXNbY2F0ZWdvcnldLnVzZXJzXHJcbiAgICB1c2VyTGlzdC5wdXNoKHVzZXJJRClcclxuICAgIFxyXG4gICAgc2V0VXNlckxpc3QoY2F0ZWdvcnksIHVzZXJMaXN0KVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcmVtb3ZlVXNlciA9IChjYXRlZ29yeTogc3RyaW5nLCB1c2VySUQ6IGltcG9ydChcIml0dGFpXCIpLlVzZXJJRCkgPT4ge1xyXG4gICAgaWYgKHR5cGVvZiB1c2VySUQgIT09IFwic3RyaW5nXCIpIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBVc2VyIElEYClcclxuICAgIFxyXG4gICAgbGV0IHBpbm5lZENhdGVnb3JpZXMgPSBnZXRBbGwoKVxyXG4gICAgaWYgKHBpbm5lZENhdGVnb3JpZXNbY2F0ZWdvcnldID09IG51bGwpIHRocm93IG5ldyBFcnJvcihgQ2F0ZWdvcnkgJHtjYXRlZ29yeX0gZG9lcyBub3QgZXhpc3RgKVxyXG5cclxuICAgIGxldCB1c2VyTGlzdCA9IHBpbm5lZENhdGVnb3JpZXNbY2F0ZWdvcnldLnVzZXJzXHJcbiAgICB1c2VyTGlzdCA9IHVzZXJMaXN0LmZpbHRlcigodXNlcikgPT4gdXNlciAhPT0gdXNlcklEKVxyXG4gICAgXHJcbiAgICBzZXRVc2VyTGlzdChjYXRlZ29yeSwgdXNlckxpc3QpXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBpc1VzZXJBZGRlZCA9ICh1c2VySUQ6IGltcG9ydChcIml0dGFpXCIpLlVzZXJJRCkgPT4ge1xyXG4gICAgcmV0dXJuIE9iamVjdC52YWx1ZXMoZ2V0QWxsKCkpLnNvbWUoKHsgdXNlcnMgfSkgPT4gdXNlcnMuaW5jbHVkZXModXNlcklEKSlcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFVzZXJDYXRlZ29yeSA9ICh1c2VySUQ6IGltcG9ydChcIml0dGFpXCIpLlVzZXJJRCkgPT4ge1xyXG4gICAgY29uc3QgcGlubmVkQ2F0ZWdvcmllcyA9IGdldEFsbCgpXHJcbiAgICBmb3IgKGNvbnN0IGNhdGVnb3J5TmFtZSBpbiBwaW5uZWRDYXRlZ29yaWVzKSB7XHJcbiAgICAgICAgY29uc3QgY2F0ZWdvcnkgPSBwaW5uZWRDYXRlZ29yaWVzW2NhdGVnb3J5TmFtZV1cclxuICAgICAgICBpZiAoY2F0ZWdvcnkudXNlcnMuc29tZSgodXNlcikgPT4gdXNlciA9PT0gdXNlcklEKSkgcmV0dXJuIGNhdGVnb3J5TmFtZVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdXNlTGlzdFVwZGF0ZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IFssIGZvcmNlVXBkYXRlXSA9IFJlYWN0LnVzZVJlZHVjZXIobiA9PiAhbiwgdHJ1ZSk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBsaXN0ZW5lciA9ICgpID0+IHZvaWQgZm9yY2VVcGRhdGUoKTtcclxuXHJcbiAgICAgICAgRGlzcGF0Y2hlci5zdWJzY3JpYmUoXCJQSU5ETVNfQ0hBTkdFX0xJU1RcIiwgbGlzdGVuZXIpO1xyXG5cclxuICAgICAgICByZXR1cm4gKCkgPT4gRGlzcGF0Y2hlci51bnN1YnNjcmliZShcIlBJTkRNU19DSEFOR0VfTElTVFwiLCBsaXN0ZW5lcik7XHJcbiAgICB9LCBbXSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGdldEFsbCxcclxuICAgIGdldENhdGVnb3JpZXMsXHJcbiAgICBnZXRDYXRlZ29yeSxcclxuICAgIHNldFJhdyxcclxuICAgIGFkZENhdGVnb3J5LFxyXG4gICAgcmVuYW1lQ2F0ZWdvcnksXHJcbiAgICByZW1vdmVDYXRlZ29yeSxcclxuICAgIGdldENvbG9yLFxyXG4gICAgc2V0Q29sb3IsXHJcbiAgICBnZXRWaXNpYmlsaXR5LFxyXG4gICAgc2V0VmlzaWJpbGl0eSxcclxuICAgIHNldFVzZXJMaXN0LFxyXG4gICAgYWRkVXNlcixcclxuICAgIGdldFVzZXJzLFxyXG4gICAgcmVtb3ZlVXNlcixcclxuICAgIGlzVXNlckFkZGVkLFxyXG4gICAgZ2V0VXNlckNhdGVnb3J5LFxyXG4gICAgdXNlTGlzdFVwZGF0ZVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGFycjogYW55W10gfCBPYmplY3QsIGZyb206IG51bWJlciwgdG86IG51bWJlcikge1xyXG4gICAgaWYoQXJyYXkuaXNBcnJheShhcnIpKSB7XHJcbiAgICAgICAgcmV0dXJuIG1vdmVBcnJheShhcnIsIGZyb20sIHRvKVxyXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgYXJyID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgcmV0dXJuIG1vdmVPYmplY3RLZXkoYXJyLCBmcm9tLCB0bylcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1vdmVPYmplY3RLZXkob2JqZWN0OiBPYmplY3QsIGZyb206IG51bWJlciB8IHN0cmluZywgdG86IG51bWJlcik6IE9iamVjdCB7XHJcbiAgICBpZih0eXBlb2YgZnJvbSA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgIGZyb20gPSBPYmplY3Qua2V5cyhvYmplY3QpLmZpbmRJbmRleChrZXkgPT4ga2V5ID09PSBmcm9tKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNoYW5nZWRPcmRlciA9IG1vdmVBcnJheShPYmplY3QuZW50cmllcyhvYmplY3QpLCBmcm9tLCB0bylcclxuICAgIGNvbnN0IG5ld09iajogT2JqZWN0ID0gY2hhbmdlZE9yZGVyLnJlZHVjZSgoYWNjLCBba2V5LCB2YWx1ZV0pID0+IHtcclxuICAgICAgICBhY2Nba2V5XSA9IHZhbHVlXHJcbiAgICAgICAgcmV0dXJuIGFjY1xyXG4gICAgfSwge30pXHJcbiAgICByZXR1cm4gbmV3T2JqXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtb3ZlQXJyYXkoYXJyOiBhbnlbXSwgZnJvbTogbnVtYmVyLCB0bzogbnVtYmVyKSB7XHJcbiAgICBsZXQgc2FmZUFyciA9IGFyclxyXG4gICAgc2FmZUFyci5zcGxpY2UodG8sIDAsIHNhZmVBcnIuc3BsaWNlKGZyb20sIDEpWzBdKVxyXG4gICAgcmV0dXJuIHNhZmVBcnJcclxufSIsImltcG9ydCB7IHNlYXJjaENsYXNzTmFtZU1vZHVsZXMgfSBmcm9tIFwiaXR0YWkvdXRpbGl0aWVzXCJcclxuaW1wb3J0IHsgZmluZEJ5UHJvcHMgfSBmcm9tIFwiaXR0YWkvd2VicGFja1wiXHJcblxyXG5leHBvcnQgY29uc3QgUHJpdmF0ZUNoYW5uZWxzSGVhZGVyQ29udGFpbmVyID0gZmluZEJ5UHJvcHMoXCJwcml2YXRlQ2hhbm5lbFJlY2lwaWVudHNJbnZpdGVCdXR0b25JY29uXCIpIGFzIHtcclxuICAgIGVtcHR5OiBzdHJpbmdcclxuICAgIGhlYWRlclRleHQ6IHN0cmluZ1xyXG4gICAgcHJpdmF0ZUNoYW5uZWxSZWNpcGllbnRzSW52aXRlQnV0dG9uSWNvbjogc3RyaW5nXHJcbiAgICBwcml2YXRlQ2hhbm5lbHNIZWFkZXJDb250YWluZXI6IHN0cmluZ1xyXG4gICAgc2Nyb2xsZXI6IHN0cmluZ1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgRE1CdXR0b25zID0gZmluZEJ5UHJvcHMoXCJjaGFubmVsXCIsIFwibGlua0J1dHRvbkljb25cIikgYXMge1xyXG4gICAgY2hhbm5lbDogc3RyaW5nXHJcbiAgICBmdWxsV2lkdGg6IHN0cmluZ1xyXG4gICAgaW50ZXJhY3RpdmU6IHN0cmluZ1xyXG4gICAgaW50ZXJhY3RpdmVTZWxlY3RlZDogc3RyaW5nXHJcbiAgICBhdmF0YXJXaXRoVGV4dDogc3RyaW5nXHJcbiAgICBsaW5rOiBzdHJpbmdcclxuICAgIGxpbmtCdXR0b246IHN0cmluZ1xyXG4gICAgbGlua0J1dHRvbkljb246IHN0cmluZ1xyXG4gICAgY2xvc2VCdXR0b246IHN0cmluZ1xyXG4gICAgY2xvc2VJY29uOiBzdHJpbmdcclxuICAgIHN1YnRleHQ6IHN0cmluZ1xyXG4gICAgYWN0aXZpdHk6IHN0cmluZ1xyXG4gICAgYWN0aXZpdHlUZXh0OiBzdHJpbmdcclxuICAgIGFjdGl2aXR5RW1vamk6IHN0cmluZ1xyXG4gICAgZGVjb3JhdG9yOiBzdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IENhdGVnb3J5ID0gZmluZEJ5UHJvcHMoXCJhZGRCdXR0b25JY29uXCIsIFwiY29udGFpbmVyRHJhZ0FmdGVyXCIpIGFzIHtcclxuICAgIHNwYWNlQmVmb3JlQ2F0ZWdvcnk6IHN0cmluZ1xyXG4gICAgY29udGFpbmVyRGVmYXVsdDogc3RyaW5nXHJcbiAgICBjb250YWluZXJEcmFnQWZ0ZXI6IHN0cmluZ1xyXG4gICAgY29udGFpbmVyRHJhZ0JlZm9yZTogc3RyaW5nXHJcbiAgICBjb250YWluZXJVc2VyT3Zlcjogc3RyaW5nXHJcbiAgICBkaXNhYmxlQ2xpY2s6IHN0cmluZ1xyXG4gICAgYWRkQnV0dG9uOiBzdHJpbmdcclxuICAgIGZvcmNlVmlzaWJsZTogc3RyaW5nXHJcbiAgICBpY29uVmlzaWJpbGl0eTogc3RyaW5nXHJcbiAgICBhZGRCdXR0b25JY29uOiBzdHJpbmdcclxuICAgIHdyYXBwZXI6IHN0cmluZ1xyXG4gICAgY2xpY2thYmxlOiBzdHJpbmdcclxuICAgIGNoaWxkcmVuOiBzdHJpbmdcclxuICAgIG1haW5Db250ZW50OiBzdHJpbmdcclxuICAgIGljb246IHN0cmluZ1xyXG4gICAgY29sbGFwc2VkOiBzdHJpbmdcclxuICAgIG11dGVkOiBzdHJpbmdcclxuICAgIG5hbWU6IHN0cmluZ1xyXG4gICAgZGlzbWlzc1dyYXBwZXI6IHN0cmluZ1xyXG4gICAgZGlzbWlzc0J1dHRvbjogc3RyaW5nXHJcbiAgICBkaXNtaXNzOiBzdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEludGVyYWN0aXZlcyA9IGZpbmRCeVByb3BzKFwiaW50ZXJhY3RpdmVcIiwgXCJtdXRlZFwiKSBhcyB7XHJcbiAgICByZXNwb25zaXZlV2lkdGhNb2JpbGVGaXJzdDogc3RyaW5nXHJcbiAgICBpbnRlcmFjdGl2ZTogc3RyaW5nXHJcbiAgICBtdXRlZDogc3RyaW5nXHJcbiAgICBzZWxlY3RlZDogc3RyaW5nXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBEZWxldGVBY2NvdW50QnV0dG9uUm93ID0gZmluZEJ5UHJvcHMoXCJidXR0b25Db250YWluZXJcIiwgXCJkZXNjcmlwdGlvblwiLCBcImRpc2FibGVCdXR0b25cIikgYXMge1xyXG4gICAgZGVzY3JpcHRpb246IHN0cmluZ1xyXG4gICAgYnV0dG9uQ29udGFpbmVyOiBzdHJpbmdcclxuICAgIGRpc2FibGVCdXR0b246IHN0cmluZ1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgTmFtZXMgPSBmaW5kQnlQcm9wcyhcIm5hbWVBbmREZWNvcmF0b3JzXCIpIGFzIHtcclxuICAgIG11dGVkOiBzdHJpbmdcclxuICAgIGF2YXRhcjogc3RyaW5nXHJcbiAgICBoaWdobGlnaHRlZDogc3RyaW5nXHJcbiAgICBsYXlvdXQ6IHN0cmluZ1xyXG4gICAgY29udGVudDogc3RyaW5nXHJcbiAgICBuYW1lOiBzdHJpbmdcclxuICAgIHdyYXBwZWRMYXlvdXQ6IHN0cmluZ1xyXG4gICAgd3JhcHBlZE5hbWU6IHN0cmluZ1xyXG4gICAgbmFtZUFuZERlY29yYXRvcnM6IHN0cmluZ1xyXG4gICAgc3ViVGV4dDogc3RyaW5nXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBTY3JvbGxpbmcgPSBmaW5kQnlQcm9wcyhcInNjcm9sbGluZ1wiLCBcInNjcm9sbGVyQmFzZVwiKSBhcyB7XHJcbiAgICBzY3JvbGxlckJhc2U6IHN0cmluZ1xyXG4gICAgdGhpbjogc3RyaW5nXHJcbiAgICBmYWRlOiBzdHJpbmdcclxuICAgIHNjcm9sbGluZzogc3RyaW5nXHJcbiAgICBhdXRvOiBzdHJpbmdcclxuICAgIG5vbmU6IHN0cmluZ1xyXG4gICAgY29udGVudDogc3RyaW5nXHJcbiAgICBkaXNhYmxlU2Nyb2xsQW5jaG9yOiBzdHJpbmdcclxuICAgIG1hbmFnZWRSZWFjdGl2ZVNjcm9sbGVyOiBzdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFNlcnZlck1lbWJlcnMgPSBmaW5kQnlQcm9wcyhcInVpLXNjcm9sbGVyLXdyYXBcIikgYXMge1xyXG4gICAgc2VhcmNoQmFyOiBzdHJpbmdcclxuICAgIG1lbWJlcnNIZWFkZXI6IHN0cmluZ1xyXG4gICAgXCJ1aS1zZWxlY3RcIjogc3RyaW5nXHJcbiAgICBzZWFyY2g6IHN0cmluZ1xyXG4gICAgZGl2aWRlcjogc3RyaW5nXHJcbiAgICBwcnVuZUxpbms6IHN0cmluZ1xyXG4gICAgbWVtYmVyc0NvdW50OiBzdHJpbmdcclxuICAgIG1lbWJlcnNGaWx0ZXJQb3BvdXQ6IHN0cmluZ1xyXG4gICAgXCJ1aS1zY3JvbGxlci13cmFwXCI6IHN0cmluZ1xyXG4gICAgbWVtYmVyOiBzdHJpbmdcclxuICAgIGFjdGl2ZTogc3RyaW5nXHJcbiAgICBvdmVyZmxvd0ljb246IHN0cmluZ1xyXG4gICAgbmFtZVRhZzogc3RyaW5nXHJcbiAgICBuYW1lOiBzdHJpbmdcclxuICAgIHRhZzogc3RyaW5nXHJcbiAgICB1c2VybmFtZTogc3RyaW5nXHJcbiAgICBvd25lckhlbHBJY29uOiBzdHJpbmdcclxuICAgIHJvbGVXcmFwcGVyOiBzdHJpbmdcclxuICAgIG92ZXJmbG93QnV0dG9uOiBzdHJpbmdcclxuICAgIGF2YXRhcjogc3RyaW5nXHJcbiAgICBvdmVyZmxvd0ljb25GZzogc3RyaW5nXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBBY2NvdW50Q29udHJvbEJ1dHRvbnMgPSBmaW5kQnlQcm9wcyhcImJ1dHRvblwiLCBcImRpc2FibGVkXCIsIFwiZW5hYmxlZFwiKSBhcyB7XHJcbiAgICBidXR0b246IHN0cmluZ1xyXG4gICAgZW5hYmxlZDogc3RyaW5nXHJcbiAgICBkaXNhYmxlZDogc3RyaW5nXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBDb2xvclBpY2tlciA9IGZpbmRCeVByb3BzKFwiY3VzdG9tXCIsIFwiY3VzdG9tQ29sb3JQaWNrZXJJbnB1dFwiLCBcImNvbG9yUGlja2VyUm93XCIpIGFzIHtcclxuICAgIGNvbnRhaW5lcjogc3RyaW5nXHJcbiAgICBjdXN0b21Db250YWluZXI6IHN0cmluZ1xyXG4gICAgZGVmYXVsdENvbnRhaW5lcjogc3RyaW5nXHJcbiAgICBjdXN0b206IHN0cmluZ1xyXG4gICAgcHJlc2V0OiBzdHJpbmdcclxuICAgIGNvbG9yUGlja2VyQ3VzdG9tOiBzdHJpbmdcclxuICAgIGN1c3RvbUNvbG9yUGlja2VySW5wdXQ6IHN0cmluZ1xyXG4gICAgaW5wdXQ6IHN0cmluZ1xyXG4gICAgY29sb3JQaWNrZXJSb3c6IHN0cmluZ1xyXG4gICAgY29sb3JQaWNrZXJTd2F0Y2g6IHN0cmluZ1xyXG4gICAgZGVmYXVsdDogc3RyaW5nXHJcbiAgICBkaXNhYmxlZDogc3RyaW5nXHJcbiAgICBjb2xvclBpY2tlckRyb3BwZXI6IHN0cmluZ1xyXG4gICAgbm9Db2xvcjogc3RyaW5nXHJcbiAgICBjb2xvclBpY2tlckRyb3BwZXJGZzogc3RyaW5nXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBNYXJnaW5zID0gZmluZEJ5UHJvcHMoXCJtYXJnaW5MYXJnZVwiLCBcIm1hcmdpblRvcDIwXCIpIGFzIHtcclxuICAgIG1hcmdpblhTbWFsbDogc3RyaW5nXHJcbiAgICBtYXJnaW5TbWFsbDogc3RyaW5nXHJcbiAgICBtYXJnaW5NZWRpdW06IHN0cmluZ1xyXG4gICAgbWFyZ2luTGFyZ2U6IHN0cmluZ1xyXG4gICAgbWFyZ2luWExhcmdlOiBzdHJpbmdcclxuICAgIG1hcmdpblJlc2V0OiBzdHJpbmdcclxuICAgIG1hcmdpblRvcDQ6IHN0cmluZ1xyXG4gICAgbWFyZ2luQm90dG9tNDogc3RyaW5nXHJcbiAgICBtYXJnaW5Ub3A4OiBzdHJpbmdcclxuICAgIG1hcmdpbkJvdHRvbTg6IHN0cmluZ1xyXG4gICAgbWFyZ2luVG9wMjA6IHN0cmluZ1xyXG4gICAgbWFyZ2luQm90dG9tMjA6IHN0cmluZ1xyXG4gICAgbWFyZ2luVG9wNDA6IHN0cmluZ1xyXG4gICAgbWFyZ2luQm90dG9tNDA6IHN0cmluZ1xyXG4gICAgbWFyZ2luVG9wNjA6IHN0cmluZ1xyXG4gICAgbWFyZ2luQm90dG9tNjA6IHN0cmluZ1xyXG4gICAgbWFyZ2luQ2VudGVySG9yejogc3RyaW5nXHJcbiAgICBtYXJnaW5MZWZ0ODogc3RyaW5nXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIFByaXZhdGVDaGFubmVsc0hlYWRlckNvbnRhaW5lcixcclxuICAgIERNQnV0dG9ucyxcclxuICAgIFNlcnZlck1lbWJlcnMsXHJcbiAgICBBY2NvdW50Q29udHJvbEJ1dHRvbnMsXHJcbiAgICBDb2xvclBpY2tlcixcclxuICAgIE1hcmdpbnMsXHJcbiAgICBTY3JvbGxpbmcsXHJcbiAgICBEZWxldGVBY2NvdW50QnV0dG9uUm93LFxyXG4gICAgTmFtZXMsXHJcbiAgICBJbnRlcmFjdGl2ZXMsXHJcbiAgICBDYXRlZ29yeVxyXG59XHJcblxyXG4vKiBjb3B5IHR5cGVzXHJcbmNvbnNvbGUubG9nKE9iamVjdC5rZXlzKHNlYXJjaENsYXNzTmFtZU1vZHVsZXMoXCJtZW1iZXItMmNqMlBJXCIpKS5qb2luKFwiOiBzdHJpbmdcXG5cIikgKyBcIjogc3RyaW5nXCIpXHJcbiovIiwiZXhwb3J0IGRlZmF1bHQgKC4uLmNsYXNzZXM6IChzdHJpbmcgfCBhbnkpW10pID0+IGNsYXNzZXMuZmlsdGVyKHMgPT4gdHlwZW9mIHMgPT09ICdzdHJpbmcnKS5qb2luKFwiIFwiKSIsImltcG9ydCB7IFVzZXJJRCwgVXNlck9iamVjdCB9IGZyb20gXCJpdHRhaVwiXHJcblxyXG5pbXBvcnQgKiBhcyB3ZWJwYWNrIGZyb20gXCJpdHRhaS93ZWJwYWNrXCJcclxuY29uc3QgeyBSZWFjdCwgUmVhY3Q6IHtcclxuICAgIHVzZVN0YXRlLFxyXG4gICAgdXNlRWZmZWN0LFxyXG59IH0gPSB3ZWJwYWNrXHJcbmltcG9ydCB7IFVzZXJzIH0gZnJvbSBcIml0dGFpL3N0b3Jlc1wiXHJcbmltcG9ydCB7IEF2YXRhciwgRGlzY29yZEljb24sIFRvb2x0aXBDb250YWluZXIgfSBmcm9tIFwiaXR0YWkvY29tcG9uZW50c1wiXHJcbmltcG9ydCB7IEJ1dHRvbiwgVGV4dCwgRmxleCB9IGZyb20gXCJpdHRhaS9jb21wb25lbnRzXCJcclxuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4uLy4uL3V0aWxzL2NsYXNzZXNcIlxyXG4vL0B0cy1pZ25vcmVcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9Vc2VyLnNjc3NcIlxyXG5pbXBvcnQgam9pbkNsYXNzZXMgZnJvbSBcIi4uLy4uL3V0aWxzL2pvaW5DbGFzc2VzXCJcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgICBpZDogVXNlcklELFxyXG4gICAgb25Nb3ZlOiAodXBkbjogXCJ1cFwiIHwgXCJkb3duXCIpID0+IHZvaWQsXHJcbiAgICBvblJlbW92ZTogKCkgPT4gdm9pZCxcclxuICAgIGRpc2FibGVVcD86IGJvb2xlYW4sXHJcbiAgICBkaXNhYmxlRG93bj86IGJvb2xlYW4sXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHsgaWQsIG9uTW92ZSwgb25SZW1vdmUsIGRpc2FibGVVcCA9IGZhbHNlLCBkaXNhYmxlRG93biA9IGZhbHNlIH06IFByb3BzKSB7XHJcbiAgICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZTxVc2VyT2JqZWN0PigpXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCB1c2VyID0gVXNlcnMuZ2V0VXNlcihpZClcclxuICAgICAgICBpZiAoIXVzZXIpIHRocm93IG5ldyBFcnJvcihcIlVzZXIgbm90IGZvdW5kXCIpXHJcbiAgICAgICAgc2V0VXNlcihVc2Vycy5nZXRVc2VyKGlkKSlcclxuICAgIH0pXHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEZsZXhcclxuICAgICAgICAgICAgYWxpZ249e0ZsZXguQWxpZ24uQ0VOVEVSfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2pvaW5DbGFzc2VzKGNsYXNzZXMuU2VydmVyTWVtYmVycy5tZW1iZXIsIHN0eWxlcy53cmFwcGVyKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLlNlcnZlck1lbWJlcnMuYXZhdGFyfT5cclxuICAgICAgICAgICAgICAgIDxBdmF0YXJcclxuICAgICAgICAgICAgICAgICAgICBzcmM9eyh1c2VyPy5nZXRBdmF0YXJVUkwoZmFsc2UsIHRydWUpIGFzIHN0cmluZyk/LnJlcGxhY2UoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiP3NpemU9MTZcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT17QXZhdGFyLlNpemVzLlNJWkVfNDB9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuU2VydmVyTWVtYmVycy5uYW1lVGFnfSBzdHlsZT17eyBtYXJnaW5SaWdodDogXCJhdXRvXCIgfX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5TZXJ2ZXJNZW1iZXJzLm5hbWV9PlxyXG4gICAgICAgICAgICAgICAgICAgIHt1c2VyPy51c2VybmFtZX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPFRleHQgY29sb3I9e1RleHQuQ29sb3JzLk1VVEVEfSBzaXplPXtUZXh0LlNpemVzLlNJWkVfMTR9PlxyXG4gICAgICAgICAgICAgICAgICAgIEB7dXNlcj8udXNlcm5hbWV9I3t1c2VyPy5kaXNjcmltaW5hdG9yfVxyXG4gICAgICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPEZsZXhcclxuICAgICAgICAgICAgICAgIGRpcmVjdGlvbj17RmxleC5EaXJlY3Rpb24uVkVSVElDQUx9XHJcbiAgICAgICAgICAgICAgICBncm93PXswfVxyXG4gICAgICAgICAgICAgICAgc2hyaW5rPXswfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT17QnV0dG9uLlNpemVzLklDT059XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25Nb3ZlKFwidXBcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVVcH1cclxuICAgICAgICAgICAgICAgICAgICBsb29rPXtCdXR0b24uTG9va3MuQkxBTkt9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzZXMuQWNjb3VudENvbnRyb2xCdXR0b25zLmJ1dHRvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZVVwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGNsYXNzZXMuQWNjb3VudENvbnRyb2xCdXR0b25zLmRpc2FibGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGNsYXNzZXMuQWNjb3VudENvbnRyb2xCdXR0b25zLmVuYWJsZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgXS5qb2luKFwiIFwiKX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8RGlzY29yZEljb24gbmFtZT1cIkFycm93RHJvcFVwXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU9e0J1dHRvbi5TaXplcy5JQ09OfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uTW92ZShcImRvd25cIil9XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVEb3dufVxyXG4gICAgICAgICAgICAgICAgICAgIGxvb2s9e0J1dHRvbi5Mb29rcy5CTEFOS31cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1tcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3Nlcy5BY2NvdW50Q29udHJvbEJ1dHRvbnMuYnV0dG9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlRG93blxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBjbGFzc2VzLkFjY291bnRDb250cm9sQnV0dG9ucy5kaXNhYmxlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBjbGFzc2VzLkFjY291bnRDb250cm9sQnV0dG9ucy5lbmFibGVkLFxyXG4gICAgICAgICAgICAgICAgICAgIF0uam9pbihcIiBcIil9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPERpc2NvcmRJY29uIG5hbWU9XCJBcnJvd0Ryb3BEb3duXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICAgIDxUb29sdGlwQ29udGFpbmVyIHRleHQ9XCJEZWxldGVcIj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICBzaXplPXtCdXR0b24uU2l6ZXMuSUNPTn1cclxuICAgICAgICAgICAgICAgICAgICBjb2xvcj17QnV0dG9uLkNvbG9ycy5SRUR9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17b25SZW1vdmV9XHJcbiAgICAgICAgICAgICAgICAgICAgbG9vaz17QnV0dG9uLkxvb2tzLkxJTkt9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPERpc2NvcmRJY29uIG5hbWU9XCJUcmFzaFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9Ub29sdGlwQ29udGFpbmVyPlxyXG4gICAgICAgIDwvRmxleD5cclxuICAgIClcclxufSIsImNvbnN0IENhdGVnb3J5VmlldyA9IHtcclxuICAgIHNldHRpbmdzVmFsdWU6IFwiY2F0ZWdvcnlcIlxyXG59XHJcbmNvbnN0IE1pbmltYWxpc3RWaWV3ID0ge1xyXG4gICAgc2V0dGluZ3NWYWx1ZTogXCJtaW5pbWFsaXN0XCIsXHJcbiAgICB1c2VySWNvbnM6IHRydWVcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgRGVmYXVsdFNldHRpbmdzOiB7XHJcbiAgICAgICAgRElTUExBWV9NT0RFOiBDYXRlZ29yeVZpZXcuc2V0dGluZ3NWYWx1ZSxcclxuICAgICAgICBNaW5pbWFsaXN0VmlldyxcclxuICAgICAgICBDYXRlZ29yeVZpZXcsXHJcbiAgICAgICAgUElOX0lDT046IHRydWUsXHJcbiAgICAgICAgU1RSRUFNRVJfTU9ERTogdHJ1ZVxyXG4gICAgfVxyXG59IiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBTZXR0aW5ncyB9IGZyb20gXCIuL3NldHRpbmdzXCJcclxuXHJcbmV4cG9ydCBjb25zdCBESVNQQVRDSEVSX1BJTkRNU19DSEFOR0VfTElTVCA9IFwiUElORE1TX0NIQU5HRV9MSVNUXCIiLCJpbXBvcnQgeyBSZWFjdCB9IGZyb20gXCJpdHRhaS93ZWJwYWNrXCJcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgICByZW5kZXJFcnJvcj86IHN0cmluZyB8IFJlYWN0LlJlYWN0RWxlbWVudFxyXG4gICAgY2hpbGRyZW46IGFueVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFcnJvckJvdW5kYXJ5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzPiB7XHJcbiAgICBzdGF0ZSA9IHsgaGFzRXJyb3I6IGZhbHNlIH07XHJcblxyXG4gICAgY29tcG9uZW50RGlkQ2F0Y2goKSB7IH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yKCkgeyByZXR1cm4geyBoYXNFcnJvcjogdHJ1ZSB9OyB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmhhc0Vycm9yKSByZXR1cm4gKEJvb2xlYW4odGhpcy5wcm9wcy5yZW5kZXJFcnJvcikgPyB0aGlzLnByb3BzLnJlbmRlckVycm9yIDogbnVsbCk7XHJcbiAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuY2hpbGRyZW47XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgKiBhcyB3ZWJwYWNrIGZyb20gXCJpdHRhaS93ZWJwYWNrXCJcclxuaW1wb3J0IHsgQ29sb3JIZXgsIENvbG9yVXRpbHMsIENvbnN0YW50cywgUmVhY3QgfSBmcm9tIFwiaXR0YWkvd2VicGFja1wiXHJcbmltcG9ydCB7IEJ1dHRvbiwgTW9kYWwsIFRleHRJbnB1dCwgRm9ybXMsIENvbG9yUGlja2VyLCBTd2l0Y2hJdGVtLCBUZXh0LCBBbmNob3IgfSBmcm9tIFwiaXR0YWkvY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgcGlubmVkRE1TIGZyb20gXCIuLi8uLi8uLi9oYW5kbGVycy9waW5uZWRETVNcIjtcclxuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4uLy4uLy4uL3V0aWxzL2NsYXNzZXNcIlxyXG5pbXBvcnQgKiBhcyBjb25zdGFudHMgZnJvbSBcIi4uLy4uLy4uL2NvbnN0YW50c1wiXHJcbmltcG9ydCAqIGFzIHNldHRpbmdzIGZyb20gXCJpdHRhaS9zZXR0aW5nc1wiXHJcbi8vQHRzLWlnbm9yZVxyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL0NhdGVnb3J5U2V0dGluZ3NNb2RhbC5zY3NzXCJcclxuaW1wb3J0IEVycm9yQm91bmRhcnkgZnJvbSBcIi4uLy4uLy4uL3V0aWxzL0Vycm9yQm91bmRhcnlcIjtcclxuY29uc3QgeyBDdXN0b21Db2xvckJ1dHRvbiB9ID0gd2VicGFjay5maW5kQnlQcm9wcyhcIkRlZmF1bHRDb2xvckJ1dHRvblwiKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKG1vZGFsUHJvcHM6IHsgdHJhbnNpdGlvblN0YXRlOiAxIHwgMiB8IDMsIG9uQ2xvc2U6ICgpID0+IHZvaWQsIGNhdGVnb3J5OiBzdHJpbmd9KSB7XHJcbiAgICBjb25zdCBbbmV3TmFtZSwgc2V0TmV3TmFtZV0gPSBSZWFjdC51c2VTdGF0ZShtb2RhbFByb3BzLmNhdGVnb3J5KVxyXG4gICAgY29uc3QgW25ld0NvbG9yLCBzZXROZXdDb2xvcl0gPSBSZWFjdC51c2VTdGF0ZTxDb2xvckhleD4ocGlubmVkRE1TLmdldENvbG9yKG1vZGFsUHJvcHMuY2F0ZWdvcnkpKVxyXG5cclxuICAgIHJldHVybiA8TW9kYWwuTW9kYWxSb290IHNpemU9e01vZGFsLk1vZGFsU2l6ZS5EWU5BTUlDfSB7Li4ubW9kYWxQcm9wc30+XHJcbiAgICAgICAgPE1vZGFsLk1vZGFsSGVhZGVyIHNlcGFyYXRvcj17ZmFsc2V9PlxyXG4gICAgICAgICAgICA8VGV4dElucHV0XHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17bmV3TmFtZX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtzZXROZXdOYW1lfVxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJSZW5hbWVcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMudGV4dGJveH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICA8L01vZGFsLk1vZGFsSGVhZGVyPlxyXG4gICAgICAgIDxNb2RhbC5Nb2RhbENvbnRlbnQ+XHJcbiAgICAgICAgICAgIDxGb3Jtcy5Gb3JtSXRlbT5cclxuICAgICAgICAgICAgICAgIDxGb3Jtcy5Gb3JtVGl0bGU+Q29sb3I8L0Zvcm1zLkZvcm1UaXRsZT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLk1hcmdpbnMubWFyZ2luQm90dG9tMjB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxFcnJvckJvdW5kYXJ5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlckVycm9yPXs8VGV4dCBjb2xvcj17VGV4dC5Db2xvcnMuRVJST1J9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQW4gZXJyb3IgaGFwcGVuZWQgd2hpbGUgdHJ5aW5nIHRvIGxvYWQgdGhlIENvbG9yUGlja2VyLiBDaGVjayA8QW5jaG9yIGhyZWY9XCJodHRwczovL2dpdC5jYXR2aWJlcnMubWUvSXR0YWkvaXR0YWkvaXNzdWVzLzlcIj5odHRwczovL2dpdC5jYXR2aWJlcnMubWUvSXR0YWkvaXR0YWkvaXNzdWVzLzk8L0FuY2hvcj4gZm9yIG1vcmUgaW5mb3JtYXRpb24gYWJvdXQuPGJyLz48YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQXMgb2Ygbm93LCB5b3UgY2FuIGRvIHRoZXNlIHN0ZXBzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17c3R5bGVzLnByb3BlclNwYWNpbmd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT4tIFJlbW92ZSB0aGUgcGx1Z2luIGZyb20gdGhlIHBsdWdpbnMgZm9sZGVyPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+LSBHbyB0byBhbnkgc2VydmVyJ3Mgc2V0dGluZ3M8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT4tIEdvIHRvIFwiUm9sZXNcIjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPi0gQ2xpY2sgb24gYW55IHJvbGU8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT4tIFB1dCB0aGUgcGx1Z2luIGJhY2s8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoaXMgd2lsbCBsb2FkIHRoZSBDb2xvclBpY2tlciBjb21wb25lbnQgYW5kIHRoZW4gZml4IHRoaXMgZXJyb3JcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0Pn1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb2xvclBpY2tlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JzPXtDb25zdGFudHMuUk9MRV9DT0xPUlN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0Q29sb3I9e0NvbnN0YW50cy5ERUZBVUxUX1JPTEVfQ09MT1J9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Q29sb3JVdGlscy5oZXgyaW50KG5ld0NvbG9yKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoYzogbnVtYmVyKSA9PiBzZXROZXdDb2xvcihDb2xvclV0aWxzLmludDJoZXgoYykpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRXJyb3JCb3VuZGFyeT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPFN3aXRjaEl0ZW1cclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17IXBpbm5lZERNUy5nZXRWaXNpYmlsaXR5KG1vZGFsUHJvcHMuY2F0ZWdvcnkpfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gcGlubmVkRE1TLnNldFZpc2liaWxpdHkobW9kYWxQcm9wcy5jYXRlZ29yeSwgIWUpfVxyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtzZXR0aW5ncy5nZXQoJ2Rpc3BsYXknLCBjb25zdGFudHMuU2V0dGluZ3MuRGVmYXVsdFNldHRpbmdzLkRJU1BMQVlfTU9ERSkgPT09IGNvbnN0YW50cy5TZXR0aW5ncy5EZWZhdWx0U2V0dGluZ3MuTWluaW1hbGlzdFZpZXcuc2V0dGluZ3NWYWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICBub3RlPXtzZXR0aW5ncy5nZXQoJ2Rpc3BsYXknLCBjb25zdGFudHMuU2V0dGluZ3MuRGVmYXVsdFNldHRpbmdzLkRJU1BMQVlfTU9ERSkgJiYgXCJEaXNhYmxlZCBiZWNhdXNlIGl0IGlzIHVzaW5nIHRoZSBNaW5pbWFsaXN0IHZpZXdcIn1cclxuICAgICAgICAgICAgICAgID5IaWRlIGNvbnRlbnRzPC9Td2l0Y2hJdGVtPlxyXG4gICAgICAgICAgICA8L0Zvcm1zLkZvcm1JdGVtPlxyXG4gICAgICAgIDwvTW9kYWwuTW9kYWxDb250ZW50PlxyXG4gICAgICAgIDxNb2RhbC5Nb2RhbEZvb3Rlcj5cclxuICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAobW9kYWxQcm9wcy5jYXRlZ29yeSAhPT0gbmV3TmFtZSkgcGlubmVkRE1TLnJlbmFtZUNhdGVnb3J5KG1vZGFsUHJvcHMuY2F0ZWdvcnksIG5ld05hbWUpXHJcbiAgICAgICAgICAgICAgICBwaW5uZWRETVMuc2V0Q29sb3IobW9kYWxQcm9wcy5jYXRlZ29yeSwgbmV3Q29sb3IpXHJcbiAgICAgICAgICAgICAgICBtb2RhbFByb3BzLm9uQ2xvc2UoKVxyXG4gICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgIFNhdmVcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDxCdXR0b24gbG9vaz17QnV0dG9uLkxvb2tzLkxJTkt9IGNvbG9yPXtCdXR0b24uQ29sb3JzLldISVRFfSBvbkNsaWNrPXttb2RhbFByb3BzLm9uQ2xvc2V9PlxyXG4gICAgICAgICAgICAgICAgQ2FuY2VsXHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvTW9kYWwuTW9kYWxGb290ZXI+XHJcbiAgICA8L01vZGFsLk1vZGFsUm9vdD5cclxufSIsImV4cG9ydCBkZWZhdWx0IDxUeXBlPihhcnJheTogVHlwZVtdLCBsaW1pdCA9IDUwLCBmcm9tID0gMCk6IFR5cGVbXSA9PiBhcnJheS5zbGljZShmcm9tLCBmcm9tICsgbGltaXQpIiwiaW1wb3J0ICogYXMgd2VicGFjayBmcm9tIFwiaXR0YWkvd2VicGFja1wiXHJcbmltcG9ydCB7IFJlYWN0IH0gZnJvbSBcIml0dGFpL3dlYnBhY2tcIlxyXG5pbXBvcnQgeyBNb2RhbCwgVGV4dElucHV0LCBBdmF0YXIsIEZsZXgsIFRleHQgfSBmcm9tIFwiaXR0YWkvY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgeyBDaGFubmVscywgVXNlcnMgfSBmcm9tIFwiaXR0YWkvc3RvcmVzXCI7XHJcbmltcG9ydCBwaW5uZWRETVMgZnJvbSBcIi4uLy4uLy4uL2hhbmRsZXJzL3Bpbm5lZERNU1wiO1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvY2xhc3Nlc1wiXHJcbi8vQHRzLWlnbm9yZVxyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL0FkZFVzZXJNb2RhbC5zY3NzXCJcclxuLy9AdHMtaWdub3JlXHJcbmltcG9ydCBjYXRlZ29yeVN0eWxlcyBmcm9tIFwiLi9DYXRlZ29yeVNldHRpbmdzTW9kYWwuc2Nzc1wiXHJcbmltcG9ydCBsaW1pdCBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvbGltaXRcIjtcclxuaW1wb3J0IHsgVXNlcklELCBVc2VyT2JqZWN0IH0gZnJvbSBcIml0dGFpXCI7XHJcbmltcG9ydCBqb2luQ2xhc3NlcyBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvam9pbkNsYXNzZXNcIjtcclxuXHJcbmNvbnN0IGRtVXNlcnM6IFVzZXJPYmplY3RbXSA9IENoYW5uZWxzLmdldFNvcnRlZFByaXZhdGVDaGFubmVscygpLmZpbHRlcihjaGFubmVsID0+IGNoYW5uZWwucmVjaXBpZW50cy5sZW5ndGggPT09IDEgJiYgY2hhbm5lbC5yZWNpcGllbnRzWzBdICE9IG51bGwpLm1hcChjaGFubmVsID0+IFVzZXJzLmdldFVzZXIoY2hhbm5lbC5yZWNpcGllbnRzWzBdKSlcclxuXHJcbmNvbnN0IE1BWF9VU0VSX0RJU1BMQVkgPSA2MFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHByb3BzOiB7IHRyYW5zaXRpb25TdGF0ZTogMSB8IDIgfCAzLCBvbkNsb3NlOiAoKSA9PiB2b2lkLCBvblNlbGVjdDogKGlkOiBVc2VyT2JqZWN0KSA9PiB2b2lkfSkge1xyXG4gICAgY29uc3QgW3VzZXJzLCBzZXRVc2Vyc10gPSBSZWFjdC51c2VTdGF0ZTxVc2VyT2JqZWN0W10+KFtdKVxyXG4gICAgY29uc3QgW3NlYXJjaCwgc2V0U2VhcmNoXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpXHJcbiAgICBcclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgc2VhcmNoUmVzdWx0ID0gZG1Vc2Vycy5maWx0ZXIodXNlciA9PiAhdXNlci5ib3QgJiYgfnVzZXIudXNlcm5hbWUudG9Mb3dlckNhc2UoKS5pbmRleE9mKHNlYXJjaC50b0xvd2VyQ2FzZSgpKSlcclxuICAgICAgICBjb25zdCBsaW1pdGVkUmVzdWx0ID0gbGltaXQoc2VhcmNoUmVzdWx0LCBNQVhfVVNFUl9ESVNQTEFZKVxyXG4gICAgICAgIHNldFVzZXJzKGxpbWl0ZWRSZXN1bHQpXHJcbiAgICB9LCBbc2VhcmNoXSlcclxuXHJcbiAgICByZXR1cm4gPE1vZGFsLk1vZGFsUm9vdCBzaXplPXtNb2RhbC5Nb2RhbFNpemUuRFlOQU1JQ30gey4uLnByb3BzfT5cclxuICAgICAgICA8TW9kYWwuTW9kYWxIZWFkZXIgc2VwYXJhdG9yPXtmYWxzZX0+XHJcbiAgICAgICAgICAgIDxUZXh0SW5wdXRcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtzZWFyY2h9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17c2V0U2VhcmNofVxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggZm9yIHVzZXJcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjYXRlZ29yeVN0eWxlcy50ZXh0Ym94fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIDwvTW9kYWwuTW9kYWxIZWFkZXI+XHJcbiAgICAgICAgPE1vZGFsLk1vZGFsQ29udGVudD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51c2VyR3JpZH0+XHJcbiAgICAgICAgICAgICAgICB7dXNlcnMubWFwKHVzZXIgPT4gPFVzZXIgdXNlcj17dXNlcn0gb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb3BzLm9uU2VsZWN0KHVzZXIpXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMub25DbG9zZSgpXHJcbiAgICAgICAgICAgICAgICB9fSAvPil9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvTW9kYWwuTW9kYWxDb250ZW50PlxyXG4gICAgPC9Nb2RhbC5Nb2RhbFJvb3Q+XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBVc2VyID0gKHsgdXNlciwgb25DbGljayB9OiB7IHVzZXI6IFVzZXJPYmplY3QsIG9uQ2xpY2s/OiAoKSA9PiB2b2lkIH0pID0+IHtcclxuICAgIGNvbnN0IGlzQWRkZWQgPSBwaW5uZWRETVMuaXNVc2VyQWRkZWQodXNlci5pZClcclxuICAgIHJldHVybiA8RmxleCBhbGlnbj17RmxleC5BbGlnbi5DRU5URVJ9XHJcbiAgICAgICAgY2xhc3NOYW1lPXtqb2luQ2xhc3NlcyhzdHlsZXMudXNlciwgaXNBZGRlZCA/IHN0eWxlcy5kaXNhYmxlZCA6IFwiXCIpfVxyXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHsgaWYgKCFpc0FkZGVkKSBvbkNsaWNrPy4oKX19XHJcbiAgICA+XHJcbiAgICAgICAgPEF2YXRhclxyXG4gICAgICAgICAgICBzcmM9eyh1c2VyLmdldEF2YXRhclVSTChmYWxzZSwgZmFsc2UpIGFzIHN0cmluZyl9XHJcbiAgICAgICAgICAgIHNpemU9e0F2YXRhci5TaXplcy5TSVpFXzE2fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPFRleHQgY29sb3I9e1RleHQuQ29sb3JzLlNUQU5EQVJEfSBjbGFzc05hbWU9e3N0eWxlcy5uYW1lfT5cclxuICAgICAgICAgICAge3VzZXIudXNlcm5hbWV9XHJcbiAgICAgICAgPC9UZXh0PlxyXG4gICAgPC9GbGV4PlxyXG59IiwiaW1wb3J0ICogYXMgd2VicGFjayBmcm9tIFwiaXR0YWkvd2VicGFja1wiXHJcbmltcG9ydCB7IFJlYWN0LCBDb2xvclV0aWxzLCBNb2RhbEFjdGlvbnMsIENvbnN0YW50cyB9IGZyb20gXCJpdHRhaS93ZWJwYWNrXCJcclxuaW1wb3J0IHtcclxuICAgIEJ1dHRvbixcclxuICAgIFRleHRJbnB1dCxcclxuICAgIEZsZXgsXHJcbiAgICBEaXNjb3JkSWNvbixcclxuICAgIENvbG9yUGlja2VyLFxyXG4gICAgUG9wb3V0LFxyXG4gICAgVG9vbHRpcENvbnRhaW5lclxyXG59IGZyb20gXCJpdHRhaS9jb21wb25lbnRzXCJcclxuaW1wb3J0IHBpbm5lZERNUywgeyB1c2VMaXN0VXBkYXRlIH0gZnJvbSBcIi4uLy4uL2hhbmRsZXJzL3Bpbm5lZERNU1wiXHJcbmltcG9ydCB7IG1vdmVPYmplY3RLZXksIG1vdmVBcnJheSB9IGZyb20gXCIuLi8uLi91dGlscy9tb3ZlXCJcclxuaW1wb3J0IHsgQ29sb3JIZXgsIFBpbm5lZERNUyB9IGZyb20gXCIuLi8uLi90eXBlc1wiXHJcbmltcG9ydCBVc2VyIGZyb20gXCIuL1VzZXJcIlxyXG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi4vLi4vdXRpbHMvY2xhc3Nlc1wiXHJcbmltcG9ydCBDaGFuZ2VDYXRlZ29yeU5hbWVNb2RhbCBmcm9tIFwiLi9Nb2RhbHMvQ2F0ZWdvcnlTZXR0aW5nc01vZGFsXCJcclxuLy9AdHMtaWdub3JlXHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vaW5kZXguc2Nzc1wiXHJcbmltcG9ydCBqb2luQ2xhc3NlcyBmcm9tIFwiLi4vLi4vdXRpbHMvam9pbkNsYXNzZXNcIlxyXG5pbXBvcnQgQWRkVXNlck1vZGFsIGZyb20gXCIuL01vZGFscy9BZGRVc2VyTW9kYWxcIlxyXG5pbXBvcnQgeyBVc2VyU2V0dGluZ3MgfSBmcm9tIFwiaXR0YWkvc3RvcmVzXCJcclxuXHJcbmNvbnN0IExpc3RTZWN0aW9uSXRlbSA9IHdlYnBhY2suZmluZEJ5RGlzcGxheU5hbWUoXCJMaXN0U2VjdGlvbkl0ZW1cIilcclxuY29uc3QgeyBFbXB0eVN0YXRlSW1hZ2UsIGRlZmF1bHQ6IEVtcHR5U3RhdGUsIEVtcHR5U3RhdGVUZXh0IH0gPSB3ZWJwYWNrLmZpbmRCeVByb3BzKFwiRW1wdHlTdGF0ZUltYWdlXCIpXHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gICAgb3BlbmVkQ2F0ZWdvcnk/OiBzdHJpbmdcclxuICAgIHNob3dBZGRDYXRlZ29yeUJ1dHRvbj86IGJvb2xlYW5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoeyBvcGVuZWRDYXRlZ29yeSwgc2hvd0FkZENhdGVnb3J5QnV0dG9uID0gdHJ1ZSB9OiBQcm9wcykge1xyXG4gICAgdXNlTGlzdFVwZGF0ZSgpXHJcbiAgICAvLyBjb25zb2xlLmxvZyhDb2xvclBpY2tlcilcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIHtzaG93QWRkQ2F0ZWdvcnlCdXR0b24gJiYgPENyZWF0ZUNhdGVnb3J5IC8+fVxyXG4gICAgICAgICAgICB7T2JqZWN0LmVudHJpZXMocGlubmVkRE1TLmdldEFsbCgpKS5tYXAoXHJcbiAgICAgICAgICAgICAgICAoW2NhdGVnb3J5LCB7IHVzZXJzIH1dLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxVc2VyQ2F0ZWdvcnkgbmFtZT17Y2F0ZWdvcnl9IHVzZXJzPXt1c2Vyc30gaW5kZXg9e2luZGV4fSBoaWRkZW49e2NhdGVnb3J5ICE9PSBvcGVuZWRDYXRlZ29yeX0gLz5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgKX1cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IENyZWF0ZUNhdGVnb3J5ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW25ld0NhdGVnb3J5LCBzZXROZXdDYXRlZ29yeV0gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmc+KFwiXCIpXHJcbiAgICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZz4oXCJcIilcclxuXHJcbiAgICByZXR1cm4gPEZsZXggY2xhc3NOYW1lPXtzdHlsZXMuY3JlYXRlQ2F0ZWdvcnl9IGFsaWduPXtGbGV4LkFsaWduLkNFTlRFUn0+XHJcbiAgICAgICAgPFRleHRJbnB1dCBjbGFzc05hbWU9e3N0eWxlcy50ZXh0Ym94fVxyXG4gICAgICAgICAgICB2YWx1ZT17bmV3Q2F0ZWdvcnl9XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTmFtZSBhIG5ldyBjYXRlZ29yeVwiXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmV3Q2F0ZWdvcnkoZSl9XHJcbiAgICAgICAgICAgIGVycm9yPXtlcnJvcn1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAobmV3Q2F0ZWdvcnkgPT0gXCJcIikgc2V0RXJyb3IoXCJQbGVhc2UgZ2l2ZSBhIG5hbWVcIilcclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzZXRFcnJvcihcIlwiKVxyXG4gICAgICAgICAgICAgICAgcGlubmVkRE1TLmFkZENhdGVnb3J5KG5ld0NhdGVnb3J5KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfX0+XHJcbiAgICAgICAgICAgIEFkZFxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgPC9GbGV4PlxyXG59XHJcblxyXG5pbnRlcmZhY2UgQ2F0ZWdvcnlQcm9wcyB7XHJcbiAgICBuYW1lOiBzdHJpbmdcclxuICAgIHVzZXJzOiBzdHJpbmdbXVxyXG4gICAgaW5kZXg6IG51bWJlcixcclxuICAgIGhpZGRlbj86IGJvb2xlYW5cclxufVxyXG5leHBvcnQgY29uc3QgVXNlckNhdGVnb3J5ID0gKHsgbmFtZSwgdXNlcnMsIGluZGV4LCBoaWRkZW4gPSB0cnVlIH06IENhdGVnb3J5UHJvcHMpID0+IHtcclxuICAgIGNvbnN0IFtoaWRlLCBzZXRIaWRlXSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KGhpZGRlbilcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYga2V5PXtuYW1lfSBjbGFzc05hbWU9e3N0eWxlcy5jYXRlZ29yeX0+XHJcbiAgICAgICAgICAgIDxDYXRlZ29yeUhlYWRlciB7Li4ueyBuYW1lLCBpbmRleCB9fSBvbkhpZGU9eygpID0+IHNldEhpZGUoIWhpZGUpfSBoaWRkZW49e2hpZGV9IC8+XHJcblxyXG4gICAgICAgICAgICB7IWhpZGUgJiYgPGRpdiBjbGFzc05hbWU9e2pvaW5DbGFzc2VzKHN0eWxlcy51c2VyTGlzdCwgY2xhc3Nlcy5TY3JvbGxpbmcuc2Nyb2xsZXJCYXNlLCBjbGFzc2VzLlNjcm9sbGluZy50aGluLCBjbGFzc2VzLlNjcm9sbGluZy5mYWRlKX0+XHJcbiAgICAgICAgICAgICAgICB7dXNlcnMubGVuZ3RoICE9PSAwID8gdXNlcnMubWFwKChpZCwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8VXNlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD17aWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uTW92ZT17KHVwZG4pID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwaW5uZWRETVMuc2V0VXNlckxpc3QoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb3ZlQXJyYXkoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXggLSAodXBkbiA9PT0gXCJ1cFwiID8gKzEgOiAtMSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25SZW1vdmU9eygpID0+IHBpbm5lZERNUy5yZW1vdmVVc2VyKG5hbWUsIGlkKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZVVwPXtpbmRleCA9PT0gMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZURvd249e2luZGV4ID09PSB1c2Vycy5sZW5ndGggLSAxfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICApKSA6IDw+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyMCkgPT09IDMgLy9lYXN0ZXIgZWdnIHdvb29vb29cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gPGlmcmFtZSB3aWR0aD1cIjU2MFwiIGhlaWdodD1cIjMxNVwiIHNyYz1cImh0dHBzOi8vd3d3LnlvdXR1YmUtbm9jb29raWUuY29tL2VtYmVkL3RqczJ4UjJSWnAwP2NvbnRyb2xzPTBcIiBhbGxvdz1cImNsaXBib2FyZC13cml0ZTsgZW5jcnlwdGVkLW1lZGlhXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5lbXB0eX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxFbXB0eVN0YXRlIHRoZW1lPXtVc2VyU2V0dGluZ3MudGhlbWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEVtcHR5U3RhdGVJbWFnZSB7Li4ue1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid2lkdGhcIjogMzc2LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaGVpZ2h0XCI6IDE2MixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxpZ2h0U3JjXCI6IFwiL2Fzc2V0cy8wMjYyNWVlMjlmODUxZWM1ODhjMjAyMGE4OGQ4MjY2NS5zdmdcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhcmtTcmNcIjogXCIvYXNzZXRzL2I1ZWIyZjdkNmIzZjhjYzliNjBiZTRhNWRjZjI4MDE1LnN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEVtcHR5U3RhdGVUZXh0IG5vdGU9ezw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhpcyBjYXRlZ29yeSBpcyBlbXB0eS4gT2ggbmV2ZXJtaW5kLCB0aGVyZSBpcyBXdW1wdXMsIGJ1dCBoZSBpcyBhbG9uZS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9FbXB0eVN0YXRlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC8+fVxyXG4gICAgICAgICAgICA8L2Rpdj59XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmludGVyZmFjZSBIZWFkZXJQcm9wcyB7XHJcbiAgICBuYW1lOiBzdHJpbmdcclxuICAgIGluZGV4OiBudW1iZXJcclxuICAgIGhpZGRlbj86IGJvb2xlYW5cclxuICAgIG9uSGlkZTogRnVuY3Rpb25cclxufVxyXG5jb25zdCBDYXRlZ29yeUhlYWRlciA9ICh7IG5hbWUsIGluZGV4LCBoaWRkZW4gPSBmYWxzZSwgb25IaWRlIH06IEhlYWRlclByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBoYW5kbGVDYXRlZ29yeVBvcyA9ICh1cGRuOiBudW1iZXIpID0+IHtcclxuICAgICAgICAvLyAtMSA9IG1vdmUgZG93biBieSBvbmVcclxuICAgICAgICAvLyArMSA9IG1vdmUgdXAgYnkgb25lXHJcblxyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gT2JqZWN0LmtleXMocGlubmVkRE1TLmdldEFsbCgpKS5maW5kSW5kZXgoXHJcbiAgICAgICAgICAgIChrKSA9PiBrID09PSBuYW1lXHJcbiAgICAgICAgKVxyXG4gICAgICAgIHBpbm5lZERNUy5zZXRSYXcoXHJcbiAgICAgICAgICAgIG1vdmVPYmplY3RLZXkocGlubmVkRE1TLmdldEFsbCgpLCBpbmRleCwgaW5kZXggLSB1cGRuKSBhcyBQaW5uZWRETVNcclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIDxGbGV4IGFsaWduPXtGbGV4LkFsaWduLkNFTlRFUn0+XHJcbiAgICAgICAgPExpc3RTZWN0aW9uSXRlbVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2pvaW5DbGFzc2VzKGNsYXNzZXMuUHJpdmF0ZUNoYW5uZWxzSGVhZGVyQ29udGFpbmVyLnByaXZhdGVDaGFubmVsc0hlYWRlckNvbnRhaW5lciwgc3R5bGVzLmV4YW1wbGVMaXN0U2VjdGlvbkl0ZW0pfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPEZsZXggc3R5bGU9e3sgY29sb3I6IHBpbm5lZERNUy5nZXRDb2xvcihuYW1lKSwgZm9udFdlaWdodDogXCJib2xkXCIgfX0gYWxpZ249e0ZsZXguQWxpZ24uQ0VOVEVSfSBvbkNsaWNrPXtvbkhpZGV9PlxyXG4gICAgICAgICAgICAgICAgPERpc2NvcmRJY29uIG5hbWU9XCJEcm9wZG93bkFycm93XCIgY2xhc3NOYW1lPXtqb2luQ2xhc3NlcyhzdHlsZXMuZHJvcGRvd25BcnJvdywgaGlkZGVuID8gc3R5bGVzLmhpZGRlbiA6IHVuZGVmaW5lZCl9IC8+XHJcbiAgICAgICAgICAgICAgICB7bmFtZX1cclxuICAgICAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgIDwvTGlzdFNlY3Rpb25JdGVtPlxyXG5cclxuICAgICAgICA8UG9wb3V0IHBvc2l0aW9uPXtQb3BvdXQuUG9zaXRpb25zLkJPVFRPTX0gcmVuZGVyUG9wb3V0PXsocHJvcHMpID0+IDxkaXYgey4uLnByb3BzfT5cclxuICAgICAgICAgICAgPENoYW5nZUNhdGVnb3J5TmFtZU1vZGFsIHRyYW5zaXRpb25TdGF0ZT17MX0gb25DbG9zZT17cHJvcHMuY2xvc2VQb3BvdXR9IGNhdGVnb3J5PXtuYW1lfSAvPlxyXG4gICAgICAgIDwvZGl2Pn0+XHJcbiAgICAgICAgICAgIHsocG9wb3V0KSA9PiA8VG9vbHRpcENvbnRhaW5lciB0ZXh0PVwiRWRpdCBjYXRlZ29yeVwiPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB7Li4ucG9wb3V0fVxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU9e0J1dHRvbi5TaXplcy5JQ09OfVxyXG4gICAgICAgICAgICAgICAgICAgIGxvb2s9e0J1dHRvbi5Mb29rcy5CTEFOS31cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2pvaW5DbGFzc2VzKGNsYXNzZXMuQWNjb3VudENvbnRyb2xCdXR0b25zLmJ1dHRvbiwgY2xhc3Nlcy5BY2NvdW50Q29udHJvbEJ1dHRvbnMuZW5hYmxlZCl9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPERpc2NvcmRJY29uIG5hbWU9XCJQZW5jaWxcIiBzdHlsZT17eyB3aWR0aDogXCIyMHB4XCIsIGhlaWdodDogXCIyMHB4XCIgfX0gLz5cclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L1Rvb2x0aXBDb250YWluZXI+fVxyXG4gICAgICAgIDwvUG9wb3V0PlxyXG5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblJpZ2h0OiBcImF1dG9cIiB9fSAvPlxyXG5cclxuICAgICAgICA8UG9wb3V0IHBvc2l0aW9uPXtQb3BvdXQuUG9zaXRpb25zLkxFRlR9IHJlbmRlclBvcG91dD17KHByb3BzKSA9PiA8ZGl2IHsuLi5wcm9wc30+XHJcbiAgICAgICAgICAgIDxBZGRVc2VyTW9kYWwgdHJhbnNpdGlvblN0YXRlPXsxfSBvbkNsb3NlPXtwcm9wcy5jbG9zZVBvcG91dH0gb25TZWxlY3Q9eyh1c2VyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodXNlci5pZCAhPSBudWxsKSBwaW5uZWRETVMuYWRkVXNlcihuYW1lLCB1c2VyLmlkKVxyXG4gICAgICAgICAgICB9fSAvPlxyXG4gICAgICAgIDwvZGl2Pn0+XHJcbiAgICAgICAgICAgIHsocG9wb3V0KSA9PiA8VG9vbHRpcENvbnRhaW5lciB0ZXh0PVwiQWRkIGEgbmV3IHBlcnNvblwiPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB7Li4ucG9wb3V0fVxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU9e0J1dHRvbi5TaXplcy5JQ09OfVxyXG4gICAgICAgICAgICAgICAgICAgIGxvb2s9e0J1dHRvbi5Mb29rcy5CTEFOS31cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2pvaW5DbGFzc2VzKGNsYXNzZXMuQWNjb3VudENvbnRyb2xCdXR0b25zLmJ1dHRvbiwgY2xhc3Nlcy5BY2NvdW50Q29udHJvbEJ1dHRvbnMuZW5hYmxlZCl9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPERpc2NvcmRJY29uIG5hbWU9XCJQZXJzb25BZGRcIiBzdHlsZT17eyB3aWR0aDogXCIyMHB4XCIsIGhlaWdodDogXCIyMHB4XCIgfX0gLz5cclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L1Rvb2x0aXBDb250YWluZXI+fVxyXG4gICAgICAgIDwvUG9wb3V0PlxyXG5cclxuICAgICAgICA8RmxleFxyXG4gICAgICAgICAgICBkaXJlY3Rpb249e0ZsZXguRGlyZWN0aW9uLlZFUlRJQ0FMfVxyXG4gICAgICAgICAgICBncm93PXswfVxyXG4gICAgICAgICAgICBzaHJpbms9ezB9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICBzaXplPXtCdXR0b24uU2l6ZXMuSUNPTn1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNhdGVnb3J5UG9zKCsxKX1cclxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXtpbmRleCA9PT0gMH1cclxuICAgICAgICAgICAgICAgIGxvb2s9e0J1dHRvbi5Mb29rcy5CTEFOS31cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17am9pbkNsYXNzZXMoY2xhc3Nlcy5BY2NvdW50Q29udHJvbEJ1dHRvbnMuYnV0dG9uLCBpbmRleCA9PT0gMCA/IGNsYXNzZXMuQWNjb3VudENvbnRyb2xCdXR0b25zLmRpc2FibGVkIDogY2xhc3Nlcy5BY2NvdW50Q29udHJvbEJ1dHRvbnMuZW5hYmxlZCl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxEaXNjb3JkSWNvbiBuYW1lPVwiQXJyb3dEcm9wVXBcIiAvPlxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgc2l6ZT17QnV0dG9uLlNpemVzLklDT059XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDYXRlZ29yeVBvcygtMSl9XHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17aW5kZXggPT09IHBpbm5lZERNUy5nZXRDYXRlZ29yaWVzKCkubGVuZ3RoIC0gMX1cclxuICAgICAgICAgICAgICAgIGxvb2s9e0J1dHRvbi5Mb29rcy5CTEFOS31cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17am9pbkNsYXNzZXMoY2xhc3Nlcy5BY2NvdW50Q29udHJvbEJ1dHRvbnMuYnV0dG9uLCBpbmRleCA9PT0gcGlubmVkRE1TLmdldENhdGVnb3JpZXMoKS5sZW5ndGggLSAxID8gY2xhc3Nlcy5BY2NvdW50Q29udHJvbEJ1dHRvbnMuZGlzYWJsZWQgOiBjbGFzc2VzLkFjY291bnRDb250cm9sQnV0dG9ucy5lbmFibGVkKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPERpc2NvcmRJY29uIG5hbWU9XCJBcnJvd0Ryb3BEb3duXCIgLz5cclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgIDxUb29sdGlwQ29udGFpbmVyIHRleHQ9XCJEZWxldGVcIj5cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgc2l6ZT17QnV0dG9uLlNpemVzLklDT059XHJcbiAgICAgICAgICAgICAgICBjb2xvcj17QnV0dG9uLkNvbG9ycy5SRUR9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBwaW5uZWRETVMucmVtb3ZlQ2F0ZWdvcnkobmFtZSl9XHJcbiAgICAgICAgICAgICAgICBsb29rPXtCdXR0b24uTG9va3MuTElOS31cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPERpc2NvcmRJY29uIG5hbWU9XCJUcmFzaFwiIC8+XHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvVG9vbHRpcENvbnRhaW5lcj5cclxuICAgIDwvRmxleD5cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCAoanNvbjogc3RyaW5nKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIEpTT04ucGFyc2UoanNvbik7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9IGNhdGNoIChlKSB7fVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59IiwiaW1wb3J0IHsgRGlzcGF0Y2hlciwgUmVhY3QsIE1vZGFsQWN0aW9ucyB9IGZyb20gXCJpdHRhaS93ZWJwYWNrXCJcclxuaW1wb3J0IHsgQ2F0ZWdvcnksIFN3aXRjaEl0ZW0sIEZvcm1zLCBCdXR0b24sIEZsZXgsIFJhZGlvR3JvdXAsIE1vZGFsLCBIZWFkaW5nLCBUZXh0IH0gZnJvbSBcIml0dGFpL2NvbXBvbmVudHNcIlxyXG5pbXBvcnQgVXNlckxpc3RTZXR0aW5ncyBmcm9tIFwiLi9Vc2VyTGlzdFNldHRpbmdzXCJcclxuaW1wb3J0ICogYXMgc2V0dGluZ3MgZnJvbSBcIml0dGFpL3NldHRpbmdzXCJcclxuaW1wb3J0ICogYXMgdG9hc3QgZnJvbSBcIml0dGFpL3RvYXN0XCJcclxuaW1wb3J0ICogYXMgY29uc3RhbnRzIGZyb20gXCIuLi9jb25zdGFudHNcIlxyXG4vL0B0cy1pZ25vcmVcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9TZXR0aW5ncy5zY3NzXCJcclxuaW1wb3J0IGlzVmFsaWRKU09OIGZyb20gXCIuLi91dGlscy9pc1ZhbGlkSlNPTlwiXHJcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuLi91dGlscy9jbGFzc2VzXCJcclxuaW1wb3J0IGpvaW5DbGFzc2VzIGZyb20gXCIuLi91dGlscy9qb2luQ2xhc3Nlc1wiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcclxuICAgIGNvbnN0IFssIGZvcmNlVXBkYXRlXSA9IFJlYWN0LnVzZVJlZHVjZXIoKHYpID0+ICF2LCBmYWxzZSlcclxuXHJcbiAgICByZXR1cm4gPD5cclxuICAgICAgICA8Q2F0ZWdvcnkgdGl0bGU9XCJMaXN0ZWQgY2F0ZWdvcmllc1wiIGRlc2NyaXB0aW9uPVwiQ29uZmlndXJlIHRoZSBmb2xkZXJzIGFuZCBhZGQgb3IgY2hhbmdlIHRoZSBsaXN0ZWQgdXNlcnNcIiBpY29uPVwiUGVyc29uXCI+XHJcbiAgICAgICAgICAgIDxVc2VyTGlzdFNldHRpbmdzIC8+XHJcbiAgICAgICAgPC9DYXRlZ29yeT5cclxuXHJcbiAgICAgICAgPENhdGVnb3J5IHRpdGxlPVwiT3RoZXIgc2V0dGluZ3NcIiBkZXNjcmlwdGlvbj1cIk90aGVyIHNldHRpbmdzIHRoYXQgeW91IGNhbiB0d2Vha1wiIGljb249XCJHZWFyXCI+XHJcbiAgICAgICAgICAgIDxGb3Jtcy5Gb3JtU2VjdGlvbj5cclxuICAgICAgICAgICAgICAgIDxGb3Jtcy5Gb3JtSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybXMuRm9ybVRpdGxlPkRpc3BsYXkgbW9kZTwvRm9ybXMuRm9ybVRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxSYWRpb0dyb3VwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e1tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgbmFtZTogXCJDYXRlZ29yeVwiLCB2YWx1ZTogY29uc3RhbnRzLlNldHRpbmdzLkRlZmF1bHRTZXR0aW5ncy5DYXRlZ29yeVZpZXcuc2V0dGluZ3NWYWx1ZSB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBuYW1lOiBcIk1pbmltYWxpc3RcIiwgdmFsdWU6IGNvbnN0YW50cy5TZXR0aW5ncy5EZWZhdWx0U2V0dGluZ3MuTWluaW1hbGlzdFZpZXcuc2V0dGluZ3NWYWx1ZSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZXR0aW5ncy5nZXQoXCJkaXNwbGF5XCIsIGNvbnN0YW50cy5TZXR0aW5ncy5EZWZhdWx0U2V0dGluZ3MuRElTUExBWV9NT0RFKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5ncy5zZXQoXCJkaXNwbGF5XCIsIHYudmFsdWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBEaXNwYXRjaGVyLmRpcnR5RGlzcGF0Y2goeyB0eXBlOiBjb25zdGFudHMuRElTUEFUQ0hFUl9QSU5ETVNfQ0hBTkdFX0xJU1QgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcmNlVXBkYXRlKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3Jtcy5Gb3JtRGl2aWRlciBjbGFzc05hbWU9e2pvaW5DbGFzc2VzKGNsYXNzZXMuTWFyZ2lucy5tYXJnaW5Cb3R0b20yMCwgY2xhc3Nlcy5NYXJnaW5zLm1hcmdpblRvcDIwKX0gLz5cclxuICAgICAgICAgICAgICAgIDwvRm9ybXMuRm9ybUl0ZW0+XHJcblxyXG4gICAgICAgICAgICAgICAge3NldHRpbmdzLmdldChcImRpc3BsYXlcIiwgY29uc3RhbnRzLlNldHRpbmdzLkRlZmF1bHRTZXR0aW5ncy5ESVNQTEFZX01PREUpID09PSBjb25zdGFudHMuU2V0dGluZ3MuRGVmYXVsdFNldHRpbmdzLk1pbmltYWxpc3RWaWV3LnNldHRpbmdzVmFsdWUgJiYgPENhdGVnb3J5IHRpdGxlPVwiTWluaW1hbGlzdCB2aWV3IHNldHRpbmdzXCIgZGVzY3JpcHRpb249XCJBZGRpdGlvbmFsIGNvbmZpZ3VyYXRpb24gZm9yIHRoZSBNaW5pbWFsaXN0IFZpZXdcIj5cclxuICAgICAgICAgICAgICAgICAgICA8U3dpdGNoSXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2V0dGluZ3MuZ2V0KFwibWluaW1hbC51c2VySWNvbnNcIiwgY29uc3RhbnRzLlNldHRpbmdzLkRlZmF1bHRTZXR0aW5ncy5NaW5pbWFsaXN0Vmlldy51c2VySWNvbnMpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzLnNldChcIm1pbmltYWwudXNlckljb25zXCIsIGUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBEaXNwYXRjaGVyLmRpcnR5RGlzcGF0Y2goeyB0eXBlOiBjb25zdGFudHMuRElTUEFUQ0hFUl9QSU5ETVNfQ0hBTkdFX0xJU1QgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICA+U2hvdyB1c2VyIGljb25zPC9Td2l0Y2hJdGVtPlxyXG4gICAgICAgICAgICAgICAgPC9DYXRlZ29yeT59XHJcblxyXG4gICAgICAgICAgICAgICAgPFN3aXRjaEl0ZW1cclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2V0dGluZ3MuZ2V0KFwicGluSWNvblwiLCBjb25zdGFudHMuU2V0dGluZ3MuRGVmYXVsdFNldHRpbmdzLlBJTl9JQ09OKX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldHRpbmdzLnNldChcInBpbkljb25cIiwgZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgbm90ZT1cIkFkZHMgYW4gcGluIGljb24gdG8gdGhlIHVzZXIgc28geW91IGNhbiBhZGQgaXQgcXVpY2tseSB0byBhIGNhdGVnb3J5XCJcclxuICAgICAgICAgICAgICAgID5BZGQgYSBxdWljayBzaG9ydGN1dCB0byBhZGQgcGVvcGxlIG9uIGNhdGVnb3JpZXM8L1N3aXRjaEl0ZW0+XHJcblxyXG4gICAgICAgICAgICAgICAgPFN3aXRjaEl0ZW1cclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2V0dGluZ3MuZ2V0KFwic3RyZWFtZXJNb2RlXCIsIGNvbnN0YW50cy5TZXR0aW5ncy5EZWZhdWx0U2V0dGluZ3MuU1RSRUFNRVJfTU9ERSl9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXR0aW5ncy5zZXQoXCJzdHJlYW1lck1vZGVcIiwgZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgbm90ZT1cIldoZW4gU3RyZWFtZXIgbW9kZSBpcyBlbmFibGVkLCBpdCB3aWxsIGF1dG9tYXRpY2FsbHkgaGlkZSB0aGUgY2F0ZWdvcmllc1wiXHJcbiAgICAgICAgICAgICAgICA+SGlkZSB1c2VycyB3aGVuIFN0cmVhbWVyIG1vZGUgaXMgZW5hYmxlZDwvU3dpdGNoSXRlbT5cclxuXHJcbiAgICAgICAgICAgICAgICA8Rm9ybXMuRm9ybUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1zLkZvcm1UaXRsZT5FeHBvcnQgYW5kIGltcG9ydCBzZXR0aW5nczwvRm9ybXMuRm9ybVRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGbGV4IGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbkZsZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUV4cG9ydH0+RXhwb3J0PC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY29sb3I9e0J1dHRvbi5Db2xvcnMuUkVEfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlSW1wb3J0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+SW1wb3J0PC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgICAgICAgICAgPC9Gb3Jtcy5Gb3JtSXRlbT5cclxuICAgICAgICAgICAgPC9Gb3Jtcy5Gb3JtU2VjdGlvbj5cclxuICAgICAgICA8L0NhdGVnb3J5PlxyXG4gICAgPC8+XHJcbn1cclxuXHJcbmNvbnN0IGhhbmRsZUV4cG9ydCA9IGFzeW5jICgpID0+IHtcclxuICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgcmV0dXJuIERpc2NvcmROYXRpdmUuZmlsZU1hbmFnZXIuc2F2ZVdpdGhEaWFsb2coSlNPTi5zdHJpbmdpZnkoc2V0dGluZ3MuZ2V0QWxsKCkpLCBcInNldHRpbmdzLmpzb25cIilcclxufVxyXG5cclxuY29uc3QgaGFuZGxlSW1wb3J0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgLy9AdHMtaWdub3JlXHJcbiAgICBjb25zdCBbc2VsZWN0ZWRGaWxlXSA9IGF3YWl0IERpc2NvcmROYXRpdmUuZmlsZU1hbmFnZXIub3BlbkZpbGVzKFwiKi5qc29uXCIpXHJcbiAgICBjb25zdCBuZXdTZXR0aW5nc1RleHQgPSBuZXcgVGV4dERlY29kZXIoKS5kZWNvZGUobmV3IFVpbnQ4QXJyYXkoc2VsZWN0ZWRGaWxlLmRhdGEgYXMgQXJyYXlCdWZmZXIpKVxyXG4gICAgaWYgKCFpc1ZhbGlkSlNPTihuZXdTZXR0aW5nc1RleHQpKSByZXR1cm4gdm9pZCB0b2FzdC5zaG93KFwiSW52YWxpZCBzZXR0aW5ncyBmaWxlLiBJdCBzaG91bGQgZW5kIHdpdGggXFxcIi5qc29uXFxcIi5cIiwge1xyXG4gICAgICAgIGR1cmF0aW9uOiA1MDAwXHJcbiAgICB9KVxyXG4gICAgY29uc3QgbmV3U2V0dGluZ3M6IEpTT04gPSBKU09OLnBhcnNlKG5ld1NldHRpbmdzVGV4dClcclxuICAgIFxyXG4gICAgY29uc3Qgb3ZlcnJpZGVTZXR0aW5ncyA9ICgpID0+IHtcclxuICAgICAgICBzZXR0aW5ncy5yZXNldCgpXHJcbiAgICAgICAgc2V0dGluZ3Muc2V0QWxsKG5ld1NldHRpbmdzKVxyXG4gICAgfVxyXG5cclxuICAgIE1vZGFsQWN0aW9ucy5vcGVuTW9kYWwocHJvcHMgPT4gPE1vZGFsLk1vZGFsUm9vdCB7Li4ucHJvcHN9IHNpemU9e01vZGFsLk1vZGFsU2l6ZS5TTUFMTH0+XHJcbiAgICAgICAgPE1vZGFsLk1vZGFsSGVhZGVyIHNlcGFyYXRvcj17ZmFsc2V9PlxyXG4gICAgICAgICAgICA8SGVhZGluZyB2YXJpYW50PVwiaGVhZGluZy1sZy9tZWRpdW1cIj5TYXZlIGEgYmFja3VwPC9IZWFkaW5nPlxyXG4gICAgICAgIDwvTW9kYWwuTW9kYWxIZWFkZXI+XHJcbiAgICAgICAgPE1vZGFsLk1vZGFsQ29udGVudD5cclxuICAgICAgICAgICAgPFRleHQ+RG8geW91IHdhbnQgdG8gc2F2ZSBhIGJhY2t1cD88L1RleHQ+XHJcbiAgICAgICAgPC9Nb2RhbC5Nb2RhbENvbnRlbnQ+XHJcbiAgICAgICAgPE1vZGFsLk1vZGFsRm9vdGVyPlxyXG4gICAgICAgICAgICA8RmxleCBzdHlsZT17e2dhcDogXCI4cHhcIn19IGp1c3RpZnk9e0ZsZXguSnVzdGlmeS5FTkR9PlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBsb29rPXtCdXR0b24uTG9va3MuTElOS30gY29sb3I9e0J1dHRvbi5Db2xvcnMuV0hJVEV9IG9uQ2xpY2s9e3Byb3BzLm9uQ2xvc2V9PlxyXG4gICAgICAgICAgICAgICAgICAgIENhbmNlbFxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIGxvb2s9e0J1dHRvbi5Mb29rcy5MSU5LfSBjb2xvcj17QnV0dG9uLkNvbG9ycy5SRUR9IG9uQ2xpY2s9eygpID0+IHsgb3ZlcnJpZGVTZXR0aW5ncygpOyBwcm9wcy5vbkNsb3NlKCkgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgT3ZlcnJpZGUgd2l0aG91dCBzYXZpbmdcclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXthc3luYyAoKSA9PiB7IGF3YWl0IGhhbmRsZUV4cG9ydCgpOyBvdmVycmlkZVNldHRpbmdzKCk7IHByb3BzLm9uQ2xvc2UoKTsgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgU2F2ZVxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICA8L01vZGFsLk1vZGFsRm9vdGVyPlxyXG4gICAgPC9Nb2RhbC5Nb2RhbFJvb3Q+KVxyXG5cclxuICAgIC8vIGNvbnN0IHN0dWZmOiB7IGRhdGE6IEFycmF5QnVmZmVyLCBmaWxlbmFtZTogc3RyaW5nIH0gPSBhd2FpdCBEaXNjb3JkTmF0aXZlLmZpbGVNYW5hZ2VyLm9wZW5GaWxlcyhcIiouanNvblwiKVxyXG4gICAgLy8gY29uc29sZS5sb2coc3R1ZmYpXHJcbn0iLCJpbXBvcnQgeyBSZWFjdCwgTW9kYWxBY3Rpb25zIH0gZnJvbSBcIml0dGFpL3dlYnBhY2tcIlxyXG5pbXBvcnQgeyBNb2RhbCB9IGZyb20gXCJpdHRhaS9jb21wb25lbnRzXCJcclxuaW1wb3J0IFVzZXJMaXN0U2V0dGluZ3MsIHsgQ3JlYXRlQ2F0ZWdvcnkgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9Vc2VyTGlzdFNldHRpbmdzXCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChvcGVuZWRDYXRlZ29yeT86IHN0cmluZykgPT4ge1xyXG4gICAgTW9kYWxBY3Rpb25zLm9wZW5Nb2RhbCgocHJvcHMpID0+IDxNb2RhbC5Nb2RhbFJvb3Qgey4uLnByb3BzfSBzaXplPXtNb2RhbC5Nb2RhbFNpemUuTUVESVVNfT5cclxuICAgICAgICA8TW9kYWwuTW9kYWxIZWFkZXIgc2VwYXJhdG9yPXtmYWxzZX0+XHJcbiAgICAgICAgICAgIDxDcmVhdGVDYXRlZ29yeSAvPlxyXG4gICAgICAgIDwvTW9kYWwuTW9kYWxIZWFkZXI+XHJcbiAgICAgICAgPE1vZGFsLk1vZGFsQ29udGVudD5cclxuICAgICAgICAgICAgPFVzZXJMaXN0U2V0dGluZ3Mgey4uLnsgb3BlbmVkQ2F0ZWdvcnkgfX0gc2hvd0FkZENhdGVnb3J5QnV0dG9uPXtmYWxzZX0gLz5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nQm90dG9tOiBcIjE2cHhcIiB9fSAvPlxyXG4gICAgICAgIDwvTW9kYWwuTW9kYWxDb250ZW50PlxyXG4gICAgPC9Nb2RhbC5Nb2RhbFJvb3Q+KVxyXG59IiwiaW1wb3J0IHsgUmVhY3QsIENvbnRleHRNZW51IGFzIENvbnRleHRNZW51SGFuZGxlciB9IGZyb20gXCJpdHRhaS93ZWJwYWNrXCJcclxuaW1wb3J0IHsgQnV0dG9uLCBDb250ZXh0TWVudSB9IGZyb20gXCJpdHRhaS9jb21wb25lbnRzXCJcclxuaW1wb3J0IHsgbWVzc2FnZUJveCB9IGZyb20gXCJpdHRhaS91dGlsaXRpZXNcIlxyXG5pbXBvcnQgb3BlbkNhdGVnb3J5U2V0dGluZ3MgZnJvbSBcIi4uLy4uL3V0aWxzL29wZW5DYXRlZ29yeVNldHRpbmdzXCJcclxuaW1wb3J0IHBpbm5lZERNUyBmcm9tIFwiLi4vLi4vaGFuZGxlcnMvcGlubmVkRE1TXCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChwcm9wczogeyBjYXRlZ29yeTogc3RyaW5nIH0pIHtcclxuICAgIHJldHVybiA8Q29udGV4dE1lbnUgbmF2SWQ9e1wicGluLXVzZXJcIn0gb25DbG9zZT17Q29udGV4dE1lbnVIYW5kbGVyLmNsb3NlQ29udGV4dE1lbnV9PlxyXG4gICAgICAgIDxDb250ZXh0TWVudS5NZW51SXRlbSBpZD1cImVkaXRcIlxyXG4gICAgICAgICAgICBsYWJlbD1cIkVkaXQgY2F0ZWdvcnlcIlxyXG4gICAgICAgICAgICBhY3Rpb249eygpID0+IG9wZW5DYXRlZ29yeVNldHRpbmdzKHByb3BzLmNhdGVnb3J5KX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxDb250ZXh0TWVudS5NZW51SXRlbSBpZD1cImRlbGV0ZVwiXHJcbiAgICAgICAgICAgIGxhYmVsPVwiRGVsZXRlIGNhdGVnb3J5XCJcclxuICAgICAgICAgICAgY29sb3I9XCJjb2xvckRhbmdlclwiXHJcbiAgICAgICAgICAgIGFjdGlvbj17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZUJveChcIkRlbGV0ZVwiLCBgQXJlIHlvdSBzdXJlIHRoYXQgeW91IHdhbnQgdG8gZGVsZXRlIFwiJHtwcm9wcy5jYXRlZ29yeX1cIj9gLCBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIkRlbGV0ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb246ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBpbm5lZERNUy5yZW1vdmVDYXRlZ29yeShwcm9wcy5jYXRlZ29yeSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IEJ1dHRvbi5Db2xvcnMuUkVEXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiQ2FuY2VsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbjogKCkgPT4ge30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBCdXR0b24uQ29sb3JzLldISVRFLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb29rOiBCdXR0b24uTG9va3MuTElOS1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF0pXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgLz5cclxuICAgIDwvQ29udGV4dE1lbnU+XHJcbn1cclxuXHJcbiIsImltcG9ydCAqIGFzIHBhdGNoZXIgZnJvbSBcIml0dGFpL3BhdGNoZXJcIlxyXG5pbXBvcnQgKiBhcyB3ZWJwYWNrIGZyb20gXCJpdHRhaS93ZWJwYWNrXCJcclxuaW1wb3J0IHsgUmVhY3QsIERpc3BhdGNoZXIgfSBmcm9tIFwiaXR0YWkvd2VicGFja1wiXHJcbmltcG9ydCB7IENoYW5uZWxzLCBDdXJyZW50Q2hhbm5lbHMsIFVzZXJzIH0gZnJvbSBcIml0dGFpL3N0b3Jlc1wiXHJcbmltcG9ydCB7IGZpbmRJblJlYWN0VHJlZSwgc2VhcmNoQ2xhc3NOYW1lTW9kdWxlcyB9IGZyb20gXCJpdHRhaS91dGlsaXRpZXNcIlxyXG5pbXBvcnQgeyBEaXNjb3JkSWNvbiwgRmxleCwgTW9kYWwsIFBvcG91dCwgVGV4dCB9IGZyb20gXCJpdHRhaS9jb21wb25lbnRzXCJcclxuaW1wb3J0ICogYXMgc2V0dGluZ3MgZnJvbSBcIml0dGFpL3NldHRpbmdzXCJcclxuXHJcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuLi91dGlscy9jbGFzc2VzXCJcclxuaW1wb3J0IHBpbm5lZERNUywge3VzZUxpc3RVcGRhdGV9IGZyb20gXCIuLi9oYW5kbGVycy9waW5uZWRETVNcIlxyXG5pbXBvcnQgam9pbkNsYXNzZXMgZnJvbSBcIi4uL3V0aWxzL2pvaW5DbGFzc2VzXCJcclxuaW1wb3J0ICogYXMgY29uc3RhbnRzIGZyb20gXCIuLi9jb25zdGFudHNcIlxyXG4vL0B0cy1pZ25vcmVcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9kbWxpc3Quc2Nzc1wiXHJcbmltcG9ydCBvcGVuQ2F0ZWdvcnlTZXR0aW5ncyBmcm9tIFwiLi4vdXRpbHMvb3BlbkNhdGVnb3J5U2V0dGluZ3NcIlxyXG5pbXBvcnQgQ2F0ZWdvcnlDb250ZXh0TWVudSBmcm9tIFwiLi4vY29tcG9uZW50cy9Db250ZXh0TWVudXMvQ2F0ZWdvcnlcIlxyXG5cclxuY29uc3QgTGlzdFNlY3Rpb25JdGVtID0gd2VicGFjay5maW5kQnlEaXNwbGF5TmFtZShcIkxpc3RTZWN0aW9uSXRlbVwiKVxyXG5jb25zdCB7IERpcmVjdE1lc3NhZ2UgfSA9IHdlYnBhY2suZmluZEJ5UHJvcHMoXCJEaXJlY3RNZXNzYWdlXCIpXHJcbmNvbnN0IHsgTnVtYmVyQmFkZ2UgfSA9IHdlYnBhY2suZmluZEJ5UHJvcHMoXCJOdW1iZXJCYWRnZVwiKVxyXG5jb25zdCB7IGdldE1lbnRpb25Db3VudCB9ID0gd2VicGFjay5maW5kQnlQcm9wcyhcImdldE1lbnRpb25Db3VudFwiKVxyXG5jb25zdCBVc2VyU3VtbWFyeUl0ZW0gPSB3ZWJwYWNrLmZpbmRCeURpc3BsYXlOYW1lKFwiVXNlclN1bW1hcnlJdGVtXCIpXHJcblxyXG5jb25zdCBVU0VSX0lDT05fU0laRSA9IDE2XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcclxuICAgIGxldCBQaW5ETVNSZW5kZXIgPSAoKSA9PiA8Q3VycmVudExpc3RzIC8+XHJcbiAgICAvL0B0cy1pZ25vcmVcclxuICAgIFBpbkRNU1JlbmRlci5kaXNwbGF5TmFtZSA9IFwiUGlubmVkRE1TXCJcclxuXHJcbiAgICAvLyB3ZWJwYWNrLkRpc3BhdGNoZXIuc3Vic2NyaWJlKFwiQ0hBTk5FTF9VTlJFQURfVVBEQVRFXCIsIGNvbnNvbGUubG9nKVxyXG4gICAgXHJcbiAgICBwYXRjaGVyLmFmdGVyKFwiRE1MaXN0UGF0Y2hcIiwgd2VicGFjay5maW5kKG0gPT4gbT8uZGVmYXVsdD8uZGlzcGxheU5hbWUgPT09IFwiQ29ubmVjdGVkUHJpdmF0ZUNoYW5uZWxzTGlzdFwiKSwgXCJkZWZhdWx0XCIsIChbcHJvcHNdLCByZXMsIF90aGlzKSA9PiB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coe3Byb3BzLCByZXMsIF90aGlzfSlcclxuICAgICAgICB1c2VMaXN0VXBkYXRlKCkgLy90ZW1wb3JhcnksIHdpbGwgcmVtb3ZlIGxhdGVyXHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IFByaXZhdGVDaGFubmVsc0xpc3Q6IHtwcm9wczoge2NoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGVbXSwgcHJpdmF0ZUNoYW5uZWxJZHM6IHN0cmluZ1tdfSwgdHlwZTogYW55fSA9IGZpbmRJblJlYWN0VHJlZShyZXMsIChtOiB7IHR5cGU6IHsgZGlzcGxheU5hbWU6IHN0cmluZyB9IH0pID0+IG0/LnR5cGU/LmRpc3BsYXlOYW1lID09PSBcIlByaXZhdGVDaGFubmVsc0xpc3RcIikgYXMgYW55XHJcbiAgICAgICAgaWYgKFByaXZhdGVDaGFubmVsc0xpc3QgPT0gbnVsbCkgcmV0dXJuXHJcblxyXG4gICAgICAgIE9iamVjdC52YWx1ZXMocGlubmVkRE1TLmdldEFsbCgpKS5mb3JFYWNoKCh7dXNlcnN9KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRtQ2hhbm5lbHMgPSB1c2Vycy5tYXAoaWQgPT4gQ2hhbm5lbHMuZ2V0RE1Gcm9tVXNlcklkKGlkKSlcclxuICAgICAgICAgICAgUHJpdmF0ZUNoYW5uZWxzTGlzdC5wcm9wcy5wcml2YXRlQ2hhbm5lbElkcyA9XHJcbiAgICAgICAgICAgICAgICBQcml2YXRlQ2hhbm5lbHNMaXN0LnByb3BzLnByaXZhdGVDaGFubmVsSWRzLmZpbHRlcihcclxuICAgICAgICAgICAgICAgICAgICAoaWQpID0+ICFkbUNoYW5uZWxzLmluY2x1ZGVzKGlkKVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGNvbnN0IG9nRnVuYyA9IFByaXZhdGVDaGFubmVsc0xpc3QudHlwZS5wcm90b3R5cGUucmVuZGVyXHJcbiAgICAgICAgaWYgKG9nRnVuYyA9PSBudWxsKSByZXR1cm5cclxuICAgICAgICBPYmplY3QuYXNzaWduKFByaXZhdGVDaGFubmVsc0xpc3QucHJvcHMsIHtcclxuICAgICAgICAgICAgb3JpZ2luYWw6IG9nRnVuYyxcclxuICAgICAgICB9KVxyXG4gICAgICAgIC8vIGlmKCFmaXN0UGF0Y2gpIFByaXZhdGVDaGFubmVsc0xpc3QudHlwZS5wcm90b3R5cGUucmVuZGVyID0gUGF0Y2hlZFByaXZhdGVDaGFubmVsc0xpc3RcclxuICAgICAgICBcclxuXHJcblxyXG4gICAgICAgIGlmIChQcml2YXRlQ2hhbm5lbHNMaXN0LnByb3BzLmNoaWxkcmVuLmZpbmQoXHJcbiAgICAgICAgICAgIChtOiBhbnkpID0+IG0/LnR5cGU/LmRpc3BsYXlOYW1lID09PSBcIlBpbm5lZERNU1wiXHJcbiAgICAgICAgKSkgcmV0dXJuXHJcblxyXG4gICAgICAgIFByaXZhdGVDaGFubmVsc0xpc3QucHJvcHMuY2hpbGRyZW4ucHVzaCg8UGluRE1TUmVuZGVyIC8+KVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFByaXZhdGVDaGFubmVsc0xpc3QpXHJcbiAgICB9KVxyXG59XHJcblxyXG5jb25zdCBDdXJyZW50TGlzdHMgPSAoKSA9PiB7XHJcbiAgICB1c2VMaXN0VXBkYXRlKClcclxuXHJcbiAgICBzd2l0Y2ggKHNldHRpbmdzLmdldChcImRpc3BsYXlcIiwgY29uc3RhbnRzLlNldHRpbmdzLkRlZmF1bHRTZXR0aW5ncy5ESVNQTEFZX01PREUpKSB7XHJcbiAgICAgICAgY2FzZSBjb25zdGFudHMuU2V0dGluZ3MuRGVmYXVsdFNldHRpbmdzLk1pbmltYWxpc3RWaWV3LnNldHRpbmdzVmFsdWU6IHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud3JhcHBlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAge3Bpbm5lZERNUy5nZXRDYXRlZ29yaWVzKCkubWFwKChjYXRlZ29yeSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPE1pbmltYWxpc3RMaXN0IHsuLi57IGNhdGVnb3J5IH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuICAgICAgICBkZWZhdWx0OiB7XHJcbiAgICAgICAgICAgIHJldHVybiA8PlxyXG4gICAgICAgICAgICAgICAge3Bpbm5lZERNUy5nZXRDYXRlZ29yaWVzKCkubWFwKChjYXRlZ29yeSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8Q2F0ZWdvcnlMaXN0IHsuLi57IGNhdGVnb3J5IH19IC8+XHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQ2F0ZWdvcnlMaXN0ID0gKHtjYXRlZ29yeX06IHtjYXRlZ29yeTogc3RyaW5nfSkgPT4ge1xyXG4gICAgY29uc3QgW3Nob3csIHNldFNob3ddID0gUmVhY3QudXNlU3RhdGUocGlubmVkRE1TLmdldFZpc2liaWxpdHkoY2F0ZWdvcnkpKVxyXG5cclxuICAgIHJldHVybiA8PlxyXG4gICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICBwaW5uZWRETVMuc2V0VmlzaWJpbGl0eShjYXRlZ29yeSwgIXNob3cpXHJcbiAgICAgICAgICAgIHNldFNob3coIXNob3cpXHJcbiAgICAgICAgfX0+XHJcbiAgICAgICAgICAgIDxMaXN0U2VjdGlvbkl0ZW1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17am9pbkNsYXNzZXMoY2xhc3Nlcy5DYXRlZ29yeS53cmFwcGVyLCBzdHlsZXMuY2F0ZWdvcnlWaWV3V3JhcHBlciwgc2hvdyA/IHN0eWxlcy5vcGVuIDogbnVsbCl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6IHBpbm5lZERNUy5nZXRDb2xvcihjYXRlZ29yeSkgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8RGlzY29yZEljb24gbmFtZT1cIkRyb3Bkb3duQXJyb3dcIiB0eXBlPVwibm9uZVwiIGNsYXNzTmFtZT17am9pbkNsYXNzZXMoY2xhc3Nlcy5DYXRlZ29yeS5pY29uLCBzdHlsZXMuaWNvbil9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17am9pbkNsYXNzZXMoKHNlYXJjaENsYXNzTmFtZU1vZHVsZXMoXCJjb250YWluZXItMzJIVzVzXCIpIGFzIGFueSkuY29udGFpbmVyLCBjbGFzc2VzLkNhdGVnb3J5Lm5hbWUsIHN0eWxlcy5uYW1lKX0+e2NhdGVnb3J5fTwvaDI+XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvTGlzdFNlY3Rpb25JdGVtPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICB7c2hvdyAmJiBwaW5uZWRETVMuZ2V0VXNlcnMoY2F0ZWdvcnkpLm1hcCgodXNlcklkKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRtSWQgPSBDaGFubmVscy5nZXRETUZyb21Vc2VySWQodXNlcklkKVxyXG4gICAgICAgICAgICBpZiAoZG1JZCA9PSBudWxsKSByZXR1cm4gbnVsbFxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxEaXJlY3RNZXNzYWdlIGtleT17ZG1JZH1cclxuICAgICAgICAgICAgICAgICAgICBjaGFubmVsPXtDaGFubmVscy5nZXRDaGFubmVsKGRtSWQpfVxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQ3VycmVudENoYW5uZWxzLmdldENoYW5uZWxJZCgpID09PSBkbUlkXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH0pfVxyXG4gICAgPC8+XHJcbn1cclxuXHJcbmNvbnN0IGdldFBpbmdDb3VudCA9IChjdXJyZW50VXNlcnM6IHN0cmluZ1tdKSA9PiBjdXJyZW50VXNlcnMubWFwKHVzZXJJZCA9PiBDaGFubmVscy5nZXRETUZyb21Vc2VySWQodXNlcklkKSkucmVkdWNlKChhY2MsIGNoYW5uZWxJZCkgPT4gYWNjICsgZ2V0TWVudGlvbkNvdW50KGNoYW5uZWxJZCksIDApXHJcblxyXG5leHBvcnQgY29uc3QgTWluaW1hbGlzdExpc3QgPSAoeyBjYXRlZ29yeSB9OiB7IGNhdGVnb3J5OiBzdHJpbmcgfSkgPT4ge1xyXG4gICAgY29uc3QgY3VycmVudFVzZXJzID0gUmVhY3QudXNlTWVtbygoKSA9PiBwaW5uZWRETVMuZ2V0VXNlcnMoY2F0ZWdvcnkpLCBbXSlcclxuICAgIGNvbnN0IGlzQ3VycmVudENoYW5uZWwgPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcclxuICAgICAgICByZXR1cm4gY3VycmVudFVzZXJzLnNvbWUoKHVzZXJJZCkgPT4gQ3VycmVudENoYW5uZWxzLmdldENoYW5uZWxJZCgpID09PSBDaGFubmVscy5nZXRETUZyb21Vc2VySWQodXNlcklkKSlcclxuICAgIH0sIFtdKVxyXG5cclxuICAgIGNvbnN0IFtwaW5nQ291bnQsIHNldFBpbmdDb3VudF0gPSBSZWFjdC51c2VTdGF0ZTxudW1iZXI+KGdldFBpbmdDb3VudChjdXJyZW50VXNlcnMpKVxyXG4gICAgY29uc3QgW2lzU3RyZWFtZXJNb2RlRW5hYmxlZCwgc2V0U3RyZWFtZXJNb2RlXSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKVxyXG5cclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG1lc3NhZ2VDcmVhdGVMaXN0ZW5lciA9ICh7Y2hhbm5lbElkfTogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChjdXJyZW50VXNlcnMuc29tZSgodXNlcklkKSA9PiBjaGFubmVsSWQgPT09IENoYW5uZWxzLmdldERNRnJvbVVzZXJJZCh1c2VySWQpKSkgc2V0UGluZ0NvdW50KGdldFBpbmdDb3VudChjdXJyZW50VXNlcnMpKVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IHN0cmVhbWVyTW9kZUxpc3RlbmVyID0gKHsgdmFsdWUgfTogeyB2YWx1ZTogYm9vbGVhbiB9KSA9PiB7XHJcbiAgICAgICAgICAgIHNldFN0cmVhbWVyTW9kZSh2YWx1ZSlcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBEaXNwYXRjaGVyLnN1YnNjcmliZShcIkNIQU5ORUxfVU5SRUFEX1VQREFURVwiLCBtZXNzYWdlQ3JlYXRlTGlzdGVuZXIpO1xyXG4gICAgICAgIERpc3BhdGNoZXIuc3Vic2NyaWJlKFwiU1RSRUFNRVJfTU9ERV9VUERBVEVcIiwgc3RyZWFtZXJNb2RlTGlzdGVuZXIpO1xyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIERpc3BhdGNoZXIudW5zdWJzY3JpYmUoXCJDSEFOTkVMX1VOUkVBRF9VUERBVEVcIiwgbWVzc2FnZUNyZWF0ZUxpc3RlbmVyKVxyXG4gICAgICAgICAgICBEaXNwYXRjaGVyLnVuc3Vic2NyaWJlKFwiU1RSRUFNRVJfTU9ERV9VUERBVEVcIiwgc3RyZWFtZXJNb2RlTGlzdGVuZXIpXHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHJldHVybiA8PlxyXG4gICAgICAgIDxQb3BvdXQgcG9zaXRpb249e1BvcG91dC5Qb3NpdGlvbnMuUklHSFR9IGFuaW1hdGlvbj17UG9wb3V0LkFuaW1hdGlvbi5OT05FfSByZW5kZXJQb3BvdXQ9eyhwcm9wcykgPT4gPGRpdiB7Li4ucHJvcHN9PlxyXG4gICAgICAgICAgICA8TW9kYWwuTW9kYWxSb290IHRyYW5zaXRpb25TdGF0ZT17MX0gc2l6ZT17TW9kYWwuTW9kYWxTaXplLkRZTkFNSUN9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5taW5pbWFsaXN0aWNQb3BvdXR9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtjdXJyZW50VXNlcnMubGVuZ3RoICE9PSAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gY3VycmVudFVzZXJzLm1hcCgodXNlcklkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkbUlkID0gQ2hhbm5lbHMuZ2V0RE1Gcm9tVXNlcklkKHVzZXJJZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKENoYW5uZWxzLmdldENoYW5uZWwoZG1JZCksIENoYW5uZWxzLmdldENoYW5uZWwoZG1JZCkucmVjaXBpZW50cy5pbmNsdWRlcyhcIjM3NjQ5MzI2MTc1NTI1MjczNlwiKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkbUlkID09IG51bGwpIHJldHVybiBudWxsXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGlyZWN0TWVzc2FnZSBrZXk9e2RtSWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5uZWw9e0NoYW5uZWxzLmdldENoYW5uZWwoZG1JZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEN1cnJlbnRDaGFubmVscy5nZXRDaGFubmVsSWQoKSA9PT0gZG1JZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiA8VGV4dCBzdHlsZT17e21hcmdpbkxlZnQ6IFwiOHB4XCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoZXJlIGlzIG5vYm9keSBoZXJlIGN1cnJlbnRseS4gPGEgb25DbGljaz17KCkgPT4gb3BlbkNhdGVnb3J5U2V0dGluZ3MoY2F0ZWdvcnkpfT5BZGQgYSBuZXcgcGVyc29uPC9hPi5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L01vZGFsLk1vZGFsUm9vdD5cclxuICAgICAgICA8L2Rpdj59PlxyXG4gICAgICAgICAgICB7KHByb3BzKSA9PiA8ZGl2IHsuLi5wcm9wc31cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17am9pbkNsYXNzZXMoY2xhc3Nlcy5ETUJ1dHRvbnMuY2hhbm5lbCwgKHNlYXJjaENsYXNzTmFtZU1vZHVsZXMoXCJjb250YWluZXItMzJIVzVzXCIpIGFzIGFueSkuY29udGFpbmVyKX1cclxuICAgICAgICAgICAgICAgIG9uQ29udGV4dE1lbnU9e2UgPT4gd2VicGFjay5Db250ZXh0TWVudS5vcGVuQ29udGV4dE1lbnUoZSwgKCkgPT4gPENhdGVnb3J5Q29udGV4dE1lbnUgY2F0ZWdvcnk9e2NhdGVnb3J5fSAvPil9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtqb2luQ2xhc3NlcyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3Nlcy5ETUJ1dHRvbnMuaW50ZXJhY3RpdmUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzZXMuSW50ZXJhY3RpdmVzLmludGVyYWN0aXZlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0N1cnJlbnRDaGFubmVsID8gam9pbkNsYXNzZXMoY2xhc3Nlcy5ETUJ1dHRvbnMuaW50ZXJhY3RpdmVTZWxlY3RlZCwgY2xhc3Nlcy5JbnRlcmFjdGl2ZXMuc2VsZWN0ZWQpIDogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc2VzLkRNQnV0dG9ucy5saW5rQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2pvaW5DbGFzc2VzKGNsYXNzZXMuTmFtZXMubGF5b3V0LCBzdHlsZXMubWluaW1hbGlzdGljVmlldyl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RmxleCBkaXJlY3Rpb249e0ZsZXguRGlyZWN0aW9uLlZFUlRJQ0FMfSBjbGFzc05hbWU9e3N0eWxlcy5uYW1lQW5kVXNlcnN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6IHBpbm5lZERNUy5nZXRDb2xvcihjYXRlZ29yeSksIGZvbnRXZWlnaHQ6IFwiYm9sZFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjYXRlZ29yeX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHshaXNTdHJlYW1lck1vZGVFbmFibGVkICYmIHNldHRpbmdzLmdldChcIm1pbmltYWwudXNlckljb25zXCIsIGNvbnN0YW50cy5TZXR0aW5ncy5EZWZhdWx0U2V0dGluZ3MuTWluaW1hbGlzdFZpZXcudXNlckljb25zKSAmJiA8VXNlclN1bW1hcnlJdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT17VVNFUl9JQ09OX1NJWkV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcnM9e3Bpbm5lZERNUy5nZXRVc2VycyhjYXRlZ29yeSkubWFwKHVzZXJJZCA9PiBVc2Vycy5nZXRVc2VyKHVzZXJJZCkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICAgICAgICAgICAgICAgICAge0Jvb2xlYW4ocGluZ0NvdW50KSAmJiA8TnVtYmVyQmFkZ2UgY291bnQ9e3BpbmdDb3VudH0gLz59XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+fVxyXG4gICAgICAgIDwvUG9wb3V0PlxyXG4gICAgPC8+XHJcbn0iLCJpbXBvcnQgeyBSZWFjdCwgQ29udGV4dE1lbnUgYXMgQ29udGV4dE1lbnVIYW5kbGVyIH0gZnJvbSBcIml0dGFpL3dlYnBhY2tcIlxyXG5pbXBvcnQgKiBhcyB3ZWJwYWNrIGZyb20gXCJpdHRhaS93ZWJwYWNrXCJcclxuaW1wb3J0IHsgQ29udGV4dE1lbnUsIEZsZXgsIERpc2NvcmRJY29uIH0gZnJvbSBcIml0dGFpL2NvbXBvbmVudHNcIlxyXG5pbXBvcnQgeyBVc2VycyB9IGZyb20gXCJpdHRhaS9zdG9yZXNcIlxyXG5pbXBvcnQgcGlubmVkRE1TIGZyb20gXCIuLi8uLi9oYW5kbGVycy9waW5uZWRETVNcIlxyXG5pbXBvcnQgeyBVc2VySUQgfSBmcm9tIFwiaXR0YWlcIlxyXG5pbXBvcnQgb3BlbkNhdGVnb3J5U2V0dGluZ3MgZnJvbSBcIi4uLy4uL3V0aWxzL29wZW5DYXRlZ29yeVNldHRpbmdzXCJcclxuLy9AdHMtaWdub3JlXHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vQWRkVXNlci5zY3NzXCJcclxuXHJcbmNvbnN0IFVzZXJTdW1tYXJ5SXRlbSA9IHdlYnBhY2suZmluZEJ5RGlzcGxheU5hbWUoXCJVc2VyU3VtbWFyeUl0ZW1cIilcclxuXHJcbmNvbnN0IFVTRVJfSUNPTl9TSVpFID0gMTZcclxuY29uc3QgTUFYX1VTRVJTX0RJU1BMQVkgPSA0XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAocHJvcHM6IHt1c2VySWQ6IFVzZXJJRH0pIHtcclxuICAgIHJldHVybiA8Q29udGV4dE1lbnUgbmF2SWQ9e1wicGluLXVzZXJcIn0gb25DbG9zZT17Q29udGV4dE1lbnVIYW5kbGVyLmNsb3NlQ29udGV4dE1lbnV9PlxyXG4gICAgICAgIDxDb250ZXh0TWVudS5NZW51R3JvdXAgbGFiZWw9XCJBZGQgdG8gY2F0ZWdvcnlcIj5cclxuICAgICAgICAgICAge3Bpbm5lZERNUy5nZXRDYXRlZ29yaWVzKCkubWFwKGNhdGVnb3J5ID0+IDxDb250ZXh0TWVudS5NZW51SXRlbSBpZD17YGNhdGVnb3J5LSR7Y2F0ZWdvcnl9YH1cclxuICAgICAgICAgICAgICAgIGxhYmVsPXs8RmxleD5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy50ZXh0fSBzdHlsZT17eyBjb2xvcjogcGlubmVkRE1TLmdldENvbG9yKGNhdGVnb3J5KX19PntjYXRlZ29yeX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPFVzZXJTdW1tYXJ5SXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplPXtVU0VSX0lDT05fU0laRX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4PXtNQVhfVVNFUlNfRElTUExBWX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlcnM9e3Bpbm5lZERNUy5nZXRVc2VycyhjYXRlZ29yeSkuc29ydCgoKSA9PiBNYXRoLnJhbmRvbSgpIC0gMC41KS5tYXAodXNlcklkID0+IFVzZXJzLmdldFVzZXIodXNlcklkKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvRmxleD59XHJcblxyXG4gICAgICAgICAgICAgICAgYWN0aW9uPXsoKSA9PiBwaW5uZWRETVMuYWRkVXNlcihjYXRlZ29yeSwgcHJvcHMudXNlcklkKX1cclxuICAgICAgICAgICAgLz4pfVxyXG4gICAgICAgIDwvQ29udGV4dE1lbnUuTWVudUdyb3VwPlxyXG4gICAgICAgIDxDb250ZXh0TWVudS5NZW51U2VwYXJhdG9yIC8+XHJcbiAgICAgICAgPENvbnRleHRNZW51Lk1lbnVJdGVtIGlkPVwiY29uZmlndXJlXCJcclxuICAgICAgICAgICAgbGFiZWw9XCJDb25maWd1cmUgY2F0ZWdvcmllc1wiXHJcbiAgICAgICAgICAgIGljb249eygpID0+IDxEaXNjb3JkSWNvbiBuYW1lPVwiR2VhclwiIHR5cGU9XCJjb250ZXh0bWVudVwiLz59XHJcbiAgICAgICAgICAgIGFjdGlvbj17b3BlbkNhdGVnb3J5U2V0dGluZ3N9XHJcbiAgICAgICAgLz5cclxuICAgIDwvQ29udGV4dE1lbnU+XHJcbn0iLCJpbXBvcnQgKiBhcyBwYXRjaGVyIGZyb20gXCJpdHRhaS9wYXRjaGVyXCJcclxuaW1wb3J0ICogYXMgd2VicGFjayBmcm9tIFwiaXR0YWkvd2VicGFja1wiXHJcbmNvbnN0IHsgUmVhY3QgfSA9IHdlYnBhY2tcclxuaW1wb3J0IHsgQ2hhbm5lbHMsIEN1cnJlbnRDaGFubmVscyB9IGZyb20gXCJpdHRhaS9zdG9yZXNcIlxyXG5pbXBvcnQgeyBmaW5kSW5SZWFjdFRyZWUsIHNlYXJjaENsYXNzTmFtZU1vZHVsZXMgfSBmcm9tIFwiaXR0YWkvdXRpbGl0aWVzXCJcclxuaW1wb3J0IHsgRGlzY29yZEljb24sIENvbnRleHRNZW51IH0gZnJvbSBcIml0dGFpL2NvbXBvbmVudHNcIlxyXG5pbXBvcnQgKiBhcyBzZXR0aW5ncyBmcm9tIFwiaXR0YWkvc2V0dGluZ3NcIlxyXG5pbXBvcnQgcGlubmVkRE1TLCB7IHVzZUxpc3RVcGRhdGUgfSBmcm9tIFwiLi4vaGFuZGxlcnMvcGlubmVkRE1TXCJcclxuaW1wb3J0IHsgVXNlck9iamVjdCB9IGZyb20gXCJpdHRhaVwiO1xyXG5pbXBvcnQgKiBhcyBjb25zdGFudHMgZnJvbSBcIi4uL2NvbnN0YW50c1wiXHJcblxyXG4vL0B0cy1pZ25vcmVcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9kbWJ1dHRvbi5zY3NzXCJcclxuaW1wb3J0IGpvaW5DbGFzc2VzIGZyb20gXCIuLi91dGlscy9qb2luQ2xhc3Nlc1wiXHJcbmltcG9ydCBBZGRVc2VyIGZyb20gXCIuLi9jb21wb25lbnRzL0NvbnRleHRNZW51cy9BZGRVc2VyXCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcclxuICAgIHBhdGNoZXIuYWZ0ZXIoXCJETUJ1dHRvblBhdGNoXCIsIHdlYnBhY2suZmluZEJ5RGlzcGxheU5hbWUoXCJQcml2YXRlQ2hhbm5lbFwiKS5wcm90b3R5cGUsIFwicmVuZGVyXCIsIChfLCByZXMsIF90aGlzKSA9PiB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coeyBfdGhpcywgcmVzIH0pXHJcbiAgICAgICAgY29uc3QgdXNlcjogVXNlck9iamVjdCA9IF90aGlzLnByb3BzLnVzZXJcclxuXHJcbiAgICAgICAgY29uc3QgaXNBZGRlZCA9IHBpbm5lZERNUy5pc1VzZXJBZGRlZCh1c2VyLmlkKVxyXG5cclxuICAgICAgICBjb25zdCBvZ0NoaWxkcmVuOiBGdW5jdGlvbiA9IHJlcy5wcm9wcy5jaGlsZHJlblxyXG4gICAgICAgIGlmKG9nQ2hpbGRyZW4gPT0gbnVsbCkgcmV0dXJuXHJcbiAgICAgICAgcmVzLnByb3BzLmNoaWxkcmVuID0gZnVuY3Rpb24oLi4uYXJnczogYW55KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJldCA9IG9nQ2hpbGRyZW4uYXBwbHkodGhpcywgYXJncylcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocmV0KVxyXG5cclxuICAgICAgICAgICAgcmV0LnByb3BzLmNsYXNzTmFtZSArPSBgICR7c3R5bGVzLnBpbkhvdmVySGFuZGxlcn1gXHJcblxyXG4gICAgICAgICAgICBjb25zdCBJbnRlcmFjdGl2ZSA9IHJldC5wcm9wcy5jaGlsZHJlbiBhcyB7cHJvcHM6IHtjaGlsZHJlbjogW2FueSwgYW55XX19XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAodXNlciAmJiAhdXNlci5ib3QpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNsb3NlSW5kZXggPSBJbnRlcmFjdGl2ZS5wcm9wcy5jaGlsZHJlbi5maW5kSW5kZXgoZSA9PiBlLnR5cGUuZGlzcGxheU5hbWUgPT09IFwiQ2xvc2VCdXR0b25cIilcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoaXNBZGRlZCAmJiBjbG9zZUluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIEludGVyYWN0aXZlLnByb3BzLmNoaWxkcmVuW2Nsb3NlSW5kZXhdXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHNldHRpbmdzLmdldChcInBpbkljb25cIiwgY29uc3RhbnRzLlNldHRpbmdzLkRlZmF1bHRTZXR0aW5ncy5QSU5fSUNPTikpIHsgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgSW50ZXJhY3RpdmUucHJvcHMuY2hpbGRyZW4uc3BsaWNlKDEsIDAsIDxkaXYgY2xhc3NOYW1lPXtqb2luQ2xhc3NlcyhzdHlsZXMucGluQnV0dG9uLCBpc0FkZGVkID8gc3R5bGVzLmxvbmVseSA6IFwiXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coQ29udGV4dE1lbnUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNBZGRlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBpbm5lZERNUy5yZW1vdmVVc2VyKHBpbm5lZERNUy5nZXRVc2VyQ2F0ZWdvcnkodXNlci5pZCkhLCB1c2VyLmlkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3ZWJwYWNrLkNvbnRleHRNZW51Lm9wZW5Db250ZXh0TWVudShlLCAoKSA9PiA8QWRkVXNlciB1c2VySWQ9e3VzZXIuaWR9Lz4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IWlzQWRkZWQgPyA8RGlzY29yZEljb24gbmFtZT1cIlBpbkxheWVyXCIgLz4gOiA8RGlzY29yZEljb24gbmFtZT1cIlVucGluTGF5ZXJcIiAvPn1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4pXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHJldFxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn0iLCJpbXBvcnQgKiBhcyBwYXRjaGVyIGZyb20gXCJpdHRhaS9wYXRjaGVyXCJcclxuaW1wb3J0ICogYXMgd2VicGFjayBmcm9tIFwiaXR0YWkvd2VicGFja1wiXHJcbmltcG9ydCB7IFJlYWN0IH0gZnJvbSBcIml0dGFpL3dlYnBhY2tcIlxyXG5pbXBvcnQgKiBhcyBzZXR0aW5ncyBmcm9tIFwiaXR0YWkvc2V0dGluZ3NcIlxyXG5pbXBvcnQgeyBVc2VycywgQWN0aXZpdGllcywgU3RhdHVzLCBVc2VyU2V0dGluZ3MgfSBmcm9tIFwiaXR0YWkvc3RvcmVzXCJcclxuaW1wb3J0IHR5cGUgeyBVc2VyT2JqZWN0IH0gZnJvbSBcIml0dGFpXCJcclxuaW1wb3J0IHsgQnV0dG9uLCBEaXNjb3JkSWNvbiwgRmxleCwgU2VhcmNoQmFyLCBUZXh0SW5wdXQsIFRvb2x0aXBDb250YWluZXIgfSBmcm9tIFwiaXR0YWkvY29tcG9uZW50c1wiXHJcbmltcG9ydCBwaW5uZWRETVMgZnJvbSBcIi4uL2hhbmRsZXJzL3Bpbm5lZERNU1wiXHJcbmltcG9ydCBvcGVuQ2F0ZWdvcnlTZXR0aW5ncyBmcm9tIFwiLi4vdXRpbHMvb3BlbkNhdGVnb3J5U2V0dGluZ3NcIlxyXG5pbXBvcnQgam9pbkNsYXNzZXMgZnJvbSBcIi4uL3V0aWxzL2pvaW5DbGFzc2VzXCJcclxuaW1wb3J0IENhdGVnb3J5Q29udGV4dE1lbnUgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ29udGV4dE1lbnVzL0NhdGVnb3J5XCJcclxuXHJcbi8vIHNodWxrZXIgYm94IG1vbnN0ZXIgLSBmV2hpcFxyXG5jb25zdCB7IEl0ZW0gfSA9IHdlYnBhY2suZmluZEJ5UHJvcHMoXCJJdGVtXCIpXHJcbmNvbnN0IHsgRGl2aWRlciB9ID0gd2VicGFjay5maW5kKG0gPT4gbT8uZGVmYXVsdD8uZGlzcGxheU5hbWUgPT09IFwiSGVhZGVyQmFyXCIpXHJcbmNvbnN0IFBlb3BsZUxpc3RTZWN0aW9uZWROb25MYXp5ID0gd2VicGFjay5maW5kQnlEaXNwbGF5TmFtZSgnUGVvcGxlTGlzdFNlY3Rpb25lZE5vbkxhenknKVxyXG5jb25zdCBGcmllbmRSb3cgPSB3ZWJwYWNrLmZpbmRCeURpc3BsYXlOYW1lKCdGcmllbmRSb3cnKVxyXG5jb25zdCBTZWN0aW9uVGl0bGUgPSB3ZWJwYWNrLmZpbmRCeURpc3BsYXlOYW1lKFwiU2VjdGlvblRpdGxlXCIpXHJcbmNvbnN0IHsgRW1wdHlTdGF0ZUltYWdlLCBkZWZhdWx0OiBFbXB0eVN0YXRlLCBFbXB0eVN0YXRlVGV4dCB9ID0gd2VicGFjay5maW5kQnlQcm9wcyhcIkVtcHR5U3RhdGVJbWFnZVwiKVxyXG5jb25zdCB7IGljb25XcmFwcGVyLCBjbGlja2FibGUsIGljb24gfSA9IHdlYnBhY2suZmluZEJ5UHJvcHMoXCJjYXJldFwiLCBcImNsaWNrYWJsZVwiKVxyXG5jb25zdCB7IGJ1dHRvbiB9ID0gd2VicGFjay5maW5kQnlQcm9wcyhcImZyaWVuZHNFbXB0eVwiKVxyXG5jb25zdCB7IHNlYXJjaEJhciB9ID0gd2VicGFjay5maW5kQnlQcm9wcyhcImVtcHR5U3RhdGVDb250YWluZXJcIilcclxuXHJcbmNvbnN0IElERU5USUZJRVIgPSBcIkRNQ0FURUdPUklFU1wiXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE15c3RlcmlvdXNPYmplY3Qge1xyXG4gICAgYWN0aXZpdGllczogQXJyYXk8YW55PixcclxuICAgIGlzTW9iaWxlOiBib29sZWFuLFxyXG4gICAga2V5OiBzdHJpbmcsXHJcbiAgICBuaWNrbmFtZTogc3RyaW5nLFxyXG4gICAgc3RhdHVzOiBcIm9ubGluZVwiIHwgXCJkbmRcIiB8IFwiaWRsZVwiIHwgXCJzdHJlYW1pbmdcIixcclxuICAgIHR5cGU6IDEsIC8vd2hhdHMgZGlzIHRiaFxyXG4gICAgdXNlcjogVXNlck9iamVjdCxcclxufVxyXG5cclxuLypcclxuICAgIE1FVEhPRDpcclxuICAgIFRoZSBGcmllbmRzIGxpc3QgKGNhbGxlZCBhcyBcIlBlb3BsZUxpc3RcIikgdGFrZXMgdHJhY2sgb2YgdGhlIHRhYnMgYnkgYSBJRCBhbmQgcmVuZGVycyB0aGUgVUkgYmFzZWQgb24gdGhhdCBJRC4gVGhlIEhlYWRlckJhciBkb2VzIHRoZVxyXG4gICAgam9iIG9mIHJlbmRlcmluZyB0aGUgdGFiIHBpbGxzIGFuZCBtYWtpbmcgdGhlIGZ1bmN0aW9uYWxpdHkgb2YgY2hhbmdpbmcgdGhlc2UgSURzLiBUaGUgcGlsbHMgYXJlIG1hbnVhbGx5IGFkZGVkIGJ5IHRoZSBkZXZlbG9wZXIsIGFuZFxyXG4gICAgdGhlIGNsaWNrIGV2ZW50IGhhbmRsaW5nIGlzIGRvbmUgYnkgdGhlIFwiSXRlbVwiIGNvbXBvbmVudCwgd2hpbGUsIGFnYWluLCB0aGUgSGVhZGVyQmFyIGNoYW5nZXMgdGhlIElEcy4gTmVpdGhlciB0aGUgUGVvcGxlTGlzdCBhbmQgdGhlXHJcbiAgICBIZWFkZXJCYXIgc3BlY2lmaWVzIHdoaWNoIHRhYnMgc2hvdWxkIGV4aXN0IGFuZCB3aG8gaXMgdGhlIGltcG9zdG9yLCBtZWFuaW5nIHRoYXQgYSBwaWxsIHdpdGggYSBjdXN0b20gSUQgY2FuIGJlIHB1c2hlZCBhbmQgZXZlcnl0aGluZ1xyXG4gICAgd2lsbCBnbyBmaW5lIGxpa2UgbWFnaWMuXHJcbiAgICBCeSBkZWZhdWx0LCBpZiBhbiBpbnZhbGlkIElEIGlzIGluc2VydGVkLCBQZW9wbGVMaXN0IHdpbGwgcmVuZGVyIHRoZSBcIkFsbCBmcmllbmRzXCIgdGFiLCBidXQgaXQgd2lsbCBzdGlsbCBpZGVudGlmeSBhcyB0aGF0IGZha2UgSUQuIFxyXG4gICAgVGhhdCBtZWFucyB3ZSBjYW4gZGVsZXRlIHRoYXQgcmVuZGVyIGFuZCByZXBsYWNlIGJ5IG91ciBvd24gcmVuZGVyaW5nLCB3aXRob3V0IG11Y2ggb2YgYSBpc3N1ZS5cclxuKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xyXG4gICAgcGF0Y2hlci5hZnRlcihcIkZyaWVuZHNIZWFkZXJQYXRjaFwiLCB3ZWJwYWNrLmZpbmQobSA9PiBtPy5kZWZhdWx0Py5kaXNwbGF5TmFtZSA9PT0gXCJIZWFkZXJCYXJDb250YWluZXJcIiksIFwiZGVmYXVsdFwiLCAoW3Byb3BzXSwgcmVzLCBfdGhpcykgPT4ge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHByb3BzKVxyXG4gICAgICAgIGlmKFxyXG4gICAgICAgICAgICBCb29sZWFuKHByb3BzLmNoYW5uZWxJZCkgfHwgLy8gY2hhbm5lbFxyXG4gICAgICAgICAgICAoIX5wcm9wcy5jbGFzc05hbWUuaW5kZXhPZihcInRoZW1lLVwiKSkgLy9ub3QgZnJpZW5kcyBsaXN0IHRhYlxyXG4gICAgICAgICkgcmV0dXJuXHJcblxyXG5cclxuICAgICAgICBjb25zdCBPZ1RhYkJhckNoaWxkcmVucyA9IHByb3BzLmNoaWxkcmVuWzNdLnByb3BzLmNoaWxkcmVuXHJcbiAgICAgICAgY29uc3QgQWRkRnJpZW5kQnV0dG9uID0gT2dUYWJCYXJDaGlsZHJlbnNbT2dUYWJCYXJDaGlsZHJlbnMubGVuZ3RoIC0gMV1cclxuICAgICAgICBkZWxldGUgT2dUYWJCYXJDaGlsZHJlbnNbT2dUYWJCYXJDaGlsZHJlbnMubGVuZ3RoIC0gMV1cclxuICAgICAgICBjb25zdCBOZXdUYWJCYXJDaGlsZHJlbnMgPSBbXVxyXG4gICAgICAgIGZvciAoY29uc3QgY2F0ZWdvcnlOYW1lIG9mIHBpbm5lZERNUy5nZXRDYXRlZ29yaWVzKCkpIHtcclxuICAgICAgICAgICAgTmV3VGFiQmFyQ2hpbGRyZW5zLnB1c2goPEl0ZW1cclxuICAgICAgICAgICAgICAgIGlkPXtgJHtJREVOVElGSUVSfS0ke2NhdGVnb3J5TmFtZX1gfVxyXG4gICAgICAgICAgICAgICAgY29sb3I9e3Bpbm5lZERNUy5nZXRDb2xvcihjYXRlZ29yeU5hbWUpfVxyXG4gICAgICAgICAgICAgICAgb25Db250ZXh0TWVudT17KGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTERpdkVsZW1lbnQsIE1vdXNlRXZlbnQ+KSA9PiB3ZWJwYWNrLkNvbnRleHRNZW51Lm9wZW5Db250ZXh0TWVudShlLCAoKSA9PiA8Q2F0ZWdvcnlDb250ZXh0TWVudSBjYXRlZ29yeT17Y2F0ZWdvcnlOYW1lfSAvPil9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtjYXRlZ29yeU5hbWV9XHJcbiAgICAgICAgICAgIDwvSXRlbT4pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHByb3BzLmNoaWxkcmVuWzNdLnByb3BzLmNoaWxkcmVuID0gWy4uLk9nVGFiQmFyQ2hpbGRyZW5zLCA8RGl2aWRlciAvPiwgLi4uTmV3VGFiQmFyQ2hpbGRyZW5zLCA8RGl2aWRlciAvPiwgQWRkRnJpZW5kQnV0dG9uXVxyXG4gICAgfSlcclxuXHJcbiAgICBwYXRjaGVyLmFmdGVyKFwiRnJpZW5kc0xpc3RQYXRjaFwiLCB3ZWJwYWNrLmZpbmQobSA9PiBtPy5kZWZhdWx0Py5kaXNwbGF5TmFtZSA9PT0gXCJQZW9wbGVMaXN0XCIpLCBcImRlZmF1bHRcIiwgKFtwcm9wc106IFt7IHNlY3Rpb25GaWx0ZXI6IHN0cmluZ31dLCByZXMsIF90aGlzKSA9PiB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2cocHJvcHMsIHJlcywgX3RoaXMpXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2cocmVzLnByb3BzLmNoaWxkcmVuWzJdLnByb3BzLnN0YXR1c1NlY3Rpb25zKVxyXG4gICAgICAgIGlmICh+cHJvcHMuc2VjdGlvbkZpbHRlci5pbmRleE9mKElERU5USUZJRVIpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNhdGVnb3J5ID0gcHJvcHMuc2VjdGlvbkZpbHRlci5zdWJzdHJpbmcoSURFTlRJRklFUi5sZW5ndGggKyAxKVxyXG5cclxuICAgICAgICAgICAgcmVzLnByb3BzLmNoaWxkcmVuID0gPERNRnJpZW5kc1JlbmRlciB7Li4ueyBjYXRlZ29yeSB9fSBrZXk9e2NhdGVnb3J5fS8+XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICAvLyBmYWlsZWQgYXR0ZW1wdCB0byB1c2UgdGhlIG9nIHNlYXJjaFxyXG4gICAgLy8gcGF0Y2hlci5hZnRlcihcIkdldFN0YXRlUGF0Y2hcIiwgd2VicGFjay5maW5kQnlQcm9wcyhcIlJvd1wiLCBcIlJvd3NcIiwgXCJkZWZhdWx0XCIpLmRlZmF1bHQsIFwiZ2V0U3RhdGVcIiwgKFtwcm9wc10sIHJlcywgX3RoaXMpID0+IHtcclxuICAgIC8vICAgICBpZiAocmVzLnNlY3Rpb24gPT09IFwiTUVFUFwiKSByZXMucm93cy5fcm93cyA9IFt7XHJcbiAgICAvLyAgICAgICAgIGFjdGl2aXRpZXM6IEFjdGl2aXRpZXMuZ2V0QWN0aXZpdGllcyhVc2Vycy5nZXRDdXJyZW50VXNlcigpLmlkKSxcclxuICAgIC8vICAgICAgICAgYXBwbGljYXRpb25TdHJlYW06IG51bGwsXHJcbiAgICAvLyAgICAgICAgIGlzTW9iaWxlOiBVc2Vycy5nZXRDdXJyZW50VXNlcigpLm1vYmlsZSxcclxuICAgIC8vICAgICAgICAga2V5OiBVc2Vycy5nZXRDdXJyZW50VXNlcigpLmlkLFxyXG4gICAgLy8gICAgICAgICBuaWNrbmFtZTogdW5kZWZpbmVkLFxyXG4gICAgLy8gICAgICAgICBzdGF0dXM6IFN0YXR1cy5nZXRTdGF0dXMoVXNlcnMuZ2V0Q3VycmVudFVzZXIoKS5pZCksXHJcbiAgICAvLyAgICAgICAgIHR5cGU6IDEsXHJcbiAgICAvLyAgICAgICAgIHVzZXI6IFVzZXJzLmdldEN1cnJlbnRVc2VyKCksXHJcbiAgICAvLyAgICAgfV1cclxuICAgIC8vICAgICBjb25zb2xlLmxvZyh7IHByb3BzLCByZXMgfSlcclxuICAgIC8vIH0pXHJcbn1cclxuXHJcbmludGVyZmFjZSBGcmllbmRzUmVuZGVyUHJvcHMge1xyXG4gICAgY2F0ZWdvcnk6IHN0cmluZ1xyXG59XHJcbmNvbnN0IERNRnJpZW5kc1JlbmRlciA9ICh7IGNhdGVnb3J5IH06IEZyaWVuZHNSZW5kZXJQcm9wcykgPT4ge1xyXG4gICAgY29uc3QgW3NlYXJjaCwgc2V0U2VhcmNoXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpXHJcbiAgICBjb25zdCB1c2VySURzID0gUmVhY3QudXNlTWVtbygoKSA9PiBwaW5uZWRETVMuZ2V0VXNlcnMoY2F0ZWdvcnkpLCBbY2F0ZWdvcnldKVxyXG4gICAgY29uc3Qgc2VhcmNoZWRVc2VySURzID0gUmVhY3QudXNlTWVtbygoKSA9PiB1c2VySURzLmZpbHRlcihpZCA9PiB+VXNlcnMuZ2V0VXNlcihpZCkudXNlcm5hbWUudG9Mb3dlckNhc2UoKS5pbmRleE9mKHNlYXJjaC50b0xvd2VyQ2FzZSgpKSksIFtzZWFyY2hdKVxyXG5cclxuICAgIGlmICh1c2VySURzLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgIHJldHVybiA8PlxyXG4gICAgICAgICAgICA8U2VhcmNoQmFyXHJcbiAgICAgICAgICAgICAgICBxdWVyeT17c2VhcmNofVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3NldFNlYXJjaH1cclxuICAgICAgICAgICAgICAgIG9uQ2xlYXI9eygpID0+IHNldFNlYXJjaChcIlwiKX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c2VhcmNoQmFyfVxyXG4gICAgICAgICAgICAgICAgc2l6ZT17U2VhcmNoQmFyLlNpemVzLk1FRElVTX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxTZWN0aW9uVGl0bGUgdGl0bGU9ezxGbGV4PlxyXG4gICAgICAgICAgICAgICAgICAgIDxiIHN0eWxlPXt7IGNvbG9yOiBwaW5uZWRETVMuZ2V0Q29sb3IoY2F0ZWdvcnkpLCBmbGV4R3JvdzogMSB9fT57Y2F0ZWdvcnl9IOKAkyB7c2VhcmNoZWRVc2VySURzLmxlbmd0aH08L2I+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxUb29sdGlwQ29udGFpbmVyIHRleHQ9XCJBZGQgYSBuZXcgcGVyc29uXCIgcG9zaXRpb249XCJib3R0b21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2pvaW5DbGFzc2VzKGljb25XcmFwcGVyLCBjbGlja2FibGUpfSBvbkNsaWNrPXsoKSA9PiBvcGVuQ2F0ZWdvcnlTZXR0aW5ncyhjYXRlZ29yeSl9IHN0eWxlPXt7IHdpZHRoOiBcIjE2cHhcIiwgaGVpZ2h0OiBcIjE2cHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEaXNjb3JkSWNvbiBuYW1lPVwiUGVyc29uQWRkXCIgdHlwZT1cIm5vbmVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXBDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8L0ZsZXg+fSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHtzZWFyY2hlZFVzZXJJRHMubGVuZ3RoICE9PSAwID8gPFBlb3BsZUxpc3RTZWN0aW9uZWROb25MYXp5XHJcbiAgICAgICAgICAgICAgICByZW5kZXJSb3c9eyhteXN0ZXJpb3VzT2JqZWN0OiBNeXN0ZXJpb3VzT2JqZWN0KSA9PiA8RnJpZW5kUm93IHsuLi5PYmplY3QuYXNzaWduKHt9LCBteXN0ZXJpb3VzT2JqZWN0LCB7aXNGb2N1c2VkOiB0cnVlfSl9IC8+fVxyXG4gICAgICAgICAgICAgICAgLy8gc2VhcmNoUXVlcnk9e1wia1wifSAvL2ZvciBzb21lIHJlYXNvbiB0aGlzIGRvZXMgbm90IHdvcmtcclxuICAgICAgICAgICAgICAgIHN0YXR1c1NlY3Rpb25zPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgc2VhcmNoZWRVc2VySURzLm1hcCh1c2VySWQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB1c2VyID0gVXNlcnMuZ2V0VXNlcih1c2VySWQpIGFzIFVzZXJPYmplY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbW9ja2VkIGlkZW50aWZpZXIuIGFjY29yZGluZyB0byBkZXZpbGJybyAoeWVzLCBpdmUgYWN0dWFsbHkgbGlzdGVuZWQgdG8gaGltKSB0aGUgZnJpZW5kcyBsaXN0IGZldGNoZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2aXRpZXM6IEFjdGl2aXRpZXMuZ2V0QWN0aXZpdGllcyh1c2VyLmlkKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzTW9iaWxlOiB1c2VyLm1vYmlsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogdXNlci5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5pY2tuYW1lOiB1c2VyLnVzZXJuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiBTdGF0dXMuZ2V0U3RhdHVzKHVzZXIuaWQpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogMSwgLy93aGF0cyBkaXMgdGJoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VyOiB1c2VyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGFzIE15c3RlcmlvdXNPYmplY3RcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgLz4gOiA8RW1wdHlTdGF0ZSB0aGVtZT17VXNlclNldHRpbmdzLnRoZW1lfT5cclxuICAgICAgICAgICAgICAgICAgICA8RW1wdHlTdGF0ZUltYWdlIHsuLi57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwid2lkdGhcIjogNDIxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImhlaWdodFwiOiAyMTgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGlnaHRTcmNcIjogXCIvYXNzZXRzL2ZkODc5YTI4ODA3YjY2YjM4ZDU0ZTdkYjZlYTE4YTY5LnN2Z1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRhcmtTcmNcIjogXCIvYXNzZXRzL2IzNmRlOTgwYjE3NGQ3Yjc5OGM4OWYzNWMxMTZlNWM2LnN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8RW1wdHlTdGF0ZVRleHQgbm90ZT17PD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgV3VtcHVzIGxvb2tlZCBidXQgY291bGRuJ3QgZmluZCBhbnlvbmUgd2l0aCB0aGF0IG5hbWUgaW4gdGhpcyBjYXRlZ29yeS5cclxuICAgICAgICAgICAgICAgICAgICA8Lz59IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBvcGVuQ2F0ZWdvcnlTZXR0aW5ncyhjYXRlZ29yeSl9IGNsYXNzTmFtZT17YnV0dG9ufT5BZGQgYSBwZXJzb24gd2l0aCB0aGF0IG5hbWU8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9FbXB0eVN0YXRlPn1cclxuICAgICAgICA8Lz5cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIDw+XHJcbiAgICAgICAgICAgIDxFbXB0eVN0YXRlIHRoZW1lPXtVc2VyU2V0dGluZ3MudGhlbWV9PlxyXG4gICAgICAgICAgICAgICAgPEVtcHR5U3RhdGVJbWFnZSB7Li4ue1xyXG4gICAgICAgICAgICAgICAgICAgIFwid2lkdGhcIjogNDE1LFxyXG4gICAgICAgICAgICAgICAgICAgIFwiaGVpZ2h0XCI6IDIwMCxcclxuICAgICAgICAgICAgICAgICAgICBcImxpZ2h0U3JjXCI6IFwiL2Fzc2V0cy8zNmM5YTJmYjdkMDU5M2E1ODFhOTIzNzMxMjFjMjg0OC5zdmdcIixcclxuICAgICAgICAgICAgICAgICAgICBcImRhcmtTcmNcIjogXCIvYXNzZXRzL2IzNmM3MDVmNzkwZGFkMjUzOTgxZjE4OTMwODUwMTVhLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICB9fSAvPlxyXG4gICAgICAgICAgICAgICAgPEVtcHR5U3RhdGVUZXh0IG5vdGU9ezw+XHJcbiAgICAgICAgICAgICAgICAgICAgQXBwYXJlbnRseSB0aGlzIGNhdGVnb3J5IGRvZXMgb25seSBoYXZlIFd1bXB1cy5cclxuICAgICAgICAgICAgICAgIDwvPn0gLz5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gb3BlbkNhdGVnb3J5U2V0dGluZ3MoY2F0ZWdvcnkpfSBjbGFzc05hbWU9e2J1dHRvbn0+QWRkIHBlcnNvbjwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L0VtcHR5U3RhdGU+XHJcbiAgICAgICAgPC8+XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBDaGFubmVsSUQgfSBmcm9tIFwiaXR0YWlcIlxyXG5pbXBvcnQgeyBDb2xvclV0aWxzIH0gZnJvbSBcIml0dGFpL3dlYnBhY2tcIlxyXG5pbXBvcnQgeyBDaGFubmVscywgVXNlcnMgfSBmcm9tIFwiaXR0YWkvc3RvcmVzXCJcclxuaW1wb3J0IHsgUGlubmVkRE1TIH0gZnJvbSBcIi4uL3R5cGVzXCJcclxuXHJcbmludGVyZmFjZSBEQkNhdGVnb3J5IHtcclxuICAgIGNvbGxhcHNlZDogYm9vbGVhblxyXG4gICAgY29sb3I6IFtudW1iZXIsIG51bWJlciwgbnVtYmVyLCBudW1iZXJdXHJcbiAgICBkbXM6IENoYW5uZWxJRFtdXHJcbiAgICBpZDogc3RyaW5nXHJcbiAgICBuYW1lOiBzdHJpbmdcclxuICAgIHBvczogbnVtYmVyXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBmcm9tRGV2aWxicm9QaW5ETXMgPSAoKSA9PiB7XHJcbiAgICAvL0B0cy1pZ25vcmVcclxuICAgIGNvbnN0IERldmlsYnJvUGluRE1zRGF0YSA9IGdsb2JhbFRoaXMuQmRBcGkuZ2V0RGF0YShcIlBpbkRNc1wiLCBcImFsbFwiKVxyXG4gICAgY29uc3QgY2hhbm5lbExpc3QgPSBEZXZpbGJyb1BpbkRNc0RhdGEucGlubmVkW1VzZXJzLmdldEN1cnJlbnRVc2VyKCkuaWRdLmNoYW5uZWxMaXN0XHJcbiAgICBjb25zb2xlLmxvZyhPYmplY3QudmFsdWVzKGNoYW5uZWxMaXN0KSlcclxuICAgIGxldCBjYXRlZ29yeTogUGlubmVkRE1TID0ge31cclxuICAgIGZvciAoY29uc3QgZGJDYXRlZ29yeSBvZiBPYmplY3QudmFsdWVzKGNoYW5uZWxMaXN0KSBhcyBEQkNhdGVnb3J5W10pIHtcclxuICAgICAgICBjb25zdCB1c2VySURzID0gZGJDYXRlZ29yeS5kbXNcclxuICAgICAgICAgICAgLmZpbHRlcihjSWQgPT4gQ2hhbm5lbHMuZ2V0Q2hhbm5lbChjSWQpPy50eXBlID09PSAxKSAvL3RoZSA/IGlzIHRvIGlnbm9yZSBpbnZhbGlkIElEc1xyXG4gICAgICAgICAgICAubWFwKGNJZCA9PiBDaGFubmVscy5nZXRDaGFubmVsKGNJZCkucmVjaXBpZW50c1swXSlcclxuICAgICAgICBpZih1c2VySURzLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgICAgICBjYXRlZ29yeVtkYkNhdGVnb3J5Lm5hbWVdID0ge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IENvbG9yVXRpbHMuaW50MmhleChDb2xvclV0aWxzLnJnYjJpbnQoYHJnYmEoJHtkYkNhdGVnb3J5LmNvbG9yWzBdfSwgJHtkYkNhdGVnb3J5LmNvbG9yWzFdfSwgJHtkYkNhdGVnb3J5LmNvbG9yWzJdfSwgMSlgKSksXHJcbiAgICAgICAgICAgICAgICB1c2VyczogdXNlcklEcyxcclxuICAgICAgICAgICAgICAgIHNob3c6ICFkYkNhdGVnb3J5LmNvbGxhcHNlZFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNhdGVnb3J5XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBoYXNUaGVtRW5hYmxlZCA9ICgpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcGluRE1zOiBCb29sZWFuKChnbG9iYWxUaGlzIGFzIGFueSkuQmRBcGkpICYmIEJvb2xlYW4oKGdsb2JhbFRoaXMgYXMgYW55KS5CZEFwaS5QbHVnaW5zLmlzRW5hYmxlZChcIlBpbkRNc1wiKSlcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGhhc0FueU9mVGhlUGx1Z2lucyA9ICgpID0+IHtcclxuICAgIGNvbnN0IHJlc3VsdHMgPSBoYXNUaGVtRW5hYmxlZCgpXHJcbiAgICByZXR1cm4gcmVzdWx0cy5waW5ETXNcclxufSIsImltcG9ydCAqIGFzIHdlYnBhY2sgZnJvbSBcIml0dGFpL3dlYnBhY2tcIlxyXG5pbXBvcnQgeyBSZWFjdCB9IGZyb20gXCJpdHRhaS93ZWJwYWNrXCJcclxuaW1wb3J0IHsgTW9kYWwsIFRleHQsIEhlYWRpbmcsIEJ1dHRvbiB9IGZyb20gXCJpdHRhaS9jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7IE1hcmdpbnMgfSBmcm9tIFwiaXR0YWkvY2xhc3Nlc1wiO1xyXG5pbXBvcnQgKiBhcyBJbXBvcnRlciBmcm9tIFwiLi4vLi4vaGFuZGxlcnMvaW1wb3J0RnJvbVBsdWdpblwiXHJcbmltcG9ydCBwaW5uZWRETVMgZnJvbSBcIi4uLy4uL2hhbmRsZXJzL3Bpbm5lZERNU1wiO1xyXG5cclxuY29uc3QgeyBTbGlkZXMsIHNwcmluZ0NvbmZpZyB9ID0gd2VicGFjay5maW5kQnlQcm9wcyhcIlNsaWRlXCIpXHJcblxyXG5jb25zdCBQYWdlcyA9IHtcclxuICAgIFNXSVRDSDogXCJzd2l0Y2hcIixcclxuICAgIFNXSVRDSF9ET05FOiBcInN3aXRjaERvbmVcIlxyXG59XHJcblxyXG5jb25zdCBXSURUSCA9IDQwMDtcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7IHRyYW5zaXRpb25TdGF0ZTogMSB8IDIgfCAzLCBvbkNsb3NlOiAoKSA9PiB2b2lkIH1cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVudU1vZGFsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzLCB7cGFnZTogc3RyaW5nfT4ge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHM6IFByb3BzIHwgUmVhZG9ubHk8UHJvcHM+KSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHBhZ2U6IFBhZ2VzLlNXSVRDSCxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHNldFBhZ2UocGFnZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cGFnZX0pXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiA8TW9kYWwuTW9kYWxSb290IHNpemU9e01vZGFsLk1vZGFsU2l6ZS5EWU5BTUlDfSB7Li4udGhpcy5wcm9wc30+XHJcbiAgICAgICAgICAgIDxTbGlkZXNcclxuICAgICAgICAgICAgICAgIGFjdGl2ZVNsaWRlPXt0aGlzLnN0YXRlLnBhZ2V9XHJcbiAgICAgICAgICAgICAgICBzcHJpbmdDb25maWc9e3NwcmluZ0NvbmZpZ31cclxuICAgICAgICAgICAgICAgIHdpZHRoPXtXSURUSH1cclxuICAgICAgICAgICAgICAgIGNoaWxkcmVuPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD17UGFnZXMuU1dJVENIfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1vZGFsLk1vZGFsSGVhZGVyIHNlcGFyYXRvcj17ZmFsc2V9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEhlYWRpbmcgdmFyaWFudD1cImhlYWRpbmctbWQvbm9ybWFsXCI+U3dpdGNoPzwvSGVhZGluZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Nb2RhbC5Nb2RhbEhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1vZGFsLk1vZGFsQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGNsYXNzTmFtZT17TWFyZ2lucy5tYXJnaW5Cb3R0b20yMH0+SXQgc2VlbXMgdGhhdCB5b3UgaGF2ZSB1c2VkIFBpbkRNcyBiZWZvcmUuIERvIHlvdSB3YW50IHRvIHN3aXRjaCB0aGUgdXNlciBsaXN0IHRvIHRoaXMgcGx1Z2luPzwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Nb2RhbC5Nb2RhbENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNb2RhbC5Nb2RhbEZvb3Rlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17YXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuc3dpdGNoKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFBhZ2UoUGFnZXMuU1dJVENIX0RPTkUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5Td2l0Y2g8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY29sb3I9e0J1dHRvbi5Db2xvcnMuV0hJVEV9IGxvb2s9e0J1dHRvbi5Mb29rcy5MSU5LfSBvbkNsaWNrPXt0aGlzLnByb3BzLm9uQ2xvc2V9Pk5vPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTW9kYWwuTW9kYWxGb290ZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+LFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9e1BhZ2VzLlNXSVRDSF9ET05FfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1vZGFsLk1vZGFsSGVhZGVyIHNlcGFyYXRvcj17ZmFsc2V9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEhlYWRpbmcgdmFyaWFudD1cImhlYWRpbmctbWQvbm9ybWFsXCI+RG9uZTwvSGVhZGluZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Nb2RhbC5Nb2RhbEhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1vZGFsLk1vZGFsQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGNsYXNzTmFtZT17TWFyZ2lucy5tYXJnaW5Cb3R0b20yMH0+VGhlIHN3aXRjaGluZyB3YXMgZG9uZSBzdWNlc3NmdWxseS4gV2UgY2FuIGRpc2FibGUgdGhlbSBpZiB5b3Ugd2FudDwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Nb2RhbC5Nb2RhbENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNb2RhbC5Nb2RhbEZvb3Rlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17YXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuZGlzYWJsZUFsbCgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkNsb3NlKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PkRpc2FibGU8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY29sb3I9e0J1dHRvbi5Db2xvcnMuV0hJVEV9IGxvb2s9e0J1dHRvbi5Mb29rcy5MSU5LfSBvbkNsaWNrPXt0aGlzLnByb3BzLm9uQ2xvc2V9PkkgYW0gZmluZTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L01vZGFsLk1vZGFsRm9vdGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICA8L01vZGFsLk1vZGFsUm9vdD5cclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBzd2l0Y2goKSB7XHJcbiAgICAgICAgaWYgKEltcG9ydGVyLmhhc1RoZW1FbmFibGVkKCkucGluRE1zKXtcclxuICAgICAgICAgICAgY29uc3QgbmV3U2V0dGluZ3MgPSBJbXBvcnRlci5mcm9tRGV2aWxicm9QaW5ETXMoKVxyXG4gICAgICAgICAgICBwaW5uZWRETVMuc2V0UmF3KG5ld1NldHRpbmdzKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBkaXNhYmxlQWxsKCkge1xyXG4gICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgIGlmIChJbXBvcnRlci5oYXNUaGVtRW5hYmxlZCgpLnBpbkRNcykgQmRBcGk/LlBsdWdpbnM/LmRpc2FibGU/LihcIlBpbkRNc1wiKVxyXG4gICAgfVxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vdHlwZXMuZC50c1wiIC8+XHJcblxyXG5pbXBvcnQgeyBQbHVnaW4gfSBmcm9tIFwiaXR0YWkvZW50aXRpZXNcIlxyXG5pbXBvcnQgKiBhcyBwYXRjaGVyIGZyb20gXCJpdHRhaS9wYXRjaGVyXCJcclxuaW1wb3J0IHsgc2VhcmNoQ2xhc3NOYW1lTW9kdWxlcyB9IGZyb20gXCJpdHRhaS91dGlsaXRpZXNcIlxyXG5pbXBvcnQgKiBhcyB3ZWJwYWNrIGZyb20gXCJpdHRhaS93ZWJwYWNrXCJcclxuaW1wb3J0IHsgUmVhY3QsIERpc3BhdGNoZXIsIE1vZGFsQWN0aW9ucyB9IGZyb20gXCJpdHRhaS93ZWJwYWNrXCJcclxuaW1wb3J0ICogYXMgSXR0YWkgZnJvbSBcIml0dGFpXCJcclxuXHJcbmltcG9ydCBTZXR0aW5ncyBmcm9tIFwiLi9jb21wb25lbnRzL1NldHRpbmdzXCJcclxuaW1wb3J0IHBhdGNoRG1MaXN0IGZyb20gXCIuL3BhdGNoZXMvZG1saXN0XCJcclxuaW1wb3J0IHBhdGNoRG1CdXR0b24gZnJvbSBcIi4vcGF0Y2hlcy9kbWJ1dHRvblwiXHJcbmltcG9ydCBwYXRjaEZyaWVuZHNQYWdlIGZyb20gXCIuL3BhdGNoZXMvZnJpZW5kc2xpc3RcIlxyXG5pbXBvcnQgcGlubmVkRE1TIGZyb20gXCIuL2hhbmRsZXJzL3Bpbm5lZERNU1wiXHJcbmltcG9ydCAqIGFzIGNvbnN0YW50cyBmcm9tIFwiLi9jb25zdGFudHNcIlxyXG5pbXBvcnQgU2V0dGluZ3NTd2l0Y2hlciBmcm9tIFwiLi9jb21wb25lbnRzL1NldHRpbmdzU3dpdGNoZXJcIlxyXG5pbXBvcnQgeyBoYXNBbnlPZlRoZVBsdWdpbnMgfSBmcm9tIFwiLi9oYW5kbGVycy9pbXBvcnRGcm9tUGx1Z2luXCJcclxuXHJcbmxldCB2aXNpYmlsaXR5U3RvcmFnZToge1tjYXRlZ29yeTogc3RyaW5nXTogYm9vbGVhbn0gPSB7fVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRE1Gb2xkZXJzIGV4dGVuZHMgUGx1Z2luIHtcclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMuc2V0U2V0dGluZ3NQYW5lbCgoKSA9PiA8U2V0dGluZ3MgLz4pXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy9AdHMtaWdub3JlIGludGVybmFsIHVzYWdlIG9ubHlcclxuICAgICAgICBnbG9iYWxUaGlzLkl0dGFpID0gSXR0YWlcclxuICAgICAgICBcclxuICAgICAgICBwYXRjaERtTGlzdCgpXHJcbiAgICAgICAgcGF0Y2hEbUJ1dHRvbigpXHJcbiAgICAgICAgcGF0Y2hGcmllbmRzUGFnZSgpXHJcblxyXG4gICAgICAgIHRoaXMub3BlblNldHRpbmdzU3dpdGNoZXIoKVxyXG5cclxuICAgICAgICBEaXNwYXRjaGVyLnN1YnNjcmliZShcIlNUUkVBTUVSX01PREVfVVBEQVRFXCIsIHRoaXMub25TdHJlYW1lck1vZGVDaGFuZ2UpXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvcGVuU2V0dGluZ3NTd2l0Y2hlcigpIHtcclxuICAgICAgICBpZihoYXNBbnlPZlRoZVBsdWdpbnMoKSkgTW9kYWxBY3Rpb25zLm9wZW5Nb2RhbCgocHJvcHMpID0+IDxTZXR0aW5nc1N3aXRjaGVyIHsuLi5wcm9wc30gLz4pXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvblN0cmVhbWVyTW9kZUNoYW5nZSh7dmFsdWV9OiB7dmFsdWU6IGJvb2xlYW59KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc2V0dGluZ3MuZ2V0KFwic3RyZWFtZXJNb2RlXCIsIGNvbnN0YW50cy5TZXR0aW5ncy5EZWZhdWx0U2V0dGluZ3MuU1RSRUFNRVJfTU9ERSkpXHJcbiAgICAgICAgcGlubmVkRE1TLmdldENhdGVnb3JpZXMoKS5mb3JFYWNoKGNhdGVnb3J5ID0+IHtcclxuICAgICAgICAgICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICB2aXNpYmlsaXR5U3RvcmFnZVtjYXRlZ29yeV0gPSBwaW5uZWRETVMuZ2V0VmlzaWJpbGl0eShjYXRlZ29yeSlcclxuICAgICAgICAgICAgICAgIHBpbm5lZERNUy5zZXRWaXNpYmlsaXR5KGNhdGVnb3J5LCBmYWxzZSlcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHBpbm5lZERNUy5zZXRWaXNpYmlsaXR5KGNhdGVnb3J5LCB2aXNpYmlsaXR5U3RvcmFnZVtjYXRlZ29yeV0gPz8gZmFsc2UpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIERpc3BhdGNoZXIuZGlydHlEaXNwYXRjaCh7IHR5cGU6IGNvbnN0YW50cy5ESVNQQVRDSEVSX1BJTkRNU19DSEFOR0VfTElTVCB9KVxyXG4gICAgfVxyXG5cclxuICAgIHN0b3AoKSB7XHJcbiAgICAgICAgcGF0Y2hlci51bnBhdGNoQWxsKClcclxuICAgICAgICBEaXNwYXRjaGVyLnVuc3Vic2NyaWJlKFwiU1RSRUFNRVJfTU9ERV9VUERBVEVcIiwgdGhpcy5vblN0cmVhbWVyTW9kZUNoYW5nZSlcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgQkRQbHVnaW4gZnJvbSBcIi4uL2VudGl0aWVzL0JEUGx1Z2luXCI7XHJcbmltcG9ydCBHTVBsdWdpbiBmcm9tIFwiLi4vZW50aXRpZXMvR01QbHVnaW5cIjtcclxuaW1wb3J0IFBDdjJQbHVnaW4gZnJvbSBcIi4uL2VudGl0aWVzL1BDdjJQbHVnaW5cIjtcclxuaW1wb3J0IHsgc2V0SW5zdGFuY2UgfSBmcm9tIFwiLi4vc2V0dGluZ3NcIjtcclxuaW1wb3J0ICogYXMgQ2hhbmdlbG9nSGFuZGxlciBmcm9tIFwiLi4vY2hhbmdlbG9nXCI7XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHBsdWdpbkNsYXNzIGZyb20gXCJAaXR0YWkvcGx1Z2luXCI7XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0ICogYXMgY29uZmlnIGZyb20gXCJAaXR0YWkvY29uZmlnXCI7XHJcbmltcG9ydCB7IHVucGF0Y2hBbGwgfSBmcm9tIFwiLi4vcGF0Y2hlclwiO1xyXG5pbXBvcnQgeyBsb2FkRGV2UGx1Z2luLCBsb2FkRGV2U2VydmVyIH0gZnJvbSBcIi4uL2RldmNsaWVudFwiO1xyXG5pZiAocHJvY2Vzcy5lbnYuREVWX01PREUgPT0gXCJ0cnVlXCIpIGxvYWREZXZTZXJ2ZXIoKTtcclxuXHJcbmxldCBJdHRhaVBsdWdpbiA9IGNsYXNzIEl0dGFpUGx1Z2luIGV4dGVuZHMgKCgpID0+IHtcclxuICAgIC8vIHN3aXRjaCAocHJvY2Vzcy5lbnYuQ0xJRU5UX01PRCkge1xyXG4gICAgLy8gICAgIGNhc2UgXCJwb3dlcmNvcmR2MlwiOlxyXG4gICAgLy8gICAgICAgICByZXR1cm4gUEN2MlBsdWdpblxyXG4gICAgLy8gICAgIGNhc2UgXCJiZXR0ZXJkaXNjb3JkXCI6XHJcbiAgICAvLyAgICAgICAgIHJldHVybiBCRFBsdWdpblxyXG4gICAgLy8gICAgIGNhc2UgXCJnb29zZW1vZFwiOlxyXG4gICAgLy8gICAgICAgICByZXR1cm4gR01QbHVnaW5cclxuICAgIC8vICAgICBkZWZhdWx0OlxyXG4gICAgLy8gICAgICAgICByZXR1cm4gY2xhc3MgUGx1Z2luIHt9O1xyXG4gICAgLy8gfVxyXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5DTElFTlRfTU9EID09IFwicG93ZXJjb3JkdjJcIikgcmV0dXJuIFBDdjJQbHVnaW5cclxuICAgICAgICBlbHNlIGlmIChwcm9jZXNzLmVudi5DTElFTlRfTU9EID09IFwiYmV0dGVyZGlzY29yZFwiKSByZXR1cm4gQkRQbHVnaW5cclxuICAgICAgICBlbHNlIGlmIChwcm9jZXNzLmVudi5DTElFTlRfTU9EID09IFwiZ29vc2Vtb2RcIikgcmV0dXJuIEdNUGx1Z2luXHJcbiAgICAgICAgcmV0dXJuIGNsYXNzIFBsdWdpbiB7fVxyXG59KSgpIHtcclxuICAgIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcclxuICAgICAgICBzdXBlciguLi5hcmdzKTtcclxuICAgICAgICBzZXRJbnN0YW5jZSh0aGlzLl9faXR0YWlJbnRlcm5hbHMpXHJcbiAgICAgICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBwbHVnaW5DbGFzcygpO1xyXG4gICAgICAgIHRoaXMuZnJpZW5kbHlOYW1lID0gdGhpcy5pbnN0YW5jZS5mcmllbmRseU5hbWU7XHJcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5fX2l0dGFpSW50ZXJuYWxQbHVnaW4gPSB0aGlzO1xyXG4gICAgICAgIC8vIGdsb2JhbFRoaXNbXCJpdHRhaVwiICsgdGhpcy5mcmllbmRseU5hbWUudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC8gL2csIFwiXCIpXSA9IGl0dGFpO1xyXG4gICAgICAgIC8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYHN0eWxlW2l0dGFpXVtwbHVnaW49XCIke21hbmlmZXN0Lm5hbWUucmVwbGFjZSgvIC9nLCBcIlwiKX1cIl1gKT8uZm9yRWFjaCgoZTogSFRNTFN0eWxlRWxlbWVudCkgPT4ge1xyXG4gICAgICAgIC8vICAgICB0aGlzLmNhY2hlZENzcy5wdXNoKGUuaW5uZXJUZXh0KTtcclxuICAgICAgICAvLyAgICAgZS5yZW1vdmUoKTtcclxuICAgICAgICAvLyB9KTtcclxuICAgIH1cclxuXHJcbiAgICBoYXNTZXR0aW5nc1BhbmVsID0gZmFsc2U7XHJcbiAgICBjYWNoZWRDc3MgPSBbXTtcclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAvLyB0aGlzLmNhY2hlZENzcy5mb3JFYWNoKChlLCBrKSA9PiB7XHJcbiAgICAgICAgICAgIC8vICAgICBjb25zdCBlbGVtID0gT2JqZWN0LmFzc2lnbihkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIiksIHtcclxuICAgICAgICAgICAgLy8gICAgICAgICBpbm5lclRleHQ6IGVcclxuICAgICAgICAgICAgLy8gICAgIH0pXHJcbiAgICAgICAgICAgIC8vICAgICBlbGVtLnNldEF0dHJpYnV0ZShcIml0dGFpXCIsIFwidHJ1ZVwiKTtcclxuICAgICAgICAgICAgLy8gICAgIGVsZW0uc2V0QXR0cmlidXRlKFwicGx1Z2luXCIsIG1hbmlmZXN0Lm5hbWUucmVwbGFjZSgvIC9nLCBcIlwiKSk7XHJcbiAgICAgICAgICAgIC8vICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGVsZW0pO1xyXG4gICAgICAgICAgICAvLyAgICAgZGVsZXRlIHRoaXMuY2FjaGVkQ3NzW2tdO1xyXG4gICAgICAgICAgICAvLyB9KVxyXG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuSEFTX0NIQU5HRUxPRyA9PSBcInRydWVcIiAmJiBCb29sZWFuKGNvbmZpZy5jaGFuZ2Vsb2cpICYmICFDaGFuZ2Vsb2dIYW5kbGVyLmhhc1NlZW5DaGFuZ2Vsb2coKSkge1xyXG4gICAgICAgICAgICAgICAgQ2hhbmdlbG9nSGFuZGxlci5zZXRTZWVuQ2hhbmdlbG9nKHRydWUpXHJcbiAgICAgICAgICAgICAgICBDaGFuZ2Vsb2dIYW5kbGVyLm9wZW5DaGFuZ2Vsb2dNb2RhbCgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2Uuc3RhcnQoKTtcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpXHJcbiAgICAgICAgICAgIHRocm93IGVyclxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdG9wKCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IHRoaXMuaW5zdGFuY2Uuc3RvcCgpO1xyXG4gICAgICAgICAgICB1bnBhdGNoQWxsKCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmhhc1NldHRpbmdzUGFuZWwpIHRoaXMucmVtb3ZlU2V0dGluZ3NQYW5lbCgpO1xyXG4gICAgICAgICAgICAvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBzdHlsZVtpdHRhaV1bcGx1Z2luPVwiJHttYW5pZmVzdC5uYW1lLnJlcGxhY2UoLyAvZywgXCJcIil9XCJdYCk/LmZvckVhY2goZSA9PiB7XHJcbiAgICAgICAgICAgIC8vICAgICB0aGlzLmNhY2hlZENzcy5wdXNoKGUuaW5uZXJUZXh0KTtcclxuICAgICAgICAgICAgLy8gICAgIGUucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIC8vIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycilcclxuICAgICAgICAgICAgdGhyb3cgZXJyXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNldFNldHRpbmdzUGFuZWwoY29tcG9uZW50KSB7XHJcbiAgICAgICAgdGhpcy5oYXNTZXR0aW5nc1BhbmVsID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLl9faXR0YWlJbnRlcm5hbHMuc2V0U2V0dGluZ3NQYW5lbChjb21wb25lbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZVNldHRpbmdzUGFuZWwoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaGFzU2V0dGluZ3NQYW5lbCkge1xyXG4gICAgICAgICAgICB0aGlzLmhhc1NldHRpbmdzUGFuZWwgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5fX2l0dGFpSW50ZXJuYWxzLnJlbW92ZVNldHRpbmdzUGFuZWwoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuaWYgKHByb2Nlc3MuZW52LkNMSUVOVF9NT0QgPT09IFwiZ29vc2Vtb2RcIikge1xyXG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgSXR0YWlQbHVnaW4oKTtcclxuICAgIGNvbnN0IGhhbmRsZXJzID0ge2dvb3NlbW9kSGFuZGxlcnM6IGluc3RhbmNlLmdvb3NlbW9kSGFuZGxlcnN9XHJcbiAgICBpZiAocHJvY2Vzcy5lbnYuREVWX01PREUgPT0gXCJ0cnVlXCIpIHtcclxuICAgICAgICBsb2FkRGV2UGx1Z2luKGhhbmRsZXJzKVxyXG4gICAgfVxyXG4gICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgSXR0YWlQbHVnaW4gPSBoYW5kbGVycztcclxufVxyXG5pZiAocHJvY2Vzcy5lbnYuREVWX01PREUgPT09IFwidHJ1ZVwiICYmIHByb2Nlc3MuZW52LkNMSUVOVF9NT0QgIT09IFwiZ29vc2Vtb2RcIikge1xyXG4gICAgbG9hZERldlBsdWdpbihJdHRhaVBsdWdpbilcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSXR0YWlQbHVnaW47XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkZsdXhEaXNwYXRjaGVyIiwiQ29udGV4dE1lbnUiLCJfX2RlZlByb3AiLCJfX2RlZk5vcm1hbFByb3AiLCJfX3B1YmxpY0ZpZWxkIiwibWFuaWZlc3QiLCJnZXRBbGwiLCJjbGFzc2VzIiwiTWFyZ2lucyIsIkNhdGVnb3J5IiwiQ29sb3JQaWNrZXIiLCJyYW5kb21TdHJpbmciLCJkaXNjb3JkR2V0TWVzc2FnZXMiLCJkaXNjb3JkR2V0TWVzc2FnZSIsIlVzZXIiLCJqb2luQ2xhc3NlcyIsInNldHRpbmdzLmdldCIsInNldCIsInNldHRpbmdzLnNldCIsImNvbmZpZy5tYW5pZmVzdCIsImxvZ2dlci5lcnJvciIsInBhdGNoZXIuYWZ0ZXIiLCJUb2FzdCIsInN0eWxlcyIsIndlYnBhY2suZmluZEJ5UHJvcHMiLCJjb25zdGFudHMuU2V0dGluZ3MiLCJjYXRlZ29yeVN0eWxlcyIsIkxpc3RTZWN0aW9uSXRlbSIsIndlYnBhY2suZmluZEJ5RGlzcGxheU5hbWUiLCJFbXB0eVN0YXRlSW1hZ2UiLCJFbXB0eVN0YXRlIiwiRW1wdHlTdGF0ZVRleHQiLCJjb25zdGFudHMuRElTUEFUQ0hFUl9QSU5ETVNfQ0hBTkdFX0xJU1QiLCJzZXR0aW5ncy5nZXRBbGwiLCJ0b2FzdC5zaG93Iiwic2V0dGluZ3MucmVzZXQiLCJzZXR0aW5ncy5zZXRBbGwiLCJDb250ZXh0TWVudUhhbmRsZXIiLCJVc2VyU3VtbWFyeUl0ZW0iLCJVU0VSX0lDT05fU0laRSIsIndlYnBhY2suZmluZCIsIndlYnBhY2suQ29udGV4dE1lbnUiLCJJbXBvcnRlci5oYXNUaGVtRW5hYmxlZCIsIkltcG9ydGVyLmZyb21EZXZpbGJyb1BpbkRNcyIsIlNldHRpbmdzU3dpdGNoZXIiLCJwYXRjaGVyLnVucGF0Y2hBbGwiLCJwbHVnaW5DbGFzcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFBQSxJQUFJLGFBQWEsR0FBRyxDQUFDLE1BQU07SUFDM0IsRUFLSSxPQUFPLFVBQVUsQ0FBQyxLQUFLLElBQUksS0FBQSxDQUFBO0lBQy9CLENBQUMsR0FBRyxDQUFDO0lBQ0UsU0FBTSxJQUFBLENBQUEsTUFBQSxFQUF1QjtJQUNwQyxFQU9DLE9BQUEsYUFBQSxDQUFBLFVBQUEsQ0FBQSxNQUFBLENBQUEsQ0FBQTtJQUNELENBQUM7SUFDTSxTQUFDLE9BQXNCLENBQUMsTUFBTSxFQUFFO0lBQ3ZDLEVBS0ksT0FBTyxhQUFhLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFDQSxTQUFBLFdBQUEsQ0FBQSxHQUFBLEtBQUEsRUFBQTtJQUNELEVBQUUsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMs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Q0FBQztJQUN6RSxNQUFNLEtBQUssR0FBRyxXQUFXLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzlDLE1BQU0sSUFBSSxHQUFHLFdBQVcsQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDN0MsTUFBTSxXQUFXLEdBQUcsV0FBVyxDQUFDLFVBQVUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDZmxELElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxXQUFXLEVBQUUsT0FBTyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7Ozs7OztJQ0V0dEIsU0FBUyxZQUFZLENBQUM7SUFDckMsRUFBRSxRQUFRO0lBQ1YsQ0FBQyxFQUFFO0lBQ0gsRUFBRSx1QkFBdUJ0QixPQUFLLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRTtJQUNwRCxJQUFJLFNBQVMsRUFBRSxNQUFNLENBQUMsS0FBSztJQUMzQixHQUFHLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDZjs7SUNKQSxNQUFNLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxHQUFHLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNsRCxNQUFNLElBQUksR0FBRyxDQUFDLElBQUksRUFBRSxPQUFPLEtBQUs7SUFDdkMsRUFBRSxNQUFNLE9BQU8sR0FBRyxPQUFPLEVBQUUsRUFBRSxJQUFJLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNsRCxFQUFFLFNBQVMsQ0FBQztJQUNaLElBQUksRUFBRSxFQUFFLE9BQU87SUFDZixJQUFJLE9BQU8sRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxPQUFPLEVBQUU7SUFDeEMsTUFBTSxRQUFRLEVBQUUsU0FBUyxDQUFDLE1BQU07SUFDaEMsTUFBTSxTQUFTLEVBQUUsT0FBTyxJQUFJLEtBQUssVUFBVSxtQkFBbUJBLE9BQUssQ0FBQyxhQUFhLENBQUN1QixZQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxHQUFHLElBQUksRUFBRTtJQUM3RyxLQUFLLENBQUM7SUFDTixHQUFHLENBQUMsQ0FBQztJQUNMLEVBQUUsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQyxDQUFDO0lBQ0ssTUFBTSxHQUFHLEdBQUcsQ0FBQyxFQUFFLEtBQUssUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2pDLE1BQU0sWUFBWSxHQUFHQSxZQUFLLENBQUM7SUFDM0IsTUFBTSxTQUFTLEdBQUc7SUFDekIsRUFBRSxHQUFHLEVBQUUsQ0FBQztJQUNSLEVBQUUsTUFBTSxFQUFFLENBQUM7SUFDWCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDbkJNLE1BQU0sTUFBTSxHQUFHLE1BQU07SUFDNUIsRUFBRSxPQUFPTixHQUFZLENBQUMsa0JBQWtCLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDOUMsQ0FBQyxDQUFDO0lBQ0ssTUFBTSxhQUFhLEdBQUcsTUFBTTtJQUNuQyxFQUFFLE1BQU0sZ0JBQWdCLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBQ2pELEVBQUUsT0FBTyxnQkFBZ0IsQ0FBQztJQUMxQixDQUFDLENBQUM7SUFDSyxNQUFNLFdBQVcsR0FBRyxDQUFDLFFBQVEsS0FBSztJQUN6QyxFQUFFLE9BQU8sTUFBTSxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDNUIsQ0FBQyxDQUFDO0lBQ0ssTUFBTSxNQUFNLEdBQUcsQ0FBQyxPQUFPLEtBQUs7SUFDbkMsRUFBRUUsR0FBWSxDQUFDLGtCQUFrQixFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzVDLEVBQUUsVUFBVSxDQUFDLGFBQWEsQ0FBQyxFQUFFLElBQUksRUFBRSxvQkFBb0IsRUFBRSxDQUFDLENBQUM7SUFDM0QsQ0FBQyxDQUFDO0lBQ0ssTUFBTSxXQUFXLEdBQUcsQ0FBQyxRQUFRLEVBQUUsU0FBUyxHQUFHO0lBQ2xELEVBQUUsS0FBSyxFQUFFLFVBQVUsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLGtCQUFrQixDQUFDO0lBQ3pELEVBQUUsS0FBSyxFQUFFLEVBQUU7SUFDWCxFQUFFLElBQUksRUFBRSxJQUFJO0lBQ1osQ0FBQyxLQUFLO0lBQ04sRUFBRSxJQUFJLGdCQUFnQixHQUFHLE1BQU0sRUFBRSxDQUFDO0lBQ2xDLEVBQUUsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLEdBQUcsU0FBUyxDQUFDO0lBQ3pDLEVBQUUsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDM0IsQ0FBQyxDQUFDO0lBQ0ssTUFBTSxRQUFRLEdBQUcsQ0FBQyxRQUFRLEVBQUUsS0FBSyxLQUFLO0lBQzdDLEVBQUUsSUFBSSxnQkFBZ0IsR0FBRyxNQUFNLEVBQUUsQ0FBQztJQUNsQyxFQUFFLElBQUksZ0JBQWdCLENBQUMsUUFBUSxDQUFDLElBQUksSUFBSTtJQUN4QyxJQUFJLE1BQU0sSUFBSSxLQUFLLENBQUMsQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7SUFDM0QsRUFBRSxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQzNDLEVBQUUsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDM0IsQ0FBQyxDQUFDO0lBQ0ssTUFBTSxRQUFRLEdBQUcsQ0FBQyxRQUFRLEtBQUs7SUFDdEMsRUFBRSxJQUFJLGdCQUFnQixHQUFHLE1BQU0sRUFBRSxDQUFDO0lBQ2xDLEVBQUUsSUFBSSxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsSUFBSSxJQUFJO0lBQ3hDLElBQUksTUFBTSxJQUFJLEtBQUssQ0FBQyxDQUFDLFNBQVMsRUFBRSxRQUFRLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztJQUMzRCxFQUFFLE9BQU8sZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxDQUFDO0lBQzFDLENBQUMsQ0FBQztJQUNLLE1BQU0sYUFBYSxHQUFHLENBQUMsUUFBUSxFQUFFLFVBQVUsS0FBSztJQUN2RCxFQUFFLElBQUksZ0JBQWdCLEdBQUcsTUFBTSxFQUFFLENBQUM7SUFDbEMsRUFBRSxJQUFJLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxJQUFJLElBQUk7SUFDeEMsSUFBSSxNQUFNLElBQUksS0FBSyxDQUFDLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO0lBQzNELEVBQUUsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxHQUFHLFVBQVUsQ0FBQztJQUMvQyxFQUFFLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQzNCLENBQUMsQ0FBQztJQUNLLE1BQU0sYUFBYSxHQUFHLENBQUMsUUFBUSxLQUFLO0lBQzNDLEVBQUUsSUFBSSxnQkFBZ0IsR0FBRyxNQUFNLEVBQUUsQ0FBQztJQUNsQyxFQUFFLElBQUksZ0JBQWdCLENBQUMsUUFBUSxDQUFDLElBQUksSUFBSTtJQUN4QyxJQUFJLE1BQU0sSUFBSSxLQUFLLENBQUMsQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7SUFDM0QsRUFBRSxPQUFPLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUM7SUFDakQsQ0FBQyxDQUFDO0lBQ0ssTUFBTSxjQUFjLEdBQUcsQ0FBQyxlQUFlLEVBQUUsZUFBZSxLQUFLO0lBQ3BFLEVBQUUsSUFBSSxnQkFBZ0IsR0FBRyxNQUFNLEVBQUUsQ0FBQztJQUNsQyxFQUFFLE1BQU0sQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLEVBQUUsZUFBZSxFQUFFLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQyxnQkFBZ0IsRUFBRSxlQUFlLENBQUMsQ0FBQyxDQUFDO0lBQy9ILEVBQUUsT0FBTyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUMzQyxFQUFFLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQzNCLENBQUMsQ0FBQztJQUNLLE1BQU0sY0FBYyxHQUFHLENBQUMsUUFBUSxLQUFLO0lBQzVDLEVBQUUsSUFBSSxnQkFBZ0IsR0FBRyxNQUFNLEVBQUUsQ0FBQztJQUNsQyxFQUFFLElBQUksZ0JBQWdCLENBQUMsUUFBUSxDQUFDLElBQUksSUFBSTtJQUN4QyxJQUFJLE1BQU0sSUFBSSxLQUFLLENBQUMsQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7SUFDM0QsRUFBRSxPQUFPLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3BDLEVBQUUsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDM0IsQ0FBQyxDQUFDO0lBQ0ssTUFBTSxRQUFRLEdBQUcsQ0FBQyxRQUFRLEtBQUs7SUFDdEMsRUFBRSxNQUFNLGdCQUFnQixHQUFHLE1BQU0sRUFBRSxDQUFDO0lBQ3BDLEVBQUUsSUFBSSxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsSUFBSSxJQUFJO0lBQ3hDLElBQUksTUFBTSxJQUFJLEtBQUssQ0FBQyxDQUFDLFNBQVMsRUFBRSxRQUFRLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztJQUMzRCxFQUFFLE9BQU8sZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxDQUFDO0lBQzFDLENBQUMsQ0FBQztJQUNLLE1BQU0sV0FBVyxHQUFHLENBQUMsUUFBUSxFQUFFLFFBQVEsS0FBSztJQUNuRCxFQUFFLElBQUksZ0JBQWdCLEdBQUcsTUFBTSxFQUFFLENBQUM7SUFDbEMsRUFBRSxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDO0lBQzlDLEVBQUUsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDM0IsQ0FBQyxDQUFDO0lBQ0ssTUFBTSxPQUFPLEdBQUcsQ0FBQyxRQUFRLEVBQUUsTUFBTSxLQUFLO0lBQzdDLEVBQUUsSUFBSSxPQUFPLE1BQU0sS0FBSyxRQUFRO0lBQ2hDLElBQUksTUFBTSxJQUFJLEtBQUssQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7SUFDdkMsRUFBRSxJQUFJLGdCQUFnQixHQUFHLE1BQU0sRUFBRSxDQUFDO0lBQ2xDLEVBQUUsSUFBSSxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsSUFBSSxJQUFJO0lBQ3hDLElBQUksTUFBTSxJQUFJLEtBQUssQ0FBQyxDQUFDLFNBQVMsRUFBRSxRQUFRLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztJQUMzRCxFQUFFLElBQUksUUFBUSxHQUFHLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUNsRCxFQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDeEIsRUFBRSxXQUFXLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ2xDLENBQUMsQ0FBQztJQUNLLE1BQU0sVUFBVSxHQUFHLENBQUMsUUFBUSxFQUFFLE1BQU0sS0FBSztJQUNoRCxFQUFFLElBQUksT0FBTyxNQUFNLEtBQUssUUFBUTtJQUNoQyxJQUFJLE1BQU0sSUFBSSxLQUFLLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO0lBQ3ZDLEVBQUUsSUFBSSxnQkFBZ0IsR0FBRyxNQUFNLEVBQUUsQ0FBQztJQUNsQyxFQUFFLElBQUksZ0JBQWdCLENBQUMsUUFBUSxDQUFDLElBQUksSUFBSTtJQUN4QyxJQUFJLE1BQU0sSUFBSSxLQUFLLENBQUMsQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7SUFDM0QsRUFBRSxJQUFJLFFBQVEsR0FBRyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDbEQsRUFBRSxRQUFRLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksS0FBSyxJQUFJLEtBQUssTUFBTSxDQUFDLENBQUM7SUFDeEQsRUFBRSxXQUFXLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ2xDLENBQUMsQ0FBQztJQUNLLE1BQU0sV0FBVyxHQUFHLENBQUMsTUFBTSxLQUFLO0lBQ3ZDLEVBQUUsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsS0FBSyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDN0UsQ0FBQyxDQUFDO0lBQ0ssTUFBTSxlQUFlLEdBQUcsQ0FBQyxNQUFNLEtBQUs7SUFDM0MsRUFBRSxNQUFNLGdCQUFnQixHQUFHLE1BQU0sRUFBRSxDQUFDO0lBQ3BDLEVBQUUsS0FBSyxNQUFNLFlBQVksSUFBSSxnQkFBZ0IsRUFBRTtJQUMvQyxJQUFJLE1BQU0sUUFBUSxHQUFHLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3BELElBQUksSUFBSSxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksS0FBSyxJQUFJLEtBQUssTUFBTSxDQUFDO0lBQ3RELE1BQU0sT0FBTyxZQUFZLENBQUM7SUFDMUIsR0FBRztJQUNILENBQUMsQ0FBQztJQUNLLE1BQU0sYUFBYSxHQUFHLE1BQU07SUFDbkMsRUFBRSxNQUFNLEdBQUcsV0FBVyxDQUFDLEdBQUduQixPQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzVELEVBQUVBLE9BQUssQ0FBQyxTQUFTLENBQUMsTUFBTTtJQUN4QixJQUFJLE1BQU0sUUFBUSxHQUFHLE1BQU0sS0FBSyxXQUFXLEVBQUUsQ0FBQztJQUM5QyxJQUFJLFVBQVUsQ0FBQyxTQUFTLENBQUMsb0JBQW9CLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDekQsSUFBSSxPQUFPLE1BQU0sVUFBVSxDQUFDLFdBQVcsQ0FBQyxvQkFBb0IsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUN4RSxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDVCxDQUFDLENBQUM7QUFDRixvQkFBZTtJQUNmLEVBQUUsTUFBTTtJQUNSLEVBQUUsYUFBYTtJQUNmLEVBQUUsV0FBVztJQUNiLEVBQUUsTUFBTTtJQUNSLEVBQUUsV0FBVztJQUNiLEVBQUUsY0FBYztJQUNoQixFQUFFLGNBQWM7SUFDaEIsRUFBRSxRQUFRO0lBQ1YsRUFBRSxRQUFRO0lBQ1YsRUFBRSxhQUFhO0lBQ2YsRUFBRSxhQUFhO0lBQ2YsRUFBRSxXQUFXO0lBQ2IsRUFBRSxPQUFPO0lBQ1QsRUFBRSxRQUFRO0lBQ1YsRUFBRSxVQUFVO0lBQ1osRUFBRSxXQUFXO0lBQ2IsRUFBRSxlQUFlO0lBQ2pCLEVBQUUsYUFBYTtJQUNmLENBQUM7O0lDOUhNLFNBQVMsYUFBYSxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFO0lBQ2hELEVBQUUsSUFBSSxPQUFPLElBQUksS0FBSyxRQUFRLEVBQUU7SUFDaEMsSUFBSSxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLEtBQUssR0FBRyxLQUFLLElBQUksQ0FBQyxDQUFDO0lBQ2hFLEdBQUc7SUFDSCxFQUFFLE1BQU0sWUFBWSxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNuRSxFQUFFLE1BQU0sTUFBTSxHQUFHLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLEtBQUs7SUFDNUQsSUFBSSxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDO0lBQ3JCLElBQUksT0FBTyxHQUFHLENBQUM7SUFDZixHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDVCxFQUFFLE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFDTSxTQUFTLFNBQVMsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRTtJQUN6QyxFQUFFLElBQUksT0FBTyxHQUFHLEdBQUcsQ0FBQztJQUNwQixFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BELEVBQUUsT0FBTyxPQUFPLENBQUM7SUFDakI7O0lDckJPLE1BQU0sOEJBQThCLEdBQUcsV0FBVyxDQUFDLDBDQUEwQyxDQUFDLENBQUM7SUFDL0YsTUFBTSxTQUFTLEdBQUcsV0FBVyxDQUFDLFNBQVMsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0lBQzNELE1BQU0sUUFBUSxHQUFHLFdBQVcsQ0FBQyxlQUFlLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztJQUNwRSxNQUFNLFlBQVksR0FBRyxXQUFXLENBQUMsYUFBYSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3pELE1BQU0sc0JBQXNCLEdBQUcsV0FBVyxDQUFDLGlCQUFpQixFQUFFLGFBQWEsRUFBRSxlQUFlLENBQUMsQ0FBQztJQUM5RixNQUFNLEtBQUssR0FBRyxXQUFXLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUMvQyxNQUFNLFNBQVMsR0FBRyxXQUFXLENBQUMsV0FBVyxFQUFFLGNBQWMsQ0FBQyxDQUFDO0lBQzNELE1BQU0sYUFBYSxHQUFHLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBQ3RELE1BQU0scUJBQXFCLEdBQUcsV0FBVyxDQUFDLFFBQVEsRUFBRSxVQUFVLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDM0UsTUFBTSxXQUFXLEdBQUcsV0FBVyxDQUFDLFFBQVEsRUFBRSx3QkFBd0IsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ3RGLE1BQU0sT0FBTyxHQUFHLFdBQVcsQ0FBQyxhQUFhLEVBQUUsYUFBYSxDQUFDLENBQUM7QUFDakUsa0JBQWU7SUFDZixFQUFFLDhCQUE4QjtJQUNoQyxFQUFFLFNBQVM7SUFDWCxFQUFFLGFBQWE7SUFDZixFQUFFLHFCQUFxQjtJQUN2QixFQUFFLFdBQVc7SUFDYixFQUFFLE9BQU87SUFDVCxFQUFFLFNBQVM7SUFDWCxFQUFFLHNCQUFzQjtJQUN4QixFQUFFLEtBQUs7SUFDUCxFQUFFLFlBQVk7SUFDZCxFQUFFLFFBQVE7SUFDVixDQUFDOzs7Ozs7QUN4QkQsc0JBQWUsQ0FBQyxHQUFHLE9BQU8sS0FBSyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLE9BQU8sQ0FBQyxLQUFLLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7O0lDQ3JGLE1BQU0sU0FBRUEsT0FBSyxFQUFFLEtBQUssRUFBRTtJQUN0QixFQUFFLFFBQVE7SUFDVixFQUFFLFNBQVM7SUFDWCxDQUFDLEVBQUUsR0FBRyxPQUFPLENBQUM7SUFPQyxlQUFRLENBQUMsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxTQUFTLEdBQUcsS0FBSyxFQUFFLFdBQVcsR0FBRyxLQUFLLEVBQUUsRUFBRTtJQUMxRixFQUFFLE1BQU0sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLEdBQUcsUUFBUSxFQUFFLENBQUM7SUFDckMsRUFBRSxTQUFTLENBQUMsTUFBTTtJQUNsQixJQUFJLE1BQU0sS0FBSyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDcEMsSUFBSSxJQUFJLENBQUMsS0FBSztJQUNkLE1BQU0sTUFBTSxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ3hDLElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMvQixHQUFHLENBQUMsQ0FBQztJQUNMLEVBQUUsdUJBQXVCQSxPQUFLLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRTtJQUNuRCxJQUFJLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU07SUFDNUIsSUFBSSxTQUFTLEVBQUUsV0FBVyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFd0IsZ0JBQU0sQ0FBQyxPQUFPLENBQUM7SUFDeEUsR0FBRyxrQkFBa0J4QixPQUFLLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRTtJQUNoRCxJQUFJLFNBQVMsRUFBRSxPQUFPLENBQUMsYUFBYSxDQUFDLE1BQU07SUFDM0MsR0FBRyxrQkFBa0JBLE9BQUssQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFO0lBQ2pELElBQUksR0FBRyxFQUFFLElBQUksRUFBRSxZQUFZLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxFQUFFLE9BQU8sQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDO0lBQ2pFLElBQUksSUFBSSxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTztJQUM5QixHQUFHLENBQUMsQ0FBQyxrQkFBa0JBLE9BQUssQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFO0lBQ2xELElBQUksU0FBUyxFQUFFLE9BQU8sQ0FBQyxhQUFhLENBQUMsT0FBTztJQUM1QyxJQUFJLEtBQUssRUFBRSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUU7SUFDbEMsR0FBRyxrQkFBa0JBLE9BQUssQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFO0lBQ2hELElBQUksU0FBUyxFQUFFLE9BQU8sQ0FBQyxhQUFhLENBQUMsSUFBSTtJQUN6QyxHQUFHLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQyxrQkFBa0JBLE9BQUssQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFO0lBQ2hFLElBQUksS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSztJQUM1QixJQUFJLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU87SUFDNUIsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsYUFBYSxDQUFDLENBQUMsa0JBQWtCQSxPQUFLLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRTtJQUNoRyxJQUFJLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVE7SUFDdEMsSUFBSSxJQUFJLEVBQUUsQ0FBQztJQUNYLElBQUksTUFBTSxFQUFFLENBQUM7SUFDYixHQUFHLGtCQUFrQkEsT0FBSyxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUU7SUFDakQsSUFBSSxJQUFJLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJO0lBQzNCLElBQUksT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDLElBQUksQ0FBQztJQUMvQixJQUFJLFFBQVEsRUFBRSxTQUFTO0lBQ3ZCLElBQUksSUFBSSxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSztJQUM1QixJQUFJLFNBQVMsRUFBRTtJQUNmLE1BQU0sT0FBTyxDQUFDLHFCQUFxQixDQUFDLE1BQU07SUFDMUMsTUFBTSxTQUFTLEdBQUcsT0FBTyxDQUFDLHFCQUFxQixDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUMscUJBQXFCLENBQUMsT0FBTztJQUNoRyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUNmLEdBQUcsa0JBQWtCQSxPQUFLLENBQUMsYUFBYSxDQUFDLFdBQVcsRUFBRTtJQUN0RCxJQUFJLElBQUksRUFBRSxhQUFhO0lBQ3ZCLEdBQUcsQ0FBQyxDQUFDLGtCQUFrQkEsT0FBSyxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUU7SUFDbkQsSUFBSSxJQUFJLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJO0lBQzNCLElBQUksT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUNqQyxJQUFJLFFBQVEsRUFBRSxXQUFXO0lBQ3pCLElBQUksSUFBSSxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSztJQUM1QixJQUFJLFNBQVMsRUFBRTtJQUNmLE1BQU0sT0FBTyxDQUFDLHFCQUFxQixDQUFDLE1BQU07SUFDMUMsTUFBTSxXQUFXLEdBQUcsT0FBTyxDQUFDLHFCQUFxQixDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUMscUJBQXFCLENBQUMsT0FBTztJQUNsRyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUNmLEdBQUcsa0JBQWtCQSxPQUFLLENBQUMsYUFBYSxDQUFDLFdBQVcsRUFBRTtJQUN0RCxJQUFJLElBQUksRUFBRSxlQUFlO0lBQ3pCLEdBQUcsQ0FBQyxDQUFDLENBQUMsa0JBQWtCQSxPQUFLLENBQUMsYUFBYSxDQUFDLGdCQUFnQixFQUFFO0lBQzlELElBQUksSUFBSSxFQUFFLFFBQVE7SUFDbEIsR0FBRyxrQkFBa0JBLE9BQUssQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFO0lBQ2pELElBQUksSUFBSSxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSTtJQUMzQixJQUFJLEtBQUssRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUc7SUFDNUIsSUFBSSxPQUFPLEVBQUUsUUFBUTtJQUNyQixJQUFJLElBQUksRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUk7SUFDM0IsR0FBRyxrQkFBa0JBLE9BQUssQ0FBQyxhQUFhLENBQUMsV0FBVyxFQUFFO0lBQ3RELElBQUksSUFBSSxFQUFFLE9BQU87SUFDakIsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDUjs7SUN2RUEsTUFBTSxZQUFZLEdBQUc7SUFDckIsRUFBRSxhQUFhLEVBQUUsVUFBVTtJQUMzQixDQUFDLENBQUM7SUFDRixNQUFNLGNBQWMsR0FBRztJQUN2QixFQUFFLGFBQWEsRUFBRSxZQUFZO0lBQzdCLEVBQUUsU0FBUyxFQUFFLElBQUk7SUFDakIsQ0FBQyxDQUFDO0FBQ0YsbUJBQWU7SUFDZixFQUFFLGVBQWUsRUFBRTtJQUNuQixJQUFJLFlBQVksRUFBRSxZQUFZLENBQUMsYUFBYTtJQUM1QyxJQUFJLGNBQWM7SUFDbEIsSUFBSSxZQUFZO0lBQ2hCLElBQUksUUFBUSxFQUFFLElBQUk7SUFDbEIsSUFBSSxhQUFhLEVBQUUsSUFBSTtJQUN2QixHQUFHO0lBQ0gsQ0FBQzs7SUNkTSxNQUFNLDZCQUE2QixHQUFHLG9CQUFvQjs7Ozs7O0lDQWxELE1BQU0sYUFBYSxTQUFTQSxPQUFLLENBQUMsU0FBUyxDQUFDO0lBQzNELEVBQUUsV0FBVyxHQUFHO0lBQ2hCLElBQUksS0FBSyxDQUFDLEdBQUcsU0FBUyxDQUFDLENBQUM7SUFDeEIsSUFBSSxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDO0lBQ3JDLEdBQUc7SUFDSCxFQUFFLGlCQUFpQixHQUFHO0lBQ3RCLEdBQUc7SUFDSCxFQUFFLE9BQU8sd0JBQXdCLEdBQUc7SUFDcEMsSUFBSSxPQUFPLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDO0lBQzlCLEdBQUc7SUFDSCxFQUFFLE1BQU0sR0FBRztJQUNYLElBQUksSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVE7SUFDM0IsTUFBTSxPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztJQUM3RSxJQUFJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUM7SUFDL0IsR0FBRztJQUNIOztBQ1A4QnlCLGVBQW1CLENBQUMsb0JBQW9CLEVBQUU7SUFDekQsZ0NBQVEsQ0FBQyxVQUFVLEVBQUU7SUFDcEMsRUFBRSxNQUFNLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQyxHQUFHekIsT0FBSyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDcEUsRUFBRSxNQUFNLENBQUMsUUFBUSxFQUFFLFdBQVcsQ0FBQyxHQUFHQSxPQUFLLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDMUYsRUFBRSx1QkFBdUJBLE9BQUssQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRTtJQUM5RCxJQUFJLElBQUksRUFBRSxLQUFLLENBQUMsU0FBUyxDQUFDLE9BQU87SUFDakMsSUFBSSxHQUFHLFVBQVU7SUFDakIsR0FBRyxrQkFBa0JBLE9BQUssQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRTtJQUM1RCxJQUFJLFNBQVMsRUFBRSxLQUFLO0lBQ3BCLEdBQUcsa0JBQWtCQSxPQUFLLENBQUMsYUFBYSxDQUFDLFNBQVMsRUFBRTtJQUNwRCxJQUFJLEtBQUssRUFBRSxPQUFPO0lBQ2xCLElBQUksUUFBUSxFQUFFLFVBQVU7SUFDeEIsSUFBSSxXQUFXLEVBQUUsUUFBUTtJQUN6QixJQUFJLFNBQVMsRUFBRXdCLGdCQUFNLENBQUMsT0FBTztJQUM3QixHQUFHLENBQUMsQ0FBQyxrQkFBa0J4QixPQUFLLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUUsSUFBSSxrQkFBa0JBLE9BQUssQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxJQUFJLGtCQUFrQkEsT0FBSyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsa0JBQWtCQSxPQUFLLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRTtJQUMvTyxJQUFJLFNBQVMsRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLGNBQWM7SUFDN0MsR0FBRyxrQkFBa0JBLE9BQUssQ0FBQyxhQUFhLENBQUMsYUFBYSxFQUFFO0lBQ3hELElBQUksV0FBVyxrQkFBa0JBLE9BQUssQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFO0lBQzNELE1BQU0sS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSztJQUM5QixLQUFLLEVBQUUsZ0VBQWdFLGtCQUFrQkEsT0FBSyxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUU7SUFDckgsTUFBTSxJQUFJLEVBQUUsK0NBQStDO0lBQzNELEtBQUssRUFBRSwrQ0FBK0MsQ0FBQyxFQUFFLDhCQUE4QixrQkFBa0JBLE9BQUssQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxrQkFBa0JBLE9BQUssQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxFQUFFLG9DQUFvQyxrQkFBa0JBLE9BQUssQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFO0lBQzNRLE1BQU0sU0FBUyxFQUFFd0IsZ0JBQU0sQ0FBQyxhQUFhO0lBQ3JDLEtBQUssa0JBQWtCeEIsT0FBSyxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLDZDQUE2QyxDQUFDLGtCQUFrQkEsT0FBSyxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLCtCQUErQixDQUFDLGtCQUFrQkEsT0FBSyxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLGlCQUFpQixDQUFDLGtCQUFrQkEsT0FBSyxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLHFCQUFxQixDQUFDLGtCQUFrQkEsT0FBSyxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLHVCQUF1QixDQUFDLENBQUMsRUFBRSxrRUFBa0UsQ0FBQztJQUNuZCxHQUFHLGtCQUFrQkEsT0FBSyxDQUFDLGFBQWEsQ0FBQ1csYUFBVyxFQUFFO0lBQ3RELElBQUksTUFBTSxFQUFFLFNBQVMsQ0FBQyxXQUFXO0lBQ2pDLElBQUksWUFBWSxFQUFFLFNBQVMsQ0FBQyxrQkFBa0I7SUFDOUMsSUFBSSxLQUFLLEVBQUUsVUFBVSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUM7SUFDdkMsSUFBSSxRQUFRLEVBQUUsQ0FBQyxDQUFDLEtBQUssV0FBVyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdkQsR0FBRyxDQUFDLENBQUMsQ0FBQyxrQkFBa0JYLE9BQUssQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFO0lBQ3hELElBQUksS0FBSyxFQUFFLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDO0lBQ3hELElBQUksUUFBUSxFQUFFLENBQUMsQ0FBQyxLQUFLLFNBQVMsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNyRSxJQUFJLFFBQVEsRUFBRWlCLEdBQVksQ0FBQyxTQUFTLEVBQUVTLFFBQWtCLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQyxLQUFLQSxRQUFrQixDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUMsYUFBYTtJQUMxSixJQUFJLElBQUksRUFBRVQsR0FBWSxDQUFDLFNBQVMsRUFBRVMsUUFBa0IsQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDLElBQUksa0RBQWtEO0lBQ3hJLEdBQUcsRUFBRSxlQUFlLENBQUMsQ0FBQyxDQUFDLGtCQUFrQjFCLE9BQUssQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxJQUFJLGtCQUFrQkEsT0FBSyxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUU7SUFDbEksSUFBSSxPQUFPLEVBQUUsTUFBTTtJQUNuQixNQUFNLElBQUksVUFBVSxDQUFDLFFBQVEsS0FBSyxPQUFPO0lBQ3pDLFFBQVEsU0FBUyxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQy9ELE1BQU0sU0FBUyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ3hELE1BQU0sVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzNCLEtBQUs7SUFDTCxHQUFHLEVBQUUsTUFBTSxDQUFDLGtCQUFrQkEsT0FBSyxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUU7SUFDMUQsSUFBSSxJQUFJLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJO0lBQzNCLElBQUksS0FBSyxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSztJQUM5QixJQUFJLE9BQU8sRUFBRSxVQUFVLENBQUMsT0FBTztJQUMvQixHQUFHLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2pCOzs7Ozs7Ozs7O0FDdkRBLGdCQUFlLENBQUMsS0FBSyxFQUFFLEtBQUssR0FBRyxFQUFFLEVBQUUsSUFBSSxHQUFHLENBQUMsS0FBSyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxJQUFJLEdBQUcsS0FBSyxDQUFDOztJQ1EvRSxNQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsd0JBQXdCLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLEtBQUssT0FBTyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEtBQUssQ0FBQyxJQUFJLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxLQUFLLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDak0sTUFBTSxnQkFBZ0IsR0FBRyxFQUFFLENBQUM7SUFDYixxQkFBUSxDQUFDLEtBQUssRUFBRTtJQUMvQixFQUFFLE1BQU0sQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLEdBQUdBLE9BQUssQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDL0MsRUFBRSxNQUFNLENBQUMsTUFBTSxFQUFFLFNBQVMsQ0FBQyxHQUFHQSxPQUFLLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2pELEVBQUVBLE9BQUssQ0FBQyxTQUFTLENBQUMsTUFBTTtJQUN4QixJQUFJLE1BQU0sWUFBWSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMzSCxJQUFJLE1BQU0sYUFBYSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztJQUNoRSxJQUFJLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUM1QixHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ2YsRUFBRSx1QkFBdUJBLE9BQUssQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRTtJQUM5RCxJQUFJLElBQUksRUFBRSxLQUFLLENBQUMsU0FBUyxDQUFDLE9BQU87SUFDakMsSUFBSSxHQUFHLEtBQUs7SUFDWixHQUFHLGtCQUFrQkEsT0FBSyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFO0lBQzVELElBQUksU0FBUyxFQUFFLEtBQUs7SUFDcEIsR0FBRyxrQkFBa0JBLE9BQUssQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFFO0lBQ3BELElBQUksS0FBSyxFQUFFLE1BQU07SUFDakIsSUFBSSxRQUFRLEVBQUUsU0FBUztJQUN2QixJQUFJLFdBQVcsRUFBRSxpQkFBaUI7SUFDbEMsSUFBSSxTQUFTLEVBQUUyQixnQkFBYyxDQUFDLE9BQU87SUFDckMsR0FBRyxDQUFDLENBQUMsa0JBQWtCM0IsT0FBSyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUFFLElBQUksa0JBQWtCQSxPQUFLLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRTtJQUNoSCxJQUFJLFNBQVMsRUFBRXdCLGdCQUFNLENBQUMsUUFBUTtJQUM5QixHQUFHLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUkscUJBQXFCeEIsT0FBSyxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUU7SUFDbkUsSUFBSSxJQUFJO0lBQ1IsSUFBSSxPQUFPLEVBQUUsTUFBTTtJQUNuQixNQUFNLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0IsTUFBTSxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDdEIsS0FBSztJQUNMLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDVCxDQUFDO0lBQ00sTUFBTSxJQUFJLEdBQUcsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsS0FBSztJQUMzQyxFQUFFLE1BQU0sT0FBTyxHQUFHLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2pELEVBQUUsdUJBQXVCQSxPQUFLLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRTtJQUNuRCxJQUFJLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU07SUFDNUIsSUFBSSxTQUFTLEVBQUUsV0FBVyxDQUFDd0IsZ0JBQU0sQ0FBQyxJQUFJLEVBQUUsT0FBTyxHQUFHQSxnQkFBTSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7SUFDdkUsSUFBSSxPQUFPLEVBQUUsTUFBTTtJQUNuQixNQUFNLElBQUksQ0FBQyxPQUFPO0lBQ2xCLFFBQVEsT0FBTyxJQUFJLENBQUM7SUFDcEIsS0FBSztJQUNMLEdBQUcsa0JBQWtCeEIsT0FBSyxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUU7SUFDakQsSUFBSSxHQUFHLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDO0lBQ3hDLElBQUksSUFBSSxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTztJQUM5QixHQUFHLENBQUMsa0JBQWtCQSxPQUFLLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRTtJQUNoRCxJQUFJLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVE7SUFDL0IsSUFBSSxTQUFTLEVBQUV3QixnQkFBTSxDQUFDLElBQUk7SUFDMUIsR0FBRyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ3JCLENBQUM7O0lDbkNELE1BQU1JLGlCQUFlLEdBQUdDLGlCQUF5QixDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDckUsTUFBTSxtQkFBRUMsaUJBQWUsRUFBRSxPQUFPLEVBQUVDLFlBQVUsa0JBQUVDLGdCQUFjLEVBQUUsR0FBR1AsV0FBbUIsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ3pGLHlCQUFRLENBQUMsRUFBRSxjQUFjLEVBQUUscUJBQXFCLEdBQUcsSUFBSSxFQUFFLEVBQUU7SUFDMUUsRUFBRSxhQUFhLEVBQUUsQ0FBQztJQUNsQixFQUFFLHVCQUF1QnpCLE9BQUssQ0FBQyxhQUFhLENBQUNBLE9BQUssQ0FBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLHFCQUFxQixvQkFBb0JBLE9BQUssQ0FBQyxhQUFhLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEtBQUsscUJBQXFCQSxPQUFLLENBQUMsYUFBYSxDQUFDLFlBQVksRUFBRTtJQUNsUixJQUFJLElBQUksRUFBRSxRQUFRO0lBQ2xCLElBQUksS0FBSztJQUNULElBQUksS0FBSztJQUNULElBQUksTUFBTSxFQUFFLFFBQVEsS0FBSyxjQUFjO0lBQ3ZDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDTSxNQUFNLGNBQWMsR0FBRyxNQUFNO0lBQ3BDLEVBQUUsTUFBTSxDQUFDLFdBQVcsRUFBRSxjQUFjLENBQUMsR0FBR0EsT0FBSyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUMzRCxFQUFFLE1BQU0sQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLEdBQUdBLE9BQUssQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDL0MsRUFBRSx1QkFBdUJBLE9BQUssQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFO0lBQ25ELElBQUksU0FBUyxFQUFFd0IsZ0JBQU0sQ0FBQyxjQUFjO0lBQ3BDLElBQUksS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTTtJQUM1QixHQUFHLGtCQUFrQnhCLE9BQUssQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFFO0lBQ3BELElBQUksU0FBUyxFQUFFd0IsZ0JBQU0sQ0FBQyxPQUFPO0lBQzdCLElBQUksS0FBSyxFQUFFLFdBQVc7SUFDdEIsSUFBSSxXQUFXLEVBQUUscUJBQXFCO0lBQ3RDLElBQUksUUFBUSxFQUFFLENBQUMsQ0FBQyxLQUFLLGNBQWMsQ0FBQyxDQUFDLENBQUM7SUFDdEMsSUFBSSxLQUFLO0lBQ1QsR0FBRyxDQUFDLGtCQUFrQnhCLE9BQUssQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFO0lBQ2xELElBQUksT0FBTyxFQUFFLE1BQU07SUFDbkIsTUFBTSxJQUFJLFdBQVcsSUFBSSxFQUFFO0lBQzNCLFFBQVEsUUFBUSxDQUFDLG9CQUFvQixDQUFDLENBQUM7SUFDdkMsV0FBVztJQUNYLFFBQVEsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3JCLFFBQVEsU0FBUyxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMzQyxPQUFPO0lBQ1AsS0FBSztJQUNMLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ2IsQ0FBQyxDQUFDO0lBQ0ssTUFBTSxZQUFZLEdBQUcsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE1BQU0sR0FBRyxJQUFJLEVBQUUsS0FBSztJQUN2RSxFQUFFLE1BQU0sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLEdBQUdBLE9BQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDakQsRUFBRSx1QkFBdUJBLE9BQUssQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFO0lBQ3BELElBQUksR0FBRyxFQUFFLElBQUk7SUFDYixJQUFJLFNBQVMsRUFBRXdCLGdCQUFNLENBQUMsUUFBUTtJQUM5QixHQUFHLGtCQUFrQnhCLE9BQUssQ0FBQyxhQUFhLENBQUMsY0FBYyxFQUFFO0lBQ3pELElBQUksR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUU7SUFDdEIsSUFBSSxNQUFNLEVBQUUsTUFBTSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDaEMsSUFBSSxNQUFNLEVBQUUsSUFBSTtJQUNoQixHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksb0JBQW9CQSxPQUFLLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRTtJQUMxRCxJQUFJLFNBQVMsRUFBRSxXQUFXLENBQUN3QixnQkFBTSxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQztJQUMzSCxHQUFHLEVBQUUsS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxNQUFNLHFCQUFxQnhCLE9BQUssQ0FBQyxhQUFhLENBQUNlLE1BQUksRUFBRTtJQUM5RixJQUFJLEVBQUU7SUFDTixJQUFJLE1BQU0sRUFBRSxDQUFDLElBQUksS0FBSyxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLElBQUksSUFBSSxLQUFLLElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzlHLElBQUksUUFBUSxFQUFFLE1BQU0sU0FBUyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDO0lBQ2xELElBQUksU0FBUyxFQUFFLE1BQU0sS0FBSyxDQUFDO0lBQzNCLElBQUksV0FBVyxFQUFFLE1BQU0sS0FBSyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUM7SUFDNUMsR0FBRyxDQUFDLENBQUMsbUJBQW1CZixPQUFLLENBQUMsYUFBYSxDQUFDQSxPQUFLLENBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLG1CQUFtQkEsT0FBSyxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUU7SUFDdkosSUFBSSxLQUFLLEVBQUUsS0FBSztJQUNoQixJQUFJLE1BQU0sRUFBRSxLQUFLO0lBQ2pCLElBQUksR0FBRyxFQUFFLCtEQUErRDtJQUN4RSxJQUFJLEtBQUssRUFBRSxrQ0FBa0M7SUFDN0MsR0FBRyxDQUFDLG1CQUFtQkEsT0FBSyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUU7SUFDbEQsSUFBSSxTQUFTLEVBQUV3QixnQkFBTSxDQUFDLEtBQUs7SUFDM0IsR0FBRyxrQkFBa0J4QixPQUFLLENBQUMsYUFBYSxDQUFDK0IsWUFBVSxFQUFFO0lBQ3JELElBQUksS0FBSyxFQUFFLFlBQVksQ0FBQyxLQUFLO0lBQzdCLEdBQUcsa0JBQWtCL0IsT0FBSyxDQUFDLGFBQWEsQ0FBQzhCLGlCQUFlLEVBQUU7SUFDMUQsSUFBSSxHQUFHO0lBQ1AsTUFBTSxPQUFPLEVBQUUsR0FBRztJQUNsQixNQUFNLFFBQVEsRUFBRSxHQUFHO0lBQ25CLE1BQU0sVUFBVSxFQUFFLDhDQUE4QztJQUNoRSxNQUFNLFNBQVMsRUFBRSw4Q0FBOEM7SUFDL0QsS0FBSztJQUNMLEdBQUcsQ0FBQyxrQkFBa0I5QixPQUFLLENBQUMsYUFBYSxDQUFDZ0MsZ0JBQWMsRUFBRTtJQUMxRCxJQUFJLElBQUksa0JBQWtCaEMsT0FBSyxDQUFDLGFBQWEsQ0FBQ0EsT0FBSyxDQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUseUVBQXlFLENBQUM7SUFDOUksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ1YsQ0FBQyxDQUFDO0lBQ0YsTUFBTSxjQUFjLEdBQUcsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsTUFBTSxHQUFHLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSztJQUNwRSxFQUFFLE1BQU0saUJBQWlCLEdBQUcsQ0FBQyxJQUFJLEtBQUs7SUFDdEMsSUFBSSxNQUFNLE1BQU0sR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUM7SUFDaEYsSUFBSSxTQUFTLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLEVBQUUsTUFBTSxFQUFFLE1BQU0sR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQy9FLEdBQUcsQ0FBQztJQUNKLEVBQUUsdUJBQXVCQSxPQUFLLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRTtJQUNuRCxJQUFJLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU07SUFDNUIsR0FBRyxrQkFBa0JBLE9BQUssQ0FBQyxhQUFhLENBQUM0QixpQkFBZSxFQUFFO0lBQzFELElBQUksU0FBUyxFQUFFLFdBQVcsQ0FBQyxPQUFPLENBQUMsOEJBQThCLENBQUMsOEJBQThCLEVBQUVKLGdCQUFNLENBQUMsc0JBQXNCLENBQUM7SUFDaEksR0FBRyxrQkFBa0J4QixPQUFLLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRTtJQUMvQyxJQUFJLEtBQUssRUFBRSxFQUFFLEtBQUssRUFBRSxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7SUFDbEUsSUFBSSxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNO0lBQzVCLElBQUksT0FBTyxFQUFFLE1BQU07SUFDbkIsR0FBRyxrQkFBa0JBLE9BQUssQ0FBQyxhQUFhLENBQUMsV0FBVyxFQUFFO0lBQ3RELElBQUksSUFBSSxFQUFFLGVBQWU7SUFDekIsSUFBSSxTQUFTLEVBQUUsV0FBVyxDQUFDd0IsZ0JBQU0sQ0FBQyxhQUFhLEVBQUUsTUFBTSxHQUFHQSxnQkFBTSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsQ0FBQztJQUNqRixHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxrQkFBa0J4QixPQUFLLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRTtJQUMxRCxJQUFJLFFBQVEsRUFBRSxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU07SUFDckMsSUFBSSxZQUFZLEVBQUUsQ0FBQyxLQUFLLHFCQUFxQkEsT0FBSyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUU7SUFDeEUsTUFBTSxHQUFHLEtBQUs7SUFDZCxLQUFLLGtCQUFrQkEsT0FBSyxDQUFDLGFBQWEsQ0FBQyx1QkFBdUIsRUFBRTtJQUNwRSxNQUFNLGVBQWUsRUFBRSxDQUFDO0lBQ3hCLE1BQU0sT0FBTyxFQUFFLEtBQUssQ0FBQyxXQUFXO0lBQ2hDLE1BQU0sUUFBUSxFQUFFLElBQUk7SUFDcEIsS0FBSyxDQUFDLENBQUM7SUFDUCxHQUFHLEVBQUUsQ0FBQyxNQUFNLHFCQUFxQkEsT0FBSyxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsRUFBRTtJQUN2RSxJQUFJLElBQUksRUFBRSxlQUFlO0lBQ3pCLEdBQUcsa0JBQWtCQSxPQUFLLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRTtJQUNqRCxJQUFJLEdBQUcsTUFBTTtJQUNiLElBQUksSUFBSSxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSTtJQUMzQixJQUFJLElBQUksRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUs7SUFDNUIsSUFBSSxTQUFTLEVBQUUsV0FBVyxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLHFCQUFxQixDQUFDLE9BQU8sQ0FBQztJQUN2RyxHQUFHLGtCQUFrQkEsT0FBSyxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUU7SUFDdEQsSUFBSSxJQUFJLEVBQUUsUUFBUTtJQUNsQixJQUFJLEtBQUssRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRTtJQUM1QyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsa0JBQWtCQSxPQUFLLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRTtJQUNwRCxJQUFJLEtBQUssRUFBRSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUU7SUFDbEMsR0FBRyxDQUFDLGtCQUFrQkEsT0FBSyxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUU7SUFDbEQsSUFBSSxRQUFRLEVBQUUsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJO0lBQ25DLElBQUksWUFBWSxFQUFFLENBQUMsS0FBSyxxQkFBcUJBLE9BQUssQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFO0lBQ3hFLE1BQU0sR0FBRyxLQUFLO0lBQ2QsS0FBSyxrQkFBa0JBLE9BQUssQ0FBQyxhQUFhLENBQUMsWUFBWSxFQUFFO0lBQ3pELE1BQU0sZUFBZSxFQUFFLENBQUM7SUFDeEIsTUFBTSxPQUFPLEVBQUUsS0FBSyxDQUFDLFdBQVc7SUFDaEMsTUFBTSxRQUFRLEVBQUUsQ0FBQyxJQUFJLEtBQUs7SUFDMUIsUUFBUSxJQUFJLElBQUksQ0FBQyxFQUFFLElBQUksSUFBSTtJQUMzQixVQUFVLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUMzQyxPQUFPO0lBQ1AsS0FBSyxDQUFDLENBQUM7SUFDUCxHQUFHLEVBQUUsQ0FBQyxNQUFNLHFCQUFxQkEsT0FBSyxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsRUFBRTtJQUN2RSxJQUFJLElBQUksRUFBRSxrQkFBa0I7SUFDNUIsR0FBRyxrQkFBa0JBLE9BQUssQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFO0lBQ2pELElBQUksR0FBRyxNQUFNO0lBQ2IsSUFBSSxJQUFJLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJO0lBQzNCLElBQUksSUFBSSxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSztJQUM1QixJQUFJLFNBQVMsRUFBRSxXQUFXLENBQUMsT0FBTyxDQUFDLHFCQUFxQixDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMscUJBQXFCLENBQUMsT0FBTyxDQUFDO0lBQ3ZHLEdBQUcsa0JBQWtCQSxPQUFLLENBQUMsYUFBYSxDQUFDLFdBQVcsRUFBRTtJQUN0RCxJQUFJLElBQUksRUFBRSxXQUFXO0lBQ3JCLElBQUksS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFO0lBQzVDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxrQkFBa0JBLE9BQUssQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFO0lBQ25ELElBQUksU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUTtJQUN0QyxJQUFJLElBQUksRUFBRSxDQUFDO0lBQ1gsSUFBSSxNQUFNLEVBQUUsQ0FBQztJQUNiLEdBQUcsa0JBQWtCQSxPQUFLLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRTtJQUNqRCxJQUFJLElBQUksRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUk7SUFDM0IsSUFBSSxPQUFPLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7SUFDdkMsSUFBSSxRQUFRLEVBQUUsS0FBSyxLQUFLLENBQUM7SUFDekIsSUFBSSxJQUFJLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLO0lBQzVCLElBQUksU0FBUyxFQUFFLFdBQVcsQ0FBQyxPQUFPLENBQUMscUJBQXFCLENBQUMsTUFBTSxFQUFFLEtBQUssS0FBSyxDQUFDLEdBQUcsT0FBTyxDQUFDLHFCQUFxQixDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUMscUJBQXFCLENBQUMsT0FBTyxDQUFDO0lBQzlKLEdBQUcsa0JBQWtCQSxPQUFLLENBQUMsYUFBYSxDQUFDLFdBQVcsRUFBRTtJQUN0RCxJQUFJLElBQUksRUFBRSxhQUFhO0lBQ3ZCLEdBQUcsQ0FBQyxDQUFDLGtCQUFrQkEsT0FBSyxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUU7SUFDbkQsSUFBSSxJQUFJLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJO0lBQzNCLElBQUksT0FBTyxFQUFFLE1BQU0saUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDeEMsSUFBSSxRQUFRLEVBQUUsS0FBSyxLQUFLLFNBQVMsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxNQUFNLEdBQUcsQ0FBQztJQUM1RCxJQUFJLElBQUksRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUs7SUFDNUIsSUFBSSxTQUFTLEVBQUUsV0FBVyxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLEVBQUUsS0FBSyxLQUFLLFNBQVMsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDLHFCQUFxQixDQUFDLE9BQU8sQ0FBQztJQUNqTSxHQUFHLGtCQUFrQkEsT0FBSyxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUU7SUFDdEQsSUFBSSxJQUFJLEVBQUUsZUFBZTtJQUN6QixHQUFHLENBQUMsQ0FBQyxDQUFDLGtCQUFrQkEsT0FBSyxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsRUFBRTtJQUM5RCxJQUFJLElBQUksRUFBRSxRQUFRO0lBQ2xCLEdBQUcsa0JBQWtCQSxPQUFLLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRTtJQUNqRCxJQUFJLElBQUksRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUk7SUFDM0IsSUFBSSxLQUFLLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHO0lBQzVCLElBQUksT0FBTyxFQUFFLE1BQU0sU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUM7SUFDakQsSUFBSSxJQUFJLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJO0lBQzNCLEdBQUcsa0JBQWtCQSxPQUFLLENBQUMsYUFBYSxDQUFDLFdBQVcsRUFBRTtJQUN0RCxJQUFJLElBQUksRUFBRSxPQUFPO0lBQ2pCLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ1IsQ0FBQzs7Ozs7O0FDbkxELHNCQUFlLENBQUMsSUFBSSxLQUFLO0lBQ3pCLEVBQUUsSUFBSTtJQUNOLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNyQixJQUFJLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRTtJQUNkLEdBQUc7SUFDSCxFQUFFLE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7SUNHYyxpQkFBUSxHQUFHO0lBQzFCLEVBQUUsTUFBTSxHQUFHLFdBQVcsQ0FBQyxHQUFHQSxPQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzdELEVBQUUsdUJBQXVCQSxPQUFLLENBQUMsYUFBYSxDQUFDQSxPQUFLLENBQUMsUUFBUSxFQUFFLElBQUksa0JBQWtCQSxPQUFLLENBQUMsYUFBYSxDQUFDVSxVQUFRLEVBQUU7SUFDakgsSUFBSSxLQUFLLEVBQUUsbUJBQW1CO0lBQzlCLElBQUksV0FBVyxFQUFFLDBEQUEwRDtJQUMzRSxJQUFJLElBQUksRUFBRSxRQUFRO0lBQ2xCLEdBQUcsa0JBQWtCVixPQUFLLENBQUMsYUFBYSxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxDQUFDLGtCQUFrQkEsT0FBSyxDQUFDLGFBQWEsQ0FBQ1UsVUFBUSxFQUFFO0lBQ2pILElBQUksS0FBSyxFQUFFLGdCQUFnQjtJQUMzQixJQUFJLFdBQVcsRUFBRSxtQ0FBbUM7SUFDcEQsSUFBSSxJQUFJLEVBQUUsTUFBTTtJQUNoQixHQUFHLGtCQUFrQlYsT0FBSyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLElBQUksa0JBQWtCQSxPQUFLLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsSUFBSSxrQkFBa0JBLE9BQUssQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsY0FBYyxDQUFDLGtCQUFrQkEsT0FBSyxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUU7SUFDeFAsSUFBSSxPQUFPLEVBQUU7SUFDYixNQUFNLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUwQixRQUFrQixDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFO0lBQ2hHLE1BQU0sRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRUEsUUFBa0IsQ0FBQyxlQUFlLENBQUMsY0FBYyxDQUFDLGFBQWEsRUFBRTtJQUNwRyxLQUFLO0lBQ0wsSUFBSSxLQUFLLEVBQUVULEdBQVksQ0FBQyxTQUFTLEVBQUVTLFFBQWtCLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQztJQUNuRixJQUFJLFFBQVEsRUFBRSxDQUFDLENBQUMsS0FBSztJQUNyQixNQUFNUCxHQUFZLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN2QyxNQUFNLFVBQVUsQ0FBQyxhQUFhLENBQUMsRUFBRSxJQUFJLEVBQUVjLDZCQUF1QyxFQUFFLENBQUMsQ0FBQztJQUNsRixNQUFNLFdBQVcsRUFBRSxDQUFDO0lBQ3BCLEtBQUs7SUFDTCxHQUFHLENBQUMsa0JBQWtCakMsT0FBSyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFO0lBQzdELElBQUksU0FBUyxFQUFFLFdBQVcsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQztJQUN2RixHQUFHLENBQUMsQ0FBQyxFQUFFaUIsR0FBWSxDQUFDLFNBQVMsRUFBRVMsUUFBa0IsQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDLEtBQUtBLFFBQWtCLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FBQyxhQUFhLG9CQUFvQjFCLE9BQUssQ0FBQyxhQUFhLENBQUNVLFVBQVEsRUFBRTtJQUNyTSxJQUFJLEtBQUssRUFBRSwwQkFBMEI7SUFDckMsSUFBSSxXQUFXLEVBQUUsa0RBQWtEO0lBQ25FLEdBQUcsa0JBQWtCVixPQUFLLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBRTtJQUNyRCxJQUFJLEtBQUssRUFBRWlCLEdBQVksQ0FBQyxtQkFBbUIsRUFBRVMsUUFBa0IsQ0FBQyxlQUFlLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQztJQUN6RyxJQUFJLFFBQVEsRUFBRSxDQUFDLENBQUMsS0FBSztJQUNyQixNQUFNUCxHQUFZLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDM0MsTUFBTSxVQUFVLENBQUMsYUFBYSxDQUFDLEVBQUUsSUFBSSxFQUFFYyw2QkFBdUMsRUFBRSxDQUFDLENBQUM7SUFDbEYsS0FBSztJQUNMLEdBQUcsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDLGtCQUFrQmpDLE9BQUssQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFO0lBQzFFLElBQUksS0FBSyxFQUFFaUIsR0FBWSxDQUFDLFNBQVMsRUFBRVMsUUFBa0IsQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDO0lBQy9FLElBQUksUUFBUSxFQUFFLENBQUMsQ0FBQyxLQUFLUCxHQUFZLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQztJQUMvQyxJQUFJLElBQUksRUFBRSxzRUFBc0U7SUFDaEYsR0FBRyxFQUFFLGtEQUFrRCxDQUFDLGtCQUFrQm5CLE9BQUssQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFO0lBQzFHLElBQUksS0FBSyxFQUFFaUIsR0FBWSxDQUFDLGNBQWMsRUFBRVMsUUFBa0IsQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDO0lBQ3pGLElBQUksUUFBUSxFQUFFLENBQUMsQ0FBQyxLQUFLUCxHQUFZLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQztJQUNwRCxJQUFJLElBQUksRUFBRSwwRUFBMEU7SUFDcEYsR0FBRyxFQUFFLDBDQUEwQyxDQUFDLGtCQUFrQm5CLE9BQUssQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxJQUFJLGtCQUFrQkEsT0FBSyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSw0QkFBNEIsQ0FBQyxrQkFBa0JBLE9BQUssQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFO0lBQ2hQLElBQUksU0FBUyxFQUFFd0IsZ0JBQU0sQ0FBQyxVQUFVO0lBQ2hDLEdBQUcsa0JBQWtCeEIsT0FBSyxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUU7SUFDakQsSUFBSSxPQUFPLEVBQUUsWUFBWTtJQUN6QixHQUFHLEVBQUUsUUFBUSxDQUFDLGtCQUFrQkEsT0FBSyxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUU7SUFDNUQsSUFBSSxLQUFLLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHO0lBQzVCLElBQUksT0FBTyxFQUFFLFlBQVk7SUFDekIsR0FBRyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNwQixDQUFDO0lBQ0QsTUFBTSxZQUFZLEdBQUcsWUFBWTtJQUNqQyxFQUFFLE9BQU8sYUFBYSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQ2tDLFFBQWUsRUFBRSxDQUFDLEVBQUUsZUFBZSxDQUFDLENBQUM7SUFDdEcsQ0FBQyxDQUFDO0lBQ0YsTUFBTSxZQUFZLEdBQUcsWUFBWTtJQUNqQyxFQUFFLE1BQU0sQ0FBQyxZQUFZLENBQUMsR0FBRyxNQUFNLGFBQWEsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzdFLEVBQUUsTUFBTSxlQUFlLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxVQUFVLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDdEYsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQztJQUNuQyxJQUFJLE9BQU8sS0FBS0MsSUFBVSxDQUFDLG9EQUFvRCxFQUFFO0lBQ2pGLE1BQU0sUUFBUSxFQUFFLEdBQUc7SUFDbkIsS0FBSyxDQUFDLENBQUM7SUFDUCxFQUFFLE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDbEQsRUFBRSxNQUFNLGdCQUFnQixHQUFHLE1BQU07SUFDakMsSUFBSUMsS0FBYyxFQUFFLENBQUM7SUFDckIsSUFBSUMsTUFBZSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2pDLEdBQUcsQ0FBQztJQUNKLEVBQUUsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQUsscUJBQXFCckMsT0FBSyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFO0lBQ3pGLElBQUksR0FBRyxLQUFLO0lBQ1osSUFBSSxJQUFJLEVBQUUsS0FBSyxDQUFDLFNBQVMsQ0FBQyxLQUFLO0lBQy9CLEdBQUcsa0JBQWtCQSxPQUFLLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUU7SUFDNUQsSUFBSSxTQUFTLEVBQUUsS0FBSztJQUNwQixHQUFHLGtCQUFrQkEsT0FBSyxDQUFDLGFBQWEsQ0FBQyxPQUFPLEVBQUU7SUFDbEQsSUFBSSxPQUFPLEVBQUUsbUJBQW1CO0lBQ2hDLEdBQUcsRUFBRSxlQUFlLENBQUMsQ0FBQyxrQkFBa0JBLE9BQUssQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBRSxJQUFJLGtCQUFrQkEsT0FBSyxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLCtCQUErQixDQUFDLENBQUMsa0JBQWtCQSxPQUFLLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsSUFBSSxrQkFBa0JBLE9BQUssQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFO0lBQ2hSLElBQUksS0FBSyxFQUFFLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRTtJQUN6QixJQUFJLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUc7SUFDN0IsR0FBRyxrQkFBa0JBLE9BQUssQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFO0lBQ2pELElBQUksSUFBSSxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSTtJQUMzQixJQUFJLEtBQUssRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUs7SUFDOUIsSUFBSSxPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU87SUFDMUIsR0FBRyxFQUFFLFFBQVEsQ0FBQyxrQkFBa0JBLE9BQUssQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFO0lBQzVELElBQUksSUFBSSxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSTtJQUMzQixJQUFJLEtBQUssRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUc7SUFDNUIsSUFBSSxPQUFPLEVBQUUsTUFBTTtJQUNuQixNQUFNLGdCQUFnQixFQUFFLENBQUM7SUFDekIsTUFBTSxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDdEIsS0FBSztJQUNMLEdBQUcsRUFBRSx5QkFBeUIsQ0FBQyxrQkFBa0JBLE9BQUssQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFO0lBQzdFLElBQUksT0FBTyxFQUFFLFlBQVk7SUFDekIsTUFBTSxNQUFNLFlBQVksRUFBRSxDQUFDO0lBQzNCLE1BQU0sZ0JBQWdCLEVBQUUsQ0FBQztJQUN6QixNQUFNLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUN0QixLQUFLO0lBQ0wsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDakIsQ0FBQzs7Ozs7O0FDbkdELCtCQUFlLENBQUMsY0FBYyxLQUFLO0lBQ25DLEVBQUUsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQUsscUJBQXFCQSxPQUFLLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUU7SUFDekYsSUFBSSxHQUFHLEtBQUs7SUFDWixJQUFJLElBQUksRUFBRSxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU07SUFDaEMsR0FBRyxrQkFBa0JBLE9BQUssQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRTtJQUM1RCxJQUFJLFNBQVMsRUFBRSxLQUFLO0lBQ3BCLEdBQUcsa0JBQWtCQSxPQUFLLENBQUMsYUFBYSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsQ0FBQyxrQkFBa0JBLE9BQUssQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBRSxJQUFJLGtCQUFrQkEsT0FBSyxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsRUFBRTtJQUNyTCxJQUFJLEdBQUcsRUFBRSxjQUFjLEVBQUU7SUFDekIsSUFBSSxxQkFBcUIsRUFBRSxLQUFLO0lBQ2hDLEdBQUcsQ0FBQyxrQkFBa0JBLE9BQUssQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFO0lBQ2pELElBQUksS0FBSyxFQUFFLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBRTtJQUNwQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNSLENBQUM7O0lDVmMsNEJBQVEsQ0FBQyxLQUFLLEVBQUU7SUFDL0IsRUFBRSx1QkFBdUJBLE9BQUssQ0FBQyxhQUFhLENBQUMsV0FBVyxFQUFFO0lBQzFELElBQUksS0FBSyxFQUFFLFVBQVU7SUFDckIsSUFBSSxPQUFPLEVBQUVzQyxhQUFrQixDQUFDLGdCQUFnQjtJQUNoRCxHQUFHLGtCQUFrQnRDLE9BQUssQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRTtJQUMvRCxJQUFJLEVBQUUsRUFBRSxNQUFNO0lBQ2QsSUFBSSxLQUFLLEVBQUUsZUFBZTtJQUMxQixJQUFJLE1BQU0sRUFBRSxNQUFNLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUM7SUFDdEQsR0FBRyxDQUFDLGtCQUFrQkEsT0FBSyxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFO0lBQ2hFLElBQUksRUFBRSxFQUFFLFFBQVE7SUFDaEIsSUFBSSxLQUFLLEVBQUUsaUJBQWlCO0lBQzVCLElBQUksS0FBSyxFQUFFLGFBQWE7SUFDeEIsSUFBSSxNQUFNLEVBQUUsTUFBTTtJQUNsQixNQUFNLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxzQ0FBc0MsRUFBRSxLQUFLLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxFQUFFO0lBQ3hGLFFBQVE7SUFDUixVQUFVLElBQUksRUFBRSxRQUFRO0lBQ3hCLFVBQVUsTUFBTSxFQUFFLE1BQU07SUFDeEIsWUFBWSxTQUFTLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNyRCxXQUFXO0lBQ1gsVUFBVSxLQUFLLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHO0lBQ2xDLFNBQVM7SUFDVCxRQUFRO0lBQ1IsVUFBVSxJQUFJLEVBQUUsUUFBUTtJQUN4QixVQUFVLE1BQU0sRUFBRSxNQUFNO0lBQ3hCLFdBQVc7SUFDWCxVQUFVLEtBQUssRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUs7SUFDcEMsVUFBVSxJQUFJLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJO0lBQ2pDLFNBQVM7SUFDVCxPQUFPLENBQUMsQ0FBQztJQUNULEtBQUs7SUFDTCxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ047O0lDdEJBLE1BQU0sZUFBZSxHQUFHNkIsaUJBQXlCLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUNyRSxNQUFNLEVBQUUsYUFBYSxFQUFFLEdBQUdKLFdBQW1CLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDL0QsTUFBTSxFQUFFLFdBQVcsRUFBRSxHQUFHQSxXQUFtQixDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQzNELE1BQU0sRUFBRSxlQUFlLEVBQUUsR0FBR0EsV0FBbUIsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ25FLE1BQU1jLGlCQUFlLEdBQUdWLGlCQUF5QixDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDckUsTUFBTVcsZ0JBQWMsR0FBRyxFQUFFLENBQUM7SUFDWCxvQkFBUSxHQUFHO0lBQzFCLEVBQUUsSUFBSSxZQUFZLEdBQUcsc0JBQXNCeEMsT0FBSyxDQUFDLGFBQWEsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDbkYsRUFBRSxZQUFZLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztJQUN6QyxFQUFFc0IsS0FBYSxDQUFDLGFBQWEsRUFBRW1CLElBQVksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLFdBQVcsS0FBSyw4QkFBOEIsQ0FBQyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsR0FBRyxFQUFFLEtBQUssS0FBSztJQUNwSixJQUFJLGFBQWEsRUFBRSxDQUFDO0lBQ3BCLElBQUksSUFBSSxtQkFBbUIsR0FBRyxlQUFlLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxJQUFJLEVBQUUsV0FBVyxLQUFLLHFCQUFxQixDQUFDLENBQUM7SUFDMUcsSUFBSSxJQUFJLG1CQUFtQixJQUFJLElBQUk7SUFDbkMsTUFBTSxPQUFPO0lBQ2IsSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUs7SUFDN0QsTUFBTSxNQUFNLFVBQVUsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxLQUFLLFFBQVEsQ0FBQyxlQUFlLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN6RSxNQUFNLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxpQkFBaUIsR0FBRyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3pJLEtBQUssQ0FBQyxDQUFDO0lBQ1AsSUFBSSxNQUFNLE1BQU0sR0FBRyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQztJQUM3RCxJQUFJLElBQUksTUFBTSxJQUFJLElBQUk7SUFDdEIsTUFBTSxPQUFPO0lBQ2IsSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLG1CQUFtQixDQUFDLEtBQUssRUFBRTtJQUM3QyxNQUFNLFFBQVEsRUFBRSxNQUFNO0lBQ3RCLEtBQUssQ0FBQyxDQUFDO0lBQ1AsSUFBSSxJQUFJLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxJQUFJLEVBQUUsV0FBVyxLQUFLLFdBQVcsQ0FBQztJQUM1RixNQUFNLE9BQU87SUFDYixJQUFJLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxpQkFBaUJ6QyxPQUFLLENBQUMsYUFBYSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3JHLEdBQUcsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELE1BQU0sWUFBWSxHQUFHLE1BQU07SUFDM0IsRUFBRSxhQUFhLEVBQUUsQ0FBQztJQUNsQixFQUFFLFFBQVFpQixHQUFZLENBQUMsU0FBUyxFQUFFUyxRQUFrQixDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUM7SUFDbEYsSUFBSSxLQUFLQSxRQUFrQixDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUMsYUFBYSxFQUFFO0lBQzFFLE1BQU0sdUJBQXVCMUIsT0FBSyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUU7SUFDeEQsUUFBUSxTQUFTLEVBQUV3QixnQkFBTSxDQUFDLE9BQU87SUFDakMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLEtBQUs7SUFDckQsUUFBUSx1QkFBdUJ4QixPQUFLLENBQUMsYUFBYSxDQUFDLGNBQWMsRUFBRTtJQUNuRSxVQUFVLEdBQUcsRUFBRSxRQUFRLEVBQUU7SUFDekIsU0FBUyxDQUFDLENBQUM7SUFDWCxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ1YsS0FBSztJQUNMLElBQUksU0FBUztJQUNiLE1BQU0sdUJBQXVCQSxPQUFLLENBQUMsYUFBYSxDQUFDQSxPQUFLLENBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxTQUFTLENBQUMsYUFBYSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxLQUFLO0lBQ25ILFFBQVEsdUJBQXVCQSxPQUFLLENBQUMsYUFBYSxDQUFDLFlBQVksRUFBRTtJQUNqRSxVQUFVLEdBQUcsRUFBRSxRQUFRLEVBQUU7SUFDekIsU0FBUyxDQUFDLENBQUM7SUFDWCxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ1YsS0FBSztJQUNMLEdBQUc7SUFDSCxDQUFDLENBQUM7SUFDSyxNQUFNLFlBQVksR0FBRyxDQUFDLEVBQUUsUUFBUSxFQUFFLEtBQUs7SUFDOUMsRUFBRSxNQUFNLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxHQUFHQSxPQUFLLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUM1RSxFQUFFLHVCQUF1QkEsT0FBSyxDQUFDLGFBQWEsQ0FBQ0EsT0FBSyxDQUFDLFFBQVEsRUFBRSxJQUFJLGtCQUFrQkEsT0FBSyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUU7SUFDOUcsSUFBSSxPQUFPLEVBQUUsTUFBTTtJQUNuQixNQUFNLFNBQVMsQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0MsTUFBTSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNyQixLQUFLO0lBQ0wsR0FBRyxrQkFBa0JBLE9BQUssQ0FBQyxhQUFhLENBQUMsZUFBZSxFQUFFO0lBQzFELElBQUksU0FBUyxFQUFFLFdBQVcsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRXdCLGdCQUFNLENBQUMsbUJBQW1CLEVBQUUsSUFBSSxHQUFHQSxnQkFBTSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDM0csR0FBRyxrQkFBa0J4QixPQUFLLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRTtJQUNqRCxJQUFJLEtBQUssRUFBRSxFQUFFLEtBQUssRUFBRSxTQUFTLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFO0lBQ2xELEdBQUcsa0JBQWtCQSxPQUFLLENBQUMsYUFBYSxDQUFDLFdBQVcsRUFBRTtJQUN0RCxJQUFJLElBQUksRUFBRSxlQUFlO0lBQ3pCLElBQUksSUFBSSxFQUFFLE1BQU07SUFDaEIsSUFBSSxTQUFTLEVBQUUsV0FBVyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFd0IsZ0JBQU0sQ0FBQyxJQUFJLENBQUM7SUFDOUQsR0FBRyxDQUFDLGtCQUFrQnhCLE9BQUssQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFO0lBQ2hELElBQUksU0FBUyxFQUFFLFdBQVcsQ0FBQyxzQkFBc0IsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRXdCLGdCQUFNLENBQUMsSUFBSSxDQUFDO0lBQ3BILEdBQUcsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLElBQUksU0FBUyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEtBQUs7SUFDeEUsSUFBSSxNQUFNLElBQUksR0FBRyxRQUFRLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2xELElBQUksSUFBSSxJQUFJLElBQUksSUFBSTtJQUNwQixNQUFNLE9BQU8sSUFBSSxDQUFDO0lBQ2xCLElBQUksdUJBQXVCeEIsT0FBSyxDQUFDLGFBQWEsQ0FBQyxhQUFhLEVBQUU7SUFDOUQsTUFBTSxHQUFHLEVBQUUsSUFBSTtJQUNmLE1BQU0sT0FBTyxFQUFFLFFBQVEsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDO0lBQ3hDLE1BQU0sUUFBUSxFQUFFLGVBQWUsQ0FBQyxZQUFZLEVBQUUsS0FBSyxJQUFJO0lBQ3ZELEtBQUssQ0FBQyxDQUFDO0lBQ1AsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNOLENBQUMsQ0FBQztJQUNGLE1BQU0sWUFBWSxHQUFHLENBQUMsWUFBWSxLQUFLLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEtBQUssUUFBUSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxTQUFTLEtBQUssR0FBRyxHQUFHLGVBQWUsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMvSixNQUFNLGNBQWMsR0FBRyxDQUFDLEVBQUUsUUFBUSxFQUFFLEtBQUs7SUFDaEQsRUFBRSxNQUFNLFlBQVksR0FBR0EsT0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLFNBQVMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDN0UsRUFBRSxNQUFNLGdCQUFnQixHQUFHQSxPQUFLLENBQUMsT0FBTyxDQUFDLE1BQU07SUFDL0MsSUFBSSxPQUFPLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEtBQUssZUFBZSxDQUFDLFlBQVksRUFBRSxLQUFLLFFBQVEsQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUM5RyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDVCxFQUFFLE1BQU0sQ0FBQyxTQUFTLEVBQUUsWUFBWSxDQUFDLEdBQUdBLE9BQUssQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7SUFDL0UsRUFBRSxNQUFNLENBQUMscUJBQXFCLEVBQUUsZUFBZSxDQUFDLEdBQUdBLE9BQUssQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDekUsRUFBRUEsT0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFNO0lBQ3hCLElBQUksTUFBTSxxQkFBcUIsR0FBRyxDQUFDLEVBQUUsU0FBUyxFQUFFLEtBQUs7SUFDckQsTUFBTSxJQUFJLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEtBQUssU0FBUyxLQUFLLFFBQVEsQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdkYsUUFBUSxZQUFZLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7SUFDakQsS0FBSyxDQUFDO0lBQ04sSUFBSSxNQUFNLG9CQUFvQixHQUFHLENBQUMsRUFBRSxLQUFLLEVBQUUsS0FBSztJQUNoRCxNQUFNLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM3QixLQUFLLENBQUM7SUFDTixJQUFJLFVBQVUsQ0FBQyxTQUFTLENBQUMsdUJBQXVCLEVBQUUscUJBQXFCLENBQUMsQ0FBQztJQUN6RSxJQUFJLFVBQVUsQ0FBQyxTQUFTLENBQUMsc0JBQXNCLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztJQUN2RSxJQUFJLE9BQU8sTUFBTTtJQUNqQixNQUFNLFVBQVUsQ0FBQyxXQUFXLENBQUMsdUJBQXVCLEVBQUUscUJBQXFCLENBQUMsQ0FBQztJQUM3RSxNQUFNLFVBQVUsQ0FBQyxXQUFXLENBQUMsc0JBQXNCLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztJQUMzRSxLQUFLLENBQUM7SUFDTixHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDVCxFQUFFLHVCQUF1QkEsT0FBSyxDQUFDLGFBQWEsQ0FBQ0EsT0FBSyxDQUFDLFFBQVEsRUFBRSxJQUFJLGtCQUFrQkEsT0FBSyxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUU7SUFDL0csSUFBSSxRQUFRLEVBQUUsTUFBTSxDQUFDLFNBQVMsQ0FBQyxLQUFLO0lBQ3BDLElBQUksU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSTtJQUNwQyxJQUFJLFlBQVksRUFBRSxDQUFDLEtBQUsscUJBQXFCQSxPQUFLLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRTtJQUN4RSxNQUFNLEdBQUcsS0FBSztJQUNkLEtBQUssa0JBQWtCQSxPQUFLLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUU7SUFDNUQsTUFBTSxlQUFlLEVBQUUsQ0FBQztJQUN4QixNQUFNLElBQUksRUFBRSxLQUFLLENBQUMsU0FBUyxDQUFDLE9BQU87SUFDbkMsS0FBSyxrQkFBa0JBLE9BQUssQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFO0lBQ2xELE1BQU0sU0FBUyxFQUFFd0IsZ0JBQU0sQ0FBQyxrQkFBa0I7SUFDMUMsS0FBSyxFQUFFLFlBQVksQ0FBQyxNQUFNLEtBQUssQ0FBQyxHQUFHLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEtBQUs7SUFDaEUsTUFBTSxNQUFNLElBQUksR0FBRyxRQUFRLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3BELE1BQU0sSUFBSSxJQUFJLElBQUksSUFBSTtJQUN0QixRQUFRLE9BQU8sSUFBSSxDQUFDO0lBQ3BCLE1BQU0sdUJBQXVCeEIsT0FBSyxDQUFDLGFBQWEsQ0FBQyxhQUFhLEVBQUU7SUFDaEUsUUFBUSxHQUFHLEVBQUUsSUFBSTtJQUNqQixRQUFRLE9BQU8sRUFBRSxRQUFRLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQztJQUMxQyxRQUFRLFFBQVEsRUFBRSxlQUFlLENBQUMsWUFBWSxFQUFFLEtBQUssSUFBSTtJQUN6RCxPQUFPLENBQUMsQ0FBQztJQUNULEtBQUssQ0FBQyxtQkFBbUJBLE9BQUssQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFO0lBQ25ELE1BQU0sS0FBSyxFQUFFLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRTtJQUNsQyxLQUFLLEVBQUUsa0NBQWtDLGtCQUFrQkEsT0FBSyxDQUFDLGFBQWEsQ0FBQyxHQUFHLEVBQUU7SUFDcEYsTUFBTSxPQUFPLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQyxRQUFRLENBQUM7SUFDbkQsS0FBSyxFQUFFLGtCQUFrQixDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ25DLEdBQUcsRUFBRSxDQUFDLEtBQUsscUJBQXFCQSxPQUFLLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRTtJQUMzRCxJQUFJLEdBQUcsS0FBSztJQUNaLElBQUksU0FBUyxFQUFFLFdBQVcsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxzQkFBc0IsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUMzRyxJQUFJLGFBQWEsRUFBRSxDQUFDLENBQUMsS0FBSzBDLGFBQW1CLENBQUMsZUFBZSxDQUFDLENBQUMsRUFBRSxzQkFBc0IxQyxPQUFLLENBQUMsYUFBYSxDQUFDLG1CQUFtQixFQUFFO0lBQ2hJLE1BQU0sUUFBUTtJQUNkLEtBQUssQ0FBQyxDQUFDO0lBQ1AsR0FBRyxrQkFBa0JBLE9BQUssQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFO0lBQ2hELElBQUksU0FBUyxFQUFFLFdBQVcsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxnQkFBZ0IsR0FBRyxXQUFXLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxtQkFBbUIsRUFBRSxPQUFPLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEtBQUssQ0FBQyxFQUFFLE9BQU8sQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDO0lBQ3hPLEdBQUcsa0JBQWtCQSxPQUFLLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRTtJQUNoRCxJQUFJLFNBQVMsRUFBRSxXQUFXLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUV3QixnQkFBTSxDQUFDLGdCQUFnQixDQUFDO0lBQ3pFLEdBQUcsa0JBQWtCeEIsT0FBSyxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUU7SUFDL0MsSUFBSSxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRO0lBQ3RDLElBQUksU0FBUyxFQUFFd0IsZ0JBQU0sQ0FBQyxZQUFZO0lBQ2xDLEdBQUcsa0JBQWtCeEIsT0FBSyxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUU7SUFDakQsSUFBSSxLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsU0FBUyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFO0lBQ3RFLEdBQUcsRUFBRSxRQUFRLENBQUMsRUFBRSxDQUFDLHFCQUFxQixJQUFJaUIsR0FBWSxDQUFDLG1CQUFtQixFQUFFUyxRQUFrQixDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLG9CQUFvQjFCLE9BQUssQ0FBQyxhQUFhLENBQUN1QyxpQkFBZSxFQUFFO0lBQ2pNLElBQUksSUFBSSxFQUFFQyxnQkFBYztJQUN4QixJQUFJLEtBQUssRUFBRSxTQUFTLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sS0FBSyxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzlFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLFNBQVMsQ0FBQyxvQkFBb0J4QyxPQUFLLENBQUMsYUFBYSxDQUFDLFdBQVcsRUFBRTtJQUM5RSxJQUFJLEtBQUssRUFBRSxTQUFTO0lBQ3BCLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNWLENBQUM7Ozs7Ozs7Ozs7SUN6SkQsTUFBTSxlQUFlLEdBQUc2QixpQkFBeUIsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ3JFLE1BQU0sY0FBYyxHQUFHLEVBQUUsQ0FBQztJQUMxQixNQUFNLGlCQUFpQixHQUFHLENBQUMsQ0FBQztJQUNiLGdCQUFRLENBQUMsS0FBSyxFQUFFO0lBQy9CLEVBQUUsdUJBQXVCN0IsT0FBSyxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUU7SUFDMUQsSUFBSSxLQUFLLEVBQUUsVUFBVTtJQUNyQixJQUFJLE9BQU8sRUFBRXNDLGFBQWtCLENBQUMsZ0JBQWdCO0lBQ2hELEdBQUcsa0JBQWtCdEMsT0FBSyxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFO0lBQ2hFLElBQUksS0FBSyxFQUFFLGlCQUFpQjtJQUM1QixHQUFHLEVBQUUsU0FBUyxDQUFDLGFBQWEsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEscUJBQXFCQSxPQUFLLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUU7SUFDM0csSUFBSSxFQUFFLEVBQUUsQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDOUIsSUFBSSxLQUFLLGtCQUFrQkEsT0FBSyxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxrQkFBa0JBLE9BQUssQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFO0lBQ3ZHLE1BQU0sU0FBUyxFQUFFd0IsZ0JBQU0sQ0FBQyxJQUFJO0lBQzVCLE1BQU0sS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLFNBQVMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUU7SUFDcEQsS0FBSyxFQUFFLFFBQVEsQ0FBQyxrQkFBa0J4QixPQUFLLENBQUMsYUFBYSxDQUFDLGVBQWUsRUFBRTtJQUN2RSxNQUFNLElBQUksRUFBRSxjQUFjO0lBQzFCLE1BQU0sR0FBRyxFQUFFLGlCQUFpQjtJQUM1QixNQUFNLEtBQUssRUFBRSxTQUFTLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEtBQUssS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNoSCxLQUFLLENBQUMsQ0FBQztJQUNQLElBQUksTUFBTSxFQUFFLE1BQU0sU0FBUyxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQztJQUMzRCxHQUFHLENBQUMsQ0FBQyxDQUFDLGtCQUFrQkEsT0FBSyxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxrQkFBa0JBLE9BQUssQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRTtJQUN4SSxJQUFJLEVBQUUsRUFBRSxXQUFXO0lBQ25CLElBQUksS0FBSyxFQUFFLHNCQUFzQjtJQUNqQyxJQUFJLElBQUksRUFBRSxzQkFBc0JBLE9BQUssQ0FBQyxhQUFhLENBQUMsV0FBVyxFQUFFO0lBQ2pFLE1BQU0sSUFBSSxFQUFFLE1BQU07SUFDbEIsTUFBTSxJQUFJLEVBQUUsYUFBYTtJQUN6QixLQUFLLENBQUM7SUFDTixJQUFJLE1BQU0sRUFBRSxvQkFBb0I7SUFDaEMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNOOztJQ2xDQSxNQUFNLEVBQUUsS0FBSyxFQUFFLEdBQUcsT0FBTyxDQUFDO0lBUVgsc0JBQVEsR0FBRztJQUMxQixFQUFFc0IsS0FBYSxDQUFDLGVBQWUsRUFBRU8saUJBQXlCLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxTQUFTLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxLQUFLLEtBQUs7SUFDckgsSUFBSSxNQUFNLElBQUksR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztJQUNsQyxJQUFJLE1BQU0sT0FBTyxHQUFHLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ25ELElBQUksTUFBTSxVQUFVLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUM7SUFDMUMsSUFBSSxJQUFJLFVBQVUsSUFBSSxJQUFJO0lBQzFCLE1BQU0sT0FBTztJQUNiLElBQUksR0FBRyxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsU0FBUyxHQUFHLElBQUksRUFBRTtJQUMzQyxNQUFNLE1BQU0sR0FBRyxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQy9DLE1BQU0sR0FBRyxDQUFDLEtBQUssQ0FBQyxTQUFTLElBQUksQ0FBQyxDQUFDLEVBQUVMLGdCQUFNLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztJQUMxRCxNQUFNLE1BQU0sV0FBVyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDO0lBQzdDLE1BQU0sSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFO0lBQzdCLFFBQVEsTUFBTSxVQUFVLEdBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxLQUFLLGFBQWEsQ0FBQyxDQUFDO0lBQzdHLFFBQVEsSUFBSSxPQUFPLElBQUksVUFBVSxFQUFFO0lBQ25DLFVBQVUsT0FBTyxXQUFXLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN4RCxTQUFTO0lBQ1QsUUFBUSxJQUFJUCxHQUFZLENBQUMsU0FBUyxFQUFFUyxRQUFrQixDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsRUFBRTtJQUNsRixVQUFVLFdBQVcsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxrQkFBa0IsS0FBSyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUU7SUFDN0YsWUFBWSxTQUFTLEVBQUUsV0FBVyxDQUFDRixnQkFBTSxDQUFDLFNBQVMsRUFBRSxPQUFPLEdBQUdBLGdCQUFNLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztJQUNsRixZQUFZLE9BQU8sRUFBRSxDQUFDLENBQUMsS0FBSztJQUM1QixjQUFjLElBQUksT0FBTyxFQUFFO0lBQzNCLGdCQUFnQixTQUFTLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNsRixlQUFlLE1BQU07SUFDckIsZ0JBQWdCa0IsYUFBbUIsQ0FBQyxlQUFlLENBQUMsQ0FBQyxFQUFFLHNCQUFzQixLQUFLLENBQUMsYUFBYSxDQUFDLE9BQU8sRUFBRTtJQUMxRyxrQkFBa0IsTUFBTSxFQUFFLElBQUksQ0FBQyxFQUFFO0lBQ2pDLGlCQUFpQixDQUFDLENBQUMsQ0FBQztJQUNwQixlQUFlO0lBQ2YsYUFBYTtJQUNiLFdBQVcsRUFBRSxDQUFDLE9BQU8sbUJBQW1CLEtBQUssQ0FBQyxhQUFhLENBQUMsV0FBVyxFQUFFO0lBQ3pFLFlBQVksSUFBSSxFQUFFLFVBQVU7SUFDNUIsV0FBVyxDQUFDLG1CQUFtQixLQUFLLENBQUMsYUFBYSxDQUFDLFdBQVcsRUFBRTtJQUNoRSxZQUFZLElBQUksRUFBRSxZQUFZO0lBQzlCLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNmLFNBQVM7SUFDVCxPQUFPO0lBQ1AsTUFBTSxPQUFPLEdBQUcsQ0FBQztJQUNqQixLQUFLLENBQUM7SUFDTixHQUFHLENBQUMsQ0FBQztJQUNMOztJQ3ZDQSxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUdqQixXQUFtQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzdDLE1BQU0sRUFBRSxPQUFPLEVBQUUsR0FBR2dCLElBQVksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLFdBQVcsS0FBSyxXQUFXLENBQUMsQ0FBQztJQUNqRixNQUFNLDBCQUEwQixHQUFHWixpQkFBeUIsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO0lBQzNGLE1BQU0sU0FBUyxHQUFHQSxpQkFBeUIsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN6RCxNQUFNLFlBQVksR0FBR0EsaUJBQXlCLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDL0QsTUFBTSxFQUFFLGVBQWUsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLGNBQWMsRUFBRSxHQUFHSixXQUFtQixDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDeEcsTUFBTSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLEdBQUdBLFdBQW1CLENBQUMsT0FBTyxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQ25GLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBR0EsV0FBbUIsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUN2RCxNQUFNLEVBQUUsU0FBUyxFQUFFLEdBQUdBLFdBQW1CLENBQUMscUJBQXFCLENBQUMsQ0FBQztJQUNqRSxNQUFNLFVBQVUsR0FBRyxjQUFjLENBQUM7SUFDbkIseUJBQVEsR0FBRztJQUMxQixFQUFFSCxLQUFhLENBQUMsb0JBQW9CLEVBQUVtQixJQUFZLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxXQUFXLEtBQUssb0JBQW9CLENBQUMsRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLEdBQUcsRUFBRSxLQUFLLEtBQUs7SUFDakosSUFBSSxJQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQztJQUN2RSxNQUFNLE9BQU87SUFDYixJQUFJLE1BQU0saUJBQWlCLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDO0lBQy9ELElBQUksTUFBTSxlQUFlLEdBQUcsaUJBQWlCLENBQUMsaUJBQWlCLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzVFLElBQUksT0FBTyxpQkFBaUIsQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDM0QsSUFBSSxNQUFNLGtCQUFrQixHQUFHLEVBQUUsQ0FBQztJQUNsQyxJQUFJLEtBQUssTUFBTSxZQUFZLElBQUksU0FBUyxDQUFDLGFBQWEsRUFBRSxFQUFFO0lBQzFELE1BQU0sa0JBQWtCLENBQUMsSUFBSSxpQkFBaUJ6QyxPQUFLLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRTtJQUN4RSxRQUFRLEVBQUUsRUFBRSxDQUFDLEVBQUUsVUFBVSxDQUFDLENBQUMsRUFBRSxZQUFZLENBQUMsQ0FBQztJQUMzQyxRQUFRLEtBQUssRUFBRSxTQUFTLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQztJQUMvQyxRQUFRLGFBQWEsRUFBRSxDQUFDLENBQUMsS0FBSzBDLGFBQW1CLENBQUMsZUFBZSxDQUFDLENBQUMsRUFBRSxzQkFBc0IxQyxPQUFLLENBQUMsYUFBYSxDQUFDLG1CQUFtQixFQUFFO0lBQ3BJLFVBQVUsUUFBUSxFQUFFLFlBQVk7SUFDaEMsU0FBUyxDQUFDLENBQUM7SUFDWCxPQUFPLEVBQUUsWUFBWSxDQUFDLENBQUMsQ0FBQztJQUN4QixLQUFLO0lBQ0wsSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsQ0FBQyxHQUFHLGlCQUFpQixrQkFBa0JBLE9BQUssQ0FBQyxhQUFhLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxFQUFFLEdBQUcsa0JBQWtCLGtCQUFrQkEsT0FBSyxDQUFDLGFBQWEsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEVBQUUsZUFBZSxDQUFDLENBQUM7SUFDOU0sR0FBRyxDQUFDLENBQUM7SUFDTCxFQUFFc0IsS0FBYSxDQUFDLGtCQUFrQixFQUFFbUIsSUFBWSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsV0FBVyxLQUFLLFlBQVksQ0FBQyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsR0FBRyxFQUFFLEtBQUssS0FBSztJQUN2SSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsRUFBRTtJQUNsRCxNQUFNLE1BQU0sUUFBUSxHQUFHLEtBQUssQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDNUUsTUFBTSxHQUFHLENBQUMsS0FBSyxDQUFDLFFBQVEsbUJBQW1CekMsT0FBSyxDQUFDLGFBQWEsQ0FBQyxlQUFlLEVBQUU7SUFDaEYsUUFBUSxHQUFHLEVBQUUsUUFBUSxFQUFFO0lBQ3ZCLFFBQVEsR0FBRyxFQUFFLFFBQVE7SUFDckIsT0FBTyxDQUFDLENBQUM7SUFDVCxLQUFLO0lBQ0wsR0FBRyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0QsTUFBTSxlQUFlLEdBQUcsQ0FBQyxFQUFFLFFBQVEsRUFBRSxLQUFLO0lBQzFDLEVBQUUsTUFBTSxDQUFDLE1BQU0sRUFBRSxTQUFTLENBQUMsR0FBR0EsT0FBSyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNqRCxFQUFFLE1BQU0sT0FBTyxHQUFHQSxPQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sU0FBUyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDaEYsRUFBRSxNQUFNLGVBQWUsR0FBR0EsT0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDekosRUFBRSxJQUFJLE9BQU8sQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO0lBQzVCLElBQUksdUJBQXVCQSxPQUFLLENBQUMsYUFBYSxDQUFDQSxPQUFLLENBQUMsUUFBUSxFQUFFLElBQUksa0JBQWtCQSxPQUFLLENBQUMsYUFBYSxDQUFDLFNBQVMsRUFBRTtJQUNwSCxNQUFNLEtBQUssRUFBRSxNQUFNO0lBQ25CLE1BQU0sUUFBUSxFQUFFLFNBQVM7SUFDekIsTUFBTSxPQUFPLEVBQUUsTUFBTSxTQUFTLENBQUMsRUFBRSxDQUFDO0lBQ2xDLE1BQU0sU0FBUyxFQUFFLFNBQVM7SUFDMUIsTUFBTSxJQUFJLEVBQUUsU0FBUyxDQUFDLEtBQUssQ0FBQyxNQUFNO0lBQ2xDLEtBQUssQ0FBQyxrQkFBa0JBLE9BQUssQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLElBQUksa0JBQWtCQSxPQUFLLENBQUMsYUFBYSxDQUFDLFlBQVksRUFBRTtJQUMzRyxNQUFNLEtBQUssa0JBQWtCQSxPQUFLLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxJQUFJLGtCQUFrQkEsT0FBSyxDQUFDLGFBQWEsQ0FBQyxHQUFHLEVBQUU7SUFDdEcsUUFBUSxLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsU0FBUyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUFFO0lBQ25FLE9BQU8sRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLGVBQWUsQ0FBQyxNQUFNLENBQUMsa0JBQWtCQSxPQUFLLENBQUMsYUFBYSxDQUFDLGdCQUFnQixFQUFFO0lBQzlHLFFBQVEsSUFBSSxFQUFFLGtCQUFrQjtJQUNoQyxRQUFRLFFBQVEsRUFBRSxRQUFRO0lBQzFCLE9BQU8sa0JBQWtCQSxPQUFLLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRTtJQUNwRCxRQUFRLFNBQVMsRUFBRSxXQUFXLENBQUMsV0FBVyxFQUFFLFNBQVMsQ0FBQztJQUN0RCxRQUFRLE9BQU8sRUFBRSxNQUFNLG9CQUFvQixDQUFDLFFBQVEsQ0FBQztJQUNyRCxRQUFRLEtBQUssRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRTtJQUNoRCxPQUFPLGtCQUFrQkEsT0FBSyxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUU7SUFDMUQsUUFBUSxJQUFJLEVBQUUsV0FBVztJQUN6QixRQUFRLElBQUksRUFBRSxNQUFNO0lBQ3BCLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNYLEtBQUssQ0FBQyxDQUFDLEVBQUUsZUFBZSxDQUFDLE1BQU0sS0FBSyxDQUFDLG1CQUFtQkEsT0FBSyxDQUFDLGFBQWEsQ0FBQywwQkFBMEIsRUFBRTtJQUN4RyxNQUFNLFNBQVMsRUFBRSxDQUFDLGdCQUFnQixxQkFBcUJBLE9BQUssQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFFO0lBQ3RGLFFBQVEsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxnQkFBZ0IsRUFBRSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsQ0FBQztJQUNuRSxPQUFPLENBQUM7SUFDUixNQUFNLGNBQWMsRUFBRTtJQUN0QixRQUFRLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEtBQUs7SUFDeEMsVUFBVSxNQUFNLElBQUksR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzdDLFVBQVUsT0FBTztJQUNqQixZQUFZLFVBQVUsRUFBRSxVQUFVLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7SUFDekQsWUFBWSxRQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU07SUFDakMsWUFBWSxHQUFHLEVBQUUsSUFBSSxDQUFDLEVBQUU7SUFDeEIsWUFBWSxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7SUFDbkMsWUFBWSxNQUFNLEVBQUUsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO0lBQzdDLFlBQVksSUFBSSxFQUFFLENBQUM7SUFDbkIsWUFBWSxJQUFJO0lBQ2hCLFdBQVcsQ0FBQztJQUNaLFNBQVMsQ0FBQztJQUNWLE9BQU87SUFDUCxLQUFLLENBQUMsbUJBQW1CQSxPQUFLLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBRTtJQUN6RCxNQUFNLEtBQUssRUFBRSxZQUFZLENBQUMsS0FBSztJQUMvQixLQUFLLGtCQUFrQkEsT0FBSyxDQUFDLGFBQWEsQ0FBQyxlQUFlLEVBQUU7SUFDNUQsTUFBTSxHQUFHO0lBQ1QsUUFBUSxPQUFPLEVBQUUsR0FBRztJQUNwQixRQUFRLFFBQVEsRUFBRSxHQUFHO0lBQ3JCLFFBQVEsVUFBVSxFQUFFLDhDQUE4QztJQUNsRSxRQUFRLFNBQVMsRUFBRSw4Q0FBOEM7SUFDakUsT0FBTztJQUNQLEtBQUssQ0FBQyxrQkFBa0JBLE9BQUssQ0FBQyxhQUFhLENBQUMsY0FBYyxFQUFFO0lBQzVELE1BQU0sSUFBSSxrQkFBa0JBLE9BQUssQ0FBQyxhQUFhLENBQUNBLE9BQUssQ0FBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLHlFQUF5RSxDQUFDO0lBQ2hKLEtBQUssQ0FBQyxrQkFBa0JBLE9BQUssQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFO0lBQ3BELE1BQU0sT0FBTyxFQUFFLE1BQU0sb0JBQW9CLENBQUMsUUFBUSxDQUFDO0lBQ25ELE1BQU0sU0FBUyxFQUFFLE1BQU07SUFDdkIsS0FBSyxFQUFFLDZCQUE2QixDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3hDLEdBQUcsTUFBTTtJQUNULElBQUksdUJBQXVCQSxPQUFLLENBQUMsYUFBYSxDQUFDQSxPQUFLLENBQUMsUUFBUSxFQUFFLElBQUksa0JBQWtCQSxPQUFLLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBRTtJQUNySCxNQUFNLEtBQUssRUFBRSxZQUFZLENBQUMsS0FBSztJQUMvQixLQUFLLGtCQUFrQkEsT0FBSyxDQUFDLGFBQWEsQ0FBQyxlQUFlLEVBQUU7SUFDNUQsTUFBTSxHQUFHO0lBQ1QsUUFBUSxPQUFPLEVBQUUsR0FBRztJQUNwQixRQUFRLFFBQVEsRUFBRSxHQUFHO0lBQ3JCLFFBQVEsVUFBVSxFQUFFLDhDQUE4QztJQUNsRSxRQUFRLFNBQVMsRUFBRSw4Q0FBOEM7SUFDakUsT0FBTztJQUNQLEtBQUssQ0FBQyxrQkFBa0JBLE9BQUssQ0FBQyxhQUFhLENBQUMsY0FBYyxFQUFFO0lBQzVELE1BQU0sSUFBSSxrQkFBa0JBLE9BQUssQ0FBQyxhQUFhLENBQUNBLE9BQUssQ0FBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLGlEQUFpRCxDQUFDO0lBQ3hILEtBQUssQ0FBQyxrQkFBa0JBLE9BQUssQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFO0lBQ3BELE1BQU0sT0FBTyxFQUFFLE1BQU0sb0JBQW9CLENBQUMsUUFBUSxDQUFDO0lBQ25ELE1BQU0sU0FBUyxFQUFFLE1BQU07SUFDdkIsS0FBSyxFQUFFLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN2QixHQUFHO0lBQ0gsQ0FBQzs7SUN6SE0sTUFBTSxrQkFBa0IsR0FBRyxNQUFNO0lBQ3hDLEVBQUUsTUFBTSxrQkFBa0IsR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDdkUsRUFBRSxNQUFNLFdBQVcsR0FBRyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFdBQVcsQ0FBQztJQUN2RixFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQzFDLEVBQUUsSUFBSSxRQUFRLEdBQUcsRUFBRSxDQUFDO0lBQ3BCLEVBQUUsS0FBSyxNQUFNLFVBQVUsSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxFQUFFO0lBQ3ZELElBQUksTUFBTSxPQUFPLEdBQUcsVUFBVSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEtBQUssUUFBUSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxLQUFLLFFBQVEsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDOUksSUFBSSxJQUFJLE9BQU8sQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO0lBQzlCLE1BQU0sUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRztJQUNsQyxRQUFRLEtBQUssRUFBRSxVQUFVLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLEVBQUUsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3hJLFFBQVEsS0FBSyxFQUFFLE9BQU87SUFDdEIsUUFBUSxJQUFJLEVBQUUsQ0FBQyxVQUFVLENBQUMsU0FBUztJQUNuQyxPQUFPLENBQUM7SUFDUixLQUFLO0lBQ0wsR0FBRztJQUNILEVBQUUsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQyxDQUFDO0lBQ0ssTUFBTSxjQUFjLEdBQUcsTUFBTTtJQUNwQyxFQUFFLE9BQU87SUFDVCxJQUFJLE1BQU0sRUFBRSxPQUFPLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLE9BQU8sQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDOUYsR0FBRyxDQUFDO0lBQ0osQ0FBQyxDQUFDO0lBQ0ssTUFBTSxrQkFBa0IsR0FBRyxNQUFNO0lBQ3hDLEVBQUUsTUFBTSxPQUFPLEdBQUcsY0FBYyxFQUFFLENBQUM7SUFDbkMsRUFBRSxPQUFPLE9BQU8sQ0FBQyxNQUFNLENBQUM7SUFDeEIsQ0FBQzs7SUNyQkQsTUFBTSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsR0FBR3lCLFdBQW1CLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDOUQsTUFBTSxLQUFLLEdBQUc7SUFDZCxFQUFFLE1BQU0sRUFBRSxRQUFRO0lBQ2xCLEVBQUUsV0FBVyxFQUFFLFlBQVk7SUFDM0IsQ0FBQyxDQUFDO0lBQ0YsTUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDO0lBQ0gsTUFBTSxTQUFTLFNBQVN6QixPQUFLLENBQUMsU0FBUyxDQUFDO0lBQ3ZELEVBQUUsV0FBVyxDQUFDLEtBQUssRUFBRTtJQUNyQixJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqQixJQUFJLElBQUksQ0FBQyxLQUFLLEdBQUc7SUFDakIsTUFBTSxJQUFJLEVBQUUsS0FBSyxDQUFDLE1BQU07SUFDeEIsS0FBSyxDQUFDO0lBQ04sR0FBRztJQUNILEVBQUUsT0FBTyxDQUFDLElBQUksRUFBRTtJQUNoQixJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQzVCLEdBQUc7SUFDSCxFQUFFLE1BQU0sR0FBRztJQUNYLElBQUksdUJBQXVCQSxPQUFLLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUU7SUFDaEUsTUFBTSxJQUFJLEVBQUUsS0FBSyxDQUFDLFNBQVMsQ0FBQyxPQUFPO0lBQ25DLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSztJQUNuQixLQUFLLGtCQUFrQkEsT0FBSyxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUU7SUFDbkQsTUFBTSxXQUFXLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJO0lBQ2xDLE1BQU0sWUFBWTtJQUNsQixNQUFNLEtBQUssRUFBRSxLQUFLO0lBQ2xCLE1BQU0sUUFBUSxFQUFFO0lBQ2hCLHdCQUF3QkEsT0FBSyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUU7SUFDbkQsVUFBVSxFQUFFLEVBQUUsS0FBSyxDQUFDLE1BQU07SUFDMUIsU0FBUyxrQkFBa0JBLE9BQUssQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRTtJQUNsRSxVQUFVLFNBQVMsRUFBRSxLQUFLO0lBQzFCLFNBQVMsa0JBQWtCQSxPQUFLLENBQUMsYUFBYSxDQUFDLE9BQU8sRUFBRTtJQUN4RCxVQUFVLE9BQU8sRUFBRSxtQkFBbUI7SUFDdEMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFDLGtCQUFrQkEsT0FBSyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUFFLElBQUksa0JBQWtCQSxPQUFLLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRTtJQUNoSSxVQUFVLFNBQVMsRUFBRVMsU0FBTyxDQUFDLGNBQWM7SUFDM0MsU0FBUyxFQUFFLGdHQUFnRyxDQUFDLENBQUMsa0JBQWtCVCxPQUFLLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsSUFBSSxrQkFBa0JBLE9BQUssQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFO0lBQ3hOLFVBQVUsT0FBTyxFQUFFLFlBQVk7SUFDL0IsWUFBWSxNQUFNLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNoQyxZQUFZLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzVDLFdBQVc7SUFDWCxTQUFTLEVBQUUsUUFBUSxDQUFDLGtCQUFrQkEsT0FBSyxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUU7SUFDbEUsVUFBVSxLQUFLLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLO0lBQ3BDLFVBQVUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSTtJQUNqQyxVQUFVLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU87SUFDckMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDbEIsd0JBQXdCQSxPQUFLLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRTtJQUNuRCxVQUFVLEVBQUUsRUFBRSxLQUFLLENBQUMsV0FBVztJQUMvQixTQUFTLGtCQUFrQkEsT0FBSyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFO0lBQ2xFLFVBQVUsU0FBUyxFQUFFLEtBQUs7SUFDMUIsU0FBUyxrQkFBa0JBLE9BQUssQ0FBQyxhQUFhLENBQUMsT0FBTyxFQUFFO0lBQ3hELFVBQVUsT0FBTyxFQUFFLG1CQUFtQjtJQUN0QyxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUMsa0JBQWtCQSxPQUFLLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUUsSUFBSSxrQkFBa0JBLE9BQUssQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFO0lBQzdILFVBQVUsU0FBUyxFQUFFUyxTQUFPLENBQUMsY0FBYztJQUMzQyxTQUFTLEVBQUUscUVBQXFFLENBQUMsQ0FBQyxrQkFBa0JULE9BQUssQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxJQUFJLGtCQUFrQkEsT0FBSyxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUU7SUFDN0wsVUFBVSxPQUFPLEVBQUUsWUFBWTtJQUMvQixZQUFZLE1BQU0sSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3BDLFlBQVksSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNqQyxXQUFXO0lBQ1gsU0FBUyxFQUFFLFNBQVMsQ0FBQyxrQkFBa0JBLE9BQUssQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFO0lBQ25FLFVBQVUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSztJQUNwQyxVQUFVLElBQUksRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUk7SUFDakMsVUFBVSxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPO0lBQ3JDLFNBQVMsRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQ3pCLE9BQU87SUFDUCxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ1IsR0FBRztJQUNILEVBQUUsTUFBTSxNQUFNLEdBQUc7SUFDakIsSUFBSSxJQUFJMkMsY0FBdUIsRUFBRSxDQUFDLE1BQU0sRUFBRTtJQUMxQyxNQUFNLE1BQU0sV0FBVyxHQUFHQyxrQkFBMkIsRUFBRSxDQUFDO0lBQ3hELE1BQU0sU0FBUyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNwQyxLQUFLO0lBQ0wsR0FBRztJQUNILEVBQUUsTUFBTSxVQUFVLEdBQUc7SUFDckIsSUFBSSxJQUFJRCxjQUF1QixFQUFFLENBQUMsTUFBTTtJQUN4QyxNQUFNLEtBQUssRUFBRSxPQUFPLEVBQUUsT0FBTyxHQUFHLFFBQVEsQ0FBQyxDQUFDO0lBQzFDLEdBQUc7SUFDSDs7SUNwRUEsSUFBSSxpQkFBaUIsR0FBRyxFQUFFLENBQUM7SUFDWixNQUFNLFNBQVMsU0FBUyxNQUFNLENBQUM7SUFDOUMsRUFBRSxLQUFLLEdBQUc7SUFDVixJQUFJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxzQkFBc0IzQyxPQUFLLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3JGLElBQUksVUFBVSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDN0IsSUFBSSxXQUFXLEVBQUUsQ0FBQztJQUNsQixJQUFJLGFBQWEsRUFBRSxDQUFDO0lBQ3BCLElBQUksZ0JBQWdCLEVBQUUsQ0FBQztJQUN2QixJQUFJLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO0lBQ2hDLElBQUksVUFBVSxDQUFDLFNBQVMsQ0FBQyxzQkFBc0IsRUFBRSxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQztJQUM1RSxHQUFHO0lBQ0gsRUFBRSxvQkFBb0IsR0FBRztJQUN6QixJQUFJLElBQUksa0JBQWtCLEVBQUU7SUFDNUIsTUFBTSxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBSyxxQkFBcUJBLE9BQUssQ0FBQyxhQUFhLENBQUM2QyxTQUFnQixFQUFFO0lBQzlGLFFBQVEsR0FBRyxLQUFLO0lBQ2hCLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDVixHQUFHO0lBQ0gsRUFBRSxvQkFBb0IsQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFFO0lBQ2xDLElBQUksSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUVuQixRQUFrQixDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUM7SUFDM0YsTUFBTSxTQUFTLENBQUMsYUFBYSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBUSxLQUFLO0lBQ3RELFFBQVEsSUFBSSxLQUFLLEVBQUU7SUFDbkIsVUFBVSxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsR0FBRyxTQUFTLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzFFLFVBQVUsU0FBUyxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDbkQsU0FBUyxNQUFNO0lBQ2YsVUFBVSxTQUFTLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRSxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQztJQUNsRixTQUFTO0lBQ1QsT0FBTyxDQUFDLENBQUM7SUFDVCxJQUFJLFVBQVUsQ0FBQyxhQUFhLENBQUMsRUFBRSxJQUFJLEVBQUVPLDZCQUF1QyxFQUFFLENBQUMsQ0FBQztJQUNoRixHQUFHO0lBQ0gsRUFBRSxJQUFJLEdBQUc7SUFDVCxJQUFJYSxVQUFrQixFQUFFLENBQUM7SUFDekIsSUFBSSxVQUFVLENBQUMsV0FBVyxDQUFDLHNCQUFzQixFQUFFLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0lBQzlFLEdBQUc7SUFDSDs7QUNsQ0csUUFBQyxXQUF3QixHQUFHLE1BQU0sWUFBWSxTQUFJLENBQUEsTUFBQTtJQUNyRCxFQUdJLE9BQU8sUUFBUSxDQUVDO0lBR3BCLENBQUMsR0FBRyxDQUFDO0lBQ0wsRUFBRSxXQUFXLENBQUMsR0FBRyxJQUFHLEVBQUE7SUFDcEIsSUFBSSxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztJQUNuQixJQUFJLElBQUksQ0FBQyxnQkFBQSxHQUFBLEtBQUEsQ0FBQTtJQUNULElBQUksSUFBSSxDQUFDO0lBQ1QsSUFBSSxXQUFXLENBQUMsSUFBQyxDQUFBLGdCQUEyQixDQUFDLENBQUM7SUFDOUMsSUFBSSxJQUFJLENBQUMsUUFBUSxHQUFBLElBQUFDLFNBQXlCLEVBQUUsQ0FBQztJQUM3QyxJQUFJLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFFBQUUsQ0FBQSxZQUFBLENBQUE7SUFDL0IsSUFBSSxJQUFHLENBQUEsUUFBQSxDQUFBLHFCQUFBLEdBQUEsSUFBQSxDQUFBO0lBQ1AsR0FBRztJQUNILEVBQUUsS0FBSyxHQUFHO0lBQ1YsSUFBSSxJQUFJO0lBQ1IsTUFBTSxJQUFJLEtBQUssRUFBRSxDQUdWO0lBQ1AsTUFBTSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDbkMsS0FBSyxDQUFDLE9BQU8sR0FBRyxFQUFFO0lBQ2xCLE1BQU0sT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN6QixNQUFNLE1BQU0sR0FBRyxDQUFBO0lBQ2YsS0FBSztJQUNMLEdBQUM7SUFDRCxFQUFFLElBQUksR0FBRztJQUNULElBQUksSUFBSTtJQUNSLE1BQUMsTUFBQSxHQUFBLEdBQUEsSUFBQSxDQUFBLFFBQUEsQ0FBQSxJQUFBLEVBQUEsQ0FBQTtJQUNELE1BQU0sVUFBUSxFQUFBLENBQUE7SUFDZCxNQUFNLElBQUksSUFBSSxDQUFBLGdCQUFBO0lBQ2QsUUFBUSxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztJQUNuQyxNQUFNLE9BQU8sR0FBRyxDQUFDO0lBQ2pCLEtBQUssQ0FBQyxPQUFPLEdBQUcsRUFBRTtJQUNsQixNQUFNLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRSxDQUFBLENBQUE7SUFDdEIsTUFBTSxNQUFNLEdBQUcsQ0FBQztJQUNoQixLQUFLO0lBQ0wsR0FBRztJQUNILEVBQUUsZ0JBQWdCLENBQUMsU0FBUyxFQUFFO0lBQzlCLElBQUksSUFBSSxDQUFDLGdCQUFTLEdBQUEsSUFBQSxDQUFBO0lBQ2xCLElBQUksSUFBSSxDQUFDLGdCQUFrQyxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3hFLEdBQUc7SUFDSCxFQUFFLG1CQUFtQixHQUFHO0lBQ3hCLElBQUksSUFBSSxJQUFJLENBQUMsZ0JBQUMsRUFBQTtJQUNkLE1BQU0sSUFBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQztJQUNwQyxNQUFNLElBQUksQ0FBQyxnQkFBYSxDQUFBLG1CQUFBLEVBQUEsQ0FBQTtJQUN4QixLQUFLO0lBQ0wsR0FBRztJQUNIOzs7Ozs7Ozs7Ozs7In0=