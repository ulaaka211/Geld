"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./src/app/globals.css":
/*!*****************************!*\
  !*** ./src/app/globals.css ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"6c96fdcc1ca7\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZ2xvYmFscy5jc3M/MTE3NiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIjZjOTZmZGNjMWNhN1wiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/components/provider/authprovider.js":
/*!*************************************************!*\
  !*** ./src/components/provider/authprovider.js ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AuthProvider: function() { return /* binding */ AuthProvider; },\n/* harmony export */   useAuth: function() { return /* binding */ useAuth; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_common_axios_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/common/axios/page */ \"(app-pages-browser)/./src/components/common/axios/page.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify */ \"(app-pages-browser)/./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n/* harmony import */ var _barrel_optimize_names_FaImage_react_icons_fa__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=FaImage!=!react-icons/fa */ \"(app-pages-browser)/./node_modules/react-icons/fa/index.esm.js\");\n/* __next_internal_client_entry_do_not_use__ AuthProvider,useAuth auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_3__.createContext)();\nconst AuthProvider = (param)=>{\n    let { children } = param;\n    _s();\n    const [isLoggedIn, setIsLoggedIn] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [isReady, setIsReady] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [color, setColor] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [showMoadl1, setShowModal1] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [showCategory, setShowCategory] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [showIcons, setShowIcons] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [emoji, setEmoji] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [newIcon, setNewIcon] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaImage_react_icons_fa__WEBPACK_IMPORTED_MODULE_5__.FaImage, {}, void 0, false, {\n        fileName: \"/Users/ulaaka211/Desktop/tracker/income/src/components/provider/authprovider.js\",\n        lineNumber: 23,\n        columnNumber: 42\n    }, undefined));\n    const [newIconColor, setNewIconColor] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"#000000\");\n    const [passwordError, setPasswordError] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const isContainsUpperCase = (password)=>{\n        for(let i = 0; i < password.length; i++)if (password[i].charCodeAt(0) >= 64 && password[i].charCodeAt(0) <= 90) {\n            return 1;\n        }\n        return 0;\n    };\n    const isContainsNumber = (password)=>{\n        for(let i = 0; i < password.length; i++){\n            if (password[i].charCodeAt(0) >= 48 && password[i].charCodeAt(0) <= 57) {\n                return 1;\n            }\n        }\n        return 0;\n    };\n    const isContainsSpecialCharacter = (password)=>{\n        for(let i = 0; i < password.length; i++)if (password[i].charCodeAt(0) >= 33 && password[i].charCodeAt(0) <= 47 || password[i].charCodeAt(0) >= 58 && password[i].charCodeAt(0) <= 64 || password[i].charCodeAt(0) >= 91 && password[i].charCodeAt(0) <= 96 || password[i].charCodeAt(0) >= 123 && password[i].charCodeAt(0) <= 126) {\n            return 1;\n        }\n        return 0;\n    };\n    const isLengthGreaterThan8 = (password)=>{\n        return password.length >= 8 ? 1 : 0;\n    };\n    const calcaluteStrength = (password)=>{\n        let strength = 0;\n        strength += isContainsNumber(password);\n        strength += isContainsSpecialCharacter(password);\n        strength += isContainsUpperCase(password);\n        strength += isLengthGreaterThan8(password);\n        return strength;\n    };\n    const signIn = async (email, password)=>{\n        setIsLoading(true);\n        try {\n            const { data } = await _components_common_axios_page__WEBPACK_IMPORTED_MODULE_1__.api.post(\"/login\", {\n                email,\n                password\n            });\n            const { token } = data;\n            localStorage.setItem(\"token\", token);\n            setIsLoggedIn(true);\n            router.push(\"/dashboard\");\n        } catch (error) {\n            react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.error(error.response.data.message);\n        } finally{\n            setIsLoading(false);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const token = localStorage.getItem(\"token\");\n        if (token) {\n            setIsLoggedIn(true);\n        }\n    }, []);\n    const signUp = async (email, password)=>{\n        setIsLoading(true);\n        try {\n            const { data } = await _components_common_axios_page__WEBPACK_IMPORTED_MODULE_1__.api.post(\"/signup1\", {\n                email,\n                password\n            });\n            const { token } = data;\n            localStorage.setItem(\"token\", token);\n            setIsLoggedIn(true);\n            router.push(\"/dashboard\");\n        } catch (error) {\n            react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.error(error.response.data.message);\n        } finally{\n            setIsLoading(false);\n        }\n    };\n    const signOut = async ()=>{\n        localStorage.removeItem(\"token\");\n        setIsLoggedIn(false);\n        router.push(\"/dashboard\");\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        setIsReady(false);\n        const token = localStorage.removeItem(\"token\");\n        if (token) {\n            setIsLoggedIn(false);\n        }\n        setIsReady(true);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: {\n            isReady,\n            setIsReady,\n            isLoggedIn,\n            setIsLoggedIn,\n            signIn,\n            signUp,\n            signOut,\n            color,\n            setColor,\n            showMoadl1,\n            setShowModal1,\n            showCategory,\n            setShowCategory,\n            showIcons,\n            setShowIcons,\n            emoji,\n            setEmoji,\n            newIcon,\n            setNewIcon,\n            newIconColor,\n            setNewIconColor,\n            isContainsNumber,\n            isContainsSpecialCharacter,\n            isContainsUpperCase,\n            isLengthGreaterThan8,\n            calcaluteStrength,\n            passwordError,\n            setPasswordError\n        },\n        children: isReady && children\n    }, void 0, false, {\n        fileName: \"/Users/ulaaka211/Desktop/tracker/income/src/components/provider/authprovider.js\",\n        lineNumber: 152,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AuthProvider, \"udhJgJsVz7mPFdPHeYCHY+xe1vk=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = AuthProvider;\nconst useAuth = ()=>{\n    _s1();\n    return (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(AuthContext);\n};\n_s1(useAuth, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nvar _c;\n$RefreshReg$(_c, \"AuthProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3Byb3ZpZGVyL2F1dGhwcm92aWRlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFFcUQ7QUFDVDtBQUNXO0FBQ2hCO0FBQ0U7QUFDRztBQUNIO0FBQ1E7QUFFakQsTUFBTVcsNEJBQWNSLG9EQUFhQTtBQUUxQixNQUFNUyxlQUFlO1FBQUMsRUFBRUMsUUFBUSxFQUFFOztJQUN2QyxNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBR1AsK0NBQVFBLENBQUM7SUFDN0MsTUFBTSxDQUFDUSxTQUFTQyxXQUFXLEdBQUdULCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU0sQ0FBQ1UsV0FBV0MsYUFBYSxHQUFHWCwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNLENBQUNZLE9BQU9DLFNBQVMsR0FBR2IsK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDYyxZQUFZQyxjQUFjLEdBQUdmLCtDQUFRQSxDQUFDO0lBQzdDLE1BQU0sQ0FBQ2dCLGNBQWNDLGdCQUFnQixHQUFHakIsK0NBQVFBLENBQUM7SUFDakQsTUFBTSxDQUFDa0IsV0FBV0MsYUFBYSxHQUFHbkIsK0NBQVFBLENBQUM7SUFDM0MsTUFBTSxDQUFDb0IsT0FBT0MsU0FBUyxHQUFHckIsK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDc0IsU0FBU0MsV0FBVyxHQUFHdkIsK0NBQVFBLGVBQUMsOERBQUNGLGtGQUFPQTs7Ozs7SUFDL0MsTUFBTSxDQUFDMEIsY0FBY0MsZ0JBQWdCLEdBQUd6QiwrQ0FBUUEsQ0FBQztJQUNqRCxNQUFNLENBQUMwQixlQUFlQyxpQkFBaUIsR0FBRzNCLCtDQUFRQSxDQUFDO0lBRW5ELE1BQU00QixTQUFTbkMsMERBQVNBO0lBRXhCLE1BQU1vQyxzQkFBc0IsQ0FBQ0M7UUFDM0IsSUFBSyxJQUFJQyxJQUFJLEdBQUdBLElBQUlELFNBQVNFLE1BQU0sRUFBRUQsSUFDbkMsSUFBSUQsUUFBUSxDQUFDQyxFQUFFLENBQUNFLFVB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QU15QyxVQUFVO1FBQ2RSLGFBQWFTLFVBQVUsQ0FBQztRQUV4QjlDLGNBQWM7UUFFZHFCLE9BQU9rQixJQUFJLENBQUM7SUFDZDtJQUVBL0MsZ0RBQVNBLENBQUM7UUFDUlUsV0FBVztRQUVYLE1BQU1rQyxRQUFRQyxhQUFhUyxVQUFVLENBQUM7UUFFdEMsSUFBSVYsT0FBTztZQUNUcEMsY0FBYztRQUNoQjtRQUVBRSxXQUFXO0lBQ2IsR0FBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNOLFlBQVltRCxRQUFRO1FBQ25CQyxPQUFPO1lBQ0wvQztZQUNBQztZQUNBSDtZQUNBQztZQUNBZ0M7WUFDQVk7WUFDQUM7WUFDQXhDO1lBQ0FDO1lBQ0FDO1lBQ0FDO1lBQ0FDO1lBQ0FDO1lBQ0FDO1lBQ0FDO1lBQ0FDO1lBQ0FDO1lBQ0FDO1lBQ0FDO1lBQ0FDO1lBQ0FDO1lBQ0FTO1lBQ0FDO1lBQ0FOO1lBQ0FPO1lBQ0FDO1lBQ0FYO1lBQ0FDO1FBQ0Y7a0JBRUNuQixXQUFXSDs7Ozs7O0FBZWxCLEVBQUU7R0F6TFdEOztRQWFJWCxzREFBU0E7OztLQWJiVztBQTJMTixNQUFNb0QsVUFBVTs7SUFDckIsT0FBTzlELGlEQUFVQSxDQUFDUztBQUNwQixFQUFFO0lBRldxRCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9wcm92aWRlci9hdXRocHJvdmlkZXIuanM/OGI3MiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHsgYXBpIH0gZnJvbSBcIkAvY29tcG9uZW50cy9jb21tb24vYXhpb3MvcGFnZVwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xuaW1wb3J0IHsgdXNlQ29udGV4dCwgY3JlYXRlQ29udGV4dCwgdXNlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gXCJyZWFjdC10b2FzdGlmeVwiO1xuaW1wb3J0IHsgRmFJbWFnZSB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQmFja2Ryb3AgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHsgQ2lyY3VsYXJQcm9ncmVzcyB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5cbmNvbnN0IEF1dGhDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xuXG5leHBvcnQgY29uc3QgQXV0aFByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCBbaXNMb2dnZWRJbiwgc2V0SXNMb2dnZWRJbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpc1JlYWR5LCBzZXRJc1JlYWR5XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2NvbG9yLCBzZXRDb2xvcl0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3Nob3dNb2FkbDEsIHNldFNob3dNb2RhbDFdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbc2hvd0NhdGVnb3J5LCBzZXRTaG93Q2F0ZWdvcnldID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbc2hvd0ljb25zLCBzZXRTaG93SWNvbnNdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbZW1vamksIHNldEVtb2ppXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW25ld0ljb24sIHNldE5ld0ljb25dID0gdXNlU3RhdGUoPEZhSW1hZ2UgLz4pO1xuICBjb25zdCBbbmV3SWNvbkNvbG9yLCBzZXROZXdJY29uQ29sb3JdID0gdXNlU3RhdGUoXCIjMDAwMDAwXCIpO1xuICBjb25zdCBbcGFzc3dvcmRFcnJvciwgc2V0UGFzc3dvcmRFcnJvcl0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBjb25zdCBpc0NvbnRhaW5zVXBwZXJDYXNlID0gKHBhc3N3b3JkKSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXNzd29yZC5sZW5ndGg7IGkrKylcbiAgICAgIGlmIChwYXNzd29yZFtpXS5jaGFyQ29kZUF0KDApID49IDY0ICYmIHBhc3N3b3JkW2ldLmNoYXJDb2RlQXQoMCkgPD0gOTApIHtcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgICB9XG5cbiAgICByZXR1cm4gMDtcbiAgfTtcblxuICBjb25zdCBpc0NvbnRhaW5zTnVtYmVyID0gKHBhc3N3b3JkKSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXNzd29yZC5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHBhc3N3b3JkW2ldLmNoYXJDb2RlQXQoMCkgPj0gNDggJiYgcGFzc3dvcmRbaV0uY2hhckNvZGVBdCgwKSA8PSA1Nykge1xuICAgICAgICByZXR1cm4gMTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gMDtcbiAgfTtcblxuICBjb25zdCBpc0NvbnRhaW5zU3BlY2lhbENoYXJhY3RlciA9IChwYXNzd29yZCkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFzc3dvcmQubGVuZ3RoOyBpKyspXG4gICAgICBpZiAoXG4gICAgICAgIChwYXNzd29yZFtpXS5jaGFyQ29kZUF0KDApID49IDMzICYmIHBhc3N3b3JkW2ldLmNoYXJDb2RlQXQoMCkgPD0gNDcpIHx8XG4gICAgICAgIChwYXNzd29yZFtpXS5jaGFyQ29kZUF0KDApID49IDU4ICYmIHBhc3N3b3JkW2ldLmNoYXJDb2RlQXQoMCkgPD0gNjQpIHx8XG4gICAgICAgIChwYXNzd29yZFtpXS5jaGFyQ29kZUF0KDApID49IDkxICYmIHBhc3N3b3JkW2ldLmNoYXJDb2RlQXQoMCkgPD0gOTYpIHx8XG4gICAgICAgIChwYXNzd29yZFtpXS5jaGFyQ29kZUF0KDApID49IDEyMyAmJiBwYXNzd29yZFtpXS5jaGFyQ29kZUF0KDApIDw9IDEyNilcbiAgICAgICkge1xuICAgICAgICByZXR1cm4gMTtcbiAgICAgIH1cblxuICAgIHJldHVybiAwO1xuICB9O1xuXG4gIGNvbnN0IGlzTGVuZ3RoR3JlYXRlclRoYW44ID0gKHBhc3N3b3JkKSA9PiB7XG4gICAgcmV0dXJuIHBhc3N3b3JkLmxlbmd0aCA+PSA4ID8gMSA6IDA7XG4gIH07XG5cbiAgY29uc3QgY2FsY2FsdXRlU3RyZW5ndGggPSAocGFzc3dvcmQpID0+IHtcbiAgICBsZXQgc3RyZW5ndGggPSAwO1xuXG4gICAgc3RyZW5ndGggKz0gaXNDb250YWluc051bWJlcihwYXNzd29yZCk7XG4gICAgc3RyZW5ndGggKz0gaXNDb250YWluc1NwZWNpYWxDaGFyYWN0ZXIocGFzc3dvcmQpO1xuICAgIHN0cmVuZ3RoICs9IGlzQ29udGFpbnNVcHBlckNhc2UocGFzc3dvcmQpO1xuICAgIHN0cmVuZ3RoICs9IGlzTGVuZ3RoR3JlYXRlclRoYW44KHBhc3N3b3JkKTtcblxuICAgIHJldHVybiBzdHJlbmd0aDtcbiAgfTtcblxuICBjb25zdCBzaWduSW4gPSBhc3luYyAoZW1haWwsIHBhc3N3b3JkKSA9PiB7XG4gICAgc2V0SXNMb2FkaW5nKHRydWUpO1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXBpLnBvc3QoXCIvbG9naW5cIiwge1xuICAgICAgICBlbWFpbCxcbiAgICAgICAgcGFzc3dvcmQsXG4gICAgICB9KTtcblxuICAgICAgY29uc3QgeyB0b2tlbiB9ID0gZGF0YTtcblxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b2tlblwiLCB0b2tlbik7XG5cbiAgICAgIHNldElzTG9nZ2VkSW4odHJ1ZSk7XG5cbiAgICAgIHJvdXRlci5wdXNoKFwiL2Rhc2hib2FyZFwiKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdG9hc3QuZXJyb3IoZXJyb3IucmVzcG9uc2UuZGF0YS5tZXNzYWdlKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICB9XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIik7XG5cbiAgICBpZiAodG9rZW4pIHtcbiAgICAgIHNldElzTG9nZ2VkSW4odHJ1ZSk7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgY29uc3Qgc2lnblVwID0gYXN5bmMgKGVtYWlsLCBwYXNzd29yZCkgPT4ge1xuICAgIHNldElzTG9hZGluZyh0cnVlKTtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGFwaS5wb3N0KFwiL3NpZ251cDFcIiwge1xuICAgICAgICBlbWFpbCxcbiAgICAgICAgcGFzc3dvcmQsXG4gICAgICB9KTtcblxuICAgICAgY29uc3QgeyB0b2tlbiB9ID0gZGF0YTtcblxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b2tlblwiLCB0b2tlbik7XG5cbiAgICAgIHNldElzTG9nZ2VkSW4odHJ1ZSk7XG5cbiAgICAgIHJvdXRlci5wdXNoKFwiL2Rhc2hib2FyZFwiKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdG9hc3QuZXJyb3IoZXJyb3IucmVzcG9uc2UuZGF0YS5tZXNzYWdlKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgc2lnbk91dCA9IGFzeW5jICgpID0+IHtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcInRva2VuXCIpO1xuXG4gICAgc2V0SXNMb2dnZWRJbihmYWxzZSk7XG5cbiAgICByb3V0ZXIucHVzaChcIi9kYXNoYm9hcmRcIik7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRJc1JlYWR5KGZhbHNlKTtcblxuICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJ0b2tlblwiKTtcblxuICAgIGlmICh0b2tlbikge1xuICAgICAgc2V0SXNMb2dnZWRJbihmYWxzZSk7XG4gICAgfVxuXG4gICAgc2V0SXNSZWFkeSh0cnVlKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPEF1dGhDb250ZXh0LlByb3ZpZGVyXG4gICAgICB2YWx1ZT17e1xuICAgICAgICBpc1JlYWR5LFxuICAgICAgICBzZXRJc1JlYWR5LFxuICAgICAgICBpc0xvZ2dlZEluLFxuICAgICAgICBzZXRJc0xvZ2dlZEluLFxuICAgICAgICBzaWduSW4sXG4gICAgICAgIHNpZ25VcCxcbiAgICAgICAgc2lnbk91dCxcbiAgICAgICAgY29sb3IsXG4gICAgICAgIHNldENvbG9yLFxuICAgICAgICBzaG93TW9hZGwxLFxuICAgICAgICBzZXRTaG93TW9kYWwxLFxuICAgICAgICBzaG93Q2F0ZWdvcnksXG4gICAgICAgIHNldFNob3dDYXRlZ29yeSxcbiAgICAgICAgc2hvd0ljb25zLFxuICAgICAgICBzZXRTaG93SWNvbnMsXG4gICAgICAgIGVtb2ppLFxuICAgICAgICBzZXRFbW9qaSxcbiAgICAgICAgbmV3SWNvbixcbiAgICAgICAgc2V0TmV3SWNvbixcbiAgICAgICAgbmV3SWNvbkNvbG9yLFxuICAgICAgICBzZXROZXdJY29uQ29sb3IsXG4gICAgICAgIGlzQ29udGFpbnNOdW1iZXIsXG4gICAgICAgIGlzQ29udGFpbnNTcGVjaWFsQ2hhcmFjdGVyLFxuICAgICAgICBpc0NvbnRhaW5zVXBwZXJDYXNlLFxuICAgICAgICBpc0xlbmd0aEdyZWF0ZXJUaGFuOCxcbiAgICAgICAgY2FsY2FsdXRlU3RyZW5ndGgsXG4gICAgICAgIHBhc3N3b3JkRXJyb3IsXG4gICAgICAgIHNldFBhc3N3b3JkRXJyb3IsXG4gICAgICB9fVxuICAgID5cbiAgICAgIHtpc1JlYWR5ICYmIGNoaWxkcmVufVxuXG4gICAgICB7LyogPEJhY2tkcm9wXG4gICAgICAgIG9wZW49eyFpc1JlYWR5fVxuICAgICAgICBzeD17e1xuICAgICAgICAgIGNvbG9yOiBcImZmZlwiLFxuICAgICAgICAgIHpJbmRleDogKHRoZW1lKSA9PiB7XG4gICAgICAgICAgICB0aGVtZS56SW5kZXguZHJhd2VyICsgMTtcbiAgICAgICAgICB9LFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8Q2lyY3VsYXJQcm9ncmVzcyBjb2xvcj1cImluaGVyaXRcIiAvPlxuICAgICAgPC9CYWNrZHJvcD4gKi99XG4gICAgPC9BdXRoQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCB1c2VBdXRoID0gKCkgPT4ge1xuICByZXR1cm4gdXNlQ29udGV4dChBdXRoQ29udGV4dCk7XG59O1xuIl0sIm5hbWVzIjpbImFwaSIsInVzZVJvdXRlciIsInVzZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlIiwidG9hc3QiLCJGYUltYWdlIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJCYWNrZHJvcCIsIkNpcmN1bGFyUHJvZ3Jlc3MiLCJBdXRoQ29udGV4dCIsIkF1dGhQcm92aWRlciIsImNoaWxkcmVuIiwiaXNMb2dnZWRJbiIsInNldElzTG9nZ2VkSW4iLCJpc1JlYWR5Iiwic2V0SXNSZWFkeSIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsImNvbG9yIiwic2V0Q29sb3IiLCJzaG93TW9hZGwxIiwic2V0U2hvd01vZGFsMSIsInNob3dDYXRlZ29yeSIsInNldFNob3dDYXRlZ29yeSIsInNob3dJY29ucyIsInNldFNob3dJY29ucyIsImVtb2ppIiwic2V0RW1vamkiLCJuZXdJY29uIiwic2V0TmV3SWNvbiIsIm5ld0ljb25Db2xvciIsInNldE5ld0ljb25Db2xvciIsInBhc3N3b3JkRXJyb3IiLCJzZXRQYXNzd29yZEVycm9yIiwicm91dGVyIiwiaXNDb250YWluc1VwcGVyQ2FzZSIsInBhc3N3b3JkIiwiaSIsImxlbmd0aCIsImNoYXJDb2RlQXQiLCJpc0NvbnRhaW5zTnVtYmVyIiwiaXNDb250YWluc1NwZWNpYWxDaGFyYWN0ZXIiLCJpc0xlbmd0aEdyZWF0ZXJUaGFuOCIsImNhbGNhbHV0ZVN0cmVuZ3RoIiwic3RyZW5ndGgiLCJzaWduSW4iLCJlbWFpbCIsImRhdGEiLCJwb3N0IiwidG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwicHVzaCIsImVycm9yIiwicmVzcG9uc2UiLCJtZXNzYWdlIiwiZ2V0SXRlbSIsInNpZ25VcCIsInNpZ25PdXQiLCJyZW1vdmVJdGVtIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsInVzZUF1dGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/provider/authprovider.js\n"));

/***/ })

});