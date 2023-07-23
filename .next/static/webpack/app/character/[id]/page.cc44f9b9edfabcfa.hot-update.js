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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _CardList_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CardList.module.css */ \"(app-client)/./components/CardList/CardList.module.css\");\n/* harmony import */ var _CardList_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_CardList_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst CardList = (param)=>{\n    let { data } = param;\n    _s();\n    const [scrollPosition, setScrollPosition] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const cardListRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    // Manejar el desplazamiento hacia abajo\n    const handleScroll = ()=>{\n        const position = cardListRef.current.scrollTop;\n        setScrollPosition(position);\n    };\n    // Función para renderizar una card\n    const renderCard = (item)=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_CardList_module_css__WEBPACK_IMPORTED_MODULE_2___default().card),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: \"\".concat(item.thumbnail.path, \".\").concat(item.thumbnail.extension)\n                }, void 0, false, {\n                    fileName: \"/Users/franperci/Desktop/Personal/marvel-change/components/CardList/index.js\",\n                    lineNumber: 20,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: (_CardList_module_css__WEBPACK_IMPORTED_MODULE_2___default().title),\n                        children: item.title\n                    }, void 0, false, {\n                        fileName: \"/Users/franperci/Desktop/Personal/marvel-change/components/CardList/index.js\",\n                        lineNumber: 22,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/franperci/Desktop/Personal/marvel-change/components/CardList/index.js\",\n                    lineNumber: 21,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_CardList_module_css__WEBPACK_IMPORTED_MODULE_2___default().description),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: item.description\n                    }, void 0, false, {\n                        fileName: \"/Users/franperci/Desktop/Personal/marvel-change/components/CardList/index.js\",\n                        lineNumber: 25,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/franperci/Desktop/Personal/marvel-change/components/CardList/index.js\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, item.id, true, {\n            fileName: \"/Users/franperci/Desktop/Personal/marvel-change/components/CardList/index.js\",\n            lineNumber: 19,\n            columnNumber: 7\n        }, undefined);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Agregar el listener de scroll al cargar el componente\n        const cardListElement = cardListRef.current;\n        cardListElement.addEventListener(\"scroll\", handleScroll);\n        return ()=>{\n            // Remover el listener de scroll al desmontar el componente\n            cardListElement.removeEventListener(\"scroll\", handleScroll);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_CardList_module_css__WEBPACK_IMPORTED_MODULE_2___default().cardList),\n        ref: cardListRef,\n        children: data.map((item)=>renderCard(item))\n    }, void 0, false, {\n        fileName: \"/Users/franperci/Desktop/Personal/marvel-change/components/CardList/index.js\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CardList, \"z2PoVgf9oMvDI6pGEnday+6gWfk=\");\n_c = CardList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CardList);\nvar _c;\n$RefreshReg$(_c, \"CardList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9DYXJkTGlzdC9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUUyRDtBQUNoQjtBQUUzQyxNQUFNSyxXQUFXO1FBQUMsRUFBRUMsSUFBSSxFQUFFOztJQUN4QixNQUFNLENBQUNDLGdCQUFnQkMsa0JBQWtCLEdBQUdQLCtDQUFRQSxDQUFDO0lBQ3JELE1BQU1RLGNBQWNQLDZDQUFNQSxDQUFDO0lBRTNCLHdDQUF3QztJQUN4QyxNQUFNUSxlQUFlO1FBQ25CLE1BQU1DLFdBQVdGLFlBQVlHLE9BQU8sQ0FBQ0MsU0FBUztRQUM5Q0wsa0JBQWtCRztJQUNwQjtJQUVBLG1DQUFtQztJQUNuQyxNQUFNRyxhQUFhLENBQUNDO1FBQ2xCLHFCQUNFLDhEQUFDQztZQUFrQkMsV0FBV2Isa0VBQVc7OzhCQUN2Qyw4REFBQ2U7b0JBQUlDLEtBQUssR0FBMEJMLE9BQXZCQSxLQUFLTSxTQUFTLENBQUNDLElBQUksRUFBQyxLQUE0QixPQUF6QlAsS0FBS00sU0FBUyxDQUFDRSxTQUFTOzs7Ozs7OEJBQzVELDhEQUFDUDs4QkFDQyw0RUFBQ1E7d0JBQUdQLFdBQVdiLG1FQUFZO2tDQUFHVyxLQUFLVSxLQUFLOzs7Ozs7Ozs7Ozs4QkFFMUMsOERBQUNUO29CQUFJQyxXQUFXYix5RUFBa0I7OEJBQ2hDLDRFQUFDdUI7a0NBQUdaLEtBQUtXLFdBQVc7Ozs7Ozs7Ozs7OztXQU5kWCxLQUFLYSxFQUFFOzs7OztJQVVyQjtJQUVBekIsZ0RBQVNBLENBQUM7UUFDUix3REFBd0Q7UUFDeEQsTUFBTTBCLGtCQUFrQnBCLFlBQVlHLE9BQU87UUFDM0NpQixnQkFBZ0JDLGdCQUFnQixDQUFDLFVBQVVwQjtRQUUzQyxPQUFPO1lBQ0wsMkRBQTJEO1lBQzNEbUIsZ0JBQWdCRSxtQkFBbUIsQ0FBQyxVQUFVckI7UUFDaEQ7SUFDRixHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ007UUFBSUMsV0FBV2Isc0VBQWU7UUFBRTZCLEtBQUt4QjtrQkFDbkNILEtBQUs0QixHQUFHLENBQUMsQ0FBQ25CLE9BQVNELFdBQVdDOzs7Ozs7QUFHckM7R0F6Q01WO0tBQUFBO0FBMkNOLCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ2FyZExpc3QvaW5kZXguanM/ZjI3ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9DYXJkTGlzdC5tb2R1bGUuY3NzXCI7XG5cbmNvbnN0IENhcmRMaXN0ID0gKHsgZGF0YSB9KSA9PiB7XG4gIGNvbnN0IFtzY3JvbGxQb3NpdGlvbiwgc2V0U2Nyb2xsUG9zaXRpb25dID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IGNhcmRMaXN0UmVmID0gdXNlUmVmKG51bGwpO1xuXG4gIC8vIE1hbmVqYXIgZWwgZGVzcGxhemFtaWVudG8gaGFjaWEgYWJham9cbiAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gY2FyZExpc3RSZWYuY3VycmVudC5zY3JvbGxUb3A7XG4gICAgc2V0U2Nyb2xsUG9zaXRpb24ocG9zaXRpb24pO1xuICB9O1xuXG4gIC8vIEZ1bmNpw7NuIHBhcmEgcmVuZGVyaXphciB1bmEgY2FyZFxuICBjb25zdCByZW5kZXJDYXJkID0gKGl0ZW0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBrZXk9e2l0ZW0uaWR9IGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9PlxuICAgICAgICA8aW1nIHNyYz17YCR7aXRlbS50aHVtYm5haWwucGF0aH0uJHtpdGVtLnRodW1ibmFpbC5leHRlbnNpb259YH0gLz5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PntpdGVtLnRpdGxlfTwvaDI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9ufT5cbiAgICAgICAgICA8cD57aXRlbS5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIEFncmVnYXIgZWwgbGlzdGVuZXIgZGUgc2Nyb2xsIGFsIGNhcmdhciBlbCBjb21wb25lbnRlXG4gICAgY29uc3QgY2FyZExpc3RFbGVtZW50ID0gY2FyZExpc3RSZWYuY3VycmVudDtcbiAgICBjYXJkTGlzdEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBoYW5kbGVTY3JvbGwpO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIC8vIFJlbW92ZXIgZWwgbGlzdGVuZXIgZGUgc2Nyb2xsIGFsIGRlc21vbnRhciBlbCBjb21wb25lbnRlXG4gICAgICBjYXJkTGlzdEVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBoYW5kbGVTY3JvbGwpO1xuICAgIH07XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZExpc3R9IHJlZj17Y2FyZExpc3RSZWZ9PlxuICAgICAge2RhdGEubWFwKChpdGVtKSA9PiByZW5kZXJDYXJkKGl0ZW0pKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhcmRMaXN0O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJzdHlsZXMiLCJDYXJkTGlzdCIsImRhdGEiLCJzY3JvbGxQb3NpdGlvbiIsInNldFNjcm9sbFBvc2l0aW9uIiwiY2FyZExpc3RSZWYiLCJoYW5kbGVTY3JvbGwiLCJwb3NpdGlvbiIsImN1cnJlbnQiLCJzY3JvbGxUb3AiLCJyZW5kZXJDYXJkIiwiaXRlbSIsImRpdiIsImNsYXNzTmFtZSIsImNhcmQiLCJpbWciLCJzcmMiLCJ0aHVtYm5haWwiLCJwYXRoIiwiZXh0ZW5zaW9uIiwiaDIiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwicCIsImlkIiwiY2FyZExpc3RFbGVtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjYXJkTGlzdCIsInJlZiIsIm1hcCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./components/CardList/index.js\n"));

/***/ })

});