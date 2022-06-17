/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/config/queryClient.js":
/*!***********************************!*\
  !*** ./src/config/queryClient.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useQueryClientAndsettings\": () => (/* binding */ useQueryClientAndsettings)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-query */ \"react-query\");\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst useQueryClientAndsettings = ()=>{\n    const queryClientSettings = {\n        defaultOptions: {\n            queries: {\n                retry: 2,\n                refetchOnMount: \"always\",\n                refetchOnWindowFocus: \"always\",\n                refetchOnReconnect: \"always\",\n                cacheTime: 3.6e6,\n                refetchInterval: 3.6e6,\n                refetchIntervalInBackground: false,\n                suspense: false,\n                staleTime: 3.6e6\n            },\n            mutations: {\n                retry: 2\n            }\n        }\n    };\n    const [queryClient] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(new react_query__WEBPACK_IMPORTED_MODULE_1__.QueryClient(queryClientSettings));\n    return {\n        queryClient\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29uZmlnL3F1ZXJ5Q2xpZW50LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTBCO0FBQ2dCO0FBRW5DLE1BQU1FLHlCQUF5QixHQUFHLElBQU07SUFDN0MsTUFBTUMsbUJBQW1CLEdBQUc7UUFDMUJDLGNBQWMsRUFBRTtZQUNkQyxPQUFPLEVBQUU7Z0JBQ1BDLEtBQUssRUFBRSxDQUFDO2dCQUNSQyxjQUFjLEVBQUUsUUFBUTtnQkFDeEJDLG9CQUFvQixFQUFFLFFBQVE7Z0JBQzlCQyxrQkFBa0IsRUFBRSxRQUFRO2dCQUM1QkMsU0FBUyxFQUFFLEtBQUs7Z0JBQ2hCQyxlQUFlLEVBQUUsS0FBSztnQkFDdEJDLDJCQUEyQixFQUFFLEtBQUs7Z0JBQ2xDQyxRQUFRLEVBQUUsS0FBSztnQkFDZkMsU0FBUyxFQUFFLEtBQUs7YUFDakI7WUFDREMsU0FBUyxFQUFFO2dCQUNUVCxLQUFLLEVBQUUsQ0FBQzthQUNUO1NBQ0Y7S0FDRjtJQUVELE1BQU0sQ0FBQ1UsV0FBVyxDQUFDLEdBQUdoQixxREFBYyxDQUFDLElBQUlDLG9EQUFXLENBQUNFLG1CQUFtQixDQUFDLENBQUM7SUFFMUUsT0FBTztRQUFFYSxXQUFXO0tBQUUsQ0FBQztDQUN4QixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVwb3J0YS1oZWFsdGgtd2ViLXZlcnNpb24vLi9zcmMvY29uZmlnL3F1ZXJ5Q2xpZW50LmpzPzBjMTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBRdWVyeUNsaWVudCB9IGZyb20gXCJyZWFjdC1xdWVyeVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZVF1ZXJ5Q2xpZW50QW5kc2V0dGluZ3MgPSAoKSA9PiB7XHJcbiAgY29uc3QgcXVlcnlDbGllbnRTZXR0aW5ncyA9IHtcclxuICAgIGRlZmF1bHRPcHRpb25zOiB7XHJcbiAgICAgIHF1ZXJpZXM6IHtcclxuICAgICAgICByZXRyeTogMixcclxuICAgICAgICByZWZldGNoT25Nb3VudDogXCJhbHdheXNcIixcclxuICAgICAgICByZWZldGNoT25XaW5kb3dGb2N1czogXCJhbHdheXNcIixcclxuICAgICAgICByZWZldGNoT25SZWNvbm5lY3Q6IFwiYWx3YXlzXCIsXHJcbiAgICAgICAgY2FjaGVUaW1lOiAzLjZlNixcclxuICAgICAgICByZWZldGNoSW50ZXJ2YWw6IDMuNmU2LCAvLzEgaG91clxyXG4gICAgICAgIHJlZmV0Y2hJbnRlcnZhbEluQmFja2dyb3VuZDogZmFsc2UsXHJcbiAgICAgICAgc3VzcGVuc2U6IGZhbHNlLFxyXG4gICAgICAgIHN0YWxlVGltZTogMy42ZTYsXHJcbiAgICAgIH0sXHJcbiAgICAgIG11dGF0aW9uczoge1xyXG4gICAgICAgIHJldHJ5OiAyLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9O1xyXG5cclxuICBjb25zdCBbcXVlcnlDbGllbnRdID0gUmVhY3QudXNlU3RhdGUobmV3IFF1ZXJ5Q2xpZW50KHF1ZXJ5Q2xpZW50U2V0dGluZ3MpKTtcclxuXHJcbiAgcmV0dXJuIHsgcXVlcnlDbGllbnQgfTtcclxufTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiUXVlcnlDbGllbnQiLCJ1c2VRdWVyeUNsaWVudEFuZHNldHRpbmdzIiwicXVlcnlDbGllbnRTZXR0aW5ncyIsImRlZmF1bHRPcHRpb25zIiwicXVlcmllcyIsInJldHJ5IiwicmVmZXRjaE9uTW91bnQiLCJyZWZldGNoT25XaW5kb3dGb2N1cyIsInJlZmV0Y2hPblJlY29ubmVjdCIsImNhY2hlVGltZSIsInJlZmV0Y2hJbnRlcnZhbCIsInJlZmV0Y2hJbnRlcnZhbEluQmFja2dyb3VuZCIsInN1c3BlbnNlIiwic3RhbGVUaW1lIiwibXV0YXRpb25zIiwicXVlcnlDbGllbnQiLCJ1c2VTdGF0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/config/queryClient.js\n");

/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-query */ \"react-query\");\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_query_hydration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-query/hydration */ \"react-query/hydration\");\n/* harmony import */ var react_query_hydration__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_query_hydration__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _config_queryClient__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @config/queryClient */ \"./src/config/queryClient.js\");\n/* harmony import */ var react_query_devtools__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-query/devtools */ \"react-query/devtools\");\n/* harmony import */ var react_query_devtools__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_query_devtools__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    const { queryClient  } = (0,_config_queryClient__WEBPACK_IMPORTED_MODULE_4__.useQueryClientAndsettings)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_query__WEBPACK_IMPORTED_MODULE_1__.QueryClientProvider, {\n        client: queryClient,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_query_hydration__WEBPACK_IMPORTED_MODULE_3__.Hydrate, {\n                state: pageProps.dehydratedState,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\manglide\\\\Desktop\\\\JAWNCHUKS\\\\oTaS\\\\VKM-work\\\\VKM-work\\\\reporta-health-web\\\\reporta-health-web-version\\\\src\\\\pages\\\\_app.js\",\n                    lineNumber: 13,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\manglide\\\\Desktop\\\\JAWNCHUKS\\\\oTaS\\\\VKM-work\\\\VKM-work\\\\reporta-health-web\\\\reporta-health-web-version\\\\src\\\\pages\\\\_app.js\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_query_devtools__WEBPACK_IMPORTED_MODULE_5__.ReactQueryDevtools, {\n                initialIsOpen: false\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\manglide\\\\Desktop\\\\JAWNCHUKS\\\\oTaS\\\\VKM-work\\\\VKM-work\\\\reporta-health-web\\\\reporta-health-web-version\\\\src\\\\pages\\\\_app.js\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\manglide\\\\Desktop\\\\JAWNCHUKS\\\\oTaS\\\\VKM-work\\\\VKM-work\\\\reporta-health-web\\\\reporta-health-web-version\\\\src\\\\pages\\\\_app.js\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, this);\n}\nMyApp.propTypes = {\n    Component: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().elementType.isRequired),\n    pageProps: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().object)\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQWtEO0FBQ3JCO0FBQ21CO0FBQ2dCO0FBQ047QUFDdkI7QUFFbkMsU0FBU0ssS0FBSyxDQUFDLEVBQUVDLFNBQVMsR0FBRUMsU0FBUyxHQUFFLEVBQUU7SUFDdkMsTUFBTSxFQUFFQyxXQUFXLEdBQUUsR0FBR04sOEVBQXlCLEVBQUU7SUFDbkQscUJBQ0UsOERBQUNGLDREQUFtQjtRQUFDUyxNQUFNLEVBQUVELFdBQVc7OzBCQUN0Qyw4REFBQ1AsMERBQU87Z0JBQUNTLEtBQUssRUFBRUgsU0FBUyxDQUFDSSxlQUFlOzBCQUN2Qyw0RUFBQ0wsU0FBUztvQkFBRSxHQUFHQyxTQUFTOzs7Ozt3QkFBSTs7Ozs7b0JBQ3BCOzBCQUNWLDhEQUFDSixvRUFBa0I7Z0JBQUNTLGFBQWEsRUFBRSxLQUFLOzs7OztvQkFBSTs7Ozs7O1lBQ3hCLENBQ3RCO0NBQ0g7QUFFRFAsS0FBSyxDQUFDUSxTQUFTLEdBQUc7SUFDaEJQLFNBQVMsRUFBRUYsMEVBQWdDO0lBQzNDRyxTQUFTLEVBQUVILDBEQUFnQjtDQUM1QixDQUFDO0FBRUYsaUVBQWVDLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3JlcG9ydGEtaGVhbHRoLXdlYi12ZXJzaW9uLy4vc3JjL3BhZ2VzL19hcHAuanM/OGZkYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBRdWVyeUNsaWVudFByb3ZpZGVyIH0gZnJvbSBcInJlYWN0LXF1ZXJ5XCI7XHJcbmltcG9ydCBcIkBzdHlsZXMvZ2xvYmFscy5jc3NcIjtcclxuaW1wb3J0IHsgSHlkcmF0ZSB9IGZyb20gXCJyZWFjdC1xdWVyeS9oeWRyYXRpb25cIjtcclxuaW1wb3J0IHsgdXNlUXVlcnlDbGllbnRBbmRzZXR0aW5ncyB9IGZyb20gXCJAY29uZmlnL3F1ZXJ5Q2xpZW50XCI7XHJcbmltcG9ydCB7IFJlYWN0UXVlcnlEZXZ0b29scyB9IGZyb20gXCJyZWFjdC1xdWVyeS9kZXZ0b29sc1wiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcblxyXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcclxuICBjb25zdCB7IHF1ZXJ5Q2xpZW50IH0gPSB1c2VRdWVyeUNsaWVudEFuZHNldHRpbmdzKCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxRdWVyeUNsaWVudFByb3ZpZGVyIGNsaWVudD17cXVlcnlDbGllbnR9PlxyXG4gICAgICA8SHlkcmF0ZSBzdGF0ZT17cGFnZVByb3BzLmRlaHlkcmF0ZWRTdGF0ZX0+XHJcbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICA8L0h5ZHJhdGU+XHJcbiAgICAgIDxSZWFjdFF1ZXJ5RGV2dG9vbHMgaW5pdGlhbElzT3Blbj17ZmFsc2V9IC8+XHJcbiAgICA8L1F1ZXJ5Q2xpZW50UHJvdmlkZXI+XHJcbiAgKTtcclxufVxyXG5cclxuTXlBcHAucHJvcFR5cGVzID0ge1xyXG4gIENvbXBvbmVudDogUHJvcFR5cGVzLmVsZW1lbnRUeXBlLmlzUmVxdWlyZWQsXHJcbiAgcGFnZVByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XHJcbiJdLCJuYW1lcyI6WyJRdWVyeUNsaWVudFByb3ZpZGVyIiwiSHlkcmF0ZSIsInVzZVF1ZXJ5Q2xpZW50QW5kc2V0dGluZ3MiLCJSZWFjdFF1ZXJ5RGV2dG9vbHMiLCJQcm9wVHlwZXMiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInF1ZXJ5Q2xpZW50IiwiY2xpZW50Iiwic3RhdGUiLCJkZWh5ZHJhdGVkU3RhdGUiLCJpbml0aWFsSXNPcGVuIiwicHJvcFR5cGVzIiwiZWxlbWVudFR5cGUiLCJpc1JlcXVpcmVkIiwib2JqZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n");

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-query":
/*!******************************!*\
  !*** external "react-query" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-query");

/***/ }),

/***/ "react-query/devtools":
/*!***************************************!*\
  !*** external "react-query/devtools" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-query/devtools");

/***/ }),

/***/ "react-query/hydration":
/*!****************************************!*\
  !*** external "react-query/hydration" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-query/hydration");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.js"));
module.exports = __webpack_exports__;

})();