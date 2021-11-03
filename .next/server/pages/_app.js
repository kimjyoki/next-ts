"use strict";
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/store */ "./store/store.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/mnt/c/Projects/next-yarn2/pages/_app.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const MyApp = ({
  Component,
  pageProps
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_0__.Provider, {
    store: _store_store__WEBPACK_IMPORTED_MODULE_1__.default,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      children: "Valid MyApp type."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, undefined);
};

MyApp.getInitialProps = async ({
  Component,
  ctx
}) => {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return {
    pageProps
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

/***/ }),

/***/ "./store/features/issuesDisplayWrapper.ts":
/*!************************************************!*\
  !*** ./store/features/issuesDisplayWrapper.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayRepo": () => (/* binding */ displayRepo),
/* harmony export */   "setCurrentDisplayType": () => (/* binding */ setCurrentDisplayType),
/* harmony export */   "setCurrentPage": () => (/* binding */ setCurrentPage),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

let initialState = {
  org: 'rails',
  repo: 'rails',
  page: 1,
  displayType: 'issues',
  issueId: null
};
const issuesDisplaySlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: 'issuesDisplay',
  initialState,
  reducers: {
    displayRepo(state, action) {
      const {
        org,
        repo
      } = action.payload;
      state.org = org;
      state.repo = repo;
    },

    setCurrentPage(state, action) {
      state.page = action.payload;
    },

    setCurrentDisplayType(state, action) {
      const {
        displayType,
        issueId = null
      } = action.payload;
      state.displayType = displayType;
      state.issueId = issueId;
    }

  }
});
const {
  displayRepo,
  setCurrentDisplayType,
  setCurrentPage
} = issuesDisplaySlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (issuesDisplaySlice.reducer);

/***/ }),

/***/ "./store/modules/index.ts":
/*!********************************!*\
  !*** ./store/modules/index.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _features_issuesDisplayWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../features/issuesDisplayWrapper */ "./store/features/issuesDisplayWrapper.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const rootReducer = (state = {
  tick: "init"
}, action) => {
  switch (action.type) {
    case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__.HYDRATE:
      // Attention! This will overwrite client state! Real apps should use proper reconciliation.
      return _objectSpread(_objectSpread({}, state), action.payload);

    case "TICK":
      return _objectSpread(_objectSpread({}, state), action.payload);

    default:
      return (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({
        issuesDisplayWrapper: _features_issuesDisplayWrapper__WEBPACK_IMPORTED_MODULE_2__.default
      });
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (rootReducer);

/***/ }),

/***/ "./store/store.ts":
/*!************************!*\
  !*** ./store/store.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "wrapper": () => (/* binding */ wrapper),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-logger */ "redux-logger");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_logger__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules */ "./store/modules/index.ts");




const debugMode = true;
const store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({
  reducer: _modules__WEBPACK_IMPORTED_MODULE_3__.default,
  middleware: getDefaultMiddleware => getDefaultMiddleware().prepend // correctly typed middlewares can just be used
  // additionalMiddleware,
  // you can also type middlewares manually
  // untypedMiddleware as Middleware<
  //   (action: Action<'specialAction'>) => number,
  //   RootState
  // >
  () // prepend and concat calls can be chained
  .concat((redux_logger__WEBPACK_IMPORTED_MODULE_2___default()))
});

const makeStore = context => store; // Infer the `RootState` and `AppDispatch` types from the store itself


const wrapper = (0,next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__.createWrapper)(makeStore, {
  debug: debugMode
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store);

/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "redux-logger":
/*!*******************************!*\
  !*** external "redux-logger" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("redux-logger");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFNLENBQUNDLE9BQTdCOztBQUNGLFNBQUssTUFBTDtBQUNFLDZDQUFZRixLQUFaLEdBQXNCQyxNQUFNLENBQUNDLE9BQTdCOztBQUNGO0FBQ0UsYUFBT0ssaUVBQWUsQ0FBQztBQUNyQkUsUUFBQUEsb0JBQW9CQSxxRUFBQUE7QUFEQyxPQUFELENBQXRCO0FBUEo7QUFXRCxDQVpEOztBQWNBLGlFQUFlQyxXQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTU0sU0FBUyxPQUFmO0FBRUEsTUFBTWpDLEtBQUssR0FBRzhCLGdFQUFjLENBQUM7QUFDM0JQLEVBQUFBLE9BQU8sRUFBRUksNkNBRGtCO0FBRTNCTyxFQUFBQSxVQUFVLEVBQUVDLG9CQUFvQixJQUM5QkEsb0JBQW9CLEdBQ2pCQyxPQURILENBRUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSRixLQVVFO0FBVkYsR0FXR0MsTUFYSCxDQVdVTCxxREFYVjtBQUh5QixDQUFELENBQTVCOztBQWlCQSxNQUFNTSxTQUFTLEdBQUlDLE9BQUQsSUFBc0J2QyxLQUF4QyxFQUVBOzs7QUFJTyxNQUFNd0MsT0FBTyxHQUFHVCxpRUFBYSxDQUFDTyxTQUFELEVBQVk7QUFBRUcsRUFBQUEsS0FBSyxFQUFFUjtBQUFULENBQVosQ0FBN0I7QUFDUCxpRUFBZWpDLEtBQWY7Ozs7Ozs7Ozs7QUMvQkE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQteWFybjIvLi9wYWdlcy9fYXBwLnRzeCIsIndlYnBhY2s6Ly9uZXh0LXlhcm4yLy4vc3RvcmUvZmVhdHVyZXMvaXNzdWVzRGlzcGxheVdyYXBwZXIudHMiLCJ3ZWJwYWNrOi8vbmV4dC15YXJuMi8uL3N0b3JlL21vZHVsZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vbmV4dC15YXJuMi8uL3N0b3JlL3N0b3JlLnRzIiwid2VicGFjazovL25leHQteWFybjIvZXh0ZXJuYWwgXCJAcmVkdXhqcy90b29sa2l0XCIiLCJ3ZWJwYWNrOi8vbmV4dC15YXJuMi9leHRlcm5hbCBcIm5leHQtcmVkdXgtd3JhcHBlclwiIiwid2VicGFjazovL25leHQteWFybjIvZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovL25leHQteWFybjIvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9uZXh0LXlhcm4yL2V4dGVybmFsIFwicmVkdXgtbG9nZ2VyXCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dENvbXBvbmVudFR5cGUgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IHsgQXBwQ29udGV4dCwgQXBwSW5pdGlhbFByb3BzLCBBcHBQcm9wcyB9IGZyb20gXCJuZXh0L2FwcFwiO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCBzdG9yZSBmcm9tIFwiLi4vc3RvcmUvc3RvcmVcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9MYXlvdXRcIjtcblxuY29uc3QgTXlBcHA6IE5leHRDb21wb25lbnRUeXBlPEFwcENvbnRleHQsIEFwcEluaXRpYWxQcm9wcywgQXBwUHJvcHM+ID0gKHtcbiAgQ29tcG9uZW50LFxuICBwYWdlUHJvcHMsXG59OiBBcHBQcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgICAgPGRpdj5WYWxpZCBNeUFwcCB0eXBlLjwvZGl2PlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgIDwvUHJvdmlkZXI+XG4gICk7XG59O1xuXG5NeUFwcC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoeyBDb21wb25lbnQsIGN0eCB9OiBBcHBDb250ZXh0KTogUHJvbWlzZTxBcHBJbml0aWFsUHJvcHM+ID0+IHtcbiAgbGV0IHBhZ2VQcm9wcyA9IHt9O1xuXG4gIGlmIChDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgcGFnZVByb3BzID0gYXdhaXQgQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcyhjdHgpO1xuICB9XG5cbiAgcmV0dXJuIHsgcGFnZVByb3BzIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcbiIsImltcG9ydCB7IGNyZWF0ZVNsaWNlLCBQYXlsb2FkQWN0aW9uIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCdcblxuaW50ZXJmYWNlIEN1cnJlbnREaXNwbGF5IHtcbiAgZGlzcGxheVR5cGU6ICdpc3N1ZXMnIHwgJ2NvbW1lbnRzJ1xuICBpc3N1ZUlkOiBudW1iZXIgfCBudWxsXG59XG5cbmludGVyZmFjZSBDdXJyZW50RGlzcGxheVBheWxvYWQge1xuICBkaXNwbGF5VHlwZTogJ2lzc3VlcycgfCAnY29tbWVudHMnXG4gIGlzc3VlSWQ/OiBudW1iZXJcbn1cblxuaW50ZXJmYWNlIEN1cnJlbnRSZXBvIHtcbiAgb3JnOiBzdHJpbmdcbiAgcmVwbzogc3RyaW5nXG59XG5cbnR5cGUgQ3VycmVudERpc3BsYXlTdGF0ZSA9IHtcbiAgcGFnZTogbnVtYmVyXG59ICYgQ3VycmVudERpc3BsYXkgJlxuICBDdXJyZW50UmVwb1xuXG5sZXQgaW5pdGlhbFN0YXRlOiBDdXJyZW50RGlzcGxheVN0YXRlID0ge1xuICBvcmc6ICdyYWlscycsXG4gIHJlcG86ICdyYWlscycsXG4gIHBhZ2U6IDEsXG4gIGRpc3BsYXlUeXBlOiAnaXNzdWVzJyxcbiAgaXNzdWVJZDogbnVsbFxufVxuXG5jb25zdCBpc3N1ZXNEaXNwbGF5U2xpY2UgPSBjcmVhdGVTbGljZSh7XG4gIG5hbWU6ICdpc3N1ZXNEaXNwbGF5JyxcbiAgaW5pdGlhbFN0YXRlLFxuICByZWR1Y2Vyczoge1xuICAgIGRpc3BsYXlSZXBvKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248Q3VycmVudFJlcG8+KSB7XG4gICAgICBjb25zdCB7IG9yZywgcmVwbyB9ID0gYWN0aW9uLnBheWxvYWRcbiAgICAgIHN0YXRlLm9yZyA9IG9yZ1xuICAgICAgc3RhdGUucmVwbyA9IHJlcG9cbiAgICB9LFxuICAgIHNldEN1cnJlbnRQYWdlKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248bnVtYmVyPikge1xuICAgICAgc3RhdGUucGFnZSA9IGFjdGlvbi5wYXlsb2FkXG4gICAgfSxcbiAgICBzZXRDdXJyZW50RGlzcGxheVR5cGUoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxDdXJyZW50RGlzcGxheVBheWxvYWQ+KSB7XG4gICAgICBjb25zdCB7IGRpc3BsYXlUeXBlLCBpc3N1ZUlkID0gbnVsbCB9ID0gYWN0aW9uLnBheWxvYWRcbiAgICAgIHN0YXRlLmRpc3BsYXlUeXBlID0gZGlzcGxheVR5cGVcbiAgICAgIHN0YXRlLmlzc3VlSWQgPSBpc3N1ZUlkXG4gICAgfVxuICB9XG59KVxuXG5leHBvcnQgY29uc3Qge1xuICBkaXNwbGF5UmVwbyxcbiAgc2V0Q3VycmVudERpc3BsYXlUeXBlLFxuICBzZXRDdXJyZW50UGFnZVxufSA9IGlzc3Vlc0Rpc3BsYXlTbGljZS5hY3Rpb25zXG5cbmV4cG9ydCBkZWZhdWx0IGlzc3Vlc0Rpc3BsYXlTbGljZS5yZWR1Y2VyXG4iLCJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMsIEFueUFjdGlvbiB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XG5pbXBvcnQgeyBIWURSQVRFIH0gZnJvbSBcIm5leHQtcmVkdXgtd3JhcHBlclwiO1xuaW1wb3J0IHsgUm9vdFN0YXRlIH0gZnJvbSBcIi4uL3N0b3JlXCI7XG5cbmltcG9ydCBpc3N1ZXNEaXNwbGF5V3JhcHBlciBmcm9tIFwiLi4vZmVhdHVyZXMvaXNzdWVzRGlzcGxheVdyYXBwZXJcIjtcblxuZXhwb3J0IGludGVyZmFjZSBTdGF0ZSB7XG4gIHRpY2s6IHN0cmluZztcbn1cblxuY29uc3Qgcm9vdFJlZHVjZXIgPSAoc3RhdGU6IFN0YXRlID0geyB0aWNrOiBcImluaXRcIiB9LCBhY3Rpb246IEFueUFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBIWURSQVRFOlxuICAgICAgLy8gQXR0ZW50aW9uISBUaGlzIHdpbGwgb3ZlcndyaXRlIGNsaWVudCBzdGF0ZSEgUmVhbCBhcHBzIHNob3VsZCB1c2UgcHJvcGVyIHJlY29uY2lsaWF0aW9uLlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIC4uLmFjdGlvbi5wYXlsb2FkIH07XG4gICAgY2FzZSBcIlRJQ0tcIjpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCAuLi5hY3Rpb24ucGF5bG9hZCB9O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gY29tYmluZVJlZHVjZXJzKHtcbiAgICAgICAgaXNzdWVzRGlzcGxheVdyYXBwZXIsXG4gICAgICB9KTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXI7XG4iLCJpbXBvcnQgeyBjb25maWd1cmVTdG9yZSB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XG5pbXBvcnQgeyBDb250ZXh0LCBjcmVhdGVXcmFwcGVyIH0gZnJvbSBcIm5leHQtcmVkdXgtd3JhcHBlclwiO1xuaW1wb3J0IGxvZ2dlciBmcm9tIFwicmVkdXgtbG9nZ2VyXCI7XG5pbXBvcnQgcm9vdFJlZHVjZXIgZnJvbSBcIi4vbW9kdWxlc1wiO1xuXG5jb25zdCBkZWJ1Z01vZGUgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiO1xuXG5jb25zdCBzdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKHtcbiAgcmVkdWNlcjogcm9vdFJlZHVjZXIsXG4gIG1pZGRsZXdhcmU6IGdldERlZmF1bHRNaWRkbGV3YXJlID0+XG4gICAgZ2V0RGVmYXVsdE1pZGRsZXdhcmUoKVxuICAgICAgLnByZXBlbmRcbiAgICAgIC8vIGNvcnJlY3RseSB0eXBlZCBtaWRkbGV3YXJlcyBjYW4ganVzdCBiZSB1c2VkXG4gICAgICAvLyBhZGRpdGlvbmFsTWlkZGxld2FyZSxcbiAgICAgIC8vIHlvdSBjYW4gYWxzbyB0eXBlIG1pZGRsZXdhcmVzIG1hbnVhbGx5XG4gICAgICAvLyB1bnR5cGVkTWlkZGxld2FyZSBhcyBNaWRkbGV3YXJlPFxuICAgICAgLy8gICAoYWN0aW9uOiBBY3Rpb248J3NwZWNpYWxBY3Rpb24nPikgPT4gbnVtYmVyLFxuICAgICAgLy8gICBSb290U3RhdGVcbiAgICAgIC8vID5cbiAgICAgICgpXG4gICAgICAvLyBwcmVwZW5kIGFuZCBjb25jYXQgY2FsbHMgY2FuIGJlIGNoYWluZWRcbiAgICAgIC5jb25jYXQobG9nZ2VyKSxcbn0pO1xuXG5jb25zdCBtYWtlU3RvcmUgPSAoY29udGV4dDogQ29udGV4dCkgPT4gc3RvcmU7XG5cbi8vIEluZmVyIHRoZSBgUm9vdFN0YXRlYCBhbmQgYEFwcERpc3BhdGNoYCB0eXBlcyBmcm9tIHRoZSBzdG9yZSBpdHNlbGZcbmV4cG9ydCB0eXBlIFJvb3RTdGF0ZSA9IFJldHVyblR5cGU8dHlwZW9mIHN0b3JlLmdldFN0YXRlPjtcbmV4cG9ydCB0eXBlIEFwcERpc3BhdGNoID0gdHlwZW9mIHN0b3JlLmRpc3BhdGNoO1xuXG5leHBvcnQgY29uc3Qgd3JhcHBlciA9IGNyZWF0ZVdyYXBwZXIobWFrZVN0b3JlLCB7IGRlYnVnOiBkZWJ1Z01vZGUgfSk7XG5leHBvcnQgZGVmYXVsdCBzdG9yZVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHJlZHV4anMvdG9vbGtpdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXJlZHV4LXdyYXBwZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWxvZ2dlclwiKTsiXSwibmFtZXMiOlsiUHJvdmlkZXIiLCJzdG9yZSIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4IiwiY3JlYXRlU2xpY2UiLCJpbml0aWFsU3RhdGUiLCJvcmciLCJyZXBvIiwicGFnZSIsImRpc3BsYXlUeXBlIiwiaXNzdWVJZCIsImlzc3Vlc0Rpc3BsYXlTbGljZSIsIm5hbWUiLCJyZWR1Y2VycyIsImRpc3BsYXlSZXBvIiwic3RhdGUiLCJhY3Rpb24iLCJwYXlsb2FkIiwic2V0Q3VycmVudFBhZ2UiLCJzZXRDdXJyZW50RGlzcGxheVR5cGUiLCJhY3Rpb25zIiwicmVkdWNlciIsImNvbWJpbmVSZWR1Y2VycyIsIkhZRFJBVEUiLCJpc3N1ZXNEaXNwbGF5V3JhcHBlciIsInJvb3RSZWR1Y2VyIiwidGljayIsInR5cGUiLCJjb25maWd1cmVTdG9yZSIsImNyZWF0ZVdyYXBwZXIiLCJsb2dnZXIiLCJkZWJ1Z01vZGUiLCJtaWRkbGV3YXJlIiwiZ2V0RGVmYXVsdE1pZGRsZXdhcmUiLCJwcmVwZW5kIiwiY29uY2F0IiwibWFrZVN0b3JlIiwiY29udGV4dCIsIndyYXBwZXIiLCJkZWJ1ZyJdLCJzb3VyY2VSb290IjoiIn0=