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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AuthProvider: function() { return /* binding */ AuthProvider; },\n/* harmony export */   useAuth: function() { return /* binding */ useAuth; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_common_axios_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/common/axios/page */ \"(app-pages-browser)/./src/components/common/axios/page.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify */ \"(app-pages-browser)/./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n/* harmony import */ var _barrel_optimize_names_FaImage_react_icons_fa__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=FaImage!=!react-icons/fa */ \"(app-pages-browser)/./node_modules/react-icons/fa/index.esm.js\");\n/* __next_internal_client_entry_do_not_use__ AuthProvider,useAuth auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_3__.createContext)();\nconst AuthProvider = (param)=>{\n    let { children } = param;\n    _s();\n    const [isLoggedIn, setIsLoggedIn] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    // const [isReady, setIsReady] = useState(false);\n    // const [isLoading, setIsLoading] = useState(false);\n    const [color, setColor] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [showMoadl1, setShowModal1] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [showCategory, setShowCategory] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [showIcons, setShowIcons] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [emoji, setEmoji] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [newIcon, setNewIcon] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaImage_react_icons_fa__WEBPACK_IMPORTED_MODULE_5__.FaImage, {}, void 0, false, {\n        fileName: \"/Users/ulaaka211/Desktop/tracker/income/src/components/provider/authprovider.js\",\n        lineNumber: 23,\n        columnNumber: 42\n    }, undefined));\n    const [newIconColor, setNewIconColor] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"#000000\");\n    const [passwordError, setPasswordError] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const isContainsUpperCase = (password)=>{\n        for(let i = 0; i < password.length; i++)if (password[i].charCodeAt(0) >= 64 && password[i].charCodeAt(0) <= 90) {\n            return 1;\n        }\n        return 0;\n    };\n    const isContainsNumber = (password)=>{\n        for(let i = 0; i < password.length; i++){\n            if (password[i].charCodeAt(0) >= 48 && password[i].charCodeAt(0) <= 57) {\n                return 1;\n            }\n        }\n        return 0;\n    };\n    const isContainsSpecialCharacter = (password)=>{\n        for(let i = 0; i < password.length; i++)if (password[i].charCodeAt(0) >= 33 && password[i].charCodeAt(0) <= 47 || password[i].charCodeAt(0) >= 58 && password[i].charCodeAt(0) <= 64 || password[i].charCodeAt(0) >= 91 && password[i].charCodeAt(0) <= 96 || password[i].charCodeAt(0) >= 123 && password[i].charCodeAt(0) <= 126) {\n            return 1;\n        }\n        return 0;\n    };\n    const isLengthGreaterThan8 = (password)=>{\n        return password.length >= 8 ? 1 : 0;\n    };\n    const calcaluteStrength = (password)=>{\n        let strength = 0;\n        strength += isContainsNumber(password);\n        strength += isContainsSpecialCharacter(password);\n        strength += isContainsUpperCase(password);\n        strength += isLengthGreaterThan8(password);\n        return strength;\n    };\n    const signIn = async (email, password)=>{\n        setIsLoading(true);\n        try {\n            const { data } = await _components_common_axios_page__WEBPACK_IMPORTED_MODULE_1__.api.post(\"/login\", {\n                email,\n                password\n            });\n            const { token } = data;\n            localStorage.setItem(\"token\", token);\n            setIsLoggedIn(true);\n            router.push(\"/dashboard\");\n        } catch (error) {\n            react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.error(error.response.data.message);\n        } finally{\n            setIsLoading(false);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const token = localStorage.getItem(\"token\");\n        if (token) {\n            setIsLoggedIn(true);\n        }\n    }, []);\n    const signUp = async (email, password)=>{\n        setIsLoading(true);\n        try {\n            const { data } = await _components_common_axios_page__WEBPACK_IMPORTED_MODULE_1__.api.post(\"/signup1\", {\n                email,\n                password\n            });\n            const { token } = data;\n            localStorage.setItem(\"token\", token);\n            setIsLoggedIn(true);\n            router.push(\"/dashboard\");\n        } catch (error) {\n            react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.error(error.response.data.message);\n        } finally{\n            setIsLoading(false);\n        }\n    };\n    // const signOut = async () => {\n    //   localStorage.removeItem(\"token\");\n    //   setIsLoggedIn(false);\n    //   router.push(\"/dashboard\");\n    // };\n    // useEffect(() => {\n    //   setIsReady(false);\n    //   const token = localStorage.removeItem(\"token\");\n    //   if (token) {\n    //     setIsLoggedIn(false);\n    //   }\n    //   setIsReady(true);\n    // }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: {\n            isReady,\n            setIsReady,\n            isLoggedIn,\n            setIsLoggedIn,\n            signIn,\n            signUp,\n            color,\n            setColor,\n            showMoadl1,\n            setShowModal1,\n            showCategory,\n            setShowCategory,\n            showIcons,\n            setShowIcons,\n            emoji,\n            setEmoji,\n            newIcon,\n            setNewIcon,\n            newIconColor,\n            setNewIconColor,\n            isContainsNumber,\n            isContainsSpecialCharacter,\n            isContainsUpperCase,\n            isLengthGreaterThan8,\n            calcaluteStrength,\n            passwordError,\n            setPasswordError\n        },\n        children: isReady && children\n    }, void 0, false, {\n        fileName: \"/Users/ulaaka211/Desktop/tracker/income/src/components/provider/authprovider.js\",\n        lineNumber: 152,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AuthProvider, \"OUBQHb776ggv9cBwalsK0TZkFOA=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = AuthProvider;\nconst useAuth = ()=>{\n    _s1();\n    return (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(AuthContext);\n};\n_s1(useAuth, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nvar _c;\n$RefreshReg$(_c, \"AuthProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3Byb3ZpZGVyL2F1dGhwcm92aWRlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFFcUQ7QUFDVDtBQUNXO0FBQ2hCO0FBQ0U7QUFDRztBQUNIO0FBQ1E7QUFFakQsTUFBTVcsNEJBQWNSLG9EQUFhQTtBQUUxQixNQUFNUyxlQUFlO1FBQUMsRUFBRUMsUUFBUSxFQUFFOztJQUN2QyxNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBR1AsK0NBQVFBLENBQUM7SUFDN0MsaURBQWlEO0lBQ2pELHFEQUFxRDtJQUNyRCxNQUFNLENBQUNRLE9BQU9DLFNBQVMsR0FBR1QsK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDVSxZQUFZQyxjQUFjLEdBQUdYLCtDQUFRQSxDQUFDO0lBQzdDLE1BQU0sQ0FBQ1ksY0FBY0MsZ0JBQWdCLEdBQUdiLCtDQUFRQSxDQUFDO0lBQ2pELE1BQU0sQ0FBQ2MsV0FBV0MsYUFBYSxHQUFHZiwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNLENBQUNnQixPQUFPQyxTQUFTLEdBQUdqQiwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNrQixTQUFTQyxXQUFXLEdBQUduQiwrQ0FBUUEsZUFBQyw4REFBQ0Ysa0ZBQU9BOzs7OztJQUMvQyxNQUFNLENBQUNzQixjQUFjQyxnQkFBZ0IsR0FBR3JCLCtDQUFRQSxDQUFDO0lBQ2pELE1BQU0sQ0FBQ3NCLGVBQWVDLGlCQUFpQixHQUFHdkIsK0NBQVFBLENBQUM7SUFFbkQsTUFBTXdCLFNBQVMvQiwwREFBU0E7SUFFeEIsTUFBTWdDLHNCQUFzQixDQUFDQztRQUMzQixJQUFLLElBQUlDLElBQUksR0FBR0EsSUFBSUQsU0FBU0UsTUFBTSxFQUFFRCxJQUNuQyxJQUFJRCxRQUFRLENBQUNDLEVBQUUsQ0FBQ0UsVUFBVSxDQUFDLE1BQU0sTUFBTUgsUUFBUSxDQUFDQyxFQUFFLENBQUNFLFVBQVUsQ0FBQyxNQUFNLElBQUk7WUFDdEUsT0FB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QUF1QjtJQUV2QixvREFBb0Q7SUFFcEQsaUJBQWlCO0lBQ2pCLDRCQUE0QjtJQUM1QixNQUFNO0lBRU4sc0JBQXNCO0lBQ3RCLFVBQVU7SUFFVixxQkFDRSw4REFBQ2xDLFlBQVk4QyxRQUFRO1FBQ25CQyxPQUFPO1lBQ0xDO1lBQ0FDO1lBQ0E5QztZQUNBQztZQUNBNEI7WUFDQWE7WUFDQXhDO1lBQ0FDO1lBQ0FDO1lBQ0FDO1lBQ0FDO1lBQ0FDO1lBQ0FDO1lBQ0FDO1lBQ0FDO1lBQ0FDO1lBQ0FDO1lBQ0FDO1lBQ0FDO1lBQ0FDO1lBQ0FTO1lBQ0FDO1lBQ0FOO1lBQ0FPO1lBQ0FDO1lBQ0FYO1lBQ0FDO1FBQ0Y7a0JBRUM0QixXQUFXOUM7Ozs7OztBQWVsQixFQUFFO0dBeExXRDs7UUFhSVgsc0RBQVNBOzs7S0FiYlc7QUEwTE4sTUFBTWlELFVBQVU7O0lBQ3JCLE9BQU8zRCxpREFBVUEsQ0FBQ1M7QUFDcEIsRUFBRTtJQUZXa0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvcHJvdmlkZXIvYXV0aHByb3ZpZGVyLmpzPzhiNzIiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCB7IGFwaSB9IGZyb20gXCJAL2NvbXBvbmVudHMvY29tbW9uL2F4aW9zL3BhZ2VcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcbmltcG9ydCB7IHVzZUNvbnRleHQsIGNyZWF0ZUNvbnRleHQsIHVzZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdG9hc3QgfSBmcm9tIFwicmVhY3QtdG9hc3RpZnlcIjtcbmltcG9ydCB7IEZhSW1hZ2UgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEJhY2tkcm9wIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB7IENpcmN1bGFyUHJvZ3Jlc3MgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuXG5jb25zdCBBdXRoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcblxuZXhwb3J0IGNvbnN0IEF1dGhQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgW2lzTG9nZ2VkSW4sIHNldElzTG9nZ2VkSW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICAvLyBjb25zdCBbaXNSZWFkeSwgc2V0SXNSZWFkeV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIC8vIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtjb2xvciwgc2V0Q29sb3JdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtzaG93TW9hZGwxLCBzZXRTaG93TW9kYWwxXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3Nob3dDYXRlZ29yeSwgc2V0U2hvd0NhdGVnb3J5XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3Nob3dJY29ucywgc2V0U2hvd0ljb25zXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2Vtb2ppLCBzZXRFbW9qaV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtuZXdJY29uLCBzZXROZXdJY29uXSA9IHVzZVN0YXRlKDxGYUltYWdlIC8+KTtcbiAgY29uc3QgW25ld0ljb25Db2xvciwgc2V0TmV3SWNvbkNvbG9yXSA9IHVzZVN0YXRlKFwiIzAwMDAwMFwiKTtcbiAgY29uc3QgW3Bhc3N3b3JkRXJyb3IsIHNldFBhc3N3b3JkRXJyb3JdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc3QgaXNDb250YWluc1VwcGVyQ2FzZSA9IChwYXNzd29yZCkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFzc3dvcmQubGVuZ3RoOyBpKyspXG4gICAgICBpZiAocGFzc3dvcmRbaV0uY2hhckNvZGVBdCgwKSA+PSA2NCAmJiBwYXNzd29yZFtpXS5jaGFyQ29kZUF0KDApIDw9IDkwKSB7XG4gICAgICAgIHJldHVybiAxO1xuICAgICAgfVxuXG4gICAgcmV0dXJuIDA7XG4gIH07XG5cbiAgY29uc3QgaXNDb250YWluc051bWJlciA9IChwYXNzd29yZCkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFzc3dvcmQubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChwYXNzd29yZFtpXS5jaGFyQ29kZUF0KDApID49IDQ4ICYmIHBhc3N3b3JkW2ldLmNoYXJDb2RlQXQoMCkgPD0gNTcpIHtcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIDA7XG4gIH07XG5cbiAgY29uc3QgaXNDb250YWluc1NwZWNpYWxDaGFyYWN0ZXIgPSAocGFzc3dvcmQpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhc3N3b3JkLmxlbmd0aDsgaSsrKVxuICAgICAgaWYgKFxuICAgICAgICAocGFzc3dvcmRbaV0uY2hhckNvZGVBdCgwKSA+PSAzMyAmJiBwYXNzd29yZFtpXS5jaGFyQ29kZUF0KDApIDw9IDQ3KSB8fFxuICAgICAgICAocGFzc3dvcmRbaV0uY2hhckNvZGVBdCgwKSA+PSA1OCAmJiBwYXNzd29yZFtpXS5jaGFyQ29kZUF0KDApIDw9IDY0KSB8fFxuICAgICAgICAocGFzc3dvcmRbaV0uY2hhckNvZGVBdCgwKSA+PSA5MSAmJiBwYXNzd29yZFtpXS5jaGFyQ29kZUF0KDApIDw9IDk2KSB8fFxuICAgICAgICAocGFzc3dvcmRbaV0uY2hhckNvZGVBdCgwKSA+PSAxMjMgJiYgcGFzc3dvcmRbaV0uY2hhckNvZGVBdCgwKSA8PSAxMjYpXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgICB9XG5cbiAgICByZXR1cm4gMDtcbiAgfTtcblxuICBjb25zdCBpc0xlbmd0aEdyZWF0ZXJUaGFuOCA9IChwYXNzd29yZCkgPT4ge1xuICAgIHJldHVybiBwYXNzd29yZC5sZW5ndGggPj0gOCA/IDEgOiAwO1xuICB9O1xuXG4gIGNvbnN0IGNhbGNhbHV0ZVN0cmVuZ3RoID0gKHBhc3N3b3JkKSA9PiB7XG4gICAgbGV0IHN0cmVuZ3RoID0gMDtcblxuICAgIHN0cmVuZ3RoICs9IGlzQ29udGFpbnNOdW1iZXIocGFzc3dvcmQpO1xuICAgIHN0cmVuZ3RoICs9IGlzQ29udGFpbnNTcGVjaWFsQ2hhcmFjdGVyKHBhc3N3b3JkKTtcbiAgICBzdHJlbmd0aCArPSBpc0NvbnRhaW5zVXBwZXJDYXNlKHBhc3N3b3JkKTtcbiAgICBzdHJlbmd0aCArPSBpc0xlbmd0aEdyZWF0ZXJUaGFuOChwYXNzd29yZCk7XG5cbiAgICByZXR1cm4gc3RyZW5ndGg7XG4gIH07XG5cbiAgY29uc3Qgc2lnbkluID0gYXN5bmMgKGVtYWlsLCBwYXNzd29yZCkgPT4ge1xuICAgIHNldElzTG9hZGluZyh0cnVlKTtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGFwaS5wb3N0KFwiL2xvZ2luXCIsIHtcbiAgICAgICAgZW1haWwsXG4gICAgICAgIHBhc3N3b3JkLFxuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IHsgdG9rZW4gfSA9IGRhdGE7XG5cbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9rZW5cIiwgdG9rZW4pO1xuXG4gICAgICBzZXRJc0xvZ2dlZEluKHRydWUpO1xuXG4gICAgICByb3V0ZXIucHVzaChcIi9kYXNoYm9hcmRcIik7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRvYXN0LmVycm9yKGVycm9yLnJlc3BvbnNlLmRhdGEubWVzc2FnZSk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgfVxuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpO1xuXG4gICAgaWYgKHRva2VuKSB7XG4gICAgICBzZXRJc0xvZ2dlZEluKHRydWUpO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIGNvbnN0IHNpZ25VcCA9IGFzeW5jIChlbWFpbCwgcGFzc3dvcmQpID0+IHtcbiAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBhcGkucG9zdChcIi9zaWdudXAxXCIsIHtcbiAgICAgICAgZW1haWwsXG4gICAgICAgIHBhc3N3b3JkLFxuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IHsgdG9rZW4gfSA9IGRhdGE7XG5cbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9rZW5cIiwgdG9rZW4pO1xuXG4gICAgICBzZXRJc0xvZ2dlZEluKHRydWUpO1xuXG4gICAgICByb3V0ZXIucHVzaChcIi9kYXNoYm9hcmRcIik7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRvYXN0LmVycm9yKGVycm9yLnJlc3BvbnNlLmRhdGEubWVzc2FnZSk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgfVxuICB9O1xuXG4gIC8vIGNvbnN0IHNpZ25PdXQgPSBhc3luYyAoKSA9PiB7XG4gIC8vICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJ0b2tlblwiKTtcblxuICAvLyAgIHNldElzTG9nZ2VkSW4oZmFsc2UpO1xuXG4gIC8vICAgcm91dGVyLnB1c2goXCIvZGFzaGJvYXJkXCIpO1xuICAvLyB9O1xuXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vICAgc2V0SXNSZWFkeShmYWxzZSk7XG5cbiAgLy8gICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwidG9rZW5cIik7XG5cbiAgLy8gICBpZiAodG9rZW4pIHtcbiAgLy8gICAgIHNldElzTG9nZ2VkSW4oZmFsc2UpO1xuICAvLyAgIH1cblxuICAvLyAgIHNldElzUmVhZHkodHJ1ZSk7XG4gIC8vIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxBdXRoQ29udGV4dC5Qcm92aWRlclxuICAgICAgdmFsdWU9e3tcbiAgICAgICAgaXNSZWFkeSxcbiAgICAgICAgc2V0SXNSZWFkeSxcbiAgICAgICAgaXNMb2dnZWRJbixcbiAgICAgICAgc2V0SXNMb2dnZWRJbixcbiAgICAgICAgc2lnbkluLFxuICAgICAgICBzaWduVXAsXG4gICAgICAgIGNvbG9yLFxuICAgICAgICBzZXRDb2xvcixcbiAgICAgICAgc2hvd01vYWRsMSxcbiAgICAgICAgc2V0U2hvd01vZGFsMSxcbiAgICAgICAgc2hvd0NhdGVnb3J5LFxuICAgICAgICBzZXRTaG93Q2F0ZWdvcnksXG4gICAgICAgIHNob3dJY29ucyxcbiAgICAgICAgc2V0U2hvd0ljb25zLFxuICAgICAgICBlbW9qaSxcbiAgICAgICAgc2V0RW1vamksXG4gICAgICAgIG5ld0ljb24sXG4gICAgICAgIHNldE5ld0ljb24sXG4gICAgICAgIG5ld0ljb25Db2xvcixcbiAgICAgICAgc2V0TmV3SWNvbkNvbG9yLFxuICAgICAgICBpc0NvbnRhaW5zTnVtYmVyLFxuICAgICAgICBpc0NvbnRhaW5zU3BlY2lhbENoYXJhY3RlcixcbiAgICAgICAgaXNDb250YWluc1VwcGVyQ2FzZSxcbiAgICAgICAgaXNMZW5ndGhHcmVhdGVyVGhhbjgsXG4gICAgICAgIGNhbGNhbHV0ZVN0cmVuZ3RoLFxuICAgICAgICBwYXNzd29yZEVycm9yLFxuICAgICAgICBzZXRQYXNzd29yZEVycm9yLFxuICAgICAgfX1cbiAgICA+XG4gICAgICB7aXNSZWFkeSAmJiBjaGlsZHJlbn1cblxuICAgICAgey8qIDxCYWNrZHJvcFxuICAgICAgICBvcGVuPXshaXNSZWFkeX1cbiAgICAgICAgc3g9e3tcbiAgICAgICAgICBjb2xvcjogXCJmZmZcIixcbiAgICAgICAgICB6SW5kZXg6ICh0aGVtZSkgPT4ge1xuICAgICAgICAgICAgdGhlbWUuekluZGV4LmRyYXdlciArIDE7XG4gICAgICAgICAgfSxcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPENpcmN1bGFyUHJvZ3Jlc3MgY29sb3I9XCJpbmhlcml0XCIgLz5cbiAgICAgIDwvQmFja2Ryb3A+ICovfVxuICAgIDwvQXV0aENvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgdXNlQXV0aCA9ICgpID0+IHtcbiAgcmV0dXJuIHVzZUNvbnRleHQoQXV0aENvbnRleHQpO1xufTtcbiJdLCJuYW1lcyI6WyJhcGkiLCJ1c2VSb3V0ZXIiLCJ1c2VDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZSIsInRvYXN0IiwiRmFJbWFnZSIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQmFja2Ryb3AiLCJDaXJjdWxhclByb2dyZXNzIiwiQXV0aENvbnRleHQiLCJBdXRoUHJvdmlkZXIiLCJjaGlsZHJlbiIsImlzTG9nZ2VkSW4iLCJzZXRJc0xvZ2dlZEluIiwiY29sb3IiLCJzZXRDb2xvciIsInNob3dNb2FkbDEiLCJzZXRTaG93TW9kYWwxIiwic2hvd0NhdGVnb3J5Iiwic2V0U2hvd0NhdGVnb3J5Iiwic2hvd0ljb25zIiwic2V0U2hvd0ljb25zIiwiZW1vamkiLCJzZXRFbW9qaSIsIm5ld0ljb24iLCJzZXROZXdJY29uIiwibmV3SWNvbkNvbG9yIiwic2V0TmV3SWNvbkNvbG9yIiwicGFzc3dvcmRFcnJvciIsInNldFBhc3N3b3JkRXJyb3IiLCJyb3V0ZXIiLCJpc0NvbnRhaW5zVXBwZXJDYXNlIiwicGFzc3dvcmQiLCJpIiwibGVuZ3RoIiwiY2hhckNvZGVBdCIsImlzQ29udGFpbnNOdW1iZXIiLCJpc0NvbnRhaW5zU3BlY2lhbENoYXJhY3RlciIsImlzTGVuZ3RoR3JlYXRlclRoYW44IiwiY2FsY2FsdXRlU3RyZW5ndGgiLCJzdHJlbmd0aCIsInNpZ25JbiIsImVtYWlsIiwic2V0SXNMb2FkaW5nIiwiZGF0YSIsInBvc3QiLCJ0b2tlbiIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJwdXNoIiwiZXJyb3IiLCJyZXNwb25zZSIsIm1lc3NhZ2UiLCJnZXRJdGVtIiwic2lnblVwIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsImlzUmVhZHkiLCJzZXRJc1JlYWR5IiwidXNlQXV0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/provider/authprovider.js\n"));

/***/ })

});