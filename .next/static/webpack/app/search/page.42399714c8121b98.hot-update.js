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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/navigation */ \"(app-client)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/api */ \"(app-client)/./src/app/utils/api.js\");\n/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/Card */ \"(app-client)/./components/Card/index.js\");\n/* harmony import */ var _Search_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Search.module.css */ \"(app-client)/./src/app/search/Search.module.css\");\n/* harmony import */ var _Search_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Search_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"(app-client)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst searchPage = ()=>{\n    _s();\n    const [characters, setCharacters] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [comic, setComic] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const searchParams = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useSearchParams)();\n    const query = searchParams.get(\"query\");\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const search = async ()=>{\n            setLoading(true);\n            try {\n                const response = await (0,_utils_api__WEBPACK_IMPORTED_MODULE_3__.searchCharacters)(query);\n                setCharacters(response.data.results);\n                setLoading(false);\n                const responseComic = await (0,_utils_api__WEBPACK_IMPORTED_MODULE_3__.searchComic)(query);\n                setComic(responseComic.data.results);\n            } catch (error) {\n                console.log(error);\n            }\n        };\n        if (query) {\n            search();\n            console.log(comic);\n        }\n    }, [\n        query\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_Search_module_css__WEBPACK_IMPORTED_MODULE_6___default().container),\n        children: [\n            loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Loading...\"\n            }, void 0, false, {\n                fileName: \"/Users/franperci/Desktop/Personal/marvel-change/src/app/search/page.js\",\n                lineNumber: 40,\n                columnNumber: 9\n            }, undefined) : characters.map((character)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                    href: \"/character/\".concat(character.id),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Card__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        name: character.name,\n                        imageUrl: \"\".concat(character.thumbnail.path, \".\").concat(character.thumbnail.extension)\n                    }, character.id, false, {\n                        fileName: \"/Users/franperci/Desktop/Personal/marvel-change/src/app/search/page.js\",\n                        lineNumber: 44,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/franperci/Desktop/Personal/marvel-change/src/app/search/page.js\",\n                    lineNumber: 43,\n                    columnNumber: 11\n                }, undefined)),\n            characters.length === 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"No results found\"\n            }, void 0, false, {\n                fileName: \"/Users/franperci/Desktop/Personal/marvel-change/src/app/search/page.js\",\n                lineNumber: 53,\n                columnNumber: 35\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/franperci/Desktop/Personal/marvel-change/src/app/search/page.js\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, undefined);\n};\n_s(searchPage, \"kfCyiJ/GL7JT1YMRCgz0CRs00RY=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.useSearchParams\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (searchPage);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2FwcC9zZWFyY2gvcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUNrRDtBQUNOO0FBQ2lCO0FBQ2pCO0FBQ0o7QUFDWDtBQUU3QixNQUFNUSxhQUFhOztJQUNqQixNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBR1IsK0NBQVFBLENBQUMsRUFBRTtJQUMvQyxNQUFNLENBQUNTLFNBQVNDLFdBQVcsR0FBR1YsK0NBQVFBLENBQUM7SUFDdkMsTUFBTSxDQUFDVyxPQUFPQyxTQUFTLEdBQUdaLCtDQUFRQSxDQUFDLEVBQUU7SUFDckMsTUFBTWEsZUFBZWYsZ0VBQWVBO0lBQ3BDLE1BQU1nQixRQUFRRCxhQUFhRSxHQUFHLENBQUM7SUFFL0JoQixnREFBU0EsQ0FBQztRQUNSLE1BQU1pQixTQUFTO1lBQ2JOLFdBQVc7WUFDWCxJQUFJO2dCQUNGLE1BQU1PLFdBQVcsTUFBTWhCLDREQUFnQkEsQ0FBQ2E7Z0JBQ3hDTixjQUFjUyxTQUFTQyxJQUFJLENBQUNDLE9BQU87Z0JBQ25DVCxXQUFXO2dCQUVYLE1BQU1VLGdCQUFnQixNQUFNbEIsdURBQVdBLENBQUNZO2dCQUN4Q0YsU0FBU1EsY0FBY0YsSUFBSSxDQUFDQyxPQUFPO1lBQ3JDLEVBQUUsT0FBT0UsT0FBTztnQkFDZEMsUUFBUUMsR0FBRyxDQUFDRjtZQUNkO1FBQ0Y7UUFFQSxJQUFJUCxPQUFPO1lBQ1RFO1lBQ0FNLFFBQVFDLEdBQUcsQ0FBQ1o7UUFDZDtJQUNGLEdBQUc7UUFBQ0c7S0FBTTtJQUVWLHFCQUNFLDhEQUFDVTtRQUFJQyxXQUFXckIscUVBQWU7O1lBQzVCSyx3QkFDQyw4REFBQ2tCOzBCQUFHOzs7Ozs0QkFFSnBCLFdBQVdxQixHQUFHLENBQUMsQ0FBQ0MsMEJBQ2QsOERBQUN4QixrREFBSUE7b0JBQUN5QixNQUFNLGNBQTJCLE9BQWJELFVBQVVFLEVBQUU7OEJBQ3BDLDRFQUFDNUIsd0RBQUlBO3dCQUVINkIsTUFBTUgsVUFBVUcsSUFBSTt3QkFDcEJDLFVBQVUsR0FBK0JKLE9BQTVCQSxVQUFVSyxTQUFTLENBQUNDLElBQUksRUFBQyxLQUFpQyxPQUE5Qk4sVUFBVUssU0FBUyxDQUFDRSxTQUFTO3VCQUZqRVAsVUFBVUUsRUFBRTs7Ozs7Ozs7OztZQVF4QnhCLFdBQVc4QixNQUFNLEtBQUssbUJBQUssOERBQUNWOzBCQUFHOzs7Ozs7Ozs7Ozs7QUFHdEM7R0EvQ01yQjs7UUFJaUJSLDREQUFlQTs7O0FBNkN0QywrREFBZVEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3NlYXJjaC9wYWdlLmpzPzZhYjYiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgeyB1c2VTZWFyY2hQYXJhbXMgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBzZWFyY2hDaGFyYWN0ZXJzLCBzZWFyY2hDb21pYyB9IGZyb20gXCIuLi91dGlscy9hcGlcIjtcbmltcG9ydCBDYXJkIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL0NhcmRcIjtcbmltcG9ydCBTdHlsZSBmcm9tIFwiLi9TZWFyY2gubW9kdWxlLmNzc1wiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5jb25zdCBzZWFyY2hQYWdlID0gKCkgPT4ge1xuICBjb25zdCBbY2hhcmFjdGVycywgc2V0Q2hhcmFjdGVyc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2NvbWljLCBzZXRDb21pY10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IHNlYXJjaFBhcmFtcyA9IHVzZVNlYXJjaFBhcmFtcygpO1xuICBjb25zdCBxdWVyeSA9IHNlYXJjaFBhcmFtcy5nZXQoXCJxdWVyeVwiKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHNlYXJjaCA9IGFzeW5jICgpID0+IHtcbiAgICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHNlYXJjaENoYXJhY3RlcnMocXVlcnkpO1xuICAgICAgICBzZXRDaGFyYWN0ZXJzKHJlc3BvbnNlLmRhdGEucmVzdWx0cyk7XG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlQ29taWMgPSBhd2FpdCBzZWFyY2hDb21pYyhxdWVyeSk7XG4gICAgICAgIHNldENvbWljKHJlc3BvbnNlQ29taWMuZGF0YS5yZXN1bHRzKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKHF1ZXJ5KSB7XG4gICAgICBzZWFyY2goKTtcbiAgICAgIGNvbnNvbGUubG9nKGNvbWljKTtcbiAgICB9XG4gIH0sIFtxdWVyeV0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmNvbnRhaW5lcn0+XG4gICAgICB7bG9hZGluZyA/IChcbiAgICAgICAgPGgyPkxvYWRpbmcuLi48L2gyPlxuICAgICAgKSA6IChcbiAgICAgICAgY2hhcmFjdGVycy5tYXAoKGNoYXJhY3RlcikgPT4gKFxuICAgICAgICAgIDxMaW5rIGhyZWY9e2AvY2hhcmFjdGVyLyR7Y2hhcmFjdGVyLmlkfWB9PlxuICAgICAgICAgICAgPENhcmRcbiAgICAgICAgICAgICAga2V5PXtjaGFyYWN0ZXIuaWR9XG4gICAgICAgICAgICAgIG5hbWU9e2NoYXJhY3Rlci5uYW1lfVxuICAgICAgICAgICAgICBpbWFnZVVybD17YCR7Y2hhcmFjdGVyLnRodW1ibmFpbC5wYXRofS4ke2NoYXJhY3Rlci50aHVtYm5haWwuZXh0ZW5zaW9ufWB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgKSlcbiAgICAgICl9XG5cbiAgICAgIHtjaGFyYWN0ZXJzLmxlbmd0aCA9PT0gMCAmJiA8aDI+Tm8gcmVzdWx0cyBmb3VuZDwvaDI+fVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc2VhcmNoUGFnZTtcbiJdLCJuYW1lcyI6WyJ1c2VTZWFyY2hQYXJhbXMiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInNlYXJjaENoYXJhY3RlcnMiLCJzZWFyY2hDb21pYyIsIkNhcmQiLCJTdHlsZSIsIkxpbmsiLCJzZWFyY2hQYWdlIiwiY2hhcmFjdGVycyIsInNldENoYXJhY3RlcnMiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImNvbWljIiwic2V0Q29taWMiLCJzZWFyY2hQYXJhbXMiLCJxdWVyeSIsImdldCIsInNlYXJjaCIsInJlc3BvbnNlIiwiZGF0YSIsInJlc3VsdHMiLCJyZXNwb25zZUNvbWljIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwiaDIiLCJtYXAiLCJjaGFyYWN0ZXIiLCJocmVmIiwiaWQiLCJuYW1lIiwiaW1hZ2VVcmwiLCJ0aHVtYm5haWwiLCJwYXRoIiwiZXh0ZW5zaW9uIiwibGVuZ3RoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./src/app/search/page.js\n"));

/***/ })

});