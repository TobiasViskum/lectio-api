"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/get-is-authenticated/route";
exports.ids = ["app/get-is-authenticated/route"];
exports.modules = {

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "puppeteer":
/*!****************************!*\
  !*** external "puppeteer" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("puppeteer");

/***/ }),

/***/ "(rsc)/./node_modules/.pnpm/next@13.5.4_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fget-is-authenticated%2Froute&page=%2Fget-is-authenticated%2Froute&appPaths=&pagePath=private-next-app-dir%2Fget-is-authenticated%2Froute.ts&appDir=%2FUsers%2Ftobiastv%2FDesktop%2FDevelopment%2FReactprojects%2Flectio-api%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Ftobiastv%2FDesktop%2FDevelopment%2FReactprojects%2Flectio-api&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/next@13.5.4_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fget-is-authenticated%2Froute&page=%2Fget-is-authenticated%2Froute&appPaths=&pagePath=private-next-app-dir%2Fget-is-authenticated%2Froute.ts&appDir=%2FUsers%2Ftobiastv%2FDesktop%2FDevelopment%2FReactprojects%2Flectio-api%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Ftobiastv%2FDesktop%2FDevelopment%2FReactprojects%2Flectio-api&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_node_polyfill_headers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/node-polyfill-headers */ \"(rsc)/./node_modules/.pnpm/next@13.5.4_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/node-polyfill-headers.js\");\n/* harmony import */ var next_dist_server_node_polyfill_headers__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_node_polyfill_headers__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/.pnpm/next@13.5.4_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/.pnpm/next@13.5.4_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var _Users_tobiastv_Desktop_Development_Reactprojects_lectio_api_src_app_get_is_authenticated_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/get-is-authenticated/route.ts */ \"(rsc)/./src/app/get-is-authenticated/route.ts\");\n\n// @ts-ignore this need to be imported from next/dist to be external\n\n\n// @ts-expect-error - replaced by webpack/turbopack loader\n\nconst AppRouteRouteModule = next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1__.AppRouteRouteModule;\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_2__.RouteKind.APP_ROUTE,\n        page: \"/get-is-authenticated/route\",\n        pathname: \"/get-is-authenticated\",\n        filename: \"route\",\n        bundlePath: \"app/get-is-authenticated/route\"\n    },\n    resolvedPagePath: \"/Users/tobiastv/Desktop/Development/Reactprojects/lectio-api/src/app/get-is-authenticated/route.ts\",\n    nextConfigOutput,\n    userland: _Users_tobiastv_Desktop_Development_Reactprojects_lectio_api_src_app_get_is_authenticated_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/get-is-authenticated/route\";\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvLnBucG0vbmV4dEAxMy41LjRfcmVhY3QtZG9tQDE4LjIuMF9yZWFjdEAxOC4yLjAvbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1hcHAtbG9hZGVyLmpzP25hbWU9YXBwJTJGZ2V0LWlzLWF1dGhlbnRpY2F0ZWQlMkZyb3V0ZSZwYWdlPSUyRmdldC1pcy1hdXRoZW50aWNhdGVkJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGZ2V0LWlzLWF1dGhlbnRpY2F0ZWQlMkZyb3V0ZS50cyZhcHBEaXI9JTJGVXNlcnMlMkZ0b2JpYXN0diUyRkRlc2t0b3AlMkZEZXZlbG9wbWVudCUyRlJlYWN0cHJvamVjdHMlMkZsZWN0aW8tYXBpJTJGc3JjJTJGYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj0lMkZVc2VycyUyRnRvYmlhc3R2JTJGRGVza3RvcCUyRkRldmVsb3BtZW50JTJGUmVhY3Rwcm9qZWN0cyUyRmxlY3Rpby1hcGkmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBZ0Q7QUFDaEQ7QUFDMEY7QUFDM0I7QUFDL0Q7QUFDK0g7QUFDL0gsNEJBQTRCLGdIQUEwQjtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHVHQUF1RztBQUMvRztBQUNpSjs7QUFFakoiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZWN0aW8tYXBpLz8xMzc2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIm5leHQvZGlzdC9zZXJ2ZXIvbm9kZS1wb2x5ZmlsbC1oZWFkZXJzXCI7XG4vLyBAdHMtaWdub3JlIHRoaXMgbmVlZCB0byBiZSBpbXBvcnRlZCBmcm9tIG5leHQvZGlzdCB0byBiZSBleHRlcm5hbFxuaW1wb3J0ICogYXMgbW9kdWxlIGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG4vLyBAdHMtZXhwZWN0LWVycm9yIC0gcmVwbGFjZWQgYnkgd2VicGFjay90dXJib3BhY2sgbG9hZGVyXG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiL1VzZXJzL3RvYmlhc3R2L0Rlc2t0b3AvRGV2ZWxvcG1lbnQvUmVhY3Rwcm9qZWN0cy9sZWN0aW8tYXBpL3NyYy9hcHAvZ2V0LWlzLWF1dGhlbnRpY2F0ZWQvcm91dGUudHNcIjtcbmNvbnN0IEFwcFJvdXRlUm91dGVNb2R1bGUgPSBtb2R1bGUuQXBwUm91dGVSb3V0ZU1vZHVsZTtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvZ2V0LWlzLWF1dGhlbnRpY2F0ZWQvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2dldC1pcy1hdXRoZW50aWNhdGVkXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2dldC1pcy1hdXRoZW50aWNhdGVkL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiL1VzZXJzL3RvYmlhc3R2L0Rlc2t0b3AvRGV2ZWxvcG1lbnQvUmVhY3Rwcm9qZWN0cy9sZWN0aW8tYXBpL3NyYy9hcHAvZ2V0LWlzLWF1dGhlbnRpY2F0ZWQvcm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgaGVhZGVySG9va3MsIHN0YXRpY0dlbmVyYXRpb25CYWlsb3V0IH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9nZXQtaXMtYXV0aGVudGljYXRlZC9yb3V0ZVwiO1xuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBoZWFkZXJIb29rcywgc3RhdGljR2VuZXJhdGlvbkJhaWxvdXQsIG9yaWdpbmFsUGF0aG5hbWUsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/.pnpm/next@13.5.4_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fget-is-authenticated%2Froute&page=%2Fget-is-authenticated%2Froute&appPaths=&pagePath=private-next-app-dir%2Fget-is-authenticated%2Froute.ts&appDir=%2FUsers%2Ftobiastv%2FDesktop%2FDevelopment%2FReactprojects%2Flectio-api%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Ftobiastv%2FDesktop%2FDevelopment%2FReactprojects%2Flectio-api&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/get-is-authenticated/route.ts":
/*!***********************************************!*\
  !*** ./src/app/get-is-authenticated/route.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var _lib_api_return__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/api-return */ \"(rsc)/./src/lib/api-return.ts\");\n/* harmony import */ var _lib_getSearchParamsObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/getSearchParamsObject */ \"(rsc)/./src/lib/getSearchParamsObject.ts\");\n/* harmony import */ var _lib_scrapeFunctions_getIsAuthenticated__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/scrapeFunctions/getIsAuthenticated */ \"(rsc)/./src/lib/scrapeFunctions/getIsAuthenticated.ts\");\n/* harmony import */ var _lib_standard_schema__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/standard-schema */ \"(rsc)/./src/lib/standard-schema.ts\");\n\n\n\n\nconst routeSchema = _lib_standard_schema__WEBPACK_IMPORTED_MODULE_3__.standardSchema;\nasync function GET(request) {\n    const params = (0,_lib_getSearchParamsObject__WEBPACK_IMPORTED_MODULE_1__.getSearchParamsObject)(request);\n    try {\n        const data = routeSchema.parse(params);\n        const result = await (0,_lib_scrapeFunctions_getIsAuthenticated__WEBPACK_IMPORTED_MODULE_2__.getIsAuthenticated)(data);\n        if (result === null) {\n            return (0,_lib_api_return__WEBPACK_IMPORTED_MODULE_0__.failedToGetData)();\n        } else {\n            return (0,_lib_api_return__WEBPACK_IMPORTED_MODULE_0__.successRequest)(result);\n        }\n    } catch  {\n        return (0,_lib_api_return__WEBPACK_IMPORTED_MODULE_0__.invalidParameters)();\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2dldC1pcy1hdXRoZW50aWNhdGVkL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXFHO0FBRWpDO0FBQ1U7QUFDdkI7QUFHdkQsTUFBTU0sY0FBY0QsZ0VBQWNBO0FBRTNCLGVBQWVFLElBQUlDLE9BQW9CO0lBQzVDLE1BQU1DLFNBQVNOLGlGQUFxQkEsQ0FBQ0s7SUFFckMsSUFBSTtRQUNGLE1BQU1FLE9BQU9KLFlBQVlLLEtBQUssQ0FBQ0Y7UUFDL0IsTUFBTUcsU0FBUyxNQUFNUiwyRkFBa0JBLENBQUNNO1FBQ3hDLElBQUlFLFdBQVcsTUFBTTtZQUNuQixPQUFPWixnRUFBZUE7UUFDeEIsT0FBTztZQUNMLE9BQU9FLCtEQUFjQSxDQUFDVTtRQUN4QjtJQUNGLEVBQUUsT0FBTTtRQUNOLE9BQU9YLGtFQUFpQkE7SUFDMUI7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2xlY3Rpby1hcGkvLi9zcmMvYXBwL2dldC1pcy1hdXRoZW50aWNhdGVkL3JvdXRlLnRzP2NhNTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZmFpbGVkVG9HZXREYXRhLCBpbnZhbGlkUGFyYW1ldGVycywgc3VjY2Vzc05vRGF0YSwgc3VjY2Vzc1JlcXVlc3QgfSBmcm9tIFwiQC9saWIvYXBpLXJldHVyblwiO1xuaW1wb3J0IHsgZ2V0QmFzaWNQYWdlIH0gZnJvbSBcIkAvbGliL2dldEJhc2ljUGFnZVwiO1xuaW1wb3J0IHsgZ2V0U2VhcmNoUGFyYW1zT2JqZWN0IH0gZnJvbSBcIkAvbGliL2dldFNlYXJjaFBhcmFtc09iamVjdFwiO1xuaW1wb3J0IHsgZ2V0SXNBdXRoZW50aWNhdGVkIH0gZnJvbSBcIkAvbGliL3NjcmFwZUZ1bmN0aW9ucy9nZXRJc0F1dGhlbnRpY2F0ZWRcIjtcbmltcG9ydCB7IHN0YW5kYXJkU2NoZW1hIH0gZnJvbSBcIkAvbGliL3N0YW5kYXJkLXNjaGVtYVwiO1xuaW1wb3J0IHsgTmV4dFJlcXVlc3QgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcblxuY29uc3Qgcm91dGVTY2hlbWEgPSBzdGFuZGFyZFNjaGVtYTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEdFVChyZXF1ZXN0OiBOZXh0UmVxdWVzdCkge1xuICBjb25zdCBwYXJhbXMgPSBnZXRTZWFyY2hQYXJhbXNPYmplY3QocmVxdWVzdCk7XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBkYXRhID0gcm91dGVTY2hlbWEucGFyc2UocGFyYW1zKTtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRJc0F1dGhlbnRpY2F0ZWQoZGF0YSk7XG4gICAgaWYgKHJlc3VsdCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGZhaWxlZFRvR2V0RGF0YSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gc3VjY2Vzc1JlcXVlc3QocmVzdWx0KTtcbiAgICB9XG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiBpbnZhbGlkUGFyYW1ldGVycygpO1xuICB9XG59XG4iXSwibmFtZXMiOlsiZmFpbGVkVG9HZXREYXRhIiwiaW52YWxpZFBhcmFtZXRlcnMiLCJzdWNjZXNzUmVxdWVzdCIsImdldFNlYXJjaFBhcmFtc09iamVjdCIsImdldElzQXV0aGVudGljYXRlZCIsInN0YW5kYXJkU2NoZW1hIiwicm91dGVTY2hlbWEiLCJHRVQiLCJyZXF1ZXN0IiwicGFyYW1zIiwiZGF0YSIsInBhcnNlIiwicmVzdWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/get-is-authenticated/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/api-return.ts":
/*!*******************************!*\
  !*** ./src/lib/api-return.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   failedToGetData: () => (/* binding */ failedToGetData),\n/* harmony export */   invalidParameters: () => (/* binding */ invalidParameters),\n/* harmony export */   successNoData: () => (/* binding */ successNoData),\n/* harmony export */   successNotAuthenticated: () => (/* binding */ successNotAuthenticated),\n/* harmony export */   successRequest: () => (/* binding */ successRequest)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(rsc)/./node_modules/.pnpm/next@13.5.4_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/web/exports/next-response.js\");\n\nfunction invalidParameters() {\n    return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n        status: \"error\",\n        message: \"Invalid parameters\"\n    });\n}\nfunction successNoData(message) {\n    return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n        status: \"success\",\n        message: message,\n        data: null\n    });\n}\nfunction successNotAuthenticated() {\n    return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n        status: \"success\",\n        message: \"User not authenticated\",\n        data: null\n    });\n}\nfunction failedToGetData() {\n    return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n        status: \"error\",\n        message: \"An error happened when trying to get data.\"\n    });\n}\nfunction successRequest(data) {\n    return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n        status: \"success\",\n        message: \"Successfully retrieved data\",\n        data: data\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL2FwaS1yZXR1cm4udHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQTJDO0FBRXBDLFNBQVNDO0lBQ2QsT0FBT0Qsa0ZBQVlBLENBQUNFLElBQUksQ0FBQztRQUFFQyxRQUFRO1FBQVNDLFNBQVM7SUFBcUI7QUFDNUU7QUFFTyxTQUFTQyxjQUFjRCxPQUFlO0lBQzNDLE9BQU9KLGtGQUFZQSxDQUFDRSxJQUFJLENBQUM7UUFBRUMsUUFBUTtRQUFXQyxTQUFTQTtRQUFTRSxNQUFNO0lBQUs7QUFDN0U7QUFFTyxTQUFTQztJQUNkLE9BQU9QLGtGQUFZQSxDQUFDRSxJQUFJLENBQUM7UUFBRUMsUUFBUTtRQUFXQyxTQUFTO1FBQTBCRSxNQUFNO0lBQUs7QUFDOUY7QUFFTyxTQUFTRTtJQUNkLE9BQU9SLGtGQUFZQSxDQUFDRSxJQUFJLENBQUM7UUFBRUMsUUFBUTtRQUFTQyxTQUFTO0lBQTZDO0FBQ3BHO0FBR08sU0FBU0ssZUFBZUgsSUFBcUM7SUFDbEUsT0FBT04sa0ZBQVlBLENBQUNFLElBQUksQ0FBQztRQUFFQyxRQUFRO1FBQVdDLFNBQVM7UUFBK0JFLE1BQU1BO0lBQUs7QUFDbkciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZWN0aW8tYXBpLy4vc3JjL2xpYi9hcGktcmV0dXJuLnRzPzhlMWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSBcIm5leHQvc2VydmVyXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBpbnZhbGlkUGFyYW1ldGVycygpIHtcbiAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgc3RhdHVzOiBcImVycm9yXCIsIG1lc3NhZ2U6IFwiSW52YWxpZCBwYXJhbWV0ZXJzXCIgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdWNjZXNzTm9EYXRhKG1lc3NhZ2U6IHN0cmluZykge1xuICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBzdGF0dXM6IFwic3VjY2Vzc1wiLCBtZXNzYWdlOiBtZXNzYWdlLCBkYXRhOiBudWxsIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VjY2Vzc05vdEF1dGhlbnRpY2F0ZWQoKSB7XG4gIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IHN0YXR1czogXCJzdWNjZXNzXCIsIG1lc3NhZ2U6IFwiVXNlciBub3QgYXV0aGVudGljYXRlZFwiLCBkYXRhOiBudWxsIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmFpbGVkVG9HZXREYXRhKCkge1xuICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBzdGF0dXM6IFwiZXJyb3JcIiwgbWVzc2FnZTogXCJBbiBlcnJvciBoYXBwZW5lZCB3aGVuIHRyeWluZyB0byBnZXQgZGF0YS5cIiB9KTtcbn1cblxudHlwZSBEZWZhdWx0T2JqZWN0ID0geyBba2V5OiBzdHJpbmcgfCBudW1iZXJdOiBhbnkgfTtcbmV4cG9ydCBmdW5jdGlvbiBzdWNjZXNzUmVxdWVzdChkYXRhOiBEZWZhdWx0T2JqZWN0IHwgRGVmYXVsdE9iamVjdFtdKSB7XG4gIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IHN0YXR1czogXCJzdWNjZXNzXCIsIG1lc3NhZ2U6IFwiU3VjY2Vzc2Z1bGx5IHJldHJpZXZlZCBkYXRhXCIsIGRhdGE6IGRhdGEgfSk7XG59XG4iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwiaW52YWxpZFBhcmFtZXRlcnMiLCJqc29uIiwic3RhdHVzIiwibWVzc2FnZSIsInN1Y2Nlc3NOb0RhdGEiLCJkYXRhIiwic3VjY2Vzc05vdEF1dGhlbnRpY2F0ZWQiLCJmYWlsZWRUb0dldERhdGEiLCJzdWNjZXNzUmVxdWVzdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/api-return.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/getBasicPage.ts":
/*!*********************************!*\
  !*** ./src/lib/getBasicPage.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getBasicPage: () => (/* binding */ getBasicPage)\n/* harmony export */ });\n/* harmony import */ var puppeteer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! puppeteer */ \"puppeteer\");\n/* harmony import */ var puppeteer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(puppeteer__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function getBasicPage({ targetPage }) {\n    const browser = await puppeteer__WEBPACK_IMPORTED_MODULE_0___default().launch({\n        headless: \"new\",\n        args: [\n            \"--no-sandbox\"\n        ]\n    });\n    const page = await browser.newPage();\n    await page.goto(targetPage, {\n        waitUntil: \"domcontentloaded\"\n    });\n    return page;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL2dldEJhc2ljUGFnZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBa0M7QUFJM0IsZUFBZUMsYUFBYSxFQUFFQyxVQUFVLEVBQVM7SUFDdEQsTUFBTUMsVUFBVSxNQUFNSCx1REFBZ0IsQ0FBQztRQUNyQ0ssVUFBVTtRQUNWQyxNQUFNO1lBQUM7U0FBZTtJQUN4QjtJQUNBLE1BQU1DLE9BQU8sTUFBTUosUUFBUUssT0FBTztJQUNsQyxNQUFNRCxLQUFLRSxJQUFJLENBQUNQLFlBQVk7UUFDMUJRLFdBQVc7SUFDYjtJQUNBLE9BQU9IO0FBQ1QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZWN0aW8tYXBpLy4vc3JjL2xpYi9nZXRCYXNpY1BhZ2UudHM/OTEyNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcHVwcGV0ZWVyIGZyb20gXCJwdXBwZXRlZXJcIjtcblxudHlwZSBQcm9wcyA9IHsgdGFyZ2V0UGFnZTogc3RyaW5nIH07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRCYXNpY1BhZ2UoeyB0YXJnZXRQYWdlIH06IFByb3BzKSB7XG4gIGNvbnN0IGJyb3dzZXIgPSBhd2FpdCBwdXBwZXRlZXIubGF1bmNoKHtcbiAgICBoZWFkbGVzczogXCJuZXdcIixcbiAgICBhcmdzOiBbXCItLW5vLXNhbmRib3hcIl0sXG4gIH0pO1xuICBjb25zdCBwYWdlID0gYXdhaXQgYnJvd3Nlci5uZXdQYWdlKCk7XG4gIGF3YWl0IHBhZ2UuZ290byh0YXJnZXRQYWdlLCB7XG4gICAgd2FpdFVudGlsOiBcImRvbWNvbnRlbnRsb2FkZWRcIixcbiAgfSk7XG4gIHJldHVybiBwYWdlO1xufVxuIl0sIm5hbWVzIjpbInB1cHBldGVlciIsImdldEJhc2ljUGFnZSIsInRhcmdldFBhZ2UiLCJicm93c2VyIiwibGF1bmNoIiwiaGVhZGxlc3MiLCJhcmdzIiwicGFnZSIsIm5ld1BhZ2UiLCJnb3RvIiwid2FpdFVudGlsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/getBasicPage.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/getSearchParamsObject.ts":
/*!******************************************!*\
  !*** ./src/lib/getSearchParamsObject.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getSearchParamsObject: () => (/* binding */ getSearchParamsObject)\n/* harmony export */ });\nfunction getSearchParamsObject(request) {\n    const params = new URLSearchParams(request.nextUrl.search);\n    let obj = {};\n    for (let [key, value] of params){\n        obj[key] = value;\n    }\n    return obj;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL2dldFNlYXJjaFBhcmFtc09iamVjdC50cyIsIm1hcHBpbmdzIjoiOzs7O0FBRU8sU0FBU0Esc0JBQXNCQyxPQUFvQjtJQUN4RCxNQUFNQyxTQUFTLElBQUlDLGdCQUFnQkYsUUFBUUcsT0FBTyxDQUFDQyxNQUFNO0lBQ3pELElBQUlDLE1BQWlDLENBQUM7SUFDdEMsS0FBSyxJQUFJLENBQUNDLEtBQUtDLE1BQU0sSUFBSU4sT0FBUTtRQUMvQkksR0FBRyxDQUFDQyxJQUFJLEdBQUdDO0lBQ2I7SUFFQSxPQUFPRjtBQUNUIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGVjdGlvLWFwaS8uL3NyYy9saWIvZ2V0U2VhcmNoUGFyYW1zT2JqZWN0LnRzP2YyNDciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlcXVlc3QgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNlYXJjaFBhcmFtc09iamVjdChyZXF1ZXN0OiBOZXh0UmVxdWVzdCkge1xuICBjb25zdCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHJlcXVlc3QubmV4dFVybC5zZWFyY2gpO1xuICBsZXQgb2JqOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ID0ge307XG4gIGZvciAobGV0IFtrZXksIHZhbHVlXSBvZiBwYXJhbXMpIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cbiJdLCJuYW1lcyI6WyJnZXRTZWFyY2hQYXJhbXNPYmplY3QiLCJyZXF1ZXN0IiwicGFyYW1zIiwiVVJMU2VhcmNoUGFyYW1zIiwibmV4dFVybCIsInNlYXJjaCIsIm9iaiIsImtleSIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/getSearchParamsObject.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/scrapeFunctions/getIsAuthenticated.ts":
/*!*******************************************************!*\
  !*** ./src/lib/scrapeFunctions/getIsAuthenticated.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getIsAuthenticated: () => (/* binding */ getIsAuthenticated)\n/* harmony export */ });\n/* harmony import */ var _getBasicPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../getBasicPage */ \"(rsc)/./src/lib/getBasicPage.ts\");\n\nasync function getIsAuthenticated({ username, password, schoolCode }) {\n    const page = await (0,_getBasicPage__WEBPACK_IMPORTED_MODULE_0__.getBasicPage)({\n        targetPage: `https://www.lectio.dk/lectio/${schoolCode}/login.aspx`\n    });\n    try {\n        await page.type(\"#username\", username);\n        await page.type(\"#password\", password);\n        await Promise.all([\n            page.click(\"#m_Content_submitbtn2\"),\n            page.waitForNavigation()\n        ]);\n        try {\n            const title = await page.$eval(\"div#MainTitle\", (elem)=>{\n                return elem.textContent;\n            });\n            if (title) {\n                console.log(\"Not logged in\");\n                await page.browser().close();\n                return {\n                    isAuthenticated: false\n                };\n            } else {\n                console.log(\"Logged in\");\n                await page.browser().close();\n                return {\n                    isAuthenticated: true\n                };\n            }\n        } catch  {\n            await page.browser().close();\n            console.log(\"Logged in\");\n            return {\n                isAuthenticated: true\n            };\n        }\n    } catch  {\n        await page.browser().close();\n        return null;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL3NjcmFwZUZ1bmN0aW9ucy9nZXRJc0F1dGhlbnRpY2F0ZWQudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBK0M7QUFFeEMsZUFBZUMsbUJBQW1CLEVBQUVDLFFBQVEsRUFBRUMsUUFBUSxFQUFFQyxVQUFVLEVBQWlCO0lBQ3hGLE1BQU1DLE9BQU8sTUFBTUwsMkRBQVlBLENBQUM7UUFBRU0sWUFBWSxDQUFDLDZCQUE2QixFQUFFRixXQUFXLFdBQVcsQ0FBQztJQUFDO0lBRXRHLElBQUk7UUFDRixNQUFNQyxLQUFLRSxJQUFJLENBQUMsYUFBYUw7UUFDN0IsTUFBTUcsS0FBS0UsSUFBSSxDQUFDLGFBQWFKO1FBQzdCLE1BQU1LLFFBQVFDLEdBQUcsQ0FBQztZQUFDSixLQUFLSyxLQUFLLENBQUM7WUFBMEJMLEtBQUtNLGlCQUFpQjtTQUFHO1FBRWpGLElBQUk7WUFDRixNQUFNQyxRQUFRLE1BQU1QLEtBQUtRLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQ0M7Z0JBQy9DLE9BQU9BLEtBQUtDLFdBQVc7WUFDekI7WUFFQSxJQUFJSCxPQUFPO2dCQUNUSSxRQUFRQyxHQUFHLENBQUM7Z0JBQ1osTUFBTVosS0FBS2EsT0FBTyxHQUFHQyxLQUFLO2dCQUMxQixPQUFPO29CQUFFQyxpQkFBaUI7Z0JBQU07WUFDbEMsT0FBTztnQkFDTEosUUFBUUMsR0FBRyxDQUFDO2dCQUNaLE1BQU1aLEtBQUthLE9BQU8sR0FBR0MsS0FBSztnQkFDMUIsT0FBTztvQkFBRUMsaUJBQWlCO2dCQUFLO1lBQ2pDO1FBQ0YsRUFBRSxPQUFNO1lBQ04sTUFBTWYsS0FBS2EsT0FBTyxHQUFHQyxLQUFLO1lBQzFCSCxRQUFRQyxHQUFHLENBQUM7WUFDWixPQUFPO2dCQUFFRyxpQkFBaUI7WUFBSztRQUNqQztJQUNGLEVBQUUsT0FBTTtRQUNOLE1BQU1mLEtBQUthLE9BQU8sR0FBR0MsS0FBSztRQUMxQixPQUFPO0lBQ1Q7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2xlY3Rpby1hcGkvLi9zcmMvbGliL3NjcmFwZUZ1bmN0aW9ucy9nZXRJc0F1dGhlbnRpY2F0ZWQudHM/NmNiZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRCYXNpY1BhZ2UgfSBmcm9tIFwiLi4vZ2V0QmFzaWNQYWdlXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRJc0F1dGhlbnRpY2F0ZWQoeyB1c2VybmFtZSwgcGFzc3dvcmQsIHNjaG9vbENvZGUgfTogU3RhbmRhcmRQcm9wcykge1xuICBjb25zdCBwYWdlID0gYXdhaXQgZ2V0QmFzaWNQYWdlKHsgdGFyZ2V0UGFnZTogYGh0dHBzOi8vd3d3LmxlY3Rpby5kay9sZWN0aW8vJHtzY2hvb2xDb2RlfS9sb2dpbi5hc3B4YCB9KTtcblxuICB0cnkge1xuICAgIGF3YWl0IHBhZ2UudHlwZShcIiN1c2VybmFtZVwiLCB1c2VybmFtZSk7XG4gICAgYXdhaXQgcGFnZS50eXBlKFwiI3Bhc3N3b3JkXCIsIHBhc3N3b3JkKTtcbiAgICBhd2FpdCBQcm9taXNlLmFsbChbcGFnZS5jbGljayhcIiNtX0NvbnRlbnRfc3VibWl0YnRuMlwiKSwgcGFnZS53YWl0Rm9yTmF2aWdhdGlvbigpXSk7XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgdGl0bGUgPSBhd2FpdCBwYWdlLiRldmFsKFwiZGl2I01haW5UaXRsZVwiLCAoZWxlbSkgPT4ge1xuICAgICAgICByZXR1cm4gZWxlbS50ZXh0Q29udGVudDtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAodGl0bGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJOb3QgbG9nZ2VkIGluXCIpO1xuICAgICAgICBhd2FpdCBwYWdlLmJyb3dzZXIoKS5jbG9zZSgpO1xuICAgICAgICByZXR1cm4geyBpc0F1dGhlbnRpY2F0ZWQ6IGZhbHNlIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkxvZ2dlZCBpblwiKTtcbiAgICAgICAgYXdhaXQgcGFnZS5icm93c2VyKCkuY2xvc2UoKTtcbiAgICAgICAgcmV0dXJuIHsgaXNBdXRoZW50aWNhdGVkOiB0cnVlIH07XG4gICAgICB9XG4gICAgfSBjYXRjaCB7XG4gICAgICBhd2FpdCBwYWdlLmJyb3dzZXIoKS5jbG9zZSgpO1xuICAgICAgY29uc29sZS5sb2coXCJMb2dnZWQgaW5cIik7XG4gICAgICByZXR1cm4geyBpc0F1dGhlbnRpY2F0ZWQ6IHRydWUgfTtcbiAgICB9XG4gIH0gY2F0Y2gge1xuICAgIGF3YWl0IHBhZ2UuYnJvd3NlcigpLmNsb3NlKCk7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJnZXRCYXNpY1BhZ2UiLCJnZXRJc0F1dGhlbnRpY2F0ZWQiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwic2Nob29sQ29kZSIsInBhZ2UiLCJ0YXJnZXRQYWdlIiwidHlwZSIsIlByb21pc2UiLCJhbGwiLCJjbGljayIsIndhaXRGb3JOYXZpZ2F0aW9uIiwidGl0bGUiLCIkZXZhbCIsImVsZW0iLCJ0ZXh0Q29udGVudCIsImNvbnNvbGUiLCJsb2ciLCJicm93c2VyIiwiY2xvc2UiLCJpc0F1dGhlbnRpY2F0ZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/scrapeFunctions/getIsAuthenticated.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/standard-schema.ts":
/*!************************************!*\
  !*** ./src/lib/standard-schema.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   standardSchema: () => (/* binding */ standardSchema)\n/* harmony export */ });\n/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zod */ \"(rsc)/./node_modules/.pnpm/zod@3.22.4/node_modules/zod/lib/index.mjs\");\n\nconst standardSchema = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({\n    username: zod__WEBPACK_IMPORTED_MODULE_0__.z.string(),\n    password: zod__WEBPACK_IMPORTED_MODULE_0__.z.string(),\n    schoolCode: zod__WEBPACK_IMPORTED_MODULE_0__.z.string()\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL3N0YW5kYXJkLXNjaGVtYS50cyIsIm1hcHBpbmdzIjoiOzs7OztBQUF3QjtBQUVqQixNQUFNQyxpQkFBaUJELGtDQUFDQSxDQUFDRSxNQUFNLENBQUM7SUFDckNDLFVBQVVILGtDQUFDQSxDQUFDSSxNQUFNO0lBQ2xCQyxVQUFVTCxrQ0FBQ0EsQ0FBQ0ksTUFBTTtJQUNsQkUsWUFBWU4sa0NBQUNBLENBQUNJLE1BQU07QUFDdEIsR0FBRyIsInNvdXJjZXMiOlsid2VicGFjazovL2xlY3Rpby1hcGkvLi9zcmMvbGliL3N0YW5kYXJkLXNjaGVtYS50cz9hMDU5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHogfSBmcm9tIFwiem9kXCI7XG5cbmV4cG9ydCBjb25zdCBzdGFuZGFyZFNjaGVtYSA9IHoub2JqZWN0KHtcbiAgdXNlcm5hbWU6IHouc3RyaW5nKCksXG4gIHBhc3N3b3JkOiB6LnN0cmluZygpLFxuICBzY2hvb2xDb2RlOiB6LnN0cmluZygpLFxufSk7XG4iXSwibmFtZXMiOlsieiIsInN0YW5kYXJkU2NoZW1hIiwib2JqZWN0IiwidXNlcm5hbWUiLCJzdHJpbmciLCJwYXNzd29yZCIsInNjaG9vbENvZGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/standard-schema.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/zod@3.22.4","vendor-chunks/next@13.5.4_react-dom@18.2.0_react@18.2.0"], () => (__webpack_exec__("(rsc)/./node_modules/.pnpm/next@13.5.4_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fget-is-authenticated%2Froute&page=%2Fget-is-authenticated%2Froute&appPaths=&pagePath=private-next-app-dir%2Fget-is-authenticated%2Froute.ts&appDir=%2FUsers%2Ftobiastv%2FDesktop%2FDevelopment%2FReactprojects%2Flectio-api%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Ftobiastv%2FDesktop%2FDevelopment%2FReactprojects%2Flectio-api&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();