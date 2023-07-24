"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-client)/./components/Header/index.js":
/*!************************************!*\
  !*** ./components/Header/index.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Header_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Header.module.css */ \"(app-client)/./components/Header/Header.module.css\");\n/* harmony import */ var _Header_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Header_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/bi */ \"(app-client)/./node_modules/react-icons/bi/index.esm.js\");\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/ai */ \"(app-client)/./node_modules/react-icons/ai/index.esm.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-client)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _public_Marvel_Logo_svg_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public/Marvel_Logo.svg.png */ \"(app-client)/./public/Marvel_Logo.svg.png\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"(app-client)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"(app-client)/./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst Header = ()=>{\n    _s();\n    const [search, setSearch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    const handleSearch = ()=>{\n        // Verificar si el texto ingresado es un enlace directo de cómic\n        const comicRegex = /The\\sAmazing\\sSpider-Man\\s#\\d+/i;\n        if (comicRegex.test(search)) {\n            const comicName = search.match(comicRegex)[0];\n            router.push(\"/search?comic=\".concat(comicName));\n        } else {\n            router.push(\"/search?query=\".concat(search));\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: (_Header_module_css__WEBPACK_IMPORTED_MODULE_6___default().header),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Header_module_css__WEBPACK_IMPORTED_MODULE_6___default().logo),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                    href: \"/\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        src: _public_Marvel_Logo_svg_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                        alt: \"marvelLogo\"\n                    }, void 0, false, {\n                        fileName: \"/Users/franperci/Desktop/Personal/marvel-change/components/Header/index.js\",\n                        lineNumber: 30,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/franperci/Desktop/Personal/marvel-change/components/Header/index.js\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/franperci/Desktop/Personal/marvel-change/components/Header/index.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Header_module_css__WEBPACK_IMPORTED_MODULE_6___default().search),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"biSearch\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bi__WEBPACK_IMPORTED_MODULE_7__.BiSearch, {\n                            size: 25,\n                            onClick: handleSearch\n                        }, void 0, false, {\n                            fileName: \"/Users/franperci/Desktop/Personal/marvel-change/components/Header/index.js\",\n                            lineNumber: 37,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/franperci/Desktop/Personal/marvel-change/components/Header/index.js\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_Header_module_css__WEBPACK_IMPORTED_MODULE_6___default().searchInput),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            placeholder: \"Buscar\",\n                            value: search,\n                            onChange: (e)=>setSearch(e.target.value),\n                            onKeyDown: (e)=>{\n                                if (e.key === \"Enter\") {\n                                    handleSearch();\n                                }\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/franperci/Desktop/Personal/marvel-change/components/Header/index.js\",\n                            lineNumber: 40,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/franperci/Desktop/Personal/marvel-change/components/Header/index.js\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/franperci/Desktop/Personal/marvel-change/components/Header/index.js\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Header_module_css__WEBPACK_IMPORTED_MODULE_6___default().favorites),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_8__.AiOutlineStar, {\n                    size: 25\n                }, void 0, false, {\n                    fileName: \"/Users/franperci/Desktop/Personal/marvel-change/components/Header/index.js\",\n                    lineNumber: 56,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/franperci/Desktop/Personal/marvel-change/components/Header/index.js\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/franperci/Desktop/Personal/marvel-change/components/Header/index.js\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Header, \"N9tP0MPL4qItVfAzW5Hg4coRsTs=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9IZWFkZXIvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDd0M7QUFDQztBQUNDO0FBQ0s7QUFDaEI7QUFDMkI7QUFDN0I7QUFDVztBQUV4QyxNQUFNUyxTQUFTOztJQUNiLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHViwrQ0FBUUEsQ0FBQztJQUNyQyxNQUFNVyxTQUFTSixzREFBU0E7SUFFeEIsTUFBTUssZUFBZTtRQUNuQixnRUFBZ0U7UUFDaEUsTUFBTUMsYUFBYTtRQUNuQixJQUFJQSxXQUFXQyxJQUFJLENBQUNMLFNBQVM7WUFDM0IsTUFBTU0sWUFBWU4sT0FBT08sS0FBSyxDQUFDSCxXQUFXLENBQUMsRUFBRTtZQUM3Q0YsT0FBT00sSUFBSSxDQUFDLGlCQUEyQixPQUFWRjtRQUMvQixPQUFPO1lBQ0xKLE9BQU9NLElBQUksQ0FBQyxpQkFBd0IsT0FBUFI7UUFDL0I7SUFDRjtJQUVBLHFCQUNFLDhEQUFDUztRQUFPQyxXQUFXbEIsa0VBQWE7OzBCQUM5Qiw4REFBQ21CO2dCQUFJRCxXQUFXbEIsZ0VBQVc7MEJBQ3pCLDRFQUFDSyxrREFBSUE7b0JBQUNnQixNQUFLOzhCQUNULDRFQUFDbEIsbURBQUtBO3dCQUFDbUIsS0FBS2xCLG1FQUFVQTt3QkFBRW1CLEtBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBS2hDLDhEQUFDSjtnQkFBSUQsV0FBV2xCLGtFQUFhOztrQ0FDM0IsOERBQUNtQjt3QkFBSUQsV0FBVTtrQ0FDYiw0RUFBQ2pCLG9EQUFRQTs0QkFBQ3VCLE1BQU07NEJBQUlDLFNBQVNkOzs7Ozs7Ozs7OztrQ0FFL0IsOERBQUNRO3dCQUFJRCxXQUFXbEIsdUVBQWtCO2tDQUNoQyw0RUFBQzJCOzRCQUNDQyxNQUFLOzRCQUNMQyxhQUFZOzRCQUNaQyxPQUFPdEI7NEJBQ1B1QixVQUFVLENBQUNDLElBQU12QixVQUFVdUIsRUFBRUMsTUFBTSxDQUFDSCxLQUFLOzRCQUN6Q0ksV0FBVyxDQUFDRjtnQ0FDVixJQUFJQSxFQUFFRyxHQUFHLEtBQUssU0FBUztvQ0FDckJ4QjtnQ0FDRjs0QkFDRjs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBTU4sOERBQUNRO2dCQUFJRCxXQUFXbEIscUVBQWdCOzBCQUM5Qiw0RUFBQ0UseURBQWFBO29CQUFDc0IsTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJN0I7R0FqRE1qQjs7UUFFV0Qsa0RBQVNBOzs7S0FGcEJDO0FBbUROLCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvSGVhZGVyL2luZGV4LmpzP2RlMzciXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgeyBSZWFjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vSGVhZGVyLm1vZHVsZS5jc3NcIjtcbmltcG9ydCB7IEJpU2VhcmNoIH0gZnJvbSBcInJlYWN0LWljb25zL2JpXCI7XG5pbXBvcnQgeyBBaU91dGxpbmVTdGFyIH0gZnJvbSBcInJlYWN0LWljb25zL2FpXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBsb2dvTWFydmVsIGZyb20gXCIuLi8uLi9wdWJsaWMvTWFydmVsX0xvZ28uc3ZnLnBuZ1wiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcbiAgY29uc3QgW3NlYXJjaCwgc2V0U2VhcmNoXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBjb25zdCBoYW5kbGVTZWFyY2ggPSAoKSA9PiB7XG4gICAgLy8gVmVyaWZpY2FyIHNpIGVsIHRleHRvIGluZ3Jlc2FkbyBlcyB1biBlbmxhY2UgZGlyZWN0byBkZSBjw7NtaWNcbiAgICBjb25zdCBjb21pY1JlZ2V4ID0gL1RoZVxcc0FtYXppbmdcXHNTcGlkZXItTWFuXFxzI1xcZCsvaTtcbiAgICBpZiAoY29taWNSZWdleC50ZXN0KHNlYXJjaCkpIHtcbiAgICAgIGNvbnN0IGNvbWljTmFtZSA9IHNlYXJjaC5tYXRjaChjb21pY1JlZ2V4KVswXTtcbiAgICAgIHJvdXRlci5wdXNoKGAvc2VhcmNoP2NvbWljPSR7Y29taWNOYW1lfWApO1xuICAgIH0gZWxzZSB7XG4gICAgICByb3V0ZXIucHVzaChgL3NlYXJjaD9xdWVyeT0ke3NlYXJjaH1gKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8aGVhZGVyIGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvZ299PlxuICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgIDxJbWFnZSBzcmM9e2xvZ29NYXJ2ZWx9IGFsdD1cIm1hcnZlbExvZ29cIiAvPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L2Rpdj5cblxuICAgICAgey8qIEJ1c2NhZG9yIGVuIGVsIGNlbnRybyAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2VhcmNofT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiaVNlYXJjaFwiPlxuICAgICAgICAgIDxCaVNlYXJjaCBzaXplPXsyNX0gb25DbGljaz17aGFuZGxlU2VhcmNofSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zZWFyY2hJbnB1dH0+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkJ1c2NhclwiXG4gICAgICAgICAgICB2YWx1ZT17c2VhcmNofVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRTZWFyY2goZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgb25LZXlEb3duPXsoZSkgPT4ge1xuICAgICAgICAgICAgICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIikge1xuICAgICAgICAgICAgICAgIGhhbmRsZVNlYXJjaCgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIHsvKiBCb3TDs24gZGUgZmF2b3JpdG9zIGEgbGEgZGVyZWNoYSAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmF2b3JpdGVzfT5cbiAgICAgICAgPEFpT3V0bGluZVN0YXIgc2l6ZT17MjV9IC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2hlYWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwic3R5bGVzIiwiQmlTZWFyY2giLCJBaU91dGxpbmVTdGFyIiwiSW1hZ2UiLCJsb2dvTWFydmVsIiwiTGluayIsInVzZVJvdXRlciIsIkhlYWRlciIsInNlYXJjaCIsInNldFNlYXJjaCIsInJvdXRlciIsImhhbmRsZVNlYXJjaCIsImNvbWljUmVnZXgiLCJ0ZXN0IiwiY29taWNOYW1lIiwibWF0Y2giLCJwdXNoIiwiaGVhZGVyIiwiY2xhc3NOYW1lIiwiZGl2IiwibG9nbyIsImhyZWYiLCJzcmMiLCJhbHQiLCJzaXplIiwib25DbGljayIsInNlYXJjaElucHV0IiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsIm9uS2V5RG93biIsImtleSIsImZhdm9yaXRlcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./components/Header/index.js\n"));

/***/ })

});