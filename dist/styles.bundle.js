webpackJsonp(["styles"],{

/***/ "../../../../../src/fonts.css":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../src/fonts.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__("../../../../style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js??ref--8-1!../node_modules/postcss-loader/index.js??postcss!./fonts.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js??ref--8-1!../node_modules/postcss-loader/index.js??postcss!./fonts.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "../../../../../src/fonts/icomoon.eot":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "icomoon.fc51ba359274bebec407.eot";

/***/ }),

/***/ "../../../../../src/fonts/icomoon.svg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "icomoon.377ee7d4b37678c2f4bb.svg";

/***/ }),

/***/ "../../../../../src/fonts/icomoon.ttf":
/***/ (function(module, exports) {

module.exports = "data:application/x-font-ttf;base64,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"

/***/ }),

/***/ "../../../../../src/fonts/icomoon.woff":
/***/ (function(module, exports) {

module.exports = "data:application/font-woff;base64,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"

/***/ }),

/***/ "../../../../../src/styles.css":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../src/styles.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__("../../../../style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js??ref--8-1!../node_modules/postcss-loader/index.js??postcss!./styles.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js??ref--8-1!../node_modules/postcss-loader/index.js??postcss!./styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../src/fonts.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@font-face {\n    font-family: 'icomoon' !important;\n    src: url(" + __webpack_require__("../../../../../src/fonts/icomoon.eot") + ");\n    src: url(" + __webpack_require__("../../../../../src/fonts/icomoon.eot") + ") format('embedded-opentype'), url(" + __webpack_require__("../../../../../src/fonts/icomoon.woff") + ") format('woff'), url(" + __webpack_require__("../../../../../src/fonts/icomoon.ttf") + ") format('truetype'), url(" + __webpack_require__("../../../../../src/fonts/icomoon.svg") + ") format('svg');\n    font-weight: normal;\n    font-style: normal;\n    color: #fff;\n}\n\n[class^=\"icon-\"],\n[class*=\" icon-\"] {\n    /* use !important to prevent issues with browser extensions that change fonts */\n    font-family: 'icomoon' !important;\n    font-style: normal;\n    font-weight: normal;\n    font-variant: normal;\n    text-transform: none;\n    line-height: 1;\n    /* Better Font Rendering =========== */\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n}\n\n.icon-phone:before {\n    content: \"\\E942\";\n}\n\n.icon-user:before {\n    content: \"\\E971\";\n}\n\n.icon-users:before {\n    content: \"\\E972\";\n}\n\n.icon-binoculars:before {\n    content: \"\\E985\";\n}\n\n.icon-equalizer:before {\n    content: \"\\E992\";\n}", ""]);

// exports


/***/ }),

/***/ "../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../src/styles.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*!\r\n * Start Bootstrap - Simple Sidebar (http://startbootstrap.com/)\r\n * Copyright 2013-2016 Start Bootstrap\r\n * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap/blob/gh-pages/LICENSE)\r\n */\r\n\r\n@font-face {\r\n    font-family: 'icomoon';\r\n    src: url(" + __webpack_require__("../../../../../src/fonts/icomoon.eot") + ");\r\n    src: url(" + __webpack_require__("../../../../../src/fonts/icomoon.eot") + "?#iefix) format('embedded-opentype'), url(" + __webpack_require__("../../../../../src/fonts/icomoon.woff") + ") format('woff'), url(" + __webpack_require__("../../../../../src/fonts/icomoon.ttf") + ") format('truetype'), url(" + __webpack_require__("../../../../../src/fonts/icomoon.svg") + "#icomoon) format('svg');\r\n    font-weight: normal;\r\n    font-style: normal;\r\n}\r\n\r\nbody {\r\n    overflow-x: hidden;\r\n    font-family: 'Oxygen', monospace, sans-serif;\r\n}\r\n\r\n\r\n/* Toggle Styles */\r\n\r\n#wrapper {\r\n    padding-left: 0;\r\n    transition: all 0.5s ease;\r\n}\r\n\r\n#wrapper.toggled {\r\n    padding-left: 250px;\r\n}\r\n\r\n#sidebar-wrapper {\r\n    z-index: 1000;\r\n    position: fixed;\r\n    left: 250px;\r\n    top: 0;\r\n    height: 100%;\r\n    margin-left: -250px;\r\n    overflow-y: auto;\r\n    background: #2a4264;\r\n    transition: all 0.5s ease;\r\n}\r\n\r\n#wrapper.toggled #sidebar-wrapper {\r\n    width: 250px;\r\n}\r\n\r\n#page-content-wrapper {\r\n    padding: 15px;\r\n}\r\n\r\n#wrapper.toggled #page-content-wrapper {\r\n    position: absolute;\r\n    margin-right: -250px;\r\n}\r\n\r\n\r\n/* Sidebar Styles */\r\n\r\n.sidebar-nav {\r\n    position: absolute;\r\n    top: 0;\r\n    width: 250px;\r\n    margin: 0;\r\n    padding: 0;\r\n    list-style: none;\r\n}\r\n\r\n.sidebar-nav li {\r\n    text-indent: 20px;\r\n    line-height: 40px;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    color: #fff;\r\n}\r\n\r\n.sidebar-nav li a {\r\n    display: block;\r\n    text-decoration: none;\r\n    font-family: 'Oxygen', monospace, sans-serif;\r\n    color: #fff;\r\n}\r\n\r\n.sidebar-nav li:hover {\r\n    background: rgba(255, 255, 255, 0.2);\r\n}\r\n\r\n.sidebar-nav li a:active,\r\n.sidebar-nav li a:focus {\r\n    text-decoration: none;\r\n}\r\n\r\n.sidebar-nav li .active {\r\n    background: rgba(255, 255, 255, 0.2);\r\n}\r\n\r\n.sidebar-brand img {\r\n    height: 100%;\r\n    float: left;\r\n    margin-left: 20px;\r\n}\r\n\r\n.sidebar-nav>.sidebar-brand {\r\n    height: 67px;\r\n    margin-top: 5px;\r\n    font-size: 18px;\r\n    line-height: 60px;\r\n    display: inline-block;\r\n}\r\n\r\n.sidebar-nav>.sidebar-brand a {\r\n    color: #999999;\r\n}\r\n\r\n.todaySuggested {\r\n    margin-top: 20px;\r\n}\r\n\r\n.todaySuggested h3 {\r\n    text-shadow: 0px 1px 1px #000;\r\n    padding: 0;\r\n}\r\n\r\n.todaySuggested a {\r\n    background-color: #eee;\r\n    background-position: center 80%;\r\n    background-repeat: no-repeat;\r\n    height: 100%;\r\n    color: #fff;\r\n    overflow: hidden;\r\n    background-size: cover;\r\n    width: 100%;\r\n    display: block;\r\n    border-radius: 7px;\r\n    text-align: center;\r\n    padding: 35px 0;\r\n    margin-top: 0;\r\n    box-shadow: 0 1px 1px rgba(0, 0, 0, .2);\r\n    margin-bottom: 10px;\r\n    transition: .5s ease all;\r\n    max-width: 700px;\r\n}\r\n\r\n.todaySuggested a:hover,\r\n.smallSuggested a:hover,\r\n.largeSuggested a:hover {\r\n    text-decoration: none;\r\n    color: #bfbfbf;\r\n}\r\n\r\n#ajax img {\r\n    width: 100%;\r\n}\r\n\r\n#ajax {\r\n    margin-top: 40px;\r\n}\r\n\r\n#left-column {\r\n    padding: 5px 30px;\r\n    background-color: #2a4264;\r\n    max-width: 30%;\r\n    color: #fff;\r\n    margin-bottom: 20px;\r\n    float: left;\r\n}\r\n\r\n#right-column {\r\n    width: 100%;\r\n    float: left;\r\n    padding: 10px 0;\r\n}\r\n\r\n#right-column h1 {\r\n    font-size: 2.3em;\r\n    color: #2a4364;\r\n    margin: 20px 0;\r\n    padding: 0;\r\n}\r\n\r\n#right-column p {\r\n    line-height: 30px;\r\n}\r\n\r\n#profile ul {\r\n    list-style: none;\r\n    padding: 0;\r\n}\r\n\r\n#profile p {\r\n    font-size: 16px;\r\n    padding: 0;\r\n}\r\n\r\n#profile ul li {\r\n    font-size: 16px;\r\n    padding: 3px 0;\r\n}\r\n\r\n#suggestions {\r\n    padding-bottom: 40px;\r\n}\r\n\r\n.largeSuggested {\r\n    margin: 20px 0;\r\n}\r\n\r\n.largeSuggested a {\r\n    background-color: #cfcfcf;\r\n    background-position: center 50%;\r\n    background-repeat: no-repeat;\r\n    height: 100%;\r\n    color: #fff;\r\n    overflow: hidden;\r\n    background-size: cover;\r\n    width: 100%;\r\n    display: block;\r\n    border-radius: 7px;\r\n    text-align: center;\r\n    max-width: 700px;\r\n    padding: 90px 0;\r\n    margin-top: 0;\r\n    box-shadow: 0 1px 1px rgba(0, 0, 0, .2);\r\n    margin-bottom: 10px;\r\n    transition: .5s ease all;\r\n}\r\n\r\n.smallSuggested a h3 {\r\n    font-size: 18px;\r\n}\r\n\r\n.smallSuggested {\r\n    max-width: 700px;\r\n    margin-bottom: 40px;\r\n}\r\n\r\n.smallSuggested a {\r\n    background-color: #cfcfcf;\r\n    background-position: center 65%;\r\n    background-repeat: no-repeat;\r\n    height: 100%;\r\n    color: #fff;\r\n    font-size: 12px;\r\n    overflow: hidden;\r\n    background-size: cover;\r\n    width: 100%;\r\n    display: inline-block;\r\n    border-radius: 7px;\r\n    max-width: 700px;\r\n    text-align: center;\r\n    padding: 25px;\r\n    margin-top: 5px;\r\n    box-shadow: 0 1px 1px rgba(0, 0, 0, .2);\r\n    margin-bottom: 10px;\r\n    transition: .5s ease all;\r\n}\r\n\r\n.buttonHolder {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    margin-top: 40px;\r\n}\r\n\r\n#loader-wrapper {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    z-index: 1000;\r\n}\r\n\r\n#loader:before {\r\n    content: \"\";\r\n    position: absolute;\r\n    top: 5px;\r\n    left: 5px;\r\n    right: 5px;\r\n    bottom: 5px;\r\n    border-radius: 50%;\r\n    border: 3px solid transparent;\r\n    border-top-color: #20b948;\r\n    -webkit-animation: spin 3s linear infinite;\r\n    animation: spin 3s linear infinite;\r\n}\r\n\r\n#loader-wrapper .loader-section .section-left {\r\n    left: 0;\r\n}\r\n\r\n#loader-wrapper .loader-section .section-right {\r\n    right: 0;\r\n}\r\n\r\n#loader:after {\r\n    content: \"\";\r\n    position: absolute;\r\n    top: 15px;\r\n    left: 15px;\r\n    right: 15px;\r\n    bottom: 15px;\r\n    border-radius: 50%;\r\n    border: 3px solid transparent;\r\n    border-top-color: #2a4264;\r\n    -webkit-animation: spin 1.5s linear infinite;\r\n    animation: spin 1.5s linear infinite;\r\n}\r\n\r\n#loader {\r\n    display: block;\r\n    position: relative;\r\n    left: 50%;\r\n    top: 50%;\r\n    width: 150px;\r\n    height: 150px;\r\n    margin: -75px 0 0 -75px;\r\n    border-radius: 50%;\r\n    border: 3px solid transparent;\r\n    border-top-color: #222222;\r\n    -webkit-animation: spin 2s linear infinite;\r\n    animation: spin 2s linear infinite;\r\n    z-index: 1001;\r\n}\r\n\r\n#loader-wrapper .loader-section {\r\n    position: fixed !important;\r\n    top: 0 !important;\r\n    width: 51% !important;\r\n    height: 100% !important;\r\n    background: #fff !important;\r\n    z-index: 1000 !important;\r\n    -webkit-transform: translateX(0);\r\n    transform: translateX(0);\r\n}\r\n\r\n.loaded #loader-wrapper {\r\n    visibility: hidden;\r\n    transition: all 0.6s 0s ease-out;\r\n}\r\n\r\n#storyButton {\r\n    color: #2a4264;\r\n    border-radius: 4px;\r\n    background-color: #fff;\r\n    border: 2px solid #2a4264;\r\n    text-decoration: none;\r\n    font-size: 1.2em;\r\n    margin-top: 20px;\r\n    padding: 10px 30px;\r\n    transition: ease all .6s;\r\n    font-family: \"Open Sans\", \"Multi\", Helvetica, sans-serif;\r\n    font-weight: 700;\r\n    text-align: center;\r\n    margin-right: 10px;\r\n}\r\n\r\n#nav {\r\n    position: relative;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n}\r\n\r\n#menu-toggle {\r\n    font-size: 1.3em;\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1;\r\n            flex: 1;\r\n}\r\n\r\n#nav-logo {\r\n    text-align: center;\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1;\r\n            flex: 1;\r\n}\r\n\r\n#nav-logo h1 {\r\n    font-family: 'Oxygen';\r\n    font-weight: bolder;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\n#navbar-login {\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1;\r\n            flex: 1;\r\n    text-align: right;\r\n}\r\n\r\n#loginStatus {\r\n    text-decoration: none;\r\n    background-color: #2A4164;\r\n    font-size: 1em;\r\n    border: none;\r\n    color: #fff;\r\n    border-radius: 4px;\r\n    padding: 8px 20px;\r\n    position: relative;\r\n    float: none;\r\n}\r\n\r\n#login:hover {\r\n    background-color: #6986af;\r\n}\r\n\r\n#contact a,\r\n#moreInfo {\r\n    color: #2a4264;\r\n    border-radius: 4px;\r\n    background-color: #fff;\r\n    border: 2px solid #2a4264;\r\n    font-size: 1.2em;\r\n    margin-top: 20px;\r\n    margin: 0 auto;\r\n    padding: 20px 50px;\r\n    margin: 0 auto;\r\n    transition: ease all .6s;\r\n    font-family: \"Open Sans\", \"Multi\", Helvetica, sans-serif;\r\n    font-weight: 700;\r\n}\r\n\r\n#contact a:hover,\r\n#moreInfo:hover,\r\n#storyButton:hover {\r\n    border-color: #2a4264;\r\n    color: #f4f4f4;\r\n    background-color: #2a4264;\r\n    text-decoration: none;\r\n}\r\n\r\n.sidebar-nav>.sidebar-brand a:hover {\r\n    color: #fff;\r\n    background: none;\r\n}\r\n\r\n@media(min-width:768px) {\r\n    #wrapper {\r\n        padding-left: 0;\r\n    }\r\n    #wrapper.toggled {\r\n        padding-left: 250px;\r\n    }\r\n    #sidebar-wrapper {\r\n        width: 0px;\r\n    }\r\n    #page-content-wrapper {\r\n        padding: 20px;\r\n        position: relative;\r\n    }\r\n    #wrapper.toggled #page-content-wrapper {\r\n        position: relative;\r\n        margin-right: 0;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 40em) {\r\n    #left-column,\r\n    #right-column {\r\n        max-width: 100%;\r\n        margin-bottom: 30px;\r\n    }\r\n    #mobile-flip {\r\n        display: -webkit-box;\r\n        display: -ms-flexbox;\r\n        display: flex;\r\n        -webkit-box-orient: vertical;\r\n        -webkit-box-direction: reverse;\r\n            -ms-flex-direction: column-reverse;\r\n                flex-direction: column-reverse;\r\n    }\r\n}\r\n\r\n[class^=\"icon-\"],\r\n[class*=\" icon-\"] {\r\n    font-family: 'icomoon';\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    font-variant: normal;\r\n    text-transform: none;\r\n    line-height: 1;\r\n    /* Better Font Rendering =========== */\r\n    -webkit-font-smoothing: antialiased;\r\n    -moz-osx-font-smoothing: grayscale;\r\n}\r\n\r\n.form-control {\r\n    display: block;\r\n    width: 90%;\r\n    max-width: 500px;\r\n    height: 34px;\r\n    padding: 6px 12px;\r\n    font-size: 14px;\r\n    line-height: 1.42857143;\r\n    color: #555;\r\n    background-color: #fff;\r\n    background-image: none;\r\n    border: 1px solid #ccc;\r\n    border-radius: 4px;\r\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);\r\n    transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;\r\n}\r\n\r\n.form-control:focus {\r\n    border-color: #66afe9;\r\n    outline: 0;\r\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px rgba(102, 175, 233, .6);\r\n}\r\n\r\n.form-control::-moz-placeholder {\r\n    color: #999;\r\n    opacity: 1;\r\n}\r\n\r\n.form-control:-ms-input-placeholder {\r\n    color: #999;\r\n}\r\n\r\n.form-control::-webkit-input-placeholder {\r\n    color: #999;\r\n}\r\n\r\n.form-control::-ms-expand {\r\n    background-color: transparent;\r\n    border: 0;\r\n}\r\n\r\n.form-control[disabled],\r\n.form-control[readonly],\r\nfieldset[disabled] .form-control {\r\n    background-color: #eee;\r\n    opacity: 1;\r\n}\r\n\r\n.form-control[disabled],\r\nfieldset[disabled] .form-control {\r\n    cursor: not-allowed;\r\n}\r\n\r\ntextarea.form-control {\r\n    height: auto;\r\n}\r\n\r\ninput[type=\"search\"] {\r\n    -webkit-appearance: none;\r\n}\r\n\r\n\r\n/* Loader */\r\n\r\n.chromeframe {\r\n    margin: 0.2em 0;\r\n    background: #ccc;\r\n    color: #000;\r\n    padding: 0.2em 0;\r\n}\r\n\r\n#loader-wrapper {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    z-index: 1000;\r\n}\r\n\r\n.loading {\r\n    opacity: 0;\r\n}\r\n\r\nmy-app:empty+.loading {\r\n    opacity: 1 !important;\r\n    z-index: 100;\r\n}\r\n\r\n#loader {\r\n    display: block;\r\n    position: relative;\r\n    left: 50%;\r\n    top: 50%;\r\n    width: 150px;\r\n    height: 150px;\r\n    margin: -75px 0 0 -75px;\r\n    border-radius: 50%;\r\n    border: 3px solid transparent;\r\n    border-top-color: #222222;\r\n    -webkit-animation: spin 2s linear infinite;\r\n    /* Chrome, Opera 15+, Safari 5+ */\r\n    animation: spin 2s linear infinite;\r\n    /* Chrome, Firefox 16+, IE 10+, Opera */\r\n    z-index: 1001;\r\n}\r\n\r\n#loader:before {\r\n    content: \"\";\r\n    position: absolute;\r\n    top: 5px;\r\n    left: 5px;\r\n    right: 5px;\r\n    bottom: 5px;\r\n    border-radius: 50%;\r\n    border: 3px solid transparent;\r\n    border-top-color: #20b948;\r\n    -webkit-animation: spin 3s linear infinite;\r\n    /* Chrome, Opera 15+, Safari 5+ */\r\n    animation: spin 3s linear infinite;\r\n    /* Chrome, Firefox 16+, IE 10+, Opera */\r\n}\r\n\r\n#loader:after {\r\n    content: \"\";\r\n    position: absolute;\r\n    top: 15px;\r\n    left: 15px;\r\n    right: 15px;\r\n    bottom: 15px;\r\n    border-radius: 50%;\r\n    border: 3px solid transparent;\r\n    border-top-color: #2a4264;\r\n    -webkit-animation: spin 1.5s linear infinite;\r\n    /* Chrome, Opera 15+, Safari 5+ */\r\n    animation: spin 1.5s linear infinite;\r\n    /* Chrome, Firefox 16+, IE 10+, Opera */\r\n}\r\n\r\n@-webkit-keyframes spin {\r\n    0% {\r\n        -webkit-transform: rotate(0deg);\r\n        /* Chrome, Opera 15+, Safari 3.1+ */\r\n        /* IE 9 */\r\n        transform: rotate(0deg);\r\n        /* Firefox 16+, IE 10+, Opera */\r\n    }\r\n    100% {\r\n        -webkit-transform: rotate(360deg);\r\n        /* Chrome, Opera 15+, Safari 3.1+ */\r\n        /* IE 9 */\r\n        transform: rotate(360deg);\r\n        /* Firefox 16+, IE 10+, Opera */\r\n    }\r\n}\r\n\r\n@keyframes spin {\r\n    0% {\r\n        -webkit-transform: rotate(0deg);\r\n        /* Chrome, Opera 15+, Safari 3.1+ */\r\n        /* IE 9 */\r\n        transform: rotate(0deg);\r\n        /* Firefox 16+, IE 10+, Opera */\r\n    }\r\n    100% {\r\n        -webkit-transform: rotate(360deg);\r\n        /* Chrome, Opera 15+, Safari 3.1+ */\r\n        /* IE 9 */\r\n        transform: rotate(360deg);\r\n        /* Firefox 16+, IE 10+, Opera */\r\n    }\r\n}\r\n\r\n#loader-wrapper .loader-section {\r\n    position: fixed;\r\n    top: 0;\r\n    width: 51%;\r\n    height: 100%;\r\n    background: #fff;\r\n    z-index: 1000;\r\n    -webkit-transform: translateX(0);\r\n    /* Chrome, Opera 15+, Safari 3.1+ */\r\n    /* IE 9 */\r\n    transform: translateX(0);\r\n    /* Firefox 16+, IE 10+, Opera */\r\n}\r\n\r\n#loader-wrapper .loader-section .section-left {\r\n    left: 0;\r\n}\r\n\r\n#loader-wrapper .loader-section .section-right {\r\n    right: 0;\r\n}\r\n\r\n\r\n/* Loaded */\r\n\r\n.loaded #loader {\r\n    opacity: 0;\r\n    transition: all 0.6s ease-out;\r\n}\r\n\r\n.loaded #loader-wrapper {\r\n    visibility: hidden;\r\n    transition: all 0.6s 0s ease-out;\r\n}\r\n\r\n\r\n/* JavaScript Turned Off */\r\n\r\n.no-js #loader-wrapper {\r\n    display: none;\r\n}\r\n\r\n.no-js h1 {\r\n    color: #222222;\r\n}\r\n\r\n#content {\r\n    margin: 0 auto;\r\n    padding-bottom: 50px;\r\n    width: 80%;\r\n    max-width: 978px;\r\n}\r\n\r\n.ir {\r\n    background-color: transparent;\r\n    border: 0;\r\n    overflow: hidden;\r\n    /* IE 6/7 fallback */\r\n    *text-indent: -9999px;\r\n}\r\n\r\n.ir:before {\r\n    content: \"\";\r\n    display: block;\r\n    width: 0;\r\n    height: 150%;\r\n}\r\n\r\n\r\n/*\r\n * Hide from both screenreaders and browsers: h5bp.com/u\r\n */\r\n\r\n.hidden {\r\n    display: none !important;\r\n    visibility: hidden;\r\n}\r\n\r\n\r\n/*\r\n * Hide only visually, but have it available for screenreaders: h5bp.com/v\r\n */\r\n\r\n.visuallyhidden {\r\n    border: 0;\r\n    clip: rect(0 0 0 0);\r\n    height: 1px;\r\n    margin: -1px;\r\n    overflow: hidden;\r\n    padding: 0;\r\n    position: absolute;\r\n    width: 1px;\r\n}\r\n\r\n\r\n/*\r\n * Extends the .visuallyhidden class to allow the element to be focusable\r\n * when navigated to via the keyboard: h5bp.com/p\r\n */\r\n\r\n.visuallyhidden.focusable:active,\r\n.visuallyhidden.focusable:focus {\r\n    clip: auto;\r\n    height: auto;\r\n    margin: 0;\r\n    overflow: visible;\r\n    position: static;\r\n    width: auto;\r\n}\r\n\r\n\r\n/*\r\n * Hide visually and from screenreaders, but maintain layout\r\n */\r\n\r\n.invisible {\r\n    visibility: hidden;\r\n}\r\n\r\n\r\n/*\r\n * Clearfix: contain floats\r\n *\r\n * For modern browsers\r\n * 1. The space content is one way to avoid an Opera bug when the\r\n *    `contenteditable` attribute is included anywhere else in the document.\r\n *    Otherwise it causes space to appear at the top and bottom of elements\r\n *    that receive the `clearfix` class.\r\n * 2. The use of `table` rather than `block` is only necessary if using\r\n *    `:before` to contain the top-margins of child elements.\r\n */\r\n\r\n.clearfix:before,\r\n.clearfix:after {\r\n    content: \" \";\r\n    /* 1 */\r\n    display: table;\r\n    /* 2 */\r\n}\r\n\r\n.clearfix:after {\r\n    clear: both;\r\n}\r\n\r\n\r\n/*\r\n * For IE 6/7 only\r\n * Include this rule to trigger hasLayout and contain floats.\r\n */\r\n\r\n.clearfix {\r\n    *zoom: 1;\r\n}\r\n\r\n\r\n/* ==========================================================================\r\n   EXAMPLE Media Queries for Responsive Design.\r\n   These examples override the primary ('mobile first') styles.\r\n   Modify as content requires.\r\n   ========================================================================== */\r\n\r\n@media only screen and (min-width: 35em) {\r\n    /* Style adjustments for viewports that meet the condition */\r\n}\r\n\r\n@media print,\r\n(-webkit-min-device-pixel-ratio: 1.25),\r\n(min-resolution: 120dpi) {\r\n    /* Style adjustments for high resolution devices */\r\n}\r\n\r\n\r\n/* ==========================================================================\r\n   Print styles.\r\n   Inlined to avoid required HTTP connection: h5bp.com/r\r\n   ========================================================================== */\r\n\r\n@media print {\r\n    * {\r\n        background: transparent !important;\r\n        color: #000 !important;\r\n        /* Black prints faster: h5bp.com/s */\r\n        box-shadow: none !important;\r\n        text-shadow: none !important;\r\n    }\r\n    a,\r\n    a:visited {\r\n        text-decoration: underline;\r\n    }\r\n    a[href]:after {\r\n        content: \" (\" attr(href) \")\";\r\n    }\r\n    abbr[title]:after {\r\n        content: \" (\" attr(title) \")\";\r\n    }\r\n    /*\r\n     * Don't show links for images, or javascript/internal links\r\n     */\r\n    .ir a:after,\r\n    a[href^=\"javascript:\"]:after,\r\n    a[href^=\"#\"]:after {\r\n        content: \"\";\r\n    }\r\n    pre,\r\n    blockquote {\r\n        border: 1px solid #999;\r\n        page-break-inside: avoid;\r\n    }\r\n    thead {\r\n        display: table-header-group;\r\n        /* h5bp.com/t */\r\n    }\r\n    tr,\r\n    img {\r\n        page-break-inside: avoid;\r\n    }\r\n    img {\r\n        max-width: 100% !important;\r\n    }\r\n    @page {\r\n        margin: 0.5cm;\r\n    }\r\n    p,\r\n    h2,\r\n    h3 {\r\n        orphans: 3;\r\n        widows: 3;\r\n    }\r\n    h2,\r\n    h3 {\r\n        page-break-after: avoid;\r\n    }\r\n}\r\n\r\n\r\n/* \r\n\tOk so you have made it this far, that means you are very keen to on my code. \r\n\tAnyway I don't really mind it. This is a great way to learn so you actually doing the right thing:)\r\n\tFollow me @ihatetomatoes\r\n*/\r\n\r\n\r\n/* ICONS */\r\n\r\n.icon-user:before {\r\n    content: \"\\E971\";\r\n    font-family: 'icomoon';\r\n}\r\n\r\n.icon-phone:before {\r\n    content: \"\\E942\";\r\n    font-family: 'icomoon';\r\n}\r\n\r\n.icon-users:before {\r\n    content: \"\\E972\";\r\n    font-family: 'icomoon';\r\n}\r\n\r\n.icon-binoculars:before {\r\n    content: \"\\E985\";\r\n    font-family: 'icomoon';\r\n}\r\n\r\n.icon-equalizer:before {\r\n    content: \"\\E992\";\r\n    font-family: 'icomoon';\r\n}", ""]);

// exports


/***/ }),

/***/ "../../../../css-loader/lib/css-base.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "../../../../style-loader/addStyles.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("../../../../../src/styles.css");
module.exports = __webpack_require__("../../../../../src/fonts.css");


/***/ })

},[3]);
//# sourceMappingURL=styles.bundle.js.map