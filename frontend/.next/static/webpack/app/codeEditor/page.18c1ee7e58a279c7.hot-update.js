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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Page; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _languageDropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./languageDropdown */ \"(app-pages-browser)/./src/app/codeEditor/languageDropdown.tsx\");\n/* harmony import */ var _codeEditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./codeEditor */ \"(app-pages-browser)/./src/app/codeEditor/codeEditor.tsx\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify */ \"(app-pages-browser)/./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _contants_languageOptions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/contants/languageOptions */ \"(app-pages-browser)/./src/contants/languageOptions.js\");\n/* harmony import */ var _contants_general__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/contants/general */ \"(app-pages-browser)/./src/contants/general.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst javascriptDefault = \"// comments\";\nconst handleCompiler = async ()=>{\n    try {\n        console.log(\"compiling code...\");\n    // TODO Add compiler logic here\n    } catch (err) {\n        react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.error(err.message);\n    }\n};\nfunction Page() {\n    _s();\n    const [language, setLanguage] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(_contants_languageOptions__WEBPACK_IMPORTED_MODULE_5__.languageOptions[0]);\n    const [code, setCode] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(javascriptDefault);\n    const [customInput, setCustomInput] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\");\n    const [outputDetails, setOutputDetails] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null);\n    const [processing, setProcessing] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    const onSelectLanguage = (desiredLanguage)=>{\n        console.log(\"selected language is...\", desiredLanguage);\n        setLanguage(desiredLanguage);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_3__.ToastContainer, {\n                position: \"top-right\",\n                autoClose: 2000,\n                hideProgressBar: false,\n                newestOnTop: false,\n                closeOnClick: true,\n                rtl: false,\n                pauseOnFocusLoss: true,\n                draggable: true,\n                pauseOnHover: true\n            }, void 0, false, {\n                fileName: \"/Users/sahilrai/Dev/Code Editor/frontend/src/app/codeEditor/page.tsx\",\n                lineNumber: 37,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"h-2 w-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500\"\n            }, void 0, false, {\n                fileName: \"/Users/sahilrai/Dev/Code Editor/frontend/src/app/codeEditor/page.tsx\",\n                lineNumber: 48,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center items-center v-screen \",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"px-4 py-2\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_languageDropdown__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        onSelectLanguage: onSelectLanguage\n                    }, void 0, false, {\n                        fileName: \"/Users/sahilrai/Dev/Code Editor/frontend/src/app/codeEditor/page.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/sahilrai/Dev/Code Editor/frontend/src/app/codeEditor/page.tsx\",\n                    lineNumber: 50,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/sahilrai/Dev/Code Editor/frontend/src/app/codeEditor/page.tsx\",\n                lineNumber: 49,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row space-x-4 items-start px-4 py-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col w-full h-full justify-start items-end\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_codeEditor__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            language: language.value\n                        }, void 0, false, {\n                            fileName: \"/Users/sahilrai/Dev/Code Editor/frontend/src/app/codeEditor/page.tsx\",\n                            lineNumber: 56,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/sahilrai/Dev/Code Editor/frontend/src/app/codeEditor/page.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"right-container flex flex-shrink-0 w-[30%] flex-col\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col items-end\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: handleCompiler,\n                                disabled: !code,\n                                className: (0,_contants_general__WEBPACK_IMPORTED_MODULE_6__.classnames)(\"mt-4 border-2 border-black z-10 rounded-md shadow-[5px_5px_0px_0px_rgba(0,0,0)] px-4 py-2 hover:shadow transition duration-200 bg-white flex-shrink-0\", !code ? \"opacity-50\" : \"\"),\n                                children: processing ? \"Processing...\" : \"Compile and Execute\"\n                            }, void 0, false, {\n                                fileName: \"/Users/sahilrai/Dev/Code Editor/frontend/src/app/codeEditor/page.tsx\",\n                                lineNumber: 60,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/sahilrai/Dev/Code Editor/frontend/src/app/codeEditor/page.tsx\",\n                            lineNumber: 59,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/sahilrai/Dev/Code Editor/frontend/src/app/codeEditor/page.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sahilrai/Dev/Code Editor/frontend/src/app/codeEditor/page.tsx\",\n                lineNumber: 54,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Page, \"BHc0OiQNrfJ+CahoN6FDY0XMMbw=\");\n_c = Page;\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29kZUVkaXRvci9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUVrRDtBQUNiO0FBQ2tCO0FBQ2Y7QUFDcUI7QUFFYjtBQUVoRCxNQUFNUSxvQkFBcUI7QUFFM0IsTUFBTUMsaUJBQWlCO0lBQ25CLElBQUk7UUFDQUMsUUFBUUMsR0FBRyxDQUFDO0lBQ1osK0JBQStCO0lBQ25DLEVBQUUsT0FBT0MsS0FBVTtRQUNmVCxpREFBS0EsQ0FBQ1UsS0FBSyxDQUFDRCxJQUFJRSxPQUFPO0lBQzNCO0FBQ0o7QUFFZSxTQUFTQzs7SUFFcEIsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdaLCtDQUFRQSxDQUFDQyxzRUFBZSxDQUFDLEVBQUU7SUFDM0QsTUFBTSxDQUFDWSxNQUFNQyxRQUFRLEdBQUdkLCtDQUFRQSxDQUFDRztJQUNqQyxNQUFNLENBQUNZLGFBQWFDLGVBQWUsR0FBR2hCLCtDQUFRQSxDQUFDO0lBQy9DLE1BQU0sQ0FBQ2lCLGVBQWVDLGlCQUFpQixHQUFHbEIsK0NBQVFBLENBQUM7SUFDbkQsTUFBTSxDQUFDbUIsWUFBWUMsY0FBYyxHQUFHcEIsK0NBQVFBLENBQUM7SUFFN0MsTUFBTXFCLG1CQUFtQixDQUFDQztRQUN0QmpCLFFBQVFDLEdBQUcsQ0FBQywyQkFBMkJnQjtRQUN2Q1YsWUFBWVU7SUFDaEI7SUFFQSxxQkFDSTs7MEJBQ0ksOERBQUN6QiwwREFBY0E7Z0JBQ1gwQixVQUFTO2dCQUNUQyxXQUFZO2dCQUNaQyxpQkFBa0I7Z0JBQ2xCQyxhQUFjO2dCQUNkQyxZQUFZO2dCQUNaQyxLQUFNO2dCQUNOQyxnQkFBZ0I7Z0JBQ2hCQyxTQUFTO2dCQUNUQyxZQUFZOzs7Ozs7MEJBRWhCLDhEQUFDQztnQkFBSUMsV0FBVTs7Ozs7OzBCQUNmLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDWCw0RUFBQ0Q7b0JBQUlDLFdBQVU7OEJBQ1gsNEVBQUN0Qyx5REFBaUJBO3dCQUFDMEIsa0JBQW1CQTs7Ozs7Ozs7Ozs7Ozs7OzswQkFHOUMsOERBQUNXO2dCQUFJQyxXQUFVOztrQ0FDWCw4REFBQ0Q7d0JBQUlDLFdBQVU7a0NBQ1gsNEVBQUNyQyxtREFBVUE7NEJBQUNlLFVBQVdBLFNBQVN1QixLQUFLOzs7Ozs7Ozs7OztrQ0FFekMsOERBQUNGO3dCQUFJQyxXQUFVO2tDQUNYLDRFQUFDRDs0QkFBSUMsV0FBVTtzQ0FDWCw0RUFBQ0U7Z0NBQ0dDLFNBQVVoQztnQ0FDVmlDLFVBQVcsQ0FBQ3hCO2dDQUNab0IsV0FBWS9CLDZEQUFVQSxDQUNsQix5SkFDQSxDQUFDVyxPQUFPLGVBQWU7MENBRXpCTSxhQUFhLGtCQUFrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTzdEO0dBcER3QlQ7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb2RlRWRpdG9yL3BhZ2UudHN4P2U1OWUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBMYW5ndWFnZXNEcm9wZG93biBmcm9tIFwiLi9sYW5ndWFnZURyb3Bkb3duXCJcbmltcG9ydCBDb2RlRWRpdG9yIGZyb20gXCIuL2NvZGVFZGl0b3JcIlxuaW1wb3J0IHsgVG9hc3RDb250YWluZXIsIHRvYXN0IH0gZnJvbSBcInJlYWN0LXRvYXN0aWZ5XCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGxhbmd1YWdlT3B0aW9ucyB9IGZyb20gXCJAL2NvbnRhbnRzL2xhbmd1YWdlT3B0aW9uc1wiO1xuaW1wb3J0IHsgTGFuZ3VhZ2VPcHRpb25Qcm9wcyB9IGZyb20gXCJAL2ludGVyZmFjZXMvQ29tbW9uSW50ZXJmYWNlc1wiO1xuaW1wb3J0IHsgY2xhc3NuYW1lcyB9IGZyb20gXCJAL2NvbnRhbnRzL2dlbmVyYWxcIjtcblxuY29uc3QgamF2YXNjcmlwdERlZmF1bHQgPSBgLy8gY29tbWVudHNgO1xuXG5jb25zdCBoYW5kbGVDb21waWxlciA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgICBjb25zb2xlLmxvZygnY29tcGlsaW5nIGNvZGUuLi4nKTtcbiAgICAgICAgLy8gVE9ETyBBZGQgY29tcGlsZXIgbG9naWMgaGVyZVxuICAgIH0gY2F0Y2ggKGVycjogYW55KSB7XG4gICAgICAgIHRvYXN0LmVycm9yKGVyci5tZXNzYWdlKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhZ2UoKSB7XG5cbiAgICBjb25zdCBbbGFuZ3VhZ2UsIHNldExhbmd1YWdlXSA9IHVzZVN0YXRlKGxhbmd1YWdlT3B0aW9uc1swXSk7XG4gICAgY29uc3QgW2NvZGUsIHNldENvZGVdID0gdXNlU3RhdGUoamF2YXNjcmlwdERlZmF1bHQpO1xuICAgIGNvbnN0IFtjdXN0b21JbnB1dCwgc2V0Q3VzdG9tSW5wdXRdID0gdXNlU3RhdGUoXCJcIik7XG4gICAgY29uc3QgW291dHB1dERldGFpbHMsIHNldE91dHB1dERldGFpbHNdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgY29uc3QgW3Byb2Nlc3NpbmcsIHNldFByb2Nlc3NpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgY29uc3Qgb25TZWxlY3RMYW5ndWFnZSA9IChkZXNpcmVkTGFuZ3VhZ2U6IExhbmd1YWdlT3B0aW9uUHJvcHMpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ3NlbGVjdGVkIGxhbmd1YWdlIGlzLi4uJywgZGVzaXJlZExhbmd1YWdlKTtcbiAgICAgICAgc2V0TGFuZ3VhZ2UoZGVzaXJlZExhbmd1YWdlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPFRvYXN0Q29udGFpbmVyXG4gICAgICAgICAgICAgICAgcG9zaXRpb249XCJ0b3AtcmlnaHRcIlxuICAgICAgICAgICAgICAgIGF1dG9DbG9zZT17IDIwMDAgfVxuICAgICAgICAgICAgICAgIGhpZGVQcm9ncmVzc0Jhcj17IGZhbHNlIH1cbiAgICAgICAgICAgICAgICBuZXdlc3RPblRvcD17IGZhbHNlIH1cbiAgICAgICAgICAgICAgICBjbG9zZU9uQ2xpY2tcbiAgICAgICAgICAgICAgICBydGw9eyBmYWxzZSB9XG4gICAgICAgICAgICAgICAgcGF1c2VPbkZvY3VzTG9zc1xuICAgICAgICAgICAgICAgIGRyYWdnYWJsZVxuICAgICAgICAgICAgICAgIHBhdXNlT25Ib3ZlclxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC0yIHctZnVsbCBiZy1ncmFkaWVudC10by1yIGZyb20tcGluay01MDAgdmlhLXJlZC01MDAgdG8teWVsbG93LTUwMFwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB2LXNjcmVlbiBcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTQgcHktMlwiPlxuICAgICAgICAgICAgICAgICAgICA8TGFuZ3VhZ2VzRHJvcGRvd24gb25TZWxlY3RMYW5ndWFnZT17IG9uU2VsZWN0TGFuZ3VhZ2UgfSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgc3BhY2UteC00IGl0ZW1zLXN0YXJ0IHB4LTQgcHktNFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCB3LWZ1bGwgaC1mdWxsIGp1c3RpZnktc3RhcnQgaXRlbXMtZW5kXCI+XG4gICAgICAgICAgICAgICAgICAgIDxDb2RlRWRpdG9yIGxhbmd1YWdlPXsgbGFuZ3VhZ2UudmFsdWUgfSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHQtY29udGFpbmVyIGZsZXggZmxleC1zaHJpbmstMCB3LVszMCVdIGZsZXgtY29sXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1lbmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsgaGFuZGxlQ29tcGlsZXIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXsgIWNvZGUgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17IGNsYXNzbmFtZXMoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibXQtNCBib3JkZXItMiBib3JkZXItYmxhY2sgei0xMCByb3VuZGVkLW1kIHNoYWRvdy1bNXB4XzVweF8wcHhfMHB4X3JnYmEoMCwwLDApXSBweC00IHB5LTIgaG92ZXI6c2hhZG93IHRyYW5zaXRpb24gZHVyYXRpb24tMjAwIGJnLXdoaXRlIGZsZXgtc2hyaW5rLTBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIWNvZGUgPyBcIm9wYWNpdHktNTBcIiA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBwcm9jZXNzaW5nID8gXCJQcm9jZXNzaW5nLi4uXCIgOiBcIkNvbXBpbGUgYW5kIEV4ZWN1dGVcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJMYW5ndWFnZXNEcm9wZG93biIsIkNvZGVFZGl0b3IiLCJUb2FzdENvbnRhaW5lciIsInRvYXN0IiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImxhbmd1YWdlT3B0aW9ucyIsImNsYXNzbmFtZXMiLCJqYXZhc2NyaXB0RGVmYXVsdCIsImhhbmRsZUNvbXBpbGVyIiwiY29uc29sZSIsImxvZyIsImVyciIsImVycm9yIiwibWVzc2FnZSIsIlBhZ2UiLCJsYW5ndWFnZSIsInNldExhbmd1YWdlIiwiY29kZSIsInNldENvZGUiLCJjdXN0b21JbnB1dCIsInNldEN1c3RvbUlucHV0Iiwib3V0cHV0RGV0YWlscyIsInNldE91dHB1dERldGFpbHMiLCJwcm9jZXNzaW5nIiwic2V0UHJvY2Vzc2luZyIsIm9uU2VsZWN0TGFuZ3VhZ2UiLCJkZXNpcmVkTGFuZ3VhZ2UiLCJwb3NpdGlvbiIsImF1dG9DbG9zZSIsImhpZGVQcm9ncmVzc0JhciIsIm5ld2VzdE9uVG9wIiwiY2xvc2VPbkNsaWNrIiwicnRsIiwicGF1c2VPbkZvY3VzTG9zcyIsImRyYWdnYWJsZSIsInBhdXNlT25Ib3ZlciIsImRpdiIsImNsYXNzTmFtZSIsInZhbHVlIiwiYnV0dG9uIiwib25DbGljayIsImRpc2FibGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/codeEditor/page.tsx\n"));

/***/ })

});