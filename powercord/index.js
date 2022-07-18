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
      return require("powercord/webpack");
    })();
    function find(filter) {
      {
        let isDefault = false;
        const mod = clientWebpack.getModule((x) => x?.default && filter(x.default) && (isDefault = true), false) || clientWebpack.getModule(filter, false);
        return isDefault ? mod.default : mod;
      }
    }
    function findAll(filter) {
      return clientWebpack.getAllModules((x) => x?.default && filter(x.default), false) || clientWebpack.getModule(filter, false);
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
    let Plugin$1;
    {
      Plugin$1 = class Plugin extends require("powercord").entities.Plugin {
        constructor() {
          super(...arguments);
          __publicField$1(this, "__ittaiInternals", {
            getAllSettings: () => {
              let obj = {};
              const keys = this.settings.getKeys();
              keys.forEach((k) => {
                obj[k] = this.settings.get(k);
              });
              return obj;
            },
            getSetting: (key, defaultValue) => {
              return this.settings.get(key, defaultValue);
            },
            setSettings: (newSettings) => {
              if (typeof newSettings !== "object")
                return;
              Object.keys(newSettings).forEach((k) => this.settings.set(k, newSettings[k]));
            },
            setSetting: (key, value) => {
              this.settings.set(key, value);
            },
            removeSetting: (key) => {
              this.settings.delete(key);
            },
            resetSettings: () => {
              const keys = this.settings.getKeys();
              keys.forEach((k) => {
                this.settings.delete(k);
              });
            },
            setSettingsPanel: (component) => {
              powercord.api.settings.registerSettings(this.entityID, {
                category: this.entityID,
                label: this.friendlyName,
                render: component
              });
            },
            removeSettingsPanel: () => {
              powercord.api.settings.unregisterSettings(this.entityID);
            }
          });
        }
        startPlugin() {
          return this.start();
        }
        pluginWillUnload() {
          return this.stop();
        }
      };
    }
    var PCv2Plugin = Plugin$1;

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

    var e=[],t=[];function n(n,r){if(n&&"undefined"!=typeof document){var a,s=!0===r.prepend?"prepend":"append",d=!0===r.singleTag,i="string"==typeof r.container?document.querySelector(r.container):document.getElementsByTagName("head")[0];if(d){var u=e.indexOf(i);-1===u&&(u=e.push(i)-1,t[u]={}),a=t[u]&&t[u][s]?t[u][s]:t[u][s]=c();}else a=c();65279===n.charCodeAt(0)&&(n=n.substring(1)),a.styleSheet?a.styleSheet.cssText+=n:a.appendChild(document.createTextNode(n));}function c(){var e=document.createElement("style");if(e.setAttribute("type","text/css"),r.attributes)for(var t=Object.keys(r.attributes),n=0;n<t.length;n++)e.setAttribute(t[n],r.attributes[t[n]]);var a="prepend"===s?"afterbegin":"beforeend";return i.insertAdjacentElement(a,e),e}}

    var css$9 = ".DMFoldersCategoryCategory {\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.DMFoldersCategoryCategoryHeaderIcon{\r\n    width: 24px;\r\n    height: 24px;\r\n    color: var(--interactive-active);\r\n}\r\n\r\n.DMFoldersCategoryCategoryHeaderIcon.DMFoldersCategoryClosed{\r\n    transform: rotate(-90deg);\r\n}\r\n\r\n.DMFoldersCategoryCategoryContent {\r\n    margin-top: 16px;\r\n    padding: 0 20px;\r\n}";
    var modules_1c6bba0f = {"category":"DMFoldersCategoryCategory","category-header-icon":"DMFoldersCategoryCategoryHeaderIcon","closed":"DMFoldersCategoryClosed","category-content":"DMFoldersCategoryCategoryContent"};
    n(css$9,{});
    var styles$1 = modules_1c6bba0f;

    function Category$1({ title, description, icon, children, openedByDefault = false }) {
      const [opened, setOpened] = React$2.useState(openedByDefault);
      return /* @__PURE__ */ React$2.createElement("div", {
        className: styles$1["category"]
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
        className: `${styles$1["category-header-icon"]} ${!opened ? styles$1["closed"] : ""}`
      }))), opened && /* @__PURE__ */ React$2.createElement("div", {
        className: styles$1["category-content"]
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
      return "powercordv2";
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
          this.ws.send(`identify,${"powercordv2"}`);
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
      let mod = "powercordv2";
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
      return PCv2Plugin;
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
      loadDevPlugin(IttaiPlugin);
    }

    return IttaiPlugin;

    })();
    if (typeof module !== "undefined") module.exports = ittaiPluginExport;
    return ittaiPluginExport;

})();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50cnlwb2ludC5qcyIsInNvdXJjZXMiOlsiZmlsZTovLy9ETUZvbGRlcnMvLi4vLi4vaXR0YWkvY29yZS93ZWJwYWNrL2NvcmUuanMiLCJmaWxlOi8vL0RNRm9sZGVycy8uLi8uLi9pdHRhaS9jb3JlL3dlYnBhY2svY29tbW9uL2luZGV4LmpzIiwiZmlsZTovLy9ETUZvbGRlcnMvLi4vLi4vaXR0YWkvY29yZS9wYWNrYWdlcy9pbml0LmpzIiwiZmlsZTovLy9ETUZvbGRlcnMvLi4vLi4vaXR0YWkvY29yZS9lbnRpdGllcy9QQ3YyUGx1Z2luLmpzIiwiZmlsZTovLy9ETUZvbGRlcnMvLi4vLi4vaXR0YWkvY29yZS9zZXR0aW5ncy9pbmRleC5qcyIsImZpbGU6Ly8vRE1Gb2xkZXJzLy4uLy4uL2l0dGFpL2NvcmUvY29tcG9uZW50cy9EaXNjb3JkSWNvbi5qc3giLCJmaWxlOi8vL0RNRm9sZGVycy8uLi8uLi9pdHRhaS9jb3JlL2NvbXBvbmVudHMvRGlzY29yZFByb3ZpZGVycy5qc3giLCJmaWxlOi8vL0RNRm9sZGVycy8uLi8uLi9pdHRhaS9jb3JlL2NvbXBvbmVudHMvRmx1eFdyYXBwZXIuanN4IiwiZmlsZTovLy9ETUZvbGRlcnMvLi4vLi4vaXR0YWkvY29yZS9jbGFzc2VzL2luZGV4LmpzIiwiZmlsZTovLy9ETUZvbGRlcnMvLi4vLi4vaXR0YWkvYnVpbGRlci9ub2RlX21vZHVsZXMvLnBucG0vcm9sbHVwLXBsdWdpbi1zdHlsZXNANC4wLjBfcm9sbHVwQDIuNzcuMC9ub2RlX21vZHVsZXMvcm9sbHVwLXBsdWdpbi1zdHlsZXMvZGlzdC9ydW50aW1lL2luamVjdC1jc3MuanMiLCJmaWxlOi8vL0RNRm9sZGVycy8uLi8uLi9pdHRhaS9jb3JlL2NvbXBvbmVudHMvQ2F0ZWdvcnkuanN4IiwiZmlsZTovLy9ETUZvbGRlcnMvLi4vLi4vaXR0YWkvY29yZS9jb21wb25lbnRzL2luZGV4LmpzeCIsImZpbGU6Ly8vRE1Gb2xkZXJzLy4uLy4uL2l0dGFpL2NvcmUvdXRpbGl0aWVzL2dldENsaWVudE1vZC5qcyIsImZpbGU6Ly8vRE1Gb2xkZXJzLy4uLy4uL2l0dGFpL2NvcmUvdXRpbGl0aWVzL25hbm9zZWNvbmRzLmpzIiwiZmlsZTovLy9ETUZvbGRlcnMvLi4vLi4vaXR0YWkvY29yZS91dGlsaXRpZXMvd2FpdC5qcyIsImZpbGU6Ly8vRE1Gb2xkZXJzLy4uLy4uL2l0dGFpL2NvcmUvbG9nZ2VyL2NyZWF0ZUFyZ3VtZW50cy5qcyIsImZpbGU6Ly8vRE1Gb2xkZXJzLy4uLy4uL2l0dGFpL2NvcmUvbG9nZ2VyL2xvZy5qcyIsImZpbGU6Ly8vRE1Gb2xkZXJzLy4uLy4uL2l0dGFpL2NvcmUvbG9nZ2VyL2RlYnVnLmpzIiwiZmlsZTovLy9ETUZvbGRlcnMvLi4vLi4vaXR0YWkvY29yZS9sb2dnZXIvd2Fybi5qcyIsImZpbGU6Ly8vRE1Gb2xkZXJzLy4uLy4uL2l0dGFpL2NvcmUvbG9nZ2VyL2Vycm9yLmpzIiwiZmlsZTovLy9ETUZvbGRlcnMvLi4vLi4vaXR0YWkvY29yZS9sb2dnZXIvZ3JvdXAuanMiLCJmaWxlOi8vL0RNRm9sZGVycy8uLi8uLi9pdHRhaS9jb3JlL2xvZ2dlci9ncm91cEVuZC5qcyIsImZpbGU6Ly8vRE1Gb2xkZXJzLy4uLy4uL2l0dGFpL2NvcmUvbG9nZ2VyL2NvdW50LmpzIiwiZmlsZTovLy9ETUZvbGRlcnMvLi4vLi4vaXR0YWkvY29yZS9sb2dnZXIvY291bnRSZXNldC5qcyIsImZpbGU6Ly8vRE1Gb2xkZXJzLy4uLy4uL2l0dGFpL2NvcmUvbG9nZ2VyL2luZGV4LmpzIiwiZmlsZTovLy9ETUZvbGRlcnMvLi4vLi4vaXR0YWkvY29yZS91dGlsaXRpZXMvZmluZEluVHJlZS5qcyIsImZpbGU6Ly8vRE1Gb2xkZXJzLy4uLy4uL2l0dGFpL2NvcmUvdXRpbGl0aWVzL2ZpbmRJblJlYWN0VHJlZS5qcyIsImZpbGU6Ly8vRE1Gb2xkZXJzLy4uLy4uL2l0dGFpL2NvcmUvdXRpbGl0aWVzL2dldFJlYWN0SW5zdGFuY2UuanMiLCJmaWxlOi8vL0RNRm9sZGVycy8uLi8uLi9pdHRhaS9jb3JlL3V0aWxpdGllcy9nZXRPd25lckluc3RhbmNlLmpzIiwiZmlsZTovLy9ETUZvbGRlcnMvLi4vLi4vaXR0YWkvY29yZS91dGlsaXRpZXMvdGVzdENvbXBvbmVudC5qcyIsImZpbGU6Ly8vRE1Gb2xkZXJzLy4uLy4uL2l0dGFpL2NvcmUvdXRpbGl0aWVzL2JlbmNobWFyay5qcyIsImZpbGU6Ly8vRE1Gb2xkZXJzLy4uLy4uL2l0dGFpL2NvcmUvdXRpbGl0aWVzL211bHRpQmVuY2htYXJrLmpzIiwiZmlsZTovLy9ETUZvbGRlcnMvLi4vLi4vaXR0YWkvY29yZS91dGlsaXRpZXMvYXZlcmFnZS5qcyIsImZpbGU6Ly8vRE1Gb2xkZXJzLy4uLy4uL2l0dGFpL2NvcmUvdXRpbGl0aWVzL21lZGlhbi5qcyIsImZpbGU6Ly8vRE1Gb2xkZXJzLy4uLy4uL2l0dGFpL2NvcmUvdXRpbGl0aWVzL3JhbmRvbU51bWJlci5qcyIsImZpbGU6Ly8vRE1Gb2xkZXJzLy4uLy4uL2l0dGFpL2NvcmUvdXRpbGl0aWVzL3JhbmRvbVN0cmluZy5qcyIsImZpbGU6Ly8vRE1Gb2xkZXJzLy4uLy4uL2l0dGFpL2NvcmUvdXRpbGl0aWVzL2pvaW5DbGFzc2VzLmpzIiwiZmlsZTovLy9ETUZvbGRlcnMvLi4vLi4vaXR0YWkvY29yZS91dGlsaXRpZXMvc2VhcmNoQ2xhc3NOYW1lTW9kdWxlcy5qcyIsImZpbGU6Ly8vRE1Gb2xkZXJzLy4uLy4uL2l0dGFpL2NvcmUvdXRpbGl0aWVzL21lc3NhZ2VCb3guanN4IiwiZmlsZTovLy9ETUZvbGRlcnMvLi4vLi4vaXR0YWkvY29yZS91dGlsaXRpZXMvbWVzc2FnZXMvZ2V0TWVzc2FnZXMuanMiLCJmaWxlOi8vL0RNRm9sZGVycy8uLi8uLi9pdHRhaS9jb3JlL3V0aWxpdGllcy9tZXNzYWdlcy9nZXRNZXNzYWdlLmpzIiwiZmlsZTovLy9ETUZvbGRlcnMvLi4vLi4vaXR0YWkvY29yZS91dGlsaXRpZXMvbWVzc2FnZXMvZmV0Y2hNZXNzYWdlLmpzIiwiZmlsZTovLy9ETUZvbGRlcnMvLi4vLi4vaXR0YWkvY29yZS91dGlsaXRpZXMvbWVzc2FnZXMvcmVyZW5kZXJBbGxNZXNzYWdlcy5qcyIsImZpbGU6Ly8vRE1Gb2xkZXJzLy4uLy4uL2l0dGFpL2NvcmUvdXRpbGl0aWVzL21lc3NhZ2VzL3JlcmVuZGVyTWVzc2FnZS5qcyIsImZpbGU6Ly8vRE1Gb2xkZXJzLy4uLy4uL2l0dGFpL2NvcmUvdXRpbGl0aWVzL21lc3NhZ2VzL3VwZGF0ZU1lc3NhZ2UuanMiLCJmaWxlOi8vL0RNRm9sZGVycy8uLi8uLi9pdHRhaS9jb3JlL3V0aWxpdGllcy9tZXNzYWdlcy9pbmRleC5qcyIsImZpbGU6Ly8vRE1Gb2xkZXJzLy4uLy4uL2l0dGFpL2NvcmUvY2hhbmdlbG9nL2luZGV4LmpzeCIsImZpbGU6Ly8vRE1Gb2xkZXJzLy4uLy4uL2l0dGFpL2NvcmUvZW50aXRpZXMvUGx1Z2luLmpzIiwiZmlsZTovLy9ETUZvbGRlcnMvLi4vLi4vaXR0YWkvY29yZS9wYXRjaGVyL2JlZm9yZS5qcyIsImZpbGU6Ly8vRE1Gb2xkZXJzLy4uLy4uL2l0dGFpL2NvcmUvcGF0Y2hlci9pbnN0ZWFkLmpzIiwiZmlsZTovLy9ETUZvbGRlcnMvLi4vLi4vaXR0YWkvY29yZS9wYXRjaGVyL2FmdGVyLmpzIiwiZmlsZTovLy9ETUZvbGRlcnMvLi4vLi4vaXR0YWkvY29yZS9wYXRjaGVyL3VucGF0Y2hBbGwuanMiLCJmaWxlOi8vL0RNRm9sZGVycy8uLi8uLi9pdHRhaS9jb3JlL3BhdGNoZXIvcGF0Y2guanMiLCJmaWxlOi8vL0RNRm9sZGVycy8uLi8uLi9pdHRhaS9jb3JlL3BhdGNoZXIvaW5kZXguanMiLCJmaWxlOi8vL0RNRm9sZGVycy8uLi8uLi9pdHRhaS9jb3JlL2NvbW1hbmRzL2JvdE1lc3NhZ2UuanMiLCJmaWxlOi8vL0RNRm9sZGVycy8uLi8uLi9pdHRhaS9jb3JlL2NvbW1hbmRzL2luZGV4LmpzIiwiZmlsZTovLy9ETUZvbGRlcnMvLi4vLi4vaXR0YWkvY29yZS9zdG9yZXMvaW5kZXguanMiLCJmaWxlOi8vL0RNRm9sZGVycy8uLi8uLi9pdHRhaS9jb3JlL3RvYXN0L1RvYXN0V3JhcHBlci50c3giLCJmaWxlOi8vL0RNRm9sZGVycy8uLi8uLi9pdHRhaS9jb3JlL3RvYXN0L2luZGV4LmpzeCIsImZpbGU6Ly8vRE1Gb2xkZXJzL2hhbmRsZXJzL3Bpbm5lZERNUy50cyIsImZpbGU6Ly8vRE1Gb2xkZXJzL3V0aWxzL21vdmUudHMiLCJmaWxlOi8vL0RNRm9sZGVycy91dGlscy9jbGFzc2VzLnRzIiwiZmlsZTovLy9ETUZvbGRlcnMvdXRpbHMvam9pbkNsYXNzZXMudHMiLCJmaWxlOi8vL0RNRm9sZGVycy9jb21wb25lbnRzL1VzZXJMaXN0U2V0dGluZ3MvVXNlci50c3giLCJmaWxlOi8vL0RNRm9sZGVycy9jb25zdGFudHMvc2V0dGluZ3MudHMiLCJmaWxlOi8vL0RNRm9sZGVycy9jb25zdGFudHMvaW5kZXgudHMiLCJmaWxlOi8vL0RNRm9sZGVycy91dGlscy9FcnJvckJvdW5kYXJ5LnRzeCIsImZpbGU6Ly8vRE1Gb2xkZXJzL2NvbXBvbmVudHMvVXNlckxpc3RTZXR0aW5ncy9Nb2RhbHMvQ2F0ZWdvcnlTZXR0aW5nc01vZGFsLnRzeCIsImZpbGU6Ly8vRE1Gb2xkZXJzL3V0aWxzL2xpbWl0LnRzIiwiZmlsZTovLy9ETUZvbGRlcnMvY29tcG9uZW50cy9Vc2VyTGlzdFNldHRpbmdzL01vZGFscy9BZGRVc2VyTW9kYWwudHN4IiwiZmlsZTovLy9ETUZvbGRlcnMvY29tcG9uZW50cy9Vc2VyTGlzdFNldHRpbmdzL2luZGV4LnRzeCIsImZpbGU6Ly8vRE1Gb2xkZXJzL3V0aWxzL2lzVmFsaWRKU09OLnRzIiwiZmlsZTovLy9ETUZvbGRlcnMvY29tcG9uZW50cy9TZXR0aW5ncy50c3giLCJmaWxlOi8vL0RNRm9sZGVycy91dGlscy9vcGVuQ2F0ZWdvcnlTZXR0aW5ncy50c3giLCJmaWxlOi8vL0RNRm9sZGVycy9jb21wb25lbnRzL0NvbnRleHRNZW51cy9DYXRlZ29yeS50c3giLCJmaWxlOi8vL0RNRm9sZGVycy9wYXRjaGVzL2RtbGlzdC50c3giLCJmaWxlOi8vL0RNRm9sZGVycy9jb21wb25lbnRzL0NvbnRleHRNZW51cy9BZGRVc2VyLnRzeCIsImZpbGU6Ly8vRE1Gb2xkZXJzL3BhdGNoZXMvZG1idXR0b24udHN4IiwiZmlsZTovLy9ETUZvbGRlcnMvcGF0Y2hlcy9mcmllbmRzbGlzdC50c3giLCJmaWxlOi8vL0RNRm9sZGVycy9oYW5kbGVycy9pbXBvcnRGcm9tUGx1Z2luLnRzIiwiZmlsZTovLy9ETUZvbGRlcnMvY29tcG9uZW50cy9TZXR0aW5nc1N3aXRjaGVyL2luZGV4LnRzeCIsImZpbGU6Ly8vRE1Gb2xkZXJzL2luZGV4LnRzeCIsImZpbGU6Ly8vRE1Gb2xkZXJzLy4uLy4uL2l0dGFpL2NvcmUvZGV2Y2xpZW50L2NsaWVudC5qcyIsImZpbGU6Ly8vRE1Gb2xkZXJzLy4uLy4uL2l0dGFpL2NvcmUvZGV2Y2xpZW50L2luZGV4LmpzIiwiZmlsZTovLy9ETUZvbGRlcnMvLi4vLi4vaXR0YWkvY29yZS9sb2FkZXIvZW50cnlwb2ludC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgY2xpZW50V2VicGFjayA9ICgoKT0+e1xyXG4gICAgaWYgKHByb2Nlc3MuZW52LkNMSUVOVF9NT0QgPT0gXCJnb29zZW1vZFwiKSByZXR1cm4gZ2xvYmFsVGhpcy5nb29zZW1vZC53ZWJwYWNrTW9kdWxlcztcclxuICAgIGVsc2UgaWYgKHByb2Nlc3MuZW52LkNMSUVOVF9NT0QgPT0gXCJwb3dlcmNvcmR2MlwiKSByZXR1cm4gcmVxdWlyZShcInBvd2VyY29yZC93ZWJwYWNrXCIpO1xyXG4gICAgZWxzZSBpZiAocHJvY2Vzcy5lbnYuQ0xJRU5UX01PRCA9PSBcImJldHRlcmRpc2NvcmRcIikgcmV0dXJuIGdsb2JhbFRoaXMuQmRBcGk7XHJcbn0pKCk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZmluZChmaWx0ZXIpIHtcclxuICAgIGlmIChwcm9jZXNzLmVudi5DTElFTlRfTU9EID09IFwiZ29vc2Vtb2RcIikgcmV0dXJuIGNsaWVudFdlYnBhY2suZmluZChmaWx0ZXIpO1xyXG4gICAgZWxzZSBpZiAocHJvY2Vzcy5lbnYuQ0xJRU5UX01PRCA9PSBcInBvd2VyY29yZHYyXCIpIHtcclxuICAgICAgICBsZXQgaXNEZWZhdWx0ID0gZmFsc2U7XHJcbiAgICAgICAgY29uc3QgbW9kID0gY2xpZW50V2VicGFjay5nZXRNb2R1bGUoeCA9PiB4Py5kZWZhdWx0ICYmIGZpbHRlcih4LmRlZmF1bHQpICYmIChpc0RlZmF1bHQgPSB0cnVlKSwgZmFsc2UpIHx8IGNsaWVudFdlYnBhY2suZ2V0TW9kdWxlKGZpbHRlciwgZmFsc2UpO1xyXG5cclxuICAgICAgICByZXR1cm4gaXNEZWZhdWx0ID8gbW9kLmRlZmF1bHQgOiBtb2Q7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChwcm9jZXNzLmVudi5DTElFTlRfTU9EID09IFwiYmV0dGVyZGlzY29yZFwiKSByZXR1cm4gY2xpZW50V2VicGFjay5maW5kTW9kdWxlKGZpbHRlcik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmaW5kQWxsKGZpbHRlcikge1xyXG4gICAgaWYgKHByb2Nlc3MuZW52LkNMSUVOVF9NT0QgPT0gXCJnb29zZW1vZFwiKSByZXR1cm4gY2xpZW50V2VicGFjay5maW5kQWxsKGZpbHRlcik7XHJcbiAgICBlbHNlIGlmIChwcm9jZXNzLmVudi5DTElFTlRfTU9EID09IFwicG93ZXJjb3JkdjJcIikgcmV0dXJuIGNsaWVudFdlYnBhY2suZ2V0QWxsTW9kdWxlcyh4ID0+IHg/LmRlZmF1bHQgJiYgZmlsdGVyKHguZGVmYXVsdCksIGZhbHNlKSB8fCBjbGllbnRXZWJwYWNrLmdldE1vZHVsZShmaWx0ZXIsIGZhbHNlKTtcclxuICAgIGVsc2UgaWYgKHByb2Nlc3MuZW52LkNMSUVOVF9NT0QgPT0gXCJiZXR0ZXJkaXNjb3JkXCIpIHJldHVybiBjbGllbnRXZWJwYWNrLmZpbmRBbGxNb2R1bGVzKGZpbHRlcik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmaW5kQnlQcm9wcyguLi5wcm9wcykge1xyXG4gICAgcmV0dXJuIGZpbmQobSA9PiBwcm9wcy5ldmVyeShwID0+IG0/LltwXSAhPT0gdW5kZWZpbmVkKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmaW5kQWxsQnlQcm9wcyguLi5wcm9wcykge1xyXG4gICAgcmV0dXJuIGZpbmRBbGwobSA9PiBwcm9wcy5ldmVyeShwID0+IG0/LltwXSAhPT0gdW5kZWZpbmVkKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmaW5kQnlQcm90b3R5cGUoLi4ucHJvcHMpIHtcclxuICAgIHJldHVybiBmaW5kKG0gPT4gcHJvcHMuZXZlcnkocCA9PiBtPy5wcm90b3R5cGU/LltwXSAhPT0gdW5kZWZpbmVkKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmaW5kQWxsQnlQcm90b3R5cGUoLi4ucHJvcHMpIHtcclxuICAgIHJldHVybiBmaW5kQWxsKG0gPT4gcHJvcHMuZXZlcnkocCA9PiBtPy5wcm90b3R5cGU/LltwXSAhPT0gdW5kZWZpbmVkKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmaW5kQnlEaXNwbGF5TmFtZShuYW1lLCByZXR1cm5EZWZhdWx0PXRydWUpIHtcclxuICAgIGxldCByZXQgPSBmaW5kKG0gPT4gbT8uZGVmYXVsdD8uZGlzcGxheU5hbWUgPT09IG5hbWUpO1xyXG4gICAgaWYgKHJldHVybkRlZmF1bHQpIHJldHVybiByZXQuZGVmYXVsdDtcclxuICAgIHJldHVybiByZXQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmaW5kQWxsQnlEaXNwbGF5TmFtZShuYW1lKSB7XHJcbiAgICByZXR1cm4gZmluZChtID0+IG0/LmRpc3BsYXlOYW1lID09PSBuYW1lKTtcclxufVxyXG4iLCIvKipcclxuICoge0BsaW5rIGh0dHBzOi8vZGlzY29yZC5jb20vYWNrbm93bGVkZ2VtZW50cy98RnVsbCBsaXN0IG9mIGxpYnJhcmllcyB0aGF0IERpc2NvcmQgdXNlcy59XHJcbiAqIEBtb2R1bGUgd2VicGFjay9jb21tb25cclxuICovXHJcblxyXG5pbXBvcnQgeyBmaW5kLCBmaW5kQnlQcm9wcyB9IGZyb20gXCIuLlwiO1xyXG5cclxuZXhwb3J0IC8qKlxyXG4gKiBEaXNjb3JkJ3Mge0BsaW5rIGh0dHBzOi8vcmVhY3Rqcy5vcmcvfFJlYWN0fSBpbnN0YW5jZS5cclxuICogQG1lbWJlcm9mIG1vZHVsZTp3ZWJwYWNrL2NvbW1vblxyXG4gKi8gY29uc3QgUmVhY3QgPSAvKiNfX1BVUkVfXyovIGZpbmRCeVByb3BzKFwidXNlU3RhdGVcIik7XHJcblxyXG5leHBvcnQgLyoqXHJcbiAqIERpc2NvcmQncyB7QGxpbmsgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWRvbS5odG1sfFJlYWN0RE9NfSBpbnN0YW5jZS5cclxuICogQG1lbWJlcm9mIG1vZHVsZTp3ZWJwYWNrL2NvbW1vblxyXG4gKi8gY29uc3QgUmVhY3RET00gPSAvKiNfX1BVUkVfXyovIGZpbmRCeVByb3BzKFwicmVuZGVyXCIsIFwidW5tb3VudENvbXBvbmVudEF0Tm9kZVwiKTtcclxuXHJcbmV4cG9ydCAvKipcclxuICogRGlzY29yZCdzIHtAbGluayBodHRwczovL3JlYWN0LXNwcmluZy5pby98UmVhY3QgU3ByaW5nfSBpbnN0YW5jZS5cclxuICogQG1lbWJlcm9mIG1vZHVsZTp3ZWJwYWNrL2NvbW1vblxyXG4gKi8gY29uc3QgUmVhY3RTcHJpbmcgPSAvKiNfX1BVUkVfXyovIGZpbmRCeVByb3BzKFwidXNlU3ByaW5nXCIsIFwidXNlVHJhbnNpdGlvblwiKTtcclxuXHJcbmV4cG9ydCAvKipcclxuICogRGlzY29yZCdzIHtAbGluayBodHRwczovL2xvZGFzaC5jb20vfExvZGFzaH0gaW5zdGFuY2UuXHJcbiAqIEBtZW1iZXJvZiBtb2R1bGU6d2VicGFjay9jb21tb25cclxuICovIGNvbnN0IExvZGFzaCA9IGdsb2JhbFRoaXMuXztcclxuXHJcbmV4cG9ydCAvKiogXHJcbiAqIEFsaWFzIG9mIExvZGFzaFxyXG4gKi8gY29uc3QgXyA9IGdsb2JhbFRoaXMuXztcclxuXHJcbmV4cG9ydCAvKipcclxuICogRGlzY29yZCdzIEF2YXRhciBtYW5hZ2VyLiBcclxuICogQG1lbWJlcm9mIG1vZHVsZTp3ZWJwYWNrL2NvbW1vblxyXG4gKi8gY29uc3QgQXZhdGFyTWFuYWdlciA9IC8qI19fUFVSRV9fKi8gZmluZEJ5UHJvcHMoXCJnZXRVc2VyQXZhdGFyVVJMXCIsIFwiaGFzQW5pbWF0ZWRHdWlsZEljb25cIik7XHJcblxyXG5leHBvcnQgLyoqXHJcbiAqIERpc2NvcmQncyBtb2RhbCBhY3Rpb25zLiBcclxuICogQG1lbWJlcm9mIG1vZHVsZTp3ZWJwYWNrL2NvbW1vblxyXG4gKi8gY29uc3QgTW9kYWxBY3Rpb25zID0gLyojX19QVVJFX18qLyBmaW5kQnlQcm9wcyhcclxuXHRcIm9wZW5Nb2RhbFwiLFxyXG5cdFwidXBkYXRlTW9kYWxcIlxyXG4pO1xyXG5cclxuZXhwb3J0IC8qKlxyXG4gKiBEaXNjb3JkJ3MgbW9kYWwgc3RhY2suIFBsZWFzZSB1c2UgTW9kYWxBY3Rpb25zIGluc3RlYWQsIHRoaXMgb25lIGlzIGRlcHJlY2F0ZWRcclxuICogQG1lbWJlcm9mIG1vZHVsZTp3ZWJwYWNrL2NvbW1vblxyXG4gKiBAZGVwcmVjYXRlZFxyXG4gKi8gY29uc3QgTW9kYWxTdGFjayA9IC8qI19fUFVSRV9fKi8gZmluZEJ5UHJvcHMoXHJcblx0XCJwdXNoXCIsXHJcblx0XCJ1cGRhdGVcIixcclxuXHRcInBvcFwiLFxyXG5cdFwicG9wV2l0aEtleVwiXHJcbik7XHJcblxyXG5leHBvcnQgLyoqXHJcbiAqIERpc2NvcmQncyBkaXNwYXRjaGVyXHJcbiAqIEBtZW1iZXJvZiBtb2R1bGU6d2VicGFjay9jb21tb25cclxuICovIGNvbnN0IERpc3BhdGNoZXIgPSAvKiNfX1BVUkVfXyovIGZpbmRCeVByb3BzKFwiZGlydHlEaXNwYXRjaFwiKTtcclxuXHJcbmV4cG9ydCAvKipcclxuICogRmx1eOKEolxyXG4gKiBAbWVtYmVyb2YgbW9kdWxlOndlYnBhY2svY29tbW9uXHJcbiAqLyBjb25zdCBGbHV4ID0gLyojX19QVVJFX18qLyBmaW5kQnlQcm9wcyhcIlN0b3JlXCIsIFwiY29ubmVjdFN0b3Jlc1wiKTtcclxuXHJcbiBleHBvcnQgLyoqXHJcbiAqIERpc2NvcmQncyBGbHV4IERpc3BhdGNoZXIuIFdpc2ggaSBrbmV3IHd0ZiB0aGlzIGlzXHJcbiAqIEBtZW1iZXJvZiBtb2R1bGU6d2VicGFjay9jb21tb25cclxuICovY29uc3QgRmx1eERpc3BhdGNoZXIgPSAvKiNfX1BVUkVfXyovIGZpbmRCeVByb3BzKFxyXG5cdFwiX2N1cnJlbnREaXNwYXRjaEFjdGlvblR5cGVcIixcclxuXHRcIl9wcm9jZXNzaW5nV2FpdFF1ZXVlXCJcclxuKTtcclxuXHJcbmV4cG9ydCAvKipcclxuICogRGlzY29yZCdzIGNvbG9yIHV0bHNcclxuICogQG1lbWJlcm9mIG1vZHVsZTp3ZWJwYWNrL2NvbW1vblxyXG4gKi8gY29uc3QgQ29sb3JVdGlscyA9IC8qI19fUFVSRV9fKi8gZmluZEJ5UHJvcHMoXCJpc1ZhbGlkSGV4XCIpO1xyXG5cclxuZXhwb3J0IC8qKlxyXG4gKiBEaXNjb3JkJ3MgY29uc3RhbnRzXHJcbiAqIEBtZW1iZXJvZiBtb2R1bGU6d2VicGFjay9jb21tb25cclxuICovIGNvbnN0IENvbnN0YW50cyA9IC8qI19fUFVSRV9fKi8gZmluZEJ5UHJvcHMoXCJBUElfSE9TVFwiKTtcclxuXHJcbmV4cG9ydCAvKipcclxuICogRGlzY29yZCdzIGNvbnRleHQgbWVudSBoYW5kbGVyXHJcbiAqIEBtZW1iZXJvZiBtb2R1bGU6d2VicGFjay9jb21tb25cclxuICovIGNvbnN0IENvbnRleHRNZW51ID0gLyojX19QVVJFX18qLyBmaW5kQnlQcm9wcyhcIm9wZW5Db250ZXh0TWVudVwiKTtcclxuXHJcbmV4cG9ydCAvKipcclxuICogRGlzY29yZCdzIHBsYXRmb3JtIGNoZWNrZXJcclxuICogQG1lbWJlcm9mIG1vZHVsZTp3ZWJwYWNrL2NvbW1vblxyXG4gKi8gY29uc3QgUGxhdGZvcm0gPSAvKiNfX1BVUkVfXyovIGZpbmQoKG0pID0+IG0uUGxhdGZvcm1UeXBlcz8uV0lORE9XUyk7IiwiaW1wb3J0IHsgUmVhY3QsIFJlYWN0RE9NLCBSZWFjdFNwcmluZywgTG9kYXNoIH0gZnJvbSBcIi4uL3dlYnBhY2svY29tbW9uXCI7XHJcbkl0dGFpSW50ZXJuYWxzLlJlYWN0ID0gUmVhY3Q7XHJcbkl0dGFpSW50ZXJuYWxzLlJlYWN0RE9NID0gUmVhY3RET007XHJcbkl0dGFpSW50ZXJuYWxzLlJlYWN0U3ByaW5nID0gUmVhY3RTcHJpbmc7XHJcbkl0dGFpSW50ZXJuYWxzLkxvZGFzaCA9IExvZGFzaDtcclxuIiwibGV0IFBsdWdpbjtcclxuXHJcbmlmIChwcm9jZXNzLmVudi5DTElFTlRfTU9EID09PSBcInBvd2VyY29yZHYyXCIpIHtcclxuXHRQbHVnaW4gPSBjbGFzcyBQbHVnaW4gZXh0ZW5kcyByZXF1aXJlKFwicG93ZXJjb3JkXCIpLmVudGl0aWVzLlBsdWdpbiB7XHJcblx0XHRfX2l0dGFpSW50ZXJuYWxzID0ge1xyXG5cdFx0XHRnZXRBbGxTZXR0aW5nczogKCkgPT4ge1xyXG5cdFx0XHRcdGxldCBvYmogPSB7fTtcclxuXHRcdFx0XHRjb25zdCBrZXlzID0gdGhpcy5zZXR0aW5ncy5nZXRLZXlzKCk7XHJcblx0XHRcdFx0a2V5cy5mb3JFYWNoKGsgPT4ge1xyXG5cdFx0XHRcdFx0b2JqW2tdID0gdGhpcy5zZXR0aW5ncy5nZXQoayk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0cmV0dXJuIG9iajtcclxuXHRcdFx0fSxcclxuXHRcdFx0Z2V0U2V0dGluZzogKGtleSwgZGVmYXVsdFZhbHVlKSA9PiB7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuc2V0dGluZ3MuZ2V0KGtleSwgZGVmYXVsdFZhbHVlKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0c2V0U2V0dGluZ3M6IChuZXdTZXR0aW5ncykgPT4ge1xyXG5cdFx0XHRcdGlmICh0eXBlb2YgbmV3U2V0dGluZ3MgIT09IFwib2JqZWN0XCIpIHJldHVybjtcclxuXHRcdFx0XHRPYmplY3Qua2V5cyhuZXdTZXR0aW5ncykuZm9yRWFjaChrID0+IHRoaXMuc2V0dGluZ3Muc2V0KGssIG5ld1NldHRpbmdzW2tdKSk7XHJcblx0XHRcdH0sXHJcblx0XHRcdHNldFNldHRpbmc6IChrZXksIHZhbHVlKSA9PiB7XHJcblx0XHRcdFx0dGhpcy5zZXR0aW5ncy5zZXQoa2V5LCB2YWx1ZSk7XHJcblx0XHRcdH0sXHJcblx0XHRcdHJlbW92ZVNldHRpbmc6IChrZXkpID0+IHtcclxuXHRcdFx0XHR0aGlzLnNldHRpbmdzLmRlbGV0ZShrZXkpXHJcblx0XHRcdH0sXHJcblx0XHRcdHJlc2V0U2V0dGluZ3M6ICgpID0+IHtcclxuXHRcdFx0XHRjb25zdCBrZXlzID0gdGhpcy5zZXR0aW5ncy5nZXRLZXlzKCk7XHJcblx0XHRcdFx0a2V5cy5mb3JFYWNoKGsgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5zZXR0aW5ncy5kZWxldGUoayk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0sXHJcblx0XHRcclxuXHRcdFx0c2V0U2V0dGluZ3NQYW5lbDogKGNvbXBvbmVudCkgPT4ge1xyXG5cdFx0XHRcdC8vIGlmICh0eXBlb2YgY29tcG9uZW50ID09PSBcImZ1bmN0aW9uXCIpXHJcblx0XHRcdFx0Ly8gY29tcG9uZW50ID0gUmVhY3QuY3JlYXRlRWxlbWVudChjb21wb25lbnQpO1xyXG5cdFx0XHRcdHBvd2VyY29yZC5hcGkuc2V0dGluZ3MucmVnaXN0ZXJTZXR0aW5ncyh0aGlzLmVudGl0eUlELCB7XHJcblx0XHRcdFx0XHRjYXRlZ29yeTogdGhpcy5lbnRpdHlJRCxcclxuXHRcdFx0XHRcdGxhYmVsOiB0aGlzLmZyaWVuZGx5TmFtZSxcclxuXHRcdFx0XHRcdHJlbmRlcjogY29tcG9uZW50XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0sXHJcblx0XHRcdHJlbW92ZVNldHRpbmdzUGFuZWw6ICgpID0+IHtcclxuXHRcdFx0XHRwb3dlcmNvcmQuYXBpLnNldHRpbmdzLnVucmVnaXN0ZXJTZXR0aW5ncyh0aGlzLmVudGl0eUlEKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRzdGFydFBsdWdpbigpIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMuc3RhcnQoKTtcclxuXHRcdH1cclxuXHRcdHBsdWdpbldpbGxVbmxvYWQoKSB7XHJcblx0XHRcdHJldHVybiB0aGlzLnN0b3AoKTtcclxuXHRcdH1cclxuXHR9XHJcbn0gZWxzZSB7XHJcblx0UGx1Z2luID0gY2xhc3MgUGx1Z2luIHt9O1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFBsdWdpbjtcclxuIiwiZXhwb3J0IGNvbnN0IGdldCA9IChrZXksIGRlZmF1bHRWYWx1ZSkgPT4ge1xyXG4gICAgcmV0dXJuIHNldHRpbmdzSW5zdGFuY2UuZ2V0U2V0dGluZyhrZXksIGRlZmF1bHRWYWx1ZSlcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldEFsbCA9ICgpID0+IHtcclxuICAgIHJldHVybiBzZXR0aW5nc0luc3RhbmNlLmdldEFsbFNldHRpbmdzKClcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHNldCA9IChrZXksIHZhbHVlKSA9PiB7XHJcbiAgICByZXR1cm4gc2V0dGluZ3NJbnN0YW5jZS5zZXRTZXR0aW5nKGtleSwgdmFsdWUpXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBzZXRBbGwgPSAoc2V0dGluZ3MpID0+IHtcclxuICAgIHJldHVybiBzZXR0aW5nc0luc3RhbmNlLnNldFNldHRpbmdzKHNldHRpbmdzKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcmVtb3ZlID0gKGtleSkgPT4ge1xyXG4gICAgcmV0dXJuIHNldHRpbmdzSW5zdGFuY2UucmVtb3ZlU2V0dGluZyhrZXksIHVuZGVmaW5lZClcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHJlc2V0ID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIHNldHRpbmdzSW5zdGFuY2UucmVzZXRTZXR0aW5ncygpXHJcbn1cclxuXHJcbi8vIEhBQ0tcclxuZXhwb3J0IGxldCBzZXR0aW5nc0luc3RhbmNlO1xyXG5leHBvcnQgY29uc3Qgc2V0SW5zdGFuY2UgPSAoaSkgPT4ge1xyXG4gICAgc2V0dGluZ3NJbnN0YW5jZSA9IGlcclxufVxyXG5cclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFNldHRpbmdzQVBJIHtcclxuLy8gICAgIGNvbnN0cnVjdG9yKHBsdWdpbkluc3RhbmNlOiBQbHVnaW4pIHtcclxuLy8gICAgICAgICB0aGlzLl9fcGx1Z2luSW5zdGFuY2UgPSBwbHVnaW5JbnN0YW5jZTtcclxuLy8gICAgIH1cclxuXHJcbi8vICAgICBwcml2YXRlIF9fcGx1Z2luSW5zdGFuY2U6IFBsdWdpblxyXG5cclxuLy8gICAgIGdldCAoa2V5OiBzdHJpbmcsIGRlZmF1bHRWYWx1ZTogYW55KSA6IGFueSB7XHJcbi8vICAgICAgICAgcmV0dXJuIHRoaXMuX19wbHVnaW5JbnN0YW5jZS5fX2l0dGFpSW50ZXJuYWxQbHVnaW4uX19pdHRhaUludGVybmFscy5nZXRTZXR0aW5nKGtleSwgZGVmYXVsdFZhbHVlKTsgLy8gWWVzIHRoaXMgaXMgZXhjZXNzaXZlLiBUb28gYmFkLlxyXG4vLyAgICAgfVxyXG5cclxuLy8gICAgIGdldEFsbCAoKSA6IE9iamVjdCB7XHJcbi8vICAgICAgICAgcmV0dXJuIHRoaXMuX19wbHVnaW5JbnN0YW5jZS5fX2l0dGFpSW50ZXJuYWxQbHVnaW4uX19pdHRhaUludGVybmFscy5nZXRBbGxTZXR0aW5ncygpO1xyXG4vLyAgICAgfVxyXG5cclxuLy8gICAgIHNldCAoa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpIDogdm9pZCB7XHJcbi8vICAgICAgICAgcmV0dXJuIHRoaXMuX19wbHVnaW5JbnN0YW5jZS5fX2l0dGFpSW50ZXJuYWxQbHVnaW4uX19pdHRhaUludGVybmFscy5zZXRTZXR0aW5nKGtleSwgdmFsdWUpO1xyXG4vLyAgICAgfVxyXG5cclxuLy8gICAgIHNldEFsbCAoc2V0dGluZ3M6IE9iamVjdCkgOiB2b2lkIHtcclxuLy8gICAgICAgICByZXR1cm4gdGhpcy5fX3BsdWdpbkluc3RhbmNlLl9faXR0YWlJbnRlcm5hbFBsdWdpbi5fX2l0dGFpSW50ZXJuYWxzLnNldFNldHRpbmdzKHNldHRpbmdzKTtcclxuLy8gICAgIH1cclxuLy8gfSIsImltcG9ydCB7IFJlYWN0IH0gZnJvbSBcIi4uL3dlYnBhY2tcIjtcclxuaW1wb3J0IHsgZmluZEJ5UHJvcHMsIGZpbmRCeURpc3BsYXlOYW1lIH0gZnJvbSBcIi4uL3dlYnBhY2tcIjtcclxuXHJcbmNvbnN0IGNsYXNzZXMgPSB7XHJcblx0ZGVmYXVsdDogLyojX19QVVJFX18qLygoKT0+ZmluZEJ5UHJvcHMoXCJpY29uXCIsIFwic2VsZWN0ZWRcIikuaWNvbikoKSxcclxuXHRjb250ZXh0bWVudTogLyojX19QVVJFX18qLygoKT0+ZmluZEJ5UHJvcHMoXCJpY29uXCIsIFwic3VibWVudVwiKS5pY29uKSgpLFxyXG5cdG1pbmlwb3BvdmVyOiAvKiNfX1BVUkVfXyovKCgpPT5maW5kQnlQcm9wcyhcImljb25cIiwgXCJpc0hlYWRlclwiKS5pY29uKSgpLFxyXG59O1xyXG5cclxuLyoqXHJcbiAqIFJlbmRlciBhbnkgRGlzY29yZCBpY29uLlxyXG4gKiBAbmFtZSBEaXNjb3JkSWNvblxyXG4gKiBAcGFyYW0ge29iamVjdH0gcHJvcHMgUmVhY3QgcHJvcGVydGllcy4gQWxsIHVubGlzdGVkIHByb3BlcnRpZXMgd2lsbCBiZSBwYXNzZWQgZG93biB0byB0aGUgY29tcG9uZW50LlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gW3Byb3BzLnR5cGU9XCJkZWZhdWx0XCJdIFRoZSBGb250QXdlc29tZSBpY29uIHR5cGUuIGBkZWZhdWx0YCwgYG1pbmlwb3BvdmVyYCwgYGNvbnRleHRtZW51YCwgYG5vbmVgLlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gW3Byb3BzLm5hbWVdIFRoZSBgZGlzcGxheU5hbWVgIG9mIHRoZSBpY29uIGNvbXBvbmVudCBpbiBEaXNjb3JkLlxyXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNvbXBvbmVudHNcclxuICogQGV4YW1wbGVcclxuICogcmV0dXJuIChcclxuICogICA8RGlzY29yZEljb24gdHlwZT1cIm1pbmlwb3BvdmVyXCIgLz5cclxuICogKTtcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERpc2NvcmRJY29uKHByb3BzKSB7XHJcblx0Y29uc3QgY2hvb3NlbkNsYXNzID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XHJcblx0XHRzd2l0Y2ggKHByb3BzLnR5cGUpIHtcclxuXHRcdFx0Y2FzZSBcIm1pbmlwb3BvdmVyXCI6XHJcblx0XHRcdFx0cmV0dXJuIGNsYXNzZXMubWluaXBvcG92ZXI7XHJcblx0XHRcdGNhc2UgXCJjb250ZXh0bWVudVwiOlxyXG5cdFx0XHRcdHJldHVybiBjbGFzc2VzLmNvbnRleHRtZW51O1xyXG5cdFx0XHRjYXNlIFwibm9uZVwiOlxyXG5cdFx0XHRcdHJldHVybiBcIlwiO1xyXG5cdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdHJldHVybiBjbGFzc2VzLmRlZmF1bHRcclxuXHRcdH1cclxuXHR9KVxyXG5cdGNvbnN0IEljb25TVkcgPVxyXG5cdFx0ZmluZEJ5RGlzcGxheU5hbWUocHJvcHMubmFtZSkgPz9cclxuXHRcdCgoKSA9PiB7XHJcblx0XHRcdHJldHVybiBcIlwiO1xyXG5cdFx0fSk7XHJcblx0cmV0dXJuIChcclxuXHRcdDxJY29uU1ZHXHJcblx0XHRcdHsuLi5wcm9wc31cclxuXHRcdFx0Y2xhc3NOYW1lPXtbY2hvb3NlbkNsYXNzLCBwcm9wcy5jbGFzc05hbWVdLmZpbHRlcihjID0+IHR5cGVvZiBjID09PSBcInN0cmluZ1wiKS5qb2luKFwiIFwiKX1cclxuXHRcdFx0c3R5bGU9e09iamVjdC5hc3NpZ24oe30sIHtcclxuXHRcdFx0XHR3aWR0aDogXCJpbmhlcml0XCIsXHJcblx0XHRcdFx0aGVpZ2h0OiBcImluaGVyaXRcIixcclxuXHRcdFx0fSwgcHJvcHMuc3R5bGUpfVxyXG5cdFx0Lz5cclxuXHQpO1xyXG59IiwiaW1wb3J0IHsgUmVhY3QgfSBmcm9tIFwiLi4vd2VicGFja1wiO1xyXG5pbXBvcnQgeyBmaW5kQnlQcm9wcyB9IGZyb20gXCIuLi93ZWJwYWNrXCI7XHJcblxyXG5jb25zdCBMYXllclByb3ZpZGVyID0gLyojX19QVVJFX18qLygoKT0+ZmluZEJ5UHJvcHMoXCJBcHBMYXllclByb3ZpZGVyXCIpLkFwcExheWVyUHJvdmlkZXIoKS5wcm9wcy5sYXllckNvbnRleHRcclxuXHQuUHJvdmlkZXIpKCk7XHJcbmNvbnN0IEFjY2Vzc2liaWxpdHlQcm92aWRlciA9IC8qI19fUFVSRV9fKi8oKCk9PmZpbmRCeVByb3BzKFxyXG5cdFwiQWNjZXNzaWJpbGl0eVByZWZlcmVuY2VzQ29udGV4dFwiXHJcbikuQWNjZXNzaWJpbGl0eVByZWZlcmVuY2VzQ29udGV4dC5Qcm92aWRlcikoKTtcclxuY29uc3QgbGF5ZXJDbGFzcyA9IC8qI19fUFVSRV9fKi8oKCk9PmZpbmRCeVByb3BzKFwiTGF5ZXJDbGFzc05hbWVcIikuTGF5ZXJDbGFzc05hbWUpKCk7XHJcblxyXG4vKipcclxuICogV3JhcCBhIGNvbXBvbmVudCByZW5kZXJlZCBvdXQtb2YtdHJlZSBpbiBEaXNjb3JkJ3MgcHJvdmlkZXJzXHJcbiAqIEBuYW1lIERpc2NvcmRQcm92aWRlcnNcclxuICogQG1lbWJlcm9mIG1vZHVsZTpjb21wb25lbnRzXHJcbiAqIEBleGFtcGxlXHJcbiAqIHJldHVybiAoXHJcbiAqICAgPERpc2NvcmRQcm92aWRlcnM+XHJcbiAqIFx0XHQ8V2hhdGV2ZXIvPlxyXG4gKiBcdCA8L0Rpc2NvcmRQcm92aWRlcnM+XHJcbiAqICk7XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEaXNjb3JkUHJvdmlkZXJzKHByb3BzKSB7XHJcblx0cmV0dXJuIChcclxuXHRcdDxBY2Nlc3NpYmlsaXR5UHJvdmlkZXJcclxuXHRcdFx0dmFsdWU9e3sgcmVkdWNlZE1vdGlvbjogeyBlbmFibGVkOiBmYWxzZSwgcmF3VmFsdWU6IFwibm8tcHJlZmVyZW5jZVwiIH0gfX1cclxuXHRcdD5cclxuXHRcdFx0PExheWVyUHJvdmlkZXJcclxuXHRcdFx0XHR2YWx1ZT17W2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYXBwLW1vdW50ID4gLlwiICsgbGF5ZXJDbGFzcyldfVxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0e3Byb3BzLmNoaWxkcmVufVxyXG5cdFx0XHQ8L0xheWVyUHJvdmlkZXI+XHJcblx0XHQ8L0FjY2Vzc2liaWxpdHlQcm92aWRlcj5cclxuXHQpO1xyXG59XHJcbiIsImltcG9ydCB7IFJlYWN0LCBGbHV4IH0gZnJvbSBcIi4uL3dlYnBhY2tcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZsdXhXcmFwcGVyKHByb3BzKSB7XHJcblx0aWYgKCFwcm9wcy5jaGlsZHJlbi5kaXNwbGF5TmFtZSkgcHJvcHMuY2hpbGRyZW4uZGlzcGxheU5hbWUgPSBcIkZsdXhQcm94eVwiO1xyXG5cdGNvbnN0IENvbm5lY3RlZENvbXBvbmVudCA9IEZsdXguY29ubmVjdFN0b3JlcyhcclxuXHRcdHByb3BzLnN0b3JlcyA/IE9iamVjdC52YWx1ZXMocHJvcHMuc3RvcmVzKSA6IFtdLFxyXG5cdFx0cHJvcHMuY3JlYXRlUHJvcHMgPz9cclxuXHRcdFx0KCgpID0+IHtcclxuXHRcdFx0XHRyZXR1cm4geyBbTWF0aC5yYW5kb20oKV06IE1hdGgucmFuZG9tKCkgfTtcclxuXHRcdFx0fSlcclxuXHQpKHByb3BzLmNoaWxkcmVuKTtcclxuXHRyZXR1cm4gPENvbm5lY3RlZENvbXBvbmVudCB7Li4ucHJvcHMuc3RvcmVzfSAvPjtcclxufVxyXG4iLCJpbXBvcnQgeyBmaW5kQnlQcm9wcyB9IGZyb20gXCIuLi93ZWJwYWNrXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQ2hhbmdlbG9nID0gLyojX19QVVJFX18qLyBmaW5kQnlQcm9wcyhcImxlYWRcIiwgXCJzb2NpYWxMaW5rXCIpXHJcbmV4cG9ydCBjb25zdCBDaGFuZ2Vsb2dNb2RhbCA9IC8qI19fUFVSRV9fKi8gZmluZEJ5UHJvcHMoXCJtYXhNb2RhbFdpZHRoXCIsIFwiY29udGVudFwiKSAvL2kgYXNzdW1lIGl0cyByZWxhdGVkIHRvIHRoZSBjaGFuZ2Vsb2cgbW9kYWxcclxuZXhwb3J0IGNvbnN0IE1hcmdpbnMgPSAvKiNfX1BVUkVfXyovIGZpbmRCeVByb3BzKFwibWFyZ2luTGFyZ2VcIiwgXCJtYXJnaW5Ub3AyMFwiKVxyXG5leHBvcnQgY29uc3QgQ2FyZExvb2sgPSAvKiNfX1BVUkVfXyovIGZpbmRCeVByb3BzKFwiYXJyb3dcIiwgXCJjb250YWluZXJcIiwgXCJkZXNjcmlwdGlvblwiKSIsInZhciBlPVtdLHQ9W107ZnVuY3Rpb24gbihuLHIpe2lmKG4mJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBkb2N1bWVudCl7dmFyIGEscz0hMD09PXIucHJlcGVuZD9cInByZXBlbmRcIjpcImFwcGVuZFwiLGQ9ITA9PT1yLnNpbmdsZVRhZyxpPVwic3RyaW5nXCI9PXR5cGVvZiByLmNvbnRhaW5lcj9kb2N1bWVudC5xdWVyeVNlbGVjdG9yKHIuY29udGFpbmVyKTpkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF07aWYoZCl7dmFyIHU9ZS5pbmRleE9mKGkpOy0xPT09dSYmKHU9ZS5wdXNoKGkpLTEsdFt1XT17fSksYT10W3VdJiZ0W3VdW3NdP3RbdV1bc106dFt1XVtzXT1jKCl9ZWxzZSBhPWMoKTs2NTI3OT09PW4uY2hhckNvZGVBdCgwKSYmKG49bi5zdWJzdHJpbmcoMSkpLGEuc3R5bGVTaGVldD9hLnN0eWxlU2hlZXQuY3NzVGV4dCs9bjphLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKG4pKX1mdW5jdGlvbiBjKCl7dmFyIGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO2lmKGUuc2V0QXR0cmlidXRlKFwidHlwZVwiLFwidGV4dC9jc3NcIiksci5hdHRyaWJ1dGVzKWZvcih2YXIgdD1PYmplY3Qua2V5cyhyLmF0dHJpYnV0ZXMpLG49MDtuPHQubGVuZ3RoO24rKyllLnNldEF0dHJpYnV0ZSh0W25dLHIuYXR0cmlidXRlc1t0W25dXSk7dmFyIGE9XCJwcmVwZW5kXCI9PT1zP1wiYWZ0ZXJiZWdpblwiOlwiYmVmb3JlZW5kXCI7cmV0dXJuIGkuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KGEsZSksZX19ZXhwb3J0e24gYXMgZGVmYXVsdH07XG4iLCJpbXBvcnQgeyBSZWFjdCB9IGZyb20gXCIuLi93ZWJwYWNrXCI7XHJcbmltcG9ydCBEaXNjb3JkSWNvbiBmcm9tIFwiLi9EaXNjb3JkSWNvblwiO1xyXG5pbXBvcnQgeyBUZXh0IH0gZnJvbSBcIi4vaW5kZXhcIjtcclxuaW1wb3J0IHsgQ2FyZExvb2sgfSBmcm9tIFwiLi4vY2xhc3Nlc1wiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL0NhdGVnb3J5LmNzc1wiXHJcblxyXG4vKipcclxuICogQSBDYXRlZ29yeSBjb21wb25lbnQgdG8gaGlkZSBjb21wb25lbnRzLiBOb3RlIHRoYXQgdGhpcyBkb2VzIG5vdCB1c2UgdGhlIGN1cnJlbnQgY2F0ZWdvcnkgY29tcG9uZW50IG9mIHRoZSBtb2QuXHJcbiAqIEBuYW1lIERpc2NvcmRQcm92aWRlcnNcclxuICogQG1lbWJlcm9mIG1vZHVsZTpjb21wb25lbnRzXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wcyBSZWFjdCBwcm9wZXJ0aWVzLlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gW3Byb3BzLnRpdGxlXSBUaGUgdGl0bGUgb2YgdGhlIGNhdGVnb3J5LlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gW3Byb3BzLmRlc2NyaXB0aW9uXSBUaGUgZGVzY3JpcHRpb24gb2YgdGhlIGNhdGVnb3J5LlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gW3Byb3BzLmljb25dIFRoZSBkZXNjcmlwdGlvbiBvZiB0aGUgY2F0ZWdvcnkuXHJcbiAqIEBleGFtcGxlXHJcbiAqIHJldHVybiAoXHJcbiAqICAgPENhdGVnb3J5IHRpdGxlPVwiTmFtZVwiPlxyXG4gKiBcdFx0PFdoYXRldmVyLz5cclxuICogXHQgPC9DYXRlZ29yeT5cclxuICogKTtcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhdGVnb3J5KHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBpY29uLCBjaGlsZHJlbiwgb3BlbmVkQnlEZWZhdWx0ID0gZmFsc2UgfSkge1xyXG4gICAgY29uc3QgW29wZW5lZCwgc2V0T3BlbmVkXSA9IFJlYWN0LnVzZVN0YXRlKG9wZW5lZEJ5RGVmYXVsdCk7XHJcblxyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJjYXRlZ29yeVwiXX0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e0NhcmRMb29rLmNvbnRhaW5lcn0gb25DbGljaz17KCkgPT4gc2V0T3BlbmVkKCFvcGVuZWQpfT5cclxuICAgICAgICAgICAge2ljb24gJiYgPGRpdiBjbGFzc05hbWU9e0NhcmRMb29rLmljb259PlxyXG4gICAgICAgICAgICAgICAgPERpc2NvcmRJY29uIG5hbWU9e2ljb259IHN0eWxlPXt7IHdpZHRoOiBcIjIwcHhcIiwgaGVpZ2h0OiBcIjIwcHhcIiB9fSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj59XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtDYXJkTG9vay5kZXNjcmlwdGlvbn0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlLTJkc0RMblwiPnt0aXRsZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgIHtkZXNjcmlwdGlvbiAmJiA8VGV4dD57ZGVzY3JpcHRpb259PC9UZXh0Pn1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtDYXJkTG9vay5hcnJvd30+XHJcbiAgICAgICAgICAgICAgICA8RGlzY29yZEljb24gbmFtZT1cIkRyb3Bkb3duQXJyb3dcIiBjbGFzc05hbWU9e2Ake3N0eWxlc1tcImNhdGVnb3J5LWhlYWRlci1pY29uXCJdfSAkeyFvcGVuZWQgPyBzdHlsZXNbXCJjbG9zZWRcIl0gOiBcIlwifWB9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICB7b3BlbmVkICYmIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJjYXRlZ29yeS1jb250ZW50XCJdfT57Y2hpbGRyZW59PC9kaXY+fVxyXG5cclxuICAgICAgICB7LyogPEZvcm1zLkZvcm1EaXZpZGVyIGNsYXNzTmFtZT1cImRpdmlkZXJEZWZhdWx0LTNDMi13c1wiLz4gKi99XHJcbiAgICA8L2Rpdj5cclxufVxyXG4iLCIvKipcclxuICogQG1vZHVsZSBjb21wb25lbnRzXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgUmVhY3QsIGZpbmRCeURpc3BsYXlOYW1lLCBmaW5kQnlQcm9wcywgZmluZCB9IGZyb20gXCIuLi93ZWJwYWNrXCI7XHJcblxyXG4vLyBEb24ndCByZS1leHBvcnQgb3VyIGNvbXBvbmVudHMgYXMgdGhleSB3b24ndCB0cmVlc2hha2UgcHJvcGVybHkuIEluc3RlYWQsIHBlb3BsZSBjYW4gbWFudWFsbHkgaW1wb3J0IHRoZW0uXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRGlzY29yZEljb24gfSBmcm9tIFwiLi9EaXNjb3JkSWNvblwiO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIERpc2NvcmRQcm92aWRlcnMgfSBmcm9tIFwiLi9EaXNjb3JkUHJvdmlkZXJzXCI7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRmx1eFdyYXBwZXIgfSBmcm9tIFwiLi9GbHV4V3JhcHBlclwiO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIENhdGVnb3J5IH0gZnJvbSBcIi4vQ2F0ZWdvcnlcIjtcclxuXHJcbi8vIFdyYXBwZXIgZm9yIFN3aXRjaCBjb21wb25lbnQgdG8gZml4IHRoZSBzd2l0Y2ggYm94IG5vdCBiZWluZyB1cGRhdGFibGUuIENoZWNrIGh0dHBzOi8vZ2l0aHViLmNvbS9CZXR0ZXJEaXNjb3JkQnVpbGRlci9iZGJ1aWxkZXIvYmxvYi9tYXN0ZXIvY29tbW9uL2hvb2tzL2NyZWF0ZVVwZGF0ZVdyYXBwZXIuanNcclxuZXhwb3J0IGNvbnN0IG1ha2VVcGRhdGVXcmFwcGVyID0gKENvbXBvbmVudCwgY2hlY2tQcm9wTmFtZSA9IFwidmFsdWVcIiwgdHlwZSA9IFwic3dpdGNoXCIpID0+IHtcclxuICAgIGNvbnN0IHR5cGVTd2l0Y2ggPSAodikgPT4ge1xyXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwic3dpdGNoXCI6IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB2XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBcInJhZGlvXCI6IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB2LnZhbHVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGVmYXVsdDoge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiAocHJvcHMpID0+IHtcclxuICAgICAgICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IFJlYWN0LnVzZVN0YXRlKHByb3BzW2NoZWNrUHJvcE5hbWVdKVxyXG4gICAgICAgIHJldHVybiA8Q29tcG9uZW50XHJcbiAgICAgICAgICAgIHsuLi57XHJcbiAgICAgICAgICAgICAgICAuLi5wcm9wcyxcclxuICAgICAgICAgICAgICAgIFtjaGVja1Byb3BOYW1lXTogdmFsdWUsXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZTogKC4uLmFyZ3MpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGFyZ3NbMF1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHByb3BzLm9uQ2hhbmdlID09PSBcImZ1bmN0aW9uXCIpIHByb3BzLm9uQ2hhbmdlKHZhbHVlKVxyXG4gICAgICAgICAgICAgICAgICAgIHNldFZhbHVlKHR5cGVTd2l0Y2godmFsdWUpKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgIC8+XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBCdXR0b24gPSAvKiNfX1BVUkVfXyovZmluZEJ5UHJvcHMoXCJDb2xvcnNcIiwgXCJMb29rc1wiLCBcIkRyb3Bkb3duU2l6ZXNcIik7XHJcbmV4cG9ydCBjb25zdCBTcGlubmVyID0gLyojX19QVVJFX18qL2ZpbmRCeURpc3BsYXlOYW1lKFwiU3Bpbm5lclwiKTtcclxuZXhwb3J0IGNvbnN0IFRleHQgPSAvKiNfX1BVUkVfXyovZmluZEJ5RGlzcGxheU5hbWUoXCJMZWdhY3lUZXh0XCIpO1xyXG5leHBvcnQgY29uc3QgVGV4dElucHV0ID0gLyojX19QVVJFX18qL2ZpbmRCeURpc3BsYXlOYW1lKFwiVGV4dElucHV0XCIpO1xyXG5leHBvcnQgY29uc3QgVG9vbHRpcCA9IC8qI19fUFVSRV9fKi9maW5kQnlEaXNwbGF5TmFtZShcIlRvb2x0aXBcIik7XHJcbmV4cG9ydCBjb25zdCBUb29sdGlwQ29udGFpbmVyID0gLyojX19QVVJFX18qLygoKSA9PiBmaW5kQnlQcm9wcyhcIlRvb2x0aXBDb250YWluZXJcIik/LlRvb2x0aXBDb250YWluZXIpKCk7XHJcbmV4cG9ydCBjb25zdCBTbGlkZUluID0gLyojX19QVVJFX18qL2ZpbmRCeURpc3BsYXlOYW1lKFwiU2xpZGVJblwiKTtcclxuZXhwb3J0IGNvbnN0IFNldHRpbmdzTm90aWNlID0gLyojX19QVVJFX18qL2ZpbmRCeURpc3BsYXlOYW1lKFwiU2V0dGluZ3NOb3RpY2VcIik7XHJcbmV4cG9ydCBjb25zdCBUcmFuc2l0aW9uR3JvdXAgPSAvKiNfX1BVUkVfXyovZmluZEJ5RGlzcGxheU5hbWUoXCJUcmFuc2l0aW9uR3JvdXBcIik7XHJcbmV4cG9ydCBjb25zdCBGbGV4ID0gLyojX19QVVJFX18qL2ZpbmRCeURpc3BsYXlOYW1lKFwiRmxleFwiKTtcclxuZXhwb3J0IGNvbnN0IENhcmQgPSAvKiNfX1BVUkVfXyovZmluZEJ5RGlzcGxheU5hbWUoXCJDYXJkXCIpO1xyXG5leHBvcnQgY29uc3QgUG9wb3V0ID0gLyojX19QVVJFX18qL2ZpbmRCeURpc3BsYXlOYW1lKFwiUG9wb3V0XCIpO1xyXG5leHBvcnQgY29uc3QgUHJvZ3Jlc3MgPSAvKiNfX1BVUkVfXyovZmluZEJ5RGlzcGxheU5hbWUoXCJQcm9ncmVzc1wiKTtcclxuZXhwb3J0IGNvbnN0IE1vZGFsID0gLyojX19QVVJFX18qL2ZpbmRCeVByb3BzKFwiTW9kYWxSb290XCIpXHJcbmV4cG9ydCBjb25zdCBGb3JtcyA9IC8qI19fUFVSRV9fKi9maW5kQnlQcm9wcygnRm9ybUl0ZW0nKVxyXG5leHBvcnQgY29uc3QgQ29sb3JQaWNrZXIgPSAvKiNfX1BVUkVfXyovZmluZEJ5RGlzcGxheU5hbWUoXCJDb2xvclBpY2tlclwiKVxyXG5leHBvcnQgY29uc3QgQW5jaG9yID0gLyojX19QVVJFX18qL2ZpbmRCeURpc3BsYXlOYW1lKFwiQW5jaG9yXCIpXHJcbmV4cG9ydCBjb25zdCBIZWFkaW5nID0gLyojX19QVVJFX18qLygoKSA9PiBmaW5kQnlQcm9wcyhcIkhlYWRpbmdcIikuSGVhZGluZykoKTtcclxuZXhwb3J0IGNvbnN0IEtleWJvYXJkU2hvcnRjdXQgPSAvKiNfX1BVUkVfXyovKCgpID0+IGZpbmRCeVByb3BzKFwiUFJFVFRZX0tFWVNcIikuZGVmYXVsdCkoKTtcclxuZXhwb3J0IGNvbnN0IFNlYXJjaEJhciA9IC8qI19fUFVSRV9fKi8oKCkgPT4gZmluZEJ5UHJvcHMoXCJTZWFyY2hJY29uXCIpLmRlZmF1bHQpKCk7XHJcbmV4cG9ydCBjb25zdCBPcmlnaW5hbFJhZGlvR3JvdXAgPSAvKiNfX1BVUkVfXyovZmluZEJ5RGlzcGxheU5hbWUoXCJSYWRpb0dyb3VwXCIpO1xyXG5leHBvcnQgY29uc3QgUmFkaW9Hcm91cCA9IG1ha2VVcGRhdGVXcmFwcGVyKE9yaWdpbmFsUmFkaW9Hcm91cCwgXCJ2YWx1ZVwiLCBcInJhZGlvXCIpO1xyXG5leHBvcnQgY29uc3QgT3JpZ2luYWxTd2l0Y2ggPSAvKiNfX1BVUkVfXyovZmluZEJ5RGlzcGxheU5hbWUoXCJTd2l0Y2hcIik7XHJcbmV4cG9ydCBjb25zdCBTd2l0Y2ggPSBtYWtlVXBkYXRlV3JhcHBlcihPcmlnaW5hbFN3aXRjaCwgXCJjaGVja2VkXCIpO1xyXG5leHBvcnQgY29uc3QgT3JpZ2luYWxTd2l0Y2hJdGVtID0gLyojX19QVVJFX18qL2ZpbmRCeURpc3BsYXlOYW1lKFwiU3dpdGNoSXRlbVwiKTtcclxuZXhwb3J0IGNvbnN0IFN3aXRjaEl0ZW0gPSBtYWtlVXBkYXRlV3JhcHBlcihPcmlnaW5hbFN3aXRjaEl0ZW0sIFwidmFsdWVcIik7XHJcbmV4cG9ydCBjb25zdCBNYXJrZG93biA9IC8qI19fUFVSRV9fKi8oKCkgPT4gZmluZChtID0+IG0/LmRlZmF1bHQ/LmRpc3BsYXlOYW1lID09IFwiTWFya2Rvd25cIiAmJiBtPy5kZWZhdWx0Py5ydWxlcyk/LmRlZmF1bHQpKCk7XHJcblxyXG5leHBvcnQgY29uc3QgQ29udGV4dE1lbnUgPSAvKiNfX1BVUkVfXyovZmluZEJ5UHJvcHMoXCJNZW51SXRlbVwiKS5kZWZhdWx0XHJcbk9iamVjdC5lbnRyaWVzKGZpbmRCeVByb3BzKFwiTWVudUl0ZW1cIikpLmZvckVhY2goKFtrZXksIGNvbnRlbnRzXSkgPT4ge1xyXG4gICAgaWYgKCFDb250ZXh0TWVudVtrZXldKSB7XHJcbiAgICAgICAgQ29udGV4dE1lbnVba2V5XSA9IGNvbnRlbnRzXHJcbiAgICB9XHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgQXZhdGFyID0gLyojX19QVVJFX18qLygoKSA9PiBmaW5kQnlQcm9wcyhcIkFuaW1hdGVkQXZhdGFyXCIpLmRlZmF1bHQpKClcclxuZXhwb3J0IGNvbnN0IEFuaW1hdGVkQXZhdGFyID0gLyojX19QVVJFX18qLygoKSA9PiBmaW5kQnlQcm9wcyhcIkFuaW1hdGVkQXZhdGFyXCIpLkFuaW1hdGVkQXZhdGFyKSgpXHJcbmV4cG9ydCBjb25zdCBBdmF0YXJTaXplcyA9IC8qI19fUFVSRV9fKi8oKCkgPT4gZmluZEJ5UHJvcHMoXCJBbmltYXRlZEF2YXRhclwiKS5TaXplcykoKVxyXG5cclxuZXhwb3J0IGNvbnN0IFNsaWRlciA9IC8qI19fUFVSRV9fKi8oKCkgPT4gZmluZEJ5UHJvcHMoXCJNYXJrZXJQb3NpdGlvbnNcIikuZGVmYXVsdCkoKVxyXG5leHBvcnQgY29uc3QgU2xpZGVyTWFya2VyUG9zaXRpb25zID0gLyojX19QVVJFX18qLygoKSA9PiBmaW5kQnlQcm9wcyhcIk1hcmtlclBvc2l0aW9uc1wiKS5NYXJrZXJQb3NpdGlvbnMpKCkiLCIvLyBLbm93IGl0IHdpbGwgd29yayBvbiB0aGlzIGNsaWVudCBtb2Qgb3IgaXQncyBkZXRlY3RpbmcgdGhlIHdyb25nIG9uZT9cclxuLy8gU2V0IHRoaXMgdmFyaWFibGUuXHJcblxyXG5leHBvcnQgZGVmYXVsdCAvKipcclxuICogQG1lbWJlcm9mIG1vZHVsZTp1dGlsaXRpZXNcclxuICogQHJldHVybnMge3N0cmluZ30gVGhlIG5hbWUgb2YgdGhlIHJ1bm5pbmcgY2xpZW50IG1vZC5cclxuICovIGZ1bmN0aW9uIGdldENsaWVudE1vZCgpIHtcclxuXHRyZXR1cm4gcHJvY2Vzcy5lbnYuQ0xJRU5UX01PRFxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IC8qKlxyXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnV0aWxpdGllc1xyXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBUaGUgY3VycmVudCB0aW1lIGluIG5hbm9zZWNvbmRzLlxyXG4gKi8gZnVuY3Rpb24gbmFub3NlY29uZHMoKSB7XHJcblx0Y29uc3QgaHJUaW1lID0gcHJvY2Vzcy5ocnRpbWUoKTtcclxuXHRyZXR1cm4gaHJUaW1lWzBdICogMTAwMDAwMDAwMCArIGhyVGltZVsxXTtcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCAvKipcclxuICogQHBhcmFtIHtudW1iZXJ9IHRpbWUgVGltZSAoaW4gbWlsbGlzZWNvbmRzKS5cclxuICogQG1lbWJlcm9mIG1vZHVsZTp1dGlsaXRpZXNcclxuICogQHJldHVybnMge1Byb21pc2V9IEEgc3RyaW5nIG9mIHJhbmRvbSBjaGFyYWN0ZXJzLlxyXG4gKi8gZnVuY3Rpb24gcmFuZG9tU3RyaW5nKHRpbWUpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQoKCkgPT4gcmVzb2x2ZSgpLCB0aW1lKSlcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVBcmd1bWVudHMoLi4uYXJncykge1xyXG5cdHJldHVybiBbXHJcblx0XHRcIiVjSXR0YWlcIixcclxuXHRcdFwiY29sb3I6ICMwMDA7IGJhY2tncm91bmQtY29sb3I6ICM0MmZmYTc7IGZvbnQtZmFtaWx5OiBkZWZhdWx0OyBwYWRkaW5nLWxlZnQ6IDNweDsgcGFkZGluZy1yaWdodDogM3B4OyBib3JkZXItcmFkaXVzOiAycHg7IGZvbnQtd2VpZ2h0OiBib2xkO1wiLFxyXG5cdFx0Li4uYXJncyxcclxuXHRdO1xyXG59XHJcbiIsImltcG9ydCB7IGNvbnNvbGVDb3B5LCBjcmVhdGVBcmd1bWVudHMgfSBmcm9tIFwiLi4vbG9nZ2VyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAvKipcclxuICogQG1lbWJlcm9mIG1vZHVsZTpsb2dnZXJcclxuICogQHBhcmFtICB7Li4uYW55fSBhcmdzXHJcbiAqLyBmdW5jdGlvbiBsb2coLi4uYXJncykge1xyXG5cdGNvbnNvbGVDb3B5LmxvZyguLi5jcmVhdGVBcmd1bWVudHMoLi4uYXJncykpO1xyXG59XHJcbiIsImltcG9ydCB7IGNvbnNvbGVDb3B5LCBjcmVhdGVBcmd1bWVudHMgfSBmcm9tIFwiLi4vbG9nZ2VyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAvKipcclxuICogQG1lbWJlcm9mIG1vZHVsZTpsb2dnZXJcclxuICogQHBhcmFtICB7Li4uYW55fSBhcmdzXHJcbiAqLyBmdW5jdGlvbiBkZWJ1ZyguLi5hcmdzKSB7XHJcblx0Y29uc29sZUNvcHkuZGVidWcoLi4uY3JlYXRlQXJndW1lbnRzKC4uLmFyZ3MpKTtcclxufVxyXG4iLCJpbXBvcnQgeyBjb25zb2xlQ29weSwgY3JlYXRlQXJndW1lbnRzIH0gZnJvbSBcIi4uL2xvZ2dlclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgLyoqXHJcbiAqIEBtZW1iZXJvZiBtb2R1bGU6bG9nZ2VyXHJcbiAqIEBwYXJhbSAgey4uLmFueX0gYXJnc1xyXG4gKi8gZnVuY3Rpb24gd2FybiguLi5hcmdzKSB7XHJcblx0Y29uc29sZUNvcHkud2FybiguLi5jcmVhdGVBcmd1bWVudHMoLi4uYXJncykpO1xyXG59XHJcbiIsImltcG9ydCB7IGNvbnNvbGVDb3B5LCBjcmVhdGVBcmd1bWVudHMgfSBmcm9tIFwiLi4vbG9nZ2VyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAvKipcclxuICogQG1lbWJlcm9mIG1vZHVsZTpsb2dnZXJcclxuICogQHBhcmFtICB7Li4uYW55fSBhcmdzXHJcbiAqLyBmdW5jdGlvbiBlcnJvciguLi5hcmdzKSB7XHJcblx0Y29uc29sZUNvcHkuZXJyb3IoLi4uY3JlYXRlQXJndW1lbnRzKC4uLmFyZ3MpKTtcclxufVxyXG4iLCJpbXBvcnQgeyBjb25zb2xlQ29weSwgY3JlYXRlQXJndW1lbnRzIH0gZnJvbSBcIi4uL2xvZ2dlclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgLyoqXHJcbiAqIEBtZW1iZXJvZiBtb2R1bGU6bG9nZ2VyXHJcbiAqIEBwYXJhbSAgey4uLmFueX0gYXJnc1xyXG4gKi8gZnVuY3Rpb24gZ3JvdXAoLi4uYXJncykge1xyXG5cdGNvbnNvbGVDb3B5Lmdyb3VwKC4uLmNyZWF0ZUFyZ3VtZW50cyguLi5hcmdzKSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgY29uc29sZUNvcHksIGNyZWF0ZUFyZ3VtZW50cyB9IGZyb20gXCIuLi9sb2dnZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IC8qKlxyXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmxvZ2dlclxyXG4gKiBAcGFyYW0gIHsuLi5hbnl9IGFyZ3NcclxuICovIGZ1bmN0aW9uIGdyb3VwRW5kKC4uLmFyZ3MpIHtcclxuXHRjb25zb2xlQ29weS5ncm91cEVuZCguLi5jcmVhdGVBcmd1bWVudHMoLi4uYXJncykpO1xyXG59XHJcbiIsImltcG9ydCB7IGNvbnNvbGVDb3B5IH0gZnJvbSBcIi4uL2xvZ2dlclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgLyoqXHJcbiAqIEBtZW1iZXJvZiBtb2R1bGU6bG9nZ2VyXHJcbiAqIEBwYXJhbSAgey4uLmFueX0gYXJnc1xyXG4gKi8gZnVuY3Rpb24gY291bnQoLi4uYXJncykge1xyXG5cdGNvbnNvbGVDb3B5LmNvdW50KC4uLmFyZ3MpO1xyXG59XHJcbiIsImltcG9ydCB7IGNvbnNvbGVDb3B5IH0gZnJvbSBcIi4uL2xvZ2dlclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgLyoqXHJcbiAqIEBtZW1iZXJvZiBtb2R1bGU6bG9nZ2VyXHJcbiAqIEBwYXJhbSAgey4uLmFueX0gYXJnc1xyXG4gKi8gZnVuY3Rpb24gY291bnRSZXNldCguLi5hcmdzKSB7XHJcblx0Y29uc29sZUNvcHkuY291bnRSZXNldCguLi5hcmdzKTtcclxufVxyXG4iLCIvKipcclxuICogQG1vZHVsZSBsb2dnZXJcclxuICovXHJcblxyXG5leHBvcnQgY29uc3QgY29uc29sZUNvcHkgPSB7IC4uLmNvbnNvbGUgfTtcclxuXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgY3JlYXRlQXJndW1lbnRzIH0gZnJvbSBcIi4vY3JlYXRlQXJndW1lbnRzXCI7XHJcblxyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGxvZyB9IGZyb20gXCIuL2xvZ1wiO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGRlYnVnIH0gZnJvbSBcIi4vZGVidWdcIjtcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyB3YXJuIH0gZnJvbSBcIi4vd2FyblwiO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGVycm9yIH0gZnJvbSBcIi4vZXJyb3JcIjtcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBncm91cCB9IGZyb20gXCIuL2dyb3VwXCI7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZ3JvdXBFbmQgfSBmcm9tIFwiLi9ncm91cEVuZFwiO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGNvdW50IH0gZnJvbSBcIi4vY291bnRcIjtcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBjb3VudFJlc2V0IH0gZnJvbSBcIi4vY291bnRSZXNldFwiO1xyXG4iLCJpbXBvcnQgeyBlcnJvciB9IGZyb20gXCIuLi9sb2dnZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IC8qKlxyXG4gKiBGaW5kcyBhbiBvYmplY3QgaW4gYSB0cmVlLlxyXG4gKiBAcGFyYW0ge29iamVjdH0gdHJlZSBUaGUgdHJlZSB0byBzZWFyY2guXHJcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZpbHRlciBBIGZpbHRlciBmdW5jdGlvbiB0aGF0IHNob3VsZCByZXR1cm4gdHJ1ZSB3aGVuIGl0IGNoZWNrcyB3aGF0IHlvdSB3YW50IHRvIGZpbmQuXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXHJcbiAqIEBwYXJhbSB7c3RyaW5nW119IFtvcHRpb25zLndhbGthYmxlPVtdXSBXaGljaCBub2RlIG5hbWVzIGFyZSB3YWxrYWJsZS5cclxuICogQHBhcmFtIHtzdHJpbmdbXX0gW29wdGlvbnMuZXhjbHVkZT1bXV0gV2hpY2ggbm9kZSBuYW1lcyB0byBub3Qgd2Fsay5cclxuICogQHBhcmFtIHtib29sZWFufHN0cmluZ30gW29wdGlvbnMud2hpbGVMb29wPWZhbHNlXSBXaGV0aGVyIG9yIG5vdCB0byB1c2UgYSB3aGlsZSBsb29wIGluc3RlYWQgb2YgcmVjdXJzaW9uLiBUaGlzIGlzIHNsb3dlciwgYnV0IG5vdCBwcm9uZSB0byBzdGFjayBvdmVyZmxvdy5cclxuICogQHBhcmFtIHtib29sZWFufHN0cmluZ30gW29wdGlvbnMubWF4RGVwdGg9MTAwXSBUaGUgbWF4aW11bSBhbW91bnQgb2YgbGF5ZXJzIGRlZXAgdG8gc2VhcmNoIHRoZSB0cmVlLiBgb3B0aW9ucy53aGlsZUxvb3A9ZmFsc2VgIG9ubHkuXHJcbiAqIEBtZW1iZXJvZiBtb2R1bGU6dXRpbGl0aWVzXHJcbiAqIEByZXR1cm5zIHtvYmplY3R8bnVsbH1cclxuICovIGZ1bmN0aW9uIGZpbmRJblRyZWUoXHJcblx0dHJlZSxcclxuXHRmaWx0ZXIsXHJcblx0e1xyXG5cdFx0d2Fsa2FibGUgPSBbXSxcclxuXHRcdGV4Y2x1ZGUgPSBbXSxcclxuXHRcdHdoaWxlTG9vcCA9IGZhbHNlLFxyXG5cdFx0bWF4RGVwdGggPSAxMDAsXHJcblx0XHRkZXB0aCA9IDAsXHJcblx0fSA9IHt9XHJcbikge1xyXG5cdGlmIChkZXB0aCA9PT0gbWF4RGVwdGgpIHJldHVybiBudWxsO1xyXG5cdGlmICh0cmVlID09PSBudWxsIHx8IHRyZWUgPT09IHVuZGVmaW5lZCkgcmV0dXJuIG51bGw7XHJcblx0aWYgKHR5cGVvZiB0cmVlICE9PSBcIm9iamVjdFwiKSByZXR1cm4gbnVsbDtcclxuXHJcblx0aWYgKHR5cGVvZiBmaWx0ZXIgPT09IFwic3RyaW5nXCIpIHJldHVybiB0cmVlW2ZpbHRlcl07XHJcblxyXG5cdGlmICh3aGlsZUxvb3ApIHtcclxuXHRcdGNvbnN0IHN0YWNrID0gW3RyZWVdO1xyXG5cdFx0d2hpbGUgKHN0YWNrLmxlbmd0aCkge1xyXG5cdFx0XHRjb25zdCBub2RlID0gc3RhY2tbd2hpbGVMb29wID09PSBcInJldmVyc2VcIiA/IFwicG9wXCIgOiBcInNoaWZ0XCJdKCk7XHJcblx0XHRcdHRyeSB7XHJcblx0XHRcdFx0aWYgKGZpbHRlcihub2RlKSkgcmV0dXJuIG5vZGU7XHJcblx0XHRcdH0gY2F0Y2gge31cclxuXHRcdFx0aWYgKHN0YWNrLmxlbmd0aCA+PSBtYXhTdGFjaykgY29udGludWU7XHJcblx0XHRcdGlmIChBcnJheS5pc0FycmF5KG5vZGUpKSB7XHJcblx0XHRcdFx0c3RhY2sucHVzaCguLi5ub2RlKTtcclxuXHRcdFx0fSBlbHNlIGlmICh0eXBlb2Ygbm9kZSA9PT0gXCJvYmplY3RcIiAmJiBub2RlICE9PSBudWxsKSB7XHJcblx0XHRcdFx0aWYgKHdhbGthYmxlLmxlbmd0aCA+IDApIHtcclxuXHRcdFx0XHRcdHN0YWNrLnB1c2goXHJcblx0XHRcdFx0XHRcdC4uLk9iamVjdC5lbnRyaWVzKG5vZGUpXHJcblx0XHRcdFx0XHRcdFx0LmZpbHRlcihcclxuXHRcdFx0XHRcdFx0XHRcdChba2V5LCB2YWx1ZV0pID0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdHdhbGthYmxlLmluZGV4T2Yoa2V5KSAhPT0gLTEgJiYgZXhjbHVkZS5pbmRleE9mKGtleSkgPT09IC0xXHJcblx0XHRcdFx0XHRcdFx0KVxyXG5cdFx0XHRcdFx0XHRcdC5tYXAoKFtrZXksIHZhbHVlXSkgPT4gdmFsdWUpXHJcblx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRzdGFjay5wdXNoKFxyXG5cdFx0XHRcdFx0XHQuLi5PYmplY3QudmFsdWVzKG5vZGUpLmZpbHRlcihcclxuXHRcdFx0XHRcdFx0XHQoa2V5KSA9PiBleGNsdWRlLmluZGV4T2Yoa2V5KSA9PT0gLTEgJiYgbm9kZVxyXG5cdFx0XHRcdFx0XHQpXHJcblx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRkZXB0aCsrO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIG51bGw7XHJcblx0fSBlbHNlIHtcclxuXHRcdGxldCByZXR1cm5WYWx1ZTtcclxuXHRcdHRyeSB7XHJcblx0XHRcdGlmIChmaWx0ZXIodHJlZSkpIHJldHVybiB0cmVlO1xyXG5cdFx0fSBjYXRjaCB7fVxyXG5cdFx0aWYgKEFycmF5LmlzQXJyYXkodHJlZSkpIHtcclxuXHRcdFx0Zm9yIChjb25zdCB2YWx1ZSBvZiB0cmVlKSB7XHJcblx0XHRcdFx0cmV0dXJuVmFsdWUgPSBmaW5kSW5UcmVlKHZhbHVlLCBmaWx0ZXIsIHtcclxuXHRcdFx0XHRcdHdhbGthYmxlLFxyXG5cdFx0XHRcdFx0ZXhjbHVkZSxcclxuXHRcdFx0XHRcdHdoaWxlTG9vcCxcclxuXHRcdFx0XHRcdG1heERlcHRoLFxyXG5cdFx0XHRcdFx0ZGVwdGg6IGRlcHRoICsgMSxcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHRpZiAocmV0dXJuVmFsdWUpIHJldHVybiByZXR1cm5WYWx1ZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0bGV0IGtleXMgPSB3YWxrYWJsZS5sZW5ndGggPiAwID8gd2Fsa2FibGUgOiBPYmplY3Qua2V5cyh0cmVlKTtcclxuXHRcdGZvciAoY29uc3Qga2V5IG9mIGtleXMpIHtcclxuXHRcdFx0aWYgKCF0cmVlLmhhc093blByb3BlcnR5KGtleSkgfHwgZXhjbHVkZS5pbmNsdWRlcyhrZXkpKSBjb250aW51ZTtcclxuXHRcdFx0cmV0dXJuVmFsdWUgPSBmaW5kSW5UcmVlKHRyZWVba2V5XSwgZmlsdGVyLCB7XHJcblx0XHRcdFx0d2Fsa2FibGUsXHJcblx0XHRcdFx0ZXhjbHVkZSxcclxuXHRcdFx0XHR3aGlsZUxvb3AsXHJcblx0XHRcdFx0bWF4RGVwdGgsXHJcblx0XHRcdFx0ZGVwdGg6IGRlcHRoICsgMSxcclxuXHRcdFx0fSk7XHJcblx0XHRcdGlmIChyZXR1cm5WYWx1ZSkgcmV0dXJuIHJldHVyblZhbHVlO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIG51bGw7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IGZpbmRJblRyZWUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAvKipcclxuICogRmluZHMgYW4gb2JqZWN0IGluIGEgUmVhY3QgdHJlZS5cclxuICogQG1lbWJlcm9mIG1vZHVsZTp1dGlsaXRpZXNcclxuICogQHBhcmFtIHtvYmplY3R9IHRyZWUgVGhlIHRyZWUgdG8gc2VhcmNoLlxyXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmaWx0ZXIgQSBmaWx0ZXIgZnVuY3Rpb24gdGhhdCBzaG91bGQgcmV0dXJuIHRydWUgd2hlbiBpdCBjaGVja3Mgd2hhdCB5b3Ugd2FudCB0byBmaW5kLlxyXG4gKiBAcGFyYW0ge29iamVjdH0gW3doaWxlTG9vcD1mYWxzZV0gV2hldGhlciBvciBub3QgdG8gdXNlIGEgd2hpbGUgbG9vcCBpbnN0ZWFkIG9mIHJlY3Vyc2lvbi4gVGhpcyBpcyBzbG93ZXIsIGJ1dCBub3QgcHJvbmUgdG8gc3RhY2sgb3ZlcmZsb3cuXHJcbiAqLyBmdW5jdGlvbiBmaW5kSW5SZWFjdFRyZWUoXHJcblx0dHJlZSxcclxuXHRmaWx0ZXIsXHJcblx0eyB3aGlsZUxvb3AgPSBmYWxzZSwgbWF4RGVwdGggPSAxMDAsIGRlcHRoID0gMCB9ID0ge31cclxuKSB7XHJcblx0cmV0dXJuIGZpbmRJblRyZWUodHJlZSwgZmlsdGVyLCB7XHJcblx0XHR3YWxrYWJsZTogW1wicHJvcHNcIiwgXCJjaGlsZHJlblwiLCBcImNoaWxkXCIsIFwic2libGluZ1wiXSxcclxuXHRcdGV4Y2x1ZGU6IFtcIl9fcmVhY3RGaWJlciRcIiwgXCJfX3JlYWN0RmliZXJcIiwgXCJfX3JlYWN0SW50ZXJuYWxJbnN0YW5jZSRcIiwgXCJfX3JlYWN0SW50ZXJuYWxJbnN0YW5jZVwiXSxcclxuXHRcdHdoaWxlTG9vcCxcclxuXHRcdG1heERlcHRoLFxyXG5cdFx0ZGVwdGgsXHJcblx0fSk7XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgLyoqXHJcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR8c3RyaW5nfSBub2RlIFRoZSBub2RlLCBub2RlIElELCBub2RlIGNsYXNzIG5hbWUsIG9yIHBhcnRpYWwgbm9kZSBjbGFzcyBuYW1lIHRvIGdldCB0aGUgUmVhY3QgaW5zdGFuY2UgZnJvbS5cclxuICogQG1lbWJlcm9mIG1vZHVsZTp1dGlsaXRpZXNcclxuICogQHJldHVybnMge29iamVjdH1cclxuICovIGZ1bmN0aW9uIGdldFJlYWN0SW5zdGFuY2Uobm9kZSkge1xyXG5cdGlmICh0eXBlb2Ygbm9kZSA9PT0gXCJzdHJpbmdcIilcclxuXHRcdG5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG5cdFx0XHRgJHtub2RlfSwgLiR7bm9kZX0sICMke25vZGV9LCBbY2xhc3MqPVwiJHtub2RlfVwiXWBcclxuXHRcdCk7XHJcblx0aWYgKCFub2RlKSByZXR1cm4gbnVsbDtcclxuXHRpZiAobm9kZS5fX3JlYWN0RmliZXIkKSByZXR1cm4gbm9kZS5fX3JlYWN0RmliZXIkOyAvLyBuZXcgUmVhY3RcclxuXHRpZiAobm9kZS5fX3JlYWN0SW50ZXJuYWxJbnN0YW5jZSQpIHJldHVybiBub2RlLl9fcmVhY3RJbnRlcm5hbEluc3RhbmNlJDsgLy8gb2xkIFJlYWN0XHJcblx0cmV0dXJuIG5vZGVbXHJcblx0XHRPYmplY3Qua2V5cyhub2RlKS5maW5kKChlKSA9PiBlLnN0YXJ0c1dpdGgoXCJfX3JlYWN0RmliZXIkXCIpKSAvLyBuZXcgUmVhY3RcclxuXHRdIHx8IG5vZGVbXHJcblx0XHRPYmplY3Qua2V5cyhub2RlKS5maW5kKChlKSA9PiBlLnN0YXJ0c1dpdGgoXCJfX3JlYWN0SW50ZXJuYWxJbnN0YW5jZVwiKSkgLy8gb2xkIFJlYWN0XHJcblx0XTtcclxufVxyXG4iLCJpbXBvcnQgeyBnZXRSZWFjdEluc3RhbmNlIH0gZnJvbSBcIi4uL3V0aWxpdGllc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgLyoqXHJcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR8c3RyaW5nfSBub2RlIFRoZSBub2RlLCBub2RlIElELCBub2RlIGNsYXNzIG5hbWUsIG9yIHBhcnRpYWwgbm9kZSBjbGFzcyBuYW1lIHRvIGdldCB0aGUgb3duZXIgaW5zdGFuY2UgZnJvbS5cclxuICogQG1lbWJlcm9mIG1vZHVsZTp1dGlsaXRpZXNcclxuICogQHJldHVybnMge29iamVjdH1cclxuICovIGZ1bmN0aW9uIGdldE93bmVySW5zdGFuY2Uobm9kZSkge1xyXG5cdGZvciAobGV0IGN1cnIgPSBnZXRSZWFjdEluc3RhbmNlKG5vZGUpOyBjdXJyOyBjdXJyID0gY3Vyci5yZXR1cm4pIHtcclxuXHRcdGNvbnN0IG93bmVyID0gY3Vyci5zdGF0ZU5vZGU7XHJcblx0XHRpZiAob3duZXIpXHJcblx0XHRcdHJldHVybiBvd25lcjtcclxuXHR9XHJcblx0cmV0dXJuIG51bGw7XHJcbn1cclxuIiwiaW1wb3J0IHsgTW9kYWxTdGFjayB9IGZyb20gXCIuLi93ZWJwYWNrXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0ZXN0Q29tcG9uZW50KENvbXBvbmVudCkge1xyXG5cdE1vZGFsU3RhY2sub3Blbk1vZGFsKCgpID0+IENvbXBvbmVudCk7XHJcbn1cclxuIiwiaW1wb3J0IHsgYXZlcmFnZSwgbWVkaWFuLCBuYW5vc2Vjb25kcyB9IGZyb20gXCIuLi91dGlsaXRpZXNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IC8qKlxyXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBjb2RlYmxvY2sgVGhlIGNvZGUgdG8gYmVuY2htYXJrLlxyXG4gKiBAcGFyYW0ge251bWJlcn0gdGltZXMgVGhlIGFtb3VudCBvZiB0aW1lcyB0byBydW4gdGhlIGJlbmNobWFyay5cclxuICogQG1lbWJlcm9mIG1vZHVsZTp1dGlsaXRpZXNcclxuICogQHJldHVybnMge1Byb21pc2V9IEEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gdGhlIGJlbmNobWFyayBpcyBjb21wbGV0ZWQuXHJcbiAqLyBmdW5jdGlvbiBiZW5jaG1hcmsoY29kZWJsb2NrLCB0aW1lcykge1xyXG5cdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG5cdFx0Y29uc3QgcHJlID0gY29kZWJsb2NrLnByZSA/PyAoKCkgPT4ge30pO1xyXG5cdFx0ZGVsZXRlIGNvZGVibG9jay5wcmU7XHJcblx0XHRjb25zdCBwb3N0ID0gY29kZWJsb2NrLnBvc3QgPz8gKCgpID0+IHt9KTtcclxuXHRcdGRlbGV0ZSBjb2RlYmxvY2sucG9zdDtcclxuXHJcblx0XHRjb25zdCBuYW1lID0gT2JqZWN0LmtleXMoY29kZWJsb2NrKVswXTtcclxuXHJcblx0XHRjb2RlYmxvY2sgPSBjb2RlYmxvY2tbT2JqZWN0LmtleXMoY29kZWJsb2NrKVswXV07XHJcblxyXG5cdFx0bGV0IHByb21pc2VzID0gW107XHJcblxyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aW1lczsgaSsrKSB7XHJcblx0XHRcdHByb21pc2VzLnB1c2goXHJcblx0XHRcdFx0bmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuXHRcdFx0XHRcdGxldCByZXR1cm5zLCBzdGFydCwgZW5kO1xyXG5cdFx0XHRcdFx0dHJ5IHtcclxuXHRcdFx0XHRcdFx0cHJlKCk7XHJcblx0XHRcdFx0XHRcdHN0YXJ0ID0gbmFub3NlY29uZHMoKTtcclxuXHRcdFx0XHRcdFx0cmV0dXJucyA9IGNvZGVibG9jaygpO1xyXG5cdFx0XHRcdFx0XHRlbmQgPSBuYW5vc2Vjb25kcygpO1xyXG5cdFx0XHRcdFx0XHRwb3N0KCk7XHJcblx0XHRcdFx0XHR9IGNhdGNoIChlKSB7XHJcblx0XHRcdFx0XHRcdHJlc29sdmUoeyByZXR1cm5zLCB0aW1lOiAwLCBlcnJvcjogZSB9KTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdHJlc29sdmUoeyByZXR1cm5zLCB0aW1lOiBlbmQgLSBzdGFydCwgZXJyb3I6IGZhbHNlIH0pO1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdCk7XHJcblx0XHR9XHJcblxyXG5cdFx0UHJvbWlzZS5hbGwocHJvbWlzZXMpLnRoZW4oKGFsbFJldHVybnMpID0+IHtcclxuXHRcdFx0Y29uc3QgZmluYWxUaW1lcyA9IGFsbFJldHVybnMubWFwKChyKSA9PiByLnRpbWUpO1xyXG5cdFx0XHRyZXNvbHZlKHtcclxuXHRcdFx0XHRuYW1lLFxyXG5cdFx0XHRcdGF2ZXJhZ2U6IGF2ZXJhZ2UoZmluYWxUaW1lcyksXHJcblx0XHRcdFx0bWVkaWFuOiBtZWRpYW4oZmluYWxUaW1lcyksXHJcblx0XHRcdFx0ZXJyb3I6IGFsbFJldHVybnNbMF0uZXJyb3IsXHJcblx0XHRcdFx0cmV0dXJuczogYWxsUmV0dXJuc1swXS5yZXR1cm5zLFxyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cdH0pO1xyXG59XHJcbiIsImltcG9ydCB7IGdyb3VwLCBncm91cEVuZCB9IGZyb20gXCIuLi9sb2dnZXJcIjtcclxuaW1wb3J0IHsgYmVuY2htYXJrLCBuYW5vc2Vjb25kcyB9IGZyb20gXCIuLi91dGlsaXRpZXNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IC8qKlxyXG4gKiBQcmludHMgb3V0IHRoZSBiZW5jaG1hcmsgcmVzdWx0cyBmb3IgZWFjaCBjb2RlIGJsb2NrLlxyXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnV0aWxpdGllc1xyXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBjb2RlYmxvY2sgVGhlIGNvZGUgdG8gYmVuY2htYXJrLlxyXG4gKiBAcGFyYW0ge251bWJlcn0gdGltZXMgVGhlIGFtb3VudCBvZiB0aW1lcyB0byBydW4gdGhlIGJlbmNobWFyay5cclxuICovIGZ1bmN0aW9uIG11bHRpQmVuY2htYXJrKGNvZGVibG9ja3MsIHRpbWVzKSB7XHJcblx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcblx0XHRjb25zdCBzdGFydCA9IG5hbm9zZWNvbmRzKCk7XHJcblx0XHRQcm9taXNlLmFsbChcclxuXHRcdFx0Y29kZWJsb2Nrcy5tYXAoKGNvZGVibG9jaykgPT4gYmVuY2htYXJrKGNvZGVibG9jaywgdGltZXMpKVxyXG5cdFx0KS50aGVuKChyZXN1bHRzKSA9PiB7XHJcblx0XHRcdGNvbnN0IGVuZCA9IG5hbm9zZWNvbmRzKCk7XHJcblx0XHRcdGNvbnN0IGdyb3VwTmFtZSA9IGBCZW5jaG1hcmtlZCAke2NvZGVibG9ja3MubGVuZ3RoLnRvTG9jYWxlU3RyaW5nKCl9IGZ1bmN0aW9ucyAke3RpbWVzLnRvTG9jYWxlU3RyaW5nKCl9IHRpbWVzIG92ZXIgJHsoXHJcblx0XHRcdFx0ZW5kIC0gc3RhcnRcclxuXHRcdFx0KS50b0xvY2FsZVN0cmluZygpfW5zLmA7XHJcblx0XHRcdGdyb3VwKGdyb3VwTmFtZSk7XHJcblx0XHRcdGNvbnN0IG1hcHBlZFJlc3VsdHMgPSBPYmplY3QudmFsdWVzKHJlc3VsdHMpLm1hcCgocmVzdWx0KSA9PiB7XHJcblx0XHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRcdE5hbWU6IHJlc3VsdC5uYW1lLFxyXG5cdFx0XHRcdFx0XCJNZWRpYW4gVGltZVwiOiBgJHtyZXN1bHQubWVkaWFuLnRvTG9jYWxlU3RyaW5nKCl9bnNgLFxyXG5cdFx0XHRcdFx0XCJBdmVyYWdlIFRpbWVcIjogYCR7cmVzdWx0LmF2ZXJhZ2UudG9Mb2NhbGVTdHJpbmcoKX1uc2AsXHJcblx0XHRcdFx0XHRSZXR1cm5zOiByZXN1bHQucmV0dXJucyxcclxuXHRcdFx0XHRcdEVycm9yOiByZXN1bHQuZXJyb3IsXHJcblx0XHRcdFx0XHRcIihNZWRpYW4gVGltZSlcIjogcmVzdWx0Lm1lZGlhbixcclxuXHRcdFx0XHRcdFwiKEF2ZXJhZ2UgVGltZSlcIjogcmVzdWx0LmF2ZXJhZ2UsXHJcblx0XHRcdFx0fTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdGNvbnN0IHN1Y2Nlc3NmdWxSZXN1bHRzID0gbWFwcGVkUmVzdWx0cy5maWx0ZXIoXHJcblx0XHRcdFx0KHJlc3VsdCkgPT4gcmVzdWx0LkVycm9yID09PSBmYWxzZVxyXG5cdFx0XHQpO1xyXG5cdFx0XHRjb25zdCBlcnJvcmVkUmVzdWx0cyA9IG1hcHBlZFJlc3VsdHMuZmlsdGVyKChyZXN1bHQpID0+ICEhcmVzdWx0LkVycm9yKTtcclxuXHJcblx0XHRcdGNvbnNvbGUudGFibGUoXHJcblx0XHRcdFx0c3VjY2Vzc2Z1bFJlc3VsdHMuc29ydCgocmVzdWx0MSwgcmVzdWx0MikgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKHJlc3VsdDFbXCIoTWVkaWFuIFRpbWUpXCJdID4gcmVzdWx0MltcIihNZWRpYW4gVGltZSlcIl0pIHJldHVybiAxO1xyXG5cdFx0XHRcdFx0aWYgKHJlc3VsdDFbXCIoTWVkaWFuIFRpbWUpXCJdIDwgcmVzdWx0MltcIihNZWRpYW4gVGltZSlcIl0pIHJldHVybiAtMTtcclxuXHRcdFx0XHRcdHJldHVybiAwO1xyXG5cdFx0XHRcdH0pLFxyXG5cdFx0XHRcdFtcIk5hbWVcIiwgXCJNZWRpYW4gVGltZVwiLCBcIkF2ZXJhZ2UgVGltZVwiLCBcIlJldHVybnNcIl1cclxuXHRcdFx0KTtcclxuXHRcdFx0aWYgKGVycm9yZWRSZXN1bHRzLmxlbmd0aCA+IDApIHtcclxuXHRcdFx0XHRjb25zb2xlLnRhYmxlKGVycm9yZWRSZXN1bHRzLCBbXCJOYW1lXCIsIFwiRXJyb3JcIl0pO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRncm91cEVuZChncm91cE5hbWUpO1xyXG5cdFx0XHRyZXNvbHZlKHJlc3VsdHMpO1xyXG5cdFx0fSk7XHJcblx0fSk7XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgLyoqXHJcbiAqIEBwYXJhbSB7bnVtYmVyW119IGFycmF5IEFuIGFycmF5IG9mIG51bWJlcnMuXHJcbiAqIEBtZW1iZXJvZiBtb2R1bGU6dXRpbGl0aWVzXHJcbiAqIEByZXR1cm5zIHtudW1iZXJ9IFRoZSBhdmVyYWdlIG9mIHRoZSBudW1iZXJzIGluIHRoZSBhcnJheS5cclxuICovIGZ1bmN0aW9uIGF2ZXJhZ2UoYXJyYXkpIHtcclxuXHRpZiAoYXJyYXkubGVuZ3RoID09PSAwKSByZXR1cm4gMDtcclxuXHRsZXQgdG90YWwgPSAwO1xyXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcclxuXHRcdHRvdGFsICs9IGFycmF5W2ldO1xyXG5cdH1cclxuXHRyZXR1cm4gdG90YWwgLyBhcnJheS5sZW5ndGg7XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgLyoqXHJcbiAqIEBwYXJhbSB7bnVtYmVyW119IGFycmF5IEFuIGFycmF5IG9mIG51bWJlcnMuXHJcbiAqIEBtZW1iZXJvZiBtb2R1bGU6dXRpbGl0aWVzXHJcbiAqIEByZXR1cm5zIHtudW1iZXJ9IFRoZSBtZWRpYW4gb2YgdGhlIG51bWJlcnMgaW4gdGhlIGFycmF5LlxyXG4gKi8gZnVuY3Rpb24gbWVkaWFuKGFycmF5KSB7XHJcblx0aWYgKGFycmF5Lmxlbmd0aCA9PT0gMCkgcmV0dXJuIDA7XHJcblx0YXJyYXkuc29ydChmdW5jdGlvbiAoYSwgYikge1xyXG5cdFx0cmV0dXJuIGEgLSBiO1xyXG5cdH0pO1xyXG5cdGxldCBoYWxmID0gTWF0aC5mbG9vcihhcnJheS5sZW5ndGggLyAyKTtcclxuXHRpZiAoYXJyYXkubGVuZ3RoICUgMikgcmV0dXJuIGFycmF5W2hhbGZdO1xyXG5cdHJldHVybiAoYXJyYXlbaGFsZiAtIDFdICsgYXJyYXlbaGFsZl0pIC8gMi4wO1xyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IC8qKlxyXG4gKiBAcGFyYW0ge251bWJlcn0gbWluIFRoZSBtaW5pbXVtIHZhbHVlIG9mIHRoZSByZXR1cm5lZCBudW1iZXIuXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBtaXggVGhlIG1heGltdW0gdmFsdWUgb2YgdGhlIHJldHVybmVkIG51bWJlci5cclxuICogQG1lbWJlcm9mIG1vZHVsZTp1dGlsaXRpZXNcclxuICogQHJldHVybnMge251bWJlcn0gQSByYW5kb20gbnVtYmVyLlxyXG4gKi8gZnVuY3Rpb24gcmFuZG9tTnVtYmVyKG1pbiwgbWF4KSB7XHJcblx0cmV0dXJuIE1hdGgucmFuZG9tKCkgKiBtYXggLSBtaW47XHJcbn1cclxuIiwiaW1wb3J0IHsgcmFuZG9tTnVtYmVyIH0gZnJvbSBcIi4uL3V0aWxpdGllc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgLyoqXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBsZW5ndGggVGhlIGxlbmd0aCBvZiB0aGUgc3RyaW5nLlxyXG4gKiBAcGFyYW0ge3N0cmluZ3xhcnJheX0gZG9udE1hdGNoIEEgc3RyaW5nIG9yIGFuIGFycmF5IG9mIHN0cmluZ3MgdGhhdCB3aWxsIGNhdXNlIGEgcmVnZW5lcmF0aW9uIGlmIGFueSBhcmUgbWF0Y2hlZC5cclxuICogQHBhcmFtIHtzdHJpbmd8YXJyYXl9IGNoYXJzZXQgQSBsaXN0IG9mIHRoZSBjaGFyYWN0ZXJzIHRvIHVzZSB3aGVuIGdlbmVyYXRpbmcgdGhlIHN0cmluZy5cclxuICogQG1lbWJlcm9mIG1vZHVsZTp1dGlsaXRpZXNcclxuICogQHJldHVybnMge3N0cmluZ30gQSBzdHJpbmcgb2YgcmFuZG9tIGNoYXJhY3RlcnMuXHJcbiAqLyBmdW5jdGlvbiByYW5kb21TdHJpbmcoXHJcblx0bGVuZ3RoLFxyXG5cdGRvbnRNYXRjaCA9IFwiXCIsXHJcblx0Y2hhcnNldCA9IFwiYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXpBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWjAxMjM0NTY3ODlcIlxyXG4pIHtcclxuXHRpZiAodHlwZW9mIGxlbmd0aCAhPT0gXCJudW1iZXJcIiAmJiBsZW5ndGggPD0gMCkgcmV0dXJuO1xyXG5cdGlmICh0eXBlb2YgZG9udE1hdGNoICE9PSBcInN0cmluZ1wiICYmICFBcnJheS5pc0FycmF5KGRvbnRNYXRjaCkpIHJldHVybjtcclxuXHRpZiAodHlwZW9mIGNoYXJzZXQgIT09IFwic3RyaW5nXCIgJiYgIUFycmF5LmlzQXJyYXkoY2hhcnNldCkpIHJldHVybjtcclxuXHRsZXQgc3RyaW5nID0gXCJcIjtcclxuXHRkbyB7XHJcblx0XHR3aGlsZSAoc3RyaW5nLmxlbmd0aCA8IGxlbmd0aCkge1xyXG5cdFx0XHRzdHJpbmcgKz0gY2hhcnNldFtNYXRoLnJvdW5kKHJhbmRvbU51bWJlcigwLCBjaGFyc2V0Lmxlbmd0aCAtIDEpKV07XHJcblx0XHR9XHJcblx0XHRzdHJpbmcgPSBzdHJpbmcuc2xpY2UoMCwgbGVuZ3RoKTtcclxuXHR9IHdoaWxlIChcclxuXHRcdGRvbnRNYXRjaCAmJlxyXG5cdFx0KHN0cmluZyA9PT0gZG9udE1hdGNoIHx8IGRvbnRNYXRjaC5zb21lKChtKSA9PiBtID09PSBzdHJpbmcpKVxyXG5cdCk7XHJcblx0cmV0dXJuIHN0cmluZztcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCAoLi4uY2xhc3NlcykgPT4gY2xhc3Nlcy5maWx0ZXIocyA9PiB0eXBlb2YgcyA9PT0gJ3N0cmluZycpLmpvaW4oXCIgXCIpIiwiaW1wb3J0IHsgZmluZCB9IGZyb20gXCIuLi93ZWJwYWNrXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAgLyoqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWUgVGhlIGNsYXNzIG5hbWUgdG8gc2VhcmNoIGZvclxyXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnV0aWxpdGllc1xyXG4gKiBAcmV0dXJucyB7b2JqZWN0fSBUaGUgbW9kdWxlXHJcbiAqLyBmdW5jdGlvbiAoY2xhc3NOYW1lKSB7XHJcbiAgICAgcmV0dXJuIGZpbmQobSA9PiBcclxuICAgICAgICBPYmplY3QudmFsdWVzKG0pLnNvbWUodiA9PiBcclxuICAgICAgICAgICAgdHlwZW9mIHYgPT09IFwic3RyaW5nXCIgJiYgXHJcbiAgICAgICAgICAgIH52LnNwbGl0KFwiIFwiKS5pbmRleE9mKGNsYXNzTmFtZSlcclxuICAgICAgICApXHJcbiAgICApXHJcbn0iLCJpbXBvcnQgeyBSZWFjdCwgTW9kYWxBY3Rpb25zIH0gZnJvbSBcIi4uL3dlYnBhY2tcIjtcclxuaW1wb3J0IHsgTW9kYWwsIEhlYWRpbmcsIEJ1dHRvbiwgVGV4dCB9IGZyb20gXCIuLi9jb21wb25lbnRzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAodGl0bGUsIGRlc2NyaXB0aW9uLCBidXR0b25zKSA9PiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICBNb2RhbEFjdGlvbnMub3Blbk1vZGFsKChwcm9wcykgPT4gPE1vZGFsLk1vZGFsUm9vdCB7Li4ucHJvcHN9PlxyXG4gICAgICAgICAgICA8TW9kYWwuTW9kYWxIZWFkZXIgc2VwYXJhdG9yPXtmYWxzZX0+XHJcbiAgICAgICAgICAgICAgICA8SGVhZGluZyB2YXJpYW50PVwiaGVhZGluZy1sZy9tZWRpdW1cIj57dGl0bGV9PC9IZWFkaW5nPlxyXG4gICAgICAgICAgICA8L01vZGFsLk1vZGFsSGVhZGVyPlxyXG4gICAgICAgICAgICA8TW9kYWwuTW9kYWxDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgPFRleHQ+e2Rlc2NyaXB0aW9ufTwvVGV4dD5cclxuICAgICAgICAgICAgPC9Nb2RhbC5Nb2RhbENvbnRlbnQ+XHJcbiAgICAgICAgICAgIDxNb2RhbC5Nb2RhbEZvb3Rlcj5cclxuICAgICAgICAgICAgICAgIHtidXR0b25zLm1hcChidXR0b24gPT4gPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uLmFjdGlvbigpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLm9uQ2xvc2UoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGJ1dHRvbilcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPXtidXR0b24uY29sb3IgPz8gQnV0dG9uLkNvbG9ycy5CUkFORH1cclxuICAgICAgICAgICAgICAgICAgICBsb29rPXtidXR0b24ubG9vayA/PyBCdXR0b24uTG9va3MuRklMTEVEfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtidXR0b24udGV4dH1cclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPil9XHJcbiAgICAgICAgICAgIDwvTW9kYWwuTW9kYWxGb290ZXI+XHJcbiAgICAgICAgPC9Nb2RhbC5Nb2RhbFJvb3Q+KVxyXG4gICAgfSlcclxufSIsImltcG9ydCB7IGZpbmRCeVByb3BzLCBfIH0gZnJvbSBcIi4uLy4uL3dlYnBhY2tcIjtcclxuaW1wb3J0IHsgbWVzc2FnZUNhY2hlIH0gZnJvbSBcIi4uL21lc3NhZ2VzXCI7XHJcblxyXG5jb25zdCB7IGdldE1lc3NhZ2VzOiBkaXNjb3JkR2V0TWVzc2FnZXMgfSA9IC8qI19fUFVSRV9fKi9maW5kQnlQcm9wcyhcclxuXHRcImdldE1lc3NhZ2VzXCIsXHJcblx0XCJnZXRNZXNzYWdlXCJcclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldE1lc3NhZ2VzKGNoYW5uZWxJRCkge1xyXG5cdGNvbnN0IG1lc3NhZ2VzID0gXy5tZXJnZShcclxuXHRcdF8ua2V5QnkoZGlzY29yZEdldE1lc3NhZ2VzKGNoYW5uZWxJRCkuX2FycmF5LCBcImlkXCIpLFxyXG5cdFx0bWVzc2FnZUNhY2hlW2NoYW5uZWxJRF0gPz8ge31cclxuXHQpO1xyXG5cdHJldHVybiAobWVzc2FnZUNhY2hlW2NoYW5uZWxJRF0gPSBtZXNzYWdlcyk7XHJcbn1cclxuIiwiaW1wb3J0IHsgZmluZEJ5UHJvcHMsIF8gfSBmcm9tIFwiLi4vLi4vd2VicGFja1wiO1xyXG5pbXBvcnQgeyBtZXNzYWdlQ2FjaGUgfSBmcm9tIFwiLi4vbWVzc2FnZXNcIjtcclxuXHJcbmNvbnN0IHsgZ2V0TWVzc2FnZTogZGlzY29yZEdldE1lc3NhZ2UgfSA9IC8qI19fUFVSRV9fKi9maW5kQnlQcm9wcyhcclxuXHRcImdldE1lc3NhZ2VzXCIsXHJcblx0XCJnZXRNZXNzYWdlXCJcclxuKTtcclxuY29uc3QgeyBnZXRNZXNzYWdlQnlSZWZlcmVuY2UgfSA9IC8qI19fUFVSRV9fKi9maW5kQnlQcm9wcyhcImdldE1lc3NhZ2VCeVJlZmVyZW5jZVwiKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldE1lc3NhZ2UoY2hhbm5lbElELCBtZXNzYWdlSUQpIHtcclxuXHRyZXR1cm4gXy5zZXQoXHJcblx0XHRtZXNzYWdlQ2FjaGUsXHJcblx0XHRbY2hhbm5lbElELCBtZXNzYWdlSURdLFxyXG5cdFx0ZGlzY29yZEdldE1lc3NhZ2UoY2hhbm5lbElELCBtZXNzYWdlSUQpID8/XHJcblx0XHRcdGdldE1lc3NhZ2VCeVJlZmVyZW5jZSh7XHJcblx0XHRcdFx0bWVzc2FnZV9pZDogbWVzc2FnZUlELFxyXG5cdFx0XHRcdGNoYW5uZWxfaWQ6IGNoYW5uZWxJRCxcclxuXHRcdFx0fSkubWVzc2FnZSA/P1xyXG5cdFx0XHRtZXNzYWdlQ2FjaGVbY2hhbm5lbElEXT8uW21lc3NhZ2VJRF1cclxuXHQpW2NoYW5uZWxJRF1bbWVzc2FnZUlEXTtcclxufVxyXG4iLCJpbXBvcnQgeyBmaW5kQnlQcm9wcywgZmluZEJ5UHJvdG90eXBlLCBfIH0gZnJvbSBcIi4uLy4uL3dlYnBhY2tcIjtcclxuaW1wb3J0IHsgbWVzc2FnZUNhY2hlLCBnZXRNZXNzYWdlIH0gZnJvbSBcIi4uL21lc3NhZ2VzXCI7XHJcblxyXG5jb25zdCB7IEVuZHBvaW50cyB9ID0gLyojX19QVVJFX18qL2ZpbmRCeVByb3BzKFwiRW5kcG9pbnRzXCIpO1xyXG5jb25zdCBVc2VyID0gLyojX19QVVJFX18qL2ZpbmRCeVByb3RvdHlwZShcInRhZ1wiKTtcclxuY29uc3QgVGltZXN0YW1wID0gLyojX19QVVJFX18qL2ZpbmRCeVByb3RvdHlwZShcInRvRGF0ZVwiLCBcIm1vbnRoXCIpO1xyXG5jb25zdCBNZXNzYWdlID0gLyojX19QVVJFX18qL2ZpbmRCeVByb3RvdHlwZShcImlzRWRpdGVkXCIpO1xyXG5jb25zdCBEaXNjb3JkQVBJID0gLyojX19QVVJFX18qL2ZpbmRCeVByb3BzKFwiZ2V0QVBJQmFzZVVSTFwiKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZldGNoTWVzc2FnZShjaGFubmVsSUQsIG1lc3NhZ2VJRCkge1xyXG5cdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblx0XHRjb25zdCBtZXNzYWdlID0gZ2V0TWVzc2FnZShjaGFubmVsSUQsIG1lc3NhZ2VJRCk7XHJcblxyXG5cdFx0aWYgKG1lc3NhZ2UpIHJldHVybiByZXNvbHZlKG1lc3NhZ2UpO1xyXG5cclxuXHRcdERpc2NvcmRBUEkuZ2V0KHtcclxuXHRcdFx0dXJsOiBFbmRwb2ludHMuTUVTU0FHRVMoY2hhbm5lbElEKSxcclxuXHRcdFx0cXVlcnk6IHtcclxuXHRcdFx0XHRsaW1pdDogMTAwLFxyXG5cdFx0XHRcdGFyb3VuZDogbWVzc2FnZUlELFxyXG5cdFx0XHR9LFxyXG5cdFx0fSlcclxuXHRcdFx0LnRoZW4oKHJlcykgPT4ge1xyXG5cdFx0XHRcdGlmIChyZXMuc3RhdHVzICE9IDIwMCkgcmV0dXJuIHJlamVjdCgpO1xyXG5cdFx0XHRcdGZvciAobGV0IG0gb2YgcmVzLmJvZHkpIHtcclxuXHRcdFx0XHRcdG0uYXV0aG9yID0gbmV3IFVzZXIobS5hdXRob3IpO1xyXG5cdFx0XHRcdFx0bS50aW1lc3RhbXAgPSBuZXcgVGltZXN0YW1wKG0udGltZXN0YW1wKTtcclxuXHRcdFx0XHRcdG0gPSBuZXcgTWVzc2FnZShtKTtcclxuXHRcdFx0XHRcdF8uc2V0KG1lc3NhZ2VDYWNoZSwgW20uY2hhbm5lbF9pZCwgbS5pZF0sIG0pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRjb25zdCBmb3VuZE1lc3NhZ2UgPSBtZXNzYWdlQ2FjaGVbY2hhbm5lbElEXT8uW21lc3NhZ2VJRF07XHJcblx0XHRcdFx0aWYgKGZvdW5kTWVzc2FnZSkgcmVzb2x2ZShmb3VuZE1lc3NhZ2UpO1xyXG5cdFx0XHRcdHJlamVjdCgpO1xyXG5cdFx0XHR9KVxyXG5cdFx0XHQuY2F0Y2goKHJlcykgPT4ge1xyXG5cdFx0XHRcdC8vIGxvZ2dlci5lcnJvcihyZXMpO1xyXG5cdFx0XHRcdGlmIChyZXMuc3RhdHVzICE9IDQwMykgcmV0dXJuIHJlamVjdCgpO1xyXG5cdFx0XHR9KTtcclxuXHR9KTtcclxufVxyXG4iLCJpbXBvcnQgeyBmaW5kQnlQcm9wcyB9IGZyb20gXCIuLi8uLi93ZWJwYWNrXCI7XHJcbmltcG9ydCB7IHJlcmVuZGVyTWVzc2FnZSB9IGZyb20gXCIuLi9tZXNzYWdlc1wiO1xyXG5cclxuY29uc3QgeyBnZXRNZXNzYWdlczogZGlzY29yZEdldE1lc3NhZ2VzIH0gPSAvKiNfX1BVUkVfXyovZmluZEJ5UHJvcHMoXHJcblx0XCJnZXRNZXNzYWdlc1wiLFxyXG5cdFwiZ2V0TWVzc2FnZVwiXHJcbik7XHJcbmNvbnN0IHsgZ2V0Q2hhbm5lbElkIH0gPSAvKiNfX1BVUkVfXyovZmluZEJ5UHJvcHMoXCJnZXRDaGFubmVsSWRcIik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXJlbmRlckFsbE1lc3NhZ2VzKHByb3BzID0ge30pIHtcclxuXHRjb25zdCBtZXNzYWdlcyA9IGRpc2NvcmRHZXRNZXNzYWdlcyhnZXRDaGFubmVsSWQoKSkuX2FycmF5O1xyXG5cdGZvciAoY29uc3QgbWVzc2FnZSBvZiBtZXNzYWdlcykge1xyXG5cdFx0cmVyZW5kZXJNZXNzYWdlKG1lc3NhZ2UsIHByb3BzKTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgZmluZEJ5UHJvcHMgfSBmcm9tIFwiLi4vLi4vd2VicGFja1wiO1xyXG5pbXBvcnQgeyB1cGRhdGVNZXNzYWdlIH0gZnJvbSBcIi4uL21lc3NhZ2VzXCI7XHJcblxyXG5jb25zdCB7IGdldE1lc3NhZ2U6IGRpc2NvcmRHZXRNZXNzYWdlIH0gPSAvKiNfX1BVUkVfXyovZmluZEJ5UHJvcHMoXHJcblx0XCJnZXRNZXNzYWdlc1wiLFxyXG5cdFwiZ2V0TWVzc2FnZVwiXHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXJlbmRlck1lc3NhZ2UoaWRPck1lc3NhZ2UsIHByb3BzID0ge30pIHtcclxuXHRsZXQgbWVzc2FnZSA9XHJcblx0XHR0eXBlb2YgaWRPck1lc3NhZ2UgPT09IFwic3RyaW5nXCJcclxuXHRcdFx0PyBkaXNjb3JkR2V0TWVzc2FnZShpZE9yTWVzc2FnZSlcclxuXHRcdFx0OiBpZE9yTWVzc2FnZTtcclxuXHRpZiAoIW1lc3NhZ2UpIHJldHVybjtcclxuXHRtZXNzYWdlID0ge1xyXG5cdFx0aWQ6IG1lc3NhZ2UuaWQsXHJcblx0XHRjaGFubmVsX2lkOiBtZXNzYWdlLmNoYW5uZWxfaWQsXHJcblx0XHRjb250ZW50OiBtZXNzYWdlLmNvbnRlbnQsXHJcblx0fTtcclxuXHR1cGRhdGVNZXNzYWdlKG1lc3NhZ2UsIHByb3BzKTtcclxufVxyXG4iLCJpbXBvcnQgeyBmaW5kQnlQcm9wcyB9IGZyb20gXCIuLi8uLi93ZWJwYWNrXCI7XHJcblxyXG5jb25zdCBGbHV4RGlzcGF0Y2hlciA9IC8qI19fUFVSRV9fKi9maW5kQnlQcm9wcyhcImRpc3BhdGNoXCIsIFwiZGlydHlEaXNwYXRjaFwiKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVwZGF0ZU1lc3NhZ2UobWVzc2FnZSwgcHJvcHMgPSB7fSkge1xyXG5cdEZsdXhEaXNwYXRjaGVyLmRpcnR5RGlzcGF0Y2goe1xyXG5cdFx0Li4ucHJvcHMsXHJcblx0XHR0eXBlOiBcIk1FU1NBR0VfVVBEQVRFXCIsXHJcblx0XHRtZXNzYWdlLFxyXG5cdH0pO1xyXG59XHJcbiIsImV4cG9ydCBsZXQgbWVzc2FnZUNhY2hlID0ge307XHJcblxyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGdldE1lc3NhZ2VzIH0gZnJvbSBcIi4vZ2V0TWVzc2FnZXNcIjtcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBnZXRNZXNzYWdlIH0gZnJvbSBcIi4vZ2V0TWVzc2FnZVwiO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGZldGNoTWVzc2FnZSB9IGZyb20gXCIuL2ZldGNoTWVzc2FnZVwiO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIHJlcmVuZGVyQWxsTWVzc2FnZXMgfSBmcm9tIFwiLi9yZXJlbmRlckFsbE1lc3NhZ2VzXCI7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgcmVyZW5kZXJNZXNzYWdlIH0gZnJvbSBcIi4vcmVyZW5kZXJNZXNzYWdlXCI7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdXBkYXRlTWVzc2FnZSB9IGZyb20gXCIuL3VwZGF0ZU1lc3NhZ2VcIjtcclxuIiwiaW1wb3J0IHsgUmVhY3QsIE1vZGFsQWN0aW9ucyB9IGZyb20gXCIuLi93ZWJwYWNrXCI7XHJcbmltcG9ydCAqIGFzIHNldHRpbmdzIGZyb20gXCIuLi9zZXR0aW5nc1wiO1xyXG5pbXBvcnQgeyBNYXJrZG93biwgTW9kYWwsIEZsZXgsIEhlYWRpbmcsIFRleHQgfSBmcm9tIFwiLi4vY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgeyBDaGFuZ2Vsb2csIENoYW5nZWxvZ01vZGFsIH0gZnJvbSBcIi4uL2NsYXNzZXNcIjtcclxuaW1wb3J0ICogYXMgY29uZmlnIGZyb20gXCJAaXR0YWkvY29uZmlnXCJcclxuaW1wb3J0IHsgam9pbkNsYXNzZXMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzXCJcclxuZXhwb3J0IGNvbnN0IHJlbmRlckNoYW5nZWxvZ0NvbnRlbnQgPSAoY29udGVudCkgPT4ge1xyXG4gICAgcmV0dXJuIDw+XHJcbiAgICAgICAge09iamVjdC5lbnRyaWVzKGNvbnRlbnQpLm1hcCgoW3RpdGxlLCB7IHR5cGUsIGl0ZW1zIH1dKSA9PiA8ZGl2IGNsYXNzTmFtZT17Q2hhbmdlbG9nTW9kYWwuY29udGVudH0+XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e2pvaW5DbGFzc2VzKENoYW5nZWxvZ1t0eXBlXSwgQ2hhbmdlbG9nLm1hcmdpblRvcCl9Pnt0aXRsZX08L2gxPlxyXG4gICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICB7aXRlbXMubWFwKGl0ZW0gPT4gPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNYXJrZG93bj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW19XHJcbiAgICAgICAgICAgICAgICAgICAgPC9NYXJrZG93bj5cclxuICAgICAgICAgICAgICAgIDwvbGk+KX1cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj4pfVxyXG4gICAgPC8+XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBvcGVuQ2hhbmdlbG9nTW9kYWwgPSAoY2hhbmdlbG9nID0gc2V0dGluZ3NDaGFuZ2Vsb2cpID0+IHtcclxuICAgIGNvbnN0IHsgY2hhbmdlbG9nOiBzZXR0aW5nc0NoYW5nZWxvZywgbWFuaWZlc3QgfSA9IGNvbmZpZztcclxuICAgIE1vZGFsQWN0aW9ucy5vcGVuTW9kYWwoKHByb3BzKSA9PiA8TW9kYWwuTW9kYWxSb290IHsuLi5wcm9wc30gc2l6ZT17TW9kYWwuTW9kYWxTaXplLlNNQUxMfSBjbGFzc05hbWU9e0NoYW5nZWxvZ01vZGFsLm1vZGFsfT5cclxuICAgICAgICA8TW9kYWwuTW9kYWxIZWFkZXIgc2VwYXJhdG9yPXtmYWxzZX0+XHJcbiAgICAgICAgICAgIDxGbGV4PlxyXG4gICAgICAgICAgICAgICAgPEZsZXguQ2hpbGQgZ3Jvdz17MX0gc2hyaW5rPXsxfT5cclxuICAgICAgICAgICAgICAgICAgICA8SGVhZGluZyB2YXJpYW50PVwiaGVhZGluZy1sZy9tZWRpdW1cIj57bWFuaWZlc3QubmFtZX0gLSB7bWFuaWZlc3QudmVyc2lvbn08L0hlYWRpbmc+XHJcbiAgICAgICAgICAgICAgICAgICAge2NoYW5nZWxvZy5kYXRlICYmIDxUZXh0IGNsYXNzTmFtZT17Q2hhbmdlbG9nLmRhdGV9IHNpemU9e1RleHQuU2l6ZXMuU0laRV8xMn0+e2NoYW5nZWxvZy5kYXRlfTwvVGV4dD59XHJcbiAgICAgICAgICAgICAgICA8L0ZsZXguQ2hpbGQ+XHJcbiAgICAgICAgICAgICAgICA8TW9kYWwuTW9kYWxDbG9zZUJ1dHRvbiBvbkNsaWNrPXtwcm9wcy5vbkNsb3NlfS8+XHJcbiAgICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICA8L01vZGFsLk1vZGFsSGVhZGVyPlxyXG4gICAgICAgIDxNb2RhbC5Nb2RhbENvbnRlbnQ+XHJcbiAgICAgICAgICAgIHtjaGFuZ2Vsb2cuaW1hZ2UgJiYgPGltZyBjbGFzc05hbWU9e0NoYW5nZWxvZy52aWRlb30gc3JjPXtjaGFuZ2Vsb2cuaW1hZ2V9IHdpZHRoPVwiNDUxXCIgLz59XHJcbiAgICAgICAgICAgIHtyZW5kZXJDaGFuZ2Vsb2dDb250ZW50KGNoYW5nZWxvZy5jb250ZW50cyl9XHJcbiAgICAgICAgPC9Nb2RhbC5Nb2RhbENvbnRlbnQ+XHJcbiAgICA8L01vZGFsLk1vZGFsUm9vdD4pXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBoYXNTZWVuQ2hhbmdlbG9nID0gKCkgPT4gc2V0dGluZ3MuZ2V0KGBfX2l0dGFpX2NoYW5nZWxvZ18ke21hbmlmZXN0LnZlcnNpb259YClcclxuZXhwb3J0IGNvbnN0IHNldFNlZW5DaGFuZ2Vsb2cgPSAoc2V0KSA9PiBzZXR0aW5ncy5zZXQoYF9faXR0YWlfY2hhbmdlbG9nXyR7bWFuaWZlc3QudmVyc2lvbn1gLCBzZXQpIiwiaW1wb3J0IHsgbG9nLCBkZWJ1Zywgd2FybiwgZXJyb3IgfSBmcm9tIFwiLi4vbG9nZ2VyXCI7XHJcbmltcG9ydCAqIGFzIGNvbmZpZyBmcm9tIFwiQGl0dGFpL2NvbmZpZ1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgLyoqXHJcbiAqIFRoZSBwbHVnaW4gY2xhc3MgZm9yIHRoZSBydW5uaW5nIGNsaWVudCBtb2QuXHJcbiAqIEBuYW1lIFBsdWdpblxyXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmVudGl0aWVzXHJcbiAqLyBjbGFzcyBQbHVnaW4ge1xyXG5cclxuXHRmcmllbmRseU5hbWUgPSBjb25maWcubWFuaWZlc3QubmFtZVxyXG5cclxuXHRzdGFydCgpIHt9XHJcblx0c3RvcCgpIHt9XHJcblxyXG5cdHNldFNldHRpbmdzUGFuZWwoY29tcG9uZW50KSB7XHJcblx0XHR0aGlzLl9faXR0YWlJbnRlcm5hbFBsdWdpbi5zZXRTZXR0aW5nc1BhbmVsKGNvbXBvbmVudCk7XHJcblx0fVxyXG5cclxuXHRyZW1vdmVTZXR0aW5nc1BhbmVsKCkge1xyXG5cdFx0dGhpcy5fX2l0dGFpSW50ZXJuYWxQbHVnaW4ucmVtb3ZlU2V0dGluZ3NQYW5lbCgpO1xyXG5cdH1cclxuXHJcblx0bG9nKC4uLmFyZ3MpIHtcclxuXHRcdGxvZyguLi5hcmdzKTtcclxuXHR9XHJcblx0ZGVidWcoLi4uYXJncykge1xyXG5cdFx0ZGVidWcoLi4uYXJncyk7XHJcblx0fVxyXG5cdHdhcm4oLi4uYXJncykge1xyXG5cdFx0d2FybiguLi5hcmdzKTtcclxuXHR9XHJcblx0ZXJyb3IoLi4uYXJncykge1xyXG5cdFx0ZXJyb3IoLi4uYXJncyk7XHJcblx0fVxyXG59IiwiaW1wb3J0IHsgcGF0Y2ggfSBmcm9tIFwiLi4vcGF0Y2hlclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgLyoqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBwYXRjaC4gRm9yIGRlYnVnZ2luZy5cclxuICogQHBhcmFtIHthbnl9IG9iamVjdCBUaGUgb2JqZWN0IHRoYXQgdGhlIGZ1bmN0aW9uIGlzIGluLlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gZnVuY3Rpb25OYW1lIFRoZSBuYW1lIG9mIHRoZSBmdW5jdGlvbiB0byBwYXRjaC5cclxuICogQHBhcmFtIHtmdW5jdGlvbn0gcGF0Y2hGdW5jdGlvbiBUaGUgY29kZSB0byBwYXRjaCBpbnRvIHRoZSBmdW5jdGlvbi5cclxuICogQHJldHVybnMge29iamVjdH0ge0BsaW5rIG1vZHVsZTpwYXRjaGVyLnBhdGNofnBhdGNoRGF0YX1cclxuICogQG1lbWJlcm9mIG1vZHVsZTpwYXRjaGVyXHJcbiAqIEB0dXRvcmlhbCBwYXRjaGluZ0JlZm9yZVxyXG4gKi8gZnVuY3Rpb24gYmVmb3JlKG5hbWUsIG9iamVjdCwgZnVuY3Rpb25OYW1lLCBwYXRjaEZ1bmN0aW9uKSB7XHJcblx0cmV0dXJuIHBhdGNoKG5hbWUsIG9iamVjdCwgZnVuY3Rpb25OYW1lLCBcImJlZm9yZVwiLCBwYXRjaEZ1bmN0aW9uKTtcclxufVxyXG4iLCJpbXBvcnQgeyBwYXRjaCB9IGZyb20gXCIuLi9wYXRjaGVyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAvKipcclxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgVGhlIG5hbWUgb2YgdGhlIHBhdGNoLiBGb3IgZGVidWdnaW5nLlxyXG4gKiBAcGFyYW0ge2FueX0gb2JqZWN0IFRoZSBvYmplY3QgdGhhdCB0aGUgZnVuY3Rpb24gaXMgaW4uXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBmdW5jdGlvbk5hbWUgVGhlIG5hbWUgb2YgdGhlIGZ1bmN0aW9uIHRvIHBhdGNoLlxyXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBwYXRjaEZ1bmN0aW9uIFRoZSBjb2RlIHRvIHBhdGNoIGludG8gdGhlIGZ1bmN0aW9uLlxyXG4gKiBAcmV0dXJucyB7T2JqZWN0fSB7QGxpbmsgbW9kdWxlOnBhdGNoZXIucGF0Y2h+cGF0Y2hEYXRhfVxyXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnBhdGNoZXJcclxuICogQHR1dG9yaWFsIHBhdGNoaW5nSW5zdGVhZFxyXG4gKi8gZnVuY3Rpb24gaW5zdGVhZChuYW1lLCBvYmplY3QsIGZ1bmN0aW9uTmFtZSwgcGF0Y2hGdW5jdGlvbikge1xyXG5cdHJldHVybiBwYXRjaChuYW1lLCBvYmplY3QsIGZ1bmN0aW9uTmFtZSwgXCJpbnN0ZWFkXCIsIHBhdGNoRnVuY3Rpb24pO1xyXG59XHJcbiIsImltcG9ydCB7IHBhdGNoIH0gZnJvbSBcIi4uL3BhdGNoZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IC8qKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBUaGUgbmFtZSBvZiB0aGUgcGF0Y2guIEZvciBkZWJ1Z2dpbmcuXHJcbiAqIEBwYXJhbSB7YW55fSBvYmplY3QgVGhlIG9iamVjdCB0aGF0IHRoZSBmdW5jdGlvbiBpcyBpbi5cclxuICogQHBhcmFtIHtzdHJpbmd9IGZ1bmN0aW9uTmFtZSBUaGUgbmFtZSBvZiB0aGUgZnVuY3Rpb24gdG8gcGF0Y2guXHJcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IHBhdGNoRnVuY3Rpb24gVGhlIGNvZGUgdG8gcGF0Y2ggaW50byB0aGUgZnVuY3Rpb24uXHJcbiAqIEByZXR1cm5zIHtvYmplY3R9IHtAbGluayBtb2R1bGU6cGF0Y2hlci5wYXRjaH5wYXRjaERhdGF9XHJcbiAqIEBtZW1iZXJvZiBtb2R1bGU6cGF0Y2hlclxyXG4gKiBAdHV0b3JpYWwgcGF0Y2hpbmdBZnRlclxyXG4gKi8gZnVuY3Rpb24gYWZ0ZXIobmFtZSwgb2JqZWN0LCBmdW5jdGlvbk5hbWUsIHBhdGNoRnVuY3Rpb24pIHtcclxuXHRyZXR1cm4gcGF0Y2gobmFtZSwgb2JqZWN0LCBmdW5jdGlvbk5hbWUsIFwiYWZ0ZXJcIiwgcGF0Y2hGdW5jdGlvbik7XHJcbn1cclxuIiwiaW1wb3J0IHsgcGF0Y2hlcyB9IGZyb20gXCIuLi9wYXRjaGVyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAvKipcclxuICogVW5wYXRjaGVzIGFsbCBvZiB0aGUgcGF0Y2hlcyBzcGVjaWZpZWQsIG9yIGFsbCBvZiB0aGVtIGlmIG5vbmUgYXJlIHNwZWNpZmllZC5cclxuICogQG1lbWJlcm9mIG1vZHVsZTpwYXRjaGVyXHJcbiAqIEBwYXJhbSB7c3RyaW5nW119IFt1bnBhdGNoZXM9e0BsaW5rIG1vZHVsZTpwYXRjaGVyLnBhdGNoZXN9XSBBbiBhcnJheSBwYXRjaCBuYW1lcy5cclxuICovIGZ1bmN0aW9uIHVucGF0Y2hBbGwodW5wYXRjaGVzKSB7XHJcblx0aWYgKCFBcnJheS5pc0FycmF5KHVucGF0Y2hlcykpIHVucGF0Y2hlcyA9IHBhdGNoZXM7XHJcblx0Zm9yIChjb25zdCBvYmplY3Qgb2YgT2JqZWN0LnZhbHVlcyh1bnBhdGNoZXMpKSB7XHJcblx0XHRmb3IgKGNvbnN0IGZ1bmN0IG9mIE9iamVjdC52YWx1ZXMob2JqZWN0KSkge1xyXG5cdFx0XHRmb3IgKGNvbnN0IHBhdGNoIG9mIGZ1bmN0LnBhdGNoZXMpIHtcclxuXHRcdFx0XHRwYXRjaC51bnBhdGNoKCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0ICogYXMgbG9nZ2VyIGZyb20gXCIuLi9sb2dnZXJcIjtcclxuaW1wb3J0IHsgcmFuZG9tU3RyaW5nIH0gZnJvbSBcIi4uL3V0aWxpdGllc1wiO1xyXG5pbXBvcnQgeyBwYXRjaGVzIH0gZnJvbSBcIi4uL3BhdGNoZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IC8qKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBUaGUgbmFtZSBvZiB0aGUgcGF0Y2guIEZvciBkZWJ1Z2dpbmcuXHJcbiAqIEBwYXJhbSB7YW55fSBvYmplY3QgVGhlIG9iamVjdCB0aGF0IHRoZSBmdW5jdGlvbiBpcyBpbi5cclxuICogQHBhcmFtIHtzdHJpbmd9IGZ1bmN0aW9uTmFtZSBUaGUgbmFtZSBvZiB0aGUgZnVuY3Rpb24gdG8gcGF0Y2guXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIFRoZSB0eXBlIG9mIHBhdGNoIHRvIGFwcGx5LiBgYmVmb3JlYCwgYGluc3RlYWRgLCBgYWZ0ZXJgLlxyXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBwYXRjaEZ1bmN0aW9uIFRoZSBjb2RlIHRvIHBhdGNoIGludG8gdGhlIGZ1bmN0aW9uLlxyXG4gKiBAcmV0dXJucyB7b2JqZWN0fSB7QGxpbmsgbW9kdWxlOnV0aWxzL3BhdGNoZXIucGF0Y2h+cGF0Y2hEYXRhfVxyXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnBhdGNoZXJcclxuICogQHR1dG9yaWFsIHBhdGNoaW5nXHJcbiAqLyBmdW5jdGlvbiBwYXRjaChuYW1lLCBvYmplY3QsIGZ1bmN0aW9uTmFtZSwgdHlwZSwgcGF0Y2hGdW5jdGlvbikge1xyXG5cdGNvbnN0IGlkID0gb2JqZWN0Ll9faXR0YWlfXyA/PyByYW5kb21TdHJpbmcoMjUsIE9iamVjdC5rZXlzKHBhdGNoZXMpKTtcclxuXHRvYmplY3QuX19pdHRhaV9fID0gb2JqZWN0Ll9faXR0YWlfXyA/PyBpZDtcclxuXHRpZiAoIXBhdGNoZXNbaWRdKSBwYXRjaGVzW2lkXSA9IHt9O1xyXG5cclxuXHQvKipcclxuXHQgKiBAbWVtYmVyb2YgbW9kdWxlOnBhdGNoZXJcclxuXHQgKiBAcHJvcCB7c3RyaW5nfSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBmdW5jdGlvbiBiZWluZyBwYXRjaGVkLlxyXG5cdCAqIEBwcm9wIHtzdHJpbmd9IHR5cGUgVGhlIHR5cGUgb2YgdGhlIHBhdGNoLlxyXG5cdCAqIEBwcm9wIHtmdW5jdGlvbn0gcGF0Y2hGdW5jdGlvbiBUaGUgb3JpZ2luYWwgZnVuY3Rpb24uXHJcblx0ICogQHByb3Age2Z1bmN0aW9ufSB1bnBhdGNoIFRoZSBmdW5jdGlvbiB0byBjYWxsIHRvIHVucGF0Y2guXHJcblx0ICovXHJcblx0Y29uc3QgcGF0Y2hEYXRhID0ge1xyXG5cdFx0bmFtZSxcclxuXHRcdHR5cGUsXHJcblx0XHRwYXRjaEZ1bmN0aW9uLFxyXG5cdFx0dW5wYXRjaDogZnVuY3Rpb24gKCkge1xyXG5cdFx0XHR0cnkge1xyXG5cdFx0XHRcdGNvbnN0IHBhdGNoSW5kZXggPSBwYXRjaGVzW2lkXVtmdW5jdGlvbk5hbWVdLnBhdGNoZXMuaW5kZXhPZih0aGlzKTtcclxuXHRcdFx0XHRpZiAocGF0Y2hJbmRleCA9PT0gLTEpXHJcblx0XHRcdFx0XHR0aHJvdyBcIkNvdWxkbid0IGZpbmQgdGhlIHBhdGNoLiBUaGlzIHByb2JhYmx5IGhhcHBlbmVkIGJlY2F1c2UgdGhlIG9iamVjdCB3YXMgdGFtcGVyZWQgd2l0aC4gRG9uJ3QgZG8gdGhhdC5cIjtcclxuXHRcdFx0XHQvLyBEZWxldGUgcGF0Y2guXHJcblx0XHRcdFx0cGF0Y2hlc1tpZF1bZnVuY3Rpb25OYW1lXS5wYXRjaGVzLnNwbGljZShwYXRjaEluZGV4LCAxKTtcclxuXHRcdFx0XHQvLyBDbGVhbiB1cCB0aGUgb2JqZWN0IGlmIHRoZXJlIGFyZSBubyBwYXRjaGVzIGxlZnQuXHJcblx0XHRcdFx0aWYgKHBhdGNoZXNbaWRdW2Z1bmN0aW9uTmFtZV0ucGF0Y2hlcy5sZW5ndGggPT09IDApIHtcclxuXHRcdFx0XHRcdC8vIFJlc3RvcmUgb3JpZ2luYWwgZnVuY3Rpb24uXHJcblx0XHRcdFx0XHRvYmplY3RbZnVuY3Rpb25OYW1lXSA9IHBhdGNoZXNbaWRdW2Z1bmN0aW9uTmFtZV0ub3JpZ2luYWw7XHJcblx0XHRcdFx0XHRkZWxldGUgcGF0Y2hlc1tpZF1bZnVuY3Rpb25OYW1lXTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKCFPYmplY3Qua2V5cyhwYXRjaGVzW2lkXSkubGVuZ3RoKSB7XHJcblx0XHRcdFx0XHRkZWxldGUgcGF0Y2hlc1tpZF07XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGNhdGNoIChlKSB7XHJcblx0XHRcdFx0bG9nZ2VyLmVycm9yKGBGYWlsZWQgdG8gdW5wYXRjaCAke25hbWV9LmAsIGUpO1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdH07XHJcblxyXG5cdGlmICghcGF0Y2hlc1tpZF1bZnVuY3Rpb25OYW1lXSkge1xyXG5cdFx0cGF0Y2hlc1tpZF1bZnVuY3Rpb25OYW1lXSA9IHtcclxuXHRcdFx0b3JpZ2luYWw6IG9iamVjdFtmdW5jdGlvbk5hbWVdLFxyXG5cdFx0XHRwYXRjaGVzOiBbXSxcclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3QgcHJvcHMgPSB7IC4uLm9iamVjdFtmdW5jdGlvbk5hbWVdIH07XHJcblxyXG5cdFx0b2JqZWN0W2Z1bmN0aW9uTmFtZV0gPSBmdW5jdGlvbiAoLi4uYXJncykge1xyXG5cdFx0XHRjb25zdCBmdW5jdGlvbkRhdGEgPSBwYXRjaGVzW2lkXVtmdW5jdGlvbk5hbWVdO1xyXG5cdFx0XHRjb25zdCBiZWZvcmVzID0gZnVuY3Rpb25EYXRhLnBhdGNoZXMuZmlsdGVyKChwKSA9PiBwLnR5cGUgPT09IFwiYmVmb3JlXCIpO1xyXG5cdFx0XHRjb25zdCBpbnN0ZWFkcyA9IGZ1bmN0aW9uRGF0YS5wYXRjaGVzLmZpbHRlcigocCkgPT4gcC50eXBlID09PSBcImluc3RlYWRcIik7XHJcblx0XHRcdGNvbnN0IGFmdGVycyA9IGZ1bmN0aW9uRGF0YS5wYXRjaGVzLmZpbHRlcigocCkgPT4gcC50eXBlID09PSBcImFmdGVyXCIpO1xyXG5cclxuXHRcdFx0Ly8gQmVmb3JlIHBhdGNoZXMuXHJcblx0XHRcdGZvciAoY29uc3QgYmVmb3JlIG9mIGJlZm9yZXMpIHtcclxuXHRcdFx0XHR0cnkge1xyXG5cdFx0XHRcdFx0Y29uc3QgY2FsbGJhY2sgPSBiZWZvcmUucGF0Y2hGdW5jdGlvbihhcmdzLCB0aGlzKTtcclxuXHRcdFx0XHRcdGlmIChjYWxsYmFjaykgYXJncyA9IGNhbGxiYWNrXHJcblx0XHRcdFx0fSBjYXRjaCAoZSkge1xyXG5cdFx0XHRcdFx0bG9nZ2VyLmVycm9yKGBFcnJvciBydW5uaW5nIGJlZm9yZSBwYXRjaCAke25hbWV9LmAsIGUpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gSW5zdGVhZCBwYXRjaGVzLlxyXG5cdFx0XHRsZXQgcmVzID0ge307XHJcblx0XHRcdGxldCByYW5PbmNlID0gZmFsc2U7XHJcblx0XHRcdGlmIChpbnN0ZWFkcy5sZW5ndGggPT09IDApIHtcclxuXHRcdFx0XHQocmVzID0gZnVuY3Rpb25EYXRhLm9yaWdpbmFsLmNhbGwodGhpcywgLi4uYXJncykpLCAocmFuT25jZSA9IHRydWUpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdC8vIEJhZCwgZml4IGxhdGVyLlxyXG5cdFx0XHRcdGZvciAoY29uc3QgaW5zdGVhZCBvZiBpbnN0ZWFkcykge1xyXG5cdFx0XHRcdFx0Ly8gRG8gdHJhc2ggbWVyZ2Ugd2l0aCBMb2Rhc2guXHJcblx0XHRcdFx0XHR0cnkge1xyXG5cdFx0XHRcdFx0XHQocmVzID0gZ2xvYmFsVGhpcy5fLm1lcmdlKFxyXG5cdFx0XHRcdFx0XHRcdHJlcyxcclxuXHRcdFx0XHRcdFx0XHRpbnN0ZWFkLnBhdGNoRnVuY3Rpb24oYXJncywgdGhpcykgPz8ge31cclxuXHRcdFx0XHRcdFx0KSksXHJcblx0XHRcdFx0XHRcdFx0KHJhbk9uY2UgPSB0cnVlKTtcclxuXHRcdFx0XHRcdH0gY2F0Y2ggKGUpIHtcclxuXHRcdFx0XHRcdFx0bG9nZ2VyLmVycm9yKGBFcnJvciBydW5uaW5nIGluc3RlYWQgcGF0Y2ggJHtuYW1lfS5gLCBlKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKCFyYW5PbmNlKSB7XHJcblx0XHRcdFx0cmVzID0gZnVuY3Rpb25EYXRhLm9yaWdpbmFsLmNhbGwodGhpcywgLi4uYXJncyk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIEFmdGVyIHBhdGNoZXMuXHJcblx0XHRcdGZvciAoY29uc3QgYWZ0ZXIgb2YgYWZ0ZXJzKSB7XHJcblx0XHRcdFx0dHJ5IHtcclxuXHRcdFx0XHRcdGNvbnN0IGNhbGxiYWNrID0gYWZ0ZXIucGF0Y2hGdW5jdGlvbihhcmdzLCByZXMsIHRoaXMpXHJcblx0XHRcdFx0XHRpZiAoY2FsbGJhY2spIHJlcyA9IGNhbGxiYWNrXHJcblx0XHRcdFx0fSBjYXRjaCAoZSkge1xyXG5cdFx0XHRcdFx0bG9nZ2VyLmVycm9yKGBFcnJvciBydW5uaW5nIGFmdGVyIHBhdGNoICR7bmFtZX0uYCwgZSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZXR1cm4gcmVzO1xyXG5cdFx0fTtcclxuXHRcdE9iamVjdC5hc3NpZ24ob2JqZWN0W2Z1bmN0aW9uTmFtZV0sIHByb3BzKTtcclxuXHRcdG9iamVjdFtmdW5jdGlvbk5hbWVdLnRvU3RyaW5nID0gKCkgPT5cclxuXHRcdFx0cGF0Y2hlc1tpZF1bZnVuY3Rpb25OYW1lXS5vcmlnaW5hbC50b1N0cmluZygpO1xyXG5cdH1cclxuXHRwYXRjaGVzW2lkXVtmdW5jdGlvbk5hbWVdLnBhdGNoZXMucHVzaChwYXRjaERhdGEpO1xyXG5cclxuXHRyZXR1cm4gcGF0Y2hEYXRhO1xyXG59XHJcbiIsIi8qKlxyXG4gKiBAbW9kdWxlIHBhdGNoZXJcclxuICovXHJcblxyXG4vKipcclxuICogQSBsaXN0IG9mIHRoZSBjdXJyZW50bHkgcGF0Y2hlZCBjb21wb25lbnRzLlxyXG4gKi9cclxuZXhwb3J0IGxldCBwYXRjaGVzID0gW107XHJcblxyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGJlZm9yZSB9IGZyb20gXCIuL2JlZm9yZVwiO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGluc3RlYWQgfSBmcm9tIFwiLi9pbnN0ZWFkXCI7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgYWZ0ZXIgfSBmcm9tIFwiLi9hZnRlclwiO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIHVucGF0Y2hBbGwgfSBmcm9tIFwiLi91bnBhdGNoQWxsXCI7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgcGF0Y2ggfSBmcm9tIFwiLi9wYXRjaFwiO1xyXG4iLCJpbXBvcnQgeyBmaW5kQnlQcm9wcyB9IGZyb20gXCIuLi93ZWJwYWNrXCI7XHJcbmltcG9ydCB7IHJhbmRvbVN0cmluZyB9IGZyb20gXCIuLi91dGlsaXRpZXNcIjtcclxuXHJcbmNvbnN0IE1lc3NhZ2VDcmVhdG9ycyA9IGZpbmRCeVByb3BzKFwiY3JlYXRlQm90TWVzc2FnZVwiKTtcclxuY29uc3QgTWVzc2FnZUFjdGlvbnMgPSBmaW5kQnlQcm9wcyhcInJlY2VpdmVNZXNzYWdlXCIpO1xyXG5jb25zdCBBdmF0YXJEZWZhdWx0cyA9IGZpbmRCeVByb3BzKFwiQk9UX0FWQVRBUlNcIik7XHJcblxyXG5leHBvcnQgY29uc3QgRGVmYXVsdE1lc3NhZ2UgPSB7XHJcbiAgICBzdGF0ZTogXCJTRU5UXCIsXHJcbiAgICBhdXRob3I6IGFkZEJvdEF1dGhvcih7XHJcbiAgICAgICAgYXZhdGFyOiB7IGF2YXRhcklkOiBcIml0dGFpXCIsIGltYWdlVXJsOiBcImh0dHBzOi8vY2RuLmRpc2NvcmRhcHAuY29tL2F2YXRhcnMvMjY0MDYyNDU3NDQ4NzU5Mjk2LzFmOWIxNzQzY2Y2MjVjYTJkNTFlZTUxN2I1ZWZkOGE3LndlYnBcIiB9LFxyXG4gICAgICAgIGF1dGhvcjogeyB1c2VybmFtZTogXCJJdHRhaVwiIH1cclxuICAgIH0pLFxyXG4gICAgY29udGVudDogXCJIZWxsbyEgQnkgdGhlIHdheSwgeW91IGZvcmdvdCB0byBhZGQgYSBgXFxcImNvbnRlbnRcXFwiYCBhdHRyaWJ1dGUgdG8gdGhlIG1lc3NhZ2UhXCJcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRCb3RBdXRob3IoeyBhdmF0YXIsIGF1dGhvciB9KSB7XHJcbiAgICBjb25zdCBhdmF0YXJJZCA9IGF2YXRhcj8uYXZhdGFySWQgPz8gcmFuZG9tU3RyaW5nKDEwKVxyXG4gICAgaWYgKEF2YXRhckRlZmF1bHRzPy5CT1RfQVZBVEFSUyAmJiAhQXZhdGFyRGVmYXVsdHMuQk9UX0FWQVRBUlNbYXZhdGFySWRdKSB7XHJcbiAgICAgICAgQXZhdGFyRGVmYXVsdHMuQk9UX0FWQVRBUlNbYXZhdGFySWRdID0gYXZhdGFyLmltYWdlVXJsO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBhdmF0YXI6IGF2YXRhcklkLFxyXG4gICAgICAgIGlkOiBhdXRob3I/LmF1dGhvcklkID8/IHJhbmRvbVN0cmluZygxMCksXHJcbiAgICAgICAgYm90OiB0cnVlLFxyXG4gICAgICAgIGRpc2NyaW1pbmF0b3I6IGF1dGhvcj8uZGlzY3JpbWluYXRvciA/PyBcIjAwMDBcIixcclxuICAgICAgICB1c2VybmFtZTogYXV0aG9yPy51c2VybmFtZSA/PyBcIkJvdFVzZXJcIlxyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNlbmRNZXNzYWdlKGNoYW5uZWxJZCwgbWVzc2FnZSkge1xyXG4gICAgTWVzc2FnZUFjdGlvbnMucmVjZWl2ZU1lc3NhZ2UoXHJcbiAgICAgICAgY2hhbm5lbElkLFxyXG4gICAgICAgIE9iamVjdC5hc3NpZ24oe30sIFxyXG4gICAgICAgICAgICBNZXNzYWdlQ3JlYXRvcnMuY3JlYXRlQm90TWVzc2FnZShjaGFubmVsSWQsIG1lc3NhZ2U/LmNvbnRlbnQpLFxyXG4gICAgICAgICAgICBEZWZhdWx0TWVzc2FnZSxcclxuICAgICAgICAgICAgbWVzc2FnZVxyXG4gICAgICAgIClcclxuICAgICk7XHJcbn07XHJcblxyXG5jb25zdCBCb3RNZXNzYWdlID0geyBzZW5kTWVzc2FnZSwgYWRkQm90QXV0aG9yIH07XHJcbmV4cG9ydCBkZWZhdWx0IEJvdE1lc3NhZ2U7IiwiaW1wb3J0ICogYXMgcGF0Y2hlciBmcm9tIFwiLi4vcGF0Y2hlclwiO1xyXG5pbXBvcnQgeyBmaW5kQnlQcm9wcywgZmluZEJ5RGlzcGxheU5hbWUgfSBmcm9tIFwiLi4vd2VicGFja1wiO1xyXG5pbXBvcnQgeyByYW5kb21TdHJpbmcsIGZpbmRJblRyZWUsIGZpbmRJblJlYWN0VHJlZSB9IGZyb20gXCIuLi91dGlsaXRpZXNcIjtcclxuXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgYm90TWVzc2FnZSB9IGZyb20gXCIuL2JvdE1lc3NhZ2VcIjtcclxuZXhwb3J0IGNvbnN0IENvbW1hbmRUeXBlcyA9IE9iamVjdC5hc3NpZ24oe30sIGZpbmRCeVByb3BzKFwiQXBwbGljYXRpb25Db21tYW5kVHlwZVwiKSwgZmluZEJ5UHJvcHMoXCJBcHBsaWNhdGlvbkNvbW1hbmRQZXJtaXNzaW9uVHlwZVwiKSlcclxuXHJcbmNvbnN0IENvbW1hbmRzTW9kdWxlID0gZmluZEJ5UHJvcHMoXCJCVUlMVF9JTl9DT01NQU5EU1wiKTtcclxuY29uc3QgQXBwbGljYXRpb25Db21tYW5kRGlzY292ZXJ5QXBwbGljYXRpb25JY29uID0gZmluZEJ5RGlzcGxheU5hbWUoXHJcblx0XCJBcHBsaWNhdGlvbkNvbW1hbmREaXNjb3ZlcnlBcHBsaWNhdGlvbkljb25cIlxyXG4pO1xyXG5cclxubGV0IGljb25QYXRjaDtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwYXRjaEljb25zKCkge1xyXG5cdGlmICghaWNvblBhdGNoKSB7XHJcblx0XHRpY29uUGF0Y2ggPSBwYXRjaGVyLmFmdGVyKFwiSXR0YWlJY29uQ29tbWFuZFBhdGNoXCIsIEFwcGxpY2F0aW9uQ29tbWFuZERpc2NvdmVyeUFwcGxpY2F0aW9uSWNvbiwgXCJkZWZhdWx0XCIsIChhcmdzLCByZXMsIF90aGlzKSA9PiB7XHJcblx0XHRcdFx0Y29uc3QgcHJvcHMgPSBmaW5kSW5SZWFjdFRyZWUocmVzLCAobikgPT4gbi5zcmMpO1xyXG5cdFx0XHRcdGNvbnN0IHNlY3Rpb24gPSBmaW5kSW5UcmVlKGFyZ3MsIChuKSA9PiBuLmljb24pO1xyXG5cclxuXHRcdFx0XHRpZiAoIXByb3BzIHx8ICFzZWN0aW9uIHx8IHByb3BzLnNyYy5pbmRleE9mKHNlY3Rpb24uaWNvbikgPiAwKVxyXG5cdFx0XHRcdFx0cmV0dXJuIHJlcztcclxuXHJcblx0XHRcdFx0cmVzLnByb3BzLm9uQ2xpY2sgPSAoKSA9PiB7fTtcclxuXHRcdFx0XHRwcm9wcy5zcmMgPSBzZWN0aW9uLmljb247XHJcblxyXG5cdFx0XHRcdHJldHVybiByZXM7XHJcblx0XHRcdH1cclxuXHRcdCk7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdW5wYXRjaEljb25zKCkge1xyXG5cdGljb25QYXRjaC51bnBhdGNoKCk7XHJcblx0aWNvblBhdGNoID0gbnVsbDtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IENPTU1BTkRfQVJHVU1FTlRfVFlQRVMgPSB7XHJcblx0U1VCX0NPTU1BTkQ6IDEsXHJcblx0U1VCX0NPTU1BTkRfR1JPVVA6IDIsXHJcblx0U1RSSU5HOiAzLFxyXG5cdElOVEVHRVI6IDQsXHJcblx0Qk9PTEVBTjogNSxcclxuXHRVU0VSOiA2LFxyXG5cdENIQU5ORUw6IDcsXHJcblx0Uk9MRTogOCxcclxufTtcclxuXHJcbmV4cG9ydCBsZXQgcmVnaXN0ZXJlZENvbW1hbmRzID0gW107XHJcbmV4cG9ydCBsZXQgcmVnaXN0ZXJlZFNlY3Rpb25zID0gW107XHJcblxyXG4vKipcclxuICpcclxuICogQHBhcmFtIHtvYmplY3R9IGlkXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJDb21tYW5kKGNvbW1hbmQpIHtcclxuXHRwYXRjaEljb25zKCk7XHJcblx0Y29uc3QgY3VycmVudElEcyA9IENvbW1hbmRzTW9kdWxlLkJVSUxUX0lOX0NPTU1BTkRTLm1hcCgoeyBpZCB9KSA9PiBpZCk7XHJcblx0aWYgKCFjb21tYW5kLmlkID8/IGZhbHNlKSBjb21tYW5kLmlkID0gcmFuZG9tU3RyaW5nKDEwLCBjdXJyZW50SURzKTtcclxuXHRpZiAoY3VycmVudElEcy5pbmRleE9mKGNvbW1hbmQuaWQpID4gLTEpXHJcblx0XHRjb21tYW5kLmlkICs9IHJhbmRvbVN0cmluZygxMCwgY3VycmVudElEcyk7XHJcblxyXG5cdGNvbW1hbmQuYXBwbGljYXRpb25JZCA/Pz0gXCItMVwiO1xyXG5cdGNvbW1hbmQuZXhlY3V0ZSA/Pz0gKCgpID0+IHt9KTtcclxuXHRjb21tYW5kLmRpc3BsYXlOYW1lID8/PSBjb21tYW5kLm5hbWVcclxuXHRjb21tYW5kLmRpc3BsYXlEZXNjcmlwdGlvbiA/Pz0gY29tbWFuZC5kZXNjcmlwdGlvblxyXG5cdGNvbW1hbmQub3B0aW9ucy5tYXAoKG9wdHMpID0+IHtcclxuXHRcdG9wdHMuZGlzcGxheU5hbWUgPz89IG9wdHMubmFtZVxyXG5cdFx0b3B0cy5kaXNwbGF5RGVzY3JpcHRpb24gPz89IG9wdHMuZGVzY3JpcHRpb25cclxuXHRcdHJldHVybiBvcHRzXHJcblx0fSlcclxuXHJcblx0Q29tbWFuZHNNb2R1bGUuQlVJTFRfSU5fQ09NTUFORFMucHVzaChjb21tYW5kKTtcclxuXHRyZWdpc3RlcmVkQ29tbWFuZHMucHVzaChjb21tYW5kLmlkKTtcclxuXHRyZXR1cm4gY29tbWFuZC5pZDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVucmVnaXN0ZXJDb21tYW5kKGlkKSB7XHJcblx0Q29tbWFuZHNNb2R1bGUuQlVJTFRfSU5fQ09NTUFORFMuc3BsaWNlKFxyXG5cdFx0Q29tbWFuZHNNb2R1bGUuQlVJTFRfSU5fQ09NTUFORFMuZmluZEluZGV4KChjb21tYW5kKSA9PiBjb21tYW5kLmlkID09PSBpZCksXHJcblx0XHQxXHJcblx0KTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gdW5yZWdpc3RlckFsbENvbW1hbmRzKCkge1xyXG5cdGZvciAoY29uc3QgY29tbWFuZCBvZiByZWdpc3RlcmVkQ29tbWFuZHMpIHtcclxuXHRcdHVucmVnaXN0ZXJDb21tYW5kKGNvbW1hbmQpO1xyXG5cdH1cclxufVxyXG5cclxuLyoqXHJcbiAqXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBpZFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyU2VjdGlvbihzZWN0aW9uKSB7XHJcblx0cGF0Y2hJY29ucygpO1xyXG5cdGNvbnN0IGN1cnJlbnRJRHMgPSBDb21tYW5kc01vZHVsZS5CVUlMVF9JTl9TRUNUSU9OUy5tYXAoKHsgaWQgfSkgPT4gaWQpO1xyXG5cdGlmICghc2VjdGlvbi5pZCA/PyBmYWxzZSkgc2VjdGlvbi5pZCA9IHJhbmRvbVN0cmluZygxMCwgY3VycmVudElEcyk7XHJcblx0aWYgKGN1cnJlbnRJRHMuaW5kZXhPZihzZWN0aW9uLmlkKSA+IC0xKVxyXG5cdFx0c2VjdGlvbi5pZCArPSByYW5kb21TdHJpbmcoMTAsIGN1cnJlbnRJRHMpO1xyXG5cclxuXHRzZWN0aW9uLmlzQnVpbHRJbiA9IGZhbHNlO1xyXG5cclxuXHRDb21tYW5kc01vZHVsZS5CVUlMVF9JTl9TRUNUSU9OUy5wdXNoKHNlY3Rpb24pO1xyXG5cdHJlZ2lzdGVyZWRTZWN0aW9ucy5wdXNoKHNlY3Rpb24uaWQpO1xyXG5cdHJldHVybiBzZWN0aW9uLmlkO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdW5yZWdpc3RlclNlY3Rpb24oaWQpIHtcclxuXHRDb21tYW5kc01vZHVsZS5CVUlMVF9JTl9DT01NQU5EUy5zcGxpY2UoXHJcblx0XHRDb21tYW5kc01vZHVsZS5CVUlMVF9JTl9DT01NQU5EUy5maW5kSW5kZXgoKGNvbW1hbmQpID0+IGNvbW1hbmQuaWQgPT09IGlkKSxcclxuXHRcdDFcclxuXHQpO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiB1bnJlZ2lzdGVyQWxsU2VjdGlvbnMoKSB7XHJcblx0Zm9yIChjb25zdCBjb21tYW5kIG9mIHJlZ2lzdGVyZWRTZWN0aW9ucykge1xyXG5cdFx0dW5yZWdpc3RlckNvbW1hbmQoY29tbWFuZCk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IGZpbmRCeURpc3BsYXlOYW1lLCBmaW5kQnlQcm9wcyB9IGZyb20gXCIuLi93ZWJwYWNrXCI7XHJcblxyXG5leHBvcnQgY29uc3QgTWVzc2FnZXMgPSBmaW5kQnlQcm9wcygnZ2V0TWVzc2FnZScsICdnZXRNZXNzYWdlcycpXHJcbmV4cG9ydCBjb25zdCBDaGFubmVscyA9IGZpbmRCeVByb3BzKCdnZXRDaGFubmVsJywgJ2dldERNRnJvbVVzZXJJZCcpXHJcbmV4cG9ydCBjb25zdCBDdXJyZW50Q2hhbm5lbHMgPSBmaW5kQnlQcm9wcygnZ2V0Q2hhbm5lbElkJywgJ2dldExhc3RTZWxlY3RlZENoYW5uZWxJZCcpXHJcbmV4cG9ydCBjb25zdCBHdWlsZHMgPSBmaW5kQnlQcm9wcygnZ2V0R3VpbGQnKVxyXG5leHBvcnQgY29uc3QgQ3VycmVudEd1aWxkcyA9IGZpbmRCeVByb3BzKCdnZXRHdWlsZElkJywgJ2dldExhc3RTZWxlY3RlZEd1aWxkSWQnKVxyXG5leHBvcnQgY29uc3QgSW5mbyA9IGZpbmRCeVByb3BzKCdnZXRTZXNzaW9uSWQnKVxyXG5leHBvcnQgY29uc3QgU3RhdHVzID0gZmluZEJ5UHJvcHMoJ2dldFN0YXR1cycsICdnZXRBY3Rpdml0aWVzJywgJ2dldFN0YXRlJylcclxuZXhwb3J0IGNvbnN0IFVzZXJzID0gZmluZEJ5UHJvcHMoJ2dldFVzZXInLCAnZ2V0Q3VycmVudFVzZXInKVxyXG5leHBvcnQgY29uc3QgVXNlclNldHRpbmdzID0gZmluZEJ5UHJvcHMoJ2d1aWxkRm9sZGVycycsICd0aGVtZScpXHJcbmV4cG9ydCBjb25zdCBVc2VyUHJvZmlsZSA9IGZpbmRCeVByb3BzKCdnZXRVc2VyUHJvZmlsZScpXHJcbmV4cG9ydCBjb25zdCBNZW1iZXJzID0gZmluZEJ5UHJvcHMoJ2dldE1lbWJlcicpXHJcbmV4cG9ydCBjb25zdCBBY3Rpdml0aWVzID0gZmluZEJ5UHJvcHMoJ2dldFN0YXR1cycsICdnZXRBY3Rpdml0aWVzJywgJ2dldFN0YXRlJylcclxuZXhwb3J0IGNvbnN0IEdhbWVzID0gZmluZEJ5UHJvcHMoJ2dldEdhbWUnLCAnZ2FtZXMnKVxyXG5leHBvcnQgY29uc3QgQXV0aCA9IGZpbmRCeVByb3BzKCdnZXRJZCcsICdpc0d1ZXN0JylcclxuZXhwb3J0IGNvbnN0IFR5cGluZ1VzZXJzID0gZmluZEJ5UHJvcHMoJ2lzVHlwaW5nJykiLCJpbXBvcnQgeyBSZWFjdCB9IGZyb20gXCIuLi93ZWJwYWNrXCJcclxuLy9AdHMtaWdub3JlXHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vVG9hc3RXcmFwcGVyLmNzc1wiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHZW5lcmljVG9hc3Qoe1xyXG4gICAgY2hpbGRyZW4sXHJcbn0pIHtcclxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRvYXN0fT57Y2hpbGRyZW59PC9kaXY+XHJcbn1cclxuIiwiLyoqXHJcbiAqIEBtb2R1bGUgY29tcG9uZW50c1xyXG4gKi9cclxuXHJcbmltcG9ydCB7IGZpbmRCeVByb3BzIH0gZnJvbSBcIi4uL3dlYnBhY2tcIlxyXG5pbXBvcnQgeyByYW5kb21TdHJpbmcgfSBmcm9tIFwiLi4vdXRpbGl0aWVzXCJcclxuaW1wb3J0IHsgUmVhY3QgfSBmcm9tIFwiLi4vd2VicGFja1wiXHJcbmltcG9ydCBUb2FzdCBmcm9tIFwiLi9Ub2FzdFdyYXBwZXJcIlxyXG5cclxuY29uc3QgeyBzaG93VG9hc3QsIHBvcFRvYXN0IH0gPSBmaW5kQnlQcm9wcyhcInNob3dUb2FzdFwiKVxyXG5cclxuLyoqXHJcbiAqIFNob3dzIGEgdG9hc3QgdXNpbmcgZGlzY29yZCdzIG93biB0b2FzdCBoYW5kbGVyIHRoYXQgd2FzIGFkZGVkIG9uIGl0cyA3dGggYmlydGhkYXkgZm9yLi4uIGFjaGl2ZW1lbnRzP1xyXG4gKiBAcGFyYW0ge0Z1bmN0aW9uPGltcG9ydCgncmVhY3QnKS5SZWFjdEVsZW1lbnQ8YW55Pj4gfCBzdHJpbmd9IHRleHQgQ29tcG9uZW50IHRvIHJlbmRlclxyXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyBPcHRpb25zIGZvciB0aGUgdG9hc3RcclxuICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zLmlkXSBUaGUgSUQgb2YgdGhlIHRvYXN0LiBJZiBub3QgZ2l2ZW4sIGl0IHdpbGwgYmUgZ2VuZXJhdGVkIG9uZSByYW5kb21seVxyXG4gKiBAcGFyYW0ge251bWJlcn0gW29wdGlvbnMuZHVyYXRpb25dIEhvdyBsb25nIHRoZSB0b2FzdCBzaG91bGQgc3RheSBvbiBzY3JlZW5cclxuICogQHBhcmFtIHtudW1iZXJ9IFtvcHRpb25zLnBvc2l0aW9uID0gMV0gUG9zaXRpb24gb2YgdGhlIHRvYXN0LiAwIGlzIHRvcCwgMSBpcyBib3R0b21cclxuICogQHJldHVybnMge3N0cmluZ30gVGhlIElEIG9mIHRoZSB0b2FzdFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHNob3cgPSAodGV4dCwgb3B0aW9ucykgPT4ge1xyXG4gICAgY29uc3QgdG9hc3RJRCA9IG9wdGlvbnM/LmlkID8/IHJhbmRvbVN0cmluZygxMClcclxuICAgIHNob3dUb2FzdCh7XHJcbiAgICAgICAgaWQ6IHRvYXN0SUQsXHJcbiAgICAgICAgb3B0aW9uczogT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogUE9TSVRJT05TLkJPVFRPTSxcclxuICAgICAgICAgICAgY29tcG9uZW50OiB0eXBlb2YgdGV4dCAhPT0gXCJmdW5jdGlvblwiID8gPFRvYXN0Pnt0ZXh0fTwvVG9hc3Q+IDogdGV4dCgpLFxyXG4gICAgICAgIH0pLFxyXG4gICAgfSlcclxuICAgIHJldHVybiB0b2FzdElEXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZW1vdmVzIGEgdG9hc3RcclxuICogQHBhcmFtIHtzdHJpbmd9IGlkIFRoZSBJRCBvZiB0aGUgdG9hc3RcclxuICovXHJcbmV4cG9ydCBjb25zdCBwb3AgPSAoaWQpID0+IHBvcFRvYXN0KGlkKVxyXG5cclxuZXhwb3J0IGNvbnN0IFRvYXN0V3JhcHBlciA9IFRvYXN0XHJcblxyXG5leHBvcnQgY29uc3QgUE9TSVRJT05TID0ge1xyXG4gICAgVE9QOiAwLFxyXG4gICAgQk9UVE9NOiAxXHJcbn0iLCJpbXBvcnQgKiBhcyBzZXR0aW5ncyBmcm9tIFwiaXR0YWkvc2V0dGluZ3NcIlxyXG5pbXBvcnQgeyBDb25zdGFudHMsIERpc3BhdGNoZXIsIFJlYWN0LCBDb2xvclV0aWxzIH0gZnJvbSBcIml0dGFpL3dlYnBhY2tcIlxyXG5pbXBvcnQgdHlwZSB7IENhdGVnb3J5LCBDb2xvckhleCwgUGlubmVkRE1TIH0gZnJvbSBcIi4uL3R5cGVzXCJcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRBbGwgPSAoKTogUGlubmVkRE1TID0+IHtcclxuICAgIHJldHVybiBzZXR0aW5ncy5nZXQoXCJwaW5uZWRDYXRlZ29yaWVzXCIsIHt9KVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0Q2F0ZWdvcmllcyA9ICgpOiBzdHJpbmdbXSA9PiB7XHJcbiAgICBjb25zdCBwaW5uZWRDYXRlZ29yaWVzID0gT2JqZWN0LmtleXMoZ2V0QWxsKCkpXHJcbiAgICByZXR1cm4gcGlubmVkQ2F0ZWdvcmllc1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0Q2F0ZWdvcnkgPSAoY2F0ZWdvcnk6IHN0cmluZyk6IENhdGVnb3J5ID0+IHtcclxuICAgIHJldHVybiBnZXRBbGwoKVtjYXRlZ29yeV1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHNldFJhdyA9IChzZXR0aW5nOiBQaW5uZWRETVMpID0+IHtcclxuICAgIHNldHRpbmdzLnNldChcInBpbm5lZENhdGVnb3JpZXNcIiwgc2V0dGluZylcclxuICAgIFxyXG4gICAgRGlzcGF0Y2hlci5kaXJ0eURpc3BhdGNoKHsgdHlwZTogXCJQSU5ETVNfQ0hBTkdFX0xJU1RcIiB9KVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgYWRkQ2F0ZWdvcnkgPSAoY2F0ZWdvcnk6IHN0cmluZywgc2V0dGluZ3M6IENhdGVnb3J5ID0ge1xyXG4gICAgY29sb3I6IENvbG9yVXRpbHMuaW50MmhleChDb25zdGFudHMuREVGQVVMVF9ST0xFX0NPTE9SKSxcclxuICAgIHVzZXJzOiBbXSxcclxuICAgIHNob3c6IHRydWVcclxufSkgPT4ge1xyXG4gICAgbGV0IHBpbm5lZENhdGVnb3JpZXMgPSBnZXRBbGwoKVxyXG4gICAgcGlubmVkQ2F0ZWdvcmllc1tjYXRlZ29yeV0gPSBzZXR0aW5nc1xyXG4gICAgXHJcbiAgICBzZXRSYXcocGlubmVkQ2F0ZWdvcmllcylcclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBzZXRDb2xvciA9IChjYXRlZ29yeTogc3RyaW5nLCBjb2xvcjogQ29sb3JIZXgpID0+IHtcclxuICAgIGxldCBwaW5uZWRDYXRlZ29yaWVzID0gZ2V0QWxsKClcclxuICAgICAgICBcclxuICAgIGlmIChwaW5uZWRDYXRlZ29yaWVzW2NhdGVnb3J5XSA9PSBudWxsKSB0aHJvdyBuZXcgRXJyb3IoYENhdGVnb3J5ICR7Y2F0ZWdvcnl9IGRvZXMgbm90IGV4aXN0YClcclxuICAgIHBpbm5lZENhdGVnb3JpZXNbY2F0ZWdvcnldLmNvbG9yID0gY29sb3JcclxuXHJcbiAgICBzZXRSYXcocGlubmVkQ2F0ZWdvcmllcylcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldENvbG9yID0gKGNhdGVnb3J5OiBzdHJpbmcpID0+IHtcclxuICAgIGxldCBwaW5uZWRDYXRlZ29yaWVzID0gZ2V0QWxsKClcclxuXHJcbiAgICBpZiAocGlubmVkQ2F0ZWdvcmllc1tjYXRlZ29yeV0gPT0gbnVsbCkgdGhyb3cgbmV3IEVycm9yKGBDYXRlZ29yeSAke2NhdGVnb3J5fSBkb2VzIG5vdCBleGlzdGApXHJcbiAgICByZXR1cm4gcGlubmVkQ2F0ZWdvcmllc1tjYXRlZ29yeV0uY29sb3IgYXMgQ29sb3JIZXhcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHNldFZpc2liaWxpdHkgPSAoY2F0ZWdvcnk6IHN0cmluZywgdmlzaWJpbGl0eTogYm9vbGVhbikgPT4ge1xyXG4gICAgbGV0IHBpbm5lZENhdGVnb3JpZXMgPSBnZXRBbGwoKVxyXG4gICAgXHJcbiAgICBpZiAocGlubmVkQ2F0ZWdvcmllc1tjYXRlZ29yeV0gPT0gbnVsbCkgdGhyb3cgbmV3IEVycm9yKGBDYXRlZ29yeSAke2NhdGVnb3J5fSBkb2VzIG5vdCBleGlzdGApXHJcbiAgICBwaW5uZWRDYXRlZ29yaWVzW2NhdGVnb3J5XS5zaG93ID0gdmlzaWJpbGl0eVxyXG4gICAgXHJcbiAgICBzZXRSYXcocGlubmVkQ2F0ZWdvcmllcylcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFZpc2liaWxpdHkgPSAoY2F0ZWdvcnk6IHN0cmluZykgPT4ge1xyXG4gICAgbGV0IHBpbm5lZENhdGVnb3JpZXMgPSBnZXRBbGwoKVxyXG5cclxuICAgIGlmIChwaW5uZWRDYXRlZ29yaWVzW2NhdGVnb3J5XSA9PSBudWxsKSB0aHJvdyBuZXcgRXJyb3IoYENhdGVnb3J5ICR7Y2F0ZWdvcnl9IGRvZXMgbm90IGV4aXN0YClcclxuICAgIHJldHVybiBwaW5uZWRDYXRlZ29yaWVzW2NhdGVnb3J5XS5zaG93ID8/IHRydWVcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHJlbmFtZUNhdGVnb3J5ID0gKG9sZENhdGVnb3J5TmFtZTogc3RyaW5nLCBuZXdDYXRlZ29yeU5hbWU6IHN0cmluZykgPT4ge1xyXG4gICAgbGV0IHBpbm5lZENhdGVnb3JpZXMgPSBnZXRBbGwoKVxyXG4gICAgLy8gY29uc29sZS5sb2cocGlubmVkQ2F0ZWdvcmllcylcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwaW5uZWRDYXRlZ29yaWVzLCBuZXdDYXRlZ29yeU5hbWUsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IocGlubmVkQ2F0ZWdvcmllcywgb2xkQ2F0ZWdvcnlOYW1lKSEpO1xyXG4gICAgLy8gY29uc29sZS5sb2cocGlubmVkQ2F0ZWdvcmllcylcclxuICAgIGRlbGV0ZSBwaW5uZWRDYXRlZ29yaWVzW29sZENhdGVnb3J5TmFtZV07XHJcbiAgICAvLyBjb25zb2xlLmxvZyhwaW5uZWRDYXRlZ29yaWVzKVxyXG4gICAgXHJcbiAgICBzZXRSYXcocGlubmVkQ2F0ZWdvcmllcylcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHJlbW92ZUNhdGVnb3J5ID0gKGNhdGVnb3J5OiBzdHJpbmcpID0+IHtcclxuICAgIGxldCBwaW5uZWRDYXRlZ29yaWVzID0gZ2V0QWxsKClcclxuICAgIGlmIChwaW5uZWRDYXRlZ29yaWVzW2NhdGVnb3J5XSA9PSBudWxsKSB0aHJvdyBuZXcgRXJyb3IoYENhdGVnb3J5ICR7Y2F0ZWdvcnl9IGRvZXMgbm90IGV4aXN0YClcclxuICAgIGRlbGV0ZSBwaW5uZWRDYXRlZ29yaWVzW2NhdGVnb3J5XVxyXG4gICAgXHJcbiAgICBzZXRSYXcocGlubmVkQ2F0ZWdvcmllcylcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFVzZXJzID0gKGNhdGVnb3J5OiBzdHJpbmcpID0+IHtcclxuICAgIGNvbnN0IHBpbm5lZENhdGVnb3JpZXMgPSBnZXRBbGwoKVxyXG4gICAgaWYgKHBpbm5lZENhdGVnb3JpZXNbY2F0ZWdvcnldID09IG51bGwpIHRocm93IG5ldyBFcnJvcihgQ2F0ZWdvcnkgJHtjYXRlZ29yeX0gZG9lcyBub3QgZXhpc3RgKVxyXG5cclxuICAgIHJldHVybiBwaW5uZWRDYXRlZ29yaWVzW2NhdGVnb3J5XS51c2Vyc1xyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0VXNlckxpc3QgPSAoY2F0ZWdvcnk6IHN0cmluZywgdXNlckxpc3Q6IHN0cmluZ1tdKSA9PiB7XHJcbiAgICBsZXQgcGlubmVkQ2F0ZWdvcmllcyA9IGdldEFsbCgpXHJcbiAgICBcclxuICAgIHBpbm5lZENhdGVnb3JpZXNbY2F0ZWdvcnldLnVzZXJzID0gdXNlckxpc3RcclxuICAgIFxyXG4gICAgc2V0UmF3KHBpbm5lZENhdGVnb3JpZXMpXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBhZGRVc2VyID0gKGNhdGVnb3J5OiBzdHJpbmcsIHVzZXJJRDogaW1wb3J0KFwiaXR0YWlcIikuVXNlcklEKSA9PiB7XHJcbiAgICBpZiAodHlwZW9mIHVzZXJJRCAhPT0gXCJzdHJpbmdcIikgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIFVzZXIgSURgKVxyXG4gICAgXHJcbiAgICBsZXQgcGlubmVkQ2F0ZWdvcmllcyA9IGdldEFsbCgpXHJcbiAgICBpZiAocGlubmVkQ2F0ZWdvcmllc1tjYXRlZ29yeV0gPT0gbnVsbCkgdGhyb3cgbmV3IEVycm9yKGBDYXRlZ29yeSAke2NhdGVnb3J5fSBkb2VzIG5vdCBleGlzdGApXHJcblxyXG4gICAgbGV0IHVzZXJMaXN0ID0gcGlubmVkQ2F0ZWdvcmllc1tjYXRlZ29yeV0udXNlcnNcclxuICAgIHVzZXJMaXN0LnB1c2godXNlcklEKVxyXG4gICAgXHJcbiAgICBzZXRVc2VyTGlzdChjYXRlZ29yeSwgdXNlckxpc3QpXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCByZW1vdmVVc2VyID0gKGNhdGVnb3J5OiBzdHJpbmcsIHVzZXJJRDogaW1wb3J0KFwiaXR0YWlcIikuVXNlcklEKSA9PiB7XHJcbiAgICBpZiAodHlwZW9mIHVzZXJJRCAhPT0gXCJzdHJpbmdcIikgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIFVzZXIgSURgKVxyXG4gICAgXHJcbiAgICBsZXQgcGlubmVkQ2F0ZWdvcmllcyA9IGdldEFsbCgpXHJcbiAgICBpZiAocGlubmVkQ2F0ZWdvcmllc1tjYXRlZ29yeV0gPT0gbnVsbCkgdGhyb3cgbmV3IEVycm9yKGBDYXRlZ29yeSAke2NhdGVnb3J5fSBkb2VzIG5vdCBleGlzdGApXHJcblxyXG4gICAgbGV0IHVzZXJMaXN0ID0gcGlubmVkQ2F0ZWdvcmllc1tjYXRlZ29yeV0udXNlcnNcclxuICAgIHVzZXJMaXN0ID0gdXNlckxpc3QuZmlsdGVyKCh1c2VyKSA9PiB1c2VyICE9PSB1c2VySUQpXHJcbiAgICBcclxuICAgIHNldFVzZXJMaXN0KGNhdGVnb3J5LCB1c2VyTGlzdClcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGlzVXNlckFkZGVkID0gKHVzZXJJRDogaW1wb3J0KFwiaXR0YWlcIikuVXNlcklEKSA9PiB7XHJcbiAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyhnZXRBbGwoKSkuc29tZSgoeyB1c2VycyB9KSA9PiB1c2Vycy5pbmNsdWRlcyh1c2VySUQpKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0VXNlckNhdGVnb3J5ID0gKHVzZXJJRDogaW1wb3J0KFwiaXR0YWlcIikuVXNlcklEKSA9PiB7XHJcbiAgICBjb25zdCBwaW5uZWRDYXRlZ29yaWVzID0gZ2V0QWxsKClcclxuICAgIGZvciAoY29uc3QgY2F0ZWdvcnlOYW1lIGluIHBpbm5lZENhdGVnb3JpZXMpIHtcclxuICAgICAgICBjb25zdCBjYXRlZ29yeSA9IHBpbm5lZENhdGVnb3JpZXNbY2F0ZWdvcnlOYW1lXVxyXG4gICAgICAgIGlmIChjYXRlZ29yeS51c2Vycy5zb21lKCh1c2VyKSA9PiB1c2VyID09PSB1c2VySUQpKSByZXR1cm4gY2F0ZWdvcnlOYW1lXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB1c2VMaXN0VXBkYXRlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgWywgZm9yY2VVcGRhdGVdID0gUmVhY3QudXNlUmVkdWNlcihuID0+ICFuLCB0cnVlKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGxpc3RlbmVyID0gKCkgPT4gdm9pZCBmb3JjZVVwZGF0ZSgpO1xyXG5cclxuICAgICAgICBEaXNwYXRjaGVyLnN1YnNjcmliZShcIlBJTkRNU19DSEFOR0VfTElTVFwiLCBsaXN0ZW5lcik7XHJcblxyXG4gICAgICAgIHJldHVybiAoKSA9PiBEaXNwYXRjaGVyLnVuc3Vic2NyaWJlKFwiUElORE1TX0NIQU5HRV9MSVNUXCIsIGxpc3RlbmVyKTtcclxuICAgIH0sIFtdKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgZ2V0QWxsLFxyXG4gICAgZ2V0Q2F0ZWdvcmllcyxcclxuICAgIGdldENhdGVnb3J5LFxyXG4gICAgc2V0UmF3LFxyXG4gICAgYWRkQ2F0ZWdvcnksXHJcbiAgICByZW5hbWVDYXRlZ29yeSxcclxuICAgIHJlbW92ZUNhdGVnb3J5LFxyXG4gICAgZ2V0Q29sb3IsXHJcbiAgICBzZXRDb2xvcixcclxuICAgIGdldFZpc2liaWxpdHksXHJcbiAgICBzZXRWaXNpYmlsaXR5LFxyXG4gICAgc2V0VXNlckxpc3QsXHJcbiAgICBhZGRVc2VyLFxyXG4gICAgZ2V0VXNlcnMsXHJcbiAgICByZW1vdmVVc2VyLFxyXG4gICAgaXNVc2VyQWRkZWQsXHJcbiAgICBnZXRVc2VyQ2F0ZWdvcnksXHJcbiAgICB1c2VMaXN0VXBkYXRlXHJcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoYXJyOiBhbnlbXSB8IE9iamVjdCwgZnJvbTogbnVtYmVyLCB0bzogbnVtYmVyKSB7XHJcbiAgICBpZihBcnJheS5pc0FycmF5KGFycikpIHtcclxuICAgICAgICByZXR1cm4gbW92ZUFycmF5KGFyciwgZnJvbSwgdG8pXHJcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBhcnIgPT09IFwib2JqZWN0XCIpIHtcclxuICAgICAgICByZXR1cm4gbW92ZU9iamVjdEtleShhcnIsIGZyb20sIHRvKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbW92ZU9iamVjdEtleShvYmplY3Q6IE9iamVjdCwgZnJvbTogbnVtYmVyIHwgc3RyaW5nLCB0bzogbnVtYmVyKTogT2JqZWN0IHtcclxuICAgIGlmKHR5cGVvZiBmcm9tID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgZnJvbSA9IE9iamVjdC5rZXlzKG9iamVjdCkuZmluZEluZGV4KGtleSA9PiBrZXkgPT09IGZyb20pXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY2hhbmdlZE9yZGVyID0gbW92ZUFycmF5KE9iamVjdC5lbnRyaWVzKG9iamVjdCksIGZyb20sIHRvKVxyXG4gICAgY29uc3QgbmV3T2JqOiBPYmplY3QgPSBjaGFuZ2VkT3JkZXIucmVkdWNlKChhY2MsIFtrZXksIHZhbHVlXSkgPT4ge1xyXG4gICAgICAgIGFjY1trZXldID0gdmFsdWVcclxuICAgICAgICByZXR1cm4gYWNjXHJcbiAgICB9LCB7fSlcclxuICAgIHJldHVybiBuZXdPYmpcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1vdmVBcnJheShhcnI6IGFueVtdLCBmcm9tOiBudW1iZXIsIHRvOiBudW1iZXIpIHtcclxuICAgIGxldCBzYWZlQXJyID0gYXJyXHJcbiAgICBzYWZlQXJyLnNwbGljZSh0bywgMCwgc2FmZUFyci5zcGxpY2UoZnJvbSwgMSlbMF0pXHJcbiAgICByZXR1cm4gc2FmZUFyclxyXG59IiwiaW1wb3J0IHsgc2VhcmNoQ2xhc3NOYW1lTW9kdWxlcyB9IGZyb20gXCJpdHRhaS91dGlsaXRpZXNcIlxyXG5pbXBvcnQgeyBmaW5kQnlQcm9wcyB9IGZyb20gXCJpdHRhaS93ZWJwYWNrXCJcclxuXHJcbmV4cG9ydCBjb25zdCBQcml2YXRlQ2hhbm5lbHNIZWFkZXJDb250YWluZXIgPSBmaW5kQnlQcm9wcyhcInByaXZhdGVDaGFubmVsUmVjaXBpZW50c0ludml0ZUJ1dHRvbkljb25cIikgYXMge1xyXG4gICAgZW1wdHk6IHN0cmluZ1xyXG4gICAgaGVhZGVyVGV4dDogc3RyaW5nXHJcbiAgICBwcml2YXRlQ2hhbm5lbFJlY2lwaWVudHNJbnZpdGVCdXR0b25JY29uOiBzdHJpbmdcclxuICAgIHByaXZhdGVDaGFubmVsc0hlYWRlckNvbnRhaW5lcjogc3RyaW5nXHJcbiAgICBzY3JvbGxlcjogc3RyaW5nXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBETUJ1dHRvbnMgPSBmaW5kQnlQcm9wcyhcImNoYW5uZWxcIiwgXCJsaW5rQnV0dG9uSWNvblwiKSBhcyB7XHJcbiAgICBjaGFubmVsOiBzdHJpbmdcclxuICAgIGZ1bGxXaWR0aDogc3RyaW5nXHJcbiAgICBpbnRlcmFjdGl2ZTogc3RyaW5nXHJcbiAgICBpbnRlcmFjdGl2ZVNlbGVjdGVkOiBzdHJpbmdcclxuICAgIGF2YXRhcldpdGhUZXh0OiBzdHJpbmdcclxuICAgIGxpbms6IHN0cmluZ1xyXG4gICAgbGlua0J1dHRvbjogc3RyaW5nXHJcbiAgICBsaW5rQnV0dG9uSWNvbjogc3RyaW5nXHJcbiAgICBjbG9zZUJ1dHRvbjogc3RyaW5nXHJcbiAgICBjbG9zZUljb246IHN0cmluZ1xyXG4gICAgc3VidGV4dDogc3RyaW5nXHJcbiAgICBhY3Rpdml0eTogc3RyaW5nXHJcbiAgICBhY3Rpdml0eVRleHQ6IHN0cmluZ1xyXG4gICAgYWN0aXZpdHlFbW9qaTogc3RyaW5nXHJcbiAgICBkZWNvcmF0b3I6IHN0cmluZ1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQ2F0ZWdvcnkgPSBmaW5kQnlQcm9wcyhcImFkZEJ1dHRvbkljb25cIiwgXCJjb250YWluZXJEcmFnQWZ0ZXJcIikgYXMge1xyXG4gICAgc3BhY2VCZWZvcmVDYXRlZ29yeTogc3RyaW5nXHJcbiAgICBjb250YWluZXJEZWZhdWx0OiBzdHJpbmdcclxuICAgIGNvbnRhaW5lckRyYWdBZnRlcjogc3RyaW5nXHJcbiAgICBjb250YWluZXJEcmFnQmVmb3JlOiBzdHJpbmdcclxuICAgIGNvbnRhaW5lclVzZXJPdmVyOiBzdHJpbmdcclxuICAgIGRpc2FibGVDbGljazogc3RyaW5nXHJcbiAgICBhZGRCdXR0b246IHN0cmluZ1xyXG4gICAgZm9yY2VWaXNpYmxlOiBzdHJpbmdcclxuICAgIGljb25WaXNpYmlsaXR5OiBzdHJpbmdcclxuICAgIGFkZEJ1dHRvbkljb246IHN0cmluZ1xyXG4gICAgd3JhcHBlcjogc3RyaW5nXHJcbiAgICBjbGlja2FibGU6IHN0cmluZ1xyXG4gICAgY2hpbGRyZW46IHN0cmluZ1xyXG4gICAgbWFpbkNvbnRlbnQ6IHN0cmluZ1xyXG4gICAgaWNvbjogc3RyaW5nXHJcbiAgICBjb2xsYXBzZWQ6IHN0cmluZ1xyXG4gICAgbXV0ZWQ6IHN0cmluZ1xyXG4gICAgbmFtZTogc3RyaW5nXHJcbiAgICBkaXNtaXNzV3JhcHBlcjogc3RyaW5nXHJcbiAgICBkaXNtaXNzQnV0dG9uOiBzdHJpbmdcclxuICAgIGRpc21pc3M6IHN0cmluZ1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgSW50ZXJhY3RpdmVzID0gZmluZEJ5UHJvcHMoXCJpbnRlcmFjdGl2ZVwiLCBcIm11dGVkXCIpIGFzIHtcclxuICAgIHJlc3BvbnNpdmVXaWR0aE1vYmlsZUZpcnN0OiBzdHJpbmdcclxuICAgIGludGVyYWN0aXZlOiBzdHJpbmdcclxuICAgIG11dGVkOiBzdHJpbmdcclxuICAgIHNlbGVjdGVkOiBzdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IERlbGV0ZUFjY291bnRCdXR0b25Sb3cgPSBmaW5kQnlQcm9wcyhcImJ1dHRvbkNvbnRhaW5lclwiLCBcImRlc2NyaXB0aW9uXCIsIFwiZGlzYWJsZUJ1dHRvblwiKSBhcyB7XHJcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nXHJcbiAgICBidXR0b25Db250YWluZXI6IHN0cmluZ1xyXG4gICAgZGlzYWJsZUJ1dHRvbjogc3RyaW5nXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBOYW1lcyA9IGZpbmRCeVByb3BzKFwibmFtZUFuZERlY29yYXRvcnNcIikgYXMge1xyXG4gICAgbXV0ZWQ6IHN0cmluZ1xyXG4gICAgYXZhdGFyOiBzdHJpbmdcclxuICAgIGhpZ2hsaWdodGVkOiBzdHJpbmdcclxuICAgIGxheW91dDogc3RyaW5nXHJcbiAgICBjb250ZW50OiBzdHJpbmdcclxuICAgIG5hbWU6IHN0cmluZ1xyXG4gICAgd3JhcHBlZExheW91dDogc3RyaW5nXHJcbiAgICB3cmFwcGVkTmFtZTogc3RyaW5nXHJcbiAgICBuYW1lQW5kRGVjb3JhdG9yczogc3RyaW5nXHJcbiAgICBzdWJUZXh0OiBzdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFNjcm9sbGluZyA9IGZpbmRCeVByb3BzKFwic2Nyb2xsaW5nXCIsIFwic2Nyb2xsZXJCYXNlXCIpIGFzIHtcclxuICAgIHNjcm9sbGVyQmFzZTogc3RyaW5nXHJcbiAgICB0aGluOiBzdHJpbmdcclxuICAgIGZhZGU6IHN0cmluZ1xyXG4gICAgc2Nyb2xsaW5nOiBzdHJpbmdcclxuICAgIGF1dG86IHN0cmluZ1xyXG4gICAgbm9uZTogc3RyaW5nXHJcbiAgICBjb250ZW50OiBzdHJpbmdcclxuICAgIGRpc2FibGVTY3JvbGxBbmNob3I6IHN0cmluZ1xyXG4gICAgbWFuYWdlZFJlYWN0aXZlU2Nyb2xsZXI6IHN0cmluZ1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgU2VydmVyTWVtYmVycyA9IGZpbmRCeVByb3BzKFwidWktc2Nyb2xsZXItd3JhcFwiKSBhcyB7XHJcbiAgICBzZWFyY2hCYXI6IHN0cmluZ1xyXG4gICAgbWVtYmVyc0hlYWRlcjogc3RyaW5nXHJcbiAgICBcInVpLXNlbGVjdFwiOiBzdHJpbmdcclxuICAgIHNlYXJjaDogc3RyaW5nXHJcbiAgICBkaXZpZGVyOiBzdHJpbmdcclxuICAgIHBydW5lTGluazogc3RyaW5nXHJcbiAgICBtZW1iZXJzQ291bnQ6IHN0cmluZ1xyXG4gICAgbWVtYmVyc0ZpbHRlclBvcG91dDogc3RyaW5nXHJcbiAgICBcInVpLXNjcm9sbGVyLXdyYXBcIjogc3RyaW5nXHJcbiAgICBtZW1iZXI6IHN0cmluZ1xyXG4gICAgYWN0aXZlOiBzdHJpbmdcclxuICAgIG92ZXJmbG93SWNvbjogc3RyaW5nXHJcbiAgICBuYW1lVGFnOiBzdHJpbmdcclxuICAgIG5hbWU6IHN0cmluZ1xyXG4gICAgdGFnOiBzdHJpbmdcclxuICAgIHVzZXJuYW1lOiBzdHJpbmdcclxuICAgIG93bmVySGVscEljb246IHN0cmluZ1xyXG4gICAgcm9sZVdyYXBwZXI6IHN0cmluZ1xyXG4gICAgb3ZlcmZsb3dCdXR0b246IHN0cmluZ1xyXG4gICAgYXZhdGFyOiBzdHJpbmdcclxuICAgIG92ZXJmbG93SWNvbkZnOiBzdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEFjY291bnRDb250cm9sQnV0dG9ucyA9IGZpbmRCeVByb3BzKFwiYnV0dG9uXCIsIFwiZGlzYWJsZWRcIiwgXCJlbmFibGVkXCIpIGFzIHtcclxuICAgIGJ1dHRvbjogc3RyaW5nXHJcbiAgICBlbmFibGVkOiBzdHJpbmdcclxuICAgIGRpc2FibGVkOiBzdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IENvbG9yUGlja2VyID0gZmluZEJ5UHJvcHMoXCJjdXN0b21cIiwgXCJjdXN0b21Db2xvclBpY2tlcklucHV0XCIsIFwiY29sb3JQaWNrZXJSb3dcIikgYXMge1xyXG4gICAgY29udGFpbmVyOiBzdHJpbmdcclxuICAgIGN1c3RvbUNvbnRhaW5lcjogc3RyaW5nXHJcbiAgICBkZWZhdWx0Q29udGFpbmVyOiBzdHJpbmdcclxuICAgIGN1c3RvbTogc3RyaW5nXHJcbiAgICBwcmVzZXQ6IHN0cmluZ1xyXG4gICAgY29sb3JQaWNrZXJDdXN0b206IHN0cmluZ1xyXG4gICAgY3VzdG9tQ29sb3JQaWNrZXJJbnB1dDogc3RyaW5nXHJcbiAgICBpbnB1dDogc3RyaW5nXHJcbiAgICBjb2xvclBpY2tlclJvdzogc3RyaW5nXHJcbiAgICBjb2xvclBpY2tlclN3YXRjaDogc3RyaW5nXHJcbiAgICBkZWZhdWx0OiBzdHJpbmdcclxuICAgIGRpc2FibGVkOiBzdHJpbmdcclxuICAgIGNvbG9yUGlja2VyRHJvcHBlcjogc3RyaW5nXHJcbiAgICBub0NvbG9yOiBzdHJpbmdcclxuICAgIGNvbG9yUGlja2VyRHJvcHBlckZnOiBzdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IE1hcmdpbnMgPSBmaW5kQnlQcm9wcyhcIm1hcmdpbkxhcmdlXCIsIFwibWFyZ2luVG9wMjBcIikgYXMge1xyXG4gICAgbWFyZ2luWFNtYWxsOiBzdHJpbmdcclxuICAgIG1hcmdpblNtYWxsOiBzdHJpbmdcclxuICAgIG1hcmdpbk1lZGl1bTogc3RyaW5nXHJcbiAgICBtYXJnaW5MYXJnZTogc3RyaW5nXHJcbiAgICBtYXJnaW5YTGFyZ2U6IHN0cmluZ1xyXG4gICAgbWFyZ2luUmVzZXQ6IHN0cmluZ1xyXG4gICAgbWFyZ2luVG9wNDogc3RyaW5nXHJcbiAgICBtYXJnaW5Cb3R0b200OiBzdHJpbmdcclxuICAgIG1hcmdpblRvcDg6IHN0cmluZ1xyXG4gICAgbWFyZ2luQm90dG9tODogc3RyaW5nXHJcbiAgICBtYXJnaW5Ub3AyMDogc3RyaW5nXHJcbiAgICBtYXJnaW5Cb3R0b20yMDogc3RyaW5nXHJcbiAgICBtYXJnaW5Ub3A0MDogc3RyaW5nXHJcbiAgICBtYXJnaW5Cb3R0b200MDogc3RyaW5nXHJcbiAgICBtYXJnaW5Ub3A2MDogc3RyaW5nXHJcbiAgICBtYXJnaW5Cb3R0b202MDogc3RyaW5nXHJcbiAgICBtYXJnaW5DZW50ZXJIb3J6OiBzdHJpbmdcclxuICAgIG1hcmdpbkxlZnQ4OiBzdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgUHJpdmF0ZUNoYW5uZWxzSGVhZGVyQ29udGFpbmVyLFxyXG4gICAgRE1CdXR0b25zLFxyXG4gICAgU2VydmVyTWVtYmVycyxcclxuICAgIEFjY291bnRDb250cm9sQnV0dG9ucyxcclxuICAgIENvbG9yUGlja2VyLFxyXG4gICAgTWFyZ2lucyxcclxuICAgIFNjcm9sbGluZyxcclxuICAgIERlbGV0ZUFjY291bnRCdXR0b25Sb3csXHJcbiAgICBOYW1lcyxcclxuICAgIEludGVyYWN0aXZlcyxcclxuICAgIENhdGVnb3J5XHJcbn1cclxuXHJcbi8qIGNvcHkgdHlwZXNcclxuY29uc29sZS5sb2coT2JqZWN0LmtleXMoc2VhcmNoQ2xhc3NOYW1lTW9kdWxlcyhcIm1lbWJlci0yY2oyUElcIikpLmpvaW4oXCI6IHN0cmluZ1xcblwiKSArIFwiOiBzdHJpbmdcIilcclxuKi8iLCJleHBvcnQgZGVmYXVsdCAoLi4uY2xhc3NlczogKHN0cmluZyB8IGFueSlbXSkgPT4gY2xhc3Nlcy5maWx0ZXIocyA9PiB0eXBlb2YgcyA9PT0gJ3N0cmluZycpLmpvaW4oXCIgXCIpIiwiaW1wb3J0IHsgVXNlcklELCBVc2VyT2JqZWN0IH0gZnJvbSBcIml0dGFpXCJcclxuXHJcbmltcG9ydCAqIGFzIHdlYnBhY2sgZnJvbSBcIml0dGFpL3dlYnBhY2tcIlxyXG5jb25zdCB7IFJlYWN0LCBSZWFjdDoge1xyXG4gICAgdXNlU3RhdGUsXHJcbiAgICB1c2VFZmZlY3QsXHJcbn0gfSA9IHdlYnBhY2tcclxuaW1wb3J0IHsgVXNlcnMgfSBmcm9tIFwiaXR0YWkvc3RvcmVzXCJcclxuaW1wb3J0IHsgQXZhdGFyLCBEaXNjb3JkSWNvbiwgVG9vbHRpcENvbnRhaW5lciB9IGZyb20gXCJpdHRhaS9jb21wb25lbnRzXCJcclxuaW1wb3J0IHsgQnV0dG9uLCBUZXh0LCBGbGV4IH0gZnJvbSBcIml0dGFpL2NvbXBvbmVudHNcIlxyXG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi4vLi4vdXRpbHMvY2xhc3Nlc1wiXHJcbi8vQHRzLWlnbm9yZVxyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL1VzZXIuc2Nzc1wiXHJcbmltcG9ydCBqb2luQ2xhc3NlcyBmcm9tIFwiLi4vLi4vdXRpbHMvam9pbkNsYXNzZXNcIlxyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICAgIGlkOiBVc2VySUQsXHJcbiAgICBvbk1vdmU6ICh1cGRuOiBcInVwXCIgfCBcImRvd25cIikgPT4gdm9pZCxcclxuICAgIG9uUmVtb3ZlOiAoKSA9PiB2b2lkLFxyXG4gICAgZGlzYWJsZVVwPzogYm9vbGVhbixcclxuICAgIGRpc2FibGVEb3duPzogYm9vbGVhbixcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oeyBpZCwgb25Nb3ZlLCBvblJlbW92ZSwgZGlzYWJsZVVwID0gZmFsc2UsIGRpc2FibGVEb3duID0gZmFsc2UgfTogUHJvcHMpIHtcclxuICAgIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlPFVzZXJPYmplY3Q+KClcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHVzZXIgPSBVc2Vycy5nZXRVc2VyKGlkKVxyXG4gICAgICAgIGlmICghdXNlcikgdGhyb3cgbmV3IEVycm9yKFwiVXNlciBub3QgZm91bmRcIilcclxuICAgICAgICBzZXRVc2VyKFVzZXJzLmdldFVzZXIoaWQpKVxyXG4gICAgfSlcclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8RmxleFxyXG4gICAgICAgICAgICBhbGlnbj17RmxleC5BbGlnbi5DRU5URVJ9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17am9pbkNsYXNzZXMoY2xhc3Nlcy5TZXJ2ZXJNZW1iZXJzLm1lbWJlciwgc3R5bGVzLndyYXBwZXIpfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuU2VydmVyTWVtYmVycy5hdmF0YXJ9PlxyXG4gICAgICAgICAgICAgICAgPEF2YXRhclxyXG4gICAgICAgICAgICAgICAgICAgIHNyYz17KHVzZXI/LmdldEF2YXRhclVSTChmYWxzZSwgdHJ1ZSkgYXMgc3RyaW5nKT8ucmVwbGFjZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCI/c2l6ZT0xNlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICBzaXplPXtBdmF0YXIuU2l6ZXMuU0laRV80MH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5TZXJ2ZXJNZW1iZXJzLm5hbWVUYWd9IHN0eWxlPXt7IG1hcmdpblJpZ2h0OiBcImF1dG9cIiB9fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLlNlcnZlck1lbWJlcnMubmFtZX0+XHJcbiAgICAgICAgICAgICAgICAgICAge3VzZXI/LnVzZXJuYW1lfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8VGV4dCBjb2xvcj17VGV4dC5Db2xvcnMuTVVURUR9IHNpemU9e1RleHQuU2l6ZXMuU0laRV8xNH0+XHJcbiAgICAgICAgICAgICAgICAgICAgQHt1c2VyPy51c2VybmFtZX0je3VzZXI/LmRpc2NyaW1pbmF0b3J9XHJcbiAgICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8RmxleFxyXG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uPXtGbGV4LkRpcmVjdGlvbi5WRVJUSUNBTH1cclxuICAgICAgICAgICAgICAgIGdyb3c9ezB9XHJcbiAgICAgICAgICAgICAgICBzaHJpbms9ezB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICBzaXplPXtCdXR0b24uU2l6ZXMuSUNPTn1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbk1vdmUoXCJ1cFwiKX1cclxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZVVwfVxyXG4gICAgICAgICAgICAgICAgICAgIGxvb2s9e0J1dHRvbi5Mb29rcy5CTEFOS31cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1tcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3Nlcy5BY2NvdW50Q29udHJvbEJ1dHRvbnMuYnV0dG9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlVXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gY2xhc3Nlcy5BY2NvdW50Q29udHJvbEJ1dHRvbnMuZGlzYWJsZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogY2xhc3Nlcy5BY2NvdW50Q29udHJvbEJ1dHRvbnMuZW5hYmxlZCxcclxuICAgICAgICAgICAgICAgICAgICBdLmpvaW4oXCIgXCIpfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxEaXNjb3JkSWNvbiBuYW1lPVwiQXJyb3dEcm9wVXBcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT17QnV0dG9uLlNpemVzLklDT059XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25Nb3ZlKFwiZG93blwiKX1cclxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZURvd259XHJcbiAgICAgICAgICAgICAgICAgICAgbG9vaz17QnV0dG9uLkxvb2tzLkJMQU5LfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17W1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc2VzLkFjY291bnRDb250cm9sQnV0dG9ucy5idXR0b24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVEb3duXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGNsYXNzZXMuQWNjb3VudENvbnRyb2xCdXR0b25zLmRpc2FibGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGNsYXNzZXMuQWNjb3VudENvbnRyb2xCdXR0b25zLmVuYWJsZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgXS5qb2luKFwiIFwiKX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8RGlzY29yZEljb24gbmFtZT1cIkFycm93RHJvcERvd25cIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICAgICAgPFRvb2x0aXBDb250YWluZXIgdGV4dD1cIkRlbGV0ZVwiPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU9e0J1dHRvbi5TaXplcy5JQ09OfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPXtCdXR0b24uQ29sb3JzLlJFRH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvblJlbW92ZX1cclxuICAgICAgICAgICAgICAgICAgICBsb29rPXtCdXR0b24uTG9va3MuTElOS31cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8RGlzY29yZEljb24gbmFtZT1cIlRyYXNoXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L1Rvb2x0aXBDb250YWluZXI+XHJcbiAgICAgICAgPC9GbGV4PlxyXG4gICAgKVxyXG59IiwiY29uc3QgQ2F0ZWdvcnlWaWV3ID0ge1xyXG4gICAgc2V0dGluZ3NWYWx1ZTogXCJjYXRlZ29yeVwiXHJcbn1cclxuY29uc3QgTWluaW1hbGlzdFZpZXcgPSB7XHJcbiAgICBzZXR0aW5nc1ZhbHVlOiBcIm1pbmltYWxpc3RcIixcclxuICAgIHVzZXJJY29uczogdHJ1ZVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBEZWZhdWx0U2V0dGluZ3M6IHtcclxuICAgICAgICBESVNQTEFZX01PREU6IENhdGVnb3J5Vmlldy5zZXR0aW5nc1ZhbHVlLFxyXG4gICAgICAgIE1pbmltYWxpc3RWaWV3LFxyXG4gICAgICAgIENhdGVnb3J5VmlldyxcclxuICAgICAgICBQSU5fSUNPTjogdHJ1ZSxcclxuICAgICAgICBTVFJFQU1FUl9NT0RFOiB0cnVlXHJcbiAgICB9XHJcbn0iLCJleHBvcnQgeyBkZWZhdWx0IGFzIFNldHRpbmdzIH0gZnJvbSBcIi4vc2V0dGluZ3NcIlxyXG5cclxuZXhwb3J0IGNvbnN0IERJU1BBVENIRVJfUElORE1TX0NIQU5HRV9MSVNUID0gXCJQSU5ETVNfQ0hBTkdFX0xJU1RcIiIsImltcG9ydCB7IFJlYWN0IH0gZnJvbSBcIml0dGFpL3dlYnBhY2tcIlxyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICAgIHJlbmRlckVycm9yPzogc3RyaW5nIHwgUmVhY3QuUmVhY3RFbGVtZW50XHJcbiAgICBjaGlsZHJlbjogYW55XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVycm9yQm91bmRhcnkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHM+IHtcclxuICAgIHN0YXRlID0geyBoYXNFcnJvcjogZmFsc2UgfTtcclxuXHJcbiAgICBjb21wb25lbnREaWRDYXRjaCgpIHsgfVxyXG5cclxuICAgIHN0YXRpYyBnZXREZXJpdmVkU3RhdGVGcm9tRXJyb3IoKSB7IHJldHVybiB7IGhhc0Vycm9yOiB0cnVlIH07IH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuaGFzRXJyb3IpIHJldHVybiAoQm9vbGVhbih0aGlzLnByb3BzLnJlbmRlckVycm9yKSA/IHRoaXMucHJvcHMucmVuZGVyRXJyb3IgOiBudWxsKTtcclxuICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5jaGlsZHJlbjtcclxuICAgIH1cclxufSIsImltcG9ydCAqIGFzIHdlYnBhY2sgZnJvbSBcIml0dGFpL3dlYnBhY2tcIlxyXG5pbXBvcnQgeyBDb2xvckhleCwgQ29sb3JVdGlscywgQ29uc3RhbnRzLCBSZWFjdCB9IGZyb20gXCJpdHRhaS93ZWJwYWNrXCJcclxuaW1wb3J0IHsgQnV0dG9uLCBNb2RhbCwgVGV4dElucHV0LCBGb3JtcywgQ29sb3JQaWNrZXIsIFN3aXRjaEl0ZW0sIFRleHQsIEFuY2hvciB9IGZyb20gXCJpdHRhaS9jb21wb25lbnRzXCI7XHJcbmltcG9ydCBwaW5uZWRETVMgZnJvbSBcIi4uLy4uLy4uL2hhbmRsZXJzL3Bpbm5lZERNU1wiO1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvY2xhc3Nlc1wiXHJcbmltcG9ydCAqIGFzIGNvbnN0YW50cyBmcm9tIFwiLi4vLi4vLi4vY29uc3RhbnRzXCJcclxuaW1wb3J0ICogYXMgc2V0dGluZ3MgZnJvbSBcIml0dGFpL3NldHRpbmdzXCJcclxuLy9AdHMtaWdub3JlXHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vQ2F0ZWdvcnlTZXR0aW5nc01vZGFsLnNjc3NcIlxyXG5pbXBvcnQgRXJyb3JCb3VuZGFyeSBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvRXJyb3JCb3VuZGFyeVwiO1xyXG5jb25zdCB7IEN1c3RvbUNvbG9yQnV0dG9uIH0gPSB3ZWJwYWNrLmZpbmRCeVByb3BzKFwiRGVmYXVsdENvbG9yQnV0dG9uXCIpXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAobW9kYWxQcm9wczogeyB0cmFuc2l0aW9uU3RhdGU6IDEgfCAyIHwgMywgb25DbG9zZTogKCkgPT4gdm9pZCwgY2F0ZWdvcnk6IHN0cmluZ30pIHtcclxuICAgIGNvbnN0IFtuZXdOYW1lLCBzZXROZXdOYW1lXSA9IFJlYWN0LnVzZVN0YXRlKG1vZGFsUHJvcHMuY2F0ZWdvcnkpXHJcbiAgICBjb25zdCBbbmV3Q29sb3IsIHNldE5ld0NvbG9yXSA9IFJlYWN0LnVzZVN0YXRlPENvbG9ySGV4PihwaW5uZWRETVMuZ2V0Q29sb3IobW9kYWxQcm9wcy5jYXRlZ29yeSkpXHJcblxyXG4gICAgcmV0dXJuIDxNb2RhbC5Nb2RhbFJvb3Qgc2l6ZT17TW9kYWwuTW9kYWxTaXplLkRZTkFNSUN9IHsuLi5tb2RhbFByb3BzfT5cclxuICAgICAgICA8TW9kYWwuTW9kYWxIZWFkZXIgc2VwYXJhdG9yPXtmYWxzZX0+XHJcbiAgICAgICAgICAgIDxUZXh0SW5wdXRcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtuZXdOYW1lfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3NldE5ld05hbWV9XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlJlbmFtZVwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy50ZXh0Ym94fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIDwvTW9kYWwuTW9kYWxIZWFkZXI+XHJcbiAgICAgICAgPE1vZGFsLk1vZGFsQ29udGVudD5cclxuICAgICAgICAgICAgPEZvcm1zLkZvcm1JdGVtPlxyXG4gICAgICAgICAgICAgICAgPEZvcm1zLkZvcm1UaXRsZT5Db2xvcjwvRm9ybXMuRm9ybVRpdGxlPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuTWFyZ2lucy5tYXJnaW5Cb3R0b20yMH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEVycm9yQm91bmRhcnlcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyRXJyb3I9ezxUZXh0IGNvbG9yPXtUZXh0LkNvbG9ycy5FUlJPUn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBbiBlcnJvciBoYXBwZW5lZCB3aGlsZSB0cnlpbmcgdG8gbG9hZCB0aGUgQ29sb3JQaWNrZXIuIENoZWNrIDxBbmNob3IgaHJlZj1cImh0dHBzOi8vZ2l0LmNhdHZpYmVycy5tZS9JdHRhaS9pdHRhaS9pc3N1ZXMvOVwiPmh0dHBzOi8vZ2l0LmNhdHZpYmVycy5tZS9JdHRhaS9pdHRhaS9pc3N1ZXMvOTwvQW5jaG9yPiBmb3IgbW9yZSBpbmZvcm1hdGlvbiBhYm91dC48YnIvPjxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcyBvZiBub3csIHlvdSBjYW4gZG8gdGhlc2Ugc3RlcHM6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZXMucHJvcGVyU3BhY2luZ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPi0gUmVtb3ZlIHRoZSBwbHVnaW4gZnJvbSB0aGUgcGx1Z2lucyBmb2xkZXI8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT4tIEdvIHRvIGFueSBzZXJ2ZXIncyBzZXR0aW5nczwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPi0gR28gdG8gXCJSb2xlc1wiPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+LSBDbGljayBvbiBhbnkgcm9sZTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPi0gUHV0IHRoZSBwbHVnaW4gYmFjazwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhpcyB3aWxsIGxvYWQgdGhlIENvbG9yUGlja2VyIGNvbXBvbmVudCBhbmQgdGhlbiBmaXggdGhpcyBlcnJvclxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RleHQ+fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbG9yUGlja2VyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcnM9e0NvbnN0YW50cy5ST0xFX0NPTE9SU31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRDb2xvcj17Q29uc3RhbnRzLkRFRkFVTFRfUk9MRV9DT0xPUn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtDb2xvclV0aWxzLmhleDJpbnQobmV3Q29sb3IpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhjOiBudW1iZXIpID0+IHNldE5ld0NvbG9yKENvbG9yVXRpbHMuaW50MmhleChjKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9FcnJvckJvdW5kYXJ5PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8U3dpdGNoSXRlbVxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXshcGlubmVkRE1TLmdldFZpc2liaWxpdHkobW9kYWxQcm9wcy5jYXRlZ29yeSl9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBwaW5uZWRETVMuc2V0VmlzaWJpbGl0eShtb2RhbFByb3BzLmNhdGVnb3J5LCAhZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3NldHRpbmdzLmdldCgnZGlzcGxheScsIGNvbnN0YW50cy5TZXR0aW5ncy5EZWZhdWx0U2V0dGluZ3MuRElTUExBWV9NT0RFKSA9PT0gY29uc3RhbnRzLlNldHRpbmdzLkRlZmF1bHRTZXR0aW5ncy5NaW5pbWFsaXN0Vmlldy5zZXR0aW5nc1ZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgIG5vdGU9e3NldHRpbmdzLmdldCgnZGlzcGxheScsIGNvbnN0YW50cy5TZXR0aW5ncy5EZWZhdWx0U2V0dGluZ3MuRElTUExBWV9NT0RFKSAmJiBcIkRpc2FibGVkIGJlY2F1c2UgaXQgaXMgdXNpbmcgdGhlIE1pbmltYWxpc3Qgdmlld1wifVxyXG4gICAgICAgICAgICAgICAgPkhpZGUgY29udGVudHM8L1N3aXRjaEl0ZW0+XHJcbiAgICAgICAgICAgIDwvRm9ybXMuRm9ybUl0ZW0+XHJcbiAgICAgICAgPC9Nb2RhbC5Nb2RhbENvbnRlbnQ+XHJcbiAgICAgICAgPE1vZGFsLk1vZGFsRm9vdGVyPlxyXG4gICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChtb2RhbFByb3BzLmNhdGVnb3J5ICE9PSBuZXdOYW1lKSBwaW5uZWRETVMucmVuYW1lQ2F0ZWdvcnkobW9kYWxQcm9wcy5jYXRlZ29yeSwgbmV3TmFtZSlcclxuICAgICAgICAgICAgICAgIHBpbm5lZERNUy5zZXRDb2xvcihtb2RhbFByb3BzLmNhdGVnb3J5LCBuZXdDb2xvcilcclxuICAgICAgICAgICAgICAgIG1vZGFsUHJvcHMub25DbG9zZSgpXHJcbiAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgU2F2ZVxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPEJ1dHRvbiBsb29rPXtCdXR0b24uTG9va3MuTElOS30gY29sb3I9e0J1dHRvbi5Db2xvcnMuV0hJVEV9IG9uQ2xpY2s9e21vZGFsUHJvcHMub25DbG9zZX0+XHJcbiAgICAgICAgICAgICAgICBDYW5jZWxcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9Nb2RhbC5Nb2RhbEZvb3Rlcj5cclxuICAgIDwvTW9kYWwuTW9kYWxSb290PlxyXG59IiwiZXhwb3J0IGRlZmF1bHQgPFR5cGU+KGFycmF5OiBUeXBlW10sIGxpbWl0ID0gNTAsIGZyb20gPSAwKTogVHlwZVtdID0+IGFycmF5LnNsaWNlKGZyb20sIGZyb20gKyBsaW1pdCkiLCJpbXBvcnQgKiBhcyB3ZWJwYWNrIGZyb20gXCJpdHRhaS93ZWJwYWNrXCJcclxuaW1wb3J0IHsgUmVhY3QgfSBmcm9tIFwiaXR0YWkvd2VicGFja1wiXHJcbmltcG9ydCB7IE1vZGFsLCBUZXh0SW5wdXQsIEF2YXRhciwgRmxleCwgVGV4dCB9IGZyb20gXCJpdHRhaS9jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7IENoYW5uZWxzLCBVc2VycyB9IGZyb20gXCJpdHRhaS9zdG9yZXNcIjtcclxuaW1wb3J0IHBpbm5lZERNUyBmcm9tIFwiLi4vLi4vLi4vaGFuZGxlcnMvcGlubmVkRE1TXCI7XHJcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuLi8uLi8uLi91dGlscy9jbGFzc2VzXCJcclxuLy9AdHMtaWdub3JlXHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vQWRkVXNlck1vZGFsLnNjc3NcIlxyXG4vL0B0cy1pZ25vcmVcclxuaW1wb3J0IGNhdGVnb3J5U3R5bGVzIGZyb20gXCIuL0NhdGVnb3J5U2V0dGluZ3NNb2RhbC5zY3NzXCJcclxuaW1wb3J0IGxpbWl0IGZyb20gXCIuLi8uLi8uLi91dGlscy9saW1pdFwiO1xyXG5pbXBvcnQgeyBVc2VySUQsIFVzZXJPYmplY3QgfSBmcm9tIFwiaXR0YWlcIjtcclxuaW1wb3J0IGpvaW5DbGFzc2VzIGZyb20gXCIuLi8uLi8uLi91dGlscy9qb2luQ2xhc3Nlc1wiO1xyXG5cclxuY29uc3QgZG1Vc2VyczogVXNlck9iamVjdFtdID0gQ2hhbm5lbHMuZ2V0U29ydGVkUHJpdmF0ZUNoYW5uZWxzKCkuZmlsdGVyKGNoYW5uZWwgPT4gY2hhbm5lbC5yZWNpcGllbnRzLmxlbmd0aCA9PT0gMSAmJiBjaGFubmVsLnJlY2lwaWVudHNbMF0gIT0gbnVsbCkubWFwKGNoYW5uZWwgPT4gVXNlcnMuZ2V0VXNlcihjaGFubmVsLnJlY2lwaWVudHNbMF0pKVxyXG5cclxuY29uc3QgTUFYX1VTRVJfRElTUExBWSA9IDYwXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAocHJvcHM6IHsgdHJhbnNpdGlvblN0YXRlOiAxIHwgMiB8IDMsIG9uQ2xvc2U6ICgpID0+IHZvaWQsIG9uU2VsZWN0OiAoaWQ6IFVzZXJPYmplY3QpID0+IHZvaWR9KSB7XHJcbiAgICBjb25zdCBbdXNlcnMsIHNldFVzZXJzXSA9IFJlYWN0LnVzZVN0YXRlPFVzZXJPYmplY3RbXT4oW10pXHJcbiAgICBjb25zdCBbc2VhcmNoLCBzZXRTZWFyY2hdID0gUmVhY3QudXNlU3RhdGUoXCJcIilcclxuICAgIFxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBzZWFyY2hSZXN1bHQgPSBkbVVzZXJzLmZpbHRlcih1c2VyID0+ICF1c2VyLmJvdCAmJiB+dXNlci51c2VybmFtZS50b0xvd2VyQ2FzZSgpLmluZGV4T2Yoc2VhcmNoLnRvTG93ZXJDYXNlKCkpKVxyXG4gICAgICAgIGNvbnN0IGxpbWl0ZWRSZXN1bHQgPSBsaW1pdChzZWFyY2hSZXN1bHQsIE1BWF9VU0VSX0RJU1BMQVkpXHJcbiAgICAgICAgc2V0VXNlcnMobGltaXRlZFJlc3VsdClcclxuICAgIH0sIFtzZWFyY2hdKVxyXG5cclxuICAgIHJldHVybiA8TW9kYWwuTW9kYWxSb290IHNpemU9e01vZGFsLk1vZGFsU2l6ZS5EWU5BTUlDfSB7Li4ucHJvcHN9PlxyXG4gICAgICAgIDxNb2RhbC5Nb2RhbEhlYWRlciBzZXBhcmF0b3I9e2ZhbHNlfT5cclxuICAgICAgICAgICAgPFRleHRJbnB1dFxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3NlYXJjaH1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtzZXRTZWFyY2h9XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCBmb3IgdXNlclwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NhdGVnb3J5U3R5bGVzLnRleHRib3h9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9Nb2RhbC5Nb2RhbEhlYWRlcj5cclxuICAgICAgICA8TW9kYWwuTW9kYWxDb250ZW50PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnVzZXJHcmlkfT5cclxuICAgICAgICAgICAgICAgIHt1c2Vycy5tYXAodXNlciA9PiA8VXNlciB1c2VyPXt1c2VyfSBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMub25TZWxlY3QodXNlcilcclxuICAgICAgICAgICAgICAgICAgICBwcm9wcy5vbkNsb3NlKClcclxuICAgICAgICAgICAgICAgIH19IC8+KX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Nb2RhbC5Nb2RhbENvbnRlbnQ+XHJcbiAgICA8L01vZGFsLk1vZGFsUm9vdD5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFVzZXIgPSAoeyB1c2VyLCBvbkNsaWNrIH06IHsgdXNlcjogVXNlck9iamVjdCwgb25DbGljaz86ICgpID0+IHZvaWQgfSkgPT4ge1xyXG4gICAgY29uc3QgaXNBZGRlZCA9IHBpbm5lZERNUy5pc1VzZXJBZGRlZCh1c2VyLmlkKVxyXG4gICAgcmV0dXJuIDxGbGV4IGFsaWduPXtGbGV4LkFsaWduLkNFTlRFUn1cclxuICAgICAgICBjbGFzc05hbWU9e2pvaW5DbGFzc2VzKHN0eWxlcy51c2VyLCBpc0FkZGVkID8gc3R5bGVzLmRpc2FibGVkIDogXCJcIil9XHJcbiAgICAgICAgb25DbGljaz17KCkgPT4geyBpZiAoIWlzQWRkZWQpIG9uQ2xpY2s/LigpfX1cclxuICAgID5cclxuICAgICAgICA8QXZhdGFyXHJcbiAgICAgICAgICAgIHNyYz17KHVzZXIuZ2V0QXZhdGFyVVJMKGZhbHNlLCBmYWxzZSkgYXMgc3RyaW5nKX1cclxuICAgICAgICAgICAgc2l6ZT17QXZhdGFyLlNpemVzLlNJWkVfMTZ9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8VGV4dCBjb2xvcj17VGV4dC5Db2xvcnMuU1RBTkRBUkR9IGNsYXNzTmFtZT17c3R5bGVzLm5hbWV9PlxyXG4gICAgICAgICAgICB7dXNlci51c2VybmFtZX1cclxuICAgICAgICA8L1RleHQ+XHJcbiAgICA8L0ZsZXg+XHJcbn0iLCJpbXBvcnQgKiBhcyB3ZWJwYWNrIGZyb20gXCJpdHRhaS93ZWJwYWNrXCJcclxuaW1wb3J0IHsgUmVhY3QsIENvbG9yVXRpbHMsIE1vZGFsQWN0aW9ucywgQ29uc3RhbnRzIH0gZnJvbSBcIml0dGFpL3dlYnBhY2tcIlxyXG5pbXBvcnQge1xyXG4gICAgQnV0dG9uLFxyXG4gICAgVGV4dElucHV0LFxyXG4gICAgRmxleCxcclxuICAgIERpc2NvcmRJY29uLFxyXG4gICAgQ29sb3JQaWNrZXIsXHJcbiAgICBQb3BvdXQsXHJcbiAgICBUb29sdGlwQ29udGFpbmVyXHJcbn0gZnJvbSBcIml0dGFpL2NvbXBvbmVudHNcIlxyXG5pbXBvcnQgcGlubmVkRE1TLCB7IHVzZUxpc3RVcGRhdGUgfSBmcm9tIFwiLi4vLi4vaGFuZGxlcnMvcGlubmVkRE1TXCJcclxuaW1wb3J0IHsgbW92ZU9iamVjdEtleSwgbW92ZUFycmF5IH0gZnJvbSBcIi4uLy4uL3V0aWxzL21vdmVcIlxyXG5pbXBvcnQgeyBDb2xvckhleCwgUGlubmVkRE1TIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCJcclxuaW1wb3J0IFVzZXIgZnJvbSBcIi4vVXNlclwiXHJcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuLi8uLi91dGlscy9jbGFzc2VzXCJcclxuaW1wb3J0IENoYW5nZUNhdGVnb3J5TmFtZU1vZGFsIGZyb20gXCIuL01vZGFscy9DYXRlZ29yeVNldHRpbmdzTW9kYWxcIlxyXG4vL0B0cy1pZ25vcmVcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9pbmRleC5zY3NzXCJcclxuaW1wb3J0IGpvaW5DbGFzc2VzIGZyb20gXCIuLi8uLi91dGlscy9qb2luQ2xhc3Nlc1wiXHJcbmltcG9ydCBBZGRVc2VyTW9kYWwgZnJvbSBcIi4vTW9kYWxzL0FkZFVzZXJNb2RhbFwiXHJcbmltcG9ydCB7IFVzZXJTZXR0aW5ncyB9IGZyb20gXCJpdHRhaS9zdG9yZXNcIlxyXG5cclxuY29uc3QgTGlzdFNlY3Rpb25JdGVtID0gd2VicGFjay5maW5kQnlEaXNwbGF5TmFtZShcIkxpc3RTZWN0aW9uSXRlbVwiKVxyXG5jb25zdCB7IEVtcHR5U3RhdGVJbWFnZSwgZGVmYXVsdDogRW1wdHlTdGF0ZSwgRW1wdHlTdGF0ZVRleHQgfSA9IHdlYnBhY2suZmluZEJ5UHJvcHMoXCJFbXB0eVN0YXRlSW1hZ2VcIilcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgICBvcGVuZWRDYXRlZ29yeT86IHN0cmluZ1xyXG4gICAgc2hvd0FkZENhdGVnb3J5QnV0dG9uPzogYm9vbGVhblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICh7IG9wZW5lZENhdGVnb3J5LCBzaG93QWRkQ2F0ZWdvcnlCdXR0b24gPSB0cnVlIH06IFByb3BzKSB7XHJcbiAgICB1c2VMaXN0VXBkYXRlKClcclxuICAgIC8vIGNvbnNvbGUubG9nKENvbG9yUGlja2VyKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAge3Nob3dBZGRDYXRlZ29yeUJ1dHRvbiAmJiA8Q3JlYXRlQ2F0ZWdvcnkgLz59XHJcbiAgICAgICAgICAgIHtPYmplY3QuZW50cmllcyhwaW5uZWRETVMuZ2V0QWxsKCkpLm1hcChcclxuICAgICAgICAgICAgICAgIChbY2F0ZWdvcnksIHsgdXNlcnMgfV0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPFVzZXJDYXRlZ29yeSBuYW1lPXtjYXRlZ29yeX0gdXNlcnM9e3VzZXJzfSBpbmRleD17aW5kZXh9IGhpZGRlbj17Y2F0ZWdvcnkgIT09IG9wZW5lZENhdGVnb3J5fSAvPlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQ3JlYXRlQ2F0ZWdvcnkgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbbmV3Q2F0ZWdvcnksIHNldE5ld0NhdGVnb3J5XSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZz4oXCJcIilcclxuICAgIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nPihcIlwiKVxyXG5cclxuICAgIHJldHVybiA8RmxleCBjbGFzc05hbWU9e3N0eWxlcy5jcmVhdGVDYXRlZ29yeX0gYWxpZ249e0ZsZXguQWxpZ24uQ0VOVEVSfT5cclxuICAgICAgICA8VGV4dElucHV0IGNsYXNzTmFtZT17c3R5bGVzLnRleHRib3h9XHJcbiAgICAgICAgICAgIHZhbHVlPXtuZXdDYXRlZ29yeX1cclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOYW1lIGEgbmV3IGNhdGVnb3J5XCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROZXdDYXRlZ29yeShlKX1cclxuICAgICAgICAgICAgZXJyb3I9e2Vycm9yfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChuZXdDYXRlZ29yeSA9PSBcIlwiKSBzZXRFcnJvcihcIlBsZWFzZSBnaXZlIGEgbmFtZVwiKVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNldEVycm9yKFwiXCIpXHJcbiAgICAgICAgICAgICAgICBwaW5uZWRETVMuYWRkQ2F0ZWdvcnkobmV3Q2F0ZWdvcnkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9fT5cclxuICAgICAgICAgICAgQWRkXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICA8L0ZsZXg+XHJcbn1cclxuXHJcbmludGVyZmFjZSBDYXRlZ29yeVByb3BzIHtcclxuICAgIG5hbWU6IHN0cmluZ1xyXG4gICAgdXNlcnM6IHN0cmluZ1tdXHJcbiAgICBpbmRleDogbnVtYmVyLFxyXG4gICAgaGlkZGVuPzogYm9vbGVhblxyXG59XHJcbmV4cG9ydCBjb25zdCBVc2VyQ2F0ZWdvcnkgPSAoeyBuYW1lLCB1c2VycywgaW5kZXgsIGhpZGRlbiA9IHRydWUgfTogQ2F0ZWdvcnlQcm9wcykgPT4ge1xyXG4gICAgY29uc3QgW2hpZGUsIHNldEhpZGVdID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4oaGlkZGVuKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBrZXk9e25hbWV9IGNsYXNzTmFtZT17c3R5bGVzLmNhdGVnb3J5fT5cclxuICAgICAgICAgICAgPENhdGVnb3J5SGVhZGVyIHsuLi57IG5hbWUsIGluZGV4IH19IG9uSGlkZT17KCkgPT4gc2V0SGlkZSghaGlkZSl9IGhpZGRlbj17aGlkZX0gLz5cclxuXHJcbiAgICAgICAgICAgIHshaGlkZSAmJiA8ZGl2IGNsYXNzTmFtZT17am9pbkNsYXNzZXMoc3R5bGVzLnVzZXJMaXN0LCBjbGFzc2VzLlNjcm9sbGluZy5zY3JvbGxlckJhc2UsIGNsYXNzZXMuU2Nyb2xsaW5nLnRoaW4sIGNsYXNzZXMuU2Nyb2xsaW5nLmZhZGUpfT5cclxuICAgICAgICAgICAgICAgIHt1c2Vycy5sZW5ndGggIT09IDAgPyB1c2Vycy5tYXAoKGlkLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxVc2VyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtpZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3ZlPXsodXBkbikgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBpbm5lZERNUy5zZXRVc2VyTGlzdChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vdmVBcnJheShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcnMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleCAtICh1cGRuID09PSBcInVwXCIgPyArMSA6IC0xKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvblJlbW92ZT17KCkgPT4gcGlubmVkRE1TLnJlbW92ZVVzZXIobmFtZSwgaWQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlVXA9e2luZGV4ID09PSAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlRG93bj17aW5kZXggPT09IHVzZXJzLmxlbmd0aCAtIDF9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICkpIDogPD5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIwKSA9PT0gMyAvL2Vhc3RlciBlZ2cgd29vb29vb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyA8aWZyYW1lIHdpZHRoPVwiNTYwXCIgaGVpZ2h0PVwiMzE1XCIgc3JjPVwiaHR0cHM6Ly93d3cueW91dHViZS1ub2Nvb2tpZS5jb20vZW1iZWQvdGpzMnhSMlJacDA/Y29udHJvbHM9MFwiIGFsbG93PVwiY2xpcGJvYXJkLXdyaXRlOyBlbmNyeXB0ZWQtbWVkaWFcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmVtcHR5fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEVtcHR5U3RhdGUgdGhlbWU9e1VzZXJTZXR0aW5ncy50aGVtZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RW1wdHlTdGF0ZUltYWdlIHsuLi57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3aWR0aFwiOiAzNzYsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJoZWlnaHRcIjogMTYyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibGlnaHRTcmNcIjogXCIvYXNzZXRzLzAyNjI1ZWUyOWY4NTFlYzU4OGMyMDIwYTg4ZDgyNjY1LnN2Z1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGFya1NyY1wiOiBcIi9hc3NldHMvYjVlYjJmN2Q2YjNmOGNjOWI2MGJlNGE1ZGNmMjgwMTUuc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RW1wdHlTdGF0ZVRleHQgbm90ZT17PD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGlzIGNhdGVnb3J5IGlzIGVtcHR5LiBPaCBuZXZlcm1pbmQsIHRoZXJlIGlzIFd1bXB1cywgYnV0IGhlIGlzIGFsb25lLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0VtcHR5U3RhdGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8Lz59XHJcbiAgICAgICAgICAgIDwvZGl2Pn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuaW50ZXJmYWNlIEhlYWRlclByb3BzIHtcclxuICAgIG5hbWU6IHN0cmluZ1xyXG4gICAgaW5kZXg6IG51bWJlclxyXG4gICAgaGlkZGVuPzogYm9vbGVhblxyXG4gICAgb25IaWRlOiBGdW5jdGlvblxyXG59XHJcbmNvbnN0IENhdGVnb3J5SGVhZGVyID0gKHsgbmFtZSwgaW5kZXgsIGhpZGRlbiA9IGZhbHNlLCBvbkhpZGUgfTogSGVhZGVyUHJvcHMpID0+IHtcclxuICAgIGNvbnN0IGhhbmRsZUNhdGVnb3J5UG9zID0gKHVwZG46IG51bWJlcikgPT4ge1xyXG4gICAgICAgIC8vIC0xID0gbW92ZSBkb3duIGJ5IG9uZVxyXG4gICAgICAgIC8vICsxID0gbW92ZSB1cCBieSBvbmVcclxuXHJcbiAgICAgICAgY29uc3QgaW5kZXggPSBPYmplY3Qua2V5cyhwaW5uZWRETVMuZ2V0QWxsKCkpLmZpbmRJbmRleChcclxuICAgICAgICAgICAgKGspID0+IGsgPT09IG5hbWVcclxuICAgICAgICApXHJcbiAgICAgICAgcGlubmVkRE1TLnNldFJhdyhcclxuICAgICAgICAgICAgbW92ZU9iamVjdEtleShwaW5uZWRETVMuZ2V0QWxsKCksIGluZGV4LCBpbmRleCAtIHVwZG4pIGFzIFBpbm5lZERNU1xyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gPEZsZXggYWxpZ249e0ZsZXguQWxpZ24uQ0VOVEVSfT5cclxuICAgICAgICA8TGlzdFNlY3Rpb25JdGVtXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17am9pbkNsYXNzZXMoY2xhc3Nlcy5Qcml2YXRlQ2hhbm5lbHNIZWFkZXJDb250YWluZXIucHJpdmF0ZUNoYW5uZWxzSGVhZGVyQ29udGFpbmVyLCBzdHlsZXMuZXhhbXBsZUxpc3RTZWN0aW9uSXRlbSl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8RmxleCBzdHlsZT17eyBjb2xvcjogcGlubmVkRE1TLmdldENvbG9yKG5hbWUpLCBmb250V2VpZ2h0OiBcImJvbGRcIiB9fSBhbGlnbj17RmxleC5BbGlnbi5DRU5URVJ9IG9uQ2xpY2s9e29uSGlkZX0+XHJcbiAgICAgICAgICAgICAgICA8RGlzY29yZEljb24gbmFtZT1cIkRyb3Bkb3duQXJyb3dcIiBjbGFzc05hbWU9e2pvaW5DbGFzc2VzKHN0eWxlcy5kcm9wZG93bkFycm93LCBoaWRkZW4gPyBzdHlsZXMuaGlkZGVuIDogdW5kZWZpbmVkKX0gLz5cclxuICAgICAgICAgICAgICAgIHtuYW1lfVxyXG4gICAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgPC9MaXN0U2VjdGlvbkl0ZW0+XHJcblxyXG4gICAgICAgIDxQb3BvdXQgcG9zaXRpb249e1BvcG91dC5Qb3NpdGlvbnMuQk9UVE9NfSByZW5kZXJQb3BvdXQ9eyhwcm9wcykgPT4gPGRpdiB7Li4ucHJvcHN9PlxyXG4gICAgICAgICAgICA8Q2hhbmdlQ2F0ZWdvcnlOYW1lTW9kYWwgdHJhbnNpdGlvblN0YXRlPXsxfSBvbkNsb3NlPXtwcm9wcy5jbG9zZVBvcG91dH0gY2F0ZWdvcnk9e25hbWV9IC8+XHJcbiAgICAgICAgPC9kaXY+fT5cclxuICAgICAgICAgICAgeyhwb3BvdXQpID0+IDxUb29sdGlwQ29udGFpbmVyIHRleHQ9XCJFZGl0IGNhdGVnb3J5XCI+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHsuLi5wb3BvdXR9XHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT17QnV0dG9uLlNpemVzLklDT059XHJcbiAgICAgICAgICAgICAgICAgICAgbG9vaz17QnV0dG9uLkxvb2tzLkJMQU5LfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17am9pbkNsYXNzZXMoY2xhc3Nlcy5BY2NvdW50Q29udHJvbEJ1dHRvbnMuYnV0dG9uLCBjbGFzc2VzLkFjY291bnRDb250cm9sQnV0dG9ucy5lbmFibGVkKX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8RGlzY29yZEljb24gbmFtZT1cIlBlbmNpbFwiIHN0eWxlPXt7IHdpZHRoOiBcIjIwcHhcIiwgaGVpZ2h0OiBcIjIwcHhcIiB9fSAvPlxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvVG9vbHRpcENvbnRhaW5lcj59XHJcbiAgICAgICAgPC9Qb3BvdXQ+XHJcblxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IFwiYXV0b1wiIH19IC8+XHJcblxyXG4gICAgICAgIDxQb3BvdXQgcG9zaXRpb249e1BvcG91dC5Qb3NpdGlvbnMuTEVGVH0gcmVuZGVyUG9wb3V0PXsocHJvcHMpID0+IDxkaXYgey4uLnByb3BzfT5cclxuICAgICAgICAgICAgPEFkZFVzZXJNb2RhbCB0cmFuc2l0aW9uU3RhdGU9ezF9IG9uQ2xvc2U9e3Byb3BzLmNsb3NlUG9wb3V0fSBvblNlbGVjdD17KHVzZXIpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh1c2VyLmlkICE9IG51bGwpIHBpbm5lZERNUy5hZGRVc2VyKG5hbWUsIHVzZXIuaWQpXHJcbiAgICAgICAgICAgIH19IC8+XHJcbiAgICAgICAgPC9kaXY+fT5cclxuICAgICAgICAgICAgeyhwb3BvdXQpID0+IDxUb29sdGlwQ29udGFpbmVyIHRleHQ9XCJBZGQgYSBuZXcgcGVyc29uXCI+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHsuLi5wb3BvdXR9XHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT17QnV0dG9uLlNpemVzLklDT059XHJcbiAgICAgICAgICAgICAgICAgICAgbG9vaz17QnV0dG9uLkxvb2tzLkJMQU5LfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17am9pbkNsYXNzZXMoY2xhc3Nlcy5BY2NvdW50Q29udHJvbEJ1dHRvbnMuYnV0dG9uLCBjbGFzc2VzLkFjY291bnRDb250cm9sQnV0dG9ucy5lbmFibGVkKX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8RGlzY29yZEljb24gbmFtZT1cIlBlcnNvbkFkZFwiIHN0eWxlPXt7IHdpZHRoOiBcIjIwcHhcIiwgaGVpZ2h0OiBcIjIwcHhcIiB9fSAvPlxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvVG9vbHRpcENvbnRhaW5lcj59XHJcbiAgICAgICAgPC9Qb3BvdXQ+XHJcblxyXG4gICAgICAgIDxGbGV4XHJcbiAgICAgICAgICAgIGRpcmVjdGlvbj17RmxleC5EaXJlY3Rpb24uVkVSVElDQUx9XHJcbiAgICAgICAgICAgIGdyb3c9ezB9XHJcbiAgICAgICAgICAgIHNocmluaz17MH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgIHNpemU9e0J1dHRvbi5TaXplcy5JQ09OfVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlQ2F0ZWdvcnlQb3MoKzEpfVxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2luZGV4ID09PSAwfVxyXG4gICAgICAgICAgICAgICAgbG9vaz17QnV0dG9uLkxvb2tzLkJMQU5LfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtqb2luQ2xhc3NlcyhjbGFzc2VzLkFjY291bnRDb250cm9sQnV0dG9ucy5idXR0b24sIGluZGV4ID09PSAwID8gY2xhc3Nlcy5BY2NvdW50Q29udHJvbEJ1dHRvbnMuZGlzYWJsZWQgOiBjbGFzc2VzLkFjY291bnRDb250cm9sQnV0dG9ucy5lbmFibGVkKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPERpc2NvcmRJY29uIG5hbWU9XCJBcnJvd0Ryb3BVcFwiIC8+XHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICBzaXplPXtCdXR0b24uU2l6ZXMuSUNPTn1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNhdGVnb3J5UG9zKC0xKX1cclxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXtpbmRleCA9PT0gcGlubmVkRE1TLmdldENhdGVnb3JpZXMoKS5sZW5ndGggLSAxfVxyXG4gICAgICAgICAgICAgICAgbG9vaz17QnV0dG9uLkxvb2tzLkJMQU5LfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtqb2luQ2xhc3NlcyhjbGFzc2VzLkFjY291bnRDb250cm9sQnV0dG9ucy5idXR0b24sIGluZGV4ID09PSBwaW5uZWRETVMuZ2V0Q2F0ZWdvcmllcygpLmxlbmd0aCAtIDEgPyBjbGFzc2VzLkFjY291bnRDb250cm9sQnV0dG9ucy5kaXNhYmxlZCA6IGNsYXNzZXMuQWNjb3VudENvbnRyb2xCdXR0b25zLmVuYWJsZWQpfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8RGlzY29yZEljb24gbmFtZT1cIkFycm93RHJvcERvd25cIiAvPlxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgPFRvb2x0aXBDb250YWluZXIgdGV4dD1cIkRlbGV0ZVwiPlxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICBzaXplPXtCdXR0b24uU2l6ZXMuSUNPTn1cclxuICAgICAgICAgICAgICAgIGNvbG9yPXtCdXR0b24uQ29sb3JzLlJFRH1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHBpbm5lZERNUy5yZW1vdmVDYXRlZ29yeShuYW1lKX1cclxuICAgICAgICAgICAgICAgIGxvb2s9e0J1dHRvbi5Mb29rcy5MSU5LfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8RGlzY29yZEljb24gbmFtZT1cIlRyYXNoXCIgLz5cclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9Ub29sdGlwQ29udGFpbmVyPlxyXG4gICAgPC9GbGV4PlxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IChqc29uOiBzdHJpbmcpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgSlNPTi5wYXJzZShqc29uKTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0gY2F0Y2ggKGUpIHt9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn0iLCJpbXBvcnQgeyBEaXNwYXRjaGVyLCBSZWFjdCwgTW9kYWxBY3Rpb25zIH0gZnJvbSBcIml0dGFpL3dlYnBhY2tcIlxyXG5pbXBvcnQgeyBDYXRlZ29yeSwgU3dpdGNoSXRlbSwgRm9ybXMsIEJ1dHRvbiwgRmxleCwgUmFkaW9Hcm91cCwgTW9kYWwsIEhlYWRpbmcsIFRleHQgfSBmcm9tIFwiaXR0YWkvY29tcG9uZW50c1wiXHJcbmltcG9ydCBVc2VyTGlzdFNldHRpbmdzIGZyb20gXCIuL1VzZXJMaXN0U2V0dGluZ3NcIlxyXG5pbXBvcnQgKiBhcyBzZXR0aW5ncyBmcm9tIFwiaXR0YWkvc2V0dGluZ3NcIlxyXG5pbXBvcnQgKiBhcyB0b2FzdCBmcm9tIFwiaXR0YWkvdG9hc3RcIlxyXG5pbXBvcnQgKiBhcyBjb25zdGFudHMgZnJvbSBcIi4uL2NvbnN0YW50c1wiXHJcbi8vQHRzLWlnbm9yZVxyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL1NldHRpbmdzLnNjc3NcIlxyXG5pbXBvcnQgaXNWYWxpZEpTT04gZnJvbSBcIi4uL3V0aWxzL2lzVmFsaWRKU09OXCJcclxuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4uL3V0aWxzL2NsYXNzZXNcIlxyXG5pbXBvcnQgam9pbkNsYXNzZXMgZnJvbSBcIi4uL3V0aWxzL2pvaW5DbGFzc2VzXCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xyXG4gICAgY29uc3QgWywgZm9yY2VVcGRhdGVdID0gUmVhY3QudXNlUmVkdWNlcigodikgPT4gIXYsIGZhbHNlKVxyXG5cclxuICAgIHJldHVybiA8PlxyXG4gICAgICAgIDxDYXRlZ29yeSB0aXRsZT1cIkxpc3RlZCBjYXRlZ29yaWVzXCIgZGVzY3JpcHRpb249XCJDb25maWd1cmUgdGhlIGZvbGRlcnMgYW5kIGFkZCBvciBjaGFuZ2UgdGhlIGxpc3RlZCB1c2Vyc1wiIGljb249XCJQZXJzb25cIj5cclxuICAgICAgICAgICAgPFVzZXJMaXN0U2V0dGluZ3MgLz5cclxuICAgICAgICA8L0NhdGVnb3J5PlxyXG5cclxuICAgICAgICA8Q2F0ZWdvcnkgdGl0bGU9XCJPdGhlciBzZXR0aW5nc1wiIGRlc2NyaXB0aW9uPVwiT3RoZXIgc2V0dGluZ3MgdGhhdCB5b3UgY2FuIHR3ZWFrXCIgaWNvbj1cIkdlYXJcIj5cclxuICAgICAgICAgICAgPEZvcm1zLkZvcm1TZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgPEZvcm1zLkZvcm1JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3Jtcy5Gb3JtVGl0bGU+RGlzcGxheSBtb2RlPC9Gb3Jtcy5Gb3JtVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPFJhZGlvR3JvdXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17W1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBuYW1lOiBcIkNhdGVnb3J5XCIsIHZhbHVlOiBjb25zdGFudHMuU2V0dGluZ3MuRGVmYXVsdFNldHRpbmdzLkNhdGVnb3J5Vmlldy5zZXR0aW5nc1ZhbHVlIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IG5hbWU6IFwiTWluaW1hbGlzdFwiLCB2YWx1ZTogY29uc3RhbnRzLlNldHRpbmdzLkRlZmF1bHRTZXR0aW5ncy5NaW5pbWFsaXN0Vmlldy5zZXR0aW5nc1ZhbHVlIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NldHRpbmdzLmdldChcImRpc3BsYXlcIiwgY29uc3RhbnRzLlNldHRpbmdzLkRlZmF1bHRTZXR0aW5ncy5ESVNQTEFZX01PREUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHYpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzLnNldChcImRpc3BsYXlcIiwgdi52YWx1ZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIERpc3BhdGNoZXIuZGlydHlEaXNwYXRjaCh7IHR5cGU6IGNvbnN0YW50cy5ESVNQQVRDSEVSX1BJTkRNU19DSEFOR0VfTElTVCB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yY2VVcGRhdGUoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1zLkZvcm1EaXZpZGVyIGNsYXNzTmFtZT17am9pbkNsYXNzZXMoY2xhc3Nlcy5NYXJnaW5zLm1hcmdpbkJvdHRvbTIwLCBjbGFzc2VzLk1hcmdpbnMubWFyZ2luVG9wMjApfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9Gb3Jtcy5Gb3JtSXRlbT5cclxuXHJcbiAgICAgICAgICAgICAgICB7c2V0dGluZ3MuZ2V0KFwiZGlzcGxheVwiLCBjb25zdGFudHMuU2V0dGluZ3MuRGVmYXVsdFNldHRpbmdzLkRJU1BMQVlfTU9ERSkgPT09IGNvbnN0YW50cy5TZXR0aW5ncy5EZWZhdWx0U2V0dGluZ3MuTWluaW1hbGlzdFZpZXcuc2V0dGluZ3NWYWx1ZSAmJiA8Q2F0ZWdvcnkgdGl0bGU9XCJNaW5pbWFsaXN0IHZpZXcgc2V0dGluZ3NcIiBkZXNjcmlwdGlvbj1cIkFkZGl0aW9uYWwgY29uZmlndXJhdGlvbiBmb3IgdGhlIE1pbmltYWxpc3QgVmlld1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTd2l0Y2hJdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZXR0aW5ncy5nZXQoXCJtaW5pbWFsLnVzZXJJY29uc1wiLCBjb25zdGFudHMuU2V0dGluZ3MuRGVmYXVsdFNldHRpbmdzLk1pbmltYWxpc3RWaWV3LnVzZXJJY29ucyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3Muc2V0KFwibWluaW1hbC51c2VySWNvbnNcIiwgZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIERpc3BhdGNoZXIuZGlydHlEaXNwYXRjaCh7IHR5cGU6IGNvbnN0YW50cy5ESVNQQVRDSEVSX1BJTkRNU19DSEFOR0VfTElTVCB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5TaG93IHVzZXIgaWNvbnM8L1N3aXRjaEl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8L0NhdGVnb3J5Pn1cclxuXHJcbiAgICAgICAgICAgICAgICA8U3dpdGNoSXRlbVxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZXR0aW5ncy5nZXQoXCJwaW5JY29uXCIsIGNvbnN0YW50cy5TZXR0aW5ncy5EZWZhdWx0U2V0dGluZ3MuUElOX0lDT04pfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0dGluZ3Muc2V0KFwicGluSWNvblwiLCBlKX1cclxuICAgICAgICAgICAgICAgICAgICBub3RlPVwiQWRkcyBhbiBwaW4gaWNvbiB0byB0aGUgdXNlciBzbyB5b3UgY2FuIGFkZCBpdCBxdWlja2x5IHRvIGEgY2F0ZWdvcnlcIlxyXG4gICAgICAgICAgICAgICAgPkFkZCBhIHF1aWNrIHNob3J0Y3V0IHRvIGFkZCBwZW9wbGUgb24gY2F0ZWdvcmllczwvU3dpdGNoSXRlbT5cclxuXHJcbiAgICAgICAgICAgICAgICA8U3dpdGNoSXRlbVxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZXR0aW5ncy5nZXQoXCJzdHJlYW1lck1vZGVcIiwgY29uc3RhbnRzLlNldHRpbmdzLkRlZmF1bHRTZXR0aW5ncy5TVFJFQU1FUl9NT0RFKX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldHRpbmdzLnNldChcInN0cmVhbWVyTW9kZVwiLCBlKX1cclxuICAgICAgICAgICAgICAgICAgICBub3RlPVwiV2hlbiBTdHJlYW1lciBtb2RlIGlzIGVuYWJsZWQsIGl0IHdpbGwgYXV0b21hdGljYWxseSBoaWRlIHRoZSBjYXRlZ29yaWVzXCJcclxuICAgICAgICAgICAgICAgID5IaWRlIHVzZXJzIHdoZW4gU3RyZWFtZXIgbW9kZSBpcyBlbmFibGVkPC9Td2l0Y2hJdGVtPlxyXG5cclxuICAgICAgICAgICAgICAgIDxGb3Jtcy5Gb3JtSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybXMuRm9ybVRpdGxlPkV4cG9ydCBhbmQgaW1wb3J0IHNldHRpbmdzPC9Gb3Jtcy5Gb3JtVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZsZXggY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uRmxleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlRXhwb3J0fT5FeHBvcnQ8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjb2xvcj17QnV0dG9uLkNvbG9ycy5SRUR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVJbXBvcnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5JbXBvcnQ8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICAgICAgICA8L0Zvcm1zLkZvcm1JdGVtPlxyXG4gICAgICAgICAgICA8L0Zvcm1zLkZvcm1TZWN0aW9uPlxyXG4gICAgICAgIDwvQ2F0ZWdvcnk+XHJcbiAgICA8Lz5cclxufVxyXG5cclxuY29uc3QgaGFuZGxlRXhwb3J0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgLy9AdHMtaWdub3JlXHJcbiAgICByZXR1cm4gRGlzY29yZE5hdGl2ZS5maWxlTWFuYWdlci5zYXZlV2l0aERpYWxvZyhKU09OLnN0cmluZ2lmeShzZXR0aW5ncy5nZXRBbGwoKSksIFwic2V0dGluZ3MuanNvblwiKVxyXG59XHJcblxyXG5jb25zdCBoYW5kbGVJbXBvcnQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAvL0B0cy1pZ25vcmVcclxuICAgIGNvbnN0IFtzZWxlY3RlZEZpbGVdID0gYXdhaXQgRGlzY29yZE5hdGl2ZS5maWxlTWFuYWdlci5vcGVuRmlsZXMoXCIqLmpzb25cIilcclxuICAgIGNvbnN0IG5ld1NldHRpbmdzVGV4dCA9IG5ldyBUZXh0RGVjb2RlcigpLmRlY29kZShuZXcgVWludDhBcnJheShzZWxlY3RlZEZpbGUuZGF0YSBhcyBBcnJheUJ1ZmZlcikpXHJcbiAgICBpZiAoIWlzVmFsaWRKU09OKG5ld1NldHRpbmdzVGV4dCkpIHJldHVybiB2b2lkIHRvYXN0LnNob3coXCJJbnZhbGlkIHNldHRpbmdzIGZpbGUuIEl0IHNob3VsZCBlbmQgd2l0aCBcXFwiLmpzb25cXFwiLlwiLCB7XHJcbiAgICAgICAgZHVyYXRpb246IDUwMDBcclxuICAgIH0pXHJcbiAgICBjb25zdCBuZXdTZXR0aW5nczogSlNPTiA9IEpTT04ucGFyc2UobmV3U2V0dGluZ3NUZXh0KVxyXG4gICAgXHJcbiAgICBjb25zdCBvdmVycmlkZVNldHRpbmdzID0gKCkgPT4ge1xyXG4gICAgICAgIHNldHRpbmdzLnJlc2V0KClcclxuICAgICAgICBzZXR0aW5ncy5zZXRBbGwobmV3U2V0dGluZ3MpXHJcbiAgICB9XHJcblxyXG4gICAgTW9kYWxBY3Rpb25zLm9wZW5Nb2RhbChwcm9wcyA9PiA8TW9kYWwuTW9kYWxSb290IHsuLi5wcm9wc30gc2l6ZT17TW9kYWwuTW9kYWxTaXplLlNNQUxMfT5cclxuICAgICAgICA8TW9kYWwuTW9kYWxIZWFkZXIgc2VwYXJhdG9yPXtmYWxzZX0+XHJcbiAgICAgICAgICAgIDxIZWFkaW5nIHZhcmlhbnQ9XCJoZWFkaW5nLWxnL21lZGl1bVwiPlNhdmUgYSBiYWNrdXA8L0hlYWRpbmc+XHJcbiAgICAgICAgPC9Nb2RhbC5Nb2RhbEhlYWRlcj5cclxuICAgICAgICA8TW9kYWwuTW9kYWxDb250ZW50PlxyXG4gICAgICAgICAgICA8VGV4dD5EbyB5b3Ugd2FudCB0byBzYXZlIGEgYmFja3VwPzwvVGV4dD5cclxuICAgICAgICA8L01vZGFsLk1vZGFsQ29udGVudD5cclxuICAgICAgICA8TW9kYWwuTW9kYWxGb290ZXI+XHJcbiAgICAgICAgICAgIDxGbGV4IHN0eWxlPXt7Z2FwOiBcIjhweFwifX0ganVzdGlmeT17RmxleC5KdXN0aWZ5LkVORH0+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIGxvb2s9e0J1dHRvbi5Mb29rcy5MSU5LfSBjb2xvcj17QnV0dG9uLkNvbG9ycy5XSElURX0gb25DbGljaz17cHJvcHMub25DbG9zZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgQ2FuY2VsXHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gbG9vaz17QnV0dG9uLkxvb2tzLkxJTkt9IGNvbG9yPXtCdXR0b24uQ29sb3JzLlJFRH0gb25DbGljaz17KCkgPT4geyBvdmVycmlkZVNldHRpbmdzKCk7IHByb3BzLm9uQ2xvc2UoKSB9fT5cclxuICAgICAgICAgICAgICAgICAgICBPdmVycmlkZSB3aXRob3V0IHNhdmluZ1xyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2FzeW5jICgpID0+IHsgYXdhaXQgaGFuZGxlRXhwb3J0KCk7IG92ZXJyaWRlU2V0dGluZ3MoKTsgcHJvcHMub25DbG9zZSgpOyB9fT5cclxuICAgICAgICAgICAgICAgICAgICBTYXZlXHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgIDwvTW9kYWwuTW9kYWxGb290ZXI+XHJcbiAgICA8L01vZGFsLk1vZGFsUm9vdD4pXHJcblxyXG4gICAgLy8gY29uc3Qgc3R1ZmY6IHsgZGF0YTogQXJyYXlCdWZmZXIsIGZpbGVuYW1lOiBzdHJpbmcgfSA9IGF3YWl0IERpc2NvcmROYXRpdmUuZmlsZU1hbmFnZXIub3BlbkZpbGVzKFwiKi5qc29uXCIpXHJcbiAgICAvLyBjb25zb2xlLmxvZyhzdHVmZilcclxufSIsImltcG9ydCB7IFJlYWN0LCBNb2RhbEFjdGlvbnMgfSBmcm9tIFwiaXR0YWkvd2VicGFja1wiXHJcbmltcG9ydCB7IE1vZGFsIH0gZnJvbSBcIml0dGFpL2NvbXBvbmVudHNcIlxyXG5pbXBvcnQgVXNlckxpc3RTZXR0aW5ncywgeyBDcmVhdGVDYXRlZ29yeSB9IGZyb20gXCIuLi9jb21wb25lbnRzL1VzZXJMaXN0U2V0dGluZ3NcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgKG9wZW5lZENhdGVnb3J5Pzogc3RyaW5nKSA9PiB7XHJcbiAgICBNb2RhbEFjdGlvbnMub3Blbk1vZGFsKChwcm9wcykgPT4gPE1vZGFsLk1vZGFsUm9vdCB7Li4ucHJvcHN9IHNpemU9e01vZGFsLk1vZGFsU2l6ZS5NRURJVU19PlxyXG4gICAgICAgIDxNb2RhbC5Nb2RhbEhlYWRlciBzZXBhcmF0b3I9e2ZhbHNlfT5cclxuICAgICAgICAgICAgPENyZWF0ZUNhdGVnb3J5IC8+XHJcbiAgICAgICAgPC9Nb2RhbC5Nb2RhbEhlYWRlcj5cclxuICAgICAgICA8TW9kYWwuTW9kYWxDb250ZW50PlxyXG4gICAgICAgICAgICA8VXNlckxpc3RTZXR0aW5ncyB7Li4ueyBvcGVuZWRDYXRlZ29yeSB9fSBzaG93QWRkQ2F0ZWdvcnlCdXR0b249e2ZhbHNlfSAvPlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmdCb3R0b206IFwiMTZweFwiIH19IC8+XHJcbiAgICAgICAgPC9Nb2RhbC5Nb2RhbENvbnRlbnQ+XHJcbiAgICA8L01vZGFsLk1vZGFsUm9vdD4pXHJcbn0iLCJpbXBvcnQgeyBSZWFjdCwgQ29udGV4dE1lbnUgYXMgQ29udGV4dE1lbnVIYW5kbGVyIH0gZnJvbSBcIml0dGFpL3dlYnBhY2tcIlxyXG5pbXBvcnQgeyBCdXR0b24sIENvbnRleHRNZW51IH0gZnJvbSBcIml0dGFpL2NvbXBvbmVudHNcIlxyXG5pbXBvcnQgeyBtZXNzYWdlQm94IH0gZnJvbSBcIml0dGFpL3V0aWxpdGllc1wiXHJcbmltcG9ydCBvcGVuQ2F0ZWdvcnlTZXR0aW5ncyBmcm9tIFwiLi4vLi4vdXRpbHMvb3BlbkNhdGVnb3J5U2V0dGluZ3NcIlxyXG5pbXBvcnQgcGlubmVkRE1TIGZyb20gXCIuLi8uLi9oYW5kbGVycy9waW5uZWRETVNcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHByb3BzOiB7IGNhdGVnb3J5OiBzdHJpbmcgfSkge1xyXG4gICAgcmV0dXJuIDxDb250ZXh0TWVudSBuYXZJZD17XCJwaW4tdXNlclwifSBvbkNsb3NlPXtDb250ZXh0TWVudUhhbmRsZXIuY2xvc2VDb250ZXh0TWVudX0+XHJcbiAgICAgICAgPENvbnRleHRNZW51Lk1lbnVJdGVtIGlkPVwiZWRpdFwiXHJcbiAgICAgICAgICAgIGxhYmVsPVwiRWRpdCBjYXRlZ29yeVwiXHJcbiAgICAgICAgICAgIGFjdGlvbj17KCkgPT4gb3BlbkNhdGVnb3J5U2V0dGluZ3MocHJvcHMuY2F0ZWdvcnkpfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPENvbnRleHRNZW51Lk1lbnVJdGVtIGlkPVwiZGVsZXRlXCJcclxuICAgICAgICAgICAgbGFiZWw9XCJEZWxldGUgY2F0ZWdvcnlcIlxyXG4gICAgICAgICAgICBjb2xvcj1cImNvbG9yRGFuZ2VyXCJcclxuICAgICAgICAgICAgYWN0aW9uPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlQm94KFwiRGVsZXRlXCIsIGBBcmUgeW91IHN1cmUgdGhhdCB5b3Ugd2FudCB0byBkZWxldGUgXCIke3Byb3BzLmNhdGVnb3J5fVwiP2AsIFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiRGVsZXRlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbjogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGlubmVkRE1TLnJlbW92ZUNhdGVnb3J5KHByb3BzLmNhdGVnb3J5KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogQnV0dG9uLkNvbG9ycy5SRURcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJDYW5jZWxcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiAoKSA9PiB7fSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IEJ1dHRvbi5Db2xvcnMuV0hJVEUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvb2s6IEJ1dHRvbi5Mb29rcy5MSU5LXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXSlcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAvPlxyXG4gICAgPC9Db250ZXh0TWVudT5cclxufVxyXG5cclxuIiwiaW1wb3J0ICogYXMgcGF0Y2hlciBmcm9tIFwiaXR0YWkvcGF0Y2hlclwiXHJcbmltcG9ydCAqIGFzIHdlYnBhY2sgZnJvbSBcIml0dGFpL3dlYnBhY2tcIlxyXG5pbXBvcnQgeyBSZWFjdCwgRGlzcGF0Y2hlciB9IGZyb20gXCJpdHRhaS93ZWJwYWNrXCJcclxuaW1wb3J0IHsgQ2hhbm5lbHMsIEN1cnJlbnRDaGFubmVscywgVXNlcnMgfSBmcm9tIFwiaXR0YWkvc3RvcmVzXCJcclxuaW1wb3J0IHsgZmluZEluUmVhY3RUcmVlLCBzZWFyY2hDbGFzc05hbWVNb2R1bGVzIH0gZnJvbSBcIml0dGFpL3V0aWxpdGllc1wiXHJcbmltcG9ydCB7IERpc2NvcmRJY29uLCBGbGV4LCBNb2RhbCwgUG9wb3V0LCBUZXh0IH0gZnJvbSBcIml0dGFpL2NvbXBvbmVudHNcIlxyXG5pbXBvcnQgKiBhcyBzZXR0aW5ncyBmcm9tIFwiaXR0YWkvc2V0dGluZ3NcIlxyXG5cclxuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4uL3V0aWxzL2NsYXNzZXNcIlxyXG5pbXBvcnQgcGlubmVkRE1TLCB7dXNlTGlzdFVwZGF0ZX0gZnJvbSBcIi4uL2hhbmRsZXJzL3Bpbm5lZERNU1wiXHJcbmltcG9ydCBqb2luQ2xhc3NlcyBmcm9tIFwiLi4vdXRpbHMvam9pbkNsYXNzZXNcIlxyXG5pbXBvcnQgKiBhcyBjb25zdGFudHMgZnJvbSBcIi4uL2NvbnN0YW50c1wiXHJcbi8vQHRzLWlnbm9yZVxyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL2RtbGlzdC5zY3NzXCJcclxuaW1wb3J0IG9wZW5DYXRlZ29yeVNldHRpbmdzIGZyb20gXCIuLi91dGlscy9vcGVuQ2F0ZWdvcnlTZXR0aW5nc1wiXHJcbmltcG9ydCBDYXRlZ29yeUNvbnRleHRNZW51IGZyb20gXCIuLi9jb21wb25lbnRzL0NvbnRleHRNZW51cy9DYXRlZ29yeVwiXHJcblxyXG5jb25zdCBMaXN0U2VjdGlvbkl0ZW0gPSB3ZWJwYWNrLmZpbmRCeURpc3BsYXlOYW1lKFwiTGlzdFNlY3Rpb25JdGVtXCIpXHJcbmNvbnN0IHsgRGlyZWN0TWVzc2FnZSB9ID0gd2VicGFjay5maW5kQnlQcm9wcyhcIkRpcmVjdE1lc3NhZ2VcIilcclxuY29uc3QgeyBOdW1iZXJCYWRnZSB9ID0gd2VicGFjay5maW5kQnlQcm9wcyhcIk51bWJlckJhZGdlXCIpXHJcbmNvbnN0IHsgZ2V0TWVudGlvbkNvdW50IH0gPSB3ZWJwYWNrLmZpbmRCeVByb3BzKFwiZ2V0TWVudGlvbkNvdW50XCIpXHJcbmNvbnN0IFVzZXJTdW1tYXJ5SXRlbSA9IHdlYnBhY2suZmluZEJ5RGlzcGxheU5hbWUoXCJVc2VyU3VtbWFyeUl0ZW1cIilcclxuXHJcbmNvbnN0IFVTRVJfSUNPTl9TSVpFID0gMTZcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xyXG4gICAgbGV0IFBpbkRNU1JlbmRlciA9ICgpID0+IDxDdXJyZW50TGlzdHMgLz5cclxuICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgUGluRE1TUmVuZGVyLmRpc3BsYXlOYW1lID0gXCJQaW5uZWRETVNcIlxyXG5cclxuICAgIC8vIHdlYnBhY2suRGlzcGF0Y2hlci5zdWJzY3JpYmUoXCJDSEFOTkVMX1VOUkVBRF9VUERBVEVcIiwgY29uc29sZS5sb2cpXHJcbiAgICBcclxuICAgIHBhdGNoZXIuYWZ0ZXIoXCJETUxpc3RQYXRjaFwiLCB3ZWJwYWNrLmZpbmQobSA9PiBtPy5kZWZhdWx0Py5kaXNwbGF5TmFtZSA9PT0gXCJDb25uZWN0ZWRQcml2YXRlQ2hhbm5lbHNMaXN0XCIpLCBcImRlZmF1bHRcIiwgKFtwcm9wc10sIHJlcywgX3RoaXMpID0+IHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh7cHJvcHMsIHJlcywgX3RoaXN9KVxyXG4gICAgICAgIHVzZUxpc3RVcGRhdGUoKSAvL3RlbXBvcmFyeSwgd2lsbCByZW1vdmUgbGF0ZXJcclxuICAgICAgICBcclxuICAgICAgICBsZXQgUHJpdmF0ZUNoYW5uZWxzTGlzdDoge3Byb3BzOiB7Y2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZVtdLCBwcml2YXRlQ2hhbm5lbElkczogc3RyaW5nW119LCB0eXBlOiBhbnl9ID0gZmluZEluUmVhY3RUcmVlKHJlcywgKG06IHsgdHlwZTogeyBkaXNwbGF5TmFtZTogc3RyaW5nIH0gfSkgPT4gbT8udHlwZT8uZGlzcGxheU5hbWUgPT09IFwiUHJpdmF0ZUNoYW5uZWxzTGlzdFwiKSBhcyBhbnlcclxuICAgICAgICBpZiAoUHJpdmF0ZUNoYW5uZWxzTGlzdCA9PSBudWxsKSByZXR1cm5cclxuXHJcbiAgICAgICAgT2JqZWN0LnZhbHVlcyhwaW5uZWRETVMuZ2V0QWxsKCkpLmZvckVhY2goKHt1c2Vyc30pID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZG1DaGFubmVscyA9IHVzZXJzLm1hcChpZCA9PiBDaGFubmVscy5nZXRETUZyb21Vc2VySWQoaWQpKVxyXG4gICAgICAgICAgICBQcml2YXRlQ2hhbm5lbHNMaXN0LnByb3BzLnByaXZhdGVDaGFubmVsSWRzID1cclxuICAgICAgICAgICAgICAgIFByaXZhdGVDaGFubmVsc0xpc3QucHJvcHMucHJpdmF0ZUNoYW5uZWxJZHMuZmlsdGVyKFxyXG4gICAgICAgICAgICAgICAgICAgIChpZCkgPT4gIWRtQ2hhbm5lbHMuaW5jbHVkZXMoaWQpXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgY29uc3Qgb2dGdW5jID0gUHJpdmF0ZUNoYW5uZWxzTGlzdC50eXBlLnByb3RvdHlwZS5yZW5kZXJcclxuICAgICAgICBpZiAob2dGdW5jID09IG51bGwpIHJldHVyblxyXG4gICAgICAgIE9iamVjdC5hc3NpZ24oUHJpdmF0ZUNoYW5uZWxzTGlzdC5wcm9wcywge1xyXG4gICAgICAgICAgICBvcmlnaW5hbDogb2dGdW5jLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLy8gaWYoIWZpc3RQYXRjaCkgUHJpdmF0ZUNoYW5uZWxzTGlzdC50eXBlLnByb3RvdHlwZS5yZW5kZXIgPSBQYXRjaGVkUHJpdmF0ZUNoYW5uZWxzTGlzdFxyXG4gICAgICAgIFxyXG5cclxuXHJcbiAgICAgICAgaWYgKFByaXZhdGVDaGFubmVsc0xpc3QucHJvcHMuY2hpbGRyZW4uZmluZChcclxuICAgICAgICAgICAgKG06IGFueSkgPT4gbT8udHlwZT8uZGlzcGxheU5hbWUgPT09IFwiUGlubmVkRE1TXCJcclxuICAgICAgICApKSByZXR1cm5cclxuXHJcbiAgICAgICAgUHJpdmF0ZUNoYW5uZWxzTGlzdC5wcm9wcy5jaGlsZHJlbi5wdXNoKDxQaW5ETVNSZW5kZXIgLz4pXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coUHJpdmF0ZUNoYW5uZWxzTGlzdClcclxuICAgIH0pXHJcbn1cclxuXHJcbmNvbnN0IEN1cnJlbnRMaXN0cyA9ICgpID0+IHtcclxuICAgIHVzZUxpc3RVcGRhdGUoKVxyXG5cclxuICAgIHN3aXRjaCAoc2V0dGluZ3MuZ2V0KFwiZGlzcGxheVwiLCBjb25zdGFudHMuU2V0dGluZ3MuRGVmYXVsdFNldHRpbmdzLkRJU1BMQVlfTU9ERSkpIHtcclxuICAgICAgICBjYXNlIGNvbnN0YW50cy5TZXR0aW5ncy5EZWZhdWx0U2V0dGluZ3MuTWluaW1hbGlzdFZpZXcuc2V0dGluZ3NWYWx1ZToge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53cmFwcGVyfT5cclxuICAgICAgICAgICAgICAgICAgICB7cGlubmVkRE1TLmdldENhdGVnb3JpZXMoKS5tYXAoKGNhdGVnb3J5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8TWluaW1hbGlzdExpc3Qgey4uLnsgY2F0ZWdvcnkgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRlZmF1bHQ6IHtcclxuICAgICAgICAgICAgcmV0dXJuIDw+XHJcbiAgICAgICAgICAgICAgICB7cGlubmVkRE1TLmdldENhdGVnb3JpZXMoKS5tYXAoKGNhdGVnb3J5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxDYXRlZ29yeUxpc3Qgey4uLnsgY2F0ZWdvcnkgfX0gLz5cclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBDYXRlZ29yeUxpc3QgPSAoe2NhdGVnb3J5fToge2NhdGVnb3J5OiBzdHJpbmd9KSA9PiB7XHJcbiAgICBjb25zdCBbc2hvdywgc2V0U2hvd10gPSBSZWFjdC51c2VTdGF0ZShwaW5uZWRETVMuZ2V0VmlzaWJpbGl0eShjYXRlZ29yeSkpXHJcblxyXG4gICAgcmV0dXJuIDw+XHJcbiAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgIHBpbm5lZERNUy5zZXRWaXNpYmlsaXR5KGNhdGVnb3J5LCAhc2hvdylcclxuICAgICAgICAgICAgc2V0U2hvdyghc2hvdylcclxuICAgICAgICB9fT5cclxuICAgICAgICAgICAgPExpc3RTZWN0aW9uSXRlbVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtqb2luQ2xhc3NlcyhjbGFzc2VzLkNhdGVnb3J5LndyYXBwZXIsIHN0eWxlcy5jYXRlZ29yeVZpZXdXcmFwcGVyLCBzaG93ID8gc3R5bGVzLm9wZW4gOiBudWxsKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogcGlubmVkRE1TLmdldENvbG9yKGNhdGVnb3J5KSB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxEaXNjb3JkSWNvbiBuYW1lPVwiRHJvcGRvd25BcnJvd1wiIHR5cGU9XCJub25lXCIgY2xhc3NOYW1lPXtqb2luQ2xhc3NlcyhjbGFzc2VzLkNhdGVnb3J5Lmljb24sIHN0eWxlcy5pY29uKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtqb2luQ2xhc3Nlcygoc2VhcmNoQ2xhc3NOYW1lTW9kdWxlcyhcImNvbnRhaW5lci0zMkhXNXNcIikgYXMgYW55KS5jb250YWluZXIsIGNsYXNzZXMuQ2F0ZWdvcnkubmFtZSwgc3R5bGVzLm5hbWUpfT57Y2F0ZWdvcnl9PC9oMj5cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9MaXN0U2VjdGlvbkl0ZW0+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIHtzaG93ICYmIHBpbm5lZERNUy5nZXRVc2VycyhjYXRlZ29yeSkubWFwKCh1c2VySWQpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZG1JZCA9IENoYW5uZWxzLmdldERNRnJvbVVzZXJJZCh1c2VySWQpXHJcbiAgICAgICAgICAgIGlmIChkbUlkID09IG51bGwpIHJldHVybiBudWxsXHJcblxyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPERpcmVjdE1lc3NhZ2Uga2V5PXtkbUlkfVxyXG4gICAgICAgICAgICAgICAgICAgIGNoYW5uZWw9e0NoYW5uZWxzLmdldENoYW5uZWwoZG1JZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBDdXJyZW50Q2hhbm5lbHMuZ2V0Q2hhbm5lbElkKCkgPT09IGRtSWRcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfSl9XHJcbiAgICA8Lz5cclxufVxyXG5cclxuY29uc3QgZ2V0UGluZ0NvdW50ID0gKGN1cnJlbnRVc2Vyczogc3RyaW5nW10pID0+IGN1cnJlbnRVc2Vycy5tYXAodXNlcklkID0+IENoYW5uZWxzLmdldERNRnJvbVVzZXJJZCh1c2VySWQpKS5yZWR1Y2UoKGFjYywgY2hhbm5lbElkKSA9PiBhY2MgKyBnZXRNZW50aW9uQ291bnQoY2hhbm5lbElkKSwgMClcclxuXHJcbmV4cG9ydCBjb25zdCBNaW5pbWFsaXN0TGlzdCA9ICh7IGNhdGVnb3J5IH06IHsgY2F0ZWdvcnk6IHN0cmluZyB9KSA9PiB7XHJcbiAgICBjb25zdCBjdXJyZW50VXNlcnMgPSBSZWFjdC51c2VNZW1vKCgpID0+IHBpbm5lZERNUy5nZXRVc2VycyhjYXRlZ29yeSksIFtdKVxyXG4gICAgY29uc3QgaXNDdXJyZW50Q2hhbm5lbCA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBjdXJyZW50VXNlcnMuc29tZSgodXNlcklkKSA9PiBDdXJyZW50Q2hhbm5lbHMuZ2V0Q2hhbm5lbElkKCkgPT09IENoYW5uZWxzLmdldERNRnJvbVVzZXJJZCh1c2VySWQpKVxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgY29uc3QgW3BpbmdDb3VudCwgc2V0UGluZ0NvdW50XSA9IFJlYWN0LnVzZVN0YXRlPG51bWJlcj4oZ2V0UGluZ0NvdW50KGN1cnJlbnRVc2VycykpXHJcbiAgICBjb25zdCBbaXNTdHJlYW1lck1vZGVFbmFibGVkLCBzZXRTdHJlYW1lck1vZGVdID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpXHJcblxyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbWVzc2FnZUNyZWF0ZUxpc3RlbmVyID0gKHtjaGFubmVsSWR9OiBhbnkpID0+IHtcclxuICAgICAgICAgICAgaWYgKGN1cnJlbnRVc2Vycy5zb21lKCh1c2VySWQpID0+IGNoYW5uZWxJZCA9PT0gQ2hhbm5lbHMuZ2V0RE1Gcm9tVXNlcklkKHVzZXJJZCkpKSBzZXRQaW5nQ291bnQoZ2V0UGluZ0NvdW50KGN1cnJlbnRVc2VycykpXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3Qgc3RyZWFtZXJNb2RlTGlzdGVuZXIgPSAoeyB2YWx1ZSB9OiB7IHZhbHVlOiBib29sZWFuIH0pID0+IHtcclxuICAgICAgICAgICAgc2V0U3RyZWFtZXJNb2RlKHZhbHVlKVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIERpc3BhdGNoZXIuc3Vic2NyaWJlKFwiQ0hBTk5FTF9VTlJFQURfVVBEQVRFXCIsIG1lc3NhZ2VDcmVhdGVMaXN0ZW5lcik7XHJcbiAgICAgICAgRGlzcGF0Y2hlci5zdWJzY3JpYmUoXCJTVFJFQU1FUl9NT0RFX1VQREFURVwiLCBzdHJlYW1lck1vZGVMaXN0ZW5lcik7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgRGlzcGF0Y2hlci51bnN1YnNjcmliZShcIkNIQU5ORUxfVU5SRUFEX1VQREFURVwiLCBtZXNzYWdlQ3JlYXRlTGlzdGVuZXIpXHJcbiAgICAgICAgICAgIERpc3BhdGNoZXIudW5zdWJzY3JpYmUoXCJTVFJFQU1FUl9NT0RFX1VQREFURVwiLCBzdHJlYW1lck1vZGVMaXN0ZW5lcilcclxuICAgICAgICB9XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgcmV0dXJuIDw+XHJcbiAgICAgICAgPFBvcG91dCBwb3NpdGlvbj17UG9wb3V0LlBvc2l0aW9ucy5SSUdIVH0gYW5pbWF0aW9uPXtQb3BvdXQuQW5pbWF0aW9uLk5PTkV9IHJlbmRlclBvcG91dD17KHByb3BzKSA9PiA8ZGl2IHsuLi5wcm9wc30+XHJcbiAgICAgICAgICAgIDxNb2RhbC5Nb2RhbFJvb3QgdHJhbnNpdGlvblN0YXRlPXsxfSBzaXplPXtNb2RhbC5Nb2RhbFNpemUuRFlOQU1JQ30+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1pbmltYWxpc3RpY1BvcG91dH0+XHJcbiAgICAgICAgICAgICAgICAgICAge2N1cnJlbnRVc2Vycy5sZW5ndGggIT09IDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBjdXJyZW50VXNlcnMubWFwKCh1c2VySWQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRtSWQgPSBDaGFubmVscy5nZXRETUZyb21Vc2VySWQodXNlcklkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coQ2hhbm5lbHMuZ2V0Q2hhbm5lbChkbUlkKSwgQ2hhbm5lbHMuZ2V0Q2hhbm5lbChkbUlkKS5yZWNpcGllbnRzLmluY2x1ZGVzKFwiMzc2NDkzMjYxNzU1MjUyNzM2XCIpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRtSWQgPT0gbnVsbCkgcmV0dXJuIG51bGxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEaXJlY3RNZXNzYWdlIGtleT17ZG1JZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbm5lbD17Q2hhbm5lbHMuZ2V0Q2hhbm5lbChkbUlkKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ3VycmVudENoYW5uZWxzLmdldENoYW5uZWxJZCgpID09PSBkbUlkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IDxUZXh0IHN0eWxlPXt7bWFyZ2luTGVmdDogXCI4cHhcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhlcmUgaXMgbm9ib2R5IGhlcmUgY3VycmVudGx5LiA8YSBvbkNsaWNrPXsoKSA9PiBvcGVuQ2F0ZWdvcnlTZXR0aW5ncyhjYXRlZ29yeSl9PkFkZCBhIG5ldyBwZXJzb248L2E+LlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvTW9kYWwuTW9kYWxSb290PlxyXG4gICAgICAgIDwvZGl2Pn0+XHJcbiAgICAgICAgICAgIHsocHJvcHMpID0+IDxkaXYgey4uLnByb3BzfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtqb2luQ2xhc3NlcyhjbGFzc2VzLkRNQnV0dG9ucy5jaGFubmVsLCAoc2VhcmNoQ2xhc3NOYW1lTW9kdWxlcyhcImNvbnRhaW5lci0zMkhXNXNcIikgYXMgYW55KS5jb250YWluZXIpfVxyXG4gICAgICAgICAgICAgICAgb25Db250ZXh0TWVudT17ZSA9PiB3ZWJwYWNrLkNvbnRleHRNZW51Lm9wZW5Db250ZXh0TWVudShlLCAoKSA9PiA8Q2F0ZWdvcnlDb250ZXh0TWVudSBjYXRlZ29yeT17Y2F0ZWdvcnl9IC8+KX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2pvaW5DbGFzc2VzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc2VzLkRNQnV0dG9ucy5pbnRlcmFjdGl2ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3Nlcy5JbnRlcmFjdGl2ZXMuaW50ZXJhY3RpdmUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzQ3VycmVudENoYW5uZWwgPyBqb2luQ2xhc3NlcyhjbGFzc2VzLkRNQnV0dG9ucy5pbnRlcmFjdGl2ZVNlbGVjdGVkLCBjbGFzc2VzLkludGVyYWN0aXZlcy5zZWxlY3RlZCkgOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzZXMuRE1CdXR0b25zLmxpbmtCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICApfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17am9pbkNsYXNzZXMoY2xhc3Nlcy5OYW1lcy5sYXlvdXQsIHN0eWxlcy5taW5pbWFsaXN0aWNWaWV3KX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4IGRpcmVjdGlvbj17RmxleC5EaXJlY3Rpb24uVkVSVElDQUx9IGNsYXNzTmFtZT17c3R5bGVzLm5hbWVBbmRVc2Vyc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBjb2xvcjogcGlubmVkRE1TLmdldENvbG9yKGNhdGVnb3J5KSwgZm9udFdlaWdodDogXCJib2xkXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NhdGVnb3J5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyFpc1N0cmVhbWVyTW9kZUVuYWJsZWQgJiYgc2V0dGluZ3MuZ2V0KFwibWluaW1hbC51c2VySWNvbnNcIiwgY29uc3RhbnRzLlNldHRpbmdzLkRlZmF1bHRTZXR0aW5ncy5NaW5pbWFsaXN0Vmlldy51c2VySWNvbnMpICYmIDxVc2VyU3VtbWFyeUl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPXtVU0VSX0lDT05fU0laRX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2Vycz17cGlubmVkRE1TLmdldFVzZXJzKGNhdGVnb3J5KS5tYXAodXNlcklkID0+IFVzZXJzLmdldFVzZXIodXNlcklkKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Qm9vbGVhbihwaW5nQ291bnQpICYmIDxOdW1iZXJCYWRnZSBjb3VudD17cGluZ0NvdW50fSAvPn1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj59XHJcbiAgICAgICAgPC9Qb3BvdXQ+XHJcbiAgICA8Lz5cclxufSIsImltcG9ydCB7IFJlYWN0LCBDb250ZXh0TWVudSBhcyBDb250ZXh0TWVudUhhbmRsZXIgfSBmcm9tIFwiaXR0YWkvd2VicGFja1wiXHJcbmltcG9ydCAqIGFzIHdlYnBhY2sgZnJvbSBcIml0dGFpL3dlYnBhY2tcIlxyXG5pbXBvcnQgeyBDb250ZXh0TWVudSwgRmxleCwgRGlzY29yZEljb24gfSBmcm9tIFwiaXR0YWkvY29tcG9uZW50c1wiXHJcbmltcG9ydCB7IFVzZXJzIH0gZnJvbSBcIml0dGFpL3N0b3Jlc1wiXHJcbmltcG9ydCBwaW5uZWRETVMgZnJvbSBcIi4uLy4uL2hhbmRsZXJzL3Bpbm5lZERNU1wiXHJcbmltcG9ydCB7IFVzZXJJRCB9IGZyb20gXCJpdHRhaVwiXHJcbmltcG9ydCBvcGVuQ2F0ZWdvcnlTZXR0aW5ncyBmcm9tIFwiLi4vLi4vdXRpbHMvb3BlbkNhdGVnb3J5U2V0dGluZ3NcIlxyXG4vL0B0cy1pZ25vcmVcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9BZGRVc2VyLnNjc3NcIlxyXG5cclxuY29uc3QgVXNlclN1bW1hcnlJdGVtID0gd2VicGFjay5maW5kQnlEaXNwbGF5TmFtZShcIlVzZXJTdW1tYXJ5SXRlbVwiKVxyXG5cclxuY29uc3QgVVNFUl9JQ09OX1NJWkUgPSAxNlxyXG5jb25zdCBNQVhfVVNFUlNfRElTUExBWSA9IDRcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChwcm9wczoge3VzZXJJZDogVXNlcklEfSkge1xyXG4gICAgcmV0dXJuIDxDb250ZXh0TWVudSBuYXZJZD17XCJwaW4tdXNlclwifSBvbkNsb3NlPXtDb250ZXh0TWVudUhhbmRsZXIuY2xvc2VDb250ZXh0TWVudX0+XHJcbiAgICAgICAgPENvbnRleHRNZW51Lk1lbnVHcm91cCBsYWJlbD1cIkFkZCB0byBjYXRlZ29yeVwiPlxyXG4gICAgICAgICAgICB7cGlubmVkRE1TLmdldENhdGVnb3JpZXMoKS5tYXAoY2F0ZWdvcnkgPT4gPENvbnRleHRNZW51Lk1lbnVJdGVtIGlkPXtgY2F0ZWdvcnktJHtjYXRlZ29yeX1gfVxyXG4gICAgICAgICAgICAgICAgbGFiZWw9ezxGbGV4PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnRleHR9IHN0eWxlPXt7IGNvbG9yOiBwaW5uZWRETVMuZ2V0Q29sb3IoY2F0ZWdvcnkpfX0+e2NhdGVnb3J5fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8VXNlclN1bW1hcnlJdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9e1VTRVJfSUNPTl9TSVpFfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXg9e01BWF9VU0VSU19ESVNQTEFZfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2Vycz17cGlubmVkRE1TLmdldFVzZXJzKGNhdGVnb3J5KS5zb3J0KCgpID0+IE1hdGgucmFuZG9tKCkgLSAwLjUpLm1hcCh1c2VySWQgPT4gVXNlcnMuZ2V0VXNlcih1c2VySWQpKX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9GbGV4Pn1cclxuXHJcbiAgICAgICAgICAgICAgICBhY3Rpb249eygpID0+IHBpbm5lZERNUy5hZGRVc2VyKGNhdGVnb3J5LCBwcm9wcy51c2VySWQpfVxyXG4gICAgICAgICAgICAvPil9XHJcbiAgICAgICAgPC9Db250ZXh0TWVudS5NZW51R3JvdXA+XHJcbiAgICAgICAgPENvbnRleHRNZW51Lk1lbnVTZXBhcmF0b3IgLz5cclxuICAgICAgICA8Q29udGV4dE1lbnUuTWVudUl0ZW0gaWQ9XCJjb25maWd1cmVcIlxyXG4gICAgICAgICAgICBsYWJlbD1cIkNvbmZpZ3VyZSBjYXRlZ29yaWVzXCJcclxuICAgICAgICAgICAgaWNvbj17KCkgPT4gPERpc2NvcmRJY29uIG5hbWU9XCJHZWFyXCIgdHlwZT1cImNvbnRleHRtZW51XCIvPn1cclxuICAgICAgICAgICAgYWN0aW9uPXtvcGVuQ2F0ZWdvcnlTZXR0aW5nc31cclxuICAgICAgICAvPlxyXG4gICAgPC9Db250ZXh0TWVudT5cclxufSIsImltcG9ydCAqIGFzIHBhdGNoZXIgZnJvbSBcIml0dGFpL3BhdGNoZXJcIlxyXG5pbXBvcnQgKiBhcyB3ZWJwYWNrIGZyb20gXCJpdHRhaS93ZWJwYWNrXCJcclxuY29uc3QgeyBSZWFjdCB9ID0gd2VicGFja1xyXG5pbXBvcnQgeyBDaGFubmVscywgQ3VycmVudENoYW5uZWxzIH0gZnJvbSBcIml0dGFpL3N0b3Jlc1wiXHJcbmltcG9ydCB7IGZpbmRJblJlYWN0VHJlZSwgc2VhcmNoQ2xhc3NOYW1lTW9kdWxlcyB9IGZyb20gXCJpdHRhaS91dGlsaXRpZXNcIlxyXG5pbXBvcnQgeyBEaXNjb3JkSWNvbiwgQ29udGV4dE1lbnUgfSBmcm9tIFwiaXR0YWkvY29tcG9uZW50c1wiXHJcbmltcG9ydCAqIGFzIHNldHRpbmdzIGZyb20gXCJpdHRhaS9zZXR0aW5nc1wiXHJcbmltcG9ydCBwaW5uZWRETVMsIHsgdXNlTGlzdFVwZGF0ZSB9IGZyb20gXCIuLi9oYW5kbGVycy9waW5uZWRETVNcIlxyXG5pbXBvcnQgeyBVc2VyT2JqZWN0IH0gZnJvbSBcIml0dGFpXCI7XHJcbmltcG9ydCAqIGFzIGNvbnN0YW50cyBmcm9tIFwiLi4vY29uc3RhbnRzXCJcclxuXHJcbi8vQHRzLWlnbm9yZVxyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL2RtYnV0dG9uLnNjc3NcIlxyXG5pbXBvcnQgam9pbkNsYXNzZXMgZnJvbSBcIi4uL3V0aWxzL2pvaW5DbGFzc2VzXCJcclxuaW1wb3J0IEFkZFVzZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ29udGV4dE1lbnVzL0FkZFVzZXJcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xyXG4gICAgcGF0Y2hlci5hZnRlcihcIkRNQnV0dG9uUGF0Y2hcIiwgd2VicGFjay5maW5kQnlEaXNwbGF5TmFtZShcIlByaXZhdGVDaGFubmVsXCIpLnByb3RvdHlwZSwgXCJyZW5kZXJcIiwgKF8sIHJlcywgX3RoaXMpID0+IHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh7IF90aGlzLCByZXMgfSlcclxuICAgICAgICBjb25zdCB1c2VyOiBVc2VyT2JqZWN0ID0gX3RoaXMucHJvcHMudXNlclxyXG5cclxuICAgICAgICBjb25zdCBpc0FkZGVkID0gcGlubmVkRE1TLmlzVXNlckFkZGVkKHVzZXIuaWQpXHJcblxyXG4gICAgICAgIGNvbnN0IG9nQ2hpbGRyZW46IEZ1bmN0aW9uID0gcmVzLnByb3BzLmNoaWxkcmVuXHJcbiAgICAgICAgaWYob2dDaGlsZHJlbiA9PSBudWxsKSByZXR1cm5cclxuICAgICAgICByZXMucHJvcHMuY2hpbGRyZW4gPSBmdW5jdGlvbiguLi5hcmdzOiBhbnkpIHtcclxuICAgICAgICAgICAgY29uc3QgcmV0ID0gb2dDaGlsZHJlbi5hcHBseSh0aGlzLCBhcmdzKVxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXQpXHJcblxyXG4gICAgICAgICAgICByZXQucHJvcHMuY2xhc3NOYW1lICs9IGAgJHtzdHlsZXMucGluSG92ZXJIYW5kbGVyfWBcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IEludGVyYWN0aXZlID0gcmV0LnByb3BzLmNoaWxkcmVuIGFzIHtwcm9wczoge2NoaWxkcmVuOiBbYW55LCBhbnldfX1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmICh1c2VyICYmICF1c2VyLmJvdCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2xvc2VJbmRleCA9IEludGVyYWN0aXZlLnByb3BzLmNoaWxkcmVuLmZpbmRJbmRleChlID0+IGUudHlwZS5kaXNwbGF5TmFtZSA9PT0gXCJDbG9zZUJ1dHRvblwiKVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChpc0FkZGVkICYmIGNsb3NlSW5kZXgpIHtcclxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgSW50ZXJhY3RpdmUucHJvcHMuY2hpbGRyZW5bY2xvc2VJbmRleF1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoc2V0dGluZ3MuZ2V0KFwicGluSWNvblwiLCBjb25zdGFudHMuU2V0dGluZ3MuRGVmYXVsdFNldHRpbmdzLlBJTl9JQ09OKSkgeyAgICBcclxuICAgICAgICAgICAgICAgICAgICBJbnRlcmFjdGl2ZS5wcm9wcy5jaGlsZHJlbi5zcGxpY2UoMSwgMCwgPGRpdiBjbGFzc05hbWU9e2pvaW5DbGFzc2VzKHN0eWxlcy5waW5CdXR0b24sIGlzQWRkZWQgPyBzdHlsZXMubG9uZWx5IDogXCJcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhDb250ZXh0TWVudSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc0FkZGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGlubmVkRE1TLnJlbW92ZVVzZXIocGlubmVkRE1TLmdldFVzZXJDYXRlZ29yeSh1c2VyLmlkKSEsIHVzZXIuaWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdlYnBhY2suQ29udGV4dE1lbnUub3BlbkNvbnRleHRNZW51KGUsICgpID0+IDxBZGRVc2VyIHVzZXJJZD17dXNlci5pZH0vPilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHshaXNBZGRlZCA/IDxEaXNjb3JkSWNvbiBuYW1lPVwiUGluTGF5ZXJcIiAvPiA6IDxEaXNjb3JkSWNvbiBuYW1lPVwiVW5waW5MYXllclwiIC8+fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PilcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICByZXR1cm4gcmV0XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufSIsImltcG9ydCAqIGFzIHBhdGNoZXIgZnJvbSBcIml0dGFpL3BhdGNoZXJcIlxyXG5pbXBvcnQgKiBhcyB3ZWJwYWNrIGZyb20gXCJpdHRhaS93ZWJwYWNrXCJcclxuaW1wb3J0IHsgUmVhY3QgfSBmcm9tIFwiaXR0YWkvd2VicGFja1wiXHJcbmltcG9ydCAqIGFzIHNldHRpbmdzIGZyb20gXCJpdHRhaS9zZXR0aW5nc1wiXHJcbmltcG9ydCB7IFVzZXJzLCBBY3Rpdml0aWVzLCBTdGF0dXMsIFVzZXJTZXR0aW5ncyB9IGZyb20gXCJpdHRhaS9zdG9yZXNcIlxyXG5pbXBvcnQgdHlwZSB7IFVzZXJPYmplY3QgfSBmcm9tIFwiaXR0YWlcIlxyXG5pbXBvcnQgeyBCdXR0b24sIERpc2NvcmRJY29uLCBGbGV4LCBTZWFyY2hCYXIsIFRleHRJbnB1dCwgVG9vbHRpcENvbnRhaW5lciB9IGZyb20gXCJpdHRhaS9jb21wb25lbnRzXCJcclxuaW1wb3J0IHBpbm5lZERNUyBmcm9tIFwiLi4vaGFuZGxlcnMvcGlubmVkRE1TXCJcclxuaW1wb3J0IG9wZW5DYXRlZ29yeVNldHRpbmdzIGZyb20gXCIuLi91dGlscy9vcGVuQ2F0ZWdvcnlTZXR0aW5nc1wiXHJcbmltcG9ydCBqb2luQ2xhc3NlcyBmcm9tIFwiLi4vdXRpbHMvam9pbkNsYXNzZXNcIlxyXG5pbXBvcnQgQ2F0ZWdvcnlDb250ZXh0TWVudSBmcm9tIFwiLi4vY29tcG9uZW50cy9Db250ZXh0TWVudXMvQ2F0ZWdvcnlcIlxyXG5cclxuLy8gc2h1bGtlciBib3ggbW9uc3RlciAtIGZXaGlwXHJcbmNvbnN0IHsgSXRlbSB9ID0gd2VicGFjay5maW5kQnlQcm9wcyhcIkl0ZW1cIilcclxuY29uc3QgeyBEaXZpZGVyIH0gPSB3ZWJwYWNrLmZpbmQobSA9PiBtPy5kZWZhdWx0Py5kaXNwbGF5TmFtZSA9PT0gXCJIZWFkZXJCYXJcIilcclxuY29uc3QgUGVvcGxlTGlzdFNlY3Rpb25lZE5vbkxhenkgPSB3ZWJwYWNrLmZpbmRCeURpc3BsYXlOYW1lKCdQZW9wbGVMaXN0U2VjdGlvbmVkTm9uTGF6eScpXHJcbmNvbnN0IEZyaWVuZFJvdyA9IHdlYnBhY2suZmluZEJ5RGlzcGxheU5hbWUoJ0ZyaWVuZFJvdycpXHJcbmNvbnN0IFNlY3Rpb25UaXRsZSA9IHdlYnBhY2suZmluZEJ5RGlzcGxheU5hbWUoXCJTZWN0aW9uVGl0bGVcIilcclxuY29uc3QgeyBFbXB0eVN0YXRlSW1hZ2UsIGRlZmF1bHQ6IEVtcHR5U3RhdGUsIEVtcHR5U3RhdGVUZXh0IH0gPSB3ZWJwYWNrLmZpbmRCeVByb3BzKFwiRW1wdHlTdGF0ZUltYWdlXCIpXHJcbmNvbnN0IHsgaWNvbldyYXBwZXIsIGNsaWNrYWJsZSwgaWNvbiB9ID0gd2VicGFjay5maW5kQnlQcm9wcyhcImNhcmV0XCIsIFwiY2xpY2thYmxlXCIpXHJcbmNvbnN0IHsgYnV0dG9uIH0gPSB3ZWJwYWNrLmZpbmRCeVByb3BzKFwiZnJpZW5kc0VtcHR5XCIpXHJcbmNvbnN0IHsgc2VhcmNoQmFyIH0gPSB3ZWJwYWNrLmZpbmRCeVByb3BzKFwiZW1wdHlTdGF0ZUNvbnRhaW5lclwiKVxyXG5cclxuY29uc3QgSURFTlRJRklFUiA9IFwiRE1DQVRFR09SSUVTXCJcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTXlzdGVyaW91c09iamVjdCB7XHJcbiAgICBhY3Rpdml0aWVzOiBBcnJheTxhbnk+LFxyXG4gICAgaXNNb2JpbGU6IGJvb2xlYW4sXHJcbiAgICBrZXk6IHN0cmluZyxcclxuICAgIG5pY2tuYW1lOiBzdHJpbmcsXHJcbiAgICBzdGF0dXM6IFwib25saW5lXCIgfCBcImRuZFwiIHwgXCJpZGxlXCIgfCBcInN0cmVhbWluZ1wiLFxyXG4gICAgdHlwZTogMSwgLy93aGF0cyBkaXMgdGJoXHJcbiAgICB1c2VyOiBVc2VyT2JqZWN0LFxyXG59XHJcblxyXG4vKlxyXG4gICAgTUVUSE9EOlxyXG4gICAgVGhlIEZyaWVuZHMgbGlzdCAoY2FsbGVkIGFzIFwiUGVvcGxlTGlzdFwiKSB0YWtlcyB0cmFjayBvZiB0aGUgdGFicyBieSBhIElEIGFuZCByZW5kZXJzIHRoZSBVSSBiYXNlZCBvbiB0aGF0IElELiBUaGUgSGVhZGVyQmFyIGRvZXMgdGhlXHJcbiAgICBqb2Igb2YgcmVuZGVyaW5nIHRoZSB0YWIgcGlsbHMgYW5kIG1ha2luZyB0aGUgZnVuY3Rpb25hbGl0eSBvZiBjaGFuZ2luZyB0aGVzZSBJRHMuIFRoZSBwaWxscyBhcmUgbWFudWFsbHkgYWRkZWQgYnkgdGhlIGRldmVsb3BlciwgYW5kXHJcbiAgICB0aGUgY2xpY2sgZXZlbnQgaGFuZGxpbmcgaXMgZG9uZSBieSB0aGUgXCJJdGVtXCIgY29tcG9uZW50LCB3aGlsZSwgYWdhaW4sIHRoZSBIZWFkZXJCYXIgY2hhbmdlcyB0aGUgSURzLiBOZWl0aGVyIHRoZSBQZW9wbGVMaXN0IGFuZCB0aGVcclxuICAgIEhlYWRlckJhciBzcGVjaWZpZXMgd2hpY2ggdGFicyBzaG91bGQgZXhpc3QgYW5kIHdobyBpcyB0aGUgaW1wb3N0b3IsIG1lYW5pbmcgdGhhdCBhIHBpbGwgd2l0aCBhIGN1c3RvbSBJRCBjYW4gYmUgcHVzaGVkIGFuZCBldmVyeXRoaW5nXHJcbiAgICB3aWxsIGdvIGZpbmUgbGlrZSBtYWdpYy5cclxuICAgIEJ5IGRlZmF1bHQsIGlmIGFuIGludmFsaWQgSUQgaXMgaW5zZXJ0ZWQsIFBlb3BsZUxpc3Qgd2lsbCByZW5kZXIgdGhlIFwiQWxsIGZyaWVuZHNcIiB0YWIsIGJ1dCBpdCB3aWxsIHN0aWxsIGlkZW50aWZ5IGFzIHRoYXQgZmFrZSBJRC4gXHJcbiAgICBUaGF0IG1lYW5zIHdlIGNhbiBkZWxldGUgdGhhdCByZW5kZXIgYW5kIHJlcGxhY2UgYnkgb3VyIG93biByZW5kZXJpbmcsIHdpdGhvdXQgbXVjaCBvZiBhIGlzc3VlLlxyXG4qL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XHJcbiAgICBwYXRjaGVyLmFmdGVyKFwiRnJpZW5kc0hlYWRlclBhdGNoXCIsIHdlYnBhY2suZmluZChtID0+IG0/LmRlZmF1bHQ/LmRpc3BsYXlOYW1lID09PSBcIkhlYWRlckJhckNvbnRhaW5lclwiKSwgXCJkZWZhdWx0XCIsIChbcHJvcHNdLCByZXMsIF90aGlzKSA9PiB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2cocHJvcHMpXHJcbiAgICAgICAgaWYoXHJcbiAgICAgICAgICAgIEJvb2xlYW4ocHJvcHMuY2hhbm5lbElkKSB8fCAvLyBjaGFubmVsXHJcbiAgICAgICAgICAgICghfnByb3BzLmNsYXNzTmFtZS5pbmRleE9mKFwidGhlbWUtXCIpKSAvL25vdCBmcmllbmRzIGxpc3QgdGFiXHJcbiAgICAgICAgKSByZXR1cm5cclxuXHJcblxyXG4gICAgICAgIGNvbnN0IE9nVGFiQmFyQ2hpbGRyZW5zID0gcHJvcHMuY2hpbGRyZW5bM10ucHJvcHMuY2hpbGRyZW5cclxuICAgICAgICBjb25zdCBBZGRGcmllbmRCdXR0b24gPSBPZ1RhYkJhckNoaWxkcmVuc1tPZ1RhYkJhckNoaWxkcmVucy5sZW5ndGggLSAxXVxyXG4gICAgICAgIGRlbGV0ZSBPZ1RhYkJhckNoaWxkcmVuc1tPZ1RhYkJhckNoaWxkcmVucy5sZW5ndGggLSAxXVxyXG4gICAgICAgIGNvbnN0IE5ld1RhYkJhckNoaWxkcmVucyA9IFtdXHJcbiAgICAgICAgZm9yIChjb25zdCBjYXRlZ29yeU5hbWUgb2YgcGlubmVkRE1TLmdldENhdGVnb3JpZXMoKSkge1xyXG4gICAgICAgICAgICBOZXdUYWJCYXJDaGlsZHJlbnMucHVzaCg8SXRlbVxyXG4gICAgICAgICAgICAgICAgaWQ9e2Ake0lERU5USUZJRVJ9LSR7Y2F0ZWdvcnlOYW1lfWB9XHJcbiAgICAgICAgICAgICAgICBjb2xvcj17cGlubmVkRE1TLmdldENvbG9yKGNhdGVnb3J5TmFtZSl9XHJcbiAgICAgICAgICAgICAgICBvbkNvbnRleHRNZW51PXsoZTogUmVhY3QuTW91c2VFdmVudDxIVE1MRGl2RWxlbWVudCwgTW91c2VFdmVudD4pID0+IHdlYnBhY2suQ29udGV4dE1lbnUub3BlbkNvbnRleHRNZW51KGUsICgpID0+IDxDYXRlZ29yeUNvbnRleHRNZW51IGNhdGVnb3J5PXtjYXRlZ29yeU5hbWV9IC8+KX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge2NhdGVnb3J5TmFtZX1cclxuICAgICAgICAgICAgPC9JdGVtPilcclxuICAgICAgICB9XHJcbiAgICAgICAgcHJvcHMuY2hpbGRyZW5bM10ucHJvcHMuY2hpbGRyZW4gPSBbLi4uT2dUYWJCYXJDaGlsZHJlbnMsIDxEaXZpZGVyIC8+LCAuLi5OZXdUYWJCYXJDaGlsZHJlbnMsIDxEaXZpZGVyIC8+LCBBZGRGcmllbmRCdXR0b25dXHJcbiAgICB9KVxyXG5cclxuICAgIHBhdGNoZXIuYWZ0ZXIoXCJGcmllbmRzTGlzdFBhdGNoXCIsIHdlYnBhY2suZmluZChtID0+IG0/LmRlZmF1bHQ/LmRpc3BsYXlOYW1lID09PSBcIlBlb3BsZUxpc3RcIiksIFwiZGVmYXVsdFwiLCAoW3Byb3BzXTogW3sgc2VjdGlvbkZpbHRlcjogc3RyaW5nfV0sIHJlcywgX3RoaXMpID0+IHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhwcm9wcywgcmVzLCBfdGhpcylcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXMucHJvcHMuY2hpbGRyZW5bMl0ucHJvcHMuc3RhdHVzU2VjdGlvbnMpXHJcbiAgICAgICAgaWYgKH5wcm9wcy5zZWN0aW9uRmlsdGVyLmluZGV4T2YoSURFTlRJRklFUikpIHtcclxuICAgICAgICAgICAgY29uc3QgY2F0ZWdvcnkgPSBwcm9wcy5zZWN0aW9uRmlsdGVyLnN1YnN0cmluZyhJREVOVElGSUVSLmxlbmd0aCArIDEpXHJcblxyXG4gICAgICAgICAgICByZXMucHJvcHMuY2hpbGRyZW4gPSA8RE1GcmllbmRzUmVuZGVyIHsuLi57IGNhdGVnb3J5IH19IGtleT17Y2F0ZWdvcnl9Lz5cclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIC8vIGZhaWxlZCBhdHRlbXB0IHRvIHVzZSB0aGUgb2cgc2VhcmNoXHJcbiAgICAvLyBwYXRjaGVyLmFmdGVyKFwiR2V0U3RhdGVQYXRjaFwiLCB3ZWJwYWNrLmZpbmRCeVByb3BzKFwiUm93XCIsIFwiUm93c1wiLCBcImRlZmF1bHRcIikuZGVmYXVsdCwgXCJnZXRTdGF0ZVwiLCAoW3Byb3BzXSwgcmVzLCBfdGhpcykgPT4ge1xyXG4gICAgLy8gICAgIGlmIChyZXMuc2VjdGlvbiA9PT0gXCJNRUVQXCIpIHJlcy5yb3dzLl9yb3dzID0gW3tcclxuICAgIC8vICAgICAgICAgYWN0aXZpdGllczogQWN0aXZpdGllcy5nZXRBY3Rpdml0aWVzKFVzZXJzLmdldEN1cnJlbnRVc2VyKCkuaWQpLFxyXG4gICAgLy8gICAgICAgICBhcHBsaWNhdGlvblN0cmVhbTogbnVsbCxcclxuICAgIC8vICAgICAgICAgaXNNb2JpbGU6IFVzZXJzLmdldEN1cnJlbnRVc2VyKCkubW9iaWxlLFxyXG4gICAgLy8gICAgICAgICBrZXk6IFVzZXJzLmdldEN1cnJlbnRVc2VyKCkuaWQsXHJcbiAgICAvLyAgICAgICAgIG5pY2tuYW1lOiB1bmRlZmluZWQsXHJcbiAgICAvLyAgICAgICAgIHN0YXR1czogU3RhdHVzLmdldFN0YXR1cyhVc2Vycy5nZXRDdXJyZW50VXNlcigpLmlkKSxcclxuICAgIC8vICAgICAgICAgdHlwZTogMSxcclxuICAgIC8vICAgICAgICAgdXNlcjogVXNlcnMuZ2V0Q3VycmVudFVzZXIoKSxcclxuICAgIC8vICAgICB9XVxyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKHsgcHJvcHMsIHJlcyB9KVxyXG4gICAgLy8gfSlcclxufVxyXG5cclxuaW50ZXJmYWNlIEZyaWVuZHNSZW5kZXJQcm9wcyB7XHJcbiAgICBjYXRlZ29yeTogc3RyaW5nXHJcbn1cclxuY29uc3QgRE1GcmllbmRzUmVuZGVyID0gKHsgY2F0ZWdvcnkgfTogRnJpZW5kc1JlbmRlclByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBbc2VhcmNoLCBzZXRTZWFyY2hdID0gUmVhY3QudXNlU3RhdGUoXCJcIilcclxuICAgIGNvbnN0IHVzZXJJRHMgPSBSZWFjdC51c2VNZW1vKCgpID0+IHBpbm5lZERNUy5nZXRVc2VycyhjYXRlZ29yeSksIFtjYXRlZ29yeV0pXHJcbiAgICBjb25zdCBzZWFyY2hlZFVzZXJJRHMgPSBSZWFjdC51c2VNZW1vKCgpID0+IHVzZXJJRHMuZmlsdGVyKGlkID0+IH5Vc2Vycy5nZXRVc2VyKGlkKS51c2VybmFtZS50b0xvd2VyQ2FzZSgpLmluZGV4T2Yoc2VhcmNoLnRvTG93ZXJDYXNlKCkpKSwgW3NlYXJjaF0pXHJcblxyXG4gICAgaWYgKHVzZXJJRHMubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIDw+XHJcbiAgICAgICAgICAgIDxTZWFyY2hCYXJcclxuICAgICAgICAgICAgICAgIHF1ZXJ5PXtzZWFyY2h9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17c2V0U2VhcmNofVxyXG4gICAgICAgICAgICAgICAgb25DbGVhcj17KCkgPT4gc2V0U2VhcmNoKFwiXCIpfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzZWFyY2hCYXJ9XHJcbiAgICAgICAgICAgICAgICBzaXplPXtTZWFyY2hCYXIuU2l6ZXMuTUVESVVNfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPFNlY3Rpb25UaXRsZSB0aXRsZT17PEZsZXg+XHJcbiAgICAgICAgICAgICAgICAgICAgPGIgc3R5bGU9e3sgY29sb3I6IHBpbm5lZERNUy5nZXRDb2xvcihjYXRlZ29yeSksIGZsZXhHcm93OiAxIH19PntjYXRlZ29yeX0g4oCTIHtzZWFyY2hlZFVzZXJJRHMubGVuZ3RofTwvYj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXBDb250YWluZXIgdGV4dD1cIkFkZCBhIG5ldyBwZXJzb25cIiBwb3NpdGlvbj1cImJvdHRvbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17am9pbkNsYXNzZXMoaWNvbldyYXBwZXIsIGNsaWNrYWJsZSl9IG9uQ2xpY2s9eygpID0+IG9wZW5DYXRlZ29yeVNldHRpbmdzKGNhdGVnb3J5KX0gc3R5bGU9e3sgd2lkdGg6IFwiMTZweFwiLCBoZWlnaHQ6IFwiMTZweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPERpc2NvcmRJY29uIG5hbWU9XCJQZXJzb25BZGRcIiB0eXBlPVwibm9uZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcENvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDwvRmxleD59IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAge3NlYXJjaGVkVXNlcklEcy5sZW5ndGggIT09IDAgPyA8UGVvcGxlTGlzdFNlY3Rpb25lZE5vbkxhenlcclxuICAgICAgICAgICAgICAgIHJlbmRlclJvdz17KG15c3RlcmlvdXNPYmplY3Q6IE15c3RlcmlvdXNPYmplY3QpID0+IDxGcmllbmRSb3cgey4uLk9iamVjdC5hc3NpZ24oe30sIG15c3RlcmlvdXNPYmplY3QsIHtpc0ZvY3VzZWQ6IHRydWV9KX0gLz59XHJcbiAgICAgICAgICAgICAgICAvLyBzZWFyY2hRdWVyeT17XCJrXCJ9IC8vZm9yIHNvbWUgcmVhc29uIHRoaXMgZG9lcyBub3Qgd29ya1xyXG4gICAgICAgICAgICAgICAgc3RhdHVzU2VjdGlvbnM9e1tcclxuICAgICAgICAgICAgICAgICAgICBzZWFyY2hlZFVzZXJJRHMubWFwKHVzZXJJZCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHVzZXIgPSBVc2Vycy5nZXRVc2VyKHVzZXJJZCkgYXMgVXNlck9iamVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBtb2NrZWQgaWRlbnRpZmllci4gYWNjb3JkaW5nIHRvIGRldmlsYnJvICh5ZXMsIGl2ZSBhY3R1YWxseSBsaXN0ZW5lZCB0byBoaW0pIHRoZSBmcmllbmRzIGxpc3QgZmV0Y2hlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZpdGllczogQWN0aXZpdGllcy5nZXRBY3Rpdml0aWVzKHVzZXIuaWQpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNNb2JpbGU6IHVzZXIubW9iaWxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiB1c2VyLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmlja25hbWU6IHVzZXIudXNlcm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IFN0YXR1cy5nZXRTdGF0dXModXNlci5pZCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAxLCAvL3doYXRzIGRpcyB0YmhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXI6IHVzZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gYXMgTXlzdGVyaW91c09iamVjdFxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAvPiA6IDxFbXB0eVN0YXRlIHRoZW1lPXtVc2VyU2V0dGluZ3MudGhlbWV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxFbXB0eVN0YXRlSW1hZ2Ugey4uLntcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ3aWR0aFwiOiA0MjEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaGVpZ2h0XCI6IDIxOCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaWdodFNyY1wiOiBcIi9hc3NldHMvZmQ4NzlhMjg4MDdiNjZiMzhkNTRlN2RiNmVhMThhNjkuc3ZnXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGFya1NyY1wiOiBcIi9hc3NldHMvYjM2ZGU5ODBiMTc0ZDdiNzk4Yzg5ZjM1YzExNmU1YzYuc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxFbXB0eVN0YXRlVGV4dCBub3RlPXs8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBXdW1wdXMgbG9va2VkIGJ1dCBjb3VsZG4ndCBmaW5kIGFueW9uZSB3aXRoIHRoYXQgbmFtZSBpbiB0aGlzIGNhdGVnb3J5LlxyXG4gICAgICAgICAgICAgICAgICAgIDwvPn0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IG9wZW5DYXRlZ29yeVNldHRpbmdzKGNhdGVnb3J5KX0gY2xhc3NOYW1lPXtidXR0b259PkFkZCBhIHBlcnNvbiB3aXRoIHRoYXQgbmFtZTwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L0VtcHR5U3RhdGU+fVxyXG4gICAgICAgIDwvPlxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gPD5cclxuICAgICAgICAgICAgPEVtcHR5U3RhdGUgdGhlbWU9e1VzZXJTZXR0aW5ncy50aGVtZX0+XHJcbiAgICAgICAgICAgICAgICA8RW1wdHlTdGF0ZUltYWdlIHsuLi57XHJcbiAgICAgICAgICAgICAgICAgICAgXCJ3aWR0aFwiOiA0MTUsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJoZWlnaHRcIjogMjAwLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibGlnaHRTcmNcIjogXCIvYXNzZXRzLzM2YzlhMmZiN2QwNTkzYTU4MWE5MjM3MzEyMWMyODQ4LnN2Z1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZGFya1NyY1wiOiBcIi9hc3NldHMvYjM2YzcwNWY3OTBkYWQyNTM5ODFmMTg5MzA4NTAxNWEuc3ZnXCJcclxuICAgICAgICAgICAgICAgIH19IC8+XHJcbiAgICAgICAgICAgICAgICA8RW1wdHlTdGF0ZVRleHQgbm90ZT17PD5cclxuICAgICAgICAgICAgICAgICAgICBBcHBhcmVudGx5IHRoaXMgY2F0ZWdvcnkgZG9lcyBvbmx5IGhhdmUgV3VtcHVzLlxyXG4gICAgICAgICAgICAgICAgPC8+fSAvPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBvcGVuQ2F0ZWdvcnlTZXR0aW5ncyhjYXRlZ29yeSl9IGNsYXNzTmFtZT17YnV0dG9ufT5BZGQgcGVyc29uPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvRW1wdHlTdGF0ZT5cclxuICAgICAgICA8Lz5cclxuICAgIH1cclxufSIsImltcG9ydCB7IENoYW5uZWxJRCB9IGZyb20gXCJpdHRhaVwiXHJcbmltcG9ydCB7IENvbG9yVXRpbHMgfSBmcm9tIFwiaXR0YWkvd2VicGFja1wiXHJcbmltcG9ydCB7IENoYW5uZWxzLCBVc2VycyB9IGZyb20gXCJpdHRhaS9zdG9yZXNcIlxyXG5pbXBvcnQgeyBQaW5uZWRETVMgfSBmcm9tIFwiLi4vdHlwZXNcIlxyXG5cclxuaW50ZXJmYWNlIERCQ2F0ZWdvcnkge1xyXG4gICAgY29sbGFwc2VkOiBib29sZWFuXHJcbiAgICBjb2xvcjogW251bWJlciwgbnVtYmVyLCBudW1iZXIsIG51bWJlcl1cclxuICAgIGRtczogQ2hhbm5lbElEW11cclxuICAgIGlkOiBzdHJpbmdcclxuICAgIG5hbWU6IHN0cmluZ1xyXG4gICAgcG9zOiBudW1iZXJcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGZyb21EZXZpbGJyb1BpbkRNcyA9ICgpID0+IHtcclxuICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgY29uc3QgRGV2aWxicm9QaW5ETXNEYXRhID0gZ2xvYmFsVGhpcy5CZEFwaS5nZXREYXRhKFwiUGluRE1zXCIsIFwiYWxsXCIpXHJcbiAgICBjb25zdCBjaGFubmVsTGlzdCA9IERldmlsYnJvUGluRE1zRGF0YS5waW5uZWRbVXNlcnMuZ2V0Q3VycmVudFVzZXIoKS5pZF0uY2hhbm5lbExpc3RcclxuICAgIGNvbnNvbGUubG9nKE9iamVjdC52YWx1ZXMoY2hhbm5lbExpc3QpKVxyXG4gICAgbGV0IGNhdGVnb3J5OiBQaW5uZWRETVMgPSB7fVxyXG4gICAgZm9yIChjb25zdCBkYkNhdGVnb3J5IG9mIE9iamVjdC52YWx1ZXMoY2hhbm5lbExpc3QpIGFzIERCQ2F0ZWdvcnlbXSkge1xyXG4gICAgICAgIGNvbnN0IHVzZXJJRHMgPSBkYkNhdGVnb3J5LmRtc1xyXG4gICAgICAgICAgICAuZmlsdGVyKGNJZCA9PiBDaGFubmVscy5nZXRDaGFubmVsKGNJZCk/LnR5cGUgPT09IDEpIC8vdGhlID8gaXMgdG8gaWdub3JlIGludmFsaWQgSURzXHJcbiAgICAgICAgICAgIC5tYXAoY0lkID0+IENoYW5uZWxzLmdldENoYW5uZWwoY0lkKS5yZWNpcGllbnRzWzBdKVxyXG4gICAgICAgIGlmKHVzZXJJRHMubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5W2RiQ2F0ZWdvcnkubmFtZV0gPSB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogQ29sb3JVdGlscy5pbnQyaGV4KENvbG9yVXRpbHMucmdiMmludChgcmdiYSgke2RiQ2F0ZWdvcnkuY29sb3JbMF19LCAke2RiQ2F0ZWdvcnkuY29sb3JbMV19LCAke2RiQ2F0ZWdvcnkuY29sb3JbMl19LCAxKWApKSxcclxuICAgICAgICAgICAgICAgIHVzZXJzOiB1c2VySURzLFxyXG4gICAgICAgICAgICAgICAgc2hvdzogIWRiQ2F0ZWdvcnkuY29sbGFwc2VkXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY2F0ZWdvcnlcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGhhc1RoZW1FbmFibGVkID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwaW5ETXM6IEJvb2xlYW4oKGdsb2JhbFRoaXMgYXMgYW55KS5CZEFwaSkgJiYgQm9vbGVhbigoZ2xvYmFsVGhpcyBhcyBhbnkpLkJkQXBpLlBsdWdpbnMuaXNFbmFibGVkKFwiUGluRE1zXCIpKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgaGFzQW55T2ZUaGVQbHVnaW5zID0gKCkgPT4ge1xyXG4gICAgY29uc3QgcmVzdWx0cyA9IGhhc1RoZW1FbmFibGVkKClcclxuICAgIHJldHVybiByZXN1bHRzLnBpbkRNc1xyXG59IiwiaW1wb3J0ICogYXMgd2VicGFjayBmcm9tIFwiaXR0YWkvd2VicGFja1wiXHJcbmltcG9ydCB7IFJlYWN0IH0gZnJvbSBcIml0dGFpL3dlYnBhY2tcIlxyXG5pbXBvcnQgeyBNb2RhbCwgVGV4dCwgSGVhZGluZywgQnV0dG9uIH0gZnJvbSBcIml0dGFpL2NvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgTWFyZ2lucyB9IGZyb20gXCJpdHRhaS9jbGFzc2VzXCI7XHJcbmltcG9ydCAqIGFzIEltcG9ydGVyIGZyb20gXCIuLi8uLi9oYW5kbGVycy9pbXBvcnRGcm9tUGx1Z2luXCJcclxuaW1wb3J0IHBpbm5lZERNUyBmcm9tIFwiLi4vLi4vaGFuZGxlcnMvcGlubmVkRE1TXCI7XHJcblxyXG5jb25zdCB7IFNsaWRlcywgc3ByaW5nQ29uZmlnIH0gPSB3ZWJwYWNrLmZpbmRCeVByb3BzKFwiU2xpZGVcIilcclxuXHJcbmNvbnN0IFBhZ2VzID0ge1xyXG4gICAgU1dJVENIOiBcInN3aXRjaFwiLFxyXG4gICAgU1dJVENIX0RPTkU6IFwic3dpdGNoRG9uZVwiXHJcbn1cclxuXHJcbmNvbnN0IFdJRFRIID0gNDAwO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHsgdHJhbnNpdGlvblN0YXRlOiAxIHwgMiB8IDMsIG9uQ2xvc2U6ICgpID0+IHZvaWQgfVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZW51TW9kYWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHMsIHtwYWdlOiBzdHJpbmd9PiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogUHJvcHMgfCBSZWFkb25seTxQcm9wcz4pIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgcGFnZTogUGFnZXMuU1dJVENILFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgc2V0UGFnZShwYWdlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtwYWdlfSlcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIDxNb2RhbC5Nb2RhbFJvb3Qgc2l6ZT17TW9kYWwuTW9kYWxTaXplLkRZTkFNSUN9IHsuLi50aGlzLnByb3BzfT5cclxuICAgICAgICAgICAgPFNsaWRlc1xyXG4gICAgICAgICAgICAgICAgYWN0aXZlU2xpZGU9e3RoaXMuc3RhdGUucGFnZX1cclxuICAgICAgICAgICAgICAgIHNwcmluZ0NvbmZpZz17c3ByaW5nQ29uZmlnfVxyXG4gICAgICAgICAgICAgICAgd2lkdGg9e1dJRFRIfVxyXG4gICAgICAgICAgICAgICAgY2hpbGRyZW49e1tcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPXtQYWdlcy5TV0lUQ0h9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TW9kYWwuTW9kYWxIZWFkZXIgc2VwYXJhdG9yPXtmYWxzZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SGVhZGluZyB2YXJpYW50PVwiaGVhZGluZy1tZC9ub3JtYWxcIj5Td2l0Y2g/PC9IZWFkaW5nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L01vZGFsLk1vZGFsSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TW9kYWwuTW9kYWxDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgY2xhc3NOYW1lPXtNYXJnaW5zLm1hcmdpbkJvdHRvbTIwfT5JdCBzZWVtcyB0aGF0IHlvdSBoYXZlIHVzZWQgUGluRE1zIGJlZm9yZS4gRG8geW91IHdhbnQgdG8gc3dpdGNoIHRoZSB1c2VyIGxpc3QgdG8gdGhpcyBwbHVnaW4/PC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L01vZGFsLk1vZGFsQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1vZGFsLk1vZGFsRm9vdGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXthc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5zd2l0Y2goKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0UGFnZShQYWdlcy5TV0lUQ0hfRE9ORSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlN3aXRjaDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjb2xvcj17QnV0dG9uLkNvbG9ycy5XSElURX0gbG9vaz17QnV0dG9uLkxvb2tzLkxJTkt9IG9uQ2xpY2s9e3RoaXMucHJvcHMub25DbG9zZX0+Tm88L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Nb2RhbC5Nb2RhbEZvb3Rlcj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4sXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD17UGFnZXMuU1dJVENIX0RPTkV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TW9kYWwuTW9kYWxIZWFkZXIgc2VwYXJhdG9yPXtmYWxzZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SGVhZGluZyB2YXJpYW50PVwiaGVhZGluZy1tZC9ub3JtYWxcIj5Eb25lPC9IZWFkaW5nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L01vZGFsLk1vZGFsSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TW9kYWwuTW9kYWxDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgY2xhc3NOYW1lPXtNYXJnaW5zLm1hcmdpbkJvdHRvbTIwfT5UaGUgc3dpdGNoaW5nIHdhcyBkb25lIHN1Y2Vzc2Z1bGx5LiBXZSBjYW4gZGlzYWJsZSB0aGVtIGlmIHlvdSB3YW50PC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L01vZGFsLk1vZGFsQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1vZGFsLk1vZGFsRm9vdGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXthc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5kaXNhYmxlQWxsKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uQ2xvc2UoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+RGlzYWJsZTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjb2xvcj17QnV0dG9uLkNvbG9ycy5XSElURX0gbG9vaz17QnV0dG9uLkxvb2tzLkxJTkt9IG9uQ2xpY2s9e3RoaXMucHJvcHMub25DbG9zZX0+SSBhbSBmaW5lPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTW9kYWwuTW9kYWxGb290ZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIDwvTW9kYWwuTW9kYWxSb290PlxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHN3aXRjaCgpIHtcclxuICAgICAgICBpZiAoSW1wb3J0ZXIuaGFzVGhlbUVuYWJsZWQoKS5waW5ETXMpe1xyXG4gICAgICAgICAgICBjb25zdCBuZXdTZXR0aW5ncyA9IEltcG9ydGVyLmZyb21EZXZpbGJyb1BpbkRNcygpXHJcbiAgICAgICAgICAgIHBpbm5lZERNUy5zZXRSYXcobmV3U2V0dGluZ3MpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGRpc2FibGVBbGwoKSB7XHJcbiAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgaWYgKEltcG9ydGVyLmhhc1RoZW1FbmFibGVkKCkucGluRE1zKSBCZEFwaT8uUGx1Z2lucz8uZGlzYWJsZT8uKFwiUGluRE1zXCIpXHJcbiAgICB9XHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi90eXBlcy5kLnRzXCIgLz5cclxuXHJcbmltcG9ydCB7IFBsdWdpbiB9IGZyb20gXCJpdHRhaS9lbnRpdGllc1wiXHJcbmltcG9ydCAqIGFzIHBhdGNoZXIgZnJvbSBcIml0dGFpL3BhdGNoZXJcIlxyXG5pbXBvcnQgeyBzZWFyY2hDbGFzc05hbWVNb2R1bGVzIH0gZnJvbSBcIml0dGFpL3V0aWxpdGllc1wiXHJcbmltcG9ydCAqIGFzIHdlYnBhY2sgZnJvbSBcIml0dGFpL3dlYnBhY2tcIlxyXG5pbXBvcnQgeyBSZWFjdCwgRGlzcGF0Y2hlciwgTW9kYWxBY3Rpb25zIH0gZnJvbSBcIml0dGFpL3dlYnBhY2tcIlxyXG5pbXBvcnQgKiBhcyBJdHRhaSBmcm9tIFwiaXR0YWlcIlxyXG5cclxuaW1wb3J0IFNldHRpbmdzIGZyb20gXCIuL2NvbXBvbmVudHMvU2V0dGluZ3NcIlxyXG5pbXBvcnQgcGF0Y2hEbUxpc3QgZnJvbSBcIi4vcGF0Y2hlcy9kbWxpc3RcIlxyXG5pbXBvcnQgcGF0Y2hEbUJ1dHRvbiBmcm9tIFwiLi9wYXRjaGVzL2RtYnV0dG9uXCJcclxuaW1wb3J0IHBhdGNoRnJpZW5kc1BhZ2UgZnJvbSBcIi4vcGF0Y2hlcy9mcmllbmRzbGlzdFwiXHJcbmltcG9ydCBwaW5uZWRETVMgZnJvbSBcIi4vaGFuZGxlcnMvcGlubmVkRE1TXCJcclxuaW1wb3J0ICogYXMgY29uc3RhbnRzIGZyb20gXCIuL2NvbnN0YW50c1wiXHJcbmltcG9ydCBTZXR0aW5nc1N3aXRjaGVyIGZyb20gXCIuL2NvbXBvbmVudHMvU2V0dGluZ3NTd2l0Y2hlclwiXHJcbmltcG9ydCB7IGhhc0FueU9mVGhlUGx1Z2lucyB9IGZyb20gXCIuL2hhbmRsZXJzL2ltcG9ydEZyb21QbHVnaW5cIlxyXG5cclxubGV0IHZpc2liaWxpdHlTdG9yYWdlOiB7W2NhdGVnb3J5OiBzdHJpbmddOiBib29sZWFufSA9IHt9XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBETUZvbGRlcnMgZXh0ZW5kcyBQbHVnaW4ge1xyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTZXR0aW5nc1BhbmVsKCgpID0+IDxTZXR0aW5ncyAvPilcclxuICAgICAgICBcclxuICAgICAgICAvL0B0cy1pZ25vcmUgaW50ZXJuYWwgdXNhZ2Ugb25seVxyXG4gICAgICAgIGdsb2JhbFRoaXMuSXR0YWkgPSBJdHRhaVxyXG4gICAgICAgIFxyXG4gICAgICAgIHBhdGNoRG1MaXN0KClcclxuICAgICAgICBwYXRjaERtQnV0dG9uKClcclxuICAgICAgICBwYXRjaEZyaWVuZHNQYWdlKClcclxuXHJcbiAgICAgICAgdGhpcy5vcGVuU2V0dGluZ3NTd2l0Y2hlcigpXHJcblxyXG4gICAgICAgIERpc3BhdGNoZXIuc3Vic2NyaWJlKFwiU1RSRUFNRVJfTU9ERV9VUERBVEVcIiwgdGhpcy5vblN0cmVhbWVyTW9kZUNoYW5nZSlcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9wZW5TZXR0aW5nc1N3aXRjaGVyKCkge1xyXG4gICAgICAgIGlmKGhhc0FueU9mVGhlUGx1Z2lucygpKSBNb2RhbEFjdGlvbnMub3Blbk1vZGFsKChwcm9wcykgPT4gPFNldHRpbmdzU3dpdGNoZXIgey4uLnByb3BzfSAvPilcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uU3RyZWFtZXJNb2RlQ2hhbmdlKHt2YWx1ZX06IHt2YWx1ZTogYm9vbGVhbn0pIHtcclxuICAgICAgICBpZiAodGhpcy5zZXR0aW5ncy5nZXQoXCJzdHJlYW1lck1vZGVcIiwgY29uc3RhbnRzLlNldHRpbmdzLkRlZmF1bHRTZXR0aW5ncy5TVFJFQU1FUl9NT0RFKSlcclxuICAgICAgICBwaW5uZWRETVMuZ2V0Q2F0ZWdvcmllcygpLmZvckVhY2goY2F0ZWdvcnkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHZpc2liaWxpdHlTdG9yYWdlW2NhdGVnb3J5XSA9IHBpbm5lZERNUy5nZXRWaXNpYmlsaXR5KGNhdGVnb3J5KVxyXG4gICAgICAgICAgICAgICAgcGlubmVkRE1TLnNldFZpc2liaWxpdHkoY2F0ZWdvcnksIGZhbHNlKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcGlubmVkRE1TLnNldFZpc2liaWxpdHkoY2F0ZWdvcnksIHZpc2liaWxpdHlTdG9yYWdlW2NhdGVnb3J5XSA/PyBmYWxzZSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgRGlzcGF0Y2hlci5kaXJ0eURpc3BhdGNoKHsgdHlwZTogY29uc3RhbnRzLkRJU1BBVENIRVJfUElORE1TX0NIQU5HRV9MSVNUIH0pXHJcbiAgICB9XHJcblxyXG4gICAgc3RvcCgpIHtcclxuICAgICAgICBwYXRjaGVyLnVucGF0Y2hBbGwoKVxyXG4gICAgICAgIERpc3BhdGNoZXIudW5zdWJzY3JpYmUoXCJTVFJFQU1FUl9NT0RFX1VQREFURVwiLCB0aGlzLm9uU3RyZWFtZXJNb2RlQ2hhbmdlKVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IG1hbmlmZXN0IGFzIHBsdWdpbk1hbmlmZXN0IH0gZnJvbSBcIkBpdHRhaS9jb25maWdcIjtcclxuY29uc3Qge25hbWV9ID0gcGx1Z2luTWFuaWZlc3RcclxuXHJcbmNsYXNzIFdTTWFuYWdlciB7XHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgdGhpcy53cyA9IG5ldyBXZWJTb2NrZXQoJ3dzOi8vbG9jYWxob3N0OjMwMDAnKTtcclxuICAgICAgICB0aGlzLndzLmFkZEV2ZW50TGlzdGVuZXIoJ29wZW4nLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMud3Muc2VuZChgaWRlbnRpZnksJHtwcm9jZXNzLmVudi5DTElFTlRfTU9EfWApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgdGhpcy53cy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3JlY2VpdmVkOiAlcycsIGRhdGEuZGF0YSk7XHJcbiAgICAgICAgICAgIHRoaXMucGFyc2VNc2coZGF0YS5kYXRhKVxyXG4gICAgICAgIH0pO1xyXG4gICAgXHJcbiAgICBcclxuICAgICAgICB0aGlzLndzLmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2Vycm9yOiAlcycsIGRhdGEpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgXHJcbiAgICAgICAgdGhpcy53cy5hZGRFdmVudExpc3RlbmVyKCdjbG9zZScsIChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjbG9zZTogJXMnLCBkYXRhKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzdG9wICgpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcInN0b3BcIilcclxuICAgICAgICB0aGlzLndzLmNsb3NlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcGFyc2VNc2cobSkge1xyXG4gICAgICAgIGNvbnN0IG1zZyA9IG0uc3BsaXQoXCIsXCIpO1xyXG4gICAgICAgIHN3aXRjaCAobXNnWzBdKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJyZWxvYWRcIjpcclxuICAgICAgICAgICAgICAgIHJlbG9hZFBsdWdpbigpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufVxyXG5cclxubGV0IG1hbmFnZXI7XHJcblxyXG5leHBvcnQgY29uc3QgdmVyc2lvbiA9IFwiMS4wLjBcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0RGV2U2VydmVyICgpIHtcclxuICAgIG1hbmFnZXIgPSBuZXcgV1NNYW5hZ2VyKCk7XHJcbiAgICBtYW5hZ2VyLnN0YXJ0KCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzdG9wRGV2U2VydmVyKCkge1xyXG4gICAgbWFuYWdlci5zdG9wKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZWxvYWRQbHVnaW4oKSB7XHJcbiAgICBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9wbHVnaW4uanNcIikudGhlbihyID0+IHIudGV4dCgpKS50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgIGxldCBfX0lUVEFJX0RFVlNFUlZFUl9WRVJTSU9OX18gPSB2ZXJzaW9uO1xyXG4gICAgICAgIGxldCBfX0lUVEFJX0RFVlNFUlZFUl9JTlNUQU5DRV9fID0geyB2ZXJzaW9uLCBzdGFydERldlNlcnZlciwgc3RvcERldlNlcnZlciwgcmVsb2FkUGx1Z2luLCBsb2FkUGx1Z2luLCBtYW5hZ2VyIH07XHJcbiAgICAgICAgLy8gS2VlcCB0aGlzIGxvZyBzbyByb2xsdXAgZG9lc24ndCBkZWxldGUgdGhlc2UgdmFyaWFibGVzXHJcbiAgICAgICAgY29uc29sZS5kZWJ1ZyhcInJlbG9hZGluZyB1c2luZyBpbnN0YW5jZVwiLCBfX0lUVEFJX0RFVlNFUlZFUl9JTlNUQU5DRV9fLCBcInZlcnNpb25cIiwgX19JVFRBSV9ERVZTRVJWRVJfVkVSU0lPTl9fKVxyXG4gICAgICAgIGNvbnN0IGluc3RhbmNlID0gZXZhbChkYXRhKTtcclxuICAgIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkUGx1Z2luKHApIHtcclxuICAgIGxldCBtb2QgPSBwcm9jZXNzLmVudi5DTElFTlRfTU9EO1xyXG4gICAgXHJcbiAgICBzd2l0Y2ggKG1vZCkge1xyXG4gICAgICAgIGNhc2UgXCJnb29zZW1vZFwiOlxyXG4gICAgICAgICAgICB3aW5kb3cuZ29vc2Vtb2QubW9kdWxlc1tuYW1lXT8uZ29vc2Vtb2RIYW5kbGVycz8ub25SZW1vdmU/LigpO1xyXG4gICAgICAgICAgICB3aW5kb3cuZ29vc2Vtb2QubW9kdWxlc1tuYW1lXSA9IHA7XHJcbiAgICAgICAgICAgIHdpbmRvdy5nb29zZW1vZC5tb2R1bGVzW25hbWVdPy5nb29zZW1vZEhhbmRsZXJzPy5vbkltcG9ydD8uKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcInBvd2VyY29yZHYyXCI6XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cucG93ZXJjb3JkLnBsdWdpbk1hbmFnZXIudW5sb2FkKG5hbWUpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICAhZS50b1N0cmluZygpLnN0YXJ0c1dpdGgoXCJFcnJvcjogVHJpZWQgdG8gdW5sb2FkIGEgbm9uIGluc3RhbGxlZCBwbHVnaW4gKHVuZGVmaW5lZClcIikgJiYgY29uc29sZS5sb2coZSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBtYW5pZmVzdCA9IE9iamVjdC5hc3NpZ24oe1xyXG4gICAgICAgICAgICAgICAgYXBwTW9kZTogJ2FwcCcsXHJcbiAgICAgICAgICAgICAgICBkZXBlbmRlbmNpZXM6IFtdLFxyXG4gICAgICAgICAgICAgICAgb3B0aW9uYWxEZXBlbmRlbmNpZXM6IFtdXHJcbiAgICAgICAgICAgIH0sIHBsdWdpbk1hbmlmZXN0KVxyXG4gICAgICAgICAgICBwLnByb3RvdHlwZS5lbnRpdHlJRCA9IG5hbWU7XHJcbiAgICAgICAgICAgIHAucHJvdG90eXBlLm1hbmlmZXN0ID0gbWFuaWZlc3Q7XHJcbiAgICAgICAgICAgIHdpbmRvdy5wb3dlcmNvcmQucGx1Z2luTWFuYWdlci5wbHVnaW5zLnNldChuYW1lLCBuZXcgcCgpKTtcclxuICAgICAgICAgICAgd2luZG93LnBvd2VyY29yZC5wbHVnaW5NYW5hZ2VyLmxvYWQobmFtZSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgKiBhcyBEZXZDbGllbnQgZnJvbSBcIi4vY2xpZW50LmpzXCI7XHJcbmxldCBoYXNEZXZTZXJ2ZXIgPSBmYWxzZTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkRGV2U2VydmVyKCkge1xyXG4gICAgaWYgKHByb2Nlc3MuZW52LkRFVl9NT0RFID09IFwidHJ1ZVwiKSB7XHJcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52LkNMSUVOVF9NT0QgPT09IFwiYmV0dGVyZGlzY29yZFwiKSByZXR1cm5cclxuICAgICAgICBoYXNEZXZTZXJ2ZXIgPSB0cnVlO1xyXG4gICAgICAgIHRyeSB7IF9fSVRUQUlfREVWU0VSVkVSX1ZFUlNJT05fXzsgfSBjYXRjaCAoXykgeyBjb25zb2xlLmxvZyhcIm5vIHNlcnZlclwiKTsgaGFzRGV2U2VydmVyID0gZmFsc2U7IH0gLy8gY2hlY2sgZm9yIHZhcmlhYmxlLCBqcyBpcyB3ZWlyZFxyXG4gICAgICAgIGNvbnN0IHZlcnNpb24gPSBEZXZDbGllbnQudmVyc2lvblxyXG4gICAgICAgIGlmIChoYXNEZXZTZXJ2ZXIgJiYgX19JVFRBSV9ERVZTRVJWRVJfVkVSU0lPTl9fICE9PSB2ZXJzaW9uKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVXBncmFkaW5nIGRldiBzZXJ2ZXIgY2xpZW50XCIpXHJcbiAgICAgICAgICAgIF9fSVRUQUlfREVWU0VSVkVSX0lOU1RBTkNFX18uc3RvcERldlNlcnZlcigpXHJcbiAgICAgICAgICAgIGhhc0RldlNlcnZlciA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaGFzRGV2U2VydmVyKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVXNpbmcgZXhpc3RpbmcgZGV2IHNlcnZlciBjbGllbnRcIilcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFoYXNEZXZTZXJ2ZXIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJMb2FkaW5nIGRldiBzZXJ2ZXIgY2xpZW50XCIpXHJcbiAgICAgICAgICAgRGV2Q2xpZW50LmRlZmF1bHQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsb2FkRGV2UGx1Z2luKHApIHtcclxuICAgIGlmIChwcm9jZXNzLmVudi5ERVZfTU9ERSA9PSBcInRydWVcIikge1xyXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5DTElFTlRfTU9EID09PSBcImJldHRlcmRpc2NvcmRcIikgcmV0dXJuXHJcbiAgICAgICAgaWYgKGhhc0RldlNlcnZlcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkxvYWRpbmcgdXNpbmcgZXhpc3RpbmcgZGV2IHNlcnZlciBjbGllbnRcIilcclxuICAgICAgICAgICAgX19JVFRBSV9ERVZTRVJWRVJfSU5TVEFOQ0VfXy5sb2FkUGx1Z2luKHApXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJMb2FkaW5nIHBsdWdpbiB1c2luZyBuZXcgZGV2IHNlcnZlciBjbGllbnRcIilcclxuICAgICAgICAgICAgRGV2Q2xpZW50LmxvYWRQbHVnaW4ocCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IEJEUGx1Z2luIGZyb20gXCIuLi9lbnRpdGllcy9CRFBsdWdpblwiO1xyXG5pbXBvcnQgR01QbHVnaW4gZnJvbSBcIi4uL2VudGl0aWVzL0dNUGx1Z2luXCI7XHJcbmltcG9ydCBQQ3YyUGx1Z2luIGZyb20gXCIuLi9lbnRpdGllcy9QQ3YyUGx1Z2luXCI7XHJcbmltcG9ydCB7IHNldEluc3RhbmNlIH0gZnJvbSBcIi4uL3NldHRpbmdzXCI7XHJcbmltcG9ydCAqIGFzIENoYW5nZWxvZ0hhbmRsZXIgZnJvbSBcIi4uL2NoYW5nZWxvZ1wiO1xyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCBwbHVnaW5DbGFzcyBmcm9tIFwiQGl0dGFpL3BsdWdpblwiO1xyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCAqIGFzIGNvbmZpZyBmcm9tIFwiQGl0dGFpL2NvbmZpZ1wiO1xyXG5pbXBvcnQgeyB1bnBhdGNoQWxsIH0gZnJvbSBcIi4uL3BhdGNoZXJcIjtcclxuaW1wb3J0IHsgbG9hZERldlBsdWdpbiwgbG9hZERldlNlcnZlciB9IGZyb20gXCIuLi9kZXZjbGllbnRcIjtcclxuaWYgKHByb2Nlc3MuZW52LkRFVl9NT0RFID09IFwidHJ1ZVwiKSBsb2FkRGV2U2VydmVyKCk7XHJcblxyXG5sZXQgSXR0YWlQbHVnaW4gPSBjbGFzcyBJdHRhaVBsdWdpbiBleHRlbmRzICgoKSA9PiB7XHJcbiAgICAvLyBzd2l0Y2ggKHByb2Nlc3MuZW52LkNMSUVOVF9NT0QpIHtcclxuICAgIC8vICAgICBjYXNlIFwicG93ZXJjb3JkdjJcIjpcclxuICAgIC8vICAgICAgICAgcmV0dXJuIFBDdjJQbHVnaW5cclxuICAgIC8vICAgICBjYXNlIFwiYmV0dGVyZGlzY29yZFwiOlxyXG4gICAgLy8gICAgICAgICByZXR1cm4gQkRQbHVnaW5cclxuICAgIC8vICAgICBjYXNlIFwiZ29vc2Vtb2RcIjpcclxuICAgIC8vICAgICAgICAgcmV0dXJuIEdNUGx1Z2luXHJcbiAgICAvLyAgICAgZGVmYXVsdDpcclxuICAgIC8vICAgICAgICAgcmV0dXJuIGNsYXNzIFBsdWdpbiB7fTtcclxuICAgIC8vIH1cclxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuQ0xJRU5UX01PRCA9PSBcInBvd2VyY29yZHYyXCIpIHJldHVybiBQQ3YyUGx1Z2luXHJcbiAgICAgICAgZWxzZSBpZiAocHJvY2Vzcy5lbnYuQ0xJRU5UX01PRCA9PSBcImJldHRlcmRpc2NvcmRcIikgcmV0dXJuIEJEUGx1Z2luXHJcbiAgICAgICAgZWxzZSBpZiAocHJvY2Vzcy5lbnYuQ0xJRU5UX01PRCA9PSBcImdvb3NlbW9kXCIpIHJldHVybiBHTVBsdWdpblxyXG4gICAgICAgIHJldHVybiBjbGFzcyBQbHVnaW4ge31cclxufSkoKSB7XHJcbiAgICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XHJcbiAgICAgICAgc3VwZXIoLi4uYXJncyk7XHJcbiAgICAgICAgc2V0SW5zdGFuY2UodGhpcy5fX2l0dGFpSW50ZXJuYWxzKVxyXG4gICAgICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgcGx1Z2luQ2xhc3MoKTtcclxuICAgICAgICB0aGlzLmZyaWVuZGx5TmFtZSA9IHRoaXMuaW5zdGFuY2UuZnJpZW5kbHlOYW1lO1xyXG4gICAgICAgIHRoaXMuaW5zdGFuY2UuX19pdHRhaUludGVybmFsUGx1Z2luID0gdGhpcztcclxuICAgICAgICAvLyBnbG9iYWxUaGlzW1wiaXR0YWlcIiArIHRoaXMuZnJpZW5kbHlOYW1lLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvIC9nLCBcIlwiKV0gPSBpdHRhaTtcclxuICAgICAgICAvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBzdHlsZVtpdHRhaV1bcGx1Z2luPVwiJHttYW5pZmVzdC5uYW1lLnJlcGxhY2UoLyAvZywgXCJcIil9XCJdYCk/LmZvckVhY2goKGU6IEhUTUxTdHlsZUVsZW1lbnQpID0+IHtcclxuICAgICAgICAvLyAgICAgdGhpcy5jYWNoZWRDc3MucHVzaChlLmlubmVyVGV4dCk7XHJcbiAgICAgICAgLy8gICAgIGUucmVtb3ZlKCk7XHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFzU2V0dGluZ3NQYW5lbCA9IGZhbHNlO1xyXG4gICAgY2FjaGVkQ3NzID0gW107XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgLy8gdGhpcy5jYWNoZWRDc3MuZm9yRWFjaCgoZSwgaykgPT4ge1xyXG4gICAgICAgICAgICAvLyAgICAgY29uc3QgZWxlbSA9IE9iamVjdC5hc3NpZ24oZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpLCB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgaW5uZXJUZXh0OiBlXHJcbiAgICAgICAgICAgIC8vICAgICB9KVxyXG4gICAgICAgICAgICAvLyAgICAgZWxlbS5zZXRBdHRyaWJ1dGUoXCJpdHRhaVwiLCBcInRydWVcIik7XHJcbiAgICAgICAgICAgIC8vICAgICBlbGVtLnNldEF0dHJpYnV0ZShcInBsdWdpblwiLCBtYW5pZmVzdC5uYW1lLnJlcGxhY2UoLyAvZywgXCJcIikpO1xyXG4gICAgICAgICAgICAvLyAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChlbGVtKTtcclxuICAgICAgICAgICAgLy8gICAgIGRlbGV0ZSB0aGlzLmNhY2hlZENzc1trXTtcclxuICAgICAgICAgICAgLy8gfSlcclxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52LkhBU19DSEFOR0VMT0cgPT0gXCJ0cnVlXCIgJiYgQm9vbGVhbihjb25maWcuY2hhbmdlbG9nKSAmJiAhQ2hhbmdlbG9nSGFuZGxlci5oYXNTZWVuQ2hhbmdlbG9nKCkpIHtcclxuICAgICAgICAgICAgICAgIENoYW5nZWxvZ0hhbmRsZXIuc2V0U2VlbkNoYW5nZWxvZyh0cnVlKVxyXG4gICAgICAgICAgICAgICAgQ2hhbmdlbG9nSGFuZGxlci5vcGVuQ2hhbmdlbG9nTW9kYWwoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlLnN0YXJ0KCk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxyXG4gICAgICAgICAgICB0aHJvdyBlcnJcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RvcCgpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXMgPSB0aGlzLmluc3RhbmNlLnN0b3AoKTtcclxuICAgICAgICAgICAgdW5wYXRjaEFsbCgpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5oYXNTZXR0aW5nc1BhbmVsKSB0aGlzLnJlbW92ZVNldHRpbmdzUGFuZWwoKTtcclxuICAgICAgICAgICAgLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgc3R5bGVbaXR0YWldW3BsdWdpbj1cIiR7bWFuaWZlc3QubmFtZS5yZXBsYWNlKC8gL2csIFwiXCIpfVwiXWApPy5mb3JFYWNoKGUgPT4ge1xyXG4gICAgICAgICAgICAvLyAgICAgdGhpcy5jYWNoZWRDc3MucHVzaChlLmlubmVyVGV4dCk7XHJcbiAgICAgICAgICAgIC8vICAgICBlLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAvLyB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcztcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpXHJcbiAgICAgICAgICAgIHRocm93IGVyclxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZXRTZXR0aW5nc1BhbmVsKGNvbXBvbmVudCkge1xyXG4gICAgICAgIHRoaXMuaGFzU2V0dGluZ3NQYW5lbCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5fX2l0dGFpSW50ZXJuYWxzLnNldFNldHRpbmdzUGFuZWwoY29tcG9uZW50KTtcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVTZXR0aW5nc1BhbmVsKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmhhc1NldHRpbmdzUGFuZWwpIHtcclxuICAgICAgICAgICAgdGhpcy5oYXNTZXR0aW5nc1BhbmVsID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuX19pdHRhaUludGVybmFscy5yZW1vdmVTZXR0aW5nc1BhbmVsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmlmIChwcm9jZXNzLmVudi5DTElFTlRfTU9EID09PSBcImdvb3NlbW9kXCIpIHtcclxuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IEl0dGFpUGx1Z2luKCk7XHJcbiAgICBjb25zdCBoYW5kbGVycyA9IHtnb29zZW1vZEhhbmRsZXJzOiBpbnN0YW5jZS5nb29zZW1vZEhhbmRsZXJzfVxyXG4gICAgaWYgKHByb2Nlc3MuZW52LkRFVl9NT0RFID09IFwidHJ1ZVwiKSB7XHJcbiAgICAgICAgbG9hZERldlBsdWdpbihoYW5kbGVycylcclxuICAgIH1cclxuICAgIC8vIEB0cy1pZ25vcmVcclxuICAgIEl0dGFpUGx1Z2luID0gaGFuZGxlcnM7XHJcbn1cclxuaWYgKHByb2Nlc3MuZW52LkRFVl9NT0RFID09PSBcInRydWVcIiAmJiBwcm9jZXNzLmVudi5DTElFTlRfTU9EICE9PSBcImdvb3NlbW9kXCIpIHtcclxuICAgIGxvYWREZXZQbHVnaW4oSXR0YWlQbHVnaW4pXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEl0dGFpUGx1Z2luO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJGbHV4RGlzcGF0Y2hlciIsIkNvbnRleHRNZW51IiwiX19kZWZQcm9wIiwiX19kZWZOb3JtYWxQcm9wIiwiX19wdWJsaWNGaWVsZCIsIlBsdWdpbiIsImdldEFsbCIsImNsYXNzZXMiLCJNYXJnaW5zIiwiQ2F0ZWdvcnkiLCJzdHlsZXMiLCJDb2xvclBpY2tlciIsInJhbmRvbVN0cmluZyIsImRpc2NvcmRHZXRNZXNzYWdlcyIsImRpc2NvcmRHZXRNZXNzYWdlIiwiVXNlciIsImpvaW5DbGFzc2VzIiwic2V0dGluZ3MuZ2V0Iiwic2V0Iiwic2V0dGluZ3Muc2V0IiwiY29uZmlnLm1hbmlmZXN0IiwibG9nZ2VyLmVycm9yIiwicGF0Y2hlci5hZnRlciIsIlRvYXN0Iiwid2VicGFjay5maW5kQnlQcm9wcyIsImNvbnN0YW50cy5TZXR0aW5ncyIsImNhdGVnb3J5U3R5bGVzIiwiTGlzdFNlY3Rpb25JdGVtIiwid2VicGFjay5maW5kQnlEaXNwbGF5TmFtZSIsIkVtcHR5U3RhdGVJbWFnZSIsIkVtcHR5U3RhdGUiLCJFbXB0eVN0YXRlVGV4dCIsImNvbnN0YW50cy5ESVNQQVRDSEVSX1BJTkRNU19DSEFOR0VfTElTVCIsInNldHRpbmdzLmdldEFsbCIsInRvYXN0LnNob3ciLCJzZXR0aW5ncy5yZXNldCIsInNldHRpbmdzLnNldEFsbCIsIkNvbnRleHRNZW51SGFuZGxlciIsIlVzZXJTdW1tYXJ5SXRlbSIsIlVTRVJfSUNPTl9TSVpFIiwid2VicGFjay5maW5kIiwid2VicGFjay5Db250ZXh0TWVudSIsIkltcG9ydGVyLmhhc1RoZW1FbmFibGVkIiwiSW1wb3J0ZXIuZnJvbURldmlsYnJvUGluRE1zIiwiU2V0dGluZ3NTd2l0Y2hlciIsInBhdGNoZXIudW5wYXRjaEFsbCIsInBsdWdpbk1hbmlmZXN0IiwidmVyc2lvbiIsIkRldkNsaWVudC52ZXJzaW9uIiwiRGV2Q2xpZW50LmRlZmF1bHQiLCJwbHVnaW5DbGFzcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFBQSxJQUFJLGFBQWEsR0FBRyxDQUFDLE1BQU07SUFDM0IsRUFHSSxPQUFFLE9BQUEsQ0FBQSxtQkFBQSxDQUFBLENBRXNCO0lBQzVCLENBQUMsR0FBRyxDQUFDO0lBQ0UsU0FBTSxJQUFBLENBQUEsTUFBdUIsRUFBRTtJQUN0QyxFQUVDO0lBQ0QsSUFBSSxJQUFJLFNBQVMsR0FBRyxLQUFLLENBQUM7SUFDMUIsSUFBSSxNQUFFLEdBQUEsR0FBQSxhQUFBLENBQUEsU0FBQSxDQUFBLENBQUEsQ0FBQSxLQUFBLENBQUEsRUFBQSxPQUFBLElBQUEsTUFBQSxDQUFBLENBQUEsQ0FBQSxPQUFBLENBQUEsS0FBQSxTQUFBLEdBQUEsSUFBQSxDQUFBLEVBQUEsS0FBQSxDQUFBLElBQUEsYUFBQSxDQUFBLFNBQUEsQ0FBQSxNQUFBLEVBQUEsS0FBQSxDQUFBLENBQUE7SUFDTixJQUFJLE9BQU8sU0FBd0IsR0FBQSxHQUFBLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztJQUNsRCxHQUNDO0lBQ0QsQ0FBQztJQUNNLFNBQUMsT0FBd0IsQ0FBQyxNQUFNLEVBQUU7SUFDekMsRUFHQyxPQUFBLGFBQUEsQ0FBQSxhQUFBLENBQUEsQ0FBQSxDQUFBLEtBQUEsQ0FBQSxFQUFBLE9BQUEsSUFBQSxNQUFBLENBQUEsQ0FBQSxDQUFBLE9BQUEsQ0FBQSxFQUFBLEtBQUEsQ0FBQSxJQUFBLGFBQUEsQ0FBQSxTQUFBLENBQUEsTUFBQSxFQUFBLEtBQUEsQ0FBQSxDQUUrQztJQUNoRCxDQUFDO0lBQ0EsU0FBQSxX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QUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJ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