"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/codeEditor/page",{

/***/ "(app-pages-browser)/./src/app/codeEditor/page.tsx":
/*!*************************************!*\
  !*** ./src/app/codeEditor/page.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Page; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _languageDropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./languageDropdown */ \"(app-pages-browser)/./src/app/codeEditor/languageDropdown.tsx\");\n/* harmony import */ var _codeEditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./codeEditor */ \"(app-pages-browser)/./src/app/codeEditor/codeEditor.tsx\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify */ \"(app-pages-browser)/../node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\n\nconst [language, setLanguage] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"javascript\");\nconst onSelectLanguage = (language)=>{\n    console.log(\"selected language is...\", language);\n    setLanguage;\n};\nfunction Page() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_3__.ToastContainer, {\n                position: \"top-right\",\n                autoClose: 2000,\n                hideProgressBar: false,\n                newestOnTop: false,\n                closeOnClick: true,\n                rtl: false,\n                pauseOnFocusLoss: true,\n                draggable: true,\n                pauseOnHover: true\n            }, void 0, false, {\n                fileName: \"/Users/sahilrai/Dev/Code Editor/frontend/src/app/codeEditor/page.tsx\",\n                lineNumber: 18,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"h-4 w-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500\"\n            }, void 0, false, {\n                fileName: \"/Users/sahilrai/Dev/Code Editor/frontend/src/app/codeEditor/page.tsx\",\n                lineNumber: 29,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"px-4 py-2\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_languageDropdown__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/sahilrai/Dev/Code Editor/frontend/src/app/codeEditor/page.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/sahilrai/Dev/Code Editor/frontend/src/app/codeEditor/page.tsx\",\n                    lineNumber: 31,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/sahilrai/Dev/Code Editor/frontend/src/app/codeEditor/page.tsx\",\n                lineNumber: 30,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row space-x-4 items-start px-4 py-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col w-full h-full justify-start items-end\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_codeEditor__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/sahilrai/Dev/Code Editor/frontend/src/app/codeEditor/page.tsx\",\n                            lineNumber: 37,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/sahilrai/Dev/Code Editor/frontend/src/app/codeEditor/page.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"right-container flex flex-shrink-0 w-[30%] flex-col\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sahilrai/Dev/Code Editor/frontend/src/app/codeEditor/page.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sahilrai/Dev/Code Editor/frontend/src/app/codeEditor/page.tsx\",\n                lineNumber: 35,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_c = Page;\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29kZUVkaXRvci9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUVrRDtBQUNiO0FBQ2tCO0FBQ3RCO0FBRWpDLE1BQU0sQ0FBQ0ksVUFBVUMsWUFBWSxHQUFHRiwrQ0FBUUEsQ0FBQztBQUV6QyxNQUFNRyxtQkFBbUIsQ0FBQ0Y7SUFDdEJHLFFBQVFDLEdBQUcsQ0FBQywyQkFBMkJKO0lBQ3ZDQztBQUNKO0FBRWUsU0FBU0k7SUFDcEIscUJBQ0k7OzBCQUNJLDhEQUFDUCwwREFBY0E7Z0JBQ1hRLFVBQVM7Z0JBQ1RDLFdBQVc7Z0JBQ1hDLGlCQUFpQjtnQkFDakJDLGFBQWE7Z0JBQ2JDLFlBQVk7Z0JBQ1pDLEtBQUs7Z0JBQ0xDLGdCQUFnQjtnQkFDaEJDLFNBQVM7Z0JBQ1RDLFlBQVk7Ozs7OzswQkFFaEIsOERBQUNDO2dCQUFJQyxXQUFVOzs7Ozs7MEJBQ2YsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNYLDRFQUFDRDtvQkFBSUMsV0FBVTs4QkFDWCw0RUFBQ3BCLHlEQUFpQkE7Ozs7Ozs7Ozs7Ozs7OzswQkFHMUIsOERBQUNtQjtnQkFBSUMsV0FBVTs7a0NBQ1gsOERBQUNEO3dCQUFJQyxXQUFVO2tDQUNYLDRFQUFDbkIsbURBQVVBOzs7Ozs7Ozs7O2tDQUVmLDhEQUFDa0I7d0JBQUlDLFdBQVU7Ozs7Ozs7Ozs7Ozs7O0FBTS9CO0tBOUJ3QlgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb2RlRWRpdG9yL3BhZ2UudHN4P2U1OWUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBMYW5ndWFnZXNEcm9wZG93biBmcm9tIFwiLi9sYW5ndWFnZURyb3Bkb3duXCJcbmltcG9ydCBDb2RlRWRpdG9yIGZyb20gXCIuL2NvZGVFZGl0b3JcIlxuaW1wb3J0IHsgVG9hc3RDb250YWluZXIsIHRvYXN0IH0gZnJvbSBcInJlYWN0LXRvYXN0aWZ5XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBbbGFuZ3VhZ2UsIHNldExhbmd1YWdlXSA9IHVzZVN0YXRlKCdqYXZhc2NyaXB0JylcblxuY29uc3Qgb25TZWxlY3RMYW5ndWFnZSA9IChsYW5ndWFnZTogc3RyaW5nKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ3NlbGVjdGVkIGxhbmd1YWdlIGlzLi4uJywgbGFuZ3VhZ2UpXG4gICAgc2V0TGFuZ3VhZ2Vcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFnZSgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPFRvYXN0Q29udGFpbmVyXG4gICAgICAgICAgICAgICAgcG9zaXRpb249XCJ0b3AtcmlnaHRcIlxuICAgICAgICAgICAgICAgIGF1dG9DbG9zZT17MjAwMH1cbiAgICAgICAgICAgICAgICBoaWRlUHJvZ3Jlc3NCYXI9e2ZhbHNlfVxuICAgICAgICAgICAgICAgIG5ld2VzdE9uVG9wPXtmYWxzZX1cbiAgICAgICAgICAgICAgICBjbG9zZU9uQ2xpY2tcbiAgICAgICAgICAgICAgICBydGw9e2ZhbHNlfVxuICAgICAgICAgICAgICAgIHBhdXNlT25Gb2N1c0xvc3NcbiAgICAgICAgICAgICAgICBkcmFnZ2FibGVcbiAgICAgICAgICAgICAgICBwYXVzZU9uSG92ZXJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtNCB3LWZ1bGwgYmctZ3JhZGllbnQtdG8tciBmcm9tLXBpbmstNTAwIHZpYS1yZWQtNTAwIHRvLXllbGxvdy01MDBcIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvd1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtNCBweS0yXCI+XG4gICAgICAgICAgICAgICAgICAgIDxMYW5ndWFnZXNEcm9wZG93biAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgc3BhY2UteC00IGl0ZW1zLXN0YXJ0IHB4LTQgcHktNFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCB3LWZ1bGwgaC1mdWxsIGp1c3RpZnktc3RhcnQgaXRlbXMtZW5kXCI+XG4gICAgICAgICAgICAgICAgICAgIDxDb2RlRWRpdG9yIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodC1jb250YWluZXIgZmxleCBmbGV4LXNocmluay0wIHctWzMwJV0gZmxleC1jb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJMYW5ndWFnZXNEcm9wZG93biIsIkNvZGVFZGl0b3IiLCJUb2FzdENvbnRhaW5lciIsInVzZVN0YXRlIiwibGFuZ3VhZ2UiLCJzZXRMYW5ndWFnZSIsIm9uU2VsZWN0TGFuZ3VhZ2UiLCJjb25zb2xlIiwibG9nIiwiUGFnZSIsInBvc2l0aW9uIiwiYXV0b0Nsb3NlIiwiaGlkZVByb2dyZXNzQmFyIiwibmV3ZXN0T25Ub3AiLCJjbG9zZU9uQ2xpY2siLCJydGwiLCJwYXVzZU9uRm9jdXNMb3NzIiwiZHJhZ2dhYmxlIiwicGF1c2VPbkhvdmVyIiwiZGl2IiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/codeEditor/page.tsx\n"));

/***/ })

});