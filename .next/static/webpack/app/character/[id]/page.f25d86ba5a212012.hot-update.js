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

/***/ "(app-client)/./components/CardList/index.js":
/*!**************************************!*\
  !*** ./components/CardList/index.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _CardList_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CardList.module.css */ \"(app-client)/./components/CardList/CardList.module.css\");\n/* harmony import */ var _CardList_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_CardList_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst CardList = (param)=>{\n    let { data } = param;\n    _s();\n    const [scrollPosition, setScrollPosition] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const cardListRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    // // Manejar el desplazamiento hacia abajo\n    // const handleScroll = () => {\n    //   const position = cardListRef.current.scrollTop;\n    //   setScrollPosition(position);\n    // };\n    // Función para renderizar una card\n    const renderCard = (item)=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_CardList_module_css__WEBPACK_IMPORTED_MODULE_2___default().card),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    children: item.title\n                }, void 0, false, {\n                    fileName: \"/Users/franperci/Desktop/Personal/marvel-change/components/CardList/index.js\",\n                    lineNumber: 21,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: item.description\n                }, void 0, false, {\n                    fileName: \"/Users/franperci/Desktop/Personal/marvel-change/components/CardList/index.js\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, item.id, true, {\n            fileName: \"/Users/franperci/Desktop/Personal/marvel-change/components/CardList/index.js\",\n            lineNumber: 19,\n            columnNumber: 7\n        }, undefined);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Agregar el listener de scroll al cargar el componente\n        const cardListElement = cardListRef.current;\n        cardListElement.addEventListener(\"scroll\", handleScroll);\n        return ()=>{\n            // Remover el listener de scroll al desmontar el componente\n            cardListElement.removeEventListener(\"scroll\", handleScroll);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_CardList_module_css__WEBPACK_IMPORTED_MODULE_2___default().cardList),\n        ref: cardListRef,\n        children: data.map((item)=>renderCard(item))\n    }, void 0, false, {\n        fileName: \"/Users/franperci/Desktop/Personal/marvel-change/components/CardList/index.js\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CardList, \"z2PoVgf9oMvDI6pGEnday+6gWfk=\");\n_c = CardList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CardList);\nvar _c;\n$RefreshReg$(_c, \"CardList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9DYXJkTGlzdC9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUUyRDtBQUNoQjtBQUUzQyxNQUFNSyxXQUFXO1FBQUMsRUFBRUMsSUFBSSxFQUFFOztJQUN4QixNQUFNLENBQUNDLGdCQUFnQkMsa0JBQWtCLEdBQUdQLCtDQUFRQSxDQUFDO0lBQ3JELE1BQU1RLGNBQWNQLDZDQUFNQSxDQUFDO0lBRTNCLDJDQUEyQztJQUMzQywrQkFBK0I7SUFDL0Isb0RBQW9EO0lBQ3BELGlDQUFpQztJQUNqQyxLQUFLO0lBRUwsbUNBQW1DO0lBQ25DLE1BQU1RLGFBQWEsQ0FBQ0M7UUFDbEIscUJBQ0UsOERBQUNDO1lBQWtCQyxXQUFXVCxrRUFBVzs7OEJBRXZDLDhEQUFDVzs4QkFBSUosS0FBS0ssS0FBSzs7Ozs7OzhCQUNmLDhEQUFDQzs4QkFBR04sS0FBS08sV0FBVzs7Ozs7OztXQUhaUCxLQUFLUSxFQUFFOzs7OztJQU1yQjtJQUVBaEIsZ0RBQVNBLENBQUM7UUFDUix3REFBd0Q7UUFDeEQsTUFBTWlCLGtCQUFrQlgsWUFBWVksT0FBTztRQUMzQ0QsZ0JBQWdCRSxnQkFBZ0IsQ0FBQyxVQUFVQztRQUUzQyxPQUFPO1lBQ0wsMkRBQTJEO1lBQzNESCxnQkFBZ0JJLG1CQUFtQixDQUFDLFVBQVVEO1FBQ2hEO0lBQ0YsR0FBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNYO1FBQUlDLFdBQVdULHNFQUFlO1FBQUVzQixLQUFLakI7a0JBQ25DSCxLQUFLcUIsR0FBRyxDQUFDLENBQUNoQixPQUFTRCxXQUFXQzs7Ozs7O0FBR3JDO0dBckNNTjtLQUFBQTtBQXVDTiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0NhcmRMaXN0L2luZGV4LmpzP2YyN2UiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vQ2FyZExpc3QubW9kdWxlLmNzc1wiO1xuXG5jb25zdCBDYXJkTGlzdCA9ICh7IGRhdGEgfSkgPT4ge1xuICBjb25zdCBbc2Nyb2xsUG9zaXRpb24sIHNldFNjcm9sbFBvc2l0aW9uXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBjYXJkTGlzdFJlZiA9IHVzZVJlZihudWxsKTtcblxuICAvLyAvLyBNYW5lamFyIGVsIGRlc3BsYXphbWllbnRvIGhhY2lhIGFiYWpvXG4gIC8vIGNvbnN0IGhhbmRsZVNjcm9sbCA9ICgpID0+IHtcbiAgLy8gICBjb25zdCBwb3NpdGlvbiA9IGNhcmRMaXN0UmVmLmN1cnJlbnQuc2Nyb2xsVG9wO1xuICAvLyAgIHNldFNjcm9sbFBvc2l0aW9uKHBvc2l0aW9uKTtcbiAgLy8gfTtcblxuICAvLyBGdW5jacOzbiBwYXJhIHJlbmRlcml6YXIgdW5hIGNhcmRcbiAgY29uc3QgcmVuZGVyQ2FyZCA9IChpdGVtKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYga2V5PXtpdGVtLmlkfSBjbGFzc05hbWU9e3N0eWxlcy5jYXJkfT5cbiAgICAgICAgey8qIEFxdcOtIGNvbG9jYSBlbCBjb250ZW5pZG8gZGUgdHUgY2FyZCAqL31cbiAgICAgICAgPGgyPntpdGVtLnRpdGxlfTwvaDI+XG4gICAgICAgIDxwPntpdGVtLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBBZ3JlZ2FyIGVsIGxpc3RlbmVyIGRlIHNjcm9sbCBhbCBjYXJnYXIgZWwgY29tcG9uZW50ZVxuICAgIGNvbnN0IGNhcmRMaXN0RWxlbWVudCA9IGNhcmRMaXN0UmVmLmN1cnJlbnQ7XG4gICAgY2FyZExpc3RFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlU2Nyb2xsKTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAvLyBSZW1vdmVyIGVsIGxpc3RlbmVyIGRlIHNjcm9sbCBhbCBkZXNtb250YXIgZWwgY29tcG9uZW50ZVxuICAgICAgY2FyZExpc3RFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlU2Nyb2xsKTtcbiAgICB9O1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcmRMaXN0fSByZWY9e2NhcmRMaXN0UmVmfT5cbiAgICAgIHtkYXRhLm1hcCgoaXRlbSkgPT4gcmVuZGVyQ2FyZChpdGVtKSl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYXJkTGlzdDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlUmVmIiwidXNlRWZmZWN0Iiwic3R5bGVzIiwiQ2FyZExpc3QiLCJkYXRhIiwic2Nyb2xsUG9zaXRpb24iLCJzZXRTY3JvbGxQb3NpdGlvbiIsImNhcmRMaXN0UmVmIiwicmVuZGVyQ2FyZCIsIml0ZW0iLCJkaXYiLCJjbGFzc05hbWUiLCJjYXJkIiwiaDIiLCJ0aXRsZSIsInAiLCJkZXNjcmlwdGlvbiIsImlkIiwiY2FyZExpc3RFbGVtZW50IiwiY3VycmVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJoYW5kbGVTY3JvbGwiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY2FyZExpc3QiLCJyZWYiLCJtYXAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./components/CardList/index.js\n"));

/***/ })

});