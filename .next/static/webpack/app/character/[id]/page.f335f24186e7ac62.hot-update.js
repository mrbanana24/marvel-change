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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _CardList_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CardList.module.css */ \"(app-client)/./components/CardList/CardList.module.css\");\n/* harmony import */ var _CardList_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_CardList_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst CardList = (param)=>{\n    let { data } = param;\n    _s();\n    const [scrollPosition, setScrollPosition] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const cardListRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    // Manejar el desplazamiento hacia abajo\n    const handleScroll = ()=>{\n        const position = cardListRef.current.scrollTop;\n        setScrollPosition(position);\n    };\n    // Función para renderizar una card\n    const renderCard = (item)=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_CardList_module_css__WEBPACK_IMPORTED_MODULE_2___default().card),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: \"\".concat(item.thumbnail.path, \".\").concat(item.thumbnail.extension)\n                }, void 0, false, {\n                    fileName: \"/Users/franperci/Desktop/Personal/marvel-change/components/CardList/index.js\",\n                    lineNumber: 20,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_CardList_module_css__WEBPACK_IMPORTED_MODULE_2___default().title),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: item.title\n                    }, void 0, false, {\n                        fileName: \"/Users/franperci/Desktop/Personal/marvel-change/components/CardList/index.js\",\n                        lineNumber: 22,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/franperci/Desktop/Personal/marvel-change/components/CardList/index.js\",\n                    lineNumber: 21,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_CardList_module_css__WEBPACK_IMPORTED_MODULE_2___default().description),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: item.description\n                    }, void 0, false, {\n                        fileName: \"/Users/franperci/Desktop/Personal/marvel-change/components/CardList/index.js\",\n                        lineNumber: 25,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/franperci/Desktop/Personal/marvel-change/components/CardList/index.js\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, item.id, true, {\n            fileName: \"/Users/franperci/Desktop/Personal/marvel-change/components/CardList/index.js\",\n            lineNumber: 19,\n            columnNumber: 7\n        }, undefined);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Agregar el listener de scroll al cargar el componente\n        const cardListElement = cardListRef.current;\n        cardListElement.addEventListener(\"scroll\", handleScroll);\n        return ()=>{\n            // Remover el listener de scroll al desmontar el componente\n            cardListElement.removeEventListener(\"scroll\", handleScroll);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_CardList_module_css__WEBPACK_IMPORTED_MODULE_2___default().cardList),\n        ref: cardListRef,\n        children: data.map((item)=>renderCard(item))\n    }, void 0, false, {\n        fileName: \"/Users/franperci/Desktop/Personal/marvel-change/components/CardList/index.js\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CardList, \"z2PoVgf9oMvDI6pGEnday+6gWfk=\");\n_c = CardList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CardList);\nvar _c;\n$RefreshReg$(_c, \"CardList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9DYXJkTGlzdC9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUUyRDtBQUNoQjtBQUUzQyxNQUFNSyxXQUFXO1FBQUMsRUFBRUMsSUFBSSxFQUFFOztJQUN4QixNQUFNLENBQUNDLGdCQUFnQkMsa0JBQWtCLEdBQUdQLCtDQUFRQSxDQUFDO0lBQ3JELE1BQU1RLGNBQWNQLDZDQUFNQSxDQUFDO0lBRTNCLHdDQUF3QztJQUN4QyxNQUFNUSxlQUFlO1FBQ25CLE1BQU1DLFdBQVdGLFlBQVlHLE9BQU8sQ0FBQ0MsU0FBUztRQUM5Q0wsa0JBQWtCRztJQUNwQjtJQUVBLG1DQUFtQztJQUNuQyxNQUFNRyxhQUFhLENBQUNDO1FBQ2xCLHFCQUNFLDhEQUFDQztZQUFrQkMsV0FBV2Isa0VBQVc7OzhCQUN2Qyw4REFBQ2U7b0JBQUlDLEtBQUssR0FBMEJMLE9BQXZCQSxLQUFLTSxTQUFTLENBQUNDLElBQUksRUFBQyxLQUE0QixPQUF6QlAsS0FBS00sU0FBUyxDQUFDRSxTQUFTOzs7Ozs7OEJBQzVELDhEQUFDUDtvQkFBSUMsV0FBV2IsbUVBQVk7OEJBQzFCLDRFQUFDcUI7a0NBQUlWLEtBQUtTLEtBQUs7Ozs7Ozs7Ozs7OzhCQUVqQiw4REFBQ1I7b0JBQUlDLFdBQVdiLHlFQUFrQjs4QkFDaEMsNEVBQUN1QjtrQ0FBR1osS0FBS1csV0FBVzs7Ozs7Ozs7Ozs7O1dBTmRYLEtBQUthLEVBQUU7Ozs7O0lBVXJCO0lBRUF6QixnREFBU0EsQ0FBQztRQUNSLHdEQUF3RDtRQUN4RCxNQUFNMEIsa0JBQWtCcEIsWUFBWUcsT0FBTztRQUMzQ2lCLGdCQUFnQkMsZ0JBQWdCLENBQUMsVUFBVXBCO1FBRTNDLE9BQU87WUFDTCwyREFBMkQ7WUFDM0RtQixnQkFBZ0JFLG1CQUFtQixDQUFDLFVBQVVyQjtRQUNoRDtJQUNGLEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDTTtRQUFJQyxXQUFXYixzRUFBZTtRQUFFNkIsS0FBS3hCO2tCQUNuQ0gsS0FBSzRCLEdBQUcsQ0FBQyxDQUFDbkIsT0FBU0QsV0FBV0M7Ozs7OztBQUdyQztHQXpDTVY7S0FBQUE7QUEyQ04sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJkTGlzdC9pbmRleC5qcz9mMjdlIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL0NhcmRMaXN0Lm1vZHVsZS5jc3NcIjtcblxuY29uc3QgQ2FyZExpc3QgPSAoeyBkYXRhIH0pID0+IHtcbiAgY29uc3QgW3Njcm9sbFBvc2l0aW9uLCBzZXRTY3JvbGxQb3NpdGlvbl0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgY2FyZExpc3RSZWYgPSB1c2VSZWYobnVsbCk7XG5cbiAgLy8gTWFuZWphciBlbCBkZXNwbGF6YW1pZW50byBoYWNpYSBhYmFqb1xuICBjb25zdCBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XG4gICAgY29uc3QgcG9zaXRpb24gPSBjYXJkTGlzdFJlZi5jdXJyZW50LnNjcm9sbFRvcDtcbiAgICBzZXRTY3JvbGxQb3NpdGlvbihwb3NpdGlvbik7XG4gIH07XG5cbiAgLy8gRnVuY2nDs24gcGFyYSByZW5kZXJpemFyIHVuYSBjYXJkXG4gIGNvbnN0IHJlbmRlckNhcmQgPSAoaXRlbSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGtleT17aXRlbS5pZH0gY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH0+XG4gICAgICAgIDxpbWcgc3JjPXtgJHtpdGVtLnRodW1ibmFpbC5wYXRofS4ke2l0ZW0udGh1bWJuYWlsLmV4dGVuc2lvbn1gfSAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5cbiAgICAgICAgICA8aDI+e2l0ZW0udGl0bGV9PC9oMj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpcHRpb259PlxuICAgICAgICAgIDxwPntpdGVtLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gQWdyZWdhciBlbCBsaXN0ZW5lciBkZSBzY3JvbGwgYWwgY2FyZ2FyIGVsIGNvbXBvbmVudGVcbiAgICBjb25zdCBjYXJkTGlzdEVsZW1lbnQgPSBjYXJkTGlzdFJlZi5jdXJyZW50O1xuICAgIGNhcmRMaXN0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZVNjcm9sbCk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgLy8gUmVtb3ZlciBlbCBsaXN0ZW5lciBkZSBzY3JvbGwgYWwgZGVzbW9udGFyIGVsIGNvbXBvbmVudGVcbiAgICAgIGNhcmRMaXN0RWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZVNjcm9sbCk7XG4gICAgfTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkTGlzdH0gcmVmPXtjYXJkTGlzdFJlZn0+XG4gICAgICB7ZGF0YS5tYXAoKGl0ZW0pID0+IHJlbmRlckNhcmQoaXRlbSkpfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FyZExpc3Q7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsInVzZUVmZmVjdCIsInN0eWxlcyIsIkNhcmRMaXN0IiwiZGF0YSIsInNjcm9sbFBvc2l0aW9uIiwic2V0U2Nyb2xsUG9zaXRpb24iLCJjYXJkTGlzdFJlZiIsImhhbmRsZVNjcm9sbCIsInBvc2l0aW9uIiwiY3VycmVudCIsInNjcm9sbFRvcCIsInJlbmRlckNhcmQiLCJpdGVtIiwiZGl2IiwiY2xhc3NOYW1lIiwiY2FyZCIsImltZyIsInNyYyIsInRodW1ibmFpbCIsInBhdGgiLCJleHRlbnNpb24iLCJ0aXRsZSIsImgyIiwiZGVzY3JpcHRpb24iLCJwIiwiaWQiLCJjYXJkTGlzdEVsZW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNhcmRMaXN0IiwicmVmIiwibWFwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./components/CardList/index.js\n"));

/***/ })

});