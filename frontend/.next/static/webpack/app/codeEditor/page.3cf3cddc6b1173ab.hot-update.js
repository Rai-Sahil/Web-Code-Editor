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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Page; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _languageDropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./languageDropdown */ \"(app-pages-browser)/./src/app/codeEditor/languageDropdown.tsx\");\n/* harmony import */ var _codeEditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./codeEditor */ \"(app-pages-browser)/./src/app/codeEditor/codeEditor.tsx\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify */ \"(app-pages-browser)/./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _contants_languageOptions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/contants/languageOptions */ \"(app-pages-browser)/./src/contants/languageOptions.js\");\n/* harmony import */ var _contants_general__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/contants/general */ \"(app-pages-browser)/./src/contants/general.ts\");\n/* harmony import */ var _outputWindow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./outputWindow */ \"(app-pages-browser)/./src/app/codeEditor/outputWindow.tsx\");\n/* harmony import */ var _customInput__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./customInput */ \"(app-pages-browser)/./src/app/codeEditor/customInput.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst javascriptDefault = \"// comments\";\nconst handleCompiler = async ()=>{\n    try {\n        console.log(\"compiling code...\");\n    // TODO Add compiler logic here\n    } catch (err) {\n        react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.error(err.message);\n    }\n};\nfunction Page() {\n    _s();\n    const [language, setLanguage] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(_contants_languageOptions__WEBPACK_IMPORTED_MODULE_5__.languageOptions[0]);\n    const [code, setCode] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(javascriptDefault);\n    const [customInput, setCustomInput] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\");\n    const [outputDetails, setOutputDetails] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null);\n    const [processing, setProcessing] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    const onSelectLanguage = (desiredLanguage)=>{\n        console.log(\"selected language is...\", desiredLanguage);\n        setLanguage(desiredLanguage);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_3__.ToastContainer, {\n                position: \"top-right\",\n                autoClose: 2000,\n                hideProgressBar: false,\n                newestOnTop: false,\n                closeOnClick: true,\n                rtl: false,\n                pauseOnFocusLoss: true,\n                draggable: true,\n                pauseOnHover: true\n            }, void 0, false, {\n                fileName: \"/Users/sahilrai/Dev/Code Editor/frontend/src/app/codeEditor/page.tsx\",\n                lineNumber: 39,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"h-2 w-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500\"\n            }, void 0, false, {\n                fileName: \"/Users/sahilrai/Dev/Code Editor/frontend/src/app/codeEditor/page.tsx\",\n                lineNumber: 50,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center items-center v-screen\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mt-4 border-2 border-black z-10 rounded-md shadow-[5px_5px_0px_0px_rgba(0,0,0)] hover:shadow transition duration-200 bg-white flex-shrink-0 p-0\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_languageDropdown__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        onSelectLanguage: onSelectLanguage\n                    }, void 0, false, {\n                        fileName: \"/Users/sahilrai/Dev/Code Editor/frontend/src/app/codeEditor/page.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/sahilrai/Dev/Code Editor/frontend/src/app/codeEditor/page.tsx\",\n                    lineNumber: 52,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/sahilrai/Dev/Code Editor/frontend/src/app/codeEditor/page.tsx\",\n                lineNumber: 51,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row space-x-4 items-start px-4 py-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col w-full h-full justify-start items-end\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_codeEditor__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            language: language.value\n                        }, void 0, false, {\n                            fileName: \"/Users/sahilrai/Dev/Code Editor/frontend/src/app/codeEditor/page.tsx\",\n                            lineNumber: 58,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/sahilrai/Dev/Code Editor/frontend/src/app/codeEditor/page.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"right-container flex flex-shrink-0 w-[30%] flex-col\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_outputWindow__WEBPACK_IMPORTED_MODULE_7__.OutputWindow, {}, void 0, false, {\n                                fileName: \"/Users/sahilrai/Dev/Code Editor/frontend/src/app/codeEditor/page.tsx\",\n                                lineNumber: 62,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-col items-end\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_customInput__WEBPACK_IMPORTED_MODULE_8__.CustomInput, {\n                                        customInput: customInput,\n                                        setCustomInput: setCustomInput\n                                    }, void 0, false, {\n                                        fileName: \"/Users/sahilrai/Dev/Code Editor/frontend/src/app/codeEditor/page.tsx\",\n                                        lineNumber: 64,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: handleCompiler,\n                                        disabled: !code,\n                                        className: (0,_contants_general__WEBPACK_IMPORTED_MODULE_6__.classnames)(\"mt-4 border-2 border-black z-10 rounded-md shadow-[5px_5px_0px_0px_rgba(0,0,0)] px-4 py-2 hover:shadow transition duration-200 bg-white flex-shrink-0\", !code ? \"opacity-50\" : \"\"),\n                                        children: processing ? \"Processing...\" : \"Compile and Execute\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/sahilrai/Dev/Code Editor/frontend/src/app/codeEditor/page.tsx\",\n                                        lineNumber: 68,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/sahilrai/Dev/Code Editor/frontend/src/app/codeEditor/page.tsx\",\n                                lineNumber: 63,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/sahilrai/Dev/Code Editor/frontend/src/app/codeEditor/page.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sahilrai/Dev/Code Editor/frontend/src/app/codeEditor/page.tsx\",\n                lineNumber: 56,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Page, \"BHc0OiQNrfJ+CahoN6FDY0XMMbw=\");\n_c = Page;\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29kZUVkaXRvci9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBRWtEO0FBQ2I7QUFDa0I7QUFDZjtBQUNxQjtBQUViO0FBQ0Y7QUFDRjtBQUU1QyxNQUFNVSxvQkFBcUI7QUFFM0IsTUFBTUMsaUJBQWlCO0lBQ25CLElBQUk7UUFDQUMsUUFBUUMsR0FBRyxDQUFDO0lBQ1osK0JBQStCO0lBQ25DLEVBQUUsT0FBT0MsS0FBVTtRQUNmWCxpREFBS0EsQ0FBQ1ksS0FBSyxDQUFDRCxJQUFJRSxPQUFPO0lBQzNCO0FBQ0o7QUFFZSxTQUFTQzs7SUFFcEIsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdkLCtDQUFRQSxDQUFDQyxzRUFBZSxDQUFDLEVBQUU7SUFDM0QsTUFBTSxDQUFDYyxNQUFNQyxRQUFRLEdBQUdoQiwrQ0FBUUEsQ0FBQ0s7SUFDakMsTUFBTSxDQUFDWSxhQUFhQyxlQUFlLEdBQUdsQiwrQ0FBUUEsQ0FBQztJQUMvQyxNQUFNLENBQUNtQixlQUFlQyxpQkFBaUIsR0FBR3BCLCtDQUFRQSxDQUFDO0lBQ25ELE1BQU0sQ0FBQ3FCLFlBQVlDLGNBQWMsR0FBR3RCLCtDQUFRQSxDQUFDO0lBRTdDLE1BQU11QixtQkFBbUIsQ0FBQ0M7UUFDdEJqQixRQUFRQyxHQUFHLENBQUMsMkJBQTJCZ0I7UUFDdkNWLFlBQVlVO0lBQ2hCO0lBRUEscUJBQ0k7OzBCQUNJLDhEQUFDM0IsMERBQWNBO2dCQUNYNEIsVUFBUztnQkFDVEMsV0FBVztnQkFDWEMsaUJBQWlCO2dCQUNqQkMsYUFBYTtnQkFDYkMsWUFBWTtnQkFDWkMsS0FBSztnQkFDTEMsZ0JBQWdCO2dCQUNoQkMsU0FBUztnQkFDVEMsWUFBWTs7Ozs7OzBCQUVoQiw4REFBQ0M7Z0JBQUlDLFdBQVU7Ozs7OzswQkFDZiw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ1gsNEVBQUNEO29CQUFJQyxXQUFVOzhCQUNYLDRFQUFDeEMseURBQWlCQTt3QkFBQzRCLGtCQUFrQkE7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBRzdDLDhEQUFDVztnQkFBSUMsV0FBVTs7a0NBQ1gsOERBQUNEO3dCQUFJQyxXQUFVO2tDQUNYLDRFQUFDdkMsbURBQVVBOzRCQUFDaUIsVUFBVUEsU0FBU3VCLEtBQUs7Ozs7Ozs7Ozs7O2tDQUd4Qyw4REFBQ0Y7d0JBQUlDLFdBQVU7OzBDQUNYLDhEQUFDaEMsdURBQVlBOzs7OzswQ0FDYiw4REFBQytCO2dDQUFJQyxXQUFVOztrREFDWCw4REFBQy9CLHFEQUFXQTt3Q0FDUmEsYUFBYUE7d0NBQ2JDLGdCQUFnQkE7Ozs7OztrREFFcEIsOERBQUNtQjt3Q0FDR0MsU0FBU2hDO3dDQUNUaUMsVUFBVSxDQUFDeEI7d0NBQ1hvQixXQUFXakMsNkRBQVVBLENBQ2pCLHlKQUNBLENBQUNhLE9BQU8sZUFBZTtrREFFMUJNLGFBQWEsa0JBQWtCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU81RDtHQTFEd0JUO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29kZUVkaXRvci9wYWdlLnRzeD9lNTllIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgTGFuZ3VhZ2VzRHJvcGRvd24gZnJvbSBcIi4vbGFuZ3VhZ2VEcm9wZG93blwiXG5pbXBvcnQgQ29kZUVkaXRvciBmcm9tIFwiLi9jb2RlRWRpdG9yXCJcbmltcG9ydCB7IFRvYXN0Q29udGFpbmVyLCB0b2FzdCB9IGZyb20gXCJyZWFjdC10b2FzdGlmeVwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBsYW5ndWFnZU9wdGlvbnMgfSBmcm9tIFwiQC9jb250YW50cy9sYW5ndWFnZU9wdGlvbnNcIjtcbmltcG9ydCB7IExhbmd1YWdlT3B0aW9uUHJvcHMgfSBmcm9tIFwiQC9pbnRlcmZhY2VzL0NvbW1vbkludGVyZmFjZXNcIjtcbmltcG9ydCB7IGNsYXNzbmFtZXMgfSBmcm9tIFwiQC9jb250YW50cy9nZW5lcmFsXCI7XG5pbXBvcnQgeyBPdXRwdXRXaW5kb3cgfSBmcm9tIFwiLi9vdXRwdXRXaW5kb3dcIjtcbmltcG9ydCB7IEN1c3RvbUlucHV0IH0gZnJvbSBcIi4vY3VzdG9tSW5wdXRcIjtcblxuY29uc3QgamF2YXNjcmlwdERlZmF1bHQgPSBgLy8gY29tbWVudHNgO1xuXG5jb25zdCBoYW5kbGVDb21waWxlciA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgICBjb25zb2xlLmxvZygnY29tcGlsaW5nIGNvZGUuLi4nKTtcbiAgICAgICAgLy8gVE9ETyBBZGQgY29tcGlsZXIgbG9naWMgaGVyZVxuICAgIH0gY2F0Y2ggKGVycjogYW55KSB7XG4gICAgICAgIHRvYXN0LmVycm9yKGVyci5tZXNzYWdlKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhZ2UoKSB7XG5cbiAgICBjb25zdCBbbGFuZ3VhZ2UsIHNldExhbmd1YWdlXSA9IHVzZVN0YXRlKGxhbmd1YWdlT3B0aW9uc1swXSk7XG4gICAgY29uc3QgW2NvZGUsIHNldENvZGVdID0gdXNlU3RhdGUoamF2YXNjcmlwdERlZmF1bHQpO1xuICAgIGNvbnN0IFtjdXN0b21JbnB1dCwgc2V0Q3VzdG9tSW5wdXRdID0gdXNlU3RhdGUoXCJcIik7XG4gICAgY29uc3QgW291dHB1dERldGFpbHMsIHNldE91dHB1dERldGFpbHNdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgY29uc3QgW3Byb2Nlc3NpbmcsIHNldFByb2Nlc3NpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgY29uc3Qgb25TZWxlY3RMYW5ndWFnZSA9IChkZXNpcmVkTGFuZ3VhZ2U6IExhbmd1YWdlT3B0aW9uUHJvcHMpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ3NlbGVjdGVkIGxhbmd1YWdlIGlzLi4uJywgZGVzaXJlZExhbmd1YWdlKTtcbiAgICAgICAgc2V0TGFuZ3VhZ2UoZGVzaXJlZExhbmd1YWdlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPFRvYXN0Q29udGFpbmVyXG4gICAgICAgICAgICAgICAgcG9zaXRpb249XCJ0b3AtcmlnaHRcIlxuICAgICAgICAgICAgICAgIGF1dG9DbG9zZT17MjAwMH1cbiAgICAgICAgICAgICAgICBoaWRlUHJvZ3Jlc3NCYXI9e2ZhbHNlfVxuICAgICAgICAgICAgICAgIG5ld2VzdE9uVG9wPXtmYWxzZX1cbiAgICAgICAgICAgICAgICBjbG9zZU9uQ2xpY2tcbiAgICAgICAgICAgICAgICBydGw9e2ZhbHNlfVxuICAgICAgICAgICAgICAgIHBhdXNlT25Gb2N1c0xvc3NcbiAgICAgICAgICAgICAgICBkcmFnZ2FibGVcbiAgICAgICAgICAgICAgICBwYXVzZU9uSG92ZXJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtMiB3LWZ1bGwgYmctZ3JhZGllbnQtdG8tciBmcm9tLXBpbmstNTAwIHZpYS1yZWQtNTAwIHRvLXllbGxvdy01MDBcIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgdi1zY3JlZW5cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTQgYm9yZGVyLTIgYm9yZGVyLWJsYWNrIHotMTAgcm91bmRlZC1tZCBzaGFkb3ctWzVweF81cHhfMHB4XzBweF9yZ2JhKDAsMCwwKV0gaG92ZXI6c2hhZG93IHRyYW5zaXRpb24gZHVyYXRpb24tMjAwIGJnLXdoaXRlIGZsZXgtc2hyaW5rLTAgcC0wXCI+XG4gICAgICAgICAgICAgICAgICAgIDxMYW5ndWFnZXNEcm9wZG93biBvblNlbGVjdExhbmd1YWdlPXtvblNlbGVjdExhbmd1YWdlfSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgc3BhY2UteC00IGl0ZW1zLXN0YXJ0IHB4LTQgcHktNFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCB3LWZ1bGwgaC1mdWxsIGp1c3RpZnktc3RhcnQgaXRlbXMtZW5kXCI+XG4gICAgICAgICAgICAgICAgICAgIDxDb2RlRWRpdG9yIGxhbmd1YWdlPXtsYW5ndWFnZS52YWx1ZX0gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHQtY29udGFpbmVyIGZsZXggZmxleC1zaHJpbmstMCB3LVszMCVdIGZsZXgtY29sXCI+XG4gICAgICAgICAgICAgICAgICAgIDxPdXRwdXRXaW5kb3cgLz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWVuZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEN1c3RvbUlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tSW5wdXQ9e2N1c3RvbUlucHV0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEN1c3RvbUlucHV0PXtzZXRDdXN0b21JbnB1dH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ29tcGlsZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFjb2RlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtdC00IGJvcmRlci0yIGJvcmRlci1ibGFjayB6LTEwIHJvdW5kZWQtbWQgc2hhZG93LVs1cHhfNXB4XzBweF8wcHhfcmdiYSgwLDAsMCldIHB4LTQgcHktMiBob3ZlcjpzaGFkb3cgdHJhbnNpdGlvbiBkdXJhdGlvbi0yMDAgYmctd2hpdGUgZmxleC1zaHJpbmstMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhY29kZSA/IFwib3BhY2l0eS01MFwiIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9jZXNzaW5nID8gXCJQcm9jZXNzaW5nLi4uXCIgOiBcIkNvbXBpbGUgYW5kIEV4ZWN1dGVcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICApXG59Il0sIm5hbWVzIjpbIkxhbmd1YWdlc0Ryb3Bkb3duIiwiQ29kZUVkaXRvciIsIlRvYXN0Q29udGFpbmVyIiwidG9hc3QiLCJSZWFjdCIsInVzZVN0YXRlIiwibGFuZ3VhZ2VPcHRpb25zIiwiY2xhc3NuYW1lcyIsIk91dHB1dFdpbmRvdyIsIkN1c3RvbUlucHV0IiwiamF2YXNjcmlwdERlZmF1bHQiLCJoYW5kbGVDb21waWxlciIsImNvbnNvbGUiLCJsb2ciLCJlcnIiLCJlcnJvciIsIm1lc3NhZ2UiLCJQYWdlIiwibGFuZ3VhZ2UiLCJzZXRMYW5ndWFnZSIsImNvZGUiLCJzZXRDb2RlIiwiY3VzdG9tSW5wdXQiLCJzZXRDdXN0b21JbnB1dCIsIm91dHB1dERldGFpbHMiLCJzZXRPdXRwdXREZXRhaWxzIiwicHJvY2Vzc2luZyIsInNldFByb2Nlc3NpbmciLCJvblNlbGVjdExhbmd1YWdlIiwiZGVzaXJlZExhbmd1YWdlIiwicG9zaXRpb24iLCJhdXRvQ2xvc2UiLCJoaWRlUHJvZ3Jlc3NCYXIiLCJuZXdlc3RPblRvcCIsImNsb3NlT25DbGljayIsInJ0bCIsInBhdXNlT25Gb2N1c0xvc3MiLCJkcmFnZ2FibGUiLCJwYXVzZU9uSG92ZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJ2YWx1ZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJkaXNhYmxlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/codeEditor/page.tsx\n"));

/***/ })

});