"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/dashboard/page",{

/***/ "(app-pages-browser)/./src/components/provider/authprovider.js":
/*!*************************************************!*\
  !*** ./src/components/provider/authprovider.js ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AuthProvider: function() { return /* binding */ AuthProvider; },\n/* harmony export */   useAuth: function() { return /* binding */ useAuth; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_common_axios_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/common/axios/page */ \"(app-pages-browser)/./src/components/common/axios/page.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify */ \"(app-pages-browser)/./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n/* harmony import */ var _barrel_optimize_names_FaImage_react_icons_fa__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=FaImage!=!react-icons/fa */ \"(app-pages-browser)/./node_modules/react-icons/fa/index.esm.js\");\n/* __next_internal_client_entry_do_not_use__ AuthProvider,useAuth auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_3__.createContext)();\nconst AuthProvider = (param)=>{\n    let { children } = param;\n    _s();\n    const [isLoggedIn, setIsLoggedIn] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [isReady, setIsReady] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [color, setColor] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [showMoadl1, setShowModal1] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [showCategory, setShowCategory] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [showIcons, setShowIcons] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [emoji, setEmoji] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [newIcon, setNewIcon] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaImage_react_icons_fa__WEBPACK_IMPORTED_MODULE_5__.FaImage, {}, void 0, false, {\n        fileName: \"/Users/ulaaka211/Desktop/tracker/income/src/components/provider/authprovider.js\",\n        lineNumber: 23,\n        columnNumber: 42\n    }, undefined));\n    const [newIconColor, setNewIconColor] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"#000000\");\n    const [passwordError, setPasswordError] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const isContainsUpperCase = (password)=>{\n        for(let i = 0; i < password.length; i++)if (password[i].charCodeAt(0) >= 64 && password[i].charCodeAt(0) <= 90) {\n            return 1;\n        }\n        return 0;\n    };\n    const isContainsNumber = (password)=>{\n        for(let i = 0; i < password.length; i++){\n            if (password[i].charCodeAt(0) >= 48 && password[i].charCodeAt(0) <= 57) {\n                return 1;\n            }\n        }\n        return 0;\n    };\n    const isContainsSpecialCharacter = (password)=>{\n        for(let i = 0; i < password.length; i++)if (password[i].charCodeAt(0) >= 33 && password[i].charCodeAt(0) <= 47 || password[i].charCodeAt(0) >= 58 && password[i].charCodeAt(0) <= 64 || password[i].charCodeAt(0) >= 91 && password[i].charCodeAt(0) <= 96 || password[i].charCodeAt(0) >= 123 && password[i].charCodeAt(0) <= 126) {\n            return 1;\n        }\n        return 0;\n    };\n    const isLengthGreaterThan8 = (password)=>{\n        return password.length >= 8 ? 1 : 0;\n    };\n    const calcaluteStrength = (password)=>{\n        let strength = 0;\n        strength += isContainsNumber(password);\n        strength += isContainsSpecialCharacter(password);\n        strength += isContainsUpperCase(password);\n        strength += isLengthGreaterThan8(password);\n        return strength;\n    };\n    const signIn = async (email, password)=>{\n        setIsLoading(true);\n        try {\n            const { data } = await _components_common_axios_page__WEBPACK_IMPORTED_MODULE_1__.api.post(\"/login\", {\n                email,\n                password\n            });\n            const { token } = data;\n            localStorage.setItem(\"token\", token);\n            setIsLoggedIn(true);\n            router.push(\"/dashboard\");\n        } catch (error) {\n            react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.error(error.response.data.message);\n        } finally{\n            setIsLoading(false);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const token = localStorage.getItem(\"token\");\n        if (token) {\n            setIsLoggedIn(true);\n        }\n    }, []);\n    const signUp = async (email, password)=>{\n        setIsLoading(true);\n        try {\n            const { data } = await _components_common_axios_page__WEBPACK_IMPORTED_MODULE_1__.api.post(\"/signup1\", {\n                email,\n                password\n            });\n            const { token } = data;\n            localStorage.setItem(\"token\", token);\n            setIsLoggedIn(true);\n            router.push(\"/dashboard\");\n        } catch (error) {\n            react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.error(error.response.data.message);\n        } finally{\n            setIsLoading(false);\n        }\n    };\n    // const signOut = async () => {\n    //   localStorage.removeItem(\"token\");\n    //   setIsLoggedIn(false);\n    //   router.push(\"/dashboard\");\n    // };\n    // useEffect(() => {\n    //   setIsReady(false);\n    //   const token = localStorage.removeItem(\"token\");\n    //   if (token) {\n    //     setIsLoggedIn(false);\n    //   }\n    //   setIsReady(true);\n    // }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: {\n            isReady,\n            setIsReady,\n            isLoggedIn,\n            setIsLoggedIn,\n            signIn,\n            signUp,\n            color,\n            setColor,\n            showMoadl1,\n            setShowModal1,\n            showCategory,\n            setShowCategory,\n            showIcons,\n            setShowIcons,\n            emoji,\n            setEmoji,\n            newIcon,\n            setNewIcon,\n            newIconColor,\n            setNewIconColor,\n            isContainsNumber,\n            isContainsSpecialCharacter,\n            isContainsUpperCase,\n            isLengthGreaterThan8,\n            calcaluteStrength,\n            passwordError,\n            setPasswordError\n        },\n        children: isReady && children\n    }, void 0, false, {\n        fileName: \"/Users/ulaaka211/Desktop/tracker/income/src/components/provider/authprovider.js\",\n        lineNumber: 152,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AuthProvider, \"E4th1yxqrIDj5Ho+EMT0gsqSqik=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = AuthProvider;\nconst useAuth = ()=>{\n    _s1();\n    return (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(AuthContext);\n};\n_s1(useAuth, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nvar _c;\n$RefreshReg$(_c, \"AuthProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3Byb3ZpZGVyL2F1dGhwcm92aWRlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFFcUQ7QUFDVDtBQUNXO0FBQ2hCO0FBQ0U7QUFDRztBQUNIO0FBQ1E7QUFFakQsTUFBTVcsNEJBQWNSLG9EQUFhQTtBQUUxQixNQUFNUyxlQUFlO1FBQUMsRUFBRUMsUUFBUSxFQUFFOztJQUN2QyxNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBR1AsK0NBQVFBLENBQUM7SUFDN0MsTUFBTSxDQUFDUSxTQUFTQyxXQUFXLEdBQUdULCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU0sQ0FBQ1UsV0FBV0MsYUFBYSxHQUFHWCwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNLENBQUNZLE9BQU9DLFNBQVMsR0FBR2IsK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDYyxZQUFZQyxjQUFjLEdBQUdmLCtDQUFRQSxDQUFDO0lBQzdDLE1BQU0sQ0FBQ2dCLGNBQWNDLGdCQUFnQixHQUFHakIsK0NBQVFBLENBQUM7SUFDakQsTUFBTSxDQUFDa0IsV0FBV0MsYUFBYSxHQUFHbkIsK0NBQVFBLENBQUM7SUFDM0MsTUFBTSxDQUFDb0IsT0FBT0MsU0FBUyxHQUFHckIsK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDc0IsU0FBU0MsV0FBVyxHQUFHdkIsK0NBQVFBLGVBQUMsOERBQUNGLGtGQUFPQTs7Ozs7SUFDL0MsTUFBTSxDQUFDMEIsY0FBY0MsZ0JBQWdCLEdBQUd6QiwrQ0FBUUEsQ0FBQztJQUNqRCxNQUFNLENBQUMwQixlQUFlQyxpQkFBaUIsR0FBRzNCLCtDQUFRQSxDQUFDO0lBRW5ELE1BQU00QixTQUFTbkMsMERBQVNBO0lBRXhCLE1BQU1vQyxzQkFBc0IsQ0FBQ0M7UUFDM0IsSUFBSyxJQUFJQyxJQUFJLEdBQUdBLElBQUlELFNBQVNFLE1BQU0sRUFBRUQsSUFDbkMsSUFBSUQsUUFBUSxDQUFDQyxFQUFFLENBQUNFLFVB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QUFnQztJQUNoQyxzQ0FBc0M7SUFFdEMsMEJBQTBCO0lBRTFCLCtCQUErQjtJQUMvQixLQUFLO0lBRUwsb0JBQW9CO0lBQ3BCLHVCQUF1QjtJQUV2QixvREFBb0Q7SUFFcEQsaUJBQWlCO0lBQ2pCLDRCQUE0QjtJQUM1QixNQUFNO0lBRU4sc0JBQXNCO0lBQ3RCLFVBQVU7SUFFVixxQkFDRSw4REFBQ1IsWUFBWWlELFFBQVE7UUFDbkJDLE9BQU87WUFDTDdDO1lBQ0FDO1lBQ0FIO1lBQ0FDO1lBQ0FnQztZQUNBWTtZQUVBdkM7WUFDQUM7WUFDQUM7WUFDQUM7WUFDQUM7WUFDQUM7WUFDQUM7WUFDQUM7WUFDQUM7WUFDQUM7WUFDQUM7WUFDQUM7WUFDQUM7WUFDQUM7WUFDQVM7WUFDQUM7WUFDQU47WUFDQU87WUFDQUM7WUFDQVg7WUFDQUM7UUFDRjtrQkFFQ25CLFdBQVdIOzs7Ozs7QUFlbEIsRUFBRTtHQXpMV0Q7O1FBYUlYLHNEQUFTQTs7O0tBYmJXO0FBMkxOLE1BQU1rRCxVQUFVOztJQUNyQixPQUFPNUQsaURBQVVBLENBQUNTO0FBQ3BCLEVBQUU7SUFGV21EIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3Byb3ZpZGVyL2F1dGhwcm92aWRlci5qcz84YjcyIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgeyBhcGkgfSBmcm9tIFwiQC9jb21wb25lbnRzL2NvbW1vbi9heGlvcy9wYWdlXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XG5pbXBvcnQgeyB1c2VDb250ZXh0LCBjcmVhdGVDb250ZXh0LCB1c2UgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSBcInJlYWN0LXRvYXN0aWZ5XCI7XG5pbXBvcnQgeyBGYUltYWdlIH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBCYWNrZHJvcCB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgeyBDaXJjdWxhclByb2dyZXNzIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcblxuY29uc3QgQXV0aENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XG5cbmV4cG9ydCBjb25zdCBBdXRoUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IFtpc0xvZ2dlZEluLCBzZXRJc0xvZ2dlZEluXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2lzUmVhZHksIHNldElzUmVhZHldID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbY29sb3IsIHNldENvbG9yXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbc2hvd01vYWRsMSwgc2V0U2hvd01vZGFsMV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtzaG93Q2F0ZWdvcnksIHNldFNob3dDYXRlZ29yeV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtzaG93SWNvbnMsIHNldFNob3dJY29uc10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtlbW9qaSwgc2V0RW1vamldID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbbmV3SWNvbiwgc2V0TmV3SWNvbl0gPSB1c2VTdGF0ZSg8RmFJbWFnZSAvPik7XG4gIGNvbnN0IFtuZXdJY29uQ29sb3IsIHNldE5ld0ljb25Db2xvcl0gPSB1c2VTdGF0ZShcIiMwMDAwMDBcIik7XG4gIGNvbnN0IFtwYXNzd29yZEVycm9yLCBzZXRQYXNzd29yZEVycm9yXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnN0IGlzQ29udGFpbnNVcHBlckNhc2UgPSAocGFzc3dvcmQpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhc3N3b3JkLmxlbmd0aDsgaSsrKVxuICAgICAgaWYgKHBhc3N3b3JkW2ldLmNoYXJDb2RlQXQoMCkgPj0gNjQgJiYgcGFzc3dvcmRbaV0uY2hhckNvZGVBdCgwKSA8PSA5MCkge1xuICAgICAgICByZXR1cm4gMTtcbiAgICAgIH1cblxuICAgIHJldHVybiAwO1xuICB9O1xuXG4gIGNvbnN0IGlzQ29udGFpbnNOdW1iZXIgPSAocGFzc3dvcmQpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhc3N3b3JkLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAocGFzc3dvcmRbaV0uY2hhckNvZGVBdCgwKSA+PSA0OCAmJiBwYXNzd29yZFtpXS5jaGFyQ29kZUF0KDApIDw9IDU3KSB7XG4gICAgICAgIHJldHVybiAxO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAwO1xuICB9O1xuXG4gIGNvbnN0IGlzQ29udGFpbnNTcGVjaWFsQ2hhcmFjdGVyID0gKHBhc3N3b3JkKSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXNzd29yZC5sZW5ndGg7IGkrKylcbiAgICAgIGlmIChcbiAgICAgICAgKHBhc3N3b3JkW2ldLmNoYXJDb2RlQXQoMCkgPj0gMzMgJiYgcGFzc3dvcmRbaV0uY2hhckNvZGVBdCgwKSA8PSA0NykgfHxcbiAgICAgICAgKHBhc3N3b3JkW2ldLmNoYXJDb2RlQXQoMCkgPj0gNTggJiYgcGFzc3dvcmRbaV0uY2hhckNvZGVBdCgwKSA8PSA2NCkgfHxcbiAgICAgICAgKHBhc3N3b3JkW2ldLmNoYXJDb2RlQXQoMCkgPj0gOTEgJiYgcGFzc3dvcmRbaV0uY2hhckNvZGVBdCgwKSA8PSA5NikgfHxcbiAgICAgICAgKHBhc3N3b3JkW2ldLmNoYXJDb2RlQXQoMCkgPj0gMTIzICYmIHBhc3N3b3JkW2ldLmNoYXJDb2RlQXQoMCkgPD0gMTI2KVxuICAgICAgKSB7XG4gICAgICAgIHJldHVybiAxO1xuICAgICAgfVxuXG4gICAgcmV0dXJuIDA7XG4gIH07XG5cbiAgY29uc3QgaXNMZW5ndGhHcmVhdGVyVGhhbjggPSAocGFzc3dvcmQpID0+IHtcbiAgICByZXR1cm4gcGFzc3dvcmQubGVuZ3RoID49IDggPyAxIDogMDtcbiAgfTtcblxuICBjb25zdCBjYWxjYWx1dGVTdHJlbmd0aCA9IChwYXNzd29yZCkgPT4ge1xuICAgIGxldCBzdHJlbmd0aCA9IDA7XG5cbiAgICBzdHJlbmd0aCArPSBpc0NvbnRhaW5zTnVtYmVyKHBhc3N3b3JkKTtcbiAgICBzdHJlbmd0aCArPSBpc0NvbnRhaW5zU3BlY2lhbENoYXJhY3RlcihwYXNzd29yZCk7XG4gICAgc3RyZW5ndGggKz0gaXNDb250YWluc1VwcGVyQ2FzZShwYXNzd29yZCk7XG4gICAgc3RyZW5ndGggKz0gaXNMZW5ndGhHcmVhdGVyVGhhbjgocGFzc3dvcmQpO1xuXG4gICAgcmV0dXJuIHN0cmVuZ3RoO1xuICB9O1xuXG4gIGNvbnN0IHNpZ25JbiA9IGFzeW5jIChlbWFpbCwgcGFzc3dvcmQpID0+IHtcbiAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBhcGkucG9zdChcIi9sb2dpblwiLCB7XG4gICAgICAgIGVtYWlsLFxuICAgICAgICBwYXNzd29yZCxcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCB7IHRva2VuIH0gPSBkYXRhO1xuXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRva2VuXCIsIHRva2VuKTtcblxuICAgICAgc2V0SXNMb2dnZWRJbih0cnVlKTtcblxuICAgICAgcm91dGVyLnB1c2goXCIvZGFzaGJvYXJkXCIpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0b2FzdC5lcnJvcihlcnJvci5yZXNwb25zZS5kYXRhLm1lc3NhZ2UpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgIH1cbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKTtcblxuICAgIGlmICh0b2tlbikge1xuICAgICAgc2V0SXNMb2dnZWRJbih0cnVlKTtcbiAgICB9XG4gIH0sIFtdKTtcblxuICBjb25zdCBzaWduVXAgPSBhc3luYyAoZW1haWwsIHBhc3N3b3JkKSA9PiB7XG4gICAgc2V0SXNMb2FkaW5nKHRydWUpO1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXBpLnBvc3QoXCIvc2lnbnVwMVwiLCB7XG4gICAgICAgIGVtYWlsLFxuICAgICAgICBwYXNzd29yZCxcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCB7IHRva2VuIH0gPSBkYXRhO1xuXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRva2VuXCIsIHRva2VuKTtcblxuICAgICAgc2V0SXNMb2dnZWRJbih0cnVlKTtcblxuICAgICAgcm91dGVyLnB1c2goXCIvZGFzaGJvYXJkXCIpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0b2FzdC5lcnJvcihlcnJvci5yZXNwb25zZS5kYXRhLm1lc3NhZ2UpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgIH1cbiAgfTtcblxuICAvLyBjb25zdCBzaWduT3V0ID0gYXN5bmMgKCkgPT4ge1xuICAvLyAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwidG9rZW5cIik7XG5cbiAgLy8gICBzZXRJc0xvZ2dlZEluKGZhbHNlKTtcblxuICAvLyAgIHJvdXRlci5wdXNoKFwiL2Rhc2hib2FyZFwiKTtcbiAgLy8gfTtcblxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgIHNldElzUmVhZHkoZmFsc2UpO1xuXG4gIC8vICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcInRva2VuXCIpO1xuXG4gIC8vICAgaWYgKHRva2VuKSB7XG4gIC8vICAgICBzZXRJc0xvZ2dlZEluKGZhbHNlKTtcbiAgLy8gICB9XG5cbiAgLy8gICBzZXRJc1JlYWR5KHRydWUpO1xuICAvLyB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8QXV0aENvbnRleHQuUHJvdmlkZXJcbiAgICAgIHZhbHVlPXt7XG4gICAgICAgIGlzUmVhZHksXG4gICAgICAgIHNldElzUmVhZHksXG4gICAgICAgIGlzTG9nZ2VkSW4sXG4gICAgICAgIHNldElzTG9nZ2VkSW4sXG4gICAgICAgIHNpZ25JbixcbiAgICAgICAgc2lnblVwLFxuXG4gICAgICAgIGNvbG9yLFxuICAgICAgICBzZXRDb2xvcixcbiAgICAgICAgc2hvd01vYWRsMSxcbiAgICAgICAgc2V0U2hvd01vZGFsMSxcbiAgICAgICAgc2hvd0NhdGVnb3J5LFxuICAgICAgICBzZXRTaG93Q2F0ZWdvcnksXG4gICAgICAgIHNob3dJY29ucyxcbiAgICAgICAgc2V0U2hvd0ljb25zLFxuICAgICAgICBlbW9qaSxcbiAgICAgICAgc2V0RW1vamksXG4gICAgICAgIG5ld0ljb24sXG4gICAgICAgIHNldE5ld0ljb24sXG4gICAgICAgIG5ld0ljb25Db2xvcixcbiAgICAgICAgc2V0TmV3SWNvbkNvbG9yLFxuICAgICAgICBpc0NvbnRhaW5zTnVtYmVyLFxuICAgICAgICBpc0NvbnRhaW5zU3BlY2lhbENoYXJhY3RlcixcbiAgICAgICAgaXNDb250YWluc1VwcGVyQ2FzZSxcbiAgICAgICAgaXNMZW5ndGhHcmVhdGVyVGhhbjgsXG4gICAgICAgIGNhbGNhbHV0ZVN0cmVuZ3RoLFxuICAgICAgICBwYXNzd29yZEVycm9yLFxuICAgICAgICBzZXRQYXNzd29yZEVycm9yLFxuICAgICAgfX1cbiAgICA+XG4gICAgICB7aXNSZWFkeSAmJiBjaGlsZHJlbn1cblxuICAgICAgey8qIDxCYWNrZHJvcFxuICAgICAgICBvcGVuPXshaXNSZWFkeX1cbiAgICAgICAgc3g9e3tcbiAgICAgICAgICBjb2xvcjogXCJmZmZcIixcbiAgICAgICAgICB6SW5kZXg6ICh0aGVtZSkgPT4ge1xuICAgICAgICAgICAgdGhlbWUuekluZGV4LmRyYXdlciArIDE7XG4gICAgICAgICAgfSxcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPENpcmN1bGFyUHJvZ3Jlc3MgY29sb3I9XCJpbmhlcml0XCIgLz5cbiAgICAgIDwvQmFja2Ryb3A+ICovfVxuICAgIDwvQXV0aENvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgdXNlQXV0aCA9ICgpID0+IHtcbiAgcmV0dXJuIHVzZUNvbnRleHQoQXV0aENvbnRleHQpO1xufTtcbiJdLCJuYW1lcyI6WyJhcGkiLCJ1c2VSb3V0ZXIiLCJ1c2VDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZSIsInRvYXN0IiwiRmFJbWFnZSIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQmFja2Ryb3AiLCJDaXJjdWxhclByb2dyZXNzIiwiQXV0aENvbnRleHQiLCJBdXRoUHJvdmlkZXIiLCJjaGlsZHJlbiIsImlzTG9nZ2VkSW4iLCJzZXRJc0xvZ2dlZEluIiwiaXNSZWFkeSIsInNldElzUmVhZHkiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJjb2xvciIsInNldENvbG9yIiwic2hvd01vYWRsMSIsInNldFNob3dNb2RhbDEiLCJzaG93Q2F0ZWdvcnkiLCJzZXRTaG93Q2F0ZWdvcnkiLCJzaG93SWNvbnMiLCJzZXRTaG93SWNvbnMiLCJlbW9qaSIsInNldEVtb2ppIiwibmV3SWNvbiIsInNldE5ld0ljb24iLCJuZXdJY29uQ29sb3IiLCJzZXROZXdJY29uQ29sb3IiLCJwYXNzd29yZEVycm9yIiwic2V0UGFzc3dvcmRFcnJvciIsInJvdXRlciIsImlzQ29udGFpbnNVcHBlckNhc2UiLCJwYXNzd29yZCIsImkiLCJsZW5ndGgiLCJjaGFyQ29kZUF0IiwiaXNDb250YWluc051bWJlciIsImlzQ29udGFpbnNTcGVjaWFsQ2hhcmFjdGVyIiwiaXNMZW5ndGhHcmVhdGVyVGhhbjgiLCJjYWxjYWx1dGVTdHJlbmd0aCIsInN0cmVuZ3RoIiwic2lnbkluIiwiZW1haWwiLCJkYXRhIiwicG9zdCIsInRva2VuIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsInB1c2giLCJlcnJvciIsInJlc3BvbnNlIiwibWVzc2FnZSIsImdldEl0ZW0iLCJzaWduVXAiLCJQcm92aWRlciIsInZhbHVlIiwidXNlQXV0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/provider/authprovider.js\n"));

/***/ })

});