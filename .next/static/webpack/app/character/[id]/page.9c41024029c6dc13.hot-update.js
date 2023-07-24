"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/character/[id]/page",{

/***/ "(app-client)/./components/ComicList/index.js":
/*!***************************************!*\
  !*** ./components/ComicList/index.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _CardList_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CardList.module.css */ \"(app-client)/./components/ComicList/CardList.module.css\");\n/* harmony import */ var _CardList_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_CardList_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-client)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst CardList = (param)=>{\n    let { data } = param;\n    _s();\n    const [scrollPosition, setScrollPosition] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const cardListRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    // Manejar el desplazamiento hacia abajo\n    const handleScroll = ()=>{\n        const position = cardListRef.current.scrollTop;\n        setScrollPosition(position);\n    };\n    // Función para renderizar una card\n    const renderCard = (item)=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_CardList_module_css__WEBPACK_IMPORTED_MODULE_3___default().card),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_CardList_module_css__WEBPACK_IMPORTED_MODULE_3___default().image),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"\".concat(item.thumbnail.path, \".\").concat(item.thumbnail.extension)\n                    }, void 0, false, {\n                        fileName: \"/Users/franperci/Desktop/Personal/marvel-change/components/ComicList/index.js\",\n                        lineNumber: 22,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/franperci/Desktop/Personal/marvel-change/components/ComicList/index.js\",\n                    lineNumber: 21,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_CardList_module_css__WEBPACK_IMPORTED_MODULE_3___default().containerContent),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_CardList_module_css__WEBPACK_IMPORTED_MODULE_3___default().title),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: item.title\n                            }, void 0, false, {\n                                fileName: \"/Users/franperci/Desktop/Personal/marvel-change/components/ComicList/index.js\",\n                                lineNumber: 26,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/franperci/Desktop/Personal/marvel-change/components/ComicList/index.js\",\n                            lineNumber: 25,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_CardList_module_css__WEBPACK_IMPORTED_MODULE_3___default().description),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: item.description\n                            }, void 0, false, {\n                                fileName: \"/Users/franperci/Desktop/Personal/marvel-change/components/ComicList/index.js\",\n                                lineNumber: 29,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/franperci/Desktop/Personal/marvel-change/components/ComicList/index.js\",\n                            lineNumber: 28,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/franperci/Desktop/Personal/marvel-change/components/ComicList/index.js\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, item.id, true, {\n            fileName: \"/Users/franperci/Desktop/Personal/marvel-change/components/ComicList/index.js\",\n            lineNumber: 20,\n            columnNumber: 7\n        }, undefined);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Agregar el listener de scroll al cargar el componente\n        const cardListElement = cardListRef.current;\n        cardListElement.addEventListener(\"scroll\", handleScroll);\n        return ()=>{\n            // Remover el listener de scroll al desmontar el componente\n            cardListElement.removeEventListener(\"scroll\", handleScroll);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_CardList_module_css__WEBPACK_IMPORTED_MODULE_3___default().cardList),\n        ref: cardListRef,\n        children: data.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                href: \"/comic/\".concat(item.id),\n                children: renderCard(item)\n            }, item.id, false, {\n                fileName: \"/Users/franperci/Desktop/Personal/marvel-change/components/ComicList/index.js\",\n                lineNumber: 50,\n                columnNumber: 9\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"/Users/franperci/Desktop/Personal/marvel-change/components/ComicList/index.js\",\n        lineNumber: 48,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CardList, \"z2PoVgf9oMvDI6pGEnday+6gWfk=\");\n_c = CardList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CardList);\nvar _c;\n$RefreshReg$(_c, \"CardList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9Db21pY0xpc3QvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUUyRDtBQUNoQjtBQUNkO0FBRTdCLE1BQU1NLFdBQVc7UUFBQyxFQUFFQyxJQUFJLEVBQUU7O0lBQ3hCLE1BQU0sQ0FBQ0MsZ0JBQWdCQyxrQkFBa0IsR0FBR1IsK0NBQVFBLENBQUM7SUFDckQsTUFBTVMsY0FBY1IsNkNBQU1BLENBQUM7SUFFM0Isd0NBQXdDO0lBQ3hDLE1BQU1TLGVBQWU7UUFDbkIsTUFBTUMsV0FBV0YsWUFBWUcsT0FBTyxDQUFDQyxTQUFTO1FBQzlDTCxrQkFBa0JHO0lBQ3BCO0lBRUEsbUNBQW1DO0lBQ25DLE1BQU1HLGFBQWEsQ0FBQ0M7UUFDbEIscUJBQ0UsOERBQUNDO1lBQWtCQyxXQUFXZCxrRUFBVzs7OEJBQ3ZDLDhEQUFDYTtvQkFBSUMsV0FBV2QsbUVBQVk7OEJBQzFCLDRFQUFDaUI7d0JBQUlDLEtBQUssR0FBMEJOLE9BQXZCQSxLQUFLTyxTQUFTLENBQUNDLElBQUksRUFBQyxLQUE0QixPQUF6QlIsS0FBS08sU0FBUyxDQUFDRSxTQUFTOzs7Ozs7Ozs7Ozs4QkFFOUQsOERBQUNSO29CQUFJQyxXQUFXZCw4RUFBdUI7O3NDQUNyQyw4REFBQ2E7NEJBQUlDLFdBQVdkLG1FQUFZO3NDQUMxQiw0RUFBQ3dCOzBDQUFJWixLQUFLVyxLQUFLOzs7Ozs7Ozs7OztzQ0FFakIsOERBQUNWOzRCQUFJQyxXQUFXZCx5RUFBa0I7c0NBQ2hDLDRFQUFDMEI7MENBQUdkLEtBQUthLFdBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7OztXQVRoQmIsS0FBS2UsRUFBRTs7Ozs7SUFjckI7SUFFQTVCLGdEQUFTQSxDQUFDO1FBQ1Isd0RBQXdEO1FBQ3hELE1BQU02QixrQkFBa0J0QixZQUFZRyxPQUFPO1FBQzNDbUIsZ0JBQWdCQyxnQkFBZ0IsQ0FBQyxVQUFVdEI7UUFFM0MsT0FBTztZQUNMLDJEQUEyRDtZQUMzRHFCLGdCQUFnQkUsbUJBQW1CLENBQUMsVUFBVXZCO1FBQ2hEO0lBQ0YsR0FBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNNO1FBQUlDLFdBQVdkLHNFQUFlO1FBQUVnQyxLQUFLMUI7a0JBQ25DSCxLQUFLOEIsR0FBRyxDQUFDLENBQUNyQixxQkFDVCw4REFBQ1gsa0RBQUlBO2dCQUFlaUMsTUFBTSxVQUFrQixPQUFSdEIsS0FBS2UsRUFBRTswQkFDeENoQixXQUFXQztlQURIQSxLQUFLZSxFQUFFOzs7Ozs7Ozs7O0FBTTFCO0dBakRNekI7S0FBQUE7QUFtRE4sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db21pY0xpc3QvaW5kZXguanM/NGQ1MCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9DYXJkTGlzdC5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmNvbnN0IENhcmRMaXN0ID0gKHsgZGF0YSB9KSA9PiB7XG4gIGNvbnN0IFtzY3JvbGxQb3NpdGlvbiwgc2V0U2Nyb2xsUG9zaXRpb25dID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IGNhcmRMaXN0UmVmID0gdXNlUmVmKG51bGwpO1xuXG4gIC8vIE1hbmVqYXIgZWwgZGVzcGxhemFtaWVudG8gaGFjaWEgYWJham9cbiAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gY2FyZExpc3RSZWYuY3VycmVudC5zY3JvbGxUb3A7XG4gICAgc2V0U2Nyb2xsUG9zaXRpb24ocG9zaXRpb24pO1xuICB9O1xuXG4gIC8vIEZ1bmNpw7NuIHBhcmEgcmVuZGVyaXphciB1bmEgY2FyZFxuICBjb25zdCByZW5kZXJDYXJkID0gKGl0ZW0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBrZXk9e2l0ZW0uaWR9IGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmltYWdlfT5cbiAgICAgICAgICA8aW1nIHNyYz17YCR7aXRlbS50aHVtYm5haWwucGF0aH0uJHtpdGVtLnRodW1ibmFpbC5leHRlbnNpb259YH0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyQ29udGVudH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+XG4gICAgICAgICAgICA8aDI+e2l0ZW0udGl0bGV9PC9oMj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9ufT5cbiAgICAgICAgICAgIDxwPntpdGVtLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gQWdyZWdhciBlbCBsaXN0ZW5lciBkZSBzY3JvbGwgYWwgY2FyZ2FyIGVsIGNvbXBvbmVudGVcbiAgICBjb25zdCBjYXJkTGlzdEVsZW1lbnQgPSBjYXJkTGlzdFJlZi5jdXJyZW50O1xuICAgIGNhcmRMaXN0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZVNjcm9sbCk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgLy8gUmVtb3ZlciBlbCBsaXN0ZW5lciBkZSBzY3JvbGwgYWwgZGVzbW9udGFyIGVsIGNvbXBvbmVudGVcbiAgICAgIGNhcmRMaXN0RWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZVNjcm9sbCk7XG4gICAgfTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkTGlzdH0gcmVmPXtjYXJkTGlzdFJlZn0+XG4gICAgICB7ZGF0YS5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgPExpbmsga2V5PXtpdGVtLmlkfSBocmVmPXtgL2NvbWljLyR7aXRlbS5pZH1gfT5cbiAgICAgICAgICB7cmVuZGVyQ2FyZChpdGVtKX1cbiAgICAgICAgPC9MaW5rPlxuICAgICAgKSl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYXJkTGlzdDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlUmVmIiwidXNlRWZmZWN0Iiwic3R5bGVzIiwiTGluayIsIkNhcmRMaXN0IiwiZGF0YSIsInNjcm9sbFBvc2l0aW9uIiwic2V0U2Nyb2xsUG9zaXRpb24iLCJjYXJkTGlzdFJlZiIsImhhbmRsZVNjcm9sbCIsInBvc2l0aW9uIiwiY3VycmVudCIsInNjcm9sbFRvcCIsInJlbmRlckNhcmQiLCJpdGVtIiwiZGl2IiwiY2xhc3NOYW1lIiwiY2FyZCIsImltYWdlIiwiaW1nIiwic3JjIiwidGh1bWJuYWlsIiwicGF0aCIsImV4dGVuc2lvbiIsImNvbnRhaW5lckNvbnRlbnQiLCJ0aXRsZSIsImgyIiwiZGVzY3JpcHRpb24iLCJwIiwiaWQiLCJjYXJkTGlzdEVsZW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNhcmRMaXN0IiwicmVmIiwibWFwIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./components/ComicList/index.js\n"));

/***/ })

});