(() => {
var exports = {};
exports.id = "pages/_document";
exports.ids = ["pages/_document"];
exports.modules = {

/***/ "./.yarn/__virtual__/next-virtual-9f90812a87/0/cache/next-npm-11.1.2-b1c338c95c-c5a6d01b6d.zip/node_modules/next/dist/client/head-manager.js":
/*!***************************************************************************************************************************************************!*\
  !*** ./.yarn/__virtual__/next-virtual-9f90812a87/0/cache/next-npm-11.1.2-b1c338c95c-c5a6d01b6d.zip/node_modules/next/dist/client/head-manager.js ***!
  \***************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = initHeadManager;
exports.DOMAttributeNames = void 0;
const DOMAttributeNames = {
  acceptCharset: 'accept-charset',
  className: 'class',
  htmlFor: 'for',
  httpEquiv: 'http-equiv',
  noModule: 'noModule'
};
exports.DOMAttributeNames = DOMAttributeNames;

function reactElementToDOM({
  type,
  props
}) {
  const el = document.createElement(type);

  for (const p in props) {
    if (!props.hasOwnProperty(p)) continue;
    if (p === 'children' || p === 'dangerouslySetInnerHTML') continue; // we don't render undefined props to the DOM

    if (props[p] === undefined) continue;
    const attr = DOMAttributeNames[p] || p.toLowerCase();

    if (type === 'script' && (attr === 'async' || attr === 'defer' || attr === 'noModule')) {
      el[attr] = !!props[p];
    } else {
      el.setAttribute(attr, props[p]);
    }
  }

  const {
    children,
    dangerouslySetInnerHTML
  } = props;

  if (dangerouslySetInnerHTML) {
    el.innerHTML = dangerouslySetInnerHTML.__html || '';
  } else if (children) {
    el.textContent = typeof children === 'string' ? children : Array.isArray(children) ? children.join('') : '';
  }

  return el;
}

function updateElements(type, components) {
  const headEl = document.getElementsByTagName('head')[0];
  const headCountEl = headEl.querySelector('meta[name=next-head-count]');

  if (true) {
    if (!headCountEl) {
      console.error('Warning: next-head-count is missing. https://nextjs.org/docs/messages/next-head-count-missing');
      return;
    }
  }

  const headCount = Number(headCountEl.content);
  const oldTags = [];

  for (let i = 0, j = headCountEl.previousElementSibling; i < headCount; i++, j = j.previousElementSibling) {
    if (j.tagName.toLowerCase() === type) {
      oldTags.push(j);
    }
  }

  const newTags = components.map(reactElementToDOM).filter(newTag => {
    for (let k = 0, len = oldTags.length; k < len; k++) {
      const oldTag = oldTags[k];

      if (oldTag.isEqualNode(newTag)) {
        oldTags.splice(k, 1);
        return false;
      }
    }

    return true;
  });
  oldTags.forEach(t => t.parentNode.removeChild(t));
  newTags.forEach(t => headEl.insertBefore(t, headCountEl));
  headCountEl.content = (headCount - oldTags.length + newTags.length).toString();
}

function initHeadManager() {
  let updatePromise = null;
  return {
    mountedInstances: new Set(),
    updateHead: head => {
      const promise = updatePromise = Promise.resolve().then(() => {
        if (promise !== updatePromise) return;
        updatePromise = null;
        const tags = {};
        head.forEach(h => {
          if ( // If the font tag is loaded only on client navigation
          // it won't be inlined. In this case revert to the original behavior
          h.type === 'link' && h.props['data-optimized-fonts'] && !document.querySelector(`style[data-href="${h.props['data-href']}"]`)) {
            h.props.href = h.props['data-href'];
            h.props['data-href'] = undefined;
          }

          const components = tags[h.type] || [];
          components.push(h);
          tags[h.type] = components;
        });
        const titleComponent = tags.title ? tags.title[0] : null;
        let title = '';

        if (titleComponent) {
          const {
            children
          } = titleComponent.props;
          title = typeof children === 'string' ? children : Array.isArray(children) ? children.join('') : '';
        }

        if (title !== document.title) document.title = title;
        ['meta', 'base', 'link', 'style', 'script'].forEach(type => {
          updateElements(type, tags[type] || []);
        });
      });
    }
  };
}

/***/ }),

/***/ "./.yarn/__virtual__/next-virtual-9f90812a87/0/cache/next-npm-11.1.2-b1c338c95c-c5a6d01b6d.zip/node_modules/next/dist/client/request-idle-callback.js":
/*!************************************************************************************************************************************************************!*\
  !*** ./.yarn/__virtual__/next-virtual-9f90812a87/0/cache/next-npm-11.1.2-b1c338c95c-c5a6d01b6d.zip/node_modules/next/dist/client/request-idle-callback.js ***!
  \************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.requestIdleCallback = exports.cancelIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "./.yarn/__virtual__/next-virtual-9f90812a87/0/cache/next-npm-11.1.2-b1c338c95c-c5a6d01b6d.zip/node_modules/next/dist/client/script.js":
/*!*********************************************************************************************************************************************!*\
  !*** ./.yarn/__virtual__/next-virtual-9f90812a87/0/cache/next-npm-11.1.2-b1c338c95c-c5a6d01b6d.zip/node_modules/next/dist/client/script.js ***!
  \*********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.initScriptLoader = initScriptLoader;
exports.default = void 0;

var _react = __webpack_require__(/*! react */ "react");

var _headManagerContext = __webpack_require__(/*! ../shared/lib/head-manager-context */ "../shared/lib/head-manager-context");

var _headManager = __webpack_require__(/*! ./head-manager */ "./.yarn/__virtual__/next-virtual-9f90812a87/0/cache/next-npm-11.1.2-b1c338c95c-c5a6d01b6d.zip/node_modules/next/dist/client/head-manager.js");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./.yarn/__virtual__/next-virtual-9f90812a87/0/cache/next-npm-11.1.2-b1c338c95c-c5a6d01b6d.zip/node_modules/next/dist/client/request-idle-callback.js");

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
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

const ScriptCache = new Map();
const LoadCache = new Set();
const ignoreProps = ['onLoad', 'dangerouslySetInnerHTML', 'children', 'onError', 'strategy'];

const loadScript = props => {
  const {
    src,
    id,
    onLoad = () => {},
    dangerouslySetInnerHTML,
    children = '',
    strategy = 'afterInteractive',
    onError
  } = props;
  const cacheKey = id || src; // Script has already loaded

  if (cacheKey && LoadCache.has(cacheKey)) {
    return;
  } // Contents of this script are already loading/loaded


  if (ScriptCache.has(src)) {
    LoadCache.add(cacheKey); // Execute onLoad since the script loading has begun

    ScriptCache.get(src).then(onLoad, onError);
    return;
  }

  const el = document.createElement('script');
  const loadPromise = new Promise((resolve, reject) => {
    el.addEventListener('load', function (e) {
      resolve();

      if (onLoad) {
        onLoad.call(this, e);
      }
    });
    el.addEventListener('error', function (e) {
      reject(e);
    });
  }).catch(function (e) {
    if (onError) {
      onError(e);
    }
  });

  if (src) {
    ScriptCache.set(src, loadPromise);
  }

  LoadCache.add(cacheKey);

  if (dangerouslySetInnerHTML) {
    el.innerHTML = dangerouslySetInnerHTML.__html || '';
  } else if (children) {
    el.textContent = typeof children === 'string' ? children : Array.isArray(children) ? children.join('') : '';
  } else if (src) {
    el.src = src;
  }

  for (const [k, value] of Object.entries(props)) {
    if (value === undefined || ignoreProps.includes(k)) {
      continue;
    }

    const attr = _headManager.DOMAttributeNames[k] || k.toLowerCase();
    el.setAttribute(attr, value);
  }

  el.setAttribute('data-nscript', strategy);
  document.body.appendChild(el);
};

function handleClientScriptLoad(props) {
  const {
    strategy = 'afterInteractive'
  } = props;

  if (strategy === 'afterInteractive') {
    loadScript(props);
  } else if (strategy === 'lazyOnload') {
    window.addEventListener('load', () => {
      (0, _requestIdleCallback).requestIdleCallback(() => loadScript(props));
    });
  }
}

function loadLazyScript(props) {
  if (document.readyState === 'complete') {
    (0, _requestIdleCallback).requestIdleCallback(() => loadScript(props));
  } else {
    window.addEventListener('load', () => {
      (0, _requestIdleCallback).requestIdleCallback(() => loadScript(props));
    });
  }
}

function initScriptLoader(scriptLoaderItems) {
  scriptLoaderItems.forEach(handleClientScriptLoad);
}

function Script(props) {
  const {
    src = '',
    onLoad = () => {},
    dangerouslySetInnerHTML,
    strategy = 'afterInteractive',
    onError
  } = props,
        restProps = _objectWithoutProperties(props, ["src", "onLoad", "dangerouslySetInnerHTML", "strategy", "onError"]); // Context is available only during SSR


  const {
    updateScripts,
    scripts,
    getIsSsr
  } = (0, _react).useContext(_headManagerContext.HeadManagerContext);
  (0, _react).useEffect(() => {
    if (strategy === 'afterInteractive') {
      loadScript(props);
    } else if (strategy === 'lazyOnload') {
      loadLazyScript(props);
    }
  }, [props, strategy]);

  if (strategy === 'beforeInteractive') {
    if (updateScripts) {
      scripts.beforeInteractive = (scripts.beforeInteractive || []).concat([_objectSpread({
        src,
        onLoad,
        onError
      }, restProps)]);
      updateScripts(scripts);
    } else if (getIsSsr && getIsSsr()) {
      // Script has already loaded during SSR
      LoadCache.add(restProps.id || src);
    } else if (getIsSsr && !getIsSsr()) {
      loadScript(props);
    }
  }

  return null;
}

var _default = Script;
exports.default = _default;

/***/ }),

/***/ "./.yarn/__virtual__/next-virtual-9f90812a87/0/cache/next-npm-11.1.2-b1c338c95c-c5a6d01b6d.zip/node_modules/next/dist/pages/_document.js":
/*!***********************************************************************************************************************************************!*\
  !*** ./.yarn/__virtual__/next-virtual-9f90812a87/0/cache/next-npm-11.1.2-b1c338c95c-c5a6d01b6d.zip/node_modules/next/dist/pages/_document.js ***!
  \***********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


const _excluded = ["strategy"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "DocumentContext", ({
  enumerable: true,
  get: function () {
    return _utils.DocumentContext;
  }
}));
Object.defineProperty(exports, "DocumentInitialProps", ({
  enumerable: true,
  get: function () {
    return _utils.DocumentInitialProps;
  }
}));
Object.defineProperty(exports, "DocumentProps", ({
  enumerable: true,
  get: function () {
    return _utils.DocumentProps;
  }
}));
exports.Html = Html;
exports.Main = Main;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _server = _interopRequireDefault(__webpack_require__(/*! styled-jsx/server */ "./.yarn/__virtual__/styled-jsx-virtual-e12abd1808/0/cache/styled-jsx-npm-4.0.1-af5df8001d-a4260ba093.zip/node_modules/styled-jsx/server.js"));

var _constants = __webpack_require__(/*! ../shared/lib/constants */ "../shared/lib/constants");

var _utils = __webpack_require__(/*! ../shared/lib/utils */ "../shared/lib/utils");

var _getPageFiles = __webpack_require__(/*! ../server/get-page-files */ "../server/get-page-files");

var _utils1 = __webpack_require__(/*! ../server/utils */ "../server/utils");

var _htmlescape = __webpack_require__(/*! ../server/htmlescape */ "../server/htmlescape");

var _script = _interopRequireDefault(__webpack_require__(/*! ../client/script */ "./.yarn/__virtual__/next-virtual-9f90812a87/0/cache/next-npm-11.1.2-b1c338c95c-c5a6d01b6d.zip/node_modules/next/dist/client/script.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj.default = obj;
    return newObj;
  }
}

function getDocumentFiles(buildManifest, pathname, inAmpMode) {
  const sharedFiles = (0, _getPageFiles).getPageFiles(buildManifest, '/_app');
  const pageFiles = inAmpMode ? [] : (0, _getPageFiles).getPageFiles(buildManifest, pathname);
  return {
    sharedFiles,
    pageFiles,
    allFiles: [...new Set([...sharedFiles, ...pageFiles])]
  };
}

function getPolyfillScripts(context, props) {
  // polyfills.js has to be rendered as nomodule without async
  // It also has to be the first script to load
  const {
    assetPrefix,
    buildManifest,
    devOnlyCacheBusterQueryString,
    disableOptimizedLoading
  } = context;
  return buildManifest.polyfillFiles.filter(polyfill => polyfill.endsWith('.js') && !polyfill.endsWith('.module.js')).map(polyfill => /*#__PURE__*/_react.default.createElement("script", {
    key: polyfill,
    defer: !disableOptimizedLoading,
    nonce: props.nonce,
    crossOrigin: props.crossOrigin || undefined,
    noModule: true,
    src: `${assetPrefix}/_next/${polyfill}${devOnlyCacheBusterQueryString}`
  }));
}

function getPreNextScripts(context, props) {
  const {
    scriptLoader,
    disableOptimizedLoading
  } = context;
  return (scriptLoader.beforeInteractive || []).map((file, index) => {
    const {
      strategy
    } = file,
          scriptProps = _objectWithoutProperties(file, _excluded);

    return /*#__PURE__*/_react.default.createElement("script", Object.assign({}, scriptProps, {
      key: scriptProps.src || index,
      defer: !disableOptimizedLoading,
      nonce: props.nonce,
      "data-nscript": "beforeInteractive",
      crossOrigin: props.crossOrigin || undefined
    }));
  });
}

function getDynamicChunks(context, props, files) {
  const {
    dynamicImports,
    assetPrefix,
    isDevelopment,
    devOnlyCacheBusterQueryString,
    disableOptimizedLoading
  } = context;
  return dynamicImports.map(file => {
    if (!file.endsWith('.js') || files.allFiles.includes(file)) return null;
    return /*#__PURE__*/_react.default.createElement("script", {
      async: !isDevelopment && disableOptimizedLoading,
      defer: !disableOptimizedLoading,
      key: file,
      src: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
      nonce: props.nonce,
      crossOrigin: props.crossOrigin || undefined
    });
  });
}

function getScripts(context, props, files) {
  var ref;
  const {
    assetPrefix,
    buildManifest,
    isDevelopment,
    devOnlyCacheBusterQueryString,
    disableOptimizedLoading
  } = context;
  const normalScripts = files.allFiles.filter(file => file.endsWith('.js'));
  const lowPriorityScripts = (ref = buildManifest.lowPriorityFiles) === null || ref === void 0 ? void 0 : ref.filter(file => file.endsWith('.js'));
  return [...normalScripts, ...lowPriorityScripts].map(file => {
    return /*#__PURE__*/_react.default.createElement("script", {
      key: file,
      src: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
      nonce: props.nonce,
      async: !isDevelopment && disableOptimizedLoading,
      defer: !disableOptimizedLoading,
      crossOrigin: props.crossOrigin || undefined
    });
  });
}

class Document1 extends _react.Component {
  /**
  * `getInitialProps` hook returns the context object with the addition of `renderPage`.
  * `renderPage` callback executes `React` rendering logic synchronously to support server-rendering wrappers
  */
  static async getInitialProps(ctx) {
    const enhanceApp = App => {
      return props => /*#__PURE__*/_react.default.createElement(App, Object.assign({}, props));
    };

    const {
      html,
      head
    } = await ctx.renderPage({
      enhanceApp
    });
    const styles = [...(0, _server).default()];
    return {
      html,
      head,
      styles
    };
  }

  render() {
    return /*#__PURE__*/_react.default.createElement(Html, null, /*#__PURE__*/_react.default.createElement(Head, null), /*#__PURE__*/_react.default.createElement("body", null, /*#__PURE__*/_react.default.createElement(Main, null), /*#__PURE__*/_react.default.createElement(NextScript, null)));
  }

}

exports.default = Document1;

function Html(props) {
  const {
    inAmpMode,
    docComponentsRendered,
    locale
  } = (0, _react).useContext(_utils.HtmlContext);
  docComponentsRendered.Html = true;
  return /*#__PURE__*/_react.default.createElement("html", Object.assign({}, props, {
    lang: props.lang || locale || undefined,
    amp: inAmpMode ? '' : undefined,
    "data-ampdevmode": inAmpMode && true ? '' : undefined
  }));
}

class Head extends _react.Component {
  getCssLinks(files) {
    const {
      assetPrefix,
      devOnlyCacheBusterQueryString,
      dynamicImports
    } = this.context;
    const cssFiles = files.allFiles.filter(f => f.endsWith('.css'));
    const sharedFiles = new Set(files.sharedFiles); // Unmanaged files are CSS files that will be handled directly by the
    // webpack runtime (`mini-css-extract-plugin`).

    let unmangedFiles = new Set([]);
    let dynamicCssFiles = Array.from(new Set(dynamicImports.filter(file => file.endsWith('.css'))));

    if (dynamicCssFiles.length) {
      const existing = new Set(cssFiles);
      dynamicCssFiles = dynamicCssFiles.filter(f => !(existing.has(f) || sharedFiles.has(f)));
      unmangedFiles = new Set(dynamicCssFiles);
      cssFiles.push(...dynamicCssFiles);
    }

    let cssLinkElements = [];
    cssFiles.forEach(file => {
      const isSharedFile = sharedFiles.has(file);

      if (true) {
        cssLinkElements.push( /*#__PURE__*/_react.default.createElement("link", {
          key: `${file}-preload`,
          nonce: this.props.nonce,
          rel: "preload",
          href: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
          as: "style",
          crossOrigin: this.props.crossOrigin || undefined
        }));
      }

      const isUnmanagedFile = unmangedFiles.has(file);
      cssLinkElements.push( /*#__PURE__*/_react.default.createElement("link", {
        key: file,
        nonce: this.props.nonce,
        rel: "stylesheet",
        href: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
        crossOrigin: this.props.crossOrigin || undefined,
        "data-n-g": isUnmanagedFile ? undefined : isSharedFile ? '' : undefined,
        "data-n-p": isUnmanagedFile ? undefined : isSharedFile ? undefined : ''
      }));
    });

    if (false) {}

    return cssLinkElements.length === 0 ? null : cssLinkElements;
  }

  getPreloadDynamicChunks() {
    const {
      dynamicImports,
      assetPrefix,
      devOnlyCacheBusterQueryString
    } = this.context;
    return dynamicImports.map(file => {
      if (!file.endsWith('.js')) {
        return null;
      }

      return /*#__PURE__*/_react.default.createElement("link", {
        rel: "preload",
        key: file,
        href: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
        as: "script",
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined
      });
    }) // Filter out nulled scripts
    .filter(Boolean);
  }

  getPreloadMainLinks(files) {
    const {
      assetPrefix,
      devOnlyCacheBusterQueryString,
      scriptLoader
    } = this.context;
    const preloadFiles = files.allFiles.filter(file => {
      return file.endsWith('.js');
    });
    return [...(scriptLoader.beforeInteractive || []).map(file => /*#__PURE__*/_react.default.createElement("link", {
      key: file.src,
      nonce: this.props.nonce,
      rel: "preload",
      href: file.src,
      as: "script",
      crossOrigin: this.props.crossOrigin || undefined
    })), ...preloadFiles.map(file => /*#__PURE__*/_react.default.createElement("link", {
      key: file,
      nonce: this.props.nonce,
      rel: "preload",
      href: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
      as: "script",
      crossOrigin: this.props.crossOrigin || undefined
    }))];
  }

  getDynamicChunks(files) {
    return getDynamicChunks(this.context, this.props, files);
  }

  getPreNextScripts() {
    return getPreNextScripts(this.context, this.props);
  }

  getScripts(files) {
    return getScripts(this.context, this.props, files);
  }

  getPolyfillScripts() {
    return getPolyfillScripts(this.context, this.props);
  }

  handleDocumentScriptLoaderItems(children) {
    const {
      scriptLoader
    } = this.context;
    const scriptLoaderItems = [];
    const filteredChildren = [];

    _react.default.Children.forEach(children, child => {
      if (child.type === _script.default) {
        if (child.props.strategy === 'beforeInteractive') {
          scriptLoader.beforeInteractive = (scriptLoader.beforeInteractive || []).concat([_objectSpread({}, child.props)]);
          return;
        } else if (['lazyOnload', 'afterInteractive'].includes(child.props.strategy)) {
          scriptLoaderItems.push(child.props);
          return;
        }
      }

      filteredChildren.push(child);
    });

    this.context.__NEXT_DATA__.scriptLoader = scriptLoaderItems;
    return filteredChildren;
  }

  makeStylesheetInert(node) {
    return _react.default.Children.map(node, c => {
      if (c.type === 'link' && c.props['href'] && _constants.OPTIMIZED_FONT_PROVIDERS.some(({
        url
      }) => c.props['href'].startsWith(url))) {
        const newProps = _objectSpread({}, c.props || {});

        newProps['data-href'] = newProps['href'];
        newProps['href'] = undefined;
        return /*#__PURE__*/_react.default.cloneElement(c, newProps);
      } else if (c.props && c.props['children']) {
        c.props['children'] = this.makeStylesheetInert(c.props['children']);
      }

      return c;
    });
  }

  render() {
    const {
      styles,
      ampPath,
      inAmpMode,
      hybridAmp,
      canonicalBase,
      __NEXT_DATA__,
      dangerousAsPath,
      headTags,
      unstable_runtimeJS,
      unstable_JsPreload,
      disableOptimizedLoading
    } = this.context;
    const disableRuntimeJS = unstable_runtimeJS === false;
    const disableJsPreload = unstable_JsPreload === false || !disableOptimizedLoading;
    this.context.docComponentsRendered.Head = true;
    let {
      head
    } = this.context;
    let cssPreloads = [];
    let otherHeadElements = [];

    if (head) {
      head.forEach(c => {
        if (c && c.type === 'link' && c.props['rel'] === 'preload' && c.props['as'] === 'style') {
          cssPreloads.push(c);
        } else {
          c && otherHeadElements.push(c);
        }
      });
      head = cssPreloads.concat(otherHeadElements);
    }

    let children = _react.default.Children.toArray(this.props.children).filter(Boolean); // show a warning if Head contains <title> (only in development)


    if (true) {
      children = _react.default.Children.map(children, child => {
        var ref;
        const isReactHelmet = child === null || child === void 0 ? void 0 : (ref = child.props) === null || ref === void 0 ? void 0 : ref['data-react-helmet'];

        if (!isReactHelmet) {
          var ref1;

          if ((child === null || child === void 0 ? void 0 : child.type) === 'title') {
            console.warn("Warning: <title> should not be used in _document.js's <Head>. https://nextjs.org/docs/messages/no-document-title");
          } else if ((child === null || child === void 0 ? void 0 : child.type) === 'meta' && (child === null || child === void 0 ? void 0 : (ref1 = child.props) === null || ref1 === void 0 ? void 0 : ref1.name) === 'viewport') {
            console.warn("Warning: viewport meta tags should not be used in _document.js's <Head>. https://nextjs.org/docs/messages/no-document-viewport-meta");
          }
        }

        return child;
      });
      if (this.props.crossOrigin) console.warn('Warning: `Head` attribute `crossOrigin` is deprecated. https://nextjs.org/docs/messages/doc-crossorigin-deprecated');
    }

    if (false) {}

    children = this.handleDocumentScriptLoaderItems(children);
    let hasAmphtmlRel = false;
    let hasCanonicalRel = false; // show warning and remove conflicting amp head tags

    head = _react.default.Children.map(head || [], child => {
      if (!child) return child;
      const {
        type,
        props
      } = child;

      if (inAmpMode) {
        let badProp = '';

        if (type === 'meta' && props.name === 'viewport') {
          badProp = 'name="viewport"';
        } else if (type === 'link' && props.rel === 'canonical') {
          hasCanonicalRel = true;
        } else if (type === 'script') {
          // only block if
          // 1. it has a src and isn't pointing to ampproject's CDN
          // 2. it is using dangerouslySetInnerHTML without a type or
          // a type of text/javascript
          if (props.src && props.src.indexOf('ampproject') < -1 || props.dangerouslySetInnerHTML && (!props.type || props.type === 'text/javascript')) {
            badProp = '<script';
            Object.keys(props).forEach(prop => {
              badProp += ` ${prop}="${props[prop]}"`;
            });
            badProp += '/>';
          }
        }

        if (badProp) {
          console.warn(`Found conflicting amp tag "${child.type}" with conflicting prop ${badProp} in ${__NEXT_DATA__.page}. https://nextjs.org/docs/messages/conflicting-amp-tag`);
          return null;
        }
      } else {
        // non-amp mode
        if (type === 'link' && props.rel === 'amphtml') {
          hasAmphtmlRel = true;
        }
      }

      return child;
    }); // try to parse styles from fragment for backwards compat

    const curStyles = Array.isArray(styles) ? styles : [];

    if (inAmpMode && styles && // @ts-ignore Property 'props' does not exist on type ReactElement
    styles.props && // @ts-ignore Property 'props' does not exist on type ReactElement
    Array.isArray(styles.props.children)) {
      const hasStyles = el => {
        var ref2, ref3;
        return el === null || el === void 0 ? void 0 : (ref2 = el.props) === null || ref2 === void 0 ? void 0 : (ref3 = ref2.dangerouslySetInnerHTML) === null || ref3 === void 0 ? void 0 : ref3.__html;
      }; // @ts-ignore Property 'props' does not exist on type ReactElement


      styles.props.children.forEach(child => {
        if (Array.isArray(child)) {
          child.forEach(el => hasStyles(el) && curStyles.push(el));
        } else if (hasStyles(child)) {
          curStyles.push(child);
        }
      });
    }

    const files = getDocumentFiles(this.context.buildManifest, this.context.__NEXT_DATA__.page, inAmpMode);

    var _nonce, _nonce1;

    return /*#__PURE__*/_react.default.createElement("head", Object.assign({}, this.props), this.context.isDevelopment && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("style", {
      "data-next-hide-fouc": true,
      "data-ampdevmode": inAmpMode ? 'true' : undefined,
      dangerouslySetInnerHTML: {
        __html: `body{display:none}`
      }
    }), /*#__PURE__*/_react.default.createElement("noscript", {
      "data-next-hide-fouc": true,
      "data-ampdevmode": inAmpMode ? 'true' : undefined
    }, /*#__PURE__*/_react.default.createElement("style", {
      dangerouslySetInnerHTML: {
        __html: `body{display:block}`
      }
    }))), children,  false && /*#__PURE__*/0, head, /*#__PURE__*/_react.default.createElement("meta", {
      name: "next-head-count",
      content: _react.default.Children.count(head || []).toString()
    }), inAmpMode && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("meta", {
      name: "viewport",
      content: "width=device-width,minimum-scale=1,initial-scale=1"
    }), !hasCanonicalRel && /*#__PURE__*/_react.default.createElement("link", {
      rel: "canonical",
      href: canonicalBase + (0, _utils1).cleanAmpPath(dangerousAsPath)
    }), /*#__PURE__*/_react.default.createElement("link", {
      rel: "preload",
      as: "script",
      href: "https://cdn.ampproject.org/v0.js"
    }), styles && /*#__PURE__*/_react.default.createElement("style", {
      "amp-custom": "",
      dangerouslySetInnerHTML: {
        __html: curStyles.map(style => style.props.dangerouslySetInnerHTML.__html).join('').replace(/\/\*# sourceMappingURL=.*\*\//g, '').replace(/\/\*@ sourceURL=.*?\*\//g, '')
      }
    }), /*#__PURE__*/_react.default.createElement("style", {
      "amp-boilerplate": "",
      dangerouslySetInnerHTML: {
        __html: `body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}`
      }
    }), /*#__PURE__*/_react.default.createElement("noscript", null, /*#__PURE__*/_react.default.createElement("style", {
      "amp-boilerplate": "",
      dangerouslySetInnerHTML: {
        __html: `body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}`
      }
    })), /*#__PURE__*/_react.default.createElement("script", {
      async: true,
      src: "https://cdn.ampproject.org/v0.js"
    })), !inAmpMode && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !hasAmphtmlRel && hybridAmp && /*#__PURE__*/_react.default.createElement("link", {
      rel: "amphtml",
      href: canonicalBase + getAmpPath(ampPath, dangerousAsPath)
    }),  true && this.getCssLinks(files),  true && /*#__PURE__*/_react.default.createElement("noscript", {
      "data-n-css": (_nonce = this.props.nonce) !== null && _nonce !== void 0 ? _nonce : ''
    }),  false && /*#__PURE__*/0, !disableRuntimeJS && !disableJsPreload && this.getPreloadDynamicChunks(), !disableRuntimeJS && !disableJsPreload && this.getPreloadMainLinks(files), !disableOptimizedLoading && !disableRuntimeJS && this.getPolyfillScripts(), !disableOptimizedLoading && !disableRuntimeJS && this.getPreNextScripts(), !disableOptimizedLoading && !disableRuntimeJS && this.getDynamicChunks(files), !disableOptimizedLoading && !disableRuntimeJS && this.getScripts(files),  false && 0,  false && /*#__PURE__*/0, this.context.isDevelopment && // this element is used to mount development styles so the
    // ordering matches production
    // (by default, style-loader injects at the bottom of <head />)

    /*#__PURE__*/
    _react.default.createElement("noscript", {
      id: "__next_css__DO_NOT_USE__"
    }), styles || null), /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {}, ...(headTags || [])));
  }

}

exports.Head = Head;
Head.contextType = _utils.HtmlContext;

function Main() {
  const {
    inAmpMode,
    docComponentsRendered
  } = (0, _react).useContext(_utils.HtmlContext);
  docComponentsRendered.Main = true;
  if (inAmpMode) return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, _constants.BODY_RENDER_TARGET);
  return /*#__PURE__*/_react.default.createElement("div", {
    id: "__next"
  }, _constants.BODY_RENDER_TARGET);
}

class NextScript extends _react.Component {
  getDynamicChunks(files) {
    return getDynamicChunks(this.context, this.props, files);
  }

  getPreNextScripts() {
    return getPreNextScripts(this.context, this.props);
  }

  getScripts(files) {
    return getScripts(this.context, this.props, files);
  }

  getPolyfillScripts() {
    return getPolyfillScripts(this.context, this.props);
  }

  static getInlineScriptSource(context) {
    const {
      __NEXT_DATA__
    } = context;

    try {
      const data = JSON.stringify(__NEXT_DATA__);
      return (0, _htmlescape).htmlEscapeJsonString(data);
    } catch (err) {
      if (err.message.indexOf('circular structure')) {
        throw new Error(`Circular structure in "getInitialProps" result of page "${__NEXT_DATA__.page}". https://nextjs.org/docs/messages/circular-structure`);
      }

      throw err;
    }
  }

  render() {
    const {
      assetPrefix,
      inAmpMode,
      buildManifest,
      unstable_runtimeJS,
      docComponentsRendered,
      devOnlyCacheBusterQueryString,
      disableOptimizedLoading
    } = this.context;
    const disableRuntimeJS = unstable_runtimeJS === false;
    docComponentsRendered.NextScript = true;

    if (inAmpMode) {
      if (false) {}

      const ampDevFiles = [...buildManifest.devFiles, ...buildManifest.polyfillFiles, ...buildManifest.ampDevFiles];
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, disableRuntimeJS ? null : /*#__PURE__*/_react.default.createElement("script", {
        id: "__NEXT_DATA__",
        type: "application/json",
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined,
        dangerouslySetInnerHTML: {
          __html: NextScript.getInlineScriptSource(this.context)
        },
        "data-ampdevmode": true
      }), ampDevFiles.map(file => /*#__PURE__*/_react.default.createElement("script", {
        key: file,
        src: `${assetPrefix}/_next/${file}${devOnlyCacheBusterQueryString}`,
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined,
        "data-ampdevmode": true
      })));
    }

    if (true) {
      if (this.props.crossOrigin) console.warn('Warning: `NextScript` attribute `crossOrigin` is deprecated. https://nextjs.org/docs/messages/doc-crossorigin-deprecated');
    }

    const files = getDocumentFiles(this.context.buildManifest, this.context.__NEXT_DATA__.page, inAmpMode);
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !disableRuntimeJS && buildManifest.devFiles ? buildManifest.devFiles.map(file => /*#__PURE__*/_react.default.createElement("script", {
      key: file,
      src: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined
    })) : null, disableRuntimeJS ? null : /*#__PURE__*/_react.default.createElement("script", {
      id: "__NEXT_DATA__",
      type: "application/json",
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined,
      dangerouslySetInnerHTML: {
        __html: NextScript.getInlineScriptSource(this.context)
      }
    }), disableOptimizedLoading && !disableRuntimeJS && this.getPolyfillScripts(), disableOptimizedLoading && !disableRuntimeJS && this.getPreNextScripts(), disableOptimizedLoading && !disableRuntimeJS && this.getDynamicChunks(files), disableOptimizedLoading && !disableRuntimeJS && this.getScripts(files));
  }

}

exports.NextScript = NextScript;
NextScript.contextType = _utils.HtmlContext;
NextScript.safariNomoduleFix = '!function(){var e=document,t=e.createElement("script");if(!("noModule"in t)&&"onbeforeload"in t){var n=!1;e.addEventListener("beforeload",function(e){if(e.target===t)n=!0;else if(!e.target.hasAttribute("nomodule")||!n)return;e.preventDefault()},!0),t.type="module",t.src=".",e.head.appendChild(t),t.remove()}}();';

function getAmpPath(ampPath, asPath) {
  return ampPath || `${asPath}${asPath.includes('?') ? '&' : '?'}amp=1`;
}

/***/ }),

/***/ "./.yarn/__virtual__/styled-jsx-virtual-e12abd1808/0/cache/styled-jsx-npm-4.0.1-af5df8001d-a4260ba093.zip/node_modules/styled-jsx/dist/lib/stylesheet.js":
/*!***************************************************************************************************************************************************************!*\
  !*** ./.yarn/__virtual__/styled-jsx-virtual-e12abd1808/0/cache/styled-jsx-npm-4.0.1-af5df8001d-a4260ba093.zip/node_modules/styled-jsx/dist/lib/stylesheet.js ***!
  \***************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


exports.__esModule = true;
exports.default = void 0;

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
Based on Glamor's sheet
https://github.com/threepointone/glamor/blob/667b480d31b3721a905021b26e1290ce92ca2879/src/sheet.js
*/
var isProd = typeof process !== 'undefined' && process.env && "development" === 'production';

var isString = function isString(o) {
  return Object.prototype.toString.call(o) === '[object String]';
};

var StyleSheet = /*#__PURE__*/function () {
  function StyleSheet(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        _ref$name = _ref.name,
        name = _ref$name === void 0 ? 'stylesheet' : _ref$name,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? isProd : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    invariant(isString(name), '`name` must be a string');
    this._name = name;
    this._deletedRulePlaceholder = "#" + name + "-deleted-rule____{}";
    invariant(typeof optimizeForSpeed === 'boolean', '`optimizeForSpeed` must be a boolean');
    this._optimizeForSpeed = optimizeForSpeed;
    this._isBrowser = isBrowser;
    this._serverSheet = undefined;
    this._tags = [];
    this._injected = false;
    this._rulesCount = 0;
    var node = this._isBrowser && document.querySelector('meta[property="csp-nonce"]');
    this._nonce = node ? node.getAttribute('content') : null;
  }

  var _proto = StyleSheet.prototype;

  _proto.setOptimizeForSpeed = function setOptimizeForSpeed(bool) {
    invariant(typeof bool === 'boolean', '`setOptimizeForSpeed` accepts a boolean');
    invariant(this._rulesCount === 0, 'optimizeForSpeed cannot be when rules have already been inserted');
    this.flush();
    this._optimizeForSpeed = bool;
    this.inject();
  };

  _proto.isOptimizeForSpeed = function isOptimizeForSpeed() {
    return this._optimizeForSpeed;
  };

  _proto.inject = function inject() {
    var _this = this;

    invariant(!this._injected, 'sheet already injected');
    this._injected = true;

    if (this._isBrowser && this._optimizeForSpeed) {
      this._tags[0] = this.makeStyleTag(this._name);
      this._optimizeForSpeed = 'insertRule' in this.getSheet();

      if (!this._optimizeForSpeed) {
        if (!isProd) {
          console.warn('StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.');
        }

        this.flush();
        this._injected = true;
      }

      return;
    }

    this._serverSheet = {
      cssRules: [],
      insertRule: function insertRule(rule, index) {
        if (typeof index === 'number') {
          _this._serverSheet.cssRules[index] = {
            cssText: rule
          };
        } else {
          _this._serverSheet.cssRules.push({
            cssText: rule
          });
        }

        return index;
      },
      deleteRule: function deleteRule(index) {
        _this._serverSheet.cssRules[index] = null;
      }
    };
  };

  _proto.getSheetForTag = function getSheetForTag(tag) {
    if (tag.sheet) {
      return tag.sheet;
    } // this weirdness brought to you by firefox


    for (var i = 0; i < document.styleSheets.length; i++) {
      if (document.styleSheets[i].ownerNode === tag) {
        return document.styleSheets[i];
      }
    }
  };

  _proto.getSheet = function getSheet() {
    return this.getSheetForTag(this._tags[this._tags.length - 1]);
  };

  _proto.insertRule = function insertRule(rule, index) {
    invariant(isString(rule), '`insertRule` accepts only strings');

    if (!this._isBrowser) {
      if (typeof index !== 'number') {
        index = this._serverSheet.cssRules.length;
      }

      this._serverSheet.insertRule(rule, index);

      return this._rulesCount++;
    }

    if (this._optimizeForSpeed) {
      var sheet = this.getSheet();

      if (typeof index !== 'number') {
        index = sheet.cssRules.length;
      } // this weirdness for perf, and chrome's weird bug
      // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule


      try {
        sheet.insertRule(rule, index);
      } catch (error) {
        if (!isProd) {
          console.warn("StyleSheet: illegal rule: \n\n" + rule + "\n\nSee https://stackoverflow.com/q/20007992 for more info");
        }

        return -1;
      }
    } else {
      var insertionPoint = this._tags[index];

      this._tags.push(this.makeStyleTag(this._name, rule, insertionPoint));
    }

    return this._rulesCount++;
  };

  _proto.replaceRule = function replaceRule(index, rule) {
    if (this._optimizeForSpeed || !this._isBrowser) {
      var sheet = this._isBrowser ? this.getSheet() : this._serverSheet;

      if (!rule.trim()) {
        rule = this._deletedRulePlaceholder;
      }

      if (!sheet.cssRules[index]) {
        // @TBD Should we throw an error?
        return index;
      }

      sheet.deleteRule(index);

      try {
        sheet.insertRule(rule, index);
      } catch (error) {
        if (!isProd) {
          console.warn("StyleSheet: illegal rule: \n\n" + rule + "\n\nSee https://stackoverflow.com/q/20007992 for more info");
        } // In order to preserve the indices we insert a deleteRulePlaceholder


        sheet.insertRule(this._deletedRulePlaceholder, index);
      }
    } else {
      var tag = this._tags[index];
      invariant(tag, "old rule at index `" + index + "` not found");
      tag.textContent = rule;
    }

    return index;
  };

  _proto.deleteRule = function deleteRule(index) {
    if (!this._isBrowser) {
      this._serverSheet.deleteRule(index);

      return;
    }

    if (this._optimizeForSpeed) {
      this.replaceRule(index, '');
    } else {
      var tag = this._tags[index];
      invariant(tag, "rule at index `" + index + "` not found");
      tag.parentNode.removeChild(tag);
      this._tags[index] = null;
    }
  };

  _proto.flush = function flush() {
    this._injected = false;
    this._rulesCount = 0;

    if (this._isBrowser) {
      this._tags.forEach(function (tag) {
        return tag && tag.parentNode.removeChild(tag);
      });

      this._tags = [];
    } else {
      // simpler on server
      this._serverSheet.cssRules = [];
    }
  };

  _proto.cssRules = function cssRules() {
    var _this2 = this;

    if (!this._isBrowser) {
      return this._serverSheet.cssRules;
    }

    return this._tags.reduce(function (rules, tag) {
      if (tag) {
        rules = rules.concat(Array.prototype.map.call(_this2.getSheetForTag(tag).cssRules, function (rule) {
          return rule.cssText === _this2._deletedRulePlaceholder ? null : rule;
        }));
      } else {
        rules.push(null);
      }

      return rules;
    }, []);
  };

  _proto.makeStyleTag = function makeStyleTag(name, cssString, relativeToTag) {
    if (cssString) {
      invariant(isString(cssString), 'makeStyleTag acceps only strings as second parameter');
    }

    var tag = document.createElement('style');
    if (this._nonce) tag.setAttribute('nonce', this._nonce);
    tag.type = 'text/css';
    tag.setAttribute("data-" + name, '');

    if (cssString) {
      tag.appendChild(document.createTextNode(cssString));
    }

    var head = document.head || document.getElementsByTagName('head')[0];

    if (relativeToTag) {
      head.insertBefore(tag, relativeToTag);
    } else {
      head.appendChild(tag);
    }

    return tag;
  };

  _createClass(StyleSheet, [{
    key: "length",
    get: function get() {
      return this._rulesCount;
    }
  }]);

  return StyleSheet;
}();

exports.default = StyleSheet;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheet: " + message + ".");
  }
}

/***/ }),

/***/ "./.yarn/__virtual__/styled-jsx-virtual-e12abd1808/0/cache/styled-jsx-npm-4.0.1-af5df8001d-a4260ba093.zip/node_modules/styled-jsx/dist/server.js":
/*!*******************************************************************************************************************************************************!*\
  !*** ./.yarn/__virtual__/styled-jsx-virtual-e12abd1808/0/cache/styled-jsx-npm-4.0.1-af5df8001d-a4260ba093.zip/node_modules/styled-jsx/dist/server.js ***!
  \*******************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;
exports.default = flushToReact;
exports.flushToHTML = flushToHTML;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _style = __webpack_require__(/*! ./style */ "./.yarn/__virtual__/styled-jsx-virtual-e12abd1808/0/cache/styled-jsx-npm-4.0.1-af5df8001d-a4260ba093.zip/node_modules/styled-jsx/dist/style.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function flushToReact(options) {
  if (options === void 0) {
    options = {};
  }

  return (0, _style.flush)().map(function (args) {
    var id = args[0];
    var css = args[1];
    return _react["default"].createElement('style', {
      id: "__" + id,
      // Avoid warnings upon render with a key
      key: "__" + id,
      nonce: options.nonce ? options.nonce : undefined,
      dangerouslySetInnerHTML: {
        __html: css
      }
    });
  });
}

function flushToHTML(options) {
  if (options === void 0) {
    options = {};
  }

  return (0, _style.flush)().reduce(function (html, args) {
    var id = args[0];
    var css = args[1];
    html += "<style id=\"__" + id + "\"" + (options.nonce ? " nonce=\"" + options.nonce + "\"" : '') + ">" + css + "</style>";
    return html;
  }, '');
}

/***/ }),

/***/ "./.yarn/__virtual__/styled-jsx-virtual-e12abd1808/0/cache/styled-jsx-npm-4.0.1-af5df8001d-a4260ba093.zip/node_modules/styled-jsx/dist/style.js":
/*!******************************************************************************************************************************************************!*\
  !*** ./.yarn/__virtual__/styled-jsx-virtual-e12abd1808/0/cache/styled-jsx-npm-4.0.1-af5df8001d-a4260ba093.zip/node_modules/styled-jsx/dist/style.js ***!
  \******************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;
exports.default = JSXStyle;
exports.flush = flush;

var _react = __webpack_require__(/*! react */ "react");

var _stylesheetRegistry = _interopRequireDefault(__webpack_require__(/*! ./stylesheet-registry */ "./.yarn/__virtual__/styled-jsx-virtual-e12abd1808/0/cache/styled-jsx-npm-4.0.1-af5df8001d-a4260ba093.zip/node_modules/styled-jsx/dist/stylesheet-registry.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var styleSheetRegistry = new _stylesheetRegistry["default"]();

function JSXStyle(props) {
  if (typeof window === 'undefined') {
    styleSheetRegistry.add(props);
    return null;
  }

  (0, _react.useLayoutEffect)(function () {
    styleSheetRegistry.add(props);
    return function () {
      styleSheetRegistry.remove(props);
    }; // props.children can be string[], will be striped since id is identical
  }, [props.id, String(props.dynamic)]);
  return null;
}

JSXStyle.dynamic = function (info) {
  return info.map(function (tagInfo) {
    var baseId = tagInfo[0];
    var props = tagInfo[1];
    return styleSheetRegistry.computeId(baseId, props);
  }).join(' ');
};

function flush() {
  var cssRules = styleSheetRegistry.cssRules();
  styleSheetRegistry.flush();
  return cssRules;
}

/***/ }),

/***/ "./.yarn/__virtual__/styled-jsx-virtual-e12abd1808/0/cache/styled-jsx-npm-4.0.1-af5df8001d-a4260ba093.zip/node_modules/styled-jsx/dist/stylesheet-registry.js":
/*!********************************************************************************************************************************************************************!*\
  !*** ./.yarn/__virtual__/styled-jsx-virtual-e12abd1808/0/cache/styled-jsx-npm-4.0.1-af5df8001d-a4260ba093.zip/node_modules/styled-jsx/dist/stylesheet-registry.js ***!
  \********************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _stringHash = _interopRequireDefault(__webpack_require__(/*! string-hash */ "./.yarn/cache/string-hash-npm-1.1.3-3cb8892e7c-104b8667a5.zip/node_modules/string-hash/index.js"));

var _stylesheet = _interopRequireDefault(__webpack_require__(/*! ./lib/stylesheet */ "./.yarn/__virtual__/styled-jsx-virtual-e12abd1808/0/cache/styled-jsx-npm-4.0.1-af5df8001d-a4260ba093.zip/node_modules/styled-jsx/dist/lib/stylesheet.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var sanitize = function sanitize(rule) {
  return rule.replace(/\/style/gi, '\\/style');
};

var StyleSheetRegistry = /*#__PURE__*/function () {
  function StyleSheetRegistry(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        _ref$styleSheet = _ref.styleSheet,
        styleSheet = _ref$styleSheet === void 0 ? null : _ref$styleSheet,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? false : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    this._sheet = styleSheet || new _stylesheet["default"]({
      name: 'styled-jsx',
      optimizeForSpeed: optimizeForSpeed
    });

    this._sheet.inject();

    if (styleSheet && typeof optimizeForSpeed === 'boolean') {
      this._sheet.setOptimizeForSpeed(optimizeForSpeed);

      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    this._isBrowser = isBrowser;
    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};
    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  }

  var _proto = StyleSheetRegistry.prototype;

  _proto.add = function add(props) {
    var _this = this;

    if (undefined === this._optimizeForSpeed) {
      this._optimizeForSpeed = Array.isArray(props.children);

      this._sheet.setOptimizeForSpeed(this._optimizeForSpeed);

      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    if (this._isBrowser && !this._fromServer) {
      this._fromServer = this.selectFromServer();
      this._instancesCounts = Object.keys(this._fromServer).reduce(function (acc, tagName) {
        acc[tagName] = 0;
        return acc;
      }, {});
    }

    var _this$getIdAndRules = this.getIdAndRules(props),
        styleId = _this$getIdAndRules.styleId,
        rules = _this$getIdAndRules.rules; // Deduping: just increase the instances count.


    if (styleId in this._instancesCounts) {
      this._instancesCounts[styleId] += 1;
      return;
    }

    var indices = rules.map(function (rule) {
      return _this._sheet.insertRule(rule);
    }) // Filter out invalid rules
    .filter(function (index) {
      return index !== -1;
    });
    this._indices[styleId] = indices;
    this._instancesCounts[styleId] = 1;
  };

  _proto.remove = function remove(props) {
    var _this2 = this;

    var _this$getIdAndRules2 = this.getIdAndRules(props),
        styleId = _this$getIdAndRules2.styleId;

    invariant(styleId in this._instancesCounts, "styleId: `" + styleId + "` not found");
    this._instancesCounts[styleId] -= 1;

    if (this._instancesCounts[styleId] < 1) {
      var tagFromServer = this._fromServer && this._fromServer[styleId];

      if (tagFromServer) {
        tagFromServer.parentNode.removeChild(tagFromServer);
        delete this._fromServer[styleId];
      } else {
        this._indices[styleId].forEach(function (index) {
          return _this2._sheet.deleteRule(index);
        });

        delete this._indices[styleId];
      }

      delete this._instancesCounts[styleId];
    }
  };

  _proto.update = function update(props, nextProps) {
    this.add(nextProps);
    this.remove(props);
  };

  _proto.flush = function flush() {
    this._sheet.flush();

    this._sheet.inject();

    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};
    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  };

  _proto.cssRules = function cssRules() {
    var _this3 = this;

    var fromServer = this._fromServer ? Object.keys(this._fromServer).map(function (styleId) {
      return [styleId, _this3._fromServer[styleId]];
    }) : [];

    var cssRules = this._sheet.cssRules();

    return fromServer.concat(Object.keys(this._indices).map(function (styleId) {
      return [styleId, _this3._indices[styleId].map(function (index) {
        return cssRules[index].cssText;
      }).join(_this3._optimizeForSpeed ? '' : '\n')];
    }) // filter out empty rules
    .filter(function (rule) {
      return Boolean(rule[1]);
    }));
  }
  /**
   * createComputeId
   *
   * Creates a function to compute and memoize a jsx id from a basedId and optionally props.
   */
  ;

  _proto.createComputeId = function createComputeId() {
    var cache = {};
    return function (baseId, props) {
      if (!props) {
        return "jsx-" + baseId;
      }

      var propsToString = String(props);
      var key = baseId + propsToString; // return `jsx-${hashString(`${baseId}-${propsToString}`)}`

      if (!cache[key]) {
        cache[key] = "jsx-" + (0, _stringHash["default"])(baseId + "-" + propsToString);
      }

      return cache[key];
    };
  }
  /**
   * createComputeSelector
   *
   * Creates a function to compute and memoize dynamic selectors.
   */
  ;

  _proto.createComputeSelector = function createComputeSelector(selectoPlaceholderRegexp) {
    if (selectoPlaceholderRegexp === void 0) {
      selectoPlaceholderRegexp = /__jsx-style-dynamic-selector/g;
    }

    var cache = {};
    return function (id, css) {
      // Sanitize SSR-ed CSS.
      // Client side code doesn't need to be sanitized since we use
      // document.createTextNode (dev) and the CSSOM api sheet.insertRule (prod).
      if (!this._isBrowser) {
        css = sanitize(css);
      }

      var idcss = id + css;

      if (!cache[idcss]) {
        cache[idcss] = css.replace(selectoPlaceholderRegexp, id);
      }

      return cache[idcss];
    };
  };

  _proto.getIdAndRules = function getIdAndRules(props) {
    var _this4 = this;

    var css = props.children,
        dynamic = props.dynamic,
        id = props.id;

    if (dynamic) {
      var styleId = this.computeId(id, dynamic);
      return {
        styleId: styleId,
        rules: Array.isArray(css) ? css.map(function (rule) {
          return _this4.computeSelector(styleId, rule);
        }) : [this.computeSelector(styleId, css)]
      };
    }

    return {
      styleId: this.computeId(id),
      rules: Array.isArray(css) ? css : [css]
    };
  }
  /**
   * selectFromServer
   *
   * Collects style tags from the document with id __jsx-XXX
   */
  ;

  _proto.selectFromServer = function selectFromServer() {
    var elements = Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));
    return elements.reduce(function (acc, element) {
      var id = element.id.slice(2);
      acc[id] = element;
      return acc;
    }, {});
  };

  return StyleSheetRegistry;
}();

exports.default = StyleSheetRegistry;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheetRegistry: " + message + ".");
  }
}

/***/ }),

/***/ "./.yarn/__virtual__/styled-jsx-virtual-e12abd1808/0/cache/styled-jsx-npm-4.0.1-af5df8001d-a4260ba093.zip/node_modules/styled-jsx/server.js":
/*!**************************************************************************************************************************************************!*\
  !*** ./.yarn/__virtual__/styled-jsx-virtual-e12abd1808/0/cache/styled-jsx-npm-4.0.1-af5df8001d-a4260ba093.zip/node_modules/styled-jsx/server.js ***!
  \**************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./dist/server */ "./.yarn/__virtual__/styled-jsx-virtual-e12abd1808/0/cache/styled-jsx-npm-4.0.1-af5df8001d-a4260ba093.zip/node_modules/styled-jsx/dist/server.js")


/***/ }),

/***/ "./.yarn/cache/string-hash-npm-1.1.3-3cb8892e7c-104b8667a5.zip/node_modules/string-hash/index.js":
/*!*******************************************************************************************************!*\
  !*** ./.yarn/cache/string-hash-npm-1.1.3-3cb8892e7c-104b8667a5.zip/node_modules/string-hash/index.js ***!
  \*******************************************************************************************************/
/***/ ((module) => {

"use strict";


function hash(str) {
  var hash = 5381,
      i    = str.length;

  while(i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }

  /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */
  return hash >>> 0;
}

module.exports = hash;


/***/ }),

/***/ "../server/get-page-files":
/*!*****************************************************!*\
  !*** external "next/dist/server/get-page-files.js" ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/get-page-files.js");

/***/ }),

/***/ "../server/htmlescape":
/*!*************************************************!*\
  !*** external "next/dist/server/htmlescape.js" ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/htmlescape.js");

/***/ }),

/***/ "../server/utils":
/*!********************************************!*\
  !*** external "next/dist/server/utils.js" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/utils.js");

/***/ }),

/***/ "../shared/lib/constants":
/*!****************************************************!*\
  !*** external "next/dist/shared/lib/constants.js" ***!
  \****************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ "../shared/lib/head-manager-context":
/*!***************************************************************!*\
  !*** external "next/dist/shared/lib/head-manager-context.js" ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ "../shared/lib/utils":
/*!************************************************!*\
  !*** external "next/dist/shared/lib/utils.js" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./.yarn/__virtual__/next-virtual-9f90812a87/0/cache/next-npm-11.1.2-b1c338c95c-c5a6d01b6d.zip/node_modules/next/dist/pages/_document.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxJQUFJO0FBQ1Q7O0FBRUE7QUFDQSxDQUFDOztBQUVELGVBQWtCOztBQUVsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDM1BBLDRNQUF5Qzs7Ozs7Ozs7Ozs7O0FDQTVCOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7O0FDaEJBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC15YXJuMi8uLy55YXJuL19fdmlydHVhbF9fL25leHQtdmlydHVhbC05ZjkwODEyYTg3LzAvY2FjaGUvbmV4dC1ucG0tMTEuMS4yLWIxYzMzOGM5NWMtYzVhNmQwMWI2ZC56aXAvbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvaGVhZC1tYW5hZ2VyLmpzIiwid2VicGFjazovL25leHQteWFybjIvLi8ueWFybi9fX3ZpcnR1YWxfXy9uZXh0LXZpcnR1YWwtOWY5MDgxMmE4Ny8wL2NhY2hlL25leHQtbnBtLTExLjEuMi1iMWMzMzhjOTVjLWM1YTZkMDFiNmQuemlwL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JlcXVlc3QtaWRsZS1jYWxsYmFjay5qcyIsIndlYnBhY2s6Ly9uZXh0LXlhcm4yLy4vLnlhcm4vX192aXJ0dWFsX18vbmV4dC12aXJ0dWFsLTlmOTA4MTJhODcvMC9jYWNoZS9uZXh0LW5wbS0xMS4xLjItYjFjMzM4Yzk1Yy1jNWE2ZDAxYjZkLnppcC9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9zY3JpcHQuanMiLCJ3ZWJwYWNrOi8vbmV4dC15YXJuMi8uLy55YXJuL19fdmlydHVhbF9fL25leHQtdmlydHVhbC05ZjkwODEyYTg3LzAvY2FjaGUvbmV4dC1ucG0tMTEuMS4yLWIxYzMzOGM5NWMtYzVhNmQwMWI2ZC56aXAvbm9kZV9tb2R1bGVzL25leHQvZGlzdC9wYWdlcy9fZG9jdW1lbnQuanMiLCJ3ZWJwYWNrOi8vbmV4dC15YXJuMi8uLy55YXJuL19fdmlydHVhbF9fL3N0eWxlZC1qc3gtdmlydHVhbC1lMTJhYmQxODA4LzAvY2FjaGUvc3R5bGVkLWpzeC1ucG0tNC4wLjEtYWY1ZGY4MDAxZC1hNDI2MGJhMDkzLnppcC9ub2RlX21vZHVsZXMvc3R5bGVkLWpzeC9kaXN0L2xpYi9zdHlsZXNoZWV0LmpzIiwid2VicGFjazovL25leHQteWFybjIvLi8ueWFybi9fX3ZpcnR1YWxfXy9zdHlsZWQtanN4LXZpcnR1YWwtZTEyYWJkMTgwOC8wL2NhY2hlL3N0eWxlZC1qc3gtbnBtLTQuMC4xLWFmNWRmODAwMWQtYTQyNjBiYTA5My56aXAvbm9kZV9tb2R1bGVzL3N0eWxlZC1qc3gvZGlzdC9zZXJ2ZXIuanMiLCJ3ZWJwYWNrOi8vbmV4dC15YXJuMi8uLy55YXJuL19fdmlydHVhbF9fL3N0eWxlZC1qc3gtdmlydHVhbC1lMTJhYmQxODA4LzAvY2FjaGUvc3R5bGVkLWpzeC1ucG0tNC4wLjEtYWY1ZGY4MDAxZC1hNDI2MGJhMDkzLnppcC9ub2RlX21vZHVsZXMvc3R5bGVkLWpzeC9kaXN0L3N0eWxlLmpzIiwid2VicGFjazovL25leHQteWFybjIvLi8ueWFybi9fX3ZpcnR1YWxfXy9zdHlsZWQtanN4LXZpcnR1YWwtZTEyYWJkMTgwOC8wL2NhY2hlL3N0eWxlZC1qc3gtbnBtLTQuMC4xLWFmNWRmODAwMWQtYTQyNjBiYTA5My56aXAvbm9kZV9tb2R1bGVzL3N0eWxlZC1qc3gvZGlzdC9zdHlsZXNoZWV0LXJlZ2lzdHJ5LmpzIiwid2VicGFjazovL25leHQteWFybjIvLi8ueWFybi9fX3ZpcnR1YWxfXy9zdHlsZWQtanN4LXZpcnR1YWwtZTEyYWJkMTgwOC8wL2NhY2hlL3N0eWxlZC1qc3gtbnBtLTQuMC4xLWFmNWRmODAwMWQtYTQyNjBiYTA5My56aXAvbm9kZV9tb2R1bGVzL3N0eWxlZC1qc3gvc2VydmVyLmpzIiwid2VicGFjazovL25leHQteWFybjIvLi8ueWFybi9jYWNoZS9zdHJpbmctaGFzaC1ucG0tMS4xLjMtM2NiODg5MmU3Yy0xMDRiODY2N2E1LnppcC9ub2RlX21vZHVsZXMvc3RyaW5nLWhhc2gvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbmV4dC15YXJuMi9leHRlcm5hbCBcIm5leHQvZGlzdC9zZXJ2ZXIvZ2V0LXBhZ2UtZmlsZXMuanNcIiIsIndlYnBhY2s6Ly9uZXh0LXlhcm4yL2V4dGVybmFsIFwibmV4dC9kaXN0L3NlcnZlci9odG1sZXNjYXBlLmpzXCIiLCJ3ZWJwYWNrOi8vbmV4dC15YXJuMi9leHRlcm5hbCBcIm5leHQvZGlzdC9zZXJ2ZXIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly9uZXh0LXlhcm4yL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvY29uc3RhbnRzLmpzXCIiLCJ3ZWJwYWNrOi8vbmV4dC15YXJuMi9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL2hlYWQtbWFuYWdlci1jb250ZXh0LmpzXCIiLCJ3ZWJwYWNrOi8vbmV4dC15YXJuMi9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3V0aWxzLmpzXCIiLCJ3ZWJwYWNrOi8vbmV4dC15YXJuMi9leHRlcm5hbCBcInJlYWN0XCIiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBpbml0SGVhZE1hbmFnZXI7XG5leHBvcnRzLkRPTUF0dHJpYnV0ZU5hbWVzID0gdm9pZCAwO1xuY29uc3QgRE9NQXR0cmlidXRlTmFtZXMgPSB7XG4gICAgYWNjZXB0Q2hhcnNldDogJ2FjY2VwdC1jaGFyc2V0JyxcbiAgICBjbGFzc05hbWU6ICdjbGFzcycsXG4gICAgaHRtbEZvcjogJ2ZvcicsXG4gICAgaHR0cEVxdWl2OiAnaHR0cC1lcXVpdicsXG4gICAgbm9Nb2R1bGU6ICdub01vZHVsZSdcbn07XG5leHBvcnRzLkRPTUF0dHJpYnV0ZU5hbWVzID0gRE9NQXR0cmlidXRlTmFtZXM7XG5mdW5jdGlvbiByZWFjdEVsZW1lbnRUb0RPTSh7IHR5cGUgLCBwcm9wcyAgfSkge1xuICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcbiAgICBmb3IoY29uc3QgcCBpbiBwcm9wcyl7XG4gICAgICAgIGlmICghcHJvcHMuaGFzT3duUHJvcGVydHkocCkpIGNvbnRpbnVlO1xuICAgICAgICBpZiAocCA9PT0gJ2NoaWxkcmVuJyB8fCBwID09PSAnZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwnKSBjb250aW51ZTtcbiAgICAgICAgLy8gd2UgZG9uJ3QgcmVuZGVyIHVuZGVmaW5lZCBwcm9wcyB0byB0aGUgRE9NXG4gICAgICAgIGlmIChwcm9wc1twXSA9PT0gdW5kZWZpbmVkKSBjb250aW51ZTtcbiAgICAgICAgY29uc3QgYXR0ciA9IERPTUF0dHJpYnV0ZU5hbWVzW3BdIHx8IHAudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgaWYgKHR5cGUgPT09ICdzY3JpcHQnICYmIChhdHRyID09PSAnYXN5bmMnIHx8IGF0dHIgPT09ICdkZWZlcicgfHwgYXR0ciA9PT0gJ25vTW9kdWxlJykpIHtcbiAgICAgICAgICAgIGVsW2F0dHJdID0gISFwcm9wc1twXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVsLnNldEF0dHJpYnV0ZShhdHRyLCBwcm9wc1twXSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgeyBjaGlsZHJlbiAsIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MICB9ID0gcHJvcHM7XG4gICAgaWYgKGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MKSB7XG4gICAgICAgIGVsLmlubmVySFRNTCA9IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MLl9faHRtbCB8fCAnJztcbiAgICB9IGVsc2UgaWYgKGNoaWxkcmVuKSB7XG4gICAgICAgIGVsLnRleHRDb250ZW50ID0gdHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJyA/IGNoaWxkcmVuIDogQXJyYXkuaXNBcnJheShjaGlsZHJlbikgPyBjaGlsZHJlbi5qb2luKCcnKSA6ICcnO1xuICAgIH1cbiAgICByZXR1cm4gZWw7XG59XG5mdW5jdGlvbiB1cGRhdGVFbGVtZW50cyh0eXBlLCBjb21wb25lbnRzKSB7XG4gICAgY29uc3QgaGVhZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXTtcbiAgICBjb25zdCBoZWFkQ291bnRFbCA9IGhlYWRFbC5xdWVyeVNlbGVjdG9yKCdtZXRhW25hbWU9bmV4dC1oZWFkLWNvdW50XScpO1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGlmICghaGVhZENvdW50RWwpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1dhcm5pbmc6IG5leHQtaGVhZC1jb3VudCBpcyBtaXNzaW5nLiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9uZXh0LWhlYWQtY291bnQtbWlzc2luZycpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IGhlYWRDb3VudCA9IE51bWJlcihoZWFkQ291bnRFbC5jb250ZW50KTtcbiAgICBjb25zdCBvbGRUYWdzID0gW107XG4gICAgZm9yKGxldCBpID0gMCwgaiA9IGhlYWRDb3VudEVsLnByZXZpb3VzRWxlbWVudFNpYmxpbmc7IGkgPCBoZWFkQ291bnQ7IGkrKywgaiA9IGoucHJldmlvdXNFbGVtZW50U2libGluZyl7XG4gICAgICAgIGlmIChqLnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gdHlwZSkge1xuICAgICAgICAgICAgb2xkVGFncy5wdXNoKGopO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IG5ld1RhZ3MgPSBjb21wb25lbnRzLm1hcChyZWFjdEVsZW1lbnRUb0RPTSkuZmlsdGVyKChuZXdUYWcpPT57XG4gICAgICAgIGZvcihsZXQgayA9IDAsIGxlbiA9IG9sZFRhZ3MubGVuZ3RoOyBrIDwgbGVuOyBrKyspe1xuICAgICAgICAgICAgY29uc3Qgb2xkVGFnID0gb2xkVGFnc1trXTtcbiAgICAgICAgICAgIGlmIChvbGRUYWcuaXNFcXVhbE5vZGUobmV3VGFnKSkge1xuICAgICAgICAgICAgICAgIG9sZFRhZ3Muc3BsaWNlKGssIDEpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KTtcbiAgICBvbGRUYWdzLmZvckVhY2goKHQpPT50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodClcbiAgICApO1xuICAgIG5ld1RhZ3MuZm9yRWFjaCgodCk9PmhlYWRFbC5pbnNlcnRCZWZvcmUodCwgaGVhZENvdW50RWwpXG4gICAgKTtcbiAgICBoZWFkQ291bnRFbC5jb250ZW50ID0gKGhlYWRDb3VudCAtIG9sZFRhZ3MubGVuZ3RoICsgbmV3VGFncy5sZW5ndGgpLnRvU3RyaW5nKCk7XG59XG5mdW5jdGlvbiBpbml0SGVhZE1hbmFnZXIoKSB7XG4gICAgbGV0IHVwZGF0ZVByb21pc2UgPSBudWxsO1xuICAgIHJldHVybiB7XG4gICAgICAgIG1vdW50ZWRJbnN0YW5jZXM6IG5ldyBTZXQoKSxcbiAgICAgICAgdXBkYXRlSGVhZDogKGhlYWQpPT57XG4gICAgICAgICAgICBjb25zdCBwcm9taXNlID0gdXBkYXRlUHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCk9PntcbiAgICAgICAgICAgICAgICBpZiAocHJvbWlzZSAhPT0gdXBkYXRlUHJvbWlzZSkgcmV0dXJuO1xuICAgICAgICAgICAgICAgIHVwZGF0ZVByb21pc2UgPSBudWxsO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRhZ3MgPSB7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBoZWFkLmZvckVhY2goKGgpPT57XG4gICAgICAgICAgICAgICAgICAgIGlmICgvLyBJZiB0aGUgZm9udCB0YWcgaXMgbG9hZGVkIG9ubHkgb24gY2xpZW50IG5hdmlnYXRpb25cbiAgICAgICAgICAgICAgICAgICAgLy8gaXQgd29uJ3QgYmUgaW5saW5lZC4gSW4gdGhpcyBjYXNlIHJldmVydCB0byB0aGUgb3JpZ2luYWwgYmVoYXZpb3JcbiAgICAgICAgICAgICAgICAgICAgaC50eXBlID09PSAnbGluaycgJiYgaC5wcm9wc1snZGF0YS1vcHRpbWl6ZWQtZm9udHMnXSAmJiAhZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihgc3R5bGVbZGF0YS1ocmVmPVwiJHtoLnByb3BzWydkYXRhLWhyZWYnXX1cIl1gKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaC5wcm9wcy5ocmVmID0gaC5wcm9wc1snZGF0YS1ocmVmJ107XG4gICAgICAgICAgICAgICAgICAgICAgICBoLnByb3BzWydkYXRhLWhyZWYnXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnRzID0gdGFnc1toLnR5cGVdIHx8IFtdO1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRzLnB1c2goaCk7XG4gICAgICAgICAgICAgICAgICAgIHRhZ3NbaC50eXBlXSA9IGNvbXBvbmVudHM7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgY29uc3QgdGl0bGVDb21wb25lbnQgPSB0YWdzLnRpdGxlID8gdGFncy50aXRsZVswXSA6IG51bGw7XG4gICAgICAgICAgICAgICAgbGV0IHRpdGxlID0gJyc7XG4gICAgICAgICAgICAgICAgaWYgKHRpdGxlQ29tcG9uZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgY2hpbGRyZW4gIH0gPSB0aXRsZUNvbXBvbmVudC5wcm9wcztcbiAgICAgICAgICAgICAgICAgICAgdGl0bGUgPSB0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnID8gY2hpbGRyZW4gOiBBcnJheS5pc0FycmF5KGNoaWxkcmVuKSA/IGNoaWxkcmVuLmpvaW4oJycpIDogJyc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0aXRsZSAhPT0gZG9jdW1lbnQudGl0bGUpIGRvY3VtZW50LnRpdGxlID0gdGl0bGU7XG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAnbWV0YScsXG4gICAgICAgICAgICAgICAgICAgICdiYXNlJyxcbiAgICAgICAgICAgICAgICAgICAgJ2xpbmsnLFxuICAgICAgICAgICAgICAgICAgICAnc3R5bGUnLFxuICAgICAgICAgICAgICAgICAgICAnc2NyaXB0J1xuICAgICAgICAgICAgICAgIF0uZm9yRWFjaCgodHlwZSk9PntcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlRWxlbWVudHModHlwZSwgdGFnc1t0eXBlXSB8fCBbXSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWhlYWQtbWFuYWdlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMucmVxdWVzdElkbGVDYWxsYmFjayA9IGV4cG9ydHMuY2FuY2VsSWRsZUNhbGxiYWNrID0gdm9pZCAwO1xuY29uc3QgcmVxdWVzdElkbGVDYWxsYmFjayA9IHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmLnJlcXVlc3RJZGxlQ2FsbGJhY2sgJiYgc2VsZi5yZXF1ZXN0SWRsZUNhbGxiYWNrLmJpbmQod2luZG93KSB8fCBmdW5jdGlvbihjYikge1xuICAgIGxldCBzdGFydCA9IERhdGUubm93KCk7XG4gICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIGNiKHtcbiAgICAgICAgICAgIGRpZFRpbWVvdXQ6IGZhbHNlLFxuICAgICAgICAgICAgdGltZVJlbWFpbmluZzogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE1hdGgubWF4KDAsIDUwIC0gKERhdGUubm93KCkgLSBzdGFydCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LCAxKTtcbn07XG5leHBvcnRzLnJlcXVlc3RJZGxlQ2FsbGJhY2sgPSByZXF1ZXN0SWRsZUNhbGxiYWNrO1xuY29uc3QgY2FuY2VsSWRsZUNhbGxiYWNrID0gdHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHNlbGYuY2FuY2VsSWRsZUNhbGxiYWNrICYmIHNlbGYuY2FuY2VsSWRsZUNhbGxiYWNrLmJpbmQod2luZG93KSB8fCBmdW5jdGlvbihpZCkge1xuICAgIHJldHVybiBjbGVhclRpbWVvdXQoaWQpO1xufTtcbmV4cG9ydHMuY2FuY2VsSWRsZUNhbGxiYWNrID0gY2FuY2VsSWRsZUNhbGxiYWNrO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZXF1ZXN0LWlkbGUtY2FsbGJhY2suanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmluaXRTY3JpcHRMb2FkZXIgPSBpbml0U2NyaXB0TG9hZGVyO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9yZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcbnZhciBfaGVhZE1hbmFnZXJDb250ZXh0ID0gcmVxdWlyZShcIi4uL3NoYXJlZC9saWIvaGVhZC1tYW5hZ2VyLWNvbnRleHRcIik7XG52YXIgX2hlYWRNYW5hZ2VyID0gcmVxdWlyZShcIi4vaGVhZC1tYW5hZ2VyXCIpO1xudmFyIF9yZXF1ZXN0SWRsZUNhbGxiYWNrID0gcmVxdWlyZShcIi4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrXCIpO1xuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICAgIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG9ialtrZXldID0gdmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBvYmo7XG59XG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkge1xuICAgIGZvcih2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspe1xuICAgICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7XG4gICAgICAgIH07XG4gICAgICAgIHZhciBvd25LZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgICAgICAgaWYgKHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIG93bktleXMgPSBvd25LZXlzLmNvbmNhdChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZSkuZmlsdGVyKGZ1bmN0aW9uKHN5bSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwgc3ltKS5lbnVtZXJhYmxlO1xuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9XG4gICAgICAgIG93bktleXMuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgICAgIF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldDtcbn1cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gICAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge1xuICAgIH07XG4gICAgdmFyIHRhcmdldCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpO1xuICAgIHZhciBrZXksIGk7XG4gICAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICAgICAgdmFyIHNvdXJjZVN5bWJvbEtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZSk7XG4gICAgICAgIGZvcihpID0gMDsgaSA8IHNvdXJjZVN5bWJvbEtleXMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAga2V5ID0gc291cmNlU3ltYm9sS2V5c1tpXTtcbiAgICAgICAgICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgICAgICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzb3VyY2UsIGtleSkpIGNvbnRpbnVlO1xuICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0O1xufVxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkge1xuICAgIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHtcbiAgICB9O1xuICAgIHZhciB0YXJnZXQgPSB7XG4gICAgfTtcbiAgICB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gICAgdmFyIGtleSwgaTtcbiAgICBmb3IoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAga2V5ID0gc291cmNlS2V5c1tpXTtcbiAgICAgICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldDtcbn1cbmNvbnN0IFNjcmlwdENhY2hlID0gbmV3IE1hcCgpO1xuY29uc3QgTG9hZENhY2hlID0gbmV3IFNldCgpO1xuY29uc3QgaWdub3JlUHJvcHMgPSBbXG4gICAgJ29uTG9hZCcsXG4gICAgJ2Rhbmdlcm91c2x5U2V0SW5uZXJIVE1MJyxcbiAgICAnY2hpbGRyZW4nLFxuICAgICdvbkVycm9yJyxcbiAgICAnc3RyYXRlZ3knLCBcbl07XG5jb25zdCBsb2FkU2NyaXB0ID0gKHByb3BzKT0+e1xuICAgIGNvbnN0IHsgc3JjICwgaWQgLCBvbkxvYWQgPSgpPT57XG4gICAgfSAsIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MICwgY2hpbGRyZW4gPScnICwgc3RyYXRlZ3kgPSdhZnRlckludGVyYWN0aXZlJyAsIG9uRXJyb3IgLCAgfSA9IHByb3BzO1xuICAgIGNvbnN0IGNhY2hlS2V5ID0gaWQgfHwgc3JjO1xuICAgIC8vIFNjcmlwdCBoYXMgYWxyZWFkeSBsb2FkZWRcbiAgICBpZiAoY2FjaGVLZXkgJiYgTG9hZENhY2hlLmhhcyhjYWNoZUtleSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBDb250ZW50cyBvZiB0aGlzIHNjcmlwdCBhcmUgYWxyZWFkeSBsb2FkaW5nL2xvYWRlZFxuICAgIGlmIChTY3JpcHRDYWNoZS5oYXMoc3JjKSkge1xuICAgICAgICBMb2FkQ2FjaGUuYWRkKGNhY2hlS2V5KTtcbiAgICAgICAgLy8gRXhlY3V0ZSBvbkxvYWQgc2luY2UgdGhlIHNjcmlwdCBsb2FkaW5nIGhhcyBiZWd1blxuICAgICAgICBTY3JpcHRDYWNoZS5nZXQoc3JjKS50aGVuKG9uTG9hZCwgb25FcnJvcik7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICBjb25zdCBsb2FkUHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpPT57XG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICBpZiAob25Mb2FkKSB7XG4gICAgICAgICAgICAgICAgb25Mb2FkLmNhbGwodGhpcywgZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIHJlamVjdChlKTtcbiAgICAgICAgfSk7XG4gICAgfSkuY2F0Y2goZnVuY3Rpb24oZSkge1xuICAgICAgICBpZiAob25FcnJvcikge1xuICAgICAgICAgICAgb25FcnJvcihlKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGlmIChzcmMpIHtcbiAgICAgICAgU2NyaXB0Q2FjaGUuc2V0KHNyYywgbG9hZFByb21pc2UpO1xuICAgIH1cbiAgICBMb2FkQ2FjaGUuYWRkKGNhY2hlS2V5KTtcbiAgICBpZiAoZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwpIHtcbiAgICAgICAgZWwuaW5uZXJIVE1MID0gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwuX19odG1sIHx8ICcnO1xuICAgIH0gZWxzZSBpZiAoY2hpbGRyZW4pIHtcbiAgICAgICAgZWwudGV4dENvbnRlbnQgPSB0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnID8gY2hpbGRyZW4gOiBBcnJheS5pc0FycmF5KGNoaWxkcmVuKSA/IGNoaWxkcmVuLmpvaW4oJycpIDogJyc7XG4gICAgfSBlbHNlIGlmIChzcmMpIHtcbiAgICAgICAgZWwuc3JjID0gc3JjO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IFtrLCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMocHJvcHMpKXtcbiAgICAgICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQgfHwgaWdub3JlUHJvcHMuaW5jbHVkZXMoaykpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGF0dHIgPSBfaGVhZE1hbmFnZXIuRE9NQXR0cmlidXRlTmFtZXNba10gfHwgay50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoYXR0ciwgdmFsdWUpO1xuICAgIH1cbiAgICBlbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtbnNjcmlwdCcsIHN0cmF0ZWd5KTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVsKTtcbn07XG5mdW5jdGlvbiBoYW5kbGVDbGllbnRTY3JpcHRMb2FkKHByb3BzKSB7XG4gICAgY29uc3QgeyBzdHJhdGVneSA9J2FmdGVySW50ZXJhY3RpdmUnICB9ID0gcHJvcHM7XG4gICAgaWYgKHN0cmF0ZWd5ID09PSAnYWZ0ZXJJbnRlcmFjdGl2ZScpIHtcbiAgICAgICAgbG9hZFNjcmlwdChwcm9wcyk7XG4gICAgfSBlbHNlIGlmIChzdHJhdGVneSA9PT0gJ2xhenlPbmxvYWQnKSB7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCk9PntcbiAgICAgICAgICAgICgwLCBfcmVxdWVzdElkbGVDYWxsYmFjaykucmVxdWVzdElkbGVDYWxsYmFjaygoKT0+bG9hZFNjcmlwdChwcm9wcylcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGxvYWRMYXp5U2NyaXB0KHByb3BzKSB7XG4gICAgaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdjb21wbGV0ZScpIHtcbiAgICAgICAgKDAsIF9yZXF1ZXN0SWRsZUNhbGxiYWNrKS5yZXF1ZXN0SWRsZUNhbGxiYWNrKCgpPT5sb2FkU2NyaXB0KHByb3BzKVxuICAgICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCk9PntcbiAgICAgICAgICAgICgwLCBfcmVxdWVzdElkbGVDYWxsYmFjaykucmVxdWVzdElkbGVDYWxsYmFjaygoKT0+bG9hZFNjcmlwdChwcm9wcylcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGluaXRTY3JpcHRMb2FkZXIoc2NyaXB0TG9hZGVySXRlbXMpIHtcbiAgICBzY3JpcHRMb2FkZXJJdGVtcy5mb3JFYWNoKGhhbmRsZUNsaWVudFNjcmlwdExvYWQpO1xufVxuZnVuY3Rpb24gU2NyaXB0KHByb3BzKSB7XG4gICAgY29uc3QgeyBzcmMgPScnICwgb25Mb2FkID0oKT0+e1xuICAgIH0gLCBkYW5nZXJvdXNseVNldElubmVySFRNTCAsIHN0cmF0ZWd5ID0nYWZ0ZXJJbnRlcmFjdGl2ZScgLCBvbkVycm9yICB9ID0gcHJvcHMsIHJlc3RQcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhwcm9wcywgW1wic3JjXCIsIFwib25Mb2FkXCIsIFwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUxcIiwgXCJzdHJhdGVneVwiLCBcIm9uRXJyb3JcIl0pO1xuICAgIC8vIENvbnRleHQgaXMgYXZhaWxhYmxlIG9ubHkgZHVyaW5nIFNTUlxuICAgIGNvbnN0IHsgdXBkYXRlU2NyaXB0cyAsIHNjcmlwdHMgLCBnZXRJc1NzciAgfSA9ICgwLCBfcmVhY3QpLnVzZUNvbnRleHQoX2hlYWRNYW5hZ2VyQ29udGV4dC5IZWFkTWFuYWdlckNvbnRleHQpO1xuICAgICgwLCBfcmVhY3QpLnVzZUVmZmVjdCgoKT0+e1xuICAgICAgICBpZiAoc3RyYXRlZ3kgPT09ICdhZnRlckludGVyYWN0aXZlJykge1xuICAgICAgICAgICAgbG9hZFNjcmlwdChwcm9wcyk7XG4gICAgICAgIH0gZWxzZSBpZiAoc3RyYXRlZ3kgPT09ICdsYXp5T25sb2FkJykge1xuICAgICAgICAgICAgbG9hZExhenlTY3JpcHQocHJvcHMpO1xuICAgICAgICB9XG4gICAgfSwgW1xuICAgICAgICBwcm9wcyxcbiAgICAgICAgc3RyYXRlZ3lcbiAgICBdKTtcbiAgICBpZiAoc3RyYXRlZ3kgPT09ICdiZWZvcmVJbnRlcmFjdGl2ZScpIHtcbiAgICAgICAgaWYgKHVwZGF0ZVNjcmlwdHMpIHtcbiAgICAgICAgICAgIHNjcmlwdHMuYmVmb3JlSW50ZXJhY3RpdmUgPSAoc2NyaXB0cy5iZWZvcmVJbnRlcmFjdGl2ZSB8fCBbXSkuY29uY2F0KFtcbiAgICAgICAgICAgICAgICBfb2JqZWN0U3ByZWFkKHtcbiAgICAgICAgICAgICAgICAgICAgc3JjLFxuICAgICAgICAgICAgICAgICAgICBvbkxvYWQsXG4gICAgICAgICAgICAgICAgICAgIG9uRXJyb3JcbiAgICAgICAgICAgICAgICB9LCByZXN0UHJvcHMpLCBcbiAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgdXBkYXRlU2NyaXB0cyhzY3JpcHRzKTtcbiAgICAgICAgfSBlbHNlIGlmIChnZXRJc1NzciAmJiBnZXRJc1NzcigpKSB7XG4gICAgICAgICAgICAvLyBTY3JpcHQgaGFzIGFscmVhZHkgbG9hZGVkIGR1cmluZyBTU1JcbiAgICAgICAgICAgIExvYWRDYWNoZS5hZGQocmVzdFByb3BzLmlkIHx8IHNyYyk7XG4gICAgICAgIH0gZWxzZSBpZiAoZ2V0SXNTc3IgJiYgIWdldElzU3NyKCkpIHtcbiAgICAgICAgICAgIGxvYWRTY3JpcHQocHJvcHMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufVxudmFyIF9kZWZhdWx0ID0gU2NyaXB0O1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNjcmlwdC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkRvY3VtZW50Q29udGV4dFwiLCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX3V0aWxzLkRvY3VtZW50Q29udGV4dDtcbiAgICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkRvY3VtZW50SW5pdGlhbFByb3BzXCIsIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBfdXRpbHMuRG9jdW1lbnRJbml0aWFsUHJvcHM7XG4gICAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJEb2N1bWVudFByb3BzXCIsIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBfdXRpbHMuRG9jdW1lbnRQcm9wcztcbiAgICB9XG59KTtcbmV4cG9ydHMuSHRtbCA9IEh0bWw7XG5leHBvcnRzLk1haW4gPSBNYWluO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgX3NlcnZlciA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInN0eWxlZC1qc3gvc2VydmVyXCIpKTtcbnZhciBfY29uc3RhbnRzID0gcmVxdWlyZShcIi4uL3NoYXJlZC9saWIvY29uc3RhbnRzXCIpO1xudmFyIF91dGlscyA9IHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL3V0aWxzXCIpO1xudmFyIF9nZXRQYWdlRmlsZXMgPSByZXF1aXJlKFwiLi4vc2VydmVyL2dldC1wYWdlLWZpbGVzXCIpO1xudmFyIF91dGlsczEgPSByZXF1aXJlKFwiLi4vc2VydmVyL3V0aWxzXCIpO1xudmFyIF9odG1sZXNjYXBlID0gcmVxdWlyZShcIi4uL3NlcnZlci9odG1sZXNjYXBlXCIpO1xudmFyIF9zY3JpcHQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9jbGllbnQvc2NyaXB0XCIpKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbn1cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge1xuICAgIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgbmV3T2JqID0ge1xuICAgICAgICB9O1xuICAgICAgICBpZiAob2JqICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvcih2YXIga2V5IGluIG9iail7XG4gICAgICAgICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRlc2MgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDoge1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIG5ld09iai5kZWZhdWx0ID0gb2JqO1xuICAgICAgICByZXR1cm4gbmV3T2JqO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGdldERvY3VtZW50RmlsZXMoYnVpbGRNYW5pZmVzdCwgcGF0aG5hbWUsIGluQW1wTW9kZSkge1xuICAgIGNvbnN0IHNoYXJlZEZpbGVzID0gKDAsIF9nZXRQYWdlRmlsZXMpLmdldFBhZ2VGaWxlcyhidWlsZE1hbmlmZXN0LCAnL19hcHAnKTtcbiAgICBjb25zdCBwYWdlRmlsZXMgPSBpbkFtcE1vZGUgPyBbXSA6ICgwLCBfZ2V0UGFnZUZpbGVzKS5nZXRQYWdlRmlsZXMoYnVpbGRNYW5pZmVzdCwgcGF0aG5hbWUpO1xuICAgIHJldHVybiB7XG4gICAgICAgIHNoYXJlZEZpbGVzLFxuICAgICAgICBwYWdlRmlsZXMsXG4gICAgICAgIGFsbEZpbGVzOiBbXG4gICAgICAgICAgICAuLi5uZXcgU2V0KFtcbiAgICAgICAgICAgICAgICAuLi5zaGFyZWRGaWxlcyxcbiAgICAgICAgICAgICAgICAuLi5wYWdlRmlsZXNcbiAgICAgICAgICAgIF0pXG4gICAgICAgIF1cbiAgICB9O1xufVxuZnVuY3Rpb24gZ2V0UG9seWZpbGxTY3JpcHRzKGNvbnRleHQsIHByb3BzKSB7XG4gICAgLy8gcG9seWZpbGxzLmpzIGhhcyB0byBiZSByZW5kZXJlZCBhcyBub21vZHVsZSB3aXRob3V0IGFzeW5jXG4gICAgLy8gSXQgYWxzbyBoYXMgdG8gYmUgdGhlIGZpcnN0IHNjcmlwdCB0byBsb2FkXG4gICAgY29uc3QgeyBhc3NldFByZWZpeCAsIGJ1aWxkTWFuaWZlc3QgLCBkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZyAsIGRpc2FibGVPcHRpbWl6ZWRMb2FkaW5nICwgIH0gPSBjb250ZXh0O1xuICAgIHJldHVybiBidWlsZE1hbmlmZXN0LnBvbHlmaWxsRmlsZXMuZmlsdGVyKChwb2x5ZmlsbCk9PnBvbHlmaWxsLmVuZHNXaXRoKCcuanMnKSAmJiAhcG9seWZpbGwuZW5kc1dpdGgoJy5tb2R1bGUuanMnKVxuICAgICkubWFwKChwb2x5ZmlsbCk9Pi8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiLCB7XG4gICAgICAgICAgICBrZXk6IHBvbHlmaWxsLFxuICAgICAgICAgICAgZGVmZXI6ICFkaXNhYmxlT3B0aW1pemVkTG9hZGluZyxcbiAgICAgICAgICAgIG5vbmNlOiBwcm9wcy5ub25jZSxcbiAgICAgICAgICAgIGNyb3NzT3JpZ2luOiBwcm9wcy5jcm9zc09yaWdpbiB8fCBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOLFxuICAgICAgICAgICAgbm9Nb2R1bGU6IHRydWUsXG4gICAgICAgICAgICBzcmM6IGAke2Fzc2V0UHJlZml4fS9fbmV4dC8ke3BvbHlmaWxsfSR7ZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmd9YFxuICAgICAgICB9KVxuICAgICk7XG59XG5mdW5jdGlvbiBnZXRQcmVOZXh0U2NyaXB0cyhjb250ZXh0LCBwcm9wcykge1xuICAgIGNvbnN0IHsgc2NyaXB0TG9hZGVyICwgZGlzYWJsZU9wdGltaXplZExvYWRpbmcgIH0gPSBjb250ZXh0O1xuICAgIHJldHVybiAoc2NyaXB0TG9hZGVyLmJlZm9yZUludGVyYWN0aXZlIHx8IFtdKS5tYXAoKGZpbGUsIGluZGV4KT0+e1xuICAgICAgICBjb25zdCB7IHN0cmF0ZWd5ICwgLi4uc2NyaXB0UHJvcHMgfSA9IGZpbGU7XG4gICAgICAgIHJldHVybigvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIiwgT2JqZWN0LmFzc2lnbih7XG4gICAgICAgIH0sIHNjcmlwdFByb3BzLCB7XG4gICAgICAgICAgICBrZXk6IHNjcmlwdFByb3BzLnNyYyB8fCBpbmRleCxcbiAgICAgICAgICAgIGRlZmVyOiAhZGlzYWJsZU9wdGltaXplZExvYWRpbmcsXG4gICAgICAgICAgICBub25jZTogcHJvcHMubm9uY2UsXG4gICAgICAgICAgICBcImRhdGEtbnNjcmlwdFwiOiBcImJlZm9yZUludGVyYWN0aXZlXCIsXG4gICAgICAgICAgICBjcm9zc09yaWdpbjogcHJvcHMuY3Jvc3NPcmlnaW4gfHwgcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTlxuICAgICAgICB9KSkpO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gZ2V0RHluYW1pY0NodW5rcyhjb250ZXh0LCBwcm9wcywgZmlsZXMpIHtcbiAgICBjb25zdCB7IGR5bmFtaWNJbXBvcnRzICwgYXNzZXRQcmVmaXggLCBpc0RldmVsb3BtZW50ICwgZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmcgLCBkaXNhYmxlT3B0aW1pemVkTG9hZGluZyAsICB9ID0gY29udGV4dDtcbiAgICByZXR1cm4gZHluYW1pY0ltcG9ydHMubWFwKChmaWxlKT0+e1xuICAgICAgICBpZiAoIWZpbGUuZW5kc1dpdGgoJy5qcycpIHx8IGZpbGVzLmFsbEZpbGVzLmluY2x1ZGVzKGZpbGUpKSByZXR1cm4gbnVsbDtcbiAgICAgICAgcmV0dXJuKC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiLCB7XG4gICAgICAgICAgICBhc3luYzogIWlzRGV2ZWxvcG1lbnQgJiYgZGlzYWJsZU9wdGltaXplZExvYWRpbmcsXG4gICAgICAgICAgICBkZWZlcjogIWRpc2FibGVPcHRpbWl6ZWRMb2FkaW5nLFxuICAgICAgICAgICAga2V5OiBmaWxlLFxuICAgICAgICAgICAgc3JjOiBgJHthc3NldFByZWZpeH0vX25leHQvJHtlbmNvZGVVUkkoZmlsZSl9JHtkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZ31gLFxuICAgICAgICAgICAgbm9uY2U6IHByb3BzLm5vbmNlLFxuICAgICAgICAgICAgY3Jvc3NPcmlnaW46IHByb3BzLmNyb3NzT3JpZ2luIHx8IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU5cbiAgICAgICAgfSkpO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gZ2V0U2NyaXB0cyhjb250ZXh0LCBwcm9wcywgZmlsZXMpIHtcbiAgICB2YXIgcmVmO1xuICAgIGNvbnN0IHsgYXNzZXRQcmVmaXggLCBidWlsZE1hbmlmZXN0ICwgaXNEZXZlbG9wbWVudCAsIGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nICwgZGlzYWJsZU9wdGltaXplZExvYWRpbmcgLCAgfSA9IGNvbnRleHQ7XG4gICAgY29uc3Qgbm9ybWFsU2NyaXB0cyA9IGZpbGVzLmFsbEZpbGVzLmZpbHRlcigoZmlsZSk9PmZpbGUuZW5kc1dpdGgoJy5qcycpXG4gICAgKTtcbiAgICBjb25zdCBsb3dQcmlvcml0eVNjcmlwdHMgPSAocmVmID0gYnVpbGRNYW5pZmVzdC5sb3dQcmlvcml0eUZpbGVzKSA9PT0gbnVsbCB8fCByZWYgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHJlZi5maWx0ZXIoKGZpbGUpPT5maWxlLmVuZHNXaXRoKCcuanMnKVxuICAgICk7XG4gICAgcmV0dXJuIFtcbiAgICAgICAgLi4ubm9ybWFsU2NyaXB0cyxcbiAgICAgICAgLi4ubG93UHJpb3JpdHlTY3JpcHRzXG4gICAgXS5tYXAoKGZpbGUpPT57XG4gICAgICAgIHJldHVybigvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIiwge1xuICAgICAgICAgICAga2V5OiBmaWxlLFxuICAgICAgICAgICAgc3JjOiBgJHthc3NldFByZWZpeH0vX25leHQvJHtlbmNvZGVVUkkoZmlsZSl9JHtkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZ31gLFxuICAgICAgICAgICAgbm9uY2U6IHByb3BzLm5vbmNlLFxuICAgICAgICAgICAgYXN5bmM6ICFpc0RldmVsb3BtZW50ICYmIGRpc2FibGVPcHRpbWl6ZWRMb2FkaW5nLFxuICAgICAgICAgICAgZGVmZXI6ICFkaXNhYmxlT3B0aW1pemVkTG9hZGluZyxcbiAgICAgICAgICAgIGNyb3NzT3JpZ2luOiBwcm9wcy5jcm9zc09yaWdpbiB8fCBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOXG4gICAgICAgIH0pKTtcbiAgICB9KTtcbn1cbmNsYXNzIERvY3VtZW50MSBleHRlbmRzIF9yZWFjdC5Db21wb25lbnQge1xuICAgIC8qKlxuICAgKiBgZ2V0SW5pdGlhbFByb3BzYCBob29rIHJldHVybnMgdGhlIGNvbnRleHQgb2JqZWN0IHdpdGggdGhlIGFkZGl0aW9uIG9mIGByZW5kZXJQYWdlYC5cbiAgICogYHJlbmRlclBhZ2VgIGNhbGxiYWNrIGV4ZWN1dGVzIGBSZWFjdGAgcmVuZGVyaW5nIGxvZ2ljIHN5bmNocm9ub3VzbHkgdG8gc3VwcG9ydCBzZXJ2ZXItcmVuZGVyaW5nIHdyYXBwZXJzXG4gICAqLyBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKGN0eCkge1xuICAgICAgICBjb25zdCBlbmhhbmNlQXBwID0gKEFwcCk9PntcbiAgICAgICAgICAgIHJldHVybiAocHJvcHMpPT4vKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQXBwLCBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgICAgICB9LCBwcm9wcykpXG4gICAgICAgICAgICA7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHsgaHRtbCAsIGhlYWQgIH0gPSBhd2FpdCBjdHgucmVuZGVyUGFnZSh7XG4gICAgICAgICAgICBlbmhhbmNlQXBwXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBzdHlsZXMgPSBbXG4gICAgICAgICAgICAuLi4oMCwgX3NlcnZlcikuZGVmYXVsdCgpXG4gICAgICAgIF07XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBodG1sLFxuICAgICAgICAgICAgaGVhZCxcbiAgICAgICAgICAgIHN0eWxlc1xuICAgICAgICB9O1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybigvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoSHRtbCwgbnVsbCwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KEhlYWQsIG51bGwpLCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJib2R5XCIsIG51bGwsIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChNYWluLCBudWxsKSwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KE5leHRTY3JpcHQsIG51bGwpKSkpO1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IERvY3VtZW50MTtcbmZ1bmN0aW9uIEh0bWwocHJvcHMpIHtcbiAgICBjb25zdCB7IGluQW1wTW9kZSAsIGRvY0NvbXBvbmVudHNSZW5kZXJlZCAsIGxvY2FsZSAgfSA9ICgwLCBfcmVhY3QpLnVzZUNvbnRleHQoX3V0aWxzLkh0bWxDb250ZXh0KTtcbiAgICBkb2NDb21wb25lbnRzUmVuZGVyZWQuSHRtbCA9IHRydWU7XG4gICAgcmV0dXJuKC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImh0bWxcIiwgT2JqZWN0LmFzc2lnbih7XG4gICAgfSwgcHJvcHMsIHtcbiAgICAgICAgbGFuZzogcHJvcHMubGFuZyB8fCBsb2NhbGUgfHwgdW5kZWZpbmVkLFxuICAgICAgICBhbXA6IGluQW1wTW9kZSA/ICcnIDogdW5kZWZpbmVkLFxuICAgICAgICBcImRhdGEtYW1wZGV2bW9kZVwiOiBpbkFtcE1vZGUgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/ICcnIDogdW5kZWZpbmVkXG4gICAgfSkpKTtcbn1cbmNsYXNzIEhlYWQgZXh0ZW5kcyBfcmVhY3QuQ29tcG9uZW50IHtcbiAgICBnZXRDc3NMaW5rcyhmaWxlcykge1xuICAgICAgICBjb25zdCB7IGFzc2V0UHJlZml4ICwgZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmcgLCBkeW5hbWljSW1wb3J0cyAgfSA9IHRoaXMuY29udGV4dDtcbiAgICAgICAgY29uc3QgY3NzRmlsZXMgPSBmaWxlcy5hbGxGaWxlcy5maWx0ZXIoKGYpPT5mLmVuZHNXaXRoKCcuY3NzJylcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3Qgc2hhcmVkRmlsZXMgPSBuZXcgU2V0KGZpbGVzLnNoYXJlZEZpbGVzKTtcbiAgICAgICAgLy8gVW5tYW5hZ2VkIGZpbGVzIGFyZSBDU1MgZmlsZXMgdGhhdCB3aWxsIGJlIGhhbmRsZWQgZGlyZWN0bHkgYnkgdGhlXG4gICAgICAgIC8vIHdlYnBhY2sgcnVudGltZSAoYG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luYCkuXG4gICAgICAgIGxldCB1bm1hbmdlZEZpbGVzID0gbmV3IFNldChbXSk7XG4gICAgICAgIGxldCBkeW5hbWljQ3NzRmlsZXMgPSBBcnJheS5mcm9tKG5ldyBTZXQoZHluYW1pY0ltcG9ydHMuZmlsdGVyKChmaWxlKT0+ZmlsZS5lbmRzV2l0aCgnLmNzcycpXG4gICAgICAgICkpKTtcbiAgICAgICAgaWYgKGR5bmFtaWNDc3NGaWxlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnN0IGV4aXN0aW5nID0gbmV3IFNldChjc3NGaWxlcyk7XG4gICAgICAgICAgICBkeW5hbWljQ3NzRmlsZXMgPSBkeW5hbWljQ3NzRmlsZXMuZmlsdGVyKChmKT0+IShleGlzdGluZy5oYXMoZikgfHwgc2hhcmVkRmlsZXMuaGFzKGYpKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHVubWFuZ2VkRmlsZXMgPSBuZXcgU2V0KGR5bmFtaWNDc3NGaWxlcyk7XG4gICAgICAgICAgICBjc3NGaWxlcy5wdXNoKC4uLmR5bmFtaWNDc3NGaWxlcyk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGNzc0xpbmtFbGVtZW50cyA9IFtdO1xuICAgICAgICBjc3NGaWxlcy5mb3JFYWNoKChmaWxlKT0+e1xuICAgICAgICAgICAgY29uc3QgaXNTaGFyZWRGaWxlID0gc2hhcmVkRmlsZXMuaGFzKGZpbGUpO1xuICAgICAgICAgICAgaWYgKCFwcm9jZXNzLmVudi5fX05FWFRfT1BUSU1JWkVfQ1NTKSB7XG4gICAgICAgICAgICAgICAgY3NzTGlua0VsZW1lbnRzLnB1c2goLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibGlua1wiLCB7XG4gICAgICAgICAgICAgICAgICAgIGtleTogYCR7ZmlsZX0tcHJlbG9hZGAsXG4gICAgICAgICAgICAgICAgICAgIG5vbmNlOiB0aGlzLnByb3BzLm5vbmNlLFxuICAgICAgICAgICAgICAgICAgICByZWw6IFwicHJlbG9hZFwiLFxuICAgICAgICAgICAgICAgICAgICBocmVmOiBgJHthc3NldFByZWZpeH0vX25leHQvJHtlbmNvZGVVUkkoZmlsZSl9JHtkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZ31gLFxuICAgICAgICAgICAgICAgICAgICBhczogXCJzdHlsZVwiLFxuICAgICAgICAgICAgICAgICAgICBjcm9zc09yaWdpbjogdGhpcy5wcm9wcy5jcm9zc09yaWdpbiB8fCBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOXG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgaXNVbm1hbmFnZWRGaWxlID0gdW5tYW5nZWRGaWxlcy5oYXMoZmlsZSk7XG4gICAgICAgICAgICBjc3NMaW5rRWxlbWVudHMucHVzaCgvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIsIHtcbiAgICAgICAgICAgICAgICBrZXk6IGZpbGUsXG4gICAgICAgICAgICAgICAgbm9uY2U6IHRoaXMucHJvcHMubm9uY2UsXG4gICAgICAgICAgICAgICAgcmVsOiBcInN0eWxlc2hlZXRcIixcbiAgICAgICAgICAgICAgICBocmVmOiBgJHthc3NldFByZWZpeH0vX25leHQvJHtlbmNvZGVVUkkoZmlsZSl9JHtkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZ31gLFxuICAgICAgICAgICAgICAgIGNyb3NzT3JpZ2luOiB0aGlzLnByb3BzLmNyb3NzT3JpZ2luIHx8IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU4sXG4gICAgICAgICAgICAgICAgXCJkYXRhLW4tZ1wiOiBpc1VubWFuYWdlZEZpbGUgPyB1bmRlZmluZWQgOiBpc1NoYXJlZEZpbGUgPyAnJyA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICBcImRhdGEtbi1wXCI6IGlzVW5tYW5hZ2VkRmlsZSA/IHVuZGVmaW5lZCA6IGlzU2hhcmVkRmlsZSA/IHVuZGVmaW5lZCA6ICcnXG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdkZXZlbG9wbWVudCcgJiYgcHJvY2Vzcy5lbnYuX19ORVhUX09QVElNSVpFX0ZPTlRTKSB7XG4gICAgICAgICAgICBjc3NMaW5rRWxlbWVudHMgPSB0aGlzLm1ha2VTdHlsZXNoZWV0SW5lcnQoY3NzTGlua0VsZW1lbnRzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY3NzTGlua0VsZW1lbnRzLmxlbmd0aCA9PT0gMCA/IG51bGwgOiBjc3NMaW5rRWxlbWVudHM7XG4gICAgfVxuICAgIGdldFByZWxvYWREeW5hbWljQ2h1bmtzKCkge1xuICAgICAgICBjb25zdCB7IGR5bmFtaWNJbXBvcnRzICwgYXNzZXRQcmVmaXggLCBkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZyAgfSA9IHRoaXMuY29udGV4dDtcbiAgICAgICAgcmV0dXJuIGR5bmFtaWNJbXBvcnRzLm1hcCgoZmlsZSk9PntcbiAgICAgICAgICAgIGlmICghZmlsZS5lbmRzV2l0aCgnLmpzJykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybigvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIsIHtcbiAgICAgICAgICAgICAgICByZWw6IFwicHJlbG9hZFwiLFxuICAgICAgICAgICAgICAgIGtleTogZmlsZSxcbiAgICAgICAgICAgICAgICBocmVmOiBgJHthc3NldFByZWZpeH0vX25leHQvJHtlbmNvZGVVUkkoZmlsZSl9JHtkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZ31gLFxuICAgICAgICAgICAgICAgIGFzOiBcInNjcmlwdFwiLFxuICAgICAgICAgICAgICAgIG5vbmNlOiB0aGlzLnByb3BzLm5vbmNlLFxuICAgICAgICAgICAgICAgIGNyb3NzT3JpZ2luOiB0aGlzLnByb3BzLmNyb3NzT3JpZ2luIHx8IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU5cbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfSkvLyBGaWx0ZXIgb3V0IG51bGxlZCBzY3JpcHRzXG4gICAgICAgIC5maWx0ZXIoQm9vbGVhbik7XG4gICAgfVxuICAgIGdldFByZWxvYWRNYWluTGlua3MoZmlsZXMpIHtcbiAgICAgICAgY29uc3QgeyBhc3NldFByZWZpeCAsIGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nICwgc2NyaXB0TG9hZGVyICB9ID0gdGhpcy5jb250ZXh0O1xuICAgICAgICBjb25zdCBwcmVsb2FkRmlsZXMgPSBmaWxlcy5hbGxGaWxlcy5maWx0ZXIoKGZpbGUpPT57XG4gICAgICAgICAgICByZXR1cm4gZmlsZS5lbmRzV2l0aCgnLmpzJyk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgLi4uKHNjcmlwdExvYWRlci5iZWZvcmVJbnRlcmFjdGl2ZSB8fCBbXSkubWFwKChmaWxlKT0+LyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibGlua1wiLCB7XG4gICAgICAgICAgICAgICAgICAgIGtleTogZmlsZS5zcmMsXG4gICAgICAgICAgICAgICAgICAgIG5vbmNlOiB0aGlzLnByb3BzLm5vbmNlLFxuICAgICAgICAgICAgICAgICAgICByZWw6IFwicHJlbG9hZFwiLFxuICAgICAgICAgICAgICAgICAgICBocmVmOiBmaWxlLnNyYyxcbiAgICAgICAgICAgICAgICAgICAgYXM6IFwic2NyaXB0XCIsXG4gICAgICAgICAgICAgICAgICAgIGNyb3NzT3JpZ2luOiB0aGlzLnByb3BzLmNyb3NzT3JpZ2luIHx8IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU5cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIC4uLnByZWxvYWRGaWxlcy5tYXAoKGZpbGUpPT4vKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIsIHtcbiAgICAgICAgICAgICAgICAgICAga2V5OiBmaWxlLFxuICAgICAgICAgICAgICAgICAgICBub25jZTogdGhpcy5wcm9wcy5ub25jZSxcbiAgICAgICAgICAgICAgICAgICAgcmVsOiBcInByZWxvYWRcIixcbiAgICAgICAgICAgICAgICAgICAgaHJlZjogYCR7YXNzZXRQcmVmaXh9L19uZXh0LyR7ZW5jb2RlVVJJKGZpbGUpfSR7ZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmd9YCxcbiAgICAgICAgICAgICAgICAgICAgYXM6IFwic2NyaXB0XCIsXG4gICAgICAgICAgICAgICAgICAgIGNyb3NzT3JpZ2luOiB0aGlzLnByb3BzLmNyb3NzT3JpZ2luIHx8IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU5cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKSwgXG4gICAgICAgIF07XG4gICAgfVxuICAgIGdldER5bmFtaWNDaHVua3MoZmlsZXMpIHtcbiAgICAgICAgcmV0dXJuIGdldER5bmFtaWNDaHVua3ModGhpcy5jb250ZXh0LCB0aGlzLnByb3BzLCBmaWxlcyk7XG4gICAgfVxuICAgIGdldFByZU5leHRTY3JpcHRzKCkge1xuICAgICAgICByZXR1cm4gZ2V0UHJlTmV4dFNjcmlwdHModGhpcy5jb250ZXh0LCB0aGlzLnByb3BzKTtcbiAgICB9XG4gICAgZ2V0U2NyaXB0cyhmaWxlcykge1xuICAgICAgICByZXR1cm4gZ2V0U2NyaXB0cyh0aGlzLmNvbnRleHQsIHRoaXMucHJvcHMsIGZpbGVzKTtcbiAgICB9XG4gICAgZ2V0UG9seWZpbGxTY3JpcHRzKCkge1xuICAgICAgICByZXR1cm4gZ2V0UG9seWZpbGxTY3JpcHRzKHRoaXMuY29udGV4dCwgdGhpcy5wcm9wcyk7XG4gICAgfVxuICAgIGhhbmRsZURvY3VtZW50U2NyaXB0TG9hZGVySXRlbXMoY2hpbGRyZW4pIHtcbiAgICAgICAgY29uc3QgeyBzY3JpcHRMb2FkZXIgIH0gPSB0aGlzLmNvbnRleHQ7XG4gICAgICAgIGNvbnN0IHNjcmlwdExvYWRlckl0ZW1zID0gW107XG4gICAgICAgIGNvbnN0IGZpbHRlcmVkQ2hpbGRyZW4gPSBbXTtcbiAgICAgICAgX3JlYWN0LmRlZmF1bHQuQ2hpbGRyZW4uZm9yRWFjaChjaGlsZHJlbiwgKGNoaWxkKT0+e1xuICAgICAgICAgICAgaWYgKGNoaWxkLnR5cGUgPT09IF9zY3JpcHQuZGVmYXVsdCkge1xuICAgICAgICAgICAgICAgIGlmIChjaGlsZC5wcm9wcy5zdHJhdGVneSA9PT0gJ2JlZm9yZUludGVyYWN0aXZlJykge1xuICAgICAgICAgICAgICAgICAgICBzY3JpcHRMb2FkZXIuYmVmb3JlSW50ZXJhY3RpdmUgPSAoc2NyaXB0TG9hZGVyLmJlZm9yZUludGVyYWN0aXZlIHx8IFtdKS5jb25jYXQoW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLmNoaWxkLnByb3BzXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBcbiAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKFtcbiAgICAgICAgICAgICAgICAgICAgJ2xhenlPbmxvYWQnLFxuICAgICAgICAgICAgICAgICAgICAnYWZ0ZXJJbnRlcmFjdGl2ZSdcbiAgICAgICAgICAgICAgICBdLmluY2x1ZGVzKGNoaWxkLnByb3BzLnN0cmF0ZWd5KSkge1xuICAgICAgICAgICAgICAgICAgICBzY3JpcHRMb2FkZXJJdGVtcy5wdXNoKGNoaWxkLnByb3BzKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZpbHRlcmVkQ2hpbGRyZW4ucHVzaChjaGlsZCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNvbnRleHQuX19ORVhUX0RBVEFfXy5zY3JpcHRMb2FkZXIgPSBzY3JpcHRMb2FkZXJJdGVtcztcbiAgICAgICAgcmV0dXJuIGZpbHRlcmVkQ2hpbGRyZW47XG4gICAgfVxuICAgIG1ha2VTdHlsZXNoZWV0SW5lcnQobm9kZSkge1xuICAgICAgICByZXR1cm4gX3JlYWN0LmRlZmF1bHQuQ2hpbGRyZW4ubWFwKG5vZGUsIChjKT0+e1xuICAgICAgICAgICAgaWYgKGMudHlwZSA9PT0gJ2xpbmsnICYmIGMucHJvcHNbJ2hyZWYnXSAmJiBfY29uc3RhbnRzLk9QVElNSVpFRF9GT05UX1BST1ZJREVSUy5zb21lKCh7IHVybCAgfSk9PmMucHJvcHNbJ2hyZWYnXS5zdGFydHNXaXRoKHVybClcbiAgICAgICAgICAgICkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdQcm9wcyA9IHtcbiAgICAgICAgICAgICAgICAgICAgLi4uYy5wcm9wcyB8fCB7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIG5ld1Byb3BzWydkYXRhLWhyZWYnXSA9IG5ld1Byb3BzWydocmVmJ107XG4gICAgICAgICAgICAgICAgbmV3UHJvcHNbJ2hyZWYnXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICByZXR1cm4oLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jbG9uZUVsZW1lbnQoYywgbmV3UHJvcHMpKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYy5wcm9wcyAmJiBjLnByb3BzWydjaGlsZHJlbiddKSB7XG4gICAgICAgICAgICAgICAgYy5wcm9wc1snY2hpbGRyZW4nXSA9IHRoaXMubWFrZVN0eWxlc2hlZXRJbmVydChjLnByb3BzWydjaGlsZHJlbiddKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBjO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IHN0eWxlcyAsIGFtcFBhdGggLCBpbkFtcE1vZGUgLCBoeWJyaWRBbXAgLCBjYW5vbmljYWxCYXNlICwgX19ORVhUX0RBVEFfXyAsIGRhbmdlcm91c0FzUGF0aCAsIGhlYWRUYWdzICwgdW5zdGFibGVfcnVudGltZUpTICwgdW5zdGFibGVfSnNQcmVsb2FkICwgZGlzYWJsZU9wdGltaXplZExvYWRpbmcgLCAgfSA9IHRoaXMuY29udGV4dDtcbiAgICAgICAgY29uc3QgZGlzYWJsZVJ1bnRpbWVKUyA9IHVuc3RhYmxlX3J1bnRpbWVKUyA9PT0gZmFsc2U7XG4gICAgICAgIGNvbnN0IGRpc2FibGVKc1ByZWxvYWQgPSB1bnN0YWJsZV9Kc1ByZWxvYWQgPT09IGZhbHNlIHx8ICFkaXNhYmxlT3B0aW1pemVkTG9hZGluZztcbiAgICAgICAgdGhpcy5jb250ZXh0LmRvY0NvbXBvbmVudHNSZW5kZXJlZC5IZWFkID0gdHJ1ZTtcbiAgICAgICAgbGV0IHsgaGVhZCAgfSA9IHRoaXMuY29udGV4dDtcbiAgICAgICAgbGV0IGNzc1ByZWxvYWRzID0gW107XG4gICAgICAgIGxldCBvdGhlckhlYWRFbGVtZW50cyA9IFtdO1xuICAgICAgICBpZiAoaGVhZCkge1xuICAgICAgICAgICAgaGVhZC5mb3JFYWNoKChjKT0+e1xuICAgICAgICAgICAgICAgIGlmIChjICYmIGMudHlwZSA9PT0gJ2xpbmsnICYmIGMucHJvcHNbJ3JlbCddID09PSAncHJlbG9hZCcgJiYgYy5wcm9wc1snYXMnXSA9PT0gJ3N0eWxlJykge1xuICAgICAgICAgICAgICAgICAgICBjc3NQcmVsb2Fkcy5wdXNoKGMpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGMgJiYgb3RoZXJIZWFkRWxlbWVudHMucHVzaChjKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGhlYWQgPSBjc3NQcmVsb2Fkcy5jb25jYXQob3RoZXJIZWFkRWxlbWVudHMpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBjaGlsZHJlbiA9IF9yZWFjdC5kZWZhdWx0LkNoaWxkcmVuLnRvQXJyYXkodGhpcy5wcm9wcy5jaGlsZHJlbikuZmlsdGVyKEJvb2xlYW4pO1xuICAgICAgICAvLyBzaG93IGEgd2FybmluZyBpZiBIZWFkIGNvbnRhaW5zIDx0aXRsZT4gKG9ubHkgaW4gZGV2ZWxvcG1lbnQpXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBjaGlsZHJlbiA9IF9yZWFjdC5kZWZhdWx0LkNoaWxkcmVuLm1hcChjaGlsZHJlbiwgKGNoaWxkKT0+e1xuICAgICAgICAgICAgICAgIHZhciByZWY7XG4gICAgICAgICAgICAgICAgY29uc3QgaXNSZWFjdEhlbG1ldCA9IGNoaWxkID09PSBudWxsIHx8IGNoaWxkID09PSB2b2lkIDAgPyB2b2lkIDAgOiAocmVmID0gY2hpbGQucHJvcHMpID09PSBudWxsIHx8IHJlZiA9PT0gdm9pZCAwID8gdm9pZCAwIDogcmVmWydkYXRhLXJlYWN0LWhlbG1ldCddO1xuICAgICAgICAgICAgICAgIGlmICghaXNSZWFjdEhlbG1ldCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmVmMTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKChjaGlsZCA9PT0gbnVsbCB8fCBjaGlsZCA9PT0gdm9pZCAwID8gdm9pZCAwIDogY2hpbGQudHlwZSkgPT09ICd0aXRsZScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIldhcm5pbmc6IDx0aXRsZT4gc2hvdWxkIG5vdCBiZSB1c2VkIGluIF9kb2N1bWVudC5qcydzIDxIZWFkPi4gaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvbm8tZG9jdW1lbnQtdGl0bGVcIik7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoKGNoaWxkID09PSBudWxsIHx8IGNoaWxkID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjaGlsZC50eXBlKSA9PT0gJ21ldGEnICYmIChjaGlsZCA9PT0gbnVsbCB8fCBjaGlsZCA9PT0gdm9pZCAwID8gdm9pZCAwIDogKHJlZjEgPSBjaGlsZC5wcm9wcykgPT09IG51bGwgfHwgcmVmMSA9PT0gdm9pZCAwID8gdm9pZCAwIDogcmVmMS5uYW1lKSA9PT0gJ3ZpZXdwb3J0Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwiV2FybmluZzogdmlld3BvcnQgbWV0YSB0YWdzIHNob3VsZCBub3QgYmUgdXNlZCBpbiBfZG9jdW1lbnQuanMncyA8SGVhZD4uIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL25vLWRvY3VtZW50LXZpZXdwb3J0LW1ldGFcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNoaWxkO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5jcm9zc09yaWdpbikgY29uc29sZS53YXJuKCdXYXJuaW5nOiBgSGVhZGAgYXR0cmlidXRlIGBjcm9zc09yaWdpbmAgaXMgZGVwcmVjYXRlZC4gaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvZG9jLWNyb3Nzb3JpZ2luLWRlcHJlY2F0ZWQnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdkZXZlbG9wbWVudCcgJiYgcHJvY2Vzcy5lbnYuX19ORVhUX09QVElNSVpFX0ZPTlRTICYmICFpbkFtcE1vZGUpIHtcbiAgICAgICAgICAgIGNoaWxkcmVuID0gdGhpcy5tYWtlU3R5bGVzaGVldEluZXJ0KGNoaWxkcmVuKTtcbiAgICAgICAgfVxuICAgICAgICBjaGlsZHJlbiA9IHRoaXMuaGFuZGxlRG9jdW1lbnRTY3JpcHRMb2FkZXJJdGVtcyhjaGlsZHJlbik7XG4gICAgICAgIGxldCBoYXNBbXBodG1sUmVsID0gZmFsc2U7XG4gICAgICAgIGxldCBoYXNDYW5vbmljYWxSZWwgPSBmYWxzZTtcbiAgICAgICAgLy8gc2hvdyB3YXJuaW5nIGFuZCByZW1vdmUgY29uZmxpY3RpbmcgYW1wIGhlYWQgdGFnc1xuICAgICAgICBoZWFkID0gX3JlYWN0LmRlZmF1bHQuQ2hpbGRyZW4ubWFwKGhlYWQgfHwgW10sIChjaGlsZCk9PntcbiAgICAgICAgICAgIGlmICghY2hpbGQpIHJldHVybiBjaGlsZDtcbiAgICAgICAgICAgIGNvbnN0IHsgdHlwZSAsIHByb3BzICB9ID0gY2hpbGQ7XG4gICAgICAgICAgICBpZiAoaW5BbXBNb2RlKSB7XG4gICAgICAgICAgICAgICAgbGV0IGJhZFByb3AgPSAnJztcbiAgICAgICAgICAgICAgICBpZiAodHlwZSA9PT0gJ21ldGEnICYmIHByb3BzLm5hbWUgPT09ICd2aWV3cG9ydCcpIHtcbiAgICAgICAgICAgICAgICAgICAgYmFkUHJvcCA9ICduYW1lPVwidmlld3BvcnRcIic7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnbGluaycgJiYgcHJvcHMucmVsID09PSAnY2Fub25pY2FsJykge1xuICAgICAgICAgICAgICAgICAgICBoYXNDYW5vbmljYWxSZWwgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ3NjcmlwdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gb25seSBibG9jayBpZlxuICAgICAgICAgICAgICAgICAgICAvLyAxLiBpdCBoYXMgYSBzcmMgYW5kIGlzbid0IHBvaW50aW5nIHRvIGFtcHByb2plY3QncyBDRE5cbiAgICAgICAgICAgICAgICAgICAgLy8gMi4gaXQgaXMgdXNpbmcgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwgd2l0aG91dCBhIHR5cGUgb3JcbiAgICAgICAgICAgICAgICAgICAgLy8gYSB0eXBlIG9mIHRleHQvamF2YXNjcmlwdFxuICAgICAgICAgICAgICAgICAgICBpZiAocHJvcHMuc3JjICYmIHByb3BzLnNyYy5pbmRleE9mKCdhbXBwcm9qZWN0JykgPCAtMSB8fCBwcm9wcy5kYW5nZXJvdXNseVNldElubmVySFRNTCAmJiAoIXByb3BzLnR5cGUgfHwgcHJvcHMudHlwZSA9PT0gJ3RleHQvamF2YXNjcmlwdCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWRQcm9wID0gJzxzY3JpcHQnO1xuICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXMocHJvcHMpLmZvckVhY2goKHByb3ApPT57XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFkUHJvcCArPSBgICR7cHJvcH09XCIke3Byb3BzW3Byb3BdfVwiYDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFkUHJvcCArPSAnLz4nO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChiYWRQcm9wKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgRm91bmQgY29uZmxpY3RpbmcgYW1wIHRhZyBcIiR7Y2hpbGQudHlwZX1cIiB3aXRoIGNvbmZsaWN0aW5nIHByb3AgJHtiYWRQcm9wfSBpbiAke19fTkVYVF9EQVRBX18ucGFnZX0uIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2NvbmZsaWN0aW5nLWFtcC10YWdgKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBub24tYW1wIG1vZGVcbiAgICAgICAgICAgICAgICBpZiAodHlwZSA9PT0gJ2xpbmsnICYmIHByb3BzLnJlbCA9PT0gJ2FtcGh0bWwnKSB7XG4gICAgICAgICAgICAgICAgICAgIGhhc0FtcGh0bWxSZWwgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBjaGlsZDtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIHRyeSB0byBwYXJzZSBzdHlsZXMgZnJvbSBmcmFnbWVudCBmb3IgYmFja3dhcmRzIGNvbXBhdFxuICAgICAgICBjb25zdCBjdXJTdHlsZXMgPSBBcnJheS5pc0FycmF5KHN0eWxlcykgPyBzdHlsZXMgOiBbXTtcbiAgICAgICAgaWYgKGluQW1wTW9kZSAmJiBzdHlsZXMgJiYgLy8gQHRzLWlnbm9yZSBQcm9wZXJ0eSAncHJvcHMnIGRvZXMgbm90IGV4aXN0IG9uIHR5cGUgUmVhY3RFbGVtZW50XG4gICAgICAgIHN0eWxlcy5wcm9wcyAmJiAvLyBAdHMtaWdub3JlIFByb3BlcnR5ICdwcm9wcycgZG9lcyBub3QgZXhpc3Qgb24gdHlwZSBSZWFjdEVsZW1lbnRcbiAgICAgICAgQXJyYXkuaXNBcnJheShzdHlsZXMucHJvcHMuY2hpbGRyZW4pKSB7XG4gICAgICAgICAgICBjb25zdCBoYXNTdHlsZXMgPSAoZWwpPT57XG4gICAgICAgICAgICAgICAgdmFyIHJlZjIsIHJlZjM7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVsID09PSBudWxsIHx8IGVsID09PSB2b2lkIDAgPyB2b2lkIDAgOiAocmVmMiA9IGVsLnByb3BzKSA9PT0gbnVsbCB8fCByZWYyID09PSB2b2lkIDAgPyB2b2lkIDAgOiAocmVmMyA9IHJlZjIuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwpID09PSBudWxsIHx8IHJlZjMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHJlZjMuX19odG1sO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgUHJvcGVydHkgJ3Byb3BzJyBkb2VzIG5vdCBleGlzdCBvbiB0eXBlIFJlYWN0RWxlbWVudFxuICAgICAgICAgICAgc3R5bGVzLnByb3BzLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKT0+e1xuICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGNoaWxkKSkge1xuICAgICAgICAgICAgICAgICAgICBjaGlsZC5mb3JFYWNoKChlbCk9Pmhhc1N0eWxlcyhlbCkgJiYgY3VyU3R5bGVzLnB1c2goZWwpXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChoYXNTdHlsZXMoY2hpbGQpKSB7XG4gICAgICAgICAgICAgICAgICAgIGN1clN0eWxlcy5wdXNoKGNoaWxkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBmaWxlcyA9IGdldERvY3VtZW50RmlsZXModGhpcy5jb250ZXh0LmJ1aWxkTWFuaWZlc3QsIHRoaXMuY29udGV4dC5fX05FWFRfREFUQV9fLnBhZ2UsIGluQW1wTW9kZSk7XG4gICAgICAgIHZhciBfbm9uY2UsIF9ub25jZTE7XG4gICAgICAgIHJldHVybigvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJoZWFkXCIsIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICB9LCB0aGlzLnByb3BzKSwgdGhpcy5jb250ZXh0LmlzRGV2ZWxvcG1lbnQgJiYgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9yZWFjdC5kZWZhdWx0LkZyYWdtZW50LCBudWxsLCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiLCB7XG4gICAgICAgICAgICBcImRhdGEtbmV4dC1oaWRlLWZvdWNcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwiZGF0YS1hbXBkZXZtb2RlXCI6IGluQW1wTW9kZSA/ICd0cnVlJyA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MOiB7XG4gICAgICAgICAgICAgICAgX19odG1sOiBgYm9keXtkaXNwbGF5Om5vbmV9YFxuICAgICAgICAgICAgfVxuICAgICAgICB9KSwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibm9zY3JpcHRcIiwge1xuICAgICAgICAgICAgXCJkYXRhLW5leHQtaGlkZS1mb3VjXCI6IHRydWUsXG4gICAgICAgICAgICBcImRhdGEtYW1wZGV2bW9kZVwiOiBpbkFtcE1vZGUgPyAndHJ1ZScgOiB1bmRlZmluZWRcbiAgICAgICAgfSwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIiwge1xuICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6IHtcbiAgICAgICAgICAgICAgICBfX2h0bWw6IGBib2R5e2Rpc3BsYXk6YmxvY2t9YFxuICAgICAgICAgICAgfVxuICAgICAgICB9KSkpLCBjaGlsZHJlbiwgcHJvY2Vzcy5lbnYuX19ORVhUX09QVElNSVpFX0ZPTlRTICYmIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcIm1ldGFcIiwge1xuICAgICAgICAgICAgbmFtZTogXCJuZXh0LWZvbnQtcHJlY29ubmVjdFwiXG4gICAgICAgIH0pLCBoZWFkLCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIsIHtcbiAgICAgICAgICAgIG5hbWU6IFwibmV4dC1oZWFkLWNvdW50XCIsXG4gICAgICAgICAgICBjb250ZW50OiBfcmVhY3QuZGVmYXVsdC5DaGlsZHJlbi5jb3VudChoZWFkIHx8IFtdKS50b1N0cmluZygpXG4gICAgICAgIH0pLCBpbkFtcE1vZGUgJiYgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9yZWFjdC5kZWZhdWx0LkZyYWdtZW50LCBudWxsLCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIsIHtcbiAgICAgICAgICAgIG5hbWU6IFwidmlld3BvcnRcIixcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwid2lkdGg9ZGV2aWNlLXdpZHRoLG1pbmltdW0tc2NhbGU9MSxpbml0aWFsLXNjYWxlPTFcIlxuICAgICAgICB9KSwgIWhhc0Nhbm9uaWNhbFJlbCAmJiAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIsIHtcbiAgICAgICAgICAgIHJlbDogXCJjYW5vbmljYWxcIixcbiAgICAgICAgICAgIGhyZWY6IGNhbm9uaWNhbEJhc2UgKyAoMCwgX3V0aWxzMSkuY2xlYW5BbXBQYXRoKGRhbmdlcm91c0FzUGF0aClcbiAgICAgICAgfSksIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImxpbmtcIiwge1xuICAgICAgICAgICAgcmVsOiBcInByZWxvYWRcIixcbiAgICAgICAgICAgIGFzOiBcInNjcmlwdFwiLFxuICAgICAgICAgICAgaHJlZjogXCJodHRwczovL2Nkbi5hbXBwcm9qZWN0Lm9yZy92MC5qc1wiXG4gICAgICAgIH0pLCBzdHlsZXMgJiYgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIiwge1xuICAgICAgICAgICAgXCJhbXAtY3VzdG9tXCI6IFwiXCIsXG4gICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTDoge1xuICAgICAgICAgICAgICAgIF9faHRtbDogY3VyU3R5bGVzLm1hcCgoc3R5bGUpPT5zdHlsZS5wcm9wcy5kYW5nZXJvdXNseVNldElubmVySFRNTC5fX2h0bWxcbiAgICAgICAgICAgICAgICApLmpvaW4oJycpLnJlcGxhY2UoL1xcL1xcKiMgc291cmNlTWFwcGluZ1VSTD0uKlxcKlxcLy9nLCAnJykucmVwbGFjZSgvXFwvXFwqQCBzb3VyY2VVUkw9Lio/XFwqXFwvL2csICcnKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KSwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIiwge1xuICAgICAgICAgICAgXCJhbXAtYm9pbGVycGxhdGVcIjogXCJcIixcbiAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MOiB7XG4gICAgICAgICAgICAgICAgX19odG1sOiBgYm9keXstd2Via2l0LWFuaW1hdGlvbjotYW1wLXN0YXJ0IDhzIHN0ZXBzKDEsZW5kKSAwcyAxIG5vcm1hbCBib3RoOy1tb3otYW5pbWF0aW9uOi1hbXAtc3RhcnQgOHMgc3RlcHMoMSxlbmQpIDBzIDEgbm9ybWFsIGJvdGg7LW1zLWFuaW1hdGlvbjotYW1wLXN0YXJ0IDhzIHN0ZXBzKDEsZW5kKSAwcyAxIG5vcm1hbCBib3RoO2FuaW1hdGlvbjotYW1wLXN0YXJ0IDhzIHN0ZXBzKDEsZW5kKSAwcyAxIG5vcm1hbCBib3RofUAtd2Via2l0LWtleWZyYW1lcyAtYW1wLXN0YXJ0e2Zyb217dmlzaWJpbGl0eTpoaWRkZW59dG97dmlzaWJpbGl0eTp2aXNpYmxlfX1ALW1vei1rZXlmcmFtZXMgLWFtcC1zdGFydHtmcm9te3Zpc2liaWxpdHk6aGlkZGVufXRve3Zpc2liaWxpdHk6dmlzaWJsZX19QC1tcy1rZXlmcmFtZXMgLWFtcC1zdGFydHtmcm9te3Zpc2liaWxpdHk6aGlkZGVufXRve3Zpc2liaWxpdHk6dmlzaWJsZX19QC1vLWtleWZyYW1lcyAtYW1wLXN0YXJ0e2Zyb217dmlzaWJpbGl0eTpoaWRkZW59dG97dmlzaWJpbGl0eTp2aXNpYmxlfX1Aa2V5ZnJhbWVzIC1hbXAtc3RhcnR7ZnJvbXt2aXNpYmlsaXR5OmhpZGRlbn10b3t2aXNpYmlsaXR5OnZpc2libGV9fWBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSksIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcIm5vc2NyaXB0XCIsIG51bGwsIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIsIHtcbiAgICAgICAgICAgIFwiYW1wLWJvaWxlcnBsYXRlXCI6IFwiXCIsXG4gICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTDoge1xuICAgICAgICAgICAgICAgIF9faHRtbDogYGJvZHl7LXdlYmtpdC1hbmltYXRpb246bm9uZTstbW96LWFuaW1hdGlvbjpub25lOy1tcy1hbmltYXRpb246bm9uZTthbmltYXRpb246bm9uZX1gXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKSwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIsIHtcbiAgICAgICAgICAgIGFzeW5jOiB0cnVlLFxuICAgICAgICAgICAgc3JjOiBcImh0dHBzOi8vY2RuLmFtcHByb2plY3Qub3JnL3YwLmpzXCJcbiAgICAgICAgfSkpLCAhaW5BbXBNb2RlICYmIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfcmVhY3QuZGVmYXVsdC5GcmFnbWVudCwgbnVsbCwgIWhhc0FtcGh0bWxSZWwgJiYgaHlicmlkQW1wICYmIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImxpbmtcIiwge1xuICAgICAgICAgICAgcmVsOiBcImFtcGh0bWxcIixcbiAgICAgICAgICAgIGhyZWY6IGNhbm9uaWNhbEJhc2UgKyBnZXRBbXBQYXRoKGFtcFBhdGgsIGRhbmdlcm91c0FzUGF0aClcbiAgICAgICAgfSksICFwcm9jZXNzLmVudi5fX05FWFRfT1BUSU1JWkVfQ1NTICYmIHRoaXMuZ2V0Q3NzTGlua3MoZmlsZXMpLCAhcHJvY2Vzcy5lbnYuX19ORVhUX09QVElNSVpFX0NTUyAmJiAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJub3NjcmlwdFwiLCB7XG4gICAgICAgICAgICBcImRhdGEtbi1jc3NcIjogKF9ub25jZSA9IHRoaXMucHJvcHMubm9uY2UpICE9PSBudWxsICYmIF9ub25jZSAhPT0gdm9pZCAwID8gX25vbmNlIDogJydcbiAgICAgICAgfSksIHByb2Nlc3MuZW52Ll9fTkVYVF9PUFRJTUlaRV9JTUFHRVMgJiYgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLCB7XG4gICAgICAgICAgICBuYW1lOiBcIm5leHQtaW1hZ2UtcHJlbG9hZFwiXG4gICAgICAgIH0pLCAhZGlzYWJsZVJ1bnRpbWVKUyAmJiAhZGlzYWJsZUpzUHJlbG9hZCAmJiB0aGlzLmdldFByZWxvYWREeW5hbWljQ2h1bmtzKCksICFkaXNhYmxlUnVudGltZUpTICYmICFkaXNhYmxlSnNQcmVsb2FkICYmIHRoaXMuZ2V0UHJlbG9hZE1haW5MaW5rcyhmaWxlcyksICFkaXNhYmxlT3B0aW1pemVkTG9hZGluZyAmJiAhZGlzYWJsZVJ1bnRpbWVKUyAmJiB0aGlzLmdldFBvbHlmaWxsU2NyaXB0cygpLCAhZGlzYWJsZU9wdGltaXplZExvYWRpbmcgJiYgIWRpc2FibGVSdW50aW1lSlMgJiYgdGhpcy5nZXRQcmVOZXh0U2NyaXB0cygpLCAhZGlzYWJsZU9wdGltaXplZExvYWRpbmcgJiYgIWRpc2FibGVSdW50aW1lSlMgJiYgdGhpcy5nZXREeW5hbWljQ2h1bmtzKGZpbGVzKSwgIWRpc2FibGVPcHRpbWl6ZWRMb2FkaW5nICYmICFkaXNhYmxlUnVudGltZUpTICYmIHRoaXMuZ2V0U2NyaXB0cyhmaWxlcyksIHByb2Nlc3MuZW52Ll9fTkVYVF9PUFRJTUlaRV9DU1MgJiYgdGhpcy5nZXRDc3NMaW5rcyhmaWxlcyksIHByb2Nlc3MuZW52Ll9fTkVYVF9PUFRJTUlaRV9DU1MgJiYgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibm9zY3JpcHRcIiwge1xuICAgICAgICAgICAgXCJkYXRhLW4tY3NzXCI6IChfbm9uY2UxID0gdGhpcy5wcm9wcy5ub25jZSkgIT09IG51bGwgJiYgX25vbmNlMSAhPT0gdm9pZCAwID8gX25vbmNlMSA6ICcnXG4gICAgICAgIH0pLCB0aGlzLmNvbnRleHQuaXNEZXZlbG9wbWVudCAmJiAvLyB0aGlzIGVsZW1lbnQgaXMgdXNlZCB0byBtb3VudCBkZXZlbG9wbWVudCBzdHlsZXMgc28gdGhlXG4gICAgICAgIC8vIG9yZGVyaW5nIG1hdGNoZXMgcHJvZHVjdGlvblxuICAgICAgICAvLyAoYnkgZGVmYXVsdCwgc3R5bGUtbG9hZGVyIGluamVjdHMgYXQgdGhlIGJvdHRvbSBvZiA8aGVhZCAvPilcbiAgICAgICAgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibm9zY3JpcHRcIiwge1xuICAgICAgICAgICAgaWQ6IFwiX19uZXh0X2Nzc19fRE9fTk9UX1VTRV9fXCJcbiAgICAgICAgfSksIHN0eWxlcyB8fCBudWxsKSwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9yZWFjdC5kZWZhdWx0LkZyYWdtZW50LCB7XG4gICAgICAgIH0sIC4uLmhlYWRUYWdzIHx8IFtdKSkpO1xuICAgIH1cbn1cbmV4cG9ydHMuSGVhZCA9IEhlYWQ7XG5IZWFkLmNvbnRleHRUeXBlID0gX3V0aWxzLkh0bWxDb250ZXh0O1xuZnVuY3Rpb24gTWFpbigpIHtcbiAgICBjb25zdCB7IGluQW1wTW9kZSAsIGRvY0NvbXBvbmVudHNSZW5kZXJlZCAgfSA9ICgwLCBfcmVhY3QpLnVzZUNvbnRleHQoX3V0aWxzLkh0bWxDb250ZXh0KTtcbiAgICBkb2NDb21wb25lbnRzUmVuZGVyZWQuTWFpbiA9IHRydWU7XG4gICAgaWYgKGluQW1wTW9kZSkgcmV0dXJuKC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfcmVhY3QuZGVmYXVsdC5GcmFnbWVudCwgbnVsbCwgX2NvbnN0YW50cy5CT0RZX1JFTkRFUl9UQVJHRVQpKTtcbiAgICByZXR1cm4oLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgaWQ6IFwiX19uZXh0XCJcbiAgICB9LCBfY29uc3RhbnRzLkJPRFlfUkVOREVSX1RBUkdFVCkpO1xufVxuY2xhc3MgTmV4dFNjcmlwdCBleHRlbmRzIF9yZWFjdC5Db21wb25lbnQge1xuICAgIGdldER5bmFtaWNDaHVua3MoZmlsZXMpIHtcbiAgICAgICAgcmV0dXJuIGdldER5bmFtaWNDaHVua3ModGhpcy5jb250ZXh0LCB0aGlzLnByb3BzLCBmaWxlcyk7XG4gICAgfVxuICAgIGdldFByZU5leHRTY3JpcHRzKCkge1xuICAgICAgICByZXR1cm4gZ2V0UHJlTmV4dFNjcmlwdHModGhpcy5jb250ZXh0LCB0aGlzLnByb3BzKTtcbiAgICB9XG4gICAgZ2V0U2NyaXB0cyhmaWxlcykge1xuICAgICAgICByZXR1cm4gZ2V0U2NyaXB0cyh0aGlzLmNvbnRleHQsIHRoaXMucHJvcHMsIGZpbGVzKTtcbiAgICB9XG4gICAgZ2V0UG9seWZpbGxTY3JpcHRzKCkge1xuICAgICAgICByZXR1cm4gZ2V0UG9seWZpbGxTY3JpcHRzKHRoaXMuY29udGV4dCwgdGhpcy5wcm9wcyk7XG4gICAgfVxuICAgIHN0YXRpYyBnZXRJbmxpbmVTY3JpcHRTb3VyY2UoY29udGV4dCkge1xuICAgICAgICBjb25zdCB7IF9fTkVYVF9EQVRBX18gIH0gPSBjb250ZXh0O1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IEpTT04uc3RyaW5naWZ5KF9fTkVYVF9EQVRBX18pO1xuICAgICAgICAgICAgcmV0dXJuICgwLCBfaHRtbGVzY2FwZSkuaHRtbEVzY2FwZUpzb25TdHJpbmcoZGF0YSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgaWYgKGVyci5tZXNzYWdlLmluZGV4T2YoJ2NpcmN1bGFyIHN0cnVjdHVyZScpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDaXJjdWxhciBzdHJ1Y3R1cmUgaW4gXCJnZXRJbml0aWFsUHJvcHNcIiByZXN1bHQgb2YgcGFnZSBcIiR7X19ORVhUX0RBVEFfXy5wYWdlfVwiLiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9jaXJjdWxhci1zdHJ1Y3R1cmVgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgYXNzZXRQcmVmaXggLCBpbkFtcE1vZGUgLCBidWlsZE1hbmlmZXN0ICwgdW5zdGFibGVfcnVudGltZUpTICwgZG9jQ29tcG9uZW50c1JlbmRlcmVkICwgZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmcgLCBkaXNhYmxlT3B0aW1pemVkTG9hZGluZyAsICB9ID0gdGhpcy5jb250ZXh0O1xuICAgICAgICBjb25zdCBkaXNhYmxlUnVudGltZUpTID0gdW5zdGFibGVfcnVudGltZUpTID09PSBmYWxzZTtcbiAgICAgICAgZG9jQ29tcG9uZW50c1JlbmRlcmVkLk5leHRTY3JpcHQgPSB0cnVlO1xuICAgICAgICBpZiAoaW5BbXBNb2RlKSB7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgYW1wRGV2RmlsZXMgPSBbXG4gICAgICAgICAgICAgICAgLi4uYnVpbGRNYW5pZmVzdC5kZXZGaWxlcyxcbiAgICAgICAgICAgICAgICAuLi5idWlsZE1hbmlmZXN0LnBvbHlmaWxsRmlsZXMsXG4gICAgICAgICAgICAgICAgLi4uYnVpbGRNYW5pZmVzdC5hbXBEZXZGaWxlcywgXG4gICAgICAgICAgICBdO1xuICAgICAgICAgICAgcmV0dXJuKC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfcmVhY3QuZGVmYXVsdC5GcmFnbWVudCwgbnVsbCwgZGlzYWJsZVJ1bnRpbWVKUyA/IG51bGwgOiAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIiwge1xuICAgICAgICAgICAgICAgIGlkOiBcIl9fTkVYVF9EQVRBX19cIixcbiAgICAgICAgICAgICAgICB0eXBlOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgICAgICBub25jZTogdGhpcy5wcm9wcy5ub25jZSxcbiAgICAgICAgICAgICAgICBjcm9zc09yaWdpbjogdGhpcy5wcm9wcy5jcm9zc09yaWdpbiB8fCBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOLFxuICAgICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MOiB7XG4gICAgICAgICAgICAgICAgICAgIF9faHRtbDogTmV4dFNjcmlwdC5nZXRJbmxpbmVTY3JpcHRTb3VyY2UodGhpcy5jb250ZXh0KVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCJkYXRhLWFtcGRldm1vZGVcIjogdHJ1ZVxuICAgICAgICAgICAgfSksIGFtcERldkZpbGVzLm1hcCgoZmlsZSk9Pi8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGtleTogZmlsZSxcbiAgICAgICAgICAgICAgICAgICAgc3JjOiBgJHthc3NldFByZWZpeH0vX25leHQvJHtmaWxlfSR7ZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmd9YCxcbiAgICAgICAgICAgICAgICAgICAgbm9uY2U6IHRoaXMucHJvcHMubm9uY2UsXG4gICAgICAgICAgICAgICAgICAgIGNyb3NzT3JpZ2luOiB0aGlzLnByb3BzLmNyb3NzT3JpZ2luIHx8IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU4sXG4gICAgICAgICAgICAgICAgICAgIFwiZGF0YS1hbXBkZXZtb2RlXCI6IHRydWVcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKSkpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5jcm9zc09yaWdpbikgY29uc29sZS53YXJuKCdXYXJuaW5nOiBgTmV4dFNjcmlwdGAgYXR0cmlidXRlIGBjcm9zc09yaWdpbmAgaXMgZGVwcmVjYXRlZC4gaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvZG9jLWNyb3Nzb3JpZ2luLWRlcHJlY2F0ZWQnKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBmaWxlcyA9IGdldERvY3VtZW50RmlsZXModGhpcy5jb250ZXh0LmJ1aWxkTWFuaWZlc3QsIHRoaXMuY29udGV4dC5fX05FWFRfREFUQV9fLnBhZ2UsIGluQW1wTW9kZSk7XG4gICAgICAgIHJldHVybigvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX3JlYWN0LmRlZmF1bHQuRnJhZ21lbnQsIG51bGwsICFkaXNhYmxlUnVudGltZUpTICYmIGJ1aWxkTWFuaWZlc3QuZGV2RmlsZXMgPyBidWlsZE1hbmlmZXN0LmRldkZpbGVzLm1hcCgoZmlsZSk9Pi8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiLCB7XG4gICAgICAgICAgICAgICAga2V5OiBmaWxlLFxuICAgICAgICAgICAgICAgIHNyYzogYCR7YXNzZXRQcmVmaXh9L19uZXh0LyR7ZW5jb2RlVVJJKGZpbGUpfSR7ZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmd9YCxcbiAgICAgICAgICAgICAgICBub25jZTogdGhpcy5wcm9wcy5ub25jZSxcbiAgICAgICAgICAgICAgICBjcm9zc09yaWdpbjogdGhpcy5wcm9wcy5jcm9zc09yaWdpbiB8fCBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOXG4gICAgICAgICAgICB9KVxuICAgICAgICApIDogbnVsbCwgZGlzYWJsZVJ1bnRpbWVKUyA/IG51bGwgOiAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIiwge1xuICAgICAgICAgICAgaWQ6IFwiX19ORVhUX0RBVEFfX1wiLFxuICAgICAgICAgICAgdHlwZTogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICBub25jZTogdGhpcy5wcm9wcy5ub25jZSxcbiAgICAgICAgICAgIGNyb3NzT3JpZ2luOiB0aGlzLnByb3BzLmNyb3NzT3JpZ2luIHx8IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU4sXG4gICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTDoge1xuICAgICAgICAgICAgICAgIF9faHRtbDogTmV4dFNjcmlwdC5nZXRJbmxpbmVTY3JpcHRTb3VyY2UodGhpcy5jb250ZXh0KVxuICAgICAgICAgICAgfVxuICAgICAgICB9KSwgZGlzYWJsZU9wdGltaXplZExvYWRpbmcgJiYgIWRpc2FibGVSdW50aW1lSlMgJiYgdGhpcy5nZXRQb2x5ZmlsbFNjcmlwdHMoKSwgZGlzYWJsZU9wdGltaXplZExvYWRpbmcgJiYgIWRpc2FibGVSdW50aW1lSlMgJiYgdGhpcy5nZXRQcmVOZXh0U2NyaXB0cygpLCBkaXNhYmxlT3B0aW1pemVkTG9hZGluZyAmJiAhZGlzYWJsZVJ1bnRpbWVKUyAmJiB0aGlzLmdldER5bmFtaWNDaHVua3MoZmlsZXMpLCBkaXNhYmxlT3B0aW1pemVkTG9hZGluZyAmJiAhZGlzYWJsZVJ1bnRpbWVKUyAmJiB0aGlzLmdldFNjcmlwdHMoZmlsZXMpKSk7XG4gICAgfVxufVxuZXhwb3J0cy5OZXh0U2NyaXB0ID0gTmV4dFNjcmlwdDtcbk5leHRTY3JpcHQuY29udGV4dFR5cGUgPSBfdXRpbHMuSHRtbENvbnRleHQ7XG5OZXh0U2NyaXB0LnNhZmFyaU5vbW9kdWxlRml4ID0gJyFmdW5jdGlvbigpe3ZhciBlPWRvY3VtZW50LHQ9ZS5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO2lmKCEoXCJub01vZHVsZVwiaW4gdCkmJlwib25iZWZvcmVsb2FkXCJpbiB0KXt2YXIgbj0hMTtlLmFkZEV2ZW50TGlzdGVuZXIoXCJiZWZvcmVsb2FkXCIsZnVuY3Rpb24oZSl7aWYoZS50YXJnZXQ9PT10KW49ITA7ZWxzZSBpZighZS50YXJnZXQuaGFzQXR0cmlidXRlKFwibm9tb2R1bGVcIil8fCFuKXJldHVybjtlLnByZXZlbnREZWZhdWx0KCl9LCEwKSx0LnR5cGU9XCJtb2R1bGVcIix0LnNyYz1cIi5cIixlLmhlYWQuYXBwZW5kQ2hpbGQodCksdC5yZW1vdmUoKX19KCk7JztcbmZ1bmN0aW9uIGdldEFtcFBhdGgoYW1wUGF0aCwgYXNQYXRoKSB7XG4gICAgcmV0dXJuIGFtcFBhdGggfHwgYCR7YXNQYXRofSR7YXNQYXRoLmluY2x1ZGVzKCc/JykgPyAnJicgOiAnPyd9YW1wPTFgO1xufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1fZG9jdW1lbnQuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG4vKlxuQmFzZWQgb24gR2xhbW9yJ3Mgc2hlZXRcbmh0dHBzOi8vZ2l0aHViLmNvbS90aHJlZXBvaW50b25lL2dsYW1vci9ibG9iLzY2N2I0ODBkMzFiMzcyMWE5MDUwMjFiMjZlMTI5MGNlOTJjYTI4Nzkvc3JjL3NoZWV0LmpzXG4qL1xudmFyIGlzUHJvZCA9IHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJyAmJiBwcm9jZXNzLmVudiAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nO1xuXG52YXIgaXNTdHJpbmcgPSBmdW5jdGlvbiBpc1N0cmluZyhvKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykgPT09ICdbb2JqZWN0IFN0cmluZ10nO1xufTtcblxudmFyIFN0eWxlU2hlZXQgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBTdHlsZVNoZWV0KF90ZW1wKSB7XG4gICAgdmFyIF9yZWYgPSBfdGVtcCA9PT0gdm9pZCAwID8ge30gOiBfdGVtcCxcbiAgICAgICAgX3JlZiRuYW1lID0gX3JlZi5uYW1lLFxuICAgICAgICBuYW1lID0gX3JlZiRuYW1lID09PSB2b2lkIDAgPyAnc3R5bGVzaGVldCcgOiBfcmVmJG5hbWUsXG4gICAgICAgIF9yZWYkb3B0aW1pemVGb3JTcGVlZCA9IF9yZWYub3B0aW1pemVGb3JTcGVlZCxcbiAgICAgICAgb3B0aW1pemVGb3JTcGVlZCA9IF9yZWYkb3B0aW1pemVGb3JTcGVlZCA9PT0gdm9pZCAwID8gaXNQcm9kIDogX3JlZiRvcHRpbWl6ZUZvclNwZWVkLFxuICAgICAgICBfcmVmJGlzQnJvd3NlciA9IF9yZWYuaXNCcm93c2VyLFxuICAgICAgICBpc0Jyb3dzZXIgPSBfcmVmJGlzQnJvd3NlciA9PT0gdm9pZCAwID8gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgOiBfcmVmJGlzQnJvd3NlcjtcblxuICAgIGludmFyaWFudChpc1N0cmluZyhuYW1lKSwgJ2BuYW1lYCBtdXN0IGJlIGEgc3RyaW5nJyk7XG4gICAgdGhpcy5fbmFtZSA9IG5hbWU7XG4gICAgdGhpcy5fZGVsZXRlZFJ1bGVQbGFjZWhvbGRlciA9IFwiI1wiICsgbmFtZSArIFwiLWRlbGV0ZWQtcnVsZV9fX197fVwiO1xuICAgIGludmFyaWFudCh0eXBlb2Ygb3B0aW1pemVGb3JTcGVlZCA9PT0gJ2Jvb2xlYW4nLCAnYG9wdGltaXplRm9yU3BlZWRgIG11c3QgYmUgYSBib29sZWFuJyk7XG4gICAgdGhpcy5fb3B0aW1pemVGb3JTcGVlZCA9IG9wdGltaXplRm9yU3BlZWQ7XG4gICAgdGhpcy5faXNCcm93c2VyID0gaXNCcm93c2VyO1xuICAgIHRoaXMuX3NlcnZlclNoZWV0ID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuX3RhZ3MgPSBbXTtcbiAgICB0aGlzLl9pbmplY3RlZCA9IGZhbHNlO1xuICAgIHRoaXMuX3J1bGVzQ291bnQgPSAwO1xuICAgIHZhciBub2RlID0gdGhpcy5faXNCcm93c2VyICYmIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21ldGFbcHJvcGVydHk9XCJjc3Atbm9uY2VcIl0nKTtcbiAgICB0aGlzLl9ub25jZSA9IG5vZGUgPyBub2RlLmdldEF0dHJpYnV0ZSgnY29udGVudCcpIDogbnVsbDtcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBTdHlsZVNoZWV0LnByb3RvdHlwZTtcblxuICBfcHJvdG8uc2V0T3B0aW1pemVGb3JTcGVlZCA9IGZ1bmN0aW9uIHNldE9wdGltaXplRm9yU3BlZWQoYm9vbCkge1xuICAgIGludmFyaWFudCh0eXBlb2YgYm9vbCA9PT0gJ2Jvb2xlYW4nLCAnYHNldE9wdGltaXplRm9yU3BlZWRgIGFjY2VwdHMgYSBib29sZWFuJyk7XG4gICAgaW52YXJpYW50KHRoaXMuX3J1bGVzQ291bnQgPT09IDAsICdvcHRpbWl6ZUZvclNwZWVkIGNhbm5vdCBiZSB3aGVuIHJ1bGVzIGhhdmUgYWxyZWFkeSBiZWVuIGluc2VydGVkJyk7XG4gICAgdGhpcy5mbHVzaCgpO1xuICAgIHRoaXMuX29wdGltaXplRm9yU3BlZWQgPSBib29sO1xuICAgIHRoaXMuaW5qZWN0KCk7XG4gIH07XG5cbiAgX3Byb3RvLmlzT3B0aW1pemVGb3JTcGVlZCA9IGZ1bmN0aW9uIGlzT3B0aW1pemVGb3JTcGVlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fb3B0aW1pemVGb3JTcGVlZDtcbiAgfTtcblxuICBfcHJvdG8uaW5qZWN0ID0gZnVuY3Rpb24gaW5qZWN0KCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICBpbnZhcmlhbnQoIXRoaXMuX2luamVjdGVkLCAnc2hlZXQgYWxyZWFkeSBpbmplY3RlZCcpO1xuICAgIHRoaXMuX2luamVjdGVkID0gdHJ1ZTtcblxuICAgIGlmICh0aGlzLl9pc0Jyb3dzZXIgJiYgdGhpcy5fb3B0aW1pemVGb3JTcGVlZCkge1xuICAgICAgdGhpcy5fdGFnc1swXSA9IHRoaXMubWFrZVN0eWxlVGFnKHRoaXMuX25hbWUpO1xuICAgICAgdGhpcy5fb3B0aW1pemVGb3JTcGVlZCA9ICdpbnNlcnRSdWxlJyBpbiB0aGlzLmdldFNoZWV0KCk7XG5cbiAgICAgIGlmICghdGhpcy5fb3B0aW1pemVGb3JTcGVlZCkge1xuICAgICAgICBpZiAoIWlzUHJvZCkge1xuICAgICAgICAgIGNvbnNvbGUud2FybignU3R5bGVTaGVldDogb3B0aW1pemVGb3JTcGVlZCBtb2RlIG5vdCBzdXBwb3J0ZWQgZmFsbGluZyBiYWNrIHRvIHN0YW5kYXJkIG1vZGUuJyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmZsdXNoKCk7XG4gICAgICAgIHRoaXMuX2luamVjdGVkID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX3NlcnZlclNoZWV0ID0ge1xuICAgICAgY3NzUnVsZXM6IFtdLFxuICAgICAgaW5zZXJ0UnVsZTogZnVuY3Rpb24gaW5zZXJ0UnVsZShydWxlLCBpbmRleCkge1xuICAgICAgICBpZiAodHlwZW9mIGluZGV4ID09PSAnbnVtYmVyJykge1xuICAgICAgICAgIF90aGlzLl9zZXJ2ZXJTaGVldC5jc3NSdWxlc1tpbmRleF0gPSB7XG4gICAgICAgICAgICBjc3NUZXh0OiBydWxlXG4gICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBfdGhpcy5fc2VydmVyU2hlZXQuY3NzUnVsZXMucHVzaCh7XG4gICAgICAgICAgICBjc3NUZXh0OiBydWxlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaW5kZXg7XG4gICAgICB9LFxuICAgICAgZGVsZXRlUnVsZTogZnVuY3Rpb24gZGVsZXRlUnVsZShpbmRleCkge1xuICAgICAgICBfdGhpcy5fc2VydmVyU2hlZXQuY3NzUnVsZXNbaW5kZXhdID0gbnVsbDtcbiAgICAgIH1cbiAgICB9O1xuICB9O1xuXG4gIF9wcm90by5nZXRTaGVldEZvclRhZyA9IGZ1bmN0aW9uIGdldFNoZWV0Rm9yVGFnKHRhZykge1xuICAgIGlmICh0YWcuc2hlZXQpIHtcbiAgICAgIHJldHVybiB0YWcuc2hlZXQ7XG4gICAgfSAvLyB0aGlzIHdlaXJkbmVzcyBicm91Z2h0IHRvIHlvdSBieSBmaXJlZm94XG5cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZG9jdW1lbnQuc3R5bGVTaGVldHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChkb2N1bWVudC5zdHlsZVNoZWV0c1tpXS5vd25lck5vZGUgPT09IHRhZykge1xuICAgICAgICByZXR1cm4gZG9jdW1lbnQuc3R5bGVTaGVldHNbaV07XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5nZXRTaGVldCA9IGZ1bmN0aW9uIGdldFNoZWV0KCkge1xuICAgIHJldHVybiB0aGlzLmdldFNoZWV0Rm9yVGFnKHRoaXMuX3RhZ3NbdGhpcy5fdGFncy5sZW5ndGggLSAxXSk7XG4gIH07XG5cbiAgX3Byb3RvLmluc2VydFJ1bGUgPSBmdW5jdGlvbiBpbnNlcnRSdWxlKHJ1bGUsIGluZGV4KSB7XG4gICAgaW52YXJpYW50KGlzU3RyaW5nKHJ1bGUpLCAnYGluc2VydFJ1bGVgIGFjY2VwdHMgb25seSBzdHJpbmdzJyk7XG5cbiAgICBpZiAoIXRoaXMuX2lzQnJvd3Nlcikge1xuICAgICAgaWYgKHR5cGVvZiBpbmRleCAhPT0gJ251bWJlcicpIHtcbiAgICAgICAgaW5kZXggPSB0aGlzLl9zZXJ2ZXJTaGVldC5jc3NSdWxlcy5sZW5ndGg7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX3NlcnZlclNoZWV0Lmluc2VydFJ1bGUocnVsZSwgaW5kZXgpO1xuXG4gICAgICByZXR1cm4gdGhpcy5fcnVsZXNDb3VudCsrO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9vcHRpbWl6ZUZvclNwZWVkKSB7XG4gICAgICB2YXIgc2hlZXQgPSB0aGlzLmdldFNoZWV0KCk7XG5cbiAgICAgIGlmICh0eXBlb2YgaW5kZXggIT09ICdudW1iZXInKSB7XG4gICAgICAgIGluZGV4ID0gc2hlZXQuY3NzUnVsZXMubGVuZ3RoO1xuICAgICAgfSAvLyB0aGlzIHdlaXJkbmVzcyBmb3IgcGVyZiwgYW5kIGNocm9tZSdzIHdlaXJkIGJ1Z1xuICAgICAgLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMjAwMDc5OTIvY2hyb21lLXN1ZGRlbmx5LXN0b3BwZWQtYWNjZXB0aW5nLWluc2VydHJ1bGVcblxuXG4gICAgICB0cnkge1xuICAgICAgICBzaGVldC5pbnNlcnRSdWxlKHJ1bGUsIGluZGV4KTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGlmICghaXNQcm9kKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFwiU3R5bGVTaGVldDogaWxsZWdhbCBydWxlOiBcXG5cXG5cIiArIHJ1bGUgKyBcIlxcblxcblNlZSBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3EvMjAwMDc5OTIgZm9yIG1vcmUgaW5mb1wiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAtMTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGluc2VydGlvblBvaW50ID0gdGhpcy5fdGFnc1tpbmRleF07XG5cbiAgICAgIHRoaXMuX3RhZ3MucHVzaCh0aGlzLm1ha2VTdHlsZVRhZyh0aGlzLl9uYW1lLCBydWxlLCBpbnNlcnRpb25Qb2ludCkpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9ydWxlc0NvdW50Kys7XG4gIH07XG5cbiAgX3Byb3RvLnJlcGxhY2VSdWxlID0gZnVuY3Rpb24gcmVwbGFjZVJ1bGUoaW5kZXgsIHJ1bGUpIHtcbiAgICBpZiAodGhpcy5fb3B0aW1pemVGb3JTcGVlZCB8fCAhdGhpcy5faXNCcm93c2VyKSB7XG4gICAgICB2YXIgc2hlZXQgPSB0aGlzLl9pc0Jyb3dzZXIgPyB0aGlzLmdldFNoZWV0KCkgOiB0aGlzLl9zZXJ2ZXJTaGVldDtcblxuICAgICAgaWYgKCFydWxlLnRyaW0oKSkge1xuICAgICAgICBydWxlID0gdGhpcy5fZGVsZXRlZFJ1bGVQbGFjZWhvbGRlcjtcbiAgICAgIH1cblxuICAgICAgaWYgKCFzaGVldC5jc3NSdWxlc1tpbmRleF0pIHtcbiAgICAgICAgLy8gQFRCRCBTaG91bGQgd2UgdGhyb3cgYW4gZXJyb3I/XG4gICAgICAgIHJldHVybiBpbmRleDtcbiAgICAgIH1cblxuICAgICAgc2hlZXQuZGVsZXRlUnVsZShpbmRleCk7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIHNoZWV0Lmluc2VydFJ1bGUocnVsZSwgaW5kZXgpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgaWYgKCFpc1Byb2QpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXCJTdHlsZVNoZWV0OiBpbGxlZ2FsIHJ1bGU6IFxcblxcblwiICsgcnVsZSArIFwiXFxuXFxuU2VlIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcS8yMDAwNzk5MiBmb3IgbW9yZSBpbmZvXCIpO1xuICAgICAgICB9IC8vIEluIG9yZGVyIHRvIHByZXNlcnZlIHRoZSBpbmRpY2VzIHdlIGluc2VydCBhIGRlbGV0ZVJ1bGVQbGFjZWhvbGRlclxuXG5cbiAgICAgICAgc2hlZXQuaW5zZXJ0UnVsZSh0aGlzLl9kZWxldGVkUnVsZVBsYWNlaG9sZGVyLCBpbmRleCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB0YWcgPSB0aGlzLl90YWdzW2luZGV4XTtcbiAgICAgIGludmFyaWFudCh0YWcsIFwib2xkIHJ1bGUgYXQgaW5kZXggYFwiICsgaW5kZXggKyBcImAgbm90IGZvdW5kXCIpO1xuICAgICAgdGFnLnRleHRDb250ZW50ID0gcnVsZTtcbiAgICB9XG5cbiAgICByZXR1cm4gaW5kZXg7XG4gIH07XG5cbiAgX3Byb3RvLmRlbGV0ZVJ1bGUgPSBmdW5jdGlvbiBkZWxldGVSdWxlKGluZGV4KSB7XG4gICAgaWYgKCF0aGlzLl9pc0Jyb3dzZXIpIHtcbiAgICAgIHRoaXMuX3NlcnZlclNoZWV0LmRlbGV0ZVJ1bGUoaW5kZXgpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX29wdGltaXplRm9yU3BlZWQpIHtcbiAgICAgIHRoaXMucmVwbGFjZVJ1bGUoaW5kZXgsICcnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHRhZyA9IHRoaXMuX3RhZ3NbaW5kZXhdO1xuICAgICAgaW52YXJpYW50KHRhZywgXCJydWxlIGF0IGluZGV4IGBcIiArIGluZGV4ICsgXCJgIG5vdCBmb3VuZFwiKTtcbiAgICAgIHRhZy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRhZyk7XG4gICAgICB0aGlzLl90YWdzW2luZGV4XSA9IG51bGw7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5mbHVzaCA9IGZ1bmN0aW9uIGZsdXNoKCkge1xuICAgIHRoaXMuX2luamVjdGVkID0gZmFsc2U7XG4gICAgdGhpcy5fcnVsZXNDb3VudCA9IDA7XG5cbiAgICBpZiAodGhpcy5faXNCcm93c2VyKSB7XG4gICAgICB0aGlzLl90YWdzLmZvckVhY2goZnVuY3Rpb24gKHRhZykge1xuICAgICAgICByZXR1cm4gdGFnICYmIHRhZy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRhZyk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5fdGFncyA9IFtdO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBzaW1wbGVyIG9uIHNlcnZlclxuICAgICAgdGhpcy5fc2VydmVyU2hlZXQuY3NzUnVsZXMgPSBbXTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLmNzc1J1bGVzID0gZnVuY3Rpb24gY3NzUnVsZXMoKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICBpZiAoIXRoaXMuX2lzQnJvd3Nlcikge1xuICAgICAgcmV0dXJuIHRoaXMuX3NlcnZlclNoZWV0LmNzc1J1bGVzO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl90YWdzLnJlZHVjZShmdW5jdGlvbiAocnVsZXMsIHRhZykge1xuICAgICAgaWYgKHRhZykge1xuICAgICAgICBydWxlcyA9IHJ1bGVzLmNvbmNhdChBcnJheS5wcm90b3R5cGUubWFwLmNhbGwoX3RoaXMyLmdldFNoZWV0Rm9yVGFnKHRhZykuY3NzUnVsZXMsIGZ1bmN0aW9uIChydWxlKSB7XG4gICAgICAgICAgcmV0dXJuIHJ1bGUuY3NzVGV4dCA9PT0gX3RoaXMyLl9kZWxldGVkUnVsZVBsYWNlaG9sZGVyID8gbnVsbCA6IHJ1bGU7XG4gICAgICAgIH0pKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJ1bGVzLnB1c2gobnVsbCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBydWxlcztcbiAgICB9LCBbXSk7XG4gIH07XG5cbiAgX3Byb3RvLm1ha2VTdHlsZVRhZyA9IGZ1bmN0aW9uIG1ha2VTdHlsZVRhZyhuYW1lLCBjc3NTdHJpbmcsIHJlbGF0aXZlVG9UYWcpIHtcbiAgICBpZiAoY3NzU3RyaW5nKSB7XG4gICAgICBpbnZhcmlhbnQoaXNTdHJpbmcoY3NzU3RyaW5nKSwgJ21ha2VTdHlsZVRhZyBhY2NlcHMgb25seSBzdHJpbmdzIGFzIHNlY29uZCBwYXJhbWV0ZXInKTtcbiAgICB9XG5cbiAgICB2YXIgdGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICBpZiAodGhpcy5fbm9uY2UpIHRhZy5zZXRBdHRyaWJ1dGUoJ25vbmNlJywgdGhpcy5fbm9uY2UpO1xuICAgIHRhZy50eXBlID0gJ3RleHQvY3NzJztcbiAgICB0YWcuc2V0QXR0cmlidXRlKFwiZGF0YS1cIiArIG5hbWUsICcnKTtcblxuICAgIGlmIChjc3NTdHJpbmcpIHtcbiAgICAgIHRhZy5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3NTdHJpbmcpKTtcbiAgICB9XG5cbiAgICB2YXIgaGVhZCA9IGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXTtcblxuICAgIGlmIChyZWxhdGl2ZVRvVGFnKSB7XG4gICAgICBoZWFkLmluc2VydEJlZm9yZSh0YWcsIHJlbGF0aXZlVG9UYWcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBoZWFkLmFwcGVuZENoaWxkKHRhZyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhZztcbiAgfTtcblxuICBfY3JlYXRlQ2xhc3MoU3R5bGVTaGVldCwgW3tcbiAgICBrZXk6IFwibGVuZ3RoXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcnVsZXNDb3VudDtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gU3R5bGVTaGVldDtcbn0oKTtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBTdHlsZVNoZWV0O1xuXG5mdW5jdGlvbiBpbnZhcmlhbnQoY29uZGl0aW9uLCBtZXNzYWdlKSB7XG4gIGlmICghY29uZGl0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiU3R5bGVTaGVldDogXCIgKyBtZXNzYWdlICsgXCIuXCIpO1xuICB9XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IGZsdXNoVG9SZWFjdDtcbmV4cG9ydHMuZmx1c2hUb0hUTUwgPSBmbHVzaFRvSFRNTDtcblxudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9zdHlsZSA9IHJlcXVpcmUoXCIuL3N0eWxlXCIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxuZnVuY3Rpb24gZmx1c2hUb1JlYWN0KG9wdGlvbnMpIHtcbiAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIHJldHVybiAoMCwgX3N0eWxlLmZsdXNoKSgpLm1hcChmdW5jdGlvbiAoYXJncykge1xuICAgIHZhciBpZCA9IGFyZ3NbMF07XG4gICAgdmFyIGNzcyA9IGFyZ3NbMV07XG4gICAgcmV0dXJuIF9yZWFjdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudCgnc3R5bGUnLCB7XG4gICAgICBpZDogXCJfX1wiICsgaWQsXG4gICAgICAvLyBBdm9pZCB3YXJuaW5ncyB1cG9uIHJlbmRlciB3aXRoIGEga2V5XG4gICAgICBrZXk6IFwiX19cIiArIGlkLFxuICAgICAgbm9uY2U6IG9wdGlvbnMubm9uY2UgPyBvcHRpb25zLm5vbmNlIDogdW5kZWZpbmVkLFxuICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6IHtcbiAgICAgICAgX19odG1sOiBjc3NcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGZsdXNoVG9IVE1MKG9wdGlvbnMpIHtcbiAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIHJldHVybiAoMCwgX3N0eWxlLmZsdXNoKSgpLnJlZHVjZShmdW5jdGlvbiAoaHRtbCwgYXJncykge1xuICAgIHZhciBpZCA9IGFyZ3NbMF07XG4gICAgdmFyIGNzcyA9IGFyZ3NbMV07XG4gICAgaHRtbCArPSBcIjxzdHlsZSBpZD1cXFwiX19cIiArIGlkICsgXCJcXFwiXCIgKyAob3B0aW9ucy5ub25jZSA/IFwiIG5vbmNlPVxcXCJcIiArIG9wdGlvbnMubm9uY2UgKyBcIlxcXCJcIiA6ICcnKSArIFwiPlwiICsgY3NzICsgXCI8L3N0eWxlPlwiO1xuICAgIHJldHVybiBodG1sO1xuICB9LCAnJyk7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IEpTWFN0eWxlO1xuZXhwb3J0cy5mbHVzaCA9IGZsdXNoO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xuXG52YXIgX3N0eWxlc2hlZXRSZWdpc3RyeSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vc3R5bGVzaGVldC1yZWdpc3RyeVwiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG52YXIgc3R5bGVTaGVldFJlZ2lzdHJ5ID0gbmV3IF9zdHlsZXNoZWV0UmVnaXN0cnlbXCJkZWZhdWx0XCJdKCk7XG5cbmZ1bmN0aW9uIEpTWFN0eWxlKHByb3BzKSB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIHN0eWxlU2hlZXRSZWdpc3RyeS5hZGQocHJvcHMpO1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgKDAsIF9yZWFjdC51c2VMYXlvdXRFZmZlY3QpKGZ1bmN0aW9uICgpIHtcbiAgICBzdHlsZVNoZWV0UmVnaXN0cnkuYWRkKHByb3BzKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgc3R5bGVTaGVldFJlZ2lzdHJ5LnJlbW92ZShwcm9wcyk7XG4gICAgfTsgLy8gcHJvcHMuY2hpbGRyZW4gY2FuIGJlIHN0cmluZ1tdLCB3aWxsIGJlIHN0cmlwZWQgc2luY2UgaWQgaXMgaWRlbnRpY2FsXG4gIH0sIFtwcm9wcy5pZCwgU3RyaW5nKHByb3BzLmR5bmFtaWMpXSk7XG4gIHJldHVybiBudWxsO1xufVxuXG5KU1hTdHlsZS5keW5hbWljID0gZnVuY3Rpb24gKGluZm8pIHtcbiAgcmV0dXJuIGluZm8ubWFwKGZ1bmN0aW9uICh0YWdJbmZvKSB7XG4gICAgdmFyIGJhc2VJZCA9IHRhZ0luZm9bMF07XG4gICAgdmFyIHByb3BzID0gdGFnSW5mb1sxXTtcbiAgICByZXR1cm4gc3R5bGVTaGVldFJlZ2lzdHJ5LmNvbXB1dGVJZChiYXNlSWQsIHByb3BzKTtcbiAgfSkuam9pbignICcpO1xufTtcblxuZnVuY3Rpb24gZmx1c2goKSB7XG4gIHZhciBjc3NSdWxlcyA9IHN0eWxlU2hlZXRSZWdpc3RyeS5jc3NSdWxlcygpO1xuICBzdHlsZVNoZWV0UmVnaXN0cnkuZmx1c2goKTtcbiAgcmV0dXJuIGNzc1J1bGVzO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBfc3RyaW5nSGFzaCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInN0cmluZy1oYXNoXCIpKTtcblxudmFyIF9zdHlsZXNoZWV0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9saWIvc3R5bGVzaGVldFwiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG52YXIgc2FuaXRpemUgPSBmdW5jdGlvbiBzYW5pdGl6ZShydWxlKSB7XG4gIHJldHVybiBydWxlLnJlcGxhY2UoL1xcL3N0eWxlL2dpLCAnXFxcXC9zdHlsZScpO1xufTtcblxudmFyIFN0eWxlU2hlZXRSZWdpc3RyeSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFN0eWxlU2hlZXRSZWdpc3RyeShfdGVtcCkge1xuICAgIHZhciBfcmVmID0gX3RlbXAgPT09IHZvaWQgMCA/IHt9IDogX3RlbXAsXG4gICAgICAgIF9yZWYkc3R5bGVTaGVldCA9IF9yZWYuc3R5bGVTaGVldCxcbiAgICAgICAgc3R5bGVTaGVldCA9IF9yZWYkc3R5bGVTaGVldCA9PT0gdm9pZCAwID8gbnVsbCA6IF9yZWYkc3R5bGVTaGVldCxcbiAgICAgICAgX3JlZiRvcHRpbWl6ZUZvclNwZWVkID0gX3JlZi5vcHRpbWl6ZUZvclNwZWVkLFxuICAgICAgICBvcHRpbWl6ZUZvclNwZWVkID0gX3JlZiRvcHRpbWl6ZUZvclNwZWVkID09PSB2b2lkIDAgPyBmYWxzZSA6IF9yZWYkb3B0aW1pemVGb3JTcGVlZCxcbiAgICAgICAgX3JlZiRpc0Jyb3dzZXIgPSBfcmVmLmlzQnJvd3NlcixcbiAgICAgICAgaXNCcm93c2VyID0gX3JlZiRpc0Jyb3dzZXIgPT09IHZvaWQgMCA/IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnIDogX3JlZiRpc0Jyb3dzZXI7XG5cbiAgICB0aGlzLl9zaGVldCA9IHN0eWxlU2hlZXQgfHwgbmV3IF9zdHlsZXNoZWV0W1wiZGVmYXVsdFwiXSh7XG4gICAgICBuYW1lOiAnc3R5bGVkLWpzeCcsXG4gICAgICBvcHRpbWl6ZUZvclNwZWVkOiBvcHRpbWl6ZUZvclNwZWVkXG4gICAgfSk7XG5cbiAgICB0aGlzLl9zaGVldC5pbmplY3QoKTtcblxuICAgIGlmIChzdHlsZVNoZWV0ICYmIHR5cGVvZiBvcHRpbWl6ZUZvclNwZWVkID09PSAnYm9vbGVhbicpIHtcbiAgICAgIHRoaXMuX3NoZWV0LnNldE9wdGltaXplRm9yU3BlZWQob3B0aW1pemVGb3JTcGVlZCk7XG5cbiAgICAgIHRoaXMuX29wdGltaXplRm9yU3BlZWQgPSB0aGlzLl9zaGVldC5pc09wdGltaXplRm9yU3BlZWQoKTtcbiAgICB9XG5cbiAgICB0aGlzLl9pc0Jyb3dzZXIgPSBpc0Jyb3dzZXI7XG4gICAgdGhpcy5fZnJvbVNlcnZlciA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLl9pbmRpY2VzID0ge307XG4gICAgdGhpcy5faW5zdGFuY2VzQ291bnRzID0ge307XG4gICAgdGhpcy5jb21wdXRlSWQgPSB0aGlzLmNyZWF0ZUNvbXB1dGVJZCgpO1xuICAgIHRoaXMuY29tcHV0ZVNlbGVjdG9yID0gdGhpcy5jcmVhdGVDb21wdXRlU2VsZWN0b3IoKTtcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBTdHlsZVNoZWV0UmVnaXN0cnkucHJvdG90eXBlO1xuXG4gIF9wcm90by5hZGQgPSBmdW5jdGlvbiBhZGQocHJvcHMpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgaWYgKHVuZGVmaW5lZCA9PT0gdGhpcy5fb3B0aW1pemVGb3JTcGVlZCkge1xuICAgICAgdGhpcy5fb3B0aW1pemVGb3JTcGVlZCA9IEFycmF5LmlzQXJyYXkocHJvcHMuY2hpbGRyZW4pO1xuXG4gICAgICB0aGlzLl9zaGVldC5zZXRPcHRpbWl6ZUZvclNwZWVkKHRoaXMuX29wdGltaXplRm9yU3BlZWQpO1xuXG4gICAgICB0aGlzLl9vcHRpbWl6ZUZvclNwZWVkID0gdGhpcy5fc2hlZXQuaXNPcHRpbWl6ZUZvclNwZWVkKCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2lzQnJvd3NlciAmJiAhdGhpcy5fZnJvbVNlcnZlcikge1xuICAgICAgdGhpcy5fZnJvbVNlcnZlciA9IHRoaXMuc2VsZWN0RnJvbVNlcnZlcigpO1xuICAgICAgdGhpcy5faW5zdGFuY2VzQ291bnRzID0gT2JqZWN0LmtleXModGhpcy5fZnJvbVNlcnZlcikucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHRhZ05hbWUpIHtcbiAgICAgICAgYWNjW3RhZ05hbWVdID0gMDtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgIH0sIHt9KTtcbiAgICB9XG5cbiAgICB2YXIgX3RoaXMkZ2V0SWRBbmRSdWxlcyA9IHRoaXMuZ2V0SWRBbmRSdWxlcyhwcm9wcyksXG4gICAgICAgIHN0eWxlSWQgPSBfdGhpcyRnZXRJZEFuZFJ1bGVzLnN0eWxlSWQsXG4gICAgICAgIHJ1bGVzID0gX3RoaXMkZ2V0SWRBbmRSdWxlcy5ydWxlczsgLy8gRGVkdXBpbmc6IGp1c3QgaW5jcmVhc2UgdGhlIGluc3RhbmNlcyBjb3VudC5cblxuXG4gICAgaWYgKHN0eWxlSWQgaW4gdGhpcy5faW5zdGFuY2VzQ291bnRzKSB7XG4gICAgICB0aGlzLl9pbnN0YW5jZXNDb3VudHNbc3R5bGVJZF0gKz0gMTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgaW5kaWNlcyA9IHJ1bGVzLm1hcChmdW5jdGlvbiAocnVsZSkge1xuICAgICAgcmV0dXJuIF90aGlzLl9zaGVldC5pbnNlcnRSdWxlKHJ1bGUpO1xuICAgIH0pIC8vIEZpbHRlciBvdXQgaW52YWxpZCBydWxlc1xuICAgIC5maWx0ZXIoZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICByZXR1cm4gaW5kZXggIT09IC0xO1xuICAgIH0pO1xuICAgIHRoaXMuX2luZGljZXNbc3R5bGVJZF0gPSBpbmRpY2VzO1xuICAgIHRoaXMuX2luc3RhbmNlc0NvdW50c1tzdHlsZUlkXSA9IDE7XG4gIH07XG5cbiAgX3Byb3RvLnJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZShwcm9wcykge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgdmFyIF90aGlzJGdldElkQW5kUnVsZXMyID0gdGhpcy5nZXRJZEFuZFJ1bGVzKHByb3BzKSxcbiAgICAgICAgc3R5bGVJZCA9IF90aGlzJGdldElkQW5kUnVsZXMyLnN0eWxlSWQ7XG5cbiAgICBpbnZhcmlhbnQoc3R5bGVJZCBpbiB0aGlzLl9pbnN0YW5jZXNDb3VudHMsIFwic3R5bGVJZDogYFwiICsgc3R5bGVJZCArIFwiYCBub3QgZm91bmRcIik7XG4gICAgdGhpcy5faW5zdGFuY2VzQ291bnRzW3N0eWxlSWRdIC09IDE7XG5cbiAgICBpZiAodGhpcy5faW5zdGFuY2VzQ291bnRzW3N0eWxlSWRdIDwgMSkge1xuICAgICAgdmFyIHRhZ0Zyb21TZXJ2ZXIgPSB0aGlzLl9mcm9tU2VydmVyICYmIHRoaXMuX2Zyb21TZXJ2ZXJbc3R5bGVJZF07XG5cbiAgICAgIGlmICh0YWdGcm9tU2VydmVyKSB7XG4gICAgICAgIHRhZ0Zyb21TZXJ2ZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0YWdGcm9tU2VydmVyKTtcbiAgICAgICAgZGVsZXRlIHRoaXMuX2Zyb21TZXJ2ZXJbc3R5bGVJZF07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9pbmRpY2VzW3N0eWxlSWRdLmZvckVhY2goZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzMi5fc2hlZXQuZGVsZXRlUnVsZShpbmRleCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGRlbGV0ZSB0aGlzLl9pbmRpY2VzW3N0eWxlSWRdO1xuICAgICAgfVxuXG4gICAgICBkZWxldGUgdGhpcy5faW5zdGFuY2VzQ291bnRzW3N0eWxlSWRdO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8udXBkYXRlID0gZnVuY3Rpb24gdXBkYXRlKHByb3BzLCBuZXh0UHJvcHMpIHtcbiAgICB0aGlzLmFkZChuZXh0UHJvcHMpO1xuICAgIHRoaXMucmVtb3ZlKHByb3BzKTtcbiAgfTtcblxuICBfcHJvdG8uZmx1c2ggPSBmdW5jdGlvbiBmbHVzaCgpIHtcbiAgICB0aGlzLl9zaGVldC5mbHVzaCgpO1xuXG4gICAgdGhpcy5fc2hlZXQuaW5qZWN0KCk7XG5cbiAgICB0aGlzLl9mcm9tU2VydmVyID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuX2luZGljZXMgPSB7fTtcbiAgICB0aGlzLl9pbnN0YW5jZXNDb3VudHMgPSB7fTtcbiAgICB0aGlzLmNvbXB1dGVJZCA9IHRoaXMuY3JlYXRlQ29tcHV0ZUlkKCk7XG4gICAgdGhpcy5jb21wdXRlU2VsZWN0b3IgPSB0aGlzLmNyZWF0ZUNvbXB1dGVTZWxlY3RvcigpO1xuICB9O1xuXG4gIF9wcm90by5jc3NSdWxlcyA9IGZ1bmN0aW9uIGNzc1J1bGVzKCkge1xuICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgdmFyIGZyb21TZXJ2ZXIgPSB0aGlzLl9mcm9tU2VydmVyID8gT2JqZWN0LmtleXModGhpcy5fZnJvbVNlcnZlcikubWFwKGZ1bmN0aW9uIChzdHlsZUlkKSB7XG4gICAgICByZXR1cm4gW3N0eWxlSWQsIF90aGlzMy5fZnJvbVNlcnZlcltzdHlsZUlkXV07XG4gICAgfSkgOiBbXTtcblxuICAgIHZhciBjc3NSdWxlcyA9IHRoaXMuX3NoZWV0LmNzc1J1bGVzKCk7XG5cbiAgICByZXR1cm4gZnJvbVNlcnZlci5jb25jYXQoT2JqZWN0LmtleXModGhpcy5faW5kaWNlcykubWFwKGZ1bmN0aW9uIChzdHlsZUlkKSB7XG4gICAgICByZXR1cm4gW3N0eWxlSWQsIF90aGlzMy5faW5kaWNlc1tzdHlsZUlkXS5tYXAoZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgIHJldHVybiBjc3NSdWxlc1tpbmRleF0uY3NzVGV4dDtcbiAgICAgIH0pLmpvaW4oX3RoaXMzLl9vcHRpbWl6ZUZvclNwZWVkID8gJycgOiAnXFxuJyldO1xuICAgIH0pIC8vIGZpbHRlciBvdXQgZW1wdHkgcnVsZXNcbiAgICAuZmlsdGVyKGZ1bmN0aW9uIChydWxlKSB7XG4gICAgICByZXR1cm4gQm9vbGVhbihydWxlWzFdKTtcbiAgICB9KSk7XG4gIH1cbiAgLyoqXG4gICAqIGNyZWF0ZUNvbXB1dGVJZFxuICAgKlxuICAgKiBDcmVhdGVzIGEgZnVuY3Rpb24gdG8gY29tcHV0ZSBhbmQgbWVtb2l6ZSBhIGpzeCBpZCBmcm9tIGEgYmFzZWRJZCBhbmQgb3B0aW9uYWxseSBwcm9wcy5cbiAgICovXG4gIDtcblxuICBfcHJvdG8uY3JlYXRlQ29tcHV0ZUlkID0gZnVuY3Rpb24gY3JlYXRlQ29tcHV0ZUlkKCkge1xuICAgIHZhciBjYWNoZSA9IHt9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoYmFzZUlkLCBwcm9wcykge1xuICAgICAgaWYgKCFwcm9wcykge1xuICAgICAgICByZXR1cm4gXCJqc3gtXCIgKyBiYXNlSWQ7XG4gICAgICB9XG5cbiAgICAgIHZhciBwcm9wc1RvU3RyaW5nID0gU3RyaW5nKHByb3BzKTtcbiAgICAgIHZhciBrZXkgPSBiYXNlSWQgKyBwcm9wc1RvU3RyaW5nOyAvLyByZXR1cm4gYGpzeC0ke2hhc2hTdHJpbmcoYCR7YmFzZUlkfS0ke3Byb3BzVG9TdHJpbmd9YCl9YFxuXG4gICAgICBpZiAoIWNhY2hlW2tleV0pIHtcbiAgICAgICAgY2FjaGVba2V5XSA9IFwianN4LVwiICsgKDAsIF9zdHJpbmdIYXNoW1wiZGVmYXVsdFwiXSkoYmFzZUlkICsgXCItXCIgKyBwcm9wc1RvU3RyaW5nKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNhY2hlW2tleV07XG4gICAgfTtcbiAgfVxuICAvKipcbiAgICogY3JlYXRlQ29tcHV0ZVNlbGVjdG9yXG4gICAqXG4gICAqIENyZWF0ZXMgYSBmdW5jdGlvbiB0byBjb21wdXRlIGFuZCBtZW1vaXplIGR5bmFtaWMgc2VsZWN0b3JzLlxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5jcmVhdGVDb21wdXRlU2VsZWN0b3IgPSBmdW5jdGlvbiBjcmVhdGVDb21wdXRlU2VsZWN0b3Ioc2VsZWN0b1BsYWNlaG9sZGVyUmVnZXhwKSB7XG4gICAgaWYgKHNlbGVjdG9QbGFjZWhvbGRlclJlZ2V4cCA9PT0gdm9pZCAwKSB7XG4gICAgICBzZWxlY3RvUGxhY2Vob2xkZXJSZWdleHAgPSAvX19qc3gtc3R5bGUtZHluYW1pYy1zZWxlY3Rvci9nO1xuICAgIH1cblxuICAgIHZhciBjYWNoZSA9IHt9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoaWQsIGNzcykge1xuICAgICAgLy8gU2FuaXRpemUgU1NSLWVkIENTUy5cbiAgICAgIC8vIENsaWVudCBzaWRlIGNvZGUgZG9lc24ndCBuZWVkIHRvIGJlIHNhbml0aXplZCBzaW5jZSB3ZSB1c2VcbiAgICAgIC8vIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlIChkZXYpIGFuZCB0aGUgQ1NTT00gYXBpIHNoZWV0Lmluc2VydFJ1bGUgKHByb2QpLlxuICAgICAgaWYgKCF0aGlzLl9pc0Jyb3dzZXIpIHtcbiAgICAgICAgY3NzID0gc2FuaXRpemUoY3NzKTtcbiAgICAgIH1cblxuICAgICAgdmFyIGlkY3NzID0gaWQgKyBjc3M7XG5cbiAgICAgIGlmICghY2FjaGVbaWRjc3NdKSB7XG4gICAgICAgIGNhY2hlW2lkY3NzXSA9IGNzcy5yZXBsYWNlKHNlbGVjdG9QbGFjZWhvbGRlclJlZ2V4cCwgaWQpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY2FjaGVbaWRjc3NdO1xuICAgIH07XG4gIH07XG5cbiAgX3Byb3RvLmdldElkQW5kUnVsZXMgPSBmdW5jdGlvbiBnZXRJZEFuZFJ1bGVzKHByb3BzKSB7XG4gICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICB2YXIgY3NzID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICAgIGR5bmFtaWMgPSBwcm9wcy5keW5hbWljLFxuICAgICAgICBpZCA9IHByb3BzLmlkO1xuXG4gICAgaWYgKGR5bmFtaWMpIHtcbiAgICAgIHZhciBzdHlsZUlkID0gdGhpcy5jb21wdXRlSWQoaWQsIGR5bmFtaWMpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3R5bGVJZDogc3R5bGVJZCxcbiAgICAgICAgcnVsZXM6IEFycmF5LmlzQXJyYXkoY3NzKSA/IGNzcy5tYXAoZnVuY3Rpb24gKHJ1bGUpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXM0LmNvbXB1dGVTZWxlY3RvcihzdHlsZUlkLCBydWxlKTtcbiAgICAgICAgfSkgOiBbdGhpcy5jb21wdXRlU2VsZWN0b3Ioc3R5bGVJZCwgY3NzKV1cbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHN0eWxlSWQ6IHRoaXMuY29tcHV0ZUlkKGlkKSxcbiAgICAgIHJ1bGVzOiBBcnJheS5pc0FycmF5KGNzcykgPyBjc3MgOiBbY3NzXVxuICAgIH07XG4gIH1cbiAgLyoqXG4gICAqIHNlbGVjdEZyb21TZXJ2ZXJcbiAgICpcbiAgICogQ29sbGVjdHMgc3R5bGUgdGFncyBmcm9tIHRoZSBkb2N1bWVudCB3aXRoIGlkIF9fanN4LVhYWFxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5zZWxlY3RGcm9tU2VydmVyID0gZnVuY3Rpb24gc2VsZWN0RnJvbVNlcnZlcigpIHtcbiAgICB2YXIgZWxlbWVudHMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbaWRePVwiX19qc3gtXCJdJykpO1xuICAgIHJldHVybiBlbGVtZW50cy5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgZWxlbWVudCkge1xuICAgICAgdmFyIGlkID0gZWxlbWVudC5pZC5zbGljZSgyKTtcbiAgICAgIGFjY1tpZF0gPSBlbGVtZW50O1xuICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCB7fSk7XG4gIH07XG5cbiAgcmV0dXJuIFN0eWxlU2hlZXRSZWdpc3RyeTtcbn0oKTtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBTdHlsZVNoZWV0UmVnaXN0cnk7XG5cbmZ1bmN0aW9uIGludmFyaWFudChjb25kaXRpb24sIG1lc3NhZ2UpIHtcbiAgaWYgKCFjb25kaXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJTdHlsZVNoZWV0UmVnaXN0cnk6IFwiICsgbWVzc2FnZSArIFwiLlwiKTtcbiAgfVxufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L3NlcnZlcicpXG4iLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gaGFzaChzdHIpIHtcbiAgdmFyIGhhc2ggPSA1MzgxLFxuICAgICAgaSAgICA9IHN0ci5sZW5ndGg7XG5cbiAgd2hpbGUoaSkge1xuICAgIGhhc2ggPSAoaGFzaCAqIDMzKSBeIHN0ci5jaGFyQ29kZUF0KC0taSk7XG4gIH1cblxuICAvKiBKYXZhU2NyaXB0IGRvZXMgYml0d2lzZSBvcGVyYXRpb25zIChsaWtlIFhPUiwgYWJvdmUpIG9uIDMyLWJpdCBzaWduZWRcbiAgICogaW50ZWdlcnMuIFNpbmNlIHdlIHdhbnQgdGhlIHJlc3VsdHMgdG8gYmUgYWx3YXlzIHBvc2l0aXZlLCBjb252ZXJ0IHRoZVxuICAgKiBzaWduZWQgaW50IHRvIGFuIHVuc2lnbmVkIGJ5IGRvaW5nIGFuIHVuc2lnbmVkIGJpdHNoaWZ0LiAqL1xuICByZXR1cm4gaGFzaCA+Pj4gMDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNoO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NlcnZlci9nZXQtcGFnZS1maWxlcy5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2VydmVyL2h0bWxlc2NhcGUuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NlcnZlci91dGlscy5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9jb25zdGFudHMuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvaGVhZC1tYW5hZ2VyLWNvbnRleHQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvdXRpbHMuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7Il0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiZGVmYXVsdCIsImluaXRIZWFkTWFuYWdlciIsIkRPTUF0dHJpYnV0ZU5hbWVzIiwiYWNjZXB0Q2hhcnNldCIsImNsYXNzTmFtZSIsImh0bWxGb3IiLCJodHRwRXF1aXYiLCJub01vZHVsZSIsInJlYWN0RWxlbWVudFRvRE9NIiwidHlwZSIsInByb3BzIiwiZWwiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJwIiwiaGFzT3duUHJvcGVydHkiLCJ1bmRlZmluZWQiLCJhdHRyIiwidG9Mb3dlckNhc2UiLCJzZXRBdHRyaWJ1dGUiLCJjaGlsZHJlbiIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiaW5uZXJIVE1MIiwiX19odG1sIiwidGV4dENvbnRlbnQiLCJBcnJheSIsImlzQXJyYXkiLCJqb2luIiwidXBkYXRlRWxlbWVudHMiLCJjb21wb25lbnRzIiwiaGVhZEVsIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJoZWFkQ291bnRFbCIsInF1ZXJ5U2VsZWN0b3IiLCJjb25zb2xlIiwiZXJyb3IiLCJoZWFkQ291bnQiLCJOdW1iZXIiLCJjb250ZW50Iiwib2xkVGFncyIsImkiLCJqIiwicHJldmlvdXNFbGVtZW50U2libGluZyIsInRhZ05hbWUiLCJwdXNoIiwibmV3VGFncyIsIm1hcCIsImZpbHRlciIsIm5ld1RhZyIsImsiLCJsZW4iLCJsZW5ndGgiLCJvbGRUYWciLCJpc0VxdWFsTm9kZSIsInNwbGljZSIsImZvckVhY2giLCJ0IiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwiaW5zZXJ0QmVmb3JlIiwidG9TdHJpbmciLCJ1cGRhdGVQcm9taXNlIiwibW91bnRlZEluc3RhbmNlcyIsIlNldCIsInVwZGF0ZUhlYWQiLCJoZWFkIiwicHJvbWlzZSIsIlByb21pc2UiLCJyZXNvbHZlIiwidGhlbiIsInRhZ3MiLCJoIiwiaHJlZiIsInRpdGxlQ29tcG9uZW50IiwidGl0bGUiLCJyZXF1ZXN0SWRsZUNhbGxiYWNrIiwiY2FuY2VsSWRsZUNhbGxiYWNrIiwic2VsZiIsImJpbmQiLCJ3aW5kb3ciLCJjYiIsInN0YXJ0IiwiRGF0ZSIsIm5vdyIsInNldFRpbWVvdXQiLCJkaWRUaW1lb3V0IiwidGltZVJlbWFpbmluZyIsIk1hdGgiLCJtYXgiLCJpZCIsImNsZWFyVGltZW91dCIsImluaXRTY3JpcHRMb2FkZXIiLCJfcmVhY3QiLCJyZXF1aXJlIiwiX2hlYWRNYW5hZ2VyQ29udGV4dCIsIl9oZWFkTWFuYWdlciIsIl9yZXF1ZXN0SWRsZUNhbGxiYWNrIiwiX2RlZmluZVByb3BlcnR5Iiwib2JqIiwia2V5IiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiX29iamVjdFNwcmVhZCIsInRhcmdldCIsImFyZ3VtZW50cyIsInNvdXJjZSIsIm93bktleXMiLCJrZXlzIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwiY29uY2F0Iiwic3ltIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIiwiZXhjbHVkZWQiLCJfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSIsInNvdXJjZVN5bWJvbEtleXMiLCJpbmRleE9mIiwicHJvdG90eXBlIiwicHJvcGVydHlJc0VudW1lcmFibGUiLCJjYWxsIiwic291cmNlS2V5cyIsIlNjcmlwdENhY2hlIiwiTWFwIiwiTG9hZENhY2hlIiwiaWdub3JlUHJvcHMiLCJsb2FkU2NyaXB0Iiwic3JjIiwib25Mb2FkIiwic3RyYXRlZ3kiLCJvbkVycm9yIiwiY2FjaGVLZXkiLCJoYXMiLCJhZGQiLCJnZXQiLCJsb2FkUHJvbWlzZSIsInJlamVjdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwiY2F0Y2giLCJzZXQiLCJlbnRyaWVzIiwiaW5jbHVkZXMiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJoYW5kbGVDbGllbnRTY3JpcHRMb2FkIiwibG9hZExhenlTY3JpcHQiLCJyZWFkeVN0YXRlIiwic2NyaXB0TG9hZGVySXRlbXMiLCJTY3JpcHQiLCJyZXN0UHJvcHMiLCJ1cGRhdGVTY3JpcHRzIiwic2NyaXB0cyIsImdldElzU3NyIiwidXNlQ29udGV4dCIsIkhlYWRNYW5hZ2VyQ29udGV4dCIsInVzZUVmZmVjdCIsImJlZm9yZUludGVyYWN0aXZlIiwiX2RlZmF1bHQiLCJfdXRpbHMiLCJEb2N1bWVudENvbnRleHQiLCJEb2N1bWVudEluaXRpYWxQcm9wcyIsIkRvY3VtZW50UHJvcHMiLCJIdG1sIiwiTWFpbiIsIl9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkIiwiX3NlcnZlciIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJfY29uc3RhbnRzIiwiX2dldFBhZ2VGaWxlcyIsIl91dGlsczEiLCJfaHRtbGVzY2FwZSIsIl9zY3JpcHQiLCJfX2VzTW9kdWxlIiwibmV3T2JqIiwiZGVzYyIsImdldERvY3VtZW50RmlsZXMiLCJidWlsZE1hbmlmZXN0IiwicGF0aG5hbWUiLCJpbkFtcE1vZGUiLCJzaGFyZWRGaWxlcyIsImdldFBhZ2VGaWxlcyIsInBhZ2VGaWxlcyIsImFsbEZpbGVzIiwiZ2V0UG9seWZpbGxTY3JpcHRzIiwiY29udGV4dCIsImFzc2V0UHJlZml4IiwiZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmciLCJkaXNhYmxlT3B0aW1pemVkTG9hZGluZyIsInBvbHlmaWxsRmlsZXMiLCJwb2x5ZmlsbCIsImVuZHNXaXRoIiwiZGVmZXIiLCJub25jZSIsImNyb3NzT3JpZ2luIiwicHJvY2VzcyIsImVudiIsIl9fTkVYVF9DUk9TU19PUklHSU4iLCJnZXRQcmVOZXh0U2NyaXB0cyIsInNjcmlwdExvYWRlciIsImZpbGUiLCJpbmRleCIsInNjcmlwdFByb3BzIiwiYXNzaWduIiwiZ2V0RHluYW1pY0NodW5rcyIsImZpbGVzIiwiZHluYW1pY0ltcG9ydHMiLCJpc0RldmVsb3BtZW50IiwiYXN5bmMiLCJlbmNvZGVVUkkiLCJnZXRTY3JpcHRzIiwicmVmIiwibm9ybWFsU2NyaXB0cyIsImxvd1ByaW9yaXR5U2NyaXB0cyIsImxvd1ByaW9yaXR5RmlsZXMiLCJEb2N1bWVudDEiLCJDb21wb25lbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJlbmhhbmNlQXBwIiwiQXBwIiwiaHRtbCIsInJlbmRlclBhZ2UiLCJzdHlsZXMiLCJyZW5kZXIiLCJIZWFkIiwiTmV4dFNjcmlwdCIsImRvY0NvbXBvbmVudHNSZW5kZXJlZCIsImxvY2FsZSIsIkh0bWxDb250ZXh0IiwibGFuZyIsImFtcCIsImdldENzc0xpbmtzIiwiY3NzRmlsZXMiLCJmIiwidW5tYW5nZWRGaWxlcyIsImR5bmFtaWNDc3NGaWxlcyIsImZyb20iLCJleGlzdGluZyIsImNzc0xpbmtFbGVtZW50cyIsImlzU2hhcmVkRmlsZSIsIl9fTkVYVF9PUFRJTUlaRV9DU1MiLCJyZWwiLCJhcyIsImlzVW5tYW5hZ2VkRmlsZSIsIl9fTkVYVF9PUFRJTUlaRV9GT05UUyIsIm1ha2VTdHlsZXNoZWV0SW5lcnQiLCJnZXRQcmVsb2FkRHluYW1pY0NodW5rcyIsIkJvb2xlYW4iLCJnZXRQcmVsb2FkTWFpbkxpbmtzIiwicHJlbG9hZEZpbGVzIiwiaGFuZGxlRG9jdW1lbnRTY3JpcHRMb2FkZXJJdGVtcyIsImZpbHRlcmVkQ2hpbGRyZW4iLCJDaGlsZHJlbiIsImNoaWxkIiwiX19ORVhUX0RBVEFfXyIsIm5vZGUiLCJjIiwiT1BUSU1JWkVEX0ZPTlRfUFJPVklERVJTIiwic29tZSIsInVybCIsInN0YXJ0c1dpdGgiLCJuZXdQcm9wcyIsImNsb25lRWxlbWVudCIsImFtcFBhdGgiLCJoeWJyaWRBbXAiLCJjYW5vbmljYWxCYXNlIiwiZGFuZ2Vyb3VzQXNQYXRoIiwiaGVhZFRhZ3MiLCJ1bnN0YWJsZV9ydW50aW1lSlMiLCJ1bnN0YWJsZV9Kc1ByZWxvYWQiLCJkaXNhYmxlUnVudGltZUpTIiwiZGlzYWJsZUpzUHJlbG9hZCIsImNzc1ByZWxvYWRzIiwib3RoZXJIZWFkRWxlbWVudHMiLCJ0b0FycmF5IiwiaXNSZWFjdEhlbG1ldCIsInJlZjEiLCJ3YXJuIiwibmFtZSIsImhhc0FtcGh0bWxSZWwiLCJoYXNDYW5vbmljYWxSZWwiLCJiYWRQcm9wIiwicHJvcCIsInBhZ2UiLCJjdXJTdHlsZXMiLCJoYXNTdHlsZXMiLCJyZWYyIiwicmVmMyIsIl9ub25jZSIsIl9ub25jZTEiLCJGcmFnbWVudCIsImNvdW50IiwiY2xlYW5BbXBQYXRoIiwic3R5bGUiLCJyZXBsYWNlIiwiZ2V0QW1wUGF0aCIsIl9fTkVYVF9PUFRJTUlaRV9JTUFHRVMiLCJjb250ZXh0VHlwZSIsIkJPRFlfUkVOREVSX1RBUkdFVCIsImdldElubGluZVNjcmlwdFNvdXJjZSIsImRhdGEiLCJKU09OIiwic3RyaW5naWZ5IiwiaHRtbEVzY2FwZUpzb25TdHJpbmciLCJlcnIiLCJtZXNzYWdlIiwiRXJyb3IiLCJhbXBEZXZGaWxlcyIsImRldkZpbGVzIiwic2FmYXJpTm9tb2R1bGVGaXgiLCJhc1BhdGgiXSwic291cmNlUm9vdCI6IiJ9