"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/provider/authprovider.js":
/*!*************************************************!*\
  !*** ./src/components/provider/authprovider.js ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AuthProvider: function() { return /* binding */ AuthProvider; },\n/* harmony export */   useAuth: function() { return /* binding */ useAuth; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_common_axios_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/common/axios/page */ \"(app-pages-browser)/./src/components/common/axios/page.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify */ \"(app-pages-browser)/./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n/* harmony import */ var _barrel_optimize_names_FaImage_react_icons_fa__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=FaImage!=!react-icons/fa */ \"(app-pages-browser)/./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var _barrel_optimize_names_Backdrop_mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Backdrop!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Backdrop/Backdrop.js\");\n/* harmony import */ var _barrel_optimize_names_CircularProgress_mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=CircularProgress!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/CircularProgress/CircularProgress.js\");\n/* __next_internal_client_entry_do_not_use__ AuthProvider,useAuth auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_3__.createContext)();\nconst AuthProvider = (param)=>{\n    let { children } = param;\n    _s();\n    const [isLoggedIn, setIsLoggedIn] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [isReady, setIsReady] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [color, setColor] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [showMoadl1, setShowModal1] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [showCategory, setShowCategory] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [showIcons, setShowIcons] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [emoji, setEmoji] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [newIcon, setNewIcon] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaImage_react_icons_fa__WEBPACK_IMPORTED_MODULE_5__.FaImage, {}, void 0, false, {\n        fileName: \"/Users/ulaaka211/Desktop/tracker/income/src/components/provider/authprovider.js\",\n        lineNumber: 23,\n        columnNumber: 42\n    }, undefined));\n    const [newIconColor, setNewIconColor] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"#000000\");\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [passwordError, setPasswordError] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [rePassword, setRePassword] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const isContainsNumber = (password)=>{\n        for(let i = 0; i < password.length; i++){\n            if (password[i].charCodeAt(0) >= 48 && password[i].charCodeAt(0) <= 57) {\n                return 1;\n            }\n        }\n        return 0;\n    };\n    const isContainsSpecialCharacter = (password)=>{\n        for(let i = 0; i < password.length; i++)if (password[i].charCodeAt(0) >= 33 && password[i].charCodeAt(0) <= 47 || password[i].charCodeAt(0) >= 58 && password[i].charCodeAt(0) <= 64 || password[i].charCodeAt(0) >= 91 && password[i].charCodeAt(0) <= 96 || password[i].charCodeAt(0) >= 123 && password[i].charCodeAt(0) <= 126) {\n            return 1;\n        }\n        return 0;\n    };\n    const isContainsUpperCase = (password)=>{\n        for(let i = 0; i < password.length; i++)if (password[i].charCodeAt(0) >= 48 && password[i].charCodeAt(0) <= 57) {\n            return 1;\n        }\n        return 0;\n    };\n    const isLengthGreaterThan8 = (password)=>{\n        return password.length >= 8 ? 1 : 0;\n    };\n    const calcaluteStrength = (password)=>{\n        let strength = 0;\n        strength += isContainsNumber(password);\n        strength += isContainsSpecialCharacter(password);\n        strength += isContainsUpperCase(password);\n        strength += isLengthGreaterThan8(password);\n        return strength;\n    };\n    const signIn = async (email, password)=>{\n        setIsLoading(true);\n        try {\n            const { data } = await _components_common_axios_page__WEBPACK_IMPORTED_MODULE_1__.api.post(\"/login\", {\n                email,\n                password\n            });\n            const { token } = data;\n            localStorage.setItem(\"token\", token);\n            setIsLoggedIn(true);\n            router.push(\"/dashboard\");\n        } catch (error) {\n            react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.error(error.response.data.message);\n        } finally{\n            setIsLoading(false);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const token = localStorage.getItem(\"token\");\n        if (token) {\n            setIsLoggedIn(true);\n        }\n    }, []);\n    const signUp = async (email, password)=>{\n        setIsLoading(true);\n        try {\n            const { data } = await _components_common_axios_page__WEBPACK_IMPORTED_MODULE_1__.api.post(\"signup\", {\n                email,\n                password\n            });\n            const { token } = data;\n            localStorage.setItem(\"token\", token);\n            setIsLoggedIn(true);\n            router.push(\"/dashboard\");\n        } catch (error) {\n            react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.error(error.response.data.message);\n        } finally{\n            setIsLoading(false);\n        }\n    };\n    const signOut = async ()=>{\n        localStorage.removeItem(\"token\");\n        setIsLoggedIn(false);\n        router.push(\"/dashboard\");\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        setIsReady(false);\n        const token = localStorage.removeItem(\"token\");\n        if (token) {\n            setIsLoggedIn(false);\n        }\n        setIsReady(true);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: {\n            isReady,\n            setIsReady,\n            isLoggedIn,\n            setIsLoggedIn,\n            signIn,\n            signOut,\n            color,\n            setColor,\n            showMoadl1,\n            setShowModal1,\n            showCategory,\n            setShowCategory,\n            showIcons,\n            setShowIcons,\n            emoji,\n            setEmoji,\n            newIcon,\n            setNewIcon,\n            newIconColor,\n            setNewIconColor,\n            isContainsNumber,\n            isContainsSpecialCharacter,\n            isContainsUpperCase,\n            isLengthGreaterThan8,\n            calcaluteStrength,\n            email,\n            setEmail,\n            password,\n            setPassword,\n            name,\n            setName,\n            rePassword,\n            setRePassword,\n            passwordError,\n            setPasswordError\n        },\n        children: [\n            isReady && children,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Backdrop_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                open: !isReady,\n                sx: {\n                    color: \"fff\",\n                    zIndex: (theme)=>{\n                        theme.zIndex.drawer + 1;\n                    }\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CircularProgress_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    color: \"inherit\"\n                }, void 0, false, {\n                    fileName: \"/Users/ulaaka211/Desktop/tracker/income/src/components/provider/authprovider.js\",\n                    lineNumber: 206,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/ulaaka211/Desktop/tracker/income/src/components/provider/authprovider.js\",\n                lineNumber: 197,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ulaaka211/Desktop/tracker/income/src/components/provider/authprovider.js\",\n        lineNumber: 156,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AuthProvider, \"jtD/K9Z5FRE43BPllAvRxVz0nnU=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = AuthProvider;\nconst useAuth = ()=>{\n    _s1();\n    return (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(AuthContext);\n};\n_s1(useAuth, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nvar _c;\n$RefreshReg$(_c, \"AuthProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3Byb3ZpZGVyL2F1dGhwcm92aWRlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUVxRDtBQUNUO0FBQ1c7QUFDaEI7QUFDRTtBQUNHO0FBQ0g7QUFDUTtBQUVqRCxNQUFNVyw0QkFBY1Isb0RBQWFBO0FBRTFCLE1BQU1TLGVBQWU7UUFBQyxFQUFFQyxRQUFRLEVBQUU7O0lBQ3ZDLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHUCwrQ0FBUUEsQ0FBQztJQUM3QyxNQUFNLENBQUNRLFNBQVNDLFdBQVcsR0FBR1QsK0NBQVFBLENBQUM7SUFDdkMsTUFBTSxDQUFDVSxXQUFXQyxhQUFhLEdBQUdYLCtDQUFRQSxDQUFDO0lBQzNDLE1BQU0sQ0FBQ1ksT0FBT0MsU0FBUyxHQUFHYiwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNjLFlBQVlDLGNBQWMsR0FBR2YsK0NBQVFBLENBQUM7SUFDN0MsTUFBTSxDQUFDZ0IsY0FBY0MsZ0JBQWdCLEdBQUdqQiwrQ0FBUUEsQ0FBQztJQUNqRCxNQUFNLENBQUNrQixXQUFXQyxhQUFhLEdBQUduQiwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNLENBQUNvQixPQUFPQyxTQUFTLEdBQUdyQiwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNzQixTQUFTQyxXQUFXLEdBQUd2QiwrQ0FBUUEsZUFBQyw4REFBQ0Ysa0ZBQU9BOzs7OztJQUMvQyxNQUFNLENBQUMwQixjQUFjQyxnQkFBZ0IsR0FBR3pCLCtDQUFRQSxDQUFDO0lBQ2pELE1BQU0sQ0FBQzBCLE9BQU9DLFNBQVMsR0FBRzNCLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQzRCLFVBQVVDLFlBQVksR0FBRzdCLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQzhCLGVBQWVDLGlCQUFpQixHQUFHL0IsK0NBQVFBLENBQUM7SUFDbkQsTUFBTSxDQUFDZ0MsTUFBTUMsUUFBUSxHQUFHakMsK0NBQVFB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QmJXO0FBc01OLE1BQU0rRCxVQUFVOztJQUNyQixPQUFPekUsaURBQVVBLENBQUNTO0FBQ3BCLEVBQUU7SUFGV2dFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3Byb3ZpZGVyL2F1dGhwcm92aWRlci5qcz84YjcyIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgeyBhcGkgfSBmcm9tIFwiQC9jb21wb25lbnRzL2NvbW1vbi9heGlvcy9wYWdlXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XG5pbXBvcnQgeyB1c2VDb250ZXh0LCBjcmVhdGVDb250ZXh0LCB1c2UgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSBcInJlYWN0LXRvYXN0aWZ5XCI7XG5pbXBvcnQgeyBGYUltYWdlIH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBCYWNrZHJvcCB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgeyBDaXJjdWxhclByb2dyZXNzIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcblxuY29uc3QgQXV0aENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XG5cbmV4cG9ydCBjb25zdCBBdXRoUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IFtpc0xvZ2dlZEluLCBzZXRJc0xvZ2dlZEluXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2lzUmVhZHksIHNldElzUmVhZHldID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbY29sb3IsIHNldENvbG9yXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbc2hvd01vYWRsMSwgc2V0U2hvd01vZGFsMV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtzaG93Q2F0ZWdvcnksIHNldFNob3dDYXRlZ29yeV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtzaG93SWNvbnMsIHNldFNob3dJY29uc10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtlbW9qaSwgc2V0RW1vamldID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbbmV3SWNvbiwgc2V0TmV3SWNvbl0gPSB1c2VTdGF0ZSg8RmFJbWFnZSAvPik7XG4gIGNvbnN0IFtuZXdJY29uQ29sb3IsIHNldE5ld0ljb25Db2xvcl0gPSB1c2VTdGF0ZShcIiMwMDAwMDBcIik7XG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtwYXNzd29yZEVycm9yLCBzZXRQYXNzd29yZEVycm9yXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3JlUGFzc3dvcmQsIHNldFJlUGFzc3dvcmRdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc3QgaXNDb250YWluc051bWJlciA9IChwYXNzd29yZCkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFzc3dvcmQubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChwYXNzd29yZFtpXS5jaGFyQ29kZUF0KDApID49IDQ4ICYmIHBhc3N3b3JkW2ldLmNoYXJDb2RlQXQoMCkgPD0gNTcpIHtcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIDA7XG4gIH07XG5cbiAgY29uc3QgaXNDb250YWluc1NwZWNpYWxDaGFyYWN0ZXIgPSAocGFzc3dvcmQpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhc3N3b3JkLmxlbmd0aDsgaSsrKVxuICAgICAgaWYgKFxuICAgICAgICAocGFzc3dvcmRbaV0uY2hhckNvZGVBdCgwKSA+PSAzMyAmJiBwYXNzd29yZFtpXS5jaGFyQ29kZUF0KDApIDw9IDQ3KSB8fFxuICAgICAgICAocGFzc3dvcmRbaV0uY2hhckNvZGVBdCgwKSA+PSA1OCAmJiBwYXNzd29yZFtpXS5jaGFyQ29kZUF0KDApIDw9IDY0KSB8fFxuICAgICAgICAocGFzc3dvcmRbaV0uY2hhckNvZGVBdCgwKSA+PSA5MSAmJiBwYXNzd29yZFtpXS5jaGFyQ29kZUF0KDApIDw9IDk2KSB8fFxuICAgICAgICAocGFzc3dvcmRbaV0uY2hhckNvZGVBdCgwKSA+PSAxMjMgJiYgcGFzc3dvcmRbaV0uY2hhckNvZGVBdCgwKSA8PSAxMjYpXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgICB9XG5cbiAgICByZXR1cm4gMDtcbiAgfTtcblxuICBjb25zdCBpc0NvbnRhaW5zVXBwZXJDYXNlID0gKHBhc3N3b3JkKSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXNzd29yZC5sZW5ndGg7IGkrKylcbiAgICAgIGlmIChwYXNzd29yZFtpXS5jaGFyQ29kZUF0KDApID49IDQ4ICYmIHBhc3N3b3JkW2ldLmNoYXJDb2RlQXQoMCkgPD0gNTcpIHtcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgICB9XG5cbiAgICByZXR1cm4gMDtcbiAgfTtcblxuICBjb25zdCBpc0xlbmd0aEdyZWF0ZXJUaGFuOCA9IChwYXNzd29yZCkgPT4ge1xuICAgIHJldHVybiBwYXNzd29yZC5sZW5ndGggPj0gOCA/IDEgOiAwO1xuICB9O1xuXG4gIGNvbnN0IGNhbGNhbHV0ZVN0cmVuZ3RoID0gKHBhc3N3b3JkKSA9PiB7XG4gICAgbGV0IHN0cmVuZ3RoID0gMDtcblxuICAgIHN0cmVuZ3RoICs9IGlzQ29udGFpbnNOdW1iZXIocGFzc3dvcmQpO1xuICAgIHN0cmVuZ3RoICs9IGlzQ29udGFpbnNTcGVjaWFsQ2hhcmFjdGVyKHBhc3N3b3JkKTtcbiAgICBzdHJlbmd0aCArPSBpc0NvbnRhaW5zVXBwZXJDYXNlKHBhc3N3b3JkKTtcbiAgICBzdHJlbmd0aCArPSBpc0xlbmd0aEdyZWF0ZXJUaGFuOChwYXNzd29yZCk7XG5cbiAgICByZXR1cm4gc3RyZW5ndGg7XG4gIH07XG5cbiAgY29uc3Qgc2lnbkluID0gYXN5bmMgKGVtYWlsLCBwYXNzd29yZCkgPT4ge1xuICAgIHNldElzTG9hZGluZyh0cnVlKTtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGFwaS5wb3N0KFwiL2xvZ2luXCIsIHtcbiAgICAgICAgZW1haWwsXG4gICAgICAgIHBhc3N3b3JkLFxuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IHsgdG9rZW4gfSA9IGRhdGE7XG5cbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9rZW5cIiwgdG9rZW4pO1xuXG4gICAgICBzZXRJc0xvZ2dlZEluKHRydWUpO1xuXG4gICAgICByb3V0ZXIucHVzaChcIi9kYXNoYm9hcmRcIik7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRvYXN0LmVycm9yKGVycm9yLnJlc3BvbnNlLmRhdGEubWVzc2FnZSk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgfVxuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpO1xuXG4gICAgaWYgKHRva2VuKSB7XG4gICAgICBzZXRJc0xvZ2dlZEluKHRydWUpO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIGNvbnN0IHNpZ25VcCA9IGFzeW5jIChlbWFpbCwgcGFzc3dvcmQpID0+IHtcbiAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBhcGkucG9zdChcInNpZ251cFwiLCB7XG4gICAgICAgIGVtYWlsLFxuICAgICAgICBwYXNzd29yZCxcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCB7IHRva2VuIH0gPSBkYXRhO1xuXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRva2VuXCIsIHRva2VuKTtcblxuICAgICAgc2V0SXNMb2dnZWRJbih0cnVlKTtcblxuICAgICAgcm91dGVyLnB1c2goXCIvZGFzaGJvYXJkXCIpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0b2FzdC5lcnJvcihlcnJvci5yZXNwb25zZS5kYXRhLm1lc3NhZ2UpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBzaWduT3V0ID0gYXN5bmMgKCkgPT4ge1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwidG9rZW5cIik7XG5cbiAgICBzZXRJc0xvZ2dlZEluKGZhbHNlKTtcblxuICAgIHJvdXRlci5wdXNoKFwiL2Rhc2hib2FyZFwiKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldElzUmVhZHkoZmFsc2UpO1xuXG4gICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcInRva2VuXCIpO1xuXG4gICAgaWYgKHRva2VuKSB7XG4gICAgICBzZXRJc0xvZ2dlZEluKGZhbHNlKTtcbiAgICB9XG5cbiAgICBzZXRJc1JlYWR5KHRydWUpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8QXV0aENvbnRleHQuUHJvdmlkZXJcbiAgICAgIHZhbHVlPXt7XG4gICAgICAgIGlzUmVhZHksXG4gICAgICAgIHNldElzUmVhZHksXG4gICAgICAgIGlzTG9nZ2VkSW4sXG4gICAgICAgIHNldElzTG9nZ2VkSW4sXG4gICAgICAgIHNpZ25JbixcbiAgICAgICAgc2lnbk91dCxcbiAgICAgICAgY29sb3IsXG4gICAgICAgIHNldENvbG9yLFxuICAgICAgICBzaG93TW9hZGwxLFxuICAgICAgICBzZXRTaG93TW9kYWwxLFxuICAgICAgICBzaG93Q2F0ZWdvcnksXG4gICAgICAgIHNldFNob3dDYXRlZ29yeSxcbiAgICAgICAgc2hvd0ljb25zLFxuICAgICAgICBzZXRTaG93SWNvbnMsXG4gICAgICAgIGVtb2ppLFxuICAgICAgICBzZXRFbW9qaSxcbiAgICAgICAgbmV3SWNvbixcbiAgICAgICAgc2V0TmV3SWNvbixcbiAgICAgICAgbmV3SWNvbkNvbG9yLFxuICAgICAgICBzZXROZXdJY29uQ29sb3IsXG4gICAgICAgIGlzQ29udGFpbnNOdW1iZXIsXG4gICAgICAgIGlzQ29udGFpbnNTcGVjaWFsQ2hhcmFjdGVyLFxuICAgICAgICBpc0NvbnRhaW5zVXBwZXJDYXNlLFxuICAgICAgICBpc0xlbmd0aEdyZWF0ZXJUaGFuOCxcbiAgICAgICAgY2FsY2FsdXRlU3RyZW5ndGgsXG4gICAgICAgIGVtYWlsLFxuICAgICAgICBzZXRFbWFpbCxcbiAgICAgICAgcGFzc3dvcmQsXG4gICAgICAgIHNldFBhc3N3b3JkLFxuICAgICAgICBuYW1lLFxuICAgICAgICBzZXROYW1lLFxuICAgICAgICByZVBhc3N3b3JkLFxuICAgICAgICBzZXRSZVBhc3N3b3JkLFxuICAgICAgICBwYXNzd29yZEVycm9yLFxuICAgICAgICBzZXRQYXNzd29yZEVycm9yLFxuICAgICAgfX1cbiAgICA+XG4gICAgICB7aXNSZWFkeSAmJiBjaGlsZHJlbn1cblxuICAgICAgPEJhY2tkcm9wXG4gICAgICAgIG9wZW49eyFpc1JlYWR5fVxuICAgICAgICBzeD17e1xuICAgICAgICAgIGNvbG9yOiBcImZmZlwiLFxuICAgICAgICAgIHpJbmRleDogKHRoZW1lKSA9PiB7XG4gICAgICAgICAgICB0aGVtZS56SW5kZXguZHJhd2VyICsgMTtcbiAgICAgICAgICB9LFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8Q2lyY3VsYXJQcm9ncmVzcyBjb2xvcj1cImluaGVyaXRcIiAvPlxuICAgICAgPC9CYWNrZHJvcD5cbiAgICA8L0F1dGhDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IHVzZUF1dGggPSAoKSA9PiB7XG4gIHJldHVybiB1c2VDb250ZXh0KEF1dGhDb250ZXh0KTtcbn07XG4iXSwibmFtZXMiOlsiYXBpIiwidXNlUm91dGVyIiwidXNlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2UiLCJ0b2FzdCIsIkZhSW1hZ2UiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkJhY2tkcm9wIiwiQ2lyY3VsYXJQcm9ncmVzcyIsIkF1dGhDb250ZXh0IiwiQXV0aFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJpc0xvZ2dlZEluIiwic2V0SXNMb2dnZWRJbiIsImlzUmVhZHkiLCJzZXRJc1JlYWR5IiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiY29sb3IiLCJzZXRDb2xvciIsInNob3dNb2FkbDEiLCJzZXRTaG93TW9kYWwxIiwic2hvd0NhdGVnb3J5Iiwic2V0U2hvd0NhdGVnb3J5Iiwic2hvd0ljb25zIiwic2V0U2hvd0ljb25zIiwiZW1vamkiLCJzZXRFbW9qaSIsIm5ld0ljb24iLCJzZXROZXdJY29uIiwibmV3SWNvbkNvbG9yIiwic2V0TmV3SWNvbkNvbG9yIiwiZW1haWwiLCJzZXRFbWFpbCIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJwYXNzd29yZEVycm9yIiwic2V0UGFzc3dvcmRFcnJvciIsIm5hbWUiLCJzZXROYW1lIiwicmVQYXNzd29yZCIsInNldFJlUGFzc3dvcmQiLCJyb3V0ZXIiLCJpc0NvbnRhaW5zTnVtYmVyIiwiaSIsImxlbmd0aCIsImNoYXJDb2RlQXQiLCJpc0NvbnRhaW5zU3BlY2lhbENoYXJhY3RlciIsImlzQ29udGFpbnNVcHBlckNhc2UiLCJpc0xlbmd0aEdyZWF0ZXJUaGFuOCIsImNhbGNhbHV0ZVN0cmVuZ3RoIiwic3RyZW5ndGgiLCJzaWduSW4iLCJkYXRhIiwicG9zdCIsInRva2VuIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsInB1c2giLCJlcnJvciIsInJlc3BvbnNlIiwibWVzc2FnZSIsImdldEl0ZW0iLCJzaWduVXAiLCJzaWduT3V0IiwicmVtb3ZlSXRlbSIsIlByb3ZpZGVyIiwidmFsdWUiLCJvcGVuIiwic3giLCJ6SW5kZXgiLCJ0aGVtZSIsImRyYXdlciIsInVzZUF1dGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/provider/authprovider.js\n"));

/***/ })

});