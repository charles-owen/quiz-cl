"use strict";
(self["webpackChunkcse335"] = self["webpackChunkcse335"] || []).push([["Quiz"],{

/***/ "./.yarn/__virtual__/babel-loader-virtual-58a043f32a/0/cache/babel-loader-npm-9.1.0-6467162cbf-774758febd.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./.yarn/__virtual__/vue-loader-virtual-a1a4b187c3/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./vendor/cl/quiz/js/Vue/Answer.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./.yarn/__virtual__/babel-loader-virtual-58a043f32a/0/cache/babel-loader-npm-9.1.0-6467162cbf-774758febd.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./.yarn/__virtual__/vue-loader-virtual-a1a4b187c3/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./vendor/cl/quiz/js/Vue/Answer.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _States__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../States */ "./vendor/cl/quiz/js/States.js");
/* harmony import */ var _Results_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Results.vue */ "./vendor/cl/quiz/js/Vue/Results.vue");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {};
  },
  props: ['quiz'],
  components: {
    'results': _Results_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  methods: {
    submit: function submit() {
      if (this.quiz.question < this.quiz.length) {
        this.$emit('new-state', _States__WEBPACK_IMPORTED_MODULE_0__.States.QUESTION);
      }
    },
    retake: function retake() {
      window.location.reload(true);
    }
  }
});

/***/ }),

/***/ "./.yarn/__virtual__/babel-loader-virtual-58a043f32a/0/cache/babel-loader-npm-9.1.0-6467162cbf-774758febd.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./.yarn/__virtual__/vue-loader-virtual-a1a4b187c3/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./vendor/cl/quiz/js/Vue/Closed.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./.yarn/__virtual__/babel-loader-virtual-58a043f32a/0/cache/babel-loader-npm-9.1.0-6467162cbf-774758febd.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./.yarn/__virtual__/vue-loader-virtual-a1a4b187c3/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./vendor/cl/quiz/js/Vue/Closed.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _States__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../States */ "./vendor/cl/quiz/js/States.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['quiz']
});

/***/ }),

/***/ "./.yarn/__virtual__/babel-loader-virtual-58a043f32a/0/cache/babel-loader-npm-9.1.0-6467162cbf-774758febd.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./.yarn/__virtual__/vue-loader-virtual-a1a4b187c3/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./vendor/cl/quiz/js/Vue/Expired.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./.yarn/__virtual__/babel-loader-virtual-58a043f32a/0/cache/babel-loader-npm-9.1.0-6467162cbf-774758febd.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./.yarn/__virtual__/vue-loader-virtual-a1a4b187c3/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./vendor/cl/quiz/js/Vue/Expired.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _States__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../States */ "./vendor/cl/quiz/js/States.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['quiz'],
  methods: {
    proceed: function proceed() {
      this.$emit('new-state', _States__WEBPACK_IMPORTED_MODULE_0__.States.START);
    },
    results: function results() {
      this.$emit('new-state', _States__WEBPACK_IMPORTED_MODULE_0__.States.RESULTS);
    }
  }
});

/***/ }),

/***/ "./.yarn/__virtual__/babel-loader-virtual-58a043f32a/0/cache/babel-loader-npm-9.1.0-6467162cbf-774758febd.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./.yarn/__virtual__/vue-loader-virtual-a1a4b187c3/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./vendor/cl/quiz/js/Vue/Initial.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./.yarn/__virtual__/babel-loader-virtual-58a043f32a/0/cache/babel-loader-npm-9.1.0-6467162cbf-774758febd.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./.yarn/__virtual__/vue-loader-virtual-a1a4b187c3/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./vendor/cl/quiz/js/Vue/Initial.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _States__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../States */ "./vendor/cl/quiz/js/States.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['quiz'],
  data: function data() {
    return {
      'numTries': 0,
      'allowedTries': 0,
      'numFinished': 0
    };
  },
  mounted: function mounted() {
    this.allowedTries = +this.quiz['allowed-tries'];
    this.numTries = +this.quiz['num-tries'];
    this.numFinished = +this.quiz['num-finished'];
  },
  methods: {
    proceed: function proceed() {
      this.$emit('new-state', _States__WEBPACK_IMPORTED_MODULE_0__.States.START);
    },
    results: function results() {
      this.$emit('new-state', _States__WEBPACK_IMPORTED_MODULE_0__.States.RESULTS);
    }
  }
});

/***/ }),

/***/ "./.yarn/__virtual__/babel-loader-virtual-58a043f32a/0/cache/babel-loader-npm-9.1.0-6467162cbf-774758febd.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./.yarn/__virtual__/vue-loader-virtual-a1a4b187c3/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./vendor/cl/quiz/js/Vue/Preview.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./.yarn/__virtual__/babel-loader-virtual-58a043f32a/0/cache/babel-loader-npm-9.1.0-6467162cbf-774758febd.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./.yarn/__virtual__/vue-loader-virtual-a1a4b187c3/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./vendor/cl/quiz/js/Vue/Preview.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _QuizData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../QuizData */ "./vendor/cl/quiz/js/QuizData.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      question: null,
      comment: null,
      time: 0,
      mustProvideMessage: undefined
    };
  },
  props: ['quiz', 'file'],
  watch: {
    file: function file(newQuiz, oldQuiz) {
      this.fetch();
    }
  },
  mounted: function mounted() {
    this.fetch();
  },
  methods: {
    fetch: function fetch() {
      var _this = this;
      var query = {
        file: this.file
      };
      this.$site.api.get("/api/quiz/preview/".concat(this.quiz.token), query).then(function (response) {
        if (!response.hasError()) {
          var data = response.getData('quiz-question');
          _this.question = data.attributes.question;
          _this.time = data.attributes.time;
          _this.comment = data.attributes.comment;
          _this.answers = data.attributes.answers;
          _this.mustProvideMessage = data.attributes.mustProvideMessage;
          var after = document.getElementById('cl-quiz-after');
          if (after !== null) {
            after.innerHTML = data.attributes.after;
          }
          _this.$site.Vue.nextTick(function () {
            _this.$site.message('cl-quiz-after-installed', null);
          });
        } else {
          _this.$site.toast(_this, response);
        }
      })["catch"](function (error) {
        _this.$site.toast(_this, error);
      });
    },
    proceed: function proceed() {},
    submit: function submit() {
      var formData = _QuizData__WEBPACK_IMPORTED_MODULE_0__.QuizData.get(this, this.mustProvideMessage);
    }
  }
});

/***/ }),

/***/ "./.yarn/__virtual__/babel-loader-virtual-58a043f32a/0/cache/babel-loader-npm-9.1.0-6467162cbf-774758febd.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./.yarn/__virtual__/vue-loader-virtual-a1a4b187c3/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./vendor/cl/quiz/js/Vue/Previewer.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./.yarn/__virtual__/babel-loader-virtual-58a043f32a/0/cache/babel-loader-npm-9.1.0-6467162cbf-774758febd.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./.yarn/__virtual__/vue-loader-virtual-a1a4b187c3/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./vendor/cl/quiz/js/Vue/Previewer.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['quiz'],
  data: function data() {
    return {
      previews: []
    };
  },
  mounted: function mounted() {
    for (var i = 0; i < this.quiz.preview.length; i++) {
      this.previews.push({
        num: i + 1,
        files: this.quiz.preview[i]
      });
    }
  },
  methods: {
    preview: function preview(file) {
      this.$emit('preview', file);
    }
  }
});

/***/ }),

/***/ "./.yarn/__virtual__/babel-loader-virtual-58a043f32a/0/cache/babel-loader-npm-9.1.0-6467162cbf-774758febd.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./.yarn/__virtual__/vue-loader-virtual-a1a4b187c3/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./vendor/cl/quiz/js/Vue/Question.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./.yarn/__virtual__/babel-loader-virtual-58a043f32a/0/cache/babel-loader-npm-9.1.0-6467162cbf-774758febd.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./.yarn/__virtual__/vue-loader-virtual-a1a4b187c3/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./vendor/cl/quiz/js/Vue/Question.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _QuizData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../QuizData */ "./vendor/cl/quiz/js/QuizData.js");
/* harmony import */ var _States__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../States */ "./vendor/cl/quiz/js/States.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      active: null,
      question: null,
      time: 0,
      mustProvideMessage: undefined,
      remainingMinutes: null,
      remainingSeconds: null,
      remainingSecondsStr: null
    };
  },
  props: ['quiz'],
  mounted: function mounted() {
    var _this = this;
    this.$site.api.post("/api/quiz/question/".concat(this.quiz.token, "/").concat(this.quiz.question), {}).then(function (response) {
      if (!response.hasError()) {
        var data = response.getData('quiz-question');
        _this.take(data.attributes);
      } else {
        _this.$site.toast(_this, response);
      }
    })["catch"](function (error) {
      _this.$site.toast(_this, error);
    });
  },
  methods: {
    take: function take(data) {
      var _this2 = this;
      this.active = true;
      this.question = data.question;
      this.time = data.time;
      this.mustProvideMessage = data.mustProvideMessage;
      var after = document.getElementById('cl-quiz-after');
      if (after !== null && data.after !== undefined) {
        after.innerHTML = data.after;
      }

      // Support indicating to external Javascript that a quiz
      // question has been installed.
      this.$site.Vue.nextTick(function () {
        _this2.$site.message('cl-quiz-after-installed', null);
      });
      if (this.quiz.lightning !== null) {
        this.remainingMinutes = Math.floor(this.quiz.lightning / 60);
        this.remainingSeconds = this.quiz.lightning % 60;
        this.remainingSecondsStr = this.remainingSeconds < 10 ? '0' + this.remainingSeconds : this.remainingSeconds;
        this.timer();
      }
    },
    timer: function timer() {
      var _this3 = this;
      setTimeout(function () {
        if (!_this3.active) {
          return;
        }
        _this3.remainingSeconds--;
        _this3.remainingSecondsStr = _this3.remainingSeconds < 10 ? '0' + _this3.remainingSeconds : _this3.remainingSeconds;
        if (_this3.remainingSeconds === 0 && _this3.remainingMinutes === 0) {
          // Question has timed out
          _this3.$emit('new-state', _States__WEBPACK_IMPORTED_MODULE_1__.States.QUESTION);
          return;
        }
        if (_this3.remainingSeconds < 0) {
          _this3.remainingMinutes--;
          _this3.remainingSeconds = 59;
          _this3.remainingSecondsStr = '59';
        }
        _this3.timer();
      }, 1000);
    },
    proceed: function proceed() {},
    submit: function submit() {
      var _this4 = this;
      var formData = _QuizData__WEBPACK_IMPORTED_MODULE_0__.QuizData.get(this, this.mustProvideMessage);
      if (formData === null) {
        return;
      }
      this.$site.api.post("/api/quiz/answer/".concat(this.quiz.token, "/").concat(this.quiz.question), formData).then(function (response) {
        if (!response.hasError()) {
          var data = response.getData('quiz-answer');
          _this4.active = false;
          _this4.$emit('answer', data);
        } else {
          _this4.$site.toast(_this4, response);
        }
      })["catch"](function (error) {
        _this4.$site.toast(_this4, error);
      });
    }
  }
});

/***/ }),

/***/ "./.yarn/__virtual__/babel-loader-virtual-58a043f32a/0/cache/babel-loader-npm-9.1.0-6467162cbf-774758febd.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./.yarn/__virtual__/vue-loader-virtual-a1a4b187c3/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./vendor/cl/quiz/js/Vue/Results.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./.yarn/__virtual__/babel-loader-virtual-58a043f32a/0/cache/babel-loader-npm-9.1.0-6467162cbf-774758febd.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./.yarn/__virtual__/vue-loader-virtual-a1a4b187c3/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./vendor/cl/quiz/js/Vue/Results.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['quiz'],
  data: function data() {
    return {
      tries: null,
      high: 0
    };
  },
  mounted: function mounted() {
    var _this = this;
    this.$site.api.get("/api/quiz/results/".concat(this.quiz.assigntag, "/").concat(this.quiz.quiztag), {}).then(function (response) {
      if (!response.hasError()) {
        var data = response.getData('quiz-results');
        _this.tries = data.attributes.tries;
        _this.high = 0;
        var _iterator = _createForOfIteratorHelper(_this.tries),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var tried = _step.value;
            if (+tried.points > +_this.high) {
              _this.high = tried.points;
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      } else {
        _this.$site.toast(_this, response);
      }
    })["catch"](function (error) {
      _this.$site.toast(_this, error);
    });
  },
  methods: {
    time: function time(value) {
      return this.$site.TimeFormatter.relativeUNIX(value);
    },
    elapsed: function elapsed(start, end) {
      if (end === null) {
        return '';
      }
      var diff = end - start;
      var min = Math.floor(diff / 60);
      var sec = diff % 60;
      return '' + min + ':' + (sec < 10 ? '0' : '') + sec;
    }
  }
});

/***/ }),

/***/ "./.yarn/__virtual__/babel-loader-virtual-58a043f32a/0/cache/babel-loader-npm-9.1.0-6467162cbf-774758febd.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./.yarn/__virtual__/vue-loader-virtual-efc584a4ba/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./.yarn/__virtual__/vue-loader-virtual-a1a4b187c3/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./vendor/cl/quiz/js/Vue/Answer.vue?vue&type=template&id=31200b40":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./.yarn/__virtual__/babel-loader-virtual-58a043f32a/0/cache/babel-loader-npm-9.1.0-6467162cbf-774758febd.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./.yarn/__virtual__/vue-loader-virtual-efc584a4ba/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./.yarn/__virtual__/vue-loader-virtual-a1a4b187c3/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./vendor/cl/quiz/js/Vue/Answer.vue?vue&type=template&id=31200b40 ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./.yarn/cache/vue-npm-3.2.45-06b4b60efe-df60ca80cb.zip/node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  key: 0
};
var _hoisted_2 = ["innerHTML"];
var _hoisted_3 = {
  key: 0
};
var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "submit"
}, "Next Question", -1 /* HOISTED */);
var _hoisted_5 = [_hoisted_4];
var _hoisted_6 = {
  key: 1
};
var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "done"
}, "This Quiz is Complete", -1 /* HOISTED */);
var _hoisted_8 = {
  "class": "center"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_results = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("results");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [$props.quiz.length > 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("h2", _hoisted_1, "Question " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.quiz.question) + " of " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.quiz.length), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
    ref: "form",
    method: "post",
    onSubmit: _cache[0] || (_cache[0] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $options.submit && $options.submit.apply($options, arguments);
    }, ["prevent"]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    innerHTML: $props.quiz.answer
  }, null, 8 /* PROPS */, _hoisted_2), $props.quiz.question < $props.quiz.length ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", _hoisted_3, _hoisted_5)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 544 /* HYDRATE_EVENTS, NEED_PATCH */), $props.quiz.question >= $props.quiz.length ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_6, [_hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("You may "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    onClick: _cache[1] || (_cache[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $options.retake && $options.retake.apply($options, arguments);
    }, ["prevent"]))
  }, "retake the quiz"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" if you wish")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_results, {
    quiz: $props.quiz
  }, null, 8 /* PROPS */, ["quiz"])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]);
}

/***/ }),

/***/ "./.yarn/__virtual__/babel-loader-virtual-58a043f32a/0/cache/babel-loader-npm-9.1.0-6467162cbf-774758febd.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./.yarn/__virtual__/vue-loader-virtual-efc584a4ba/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./.yarn/__virtual__/vue-loader-virtual-a1a4b187c3/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./vendor/cl/quiz/js/Vue/Closed.vue?vue&type=template&id=3397150e":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./.yarn/__virtual__/babel-loader-virtual-58a043f32a/0/cache/babel-loader-npm-9.1.0-6467162cbf-774758febd.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./.yarn/__virtual__/vue-loader-virtual-efc584a4ba/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./.yarn/__virtual__/vue-loader-virtual-a1a4b187c3/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./vendor/cl/quiz/js/Vue/Closed.vue?vue&type=template&id=3397150e ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./.yarn/cache/vue-npm-3.2.45-06b4b60efe-df60ca80cb.zip/node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "centerbox comp center"
}, "The quiz is closed and not available at this time.", -1 /* HOISTED */);
var _hoisted_2 = [_hoisted_1];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, _hoisted_2);
}

/***/ }),

/***/ "./.yarn/__virtual__/babel-loader-virtual-58a043f32a/0/cache/babel-loader-npm-9.1.0-6467162cbf-774758febd.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./.yarn/__virtual__/vue-loader-virtual-efc584a4ba/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./.yarn/__virtual__/vue-loader-virtual-a1a4b187c3/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./vendor/cl/quiz/js/Vue/Expired.vue?vue&type=template&id=163d0973":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./.yarn/__virtual__/babel-loader-virtual-58a043f32a/0/cache/babel-loader-npm-9.1.0-6467162cbf-774758febd.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./.yarn/__virtual__/vue-loader-virtual-efc584a4ba/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./.yarn/__virtual__/vue-loader-virtual-a1a4b187c3/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./vendor/cl/quiz/js/Vue/Expired.vue?vue&type=template&id=163d0973 ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./.yarn/cache/vue-npm-3.2.45-06b4b60efe-df60ca80cb.zip/node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "centerbox comp"
}, "The quiz has expired and can no longer be taken. Quizzes expire at the time the assignment is due. ", -1 /* HOISTED */);
var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "You can proceed through the quiz for practice purposes, but new grades and submissions will not be possible.", -1 /* HOISTED */);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [_hoisted_1, _hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("When ready, "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    onClick: _cache[0] || (_cache[0] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
      return $options.proceed();
    }, ["prevent"]))
  }, "click to proceed to the quiz."), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" You can also "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    onClick: _cache[1] || (_cache[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
      return $options.results();
    }, ["prevent"]))
  }, "jump directly to your quiz results.")])]);
}

/***/ }),

/***/ "./.yarn/__virtual__/babel-loader-virtual-58a043f32a/0/cache/babel-loader-npm-9.1.0-6467162cbf-774758febd.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./.yarn/__virtual__/vue-loader-virtual-efc584a4ba/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./.yarn/__virtual__/vue-loader-virtual-a1a4b187c3/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./vendor/cl/quiz/js/Vue/Initial.vue?vue&type=template&id=65449212":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./.yarn/__virtual__/babel-loader-virtual-58a043f32a/0/cache/babel-loader-npm-9.1.0-6467162cbf-774758febd.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./.yarn/__virtual__/vue-loader-virtual-efc584a4ba/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./.yarn/__virtual__/vue-loader-virtual-a1a4b187c3/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./vendor/cl/quiz/js/Vue/Initial.vue?vue&type=template&id=65449212 ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./.yarn/cache/vue-npm-3.2.45-06b4b60efe-df60ca80cb.zip/node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = ["innerHTML"];
var _hoisted_2 = {
  key: 0,
  "class": "center"
};
var _hoisted_3 = {
  key: 1,
  "class": "centerbox seconda center"
};
var _hoisted_4 = {
  key: 2
};
var _hoisted_5 = {
  key: 0,
  "class": "center"
};
var _hoisted_6 = {
  key: 1
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    innerHTML: $props.quiz.splash
  }, null, 8 /* PROPS */, _hoisted_1), $props.quiz.lightning === null ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", _hoisted_2, "This quiz has no specified time limit.")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $props.quiz.lightning !== null ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", _hoisted_3, "This is a lightning quiz. You have " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.quiz.lightning) + " seconds to answer each question.", 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _ctx.allowedTries === 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("When ready, "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    onClick: _cache[0] || (_cache[0] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
      return $options.proceed();
    }, ["prevent"]))
  }, "click to proceed to the quiz."), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" You can also "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    onClick: _cache[1] || (_cache[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
      return $options.results();
    }, ["prevent"]))
  }, "jump directly to your quiz results.")])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 3
  }, [_ctx.numTries < _ctx.allowedTries ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 0
  }, [_ctx.allowedTries > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", _hoisted_5, "You have " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.allowedTries - _ctx.numTries) + " " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.allowedTries - _ctx.numTries > 1 ? 'tries' : 'try') + " left.", 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("When ready, "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    onClick: _cache[2] || (_cache[2] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
      return $options.proceed();
    }, ["prevent"]))
  }, "click to proceed to the quiz."), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" You can also "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    onClick: _cache[3] || (_cache[3] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
      return $options.results();
    }, ["prevent"]))
  }, "jump directly to your quiz results.")])], 64 /* STABLE_FRAGMENT */)) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("You have completed your maximum number of tries for this quiz and can no longer take it. You can "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    onClick: _cache[4] || (_cache[4] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
      return $options.results();
    }, ["prevent"]))
  }, "jump directly to your quiz results.")]))], 64 /* STABLE_FRAGMENT */))]);
}

/***/ }),

/***/ "./.yarn/__virtual__/babel-loader-virtual-58a043f32a/0/cache/babel-loader-npm-9.1.0-6467162cbf-774758febd.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./.yarn/__virtual__/vue-loader-virtual-efc584a4ba/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./.yarn/__virtual__/vue-loader-virtual-a1a4b187c3/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./vendor/cl/quiz/js/Vue/Preview.vue?vue&type=template&id=626b86d4":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./.yarn/__virtual__/babel-loader-virtual-58a043f32a/0/cache/babel-loader-npm-9.1.0-6467162cbf-774758febd.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./.yarn/__virtual__/vue-loader-virtual-efc584a4ba/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./.yarn/__virtual__/vue-loader-virtual-a1a4b187c3/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./vendor/cl/quiz/js/Vue/Preview.vue?vue&type=template&id=626b86d4 ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./.yarn/cache/vue-npm-3.2.45-06b4b60efe-df60ca80cb.zip/node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "preview"
};
var _hoisted_2 = {
  key: 0
};
var _hoisted_3 = {
  key: 0,
  "class": "preview"
};
var _hoisted_4 = ["value"];
var _hoisted_5 = ["innerHTML"];
var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "submit"
}, "Submit")], -1 /* HOISTED */);
var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("hr", null, null, -1 /* HOISTED */);
var _hoisted_8 = {
  key: 0
};
var _hoisted_9 = ["innerHTML"];
var _hoisted_10 = {
  key: 1
};
var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", null, "Comment", -1 /* HOISTED */);
var _hoisted_12 = ["innerHTML"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [_ctx.question !== null ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_2, [$props.quiz.length > 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", _hoisted_3, "Preview of " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.quiz.question) + ". Available to staff only.", 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
    ref: "form",
    method: "post",
    onSubmit: _cache[0] || (_cache[0] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $options.submit && $options.submit.apply($options, arguments);
    }, ["prevent"]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "hidden",
    name: "question-time",
    value: _ctx.time
  }, null, 8 /* PROPS */, _hoisted_4), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    innerHTML: _ctx.question
  }, null, 8 /* PROPS */, _hoisted_5), _hoisted_6, _hoisted_7, _ctx.answers.length > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("h3", _hoisted_8, "Answers")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.answers, function (answer) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      innerHTML: answer
    }, null, 8 /* PROPS */, _hoisted_9)]);
  }), 256 /* UNKEYED_FRAGMENT */)), _ctx.comment !== null ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_10, [_hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    innerHTML: _ctx.comment,
    "class": "centerbox primary"
  }, null, 8 /* PROPS */, _hoisted_12)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 544 /* HYDRATE_EVENTS, NEED_PATCH */)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]);
}

/***/ }),

/***/ "./.yarn/__virtual__/babel-loader-virtual-58a043f32a/0/cache/babel-loader-npm-9.1.0-6467162cbf-774758febd.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./.yarn/__virtual__/vue-loader-virtual-efc584a4ba/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./.yarn/__virtual__/vue-loader-virtual-a1a4b187c3/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./vendor/cl/quiz/js/Vue/Previewer.vue?vue&type=template&id=baa0b97a":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./.yarn/__virtual__/babel-loader-virtual-58a043f32a/0/cache/babel-loader-npm-9.1.0-6467162cbf-774758febd.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./.yarn/__virtual__/vue-loader-virtual-efc584a4ba/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./.yarn/__virtual__/vue-loader-virtual-a1a4b187c3/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./vendor/cl/quiz/js/Vue/Previewer.vue?vue&type=template&id=baa0b97a ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./.yarn/cache/vue-npm-3.2.45-06b4b60efe-df60ca80cb.zip/node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "previewer"
};
var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", null, "Staff Question Previews", -1 /* HOISTED */);
var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("These links allow you to preview quiz questions. If the question is randomly selected from multiple files, the files appear below the question. "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "smallred"
}, "This part of the page appears for staff members only.")], -1 /* HOISTED */);
var _hoisted_4 = {
  "class": "small"
};
var _hoisted_5 = {
  key: 0
};
var _hoisted_6 = ["onClick"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [_hoisted_2, _hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.previews, function (question) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      key: question.num
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", null, "Question " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(question.num), 1 /* TEXT */), question.files.length > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("ul", _hoisted_5, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(question.files, function (file) {
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
        onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
          return $options.preview(file);
        }, ["prevent"])
      }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(file), 9 /* TEXT, PROPS */, _hoisted_6)]);
    }), 256 /* UNKEYED_FRAGMENT */))])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]);
  }), 128 /* KEYED_FRAGMENT */))])]);
}

/***/ }),

/***/ "./.yarn/__virtual__/babel-loader-virtual-58a043f32a/0/cache/babel-loader-npm-9.1.0-6467162cbf-774758febd.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./.yarn/__virtual__/vue-loader-virtual-efc584a4ba/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./.yarn/__virtual__/vue-loader-virtual-a1a4b187c3/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./vendor/cl/quiz/js/Vue/Question.vue?vue&type=template&id=54140808":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./.yarn/__virtual__/babel-loader-virtual-58a043f32a/0/cache/babel-loader-npm-9.1.0-6467162cbf-774758febd.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./.yarn/__virtual__/vue-loader-virtual-efc584a4ba/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./.yarn/__virtual__/vue-loader-virtual-a1a4b187c3/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./vendor/cl/quiz/js/Vue/Question.vue?vue&type=template&id=54140808 ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./.yarn/cache/vue-npm-3.2.45-06b4b60efe-df60ca80cb.zip/node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  key: 0
};
var _hoisted_2 = {
  key: 0
};
var _hoisted_3 = {
  key: 1,
  "class": "center"
};
var _hoisted_4 = ["value"];
var _hoisted_5 = ["innerHTML"];
var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "submit"
}, "Submit")], -1 /* HOISTED */);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [_ctx.question !== null ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [$props.quiz.length > 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("h2", _hoisted_2, "Question " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.quiz.question) + " of " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.quiz.length), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _ctx.remainingSeconds !== null ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", _hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.remainingMinutes) + ":" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.remainingSecondsStr) + " remaining!", 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
    ref: "form",
    method: "post",
    onSubmit: _cache[0] || (_cache[0] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $options.submit && $options.submit.apply($options, arguments);
    }, ["prevent"]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "hidden",
    name: "question-time",
    value: _ctx.time
  }, null, 8 /* PROPS */, _hoisted_4), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    innerHTML: _ctx.question
  }, null, 8 /* PROPS */, _hoisted_5), _hoisted_6], 544 /* HYDRATE_EVENTS, NEED_PATCH */)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]);
}

/***/ }),

/***/ "./.yarn/__virtual__/babel-loader-virtual-58a043f32a/0/cache/babel-loader-npm-9.1.0-6467162cbf-774758febd.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./.yarn/__virtual__/vue-loader-virtual-efc584a4ba/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./.yarn/__virtual__/vue-loader-virtual-a1a4b187c3/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./vendor/cl/quiz/js/Vue/Results.vue?vue&type=template&id=066e6478":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./.yarn/__virtual__/babel-loader-virtual-58a043f32a/0/cache/babel-loader-npm-9.1.0-6467162cbf-774758febd.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./.yarn/__virtual__/vue-loader-virtual-efc584a4ba/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./.yarn/__virtual__/vue-loader-virtual-a1a4b187c3/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./vendor/cl/quiz/js/Vue/Results.vue?vue&type=template&id=066e6478 ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./.yarn/cache/vue-npm-3.2.45-06b4b60efe-df60ca80cb.zip/node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "cl-results"
};
var _hoisted_2 = {
  key: 0
};
var _hoisted_3 = {
  "class": "small center"
};
var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "center"
}, "When Taken"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Finished?"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Points")], -1 /* HOISTED */);
var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("caption", null, "Results for Quiz", -1 /* HOISTED */);
var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "If a value is indicated in the Finished? column, the quiz was completed in that amount of time (in minutes and seconds).", -1 /* HOISTED */);
var _hoisted_7 = {
  key: 1,
  "class": "centerbox primary center"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [_ctx.tries !== null && _ctx.tries.length > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Your current best score for this quiz is " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.high) + "/" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.quiz.points) + ". The system retains your best result as your grade for a quiz.", 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_3, [_hoisted_4, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.tries, function (tried) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.high > 0 && tried.points === _ctx.high ? 'best' : '')
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.time(tried.start)), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.elapsed(tried.start, tried.end)), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(tried.points), 1 /* TEXT */)], 2 /* CLASS */);
  }), 256 /* UNKEYED_FRAGMENT */)), _hoisted_5]), _hoisted_6])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _ctx.tries !== null && _ctx.tries.length === 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", _hoisted_7, "You have not yet completed the quiz, yet, so you do not have a score.")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]);
}

/***/ }),

/***/ "./vendor/cl/quiz/index.js":
/*!*********************************!*\
  !*** ./vendor/cl/quiz/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_QuizFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/QuizFactory */ "./vendor/cl/quiz/js/QuizFactory.js");
/**
 * @file
 * The main Quiz entry point
 */


if (!Site.Quiz) {
  //
  // Create the Quiz components
  //
  Site.Quiz = _js_QuizFactory__WEBPACK_IMPORTED_MODULE_0__.QuizFactory.create(Site);
}

/***/ }),

/***/ "./vendor/cl/quiz/js/Quiz.js":
/*!***********************************!*\
  !*** ./vendor/cl/quiz/js/Quiz.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Quiz": () => (/* binding */ Quiz)
/* harmony export */ });
/* harmony import */ var _quiz_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_quiz.scss */ "./vendor/cl/quiz/_quiz.scss");
/* harmony import */ var _Vue_Initial_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Vue/Initial.vue */ "./vendor/cl/quiz/js/Vue/Initial.vue");
/* harmony import */ var _Vue_Question_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Vue/Question.vue */ "./vendor/cl/quiz/js/Vue/Question.vue");
/* harmony import */ var _Vue_Answer_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Vue/Answer.vue */ "./vendor/cl/quiz/js/Vue/Answer.vue");
/* harmony import */ var _Vue_Expired_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Vue/Expired.vue */ "./vendor/cl/quiz/js/Vue/Expired.vue");
/* harmony import */ var _Vue_Closed_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Vue/Closed.vue */ "./vendor/cl/quiz/js/Vue/Closed.vue");
/* harmony import */ var _Vue_Results_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Vue/Results.vue */ "./vendor/cl/quiz/js/Vue/Results.vue");
/* harmony import */ var _Vue_Previewer_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Vue/Previewer.vue */ "./vendor/cl/quiz/js/Vue/Previewer.vue");
/* harmony import */ var _Vue_Preview_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Vue/Preview.vue */ "./vendor/cl/quiz/js/Vue/Preview.vue");
/* harmony import */ var _States__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./States */ "./vendor/cl/quiz/js/States.js");











/**
 * Quiz presentation Vue
 * @param site Site object
 * @constructor
 */
var Quiz = function Quiz(site) {
  var VueHelper = site.VueHelper;
  this.initialize = function (element) {
    var quiz = JSON.parse(element.textContent);
    var template = "\n<div class=\"cl-quiz\">\n  <component :is=\"page\" :quiz=\"quiz\" :file=\"file\" v-on:answer=\"answer($event)\" v-on:new-state=\"newState($event)\"></component>\n  <previewer v-if=\"quiz.preview !== undefined\" :quiz=\"quiz\" v-on:preview=\"preview($event)\"></previewer>\n</div>";
    var app = VueHelper.createApp({
      template: template,
      data: function data() {
        return {
          quiz: quiz,
          state: _States__WEBPACK_IMPORTED_MODULE_9__.States.INITIAL,
          page: 'initial',
          file: null,
          after: null
        };
      },
      components: {
        'initial': _Vue_Initial_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
        'question': _Vue_Question_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
        'answer': _Vue_Answer_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
        'expired': _Vue_Expired_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
        'closed': _Vue_Closed_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
        'results': _Vue_Results_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
        'previewer': _Vue_Previewer_vue__WEBPACK_IMPORTED_MODULE_7__["default"],
        'preview': _Vue_Preview_vue__WEBPACK_IMPORTED_MODULE_8__["default"]
      },
      mounted: function mounted() {
        if (this.quiz.expired === true) {
          this.page = 'expired';
        } else if (this.quiz.closed === true) {
          this.page = 'closed';
        }
        this.after = document.getElementById('cl-quiz-after');
        if (this.after !== null) {
          this.after.innerHTML = '';
        }
      },
      methods: {
        newState: function newState(state) {
          switch (state) {
            case _States__WEBPACK_IMPORTED_MODULE_9__.States.START:
              this.start();
              break;
            case _States__WEBPACK_IMPORTED_MODULE_9__.States.QUESTION:
              if (this.quiz.question < this.quiz.length) {
                this.quiz.question++;
                this.page = 'question';
              } else {
                this.page = 'results';
                this.state = state;
                if (this.after !== null) {
                  this.after.innerHTML = '';
                }
              }
              break;
            case _States__WEBPACK_IMPORTED_MODULE_9__.States.RESULTS:
              this.page = 'results';
              this.state = state;
              if (this.after !== null) {
                this.after.innerHTML = '';
              }
              break;
          }
        },
        start: function start() {
          this.state = _States__WEBPACK_IMPORTED_MODULE_9__.States.QUESTION;
          this.quiz.question = 1;
          this.page = 'question';
        },
        answer: function answer(data) {
          this.state = _States__WEBPACK_IMPORTED_MODULE_9__.States.ANSWER;
          this.page = 'answer';
          this.quiz.answer = data.attributes.answer;
        },
        preview: function preview(file) {
          this.file = file;
          this.quiz.question = file;
          this.state = _States__WEBPACK_IMPORTED_MODULE_9__.States.PREVIEW;
          this.page = 'preview';
        }
      }
    });
    app.config.globalProperties.$site = site;
    VueHelper.mount(app, element);
  };
};

/***/ }),

/***/ "./vendor/cl/quiz/js/QuizData.js":
/*!***************************************!*\
  !*** ./vendor/cl/quiz/js/QuizData.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuizData": () => (/* binding */ QuizData)
/* harmony export */ });
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var QuizData = function QuizData() {};

/**
 * Get the form data for a question or preview. Validates that an answer is supplied
 *
 * @param vue Vue this is getting the form from
 * @returns FormData object or null if validation fails.
 */
QuizData.get = function (vue, mustProvideMessage) {
  var form = vue.$refs['form'];
  var formData = new FormData(form);

  // Validate all controls of class cl-answer-required as having input
  var _iterator = _createForOfIteratorHelper(form.querySelectorAll('input.cl-answer-required')),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var input = _step.value;
      // Validate that an answer has been supplied IF a form control
      // named cl-answer exists.
      var answer = formData.get(input.name);
      if (answer === null || answer === '') {
        if (mustProvideMessage !== undefined) {
          vue.$site.toast(vue, mustProvideMessage);
          return null;
        }
        switch (input.type) {
          case 'radio':
            vue.$site.toast(vue, 'You must choose an option');
            break;
          default:
            vue.$site.toast(vue, 'You must provide an answer');
            break;
        }
        return null;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return formData;
};

/***/ }),

/***/ "./vendor/cl/quiz/js/QuizFactory.js":
/*!******************************************!*\
  !*** ./vendor/cl/quiz/js/QuizFactory.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuizFactory": () => (/* binding */ QuizFactory)
/* harmony export */ });
/* harmony import */ var _Quiz__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Quiz */ "./vendor/cl/quiz/js/Quiz.js");


/**
 * The Quiz system factory
 * @constructor
 */
var QuizFactory = function QuizFactory() {};
QuizFactory.create = function (site) {
  var quiz = new _Quiz__WEBPACK_IMPORTED_MODULE_0__.Quiz(site);
  site.start(function () {
    var element = document.querySelector('div.cl-quiz-install');
    if (element !== null) {
      quiz.initialize(element);
    }
  });
  return quiz;
};

/***/ }),

/***/ "./vendor/cl/quiz/js/States.js":
/*!*************************************!*\
  !*** ./vendor/cl/quiz/js/States.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "States": () => (/* binding */ States)
/* harmony export */ });
var States = function States() {};
States.INITIAL = 0;
States.START = 1;
States.QUESTION = 2;
States.RESULTS = 3;
States.PREVIEW = 4;

/***/ }),

/***/ "./.yarn/__virtual__/css-loader-virtual-2de7fabd15/0/cache/css-loader-npm-6.7.3-63aa933400-473cc32b6c.zip/node_modules/css-loader/dist/cjs.js!./.yarn/cache/resolve-url-loader-npm-5.0.0-9b441067c9-6d483733a4.zip/node_modules/resolve-url-loader/index.js!./.yarn/__virtual__/sass-loader-virtual-c7ca4f1d1a/0/cache/sass-loader-npm-13.2.0-6421c5ff7b-ed6cdb5f55.zip/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4.use[3]!./vendor/cl/quiz/_quiz.scss":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./.yarn/__virtual__/css-loader-virtual-2de7fabd15/0/cache/css-loader-npm-6.7.3-63aa933400-473cc32b6c.zip/node_modules/css-loader/dist/cjs.js!./.yarn/cache/resolve-url-loader-npm-5.0.0-9b441067c9-6d483733a4.zip/node_modules/resolve-url-loader/index.js!./.yarn/__virtual__/sass-loader-virtual-c7ca4f1d1a/0/cache/sass-loader-npm-13.2.0-6421c5ff7b-ed6cdb5f55.zip/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4.use[3]!./vendor/cl/quiz/_quiz.scss ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _yarn_virtual_css_loader_virtual_2de7fabd15_0_cache_css_loader_npm_6_7_3_63aa933400_473cc32b6c_zip_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../.yarn/__virtual__/css-loader-virtual-2de7fabd15/0/cache/css-loader-npm-6.7.3-63aa933400-473cc32b6c.zip/node_modules/css-loader/dist/runtime/sourceMaps.js */ "./.yarn/__virtual__/css-loader-virtual-2de7fabd15/0/cache/css-loader-npm-6.7.3-63aa933400-473cc32b6c.zip/node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _yarn_virtual_css_loader_virtual_2de7fabd15_0_cache_css_loader_npm_6_7_3_63aa933400_473cc32b6c_zip_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_yarn_virtual_css_loader_virtual_2de7fabd15_0_cache_css_loader_npm_6_7_3_63aa933400_473cc32b6c_zip_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _yarn_virtual_css_loader_virtual_2de7fabd15_0_cache_css_loader_npm_6_7_3_63aa933400_473cc32b6c_zip_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../.yarn/__virtual__/css-loader-virtual-2de7fabd15/0/cache/css-loader-npm-6.7.3-63aa933400-473cc32b6c.zip/node_modules/css-loader/dist/runtime/api.js */ "./.yarn/__virtual__/css-loader-virtual-2de7fabd15/0/cache/css-loader-npm-6.7.3-63aa933400-473cc32b6c.zip/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _yarn_virtual_css_loader_virtual_2de7fabd15_0_cache_css_loader_npm_6_7_3_63aa933400_473cc32b6c_zip_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_yarn_virtual_css_loader_virtual_2de7fabd15_0_cache_css_loader_npm_6_7_3_63aa933400_473cc32b6c_zip_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _yarn_virtual_css_loader_virtual_2de7fabd15_0_cache_css_loader_npm_6_7_3_63aa933400_473cc32b6c_zip_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_yarn_virtual_css_loader_virtual_2de7fabd15_0_cache_css_loader_npm_6_7_3_63aa933400_473cc32b6c_zip_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "div.cl-quiz {\n  -moz-box-shadow: 3px 3px 8px #ccc;\n  -webkit-box-shadow: 3px 3px 8px #ccc;\n  box-shadow: 3px 3px 8px #ccc;\n}\n\ndiv.cl-quiz {\n  border: solid #cccccc 1pt;\n  padding: 6px;\n  margin: 1em 0;\n  min-height: 15em;\n  align-items: center;\n  justify-content: center;\n  background: #ecffef;\n}\ndiv.cl-quiz > div {\n  width: 100%;\n}\ndiv.cl-quiz > div.content {\n  padding: 0;\n}\ndiv.cl-quiz div.cl-results {\n  width: 80%;\n  margin: 0 auto;\n}\ndiv.cl-quiz h2 {\n  border: 0;\n  margin-top: 14px;\n}\ndiv.cl-quiz div.cl-multi {\n  margin: 1em 0;\n  padding: 0 0 0 3em;\n}\ndiv.cl-quiz div.cl-multi p {\n  margin: 0;\n}\ndiv.cl-quiz p.done {\n  background: #c41425;\n  text-align: center;\n  color: white;\n}\ndiv.cl-quiz button {\n  width: 10em;\n  font-size: 0.9em;\n}\ndiv.cl-quiz tr.best td {\n  background: #dde;\n}\ndiv.cl-quiz div.previewer {\n  clear: both;\n  border-top: 1px solid black;\n}\ndiv.cl-quiz div.previewer h3 {\n  margin: 0;\n  font-size: 1.2em;\n}\ndiv.cl-quiz div.previewer ul {\n  margin-top: 0;\n}\ndiv.cl-quiz div.preview {\n  margin: 0 0 1em 0;\n}\ndiv.cl-quiz div.preview hr {\n  margin: 0;\n}\ndiv.cl-quiz div.preview h3 {\n  text-align: center;\n}\ndiv.cl-quiz div.preview p.preview {\n  font-style: italic;\n  margin-top: 0;\n  text-align: center;\n  border-bottom: 1px solid black;\n}\ndiv.cl-quiz p.cl-quiz-answer-note {\n  text-align: center;\n  font-style: italic;\n  color: #800;\n}\n\n@media only screen and (max-width: 750px) {\n  #quiz {\n    margin-right: 5px;\n  }\n}", "",{"version":3,"sources":["webpack://./vendor/cl/site/sass/modules/_colors.scss","webpack://./vendor/cl/quiz/_quiz.scss","webpack://./vendor/cl/quiz/sass/partials/_quiz.scss","webpack://./vendor/cl/quiz/sass/modules/_colors.scss","webpack://./vendor/cl/site/sass/modules/_variables.scss"],"names":[],"mappings":"AAgFA;EACE,iCAAA;EACA,oCAAA;EACA,4BAAA;AC/EF;;ACJA;EAEE,yBAAA;EACA,YAAA;EACA,aAAA;EACA,gBAAA;EACA,mBAAA;EACA,uBAAA;EACA,mBCPgB;AFalB;ACJE;EACE,WAAA;ADMJ;ACHE;EACE,UAAA;ADKJ;ACFE;EACE,UAAA;EACA,cAAA;ADIJ;ACAE;EACE,SAAA;EACA,gBAAA;ADEJ;ACCE;EACE,aAAA;EACA,kBAAA;ADCJ;ACCI;EACE,SAAA;ADCN;ACGE;EACE,mBFjBG;EEkBH,kBAAA;EACA,YAAA;ADDJ;ACIE;EACE,WAAA;EACA,gBAAA;ADFJ;ACKE;EACE,gBAAA;ADHJ;ACME;EACE,WAAA;EACA,2BAAA;ADJJ;ACMI;EACE,SAAA;EACA,gBAAA;ADJN;ACOI;EACE,aAAA;ADLN;ACSE;EACE,iBAAA;ADPJ;ACSI;EACE,SAAA;ADPN;ACUI;EACE,kBAAA;ADRN;ACWI;EACE,kBAAA;EACA,aAAA;EACA,kBAAA;EACA,8BAAA;ADTN;ACaE;EACE,kBAAA;EACA,kBAAA;EACA,WAAA;ADXJ;;ACeA;EACE;IACE,iBEvFkB;EH2EpB;AACF","sourcesContent":["// The major colors\r\n// We have a primary color, two secondary colors, and a complementary color.\r\n$accent: #607D8B;\r\n\r\n$toast-background: #151515;\r\n$toast-text: white;\r\n\r\n$header-background: #535054;\r\n$header-text: #eeeeee;\r\n\r\n// The major colors\r\n// We have a primary color, two secondary colors, and a complementary color.\r\n$primary: #00723f;\r\n$light-primary: #44a26b;\r\n$very-light-primary: #e8f7f3;\r\n$dark-primary: #005223;\r\n$primary-text: #212121;\r\n\r\n$seconda: #00909e;\r\n$secondb: #fcaf17;\r\n$secondc: #c89a58; // #e8d9b5;\r\n\r\n$comp: #c41425;\r\n$blind: #efc6ff;\r\n$comp-background: linear-gradient(#570102, #960606, #570102);\r\n$comp-border: #c7bdbb;\r\n\r\n// Menus\r\n$focus: #008183;\r\n$menu-background: #e8e8e8;\r\n$menu-hover: #d0d0d0;\r\n$menu-color: black;\r\n\r\n// Page background\r\n$background: #eeeeee;\r\n\r\n// Nav\r\n$nav-color: white;\r\n$nav-background: url('img/nav_pattern.png');\r\n$nav-2-color: #ffff99;\r\n$nav-2-background: url('img/nav_pattern-2.png');\r\n\r\n// Tables\r\n$table-gradient-from: #204c42;\r\n$table-gradient-to: #389b54;\r\n\r\n// Dialog boxes\r\n$dialog-gradient-from: #204c42;\r\n$dialog-gradient-to: #389b54;\r\n$dialog-bar-color: white;\r\n\r\n// Link colors\r\n$link: #808080;\r\n$visited: #968443;  // #b09d5b;\r\n$hover: #3366cc;\r\n\r\n$very-light-primary-link: #900000;\r\n$very-light-primary-hover: #c00000;\r\n\r\n\r\n$primary-link: white;\r\n$primary-visited: #dddddd;\r\n$secondb-visited: #555555;\r\n$autoback-link: #882222;\r\n$autoback-link-hover: #cc2222;\r\n\r\n$shadow-x: 3px;\r\n$shadow-y: 3px;\r\n$shadow-radius: 8px;\r\n$shadow-color: #ccc;\r\n\r\n$toggle-link-hover-color: #006600;\r\n\r\n// Boxes\r\n$box-border-color: #bdbdbd;\r\n\r\n// Cards\r\n$card-heading-background: #f2f2f2;\r\n$card-border-color: #cccccc;\r\n\r\n%shadow {\r\n  -moz-box-shadow: $shadow-x $shadow-y $shadow-radius $shadow-color;\r\n  -webkit-box-shadow: $shadow-x $shadow-y $shadow-radius $shadow-color;\r\n  box-shadow: $shadow-x $shadow-y $shadow-radius $shadow-color;\r\n}\r\n\r\n%noshadow {\r\n  -moz-box-shadow: none;\r\n  -webkit-box-shadow: none;\r\n  box-shadow: none;\r\n}\r\n","div.cl-quiz {\n  -moz-box-shadow: 3px 3px 8px #ccc;\n  -webkit-box-shadow: 3px 3px 8px #ccc;\n  box-shadow: 3px 3px 8px #ccc;\n}\n\ndiv.cl-quiz {\n  border: solid #cccccc 1pt;\n  padding: 6px;\n  margin: 1em 0;\n  min-height: 15em;\n  align-items: center;\n  justify-content: center;\n  background: #ecffef;\n}\ndiv.cl-quiz > div {\n  width: 100%;\n}\ndiv.cl-quiz > div.content {\n  padding: 0;\n}\ndiv.cl-quiz div.cl-results {\n  width: 80%;\n  margin: 0 auto;\n}\ndiv.cl-quiz h2 {\n  border: 0;\n  margin-top: 14px;\n}\ndiv.cl-quiz div.cl-multi {\n  margin: 1em 0;\n  padding: 0 0 0 3em;\n}\ndiv.cl-quiz div.cl-multi p {\n  margin: 0;\n}\ndiv.cl-quiz p.done {\n  background: #c41425;\n  text-align: center;\n  color: white;\n}\ndiv.cl-quiz button {\n  width: 10em;\n  font-size: 0.9em;\n}\ndiv.cl-quiz tr.best td {\n  background: #dde;\n}\ndiv.cl-quiz div.previewer {\n  clear: both;\n  border-top: 1px solid black;\n}\ndiv.cl-quiz div.previewer h3 {\n  margin: 0;\n  font-size: 1.2em;\n}\ndiv.cl-quiz div.previewer ul {\n  margin-top: 0;\n}\ndiv.cl-quiz div.preview {\n  margin: 0 0 1em 0;\n}\ndiv.cl-quiz div.preview hr {\n  margin: 0;\n}\ndiv.cl-quiz div.preview h3 {\n  text-align: center;\n}\ndiv.cl-quiz div.preview p.preview {\n  font-style: italic;\n  margin-top: 0;\n  text-align: center;\n  border-bottom: 1px solid black;\n}\ndiv.cl-quiz p.cl-quiz-answer-note {\n  text-align: center;\n  font-style: italic;\n  color: #800;\n}\n\n@media only screen and (max-width: 750px) {\n  #quiz {\n    margin-right: 5px;\n  }\n}","div.cl-quiz {\n  @extend %shadow;\n  border: solid #cccccc 1pt;\n  padding: 6px;\n  margin: 1em 0;\n  min-height: 15em;\n  align-items: center;\n  justify-content: center;\n  background: $quiz-background;\n\n  >div {\n    width: 100%;\n  }\n\n  >div.content {\n    padding: 0;\n  }\n\n  div.cl-results {\n    width: 80%;\n    margin: 0 auto;\n  }\n\n\n  h2 {\n    border: 0;\n    margin-top: 14px;\n  }\n\n  div.cl-multi {\n    margin: 1em 0;\n    padding: 0 0 0 3em;\n\n    p {\n      margin: 0;\n    }\n  }\n\n  p.done {\n    background: $comp;\n    text-align: center;\n    color: white;\n  }\n\n  button {\n    width: 10em;\n    font-size: 0.9em;\n  }\n\n  tr.best td {\n    background: #dde;\n  }\n\n  div.previewer {\n    clear: both;\n    border-top: 1px solid black;\n\n    h3 {\n      margin: 0;\n      font-size: 1.2em;\n    }\n\n    ul {\n      margin-top: 0;\n    }\n  }\n\n  div.preview {\n    margin: 0 0 1em 0;\n\n    hr {\n      margin: 0;\n    }\n\n    h3 {\n      text-align: center;\n    }\n\n    p.preview {\n      font-style: italic;\n      margin-top: 0;\n      text-align: center;\n      border-bottom: 1px solid black;\n    }\n  }\n\n  p.cl-quiz-answer-note {\n    text-align: center;\n    font-style: italic;\n    color: #800;\n  }\n}\n\n@media only screen and (max-width: $medium-width) {\n  #quiz {\n    margin-right: $right-margin-mobile;\n  }\n\n}","\n$quiz-background: #ecffef;","$min-width: 320px;\r\n$max-body: 1000px;\r\n\r\n$padding: 8px;\r\n\r\n$margin: 10px;\r\n$margin-mobile: 5px;\r\n$right-margin: 16em;\r\n$right-margin-mobile: 5px;\r\n\r\n$medium-width: 750px;\r\n$narrow-width: 500px;\r\n$very-narrow-width: 400px;\r\n$wide-width: 900px;\r\n$max-width: 56em;\r\n\r\n$aside-width: 15.5em;   // Width of asides\r\n$aside-padding: 10px;\r\n\r\n$box-padding: 8px;\r\n\r\n// Cards\r\n$card-padding: $margin;\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./vendor/cl/quiz/_quiz.scss":
/*!***********************************!*\
  !*** ./vendor/cl/quiz/_quiz.scss ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _yarn_virtual_style_loader_virtual_407543e133_0_cache_style_loader_npm_3_3_1_4bbb6ec77f_470feef680_zip_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../.yarn/__virtual__/style-loader-virtual-407543e133/0/cache/style-loader-npm-3.3.1-4bbb6ec77f-470feef680.zip/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./.yarn/__virtual__/style-loader-virtual-407543e133/0/cache/style-loader-npm-3.3.1-4bbb6ec77f-470feef680.zip/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _yarn_virtual_style_loader_virtual_407543e133_0_cache_style_loader_npm_3_3_1_4bbb6ec77f_470feef680_zip_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_yarn_virtual_style_loader_virtual_407543e133_0_cache_style_loader_npm_3_3_1_4bbb6ec77f_470feef680_zip_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _yarn_virtual_style_loader_virtual_407543e133_0_cache_style_loader_npm_3_3_1_4bbb6ec77f_470feef680_zip_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../.yarn/__virtual__/style-loader-virtual-407543e133/0/cache/style-loader-npm-3.3.1-4bbb6ec77f-470feef680.zip/node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./.yarn/__virtual__/style-loader-virtual-407543e133/0/cache/style-loader-npm-3.3.1-4bbb6ec77f-470feef680.zip/node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _yarn_virtual_style_loader_virtual_407543e133_0_cache_style_loader_npm_3_3_1_4bbb6ec77f_470feef680_zip_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_yarn_virtual_style_loader_virtual_407543e133_0_cache_style_loader_npm_3_3_1_4bbb6ec77f_470feef680_zip_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _yarn_virtual_style_loader_virtual_407543e133_0_cache_style_loader_npm_3_3_1_4bbb6ec77f_470feef680_zip_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../.yarn/__virtual__/style-loader-virtual-407543e133/0/cache/style-loader-npm-3.3.1-4bbb6ec77f-470feef680.zip/node_modules/style-loader/dist/runtime/insertBySelector.js */ "./.yarn/__virtual__/style-loader-virtual-407543e133/0/cache/style-loader-npm-3.3.1-4bbb6ec77f-470feef680.zip/node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _yarn_virtual_style_loader_virtual_407543e133_0_cache_style_loader_npm_3_3_1_4bbb6ec77f_470feef680_zip_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_yarn_virtual_style_loader_virtual_407543e133_0_cache_style_loader_npm_3_3_1_4bbb6ec77f_470feef680_zip_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _yarn_virtual_style_loader_virtual_407543e133_0_cache_style_loader_npm_3_3_1_4bbb6ec77f_470feef680_zip_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../.yarn/__virtual__/style-loader-virtual-407543e133/0/cache/style-loader-npm-3.3.1-4bbb6ec77f-470feef680.zip/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./.yarn/__virtual__/style-loader-virtual-407543e133/0/cache/style-loader-npm-3.3.1-4bbb6ec77f-470feef680.zip/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _yarn_virtual_style_loader_virtual_407543e133_0_cache_style_loader_npm_3_3_1_4bbb6ec77f_470feef680_zip_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_yarn_virtual_style_loader_virtual_407543e133_0_cache_style_loader_npm_3_3_1_4bbb6ec77f_470feef680_zip_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _yarn_virtual_style_loader_virtual_407543e133_0_cache_style_loader_npm_3_3_1_4bbb6ec77f_470feef680_zip_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../.yarn/__virtual__/style-loader-virtual-407543e133/0/cache/style-loader-npm-3.3.1-4bbb6ec77f-470feef680.zip/node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./.yarn/__virtual__/style-loader-virtual-407543e133/0/cache/style-loader-npm-3.3.1-4bbb6ec77f-470feef680.zip/node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _yarn_virtual_style_loader_virtual_407543e133_0_cache_style_loader_npm_3_3_1_4bbb6ec77f_470feef680_zip_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_yarn_virtual_style_loader_virtual_407543e133_0_cache_style_loader_npm_3_3_1_4bbb6ec77f_470feef680_zip_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _yarn_virtual_style_loader_virtual_407543e133_0_cache_style_loader_npm_3_3_1_4bbb6ec77f_470feef680_zip_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../.yarn/__virtual__/style-loader-virtual-407543e133/0/cache/style-loader-npm-3.3.1-4bbb6ec77f-470feef680.zip/node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./.yarn/__virtual__/style-loader-virtual-407543e133/0/cache/style-loader-npm-3.3.1-4bbb6ec77f-470feef680.zip/node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _yarn_virtual_style_loader_virtual_407543e133_0_cache_style_loader_npm_3_3_1_4bbb6ec77f_470feef680_zip_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_yarn_virtual_style_loader_virtual_407543e133_0_cache_style_loader_npm_3_3_1_4bbb6ec77f_470feef680_zip_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _yarn_virtual_css_loader_virtual_2de7fabd15_0_cache_css_loader_npm_6_7_3_63aa933400_473cc32b6c_zip_node_modules_css_loader_dist_cjs_js_yarn_cache_resolve_url_loader_npm_5_0_0_9b441067c9_6d483733a4_zip_node_modules_resolve_url_loader_index_js_yarn_virtual_sass_loader_virtual_c7ca4f1d1a_0_cache_sass_loader_npm_13_2_0_6421c5ff7b_ed6cdb5f55_zip_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_4_use_3_quiz_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../.yarn/__virtual__/css-loader-virtual-2de7fabd15/0/cache/css-loader-npm-6.7.3-63aa933400-473cc32b6c.zip/node_modules/css-loader/dist/cjs.js!../../../.yarn/cache/resolve-url-loader-npm-5.0.0-9b441067c9-6d483733a4.zip/node_modules/resolve-url-loader/index.js!../../../.yarn/__virtual__/sass-loader-virtual-c7ca4f1d1a/0/cache/sass-loader-npm-13.2.0-6421c5ff7b-ed6cdb5f55.zip/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4.use[3]!./_quiz.scss */ "./.yarn/__virtual__/css-loader-virtual-2de7fabd15/0/cache/css-loader-npm-6.7.3-63aa933400-473cc32b6c.zip/node_modules/css-loader/dist/cjs.js!./.yarn/cache/resolve-url-loader-npm-5.0.0-9b441067c9-6d483733a4.zip/node_modules/resolve-url-loader/index.js!./.yarn/__virtual__/sass-loader-virtual-c7ca4f1d1a/0/cache/sass-loader-npm-13.2.0-6421c5ff7b-ed6cdb5f55.zip/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4.use[3]!./vendor/cl/quiz/_quiz.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_yarn_virtual_style_loader_virtual_407543e133_0_cache_style_loader_npm_3_3_1_4bbb6ec77f_470feef680_zip_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_yarn_virtual_style_loader_virtual_407543e133_0_cache_style_loader_npm_3_3_1_4bbb6ec77f_470feef680_zip_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _yarn_virtual_style_loader_virtual_407543e133_0_cache_style_loader_npm_3_3_1_4bbb6ec77f_470feef680_zip_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_yarn_virtual_style_loader_virtual_407543e133_0_cache_style_loader_npm_3_3_1_4bbb6ec77f_470feef680_zip_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_yarn_virtual_style_loader_virtual_407543e133_0_cache_style_loader_npm_3_3_1_4bbb6ec77f_470feef680_zip_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _yarn_virtual_style_loader_virtual_407543e133_0_cache_style_loader_npm_3_3_1_4bbb6ec77f_470feef680_zip_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_yarn_virtual_css_loader_virtual_2de7fabd15_0_cache_css_loader_npm_6_7_3_63aa933400_473cc32b6c_zip_node_modules_css_loader_dist_cjs_js_yarn_cache_resolve_url_loader_npm_5_0_0_9b441067c9_6d483733a4_zip_node_modules_resolve_url_loader_index_js_yarn_virtual_sass_loader_virtual_c7ca4f1d1a_0_cache_sass_loader_npm_13_2_0_6421c5ff7b_ed6cdb5f55_zip_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_4_use_3_quiz_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_yarn_virtual_css_loader_virtual_2de7fabd15_0_cache_css_loader_npm_6_7_3_63aa933400_473cc32b6c_zip_node_modules_css_loader_dist_cjs_js_yarn_cache_resolve_url_loader_npm_5_0_0_9b441067c9_6d483733a4_zip_node_modules_resolve_url_loader_index_js_yarn_virtual_sass_loader_virtual_c7ca4f1d1a_0_cache_sass_loader_npm_13_2_0_6421c5ff7b_ed6cdb5f55_zip_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_4_use_3_quiz_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _yarn_virtual_css_loader_virtual_2de7fabd15_0_cache_css_loader_npm_6_7_3_63aa933400_473cc32b6c_zip_node_modules_css_loader_dist_cjs_js_yarn_cache_resolve_url_loader_npm_5_0_0_9b441067c9_6d483733a4_zip_node_modules_resolve_url_loader_index_js_yarn_virtual_sass_loader_virtual_c7ca4f1d1a_0_cache_sass_loader_npm_13_2_0_6421c5ff7b_ed6cdb5f55_zip_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_4_use_3_quiz_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _yarn_virtual_css_loader_virtual_2de7fabd15_0_cache_css_loader_npm_6_7_3_63aa933400_473cc32b6c_zip_node_modules_css_loader_dist_cjs_js_yarn_cache_resolve_url_loader_npm_5_0_0_9b441067c9_6d483733a4_zip_node_modules_resolve_url_loader_index_js_yarn_virtual_sass_loader_virtual_c7ca4f1d1a_0_cache_sass_loader_npm_13_2_0_6421c5ff7b_ed6cdb5f55_zip_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_4_use_3_quiz_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./vendor/cl/quiz/js/Vue/Answer.vue":
/*!******************************************!*\
  !*** ./vendor/cl/quiz/js/Vue/Answer.vue ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Answer_vue_vue_type_template_id_31200b40__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Answer.vue?vue&type=template&id=31200b40 */ "./vendor/cl/quiz/js/Vue/Answer.vue?vue&type=template&id=31200b40");
/* harmony import */ var _Answer_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Answer.vue?vue&type=script&lang=js */ "./vendor/cl/quiz/js/Vue/Answer.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_charlesowen_web_cse335_yarn_virtual_vue_loader_virtual_a1a4b187c3_0_cache_vue_loader_npm_17_0_1_f552b82805_42cc8c8ff0_zip_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./.yarn/__virtual__/vue-loader-virtual-a1a4b187c3/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/exportHelper.js */ "./.yarn/__virtual__/vue-loader-virtual-a1a4b187c3/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_charlesowen_web_cse335_yarn_virtual_vue_loader_virtual_a1a4b187c3_0_cache_vue_loader_npm_17_0_1_f552b82805_42cc8c8ff0_zip_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Answer_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Answer_vue_vue_type_template_id_31200b40__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"vendor/cl/quiz/js/Vue/Answer.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./vendor/cl/quiz/js/Vue/Closed.vue":
/*!******************************************!*\
  !*** ./vendor/cl/quiz/js/Vue/Closed.vue ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Closed_vue_vue_type_template_id_3397150e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Closed.vue?vue&type=template&id=3397150e */ "./vendor/cl/quiz/js/Vue/Closed.vue?vue&type=template&id=3397150e");
/* harmony import */ var _Closed_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Closed.vue?vue&type=script&lang=js */ "./vendor/cl/quiz/js/Vue/Closed.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_charlesowen_web_cse335_yarn_virtual_vue_loader_virtual_a1a4b187c3_0_cache_vue_loader_npm_17_0_1_f552b82805_42cc8c8ff0_zip_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./.yarn/__virtual__/vue-loader-virtual-a1a4b187c3/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/exportHelper.js */ "./.yarn/__virtual__/vue-loader-virtual-a1a4b187c3/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_charlesowen_web_cse335_yarn_virtual_vue_loader_virtual_a1a4b187c3_0_cache_vue_loader_npm_17_0_1_f552b82805_42cc8c8ff0_zip_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Closed_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Closed_vue_vue_type_template_id_3397150e__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"vendor/cl/quiz/js/Vue/Closed.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./vendor/cl/quiz/js/Vue/Expired.vue":
/*!*******************************************!*\
  !*** ./vendor/cl/quiz/js/Vue/Expired.vue ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Expired_vue_vue_type_template_id_163d0973__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Expired.vue?vue&type=template&id=163d0973 */ "./vendor/cl/quiz/js/Vue/Expired.vue?vue&type=template&id=163d0973");
/* harmony import */ var _Expired_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Expired.vue?vue&type=script&lang=js */ "./vendor/cl/quiz/js/Vue/Expired.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_charlesowen_web_cse335_yarn_virtual_vue_loader_virtual_a1a4b187c3_0_cache_vue_loader_npm_17_0_1_f552b82805_42cc8c8ff0_zip_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./.yarn/__virtual__/vue-loader-virtual-a1a4b187c3/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/exportHelper.js */ "./.yarn/__virtual__/vue-loader-virtual-a1a4b187c3/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_charlesowen_web_cse335_yarn_virtual_vue_loader_virtual_a1a4b187c3_0_cache_vue_loader_npm_17_0_1_f552b82805_42cc8c8ff0_zip_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Expired_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Expired_vue_vue_type_template_id_163d0973__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"vendor/cl/quiz/js/Vue/Expired.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./vendor/cl/quiz/js/Vue/Initial.vue":
/*!*******************************************!*\
  !*** ./vendor/cl/quiz/js/Vue/Initial.vue ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Initial_vue_vue_type_template_id_65449212__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Initial.vue?vue&type=template&id=65449212 */ "./vendor/cl/quiz/js/Vue/Initial.vue?vue&type=template&id=65449212");
/* harmony import */ var _Initial_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Initial.vue?vue&type=script&lang=js */ "./vendor/cl/quiz/js/Vue/Initial.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_charlesowen_web_cse335_yarn_virtual_vue_loader_virtual_a1a4b187c3_0_cache_vue_loader_npm_17_0_1_f552b82805_42cc8c8ff0_zip_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./.yarn/__virtual__/vue-loader-virtual-a1a4b187c3/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/exportHelper.js */ "./.yarn/__virtual__/vue-loader-virtual-a1a4b187c3/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_charlesowen_web_cse335_yarn_virtual_vue_loader_virtual_a1a4b187c3_0_cache_vue_loader_npm_17_0_1_f552b82805_42cc8c8ff0_zip_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Initial_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Initial_vue_vue_type_template_id_65449212__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"vendor/cl/quiz/js/Vue/Initial.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./vendor/cl/quiz/js/Vue/Preview.vue":
/*!*******************************************!*\
  !*** ./vendor/cl/quiz/js/Vue/Preview.vue ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Preview_vue_vue_type_template_id_626b86d4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Preview.vue?vue&type=template&id=626b86d4 */ "./vendor/cl/quiz/js/Vue/Preview.vue?vue&type=template&id=626b86d4");
/* harmony import */ var _Preview_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Preview.vue?vue&type=script&lang=js */ "./vendor/cl/quiz/js/Vue/Preview.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_charlesowen_web_cse335_yarn_virtual_vue_loader_virtual_a1a4b187c3_0_cache_vue_loader_npm_17_0_1_f552b82805_42cc8c8ff0_zip_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./.yarn/__virtual__/vue-loader-virtual-a1a4b187c3/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/exportHelper.js */ "./.yarn/__virtual__/vue-loader-virtual-a1a4b187c3/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_charlesowen_web_cse335_yarn_virtual_vue_loader_virtual_a1a4b187c3_0_cache_vue_loader_npm_17_0_1_f552b82805_42cc8c8ff0_zip_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Preview_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Preview_vue_vue_type_template_id_626b86d4__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"vendor/cl/quiz/js/Vue/Preview.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./vendor/cl/quiz/js/Vue/Previewer.vue":
/*!*********************************************!*\
  !*** ./vendor/cl/quiz/js/Vue/Previewer.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Previewer_vue_vue_type_template_id_baa0b97a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Previewer.vue?vue&type=template&id=baa0b97a */ "./vendor/cl/quiz/js/Vue/Previewer.vue?vue&type=template&id=baa0b97a");
/* harmony import */ var _Previewer_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Previewer.vue?vue&type=script&lang=js */ "./vendor/cl/quiz/js/Vue/Previewer.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_charlesowen_web_cse335_yarn_virtual_vue_loader_virtual_a1a4b187c3_0_cache_vue_loader_npm_17_0_1_f552b82805_42cc8c8ff0_zip_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./.yarn/__virtual__/vue-loader-virtual-a1a4b187c3/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/exportHelper.js */ "./.yarn/__virtual__/vue-loader-virtual-a1a4b187c3/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_charlesowen_web_cse335_yarn_virtual_vue_loader_virtual_a1a4b187c3_0_cache_vue_loader_npm_17_0_1_f552b82805_42cc8c8ff0_zip_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Previewer_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Previewer_vue_vue_type_template_id_baa0b97a__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"vendor/cl/quiz/js/Vue/Previewer.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./vendor/cl/quiz/js/Vue/Question.vue":
/*!********************************************!*\
  !*** ./vendor/cl/quiz/js/Vue/Question.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Question_vue_vue_type_template_id_54140808__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Question.vue?vue&type=template&id=54140808 */ "./vendor/cl/quiz/js/Vue/Question.vue?vue&type=template&id=54140808");
/* harmony import */ var _Question_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Question.vue?vue&type=script&lang=js */ "./vendor/cl/quiz/js/Vue/Question.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_charlesowen_web_cse335_yarn_virtual_vue_loader_virtual_a1a4b187c3_0_cache_vue_loader_npm_17_0_1_f552b82805_42cc8c8ff0_zip_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./.yarn/__virtual__/vue-loader-virtual-a1a4b187c3/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/exportHelper.js */ "./.yarn/__virtual__/vue-loader-virtual-a1a4b187c3/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_charlesowen_web_cse335_yarn_virtual_vue_loader_virtual_a1a4b187c3_0_cache_vue_loader_npm_17_0_1_f552b82805_42cc8c8ff0_zip_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Question_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Question_vue_vue_type_template_id_54140808__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"vendor/cl/quiz/js/Vue/Question.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./vendor/cl/quiz/js/Vue/Results.vue":
/*!*******************************************!*\
  !*** ./vendor/cl/quiz/js/Vue/Results.vue ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Results_vue_vue_type_template_id_066e6478__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Results.vue?vue&type=template&id=066e6478 */ "./vendor/cl/quiz/js/Vue/Results.vue?vue&type=template&id=066e6478");
/* harmony import */ var _Results_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Results.vue?vue&type=script&lang=js */ "./vendor/cl/quiz/js/Vue/Results.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_charlesowen_web_cse335_yarn_virtual_vue_loader_virtual_a1a4b187c3_0_cache_vue_loader_npm_17_0_1_f552b82805_42cc8c8ff0_zip_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./.yarn/__virtual__/vue-loader-virtual-a1a4b187c3/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/exportHelper.js */ "./.yarn/__virtual__/vue-loader-virtual-a1a4b187c3/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_charlesowen_web_cse335_yarn_virtual_vue_loader_virtual_a1a4b187c3_0_cache_vue_loader_npm_17_0_1_f552b82805_42cc8c8ff0_zip_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Results_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Results_vue_vue_type_template_id_066e6478__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"vendor/cl/quiz/js/Vue/Results.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./vendor/cl/quiz/js/Vue/Answer.vue?vue&type=script&lang=js":
/*!******************************************************************!*\
  !*** ./vendor/cl/quiz/js/Vue/Answer.vue?vue&type=script&lang=js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _yarn_virtual_babel_loader_virtual_58a043f32a_0_cache_babel_loader_npm_9_1_0_6467162cbf_774758febd_zip_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_use_yarn_virtual_vue_loader_virtual_a1a4b187c3_0_cache_vue_loader_npm_17_0_1_f552b82805_42cc8c8ff0_zip_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_Answer_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _yarn_virtual_babel_loader_virtual_58a043f32a_0_cache_babel_loader_npm_9_1_0_6467162cbf_774758febd_zip_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_use_yarn_virtual_vue_loader_virtual_a1a4b187c3_0_cache_vue_loader_npm_17_0_1_f552b82805_42cc8c8ff0_zip_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_Answer_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../.yarn/__virtual__/babel-loader-virtual-58a043f32a/0/cache/babel-loader-npm-9.1.0-6467162cbf-774758febd.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!../../../../../.yarn/__virtual__/vue-loader-virtual-a1a4b187c3/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./Answer.vue?vue&type=script&lang=js */ "./.yarn/__virtual__/babel-loader-virtual-58a043f32a/0/cache/babel-loader-npm-9.1.0-6467162cbf-774758febd.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./.yarn/__virtual__/vue-loader-virtual-a1a4b187c3/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./vendor/cl/quiz/js/Vue/Answer.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./vendor/cl/quiz/js/Vue/Closed.vue?vue&type=script&lang=js":
/*!******************************************************************!*\
  !*** ./vendor/cl/quiz/js/Vue/Closed.vue?vue&type=script&lang=js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _yarn_virtual_babel_loader_virtual_58a043f32a_0_cache_babel_loader_npm_9_1_0_6467162cbf_774758febd_zip_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_use_yarn_virtual_vue_loader_virtual_a1a4b187c3_0_cache_vue_loader_npm_17_0_1_f552b82805_42cc8c8ff0_zip_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_Closed_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _yarn_virtual_babel_loader_virtual_58a043f32a_0_cache_babel_loader_npm_9_1_0_6467162cbf_774758febd_zip_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_use_yarn_virtual_vue_loader_virtual_a1a4b187c3_0_cache_vue_loader_npm_17_0_1_f552b82805_42cc8c8ff0_zip_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_Closed_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../.yarn/__virtual__/babel-loader-virtual-58a043f32a/0/cache/babel-loader-npm-9.1.0-6467162cbf-774758febd.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!../../../../../.yarn/__virtual__/vue-loader-virtual-a1a4b187c3/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./Closed.vue?vue&type=script&lang=js */ "./.yarn/__virtual__/babel-loader-virtual-58a043f32a/0/cache/babel-loader-npm-9.1.0-6467162cbf-774758febd.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./.yarn/__virtual__/vue-loader-virtual-a1a4b187c3/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./vendor/cl/quiz/js/Vue/Closed.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./vendor/cl/quiz/js/Vue/Expired.vue?vue&type=script&lang=js":
/*!*******************************************************************!*\
  !*** ./vendor/cl/quiz/js/Vue/Expired.vue?vue&type=script&lang=js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _yarn_virtual_babel_loader_virtual_58a043f32a_0_cache_babel_loader_npm_9_1_0_6467162cbf_774758febd_zip_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_use_yarn_virtual_vue_loader_virtual_a1a4b187c3_0_cache_vue_loader_npm_17_0_1_f552b82805_42cc8c8ff0_zip_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_Expired_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _yarn_virtual_babel_loader_virtual_58a043f32a_0_cache_babel_loader_npm_9_1_0_6467162cbf_774758febd_zip_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_use_yarn_virtual_vue_loader_virtual_a1a4b187c3_0_cache_vue_loader_npm_17_0_1_f552b82805_42cc8c8ff0_zip_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_Expired_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../.yarn/__virtual__/babel-loader-virtual-58a043f32a/0/cache/babel-loader-npm-9.1.0-6467162cbf-774758febd.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!../../../../../.yarn/__virtual__/vue-loader-virtual-a1a4b187c3/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./Expired.vue?vue&type=script&lang=js */ "./.yarn/__virtual__/babel-loader-virtual-58a043f32a/0/cache/babel-loader-npm-9.1.0-6467162cbf-774758febd.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./.yarn/__virtual__/vue-loader-virtual-a1a4b187c3/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./vendor/cl/quiz/js/Vue/Expired.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./vendor/cl/quiz/js/Vue/Initial.vue?vue&type=script&lang=js":
/*!*******************************************************************!*\
  !*** ./vendor/cl/quiz/js/Vue/Initial.vue?vue&type=script&lang=js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _yarn_virtual_babel_loader_virtual_58a043f32a_0_cache_babel_loader_npm_9_1_0_6467162cbf_774758febd_zip_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_use_yarn_virtual_vue_loader_virtual_a1a4b187c3_0_cache_vue_loader_npm_17_0_1_f552b82805_42cc8c8ff0_zip_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_Initial_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _yarn_virtual_babel_loader_virtual_58a043f32a_0_cache_babel_loader_npm_9_1_0_6467162cbf_774758febd_zip_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_use_yarn_virtual_vue_loader_virtual_a1a4b187c3_0_cache_vue_loader_npm_17_0_1_f552b82805_42cc8c8ff0_zip_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_Initial_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../.yarn/__virtual__/babel-loader-virtual-58a043f32a/0/cache/babel-loader-npm-9.1.0-6467162cbf-774758febd.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!../../../../../.yarn/__virtual__/vue-loader-virtual-a1a4b187c3/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./Initial.vue?vue&type=script&lang=js */ "./.yarn/__virtual__/babel-loader-virtual-58a043f32a/0/cache/babel-loader-npm-9.1.0-6467162cbf-774758febd.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./.yarn/__virtual__/vue-loader-virtual-a1a4b187c3/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./vendor/cl/quiz/js/Vue/Initial.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./vendor/cl/quiz/js/Vue/Preview.vue?vue&type=script&lang=js":
/*!*******************************************************************!*\
  !*** ./vendor/cl/quiz/js/Vue/Preview.vue?vue&type=script&lang=js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _yarn_virtual_babel_loader_virtual_58a043f32a_0_cache_babel_loader_npm_9_1_0_6467162cbf_774758febd_zip_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_use_yarn_virtual_vue_loader_virtual_a1a4b187c3_0_cache_vue_loader_npm_17_0_1_f552b82805_42cc8c8ff0_zip_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_Preview_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _yarn_virtual_babel_loader_virtual_58a043f32a_0_cache_babel_loader_npm_9_1_0_6467162cbf_774758febd_zip_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_use_yarn_virtual_vue_loader_virtual_a1a4b187c3_0_cache_vue_loader_npm_17_0_1_f552b82805_42cc8c8ff0_zip_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_Preview_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../.yarn/__virtual__/babel-loader-virtual-58a043f32a/0/cache/babel-loader-npm-9.1.0-6467162cbf-774758febd.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!../../../../../.yarn/__virtual__/vue-loader-virtual-a1a4b187c3/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./Preview.vue?vue&type=script&lang=js */ "./.yarn/__virtual__/babel-loader-virtual-58a043f32a/0/cache/babel-loader-npm-9.1.0-6467162cbf-774758febd.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./.yarn/__virtual__/vue-loader-virtual-a1a4b187c3/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./vendor/cl/quiz/js/Vue/Preview.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./vendor/cl/quiz/js/Vue/Previewer.vue?vue&type=script&lang=js":
/*!*********************************************************************!*\
  !*** ./vendor/cl/quiz/js/Vue/Previewer.vue?vue&type=script&lang=js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _yarn_virtual_babel_loader_virtual_58a043f32a_0_cache_babel_loader_npm_9_1_0_6467162cbf_774758febd_zip_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_use_yarn_virtual_vue_loader_virtual_a1a4b187c3_0_cache_vue_loader_npm_17_0_1_f552b82805_42cc8c8ff0_zip_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_Previewer_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _yarn_virtual_babel_loader_virtual_58a043f32a_0_cache_babel_loader_npm_9_1_0_6467162cbf_774758febd_zip_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_use_yarn_virtual_vue_loader_virtual_a1a4b187c3_0_cache_vue_loader_npm_17_0_1_f552b82805_42cc8c8ff0_zip_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_Previewer_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../.yarn/__virtual__/babel-loader-virtual-58a043f32a/0/cache/babel-loader-npm-9.1.0-6467162cbf-774758febd.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!../../../../../.yarn/__virtual__/vue-loader-virtual-a1a4b187c3/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./Previewer.vue?vue&type=script&lang=js */ "./.yarn/__virtual__/babel-loader-virtual-58a043f32a/0/cache/babel-loader-npm-9.1.0-6467162cbf-774758febd.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./.yarn/__virtual__/vue-loader-virtual-a1a4b187c3/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./vendor/cl/quiz/js/Vue/Previewer.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./vendor/cl/quiz/js/Vue/Question.vue?vue&type=script&lang=js":
/*!********************************************************************!*\
  !*** ./vendor/cl/quiz/js/Vue/Question.vue?vue&type=script&lang=js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _yarn_virtual_babel_loader_virtual_58a043f32a_0_cache_babel_loader_npm_9_1_0_6467162cbf_774758febd_zip_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_use_yarn_virtual_vue_loader_virtual_a1a4b187c3_0_cache_vue_loader_npm_17_0_1_f552b82805_42cc8c8ff0_zip_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_Question_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _yarn_virtual_babel_loader_virtual_58a043f32a_0_cache_babel_loader_npm_9_1_0_6467162cbf_774758febd_zip_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_use_yarn_virtual_vue_loader_virtual_a1a4b187c3_0_cache_vue_loader_npm_17_0_1_f552b82805_42cc8c8ff0_zip_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_Question_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../.yarn/__virtual__/babel-loader-virtual-58a043f32a/0/cache/babel-loader-npm-9.1.0-6467162cbf-774758febd.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!../../../../../.yarn/__virtual__/vue-loader-virtual-a1a4b187c3/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./Question.vue?vue&type=script&lang=js */ "./.yarn/__virtual__/babel-loader-virtual-58a043f32a/0/cache/babel-loader-npm-9.1.0-6467162cbf-774758febd.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./.yarn/__virtual__/vue-loader-virtual-a1a4b187c3/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./vendor/cl/quiz/js/Vue/Question.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./vendor/cl/quiz/js/Vue/Results.vue?vue&type=script&lang=js":
/*!*******************************************************************!*\
  !*** ./vendor/cl/quiz/js/Vue/Results.vue?vue&type=script&lang=js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _yarn_virtual_babel_loader_virtual_58a043f32a_0_cache_babel_loader_npm_9_1_0_6467162cbf_774758febd_zip_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_use_yarn_virtual_vue_loader_virtual_a1a4b187c3_0_cache_vue_loader_npm_17_0_1_f552b82805_42cc8c8ff0_zip_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_Results_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _yarn_virtual_babel_loader_virtual_58a043f32a_0_cache_babel_loader_npm_9_1_0_6467162cbf_774758febd_zip_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_use_yarn_virtual_vue_loader_virtual_a1a4b187c3_0_cache_vue_loader_npm_17_0_1_f552b82805_42cc8c8ff0_zip_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_Results_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../.yarn/__virtual__/babel-loader-virtual-58a043f32a/0/cache/babel-loader-npm-9.1.0-6467162cbf-774758febd.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!../../../../../.yarn/__virtual__/vue-loader-virtual-a1a4b187c3/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./Results.vue?vue&type=script&lang=js */ "./.yarn/__virtual__/babel-loader-virtual-58a043f32a/0/cache/babel-loader-npm-9.1.0-6467162cbf-774758febd.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./.yarn/__virtual__/vue-loader-virtual-a1a4b187c3/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./vendor/cl/quiz/js/Vue/Results.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./vendor/cl/quiz/js/Vue/Answer.vue?vue&type=template&id=31200b40":
/*!************************************************************************!*\
  !*** ./vendor/cl/quiz/js/Vue/Answer.vue?vue&type=template&id=31200b40 ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _yarn_virtual_babel_loader_virtual_58a043f32a_0_cache_babel_loader_npm_9_1_0_6467162cbf_774758febd_zip_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_use_yarn_virtual_vue_loader_virtual_efc584a4ba_0_cache_vue_loader_npm_17_0_1_f552b82805_42cc8c8ff0_zip_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_yarn_virtual_vue_loader_virtual_a1a4b187c3_0_cache_vue_loader_npm_17_0_1_f552b82805_42cc8c8ff0_zip_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_Answer_vue_vue_type_template_id_31200b40__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _yarn_virtual_babel_loader_virtual_58a043f32a_0_cache_babel_loader_npm_9_1_0_6467162cbf_774758febd_zip_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_use_yarn_virtual_vue_loader_virtual_efc584a4ba_0_cache_vue_loader_npm_17_0_1_f552b82805_42cc8c8ff0_zip_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_yarn_virtual_vue_loader_virtual_a1a4b187c3_0_cache_vue_loader_npm_17_0_1_f552b82805_42cc8c8ff0_zip_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_Answer_vue_vue_type_template_id_31200b40__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../.yarn/__virtual__/babel-loader-virtual-58a043f32a/0/cache/babel-loader-npm-9.1.0-6467162cbf-774758febd.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!../../../../../.yarn/__virtual__/vue-loader-virtual-efc584a4ba/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../.yarn/__virtual__/vue-loader-virtual-a1a4b187c3/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./Answer.vue?vue&type=template&id=31200b40 */ "./.yarn/__virtual__/babel-loader-virtual-58a043f32a/0/cache/babel-loader-npm-9.1.0-6467162cbf-774758febd.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./.yarn/__virtual__/vue-loader-virtual-efc584a4ba/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./.yarn/__virtual__/vue-loader-virtual-a1a4b187c3/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./vendor/cl/quiz/js/Vue/Answer.vue?vue&type=template&id=31200b40");


/***/ }),

/***/ "./vendor/cl/quiz/js/Vue/Closed.vue?vue&type=template&id=3397150e":
/*!************************************************************************!*\
  !*** ./vendor/cl/quiz/js/Vue/Closed.vue?vue&type=template&id=3397150e ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _yarn_virtual_babel_loader_virtual_58a043f32a_0_cache_babel_loader_npm_9_1_0_6467162cbf_774758febd_zip_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_use_yarn_virtual_vue_loader_virtual_efc584a4ba_0_cache_vue_loader_npm_17_0_1_f552b82805_42cc8c8ff0_zip_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_yarn_virtual_vue_loader_virtual_a1a4b187c3_0_cache_vue_loader_npm_17_0_1_f552b82805_42cc8c8ff0_zip_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_Closed_vue_vue_type_template_id_3397150e__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _yarn_virtual_babel_loader_virtual_58a043f32a_0_cache_babel_loader_npm_9_1_0_6467162cbf_774758febd_zip_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_use_yarn_virtual_vue_loader_virtual_efc584a4ba_0_cache_vue_loader_npm_17_0_1_f552b82805_42cc8c8ff0_zip_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_yarn_virtual_vue_loader_virtual_a1a4b187c3_0_cache_vue_loader_npm_17_0_1_f552b82805_42cc8c8ff0_zip_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_Closed_vue_vue_type_template_id_3397150e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../.yarn/__virtual__/babel-loader-virtual-58a043f32a/0/cache/babel-loader-npm-9.1.0-6467162cbf-774758febd.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!../../../../../.yarn/__virtual__/vue-loader-virtual-efc584a4ba/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../.yarn/__virtual__/vue-loader-virtual-a1a4b187c3/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./Closed.vue?vue&type=template&id=3397150e */ "./.yarn/__virtual__/babel-loader-virtual-58a043f32a/0/cache/babel-loader-npm-9.1.0-6467162cbf-774758febd.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./.yarn/__virtual__/vue-loader-virtual-efc584a4ba/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./.yarn/__virtual__/vue-loader-virtual-a1a4b187c3/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./vendor/cl/quiz/js/Vue/Closed.vue?vue&type=template&id=3397150e");


/***/ }),

/***/ "./vendor/cl/quiz/js/Vue/Expired.vue?vue&type=template&id=163d0973":
/*!*************************************************************************!*\
  !*** ./vendor/cl/quiz/js/Vue/Expired.vue?vue&type=template&id=163d0973 ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _yarn_virtual_babel_loader_virtual_58a043f32a_0_cache_babel_loader_npm_9_1_0_6467162cbf_774758febd_zip_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_use_yarn_virtual_vue_loader_virtual_efc584a4ba_0_cache_vue_loader_npm_17_0_1_f552b82805_42cc8c8ff0_zip_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_yarn_virtual_vue_loader_virtual_a1a4b187c3_0_cache_vue_loader_npm_17_0_1_f552b82805_42cc8c8ff0_zip_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_Expired_vue_vue_type_template_id_163d0973__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _yarn_virtual_babel_loader_virtual_58a043f32a_0_cache_babel_loader_npm_9_1_0_6467162cbf_774758febd_zip_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_use_yarn_virtual_vue_loader_virtual_efc584a4ba_0_cache_vue_loader_npm_17_0_1_f552b82805_42cc8c8ff0_zip_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_yarn_virtual_vue_loader_virtual_a1a4b187c3_0_cache_vue_loader_npm_17_0_1_f552b82805_42cc8c8ff0_zip_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_Expired_vue_vue_type_template_id_163d0973__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../.yarn/__virtual__/babel-loader-virtual-58a043f32a/0/cache/babel-loader-npm-9.1.0-6467162cbf-774758febd.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!../../../../../.yarn/__virtual__/vue-loader-virtual-efc584a4ba/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../.yarn/__virtual__/vue-loader-virtual-a1a4b187c3/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./Expired.vue?vue&type=template&id=163d0973 */ "./.yarn/__virtual__/babel-loader-virtual-58a043f32a/0/cache/babel-loader-npm-9.1.0-6467162cbf-774758febd.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./.yarn/__virtual__/vue-loader-virtual-efc584a4ba/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./.yarn/__virtual__/vue-loader-virtual-a1a4b187c3/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./vendor/cl/quiz/js/Vue/Expired.vue?vue&type=template&id=163d0973");


/***/ }),

/***/ "./vendor/cl/quiz/js/Vue/Initial.vue?vue&type=template&id=65449212":
/*!*************************************************************************!*\
  !*** ./vendor/cl/quiz/js/Vue/Initial.vue?vue&type=template&id=65449212 ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _yarn_virtual_babel_loader_virtual_58a043f32a_0_cache_babel_loader_npm_9_1_0_6467162cbf_774758febd_zip_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_use_yarn_virtual_vue_loader_virtual_efc584a4ba_0_cache_vue_loader_npm_17_0_1_f552b82805_42cc8c8ff0_zip_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_yarn_virtual_vue_loader_virtual_a1a4b187c3_0_cache_vue_loader_npm_17_0_1_f552b82805_42cc8c8ff0_zip_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_Initial_vue_vue_type_template_id_65449212__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _yarn_virtual_babel_loader_virtual_58a043f32a_0_cache_babel_loader_npm_9_1_0_6467162cbf_774758febd_zip_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_use_yarn_virtual_vue_loader_virtual_efc584a4ba_0_cache_vue_loader_npm_17_0_1_f552b82805_42cc8c8ff0_zip_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_yarn_virtual_vue_loader_virtual_a1a4b187c3_0_cache_vue_loader_npm_17_0_1_f552b82805_42cc8c8ff0_zip_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_Initial_vue_vue_type_template_id_65449212__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../.yarn/__virtual__/babel-loader-virtual-58a043f32a/0/cache/babel-loader-npm-9.1.0-6467162cbf-774758febd.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!../../../../../.yarn/__virtual__/vue-loader-virtual-efc584a4ba/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../.yarn/__virtual__/vue-loader-virtual-a1a4b187c3/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./Initial.vue?vue&type=template&id=65449212 */ "./.yarn/__virtual__/babel-loader-virtual-58a043f32a/0/cache/babel-loader-npm-9.1.0-6467162cbf-774758febd.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./.yarn/__virtual__/vue-loader-virtual-efc584a4ba/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./.yarn/__virtual__/vue-loader-virtual-a1a4b187c3/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./vendor/cl/quiz/js/Vue/Initial.vue?vue&type=template&id=65449212");


/***/ }),

/***/ "./vendor/cl/quiz/js/Vue/Preview.vue?vue&type=template&id=626b86d4":
/*!*************************************************************************!*\
  !*** ./vendor/cl/quiz/js/Vue/Preview.vue?vue&type=template&id=626b86d4 ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _yarn_virtual_babel_loader_virtual_58a043f32a_0_cache_babel_loader_npm_9_1_0_6467162cbf_774758febd_zip_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_use_yarn_virtual_vue_loader_virtual_efc584a4ba_0_cache_vue_loader_npm_17_0_1_f552b82805_42cc8c8ff0_zip_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_yarn_virtual_vue_loader_virtual_a1a4b187c3_0_cache_vue_loader_npm_17_0_1_f552b82805_42cc8c8ff0_zip_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_Preview_vue_vue_type_template_id_626b86d4__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _yarn_virtual_babel_loader_virtual_58a043f32a_0_cache_babel_loader_npm_9_1_0_6467162cbf_774758febd_zip_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_use_yarn_virtual_vue_loader_virtual_efc584a4ba_0_cache_vue_loader_npm_17_0_1_f552b82805_42cc8c8ff0_zip_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_yarn_virtual_vue_loader_virtual_a1a4b187c3_0_cache_vue_loader_npm_17_0_1_f552b82805_42cc8c8ff0_zip_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_Preview_vue_vue_type_template_id_626b86d4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../.yarn/__virtual__/babel-loader-virtual-58a043f32a/0/cache/babel-loader-npm-9.1.0-6467162cbf-774758febd.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!../../../../../.yarn/__virtual__/vue-loader-virtual-efc584a4ba/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../.yarn/__virtual__/vue-loader-virtual-a1a4b187c3/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./Preview.vue?vue&type=template&id=626b86d4 */ "./.yarn/__virtual__/babel-loader-virtual-58a043f32a/0/cache/babel-loader-npm-9.1.0-6467162cbf-774758febd.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./.yarn/__virtual__/vue-loader-virtual-efc584a4ba/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./.yarn/__virtual__/vue-loader-virtual-a1a4b187c3/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./vendor/cl/quiz/js/Vue/Preview.vue?vue&type=template&id=626b86d4");


/***/ }),

/***/ "./vendor/cl/quiz/js/Vue/Previewer.vue?vue&type=template&id=baa0b97a":
/*!***************************************************************************!*\
  !*** ./vendor/cl/quiz/js/Vue/Previewer.vue?vue&type=template&id=baa0b97a ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _yarn_virtual_babel_loader_virtual_58a043f32a_0_cache_babel_loader_npm_9_1_0_6467162cbf_774758febd_zip_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_use_yarn_virtual_vue_loader_virtual_efc584a4ba_0_cache_vue_loader_npm_17_0_1_f552b82805_42cc8c8ff0_zip_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_yarn_virtual_vue_loader_virtual_a1a4b187c3_0_cache_vue_loader_npm_17_0_1_f552b82805_42cc8c8ff0_zip_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_Previewer_vue_vue_type_template_id_baa0b97a__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _yarn_virtual_babel_loader_virtual_58a043f32a_0_cache_babel_loader_npm_9_1_0_6467162cbf_774758febd_zip_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_use_yarn_virtual_vue_loader_virtual_efc584a4ba_0_cache_vue_loader_npm_17_0_1_f552b82805_42cc8c8ff0_zip_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_yarn_virtual_vue_loader_virtual_a1a4b187c3_0_cache_vue_loader_npm_17_0_1_f552b82805_42cc8c8ff0_zip_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_Previewer_vue_vue_type_template_id_baa0b97a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../.yarn/__virtual__/babel-loader-virtual-58a043f32a/0/cache/babel-loader-npm-9.1.0-6467162cbf-774758febd.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!../../../../../.yarn/__virtual__/vue-loader-virtual-efc584a4ba/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../.yarn/__virtual__/vue-loader-virtual-a1a4b187c3/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./Previewer.vue?vue&type=template&id=baa0b97a */ "./.yarn/__virtual__/babel-loader-virtual-58a043f32a/0/cache/babel-loader-npm-9.1.0-6467162cbf-774758febd.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./.yarn/__virtual__/vue-loader-virtual-efc584a4ba/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./.yarn/__virtual__/vue-loader-virtual-a1a4b187c3/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./vendor/cl/quiz/js/Vue/Previewer.vue?vue&type=template&id=baa0b97a");


/***/ }),

/***/ "./vendor/cl/quiz/js/Vue/Question.vue?vue&type=template&id=54140808":
/*!**************************************************************************!*\
  !*** ./vendor/cl/quiz/js/Vue/Question.vue?vue&type=template&id=54140808 ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _yarn_virtual_babel_loader_virtual_58a043f32a_0_cache_babel_loader_npm_9_1_0_6467162cbf_774758febd_zip_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_use_yarn_virtual_vue_loader_virtual_efc584a4ba_0_cache_vue_loader_npm_17_0_1_f552b82805_42cc8c8ff0_zip_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_yarn_virtual_vue_loader_virtual_a1a4b187c3_0_cache_vue_loader_npm_17_0_1_f552b82805_42cc8c8ff0_zip_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_Question_vue_vue_type_template_id_54140808__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _yarn_virtual_babel_loader_virtual_58a043f32a_0_cache_babel_loader_npm_9_1_0_6467162cbf_774758febd_zip_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_use_yarn_virtual_vue_loader_virtual_efc584a4ba_0_cache_vue_loader_npm_17_0_1_f552b82805_42cc8c8ff0_zip_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_yarn_virtual_vue_loader_virtual_a1a4b187c3_0_cache_vue_loader_npm_17_0_1_f552b82805_42cc8c8ff0_zip_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_Question_vue_vue_type_template_id_54140808__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../.yarn/__virtual__/babel-loader-virtual-58a043f32a/0/cache/babel-loader-npm-9.1.0-6467162cbf-774758febd.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!../../../../../.yarn/__virtual__/vue-loader-virtual-efc584a4ba/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../.yarn/__virtual__/vue-loader-virtual-a1a4b187c3/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./Question.vue?vue&type=template&id=54140808 */ "./.yarn/__virtual__/babel-loader-virtual-58a043f32a/0/cache/babel-loader-npm-9.1.0-6467162cbf-774758febd.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./.yarn/__virtual__/vue-loader-virtual-efc584a4ba/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./.yarn/__virtual__/vue-loader-virtual-a1a4b187c3/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./vendor/cl/quiz/js/Vue/Question.vue?vue&type=template&id=54140808");


/***/ }),

/***/ "./vendor/cl/quiz/js/Vue/Results.vue?vue&type=template&id=066e6478":
/*!*************************************************************************!*\
  !*** ./vendor/cl/quiz/js/Vue/Results.vue?vue&type=template&id=066e6478 ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _yarn_virtual_babel_loader_virtual_58a043f32a_0_cache_babel_loader_npm_9_1_0_6467162cbf_774758febd_zip_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_use_yarn_virtual_vue_loader_virtual_efc584a4ba_0_cache_vue_loader_npm_17_0_1_f552b82805_42cc8c8ff0_zip_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_yarn_virtual_vue_loader_virtual_a1a4b187c3_0_cache_vue_loader_npm_17_0_1_f552b82805_42cc8c8ff0_zip_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_Results_vue_vue_type_template_id_066e6478__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _yarn_virtual_babel_loader_virtual_58a043f32a_0_cache_babel_loader_npm_9_1_0_6467162cbf_774758febd_zip_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_use_yarn_virtual_vue_loader_virtual_efc584a4ba_0_cache_vue_loader_npm_17_0_1_f552b82805_42cc8c8ff0_zip_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_yarn_virtual_vue_loader_virtual_a1a4b187c3_0_cache_vue_loader_npm_17_0_1_f552b82805_42cc8c8ff0_zip_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_Results_vue_vue_type_template_id_066e6478__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../.yarn/__virtual__/babel-loader-virtual-58a043f32a/0/cache/babel-loader-npm-9.1.0-6467162cbf-774758febd.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!../../../../../.yarn/__virtual__/vue-loader-virtual-efc584a4ba/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../.yarn/__virtual__/vue-loader-virtual-a1a4b187c3/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./Results.vue?vue&type=template&id=066e6478 */ "./.yarn/__virtual__/babel-loader-virtual-58a043f32a/0/cache/babel-loader-npm-9.1.0-6467162cbf-774758febd.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./.yarn/__virtual__/vue-loader-virtual-efc584a4ba/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./.yarn/__virtual__/vue-loader-virtual-a1a4b187c3/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./vendor/cl/quiz/js/Vue/Results.vue?vue&type=template&id=066e6478");


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor","Course","Users","common"], () => (__webpack_exec__("./vendor/cl/quiz/index.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztBQUVyRCxDQUFnTjtBQUNoTixpQ0FBaUMseU5BQWUsQ0FBQyw0RUFBTSxhQUFhLDhFQUFNO0FBQzFFO0FBQ0EsSUFBSSxLQUFVLEVBQUUsRUFZZjs7O0FBR0QsaUVBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEJ1RDtBQUNWO0FBQ0w7O0FBRXZELENBQWdOO0FBQ2hOLGlDQUFpQyx5TkFBZSxDQUFDLDhFQUFNLGFBQWEsZ0ZBQU07QUFDMUU7QUFDQSxJQUFJLEtBQVUsRUFBRSxFQVlmOzs7QUFHRCxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QnNEO0FBQ1Y7QUFDTDs7QUFFdEQsQ0FBZ047QUFDaE4saUNBQWlDLHlOQUFlLENBQUMsNkVBQU0sYUFBYSwrRUFBTTtBQUMxRTtBQUNBLElBQUksS0FBVSxFQUFFLEVBWWY7OztBQUdELGlFQUFlOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3RCcUQ7QUFDVjtBQUNMOztBQUVyRCxDQUFnTjtBQUNoTixpQ0FBaUMseU5BQWUsQ0FBQyw0RUFBTSxhQUFhLDhFQUFNO0FBQzFFO0FBQ0EsSUFBSSxLQUFVLEVBQUUsRUFZZjs7O0FBR0QsaUVBQWU7Ozs7Ozs7Ozs7Ozs7OztBQ3RCaWE7Ozs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7Ozs7QUNBQzs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7Ozs7QUNBRTs7Ozs7Ozs7Ozs7Ozs7O0FDQUQ7Ozs7Ozs7Ozs7Ozs7OztBQ0FEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY3NlMzM1Ly4vdmVuZG9yL2NsL3F1aXovanMvVnVlL0Fuc3dlci52dWUiLCJ3ZWJwYWNrOi8vY3NlMzM1Ly4vdmVuZG9yL2NsL3F1aXovanMvVnVlL0Nsb3NlZC52dWUiLCJ3ZWJwYWNrOi8vY3NlMzM1Ly4vdmVuZG9yL2NsL3F1aXovanMvVnVlL0V4cGlyZWQudnVlIiwid2VicGFjazovL2NzZTMzNS8uL3ZlbmRvci9jbC9xdWl6L2pzL1Z1ZS9Jbml0aWFsLnZ1ZSIsIndlYnBhY2s6Ly9jc2UzMzUvLi92ZW5kb3IvY2wvcXVpei9qcy9WdWUvUHJldmlldy52dWUiLCJ3ZWJwYWNrOi8vY3NlMzM1Ly4vdmVuZG9yL2NsL3F1aXovanMvVnVlL1ByZXZpZXdlci52dWUiLCJ3ZWJwYWNrOi8vY3NlMzM1Ly4vdmVuZG9yL2NsL3F1aXovanMvVnVlL1F1ZXN0aW9uLnZ1ZSIsIndlYnBhY2s6Ly9jc2UzMzUvLi92ZW5kb3IvY2wvcXVpei9qcy9WdWUvUmVzdWx0cy52dWUiLCJ3ZWJwYWNrOi8vY3NlMzM1Ly4vdmVuZG9yL2NsL3F1aXovaW5kZXguanMiLCJ3ZWJwYWNrOi8vY3NlMzM1Ly4vdmVuZG9yL2NsL3F1aXovanMvUXVpei5qcyIsIndlYnBhY2s6Ly9jc2UzMzUvLi92ZW5kb3IvY2wvcXVpei9qcy9RdWl6RGF0YS5qcyIsIndlYnBhY2s6Ly9jc2UzMzUvLi92ZW5kb3IvY2wvcXVpei9qcy9RdWl6RmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9jc2UzMzUvLi92ZW5kb3IvY2wvcXVpei9qcy9TdGF0ZXMuanMiLCJ3ZWJwYWNrOi8vY3NlMzM1Ly4vdmVuZG9yL2NsL3F1aXovX3F1aXouc2NzcyIsIndlYnBhY2s6Ly9jc2UzMzUvLi92ZW5kb3IvY2wvcXVpei9fcXVpei5zY3NzP2M1MzMiLCJ3ZWJwYWNrOi8vY3NlMzM1Ly4vdmVuZG9yL2NsL3F1aXovanMvVnVlL0Fuc3dlci52dWU/NWYzOCIsIndlYnBhY2s6Ly9jc2UzMzUvLi92ZW5kb3IvY2wvcXVpei9qcy9WdWUvQ2xvc2VkLnZ1ZT9mZTVkIiwid2VicGFjazovL2NzZTMzNS8uL3ZlbmRvci9jbC9xdWl6L2pzL1Z1ZS9FeHBpcmVkLnZ1ZT8yYTUxIiwid2VicGFjazovL2NzZTMzNS8uL3ZlbmRvci9jbC9xdWl6L2pzL1Z1ZS9Jbml0aWFsLnZ1ZT82OTdlIiwid2VicGFjazovL2NzZTMzNS8uL3ZlbmRvci9jbC9xdWl6L2pzL1Z1ZS9QcmV2aWV3LnZ1ZT85MmM0Iiwid2VicGFjazovL2NzZTMzNS8uL3ZlbmRvci9jbC9xdWl6L2pzL1Z1ZS9QcmV2aWV3ZXIudnVlPzY1NTkiLCJ3ZWJwYWNrOi8vY3NlMzM1Ly4vdmVuZG9yL2NsL3F1aXovanMvVnVlL1F1ZXN0aW9uLnZ1ZT9mNzQ0Iiwid2VicGFjazovL2NzZTMzNS8uL3ZlbmRvci9jbC9xdWl6L2pzL1Z1ZS9SZXN1bHRzLnZ1ZT82NWUzIiwid2VicGFjazovL2NzZTMzNS8uL3ZlbmRvci9jbC9xdWl6L2pzL1Z1ZS9BbnN3ZXIudnVlP2JiY2MiLCJ3ZWJwYWNrOi8vY3NlMzM1Ly4vdmVuZG9yL2NsL3F1aXovanMvVnVlL0Nsb3NlZC52dWU/YjI0YyIsIndlYnBhY2s6Ly9jc2UzMzUvLi92ZW5kb3IvY2wvcXVpei9qcy9WdWUvRXhwaXJlZC52dWU/N2I0MiIsIndlYnBhY2s6Ly9jc2UzMzUvLi92ZW5kb3IvY2wvcXVpei9qcy9WdWUvSW5pdGlhbC52dWU/NmI2NSIsIndlYnBhY2s6Ly9jc2UzMzUvLi92ZW5kb3IvY2wvcXVpei9qcy9WdWUvUHJldmlldy52dWU/MWUyMSIsIndlYnBhY2s6Ly9jc2UzMzUvLi92ZW5kb3IvY2wvcXVpei9qcy9WdWUvUHJldmlld2VyLnZ1ZT8yNzI2Iiwid2VicGFjazovL2NzZTMzNS8uL3ZlbmRvci9jbC9xdWl6L2pzL1Z1ZS9RdWVzdGlvbi52dWU/MmU4NSIsIndlYnBhY2s6Ly9jc2UzMzUvLi92ZW5kb3IvY2wvcXVpei9qcy9WdWUvUmVzdWx0cy52dWU/NmYyNSIsIndlYnBhY2s6Ly9jc2UzMzUvLi92ZW5kb3IvY2wvcXVpei9qcy9WdWUvQW5zd2VyLnZ1ZT81Y2VhIiwid2VicGFjazovL2NzZTMzNS8uL3ZlbmRvci9jbC9xdWl6L2pzL1Z1ZS9DbG9zZWQudnVlPzQzMTYiLCJ3ZWJwYWNrOi8vY3NlMzM1Ly4vdmVuZG9yL2NsL3F1aXovanMvVnVlL0V4cGlyZWQudnVlPzc1MTYiLCJ3ZWJwYWNrOi8vY3NlMzM1Ly4vdmVuZG9yL2NsL3F1aXovanMvVnVlL0luaXRpYWwudnVlPzExYzIiLCJ3ZWJwYWNrOi8vY3NlMzM1Ly4vdmVuZG9yL2NsL3F1aXovanMvVnVlL1ByZXZpZXcudnVlPzU0NmMiLCJ3ZWJwYWNrOi8vY3NlMzM1Ly4vdmVuZG9yL2NsL3F1aXovanMvVnVlL1ByZXZpZXdlci52dWU/Y2E2NiIsIndlYnBhY2s6Ly9jc2UzMzUvLi92ZW5kb3IvY2wvcXVpei9qcy9WdWUvUXVlc3Rpb24udnVlPzBmOTMiLCJ3ZWJwYWNrOi8vY3NlMzM1Ly4vdmVuZG9yL2NsL3F1aXovanMvVnVlL1Jlc3VsdHMudnVlPzAzMGYiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8ZGl2PlxuICAgIDxoMiB2LWlmPVwicXVpei5sZW5ndGggPiAxXCI+UXVlc3Rpb24ge3txdWl6LnF1ZXN0aW9ufX0gb2Yge3txdWl6Lmxlbmd0aH19PC9oMj5cbiAgICAgIDxmb3JtIHJlZj1cImZvcm1cIiBtZXRob2Q9XCJwb3N0XCIgQHN1Ym1pdC5wcmV2ZW50PVwic3VibWl0XCI+XG4gICAgICAgIDxkaXYgdi1odG1sPVwicXVpei5hbnN3ZXJcIj48L2Rpdj5cbiAgICAgICAgPHAgdi1pZj1cInF1aXoucXVlc3Rpb24gPCBxdWl6Lmxlbmd0aFwiPjxidXR0b24gdHlwZT1cInN1Ym1pdFwiPk5leHQgUXVlc3Rpb248L2J1dHRvbj48L3A+XG4gICAgICA8L2Zvcm0+XG4gICAgPGRpdiB2LWlmPVwicXVpei5xdWVzdGlvbiA+PSBxdWl6Lmxlbmd0aFwiPlxuICAgICAgPHAgY2xhc3M9XCJkb25lXCI+VGhpcyBRdWl6IGlzIENvbXBsZXRlPC9wPlxuICAgICAgPHAgY2xhc3M9XCJjZW50ZXJcIj5Zb3UgbWF5IDxhIEBjbGljay5wcmV2ZW50PVwicmV0YWtlXCI+cmV0YWtlIHRoZSBxdWl6PC9hPiBpZiB5b3Ugd2lzaDwvcD5cbiAgICAgIDxyZXN1bHRzIDpxdWl6PVwicXVpelwiPjwvcmVzdWx0cz5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGltcG9ydCB7U3RhdGVzfSBmcm9tICcuLi9TdGF0ZXMnO1xuICAgIGltcG9ydCBSZXN1bHRzVnVlIGZyb20gJy4vUmVzdWx0cy52dWUnO1xuXG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBkYXRhOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBwcm9wczogW1xuICAgICAgICAgICAgJ3F1aXonXG4gICAgICAgIF0sXG4gICAgICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgICAgICdyZXN1bHRzJzogUmVzdWx0c1Z1ZVxuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBzdWJtaXQoKSB7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5xdWl6LnF1ZXN0aW9uIDwgdGhpcy5xdWl6Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCduZXctc3RhdGUnLCBTdGF0ZXMuUVVFU1RJT04pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByZXRha2UoKSB7XG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCh0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuICA8ZGl2PlxuICAgIDxwIGNsYXNzPVwiY2VudGVyYm94IGNvbXAgY2VudGVyXCI+VGhlIHF1aXogaXMgY2xvc2VkIGFuZCBub3QgYXZhaWxhYmxlIGF0IHRoaXMgdGltZS48L3A+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IHtTdGF0ZXN9IGZyb20gJy4uL1N0YXRlcyc7XG5cbiAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgcHJvcHM6IFtcbiAgICAgICAgICAncXVpeidcbiAgICAgIF1cbiAgfVxuXG48L3NjcmlwdD5cbiIsIjx0ZW1wbGF0ZT5cbiAgPGRpdj5cbiAgICA8cCBjbGFzcz1cImNlbnRlcmJveCBjb21wXCI+VGhlIHF1aXogaGFzIGV4cGlyZWQgYW5kIGNhbiBubyBsb25nZXIgYmUgdGFrZW4uIFF1aXp6ZXMgZXhwaXJlIGF0IHRoZSB0aW1lXG4gICAgICB0aGUgYXNzaWdubWVudCBpcyBkdWUuIDwvcD5cbiAgICA8cD5Zb3UgY2FuIHByb2NlZWQgdGhyb3VnaCB0aGUgcXVpeiBmb3IgcHJhY3RpY2UgcHVycG9zZXMsIGJ1dCBuZXcgZ3JhZGVzIGFuZFxuICAgICAgc3VibWlzc2lvbnMgd2lsbCBub3QgYmUgcG9zc2libGUuPC9wPlxuXG4gICAgPHA+V2hlbiByZWFkeSwgPGEgdi1vbjpjbGljay5wcmV2ZW50PVwicHJvY2VlZCgpXCI+Y2xpY2sgdG8gcHJvY2VlZCB0byB0aGUgcXVpei48L2E+IFlvdSBjYW4gYWxzb1xuICAgICAgPGEgdi1vbjpjbGljay5wcmV2ZW50PVwicmVzdWx0cygpXCI+anVtcCBkaXJlY3RseSB0byB5b3VyIHF1aXogcmVzdWx0cy48L2E+PC9wPlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCB7U3RhdGVzfSBmcm9tICcuLi9TdGF0ZXMnO1xuXG4gIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgIHByb3BzOiBbXG4gICAgICAgICAgJ3F1aXonXG4gICAgICBdLFxuICAgICAgbWV0aG9kczoge1xuICAgICAgICAgIHByb2NlZWQoKSB7XG4gICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ25ldy1zdGF0ZScsIFN0YXRlcy5TVEFSVCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICByZXN1bHRzKCkge1xuICAgICAgICAgICAgICB0aGlzLiRlbWl0KCduZXctc3RhdGUnLCBTdGF0ZXMuUkVTVUxUUyk7XG4gICAgICAgICAgfVxuICAgICAgfVxuICB9XG5cbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuICA8ZGl2PlxuICAgIDxkaXYgdi1odG1sPVwicXVpei5zcGxhc2hcIj48L2Rpdj5cblxuICAgIDxwIGNsYXNzPVwiY2VudGVyXCIgdi1pZj1cInF1aXoubGlnaHRuaW5nID09PSBudWxsXCI+VGhpcyBxdWl6IGhhcyBubyBzcGVjaWZpZWQgdGltZSBsaW1pdC48L3A+XG4gICAgPHAgdi1pZj1cInF1aXoubGlnaHRuaW5nICE9PSBudWxsXCIgY2xhc3M9XCJjZW50ZXJib3ggc2Vjb25kYSBjZW50ZXJcIj5UaGlzIGlzIGEgbGlnaHRuaW5nIHF1aXouXG4gICAgICBZb3UgaGF2ZSB7e3F1aXoubGlnaHRuaW5nfX0gc2Vjb25kcyB0byBhbnN3ZXIgZWFjaCBxdWVzdGlvbi48L3A+XG5cbiAgICA8dGVtcGxhdGUgdi1pZj1cImFsbG93ZWRUcmllcyA9PT0gMFwiPlxuICAgICAgPHA+V2hlbiByZWFkeSwgPGEgdi1vbjpjbGljay5wcmV2ZW50PVwicHJvY2VlZCgpXCI+Y2xpY2sgdG8gcHJvY2VlZCB0byB0aGUgcXVpei48L2E+IFlvdSBjYW4gYWxzb1xuICAgICAgPGEgdi1vbjpjbGljay5wcmV2ZW50PVwicmVzdWx0cygpXCI+anVtcCBkaXJlY3RseSB0byB5b3VyIHF1aXogcmVzdWx0cy48L2E+PC9wPlxuICAgIDwvdGVtcGxhdGU+XG4gICAgPHRlbXBsYXRlIHYtZWxzZT5cbiAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwibnVtVHJpZXMgPCBhbGxvd2VkVHJpZXNcIj5cbiAgICAgICAgPHAgY2xhc3M9XCJjZW50ZXJcIiB2LWlmPVwiYWxsb3dlZFRyaWVzID4gMFwiPllvdSBoYXZlIHt7YWxsb3dlZFRyaWVzIC0gbnVtVHJpZXN9fSB7eyhhbGxvd2VkVHJpZXMgLSBudW1UcmllcykgPiAxID8gJ3RyaWVzJyA6ICd0cnknIH19IGxlZnQuPC9wPlxuICAgICAgICA8cD5XaGVuIHJlYWR5LCA8YSB2LW9uOmNsaWNrLnByZXZlbnQ9XCJwcm9jZWVkKClcIj5jbGljayB0byBwcm9jZWVkIHRvIHRoZSBxdWl6LjwvYT4gWW91IGNhbiBhbHNvXG4gICAgICAgICAgPGEgdi1vbjpjbGljay5wcmV2ZW50PVwicmVzdWx0cygpXCI+anVtcCBkaXJlY3RseSB0byB5b3VyIHF1aXogcmVzdWx0cy48L2E+PC9wPlxuICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgIDx0ZW1wbGF0ZSB2LWVsc2U+XG4gICAgICAgIDxwPllvdSBoYXZlIGNvbXBsZXRlZCB5b3VyIG1heGltdW0gbnVtYmVyIG9mIHRyaWVzIGZvciB0aGlzIHF1aXogYW5kIGNhbiBubyBsb25nZXIgdGFrZSBpdC4gWW91IGNhblxuICAgICAgICAgIDxhIHYtb246Y2xpY2sucHJldmVudD1cInJlc3VsdHMoKVwiPmp1bXAgZGlyZWN0bHkgdG8geW91ciBxdWl6IHJlc3VsdHMuPC9hPjwvcD5cbiAgICAgIDwvdGVtcGxhdGU+XG4gICAgPC90ZW1wbGF0ZT5cblxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCB7U3RhdGVzfSBmcm9tICcuLi9TdGF0ZXMnO1xuXG4gIGV4cG9ydCBkZWZhdWx0IHtcbiAgICBwcm9wczogW1xuICAgICAgJ3F1aXonXG4gICAgXSxcbiAgICBkYXRhOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgICdudW1Ucmllcyc6IDAsXG4gICAgICAgICdhbGxvd2VkVHJpZXMnOiAwLFxuICAgICAgICAnbnVtRmluaXNoZWQnOiAwXG4gICAgICB9XG4gICAgfSxcbiAgICBtb3VudGVkKCkge1xuICAgICAgdGhpcy5hbGxvd2VkVHJpZXMgPSArdGhpcy5xdWl6WydhbGxvd2VkLXRyaWVzJ107XG4gICAgICB0aGlzLm51bVRyaWVzID0gK3RoaXMucXVpelsnbnVtLXRyaWVzJ107XG4gICAgICB0aGlzLm51bUZpbmlzaGVkID0gK3RoaXMucXVpelsnbnVtLWZpbmlzaGVkJ107XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICBwcm9jZWVkKCkge1xuICAgICAgICB0aGlzLiRlbWl0KCduZXctc3RhdGUnLCBTdGF0ZXMuU1RBUlQpO1xuICAgICAgfSxcbiAgICAgIHJlc3VsdHMoKSB7XG4gICAgICAgIHRoaXMuJGVtaXQoJ25ldy1zdGF0ZScsIFN0YXRlcy5SRVNVTFRTKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuPC9zY3JpcHQ+XG4iLCI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJwcmV2aWV3XCI+XG4gICAgPGRpdiB2LWlmPVwicXVlc3Rpb24hPT1udWxsXCI+XG4gICAgICA8cCBjbGFzcz1cInByZXZpZXdcIiB2LWlmPVwicXVpei5sZW5ndGggPiAxXCI+UHJldmlldyBvZiB7e3F1aXoucXVlc3Rpb259fS4gQXZhaWxhYmxlIHRvIHN0YWZmIG9ubHkuPC9wPlxuICAgICAgPGZvcm0gcmVmPVwiZm9ybVwiIG1ldGhvZD1cInBvc3RcIiBAc3VibWl0LnByZXZlbnQ9XCJzdWJtaXRcIj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwicXVlc3Rpb24tdGltZVwiIDp2YWx1ZT1cInRpbWVcIj5cbiAgICAgICAgPGRpdiB2LWh0bWw9XCJxdWVzdGlvblwiPjwvZGl2PlxuICAgICAgICA8cD48YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TdWJtaXQ8L2J1dHRvbj48L3A+XG4gICAgICAgIDxocj5cblxuICAgICAgICA8aDMgdi1pZj1cImFuc3dlcnMubGVuZ3RoID4gMFwiPkFuc3dlcnM8L2gzPlxuICAgICAgICA8ZGl2IHYtZm9yPVwiYW5zd2VyIGluIGFuc3dlcnNcIj5cbiAgICAgICAgICA8ZGl2IHYtaHRtbD1cImFuc3dlclwiPjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiB2LWlmPVwiY29tbWVudCAhPT0gbnVsbFwiPlxuICAgICAgICAgIDxoMz5Db21tZW50PC9oMz5cbiAgICAgICAgICA8ZGl2IHYtaHRtbD1cImNvbW1lbnRcIiBjbGFzcz1cImNlbnRlcmJveCBwcmltYXJ5XCI+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IHtRdWl6RGF0YX0gZnJvbSAnLi4vUXVpekRhdGEnO1xuXG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBkYXRhOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgcXVlc3Rpb246IG51bGwsXG4gICAgICAgICAgICAgICAgY29tbWVudDogbnVsbCxcbiAgICAgICAgICAgICAgICB0aW1lOiAwLFxuICAgICAgICAgICAgICAgIG11c3RQcm92aWRlTWVzc2FnZTogdW5kZWZpbmVkXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHByb3BzOiBbXG4gICAgICAgICAgICAncXVpeicsXG4gICAgICAgICAgICAnZmlsZSdcbiAgICAgICAgXSxcbiAgICAgICAgd2F0Y2g6IHtcbiAgICAgICAgICAgIGZpbGUobmV3UXVpeiwgb2xkUXVpeikge1xuICAgICAgICAgICAgICAgIHRoaXMuZmV0Y2goKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbW91bnRlZCgpIHtcbiAgICAgICAgICB0aGlzLmZldGNoKCk7XG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIGZldGNoKCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHF1ZXJ5ID0ge2ZpbGU6IHRoaXMuZmlsZX07XG4gICAgICAgICAgICAgICAgdGhpcy4kc2l0ZS5hcGkuZ2V0KGAvYXBpL3F1aXovcHJldmlldy8ke3RoaXMucXVpei50b2tlbn1gLCBxdWVyeSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXJlc3BvbnNlLmhhc0Vycm9yKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSByZXNwb25zZS5nZXREYXRhKCdxdWl6LXF1ZXN0aW9uJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucXVlc3Rpb24gPSBkYXRhLmF0dHJpYnV0ZXMucXVlc3Rpb247XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGltZSA9IGRhdGEuYXR0cmlidXRlcy50aW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1lbnQgPSBkYXRhLmF0dHJpYnV0ZXMuY29tbWVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hbnN3ZXJzID0gZGF0YS5hdHRyaWJ1dGVzLmFuc3dlcnM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubXVzdFByb3ZpZGVNZXNzYWdlID0gZGF0YS5hdHRyaWJ1dGVzLm11c3RQcm92aWRlTWVzc2FnZTtcblxuXHQgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhZnRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbC1xdWl6LWFmdGVyJyk7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIGlmKGFmdGVyICE9PSBudWxsKSB7XG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgYWZ0ZXIuaW5uZXJIVE1MID0gZGF0YS5hdHRyaWJ1dGVzLmFmdGVyO1xuXHQgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kc2l0ZS5WdWUubmV4dFRpY2soKCkgPT4ge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHNpdGUubWVzc2FnZSgnY2wtcXVpei1hZnRlci1pbnN0YWxsZWQnLCBudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRzaXRlLnRvYXN0KHRoaXMsIHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJHNpdGUudG9hc3QodGhpcywgZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwcm9jZWVkKCkge1xuXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3VibWl0KCkge1xuICAgICAgICAgICAgXHRjb25zdCBmb3JtRGF0YSA9IFF1aXpEYXRhLmdldCh0aGlzLCB0aGlzLm11c3RQcm92aWRlTWVzc2FnZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbjwvc2NyaXB0PiIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cInByZXZpZXdlclwiPlxuICAgIDxoMj5TdGFmZiBRdWVzdGlvbiBQcmV2aWV3czwvaDI+XG4gICAgPHA+VGhlc2UgbGlua3MgYWxsb3cgeW91IHRvIHByZXZpZXcgcXVpeiBxdWVzdGlvbnMuIElmIHRoZSBxdWVzdGlvbiBpcyByYW5kb21seSBzZWxlY3RlZFxuICAgICAgZnJvbSBtdWx0aXBsZSBmaWxlcywgdGhlIGZpbGVzIGFwcGVhciBiZWxvdyB0aGUgcXVlc3Rpb24uIDxzcGFuIGNsYXNzPVwic21hbGxyZWRcIj5UaGlzIHBhcnQgb2YgdGhlIHBhZ2UgYXBwZWFycyBmb3JcbnN0YWZmIG1lbWJlcnMgb25seS48L3NwYW4+PC9wPlxuXG4gICAgPGRpdiBjbGFzcz1cInNtYWxsXCI+XG4gICAgICA8ZGl2IHYtZm9yPVwicXVlc3Rpb24gaW4gcHJldmlld3NcIiA6a2V5PVwicXVlc3Rpb24ubnVtXCI+XG4gICAgICAgIDxoMz5RdWVzdGlvbiB7e3F1ZXN0aW9uLm51bX19PC9oMz5cbiAgICAgICAgPHVsIHYtaWY9XCJxdWVzdGlvbi5maWxlcy5sZW5ndGggPiAwXCI+XG4gICAgICAgICAgPGxpIHYtZm9yPVwiZmlsZSBpbiBxdWVzdGlvbi5maWxlc1wiPjxhIEBjbGljay5wcmV2ZW50PVwicHJldmlldyhmaWxlKVwiPnt7ZmlsZX19PC9hPjwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIHByb3BzOiBbXG4gICAgICAgICAgICAncXVpeidcbiAgICAgICAgXSxcbiAgICAgICAgZGF0YTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHByZXZpZXdzOiBbXVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBtb3VudGVkKCkge1xuICAgICAgICAgICAgZm9yKGxldCBpPTA7IGk8dGhpcy5xdWl6LnByZXZpZXcubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgdGhpcy5wcmV2aWV3cy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgIG51bTogaSsxLFxuICAgICAgICAgICAgICAgICAgZmlsZXM6IHRoaXMucXVpei5wcmV2aWV3W2ldXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICBwcmV2aWV3KGZpbGUpIHtcbiAgICAgICAgICAgICAgdGhpcy4kZW1pdCgncHJldmlldycsIGZpbGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuPC9zY3JpcHQ+XG4iLCI8dGVtcGxhdGU+XG4gIDxkaXY+XG4gICAgPGRpdiB2LWlmPVwicXVlc3Rpb24hPT1udWxsXCI+XG4gICAgICA8aDIgdi1pZj1cInF1aXoubGVuZ3RoID4gMVwiPlF1ZXN0aW9uIHt7cXVpei5xdWVzdGlvbn19IG9mIHt7cXVpei5sZW5ndGh9fTwvaDI+XG4gICAgICA8cCBjbGFzcz1cImNlbnRlclwiIHYtaWY9XCJyZW1haW5pbmdTZWNvbmRzICE9PSBudWxsXCI+e3tyZW1haW5pbmdNaW51dGVzfX06e3tyZW1haW5pbmdTZWNvbmRzU3RyfX0gcmVtYWluaW5nITwvcD5cbiAgICAgIDxmb3JtIHJlZj1cImZvcm1cIiBtZXRob2Q9XCJwb3N0XCIgQHN1Ym1pdC5wcmV2ZW50PVwic3VibWl0XCI+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cInF1ZXN0aW9uLXRpbWVcIiA6dmFsdWU9XCJ0aW1lXCI+XG4gICAgICAgIDxkaXYgdi1odG1sPVwicXVlc3Rpb25cIj48L2Rpdj5cbiAgICAgICAgPHA+PGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U3VibWl0PC9idXR0b24+PC9wPlxuICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCB7UXVpekRhdGF9IGZyb20gJy4uL1F1aXpEYXRhJztcbiAgaW1wb3J0IHtTdGF0ZXN9IGZyb20gJy4uL1N0YXRlcyc7XG5cbiAgZXhwb3J0IGRlZmF1bHQge1xuICAgIGRhdGE6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGFjdGl2ZTogbnVsbCxcbiAgICAgICAgcXVlc3Rpb246IG51bGwsXG4gICAgICAgIHRpbWU6IDAsXG4gICAgICAgIG11c3RQcm92aWRlTWVzc2FnZTogdW5kZWZpbmVkLFxuICAgICAgICByZW1haW5pbmdNaW51dGVzOiBudWxsLFxuICAgICAgICByZW1haW5pbmdTZWNvbmRzOiBudWxsLFxuICAgICAgICByZW1haW5pbmdTZWNvbmRzU3RyOiBudWxsXG4gICAgICB9XG4gICAgfSxcbiAgICBwcm9wczogW1xuICAgICAgJ3F1aXonXG4gICAgXSxcbiAgICBtb3VudGVkKCkge1xuICAgICAgdGhpcy4kc2l0ZS5hcGkucG9zdChgL2FwaS9xdWl6L3F1ZXN0aW9uLyR7dGhpcy5xdWl6LnRva2VufS8ke3RoaXMucXVpei5xdWVzdGlvbn1gLCB7fSlcbiAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5oYXNFcnJvcigpKSB7XG4gICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHJlc3BvbnNlLmdldERhdGEoJ3F1aXotcXVlc3Rpb24nKTtcbiAgICAgICAgICAgICAgICAgIHRoaXMudGFrZShkYXRhLmF0dHJpYnV0ZXMpO1xuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuJHNpdGUudG9hc3QodGhpcywgcmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuJHNpdGUudG9hc3QodGhpcywgZXJyb3IpO1xuICAgICAgICAgICAgICB9KTtcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgIHRha2UoZGF0YSkge1xuICAgICAgICB0aGlzLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMucXVlc3Rpb24gPSBkYXRhLnF1ZXN0aW9uO1xuICAgICAgICB0aGlzLnRpbWUgPSBkYXRhLnRpbWU7XG4gICAgICAgIHRoaXMubXVzdFByb3ZpZGVNZXNzYWdlID0gZGF0YS5tdXN0UHJvdmlkZU1lc3NhZ2U7XG5cbiAgICAgICAgY29uc3QgYWZ0ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2wtcXVpei1hZnRlcicpO1xuICAgICAgICBpZiAoYWZ0ZXIgIT09IG51bGwgJiYgZGF0YS5hZnRlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgYWZ0ZXIuaW5uZXJIVE1MID0gZGF0YS5hZnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFN1cHBvcnQgaW5kaWNhdGluZyB0byBleHRlcm5hbCBKYXZhc2NyaXB0IHRoYXQgYSBxdWl6XG4gICAgICAgIC8vIHF1ZXN0aW9uIGhhcyBiZWVuIGluc3RhbGxlZC5cbiAgICAgICAgdGhpcy4kc2l0ZS5WdWUubmV4dFRpY2soKCkgPT4ge1xuICAgICAgICAgIHRoaXMuJHNpdGUubWVzc2FnZSgnY2wtcXVpei1hZnRlci1pbnN0YWxsZWQnLCBudWxsKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHRoaXMucXVpei5saWdodG5pbmcgIT09IG51bGwpIHtcbiAgICAgICAgICB0aGlzLnJlbWFpbmluZ01pbnV0ZXMgPSBNYXRoLmZsb29yKHRoaXMucXVpei5saWdodG5pbmcgLyA2MCk7XG4gICAgICAgICAgdGhpcy5yZW1haW5pbmdTZWNvbmRzID0gdGhpcy5xdWl6LmxpZ2h0bmluZyAlIDYwO1xuICAgICAgICAgIHRoaXMucmVtYWluaW5nU2Vjb25kc1N0ciA9IHRoaXMucmVtYWluaW5nU2Vjb25kcyA8IDEwID8gJzAnICsgdGhpcy5yZW1haW5pbmdTZWNvbmRzIDogdGhpcy5yZW1haW5pbmdTZWNvbmRzO1xuICAgICAgICAgIHRoaXMudGltZXIoKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHRpbWVyKCkge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBpZighdGhpcy5hY3RpdmUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLnJlbWFpbmluZ1NlY29uZHMtLTtcbiAgICAgICAgICB0aGlzLnJlbWFpbmluZ1NlY29uZHNTdHIgPSB0aGlzLnJlbWFpbmluZ1NlY29uZHMgPCAxMCA/ICcwJyArIHRoaXMucmVtYWluaW5nU2Vjb25kcyA6IHRoaXMucmVtYWluaW5nU2Vjb25kcztcbiAgICAgICAgICBpZiAodGhpcy5yZW1haW5pbmdTZWNvbmRzID09PSAwICYmIHRoaXMucmVtYWluaW5nTWludXRlcyA9PT0gMCkge1xuICAgICAgICAgICAgLy8gUXVlc3Rpb24gaGFzIHRpbWVkIG91dFxuICAgICAgICAgICAgdGhpcy4kZW1pdCgnbmV3LXN0YXRlJywgU3RhdGVzLlFVRVNUSU9OKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodGhpcy5yZW1haW5pbmdTZWNvbmRzIDwgMCkge1xuICAgICAgICAgICAgdGhpcy5yZW1haW5pbmdNaW51dGVzLS07XG4gICAgICAgICAgICB0aGlzLnJlbWFpbmluZ1NlY29uZHMgPSA1OTtcbiAgICAgICAgICAgIHRoaXMucmVtYWluaW5nU2Vjb25kc1N0ciA9ICc1OSc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy50aW1lcigpO1xuICAgICAgICB9LCAxMDAwKVxuICAgICAgfSxcbiAgICAgIHByb2NlZWQoKSB7XG5cbiAgICAgIH0sXG4gICAgICBzdWJtaXQoKSB7XG4gICAgICAgIGNvbnN0IGZvcm1EYXRhID0gUXVpekRhdGEuZ2V0KHRoaXMsIHRoaXMubXVzdFByb3ZpZGVNZXNzYWdlKTtcbiAgICAgICAgaWYgKGZvcm1EYXRhID09PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy4kc2l0ZS5hcGkucG9zdChgL2FwaS9xdWl6L2Fuc3dlci8ke3RoaXMucXVpei50b2tlbn0vJHt0aGlzLnF1aXoucXVlc3Rpb259YCwgZm9ybURhdGEpXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICBpZiAoIXJlc3BvbnNlLmhhc0Vycm9yKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSByZXNwb25zZS5nZXREYXRhKCdxdWl6LWFuc3dlcicpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdhbnN3ZXInLCBkYXRhKTtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHNpdGUudG9hc3QodGhpcywgcmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgdGhpcy4kc2l0ZS50b2FzdCh0aGlzLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuPC9zY3JpcHQ+IiwiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwiY2wtcmVzdWx0c1wiPlxuICAgIDxkaXYgdi1pZj1cInRyaWVzICE9PSBudWxsICYmIHRyaWVzLmxlbmd0aCA+IDBcIj5cbiAgICAgIDxwPllvdXIgY3VycmVudCBiZXN0IHNjb3JlIGZvciB0aGlzIHF1aXogaXMge3toaWdofX0ve3txdWl6LnBvaW50c319LiBUaGUgc3lzdGVtIHJldGFpbnMgeW91ciBiZXN0XG4gICAgICAgIHJlc3VsdCBhcyB5b3VyIGdyYWRlIGZvciBhIHF1aXouPC9wPlxuICAgICAgPHRhYmxlIGNsYXNzPVwic21hbGwgY2VudGVyXCI+XG4gICAgICAgIDx0cj5cbiAgICAgICAgICA8dGggY2xhc3M9XCJjZW50ZXJcIj5XaGVuIFRha2VuPC90aD5cbiAgICAgICAgICA8dGg+RmluaXNoZWQ/PC90aD5cbiAgICAgICAgICA8dGg+UG9pbnRzPC90aD5cbiAgICAgICAgPC90cj5cbiAgICAgICAgPHRyIHYtZm9yPVwidHJpZWQgaW4gdHJpZXNcIiA6Y2xhc3M9XCJoaWdoID4gMCAmJiB0cmllZC5wb2ludHMgPT09IGhpZ2ggPyAnYmVzdCcgOiAnJ1wiPlxuICAgICAgICAgIDx0ZD57e3RpbWUodHJpZWQuc3RhcnQpfX08L3RkPlxuICAgICAgICAgIDx0ZD57e2VsYXBzZWQodHJpZWQuc3RhcnQsIHRyaWVkLmVuZCl9fTwvdGQ+XG4gICAgICAgICAgPHRkPnt7dHJpZWQucG9pbnRzfX08L3RkPlxuICAgICAgICA8L3RyPlxuICAgICAgICA8Y2FwdGlvbj5SZXN1bHRzIGZvciBRdWl6PC9jYXB0aW9uPlxuICAgICAgPC90YWJsZT5cbiAgICAgIDxwPklmIGEgdmFsdWUgaXMgaW5kaWNhdGVkIGluIHRoZSBGaW5pc2hlZD8gY29sdW1uLCB0aGUgcXVpelxuICAgICAgd2FzIGNvbXBsZXRlZCBpbiB0aGF0IGFtb3VudCBvZiB0aW1lIChpbiBtaW51dGVzIGFuZCBzZWNvbmRzKS48L3A+XG4gICAgPC9kaXY+XG4gICAgPHAgY2xhc3M9XCJjZW50ZXJib3ggcHJpbWFyeSBjZW50ZXJcIiB2LWlmPVwidHJpZXMgIT09IG51bGwgJiYgdHJpZXMubGVuZ3RoID09PSAwXCI+WW91IGhhdmUgbm90IHlldCBjb21wbGV0ZWQgdGhlIHF1aXosIHlldCwgc28geW91IGRvIG5vdCBoYXZlIGEgc2NvcmUuPC9wPlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cblx0ZXhwb3J0IGRlZmF1bHQge1xuXHRcdHByb3BzOiBbXG5cdFx0XHQncXVpeidcblx0XHRdLFxuXHRcdGRhdGE6IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdHRyaWVzOiBudWxsLFxuXHRcdFx0XHRoaWdoOiAwXG5cdFx0XHR9XG5cdFx0fSxcblx0XHRtb3VudGVkKCkge1xuXHRcdFx0dGhpcy4kc2l0ZS5hcGkuZ2V0KGAvYXBpL3F1aXovcmVzdWx0cy8ke3RoaXMucXVpei5hc3NpZ250YWd9LyR7dGhpcy5xdWl6LnF1aXp0YWd9YCwge30pXG5cdFx0XHRcdC50aGVuKChyZXNwb25zZSkgPT4ge1xuXHRcdFx0XHRcdGlmICghcmVzcG9uc2UuaGFzRXJyb3IoKSkge1xuXHRcdFx0XHRcdFx0bGV0IGRhdGEgPSByZXNwb25zZS5nZXREYXRhKCdxdWl6LXJlc3VsdHMnKTtcblx0XHRcdFx0XHRcdHRoaXMudHJpZXMgPSBkYXRhLmF0dHJpYnV0ZXMudHJpZXM7XG5cdFx0XHRcdFx0XHR0aGlzLmhpZ2ggPSAwO1xuXHRcdFx0XHRcdFx0Zm9yIChsZXQgdHJpZWQgb2YgdGhpcy50cmllcykge1xuXHRcdFx0XHRcdFx0XHRpZiAoK3RyaWVkLnBvaW50cyA+ICt0aGlzLmhpZ2gpIHtcblx0XHRcdFx0XHRcdFx0XHR0aGlzLmhpZ2ggPSB0cmllZC5wb2ludHM7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0dGhpcy4kc2l0ZS50b2FzdCh0aGlzLCByZXNwb25zZSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KVxuXHRcdFx0XHQuY2F0Y2goKGVycm9yKSA9PiB7XG5cdFx0XHRcdFx0dGhpcy4kc2l0ZS50b2FzdCh0aGlzLCBlcnJvcik7XG5cdFx0XHRcdH0pO1xuXG5cdFx0fSxcblx0XHRtZXRob2RzOiB7XG5cdFx0XHR0aW1lKHZhbHVlKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLiRzaXRlLlRpbWVGb3JtYXR0ZXIucmVsYXRpdmVVTklYKHZhbHVlKVxuXHRcdFx0fSxcblx0XHRcdGVsYXBzZWQoc3RhcnQsIGVuZCkge1xuXHRcdFx0XHRpZiAoZW5kID09PSBudWxsKSB7XG5cdFx0XHRcdFx0cmV0dXJuICcnO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnN0IGRpZmYgPSBlbmQgLSBzdGFydDtcblx0XHRcdFx0Y29uc3QgbWluID0gTWF0aC5mbG9vcihkaWZmIC8gNjApO1xuXHRcdFx0XHRjb25zdCBzZWMgPSBkaWZmICUgNjA7XG5cdFx0XHRcdHJldHVybiAnJyArIG1pbiArICc6JyArIChzZWMgPCAxMCA/ICcwJyA6ICcnKSArIHNlYztcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuPC9zY3JpcHQ+XG4iLCIvKipcbiAqIEBmaWxlXG4gKiBUaGUgbWFpbiBRdWl6IGVudHJ5IHBvaW50XG4gKi9cblxuaW1wb3J0IHtRdWl6RmFjdG9yeX0gZnJvbSBcIi4vanMvUXVpekZhY3RvcnlcIjtcblxuaWYoIVNpdGUuUXVpeikge1xuICAgIC8vXG4gICAgLy8gQ3JlYXRlIHRoZSBRdWl6IGNvbXBvbmVudHNcbiAgICAvL1xuICAgIFNpdGUuUXVpeiA9IFF1aXpGYWN0b3J5LmNyZWF0ZShTaXRlKTtcbn1cblxuIiwiaW1wb3J0ICcuLi9fcXVpei5zY3NzJztcbmltcG9ydCBRdWl6VnVlIGZyb20gJy4vVnVlL0luaXRpYWwudnVlJztcbmltcG9ydCBRdWVzdGlvblZ1ZSBmcm9tICcuL1Z1ZS9RdWVzdGlvbi52dWUnO1xuaW1wb3J0IEFuc3dlclZ1ZSBmcm9tICcuL1Z1ZS9BbnN3ZXIudnVlJztcbmltcG9ydCBFeHBpcmVkVnVlIGZyb20gJy4vVnVlL0V4cGlyZWQudnVlJztcbmltcG9ydCBDbG9zZWRWdWUgZnJvbSAnLi9WdWUvQ2xvc2VkLnZ1ZSc7XG5pbXBvcnQgUmVzdWx0c1Z1ZSBmcm9tICcuL1Z1ZS9SZXN1bHRzLnZ1ZSc7XG5pbXBvcnQgUHJldmlld2VyVnVlIGZyb20gJy4vVnVlL1ByZXZpZXdlci52dWUnO1xuaW1wb3J0IFByZXZpZXdWdWUgZnJvbSAnLi9WdWUvUHJldmlldy52dWUnO1xuXG5pbXBvcnQge1N0YXRlc30gZnJvbSAnLi9TdGF0ZXMnO1xuXG5cbi8qKlxuICogUXVpeiBwcmVzZW50YXRpb24gVnVlXG4gKiBAcGFyYW0gc2l0ZSBTaXRlIG9iamVjdFxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmV4cG9ydCBsZXQgUXVpeiA9IGZ1bmN0aW9uKHNpdGUpIHtcbiAgICBjb25zdCBWdWVIZWxwZXIgPSBzaXRlLlZ1ZUhlbHBlclxuXG4gICAgdGhpcy5pbml0aWFsaXplID0gZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICBsZXQgcXVpeiA9IEpTT04ucGFyc2UoZWxlbWVudC50ZXh0Q29udGVudCk7XG5cbiAgICAgICAgY29uc3QgdGVtcGxhdGUgPSBgXG48ZGl2IGNsYXNzPVwiY2wtcXVpelwiPlxuICA8Y29tcG9uZW50IDppcz1cInBhZ2VcIiA6cXVpej1cInF1aXpcIiA6ZmlsZT1cImZpbGVcIiB2LW9uOmFuc3dlcj1cImFuc3dlcigkZXZlbnQpXCIgdi1vbjpuZXctc3RhdGU9XCJuZXdTdGF0ZSgkZXZlbnQpXCI+PC9jb21wb25lbnQ+XG4gIDxwcmV2aWV3ZXIgdi1pZj1cInF1aXoucHJldmlldyAhPT0gdW5kZWZpbmVkXCIgOnF1aXo9XCJxdWl6XCIgdi1vbjpwcmV2aWV3PVwicHJldmlldygkZXZlbnQpXCI+PC9wcmV2aWV3ZXI+XG48L2Rpdj5gO1xuXG4gICAgICAgIGNvbnN0IGFwcCA9IFZ1ZUhlbHBlci5jcmVhdGVBcHAoe1xuICAgICAgICAgICAgdGVtcGxhdGU6IHRlbXBsYXRlLFxuICAgICAgICAgICAgZGF0YTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgcXVpejogcXVpeixcbiAgICAgICAgICAgICAgICAgICAgc3RhdGU6IFN0YXRlcy5JTklUSUFMLFxuICAgICAgICAgICAgICAgICAgICBwYWdlOiAnaW5pdGlhbCcsXG4gICAgICAgICAgICAgICAgICAgIGZpbGU6IG51bGwsXG5cdCAgICAgICAgICAgICAgICBhZnRlcjogbnVsbFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29tcG9uZW50czoge1xuICAgICAgICAgICAgICAgICdpbml0aWFsJzogUXVpelZ1ZSxcbiAgICAgICAgICAgICAgICAncXVlc3Rpb24nOiBRdWVzdGlvblZ1ZSxcbiAgICAgICAgICAgICAgICAnYW5zd2VyJzogQW5zd2VyVnVlLFxuICAgICAgICAgICAgICAgICdleHBpcmVkJzogRXhwaXJlZFZ1ZSxcbiAgICAgICAgICAgICAgICAnY2xvc2VkJzogQ2xvc2VkVnVlLFxuICAgICAgICAgICAgICAgICdyZXN1bHRzJzogUmVzdWx0c1Z1ZSxcbiAgICAgICAgICAgICAgICAncHJldmlld2VyJzogUHJldmlld2VyVnVlLFxuICAgICAgICAgICAgICAgICdwcmV2aWV3JzogUHJldmlld1Z1ZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1vdW50ZWQoKSB7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5xdWl6LmV4cGlyZWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYWdlID0gJ2V4cGlyZWQnO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZih0aGlzLnF1aXouY2xvc2VkID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFnZSA9ICdjbG9zZWQnO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMuYWZ0ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2wtcXVpei1hZnRlcicpO1xuICAgICAgICAgICAgICAgIGlmKHRoaXMuYWZ0ZXIgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBcdHRoaXMuYWZ0ZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgICAgICBuZXdTdGF0ZShzdGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICBzd2l0Y2goc3RhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgU3RhdGVzLlNUQVJUOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhcnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBTdGF0ZXMuUVVFU1RJT046XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5xdWl6LnF1ZXN0aW9uIDwgdGhpcy5xdWl6Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnF1aXoucXVlc3Rpb24rKztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYWdlID0gJ3F1ZXN0aW9uJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhZ2UgPSAncmVzdWx0cyc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmFmdGVyICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFmdGVyLmlubmVySFRNTCA9ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFN0YXRlcy5SRVNVTFRTOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFnZSA9ICdyZXN1bHRzJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlID0gc3RhdGU7XG5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5hZnRlciAhPT0gbnVsbCkge1xuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWZ0ZXIuaW5uZXJIVE1MID0gJyc7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzdGFydCgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IFN0YXRlcy5RVUVTVElPTjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5xdWl6LnF1ZXN0aW9uID0gMTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYWdlID0gJ3F1ZXN0aW9uJztcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGFuc3dlcihkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBTdGF0ZXMuQU5TV0VSO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhZ2UgPSAnYW5zd2VyJztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5xdWl6LmFuc3dlciA9IGRhdGEuYXR0cmlidXRlcy5hbnN3ZXI7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBwcmV2aWV3KGZpbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maWxlID0gZmlsZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5xdWl6LnF1ZXN0aW9uID0gZmlsZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IFN0YXRlcy5QUkVWSUVXO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhZ2UgPSAncHJldmlldyc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIGFwcC5jb25maWcuZ2xvYmFsUHJvcGVydGllcy4kc2l0ZSA9IHNpdGVcbiAgICAgICAgVnVlSGVscGVyLm1vdW50KGFwcCwgZWxlbWVudClcbiAgICB9XG59XG5cblxuIiwiXG5leHBvcnQgY29uc3QgUXVpekRhdGEgPSBmdW5jdGlvbigpIHtcbn1cblxuLyoqXG4gKiBHZXQgdGhlIGZvcm0gZGF0YSBmb3IgYSBxdWVzdGlvbiBvciBwcmV2aWV3LiBWYWxpZGF0ZXMgdGhhdCBhbiBhbnN3ZXIgaXMgc3VwcGxpZWRcbiAqXG4gKiBAcGFyYW0gdnVlIFZ1ZSB0aGlzIGlzIGdldHRpbmcgdGhlIGZvcm0gZnJvbVxuICogQHJldHVybnMgRm9ybURhdGEgb2JqZWN0IG9yIG51bGwgaWYgdmFsaWRhdGlvbiBmYWlscy5cbiAqL1xuUXVpekRhdGEuZ2V0ID0gZnVuY3Rpb24odnVlLCBtdXN0UHJvdmlkZU1lc3NhZ2UpIHtcblx0Y29uc3QgZm9ybSA9IHZ1ZS4kcmVmc1snZm9ybSddO1xuXHRjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShmb3JtKTtcblxuXHQvLyBWYWxpZGF0ZSBhbGwgY29udHJvbHMgb2YgY2xhc3MgY2wtYW5zd2VyLXJlcXVpcmVkIGFzIGhhdmluZyBpbnB1dFxuXHRmb3IoY29uc3QgaW5wdXQgb2YgZm9ybS5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dC5jbC1hbnN3ZXItcmVxdWlyZWQnKSkge1xuXHRcdC8vIFZhbGlkYXRlIHRoYXQgYW4gYW5zd2VyIGhhcyBiZWVuIHN1cHBsaWVkIElGIGEgZm9ybSBjb250cm9sXG5cdFx0Ly8gbmFtZWQgY2wtYW5zd2VyIGV4aXN0cy5cblx0XHRjb25zdCBhbnN3ZXIgPSBmb3JtRGF0YS5nZXQoaW5wdXQubmFtZSk7XG5cdFx0aWYoYW5zd2VyID09PSBudWxsIHx8IGFuc3dlciA9PT0gJycpIHtcblx0XHRcdGlmKG11c3RQcm92aWRlTWVzc2FnZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdHZ1ZS4kc2l0ZS50b2FzdCh2dWUsIG11c3RQcm92aWRlTWVzc2FnZSk7XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0fVxuXG5cdFx0XHRzd2l0Y2goaW5wdXQudHlwZSkge1xuXHRcdFx0XHRjYXNlICdyYWRpbyc6XG5cdFx0XHRcdFx0dnVlLiRzaXRlLnRvYXN0KHZ1ZSwgJ1lvdSBtdXN0IGNob29zZSBhbiBvcHRpb24nKTtcblx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdHZ1ZS4kc2l0ZS50b2FzdCh2dWUsICdZb3UgbXVzdCBwcm92aWRlIGFuIGFuc3dlcicpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gZm9ybURhdGE7XG59IiwiaW1wb3J0IHtRdWl6fSBmcm9tIFwiLi9RdWl6XCI7XG5cbi8qKlxuICogVGhlIFF1aXogc3lzdGVtIGZhY3RvcnlcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5leHBvcnQgY29uc3QgUXVpekZhY3RvcnkgPSBmdW5jdGlvbigpIHtcbn1cblxuUXVpekZhY3RvcnkuY3JlYXRlID0gZnVuY3Rpb24oc2l0ZSkge1xuXG4gICAgY29uc3QgcXVpeiA9IG5ldyBRdWl6KHNpdGUpO1xuXG4gICAgc2l0ZS5zdGFydCggKCkgPT4ge1xuICAgICAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Rpdi5jbC1xdWl6LWluc3RhbGwnKTtcbiAgICAgICAgaWYoZWxlbWVudCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgcXVpei5pbml0aWFsaXplKGVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgfSlcblxuICAgIHJldHVybiBxdWl6XG59XG4iLCJcbmV4cG9ydCBsZXQgU3RhdGVzID0gZnVuY3Rpb24oKSB7XG59XG5cblN0YXRlcy5JTklUSUFMID0gMDtcblN0YXRlcy5TVEFSVCA9IDE7XG5TdGF0ZXMuUVVFU1RJT04gPSAyO1xuU3RhdGVzLlJFU1VMVFMgPSAzO1xuU3RhdGVzLlBSRVZJRVcgPSA0O1xuXG5cbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy9jc3MtbG9hZGVyLXZpcnR1YWwtMmRlN2ZhYmQxNS8wL2NhY2hlL2Nzcy1sb2FkZXItbnBtLTYuNy4zLTYzYWE5MzM0MDAtNDczY2MzMmI2Yy56aXAvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL2Nzcy1sb2FkZXItdmlydHVhbC0yZGU3ZmFiZDE1LzAvY2FjaGUvY3NzLWxvYWRlci1ucG0tNi43LjMtNjNhYTkzMzQwMC00NzNjYzMyYjZjLnppcC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJkaXYuY2wtcXVpeiB7XFxuICAtbW96LWJveC1zaGFkb3c6IDNweCAzcHggOHB4ICNjY2M7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDNweCAzcHggOHB4ICNjY2M7XFxuICBib3gtc2hhZG93OiAzcHggM3B4IDhweCAjY2NjO1xcbn1cXG5cXG5kaXYuY2wtcXVpeiB7XFxuICBib3JkZXI6IHNvbGlkICNjY2NjY2MgMXB0O1xcbiAgcGFkZGluZzogNnB4O1xcbiAgbWFyZ2luOiAxZW0gMDtcXG4gIG1pbi1oZWlnaHQ6IDE1ZW07XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kOiAjZWNmZmVmO1xcbn1cXG5kaXYuY2wtcXVpeiA+IGRpdiB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuZGl2LmNsLXF1aXogPiBkaXYuY29udGVudCB7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5kaXYuY2wtcXVpeiBkaXYuY2wtcmVzdWx0cyB7XFxuICB3aWR0aDogODAlO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxufVxcbmRpdi5jbC1xdWl6IGgyIHtcXG4gIGJvcmRlcjogMDtcXG4gIG1hcmdpbi10b3A6IDE0cHg7XFxufVxcbmRpdi5jbC1xdWl6IGRpdi5jbC1tdWx0aSB7XFxuICBtYXJnaW46IDFlbSAwO1xcbiAgcGFkZGluZzogMCAwIDAgM2VtO1xcbn1cXG5kaXYuY2wtcXVpeiBkaXYuY2wtbXVsdGkgcCB7XFxuICBtYXJnaW46IDA7XFxufVxcbmRpdi5jbC1xdWl6IHAuZG9uZSB7XFxuICBiYWNrZ3JvdW5kOiAjYzQxNDI1O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5kaXYuY2wtcXVpeiBidXR0b24ge1xcbiAgd2lkdGg6IDEwZW07XFxuICBmb250LXNpemU6IDAuOWVtO1xcbn1cXG5kaXYuY2wtcXVpeiB0ci5iZXN0IHRkIHtcXG4gIGJhY2tncm91bmQ6ICNkZGU7XFxufVxcbmRpdi5jbC1xdWl6IGRpdi5wcmV2aWV3ZXIge1xcbiAgY2xlYXI6IGJvdGg7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgYmxhY2s7XFxufVxcbmRpdi5jbC1xdWl6IGRpdi5wcmV2aWV3ZXIgaDMge1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1zaXplOiAxLjJlbTtcXG59XFxuZGl2LmNsLXF1aXogZGl2LnByZXZpZXdlciB1bCB7XFxuICBtYXJnaW4tdG9wOiAwO1xcbn1cXG5kaXYuY2wtcXVpeiBkaXYucHJldmlldyB7XFxuICBtYXJnaW46IDAgMCAxZW0gMDtcXG59XFxuZGl2LmNsLXF1aXogZGl2LnByZXZpZXcgaHIge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5kaXYuY2wtcXVpeiBkaXYucHJldmlldyBoMyB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbmRpdi5jbC1xdWl6IGRpdi5wcmV2aWV3IHAucHJldmlldyB7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBtYXJnaW4tdG9wOiAwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5kaXYuY2wtcXVpeiBwLmNsLXF1aXotYW5zd2VyLW5vdGUge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgY29sb3I6ICM4MDA7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzUwcHgpIHtcXG4gICNxdWl6IHtcXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxuICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3ZlbmRvci9jbC9zaXRlL3Nhc3MvbW9kdWxlcy9fY29sb3JzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3ZlbmRvci9jbC9xdWl6L19xdWl6LnNjc3NcIixcIndlYnBhY2s6Ly8uL3ZlbmRvci9jbC9xdWl6L3Nhc3MvcGFydGlhbHMvX3F1aXouc2Nzc1wiLFwid2VicGFjazovLy4vdmVuZG9yL2NsL3F1aXovc2Fzcy9tb2R1bGVzL19jb2xvcnMuc2Nzc1wiLFwid2VicGFjazovLy4vdmVuZG9yL2NsL3NpdGUvc2Fzcy9tb2R1bGVzL192YXJpYWJsZXMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFnRkE7RUFDRSxpQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsNEJBQUE7QUMvRUY7O0FDSkE7RUFFRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJDUGdCO0FGYWxCO0FDSkU7RUFDRSxXQUFBO0FETUo7QUNIRTtFQUNFLFVBQUE7QURLSjtBQ0ZFO0VBQ0UsVUFBQTtFQUNBLGNBQUE7QURJSjtBQ0FFO0VBQ0UsU0FBQTtFQUNBLGdCQUFBO0FERUo7QUNDRTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtBRENKO0FDQ0k7RUFDRSxTQUFBO0FEQ047QUNHRTtFQUNFLG1CRmpCRztFRWtCSCxrQkFBQTtFQUNBLFlBQUE7QURESjtBQ0lFO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0FERko7QUNLRTtFQUNFLGdCQUFBO0FESEo7QUNNRTtFQUNFLFdBQUE7RUFDQSwyQkFBQTtBREpKO0FDTUk7RUFDRSxTQUFBO0VBQ0EsZ0JBQUE7QURKTjtBQ09JO0VBQ0UsYUFBQTtBRExOO0FDU0U7RUFDRSxpQkFBQTtBRFBKO0FDU0k7RUFDRSxTQUFBO0FEUE47QUNVSTtFQUNFLGtCQUFBO0FEUk47QUNXSTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7QURUTjtBQ2FFO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QURYSjs7QUNlQTtFQUNFO0lBQ0UsaUJFdkZrQjtFSDJFcEI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvLyBUaGUgbWFqb3IgY29sb3JzXFxyXFxuLy8gV2UgaGF2ZSBhIHByaW1hcnkgY29sb3IsIHR3byBzZWNvbmRhcnkgY29sb3JzLCBhbmQgYSBjb21wbGVtZW50YXJ5IGNvbG9yLlxcclxcbiRhY2NlbnQ6ICM2MDdEOEI7XFxyXFxuXFxyXFxuJHRvYXN0LWJhY2tncm91bmQ6ICMxNTE1MTU7XFxyXFxuJHRvYXN0LXRleHQ6IHdoaXRlO1xcclxcblxcclxcbiRoZWFkZXItYmFja2dyb3VuZDogIzUzNTA1NDtcXHJcXG4kaGVhZGVyLXRleHQ6ICNlZWVlZWU7XFxyXFxuXFxyXFxuLy8gVGhlIG1ham9yIGNvbG9yc1xcclxcbi8vIFdlIGhhdmUgYSBwcmltYXJ5IGNvbG9yLCB0d28gc2Vjb25kYXJ5IGNvbG9ycywgYW5kIGEgY29tcGxlbWVudGFyeSBjb2xvci5cXHJcXG4kcHJpbWFyeTogIzAwNzIzZjtcXHJcXG4kbGlnaHQtcHJpbWFyeTogIzQ0YTI2YjtcXHJcXG4kdmVyeS1saWdodC1wcmltYXJ5OiAjZThmN2YzO1xcclxcbiRkYXJrLXByaW1hcnk6ICMwMDUyMjM7XFxyXFxuJHByaW1hcnktdGV4dDogIzIxMjEyMTtcXHJcXG5cXHJcXG4kc2Vjb25kYTogIzAwOTA5ZTtcXHJcXG4kc2Vjb25kYjogI2ZjYWYxNztcXHJcXG4kc2Vjb25kYzogI2M4OWE1ODsgLy8gI2U4ZDliNTtcXHJcXG5cXHJcXG4kY29tcDogI2M0MTQyNTtcXHJcXG4kYmxpbmQ6ICNlZmM2ZmY7XFxyXFxuJGNvbXAtYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCM1NzAxMDIsICM5NjA2MDYsICM1NzAxMDIpO1xcclxcbiRjb21wLWJvcmRlcjogI2M3YmRiYjtcXHJcXG5cXHJcXG4vLyBNZW51c1xcclxcbiRmb2N1czogIzAwODE4MztcXHJcXG4kbWVudS1iYWNrZ3JvdW5kOiAjZThlOGU4O1xcclxcbiRtZW51LWhvdmVyOiAjZDBkMGQwO1xcclxcbiRtZW51LWNvbG9yOiBibGFjaztcXHJcXG5cXHJcXG4vLyBQYWdlIGJhY2tncm91bmRcXHJcXG4kYmFja2dyb3VuZDogI2VlZWVlZTtcXHJcXG5cXHJcXG4vLyBOYXZcXHJcXG4kbmF2LWNvbG9yOiB3aGl0ZTtcXHJcXG4kbmF2LWJhY2tncm91bmQ6IHVybCgnaW1nL25hdl9wYXR0ZXJuLnBuZycpO1xcclxcbiRuYXYtMi1jb2xvcjogI2ZmZmY5OTtcXHJcXG4kbmF2LTItYmFja2dyb3VuZDogdXJsKCdpbWcvbmF2X3BhdHRlcm4tMi5wbmcnKTtcXHJcXG5cXHJcXG4vLyBUYWJsZXNcXHJcXG4kdGFibGUtZ3JhZGllbnQtZnJvbTogIzIwNGM0MjtcXHJcXG4kdGFibGUtZ3JhZGllbnQtdG86ICMzODliNTQ7XFxyXFxuXFxyXFxuLy8gRGlhbG9nIGJveGVzXFxyXFxuJGRpYWxvZy1ncmFkaWVudC1mcm9tOiAjMjA0YzQyO1xcclxcbiRkaWFsb2ctZ3JhZGllbnQtdG86ICMzODliNTQ7XFxyXFxuJGRpYWxvZy1iYXItY29sb3I6IHdoaXRlO1xcclxcblxcclxcbi8vIExpbmsgY29sb3JzXFxyXFxuJGxpbms6ICM4MDgwODA7XFxyXFxuJHZpc2l0ZWQ6ICM5Njg0NDM7ICAvLyAjYjA5ZDViO1xcclxcbiRob3ZlcjogIzMzNjZjYztcXHJcXG5cXHJcXG4kdmVyeS1saWdodC1wcmltYXJ5LWxpbms6ICM5MDAwMDA7XFxyXFxuJHZlcnktbGlnaHQtcHJpbWFyeS1ob3ZlcjogI2MwMDAwMDtcXHJcXG5cXHJcXG5cXHJcXG4kcHJpbWFyeS1saW5rOiB3aGl0ZTtcXHJcXG4kcHJpbWFyeS12aXNpdGVkOiAjZGRkZGRkO1xcclxcbiRzZWNvbmRiLXZpc2l0ZWQ6ICM1NTU1NTU7XFxyXFxuJGF1dG9iYWNrLWxpbms6ICM4ODIyMjI7XFxyXFxuJGF1dG9iYWNrLWxpbmstaG92ZXI6ICNjYzIyMjI7XFxyXFxuXFxyXFxuJHNoYWRvdy14OiAzcHg7XFxyXFxuJHNoYWRvdy15OiAzcHg7XFxyXFxuJHNoYWRvdy1yYWRpdXM6IDhweDtcXHJcXG4kc2hhZG93LWNvbG9yOiAjY2NjO1xcclxcblxcclxcbiR0b2dnbGUtbGluay1ob3Zlci1jb2xvcjogIzAwNjYwMDtcXHJcXG5cXHJcXG4vLyBCb3hlc1xcclxcbiRib3gtYm9yZGVyLWNvbG9yOiAjYmRiZGJkO1xcclxcblxcclxcbi8vIENhcmRzXFxyXFxuJGNhcmQtaGVhZGluZy1iYWNrZ3JvdW5kOiAjZjJmMmYyO1xcclxcbiRjYXJkLWJvcmRlci1jb2xvcjogI2NjY2NjYztcXHJcXG5cXHJcXG4lc2hhZG93IHtcXHJcXG4gIC1tb3otYm94LXNoYWRvdzogJHNoYWRvdy14ICRzaGFkb3cteSAkc2hhZG93LXJhZGl1cyAkc2hhZG93LWNvbG9yO1xcclxcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAkc2hhZG93LXggJHNoYWRvdy15ICRzaGFkb3ctcmFkaXVzICRzaGFkb3ctY29sb3I7XFxyXFxuICBib3gtc2hhZG93OiAkc2hhZG93LXggJHNoYWRvdy15ICRzaGFkb3ctcmFkaXVzICRzaGFkb3ctY29sb3I7XFxyXFxufVxcclxcblxcclxcbiVub3NoYWRvdyB7XFxyXFxuICAtbW96LWJveC1zaGFkb3c6IG5vbmU7XFxyXFxuICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XFxyXFxuICBib3gtc2hhZG93OiBub25lO1xcclxcbn1cXHJcXG5cIixcImRpdi5jbC1xdWl6IHtcXG4gIC1tb3otYm94LXNoYWRvdzogM3B4IDNweCA4cHggI2NjYztcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogM3B4IDNweCA4cHggI2NjYztcXG4gIGJveC1zaGFkb3c6IDNweCAzcHggOHB4ICNjY2M7XFxufVxcblxcbmRpdi5jbC1xdWl6IHtcXG4gIGJvcmRlcjogc29saWQgI2NjY2NjYyAxcHQ7XFxuICBwYWRkaW5nOiA2cHg7XFxuICBtYXJnaW46IDFlbSAwO1xcbiAgbWluLWhlaWdodDogMTVlbTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQ6ICNlY2ZmZWY7XFxufVxcbmRpdi5jbC1xdWl6ID4gZGl2IHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5kaXYuY2wtcXVpeiA+IGRpdi5jb250ZW50IHtcXG4gIHBhZGRpbmc6IDA7XFxufVxcbmRpdi5jbC1xdWl6IGRpdi5jbC1yZXN1bHRzIHtcXG4gIHdpZHRoOiA4MCU7XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuZGl2LmNsLXF1aXogaDIge1xcbiAgYm9yZGVyOiAwO1xcbiAgbWFyZ2luLXRvcDogMTRweDtcXG59XFxuZGl2LmNsLXF1aXogZGl2LmNsLW11bHRpIHtcXG4gIG1hcmdpbjogMWVtIDA7XFxuICBwYWRkaW5nOiAwIDAgMCAzZW07XFxufVxcbmRpdi5jbC1xdWl6IGRpdi5jbC1tdWx0aSBwIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuZGl2LmNsLXF1aXogcC5kb25lIHtcXG4gIGJhY2tncm91bmQ6ICNjNDE0MjU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcbmRpdi5jbC1xdWl6IGJ1dHRvbiB7XFxuICB3aWR0aDogMTBlbTtcXG4gIGZvbnQtc2l6ZTogMC45ZW07XFxufVxcbmRpdi5jbC1xdWl6IHRyLmJlc3QgdGQge1xcbiAgYmFja2dyb3VuZDogI2RkZTtcXG59XFxuZGl2LmNsLXF1aXogZGl2LnByZXZpZXdlciB7XFxuICBjbGVhcjogYm90aDtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCBibGFjaztcXG59XFxuZGl2LmNsLXF1aXogZGl2LnByZXZpZXdlciBoMyB7XFxuICBtYXJnaW46IDA7XFxuICBmb250LXNpemU6IDEuMmVtO1xcbn1cXG5kaXYuY2wtcXVpeiBkaXYucHJldmlld2VyIHVsIHtcXG4gIG1hcmdpbi10b3A6IDA7XFxufVxcbmRpdi5jbC1xdWl6IGRpdi5wcmV2aWV3IHtcXG4gIG1hcmdpbjogMCAwIDFlbSAwO1xcbn1cXG5kaXYuY2wtcXVpeiBkaXYucHJldmlldyBociB7XFxuICBtYXJnaW46IDA7XFxufVxcbmRpdi5jbC1xdWl6IGRpdi5wcmV2aWV3IGgzIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuZGl2LmNsLXF1aXogZGl2LnByZXZpZXcgcC5wcmV2aWV3IHtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIG1hcmdpbi10b3A6IDA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XFxufVxcbmRpdi5jbC1xdWl6IHAuY2wtcXVpei1hbnN3ZXItbm90ZSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBjb2xvcjogIzgwMDtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NTBweCkge1xcbiAgI3F1aXoge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcXG4gIH1cXG59XCIsXCJkaXYuY2wtcXVpeiB7XFxuICBAZXh0ZW5kICVzaGFkb3c7XFxuICBib3JkZXI6IHNvbGlkICNjY2NjY2MgMXB0O1xcbiAgcGFkZGluZzogNnB4O1xcbiAgbWFyZ2luOiAxZW0gMDtcXG4gIG1pbi1oZWlnaHQ6IDE1ZW07XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kOiAkcXVpei1iYWNrZ3JvdW5kO1xcblxcbiAgPmRpdiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcblxcbiAgPmRpdi5jb250ZW50IHtcXG4gICAgcGFkZGluZzogMDtcXG4gIH1cXG5cXG4gIGRpdi5jbC1yZXN1bHRzIHtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICB9XFxuXFxuXFxuICBoMiB7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgbWFyZ2luLXRvcDogMTRweDtcXG4gIH1cXG5cXG4gIGRpdi5jbC1tdWx0aSB7XFxuICAgIG1hcmdpbjogMWVtIDA7XFxuICAgIHBhZGRpbmc6IDAgMCAwIDNlbTtcXG5cXG4gICAgcCB7XFxuICAgICAgbWFyZ2luOiAwO1xcbiAgICB9XFxuICB9XFxuXFxuICBwLmRvbmUge1xcbiAgICBiYWNrZ3JvdW5kOiAkY29tcDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICB9XFxuXFxuICBidXR0b24ge1xcbiAgICB3aWR0aDogMTBlbTtcXG4gICAgZm9udC1zaXplOiAwLjllbTtcXG4gIH1cXG5cXG4gIHRyLmJlc3QgdGQge1xcbiAgICBiYWNrZ3JvdW5kOiAjZGRlO1xcbiAgfVxcblxcbiAgZGl2LnByZXZpZXdlciB7XFxuICAgIGNsZWFyOiBib3RoO1xcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgYmxhY2s7XFxuXFxuICAgIGgzIHtcXG4gICAgICBtYXJnaW46IDA7XFxuICAgICAgZm9udC1zaXplOiAxLjJlbTtcXG4gICAgfVxcblxcbiAgICB1bCB7XFxuICAgICAgbWFyZ2luLXRvcDogMDtcXG4gICAgfVxcbiAgfVxcblxcbiAgZGl2LnByZXZpZXcge1xcbiAgICBtYXJnaW46IDAgMCAxZW0gMDtcXG5cXG4gICAgaHIge1xcbiAgICAgIG1hcmdpbjogMDtcXG4gICAgfVxcblxcbiAgICBoMyB7XFxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB9XFxuXFxuICAgIHAucHJldmlldyB7XFxuICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICAgIG1hcmdpbi10b3A6IDA7XFxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcXG4gICAgfVxcbiAgfVxcblxcbiAgcC5jbC1xdWl6LWFuc3dlci1ub3RlIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIGNvbG9yOiAjODAwO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRtZWRpdW0td2lkdGgpIHtcXG4gICNxdWl6IHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAkcmlnaHQtbWFyZ2luLW1vYmlsZTtcXG4gIH1cXG5cXG59XCIsXCJcXG4kcXVpei1iYWNrZ3JvdW5kOiAjZWNmZmVmO1wiLFwiJG1pbi13aWR0aDogMzIwcHg7XFxyXFxuJG1heC1ib2R5OiAxMDAwcHg7XFxyXFxuXFxyXFxuJHBhZGRpbmc6IDhweDtcXHJcXG5cXHJcXG4kbWFyZ2luOiAxMHB4O1xcclxcbiRtYXJnaW4tbW9iaWxlOiA1cHg7XFxyXFxuJHJpZ2h0LW1hcmdpbjogMTZlbTtcXHJcXG4kcmlnaHQtbWFyZ2luLW1vYmlsZTogNXB4O1xcclxcblxcclxcbiRtZWRpdW0td2lkdGg6IDc1MHB4O1xcclxcbiRuYXJyb3ctd2lkdGg6IDUwMHB4O1xcclxcbiR2ZXJ5LW5hcnJvdy13aWR0aDogNDAwcHg7XFxyXFxuJHdpZGUtd2lkdGg6IDkwMHB4O1xcclxcbiRtYXgtd2lkdGg6IDU2ZW07XFxyXFxuXFxyXFxuJGFzaWRlLXdpZHRoOiAxNS41ZW07ICAgLy8gV2lkdGggb2YgYXNpZGVzXFxyXFxuJGFzaWRlLXBhZGRpbmc6IDEwcHg7XFxyXFxuXFxyXFxuJGJveC1wYWRkaW5nOiA4cHg7XFxyXFxuXFxyXFxuLy8gQ2FyZHNcXHJcXG4kY2FyZC1wYWRkaW5nOiAkbWFyZ2luO1xcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy9zdHlsZS1sb2FkZXItdmlydHVhbC00MDc1NDNlMTMzLzAvY2FjaGUvc3R5bGUtbG9hZGVyLW5wbS0zLjMuMS00YmJiNmVjNzdmLTQ3MGZlZWY2ODAuemlwL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL3N0eWxlLWxvYWRlci12aXJ0dWFsLTQwNzU0M2UxMzMvMC9jYWNoZS9zdHlsZS1sb2FkZXItbnBtLTMuMy4xLTRiYmI2ZWM3N2YtNDcwZmVlZjY4MC56aXAvbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL3N0eWxlLWxvYWRlci12aXJ0dWFsLTQwNzU0M2UxMzMvMC9jYWNoZS9zdHlsZS1sb2FkZXItbnBtLTMuMy4xLTRiYmI2ZWM3N2YtNDcwZmVlZjY4MC56aXAvbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy9zdHlsZS1sb2FkZXItdmlydHVhbC00MDc1NDNlMTMzLzAvY2FjaGUvc3R5bGUtbG9hZGVyLW5wbS0zLjMuMS00YmJiNmVjNzdmLTQ3MGZlZWY2ODAuemlwL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL3N0eWxlLWxvYWRlci12aXJ0dWFsLTQwNzU0M2UxMzMvMC9jYWNoZS9zdHlsZS1sb2FkZXItbnBtLTMuMy4xLTRiYmI2ZWM3N2YtNDcwZmVlZjY4MC56aXAvbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL3N0eWxlLWxvYWRlci12aXJ0dWFsLTQwNzU0M2UxMzMvMC9jYWNoZS9zdHlsZS1sb2FkZXItbnBtLTMuMy4xLTRiYmI2ZWM3N2YtNDcwZmVlZjY4MC56aXAvbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL2Nzcy1sb2FkZXItdmlydHVhbC0yZGU3ZmFiZDE1LzAvY2FjaGUvY3NzLWxvYWRlci1ucG0tNi43LjMtNjNhYTkzMzQwMC00NzNjYzMyYjZjLnppcC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8ueWFybi9jYWNoZS9yZXNvbHZlLXVybC1sb2FkZXItbnBtLTUuMC4wLTliNDQxMDY3YzktNmQ0ODM3MzNhNC56aXAvbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy9zYXNzLWxvYWRlci12aXJ0dWFsLWM3Y2E0ZjFkMWEvMC9jYWNoZS9zYXNzLWxvYWRlci1ucG0tMTMuMi4wLTY0MjFjNWZmN2ItZWQ2Y2RiNWY1NS56aXAvbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTQudXNlWzNdIS4vX3F1aXouc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL2Nzcy1sb2FkZXItdmlydHVhbC0yZGU3ZmFiZDE1LzAvY2FjaGUvY3NzLWxvYWRlci1ucG0tNi43LjMtNjNhYTkzMzQwMC00NzNjYzMyYjZjLnppcC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8ueWFybi9jYWNoZS9yZXNvbHZlLXVybC1sb2FkZXItbnBtLTUuMC4wLTliNDQxMDY3YzktNmQ0ODM3MzNhNC56aXAvbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy9zYXNzLWxvYWRlci12aXJ0dWFsLWM3Y2E0ZjFkMWEvMC9jYWNoZS9zYXNzLWxvYWRlci1ucG0tMTMuMi4wLTY0MjFjNWZmN2ItZWQ2Y2RiNWY1NS56aXAvbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTQudXNlWzNdIS4vX3F1aXouc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL0Fuc3dlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzEyMDBiNDBcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9BbnN3ZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL0Fuc3dlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5pbXBvcnQgZXhwb3J0Q29tcG9uZW50IGZyb20gXCIvVXNlcnMvY2hhcmxlc293ZW4vd2ViL2NzZTMzNS8ueWFybi9fX3ZpcnR1YWxfXy92dWUtbG9hZGVyLXZpcnR1YWwtYTFhNGIxODdjMy8wL2NhY2hlL3Z1ZS1sb2FkZXItbnBtLTE3LjAuMS1mNTUyYjgyODA1LTQyY2M4YzhmZjAuemlwL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvZXhwb3J0SGVscGVyLmpzXCJcbmNvbnN0IF9fZXhwb3J0c19fID0gLyojX19QVVJFX18qL2V4cG9ydENvbXBvbmVudChzY3JpcHQsIFtbJ3JlbmRlcicscmVuZGVyXSxbJ19fZmlsZScsXCJ2ZW5kb3IvY2wvcXVpei9qcy9WdWUvQW5zd2VyLnZ1ZVwiXV0pXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICBfX2V4cG9ydHNfXy5fX2htcklkID0gXCIzMTIwMGI0MFwiXG4gIGNvbnN0IGFwaSA9IF9fVlVFX0hNUl9SVU5USU1FX19cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIWFwaS5jcmVhdGVSZWNvcmQoJzMxMjAwYjQwJywgX19leHBvcnRzX18pKSB7XG4gICAgYXBpLnJlbG9hZCgnMzEyMDBiNDAnLCBfX2V4cG9ydHNfXylcbiAgfVxuICBcbiAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0Fuc3dlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzEyMDBiNDBcIiwgKCkgPT4ge1xuICAgIGFwaS5yZXJlbmRlcignMzEyMDBiNDAnLCByZW5kZXIpXG4gIH0pXG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBfX2V4cG9ydHNfXyIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL0Nsb3NlZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzM5NzE1MGVcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9DbG9zZWQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL0Nsb3NlZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5pbXBvcnQgZXhwb3J0Q29tcG9uZW50IGZyb20gXCIvVXNlcnMvY2hhcmxlc293ZW4vd2ViL2NzZTMzNS8ueWFybi9fX3ZpcnR1YWxfXy92dWUtbG9hZGVyLXZpcnR1YWwtYTFhNGIxODdjMy8wL2NhY2hlL3Z1ZS1sb2FkZXItbnBtLTE3LjAuMS1mNTUyYjgyODA1LTQyY2M4YzhmZjAuemlwL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvZXhwb3J0SGVscGVyLmpzXCJcbmNvbnN0IF9fZXhwb3J0c19fID0gLyojX19QVVJFX18qL2V4cG9ydENvbXBvbmVudChzY3JpcHQsIFtbJ3JlbmRlcicscmVuZGVyXSxbJ19fZmlsZScsXCJ2ZW5kb3IvY2wvcXVpei9qcy9WdWUvQ2xvc2VkLnZ1ZVwiXV0pXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICBfX2V4cG9ydHNfXy5fX2htcklkID0gXCIzMzk3MTUwZVwiXG4gIGNvbnN0IGFwaSA9IF9fVlVFX0hNUl9SVU5USU1FX19cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIWFwaS5jcmVhdGVSZWNvcmQoJzMzOTcxNTBlJywgX19leHBvcnRzX18pKSB7XG4gICAgYXBpLnJlbG9hZCgnMzM5NzE1MGUnLCBfX2V4cG9ydHNfXylcbiAgfVxuICBcbiAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0Nsb3NlZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzM5NzE1MGVcIiwgKCkgPT4ge1xuICAgIGFwaS5yZXJlbmRlcignMzM5NzE1MGUnLCByZW5kZXIpXG4gIH0pXG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBfX2V4cG9ydHNfXyIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL0V4cGlyZWQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTE2M2QwOTczXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vRXhwaXJlZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vRXhwaXJlZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5pbXBvcnQgZXhwb3J0Q29tcG9uZW50IGZyb20gXCIvVXNlcnMvY2hhcmxlc293ZW4vd2ViL2NzZTMzNS8ueWFybi9fX3ZpcnR1YWxfXy92dWUtbG9hZGVyLXZpcnR1YWwtYTFhNGIxODdjMy8wL2NhY2hlL3Z1ZS1sb2FkZXItbnBtLTE3LjAuMS1mNTUyYjgyODA1LTQyY2M4YzhmZjAuemlwL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvZXhwb3J0SGVscGVyLmpzXCJcbmNvbnN0IF9fZXhwb3J0c19fID0gLyojX19QVVJFX18qL2V4cG9ydENvbXBvbmVudChzY3JpcHQsIFtbJ3JlbmRlcicscmVuZGVyXSxbJ19fZmlsZScsXCJ2ZW5kb3IvY2wvcXVpei9qcy9WdWUvRXhwaXJlZC52dWVcIl1dKVxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgX19leHBvcnRzX18uX19obXJJZCA9IFwiMTYzZDA5NzNcIlxuICBjb25zdCBhcGkgPSBfX1ZVRV9ITVJfUlVOVElNRV9fXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFhcGkuY3JlYXRlUmVjb3JkKCcxNjNkMDk3MycsIF9fZXhwb3J0c19fKSkge1xuICAgIGFwaS5yZWxvYWQoJzE2M2QwOTczJywgX19leHBvcnRzX18pXG4gIH1cbiAgXG4gIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9FeHBpcmVkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xNjNkMDk3M1wiLCAoKSA9PiB7XG4gICAgYXBpLnJlcmVuZGVyKCcxNjNkMDk3MycsIHJlbmRlcilcbiAgfSlcblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IF9fZXhwb3J0c19fIiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4vSW5pdGlhbC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjU0NDkyMTJcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Jbml0aWFsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9Jbml0aWFsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5cbmltcG9ydCBleHBvcnRDb21wb25lbnQgZnJvbSBcIi9Vc2Vycy9jaGFybGVzb3dlbi93ZWIvY3NlMzM1Ly55YXJuL19fdmlydHVhbF9fL3Z1ZS1sb2FkZXItdmlydHVhbC1hMWE0YjE4N2MzLzAvY2FjaGUvdnVlLWxvYWRlci1ucG0tMTcuMC4xLWY1NTJiODI4MDUtNDJjYzhjOGZmMC56aXAvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9leHBvcnRIZWxwZXIuanNcIlxuY29uc3QgX19leHBvcnRzX18gPSAvKiNfX1BVUkVfXyovZXhwb3J0Q29tcG9uZW50KHNjcmlwdCwgW1sncmVuZGVyJyxyZW5kZXJdLFsnX19maWxlJyxcInZlbmRvci9jbC9xdWl6L2pzL1Z1ZS9Jbml0aWFsLnZ1ZVwiXV0pXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICBfX2V4cG9ydHNfXy5fX2htcklkID0gXCI2NTQ0OTIxMlwiXG4gIGNvbnN0IGFwaSA9IF9fVlVFX0hNUl9SVU5USU1FX19cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIWFwaS5jcmVhdGVSZWNvcmQoJzY1NDQ5MjEyJywgX19leHBvcnRzX18pKSB7XG4gICAgYXBpLnJlbG9hZCgnNjU0NDkyMTInLCBfX2V4cG9ydHNfXylcbiAgfVxuICBcbiAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0luaXRpYWwudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTY1NDQ5MjEyXCIsICgpID0+IHtcbiAgICBhcGkucmVyZW5kZXIoJzY1NDQ5MjEyJywgcmVuZGVyKVxuICB9KVxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgX19leHBvcnRzX18iLCJpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiLi9QcmV2aWV3LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02MjZiODZkNFwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1ByZXZpZXcudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL1ByZXZpZXcudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcblxuaW1wb3J0IGV4cG9ydENvbXBvbmVudCBmcm9tIFwiL1VzZXJzL2NoYXJsZXNvd2VuL3dlYi9jc2UzMzUvLnlhcm4vX192aXJ0dWFsX18vdnVlLWxvYWRlci12aXJ0dWFsLWExYTRiMTg3YzMvMC9jYWNoZS92dWUtbG9hZGVyLW5wbS0xNy4wLjEtZjU1MmI4MjgwNS00MmNjOGM4ZmYwLnppcC9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2V4cG9ydEhlbHBlci5qc1wiXG5jb25zdCBfX2V4cG9ydHNfXyA9IC8qI19fUFVSRV9fKi9leHBvcnRDb21wb25lbnQoc2NyaXB0LCBbWydyZW5kZXInLHJlbmRlcl0sWydfX2ZpbGUnLFwidmVuZG9yL2NsL3F1aXovanMvVnVlL1ByZXZpZXcudnVlXCJdXSlcbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIF9fZXhwb3J0c19fLl9faG1ySWQgPSBcIjYyNmI4NmQ0XCJcbiAgY29uc3QgYXBpID0gX19WVUVfSE1SX1JVTlRJTUVfX1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghYXBpLmNyZWF0ZVJlY29yZCgnNjI2Yjg2ZDQnLCBfX2V4cG9ydHNfXykpIHtcbiAgICBhcGkucmVsb2FkKCc2MjZiODZkNCcsIF9fZXhwb3J0c19fKVxuICB9XG4gIFxuICBtb2R1bGUuaG90LmFjY2VwdChcIi4vUHJldmlldy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjI2Yjg2ZDRcIiwgKCkgPT4ge1xuICAgIGFwaS5yZXJlbmRlcignNjI2Yjg2ZDQnLCByZW5kZXIpXG4gIH0pXG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBfX2V4cG9ydHNfXyIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL1ByZXZpZXdlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YmFhMGI5N2FcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9QcmV2aWV3ZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL1ByZXZpZXdlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5pbXBvcnQgZXhwb3J0Q29tcG9uZW50IGZyb20gXCIvVXNlcnMvY2hhcmxlc293ZW4vd2ViL2NzZTMzNS8ueWFybi9fX3ZpcnR1YWxfXy92dWUtbG9hZGVyLXZpcnR1YWwtYTFhNGIxODdjMy8wL2NhY2hlL3Z1ZS1sb2FkZXItbnBtLTE3LjAuMS1mNTUyYjgyODA1LTQyY2M4YzhmZjAuemlwL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvZXhwb3J0SGVscGVyLmpzXCJcbmNvbnN0IF9fZXhwb3J0c19fID0gLyojX19QVVJFX18qL2V4cG9ydENvbXBvbmVudChzY3JpcHQsIFtbJ3JlbmRlcicscmVuZGVyXSxbJ19fZmlsZScsXCJ2ZW5kb3IvY2wvcXVpei9qcy9WdWUvUHJldmlld2VyLnZ1ZVwiXV0pXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICBfX2V4cG9ydHNfXy5fX2htcklkID0gXCJiYWEwYjk3YVwiXG4gIGNvbnN0IGFwaSA9IF9fVlVFX0hNUl9SVU5USU1FX19cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIWFwaS5jcmVhdGVSZWNvcmQoJ2JhYTBiOTdhJywgX19leHBvcnRzX18pKSB7XG4gICAgYXBpLnJlbG9hZCgnYmFhMGI5N2EnLCBfX2V4cG9ydHNfXylcbiAgfVxuICBcbiAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1ByZXZpZXdlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YmFhMGI5N2FcIiwgKCkgPT4ge1xuICAgIGFwaS5yZXJlbmRlcignYmFhMGI5N2EnLCByZW5kZXIpXG4gIH0pXG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBfX2V4cG9ydHNfXyIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL1F1ZXN0aW9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01NDE0MDgwOFwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1F1ZXN0aW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9RdWVzdGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5pbXBvcnQgZXhwb3J0Q29tcG9uZW50IGZyb20gXCIvVXNlcnMvY2hhcmxlc293ZW4vd2ViL2NzZTMzNS8ueWFybi9fX3ZpcnR1YWxfXy92dWUtbG9hZGVyLXZpcnR1YWwtYTFhNGIxODdjMy8wL2NhY2hlL3Z1ZS1sb2FkZXItbnBtLTE3LjAuMS1mNTUyYjgyODA1LTQyY2M4YzhmZjAuemlwL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvZXhwb3J0SGVscGVyLmpzXCJcbmNvbnN0IF9fZXhwb3J0c19fID0gLyojX19QVVJFX18qL2V4cG9ydENvbXBvbmVudChzY3JpcHQsIFtbJ3JlbmRlcicscmVuZGVyXSxbJ19fZmlsZScsXCJ2ZW5kb3IvY2wvcXVpei9qcy9WdWUvUXVlc3Rpb24udnVlXCJdXSlcbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIF9fZXhwb3J0c19fLl9faG1ySWQgPSBcIjU0MTQwODA4XCJcbiAgY29uc3QgYXBpID0gX19WVUVfSE1SX1JVTlRJTUVfX1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghYXBpLmNyZWF0ZVJlY29yZCgnNTQxNDA4MDgnLCBfX2V4cG9ydHNfXykpIHtcbiAgICBhcGkucmVsb2FkKCc1NDE0MDgwOCcsIF9fZXhwb3J0c19fKVxuICB9XG4gIFxuICBtb2R1bGUuaG90LmFjY2VwdChcIi4vUXVlc3Rpb24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTU0MTQwODA4XCIsICgpID0+IHtcbiAgICBhcGkucmVyZW5kZXIoJzU0MTQwODA4JywgcmVuZGVyKVxuICB9KVxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgX19leHBvcnRzX18iLCJpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiLi9SZXN1bHRzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wNjZlNjQ3OFwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1Jlc3VsdHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL1Jlc3VsdHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcblxuaW1wb3J0IGV4cG9ydENvbXBvbmVudCBmcm9tIFwiL1VzZXJzL2NoYXJsZXNvd2VuL3dlYi9jc2UzMzUvLnlhcm4vX192aXJ0dWFsX18vdnVlLWxvYWRlci12aXJ0dWFsLWExYTRiMTg3YzMvMC9jYWNoZS92dWUtbG9hZGVyLW5wbS0xNy4wLjEtZjU1MmI4MjgwNS00MmNjOGM4ZmYwLnppcC9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2V4cG9ydEhlbHBlci5qc1wiXG5jb25zdCBfX2V4cG9ydHNfXyA9IC8qI19fUFVSRV9fKi9leHBvcnRDb21wb25lbnQoc2NyaXB0LCBbWydyZW5kZXInLHJlbmRlcl0sWydfX2ZpbGUnLFwidmVuZG9yL2NsL3F1aXovanMvVnVlL1Jlc3VsdHMudnVlXCJdXSlcbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIF9fZXhwb3J0c19fLl9faG1ySWQgPSBcIjA2NmU2NDc4XCJcbiAgY29uc3QgYXBpID0gX19WVUVfSE1SX1JVTlRJTUVfX1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghYXBpLmNyZWF0ZVJlY29yZCgnMDY2ZTY0NzgnLCBfX2V4cG9ydHNfXykpIHtcbiAgICBhcGkucmVsb2FkKCcwNjZlNjQ3OCcsIF9fZXhwb3J0c19fKVxuICB9XG4gIFxuICBtb2R1bGUuaG90LmFjY2VwdChcIi4vUmVzdWx0cy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDY2ZTY0NzhcIiwgKCkgPT4ge1xuICAgIGFwaS5yZXJlbmRlcignMDY2ZTY0NzgnLCByZW5kZXIpXG4gIH0pXG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBfX2V4cG9ydHNfXyIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy9iYWJlbC1sb2FkZXItdmlydHVhbC01OGEwNDNmMzJhLzAvY2FjaGUvYmFiZWwtbG9hZGVyLW5wbS05LjEuMC02NDY3MTYyY2JmLTc3NDc1OGZlYmQuemlwL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTIudXNlIS4uLy4uLy4uLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL3Z1ZS1sb2FkZXItdmlydHVhbC1hMWE0YjE4N2MzLzAvY2FjaGUvdnVlLWxvYWRlci1ucG0tMTcuMC4xLWY1NTJiODI4MDUtNDJjYzhjOGZmMC56aXAvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s5XS51c2VbMF0hLi9BbnN3ZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL2JhYmVsLWxvYWRlci12aXJ0dWFsLTU4YTA0M2YzMmEvMC9jYWNoZS9iYWJlbC1sb2FkZXItbnBtLTkuMS4wLTY0NjcxNjJjYmYtNzc0NzU4ZmViZC56aXAvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMi51c2UhLi4vLi4vLi4vLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vdnVlLWxvYWRlci12aXJ0dWFsLWExYTRiMTg3YzMvMC9jYWNoZS92dWUtbG9hZGVyLW5wbS0xNy4wLjEtZjU1MmI4MjgwNS00MmNjOGM4ZmYwLnppcC9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzldLnVzZVswXSEuL0Fuc3dlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy9iYWJlbC1sb2FkZXItdmlydHVhbC01OGEwNDNmMzJhLzAvY2FjaGUvYmFiZWwtbG9hZGVyLW5wbS05LjEuMC02NDY3MTYyY2JmLTc3NDc1OGZlYmQuemlwL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTIudXNlIS4uLy4uLy4uLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL3Z1ZS1sb2FkZXItdmlydHVhbC1hMWE0YjE4N2MzLzAvY2FjaGUvdnVlLWxvYWRlci1ucG0tMTcuMC4xLWY1NTJiODI4MDUtNDJjYzhjOGZmMC56aXAvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s5XS51c2VbMF0hLi9DbG9zZWQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL2JhYmVsLWxvYWRlci12aXJ0dWFsLTU4YTA0M2YzMmEvMC9jYWNoZS9iYWJlbC1sb2FkZXItbnBtLTkuMS4wLTY0NjcxNjJjYmYtNzc0NzU4ZmViZC56aXAvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMi51c2UhLi4vLi4vLi4vLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vdnVlLWxvYWRlci12aXJ0dWFsLWExYTRiMTg3YzMvMC9jYWNoZS92dWUtbG9hZGVyLW5wbS0xNy4wLjEtZjU1MmI4MjgwNS00MmNjOGM4ZmYwLnppcC9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzldLnVzZVswXSEuL0Nsb3NlZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy9iYWJlbC1sb2FkZXItdmlydHVhbC01OGEwNDNmMzJhLzAvY2FjaGUvYmFiZWwtbG9hZGVyLW5wbS05LjEuMC02NDY3MTYyY2JmLTc3NDc1OGZlYmQuemlwL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTIudXNlIS4uLy4uLy4uLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL3Z1ZS1sb2FkZXItdmlydHVhbC1hMWE0YjE4N2MzLzAvY2FjaGUvdnVlLWxvYWRlci1ucG0tMTcuMC4xLWY1NTJiODI4MDUtNDJjYzhjOGZmMC56aXAvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s5XS51c2VbMF0hLi9FeHBpcmVkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy9iYWJlbC1sb2FkZXItdmlydHVhbC01OGEwNDNmMzJhLzAvY2FjaGUvYmFiZWwtbG9hZGVyLW5wbS05LjEuMC02NDY3MTYyY2JmLTc3NDc1OGZlYmQuemlwL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTIudXNlIS4uLy4uLy4uLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL3Z1ZS1sb2FkZXItdmlydHVhbC1hMWE0YjE4N2MzLzAvY2FjaGUvdnVlLWxvYWRlci1ucG0tMTcuMC4xLWY1NTJiODI4MDUtNDJjYzhjOGZmMC56aXAvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s5XS51c2VbMF0hLi9FeHBpcmVkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL2JhYmVsLWxvYWRlci12aXJ0dWFsLTU4YTA0M2YzMmEvMC9jYWNoZS9iYWJlbC1sb2FkZXItbnBtLTkuMS4wLTY0NjcxNjJjYmYtNzc0NzU4ZmViZC56aXAvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMi51c2UhLi4vLi4vLi4vLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vdnVlLWxvYWRlci12aXJ0dWFsLWExYTRiMTg3YzMvMC9jYWNoZS92dWUtbG9hZGVyLW5wbS0xNy4wLjEtZjU1MmI4MjgwNS00MmNjOGM4ZmYwLnppcC9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzldLnVzZVswXSEuL0luaXRpYWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL2JhYmVsLWxvYWRlci12aXJ0dWFsLTU4YTA0M2YzMmEvMC9jYWNoZS9iYWJlbC1sb2FkZXItbnBtLTkuMS4wLTY0NjcxNjJjYmYtNzc0NzU4ZmViZC56aXAvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMi51c2UhLi4vLi4vLi4vLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vdnVlLWxvYWRlci12aXJ0dWFsLWExYTRiMTg3YzMvMC9jYWNoZS92dWUtbG9hZGVyLW5wbS0xNy4wLjEtZjU1MmI4MjgwNS00MmNjOGM4ZmYwLnppcC9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzldLnVzZVswXSEuL0luaXRpYWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vYmFiZWwtbG9hZGVyLXZpcnR1YWwtNThhMDQzZjMyYS8wL2NhY2hlL2JhYmVsLWxvYWRlci1ucG0tOS4xLjAtNjQ2NzE2MmNiZi03NzQ3NThmZWJkLnppcC9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0yLnVzZSEuLi8uLi8uLi8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy92dWUtbG9hZGVyLXZpcnR1YWwtYTFhNGIxODdjMy8wL2NhY2hlL3Z1ZS1sb2FkZXItbnBtLTE3LjAuMS1mNTUyYjgyODA1LTQyY2M4YzhmZjAuemlwL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbOV0udXNlWzBdIS4vUHJldmlldy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vYmFiZWwtbG9hZGVyLXZpcnR1YWwtNThhMDQzZjMyYS8wL2NhY2hlL2JhYmVsLWxvYWRlci1ucG0tOS4xLjAtNjQ2NzE2MmNiZi03NzQ3NThmZWJkLnppcC9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0yLnVzZSEuLi8uLi8uLi8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy92dWUtbG9hZGVyLXZpcnR1YWwtYTFhNGIxODdjMy8wL2NhY2hlL3Z1ZS1sb2FkZXItbnBtLTE3LjAuMS1mNTUyYjgyODA1LTQyY2M4YzhmZjAuemlwL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbOV0udXNlWzBdIS4vUHJldmlldy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy9iYWJlbC1sb2FkZXItdmlydHVhbC01OGEwNDNmMzJhLzAvY2FjaGUvYmFiZWwtbG9hZGVyLW5wbS05LjEuMC02NDY3MTYyY2JmLTc3NDc1OGZlYmQuemlwL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTIudXNlIS4uLy4uLy4uLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL3Z1ZS1sb2FkZXItdmlydHVhbC1hMWE0YjE4N2MzLzAvY2FjaGUvdnVlLWxvYWRlci1ucG0tMTcuMC4xLWY1NTJiODI4MDUtNDJjYzhjOGZmMC56aXAvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s5XS51c2VbMF0hLi9QcmV2aWV3ZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL2JhYmVsLWxvYWRlci12aXJ0dWFsLTU4YTA0M2YzMmEvMC9jYWNoZS9iYWJlbC1sb2FkZXItbnBtLTkuMS4wLTY0NjcxNjJjYmYtNzc0NzU4ZmViZC56aXAvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMi51c2UhLi4vLi4vLi4vLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vdnVlLWxvYWRlci12aXJ0dWFsLWExYTRiMTg3YzMvMC9jYWNoZS92dWUtbG9hZGVyLW5wbS0xNy4wLjEtZjU1MmI4MjgwNS00MmNjOGM4ZmYwLnppcC9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzldLnVzZVswXSEuL1ByZXZpZXdlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy9iYWJlbC1sb2FkZXItdmlydHVhbC01OGEwNDNmMzJhLzAvY2FjaGUvYmFiZWwtbG9hZGVyLW5wbS05LjEuMC02NDY3MTYyY2JmLTc3NDc1OGZlYmQuemlwL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTIudXNlIS4uLy4uLy4uLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL3Z1ZS1sb2FkZXItdmlydHVhbC1hMWE0YjE4N2MzLzAvY2FjaGUvdnVlLWxvYWRlci1ucG0tMTcuMC4xLWY1NTJiODI4MDUtNDJjYzhjOGZmMC56aXAvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s5XS51c2VbMF0hLi9RdWVzdGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vYmFiZWwtbG9hZGVyLXZpcnR1YWwtNThhMDQzZjMyYS8wL2NhY2hlL2JhYmVsLWxvYWRlci1ucG0tOS4xLjAtNjQ2NzE2MmNiZi03NzQ3NThmZWJkLnppcC9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0yLnVzZSEuLi8uLi8uLi8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy92dWUtbG9hZGVyLXZpcnR1YWwtYTFhNGIxODdjMy8wL2NhY2hlL3Z1ZS1sb2FkZXItbnBtLTE3LjAuMS1mNTUyYjgyODA1LTQyY2M4YzhmZjAuemlwL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbOV0udXNlWzBdIS4vUXVlc3Rpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vYmFiZWwtbG9hZGVyLXZpcnR1YWwtNThhMDQzZjMyYS8wL2NhY2hlL2JhYmVsLWxvYWRlci1ucG0tOS4xLjAtNjQ2NzE2MmNiZi03NzQ3NThmZWJkLnppcC9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0yLnVzZSEuLi8uLi8uLi8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy92dWUtbG9hZGVyLXZpcnR1YWwtYTFhNGIxODdjMy8wL2NhY2hlL3Z1ZS1sb2FkZXItbnBtLTE3LjAuMS1mNTUyYjgyODA1LTQyY2M4YzhmZjAuemlwL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbOV0udXNlWzBdIS4vUmVzdWx0cy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vYmFiZWwtbG9hZGVyLXZpcnR1YWwtNThhMDQzZjMyYS8wL2NhY2hlL2JhYmVsLWxvYWRlci1ucG0tOS4xLjAtNjQ2NzE2MmNiZi03NzQ3NThmZWJkLnppcC9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0yLnVzZSEuLi8uLi8uLi8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy92dWUtbG9hZGVyLXZpcnR1YWwtYTFhNGIxODdjMy8wL2NhY2hlL3Z1ZS1sb2FkZXItbnBtLTE3LjAuMS1mNTUyYjgyODA1LTQyY2M4YzhmZjAuemlwL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbOV0udXNlWzBdIS4vUmVzdWx0cy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL2JhYmVsLWxvYWRlci12aXJ0dWFsLTU4YTA0M2YzMmEvMC9jYWNoZS9iYWJlbC1sb2FkZXItbnBtLTkuMS4wLTY0NjcxNjJjYmYtNzc0NzU4ZmViZC56aXAvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMi51c2UhLi4vLi4vLi4vLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vdnVlLWxvYWRlci12aXJ0dWFsLWVmYzU4NGE0YmEvMC9jYWNoZS92dWUtbG9hZGVyLW5wbS0xNy4wLjEtZjU1MmI4MjgwNS00MmNjOGM4ZmYwLnppcC9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3RlbXBsYXRlTG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdIS4uLy4uLy4uLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL3Z1ZS1sb2FkZXItdmlydHVhbC1hMWE0YjE4N2MzLzAvY2FjaGUvdnVlLWxvYWRlci1ucG0tMTcuMC4xLWY1NTJiODI4MDUtNDJjYzhjOGZmMC56aXAvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s5XS51c2VbMF0hLi9BbnN3ZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTMxMjAwYjQwXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy9iYWJlbC1sb2FkZXItdmlydHVhbC01OGEwNDNmMzJhLzAvY2FjaGUvYmFiZWwtbG9hZGVyLW5wbS05LjEuMC02NDY3MTYyY2JmLTc3NDc1OGZlYmQuemlwL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTIudXNlIS4uLy4uLy4uLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL3Z1ZS1sb2FkZXItdmlydHVhbC1lZmM1ODRhNGJhLzAvY2FjaGUvdnVlLWxvYWRlci1ucG0tMTcuMC4xLWY1NTJiODI4MDUtNDJjYzhjOGZmMC56aXAvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC90ZW1wbGF0ZUxvYWRlci5qcz8/cnVsZVNldFsxXS5ydWxlc1syXSEuLi8uLi8uLi8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy92dWUtbG9hZGVyLXZpcnR1YWwtYTFhNGIxODdjMy8wL2NhY2hlL3Z1ZS1sb2FkZXItbnBtLTE3LjAuMS1mNTUyYjgyODA1LTQyY2M4YzhmZjAuemlwL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbOV0udXNlWzBdIS4vQ2xvc2VkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zMzk3MTUwZVwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vYmFiZWwtbG9hZGVyLXZpcnR1YWwtNThhMDQzZjMyYS8wL2NhY2hlL2JhYmVsLWxvYWRlci1ucG0tOS4xLjAtNjQ2NzE2MmNiZi03NzQ3NThmZWJkLnppcC9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0yLnVzZSEuLi8uLi8uLi8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy92dWUtbG9hZGVyLXZpcnR1YWwtZWZjNTg0YTRiYS8wL2NhY2hlL3Z1ZS1sb2FkZXItbnBtLTE3LjAuMS1mNTUyYjgyODA1LTQyY2M4YzhmZjAuemlwL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvdGVtcGxhdGVMb2FkZXIuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0hLi4vLi4vLi4vLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vdnVlLWxvYWRlci12aXJ0dWFsLWExYTRiMTg3YzMvMC9jYWNoZS92dWUtbG9hZGVyLW5wbS0xNy4wLjEtZjU1MmI4MjgwNS00MmNjOGM4ZmYwLnppcC9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzldLnVzZVswXSEuL0V4cGlyZWQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTE2M2QwOTczXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy9iYWJlbC1sb2FkZXItdmlydHVhbC01OGEwNDNmMzJhLzAvY2FjaGUvYmFiZWwtbG9hZGVyLW5wbS05LjEuMC02NDY3MTYyY2JmLTc3NDc1OGZlYmQuemlwL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTIudXNlIS4uLy4uLy4uLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL3Z1ZS1sb2FkZXItdmlydHVhbC1lZmM1ODRhNGJhLzAvY2FjaGUvdnVlLWxvYWRlci1ucG0tMTcuMC4xLWY1NTJiODI4MDUtNDJjYzhjOGZmMC56aXAvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC90ZW1wbGF0ZUxvYWRlci5qcz8/cnVsZVNldFsxXS5ydWxlc1syXSEuLi8uLi8uLi8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy92dWUtbG9hZGVyLXZpcnR1YWwtYTFhNGIxODdjMy8wL2NhY2hlL3Z1ZS1sb2FkZXItbnBtLTE3LjAuMS1mNTUyYjgyODA1LTQyY2M4YzhmZjAuemlwL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbOV0udXNlWzBdIS4vSW5pdGlhbC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjU0NDkyMTJcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL2JhYmVsLWxvYWRlci12aXJ0dWFsLTU4YTA0M2YzMmEvMC9jYWNoZS9iYWJlbC1sb2FkZXItbnBtLTkuMS4wLTY0NjcxNjJjYmYtNzc0NzU4ZmViZC56aXAvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMi51c2UhLi4vLi4vLi4vLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vdnVlLWxvYWRlci12aXJ0dWFsLWVmYzU4NGE0YmEvMC9jYWNoZS92dWUtbG9hZGVyLW5wbS0xNy4wLjEtZjU1MmI4MjgwNS00MmNjOGM4ZmYwLnppcC9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3RlbXBsYXRlTG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdIS4uLy4uLy4uLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL3Z1ZS1sb2FkZXItdmlydHVhbC1hMWE0YjE4N2MzLzAvY2FjaGUvdnVlLWxvYWRlci1ucG0tMTcuMC4xLWY1NTJiODI4MDUtNDJjYzhjOGZmMC56aXAvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s5XS51c2VbMF0hLi9QcmV2aWV3LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02MjZiODZkNFwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vYmFiZWwtbG9hZGVyLXZpcnR1YWwtNThhMDQzZjMyYS8wL2NhY2hlL2JhYmVsLWxvYWRlci1ucG0tOS4xLjAtNjQ2NzE2MmNiZi03NzQ3NThmZWJkLnppcC9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0yLnVzZSEuLi8uLi8uLi8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy92dWUtbG9hZGVyLXZpcnR1YWwtZWZjNTg0YTRiYS8wL2NhY2hlL3Z1ZS1sb2FkZXItbnBtLTE3LjAuMS1mNTUyYjgyODA1LTQyY2M4YzhmZjAuemlwL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvdGVtcGxhdGVMb2FkZXIuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0hLi4vLi4vLi4vLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vdnVlLWxvYWRlci12aXJ0dWFsLWExYTRiMTg3YzMvMC9jYWNoZS92dWUtbG9hZGVyLW5wbS0xNy4wLjEtZjU1MmI4MjgwNS00MmNjOGM4ZmYwLnppcC9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzldLnVzZVswXSEuL1ByZXZpZXdlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YmFhMGI5N2FcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL2JhYmVsLWxvYWRlci12aXJ0dWFsLTU4YTA0M2YzMmEvMC9jYWNoZS9iYWJlbC1sb2FkZXItbnBtLTkuMS4wLTY0NjcxNjJjYmYtNzc0NzU4ZmViZC56aXAvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMi51c2UhLi4vLi4vLi4vLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vdnVlLWxvYWRlci12aXJ0dWFsLWVmYzU4NGE0YmEvMC9jYWNoZS92dWUtbG9hZGVyLW5wbS0xNy4wLjEtZjU1MmI4MjgwNS00MmNjOGM4ZmYwLnppcC9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3RlbXBsYXRlTG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdIS4uLy4uLy4uLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL3Z1ZS1sb2FkZXItdmlydHVhbC1hMWE0YjE4N2MzLzAvY2FjaGUvdnVlLWxvYWRlci1ucG0tMTcuMC4xLWY1NTJiODI4MDUtNDJjYzhjOGZmMC56aXAvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s5XS51c2VbMF0hLi9RdWVzdGlvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTQxNDA4MDhcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL2JhYmVsLWxvYWRlci12aXJ0dWFsLTU4YTA0M2YzMmEvMC9jYWNoZS9iYWJlbC1sb2FkZXItbnBtLTkuMS4wLTY0NjcxNjJjYmYtNzc0NzU4ZmViZC56aXAvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMi51c2UhLi4vLi4vLi4vLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vdnVlLWxvYWRlci12aXJ0dWFsLWVmYzU4NGE0YmEvMC9jYWNoZS92dWUtbG9hZGVyLW5wbS0xNy4wLjEtZjU1MmI4MjgwNS00MmNjOGM4ZmYwLnppcC9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3RlbXBsYXRlTG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdIS4uLy4uLy4uLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL3Z1ZS1sb2FkZXItdmlydHVhbC1hMWE0YjE4N2MzLzAvY2FjaGUvdnVlLWxvYWRlci1ucG0tMTcuMC4xLWY1NTJiODI4MDUtNDJjYzhjOGZmMC56aXAvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s5XS51c2VbMF0hLi9SZXN1bHRzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wNjZlNjQ3OFwiIl0sIm5hbWVzIjpbIlN0YXRlcyIsIlJlc3VsdHNWdWUiLCJkYXRhIiwicHJvcHMiLCJjb21wb25lbnRzIiwibWV0aG9kcyIsInN1Ym1pdCIsInF1aXoiLCJxdWVzdGlvbiIsImxlbmd0aCIsIiRlbWl0IiwiUVVFU1RJT04iLCJyZXRha2UiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsInByb2NlZWQiLCJTVEFSVCIsInJlc3VsdHMiLCJSRVNVTFRTIiwibW91bnRlZCIsImFsbG93ZWRUcmllcyIsIm51bVRyaWVzIiwibnVtRmluaXNoZWQiLCJRdWl6RGF0YSIsImNvbW1lbnQiLCJ0aW1lIiwibXVzdFByb3ZpZGVNZXNzYWdlIiwidW5kZWZpbmVkIiwid2F0Y2giLCJmaWxlIiwibmV3UXVpeiIsIm9sZFF1aXoiLCJmZXRjaCIsInF1ZXJ5IiwiJHNpdGUiLCJhcGkiLCJnZXQiLCJ0b2tlbiIsInRoZW4iLCJyZXNwb25zZSIsImhhc0Vycm9yIiwiZ2V0RGF0YSIsImF0dHJpYnV0ZXMiLCJhbnN3ZXJzIiwiYWZ0ZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiaW5uZXJIVE1MIiwiVnVlIiwibmV4dFRpY2siLCJtZXNzYWdlIiwidG9hc3QiLCJlcnJvciIsImZvcm1EYXRhIiwicHJldmlld3MiLCJpIiwicHJldmlldyIsInB1c2giLCJudW0iLCJmaWxlcyIsImFjdGl2ZSIsInJlbWFpbmluZ01pbnV0ZXMiLCJyZW1haW5pbmdTZWNvbmRzIiwicmVtYWluaW5nU2Vjb25kc1N0ciIsInBvc3QiLCJ0YWtlIiwibGlnaHRuaW5nIiwiTWF0aCIsImZsb29yIiwidGltZXIiLCJzZXRUaW1lb3V0IiwidHJpZXMiLCJoaWdoIiwiYXNzaWdudGFnIiwicXVpenRhZyIsInRyaWVkIiwicG9pbnRzIiwidmFsdWUiLCJUaW1lRm9ybWF0dGVyIiwicmVsYXRpdmVVTklYIiwiZWxhcHNlZCIsInN0YXJ0IiwiZW5kIiwiZGlmZiIsIm1pbiIsInNlYyIsIl9jcmVhdGVFbGVtZW50Vk5vZGUiLCJ0eXBlIiwiX2hvaXN0ZWRfNCIsIl9jcmVhdGVFbGVtZW50QmxvY2siLCIkcHJvcHMiLCJyZWYiLCJtZXRob2QiLCJvblN1Ym1pdCIsIiRvcHRpb25zIiwiYW5zd2VyIiwiX2hvaXN0ZWRfNyIsIl9ob2lzdGVkXzgiLCJvbkNsaWNrIiwiX2NyZWF0ZVZOb2RlIiwiX2NvbXBvbmVudF9yZXN1bHRzIiwiX2hvaXN0ZWRfMSIsIl9ob2lzdGVkXzIiLCJzcGxhc2giLCJfaG9pc3RlZF8zIiwiX2N0eCIsIl9GcmFnbWVudCIsImtleSIsIl9ob2lzdGVkXzUiLCJuYW1lIiwiX2hvaXN0ZWRfNiIsIl9ob2lzdGVkXzExIiwiX25vcm1hbGl6ZUNsYXNzIiwiUXVpekZhY3RvcnkiLCJTaXRlIiwiUXVpeiIsImNyZWF0ZSIsIlF1aXpWdWUiLCJRdWVzdGlvblZ1ZSIsIkFuc3dlclZ1ZSIsIkV4cGlyZWRWdWUiLCJDbG9zZWRWdWUiLCJQcmV2aWV3ZXJWdWUiLCJQcmV2aWV3VnVlIiwic2l0ZSIsIlZ1ZUhlbHBlciIsImluaXRpYWxpemUiLCJlbGVtZW50IiwiSlNPTiIsInBhcnNlIiwidGV4dENvbnRlbnQiLCJ0ZW1wbGF0ZSIsImFwcCIsImNyZWF0ZUFwcCIsInN0YXRlIiwiSU5JVElBTCIsInBhZ2UiLCJleHBpcmVkIiwiY2xvc2VkIiwibmV3U3RhdGUiLCJBTlNXRVIiLCJQUkVWSUVXIiwiY29uZmlnIiwiZ2xvYmFsUHJvcGVydGllcyIsIm1vdW50IiwidnVlIiwiZm9ybSIsIiRyZWZzIiwiRm9ybURhdGEiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaW5wdXQiLCJxdWVyeVNlbGVjdG9yIl0sInNvdXJjZVJvb3QiOiIifQ==