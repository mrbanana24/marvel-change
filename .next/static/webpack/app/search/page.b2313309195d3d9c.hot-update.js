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

/***/ "(app-client)/./src/app/utils/api.js":
/*!******************************!*\
  !*** ./src/app/utils/api.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getCharacterById: function() { return /* binding */ getCharacterById; },\n/* harmony export */   getCharacters: function() { return /* binding */ getCharacters; },\n/* harmony export */   getComicByCharacterId: function() { return /* binding */ getComicByCharacterId; },\n/* harmony export */   getComicById: function() { return /* binding */ getComicById; },\n/* harmony export */   searchCharacters: function() { return /* binding */ searchCharacters; },\n/* harmony export */   searchComics: function() { return /* binding */ searchComics; }\n/* harmony export */ });\n/* harmony import */ var md5__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! md5 */ \"(app-client)/./node_modules/md5/md5.js\");\n/* harmony import */ var md5__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(md5__WEBPACK_IMPORTED_MODULE_0__);\n\nconst API_BASE_URL = \"https://gateway.marvel.com/v1/public/\";\nconst API_PUBLIC_KEY = \"0f2c9401148e20833fe464a1e929cdb0\";\nconst API_PRIVATE_KEY = \"7147a23a7bce5bd4256d3fab2000afb090ef9f92\";\nconst getTimeStamp = ()=>Date.now().toString();\nconst getHash = (timeStamp)=>md5__WEBPACK_IMPORTED_MODULE_0___default()(timeStamp + API_PRIVATE_KEY + API_PUBLIC_KEY);\nconst timeStamp = getTimeStamp();\nconst hash = getHash(timeStamp);\nconst query = \"ts=\".concat(timeStamp, \"&apikey=\").concat(API_PUBLIC_KEY, \"&hash=\").concat(hash);\nconst getCharacters = async ()=>{\n    const response = await fetch(\"\".concat(API_BASE_URL, \"characters?\").concat(query, \"&limit=8\"));\n    const data = await response.json();\n    return data;\n};\nconst getCharacterById = async (id)=>{\n    const response = await fetch(\"\".concat(API_BASE_URL, \"characters/\").concat(id, \"?\").concat(query));\n    const data = await response.json();\n    return data;\n};\nconst getComicById = async (id)=>{\n    const response = await fetch(\"\".concat(API_BASE_URL, \"comics/\").concat(id, \"?\").concat(query));\n    const data = await response.json();\n    return data;\n};\n// Los comics deben estar ordenados por fecha\nconst getComicByCharacterId = async (id)=>{\n    const response = await fetch(\"\".concat(API_BASE_URL, \"characters/\").concat(id, \"/comics?\").concat(query, \"&orderBy=-onsaleDate\"));\n    const data = await response.json();\n    return data;\n};\nconst searchCharacters = async (querySearch)=>{\n    const response = await fetch(\"\".concat(API_BASE_URL, \"/characters?nameStartsWith=\").concat(querySearch, \"&limit=99&\").concat(query));\n    const data = await response.json();\n    return data;\n};\n// Obtener un comic por el titulo\nconst searchComics = async (querySearch)=>{\n    const response = await fetch(\"\".concat(API_BASE_URL, \"/comics?titleStartsWith=\").concat(querySearch, \"&limit=99&\").concat(query));\n    const data = await response.json();\n    return data;\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2FwcC91dGlscy9hcGkuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBc0I7QUFFdEIsTUFBTUMsZUFBZTtBQUNyQixNQUFNQyxpQkFBaUI7QUFDdkIsTUFBTUMsa0JBQWtCO0FBRXhCLE1BQU1DLGVBQWUsSUFBTUMsS0FBS0MsR0FBRyxHQUFHQyxRQUFRO0FBQzlDLE1BQU1DLFVBQVUsQ0FBQ0MsWUFDZlQsMENBQUdBLENBQUNTLFlBQVlOLGtCQUFrQkQ7QUFFcEMsTUFBTU8sWUFBWUw7QUFDbEIsTUFBTU0sT0FBT0YsUUFBUUM7QUFDckIsTUFBTUUsUUFBUSxNQUEwQlQsT0FBcEJPLFdBQVUsWUFBaUNDLE9BQXZCUixnQkFBZSxVQUFhLE9BQUxRO0FBRXhELE1BQU1FLGdCQUFnQjtJQUMzQixNQUFNQyxXQUFXLE1BQU1DLE1BQU0sR0FBNkJILE9BQTFCVixjQUFhLGVBQW1CLE9BQU5VLE9BQU07SUFDaEUsTUFBTUksT0FBTyxNQUFNRixTQUFTRyxJQUFJO0lBQ2hDLE9BQU9EO0FBQ1QsRUFBRTtBQUVLLE1BQU1FLG1CQUFtQixPQUFPQztJQUNyQyxNQUFNTCxXQUFXLE1BQU1DLE1BQU0sR0FBNkJJLE9BQTFCakIsY0FBYSxlQUFtQlUsT0FBTk8sSUFBRyxLQUFTLE9BQU5QO0lBQ2hFLE1BQU1JLE9BQU8sTUFBTUYsU0FBU0csSUFBSTtJQUNoQyxPQUFPRDtBQUNULEVBQUU7QUFFSyxNQUFNSSxlQUFlLE9BQU9EO0lBQ2pDLE1BQU1MLFdBQVcsTUFBTUMsTUFBTSxHQUF5QkksT0FBdEJqQixjQUFhLFdBQWVVLE9BQU5PLElBQUcsS0FBUyxPQUFOUDtJQUM1RCxNQUFNSSxPQUFPLE1BQU1GLFNBQVNHLElBQUk7SUFDaEMsT0FBT0Q7QUFDVCxFQUFFO0FBRUYsNkNBQTZDO0FBQ3RDLE1BQU1LLHdCQUF3QixPQUFPRjtJQUMxQyxNQUFNTCxXQUFXLE1BQU1DLE1BQ3JCLEdBQTZCSSxPQUExQmpCLGNBQWEsZUFBMEJVLE9BQWJPLElBQUcsWUFBZ0IsT0FBTlAsT0FBTTtJQUVsRCxNQUFNSSxPQUFPLE1BQU1GLFNBQVNHLElBQUk7SUFDaEMsT0FBT0Q7QUFDVCxFQUFFO0FBRUssTUFBTU0sbUJBQW1CLE9BQU9DO0lBQ3JDLE1BQU1ULFdBQVcsTUFBTUMsTUFDckIsR0FBNkNRLE9BQTFDckIsY0FBYSwrQkFBcURVLE9BQXhCVyxhQUFZLGNBQWtCLE9BQU5YO0lBRXZFLE1BQU1JLE9BQU8sTUFBTUYsU0FBU0csSUFBSTtJQUNoQyxPQUFPRDtBQUNULEVBQUU7QUFFRixpQ0FBaUM7QUFDMUIsTUFBTVEsZUFBZSxPQUFPRDtJQUNqQyxNQUFNVCxXQUFXLE1BQU1DLE1BQ3JCLEdBQTBDUSxPQUF2Q3JCLGNBQWEsNEJBQWtEVSxPQUF4QlcsYUFBWSxjQUFrQixPQUFOWDtJQUVwRSxNQUFNSSxPQUFPLE1BQU1GLFNBQVNHLElBQUk7SUFDaEMsT0FBT0Q7QUFDVCxFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvdXRpbHMvYXBpLmpzPzY1OTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1kNSBmcm9tIFwibWQ1XCI7XG5cbmNvbnN0IEFQSV9CQVNFX1VSTCA9IFwiaHR0cHM6Ly9nYXRld2F5Lm1hcnZlbC5jb20vdjEvcHVibGljL1wiO1xuY29uc3QgQVBJX1BVQkxJQ19LRVkgPSBcIjBmMmM5NDAxMTQ4ZTIwODMzZmU0NjRhMWU5MjljZGIwXCI7XG5jb25zdCBBUElfUFJJVkFURV9LRVkgPSBcIjcxNDdhMjNhN2JjZTViZDQyNTZkM2ZhYjIwMDBhZmIwOTBlZjlmOTJcIjtcblxuY29uc3QgZ2V0VGltZVN0YW1wID0gKCkgPT4gRGF0ZS5ub3coKS50b1N0cmluZygpO1xuY29uc3QgZ2V0SGFzaCA9ICh0aW1lU3RhbXApID0+XG4gIG1kNSh0aW1lU3RhbXAgKyBBUElfUFJJVkFURV9LRVkgKyBBUElfUFVCTElDX0tFWSk7XG5cbmNvbnN0IHRpbWVTdGFtcCA9IGdldFRpbWVTdGFtcCgpO1xuY29uc3QgaGFzaCA9IGdldEhhc2godGltZVN0YW1wKTtcbmNvbnN0IHF1ZXJ5ID0gYHRzPSR7dGltZVN0YW1wfSZhcGlrZXk9JHtBUElfUFVCTElDX0tFWX0maGFzaD0ke2hhc2h9YDtcblxuZXhwb3J0IGNvbnN0IGdldENoYXJhY3RlcnMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7QVBJX0JBU0VfVVJMfWNoYXJhY3RlcnM/JHtxdWVyeX0mbGltaXQ9OGApO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICByZXR1cm4gZGF0YTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRDaGFyYWN0ZXJCeUlkID0gYXN5bmMgKGlkKSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7QVBJX0JBU0VfVVJMfWNoYXJhY3RlcnMvJHtpZH0/JHtxdWVyeX1gKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgcmV0dXJuIGRhdGE7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0Q29taWNCeUlkID0gYXN5bmMgKGlkKSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7QVBJX0JBU0VfVVJMfWNvbWljcy8ke2lkfT8ke3F1ZXJ5fWApO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICByZXR1cm4gZGF0YTtcbn07XG5cbi8vIExvcyBjb21pY3MgZGViZW4gZXN0YXIgb3JkZW5hZG9zIHBvciBmZWNoYVxuZXhwb3J0IGNvbnN0IGdldENvbWljQnlDaGFyYWN0ZXJJZCA9IGFzeW5jIChpZCkgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgIGAke0FQSV9CQVNFX1VSTH1jaGFyYWN0ZXJzLyR7aWR9L2NvbWljcz8ke3F1ZXJ5fSZvcmRlckJ5PS1vbnNhbGVEYXRlYFxuICApO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICByZXR1cm4gZGF0YTtcbn07XG5cbmV4cG9ydCBjb25zdCBzZWFyY2hDaGFyYWN0ZXJzID0gYXN5bmMgKHF1ZXJ5U2VhcmNoKSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgYCR7QVBJX0JBU0VfVVJMfS9jaGFyYWN0ZXJzP25hbWVTdGFydHNXaXRoPSR7cXVlcnlTZWFyY2h9JmxpbWl0PTk5JiR7cXVlcnl9YFxuICApO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICByZXR1cm4gZGF0YTtcbn07XG5cbi8vIE9idGVuZXIgdW4gY29taWMgcG9yIGVsIHRpdHVsb1xuZXhwb3J0IGNvbnN0IHNlYXJjaENvbWljcyA9IGFzeW5jIChxdWVyeVNlYXJjaCkgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgIGAke0FQSV9CQVNFX1VSTH0vY29taWNzP3RpdGxlU3RhcnRzV2l0aD0ke3F1ZXJ5U2VhcmNofSZsaW1pdD05OSYke3F1ZXJ5fWBcbiAgKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgcmV0dXJuIGRhdGE7XG59O1xuIl0sIm5hbWVzIjpbIm1kNSIsIkFQSV9CQVNFX1VSTCIsIkFQSV9QVUJMSUNfS0VZIiwiQVBJX1BSSVZBVEVfS0VZIiwiZ2V0VGltZVN0YW1wIiwiRGF0ZSIsIm5vdyIsInRvU3RyaW5nIiwiZ2V0SGFzaCIsInRpbWVTdGFtcCIsImhhc2giLCJxdWVyeSIsImdldENoYXJhY3RlcnMiLCJyZXNwb25zZSIsImZldGNoIiwiZGF0YSIsImpzb24iLCJnZXRDaGFyYWN0ZXJCeUlkIiwiaWQiLCJnZXRDb21pY0J5SWQiLCJnZXRDb21pY0J5Q2hhcmFjdGVySWQiLCJzZWFyY2hDaGFyYWN0ZXJzIiwicXVlcnlTZWFyY2giLCJzZWFyY2hDb21pY3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./src/app/utils/api.js\n"));

/***/ })

});