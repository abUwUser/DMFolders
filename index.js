/**
 * @name DMFolders
 * @version 0.2.0
 * @license MIT
 * @source https://github.com/abUwUser/DMFolders.git
 * @updateUrl https://example.com/gitRepo
 * @main index.tsx
 * @author A user
 * @description Organize your DMs with folders
 */
(()=>{let hasModule;try {module; hasModule = true;}catch(e) {hasModule = false;}var plugin;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 886:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _builder_node_modules_pnpm_css_loader_5_2_7_webpack_5_67_0_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(283);
/* harmony import */ var _builder_node_modules_pnpm_css_loader_5_2_7_webpack_5_67_0_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_builder_node_modules_pnpm_css_loader_5_2_7_webpack_5_67_0_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _builder_node_modules_pnpm_css_loader_5_2_7_webpack_5_67_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(763);
/* harmony import */ var _builder_node_modules_pnpm_css_loader_5_2_7_webpack_5_67_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_builder_node_modules_pnpm_css_loader_5_2_7_webpack_5_67_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _builder_node_modules_pnpm_css_loader_5_2_7_webpack_5_67_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_builder_node_modules_pnpm_css_loader_5_2_7_webpack_5_67_0_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".DMFolders-Category-category {\n    margin-bottom: 20px;\n}\n\n.DMFolders-Category-category-header {\n    display: flex;\n    flex-direction: row;\n    cursor: pointer;\n    margin-bottom: 20px;\n}\n\n.DMFolders-Category-category-header-details{\n    flex: 1;\n}\n\n.DMFolders-Category-category-header-title {\n    font-size: 1.5em;\n    font-weight: bold;\n}\n\n.DMFolders-Category-category-header-icon-wrapper{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 48px;\n    height: 48px;\n}\n\n.DMFolders-Category-category-header-icon{\n    width: 24px;\n    height: 24px;\n    color: var(--interactive-active);\n}\n\n.DMFolders-Category-category-header-icon.DMFolders-Category-opened{\n    transform: rotate(-90deg);\n}\n\n.DMFolders-Category-category-content {\n    margin-left: 14px;\n    padding-left: 20px;\n}", "",{"version":3,"sources":["webpack://./node_modules/.pnpm/ittai@1.0.4/node_modules/ittai/components/Category.css"],"names":[],"mappings":"AAAA;IACI,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,eAAe;IACf,mBAAmB;AACvB;;AAEA;IACI,OAAO;AACX;;AAEA;IACI,gBAAgB;IAChB,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,gCAAgC;AACpC;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;AACtB","sourcesContent":[".category {\n    margin-bottom: 20px;\n}\n\n.category-header {\n    display: flex;\n    flex-direction: row;\n    cursor: pointer;\n    margin-bottom: 20px;\n}\n\n.category-header-details{\n    flex: 1;\n}\n\n.category-header-title {\n    font-size: 1.5em;\n    font-weight: bold;\n}\n\n.category-header-icon-wrapper{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 48px;\n    height: 48px;\n}\n\n.category-header-icon{\n    width: 24px;\n    height: 24px;\n    color: var(--interactive-active);\n}\n\n.category-header-icon.opened{\n    transform: rotate(-90deg);\n}\n\n.category-content {\n    margin-left: 14px;\n    padding-left: 20px;\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"category": "DMFolders-Category-category",
	"category-header": "DMFolders-Category-category-header",
	"category-header-details": "DMFolders-Category-category-header-details",
	"category-header-title": "DMFolders-Category-category-header-title",
	"category-header-icon-wrapper": "DMFolders-Category-category-header-icon-wrapper",
	"category-header-icon": "DMFolders-Category-category-header-icon",
	"opened": "DMFolders-Category-opened",
	"category-content": "DMFolders-Category-category-content"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 261:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _builder_node_modules_pnpm_css_loader_5_2_7_webpack_5_67_0_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(283);
/* harmony import */ var _builder_node_modules_pnpm_css_loader_5_2_7_webpack_5_67_0_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_builder_node_modules_pnpm_css_loader_5_2_7_webpack_5_67_0_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _builder_node_modules_pnpm_css_loader_5_2_7_webpack_5_67_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(763);
/* harmony import */ var _builder_node_modules_pnpm_css_loader_5_2_7_webpack_5_67_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_builder_node_modules_pnpm_css_loader_5_2_7_webpack_5_67_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _builder_node_modules_pnpm_css_loader_5_2_7_webpack_5_67_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_builder_node_modules_pnpm_css_loader_5_2_7_webpack_5_67_0_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".DMFolders-ToastWrapper-toast {\n    background: var(--background-secondary-alt);\n    border-radius: 8px;\n    padding: 12px;\n    color: var(--header-primary);\n    font-weight: 600;\n}", "",{"version":3,"sources":["webpack://./node_modules/.pnpm/ittai@1.0.4/node_modules/ittai/toast/ToastWrapper.css"],"names":[],"mappings":"AAAA;IACI,2CAA2C;IAC3C,kBAAkB;IAClB,aAAa;IACb,4BAA4B;IAC5B,gBAAgB;AACpB","sourcesContent":[".toast {\n    background: var(--background-secondary-alt);\n    border-radius: 8px;\n    padding: 12px;\n    color: var(--header-primary);\n    font-weight: 600;\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"toast": "DMFolders-ToastWrapper-toast"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 327:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _builder_node_modules_pnpm_css_loader_5_2_7_webpack_5_67_0_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(283);
/* harmony import */ var _builder_node_modules_pnpm_css_loader_5_2_7_webpack_5_67_0_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_builder_node_modules_pnpm_css_loader_5_2_7_webpack_5_67_0_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _builder_node_modules_pnpm_css_loader_5_2_7_webpack_5_67_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(763);
/* harmony import */ var _builder_node_modules_pnpm_css_loader_5_2_7_webpack_5_67_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_builder_node_modules_pnpm_css_loader_5_2_7_webpack_5_67_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _builder_node_modules_pnpm_css_loader_5_2_7_webpack_5_67_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_builder_node_modules_pnpm_css_loader_5_2_7_webpack_5_67_0_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".DMFolders-AddUser-text{font-weight:bold;margin-right:auto}[id^=pin-user-]:hover .DMFolders-AddUser-text{color:#fff !important;font-weight:600}", "",{"version":3,"sources":["webpack://./components/ContextMenus/AddUser.scss"],"names":[],"mappings":"AAAA,wBACI,gBAAA,CACA,iBAAA,CAGJ,8CACI,qBAAA,CACA,eAAA","sourcesContent":[".text {\n    font-weight: bold;\n    margin-right: auto;\n}\n\n[id^=\"pin-user-\"]:hover .text {\n    color: #fff !important;\n    font-weight: 600\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"text": "DMFolders-AddUser-text"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 561:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _builder_node_modules_pnpm_css_loader_5_2_7_webpack_5_67_0_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(283);
/* harmony import */ var _builder_node_modules_pnpm_css_loader_5_2_7_webpack_5_67_0_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_builder_node_modules_pnpm_css_loader_5_2_7_webpack_5_67_0_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _builder_node_modules_pnpm_css_loader_5_2_7_webpack_5_67_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(763);
/* harmony import */ var _builder_node_modules_pnpm_css_loader_5_2_7_webpack_5_67_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_builder_node_modules_pnpm_css_loader_5_2_7_webpack_5_67_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _builder_node_modules_pnpm_css_loader_5_2_7_webpack_5_67_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_builder_node_modules_pnpm_css_loader_5_2_7_webpack_5_67_0_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".DMFolders-Settings-buttonFlex{gap:16px}", "",{"version":3,"sources":["webpack://./components/Settings.scss"],"names":[],"mappings":"AAAA,+BACI,QAAA","sourcesContent":[".buttonFlex {\n    gap: 16px;\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"buttonFlex": "DMFolders-Settings-buttonFlex"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 61:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _builder_node_modules_pnpm_css_loader_5_2_7_webpack_5_67_0_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(283);
/* harmony import */ var _builder_node_modules_pnpm_css_loader_5_2_7_webpack_5_67_0_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_builder_node_modules_pnpm_css_loader_5_2_7_webpack_5_67_0_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _builder_node_modules_pnpm_css_loader_5_2_7_webpack_5_67_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(763);
/* harmony import */ var _builder_node_modules_pnpm_css_loader_5_2_7_webpack_5_67_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_builder_node_modules_pnpm_css_loader_5_2_7_webpack_5_67_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _builder_node_modules_pnpm_css_loader_5_2_7_webpack_5_67_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_builder_node_modules_pnpm_css_loader_5_2_7_webpack_5_67_0_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".DMFolders-AddUserModal-userGrid{display:grid;grid-template-columns:repeat(4, 1fr);gap:8px;margin-bottom:16px}.DMFolders-AddUserModal-userGrid .DMFolders-AddUserModal-user{gap:4px;border-radius:4px;padding:4px;cursor:pointer}.DMFolders-AddUserModal-userGrid .DMFolders-AddUserModal-user:hover{background:var(--background-modifier-hover)}.DMFolders-AddUserModal-userGrid .DMFolders-AddUserModal-user.DMFolders-AddUserModal-disabled{opacity:.4;cursor:not-allowed}.DMFolders-AddUserModal-userGrid .DMFolders-AddUserModal-user .DMFolders-AddUserModal-name{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}", "",{"version":3,"sources":["webpack://./components/UserListSettings/Modals/AddUserModal.scss"],"names":[],"mappings":"AAAA,iCACI,YAAA,CACA,oCAAA,CACA,OAAA,CACA,kBAAA,CAEA,8DACI,OAAA,CACA,iBAAA,CACA,WAAA,CACA,cAAA,CAEA,oEACI,2CAAA,CAGJ,8FACI,UAAA,CAEA,kBAAA,CAGJ,2FACI,sBAAA,CACA,eAAA,CACA,kBAAA","sourcesContent":[".userGrid {\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    gap: 8px;\n    margin-bottom: 16px;\n\n    .user {\n        gap: 4px;\n        border-radius: 4px;\n        padding: 4px;\n        cursor: pointer;\n\n        &:hover {\n            background: var(--background-modifier-hover);\n        }\n\n        &.disabled {\n            opacity: 0.4;\n\n            cursor: not-allowed;\n        }\n\n        .name {\n            text-overflow: ellipsis;\n            overflow: hidden;\n            white-space: nowrap;\n        }\n    }\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"userGrid": "DMFolders-AddUserModal-userGrid",
	"user": "DMFolders-AddUserModal-user",
	"disabled": "DMFolders-AddUserModal-disabled",
	"name": "DMFolders-AddUserModal-name"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 643:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _builder_node_modules_pnpm_css_loader_5_2_7_webpack_5_67_0_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(283);
/* harmony import */ var _builder_node_modules_pnpm_css_loader_5_2_7_webpack_5_67_0_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_builder_node_modules_pnpm_css_loader_5_2_7_webpack_5_67_0_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _builder_node_modules_pnpm_css_loader_5_2_7_webpack_5_67_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(763);
/* harmony import */ var _builder_node_modules_pnpm_css_loader_5_2_7_webpack_5_67_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_builder_node_modules_pnpm_css_loader_5_2_7_webpack_5_67_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _builder_node_modules_pnpm_css_loader_5_2_7_webpack_5_67_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_builder_node_modules_pnpm_css_loader_5_2_7_webpack_5_67_0_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".DMFolders-CategorySettingsModal-namingColorWrapper{margin-bottom:8px}.DMFolders-CategorySettingsModal-textbox{width:100%}", "",{"version":3,"sources":["webpack://./components/UserListSettings/Modals/CategorySettingsModal.scss"],"names":[],"mappings":"AAAA,oDACI,iBAAA,CAGJ,yCACI,UAAA","sourcesContent":[".namingColorWrapper {\n    margin-bottom: 8px;\n}\n\n.textbox {\n    width: 100%;\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"namingColorWrapper": "DMFolders-CategorySettingsModal-namingColorWrapper",
	"textbox": "DMFolders-CategorySettingsModal-textbox"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 679:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _builder_node_modules_pnpm_css_loader_5_2_7_webpack_5_67_0_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(283);
/* harmony import */ var _builder_node_modules_pnpm_css_loader_5_2_7_webpack_5_67_0_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_builder_node_modules_pnpm_css_loader_5_2_7_webpack_5_67_0_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _builder_node_modules_pnpm_css_loader_5_2_7_webpack_5_67_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(763);
/* harmony import */ var _builder_node_modules_pnpm_css_loader_5_2_7_webpack_5_67_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_builder_node_modules_pnpm_css_loader_5_2_7_webpack_5_67_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _builder_node_modules_pnpm_css_loader_5_2_7_webpack_5_67_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_builder_node_modules_pnpm_css_loader_5_2_7_webpack_5_67_0_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".DMFolders-User-wrapper{padding:16px 10px;margin:0 12px}", "",{"version":3,"sources":["webpack://./components/UserListSettings/User.scss"],"names":[],"mappings":"AAAA,wBACI,iBAAA,CACA,aAAA","sourcesContent":[".wrapper {\n    padding: 16px 10px;\n    margin: 0 12px;\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"wrapper": "DMFolders-User-wrapper"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 147:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _builder_node_modules_pnpm_css_loader_5_2_7_webpack_5_67_0_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(283);
/* harmony import */ var _builder_node_modules_pnpm_css_loader_5_2_7_webpack_5_67_0_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_builder_node_modules_pnpm_css_loader_5_2_7_webpack_5_67_0_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _builder_node_modules_pnpm_css_loader_5_2_7_webpack_5_67_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(763);
/* harmony import */ var _builder_node_modules_pnpm_css_loader_5_2_7_webpack_5_67_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_builder_node_modules_pnpm_css_loader_5_2_7_webpack_5_67_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _builder_node_modules_pnpm_css_loader_5_2_7_webpack_5_67_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_builder_node_modules_pnpm_css_loader_5_2_7_webpack_5_67_0_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".DMFolders-index-createCategory{gap:10px}.DMFolders-index-createCategory .DMFolders-index-textbox{flex-grow:2}.DMFolders-index-dropdownArrow{width:16px !important;height:16px !important;margin-right:4px}.DMFolders-index-dropdownArrow.DMFolders-index-hidden{transform:rotate(-90deg)}.DMFolders-index-exampleListSectionItem{padding:0;width:auto;flex:unset;margin-right:10px;cursor:pointer}.DMFolders-index-userList{background:var(--background-secondary-alt);margin-top:10px;padding-bottom:20px;border-radius:8px;overflow:hidden auto;max-height:40vh;position:relative}", "",{"version":3,"sources":["webpack://./components/UserListSettings/index.scss"],"names":[],"mappings":"AAAA,gCACI,QAAA,CAEA,yDACI,WAAA,CAIR,+BACI,qBAAA,CACA,sBAAA,CACA,gBAAA,CAEA,sDACI,wBAAA,CAIR,wCACI,SAAA,CACA,UAAA,CACA,UAAA,CACA,iBAAA,CACA,cAAA,CAGJ,0BACI,0CAAA,CACA,eAAA,CACA,mBAAA,CACA,iBAAA,CACA,oBAAA,CACA,eAAA,CACA,iBAAA","sourcesContent":[".createCategory {\n    gap: 10px;\n\n    .textbox {\n        flex-grow: 2;\n    }\n}\n\n.dropdownArrow {\n    width: 16px !important;\n    height: 16px !important;\n    margin-right: 4px;\n\n    &.hidden {\n        transform: rotate(-90deg);\n    }\n}\n\n.exampleListSectionItem {\n    padding: 0;\n    width: auto;\n    flex: unset;\n    margin-right: 10px;\n    cursor: pointer;\n}\n\n.userList {\n    background: var(--background-secondary-alt);\n    margin-top: 10px;\n    padding-bottom: 20px;\n    border-radius: 8px;\n    overflow: hidden auto;\n    max-height: 40vh;\n    position: relative;\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"createCategory": "DMFolders-index-createCategory",
	"textbox": "DMFolders-index-textbox",
	"dropdownArrow": "DMFolders-index-dropdownArrow",
	"hidden": "DMFolders-index-hidden",
	"exampleListSectionItem": "DMFolders-index-exampleListSectionItem",
	"userList": "DMFolders-index-userList"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 174:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _builder_node_modules_pnpm_css_loader_5_2_7_webpack_5_67_0_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(283);
/* harmony import */ var _builder_node_modules_pnpm_css_loader_5_2_7_webpack_5_67_0_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_builder_node_modules_pnpm_css_loader_5_2_7_webpack_5_67_0_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _builder_node_modules_pnpm_css_loader_5_2_7_webpack_5_67_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(763);
/* harmony import */ var _builder_node_modules_pnpm_css_loader_5_2_7_webpack_5_67_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_builder_node_modules_pnpm_css_loader_5_2_7_webpack_5_67_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _builder_node_modules_pnpm_css_loader_5_2_7_webpack_5_67_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_builder_node_modules_pnpm_css_loader_5_2_7_webpack_5_67_0_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".DMFolders-dmbutton-pinButton{margin:2px;display:none;opacity:.6}.DMFolders-dmbutton-pinButton:hover{opacity:1}.DMFolders-dmbutton-pinButton.DMFolders-dmbutton-lonely{padding-right:8px}.DMFolders-dmbutton-pinButton svg{min-width:16px;width:16px !important;min-height:16px;height:16px !important}.DMFolders-dmbutton-pinHoverHandler:hover .DMFolders-dmbutton-pinButton{display:block}", "",{"version":3,"sources":["webpack://./patches/dmbutton.scss"],"names":[],"mappings":"AAAA,8BACI,UAAA,CACA,YAAA,CACA,UAAA,CAEA,oCACI,SAAA,CAGJ,wDACI,iBAAA,CAGJ,kCACI,cAAA,CACA,qBAAA,CACA,eAAA,CACA,sBAAA,CAKJ,wEACI,aAAA","sourcesContent":[".pinButton {\n    margin: 2px;\n    display: none;\n    opacity: .6;\n\n    &:hover {\n        opacity: 1;\n    }\n\n    &.lonely {\n        padding-right: 8px;\n    }\n\n    svg {\n        min-width: 16px;\n        width: 16px !important;\n        min-height: 16px;\n        height: 16px !important;\n    }\n}\n\n.pinHoverHandler:hover{\n    .pinButton {\n        display: block;\n    }\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"pinButton": "DMFolders-dmbutton-pinButton",
	"lonely": "DMFolders-dmbutton-lonely",
	"pinHoverHandler": "DMFolders-dmbutton-pinHoverHandler"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 465:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _builder_node_modules_pnpm_css_loader_5_2_7_webpack_5_67_0_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(283);
/* harmony import */ var _builder_node_modules_pnpm_css_loader_5_2_7_webpack_5_67_0_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_builder_node_modules_pnpm_css_loader_5_2_7_webpack_5_67_0_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _builder_node_modules_pnpm_css_loader_5_2_7_webpack_5_67_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(763);
/* harmony import */ var _builder_node_modules_pnpm_css_loader_5_2_7_webpack_5_67_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_builder_node_modules_pnpm_css_loader_5_2_7_webpack_5_67_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _builder_node_modules_pnpm_css_loader_5_2_7_webpack_5_67_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_builder_node_modules_pnpm_css_loader_5_2_7_webpack_5_67_0_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".DMFolders-dmlist-minimalisticPopout{padding:16px;padding-left:8px;background:var(--background-tertiary);min-width:224px}.DMFolders-dmlist-wrapper{margin:4px 0;margin-left:8px;padding:4px 0;border-top:1px solid var(--background-modifier-accent);border-bottom:1px solid var(--background-modifier-accent)}.DMFolders-dmlist-wrapper>*{margin-left:0}.DMFolders-dmlist-minimalisticView{padding-top:4px;padding-bottom:4px;display:flex;width:100%}.DMFolders-dmlist-minimalisticView .DMFolders-dmlist-nameAndUsers{gap:4px;flex-grow:2 !important}", "",{"version":3,"sources":["webpack://./patches/dmlist.scss"],"names":[],"mappings":"AAAA,qCACI,YAAA,CACA,gBAAA,CACA,qCAAA,CACA,eAAA,CAGJ,0BACI,YAAA,CACA,eAAA,CACA,aAAA,CACA,sDAAA,CACA,yDAAA,CAEA,4BACI,aAAA,CAIR,mCACI,eAAA,CACA,kBAAA,CACA,YAAA,CACA,UAAA,CAEA,kEACI,OAAA,CACA,sBAAA","sourcesContent":[".minimalisticPopout {\n    padding: 16px;\n    padding-left: 8px;\n    background: var(--background-tertiary);\n    min-width: 224px\n}\n\n.wrapper {\n    margin: 4px 0;\n    margin-left: 8px;\n    padding: 4px 0;\n    border-top: 1px solid var(--background-modifier-accent);\n    border-bottom: 1px solid var(--background-modifier-accent);\n\n    & > * {\n        margin-left: 0;\n    }\n}\n\n.minimalisticView {\n    padding-top: 4px;\n    padding-bottom: 4px;\n    display: flex;\n    width: 100%;\n\n    .nameAndUsers {\n        gap: 4px;\n        flex-grow: 2 !important;\n    }\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"minimalisticPopout": "DMFolders-dmlist-minimalisticPopout",
	"wrapper": "DMFolders-dmlist-wrapper",
	"minimalisticView": "DMFolders-dmlist-minimalisticView",
	"nameAndUsers": "DMFolders-dmlist-nameAndUsers"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 475:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=http://localhost:3000/data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ 763:
/***/ ((module) => {


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/ // css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function(cssWithMappingToString) {
    var list = []; // return the list of modules as css string
    list.toString = function toString() {
        return this.map(function(item) {
            var content = cssWithMappingToString(item);
            if (item[2]) {
                return "@media ".concat(item[2], " {").concat(content, "}");
            }
            return content;
        }).join("");
    }; // import a list of modules into the list
    // eslint-disable-next-line func-names
    list.i = function(modules, mediaQuery, dedupe) {
        if (typeof modules === "string") {
            // eslint-disable-next-line no-param-reassign
            modules = [
                [
                    null,
                    modules,
                    ""
                ]
            ];
        }
        var alreadyImportedModules = {};
        if (dedupe) {
            for(var i = 0; i < this.length; i++){
                // eslint-disable-next-line prefer-destructuring
                var id = this[i][0];
                if (id != null) {
                    alreadyImportedModules[id] = true;
                }
            }
        }
        for(var _i = 0; _i < modules.length; _i++){
            var item = [].concat(modules[_i]);
            if (dedupe && alreadyImportedModules[item[0]]) {
                continue;
            }
            if (mediaQuery) {
                if (!item[2]) {
                    item[2] = mediaQuery;
                } else {
                    item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
                }
            }
            list.push(item);
        }
    };
    return list;
};


/***/ }),

/***/ 283:
/***/ ((module) => {


function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++){
        arr2[i] = arr[i];
    }
    return arr2;
}
function _iterableToArrayLimit(arr, i) {
    var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]);
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
module.exports = function cssWithMappingToString(item) {
    var _item = _slicedToArray(item, 4), content = _item[1], cssMapping = _item[3];
    if (!cssMapping) {
        return content;
    }
    if (typeof btoa === "function") {
        // eslint-disable-next-line no-undef
        var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
        var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
        var sourceMapping = "/*# ".concat(data, " */");
        var sourceURLs = cssMapping.sources.map(function(source) {
            return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
        });
        return [
            content
        ].concat(sourceURLs).concat([
            sourceMapping
        ]).join("\n");
    }
    return [
        content
    ].join("\n");
};


/***/ }),

/***/ 638:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ DMFolders)
});

// NAMESPACE OBJECT: ./node_modules/.pnpm/ittai@1.0.4/node_modules/ittai/logger/index.js
var logger_namespaceObject = {};
__webpack_require__.r(logger_namespaceObject);
__webpack_require__.d(logger_namespaceObject, {
  "consoleCopy": () => (consoleCopy),
  "count": () => (count),
  "countReset": () => (countReset),
  "createArguments": () => (createArguments),
  "debug": () => (debug),
  "error": () => (error),
  "group": () => (group),
  "groupEnd": () => (groupEnd),
  "log": () => (log),
  "warn": () => (warn)
});

// NAMESPACE OBJECT: ./node_modules/.pnpm/ittai@1.0.4/node_modules/ittai/patcher/index.js
var patcher_namespaceObject = {};
__webpack_require__.r(patcher_namespaceObject);
__webpack_require__.d(patcher_namespaceObject, {
  "after": () => (after),
  "before": () => (before),
  "instead": () => (instead),
  "patch": () => (patch),
  "patches": () => (patches),
  "unpatchAll": () => (unpatchAll)
});

// NAMESPACE OBJECT: ./node_modules/.pnpm/ittai@1.0.4/node_modules/ittai/webpack/index.js
var webpack_namespaceObject = {};
__webpack_require__.r(webpack_namespaceObject);
__webpack_require__.d(webpack_namespaceObject, {
  "AvatarManager": () => (AvatarManager),
  "ColorUtils": () => (ColorUtils),
  "Constants": () => (Constants),
  "ContextMenu": () => (ContextMenu),
  "Dispatcher": () => (Dispatcher),
  "Flux": () => (Flux),
  "FluxDispatcher": () => (FluxDispatcher),
  "Lodash": () => (Lodash),
  "ModalActions": () => (ModalActions),
  "ModalStack": () => (ModalStack),
  "React": () => (React),
  "ReactDOM": () => (ReactDOM),
  "ReactSpring": () => (ReactSpring),
  "_": () => (_),
  "find": () => (find),
  "findAll": () => (findAll),
  "findAllByDisplayName": () => (findAllByDisplayName),
  "findAllByProps": () => (findAllByProps),
  "findAllByPrototype": () => (findAllByPrototype),
  "findByDisplayName": () => (findByDisplayName),
  "findByProps": () => (findByProps),
  "findByPrototype": () => (findByPrototype)
});

// NAMESPACE OBJECT: ./node_modules/.pnpm/ittai@1.0.4/node_modules/ittai/components/index.jsx
var components_namespaceObject = {};
__webpack_require__.r(components_namespaceObject);
__webpack_require__.d(components_namespaceObject, {
  "Avatar": () => (Avatar),
  "Button": () => (Button),
  "Card": () => (Card),
  "Category": () => (Category_Category),
  "ColorPicker": () => (ColorPicker),
  "ContextMenu": () => (components_ContextMenu),
  "DiscordIcon": () => (DiscordIcon),
  "DiscordProviders": () => (DiscordProviders),
  "Flex": () => (Flex),
  "FluxWrapper": () => (FluxWrapper),
  "Forms": () => (Forms),
  "Heading": () => (Heading),
  "Modal": () => (Modal),
  "OriginalRadioGroup": () => (OriginalRadioGroup),
  "OriginalSwitch": () => (OriginalSwitch),
  "OriginalSwitchItem": () => (OriginalSwitchItem),
  "Popout": () => (Popout),
  "RadioGroup": () => (RadioGroup),
  "SettingsNotice": () => (SettingsNotice),
  "SlideIn": () => (SlideIn),
  "Spinner": () => (Spinner),
  "Switch": () => (Switch),
  "SwitchItem": () => (SwitchItem),
  "Text": () => (Text),
  "TextInput": () => (TextInput),
  "Tooltip": () => (Tooltip),
  "TooltipContainer": () => (TooltipContainer),
  "TransitionGroup": () => (TransitionGroup),
  "makeUpdateWrapper": () => (makeUpdateWrapper)
});

// NAMESPACE OBJECT: ./node_modules/.pnpm/ittai@1.0.4/node_modules/ittai/commands/index.js
var commands_namespaceObject = {};
__webpack_require__.r(commands_namespaceObject);
__webpack_require__.d(commands_namespaceObject, {
  "COMMAND_ARGUMENT_TYPES": () => (COMMAND_ARGUMENT_TYPES),
  "CommandTypes": () => (CommandTypes),
  "botMessage": () => (botMessage),
  "patchIcons": () => (patchIcons),
  "registerCommand": () => (registerCommand),
  "registerSection": () => (registerSection),
  "registeredCommands": () => (registeredCommands),
  "registeredSections": () => (registeredSections),
  "unpatchIcons": () => (unpatchIcons),
  "unregisterAllCommands": () => (unregisterAllCommands),
  "unregisterAllSections": () => (unregisterAllSections),
  "unregisterCommand": () => (unregisterCommand),
  "unregisterSection": () => (unregisterSection)
});

// NAMESPACE OBJECT: ./node_modules/.pnpm/ittai@1.0.4/node_modules/ittai/entities/index.js
var entities_namespaceObject = {};
__webpack_require__.r(entities_namespaceObject);
__webpack_require__.d(entities_namespaceObject, {
  "Plugin": () => (Plugin_Plugin)
});

// NAMESPACE OBJECT: ./node_modules/.pnpm/ittai@1.0.4/node_modules/ittai/settings/index.js
var settings_namespaceObject = {};
__webpack_require__.r(settings_namespaceObject);
__webpack_require__.d(settings_namespaceObject, {
  "get": () => (get),
  "getAll": () => (getAll),
  "remove": () => (remove),
  "reset": () => (settings_reset),
  "set": () => (set),
  "setAll": () => (setAll),
  "setInstance": () => (setInstance),
  "settingsInstance": () => (settingsInstance)
});

// NAMESPACE OBJECT: ./node_modules/.pnpm/ittai@1.0.4/node_modules/ittai/stores/index.js
var stores_namespaceObject = {};
__webpack_require__.r(stores_namespaceObject);
__webpack_require__.d(stores_namespaceObject, {
  "Activities": () => (Activities),
  "Auth": () => (Auth),
  "Channels": () => (Channels),
  "CurrentChannels": () => (CurrentChannels),
  "CurrentGuilds": () => (CurrentGuilds),
  "Games": () => (Games),
  "Guilds": () => (Guilds),
  "Info": () => (Info),
  "Members": () => (Members),
  "Messages": () => (Messages),
  "Status": () => (Status),
  "TypingUsers": () => (TypingUsers),
  "UserProfile": () => (UserProfile),
  "Users": () => (Users)
});

// NAMESPACE OBJECT: ./node_modules/.pnpm/ittai@1.0.4/node_modules/ittai/toast/index.js
var toast_namespaceObject = {};
__webpack_require__.r(toast_namespaceObject);
__webpack_require__.d(toast_namespaceObject, {
  "POSITIONS": () => (POSITIONS),
  "ToastWrapper": () => (ittai_toast_ToastWrapper),
  "pop": () => (pop),
  "show": () => (show)
});

// NAMESPACE OBJECT: ./node_modules/.pnpm/ittai@1.0.4/node_modules/ittai/utilities/messages/index.js
var messages_namespaceObject = {};
__webpack_require__.r(messages_namespaceObject);
__webpack_require__.d(messages_namespaceObject, {
  "fetchMessage": () => (fetchMessage),
  "getMessage": () => (getMessage),
  "getMessages": () => (getMessages),
  "messageCache": () => (messageCache),
  "rerenderAllMessages": () => (rerenderAllMessages),
  "rerenderMessage": () => (rerenderMessage),
  "updateMessage": () => (updateMessage)
});

// NAMESPACE OBJECT: ./node_modules/.pnpm/ittai@1.0.4/node_modules/ittai/utilities/index.js
var utilities_namespaceObject = {};
__webpack_require__.r(utilities_namespaceObject);
__webpack_require__.d(utilities_namespaceObject, {
  "average": () => (average),
  "benchmark": () => (benchmark),
  "findInReactTree": () => (findInReactTree),
  "findInTree": () => (findInTree),
  "getClientMod": () => (getClientMod),
  "getOwnerInstance": () => (getOwnerInstance),
  "getReactInstance": () => (getReactInstance),
  "median": () => (median),
  "messages": () => (messages_namespaceObject),
  "multiBenchmark": () => (multiBenchmark),
  "nanoseconds": () => (nanoseconds),
  "randomNumber": () => (randomNumber),
  "randomString": () => (randomString),
  "searchClassNameModules": () => (searchClassNameModules),
  "testComponent": () => (testComponent),
  "wait": () => (wait_randomString)
});

// NAMESPACE OBJECT: ./node_modules/.pnpm/ittai@1.0.4/node_modules/ittai/index.js
var ittai_namespaceObject = {};
__webpack_require__.r(ittai_namespaceObject);
__webpack_require__.d(ittai_namespaceObject, {
  "commands": () => (commands_namespaceObject),
  "components": () => (components_namespaceObject),
  "entities": () => (entities_namespaceObject),
  "logger": () => (logger_namespaceObject),
  "patcher": () => (patcher_namespaceObject),
  "settings": () => (settings_namespaceObject),
  "stores": () => (stores_namespaceObject),
  "toast": () => (toast_namespaceObject),
  "utilities": () => (utilities_namespaceObject),
  "webpack": () => (webpack_namespaceObject)
});

;// CONCATENATED MODULE: ./node_modules/.pnpm/ittai@1.0.4/node_modules/ittai/logger/createArguments.js
function createArguments(...args) {
    return [
        "%cIttai",
        "color: #000; background-color: #42ffa7; font-family: default; padding-left: 3px; padding-right: 3px; border-radius: 2px; font-weight: bold;",
        ...args, 
    ];
};

;// CONCATENATED MODULE: ./node_modules/.pnpm/ittai@1.0.4/node_modules/ittai/logger/debug.js

function debug(...args) {
    consoleCopy.debug(...createArguments(...args));
};

;// CONCATENATED MODULE: ./node_modules/.pnpm/ittai@1.0.4/node_modules/ittai/logger/warn.js

function warn(...args) {
    consoleCopy.warn(...createArguments(...args));
};

;// CONCATENATED MODULE: ./node_modules/.pnpm/ittai@1.0.4/node_modules/ittai/logger/error.js

function error(...args) {
    consoleCopy.error(...createArguments(...args));
};

;// CONCATENATED MODULE: ./node_modules/.pnpm/ittai@1.0.4/node_modules/ittai/logger/group.js

function group(...args) {
    consoleCopy.group(...createArguments(...args));
};

;// CONCATENATED MODULE: ./node_modules/.pnpm/ittai@1.0.4/node_modules/ittai/logger/groupEnd.js

function groupEnd(...args) {
    consoleCopy.groupEnd(...createArguments(...args));
};

;// CONCATENATED MODULE: ./node_modules/.pnpm/ittai@1.0.4/node_modules/ittai/logger/count.js

function count(...args) {
    consoleCopy.count(...args);
};

;// CONCATENATED MODULE: ./node_modules/.pnpm/ittai@1.0.4/node_modules/ittai/logger/countReset.js

function countReset(...args) {
    consoleCopy.countReset(...args);
};

;// CONCATENATED MODULE: ./node_modules/.pnpm/ittai@1.0.4/node_modules/ittai/logger/index.js
function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
    }
    return target;
}
/**
 * @module logger
 */ const consoleCopy = _objectSpread({}, console);










;// CONCATENATED MODULE: ./node_modules/.pnpm/ittai@1.0.4/node_modules/ittai/logger/log.js

function log(...args) {
    consoleCopy.log(...createArguments(...args));
};

;// CONCATENATED MODULE: ./node_modules/.pnpm/ittai@1.0.4/node_modules/ittai/utilities/getClientMod.js
// Know it will work on this client mod or it's detecting the wrong one?
// Set this variable.
let clientMod;
function getClientMod() {
    var ref;
    if (clientMod) return clientMod;
    if (globalThis.BdApi && !((ref = globalThis.powercord) === null || ref === void 0 ? void 0 : ref.pluginManager.get("bdCompat"))) {
        return clientMod = "betterdiscord";
    } else if (globalThis.goosemod) {
        return clientMod = "goosemod";
    } else if (globalThis.powercord) {
        return clientMod = "powercordv2";
    }
    throw Error("Unknown client mod.");
};

;// CONCATENATED MODULE: ./node_modules/.pnpm/ittai@1.0.4/node_modules/ittai/utilities/randomNumber.js
function randomNumber(min, max) {
    return Math.random() * max - min;
};

;// CONCATENATED MODULE: ./node_modules/.pnpm/ittai@1.0.4/node_modules/ittai/utilities/randomString.js

function randomString(length, dontMatch = "", charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789") {
    if (typeof length !== "number" && length <= 0) return;
    if (typeof dontMatch !== "string" && !Array.isArray(dontMatch)) return;
    if (typeof charset !== "string" && !Array.isArray(charset)) return;
    let string = "";
    do {
        while(string.length < length){
            string += charset[Math.round(randomNumber(0, charset.length - 1))];
        }
        string = string.slice(0, length);
    }while (dontMatch && (string === dontMatch || dontMatch.some((m)=>m === string
    )))
    return string;
};

;// CONCATENATED MODULE: ./node_modules/.pnpm/ittai@1.0.4/node_modules/ittai/patcher/patch.js



function patch_defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function patch_objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            patch_defineProperty(target, key, source[key]);
        });
    }
    return target;
}
function patch(name, object, functionName, type, patchFunction) {
    var ___ittai__;
    const id = (___ittai__ = object.__ittai__) !== null && ___ittai__ !== void 0 ? ___ittai__ : randomString(25, Object.keys(patches));
    var ___ittai__1;
    object.__ittai__ = (___ittai__1 = object.__ittai__) !== null && ___ittai__1 !== void 0 ? ___ittai__1 : id;
    if (!patches[id]) patches[id] = {};
    /**
	 * @memberof module:patcher
	 * @prop {string} name The name of the function being patched.
	 * @prop {string} type The type of the patch.
	 * @prop {function} patchFunction The original function.
	 * @prop {function} unpatch The function to call to unpatch.
	 */ const patchData = {
        name,
        type,
        patchFunction,
        unpatch: function() {
            try {
                const patchIndex = patches[id][functionName].patches.indexOf(this);
                if (patchIndex === -1) throw "Couldn't find the patch. This probably happened because the object was tampered with. Don't do that.";
                // Delete patch.
                patches[id][functionName].patches.splice(patchIndex, 1);
                // Clean up the object if there are no patches left.
                if (patches[id][functionName].patches.length === 0) {
                    // Restore original function.
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
        const props = patch_objectSpread({}, object[functionName]);
        object[functionName] = function(...args) {
            const functionData = patches[id][functionName];
            const befores = functionData.patches.filter((p)=>p.type === "before"
            );
            const insteads = functionData.patches.filter((p)=>p.type === "instead"
            );
            const afters = functionData.patches.filter((p)=>p.type === "after"
            );
            // Before patches.
            for (const before of befores){
                try {
                    const callback = before.patchFunction(args, this);
                    if (callback) args = callback;
                } catch (e) {
                    error(`Error running before patch ${name}.`, e);
                }
            }
            // Instead patches.
            let res = {};
            let ranOnce = false;
            if (insteads.length === 0) {
                res = functionData.original.call(this, ...args), ranOnce = true;
            } else {
                // Bad, fix later.
                for (const instead of insteads){
                    // Do trash merge with Lodash.
                    try {
                        var ref;
                        res = globalThis._.merge(res, (ref = instead.patchFunction(args, this)) !== null && ref !== void 0 ? ref : {}), ranOnce = true;
                    } catch (e) {
                        error(`Error running instead patch ${name}.`, e);
                    }
                }
            }
            if (!ranOnce) {
                res = functionData.original.call(this, ...args);
            }
            // After patches.
            for (const after of afters){
                try {
                    const callback = after.patchFunction(args, res, this);
                    if (callback) res = callback;
                } catch (e) {
                    error(`Error running after patch ${name}.`, e);
                }
            }
            return res;
        };
        Object.assign(object[functionName], props);
        object[functionName].toString = ()=>patches[id][functionName].original.toString()
        ;
    }
    patches[id][functionName].patches.push(patchData);
    return patchData;
};

;// CONCATENATED MODULE: ./node_modules/.pnpm/ittai@1.0.4/node_modules/ittai/patcher/before.js

function before(name, object, functionName, patchFunction) {
    return patch(name, object, functionName, "before", patchFunction);
};

;// CONCATENATED MODULE: ./node_modules/.pnpm/ittai@1.0.4/node_modules/ittai/patcher/instead.js

function instead(name, object, functionName, patchFunction) {
    return patch(name, object, functionName, "instead", patchFunction);
};

;// CONCATENATED MODULE: ./node_modules/.pnpm/ittai@1.0.4/node_modules/ittai/patcher/after.js

function after(name, object, functionName, patchFunction) {
    return patch(name, object, functionName, "after", patchFunction);
};

;// CONCATENATED MODULE: ./node_modules/.pnpm/ittai@1.0.4/node_modules/ittai/patcher/index.js
/**
 * @module patcher
 */ /**
 * A list of the currently patched components.
 */ let patches = [];






;// CONCATENATED MODULE: ./node_modules/.pnpm/ittai@1.0.4/node_modules/ittai/patcher/unpatchAll.js

function unpatchAll(unpatches) {
    if (!Array.isArray(unpatches)) unpatches = patches;
    for (const object of Object.values(unpatches)){
        for (const funct of Object.values(object)){
            for (const patch of funct.patches){
                patch.unpatch();
            }
        }
    }
};

;// CONCATENATED MODULE: ./manifest.json
const manifest_namespaceObject = {"u2":"DMFolders"};
;// CONCATENATED MODULE: ./node_modules/.pnpm/ittai@1.0.4/node_modules/ittai/webpack/index.js
/**
 * @module webpack
 */ 
let clientWebpack;
switch(getClientMod()){
    case "goosemod":
        clientWebpack = globalThis.goosemod.webpackModules;
        break;
    case "powercordv2":
        clientWebpack = __webpack_require__(312);
        break;
    case "betterdiscord":
        clientWebpack = globalThis.BdApi;
        break;
}
function find(filter) {
    switch(getClientMod()){
        case "goosemod":
            return clientWebpack.find(filter);
        case "powercordv2":
            let isDefault = false;
            const mod = clientWebpack.getModule((x)=>{
                return (x === null || x === void 0 ? void 0 : x.default) && filter(x.default) && (isDefault = true);
            }, false) || clientWebpack.getModule(filter, false);
            return isDefault ? mod.default : mod;
        case "betterdiscord":
            return clientWebpack.findModule(filter);
    }
}
function findAll(filter) {
    switch(getClientMod()){
        case "goosemod":
            return clientWebpack.findAll(filter);
        case "powercordv2":
            return clientWebpack.getAllModules((x)=>{
                return (x === null || x === void 0 ? void 0 : x.default) && filter(x.default);
            }, false) || clientWebpack.getModule(filter, false);
        case "betterdiscord":
            return clientWebpack.findAllModules(filter);
    }
}
function findByProps(...props) {
    return find((m)=>{
        return props.every((p)=>{
            return (m === null || m === void 0 ? void 0 : m[p]) !== undefined;
        });
    });
}
function findAllByProps(...props) {
    return findAll((m)=>{
        return props.every((p)=>{
            return (m === null || m === void 0 ? void 0 : m[p]) !== undefined;
        });
    });
}
function findByPrototype(...props) {
    return find((m)=>{
        return props.every((p)=>{
            var ref;
            return (m === null || m === void 0 ? void 0 : (ref = m.prototype) === null || ref === void 0 ? void 0 : ref[p]) !== undefined;
        });
    });
}
function findAllByPrototype(...props) {
    return findAll((m)=>{
        return props.every((p)=>{
            var ref;
            return (m === null || m === void 0 ? void 0 : (ref = m.prototype) === null || ref === void 0 ? void 0 : ref[p]) !== undefined;
        });
    });
}
function findByDisplayName(name) {
    return find((m)=>{
        return (m === null || m === void 0 ? void 0 : m.displayName) === name;
    });
}
function findAllByDisplayName(name) {
    return find((m)=>{
        return (m === null || m === void 0 ? void 0 : m.displayName) === name;
    });
}
/**
 * @see module:webpack/common
 */ 

;// CONCATENATED MODULE: ./node_modules/.pnpm/ittai@1.0.4/node_modules/ittai/webpack/common/index.js
/**
 * {@link https://discord.com/acknowledgements/|Full list of libraries that Discord uses.}
 * @module webpack/common
 */ 
const React = findByProps("useState");
const ReactDOM = findByProps("render", "unmountComponentAtNode");
const ReactSpring = findByProps("useSpring", "useTransition");
const Lodash = globalThis._;
const _ = globalThis._;
const AvatarManager = findByProps("getUserAvatarURL", "hasAnimatedGuildIcon");
const ModalActions = findByProps("openModal", "updateModal");
const ModalStack = findByProps("push", "update", "pop", "popWithKey");
const Dispatcher = findByProps("dirtyDispatch");
const Flux = findByProps("Store", "connectStores");
const FluxDispatcher = findByProps("_currentDispatchActionType", "_processingWaitQueue");
const ColorUtils = findByProps("isValidHex");
const Constants = findByProps("API_HOST");
const ContextMenu = findByProps("openContextMenu");

;// CONCATENATED MODULE: ./node_modules/.pnpm/ittai@1.0.4/node_modules/ittai/entities/BDPlugin.js


function BDPlugin_defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
class BDPlugin {
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
    constructor(){
        BDPlugin_defineProperty(this, "__ittaiInternals", {
            getAllSettings: ()=>{
                var ref;
                return (ref = globalThis.BdApi.loadData(manifest_namespaceObject.u2, "settings")) !== null && ref !== void 0 ? ref : {};
            },
            getSetting: (key, defaultValue)=>{
                var ref, _key;
                return (_key = ((ref = globalThis.BdApi.loadData(manifest_namespaceObject.u2, "settings")) !== null && ref !== void 0 ? ref : {})[key]) !== null && _key !== void 0 ? _key : defaultValue;
            },
            setSettings: (newSettings)=>{
                if (typeof newSettings !== "object") return;
                globalThis.BdApi.saveData(manifest_namespaceObject.u2, "settings", Object.assign(this.__ittaiInternals.getAllSettings(), newSettings));
            },
            setSetting: (key, value)=>{
                globalThis.BdApi.saveData(manifest_namespaceObject.u2, "settings", Object.assign(this.__ittaiInternals.getAllSettings(), {
                    [key]: value
                }));
            },
            removeSetting: (key)=>{
                let outputSetting = this.__ittaiInternals.getAllSettings();
                outputSetting === null || outputSetting === void 0 ? void 0 : delete outputSetting[key];
                globalThis.BdApi.saveData(manifest_namespaceObject.u2, "settings", outputSetting);
            },
            resetSettings: ()=>{
                globalThis.BdApi.saveData(manifest_namespaceObject.u2, "settings", {});
            },
            setSettingsPanel: (component)=>{
                this.getSettingsPanel = ()=>{
                    try {
                        if (typeof component === "function") component = React.createElement(component);
                        return component;
                    } catch (e) {
                        this.error("Failed to load settings panel.", e);
                    }
                    return null;
                };
            },
            removeSettingsPanel: ()=>{
                delete this.getSettingsPanel;
            }
        });
    }
}


;// CONCATENATED MODULE: ./node_modules/.pnpm/ittai@1.0.4/node_modules/ittai/entities/GMPlugin.js

function GMPlugin_defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
class GMPlugin {
    constructor(){
        GMPlugin_defineProperty(this, "__ittaiInternals", {
            getAllSettings: ()=>{
                return this.__ittaiGMSettings;
            },
            getSetting: (key, defaultValue)=>{
                return this.__ittaiGMSettings[key] !== undefined ? this.__ittaiGMSettings[key] : defaultValue;
            },
            setSettings: (newSettings)=>{
                if (typeof newSettings !== "object") return;
                Object.assign(this.__ittaiGMSettings, newSettings);
            },
            setSetting: (key, value)=>{
                this.__ittaiGMSettings[key] = value;
            },
            removeSetting: (key, value)=>{
                delete this.__ittaiGMSettings[key];
            },
            resetSettings: ()=>{
                this.__ittaiGMSettings = {};
            },
            setSettingsPanel: (component)=>{
                if (typeof component === "function") component = React.createElement(component);
                globalThis.goosemod.settings.createItem(this.friendlyName, [
                    '',
                    {
                        type: 'text',
                        text: '',
                        subtext: component // goosemod moment
                    }, 
                ]);
            },
            removeSettingsPanel: ()=>{
                globalThis.goosemod.settings.removeItem(this.friendlyName);
            }
        });
        GMPlugin_defineProperty(this, "goosemodHandlers", {
            onImport: ()=>{
                return this.start();
            },
            onRemove: ()=>{
                return this.stop();
            },
            getSettings: ()=>[
                    this.__ittaiGMSettings
                ]
            ,
            loadSettings: ([_settings])=>{
                this.__ittaiGMSettings = _settings;
            }
        });
        this.__ittaiGMSettings = {};
    }
}


;// CONCATENATED MODULE: ./node_modules/.pnpm/ittai@1.0.4/node_modules/ittai/entities/PCv2Plugin.js

function PCv2Plugin_defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
let Plugin;
if (getClientMod() === "powercordv2") {
    Plugin = class Plugin extends (__webpack_require__(634).entities.Plugin) {
        startPlugin() {
            return this.start();
        }
        pluginWillUnload() {
            return this.stop();
        }
        constructor(...args){
            super(...args);
            PCv2Plugin_defineProperty(this, "__ittaiInternals", {
                getAllSettings: ()=>{
                    let obj = {};
                    const keys = this.settings.getKeys();
                    keys.forEach((k)=>{
                        obj[k] = this.settings.get(k);
                    });
                    return obj;
                },
                getSetting: (key, defaultValue)=>{
                    return this.settings.get(key, defaultValue);
                },
                setSettings: (newSettings)=>{
                    if (typeof newSettings !== "object") return;
                    Object.keys(newSettings).forEach((k)=>this.settings.set(k, newSettings[k])
                    );
                },
                setSetting: (key, value)=>{
                    this.settings.set(key, value);
                },
                removeSetting: (key)=>{
                    this.settings.delete(key);
                },
                resetSettings: ()=>{
                    const keys = this.settings.getKeys();
                    keys.forEach((k)=>{
                        this.settings.delete(k);
                    });
                },
                setSettingsPanel: (component)=>{
                    // if (typeof component === "function")
                    // component = React.createElement(component);
                    powercord.api.settings.registerSettings(this.entityID, {
                        category: this.entityID,
                        label: this.friendlyName,
                        render: component
                    });
                },
                removeSettingsPanel: ()=>{
                    powercord.api.settings.unregisterSettings(this.entityID);
                }
            });
        }
    };
} else {
    Plugin = class Plugin {
    };
}
/* harmony default export */ const PCv2Plugin = (Plugin);

;// CONCATENATED MODULE: ./node_modules/.pnpm/ittai@1.0.4/node_modules/ittai/devclient/index.js

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _asyncToGenerator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
let hasDevServer = false;
function loadDevServer() {
    return _loadDevServer.apply(this, arguments);
};
function _loadDevServer() {
    _loadDevServer = _asyncToGenerator(function*() {
        if (getClientMod() === "betterdiscord") return;
        if (false) {}
        if (!hasDevServer && false && 0) {}
    });
    return _loadDevServer.apply(this, arguments);
}
function loadDevPlugin(p) {
    if (getClientMod() === "betterdiscord") return;
    if (hasDevServer) {
        console.log("Loading using existing dev server client");
        __ITTAI_DEVSERVER_INSTANCE__.loadPlugin(p);
    } else if (false) {}
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/ittai@1.0.4/node_modules/ittai/components/DiscordIcon.jsx


function _extends() {
    _extends = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source){
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };
    return _extends.apply(this, arguments);
}
const types = {
    minipopover: findByProps("icon", "isHeader").icon,
    default: findByProps("icon", "selected").icon
};
/**
 * Render any Discord icon.
 * @name DiscordIcon
 * @param {object} props React properties. All unlisted properties will be passed down to the component.
 * @param {string} [props.type="default"] The FontAwesome icon type. `default`, `minipopover`.
 * @param {string} [props.name] The `displayName` of the icon component in Discord.
 * @memberof module:components
 * @example
 * return (
 *   <DiscordIcon type="minipopover" />
 * );
 */ function DiscordIcon(props) {
    var ref;
    const IconSVG = (ref = findByDisplayName(props.name)) !== null && ref !== void 0 ? ref : ()=>{
        return "";
    };
    var _type, ref1, _className;
    return(/*#__PURE__*/ React.createElement(IconSVG, _extends({}, props, {
        className: `${(ref1 = types[(_type = props.type) !== null && _type !== void 0 ? _type : "default"]) !== null && ref1 !== void 0 ? ref1 : "default"} ${(_className = props.className) !== null && _className !== void 0 ? _className : ""}`,
        style: Object.assign({}, {
            width: "inherit",
            height: "inherit"
        }, props.style)
    })));
};

;// CONCATENATED MODULE: ./node_modules/.pnpm/ittai@1.0.4/node_modules/ittai/components/DiscordProviders.jsx


const LayerProvider = findByProps("AppLayerProvider").AppLayerProvider().props.layerContext.Provider;
const AccessibilityProvider = findByProps("AccessibilityPreferencesContext").AccessibilityPreferencesContext.Provider;
const layerClass = findByProps("LayerClassName").LayerClassName;
/**
 * Wrap a component rendered out-of-tree in Discord's providers
 * @name DiscordProviders
 * @memberof module:components
 * @example
 * return (
 *   <DiscordProviders>
 * 		<Whatever/>
 * 	 </DiscordProviders>
 * );
 */ function DiscordProviders(props) {
    return(/*#__PURE__*/ React.createElement(AccessibilityProvider, {
        value: {
            reducedMotion: {
                enabled: false,
                rawValue: "no-preference"
            }
        }
    }, /*#__PURE__*/ React.createElement(LayerProvider, {
        value: [
            document.querySelector("#app-mount > ." + layerClass)
        ]
    }, props.children)));
};

;// CONCATENATED MODULE: ./node_modules/.pnpm/ittai@1.0.4/node_modules/ittai/components/FluxWrapper.jsx

function FluxWrapper_extends() {
    FluxWrapper_extends = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source){
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };
    return FluxWrapper_extends.apply(this, arguments);
}
function FluxWrapper(props) {
    if (!props.children.displayName) props.children.displayName = "FluxProxy";
    var _createProps;
    const ConnectedComponent = Flux.connectStores(props.stores ? Object.values(props.stores) : [], (_createProps = props.createProps) !== null && _createProps !== void 0 ? _createProps : ()=>{
        return {
            [Math.random()]: Math.random()
        };
    })(props.children);
    return(/*#__PURE__*/ React.createElement(ConnectedComponent, FluxWrapper_extends({}, props.stores)));
};

// EXTERNAL MODULE: ../../../builder/node_modules/.pnpm/style-loader@2.0.0_webpack@5.67.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(475);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ../../../builder/node_modules/.pnpm/css-loader@5.2.7_webpack@5.67.0/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/.pnpm/ittai@1.0.4/node_modules/ittai/components/Category.css
var Category = __webpack_require__(886);
;// CONCATENATED MODULE: ./node_modules/.pnpm/ittai@1.0.4/node_modules/ittai/components/Category.css

            

var options = {"attributes":{"ittai":true,"plugin":"DMFolders"}};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(Category/* default */.Z, options);



/* harmony default export */ const components_Category = (Category/* default.locals */.Z.locals || {});
;// CONCATENATED MODULE: ./node_modules/.pnpm/ittai@1.0.4/node_modules/ittai/components/Category.jsx




/**
 * A Category component to hide components. Note that this does not use the current category component of the mod.
 * @name DiscordProviders
 * @memberof module:components
 * @param {object} props React properties.
 * @param {string} [props.title] The title of the category.]
 * @param {string} [props.description] The description of the category.
 * @example
 * return (
 *   <Category title="Name">
 * 		<Whatever/>
 * 	 </Category>
 * );
 */ function Category_Category({ title , description , children , openedByDefault =false  }) {
    const [opened, setOpened] = React.useState(openedByDefault);
    return(/*#__PURE__*/ React.createElement("div", {
        className: components_Category.category
    }, /*#__PURE__*/ React.createElement("div", {
        className: components_Category["category-header"],
        onClick: ()=>setOpened(!opened)
    }, /*#__PURE__*/ React.createElement("div", {
        className: components_Category["category-header-icon-wrapper"]
    }, /*#__PURE__*/ React.createElement(DiscordIcon, {
        name: "DropdownArrow",
        className: `${components_Category["category-header-icon"]} ${opened ? components_Category.opened : ""}`
    })), /*#__PURE__*/ React.createElement("div", {
        className: components_Category["category-header-details"]
    }, /*#__PURE__*/ React.createElement("div", {
        className: "title-2dsDLn"
    }, title), description && /*#__PURE__*/ React.createElement(Text, null, description))), opened && /*#__PURE__*/ React.createElement("div", {
        className: components_Category["category-content"]
    }, children), /*#__PURE__*/ React.createElement(Forms.FormDivider, {
        className: "dividerDefault-3C2-ws"
    })));
};

;// CONCATENATED MODULE: ./node_modules/.pnpm/ittai@1.0.4/node_modules/ittai/components/index.jsx
/**
 * @module components
 */ 
function components_defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function components_extends() {
    components_extends = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source){
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };
    return components_extends.apply(this, arguments);
}
function components_objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            components_defineProperty(target, key, source[key]);
        });
    }
    return target;
}
var ref;




// Wrapper for Switch component to make the switch box not being updatable. Check https://github.com/BetterDiscordBuilder/bdbuilder/blob/master/common/hooks/createUpdateWrapper.js
const makeUpdateWrapper = (Component, checkPropName = "value", type = "switch")=>{
    const typeSwitch = (v)=>{
        switch(type){
            case "switch":
                {
                    return v;
                }
            case "radio":
                {
                    return v.value;
                }
            default:
                {
                    return v;
                }
        }
    };
    return (props)=>{
        const [value1, setValue] = React.useState(props[checkPropName]);
        return(/*#__PURE__*/ React.createElement(Component, components_extends({}, components_objectSpread({}, props, {
            [checkPropName]: value1,
            onChange: (...args)=>{
                const value = args[0];
                if (typeof props.onChange === "function") props.onChange(value);
                setValue(typeSwitch(value));
            }
        }))));
    };
};
const Button = findByProps("Colors", "Looks", "DropdownSizes");
const Spinner = findByDisplayName("Spinner");
const Text = findByDisplayName("LegacyText");
const TextInput = findByDisplayName("TextInput");
const Tooltip = findByDisplayName("Tooltip");
const TooltipContainer = (ref = findByProps("TooltipContainer")) === null || ref === void 0 ? void 0 : ref.TooltipContainer;
const SlideIn = findByDisplayName("SlideIn");
const SettingsNotice = findByDisplayName("SettingsNotice");
const TransitionGroup = findByDisplayName("TransitionGroup");
const Flex = findByDisplayName("Flex");
const Card = findByDisplayName("Card");
const Popout = findByDisplayName("Popout");
const Modal = findByProps("ModalRoot");
const Forms = findByProps('FormItem');
const ColorPicker = findByDisplayName("ColorPicker");
const Heading = findByProps("Heading").Heading;
const OriginalRadioGroup = findByDisplayName("RadioGroup");
const RadioGroup = makeUpdateWrapper(OriginalRadioGroup, "value", "radio");
const OriginalSwitch = findByDisplayName("Switch");
const Switch = makeUpdateWrapper(OriginalSwitch, "checked");
const OriginalSwitchItem = findByDisplayName("SwitchItem");
const SwitchItem = makeUpdateWrapper(OriginalSwitchItem, "value");
const components_ContextMenu = findByProps("MenuItem").default;
Object.entries(findByProps("MenuItem")).forEach(([key, contents])=>{
    if (!components_ContextMenu[key]) {
        components_ContextMenu[key] = contents;
    }
});
const Avatar = findByProps("AnimatedAvatar").default;
Object.entries(findByProps("AnimatedAvatar")).forEach(([key, contents])=>{
    if (!Avatar[key]) {
        Avatar[key] = contents;
    }
});

;// CONCATENATED MODULE: ./node_modules/.pnpm/ittai@1.0.4/node_modules/ittai/utilities/findInTree.js

function findInTree(tree, filter, { walkable =[] , exclude =[] , whileLoop =false , maxDepth =100 , depth =0 ,  } = {}) {
    if (depth === maxDepth) return null;
    if (tree === null || tree === undefined) return null;
    if (typeof tree !== "object") return null;
    if (typeof filter === "string") return tree[filter];
    if (whileLoop) {
        const stack = [
            tree
        ];
        while(stack.length){
            const node = stack[whileLoop === "reverse" ? "pop" : "shift"]();
            try {
                if (filter(node)) return node;
            } catch (e) {}
            if (stack.length >= maxStack) continue;
            if (Array.isArray(node)) {
                stack.push(...node);
            } else if (typeof node === "object" && node !== null) {
                if (walkable.length > 0) {
                    stack.push(...Object.entries(node).filter(([key, value])=>walkable.indexOf(key) !== -1 && exclude.indexOf(key) === -1
                    ).map(([key, value])=>value
                    ));
                } else {
                    stack.push(...Object.values(node).filter((key)=>exclude.indexOf(key) === -1 && node
                    ));
                }
            }
            depth++;
        }
        return null;
    } else {
        let returnValue;
        try {
            if (filter(tree)) return tree;
        } catch (e) {}
        if (Array.isArray(tree)) {
            for (const value of tree){
                returnValue = findInTree(value, filter, {
                    walkable,
                    exclude,
                    whileLoop,
                    maxDepth,
                    depth: depth + 1
                });
                if (returnValue) return returnValue;
            }
        }
        let keys = walkable.length > 0 ? walkable : Object.keys(tree);
        for (const key of keys){
            if (!tree.hasOwnProperty(key) || exclude.includes(key)) continue;
            returnValue = findInTree(tree[key], filter, {
                walkable,
                exclude,
                whileLoop,
                maxDepth,
                depth: depth + 1
            });
            if (returnValue) return returnValue;
        }
        return null;
    }
};

;// CONCATENATED MODULE: ./node_modules/.pnpm/ittai@1.0.4/node_modules/ittai/utilities/findInReactTree.js

function findInReactTree(tree, filter, { whileLoop =false , maxDepth =100 , depth =0  } = {}) {
    return findInTree(tree, filter, {
        walkable: [
            "props",
            "children",
            "child",
            "sibling"
        ],
        exclude: [
            "__reactFiber$",
            "__reactFiber",
            "__reactInternalInstance$",
            "__reactInternalInstance"
        ],
        whileLoop,
        maxDepth,
        depth
    });
};

;// CONCATENATED MODULE: ./node_modules/.pnpm/ittai@1.0.4/node_modules/ittai/commands/botMessage.js


const MessageCreators = findByProps("createBotMessage");
const MessageActions = findByProps("receiveMessage");
const AvatarDefaults = findByProps("BOT_AVATARS");
const DefaultMessage = {
    state: "SENT",
    author: addBotAuthor({
        avatar: {
            avatarId: "ittai",
            imageUrl: "https://cdn.discordapp.com/avatars/264062457448759296/1f9b1743cf625ca2d51ee517b5efd8a7.webp"
        },
        author: {
            username: "Ittai"
        }
    }),
    content: "Hello! By the way, you forgot to add a `\"content\"` attribute to the message!"
};
function addBotAuthor({ avatar , author  }) {
    var ref;
    const avatarId = (ref = avatar === null || avatar === void 0 ? void 0 : avatar.avatarId) !== null && ref !== void 0 ? ref : randomString(10);
    if ((AvatarDefaults === null || AvatarDefaults === void 0 ? void 0 : AvatarDefaults.BOT_AVATARS) && !AvatarDefaults.BOT_AVATARS[avatarId]) {
        AvatarDefaults.BOT_AVATARS[avatarId] = avatar.imageUrl;
    }
    var ref1, ref2, ref3;
    return {
        avatar: avatarId,
        id: (ref1 = author === null || author === void 0 ? void 0 : author.authorId) !== null && ref1 !== void 0 ? ref1 : randomString(10),
        bot: true,
        discriminator: (ref2 = author === null || author === void 0 ? void 0 : author.discriminator) !== null && ref2 !== void 0 ? ref2 : "0000",
        username: (ref3 = author === null || author === void 0 ? void 0 : author.username) !== null && ref3 !== void 0 ? ref3 : "BotUser"
    };
}
;
function sendMessage(channelId, message) {
    MessageActions.receiveMessage(channelId, Object.assign({}, MessageCreators.createBotMessage(channelId, message === null || message === void 0 ? void 0 : message.content), DefaultMessage, message));
}
;
const BotMessage = {
    sendMessage,
    addBotAuthor
};
/* harmony default export */ const botMessage = (BotMessage);

;// CONCATENATED MODULE: ./node_modules/.pnpm/ittai@1.0.4/node_modules/ittai/commands/index.js



var _command, _command1, _command2, _command3, _opts, _opts1;

const CommandTypes = Object.assign({}, findByProps("ApplicationCommandType"), findByProps("ApplicationCommandPermissionType"));
const CommandsModule = findByProps("BUILT_IN_COMMANDS");
const ApplicationCommandDiscoveryApplicationIcon = findByDisplayName("ApplicationCommandDiscoveryApplicationIcon");
let iconPatch;
function patchIcons() {
    if (!iconPatch) {
        iconPatch = after("IttaiIconCommandPatch", ApplicationCommandDiscoveryApplicationIcon, "default", (args, res, _this)=>{
            const props = findInReactTree(res, (n)=>n.src
            );
            const section = findInTree(args, (n)=>n.icon
            );
            if (!props || !section || props.src.indexOf(section.icon) > 0) return res;
            res.props.onClick = ()=>{};
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
/**
 *
 * @param {object} id
 */ function registerCommand(command) {
    patchIcons();
    const currentIDs = CommandsModule.BUILT_IN_COMMANDS.map(({ id  })=>id
    );
    var ref;
    if ((ref = !command.id) !== null && ref !== void 0 ? ref : false) command.id = randomString(10, currentIDs);
    if (currentIDs.indexOf(command.id) > -1) command.id += randomString(10, currentIDs);
    var _applicationId;
    (_applicationId = (_command = command).applicationId) !== null && _applicationId !== void 0 ? _applicationId : _command.applicationId = "-1";
    var _execute;
    (_execute = (_command1 = command).execute) !== null && _execute !== void 0 ? _execute : _command1.execute = ()=>{};
    var _displayName1;
    (_displayName1 = (_command2 = command).displayName) !== null && _displayName1 !== void 0 ? _displayName1 : _command2.displayName = command.name;
    var _displayDescription1;
    (_displayDescription1 = (_command3 = command).displayDescription) !== null && _displayDescription1 !== void 0 ? _displayDescription1 : _command3.displayDescription = command.description;
    command.options.map((opts)=>{
        var _displayName;
        (_displayName = (_opts = opts).displayName) !== null && _displayName !== void 0 ? _displayName : _opts.displayName = opts.name;
        var _displayDescription;
        (_displayDescription = (_opts1 = opts).displayDescription) !== null && _displayDescription !== void 0 ? _displayDescription : _opts1.displayDescription = opts.description;
        return opts;
    });
    CommandsModule.BUILT_IN_COMMANDS.push(command);
    registeredCommands.push(command.id);
    return command.id;
}
function unregisterCommand(id) {
    CommandsModule.BUILT_IN_COMMANDS.splice(CommandsModule.BUILT_IN_COMMANDS.findIndex((command)=>command.id === id
    ), 1);
}
function unregisterAllCommands() {
    for (const command of registeredCommands){
        unregisterCommand(command);
    }
}
/**
 *
 * @param {object} id
 */ function registerSection(section) {
    patchIcons();
    const currentIDs = CommandsModule.BUILT_IN_SECTIONS.map(({ id  })=>id
    );
    var ref;
    if ((ref = !section.id) !== null && ref !== void 0 ? ref : false) section.id = randomString(10, currentIDs);
    if (currentIDs.indexOf(section.id) > -1) section.id += randomString(10, currentIDs);
    section.isBuiltIn = false;
    CommandsModule.BUILT_IN_SECTIONS.push(section);
    registeredSections.push(section.id);
    return section.id;
}
function unregisterSection(id) {
    CommandsModule.BUILT_IN_COMMANDS.splice(CommandsModule.BUILT_IN_COMMANDS.findIndex((command)=>command.id === id
    ), 1);
}
function unregisterAllSections() {
    for (const command of registeredSections){
        unregisterCommand(command);
    }
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/ittai@1.0.4/node_modules/ittai/entities/index.js
/**
 * @module entities
 */ 

;// CONCATENATED MODULE: ./node_modules/.pnpm/ittai@1.0.4/node_modules/ittai/settings/index.js
const get = (key, defaultValue)=>{
    return settingsInstance.getSetting(key, defaultValue);
};
const getAll = ()=>{
    return settingsInstance.getAllSettings();
};
const set = (key, value)=>{
    return settingsInstance.setSetting(key, value);
};
const setAll = (settings)=>{
    return settingsInstance.setSettings(settings);
};
const remove = (key)=>{
    return settingsInstance.removeSetting(key, undefined);
};
const settings_reset = ()=>{
    return settingsInstance.resetSettings();
};
// HACK
let settingsInstance;
const setInstance = (i)=>{
    settingsInstance = i;
} // export default class SettingsAPI {
 //     constructor(pluginInstance: Plugin) {
 //         this.__pluginInstance = pluginInstance;
 //     }
 //     private __pluginInstance: Plugin
 //     get (key: string, defaultValue: any) : any {
 //         return this.__pluginInstance.__ittaiInternalPlugin.__ittaiInternals.getSetting(key, defaultValue); // Yes this is excessive. Too bad.
 //     }
 //     getAll () : Object {
 //         return this.__pluginInstance.__ittaiInternalPlugin.__ittaiInternals.getAllSettings();
 //     }
 //     set (key: string, value: any) : void {
 //         return this.__pluginInstance.__ittaiInternalPlugin.__ittaiInternals.setSetting(key, value);
 //     }
 //     setAll (settings: Object) : void {
 //         return this.__pluginInstance.__ittaiInternalPlugin.__ittaiInternals.setSettings(settings);
 //     }
 // }
;

;// CONCATENATED MODULE: ./node_modules/.pnpm/ittai@1.0.4/node_modules/ittai/stores/index.js

const Messages = findByProps('getMessage', 'getMessages');
const Channels = findByProps('getChannel', 'getDMFromUserId');
const CurrentChannels = findByProps('getChannelId', 'getLastSelectedChannelId');
const Guilds = findByProps('getGuild');
const CurrentGuilds = findByProps('getGuildId', 'getLastSelectedGuildId');
const Info = findByProps('getSessionId');
const Status = findByProps('getStatus', 'getActivities', 'getState');
const Users = findByProps('getUser', 'getCurrentUser');
//export const DiscordSettings = findByProps('getUser', 'getCurrentUser') //borken
const UserProfile = findByProps('getUserProfile');
const Members = findByProps('getMember');
const Activities = findByProps('getActivities');
const Games = findByProps('getGame', 'games');
const Auth = findByProps('getId', 'isGuest');
const TypingUsers = findByProps('isTyping');

// EXTERNAL MODULE: ../../../builder/node_modules/.pnpm/css-loader@5.2.7_webpack@5.67.0/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/.pnpm/ittai@1.0.4/node_modules/ittai/toast/ToastWrapper.css
var ToastWrapper = __webpack_require__(261);
;// CONCATENATED MODULE: ./node_modules/.pnpm/ittai@1.0.4/node_modules/ittai/toast/ToastWrapper.css

            

var ToastWrapper_options = {"attributes":{"ittai":true,"plugin":"DMFolders"}};

ToastWrapper_options.insert = "head";
ToastWrapper_options.singleton = false;

var ToastWrapper_update = injectStylesIntoStyleTag_default()(ToastWrapper/* default */.Z, ToastWrapper_options);



/* harmony default export */ const toast_ToastWrapper = (ToastWrapper/* default.locals */.Z.locals || {});
;// CONCATENATED MODULE: ./node_modules/.pnpm/ittai@1.0.4/node_modules/ittai/toast/ToastWrapper.tsx

//@ts-ignore

function GenericToast({ children ,  }) {
    console.log(toast_ToastWrapper);
    return(/*#__PURE__*/ React.createElement("div", {
        className: toast_ToastWrapper.toast
    }, children));
};

;// CONCATENATED MODULE: ./node_modules/.pnpm/ittai@1.0.4/node_modules/ittai/toast/index.js
/**
 * @module components
 */ 



const { showToast , popToast  } = findByProps("showToast");
/**
 * Shows a toast using discord's own toast handler that was added on its 7th birthday for... achivements?
 * @param {Function<import('react').ReactElement<any>> | string} text Component to render
 * @param {object} options Options for the toast
 * @param {object} [options.id] The ID of the toast. If not given, it will be generated one randomly
 * @param {number} [options.duration] How long the toast should stay on screen
 * @param {number} [options.position = 1] Position of the toast. 0 is top, 1 is bottom
 * @returns {string} The ID of the toast
 */ const show = (text, options)=>{
    var ref;
    const toastID = (ref = options === null || options === void 0 ? void 0 : options.id) !== null && ref !== void 0 ? ref : randomString(10);
    showToast({
        id: toastID,
        options: Object.assign({}, options, {
            position: POSITIONS.BOTTOM,
            component: typeof text !== "function" ? /*#__PURE__*/ React.createElement(GenericToast, null, text) : text()
        })
    });
    return toastID;
};
/**
 * Removes a toast
 * @param {string} id The ID of the toast
 */ const pop = (id)=>popToast(id)
;
const ittai_toast_ToastWrapper = GenericToast;
const POSITIONS = {
    TOP: 0,
    BOTTOM: 1
};

;// CONCATENATED MODULE: ./node_modules/.pnpm/ittai@1.0.4/node_modules/ittai/utilities/messages/getMessages.js


const { getMessages: discordGetMessages  } = findByProps("getMessages", "getMessage");
function getMessages(channelID) {
    var _channelID;
    const messages = _.merge(_.keyBy(discordGetMessages(channelID)._array, "id"), (_channelID = messageCache[channelID]) !== null && _channelID !== void 0 ? _channelID : {});
    return messageCache[channelID] = messages;
};

;// CONCATENATED MODULE: ./node_modules/.pnpm/ittai@1.0.4/node_modules/ittai/utilities/messages/getMessage.js


const { getMessage: discordGetMessage  } = findByProps("getMessages", "getMessage");
const { getMessageByReference  } = findByProps("getMessageByReference");
function getMessage(channelID, messageID) {
    var ref;
    var ref1, ref2;
    return _.set(messageCache, [
        channelID,
        messageID
    ], (ref2 = (ref1 = discordGetMessage(channelID, messageID)) !== null && ref1 !== void 0 ? ref1 : getMessageByReference({
        message_id: messageID,
        channel_id: channelID
    }).message) !== null && ref2 !== void 0 ? ref2 : (ref = messageCache[channelID]) === null || ref === void 0 ? void 0 : ref[messageID])[channelID][messageID];
};

;// CONCATENATED MODULE: ./node_modules/.pnpm/ittai@1.0.4/node_modules/ittai/utilities/messages/fetchMessage.js


const { Endpoints  } = findByProps("Endpoints");
const User = findByPrototype("tag");
const Timestamp = findByPrototype("toDate", "month");
const Message = findByPrototype("isEdited");
const DiscordAPI = findByProps("getAPIBaseURL");
function fetchMessage(channelID, messageID) {
    return new Promise((resolve, reject)=>{
        const message = getMessage(channelID, messageID);
        if (message) return resolve(message);
        DiscordAPI.get({
            url: Endpoints.MESSAGES(channelID),
            query: {
                limit: 100,
                around: messageID
            }
        }).then((res)=>{
            var ref;
            if (res.status != 200) return reject();
            for (let m of res.body){
                m.author = new User(m.author);
                m.timestamp = new Timestamp(m.timestamp);
                m = new Message(m);
                _.set(messageCache, [
                    m.channel_id,
                    m.id
                ], m);
            }
            const foundMessage = (ref = messageCache[channelID]) === null || ref === void 0 ? void 0 : ref[messageID];
            if (foundMessage) resolve(foundMessage);
            reject();
        }).catch((res)=>{
            // logger.error(res);
            if (res.status != 403) return reject();
        });
    });
};

;// CONCATENATED MODULE: ./node_modules/.pnpm/ittai@1.0.4/node_modules/ittai/utilities/messages/updateMessage.js

function updateMessage_defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function updateMessage_objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            updateMessage_defineProperty(target, key, source[key]);
        });
    }
    return target;
}
const updateMessage_FluxDispatcher = findByProps("dispatch", "dirtyDispatch");
function updateMessage(message, props = {}) {
    updateMessage_FluxDispatcher.dirtyDispatch(updateMessage_objectSpread({}, props, {
        type: "MESSAGE_UPDATE",
        message
    }));
};

;// CONCATENATED MODULE: ./node_modules/.pnpm/ittai@1.0.4/node_modules/ittai/utilities/messages/rerenderMessage.js


const { getMessage: rerenderMessage_discordGetMessage  } = findByProps("getMessages", "getMessage");
function rerenderMessage(idOrMessage, props = {}) {
    let message = typeof idOrMessage === "string" ? rerenderMessage_discordGetMessage(idOrMessage) : idOrMessage;
    if (!message) return;
    message = {
        id: message.id,
        channel_id: message.channel_id,
        content: message.content
    };
    updateMessage(message, props);
};

;// CONCATENATED MODULE: ./node_modules/.pnpm/ittai@1.0.4/node_modules/ittai/utilities/messages/rerenderAllMessages.js


const { getMessages: rerenderAllMessages_discordGetMessages  } = findByProps("getMessages", "getMessage");
const { getChannelId  } = findByProps("getChannelId");
function rerenderAllMessages(props = {}) {
    const messages = rerenderAllMessages_discordGetMessages(getChannelId())._array;
    for (const message of messages){
        rerenderMessage(message, props);
    }
};

;// CONCATENATED MODULE: ./node_modules/.pnpm/ittai@1.0.4/node_modules/ittai/utilities/messages/index.js
let messageCache = {};







;// CONCATENATED MODULE: ./node_modules/.pnpm/ittai@1.0.4/node_modules/ittai/utilities/nanoseconds.js
function nanoseconds() {
    const hrTime = process.hrtime();
    return hrTime[0] * 1000000000 + hrTime[1];
};

;// CONCATENATED MODULE: ./node_modules/.pnpm/ittai@1.0.4/node_modules/ittai/utilities/wait.js
function wait_randomString(time) {
    return new Promise((resolve)=>setTimeout(()=>resolve()
        , time)
    );
};

;// CONCATENATED MODULE: ./node_modules/.pnpm/ittai@1.0.4/node_modules/ittai/utilities/getReactInstance.js
function getReactInstance(node) {
    if (typeof node === "string") node = document.querySelector(`${node}, .${node}, #${node}, [class*="${node}"]`);
    if (!node) return null;
    if (node.__reactFiber$) return node.__reactFiber$; // new React
    if (node.__reactInternalInstance$) return node.__reactInternalInstance$; // old React
    return node[Object.keys(node).find((e)=>e.startsWith("__reactFiber$")
    ) // new React
    ] || node[Object.keys(node).find((e)=>e.startsWith("__reactInternalInstance")
    ) // old React
    ];
};

;// CONCATENATED MODULE: ./node_modules/.pnpm/ittai@1.0.4/node_modules/ittai/utilities/getOwnerInstance.js

function getOwnerInstance(node) {
    for(let curr = getReactInstance(node); curr; curr = curr.return){
        const owner = curr.stateNode;
        if (owner) return owner;
    }
    return null;
};

;// CONCATENATED MODULE: ./node_modules/.pnpm/ittai@1.0.4/node_modules/ittai/utilities/testComponent.js

function testComponent(Component) {
    ModalStack.openModal(()=>Component
    );
};

;// CONCATENATED MODULE: ./node_modules/.pnpm/ittai@1.0.4/node_modules/ittai/utilities/average.js
function average(array) {
    if (array.length === 0) return 0;
    let total = 0;
    for(let i = 0; i < array.length; i++){
        total += array[i];
    }
    return total / array.length;
};

;// CONCATENATED MODULE: ./node_modules/.pnpm/ittai@1.0.4/node_modules/ittai/utilities/median.js
function median(array) {
    if (array.length === 0) return 0;
    array.sort(function(a, b) {
        return a - b;
    });
    let half = Math.floor(array.length / 2);
    if (array.length % 2) return array[half];
    return (array[half - 1] + array[half]) / 2;
};

;// CONCATENATED MODULE: ./node_modules/.pnpm/ittai@1.0.4/node_modules/ittai/utilities/benchmark.js

function benchmark(codeblock, times) {
    return new Promise((resolve1)=>{
        var _pre;
        const pre = (_pre = codeblock.pre) !== null && _pre !== void 0 ? _pre : ()=>{};
        delete codeblock.pre;
        var _post;
        const post = (_post = codeblock.post) !== null && _post !== void 0 ? _post : ()=>{};
        delete codeblock.post;
        const name = Object.keys(codeblock)[0];
        codeblock = codeblock[Object.keys(codeblock)[0]];
        let promises = [];
        for(let i = 0; i < times; i++){
            promises.push(new Promise((resolve)=>{
                let returns, start, end;
                try {
                    pre();
                    start = nanoseconds();
                    returns = codeblock();
                    end = nanoseconds();
                    post();
                } catch (e) {
                    resolve({
                        returns,
                        time: 0,
                        error: e
                    });
                }
                resolve({
                    returns,
                    time: end - start,
                    error: false
                });
            }));
        }
        Promise.all(promises).then((allReturns)=>{
            const finalTimes = allReturns.map((r)=>r.time
            );
            resolve1({
                name,
                average: average(finalTimes),
                median: median(finalTimes),
                error: allReturns[0].error,
                returns: allReturns[0].returns
            });
        });
    });
};

;// CONCATENATED MODULE: ./node_modules/.pnpm/ittai@1.0.4/node_modules/ittai/utilities/multiBenchmark.js


function multiBenchmark(codeblocks, times) {
    return new Promise((resolve)=>{
        const start = nanoseconds();
        Promise.all(codeblocks.map((codeblock)=>benchmark(codeblock, times)
        )).then((results)=>{
            const end = nanoseconds();
            const groupName = `Benchmarked ${codeblocks.length.toLocaleString()} functions ${times.toLocaleString()} times over ${(end - start).toLocaleString()}ns.`;
            group(groupName);
            const mappedResults = Object.values(results).map((result)=>{
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
            const successfulResults = mappedResults.filter((result)=>result.Error === false
            );
            const erroredResults = mappedResults.filter((result)=>!!result.Error
            );
            console.table(successfulResults.sort((result1, result2)=>{
                if (result1["(Median Time)"] > result2["(Median Time)"]) return 1;
                if (result1["(Median Time)"] < result2["(Median Time)"]) return -1;
                return 0;
            }), [
                "Name",
                "Median Time",
                "Average Time",
                "Returns"
            ]);
            if (erroredResults.length > 0) {
                console.table(erroredResults, [
                    "Name",
                    "Error"
                ]);
            }
            groupEnd(groupName);
            resolve(results);
        });
    });
};

;// CONCATENATED MODULE: ./node_modules/.pnpm/ittai@1.0.4/node_modules/ittai/utilities/searchClassNameModules.js

/* harmony default export */ /**
 * @param {string} className The class name to search for
 * @memberof module:utilities
 * @returns {object} The module
 */function searchClassNameModules(className) {
    return find((m)=>Object.values(m).some((v)=>typeof v === "string" && ~v.split(" ").indexOf(className)
        )
    );
};

;// CONCATENATED MODULE: ./node_modules/.pnpm/ittai@1.0.4/node_modules/ittai/utilities/index.js

/**
 * @module utilities
 */ 
















;// CONCATENATED MODULE: ./node_modules/.pnpm/ittai@1.0.4/node_modules/ittai/index.js











loadDevServer();











;// CONCATENATED MODULE: ./node_modules/.pnpm/ittai@1.0.4/node_modules/ittai/entities/Plugin.js






// import settings from "ittai/settings";




function Plugin_defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
/**
 * The plugin class for the running client mod.
 * @name Plugin
 * @memberof module:entities
 */ class Plugin_Plugin {
    // settings = settings;
    start() {}
    stop() {}
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
    static __ittaiWrap(pluginClass, startDevMode) {
        if (startDevMode) {
            console.log("loading in dev mode");
        }
        const cls = class IttaiPlugin extends (()=>{
            switch(getClientMod()){
                case "powercordv2":
                    return PCv2Plugin;
                case "betterdiscord":
                    return BDPlugin;
                case "goosemod":
                    return GMPlugin;
                default:
                    return class Plugin {
                    };
            }
        })() {
            start() {
                try {
                    this.cachedCss.forEach((e, k)=>{
                        const elem = Object.assign(document.createElement("style"), {
                            innerText: e
                        });
                        elem.setAttribute("ittai", "true");
                        elem.setAttribute("plugin", manifest_namespaceObject.u2.replace(/ /g, ""));
                        document.head.appendChild(elem);
                        delete this.cachedCss[k];
                    });
                    return this.instance.start();
                } catch (err) {
                    console.error(err);
                    throw err;
                }
            }
            stop() {
                try {
                    var ref;
                    const res = this.instance.stop();
                    unpatchAll();
                    if (this.hasSettingsPanel) this.removeSettingsPanel();
                    (ref = document.querySelectorAll(`style[ittai][plugin="${manifest_namespaceObject.u2.replace(/ /g, "")}"]`)) === null || ref === void 0 ? void 0 : ref.forEach((e)=>{
                        this.cachedCss.push(e.innerText);
                        e.remove();
                    });
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
            constructor(...args){
                var ref;
                super(...args);
                Plugin_defineProperty(this, "hasSettingsPanel", false);
                Plugin_defineProperty(this, "cachedCss", []);
                setInstance(this.__ittaiInternals);
                this.instance = new pluginClass();
                this.friendlyName = this.instance.friendlyName;
                this.instance.__ittaiInternalPlugin = this;
                globalThis["ittai" + this.friendlyName.toLowerCase().replace(/ /g, "")] = ittai_namespaceObject;
                (ref = document.querySelectorAll(`style[ittai][plugin="${manifest_namespaceObject.u2.replace(/ /g, "")}"]`)) === null || ref === void 0 ? void 0 : ref.forEach((e)=>{
                    this.cachedCss.push(e.innerText);
                    e.remove();
                });
            }
        };
        if (getClientMod() === "goosemod") {
            const instance = new cls();
            const handlers = {
                goosemodHandlers: instance.goosemodHandlers
            };
            if (startDevMode) {
                loadDevPlugin(handlers);
            }
            return handlers;
        }
        if (startDevMode) {
            loadDevPlugin(cls);
        }
        return cls;
    }
    constructor(){
        Plugin_defineProperty(this, "friendlyName", manifest_namespaceObject.u2);
    }
}


;// CONCATENATED MODULE: ./handlers/pinnedDMS.ts


const pinnedDMS_getAll = ()=>{
    return get("pinnedCategories", {});
};
const getCategories = ()=>{
    const pinnedCategories = Object.keys(pinnedDMS_getAll());
    return pinnedCategories;
};
const getCategory = (category)=>{
    return pinnedDMS_getAll()[category];
};
const getUsers = (category)=>{
    const pinnedCategories = pinnedDMS_getAll();
    if (pinnedCategories[category] == null) throw new Error(`Category ${category} does not exist`);
    return pinnedCategories[category].users;
};
const getColor = (category)=>{
    let pinnedCategories = pinnedDMS_getAll();
    if (pinnedCategories[category] == null) throw new Error(`Category ${category} does not exist`);
    return pinnedCategories[category].color;
};
const setRaw = (setting)=>{
    set("pinnedCategories", setting);
    Dispatcher.dirtyDispatch({
        type: "PINDMS_CHANGE_LIST"
    });
};
const addCategory = (category, settings1 = {
    color: ColorUtils.int2hex(Constants.DEFAULT_ROLE_COLOR),
    users: []
})=>{
    let pinnedCategories = pinnedDMS_getAll();
    pinnedCategories[category] = settings1;
    setRaw(pinnedCategories);
};
const renameCategory = (oldCategoryName, newCategoryName)=>{
    let pinnedCategories = pinnedDMS_getAll();
    // console.log(pinnedCategories)
    Object.defineProperty(pinnedCategories, newCategoryName, Object.getOwnPropertyDescriptor(pinnedCategories, oldCategoryName));
    // console.log(pinnedCategories)
    delete pinnedCategories[oldCategoryName];
    // console.log(pinnedCategories)
    setRaw(pinnedCategories);
};
const removeCategory = (category)=>{
    let pinnedCategories = pinnedDMS_getAll();
    if (pinnedCategories[category] == null) throw new Error(`Category ${category} does not exist`);
    delete pinnedCategories[category];
    setRaw(pinnedCategories);
};
const setColor = (category, color)=>{
    let pinnedCategories = pinnedDMS_getAll();
    if (pinnedCategories[category] == null) throw new Error(`Category ${category} does not exist`);
    pinnedCategories[category].color = color;
    setRaw(pinnedCategories);
};
const setUserList = (category, userList)=>{
    let pinnedCategories = pinnedDMS_getAll();
    pinnedCategories[category].users = userList;
    setRaw(pinnedCategories);
};
const addUser = (category, userID)=>{
    if (typeof userID !== "string") throw new Error(`Invalid User ID`);
    let pinnedCategories = pinnedDMS_getAll();
    if (pinnedCategories[category] == null) throw new Error(`Category ${category} does not exist`);
    let userList = pinnedCategories[category].users;
    userList.push(userID);
    setUserList(category, userList);
};
const removeUser = (category, userID)=>{
    if (typeof userID !== "string") throw new Error(`Invalid User ID`);
    let pinnedCategories = pinnedDMS_getAll();
    if (pinnedCategories[category] == null) throw new Error(`Category ${category} does not exist`);
    let userList = pinnedCategories[category].users;
    userList = userList.filter((user)=>user !== userID
    );
    setUserList(category, userList);
};
const isUserAdded = (userID)=>{
    return Object.values(pinnedDMS_getAll()).some(({ users  })=>users.includes(userID)
    );
};
const getUserCategory = (userID)=>{
    const pinnedCategories = pinnedDMS_getAll();
    for(const categoryName in pinnedCategories){
        const category = pinnedCategories[categoryName];
        if (category.users.some((user)=>user === userID
        )) return categoryName;
    }
};
const useListUpdate = ()=>{
    const [, forceUpdate] = React.useReducer((n)=>!n
    , true);
    React.useEffect(()=>{
        const listener = ()=>void forceUpdate()
        ;
        Dispatcher.subscribe("PINDMS_CHANGE_LIST", listener);
        return ()=>Dispatcher.unsubscribe("PINDMS_CHANGE_LIST", listener)
        ;
    }, []);
};
/* harmony default export */ const pinnedDMS = ({
    getAll: pinnedDMS_getAll,
    getCategories,
    getCategory,
    getUsers,
    getColor,
    setRaw,
    addCategory,
    renameCategory,
    removeCategory,
    setColor,
    setUserList,
    addUser,
    removeUser,
    isUserAdded,
    getUserCategory,
    useListUpdate
});

;// CONCATENATED MODULE: ./utils/move.ts
/* harmony default export */ function move(arr, from, to) {
    if (Array.isArray(arr)) {
        return moveArray(arr, from, to);
    } else if (typeof arr === "object") {
        return moveObjectKey(arr, from, to);
    }
};
function moveObjectKey(object, from, to) {
    if (typeof from === "string") {
        from = Object.keys(object).findIndex((key)=>key === from
        );
    }
    const changedOrder = moveArray(Object.entries(object), from, to);
    const newObj = changedOrder.reduce((acc, [key, value])=>{
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

;// CONCATENATED MODULE: ./utils/classes.ts


const PrivateChannelsHeaderContainer = findByProps("privateChannelRecipientsInviteButtonIcon");
const DMButtons = findByProps("channel", "linkButtonIcon");
const Interactives = findByProps("interactive", "muted");
const container = searchClassNameModules("container-32HW5s").container;
const DeleteAccountButtonRow = findByProps("buttonContainer", "description", "disableButton");
const Names = findByProps("nameAndDecorators");
const Scrolling = findByProps("scrolling", "scrollerBase");
const ServerMembers = findByProps("ui-scroller-wrap");
const AccountControlButtons = findByProps("button", "disabled", "enabled");
const classes_ColorPicker = findByProps("custom", "customColorPickerInput", "colorPickerRow");
const Margins = findByProps("marginLarge", "marginTop20");
/* harmony default export */ const classes = ({
    PrivateChannelsHeaderContainer,
    DMButtons,
    ServerMembers,
    AccountControlButtons,
    ColorPicker: classes_ColorPicker,
    Margins,
    Scrolling,
    DeleteAccountButtonRow,
    Names,
    Interactives,
    container
});

// EXTERNAL MODULE: ../../../builder/node_modules/.pnpm/css-loader@5.2.7_webpack@5.67.0/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../builder/node_modules/.pnpm/sass-loader@10.2.1_sass@1.49.0+webpack@5.67.0/node_modules/sass-loader/dist/cjs.js!./components/UserListSettings/User.scss
var UserListSettings_User = __webpack_require__(679);
;// CONCATENATED MODULE: ./components/UserListSettings/User.scss

            

var User_options = {"attributes":{"ittai":true,"plugin":"DMFolders"}};

User_options.insert = "head";
User_options.singleton = false;

var User_update = injectStylesIntoStyleTag_default()(UserListSettings_User/* default */.Z, User_options);



/* harmony default export */ const components_UserListSettings_User = (UserListSettings_User/* default.locals */.Z.locals || {});
;// CONCATENATED MODULE: ./utils/joinClasses.ts
/* harmony default export */ const joinClasses = ((...classes)=>classes.filter((s)=>typeof s === 'string'
    ).join(" "));

;// CONCATENATED MODULE: ./components/UserListSettings/User.tsx





//@ts-ignore


const { React: User_React , React: { useState , useEffect ,  }  } = webpack_namespaceObject;
/* harmony default export */ function components_UserListSettings_User_0({ id , onMove , onRemove , disableUp =false , disableDown =false  }) {
    var ref;
    const [user1, setUser] = useState();
    useEffect(()=>{
        const user = Users.getUser(id);
        if (!user) throw new Error("User not found");
        setUser(Users.getUser(id));
    });
    return(/*#__PURE__*/ User_React.createElement(Flex, {
        align: Flex.Align.CENTER,
        className: joinClasses(classes.ServerMembers.member, components_UserListSettings_User.wrapper)
    }, /*#__PURE__*/ User_React.createElement("div", {
        className: classes.ServerMembers.avatar
    }, /*#__PURE__*/ User_React.createElement(Avatar, {
        src: (ref = user1 === null || user1 === void 0 ? void 0 : user1.getAvatarURL(false, true)) === null || ref === void 0 ? void 0 : ref.replace("?size=16", ""),
        size: Avatar.Sizes.SIZE_40
    })), /*#__PURE__*/ User_React.createElement("div", {
        className: classes.ServerMembers.nameTag,
        style: {
            marginRight: "auto"
        }
    }, /*#__PURE__*/ User_React.createElement("div", {
        className: classes.ServerMembers.name
    }, user1 === null || user1 === void 0 ? void 0 : user1.username), /*#__PURE__*/ User_React.createElement(Text, {
        color: Text.Colors.MUTED,
        size: Text.Sizes.SIZE_14
    }, "@", user1 === null || user1 === void 0 ? void 0 : user1.username, "#", user1 === null || user1 === void 0 ? void 0 : user1.discriminator)), /*#__PURE__*/ User_React.createElement(Flex, {
        direction: Flex.Direction.VERTICAL,
        grow: 0,
        shrink: 0
    }, /*#__PURE__*/ User_React.createElement(Button, {
        size: Button.Sizes.ICON,
        onClick: ()=>onMove("up")
        ,
        disabled: disableUp,
        look: Button.Looks.BLANK,
        className: [
            classes.AccountControlButtons.button,
            disableUp ? classes.AccountControlButtons.disabled : classes.AccountControlButtons.enabled, 
        ].join(" ")
    }, /*#__PURE__*/ User_React.createElement(DiscordIcon, {
        name: "ArrowDropUp"
    })), /*#__PURE__*/ User_React.createElement(Button, {
        size: Button.Sizes.ICON,
        onClick: ()=>onMove("down")
        ,
        disabled: disableDown,
        look: Button.Looks.BLANK,
        className: [
            classes.AccountControlButtons.button,
            disableDown ? classes.AccountControlButtons.disabled : classes.AccountControlButtons.enabled, 
        ].join(" ")
    }, /*#__PURE__*/ User_React.createElement(DiscordIcon, {
        name: "ArrowDropDown"
    }))), /*#__PURE__*/ User_React.createElement(TooltipContainer, {
        text: "Delete"
    }, /*#__PURE__*/ User_React.createElement(Button, {
        size: Button.Sizes.ICON,
        color: Button.Colors.RED,
        onClick: onRemove,
        look: Button.Looks.LINK
    }, /*#__PURE__*/ User_React.createElement(DiscordIcon, {
        name: "Trash"
    })))));
};

// EXTERNAL MODULE: ../../../builder/node_modules/.pnpm/css-loader@5.2.7_webpack@5.67.0/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../builder/node_modules/.pnpm/sass-loader@10.2.1_sass@1.49.0+webpack@5.67.0/node_modules/sass-loader/dist/cjs.js!./components/UserListSettings/Modals/CategorySettingsModal.scss
var CategorySettingsModal = __webpack_require__(643);
;// CONCATENATED MODULE: ./components/UserListSettings/Modals/CategorySettingsModal.scss

            

var CategorySettingsModal_options = {"attributes":{"ittai":true,"plugin":"DMFolders"}};

CategorySettingsModal_options.insert = "head";
CategorySettingsModal_options.singleton = false;

var CategorySettingsModal_update = injectStylesIntoStyleTag_default()(CategorySettingsModal/* default */.Z, CategorySettingsModal_options);



/* harmony default export */ const Modals_CategorySettingsModal = (CategorySettingsModal/* default.locals */.Z.locals || {});
;// CONCATENATED MODULE: ./components/UserListSettings/Modals/CategorySettingsModal.tsx





//@ts-ignore

function CategorySettingsModal_extends() {
    CategorySettingsModal_extends = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source){
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };
    return CategorySettingsModal_extends.apply(this, arguments);
}
const { CustomColorButton  } = findByProps("DefaultColorButton");
/* harmony default export */ function UserListSettings_Modals_CategorySettingsModal(modalProps) {
    const [newName, setNewName] = React.useState(modalProps.name);
    const [newColor, setNewColor] = React.useState(pinnedDMS.getColor(modalProps.name));
    return(/*#__PURE__*/ React.createElement(Modal.ModalRoot, CategorySettingsModal_extends({
        size: Modal.ModalSize.DYNAMIC
    }, modalProps), /*#__PURE__*/ React.createElement(Modal.ModalHeader, {
        separator: false
    }, /*#__PURE__*/ React.createElement(TextInput, {
        value: newName,
        onChange: setNewName,
        placeholder: "Rename",
        className: Modals_CategorySettingsModal.textbox
    })), /*#__PURE__*/ React.createElement(Modal.ModalContent, null, /*#__PURE__*/ React.createElement(Forms.FormItem, {
        className: classes.Margins.marginBottom20
    }, /*#__PURE__*/ React.createElement(Forms.FormTitle, null, "Color"), /*#__PURE__*/ React.createElement(ColorPicker, {
        colors: Constants.ROLE_COLORS,
        defaultColor: Constants.DEFAULT_ROLE_COLOR,
        value: ColorUtils.hex2int(newColor),
        onChange: (c)=>setNewColor(ColorUtils.int2hex(c))
    }))), /*#__PURE__*/ React.createElement(Modal.ModalFooter, null, /*#__PURE__*/ React.createElement(Button, {
        onClick: ()=>{
            if (modalProps.name !== newName) pinnedDMS.renameCategory(modalProps.name, newName);
            pinnedDMS.setColor(modalProps.name, newColor);
            modalProps.onClose();
        }
    }, "Save"), /*#__PURE__*/ React.createElement(Button, {
        look: Button.Looks.LINK,
        color: Button.Colors.WHITE,
        onClick: modalProps.onClose
    }, "Cancel"))));
};

// EXTERNAL MODULE: ../../../builder/node_modules/.pnpm/css-loader@5.2.7_webpack@5.67.0/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../builder/node_modules/.pnpm/sass-loader@10.2.1_sass@1.49.0+webpack@5.67.0/node_modules/sass-loader/dist/cjs.js!./components/UserListSettings/index.scss
var UserListSettings = __webpack_require__(147);
;// CONCATENATED MODULE: ./components/UserListSettings/index.scss

            

var UserListSettings_options = {"attributes":{"ittai":true,"plugin":"DMFolders"}};

UserListSettings_options.insert = "head";
UserListSettings_options.singleton = false;

var UserListSettings_update = injectStylesIntoStyleTag_default()(UserListSettings/* default */.Z, UserListSettings_options);



/* harmony default export */ const components_UserListSettings = (UserListSettings/* default.locals */.Z.locals || {});
// EXTERNAL MODULE: ../../../builder/node_modules/.pnpm/css-loader@5.2.7_webpack@5.67.0/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../builder/node_modules/.pnpm/sass-loader@10.2.1_sass@1.49.0+webpack@5.67.0/node_modules/sass-loader/dist/cjs.js!./components/UserListSettings/Modals/AddUserModal.scss
var AddUserModal = __webpack_require__(61);
;// CONCATENATED MODULE: ./components/UserListSettings/Modals/AddUserModal.scss

            

var AddUserModal_options = {"attributes":{"ittai":true,"plugin":"DMFolders"}};

AddUserModal_options.insert = "head";
AddUserModal_options.singleton = false;

var AddUserModal_update = injectStylesIntoStyleTag_default()(AddUserModal/* default */.Z, AddUserModal_options);



/* harmony default export */ const Modals_AddUserModal = (AddUserModal/* default.locals */.Z.locals || {});
;// CONCATENATED MODULE: ./utils/limit.ts
/* harmony default export */ const limit = ((array, limit = 50, from = 0)=>array.slice(from, from + limit));

;// CONCATENATED MODULE: ./components/UserListSettings/Modals/AddUserModal.tsx




//@ts-ignore

//@ts-ignore



function AddUserModal_extends() {
    AddUserModal_extends = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source){
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };
    return AddUserModal_extends.apply(this, arguments);
}
const dmUsers = Channels.getSortedPrivateChannels().filter((channel)=>channel.recipients.length === 1 && channel.recipients[0] != null
).map((channel)=>Users.getUser(channel.recipients[0])
);
const MAX_USER_DISPLAY = 60;
/* harmony default export */ function UserListSettings_Modals_AddUserModal(props) {
    const [users, setUsers] = React.useState([]);
    const [search, setSearch] = React.useState("");
    React.useEffect(()=>{
        const searchResult = dmUsers.filter((user)=>!user.bot && ~user.username.toLowerCase().indexOf(search.toLowerCase())
        );
        const limitedResult = limit(searchResult, MAX_USER_DISPLAY);
        setUsers(limitedResult);
    }, [
        search
    ]);
    return(/*#__PURE__*/ React.createElement(Modal.ModalRoot, AddUserModal_extends({
        size: Modal.ModalSize.DYNAMIC
    }, props), /*#__PURE__*/ React.createElement(Modal.ModalHeader, {
        separator: false
    }, /*#__PURE__*/ React.createElement(TextInput, {
        value: search,
        onChange: setSearch,
        placeholder: "Search for user",
        className: Modals_CategorySettingsModal.textbox
    })), /*#__PURE__*/ React.createElement(Modal.ModalContent, null, /*#__PURE__*/ React.createElement("div", {
        className: Modals_AddUserModal.userGrid
    }, users.map((user)=>/*#__PURE__*/ React.createElement(AddUserModal_User, {
            user: user,
            onClick: ()=>{
                props.onSelect(user);
                props.onClose();
            }
        })
    )))));
};
const AddUserModal_User = ({ user , onClick  })=>{
    const isAdded = pinnedDMS.isUserAdded(user.id);
    return(/*#__PURE__*/ React.createElement(Flex, {
        align: Flex.Align.CENTER,
        className: joinClasses(Modals_AddUserModal.user, isAdded ? Modals_AddUserModal.disabled : ""),
        onClick: ()=>{
            if (!isAdded) onClick === null || onClick === void 0 ? void 0 : onClick();
        }
    }, /*#__PURE__*/ React.createElement(Avatar, {
        src: user.getAvatarURL(false, false),
        size: Avatar.Sizes.SIZE_16
    }), /*#__PURE__*/ React.createElement(Text, {
        color: Text.Colors.STANDARD,
        className: Modals_AddUserModal.name
    }, user.username)));
};

;// CONCATENATED MODULE: ./components/UserListSettings/index.tsx








//@ts-ignore



function UserListSettings_extends() {
    UserListSettings_extends = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source){
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };
    return UserListSettings_extends.apply(this, arguments);
}
const ListSectionItem = findByDisplayName("ListSectionItem");
/* harmony default export */ function components_UserListSettings_0() {
    const [newCategory, setNewCategory] = React.useState("");
    useListUpdate();
    // console.log(ColorPicker)
    return(/*#__PURE__*/ React.createElement(React.Fragment, null, /*#__PURE__*/ React.createElement(Flex, {
        className: components_UserListSettings.createCategory
    }, /*#__PURE__*/ React.createElement(TextInput, {
        className: components_UserListSettings.textbox,
        value: newCategory,
        placeholder: "Name a new category",
        onChange: (e)=>setNewCategory(e)
    }), /*#__PURE__*/ React.createElement(Button, {
        onClick: ()=>pinnedDMS.addCategory(newCategory)
    }, "Add")), Object.entries(pinnedDMS.getAll()).map(([category, { users  }], index)=>/*#__PURE__*/ React.createElement(UserCategory, {
            name: category,
            users: users,
            index: index
        })
    )));
};
const UserCategory = ({ name , users , index: index1  })=>{
    const [hide, setHide] = React.useState(true);
    return(/*#__PURE__*/ React.createElement("div", {
        key: name,
        className: components_UserListSettings.category
    }, /*#__PURE__*/ React.createElement(CategoryHeader, UserListSettings_extends({}, {
        name,
        index: index1
    }, {
        onHide: ()=>setHide(!hide)
        ,
        hidden: hide
    })), !(users.length === 0 || hide) && /*#__PURE__*/ React.createElement("div", {
        className: joinClasses(components_UserListSettings.userList, classes.Scrolling.scrollerBase, classes.Scrolling.thin, classes.Scrolling.fade)
    }, users.map((id, index)=>/*#__PURE__*/ React.createElement(components_UserListSettings_User_0, {
            id: id,
            onMove: (updn)=>pinnedDMS.setUserList(name, moveArray(users, index, index - (updn === "up" ? +1 : -1)))
            ,
            onRemove: ()=>pinnedDMS.removeUser(name, id)
            ,
            disableUp: index === 0,
            disableDown: index === users.length - 1
        })
    ))));
};
const CategoryHeader = ({ name , index: index2 , hidden =false , onHide  })=>{
    const handleCategoryPos = (updn)=>{
        // -1 = move down by one
        // +1 = move up by one
        const index = Object.keys(pinnedDMS.getAll()).findIndex((k)=>k === name
        );
        pinnedDMS.setRaw(moveObjectKey(pinnedDMS.getAll(), index, index - updn));
    };
    return(/*#__PURE__*/ React.createElement(Flex, {
        align: Flex.Align.CENTER
    }, /*#__PURE__*/ React.createElement(ListSectionItem, {
        className: joinClasses(classes.PrivateChannelsHeaderContainer.privateChannelsHeaderContainer, components_UserListSettings.exampleListSectionItem)
    }, /*#__PURE__*/ React.createElement(Flex, {
        style: {
            color: pinnedDMS.getColor(name),
            fontWeight: "bold"
        },
        align: Flex.Align.CENTER,
        onClick: onHide
    }, /*#__PURE__*/ React.createElement(DiscordIcon, {
        name: "DropdownArrow",
        className: joinClasses(components_UserListSettings.dropdownArrow, hidden ? components_UserListSettings.hidden : undefined)
    }), name)), /*#__PURE__*/ React.createElement(Popout, {
        position: Popout.Positions.BOTTOM,
        renderPopout: (props)=>/*#__PURE__*/ React.createElement("div", UserListSettings_extends({}, props), /*#__PURE__*/ React.createElement(UserListSettings_Modals_CategorySettingsModal, {
                transitionState: 1,
                onClose: props.closePopout,
                name: name
            }))
    }, (popout)=>/*#__PURE__*/ React.createElement(TooltipContainer, {
            text: "Edit category"
        }, /*#__PURE__*/ React.createElement(Button, UserListSettings_extends({}, popout, {
            size: Button.Sizes.ICON,
            look: Button.Looks.BLANK,
            className: joinClasses(classes.AccountControlButtons.button, classes.AccountControlButtons.enabled)
        }), /*#__PURE__*/ React.createElement(DiscordIcon, {
            name: "Pencil",
            style: {
                width: "20px",
                height: "20px"
            }
        })))
    ), /*#__PURE__*/ React.createElement("div", {
        style: {
            marginRight: "auto"
        }
    }), /*#__PURE__*/ React.createElement(Popout, {
        position: Popout.Positions.LEFT,
        renderPopout: (props)=>/*#__PURE__*/ React.createElement("div", UserListSettings_extends({}, props), /*#__PURE__*/ React.createElement(UserListSettings_Modals_AddUserModal, {
                transitionState: 1,
                onClose: props.closePopout,
                onSelect: (user)=>{
                    if (user.id != null) pinnedDMS.addUser(name, user.id);
                }
            }))
    }, (popout)=>/*#__PURE__*/ React.createElement(TooltipContainer, {
            text: "Add a new person"
        }, /*#__PURE__*/ React.createElement(Button, UserListSettings_extends({}, popout, {
            size: Button.Sizes.ICON,
            look: Button.Looks.BLANK,
            className: joinClasses(classes.AccountControlButtons.button, classes.AccountControlButtons.enabled)
        }), /*#__PURE__*/ React.createElement(DiscordIcon, {
            name: "PersonAdd",
            style: {
                width: "20px",
                height: "20px"
            }
        })))
    ), /*#__PURE__*/ React.createElement(Flex, {
        direction: Flex.Direction.VERTICAL,
        grow: 0,
        shrink: 0
    }, /*#__PURE__*/ React.createElement(Button, {
        size: Button.Sizes.ICON,
        onClick: ()=>handleCategoryPos(+1)
        ,
        disabled: index2 === 0,
        look: Button.Looks.BLANK,
        className: joinClasses(classes.AccountControlButtons.button, index2 === 0 ? classes.AccountControlButtons.disabled : classes.AccountControlButtons.enabled)
    }, /*#__PURE__*/ React.createElement(DiscordIcon, {
        name: "ArrowDropUp"
    })), /*#__PURE__*/ React.createElement(Button, {
        size: Button.Sizes.ICON,
        onClick: ()=>handleCategoryPos(-1)
        ,
        disabled: index2 === pinnedDMS.getCategories().length - 1,
        look: Button.Looks.BLANK,
        className: joinClasses(classes.AccountControlButtons.button, index2 === pinnedDMS.getCategories().length - 1 ? classes.AccountControlButtons.disabled : classes.AccountControlButtons.enabled)
    }, /*#__PURE__*/ React.createElement(DiscordIcon, {
        name: "ArrowDropDown"
    }))), /*#__PURE__*/ React.createElement(TooltipContainer, {
        text: "Delete"
    }, /*#__PURE__*/ React.createElement(Button, {
        size: Button.Sizes.ICON,
        color: Button.Colors.RED,
        onClick: ()=>pinnedDMS.removeCategory(name)
        ,
        look: Button.Looks.LINK
    }, /*#__PURE__*/ React.createElement(DiscordIcon, {
        name: "Trash"
    })))));
};

// EXTERNAL MODULE: ../../../builder/node_modules/.pnpm/css-loader@5.2.7_webpack@5.67.0/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../builder/node_modules/.pnpm/sass-loader@10.2.1_sass@1.49.0+webpack@5.67.0/node_modules/sass-loader/dist/cjs.js!./components/Settings.scss
var Settings = __webpack_require__(561);
;// CONCATENATED MODULE: ./components/Settings.scss

            

var Settings_options = {"attributes":{"ittai":true,"plugin":"DMFolders"}};

Settings_options.insert = "head";
Settings_options.singleton = false;

var Settings_update = injectStylesIntoStyleTag_default()(Settings/* default */.Z, Settings_options);



/* harmony default export */ const components_Settings = (Settings/* default.locals */.Z.locals || {});
;// CONCATENATED MODULE: ./utils/isValidJSON.ts
/* harmony default export */ const isValidJSON = ((json)=>{
    try {
        JSON.parse(json);
        return true;
    } catch (e) {}
    return false;
});

;// CONCATENATED MODULE: ./components/Settings.tsx





//@ts-ignore




function Settings_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function Settings_asyncToGenerator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                Settings_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                Settings_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function Settings_extends() {
    Settings_extends = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source){
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };
    return Settings_extends.apply(this, arguments);
}
/* harmony default export */ function components_Settings_0() {
    const [, forceUpdate] = React.useReducer((v)=>!v
    , false);
    return(/*#__PURE__*/ React.createElement(React.Fragment, null, /*#__PURE__*/ React.createElement(Category_Category, {
        title: "Listed folders",
        description: "Configure the folders and add or change the listed users"
    }, /*#__PURE__*/ React.createElement(components_UserListSettings_0, null)), /*#__PURE__*/ React.createElement(Category_Category, {
        title: "Other settings",
        description: "Other settings that you can tweak"
    }, /*#__PURE__*/ React.createElement(Forms.FormSection, null, /*#__PURE__*/ React.createElement(SwitchItem, {
        value: get("pinIcon", true),
        onChange: (e)=>set("pinIcon", e)
    }, "Show pin icon"), /*#__PURE__*/ React.createElement(Forms.FormItem, null, /*#__PURE__*/ React.createElement(Forms.FormTitle, null, "Display mode"), /*#__PURE__*/ React.createElement(RadioGroup, {
        options: [
            {
                name: "Category",
                value: "category"
            },
            {
                name: "Minimalist",
                value: "minimal"
            }
        ],
        value: get("display", "category"),
        onChange: (v)=>{
            set("display", v.value);
            Dispatcher.dirtyDispatch({
                type: "PINDMS_CHANGE_LIST"
            });
            forceUpdate();
        }
    }), /*#__PURE__*/ React.createElement(Forms.FormDivider, {
        className: joinClasses(classes.Margins.marginBottom20, classes.Margins.marginTop20)
    })), get("display", "category") === "minimal" && /*#__PURE__*/ React.createElement(Forms.FormItem, null, /*#__PURE__*/ React.createElement(Forms.FormTitle, null, "Minimalist view settings"), /*#__PURE__*/ React.createElement(SwitchItem, {
        value: get("minimal.userIcons", false),
        onChange: (e)=>{
            set("minimal.userIcons", e);
            Dispatcher.dirtyDispatch({
                type: "PINDMS_CHANGE_LIST"
            });
        }
    }, "Show user icons")), /*#__PURE__*/ React.createElement(Forms.FormItem, null, /*#__PURE__*/ React.createElement(Forms.FormTitle, null, "Export and import settings"), /*#__PURE__*/ React.createElement(Flex, {
        className: components_Settings.buttonFlex
    }, /*#__PURE__*/ React.createElement(Button, {
        onClick: handleExport
    }, "Export"), /*#__PURE__*/ React.createElement(Button, {
        color: Button.Colors.RED,
        onClick: handleImport
    }, "Import")))))));
};
const handleExport = function() {
    var _ref = Settings_asyncToGenerator(function*() {
        //@ts-ignore
        return DiscordNative.fileManager.saveWithDialog(JSON.stringify(getAll()), "settings.json");
    });
    return function handleExport() {
        return _ref.apply(this, arguments);
    };
}();
const handleImport = function() {
    var _ref = Settings_asyncToGenerator(function*() {
        //@ts-ignore
        const [selectedFile] = yield DiscordNative.fileManager.openFiles("*.json");
        const newSettingsText = new TextDecoder().decode(new Uint8Array(selectedFile.data));
        if (!isValidJSON(newSettingsText)) return void show("Invalid settings file. It should end with \".json\".", {
            duration: 5000
        });
        const newSettings = JSON.parse(newSettingsText);
        const overrideSettings = ()=>{
            settings_reset();
            setAll(newSettings);
        };
        ModalActions.openModal((props)=>/*#__PURE__*/ React.createElement(Modal.ModalRoot, Settings_extends({}, props, {
                size: Modal.ModalSize.SMALL
            }), /*#__PURE__*/ React.createElement(Modal.ModalHeader, {
                separator: false
            }, /*#__PURE__*/ React.createElement(Heading, {
                variant: "heading-lg/medium"
            }, "Save a backup")), /*#__PURE__*/ React.createElement(Modal.ModalContent, null, /*#__PURE__*/ React.createElement(Text, null, "Do you want to save a backup?")), /*#__PURE__*/ React.createElement(Modal.ModalFooter, null, /*#__PURE__*/ React.createElement(Flex, {
                style: {
                    gap: "8px"
                },
                justify: Flex.Justify.END
            }, /*#__PURE__*/ React.createElement(Button, {
                look: Button.Looks.LINK,
                color: Button.Colors.WHITE,
                onClick: props.onClose
            }, "Cancel"), /*#__PURE__*/ React.createElement(Button, {
                look: Button.Looks.LINK,
                color: Button.Colors.RED,
                onClick: ()=>{
                    overrideSettings();
                    props.onClose();
                }
            }, "Override without saving"), /*#__PURE__*/ React.createElement(Button, {
                onClick: Settings_asyncToGenerator(function*() {
                    yield handleExport();
                    overrideSettings();
                    props.onClose();
                })
            }, "Save"))))
        );
    // const stuff: { data: ArrayBuffer, filename: string } = await DiscordNative.fileManager.openFiles("*.json")
    // console.log(stuff)
    });
    return function handleImport() {
        return _ref.apply(this, arguments);
    };
}();

// EXTERNAL MODULE: ../../../builder/node_modules/.pnpm/css-loader@5.2.7_webpack@5.67.0/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../builder/node_modules/.pnpm/sass-loader@10.2.1_sass@1.49.0+webpack@5.67.0/node_modules/sass-loader/dist/cjs.js!./patches/dmlist.scss
var dmlist = __webpack_require__(465);
;// CONCATENATED MODULE: ./patches/dmlist.scss

            

var dmlist_options = {"attributes":{"ittai":true,"plugin":"DMFolders"}};

dmlist_options.insert = "head";
dmlist_options.singleton = false;

var dmlist_update = injectStylesIntoStyleTag_default()(dmlist/* default */.Z, dmlist_options);



/* harmony default export */ const patches_dmlist = (dmlist/* default.locals */.Z.locals || {});
;// CONCATENATED MODULE: ./patches/dmlist.tsx










//@ts-ignore

function dmlist_extends() {
    dmlist_extends = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source){
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };
    return dmlist_extends.apply(this, arguments);
}
const dmlist_ListSectionItem = findByDisplayName("ListSectionItem");
const { DirectMessage  } = findByProps("DirectMessage");
const { NumberBadge  } = findByProps("NumberBadge");
const { getMentionCount  } = findByProps("getMentionCount");
const UserSummaryItem = findByDisplayName("UserSummaryItem");
const USER_ICON_SIZE = 16;
/* harmony default export */ function patches_dmlist_0() {
    let PinDMSRender = ()=>/*#__PURE__*/ React.createElement(CurrentLists, null)
    ;
    //@ts-ignore
    PinDMSRender.displayName = "PinnedDMS";
    // webpack.Dispatcher.subscribe("CHANNEL_UNREAD_UPDATE", console.log)
    after("DMListPatch", find((m)=>{
        var ref;
        return (m === null || m === void 0 ? void 0 : (ref = m.default) === null || ref === void 0 ? void 0 : ref.displayName) === "ConnectedPrivateChannelsList";
    }), "default", ([props], res, _this)=>{
        // console.log({props, res, _this})
        useListUpdate() //temporary, will remove later
        ;
        let PrivateChannelsList = findInReactTree(res, (m)=>{
            var ref;
            return (m === null || m === void 0 ? void 0 : (ref = m.type) === null || ref === void 0 ? void 0 : ref.displayName) === "PrivateChannelsList";
        });
        if (PrivateChannelsList == null) return;
        Object.values(pinnedDMS.getAll()).forEach(({ users  })=>{
            const dmChannels = users.map((id)=>Channels.getDMFromUserId(id)
            );
            PrivateChannelsList.props.privateChannelIds = PrivateChannelsList.props.privateChannelIds.filter((id)=>!dmChannels.includes(id)
            );
        });
        const ogFunc = PrivateChannelsList.type.prototype.render;
        if (ogFunc == null) return;
        Object.assign(PrivateChannelsList.props, {
            original: ogFunc
        });
        // if(!fistPatch) PrivateChannelsList.type.prototype.render = PatchedPrivateChannelsList
        if (PrivateChannelsList.props.children.find((m)=>{
            var ref;
            return (m === null || m === void 0 ? void 0 : (ref = m.type) === null || ref === void 0 ? void 0 : ref.displayName) === "PinnedDMS";
        })) return;
        PrivateChannelsList.props.children.push(/*#__PURE__*/ React.createElement(PinDMSRender, null));
    // console.log(PrivateChannelsList)
    });
};
const CurrentLists = ()=>{
    useListUpdate();
    switch(get("display", "category")){
        case "minimal":
            {
                return(/*#__PURE__*/ React.createElement("div", {
                    className: patches_dmlist.wrapper
                }, pinnedDMS.getCategories().map((category)=>{
                    return(/*#__PURE__*/ React.createElement(MinimalistList, dmlist_extends({}, {
                        category
                    })));
                })));
            }
        default:
            {
                return(/*#__PURE__*/ React.createElement("div", null, pinnedDMS.getCategories().map((category)=>{
                    return(/*#__PURE__*/ React.createElement(CategoryList, dmlist_extends({}, {
                        category
                    })));
                })));
            }
    }
};
const CategoryList = ({ category  })=>{
    return(/*#__PURE__*/ React.createElement(React.Fragment, null, /*#__PURE__*/ React.createElement(dmlist_ListSectionItem, {
        className: classes.PrivateChannelsHeaderContainer.privateChannelsHeaderContainer
    }, /*#__PURE__*/ React.createElement("span", {
        style: {
            color: pinnedDMS.getColor(category)
        }
    }, category)), pinnedDMS.getUsers(category).map((userId)=>{
        const dmId = Channels.getDMFromUserId(userId);
        if (dmId == null) return null;
        return(/*#__PURE__*/ React.createElement(DirectMessage, {
            key: dmId,
            channel: Channels.getChannel(dmId),
            selected: CurrentChannels.getChannelId() === dmId
        }));
    })));
};
const MinimalistList = ({ category  })=>{
    const currentUsers = pinnedDMS.getUsers(category);
    const hasSomebody = currentUsers.some((userId)=>CurrentChannels.getChannelId() === Channels.getDMFromUserId(userId)
    );
    const [pingCount, setPingCount] = React.useState(()=>{
        return currentUsers.map((userId)=>Channels.getDMFromUserId(userId)
        ).reduce((acc, channelId)=>acc + getMentionCount(channelId)
        , 0);
    });
    React.useEffect(()=>{
        const listener = ({ channelId: channelId1  })=>{
            if (currentUsers.some((userId)=>channelId1 === Channels.getDMFromUserId(userId)
            )) setPingCount(currentUsers.map((userId)=>Channels.getDMFromUserId(userId)
            ).reduce((acc, channelId)=>acc + getMentionCount(channelId)
            , 0));
        };
        Dispatcher.subscribe("MESSAGE_CREATE", listener);
        return ()=>Dispatcher.unsubscribe("MESSAGE_CREATE", listener)
        ;
    }, []);
    return(/*#__PURE__*/ React.createElement(React.Fragment, null, /*#__PURE__*/ React.createElement(Popout, {
        position: Popout.Positions.RIGHT,
        animation: Popout.Animation.NONE,
        renderPopout: (props)=>/*#__PURE__*/ React.createElement("div", dmlist_extends({}, props), /*#__PURE__*/ React.createElement(Modal.ModalRoot, {
                transitionState: 1,
                size: Modal.ModalSize.DYNAMIC
            }, /*#__PURE__*/ React.createElement("div", {
                className: patches_dmlist.minimalisticPopout
            }, currentUsers.map((userId)=>{
                const dmId = Channels.getDMFromUserId(userId);
                // console.log(Channels.getChannel(dmId), Channels.getChannel(dmId).recipients.includes("376493261755252736"))
                if (dmId == null) return null;
                return(/*#__PURE__*/ React.createElement(DirectMessage, {
                    key: dmId,
                    channel: Channels.getChannel(dmId),
                    selected: CurrentChannels.getChannelId() === dmId
                }));
            }))))
    }, (props)=>/*#__PURE__*/ React.createElement("div", dmlist_extends({}, props, {
            className: joinClasses(classes.DMButtons.channel, classes.container)
        }), /*#__PURE__*/ React.createElement("div", {
            className: joinClasses(classes.DMButtons.interactive, classes.Interactives.interactive, hasSomebody ? joinClasses(classes.DMButtons.interactiveSelected, classes.Interactives.selected) : undefined, classes.DMButtons.linkButton)
        }, /*#__PURE__*/ React.createElement("div", {
            className: joinClasses(classes.Names.layout, patches_dmlist.minimalisticView)
        }, /*#__PURE__*/ React.createElement(Flex, {
            direction: Flex.Direction.VERTICAL,
            className: patches_dmlist.nameAndUsers
        }, /*#__PURE__*/ React.createElement("span", {
            style: {
                color: pinnedDMS.getColor(category),
                fontWeight: "bold"
            }
        }, category), get("minimal.userIcons", false) && /*#__PURE__*/ React.createElement(UserSummaryItem, {
            size: USER_ICON_SIZE,
            users: pinnedDMS.getUsers(category).map((userId)=>Users.getUser(userId)
            )
        })), Boolean(pingCount) && /*#__PURE__*/ React.createElement(NumberBadge, {
            count: pingCount
        }))))
    )));
};

// EXTERNAL MODULE: ../../../builder/node_modules/.pnpm/css-loader@5.2.7_webpack@5.67.0/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../builder/node_modules/.pnpm/sass-loader@10.2.1_sass@1.49.0+webpack@5.67.0/node_modules/sass-loader/dist/cjs.js!./patches/dmbutton.scss
var dmbutton = __webpack_require__(174);
;// CONCATENATED MODULE: ./patches/dmbutton.scss

            

var dmbutton_options = {"attributes":{"ittai":true,"plugin":"DMFolders"}};

dmbutton_options.insert = "head";
dmbutton_options.singleton = false;

var dmbutton_update = injectStylesIntoStyleTag_default()(dmbutton/* default */.Z, dmbutton_options);



/* harmony default export */ const patches_dmbutton = (dmbutton/* default.locals */.Z.locals || {});
// EXTERNAL MODULE: ../../../builder/node_modules/.pnpm/css-loader@5.2.7_webpack@5.67.0/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../builder/node_modules/.pnpm/sass-loader@10.2.1_sass@1.49.0+webpack@5.67.0/node_modules/sass-loader/dist/cjs.js!./components/ContextMenus/AddUser.scss
var AddUser = __webpack_require__(327);
;// CONCATENATED MODULE: ./components/ContextMenus/AddUser.scss

            

var AddUser_options = {"attributes":{"ittai":true,"plugin":"DMFolders"}};

AddUser_options.insert = "head";
AddUser_options.singleton = false;

var AddUser_update = injectStylesIntoStyleTag_default()(AddUser/* default */.Z, AddUser_options);



/* harmony default export */ const ContextMenus_AddUser = (AddUser/* default.locals */.Z.locals || {});
;// CONCATENATED MODULE: ./components/ContextMenus/AddUser.tsx





//@ts-ignore

const AddUser_UserSummaryItem = findByDisplayName("UserSummaryItem");
const AddUser_USER_ICON_SIZE = 16;
const MAX_USERS_DISPLAY = 5;
/* harmony default export */ function components_ContextMenus_AddUser(props) {
    return(/*#__PURE__*/ React.createElement(components_ContextMenu, {
        navId: "pin-user",
        onClose: ContextMenu.closeContextMenu
    }, /*#__PURE__*/ React.createElement(components_ContextMenu.MenuGroup, {
        label: "Add to category"
    }, pinnedDMS.getCategories().map((category)=>/*#__PURE__*/ React.createElement(components_ContextMenu.MenuItem, {
            id: category,
            label: /*#__PURE__*/ React.createElement(Flex, null, /*#__PURE__*/ React.createElement("span", {
                className: ContextMenus_AddUser.text,
                style: {
                    color: pinnedDMS.getColor(category)
                }
            }, category), /*#__PURE__*/ React.createElement(AddUser_UserSummaryItem, {
                size: AddUser_USER_ICON_SIZE,
                max: MAX_USERS_DISPLAY,
                users: pinnedDMS.getUsers(category).sort(()=>Math.random() - 0.5
                ).map((userId)=>Users.getUser(userId)
                )
            })),
            action: ()=>pinnedDMS.addUser(category, props.userId)
        })
    ))));
};

;// CONCATENATED MODULE: ./patches/dmbutton.tsx





//@ts-ignore



const { React: dmbutton_React  } = webpack_namespaceObject;
/* harmony default export */ function patches_dmbutton_0() {
    after("DMButtonPatch", findByDisplayName("PrivateChannel").prototype, "render", (_, res, _this)=>{
        // console.log({ _this, res })
        const user = _this.props.user;
        const isAdded = pinnedDMS.isUserAdded(user.id);
        const ogChildren = res.props.children;
        if (ogChildren == null) return;
        res.props.children = function(...args) {
            const ret = ogChildren.apply(this, args);
            // console.log(ret)
            ret.props.className += ` ${patches_dmbutton.pinHoverHandler}`;
            const Interactive = ret.props.children;
            if (user && !user.bot) {
                const closeIndex = Interactive.props.children.findIndex((e)=>e.type.displayName === "CloseButton"
                );
                if (isAdded && closeIndex) {
                    delete Interactive.props.children[closeIndex];
                }
                if (get("pinIcon", true)) {
                    Interactive.props.children.splice(1, 0, /*#__PURE__*/ dmbutton_React.createElement("div", {
                        className: joinClasses(patches_dmbutton.pinButton, isAdded ? patches_dmbutton.lonely : ""),
                        onClick: (e)=>{
                            // console.log(ContextMenu)
                            if (isAdded) {
                                pinnedDMS.removeUser(pinnedDMS.getUserCategory(user.id), user.id);
                            } else {
                                //@ts-ignore
                                ContextMenu.openContextMenu(e, ()=>/*#__PURE__*/ dmbutton_React.createElement(components_ContextMenus_AddUser, {
                                        userId: user.id
                                    })
                                );
                            }
                        }
                    }, !isAdded ? /*#__PURE__*/ dmbutton_React.createElement(DiscordIcon, {
                        name: "PinLayer"
                    }) : /*#__PURE__*/ dmbutton_React.createElement(DiscordIcon, {
                        name: "UnpinLayer"
                    })));
                }
            }
            return ret;
        };
    });
};

;// CONCATENATED MODULE: ./index.tsx
/// <reference path="./types.d.ts" />







const { React: index_React  } = webpack_namespaceObject;
const Uh = ()=>{
    return(/*#__PURE__*/ index_React.createElement("div", null, "boo"));
};
class DMFolders extends Plugin_Plugin {
    start() {
        this.setSettingsPanel(()=>/*#__PURE__*/ index_React.createElement(components_Settings_0, null)
        );
        //@ts-ignore internal usage only
        globalThis.searchClassNameModules = searchClassNameModules;
        patches_dmlist_0();
        patches_dmbutton_0();
    // patcher.after(
    //     "DMPatch",
    //     webpack.find(
    //         (m) =>
    //             m?.default?.displayName === "ConnectedPrivateChannelsList"
    //     ),
    //     "default",
    //     ([props], res, _this) => {
    //         console.log({ props, res, _this })
    //         let PrivateChannelsList: {
    //             props: {
    //                 children: React.ReactNode[]
    //                 privateChannelIds: string[]
    //             }
    //         } = findInReactTree(
    //             res,
    //             (m: { type: { displayName: string } }) =>
    //                 m?.type?.displayName === "PrivateChannelsList"
    //         ) as any
    //         if (PrivateChannelsList == null) return
    //         PrivateChannelsList.props.children.push(
    //             ["", "", "","","","","","","","","","",].map(() => <Uh />)
    //         )
    //         console.log(PrivateChannelsList)
    //     }
    // )
    }
    stop() {
        unpatchAll();
    }
}



/***/ }),

/***/ 634:
/***/ ((module) => {

module.exports = require("powercord");

/***/ }),

/***/ 312:
/***/ ((module) => {

module.exports = require("powercord/webpack");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module doesn't tell about it's top-level declarations so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(638);
/******/ 	plugin = __webpack_exports__;
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map
plugin = plugin.default;let ittaiLoadDevMode = false;try{isIttaiLoadingDevMode;ittaiLoadDevMode=true;}catch(e){}let wrappedPlugin = plugin.__ittaiWrap(plugin, ittaiLoadDevMode);if (hasModule) module.exports = wrappedPlugin;return wrappedPlugin;})();