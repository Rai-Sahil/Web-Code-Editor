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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Page; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _languageDropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./languageDropdown */ \"(app-pages-browser)/./src/app/codeEditor/languageDropdown.tsx\");\n/* harmony import */ var _codeEditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./codeEditor */ \"(app-pages-browser)/./src/app/codeEditor/codeEditor.tsx\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify */ \"(app-pages-browser)/../node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _contants_languageOptions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/contants/languageOptions */ \"(app-pages-browser)/./src/contants/languageOptions.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Page() {\n    _s();\n    const [language, setLanguage] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(_contants_languageOptions__WEBPACK_IMPORTED_MODULE_5__.languageOptions[0]);\n    const onSelectLanguage = (desiredLanguage)=>{\n        console.log(\"selected language is...\", desiredLanguage);\n        setLanguage(desiredLanguage);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_3__.ToastContainer, {\n                position: \"top-right\",\n                autoClose: 2000,\n                hideProgressBar: false,\n                newestOnTop: false,\n                closeOnClick: true,\n                rtl: false,\n                pauseOnFocusLoss: true,\n                draggable: true,\n                pauseOnHover: true\n            }, void 0, false, {\n                fileName: \"/Users/sahilrai/Dev/Code Editor/frontend/src/app/codeEditor/page.tsx\",\n                lineNumber: 27,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"h-3 w-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500\"\n            }, void 0, false, {\n                fileName: \"/Users/sahilrai/Dev/Code Editor/frontend/src/app/codeEditor/page.tsx\",\n                lineNumber: 38,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"px-4 py-2\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_languageDropdown__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        onSelectLanguage: onSelectLanguage\n                    }, void 0, false, {\n                        fileName: \"/Users/sahilrai/Dev/Code Editor/frontend/src/app/codeEditor/page.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/sahilrai/Dev/Code Editor/frontend/src/app/codeEditor/page.tsx\",\n                    lineNumber: 40,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/sahilrai/Dev/Code Editor/frontend/src/app/codeEditor/page.tsx\",\n                lineNumber: 39,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row space-x-4 items-start px-4 py-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col w-full h-full justify-start items-end\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_codeEditor__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            language: language.value\n                        }, void 0, false, {\n                            fileName: \"/Users/sahilrai/Dev/Code Editor/frontend/src/app/codeEditor/page.tsx\",\n                            lineNumber: 46,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/sahilrai/Dev/Code Editor/frontend/src/app/codeEditor/page.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"right-container flex flex-shrink-0 w-[30%] flex-col\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sahilrai/Dev/Code Editor/frontend/src/app/codeEditor/page.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sahilrai/Dev/Code Editor/frontend/src/app/codeEditor/page.tsx\",\n                lineNumber: 44,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Page, \"GjCQDr647x9KORrxIBZKlKGlXFE=\");\n_c = Page;\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29kZUVkaXRvci9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBRWtEO0FBQ2I7QUFDa0I7QUFDZjtBQUNxQjtBQVM5QyxTQUFTTTs7SUFFcEIsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdKLCtDQUFRQSxDQUFDQyxzRUFBZSxDQUFDLEVBQUU7SUFFM0QsTUFBTUksbUJBQW1CLENBQUNDO1FBQ3RCQyxRQUFRQyxHQUFHLENBQUMsMkJBQTJCRjtRQUN2Q0YsWUFBWUU7SUFDaEI7SUFFQSxxQkFDSTs7MEJBQ0ksOERBQUNSLDBEQUFjQTtnQkFDWFcsVUFBUztnQkFDVEMsV0FBVztnQkFDWEMsaUJBQWlCO2dCQUNqQkMsYUFBYTtnQkFDYkMsWUFBWTtnQkFDWkMsS0FBSztnQkFDTEMsZ0JBQWdCO2dCQUNoQkMsU0FBUztnQkFDVEMsWUFBWTs7Ozs7OzBCQUVoQiw4REFBQ0M7Z0JBQUlDLFdBQVU7Ozs7OzswQkFDZiw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ1gsNEVBQUNEO29CQUFJQyxXQUFVOzhCQUNYLDRFQUFDdkIseURBQWlCQTt3QkFBQ1Msa0JBQWtCQTs7Ozs7Ozs7Ozs7Ozs7OzswQkFHN0MsOERBQUNhO2dCQUFJQyxXQUFVOztrQ0FDWCw4REFBQ0Q7d0JBQUlDLFdBQVU7a0NBQ1gsNEVBQUN0QixtREFBVUE7NEJBQUNNLFVBQVdBLFNBQVNpQixLQUFLOzs7Ozs7Ozs7OztrQ0FFekMsOERBQUNGO3dCQUFJQyxXQUFVOzs7Ozs7Ozs7Ozs7OztBQU0vQjtHQXRDd0JqQjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvZGVFZGl0b3IvcGFnZS50c3g/ZTU5ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IExhbmd1YWdlc0Ryb3Bkb3duIGZyb20gXCIuL2xhbmd1YWdlRHJvcGRvd25cIlxuaW1wb3J0IENvZGVFZGl0b3IgZnJvbSBcIi4vY29kZUVkaXRvclwiXG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lciwgdG9hc3QgfSBmcm9tIFwicmVhY3QtdG9hc3RpZnlcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgbGFuZ3VhZ2VPcHRpb25zIH0gZnJvbSBcIkAvY29udGFudHMvbGFuZ3VhZ2VPcHRpb25zXCI7XG5cbmludGVyZmFjZSBMYW5ndWFnZU9wdGlvbiB7XG4gICAgaWQ6IG51bWJlcjtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgdmFsdWU6IHN0cmluZztcbiAgICBsYWJlbDogc3RyaW5nO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYWdlKCkge1xuXG4gICAgY29uc3QgW2xhbmd1YWdlLCBzZXRMYW5ndWFnZV0gPSB1c2VTdGF0ZShsYW5ndWFnZU9wdGlvbnNbMF0pO1xuXG4gICAgY29uc3Qgb25TZWxlY3RMYW5ndWFnZSA9IChkZXNpcmVkTGFuZ3VhZ2U6IExhbmd1YWdlT3B0aW9uKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdzZWxlY3RlZCBsYW5ndWFnZSBpcy4uLicsIGRlc2lyZWRMYW5ndWFnZSk7XG4gICAgICAgIHNldExhbmd1YWdlKGRlc2lyZWRMYW5ndWFnZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxUb2FzdENvbnRhaW5lclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uPVwidG9wLXJpZ2h0XCJcbiAgICAgICAgICAgICAgICBhdXRvQ2xvc2U9ezIwMDB9XG4gICAgICAgICAgICAgICAgaGlkZVByb2dyZXNzQmFyPXtmYWxzZX1cbiAgICAgICAgICAgICAgICBuZXdlc3RPblRvcD17ZmFsc2V9XG4gICAgICAgICAgICAgICAgY2xvc2VPbkNsaWNrXG4gICAgICAgICAgICAgICAgcnRsPXtmYWxzZX1cbiAgICAgICAgICAgICAgICBwYXVzZU9uRm9jdXNMb3NzXG4gICAgICAgICAgICAgICAgZHJhZ2dhYmxlXG4gICAgICAgICAgICAgICAgcGF1c2VPbkhvdmVyXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLTMgdy1mdWxsIGJnLWdyYWRpZW50LXRvLXIgZnJvbS1waW5rLTUwMCB2aWEtcmVkLTUwMCB0by15ZWxsb3ctNTAwXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3dcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTQgcHktMlwiPlxuICAgICAgICAgICAgICAgICAgICA8TGFuZ3VhZ2VzRHJvcGRvd24gb25TZWxlY3RMYW5ndWFnZT17b25TZWxlY3RMYW5ndWFnZX0gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IHNwYWNlLXgtNCBpdGVtcy1zdGFydCBweC00IHB5LTRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgdy1mdWxsIGgtZnVsbCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWVuZFwiPlxuICAgICAgICAgICAgICAgICAgICA8Q29kZUVkaXRvciBsYW5ndWFnZT17IGxhbmd1YWdlLnZhbHVlIH0vPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHQtY29udGFpbmVyIGZsZXggZmxleC1zaHJpbmstMCB3LVszMCVdIGZsZXgtY29sXCI+XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICApXG59Il0sIm5hbWVzIjpbIkxhbmd1YWdlc0Ryb3Bkb3duIiwiQ29kZUVkaXRvciIsIlRvYXN0Q29udGFpbmVyIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImxhbmd1YWdlT3B0aW9ucyIsIlBhZ2UiLCJsYW5ndWFnZSIsInNldExhbmd1YWdlIiwib25TZWxlY3RMYW5ndWFnZSIsImRlc2lyZWRMYW5ndWFnZSIsImNvbnNvbGUiLCJsb2ciLCJwb3NpdGlvbiIsImF1dG9DbG9zZSIsImhpZGVQcm9ncmVzc0JhciIsIm5ld2VzdE9uVG9wIiwiY2xvc2VPbkNsaWNrIiwicnRsIiwicGF1c2VPbkZvY3VzTG9zcyIsImRyYWdnYWJsZSIsInBhdXNlT25Ib3ZlciIsImRpdiIsImNsYXNzTmFtZSIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/codeEditor/page.tsx\n"));

/***/ })

});