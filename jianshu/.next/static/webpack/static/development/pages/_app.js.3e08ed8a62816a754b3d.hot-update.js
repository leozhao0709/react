webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/nav/index.module.scss":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./src/components/nav/index.module.scss ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, ".nav_nav__2TIQo {\n  height: 58px;\n  border-bottom: 1px solid #f0f0f0;\n  display: flex;\n}\n.nav_nav__2TIQo .nav_logo__1D973 {\n  display: inline-block;\n  width: 100px;\n  height: 56px;\n  background: url(\"/logo.png\");\n  background-size: cover;\n}\n.nav_nav__2TIQo .nav_middleItems__1KzAN {\n  width: 960px;\n  margin: 0 auto;\n  display: flex;\n  justify-content: space-between;\n  font-size: 17px;\n}\n.nav_nav__2TIQo .nav_middleItems__1KzAN .nav_middleLeftItems__1Iltv,\n.nav_nav__2TIQo .nav_middleItems__1KzAN .nav_middleRightItems__2AKgV {\n  display: flex;\n}\n.nav_nav__2TIQo .nav_middleItems__1KzAN .nav_middleLeftItems__1Iltv > a,\n.nav_nav__2TIQo .nav_middleItems__1KzAN .nav_middleRightItems__2AKgV > a {\n  line-height: 26px;\n  padding: 0 15px;\n  display: flex;\n  align-items: center;\n  text-decoration: none;\n}\n.nav_nav__2TIQo .nav_middleItems__1KzAN .nav_middleLeftItems__1Iltv > a.nav_active__1HKBi,\n.nav_nav__2TIQo .nav_middleItems__1KzAN .nav_middleRightItems__2AKgV > a.nav_active__1HKBi {\n  color: #ea6f5a;\n}\n.nav_nav__2TIQo .nav_middleItems__1KzAN .nav_middleLeftItems__1Iltv > a {\n  color: #333;\n}\n.nav_nav__2TIQo .nav_middleItems__1KzAN .nav_middleRightItems__2AKgV > a {\n  color: #969696;\n}\n.nav_nav__2TIQo .nav_rightItems__3g-3s {\n  width: 200px;\n}", "",{"version":3,"sources":["/Users/leizhao/Documents/my_git/react/jianshu/src/components/nav/index.module.scss"],"names":[],"mappings":"AAAA;EACE,YAAA;EACA,gCAAA;EACA,aAAA;AACF;AACE;EACE,qBAAA;EACA,YAAA;EACA,YAAA;EACA,4BAAA;EACA,sBAAA;AACJ;AAEE;EACE,YAAA;EACA,cAAA;EAEA,aAAA;EACA,8BAAA;EACA,eAAA;AADJ;AAGI;;EAEE,aAAA;AADN;AAGM;;EACE,iBAAA;EACA,eAAA;EACA,aAAA;EACA,mBAAA;EACA,qBAAA;AAAR;AAEQ;;EACE,cAAA;AACV;AAKM;EACE,WAAA;AAHR;AAQM;EACE,cAAA;AANR;AAWE;EACE,YAAA;AATJ","file":"index.module.scss","sourcesContent":[".nav {\n  height: 58px;\n  border-bottom: 1px solid #f0f0f0;\n  display: flex;\n\n  .logo {\n    display: inline-block;\n    width: 100px;\n    height: 56px;\n    background: url('/logo.png');\n    background-size: cover;\n  }\n\n  .middleItems {\n    width: 960px;\n    margin: 0 auto;\n    // background-color: greenyellow;\n    display: flex;\n    justify-content: space-between;\n    font-size: 17px;\n\n    .middleLeftItems,\n    .middleRightItems {\n      display: flex;\n\n      & > a {\n        line-height: 26px;\n        padding: 0 15px;\n        display: flex;\n        align-items: center;\n        text-decoration: none;\n\n        &.active {\n          color: #ea6f5a;\n        }\n      }\n    }\n\n    .middleLeftItems {\n      & > a {\n        color: #333;\n      }\n    }\n\n    .middleRightItems {\n      & > a {\n        color: #969696;\n      }\n    }\n  }\n\n  .rightItems {\n    width: 200px;\n  }\n}\n"]}]);
// Exports
exports.locals = {
	"nav": "nav_nav__2TIQo",
	"logo": "nav_logo__1D973",
	"middleItems": "nav_middleItems__1KzAN",
	"middleLeftItems": "nav_middleLeftItems__1Iltv",
	"middleRightItems": "nav_middleRightItems__2AKgV",
	"active": "nav_active__1HKBi",
	"rightItems": "nav_rightItems__3g-3s"
};

/***/ }),

/***/ "./src/components/nav/index.tsx":
/*!**************************************!*\
  !*** ./src/components/nav/index.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.module.scss */ "./src/components/nav/index.module.scss");
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _this = undefined,
    _jsxFileName = "/Users/leizhao/Documents/my_git/react/jianshu/src/components/nav/index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Nav = function Nav(props) {
  return __jsx("nav", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.nav,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    as: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, __jsx("a", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.logo,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.middleItems,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.middleLeftItems,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    as: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 11
    }
  }, __jsx("a", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.active,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }, "\u9996\u9875")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    as: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 11
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }, "\u4E0B\u8F7DApp"))), __jsx("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.middleRightItems,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    as: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }, "Aa")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    as: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }, "\u767B\u5F55")))), __jsx("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.rightItems,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }));
};

Nav.defaultProps = {};
/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ })

})
//# sourceMappingURL=_app.js.3e08ed8a62816a754b3d.hot-update.js.map