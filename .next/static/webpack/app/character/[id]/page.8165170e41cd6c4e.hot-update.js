/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/character/[id]/page",{

/***/ "(app-client)/./components/CardList/CardList.module.css":
/*!*************************************************!*\
  !*** ./components/CardList/CardList.module.css ***!
  \*************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("// extracted by mini-css-extract-plugin\n    if(true) {\n      // 1690064609896\n      var cssReload = __webpack_require__(/*! ./node_modules/next/dist/compiled/mini-css-extract-plugin/hmr/hotModuleReplacement.js */ \"(app-client)/./node_modules/next/dist/compiled/mini-css-extract-plugin/hmr/hotModuleReplacement.js\")(module.id, {\"publicPath\":\"/_next/\",\"esModule\":false,\"locals\":false});\n      module.hot.dispose(cssReload);\n      module.hot.accept(undefined, cssReload);\n    }\n  \nmodule.exports.__checksum = \"c37ee279dd51\"\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9DYXJkTGlzdC9DYXJkTGlzdC5tb2R1bGUuY3NzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsT0FBTyxJQUFVO0FBQ2pCO0FBQ0Esc0JBQXNCLG1CQUFPLENBQUMsaU1BQXFJLGNBQWMsdURBQXVEO0FBQ3hPLE1BQU0sVUFBVTtBQUNoQixNQUFNLGlCQUFpQjtBQUN2QjtBQUNBO0FBQ0EseUJBQXlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ2FyZExpc3QvQ2FyZExpc3QubW9kdWxlLmNzcz81MDExIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE2OTAwNjQ2MDk4OTZcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiL1VzZXJzL2ZyYW5wZXJjaS9EZXNrdG9wL1BlcnNvbmFsL21hcnZlbC1jaGFuZ2Uvbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9obXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJwdWJsaWNQYXRoXCI6XCIvX25leHQvXCIsXCJlc01vZHVsZVwiOmZhbHNlLFwibG9jYWxzXCI6ZmFsc2V9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpO1xuICAgIH1cbiAgXG5tb2R1bGUuZXhwb3J0cy5fX2NoZWNrc3VtID0gXCJjMzdlZTI3OWRkNTFcIlxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./components/CardList/CardList.module.css\n"));

/***/ }),

/***/ "(app-client)/./components/CardList/index.js":
/*!**************************************!*\
  !*** ./components/CardList/index.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _CardList_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CardList.module.css */ \"(app-client)/./components/CardList/CardList.module.css\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst CardList = (param)=>{\n    let { data } = param;\n    _s();\n    const [scrollPosition, setScrollPosition] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const cardListRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    // Manejar el desplazamiento hacia abajo\n    const handleScroll = ()=>{\n        const position = cardListRef.current.scrollTop;\n        setScrollPosition(position);\n    };\n    // Función para renderizar una card\n    const renderCard = (item)=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: _CardList_module_css__WEBPACK_IMPORTED_MODULE_2__.card,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: _CardList_module_css__WEBPACK_IMPORTED_MODULE_2__.title,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: item.title\n                    }, void 0, false, {\n                        fileName: \"/Users/franperci/Desktop/Personal/marvel-change/components/CardList/index.js\",\n                        lineNumber: 21,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/franperci/Desktop/Personal/marvel-change/components/CardList/index.js\",\n                    lineNumber: 20,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: _CardList_module_css__WEBPACK_IMPORTED_MODULE_2__.description,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: item.description\n                    }, void 0, false, {\n                        fileName: \"/Users/franperci/Desktop/Personal/marvel-change/components/CardList/index.js\",\n                        lineNumber: 24,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/franperci/Desktop/Personal/marvel-change/components/CardList/index.js\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    className: _CardList_module_css__WEBPACK_IMPORTED_MODULE_2__.image,\n                    src: \"\".concat(item.thumbnail.path, \".\").concat(item.thumbnail.extension)\n                }, void 0, false, {\n                    fileName: \"/Users/franperci/Desktop/Personal/marvel-change/components/CardList/index.js\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, item.id, true, {\n            fileName: \"/Users/franperci/Desktop/Personal/marvel-change/components/CardList/index.js\",\n            lineNumber: 19,\n            columnNumber: 7\n        }, undefined);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Agregar el listener de scroll al cargar el componente\n        const cardListElement = cardListRef.current;\n        cardListElement.addEventListener(\"scroll\", handleScroll);\n        return ()=>{\n            // Remover el listener de scroll al desmontar el componente\n            cardListElement.removeEventListener(\"scroll\", handleScroll);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: _CardList_module_css__WEBPACK_IMPORTED_MODULE_2__.cardList,\n        ref: cardListRef,\n        children: data.map((item)=>renderCard(item))\n    }, void 0, false, {\n        fileName: \"/Users/franperci/Desktop/Personal/marvel-change/components/CardList/index.js\",\n        lineNumber: 46,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CardList, \"z2PoVgf9oMvDI6pGEnday+6gWfk=\");\n_c = CardList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CardList);\nvar _c;\n$RefreshReg$(_c, \"CardList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9DYXJkTGlzdC9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBRTJEO0FBQ2hCO0FBRTNDLE1BQU1LLFdBQVc7UUFBQyxFQUFFQyxJQUFJLEVBQUU7O0lBQ3hCLE1BQU0sQ0FBQ0MsZ0JBQWdCQyxrQkFBa0IsR0FBR1AsK0NBQVFBLENBQUM7SUFDckQsTUFBTVEsY0FBY1AsNkNBQU1BLENBQUM7SUFFM0Isd0NBQXdDO0lBQ3hDLE1BQU1RLGVBQWU7UUFDbkIsTUFBTUMsV0FBV0YsWUFBWUcsT0FBTyxDQUFDQyxTQUFTO1FBQzlDTCxrQkFBa0JHO0lBQ3BCO0lBRUEsbUNBQW1DO0lBQ25DLE1BQU1HLGFBQWEsQ0FBQ0M7UUFDbEIscUJBQ0UsOERBQUNDO1lBQWtCQyxXQUFXYixpREFBTUEsQ0FBQ2MsSUFBSTs7OEJBQ3ZDLDhEQUFDRjtvQkFBSUMsV0FBV2IsaURBQU1BLENBQUNlLEtBQUs7OEJBQzFCLDRFQUFDQztrQ0FBSUwsS0FBS0ksS0FBSzs7Ozs7Ozs7Ozs7OEJBRWpCLDhEQUFDSDtvQkFBSUMsV0FBV2IsaURBQU1BLENBQUNpQixXQUFXOzhCQUNoQyw0RUFBQ0M7a0NBQUdQLEtBQUtNLFdBQVc7Ozs7Ozs7Ozs7OzhCQUV0Qiw4REFBQ0U7b0JBQ0NOLFdBQVdiLGlEQUFNQSxDQUFDb0IsS0FBSztvQkFDdkJDLEtBQUssR0FBMEJWLE9BQXZCQSxLQUFLVyxTQUFTLENBQUNDLElBQUksRUFBQyxLQUE0QixPQUF6QlosS0FBS1csU0FBUyxDQUFDRSxTQUFTOzs7Ozs7O1dBVGpEYixLQUFLYyxFQUFFOzs7OztJQWFyQjtJQUVBMUIsZ0RBQVNBLENBQUM7UUFDUix3REFBd0Q7UUFDeEQsTUFBTTJCLGtCQUFrQnJCLFlBQVlHLE9BQU87UUFDM0NrQixnQkFBZ0JDLGdCQUFnQixDQUFDLFVBQVVyQjtRQUUzQyxPQUFPO1lBQ0wsMkRBQTJEO1lBQzNEb0IsZ0JBQWdCRSxtQkFBbUIsQ0FBQyxVQUFVdEI7UUFDaEQ7SUFDRixHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ007UUFBSUMsV0FBV2IsaURBQU1BLENBQUM2QixRQUFRO1FBQUVDLEtBQUt6QjtrQkFDbkNILEtBQUs2QixHQUFHLENBQUMsQ0FBQ3BCLE9BQVNELFdBQVdDOzs7Ozs7QUFHckM7R0E1Q01WO0tBQUFBO0FBOENOLCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ2FyZExpc3QvaW5kZXguanM/ZjI3ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9DYXJkTGlzdC5tb2R1bGUuY3NzXCI7XG5cbmNvbnN0IENhcmRMaXN0ID0gKHsgZGF0YSB9KSA9PiB7XG4gIGNvbnN0IFtzY3JvbGxQb3NpdGlvbiwgc2V0U2Nyb2xsUG9zaXRpb25dID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IGNhcmRMaXN0UmVmID0gdXNlUmVmKG51bGwpO1xuXG4gIC8vIE1hbmVqYXIgZWwgZGVzcGxhemFtaWVudG8gaGFjaWEgYWJham9cbiAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gY2FyZExpc3RSZWYuY3VycmVudC5zY3JvbGxUb3A7XG4gICAgc2V0U2Nyb2xsUG9zaXRpb24ocG9zaXRpb24pO1xuICB9O1xuXG4gIC8vIEZ1bmNpw7NuIHBhcmEgcmVuZGVyaXphciB1bmEgY2FyZFxuICBjb25zdCByZW5kZXJDYXJkID0gKGl0ZW0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBrZXk9e2l0ZW0uaWR9IGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5cbiAgICAgICAgICA8aDI+e2l0ZW0udGl0bGV9PC9oMj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpcHRpb259PlxuICAgICAgICAgIDxwPntpdGVtLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxpbWdcbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZX1cbiAgICAgICAgICBzcmM9e2Ake2l0ZW0udGh1bWJuYWlsLnBhdGh9LiR7aXRlbS50aHVtYm5haWwuZXh0ZW5zaW9ufWB9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gQWdyZWdhciBlbCBsaXN0ZW5lciBkZSBzY3JvbGwgYWwgY2FyZ2FyIGVsIGNvbXBvbmVudGVcbiAgICBjb25zdCBjYXJkTGlzdEVsZW1lbnQgPSBjYXJkTGlzdFJlZi5jdXJyZW50O1xuICAgIGNhcmRMaXN0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZVNjcm9sbCk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgLy8gUmVtb3ZlciBlbCBsaXN0ZW5lciBkZSBzY3JvbGwgYWwgZGVzbW9udGFyIGVsIGNvbXBvbmVudGVcbiAgICAgIGNhcmRMaXN0RWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZVNjcm9sbCk7XG4gICAgfTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkTGlzdH0gcmVmPXtjYXJkTGlzdFJlZn0+XG4gICAgICB7ZGF0YS5tYXAoKGl0ZW0pID0+IHJlbmRlckNhcmQoaXRlbSkpfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FyZExpc3Q7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsInVzZUVmZmVjdCIsInN0eWxlcyIsIkNhcmRMaXN0IiwiZGF0YSIsInNjcm9sbFBvc2l0aW9uIiwic2V0U2Nyb2xsUG9zaXRpb24iLCJjYXJkTGlzdFJlZiIsImhhbmRsZVNjcm9sbCIsInBvc2l0aW9uIiwiY3VycmVudCIsInNjcm9sbFRvcCIsInJlbmRlckNhcmQiLCJpdGVtIiwiZGl2IiwiY2xhc3NOYW1lIiwiY2FyZCIsInRpdGxlIiwiaDIiLCJkZXNjcmlwdGlvbiIsInAiLCJpbWciLCJpbWFnZSIsInNyYyIsInRodW1ibmFpbCIsInBhdGgiLCJleHRlbnNpb24iLCJpZCIsImNhcmRMaXN0RWxlbWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY2FyZExpc3QiLCJyZWYiLCJtYXAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./components/CardList/index.js\n"));

/***/ })

});