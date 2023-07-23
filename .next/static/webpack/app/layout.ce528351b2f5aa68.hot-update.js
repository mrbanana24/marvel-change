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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Header_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Header.module.css */ \"(app-client)/./components/Header/Header.module.css\");\n/* harmony import */ var _Header_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Header_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/bi */ \"(app-client)/./node_modules/react-icons/bi/index.esm.js\");\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/ai */ \"(app-client)/./node_modules/react-icons/ai/index.esm.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-client)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _public_Marvel_Logo_svg_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public/Marvel_Logo.svg.png */ \"(app-client)/./public/Marvel_Logo.svg.png\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"(app-client)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/navigation */ \"(app-client)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_5__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst Header = ()=>{\n    _s();\n    const [search, setSearch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    const handleSearch = (e)=>{\n        if (e.key === \"Enter\") {\n            setSearch(\"\");\n            router.push(\"/search?query=\".concat(search));\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: (_Header_module_css__WEBPACK_IMPORTED_MODULE_6___default().header),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Header_module_css__WEBPACK_IMPORTED_MODULE_6___default().logo),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                    href: \"/\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        src: _public_Marvel_Logo_svg_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                        alt: \"marvelLogo\"\n                    }, void 0, false, {\n                        fileName: \"/Users/franperci/Desktop/Personal/marvel-change/components/Header/index.js\",\n                        lineNumber: 28,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/franperci/Desktop/Personal/marvel-change/components/Header/index.js\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/franperci/Desktop/Personal/marvel-change/components/Header/index.js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Header_module_css__WEBPACK_IMPORTED_MODULE_6___default().search),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"biSearch\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bi__WEBPACK_IMPORTED_MODULE_7__.BiSearch, {\n                            size: 25\n                        }, void 0, false, {\n                            fileName: \"/Users/franperci/Desktop/Personal/marvel-change/components/Header/index.js\",\n                            lineNumber: 35,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/franperci/Desktop/Personal/marvel-change/components/Header/index.js\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_Header_module_css__WEBPACK_IMPORTED_MODULE_6___default().searchInput),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            placeholder: \"Buscar\",\n                            value: search,\n                            onChange: (e)=>setSearch(e.target.value),\n                            onKeyDown: handleSearch\n                        }, void 0, false, {\n                            fileName: \"/Users/franperci/Desktop/Personal/marvel-change/components/Header/index.js\",\n                            lineNumber: 38,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/franperci/Desktop/Personal/marvel-change/components/Header/index.js\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/franperci/Desktop/Personal/marvel-change/components/Header/index.js\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Header_module_css__WEBPACK_IMPORTED_MODULE_6___default().favorites),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_8__.AiOutlineStar, {\n                    size: 25\n                }, void 0, false, {\n                    fileName: \"/Users/franperci/Desktop/Personal/marvel-change/components/Header/index.js\",\n                    lineNumber: 50,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/franperci/Desktop/Personal/marvel-change/components/Header/index.js\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/franperci/Desktop/Personal/marvel-change/components/Header/index.js\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Header, \"N9tP0MPL4qItVfAzW5Hg4coRsTs=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9IZWFkZXIvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFd0M7QUFDQztBQUNDO0FBQ0s7QUFDaEI7QUFDMkI7QUFDN0I7QUFDZTtBQUU1QyxNQUFNUyxTQUFTOztJQUNiLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHViwrQ0FBUUEsQ0FBQztJQUNyQyxNQUFNVyxTQUFTSiwwREFBU0E7SUFFeEIsTUFBTUssZUFBZSxDQUFDQztRQUNwQixJQUFJQSxFQUFFQyxHQUFHLEtBQUssU0FBUztZQUNyQkosVUFBVTtZQUNWQyxPQUFPSSxJQUFJLENBQUMsaUJBQXdCLE9BQVBOO1FBQy9CO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ087UUFBT0MsV0FBV2hCLGtFQUFhOzswQkFFOUIsOERBQUNpQjtnQkFBSUQsV0FBV2hCLGdFQUFXOzBCQUN6Qiw0RUFBQ0ssa0RBQUlBO29CQUFDYyxNQUFLOzhCQUNULDRFQUFDaEIsbURBQUtBO3dCQUFDaUIsS0FBS2hCLG1FQUFVQTt3QkFBRWlCLEtBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBS2hDLDhEQUFDSjtnQkFBSUQsV0FBV2hCLGtFQUFhOztrQ0FDM0IsOERBQUNpQjt3QkFBSUQsV0FBVTtrQ0FDYiw0RUFBQ2Ysb0RBQVFBOzRCQUFDcUIsTUFBTTs7Ozs7Ozs7Ozs7a0NBRWxCLDhEQUFDTDt3QkFBSUQsV0FBV2hCLHVFQUFrQjtrQ0FDaEMsNEVBQUN3Qjs0QkFDQ0MsTUFBSzs0QkFDTEMsYUFBWTs0QkFDWkMsT0FBT25COzRCQUNQb0IsVUFBVSxDQUFDaEIsSUFBTUgsVUFBVUcsRUFBRWlCLE1BQU0sQ0FBQ0YsS0FBSzs0QkFDekNHLFdBQVduQjs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBTWpCLDhEQUFDTTtnQkFBSUQsV0FBV2hCLHFFQUFnQjswQkFDOUIsNEVBQUNFLHlEQUFhQTtvQkFBQ29CLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSTdCO0dBMUNNZjs7UUFFV0Qsc0RBQVNBOzs7S0FGcEJDO0FBNENOLCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvSGVhZGVyL2luZGV4LmpzP2RlMzciXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCB7IFJlYWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9IZWFkZXIubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHsgQmlTZWFyY2ggfSBmcm9tIFwicmVhY3QtaWNvbnMvYmlcIjtcbmltcG9ydCB7IEFpT3V0bGluZVN0YXIgfSBmcm9tIFwicmVhY3QtaWNvbnMvYWlcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IGxvZ29NYXJ2ZWwgZnJvbSBcIi4uLy4uL3B1YmxpYy9NYXJ2ZWxfTG9nby5zdmcucG5nXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XG5cbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcbiAgY29uc3QgW3NlYXJjaCwgc2V0U2VhcmNoXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBjb25zdCBoYW5kbGVTZWFyY2ggPSAoZSkgPT4ge1xuICAgIGlmIChlLmtleSA9PT0gXCJFbnRlclwiKSB7XG4gICAgICBzZXRTZWFyY2goXCJcIik7XG4gICAgICByb3V0ZXIucHVzaChgL3NlYXJjaD9xdWVyeT0ke3NlYXJjaH1gKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8aGVhZGVyIGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn0+XG4gICAgICB7LyogTG9nbyAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG9nb30+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgPEltYWdlIHNyYz17bG9nb01hcnZlbH0gYWx0PVwibWFydmVsTG9nb1wiIC8+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7LyogQnVzY2Fkb3IgZW4gZWwgY2VudHJvICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zZWFyY2h9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJpU2VhcmNoXCI+XG4gICAgICAgICAgPEJpU2VhcmNoIHNpemU9ezI1fSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zZWFyY2hJbnB1dH0+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkJ1c2NhclwiXG4gICAgICAgICAgICB2YWx1ZT17c2VhcmNofVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRTZWFyY2goZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgb25LZXlEb3duPXtoYW5kbGVTZWFyY2h9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgey8qIEJvdMOzbiBkZSBmYXZvcml0b3MgYSBsYSBkZXJlY2hhICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mYXZvcml0ZXN9PlxuICAgICAgICA8QWlPdXRsaW5lU3RhciBzaXplPXsyNX0gLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvaGVhZGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJzdHlsZXMiLCJCaVNlYXJjaCIsIkFpT3V0bGluZVN0YXIiLCJJbWFnZSIsImxvZ29NYXJ2ZWwiLCJMaW5rIiwidXNlUm91dGVyIiwiSGVhZGVyIiwic2VhcmNoIiwic2V0U2VhcmNoIiwicm91dGVyIiwiaGFuZGxlU2VhcmNoIiwiZSIsImtleSIsInB1c2giLCJoZWFkZXIiLCJjbGFzc05hbWUiLCJkaXYiLCJsb2dvIiwiaHJlZiIsInNyYyIsImFsdCIsInNpemUiLCJzZWFyY2hJbnB1dCIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsIm9uS2V5RG93biIsImZhdm9yaXRlcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./components/Header/index.js\n"));

/***/ })

});