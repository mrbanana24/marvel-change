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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/navigation */ \"(app-client)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/api */ \"(app-client)/./src/app/utils/api.js\");\n/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/Card */ \"(app-client)/./components/Card/index.js\");\n/* harmony import */ var _Search_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Search.module.css */ \"(app-client)/./src/app/search/Search.module.css\");\n/* harmony import */ var _Search_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Search_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"(app-client)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst searchPage = ()=>{\n    _s();\n    const [characters, setCharacters] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const searchParams = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useSearchParams)();\n    const query = searchParams.get(\"query\");\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const search = async ()=>{\n            setLoading(true);\n            try {\n                const response = await (0,_utils_api__WEBPACK_IMPORTED_MODULE_3__.searchCharacters)(query);\n                setCharacters(response.data.results);\n                setLoading(false);\n            } catch (error) {\n                console.log(error);\n            }\n        };\n        if (query) {\n            search();\n        }\n    }, [\n        query\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_Search_module_css__WEBPACK_IMPORTED_MODULE_6___default().container),\n        children: [\n            loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Loading...\"\n            }, void 0, false, {\n                fileName: \"/Users/franperci/Desktop/Personal/marvel-change/src/app/search/page.js\",\n                lineNumber: 35,\n                columnNumber: 9\n            }, undefined) : characters.map((character)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                    href: \"/character/\".concat(character.id),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Card__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        name: character.name,\n                        imageUrl: \"\".concat(character.thumbnail.path, \".\").concat(character.thumbnail.extension)\n                    }, character.id, false, {\n                        fileName: \"/Users/franperci/Desktop/Personal/marvel-change/src/app/search/page.js\",\n                        lineNumber: 39,\n                        columnNumber: 13\n                    }, undefined)\n                }, character.id, false, {\n                    fileName: \"/Users/franperci/Desktop/Personal/marvel-change/src/app/search/page.js\",\n                    lineNumber: 38,\n                    columnNumber: 11\n                }, undefined)),\n            characters.length === 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"No results found\"\n            }, void 0, false, {\n                fileName: \"/Users/franperci/Desktop/Personal/marvel-change/src/app/search/page.js\",\n                lineNumber: 48,\n                columnNumber: 35\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/franperci/Desktop/Personal/marvel-change/src/app/search/page.js\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, undefined);\n};\n_s(searchPage, \"XUKHfkk4KWu/Vr5wZBpERvLXDqc=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.useSearchParams\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (searchPage);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2FwcC9zZWFyY2gvcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUNrRDtBQUNOO0FBQ2tCO0FBQ2xCO0FBQ0o7QUFDWDtBQUU3QixNQUFNUSxhQUFhOztJQUNqQixNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBR1IsK0NBQVFBLENBQUMsRUFBRTtJQUMvQyxNQUFNLENBQUNTLFNBQVNDLFdBQVcsR0FBR1YsK0NBQVFBLENBQUM7SUFDdkMsTUFBTVcsZUFBZWIsZ0VBQWVBO0lBQ3BDLE1BQU1jLFFBQVFELGFBQWFFLEdBQUcsQ0FBQztJQUUvQmQsZ0RBQVNBLENBQUM7UUFDUixNQUFNZSxTQUFTO1lBQ2JKLFdBQVc7WUFDWCxJQUFJO2dCQUNGLE1BQU1LLFdBQVcsTUFBTWQsNERBQWdCQSxDQUFDVztnQkFDeENKLGNBQWNPLFNBQVNDLElBQUksQ0FBQ0MsT0FBTztnQkFDbkNQLFdBQVc7WUFDYixFQUFFLE9BQU9RLE9BQU87Z0JBQ2RDLFFBQVFDLEdBQUcsQ0FBQ0Y7WUFDZDtRQUNGO1FBRUEsSUFBSU4sT0FBTztZQUNURTtRQUNGO0lBQ0YsR0FBRztRQUFDRjtLQUFNO0lBRVYscUJBQ0UsOERBQUNTO1FBQUlDLFdBQVdsQixxRUFBZTs7WUFDNUJLLHdCQUNDLDhEQUFDZTswQkFBRzs7Ozs7NEJBRUpqQixXQUFXa0IsR0FBRyxDQUFDLENBQUNDLDBCQUNkLDhEQUFDckIsa0RBQUlBO29CQUFvQnNCLE1BQU0sY0FBMkIsT0FBYkQsVUFBVUUsRUFBRTs4QkFDdkQsNEVBQUN6Qix3REFBSUE7d0JBRUgwQixNQUFNSCxVQUFVRyxJQUFJO3dCQUNwQkMsVUFBVSxHQUErQkosT0FBNUJBLFVBQVVLLFNBQVMsQ0FBQ0MsSUFBSSxFQUFDLEtBQWlDLE9BQTlCTixVQUFVSyxTQUFTLENBQUNFLFNBQVM7dUJBRmpFUCxVQUFVRSxFQUFFOzs7OzttQkFGVkYsVUFBVUUsRUFBRTs7Ozs7WUFVMUJyQixXQUFXMkIsTUFBTSxLQUFLLG1CQUFLLDhEQUFDVjswQkFBRzs7Ozs7Ozs7Ozs7O0FBR3RDO0dBMUNNbEI7O1FBR2lCUiw0REFBZUE7OztBQXlDdEMsK0RBQWVRLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9zZWFyY2gvcGFnZS5qcz82YWI2Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IHsgdXNlU2VhcmNoUGFyYW1zIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgc2VhcmNoQ2hhcmFjdGVycywgc2VhcmNoQ29taWNzIH0gZnJvbSBcIi4uL3V0aWxzL2FwaVwiO1xuaW1wb3J0IENhcmQgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvQ2FyZFwiO1xuaW1wb3J0IFN0eWxlIGZyb20gXCIuL1NlYXJjaC5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmNvbnN0IHNlYXJjaFBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IFtjaGFyYWN0ZXJzLCBzZXRDaGFyYWN0ZXJzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBzZWFyY2hQYXJhbXMgPSB1c2VTZWFyY2hQYXJhbXMoKTtcbiAgY29uc3QgcXVlcnkgPSBzZWFyY2hQYXJhbXMuZ2V0KFwicXVlcnlcIik7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBzZWFyY2ggPSBhc3luYyAoKSA9PiB7XG4gICAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBzZWFyY2hDaGFyYWN0ZXJzKHF1ZXJ5KTtcbiAgICAgICAgc2V0Q2hhcmFjdGVycyhyZXNwb25zZS5kYXRhLnJlc3VsdHMpO1xuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKHF1ZXJ5KSB7XG4gICAgICBzZWFyY2goKTtcbiAgICB9XG4gIH0sIFtxdWVyeV0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmNvbnRhaW5lcn0+XG4gICAgICB7bG9hZGluZyA/IChcbiAgICAgICAgPGgyPkxvYWRpbmcuLi48L2gyPlxuICAgICAgKSA6IChcbiAgICAgICAgY2hhcmFjdGVycy5tYXAoKGNoYXJhY3RlcikgPT4gKFxuICAgICAgICAgIDxMaW5rIGtleT17Y2hhcmFjdGVyLmlkfSBocmVmPXtgL2NoYXJhY3Rlci8ke2NoYXJhY3Rlci5pZH1gfT5cbiAgICAgICAgICAgIDxDYXJkXG4gICAgICAgICAgICAgIGtleT17Y2hhcmFjdGVyLmlkfVxuICAgICAgICAgICAgICBuYW1lPXtjaGFyYWN0ZXIubmFtZX1cbiAgICAgICAgICAgICAgaW1hZ2VVcmw9e2Ake2NoYXJhY3Rlci50aHVtYm5haWwucGF0aH0uJHtjaGFyYWN0ZXIudGh1bWJuYWlsLmV4dGVuc2lvbn1gfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICkpXG4gICAgICApfVxuXG4gICAgICB7Y2hhcmFjdGVycy5sZW5ndGggPT09IDAgJiYgPGgyPk5vIHJlc3VsdHMgZm91bmQ8L2gyPn1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNlYXJjaFBhZ2U7XG4iXSwibmFtZXMiOlsidXNlU2VhcmNoUGFyYW1zIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJzZWFyY2hDaGFyYWN0ZXJzIiwic2VhcmNoQ29taWNzIiwiQ2FyZCIsIlN0eWxlIiwiTGluayIsInNlYXJjaFBhZ2UiLCJjaGFyYWN0ZXJzIiwic2V0Q2hhcmFjdGVycyIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwic2VhcmNoUGFyYW1zIiwicXVlcnkiLCJnZXQiLCJzZWFyY2giLCJyZXNwb25zZSIsImRhdGEiLCJyZXN1bHRzIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwiaDIiLCJtYXAiLCJjaGFyYWN0ZXIiLCJocmVmIiwiaWQiLCJuYW1lIiwiaW1hZ2VVcmwiLCJ0aHVtYm5haWwiLCJwYXRoIiwiZXh0ZW5zaW9uIiwibGVuZ3RoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./src/app/search/page.js\n"));

/***/ })

});