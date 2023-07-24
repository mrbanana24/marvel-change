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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/api */ \"(app-client)/./src/app/utils/api.js\");\n/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/Card */ \"(app-client)/./components/Card/index.js\");\n/* harmony import */ var _Search_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Search.module.css */ \"(app-client)/./src/app/search/Search.module.css\");\n/* harmony import */ var _Search_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Search_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"(app-client)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst searchPage = (param)=>{\n    let { query } = param;\n    _s();\n    const [characters, setCharacters] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [comic, setComic] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const getComic = (title)=>{\n        (0,_utils_api__WEBPACK_IMPORTED_MODULE_2__.searchComics)(title).then((data)=>{\n            setComic(data.data.results[0]);\n        });\n        console.log(\"ESTO ES EL COMIC POR TITULO\", comic);\n    };\n    getComic(\"​The Amazing Spider-Man #22​\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setLoading(true);\n        if (query) {\n            if (query.includes(\"#\")) {\n                const comicName = query.split(\"#\")[0];\n                const comicNumber = query.split(\"#\")[1];\n                (0,_utils_api__WEBPACK_IMPORTED_MODULE_2__.searchComics)(comicName).then((data)=>{\n                    const comic = data.data.results.find((comic)=>comic.issueNumber === comicNumber);\n                    if (comic) {\n                        setCharacters([\n                            comic\n                        ]);\n                    } else {\n                        setCharacters([]);\n                    }\n                    setLoading(false);\n                });\n            } else {\n                (0,_utils_api__WEBPACK_IMPORTED_MODULE_2__.searchCharacters)(query).then((data)=>{\n                    setCharacters(data.data.results);\n                    setLoading(false);\n                });\n            }\n        }\n    }, [\n        query\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_Search_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),\n        children: loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_Search_module_css__WEBPACK_IMPORTED_MODULE_5___default().loading),\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/Users/franperci/Desktop/Personal/marvel-change/src/app/search/page.js\",\n            lineNumber: 51,\n            columnNumber: 9\n        }, undefined) : characters.map((character)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                href: character.comics ? \"/comic/\".concat(character.id) : \"/character/\".concat(character.id),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Card__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    title: character.name,\n                    image: \"\".concat(character.thumbnail.path, \".\").concat(character.thumbnail.extension)\n                }, character.id, false, {\n                    fileName: \"/Users/franperci/Desktop/Personal/marvel-change/src/app/search/page.js\",\n                    lineNumber: 62,\n                    columnNumber: 13\n                }, undefined)\n            }, character.id, false, {\n                fileName: \"/Users/franperci/Desktop/Personal/marvel-change/src/app/search/page.js\",\n                lineNumber: 54,\n                columnNumber: 11\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"/Users/franperci/Desktop/Personal/marvel-change/src/app/search/page.js\",\n        lineNumber: 49,\n        columnNumber: 5\n    }, undefined);\n};\n_s(searchPage, \"i5NcFy0ZYnIyGwZ3BluPzZFiPng=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (searchPage);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2FwcC9zZWFyY2gvcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDNEM7QUFDa0I7QUFDbEI7QUFDSjtBQUNYO0FBRTdCLE1BQU1PLGFBQWE7UUFBQyxFQUFFQyxLQUFLLEVBQUU7O0lBQzNCLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHVCwrQ0FBUUEsQ0FBQyxFQUFFO0lBQy9DLE1BQU0sQ0FBQ1UsU0FBU0MsV0FBVyxHQUFHWCwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLENBQUNZLE9BQU9DLFNBQVMsR0FBR2IsK0NBQVFBLENBQUM7SUFFbkMsTUFBTWMsV0FBVyxDQUFDQztRQUNoQmIsd0RBQVlBLENBQUNhLE9BQU9DLElBQUksQ0FBQyxDQUFDQztZQUN4QkosU0FBU0ksS0FBS0EsSUFBSSxDQUFDQyxPQUFPLENBQUMsRUFBRTtRQUMvQjtRQUNBQyxRQUFRQyxHQUFHLENBQUMsK0JBQStCUjtJQUM3QztJQUVBRSxTQUFTO0lBRVRmLGdEQUFTQSxDQUFDO1FBQ1JZLFdBQVc7UUFDWCxJQUFJSixPQUFPO1lBQ1QsSUFBSUEsTUFBTWMsUUFBUSxDQUFDLE1BQU07Z0JBQ3ZCLE1BQU1DLFlBQVlmLE1BQU1nQixLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ3JDLE1BQU1DLGNBQWNqQixNQUFNZ0IsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUN2Q3JCLHdEQUFZQSxDQUFDb0IsV0FBV04sSUFBSSxDQUFDLENBQUNDO29CQUM1QixNQUFNTCxRQUFRSyxLQUFLQSxJQUFJLENBQUNDLE9BQU8sQ0FBQ08sSUFBSSxDQUNsQyxDQUFDYixRQUFVQSxNQUFNYyxXQUFXLEtBQUtGO29CQUVuQyxJQUFJWixPQUFPO3dCQUNUSCxjQUFjOzRCQUFDRzt5QkFBTTtvQkFDdkIsT0FBTzt3QkFDTEgsY0FBYyxFQUFFO29CQUNsQjtvQkFDQUUsV0FBVztnQkFDYjtZQUNGLE9BQU87Z0JBQ0xWLDREQUFnQkEsQ0FBQ00sT0FBT1MsSUFBSSxDQUFDLENBQUNDO29CQUM1QlIsY0FBY1EsS0FBS0EsSUFBSSxDQUFDQyxPQUFPO29CQUMvQlAsV0FBVztnQkFDYjtZQUNGO1FBQ0Y7SUFDRixHQUFHO1FBQUNKO0tBQU07SUFFVixxQkFDRSw4REFBQ29CO1FBQUlDLFdBQVd4QixxRUFBZTtrQkFDNUJNLHdCQUNDLDhEQUFDaUI7WUFBSUMsV0FBV3hCLG1FQUFhO3NCQUFFOzs7Ozt3QkFFL0JJLFdBQVdzQixHQUFHLENBQUMsQ0FBQ0MsMEJBQ2QsOERBQUMxQixrREFBSUE7Z0JBQ0gyQixNQUNFRCxVQUFVRSxNQUFNLEdBQ1osVUFBdUIsT0FBYkYsVUFBVUcsRUFBRSxJQUN0QixjQUEyQixPQUFiSCxVQUFVRyxFQUFFOzBCQUloQyw0RUFBQy9CLHdEQUFJQTtvQkFFSFksT0FBT2dCLFVBQVVJLElBQUk7b0JBQ3JCQyxPQUFPLEdBQStCTCxPQUE1QkEsVUFBVU0sU0FBUyxDQUFDQyxJQUFJLEVBQUMsS0FBaUMsT0FBOUJQLFVBQVVNLFNBQVMsQ0FBQ0UsU0FBUzttQkFGOURSLFVBQVVHLEVBQUU7Ozs7O2VBSGRILFVBQVVHLEVBQUU7Ozs7Ozs7Ozs7QUFZN0I7R0FoRU01QjtBQWtFTiwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3NlYXJjaC9wYWdlLmpzPzZhYjYiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBzZWFyY2hDaGFyYWN0ZXJzLCBzZWFyY2hDb21pY3MgfSBmcm9tIFwiLi4vdXRpbHMvYXBpXCI7XG5pbXBvcnQgQ2FyZCBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9DYXJkXCI7XG5pbXBvcnQgU3R5bGUgZnJvbSBcIi4vU2VhcmNoLm1vZHVsZS5jc3NcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuY29uc3Qgc2VhcmNoUGFnZSA9ICh7IHF1ZXJ5IH0pID0+IHtcbiAgY29uc3QgW2NoYXJhY3RlcnMsIHNldENoYXJhY3RlcnNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtjb21pYywgc2V0Q29taWNdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgY29uc3QgZ2V0Q29taWMgPSAodGl0bGUpID0+IHtcbiAgICBzZWFyY2hDb21pY3ModGl0bGUpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIHNldENvbWljKGRhdGEuZGF0YS5yZXN1bHRzWzBdKTtcbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZyhcIkVTVE8gRVMgRUwgQ09NSUMgUE9SIFRJVFVMT1wiLCBjb21pYyk7XG4gIH07XG5cbiAgZ2V0Q29taWMoXCLigItUaGUgQW1hemluZyBTcGlkZXItTWFuICMyMuKAi1wiKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgaWYgKHF1ZXJ5KSB7XG4gICAgICBpZiAocXVlcnkuaW5jbHVkZXMoXCIjXCIpKSB7XG4gICAgICAgIGNvbnN0IGNvbWljTmFtZSA9IHF1ZXJ5LnNwbGl0KFwiI1wiKVswXTtcbiAgICAgICAgY29uc3QgY29taWNOdW1iZXIgPSBxdWVyeS5zcGxpdChcIiNcIilbMV07XG4gICAgICAgIHNlYXJjaENvbWljcyhjb21pY05hbWUpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICBjb25zdCBjb21pYyA9IGRhdGEuZGF0YS5yZXN1bHRzLmZpbmQoXG4gICAgICAgICAgICAoY29taWMpID0+IGNvbWljLmlzc3VlTnVtYmVyID09PSBjb21pY051bWJlclxuICAgICAgICAgICk7XG4gICAgICAgICAgaWYgKGNvbWljKSB7XG4gICAgICAgICAgICBzZXRDaGFyYWN0ZXJzKFtjb21pY10pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXRDaGFyYWN0ZXJzKFtdKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2VhcmNoQ2hhcmFjdGVycyhxdWVyeSkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIHNldENoYXJhY3RlcnMoZGF0YS5kYXRhLnJlc3VsdHMpO1xuICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtxdWVyeV0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmNvbnRhaW5lcn0+XG4gICAgICB7bG9hZGluZyA/IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmxvYWRpbmd9PkxvYWRpbmcuLi48L2Rpdj5cbiAgICAgICkgOiAoXG4gICAgICAgIGNoYXJhY3RlcnMubWFwKChjaGFyYWN0ZXIpID0+IChcbiAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgaHJlZj17XG4gICAgICAgICAgICAgIGNoYXJhY3Rlci5jb21pY3NcbiAgICAgICAgICAgICAgICA/IGAvY29taWMvJHtjaGFyYWN0ZXIuaWR9YFxuICAgICAgICAgICAgICAgIDogYC9jaGFyYWN0ZXIvJHtjaGFyYWN0ZXIuaWR9YFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAga2V5PXtjaGFyYWN0ZXIuaWR9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPENhcmRcbiAgICAgICAgICAgICAga2V5PXtjaGFyYWN0ZXIuaWR9XG4gICAgICAgICAgICAgIHRpdGxlPXtjaGFyYWN0ZXIubmFtZX1cbiAgICAgICAgICAgICAgaW1hZ2U9e2Ake2NoYXJhY3Rlci50aHVtYm5haWwucGF0aH0uJHtjaGFyYWN0ZXIudGh1bWJuYWlsLmV4dGVuc2lvbn1gfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICkpXG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc2VhcmNoUGFnZTtcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInNlYXJjaENoYXJhY3RlcnMiLCJzZWFyY2hDb21pY3MiLCJDYXJkIiwiU3R5bGUiLCJMaW5rIiwic2VhcmNoUGFnZSIsInF1ZXJ5IiwiY2hhcmFjdGVycyIsInNldENoYXJhY3RlcnMiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImNvbWljIiwic2V0Q29taWMiLCJnZXRDb21pYyIsInRpdGxlIiwidGhlbiIsImRhdGEiLCJyZXN1bHRzIiwiY29uc29sZSIsImxvZyIsImluY2x1ZGVzIiwiY29taWNOYW1lIiwic3BsaXQiLCJjb21pY051bWJlciIsImZpbmQiLCJpc3N1ZU51bWJlciIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsIm1hcCIsImNoYXJhY3RlciIsImhyZWYiLCJjb21pY3MiLCJpZCIsIm5hbWUiLCJpbWFnZSIsInRodW1ibmFpbCIsInBhdGgiLCJleHRlbnNpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./src/app/search/page.js\n"));

/***/ })

});