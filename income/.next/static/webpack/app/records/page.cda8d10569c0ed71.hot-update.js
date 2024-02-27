"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/records/page",{

/***/ "(app-pages-browser)/./src/components/provider/authprovider.js":
/*!*************************************************!*\
  !*** ./src/components/provider/authprovider.js ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AuthProvider: function() { return /* binding */ AuthProvider; },\n/* harmony export */   useAuth: function() { return /* binding */ useAuth; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_common_axios_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/common/axios/page */ \"(app-pages-browser)/./src/components/common/axios/page.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify */ \"(app-pages-browser)/./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n/* harmony import */ var _barrel_optimize_names_FaImage_react_icons_fa__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=FaImage!=!react-icons/fa */ \"(app-pages-browser)/./node_modules/react-icons/fa/index.esm.js\");\n/* __next_internal_client_entry_do_not_use__ AuthProvider,useAuth auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_3__.createContext)();\nconst AuthProvider = (param)=>{\n    let { children } = param;\n    _s();\n    const [isLoggedIn, setIsLoggedIn] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    // const [isReady, setIsReady] = useState(false);\n    // const [isLoading, setIsLoading] = useState(false);\n    const [color, setColor] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [showMoadl1, setShowModal1] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [showCategory, setShowCategory] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [showIcons, setShowIcons] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [emoji, setEmoji] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [newIcon, setNewIcon] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaImage_react_icons_fa__WEBPACK_IMPORTED_MODULE_5__.FaImage, {}, void 0, false, {\n        fileName: \"/Users/ulaaka211/Desktop/tracker/income/src/components/provider/authprovider.js\",\n        lineNumber: 23,\n        columnNumber: 42\n    }, undefined));\n    const [newIconColor, setNewIconColor] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"#000000\");\n    const [passwordError, setPasswordError] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const isContainsUpperCase = (password)=>{\n        for(let i = 0; i < password.length; i++)if (password[i].charCodeAt(0) >= 64 && password[i].charCodeAt(0) <= 90) {\n            return 1;\n        }\n        return 0;\n    };\n    const isContainsNumber = (password)=>{\n        for(let i = 0; i < password.length; i++){\n            if (password[i].charCodeAt(0) >= 48 && password[i].charCodeAt(0) <= 57) {\n                return 1;\n            }\n        }\n        return 0;\n    };\n    const isContainsSpecialCharacter = (password)=>{\n        for(let i = 0; i < password.length; i++)if (password[i].charCodeAt(0) >= 33 && password[i].charCodeAt(0) <= 47 || password[i].charCodeAt(0) >= 58 && password[i].charCodeAt(0) <= 64 || password[i].charCodeAt(0) >= 91 && password[i].charCodeAt(0) <= 96 || password[i].charCodeAt(0) >= 123 && password[i].charCodeAt(0) <= 126) {\n            return 1;\n        }\n        return 0;\n    };\n    const isLengthGreaterThan8 = (password)=>{\n        return password.length >= 8 ? 1 : 0;\n    };\n    const calcaluteStrength = (password)=>{\n        let strength = 0;\n        strength += isContainsNumber(password);\n        strength += isContainsSpecialCharacter(password);\n        strength += isContainsUpperCase(password);\n        strength += isLengthGreaterThan8(password);\n        return strength;\n    };\n    const signIn = async (email, password)=>{\n        // setIsLoading(true);\n        try {\n            const { data } = await _components_common_axios_page__WEBPACK_IMPORTED_MODULE_1__.api.post(\"/login\", {\n                email,\n                password\n            });\n            const { token } = data;\n            localStorage.setItem(\"token\", token);\n            setIsLoggedIn(true);\n            router.push(\"/dashboard\");\n        } catch (error) {\n            react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.error(error.response.data.message);\n        } finally{\n        // setIsLoading(false);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const token = localStorage.getItem(\"token\");\n        if (token) {\n            setIsLoggedIn(true);\n        }\n    }, []);\n    const signUp = async (email, password)=>{\n        // setIsLoading(true);\n        try {\n            const { data } = await _components_common_axios_page__WEBPACK_IMPORTED_MODULE_1__.api.post(\"/signup1\", {\n                email,\n                password\n            });\n            const { token } = data;\n            localStorage.setItem(\"token\", token);\n            setIsLoggedIn(true);\n            router.push(\"/dashboard\");\n        } catch (error) {\n            react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.error(error.response.data.message);\n        } finally{\n        // setIsLoading(false);\n        }\n    };\n    const signOut = async ()=>{\n        localStorage.removeItem(\"token\");\n        setIsLoggedIn(false);\n        router.push(\"/dashboard\");\n    };\n    // useEffect(() => {\n    //   setIsReady(false);\n    //   const token = localStorage.removeItem(\"token\");\n    //   if (token) {\n    //     setIsLoggedIn(false);\n    //   }\n    //   setIsReady(true);\n    // }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: {\n            isLoggedIn,\n            setIsLoggedIn,\n            signIn,\n            signUp,\n            color,\n            setColor,\n            showMoadl1,\n            setShowModal1,\n            showCategory,\n            setShowCategory,\n            showIcons,\n            setShowIcons,\n            emoji,\n            setEmoji,\n            newIcon,\n            setNewIcon,\n            newIconColor,\n            setNewIconColor,\n            isContainsNumber,\n            isContainsSpecialCharacter,\n            isContainsUpperCase,\n            isLengthGreaterThan8,\n            calcaluteStrength,\n            passwordError,\n            setPasswordError\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/ulaaka211/Desktop/tracker/income/src/components/provider/authprovider.js\",\n        lineNumber: 152,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AuthProvider, \"OUBQHb776ggv9cBwalsK0TZkFOA=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = AuthProvider;\nconst useAuth = ()=>{\n    _s1();\n    return (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(AuthContext);\n};\n_s1(useAuth, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nvar _c;\n$RefreshReg$(_c, \"AuthProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3Byb3ZpZGVyL2F1dGhwcm92aWRlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFFcUQ7QUFDVDtBQUNXO0FBQ2hCO0FBQ0U7QUFDRztBQUNIO0FBQ1E7QUFFakQsTUFBTVcsNEJBQWNSLG9EQUFhQTtBQUUxQixNQUFNUyxlQUFlO1FBQUMsRUFBRUMsUUFBUSxFQUFFOztJQUN2QyxNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBR1AsK0NBQVFBLENBQUM7SUFDN0MsaURBQWlEO0lBQ2pELHFEQUFxRDtJQUNyRCxNQUFNLENBQUNRLE9BQU9DLFNBQVMsR0FBR1QsK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDVSxZQUFZQyxjQUFjLEdBQUdYLCtDQUFRQSxDQUFDO0lBQzdDLE1BQU0sQ0FBQ1ksY0FBY0MsZ0JBQWdCLEdBQUdiLCtDQUFRQSxDQUFDO0lBQ2pELE1BQU0sQ0FBQ2MsV0FBV0MsYUFBYSxHQUFHZiwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNLENBQUNnQixPQUFPQyxTQUFTLEdBQUdqQiwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNrQixTQUFTQyxXQUFXLEdBQUduQiwrQ0FBUUEsZUFBQyw4REFBQ0Ysa0ZBQU9BOzs7OztJQUMvQyxNQUFNLENBQUNzQixjQUFjQyxnQkFBZ0IsR0FBR3JCLCtDQUFRQSxDQUFDO0lBQ2pELE1BQU0sQ0FBQ3NCLGVBQWVDLGlCQUFpQixHQUFHdkIsK0NBQVFBLENBQUM7SUFFbkQsTUFBTXdCLFNBQVMvQiwwREFBU0E7SUFFeEIsTUFBTWdDLHNCQUFzQixDQUFDQztRQUMzQixJQUFLLElBQUlDLElBQUksR0FBR0EsSUFBSUQsU0FBU0UsTUFBTSxFQUFFRCxJQUNuQyxJQUFJRCxRQUFRLENBQUNDLEVBQUUsQ0FBQ0UsVUFBVSxDQUFDLE1BQU0sTUFBTUgsUUFBUSxDQUFDQyxFQUFFLENBQUNFLFVBQVUsQ0FBQyxNQUFNLElBQUk7WUFDdEUsT0FBTztRQUNUO1FBRUYsT0FBTztJQUNUO0lBRUEsTUFBTUMsbUJBQW1CLENBQUNKO1FBQ3hCLElBQUssSUFBSUMsSUFBSSxHQUFHQSxJQUFJRCxTQUFTRSxNQUFNLEVBQUVELElBQUs7WUFDeEMsSUFBSUQsUUFBUSxDQUFDQyxFQUFFLENBQUNFLFVBQVUsQ0FBQyxNQUFNLE1BQU1ILFFBQVEsQ0FBQ0MsRUFBRSxDQUFDRSxVQUFVLENBQUMsTUFBTSxJQUFJO2dCQUN0RSxPQUFPO1lBQ1Q7UUFDRjtRQUVBLE9BQU87SUFDVDtJQUVBLE1BQU1FLDZCQUE2QixDQUFDTDtRQUNsQyxJQUFLLElBQUlDLElBQUksR0FBR0EsSUFBSUQsU0FBU0UsTUFBTSxFQUFFRCxJQUNuQyxJQUNFLFFBQVMsQ0FBQ0EsRUFBRSxDQUFDRSxVQUFVLENBQUMsTUFBTSxNQUFNSCxRQUFRLENBQUNDLEVBQUUsQ0FBQ0UsVUFBVSxDQUFDLE1BQU0sTUFDaEVILFFBQVEsQ0FBQ0MsRUFBRSxDQUFDRSxVQUFVLENBQUMsTUFBTSxNQUFNSCxRQUFRLENBQUNDLEVBQUUsQ0FBQ0UsVUFBVSxDQUFDLE1BQU0sTUFDaEVILFFBQVEsQ0FBQ0MsRUFBRSxDQUFDRSxVQUFVLENBQUMsTUFBTSxNQUFNSCxRQUFRLENBQUNDLEVBQUUsQ0FBQ0UsVUFBVSxDQUFDLE1BQU0sTUFDaEVILFFBQVEsQ0FBQ0MsRUFBRSxDQUFDRSxVQUFVLENBQUMsTUFBTSxPQUFPSCxRQUFRLENBQUNDLEVBQUUsQ0FBQ0UsVUFBVSxDQUFDLE1BQU0sS0FDbEU7WUFDQSxPQUFPO1FBQ1Q7UUFFRixPQUFPO0lBQ1Q7SUFFQSxNQUFNRyx1QkFBdUIsQ0FBQ047UUFDNUIsT0FBT0EsU0FBU0UsTUFBTSxJQUFJLElBQUksSUFBSTtJQUNwQztJQUVBLE1BQU1LLG9CQUFvQixDQUFDUDtRQUN6QixJQUFJUSxXQUFXO1FBRWZBLFlBQVlKLGlCQUFpQko7UUFDN0JRLFlBQVlILDJCQUEyQkw7UUFDdkNRLFlBQVlULG9CQUFvQkM7UUFDaENRLFlBQVlGLHFCQUFxQk47UUFFakMsT0FBT1E7SUFDVDtJQUVBLE1BQU1DLFNBQVMsT0FBT0MsT0FBT1Y7UUFDM0Isc0JBQXNCO1FBRXRCLElBQUk7WUFDRixNQUFNLEVBQUVXLElBQUksRUFBRSxHQUFHLE1BQU03Qyw4REFBR0EsQ0FBQzhDLElBQUksQ0FBQyxVQUFVO2dCQUN4Q0Y7Z0JBQ0FWO1lBQ0Y7WUFFQSxNQUFNLEVBQUVhLEtBQUssRUFBRSxHQUFHRjtZQUVsQkcsYUFBYUMsT0FBTyxDQUFDLFNBQVNGO1lBRTlCaEMsY0FBYztZQUVkaUIsT0FBT2tCLElBQUksQ0FBQztRQUNkLEVBQUUsT0FBT0MsT0FBTztZQUNkOUMsaURBQUtBLENBQUM4QyxLQUFLLENBQUNBLE1BQU1DLFFBQVEsQ0FBQ1AsSUFBSSxDQUFDUSxPQUFPO1FBQ3pDLFNBQVU7UUFDUix1QkFBdUI7UUFDekI7SUFDRjtJQUVBOUMsZ0RBQVNBLENBQUM7UUFDUixNQUFNd0MsUUFBUUMsYUFBYU0sT0FBTyxDQUFDO1FBRW5DLElBQUlQLE9BQU87WUFDVGhDLGNBQWM7UUFDaEI7SUFDRixHQUFHLEVBQUU7SUFFTCxNQUFNd0MsU0FBUyxPQUFPWCxPQUFPVjtRQUMzQixzQkFBc0I7UUFFdEIsSUFBSTtZQUNGLE1BQU0sRUFBRVcsSUFBSSxFQUFFLEdBQUcsTUFBTTdDLDhEQUFHQSxDQUFDOEMsSUFBSSxDQUFDLFlBQVk7Z0JBQzFDRjtnQkFDQVY7WUFDRjtZQUVBLE1BQU0sRUFBRWEsS0FBSyxFQUFFLEdBQUdGO1lBRWxCRyxhQUFhQyxPQUFPLENBQUMsU0FBU0Y7WUFFOUJoQyxjQUFjO1lBRWRpQixPQUFPa0IsSUFBSSxDQUFDO1FBQ2QsRUFBRSxPQUFPQyxPQUFPO1lBQ2Q5QyxpREFBS0EsQ0FBQzhDLEtBQUssQ0FBQ0EsTUFBTUMsUUFBUSxDQUFDUCxJQUFJLENBQUNRLE9BQU87UUFDekMsU0FBVTtRQUNSLHVCQUF1QjtRQUN6QjtJQUNGO0lBRUEsTUFBTUcsVUFBVTtRQUNkUixhQUFhUyxVQUFVLENBQUM7UUFFeEIxQyxjQUFjO1FBRWRpQixPQUFPa0IsSUFBSSxDQUFDO0lBQ2Q7SUFFQSxvQkFBb0I7SUFDcEIsdUJBQXVCO0lBRXZCLG9EQUFvRDtJQUVwRCxpQkFBaUI7SUFDakIsNEJBQTRCO0lBQzVCLE1BQU07SUFFTixzQkFBc0I7SUFDdEIsVUFBVTtJQUVWLHFCQUNFLDhEQUFDdkMsWUFBWStDLFFBQVE7UUFDbkJDLE9BQU87WUFDTDdDO1lBQ0FDO1lBQ0E0QjtZQUNBWTtZQUNBdkM7WUFDQUM7WUFDQUM7WUFDQUM7WUFDQUM7WUFDQUM7WUFDQUM7WUFDQUM7WUFDQUM7WUFDQUM7WUFDQUM7WUFDQUM7WUFDQUM7WUFDQUM7WUFDQVM7WUFDQUM7WUFDQU47WUFDQU87WUFDQUM7WUFDQVg7WUFDQUM7UUFDRjtrQkFFQ2xCOzs7Ozs7QUFlUCxFQUFFO0dBdExXRDs7UUFhSVgsc0RBQVNBOzs7S0FiYlc7QUF3TE4sTUFBTWdELFVBQVU7O0lBQ3JCLE9BQU8xRCxpREFBVUEsQ0FBQ1M7QUFDcEIsRUFBRTtJQUZXaUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvcHJvdmlkZXIvYXV0aHByb3ZpZGVyLmpzPzhiNzIiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCB7IGFwaSB9IGZyb20gXCJAL2NvbXBvbmVudHMvY29tbW9uL2F4aW9zL3BhZ2VcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcbmltcG9ydCB7IHVzZUNvbnRleHQsIGNyZWF0ZUNvbnRleHQsIHVzZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdG9hc3QgfSBmcm9tIFwicmVhY3QtdG9hc3RpZnlcIjtcbmltcG9ydCB7IEZhSW1hZ2UgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEJhY2tkcm9wIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB7IENpcmN1bGFyUHJvZ3Jlc3MgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuXG5jb25zdCBBdXRoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcblxuZXhwb3J0IGNvbnN0IEF1dGhQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgW2lzTG9nZ2VkSW4sIHNldElzTG9nZ2VkSW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICAvLyBjb25zdCBbaXNSZWFkeSwgc2V0SXNSZWFkeV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIC8vIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtjb2xvciwgc2V0Q29sb3JdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtzaG93TW9hZGwxLCBzZXRTaG93TW9kYWwxXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3Nob3dDYXRlZ29yeSwgc2V0U2hvd0NhdGVnb3J5XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3Nob3dJY29ucywgc2V0U2hvd0ljb25zXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2Vtb2ppLCBzZXRFbW9qaV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtuZXdJY29uLCBzZXROZXdJY29uXSA9IHVzZVN0YXRlKDxGYUltYWdlIC8+KTtcbiAgY29uc3QgW25ld0ljb25Db2xvciwgc2V0TmV3SWNvbkNvbG9yXSA9IHVzZVN0YXRlKFwiIzAwMDAwMFwiKTtcbiAgY29uc3QgW3Bhc3N3b3JkRXJyb3IsIHNldFBhc3N3b3JkRXJyb3JdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc3QgaXNDb250YWluc1VwcGVyQ2FzZSA9IChwYXNzd29yZCkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFzc3dvcmQubGVuZ3RoOyBpKyspXG4gICAgICBpZiAocGFzc3dvcmRbaV0uY2hhckNvZGVBdCgwKSA+PSA2NCAmJiBwYXNzd29yZFtpXS5jaGFyQ29kZUF0KDApIDw9IDkwKSB7XG4gICAgICAgIHJldHVybiAxO1xuICAgICAgfVxuXG4gICAgcmV0dXJuIDA7XG4gIH07XG5cbiAgY29uc3QgaXNDb250YWluc051bWJlciA9IChwYXNzd29yZCkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFzc3dvcmQubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChwYXNzd29yZFtpXS5jaGFyQ29kZUF0KDApID49IDQ4ICYmIHBhc3N3b3JkW2ldLmNoYXJDb2RlQXQoMCkgPD0gNTcpIHtcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIDA7XG4gIH07XG5cbiAgY29uc3QgaXNDb250YWluc1NwZWNpYWxDaGFyYWN0ZXIgPSAocGFzc3dvcmQpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhc3N3b3JkLmxlbmd0aDsgaSsrKVxuICAgICAgaWYgKFxuICAgICAgICAocGFzc3dvcmRbaV0uY2hhckNvZGVBdCgwKSA+PSAzMyAmJiBwYXNzd29yZFtpXS5jaGFyQ29kZUF0KDApIDw9IDQ3KSB8fFxuICAgICAgICAocGFzc3dvcmRbaV0uY2hhckNvZGVBdCgwKSA+PSA1OCAmJiBwYXNzd29yZFtpXS5jaGFyQ29kZUF0KDApIDw9IDY0KSB8fFxuICAgICAgICAocGFzc3dvcmRbaV0uY2hhckNvZGVBdCgwKSA+PSA5MSAmJiBwYXNzd29yZFtpXS5jaGFyQ29kZUF0KDApIDw9IDk2KSB8fFxuICAgICAgICAocGFzc3dvcmRbaV0uY2hhckNvZGVBdCgwKSA+PSAxMjMgJiYgcGFzc3dvcmRbaV0uY2hhckNvZGVBdCgwKSA8PSAxMjYpXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgICB9XG5cbiAgICByZXR1cm4gMDtcbiAgfTtcblxuICBjb25zdCBpc0xlbmd0aEdyZWF0ZXJUaGFuOCA9IChwYXNzd29yZCkgPT4ge1xuICAgIHJldHVybiBwYXNzd29yZC5sZW5ndGggPj0gOCA/IDEgOiAwO1xuICB9O1xuXG4gIGNvbnN0IGNhbGNhbHV0ZVN0cmVuZ3RoID0gKHBhc3N3b3JkKSA9PiB7XG4gICAgbGV0IHN0cmVuZ3RoID0gMDtcblxuICAgIHN0cmVuZ3RoICs9IGlzQ29udGFpbnNOdW1iZXIocGFzc3dvcmQpO1xuICAgIHN0cmVuZ3RoICs9IGlzQ29udGFpbnNTcGVjaWFsQ2hhcmFjdGVyKHBhc3N3b3JkKTtcbiAgICBzdHJlbmd0aCArPSBpc0NvbnRhaW5zVXBwZXJDYXNlKHBhc3N3b3JkKTtcbiAgICBzdHJlbmd0aCArPSBpc0xlbmd0aEdyZWF0ZXJUaGFuOChwYXNzd29yZCk7XG5cbiAgICByZXR1cm4gc3RyZW5ndGg7XG4gIH07XG5cbiAgY29uc3Qgc2lnbkluID0gYXN5bmMgKGVtYWlsLCBwYXNzd29yZCkgPT4ge1xuICAgIC8vIHNldElzTG9hZGluZyh0cnVlKTtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGFwaS5wb3N0KFwiL2xvZ2luXCIsIHtcbiAgICAgICAgZW1haWwsXG4gICAgICAgIHBhc3N3b3JkLFxuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IHsgdG9rZW4gfSA9IGRhdGE7XG5cbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9rZW5cIiwgdG9rZW4pO1xuXG4gICAgICBzZXRJc0xvZ2dlZEluKHRydWUpO1xuXG4gICAgICByb3V0ZXIucHVzaChcIi9kYXNoYm9hcmRcIik7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRvYXN0LmVycm9yKGVycm9yLnJlc3BvbnNlLmRhdGEubWVzc2FnZSk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIC8vIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgfVxuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpO1xuXG4gICAgaWYgKHRva2VuKSB7XG4gICAgICBzZXRJc0xvZ2dlZEluKHRydWUpO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIGNvbnN0IHNpZ25VcCA9IGFzeW5jIChlbWFpbCwgcGFzc3dvcmQpID0+IHtcbiAgICAvLyBzZXRJc0xvYWRpbmcodHJ1ZSk7XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBhcGkucG9zdChcIi9zaWdudXAxXCIsIHtcbiAgICAgICAgZW1haWwsXG4gICAgICAgIHBhc3N3b3JkLFxuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IHsgdG9rZW4gfSA9IGRhdGE7XG5cbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9rZW5cIiwgdG9rZW4pO1xuXG4gICAgICBzZXRJc0xvZ2dlZEluKHRydWUpO1xuXG4gICAgICByb3V0ZXIucHVzaChcIi9kYXNoYm9hcmRcIik7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRvYXN0LmVycm9yKGVycm9yLnJlc3BvbnNlLmRhdGEubWVzc2FnZSk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIC8vIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHNpZ25PdXQgPSBhc3luYyAoKSA9PiB7XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJ0b2tlblwiKTtcblxuICAgIHNldElzTG9nZ2VkSW4oZmFsc2UpO1xuXG4gICAgcm91dGVyLnB1c2goXCIvZGFzaGJvYXJkXCIpO1xuICB9O1xuXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vICAgc2V0SXNSZWFkeShmYWxzZSk7XG5cbiAgLy8gICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwidG9rZW5cIik7XG5cbiAgLy8gICBpZiAodG9rZW4pIHtcbiAgLy8gICAgIHNldElzTG9nZ2VkSW4oZmFsc2UpO1xuICAvLyAgIH1cblxuICAvLyAgIHNldElzUmVhZHkodHJ1ZSk7XG4gIC8vIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxBdXRoQ29udGV4dC5Qcm92aWRlclxuICAgICAgdmFsdWU9e3tcbiAgICAgICAgaXNMb2dnZWRJbixcbiAgICAgICAgc2V0SXNMb2dnZWRJbixcbiAgICAgICAgc2lnbkluLFxuICAgICAgICBzaWduVXAsXG4gICAgICAgIGNvbG9yLFxuICAgICAgICBzZXRDb2xvcixcbiAgICAgICAgc2hvd01vYWRsMSxcbiAgICAgICAgc2V0U2hvd01vZGFsMSxcbiAgICAgICAgc2hvd0NhdGVnb3J5LFxuICAgICAgICBzZXRTaG93Q2F0ZWdvcnksXG4gICAgICAgIHNob3dJY29ucyxcbiAgICAgICAgc2V0U2hvd0ljb25zLFxuICAgICAgICBlbW9qaSxcbiAgICAgICAgc2V0RW1vamksXG4gICAgICAgIG5ld0ljb24sXG4gICAgICAgIHNldE5ld0ljb24sXG4gICAgICAgIG5ld0ljb25Db2xvcixcbiAgICAgICAgc2V0TmV3SWNvbkNvbG9yLFxuICAgICAgICBpc0NvbnRhaW5zTnVtYmVyLFxuICAgICAgICBpc0NvbnRhaW5zU3BlY2lhbENoYXJhY3RlcixcbiAgICAgICAgaXNDb250YWluc1VwcGVyQ2FzZSxcbiAgICAgICAgaXNMZW5ndGhHcmVhdGVyVGhhbjgsXG4gICAgICAgIGNhbGNhbHV0ZVN0cmVuZ3RoLFxuICAgICAgICBwYXNzd29yZEVycm9yLFxuICAgICAgICBzZXRQYXNzd29yZEVycm9yLFxuICAgICAgfX1cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG5cbiAgICAgIHsvKiA8QmFja2Ryb3BcbiAgICAgICAgb3Blbj17IWlzUmVhZHl9XG4gICAgICAgIHN4PXt7XG4gICAgICAgICAgY29sb3I6IFwiZmZmXCIsXG4gICAgICAgICAgekluZGV4OiAodGhlbWUpID0+IHtcbiAgICAgICAgICAgIHRoZW1lLnpJbmRleC5kcmF3ZXIgKyAxO1xuICAgICAgICAgIH0sXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxDaXJjdWxhclByb2dyZXNzIGNvbG9yPVwiaW5oZXJpdFwiIC8+XG4gICAgICA8L0JhY2tkcm9wPiAqL31cbiAgICA8L0F1dGhDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IHVzZUF1dGggPSAoKSA9PiB7XG4gIHJldHVybiB1c2VDb250ZXh0KEF1dGhDb250ZXh0KTtcbn07XG4iXSwibmFtZXMiOlsiYXBpIiwidXNlUm91dGVyIiwidXNlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2UiLCJ0b2FzdCIsIkZhSW1hZ2UiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkJhY2tkcm9wIiwiQ2lyY3VsYXJQcm9ncmVzcyIsIkF1dGhDb250ZXh0IiwiQXV0aFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJpc0xvZ2dlZEluIiwic2V0SXNMb2dnZWRJbiIsImNvbG9yIiwic2V0Q29sb3IiLCJzaG93TW9hZGwxIiwic2V0U2hvd01vZGFsMSIsInNob3dDYXRlZ29yeSIsInNldFNob3dDYXRlZ29yeSIsInNob3dJY29ucyIsInNldFNob3dJY29ucyIsImVtb2ppIiwic2V0RW1vamkiLCJuZXdJY29uIiwic2V0TmV3SWNvbiIsIm5ld0ljb25Db2xvciIsInNldE5ld0ljb25Db2xvciIsInBhc3N3b3JkRXJyb3IiLCJzZXRQYXNzd29yZEVycm9yIiwicm91dGVyIiwiaXNDb250YWluc1VwcGVyQ2FzZSIsInBhc3N3b3JkIiwiaSIsImxlbmd0aCIsImNoYXJDb2RlQXQiLCJpc0NvbnRhaW5zTnVtYmVyIiwiaXNDb250YWluc1NwZWNpYWxDaGFyYWN0ZXIiLCJpc0xlbmd0aEdyZWF0ZXJUaGFuOCIsImNhbGNhbHV0ZVN0cmVuZ3RoIiwic3RyZW5ndGgiLCJzaWduSW4iLCJlbWFpbCIsImRhdGEiLCJwb3N0IiwidG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwicHVzaCIsImVycm9yIiwicmVzcG9uc2UiLCJtZXNzYWdlIiwiZ2V0SXRlbSIsInNpZ25VcCIsInNpZ25PdXQiLCJyZW1vdmVJdGVtIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsInVzZUF1dGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/provider/authprovider.js\n"));

/***/ })

});