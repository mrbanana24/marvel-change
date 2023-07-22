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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _CardList_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CardList.module.css */ \"(app-client)/./components/CardList/CardList.module.css\");\n/* harmony import */ var _CardList_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_CardList_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst CardList = (param)=>{\n    let { data } = param;\n    _s();\n    const [scrollPosition, setScrollPosition] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const cardListRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    // Manejar el desplazamiento hacia abajo\n    const handleScroll = ()=>{\n        const position = cardListRef.current.scrollTop;\n        setScrollPosition(position);\n    };\n    // Función para renderizar una card\n    const renderCard = (item)=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_CardList_module_css__WEBPACK_IMPORTED_MODULE_2___default().card),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        className: (_CardList_module_css__WEBPACK_IMPORTED_MODULE_2___default().image),\n                        src: \"\".concat(item.thumbnail.path, \".\").concat(item.thumbnail.extension)\n                    }, void 0, false, {\n                        fileName: \"/Users/franperci/Desktop/Personal/marvel-change/components/CardList/index.js\",\n                        lineNumber: 21,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/franperci/Desktop/Personal/marvel-change/components/CardList/index.js\",\n                    lineNumber: 20,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_CardList_module_css__WEBPACK_IMPORTED_MODULE_2___default().title),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: item.title\n                    }, void 0, false, {\n                        fileName: \"/Users/franperci/Desktop/Personal/marvel-change/components/CardList/index.js\",\n                        lineNumber: 27,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/franperci/Desktop/Personal/marvel-change/components/CardList/index.js\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_CardList_module_css__WEBPACK_IMPORTED_MODULE_2___default().description),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: item.description\n                    }, void 0, false, {\n                        fileName: \"/Users/franperci/Desktop/Personal/marvel-change/components/CardList/index.js\",\n                        lineNumber: 30,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/franperci/Desktop/Personal/marvel-change/components/CardList/index.js\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, item.id, true, {\n            fileName: \"/Users/franperci/Desktop/Personal/marvel-change/components/CardList/index.js\",\n            lineNumber: 19,\n            columnNumber: 7\n        }, undefined);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Agregar el listener de scroll al cargar el componente\n        const cardListElement = cardListRef.current;\n        cardListElement.addEventListener(\"scroll\", handleScroll);\n        return ()=>{\n            // Remover el listener de scroll al desmontar el componente\n            cardListElement.removeEventListener(\"scroll\", handleScroll);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_CardList_module_css__WEBPACK_IMPORTED_MODULE_2___default().cardList),\n        ref: cardListRef,\n        children: data.map((item)=>renderCard(item))\n    }, void 0, false, {\n        fileName: \"/Users/franperci/Desktop/Personal/marvel-change/components/CardList/index.js\",\n        lineNumber: 48,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CardList, \"z2PoVgf9oMvDI6pGEnday+6gWfk=\");\n_c = CardList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CardList);\nvar _c;\n$RefreshReg$(_c, \"CardList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9DYXJkTGlzdC9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUUyRDtBQUNoQjtBQUUzQyxNQUFNSyxXQUFXO1FBQUMsRUFBRUMsSUFBSSxFQUFFOztJQUN4QixNQUFNLENBQUNDLGdCQUFnQkMsa0JBQWtCLEdBQUdQLCtDQUFRQSxDQUFDO0lBQ3JELE1BQU1RLGNBQWNQLDZDQUFNQSxDQUFDO0lBRTNCLHdDQUF3QztJQUN4QyxNQUFNUSxlQUFlO1FBQ25CLE1BQU1DLFdBQVdGLFlBQVlHLE9BQU8sQ0FBQ0MsU0FBUztRQUM5Q0wsa0JBQWtCRztJQUNwQjtJQUVBLG1DQUFtQztJQUNuQyxNQUFNRyxhQUFhLENBQUNDO1FBQ2xCLHFCQUNFLDhEQUFDQztZQUFrQkMsV0FBV2Isa0VBQVc7OzhCQUN2Qyw4REFBQ1k7OEJBQ0MsNEVBQUNHO3dCQUNDRixXQUFXYixtRUFBWTt3QkFDdkJpQixLQUFLLEdBQTBCTixPQUF2QkEsS0FBS08sU0FBUyxDQUFDQyxJQUFJLEVBQUMsS0FBNEIsT0FBekJSLEtBQUtPLFNBQVMsQ0FBQ0UsU0FBUzs7Ozs7Ozs7Ozs7OEJBRzNELDhEQUFDUjtvQkFBSUMsV0FBV2IsbUVBQVk7OEJBQzFCLDRFQUFDc0I7a0NBQUlYLEtBQUtVLEtBQUs7Ozs7Ozs7Ozs7OzhCQUVqQiw4REFBQ1Q7b0JBQUlDLFdBQVdiLHlFQUFrQjs4QkFDaEMsNEVBQUN3QjtrQ0FBR2IsS0FBS1ksV0FBVzs7Ozs7Ozs7Ozs7O1dBWGRaLEtBQUtjLEVBQUU7Ozs7O0lBZXJCO0lBRUExQixnREFBU0EsQ0FBQztRQUNSLHdEQUF3RDtRQUN4RCxNQUFNMkIsa0JBQWtCckIsWUFBWUcsT0FBTztRQUMzQ2tCLGdCQUFnQkMsZ0JBQWdCLENBQUMsVUFBVXJCO1FBRTNDLE9BQU87WUFDTCwyREFBMkQ7WUFDM0RvQixnQkFBZ0JFLG1CQUFtQixDQUFDLFVBQVV0QjtRQUNoRDtJQUNGLEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDTTtRQUFJQyxXQUFXYixzRUFBZTtRQUFFOEIsS0FBS3pCO2tCQUNuQ0gsS0FBSzZCLEdBQUcsQ0FBQyxDQUFDcEIsT0FBU0QsV0FBV0M7Ozs7OztBQUdyQztHQTlDTVY7S0FBQUE7QUFnRE4sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJkTGlzdC9pbmRleC5qcz9mMjdlIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL0NhcmRMaXN0Lm1vZHVsZS5jc3NcIjtcblxuY29uc3QgQ2FyZExpc3QgPSAoeyBkYXRhIH0pID0+IHtcbiAgY29uc3QgW3Njcm9sbFBvc2l0aW9uLCBzZXRTY3JvbGxQb3NpdGlvbl0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgY2FyZExpc3RSZWYgPSB1c2VSZWYobnVsbCk7XG5cbiAgLy8gTWFuZWphciBlbCBkZXNwbGF6YW1pZW50byBoYWNpYSBhYmFqb1xuICBjb25zdCBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XG4gICAgY29uc3QgcG9zaXRpb24gPSBjYXJkTGlzdFJlZi5jdXJyZW50LnNjcm9sbFRvcDtcbiAgICBzZXRTY3JvbGxQb3NpdGlvbihwb3NpdGlvbik7XG4gIH07XG5cbiAgLy8gRnVuY2nDs24gcGFyYSByZW5kZXJpemFyIHVuYSBjYXJkXG4gIGNvbnN0IHJlbmRlckNhcmQgPSAoaXRlbSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGtleT17aXRlbS5pZH0gY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH0+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2V9XG4gICAgICAgICAgICBzcmM9e2Ake2l0ZW0udGh1bWJuYWlsLnBhdGh9LiR7aXRlbS50aHVtYm5haWwuZXh0ZW5zaW9ufWB9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PlxuICAgICAgICAgIDxoMj57aXRlbS50aXRsZX08L2gyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbn0+XG4gICAgICAgICAgPHA+e2l0ZW0uZGVzY3JpcHRpb259PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBBZ3JlZ2FyIGVsIGxpc3RlbmVyIGRlIHNjcm9sbCBhbCBjYXJnYXIgZWwgY29tcG9uZW50ZVxuICAgIGNvbnN0IGNhcmRMaXN0RWxlbWVudCA9IGNhcmRMaXN0UmVmLmN1cnJlbnQ7XG4gICAgY2FyZExpc3RFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlU2Nyb2xsKTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAvLyBSZW1vdmVyIGVsIGxpc3RlbmVyIGRlIHNjcm9sbCBhbCBkZXNtb250YXIgZWwgY29tcG9uZW50ZVxuICAgICAgY2FyZExpc3RFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlU2Nyb2xsKTtcbiAgICB9O1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcmRMaXN0fSByZWY9e2NhcmRMaXN0UmVmfT5cbiAgICAgIHtkYXRhLm1hcCgoaXRlbSkgPT4gcmVuZGVyQ2FyZChpdGVtKSl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYXJkTGlzdDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlUmVmIiwidXNlRWZmZWN0Iiwic3R5bGVzIiwiQ2FyZExpc3QiLCJkYXRhIiwic2Nyb2xsUG9zaXRpb24iLCJzZXRTY3JvbGxQb3NpdGlvbiIsImNhcmRMaXN0UmVmIiwiaGFuZGxlU2Nyb2xsIiwicG9zaXRpb24iLCJjdXJyZW50Iiwic2Nyb2xsVG9wIiwicmVuZGVyQ2FyZCIsIml0ZW0iLCJkaXYiLCJjbGFzc05hbWUiLCJjYXJkIiwiaW1nIiwiaW1hZ2UiLCJzcmMiLCJ0aHVtYm5haWwiLCJwYXRoIiwiZXh0ZW5zaW9uIiwidGl0bGUiLCJoMiIsImRlc2NyaXB0aW9uIiwicCIsImlkIiwiY2FyZExpc3RFbGVtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjYXJkTGlzdCIsInJlZiIsIm1hcCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./components/CardList/index.js\n"));

/***/ })

});