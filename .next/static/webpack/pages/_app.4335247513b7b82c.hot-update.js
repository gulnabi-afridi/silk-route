"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Common/Footer.jsx":
/*!**************************************!*\
  !*** ./components/Common/Footer.jsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction Footer() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full h-[170px] flex flex-col gap-4 justify-center items-center px-2 md:px-6\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-full max-w-[1290px] m-auto h-full flex justify-between items-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-[190px] h-[70px] relative\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        src: \"/Assets/logo.svg\",\n                        fill: true,\n                        className: \"cover\",\n                        alt: \"logo-image\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mac/Desktop/AdrianJoseph/components/Common/Footer.jsx\",\n                        lineNumber: 11,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/mac/Desktop/AdrianJoseph/components/Common/Footer.jsx\",\n                    lineNumber: 10,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-center items-center gap-16\",\n                    children: NaviLinks.map((nav, index)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            href: \"#\",\n                            className: \"text-white-main text-base font-normal font-sans\",\n                            children: nav.name\n                        }, index, false, {\n                            fileName: \"/Users/mac/Desktop/AdrianJoseph/components/Common/Footer.jsx\",\n                            lineNumber: 22,\n                            columnNumber: 15\n                        }, this);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/mac/Desktop/AdrianJoseph/components/Common/Footer.jsx\",\n                    lineNumber: 19,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-white-main text-[14px] font-sans\",\n                    children: \"Silk Route. All rights reserved \\xa9 2023\"\n                }, void 0, false, {\n                    fileName: \"/Users/mac/Desktop/AdrianJoseph/components/Common/Footer.jsx\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"xl:hidden w-full flex justify-end items-center \",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Hamburger, {\n                            className: \" text-white\",\n                            color: \"white\",\n                            rounded: true,\n                            size: 34,\n                            toggled: isOpen,\n                            toggle: setIsOpen\n                        }, void 0, false, {\n                            fileName: \"/Users/mac/Desktop/AdrianJoseph/components/Common/Footer.jsx\",\n                            lineNumber: 37,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Drawer, {\n                            open: isOpen,\n                            onClose: toggleDrawer,\n                            direction: \"right\",\n                            className: \"drawer\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-col justify-center items-center\",\n                                children: NaviLinks.map((nav, index)=>{\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                        href: \"#\",\n                                        className: \"text-white-main text-[22px] font-normal font-sans\",\n                                        children: nav.name\n                                    }, index, false, {\n                                        fileName: \"/Users/mac/Desktop/AdrianJoseph/components/Common/Footer.jsx\",\n                                        lineNumber: 54,\n                                        columnNumber: 19\n                                    }, this);\n                                })\n                            }, void 0, false, {\n                                fileName: \"/Users/mac/Desktop/AdrianJoseph/components/Common/Footer.jsx\",\n                                lineNumber: 51,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/mac/Desktop/AdrianJoseph/components/Common/Footer.jsx\",\n                            lineNumber: 45,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/mac/Desktop/AdrianJoseph/components/Common/Footer.jsx\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/mac/Desktop/AdrianJoseph/components/Common/Footer.jsx\",\n            lineNumber: 8,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/mac/Desktop/AdrianJoseph/components/Common/Footer.jsx\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\n_c = Footer;\nconst NaviLinks = [\n    {\n        name: \"Home\",\n        path: \"\"\n    },\n    {\n        name: \"About Us\",\n        path: \"\"\n    },\n    {\n        name: \"Services\",\n        path: \"\"\n    },\n    {\n        name: \"Blogs\",\n        path: \"\"\n    },\n    {\n        name: \"FAQ\",\n        path: \"\"\n    },\n    {\n        name: \"Contact\",\n        path: \"\"\n    },\n    {\n        name: \"Terms and Conditions\",\n        path: \"\"\n    },\n    {\n        name: \"Privacy Policy\",\n        path: \"\"\n    }\n];\n/* harmony default export */ __webpack_exports__[\"default\"] = (Footer);\nvar _c;\n$RefreshReg$(_c, \"Footer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvbW1vbi9Gb290ZXIuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQTBCO0FBQ0s7QUFDRjtBQUU3QixTQUFTRyxTQUFTO0lBQ2hCLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVO2tCQUNiLDRFQUFDRDtZQUFJQyxXQUFVOzs4QkFFYiw4REFBQ0Q7b0JBQUlDLFdBQVU7OEJBQ2IsNEVBQUNKLG1EQUFLQTt3QkFDSkssS0FBSTt3QkFDSkMsSUFBSTt3QkFDSkYsV0FBVTt3QkFDVkcsS0FBSTs7Ozs7Ozs7Ozs7OEJBSVIsOERBQUNKO29CQUFJQyxXQUFVOzhCQUNaSSxVQUFVQyxHQUFHLENBQUMsQ0FBQ0MsS0FBS0MsUUFBVTt3QkFDN0IscUJBQ0UsOERBQUNWLGtEQUFJQTs0QkFFSFcsTUFBSzs0QkFDTFIsV0FBVTtzQ0FFVE0sSUFBSUcsSUFBSTsyQkFKSkY7Ozs7O29CQU9YOzs7Ozs7OEJBRUYsOERBQUNHO29CQUFFVixXQUFVOzhCQUF3Qzs7Ozs7OzhCQUlyRCw4REFBQ0Q7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDVzs0QkFDQ1gsV0FBVTs0QkFDVlksT0FBTTs0QkFDTkMsT0FBTzs0QkFDUEMsTUFBTTs0QkFDTkMsU0FBU0M7NEJBQ1RDLFFBQVFDOzs7Ozs7c0NBRVYsOERBQUNDOzRCQUNDQyxNQUFNSjs0QkFDTkssU0FBU0M7NEJBQ1RDLFdBQVU7NEJBQ1Z2QixXQUFVO3NDQUVWLDRFQUFDRDtnQ0FBSUMsV0FBVTswQ0FDWkksVUFBVUMsR0FBRyxDQUFDLENBQUNDLEtBQUtDLFFBQVU7b0NBQzdCLHFCQUNFLDhEQUFDVixrREFBSUE7d0NBRUhXLE1BQUs7d0NBQ0xSLFdBQVU7a0RBRVRNLElBQUlHLElBQUk7dUNBSkpGOzs7OztnQ0FPWDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9kO0tBaEVTVDtBQWtFVCxNQUFNTSxZQUFZO0lBQ2hCO1FBQ0VLLE1BQU07UUFDTmUsTUFBTTtJQUNSO0lBQ0E7UUFDRWYsTUFBTTtRQUNOZSxNQUFNO0lBQ1I7SUFDQTtRQUNFZixNQUFNO1FBQ05lLE1BQU07SUFDUjtJQUNBO1FBQ0VmLE1BQU07UUFDTmUsTUFBTTtJQUNSO0lBQ0E7UUFDRWYsTUFBTTtRQUNOZSxNQUFNO0lBQ1I7SUFDQTtRQUNFZixNQUFNO1FBQ05lLE1BQU07SUFDUjtJQUNBO1FBQ0VmLE1BQU07UUFDTmUsTUFBTTtJQUNSO0lBQ0E7UUFDRWYsTUFBTTtRQUNOZSxNQUFNO0lBQ1I7Q0FDRDtBQUVELCtEQUFlMUIsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0NvbW1vbi9Gb290ZXIuanN4P2I4NjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmZ1bmN0aW9uIEZvb3RlcigpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBoLVsxNzBweF0gZmxleCBmbGV4LWNvbCBnYXAtNCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgcHgtMiBtZDpweC02XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtYXgtdy1bMTI5MHB4XSBtLWF1dG8gaC1mdWxsIGZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICB7LyogPT09PT09PT4gbG9nbyAgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1bMTkwcHhdIGgtWzcwcHhdIHJlbGF0aXZlXCI+XG4gICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICBzcmM9XCIvQXNzZXRzL2xvZ28uc3ZnXCJcbiAgICAgICAgICAgIGZpbGxcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvdmVyXCJcbiAgICAgICAgICAgIGFsdD1cImxvZ28taW1hZ2VcIlxuICAgICAgICAgID48L0ltYWdlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgey8qID09PT09PT0+IG5hdmkgbGlua3MgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgZ2FwLTE2XCI+XG4gICAgICAgICAge05hdmlMaW5rcy5tYXAoKG5hdiwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICBocmVmPVwiI1wiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZS1tYWluIHRleHQtYmFzZSBmb250LW5vcm1hbCBmb250LXNhbnNcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge25hdi5uYW1lfVxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZS1tYWluIHRleHQtWzE0cHhdIGZvbnQtc2Fuc1wiPlxuICAgICAgICAgIFNpbGsgUm91dGUuIEFsbCByaWdodHMgcmVzZXJ2ZWQgwqkgMjAyM1xuICAgICAgICA8L3A+XG4gICAgICAgIHsvKiA9PT09PT09PT4gaHVtYmVyZ2VyICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInhsOmhpZGRlbiB3LWZ1bGwgZmxleCBqdXN0aWZ5LWVuZCBpdGVtcy1jZW50ZXIgXCI+XG4gICAgICAgICAgPEhhbWJ1cmdlclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiIHRleHQtd2hpdGVcIlxuICAgICAgICAgICAgY29sb3I9XCJ3aGl0ZVwiXG4gICAgICAgICAgICByb3VuZGVkXG4gICAgICAgICAgICBzaXplPXszNH1cbiAgICAgICAgICAgIHRvZ2dsZWQ9e2lzT3Blbn1cbiAgICAgICAgICAgIHRvZ2dsZT17c2V0SXNPcGVufVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPERyYXdlclxuICAgICAgICAgICAgb3Blbj17aXNPcGVufVxuICAgICAgICAgICAgb25DbG9zZT17dG9nZ2xlRHJhd2VyfVxuICAgICAgICAgICAgZGlyZWN0aW9uPVwicmlnaHRcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZHJhd2VyXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgIHtOYXZpTGlua3MubWFwKChuYXYsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZS1tYWluIHRleHQtWzIycHhdIGZvbnQtbm9ybWFsIGZvbnQtc2Fuc1wiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtuYXYubmFtZX1cbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvRHJhd2VyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5jb25zdCBOYXZpTGlua3MgPSBbXG4gIHtcbiAgICBuYW1lOiBcIkhvbWVcIixcbiAgICBwYXRoOiBcIlwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJBYm91dCBVc1wiLFxuICAgIHBhdGg6IFwiXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIlNlcnZpY2VzXCIsXG4gICAgcGF0aDogXCJcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiQmxvZ3NcIixcbiAgICBwYXRoOiBcIlwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJGQVFcIixcbiAgICBwYXRoOiBcIlwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJDb250YWN0XCIsXG4gICAgcGF0aDogXCJcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiVGVybXMgYW5kIENvbmRpdGlvbnNcIixcbiAgICBwYXRoOiBcIlwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJQcml2YWN5IFBvbGljeVwiLFxuICAgIHBhdGg6IFwiXCIsXG4gIH0sXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJJbWFnZSIsIkxpbmsiLCJGb290ZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJzcmMiLCJmaWxsIiwiYWx0IiwiTmF2aUxpbmtzIiwibWFwIiwibmF2IiwiaW5kZXgiLCJocmVmIiwibmFtZSIsInAiLCJIYW1idXJnZXIiLCJjb2xvciIsInJvdW5kZWQiLCJzaXplIiwidG9nZ2xlZCIsImlzT3BlbiIsInRvZ2dsZSIsInNldElzT3BlbiIsIkRyYXdlciIsIm9wZW4iLCJvbkNsb3NlIiwidG9nZ2xlRHJhd2VyIiwiZGlyZWN0aW9uIiwicGF0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Common/Footer.jsx\n"));

/***/ })

});