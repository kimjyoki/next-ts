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
/* harmony import */ var _src_styles_reset__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/styles/reset */ "./src/styles/reset.js");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/react */ "@emotion/react");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store */ "./store/index.js");
/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ "@emotion/react/jsx-dev-runtime");
/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/mnt/c/Projects/next/next-yarn2/pages/_app.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






function MyApp({
  Component,
  pageProps
}) {
  return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
    children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_emotion_react__WEBPACK_IMPORTED_MODULE_1__.Global, {
      styles: _src_styles_reset__WEBPACK_IMPORTED_MODULE_0__.default
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_store__WEBPACK_IMPORTED_MODULE_2__.wrapper.withRedux(MyApp));

/***/ }),

/***/ "./src/styles/reset.js":
/*!*****************************!*\
  !*** ./src/styles/reset.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react */ "@emotion/react");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_0__);
function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }


const reset =  false ? 0 : {
  name: "1btvhj8-reset",
  styles: "*{box-sizing:border-box;font-family:Apple SD Gothinc Neo,Malgun Gothic,sans-serif;};label:reset;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvYy9Qcm9qZWN0cy9uZXh0L25leHQteWFybjIvc3JjL3N0eWxlcy9yZXNldC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFaUIiLCJmaWxlIjoiL21udC9jL1Byb2plY3RzL25leHQvbmV4dC15YXJuMi9zcmMvc3R5bGVzL3Jlc2V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3NzIH0gZnJvbSBcIkBlbW90aW9uL3JlYWN0XCI7XG5cbmNvbnN0IHJlc2V0ID0gY3NzYFxuICAqIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGZvbnQtZmFtaWx5OiBBcHBsZSBTRCBHb3RoaW5jIE5lbywgTWFsZ3VuIEdvdGhpYywgc2Fucy1zZXJpZjtcbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgcmVzZXQ7XG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reset);

/***/ }),

/***/ "./store/index.js":
/*!************************!*\
  !*** ./store/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "wrapper": () => (/* binding */ wrapper)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-logger */ "redux-logger");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_logger__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules */ "./store/modules/index.js");





const makeStore = context => (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({
  reducer: _modules__WEBPACK_IMPORTED_MODULE_3__.default,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat((redux_logger__WEBPACK_IMPORTED_MODULE_2___default())),
  devTooles: true
});

const wrapper = (0,next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__.createWrapper)(makeStore, {
  debug: true
});

/***/ }),

/***/ "./store/modules/counter.js":
/*!**********************************!*\
  !*** ./store/modules/counter.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "increament": () => (/* binding */ increament),
/* harmony export */   "decreament": () => (/* binding */ decreament),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
  value: 0
};
const counterSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: 'counter',
  initialState,
  reducers: {
    increament: state => {
      state.value += 1;
    },
    decreament: state => {
      state.value -= 1;
    }
  }
});
const {
  increament,
  decreament
} = counterSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (counterSlice.reducer);

/***/ }),

/***/ "./store/modules/index.js":
/*!********************************!*\
  !*** ./store/modules/index.js ***!
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
/* harmony import */ var _counter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./counter */ "./store/modules/counter.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const reducer = (state, action) => {
  if (action.type === next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__.HYDRATE) {
    return _objectSpread(_objectSpread({}, state), action.payload);
  }

  return (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({
    counter: _counter__WEBPACK_IMPORTED_MODULE_2__.default // ...

  })(state, action);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reducer);

/***/ }),

/***/ "@emotion/react":
/*!*********************************!*\
  !*** external "@emotion/react" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@emotion/react");

/***/ }),

/***/ "@emotion/react/jsx-dev-runtime":
/*!*************************************************!*\
  !*** external "@emotion/react/jsx-dev-runtime" ***!
  \*************************************************/
/***/ ((module) => {

module.exports = require("@emotion/react/jsx-dev-runtime");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBOzs7QUFFQSxTQUFTRyxLQUFULENBQWU7QUFBRUMsRUFBQUEsU0FBRjtBQUFhQyxFQUFBQTtBQUFiLENBQWYsRUFBbUQ7QUFDakQsU0FDRTtBQUFBLGVBQ0UsdUVBQUMsU0FBRCxvQkFBZUEsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsRUFFRSx1RUFBQyxrREFBRDtBQUFRLFlBQU0sRUFBRUwsc0RBQUtBO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQU1EOztBQUNELGlFQUFlRSxxREFBQSxDQUFrQkMsS0FBbEIsQ0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYkE7QUFFQSxNQUFNSCxLQUFLLEdBQUcsVUFBSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FBWDtBQU9BLGlFQUFlQSxLQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQSxNQUFNWSxTQUFTLEdBQUdDLE9BQU8sSUFDdkJMLGdFQUFjLENBQUM7QUFDYkcsRUFBQUEsT0FEYTtBQUViRyxFQUFBQSxVQUFVLEVBQUVDLG9CQUFvQixJQUFJQSxvQkFBb0IsR0FBR0MsTUFBdkIsQ0FBOEJOLHFEQUE5QixDQUZ2QjtBQUdiTyxFQUFBQSxTQUFTO0FBSEksQ0FBRCxDQURoQjs7QUFPTyxNQUFNZixPQUFPLEdBQUdPLGlFQUFhLENBQUNHLFNBQUQsRUFBWTtBQUM5Q00sRUFBQUEsS0FBSztBQUR5QyxDQUFaLENBQTdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiUDtBQUVBLE1BQU1FLFlBQVksR0FBRztBQUFFQyxFQUFBQSxLQUFLLEVBQUU7QUFBVCxDQUFyQjtBQUVBLE1BQU1DLFlBQVksR0FBR0gsNkRBQVcsQ0FBQztBQUMvQkksRUFBQUEsSUFBSSxFQUFFLFNBRHlCO0FBRS9CSCxFQUFBQSxZQUYrQjtBQUcvQkksRUFBQUEsUUFBUSxFQUFFO0FBQ1JDLElBQUFBLFVBQVUsRUFBRUMsS0FBSyxJQUFJO0FBQ25CQSxNQUFBQSxLQUFLLENBQUNMLEtBQU4sSUFBZSxDQUFmO0FBQ0QsS0FITztBQUlSTSxJQUFBQSxVQUFVLEVBQUVELEtBQUssSUFBSTtBQUNuQkEsTUFBQUEsS0FBSyxDQUFDTCxLQUFOLElBQWUsQ0FBZjtBQUNEO0FBTk87QUFIcUIsQ0FBRCxDQUFoQztBQWFPLE1BQU07QUFBRUksRUFBQUEsVUFBRjtBQUFjRSxFQUFBQTtBQUFkLElBQTRCTCxZQUFZLENBQUNNLE9BQS9DO0FBQ1AsaUVBQWVOLFlBQVksQ0FBQ1gsT0FBNUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQkE7QUFDQTtBQUVBOztBQUVBLE1BQU1BLE9BQU8sR0FBRyxDQUFDZSxLQUFELEVBQVFNLE1BQVIsS0FBbUI7QUFDakMsTUFBSUEsTUFBTSxDQUFDQyxJQUFQLEtBQWdCSCx1REFBcEIsRUFBNkI7QUFDM0IsMkNBQ0tKLEtBREwsR0FFS00sTUFBTSxDQUFDRSxPQUZaO0FBSUQ7O0FBRUQsU0FBT0wsaUVBQWUsQ0FBQztBQUNyQkUsSUFBQUEsT0FEcUIsZ0RBRXJCOztBQUZxQixHQUFELENBQWYsQ0FHSkwsS0FISSxFQUdHTSxNQUhILENBQVA7QUFJRCxDQVpEOztBQWNBLGlFQUFlckIsT0FBZjs7Ozs7Ozs7OztBQ25CQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC15YXJuMi8uL3BhZ2VzL19hcHAudHN4Iiwid2VicGFjazovL25leHQteWFybjIvLi9zcmMvc3R5bGVzL3Jlc2V0LmpzIiwid2VicGFjazovL25leHQteWFybjIvLi9zdG9yZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9uZXh0LXlhcm4yLy4vc3RvcmUvbW9kdWxlcy9jb3VudGVyLmpzIiwid2VicGFjazovL25leHQteWFybjIvLi9zdG9yZS9tb2R1bGVzL2luZGV4LmpzIiwid2VicGFjazovL25leHQteWFybjIvZXh0ZXJuYWwgXCJAZW1vdGlvbi9yZWFjdFwiIiwid2VicGFjazovL25leHQteWFybjIvZXh0ZXJuYWwgXCJAZW1vdGlvbi9yZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9uZXh0LXlhcm4yL2V4dGVybmFsIFwiQHJlZHV4anMvdG9vbGtpdFwiIiwid2VicGFjazovL25leHQteWFybjIvZXh0ZXJuYWwgXCJuZXh0LXJlZHV4LXdyYXBwZXJcIiIsIndlYnBhY2s6Ly9uZXh0LXlhcm4yL2V4dGVybmFsIFwicmVkdXgtbG9nZ2VyXCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJlc2V0IGZyb20gXCIuLi9zcmMvc3R5bGVzL3Jlc2V0XCI7XG5pbXBvcnQgeyBHbG9iYWwgfSBmcm9tIFwiQGVtb3Rpb24vcmVhY3RcIjtcbmltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tIFwibmV4dC9hcHBcIjtcbmltcG9ydCB7IHdyYXBwZXIgfSBmcm9tIFwiLi4vc3RvcmVcIjtcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICA8R2xvYmFsIHN0eWxlcz17cmVzZXR9IC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyLndpdGhSZWR1eChNeUFwcCk7XG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tIFwiQGVtb3Rpb24vcmVhY3RcIjtcblxuY29uc3QgcmVzZXQgPSBjc3NgXG4gICoge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgZm9udC1mYW1pbHk6IEFwcGxlIFNEIEdvdGhpbmMgTmVvLCBNYWxndW4gR290aGljLCBzYW5zLXNlcmlmO1xuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCByZXNldDtcbiIsImltcG9ydCB7IGNvbmZpZ3VyZVN0b3JlIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcbmltcG9ydCB7IGNyZWF0ZVdyYXBwZXIgfSBmcm9tIFwibmV4dC1yZWR1eC13cmFwcGVyXCI7XG5pbXBvcnQgbG9nZ2VyIGZyb20gXCJyZWR1eC1sb2dnZXJcIjtcblxuaW1wb3J0IHJlZHVjZXIgZnJvbSBcIi4vbW9kdWxlc1wiO1xuXG5jb25zdCBtYWtlU3RvcmUgPSBjb250ZXh0ID0+XG4gIGNvbmZpZ3VyZVN0b3JlKHtcbiAgICByZWR1Y2VyLFxuICAgIG1pZGRsZXdhcmU6IGdldERlZmF1bHRNaWRkbGV3YXJlID0+IGdldERlZmF1bHRNaWRkbGV3YXJlKCkuY29uY2F0KGxvZ2dlciksXG4gICAgZGV2VG9vbGVzOiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIsXG4gIH0pO1xuXG5leHBvcnQgY29uc3Qgd3JhcHBlciA9IGNyZWF0ZVdyYXBwZXIobWFrZVN0b3JlLCB7XG4gIGRlYnVnOiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIsXG59KTtcbiIsImltcG9ydCB7IGNyZWF0ZVNsaWNlIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHsgdmFsdWU6IDAgfTtcblxuY29uc3QgY291bnRlclNsaWNlID0gY3JlYXRlU2xpY2Uoe1xuICBuYW1lOiAnY291bnRlcicsXG4gIGluaXRpYWxTdGF0ZSxcbiAgcmVkdWNlcnM6IHtcbiAgICBpbmNyZWFtZW50OiBzdGF0ZSA9PiB7XG4gICAgICBzdGF0ZS52YWx1ZSArPSAxO1xuICAgIH0sXG4gICAgZGVjcmVhbWVudDogc3RhdGUgPT4ge1xuICAgICAgc3RhdGUudmFsdWUgLT0gMTtcbiAgICB9LFxuICB9LFxufSk7XG5cbmV4cG9ydCBjb25zdCB7IGluY3JlYW1lbnQsIGRlY3JlYW1lbnR9ID0gY291bnRlclNsaWNlLmFjdGlvbnM7XG5leHBvcnQgZGVmYXVsdCBjb3VudGVyU2xpY2UucmVkdWNlcjtcbiIsImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XG5pbXBvcnQgeyBIWURSQVRFIH0gZnJvbSBcIm5leHQtcmVkdXgtd3JhcHBlclwiO1xuXG5pbXBvcnQgY291bnRlciBmcm9tIFwiLi9jb3VudGVyXCI7XG5cbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICBpZiAoYWN0aW9uLnR5cGUgPT09IEhZRFJBVEUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgLi4uc3RhdGUsXG4gICAgICAuLi5hY3Rpb24ucGF5bG9hZCxcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIGNvbWJpbmVSZWR1Y2Vycyh7XG4gICAgY291bnRlcixcbiAgICAvLyAuLi5cbiAgfSkoc3RhdGUsIGFjdGlvbik7XG59O1xuXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGVtb3Rpb24vcmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGVtb3Rpb24vcmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkByZWR1eGpzL3Rvb2xraXRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1yZWR1eC13cmFwcGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWxvZ2dlclwiKTsiXSwibmFtZXMiOlsicmVzZXQiLCJHbG9iYWwiLCJ3cmFwcGVyIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJ3aXRoUmVkdXgiLCJjc3MiLCJjb25maWd1cmVTdG9yZSIsImNyZWF0ZVdyYXBwZXIiLCJsb2dnZXIiLCJyZWR1Y2VyIiwibWFrZVN0b3JlIiwiY29udGV4dCIsIm1pZGRsZXdhcmUiLCJnZXREZWZhdWx0TWlkZGxld2FyZSIsImNvbmNhdCIsImRldlRvb2xlcyIsImRlYnVnIiwiY3JlYXRlU2xpY2UiLCJpbml0aWFsU3RhdGUiLCJ2YWx1ZSIsImNvdW50ZXJTbGljZSIsIm5hbWUiLCJyZWR1Y2VycyIsImluY3JlYW1lbnQiLCJzdGF0ZSIsImRlY3JlYW1lbnQiLCJhY3Rpb25zIiwiY29tYmluZVJlZHVjZXJzIiwiSFlEUkFURSIsImNvdW50ZXIiLCJhY3Rpb24iLCJ0eXBlIiwicGF5bG9hZCJdLCJzb3VyY2VSb290IjoiIn0=