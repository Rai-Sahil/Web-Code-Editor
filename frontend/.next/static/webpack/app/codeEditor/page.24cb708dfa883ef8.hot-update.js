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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Page; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _languageDropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./languageDropdown */ \"(app-pages-browser)/./src/app/codeEditor/languageDropdown.tsx\");\n/* harmony import */ var _codeEditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./codeEditor */ \"(app-pages-browser)/./src/app/codeEditor/codeEditor.tsx\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify */ \"(app-pages-browser)/./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _contants_languageOptions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/contants/languageOptions */ \"(app-pages-browser)/./src/contants/languageOptions.js\");\n/* harmony import */ var _contants_general__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/contants/general */ \"(app-pages-browser)/./src/contants/general.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst javascriptDefault = \"// comments\";\nconst handleCompiler = async ()=>{\n    try {\n        console.log(\"compiling code...\");\n    // TODO Add compiler logic here\n    } catch (err) {\n        react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.error(err.message);\n    }\n};\nfunction Page() {\n    _s();\n    const [language, setLanguage] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(_contants_languageOptions__WEBPACK_IMPORTED_MODULE_5__.languageOptions[0]);\n    const [code, setCode] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(javascriptDefault);\n    const [customInput, setCustomInput] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\");\n    const [outputDetails, setOutputDetails] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null);\n    const [processing, setProcessing] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    const onSelectLanguage = (desiredLanguage)=>{\n        console.log(\"selected language is...\", desiredLanguage);\n        setLanguage(desiredLanguage);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_3__.ToastContainer, {\n                position: \"top-right\",\n                autoClose: 2000,\n                hideProgressBar: false,\n                newestOnTop: false,\n                closeOnClick: true,\n                rtl: false,\n                pauseOnFocusLoss: true,\n                draggable: true,\n                pauseOnHover: true\n            }, void 0, false, {\n                fileName: \"/Users/sahilrai/Dev/Code Editor/frontend/src/app/codeEditor/page.tsx\",\n                lineNumber: 37,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"h-2 w-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500\"\n            }, void 0, false, {\n                fileName: \"/Users/sahilrai/Dev/Code Editor/frontend/src/app/codeEditor/page.tsx\",\n                lineNumber: 48,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center items-center v-screen\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"px-4 py-2\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_languageDropdown__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        className: \"mt-4 border-2 border-black z-10 rounded-md shadow-[5px_5px_0px_0px_rgba(0,0,0)] px-4 py-2 hover:shadow transition duration-200 bg-white flex-shrink-0\",\n                        onSelectLanguage: onSelectLanguage\n                    }, void 0, false, {\n                        fileName: \"/Users/sahilrai/Dev/Code Editor/frontend/src/app/codeEditor/page.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/sahilrai/Dev/Code Editor/frontend/src/app/codeEditor/page.tsx\",\n                    lineNumber: 50,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/sahilrai/Dev/Code Editor/frontend/src/app/codeEditor/page.tsx\",\n                lineNumber: 49,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row space-x-4 items-start px-4 py-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col w-full h-full justify-start items-end\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_codeEditor__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            language: language.value\n                        }, void 0, false, {\n                            fileName: \"/Users/sahilrai/Dev/Code Editor/frontend/src/app/codeEditor/page.tsx\",\n                            lineNumber: 56,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/sahilrai/Dev/Code Editor/frontend/src/app/codeEditor/page.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"right-container flex flex-shrink-0 w-[30%] flex-col\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col items-end\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: handleCompiler,\n                                disabled: !code,\n                                className: (0,_contants_general__WEBPACK_IMPORTED_MODULE_6__.classnames)(\"mt-4 border-2 border-black z-10 rounded-md shadow-[5px_5px_0px_0px_rgba(0,0,0)] px-4 py-2 hover:shadow transition duration-200 bg-white flex-shrink-0\", !code ? \"opacity-50\" : \"\"),\n                                children: processing ? \"Processing...\" : \"Compile and Execute\"\n                            }, void 0, false, {\n                                fileName: \"/Users/sahilrai/Dev/Code Editor/frontend/src/app/codeEditor/page.tsx\",\n                                lineNumber: 60,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/sahilrai/Dev/Code Editor/frontend/src/app/codeEditor/page.tsx\",\n                            lineNumber: 59,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/sahilrai/Dev/Code Editor/frontend/src/app/codeEditor/page.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sahilrai/Dev/Code Editor/frontend/src/app/codeEditor/page.tsx\",\n                lineNumber: 54,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Page, \"BHc0OiQNrfJ+CahoN6FDY0XMMbw=\");\n_c = Page;\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29kZUVkaXRvci9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUVrRDtBQUNiO0FBQ2tCO0FBQ2Y7QUFDcUI7QUFFYjtBQUVoRCxNQUFNUSxvQkFBcUI7QUFFM0IsTUFBTUMsaUJBQWlCO0lBQ25CLElBQUk7UUFDQUMsUUFBUUMsR0FBRyxDQUFDO0lBQ1osK0JBQStCO0lBQ25DLEVBQUUsT0FBT0MsS0FBVTtRQUNmVCxpREFBS0EsQ0FBQ1UsS0FBSyxDQUFDRCxJQUFJRSxPQUFPO0lBQzNCO0FBQ0o7QUFFZSxTQUFTQzs7SUFFcEIsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdaLCtDQUFRQSxDQUFDQyxzRUFBZSxDQUFDLEVBQUU7SUFDM0QsTUFBTSxDQUFDWSxNQUFNQyxRQUFRLEdBQUdkLCtDQUFRQSxDQUFDRztJQUNqQyxNQUFNLENBQUNZLGFBQWFDLGVBQWUsR0FBR2hCLCtDQUFRQSxDQUFDO0lBQy9DLE1BQU0sQ0FBQ2lCLGVBQWVDLGlCQUFpQixHQUFHbEIsK0NBQVFBLENBQUM7SUFDbkQsTUFBTSxDQUFDbUIsWUFBWUMsY0FBYyxHQUFHcEIsK0NBQVFBLENBQUM7SUFFN0MsTUFBTXFCLG1CQUFtQixDQUFDQztRQUN0QmpCLFFBQVFDLEdBQUcsQ0FBQywyQkFBMkJnQjtRQUN2Q1YsWUFBWVU7SUFDaEI7SUFFQSxxQkFDSTs7MEJBQ0ksOERBQUN6QiwwREFBY0E7Z0JBQ1gwQixVQUFTO2dCQUNUQyxXQUFZO2dCQUNaQyxpQkFBa0I7Z0JBQ2xCQyxhQUFjO2dCQUNkQyxZQUFZO2dCQUNaQyxLQUFNO2dCQUNOQyxnQkFBZ0I7Z0JBQ2hCQyxTQUFTO2dCQUNUQyxZQUFZOzs7Ozs7MEJBRWhCLDhEQUFDQztnQkFBSUMsV0FBVTs7Ozs7OzBCQUNmLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDWCw0RUFBQ0Q7b0JBQUlDLFdBQVU7OEJBQ1gsNEVBQUN0Qyx5REFBaUJBO3dCQUFDc0MsV0FBVTt3QkFBd0paLGtCQUFtQkE7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBR2hOLDhEQUFDVztnQkFBSUMsV0FBVTs7a0NBQ1gsOERBQUNEO3dCQUFJQyxXQUFVO2tDQUNYLDRFQUFDckMsbURBQVVBOzRCQUFDZSxVQUFXQSxTQUFTdUIsS0FBSzs7Ozs7Ozs7Ozs7a0NBRXpDLDhEQUFDRjt3QkFBSUMsV0FBVTtrQ0FDWCw0RUFBQ0Q7NEJBQUlDLFdBQVU7c0NBQ1gsNEVBQUNFO2dDQUNHQyxTQUFVaEM7Z0NBQ1ZpQyxVQUFXLENBQUN4QjtnQ0FDWm9CLFdBQVkvQiw2REFBVUEsQ0FDbEIseUpBQ0EsQ0FBQ1csT0FBTyxlQUFlOzBDQUV6Qk0sYUFBYSxrQkFBa0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU83RDtHQXBEd0JUO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29kZUVkaXRvci9wYWdlLnRzeD9lNTllIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgTGFuZ3VhZ2VzRHJvcGRvd24gZnJvbSBcIi4vbGFuZ3VhZ2VEcm9wZG93blwiXG5pbXBvcnQgQ29kZUVkaXRvciBmcm9tIFwiLi9jb2RlRWRpdG9yXCJcbmltcG9ydCB7IFRvYXN0Q29udGFpbmVyLCB0b2FzdCB9IGZyb20gXCJyZWFjdC10b2FzdGlmeVwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBsYW5ndWFnZU9wdGlvbnMgfSBmcm9tIFwiQC9jb250YW50cy9sYW5ndWFnZU9wdGlvbnNcIjtcbmltcG9ydCB7IExhbmd1YWdlT3B0aW9uUHJvcHMgfSBmcm9tIFwiQC9pbnRlcmZhY2VzL0NvbW1vbkludGVyZmFjZXNcIjtcbmltcG9ydCB7IGNsYXNzbmFtZXMgfSBmcm9tIFwiQC9jb250YW50cy9nZW5lcmFsXCI7XG5cbmNvbnN0IGphdmFzY3JpcHREZWZhdWx0ID0gYC8vIGNvbW1lbnRzYDtcblxuY29uc3QgaGFuZGxlQ29tcGlsZXIgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc29sZS5sb2coJ2NvbXBpbGluZyBjb2RlLi4uJyk7XG4gICAgICAgIC8vIFRPRE8gQWRkIGNvbXBpbGVyIGxvZ2ljIGhlcmVcbiAgICB9IGNhdGNoIChlcnI6IGFueSkge1xuICAgICAgICB0b2FzdC5lcnJvcihlcnIubWVzc2FnZSk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYWdlKCkge1xuXG4gICAgY29uc3QgW2xhbmd1YWdlLCBzZXRMYW5ndWFnZV0gPSB1c2VTdGF0ZShsYW5ndWFnZU9wdGlvbnNbMF0pO1xuICAgIGNvbnN0IFtjb2RlLCBzZXRDb2RlXSA9IHVzZVN0YXRlKGphdmFzY3JpcHREZWZhdWx0KTtcbiAgICBjb25zdCBbY3VzdG9tSW5wdXQsIHNldEN1c3RvbUlucHV0XSA9IHVzZVN0YXRlKFwiXCIpO1xuICAgIGNvbnN0IFtvdXRwdXREZXRhaWxzLCBzZXRPdXRwdXREZXRhaWxzXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIGNvbnN0IFtwcm9jZXNzaW5nLCBzZXRQcm9jZXNzaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIGNvbnN0IG9uU2VsZWN0TGFuZ3VhZ2UgPSAoZGVzaXJlZExhbmd1YWdlOiBMYW5ndWFnZU9wdGlvblByb3BzKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdzZWxlY3RlZCBsYW5ndWFnZSBpcy4uLicsIGRlc2lyZWRMYW5ndWFnZSk7XG4gICAgICAgIHNldExhbmd1YWdlKGRlc2lyZWRMYW5ndWFnZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxUb2FzdENvbnRhaW5lclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uPVwidG9wLXJpZ2h0XCJcbiAgICAgICAgICAgICAgICBhdXRvQ2xvc2U9eyAyMDAwIH1cbiAgICAgICAgICAgICAgICBoaWRlUHJvZ3Jlc3NCYXI9eyBmYWxzZSB9XG4gICAgICAgICAgICAgICAgbmV3ZXN0T25Ub3A9eyBmYWxzZSB9XG4gICAgICAgICAgICAgICAgY2xvc2VPbkNsaWNrXG4gICAgICAgICAgICAgICAgcnRsPXsgZmFsc2UgfVxuICAgICAgICAgICAgICAgIHBhdXNlT25Gb2N1c0xvc3NcbiAgICAgICAgICAgICAgICBkcmFnZ2FibGVcbiAgICAgICAgICAgICAgICBwYXVzZU9uSG92ZXJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtMiB3LWZ1bGwgYmctZ3JhZGllbnQtdG8tciBmcm9tLXBpbmstNTAwIHZpYS1yZWQtNTAwIHRvLXllbGxvdy01MDBcIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgdi1zY3JlZW5cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTQgcHktMlwiPlxuICAgICAgICAgICAgICAgICAgICA8TGFuZ3VhZ2VzRHJvcGRvd24gY2xhc3NOYW1lPVwibXQtNCBib3JkZXItMiBib3JkZXItYmxhY2sgei0xMCByb3VuZGVkLW1kIHNoYWRvdy1bNXB4XzVweF8wcHhfMHB4X3JnYmEoMCwwLDApXSBweC00IHB5LTIgaG92ZXI6c2hhZG93IHRyYW5zaXRpb24gZHVyYXRpb24tMjAwIGJnLXdoaXRlIGZsZXgtc2hyaW5rLTBcIiBvblNlbGVjdExhbmd1YWdlPXsgb25TZWxlY3RMYW5ndWFnZSB9IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBzcGFjZS14LTQgaXRlbXMtc3RhcnQgcHgtNCBweS00XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHctZnVsbCBoLWZ1bGwganVzdGlmeS1zdGFydCBpdGVtcy1lbmRcIj5cbiAgICAgICAgICAgICAgICAgICAgPENvZGVFZGl0b3IgbGFuZ3VhZ2U9eyBsYW5ndWFnZS52YWx1ZSB9IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodC1jb250YWluZXIgZmxleCBmbGV4LXNocmluay0wIHctWzMwJV0gZmxleC1jb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWVuZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyBoYW5kbGVDb21waWxlciB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyAhY29kZSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsgY2xhc3NuYW1lcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtdC00IGJvcmRlci0yIGJvcmRlci1ibGFjayB6LTEwIHJvdW5kZWQtbWQgc2hhZG93LVs1cHhfNXB4XzBweF8wcHhfcmdiYSgwLDAsMCldIHB4LTQgcHktMiBob3ZlcjpzaGFkb3cgdHJhbnNpdGlvbiBkdXJhdGlvbi0yMDAgYmctd2hpdGUgZmxleC1zaHJpbmstMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhY29kZSA/IFwib3BhY2l0eS01MFwiIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHByb2Nlc3NpbmcgPyBcIlByb2Nlc3NpbmcuLi5cIiA6IFwiQ29tcGlsZSBhbmQgRXhlY3V0ZVwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICApXG59Il0sIm5hbWVzIjpbIkxhbmd1YWdlc0Ryb3Bkb3duIiwiQ29kZUVkaXRvciIsIlRvYXN0Q29udGFpbmVyIiwidG9hc3QiLCJSZWFjdCIsInVzZVN0YXRlIiwibGFuZ3VhZ2VPcHRpb25zIiwiY2xhc3NuYW1lcyIsImphdmFzY3JpcHREZWZhdWx0IiwiaGFuZGxlQ29tcGlsZXIiLCJjb25zb2xlIiwibG9nIiwiZXJyIiwiZXJyb3IiLCJtZXNzYWdlIiwiUGFnZSIsImxhbmd1YWdlIiwic2V0TGFuZ3VhZ2UiLCJjb2RlIiwic2V0Q29kZSIsImN1c3RvbUlucHV0Iiwic2V0Q3VzdG9tSW5wdXQiLCJvdXRwdXREZXRhaWxzIiwic2V0T3V0cHV0RGV0YWlscyIsInByb2Nlc3NpbmciLCJzZXRQcm9jZXNzaW5nIiwib25TZWxlY3RMYW5ndWFnZSIsImRlc2lyZWRMYW5ndWFnZSIsInBvc2l0aW9uIiwiYXV0b0Nsb3NlIiwiaGlkZVByb2dyZXNzQmFyIiwibmV3ZXN0T25Ub3AiLCJjbG9zZU9uQ2xpY2siLCJydGwiLCJwYXVzZU9uRm9jdXNMb3NzIiwiZHJhZ2dhYmxlIiwicGF1c2VPbkhvdmVyIiwiZGl2IiwiY2xhc3NOYW1lIiwidmFsdWUiLCJidXR0b24iLCJvbkNsaWNrIiwiZGlzYWJsZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/codeEditor/page.tsx\n"));

/***/ })

});