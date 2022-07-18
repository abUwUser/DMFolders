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
      return globalThis.goosemod.webpackModules;
    })();
    function find(filter) {
      return clientWebpack.find(filter);
    }
    function findAll(filter) {
      return clientWebpack.findAll(filter);
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
    class GMPlugin {
      constructor() {
        __publicField$1(this, "__ittaiInternals", {
          getAllSettings: () => {
            return this.__ittaiGMSettings;
          },
          getSetting: (key, defaultValue) => {
            return this.__ittaiGMSettings[key] !== void 0 ? this.__ittaiGMSettings[key] : defaultValue;
          },
          setSettings: (newSettings) => {
            if (typeof newSettings !== "object")
              return;
            Object.assign(this.__ittaiGMSettings, newSettings);
          },
          setSetting: (key, value) => {
            this.__ittaiGMSettings[key] = value;
          },
          removeSetting: (key, value) => {
            delete this.__ittaiGMSettings[key];
          },
          resetSettings: () => {
            this.__ittaiGMSettings = {};
          },
          setSettingsPanel: (component) => {
            if (typeof component === "function")
              component = React$2.createElement(component);
            globalThis.goosemod.settings.createItem(this.friendlyName, [
              "",
              {
                type: "text",
                text: "",
                subtext: component
              }
            ]);
          },
          removeSettingsPanel: () => {
            globalThis.goosemod.settings.removeItem(this.friendlyName);
          }
        });
        __publicField$1(this, "goosemodHandlers", {
          onImport: () => {
            return this.start();
          },
          onRemove: () => {
            return this.stop();
          },
          getSettings: () => [this.__ittaiGMSettings],
          loadSettings: ([_settings]) => {
            this.__ittaiGMSettings = _settings;
          }
        });
        this.__ittaiGMSettings = {};
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
      return "goosemod";
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

    const { name } = manifest$1;
    class WSManager {
      start() {
        this.ws = new WebSocket("ws://localhost:3000");
        this.ws.addEventListener("open", () => {
          this.ws.send(`identify,${"goosemod"}`);
        });
        this.ws.addEventListener("message", (data2) => {
          this.parseMsg(data2.data);
        });
        this.ws.addEventListener("error", (data2) => {
        });
        this.ws.addEventListener("close", (data2) => {
          console.log("close: %s", data2);
        });
      }
      stop() {
        this.ws.close();
      }
      parseMsg(m) {
        const msg = m.split(",");
        switch (msg[0]) {
          case "reload":
            reloadPlugin();
            break;
        }
      }
    }
    let manager;
    const version = "1.0.0";
    function startDevServer() {
      manager = new WSManager();
      manager.start();
    }
    function stopDevServer() {
      manager.stop();
    }
    function reloadPlugin() {
      fetch("http://localhost:3000/plugin.js").then((r) => r.text()).then((data) => {
        let __ITTAI_DEVSERVER_VERSION__ = version;
        let __ITTAI_DEVSERVER_INSTANCE__ = { version, startDevServer, stopDevServer, reloadPlugin, loadPlugin, manager };
        console.debug("reloading using instance", __ITTAI_DEVSERVER_INSTANCE__, "version", __ITTAI_DEVSERVER_VERSION__);
        eval(data);
      });
    }
    async function loadPlugin(p) {
      let mod = "goosemod";
      switch (mod) {
        case "goosemod":
          window.goosemod.modules[name]?.goosemodHandlers?.onRemove?.();
          window.goosemod.modules[name] = p;
          window.goosemod.modules[name]?.goosemodHandlers?.onImport?.();
          break;
        case "powercordv2":
          try {
            window.powercord.pluginManager.unload(name);
          } catch (e) {
            !e.toString().startsWith("Error: Tried to unload a non installed plugin (undefined)") && console.log(e);
          }
          const manifest = Object.assign({
            appMode: "app",
            dependencies: [],
            optionalDependencies: []
          }, manifest$1);
          p.prototype.entityID = name;
          p.prototype.manifest = manifest;
          window.powercord.pluginManager.plugins.set(name, new p());
          window.powercord.pluginManager.load(name);
      }
    }

    let hasDevServer = false;
    async function loadDevServer() {
      {
        hasDevServer = true;
        try {
          __ITTAI_DEVSERVER_VERSION__;
        } catch (_) {
          console.log("no server");
          hasDevServer = false;
        }
        const version$1 = version;
        if (hasDevServer && __ITTAI_DEVSERVER_VERSION__ !== version$1) {
          console.log("Upgrading dev server client");
          __ITTAI_DEVSERVER_INSTANCE__.stopDevServer();
          hasDevServer = false;
        }
        if (hasDevServer) {
          console.log("Using existing dev server client");
        }
        if (!hasDevServer) {
          console.log("Loading dev server client");
          startDevServer();
        }
      }
    }
    function loadDevPlugin(p) {
      {
        if (hasDevServer) {
          console.log("Loading using existing dev server client");
          __ITTAI_DEVSERVER_INSTANCE__.loadPlugin(p);
        } else {
          console.log("Loading plugin using new dev server client");
          loadPlugin(p);
        }
      }
    }

    loadDevServer();
    let IttaiPlugin = class IttaiPlugin2 extends (() => {
      return GMPlugin;
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
    {
      const instance = new IttaiPlugin();
      const handlers = { goosemodHandlers: instance.goosemodHandlers };
      {
        loadDevPlugin(handlers);
      }
      IttaiPlugin = handlers;
    }
    var IttaiPlugin$1 = IttaiPlugin;

    return IttaiPlugin$1;

    })();
    if (typeof module !== "undefined") module.exports = ittaiPluginExport;
    return ittaiPluginExport;

})();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50cnlwb2ludC5qcyIsInNvdXJjZXMiOlsiZmlsZTovLy9ETUZvbGRlcnMvLi4vLi4vaXR0YWkvY29yZS93ZWJwYWNrL2NvcmUuanMiLCJmaWxlOi8vL0RNRm9sZGVycy8uLi8uLi9pdHRhaS9jb3JlL3dlYnBhY2svY29tbW9uL2luZGV4LmpzIiwiZmlsZTovLy9ETUZvbGRlcnMvLi4vLi4vaXR0YWkvY29yZS9wYWNrYWdlcy9pbml0LmpzIiwiZmlsZTovLy9ETUZvbGRlcnMvLi4vLi4vaXR0YWkvY29yZS9lbnRpdGllcy9HTVBsdWdpbi5qcyIsImZpbGU6Ly8vRE1Gb2xkZXJzLy4uLy4uL2l0dGFpL2NvcmUvc2V0dGluZ3MvaW5kZXguanMiLCJmaWxlOi8vL0RNRm9sZGVycy8uLi8uLi9pdHRhaS9jb3JlL2NvbXBvbmVudHMvRGlzY29yZEljb24uanN4IiwiZmlsZTovLy9ETUZvbGRlcnMvLi4vLi4vaXR0YWkvY29yZS9jb21wb25lbnRzL0Rpc2NvcmRQcm92aWRlcnMuanN4IiwiZmlsZTovLy9ETUZvbGRlcnMvLi4vLi4vaXR0YWkvY29yZS9jb21wb25lbnRzL0ZsdXhXcmFwcGVyLmpzeCIsImZpbGU6Ly8vRE1Gb2xkZXJzLy4uLy4uL2l0dGFpL2NvcmUvY2xhc3Nlcy9pbmRleC5qcyIsImZpbGU6Ly8vRE1Gb2xkZXJzLy4uLy4uL2l0dGFpL2NvcmUvY29tcG9uZW50cy9DYXRlZ29yeS5qc3giLCJmaWxlOi8vL0RNRm9sZGVycy8uLi8uLi9pdHRhaS9jb3JlL2NvbXBvbmVudHMvaW5kZXguanN4IiwiZmlsZTovLy9ETUZvbGRlcnMvLi4vLi4vaXR0YWkvY29yZS91dGlsaXRpZXMvZ2V0Q2xpZW50TW9kLmpzIiwiZmlsZTovLy9ETUZvbGRlcnMvLi4vLi4vaXR0YWkvY29yZS91dGlsaXRpZXMvbmFub3NlY29uZHMuanMiLCJmaWxlOi8vL0RNRm9sZGVycy8uLi8uLi9pdHRhaS9jb3JlL3V0aWxpdGllcy93YWl0LmpzIiwiZmlsZTovLy9ETUZvbGRlcnMvLi4vLi4vaXR0YWkvY29yZS9sb2dnZXIvY3JlYXRlQXJndW1lbnRzLmpzIiwiZmlsZTovLy9ETUZvbGRlcnMvLi4vLi4vaXR0YWkvY29yZS9sb2dnZXIvbG9nLmpzIiwiZmlsZTovLy9ETUZvbGRlcnMvLi4vLi4vaXR0YWkvY29yZS9sb2dnZXIvZGVidWcuanMiLCJmaWxlOi8vL0RNRm9sZGVycy8uLi8uLi9pdHRhaS9jb3JlL2xvZ2dlci93YXJuLmpzIiwiZmlsZTovLy9ETUZvbGRlcnMvLi4vLi4vaXR0YWkvY29yZS9sb2dnZXIvZXJyb3IuanMiLCJmaWxlOi8vL0RNRm9sZGVycy8uLi8uLi9pdHRhaS9jb3JlL2xvZ2dlci9ncm91cC5qcyIsImZpbGU6Ly8vRE1Gb2xkZXJzLy4uLy4uL2l0dGFpL2NvcmUvbG9nZ2VyL2dyb3VwRW5kLmpzIiwiZmlsZTovLy9ETUZvbGRlcnMvLi4vLi4vaXR0YWkvY29yZS9sb2dnZXIvY291bnQuanMiLCJmaWxlOi8vL0RNRm9sZGVycy8uLi8uLi9pdHRhaS9jb3JlL2xvZ2dlci9jb3VudFJlc2V0LmpzIiwiZmlsZTovLy9ETUZvbGRlcnMvLi4vLi4vaXR0YWkvY29yZS9sb2dnZXIvaW5kZXguanMiLCJmaWxlOi8vL0RNRm9sZGVycy8uLi8uLi9pdHRhaS9jb3JlL3V0aWxpdGllcy9maW5kSW5UcmVlLmpzIiwiZmlsZTovLy9ETUZvbGRlcnMvLi4vLi4vaXR0YWkvY29yZS91dGlsaXRpZXMvZmluZEluUmVhY3RUcmVlLmpzIiwiZmlsZTovLy9ETUZvbGRlcnMvLi4vLi4vaXR0YWkvY29yZS91dGlsaXRpZXMvZ2V0UmVhY3RJbnN0YW5jZS5qcyIsImZpbGU6Ly8vRE1Gb2xkZXJzLy4uLy4uL2l0dGFpL2NvcmUvdXRpbGl0aWVzL2dldE93bmVySW5zdGFuY2UuanMiLCJmaWxlOi8vL0RNRm9sZGVycy8uLi8uLi9pdHRhaS9jb3JlL3V0aWxpdGllcy90ZXN0Q29tcG9uZW50LmpzIiwiZmlsZTovLy9ETUZvbGRlcnMvLi4vLi4vaXR0YWkvY29yZS91dGlsaXRpZXMvYmVuY2htYXJrLmpzIiwiZmlsZTovLy9ETUZvbGRlcnMvLi4vLi4vaXR0YWkvY29yZS91dGlsaXRpZXMvbXVsdGlCZW5jaG1hcmsuanMiLCJmaWxlOi8vL0RNRm9sZGVycy8uLi8uLi9pdHRhaS9jb3JlL3V0aWxpdGllcy9hdmVyYWdlLmpzIiwiZmlsZTovLy9ETUZvbGRlcnMvLi4vLi4vaXR0YWkvY29yZS91dGlsaXRpZXMvbWVkaWFuLmpzIiwiZmlsZTovLy9ETUZvbGRlcnMvLi4vLi4vaXR0YWkvY29yZS91dGlsaXRpZXMvcmFuZG9tTnVtYmVyLmpzIiwiZmlsZTovLy9ETUZvbGRlcnMvLi4vLi4vaXR0YWkvY29yZS91dGlsaXRpZXMvcmFuZG9tU3RyaW5nLmpzIiwiZmlsZTovLy9ETUZvbGRlcnMvLi4vLi4vaXR0YWkvY29yZS91dGlsaXRpZXMvam9pbkNsYXNzZXMuanMiLCJmaWxlOi8vL0RNRm9sZGVycy8uLi8uLi9pdHRhaS9jb3JlL3V0aWxpdGllcy9zZWFyY2hDbGFzc05hbWVNb2R1bGVzLmpzIiwiZmlsZTovLy9ETUZvbGRlcnMvLi4vLi4vaXR0YWkvY29yZS91dGlsaXRpZXMvbWVzc2FnZUJveC5qc3giLCJmaWxlOi8vL0RNRm9sZGVycy8uLi8uLi9pdHRhaS9jb3JlL3V0aWxpdGllcy9tZXNzYWdlcy9nZXRNZXNzYWdlcy5qcyIsImZpbGU6Ly8vRE1Gb2xkZXJzLy4uLy4uL2l0dGFpL2NvcmUvdXRpbGl0aWVzL21lc3NhZ2VzL2dldE1lc3NhZ2UuanMiLCJmaWxlOi8vL0RNRm9sZGVycy8uLi8uLi9pdHRhaS9jb3JlL3V0aWxpdGllcy9tZXNzYWdlcy9mZXRjaE1lc3NhZ2UuanMiLCJmaWxlOi8vL0RNRm9sZGVycy8uLi8uLi9pdHRhaS9jb3JlL3V0aWxpdGllcy9tZXNzYWdlcy9yZXJlbmRlckFsbE1lc3NhZ2VzLmpzIiwiZmlsZTovLy9ETUZvbGRlcnMvLi4vLi4vaXR0YWkvY29yZS91dGlsaXRpZXMvbWVzc2FnZXMvcmVyZW5kZXJNZXNzYWdlLmpzIiwiZmlsZTovLy9ETUZvbGRlcnMvLi4vLi4vaXR0YWkvY29yZS91dGlsaXRpZXMvbWVzc2FnZXMvdXBkYXRlTWVzc2FnZS5qcyIsImZpbGU6Ly8vRE1Gb2xkZXJzLy4uLy4uL2l0dGFpL2NvcmUvdXRpbGl0aWVzL21lc3NhZ2VzL2luZGV4LmpzIiwiZmlsZTovLy9ETUZvbGRlcnMvLi4vLi4vaXR0YWkvY29yZS9jaGFuZ2Vsb2cvaW5kZXguanN4IiwiZmlsZTovLy9ETUZvbGRlcnMvLi4vLi4vaXR0YWkvY29yZS9lbnRpdGllcy9QbHVnaW4uanMiLCJmaWxlOi8vL0RNRm9sZGVycy8uLi8uLi9pdHRhaS9jb3JlL3BhdGNoZXIvYmVmb3JlLmpzIiwiZmlsZTovLy9ETUZvbGRlcnMvLi4vLi4vaXR0YWkvY29yZS9wYXRjaGVyL2luc3RlYWQuanMiLCJmaWxlOi8vL0RNRm9sZGVycy8uLi8uLi9pdHRhaS9jb3JlL3BhdGNoZXIvYWZ0ZXIuanMiLCJmaWxlOi8vL0RNRm9sZGVycy8uLi8uLi9pdHRhaS9jb3JlL3BhdGNoZXIvdW5wYXRjaEFsbC5qcyIsImZpbGU6Ly8vRE1Gb2xkZXJzLy4uLy4uL2l0dGFpL2NvcmUvcGF0Y2hlci9wYXRjaC5qcyIsImZpbGU6Ly8vRE1Gb2xkZXJzLy4uLy4uL2l0dGFpL2NvcmUvcGF0Y2hlci9pbmRleC5qcyIsImZpbGU6Ly8vRE1Gb2xkZXJzLy4uLy4uL2l0dGFpL2NvcmUvY29tbWFuZHMvYm90TWVzc2FnZS5qcyIsImZpbGU6Ly8vRE1Gb2xkZXJzLy4uLy4uL2l0dGFpL2NvcmUvY29tbWFuZHMvaW5kZXguanMiLCJmaWxlOi8vL0RNRm9sZGVycy8uLi8uLi9pdHRhaS9jb3JlL3N0b3Jlcy9pbmRleC5qcyIsImZpbGU6Ly8vRE1Gb2xkZXJzLy4uLy4uL2l0dGFpL2J1aWxkZXIvbm9kZV9tb2R1bGVzLy5wbnBtL3JvbGx1cC1wbHVnaW4tc3R5bGVzQDQuMC4wX3JvbGx1cEAyLjc3LjAvbm9kZV9tb2R1bGVzL3JvbGx1cC1wbHVnaW4tc3R5bGVzL2Rpc3QvcnVudGltZS9pbmplY3QtY3NzLmpzIiwiZmlsZTovLy9ETUZvbGRlcnMvLi4vLi4vaXR0YWkvY29yZS90b2FzdC9Ub2FzdFdyYXBwZXIudHN4IiwiZmlsZTovLy9ETUZvbGRlcnMvLi4vLi4vaXR0YWkvY29yZS90b2FzdC9pbmRleC5qc3giLCJmaWxlOi8vL0RNRm9sZGVycy9oYW5kbGVycy9waW5uZWRETVMudHMiLCJmaWxlOi8vL0RNRm9sZGVycy91dGlscy9tb3ZlLnRzIiwiZmlsZTovLy9ETUZvbGRlcnMvdXRpbHMvY2xhc3Nlcy50cyIsImZpbGU6Ly8vRE1Gb2xkZXJzL3V0aWxzL2pvaW5DbGFzc2VzLnRzIiwiZmlsZTovLy9ETUZvbGRlcnMvY29tcG9uZW50cy9Vc2VyTGlzdFNldHRpbmdzL1VzZXIudHN4IiwiZmlsZTovLy9ETUZvbGRlcnMvY29uc3RhbnRzL3NldHRpbmdzLnRzIiwiZmlsZTovLy9ETUZvbGRlcnMvY29uc3RhbnRzL2luZGV4LnRzIiwiZmlsZTovLy9ETUZvbGRlcnMvdXRpbHMvRXJyb3JCb3VuZGFyeS50c3giLCJmaWxlOi8vL0RNRm9sZGVycy9jb21wb25lbnRzL1VzZXJMaXN0U2V0dGluZ3MvTW9kYWxzL0NhdGVnb3J5U2V0dGluZ3NNb2RhbC50c3giLCJmaWxlOi8vL0RNRm9sZGVycy91dGlscy9saW1pdC50cyIsImZpbGU6Ly8vRE1Gb2xkZXJzL2NvbXBvbmVudHMvVXNlckxpc3RTZXR0aW5ncy9Nb2RhbHMvQWRkVXNlck1vZGFsLnRzeCIsImZpbGU6Ly8vRE1Gb2xkZXJzL2NvbXBvbmVudHMvVXNlckxpc3RTZXR0aW5ncy9pbmRleC50c3giLCJmaWxlOi8vL0RNRm9sZGVycy91dGlscy9pc1ZhbGlkSlNPTi50cyIsImZpbGU6Ly8vRE1Gb2xkZXJzL2NvbXBvbmVudHMvU2V0dGluZ3MudHN4IiwiZmlsZTovLy9ETUZvbGRlcnMvdXRpbHMvb3BlbkNhdGVnb3J5U2V0dGluZ3MudHN4IiwiZmlsZTovLy9ETUZvbGRlcnMvY29tcG9uZW50cy9Db250ZXh0TWVudXMvQ2F0ZWdvcnkudHN4IiwiZmlsZTovLy9ETUZvbGRlcnMvcGF0Y2hlcy9kbWxpc3QudHN4IiwiZmlsZTovLy9ETUZvbGRlcnMvY29tcG9uZW50cy9Db250ZXh0TWVudXMvQWRkVXNlci50c3giLCJmaWxlOi8vL0RNRm9sZGVycy9wYXRjaGVzL2RtYnV0dG9uLnRzeCIsImZpbGU6Ly8vRE1Gb2xkZXJzL3BhdGNoZXMvZnJpZW5kc2xpc3QudHN4IiwiZmlsZTovLy9ETUZvbGRlcnMvaGFuZGxlcnMvaW1wb3J0RnJvbVBsdWdpbi50cyIsImZpbGU6Ly8vRE1Gb2xkZXJzL2NvbXBvbmVudHMvU2V0dGluZ3NTd2l0Y2hlci9pbmRleC50c3giLCJmaWxlOi8vL0RNRm9sZGVycy9pbmRleC50c3giLCJmaWxlOi8vL0RNRm9sZGVycy8uLi8uLi9pdHRhaS9jb3JlL2RldmNsaWVudC9jbGllbnQuanMiLCJmaWxlOi8vL0RNRm9sZGVycy8uLi8uLi9pdHRhaS9jb3JlL2RldmNsaWVudC9pbmRleC5qcyIsImZpbGU6Ly8vRE1Gb2xkZXJzLy4uLy4uL2l0dGFpL2NvcmUvbG9hZGVyL2VudHJ5cG9pbnQudHMiXSwic291cmNlc0NvbnRlbnQiOlsibGV0IGNsaWVudFdlYnBhY2sgPSAoKCk9PntcclxuICAgIGlmIChwcm9jZXNzLmVudi5DTElFTlRfTU9EID09IFwiZ29vc2Vtb2RcIikgcmV0dXJuIGdsb2JhbFRoaXMuZ29vc2Vtb2Qud2VicGFja01vZHVsZXM7XHJcbiAgICBlbHNlIGlmIChwcm9jZXNzLmVudi5DTElFTlRfTU9EID09IFwicG93ZXJjb3JkdjJcIikgcmV0dXJuIHJlcXVpcmUoXCJwb3dlcmNvcmQvd2VicGFja1wiKTtcclxuICAgIGVsc2UgaWYgKHByb2Nlc3MuZW52LkNMSUVOVF9NT0QgPT0gXCJiZXR0ZXJkaXNjb3JkXCIpIHJldHVybiBnbG9iYWxUaGlzLkJkQXBpO1xyXG59KSgpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZpbmQoZmlsdGVyKSB7XHJcbiAgICBpZiAocHJvY2Vzcy5lbnYuQ0xJRU5UX01PRCA9PSBcImdvb3NlbW9kXCIpIHJldHVybiBjbGllbnRXZWJwYWNrLmZpbmQoZmlsdGVyKTtcclxuICAgIGVsc2UgaWYgKHByb2Nlc3MuZW52LkNMSUVOVF9NT0QgPT0gXCJwb3dlcmNvcmR2MlwiKSB7XHJcbiAgICAgICAgbGV0IGlzRGVmYXVsdCA9IGZhbHNlO1xyXG4gICAgICAgIGNvbnN0IG1vZCA9IGNsaWVudFdlYnBhY2suZ2V0TW9kdWxlKHggPT4geD8uZGVmYXVsdCAmJiBmaWx0ZXIoeC5kZWZhdWx0KSAmJiAoaXNEZWZhdWx0ID0gdHJ1ZSksIGZhbHNlKSB8fCBjbGllbnRXZWJwYWNrLmdldE1vZHVsZShmaWx0ZXIsIGZhbHNlKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGlzRGVmYXVsdCA/IG1vZC5kZWZhdWx0IDogbW9kO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAocHJvY2Vzcy5lbnYuQ0xJRU5UX01PRCA9PSBcImJldHRlcmRpc2NvcmRcIikgcmV0dXJuIGNsaWVudFdlYnBhY2suZmluZE1vZHVsZShmaWx0ZXIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZmluZEFsbChmaWx0ZXIpIHtcclxuICAgIGlmIChwcm9jZXNzLmVudi5DTElFTlRfTU9EID09IFwiZ29vc2Vtb2RcIikgcmV0dXJuIGNsaWVudFdlYnBhY2suZmluZEFsbChmaWx0ZXIpO1xyXG4gICAgZWxzZSBpZiAocHJvY2Vzcy5lbnYuQ0xJRU5UX01PRCA9PSBcInBvd2VyY29yZHYyXCIpIHJldHVybiBjbGllbnRXZWJwYWNrLmdldEFsbE1vZHVsZXMoeCA9PiB4Py5kZWZhdWx0ICYmIGZpbHRlcih4LmRlZmF1bHQpLCBmYWxzZSkgfHwgY2xpZW50V2VicGFjay5nZXRNb2R1bGUoZmlsdGVyLCBmYWxzZSk7XHJcbiAgICBlbHNlIGlmIChwcm9jZXNzLmVudi5DTElFTlRfTU9EID09IFwiYmV0dGVyZGlzY29yZFwiKSByZXR1cm4gY2xpZW50V2VicGFjay5maW5kQWxsTW9kdWxlcyhmaWx0ZXIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZmluZEJ5UHJvcHMoLi4ucHJvcHMpIHtcclxuICAgIHJldHVybiBmaW5kKG0gPT4gcHJvcHMuZXZlcnkocCA9PiBtPy5bcF0gIT09IHVuZGVmaW5lZCkpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZmluZEFsbEJ5UHJvcHMoLi4ucHJvcHMpIHtcclxuICAgIHJldHVybiBmaW5kQWxsKG0gPT4gcHJvcHMuZXZlcnkocCA9PiBtPy5bcF0gIT09IHVuZGVmaW5lZCkpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZmluZEJ5UHJvdG90eXBlKC4uLnByb3BzKSB7XHJcbiAgICByZXR1cm4gZmluZChtID0+IHByb3BzLmV2ZXJ5KHAgPT4gbT8ucHJvdG90eXBlPy5bcF0gIT09IHVuZGVmaW5lZCkpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZmluZEFsbEJ5UHJvdG90eXBlKC4uLnByb3BzKSB7XHJcbiAgICByZXR1cm4gZmluZEFsbChtID0+IHByb3BzLmV2ZXJ5KHAgPT4gbT8ucHJvdG90eXBlPy5bcF0gIT09IHVuZGVmaW5lZCkpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZmluZEJ5RGlzcGxheU5hbWUobmFtZSwgcmV0dXJuRGVmYXVsdD10cnVlKSB7XHJcbiAgICBsZXQgcmV0ID0gZmluZChtID0+IG0/LmRlZmF1bHQ/LmRpc3BsYXlOYW1lID09PSBuYW1lKTtcclxuICAgIGlmIChyZXR1cm5EZWZhdWx0KSByZXR1cm4gcmV0LmRlZmF1bHQ7XHJcbiAgICByZXR1cm4gcmV0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZmluZEFsbEJ5RGlzcGxheU5hbWUobmFtZSkge1xyXG4gICAgcmV0dXJuIGZpbmQobSA9PiBtPy5kaXNwbGF5TmFtZSA9PT0gbmFtZSk7XHJcbn1cclxuIiwiLyoqXHJcbiAqIHtAbGluayBodHRwczovL2Rpc2NvcmQuY29tL2Fja25vd2xlZGdlbWVudHMvfEZ1bGwgbGlzdCBvZiBsaWJyYXJpZXMgdGhhdCBEaXNjb3JkIHVzZXMufVxyXG4gKiBAbW9kdWxlIHdlYnBhY2svY29tbW9uXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgZmluZCwgZmluZEJ5UHJvcHMgfSBmcm9tIFwiLi5cIjtcclxuXHJcbmV4cG9ydCAvKipcclxuICogRGlzY29yZCdzIHtAbGluayBodHRwczovL3JlYWN0anMub3JnL3xSZWFjdH0gaW5zdGFuY2UuXHJcbiAqIEBtZW1iZXJvZiBtb2R1bGU6d2VicGFjay9jb21tb25cclxuICovIGNvbnN0IFJlYWN0ID0gLyojX19QVVJFX18qLyBmaW5kQnlQcm9wcyhcInVzZVN0YXRlXCIpO1xyXG5cclxuZXhwb3J0IC8qKlxyXG4gKiBEaXNjb3JkJ3Mge0BsaW5rIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1kb20uaHRtbHxSZWFjdERPTX0gaW5zdGFuY2UuXHJcbiAqIEBtZW1iZXJvZiBtb2R1bGU6d2VicGFjay9jb21tb25cclxuICovIGNvbnN0IFJlYWN0RE9NID0gLyojX19QVVJFX18qLyBmaW5kQnlQcm9wcyhcInJlbmRlclwiLCBcInVubW91bnRDb21wb25lbnRBdE5vZGVcIik7XHJcblxyXG5leHBvcnQgLyoqXHJcbiAqIERpc2NvcmQncyB7QGxpbmsgaHR0cHM6Ly9yZWFjdC1zcHJpbmcuaW8vfFJlYWN0IFNwcmluZ30gaW5zdGFuY2UuXHJcbiAqIEBtZW1iZXJvZiBtb2R1bGU6d2VicGFjay9jb21tb25cclxuICovIGNvbnN0IFJlYWN0U3ByaW5nID0gLyojX19QVVJFX18qLyBmaW5kQnlQcm9wcyhcInVzZVNwcmluZ1wiLCBcInVzZVRyYW5zaXRpb25cIik7XHJcblxyXG5leHBvcnQgLyoqXHJcbiAqIERpc2NvcmQncyB7QGxpbmsgaHR0cHM6Ly9sb2Rhc2guY29tL3xMb2Rhc2h9IGluc3RhbmNlLlxyXG4gKiBAbWVtYmVyb2YgbW9kdWxlOndlYnBhY2svY29tbW9uXHJcbiAqLyBjb25zdCBMb2Rhc2ggPSBnbG9iYWxUaGlzLl87XHJcblxyXG5leHBvcnQgLyoqIFxyXG4gKiBBbGlhcyBvZiBMb2Rhc2hcclxuICovIGNvbnN0IF8gPSBnbG9iYWxUaGlzLl87XHJcblxyXG5leHBvcnQgLyoqXHJcbiAqIERpc2NvcmQncyBBdmF0YXIgbWFuYWdlci4gXHJcbiAqIEBtZW1iZXJvZiBtb2R1bGU6d2VicGFjay9jb21tb25cclxuICovIGNvbnN0IEF2YXRhck1hbmFnZXIgPSAvKiNfX1BVUkVfXyovIGZpbmRCeVByb3BzKFwiZ2V0VXNlckF2YXRhclVSTFwiLCBcImhhc0FuaW1hdGVkR3VpbGRJY29uXCIpO1xyXG5cclxuZXhwb3J0IC8qKlxyXG4gKiBEaXNjb3JkJ3MgbW9kYWwgYWN0aW9ucy4gXHJcbiAqIEBtZW1iZXJvZiBtb2R1bGU6d2VicGFjay9jb21tb25cclxuICovIGNvbnN0IE1vZGFsQWN0aW9ucyA9IC8qI19fUFVSRV9fKi8gZmluZEJ5UHJvcHMoXHJcblx0XCJvcGVuTW9kYWxcIixcclxuXHRcInVwZGF0ZU1vZGFsXCJcclxuKTtcclxuXHJcbmV4cG9ydCAvKipcclxuICogRGlzY29yZCdzIG1vZGFsIHN0YWNrLiBQbGVhc2UgdXNlIE1vZGFsQWN0aW9ucyBpbnN0ZWFkLCB0aGlzIG9uZSBpcyBkZXByZWNhdGVkXHJcbiAqIEBtZW1iZXJvZiBtb2R1bGU6d2VicGFjay9jb21tb25cclxuICogQGRlcHJlY2F0ZWRcclxuICovIGNvbnN0IE1vZGFsU3RhY2sgPSAvKiNfX1BVUkVfXyovIGZpbmRCeVByb3BzKFxyXG5cdFwicHVzaFwiLFxyXG5cdFwidXBkYXRlXCIsXHJcblx0XCJwb3BcIixcclxuXHRcInBvcFdpdGhLZXlcIlxyXG4pO1xyXG5cclxuZXhwb3J0IC8qKlxyXG4gKiBEaXNjb3JkJ3MgZGlzcGF0Y2hlclxyXG4gKiBAbWVtYmVyb2YgbW9kdWxlOndlYnBhY2svY29tbW9uXHJcbiAqLyBjb25zdCBEaXNwYXRjaGVyID0gLyojX19QVVJFX18qLyBmaW5kQnlQcm9wcyhcImRpcnR5RGlzcGF0Y2hcIik7XHJcblxyXG5leHBvcnQgLyoqXHJcbiAqIEZsdXjihKJcclxuICogQG1lbWJlcm9mIG1vZHVsZTp3ZWJwYWNrL2NvbW1vblxyXG4gKi8gY29uc3QgRmx1eCA9IC8qI19fUFVSRV9fKi8gZmluZEJ5UHJvcHMoXCJTdG9yZVwiLCBcImNvbm5lY3RTdG9yZXNcIik7XHJcblxyXG4gZXhwb3J0IC8qKlxyXG4gKiBEaXNjb3JkJ3MgRmx1eCBEaXNwYXRjaGVyLiBXaXNoIGkga25ldyB3dGYgdGhpcyBpc1xyXG4gKiBAbWVtYmVyb2YgbW9kdWxlOndlYnBhY2svY29tbW9uXHJcbiAqL2NvbnN0IEZsdXhEaXNwYXRjaGVyID0gLyojX19QVVJFX18qLyBmaW5kQnlQcm9wcyhcclxuXHRcIl9jdXJyZW50RGlzcGF0Y2hBY3Rpb25UeXBlXCIsXHJcblx0XCJfcHJvY2Vzc2luZ1dhaXRRdWV1ZVwiXHJcbik7XHJcblxyXG5leHBvcnQgLyoqXHJcbiAqIERpc2NvcmQncyBjb2xvciB1dGxzXHJcbiAqIEBtZW1iZXJvZiBtb2R1bGU6d2VicGFjay9jb21tb25cclxuICovIGNvbnN0IENvbG9yVXRpbHMgPSAvKiNfX1BVUkVfXyovIGZpbmRCeVByb3BzKFwiaXNWYWxpZEhleFwiKTtcclxuXHJcbmV4cG9ydCAvKipcclxuICogRGlzY29yZCdzIGNvbnN0YW50c1xyXG4gKiBAbWVtYmVyb2YgbW9kdWxlOndlYnBhY2svY29tbW9uXHJcbiAqLyBjb25zdCBDb25zdGFudHMgPSAvKiNfX1BVUkVfXyovIGZpbmRCeVByb3BzKFwiQVBJX0hPU1RcIik7XHJcblxyXG5leHBvcnQgLyoqXHJcbiAqIERpc2NvcmQncyBjb250ZXh0IG1lbnUgaGFuZGxlclxyXG4gKiBAbWVtYmVyb2YgbW9kdWxlOndlYnBhY2svY29tbW9uXHJcbiAqLyBjb25zdCBDb250ZXh0TWVudSA9IC8qI19fUFVSRV9fKi8gZmluZEJ5UHJvcHMoXCJvcGVuQ29udGV4dE1lbnVcIik7XHJcblxyXG5leHBvcnQgLyoqXHJcbiAqIERpc2NvcmQncyBwbGF0Zm9ybSBjaGVja2VyXHJcbiAqIEBtZW1iZXJvZiBtb2R1bGU6d2VicGFjay9jb21tb25cclxuICovIGNvbnN0IFBsYXRmb3JtID0gLyojX19QVVJFX18qLyBmaW5kKChtKSA9PiBtLlBsYXRmb3JtVHlwZXM/LldJTkRPV1MpOyIsImltcG9ydCB7IFJlYWN0LCBSZWFjdERPTSwgUmVhY3RTcHJpbmcsIExvZGFzaCB9IGZyb20gXCIuLi93ZWJwYWNrL2NvbW1vblwiO1xyXG5JdHRhaUludGVybmFscy5SZWFjdCA9IFJlYWN0O1xyXG5JdHRhaUludGVybmFscy5SZWFjdERPTSA9IFJlYWN0RE9NO1xyXG5JdHRhaUludGVybmFscy5SZWFjdFNwcmluZyA9IFJlYWN0U3ByaW5nO1xyXG5JdHRhaUludGVybmFscy5Mb2Rhc2ggPSBMb2Rhc2g7XHJcbiIsImltcG9ydCB7IFJlYWN0IH0gZnJvbSBcIi4uL3dlYnBhY2tcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdNUGx1Z2luIHtcclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHRoaXMuX19pdHRhaUdNU2V0dGluZ3MgPSB7fTtcclxuXHR9XHJcblxyXG5cdF9faXR0YWlJbnRlcm5hbHMgPSB7XHJcblx0XHRnZXRBbGxTZXR0aW5nczogKCkgPT4ge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5fX2l0dGFpR01TZXR0aW5ncztcclxuXHRcdH0sXHJcblx0XHRnZXRTZXR0aW5nOiAoa2V5LCBkZWZhdWx0VmFsdWUpID0+IHtcclxuXHRcdFx0cmV0dXJuIHRoaXMuX19pdHRhaUdNU2V0dGluZ3Nba2V5XSAhPT0gdW5kZWZpbmVkID8gdGhpcy5fX2l0dGFpR01TZXR0aW5nc1trZXldIDogZGVmYXVsdFZhbHVlO1xyXG5cdFx0fSxcclxuXHRcdHNldFNldHRpbmdzOiAobmV3U2V0dGluZ3MpID0+IHtcclxuXHRcdFx0aWYgKHR5cGVvZiBuZXdTZXR0aW5ncyAhPT0gXCJvYmplY3RcIikgcmV0dXJuO1xyXG5cdFx0XHRPYmplY3QuYXNzaWduKHRoaXMuX19pdHRhaUdNU2V0dGluZ3MsIG5ld1NldHRpbmdzKTtcclxuXHRcdH0sXHJcblx0XHRzZXRTZXR0aW5nOiAoa2V5LCB2YWx1ZSkgPT4ge1xyXG5cdFx0XHR0aGlzLl9faXR0YWlHTVNldHRpbmdzW2tleV0gPSB2YWx1ZTtcclxuXHRcdH0sXHJcblx0XHRyZW1vdmVTZXR0aW5nOiAoa2V5LCB2YWx1ZSkgPT4ge1xyXG5cdFx0XHRkZWxldGUgdGhpcy5fX2l0dGFpR01TZXR0aW5nc1trZXldXHJcblx0XHR9LFxyXG5cdFx0cmVzZXRTZXR0aW5nczogKCkgPT4ge1xyXG5cdFx0XHR0aGlzLl9faXR0YWlHTVNldHRpbmdzID0ge307XHJcblx0XHR9LFxyXG5cdFxyXG5cdFx0c2V0U2V0dGluZ3NQYW5lbDogKGNvbXBvbmVudCkgPT4ge1xyXG5cdFx0XHRpZiAodHlwZW9mIGNvbXBvbmVudCA9PT0gXCJmdW5jdGlvblwiKVxyXG5cdFx0XHRcdGNvbXBvbmVudCA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoY29tcG9uZW50KTtcclxuXHRcdFx0XHRnbG9iYWxUaGlzLmdvb3NlbW9kLnNldHRpbmdzLmNyZWF0ZUl0ZW0odGhpcy5mcmllbmRseU5hbWUsIFsnJyxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0dHlwZTogJ3RleHQnLFxyXG5cdFx0XHRcdFx0XHR0ZXh0OiAnJyxcclxuXHRcdFx0XHRcdFx0c3VidGV4dDogY29tcG9uZW50IC8vIGdvb3NlbW9kIG1vbWVudFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRdKTtcclxuXHRcdH0sXHJcblx0XHRyZW1vdmVTZXR0aW5nc1BhbmVsOiAoKSA9PiB7XHJcblx0XHRcdGdsb2JhbFRoaXMuZ29vc2Vtb2Quc2V0dGluZ3MucmVtb3ZlSXRlbSh0aGlzLmZyaWVuZGx5TmFtZSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRnb29zZW1vZEhhbmRsZXJzID0ge1xyXG5cdFx0b25JbXBvcnQ6ICgpID0+IHtcclxuXHRcdFx0cmV0dXJuIHRoaXMuc3RhcnQoKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0b25SZW1vdmU6ICgpID0+IHtcclxuXHRcdFx0cmV0dXJuIHRoaXMuc3RvcCgpO1xyXG5cdFx0fSxcclxuXHJcbiAgICAgICAgZ2V0U2V0dGluZ3M6ICgpID0+IFt0aGlzLl9faXR0YWlHTVNldHRpbmdzXSxcclxuICAgICAgICBsb2FkU2V0dGluZ3M6IChbX3NldHRpbmdzXSkgPT4geyB0aGlzLl9faXR0YWlHTVNldHRpbmdzID0gX3NldHRpbmdzIH0sXHJcblx0fVxyXG59XHJcbiIsImV4cG9ydCBjb25zdCBnZXQgPSAoa2V5LCBkZWZhdWx0VmFsdWUpID0+IHtcclxuICAgIHJldHVybiBzZXR0aW5nc0luc3RhbmNlLmdldFNldHRpbmcoa2V5LCBkZWZhdWx0VmFsdWUpXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRBbGwgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gc2V0dGluZ3NJbnN0YW5jZS5nZXRBbGxTZXR0aW5ncygpXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBzZXQgPSAoa2V5LCB2YWx1ZSkgPT4ge1xyXG4gICAgcmV0dXJuIHNldHRpbmdzSW5zdGFuY2Uuc2V0U2V0dGluZyhrZXksIHZhbHVlKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0QWxsID0gKHNldHRpbmdzKSA9PiB7XHJcbiAgICByZXR1cm4gc2V0dGluZ3NJbnN0YW5jZS5zZXRTZXR0aW5ncyhzZXR0aW5ncylcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHJlbW92ZSA9IChrZXkpID0+IHtcclxuICAgIHJldHVybiBzZXR0aW5nc0luc3RhbmNlLnJlbW92ZVNldHRpbmcoa2V5LCB1bmRlZmluZWQpXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCByZXNldCA9ICgpID0+IHtcclxuICAgIHJldHVybiBzZXR0aW5nc0luc3RhbmNlLnJlc2V0U2V0dGluZ3MoKVxyXG59XHJcblxyXG4vLyBIQUNLXHJcbmV4cG9ydCBsZXQgc2V0dGluZ3NJbnN0YW5jZTtcclxuZXhwb3J0IGNvbnN0IHNldEluc3RhbmNlID0gKGkpID0+IHtcclxuICAgIHNldHRpbmdzSW5zdGFuY2UgPSBpXHJcbn1cclxuXHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCBjbGFzcyBTZXR0aW5nc0FQSSB7XHJcbi8vICAgICBjb25zdHJ1Y3RvcihwbHVnaW5JbnN0YW5jZTogUGx1Z2luKSB7XHJcbi8vICAgICAgICAgdGhpcy5fX3BsdWdpbkluc3RhbmNlID0gcGx1Z2luSW5zdGFuY2U7XHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgcHJpdmF0ZSBfX3BsdWdpbkluc3RhbmNlOiBQbHVnaW5cclxuXHJcbi8vICAgICBnZXQgKGtleTogc3RyaW5nLCBkZWZhdWx0VmFsdWU6IGFueSkgOiBhbnkge1xyXG4vLyAgICAgICAgIHJldHVybiB0aGlzLl9fcGx1Z2luSW5zdGFuY2UuX19pdHRhaUludGVybmFsUGx1Z2luLl9faXR0YWlJbnRlcm5hbHMuZ2V0U2V0dGluZyhrZXksIGRlZmF1bHRWYWx1ZSk7IC8vIFllcyB0aGlzIGlzIGV4Y2Vzc2l2ZS4gVG9vIGJhZC5cclxuLy8gICAgIH1cclxuXHJcbi8vICAgICBnZXRBbGwgKCkgOiBPYmplY3Qge1xyXG4vLyAgICAgICAgIHJldHVybiB0aGlzLl9fcGx1Z2luSW5zdGFuY2UuX19pdHRhaUludGVybmFsUGx1Z2luLl9faXR0YWlJbnRlcm5hbHMuZ2V0QWxsU2V0dGluZ3MoKTtcclxuLy8gICAgIH1cclxuXHJcbi8vICAgICBzZXQgKGtleTogc3RyaW5nLCB2YWx1ZTogYW55KSA6IHZvaWQge1xyXG4vLyAgICAgICAgIHJldHVybiB0aGlzLl9fcGx1Z2luSW5zdGFuY2UuX19pdHRhaUludGVybmFsUGx1Z2luLl9faXR0YWlJbnRlcm5hbHMuc2V0U2V0dGluZyhrZXksIHZhbHVlKTtcclxuLy8gICAgIH1cclxuXHJcbi8vICAgICBzZXRBbGwgKHNldHRpbmdzOiBPYmplY3QpIDogdm9pZCB7XHJcbi8vICAgICAgICAgcmV0dXJuIHRoaXMuX19wbHVnaW5JbnN0YW5jZS5fX2l0dGFpSW50ZXJuYWxQbHVnaW4uX19pdHRhaUludGVybmFscy5zZXRTZXR0aW5ncyhzZXR0aW5ncyk7XHJcbi8vICAgICB9XHJcbi8vIH0iLCJpbXBvcnQgeyBSZWFjdCB9IGZyb20gXCIuLi93ZWJwYWNrXCI7XHJcbmltcG9ydCB7IGZpbmRCeVByb3BzLCBmaW5kQnlEaXNwbGF5TmFtZSB9IGZyb20gXCIuLi93ZWJwYWNrXCI7XHJcblxyXG5jb25zdCBjbGFzc2VzID0ge1xyXG5cdGRlZmF1bHQ6IC8qI19fUFVSRV9fKi8oKCk9PmZpbmRCeVByb3BzKFwiaWNvblwiLCBcInNlbGVjdGVkXCIpLmljb24pKCksXHJcblx0Y29udGV4dG1lbnU6IC8qI19fUFVSRV9fKi8oKCk9PmZpbmRCeVByb3BzKFwiaWNvblwiLCBcInN1Ym1lbnVcIikuaWNvbikoKSxcclxuXHRtaW5pcG9wb3ZlcjogLyojX19QVVJFX18qLygoKT0+ZmluZEJ5UHJvcHMoXCJpY29uXCIsIFwiaXNIZWFkZXJcIikuaWNvbikoKSxcclxufTtcclxuXHJcbi8qKlxyXG4gKiBSZW5kZXIgYW55IERpc2NvcmQgaWNvbi5cclxuICogQG5hbWUgRGlzY29yZEljb25cclxuICogQHBhcmFtIHtvYmplY3R9IHByb3BzIFJlYWN0IHByb3BlcnRpZXMuIEFsbCB1bmxpc3RlZCBwcm9wZXJ0aWVzIHdpbGwgYmUgcGFzc2VkIGRvd24gdG8gdGhlIGNvbXBvbmVudC5cclxuICogQHBhcmFtIHtzdHJpbmd9IFtwcm9wcy50eXBlPVwiZGVmYXVsdFwiXSBUaGUgRm9udEF3ZXNvbWUgaWNvbiB0eXBlLiBgZGVmYXVsdGAsIGBtaW5pcG9wb3ZlcmAsIGBjb250ZXh0bWVudWAsIGBub25lYC5cclxuICogQHBhcmFtIHtzdHJpbmd9IFtwcm9wcy5uYW1lXSBUaGUgYGRpc3BsYXlOYW1lYCBvZiB0aGUgaWNvbiBjb21wb25lbnQgaW4gRGlzY29yZC5cclxuICogQG1lbWJlcm9mIG1vZHVsZTpjb21wb25lbnRzXHJcbiAqIEBleGFtcGxlXHJcbiAqIHJldHVybiAoXHJcbiAqICAgPERpc2NvcmRJY29uIHR5cGU9XCJtaW5pcG9wb3ZlclwiIC8+XHJcbiAqICk7XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEaXNjb3JkSWNvbihwcm9wcykge1xyXG5cdGNvbnN0IGNob29zZW5DbGFzcyA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xyXG5cdFx0c3dpdGNoIChwcm9wcy50eXBlKSB7XHJcblx0XHRcdGNhc2UgXCJtaW5pcG9wb3ZlclwiOlxyXG5cdFx0XHRcdHJldHVybiBjbGFzc2VzLm1pbmlwb3BvdmVyO1xyXG5cdFx0XHRjYXNlIFwiY29udGV4dG1lbnVcIjpcclxuXHRcdFx0XHRyZXR1cm4gY2xhc3Nlcy5jb250ZXh0bWVudTtcclxuXHRcdFx0Y2FzZSBcIm5vbmVcIjpcclxuXHRcdFx0XHRyZXR1cm4gXCJcIjtcclxuXHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHRyZXR1cm4gY2xhc3Nlcy5kZWZhdWx0XHJcblx0XHR9XHJcblx0fSlcclxuXHRjb25zdCBJY29uU1ZHID1cclxuXHRcdGZpbmRCeURpc3BsYXlOYW1lKHByb3BzLm5hbWUpID8/XHJcblx0XHQoKCkgPT4ge1xyXG5cdFx0XHRyZXR1cm4gXCJcIjtcclxuXHRcdH0pO1xyXG5cdHJldHVybiAoXHJcblx0XHQ8SWNvblNWR1xyXG5cdFx0XHR7Li4ucHJvcHN9XHJcblx0XHRcdGNsYXNzTmFtZT17W2Nob29zZW5DbGFzcywgcHJvcHMuY2xhc3NOYW1lXS5maWx0ZXIoYyA9PiB0eXBlb2YgYyA9PT0gXCJzdHJpbmdcIikuam9pbihcIiBcIil9XHJcblx0XHRcdHN0eWxlPXtPYmplY3QuYXNzaWduKHt9LCB7XHJcblx0XHRcdFx0d2lkdGg6IFwiaW5oZXJpdFwiLFxyXG5cdFx0XHRcdGhlaWdodDogXCJpbmhlcml0XCIsXHJcblx0XHRcdH0sIHByb3BzLnN0eWxlKX1cclxuXHRcdC8+XHJcblx0KTtcclxufSIsImltcG9ydCB7IFJlYWN0IH0gZnJvbSBcIi4uL3dlYnBhY2tcIjtcclxuaW1wb3J0IHsgZmluZEJ5UHJvcHMgfSBmcm9tIFwiLi4vd2VicGFja1wiO1xyXG5cclxuY29uc3QgTGF5ZXJQcm92aWRlciA9IC8qI19fUFVSRV9fKi8oKCk9PmZpbmRCeVByb3BzKFwiQXBwTGF5ZXJQcm92aWRlclwiKS5BcHBMYXllclByb3ZpZGVyKCkucHJvcHMubGF5ZXJDb250ZXh0XHJcblx0LlByb3ZpZGVyKSgpO1xyXG5jb25zdCBBY2Nlc3NpYmlsaXR5UHJvdmlkZXIgPSAvKiNfX1BVUkVfXyovKCgpPT5maW5kQnlQcm9wcyhcclxuXHRcIkFjY2Vzc2liaWxpdHlQcmVmZXJlbmNlc0NvbnRleHRcIlxyXG4pLkFjY2Vzc2liaWxpdHlQcmVmZXJlbmNlc0NvbnRleHQuUHJvdmlkZXIpKCk7XHJcbmNvbnN0IGxheWVyQ2xhc3MgPSAvKiNfX1BVUkVfXyovKCgpPT5maW5kQnlQcm9wcyhcIkxheWVyQ2xhc3NOYW1lXCIpLkxheWVyQ2xhc3NOYW1lKSgpO1xyXG5cclxuLyoqXHJcbiAqIFdyYXAgYSBjb21wb25lbnQgcmVuZGVyZWQgb3V0LW9mLXRyZWUgaW4gRGlzY29yZCdzIHByb3ZpZGVyc1xyXG4gKiBAbmFtZSBEaXNjb3JkUHJvdmlkZXJzXHJcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y29tcG9uZW50c1xyXG4gKiBAZXhhbXBsZVxyXG4gKiByZXR1cm4gKFxyXG4gKiAgIDxEaXNjb3JkUHJvdmlkZXJzPlxyXG4gKiBcdFx0PFdoYXRldmVyLz5cclxuICogXHQgPC9EaXNjb3JkUHJvdmlkZXJzPlxyXG4gKiApO1xyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGlzY29yZFByb3ZpZGVycyhwcm9wcykge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8QWNjZXNzaWJpbGl0eVByb3ZpZGVyXHJcblx0XHRcdHZhbHVlPXt7IHJlZHVjZWRNb3Rpb246IHsgZW5hYmxlZDogZmFsc2UsIHJhd1ZhbHVlOiBcIm5vLXByZWZlcmVuY2VcIiB9IH19XHJcblx0XHQ+XHJcblx0XHRcdDxMYXllclByb3ZpZGVyXHJcblx0XHRcdFx0dmFsdWU9e1tkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FwcC1tb3VudCA+IC5cIiArIGxheWVyQ2xhc3MpXX1cclxuXHRcdFx0PlxyXG5cdFx0XHRcdHtwcm9wcy5jaGlsZHJlbn1cclxuXHRcdFx0PC9MYXllclByb3ZpZGVyPlxyXG5cdFx0PC9BY2Nlc3NpYmlsaXR5UHJvdmlkZXI+XHJcblx0KTtcclxufVxyXG4iLCJpbXBvcnQgeyBSZWFjdCwgRmx1eCB9IGZyb20gXCIuLi93ZWJwYWNrXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGbHV4V3JhcHBlcihwcm9wcykge1xyXG5cdGlmICghcHJvcHMuY2hpbGRyZW4uZGlzcGxheU5hbWUpIHByb3BzLmNoaWxkcmVuLmRpc3BsYXlOYW1lID0gXCJGbHV4UHJveHlcIjtcclxuXHRjb25zdCBDb25uZWN0ZWRDb21wb25lbnQgPSBGbHV4LmNvbm5lY3RTdG9yZXMoXHJcblx0XHRwcm9wcy5zdG9yZXMgPyBPYmplY3QudmFsdWVzKHByb3BzLnN0b3JlcykgOiBbXSxcclxuXHRcdHByb3BzLmNyZWF0ZVByb3BzID8/XHJcblx0XHRcdCgoKSA9PiB7XHJcblx0XHRcdFx0cmV0dXJuIHsgW01hdGgucmFuZG9tKCldOiBNYXRoLnJhbmRvbSgpIH07XHJcblx0XHRcdH0pXHJcblx0KShwcm9wcy5jaGlsZHJlbik7XHJcblx0cmV0dXJuIDxDb25uZWN0ZWRDb21wb25lbnQgey4uLnByb3BzLnN0b3Jlc30gLz47XHJcbn1cclxuIiwiaW1wb3J0IHsgZmluZEJ5UHJvcHMgfSBmcm9tIFwiLi4vd2VicGFja1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IENoYW5nZWxvZyA9IC8qI19fUFVSRV9fKi8gZmluZEJ5UHJvcHMoXCJsZWFkXCIsIFwic29jaWFsTGlua1wiKVxyXG5leHBvcnQgY29uc3QgQ2hhbmdlbG9nTW9kYWwgPSAvKiNfX1BVUkVfXyovIGZpbmRCeVByb3BzKFwibWF4TW9kYWxXaWR0aFwiLCBcImNvbnRlbnRcIikgLy9pIGFzc3VtZSBpdHMgcmVsYXRlZCB0byB0aGUgY2hhbmdlbG9nIG1vZGFsXHJcbmV4cG9ydCBjb25zdCBNYXJnaW5zID0gLyojX19QVVJFX18qLyBmaW5kQnlQcm9wcyhcIm1hcmdpbkxhcmdlXCIsIFwibWFyZ2luVG9wMjBcIilcclxuZXhwb3J0IGNvbnN0IENhcmRMb29rID0gLyojX19QVVJFX18qLyBmaW5kQnlQcm9wcyhcImFycm93XCIsIFwiY29udGFpbmVyXCIsIFwiZGVzY3JpcHRpb25cIikiLCJpbXBvcnQgeyBSZWFjdCB9IGZyb20gXCIuLi93ZWJwYWNrXCI7XHJcbmltcG9ydCBEaXNjb3JkSWNvbiBmcm9tIFwiLi9EaXNjb3JkSWNvblwiO1xyXG5pbXBvcnQgeyBUZXh0IH0gZnJvbSBcIi4vaW5kZXhcIjtcclxuaW1wb3J0IHsgQ2FyZExvb2sgfSBmcm9tIFwiLi4vY2xhc3Nlc1wiO1xyXG5cclxuLyoqXHJcbiAqIEEgQ2F0ZWdvcnkgY29tcG9uZW50IHRvIGhpZGUgY29tcG9uZW50cy4gTm90ZSB0aGF0IHRoaXMgZG9lcyBub3QgdXNlIHRoZSBjdXJyZW50IGNhdGVnb3J5IGNvbXBvbmVudCBvZiB0aGUgbW9kLlxyXG4gKiBAbmFtZSBEaXNjb3JkUHJvdmlkZXJzXHJcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y29tcG9uZW50c1xyXG4gKiBAcGFyYW0ge29iamVjdH0gcHJvcHMgUmVhY3QgcHJvcGVydGllcy5cclxuICogQHBhcmFtIHtzdHJpbmd9IFtwcm9wcy50aXRsZV0gVGhlIHRpdGxlIG9mIHRoZSBjYXRlZ29yeS5cclxuICogQHBhcmFtIHtzdHJpbmd9IFtwcm9wcy5kZXNjcmlwdGlvbl0gVGhlIGRlc2NyaXB0aW9uIG9mIHRoZSBjYXRlZ29yeS5cclxuICogQHBhcmFtIHtzdHJpbmd9IFtwcm9wcy5pY29uXSBUaGUgZGVzY3JpcHRpb24gb2YgdGhlIGNhdGVnb3J5LlxyXG4gKiBAZXhhbXBsZVxyXG4gKiByZXR1cm4gKFxyXG4gKiAgIDxDYXRlZ29yeSB0aXRsZT1cIk5hbWVcIj5cclxuICogXHRcdDxXaGF0ZXZlci8+XHJcbiAqIFx0IDwvQ2F0ZWdvcnk+XHJcbiAqICk7XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXRlZ29yeSh7IHRpdGxlLCBkZXNjcmlwdGlvbiwgaWNvbiwgY2hpbGRyZW4sIG9wZW5lZEJ5RGVmYXVsdCA9IGZhbHNlIH0pIHtcclxuICAgIGNvbnN0IFtvcGVuZWQsIHNldE9wZW5lZF0gPSBSZWFjdC51c2VTdGF0ZShvcGVuZWRCeURlZmF1bHQpO1xyXG5cclxuICAgIHJldHVybiA8ZGl2IHN0eWxlcz17e21hcmdpbkJvdHRvbTogXCIyMHB4XCJ9fT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Q2FyZExvb2suY29udGFpbmVyfSBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuZWQoIW9wZW5lZCl9PlxyXG4gICAgICAgICAgICB7aWNvbiAmJiA8ZGl2IGNsYXNzTmFtZT17Q2FyZExvb2suaWNvbn0+XHJcbiAgICAgICAgICAgICAgICA8RGlzY29yZEljb24gbmFtZT17aWNvbn0gc3R5bGU9e3t3aWR0aDogXCIyMHB4XCIsIGhlaWdodDogXCIyMHB4XCJ9fSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj59XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtDYXJkTG9vay5kZXNjcmlwdGlvbn0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlLTJkc0RMblwiPnt0aXRsZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgIHtkZXNjcmlwdGlvbiAmJiA8VGV4dD57ZGVzY3JpcHRpb259PC9UZXh0Pn1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtDYXJkTG9vay5hcnJvd30+XHJcbiAgICAgICAgICAgICAgICA8RGlzY29yZEljb24gbmFtZT1cIkRyb3Bkb3duQXJyb3dcIiBzdHlsZT17e3dpZHRoOiBcIjI0cHhcIiwgaGVpZ2h0OiBcIjI0cHhcIiwgY29sb3I6IFwidmFyKC0taW50ZXJhY3RpdmUtYWN0aXZlKVwiLCB0cmFuc2Zvcm06ICFvcGVuZWQgPyBcInJvdGF0ZSgtOTBkZWcpXCIgOiB2b2lkIDB9fSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAge29wZW5lZCAmJiA8ZGl2IHN0eWxlPXt7bWFyZ2luVG9wOiBcIjE2cHhcIiwgcGFkZGluZzogXCIwIDIwcHhcIn19PntjaGlsZHJlbn08L2Rpdj59XHJcblxyXG4gICAgICAgIHsvKiA8Rm9ybXMuRm9ybURpdmlkZXIgY2xhc3NOYW1lPVwiZGl2aWRlckRlZmF1bHQtM0MyLXdzXCIvPiAqL31cclxuICAgIDwvZGl2PlxyXG59XHJcbiIsIi8qKlxyXG4gKiBAbW9kdWxlIGNvbXBvbmVudHNcclxuICovXHJcblxyXG5pbXBvcnQgeyBSZWFjdCwgZmluZEJ5RGlzcGxheU5hbWUsIGZpbmRCeVByb3BzLCBmaW5kIH0gZnJvbSBcIi4uL3dlYnBhY2tcIjtcclxuXHJcbi8vIERvbid0IHJlLWV4cG9ydCBvdXIgY29tcG9uZW50cyBhcyB0aGV5IHdvbid0IHRyZWVzaGFrZSBwcm9wZXJseS4gSW5zdGVhZCwgcGVvcGxlIGNhbiBtYW51YWxseSBpbXBvcnQgdGhlbS5cclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBEaXNjb3JkSWNvbiB9IGZyb20gXCIuL0Rpc2NvcmRJY29uXCI7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRGlzY29yZFByb3ZpZGVycyB9IGZyb20gXCIuL0Rpc2NvcmRQcm92aWRlcnNcIjtcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBGbHV4V3JhcHBlciB9IGZyb20gXCIuL0ZsdXhXcmFwcGVyXCI7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ2F0ZWdvcnkgfSBmcm9tIFwiLi9DYXRlZ29yeVwiO1xyXG5cclxuLy8gV3JhcHBlciBmb3IgU3dpdGNoIGNvbXBvbmVudCB0byBmaXggdGhlIHN3aXRjaCBib3ggbm90IGJlaW5nIHVwZGF0YWJsZS4gQ2hlY2sgaHR0cHM6Ly9naXRodWIuY29tL0JldHRlckRpc2NvcmRCdWlsZGVyL2JkYnVpbGRlci9ibG9iL21hc3Rlci9jb21tb24vaG9va3MvY3JlYXRlVXBkYXRlV3JhcHBlci5qc1xyXG5leHBvcnQgY29uc3QgbWFrZVVwZGF0ZVdyYXBwZXIgPSAoQ29tcG9uZW50LCBjaGVja1Byb3BOYW1lID0gXCJ2YWx1ZVwiLCB0eXBlID0gXCJzd2l0Y2hcIikgPT4ge1xyXG4gICAgY29uc3QgdHlwZVN3aXRjaCA9ICh2KSA9PiB7XHJcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJzd2l0Y2hcIjoge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFwicmFkaW9cIjoge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHYudmFsdWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkZWZhdWx0OiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIChwcm9wcykgPT4ge1xyXG4gICAgICAgIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gUmVhY3QudXNlU3RhdGUocHJvcHNbY2hlY2tQcm9wTmFtZV0pXHJcbiAgICAgICAgcmV0dXJuIDxDb21wb25lbnRcclxuICAgICAgICAgICAgey4uLntcclxuICAgICAgICAgICAgICAgIC4uLnByb3BzLFxyXG4gICAgICAgICAgICAgICAgW2NoZWNrUHJvcE5hbWVdOiB2YWx1ZSxcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiAoLi4uYXJncykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gYXJnc1swXVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgcHJvcHMub25DaGFuZ2UgPT09IFwiZnVuY3Rpb25cIikgcHJvcHMub25DaGFuZ2UodmFsdWUpXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VmFsdWUodHlwZVN3aXRjaCh2YWx1ZSkpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgLz5cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEJ1dHRvbiA9IC8qI19fUFVSRV9fKi9maW5kQnlQcm9wcyhcIkNvbG9yc1wiLCBcIkxvb2tzXCIsIFwiRHJvcGRvd25TaXplc1wiKTtcclxuZXhwb3J0IGNvbnN0IFNwaW5uZXIgPSAvKiNfX1BVUkVfXyovZmluZEJ5RGlzcGxheU5hbWUoXCJTcGlubmVyXCIpO1xyXG5leHBvcnQgY29uc3QgVGV4dCA9IC8qI19fUFVSRV9fKi9maW5kQnlEaXNwbGF5TmFtZShcIkxlZ2FjeVRleHRcIik7XHJcbmV4cG9ydCBjb25zdCBUZXh0SW5wdXQgPSAvKiNfX1BVUkVfXyovZmluZEJ5RGlzcGxheU5hbWUoXCJUZXh0SW5wdXRcIik7XHJcbmV4cG9ydCBjb25zdCBUb29sdGlwID0gLyojX19QVVJFX18qL2ZpbmRCeURpc3BsYXlOYW1lKFwiVG9vbHRpcFwiKTtcclxuZXhwb3J0IGNvbnN0IFRvb2x0aXBDb250YWluZXIgPSAvKiNfX1BVUkVfXyovKCgpID0+IGZpbmRCeVByb3BzKFwiVG9vbHRpcENvbnRhaW5lclwiKT8uVG9vbHRpcENvbnRhaW5lcikoKTtcclxuZXhwb3J0IGNvbnN0IFNsaWRlSW4gPSAvKiNfX1BVUkVfXyovZmluZEJ5RGlzcGxheU5hbWUoXCJTbGlkZUluXCIpO1xyXG5leHBvcnQgY29uc3QgU2V0dGluZ3NOb3RpY2UgPSAvKiNfX1BVUkVfXyovZmluZEJ5RGlzcGxheU5hbWUoXCJTZXR0aW5nc05vdGljZVwiKTtcclxuZXhwb3J0IGNvbnN0IFRyYW5zaXRpb25Hcm91cCA9IC8qI19fUFVSRV9fKi9maW5kQnlEaXNwbGF5TmFtZShcIlRyYW5zaXRpb25Hcm91cFwiKTtcclxuZXhwb3J0IGNvbnN0IEZsZXggPSAvKiNfX1BVUkVfXyovZmluZEJ5RGlzcGxheU5hbWUoXCJGbGV4XCIpO1xyXG5leHBvcnQgY29uc3QgQ2FyZCA9IC8qI19fUFVSRV9fKi9maW5kQnlEaXNwbGF5TmFtZShcIkNhcmRcIik7XHJcbmV4cG9ydCBjb25zdCBQb3BvdXQgPSAvKiNfX1BVUkVfXyovZmluZEJ5RGlzcGxheU5hbWUoXCJQb3BvdXRcIik7XHJcbmV4cG9ydCBjb25zdCBQcm9ncmVzcyA9IC8qI19fUFVSRV9fKi9maW5kQnlEaXNwbGF5TmFtZShcIlByb2dyZXNzXCIpO1xyXG5leHBvcnQgY29uc3QgTW9kYWwgPSAvKiNfX1BVUkVfXyovZmluZEJ5UHJvcHMoXCJNb2RhbFJvb3RcIilcclxuZXhwb3J0IGNvbnN0IEZvcm1zID0gLyojX19QVVJFX18qL2ZpbmRCeVByb3BzKCdGb3JtSXRlbScpXHJcbmV4cG9ydCBjb25zdCBDb2xvclBpY2tlciA9IC8qI19fUFVSRV9fKi9maW5kQnlEaXNwbGF5TmFtZShcIkNvbG9yUGlja2VyXCIpXHJcbmV4cG9ydCBjb25zdCBBbmNob3IgPSAvKiNfX1BVUkVfXyovZmluZEJ5RGlzcGxheU5hbWUoXCJBbmNob3JcIilcclxuZXhwb3J0IGNvbnN0IEhlYWRpbmcgPSAvKiNfX1BVUkVfXyovKCgpID0+IGZpbmRCeVByb3BzKFwiSGVhZGluZ1wiKS5IZWFkaW5nKSgpO1xyXG5leHBvcnQgY29uc3QgS2V5Ym9hcmRTaG9ydGN1dCA9IC8qI19fUFVSRV9fKi8oKCkgPT4gZmluZEJ5UHJvcHMoXCJQUkVUVFlfS0VZU1wiKS5kZWZhdWx0KSgpO1xyXG5leHBvcnQgY29uc3QgU2VhcmNoQmFyID0gLyojX19QVVJFX18qLygoKSA9PiBmaW5kQnlQcm9wcyhcIlNlYXJjaEljb25cIikuZGVmYXVsdCkoKTtcclxuZXhwb3J0IGNvbnN0IE9yaWdpbmFsUmFkaW9Hcm91cCA9IC8qI19fUFVSRV9fKi9maW5kQnlEaXNwbGF5TmFtZShcIlJhZGlvR3JvdXBcIik7XHJcbmV4cG9ydCBjb25zdCBSYWRpb0dyb3VwID0gbWFrZVVwZGF0ZVdyYXBwZXIoT3JpZ2luYWxSYWRpb0dyb3VwLCBcInZhbHVlXCIsIFwicmFkaW9cIik7XHJcbmV4cG9ydCBjb25zdCBPcmlnaW5hbFN3aXRjaCA9IC8qI19fUFVSRV9fKi9maW5kQnlEaXNwbGF5TmFtZShcIlN3aXRjaFwiKTtcclxuZXhwb3J0IGNvbnN0IFN3aXRjaCA9IG1ha2VVcGRhdGVXcmFwcGVyKE9yaWdpbmFsU3dpdGNoLCBcImNoZWNrZWRcIik7XHJcbmV4cG9ydCBjb25zdCBPcmlnaW5hbFN3aXRjaEl0ZW0gPSAvKiNfX1BVUkVfXyovZmluZEJ5RGlzcGxheU5hbWUoXCJTd2l0Y2hJdGVtXCIpO1xyXG5leHBvcnQgY29uc3QgU3dpdGNoSXRlbSA9IG1ha2VVcGRhdGVXcmFwcGVyKE9yaWdpbmFsU3dpdGNoSXRlbSwgXCJ2YWx1ZVwiKTtcclxuZXhwb3J0IGNvbnN0IE1hcmtkb3duID0gLyojX19QVVJFX18qLygoKSA9PiBmaW5kKG0gPT4gbT8uZGVmYXVsdD8uZGlzcGxheU5hbWUgPT0gXCJNYXJrZG93blwiICYmIG0/LmRlZmF1bHQ/LnJ1bGVzKT8uZGVmYXVsdCkoKTtcclxuXHJcbmV4cG9ydCBjb25zdCBDb250ZXh0TWVudSA9IC8qI19fUFVSRV9fKi9maW5kQnlQcm9wcyhcIk1lbnVJdGVtXCIpLmRlZmF1bHRcclxuT2JqZWN0LmVudHJpZXMoZmluZEJ5UHJvcHMoXCJNZW51SXRlbVwiKSkuZm9yRWFjaCgoW2tleSwgY29udGVudHNdKSA9PiB7XHJcbiAgICBpZiAoIUNvbnRleHRNZW51W2tleV0pIHtcclxuICAgICAgICBDb250ZXh0TWVudVtrZXldID0gY29udGVudHNcclxuICAgIH1cclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCBBdmF0YXIgPSAvKiNfX1BVUkVfXyovKCgpID0+IGZpbmRCeVByb3BzKFwiQW5pbWF0ZWRBdmF0YXJcIikuZGVmYXVsdCkoKVxyXG5leHBvcnQgY29uc3QgQW5pbWF0ZWRBdmF0YXIgPSAvKiNfX1BVUkVfXyovKCgpID0+IGZpbmRCeVByb3BzKFwiQW5pbWF0ZWRBdmF0YXJcIikuQW5pbWF0ZWRBdmF0YXIpKClcclxuZXhwb3J0IGNvbnN0IEF2YXRhclNpemVzID0gLyojX19QVVJFX18qLygoKSA9PiBmaW5kQnlQcm9wcyhcIkFuaW1hdGVkQXZhdGFyXCIpLlNpemVzKSgpXHJcblxyXG5leHBvcnQgY29uc3QgU2xpZGVyID0gLyojX19QVVJFX18qLygoKSA9PiBmaW5kQnlQcm9wcyhcIk1hcmtlclBvc2l0aW9uc1wiKS5kZWZhdWx0KSgpXHJcbmV4cG9ydCBjb25zdCBTbGlkZXJNYXJrZXJQb3NpdGlvbnMgPSAvKiNfX1BVUkVfXyovKCgpID0+IGZpbmRCeVByb3BzKFwiTWFya2VyUG9zaXRpb25zXCIpLk1hcmtlclBvc2l0aW9ucykoKSIsIi8vIEtub3cgaXQgd2lsbCB3b3JrIG9uIHRoaXMgY2xpZW50IG1vZCBvciBpdCdzIGRldGVjdGluZyB0aGUgd3Jvbmcgb25lP1xyXG4vLyBTZXQgdGhpcyB2YXJpYWJsZS5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IC8qKlxyXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnV0aWxpdGllc1xyXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgbmFtZSBvZiB0aGUgcnVubmluZyBjbGllbnQgbW9kLlxyXG4gKi8gZnVuY3Rpb24gZ2V0Q2xpZW50TW9kKCkge1xyXG5cdHJldHVybiBwcm9jZXNzLmVudi5DTElFTlRfTU9EXHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgLyoqXHJcbiAqIEBtZW1iZXJvZiBtb2R1bGU6dXRpbGl0aWVzXHJcbiAqIEByZXR1cm5zIHtudW1iZXJ9IFRoZSBjdXJyZW50IHRpbWUgaW4gbmFub3NlY29uZHMuXHJcbiAqLyBmdW5jdGlvbiBuYW5vc2Vjb25kcygpIHtcclxuXHRjb25zdCBoclRpbWUgPSBwcm9jZXNzLmhydGltZSgpO1xyXG5cdHJldHVybiBoclRpbWVbMF0gKiAxMDAwMDAwMDAwICsgaHJUaW1lWzFdO1xyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IC8qKlxyXG4gKiBAcGFyYW0ge251bWJlcn0gdGltZSBUaW1lIChpbiBtaWxsaXNlY29uZHMpLlxyXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnV0aWxpdGllc1xyXG4gKiBAcmV0dXJucyB7UHJvbWlzZX0gQSBzdHJpbmcgb2YgcmFuZG9tIGNoYXJhY3RlcnMuXHJcbiAqLyBmdW5jdGlvbiByYW5kb21TdHJpbmcodGltZSkge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dCgoKSA9PiByZXNvbHZlKCksIHRpbWUpKVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUFyZ3VtZW50cyguLi5hcmdzKSB7XHJcblx0cmV0dXJuIFtcclxuXHRcdFwiJWNJdHRhaVwiLFxyXG5cdFx0XCJjb2xvcjogIzAwMDsgYmFja2dyb3VuZC1jb2xvcjogIzQyZmZhNzsgZm9udC1mYW1pbHk6IGRlZmF1bHQ7IHBhZGRpbmctbGVmdDogM3B4OyBwYWRkaW5nLXJpZ2h0OiAzcHg7IGJvcmRlci1yYWRpdXM6IDJweDsgZm9udC13ZWlnaHQ6IGJvbGQ7XCIsXHJcblx0XHQuLi5hcmdzLFxyXG5cdF07XHJcbn1cclxuIiwiaW1wb3J0IHsgY29uc29sZUNvcHksIGNyZWF0ZUFyZ3VtZW50cyB9IGZyb20gXCIuLi9sb2dnZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IC8qKlxyXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmxvZ2dlclxyXG4gKiBAcGFyYW0gIHsuLi5hbnl9IGFyZ3NcclxuICovIGZ1bmN0aW9uIGxvZyguLi5hcmdzKSB7XHJcblx0Y29uc29sZUNvcHkubG9nKC4uLmNyZWF0ZUFyZ3VtZW50cyguLi5hcmdzKSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgY29uc29sZUNvcHksIGNyZWF0ZUFyZ3VtZW50cyB9IGZyb20gXCIuLi9sb2dnZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IC8qKlxyXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmxvZ2dlclxyXG4gKiBAcGFyYW0gIHsuLi5hbnl9IGFyZ3NcclxuICovIGZ1bmN0aW9uIGRlYnVnKC4uLmFyZ3MpIHtcclxuXHRjb25zb2xlQ29weS5kZWJ1ZyguLi5jcmVhdGVBcmd1bWVudHMoLi4uYXJncykpO1xyXG59XHJcbiIsImltcG9ydCB7IGNvbnNvbGVDb3B5LCBjcmVhdGVBcmd1bWVudHMgfSBmcm9tIFwiLi4vbG9nZ2VyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAvKipcclxuICogQG1lbWJlcm9mIG1vZHVsZTpsb2dnZXJcclxuICogQHBhcmFtICB7Li4uYW55fSBhcmdzXHJcbiAqLyBmdW5jdGlvbiB3YXJuKC4uLmFyZ3MpIHtcclxuXHRjb25zb2xlQ29weS53YXJuKC4uLmNyZWF0ZUFyZ3VtZW50cyguLi5hcmdzKSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgY29uc29sZUNvcHksIGNyZWF0ZUFyZ3VtZW50cyB9IGZyb20gXCIuLi9sb2dnZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IC8qKlxyXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmxvZ2dlclxyXG4gKiBAcGFyYW0gIHsuLi5hbnl9IGFyZ3NcclxuICovIGZ1bmN0aW9uIGVycm9yKC4uLmFyZ3MpIHtcclxuXHRjb25zb2xlQ29weS5lcnJvciguLi5jcmVhdGVBcmd1bWVudHMoLi4uYXJncykpO1xyXG59XHJcbiIsImltcG9ydCB7IGNvbnNvbGVDb3B5LCBjcmVhdGVBcmd1bWVudHMgfSBmcm9tIFwiLi4vbG9nZ2VyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAvKipcclxuICogQG1lbWJlcm9mIG1vZHVsZTpsb2dnZXJcclxuICogQHBhcmFtICB7Li4uYW55fSBhcmdzXHJcbiAqLyBmdW5jdGlvbiBncm91cCguLi5hcmdzKSB7XHJcblx0Y29uc29sZUNvcHkuZ3JvdXAoLi4uY3JlYXRlQXJndW1lbnRzKC4uLmFyZ3MpKTtcclxufVxyXG4iLCJpbXBvcnQgeyBjb25zb2xlQ29weSwgY3JlYXRlQXJndW1lbnRzIH0gZnJvbSBcIi4uL2xvZ2dlclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgLyoqXHJcbiAqIEBtZW1iZXJvZiBtb2R1bGU6bG9nZ2VyXHJcbiAqIEBwYXJhbSAgey4uLmFueX0gYXJnc1xyXG4gKi8gZnVuY3Rpb24gZ3JvdXBFbmQoLi4uYXJncykge1xyXG5cdGNvbnNvbGVDb3B5Lmdyb3VwRW5kKC4uLmNyZWF0ZUFyZ3VtZW50cyguLi5hcmdzKSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgY29uc29sZUNvcHkgfSBmcm9tIFwiLi4vbG9nZ2VyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAvKipcclxuICogQG1lbWJlcm9mIG1vZHVsZTpsb2dnZXJcclxuICogQHBhcmFtICB7Li4uYW55fSBhcmdzXHJcbiAqLyBmdW5jdGlvbiBjb3VudCguLi5hcmdzKSB7XHJcblx0Y29uc29sZUNvcHkuY291bnQoLi4uYXJncyk7XHJcbn1cclxuIiwiaW1wb3J0IHsgY29uc29sZUNvcHkgfSBmcm9tIFwiLi4vbG9nZ2VyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAvKipcclxuICogQG1lbWJlcm9mIG1vZHVsZTpsb2dnZXJcclxuICogQHBhcmFtICB7Li4uYW55fSBhcmdzXHJcbiAqLyBmdW5jdGlvbiBjb3VudFJlc2V0KC4uLmFyZ3MpIHtcclxuXHRjb25zb2xlQ29weS5jb3VudFJlc2V0KC4uLmFyZ3MpO1xyXG59XHJcbiIsIi8qKlxyXG4gKiBAbW9kdWxlIGxvZ2dlclxyXG4gKi9cclxuXHJcbmV4cG9ydCBjb25zdCBjb25zb2xlQ29weSA9IHsgLi4uY29uc29sZSB9O1xyXG5cclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBjcmVhdGVBcmd1bWVudHMgfSBmcm9tIFwiLi9jcmVhdGVBcmd1bWVudHNcIjtcclxuXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgbG9nIH0gZnJvbSBcIi4vbG9nXCI7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZGVidWcgfSBmcm9tIFwiLi9kZWJ1Z1wiO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIHdhcm4gfSBmcm9tIFwiLi93YXJuXCI7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZXJyb3IgfSBmcm9tIFwiLi9lcnJvclwiO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGdyb3VwIH0gZnJvbSBcIi4vZ3JvdXBcIjtcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBncm91cEVuZCB9IGZyb20gXCIuL2dyb3VwRW5kXCI7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgY291bnQgfSBmcm9tIFwiLi9jb3VudFwiO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGNvdW50UmVzZXQgfSBmcm9tIFwiLi9jb3VudFJlc2V0XCI7XHJcbiIsImltcG9ydCB7IGVycm9yIH0gZnJvbSBcIi4uL2xvZ2dlclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgLyoqXHJcbiAqIEZpbmRzIGFuIG9iamVjdCBpbiBhIHRyZWUuXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSB0cmVlIFRoZSB0cmVlIHRvIHNlYXJjaC5cclxuICogQHBhcmFtIHtmdW5jdGlvbn0gZmlsdGVyIEEgZmlsdGVyIGZ1bmN0aW9uIHRoYXQgc2hvdWxkIHJldHVybiB0cnVlIHdoZW4gaXQgY2hlY2tzIHdoYXQgeW91IHdhbnQgdG8gZmluZC5cclxuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcclxuICogQHBhcmFtIHtzdHJpbmdbXX0gW29wdGlvbnMud2Fsa2FibGU9W11dIFdoaWNoIG5vZGUgbmFtZXMgYXJlIHdhbGthYmxlLlxyXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBbb3B0aW9ucy5leGNsdWRlPVtdXSBXaGljaCBub2RlIG5hbWVzIHRvIG5vdCB3YWxrLlxyXG4gKiBAcGFyYW0ge2Jvb2xlYW58c3RyaW5nfSBbb3B0aW9ucy53aGlsZUxvb3A9ZmFsc2VdIFdoZXRoZXIgb3Igbm90IHRvIHVzZSBhIHdoaWxlIGxvb3AgaW5zdGVhZCBvZiByZWN1cnNpb24uIFRoaXMgaXMgc2xvd2VyLCBidXQgbm90IHByb25lIHRvIHN0YWNrIG92ZXJmbG93LlxyXG4gKiBAcGFyYW0ge2Jvb2xlYW58c3RyaW5nfSBbb3B0aW9ucy5tYXhEZXB0aD0xMDBdIFRoZSBtYXhpbXVtIGFtb3VudCBvZiBsYXllcnMgZGVlcCB0byBzZWFyY2ggdGhlIHRyZWUuIGBvcHRpb25zLndoaWxlTG9vcD1mYWxzZWAgb25seS5cclxuICogQG1lbWJlcm9mIG1vZHVsZTp1dGlsaXRpZXNcclxuICogQHJldHVybnMge29iamVjdHxudWxsfVxyXG4gKi8gZnVuY3Rpb24gZmluZEluVHJlZShcclxuXHR0cmVlLFxyXG5cdGZpbHRlcixcclxuXHR7XHJcblx0XHR3YWxrYWJsZSA9IFtdLFxyXG5cdFx0ZXhjbHVkZSA9IFtdLFxyXG5cdFx0d2hpbGVMb29wID0gZmFsc2UsXHJcblx0XHRtYXhEZXB0aCA9IDEwMCxcclxuXHRcdGRlcHRoID0gMCxcclxuXHR9ID0ge31cclxuKSB7XHJcblx0aWYgKGRlcHRoID09PSBtYXhEZXB0aCkgcmV0dXJuIG51bGw7XHJcblx0aWYgKHRyZWUgPT09IG51bGwgfHwgdHJlZSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gbnVsbDtcclxuXHRpZiAodHlwZW9mIHRyZWUgIT09IFwib2JqZWN0XCIpIHJldHVybiBudWxsO1xyXG5cclxuXHRpZiAodHlwZW9mIGZpbHRlciA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIHRyZWVbZmlsdGVyXTtcclxuXHJcblx0aWYgKHdoaWxlTG9vcCkge1xyXG5cdFx0Y29uc3Qgc3RhY2sgPSBbdHJlZV07XHJcblx0XHR3aGlsZSAoc3RhY2subGVuZ3RoKSB7XHJcblx0XHRcdGNvbnN0IG5vZGUgPSBzdGFja1t3aGlsZUxvb3AgPT09IFwicmV2ZXJzZVwiID8gXCJwb3BcIiA6IFwic2hpZnRcIl0oKTtcclxuXHRcdFx0dHJ5IHtcclxuXHRcdFx0XHRpZiAoZmlsdGVyKG5vZGUpKSByZXR1cm4gbm9kZTtcclxuXHRcdFx0fSBjYXRjaCB7fVxyXG5cdFx0XHRpZiAoc3RhY2subGVuZ3RoID49IG1heFN0YWNrKSBjb250aW51ZTtcclxuXHRcdFx0aWYgKEFycmF5LmlzQXJyYXkobm9kZSkpIHtcclxuXHRcdFx0XHRzdGFjay5wdXNoKC4uLm5vZGUpO1xyXG5cdFx0XHR9IGVsc2UgaWYgKHR5cGVvZiBub2RlID09PSBcIm9iamVjdFwiICYmIG5vZGUgIT09IG51bGwpIHtcclxuXHRcdFx0XHRpZiAod2Fsa2FibGUubGVuZ3RoID4gMCkge1xyXG5cdFx0XHRcdFx0c3RhY2sucHVzaChcclxuXHRcdFx0XHRcdFx0Li4uT2JqZWN0LmVudHJpZXMobm9kZSlcclxuXHRcdFx0XHRcdFx0XHQuZmlsdGVyKFxyXG5cdFx0XHRcdFx0XHRcdFx0KFtrZXksIHZhbHVlXSkgPT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0d2Fsa2FibGUuaW5kZXhPZihrZXkpICE9PSAtMSAmJiBleGNsdWRlLmluZGV4T2Yoa2V5KSA9PT0gLTFcclxuXHRcdFx0XHRcdFx0XHQpXHJcblx0XHRcdFx0XHRcdFx0Lm1hcCgoW2tleSwgdmFsdWVdKSA9PiB2YWx1ZSlcclxuXHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHN0YWNrLnB1c2goXHJcblx0XHRcdFx0XHRcdC4uLk9iamVjdC52YWx1ZXMobm9kZSkuZmlsdGVyKFxyXG5cdFx0XHRcdFx0XHRcdChrZXkpID0+IGV4Y2x1ZGUuaW5kZXhPZihrZXkpID09PSAtMSAmJiBub2RlXHJcblx0XHRcdFx0XHRcdClcclxuXHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGRlcHRoKys7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gbnVsbDtcclxuXHR9IGVsc2Uge1xyXG5cdFx0bGV0IHJldHVyblZhbHVlO1xyXG5cdFx0dHJ5IHtcclxuXHRcdFx0aWYgKGZpbHRlcih0cmVlKSkgcmV0dXJuIHRyZWU7XHJcblx0XHR9IGNhdGNoIHt9XHJcblx0XHRpZiAoQXJyYXkuaXNBcnJheSh0cmVlKSkge1xyXG5cdFx0XHRmb3IgKGNvbnN0IHZhbHVlIG9mIHRyZWUpIHtcclxuXHRcdFx0XHRyZXR1cm5WYWx1ZSA9IGZpbmRJblRyZWUodmFsdWUsIGZpbHRlciwge1xyXG5cdFx0XHRcdFx0d2Fsa2FibGUsXHJcblx0XHRcdFx0XHRleGNsdWRlLFxyXG5cdFx0XHRcdFx0d2hpbGVMb29wLFxyXG5cdFx0XHRcdFx0bWF4RGVwdGgsXHJcblx0XHRcdFx0XHRkZXB0aDogZGVwdGggKyAxLFxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdGlmIChyZXR1cm5WYWx1ZSkgcmV0dXJuIHJldHVyblZhbHVlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRsZXQga2V5cyA9IHdhbGthYmxlLmxlbmd0aCA+IDAgPyB3YWxrYWJsZSA6IE9iamVjdC5rZXlzKHRyZWUpO1xyXG5cdFx0Zm9yIChjb25zdCBrZXkgb2Yga2V5cykge1xyXG5cdFx0XHRpZiAoIXRyZWUuaGFzT3duUHJvcGVydHkoa2V5KSB8fCBleGNsdWRlLmluY2x1ZGVzKGtleSkpIGNvbnRpbnVlO1xyXG5cdFx0XHRyZXR1cm5WYWx1ZSA9IGZpbmRJblRyZWUodHJlZVtrZXldLCBmaWx0ZXIsIHtcclxuXHRcdFx0XHR3YWxrYWJsZSxcclxuXHRcdFx0XHRleGNsdWRlLFxyXG5cdFx0XHRcdHdoaWxlTG9vcCxcclxuXHRcdFx0XHRtYXhEZXB0aCxcclxuXHRcdFx0XHRkZXB0aDogZGVwdGggKyAxLFxyXG5cdFx0XHR9KTtcclxuXHRcdFx0aWYgKHJldHVyblZhbHVlKSByZXR1cm4gcmV0dXJuVmFsdWU7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gbnVsbDtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgZmluZEluVHJlZSB9IGZyb20gXCIuLi91dGlsaXRpZXNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IC8qKlxyXG4gKiBGaW5kcyBhbiBvYmplY3QgaW4gYSBSZWFjdCB0cmVlLlxyXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnV0aWxpdGllc1xyXG4gKiBAcGFyYW0ge29iamVjdH0gdHJlZSBUaGUgdHJlZSB0byBzZWFyY2guXHJcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZpbHRlciBBIGZpbHRlciBmdW5jdGlvbiB0aGF0IHNob3VsZCByZXR1cm4gdHJ1ZSB3aGVuIGl0IGNoZWNrcyB3aGF0IHlvdSB3YW50IHRvIGZpbmQuXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBbd2hpbGVMb29wPWZhbHNlXSBXaGV0aGVyIG9yIG5vdCB0byB1c2UgYSB3aGlsZSBsb29wIGluc3RlYWQgb2YgcmVjdXJzaW9uLiBUaGlzIGlzIHNsb3dlciwgYnV0IG5vdCBwcm9uZSB0byBzdGFjayBvdmVyZmxvdy5cclxuICovIGZ1bmN0aW9uIGZpbmRJblJlYWN0VHJlZShcclxuXHR0cmVlLFxyXG5cdGZpbHRlcixcclxuXHR7IHdoaWxlTG9vcCA9IGZhbHNlLCBtYXhEZXB0aCA9IDEwMCwgZGVwdGggPSAwIH0gPSB7fVxyXG4pIHtcclxuXHRyZXR1cm4gZmluZEluVHJlZSh0cmVlLCBmaWx0ZXIsIHtcclxuXHRcdHdhbGthYmxlOiBbXCJwcm9wc1wiLCBcImNoaWxkcmVuXCIsIFwiY2hpbGRcIiwgXCJzaWJsaW5nXCJdLFxyXG5cdFx0ZXhjbHVkZTogW1wiX19yZWFjdEZpYmVyJFwiLCBcIl9fcmVhY3RGaWJlclwiLCBcIl9fcmVhY3RJbnRlcm5hbEluc3RhbmNlJFwiLCBcIl9fcmVhY3RJbnRlcm5hbEluc3RhbmNlXCJdLFxyXG5cdFx0d2hpbGVMb29wLFxyXG5cdFx0bWF4RGVwdGgsXHJcblx0XHRkZXB0aCxcclxuXHR9KTtcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCAvKipcclxuICogQHBhcmFtIHtIVE1MRWxlbWVudHxzdHJpbmd9IG5vZGUgVGhlIG5vZGUsIG5vZGUgSUQsIG5vZGUgY2xhc3MgbmFtZSwgb3IgcGFydGlhbCBub2RlIGNsYXNzIG5hbWUgdG8gZ2V0IHRoZSBSZWFjdCBpbnN0YW5jZSBmcm9tLlxyXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnV0aWxpdGllc1xyXG4gKiBAcmV0dXJucyB7b2JqZWN0fVxyXG4gKi8gZnVuY3Rpb24gZ2V0UmVhY3RJbnN0YW5jZShub2RlKSB7XHJcblx0aWYgKHR5cGVvZiBub2RlID09PSBcInN0cmluZ1wiKVxyXG5cdFx0bm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcblx0XHRcdGAke25vZGV9LCAuJHtub2RlfSwgIyR7bm9kZX0sIFtjbGFzcyo9XCIke25vZGV9XCJdYFxyXG5cdFx0KTtcclxuXHRpZiAoIW5vZGUpIHJldHVybiBudWxsO1xyXG5cdGlmIChub2RlLl9fcmVhY3RGaWJlciQpIHJldHVybiBub2RlLl9fcmVhY3RGaWJlciQ7IC8vIG5ldyBSZWFjdFxyXG5cdGlmIChub2RlLl9fcmVhY3RJbnRlcm5hbEluc3RhbmNlJCkgcmV0dXJuIG5vZGUuX19yZWFjdEludGVybmFsSW5zdGFuY2UkOyAvLyBvbGQgUmVhY3RcclxuXHRyZXR1cm4gbm9kZVtcclxuXHRcdE9iamVjdC5rZXlzKG5vZGUpLmZpbmQoKGUpID0+IGUuc3RhcnRzV2l0aChcIl9fcmVhY3RGaWJlciRcIikpIC8vIG5ldyBSZWFjdFxyXG5cdF0gfHwgbm9kZVtcclxuXHRcdE9iamVjdC5rZXlzKG5vZGUpLmZpbmQoKGUpID0+IGUuc3RhcnRzV2l0aChcIl9fcmVhY3RJbnRlcm5hbEluc3RhbmNlXCIpKSAvLyBvbGQgUmVhY3RcclxuXHRdO1xyXG59XHJcbiIsImltcG9ydCB7IGdldFJlYWN0SW5zdGFuY2UgfSBmcm9tIFwiLi4vdXRpbGl0aWVzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAvKipcclxuICogQHBhcmFtIHtIVE1MRWxlbWVudHxzdHJpbmd9IG5vZGUgVGhlIG5vZGUsIG5vZGUgSUQsIG5vZGUgY2xhc3MgbmFtZSwgb3IgcGFydGlhbCBub2RlIGNsYXNzIG5hbWUgdG8gZ2V0IHRoZSBvd25lciBpbnN0YW5jZSBmcm9tLlxyXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnV0aWxpdGllc1xyXG4gKiBAcmV0dXJucyB7b2JqZWN0fVxyXG4gKi8gZnVuY3Rpb24gZ2V0T3duZXJJbnN0YW5jZShub2RlKSB7XHJcblx0Zm9yIChsZXQgY3VyciA9IGdldFJlYWN0SW5zdGFuY2Uobm9kZSk7IGN1cnI7IGN1cnIgPSBjdXJyLnJldHVybikge1xyXG5cdFx0Y29uc3Qgb3duZXIgPSBjdXJyLnN0YXRlTm9kZTtcclxuXHRcdGlmIChvd25lcilcclxuXHRcdFx0cmV0dXJuIG93bmVyO1xyXG5cdH1cclxuXHRyZXR1cm4gbnVsbDtcclxufVxyXG4iLCJpbXBvcnQgeyBNb2RhbFN0YWNrIH0gZnJvbSBcIi4uL3dlYnBhY2tcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRlc3RDb21wb25lbnQoQ29tcG9uZW50KSB7XHJcblx0TW9kYWxTdGFjay5vcGVuTW9kYWwoKCkgPT4gQ29tcG9uZW50KTtcclxufVxyXG4iLCJpbXBvcnQgeyBhdmVyYWdlLCBtZWRpYW4sIG5hbm9zZWNvbmRzIH0gZnJvbSBcIi4uL3V0aWxpdGllc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgLyoqXHJcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGNvZGVibG9jayBUaGUgY29kZSB0byBiZW5jaG1hcmsuXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSB0aW1lcyBUaGUgYW1vdW50IG9mIHRpbWVzIHRvIHJ1biB0aGUgYmVuY2htYXJrLlxyXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnV0aWxpdGllc1xyXG4gKiBAcmV0dXJucyB7UHJvbWlzZX0gQSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiB0aGUgYmVuY2htYXJrIGlzIGNvbXBsZXRlZC5cclxuICovIGZ1bmN0aW9uIGJlbmNobWFyayhjb2RlYmxvY2ssIHRpbWVzKSB7XHJcblx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcblx0XHRjb25zdCBwcmUgPSBjb2RlYmxvY2sucHJlID8/ICgoKSA9PiB7fSk7XHJcblx0XHRkZWxldGUgY29kZWJsb2NrLnByZTtcclxuXHRcdGNvbnN0IHBvc3QgPSBjb2RlYmxvY2sucG9zdCA/PyAoKCkgPT4ge30pO1xyXG5cdFx0ZGVsZXRlIGNvZGVibG9jay5wb3N0O1xyXG5cclxuXHRcdGNvbnN0IG5hbWUgPSBPYmplY3Qua2V5cyhjb2RlYmxvY2spWzBdO1xyXG5cclxuXHRcdGNvZGVibG9jayA9IGNvZGVibG9ja1tPYmplY3Qua2V5cyhjb2RlYmxvY2spWzBdXTtcclxuXHJcblx0XHRsZXQgcHJvbWlzZXMgPSBbXTtcclxuXHJcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRpbWVzOyBpKyspIHtcclxuXHRcdFx0cHJvbWlzZXMucHVzaChcclxuXHRcdFx0XHRuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG5cdFx0XHRcdFx0bGV0IHJldHVybnMsIHN0YXJ0LCBlbmQ7XHJcblx0XHRcdFx0XHR0cnkge1xyXG5cdFx0XHRcdFx0XHRwcmUoKTtcclxuXHRcdFx0XHRcdFx0c3RhcnQgPSBuYW5vc2Vjb25kcygpO1xyXG5cdFx0XHRcdFx0XHRyZXR1cm5zID0gY29kZWJsb2NrKCk7XHJcblx0XHRcdFx0XHRcdGVuZCA9IG5hbm9zZWNvbmRzKCk7XHJcblx0XHRcdFx0XHRcdHBvc3QoKTtcclxuXHRcdFx0XHRcdH0gY2F0Y2ggKGUpIHtcclxuXHRcdFx0XHRcdFx0cmVzb2x2ZSh7IHJldHVybnMsIHRpbWU6IDAsIGVycm9yOiBlIH0pO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0cmVzb2x2ZSh7IHJldHVybnMsIHRpbWU6IGVuZCAtIHN0YXJ0LCBlcnJvcjogZmFsc2UgfSk7XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0KTtcclxuXHRcdH1cclxuXHJcblx0XHRQcm9taXNlLmFsbChwcm9taXNlcykudGhlbigoYWxsUmV0dXJucykgPT4ge1xyXG5cdFx0XHRjb25zdCBmaW5hbFRpbWVzID0gYWxsUmV0dXJucy5tYXAoKHIpID0+IHIudGltZSk7XHJcblx0XHRcdHJlc29sdmUoe1xyXG5cdFx0XHRcdG5hbWUsXHJcblx0XHRcdFx0YXZlcmFnZTogYXZlcmFnZShmaW5hbFRpbWVzKSxcclxuXHRcdFx0XHRtZWRpYW46IG1lZGlhbihmaW5hbFRpbWVzKSxcclxuXHRcdFx0XHRlcnJvcjogYWxsUmV0dXJuc1swXS5lcnJvcixcclxuXHRcdFx0XHRyZXR1cm5zOiBhbGxSZXR1cm5zWzBdLnJldHVybnMsXHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblx0fSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgZ3JvdXAsIGdyb3VwRW5kIH0gZnJvbSBcIi4uL2xvZ2dlclwiO1xyXG5pbXBvcnQgeyBiZW5jaG1hcmssIG5hbm9zZWNvbmRzIH0gZnJvbSBcIi4uL3V0aWxpdGllc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgLyoqXHJcbiAqIFByaW50cyBvdXQgdGhlIGJlbmNobWFyayByZXN1bHRzIGZvciBlYWNoIGNvZGUgYmxvY2suXHJcbiAqIEBtZW1iZXJvZiBtb2R1bGU6dXRpbGl0aWVzXHJcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGNvZGVibG9jayBUaGUgY29kZSB0byBiZW5jaG1hcmsuXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSB0aW1lcyBUaGUgYW1vdW50IG9mIHRpbWVzIHRvIHJ1biB0aGUgYmVuY2htYXJrLlxyXG4gKi8gZnVuY3Rpb24gbXVsdGlCZW5jaG1hcmsoY29kZWJsb2NrcywgdGltZXMpIHtcclxuXHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuXHRcdGNvbnN0IHN0YXJ0ID0gbmFub3NlY29uZHMoKTtcclxuXHRcdFByb21pc2UuYWxsKFxyXG5cdFx0XHRjb2RlYmxvY2tzLm1hcCgoY29kZWJsb2NrKSA9PiBiZW5jaG1hcmsoY29kZWJsb2NrLCB0aW1lcykpXHJcblx0XHQpLnRoZW4oKHJlc3VsdHMpID0+IHtcclxuXHRcdFx0Y29uc3QgZW5kID0gbmFub3NlY29uZHMoKTtcclxuXHRcdFx0Y29uc3QgZ3JvdXBOYW1lID0gYEJlbmNobWFya2VkICR7Y29kZWJsb2Nrcy5sZW5ndGgudG9Mb2NhbGVTdHJpbmcoKX0gZnVuY3Rpb25zICR7dGltZXMudG9Mb2NhbGVTdHJpbmcoKX0gdGltZXMgb3ZlciAkeyhcclxuXHRcdFx0XHRlbmQgLSBzdGFydFxyXG5cdFx0XHQpLnRvTG9jYWxlU3RyaW5nKCl9bnMuYDtcclxuXHRcdFx0Z3JvdXAoZ3JvdXBOYW1lKTtcclxuXHRcdFx0Y29uc3QgbWFwcGVkUmVzdWx0cyA9IE9iamVjdC52YWx1ZXMocmVzdWx0cykubWFwKChyZXN1bHQpID0+IHtcclxuXHRcdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdFx0TmFtZTogcmVzdWx0Lm5hbWUsXHJcblx0XHRcdFx0XHRcIk1lZGlhbiBUaW1lXCI6IGAke3Jlc3VsdC5tZWRpYW4udG9Mb2NhbGVTdHJpbmcoKX1uc2AsXHJcblx0XHRcdFx0XHRcIkF2ZXJhZ2UgVGltZVwiOiBgJHtyZXN1bHQuYXZlcmFnZS50b0xvY2FsZVN0cmluZygpfW5zYCxcclxuXHRcdFx0XHRcdFJldHVybnM6IHJlc3VsdC5yZXR1cm5zLFxyXG5cdFx0XHRcdFx0RXJyb3I6IHJlc3VsdC5lcnJvcixcclxuXHRcdFx0XHRcdFwiKE1lZGlhbiBUaW1lKVwiOiByZXN1bHQubWVkaWFuLFxyXG5cdFx0XHRcdFx0XCIoQXZlcmFnZSBUaW1lKVwiOiByZXN1bHQuYXZlcmFnZSxcclxuXHRcdFx0XHR9O1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0Y29uc3Qgc3VjY2Vzc2Z1bFJlc3VsdHMgPSBtYXBwZWRSZXN1bHRzLmZpbHRlcihcclxuXHRcdFx0XHQocmVzdWx0KSA9PiByZXN1bHQuRXJyb3IgPT09IGZhbHNlXHJcblx0XHRcdCk7XHJcblx0XHRcdGNvbnN0IGVycm9yZWRSZXN1bHRzID0gbWFwcGVkUmVzdWx0cy5maWx0ZXIoKHJlc3VsdCkgPT4gISFyZXN1bHQuRXJyb3IpO1xyXG5cclxuXHRcdFx0Y29uc29sZS50YWJsZShcclxuXHRcdFx0XHRzdWNjZXNzZnVsUmVzdWx0cy5zb3J0KChyZXN1bHQxLCByZXN1bHQyKSA9PiB7XHJcblx0XHRcdFx0XHRpZiAocmVzdWx0MVtcIihNZWRpYW4gVGltZSlcIl0gPiByZXN1bHQyW1wiKE1lZGlhbiBUaW1lKVwiXSkgcmV0dXJuIDE7XHJcblx0XHRcdFx0XHRpZiAocmVzdWx0MVtcIihNZWRpYW4gVGltZSlcIl0gPCByZXN1bHQyW1wiKE1lZGlhbiBUaW1lKVwiXSkgcmV0dXJuIC0xO1xyXG5cdFx0XHRcdFx0cmV0dXJuIDA7XHJcblx0XHRcdFx0fSksXHJcblx0XHRcdFx0W1wiTmFtZVwiLCBcIk1lZGlhbiBUaW1lXCIsIFwiQXZlcmFnZSBUaW1lXCIsIFwiUmV0dXJuc1wiXVxyXG5cdFx0XHQpO1xyXG5cdFx0XHRpZiAoZXJyb3JlZFJlc3VsdHMubGVuZ3RoID4gMCkge1xyXG5cdFx0XHRcdGNvbnNvbGUudGFibGUoZXJyb3JlZFJlc3VsdHMsIFtcIk5hbWVcIiwgXCJFcnJvclwiXSk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGdyb3VwRW5kKGdyb3VwTmFtZSk7XHJcblx0XHRcdHJlc29sdmUocmVzdWx0cyk7XHJcblx0XHR9KTtcclxuXHR9KTtcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCAvKipcclxuICogQHBhcmFtIHtudW1iZXJbXX0gYXJyYXkgQW4gYXJyYXkgb2YgbnVtYmVycy5cclxuICogQG1lbWJlcm9mIG1vZHVsZTp1dGlsaXRpZXNcclxuICogQHJldHVybnMge251bWJlcn0gVGhlIGF2ZXJhZ2Ugb2YgdGhlIG51bWJlcnMgaW4gdGhlIGFycmF5LlxyXG4gKi8gZnVuY3Rpb24gYXZlcmFnZShhcnJheSkge1xyXG5cdGlmIChhcnJheS5sZW5ndGggPT09IDApIHJldHVybiAwO1xyXG5cdGxldCB0b3RhbCA9IDA7XHJcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xyXG5cdFx0dG90YWwgKz0gYXJyYXlbaV07XHJcblx0fVxyXG5cdHJldHVybiB0b3RhbCAvIGFycmF5Lmxlbmd0aDtcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCAvKipcclxuICogQHBhcmFtIHtudW1iZXJbXX0gYXJyYXkgQW4gYXJyYXkgb2YgbnVtYmVycy5cclxuICogQG1lbWJlcm9mIG1vZHVsZTp1dGlsaXRpZXNcclxuICogQHJldHVybnMge251bWJlcn0gVGhlIG1lZGlhbiBvZiB0aGUgbnVtYmVycyBpbiB0aGUgYXJyYXkuXHJcbiAqLyBmdW5jdGlvbiBtZWRpYW4oYXJyYXkpIHtcclxuXHRpZiAoYXJyYXkubGVuZ3RoID09PSAwKSByZXR1cm4gMDtcclxuXHRhcnJheS5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XHJcblx0XHRyZXR1cm4gYSAtIGI7XHJcblx0fSk7XHJcblx0bGV0IGhhbGYgPSBNYXRoLmZsb29yKGFycmF5Lmxlbmd0aCAvIDIpO1xyXG5cdGlmIChhcnJheS5sZW5ndGggJSAyKSByZXR1cm4gYXJyYXlbaGFsZl07XHJcblx0cmV0dXJuIChhcnJheVtoYWxmIC0gMV0gKyBhcnJheVtoYWxmXSkgLyAyLjA7XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgLyoqXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBtaW4gVGhlIG1pbmltdW0gdmFsdWUgb2YgdGhlIHJldHVybmVkIG51bWJlci5cclxuICogQHBhcmFtIHtudW1iZXJ9IG1peCBUaGUgbWF4aW11bSB2YWx1ZSBvZiB0aGUgcmV0dXJuZWQgbnVtYmVyLlxyXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnV0aWxpdGllc1xyXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBBIHJhbmRvbSBudW1iZXIuXHJcbiAqLyBmdW5jdGlvbiByYW5kb21OdW1iZXIobWluLCBtYXgpIHtcclxuXHRyZXR1cm4gTWF0aC5yYW5kb20oKSAqIG1heCAtIG1pbjtcclxufVxyXG4iLCJpbXBvcnQgeyByYW5kb21OdW1iZXIgfSBmcm9tIFwiLi4vdXRpbGl0aWVzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAvKipcclxuICogQHBhcmFtIHtudW1iZXJ9IGxlbmd0aCBUaGUgbGVuZ3RoIG9mIHRoZSBzdHJpbmcuXHJcbiAqIEBwYXJhbSB7c3RyaW5nfGFycmF5fSBkb250TWF0Y2ggQSBzdHJpbmcgb3IgYW4gYXJyYXkgb2Ygc3RyaW5ncyB0aGF0IHdpbGwgY2F1c2UgYSByZWdlbmVyYXRpb24gaWYgYW55IGFyZSBtYXRjaGVkLlxyXG4gKiBAcGFyYW0ge3N0cmluZ3xhcnJheX0gY2hhcnNldCBBIGxpc3Qgb2YgdGhlIGNoYXJhY3RlcnMgdG8gdXNlIHdoZW4gZ2VuZXJhdGluZyB0aGUgc3RyaW5nLlxyXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnV0aWxpdGllc1xyXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBBIHN0cmluZyBvZiByYW5kb20gY2hhcmFjdGVycy5cclxuICovIGZ1bmN0aW9uIHJhbmRvbVN0cmluZyhcclxuXHRsZW5ndGgsXHJcblx0ZG9udE1hdGNoID0gXCJcIixcclxuXHRjaGFyc2V0ID0gXCJhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ekFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaMDEyMzQ1Njc4OVwiXHJcbikge1xyXG5cdGlmICh0eXBlb2YgbGVuZ3RoICE9PSBcIm51bWJlclwiICYmIGxlbmd0aCA8PSAwKSByZXR1cm47XHJcblx0aWYgKHR5cGVvZiBkb250TWF0Y2ggIT09IFwic3RyaW5nXCIgJiYgIUFycmF5LmlzQXJyYXkoZG9udE1hdGNoKSkgcmV0dXJuO1xyXG5cdGlmICh0eXBlb2YgY2hhcnNldCAhPT0gXCJzdHJpbmdcIiAmJiAhQXJyYXkuaXNBcnJheShjaGFyc2V0KSkgcmV0dXJuO1xyXG5cdGxldCBzdHJpbmcgPSBcIlwiO1xyXG5cdGRvIHtcclxuXHRcdHdoaWxlIChzdHJpbmcubGVuZ3RoIDwgbGVuZ3RoKSB7XHJcblx0XHRcdHN0cmluZyArPSBjaGFyc2V0W01hdGgucm91bmQocmFuZG9tTnVtYmVyKDAsIGNoYXJzZXQubGVuZ3RoIC0gMSkpXTtcclxuXHRcdH1cclxuXHRcdHN0cmluZyA9IHN0cmluZy5zbGljZSgwLCBsZW5ndGgpO1xyXG5cdH0gd2hpbGUgKFxyXG5cdFx0ZG9udE1hdGNoICYmXHJcblx0XHQoc3RyaW5nID09PSBkb250TWF0Y2ggfHwgZG9udE1hdGNoLnNvbWUoKG0pID0+IG0gPT09IHN0cmluZykpXHJcblx0KTtcclxuXHRyZXR1cm4gc3RyaW5nO1xyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0ICguLi5jbGFzc2VzKSA9PiBjbGFzc2VzLmZpbHRlcihzID0+IHR5cGVvZiBzID09PSAnc3RyaW5nJykuam9pbihcIiBcIikiLCJpbXBvcnQgeyBmaW5kIH0gZnJvbSBcIi4uL3dlYnBhY2tcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICAvKipcclxuICogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZSBUaGUgY2xhc3MgbmFtZSB0byBzZWFyY2ggZm9yXHJcbiAqIEBtZW1iZXJvZiBtb2R1bGU6dXRpbGl0aWVzXHJcbiAqIEByZXR1cm5zIHtvYmplY3R9IFRoZSBtb2R1bGVcclxuICovIGZ1bmN0aW9uIChjbGFzc05hbWUpIHtcclxuICAgICByZXR1cm4gZmluZChtID0+IFxyXG4gICAgICAgIE9iamVjdC52YWx1ZXMobSkuc29tZSh2ID0+IFxyXG4gICAgICAgICAgICB0eXBlb2YgdiA9PT0gXCJzdHJpbmdcIiAmJiBcclxuICAgICAgICAgICAgfnYuc3BsaXQoXCIgXCIpLmluZGV4T2YoY2xhc3NOYW1lKVxyXG4gICAgICAgIClcclxuICAgIClcclxufSIsImltcG9ydCB7IFJlYWN0LCBNb2RhbEFjdGlvbnMgfSBmcm9tIFwiLi4vd2VicGFja1wiO1xyXG5pbXBvcnQgeyBNb2RhbCwgSGVhZGluZywgQnV0dG9uLCBUZXh0IH0gZnJvbSBcIi4uL2NvbXBvbmVudHNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICh0aXRsZSwgZGVzY3JpcHRpb24sIGJ1dHRvbnMpID0+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgIE1vZGFsQWN0aW9ucy5vcGVuTW9kYWwoKHByb3BzKSA9PiA8TW9kYWwuTW9kYWxSb290IHsuLi5wcm9wc30+XHJcbiAgICAgICAgICAgIDxNb2RhbC5Nb2RhbEhlYWRlciBzZXBhcmF0b3I9e2ZhbHNlfT5cclxuICAgICAgICAgICAgICAgIDxIZWFkaW5nIHZhcmlhbnQ9XCJoZWFkaW5nLWxnL21lZGl1bVwiPnt0aXRsZX08L0hlYWRpbmc+XHJcbiAgICAgICAgICAgIDwvTW9kYWwuTW9kYWxIZWFkZXI+XHJcbiAgICAgICAgICAgIDxNb2RhbC5Nb2RhbENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICA8VGV4dD57ZGVzY3JpcHRpb259PC9UZXh0PlxyXG4gICAgICAgICAgICA8L01vZGFsLk1vZGFsQ29udGVudD5cclxuICAgICAgICAgICAgPE1vZGFsLk1vZGFsRm9vdGVyPlxyXG4gICAgICAgICAgICAgICAge2J1dHRvbnMubWFwKGJ1dHRvbiA9PiA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBidXR0b24uYWN0aW9uKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMub25DbG9zZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoYnV0dG9uKVxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9e2J1dHRvbi5jb2xvciA/PyBCdXR0b24uQ29sb3JzLkJSQU5EfVxyXG4gICAgICAgICAgICAgICAgICAgIGxvb2s9e2J1dHRvbi5sb29rID8/IEJ1dHRvbi5Mb29rcy5GSUxMRUR9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge2J1dHRvbi50ZXh0fVxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+KX1cclxuICAgICAgICAgICAgPC9Nb2RhbC5Nb2RhbEZvb3Rlcj5cclxuICAgICAgICA8L01vZGFsLk1vZGFsUm9vdD4pXHJcbiAgICB9KVxyXG59IiwiaW1wb3J0IHsgZmluZEJ5UHJvcHMsIF8gfSBmcm9tIFwiLi4vLi4vd2VicGFja1wiO1xyXG5pbXBvcnQgeyBtZXNzYWdlQ2FjaGUgfSBmcm9tIFwiLi4vbWVzc2FnZXNcIjtcclxuXHJcbmNvbnN0IHsgZ2V0TWVzc2FnZXM6IGRpc2NvcmRHZXRNZXNzYWdlcyB9ID0gLyojX19QVVJFX18qL2ZpbmRCeVByb3BzKFxyXG5cdFwiZ2V0TWVzc2FnZXNcIixcclxuXHRcImdldE1lc3NhZ2VcIlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0TWVzc2FnZXMoY2hhbm5lbElEKSB7XHJcblx0Y29uc3QgbWVzc2FnZXMgPSBfLm1lcmdlKFxyXG5cdFx0Xy5rZXlCeShkaXNjb3JkR2V0TWVzc2FnZXMoY2hhbm5lbElEKS5fYXJyYXksIFwiaWRcIiksXHJcblx0XHRtZXNzYWdlQ2FjaGVbY2hhbm5lbElEXSA/PyB7fVxyXG5cdCk7XHJcblx0cmV0dXJuIChtZXNzYWdlQ2FjaGVbY2hhbm5lbElEXSA9IG1lc3NhZ2VzKTtcclxufVxyXG4iLCJpbXBvcnQgeyBmaW5kQnlQcm9wcywgXyB9IGZyb20gXCIuLi8uLi93ZWJwYWNrXCI7XHJcbmltcG9ydCB7IG1lc3NhZ2VDYWNoZSB9IGZyb20gXCIuLi9tZXNzYWdlc1wiO1xyXG5cclxuY29uc3QgeyBnZXRNZXNzYWdlOiBkaXNjb3JkR2V0TWVzc2FnZSB9ID0gLyojX19QVVJFX18qL2ZpbmRCeVByb3BzKFxyXG5cdFwiZ2V0TWVzc2FnZXNcIixcclxuXHRcImdldE1lc3NhZ2VcIlxyXG4pO1xyXG5jb25zdCB7IGdldE1lc3NhZ2VCeVJlZmVyZW5jZSB9ID0gLyojX19QVVJFX18qL2ZpbmRCeVByb3BzKFwiZ2V0TWVzc2FnZUJ5UmVmZXJlbmNlXCIpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0TWVzc2FnZShjaGFubmVsSUQsIG1lc3NhZ2VJRCkge1xyXG5cdHJldHVybiBfLnNldChcclxuXHRcdG1lc3NhZ2VDYWNoZSxcclxuXHRcdFtjaGFubmVsSUQsIG1lc3NhZ2VJRF0sXHJcblx0XHRkaXNjb3JkR2V0TWVzc2FnZShjaGFubmVsSUQsIG1lc3NhZ2VJRCkgPz9cclxuXHRcdFx0Z2V0TWVzc2FnZUJ5UmVmZXJlbmNlKHtcclxuXHRcdFx0XHRtZXNzYWdlX2lkOiBtZXNzYWdlSUQsXHJcblx0XHRcdFx0Y2hhbm5lbF9pZDogY2hhbm5lbElELFxyXG5cdFx0XHR9KS5tZXNzYWdlID8/XHJcblx0XHRcdG1lc3NhZ2VDYWNoZVtjaGFubmVsSURdPy5bbWVzc2FnZUlEXVxyXG5cdClbY2hhbm5lbElEXVttZXNzYWdlSURdO1xyXG59XHJcbiIsImltcG9ydCB7IGZpbmRCeVByb3BzLCBmaW5kQnlQcm90b3R5cGUsIF8gfSBmcm9tIFwiLi4vLi4vd2VicGFja1wiO1xyXG5pbXBvcnQgeyBtZXNzYWdlQ2FjaGUsIGdldE1lc3NhZ2UgfSBmcm9tIFwiLi4vbWVzc2FnZXNcIjtcclxuXHJcbmNvbnN0IHsgRW5kcG9pbnRzIH0gPSAvKiNfX1BVUkVfXyovZmluZEJ5UHJvcHMoXCJFbmRwb2ludHNcIik7XHJcbmNvbnN0IFVzZXIgPSAvKiNfX1BVUkVfXyovZmluZEJ5UHJvdG90eXBlKFwidGFnXCIpO1xyXG5jb25zdCBUaW1lc3RhbXAgPSAvKiNfX1BVUkVfXyovZmluZEJ5UHJvdG90eXBlKFwidG9EYXRlXCIsIFwibW9udGhcIik7XHJcbmNvbnN0IE1lc3NhZ2UgPSAvKiNfX1BVUkVfXyovZmluZEJ5UHJvdG90eXBlKFwiaXNFZGl0ZWRcIik7XHJcbmNvbnN0IERpc2NvcmRBUEkgPSAvKiNfX1BVUkVfXyovZmluZEJ5UHJvcHMoXCJnZXRBUElCYXNlVVJMXCIpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZmV0Y2hNZXNzYWdlKGNoYW5uZWxJRCwgbWVzc2FnZUlEKSB7XHJcblx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHRcdGNvbnN0IG1lc3NhZ2UgPSBnZXRNZXNzYWdlKGNoYW5uZWxJRCwgbWVzc2FnZUlEKTtcclxuXHJcblx0XHRpZiAobWVzc2FnZSkgcmV0dXJuIHJlc29sdmUobWVzc2FnZSk7XHJcblxyXG5cdFx0RGlzY29yZEFQSS5nZXQoe1xyXG5cdFx0XHR1cmw6IEVuZHBvaW50cy5NRVNTQUdFUyhjaGFubmVsSUQpLFxyXG5cdFx0XHRxdWVyeToge1xyXG5cdFx0XHRcdGxpbWl0OiAxMDAsXHJcblx0XHRcdFx0YXJvdW5kOiBtZXNzYWdlSUQsXHJcblx0XHRcdH0sXHJcblx0XHR9KVxyXG5cdFx0XHQudGhlbigocmVzKSA9PiB7XHJcblx0XHRcdFx0aWYgKHJlcy5zdGF0dXMgIT0gMjAwKSByZXR1cm4gcmVqZWN0KCk7XHJcblx0XHRcdFx0Zm9yIChsZXQgbSBvZiByZXMuYm9keSkge1xyXG5cdFx0XHRcdFx0bS5hdXRob3IgPSBuZXcgVXNlcihtLmF1dGhvcik7XHJcblx0XHRcdFx0XHRtLnRpbWVzdGFtcCA9IG5ldyBUaW1lc3RhbXAobS50aW1lc3RhbXApO1xyXG5cdFx0XHRcdFx0bSA9IG5ldyBNZXNzYWdlKG0pO1xyXG5cdFx0XHRcdFx0Xy5zZXQobWVzc2FnZUNhY2hlLCBbbS5jaGFubmVsX2lkLCBtLmlkXSwgbSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGNvbnN0IGZvdW5kTWVzc2FnZSA9IG1lc3NhZ2VDYWNoZVtjaGFubmVsSURdPy5bbWVzc2FnZUlEXTtcclxuXHRcdFx0XHRpZiAoZm91bmRNZXNzYWdlKSByZXNvbHZlKGZvdW5kTWVzc2FnZSk7XHJcblx0XHRcdFx0cmVqZWN0KCk7XHJcblx0XHRcdH0pXHJcblx0XHRcdC5jYXRjaCgocmVzKSA9PiB7XHJcblx0XHRcdFx0Ly8gbG9nZ2VyLmVycm9yKHJlcyk7XHJcblx0XHRcdFx0aWYgKHJlcy5zdGF0dXMgIT0gNDAzKSByZXR1cm4gcmVqZWN0KCk7XHJcblx0XHRcdH0pO1xyXG5cdH0pO1xyXG59XHJcbiIsImltcG9ydCB7IGZpbmRCeVByb3BzIH0gZnJvbSBcIi4uLy4uL3dlYnBhY2tcIjtcclxuaW1wb3J0IHsgcmVyZW5kZXJNZXNzYWdlIH0gZnJvbSBcIi4uL21lc3NhZ2VzXCI7XHJcblxyXG5jb25zdCB7IGdldE1lc3NhZ2VzOiBkaXNjb3JkR2V0TWVzc2FnZXMgfSA9IC8qI19fUFVSRV9fKi9maW5kQnlQcm9wcyhcclxuXHRcImdldE1lc3NhZ2VzXCIsXHJcblx0XCJnZXRNZXNzYWdlXCJcclxuKTtcclxuY29uc3QgeyBnZXRDaGFubmVsSWQgfSA9IC8qI19fUFVSRV9fKi9maW5kQnlQcm9wcyhcImdldENoYW5uZWxJZFwiKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlcmVuZGVyQWxsTWVzc2FnZXMocHJvcHMgPSB7fSkge1xyXG5cdGNvbnN0IG1lc3NhZ2VzID0gZGlzY29yZEdldE1lc3NhZ2VzKGdldENoYW5uZWxJZCgpKS5fYXJyYXk7XHJcblx0Zm9yIChjb25zdCBtZXNzYWdlIG9mIG1lc3NhZ2VzKSB7XHJcblx0XHRyZXJlbmRlck1lc3NhZ2UobWVzc2FnZSwgcHJvcHMpO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBmaW5kQnlQcm9wcyB9IGZyb20gXCIuLi8uLi93ZWJwYWNrXCI7XHJcbmltcG9ydCB7IHVwZGF0ZU1lc3NhZ2UgfSBmcm9tIFwiLi4vbWVzc2FnZXNcIjtcclxuXHJcbmNvbnN0IHsgZ2V0TWVzc2FnZTogZGlzY29yZEdldE1lc3NhZ2UgfSA9IC8qI19fUFVSRV9fKi9maW5kQnlQcm9wcyhcclxuXHRcImdldE1lc3NhZ2VzXCIsXHJcblx0XCJnZXRNZXNzYWdlXCJcclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlcmVuZGVyTWVzc2FnZShpZE9yTWVzc2FnZSwgcHJvcHMgPSB7fSkge1xyXG5cdGxldCBtZXNzYWdlID1cclxuXHRcdHR5cGVvZiBpZE9yTWVzc2FnZSA9PT0gXCJzdHJpbmdcIlxyXG5cdFx0XHQ/IGRpc2NvcmRHZXRNZXNzYWdlKGlkT3JNZXNzYWdlKVxyXG5cdFx0XHQ6IGlkT3JNZXNzYWdlO1xyXG5cdGlmICghbWVzc2FnZSkgcmV0dXJuO1xyXG5cdG1lc3NhZ2UgPSB7XHJcblx0XHRpZDogbWVzc2FnZS5pZCxcclxuXHRcdGNoYW5uZWxfaWQ6IG1lc3NhZ2UuY2hhbm5lbF9pZCxcclxuXHRcdGNvbnRlbnQ6IG1lc3NhZ2UuY29udGVudCxcclxuXHR9O1xyXG5cdHVwZGF0ZU1lc3NhZ2UobWVzc2FnZSwgcHJvcHMpO1xyXG59XHJcbiIsImltcG9ydCB7IGZpbmRCeVByb3BzIH0gZnJvbSBcIi4uLy4uL3dlYnBhY2tcIjtcclxuXHJcbmNvbnN0IEZsdXhEaXNwYXRjaGVyID0gLyojX19QVVJFX18qL2ZpbmRCeVByb3BzKFwiZGlzcGF0Y2hcIiwgXCJkaXJ0eURpc3BhdGNoXCIpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXBkYXRlTWVzc2FnZShtZXNzYWdlLCBwcm9wcyA9IHt9KSB7XHJcblx0Rmx1eERpc3BhdGNoZXIuZGlydHlEaXNwYXRjaCh7XHJcblx0XHQuLi5wcm9wcyxcclxuXHRcdHR5cGU6IFwiTUVTU0FHRV9VUERBVEVcIixcclxuXHRcdG1lc3NhZ2UsXHJcblx0fSk7XHJcbn1cclxuIiwiZXhwb3J0IGxldCBtZXNzYWdlQ2FjaGUgPSB7fTtcclxuXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZ2V0TWVzc2FnZXMgfSBmcm9tIFwiLi9nZXRNZXNzYWdlc1wiO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGdldE1lc3NhZ2UgfSBmcm9tIFwiLi9nZXRNZXNzYWdlXCI7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZmV0Y2hNZXNzYWdlIH0gZnJvbSBcIi4vZmV0Y2hNZXNzYWdlXCI7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgcmVyZW5kZXJBbGxNZXNzYWdlcyB9IGZyb20gXCIuL3JlcmVuZGVyQWxsTWVzc2FnZXNcIjtcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyByZXJlbmRlck1lc3NhZ2UgfSBmcm9tIFwiLi9yZXJlbmRlck1lc3NhZ2VcIjtcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyB1cGRhdGVNZXNzYWdlIH0gZnJvbSBcIi4vdXBkYXRlTWVzc2FnZVwiO1xyXG4iLCJpbXBvcnQgeyBSZWFjdCwgTW9kYWxBY3Rpb25zIH0gZnJvbSBcIi4uL3dlYnBhY2tcIjtcclxuaW1wb3J0ICogYXMgc2V0dGluZ3MgZnJvbSBcIi4uL3NldHRpbmdzXCI7XHJcbmltcG9ydCB7IE1hcmtkb3duLCBNb2RhbCwgRmxleCwgSGVhZGluZywgVGV4dCB9IGZyb20gXCIuLi9jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7IENoYW5nZWxvZywgQ2hhbmdlbG9nTW9kYWwgfSBmcm9tIFwiLi4vY2xhc3Nlc1wiO1xyXG5pbXBvcnQgKiBhcyBjb25maWcgZnJvbSBcIkBpdHRhaS9jb25maWdcIlxyXG5pbXBvcnQgeyBqb2luQ2xhc3NlcyB9IGZyb20gXCIuLi91dGlsaXRpZXNcIlxyXG5leHBvcnQgY29uc3QgcmVuZGVyQ2hhbmdlbG9nQ29udGVudCA9IChjb250ZW50KSA9PiB7XHJcbiAgICByZXR1cm4gPD5cclxuICAgICAgICB7T2JqZWN0LmVudHJpZXMoY29udGVudCkubWFwKChbdGl0bGUsIHsgdHlwZSwgaXRlbXMgfV0pID0+IDxkaXYgY2xhc3NOYW1lPXtDaGFuZ2Vsb2dNb2RhbC5jb250ZW50fT5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT17am9pbkNsYXNzZXMoQ2hhbmdlbG9nW3R5cGVdLCBDaGFuZ2Vsb2cubWFyZ2luVG9wKX0+e3RpdGxlfTwvaDE+XHJcbiAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgIHtpdGVtcy5tYXAoaXRlbSA9PiA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1hcmtkb3duPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7aXRlbX1cclxuICAgICAgICAgICAgICAgICAgICA8L01hcmtkb3duPlxyXG4gICAgICAgICAgICAgICAgPC9saT4pfVxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2Pil9XHJcbiAgICA8Lz5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IG9wZW5DaGFuZ2Vsb2dNb2RhbCA9IChjaGFuZ2Vsb2cgPSBzZXR0aW5nc0NoYW5nZWxvZykgPT4ge1xyXG4gICAgY29uc3QgeyBjaGFuZ2Vsb2c6IHNldHRpbmdzQ2hhbmdlbG9nLCBtYW5pZmVzdCB9ID0gY29uZmlnO1xyXG4gICAgTW9kYWxBY3Rpb25zLm9wZW5Nb2RhbCgocHJvcHMpID0+IDxNb2RhbC5Nb2RhbFJvb3Qgey4uLnByb3BzfSBzaXplPXtNb2RhbC5Nb2RhbFNpemUuU01BTEx9IGNsYXNzTmFtZT17Q2hhbmdlbG9nTW9kYWwubW9kYWx9PlxyXG4gICAgICAgIDxNb2RhbC5Nb2RhbEhlYWRlciBzZXBhcmF0b3I9e2ZhbHNlfT5cclxuICAgICAgICAgICAgPEZsZXg+XHJcbiAgICAgICAgICAgICAgICA8RmxleC5DaGlsZCBncm93PXsxfSBzaHJpbms9ezF9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxIZWFkaW5nIHZhcmlhbnQ9XCJoZWFkaW5nLWxnL21lZGl1bVwiPnttYW5pZmVzdC5uYW1lfSAtIHttYW5pZmVzdC52ZXJzaW9ufTwvSGVhZGluZz5cclxuICAgICAgICAgICAgICAgICAgICB7Y2hhbmdlbG9nLmRhdGUgJiYgPFRleHQgY2xhc3NOYW1lPXtDaGFuZ2Vsb2cuZGF0ZX0gc2l6ZT17VGV4dC5TaXplcy5TSVpFXzEyfT57Y2hhbmdlbG9nLmRhdGV9PC9UZXh0Pn1cclxuICAgICAgICAgICAgICAgIDwvRmxleC5DaGlsZD5cclxuICAgICAgICAgICAgICAgIDxNb2RhbC5Nb2RhbENsb3NlQnV0dG9uIG9uQ2xpY2s9e3Byb3BzLm9uQ2xvc2V9Lz5cclxuICAgICAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgIDwvTW9kYWwuTW9kYWxIZWFkZXI+XHJcbiAgICAgICAgPE1vZGFsLk1vZGFsQ29udGVudD5cclxuICAgICAgICAgICAge2NoYW5nZWxvZy5pbWFnZSAmJiA8aW1nIGNsYXNzTmFtZT17Q2hhbmdlbG9nLnZpZGVvfSBzcmM9e2NoYW5nZWxvZy5pbWFnZX0gd2lkdGg9XCI0NTFcIiAvPn1cclxuICAgICAgICAgICAge3JlbmRlckNoYW5nZWxvZ0NvbnRlbnQoY2hhbmdlbG9nLmNvbnRlbnRzKX1cclxuICAgICAgICA8L01vZGFsLk1vZGFsQ29udGVudD5cclxuICAgIDwvTW9kYWwuTW9kYWxSb290PilcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGhhc1NlZW5DaGFuZ2Vsb2cgPSAoKSA9PiBzZXR0aW5ncy5nZXQoYF9faXR0YWlfY2hhbmdlbG9nXyR7bWFuaWZlc3QudmVyc2lvbn1gKVxyXG5leHBvcnQgY29uc3Qgc2V0U2VlbkNoYW5nZWxvZyA9IChzZXQpID0+IHNldHRpbmdzLnNldChgX19pdHRhaV9jaGFuZ2Vsb2dfJHttYW5pZmVzdC52ZXJzaW9ufWAsIHNldCkiLCJpbXBvcnQgeyBsb2csIGRlYnVnLCB3YXJuLCBlcnJvciB9IGZyb20gXCIuLi9sb2dnZXJcIjtcclxuaW1wb3J0ICogYXMgY29uZmlnIGZyb20gXCJAaXR0YWkvY29uZmlnXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAvKipcclxuICogVGhlIHBsdWdpbiBjbGFzcyBmb3IgdGhlIHJ1bm5pbmcgY2xpZW50IG1vZC5cclxuICogQG5hbWUgUGx1Z2luXHJcbiAqIEBtZW1iZXJvZiBtb2R1bGU6ZW50aXRpZXNcclxuICovIGNsYXNzIFBsdWdpbiB7XHJcblxyXG5cdGZyaWVuZGx5TmFtZSA9IGNvbmZpZy5tYW5pZmVzdC5uYW1lXHJcblxyXG5cdHN0YXJ0KCkge31cclxuXHRzdG9wKCkge31cclxuXHJcblx0c2V0U2V0dGluZ3NQYW5lbChjb21wb25lbnQpIHtcclxuXHRcdHRoaXMuX19pdHRhaUludGVybmFsUGx1Z2luLnNldFNldHRpbmdzUGFuZWwoY29tcG9uZW50KTtcclxuXHR9XHJcblxyXG5cdHJlbW92ZVNldHRpbmdzUGFuZWwoKSB7XHJcblx0XHR0aGlzLl9faXR0YWlJbnRlcm5hbFBsdWdpbi5yZW1vdmVTZXR0aW5nc1BhbmVsKCk7XHJcblx0fVxyXG5cclxuXHRsb2coLi4uYXJncykge1xyXG5cdFx0bG9nKC4uLmFyZ3MpO1xyXG5cdH1cclxuXHRkZWJ1ZyguLi5hcmdzKSB7XHJcblx0XHRkZWJ1ZyguLi5hcmdzKTtcclxuXHR9XHJcblx0d2FybiguLi5hcmdzKSB7XHJcblx0XHR3YXJuKC4uLmFyZ3MpO1xyXG5cdH1cclxuXHRlcnJvciguLi5hcmdzKSB7XHJcblx0XHRlcnJvciguLi5hcmdzKTtcclxuXHR9XHJcbn0iLCJpbXBvcnQgeyBwYXRjaCB9IGZyb20gXCIuLi9wYXRjaGVyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAvKipcclxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgVGhlIG5hbWUgb2YgdGhlIHBhdGNoLiBGb3IgZGVidWdnaW5nLlxyXG4gKiBAcGFyYW0ge2FueX0gb2JqZWN0IFRoZSBvYmplY3QgdGhhdCB0aGUgZnVuY3Rpb24gaXMgaW4uXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBmdW5jdGlvbk5hbWUgVGhlIG5hbWUgb2YgdGhlIGZ1bmN0aW9uIHRvIHBhdGNoLlxyXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBwYXRjaEZ1bmN0aW9uIFRoZSBjb2RlIHRvIHBhdGNoIGludG8gdGhlIGZ1bmN0aW9uLlxyXG4gKiBAcmV0dXJucyB7b2JqZWN0fSB7QGxpbmsgbW9kdWxlOnBhdGNoZXIucGF0Y2h+cGF0Y2hEYXRhfVxyXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnBhdGNoZXJcclxuICogQHR1dG9yaWFsIHBhdGNoaW5nQmVmb3JlXHJcbiAqLyBmdW5jdGlvbiBiZWZvcmUobmFtZSwgb2JqZWN0LCBmdW5jdGlvbk5hbWUsIHBhdGNoRnVuY3Rpb24pIHtcclxuXHRyZXR1cm4gcGF0Y2gobmFtZSwgb2JqZWN0LCBmdW5jdGlvbk5hbWUsIFwiYmVmb3JlXCIsIHBhdGNoRnVuY3Rpb24pO1xyXG59XHJcbiIsImltcG9ydCB7IHBhdGNoIH0gZnJvbSBcIi4uL3BhdGNoZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IC8qKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBUaGUgbmFtZSBvZiB0aGUgcGF0Y2guIEZvciBkZWJ1Z2dpbmcuXHJcbiAqIEBwYXJhbSB7YW55fSBvYmplY3QgVGhlIG9iamVjdCB0aGF0IHRoZSBmdW5jdGlvbiBpcyBpbi5cclxuICogQHBhcmFtIHtzdHJpbmd9IGZ1bmN0aW9uTmFtZSBUaGUgbmFtZSBvZiB0aGUgZnVuY3Rpb24gdG8gcGF0Y2guXHJcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IHBhdGNoRnVuY3Rpb24gVGhlIGNvZGUgdG8gcGF0Y2ggaW50byB0aGUgZnVuY3Rpb24uXHJcbiAqIEByZXR1cm5zIHtPYmplY3R9IHtAbGluayBtb2R1bGU6cGF0Y2hlci5wYXRjaH5wYXRjaERhdGF9XHJcbiAqIEBtZW1iZXJvZiBtb2R1bGU6cGF0Y2hlclxyXG4gKiBAdHV0b3JpYWwgcGF0Y2hpbmdJbnN0ZWFkXHJcbiAqLyBmdW5jdGlvbiBpbnN0ZWFkKG5hbWUsIG9iamVjdCwgZnVuY3Rpb25OYW1lLCBwYXRjaEZ1bmN0aW9uKSB7XHJcblx0cmV0dXJuIHBhdGNoKG5hbWUsIG9iamVjdCwgZnVuY3Rpb25OYW1lLCBcImluc3RlYWRcIiwgcGF0Y2hGdW5jdGlvbik7XHJcbn1cclxuIiwiaW1wb3J0IHsgcGF0Y2ggfSBmcm9tIFwiLi4vcGF0Y2hlclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgLyoqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBwYXRjaC4gRm9yIGRlYnVnZ2luZy5cclxuICogQHBhcmFtIHthbnl9IG9iamVjdCBUaGUgb2JqZWN0IHRoYXQgdGhlIGZ1bmN0aW9uIGlzIGluLlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gZnVuY3Rpb25OYW1lIFRoZSBuYW1lIG9mIHRoZSBmdW5jdGlvbiB0byBwYXRjaC5cclxuICogQHBhcmFtIHtmdW5jdGlvbn0gcGF0Y2hGdW5jdGlvbiBUaGUgY29kZSB0byBwYXRjaCBpbnRvIHRoZSBmdW5jdGlvbi5cclxuICogQHJldHVybnMge29iamVjdH0ge0BsaW5rIG1vZHVsZTpwYXRjaGVyLnBhdGNofnBhdGNoRGF0YX1cclxuICogQG1lbWJlcm9mIG1vZHVsZTpwYXRjaGVyXHJcbiAqIEB0dXRvcmlhbCBwYXRjaGluZ0FmdGVyXHJcbiAqLyBmdW5jdGlvbiBhZnRlcihuYW1lLCBvYmplY3QsIGZ1bmN0aW9uTmFtZSwgcGF0Y2hGdW5jdGlvbikge1xyXG5cdHJldHVybiBwYXRjaChuYW1lLCBvYmplY3QsIGZ1bmN0aW9uTmFtZSwgXCJhZnRlclwiLCBwYXRjaEZ1bmN0aW9uKTtcclxufVxyXG4iLCJpbXBvcnQgeyBwYXRjaGVzIH0gZnJvbSBcIi4uL3BhdGNoZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IC8qKlxyXG4gKiBVbnBhdGNoZXMgYWxsIG9mIHRoZSBwYXRjaGVzIHNwZWNpZmllZCwgb3IgYWxsIG9mIHRoZW0gaWYgbm9uZSBhcmUgc3BlY2lmaWVkLlxyXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnBhdGNoZXJcclxuICogQHBhcmFtIHtzdHJpbmdbXX0gW3VucGF0Y2hlcz17QGxpbmsgbW9kdWxlOnBhdGNoZXIucGF0Y2hlc31dIEFuIGFycmF5IHBhdGNoIG5hbWVzLlxyXG4gKi8gZnVuY3Rpb24gdW5wYXRjaEFsbCh1bnBhdGNoZXMpIHtcclxuXHRpZiAoIUFycmF5LmlzQXJyYXkodW5wYXRjaGVzKSkgdW5wYXRjaGVzID0gcGF0Y2hlcztcclxuXHRmb3IgKGNvbnN0IG9iamVjdCBvZiBPYmplY3QudmFsdWVzKHVucGF0Y2hlcykpIHtcclxuXHRcdGZvciAoY29uc3QgZnVuY3Qgb2YgT2JqZWN0LnZhbHVlcyhvYmplY3QpKSB7XHJcblx0XHRcdGZvciAoY29uc3QgcGF0Y2ggb2YgZnVuY3QucGF0Y2hlcykge1xyXG5cdFx0XHRcdHBhdGNoLnVucGF0Y2goKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgKiBhcyBsb2dnZXIgZnJvbSBcIi4uL2xvZ2dlclwiO1xyXG5pbXBvcnQgeyByYW5kb21TdHJpbmcgfSBmcm9tIFwiLi4vdXRpbGl0aWVzXCI7XHJcbmltcG9ydCB7IHBhdGNoZXMgfSBmcm9tIFwiLi4vcGF0Y2hlclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgLyoqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBwYXRjaC4gRm9yIGRlYnVnZ2luZy5cclxuICogQHBhcmFtIHthbnl9IG9iamVjdCBUaGUgb2JqZWN0IHRoYXQgdGhlIGZ1bmN0aW9uIGlzIGluLlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gZnVuY3Rpb25OYW1lIFRoZSBuYW1lIG9mIHRoZSBmdW5jdGlvbiB0byBwYXRjaC5cclxuICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgVGhlIHR5cGUgb2YgcGF0Y2ggdG8gYXBwbHkuIGBiZWZvcmVgLCBgaW5zdGVhZGAsIGBhZnRlcmAuXHJcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IHBhdGNoRnVuY3Rpb24gVGhlIGNvZGUgdG8gcGF0Y2ggaW50byB0aGUgZnVuY3Rpb24uXHJcbiAqIEByZXR1cm5zIHtvYmplY3R9IHtAbGluayBtb2R1bGU6dXRpbHMvcGF0Y2hlci5wYXRjaH5wYXRjaERhdGF9XHJcbiAqIEBtZW1iZXJvZiBtb2R1bGU6cGF0Y2hlclxyXG4gKiBAdHV0b3JpYWwgcGF0Y2hpbmdcclxuICovIGZ1bmN0aW9uIHBhdGNoKG5hbWUsIG9iamVjdCwgZnVuY3Rpb25OYW1lLCB0eXBlLCBwYXRjaEZ1bmN0aW9uKSB7XHJcblx0Y29uc3QgaWQgPSBvYmplY3QuX19pdHRhaV9fID8/IHJhbmRvbVN0cmluZygyNSwgT2JqZWN0LmtleXMocGF0Y2hlcykpO1xyXG5cdG9iamVjdC5fX2l0dGFpX18gPSBvYmplY3QuX19pdHRhaV9fID8/IGlkO1xyXG5cdGlmICghcGF0Y2hlc1tpZF0pIHBhdGNoZXNbaWRdID0ge307XHJcblxyXG5cdC8qKlxyXG5cdCAqIEBtZW1iZXJvZiBtb2R1bGU6cGF0Y2hlclxyXG5cdCAqIEBwcm9wIHtzdHJpbmd9IG5hbWUgVGhlIG5hbWUgb2YgdGhlIGZ1bmN0aW9uIGJlaW5nIHBhdGNoZWQuXHJcblx0ICogQHByb3Age3N0cmluZ30gdHlwZSBUaGUgdHlwZSBvZiB0aGUgcGF0Y2guXHJcblx0ICogQHByb3Age2Z1bmN0aW9ufSBwYXRjaEZ1bmN0aW9uIFRoZSBvcmlnaW5hbCBmdW5jdGlvbi5cclxuXHQgKiBAcHJvcCB7ZnVuY3Rpb259IHVucGF0Y2ggVGhlIGZ1bmN0aW9uIHRvIGNhbGwgdG8gdW5wYXRjaC5cclxuXHQgKi9cclxuXHRjb25zdCBwYXRjaERhdGEgPSB7XHJcblx0XHRuYW1lLFxyXG5cdFx0dHlwZSxcclxuXHRcdHBhdGNoRnVuY3Rpb24sXHJcblx0XHR1bnBhdGNoOiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdHRyeSB7XHJcblx0XHRcdFx0Y29uc3QgcGF0Y2hJbmRleCA9IHBhdGNoZXNbaWRdW2Z1bmN0aW9uTmFtZV0ucGF0Y2hlcy5pbmRleE9mKHRoaXMpO1xyXG5cdFx0XHRcdGlmIChwYXRjaEluZGV4ID09PSAtMSlcclxuXHRcdFx0XHRcdHRocm93IFwiQ291bGRuJ3QgZmluZCB0aGUgcGF0Y2guIFRoaXMgcHJvYmFibHkgaGFwcGVuZWQgYmVjYXVzZSB0aGUgb2JqZWN0IHdhcyB0YW1wZXJlZCB3aXRoLiBEb24ndCBkbyB0aGF0LlwiO1xyXG5cdFx0XHRcdC8vIERlbGV0ZSBwYXRjaC5cclxuXHRcdFx0XHRwYXRjaGVzW2lkXVtmdW5jdGlvbk5hbWVdLnBhdGNoZXMuc3BsaWNlKHBhdGNoSW5kZXgsIDEpO1xyXG5cdFx0XHRcdC8vIENsZWFuIHVwIHRoZSBvYmplY3QgaWYgdGhlcmUgYXJlIG5vIHBhdGNoZXMgbGVmdC5cclxuXHRcdFx0XHRpZiAocGF0Y2hlc1tpZF1bZnVuY3Rpb25OYW1lXS5wYXRjaGVzLmxlbmd0aCA9PT0gMCkge1xyXG5cdFx0XHRcdFx0Ly8gUmVzdG9yZSBvcmlnaW5hbCBmdW5jdGlvbi5cclxuXHRcdFx0XHRcdG9iamVjdFtmdW5jdGlvbk5hbWVdID0gcGF0Y2hlc1tpZF1bZnVuY3Rpb25OYW1lXS5vcmlnaW5hbDtcclxuXHRcdFx0XHRcdGRlbGV0ZSBwYXRjaGVzW2lkXVtmdW5jdGlvbk5hbWVdO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAoIU9iamVjdC5rZXlzKHBhdGNoZXNbaWRdKS5sZW5ndGgpIHtcclxuXHRcdFx0XHRcdGRlbGV0ZSBwYXRjaGVzW2lkXTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gY2F0Y2ggKGUpIHtcclxuXHRcdFx0XHRsb2dnZXIuZXJyb3IoYEZhaWxlZCB0byB1bnBhdGNoICR7bmFtZX0uYCwgZSk7XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0fTtcclxuXHJcblx0aWYgKCFwYXRjaGVzW2lkXVtmdW5jdGlvbk5hbWVdKSB7XHJcblx0XHRwYXRjaGVzW2lkXVtmdW5jdGlvbk5hbWVdID0ge1xyXG5cdFx0XHRvcmlnaW5hbDogb2JqZWN0W2Z1bmN0aW9uTmFtZV0sXHJcblx0XHRcdHBhdGNoZXM6IFtdLFxyXG5cdFx0fTtcclxuXHJcblx0XHRjb25zdCBwcm9wcyA9IHsgLi4ub2JqZWN0W2Z1bmN0aW9uTmFtZV0gfTtcclxuXHJcblx0XHRvYmplY3RbZnVuY3Rpb25OYW1lXSA9IGZ1bmN0aW9uICguLi5hcmdzKSB7XHJcblx0XHRcdGNvbnN0IGZ1bmN0aW9uRGF0YSA9IHBhdGNoZXNbaWRdW2Z1bmN0aW9uTmFtZV07XHJcblx0XHRcdGNvbnN0IGJlZm9yZXMgPSBmdW5jdGlvbkRhdGEucGF0Y2hlcy5maWx0ZXIoKHApID0+IHAudHlwZSA9PT0gXCJiZWZvcmVcIik7XHJcblx0XHRcdGNvbnN0IGluc3RlYWRzID0gZnVuY3Rpb25EYXRhLnBhdGNoZXMuZmlsdGVyKChwKSA9PiBwLnR5cGUgPT09IFwiaW5zdGVhZFwiKTtcclxuXHRcdFx0Y29uc3QgYWZ0ZXJzID0gZnVuY3Rpb25EYXRhLnBhdGNoZXMuZmlsdGVyKChwKSA9PiBwLnR5cGUgPT09IFwiYWZ0ZXJcIik7XHJcblxyXG5cdFx0XHQvLyBCZWZvcmUgcGF0Y2hlcy5cclxuXHRcdFx0Zm9yIChjb25zdCBiZWZvcmUgb2YgYmVmb3Jlcykge1xyXG5cdFx0XHRcdHRyeSB7XHJcblx0XHRcdFx0XHRjb25zdCBjYWxsYmFjayA9IGJlZm9yZS5wYXRjaEZ1bmN0aW9uKGFyZ3MsIHRoaXMpO1xyXG5cdFx0XHRcdFx0aWYgKGNhbGxiYWNrKSBhcmdzID0gY2FsbGJhY2tcclxuXHRcdFx0XHR9IGNhdGNoIChlKSB7XHJcblx0XHRcdFx0XHRsb2dnZXIuZXJyb3IoYEVycm9yIHJ1bm5pbmcgYmVmb3JlIHBhdGNoICR7bmFtZX0uYCwgZSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyBJbnN0ZWFkIHBhdGNoZXMuXHJcblx0XHRcdGxldCByZXMgPSB7fTtcclxuXHRcdFx0bGV0IHJhbk9uY2UgPSBmYWxzZTtcclxuXHRcdFx0aWYgKGluc3RlYWRzLmxlbmd0aCA9PT0gMCkge1xyXG5cdFx0XHRcdChyZXMgPSBmdW5jdGlvbkRhdGEub3JpZ2luYWwuY2FsbCh0aGlzLCAuLi5hcmdzKSksIChyYW5PbmNlID0gdHJ1ZSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0Ly8gQmFkLCBmaXggbGF0ZXIuXHJcblx0XHRcdFx0Zm9yIChjb25zdCBpbnN0ZWFkIG9mIGluc3RlYWRzKSB7XHJcblx0XHRcdFx0XHQvLyBEbyB0cmFzaCBtZXJnZSB3aXRoIExvZGFzaC5cclxuXHRcdFx0XHRcdHRyeSB7XHJcblx0XHRcdFx0XHRcdChyZXMgPSBnbG9iYWxUaGlzLl8ubWVyZ2UoXHJcblx0XHRcdFx0XHRcdFx0cmVzLFxyXG5cdFx0XHRcdFx0XHRcdGluc3RlYWQucGF0Y2hGdW5jdGlvbihhcmdzLCB0aGlzKSA/PyB7fVxyXG5cdFx0XHRcdFx0XHQpKSxcclxuXHRcdFx0XHRcdFx0XHQocmFuT25jZSA9IHRydWUpO1xyXG5cdFx0XHRcdFx0fSBjYXRjaCAoZSkge1xyXG5cdFx0XHRcdFx0XHRsb2dnZXIuZXJyb3IoYEVycm9yIHJ1bm5pbmcgaW5zdGVhZCBwYXRjaCAke25hbWV9LmAsIGUpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoIXJhbk9uY2UpIHtcclxuXHRcdFx0XHRyZXMgPSBmdW5jdGlvbkRhdGEub3JpZ2luYWwuY2FsbCh0aGlzLCAuLi5hcmdzKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gQWZ0ZXIgcGF0Y2hlcy5cclxuXHRcdFx0Zm9yIChjb25zdCBhZnRlciBvZiBhZnRlcnMpIHtcclxuXHRcdFx0XHR0cnkge1xyXG5cdFx0XHRcdFx0Y29uc3QgY2FsbGJhY2sgPSBhZnRlci5wYXRjaEZ1bmN0aW9uKGFyZ3MsIHJlcywgdGhpcylcclxuXHRcdFx0XHRcdGlmIChjYWxsYmFjaykgcmVzID0gY2FsbGJhY2tcclxuXHRcdFx0XHR9IGNhdGNoIChlKSB7XHJcblx0XHRcdFx0XHRsb2dnZXIuZXJyb3IoYEVycm9yIHJ1bm5pbmcgYWZ0ZXIgcGF0Y2ggJHtuYW1lfS5gLCBlKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHJldHVybiByZXM7XHJcblx0XHR9O1xyXG5cdFx0T2JqZWN0LmFzc2lnbihvYmplY3RbZnVuY3Rpb25OYW1lXSwgcHJvcHMpO1xyXG5cdFx0b2JqZWN0W2Z1bmN0aW9uTmFtZV0udG9TdHJpbmcgPSAoKSA9PlxyXG5cdFx0XHRwYXRjaGVzW2lkXVtmdW5jdGlvbk5hbWVdLm9yaWdpbmFsLnRvU3RyaW5nKCk7XHJcblx0fVxyXG5cdHBhdGNoZXNbaWRdW2Z1bmN0aW9uTmFtZV0ucGF0Y2hlcy5wdXNoKHBhdGNoRGF0YSk7XHJcblxyXG5cdHJldHVybiBwYXRjaERhdGE7XHJcbn1cclxuIiwiLyoqXHJcbiAqIEBtb2R1bGUgcGF0Y2hlclxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBBIGxpc3Qgb2YgdGhlIGN1cnJlbnRseSBwYXRjaGVkIGNvbXBvbmVudHMuXHJcbiAqL1xyXG5leHBvcnQgbGV0IHBhdGNoZXMgPSBbXTtcclxuXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgYmVmb3JlIH0gZnJvbSBcIi4vYmVmb3JlXCI7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaW5zdGVhZCB9IGZyb20gXCIuL2luc3RlYWRcIjtcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBhZnRlciB9IGZyb20gXCIuL2FmdGVyXCI7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdW5wYXRjaEFsbCB9IGZyb20gXCIuL3VucGF0Y2hBbGxcIjtcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBwYXRjaCB9IGZyb20gXCIuL3BhdGNoXCI7XHJcbiIsImltcG9ydCB7IGZpbmRCeVByb3BzIH0gZnJvbSBcIi4uL3dlYnBhY2tcIjtcclxuaW1wb3J0IHsgcmFuZG9tU3RyaW5nIH0gZnJvbSBcIi4uL3V0aWxpdGllc1wiO1xyXG5cclxuY29uc3QgTWVzc2FnZUNyZWF0b3JzID0gZmluZEJ5UHJvcHMoXCJjcmVhdGVCb3RNZXNzYWdlXCIpO1xyXG5jb25zdCBNZXNzYWdlQWN0aW9ucyA9IGZpbmRCeVByb3BzKFwicmVjZWl2ZU1lc3NhZ2VcIik7XHJcbmNvbnN0IEF2YXRhckRlZmF1bHRzID0gZmluZEJ5UHJvcHMoXCJCT1RfQVZBVEFSU1wiKTtcclxuXHJcbmV4cG9ydCBjb25zdCBEZWZhdWx0TWVzc2FnZSA9IHtcclxuICAgIHN0YXRlOiBcIlNFTlRcIixcclxuICAgIGF1dGhvcjogYWRkQm90QXV0aG9yKHtcclxuICAgICAgICBhdmF0YXI6IHsgYXZhdGFySWQ6IFwiaXR0YWlcIiwgaW1hZ2VVcmw6IFwiaHR0cHM6Ly9jZG4uZGlzY29yZGFwcC5jb20vYXZhdGFycy8yNjQwNjI0NTc0NDg3NTkyOTYvMWY5YjE3NDNjZjYyNWNhMmQ1MWVlNTE3YjVlZmQ4YTcud2VicFwiIH0sXHJcbiAgICAgICAgYXV0aG9yOiB7IHVzZXJuYW1lOiBcIkl0dGFpXCIgfVxyXG4gICAgfSksXHJcbiAgICBjb250ZW50OiBcIkhlbGxvISBCeSB0aGUgd2F5LCB5b3UgZm9yZ290IHRvIGFkZCBhIGBcXFwiY29udGVudFxcXCJgIGF0dHJpYnV0ZSB0byB0aGUgbWVzc2FnZSFcIlxyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZEJvdEF1dGhvcih7IGF2YXRhciwgYXV0aG9yIH0pIHtcclxuICAgIGNvbnN0IGF2YXRhcklkID0gYXZhdGFyPy5hdmF0YXJJZCA/PyByYW5kb21TdHJpbmcoMTApXHJcbiAgICBpZiAoQXZhdGFyRGVmYXVsdHM/LkJPVF9BVkFUQVJTICYmICFBdmF0YXJEZWZhdWx0cy5CT1RfQVZBVEFSU1thdmF0YXJJZF0pIHtcclxuICAgICAgICBBdmF0YXJEZWZhdWx0cy5CT1RfQVZBVEFSU1thdmF0YXJJZF0gPSBhdmF0YXIuaW1hZ2VVcmw7XHJcbiAgICB9XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGF2YXRhcjogYXZhdGFySWQsXHJcbiAgICAgICAgaWQ6IGF1dGhvcj8uYXV0aG9ySWQgPz8gcmFuZG9tU3RyaW5nKDEwKSxcclxuICAgICAgICBib3Q6IHRydWUsXHJcbiAgICAgICAgZGlzY3JpbWluYXRvcjogYXV0aG9yPy5kaXNjcmltaW5hdG9yID8/IFwiMDAwMFwiLFxyXG4gICAgICAgIHVzZXJuYW1lOiBhdXRob3I/LnVzZXJuYW1lID8/IFwiQm90VXNlclwiXHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2VuZE1lc3NhZ2UoY2hhbm5lbElkLCBtZXNzYWdlKSB7XHJcbiAgICBNZXNzYWdlQWN0aW9ucy5yZWNlaXZlTWVzc2FnZShcclxuICAgICAgICBjaGFubmVsSWQsXHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgXHJcbiAgICAgICAgICAgIE1lc3NhZ2VDcmVhdG9ycy5jcmVhdGVCb3RNZXNzYWdlKGNoYW5uZWxJZCwgbWVzc2FnZT8uY29udGVudCksXHJcbiAgICAgICAgICAgIERlZmF1bHRNZXNzYWdlLFxyXG4gICAgICAgICAgICBtZXNzYWdlXHJcbiAgICAgICAgKVxyXG4gICAgKTtcclxufTtcclxuXHJcbmNvbnN0IEJvdE1lc3NhZ2UgPSB7IHNlbmRNZXNzYWdlLCBhZGRCb3RBdXRob3IgfTtcclxuZXhwb3J0IGRlZmF1bHQgQm90TWVzc2FnZTsiLCJpbXBvcnQgKiBhcyBwYXRjaGVyIGZyb20gXCIuLi9wYXRjaGVyXCI7XHJcbmltcG9ydCB7IGZpbmRCeVByb3BzLCBmaW5kQnlEaXNwbGF5TmFtZSB9IGZyb20gXCIuLi93ZWJwYWNrXCI7XHJcbmltcG9ydCB7IHJhbmRvbVN0cmluZywgZmluZEluVHJlZSwgZmluZEluUmVhY3RUcmVlIH0gZnJvbSBcIi4uL3V0aWxpdGllc1wiO1xyXG5cclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBib3RNZXNzYWdlIH0gZnJvbSBcIi4vYm90TWVzc2FnZVwiO1xyXG5leHBvcnQgY29uc3QgQ29tbWFuZFR5cGVzID0gT2JqZWN0LmFzc2lnbih7fSwgZmluZEJ5UHJvcHMoXCJBcHBsaWNhdGlvbkNvbW1hbmRUeXBlXCIpLCBmaW5kQnlQcm9wcyhcIkFwcGxpY2F0aW9uQ29tbWFuZFBlcm1pc3Npb25UeXBlXCIpKVxyXG5cclxuY29uc3QgQ29tbWFuZHNNb2R1bGUgPSBmaW5kQnlQcm9wcyhcIkJVSUxUX0lOX0NPTU1BTkRTXCIpO1xyXG5jb25zdCBBcHBsaWNhdGlvbkNvbW1hbmREaXNjb3ZlcnlBcHBsaWNhdGlvbkljb24gPSBmaW5kQnlEaXNwbGF5TmFtZShcclxuXHRcIkFwcGxpY2F0aW9uQ29tbWFuZERpc2NvdmVyeUFwcGxpY2F0aW9uSWNvblwiXHJcbik7XHJcblxyXG5sZXQgaWNvblBhdGNoO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHBhdGNoSWNvbnMoKSB7XHJcblx0aWYgKCFpY29uUGF0Y2gpIHtcclxuXHRcdGljb25QYXRjaCA9IHBhdGNoZXIuYWZ0ZXIoXCJJdHRhaUljb25Db21tYW5kUGF0Y2hcIiwgQXBwbGljYXRpb25Db21tYW5kRGlzY292ZXJ5QXBwbGljYXRpb25JY29uLCBcImRlZmF1bHRcIiwgKGFyZ3MsIHJlcywgX3RoaXMpID0+IHtcclxuXHRcdFx0XHRjb25zdCBwcm9wcyA9IGZpbmRJblJlYWN0VHJlZShyZXMsIChuKSA9PiBuLnNyYyk7XHJcblx0XHRcdFx0Y29uc3Qgc2VjdGlvbiA9IGZpbmRJblRyZWUoYXJncywgKG4pID0+IG4uaWNvbik7XHJcblxyXG5cdFx0XHRcdGlmICghcHJvcHMgfHwgIXNlY3Rpb24gfHwgcHJvcHMuc3JjLmluZGV4T2Yoc2VjdGlvbi5pY29uKSA+IDApXHJcblx0XHRcdFx0XHRyZXR1cm4gcmVzO1xyXG5cclxuXHRcdFx0XHRyZXMucHJvcHMub25DbGljayA9ICgpID0+IHt9O1xyXG5cdFx0XHRcdHByb3BzLnNyYyA9IHNlY3Rpb24uaWNvbjtcclxuXHJcblx0XHRcdFx0cmV0dXJuIHJlcztcclxuXHRcdFx0fVxyXG5cdFx0KTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1bnBhdGNoSWNvbnMoKSB7XHJcblx0aWNvblBhdGNoLnVucGF0Y2goKTtcclxuXHRpY29uUGF0Y2ggPSBudWxsO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQ09NTUFORF9BUkdVTUVOVF9UWVBFUyA9IHtcclxuXHRTVUJfQ09NTUFORDogMSxcclxuXHRTVUJfQ09NTUFORF9HUk9VUDogMixcclxuXHRTVFJJTkc6IDMsXHJcblx0SU5URUdFUjogNCxcclxuXHRCT09MRUFOOiA1LFxyXG5cdFVTRVI6IDYsXHJcblx0Q0hBTk5FTDogNyxcclxuXHRST0xFOiA4LFxyXG59O1xyXG5cclxuZXhwb3J0IGxldCByZWdpc3RlcmVkQ29tbWFuZHMgPSBbXTtcclxuZXhwb3J0IGxldCByZWdpc3RlcmVkU2VjdGlvbnMgPSBbXTtcclxuXHJcbi8qKlxyXG4gKlxyXG4gKiBAcGFyYW0ge29iamVjdH0gaWRcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByZWdpc3RlckNvbW1hbmQoY29tbWFuZCkge1xyXG5cdHBhdGNoSWNvbnMoKTtcclxuXHRjb25zdCBjdXJyZW50SURzID0gQ29tbWFuZHNNb2R1bGUuQlVJTFRfSU5fQ09NTUFORFMubWFwKCh7IGlkIH0pID0+IGlkKTtcclxuXHRpZiAoIWNvbW1hbmQuaWQgPz8gZmFsc2UpIGNvbW1hbmQuaWQgPSByYW5kb21TdHJpbmcoMTAsIGN1cnJlbnRJRHMpO1xyXG5cdGlmIChjdXJyZW50SURzLmluZGV4T2YoY29tbWFuZC5pZCkgPiAtMSlcclxuXHRcdGNvbW1hbmQuaWQgKz0gcmFuZG9tU3RyaW5nKDEwLCBjdXJyZW50SURzKTtcclxuXHJcblx0Y29tbWFuZC5hcHBsaWNhdGlvbklkID8/PSBcIi0xXCI7XHJcblx0Y29tbWFuZC5leGVjdXRlID8/PSAoKCkgPT4ge30pO1xyXG5cdGNvbW1hbmQuZGlzcGxheU5hbWUgPz89IGNvbW1hbmQubmFtZVxyXG5cdGNvbW1hbmQuZGlzcGxheURlc2NyaXB0aW9uID8/PSBjb21tYW5kLmRlc2NyaXB0aW9uXHJcblx0Y29tbWFuZC5vcHRpb25zLm1hcCgob3B0cykgPT4ge1xyXG5cdFx0b3B0cy5kaXNwbGF5TmFtZSA/Pz0gb3B0cy5uYW1lXHJcblx0XHRvcHRzLmRpc3BsYXlEZXNjcmlwdGlvbiA/Pz0gb3B0cy5kZXNjcmlwdGlvblxyXG5cdFx0cmV0dXJuIG9wdHNcclxuXHR9KVxyXG5cclxuXHRDb21tYW5kc01vZHVsZS5CVUlMVF9JTl9DT01NQU5EUy5wdXNoKGNvbW1hbmQpO1xyXG5cdHJlZ2lzdGVyZWRDb21tYW5kcy5wdXNoKGNvbW1hbmQuaWQpO1xyXG5cdHJldHVybiBjb21tYW5kLmlkO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdW5yZWdpc3RlckNvbW1hbmQoaWQpIHtcclxuXHRDb21tYW5kc01vZHVsZS5CVUlMVF9JTl9DT01NQU5EUy5zcGxpY2UoXHJcblx0XHRDb21tYW5kc01vZHVsZS5CVUlMVF9JTl9DT01NQU5EUy5maW5kSW5kZXgoKGNvbW1hbmQpID0+IGNvbW1hbmQuaWQgPT09IGlkKSxcclxuXHRcdDFcclxuXHQpO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiB1bnJlZ2lzdGVyQWxsQ29tbWFuZHMoKSB7XHJcblx0Zm9yIChjb25zdCBjb21tYW5kIG9mIHJlZ2lzdGVyZWRDb21tYW5kcykge1xyXG5cdFx0dW5yZWdpc3RlckNvbW1hbmQoY29tbWFuZCk7XHJcblx0fVxyXG59XHJcblxyXG4vKipcclxuICpcclxuICogQHBhcmFtIHtvYmplY3R9IGlkXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJTZWN0aW9uKHNlY3Rpb24pIHtcclxuXHRwYXRjaEljb25zKCk7XHJcblx0Y29uc3QgY3VycmVudElEcyA9IENvbW1hbmRzTW9kdWxlLkJVSUxUX0lOX1NFQ1RJT05TLm1hcCgoeyBpZCB9KSA9PiBpZCk7XHJcblx0aWYgKCFzZWN0aW9uLmlkID8/IGZhbHNlKSBzZWN0aW9uLmlkID0gcmFuZG9tU3RyaW5nKDEwLCBjdXJyZW50SURzKTtcclxuXHRpZiAoY3VycmVudElEcy5pbmRleE9mKHNlY3Rpb24uaWQpID4gLTEpXHJcblx0XHRzZWN0aW9uLmlkICs9IHJhbmRvbVN0cmluZygxMCwgY3VycmVudElEcyk7XHJcblxyXG5cdHNlY3Rpb24uaXNCdWlsdEluID0gZmFsc2U7XHJcblxyXG5cdENvbW1hbmRzTW9kdWxlLkJVSUxUX0lOX1NFQ1RJT05TLnB1c2goc2VjdGlvbik7XHJcblx0cmVnaXN0ZXJlZFNlY3Rpb25zLnB1c2goc2VjdGlvbi5pZCk7XHJcblx0cmV0dXJuIHNlY3Rpb24uaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1bnJlZ2lzdGVyU2VjdGlvbihpZCkge1xyXG5cdENvbW1hbmRzTW9kdWxlLkJVSUxUX0lOX0NPTU1BTkRTLnNwbGljZShcclxuXHRcdENvbW1hbmRzTW9kdWxlLkJVSUxUX0lOX0NPTU1BTkRTLmZpbmRJbmRleCgoY29tbWFuZCkgPT4gY29tbWFuZC5pZCA9PT0gaWQpLFxyXG5cdFx0MVxyXG5cdCk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHVucmVnaXN0ZXJBbGxTZWN0aW9ucygpIHtcclxuXHRmb3IgKGNvbnN0IGNvbW1hbmQgb2YgcmVnaXN0ZXJlZFNlY3Rpb25zKSB7XHJcblx0XHR1bnJlZ2lzdGVyQ29tbWFuZChjb21tYW5kKTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgZmluZEJ5RGlzcGxheU5hbWUsIGZpbmRCeVByb3BzIH0gZnJvbSBcIi4uL3dlYnBhY2tcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBNZXNzYWdlcyA9IGZpbmRCeVByb3BzKCdnZXRNZXNzYWdlJywgJ2dldE1lc3NhZ2VzJylcclxuZXhwb3J0IGNvbnN0IENoYW5uZWxzID0gZmluZEJ5UHJvcHMoJ2dldENoYW5uZWwnLCAnZ2V0RE1Gcm9tVXNlcklkJylcclxuZXhwb3J0IGNvbnN0IEN1cnJlbnRDaGFubmVscyA9IGZpbmRCeVByb3BzKCdnZXRDaGFubmVsSWQnLCAnZ2V0TGFzdFNlbGVjdGVkQ2hhbm5lbElkJylcclxuZXhwb3J0IGNvbnN0IEd1aWxkcyA9IGZpbmRCeVByb3BzKCdnZXRHdWlsZCcpXHJcbmV4cG9ydCBjb25zdCBDdXJyZW50R3VpbGRzID0gZmluZEJ5UHJvcHMoJ2dldEd1aWxkSWQnLCAnZ2V0TGFzdFNlbGVjdGVkR3VpbGRJZCcpXHJcbmV4cG9ydCBjb25zdCBJbmZvID0gZmluZEJ5UHJvcHMoJ2dldFNlc3Npb25JZCcpXHJcbmV4cG9ydCBjb25zdCBTdGF0dXMgPSBmaW5kQnlQcm9wcygnZ2V0U3RhdHVzJywgJ2dldEFjdGl2aXRpZXMnLCAnZ2V0U3RhdGUnKVxyXG5leHBvcnQgY29uc3QgVXNlcnMgPSBmaW5kQnlQcm9wcygnZ2V0VXNlcicsICdnZXRDdXJyZW50VXNlcicpXHJcbmV4cG9ydCBjb25zdCBVc2VyU2V0dGluZ3MgPSBmaW5kQnlQcm9wcygnZ3VpbGRGb2xkZXJzJywgJ3RoZW1lJylcclxuZXhwb3J0IGNvbnN0IFVzZXJQcm9maWxlID0gZmluZEJ5UHJvcHMoJ2dldFVzZXJQcm9maWxlJylcclxuZXhwb3J0IGNvbnN0IE1lbWJlcnMgPSBmaW5kQnlQcm9wcygnZ2V0TWVtYmVyJylcclxuZXhwb3J0IGNvbnN0IEFjdGl2aXRpZXMgPSBmaW5kQnlQcm9wcygnZ2V0U3RhdHVzJywgJ2dldEFjdGl2aXRpZXMnLCAnZ2V0U3RhdGUnKVxyXG5leHBvcnQgY29uc3QgR2FtZXMgPSBmaW5kQnlQcm9wcygnZ2V0R2FtZScsICdnYW1lcycpXHJcbmV4cG9ydCBjb25zdCBBdXRoID0gZmluZEJ5UHJvcHMoJ2dldElkJywgJ2lzR3Vlc3QnKVxyXG5leHBvcnQgY29uc3QgVHlwaW5nVXNlcnMgPSBmaW5kQnlQcm9wcygnaXNUeXBpbmcnKSIsInZhciBlPVtdLHQ9W107ZnVuY3Rpb24gbihuLHIpe2lmKG4mJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBkb2N1bWVudCl7dmFyIGEscz0hMD09PXIucHJlcGVuZD9cInByZXBlbmRcIjpcImFwcGVuZFwiLGQ9ITA9PT1yLnNpbmdsZVRhZyxpPVwic3RyaW5nXCI9PXR5cGVvZiByLmNvbnRhaW5lcj9kb2N1bWVudC5xdWVyeVNlbGVjdG9yKHIuY29udGFpbmVyKTpkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF07aWYoZCl7dmFyIHU9ZS5pbmRleE9mKGkpOy0xPT09dSYmKHU9ZS5wdXNoKGkpLTEsdFt1XT17fSksYT10W3VdJiZ0W3VdW3NdP3RbdV1bc106dFt1XVtzXT1jKCl9ZWxzZSBhPWMoKTs2NTI3OT09PW4uY2hhckNvZGVBdCgwKSYmKG49bi5zdWJzdHJpbmcoMSkpLGEuc3R5bGVTaGVldD9hLnN0eWxlU2hlZXQuY3NzVGV4dCs9bjphLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKG4pKX1mdW5jdGlvbiBjKCl7dmFyIGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO2lmKGUuc2V0QXR0cmlidXRlKFwidHlwZVwiLFwidGV4dC9jc3NcIiksci5hdHRyaWJ1dGVzKWZvcih2YXIgdD1PYmplY3Qua2V5cyhyLmF0dHJpYnV0ZXMpLG49MDtuPHQubGVuZ3RoO24rKyllLnNldEF0dHJpYnV0ZSh0W25dLHIuYXR0cmlidXRlc1t0W25dXSk7dmFyIGE9XCJwcmVwZW5kXCI9PT1zP1wiYWZ0ZXJiZWdpblwiOlwiYmVmb3JlZW5kXCI7cmV0dXJuIGkuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KGEsZSksZX19ZXhwb3J0e24gYXMgZGVmYXVsdH07XG4iLCJpbXBvcnQgeyBSZWFjdCB9IGZyb20gXCIuLi93ZWJwYWNrXCJcclxuLy9AdHMtaWdub3JlXHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vVG9hc3RXcmFwcGVyLmNzc1wiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHZW5lcmljVG9hc3Qoe1xyXG4gICAgY2hpbGRyZW4sXHJcbn0pIHtcclxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRvYXN0fT57Y2hpbGRyZW59PC9kaXY+XHJcbn1cclxuIiwiLyoqXHJcbiAqIEBtb2R1bGUgY29tcG9uZW50c1xyXG4gKi9cclxuXHJcbmltcG9ydCB7IGZpbmRCeVByb3BzIH0gZnJvbSBcIi4uL3dlYnBhY2tcIlxyXG5pbXBvcnQgeyByYW5kb21TdHJpbmcgfSBmcm9tIFwiLi4vdXRpbGl0aWVzXCJcclxuaW1wb3J0IHsgUmVhY3QgfSBmcm9tIFwiLi4vd2VicGFja1wiXHJcbmltcG9ydCBUb2FzdCBmcm9tIFwiLi9Ub2FzdFdyYXBwZXJcIlxyXG5cclxuY29uc3QgeyBzaG93VG9hc3QsIHBvcFRvYXN0IH0gPSBmaW5kQnlQcm9wcyhcInNob3dUb2FzdFwiKVxyXG5cclxuLyoqXHJcbiAqIFNob3dzIGEgdG9hc3QgdXNpbmcgZGlzY29yZCdzIG93biB0b2FzdCBoYW5kbGVyIHRoYXQgd2FzIGFkZGVkIG9uIGl0cyA3dGggYmlydGhkYXkgZm9yLi4uIGFjaGl2ZW1lbnRzP1xyXG4gKiBAcGFyYW0ge0Z1bmN0aW9uPGltcG9ydCgncmVhY3QnKS5SZWFjdEVsZW1lbnQ8YW55Pj4gfCBzdHJpbmd9IHRleHQgQ29tcG9uZW50IHRvIHJlbmRlclxyXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyBPcHRpb25zIGZvciB0aGUgdG9hc3RcclxuICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zLmlkXSBUaGUgSUQgb2YgdGhlIHRvYXN0LiBJZiBub3QgZ2l2ZW4sIGl0IHdpbGwgYmUgZ2VuZXJhdGVkIG9uZSByYW5kb21seVxyXG4gKiBAcGFyYW0ge251bWJlcn0gW29wdGlvbnMuZHVyYXRpb25dIEhvdyBsb25nIHRoZSB0b2FzdCBzaG91bGQgc3RheSBvbiBzY3JlZW5cclxuICogQHBhcmFtIHtudW1iZXJ9IFtvcHRpb25zLnBvc2l0aW9uID0gMV0gUG9zaXRpb24gb2YgdGhlIHRvYXN0LiAwIGlzIHRvcCwgMSBpcyBib3R0b21cclxuICogQHJldHVybnMge3N0cmluZ30gVGhlIElEIG9mIHRoZSB0b2FzdFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHNob3cgPSAodGV4dCwgb3B0aW9ucykgPT4ge1xyXG4gICAgY29uc3QgdG9hc3RJRCA9IG9wdGlvbnM/LmlkID8/IHJhbmRvbVN0cmluZygxMClcclxuICAgIHNob3dUb2FzdCh7XHJcbiAgICAgICAgaWQ6IHRvYXN0SUQsXHJcbiAgICAgICAgb3B0aW9uczogT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogUE9TSVRJT05TLkJPVFRPTSxcclxuICAgICAgICAgICAgY29tcG9uZW50OiB0eXBlb2YgdGV4dCAhPT0gXCJmdW5jdGlvblwiID8gPFRvYXN0Pnt0ZXh0fTwvVG9hc3Q+IDogdGV4dCgpLFxyXG4gICAgICAgIH0pLFxyXG4gICAgfSlcclxuICAgIHJldHVybiB0b2FzdElEXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZW1vdmVzIGEgdG9hc3RcclxuICogQHBhcmFtIHtzdHJpbmd9IGlkIFRoZSBJRCBvZiB0aGUgdG9hc3RcclxuICovXHJcbmV4cG9ydCBjb25zdCBwb3AgPSAoaWQpID0+IHBvcFRvYXN0KGlkKVxyXG5cclxuZXhwb3J0IGNvbnN0IFRvYXN0V3JhcHBlciA9IFRvYXN0XHJcblxyXG5leHBvcnQgY29uc3QgUE9TSVRJT05TID0ge1xyXG4gICAgVE9QOiAwLFxyXG4gICAgQk9UVE9NOiAxXHJcbn0iLCJpbXBvcnQgKiBhcyBzZXR0aW5ncyBmcm9tIFwiaXR0YWkvc2V0dGluZ3NcIlxyXG5pbXBvcnQgeyBDb25zdGFudHMsIERpc3BhdGNoZXIsIFJlYWN0LCBDb2xvclV0aWxzIH0gZnJvbSBcIml0dGFpL3dlYnBhY2tcIlxyXG5pbXBvcnQgdHlwZSB7IENhdGVnb3J5LCBDb2xvckhleCwgUGlubmVkRE1TIH0gZnJvbSBcIi4uL3R5cGVzXCJcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRBbGwgPSAoKTogUGlubmVkRE1TID0+IHtcclxuICAgIHJldHVybiBzZXR0aW5ncy5nZXQoXCJwaW5uZWRDYXRlZ29yaWVzXCIsIHt9KVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0Q2F0ZWdvcmllcyA9ICgpOiBzdHJpbmdbXSA9PiB7XHJcbiAgICBjb25zdCBwaW5uZWRDYXRlZ29yaWVzID0gT2JqZWN0LmtleXMoZ2V0QWxsKCkpXHJcbiAgICByZXR1cm4gcGlubmVkQ2F0ZWdvcmllc1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0Q2F0ZWdvcnkgPSAoY2F0ZWdvcnk6IHN0cmluZyk6IENhdGVnb3J5ID0+IHtcclxuICAgIHJldHVybiBnZXRBbGwoKVtjYXRlZ29yeV1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHNldFJhdyA9IChzZXR0aW5nOiBQaW5uZWRETVMpID0+IHtcclxuICAgIHNldHRpbmdzLnNldChcInBpbm5lZENhdGVnb3JpZXNcIiwgc2V0dGluZylcclxuICAgIFxyXG4gICAgRGlzcGF0Y2hlci5kaXJ0eURpc3BhdGNoKHsgdHlwZTogXCJQSU5ETVNfQ0hBTkdFX0xJU1RcIiB9KVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgYWRkQ2F0ZWdvcnkgPSAoY2F0ZWdvcnk6IHN0cmluZywgc2V0dGluZ3M6IENhdGVnb3J5ID0ge1xyXG4gICAgY29sb3I6IENvbG9yVXRpbHMuaW50MmhleChDb25zdGFudHMuREVGQVVMVF9ST0xFX0NPTE9SKSxcclxuICAgIHVzZXJzOiBbXSxcclxuICAgIHNob3c6IHRydWVcclxufSkgPT4ge1xyXG4gICAgbGV0IHBpbm5lZENhdGVnb3JpZXMgPSBnZXRBbGwoKVxyXG4gICAgcGlubmVkQ2F0ZWdvcmllc1tjYXRlZ29yeV0gPSBzZXR0aW5nc1xyXG4gICAgXHJcbiAgICBzZXRSYXcocGlubmVkQ2F0ZWdvcmllcylcclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBzZXRDb2xvciA9IChjYXRlZ29yeTogc3RyaW5nLCBjb2xvcjogQ29sb3JIZXgpID0+IHtcclxuICAgIGxldCBwaW5uZWRDYXRlZ29yaWVzID0gZ2V0QWxsKClcclxuICAgICAgICBcclxuICAgIGlmIChwaW5uZWRDYXRlZ29yaWVzW2NhdGVnb3J5XSA9PSBudWxsKSB0aHJvdyBuZXcgRXJyb3IoYENhdGVnb3J5ICR7Y2F0ZWdvcnl9IGRvZXMgbm90IGV4aXN0YClcclxuICAgIHBpbm5lZENhdGVnb3JpZXNbY2F0ZWdvcnldLmNvbG9yID0gY29sb3JcclxuXHJcbiAgICBzZXRSYXcocGlubmVkQ2F0ZWdvcmllcylcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldENvbG9yID0gKGNhdGVnb3J5OiBzdHJpbmcpID0+IHtcclxuICAgIGxldCBwaW5uZWRDYXRlZ29yaWVzID0gZ2V0QWxsKClcclxuXHJcbiAgICBpZiAocGlubmVkQ2F0ZWdvcmllc1tjYXRlZ29yeV0gPT0gbnVsbCkgdGhyb3cgbmV3IEVycm9yKGBDYXRlZ29yeSAke2NhdGVnb3J5fSBkb2VzIG5vdCBleGlzdGApXHJcbiAgICByZXR1cm4gcGlubmVkQ2F0ZWdvcmllc1tjYXRlZ29yeV0uY29sb3IgYXMgQ29sb3JIZXhcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHNldFZpc2liaWxpdHkgPSAoY2F0ZWdvcnk6IHN0cmluZywgdmlzaWJpbGl0eTogYm9vbGVhbikgPT4ge1xyXG4gICAgbGV0IHBpbm5lZENhdGVnb3JpZXMgPSBnZXRBbGwoKVxyXG4gICAgXHJcbiAgICBpZiAocGlubmVkQ2F0ZWdvcmllc1tjYXRlZ29yeV0gPT0gbnVsbCkgdGhyb3cgbmV3IEVycm9yKGBDYXRlZ29yeSAke2NhdGVnb3J5fSBkb2VzIG5vdCBleGlzdGApXHJcbiAgICBwaW5uZWRDYXRlZ29yaWVzW2NhdGVnb3J5XS5zaG93ID0gdmlzaWJpbGl0eVxyXG4gICAgXHJcbiAgICBzZXRSYXcocGlubmVkQ2F0ZWdvcmllcylcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFZpc2liaWxpdHkgPSAoY2F0ZWdvcnk6IHN0cmluZykgPT4ge1xyXG4gICAgbGV0IHBpbm5lZENhdGVnb3JpZXMgPSBnZXRBbGwoKVxyXG5cclxuICAgIGlmIChwaW5uZWRDYXRlZ29yaWVzW2NhdGVnb3J5XSA9PSBudWxsKSB0aHJvdyBuZXcgRXJyb3IoYENhdGVnb3J5ICR7Y2F0ZWdvcnl9IGRvZXMgbm90IGV4aXN0YClcclxuICAgIHJldHVybiBwaW5uZWRDYXRlZ29yaWVzW2NhdGVnb3J5XS5zaG93ID8/IHRydWVcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHJlbmFtZUNhdGVnb3J5ID0gKG9sZENhdGVnb3J5TmFtZTogc3RyaW5nLCBuZXdDYXRlZ29yeU5hbWU6IHN0cmluZykgPT4ge1xyXG4gICAgbGV0IHBpbm5lZENhdGVnb3JpZXMgPSBnZXRBbGwoKVxyXG4gICAgLy8gY29uc29sZS5sb2cocGlubmVkQ2F0ZWdvcmllcylcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwaW5uZWRDYXRlZ29yaWVzLCBuZXdDYXRlZ29yeU5hbWUsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IocGlubmVkQ2F0ZWdvcmllcywgb2xkQ2F0ZWdvcnlOYW1lKSEpO1xyXG4gICAgLy8gY29uc29sZS5sb2cocGlubmVkQ2F0ZWdvcmllcylcclxuICAgIGRlbGV0ZSBwaW5uZWRDYXRlZ29yaWVzW29sZENhdGVnb3J5TmFtZV07XHJcbiAgICAvLyBjb25zb2xlLmxvZyhwaW5uZWRDYXRlZ29yaWVzKVxyXG4gICAgXHJcbiAgICBzZXRSYXcocGlubmVkQ2F0ZWdvcmllcylcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHJlbW92ZUNhdGVnb3J5ID0gKGNhdGVnb3J5OiBzdHJpbmcpID0+IHtcclxuICAgIGxldCBwaW5uZWRDYXRlZ29yaWVzID0gZ2V0QWxsKClcclxuICAgIGlmIChwaW5uZWRDYXRlZ29yaWVzW2NhdGVnb3J5XSA9PSBudWxsKSB0aHJvdyBuZXcgRXJyb3IoYENhdGVnb3J5ICR7Y2F0ZWdvcnl9IGRvZXMgbm90IGV4aXN0YClcclxuICAgIGRlbGV0ZSBwaW5uZWRDYXRlZ29yaWVzW2NhdGVnb3J5XVxyXG4gICAgXHJcbiAgICBzZXRSYXcocGlubmVkQ2F0ZWdvcmllcylcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFVzZXJzID0gKGNhdGVnb3J5OiBzdHJpbmcpID0+IHtcclxuICAgIGNvbnN0IHBpbm5lZENhdGVnb3JpZXMgPSBnZXRBbGwoKVxyXG4gICAgaWYgKHBpbm5lZENhdGVnb3JpZXNbY2F0ZWdvcnldID09IG51bGwpIHRocm93IG5ldyBFcnJvcihgQ2F0ZWdvcnkgJHtjYXRlZ29yeX0gZG9lcyBub3QgZXhpc3RgKVxyXG5cclxuICAgIHJldHVybiBwaW5uZWRDYXRlZ29yaWVzW2NhdGVnb3J5XS51c2Vyc1xyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0VXNlckxpc3QgPSAoY2F0ZWdvcnk6IHN0cmluZywgdXNlckxpc3Q6IHN0cmluZ1tdKSA9PiB7XHJcbiAgICBsZXQgcGlubmVkQ2F0ZWdvcmllcyA9IGdldEFsbCgpXHJcbiAgICBcclxuICAgIHBpbm5lZENhdGVnb3JpZXNbY2F0ZWdvcnldLnVzZXJzID0gdXNlckxpc3RcclxuICAgIFxyXG4gICAgc2V0UmF3KHBpbm5lZENhdGVnb3JpZXMpXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBhZGRVc2VyID0gKGNhdGVnb3J5OiBzdHJpbmcsIHVzZXJJRDogaW1wb3J0KFwiaXR0YWlcIikuVXNlcklEKSA9PiB7XHJcbiAgICBpZiAodHlwZW9mIHVzZXJJRCAhPT0gXCJzdHJpbmdcIikgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIFVzZXIgSURgKVxyXG4gICAgXHJcbiAgICBsZXQgcGlubmVkQ2F0ZWdvcmllcyA9IGdldEFsbCgpXHJcbiAgICBpZiAocGlubmVkQ2F0ZWdvcmllc1tjYXRlZ29yeV0gPT0gbnVsbCkgdGhyb3cgbmV3IEVycm9yKGBDYXRlZ29yeSAke2NhdGVnb3J5fSBkb2VzIG5vdCBleGlzdGApXHJcblxyXG4gICAgbGV0IHVzZXJMaXN0ID0gcGlubmVkQ2F0ZWdvcmllc1tjYXRlZ29yeV0udXNlcnNcclxuICAgIHVzZXJMaXN0LnB1c2godXNlcklEKVxyXG4gICAgXHJcbiAgICBzZXRVc2VyTGlzdChjYXRlZ29yeSwgdXNlckxpc3QpXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCByZW1vdmVVc2VyID0gKGNhdGVnb3J5OiBzdHJpbmcsIHVzZXJJRDogaW1wb3J0KFwiaXR0YWlcIikuVXNlcklEKSA9PiB7XHJcbiAgICBpZiAodHlwZW9mIHVzZXJJRCAhPT0gXCJzdHJpbmdcIikgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIFVzZXIgSURgKVxyXG4gICAgXHJcbiAgICBsZXQgcGlubmVkQ2F0ZWdvcmllcyA9IGdldEFsbCgpXHJcbiAgICBpZiAocGlubmVkQ2F0ZWdvcmllc1tjYXRlZ29yeV0gPT0gbnVsbCkgdGhyb3cgbmV3IEVycm9yKGBDYXRlZ29yeSAke2NhdGVnb3J5fSBkb2VzIG5vdCBleGlzdGApXHJcblxyXG4gICAgbGV0IHVzZXJMaXN0ID0gcGlubmVkQ2F0ZWdvcmllc1tjYXRlZ29yeV0udXNlcnNcclxuICAgIHVzZXJMaXN0ID0gdXNlckxpc3QuZmlsdGVyKCh1c2VyKSA9PiB1c2VyICE9PSB1c2VySUQpXHJcbiAgICBcclxuICAgIHNldFVzZXJMaXN0KGNhdGVnb3J5LCB1c2VyTGlzdClcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGlzVXNlckFkZGVkID0gKHVzZXJJRDogaW1wb3J0KFwiaXR0YWlcIikuVXNlcklEKSA9PiB7XHJcbiAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyhnZXRBbGwoKSkuc29tZSgoeyB1c2VycyB9KSA9PiB1c2Vycy5pbmNsdWRlcyh1c2VySUQpKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0VXNlckNhdGVnb3J5ID0gKHVzZXJJRDogaW1wb3J0KFwiaXR0YWlcIikuVXNlcklEKSA9PiB7XHJcbiAgICBjb25zdCBwaW5uZWRDYXRlZ29yaWVzID0gZ2V0QWxsKClcclxuICAgIGZvciAoY29uc3QgY2F0ZWdvcnlOYW1lIGluIHBpbm5lZENhdGVnb3JpZXMpIHtcclxuICAgICAgICBjb25zdCBjYXRlZ29yeSA9IHBpbm5lZENhdGVnb3JpZXNbY2F0ZWdvcnlOYW1lXVxyXG4gICAgICAgIGlmIChjYXRlZ29yeS51c2Vycy5zb21lKCh1c2VyKSA9PiB1c2VyID09PSB1c2VySUQpKSByZXR1cm4gY2F0ZWdvcnlOYW1lXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB1c2VMaXN0VXBkYXRlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgWywgZm9yY2VVcGRhdGVdID0gUmVhY3QudXNlUmVkdWNlcihuID0+ICFuLCB0cnVlKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGxpc3RlbmVyID0gKCkgPT4gdm9pZCBmb3JjZVVwZGF0ZSgpO1xyXG5cclxuICAgICAgICBEaXNwYXRjaGVyLnN1YnNjcmliZShcIlBJTkRNU19DSEFOR0VfTElTVFwiLCBsaXN0ZW5lcik7XHJcblxyXG4gICAgICAgIHJldHVybiAoKSA9PiBEaXNwYXRjaGVyLnVuc3Vic2NyaWJlKFwiUElORE1TX0NIQU5HRV9MSVNUXCIsIGxpc3RlbmVyKTtcclxuICAgIH0sIFtdKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgZ2V0QWxsLFxyXG4gICAgZ2V0Q2F0ZWdvcmllcyxcclxuICAgIGdldENhdGVnb3J5LFxyXG4gICAgc2V0UmF3LFxyXG4gICAgYWRkQ2F0ZWdvcnksXHJcbiAgICByZW5hbWVDYXRlZ29yeSxcclxuICAgIHJlbW92ZUNhdGVnb3J5LFxyXG4gICAgZ2V0Q29sb3IsXHJcbiAgICBzZXRDb2xvcixcclxuICAgIGdldFZpc2liaWxpdHksXHJcbiAgICBzZXRWaXNpYmlsaXR5LFxyXG4gICAgc2V0VXNlckxpc3QsXHJcbiAgICBhZGRVc2VyLFxyXG4gICAgZ2V0VXNlcnMsXHJcbiAgICByZW1vdmVVc2VyLFxyXG4gICAgaXNVc2VyQWRkZWQsXHJcbiAgICBnZXRVc2VyQ2F0ZWdvcnksXHJcbiAgICB1c2VMaXN0VXBkYXRlXHJcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoYXJyOiBhbnlbXSB8IE9iamVjdCwgZnJvbTogbnVtYmVyLCB0bzogbnVtYmVyKSB7XHJcbiAgICBpZihBcnJheS5pc0FycmF5KGFycikpIHtcclxuICAgICAgICByZXR1cm4gbW92ZUFycmF5KGFyciwgZnJvbSwgdG8pXHJcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBhcnIgPT09IFwib2JqZWN0XCIpIHtcclxuICAgICAgICByZXR1cm4gbW92ZU9iamVjdEtleShhcnIsIGZyb20sIHRvKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbW92ZU9iamVjdEtleShvYmplY3Q6IE9iamVjdCwgZnJvbTogbnVtYmVyIHwgc3RyaW5nLCB0bzogbnVtYmVyKTogT2JqZWN0IHtcclxuICAgIGlmKHR5cGVvZiBmcm9tID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgZnJvbSA9IE9iamVjdC5rZXlzKG9iamVjdCkuZmluZEluZGV4KGtleSA9PiBrZXkgPT09IGZyb20pXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY2hhbmdlZE9yZGVyID0gbW92ZUFycmF5KE9iamVjdC5lbnRyaWVzKG9iamVjdCksIGZyb20sIHRvKVxyXG4gICAgY29uc3QgbmV3T2JqOiBPYmplY3QgPSBjaGFuZ2VkT3JkZXIucmVkdWNlKChhY2MsIFtrZXksIHZhbHVlXSkgPT4ge1xyXG4gICAgICAgIGFjY1trZXldID0gdmFsdWVcclxuICAgICAgICByZXR1cm4gYWNjXHJcbiAgICB9LCB7fSlcclxuICAgIHJldHVybiBuZXdPYmpcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1vdmVBcnJheShhcnI6IGFueVtdLCBmcm9tOiBudW1iZXIsIHRvOiBudW1iZXIpIHtcclxuICAgIGxldCBzYWZlQXJyID0gYXJyXHJcbiAgICBzYWZlQXJyLnNwbGljZSh0bywgMCwgc2FmZUFyci5zcGxpY2UoZnJvbSwgMSlbMF0pXHJcbiAgICByZXR1cm4gc2FmZUFyclxyXG59IiwiaW1wb3J0IHsgc2VhcmNoQ2xhc3NOYW1lTW9kdWxlcyB9IGZyb20gXCJpdHRhaS91dGlsaXRpZXNcIlxyXG5pbXBvcnQgeyBmaW5kQnlQcm9wcyB9IGZyb20gXCJpdHRhaS93ZWJwYWNrXCJcclxuXHJcbmV4cG9ydCBjb25zdCBQcml2YXRlQ2hhbm5lbHNIZWFkZXJDb250YWluZXIgPSBmaW5kQnlQcm9wcyhcInByaXZhdGVDaGFubmVsUmVjaXBpZW50c0ludml0ZUJ1dHRvbkljb25cIikgYXMge1xyXG4gICAgZW1wdHk6IHN0cmluZ1xyXG4gICAgaGVhZGVyVGV4dDogc3RyaW5nXHJcbiAgICBwcml2YXRlQ2hhbm5lbFJlY2lwaWVudHNJbnZpdGVCdXR0b25JY29uOiBzdHJpbmdcclxuICAgIHByaXZhdGVDaGFubmVsc0hlYWRlckNvbnRhaW5lcjogc3RyaW5nXHJcbiAgICBzY3JvbGxlcjogc3RyaW5nXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBETUJ1dHRvbnMgPSBmaW5kQnlQcm9wcyhcImNoYW5uZWxcIiwgXCJsaW5rQnV0dG9uSWNvblwiKSBhcyB7XHJcbiAgICBjaGFubmVsOiBzdHJpbmdcclxuICAgIGZ1bGxXaWR0aDogc3RyaW5nXHJcbiAgICBpbnRlcmFjdGl2ZTogc3RyaW5nXHJcbiAgICBpbnRlcmFjdGl2ZVNlbGVjdGVkOiBzdHJpbmdcclxuICAgIGF2YXRhcldpdGhUZXh0OiBzdHJpbmdcclxuICAgIGxpbms6IHN0cmluZ1xyXG4gICAgbGlua0J1dHRvbjogc3RyaW5nXHJcbiAgICBsaW5rQnV0dG9uSWNvbjogc3RyaW5nXHJcbiAgICBjbG9zZUJ1dHRvbjogc3RyaW5nXHJcbiAgICBjbG9zZUljb246IHN0cmluZ1xyXG4gICAgc3VidGV4dDogc3RyaW5nXHJcbiAgICBhY3Rpdml0eTogc3RyaW5nXHJcbiAgICBhY3Rpdml0eVRleHQ6IHN0cmluZ1xyXG4gICAgYWN0aXZpdHlFbW9qaTogc3RyaW5nXHJcbiAgICBkZWNvcmF0b3I6IHN0cmluZ1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQ2F0ZWdvcnkgPSBmaW5kQnlQcm9wcyhcImFkZEJ1dHRvbkljb25cIiwgXCJjb250YWluZXJEcmFnQWZ0ZXJcIikgYXMge1xyXG4gICAgc3BhY2VCZWZvcmVDYXRlZ29yeTogc3RyaW5nXHJcbiAgICBjb250YWluZXJEZWZhdWx0OiBzdHJpbmdcclxuICAgIGNvbnRhaW5lckRyYWdBZnRlcjogc3RyaW5nXHJcbiAgICBjb250YWluZXJEcmFnQmVmb3JlOiBzdHJpbmdcclxuICAgIGNvbnRhaW5lclVzZXJPdmVyOiBzdHJpbmdcclxuICAgIGRpc2FibGVDbGljazogc3RyaW5nXHJcbiAgICBhZGRCdXR0b246IHN0cmluZ1xyXG4gICAgZm9yY2VWaXNpYmxlOiBzdHJpbmdcclxuICAgIGljb25WaXNpYmlsaXR5OiBzdHJpbmdcclxuICAgIGFkZEJ1dHRvbkljb246IHN0cmluZ1xyXG4gICAgd3JhcHBlcjogc3RyaW5nXHJcbiAgICBjbGlja2FibGU6IHN0cmluZ1xyXG4gICAgY2hpbGRyZW46IHN0cmluZ1xyXG4gICAgbWFpbkNvbnRlbnQ6IHN0cmluZ1xyXG4gICAgaWNvbjogc3RyaW5nXHJcbiAgICBjb2xsYXBzZWQ6IHN0cmluZ1xyXG4gICAgbXV0ZWQ6IHN0cmluZ1xyXG4gICAgbmFtZTogc3RyaW5nXHJcbiAgICBkaXNtaXNzV3JhcHBlcjogc3RyaW5nXHJcbiAgICBkaXNtaXNzQnV0dG9uOiBzdHJpbmdcclxuICAgIGRpc21pc3M6IHN0cmluZ1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgSW50ZXJhY3RpdmVzID0gZmluZEJ5UHJvcHMoXCJpbnRlcmFjdGl2ZVwiLCBcIm11dGVkXCIpIGFzIHtcclxuICAgIHJlc3BvbnNpdmVXaWR0aE1vYmlsZUZpcnN0OiBzdHJpbmdcclxuICAgIGludGVyYWN0aXZlOiBzdHJpbmdcclxuICAgIG11dGVkOiBzdHJpbmdcclxuICAgIHNlbGVjdGVkOiBzdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IERlbGV0ZUFjY291bnRCdXR0b25Sb3cgPSBmaW5kQnlQcm9wcyhcImJ1dHRvbkNvbnRhaW5lclwiLCBcImRlc2NyaXB0aW9uXCIsIFwiZGlzYWJsZUJ1dHRvblwiKSBhcyB7XHJcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nXHJcbiAgICBidXR0b25Db250YWluZXI6IHN0cmluZ1xyXG4gICAgZGlzYWJsZUJ1dHRvbjogc3RyaW5nXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBOYW1lcyA9IGZpbmRCeVByb3BzKFwibmFtZUFuZERlY29yYXRvcnNcIikgYXMge1xyXG4gICAgbXV0ZWQ6IHN0cmluZ1xyXG4gICAgYXZhdGFyOiBzdHJpbmdcclxuICAgIGhpZ2hsaWdodGVkOiBzdHJpbmdcclxuICAgIGxheW91dDogc3RyaW5nXHJcbiAgICBjb250ZW50OiBzdHJpbmdcclxuICAgIG5hbWU6IHN0cmluZ1xyXG4gICAgd3JhcHBlZExheW91dDogc3RyaW5nXHJcbiAgICB3cmFwcGVkTmFtZTogc3RyaW5nXHJcbiAgICBuYW1lQW5kRGVjb3JhdG9yczogc3RyaW5nXHJcbiAgICBzdWJUZXh0OiBzdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFNjcm9sbGluZyA9IGZpbmRCeVByb3BzKFwic2Nyb2xsaW5nXCIsIFwic2Nyb2xsZXJCYXNlXCIpIGFzIHtcclxuICAgIHNjcm9sbGVyQmFzZTogc3RyaW5nXHJcbiAgICB0aGluOiBzdHJpbmdcclxuICAgIGZhZGU6IHN0cmluZ1xyXG4gICAgc2Nyb2xsaW5nOiBzdHJpbmdcclxuICAgIGF1dG86IHN0cmluZ1xyXG4gICAgbm9uZTogc3RyaW5nXHJcbiAgICBjb250ZW50OiBzdHJpbmdcclxuICAgIGRpc2FibGVTY3JvbGxBbmNob3I6IHN0cmluZ1xyXG4gICAgbWFuYWdlZFJlYWN0aXZlU2Nyb2xsZXI6IHN0cmluZ1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgU2VydmVyTWVtYmVycyA9IGZpbmRCeVByb3BzKFwidWktc2Nyb2xsZXItd3JhcFwiKSBhcyB7XHJcbiAgICBzZWFyY2hCYXI6IHN0cmluZ1xyXG4gICAgbWVtYmVyc0hlYWRlcjogc3RyaW5nXHJcbiAgICBcInVpLXNlbGVjdFwiOiBzdHJpbmdcclxuICAgIHNlYXJjaDogc3RyaW5nXHJcbiAgICBkaXZpZGVyOiBzdHJpbmdcclxuICAgIHBydW5lTGluazogc3RyaW5nXHJcbiAgICBtZW1iZXJzQ291bnQ6IHN0cmluZ1xyXG4gICAgbWVtYmVyc0ZpbHRlclBvcG91dDogc3RyaW5nXHJcbiAgICBcInVpLXNjcm9sbGVyLXdyYXBcIjogc3RyaW5nXHJcbiAgICBtZW1iZXI6IHN0cmluZ1xyXG4gICAgYWN0aXZlOiBzdHJpbmdcclxuICAgIG92ZXJmbG93SWNvbjogc3RyaW5nXHJcbiAgICBuYW1lVGFnOiBzdHJpbmdcclxuICAgIG5hbWU6IHN0cmluZ1xyXG4gICAgdGFnOiBzdHJpbmdcclxuICAgIHVzZXJuYW1lOiBzdHJpbmdcclxuICAgIG93bmVySGVscEljb246IHN0cmluZ1xyXG4gICAgcm9sZVdyYXBwZXI6IHN0cmluZ1xyXG4gICAgb3ZlcmZsb3dCdXR0b246IHN0cmluZ1xyXG4gICAgYXZhdGFyOiBzdHJpbmdcclxuICAgIG92ZXJmbG93SWNvbkZnOiBzdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEFjY291bnRDb250cm9sQnV0dG9ucyA9IGZpbmRCeVByb3BzKFwiYnV0dG9uXCIsIFwiZGlzYWJsZWRcIiwgXCJlbmFibGVkXCIpIGFzIHtcclxuICAgIGJ1dHRvbjogc3RyaW5nXHJcbiAgICBlbmFibGVkOiBzdHJpbmdcclxuICAgIGRpc2FibGVkOiBzdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IENvbG9yUGlja2VyID0gZmluZEJ5UHJvcHMoXCJjdXN0b21cIiwgXCJjdXN0b21Db2xvclBpY2tlcklucHV0XCIsIFwiY29sb3JQaWNrZXJSb3dcIikgYXMge1xyXG4gICAgY29udGFpbmVyOiBzdHJpbmdcclxuICAgIGN1c3RvbUNvbnRhaW5lcjogc3RyaW5nXHJcbiAgICBkZWZhdWx0Q29udGFpbmVyOiBzdHJpbmdcclxuICAgIGN1c3RvbTogc3RyaW5nXHJcbiAgICBwcmVzZXQ6IHN0cmluZ1xyXG4gICAgY29sb3JQaWNrZXJDdXN0b206IHN0cmluZ1xyXG4gICAgY3VzdG9tQ29sb3JQaWNrZXJJbnB1dDogc3RyaW5nXHJcbiAgICBpbnB1dDogc3RyaW5nXHJcbiAgICBjb2xvclBpY2tlclJvdzogc3RyaW5nXHJcbiAgICBjb2xvclBpY2tlclN3YXRjaDogc3RyaW5nXHJcbiAgICBkZWZhdWx0OiBzdHJpbmdcclxuICAgIGRpc2FibGVkOiBzdHJpbmdcclxuICAgIGNvbG9yUGlja2VyRHJvcHBlcjogc3RyaW5nXHJcbiAgICBub0NvbG9yOiBzdHJpbmdcclxuICAgIGNvbG9yUGlja2VyRHJvcHBlckZnOiBzdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IE1hcmdpbnMgPSBmaW5kQnlQcm9wcyhcIm1hcmdpbkxhcmdlXCIsIFwibWFyZ2luVG9wMjBcIikgYXMge1xyXG4gICAgbWFyZ2luWFNtYWxsOiBzdHJpbmdcclxuICAgIG1hcmdpblNtYWxsOiBzdHJpbmdcclxuICAgIG1hcmdpbk1lZGl1bTogc3RyaW5nXHJcbiAgICBtYXJnaW5MYXJnZTogc3RyaW5nXHJcbiAgICBtYXJnaW5YTGFyZ2U6IHN0cmluZ1xyXG4gICAgbWFyZ2luUmVzZXQ6IHN0cmluZ1xyXG4gICAgbWFyZ2luVG9wNDogc3RyaW5nXHJcbiAgICBtYXJnaW5Cb3R0b200OiBzdHJpbmdcclxuICAgIG1hcmdpblRvcDg6IHN0cmluZ1xyXG4gICAgbWFyZ2luQm90dG9tODogc3RyaW5nXHJcbiAgICBtYXJnaW5Ub3AyMDogc3RyaW5nXHJcbiAgICBtYXJnaW5Cb3R0b20yMDogc3RyaW5nXHJcbiAgICBtYXJnaW5Ub3A0MDogc3RyaW5nXHJcbiAgICBtYXJnaW5Cb3R0b200MDogc3RyaW5nXHJcbiAgICBtYXJnaW5Ub3A2MDogc3RyaW5nXHJcbiAgICBtYXJnaW5Cb3R0b202MDogc3RyaW5nXHJcbiAgICBtYXJnaW5DZW50ZXJIb3J6OiBzdHJpbmdcclxuICAgIG1hcmdpbkxlZnQ4OiBzdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgUHJpdmF0ZUNoYW5uZWxzSGVhZGVyQ29udGFpbmVyLFxyXG4gICAgRE1CdXR0b25zLFxyXG4gICAgU2VydmVyTWVtYmVycyxcclxuICAgIEFjY291bnRDb250cm9sQnV0dG9ucyxcclxuICAgIENvbG9yUGlja2VyLFxyXG4gICAgTWFyZ2lucyxcclxuICAgIFNjcm9sbGluZyxcclxuICAgIERlbGV0ZUFjY291bnRCdXR0b25Sb3csXHJcbiAgICBOYW1lcyxcclxuICAgIEludGVyYWN0aXZlcyxcclxuICAgIENhdGVnb3J5XHJcbn1cclxuXHJcbi8qIGNvcHkgdHlwZXNcclxuY29uc29sZS5sb2coT2JqZWN0LmtleXMoc2VhcmNoQ2xhc3NOYW1lTW9kdWxlcyhcIm1lbWJlci0yY2oyUElcIikpLmpvaW4oXCI6IHN0cmluZ1xcblwiKSArIFwiOiBzdHJpbmdcIilcclxuKi8iLCJleHBvcnQgZGVmYXVsdCAoLi4uY2xhc3NlczogKHN0cmluZyB8IGFueSlbXSkgPT4gY2xhc3Nlcy5maWx0ZXIocyA9PiB0eXBlb2YgcyA9PT0gJ3N0cmluZycpLmpvaW4oXCIgXCIpIiwiaW1wb3J0IHsgVXNlcklELCBVc2VyT2JqZWN0IH0gZnJvbSBcIml0dGFpXCJcclxuXHJcbmltcG9ydCAqIGFzIHdlYnBhY2sgZnJvbSBcIml0dGFpL3dlYnBhY2tcIlxyXG5jb25zdCB7IFJlYWN0LCBSZWFjdDoge1xyXG4gICAgdXNlU3RhdGUsXHJcbiAgICB1c2VFZmZlY3QsXHJcbn0gfSA9IHdlYnBhY2tcclxuaW1wb3J0IHsgVXNlcnMgfSBmcm9tIFwiaXR0YWkvc3RvcmVzXCJcclxuaW1wb3J0IHsgQXZhdGFyLCBEaXNjb3JkSWNvbiwgVG9vbHRpcENvbnRhaW5lciB9IGZyb20gXCJpdHRhaS9jb21wb25lbnRzXCJcclxuaW1wb3J0IHsgQnV0dG9uLCBUZXh0LCBGbGV4IH0gZnJvbSBcIml0dGFpL2NvbXBvbmVudHNcIlxyXG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi4vLi4vdXRpbHMvY2xhc3Nlc1wiXHJcbi8vQHRzLWlnbm9yZVxyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL1VzZXIuc2Nzc1wiXHJcbmltcG9ydCBqb2luQ2xhc3NlcyBmcm9tIFwiLi4vLi4vdXRpbHMvam9pbkNsYXNzZXNcIlxyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICAgIGlkOiBVc2VySUQsXHJcbiAgICBvbk1vdmU6ICh1cGRuOiBcInVwXCIgfCBcImRvd25cIikgPT4gdm9pZCxcclxuICAgIG9uUmVtb3ZlOiAoKSA9PiB2b2lkLFxyXG4gICAgZGlzYWJsZVVwPzogYm9vbGVhbixcclxuICAgIGRpc2FibGVEb3duPzogYm9vbGVhbixcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oeyBpZCwgb25Nb3ZlLCBvblJlbW92ZSwgZGlzYWJsZVVwID0gZmFsc2UsIGRpc2FibGVEb3duID0gZmFsc2UgfTogUHJvcHMpIHtcclxuICAgIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlPFVzZXJPYmplY3Q+KClcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHVzZXIgPSBVc2Vycy5nZXRVc2VyKGlkKVxyXG4gICAgICAgIGlmICghdXNlcikgdGhyb3cgbmV3IEVycm9yKFwiVXNlciBub3QgZm91bmRcIilcclxuICAgICAgICBzZXRVc2VyKFVzZXJzLmdldFVzZXIoaWQpKVxyXG4gICAgfSlcclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8RmxleFxyXG4gICAgICAgICAgICBhbGlnbj17RmxleC5BbGlnbi5DRU5URVJ9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17am9pbkNsYXNzZXMoY2xhc3Nlcy5TZXJ2ZXJNZW1iZXJzLm1lbWJlciwgc3R5bGVzLndyYXBwZXIpfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuU2VydmVyTWVtYmVycy5hdmF0YXJ9PlxyXG4gICAgICAgICAgICAgICAgPEF2YXRhclxyXG4gICAgICAgICAgICAgICAgICAgIHNyYz17KHVzZXI/LmdldEF2YXRhclVSTChmYWxzZSwgdHJ1ZSkgYXMgc3RyaW5nKT8ucmVwbGFjZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCI/c2l6ZT0xNlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICBzaXplPXtBdmF0YXIuU2l6ZXMuU0laRV80MH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5TZXJ2ZXJNZW1iZXJzLm5hbWVUYWd9IHN0eWxlPXt7IG1hcmdpblJpZ2h0OiBcImF1dG9cIiB9fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLlNlcnZlck1lbWJlcnMubmFtZX0+XHJcbiAgICAgICAgICAgICAgICAgICAge3VzZXI/LnVzZXJuYW1lfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8VGV4dCBjb2xvcj17VGV4dC5Db2xvcnMuTVVURUR9IHNpemU9e1RleHQuU2l6ZXMuU0laRV8xNH0+XHJcbiAgICAgICAgICAgICAgICAgICAgQHt1c2VyPy51c2VybmFtZX0je3VzZXI/LmRpc2NyaW1pbmF0b3J9XHJcbiAgICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8RmxleFxyXG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uPXtGbGV4LkRpcmVjdGlvbi5WRVJUSUNBTH1cclxuICAgICAgICAgICAgICAgIGdyb3c9ezB9XHJcbiAgICAgICAgICAgICAgICBzaHJpbms9ezB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICBzaXplPXtCdXR0b24uU2l6ZXMuSUNPTn1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbk1vdmUoXCJ1cFwiKX1cclxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZVVwfVxyXG4gICAgICAgICAgICAgICAgICAgIGxvb2s9e0J1dHRvbi5Mb29rcy5CTEFOS31cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1tcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3Nlcy5BY2NvdW50Q29udHJvbEJ1dHRvbnMuYnV0dG9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlVXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gY2xhc3Nlcy5BY2NvdW50Q29udHJvbEJ1dHRvbnMuZGlzYWJsZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogY2xhc3Nlcy5BY2NvdW50Q29udHJvbEJ1dHRvbnMuZW5hYmxlZCxcclxuICAgICAgICAgICAgICAgICAgICBdLmpvaW4oXCIgXCIpfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxEaXNjb3JkSWNvbiBuYW1lPVwiQXJyb3dEcm9wVXBcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT17QnV0dG9uLlNpemVzLklDT059XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25Nb3ZlKFwiZG93blwiKX1cclxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZURvd259XHJcbiAgICAgICAgICAgICAgICAgICAgbG9vaz17QnV0dG9uLkxvb2tzLkJMQU5LfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17W1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc2VzLkFjY291bnRDb250cm9sQnV0dG9ucy5idXR0b24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVEb3duXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGNsYXNzZXMuQWNjb3VudENvbnRyb2xCdXR0b25zLmRpc2FibGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGNsYXNzZXMuQWNjb3VudENvbnRyb2xCdXR0b25zLmVuYWJsZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgXS5qb2luKFwiIFwiKX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8RGlzY29yZEljb24gbmFtZT1cIkFycm93RHJvcERvd25cIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICAgICAgPFRvb2x0aXBDb250YWluZXIgdGV4dD1cIkRlbGV0ZVwiPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU9e0J1dHRvbi5TaXplcy5JQ09OfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPXtCdXR0b24uQ29sb3JzLlJFRH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvblJlbW92ZX1cclxuICAgICAgICAgICAgICAgICAgICBsb29rPXtCdXR0b24uTG9va3MuTElOS31cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8RGlzY29yZEljb24gbmFtZT1cIlRyYXNoXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L1Rvb2x0aXBDb250YWluZXI+XHJcbiAgICAgICAgPC9GbGV4PlxyXG4gICAgKVxyXG59IiwiY29uc3QgQ2F0ZWdvcnlWaWV3ID0ge1xyXG4gICAgc2V0dGluZ3NWYWx1ZTogXCJjYXRlZ29yeVwiXHJcbn1cclxuY29uc3QgTWluaW1hbGlzdFZpZXcgPSB7XHJcbiAgICBzZXR0aW5nc1ZhbHVlOiBcIm1pbmltYWxpc3RcIixcclxuICAgIHVzZXJJY29uczogdHJ1ZVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBEZWZhdWx0U2V0dGluZ3M6IHtcclxuICAgICAgICBESVNQTEFZX01PREU6IENhdGVnb3J5Vmlldy5zZXR0aW5nc1ZhbHVlLFxyXG4gICAgICAgIE1pbmltYWxpc3RWaWV3LFxyXG4gICAgICAgIENhdGVnb3J5VmlldyxcclxuICAgICAgICBQSU5fSUNPTjogdHJ1ZSxcclxuICAgICAgICBTVFJFQU1FUl9NT0RFOiB0cnVlXHJcbiAgICB9XHJcbn0iLCJleHBvcnQgeyBkZWZhdWx0IGFzIFNldHRpbmdzIH0gZnJvbSBcIi4vc2V0dGluZ3NcIlxyXG5cclxuZXhwb3J0IGNvbnN0IERJU1BBVENIRVJfUElORE1TX0NIQU5HRV9MSVNUID0gXCJQSU5ETVNfQ0hBTkdFX0xJU1RcIiIsImltcG9ydCB7IFJlYWN0IH0gZnJvbSBcIml0dGFpL3dlYnBhY2tcIlxyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICAgIHJlbmRlckVycm9yPzogc3RyaW5nIHwgUmVhY3QuUmVhY3RFbGVtZW50XHJcbiAgICBjaGlsZHJlbjogYW55XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVycm9yQm91bmRhcnkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHM+IHtcclxuICAgIHN0YXRlID0geyBoYXNFcnJvcjogZmFsc2UgfTtcclxuXHJcbiAgICBjb21wb25lbnREaWRDYXRjaCgpIHsgfVxyXG5cclxuICAgIHN0YXRpYyBnZXREZXJpdmVkU3RhdGVGcm9tRXJyb3IoKSB7IHJldHVybiB7IGhhc0Vycm9yOiB0cnVlIH07IH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuaGFzRXJyb3IpIHJldHVybiAoQm9vbGVhbih0aGlzLnByb3BzLnJlbmRlckVycm9yKSA/IHRoaXMucHJvcHMucmVuZGVyRXJyb3IgOiBudWxsKTtcclxuICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5jaGlsZHJlbjtcclxuICAgIH1cclxufSIsImltcG9ydCAqIGFzIHdlYnBhY2sgZnJvbSBcIml0dGFpL3dlYnBhY2tcIlxyXG5pbXBvcnQgeyBDb2xvckhleCwgQ29sb3JVdGlscywgQ29uc3RhbnRzLCBSZWFjdCB9IGZyb20gXCJpdHRhaS93ZWJwYWNrXCJcclxuaW1wb3J0IHsgQnV0dG9uLCBNb2RhbCwgVGV4dElucHV0LCBGb3JtcywgQ29sb3JQaWNrZXIsIFN3aXRjaEl0ZW0sIFRleHQsIEFuY2hvciB9IGZyb20gXCJpdHRhaS9jb21wb25lbnRzXCI7XHJcbmltcG9ydCBwaW5uZWRETVMgZnJvbSBcIi4uLy4uLy4uL2hhbmRsZXJzL3Bpbm5lZERNU1wiO1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvY2xhc3Nlc1wiXHJcbmltcG9ydCAqIGFzIGNvbnN0YW50cyBmcm9tIFwiLi4vLi4vLi4vY29uc3RhbnRzXCJcclxuaW1wb3J0ICogYXMgc2V0dGluZ3MgZnJvbSBcIml0dGFpL3NldHRpbmdzXCJcclxuLy9AdHMtaWdub3JlXHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vQ2F0ZWdvcnlTZXR0aW5nc01vZGFsLnNjc3NcIlxyXG5pbXBvcnQgRXJyb3JCb3VuZGFyeSBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvRXJyb3JCb3VuZGFyeVwiO1xyXG5jb25zdCB7IEN1c3RvbUNvbG9yQnV0dG9uIH0gPSB3ZWJwYWNrLmZpbmRCeVByb3BzKFwiRGVmYXVsdENvbG9yQnV0dG9uXCIpXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAobW9kYWxQcm9wczogeyB0cmFuc2l0aW9uU3RhdGU6IDEgfCAyIHwgMywgb25DbG9zZTogKCkgPT4gdm9pZCwgY2F0ZWdvcnk6IHN0cmluZ30pIHtcclxuICAgIGNvbnN0IFtuZXdOYW1lLCBzZXROZXdOYW1lXSA9IFJlYWN0LnVzZVN0YXRlKG1vZGFsUHJvcHMuY2F0ZWdvcnkpXHJcbiAgICBjb25zdCBbbmV3Q29sb3IsIHNldE5ld0NvbG9yXSA9IFJlYWN0LnVzZVN0YXRlPENvbG9ySGV4PihwaW5uZWRETVMuZ2V0Q29sb3IobW9kYWxQcm9wcy5jYXRlZ29yeSkpXHJcblxyXG4gICAgcmV0dXJuIDxNb2RhbC5Nb2RhbFJvb3Qgc2l6ZT17TW9kYWwuTW9kYWxTaXplLkRZTkFNSUN9IHsuLi5tb2RhbFByb3BzfT5cclxuICAgICAgICA8TW9kYWwuTW9kYWxIZWFkZXIgc2VwYXJhdG9yPXtmYWxzZX0+XHJcbiAgICAgICAgICAgIDxUZXh0SW5wdXRcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtuZXdOYW1lfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3NldE5ld05hbWV9XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlJlbmFtZVwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy50ZXh0Ym94fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIDwvTW9kYWwuTW9kYWxIZWFkZXI+XHJcbiAgICAgICAgPE1vZGFsLk1vZGFsQ29udGVudD5cclxuICAgICAgICAgICAgPEZvcm1zLkZvcm1JdGVtPlxyXG4gICAgICAgICAgICAgICAgPEZvcm1zLkZvcm1UaXRsZT5Db2xvcjwvRm9ybXMuRm9ybVRpdGxlPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuTWFyZ2lucy5tYXJnaW5Cb3R0b20yMH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEVycm9yQm91bmRhcnlcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyRXJyb3I9ezxUZXh0IGNvbG9yPXtUZXh0LkNvbG9ycy5FUlJPUn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBbiBlcnJvciBoYXBwZW5lZCB3aGlsZSB0cnlpbmcgdG8gbG9hZCB0aGUgQ29sb3JQaWNrZXIuIENoZWNrIDxBbmNob3IgaHJlZj1cImh0dHBzOi8vZ2l0LmNhdHZpYmVycy5tZS9JdHRhaS9pdHRhaS9pc3N1ZXMvOVwiPmh0dHBzOi8vZ2l0LmNhdHZpYmVycy5tZS9JdHRhaS9pdHRhaS9pc3N1ZXMvOTwvQW5jaG9yPiBmb3IgbW9yZSBpbmZvcm1hdGlvbiBhYm91dC48YnIvPjxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcyBvZiBub3csIHlvdSBjYW4gZG8gdGhlc2Ugc3RlcHM6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZXMucHJvcGVyU3BhY2luZ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPi0gUmVtb3ZlIHRoZSBwbHVnaW4gZnJvbSB0aGUgcGx1Z2lucyBmb2xkZXI8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT4tIEdvIHRvIGFueSBzZXJ2ZXIncyBzZXR0aW5nczwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPi0gR28gdG8gXCJSb2xlc1wiPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+LSBDbGljayBvbiBhbnkgcm9sZTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPi0gUHV0IHRoZSBwbHVnaW4gYmFjazwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhpcyB3aWxsIGxvYWQgdGhlIENvbG9yUGlja2VyIGNvbXBvbmVudCBhbmQgdGhlbiBmaXggdGhpcyBlcnJvclxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RleHQ+fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbG9yUGlja2VyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcnM9e0NvbnN0YW50cy5ST0xFX0NPTE9SU31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRDb2xvcj17Q29uc3RhbnRzLkRFRkFVTFRfUk9MRV9DT0xPUn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtDb2xvclV0aWxzLmhleDJpbnQobmV3Q29sb3IpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhjOiBudW1iZXIpID0+IHNldE5ld0NvbG9yKENvbG9yVXRpbHMuaW50MmhleChjKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9FcnJvckJvdW5kYXJ5PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8U3dpdGNoSXRlbVxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXshcGlubmVkRE1TLmdldFZpc2liaWxpdHkobW9kYWxQcm9wcy5jYXRlZ29yeSl9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBwaW5uZWRETVMuc2V0VmlzaWJpbGl0eShtb2RhbFByb3BzLmNhdGVnb3J5LCAhZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3NldHRpbmdzLmdldCgnZGlzcGxheScsIGNvbnN0YW50cy5TZXR0aW5ncy5EZWZhdWx0U2V0dGluZ3MuRElTUExBWV9NT0RFKSA9PT0gY29uc3RhbnRzLlNldHRpbmdzLkRlZmF1bHRTZXR0aW5ncy5NaW5pbWFsaXN0Vmlldy5zZXR0aW5nc1ZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgIG5vdGU9e3NldHRpbmdzLmdldCgnZGlzcGxheScsIGNvbnN0YW50cy5TZXR0aW5ncy5EZWZhdWx0U2V0dGluZ3MuRElTUExBWV9NT0RFKSAmJiBcIkRpc2FibGVkIGJlY2F1c2UgaXQgaXMgdXNpbmcgdGhlIE1pbmltYWxpc3Qgdmlld1wifVxyXG4gICAgICAgICAgICAgICAgPkhpZGUgY29udGVudHM8L1N3aXRjaEl0ZW0+XHJcbiAgICAgICAgICAgIDwvRm9ybXMuRm9ybUl0ZW0+XHJcbiAgICAgICAgPC9Nb2RhbC5Nb2RhbENvbnRlbnQ+XHJcbiAgICAgICAgPE1vZGFsLk1vZGFsRm9vdGVyPlxyXG4gICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChtb2RhbFByb3BzLmNhdGVnb3J5ICE9PSBuZXdOYW1lKSBwaW5uZWRETVMucmVuYW1lQ2F0ZWdvcnkobW9kYWxQcm9wcy5jYXRlZ29yeSwgbmV3TmFtZSlcclxuICAgICAgICAgICAgICAgIHBpbm5lZERNUy5zZXRDb2xvcihtb2RhbFByb3BzLmNhdGVnb3J5LCBuZXdDb2xvcilcclxuICAgICAgICAgICAgICAgIG1vZGFsUHJvcHMub25DbG9zZSgpXHJcbiAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgU2F2ZVxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPEJ1dHRvbiBsb29rPXtCdXR0b24uTG9va3MuTElOS30gY29sb3I9e0J1dHRvbi5Db2xvcnMuV0hJVEV9IG9uQ2xpY2s9e21vZGFsUHJvcHMub25DbG9zZX0+XHJcbiAgICAgICAgICAgICAgICBDYW5jZWxcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9Nb2RhbC5Nb2RhbEZvb3Rlcj5cclxuICAgIDwvTW9kYWwuTW9kYWxSb290PlxyXG59IiwiZXhwb3J0IGRlZmF1bHQgPFR5cGU+KGFycmF5OiBUeXBlW10sIGxpbWl0ID0gNTAsIGZyb20gPSAwKTogVHlwZVtdID0+IGFycmF5LnNsaWNlKGZyb20sIGZyb20gKyBsaW1pdCkiLCJpbXBvcnQgKiBhcyB3ZWJwYWNrIGZyb20gXCJpdHRhaS93ZWJwYWNrXCJcclxuaW1wb3J0IHsgUmVhY3QgfSBmcm9tIFwiaXR0YWkvd2VicGFja1wiXHJcbmltcG9ydCB7IE1vZGFsLCBUZXh0SW5wdXQsIEF2YXRhciwgRmxleCwgVGV4dCB9IGZyb20gXCJpdHRhaS9jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7IENoYW5uZWxzLCBVc2VycyB9IGZyb20gXCJpdHRhaS9zdG9yZXNcIjtcclxuaW1wb3J0IHBpbm5lZERNUyBmcm9tIFwiLi4vLi4vLi4vaGFuZGxlcnMvcGlubmVkRE1TXCI7XHJcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuLi8uLi8uLi91dGlscy9jbGFzc2VzXCJcclxuLy9AdHMtaWdub3JlXHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vQWRkVXNlck1vZGFsLnNjc3NcIlxyXG4vL0B0cy1pZ25vcmVcclxuaW1wb3J0IGNhdGVnb3J5U3R5bGVzIGZyb20gXCIuL0NhdGVnb3J5U2V0dGluZ3NNb2RhbC5zY3NzXCJcclxuaW1wb3J0IGxpbWl0IGZyb20gXCIuLi8uLi8uLi91dGlscy9saW1pdFwiO1xyXG5pbXBvcnQgeyBVc2VySUQsIFVzZXJPYmplY3QgfSBmcm9tIFwiaXR0YWlcIjtcclxuaW1wb3J0IGpvaW5DbGFzc2VzIGZyb20gXCIuLi8uLi8uLi91dGlscy9qb2luQ2xhc3Nlc1wiO1xyXG5cclxuY29uc3QgZG1Vc2VyczogVXNlck9iamVjdFtdID0gQ2hhbm5lbHMuZ2V0U29ydGVkUHJpdmF0ZUNoYW5uZWxzKCkuZmlsdGVyKGNoYW5uZWwgPT4gY2hhbm5lbC5yZWNpcGllbnRzLmxlbmd0aCA9PT0gMSAmJiBjaGFubmVsLnJlY2lwaWVudHNbMF0gIT0gbnVsbCkubWFwKGNoYW5uZWwgPT4gVXNlcnMuZ2V0VXNlcihjaGFubmVsLnJlY2lwaWVudHNbMF0pKVxyXG5cclxuY29uc3QgTUFYX1VTRVJfRElTUExBWSA9IDYwXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAocHJvcHM6IHsgdHJhbnNpdGlvblN0YXRlOiAxIHwgMiB8IDMsIG9uQ2xvc2U6ICgpID0+IHZvaWQsIG9uU2VsZWN0OiAoaWQ6IFVzZXJPYmplY3QpID0+IHZvaWR9KSB7XHJcbiAgICBjb25zdCBbdXNlcnMsIHNldFVzZXJzXSA9IFJlYWN0LnVzZVN0YXRlPFVzZXJPYmplY3RbXT4oW10pXHJcbiAgICBjb25zdCBbc2VhcmNoLCBzZXRTZWFyY2hdID0gUmVhY3QudXNlU3RhdGUoXCJcIilcclxuICAgIFxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBzZWFyY2hSZXN1bHQgPSBkbVVzZXJzLmZpbHRlcih1c2VyID0+ICF1c2VyLmJvdCAmJiB+dXNlci51c2VybmFtZS50b0xvd2VyQ2FzZSgpLmluZGV4T2Yoc2VhcmNoLnRvTG93ZXJDYXNlKCkpKVxyXG4gICAgICAgIGNvbnN0IGxpbWl0ZWRSZXN1bHQgPSBsaW1pdChzZWFyY2hSZXN1bHQsIE1BWF9VU0VSX0RJU1BMQVkpXHJcbiAgICAgICAgc2V0VXNlcnMobGltaXRlZFJlc3VsdClcclxuICAgIH0sIFtzZWFyY2hdKVxyXG5cclxuICAgIHJldHVybiA8TW9kYWwuTW9kYWxSb290IHNpemU9e01vZGFsLk1vZGFsU2l6ZS5EWU5BTUlDfSB7Li4ucHJvcHN9PlxyXG4gICAgICAgIDxNb2RhbC5Nb2RhbEhlYWRlciBzZXBhcmF0b3I9e2ZhbHNlfT5cclxuICAgICAgICAgICAgPFRleHRJbnB1dFxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3NlYXJjaH1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtzZXRTZWFyY2h9XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCBmb3IgdXNlclwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NhdGVnb3J5U3R5bGVzLnRleHRib3h9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9Nb2RhbC5Nb2RhbEhlYWRlcj5cclxuICAgICAgICA8TW9kYWwuTW9kYWxDb250ZW50PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnVzZXJHcmlkfT5cclxuICAgICAgICAgICAgICAgIHt1c2Vycy5tYXAodXNlciA9PiA8VXNlciB1c2VyPXt1c2VyfSBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMub25TZWxlY3QodXNlcilcclxuICAgICAgICAgICAgICAgICAgICBwcm9wcy5vbkNsb3NlKClcclxuICAgICAgICAgICAgICAgIH19IC8+KX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Nb2RhbC5Nb2RhbENvbnRlbnQ+XHJcbiAgICA8L01vZGFsLk1vZGFsUm9vdD5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFVzZXIgPSAoeyB1c2VyLCBvbkNsaWNrIH06IHsgdXNlcjogVXNlck9iamVjdCwgb25DbGljaz86ICgpID0+IHZvaWQgfSkgPT4ge1xyXG4gICAgY29uc3QgaXNBZGRlZCA9IHBpbm5lZERNUy5pc1VzZXJBZGRlZCh1c2VyLmlkKVxyXG4gICAgcmV0dXJuIDxGbGV4IGFsaWduPXtGbGV4LkFsaWduLkNFTlRFUn1cclxuICAgICAgICBjbGFzc05hbWU9e2pvaW5DbGFzc2VzKHN0eWxlcy51c2VyLCBpc0FkZGVkID8gc3R5bGVzLmRpc2FibGVkIDogXCJcIil9XHJcbiAgICAgICAgb25DbGljaz17KCkgPT4geyBpZiAoIWlzQWRkZWQpIG9uQ2xpY2s/LigpfX1cclxuICAgID5cclxuICAgICAgICA8QXZhdGFyXHJcbiAgICAgICAgICAgIHNyYz17KHVzZXIuZ2V0QXZhdGFyVVJMKGZhbHNlLCBmYWxzZSkgYXMgc3RyaW5nKX1cclxuICAgICAgICAgICAgc2l6ZT17QXZhdGFyLlNpemVzLlNJWkVfMTZ9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8VGV4dCBjb2xvcj17VGV4dC5Db2xvcnMuU1RBTkRBUkR9IGNsYXNzTmFtZT17c3R5bGVzLm5hbWV9PlxyXG4gICAgICAgICAgICB7dXNlci51c2VybmFtZX1cclxuICAgICAgICA8L1RleHQ+XHJcbiAgICA8L0ZsZXg+XHJcbn0iLCJpbXBvcnQgKiBhcyB3ZWJwYWNrIGZyb20gXCJpdHRhaS93ZWJwYWNrXCJcclxuaW1wb3J0IHsgUmVhY3QsIENvbG9yVXRpbHMsIE1vZGFsQWN0aW9ucywgQ29uc3RhbnRzIH0gZnJvbSBcIml0dGFpL3dlYnBhY2tcIlxyXG5pbXBvcnQge1xyXG4gICAgQnV0dG9uLFxyXG4gICAgVGV4dElucHV0LFxyXG4gICAgRmxleCxcclxuICAgIERpc2NvcmRJY29uLFxyXG4gICAgQ29sb3JQaWNrZXIsXHJcbiAgICBQb3BvdXQsXHJcbiAgICBUb29sdGlwQ29udGFpbmVyXHJcbn0gZnJvbSBcIml0dGFpL2NvbXBvbmVudHNcIlxyXG5pbXBvcnQgcGlubmVkRE1TLCB7IHVzZUxpc3RVcGRhdGUgfSBmcm9tIFwiLi4vLi4vaGFuZGxlcnMvcGlubmVkRE1TXCJcclxuaW1wb3J0IHsgbW92ZU9iamVjdEtleSwgbW92ZUFycmF5IH0gZnJvbSBcIi4uLy4uL3V0aWxzL21vdmVcIlxyXG5pbXBvcnQgeyBDb2xvckhleCwgUGlubmVkRE1TIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCJcclxuaW1wb3J0IFVzZXIgZnJvbSBcIi4vVXNlclwiXHJcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuLi8uLi91dGlscy9jbGFzc2VzXCJcclxuaW1wb3J0IENoYW5nZUNhdGVnb3J5TmFtZU1vZGFsIGZyb20gXCIuL01vZGFscy9DYXRlZ29yeVNldHRpbmdzTW9kYWxcIlxyXG4vL0B0cy1pZ25vcmVcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9pbmRleC5zY3NzXCJcclxuaW1wb3J0IGpvaW5DbGFzc2VzIGZyb20gXCIuLi8uLi91dGlscy9qb2luQ2xhc3Nlc1wiXHJcbmltcG9ydCBBZGRVc2VyTW9kYWwgZnJvbSBcIi4vTW9kYWxzL0FkZFVzZXJNb2RhbFwiXHJcbmltcG9ydCB7IFVzZXJTZXR0aW5ncyB9IGZyb20gXCJpdHRhaS9zdG9yZXNcIlxyXG5cclxuY29uc3QgTGlzdFNlY3Rpb25JdGVtID0gd2VicGFjay5maW5kQnlEaXNwbGF5TmFtZShcIkxpc3RTZWN0aW9uSXRlbVwiKVxyXG5jb25zdCB7IEVtcHR5U3RhdGVJbWFnZSwgZGVmYXVsdDogRW1wdHlTdGF0ZSwgRW1wdHlTdGF0ZVRleHQgfSA9IHdlYnBhY2suZmluZEJ5UHJvcHMoXCJFbXB0eVN0YXRlSW1hZ2VcIilcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgICBvcGVuZWRDYXRlZ29yeT86IHN0cmluZ1xyXG4gICAgc2hvd0FkZENhdGVnb3J5QnV0dG9uPzogYm9vbGVhblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICh7IG9wZW5lZENhdGVnb3J5LCBzaG93QWRkQ2F0ZWdvcnlCdXR0b24gPSB0cnVlIH06IFByb3BzKSB7XHJcbiAgICB1c2VMaXN0VXBkYXRlKClcclxuICAgIC8vIGNvbnNvbGUubG9nKENvbG9yUGlja2VyKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAge3Nob3dBZGRDYXRlZ29yeUJ1dHRvbiAmJiA8Q3JlYXRlQ2F0ZWdvcnkgLz59XHJcbiAgICAgICAgICAgIHtPYmplY3QuZW50cmllcyhwaW5uZWRETVMuZ2V0QWxsKCkpLm1hcChcclxuICAgICAgICAgICAgICAgIChbY2F0ZWdvcnksIHsgdXNlcnMgfV0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPFVzZXJDYXRlZ29yeSBuYW1lPXtjYXRlZ29yeX0gdXNlcnM9e3VzZXJzfSBpbmRleD17aW5kZXh9IGhpZGRlbj17Y2F0ZWdvcnkgIT09IG9wZW5lZENhdGVnb3J5fSAvPlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQ3JlYXRlQ2F0ZWdvcnkgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbbmV3Q2F0ZWdvcnksIHNldE5ld0NhdGVnb3J5XSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZz4oXCJcIilcclxuICAgIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nPihcIlwiKVxyXG5cclxuICAgIHJldHVybiA8RmxleCBjbGFzc05hbWU9e3N0eWxlcy5jcmVhdGVDYXRlZ29yeX0gYWxpZ249e0ZsZXguQWxpZ24uQ0VOVEVSfT5cclxuICAgICAgICA8VGV4dElucHV0IGNsYXNzTmFtZT17c3R5bGVzLnRleHRib3h9XHJcbiAgICAgICAgICAgIHZhbHVlPXtuZXdDYXRlZ29yeX1cclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOYW1lIGEgbmV3IGNhdGVnb3J5XCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROZXdDYXRlZ29yeShlKX1cclxuICAgICAgICAgICAgZXJyb3I9e2Vycm9yfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChuZXdDYXRlZ29yeSA9PSBcIlwiKSBzZXRFcnJvcihcIlBsZWFzZSBnaXZlIGEgbmFtZVwiKVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNldEVycm9yKFwiXCIpXHJcbiAgICAgICAgICAgICAgICBwaW5uZWRETVMuYWRkQ2F0ZWdvcnkobmV3Q2F0ZWdvcnkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9fT5cclxuICAgICAgICAgICAgQWRkXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICA8L0ZsZXg+XHJcbn1cclxuXHJcbmludGVyZmFjZSBDYXRlZ29yeVByb3BzIHtcclxuICAgIG5hbWU6IHN0cmluZ1xyXG4gICAgdXNlcnM6IHN0cmluZ1tdXHJcbiAgICBpbmRleDogbnVtYmVyLFxyXG4gICAgaGlkZGVuPzogYm9vbGVhblxyXG59XHJcbmV4cG9ydCBjb25zdCBVc2VyQ2F0ZWdvcnkgPSAoeyBuYW1lLCB1c2VycywgaW5kZXgsIGhpZGRlbiA9IHRydWUgfTogQ2F0ZWdvcnlQcm9wcykgPT4ge1xyXG4gICAgY29uc3QgW2hpZGUsIHNldEhpZGVdID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4oaGlkZGVuKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBrZXk9e25hbWV9IGNsYXNzTmFtZT17c3R5bGVzLmNhdGVnb3J5fT5cclxuICAgICAgICAgICAgPENhdGVnb3J5SGVhZGVyIHsuLi57IG5hbWUsIGluZGV4IH19IG9uSGlkZT17KCkgPT4gc2V0SGlkZSghaGlkZSl9IGhpZGRlbj17aGlkZX0gLz5cclxuXHJcbiAgICAgICAgICAgIHshaGlkZSAmJiA8ZGl2IGNsYXNzTmFtZT17am9pbkNsYXNzZXMoc3R5bGVzLnVzZXJMaXN0LCBjbGFzc2VzLlNjcm9sbGluZy5zY3JvbGxlckJhc2UsIGNsYXNzZXMuU2Nyb2xsaW5nLnRoaW4sIGNsYXNzZXMuU2Nyb2xsaW5nLmZhZGUpfT5cclxuICAgICAgICAgICAgICAgIHt1c2Vycy5sZW5ndGggIT09IDAgPyB1c2Vycy5tYXAoKGlkLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxVc2VyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtpZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3ZlPXsodXBkbikgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBpbm5lZERNUy5zZXRVc2VyTGlzdChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vdmVBcnJheShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcnMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleCAtICh1cGRuID09PSBcInVwXCIgPyArMSA6IC0xKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvblJlbW92ZT17KCkgPT4gcGlubmVkRE1TLnJlbW92ZVVzZXIobmFtZSwgaWQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlVXA9e2luZGV4ID09PSAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlRG93bj17aW5kZXggPT09IHVzZXJzLmxlbmd0aCAtIDF9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICkpIDogPD5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIwKSA9PT0gMyAvL2Vhc3RlciBlZ2cgd29vb29vb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyA8aWZyYW1lIHdpZHRoPVwiNTYwXCIgaGVpZ2h0PVwiMzE1XCIgc3JjPVwiaHR0cHM6Ly93d3cueW91dHViZS1ub2Nvb2tpZS5jb20vZW1iZWQvdGpzMnhSMlJacDA/Y29udHJvbHM9MFwiIGFsbG93PVwiY2xpcGJvYXJkLXdyaXRlOyBlbmNyeXB0ZWQtbWVkaWFcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmVtcHR5fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEVtcHR5U3RhdGUgdGhlbWU9e1VzZXJTZXR0aW5ncy50aGVtZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RW1wdHlTdGF0ZUltYWdlIHsuLi57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3aWR0aFwiOiAzNzYsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJoZWlnaHRcIjogMTYyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibGlnaHRTcmNcIjogXCIvYXNzZXRzLzAyNjI1ZWUyOWY4NTFlYzU4OGMyMDIwYTg4ZDgyNjY1LnN2Z1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGFya1NyY1wiOiBcIi9hc3NldHMvYjVlYjJmN2Q2YjNmOGNjOWI2MGJlNGE1ZGNmMjgwMTUuc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RW1wdHlTdGF0ZVRleHQgbm90ZT17PD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGlzIGNhdGVnb3J5IGlzIGVtcHR5LiBPaCBuZXZlcm1pbmQsIHRoZXJlIGlzIFd1bXB1cywgYnV0IGhlIGlzIGFsb25lLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0VtcHR5U3RhdGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8Lz59XHJcbiAgICAgICAgICAgIDwvZGl2Pn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuaW50ZXJmYWNlIEhlYWRlclByb3BzIHtcclxuICAgIG5hbWU6IHN0cmluZ1xyXG4gICAgaW5kZXg6IG51bWJlclxyXG4gICAgaGlkZGVuPzogYm9vbGVhblxyXG4gICAgb25IaWRlOiBGdW5jdGlvblxyXG59XHJcbmNvbnN0IENhdGVnb3J5SGVhZGVyID0gKHsgbmFtZSwgaW5kZXgsIGhpZGRlbiA9IGZhbHNlLCBvbkhpZGUgfTogSGVhZGVyUHJvcHMpID0+IHtcclxuICAgIGNvbnN0IGhhbmRsZUNhdGVnb3J5UG9zID0gKHVwZG46IG51bWJlcikgPT4ge1xyXG4gICAgICAgIC8vIC0xID0gbW92ZSBkb3duIGJ5IG9uZVxyXG4gICAgICAgIC8vICsxID0gbW92ZSB1cCBieSBvbmVcclxuXHJcbiAgICAgICAgY29uc3QgaW5kZXggPSBPYmplY3Qua2V5cyhwaW5uZWRETVMuZ2V0QWxsKCkpLmZpbmRJbmRleChcclxuICAgICAgICAgICAgKGspID0+IGsgPT09IG5hbWVcclxuICAgICAgICApXHJcbiAgICAgICAgcGlubmVkRE1TLnNldFJhdyhcclxuICAgICAgICAgICAgbW92ZU9iamVjdEtleShwaW5uZWRETVMuZ2V0QWxsKCksIGluZGV4LCBpbmRleCAtIHVwZG4pIGFzIFBpbm5lZERNU1xyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gPEZsZXggYWxpZ249e0ZsZXguQWxpZ24uQ0VOVEVSfT5cclxuICAgICAgICA8TGlzdFNlY3Rpb25JdGVtXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17am9pbkNsYXNzZXMoY2xhc3Nlcy5Qcml2YXRlQ2hhbm5lbHNIZWFkZXJDb250YWluZXIucHJpdmF0ZUNoYW5uZWxzSGVhZGVyQ29udGFpbmVyLCBzdHlsZXMuZXhhbXBsZUxpc3RTZWN0aW9uSXRlbSl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8RmxleCBzdHlsZT17eyBjb2xvcjogcGlubmVkRE1TLmdldENvbG9yKG5hbWUpLCBmb250V2VpZ2h0OiBcImJvbGRcIiB9fSBhbGlnbj17RmxleC5BbGlnbi5DRU5URVJ9IG9uQ2xpY2s9e29uSGlkZX0+XHJcbiAgICAgICAgICAgICAgICA8RGlzY29yZEljb24gbmFtZT1cIkRyb3Bkb3duQXJyb3dcIiBjbGFzc05hbWU9e2pvaW5DbGFzc2VzKHN0eWxlcy5kcm9wZG93bkFycm93LCBoaWRkZW4gPyBzdHlsZXMuaGlkZGVuIDogdW5kZWZpbmVkKX0gLz5cclxuICAgICAgICAgICAgICAgIHtuYW1lfVxyXG4gICAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgPC9MaXN0U2VjdGlvbkl0ZW0+XHJcblxyXG4gICAgICAgIDxQb3BvdXQgcG9zaXRpb249e1BvcG91dC5Qb3NpdGlvbnMuQk9UVE9NfSByZW5kZXJQb3BvdXQ9eyhwcm9wcykgPT4gPGRpdiB7Li4ucHJvcHN9PlxyXG4gICAgICAgICAgICA8Q2hhbmdlQ2F0ZWdvcnlOYW1lTW9kYWwgdHJhbnNpdGlvblN0YXRlPXsxfSBvbkNsb3NlPXtwcm9wcy5jbG9zZVBvcG91dH0gY2F0ZWdvcnk9e25hbWV9IC8+XHJcbiAgICAgICAgPC9kaXY+fT5cclxuICAgICAgICAgICAgeyhwb3BvdXQpID0+IDxUb29sdGlwQ29udGFpbmVyIHRleHQ9XCJFZGl0IGNhdGVnb3J5XCI+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHsuLi5wb3BvdXR9XHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT17QnV0dG9uLlNpemVzLklDT059XHJcbiAgICAgICAgICAgICAgICAgICAgbG9vaz17QnV0dG9uLkxvb2tzLkJMQU5LfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17am9pbkNsYXNzZXMoY2xhc3Nlcy5BY2NvdW50Q29udHJvbEJ1dHRvbnMuYnV0dG9uLCBjbGFzc2VzLkFjY291bnRDb250cm9sQnV0dG9ucy5lbmFibGVkKX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8RGlzY29yZEljb24gbmFtZT1cIlBlbmNpbFwiIHN0eWxlPXt7IHdpZHRoOiBcIjIwcHhcIiwgaGVpZ2h0OiBcIjIwcHhcIiB9fSAvPlxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvVG9vbHRpcENvbnRhaW5lcj59XHJcbiAgICAgICAgPC9Qb3BvdXQ+XHJcblxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IFwiYXV0b1wiIH19IC8+XHJcblxyXG4gICAgICAgIDxQb3BvdXQgcG9zaXRpb249e1BvcG91dC5Qb3NpdGlvbnMuTEVGVH0gcmVuZGVyUG9wb3V0PXsocHJvcHMpID0+IDxkaXYgey4uLnByb3BzfT5cclxuICAgICAgICAgICAgPEFkZFVzZXJNb2RhbCB0cmFuc2l0aW9uU3RhdGU9ezF9IG9uQ2xvc2U9e3Byb3BzLmNsb3NlUG9wb3V0fSBvblNlbGVjdD17KHVzZXIpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh1c2VyLmlkICE9IG51bGwpIHBpbm5lZERNUy5hZGRVc2VyKG5hbWUsIHVzZXIuaWQpXHJcbiAgICAgICAgICAgIH19IC8+XHJcbiAgICAgICAgPC9kaXY+fT5cclxuICAgICAgICAgICAgeyhwb3BvdXQpID0+IDxUb29sdGlwQ29udGFpbmVyIHRleHQ9XCJBZGQgYSBuZXcgcGVyc29uXCI+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHsuLi5wb3BvdXR9XHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT17QnV0dG9uLlNpemVzLklDT059XHJcbiAgICAgICAgICAgICAgICAgICAgbG9vaz17QnV0dG9uLkxvb2tzLkJMQU5LfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17am9pbkNsYXNzZXMoY2xhc3Nlcy5BY2NvdW50Q29udHJvbEJ1dHRvbnMuYnV0dG9uLCBjbGFzc2VzLkFjY291bnRDb250cm9sQnV0dG9ucy5lbmFibGVkKX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8RGlzY29yZEljb24gbmFtZT1cIlBlcnNvbkFkZFwiIHN0eWxlPXt7IHdpZHRoOiBcIjIwcHhcIiwgaGVpZ2h0OiBcIjIwcHhcIiB9fSAvPlxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvVG9vbHRpcENvbnRhaW5lcj59XHJcbiAgICAgICAgPC9Qb3BvdXQ+XHJcblxyXG4gICAgICAgIDxGbGV4XHJcbiAgICAgICAgICAgIGRpcmVjdGlvbj17RmxleC5EaXJlY3Rpb24uVkVSVElDQUx9XHJcbiAgICAgICAgICAgIGdyb3c9ezB9XHJcbiAgICAgICAgICAgIHNocmluaz17MH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgIHNpemU9e0J1dHRvbi5TaXplcy5JQ09OfVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlQ2F0ZWdvcnlQb3MoKzEpfVxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2luZGV4ID09PSAwfVxyXG4gICAgICAgICAgICAgICAgbG9vaz17QnV0dG9uLkxvb2tzLkJMQU5LfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtqb2luQ2xhc3NlcyhjbGFzc2VzLkFjY291bnRDb250cm9sQnV0dG9ucy5idXR0b24sIGluZGV4ID09PSAwID8gY2xhc3Nlcy5BY2NvdW50Q29udHJvbEJ1dHRvbnMuZGlzYWJsZWQgOiBjbGFzc2VzLkFjY291bnRDb250cm9sQnV0dG9ucy5lbmFibGVkKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPERpc2NvcmRJY29uIG5hbWU9XCJBcnJvd0Ryb3BVcFwiIC8+XHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICBzaXplPXtCdXR0b24uU2l6ZXMuSUNPTn1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNhdGVnb3J5UG9zKC0xKX1cclxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXtpbmRleCA9PT0gcGlubmVkRE1TLmdldENhdGVnb3JpZXMoKS5sZW5ndGggLSAxfVxyXG4gICAgICAgICAgICAgICAgbG9vaz17QnV0dG9uLkxvb2tzLkJMQU5LfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtqb2luQ2xhc3NlcyhjbGFzc2VzLkFjY291bnRDb250cm9sQnV0dG9ucy5idXR0b24sIGluZGV4ID09PSBwaW5uZWRETVMuZ2V0Q2F0ZWdvcmllcygpLmxlbmd0aCAtIDEgPyBjbGFzc2VzLkFjY291bnRDb250cm9sQnV0dG9ucy5kaXNhYmxlZCA6IGNsYXNzZXMuQWNjb3VudENvbnRyb2xCdXR0b25zLmVuYWJsZWQpfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8RGlzY29yZEljb24gbmFtZT1cIkFycm93RHJvcERvd25cIiAvPlxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgPFRvb2x0aXBDb250YWluZXIgdGV4dD1cIkRlbGV0ZVwiPlxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICBzaXplPXtCdXR0b24uU2l6ZXMuSUNPTn1cclxuICAgICAgICAgICAgICAgIGNvbG9yPXtCdXR0b24uQ29sb3JzLlJFRH1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHBpbm5lZERNUy5yZW1vdmVDYXRlZ29yeShuYW1lKX1cclxuICAgICAgICAgICAgICAgIGxvb2s9e0J1dHRvbi5Mb29rcy5MSU5LfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8RGlzY29yZEljb24gbmFtZT1cIlRyYXNoXCIgLz5cclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9Ub29sdGlwQ29udGFpbmVyPlxyXG4gICAgPC9GbGV4PlxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IChqc29uOiBzdHJpbmcpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgSlNPTi5wYXJzZShqc29uKTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0gY2F0Y2ggKGUpIHt9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn0iLCJpbXBvcnQgeyBEaXNwYXRjaGVyLCBSZWFjdCwgTW9kYWxBY3Rpb25zIH0gZnJvbSBcIml0dGFpL3dlYnBhY2tcIlxyXG5pbXBvcnQgeyBDYXRlZ29yeSwgU3dpdGNoSXRlbSwgRm9ybXMsIEJ1dHRvbiwgRmxleCwgUmFkaW9Hcm91cCwgTW9kYWwsIEhlYWRpbmcsIFRleHQgfSBmcm9tIFwiaXR0YWkvY29tcG9uZW50c1wiXHJcbmltcG9ydCBVc2VyTGlzdFNldHRpbmdzIGZyb20gXCIuL1VzZXJMaXN0U2V0dGluZ3NcIlxyXG5pbXBvcnQgKiBhcyBzZXR0aW5ncyBmcm9tIFwiaXR0YWkvc2V0dGluZ3NcIlxyXG5pbXBvcnQgKiBhcyB0b2FzdCBmcm9tIFwiaXR0YWkvdG9hc3RcIlxyXG5pbXBvcnQgKiBhcyBjb25zdGFudHMgZnJvbSBcIi4uL2NvbnN0YW50c1wiXHJcbi8vQHRzLWlnbm9yZVxyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL1NldHRpbmdzLnNjc3NcIlxyXG5pbXBvcnQgaXNWYWxpZEpTT04gZnJvbSBcIi4uL3V0aWxzL2lzVmFsaWRKU09OXCJcclxuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4uL3V0aWxzL2NsYXNzZXNcIlxyXG5pbXBvcnQgam9pbkNsYXNzZXMgZnJvbSBcIi4uL3V0aWxzL2pvaW5DbGFzc2VzXCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xyXG4gICAgY29uc3QgWywgZm9yY2VVcGRhdGVdID0gUmVhY3QudXNlUmVkdWNlcigodikgPT4gIXYsIGZhbHNlKVxyXG5cclxuICAgIHJldHVybiA8PlxyXG4gICAgICAgIDxDYXRlZ29yeSB0aXRsZT1cIkxpc3RlZCBjYXRlZ29yaWVzXCIgZGVzY3JpcHRpb249XCJDb25maWd1cmUgdGhlIGZvbGRlcnMgYW5kIGFkZCBvciBjaGFuZ2UgdGhlIGxpc3RlZCB1c2Vyc1wiIGljb249XCJQZXJzb25cIj5cclxuICAgICAgICAgICAgPFVzZXJMaXN0U2V0dGluZ3MgLz5cclxuICAgICAgICA8L0NhdGVnb3J5PlxyXG5cclxuICAgICAgICA8Q2F0ZWdvcnkgdGl0bGU9XCJPdGhlciBzZXR0aW5nc1wiIGRlc2NyaXB0aW9uPVwiT3RoZXIgc2V0dGluZ3MgdGhhdCB5b3UgY2FuIHR3ZWFrXCIgaWNvbj1cIkdlYXJcIj5cclxuICAgICAgICAgICAgPEZvcm1zLkZvcm1TZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgPEZvcm1zLkZvcm1JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3Jtcy5Gb3JtVGl0bGU+RGlzcGxheSBtb2RlPC9Gb3Jtcy5Gb3JtVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPFJhZGlvR3JvdXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17W1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBuYW1lOiBcIkNhdGVnb3J5XCIsIHZhbHVlOiBjb25zdGFudHMuU2V0dGluZ3MuRGVmYXVsdFNldHRpbmdzLkNhdGVnb3J5Vmlldy5zZXR0aW5nc1ZhbHVlIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IG5hbWU6IFwiTWluaW1hbGlzdFwiLCB2YWx1ZTogY29uc3RhbnRzLlNldHRpbmdzLkRlZmF1bHRTZXR0aW5ncy5NaW5pbWFsaXN0Vmlldy5zZXR0aW5nc1ZhbHVlIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NldHRpbmdzLmdldChcImRpc3BsYXlcIiwgY29uc3RhbnRzLlNldHRpbmdzLkRlZmF1bHRTZXR0aW5ncy5ESVNQTEFZX01PREUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHYpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzLnNldChcImRpc3BsYXlcIiwgdi52YWx1ZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIERpc3BhdGNoZXIuZGlydHlEaXNwYXRjaCh7IHR5cGU6IGNvbnN0YW50cy5ESVNQQVRDSEVSX1BJTkRNU19DSEFOR0VfTElTVCB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yY2VVcGRhdGUoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1zLkZvcm1EaXZpZGVyIGNsYXNzTmFtZT17am9pbkNsYXNzZXMoY2xhc3Nlcy5NYXJnaW5zLm1hcmdpbkJvdHRvbTIwLCBjbGFzc2VzLk1hcmdpbnMubWFyZ2luVG9wMjApfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9Gb3Jtcy5Gb3JtSXRlbT5cclxuXHJcbiAgICAgICAgICAgICAgICB7c2V0dGluZ3MuZ2V0KFwiZGlzcGxheVwiLCBjb25zdGFudHMuU2V0dGluZ3MuRGVmYXVsdFNldHRpbmdzLkRJU1BMQVlfTU9ERSkgPT09IGNvbnN0YW50cy5TZXR0aW5ncy5EZWZhdWx0U2V0dGluZ3MuTWluaW1hbGlzdFZpZXcuc2V0dGluZ3NWYWx1ZSAmJiA8Q2F0ZWdvcnkgdGl0bGU9XCJNaW5pbWFsaXN0IHZpZXcgc2V0dGluZ3NcIiBkZXNjcmlwdGlvbj1cIkFkZGl0aW9uYWwgY29uZmlndXJhdGlvbiBmb3IgdGhlIE1pbmltYWxpc3QgVmlld1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTd2l0Y2hJdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZXR0aW5ncy5nZXQoXCJtaW5pbWFsLnVzZXJJY29uc1wiLCBjb25zdGFudHMuU2V0dGluZ3MuRGVmYXVsdFNldHRpbmdzLk1pbmltYWxpc3RWaWV3LnVzZXJJY29ucyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3Muc2V0KFwibWluaW1hbC51c2VySWNvbnNcIiwgZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIERpc3BhdGNoZXIuZGlydHlEaXNwYXRjaCh7IHR5cGU6IGNvbnN0YW50cy5ESVNQQVRDSEVSX1BJTkRNU19DSEFOR0VfTElTVCB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5TaG93IHVzZXIgaWNvbnM8L1N3aXRjaEl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8L0NhdGVnb3J5Pn1cclxuXHJcbiAgICAgICAgICAgICAgICA8U3dpdGNoSXRlbVxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZXR0aW5ncy5nZXQoXCJwaW5JY29uXCIsIGNvbnN0YW50cy5TZXR0aW5ncy5EZWZhdWx0U2V0dGluZ3MuUElOX0lDT04pfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0dGluZ3Muc2V0KFwicGluSWNvblwiLCBlKX1cclxuICAgICAgICAgICAgICAgICAgICBub3RlPVwiQWRkcyBhbiBwaW4gaWNvbiB0byB0aGUgdXNlciBzbyB5b3UgY2FuIGFkZCBpdCBxdWlja2x5IHRvIGEgY2F0ZWdvcnlcIlxyXG4gICAgICAgICAgICAgICAgPkFkZCBhIHF1aWNrIHNob3J0Y3V0IHRvIGFkZCBwZW9wbGUgb24gY2F0ZWdvcmllczwvU3dpdGNoSXRlbT5cclxuXHJcbiAgICAgICAgICAgICAgICA8U3dpdGNoSXRlbVxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZXR0aW5ncy5nZXQoXCJzdHJlYW1lck1vZGVcIiwgY29uc3RhbnRzLlNldHRpbmdzLkRlZmF1bHRTZXR0aW5ncy5TVFJFQU1FUl9NT0RFKX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldHRpbmdzLnNldChcInN0cmVhbWVyTW9kZVwiLCBlKX1cclxuICAgICAgICAgICAgICAgICAgICBub3RlPVwiV2hlbiBTdHJlYW1lciBtb2RlIGlzIGVuYWJsZWQsIGl0IHdpbGwgYXV0b21hdGljYWxseSBoaWRlIHRoZSBjYXRlZ29yaWVzXCJcclxuICAgICAgICAgICAgICAgID5IaWRlIHVzZXJzIHdoZW4gU3RyZWFtZXIgbW9kZSBpcyBlbmFibGVkPC9Td2l0Y2hJdGVtPlxyXG5cclxuICAgICAgICAgICAgICAgIDxGb3Jtcy5Gb3JtSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybXMuRm9ybVRpdGxlPkV4cG9ydCBhbmQgaW1wb3J0IHNldHRpbmdzPC9Gb3Jtcy5Gb3JtVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZsZXggY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uRmxleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlRXhwb3J0fT5FeHBvcnQ8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjb2xvcj17QnV0dG9uLkNvbG9ycy5SRUR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVJbXBvcnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5JbXBvcnQ8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICAgICAgICA8L0Zvcm1zLkZvcm1JdGVtPlxyXG4gICAgICAgICAgICA8L0Zvcm1zLkZvcm1TZWN0aW9uPlxyXG4gICAgICAgIDwvQ2F0ZWdvcnk+XHJcbiAgICA8Lz5cclxufVxyXG5cclxuY29uc3QgaGFuZGxlRXhwb3J0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgLy9AdHMtaWdub3JlXHJcbiAgICByZXR1cm4gRGlzY29yZE5hdGl2ZS5maWxlTWFuYWdlci5zYXZlV2l0aERpYWxvZyhKU09OLnN0cmluZ2lmeShzZXR0aW5ncy5nZXRBbGwoKSksIFwic2V0dGluZ3MuanNvblwiKVxyXG59XHJcblxyXG5jb25zdCBoYW5kbGVJbXBvcnQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAvL0B0cy1pZ25vcmVcclxuICAgIGNvbnN0IFtzZWxlY3RlZEZpbGVdID0gYXdhaXQgRGlzY29yZE5hdGl2ZS5maWxlTWFuYWdlci5vcGVuRmlsZXMoXCIqLmpzb25cIilcclxuICAgIGNvbnN0IG5ld1NldHRpbmdzVGV4dCA9IG5ldyBUZXh0RGVjb2RlcigpLmRlY29kZShuZXcgVWludDhBcnJheShzZWxlY3RlZEZpbGUuZGF0YSBhcyBBcnJheUJ1ZmZlcikpXHJcbiAgICBpZiAoIWlzVmFsaWRKU09OKG5ld1NldHRpbmdzVGV4dCkpIHJldHVybiB2b2lkIHRvYXN0LnNob3coXCJJbnZhbGlkIHNldHRpbmdzIGZpbGUuIEl0IHNob3VsZCBlbmQgd2l0aCBcXFwiLmpzb25cXFwiLlwiLCB7XHJcbiAgICAgICAgZHVyYXRpb246IDUwMDBcclxuICAgIH0pXHJcbiAgICBjb25zdCBuZXdTZXR0aW5nczogSlNPTiA9IEpTT04ucGFyc2UobmV3U2V0dGluZ3NUZXh0KVxyXG4gICAgXHJcbiAgICBjb25zdCBvdmVycmlkZVNldHRpbmdzID0gKCkgPT4ge1xyXG4gICAgICAgIHNldHRpbmdzLnJlc2V0KClcclxuICAgICAgICBzZXR0aW5ncy5zZXRBbGwobmV3U2V0dGluZ3MpXHJcbiAgICB9XHJcblxyXG4gICAgTW9kYWxBY3Rpb25zLm9wZW5Nb2RhbChwcm9wcyA9PiA8TW9kYWwuTW9kYWxSb290IHsuLi5wcm9wc30gc2l6ZT17TW9kYWwuTW9kYWxTaXplLlNNQUxMfT5cclxuICAgICAgICA8TW9kYWwuTW9kYWxIZWFkZXIgc2VwYXJhdG9yPXtmYWxzZX0+XHJcbiAgICAgICAgICAgIDxIZWFkaW5nIHZhcmlhbnQ9XCJoZWFkaW5nLWxnL21lZGl1bVwiPlNhdmUgYSBiYWNrdXA8L0hlYWRpbmc+XHJcbiAgICAgICAgPC9Nb2RhbC5Nb2RhbEhlYWRlcj5cclxuICAgICAgICA8TW9kYWwuTW9kYWxDb250ZW50PlxyXG4gICAgICAgICAgICA8VGV4dD5EbyB5b3Ugd2FudCB0byBzYXZlIGEgYmFja3VwPzwvVGV4dD5cclxuICAgICAgICA8L01vZGFsLk1vZGFsQ29udGVudD5cclxuICAgICAgICA8TW9kYWwuTW9kYWxGb290ZXI+XHJcbiAgICAgICAgICAgIDxGbGV4IHN0eWxlPXt7Z2FwOiBcIjhweFwifX0ganVzdGlmeT17RmxleC5KdXN0aWZ5LkVORH0+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIGxvb2s9e0J1dHRvbi5Mb29rcy5MSU5LfSBjb2xvcj17QnV0dG9uLkNvbG9ycy5XSElURX0gb25DbGljaz17cHJvcHMub25DbG9zZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgQ2FuY2VsXHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gbG9vaz17QnV0dG9uLkxvb2tzLkxJTkt9IGNvbG9yPXtCdXR0b24uQ29sb3JzLlJFRH0gb25DbGljaz17KCkgPT4geyBvdmVycmlkZVNldHRpbmdzKCk7IHByb3BzLm9uQ2xvc2UoKSB9fT5cclxuICAgICAgICAgICAgICAgICAgICBPdmVycmlkZSB3aXRob3V0IHNhdmluZ1xyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2FzeW5jICgpID0+IHsgYXdhaXQgaGFuZGxlRXhwb3J0KCk7IG92ZXJyaWRlU2V0dGluZ3MoKTsgcHJvcHMub25DbG9zZSgpOyB9fT5cclxuICAgICAgICAgICAgICAgICAgICBTYXZlXHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgIDwvTW9kYWwuTW9kYWxGb290ZXI+XHJcbiAgICA8L01vZGFsLk1vZGFsUm9vdD4pXHJcblxyXG4gICAgLy8gY29uc3Qgc3R1ZmY6IHsgZGF0YTogQXJyYXlCdWZmZXIsIGZpbGVuYW1lOiBzdHJpbmcgfSA9IGF3YWl0IERpc2NvcmROYXRpdmUuZmlsZU1hbmFnZXIub3BlbkZpbGVzKFwiKi5qc29uXCIpXHJcbiAgICAvLyBjb25zb2xlLmxvZyhzdHVmZilcclxufSIsImltcG9ydCB7IFJlYWN0LCBNb2RhbEFjdGlvbnMgfSBmcm9tIFwiaXR0YWkvd2VicGFja1wiXHJcbmltcG9ydCB7IE1vZGFsIH0gZnJvbSBcIml0dGFpL2NvbXBvbmVudHNcIlxyXG5pbXBvcnQgVXNlckxpc3RTZXR0aW5ncywgeyBDcmVhdGVDYXRlZ29yeSB9IGZyb20gXCIuLi9jb21wb25lbnRzL1VzZXJMaXN0U2V0dGluZ3NcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgKG9wZW5lZENhdGVnb3J5Pzogc3RyaW5nKSA9PiB7XHJcbiAgICBNb2RhbEFjdGlvbnMub3Blbk1vZGFsKChwcm9wcykgPT4gPE1vZGFsLk1vZGFsUm9vdCB7Li4ucHJvcHN9IHNpemU9e01vZGFsLk1vZGFsU2l6ZS5NRURJVU19PlxyXG4gICAgICAgIDxNb2RhbC5Nb2RhbEhlYWRlciBzZXBhcmF0b3I9e2ZhbHNlfT5cclxuICAgICAgICAgICAgPENyZWF0ZUNhdGVnb3J5IC8+XHJcbiAgICAgICAgPC9Nb2RhbC5Nb2RhbEhlYWRlcj5cclxuICAgICAgICA8TW9kYWwuTW9kYWxDb250ZW50PlxyXG4gICAgICAgICAgICA8VXNlckxpc3RTZXR0aW5ncyB7Li4ueyBvcGVuZWRDYXRlZ29yeSB9fSBzaG93QWRkQ2F0ZWdvcnlCdXR0b249e2ZhbHNlfSAvPlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmdCb3R0b206IFwiMTZweFwiIH19IC8+XHJcbiAgICAgICAgPC9Nb2RhbC5Nb2RhbENvbnRlbnQ+XHJcbiAgICA8L01vZGFsLk1vZGFsUm9vdD4pXHJcbn0iLCJpbXBvcnQgeyBSZWFjdCwgQ29udGV4dE1lbnUgYXMgQ29udGV4dE1lbnVIYW5kbGVyIH0gZnJvbSBcIml0dGFpL3dlYnBhY2tcIlxyXG5pbXBvcnQgeyBCdXR0b24sIENvbnRleHRNZW51IH0gZnJvbSBcIml0dGFpL2NvbXBvbmVudHNcIlxyXG5pbXBvcnQgeyBtZXNzYWdlQm94IH0gZnJvbSBcIml0dGFpL3V0aWxpdGllc1wiXHJcbmltcG9ydCBvcGVuQ2F0ZWdvcnlTZXR0aW5ncyBmcm9tIFwiLi4vLi4vdXRpbHMvb3BlbkNhdGVnb3J5U2V0dGluZ3NcIlxyXG5pbXBvcnQgcGlubmVkRE1TIGZyb20gXCIuLi8uLi9oYW5kbGVycy9waW5uZWRETVNcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHByb3BzOiB7IGNhdGVnb3J5OiBzdHJpbmcgfSkge1xyXG4gICAgcmV0dXJuIDxDb250ZXh0TWVudSBuYXZJZD17XCJwaW4tdXNlclwifSBvbkNsb3NlPXtDb250ZXh0TWVudUhhbmRsZXIuY2xvc2VDb250ZXh0TWVudX0+XHJcbiAgICAgICAgPENvbnRleHRNZW51Lk1lbnVJdGVtIGlkPVwiZWRpdFwiXHJcbiAgICAgICAgICAgIGxhYmVsPVwiRWRpdCBjYXRlZ29yeVwiXHJcbiAgICAgICAgICAgIGFjdGlvbj17KCkgPT4gb3BlbkNhdGVnb3J5U2V0dGluZ3MocHJvcHMuY2F0ZWdvcnkpfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPENvbnRleHRNZW51Lk1lbnVJdGVtIGlkPVwiZGVsZXRlXCJcclxuICAgICAgICAgICAgbGFiZWw9XCJEZWxldGUgY2F0ZWdvcnlcIlxyXG4gICAgICAgICAgICBjb2xvcj1cImNvbG9yRGFuZ2VyXCJcclxuICAgICAgICAgICAgYWN0aW9uPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlQm94KFwiRGVsZXRlXCIsIGBBcmUgeW91IHN1cmUgdGhhdCB5b3Ugd2FudCB0byBkZWxldGUgXCIke3Byb3BzLmNhdGVnb3J5fVwiP2AsIFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiRGVsZXRlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbjogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGlubmVkRE1TLnJlbW92ZUNhdGVnb3J5KHByb3BzLmNhdGVnb3J5KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogQnV0dG9uLkNvbG9ycy5SRURcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJDYW5jZWxcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiAoKSA9PiB7fSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IEJ1dHRvbi5Db2xvcnMuV0hJVEUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvb2s6IEJ1dHRvbi5Mb29rcy5MSU5LXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXSlcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAvPlxyXG4gICAgPC9Db250ZXh0TWVudT5cclxufVxyXG5cclxuIiwiaW1wb3J0ICogYXMgcGF0Y2hlciBmcm9tIFwiaXR0YWkvcGF0Y2hlclwiXHJcbmltcG9ydCAqIGFzIHdlYnBhY2sgZnJvbSBcIml0dGFpL3dlYnBhY2tcIlxyXG5pbXBvcnQgeyBSZWFjdCwgRGlzcGF0Y2hlciB9IGZyb20gXCJpdHRhaS93ZWJwYWNrXCJcclxuaW1wb3J0IHsgQ2hhbm5lbHMsIEN1cnJlbnRDaGFubmVscywgVXNlcnMgfSBmcm9tIFwiaXR0YWkvc3RvcmVzXCJcclxuaW1wb3J0IHsgZmluZEluUmVhY3RUcmVlLCBzZWFyY2hDbGFzc05hbWVNb2R1bGVzIH0gZnJvbSBcIml0dGFpL3V0aWxpdGllc1wiXHJcbmltcG9ydCB7IERpc2NvcmRJY29uLCBGbGV4LCBNb2RhbCwgUG9wb3V0LCBUZXh0IH0gZnJvbSBcIml0dGFpL2NvbXBvbmVudHNcIlxyXG5pbXBvcnQgKiBhcyBzZXR0aW5ncyBmcm9tIFwiaXR0YWkvc2V0dGluZ3NcIlxyXG5cclxuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4uL3V0aWxzL2NsYXNzZXNcIlxyXG5pbXBvcnQgcGlubmVkRE1TLCB7dXNlTGlzdFVwZGF0ZX0gZnJvbSBcIi4uL2hhbmRsZXJzL3Bpbm5lZERNU1wiXHJcbmltcG9ydCBqb2luQ2xhc3NlcyBmcm9tIFwiLi4vdXRpbHMvam9pbkNsYXNzZXNcIlxyXG5pbXBvcnQgKiBhcyBjb25zdGFudHMgZnJvbSBcIi4uL2NvbnN0YW50c1wiXHJcbi8vQHRzLWlnbm9yZVxyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL2RtbGlzdC5zY3NzXCJcclxuaW1wb3J0IG9wZW5DYXRlZ29yeVNldHRpbmdzIGZyb20gXCIuLi91dGlscy9vcGVuQ2F0ZWdvcnlTZXR0aW5nc1wiXHJcbmltcG9ydCBDYXRlZ29yeUNvbnRleHRNZW51IGZyb20gXCIuLi9jb21wb25lbnRzL0NvbnRleHRNZW51cy9DYXRlZ29yeVwiXHJcblxyXG5jb25zdCBMaXN0U2VjdGlvbkl0ZW0gPSB3ZWJwYWNrLmZpbmRCeURpc3BsYXlOYW1lKFwiTGlzdFNlY3Rpb25JdGVtXCIpXHJcbmNvbnN0IHsgRGlyZWN0TWVzc2FnZSB9ID0gd2VicGFjay5maW5kQnlQcm9wcyhcIkRpcmVjdE1lc3NhZ2VcIilcclxuY29uc3QgeyBOdW1iZXJCYWRnZSB9ID0gd2VicGFjay5maW5kQnlQcm9wcyhcIk51bWJlckJhZGdlXCIpXHJcbmNvbnN0IHsgZ2V0TWVudGlvbkNvdW50IH0gPSB3ZWJwYWNrLmZpbmRCeVByb3BzKFwiZ2V0TWVudGlvbkNvdW50XCIpXHJcbmNvbnN0IFVzZXJTdW1tYXJ5SXRlbSA9IHdlYnBhY2suZmluZEJ5RGlzcGxheU5hbWUoXCJVc2VyU3VtbWFyeUl0ZW1cIilcclxuXHJcbmNvbnN0IFVTRVJfSUNPTl9TSVpFID0gMTZcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xyXG4gICAgbGV0IFBpbkRNU1JlbmRlciA9ICgpID0+IDxDdXJyZW50TGlzdHMgLz5cclxuICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgUGluRE1TUmVuZGVyLmRpc3BsYXlOYW1lID0gXCJQaW5uZWRETVNcIlxyXG5cclxuICAgIC8vIHdlYnBhY2suRGlzcGF0Y2hlci5zdWJzY3JpYmUoXCJDSEFOTkVMX1VOUkVBRF9VUERBVEVcIiwgY29uc29sZS5sb2cpXHJcbiAgICBcclxuICAgIHBhdGNoZXIuYWZ0ZXIoXCJETUxpc3RQYXRjaFwiLCB3ZWJwYWNrLmZpbmQobSA9PiBtPy5kZWZhdWx0Py5kaXNwbGF5TmFtZSA9PT0gXCJDb25uZWN0ZWRQcml2YXRlQ2hhbm5lbHNMaXN0XCIpLCBcImRlZmF1bHRcIiwgKFtwcm9wc10sIHJlcywgX3RoaXMpID0+IHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh7cHJvcHMsIHJlcywgX3RoaXN9KVxyXG4gICAgICAgIHVzZUxpc3RVcGRhdGUoKSAvL3RlbXBvcmFyeSwgd2lsbCByZW1vdmUgbGF0ZXJcclxuICAgICAgICBcclxuICAgICAgICBsZXQgUHJpdmF0ZUNoYW5uZWxzTGlzdDoge3Byb3BzOiB7Y2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZVtdLCBwcml2YXRlQ2hhbm5lbElkczogc3RyaW5nW119LCB0eXBlOiBhbnl9ID0gZmluZEluUmVhY3RUcmVlKHJlcywgKG06IHsgdHlwZTogeyBkaXNwbGF5TmFtZTogc3RyaW5nIH0gfSkgPT4gbT8udHlwZT8uZGlzcGxheU5hbWUgPT09IFwiUHJpdmF0ZUNoYW5uZWxzTGlzdFwiKSBhcyBhbnlcclxuICAgICAgICBpZiAoUHJpdmF0ZUNoYW5uZWxzTGlzdCA9PSBudWxsKSByZXR1cm5cclxuXHJcbiAgICAgICAgT2JqZWN0LnZhbHVlcyhwaW5uZWRETVMuZ2V0QWxsKCkpLmZvckVhY2goKHt1c2Vyc30pID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZG1DaGFubmVscyA9IHVzZXJzLm1hcChpZCA9PiBDaGFubmVscy5nZXRETUZyb21Vc2VySWQoaWQpKVxyXG4gICAgICAgICAgICBQcml2YXRlQ2hhbm5lbHNMaXN0LnByb3BzLnByaXZhdGVDaGFubmVsSWRzID1cclxuICAgICAgICAgICAgICAgIFByaXZhdGVDaGFubmVsc0xpc3QucHJvcHMucHJpdmF0ZUNoYW5uZWxJZHMuZmlsdGVyKFxyXG4gICAgICAgICAgICAgICAgICAgIChpZCkgPT4gIWRtQ2hhbm5lbHMuaW5jbHVkZXMoaWQpXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgY29uc3Qgb2dGdW5jID0gUHJpdmF0ZUNoYW5uZWxzTGlzdC50eXBlLnByb3RvdHlwZS5yZW5kZXJcclxuICAgICAgICBpZiAob2dGdW5jID09IG51bGwpIHJldHVyblxyXG4gICAgICAgIE9iamVjdC5hc3NpZ24oUHJpdmF0ZUNoYW5uZWxzTGlzdC5wcm9wcywge1xyXG4gICAgICAgICAgICBvcmlnaW5hbDogb2dGdW5jLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLy8gaWYoIWZpc3RQYXRjaCkgUHJpdmF0ZUNoYW5uZWxzTGlzdC50eXBlLnByb3RvdHlwZS5yZW5kZXIgPSBQYXRjaGVkUHJpdmF0ZUNoYW5uZWxzTGlzdFxyXG4gICAgICAgIFxyXG5cclxuXHJcbiAgICAgICAgaWYgKFByaXZhdGVDaGFubmVsc0xpc3QucHJvcHMuY2hpbGRyZW4uZmluZChcclxuICAgICAgICAgICAgKG06IGFueSkgPT4gbT8udHlwZT8uZGlzcGxheU5hbWUgPT09IFwiUGlubmVkRE1TXCJcclxuICAgICAgICApKSByZXR1cm5cclxuXHJcbiAgICAgICAgUHJpdmF0ZUNoYW5uZWxzTGlzdC5wcm9wcy5jaGlsZHJlbi5wdXNoKDxQaW5ETVNSZW5kZXIgLz4pXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coUHJpdmF0ZUNoYW5uZWxzTGlzdClcclxuICAgIH0pXHJcbn1cclxuXHJcbmNvbnN0IEN1cnJlbnRMaXN0cyA9ICgpID0+IHtcclxuICAgIHVzZUxpc3RVcGRhdGUoKVxyXG5cclxuICAgIHN3aXRjaCAoc2V0dGluZ3MuZ2V0KFwiZGlzcGxheVwiLCBjb25zdGFudHMuU2V0dGluZ3MuRGVmYXVsdFNldHRpbmdzLkRJU1BMQVlfTU9ERSkpIHtcclxuICAgICAgICBjYXNlIGNvbnN0YW50cy5TZXR0aW5ncy5EZWZhdWx0U2V0dGluZ3MuTWluaW1hbGlzdFZpZXcuc2V0dGluZ3NWYWx1ZToge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53cmFwcGVyfT5cclxuICAgICAgICAgICAgICAgICAgICB7cGlubmVkRE1TLmdldENhdGVnb3JpZXMoKS5tYXAoKGNhdGVnb3J5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8TWluaW1hbGlzdExpc3Qgey4uLnsgY2F0ZWdvcnkgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRlZmF1bHQ6IHtcclxuICAgICAgICAgICAgcmV0dXJuIDw+XHJcbiAgICAgICAgICAgICAgICB7cGlubmVkRE1TLmdldENhdGVnb3JpZXMoKS5tYXAoKGNhdGVnb3J5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxDYXRlZ29yeUxpc3Qgey4uLnsgY2F0ZWdvcnkgfX0gLz5cclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBDYXRlZ29yeUxpc3QgPSAoe2NhdGVnb3J5fToge2NhdGVnb3J5OiBzdHJpbmd9KSA9PiB7XHJcbiAgICBjb25zdCBbc2hvdywgc2V0U2hvd10gPSBSZWFjdC51c2VTdGF0ZShwaW5uZWRETVMuZ2V0VmlzaWJpbGl0eShjYXRlZ29yeSkpXHJcblxyXG4gICAgcmV0dXJuIDw+XHJcbiAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgIHBpbm5lZERNUy5zZXRWaXNpYmlsaXR5KGNhdGVnb3J5LCAhc2hvdylcclxuICAgICAgICAgICAgc2V0U2hvdyghc2hvdylcclxuICAgICAgICB9fT5cclxuICAgICAgICAgICAgPExpc3RTZWN0aW9uSXRlbVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtqb2luQ2xhc3NlcyhjbGFzc2VzLkNhdGVnb3J5LndyYXBwZXIsIHN0eWxlcy5jYXRlZ29yeVZpZXdXcmFwcGVyLCBzaG93ID8gc3R5bGVzLm9wZW4gOiBudWxsKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogcGlubmVkRE1TLmdldENvbG9yKGNhdGVnb3J5KSB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxEaXNjb3JkSWNvbiBuYW1lPVwiRHJvcGRvd25BcnJvd1wiIHR5cGU9XCJub25lXCIgY2xhc3NOYW1lPXtqb2luQ2xhc3NlcyhjbGFzc2VzLkNhdGVnb3J5Lmljb24sIHN0eWxlcy5pY29uKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtqb2luQ2xhc3Nlcygoc2VhcmNoQ2xhc3NOYW1lTW9kdWxlcyhcImNvbnRhaW5lci0zMkhXNXNcIikgYXMgYW55KS5jb250YWluZXIsIGNsYXNzZXMuQ2F0ZWdvcnkubmFtZSwgc3R5bGVzLm5hbWUpfT57Y2F0ZWdvcnl9PC9oMj5cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9MaXN0U2VjdGlvbkl0ZW0+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIHtzaG93ICYmIHBpbm5lZERNUy5nZXRVc2VycyhjYXRlZ29yeSkubWFwKCh1c2VySWQpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZG1JZCA9IENoYW5uZWxzLmdldERNRnJvbVVzZXJJZCh1c2VySWQpXHJcbiAgICAgICAgICAgIGlmIChkbUlkID09IG51bGwpIHJldHVybiBudWxsXHJcblxyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPERpcmVjdE1lc3NhZ2Uga2V5PXtkbUlkfVxyXG4gICAgICAgICAgICAgICAgICAgIGNoYW5uZWw9e0NoYW5uZWxzLmdldENoYW5uZWwoZG1JZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBDdXJyZW50Q2hhbm5lbHMuZ2V0Q2hhbm5lbElkKCkgPT09IGRtSWRcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfSl9XHJcbiAgICA8Lz5cclxufVxyXG5cclxuY29uc3QgZ2V0UGluZ0NvdW50ID0gKGN1cnJlbnRVc2Vyczogc3RyaW5nW10pID0+IGN1cnJlbnRVc2Vycy5tYXAodXNlcklkID0+IENoYW5uZWxzLmdldERNRnJvbVVzZXJJZCh1c2VySWQpKS5yZWR1Y2UoKGFjYywgY2hhbm5lbElkKSA9PiBhY2MgKyBnZXRNZW50aW9uQ291bnQoY2hhbm5lbElkKSwgMClcclxuXHJcbmV4cG9ydCBjb25zdCBNaW5pbWFsaXN0TGlzdCA9ICh7IGNhdGVnb3J5IH06IHsgY2F0ZWdvcnk6IHN0cmluZyB9KSA9PiB7XHJcbiAgICBjb25zdCBjdXJyZW50VXNlcnMgPSBSZWFjdC51c2VNZW1vKCgpID0+IHBpbm5lZERNUy5nZXRVc2VycyhjYXRlZ29yeSksIFtdKVxyXG4gICAgY29uc3QgaXNDdXJyZW50Q2hhbm5lbCA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBjdXJyZW50VXNlcnMuc29tZSgodXNlcklkKSA9PiBDdXJyZW50Q2hhbm5lbHMuZ2V0Q2hhbm5lbElkKCkgPT09IENoYW5uZWxzLmdldERNRnJvbVVzZXJJZCh1c2VySWQpKVxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgY29uc3QgW3BpbmdDb3VudCwgc2V0UGluZ0NvdW50XSA9IFJlYWN0LnVzZVN0YXRlPG51bWJlcj4oZ2V0UGluZ0NvdW50KGN1cnJlbnRVc2VycykpXHJcbiAgICBjb25zdCBbaXNTdHJlYW1lck1vZGVFbmFibGVkLCBzZXRTdHJlYW1lck1vZGVdID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpXHJcblxyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbWVzc2FnZUNyZWF0ZUxpc3RlbmVyID0gKHtjaGFubmVsSWR9OiBhbnkpID0+IHtcclxuICAgICAgICAgICAgaWYgKGN1cnJlbnRVc2Vycy5zb21lKCh1c2VySWQpID0+IGNoYW5uZWxJZCA9PT0gQ2hhbm5lbHMuZ2V0RE1Gcm9tVXNlcklkKHVzZXJJZCkpKSBzZXRQaW5nQ291bnQoZ2V0UGluZ0NvdW50KGN1cnJlbnRVc2VycykpXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3Qgc3RyZWFtZXJNb2RlTGlzdGVuZXIgPSAoeyB2YWx1ZSB9OiB7IHZhbHVlOiBib29sZWFuIH0pID0+IHtcclxuICAgICAgICAgICAgc2V0U3RyZWFtZXJNb2RlKHZhbHVlKVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIERpc3BhdGNoZXIuc3Vic2NyaWJlKFwiQ0hBTk5FTF9VTlJFQURfVVBEQVRFXCIsIG1lc3NhZ2VDcmVhdGVMaXN0ZW5lcik7XHJcbiAgICAgICAgRGlzcGF0Y2hlci5zdWJzY3JpYmUoXCJTVFJFQU1FUl9NT0RFX1VQREFURVwiLCBzdHJlYW1lck1vZGVMaXN0ZW5lcik7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgRGlzcGF0Y2hlci51bnN1YnNjcmliZShcIkNIQU5ORUxfVU5SRUFEX1VQREFURVwiLCBtZXNzYWdlQ3JlYXRlTGlzdGVuZXIpXHJcbiAgICAgICAgICAgIERpc3BhdGNoZXIudW5zdWJzY3JpYmUoXCJTVFJFQU1FUl9NT0RFX1VQREFURVwiLCBzdHJlYW1lck1vZGVMaXN0ZW5lcilcclxuICAgICAgICB9XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgcmV0dXJuIDw+XHJcbiAgICAgICAgPFBvcG91dCBwb3NpdGlvbj17UG9wb3V0LlBvc2l0aW9ucy5SSUdIVH0gYW5pbWF0aW9uPXtQb3BvdXQuQW5pbWF0aW9uLk5PTkV9IHJlbmRlclBvcG91dD17KHByb3BzKSA9PiA8ZGl2IHsuLi5wcm9wc30+XHJcbiAgICAgICAgICAgIDxNb2RhbC5Nb2RhbFJvb3QgdHJhbnNpdGlvblN0YXRlPXsxfSBzaXplPXtNb2RhbC5Nb2RhbFNpemUuRFlOQU1JQ30+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1pbmltYWxpc3RpY1BvcG91dH0+XHJcbiAgICAgICAgICAgICAgICAgICAge2N1cnJlbnRVc2Vycy5sZW5ndGggIT09IDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBjdXJyZW50VXNlcnMubWFwKCh1c2VySWQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRtSWQgPSBDaGFubmVscy5nZXRETUZyb21Vc2VySWQodXNlcklkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coQ2hhbm5lbHMuZ2V0Q2hhbm5lbChkbUlkKSwgQ2hhbm5lbHMuZ2V0Q2hhbm5lbChkbUlkKS5yZWNpcGllbnRzLmluY2x1ZGVzKFwiMzc2NDkzMjYxNzU1MjUyNzM2XCIpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRtSWQgPT0gbnVsbCkgcmV0dXJuIG51bGxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEaXJlY3RNZXNzYWdlIGtleT17ZG1JZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbm5lbD17Q2hhbm5lbHMuZ2V0Q2hhbm5lbChkbUlkKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ3VycmVudENoYW5uZWxzLmdldENoYW5uZWxJZCgpID09PSBkbUlkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IDxUZXh0IHN0eWxlPXt7bWFyZ2luTGVmdDogXCI4cHhcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhlcmUgaXMgbm9ib2R5IGhlcmUgY3VycmVudGx5LiA8YSBvbkNsaWNrPXsoKSA9PiBvcGVuQ2F0ZWdvcnlTZXR0aW5ncyhjYXRlZ29yeSl9PkFkZCBhIG5ldyBwZXJzb248L2E+LlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvTW9kYWwuTW9kYWxSb290PlxyXG4gICAgICAgIDwvZGl2Pn0+XHJcbiAgICAgICAgICAgIHsocHJvcHMpID0+IDxkaXYgey4uLnByb3BzfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtqb2luQ2xhc3NlcyhjbGFzc2VzLkRNQnV0dG9ucy5jaGFubmVsLCAoc2VhcmNoQ2xhc3NOYW1lTW9kdWxlcyhcImNvbnRhaW5lci0zMkhXNXNcIikgYXMgYW55KS5jb250YWluZXIpfVxyXG4gICAgICAgICAgICAgICAgb25Db250ZXh0TWVudT17ZSA9PiB3ZWJwYWNrLkNvbnRleHRNZW51Lm9wZW5Db250ZXh0TWVudShlLCAoKSA9PiA8Q2F0ZWdvcnlDb250ZXh0TWVudSBjYXRlZ29yeT17Y2F0ZWdvcnl9IC8+KX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2pvaW5DbGFzc2VzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc2VzLkRNQnV0dG9ucy5pbnRlcmFjdGl2ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3Nlcy5JbnRlcmFjdGl2ZXMuaW50ZXJhY3RpdmUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzQ3VycmVudENoYW5uZWwgPyBqb2luQ2xhc3NlcyhjbGFzc2VzLkRNQnV0dG9ucy5pbnRlcmFjdGl2ZVNlbGVjdGVkLCBjbGFzc2VzLkludGVyYWN0aXZlcy5zZWxlY3RlZCkgOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzZXMuRE1CdXR0b25zLmxpbmtCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICApfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17am9pbkNsYXNzZXMoY2xhc3Nlcy5OYW1lcy5sYXlvdXQsIHN0eWxlcy5taW5pbWFsaXN0aWNWaWV3KX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4IGRpcmVjdGlvbj17RmxleC5EaXJlY3Rpb24uVkVSVElDQUx9IGNsYXNzTmFtZT17c3R5bGVzLm5hbWVBbmRVc2Vyc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBjb2xvcjogcGlubmVkRE1TLmdldENvbG9yKGNhdGVnb3J5KSwgZm9udFdlaWdodDogXCJib2xkXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NhdGVnb3J5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyFpc1N0cmVhbWVyTW9kZUVuYWJsZWQgJiYgc2V0dGluZ3MuZ2V0KFwibWluaW1hbC51c2VySWNvbnNcIiwgY29uc3RhbnRzLlNldHRpbmdzLkRlZmF1bHRTZXR0aW5ncy5NaW5pbWFsaXN0Vmlldy51c2VySWNvbnMpICYmIDxVc2VyU3VtbWFyeUl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPXtVU0VSX0lDT05fU0laRX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2Vycz17cGlubmVkRE1TLmdldFVzZXJzKGNhdGVnb3J5KS5tYXAodXNlcklkID0+IFVzZXJzLmdldFVzZXIodXNlcklkKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Qm9vbGVhbihwaW5nQ291bnQpICYmIDxOdW1iZXJCYWRnZSBjb3VudD17cGluZ0NvdW50fSAvPn1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj59XHJcbiAgICAgICAgPC9Qb3BvdXQ+XHJcbiAgICA8Lz5cclxufSIsImltcG9ydCB7IFJlYWN0LCBDb250ZXh0TWVudSBhcyBDb250ZXh0TWVudUhhbmRsZXIgfSBmcm9tIFwiaXR0YWkvd2VicGFja1wiXHJcbmltcG9ydCAqIGFzIHdlYnBhY2sgZnJvbSBcIml0dGFpL3dlYnBhY2tcIlxyXG5pbXBvcnQgeyBDb250ZXh0TWVudSwgRmxleCwgRGlzY29yZEljb24gfSBmcm9tIFwiaXR0YWkvY29tcG9uZW50c1wiXHJcbmltcG9ydCB7IFVzZXJzIH0gZnJvbSBcIml0dGFpL3N0b3Jlc1wiXHJcbmltcG9ydCBwaW5uZWRETVMgZnJvbSBcIi4uLy4uL2hhbmRsZXJzL3Bpbm5lZERNU1wiXHJcbmltcG9ydCB7IFVzZXJJRCB9IGZyb20gXCJpdHRhaVwiXHJcbmltcG9ydCBvcGVuQ2F0ZWdvcnlTZXR0aW5ncyBmcm9tIFwiLi4vLi4vdXRpbHMvb3BlbkNhdGVnb3J5U2V0dGluZ3NcIlxyXG4vL0B0cy1pZ25vcmVcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9BZGRVc2VyLnNjc3NcIlxyXG5cclxuY29uc3QgVXNlclN1bW1hcnlJdGVtID0gd2VicGFjay5maW5kQnlEaXNwbGF5TmFtZShcIlVzZXJTdW1tYXJ5SXRlbVwiKVxyXG5cclxuY29uc3QgVVNFUl9JQ09OX1NJWkUgPSAxNlxyXG5jb25zdCBNQVhfVVNFUlNfRElTUExBWSA9IDRcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChwcm9wczoge3VzZXJJZDogVXNlcklEfSkge1xyXG4gICAgcmV0dXJuIDxDb250ZXh0TWVudSBuYXZJZD17XCJwaW4tdXNlclwifSBvbkNsb3NlPXtDb250ZXh0TWVudUhhbmRsZXIuY2xvc2VDb250ZXh0TWVudX0+XHJcbiAgICAgICAgPENvbnRleHRNZW51Lk1lbnVHcm91cCBsYWJlbD1cIkFkZCB0byBjYXRlZ29yeVwiPlxyXG4gICAgICAgICAgICB7cGlubmVkRE1TLmdldENhdGVnb3JpZXMoKS5tYXAoY2F0ZWdvcnkgPT4gPENvbnRleHRNZW51Lk1lbnVJdGVtIGlkPXtgY2F0ZWdvcnktJHtjYXRlZ29yeX1gfVxyXG4gICAgICAgICAgICAgICAgbGFiZWw9ezxGbGV4PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnRleHR9IHN0eWxlPXt7IGNvbG9yOiBwaW5uZWRETVMuZ2V0Q29sb3IoY2F0ZWdvcnkpfX0+e2NhdGVnb3J5fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8VXNlclN1bW1hcnlJdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9e1VTRVJfSUNPTl9TSVpFfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXg9e01BWF9VU0VSU19ESVNQTEFZfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2Vycz17cGlubmVkRE1TLmdldFVzZXJzKGNhdGVnb3J5KS5zb3J0KCgpID0+IE1hdGgucmFuZG9tKCkgLSAwLjUpLm1hcCh1c2VySWQgPT4gVXNlcnMuZ2V0VXNlcih1c2VySWQpKX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9GbGV4Pn1cclxuXHJcbiAgICAgICAgICAgICAgICBhY3Rpb249eygpID0+IHBpbm5lZERNUy5hZGRVc2VyKGNhdGVnb3J5LCBwcm9wcy51c2VySWQpfVxyXG4gICAgICAgICAgICAvPil9XHJcbiAgICAgICAgPC9Db250ZXh0TWVudS5NZW51R3JvdXA+XHJcbiAgICAgICAgPENvbnRleHRNZW51Lk1lbnVTZXBhcmF0b3IgLz5cclxuICAgICAgICA8Q29udGV4dE1lbnUuTWVudUl0ZW0gaWQ9XCJjb25maWd1cmVcIlxyXG4gICAgICAgICAgICBsYWJlbD1cIkNvbmZpZ3VyZSBjYXRlZ29yaWVzXCJcclxuICAgICAgICAgICAgaWNvbj17KCkgPT4gPERpc2NvcmRJY29uIG5hbWU9XCJHZWFyXCIgdHlwZT1cImNvbnRleHRtZW51XCIvPn1cclxuICAgICAgICAgICAgYWN0aW9uPXtvcGVuQ2F0ZWdvcnlTZXR0aW5nc31cclxuICAgICAgICAvPlxyXG4gICAgPC9Db250ZXh0TWVudT5cclxufSIsImltcG9ydCAqIGFzIHBhdGNoZXIgZnJvbSBcIml0dGFpL3BhdGNoZXJcIlxyXG5pbXBvcnQgKiBhcyB3ZWJwYWNrIGZyb20gXCJpdHRhaS93ZWJwYWNrXCJcclxuY29uc3QgeyBSZWFjdCB9ID0gd2VicGFja1xyXG5pbXBvcnQgeyBDaGFubmVscywgQ3VycmVudENoYW5uZWxzIH0gZnJvbSBcIml0dGFpL3N0b3Jlc1wiXHJcbmltcG9ydCB7IGZpbmRJblJlYWN0VHJlZSwgc2VhcmNoQ2xhc3NOYW1lTW9kdWxlcyB9IGZyb20gXCJpdHRhaS91dGlsaXRpZXNcIlxyXG5pbXBvcnQgeyBEaXNjb3JkSWNvbiwgQ29udGV4dE1lbnUgfSBmcm9tIFwiaXR0YWkvY29tcG9uZW50c1wiXHJcbmltcG9ydCAqIGFzIHNldHRpbmdzIGZyb20gXCJpdHRhaS9zZXR0aW5nc1wiXHJcbmltcG9ydCBwaW5uZWRETVMsIHsgdXNlTGlzdFVwZGF0ZSB9IGZyb20gXCIuLi9oYW5kbGVycy9waW5uZWRETVNcIlxyXG5pbXBvcnQgeyBVc2VyT2JqZWN0IH0gZnJvbSBcIml0dGFpXCI7XHJcbmltcG9ydCAqIGFzIGNvbnN0YW50cyBmcm9tIFwiLi4vY29uc3RhbnRzXCJcclxuXHJcbi8vQHRzLWlnbm9yZVxyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL2RtYnV0dG9uLnNjc3NcIlxyXG5pbXBvcnQgam9pbkNsYXNzZXMgZnJvbSBcIi4uL3V0aWxzL2pvaW5DbGFzc2VzXCJcclxuaW1wb3J0IEFkZFVzZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ29udGV4dE1lbnVzL0FkZFVzZXJcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xyXG4gICAgcGF0Y2hlci5hZnRlcihcIkRNQnV0dG9uUGF0Y2hcIiwgd2VicGFjay5maW5kQnlEaXNwbGF5TmFtZShcIlByaXZhdGVDaGFubmVsXCIpLnByb3RvdHlwZSwgXCJyZW5kZXJcIiwgKF8sIHJlcywgX3RoaXMpID0+IHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh7IF90aGlzLCByZXMgfSlcclxuICAgICAgICBjb25zdCB1c2VyOiBVc2VyT2JqZWN0ID0gX3RoaXMucHJvcHMudXNlclxyXG5cclxuICAgICAgICBjb25zdCBpc0FkZGVkID0gcGlubmVkRE1TLmlzVXNlckFkZGVkKHVzZXIuaWQpXHJcblxyXG4gICAgICAgIGNvbnN0IG9nQ2hpbGRyZW46IEZ1bmN0aW9uID0gcmVzLnByb3BzLmNoaWxkcmVuXHJcbiAgICAgICAgaWYob2dDaGlsZHJlbiA9PSBudWxsKSByZXR1cm5cclxuICAgICAgICByZXMucHJvcHMuY2hpbGRyZW4gPSBmdW5jdGlvbiguLi5hcmdzOiBhbnkpIHtcclxuICAgICAgICAgICAgY29uc3QgcmV0ID0gb2dDaGlsZHJlbi5hcHBseSh0aGlzLCBhcmdzKVxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXQpXHJcblxyXG4gICAgICAgICAgICByZXQucHJvcHMuY2xhc3NOYW1lICs9IGAgJHtzdHlsZXMucGluSG92ZXJIYW5kbGVyfWBcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IEludGVyYWN0aXZlID0gcmV0LnByb3BzLmNoaWxkcmVuIGFzIHtwcm9wczoge2NoaWxkcmVuOiBbYW55LCBhbnldfX1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmICh1c2VyICYmICF1c2VyLmJvdCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2xvc2VJbmRleCA9IEludGVyYWN0aXZlLnByb3BzLmNoaWxkcmVuLmZpbmRJbmRleChlID0+IGUudHlwZS5kaXNwbGF5TmFtZSA9PT0gXCJDbG9zZUJ1dHRvblwiKVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChpc0FkZGVkICYmIGNsb3NlSW5kZXgpIHtcclxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgSW50ZXJhY3RpdmUucHJvcHMuY2hpbGRyZW5bY2xvc2VJbmRleF1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoc2V0dGluZ3MuZ2V0KFwicGluSWNvblwiLCBjb25zdGFudHMuU2V0dGluZ3MuRGVmYXVsdFNldHRpbmdzLlBJTl9JQ09OKSkgeyAgICBcclxuICAgICAgICAgICAgICAgICAgICBJbnRlcmFjdGl2ZS5wcm9wcy5jaGlsZHJlbi5zcGxpY2UoMSwgMCwgPGRpdiBjbGFzc05hbWU9e2pvaW5DbGFzc2VzKHN0eWxlcy5waW5CdXR0b24sIGlzQWRkZWQgPyBzdHlsZXMubG9uZWx5IDogXCJcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhDb250ZXh0TWVudSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc0FkZGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGlubmVkRE1TLnJlbW92ZVVzZXIocGlubmVkRE1TLmdldFVzZXJDYXRlZ29yeSh1c2VyLmlkKSEsIHVzZXIuaWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdlYnBhY2suQ29udGV4dE1lbnUub3BlbkNvbnRleHRNZW51KGUsICgpID0+IDxBZGRVc2VyIHVzZXJJZD17dXNlci5pZH0vPilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHshaXNBZGRlZCA/IDxEaXNjb3JkSWNvbiBuYW1lPVwiUGluTGF5ZXJcIiAvPiA6IDxEaXNjb3JkSWNvbiBuYW1lPVwiVW5waW5MYXllclwiIC8+fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PilcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICByZXR1cm4gcmV0XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufSIsImltcG9ydCAqIGFzIHBhdGNoZXIgZnJvbSBcIml0dGFpL3BhdGNoZXJcIlxyXG5pbXBvcnQgKiBhcyB3ZWJwYWNrIGZyb20gXCJpdHRhaS93ZWJwYWNrXCJcclxuaW1wb3J0IHsgUmVhY3QgfSBmcm9tIFwiaXR0YWkvd2VicGFja1wiXHJcbmltcG9ydCAqIGFzIHNldHRpbmdzIGZyb20gXCJpdHRhaS9zZXR0aW5nc1wiXHJcbmltcG9ydCB7IFVzZXJzLCBBY3Rpdml0aWVzLCBTdGF0dXMsIFVzZXJTZXR0aW5ncyB9IGZyb20gXCJpdHRhaS9zdG9yZXNcIlxyXG5pbXBvcnQgdHlwZSB7IFVzZXJPYmplY3QgfSBmcm9tIFwiaXR0YWlcIlxyXG5pbXBvcnQgeyBCdXR0b24sIERpc2NvcmRJY29uLCBGbGV4LCBTZWFyY2hCYXIsIFRleHRJbnB1dCwgVG9vbHRpcENvbnRhaW5lciB9IGZyb20gXCJpdHRhaS9jb21wb25lbnRzXCJcclxuaW1wb3J0IHBpbm5lZERNUyBmcm9tIFwiLi4vaGFuZGxlcnMvcGlubmVkRE1TXCJcclxuaW1wb3J0IG9wZW5DYXRlZ29yeVNldHRpbmdzIGZyb20gXCIuLi91dGlscy9vcGVuQ2F0ZWdvcnlTZXR0aW5nc1wiXHJcbmltcG9ydCBqb2luQ2xhc3NlcyBmcm9tIFwiLi4vdXRpbHMvam9pbkNsYXNzZXNcIlxyXG5pbXBvcnQgQ2F0ZWdvcnlDb250ZXh0TWVudSBmcm9tIFwiLi4vY29tcG9uZW50cy9Db250ZXh0TWVudXMvQ2F0ZWdvcnlcIlxyXG5cclxuLy8gc2h1bGtlciBib3ggbW9uc3RlciAtIGZXaGlwXHJcbmNvbnN0IHsgSXRlbSB9ID0gd2VicGFjay5maW5kQnlQcm9wcyhcIkl0ZW1cIilcclxuY29uc3QgeyBEaXZpZGVyIH0gPSB3ZWJwYWNrLmZpbmQobSA9PiBtPy5kZWZhdWx0Py5kaXNwbGF5TmFtZSA9PT0gXCJIZWFkZXJCYXJcIilcclxuY29uc3QgUGVvcGxlTGlzdFNlY3Rpb25lZE5vbkxhenkgPSB3ZWJwYWNrLmZpbmRCeURpc3BsYXlOYW1lKCdQZW9wbGVMaXN0U2VjdGlvbmVkTm9uTGF6eScpXHJcbmNvbnN0IEZyaWVuZFJvdyA9IHdlYnBhY2suZmluZEJ5RGlzcGxheU5hbWUoJ0ZyaWVuZFJvdycpXHJcbmNvbnN0IFNlY3Rpb25UaXRsZSA9IHdlYnBhY2suZmluZEJ5RGlzcGxheU5hbWUoXCJTZWN0aW9uVGl0bGVcIilcclxuY29uc3QgeyBFbXB0eVN0YXRlSW1hZ2UsIGRlZmF1bHQ6IEVtcHR5U3RhdGUsIEVtcHR5U3RhdGVUZXh0IH0gPSB3ZWJwYWNrLmZpbmRCeVByb3BzKFwiRW1wdHlTdGF0ZUltYWdlXCIpXHJcbmNvbnN0IHsgaWNvbldyYXBwZXIsIGNsaWNrYWJsZSwgaWNvbiB9ID0gd2VicGFjay5maW5kQnlQcm9wcyhcImNhcmV0XCIsIFwiY2xpY2thYmxlXCIpXHJcbmNvbnN0IHsgYnV0dG9uIH0gPSB3ZWJwYWNrLmZpbmRCeVByb3BzKFwiZnJpZW5kc0VtcHR5XCIpXHJcbmNvbnN0IHsgc2VhcmNoQmFyIH0gPSB3ZWJwYWNrLmZpbmRCeVByb3BzKFwiZW1wdHlTdGF0ZUNvbnRhaW5lclwiKVxyXG5cclxuY29uc3QgSURFTlRJRklFUiA9IFwiRE1DQVRFR09SSUVTXCJcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTXlzdGVyaW91c09iamVjdCB7XHJcbiAgICBhY3Rpdml0aWVzOiBBcnJheTxhbnk+LFxyXG4gICAgaXNNb2JpbGU6IGJvb2xlYW4sXHJcbiAgICBrZXk6IHN0cmluZyxcclxuICAgIG5pY2tuYW1lOiBzdHJpbmcsXHJcbiAgICBzdGF0dXM6IFwib25saW5lXCIgfCBcImRuZFwiIHwgXCJpZGxlXCIgfCBcInN0cmVhbWluZ1wiLFxyXG4gICAgdHlwZTogMSwgLy93aGF0cyBkaXMgdGJoXHJcbiAgICB1c2VyOiBVc2VyT2JqZWN0LFxyXG59XHJcblxyXG4vKlxyXG4gICAgTUVUSE9EOlxyXG4gICAgVGhlIEZyaWVuZHMgbGlzdCAoY2FsbGVkIGFzIFwiUGVvcGxlTGlzdFwiKSB0YWtlcyB0cmFjayBvZiB0aGUgdGFicyBieSBhIElEIGFuZCByZW5kZXJzIHRoZSBVSSBiYXNlZCBvbiB0aGF0IElELiBUaGUgSGVhZGVyQmFyIGRvZXMgdGhlXHJcbiAgICBqb2Igb2YgcmVuZGVyaW5nIHRoZSB0YWIgcGlsbHMgYW5kIG1ha2luZyB0aGUgZnVuY3Rpb25hbGl0eSBvZiBjaGFuZ2luZyB0aGVzZSBJRHMuIFRoZSBwaWxscyBhcmUgbWFudWFsbHkgYWRkZWQgYnkgdGhlIGRldmVsb3BlciwgYW5kXHJcbiAgICB0aGUgY2xpY2sgZXZlbnQgaGFuZGxpbmcgaXMgZG9uZSBieSB0aGUgXCJJdGVtXCIgY29tcG9uZW50LCB3aGlsZSwgYWdhaW4sIHRoZSBIZWFkZXJCYXIgY2hhbmdlcyB0aGUgSURzLiBOZWl0aGVyIHRoZSBQZW9wbGVMaXN0IGFuZCB0aGVcclxuICAgIEhlYWRlckJhciBzcGVjaWZpZXMgd2hpY2ggdGFicyBzaG91bGQgZXhpc3QgYW5kIHdobyBpcyB0aGUgaW1wb3N0b3IsIG1lYW5pbmcgdGhhdCBhIHBpbGwgd2l0aCBhIGN1c3RvbSBJRCBjYW4gYmUgcHVzaGVkIGFuZCBldmVyeXRoaW5nXHJcbiAgICB3aWxsIGdvIGZpbmUgbGlrZSBtYWdpYy5cclxuICAgIEJ5IGRlZmF1bHQsIGlmIGFuIGludmFsaWQgSUQgaXMgaW5zZXJ0ZWQsIFBlb3BsZUxpc3Qgd2lsbCByZW5kZXIgdGhlIFwiQWxsIGZyaWVuZHNcIiB0YWIsIGJ1dCBpdCB3aWxsIHN0aWxsIGlkZW50aWZ5IGFzIHRoYXQgZmFrZSBJRC4gXHJcbiAgICBUaGF0IG1lYW5zIHdlIGNhbiBkZWxldGUgdGhhdCByZW5kZXIgYW5kIHJlcGxhY2UgYnkgb3VyIG93biByZW5kZXJpbmcsIHdpdGhvdXQgbXVjaCBvZiBhIGlzc3VlLlxyXG4qL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XHJcbiAgICBwYXRjaGVyLmFmdGVyKFwiRnJpZW5kc0hlYWRlclBhdGNoXCIsIHdlYnBhY2suZmluZChtID0+IG0/LmRlZmF1bHQ/LmRpc3BsYXlOYW1lID09PSBcIkhlYWRlckJhckNvbnRhaW5lclwiKSwgXCJkZWZhdWx0XCIsIChbcHJvcHNdLCByZXMsIF90aGlzKSA9PiB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2cocHJvcHMpXHJcbiAgICAgICAgaWYoXHJcbiAgICAgICAgICAgIEJvb2xlYW4ocHJvcHMuY2hhbm5lbElkKSB8fCAvLyBjaGFubmVsXHJcbiAgICAgICAgICAgICghfnByb3BzLmNsYXNzTmFtZS5pbmRleE9mKFwidGhlbWUtXCIpKSAvL25vdCBmcmllbmRzIGxpc3QgdGFiXHJcbiAgICAgICAgKSByZXR1cm5cclxuXHJcblxyXG4gICAgICAgIGNvbnN0IE9nVGFiQmFyQ2hpbGRyZW5zID0gcHJvcHMuY2hpbGRyZW5bM10ucHJvcHMuY2hpbGRyZW5cclxuICAgICAgICBjb25zdCBBZGRGcmllbmRCdXR0b24gPSBPZ1RhYkJhckNoaWxkcmVuc1tPZ1RhYkJhckNoaWxkcmVucy5sZW5ndGggLSAxXVxyXG4gICAgICAgIGRlbGV0ZSBPZ1RhYkJhckNoaWxkcmVuc1tPZ1RhYkJhckNoaWxkcmVucy5sZW5ndGggLSAxXVxyXG4gICAgICAgIGNvbnN0IE5ld1RhYkJhckNoaWxkcmVucyA9IFtdXHJcbiAgICAgICAgZm9yIChjb25zdCBjYXRlZ29yeU5hbWUgb2YgcGlubmVkRE1TLmdldENhdGVnb3JpZXMoKSkge1xyXG4gICAgICAgICAgICBOZXdUYWJCYXJDaGlsZHJlbnMucHVzaCg8SXRlbVxyXG4gICAgICAgICAgICAgICAgaWQ9e2Ake0lERU5USUZJRVJ9LSR7Y2F0ZWdvcnlOYW1lfWB9XHJcbiAgICAgICAgICAgICAgICBjb2xvcj17cGlubmVkRE1TLmdldENvbG9yKGNhdGVnb3J5TmFtZSl9XHJcbiAgICAgICAgICAgICAgICBvbkNvbnRleHRNZW51PXsoZTogUmVhY3QuTW91c2VFdmVudDxIVE1MRGl2RWxlbWVudCwgTW91c2VFdmVudD4pID0+IHdlYnBhY2suQ29udGV4dE1lbnUub3BlbkNvbnRleHRNZW51KGUsICgpID0+IDxDYXRlZ29yeUNvbnRleHRNZW51IGNhdGVnb3J5PXtjYXRlZ29yeU5hbWV9IC8+KX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge2NhdGVnb3J5TmFtZX1cclxuICAgICAgICAgICAgPC9JdGVtPilcclxuICAgICAgICB9XHJcbiAgICAgICAgcHJvcHMuY2hpbGRyZW5bM10ucHJvcHMuY2hpbGRyZW4gPSBbLi4uT2dUYWJCYXJDaGlsZHJlbnMsIDxEaXZpZGVyIC8+LCAuLi5OZXdUYWJCYXJDaGlsZHJlbnMsIDxEaXZpZGVyIC8+LCBBZGRGcmllbmRCdXR0b25dXHJcbiAgICB9KVxyXG5cclxuICAgIHBhdGNoZXIuYWZ0ZXIoXCJGcmllbmRzTGlzdFBhdGNoXCIsIHdlYnBhY2suZmluZChtID0+IG0/LmRlZmF1bHQ/LmRpc3BsYXlOYW1lID09PSBcIlBlb3BsZUxpc3RcIiksIFwiZGVmYXVsdFwiLCAoW3Byb3BzXTogW3sgc2VjdGlvbkZpbHRlcjogc3RyaW5nfV0sIHJlcywgX3RoaXMpID0+IHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhwcm9wcywgcmVzLCBfdGhpcylcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXMucHJvcHMuY2hpbGRyZW5bMl0ucHJvcHMuc3RhdHVzU2VjdGlvbnMpXHJcbiAgICAgICAgaWYgKH5wcm9wcy5zZWN0aW9uRmlsdGVyLmluZGV4T2YoSURFTlRJRklFUikpIHtcclxuICAgICAgICAgICAgY29uc3QgY2F0ZWdvcnkgPSBwcm9wcy5zZWN0aW9uRmlsdGVyLnN1YnN0cmluZyhJREVOVElGSUVSLmxlbmd0aCArIDEpXHJcblxyXG4gICAgICAgICAgICByZXMucHJvcHMuY2hpbGRyZW4gPSA8RE1GcmllbmRzUmVuZGVyIHsuLi57IGNhdGVnb3J5IH19IGtleT17Y2F0ZWdvcnl9Lz5cclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIC8vIGZhaWxlZCBhdHRlbXB0IHRvIHVzZSB0aGUgb2cgc2VhcmNoXHJcbiAgICAvLyBwYXRjaGVyLmFmdGVyKFwiR2V0U3RhdGVQYXRjaFwiLCB3ZWJwYWNrLmZpbmRCeVByb3BzKFwiUm93XCIsIFwiUm93c1wiLCBcImRlZmF1bHRcIikuZGVmYXVsdCwgXCJnZXRTdGF0ZVwiLCAoW3Byb3BzXSwgcmVzLCBfdGhpcykgPT4ge1xyXG4gICAgLy8gICAgIGlmIChyZXMuc2VjdGlvbiA9PT0gXCJNRUVQXCIpIHJlcy5yb3dzLl9yb3dzID0gW3tcclxuICAgIC8vICAgICAgICAgYWN0aXZpdGllczogQWN0aXZpdGllcy5nZXRBY3Rpdml0aWVzKFVzZXJzLmdldEN1cnJlbnRVc2VyKCkuaWQpLFxyXG4gICAgLy8gICAgICAgICBhcHBsaWNhdGlvblN0cmVhbTogbnVsbCxcclxuICAgIC8vICAgICAgICAgaXNNb2JpbGU6IFVzZXJzLmdldEN1cnJlbnRVc2VyKCkubW9iaWxlLFxyXG4gICAgLy8gICAgICAgICBrZXk6IFVzZXJzLmdldEN1cnJlbnRVc2VyKCkuaWQsXHJcbiAgICAvLyAgICAgICAgIG5pY2tuYW1lOiB1bmRlZmluZWQsXHJcbiAgICAvLyAgICAgICAgIHN0YXR1czogU3RhdHVzLmdldFN0YXR1cyhVc2Vycy5nZXRDdXJyZW50VXNlcigpLmlkKSxcclxuICAgIC8vICAgICAgICAgdHlwZTogMSxcclxuICAgIC8vICAgICAgICAgdXNlcjogVXNlcnMuZ2V0Q3VycmVudFVzZXIoKSxcclxuICAgIC8vICAgICB9XVxyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKHsgcHJvcHMsIHJlcyB9KVxyXG4gICAgLy8gfSlcclxufVxyXG5cclxuaW50ZXJmYWNlIEZyaWVuZHNSZW5kZXJQcm9wcyB7XHJcbiAgICBjYXRlZ29yeTogc3RyaW5nXHJcbn1cclxuY29uc3QgRE1GcmllbmRzUmVuZGVyID0gKHsgY2F0ZWdvcnkgfTogRnJpZW5kc1JlbmRlclByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBbc2VhcmNoLCBzZXRTZWFyY2hdID0gUmVhY3QudXNlU3RhdGUoXCJcIilcclxuICAgIGNvbnN0IHVzZXJJRHMgPSBSZWFjdC51c2VNZW1vKCgpID0+IHBpbm5lZERNUy5nZXRVc2VycyhjYXRlZ29yeSksIFtjYXRlZ29yeV0pXHJcbiAgICBjb25zdCBzZWFyY2hlZFVzZXJJRHMgPSBSZWFjdC51c2VNZW1vKCgpID0+IHVzZXJJRHMuZmlsdGVyKGlkID0+IH5Vc2Vycy5nZXRVc2VyKGlkKS51c2VybmFtZS50b0xvd2VyQ2FzZSgpLmluZGV4T2Yoc2VhcmNoLnRvTG93ZXJDYXNlKCkpKSwgW3NlYXJjaF0pXHJcblxyXG4gICAgaWYgKHVzZXJJRHMubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIDw+XHJcbiAgICAgICAgICAgIDxTZWFyY2hCYXJcclxuICAgICAgICAgICAgICAgIHF1ZXJ5PXtzZWFyY2h9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17c2V0U2VhcmNofVxyXG4gICAgICAgICAgICAgICAgb25DbGVhcj17KCkgPT4gc2V0U2VhcmNoKFwiXCIpfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzZWFyY2hCYXJ9XHJcbiAgICAgICAgICAgICAgICBzaXplPXtTZWFyY2hCYXIuU2l6ZXMuTUVESVVNfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPFNlY3Rpb25UaXRsZSB0aXRsZT17PEZsZXg+XHJcbiAgICAgICAgICAgICAgICAgICAgPGIgc3R5bGU9e3sgY29sb3I6IHBpbm5lZERNUy5nZXRDb2xvcihjYXRlZ29yeSksIGZsZXhHcm93OiAxIH19PntjYXRlZ29yeX0g4oCTIHtzZWFyY2hlZFVzZXJJRHMubGVuZ3RofTwvYj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXBDb250YWluZXIgdGV4dD1cIkFkZCBhIG5ldyBwZXJzb25cIiBwb3NpdGlvbj1cImJvdHRvbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17am9pbkNsYXNzZXMoaWNvbldyYXBwZXIsIGNsaWNrYWJsZSl9IG9uQ2xpY2s9eygpID0+IG9wZW5DYXRlZ29yeVNldHRpbmdzKGNhdGVnb3J5KX0gc3R5bGU9e3sgd2lkdGg6IFwiMTZweFwiLCBoZWlnaHQ6IFwiMTZweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPERpc2NvcmRJY29uIG5hbWU9XCJQZXJzb25BZGRcIiB0eXBlPVwibm9uZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcENvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDwvRmxleD59IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAge3NlYXJjaGVkVXNlcklEcy5sZW5ndGggIT09IDAgPyA8UGVvcGxlTGlzdFNlY3Rpb25lZE5vbkxhenlcclxuICAgICAgICAgICAgICAgIHJlbmRlclJvdz17KG15c3RlcmlvdXNPYmplY3Q6IE15c3RlcmlvdXNPYmplY3QpID0+IDxGcmllbmRSb3cgey4uLk9iamVjdC5hc3NpZ24oe30sIG15c3RlcmlvdXNPYmplY3QsIHtpc0ZvY3VzZWQ6IHRydWV9KX0gLz59XHJcbiAgICAgICAgICAgICAgICAvLyBzZWFyY2hRdWVyeT17XCJrXCJ9IC8vZm9yIHNvbWUgcmVhc29uIHRoaXMgZG9lcyBub3Qgd29ya1xyXG4gICAgICAgICAgICAgICAgc3RhdHVzU2VjdGlvbnM9e1tcclxuICAgICAgICAgICAgICAgICAgICBzZWFyY2hlZFVzZXJJRHMubWFwKHVzZXJJZCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHVzZXIgPSBVc2Vycy5nZXRVc2VyKHVzZXJJZCkgYXMgVXNlck9iamVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBtb2NrZWQgaWRlbnRpZmllci4gYWNjb3JkaW5nIHRvIGRldmlsYnJvICh5ZXMsIGl2ZSBhY3R1YWxseSBsaXN0ZW5lZCB0byBoaW0pIHRoZSBmcmllbmRzIGxpc3QgZmV0Y2hlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZpdGllczogQWN0aXZpdGllcy5nZXRBY3Rpdml0aWVzKHVzZXIuaWQpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNNb2JpbGU6IHVzZXIubW9iaWxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiB1c2VyLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmlja25hbWU6IHVzZXIudXNlcm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IFN0YXR1cy5nZXRTdGF0dXModXNlci5pZCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAxLCAvL3doYXRzIGRpcyB0YmhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXI6IHVzZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gYXMgTXlzdGVyaW91c09iamVjdFxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAvPiA6IDxFbXB0eVN0YXRlIHRoZW1lPXtVc2VyU2V0dGluZ3MudGhlbWV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxFbXB0eVN0YXRlSW1hZ2Ugey4uLntcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ3aWR0aFwiOiA0MjEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaGVpZ2h0XCI6IDIxOCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaWdodFNyY1wiOiBcIi9hc3NldHMvZmQ4NzlhMjg4MDdiNjZiMzhkNTRlN2RiNmVhMThhNjkuc3ZnXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGFya1NyY1wiOiBcIi9hc3NldHMvYjM2ZGU5ODBiMTc0ZDdiNzk4Yzg5ZjM1YzExNmU1YzYuc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxFbXB0eVN0YXRlVGV4dCBub3RlPXs8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBXdW1wdXMgbG9va2VkIGJ1dCBjb3VsZG4ndCBmaW5kIGFueW9uZSB3aXRoIHRoYXQgbmFtZSBpbiB0aGlzIGNhdGVnb3J5LlxyXG4gICAgICAgICAgICAgICAgICAgIDwvPn0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IG9wZW5DYXRlZ29yeVNldHRpbmdzKGNhdGVnb3J5KX0gY2xhc3NOYW1lPXtidXR0b259PkFkZCBhIHBlcnNvbiB3aXRoIHRoYXQgbmFtZTwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L0VtcHR5U3RhdGU+fVxyXG4gICAgICAgIDwvPlxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gPD5cclxuICAgICAgICAgICAgPEVtcHR5U3RhdGUgdGhlbWU9e1VzZXJTZXR0aW5ncy50aGVtZX0+XHJcbiAgICAgICAgICAgICAgICA8RW1wdHlTdGF0ZUltYWdlIHsuLi57XHJcbiAgICAgICAgICAgICAgICAgICAgXCJ3aWR0aFwiOiA0MTUsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJoZWlnaHRcIjogMjAwLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibGlnaHRTcmNcIjogXCIvYXNzZXRzLzM2YzlhMmZiN2QwNTkzYTU4MWE5MjM3MzEyMWMyODQ4LnN2Z1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZGFya1NyY1wiOiBcIi9hc3NldHMvYjM2YzcwNWY3OTBkYWQyNTM5ODFmMTg5MzA4NTAxNWEuc3ZnXCJcclxuICAgICAgICAgICAgICAgIH19IC8+XHJcbiAgICAgICAgICAgICAgICA8RW1wdHlTdGF0ZVRleHQgbm90ZT17PD5cclxuICAgICAgICAgICAgICAgICAgICBBcHBhcmVudGx5IHRoaXMgY2F0ZWdvcnkgZG9lcyBvbmx5IGhhdmUgV3VtcHVzLlxyXG4gICAgICAgICAgICAgICAgPC8+fSAvPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBvcGVuQ2F0ZWdvcnlTZXR0aW5ncyhjYXRlZ29yeSl9IGNsYXNzTmFtZT17YnV0dG9ufT5BZGQgcGVyc29uPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvRW1wdHlTdGF0ZT5cclxuICAgICAgICA8Lz5cclxuICAgIH1cclxufSIsImltcG9ydCB7IENoYW5uZWxJRCB9IGZyb20gXCJpdHRhaVwiXHJcbmltcG9ydCB7IENvbG9yVXRpbHMgfSBmcm9tIFwiaXR0YWkvd2VicGFja1wiXHJcbmltcG9ydCB7IENoYW5uZWxzLCBVc2VycyB9IGZyb20gXCJpdHRhaS9zdG9yZXNcIlxyXG5pbXBvcnQgeyBQaW5uZWRETVMgfSBmcm9tIFwiLi4vdHlwZXNcIlxyXG5cclxuaW50ZXJmYWNlIERCQ2F0ZWdvcnkge1xyXG4gICAgY29sbGFwc2VkOiBib29sZWFuXHJcbiAgICBjb2xvcjogW251bWJlciwgbnVtYmVyLCBudW1iZXIsIG51bWJlcl1cclxuICAgIGRtczogQ2hhbm5lbElEW11cclxuICAgIGlkOiBzdHJpbmdcclxuICAgIG5hbWU6IHN0cmluZ1xyXG4gICAgcG9zOiBudW1iZXJcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGZyb21EZXZpbGJyb1BpbkRNcyA9ICgpID0+IHtcclxuICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgY29uc3QgRGV2aWxicm9QaW5ETXNEYXRhID0gZ2xvYmFsVGhpcy5CZEFwaS5nZXREYXRhKFwiUGluRE1zXCIsIFwiYWxsXCIpXHJcbiAgICBjb25zdCBjaGFubmVsTGlzdCA9IERldmlsYnJvUGluRE1zRGF0YS5waW5uZWRbVXNlcnMuZ2V0Q3VycmVudFVzZXIoKS5pZF0uY2hhbm5lbExpc3RcclxuICAgIGNvbnNvbGUubG9nKE9iamVjdC52YWx1ZXMoY2hhbm5lbExpc3QpKVxyXG4gICAgbGV0IGNhdGVnb3J5OiBQaW5uZWRETVMgPSB7fVxyXG4gICAgZm9yIChjb25zdCBkYkNhdGVnb3J5IG9mIE9iamVjdC52YWx1ZXMoY2hhbm5lbExpc3QpIGFzIERCQ2F0ZWdvcnlbXSkge1xyXG4gICAgICAgIGNvbnN0IHVzZXJJRHMgPSBkYkNhdGVnb3J5LmRtc1xyXG4gICAgICAgICAgICAuZmlsdGVyKGNJZCA9PiBDaGFubmVscy5nZXRDaGFubmVsKGNJZCk/LnR5cGUgPT09IDEpIC8vdGhlID8gaXMgdG8gaWdub3JlIGludmFsaWQgSURzXHJcbiAgICAgICAgICAgIC5tYXAoY0lkID0+IENoYW5uZWxzLmdldENoYW5uZWwoY0lkKS5yZWNpcGllbnRzWzBdKVxyXG4gICAgICAgIGlmKHVzZXJJRHMubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5W2RiQ2F0ZWdvcnkubmFtZV0gPSB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogQ29sb3JVdGlscy5pbnQyaGV4KENvbG9yVXRpbHMucmdiMmludChgcmdiYSgke2RiQ2F0ZWdvcnkuY29sb3JbMF19LCAke2RiQ2F0ZWdvcnkuY29sb3JbMV19LCAke2RiQ2F0ZWdvcnkuY29sb3JbMl19LCAxKWApKSxcclxuICAgICAgICAgICAgICAgIHVzZXJzOiB1c2VySURzLFxyXG4gICAgICAgICAgICAgICAgc2hvdzogIWRiQ2F0ZWdvcnkuY29sbGFwc2VkXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY2F0ZWdvcnlcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGhhc1RoZW1FbmFibGVkID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwaW5ETXM6IEJvb2xlYW4oKGdsb2JhbFRoaXMgYXMgYW55KS5CZEFwaSkgJiYgQm9vbGVhbigoZ2xvYmFsVGhpcyBhcyBhbnkpLkJkQXBpLlBsdWdpbnMuaXNFbmFibGVkKFwiUGluRE1zXCIpKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgaGFzQW55T2ZUaGVQbHVnaW5zID0gKCkgPT4ge1xyXG4gICAgY29uc3QgcmVzdWx0cyA9IGhhc1RoZW1FbmFibGVkKClcclxuICAgIHJldHVybiByZXN1bHRzLnBpbkRNc1xyXG59IiwiaW1wb3J0ICogYXMgd2VicGFjayBmcm9tIFwiaXR0YWkvd2VicGFja1wiXHJcbmltcG9ydCB7IFJlYWN0IH0gZnJvbSBcIml0dGFpL3dlYnBhY2tcIlxyXG5pbXBvcnQgeyBNb2RhbCwgVGV4dCwgSGVhZGluZywgQnV0dG9uIH0gZnJvbSBcIml0dGFpL2NvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgTWFyZ2lucyB9IGZyb20gXCJpdHRhaS9jbGFzc2VzXCI7XHJcbmltcG9ydCAqIGFzIEltcG9ydGVyIGZyb20gXCIuLi8uLi9oYW5kbGVycy9pbXBvcnRGcm9tUGx1Z2luXCJcclxuaW1wb3J0IHBpbm5lZERNUyBmcm9tIFwiLi4vLi4vaGFuZGxlcnMvcGlubmVkRE1TXCI7XHJcblxyXG5jb25zdCB7IFNsaWRlcywgc3ByaW5nQ29uZmlnIH0gPSB3ZWJwYWNrLmZpbmRCeVByb3BzKFwiU2xpZGVcIilcclxuXHJcbmNvbnN0IFBhZ2VzID0ge1xyXG4gICAgU1dJVENIOiBcInN3aXRjaFwiLFxyXG4gICAgU1dJVENIX0RPTkU6IFwic3dpdGNoRG9uZVwiXHJcbn1cclxuXHJcbmNvbnN0IFdJRFRIID0gNDAwO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHsgdHJhbnNpdGlvblN0YXRlOiAxIHwgMiB8IDMsIG9uQ2xvc2U6ICgpID0+IHZvaWQgfVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZW51TW9kYWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHMsIHtwYWdlOiBzdHJpbmd9PiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogUHJvcHMgfCBSZWFkb25seTxQcm9wcz4pIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgcGFnZTogUGFnZXMuU1dJVENILFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgc2V0UGFnZShwYWdlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtwYWdlfSlcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIDxNb2RhbC5Nb2RhbFJvb3Qgc2l6ZT17TW9kYWwuTW9kYWxTaXplLkRZTkFNSUN9IHsuLi50aGlzLnByb3BzfT5cclxuICAgICAgICAgICAgPFNsaWRlc1xyXG4gICAgICAgICAgICAgICAgYWN0aXZlU2xpZGU9e3RoaXMuc3RhdGUucGFnZX1cclxuICAgICAgICAgICAgICAgIHNwcmluZ0NvbmZpZz17c3ByaW5nQ29uZmlnfVxyXG4gICAgICAgICAgICAgICAgd2lkdGg9e1dJRFRIfVxyXG4gICAgICAgICAgICAgICAgY2hpbGRyZW49e1tcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPXtQYWdlcy5TV0lUQ0h9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TW9kYWwuTW9kYWxIZWFkZXIgc2VwYXJhdG9yPXtmYWxzZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SGVhZGluZyB2YXJpYW50PVwiaGVhZGluZy1tZC9ub3JtYWxcIj5Td2l0Y2g/PC9IZWFkaW5nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L01vZGFsLk1vZGFsSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TW9kYWwuTW9kYWxDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgY2xhc3NOYW1lPXtNYXJnaW5zLm1hcmdpbkJvdHRvbTIwfT5JdCBzZWVtcyB0aGF0IHlvdSBoYXZlIHVzZWQgUGluRE1zIGJlZm9yZS4gRG8geW91IHdhbnQgdG8gc3dpdGNoIHRoZSB1c2VyIGxpc3QgdG8gdGhpcyBwbHVnaW4/PC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L01vZGFsLk1vZGFsQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1vZGFsLk1vZGFsRm9vdGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXthc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5zd2l0Y2goKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0UGFnZShQYWdlcy5TV0lUQ0hfRE9ORSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlN3aXRjaDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjb2xvcj17QnV0dG9uLkNvbG9ycy5XSElURX0gbG9vaz17QnV0dG9uLkxvb2tzLkxJTkt9IG9uQ2xpY2s9e3RoaXMucHJvcHMub25DbG9zZX0+Tm88L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Nb2RhbC5Nb2RhbEZvb3Rlcj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4sXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD17UGFnZXMuU1dJVENIX0RPTkV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TW9kYWwuTW9kYWxIZWFkZXIgc2VwYXJhdG9yPXtmYWxzZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SGVhZGluZyB2YXJpYW50PVwiaGVhZGluZy1tZC9ub3JtYWxcIj5Eb25lPC9IZWFkaW5nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L01vZGFsLk1vZGFsSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TW9kYWwuTW9kYWxDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgY2xhc3NOYW1lPXtNYXJnaW5zLm1hcmdpbkJvdHRvbTIwfT5UaGUgc3dpdGNoaW5nIHdhcyBkb25lIHN1Y2Vzc2Z1bGx5LiBXZSBjYW4gZGlzYWJsZSB0aGVtIGlmIHlvdSB3YW50PC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L01vZGFsLk1vZGFsQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1vZGFsLk1vZGFsRm9vdGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXthc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5kaXNhYmxlQWxsKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uQ2xvc2UoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+RGlzYWJsZTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjb2xvcj17QnV0dG9uLkNvbG9ycy5XSElURX0gbG9vaz17QnV0dG9uLkxvb2tzLkxJTkt9IG9uQ2xpY2s9e3RoaXMucHJvcHMub25DbG9zZX0+SSBhbSBmaW5lPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTW9kYWwuTW9kYWxGb290ZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIDwvTW9kYWwuTW9kYWxSb290PlxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHN3aXRjaCgpIHtcclxuICAgICAgICBpZiAoSW1wb3J0ZXIuaGFzVGhlbUVuYWJsZWQoKS5waW5ETXMpe1xyXG4gICAgICAgICAgICBjb25zdCBuZXdTZXR0aW5ncyA9IEltcG9ydGVyLmZyb21EZXZpbGJyb1BpbkRNcygpXHJcbiAgICAgICAgICAgIHBpbm5lZERNUy5zZXRSYXcobmV3U2V0dGluZ3MpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGRpc2FibGVBbGwoKSB7XHJcbiAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgaWYgKEltcG9ydGVyLmhhc1RoZW1FbmFibGVkKCkucGluRE1zKSBCZEFwaT8uUGx1Z2lucz8uZGlzYWJsZT8uKFwiUGluRE1zXCIpXHJcbiAgICB9XHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi90eXBlcy5kLnRzXCIgLz5cclxuXHJcbmltcG9ydCB7IFBsdWdpbiB9IGZyb20gXCJpdHRhaS9lbnRpdGllc1wiXHJcbmltcG9ydCAqIGFzIHBhdGNoZXIgZnJvbSBcIml0dGFpL3BhdGNoZXJcIlxyXG5pbXBvcnQgeyBzZWFyY2hDbGFzc05hbWVNb2R1bGVzIH0gZnJvbSBcIml0dGFpL3V0aWxpdGllc1wiXHJcbmltcG9ydCAqIGFzIHdlYnBhY2sgZnJvbSBcIml0dGFpL3dlYnBhY2tcIlxyXG5pbXBvcnQgeyBSZWFjdCwgRGlzcGF0Y2hlciwgTW9kYWxBY3Rpb25zIH0gZnJvbSBcIml0dGFpL3dlYnBhY2tcIlxyXG5pbXBvcnQgKiBhcyBJdHRhaSBmcm9tIFwiaXR0YWlcIlxyXG5cclxuaW1wb3J0IFNldHRpbmdzIGZyb20gXCIuL2NvbXBvbmVudHMvU2V0dGluZ3NcIlxyXG5pbXBvcnQgcGF0Y2hEbUxpc3QgZnJvbSBcIi4vcGF0Y2hlcy9kbWxpc3RcIlxyXG5pbXBvcnQgcGF0Y2hEbUJ1dHRvbiBmcm9tIFwiLi9wYXRjaGVzL2RtYnV0dG9uXCJcclxuaW1wb3J0IHBhdGNoRnJpZW5kc1BhZ2UgZnJvbSBcIi4vcGF0Y2hlcy9mcmllbmRzbGlzdFwiXHJcbmltcG9ydCBwaW5uZWRETVMgZnJvbSBcIi4vaGFuZGxlcnMvcGlubmVkRE1TXCJcclxuaW1wb3J0ICogYXMgY29uc3RhbnRzIGZyb20gXCIuL2NvbnN0YW50c1wiXHJcbmltcG9ydCBTZXR0aW5nc1N3aXRjaGVyIGZyb20gXCIuL2NvbXBvbmVudHMvU2V0dGluZ3NTd2l0Y2hlclwiXHJcbmltcG9ydCB7IGhhc0FueU9mVGhlUGx1Z2lucyB9IGZyb20gXCIuL2hhbmRsZXJzL2ltcG9ydEZyb21QbHVnaW5cIlxyXG5cclxubGV0IHZpc2liaWxpdHlTdG9yYWdlOiB7W2NhdGVnb3J5OiBzdHJpbmddOiBib29sZWFufSA9IHt9XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBETUZvbGRlcnMgZXh0ZW5kcyBQbHVnaW4ge1xyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTZXR0aW5nc1BhbmVsKCgpID0+IDxTZXR0aW5ncyAvPilcclxuICAgICAgICBcclxuICAgICAgICAvL0B0cy1pZ25vcmUgaW50ZXJuYWwgdXNhZ2Ugb25seVxyXG4gICAgICAgIGdsb2JhbFRoaXMuSXR0YWkgPSBJdHRhaVxyXG4gICAgICAgIFxyXG4gICAgICAgIHBhdGNoRG1MaXN0KClcclxuICAgICAgICBwYXRjaERtQnV0dG9uKClcclxuICAgICAgICBwYXRjaEZyaWVuZHNQYWdlKClcclxuXHJcbiAgICAgICAgdGhpcy5vcGVuU2V0dGluZ3NTd2l0Y2hlcigpXHJcblxyXG4gICAgICAgIERpc3BhdGNoZXIuc3Vic2NyaWJlKFwiU1RSRUFNRVJfTU9ERV9VUERBVEVcIiwgdGhpcy5vblN0cmVhbWVyTW9kZUNoYW5nZSlcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9wZW5TZXR0aW5nc1N3aXRjaGVyKCkge1xyXG4gICAgICAgIGlmKGhhc0FueU9mVGhlUGx1Z2lucygpKSBNb2RhbEFjdGlvbnMub3Blbk1vZGFsKChwcm9wcykgPT4gPFNldHRpbmdzU3dpdGNoZXIgey4uLnByb3BzfSAvPilcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uU3RyZWFtZXJNb2RlQ2hhbmdlKHt2YWx1ZX06IHt2YWx1ZTogYm9vbGVhbn0pIHtcclxuICAgICAgICBpZiAodGhpcy5zZXR0aW5ncy5nZXQoXCJzdHJlYW1lck1vZGVcIiwgY29uc3RhbnRzLlNldHRpbmdzLkRlZmF1bHRTZXR0aW5ncy5TVFJFQU1FUl9NT0RFKSlcclxuICAgICAgICBwaW5uZWRETVMuZ2V0Q2F0ZWdvcmllcygpLmZvckVhY2goY2F0ZWdvcnkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHZpc2liaWxpdHlTdG9yYWdlW2NhdGVnb3J5XSA9IHBpbm5lZERNUy5nZXRWaXNpYmlsaXR5KGNhdGVnb3J5KVxyXG4gICAgICAgICAgICAgICAgcGlubmVkRE1TLnNldFZpc2liaWxpdHkoY2F0ZWdvcnksIGZhbHNlKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcGlubmVkRE1TLnNldFZpc2liaWxpdHkoY2F0ZWdvcnksIHZpc2liaWxpdHlTdG9yYWdlW2NhdGVnb3J5XSA/PyBmYWxzZSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgRGlzcGF0Y2hlci5kaXJ0eURpc3BhdGNoKHsgdHlwZTogY29uc3RhbnRzLkRJU1BBVENIRVJfUElORE1TX0NIQU5HRV9MSVNUIH0pXHJcbiAgICB9XHJcblxyXG4gICAgc3RvcCgpIHtcclxuICAgICAgICBwYXRjaGVyLnVucGF0Y2hBbGwoKVxyXG4gICAgICAgIERpc3BhdGNoZXIudW5zdWJzY3JpYmUoXCJTVFJFQU1FUl9NT0RFX1VQREFURVwiLCB0aGlzLm9uU3RyZWFtZXJNb2RlQ2hhbmdlKVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IG1hbmlmZXN0IGFzIHBsdWdpbk1hbmlmZXN0IH0gZnJvbSBcIkBpdHRhaS9jb25maWdcIjtcclxuY29uc3Qge25hbWV9ID0gcGx1Z2luTWFuaWZlc3RcclxuXHJcbmNsYXNzIFdTTWFuYWdlciB7XHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgdGhpcy53cyA9IG5ldyBXZWJTb2NrZXQoJ3dzOi8vbG9jYWxob3N0OjMwMDAnKTtcclxuICAgICAgICB0aGlzLndzLmFkZEV2ZW50TGlzdGVuZXIoJ29wZW4nLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMud3Muc2VuZChgaWRlbnRpZnksJHtwcm9jZXNzLmVudi5DTElFTlRfTU9EfWApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgdGhpcy53cy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3JlY2VpdmVkOiAlcycsIGRhdGEuZGF0YSk7XHJcbiAgICAgICAgICAgIHRoaXMucGFyc2VNc2coZGF0YS5kYXRhKVxyXG4gICAgICAgIH0pO1xyXG4gICAgXHJcbiAgICBcclxuICAgICAgICB0aGlzLndzLmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2Vycm9yOiAlcycsIGRhdGEpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgXHJcbiAgICAgICAgdGhpcy53cy5hZGRFdmVudExpc3RlbmVyKCdjbG9zZScsIChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjbG9zZTogJXMnLCBkYXRhKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzdG9wICgpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcInN0b3BcIilcclxuICAgICAgICB0aGlzLndzLmNsb3NlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcGFyc2VNc2cobSkge1xyXG4gICAgICAgIGNvbnN0IG1zZyA9IG0uc3BsaXQoXCIsXCIpO1xyXG4gICAgICAgIHN3aXRjaCAobXNnWzBdKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJyZWxvYWRcIjpcclxuICAgICAgICAgICAgICAgIHJlbG9hZFBsdWdpbigpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufVxyXG5cclxubGV0IG1hbmFnZXI7XHJcblxyXG5leHBvcnQgY29uc3QgdmVyc2lvbiA9IFwiMS4wLjBcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0RGV2U2VydmVyICgpIHtcclxuICAgIG1hbmFnZXIgPSBuZXcgV1NNYW5hZ2VyKCk7XHJcbiAgICBtYW5hZ2VyLnN0YXJ0KCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzdG9wRGV2U2VydmVyKCkge1xyXG4gICAgbWFuYWdlci5zdG9wKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZWxvYWRQbHVnaW4oKSB7XHJcbiAgICBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9wbHVnaW4uanNcIikudGhlbihyID0+IHIudGV4dCgpKS50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgIGxldCBfX0lUVEFJX0RFVlNFUlZFUl9WRVJTSU9OX18gPSB2ZXJzaW9uO1xyXG4gICAgICAgIGxldCBfX0lUVEFJX0RFVlNFUlZFUl9JTlNUQU5DRV9fID0geyB2ZXJzaW9uLCBzdGFydERldlNlcnZlciwgc3RvcERldlNlcnZlciwgcmVsb2FkUGx1Z2luLCBsb2FkUGx1Z2luLCBtYW5hZ2VyIH07XHJcbiAgICAgICAgLy8gS2VlcCB0aGlzIGxvZyBzbyByb2xsdXAgZG9lc24ndCBkZWxldGUgdGhlc2UgdmFyaWFibGVzXHJcbiAgICAgICAgY29uc29sZS5kZWJ1ZyhcInJlbG9hZGluZyB1c2luZyBpbnN0YW5jZVwiLCBfX0lUVEFJX0RFVlNFUlZFUl9JTlNUQU5DRV9fLCBcInZlcnNpb25cIiwgX19JVFRBSV9ERVZTRVJWRVJfVkVSU0lPTl9fKVxyXG4gICAgICAgIGNvbnN0IGluc3RhbmNlID0gZXZhbChkYXRhKTtcclxuICAgIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkUGx1Z2luKHApIHtcclxuICAgIGxldCBtb2QgPSBwcm9jZXNzLmVudi5DTElFTlRfTU9EO1xyXG4gICAgXHJcbiAgICBzd2l0Y2ggKG1vZCkge1xyXG4gICAgICAgIGNhc2UgXCJnb29zZW1vZFwiOlxyXG4gICAgICAgICAgICB3aW5kb3cuZ29vc2Vtb2QubW9kdWxlc1tuYW1lXT8uZ29vc2Vtb2RIYW5kbGVycz8ub25SZW1vdmU/LigpO1xyXG4gICAgICAgICAgICB3aW5kb3cuZ29vc2Vtb2QubW9kdWxlc1tuYW1lXSA9IHA7XHJcbiAgICAgICAgICAgIHdpbmRvdy5nb29zZW1vZC5tb2R1bGVzW25hbWVdPy5nb29zZW1vZEhhbmRsZXJzPy5vbkltcG9ydD8uKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcInBvd2VyY29yZHYyXCI6XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cucG93ZXJjb3JkLnBsdWdpbk1hbmFnZXIudW5sb2FkKG5hbWUpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICAhZS50b1N0cmluZygpLnN0YXJ0c1dpdGgoXCJFcnJvcjogVHJpZWQgdG8gdW5sb2FkIGEgbm9uIGluc3RhbGxlZCBwbHVnaW4gKHVuZGVmaW5lZClcIikgJiYgY29uc29sZS5sb2coZSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBtYW5pZmVzdCA9IE9iamVjdC5hc3NpZ24oe1xyXG4gICAgICAgICAgICAgICAgYXBwTW9kZTogJ2FwcCcsXHJcbiAgICAgICAgICAgICAgICBkZXBlbmRlbmNpZXM6IFtdLFxyXG4gICAgICAgICAgICAgICAgb3B0aW9uYWxEZXBlbmRlbmNpZXM6IFtdXHJcbiAgICAgICAgICAgIH0sIHBsdWdpbk1hbmlmZXN0KVxyXG4gICAgICAgICAgICBwLnByb3RvdHlwZS5lbnRpdHlJRCA9IG5hbWU7XHJcbiAgICAgICAgICAgIHAucHJvdG90eXBlLm1hbmlmZXN0ID0gbWFuaWZlc3Q7XHJcbiAgICAgICAgICAgIHdpbmRvdy5wb3dlcmNvcmQucGx1Z2luTWFuYWdlci5wbHVnaW5zLnNldChuYW1lLCBuZXcgcCgpKTtcclxuICAgICAgICAgICAgd2luZG93LnBvd2VyY29yZC5wbHVnaW5NYW5hZ2VyLmxvYWQobmFtZSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgKiBhcyBEZXZDbGllbnQgZnJvbSBcIi4vY2xpZW50LmpzXCI7XHJcbmxldCBoYXNEZXZTZXJ2ZXIgPSBmYWxzZTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkRGV2U2VydmVyKCkge1xyXG4gICAgaWYgKHByb2Nlc3MuZW52LkRFVl9NT0RFID09IFwidHJ1ZVwiKSB7XHJcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52LkNMSUVOVF9NT0QgPT09IFwiYmV0dGVyZGlzY29yZFwiKSByZXR1cm5cclxuICAgICAgICBoYXNEZXZTZXJ2ZXIgPSB0cnVlO1xyXG4gICAgICAgIHRyeSB7IF9fSVRUQUlfREVWU0VSVkVSX1ZFUlNJT05fXzsgfSBjYXRjaCAoXykgeyBjb25zb2xlLmxvZyhcIm5vIHNlcnZlclwiKTsgaGFzRGV2U2VydmVyID0gZmFsc2U7IH0gLy8gY2hlY2sgZm9yIHZhcmlhYmxlLCBqcyBpcyB3ZWlyZFxyXG4gICAgICAgIGNvbnN0IHZlcnNpb24gPSBEZXZDbGllbnQudmVyc2lvblxyXG4gICAgICAgIGlmIChoYXNEZXZTZXJ2ZXIgJiYgX19JVFRBSV9ERVZTRVJWRVJfVkVSU0lPTl9fICE9PSB2ZXJzaW9uKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVXBncmFkaW5nIGRldiBzZXJ2ZXIgY2xpZW50XCIpXHJcbiAgICAgICAgICAgIF9fSVRUQUlfREVWU0VSVkVSX0lOU1RBTkNFX18uc3RvcERldlNlcnZlcigpXHJcbiAgICAgICAgICAgIGhhc0RldlNlcnZlciA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaGFzRGV2U2VydmVyKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVXNpbmcgZXhpc3RpbmcgZGV2IHNlcnZlciBjbGllbnRcIilcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFoYXNEZXZTZXJ2ZXIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJMb2FkaW5nIGRldiBzZXJ2ZXIgY2xpZW50XCIpXHJcbiAgICAgICAgICAgRGV2Q2xpZW50LmRlZmF1bHQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsb2FkRGV2UGx1Z2luKHApIHtcclxuICAgIGlmIChwcm9jZXNzLmVudi5ERVZfTU9ERSA9PSBcInRydWVcIikge1xyXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5DTElFTlRfTU9EID09PSBcImJldHRlcmRpc2NvcmRcIikgcmV0dXJuXHJcbiAgICAgICAgaWYgKGhhc0RldlNlcnZlcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkxvYWRpbmcgdXNpbmcgZXhpc3RpbmcgZGV2IHNlcnZlciBjbGllbnRcIilcclxuICAgICAgICAgICAgX19JVFRBSV9ERVZTRVJWRVJfSU5TVEFOQ0VfXy5sb2FkUGx1Z2luKHApXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJMb2FkaW5nIHBsdWdpbiB1c2luZyBuZXcgZGV2IHNlcnZlciBjbGllbnRcIilcclxuICAgICAgICAgICAgRGV2Q2xpZW50LmxvYWRQbHVnaW4ocCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IEJEUGx1Z2luIGZyb20gXCIuLi9lbnRpdGllcy9CRFBsdWdpblwiO1xyXG5pbXBvcnQgR01QbHVnaW4gZnJvbSBcIi4uL2VudGl0aWVzL0dNUGx1Z2luXCI7XHJcbmltcG9ydCBQQ3YyUGx1Z2luIGZyb20gXCIuLi9lbnRpdGllcy9QQ3YyUGx1Z2luXCI7XHJcbmltcG9ydCB7IHNldEluc3RhbmNlIH0gZnJvbSBcIi4uL3NldHRpbmdzXCI7XHJcbmltcG9ydCAqIGFzIENoYW5nZWxvZ0hhbmRsZXIgZnJvbSBcIi4uL2NoYW5nZWxvZ1wiO1xyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCBwbHVnaW5DbGFzcyBmcm9tIFwiQGl0dGFpL3BsdWdpblwiO1xyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCAqIGFzIGNvbmZpZyBmcm9tIFwiQGl0dGFpL2NvbmZpZ1wiO1xyXG5pbXBvcnQgeyB1bnBhdGNoQWxsIH0gZnJvbSBcIi4uL3BhdGNoZXJcIjtcclxuaW1wb3J0IHsgbG9hZERldlBsdWdpbiwgbG9hZERldlNlcnZlciB9IGZyb20gXCIuLi9kZXZjbGllbnRcIjtcclxuaWYgKHByb2Nlc3MuZW52LkRFVl9NT0RFID09IFwidHJ1ZVwiKSBsb2FkRGV2U2VydmVyKCk7XHJcblxyXG5sZXQgSXR0YWlQbHVnaW4gPSBjbGFzcyBJdHRhaVBsdWdpbiBleHRlbmRzICgoKSA9PiB7XHJcbiAgICAvLyBzd2l0Y2ggKHByb2Nlc3MuZW52LkNMSUVOVF9NT0QpIHtcclxuICAgIC8vICAgICBjYXNlIFwicG93ZXJjb3JkdjJcIjpcclxuICAgIC8vICAgICAgICAgcmV0dXJuIFBDdjJQbHVnaW5cclxuICAgIC8vICAgICBjYXNlIFwiYmV0dGVyZGlzY29yZFwiOlxyXG4gICAgLy8gICAgICAgICByZXR1cm4gQkRQbHVnaW5cclxuICAgIC8vICAgICBjYXNlIFwiZ29vc2Vtb2RcIjpcclxuICAgIC8vICAgICAgICAgcmV0dXJuIEdNUGx1Z2luXHJcbiAgICAvLyAgICAgZGVmYXVsdDpcclxuICAgIC8vICAgICAgICAgcmV0dXJuIGNsYXNzIFBsdWdpbiB7fTtcclxuICAgIC8vIH1cclxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuQ0xJRU5UX01PRCA9PSBcInBvd2VyY29yZHYyXCIpIHJldHVybiBQQ3YyUGx1Z2luXHJcbiAgICAgICAgZWxzZSBpZiAocHJvY2Vzcy5lbnYuQ0xJRU5UX01PRCA9PSBcImJldHRlcmRpc2NvcmRcIikgcmV0dXJuIEJEUGx1Z2luXHJcbiAgICAgICAgZWxzZSBpZiAocHJvY2Vzcy5lbnYuQ0xJRU5UX01PRCA9PSBcImdvb3NlbW9kXCIpIHJldHVybiBHTVBsdWdpblxyXG4gICAgICAgIHJldHVybiBjbGFzcyBQbHVnaW4ge31cclxufSkoKSB7XHJcbiAgICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XHJcbiAgICAgICAgc3VwZXIoLi4uYXJncyk7XHJcbiAgICAgICAgc2V0SW5zdGFuY2UodGhpcy5fX2l0dGFpSW50ZXJuYWxzKVxyXG4gICAgICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgcGx1Z2luQ2xhc3MoKTtcclxuICAgICAgICB0aGlzLmZyaWVuZGx5TmFtZSA9IHRoaXMuaW5zdGFuY2UuZnJpZW5kbHlOYW1lO1xyXG4gICAgICAgIHRoaXMuaW5zdGFuY2UuX19pdHRhaUludGVybmFsUGx1Z2luID0gdGhpcztcclxuICAgICAgICAvLyBnbG9iYWxUaGlzW1wiaXR0YWlcIiArIHRoaXMuZnJpZW5kbHlOYW1lLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvIC9nLCBcIlwiKV0gPSBpdHRhaTtcclxuICAgICAgICAvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBzdHlsZVtpdHRhaV1bcGx1Z2luPVwiJHttYW5pZmVzdC5uYW1lLnJlcGxhY2UoLyAvZywgXCJcIil9XCJdYCk/LmZvckVhY2goKGU6IEhUTUxTdHlsZUVsZW1lbnQpID0+IHtcclxuICAgICAgICAvLyAgICAgdGhpcy5jYWNoZWRDc3MucHVzaChlLmlubmVyVGV4dCk7XHJcbiAgICAgICAgLy8gICAgIGUucmVtb3ZlKCk7XHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFzU2V0dGluZ3NQYW5lbCA9IGZhbHNlO1xyXG4gICAgY2FjaGVkQ3NzID0gW107XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgLy8gdGhpcy5jYWNoZWRDc3MuZm9yRWFjaCgoZSwgaykgPT4ge1xyXG4gICAgICAgICAgICAvLyAgICAgY29uc3QgZWxlbSA9IE9iamVjdC5hc3NpZ24oZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpLCB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgaW5uZXJUZXh0OiBlXHJcbiAgICAgICAgICAgIC8vICAgICB9KVxyXG4gICAgICAgICAgICAvLyAgICAgZWxlbS5zZXRBdHRyaWJ1dGUoXCJpdHRhaVwiLCBcInRydWVcIik7XHJcbiAgICAgICAgICAgIC8vICAgICBlbGVtLnNldEF0dHJpYnV0ZShcInBsdWdpblwiLCBtYW5pZmVzdC5uYW1lLnJlcGxhY2UoLyAvZywgXCJcIikpO1xyXG4gICAgICAgICAgICAvLyAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChlbGVtKTtcclxuICAgICAgICAgICAgLy8gICAgIGRlbGV0ZSB0aGlzLmNhY2hlZENzc1trXTtcclxuICAgICAgICAgICAgLy8gfSlcclxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52LkhBU19DSEFOR0VMT0cgPT0gXCJ0cnVlXCIgJiYgQm9vbGVhbihjb25maWcuY2hhbmdlbG9nKSAmJiAhQ2hhbmdlbG9nSGFuZGxlci5oYXNTZWVuQ2hhbmdlbG9nKCkpIHtcclxuICAgICAgICAgICAgICAgIENoYW5nZWxvZ0hhbmRsZXIuc2V0U2VlbkNoYW5nZWxvZyh0cnVlKVxyXG4gICAgICAgICAgICAgICAgQ2hhbmdlbG9nSGFuZGxlci5vcGVuQ2hhbmdlbG9nTW9kYWwoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlLnN0YXJ0KCk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxyXG4gICAgICAgICAgICB0aHJvdyBlcnJcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RvcCgpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXMgPSB0aGlzLmluc3RhbmNlLnN0b3AoKTtcclxuICAgICAgICAgICAgdW5wYXRjaEFsbCgpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5oYXNTZXR0aW5nc1BhbmVsKSB0aGlzLnJlbW92ZVNldHRpbmdzUGFuZWwoKTtcclxuICAgICAgICAgICAgLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgc3R5bGVbaXR0YWldW3BsdWdpbj1cIiR7bWFuaWZlc3QubmFtZS5yZXBsYWNlKC8gL2csIFwiXCIpfVwiXWApPy5mb3JFYWNoKGUgPT4ge1xyXG4gICAgICAgICAgICAvLyAgICAgdGhpcy5jYWNoZWRDc3MucHVzaChlLmlubmVyVGV4dCk7XHJcbiAgICAgICAgICAgIC8vICAgICBlLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAvLyB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcztcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpXHJcbiAgICAgICAgICAgIHRocm93IGVyclxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZXRTZXR0aW5nc1BhbmVsKGNvbXBvbmVudCkge1xyXG4gICAgICAgIHRoaXMuaGFzU2V0dGluZ3NQYW5lbCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5fX2l0dGFpSW50ZXJuYWxzLnNldFNldHRpbmdzUGFuZWwoY29tcG9uZW50KTtcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVTZXR0aW5nc1BhbmVsKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmhhc1NldHRpbmdzUGFuZWwpIHtcclxuICAgICAgICAgICAgdGhpcy5oYXNTZXR0aW5nc1BhbmVsID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuX19pdHRhaUludGVybmFscy5yZW1vdmVTZXR0aW5nc1BhbmVsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmlmIChwcm9jZXNzLmVudi5DTElFTlRfTU9EID09PSBcImdvb3NlbW9kXCIpIHtcclxuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IEl0dGFpUGx1Z2luKCk7XHJcbiAgICBjb25zdCBoYW5kbGVycyA9IHtnb29zZW1vZEhhbmRsZXJzOiBpbnN0YW5jZS5nb29zZW1vZEhhbmRsZXJzfVxyXG4gICAgaWYgKHByb2Nlc3MuZW52LkRFVl9NT0RFID09IFwidHJ1ZVwiKSB7XHJcbiAgICAgICAgbG9hZERldlBsdWdpbihoYW5kbGVycylcclxuICAgIH1cclxuICAgIC8vIEB0cy1pZ25vcmVcclxuICAgIEl0dGFpUGx1Z2luID0gaGFuZGxlcnM7XHJcbn1cclxuaWYgKHByb2Nlc3MuZW52LkRFVl9NT0RFID09PSBcInRydWVcIiAmJiBwcm9jZXNzLmVudi5DTElFTlRfTU9EICE9PSBcImdvb3NlbW9kXCIpIHtcclxuICAgIGxvYWREZXZQbHVnaW4oSXR0YWlQbHVnaW4pXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEl0dGFpUGx1Z2luO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJGbHV4RGlzcGF0Y2hlciIsIkNvbnRleHRNZW51IiwiX19kZWZQcm9wIiwiX19kZWZOb3JtYWxQcm9wIiwiX19wdWJsaWNGaWVsZCIsImdldEFsbCIsImNsYXNzZXMiLCJNYXJnaW5zIiwiQ2F0ZWdvcnkiLCJDb2xvclBpY2tlciIsInJhbmRvbVN0cmluZyIsImRpc2NvcmRHZXRNZXNzYWdlcyIsImRpc2NvcmRHZXRNZXNzYWdlIiwiVXNlciIsImpvaW5DbGFzc2VzIiwic2V0dGluZ3MuZ2V0Iiwic2V0Iiwic2V0dGluZ3Muc2V0IiwiY29uZmlnLm1hbmlmZXN0IiwibG9nZ2VyLmVycm9yIiwicGF0Y2hlci5hZnRlciIsIlRvYXN0Iiwic3R5bGVzIiwid2VicGFjay5maW5kQnlQcm9wcyIsImNvbnN0YW50cy5TZXR0aW5ncyIsImNhdGVnb3J5U3R5bGVzIiwiTGlzdFNlY3Rpb25JdGVtIiwid2VicGFjay5maW5kQnlEaXNwbGF5TmFtZSIsIkVtcHR5U3RhdGVJbWFnZSIsIkVtcHR5U3RhdGUiLCJFbXB0eVN0YXRlVGV4dCIsImNvbnN0YW50cy5ESVNQQVRDSEVSX1BJTkRNU19DSEFOR0VfTElTVCIsInNldHRpbmdzLmdldEFsbCIsInRvYXN0LnNob3ciLCJzZXR0aW5ncy5yZXNldCIsInNldHRpbmdzLnNldEFsbCIsIkNvbnRleHRNZW51SGFuZGxlciIsIlVzZXJTdW1tYXJ5SXRlbSIsIlVTRVJfSUNPTl9TSVpFIiwid2VicGFjay5maW5kIiwid2VicGFjay5Db250ZXh0TWVudSIsIkltcG9ydGVyLmhhc1RoZW1FbmFibGVkIiwiSW1wb3J0ZXIuZnJvbURldmlsYnJvUGluRE1zIiwiU2V0dGluZ3NTd2l0Y2hlciIsInBhdGNoZXIudW5wYXRjaEFsbCIsInBsdWdpbk1hbmlmZXN0IiwidmVyc2lvbiIsIkRldkNsaWVu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QUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7Ozs7OztJQ0V0dEIsU0FBUyxZQUFZLENB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