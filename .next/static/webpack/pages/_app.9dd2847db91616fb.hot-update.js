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

/***/ "./components/Common/Header.jsx":
/*!**************************************!*\
  !*** ./components/Common/Header.jsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var hamburger_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! hamburger-react */ \"./node_modules/hamburger-react/dist-esm/index.js\");\n/* harmony import */ var react_modern_drawer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-modern-drawer */ \"./node_modules/react-modern-drawer/dist/index.modern.js\");\n/* harmony import */ var react_modern_drawer_dist_index_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-modern-drawer/dist/index.css */ \"./node_modules/react-modern-drawer/dist/index.css\");\n/* harmony import */ var react_modern_drawer_dist_index_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_modern_drawer_dist_index_css__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Header() {\n    _s();\n    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const toggleDrawer = ()=>{\n        setIsOpen((prevState)=>!prevState);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full h-[90px]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full max-w-[1290px] m-auto h-full flex justify-between items-center px-2 md:px-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-[160px] h-[65px] relative\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            src: \"/Assets/logo.svg\",\n                            fill: true,\n                            className: \"cover\",\n                            alt: \"logo-image\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mac/Desktop/AdrianJoseph/components/Common/Header.jsx\",\n                            lineNumber: 20,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/mac/Desktop/AdrianJoseph/components/Common/Header.jsx\",\n                        lineNumber: 19,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-center items-center gap-16\",\n                        children: NaviLinks.map((nav, index)=>{\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                href: \"#\",\n                                className: \"text-white-main text-[22px] font-normal font-sans\",\n                                children: nav.name\n                            }, index, false, {\n                                fileName: \"/Users/mac/Desktop/AdrianJoseph/components/Common/Header.jsx\",\n                                lineNumber: 31,\n                                columnNumber: 15\n                            }, this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/mac/Desktop/AdrianJoseph/components/Common/Header.jsx\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mac/Desktop/AdrianJoseph/components/Common/Header.jsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"lg:hidden w-full flex justify-end items-center \",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(hamburger_react__WEBPACK_IMPORTED_MODULE_6__.Spin, {\n                    className: \" text-white\",\n                    color: \"white\",\n                    rounded: true,\n                    size: 34,\n                    toggled: isOpen,\n                    toggle: setIsOpen\n                }, void 0, false, {\n                    fileName: \"/Users/mac/Desktop/AdrianJoseph/components/Common/Header.jsx\",\n                    lineNumber: 43,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/mac/Desktop/AdrianJoseph/components/Common/Header.jsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_modern_drawer__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                open: isOpen,\n                onClose: toggleDrawer,\n                direction: \"right\",\n                className: \"drawer\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col justify-center items-center\"\n                }, void 0, false, {\n                    fileName: \"/Users/mac/Desktop/AdrianJoseph/components/Common/Header.jsx\",\n                    lineNumber: 58,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/mac/Desktop/AdrianJoseph/components/Common/Header.jsx\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mac/Desktop/AdrianJoseph/components/Common/Header.jsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, this);\n}\n_s(Header, \"+sus0Lb0ewKHdwiUhiTAJFoFyQ0=\");\n_c = Header;\nconst NaviLinks = [\n    {\n        name: \"Home\",\n        path: \"\"\n    },\n    {\n        name: \"About Us\",\n        path: \"\"\n    },\n    {\n        name: \"Services\",\n        path: \"\"\n    },\n    {\n        name: \"Blogs\",\n        path: \"\"\n    },\n    {\n        name: \"FAQ\",\n        path: \"\"\n    },\n    {\n        name: \"Contact\",\n        path: \"\"\n    }\n];\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvbW1vbi9IZWFkZXIuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFBd0M7QUFDVDtBQUNGO0FBQ3VCO0FBQ1g7QUFDRztBQUU1QyxTQUFTTyxTQUFTOztJQUNoQixNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR1IsK0NBQVFBLENBQUMsS0FBSztJQUUxQyxNQUFNUyxlQUFlLElBQU07UUFDekJELFVBQVUsQ0FBQ0UsWUFBYyxDQUFDQTtJQUM1QjtJQUVBLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUViLDhEQUFDRDt3QkFBSUMsV0FBVTtrQ0FDYiw0RUFBQ1gsbURBQUtBOzRCQUNKWSxLQUFJOzRCQUNKQyxJQUFJOzRCQUNKRixXQUFVOzRCQUNWRyxLQUFJOzs7Ozs7Ozs7OztrQ0FJUiw4REFBQ0o7d0JBQUlDLFdBQVU7a0NBQ1pJLFVBQVVDLEdBQUcsQ0FBQyxDQUFDQyxLQUFLQyxRQUFVOzRCQUM3QixxQkFDRSw4REFBQ2pCLGtEQUFJQTtnQ0FFSGtCLE1BQUs7Z0NBQ0xSLFdBQVU7MENBRVRNLElBQUlHLElBQUk7K0JBSkpGOzs7Ozt3QkFPWDs7Ozs7Ozs7Ozs7OzBCQUdKLDhEQUFDUjtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ1IsaURBQVNBO29CQUNSUSxXQUFVO29CQUNWVSxPQUFNO29CQUNOQyxPQUFPO29CQUNQQyxNQUFNO29CQUNOQyxTQUFTbEI7b0JBQ1RtQixRQUFRbEI7Ozs7Ozs7Ozs7OzBCQUdaLDhEQUFDSCwyREFBTUE7Z0JBQ0xzQixNQUFNcEI7Z0JBQ05xQixTQUFTbkI7Z0JBQ1RvQixXQUFVO2dCQUNWakIsV0FBVTswQkFFViw0RUFBQ0Q7b0JBQUlDLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSXZCO0dBdERTTjtLQUFBQTtBQXdEVCxNQUFNVSxZQUFZO0lBQ2hCO1FBQ0VLLE1BQU07UUFDTlMsTUFBTTtJQUNSO0lBQ0E7UUFDRVQsTUFBTTtRQUNOUyxNQUFNO0lBQ1I7SUFDQTtRQUNFVCxNQUFNO1FBQ05TLE1BQU07SUFDUjtJQUNBO1FBQ0VULE1BQU07UUFDTlMsTUFBTTtJQUNSO0lBQ0E7UUFDRVQsTUFBTTtRQUNOUyxNQUFNO0lBQ1I7SUFDQTtRQUNFVCxNQUFNO1FBQ05TLE1BQU07SUFDUjtDQUNEO0FBRUQsK0RBQWV4QixNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ29tbW9uL0hlYWRlci5qc3g/ODgyNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgU3BpbiBhcyBIYW1idXJnZXIgfSBmcm9tIFwiaGFtYnVyZ2VyLXJlYWN0XCI7XG5pbXBvcnQgRHJhd2VyIGZyb20gXCJyZWFjdC1tb2Rlcm4tZHJhd2VyXCI7XG5pbXBvcnQgXCJyZWFjdC1tb2Rlcm4tZHJhd2VyL2Rpc3QvaW5kZXguY3NzXCI7XG5cbmZ1bmN0aW9uIEhlYWRlcigpIHtcbiAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCB0b2dnbGVEcmF3ZXIgPSAoKSA9PiB7XG4gICAgc2V0SXNPcGVuKChwcmV2U3RhdGUpID0+ICFwcmV2U3RhdGUpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1bOTBweF1cIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG1heC13LVsxMjkwcHhdIG0tYXV0byBoLWZ1bGwgZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIHB4LTIgbWQ6cHgtNlwiPlxuICAgICAgICB7LyogPT09PT09PT4gbG9nbyAgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1bMTYwcHhdIGgtWzY1cHhdIHJlbGF0aXZlXCI+XG4gICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICBzcmM9XCIvQXNzZXRzL2xvZ28uc3ZnXCJcbiAgICAgICAgICAgIGZpbGxcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvdmVyXCJcbiAgICAgICAgICAgIGFsdD1cImxvZ28taW1hZ2VcIlxuICAgICAgICAgID48L0ltYWdlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgey8qID09PT09PT0+IG5hdmkgbGlua3MgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgZ2FwLTE2XCI+XG4gICAgICAgICAge05hdmlMaW5rcy5tYXAoKG5hdiwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICBocmVmPVwiI1wiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZS1tYWluIHRleHQtWzIycHhdIGZvbnQtbm9ybWFsIGZvbnQtc2Fuc1wiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7bmF2Lm5hbWV9XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOmhpZGRlbiB3LWZ1bGwgZmxleCBqdXN0aWZ5LWVuZCBpdGVtcy1jZW50ZXIgXCI+XG4gICAgICAgIDxIYW1idXJnZXJcbiAgICAgICAgICBjbGFzc05hbWU9XCIgdGV4dC13aGl0ZVwiXG4gICAgICAgICAgY29sb3I9XCJ3aGl0ZVwiXG4gICAgICAgICAgcm91bmRlZFxuICAgICAgICAgIHNpemU9ezM0fVxuICAgICAgICAgIHRvZ2dsZWQ9e2lzT3Blbn1cbiAgICAgICAgICB0b2dnbGU9e3NldElzT3Blbn1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPERyYXdlclxuICAgICAgICBvcGVuPXtpc09wZW59XG4gICAgICAgIG9uQ2xvc2U9e3RvZ2dsZURyYXdlcn1cbiAgICAgICAgZGlyZWN0aW9uPVwicmlnaHRcIlxuICAgICAgICBjbGFzc05hbWU9XCJkcmF3ZXJcIlxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCI+PC9kaXY+XG4gICAgICA8L0RyYXdlcj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuY29uc3QgTmF2aUxpbmtzID0gW1xuICB7XG4gICAgbmFtZTogXCJIb21lXCIsXG4gICAgcGF0aDogXCJcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiQWJvdXQgVXNcIixcbiAgICBwYXRoOiBcIlwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJTZXJ2aWNlc1wiLFxuICAgIHBhdGg6IFwiXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkJsb2dzXCIsXG4gICAgcGF0aDogXCJcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiRkFRXCIsXG4gICAgcGF0aDogXCJcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiQ29udGFjdFwiLFxuICAgIHBhdGg6IFwiXCIsXG4gIH0sXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkltYWdlIiwiTGluayIsIlNwaW4iLCJIYW1idXJnZXIiLCJEcmF3ZXIiLCJIZWFkZXIiLCJpc09wZW4iLCJzZXRJc09wZW4iLCJ0b2dnbGVEcmF3ZXIiLCJwcmV2U3RhdGUiLCJkaXYiLCJjbGFzc05hbWUiLCJzcmMiLCJmaWxsIiwiYWx0IiwiTmF2aUxpbmtzIiwibWFwIiwibmF2IiwiaW5kZXgiLCJocmVmIiwibmFtZSIsImNvbG9yIiwicm91bmRlZCIsInNpemUiLCJ0b2dnbGVkIiwidG9nZ2xlIiwib3BlbiIsIm9uQ2xvc2UiLCJkaXJlY3Rpb24iLCJwYXRoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Common/Header.jsx\n"));

/***/ })

});