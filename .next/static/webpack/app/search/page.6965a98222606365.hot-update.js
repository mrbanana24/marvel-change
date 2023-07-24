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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/navigation */ \"(app-client)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/api */ \"(app-client)/./src/app/utils/api.js\");\n/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/Card */ \"(app-client)/./components/Card/index.js\");\n/* harmony import */ var _Search_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Search.module.css */ \"(app-client)/./src/app/search/Search.module.css\");\n/* harmony import */ var _Search_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Search_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"(app-client)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst searchPage = ()=>{\n    _s();\n    const [characters, setCharacters] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const searchParams = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useSearchParams)();\n    const query = searchParams.get(\"query\");\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const search = async ()=>{\n            setLoading(true);\n            try {\n                if (query.toLocaleLowerCase().includes(\"#\")) {\n                    const response = await (0,_utils_api__WEBPACK_IMPORTED_MODULE_3__.searchComicByTitle)(query);\n                    setCharacters(response.data.results);\n                    setLoading(false);\n                    return;\n                } else {\n                    const response = await (0,_utils_api__WEBPACK_IMPORTED_MODULE_3__.searchCharacters)(query);\n                    setCharacters(response.data.results);\n                    setLoading(false);\n                }\n            } catch (error) {\n                console.log(error);\n            }\n        };\n        if (query) {\n            search();\n            console.log(characters);\n        }\n    }, [\n        query\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_Search_module_css__WEBPACK_IMPORTED_MODULE_6___default().container),\n        children: [\n            loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Loading...\"\n            }, void 0, false, {\n                fileName: \"/Users/franperci/Desktop/Personal/marvel-change/src/app/search/page.js\",\n                lineNumber: 43,\n                columnNumber: 9\n            }, undefined) : characters.map((character)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                    href: \"/character/\".concat(character.id),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Card__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        name: character.name,\n                        imageUrl: \"\".concat(character.thumbnail.path, \".\").concat(character.thumbnail.extension)\n                    }, character.id, false, {\n                        fileName: \"/Users/franperci/Desktop/Personal/marvel-change/src/app/search/page.js\",\n                        lineNumber: 47,\n                        columnNumber: 13\n                    }, undefined)\n                }, character.id, false, {\n                    fileName: \"/Users/franperci/Desktop/Personal/marvel-change/src/app/search/page.js\",\n                    lineNumber: 46,\n                    columnNumber: 11\n                }, undefined)),\n            characters.length === 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"No results found\"\n            }, void 0, false, {\n                fileName: \"/Users/franperci/Desktop/Personal/marvel-change/src/app/search/page.js\",\n                lineNumber: 55,\n                columnNumber: 35\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/franperci/Desktop/Personal/marvel-change/src/app/search/page.js\",\n        lineNumber: 41,\n        columnNumber: 5\n    }, undefined);\n};\n_s(searchPage, \"XUKHfkk4KWu/Vr5wZBpERvLXDqc=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.useSearchParams\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (searchPage);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2FwcC9zZWFyY2gvcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUNrRDtBQUNOO0FBQ3dCO0FBQ3hCO0FBQ0o7QUFDWDtBQUU3QixNQUFNUSxhQUFhOztJQUNqQixNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBR1IsK0NBQVFBLENBQUMsRUFBRTtJQUMvQyxNQUFNLENBQUNTLFNBQVNDLFdBQVcsR0FBR1YsK0NBQVFBLENBQUM7SUFDdkMsTUFBTVcsZUFBZWIsZ0VBQWVBO0lBQ3BDLE1BQU1jLFFBQVFELGFBQWFFLEdBQUcsQ0FBQztJQUUvQmQsZ0RBQVNBLENBQUM7UUFDUixNQUFNZSxTQUFTO1lBQ2JKLFdBQVc7WUFDWCxJQUFJO2dCQUNGLElBQUlFLE1BQU1HLGlCQUFpQixHQUFHQyxRQUFRLENBQUMsTUFBTTtvQkFDM0MsTUFBTUMsV0FBVyxNQUFNZiw4REFBa0JBLENBQUNVO29CQUMxQ0osY0FBY1MsU0FBU0MsSUFBSSxDQUFDQyxPQUFPO29CQUNuQ1QsV0FBVztvQkFDWDtnQkFDRixPQUFPO29CQUNMLE1BQU1PLFdBQVcsTUFBTWhCLDREQUFnQkEsQ0FBQ1c7b0JBQ3hDSixjQUFjUyxTQUFTQyxJQUFJLENBQUNDLE9BQU87b0JBQ25DVCxXQUFXO2dCQUNiO1lBQ0YsRUFBRSxPQUFPVSxPQUFPO2dCQUNkQyxRQUFRQyxHQUFHLENBQUNGO1lBQ2Q7UUFDRjtRQUVBLElBQUlSLE9BQU87WUFDVEU7WUFDQU8sUUFBUUMsR0FBRyxDQUFDZjtRQUNkO0lBQ0YsR0FBRztRQUFDSztLQUFNO0lBRVYscUJBQ0UsOERBQUNXO1FBQUlDLFdBQVdwQixxRUFBZTs7WUFDNUJLLHdCQUNDLDhEQUFDaUI7MEJBQUc7Ozs7OzRCQUVKbkIsV0FBV29CLEdBQUcsQ0FBQyxDQUFDQywwQkFDZCw4REFBQ3ZCLGtEQUFJQTtvQkFBb0J3QixNQUFNLGNBQTJCLE9BQWJELFVBQVVFLEVBQUU7OEJBQ3ZELDRFQUFDM0Isd0RBQUlBO3dCQUVINEIsTUFBTUgsVUFBVUcsSUFBSTt3QkFDcEJDLFVBQVUsR0FBK0JKLE9BQTVCQSxVQUFVSyxTQUFTLENBQUNDLElBQUksRUFBQyxLQUFpQyxPQUE5Qk4sVUFBVUssU0FBUyxDQUFDRSxTQUFTO3VCQUZqRVAsVUFBVUUsRUFBRTs7Ozs7bUJBRlZGLFVBQVVFLEVBQUU7Ozs7O1lBUzFCdkIsV0FBVzZCLE1BQU0sS0FBSyxtQkFBSyw4REFBQ1Y7MEJBQUc7Ozs7Ozs7Ozs7OztBQUd0QztHQWpETXBCOztRQUdpQlIsNERBQWVBOzs7QUFnRHRDLCtEQUFlUSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvc2VhcmNoL3BhZ2UuanM/NmFiNiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCB7IHVzZVNlYXJjaFBhcmFtcyB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHNlYXJjaENoYXJhY3RlcnMsIHNlYXJjaENvbWljQnlUaXRsZSB9IGZyb20gXCIuLi91dGlscy9hcGlcIjtcbmltcG9ydCBDYXJkIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL0NhcmRcIjtcbmltcG9ydCBTdHlsZSBmcm9tIFwiLi9TZWFyY2gubW9kdWxlLmNzc1wiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5jb25zdCBzZWFyY2hQYWdlID0gKCkgPT4ge1xuICBjb25zdCBbY2hhcmFjdGVycywgc2V0Q2hhcmFjdGVyc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3Qgc2VhcmNoUGFyYW1zID0gdXNlU2VhcmNoUGFyYW1zKCk7XG4gIGNvbnN0IHF1ZXJ5ID0gc2VhcmNoUGFyYW1zLmdldChcInF1ZXJ5XCIpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgc2VhcmNoID0gYXN5bmMgKCkgPT4ge1xuICAgICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmIChxdWVyeS50b0xvY2FsZUxvd2VyQ2FzZSgpLmluY2x1ZGVzKFwiI1wiKSkge1xuICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgc2VhcmNoQ29taWNCeVRpdGxlKHF1ZXJ5KTtcbiAgICAgICAgICBzZXRDaGFyYWN0ZXJzKHJlc3BvbnNlLmRhdGEucmVzdWx0cyk7XG4gICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgc2VhcmNoQ2hhcmFjdGVycyhxdWVyeSk7XG4gICAgICAgICAgc2V0Q2hhcmFjdGVycyhyZXNwb25zZS5kYXRhLnJlc3VsdHMpO1xuICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGlmIChxdWVyeSkge1xuICAgICAgc2VhcmNoKCk7XG4gICAgICBjb25zb2xlLmxvZyhjaGFyYWN0ZXJzKTtcbiAgICB9XG4gIH0sIFtxdWVyeV0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmNvbnRhaW5lcn0+XG4gICAgICB7bG9hZGluZyA/IChcbiAgICAgICAgPGgyPkxvYWRpbmcuLi48L2gyPlxuICAgICAgKSA6IChcbiAgICAgICAgY2hhcmFjdGVycy5tYXAoKGNoYXJhY3RlcikgPT4gKFxuICAgICAgICAgIDxMaW5rIGtleT17Y2hhcmFjdGVyLmlkfSBocmVmPXtgL2NoYXJhY3Rlci8ke2NoYXJhY3Rlci5pZH1gfT5cbiAgICAgICAgICAgIDxDYXJkXG4gICAgICAgICAgICAgIGtleT17Y2hhcmFjdGVyLmlkfVxuICAgICAgICAgICAgICBuYW1lPXtjaGFyYWN0ZXIubmFtZX1cbiAgICAgICAgICAgICAgaW1hZ2VVcmw9e2Ake2NoYXJhY3Rlci50aHVtYm5haWwucGF0aH0uJHtjaGFyYWN0ZXIudGh1bWJuYWlsLmV4dGVuc2lvbn1gfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICkpXG4gICAgICApfVxuICAgICAge2NoYXJhY3RlcnMubGVuZ3RoID09PSAwICYmIDxoMj5ObyByZXN1bHRzIGZvdW5kPC9oMj59XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzZWFyY2hQYWdlO1xuIl0sIm5hbWVzIjpbInVzZVNlYXJjaFBhcmFtcyIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwic2VhcmNoQ2hhcmFjdGVycyIsInNlYXJjaENvbWljQnlUaXRsZSIsIkNhcmQiLCJTdHlsZSIsIkxpbmsiLCJzZWFyY2hQYWdlIiwiY2hhcmFjdGVycyIsInNldENoYXJhY3RlcnMiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInNlYXJjaFBhcmFtcyIsInF1ZXJ5IiwiZ2V0Iiwic2VhcmNoIiwidG9Mb2NhbGVMb3dlckNhc2UiLCJpbmNsdWRlcyIsInJlc3BvbnNlIiwiZGF0YSIsInJlc3VsdHMiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJoMiIsIm1hcCIsImNoYXJhY3RlciIsImhyZWYiLCJpZCIsIm5hbWUiLCJpbWFnZVVybCIsInRodW1ibmFpbCIsInBhdGgiLCJleHRlbnNpb24iLCJsZW5ndGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./src/app/search/page.js\n"));

/***/ })

});