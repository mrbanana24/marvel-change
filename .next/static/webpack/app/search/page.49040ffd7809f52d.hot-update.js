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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/navigation */ \"(app-client)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/api */ \"(app-client)/./src/app/utils/api.js\");\n/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/Card */ \"(app-client)/./components/Card/index.js\");\n/* harmony import */ var _Search_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Search.module.css */ \"(app-client)/./src/app/search/Search.module.css\");\n/* harmony import */ var _Search_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Search_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"(app-client)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst searchPage = ()=>{\n    _s();\n    const [characters, setCharacters] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const searchParams = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useSearchParams)();\n    const query = searchParams.get(\"query\");\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const search = async ()=>{\n            setLoading(true);\n            try {\n                const response = await (0,_utils_api__WEBPACK_IMPORTED_MODULE_3__.searchCharacters)(query);\n                setCharacters(response.data.results);\n                setLoading(false);\n            } catch (error) {\n                console.log(error);\n            }\n        };\n        if (query) {\n            search();\n        }\n    }, [\n        query\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_Search_module_css__WEBPACK_IMPORTED_MODULE_6___default().container),\n        children: [\n            loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Loading...\"\n            }, void 0, false, {\n                fileName: \"/Users/franperci/Desktop/Personal/marvel-change/src/app/search/page.js\",\n                lineNumber: 35,\n                columnNumber: 9\n            }, undefined) : characters.map((character)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                    href: \"/character/\".concat(character.id),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Card__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        name: character.name,\n                        imageUrl: \"\".concat(character.thumbnail.path, \".\").concat(character.thumbnail.extension)\n                    }, character.id, false, {\n                        fileName: \"/Users/franperci/Desktop/Personal/marvel-change/src/app/search/page.js\",\n                        lineNumber: 39,\n                        columnNumber: 13\n                    }, undefined)\n                }, character.id, false, {\n                    fileName: \"/Users/franperci/Desktop/Personal/marvel-change/src/app/search/page.js\",\n                    lineNumber: 38,\n                    columnNumber: 11\n                }, undefined)),\n            characters.length === 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"No results found\"\n            }, void 0, false, {\n                fileName: \"/Users/franperci/Desktop/Personal/marvel-change/src/app/search/page.js\",\n                lineNumber: 47,\n                columnNumber: 35\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/franperci/Desktop/Personal/marvel-change/src/app/search/page.js\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, undefined);\n};\n_s(searchPage, \"XUKHfkk4KWu/Vr5wZBpERvLXDqc=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.useSearchParams\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (searchPage);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2FwcC9zZWFyY2gvcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUNrRDtBQUNOO0FBQ0k7QUFDSjtBQUNKO0FBQ1g7QUFFN0IsTUFBTU8sYUFBYTs7SUFDakIsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdQLCtDQUFRQSxDQUFDLEVBQUU7SUFDL0MsTUFBTSxDQUFDUSxTQUFTQyxXQUFXLEdBQUdULCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU1VLGVBQWVaLGdFQUFlQTtJQUNwQyxNQUFNYSxRQUFRRCxhQUFhRSxHQUFHLENBQUM7SUFFL0JiLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTWMsU0FBUztZQUNiSixXQUFXO1lBQ1gsSUFBSTtnQkFDRixNQUFNSyxXQUFXLE1BQU1iLDREQUFnQkEsQ0FBQ1U7Z0JBQ3hDSixjQUFjTyxTQUFTQyxJQUFJLENBQUNDLE9BQU87Z0JBQ25DUCxXQUFXO1lBQ2IsRUFBRSxPQUFPUSxPQUFPO2dCQUNkQyxRQUFRQyxHQUFHLENBQUNGO1lBQ2Q7UUFDRjtRQUVBLElBQUlOLE9BQU87WUFDVEU7UUFDRjtJQUNGLEdBQUc7UUFBQ0Y7S0FBTTtJQUVWLHFCQUNFLDhEQUFDUztRQUFJQyxXQUFXbEIscUVBQWU7O1lBQzVCSyx3QkFDQyw4REFBQ2U7MEJBQUc7Ozs7OzRCQUVKakIsV0FBV2tCLEdBQUcsQ0FBQyxDQUFDQywwQkFDZCw4REFBQ3JCLGtEQUFJQTtvQkFBb0JzQixNQUFNLGNBQTJCLE9BQWJELFVBQVVFLEVBQUU7OEJBQ3ZELDRFQUFDekIsd0RBQUlBO3dCQUVIMEIsTUFBTUgsVUFBVUcsSUFBSTt3QkFDcEJDLFVBQVUsR0FBK0JKLE9BQTVCQSxVQUFVSyxTQUFTLENBQUNDLElBQUksRUFBQyxLQUFpQyxPQUE5Qk4sVUFBVUssU0FBUyxDQUFDRSxTQUFTO3VCQUZqRVAsVUFBVUUsRUFBRTs7Ozs7bUJBRlZGLFVBQVVFLEVBQUU7Ozs7O1lBUzFCckIsV0FBVzJCLE1BQU0sS0FBSyxtQkFBSyw4REFBQ1Y7MEJBQUc7Ozs7Ozs7Ozs7OztBQUd0QztHQXpDTWxCOztRQUdpQlAsNERBQWVBOzs7QUF3Q3RDLCtEQUFlTyxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvc2VhcmNoL3BhZ2UuanM/NmFiNiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCB7IHVzZVNlYXJjaFBhcmFtcyB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHNlYXJjaENoYXJhY3RlcnMgfSBmcm9tIFwiLi4vdXRpbHMvYXBpXCI7XG5pbXBvcnQgQ2FyZCBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9DYXJkXCI7XG5pbXBvcnQgU3R5bGUgZnJvbSBcIi4vU2VhcmNoLm1vZHVsZS5jc3NcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuY29uc3Qgc2VhcmNoUGFnZSA9ICgpID0+IHtcbiAgY29uc3QgW2NoYXJhY3RlcnMsIHNldENoYXJhY3RlcnNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHNlYXJjaFBhcmFtcyA9IHVzZVNlYXJjaFBhcmFtcygpO1xuICBjb25zdCBxdWVyeSA9IHNlYXJjaFBhcmFtcy5nZXQoXCJxdWVyeVwiKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHNlYXJjaCA9IGFzeW5jICgpID0+IHtcbiAgICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHNlYXJjaENoYXJhY3RlcnMocXVlcnkpO1xuICAgICAgICBzZXRDaGFyYWN0ZXJzKHJlc3BvbnNlLmRhdGEucmVzdWx0cyk7XG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBpZiAocXVlcnkpIHtcbiAgICAgIHNlYXJjaCgpO1xuICAgIH1cbiAgfSwgW3F1ZXJ5XSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuY29udGFpbmVyfT5cbiAgICAgIHtsb2FkaW5nID8gKFxuICAgICAgICA8aDI+TG9hZGluZy4uLjwvaDI+XG4gICAgICApIDogKFxuICAgICAgICBjaGFyYWN0ZXJzLm1hcCgoY2hhcmFjdGVyKSA9PiAoXG4gICAgICAgICAgPExpbmsga2V5PXtjaGFyYWN0ZXIuaWR9IGhyZWY9e2AvY2hhcmFjdGVyLyR7Y2hhcmFjdGVyLmlkfWB9PlxuICAgICAgICAgICAgPENhcmRcbiAgICAgICAgICAgICAga2V5PXtjaGFyYWN0ZXIuaWR9XG4gICAgICAgICAgICAgIG5hbWU9e2NoYXJhY3Rlci5uYW1lfVxuICAgICAgICAgICAgICBpbWFnZVVybD17YCR7Y2hhcmFjdGVyLnRodW1ibmFpbC5wYXRofS4ke2NoYXJhY3Rlci50aHVtYm5haWwuZXh0ZW5zaW9ufWB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgKSlcbiAgICAgICl9XG4gICAgICB7Y2hhcmFjdGVycy5sZW5ndGggPT09IDAgJiYgPGgyPk5vIHJlc3VsdHMgZm91bmQ8L2gyPn1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNlYXJjaFBhZ2U7XG4iXSwibmFtZXMiOlsidXNlU2VhcmNoUGFyYW1zIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJzZWFyY2hDaGFyYWN0ZXJzIiwiQ2FyZCIsIlN0eWxlIiwiTGluayIsInNlYXJjaFBhZ2UiLCJjaGFyYWN0ZXJzIiwic2V0Q2hhcmFjdGVycyIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwic2VhcmNoUGFyYW1zIiwicXVlcnkiLCJnZXQiLCJzZWFyY2giLCJyZXNwb25zZSIsImRhdGEiLCJyZXN1bHRzIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwiaDIiLCJtYXAiLCJjaGFyYWN0ZXIiLCJocmVmIiwiaWQiLCJuYW1lIiwiaW1hZ2VVcmwiLCJ0aHVtYm5haWwiLCJwYXRoIiwiZXh0ZW5zaW9uIiwibGVuZ3RoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./src/app/search/page.js\n"));

/***/ })

});