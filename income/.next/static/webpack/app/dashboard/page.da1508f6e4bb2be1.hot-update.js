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

/***/ "(app-pages-browser)/./src/app/globals.css":
/*!*****************************!*\
  !*** ./src/app/globals.css ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"e04595e67b56\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZ2xvYmFscy5jc3M/MTE3NiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcImUwNDU5NWU2N2I1NlwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/components/provider/authprovider.js":
/*!*************************************************!*\
  !*** ./src/components/provider/authprovider.js ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AuthProvider: function() { return /* binding */ AuthProvider; },\n/* harmony export */   useAuth: function() { return /* binding */ useAuth; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_common_axios_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/common/axios/page */ \"(app-pages-browser)/./src/components/common/axios/page.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify */ \"(app-pages-browser)/./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n/* harmony import */ var _barrel_optimize_names_FaImage_react_icons_fa__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=FaImage!=!react-icons/fa */ \"(app-pages-browser)/./node_modules/react-icons/fa/index.esm.js\");\n/* __next_internal_client_entry_do_not_use__ AuthProvider,useAuth auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\n\n\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_3__.createContext)();\nconst AuthProvider = (param)=>{\n    let { children } = param;\n    _s();\n    const [isLoggedIn, setIsLoggedIn] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [isReady, setIsReady] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [color, setColor] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [showMoadl1, setShowModal1] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [showCategory, setShowCategory] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [showIcons, setShowIcons] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [emoji, setEmoji] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [newIcon, setNewIcon] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaImage_react_icons_fa__WEBPACK_IMPORTED_MODULE_5__.FaImage, {}, void 0, false, {\n        fileName: \"/Users/ulaaka211/Desktop/tracker/income/src/components/provider/authprovider.js\",\n        lineNumber: 21,\n        columnNumber: 42\n    }, undefined));\n    const [newIconColor, setNewIconColor] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"#000000\");\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [passwordError, setPasswordError] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [rePassword, setRePassword] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const isContainsNumber = (password)=>{\n        for(let i = 0; i < password.length; i++){\n            if (password[i].charCodeAt(0) >= 48 && password[i].charCodeAt(0) <= 57) {\n                return 1;\n            }\n        }\n        return 0;\n    };\n    const isContainsSpecialCharacter = (password)=>{\n        for(let i = 0; i < password.length; i++)if (password[i].charCodeAt(0) >= 33 && password[i].charCodeAt(0) <= 47 || password[i].charCodeAt(0) >= 58 && password[i].charCodeAt(0) <= 64 || password[i].charCodeAt(0) >= 91 && password[i].charCodeAt(0) <= 96 || password[i].charCodeAt(0) >= 123 && password[i].charCodeAt(0) <= 126) {\n            return 1;\n        }\n        return 0;\n    };\n    const isContainsUpperCase = (password)=>{\n        for(let i = 0; i < password.length; i++)if (password[i].charCodeAt(0) >= 48 && password[i].charCodeAt(0) <= 57) {\n            return 1;\n        }\n        return 0;\n    };\n    const isLengthGreaterThan8 = (password)=>{\n        return password.length >= 8 ? 1 : 0;\n    };\n    const calcaluteStrength = (password)=>{\n        let strength = 0;\n        strength += isContainsNumber(password);\n        strength += isContainsSpecialCharacter(password);\n        strength += isContainsUpperCase(password);\n        strength += isLengthGreaterThan8(password);\n        return strength;\n    };\n    const signIn = async (email, password)=>{\n        setIsLoading(true);\n        try {\n            const { data } = await _components_common_axios_page__WEBPACK_IMPORTED_MODULE_1__.api.post(\"/login\", {\n                email,\n                password\n            });\n            const { token } = data;\n            localStorage.setItem(\"token\", token);\n            setIsLoggedIn(true);\n            router.push(\"/dashboard\");\n        } catch (error) {\n            react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.error(error.response.data.message);\n        } finally{\n            setIsLoading(false);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const token = localStorage.getItem(\"token\");\n        if (token) {\n            setIsLoggedIn(true);\n        }\n    }, [\n        signIn\n    ]);\n    const signOut = async ()=>{\n        localStorage.removeItem(\"token\");\n        setIsLoggedIn(false);\n        router.push(\"/dashboard\");\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        setIsReady(false);\n        const token = localStorage.removeItem(\"token\");\n        if (token) {\n            setIsLoggedIn(false);\n        }\n        setIsReady(true);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: {\n            isReady,\n            setIsReady,\n            isLoggedIn,\n            setIsLoggedIn,\n            signIn,\n            signOut,\n            color,\n            setColor,\n            showMoadl1,\n            setShowModal1,\n            showCategory,\n            setShowCategory,\n            showIcons,\n            setShowIcons,\n            emoji,\n            setEmoji,\n            newIcon,\n            setNewIcon,\n            newIconColor,\n            setNewIconColor,\n            isContainsNumber,\n            isContainsSpecialCharacter,\n            isContainsUpperCase,\n            isLengthGreaterThan8,\n            calcaluteStrength,\n            email,\n            setEmail,\n            password,\n            setPassword,\n            name,\n            setName,\n            rePassword,\n            setRePassword,\n            passwordError,\n            setPasswordError\n        },\n        children: isReady && children\n    }, void 0, false, {\n        fileName: \"/Users/ulaaka211/Desktop/tracker/income/src/components/provider/authprovider.js\",\n        lineNumber: 131,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AuthProvider, \"jtD/K9Z5FRE43BPllAvRxVz0nnU=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = AuthProvider;\nconst useAuth = ()=>{\n    _s1();\n    return (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(AuthContext);\n};\n_s1(useAuth, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nvar _c;\n$RefreshReg$(_c, \"AuthProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3Byb3ZpZGVyL2F1dGhwcm92aWRlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFFcUQ7QUFDVDtBQUNNO0FBQ1g7QUFDRTtBQUNHO0FBRTVDLE1BQU1RLDRCQUFjTCxvREFBYUE7QUFFMUIsTUFBTU0sZUFBZTtRQUFDLEVBQUVDLFFBQVEsRUFBRTs7SUFDdkMsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdMLCtDQUFRQSxDQUFDO0lBQzdDLE1BQU0sQ0FBQ00sU0FBU0MsV0FBVyxHQUFHUCwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLENBQUNRLFdBQVdDLGFBQWEsR0FBR1QsK0NBQVFBLENBQUM7SUFDM0MsTUFBTSxDQUFDVSxPQUFPQyxTQUFTLEdBQUdYLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ1ksWUFBWUMsY0FBYyxHQUFHYiwrQ0FBUUEsQ0FBQztJQUM3QyxNQUFNLENBQUNjLGNBQWNDLGdCQUFnQixHQUFHZiwrQ0FBUUEsQ0FBQztJQUNqRCxNQUFNLENBQUNnQixXQUFXQyxhQUFhLEdBQUdqQiwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNLENBQUNrQixPQUFPQyxTQUFTLEdBQUduQiwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNvQixTQUFTQyxXQUFXLEdBQUdyQiwrQ0FBUUEsZUFBQyw4REFBQ0Ysa0ZBQU9BOzs7OztJQUMvQyxNQUFNLENBQUN3QixjQUFjQyxnQkFBZ0IsR0FBR3ZCLCtDQUFRQSxDQUFDO0lBQ2pELE1BQU0sQ0FBQ3dCLE9BQU9DLFNBQVMsR0FBR3pCLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQzBCLFVBQVVDLFlBQVksR0FBRzNCLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQzRCLGVBQWVDLGlCQUFpQixHQUFHN0IsK0NBQVFBLENBQUM7SUFDbkQsTUFBTSxDQUFDOEIsTUFBTUMsUUFBUSxHQUFHL0IsK0NBQVFBLENBQUM7SUFDakMsTUFB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QUFjO1FBQ2hCO1FBRUFFLFdBQVc7SUFDYixHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ04sWUFBWXdELFFBQVE7UUFDbkJDLE9BQU87WUFDTHBEO1lBQ0FDO1lBQ0FIO1lBQ0FDO1lBQ0F1QztZQUNBVztZQUNBN0M7WUFDQUM7WUFDQUM7WUFDQUM7WUFDQUM7WUFDQUM7WUFDQUM7WUFDQUM7WUFDQUM7WUFDQUM7WUFDQUM7WUFDQUM7WUFDQUM7WUFDQUM7WUFDQVk7WUFDQUk7WUFDQUM7WUFDQUM7WUFDQUM7WUFDQWxCO1lBQ0FDO1lBQ0FDO1lBQ0FDO1lBQ0FHO1lBQ0FDO1lBQ0FDO1lBQ0FDO1lBQ0FMO1lBQ0FDO1FBQ0Y7a0JBRUN2QixXQUFXSDs7Ozs7O0FBR2xCLEVBQUU7R0FqS1dEOztRQWlCSVIsc0RBQVNBOzs7S0FqQmJRO0FBbUtOLE1BQU15RCxVQUFVOztJQUNyQixPQUFPaEUsaURBQVVBLENBQUNNO0FBQ3BCLEVBQUU7SUFGVzBEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3Byb3ZpZGVyL2F1dGhwcm92aWRlci5qcz84YjcyIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgeyBhcGkgfSBmcm9tIFwiQC9jb21wb25lbnRzL2NvbW1vbi9heGlvcy9wYWdlXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XG5pbXBvcnQgeyB1c2VDb250ZXh0LCBjcmVhdGVDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gXCJyZWFjdC10b2FzdGlmeVwiO1xuaW1wb3J0IHsgRmFJbWFnZSB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBBdXRoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcblxuZXhwb3J0IGNvbnN0IEF1dGhQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgW2lzTG9nZ2VkSW4sIHNldElzTG9nZ2VkSW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaXNSZWFkeSwgc2V0SXNSZWFkeV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtjb2xvciwgc2V0Q29sb3JdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtzaG93TW9hZGwxLCBzZXRTaG93TW9kYWwxXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3Nob3dDYXRlZ29yeSwgc2V0U2hvd0NhdGVnb3J5XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3Nob3dJY29ucywgc2V0U2hvd0ljb25zXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2Vtb2ppLCBzZXRFbW9qaV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtuZXdJY29uLCBzZXROZXdJY29uXSA9IHVzZVN0YXRlKDxGYUltYWdlIC8+KTtcbiAgY29uc3QgW25ld0ljb25Db2xvciwgc2V0TmV3SWNvbkNvbG9yXSA9IHVzZVN0YXRlKFwiIzAwMDAwMFwiKTtcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3Bhc3N3b3JkRXJyb3IsIHNldFBhc3N3b3JkRXJyb3JdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbcmVQYXNzd29yZCwgc2V0UmVQYXNzd29yZF0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBjb25zdCBpc0NvbnRhaW5zTnVtYmVyID0gKHBhc3N3b3JkKSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXNzd29yZC5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHBhc3N3b3JkW2ldLmNoYXJDb2RlQXQoMCkgPj0gNDggJiYgcGFzc3dvcmRbaV0uY2hhckNvZGVBdCgwKSA8PSA1Nykge1xuICAgICAgICByZXR1cm4gMTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gMDtcbiAgfTtcblxuICBjb25zdCBpc0NvbnRhaW5zU3BlY2lhbENoYXJhY3RlciA9IChwYXNzd29yZCkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFzc3dvcmQubGVuZ3RoOyBpKyspXG4gICAgICBpZiAoXG4gICAgICAgIChwYXNzd29yZFtpXS5jaGFyQ29kZUF0KDApID49IDMzICYmIHBhc3N3b3JkW2ldLmNoYXJDb2RlQXQoMCkgPD0gNDcpIHx8XG4gICAgICAgIChwYXNzd29yZFtpXS5jaGFyQ29kZUF0KDApID49IDU4ICYmIHBhc3N3b3JkW2ldLmNoYXJDb2RlQXQoMCkgPD0gNjQpIHx8XG4gICAgICAgIChwYXNzd29yZFtpXS5jaGFyQ29kZUF0KDApID49IDkxICYmIHBhc3N3b3JkW2ldLmNoYXJDb2RlQXQoMCkgPD0gOTYpIHx8XG4gICAgICAgIChwYXNzd29yZFtpXS5jaGFyQ29kZUF0KDApID49IDEyMyAmJiBwYXNzd29yZFtpXS5jaGFyQ29kZUF0KDApIDw9IDEyNilcbiAgICAgICkge1xuICAgICAgICByZXR1cm4gMTtcbiAgICAgIH1cblxuICAgIHJldHVybiAwO1xuICB9O1xuXG4gIGNvbnN0IGlzQ29udGFpbnNVcHBlckNhc2UgPSAocGFzc3dvcmQpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhc3N3b3JkLmxlbmd0aDsgaSsrKVxuICAgICAgaWYgKHBhc3N3b3JkW2ldLmNoYXJDb2RlQXQoMCkgPj0gNDggJiYgcGFzc3dvcmRbaV0uY2hhckNvZGVBdCgwKSA8PSA1Nykge1xuICAgICAgICByZXR1cm4gMTtcbiAgICAgIH1cblxuICAgIHJldHVybiAwO1xuICB9O1xuXG4gIGNvbnN0IGlzTGVuZ3RoR3JlYXRlclRoYW44ID0gKHBhc3N3b3JkKSA9PiB7XG4gICAgcmV0dXJuIHBhc3N3b3JkLmxlbmd0aCA+PSA4ID8gMSA6IDA7XG4gIH07XG5cbiAgY29uc3QgY2FsY2FsdXRlU3RyZW5ndGggPSAocGFzc3dvcmQpID0+IHtcbiAgICBsZXQgc3RyZW5ndGggPSAwO1xuXG4gICAgc3RyZW5ndGggKz0gaXNDb250YWluc051bWJlcihwYXNzd29yZCk7XG4gICAgc3RyZW5ndGggKz0gaXNDb250YWluc1NwZWNpYWxDaGFyYWN0ZXIocGFzc3dvcmQpO1xuICAgIHN0cmVuZ3RoICs9IGlzQ29udGFpbnNVcHBlckNhc2UocGFzc3dvcmQpO1xuICAgIHN0cmVuZ3RoICs9IGlzTGVuZ3RoR3JlYXRlclRoYW44KHBhc3N3b3JkKTtcblxuICAgIHJldHVybiBzdHJlbmd0aDtcbiAgfTtcblxuICBjb25zdCBzaWduSW4gPSBhc3luYyAoZW1haWwsIHBhc3N3b3JkKSA9PiB7XG4gICAgc2V0SXNMb2FkaW5nKHRydWUpO1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXBpLnBvc3QoXCIvbG9naW5cIiwge1xuICAgICAgICBlbWFpbCxcbiAgICAgICAgcGFzc3dvcmQsXG4gICAgICB9KTtcblxuICAgICAgY29uc3QgeyB0b2tlbiB9ID0gZGF0YTtcblxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b2tlblwiLCB0b2tlbik7XG5cbiAgICAgIHNldElzTG9nZ2VkSW4odHJ1ZSk7XG5cbiAgICAgIHJvdXRlci5wdXNoKFwiL2Rhc2hib2FyZFwiKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdG9hc3QuZXJyb3IoZXJyb3IucmVzcG9uc2UuZGF0YS5tZXNzYWdlKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICB9XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIik7XG5cbiAgICBpZiAodG9rZW4pIHtcbiAgICAgIHNldElzTG9nZ2VkSW4odHJ1ZSk7XG4gICAgfVxuICB9LCBbc2lnbkluXSk7XG5cbiAgY29uc3Qgc2lnbk91dCA9IGFzeW5jICgpID0+IHtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcInRva2VuXCIpO1xuXG4gICAgc2V0SXNMb2dnZWRJbihmYWxzZSk7XG5cbiAgICByb3V0ZXIucHVzaChcIi9kYXNoYm9hcmRcIik7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRJc1JlYWR5KGZhbHNlKTtcblxuICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJ0b2tlblwiKTtcblxuICAgIGlmICh0b2tlbikge1xuICAgICAgc2V0SXNMb2dnZWRJbihmYWxzZSk7XG4gICAgfVxuXG4gICAgc2V0SXNSZWFkeSh0cnVlKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPEF1dGhDb250ZXh0LlByb3ZpZGVyXG4gICAgICB2YWx1ZT17e1xuICAgICAgICBpc1JlYWR5LFxuICAgICAgICBzZXRJc1JlYWR5LFxuICAgICAgICBpc0xvZ2dlZEluLFxuICAgICAgICBzZXRJc0xvZ2dlZEluLFxuICAgICAgICBzaWduSW4sXG4gICAgICAgIHNpZ25PdXQsXG4gICAgICAgIGNvbG9yLFxuICAgICAgICBzZXRDb2xvcixcbiAgICAgICAgc2hvd01vYWRsMSxcbiAgICAgICAgc2V0U2hvd01vZGFsMSxcbiAgICAgICAgc2hvd0NhdGVnb3J5LFxuICAgICAgICBzZXRTaG93Q2F0ZWdvcnksXG4gICAgICAgIHNob3dJY29ucyxcbiAgICAgICAgc2V0U2hvd0ljb25zLFxuICAgICAgICBlbW9qaSxcbiAgICAgICAgc2V0RW1vamksXG4gICAgICAgIG5ld0ljb24sXG4gICAgICAgIHNldE5ld0ljb24sXG4gICAgICAgIG5ld0ljb25Db2xvcixcbiAgICAgICAgc2V0TmV3SWNvbkNvbG9yLFxuICAgICAgICBpc0NvbnRhaW5zTnVtYmVyLFxuICAgICAgICBpc0NvbnRhaW5zU3BlY2lhbENoYXJhY3RlcixcbiAgICAgICAgaXNDb250YWluc1VwcGVyQ2FzZSxcbiAgICAgICAgaXNMZW5ndGhHcmVhdGVyVGhhbjgsXG4gICAgICAgIGNhbGNhbHV0ZVN0cmVuZ3RoLFxuICAgICAgICBlbWFpbCxcbiAgICAgICAgc2V0RW1haWwsXG4gICAgICAgIHBhc3N3b3JkLFxuICAgICAgICBzZXRQYXNzd29yZCxcbiAgICAgICAgbmFtZSxcbiAgICAgICAgc2V0TmFtZSxcbiAgICAgICAgcmVQYXNzd29yZCxcbiAgICAgICAgc2V0UmVQYXNzd29yZCxcbiAgICAgICAgcGFzc3dvcmRFcnJvcixcbiAgICAgICAgc2V0UGFzc3dvcmRFcnJvcixcbiAgICAgIH19XG4gICAgPlxuICAgICAge2lzUmVhZHkgJiYgY2hpbGRyZW59XG4gICAgPC9BdXRoQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCB1c2VBdXRoID0gKCkgPT4ge1xuICByZXR1cm4gdXNlQ29udGV4dChBdXRoQ29udGV4dCk7XG59O1xuIl0sIm5hbWVzIjpbImFwaSIsInVzZVJvdXRlciIsInVzZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidG9hc3QiLCJGYUltYWdlIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJBdXRoQ29udGV4dCIsIkF1dGhQcm92aWRlciIsImNoaWxkcmVuIiwiaXNMb2dnZWRJbiIsInNldElzTG9nZ2VkSW4iLCJpc1JlYWR5Iiwic2V0SXNSZWFkeSIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsImNvbG9yIiwic2V0Q29sb3IiLCJzaG93TW9hZGwxIiwic2V0U2hvd01vZGFsMSIsInNob3dDYXRlZ29yeSIsInNldFNob3dDYXRlZ29yeSIsInNob3dJY29ucyIsInNldFNob3dJY29ucyIsImVtb2ppIiwic2V0RW1vamkiLCJuZXdJY29uIiwic2V0TmV3SWNvbiIsIm5ld0ljb25Db2xvciIsInNldE5ld0ljb25Db2xvciIsImVtYWlsIiwic2V0RW1haWwiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwicGFzc3dvcmRFcnJvciIsInNldFBhc3N3b3JkRXJyb3IiLCJuYW1lIiwic2V0TmFtZSIsInJlUGFzc3dvcmQiLCJzZXRSZVBhc3N3b3JkIiwicm91dGVyIiwiaXNDb250YWluc051bWJlciIsImkiLCJsZW5ndGgiLCJjaGFyQ29kZUF0IiwiaXNDb250YWluc1NwZWNpYWxDaGFyYWN0ZXIiLCJpc0NvbnRhaW5zVXBwZXJDYXNlIiwiaXNMZW5ndGhHcmVhdGVyVGhhbjgiLCJjYWxjYWx1dGVTdHJlbmd0aCIsInN0cmVuZ3RoIiwic2lnbkluIiwiZGF0YSIsInBvc3QiLCJ0b2tlbiIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJwdXNoIiwiZXJyb3IiLCJyZXNwb25zZSIsIm1lc3NhZ2UiLCJnZXRJdGVtIiwic2lnbk91dCIsInJlbW92ZUl0ZW0iLCJQcm92aWRlciIsInZhbHVlIiwidXNlQXV0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/provider/authprovider.js\n"));

/***/ })

});