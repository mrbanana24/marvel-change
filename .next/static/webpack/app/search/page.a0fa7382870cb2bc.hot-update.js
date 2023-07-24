"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/search/page",{

/***/ "(app-client)/./src/app/search/page.js":
/*!********************************!*\
  !*** ./src/app/search/page.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/api */ \"(app-client)/./src/app/utils/api.js\");\n/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/Card */ \"(app-client)/./components/Card/index.js\");\n/* harmony import */ var _Search_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Search.module.css */ \"(app-client)/./src/app/search/Search.module.css\");\n/* harmony import */ var _Search_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Search_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"(app-client)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst searchPage = (param)=>{\n    let { query } = param;\n    _s();\n    const [characters, setCharacters] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    // La búsqueda tiene que contemplar buscar por similitudes de texto y parecidos de nombre, es decir, con solo buscar “spider” debería de renderizar todas las posibilidades y matches que abarcan.\n    // La búsqueda tiene que tener la posibilidad de buscar por comic directamente también\n    // y si es un link que viene directamente de la página de marvel(​The Amazing Spider-Man #22​) tiene que visualizar un preview del cómic.\n    // Para implementar esto se tiene que hacer un endpoint que busque por nombre de personaje y por nombre de comic, y que si es un comic, que devuelva el preview del comic.\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setLoading(true);\n        if (query) {\n            if (query.includes(\"#\")) {\n                const comicName = query.split(\"#\")[0];\n                const comicNumber = query.split(\"#\")[1];\n                (0,_utils_api__WEBPACK_IMPORTED_MODULE_2__.searchComics)(comicName).then((data)=>{\n                    const comic = data.data.results.find((comic)=>comic.issueNumber === comicNumber);\n                    if (comic) {\n                        setCharacters([\n                            comic\n                        ]);\n                    } else {\n                        setCharacters([]);\n                    }\n                    setLoading(false);\n                });\n            } else {\n                (0,_utils_api__WEBPACK_IMPORTED_MODULE_2__.searchCharacters)(query).then((data)=>{\n                    setCharacters(data.data.results);\n                    setLoading(false);\n                });\n            }\n        }\n    }, [\n        query\n    ]);\n    // La búsqueda tiene que tener la posibilidad de buscar por comic directamente también\n    // Si busco personajes mapeo en Card los personajes\n    // Si busco un comic, me tiene que mostrar el preview del comic\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_Search_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),\n        children: loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_Search_module_css__WEBPACK_IMPORTED_MODULE_5___default().loading),\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/Users/franperci/Desktop/Personal/marvel-change/src/app/search/page.js\",\n            lineNumber: 50,\n            columnNumber: 9\n        }, undefined) : characters.map((character)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                href: character.comics ? \"/comic/\".concat(character.id) : \"/character/\".concat(character.id),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Card__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        title: character.name,\n                        image: \"\".concat(character.thumbnail.path, \".\").concat(character.thumbnail.extension)\n                    }, character.id, false, {\n                        fileName: \"/Users/franperci/Desktop/Personal/marvel-change/src/app/search/page.js\",\n                        lineNumber: 62,\n                        columnNumber: 15\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/franperci/Desktop/Personal/marvel-change/src/app/search/page.js\",\n                    lineNumber: 61,\n                    columnNumber: 13\n                }, undefined)\n            }, character.id, false, {\n                fileName: \"/Users/franperci/Desktop/Personal/marvel-change/src/app/search/page.js\",\n                lineNumber: 53,\n                columnNumber: 11\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"/Users/franperci/Desktop/Personal/marvel-change/src/app/search/page.js\",\n        lineNumber: 48,\n        columnNumber: 5\n    }, undefined);\n};\n_s(searchPage, \"F4Bel/r5+qsDapoNh0LLGcdDZSA=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (searchPage);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2FwcC9zZWFyY2gvcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDNEM7QUFDa0I7QUFDbEI7QUFDSjtBQUNYO0FBRTdCLE1BQU1PLGFBQWE7UUFBQyxFQUFFQyxLQUFLLEVBQUU7O0lBQzNCLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHVCwrQ0FBUUEsQ0FBQyxFQUFFO0lBQy9DLE1BQU0sQ0FBQ1UsU0FBU0MsV0FBVyxHQUFHWCwrQ0FBUUEsQ0FBQztJQUV2QyxrTUFBa007SUFFbE0sc0ZBQXNGO0lBQ3RGLHlJQUF5STtJQUN6SSwwS0FBMEs7SUFFMUtELGdEQUFTQSxDQUFDO1FBQ1JZLFdBQVc7UUFDWCxJQUFJSixPQUFPO1lBQ1QsSUFBSUEsTUFBTUssUUFBUSxDQUFDLE1BQU07Z0JBQ3ZCLE1BQU1DLFlBQVlOLE1BQU1PLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDckMsTUFBTUMsY0FBY1IsTUFBTU8sS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUN2Q1osd0RBQVlBLENBQUNXLFdBQVdHLElBQUksQ0FBQyxDQUFDQztvQkFDNUIsTUFBTUMsUUFBUUQsS0FBS0EsSUFBSSxDQUFDRSxPQUFPLENBQUNDLElBQUksQ0FDbEMsQ0FBQ0YsUUFBVUEsTUFBTUcsV0FBVyxLQUFLTjtvQkFFbkMsSUFBSUcsT0FBTzt3QkFDVFQsY0FBYzs0QkFBQ1M7eUJBQU07b0JBQ3ZCLE9BQU87d0JBQ0xULGNBQWMsRUFBRTtvQkFDbEI7b0JBQ0FFLFdBQVc7Z0JBQ2I7WUFDRixPQUFPO2dCQUNMViw0REFBZ0JBLENBQUNNLE9BQU9TLElBQUksQ0FBQyxDQUFDQztvQkFDNUJSLGNBQWNRLEtBQUtBLElBQUksQ0FBQ0UsT0FBTztvQkFDL0JSLFdBQVc7Z0JBQ2I7WUFDRjtRQUNGO0lBQ0YsR0FBRztRQUFDSjtLQUFNO0lBRVYsc0ZBQXNGO0lBQ3RGLG1EQUFtRDtJQUNuRCwrREFBK0Q7SUFDL0QscUJBQ0UsOERBQUNlO1FBQUlDLFdBQVduQixxRUFBZTtrQkFDNUJNLHdCQUNDLDhEQUFDWTtZQUFJQyxXQUFXbkIsbUVBQWE7c0JBQUU7Ozs7O3dCQUUvQkksV0FBV2lCLEdBQUcsQ0FBQyxDQUFDQywwQkFDZCw4REFBQ3JCLGtEQUFJQTtnQkFDSHNCLE1BQ0VELFVBQVVFLE1BQU0sR0FDWixVQUF1QixPQUFiRixVQUFVRyxFQUFFLElBQ3RCLGNBQTJCLE9BQWJILFVBQVVHLEVBQUU7MEJBSWhDLDRFQUFDQzs4QkFDQyw0RUFBQzNCLHdEQUFJQTt3QkFFSDRCLE9BQU9MLFVBQVVNLElBQUk7d0JBQ3JCQyxPQUFPLEdBQStCUCxPQUE1QkEsVUFBVVEsU0FBUyxDQUFDQyxJQUFJLEVBQUMsS0FBaUMsT0FBOUJULFVBQVVRLFNBQVMsQ0FBQ0UsU0FBUzt1QkFGOURWLFVBQVVHLEVBQUU7Ozs7Ozs7Ozs7ZUFKaEJILFVBQVVHLEVBQUU7Ozs7Ozs7Ozs7QUFjN0I7R0FqRU12QjtBQW1FTiwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3NlYXJjaC9wYWdlLmpzPzZhYjYiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBzZWFyY2hDaGFyYWN0ZXJzLCBzZWFyY2hDb21pY3MgfSBmcm9tIFwiLi4vdXRpbHMvYXBpXCI7XG5pbXBvcnQgQ2FyZCBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9DYXJkXCI7XG5pbXBvcnQgU3R5bGUgZnJvbSBcIi4vU2VhcmNoLm1vZHVsZS5jc3NcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuY29uc3Qgc2VhcmNoUGFnZSA9ICh7IHF1ZXJ5IH0pID0+IHtcbiAgY29uc3QgW2NoYXJhY3RlcnMsIHNldENoYXJhY3RlcnNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgLy8gTGEgYsO6c3F1ZWRhIHRpZW5lIHF1ZSBjb250ZW1wbGFyIGJ1c2NhciBwb3Igc2ltaWxpdHVkZXMgZGUgdGV4dG8geSBwYXJlY2lkb3MgZGUgbm9tYnJlLCBlcyBkZWNpciwgY29uIHNvbG8gYnVzY2FyIOKAnHNwaWRlcuKAnSBkZWJlcsOtYSBkZSByZW5kZXJpemFyIHRvZGFzIGxhcyBwb3NpYmlsaWRhZGVzIHkgbWF0Y2hlcyBxdWUgYWJhcmNhbi5cblxuICAvLyBMYSBiw7pzcXVlZGEgdGllbmUgcXVlIHRlbmVyIGxhIHBvc2liaWxpZGFkIGRlIGJ1c2NhciBwb3IgY29taWMgZGlyZWN0YW1lbnRlIHRhbWJpw6luXG4gIC8vIHkgc2kgZXMgdW4gbGluayBxdWUgdmllbmUgZGlyZWN0YW1lbnRlIGRlIGxhIHDDoWdpbmEgZGUgbWFydmVsKOKAi1RoZSBBbWF6aW5nIFNwaWRlci1NYW4gIzIy4oCLKSB0aWVuZSBxdWUgdmlzdWFsaXphciB1biBwcmV2aWV3IGRlbCBjw7NtaWMuXG4gIC8vIFBhcmEgaW1wbGVtZW50YXIgZXN0byBzZSB0aWVuZSBxdWUgaGFjZXIgdW4gZW5kcG9pbnQgcXVlIGJ1c3F1ZSBwb3Igbm9tYnJlIGRlIHBlcnNvbmFqZSB5IHBvciBub21icmUgZGUgY29taWMsIHkgcXVlIHNpIGVzIHVuIGNvbWljLCBxdWUgZGV2dWVsdmEgZWwgcHJldmlldyBkZWwgY29taWMuXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgIGlmIChxdWVyeSkge1xuICAgICAgaWYgKHF1ZXJ5LmluY2x1ZGVzKFwiI1wiKSkge1xuICAgICAgICBjb25zdCBjb21pY05hbWUgPSBxdWVyeS5zcGxpdChcIiNcIilbMF07XG4gICAgICAgIGNvbnN0IGNvbWljTnVtYmVyID0gcXVlcnkuc3BsaXQoXCIjXCIpWzFdO1xuICAgICAgICBzZWFyY2hDb21pY3MoY29taWNOYW1lKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgY29uc3QgY29taWMgPSBkYXRhLmRhdGEucmVzdWx0cy5maW5kKFxuICAgICAgICAgICAgKGNvbWljKSA9PiBjb21pYy5pc3N1ZU51bWJlciA9PT0gY29taWNOdW1iZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGlmIChjb21pYykge1xuICAgICAgICAgICAgc2V0Q2hhcmFjdGVycyhbY29taWNdKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0Q2hhcmFjdGVycyhbXSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNlYXJjaENoYXJhY3RlcnMocXVlcnkpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICBzZXRDaGFyYWN0ZXJzKGRhdGEuZGF0YS5yZXN1bHRzKTtcbiAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9LCBbcXVlcnldKTtcblxuICAvLyBMYSBiw7pzcXVlZGEgdGllbmUgcXVlIHRlbmVyIGxhIHBvc2liaWxpZGFkIGRlIGJ1c2NhciBwb3IgY29taWMgZGlyZWN0YW1lbnRlIHRhbWJpw6luXG4gIC8vIFNpIGJ1c2NvIHBlcnNvbmFqZXMgbWFwZW8gZW4gQ2FyZCBsb3MgcGVyc29uYWplc1xuICAvLyBTaSBidXNjbyB1biBjb21pYywgbWUgdGllbmUgcXVlIG1vc3RyYXIgZWwgcHJldmlldyBkZWwgY29taWNcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuY29udGFpbmVyfT5cbiAgICAgIHtsb2FkaW5nID8gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUubG9hZGluZ30+TG9hZGluZy4uLjwvZGl2PlxuICAgICAgKSA6IChcbiAgICAgICAgY2hhcmFjdGVycy5tYXAoKGNoYXJhY3RlcikgPT4gKFxuICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICBocmVmPXtcbiAgICAgICAgICAgICAgY2hhcmFjdGVyLmNvbWljc1xuICAgICAgICAgICAgICAgID8gYC9jb21pYy8ke2NoYXJhY3Rlci5pZH1gXG4gICAgICAgICAgICAgICAgOiBgL2NoYXJhY3Rlci8ke2NoYXJhY3Rlci5pZH1gXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBrZXk9e2NoYXJhY3Rlci5pZH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgPENhcmRcbiAgICAgICAgICAgICAgICBrZXk9e2NoYXJhY3Rlci5pZH1cbiAgICAgICAgICAgICAgICB0aXRsZT17Y2hhcmFjdGVyLm5hbWV9XG4gICAgICAgICAgICAgICAgaW1hZ2U9e2Ake2NoYXJhY3Rlci50aHVtYm5haWwucGF0aH0uJHtjaGFyYWN0ZXIudGh1bWJuYWlsLmV4dGVuc2lvbn1gfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgKSlcbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzZWFyY2hQYWdlO1xuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwic2VhcmNoQ2hhcmFjdGVycyIsInNlYXJjaENvbWljcyIsIkNhcmQiLCJTdHlsZSIsIkxpbmsiLCJzZWFyY2hQYWdlIiwicXVlcnkiLCJjaGFyYWN0ZXJzIiwic2V0Q2hhcmFjdGVycyIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiaW5jbHVkZXMiLCJjb21pY05hbWUiLCJzcGxpdCIsImNvbWljTnVtYmVyIiwidGhlbiIsImRhdGEiLCJjb21pYyIsInJlc3VsdHMiLCJmaW5kIiwiaXNzdWVOdW1iZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJtYXAiLCJjaGFyYWN0ZXIiLCJocmVmIiwiY29taWNzIiwiaWQiLCJhIiwidGl0bGUiLCJuYW1lIiwiaW1hZ2UiLCJ0aHVtYm5haWwiLCJwYXRoIiwiZXh0ZW5zaW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./src/app/search/page.js\n"));

/***/ })

});