"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/signup1/page",{

/***/ "(app-pages-browser)/./src/components/provider/authprovider.js":
/*!*************************************************!*\
  !*** ./src/components/provider/authprovider.js ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AuthProvider: function() { return /* binding */ AuthProvider; },\n/* harmony export */   useAuth: function() { return /* binding */ useAuth; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_common_axios_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/common/axios/page */ \"(app-pages-browser)/./src/components/common/axios/page.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify */ \"(app-pages-browser)/./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n/* harmony import */ var _barrel_optimize_names_FaImage_react_icons_fa__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=FaImage!=!react-icons/fa */ \"(app-pages-browser)/./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var _barrel_optimize_names_Backdrop_mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Backdrop!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Backdrop/Backdrop.js\");\n/* harmony import */ var _barrel_optimize_names_CircularProgress_mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=CircularProgress!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/CircularProgress/CircularProgress.js\");\n/* __next_internal_client_entry_do_not_use__ AuthProvider,useAuth auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_3__.createContext)();\nconst AuthProvider = (param)=>{\n    let { children } = param;\n    _s();\n    const [isLoggedIn, setIsLoggedIn] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [isReady, setIsReady] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [color, setColor] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [showMoadl1, setShowModal1] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [showCategory, setShowCategory] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [showIcons, setShowIcons] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [emoji, setEmoji] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [newIcon, setNewIcon] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaImage_react_icons_fa__WEBPACK_IMPORTED_MODULE_5__.FaImage, {}, void 0, false, {\n        fileName: \"/Users/ulaaka211/Desktop/tracker/income/src/components/provider/authprovider.js\",\n        lineNumber: 23,\n        columnNumber: 42\n    }, undefined));\n    const [newIconColor, setNewIconColor] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"#000000\");\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [passwordError, setPasswordError] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [rePassword, setRePassword] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const isContainsNumber = (password)=>{\n        for(let i = 0; i < password.length; i++){\n            if (password[i].charCodeAt(0) >= 48 && password[i].charCodeAt(0) <= 57) {\n                return 1;\n            }\n        }\n        return 0;\n    };\n    const isContainsSpecialCharacter = (password)=>{\n        for(let i = 0; i < password.length; i++)if (password[i].charCodeAt(0) >= 33 && password[i].charCodeAt(0) <= 47 || password[i].charCodeAt(0) >= 58 && password[i].charCodeAt(0) <= 64 || password[i].charCodeAt(0) >= 91 && password[i].charCodeAt(0) <= 96 || password[i].charCodeAt(0) >= 123 && password[i].charCodeAt(0) <= 126) {\n            return 1;\n        }\n        return 0;\n    };\n    const isContainsUpperCase = (password)=>{\n        for(let i = 0; i < password.length; i++)if (password[i].charCodeAt(0) >= 48 && password[i].charCodeAt(0) <= 57) {\n            return 1;\n        }\n        return 0;\n    };\n    const isLengthGreaterThan8 = (password)=>{\n        return password.length >= 8 ? 1 : 0;\n    };\n    const calcaluteStrength = (password)=>{\n        let strength = 0;\n        strength += isContainsNumber(password);\n        strength += isContainsSpecialCharacter(password);\n        strength += isContainsUpperCase(password);\n        strength += isLengthGreaterThan8(password);\n        return strength;\n    };\n    const signIn = async (email, password)=>{\n        setIsLoading(true);\n        try {\n            const { data } = await _components_common_axios_page__WEBPACK_IMPORTED_MODULE_1__.api.post(\"/login\", {\n                email,\n                password\n            });\n            const { token } = data;\n            localStorage.setItem(\"token\", token);\n            setIsLoggedIn(true);\n            router.push(\"/dashboard\");\n        } catch (error) {\n            react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.error(error.response.data.message);\n        } finally{\n            setIsLoading(false);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const token = localStorage.getItem(\"token\");\n        if (token) {\n            setIsLoggedIn(true);\n        }\n    }, []);\n    const signOut = async ()=>{\n        localStorage.removeItem(\"token\");\n        setIsLoggedIn(false);\n        router.push(\"/dashboard\");\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        setIsReady(false);\n        const token = localStorage.removeItem(\"token\");\n        if (token) {\n            setIsLoggedIn(false);\n        }\n        setIsReady(true);\n    }, []);\n    const signUp = async (email, password)=>{\n        setIsLoading(true);\n        try {\n            const { data } = await _components_common_axios_page__WEBPACK_IMPORTED_MODULE_1__.api.post(\"/signup\", {\n                email,\n                password\n            });\n            const { token } = data;\n            localStorage.setItem(\"token\", token);\n            setIsLoggedIn(true);\n            router.push(\"/dashboard\");\n        } catch (error) {\n            react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.error(error.response.data.message);\n        } finally{\n            setIsLoading(false);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: {\n            isReady,\n            setIsReady,\n            isLoggedIn,\n            setIsLoggedIn,\n            signIn,\n            signOut,\n            color,\n            setColor,\n            showMoadl1,\n            setShowModal1,\n            showCategory,\n            setShowCategory,\n            showIcons,\n            setShowIcons,\n            emoji,\n            setEmoji,\n            newIcon,\n            setNewIcon,\n            newIconColor,\n            setNewIconColor,\n            isContainsNumber,\n            isContainsSpecialCharacter,\n            isContainsUpperCase,\n            isLengthGreaterThan8,\n            calcaluteStrength,\n            email,\n            setEmail,\n            password,\n            setPassword,\n            name,\n            setName,\n            rePassword,\n            setRePassword,\n            passwordError,\n            setPasswordError\n        },\n        children: [\n            isReady && children,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Backdrop_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                open: !isReady,\n                sx: {\n                    color: \"fff\",\n                    zIndex: (theme)=>{\n                        theme.zIndex.drawer + 1;\n                    }\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CircularProgress_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    color: \"inherit\"\n                }, void 0, false, {\n                    fileName: \"/Users/ulaaka211/Desktop/tracker/income/src/components/provider/authprovider.js\",\n                    lineNumber: 206,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/ulaaka211/Desktop/tracker/income/src/components/provider/authprovider.js\",\n                lineNumber: 197,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ulaaka211/Desktop/tracker/income/src/components/provider/authprovider.js\",\n        lineNumber: 156,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AuthProvider, \"jtD/K9Z5FRE43BPllAvRxVz0nnU=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = AuthProvider;\nconst useAuth = ()=>{\n    _s1();\n    return (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(AuthContext);\n};\n_s1(useAuth, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nvar _c;\n$RefreshReg$(_c, \"AuthProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3Byb3ZpZGVyL2F1dGhwcm92aWRlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUVxRDtBQUNUO0FBQ007QUFDWDtBQUNFO0FBQ0c7QUFDSDtBQUNRO0FBRWpELE1BQU1VLDRCQUFjUCxvREFBYUE7QUFFMUIsTUFBTVEsZUFBZTtRQUFDLEVBQUVDLFFBQVEsRUFBRTs7SUFDdkMsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdQLCtDQUFRQSxDQUFDO0lBQzdDLE1BQU0sQ0FBQ1EsU0FBU0MsV0FBVyxHQUFHVCwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLENBQUNVLFdBQVdDLGFBQWEsR0FBR1gsK0NBQVFBLENBQUM7SUFDM0MsTUFBTSxDQUFDWSxPQUFPQyxTQUFTLEdBQUdiLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ2MsWUFBWUMsY0FBYyxHQUFHZiwrQ0FBUUEsQ0FBQztJQUM3QyxNQUFNLENBQUNnQixjQUFjQyxnQkFBZ0IsR0FBR2pCLCtDQUFRQSxDQUFDO0lBQ2pELE1BQU0sQ0FBQ2tCLFdBQVdDLGFBQWEsR0FBR25CLCtDQUFRQSxDQUFDO0lBQzNDLE1BQU0sQ0FBQ29CLE9BQU9DLFNBQVMsR0FBR3JCLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ3NCLFNBQVNDLFdBQVcsR0FBR3ZCLCtDQUFRQSxlQUFDLDhEQUFDRixrRkFBT0E7Ozs7O0lBQy9DLE1BQU0sQ0FBQzBCLGNBQWNDLGdCQUFnQixHQUFHekIsK0NBQVFBLENBQUM7SUFDakQsTUFBTSxDQUFDMEIsT0FBT0MsU0FBUyxHQUFHM0IsK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDNEIsVUFBVUMsWUFBWSxHQUFHN0IsK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDOEIsZUFBZUMsaUJBQWlCLEdBQUcvQiwrQ0FBUUEsQ0FBQztJQUNuRCxNQUFNLENBQUNnQyxNQUFNQyxRQUFRLEdBQUdqQywrQ0FBUUEs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YlU7QUFzTU4sTUFBTStELFVBQVU7O0lBQ3JCLE9BQU94RSxpREFBVUEsQ0FBQ1E7QUFDcEIsRUFBRTtJQUZXZ0UiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvcHJvdmlkZXIvYXV0aHByb3ZpZGVyLmpzPzhiNzIiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCB7IGFwaSB9IGZyb20gXCJAL2NvbXBvbmVudHMvY29tbW9uL2F4aW9zL3BhZ2VcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcbmltcG9ydCB7IHVzZUNvbnRleHQsIGNyZWF0ZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSBcInJlYWN0LXRvYXN0aWZ5XCI7XG5pbXBvcnQgeyBGYUltYWdlIH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBCYWNrZHJvcCB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgeyBDaXJjdWxhclByb2dyZXNzIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcblxuY29uc3QgQXV0aENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XG5cbmV4cG9ydCBjb25zdCBBdXRoUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IFtpc0xvZ2dlZEluLCBzZXRJc0xvZ2dlZEluXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2lzUmVhZHksIHNldElzUmVhZHldID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbY29sb3IsIHNldENvbG9yXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbc2hvd01vYWRsMSwgc2V0U2hvd01vZGFsMV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtzaG93Q2F0ZWdvcnksIHNldFNob3dDYXRlZ29yeV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtzaG93SWNvbnMsIHNldFNob3dJY29uc10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtlbW9qaSwgc2V0RW1vamldID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbbmV3SWNvbiwgc2V0TmV3SWNvbl0gPSB1c2VTdGF0ZSg8RmFJbWFnZSAvPik7XG4gIGNvbnN0IFtuZXdJY29uQ29sb3IsIHNldE5ld0ljb25Db2xvcl0gPSB1c2VTdGF0ZShcIiMwMDAwMDBcIik7XG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtwYXNzd29yZEVycm9yLCBzZXRQYXNzd29yZEVycm9yXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3JlUGFzc3dvcmQsIHNldFJlUGFzc3dvcmRdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc3QgaXNDb250YWluc051bWJlciA9IChwYXNzd29yZCkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFzc3dvcmQubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChwYXNzd29yZFtpXS5jaGFyQ29kZUF0KDApID49IDQ4ICYmIHBhc3N3b3JkW2ldLmNoYXJDb2RlQXQoMCkgPD0gNTcpIHtcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIDA7XG4gIH07XG5cbiAgY29uc3QgaXNDb250YWluc1NwZWNpYWxDaGFyYWN0ZXIgPSAocGFzc3dvcmQpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhc3N3b3JkLmxlbmd0aDsgaSsrKVxuICAgICAgaWYgKFxuICAgICAgICAocGFzc3dvcmRbaV0uY2hhckNvZGVBdCgwKSA+PSAzMyAmJiBwYXNzd29yZFtpXS5jaGFyQ29kZUF0KDApIDw9IDQ3KSB8fFxuICAgICAgICAocGFzc3dvcmRbaV0uY2hhckNvZGVBdCgwKSA+PSA1OCAmJiBwYXNzd29yZFtpXS5jaGFyQ29kZUF0KDApIDw9IDY0KSB8fFxuICAgICAgICAocGFzc3dvcmRbaV0uY2hhckNvZGVBdCgwKSA+PSA5MSAmJiBwYXNzd29yZFtpXS5jaGFyQ29kZUF0KDApIDw9IDk2KSB8fFxuICAgICAgICAocGFzc3dvcmRbaV0uY2hhckNvZGVBdCgwKSA+PSAxMjMgJiYgcGFzc3dvcmRbaV0uY2hhckNvZGVBdCgwKSA8PSAxMjYpXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgICB9XG5cbiAgICByZXR1cm4gMDtcbiAgfTtcblxuICBjb25zdCBpc0NvbnRhaW5zVXBwZXJDYXNlID0gKHBhc3N3b3JkKSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXNzd29yZC5sZW5ndGg7IGkrKylcbiAgICAgIGlmIChwYXNzd29yZFtpXS5jaGFyQ29kZUF0KDApID49IDQ4ICYmIHBhc3N3b3JkW2ldLmNoYXJDb2RlQXQoMCkgPD0gNTcpIHtcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgICB9XG5cbiAgICByZXR1cm4gMDtcbiAgfTtcblxuICBjb25zdCBpc0xlbmd0aEdyZWF0ZXJUaGFuOCA9IChwYXNzd29yZCkgPT4ge1xuICAgIHJldHVybiBwYXNzd29yZC5sZW5ndGggPj0gOCA/IDEgOiAwO1xuICB9O1xuXG4gIGNvbnN0IGNhbGNhbHV0ZVN0cmVuZ3RoID0gKHBhc3N3b3JkKSA9PiB7XG4gICAgbGV0IHN0cmVuZ3RoID0gMDtcblxuICAgIHN0cmVuZ3RoICs9IGlzQ29udGFpbnNOdW1iZXIocGFzc3dvcmQpO1xuICAgIHN0cmVuZ3RoICs9IGlzQ29udGFpbnNTcGVjaWFsQ2hhcmFjdGVyKHBhc3N3b3JkKTtcbiAgICBzdHJlbmd0aCArPSBpc0NvbnRhaW5zVXBwZXJDYXNlKHBhc3N3b3JkKTtcbiAgICBzdHJlbmd0aCArPSBpc0xlbmd0aEdyZWF0ZXJUaGFuOChwYXNzd29yZCk7XG5cbiAgICByZXR1cm4gc3RyZW5ndGg7XG4gIH07XG5cbiAgY29uc3Qgc2lnbkluID0gYXN5bmMgKGVtYWlsLCBwYXNzd29yZCkgPT4ge1xuICAgIHNldElzTG9hZGluZyh0cnVlKTtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGFwaS5wb3N0KFwiL2xvZ2luXCIsIHtcbiAgICAgICAgZW1haWwsXG4gICAgICAgIHBhc3N3b3JkLFxuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IHsgdG9rZW4gfSA9IGRhdGE7XG5cbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9rZW5cIiwgdG9rZW4pO1xuXG4gICAgICBzZXRJc0xvZ2dlZEluKHRydWUpO1xuXG4gICAgICByb3V0ZXIucHVzaChcIi9kYXNoYm9hcmRcIik7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRvYXN0LmVycm9yKGVycm9yLnJlc3BvbnNlLmRhdGEubWVzc2FnZSk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgfVxuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpO1xuXG4gICAgaWYgKHRva2VuKSB7XG4gICAgICBzZXRJc0xvZ2dlZEluKHRydWUpO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIGNvbnN0IHNpZ25PdXQgPSBhc3luYyAoKSA9PiB7XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJ0b2tlblwiKTtcblxuICAgIHNldElzTG9nZ2VkSW4oZmFsc2UpO1xuXG4gICAgcm91dGVyLnB1c2goXCIvZGFzaGJvYXJkXCIpO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0SXNSZWFkeShmYWxzZSk7XG5cbiAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwidG9rZW5cIik7XG5cbiAgICBpZiAodG9rZW4pIHtcbiAgICAgIHNldElzTG9nZ2VkSW4oZmFsc2UpO1xuICAgIH1cblxuICAgIHNldElzUmVhZHkodHJ1ZSk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBzaWduVXAgPSBhc3luYyAoZW1haWwsIHBhc3N3b3JkKSA9PiB7XG4gICAgc2V0SXNMb2FkaW5nKHRydWUpO1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXBpLnBvc3QoXCIvc2lnbnVwXCIsIHtcbiAgICAgICAgZW1haWwsXG4gICAgICAgIHBhc3N3b3JkLFxuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IHsgdG9rZW4gfSA9IGRhdGE7XG5cbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9rZW5cIiwgdG9rZW4pO1xuXG4gICAgICBzZXRJc0xvZ2dlZEluKHRydWUpO1xuXG4gICAgICByb3V0ZXIucHVzaChcIi9kYXNoYm9hcmRcIik7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRvYXN0LmVycm9yKGVycm9yLnJlc3BvbnNlLmRhdGEubWVzc2FnZSk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPEF1dGhDb250ZXh0LlByb3ZpZGVyXG4gICAgICB2YWx1ZT17e1xuICAgICAgICBpc1JlYWR5LFxuICAgICAgICBzZXRJc1JlYWR5LFxuICAgICAgICBpc0xvZ2dlZEluLFxuICAgICAgICBzZXRJc0xvZ2dlZEluLFxuICAgICAgICBzaWduSW4sXG4gICAgICAgIHNpZ25PdXQsXG4gICAgICAgIGNvbG9yLFxuICAgICAgICBzZXRDb2xvcixcbiAgICAgICAgc2hvd01vYWRsMSxcbiAgICAgICAgc2V0U2hvd01vZGFsMSxcbiAgICAgICAgc2hvd0NhdGVnb3J5LFxuICAgICAgICBzZXRTaG93Q2F0ZWdvcnksXG4gICAgICAgIHNob3dJY29ucyxcbiAgICAgICAgc2V0U2hvd0ljb25zLFxuICAgICAgICBlbW9qaSxcbiAgICAgICAgc2V0RW1vamksXG4gICAgICAgIG5ld0ljb24sXG4gICAgICAgIHNldE5ld0ljb24sXG4gICAgICAgIG5ld0ljb25Db2xvcixcbiAgICAgICAgc2V0TmV3SWNvbkNvbG9yLFxuICAgICAgICBpc0NvbnRhaW5zTnVtYmVyLFxuICAgICAgICBpc0NvbnRhaW5zU3BlY2lhbENoYXJhY3RlcixcbiAgICAgICAgaXNDb250YWluc1VwcGVyQ2FzZSxcbiAgICAgICAgaXNMZW5ndGhHcmVhdGVyVGhhbjgsXG4gICAgICAgIGNhbGNhbHV0ZVN0cmVuZ3RoLFxuICAgICAgICBlbWFpbCxcbiAgICAgICAgc2V0RW1haWwsXG4gICAgICAgIHBhc3N3b3JkLFxuICAgICAgICBzZXRQYXNzd29yZCxcbiAgICAgICAgbmFtZSxcbiAgICAgICAgc2V0TmFtZSxcbiAgICAgICAgcmVQYXNzd29yZCxcbiAgICAgICAgc2V0UmVQYXNzd29yZCxcbiAgICAgICAgcGFzc3dvcmRFcnJvcixcbiAgICAgICAgc2V0UGFzc3dvcmRFcnJvcixcbiAgICAgIH19XG4gICAgPlxuICAgICAge2lzUmVhZHkgJiYgY2hpbGRyZW59XG5cbiAgICAgIDxCYWNrZHJvcFxuICAgICAgICBvcGVuPXshaXNSZWFkeX1cbiAgICAgICAgc3g9e3tcbiAgICAgICAgICBjb2xvcjogXCJmZmZcIixcbiAgICAgICAgICB6SW5kZXg6ICh0aGVtZSkgPT4ge1xuICAgICAgICAgICAgdGhlbWUuekluZGV4LmRyYXdlciArIDE7XG4gICAgICAgICAgfSxcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPENpcmN1bGFyUHJvZ3Jlc3MgY29sb3I9XCJpbmhlcml0XCIgLz5cbiAgICAgIDwvQmFja2Ryb3A+XG4gICAgPC9BdXRoQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCB1c2VBdXRoID0gKCkgPT4ge1xuICByZXR1cm4gdXNlQ29udGV4dChBdXRoQ29udGV4dCk7XG59O1xuIl0sIm5hbWVzIjpbImFwaSIsInVzZVJvdXRlciIsInVzZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidG9hc3QiLCJGYUltYWdlIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJCYWNrZHJvcCIsIkNpcmN1bGFyUHJvZ3Jlc3MiLCJBdXRoQ29udGV4dCIsIkF1dGhQcm92aWRlciIsImNoaWxkcmVuIiwiaXNMb2dnZWRJbiIsInNldElzTG9nZ2VkSW4iLCJpc1JlYWR5Iiwic2V0SXNSZWFkeSIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsImNvbG9yIiwic2V0Q29sb3IiLCJzaG93TW9hZGwxIiwic2V0U2hvd01vZGFsMSIsInNob3dDYXRlZ29yeSIsInNldFNob3dDYXRlZ29yeSIsInNob3dJY29ucyIsInNldFNob3dJY29ucyIsImVtb2ppIiwic2V0RW1vamkiLCJuZXdJY29uIiwic2V0TmV3SWNvbiIsIm5ld0ljb25Db2xvciIsInNldE5ld0ljb25Db2xvciIsImVtYWlsIiwic2V0RW1haWwiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwicGFzc3dvcmRFcnJvciIsInNldFBhc3N3b3JkRXJyb3IiLCJuYW1lIiwic2V0TmFtZSIsInJlUGFzc3dvcmQiLCJzZXRSZVBhc3N3b3JkIiwicm91dGVyIiwiaXNDb250YWluc051bWJlciIsImkiLCJsZW5ndGgiLCJjaGFyQ29kZUF0IiwiaXNDb250YWluc1NwZWNpYWxDaGFyYWN0ZXIiLCJpc0NvbnRhaW5zVXBwZXJDYXNlIiwiaXNMZW5ndGhHcmVhdGVyVGhhbjgiLCJjYWxjYWx1dGVTdHJlbmd0aCIsInN0cmVuZ3RoIiwic2lnbkluIiwiZGF0YSIsInBvc3QiLCJ0b2tlbiIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJwdXNoIiwiZXJyb3IiLCJyZXNwb25zZSIsIm1lc3NhZ2UiLCJnZXRJdGVtIiwic2lnbk91dCIsInJlbW92ZUl0ZW0iLCJzaWduVXAiLCJQcm92aWRlciIsInZhbHVlIiwib3BlbiIsInN4IiwiekluZGV4IiwidGhlbWUiLCJkcmF3ZXIiLCJ1c2VBdXRoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/provider/authprovider.js\n"));

/***/ })

});