(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Quiz"] = factory();
	else
		root["Quiz"] = factory();
})(window, function() {
return (window["webpackJsonp_name_"] = window["webpackJsonp_name_"] || []).push([["Quiz"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Console/Members/MembersFetcherComponent.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/course/js/Console/Members/MembersFetcherComponent.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var users_cl_js_Lib_FetcherVue_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! users-cl/js/Lib/FetcherVue.vue */ "./vendor/cl/users/js/Lib/FetcherVue.vue");
/* harmony import */ var _Members_Member__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Members/Member */ "./vendor/cl/course/js/Members/Member.js");
/* harmony import */ var _StudentsOnly__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./StudentsOnly */ "./vendor/cl/course/js/Console/Members/StudentsOnly.js");
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  // If the fetching value it true, the using client
  // is fetching more than just the membership and we will
  // wait for that as well.
  props: {
    fetching: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      students: false,
      studentsElement: null
    };
  },
  methods: {
    fetchMore: function fetchMore() {
      this.$store.dispatch('members/more');
    },

    /**
     * Add "Students Only" to the menu bar
     */
    addStudentsOnly: function addStudentsOnly() {
      this.students = _StudentsOnly__WEBPACK_IMPORTED_MODULE_3__["StudentsOnly"].get();
      var element = this.$refs['students-only'];
      element.parentNode.removeChild(element);
      var extra = document.querySelector('div.cl-section-component span.extra');
      extra.appendChild(element);
      element.style.display = 'inline-block';
      this.studentsElement = element;
    },
    studentsOnlyChanged: function studentsOnlyChanged() {
      _StudentsOnly__WEBPACK_IMPORTED_MODULE_3__["StudentsOnly"].set(this.students);
    }
  },
  computed: Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])({
    users: function users(state) {
      if (this.students) {
        return state.members.users.filter(function (user) {
          return user.role() === _Members_Member__WEBPACK_IMPORTED_MODULE_2__["Member"].STUDENT;
        });
      } else {
        return state.members.users;
      }
    },
    fetcher: function fetcher(state) {
      return state.members.fetcher;
    }
  }),
  components: {
    'fetcher': users_cl_js_Lib_FetcherVue_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  mounted: function mounted() {
    var _this = this;

    this.students = _StudentsOnly__WEBPACK_IMPORTED_MODULE_3__["StudentsOnly"].get();
    var member = this.$store.state.user.user.member;
    var query = {
      semester: member.semester,
      section: member.section
    };
    this.$store.commit('members/query', query);
    this.$store.dispatch('members/fetch');
    setTimeout(function () {
      _this.addStudentsOnly();
    }, 100);
  },
  beforeDestroy: function beforeDestroy() {
    this.studentsElement.parentNode.removeChild(this.studentsElement);
    var extras = document.querySelectorAll('div.cl-section-component span.extra');
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/quiz/js/Console/QuizResultComponent.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/quiz/js/Console/QuizResultComponent.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var users_cl_js_Lib_FetcherVue_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! users-cl/js/Lib/FetcherVue.vue */ "./vendor/cl/users/js/Lib/FetcherVue.vue");
/* harmony import */ var site_cl_js_TimeFormatter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! site-cl/js/TimeFormatter */ "./vendor/cl/site/js/TimeFormatter.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/*
answertime
num
points
question
questiontime
rightanswer
studentanswer
token
 */

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['memberid', 'assigntag', 'quiztag'],
  data: function data() {
    return {
      fetching: true,
      user: null,
      section: null,
      assignment: null,
      tries: null,
      token: null,
      answers: null,
      answer: null
    };
  },
  components: {
    'fetcher': users_cl_js_Lib_FetcherVue_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  mounted: function mounted() {
    var _this = this;

    this.$parent.setTitle(': Quiz Result');
    Site.api.get("/api/quiz/result/".concat(this.memberid, "/").concat(this.assigntag, "/").concat(this.quiztag), {}).then(function (response) {
      if (!response.hasError()) {
        _this.user = new Users.User(response.getData('quiz-user').attributes);
        var member = _this.user.member;
        _this.section = _this.$store.getters['course/section'](member.semester, member.section);
        _this.assignment = _this.section.getAssignment(_this.assigntag);
        _this.tries = response.getData('quiz-tries').attributes;
        var answers = response.getData('quiz-answers');

        if (answers !== null) {
          _this.token = answers.id;
          _this.answers = answers.attributes;
          _this.answer = _this.answers.length > 0 ? _this.answers[0] : null;
        } else {
          _this.token = null;
          _this.answers = null;
          _this.answer = null;
        }

        _this.fetching = false;
      } else {
        Site.toast(_this, response);
      }
    }).catch(function (error) {
      console.log(error);
      Site.toast(_this, error);
    });
  },
  methods: {
    time: function time(value) {
      return site_cl_js_TimeFormatter__WEBPACK_IMPORTED_MODULE_1__["TimeFormatter"].relativeUNIX(value);
    },
    elapsed: function elapsed(start, end) {
      if (end === null) {
        return '';
      }

      var diff = end - start;
      var min = Math.floor(diff / 60);
      var sec = diff % 60;
      return '' + min + ':' + (sec < 10 ? '0' : '') + sec;
    },
    selectTry: function selectTry(token) {
      var _this2 = this;

      //this.fetching = true;
      Site.api.get("/api/quiz/result/token/".concat(token), {}).then(function (response) {
        if (!response.hasError()) {
          _this2.token = token;
          var answers = response.getData('quiz-answers');

          if (answers !== null) {
            _this2.answers = answers.attributes;
            _this2.answer = _this2.answers.length > 0 ? _this2.answers[0] : null;
          } else {
            _this2.answers = null;
            _this2.answer = null;
          }

          _this2.fetching = false;
        } else {
          Site.toast(_this2, response);
        }
      }).catch(function (error) {
        console.log(error);
        Site.toast(_this2, error);
      });
    },
    selectAnswer: function selectAnswer(num) {
      this.answer = this.answers[num - 1];
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/quiz/js/Console/QuizStatusComponent.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/quiz/js/Console/QuizStatusComponent.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var course_cl_js_Console_Members_MembersFetcherComponent_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! course-cl/js/Console/Members/MembersFetcherComponent.vue */ "./vendor/cl/course/js/Console/Members/MembersFetcherComponent.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['assigntag'],
  data: function data() {
    return {
      quizTags: [],
      results: null,
      assignment: null,
      eye: Site.root + '/vendor/cl/site/img/eye16.png'
    };
  },
  methods: {
    process: function process(results) {
      this.results = results; // Collect up the quiz tags

      for (var member in results) {
        for (var quizTag in results[member]) {
          if (this.quizTags.indexOf(quizTag) < 0) {
            this.quizTags.push(quizTag);
          }
        }
      }
    },
    status: function status(user, tag) {
      var result = this.quizResult(user, tag);

      if (result === null) {
        return '';
      }

      return '' + result.points + '/' + result.maxpoints;
    },
    total: function total(user) {
      if (this.results === null || this.assignment === null) {
        return '';
      }

      var sum = 0;
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.quizTags[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var tag = _step.value;
          var result = this.quizResult(user, tag);

          if (result !== null) {
            sum += +result.points;
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return '' + sum + '/' + this.assignment.quiz;
    },

    /**
     * GEt a quiz result for a user if one exists, otherwise return null.
     * @param user User object
     * @param tag quiz tag
     * @returns {*}
     */
    quizResult: function quizResult(user, tag) {
      if (this.results === null) {
        return null;
      }

      if (this.results[user.id] !== undefined && this.results[user.id][tag] !== undefined) {
        var result = this.results[user.id][tag];
        return result;
      }

      return null;
    },
    link: function link(user, tag) {
      return "".concat(Site.root, "/cl/console/quiz/result/").concat(user.member.id, "/").concat(this.assignment.tag, "/").concat(tag);
    }
  },
  components: {
    'membersfetcher': course_cl_js_Console_Members_MembersFetcherComponent_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  mounted: function mounted() {
    var _this = this;

    var member = this.$store.state.user.user.member;
    var query = {
      semester: member.semester,
      section: member.section
    };
    this.section = this.$store.getters['course/section'](member.semester, member.section);
    this.assignment = this.section.getAssignment(this.assigntag);
    this.$parent.setTitle(': ' + this.assignment.shortname + ' Quiz Status');
    Site.api.get('/api/quiz/all/' + this.assigntag, query).then(function (response) {
      if (!response.hasError()) {
        var data = response.getData('quiz-results-all');

        if (data !== null) {
          _this.process(data.attributes.results);
        }
      } else {
        Site.toast(_this, response);
      }
    }).catch(function (error) {
      console.log(error);
      Site.toast(_this, error);
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/quiz/js/Vue/Answer.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/quiz/js/Vue/Answer.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _States__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../States */ "./vendor/cl/quiz/js/States.js");
/* harmony import */ var _Results_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Results.vue */ "./vendor/cl/quiz/js/Vue/Results.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
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
        this.$emit('new-state', _States__WEBPACK_IMPORTED_MODULE_0__["States"].QUESTION);
      }
    },
    retake: function retake() {
      window.location.reload(true);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/quiz/js/Vue/Closed.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/quiz/js/Vue/Closed.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _States__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../States */ "./vendor/cl/quiz/js/States.js");
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['quiz']
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/quiz/js/Vue/Expired.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/quiz/js/Vue/Expired.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _States__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../States */ "./vendor/cl/quiz/js/States.js");
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['quiz'],
  methods: {
    proceed: function proceed() {
      this.$emit('new-state', _States__WEBPACK_IMPORTED_MODULE_0__["States"].START);
    },
    results: function results() {
      this.$emit('new-state', _States__WEBPACK_IMPORTED_MODULE_0__["States"].RESULTS);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/quiz/js/Vue/Initial.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/quiz/js/Vue/Initial.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _States__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../States */ "./vendor/cl/quiz/js/States.js");
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['quiz'],
  methods: {
    proceed: function proceed() {
      this.$emit('new-state', _States__WEBPACK_IMPORTED_MODULE_0__["States"].START);
    },
    results: function results() {
      this.$emit('new-state', _States__WEBPACK_IMPORTED_MODULE_0__["States"].RESULTS);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/quiz/js/Vue/Preview.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/quiz/js/Vue/Preview.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _States__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../States */ "./vendor/cl/quiz/js/States.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      question: null,
      comment: null,
      time: 0
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
      Site.api.get("/api/quiz/preview/".concat(this.quiz.token), query).then(function (response) {
        if (!response.hasError()) {
          var data = response.getData('quiz-question');
          _this.question = data.attributes.question;
          _this.time = data.attributes.time;
          _this.comment = data.attributes.comment;
          _this.answers = data.attributes.answers;
        } else {
          Site.toast(_this, response);
        }
      }).catch(function (error) {
        Site.toast(_this, error);
      });
    },
    proceed: function proceed() {},
    submit: function submit() {
      var form = this.$refs['form'];
      var formData = new FormData(form);
      var answer = formData.get('cl-answer');

      if (answer === null) {
        Site.toast(this, 'You must choose an option');
        return;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/quiz/js/Vue/Previewer.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/quiz/js/Vue/Previewer.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/quiz/js/Vue/Question.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/quiz/js/Vue/Question.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _States__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../States */ "./vendor/cl/quiz/js/States.js");
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      question: null,
      time: 0
    };
  },
  props: ['quiz'],
  mounted: function mounted() {
    var _this = this;

    Site.api.post("/api/quiz/question/".concat(this.quiz.token, "/").concat(this.quiz.question), {}).then(function (response) {
      if (!response.hasError()) {
        var data = response.getData('quiz-question');
        _this.question = data.attributes.question;
        _this.time = data.attributes.time;
      } else {
        Site.toast(_this, response);
      }
    }).catch(function (error) {
      Site.toast(_this, error);
    });
  },
  methods: {
    proceed: function proceed() {},
    submit: function submit() {
      var _this2 = this;

      var form = this.$refs['form'];
      var formData = new FormData(form);
      var answer = formData.get('cl-answer');

      if (answer === null) {
        Site.toast(this, 'You must choose an option');
        return;
      }

      Site.api.post("/api/quiz/answer/".concat(this.quiz.token, "/").concat(this.quiz.question), formData).then(function (response) {
        if (!response.hasError()) {
          var data = response.getData('quiz-answer');

          _this2.$emit('answer', data);
        } else {
          Site.toast(_this2, response);
        }
      }).catch(function (error) {
        Site.toast(_this2, error);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/quiz/js/Vue/Results.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/quiz/js/Vue/Results.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var site_cl_js_TimeFormatter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! site-cl/js/TimeFormatter */ "./vendor/cl/site/js/TimeFormatter.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['quiz'],
  data: function data() {
    return {
      tries: null,
      high: 0
    };
  },
  mounted: function mounted() {
    var _this = this;

    Site.api.get("/api/quiz/results/".concat(this.quiz.assigntag, "/").concat(this.quiz.quiztag), {}).then(function (response) {
      if (!response.hasError()) {
        var data = response.getData('quiz-results');
        _this.tries = data.attributes.tries;
        _this.high = 0;
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = _this.tries[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var tried = _step.value;

            if (tried.points > _this.high) {
              _this.high = tried.points;
            }
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      } else {
        Site.toast(_this, response);
      }
    }).catch(function (error) {
      Site.toast(_this, error);
    });
  },
  methods: {
    time: function time(value) {
      return site_cl_js_TimeFormatter__WEBPACK_IMPORTED_MODULE_0__["TimeFormatter"].relativeUNIX(value);
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/users/js/Lib/FetcherVue.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/users/js/Lib/FetcherVue.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: Fetcher, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fetcher", function() { return Fetcher; });
//
//
//
//
//
//
//
//
//
//

/**
 * @file
 * Fetcher component displays "Fetching" and a "more" button.
 */

/**
 * Fetcher function used to update this object.
 * @constructor
 */
var Fetcher = function Fetcher() {
  this.more = false; // Indicates there is more to fetch

  this.fetching = false; // Set true while we are fetching

  this.fetched = false; // Set true when we have fetched something...

  this.start = function (single) {
    this.fetching = true;

    if (single !== true) {
      this.more = false;
    }
  };

  this.done = function (single) {
    this.fetching = false;

    if (single !== true) {
      this.fetched = true;
    }
  };

  this.reset = function () {
    this.more = false;
    this.fetching = false;
    this.fetched = false;
  };
};
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    fetcher: {
      type: Object,
      'default': null
    },
    fetching: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    'fetcher.fetching': function fetcherFetching(to, from) {
      this.setFetching();
    },
    fetching: function fetching(to, from) {
      this.setFetching();
    }
  },
  data: function data() {
    return {
      showFetching: false,
      delayedFetching: false,
      timer: null
    };
  },
  mounted: function mounted() {
    this.setFetching();
  },
  methods: {
    fetchMore: function fetchMore() {
      this.$parent.fetchMore();
    },
    setFetching: function setFetching() {
      var _this = this;

      // Are we currently fetching?
      var showFetching = this.fetcher !== null && this.fetcher.fetching || this.fetching;

      if (showFetching && !this.showFetching) {
        // Fetching is becoming active
        this.timer = setTimeout(function () {
          _this.delayedFetching = true;
        }, 1000);
      } else if (!showFetching && this.showFetching) {
        clearTimeout(this.timer);
        this.time = null;
        this.delayedFetching = false;
      }

      this.showFetching = showFetching;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./vendor/cl/quiz/_quiz.scss":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/resolve-url-loader!./node_modules/sass-loader/lib/loader.js?sourceMap!./vendor/cl/quiz/_quiz.scss ***!
  \**************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div.cl-quiz {\n  -moz-box-shadow: 3px 3px 8px #ccc;\n  -webkit-box-shadow: 3px 3px 8px #ccc;\n  box-shadow: 3px 3px 8px #ccc;\n}\n\ndiv.cl-quiz {\n  border: solid #cccccc 1pt;\n  padding: 6px;\n  margin: 1em 0;\n  min-height: 15em;\n  align-items: center;\n  justify-content: center;\n  background: #e8f7f3;\n}\n\ndiv.cl-quiz > div {\n  width: 100%;\n}\n\ndiv.cl-quiz > div.content {\n  padding: 0;\n}\n\ndiv.cl-quiz div.cl-results {\n  width: 80%;\n  margin: 0 auto;\n}\n\ndiv.cl-quiz h2 {\n  border: 0;\n  margin-top: 14px;\n}\n\ndiv.cl-quiz p.answer {\n  margin-left: 4.3rem;\n  text-align: left;\n  text-indent: -4rem;\n}\n\ndiv.cl-quiz p.answer span {\n  font-weight: bold;\n}\n\ndiv.cl-quiz div.cl-multi {\n  margin: 1em 0;\n  padding: 0 0 0 3em;\n}\n\ndiv.cl-quiz div.cl-multi p {\n  margin: 0;\n}\n\ndiv.cl-quiz p.done {\n  background: #c41425;\n  text-align: center;\n  color: white;\n}\n\ndiv.cl-quiz button {\n  width: 10em;\n}\n\ndiv.cl-quiz tr.best td {\n  background: #eeffee;\n}\n\ndiv.cl-quiz div.previewer {\n  clear: both;\n  border-top: 1px solid black;\n}\n\ndiv.cl-quiz div.previewer h3 {\n  margin: 0;\n  font-size: 1.2em;\n}\n\ndiv.cl-quiz div.previewer ul {\n  margin-top: 0;\n}\n\ndiv.cl-quiz div.preview {\n  margin: 0 0 1em 0;\n}\n\ndiv.cl-quiz div.preview hr {\n  margin: 0;\n}\n\ndiv.cl-quiz div.preview h3 {\n  text-align: center;\n}\n\ndiv.cl-quiz div.preview p.preview {\n  font-style: italic;\n  margin-top: 0;\n  text-align: center;\n  border-bottom: 1px solid black;\n}\n\n@media only screen and (max-width: 750px) {\n  #quiz {\n    margin-right: 5px;\n  }\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/quiz/js/Console/QuizResultComponent.vue?vue&type=style&index=0&id=d981142c&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader!./node_modules/sass-loader/lib/loader.js?sourceMap!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/quiz/js/Console/QuizResultComponent.vue?vue&type=style&index=0&id=d981142c&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\ndiv.cl-about[data-v-d981142c] {\n  margin: 1em auto;\n  display: table;\n}\ndiv.cl-about p[data-v-d981142c] {\n  display: table-row;\n}\ndiv.cl-about p span[data-v-d981142c] {\n  display: table-cell;\n  text-align: left;\n}\ndiv.cl-about p span[data-v-d981142c]:first-child {\n  text-align: right;\n  padding-right: 1em;\n}\ntr[data-v-d981142c] {\n  cursor: pointer;\n}\ntr[data-v-d981142c]:first-child {\n  cursor: default;\n}\ntr.selected td[data-v-d981142c] {\n  background: #88ffff;\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/quiz/js/Console/QuizStatusComponent.vue?vue&type=style&index=0&id=c268df96&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader!./node_modules/sass-loader/lib/loader.js?sourceMap!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/quiz/js/Console/QuizStatusComponent.vue?vue&type=style&index=0&id=c268df96&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\ntable td[data-v-c268df96] {\n  text-align: center;\n}\ntable td[data-v-c268df96]:nth-child(1),\ntable td[data-v-c268df96]:nth-child(2),\ntable td[data-v-c268df96]:nth-child(3),\ntable td[data-v-c268df96]:nth-child(4) {\n  text-align: left;\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/users/js/Lib/FetcherVue.vue?vue&type=style&index=0&id=43b26bcb&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader!./node_modules/sass-loader/lib/loader.js?sourceMap!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/users/js/Lib/FetcherVue.vue?vue&type=style&index=0&id=43b26bcb&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\ndiv.fetching[data-v-43b26bcb] {\n  height: 28px;\n  margin: 1em 0;\n}\ndiv.fetching p[data-v-43b26bcb] {\n  text-align: center;\n  font-style: italic;\n  color: #c41425;\n  padding-top: 2px;\n}\n.more[data-v-43b26bcb] {\n  text-align: center;\n}\n.more button[data-v-43b26bcb] {\n  font-size: 0.8em;\n  height: 28px;\n  margin: 0;\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/moment/locale/bm.js",
	"./bm.js": "./node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/moment/locale/en-il.js",
	"./en-il.js": "./node_modules/moment/locale/en-il.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/moment/locale/gu.js",
	"./gu.js": "./node_modules/moment/locale/gu.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mn": "./node_modules/moment/locale/mn.js",
	"./mn.js": "./node_modules/moment/locale/mn.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/moment/locale/mt.js",
	"./mt.js": "./node_modules/moment/locale/mt.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./tg": "./node_modules/moment/locale/tg.js",
	"./tg.js": "./node_modules/moment/locale/tg.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./ug-cn": "./node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Console/Members/MembersFetcherComponent.vue?vue&type=template&id=3eab44d2&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/course/js/Console/Members/MembersFetcherComponent.vue?vue&type=template&id=3eab44d2& ***!
  \**************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("label", { ref: "students-only", staticStyle: { display: "none" } }, [
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.students,
              expression: "students"
            }
          ],
          attrs: { type: "checkbox" },
          domProps: {
            checked: Array.isArray(_vm.students)
              ? _vm._i(_vm.students, null) > -1
              : _vm.students
          },
          on: {
            change: [
              function($event) {
                var $$a = _vm.students,
                  $$el = $event.target,
                  $$c = $$el.checked ? true : false
                if (Array.isArray($$a)) {
                  var $$v = null,
                    $$i = _vm._i($$a, $$v)
                  if ($$el.checked) {
                    $$i < 0 && (_vm.students = $$a.concat([$$v]))
                  } else {
                    $$i > -1 &&
                      (_vm.students = $$a
                        .slice(0, $$i)
                        .concat($$a.slice($$i + 1)))
                  }
                } else {
                  _vm.students = $$c
                }
              },
              _vm.studentsOnlyChanged
            ]
          }
        }),
        _vm._v(" Students Only")
      ]),
      _vm._v(" "),
      _c(
        "fetcher",
        { attrs: { fetcher: _vm.fetcher, fetching: _vm.fetching } },
        [
          _vm._t("default", null, { users: _vm.users, students: _vm.students }),
          _vm._v(" "),
          _vm.users.length == 0
            ? _c("p", { staticClass: "centerbox comp center" }, [
                _vm._v(
                  "\n        There are currently no members enrolled in this section."
                )
              ])
            : _vm._e()
        ],
        2
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/quiz/js/Console/QuizResultComponent.vue?vue&type=template&id=d981142c&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/quiz/js/Console/QuizResultComponent.vue?vue&type=template&id=d981142c&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "content" }, [
    _c(
      "div",
      { staticClass: "full" },
      [
        _c("fetcher", { attrs: { fetching: _vm.fetching } }, [
          !_vm.fetching
            ? _c("div", [
                _c("div", { staticClass: "cl-about" }, [
                  _c("p", [
                    _c("span", [_vm._v("Course Member: ")]),
                    _c("span", [_vm._v(_vm._s(_vm.user.name))])
                  ]),
                  _vm._v(" "),
                  _c("p", [
                    _c("span", [_vm._v("Assignment: ")]),
                    _c("span", [_vm._v(_vm._s(_vm.assignment.name))])
                  ]),
                  _vm._v(" "),
                  _c("p", [
                    _c("span", [_vm._v("Quiz: ")]),
                    _c("span", [_vm._v(_vm._s(_vm.quiztag))])
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "table",
                  { staticClass: "small center" },
                  [
                    _c("tr", [
                      _c("th", { staticClass: "center" }, [
                        _vm._v("When Taken")
                      ]),
                      _vm._v(" "),
                      _c("th", [_vm._v("Finished?")]),
                      _vm._v(" "),
                      _c("th", [_vm._v("Points")]),
                      _vm._v(" "),
                      _c("th", [_vm._v("Max")])
                    ]),
                    _vm._v(" "),
                    _vm._l(_vm.tries, function(tried) {
                      return _c(
                        "tr",
                        {
                          class: tried.token === _vm.token ? "selected" : "",
                          on: {
                            click: function($event) {
                              if (
                                !("button" in $event) &&
                                _vm._k(
                                  $event.keyCode,
                                  "default",
                                  undefined,
                                  $event.key,
                                  undefined
                                )
                              ) {
                                return null
                              }
                              _vm.selectTry(tried.token)
                            }
                          }
                        },
                        [
                          _c("td", [_vm._v(_vm._s(_vm.time(tried.start)))]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(_vm._s(_vm.elapsed(tried.start, tried.end)))
                          ]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(tried.points))]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(tried.maxpoints))])
                        ]
                      )
                    })
                  ],
                  2
                ),
                _vm._v(" "),
                _vm.answers !== null && _vm.answers.length > 0
                  ? _c(
                      "table",
                      { staticClass: "small center" },
                      [
                        _c("tr", [
                          _c("th", [_vm._v("#")]),
                          _vm._v(" "),
                          _c("th", [_vm._v("Points")]),
                          _vm._v(" "),
                          _c("th", [_vm._v("Asked")]),
                          _vm._v(" "),
                          _c("th", [_vm._v("Answered")])
                        ]),
                        _vm._v(" "),
                        _vm._l(_vm.answers, function(ans) {
                          return _c(
                            "tr",
                            {
                              class:
                                _vm.answer !== null &&
                                ans.num === _vm.answer.num
                                  ? "selected"
                                  : "",
                              on: {
                                click: function($event) {
                                  if (
                                    !("button" in $event) &&
                                    _vm._k(
                                      $event.keyCode,
                                      "default",
                                      undefined,
                                      $event.key,
                                      undefined
                                    )
                                  ) {
                                    return null
                                  }
                                  _vm.selectAnswer(ans.num)
                                }
                              }
                            },
                            [
                              _c("td", [_vm._v(_vm._s(ans.num))]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(ans.points))]),
                              _vm._v(" "),
                              _c("td", [
                                _vm._v(_vm._s(_vm.time(ans.questiontime)))
                              ]),
                              _vm._v(" "),
                              _c("td", [
                                _vm._v(_vm._s(_vm.time(ans.answertime)))
                              ])
                            ]
                          )
                        })
                      ],
                      2
                    )
                  : _vm._e(),
                _vm._v(" "),
                _vm.answers !== null && _vm.answers.length === 0
                  ? _c("div", [
                      _c("p", { staticClass: "centerbox primary center" }, [
                        _vm._v("No answers provided for this quiz try.")
                      ])
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.answer !== null
                  ? _c("div", { staticClass: "cl-quiz" }, [
                      _c("div", [
                        _c("h2", [
                          _vm._v(
                            "Question: " +
                              _vm._s(_vm.answer.num) +
                              " of " +
                              _vm._s(_vm.answers.length)
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", {
                          staticClass: "question",
                          domProps: { innerHTML: _vm._s(_vm.answer.question) }
                        }),
                        _vm._v(" "),
                        _c("h3", [_vm._v("Student answer:")]),
                        _vm._v(" "),
                        _c("pre", { staticClass: "code" }, [
                          _vm._v(_vm._s(_vm.answer.studentanswer))
                        ]),
                        _vm._v(" "),
                        _vm.answer.rightanswer.length > 0
                          ? _c("div", [
                              _c("h3", [_vm._v("Correct answer:")]),
                              _vm._v(" "),
                              _c("pre", { staticClass: "code" }, [
                                _vm._v(_vm._s(_vm.answer.rightanswer))
                              ])
                            ])
                          : _vm._e()
                      ])
                    ])
                  : _vm._e()
              ])
            : _vm._e()
        ])
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/quiz/js/Console/QuizStatusComponent.vue?vue&type=template&id=c268df96&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/quiz/js/Console/QuizStatusComponent.vue?vue&type=template&id=c268df96&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "content" }, [
    _c(
      "div",
      { staticClass: "full" },
      [
        _c("membersfetcher", {
          attrs: { fetching: _vm.results === null },
          scopedSlots: _vm._u([
            {
              key: "default",
              fn: function(fetcher) {
                return [
                  _c(
                    "table",
                    { staticClass: "small" },
                    [
                      _c(
                        "tr",
                        [
                          _c("th", [_vm._v("User")]),
                          _vm._v(" "),
                          _c("th", [_vm._v("Name")]),
                          _vm._v(" "),
                          _c("th", [_vm._v("Email")]),
                          _vm._v(" "),
                          _c("th", [_vm._v("Role")]),
                          _vm._v(" "),
                          _vm._l(_vm.quizTags, function(tag) {
                            return _c("th", { staticClass: "small" }, [
                              _vm._v(_vm._s(tag))
                            ])
                          }),
                          _vm._v(" "),
                          _vm.results !== null
                            ? _c("th", [_vm._v("Total")])
                            : _vm._e()
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _vm._l(fetcher.users, function(user) {
                        return _c(
                          "tr",
                          [
                            _c("td", [_vm._v(_vm._s(user.userId))]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(user.name))]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(user.email))]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(user.roleName()))]),
                            _vm._v(" "),
                            _vm._l(_vm.quizTags, function(tag) {
                              return _c(
                                "td",
                                [
                                  _vm._v(
                                    _vm._s(_vm.status(user, tag)) +
                                      "\n              "
                                  ),
                                  _vm.quizResult(user, tag) !== null
                                    ? _c(
                                        "router-link",
                                        { attrs: { to: _vm.link(user, tag) } },
                                        [_c("img", { attrs: { src: _vm.eye } })]
                                      )
                                    : _vm._e()
                                ],
                                1
                              )
                            }),
                            _vm._v(" "),
                            _vm.results !== null
                              ? _c("td", [_vm._v(_vm._s(_vm.total(user)))])
                              : _vm._e()
                          ],
                          2
                        )
                      })
                    ],
                    2
                  )
                ]
              }
            }
          ])
        })
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/quiz/js/Vue/Answer.vue?vue&type=template&id=31200b40&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/quiz/js/Vue/Answer.vue?vue&type=template&id=31200b40& ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _vm.quiz.length > 1
      ? _c("h2", [
          _vm._v(
            "Question " +
              _vm._s(_vm.quiz.question) +
              " of " +
              _vm._s(_vm.quiz.length)
          )
        ])
      : _vm._e(),
    _vm._v(" "),
    _c(
      "form",
      {
        ref: "form",
        attrs: { method: "post" },
        on: {
          submit: function($event) {
            $event.preventDefault()
            return _vm.submit($event)
          }
        }
      },
      [
        _c("div", { domProps: { innerHTML: _vm._s(_vm.quiz.answer) } }),
        _vm._v(" "),
        _vm.quiz.question < _vm.quiz.length
          ? _c("p", [
              _c("button", { attrs: { type: "submit" } }, [
                _vm._v("Next Question")
              ])
            ])
          : _vm._e()
      ]
    ),
    _vm._v(" "),
    _vm.quiz.question >= _vm.quiz.length
      ? _c(
          "div",
          [
            _c("p", { staticClass: "done" }, [_vm._v("This Quiz is Complete")]),
            _vm._v(" "),
            _c("p", { staticClass: "center" }, [
              _vm._v("You may "),
              _c(
                "a",
                {
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      return _vm.retake($event)
                    }
                  }
                },
                [_vm._v("retake the quiz")]
              ),
              _vm._v(" if you wish")
            ]),
            _vm._v(" "),
            _c("results", { attrs: { quiz: _vm.quiz } })
          ],
          1
        )
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/quiz/js/Vue/Closed.vue?vue&type=template&id=3397150e&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/quiz/js/Vue/Closed.vue?vue&type=template&id=3397150e& ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("p", { staticClass: "centerbox comp center" }, [
        _vm._v("The quiz is closed and not available at this time.")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/quiz/js/Vue/Expired.vue?vue&type=template&id=163d0973&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/quiz/js/Vue/Expired.vue?vue&type=template&id=163d0973& ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("p", { staticClass: "centerbox comp" }, [
      _vm._v(
        "The quiz has expired and can no longer be taken. Quizzes expire at the time\n    the assignment is due. "
      )
    ]),
    _vm._v(" "),
    _c("p", [
      _vm._v(
        "You can proceed through the quiz for practice purposes, but new grades and\n    submissions will not be possible."
      )
    ]),
    _vm._v(" "),
    _c("p", [
      _vm._v("When ready, "),
      _c(
        "a",
        {
          on: {
            click: function($event) {
              $event.preventDefault()
              _vm.proceed()
            }
          }
        },
        [_vm._v("click to proceed to the quiz.")]
      ),
      _vm._v(" You can also\n    "),
      _c(
        "a",
        {
          on: {
            click: function($event) {
              $event.preventDefault()
              _vm.results()
            }
          }
        },
        [_vm._v("jump directly to your quiz results.")]
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/quiz/js/Vue/Initial.vue?vue&type=template&id=65449212&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/quiz/js/Vue/Initial.vue?vue&type=template&id=65449212& ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { domProps: { innerHTML: _vm._s(_vm.quiz.splash) } }),
    _vm._v(" "),
    _vm.quiz.lightning === null
      ? _c("p", { staticClass: "center" }, [
          _vm._v("This quiz has no specified time limit.")
        ])
      : _vm._e(),
    _vm._v(" "),
    _vm.quiz.lightning !== null
      ? _c("p", { staticClass: "centerbox seconda center" }, [
          _vm._v(
            "This is a lightning quiz.\n    You have " +
              _vm._s(_vm.quiz.lightning) +
              " seconds to answer each question."
          )
        ])
      : _vm._e(),
    _vm._v(" "),
    _c("p", [
      _vm._v("When ready, "),
      _c(
        "a",
        {
          on: {
            click: function($event) {
              $event.preventDefault()
              _vm.proceed()
            }
          }
        },
        [_vm._v("click to proceed to the quiz.")]
      ),
      _vm._v(" You can also\n    "),
      _c(
        "a",
        {
          on: {
            click: function($event) {
              $event.preventDefault()
              _vm.results()
            }
          }
        },
        [_vm._v("jump directly to your quiz results.")]
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/quiz/js/Vue/Preview.vue?vue&type=template&id=626b86d4&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/quiz/js/Vue/Preview.vue?vue&type=template&id=626b86d4& ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "preview" }, [
    _vm.question !== null
      ? _c("div", [
          _vm.quiz.length > 1
            ? _c("p", { staticClass: "preview" }, [
                _vm._v(
                  "Preview of " +
                    _vm._s(_vm.quiz.question) +
                    ". Available to staff only."
                )
              ])
            : _vm._e(),
          _vm._v(" "),
          _c(
            "form",
            {
              ref: "form",
              attrs: { method: "post" },
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.submit($event)
                }
              }
            },
            [
              _c("input", {
                attrs: { type: "hidden", name: "question-time" },
                domProps: { value: _vm.time }
              }),
              _vm._v(" "),
              _c("div", { domProps: { innerHTML: _vm._s(_vm.question) } }),
              _vm._v(" "),
              _vm._m(0),
              _vm._v(" "),
              _c("hr"),
              _vm._v(" "),
              _c("h3", [_vm._v("Answers")]),
              _vm._v(" "),
              _vm._l(_vm.answers, function(answer) {
                return _c("div", [
                  _c("div", { domProps: { innerHTML: _vm._s(answer) } })
                ])
              }),
              _vm._v(" "),
              _vm.comment !== null
                ? _c("div", [
                    _c("h3", [_vm._v("Comment")]),
                    _vm._v(" "),
                    _c("div", {
                      staticClass: "centerbox primary",
                      domProps: { innerHTML: _vm._s(_vm.comment) }
                    })
                  ])
                : _vm._e()
            ],
            2
          )
        ])
      : _vm._e()
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [
      _c("button", { attrs: { type: "submit" } }, [_vm._v("Submit")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/quiz/js/Vue/Previewer.vue?vue&type=template&id=baa0b97a&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/quiz/js/Vue/Previewer.vue?vue&type=template&id=baa0b97a& ***!
  \**********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "previewer" }, [
    _c("h2", [_vm._v("Staff Question Previews")]),
    _vm._v(" "),
    _vm._m(0),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "small" },
      _vm._l(_vm.previews, function(question) {
        return _c("div", { key: question.num }, [
          _c("h3", [_vm._v("Question " + _vm._s(question.num))]),
          _vm._v(" "),
          question.files.length > 0
            ? _c(
                "ul",
                _vm._l(question.files, function(file) {
                  return _c("li", [
                    _c(
                      "a",
                      {
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            _vm.preview(file)
                          }
                        }
                      },
                      [_vm._v(_vm._s(file))]
                    )
                  ])
                })
              )
            : _vm._e()
        ])
      })
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [
      _vm._v(
        "These links allow you to preview quiz questions. If the question is randomly selected\n      from multiple files, the files appear below the question. "
      ),
      _c("span", { staticClass: "smallred" }, [
        _vm._v("This part of the page appears for\nstaff members only.")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/quiz/js/Vue/Question.vue?vue&type=template&id=54140808&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/quiz/js/Vue/Question.vue?vue&type=template&id=54140808& ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _vm.question !== null
      ? _c("div", [
          _vm.quiz.length > 1
            ? _c("h2", [
                _vm._v(
                  "Question " +
                    _vm._s(_vm.quiz.question) +
                    " of " +
                    _vm._s(_vm.quiz.length)
                )
              ])
            : _vm._e(),
          _vm._v(" "),
          _c(
            "form",
            {
              ref: "form",
              attrs: { method: "post" },
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.submit($event)
                }
              }
            },
            [
              _c("input", {
                attrs: { type: "hidden", name: "question-time" },
                domProps: { value: _vm.time }
              }),
              _vm._v(" "),
              _c("div", { domProps: { innerHTML: _vm._s(_vm.question) } }),
              _vm._v(" "),
              _vm._m(0)
            ]
          )
        ])
      : _vm._e()
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [
      _c("button", { attrs: { type: "submit" } }, [_vm._v("Submit")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/quiz/js/Vue/Results.vue?vue&type=template&id=066e6478&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/quiz/js/Vue/Results.vue?vue&type=template&id=066e6478& ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "cl-results" }, [
    _vm.tries !== null && _vm.tries.length > 0
      ? _c("div", [
          _c("p", [
            _vm._v(
              "Your current best score for this quiz is " +
                _vm._s(_vm.high) +
                "/" +
                _vm._s(_vm.quiz.points) +
                ". The system retains your best\n      result as your grade for a quiz."
            )
          ]),
          _vm._v(" "),
          _c(
            "table",
            { staticClass: "small center" },
            [
              _vm._m(0),
              _vm._v(" "),
              _vm._l(_vm.tries, function(tried) {
                return _c(
                  "tr",
                  {
                    class:
                      _vm.high > 0 && tried.points === _vm.high ? "best" : ""
                  },
                  [
                    _c("td", [_vm._v(_vm._s(_vm.time(tried.start)))]),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(_vm._s(_vm.elapsed(tried.start, tried.end)))
                    ]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(tried.points))])
                  ]
                )
              }),
              _vm._v(" "),
              _c("caption", [_vm._v("Results for Quiz")])
            ],
            2
          ),
          _vm._v(" "),
          _c("p", [
            _vm._v(
              "If a value is indicated in the Finished? column, the quiz\n    was completed in that amount of time (in minutes and seconds)."
            )
          ])
        ])
      : _vm._e(),
    _vm._v(" "),
    _vm.tries !== null && _vm.tries.length === 0
      ? _c("p", { staticClass: "centerbox primary center" }, [
          _vm._v(
            "You have not yet completed the quiz, yet, so you do not have a score."
          )
        ])
      : _vm._e()
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("th", { staticClass: "center" }, [_vm._v("When Taken")]),
      _vm._v(" "),
      _c("th", [_vm._v("Finished?")]),
      _vm._v(" "),
      _c("th", [_vm._v("Points")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/users/js/Lib/FetcherVue.vue?vue&type=template&id=43b26bcb&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/users/js/Lib/FetcherVue.vue?vue&type=template&id=43b26bcb&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _vm.delayedFetching
        ? _c("div", { staticClass: "fetching" }, [
            _c("p", [_vm._v("Fetching from server...")])
          ])
        : _vm._e(),
      _vm._v(" "),
      (_vm.fetcher === null || !_vm.fetcher.fetching) && !_vm.fetching
        ? _vm._t("default")
        : _vm._e(),
      _vm._v(" "),
      _vm.fetcher !== null && _vm.fetcher.more
        ? _c("p", { staticClass: "more" }, [
            _c(
              "button",
              {
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    return _vm.fetchMore($event)
                  }
                }
              },
              [_vm._v("MORE")]
            )
          ])
        : _vm._e()
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/quiz/js/Console/QuizResultComponent.vue?vue&type=style&index=0&id=d981142c&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader!./node_modules/sass-loader/lib/loader.js?sourceMap!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/quiz/js/Console/QuizResultComponent.vue?vue&type=style&index=0&id=d981142c&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/resolve-url-loader!../../../../../node_modules/sass-loader/lib/loader.js?sourceMap!../../../../../node_modules/vue-loader/lib??vue-loader-options!./QuizResultComponent.vue?vue&type=style&index=0&id=d981142c&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/quiz/js/Console/QuizResultComponent.vue?vue&type=style&index=0&id=d981142c&lang=scss&scoped=true&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("3582be12", content, false, {});
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/resolve-url-loader!../../../../../node_modules/sass-loader/lib/loader.js?sourceMap!../../../../../node_modules/vue-loader/lib??vue-loader-options!./QuizResultComponent.vue?vue&type=style&index=0&id=d981142c&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/quiz/js/Console/QuizResultComponent.vue?vue&type=style&index=0&id=d981142c&lang=scss&scoped=true&", function() {
     var newContent = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/resolve-url-loader!../../../../../node_modules/sass-loader/lib/loader.js?sourceMap!../../../../../node_modules/vue-loader/lib??vue-loader-options!./QuizResultComponent.vue?vue&type=style&index=0&id=d981142c&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/quiz/js/Console/QuizResultComponent.vue?vue&type=style&index=0&id=d981142c&lang=scss&scoped=true&");
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/quiz/js/Console/QuizStatusComponent.vue?vue&type=style&index=0&id=c268df96&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader!./node_modules/sass-loader/lib/loader.js?sourceMap!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/quiz/js/Console/QuizStatusComponent.vue?vue&type=style&index=0&id=c268df96&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/resolve-url-loader!../../../../../node_modules/sass-loader/lib/loader.js?sourceMap!../../../../../node_modules/vue-loader/lib??vue-loader-options!./QuizStatusComponent.vue?vue&type=style&index=0&id=c268df96&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/quiz/js/Console/QuizStatusComponent.vue?vue&type=style&index=0&id=c268df96&lang=scss&scoped=true&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("23cacfc2", content, false, {});
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/resolve-url-loader!../../../../../node_modules/sass-loader/lib/loader.js?sourceMap!../../../../../node_modules/vue-loader/lib??vue-loader-options!./QuizStatusComponent.vue?vue&type=style&index=0&id=c268df96&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/quiz/js/Console/QuizStatusComponent.vue?vue&type=style&index=0&id=c268df96&lang=scss&scoped=true&", function() {
     var newContent = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/resolve-url-loader!../../../../../node_modules/sass-loader/lib/loader.js?sourceMap!../../../../../node_modules/vue-loader/lib??vue-loader-options!./QuizStatusComponent.vue?vue&type=style&index=0&id=c268df96&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/quiz/js/Console/QuizStatusComponent.vue?vue&type=style&index=0&id=c268df96&lang=scss&scoped=true&");
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/users/js/Lib/FetcherVue.vue?vue&type=style&index=0&id=43b26bcb&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader!./node_modules/sass-loader/lib/loader.js?sourceMap!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/users/js/Lib/FetcherVue.vue?vue&type=style&index=0&id=43b26bcb&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/resolve-url-loader!../../../../../node_modules/sass-loader/lib/loader.js?sourceMap!../../../../../node_modules/vue-loader/lib??vue-loader-options!./FetcherVue.vue?vue&type=style&index=0&id=43b26bcb&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/users/js/Lib/FetcherVue.vue?vue&type=style&index=0&id=43b26bcb&lang=scss&scoped=true&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("451ec1a4", content, false, {});
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/resolve-url-loader!../../../../../node_modules/sass-loader/lib/loader.js?sourceMap!../../../../../node_modules/vue-loader/lib??vue-loader-options!./FetcherVue.vue?vue&type=style&index=0&id=43b26bcb&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/users/js/Lib/FetcherVue.vue?vue&type=style&index=0&id=43b26bcb&lang=scss&scoped=true&", function() {
     var newContent = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/resolve-url-loader!../../../../../node_modules/sass-loader/lib/loader.js?sourceMap!../../../../../node_modules/vue-loader/lib??vue-loader-options!./FetcherVue.vue?vue&type=style&index=0&id=43b26bcb&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/users/js/Lib/FetcherVue.vue?vue&type=style&index=0&id=43b26bcb&lang=scss&scoped=true&");
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./vendor/cl/course/js/Console/Members/MembersFetcherComponent.vue":
/*!*************************************************************************!*\
  !*** ./vendor/cl/course/js/Console/Members/MembersFetcherComponent.vue ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MembersFetcherComponent_vue_vue_type_template_id_3eab44d2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MembersFetcherComponent.vue?vue&type=template&id=3eab44d2& */ "./vendor/cl/course/js/Console/Members/MembersFetcherComponent.vue?vue&type=template&id=3eab44d2&");
/* harmony import */ var _MembersFetcherComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MembersFetcherComponent.vue?vue&type=script&lang=js& */ "./vendor/cl/course/js/Console/Members/MembersFetcherComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MembersFetcherComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MembersFetcherComponent_vue_vue_type_template_id_3eab44d2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MembersFetcherComponent_vue_vue_type_template_id_3eab44d2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!module.hot.data) {
      api.createRecord('3eab44d2', component.options)
    } else {
      api.reload('3eab44d2', component.options)
    }
    module.hot.accept(/*! ./MembersFetcherComponent.vue?vue&type=template&id=3eab44d2& */ "./vendor/cl/course/js/Console/Members/MembersFetcherComponent.vue?vue&type=template&id=3eab44d2&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _MembersFetcherComponent_vue_vue_type_template_id_3eab44d2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MembersFetcherComponent.vue?vue&type=template&id=3eab44d2& */ "./vendor/cl/course/js/Console/Members/MembersFetcherComponent.vue?vue&type=template&id=3eab44d2&");
(function () {
      api.rerender('3eab44d2', {
        render: _MembersFetcherComponent_vue_vue_type_template_id_3eab44d2___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _MembersFetcherComponent_vue_vue_type_template_id_3eab44d2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); })
  }
}
component.options.__file = "vendor/cl/course/js/Console/Members/MembersFetcherComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./vendor/cl/course/js/Console/Members/MembersFetcherComponent.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./vendor/cl/course/js/Console/Members/MembersFetcherComponent.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MembersFetcherComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./MembersFetcherComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Console/Members/MembersFetcherComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MembersFetcherComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./vendor/cl/course/js/Console/Members/MembersFetcherComponent.vue?vue&type=template&id=3eab44d2&":
/*!********************************************************************************************************!*\
  !*** ./vendor/cl/course/js/Console/Members/MembersFetcherComponent.vue?vue&type=template&id=3eab44d2& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MembersFetcherComponent_vue_vue_type_template_id_3eab44d2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./MembersFetcherComponent.vue?vue&type=template&id=3eab44d2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Console/Members/MembersFetcherComponent.vue?vue&type=template&id=3eab44d2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MembersFetcherComponent_vue_vue_type_template_id_3eab44d2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MembersFetcherComponent_vue_vue_type_template_id_3eab44d2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./vendor/cl/course/js/Console/Members/StudentsOnly.js":
/*!*************************************************************!*\
  !*** ./vendor/cl/course/js/Console/Members/StudentsOnly.js ***!
  \*************************************************************/
/*! exports provided: StudentsOnly */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentsOnly", function() { return StudentsOnly; });
/**
 * Use of local storage to maintain the state of
 * "students only"
 */
var LOCAL_STORAGE_STUDENTS_ONLY = 'cl_students_only';
var StudentsOnly = function StudentsOnly() {};

StudentsOnly.get = function () {
  var localStorage = window.localStorage;
  var s = localStorage.getItem(LOCAL_STORAGE_STUDENTS_ONLY);
  return s === 'yes';
};

StudentsOnly.set = function (students) {
  var localStorage = window.localStorage;
  localStorage.setItem(LOCAL_STORAGE_STUDENTS_ONLY, students ? 'yes' : 'no');
};

/***/ }),

/***/ "./vendor/cl/course/js/Members/Member.js":
/*!***********************************************!*\
  !*** ./vendor/cl/course/js/Members/Member.js ***!
  \***********************************************/
/*! exports provided: Member */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Member", function() { return Member; });
/* harmony import */ var _users_js_Users_Membership_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../users/js/Users/Membership.js */ "./vendor/cl/users/js/Users/Membership.js");
/**
 * @file Member of a course
 * Attaches to a user Object
 */


var Member = function Member(json) {
  _users_js_Users_Membership_js__WEBPACK_IMPORTED_MODULE_0__["Membership"].call(this);
  var role = 'G';

  if (json !== undefined) {
    this.id = json.id;
    this.semester = json.semester;
    this.section = json.section;
    role = json.role;
  } else {
    this.id = 0; // System membership ID

    this.semester = null; // Semester code

    this.section = null; // Section Id

    role = null; // Membership role
  }

  this.role = function () {
    return role;
  };

  this.setRole = function (role_) {
    role = role_;
  };
};

Member.prototype = Object.create(_users_js_Users_Membership_js__WEBPACK_IMPORTED_MODULE_0__["Membership"].prototype);
Member.prototype.constructor = Member;
/**
 * Get the course section for a member
 * @param store Vuex store
 * @returns {*}
 */

Member.prototype.getSection = function (store) {
  return store.getters['course/section'](this.semester, this.section);
};
/**
 * Get an assignment for a member
 * @param store Vuex store
 * @param assigntag Assignment tag
 */


Member.prototype.getAssignment = function (store, assigntag) {
  var section = this.getSection(store);
  return section.getAssignment(assigntag);
}; // The possible member roles
// Must match values in Member.php


Member.GUEST = 'G'; ///< Guest user visiting the site

Member.USER = 'U'; ///< Standard user from User, don't use for Member

Member.DROPPED = 'D'; ///< User has dropped the course

Member.STUDENT = 'T'; ///< Enrolled student in course

Member.STAFF = 'S'; ///< Any course staff

Member.GRADER = 'R'; ///< Graders

Member.TA = 'E'; ///< Teaching assistant

Member.INSTRUCTOR = 'I'; ///< Course instructor

Member.ADMIN = 'A'; ///< Admin

Member.prototype.getRoles = function () {
  var roles = {};
  roles[Member.GUEST] = {
    name: 'Guest',
    priority: 1
  };
  roles[Member.DROPPED] = {
    name: 'Dropped',
    priority: 2
  };
  roles[Member.USER] = {
    name: 'User',
    priority: 3,
    skip: true
  };
  roles[Member.STUDENT] = {
    name: 'Student',
    priority: 4
  };
  roles[Member.STAFF] = {
    name: 'Staff',
    priority: 5,
    skip: true
  };
  roles[Member.GRADER] = {
    name: 'Grader',
    priority: 6
  };
  roles[Member.TA] = {
    name: 'Teaching Assistant',
    priority: 7
  };
  roles[Member.INSTRUCTOR] = {
    name: 'Instructor',
    priority: 8
  };
  roles[Member.ADMIN] = {
    name: 'Admin',
    priority: 100
  };
  return roles;
};



/***/ }),

/***/ "./vendor/cl/quiz/_quiz.scss":
/*!***********************************!*\
  !*** ./vendor/cl/quiz/_quiz.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/resolve-url-loader!../../../node_modules/sass-loader/lib/loader.js?sourceMap!./_quiz.scss */ "./node_modules/css-loader/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./vendor/cl/quiz/_quiz.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("24bd1c07", content, false, {});
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(/*! !../../../node_modules/css-loader!../../../node_modules/resolve-url-loader!../../../node_modules/sass-loader/lib/loader.js?sourceMap!./_quiz.scss */ "./node_modules/css-loader/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./vendor/cl/quiz/_quiz.scss", function() {
     var newContent = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/resolve-url-loader!../../../node_modules/sass-loader/lib/loader.js?sourceMap!./_quiz.scss */ "./node_modules/css-loader/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./vendor/cl/quiz/_quiz.scss");
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./vendor/cl/quiz/index.js":
/*!*********************************!*\
  !*** ./vendor/cl/quiz/index.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_QuizFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/QuizFactory */ "./vendor/cl/quiz/js/QuizFactory.js");
/* harmony import */ var _js_Console_QuizConsole__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/Console/QuizConsole */ "./vendor/cl/quiz/js/Console/QuizConsole.js");
/**
 * @file
 * The main Quiz entry point
 */

 //
// Create the Quiz components
//

_js_QuizFactory__WEBPACK_IMPORTED_MODULE_0__["QuizFactory"].create(Site.Site); //
// Install the console components
//

if (Site.Site.console !== undefined) {
  _js_Console_QuizConsole__WEBPACK_IMPORTED_MODULE_1__["QuizConsole"].setup(Site.Site.console);
}

/***/ }),

/***/ "./vendor/cl/quiz/js/Console/QuizConsole.js":
/*!**************************************************!*\
  !*** ./vendor/cl/quiz/js/Console/QuizConsole.js ***!
  \**************************************************/
/*! exports provided: QuizConsole */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizConsole", function() { return QuizConsole; });
/* harmony import */ var _QuizStatusComponent_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QuizStatusComponent.vue */ "./vendor/cl/quiz/js/Console/QuizStatusComponent.vue");
/* harmony import */ var _QuizResultComponent_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QuizResultComponent.vue */ "./vendor/cl/quiz/js/Console/QuizResultComponent.vue");
/**
 * @file
 * Quiz system console components
 */


var QuizConsole = function QuizConsole() {};

QuizConsole.setup = function (Console) {
  Console.tables.add({
    title: 'Quiz',
    order: 15,
    api: '/api/quiz/tables'
  });
  Console.components.addRoute({
    route: '/quiz/results/:assigntag',
    component: _QuizStatusComponent_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    props: true
  });
  Console.components.addRoute({
    route: '/quiz/result/:memberid/:assigntag/:quiztag',
    component: _QuizResultComponent_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    props: true
  });
  Console.course.assignmentLink('quiz', 'quizzes', '/quiz/results/:assigntag');
};

/***/ }),

/***/ "./vendor/cl/quiz/js/Console/QuizResultComponent.vue":
/*!***********************************************************!*\
  !*** ./vendor/cl/quiz/js/Console/QuizResultComponent.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _QuizResultComponent_vue_vue_type_template_id_d981142c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QuizResultComponent.vue?vue&type=template&id=d981142c&scoped=true& */ "./vendor/cl/quiz/js/Console/QuizResultComponent.vue?vue&type=template&id=d981142c&scoped=true&");
/* harmony import */ var _QuizResultComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QuizResultComponent.vue?vue&type=script&lang=js& */ "./vendor/cl/quiz/js/Console/QuizResultComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _QuizResultComponent_vue_vue_type_style_index_0_id_d981142c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./QuizResultComponent.vue?vue&type=style&index=0&id=d981142c&lang=scss&scoped=true& */ "./vendor/cl/quiz/js/Console/QuizResultComponent.vue?vue&type=style&index=0&id=d981142c&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _QuizResultComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _QuizResultComponent_vue_vue_type_template_id_d981142c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _QuizResultComponent_vue_vue_type_template_id_d981142c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "d981142c",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!module.hot.data) {
      api.createRecord('d981142c', component.options)
    } else {
      api.reload('d981142c', component.options)
    }
    module.hot.accept(/*! ./QuizResultComponent.vue?vue&type=template&id=d981142c&scoped=true& */ "./vendor/cl/quiz/js/Console/QuizResultComponent.vue?vue&type=template&id=d981142c&scoped=true&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _QuizResultComponent_vue_vue_type_template_id_d981142c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QuizResultComponent.vue?vue&type=template&id=d981142c&scoped=true& */ "./vendor/cl/quiz/js/Console/QuizResultComponent.vue?vue&type=template&id=d981142c&scoped=true&");
(function () {
      api.rerender('d981142c', {
        render: _QuizResultComponent_vue_vue_type_template_id_d981142c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _QuizResultComponent_vue_vue_type_template_id_d981142c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); })
  }
}
component.options.__file = "vendor/cl/quiz/js/Console/QuizResultComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./vendor/cl/quiz/js/Console/QuizResultComponent.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./vendor/cl/quiz/js/Console/QuizResultComponent.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_QuizResultComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./QuizResultComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/quiz/js/Console/QuizResultComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_QuizResultComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./vendor/cl/quiz/js/Console/QuizResultComponent.vue?vue&type=style&index=0&id=d981142c&lang=scss&scoped=true&":
/*!*********************************************************************************************************************!*\
  !*** ./vendor/cl/quiz/js/Console/QuizResultComponent.vue?vue&type=style&index=0&id=d981142c&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_lib_loader_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_QuizResultComponent_vue_vue_type_style_index_0_id_d981142c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/resolve-url-loader!../../../../../node_modules/sass-loader/lib/loader.js?sourceMap!../../../../../node_modules/vue-loader/lib??vue-loader-options!./QuizResultComponent.vue?vue&type=style&index=0&id=d981142c&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/quiz/js/Console/QuizResultComponent.vue?vue&type=style&index=0&id=d981142c&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_lib_loader_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_QuizResultComponent_vue_vue_type_style_index_0_id_d981142c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_lib_loader_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_QuizResultComponent_vue_vue_type_style_index_0_id_d981142c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_lib_loader_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_QuizResultComponent_vue_vue_type_style_index_0_id_d981142c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_lib_loader_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_QuizResultComponent_vue_vue_type_style_index_0_id_d981142c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_lib_loader_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_QuizResultComponent_vue_vue_type_style_index_0_id_d981142c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./vendor/cl/quiz/js/Console/QuizResultComponent.vue?vue&type=template&id=d981142c&scoped=true&":
/*!******************************************************************************************************!*\
  !*** ./vendor/cl/quiz/js/Console/QuizResultComponent.vue?vue&type=template&id=d981142c&scoped=true& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QuizResultComponent_vue_vue_type_template_id_d981142c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./QuizResultComponent.vue?vue&type=template&id=d981142c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/quiz/js/Console/QuizResultComponent.vue?vue&type=template&id=d981142c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QuizResultComponent_vue_vue_type_template_id_d981142c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QuizResultComponent_vue_vue_type_template_id_d981142c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./vendor/cl/quiz/js/Console/QuizStatusComponent.vue":
/*!***********************************************************!*\
  !*** ./vendor/cl/quiz/js/Console/QuizStatusComponent.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _QuizStatusComponent_vue_vue_type_template_id_c268df96_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QuizStatusComponent.vue?vue&type=template&id=c268df96&scoped=true& */ "./vendor/cl/quiz/js/Console/QuizStatusComponent.vue?vue&type=template&id=c268df96&scoped=true&");
/* harmony import */ var _QuizStatusComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QuizStatusComponent.vue?vue&type=script&lang=js& */ "./vendor/cl/quiz/js/Console/QuizStatusComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _QuizStatusComponent_vue_vue_type_style_index_0_id_c268df96_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./QuizStatusComponent.vue?vue&type=style&index=0&id=c268df96&lang=scss&scoped=true& */ "./vendor/cl/quiz/js/Console/QuizStatusComponent.vue?vue&type=style&index=0&id=c268df96&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _QuizStatusComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _QuizStatusComponent_vue_vue_type_template_id_c268df96_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _QuizStatusComponent_vue_vue_type_template_id_c268df96_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "c268df96",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!module.hot.data) {
      api.createRecord('c268df96', component.options)
    } else {
      api.reload('c268df96', component.options)
    }
    module.hot.accept(/*! ./QuizStatusComponent.vue?vue&type=template&id=c268df96&scoped=true& */ "./vendor/cl/quiz/js/Console/QuizStatusComponent.vue?vue&type=template&id=c268df96&scoped=true&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _QuizStatusComponent_vue_vue_type_template_id_c268df96_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QuizStatusComponent.vue?vue&type=template&id=c268df96&scoped=true& */ "./vendor/cl/quiz/js/Console/QuizStatusComponent.vue?vue&type=template&id=c268df96&scoped=true&");
(function () {
      api.rerender('c268df96', {
        render: _QuizStatusComponent_vue_vue_type_template_id_c268df96_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _QuizStatusComponent_vue_vue_type_template_id_c268df96_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); })
  }
}
component.options.__file = "vendor/cl/quiz/js/Console/QuizStatusComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./vendor/cl/quiz/js/Console/QuizStatusComponent.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./vendor/cl/quiz/js/Console/QuizStatusComponent.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_QuizStatusComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./QuizStatusComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/quiz/js/Console/QuizStatusComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_QuizStatusComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./vendor/cl/quiz/js/Console/QuizStatusComponent.vue?vue&type=style&index=0&id=c268df96&lang=scss&scoped=true&":
/*!*********************************************************************************************************************!*\
  !*** ./vendor/cl/quiz/js/Console/QuizStatusComponent.vue?vue&type=style&index=0&id=c268df96&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_lib_loader_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_QuizStatusComponent_vue_vue_type_style_index_0_id_c268df96_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/resolve-url-loader!../../../../../node_modules/sass-loader/lib/loader.js?sourceMap!../../../../../node_modules/vue-loader/lib??vue-loader-options!./QuizStatusComponent.vue?vue&type=style&index=0&id=c268df96&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/quiz/js/Console/QuizStatusComponent.vue?vue&type=style&index=0&id=c268df96&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_lib_loader_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_QuizStatusComponent_vue_vue_type_style_index_0_id_c268df96_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_lib_loader_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_QuizStatusComponent_vue_vue_type_style_index_0_id_c268df96_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_lib_loader_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_QuizStatusComponent_vue_vue_type_style_index_0_id_c268df96_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_lib_loader_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_QuizStatusComponent_vue_vue_type_style_index_0_id_c268df96_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_lib_loader_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_QuizStatusComponent_vue_vue_type_style_index_0_id_c268df96_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./vendor/cl/quiz/js/Console/QuizStatusComponent.vue?vue&type=template&id=c268df96&scoped=true&":
/*!******************************************************************************************************!*\
  !*** ./vendor/cl/quiz/js/Console/QuizStatusComponent.vue?vue&type=template&id=c268df96&scoped=true& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QuizStatusComponent_vue_vue_type_template_id_c268df96_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./QuizStatusComponent.vue?vue&type=template&id=c268df96&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/quiz/js/Console/QuizStatusComponent.vue?vue&type=template&id=c268df96&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QuizStatusComponent_vue_vue_type_template_id_c268df96_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QuizStatusComponent_vue_vue_type_template_id_c268df96_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./vendor/cl/quiz/js/Quiz.js":
/*!***********************************!*\
  !*** ./vendor/cl/quiz/js/Quiz.js ***!
  \***********************************/
/*! exports provided: Quiz */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Quiz", function() { return Quiz; });
/* harmony import */ var _quiz_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_quiz.scss */ "./vendor/cl/quiz/_quiz.scss");
/* harmony import */ var _quiz_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_quiz_scss__WEBPACK_IMPORTED_MODULE_0__);
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
 * @file
 */










var Quiz = function Quiz(site) {
  this.start = function (element) {
    var quiz = JSON.parse(element.textContent);
    var template = "\n<div class=\"cl-quiz\">\n  <component :is=\"page\" :quiz=\"quiz\" :file=\"file\" v-on:answer=\"answer($event)\" v-on:new-state=\"newState($event)\"></component>\n  <previewer v-if=\"quiz.preview !== undefined\" :quiz=\"quiz\" v-on:preview=\"preview($event)\"></previewer>\n</div>";
    new Site.Vue({
      el: element,
      template: template,
      data: function data() {
        return {
          quiz: quiz,
          state: _States__WEBPACK_IMPORTED_MODULE_9__["States"].INITIAL,
          page: 'initial',
          file: null
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
      },
      methods: {
        newState: function newState(state) {
          switch (state) {
            case _States__WEBPACK_IMPORTED_MODULE_9__["States"].START:
              this.start();
              break;

            case _States__WEBPACK_IMPORTED_MODULE_9__["States"].QUESTION:
              if (this.quiz.question < this.quiz.length) {
                this.quiz.question++;
                this.page = 'question';
              }

              break;

            case _States__WEBPACK_IMPORTED_MODULE_9__["States"].RESULTS:
              this.page = 'results';
              this.state = state;
              break;
          }
        },
        start: function start() {
          this.state = _States__WEBPACK_IMPORTED_MODULE_9__["States"].QUESTION;
          this.quiz.question = 1;
          this.page = 'question';
        },
        answer: function answer(data) {
          this.state = _States__WEBPACK_IMPORTED_MODULE_9__["States"].ANSWER;
          this.page = 'answer';
          this.quiz.answer = data.attributes.answer;
        },
        preview: function preview(file) {
          this.file = file;
          this.quiz.question = file;
          this.state = _States__WEBPACK_IMPORTED_MODULE_9__["States"].PREVIEW;
          this.page = 'preview';
        }
      }
    });
  };
};

/***/ }),

/***/ "./vendor/cl/quiz/js/QuizFactory.js":
/*!******************************************!*\
  !*** ./vendor/cl/quiz/js/QuizFactory.js ***!
  \******************************************/
/*! exports provided: QuizFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizFactory", function() { return QuizFactory; });
/* harmony import */ var _Quiz__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Quiz */ "./vendor/cl/quiz/js/Quiz.js");
/**
 * @file
 *
 */

var QuizFactory = function QuizFactory() {};

QuizFactory.create = function (site) {
  var quiz = new _Quiz__WEBPACK_IMPORTED_MODULE_0__["Quiz"](site);
  site.start(function () {
    var element = document.querySelector('div.cl-quiz');

    if (element !== null) {
      quiz.start(element);
    }
  });
};

/***/ }),

/***/ "./vendor/cl/quiz/js/States.js":
/*!*************************************!*\
  !*** ./vendor/cl/quiz/js/States.js ***!
  \*************************************/
/*! exports provided: States */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "States", function() { return States; });
var States = function States() {};
States.INITIAL = 0;
States.START = 1;
States.QUESTION = 2;
States.RESULTS = 3;
States.PREVIEW = 4;

/***/ }),

/***/ "./vendor/cl/quiz/js/Vue/Answer.vue":
/*!******************************************!*\
  !*** ./vendor/cl/quiz/js/Vue/Answer.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Answer_vue_vue_type_template_id_31200b40___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Answer.vue?vue&type=template&id=31200b40& */ "./vendor/cl/quiz/js/Vue/Answer.vue?vue&type=template&id=31200b40&");
/* harmony import */ var _Answer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Answer.vue?vue&type=script&lang=js& */ "./vendor/cl/quiz/js/Vue/Answer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Answer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Answer_vue_vue_type_template_id_31200b40___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Answer_vue_vue_type_template_id_31200b40___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!module.hot.data) {
      api.createRecord('31200b40', component.options)
    } else {
      api.reload('31200b40', component.options)
    }
    module.hot.accept(/*! ./Answer.vue?vue&type=template&id=31200b40& */ "./vendor/cl/quiz/js/Vue/Answer.vue?vue&type=template&id=31200b40&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _Answer_vue_vue_type_template_id_31200b40___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Answer.vue?vue&type=template&id=31200b40& */ "./vendor/cl/quiz/js/Vue/Answer.vue?vue&type=template&id=31200b40&");
(function () {
      api.rerender('31200b40', {
        render: _Answer_vue_vue_type_template_id_31200b40___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _Answer_vue_vue_type_template_id_31200b40___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); })
  }
}
component.options.__file = "vendor/cl/quiz/js/Vue/Answer.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./vendor/cl/quiz/js/Vue/Answer.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./vendor/cl/quiz/js/Vue/Answer.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Answer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Answer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/quiz/js/Vue/Answer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Answer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./vendor/cl/quiz/js/Vue/Answer.vue?vue&type=template&id=31200b40&":
/*!*************************************************************************!*\
  !*** ./vendor/cl/quiz/js/Vue/Answer.vue?vue&type=template&id=31200b40& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Answer_vue_vue_type_template_id_31200b40___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Answer.vue?vue&type=template&id=31200b40& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/quiz/js/Vue/Answer.vue?vue&type=template&id=31200b40&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Answer_vue_vue_type_template_id_31200b40___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Answer_vue_vue_type_template_id_31200b40___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./vendor/cl/quiz/js/Vue/Closed.vue":
/*!******************************************!*\
  !*** ./vendor/cl/quiz/js/Vue/Closed.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Closed_vue_vue_type_template_id_3397150e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Closed.vue?vue&type=template&id=3397150e& */ "./vendor/cl/quiz/js/Vue/Closed.vue?vue&type=template&id=3397150e&");
/* harmony import */ var _Closed_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Closed.vue?vue&type=script&lang=js& */ "./vendor/cl/quiz/js/Vue/Closed.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Closed_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Closed_vue_vue_type_template_id_3397150e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Closed_vue_vue_type_template_id_3397150e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!module.hot.data) {
      api.createRecord('3397150e', component.options)
    } else {
      api.reload('3397150e', component.options)
    }
    module.hot.accept(/*! ./Closed.vue?vue&type=template&id=3397150e& */ "./vendor/cl/quiz/js/Vue/Closed.vue?vue&type=template&id=3397150e&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _Closed_vue_vue_type_template_id_3397150e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Closed.vue?vue&type=template&id=3397150e& */ "./vendor/cl/quiz/js/Vue/Closed.vue?vue&type=template&id=3397150e&");
(function () {
      api.rerender('3397150e', {
        render: _Closed_vue_vue_type_template_id_3397150e___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _Closed_vue_vue_type_template_id_3397150e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); })
  }
}
component.options.__file = "vendor/cl/quiz/js/Vue/Closed.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./vendor/cl/quiz/js/Vue/Closed.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./vendor/cl/quiz/js/Vue/Closed.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Closed_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Closed.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/quiz/js/Vue/Closed.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Closed_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./vendor/cl/quiz/js/Vue/Closed.vue?vue&type=template&id=3397150e&":
/*!*************************************************************************!*\
  !*** ./vendor/cl/quiz/js/Vue/Closed.vue?vue&type=template&id=3397150e& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Closed_vue_vue_type_template_id_3397150e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Closed.vue?vue&type=template&id=3397150e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/quiz/js/Vue/Closed.vue?vue&type=template&id=3397150e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Closed_vue_vue_type_template_id_3397150e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Closed_vue_vue_type_template_id_3397150e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./vendor/cl/quiz/js/Vue/Expired.vue":
/*!*******************************************!*\
  !*** ./vendor/cl/quiz/js/Vue/Expired.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Expired_vue_vue_type_template_id_163d0973___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Expired.vue?vue&type=template&id=163d0973& */ "./vendor/cl/quiz/js/Vue/Expired.vue?vue&type=template&id=163d0973&");
/* harmony import */ var _Expired_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Expired.vue?vue&type=script&lang=js& */ "./vendor/cl/quiz/js/Vue/Expired.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Expired_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Expired_vue_vue_type_template_id_163d0973___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Expired_vue_vue_type_template_id_163d0973___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!module.hot.data) {
      api.createRecord('163d0973', component.options)
    } else {
      api.reload('163d0973', component.options)
    }
    module.hot.accept(/*! ./Expired.vue?vue&type=template&id=163d0973& */ "./vendor/cl/quiz/js/Vue/Expired.vue?vue&type=template&id=163d0973&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _Expired_vue_vue_type_template_id_163d0973___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Expired.vue?vue&type=template&id=163d0973& */ "./vendor/cl/quiz/js/Vue/Expired.vue?vue&type=template&id=163d0973&");
(function () {
      api.rerender('163d0973', {
        render: _Expired_vue_vue_type_template_id_163d0973___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _Expired_vue_vue_type_template_id_163d0973___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); })
  }
}
component.options.__file = "vendor/cl/quiz/js/Vue/Expired.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./vendor/cl/quiz/js/Vue/Expired.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./vendor/cl/quiz/js/Vue/Expired.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Expired_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Expired.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/quiz/js/Vue/Expired.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Expired_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./vendor/cl/quiz/js/Vue/Expired.vue?vue&type=template&id=163d0973&":
/*!**************************************************************************!*\
  !*** ./vendor/cl/quiz/js/Vue/Expired.vue?vue&type=template&id=163d0973& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Expired_vue_vue_type_template_id_163d0973___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Expired.vue?vue&type=template&id=163d0973& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/quiz/js/Vue/Expired.vue?vue&type=template&id=163d0973&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Expired_vue_vue_type_template_id_163d0973___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Expired_vue_vue_type_template_id_163d0973___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./vendor/cl/quiz/js/Vue/Initial.vue":
/*!*******************************************!*\
  !*** ./vendor/cl/quiz/js/Vue/Initial.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Initial_vue_vue_type_template_id_65449212___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Initial.vue?vue&type=template&id=65449212& */ "./vendor/cl/quiz/js/Vue/Initial.vue?vue&type=template&id=65449212&");
/* harmony import */ var _Initial_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Initial.vue?vue&type=script&lang=js& */ "./vendor/cl/quiz/js/Vue/Initial.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Initial_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Initial_vue_vue_type_template_id_65449212___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Initial_vue_vue_type_template_id_65449212___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!module.hot.data) {
      api.createRecord('65449212', component.options)
    } else {
      api.reload('65449212', component.options)
    }
    module.hot.accept(/*! ./Initial.vue?vue&type=template&id=65449212& */ "./vendor/cl/quiz/js/Vue/Initial.vue?vue&type=template&id=65449212&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _Initial_vue_vue_type_template_id_65449212___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Initial.vue?vue&type=template&id=65449212& */ "./vendor/cl/quiz/js/Vue/Initial.vue?vue&type=template&id=65449212&");
(function () {
      api.rerender('65449212', {
        render: _Initial_vue_vue_type_template_id_65449212___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _Initial_vue_vue_type_template_id_65449212___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); })
  }
}
component.options.__file = "vendor/cl/quiz/js/Vue/Initial.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./vendor/cl/quiz/js/Vue/Initial.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./vendor/cl/quiz/js/Vue/Initial.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Initial_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Initial.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/quiz/js/Vue/Initial.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Initial_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./vendor/cl/quiz/js/Vue/Initial.vue?vue&type=template&id=65449212&":
/*!**************************************************************************!*\
  !*** ./vendor/cl/quiz/js/Vue/Initial.vue?vue&type=template&id=65449212& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Initial_vue_vue_type_template_id_65449212___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Initial.vue?vue&type=template&id=65449212& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/quiz/js/Vue/Initial.vue?vue&type=template&id=65449212&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Initial_vue_vue_type_template_id_65449212___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Initial_vue_vue_type_template_id_65449212___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./vendor/cl/quiz/js/Vue/Preview.vue":
/*!*******************************************!*\
  !*** ./vendor/cl/quiz/js/Vue/Preview.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Preview_vue_vue_type_template_id_626b86d4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Preview.vue?vue&type=template&id=626b86d4& */ "./vendor/cl/quiz/js/Vue/Preview.vue?vue&type=template&id=626b86d4&");
/* harmony import */ var _Preview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Preview.vue?vue&type=script&lang=js& */ "./vendor/cl/quiz/js/Vue/Preview.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Preview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Preview_vue_vue_type_template_id_626b86d4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Preview_vue_vue_type_template_id_626b86d4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!module.hot.data) {
      api.createRecord('626b86d4', component.options)
    } else {
      api.reload('626b86d4', component.options)
    }
    module.hot.accept(/*! ./Preview.vue?vue&type=template&id=626b86d4& */ "./vendor/cl/quiz/js/Vue/Preview.vue?vue&type=template&id=626b86d4&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _Preview_vue_vue_type_template_id_626b86d4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Preview.vue?vue&type=template&id=626b86d4& */ "./vendor/cl/quiz/js/Vue/Preview.vue?vue&type=template&id=626b86d4&");
(function () {
      api.rerender('626b86d4', {
        render: _Preview_vue_vue_type_template_id_626b86d4___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _Preview_vue_vue_type_template_id_626b86d4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); })
  }
}
component.options.__file = "vendor/cl/quiz/js/Vue/Preview.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./vendor/cl/quiz/js/Vue/Preview.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./vendor/cl/quiz/js/Vue/Preview.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Preview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Preview.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/quiz/js/Vue/Preview.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Preview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./vendor/cl/quiz/js/Vue/Preview.vue?vue&type=template&id=626b86d4&":
/*!**************************************************************************!*\
  !*** ./vendor/cl/quiz/js/Vue/Preview.vue?vue&type=template&id=626b86d4& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Preview_vue_vue_type_template_id_626b86d4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Preview.vue?vue&type=template&id=626b86d4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/quiz/js/Vue/Preview.vue?vue&type=template&id=626b86d4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Preview_vue_vue_type_template_id_626b86d4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Preview_vue_vue_type_template_id_626b86d4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./vendor/cl/quiz/js/Vue/Previewer.vue":
/*!*********************************************!*\
  !*** ./vendor/cl/quiz/js/Vue/Previewer.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Previewer_vue_vue_type_template_id_baa0b97a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Previewer.vue?vue&type=template&id=baa0b97a& */ "./vendor/cl/quiz/js/Vue/Previewer.vue?vue&type=template&id=baa0b97a&");
/* harmony import */ var _Previewer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Previewer.vue?vue&type=script&lang=js& */ "./vendor/cl/quiz/js/Vue/Previewer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Previewer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Previewer_vue_vue_type_template_id_baa0b97a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Previewer_vue_vue_type_template_id_baa0b97a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!module.hot.data) {
      api.createRecord('baa0b97a', component.options)
    } else {
      api.reload('baa0b97a', component.options)
    }
    module.hot.accept(/*! ./Previewer.vue?vue&type=template&id=baa0b97a& */ "./vendor/cl/quiz/js/Vue/Previewer.vue?vue&type=template&id=baa0b97a&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _Previewer_vue_vue_type_template_id_baa0b97a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Previewer.vue?vue&type=template&id=baa0b97a& */ "./vendor/cl/quiz/js/Vue/Previewer.vue?vue&type=template&id=baa0b97a&");
(function () {
      api.rerender('baa0b97a', {
        render: _Previewer_vue_vue_type_template_id_baa0b97a___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _Previewer_vue_vue_type_template_id_baa0b97a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); })
  }
}
component.options.__file = "vendor/cl/quiz/js/Vue/Previewer.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./vendor/cl/quiz/js/Vue/Previewer.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./vendor/cl/quiz/js/Vue/Previewer.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Previewer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Previewer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/quiz/js/Vue/Previewer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Previewer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./vendor/cl/quiz/js/Vue/Previewer.vue?vue&type=template&id=baa0b97a&":
/*!****************************************************************************!*\
  !*** ./vendor/cl/quiz/js/Vue/Previewer.vue?vue&type=template&id=baa0b97a& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Previewer_vue_vue_type_template_id_baa0b97a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Previewer.vue?vue&type=template&id=baa0b97a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/quiz/js/Vue/Previewer.vue?vue&type=template&id=baa0b97a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Previewer_vue_vue_type_template_id_baa0b97a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Previewer_vue_vue_type_template_id_baa0b97a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./vendor/cl/quiz/js/Vue/Question.vue":
/*!********************************************!*\
  !*** ./vendor/cl/quiz/js/Vue/Question.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Question_vue_vue_type_template_id_54140808___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Question.vue?vue&type=template&id=54140808& */ "./vendor/cl/quiz/js/Vue/Question.vue?vue&type=template&id=54140808&");
/* harmony import */ var _Question_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Question.vue?vue&type=script&lang=js& */ "./vendor/cl/quiz/js/Vue/Question.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Question_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Question_vue_vue_type_template_id_54140808___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Question_vue_vue_type_template_id_54140808___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!module.hot.data) {
      api.createRecord('54140808', component.options)
    } else {
      api.reload('54140808', component.options)
    }
    module.hot.accept(/*! ./Question.vue?vue&type=template&id=54140808& */ "./vendor/cl/quiz/js/Vue/Question.vue?vue&type=template&id=54140808&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _Question_vue_vue_type_template_id_54140808___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Question.vue?vue&type=template&id=54140808& */ "./vendor/cl/quiz/js/Vue/Question.vue?vue&type=template&id=54140808&");
(function () {
      api.rerender('54140808', {
        render: _Question_vue_vue_type_template_id_54140808___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _Question_vue_vue_type_template_id_54140808___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); })
  }
}
component.options.__file = "vendor/cl/quiz/js/Vue/Question.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./vendor/cl/quiz/js/Vue/Question.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./vendor/cl/quiz/js/Vue/Question.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Question_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Question.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/quiz/js/Vue/Question.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Question_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./vendor/cl/quiz/js/Vue/Question.vue?vue&type=template&id=54140808&":
/*!***************************************************************************!*\
  !*** ./vendor/cl/quiz/js/Vue/Question.vue?vue&type=template&id=54140808& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Question_vue_vue_type_template_id_54140808___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Question.vue?vue&type=template&id=54140808& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/quiz/js/Vue/Question.vue?vue&type=template&id=54140808&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Question_vue_vue_type_template_id_54140808___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Question_vue_vue_type_template_id_54140808___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./vendor/cl/quiz/js/Vue/Results.vue":
/*!*******************************************!*\
  !*** ./vendor/cl/quiz/js/Vue/Results.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Results_vue_vue_type_template_id_066e6478___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Results.vue?vue&type=template&id=066e6478& */ "./vendor/cl/quiz/js/Vue/Results.vue?vue&type=template&id=066e6478&");
/* harmony import */ var _Results_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Results.vue?vue&type=script&lang=js& */ "./vendor/cl/quiz/js/Vue/Results.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Results_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Results_vue_vue_type_template_id_066e6478___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Results_vue_vue_type_template_id_066e6478___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!module.hot.data) {
      api.createRecord('066e6478', component.options)
    } else {
      api.reload('066e6478', component.options)
    }
    module.hot.accept(/*! ./Results.vue?vue&type=template&id=066e6478& */ "./vendor/cl/quiz/js/Vue/Results.vue?vue&type=template&id=066e6478&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _Results_vue_vue_type_template_id_066e6478___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Results.vue?vue&type=template&id=066e6478& */ "./vendor/cl/quiz/js/Vue/Results.vue?vue&type=template&id=066e6478&");
(function () {
      api.rerender('066e6478', {
        render: _Results_vue_vue_type_template_id_066e6478___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _Results_vue_vue_type_template_id_066e6478___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); })
  }
}
component.options.__file = "vendor/cl/quiz/js/Vue/Results.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./vendor/cl/quiz/js/Vue/Results.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./vendor/cl/quiz/js/Vue/Results.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Results_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Results.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/quiz/js/Vue/Results.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Results_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./vendor/cl/quiz/js/Vue/Results.vue?vue&type=template&id=066e6478&":
/*!**************************************************************************!*\
  !*** ./vendor/cl/quiz/js/Vue/Results.vue?vue&type=template&id=066e6478& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Results_vue_vue_type_template_id_066e6478___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Results.vue?vue&type=template&id=066e6478& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/quiz/js/Vue/Results.vue?vue&type=template&id=066e6478&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Results_vue_vue_type_template_id_066e6478___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Results_vue_vue_type_template_id_066e6478___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./vendor/cl/site/js/TimeFormatter.js":
/*!********************************************!*\
  !*** ./vendor/cl/site/js/TimeFormatter.js ***!
  \********************************************/
/*! exports provided: TimeFormatter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeFormatter", function() { return TimeFormatter; });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/*
 * Utility functions to format times.
 */

/**
 * Utility functions to format times.
 * @constructor
 */

var TimeFormatter = function TimeFormatter() {};
/**
 * Convert a time to the format we display
 * Time is relative to a specified time (or current time)
 * @param {moment} time Time to convert (moment)
 * @param {moment} currentTime Current time (moment)
 * @param {string} format Moment format
 * @returns {string}
 */

TimeFormatter.relative = function (time, currentTime, format) {
  if (currentTime === undefined || currentTime === null) {
    currentTime = moment__WEBPACK_IMPORTED_MODULE_0___default.a.now();
  }

  var elapsed = currentTime.diff(time);

  if (elapsed < 60000) {
    return '<1 min ago';
  }

  if (elapsed < 3600000) {
    // Within an hour ago
    var mins = Math.floor(elapsed / 60000);
    return '' + mins + ' min ago';
  }
  /*
   * Determine if it was today
   */


  if (time.date() === currentTime.date() && time.month() === currentTime.month() && time.year() === currentTime.year()) {
    var hour = time.hour();
    var am = 'am';

    if (hour === 0) {
      hour = 12;
    } else if (hour === 12) {
      am = 'pm';
    } else if (hour > 12) {
      am = 'pm';
      hour -= 12;
    }

    var minute = time.minute();

    if (minute < 10) {
      minute = '0' + minute;
    }

    return "Today at " + hour + ':' + minute + am;
  }

  if (format === undefined) {
    format = 'M-DD-YYYY h:mm:ssa';
  }

  return time.format(format);
};
/**
 * Display a Unix time as an absolute time.
 * @param {int} time Unix time (seconds)
 * @param {string} format Moment format or 'long' or 'short' for days inclusion.
 */


TimeFormatter.absoluteUNIX = function (time, format) {
  var t = moment__WEBPACK_IMPORTED_MODULE_0___default.a.unix(time);

  if (format === undefined) {
    format = 'M-DD-YYYY h:mm:ssa';
  } else if (format === 'short') {
    format = 'ddd, M-DD-YYYY h:mm:ssa';
  } else if (format === 'long') {
    format = 'dddd, M-DD-YYYY h:mm:ssa';
  } else if (format === 'long-date') {
    format = 'dddd, M-DD-YYYY';
  } else if (format === 'short-time') {
    format = 'h:mma';
  }

  return t.format(format);
};
/**
 * Display a Unix time as a relative time.
 * @param {int} time Unix time (seconds)
 * @param {int} currentTime Current time as UNIX time (optional)
 * @param {string} format Moment format or 'long' or 'short' for days inclusion.
 */


TimeFormatter.relativeUNIX = function (time, currentTime, format) {
  var t = moment__WEBPACK_IMPORTED_MODULE_0___default.a.unix(time);
  var c = currentTime !== null ? moment__WEBPACK_IMPORTED_MODULE_0___default.a.unix(currentTime) : moment__WEBPACK_IMPORTED_MODULE_0___default()();
  return this.relative(t, c, format);
};

/***/ }),

/***/ "./vendor/cl/users/js/Lib/FetcherVue.vue":
/*!***********************************************!*\
  !*** ./vendor/cl/users/js/Lib/FetcherVue.vue ***!
  \***********************************************/
/*! exports provided: default, Fetcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FetcherVue_vue_vue_type_template_id_43b26bcb_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FetcherVue.vue?vue&type=template&id=43b26bcb&scoped=true& */ "./vendor/cl/users/js/Lib/FetcherVue.vue?vue&type=template&id=43b26bcb&scoped=true&");
/* harmony import */ var _FetcherVue_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FetcherVue.vue?vue&type=script&lang=js& */ "./vendor/cl/users/js/Lib/FetcherVue.vue?vue&type=script&lang=js&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Fetcher", function() { return _FetcherVue_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["Fetcher"]; });

/* harmony import */ var _FetcherVue_vue_vue_type_style_index_0_id_43b26bcb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FetcherVue.vue?vue&type=style&index=0&id=43b26bcb&lang=scss&scoped=true& */ "./vendor/cl/users/js/Lib/FetcherVue.vue?vue&type=style&index=0&id=43b26bcb&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _FetcherVue_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FetcherVue_vue_vue_type_template_id_43b26bcb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FetcherVue_vue_vue_type_template_id_43b26bcb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "43b26bcb",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!module.hot.data) {
      api.createRecord('43b26bcb', component.options)
    } else {
      api.reload('43b26bcb', component.options)
    }
    module.hot.accept(/*! ./FetcherVue.vue?vue&type=template&id=43b26bcb&scoped=true& */ "./vendor/cl/users/js/Lib/FetcherVue.vue?vue&type=template&id=43b26bcb&scoped=true&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _FetcherVue_vue_vue_type_template_id_43b26bcb_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FetcherVue.vue?vue&type=template&id=43b26bcb&scoped=true& */ "./vendor/cl/users/js/Lib/FetcherVue.vue?vue&type=template&id=43b26bcb&scoped=true&");
(function () {
      api.rerender('43b26bcb', {
        render: _FetcherVue_vue_vue_type_template_id_43b26bcb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _FetcherVue_vue_vue_type_template_id_43b26bcb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); })
  }
}
component.options.__file = "vendor/cl/users/js/Lib/FetcherVue.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./vendor/cl/users/js/Lib/FetcherVue.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./vendor/cl/users/js/Lib/FetcherVue.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default, Fetcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FetcherVue_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./FetcherVue.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/users/js/Lib/FetcherVue.vue?vue&type=script&lang=js&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Fetcher", function() { return _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FetcherVue_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["Fetcher"]; });

 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FetcherVue_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./vendor/cl/users/js/Lib/FetcherVue.vue?vue&type=style&index=0&id=43b26bcb&lang=scss&scoped=true&":
/*!*********************************************************************************************************!*\
  !*** ./vendor/cl/users/js/Lib/FetcherVue.vue?vue&type=style&index=0&id=43b26bcb&lang=scss&scoped=true& ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_lib_loader_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_FetcherVue_vue_vue_type_style_index_0_id_43b26bcb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/resolve-url-loader!../../../../../node_modules/sass-loader/lib/loader.js?sourceMap!../../../../../node_modules/vue-loader/lib??vue-loader-options!./FetcherVue.vue?vue&type=style&index=0&id=43b26bcb&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/users/js/Lib/FetcherVue.vue?vue&type=style&index=0&id=43b26bcb&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_lib_loader_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_FetcherVue_vue_vue_type_style_index_0_id_43b26bcb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_lib_loader_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_FetcherVue_vue_vue_type_style_index_0_id_43b26bcb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_lib_loader_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_FetcherVue_vue_vue_type_style_index_0_id_43b26bcb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_lib_loader_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_FetcherVue_vue_vue_type_style_index_0_id_43b26bcb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_lib_loader_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_FetcherVue_vue_vue_type_style_index_0_id_43b26bcb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./vendor/cl/users/js/Lib/FetcherVue.vue?vue&type=template&id=43b26bcb&scoped=true&":
/*!******************************************************************************************!*\
  !*** ./vendor/cl/users/js/Lib/FetcherVue.vue?vue&type=template&id=43b26bcb&scoped=true& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FetcherVue_vue_vue_type_template_id_43b26bcb_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./FetcherVue.vue?vue&type=template&id=43b26bcb&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/users/js/Lib/FetcherVue.vue?vue&type=template&id=43b26bcb&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FetcherVue_vue_vue_type_template_id_43b26bcb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FetcherVue_vue_vue_type_template_id_43b26bcb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./vendor/cl/users/js/Users/Membership.js":
/*!************************************************!*\
  !*** ./vendor/cl/users/js/Users/Membership.js ***!
  \************************************************/
/*! exports provided: Membership */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Membership", function() { return Membership; });
/**
 * @file
 * A membership associated with a user.
 *
 * This is a base object that will be inherited by
 * actual membership objects.
 */
var Membership = function Membership() {
  /// The User object for this membership
  this.user = null;
};



/***/ })

},[["./vendor/cl/quiz/index.js","runtime","vendor"]]]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9bbmFtZV0vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL1tuYW1lXS92ZW5kb3IvY2wvY291cnNlL2pzL0NvbnNvbGUvTWVtYmVycy9NZW1iZXJzRmV0Y2hlckNvbXBvbmVudC52dWUiLCJ3ZWJwYWNrOi8vW25hbWVdL3ZlbmRvci9jbC9xdWl6L2pzL0NvbnNvbGUvUXVpelJlc3VsdENvbXBvbmVudC52dWUiLCJ3ZWJwYWNrOi8vW25hbWVdL3ZlbmRvci9jbC9xdWl6L2pzL0NvbnNvbGUvUXVpelN0YXR1c0NvbXBvbmVudC52dWUiLCJ3ZWJwYWNrOi8vW25hbWVdL3ZlbmRvci9jbC9xdWl6L2pzL1Z1ZS9BbnN3ZXIudnVlIiwid2VicGFjazovL1tuYW1lXS92ZW5kb3IvY2wvcXVpei9qcy9WdWUvQ2xvc2VkLnZ1ZSIsIndlYnBhY2s6Ly9bbmFtZV0vdmVuZG9yL2NsL3F1aXovanMvVnVlL0V4cGlyZWQudnVlIiwid2VicGFjazovL1tuYW1lXS92ZW5kb3IvY2wvcXVpei9qcy9WdWUvSW5pdGlhbC52dWUiLCJ3ZWJwYWNrOi8vW25hbWVdL3ZlbmRvci9jbC9xdWl6L2pzL1Z1ZS9QcmV2aWV3LnZ1ZSIsIndlYnBhY2s6Ly9bbmFtZV0vdmVuZG9yL2NsL3F1aXovanMvVnVlL1ByZXZpZXdlci52dWUiLCJ3ZWJwYWNrOi8vW25hbWVdL3ZlbmRvci9jbC9xdWl6L2pzL1Z1ZS9RdWVzdGlvbi52dWUiLCJ3ZWJwYWNrOi8vW25hbWVdL3ZlbmRvci9jbC9xdWl6L2pzL1Z1ZS9SZXN1bHRzLnZ1ZSIsIndlYnBhY2s6Ly9bbmFtZV0vdmVuZG9yL2NsL3VzZXJzL2pzL0xpYi9GZXRjaGVyVnVlLnZ1ZSIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvcXVpei9fcXVpei5zY3NzIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9xdWl6L2pzL0NvbnNvbGUvUXVpelJlc3VsdENvbXBvbmVudC52dWU/NDg0ZSIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvcXVpei9qcy9Db25zb2xlL1F1aXpTdGF0dXNDb21wb25lbnQudnVlP2ZhMWEiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3VzZXJzL2pzL0xpYi9GZXRjaGVyVnVlLnZ1ZT84ZTgwIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlIHN5bmMgXlxcLlxcLy4qJCIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY291cnNlL2pzL0NvbnNvbGUvTWVtYmVycy9NZW1iZXJzRmV0Y2hlckNvbXBvbmVudC52dWU/YTc3NyIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvcXVpei9qcy9Db25zb2xlL1F1aXpSZXN1bHRDb21wb25lbnQudnVlP2U0ZjMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3F1aXovanMvQ29uc29sZS9RdWl6U3RhdHVzQ29tcG9uZW50LnZ1ZT9jNTJhIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9xdWl6L2pzL1Z1ZS9BbnN3ZXIudnVlPzhiZDMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3F1aXovanMvVnVlL0Nsb3NlZC52dWU/ODg3OSIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvcXVpei9qcy9WdWUvRXhwaXJlZC52dWU/YWU0YyIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvcXVpei9qcy9WdWUvSW5pdGlhbC52dWU/N2ZkZCIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvcXVpei9qcy9WdWUvUHJldmlldy52dWU/ZTMzNCIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvcXVpei9qcy9WdWUvUHJldmlld2VyLnZ1ZT83MmZlIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9xdWl6L2pzL1Z1ZS9RdWVzdGlvbi52dWU/NmU5ZiIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvcXVpei9qcy9WdWUvUmVzdWx0cy52dWU/NGMxYiIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvdXNlcnMvanMvTGliL0ZldGNoZXJWdWUudnVlP2U3MjUiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3F1aXovanMvQ29uc29sZS9RdWl6UmVzdWx0Q29tcG9uZW50LnZ1ZT85Nzc4Iiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9xdWl6L2pzL0NvbnNvbGUvUXVpelN0YXR1c0NvbXBvbmVudC52dWU/ZWUzNCIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvdXNlcnMvanMvTGliL0ZldGNoZXJWdWUudnVlPzdhMDAiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9Db25zb2xlL01lbWJlcnMvTWVtYmVyc0ZldGNoZXJDb21wb25lbnQudnVlIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvQ29uc29sZS9NZW1iZXJzL01lbWJlcnNGZXRjaGVyQ29tcG9uZW50LnZ1ZT84Y2M1Iiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvQ29uc29sZS9NZW1iZXJzL01lbWJlcnNGZXRjaGVyQ29tcG9uZW50LnZ1ZT9mMmFmIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvQ29uc29sZS9NZW1iZXJzL1N0dWRlbnRzT25seS5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY291cnNlL2pzL01lbWJlcnMvTWVtYmVyLmpzIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9xdWl6L19xdWl6LnNjc3M/ZTdhMyIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvcXVpei9pbmRleC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvcXVpei9qcy9Db25zb2xlL1F1aXpDb25zb2xlLmpzIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9xdWl6L2pzL0NvbnNvbGUvUXVpelJlc3VsdENvbXBvbmVudC52dWUiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3F1aXovanMvQ29uc29sZS9RdWl6UmVzdWx0Q29tcG9uZW50LnZ1ZT85MWQ3Iiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9xdWl6L2pzL0NvbnNvbGUvUXVpelJlc3VsdENvbXBvbmVudC52dWU/NDRjNiIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvcXVpei9qcy9Db25zb2xlL1F1aXpSZXN1bHRDb21wb25lbnQudnVlPzM0NTEiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3F1aXovanMvQ29uc29sZS9RdWl6U3RhdHVzQ29tcG9uZW50LnZ1ZSIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvcXVpei9qcy9Db25zb2xlL1F1aXpTdGF0dXNDb21wb25lbnQudnVlPzk4MTIiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3F1aXovanMvQ29uc29sZS9RdWl6U3RhdHVzQ29tcG9uZW50LnZ1ZT9lMjlhIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9xdWl6L2pzL0NvbnNvbGUvUXVpelN0YXR1c0NvbXBvbmVudC52dWU/YTM0NCIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvcXVpei9qcy9RdWl6LmpzIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9xdWl6L2pzL1F1aXpGYWN0b3J5LmpzIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9xdWl6L2pzL1N0YXRlcy5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvcXVpei9qcy9WdWUvQW5zd2VyLnZ1ZSIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvcXVpei9qcy9WdWUvQW5zd2VyLnZ1ZT9iMGQxIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9xdWl6L2pzL1Z1ZS9BbnN3ZXIudnVlP2VmY2QiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3F1aXovanMvVnVlL0Nsb3NlZC52dWUiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3F1aXovanMvVnVlL0Nsb3NlZC52dWU/MmYyMCIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvcXVpei9qcy9WdWUvQ2xvc2VkLnZ1ZT9mNDA0Iiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9xdWl6L2pzL1Z1ZS9FeHBpcmVkLnZ1ZSIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvcXVpei9qcy9WdWUvRXhwaXJlZC52dWU/ZmZmYiIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvcXVpei9qcy9WdWUvRXhwaXJlZC52dWU/ZTNiZiIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvcXVpei9qcy9WdWUvSW5pdGlhbC52dWUiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3F1aXovanMvVnVlL0luaXRpYWwudnVlPzc2YTkiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3F1aXovanMvVnVlL0luaXRpYWwudnVlPzEwMzEiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3F1aXovanMvVnVlL1ByZXZpZXcudnVlIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9xdWl6L2pzL1Z1ZS9QcmV2aWV3LnZ1ZT85MGFjIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9xdWl6L2pzL1Z1ZS9QcmV2aWV3LnZ1ZT9iNmQ1Iiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9xdWl6L2pzL1Z1ZS9QcmV2aWV3ZXIudnVlIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9xdWl6L2pzL1Z1ZS9QcmV2aWV3ZXIudnVlPzY0MjgiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3F1aXovanMvVnVlL1ByZXZpZXdlci52dWU/NmQxMyIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvcXVpei9qcy9WdWUvUXVlc3Rpb24udnVlIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9xdWl6L2pzL1Z1ZS9RdWVzdGlvbi52dWU/OTc2NSIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvcXVpei9qcy9WdWUvUXVlc3Rpb24udnVlP2M4OTciLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3F1aXovanMvVnVlL1Jlc3VsdHMudnVlIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9xdWl6L2pzL1Z1ZS9SZXN1bHRzLnZ1ZT84YzdhIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9xdWl6L2pzL1Z1ZS9SZXN1bHRzLnZ1ZT9mNzIzIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9zaXRlL2pzL1RpbWVGb3JtYXR0ZXIuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3VzZXJzL2pzL0xpYi9GZXRjaGVyVnVlLnZ1ZSIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvdXNlcnMvanMvTGliL0ZldGNoZXJWdWUudnVlPzcyNjgiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3VzZXJzL2pzL0xpYi9GZXRjaGVyVnVlLnZ1ZT80OTdiIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC91c2Vycy9qcy9MaWIvRmV0Y2hlclZ1ZS52dWU/MmYxMiIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvdXNlcnMvanMvVXNlcnMvTWVtYmVyc2hpcC5qcyJdLCJuYW1lcyI6WyJMT0NBTF9TVE9SQUdFX1NUVURFTlRTX09OTFkiLCJTdHVkZW50c09ubHkiLCJnZXQiLCJsb2NhbFN0b3JhZ2UiLCJ3aW5kb3ciLCJzIiwiZ2V0SXRlbSIsInNldCIsInN0dWRlbnRzIiwic2V0SXRlbSIsIk1lbWJlciIsImpzb24iLCJNZW1iZXJzaGlwIiwiY2FsbCIsInJvbGUiLCJ1bmRlZmluZWQiLCJpZCIsInNlbWVzdGVyIiwic2VjdGlvbiIsInNldFJvbGUiLCJyb2xlXyIsInByb3RvdHlwZSIsIk9iamVjdCIsImNyZWF0ZSIsImNvbnN0cnVjdG9yIiwiZ2V0U2VjdGlvbiIsInN0b3JlIiwiZ2V0dGVycyIsImdldEFzc2lnbm1lbnQiLCJhc3NpZ250YWciLCJHVUVTVCIsIlVTRVIiLCJEUk9QUEVEIiwiU1RVREVOVCIsIlNUQUZGIiwiR1JBREVSIiwiVEEiLCJJTlNUUlVDVE9SIiwiQURNSU4iLCJnZXRSb2xlcyIsInJvbGVzIiwibmFtZSIsInByaW9yaXR5Iiwic2tpcCIsIlNpdGUiLCJjb25zb2xlIiwiUXVpekNvbnNvbGUiLCJzZXR1cCIsIkNvbnNvbGUiLCJ0YWJsZXMiLCJhZGQiLCJ0aXRsZSIsIm9yZGVyIiwiYXBpIiwiY29tcG9uZW50cyIsImFkZFJvdXRlIiwicm91dGUiLCJjb21wb25lbnQiLCJwcm9wcyIsImNvdXJzZSIsImFzc2lnbm1lbnRMaW5rIiwiUXVpeiIsInNpdGUiLCJzdGFydCIsImVsZW1lbnQiLCJxdWl6IiwiSlNPTiIsInBhcnNlIiwidGV4dENvbnRlbnQiLCJ0ZW1wbGF0ZSIsIlZ1ZSIsImVsIiwiZGF0YSIsInN0YXRlIiwiSU5JVElBTCIsInBhZ2UiLCJmaWxlIiwiUHJldmlld1Z1ZSIsIm1vdW50ZWQiLCJleHBpcmVkIiwiY2xvc2VkIiwibWV0aG9kcyIsIm5ld1N0YXRlIiwiU1RBUlQiLCJRVUVTVElPTiIsInF1ZXN0aW9uIiwibGVuZ3RoIiwiUkVTVUxUUyIsImFuc3dlciIsIkFOU1dFUiIsImF0dHJpYnV0ZXMiLCJwcmV2aWV3IiwiUFJFVklFVyIsIlF1aXpGYWN0b3J5IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiU3RhdGVzIiwiVGltZUZvcm1hdHRlciIsInJlbGF0aXZlIiwidGltZSIsImN1cnJlbnRUaW1lIiwiZm9ybWF0Iiwibm93IiwiZWxhcHNlZCIsImRpZmYiLCJtaW5zIiwiTWF0aCIsImZsb29yIiwiZGF0ZSIsIm1vbnRoIiwieWVhciIsImhvdXIiLCJhbSIsIm1pbnV0ZSIsImFic29sdXRlVU5JWCIs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QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksSUFBVTtBQUNkLFlBQVksbUJBQU8sQ0FBQyx3R0FBeUc7QUFDN0gsY0FBYyxtQkFBTyxDQUFDLCtDQUFLO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxzQkFBc0IsdUpBQTZELEVBQUU7QUFBQTtBQUNyRjtBQUNBLGdCQUFnQixpR0FBTTtBQUN0Qix5QkFBeUIsMEdBQWU7QUFDeEMsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdkNmO0FBQUE7QUFBQTtBQUFBO0FBQW9NLENBQWdCLG9QQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQXhOO0FBQUE7QUFBQTtBQUFBO0FBQTJjLENBQWdCLGdjQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQS9kO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTs7Ozs7OztBQVFBLElBQUl6RixVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFXO0FBRXhCO0FBQ0EsT0FBSzJHLElBQUwsR0FBWSxJQUFaO0FBQ0gsQ0FKRCIsImZpbGUiOiJxdWl6LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiUXVpelwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJRdWl6XCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCI8dGVtcGxhdGU+XHJcbiAgPGRpdj5cclxuICAgICAgPGxhYmVsIHN0eWxlPVwiZGlzcGxheTpub25lXCIgcmVmPVwic3R1ZGVudHMtb25seVwiID48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgdi1tb2RlbD1cInN0dWRlbnRzXCIgQGNoYW5nZT1cInN0dWRlbnRzT25seUNoYW5nZWRcIj4gU3R1ZGVudHMgT25seTwvbGFiZWw+XHJcbiAgICAgIDxmZXRjaGVyIDpmZXRjaGVyPVwiZmV0Y2hlclwiIDpmZXRjaGluZz1cImZldGNoaW5nXCI+XHJcbiAgICAgICAgPHNsb3QgOnVzZXJzPVwidXNlcnNcIiA6c3R1ZGVudHM9XCJzdHVkZW50c1wiPjwvc2xvdD5cclxuICAgICAgICA8cCB2LWlmPVwidXNlcnMubGVuZ3RoID09IDBcIiBjbGFzcz1cImNlbnRlcmJveCBjb21wIGNlbnRlclwiPlxyXG4gICAgICAgICAgVGhlcmUgYXJlIGN1cnJlbnRseSBubyBtZW1iZXJzIGVucm9sbGVkIGluIHRoaXMgc2VjdGlvbi48L3A+XHJcbiAgICAgIDwvZmV0Y2hlcj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgICBpbXBvcnQge21hcFN0YXRlfSBmcm9tICd2dWV4JztcclxuICAgIGltcG9ydCBGZXRjaGVyVnVlIGZyb20gJ3VzZXJzLWNsL2pzL0xpYi9GZXRjaGVyVnVlLnZ1ZSc7XHJcbiAgICBpbXBvcnQge01lbWJlcn0gZnJvbSAnLi4vLi4vTWVtYmVycy9NZW1iZXInXHJcbiAgICBpbXBvcnQge1N0dWRlbnRzT25seX0gZnJvbSAnLi9TdHVkZW50c09ubHknO1xyXG5cclxuICAgIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgICAvLyBJZiB0aGUgZmV0Y2hpbmcgdmFsdWUgaXQgdHJ1ZSwgdGhlIHVzaW5nIGNsaWVudFxyXG4gICAgICAgIC8vIGlzIGZldGNoaW5nIG1vcmUgdGhhbiBqdXN0IHRoZSBtZW1iZXJzaGlwIGFuZCB3ZSB3aWxsXHJcbiAgICAgICAgLy8gd2FpdCBmb3IgdGhhdCBhcyB3ZWxsLlxyXG4gICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgIGZldGNoaW5nOiB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0YTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBzdHVkZW50czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBzdHVkZW50c0VsZW1lbnQ6IG51bGxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWV0aG9kczoge1xyXG4gICAgICAgICAgICBmZXRjaE1vcmUoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnbWVtYmVycy9tb3JlJyk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBBZGQgXCJTdHVkZW50cyBPbmx5XCIgdG8gdGhlIG1lbnUgYmFyXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBhZGRTdHVkZW50c09ubHkoKSB7XHJcbiAgICAgICAgICAgIFx0dGhpcy5zdHVkZW50cyA9IFN0dWRlbnRzT25seS5nZXQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgZWxlbWVudCA9IHRoaXMuJHJlZnNbJ3N0dWRlbnRzLW9ubHknXTtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbGVtZW50KTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgZXh0cmEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYuY2wtc2VjdGlvbi1jb21wb25lbnQgc3Bhbi5leHRyYScpO1xyXG4gICAgICAgICAgICAgICAgZXh0cmEuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJztcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0dWRlbnRzRWxlbWVudCA9IGVsZW1lbnQ7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN0dWRlbnRzT25seUNoYW5nZWQoKSB7XHJcbiAgICAgICAgICAgIFx0U3R1ZGVudHNPbmx5LnNldCh0aGlzLnN0dWRlbnRzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29tcHV0ZWQ6IG1hcFN0YXRlKHtcclxuICAgICAgICAgICAgdXNlcnMoc3RhdGUpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0dWRlbnRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlLm1lbWJlcnMudXNlcnMuZmlsdGVyKCh1c2VyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB1c2VyLnJvbGUoKSA9PT0gTWVtYmVyLlNUVURFTlRcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlLm1lbWJlcnMudXNlcnM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGZldGNoZXI6IHN0YXRlID0+IHN0YXRlLm1lbWJlcnMuZmV0Y2hlclxyXG5cclxuICAgICAgICB9KSxcclxuICAgICAgICBjb21wb25lbnRzOiB7XHJcbiAgICAgICAgICAgICdmZXRjaGVyJzogRmV0Y2hlclZ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbW91bnRlZCgpIHtcclxuXHQgICAgICAgIHRoaXMuc3R1ZGVudHMgPSBTdHVkZW50c09ubHkuZ2V0KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IG1lbWJlciA9IHRoaXMuJHN0b3JlLnN0YXRlLnVzZXIudXNlci5tZW1iZXI7XHJcbiAgICAgICAgICAgIGxldCBxdWVyeSA9IHtcclxuICAgICAgICAgICAgICAgIHNlbWVzdGVyOiBtZW1iZXIuc2VtZXN0ZXIsXHJcbiAgICAgICAgICAgICAgICBzZWN0aW9uOiBtZW1iZXIuc2VjdGlvblxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB0aGlzLiRzdG9yZS5jb21taXQoJ21lbWJlcnMvcXVlcnknLCBxdWVyeSk7XHJcbiAgICAgICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdtZW1iZXJzL2ZldGNoJyk7XHJcblxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWRkU3R1ZGVudHNPbmx5KCk7XHJcbiAgICAgICAgICAgIH0sIDEwMCk7XHJcblxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYmVmb3JlRGVzdHJveSgpIHtcclxuICAgICAgICAgICAgdGhpcy5zdHVkZW50c0VsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLnN0dWRlbnRzRWxlbWVudCk7XHJcbiAgICAgICAgICAgIGxldCBleHRyYXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdkaXYuY2wtc2VjdGlvbi1jb21wb25lbnQgc3Bhbi5leHRyYScpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbjwvc2NyaXB0PlxyXG4iLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJmdWxsXCI+XHJcbiAgICAgIDxmZXRjaGVyIDpmZXRjaGluZz1cImZldGNoaW5nXCI+XHJcbiAgICAgICAgPGRpdiB2LWlmPVwiIWZldGNoaW5nXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2wtYWJvdXRcIj5cclxuICAgICAgICAgICAgPHA+PHNwYW4+Q291cnNlIE1lbWJlcjogPC9zcGFuPjxzcGFuPnt7dXNlci5uYW1lfX08L3NwYW4+PC9wPlxyXG4gICAgICAgICAgICA8cD48c3Bhbj5Bc3NpZ25tZW50OiA8L3NwYW4+PHNwYW4+e3thc3NpZ25tZW50Lm5hbWV9fTwvc3Bhbj48L3A+XHJcbiAgICAgICAgICAgIDxwPjxzcGFuPlF1aXo6IDwvc3Bhbj48c3Bhbj57e3F1aXp0YWd9fTwvc3Bhbj48L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDx0YWJsZSBjbGFzcz1cInNtYWxsIGNlbnRlclwiPlxyXG4gICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgPHRoIGNsYXNzPVwiY2VudGVyXCI+V2hlbiBUYWtlbjwvdGg+XHJcbiAgICAgICAgICAgICAgPHRoPkZpbmlzaGVkPzwvdGg+XHJcbiAgICAgICAgICAgICAgPHRoPlBvaW50czwvdGg+XHJcbiAgICAgICAgICAgICAgPHRoPk1heDwvdGg+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgIDx0ciB2LWZvcj1cInRyaWVkIGluIHRyaWVzXCIgOmNsYXNzPVwidHJpZWQudG9rZW4gPT09IHRva2VuID8gJ3NlbGVjdGVkJzonJ1wiXHJcbiAgICAgICAgICAgICAgICBAY2xpY2suZGVmYXVsdD1cInNlbGVjdFRyeSh0cmllZC50b2tlbilcIj5cclxuICAgICAgICAgICAgICA8dGQ+e3t0aW1lKHRyaWVkLnN0YXJ0KX19PC90ZD5cclxuICAgICAgICAgICAgICA8dGQ+e3tlbGFwc2VkKHRyaWVkLnN0YXJ0LCB0cmllZC5lbmQpfX08L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZD57e3RyaWVkLnBvaW50c319PC90ZD5cclxuICAgICAgICAgICAgICA8dGQ+e3t0cmllZC5tYXhwb2ludHN9fTwvdGQ+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICA8L3RhYmxlPlxyXG5cclxuICAgICAgICAgIDx0YWJsZSB2LWlmPVwiYW5zd2VycyAhPT0gbnVsbCAmJiBhbnN3ZXJzLmxlbmd0aCA+IDBcIiBjbGFzcz1cInNtYWxsIGNlbnRlclwiPlxyXG4gICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgPHRoPiM8L3RoPlxyXG4gICAgICAgICAgICAgIDx0aD5Qb2ludHM8L3RoPlxyXG4gICAgICAgICAgICAgIDx0aD5Bc2tlZDwvdGg+XHJcbiAgICAgICAgICAgICAgPHRoPkFuc3dlcmVkPC90aD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgPHRyIHYtZm9yPVwiYW5zIGluIGFuc3dlcnNcIiA6Y2xhc3M9XCJhbnN3ZXIgIT09IG51bGwgJiYgYW5zLm51bSA9PT0gYW5zd2VyLm51bSA/ICdzZWxlY3RlZCc6JydcIlxyXG4gICAgICAgICAgICAgICAgQGNsaWNrLmRlZmF1bHQ9XCJzZWxlY3RBbnN3ZXIoYW5zLm51bSlcIj5cclxuICAgICAgICAgICAgICA8dGQ+e3thbnMubnVtfX08L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZD57e2Fucy5wb2ludHN9fTwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkPnt7dGltZShhbnMucXVlc3Rpb250aW1lKX19PC90ZD5cclxuICAgICAgICAgICAgICA8dGQ+e3t0aW1lKGFucy5hbnN3ZXJ0aW1lKX19PC90ZD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICA8ZGl2IHYtaWY9XCJhbnN3ZXJzICE9PSBudWxsICYmIGFuc3dlcnMubGVuZ3RoID09PSAwXCI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzPVwiY2VudGVyYm94IHByaW1hcnkgY2VudGVyXCI+Tm8gYW5zd2VycyBwcm92aWRlZCBmb3IgdGhpcyBxdWl6IHRyeS48L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2wtcXVpelwiIHYtaWY9XCJhbnN3ZXIgIT09IG51bGxcIj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8aDI+UXVlc3Rpb246IHt7YW5zd2VyLm51bX19IG9mIHt7YW5zd2Vycy5sZW5ndGh9fTwvaDI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInF1ZXN0aW9uXCIgdi1odG1sPVwiYW5zd2VyLnF1ZXN0aW9uXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGgzPlN0dWRlbnQgYW5zd2VyOjwvaDM+XHJcbiAgICAgICAgICAgICAgPHByZSBjbGFzcz1cImNvZGVcIj57e2Fuc3dlci5zdHVkZW50YW5zd2VyfX08L3ByZT5cclxuICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCJhbnN3ZXIucmlnaHRhbnN3ZXIubGVuZ3RoID4gMFwiPlxyXG4gICAgICAgICAgICAgICAgPGgzPkNvcnJlY3QgYW5zd2VyOjwvaDM+XHJcbiAgICAgICAgICAgICAgICA8cHJlIGNsYXNzPVwiY29kZVwiPnt7YW5zd2VyLnJpZ2h0YW5zd2VyfX08L3ByZT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8L2ZldGNoZXI+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgaW1wb3J0IEZldGNoZXJWdWUgZnJvbSAndXNlcnMtY2wvanMvTGliL0ZldGNoZXJWdWUudnVlJztcclxuICBpbXBvcnQge1RpbWVGb3JtYXR0ZXJ9IGZyb20gJ3NpdGUtY2wvanMvVGltZUZvcm1hdHRlcic7XHJcblxyXG4gIC8qXHJcbiAgYW5zd2VydGltZVxyXG4gIG51bVxyXG4gIHBvaW50c1xyXG4gIHF1ZXN0aW9uXHJcbiAgcXVlc3Rpb250aW1lXHJcbiAgcmlnaHRhbnN3ZXJcclxuICBzdHVkZW50YW5zd2VyXHJcbiAgdG9rZW5cclxuICAgKi9cclxuICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgIHByb3BzOiBbXHJcbiAgICAgICAgICAnbWVtYmVyaWQnLCAnYXNzaWdudGFnJywgJ3F1aXp0YWcnXHJcbiAgICAgIF0sXHJcbiAgICAgIGRhdGE6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICBmZXRjaGluZzogdHJ1ZSxcclxuICAgICAgICAgICAgICB1c2VyOiBudWxsLFxyXG4gICAgICAgICAgICAgIHNlY3Rpb246IG51bGwsXHJcbiAgICAgICAgICAgICAgYXNzaWdubWVudDogbnVsbCxcclxuICAgICAgICAgICAgICB0cmllczogbnVsbCxcclxuICAgICAgICAgICAgICB0b2tlbjogbnVsbCxcclxuICAgICAgICAgICAgICBhbnN3ZXJzOiBudWxsLFxyXG4gICAgICAgICAgICAgIGFuc3dlcjogbnVsbFxyXG4gICAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBjb21wb25lbnRzOiB7XHJcbiAgICAgICAgICAnZmV0Y2hlcic6IEZldGNoZXJWdWVcclxuICAgICAgfSxcclxuICAgICAgbW91bnRlZCgpIHtcclxuICAgICAgICAgIHRoaXMuJHBhcmVudC5zZXRUaXRsZSgnOiBRdWl6IFJlc3VsdCcpO1xyXG5cclxuICAgICAgICAgIFNpdGUuYXBpLmdldChgL2FwaS9xdWl6L3Jlc3VsdC8ke3RoaXMubWVtYmVyaWR9LyR7dGhpcy5hc3NpZ250YWd9LyR7dGhpcy5xdWl6dGFnfWAsIHt9KVxyXG4gICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBpZighcmVzcG9uc2UuaGFzRXJyb3IoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy51c2VyID0gbmV3IFVzZXJzLlVzZXIocmVzcG9uc2UuZ2V0RGF0YSgncXVpei11c2VyJykuYXR0cmlidXRlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtZW1iZXIgPSB0aGlzLnVzZXIubWVtYmVyO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VjdGlvbiA9IHRoaXMuJHN0b3JlLmdldHRlcnNbJ2NvdXJzZS9zZWN0aW9uJ10obWVtYmVyLnNlbWVzdGVyLCBtZW1iZXIuc2VjdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFzc2lnbm1lbnQgPSB0aGlzLnNlY3Rpb24uZ2V0QXNzaWdubWVudCh0aGlzLmFzc2lnbnRhZyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy50cmllcyA9IHJlc3BvbnNlLmdldERhdGEoJ3F1aXotdHJpZXMnKS5hdHRyaWJ1dGVzO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFuc3dlcnMgPSByZXNwb25zZS5nZXREYXRhKCdxdWl6LWFuc3dlcnMnKTtcclxuICAgICAgICAgICAgICAgICAgICAgIGlmKGFuc3dlcnMgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRva2VuID0gYW5zd2Vycy5pZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFuc3dlcnMgPSBhbnN3ZXJzLmF0dHJpYnV0ZXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hbnN3ZXIgPSB0aGlzLmFuc3dlcnMubGVuZ3RoID4gMCA/IHRoaXMuYW5zd2Vyc1swXSA6IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG9rZW4gPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYW5zd2VycyA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hbnN3ZXIgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmV0Y2hpbmcgPSBmYWxzZTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgU2l0ZS50b2FzdCh0aGlzLCByZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgU2l0ZS50b2FzdCh0aGlzLCBlcnJvcik7XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIG1ldGhvZHM6IHtcclxuICAgICAgICAgIHRpbWUodmFsdWUpIHtcclxuICAgICAgICAgICAgICByZXR1cm4gVGltZUZvcm1hdHRlci5yZWxhdGl2ZVVOSVgodmFsdWUpO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGVsYXBzZWQoc3RhcnQsIGVuZCkge1xyXG4gICAgICAgICAgICAgIGlmKGVuZCA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGNvbnN0IGRpZmYgPSBlbmQgLSBzdGFydDtcclxuICAgICAgICAgICAgICBjb25zdCBtaW4gPSBNYXRoLmZsb29yKGRpZmYgLyA2MCk7XHJcbiAgICAgICAgICAgICAgY29uc3Qgc2VjID0gZGlmZiAlIDYwO1xyXG4gICAgICAgICAgICAgIHJldHVybiAnJyArIG1pbiArICc6JyArIChzZWMgPCAxMCA/ICcwJyA6ICcnKSArIHNlYztcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBzZWxlY3RUcnkodG9rZW4pIHtcclxuICAgICAgICAgICAgICAvL3RoaXMuZmV0Y2hpbmcgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICBTaXRlLmFwaS5nZXQoYC9hcGkvcXVpei9yZXN1bHQvdG9rZW4vJHt0b2tlbn1gLCB7fSlcclxuICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZighcmVzcG9uc2UuaGFzRXJyb3IoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG9rZW4gPSB0b2tlbjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYW5zd2VycyA9IHJlc3BvbnNlLmdldERhdGEoJ3F1aXotYW5zd2VycycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGFuc3dlcnMgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hbnN3ZXJzID0gYW5zd2Vycy5hdHRyaWJ1dGVzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFuc3dlciA9IHRoaXMuYW5zd2Vycy5sZW5ndGggPiAwID8gdGhpcy5hbnN3ZXJzWzBdIDogbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFuc3dlcnMgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFuc3dlciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZldGNoaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFNpdGUudG9hc3QodGhpcywgcmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgU2l0ZS50b2FzdCh0aGlzLCBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBzZWxlY3RBbnN3ZXIobnVtKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5hbnN3ZXIgPSB0aGlzLmFuc3dlcnNbbnVtLTFdO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgfVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cclxuXHJcbiAgZGl2LmNsLWFib3V0IHtcclxuICAgIG1hcmdpbjogMWVtIGF1dG87XHJcbiAgICBkaXNwbGF5OiB0YWJsZTtcclxuXHJcbiAgICBwIHtcclxuICAgICAgZGlzcGxheTogdGFibGUtcm93O1xyXG5cclxuICAgICAgc3BhbiB7XHJcbiAgICAgICAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBzcGFuOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcblxyXG4gIHRyOmZpcnN0LWNoaWxkIHtcclxuICAgIGN1cnNvcjogZGVmYXVsdDtcclxuICB9XHJcblxyXG4gIHRyLnNlbGVjdGVkIHtcclxuICAgIHRkIHtcclxuICAgICAgYmFja2dyb3VuZDogIzg4ZmZmZjtcclxuICAgIH1cclxuICB9XHJcblxyXG48L3N0eWxlPlxyXG4iLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJmdWxsXCI+XHJcblxyXG4gICAgICA8bWVtYmVyc2ZldGNoZXIgOmZldGNoaW5nPVwicmVzdWx0cyA9PT0gbnVsbFwiPlxyXG4gICAgICAgIDx0ZW1wbGF0ZSBzbG90LXNjb3BlPVwiZmV0Y2hlclwiPlxyXG4gICAgICAgICAgPHRhYmxlIGNsYXNzPVwic21hbGxcIj5cclxuICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgIDx0aD5Vc2VyPC90aD5cclxuICAgICAgICAgICAgICA8dGg+TmFtZTwvdGg+XHJcbiAgICAgICAgICAgICAgPHRoPkVtYWlsPC90aD5cclxuICAgICAgICAgICAgICA8dGg+Um9sZTwvdGg+XHJcbiAgICAgICAgICAgICAgPHRoIGNsYXNzPVwic21hbGxcIiB2LWZvcj1cInRhZyBpbiBxdWl6VGFnc1wiPnt7dGFnfX08L3RoPlxyXG4gICAgICAgICAgICAgIDx0aCB2LWlmPVwicmVzdWx0cyAhPT0gbnVsbFwiPlRvdGFsPC90aD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgPHRyIHYtZm9yPVwidXNlciBpbiBmZXRjaGVyLnVzZXJzXCI+XHJcbiAgICAgICAgICAgICAgPHRkID57e3VzZXIudXNlcklkfX08L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZD57e3VzZXIubmFtZX19PC90ZD5cclxuICAgICAgICAgICAgICA8dGQ+e3t1c2VyLmVtYWlsfX08L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZD57e3VzZXIucm9sZU5hbWUoKX19PC90ZD5cclxuICAgICAgICAgICAgICA8dGQgdi1mb3I9XCJ0YWcgaW4gcXVpelRhZ3NcIj57e3N0YXR1cyh1c2VyLCB0YWcpfX1cclxuICAgICAgICAgICAgICAgIDxyb3V0ZXItbGluayA6dG89XCJsaW5rKHVzZXIsIHRhZylcIiB2LWlmPVwicXVpelJlc3VsdCh1c2VyLCB0YWcpIT09bnVsbFwiPjxpbWcgOnNyYz1cImV5ZVwiPjwvcm91dGVyLWxpbms+PC90ZD5cclxuICAgICAgICAgICAgICA8dGQgdi1pZj1cInJlc3VsdHMgIT09IG51bGxcIj57e3RvdGFsKHVzZXIpfX08L3RkPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICA8L21lbWJlcnNmZXRjaGVyPlxyXG5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICBpbXBvcnQgTWVtYmVyc0ZldGNoZXJDb21wb25lbnQgZnJvbSAnY291cnNlLWNsL2pzL0NvbnNvbGUvTWVtYmVycy9NZW1iZXJzRmV0Y2hlckNvbXBvbmVudC52dWUnO1xyXG5cclxuICAgIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgICBwcm9wczogWydhc3NpZ250YWcnXSxcclxuICAgICAgICBkYXRhOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHF1aXpUYWdzOiBbXSxcclxuICAgICAgICAgICAgICAgIHJlc3VsdHM6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBhc3NpZ25tZW50OiBudWxsLFxyXG4gICAgICAgICAgICAgICAgZXllOiBTaXRlLnJvb3QgKyAnL3ZlbmRvci9jbC9zaXRlL2ltZy9leWUxNi5wbmcnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIG1ldGhvZHM6IHtcclxuICAgICAgICAgICAgcHJvY2VzcyhyZXN1bHRzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlc3VsdHMgPSByZXN1bHRzO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIENvbGxlY3QgdXAgdGhlIHF1aXogdGFnc1xyXG4gICAgICAgICAgICAgICAgZm9yKGxldCBtZW1iZXIgaW4gcmVzdWx0cykge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcihsZXQgcXVpelRhZyBpbiByZXN1bHRzW21lbWJlcl0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5xdWl6VGFncy5pbmRleE9mKHF1aXpUYWcpIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5xdWl6VGFncy5wdXNoKHF1aXpUYWcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3RhdHVzKHVzZXIsIHRhZykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5xdWl6UmVzdWx0KHVzZXIsIHRhZyk7XHJcbiAgICAgICAgICAgICAgICBpZihyZXN1bHQgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICcnICsgcmVzdWx0LnBvaW50cyArICcvJyArIHJlc3VsdC5tYXhwb2ludHM7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHRvdGFsKHVzZXIpIHtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMucmVzdWx0cyA9PT0gbnVsbCB8fCB0aGlzLmFzc2lnbm1lbnQgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHN1bSA9IDA7XHJcbiAgICAgICAgICAgICAgICBmb3IobGV0IHRhZyBvZiB0aGlzLnF1aXpUYWdzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5xdWl6UmVzdWx0KHVzZXIsIHRhZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYocmVzdWx0ICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1bSArPSArcmVzdWx0LnBvaW50cztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJycgKyBzdW0gKyAnLycgKyB0aGlzLmFzc2lnbm1lbnQucXVpejtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIEdFdCBhIHF1aXogcmVzdWx0IGZvciBhIHVzZXIgaWYgb25lIGV4aXN0cywgb3RoZXJ3aXNlIHJldHVybiBudWxsLlxyXG4gICAgICAgICAgICAgKiBAcGFyYW0gdXNlciBVc2VyIG9iamVjdFxyXG4gICAgICAgICAgICAgKiBAcGFyYW0gdGFnIHF1aXogdGFnXHJcbiAgICAgICAgICAgICAqIEByZXR1cm5zIHsqfVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgcXVpelJlc3VsdCh1c2VyLCB0YWcpIHtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMucmVzdWx0cyA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmKHRoaXMucmVzdWx0c1t1c2VyLmlkXSAhPT0gdW5kZWZpbmVkICYmXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXN1bHRzW3VzZXIuaWRdW3RhZ10gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMucmVzdWx0c1t1c2VyLmlkXVt0YWddO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGxpbmsodXNlciwgdGFnKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYCR7U2l0ZS5yb290fS9jbC9jb25zb2xlL3F1aXovcmVzdWx0LyR7dXNlci5tZW1iZXIuaWR9LyR7dGhpcy5hc3NpZ25tZW50LnRhZ30vJHt0YWd9YDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29tcG9uZW50czoge1xyXG4gICAgICAgICAgICAnbWVtYmVyc2ZldGNoZXInOiBNZW1iZXJzRmV0Y2hlckNvbXBvbmVudFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbW91bnRlZCgpIHtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IG1lbWJlciA9IHRoaXMuJHN0b3JlLnN0YXRlLnVzZXIudXNlci5tZW1iZXI7XHJcbiAgICAgICAgICAgIGxldCBxdWVyeSA9IHtcclxuICAgICAgICAgICAgICAgIHNlbWVzdGVyOiBtZW1iZXIuc2VtZXN0ZXIsXHJcbiAgICAgICAgICAgICAgICBzZWN0aW9uOiBtZW1iZXIuc2VjdGlvblxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zZWN0aW9uID0gdGhpcy4kc3RvcmUuZ2V0dGVyc1snY291cnNlL3NlY3Rpb24nXShtZW1iZXIuc2VtZXN0ZXIsIG1lbWJlci5zZWN0aW9uKTtcclxuICAgICAgICAgICAgdGhpcy5hc3NpZ25tZW50ID0gdGhpcy5zZWN0aW9uLmdldEFzc2lnbm1lbnQodGhpcy5hc3NpZ250YWcpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy4kcGFyZW50LnNldFRpdGxlKCc6ICcgKyB0aGlzLmFzc2lnbm1lbnQuc2hvcnRuYW1lICsgJyBRdWl6IFN0YXR1cycpO1xyXG5cclxuICAgICAgICAgICAgU2l0ZS5hcGkuZ2V0KCcvYXBpL3F1aXovYWxsLycgKyB0aGlzLmFzc2lnbnRhZywgcXVlcnkpXHJcbiAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZighcmVzcG9uc2UuaGFzRXJyb3IoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHJlc3BvbnNlLmdldERhdGEoJ3F1aXotcmVzdWx0cy1hbGwnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoZGF0YSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzKGRhdGEuYXR0cmlidXRlcy5yZXN1bHRzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFNpdGUudG9hc3QodGhpcywgcmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICBTaXRlLnRvYXN0KHRoaXMsIGVycm9yKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XHJcbnRhYmxlIHtcclxuICB0ZCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICB0ZDpudGgtY2hpbGQoMSksICB0ZDpudGgtY2hpbGQoMiksICB0ZDpudGgtY2hpbGQoMyksICB0ZDpudGgtY2hpbGQoNCkge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB9XHJcbn1cclxuXHJcbjwvc3R5bGU+IiwiPHRlbXBsYXRlPlxyXG4gIDxkaXY+XHJcbiAgICA8aDIgdi1pZj1cInF1aXoubGVuZ3RoID4gMVwiPlF1ZXN0aW9uIHt7cXVpei5xdWVzdGlvbn19IG9mIHt7cXVpei5sZW5ndGh9fTwvaDI+XHJcbiAgICAgIDxmb3JtIHJlZj1cImZvcm1cIiBtZXRob2Q9XCJwb3N0XCIgQHN1Ym1pdC5wcmV2ZW50PVwic3VibWl0XCI+XHJcbiAgICAgICAgPGRpdiB2LWh0bWw9XCJxdWl6LmFuc3dlclwiPjwvZGl2PlxyXG4gICAgICAgIDxwIHYtaWY9XCJxdWl6LnF1ZXN0aW9uIDwgcXVpei5sZW5ndGhcIj48YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5OZXh0IFF1ZXN0aW9uPC9idXR0b24+PC9wPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICA8ZGl2IHYtaWY9XCJxdWl6LnF1ZXN0aW9uID49IHF1aXoubGVuZ3RoXCI+XHJcbiAgICAgIDxwIGNsYXNzPVwiZG9uZVwiPlRoaXMgUXVpeiBpcyBDb21wbGV0ZTwvcD5cclxuICAgICAgPHAgY2xhc3M9XCJjZW50ZXJcIj5Zb3UgbWF5IDxhIEBjbGljay5wcmV2ZW50PVwicmV0YWtlXCI+cmV0YWtlIHRoZSBxdWl6PC9hPiBpZiB5b3Ugd2lzaDwvcD5cclxuICAgICAgPHJlc3VsdHMgOnF1aXo9XCJxdWl6XCI+PC9yZXN1bHRzPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gICAgaW1wb3J0IHtTdGF0ZXN9IGZyb20gJy4uL1N0YXRlcyc7XHJcbiAgICBpbXBvcnQgUmVzdWx0c1Z1ZSBmcm9tICcuL1Jlc3VsdHMudnVlJztcclxuXHJcbiAgICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgICAgZGF0YTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBwcm9wczogW1xyXG4gICAgICAgICAgICAncXVpeidcclxuICAgICAgICBdLFxyXG4gICAgICAgIGNvbXBvbmVudHM6IHtcclxuICAgICAgICAgICAgJ3Jlc3VsdHMnOiBSZXN1bHRzVnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgICAgIHN1Ym1pdCgpIHtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMucXVpei5xdWVzdGlvbiA8IHRoaXMucXVpei5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCduZXctc3RhdGUnLCBTdGF0ZXMuUVVFU1RJT04pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICByZXRha2UoKSB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG48L3NjcmlwdD5cclxuIiwiPHRlbXBsYXRlPlxyXG4gIDxkaXY+XHJcbiAgICA8cCBjbGFzcz1cImNlbnRlcmJveCBjb21wIGNlbnRlclwiPlRoZSBxdWl6IGlzIGNsb3NlZCBhbmQgbm90IGF2YWlsYWJsZSBhdCB0aGlzIHRpbWUuPC9wPlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICBpbXBvcnQge1N0YXRlc30gZnJvbSAnLi4vU3RhdGVzJztcclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgICBwcm9wczogW1xyXG4gICAgICAgICAgJ3F1aXonXHJcbiAgICAgIF1cclxuICB9XHJcblxyXG48L3NjcmlwdD5cclxuIiwiPHRlbXBsYXRlPlxyXG4gIDxkaXY+XHJcbiAgICA8cCBjbGFzcz1cImNlbnRlcmJveCBjb21wXCI+VGhlIHF1aXogaGFzIGV4cGlyZWQgYW5kIGNhbiBubyBsb25nZXIgYmUgdGFrZW4uIFF1aXp6ZXMgZXhwaXJlIGF0IHRoZSB0aW1lXHJcbiAgICAgIHRoZSBhc3NpZ25tZW50IGlzIGR1ZS4gPC9wPlxyXG4gICAgPHA+WW91IGNhbiBwcm9jZWVkIHRocm91Z2ggdGhlIHF1aXogZm9yIHByYWN0aWNlIHB1cnBvc2VzLCBidXQgbmV3IGdyYWRlcyBhbmRcclxuICAgICAgc3VibWlzc2lvbnMgd2lsbCBub3QgYmUgcG9zc2libGUuPC9wPlxyXG5cclxuICAgIDxwPldoZW4gcmVhZHksIDxhIHYtb246Y2xpY2sucHJldmVudD1cInByb2NlZWQoKVwiPmNsaWNrIHRvIHByb2NlZWQgdG8gdGhlIHF1aXouPC9hPiBZb3UgY2FuIGFsc29cclxuICAgICAgPGEgdi1vbjpjbGljay5wcmV2ZW50PVwicmVzdWx0cygpXCI+anVtcCBkaXJlY3RseSB0byB5b3VyIHF1aXogcmVzdWx0cy48L2E+PC9wPlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICBpbXBvcnQge1N0YXRlc30gZnJvbSAnLi4vU3RhdGVzJztcclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgICBwcm9wczogW1xyXG4gICAgICAgICAgJ3F1aXonXHJcbiAgICAgIF0sXHJcbiAgICAgIG1ldGhvZHM6IHtcclxuICAgICAgICAgIHByb2NlZWQoKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnbmV3LXN0YXRlJywgU3RhdGVzLlNUQVJUKTtcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICByZXN1bHRzKCkge1xyXG4gICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ25ldy1zdGF0ZScsIFN0YXRlcy5SRVNVTFRTKTtcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gIH1cclxuXHJcbjwvc2NyaXB0PlxyXG4iLCI8dGVtcGxhdGU+XHJcbiAgPGRpdj5cclxuICAgIDxkaXYgdi1odG1sPVwicXVpei5zcGxhc2hcIj48L2Rpdj5cclxuXHJcbiAgICA8cCBjbGFzcz1cImNlbnRlclwiIHYtaWY9XCJxdWl6LmxpZ2h0bmluZyA9PT0gbnVsbFwiPlRoaXMgcXVpeiBoYXMgbm8gc3BlY2lmaWVkIHRpbWUgbGltaXQuPC9wPlxyXG4gICAgPHAgdi1pZj1cInF1aXoubGlnaHRuaW5nICE9PSBudWxsXCIgY2xhc3M9XCJjZW50ZXJib3ggc2Vjb25kYSBjZW50ZXJcIj5UaGlzIGlzIGEgbGlnaHRuaW5nIHF1aXouXHJcbiAgICAgIFlvdSBoYXZlIHt7cXVpei5saWdodG5pbmd9fSBzZWNvbmRzIHRvIGFuc3dlciBlYWNoIHF1ZXN0aW9uLjwvcD5cclxuXHJcbiAgICA8cD5XaGVuIHJlYWR5LCA8YSB2LW9uOmNsaWNrLnByZXZlbnQ9XCJwcm9jZWVkKClcIj5jbGljayB0byBwcm9jZWVkIHRvIHRoZSBxdWl6LjwvYT4gWW91IGNhbiBhbHNvXHJcbiAgICAgIDxhIHYtb246Y2xpY2sucHJldmVudD1cInJlc3VsdHMoKVwiPmp1bXAgZGlyZWN0bHkgdG8geW91ciBxdWl6IHJlc3VsdHMuPC9hPjwvcD5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgaW1wb3J0IHtTdGF0ZXN9IGZyb20gJy4uL1N0YXRlcyc7XHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgcHJvcHM6IFtcclxuICAgICAgICAgICdxdWl6J1xyXG4gICAgICBdLFxyXG4gICAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgICBwcm9jZWVkKCkge1xyXG4gICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ25ldy1zdGF0ZScsIFN0YXRlcy5TVEFSVCk7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgcmVzdWx0cygpIHtcclxuICAgICAgICAgICAgICB0aGlzLiRlbWl0KCduZXctc3RhdGUnLCBTdGF0ZXMuUkVTVUxUUyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICB9XHJcblxyXG48L3NjcmlwdD5cclxuIiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJwcmV2aWV3XCI+XHJcbiAgICA8ZGl2IHYtaWY9XCJxdWVzdGlvbiE9PW51bGxcIj5cclxuICAgICAgPHAgY2xhc3M9XCJwcmV2aWV3XCIgdi1pZj1cInF1aXoubGVuZ3RoID4gMVwiPlByZXZpZXcgb2Yge3txdWl6LnF1ZXN0aW9ufX0uIEF2YWlsYWJsZSB0byBzdGFmZiBvbmx5LjwvcD5cclxuICAgICAgPGZvcm0gcmVmPVwiZm9ybVwiIG1ldGhvZD1cInBvc3RcIiBAc3VibWl0LnByZXZlbnQ9XCJzdWJtaXRcIj5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJxdWVzdGlvbi10aW1lXCIgOnZhbHVlPVwidGltZVwiPlxyXG4gICAgICAgIDxkaXYgdi1odG1sPVwicXVlc3Rpb25cIj48L2Rpdj5cclxuICAgICAgICA8cD48YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TdWJtaXQ8L2J1dHRvbj48L3A+XHJcbiAgICAgICAgPGhyPlxyXG5cclxuICAgICAgICA8aDM+QW5zd2VyczwvaDM+XHJcbiAgICAgICAgPGRpdiB2LWZvcj1cImFuc3dlciBpbiBhbnN3ZXJzXCI+XHJcbiAgICAgICAgICA8ZGl2IHYtaHRtbD1cImFuc3dlclwiPjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgdi1pZj1cImNvbW1lbnQgIT09IG51bGxcIj5cclxuICAgICAgICAgIDxoMz5Db21tZW50PC9oMz5cclxuICAgICAgICAgIDxkaXYgdi1odG1sPVwiY29tbWVudFwiIGNsYXNzPVwiY2VudGVyYm94IHByaW1hcnlcIj48L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gICAgaW1wb3J0IHtTdGF0ZXN9IGZyb20gJy4uL1N0YXRlcyc7XHJcblxyXG4gICAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgICAgIGRhdGE6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgcXVlc3Rpb246IG51bGwsXHJcbiAgICAgICAgICAgICAgICBjb21tZW50OiBudWxsLFxyXG4gICAgICAgICAgICAgICAgdGltZTogMFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBwcm9wczogW1xyXG4gICAgICAgICAgICAncXVpeicsXHJcbiAgICAgICAgICAgICdmaWxlJ1xyXG4gICAgICAgIF0sXHJcbiAgICAgICAgd2F0Y2g6IHtcclxuICAgICAgICAgICAgZmlsZShuZXdRdWl6LCBvbGRRdWl6KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZldGNoKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIG1vdW50ZWQoKSB7XHJcbiAgICAgICAgICB0aGlzLmZldGNoKCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgICAgIGZldGNoKCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcXVlcnkgPSB7ZmlsZTogdGhpcy5maWxlfTtcclxuICAgICAgICAgICAgICAgIFNpdGUuYXBpLmdldChgL2FwaS9xdWl6L3ByZXZpZXcvJHt0aGlzLnF1aXoudG9rZW59YCwgcXVlcnkpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcmVzcG9uc2UuaGFzRXJyb3IoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSByZXNwb25zZS5nZXREYXRhKCdxdWl6LXF1ZXN0aW9uJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnF1ZXN0aW9uID0gZGF0YS5hdHRyaWJ1dGVzLnF1ZXN0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50aW1lID0gZGF0YS5hdHRyaWJ1dGVzLnRpbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1lbnQgPSBkYXRhLmF0dHJpYnV0ZXMuY29tbWVudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYW5zd2VycyA9IGRhdGEuYXR0cmlidXRlcy5hbnN3ZXJzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU2l0ZS50b2FzdCh0aGlzLCByZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgU2l0ZS50b2FzdCh0aGlzLCBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHByb2NlZWQoKSB7XHJcblxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzdWJtaXQoKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBmb3JtID0gdGhpcy4kcmVmc1snZm9ybSddO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZm9ybSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhbnN3ZXIgPSBmb3JtRGF0YS5nZXQoJ2NsLWFuc3dlcicpO1xyXG4gICAgICAgICAgICAgICAgaWYoYW5zd2VyID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgIFNpdGUudG9hc3QodGhpcywgJ1lvdSBtdXN0IGNob29zZSBhbiBvcHRpb24nKTtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbjwvc2NyaXB0PiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwicHJldmlld2VyXCI+XHJcbiAgICA8aDI+U3RhZmYgUXVlc3Rpb24gUHJldmlld3M8L2gyPlxyXG4gICAgPHA+VGhlc2UgbGlua3MgYWxsb3cgeW91IHRvIHByZXZpZXcgcXVpeiBxdWVzdGlvbnMuIElmIHRoZSBxdWVzdGlvbiBpcyByYW5kb21seSBzZWxlY3RlZFxyXG4gICAgICBmcm9tIG11bHRpcGxlIGZpbGVzLCB0aGUgZmlsZXMgYXBwZWFyIGJlbG93IHRoZSBxdWVzdGlvbi4gPHNwYW4gY2xhc3M9XCJzbWFsbHJlZFwiPlRoaXMgcGFydCBvZiB0aGUgcGFnZSBhcHBlYXJzIGZvclxyXG5zdGFmZiBtZW1iZXJzIG9ubHkuPC9zcGFuPjwvcD5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwic21hbGxcIj5cclxuICAgICAgPGRpdiB2LWZvcj1cInF1ZXN0aW9uIGluIHByZXZpZXdzXCIgOmtleT1cInF1ZXN0aW9uLm51bVwiPlxyXG4gICAgICAgIDxoMz5RdWVzdGlvbiB7e3F1ZXN0aW9uLm51bX19PC9oMz5cclxuICAgICAgICA8dWwgdi1pZj1cInF1ZXN0aW9uLmZpbGVzLmxlbmd0aCA+IDBcIj5cclxuICAgICAgICAgIDxsaSB2LWZvcj1cImZpbGUgaW4gcXVlc3Rpb24uZmlsZXNcIj48YSBAY2xpY2sucHJldmVudD1cInByZXZpZXcoZmlsZSlcIj57e2ZpbGV9fTwvYT48L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHJcbiAgICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgICAgcHJvcHM6IFtcclxuICAgICAgICAgICAgJ3F1aXonXHJcbiAgICAgICAgXSxcclxuICAgICAgICBkYXRhOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHByZXZpZXdzOiBbXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb3VudGVkKCkge1xyXG4gICAgICAgICAgICBmb3IobGV0IGk9MDsgaTx0aGlzLnF1aXoucHJldmlldy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgIHRoaXMucHJldmlld3MucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgIG51bTogaSsxLFxyXG4gICAgICAgICAgICAgICAgICBmaWxlczogdGhpcy5xdWl6LnByZXZpZXdbaV1cclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgICBwcmV2aWV3KGZpbGUpIHtcclxuICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdwcmV2aWV3JywgZmlsZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuPC9zY3JpcHQ+XHJcbiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2PlxyXG4gICAgPGRpdiB2LWlmPVwicXVlc3Rpb24hPT1udWxsXCI+XHJcbiAgICAgIDxoMiB2LWlmPVwicXVpei5sZW5ndGggPiAxXCI+UXVlc3Rpb24ge3txdWl6LnF1ZXN0aW9ufX0gb2Yge3txdWl6Lmxlbmd0aH19PC9oMj5cclxuICAgICAgPGZvcm0gcmVmPVwiZm9ybVwiIG1ldGhvZD1cInBvc3RcIiBAc3VibWl0LnByZXZlbnQ9XCJzdWJtaXRcIj5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJxdWVzdGlvbi10aW1lXCIgOnZhbHVlPVwidGltZVwiPlxyXG4gICAgICAgIDxkaXYgdi1odG1sPVwicXVlc3Rpb25cIj48L2Rpdj5cclxuICAgICAgICA8cD48YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TdWJtaXQ8L2J1dHRvbj48L3A+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICAgIGltcG9ydCB7U3RhdGVzfSBmcm9tICcuLi9TdGF0ZXMnO1xyXG5cclxuICAgIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgICBkYXRhOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHF1ZXN0aW9uOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgdGltZTogMFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBwcm9wczogW1xyXG4gICAgICAgICAgICAncXVpeidcclxuICAgICAgICBdLFxyXG4gICAgICAgIG1vdW50ZWQoKSB7XHJcbiAgICAgICAgICAgIFNpdGUuYXBpLnBvc3QoYC9hcGkvcXVpei9xdWVzdGlvbi8ke3RoaXMucXVpei50b2tlbn0vJHt0aGlzLnF1aXoucXVlc3Rpb259YCwge30pXHJcbiAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXJlc3BvbnNlLmhhc0Vycm9yKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSByZXNwb25zZS5nZXREYXRhKCdxdWl6LXF1ZXN0aW9uJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucXVlc3Rpb24gPSBkYXRhLmF0dHJpYnV0ZXMucXVlc3Rpb247XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGltZSA9IGRhdGEuYXR0cmlidXRlcy50aW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFNpdGUudG9hc3QodGhpcywgcmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgU2l0ZS50b2FzdCh0aGlzLCBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1ldGhvZHM6IHtcclxuICAgICAgICAgICAgcHJvY2VlZCgpIHtcclxuXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN1Ym1pdCgpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGZvcm0gPSB0aGlzLiRyZWZzWydmb3JtJ107XHJcbiAgICAgICAgICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShmb3JtKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGFuc3dlciA9IGZvcm1EYXRhLmdldCgnY2wtYW5zd2VyJyk7XHJcbiAgICAgICAgICAgICAgICBpZihhbnN3ZXIgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgU2l0ZS50b2FzdCh0aGlzLCAnWW91IG11c3QgY2hvb3NlIGFuIG9wdGlvbicpO1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgU2l0ZS5hcGkucG9zdChgL2FwaS9xdWl6L2Fuc3dlci8ke3RoaXMucXVpei50b2tlbn0vJHt0aGlzLnF1aXoucXVlc3Rpb259YCwgZm9ybURhdGEpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcmVzcG9uc2UuaGFzRXJyb3IoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSByZXNwb25zZS5nZXREYXRhKCdxdWl6LWFuc3dlcicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnYW5zd2VyJywgZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTaXRlLnRvYXN0KHRoaXMsIHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBTaXRlLnRvYXN0KHRoaXMsIGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG48L3NjcmlwdD4iLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cImNsLXJlc3VsdHNcIj5cclxuICAgIDxkaXYgdi1pZj1cInRyaWVzICE9PSBudWxsICYmIHRyaWVzLmxlbmd0aCA+IDBcIj5cclxuICAgICAgPHA+WW91ciBjdXJyZW50IGJlc3Qgc2NvcmUgZm9yIHRoaXMgcXVpeiBpcyB7e2hpZ2h9fS97e3F1aXoucG9pbnRzfX0uIFRoZSBzeXN0ZW0gcmV0YWlucyB5b3VyIGJlc3RcclxuICAgICAgICByZXN1bHQgYXMgeW91ciBncmFkZSBmb3IgYSBxdWl6LjwvcD5cclxuICAgICAgPHRhYmxlIGNsYXNzPVwic21hbGwgY2VudGVyXCI+XHJcbiAgICAgICAgPHRyPlxyXG4gICAgICAgICAgPHRoIGNsYXNzPVwiY2VudGVyXCI+V2hlbiBUYWtlbjwvdGg+XHJcbiAgICAgICAgICA8dGg+RmluaXNoZWQ/PC90aD5cclxuICAgICAgICAgIDx0aD5Qb2ludHM8L3RoPlxyXG4gICAgICAgIDwvdHI+XHJcbiAgICAgICAgPHRyIHYtZm9yPVwidHJpZWQgaW4gdHJpZXNcIiA6Y2xhc3M9XCJoaWdoID4gMCAmJiB0cmllZC5wb2ludHMgPT09IGhpZ2ggPyAnYmVzdCcgOiAnJ1wiPlxyXG4gICAgICAgICAgPHRkPnt7dGltZSh0cmllZC5zdGFydCl9fTwvdGQ+XHJcbiAgICAgICAgICA8dGQ+e3tlbGFwc2VkKHRyaWVkLnN0YXJ0LCB0cmllZC5lbmQpfX08L3RkPlxyXG4gICAgICAgICAgPHRkPnt7dHJpZWQucG9pbnRzfX08L3RkPlxyXG4gICAgICAgIDwvdHI+XHJcbiAgICAgICAgPGNhcHRpb24+UmVzdWx0cyBmb3IgUXVpejwvY2FwdGlvbj5cclxuICAgICAgPC90YWJsZT5cclxuICAgICAgPHA+SWYgYSB2YWx1ZSBpcyBpbmRpY2F0ZWQgaW4gdGhlIEZpbmlzaGVkPyBjb2x1bW4sIHRoZSBxdWl6XHJcbiAgICAgIHdhcyBjb21wbGV0ZWQgaW4gdGhhdCBhbW91bnQgb2YgdGltZSAoaW4gbWludXRlcyBhbmQgc2Vjb25kcykuPC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8cCBjbGFzcz1cImNlbnRlcmJveCBwcmltYXJ5IGNlbnRlclwiIHYtaWY9XCJ0cmllcyAhPT0gbnVsbCAmJiB0cmllcy5sZW5ndGggPT09IDBcIj5Zb3UgaGF2ZSBub3QgeWV0IGNvbXBsZXRlZCB0aGUgcXVpeiwgeWV0LCBzbyB5b3UgZG8gbm90IGhhdmUgYSBzY29yZS48L3A+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gIGltcG9ydCB7VGltZUZvcm1hdHRlcn0gZnJvbSAnc2l0ZS1jbC9qcy9UaW1lRm9ybWF0dGVyJztcclxuXHJcbiAgICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgICAgcHJvcHM6IFtcclxuICAgICAgICAgICAgJ3F1aXonXHJcbiAgICAgICAgXSxcclxuICAgICAgICBkYXRhOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHRyaWVzOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgaGlnaDogMFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb3VudGVkKCkge1xyXG4gICAgICAgICAgICBTaXRlLmFwaS5nZXQoYC9hcGkvcXVpei9yZXN1bHRzLyR7dGhpcy5xdWl6LmFzc2lnbnRhZ30vJHt0aGlzLnF1aXoucXVpenRhZ31gLCB7fSlcclxuICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghcmVzcG9uc2UuaGFzRXJyb3IoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHJlc3BvbnNlLmdldERhdGEoJ3F1aXotcmVzdWx0cycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRyaWVzID0gZGF0YS5hdHRyaWJ1dGVzLnRyaWVzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhpZ2ggPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IobGV0IHRyaWVkIG9mIHRoaXMudHJpZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRyaWVkLnBvaW50cyA+IHRoaXMuaGlnaCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGlnaCA9IHRyaWVkLnBvaW50cztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFNpdGUudG9hc3QodGhpcywgcmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgU2l0ZS50b2FzdCh0aGlzLCBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgICAgIHRpbWUodmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBUaW1lRm9ybWF0dGVyLnJlbGF0aXZlVU5JWCh2YWx1ZSlcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZWxhcHNlZChzdGFydCwgZW5kKSB7XHJcbiAgICAgICAgICAgICAgICBpZihlbmQgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkaWZmID0gZW5kIC0gc3RhcnQ7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtaW4gPSBNYXRoLmZsb29yKGRpZmYgLyA2MCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzZWMgPSBkaWZmICUgNjA7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJycgKyBtaW4gKyAnOicgKyAoc2VjIDwgMTAgPyAnMCcgOiAnJykgKyBzZWM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG48L3NjcmlwdD5cclxuIiwiPHRlbXBsYXRlPlxyXG4gIDxkaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZmV0Y2hpbmdcIiB2LWlmPVwiZGVsYXllZEZldGNoaW5nXCI+XHJcbiAgICAgIDxwPkZldGNoaW5nIGZyb20gc2VydmVyLi4uPC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8c2xvdCB2LWlmPVwiKGZldGNoZXIgPT09IG51bGwgfHwgIWZldGNoZXIuZmV0Y2hpbmcpICYmICFmZXRjaGluZ1wiPjwvc2xvdD5cclxuICAgIDxwIGNsYXNzPVwibW9yZVwiIHYtaWY9XCJmZXRjaGVyICE9PSBudWxsICYmIGZldGNoZXIubW9yZVwiPjxidXR0b24gQGNsaWNrLnByZXZlbnQ9XCJmZXRjaE1vcmVcIj5NT1JFPC9idXR0b24+PC9wPlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICAvKipcclxuICAgKiBAZmlsZVxyXG4gICAqIEZldGNoZXIgY29tcG9uZW50IGRpc3BsYXlzIFwiRmV0Y2hpbmdcIiBhbmQgYSBcIm1vcmVcIiBidXR0b24uXHJcbiAgICovXHJcblxyXG4gIC8qKlxyXG4gICAqIEZldGNoZXIgZnVuY3Rpb24gdXNlZCB0byB1cGRhdGUgdGhpcyBvYmplY3QuXHJcbiAgICogQGNvbnN0cnVjdG9yXHJcbiAgICovXHJcbiAgZXhwb3J0IGxldCBGZXRjaGVyID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIHRoaXMubW9yZSA9IGZhbHNlOyAgICAgICAvLyBJbmRpY2F0ZXMgdGhlcmUgaXMgbW9yZSB0byBmZXRjaFxyXG4gICAgICB0aGlzLmZldGNoaW5nID0gZmFsc2U7ICAvLyBTZXQgdHJ1ZSB3aGlsZSB3ZSBhcmUgZmV0Y2hpbmdcclxuICAgICAgdGhpcy5mZXRjaGVkID0gZmFsc2U7ICAgLy8gU2V0IHRydWUgd2hlbiB3ZSBoYXZlIGZldGNoZWQgc29tZXRoaW5nLi4uXHJcblxyXG4gICAgICB0aGlzLnN0YXJ0ID0gZnVuY3Rpb24oc2luZ2xlKSB7XHJcbiAgICAgICAgICB0aGlzLmZldGNoaW5nID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICBpZihzaW5nbGUgIT09IHRydWUpIHtcclxuICAgICAgICAgICAgICB0aGlzLm1vcmUgPSBmYWxzZTtcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5kb25lID0gZnVuY3Rpb24oc2luZ2xlKSB7XHJcbiAgICAgICAgICB0aGlzLmZldGNoaW5nID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgaWYoc2luZ2xlICE9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5mZXRjaGVkID0gdHJ1ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5yZXNldCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgdGhpcy5tb3JlID0gZmFsc2U7XHJcbiAgICAgICAgICB0aGlzLmZldGNoaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICB0aGlzLmZldGNoZWQgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gIH07XHJcblxyXG5cclxuICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgZmV0Y2hlcjoge1xyXG4gICAgICAgICAgICB0eXBlOiBPYmplY3QsXHJcbiAgICAgICAgICAgICdkZWZhdWx0JzogbnVsbFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZmV0Y2hpbmc6IHtcclxuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgICAgICAgZGVmYXVsdDogZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHdhdGNoOiB7XHJcbiAgICAgICAgICAnZmV0Y2hlci5mZXRjaGluZyc6IGZ1bmN0aW9uKHRvLCBmcm9tKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5zZXRGZXRjaGluZygpXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZmV0Y2hpbmc6IGZ1bmN0aW9uKHRvLCBmcm9tKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5zZXRGZXRjaGluZygpXHJcbiAgICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIGRhdGE6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICBzaG93RmV0Y2hpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIGRlbGF5ZWRGZXRjaGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgdGltZXI6IG51bGxcclxuICAgICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgbW91bnRlZCgpIHtcclxuICAgICAgICAgIHRoaXMuc2V0RmV0Y2hpbmcoKTtcclxuICAgICAgfSxcclxuICAgICAgbWV0aG9kczoge1xyXG4gICAgICAgICAgZmV0Y2hNb3JlKCkge1xyXG4gICAgICAgICAgICAgIHRoaXMuJHBhcmVudC5mZXRjaE1vcmUoKTtcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBzZXRGZXRjaGluZygpIHtcclxuICAgICAgICAgICAgICAvLyBBcmUgd2UgY3VycmVudGx5IGZldGNoaW5nP1xyXG4gICAgICAgICAgICAgIGxldCBzaG93RmV0Y2hpbmcgPSAodGhpcy5mZXRjaGVyICE9PSBudWxsICYmIHRoaXMuZmV0Y2hlci5mZXRjaGluZykgfHwgdGhpcy5mZXRjaGluZztcclxuICAgICAgICAgICAgICBpZihzaG93RmV0Y2hpbmcgJiYgIXRoaXMuc2hvd0ZldGNoaW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgIC8vIEZldGNoaW5nIGlzIGJlY29taW5nIGFjdGl2ZVxyXG4gICAgICAgICAgICAgICAgICB0aGlzLnRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlbGF5ZWRGZXRjaGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgIH0sIDEwMDApXHJcbiAgICAgICAgICAgICAgfSBlbHNlIGlmKCFzaG93RmV0Y2hpbmcgJiYgdGhpcy5zaG93RmV0Y2hpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZXIpO1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLnRpbWUgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLmRlbGF5ZWRGZXRjaGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB0aGlzLnNob3dGZXRjaGluZyA9IHNob3dGZXRjaGluZztcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gIH07XHJcblxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cclxuXHJcbkBpbXBvcnQgJy4uLy4uLy4uL3NpdGUvc2Fzcy9tb2R1bGVzL19jb2xvcnMnO1xyXG5cclxuZGl2LmZldGNoaW5nIHtcclxuICBoZWlnaHQ6IDI4cHg7XHJcbiAgbWFyZ2luOiAxZW0gMDtcclxuXHJcbiAgcCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICBjb2xvcjogJGNvbXA7XHJcbiAgICBwYWRkaW5nLXRvcDogMnB4O1xyXG4gIH1cclxufVxyXG5cclxuLm1vcmUge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgYnV0dG9uIHtcclxuICAgIGZvbnQtc2l6ZTogMC44ZW07XHJcbiAgICBoZWlnaHQ6IDI4cHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG59XHJcblxyXG48L3N0eWxlPiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiZGl2LmNsLXF1aXoge1xcbiAgLW1vei1ib3gtc2hhZG93OiAzcHggM3B4IDhweCAjY2NjO1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAzcHggM3B4IDhweCAjY2NjO1xcbiAgYm94LXNoYWRvdzogM3B4IDNweCA4cHggI2NjYztcXG59XFxuXFxuZGl2LmNsLXF1aXoge1xcbiAgYm9yZGVyOiBzb2xpZCAjY2NjY2NjIDFwdDtcXG4gIHBhZGRpbmc6IDZweDtcXG4gIG1hcmdpbjogMWVtIDA7XFxuICBtaW4taGVpZ2h0OiAxNWVtO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYmFja2dyb3VuZDogI2U4ZjdmMztcXG59XFxuXFxuZGl2LmNsLXF1aXogPiBkaXYge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbmRpdi5jbC1xdWl6ID4gZGl2LmNvbnRlbnQge1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuZGl2LmNsLXF1aXogZGl2LmNsLXJlc3VsdHMge1xcbiAgd2lkdGg6IDgwJTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG5kaXYuY2wtcXVpeiBoMiB7XFxuICBib3JkZXI6IDA7XFxuICBtYXJnaW4tdG9wOiAxNHB4O1xcbn1cXG5cXG5kaXYuY2wtcXVpeiBwLmFuc3dlciB7XFxuICBtYXJnaW4tbGVmdDogNC4zcmVtO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIHRleHQtaW5kZW50OiAtNHJlbTtcXG59XFxuXFxuZGl2LmNsLXF1aXogcC5hbnN3ZXIgc3BhbiB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuZGl2LmNsLXF1aXogZGl2LmNsLW11bHRpIHtcXG4gIG1hcmdpbjogMWVtIDA7XFxuICBwYWRkaW5nOiAwIDAgMCAzZW07XFxufVxcblxcbmRpdi5jbC1xdWl6IGRpdi5jbC1tdWx0aSBwIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuZGl2LmNsLXF1aXogcC5kb25lIHtcXG4gIGJhY2tncm91bmQ6ICNjNDE0MjU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbmRpdi5jbC1xdWl6IGJ1dHRvbiB7XFxuICB3aWR0aDogMTBlbTtcXG59XFxuXFxuZGl2LmNsLXF1aXogdHIuYmVzdCB0ZCB7XFxuICBiYWNrZ3JvdW5kOiAjZWVmZmVlO1xcbn1cXG5cXG5kaXYuY2wtcXVpeiBkaXYucHJldmlld2VyIHtcXG4gIGNsZWFyOiBib3RoO1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG5kaXYuY2wtcXVpeiBkaXYucHJldmlld2VyIGgzIHtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtc2l6ZTogMS4yZW07XFxufVxcblxcbmRpdi5jbC1xdWl6IGRpdi5wcmV2aWV3ZXIgdWwge1xcbiAgbWFyZ2luLXRvcDogMDtcXG59XFxuXFxuZGl2LmNsLXF1aXogZGl2LnByZXZpZXcge1xcbiAgbWFyZ2luOiAwIDAgMWVtIDA7XFxufVxcblxcbmRpdi5jbC1xdWl6IGRpdi5wcmV2aWV3IGhyIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuZGl2LmNsLXF1aXogZGl2LnByZXZpZXcgaDMge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5kaXYuY2wtcXVpeiBkaXYucHJldmlldyBwLnByZXZpZXcge1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgbWFyZ2luLXRvcDogMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NTBweCkge1xcbiAgI3F1aXoge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcXG4gIH1cXG59XFxuXFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG5kaXYuY2wtYWJvdXRbZGF0YS12LWQ5ODExNDJjXSB7XFxuICBtYXJnaW46IDFlbSBhdXRvO1xcbiAgZGlzcGxheTogdGFibGU7XFxufVxcbmRpdi5jbC1hYm91dCBwW2RhdGEtdi1kOTgxMTQyY10ge1xcbiAgZGlzcGxheTogdGFibGUtcm93O1xcbn1cXG5kaXYuY2wtYWJvdXQgcCBzcGFuW2RhdGEtdi1kOTgxMTQyY10ge1xcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcbmRpdi5jbC1hYm91dCBwIHNwYW5bZGF0YS12LWQ5ODExNDJjXTpmaXJzdC1jaGlsZCB7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG4gIHBhZGRpbmctcmlnaHQ6IDFlbTtcXG59XFxudHJbZGF0YS12LWQ5ODExNDJjXSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbnRyW2RhdGEtdi1kOTgxMTQyY106Zmlyc3QtY2hpbGQge1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG50ci5zZWxlY3RlZCB0ZFtkYXRhLXYtZDk4MTE0MmNdIHtcXG4gIGJhY2tncm91bmQ6ICM4OGZmZmY7XFxufVxcblxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxudGFibGUgdGRbZGF0YS12LWMyNjhkZjk2XSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbnRhYmxlIHRkW2RhdGEtdi1jMjY4ZGY5Nl06bnRoLWNoaWxkKDEpLFxcbnRhYmxlIHRkW2RhdGEtdi1jMjY4ZGY5Nl06bnRoLWNoaWxkKDIpLFxcbnRhYmxlIHRkW2RhdGEtdi1jMjY4ZGY5Nl06bnRoLWNoaWxkKDMpLFxcbnRhYmxlIHRkW2RhdGEtdi1jMjY4ZGY5Nl06bnRoLWNoaWxkKDQpIHtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcblxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuZGl2LmZldGNoaW5nW2RhdGEtdi00M2IyNmJjYl0ge1xcbiAgaGVpZ2h0OiAyOHB4O1xcbiAgbWFyZ2luOiAxZW0gMDtcXG59XFxuZGl2LmZldGNoaW5nIHBbZGF0YS12LTQzYjI2YmNiXSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBjb2xvcjogI2M0MTQyNTtcXG4gIHBhZGRpbmctdG9wOiAycHg7XFxufVxcbi5tb3JlW2RhdGEtdi00M2IyNmJjYl0ge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4ubW9yZSBidXR0b25bZGF0YS12LTQzYjI2YmNiXSB7XFxuICBmb250LXNpemU6IDAuOGVtO1xcbiAgaGVpZ2h0OiAyOHB4O1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCJ2YXIgbWFwID0ge1xuXHRcIi4vYWZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FmLmpzXCIsXG5cdFwiLi9hZi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYWYuanNcIixcblx0XCIuL2FyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci5qc1wiLFxuXHRcIi4vYXItZHpcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWR6LmpzXCIsXG5cdFwiLi9hci1kei5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItZHouanNcIixcblx0XCIuL2FyLWt3XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1rdy5qc1wiLFxuXHRcIi4vYXIta3cuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWt3LmpzXCIsXG5cdFwiLi9hci1seVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItbHkuanNcIixcblx0XCIuL2FyLWx5LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1seS5qc1wiLFxuXHRcIi4vYXItbWFcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLW1hLmpzXCIsXG5cdFwiLi9hci1tYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItbWEuanNcIixcblx0XCIuL2FyLXNhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1zYS5qc1wiLFxuXHRcIi4vYXItc2EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLXNhLmpzXCIsXG5cdFwiLi9hci10blwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItdG4uanNcIixcblx0XCIuL2FyLXRuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci10bi5qc1wiLFxuXHRcIi4vYXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLmpzXCIsXG5cdFwiLi9helwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXouanNcIixcblx0XCIuL2F6LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hei5qc1wiLFxuXHRcIi4vYmVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JlLmpzXCIsXG5cdFwiLi9iZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYmUuanNcIixcblx0XCIuL2JnXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9iZy5qc1wiLFxuXHRcIi4vYmcuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JnLmpzXCIsXG5cdFwiLi9ibVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm0uanNcIixcblx0XCIuL2JtLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ibS5qc1wiLFxuXHRcIi4vYm5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JuLmpzXCIsXG5cdFwiLi9ibi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm4uanNcIixcblx0XCIuL2JvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9iby5qc1wiLFxuXHRcIi4vYm8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JvLmpzXCIsXG5cdFwiLi9iclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYnIuanNcIixcblx0XCIuL2JyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ici5qc1wiLFxuXHRcIi4vYnNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JzLmpzXCIsXG5cdFwiLi9icy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYnMuanNcIixcblx0XCIuL2NhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jYS5qc1wiLFxuXHRcIi4vY2EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2NhLmpzXCIsXG5cdFwiLi9jc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3MuanNcIixcblx0XCIuL2NzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jcy5qc1wiLFxuXHRcIi4vY3ZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2N2LmpzXCIsXG5cdFwiLi9jdi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3YuanNcIixcblx0XCIuL2N5XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jeS5qc1wiLFxuXHRcIi4vY3kuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2N5LmpzXCIsXG5cdFwiLi9kYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGEuanNcIixcblx0XCIuL2RhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kYS5qc1wiLFxuXHRcIi4vZGVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLmpzXCIsXG5cdFwiLi9kZS1hdFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUtYXQuanNcIixcblx0XCIuL2RlLWF0LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kZS1hdC5qc1wiLFxuXHRcIi4vZGUtY2hcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLWNoLmpzXCIsXG5cdFwiLi9kZS1jaC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUtY2guanNcIixcblx0XCIuL2RlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kZS5qc1wiLFxuXHRcIi4vZHZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2R2LmpzXCIsXG5cdFwiLi9kdi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZHYuanNcIixcblx0XCIuL2VsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbC5qc1wiLFxuXHRcIi4vZWwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VsLmpzXCIsXG5cdFwiLi9lbi1hdVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tYXUuanNcIixcblx0XCIuL2VuLWF1LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1hdS5qc1wiLFxuXHRcIi4vZW4tY2FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWNhLmpzXCIsXG5cdFwiLi9lbi1jYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tY2EuanNcIixcblx0XCIuL2VuLWdiXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1nYi5qc1wiLFxuXHRcIi4vZW4tZ2IuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWdiLmpzXCIsXG5cdFwiLi9lbi1pZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4taWUuanNcIixcblx0XCIuL2VuLWllLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1pZS5qc1wiLFxuXHRcIi4vZW4taWxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWlsLmpzXCIsXG5cdFwiLi9lbi1pbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4taWwuanNcIixcblx0XCIuL2VuLW56XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1uei5qc1wiLFxuXHRcIi4vZW4tbnouanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLW56LmpzXCIsXG5cdFwiLi9lb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW8uanNcIixcblx0XCIuL2VvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lby5qc1wiLFxuXHRcIi4vZXNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLmpzXCIsXG5cdFwiLi9lcy1kb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMtZG8uanNcIixcblx0XCIuL2VzLWRvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy1kby5qc1wiLFxuXHRcIi4vZXMtdXNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLXVzLmpzXCIsXG5cdFwiLi9lcy11cy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMtdXMuanNcIixcblx0XCIuL2VzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy5qc1wiLFxuXHRcIi4vZXRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2V0LmpzXCIsXG5cdFwiLi9ldC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXQuanNcIixcblx0XCIuL2V1XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ldS5qc1wiLFxuXHRcIi4vZXUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2V1LmpzXCIsXG5cdFwiLi9mYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZmEuanNcIixcblx0XCIuL2ZhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mYS5qc1wiLFxuXHRcIi4vZmlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZpLmpzXCIsXG5cdFwiLi9maS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZmkuanNcIixcblx0XCIuL2ZvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mby5qc1wiLFxuXHRcIi4vZm8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZvLmpzXCIsXG5cdFwiLi9mclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnIuanNcIixcblx0XCIuL2ZyLWNhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci1jYS5qc1wiLFxuXHRcIi4vZnItY2EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLWNhLmpzXCIsXG5cdFwiLi9mci1jaFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnItY2guanNcIixcblx0XCIuL2ZyLWNoLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci1jaC5qc1wiLFxuXHRcIi4vZnIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLmpzXCIsXG5cdFwiLi9meVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnkuanNcIixcblx0XCIuL2Z5LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9meS5qc1wiLFxuXHRcIi4vZ2RcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dkLmpzXCIsXG5cdFwiLi9nZC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2QuanNcIixcblx0XCIuL2dsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nbC5qc1wiLFxuXHRcIi4vZ2wuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dsLmpzXCIsXG5cdFwiLi9nb20tbGF0blwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ29tLWxhdG4uanNcIixcblx0XCIuL2dvbS1sYXRuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nb20tbGF0bi5qc1wiLFxuXHRcIi4vZ3VcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2d1LmpzXCIsXG5cdFwiLi9ndS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ3UuanNcIixcblx0XCIuL2hlXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oZS5qc1wiLFxuXHRcIi4vaGUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hlLmpzXCIsXG5cdFwiLi9oaVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaGkuanNcIixcblx0XCIuL2hpLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oaS5qc1wiLFxuXHRcIi4vaHJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hyLmpzXCIsXG5cdFwiLi9oci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHIuanNcIixcblx0XCIuL2h1XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9odS5qc1wiLFxuXHRcIi4vaHUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2h1LmpzXCIsXG5cdFwiLi9oeS1hbVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHktYW0uanNcIixcblx0XCIuL2h5LWFtLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oeS1hbS5qc1wiLFxuXHRcIi4vaWRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2lkLmpzXCIsXG5cdFwiLi9pZC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaWQuanNcIixcblx0XCIuL2lzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pcy5qc1wiLFxuXHRcIi4vaXMuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2lzLmpzXCIsXG5cdFwiLi9pdFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXQuanNcIixcblx0XCIuL2l0LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pdC5qc1wiLFxuXHRcIi4vamFcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2phLmpzXCIsXG5cdFwiLi9qYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvamEuanNcIixcblx0XCIuL2p2XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9qdi5qc1wiLFxuXHRcIi4vanYuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2p2LmpzXCIsXG5cdFwiLi9rYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva2EuanNcIixcblx0XCIuL2thLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rYS5qc1wiLFxuXHRcIi4va2tcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2trLmpzXCIsXG5cdFwiLi9ray5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva2suanNcIixcblx0XCIuL2ttXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rbS5qc1wiLFxuXHRcIi4va20uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ttLmpzXCIsXG5cdFwiLi9rblwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva24uanNcIixcblx0XCIuL2tuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rbi5qc1wiLFxuXHRcIi4va29cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2tvLmpzXCIsXG5cdFwiLi9rby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva28uanNcIixcblx0XCIuL2t5XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9reS5qc1wiLFxuXHRcIi4va3kuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2t5LmpzXCIsXG5cdFwiLi9sYlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbGIuanNcIixcblx0XCIuL2xiLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sYi5qc1wiLFxuXHRcIi4vbG9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2xvLmpzXCIsXG5cdFwiLi9sby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbG8uanNcIixcblx0XCIuL2x0XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sdC5qc1wiLFxuXHRcIi4vbHQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2x0LmpzXCIsXG5cdFwiLi9sdlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbHYuanNcIixcblx0XCIuL2x2LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sdi5qc1wiLFxuXHRcIi4vbWVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21lLmpzXCIsXG5cdFwiLi9tZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWUuanNcIixcblx0XCIuL21pXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9taS5qc1wiLFxuXHRcIi4vbWkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21pLmpzXCIsXG5cdFwiLi9ta1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWsuanNcIixcblx0XCIuL21rLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tay5qc1wiLFxuXHRcIi4vbWxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21sLmpzXCIsXG5cdFwiLi9tbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWwuanNcIixcblx0XCIuL21uXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tbi5qc1wiLFxuXHRcIi4vbW4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21uLmpzXCIsXG5cdFwiLi9tclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXIuanNcIixcblx0XCIuL21yLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tci5qc1wiLFxuXHRcIi4vbXNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21zLmpzXCIsXG5cdFwiLi9tcy1teVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXMtbXkuanNcIixcblx0XCIuL21zLW15LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tcy1teS5qc1wiLFxuXHRcIi4vbXMuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21zLmpzXCIsXG5cdFwiLi9tdFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXQuanNcIixcblx0XCIuL210LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tdC5qc1wiLFxuXHRcIi4vbXlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL215LmpzXCIsXG5cdFwiLi9teS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXkuanNcIixcblx0XCIuL25iXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9uYi5qc1wiLFxuXHRcIi4vbmIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25iLmpzXCIsXG5cdFwiLi9uZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmUuanNcIixcblx0XCIuL25lLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9uZS5qc1wiLFxuXHRcIi4vbmxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25sLmpzXCIsXG5cdFwiLi9ubC1iZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmwtYmUuanNcIixcblx0XCIuL25sLWJlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubC1iZS5qc1wiLFxuXHRcIi4vbmwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25sLmpzXCIsXG5cdFwiLi9ublwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbm4uanNcIixcblx0XCIuL25uLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubi5qc1wiLFxuXHRcIi4vcGEtaW5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3BhLWluLmpzXCIsXG5cdFwiLi9wYS1pbi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcGEtaW4uanNcIixcblx0XCIuL3BsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wbC5qc1wiLFxuXHRcIi4vcGwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3BsLmpzXCIsXG5cdFwiLi9wdFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcHQuanNcIixcblx0XCIuL3B0LWJyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wdC1ici5qc1wiLFxuXHRcIi4vcHQtYnIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3B0LWJyLmpzXCIsXG5cdFwiLi9wdC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcHQuanNcIixcblx0XCIuL3JvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9yby5qc1wiLFxuXHRcIi4vcm8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3JvLmpzXCIsXG5cdFwiLi9ydVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcnUuanNcIixcblx0XCIuL3J1LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ydS5qc1wiLFxuXHRcIi4vc2RcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NkLmpzXCIsXG5cdFwiLi9zZC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2QuanNcIixcblx0XCIuL3NlXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zZS5qc1wiLFxuXHRcIi4vc2UuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NlLmpzXCIsXG5cdFwiLi9zaVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2kuanNcIixcblx0XCIuL3NpLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zaS5qc1wiLFxuXHRcIi4vc2tcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NrLmpzXCIsXG5cdFwiLi9zay5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2suanNcIixcblx0XCIuL3NsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zbC5qc1wiLFxuXHRcIi4vc2wuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NsLmpzXCIsXG5cdFwiLi9zcVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3EuanNcIixcblx0XCIuL3NxLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zcS5qc1wiLFxuXHRcIi4vc3JcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NyLmpzXCIsXG5cdFwiLi9zci1jeXJsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zci1jeXJsLmpzXCIsXG5cdFwiLi9zci1jeXJsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zci1jeXJsLmpzXCIsXG5cdFwiLi9zci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3IuanNcIixcblx0XCIuL3NzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zcy5qc1wiLFxuXHRcIi4vc3MuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NzLmpzXCIsXG5cdFwiLi9zdlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3YuanNcIixcblx0XCIuL3N2LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zdi5qc1wiLFxuXHRcIi4vc3dcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3N3LmpzXCIsXG5cdFwiLi9zdy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3cuanNcIixcblx0XCIuL3RhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90YS5qc1wiLFxuXHRcIi4vdGEuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RhLmpzXCIsXG5cdFwiLi90ZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGUuanNcIixcblx0XCIuL3RlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ZS5qc1wiLFxuXHRcIi4vdGV0XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ZXQuanNcIixcblx0XCIuL3RldC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGV0LmpzXCIsXG5cdFwiLi90Z1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGcuanNcIixcblx0XCIuL3RnLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90Zy5qc1wiLFxuXHRcIi4vdGhcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RoLmpzXCIsXG5cdFwiLi90aC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGguanNcIixcblx0XCIuL3RsLXBoXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90bC1waC5qc1wiLFxuXHRcIi4vdGwtcGguanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RsLXBoLmpzXCIsXG5cdFwiLi90bGhcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RsaC5qc1wiLFxuXHRcIi4vdGxoLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90bGguanNcIixcblx0XCIuL3RyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ci5qc1wiLFxuXHRcIi4vdHIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RyLmpzXCIsXG5cdFwiLi90emxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bC5qc1wiLFxuXHRcIi4vdHpsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90emwuanNcIixcblx0XCIuL3R6bVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHptLmpzXCIsXG5cdFwiLi90em0tbGF0blwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHptLWxhdG4uanNcIixcblx0XCIuL3R6bS1sYXRuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90em0tbGF0bi5qc1wiLFxuXHRcIi4vdHptLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90em0uanNcIixcblx0XCIuL3VnLWNuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91Zy1jbi5qc1wiLFxuXHRcIi4vdWctY24uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VnLWNuLmpzXCIsXG5cdFwiLi91a1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdWsuanNcIixcblx0XCIuL3VrLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ay5qc1wiLFxuXHRcIi4vdXJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VyLmpzXCIsXG5cdFwiLi91ci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXIuanNcIixcblx0XCIuL3V6XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ei5qc1wiLFxuXHRcIi4vdXotbGF0blwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXotbGF0bi5qc1wiLFxuXHRcIi4vdXotbGF0bi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXotbGF0bi5qc1wiLFxuXHRcIi4vdXouanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3V6LmpzXCIsXG5cdFwiLi92aVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdmkuanNcIixcblx0XCIuL3ZpLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS92aS5qc1wiLFxuXHRcIi4veC1wc2V1ZG9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3gtcHNldWRvLmpzXCIsXG5cdFwiLi94LXBzZXVkby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUveC1wc2V1ZG8uanNcIixcblx0XCIuL3lvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS95by5qc1wiLFxuXHRcIi4veW8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3lvLmpzXCIsXG5cdFwiLi96aC1jblwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtY24uanNcIixcblx0XCIuL3poLWNuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC1jbi5qc1wiLFxuXHRcIi4vemgtaGtcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLWhrLmpzXCIsXG5cdFwiLi96aC1oay5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtaGsuanNcIixcblx0XCIuL3poLXR3XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC10dy5qc1wiLFxuXHRcIi4vemgtdHcuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLXR3LmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdHZhciBpZCA9IG1hcFtyZXFdO1xuXHRpZighKGlkICsgMSkpIHsgLy8gY2hlY2sgZm9yIG51bWJlciBvciBzdHJpbmdcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIGlkO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZSBzeW5jIHJlY3Vyc2l2ZSBeXFxcXC5cXFxcLy4qJFwiOyIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICBbXG4gICAgICBfYyhcImxhYmVsXCIsIHsgcmVmOiBcInN0dWRlbnRzLW9ubHlcIiwgc3RhdGljU3R5bGU6IHsgZGlzcGxheTogXCJub25lXCIgfSB9LCBbXG4gICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgdmFsdWU6IF92bS5zdHVkZW50cyxcbiAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzdHVkZW50c1wiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXSxcbiAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImNoZWNrYm94XCIgfSxcbiAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgY2hlY2tlZDogQXJyYXkuaXNBcnJheShfdm0uc3R1ZGVudHMpXG4gICAgICAgICAgICAgID8gX3ZtLl9pKF92bS5zdHVkZW50cywgbnVsbCkgPiAtMVxuICAgICAgICAgICAgICA6IF92bS5zdHVkZW50c1xuICAgICAgICAgIH0sXG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIGNoYW5nZTogW1xuICAgICAgICAgICAgICBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICB2YXIgJCRhID0gX3ZtLnN0dWRlbnRzLFxuICAgICAgICAgICAgICAgICAgJCRlbCA9ICRldmVudC50YXJnZXQsXG4gICAgICAgICAgICAgICAgICAkJGMgPSAkJGVsLmNoZWNrZWQgPyB0cnVlIDogZmFsc2VcbiAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSgkJGEpKSB7XG4gICAgICAgICAgICAgICAgICB2YXIgJCR2ID0gbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgJCRpID0gX3ZtLl9pKCQkYSwgJCR2KVxuICAgICAgICAgICAgICAgICAgaWYgKCQkZWwuY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgICAgICAkJGkgPCAwICYmIChfdm0uc3R1ZGVudHMgPSAkJGEuY29uY2F0KFskJHZdKSlcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICQkaSA+IC0xICYmXG4gICAgICAgICAgICAgICAgICAgICAgKF92bS5zdHVkZW50cyA9ICQkYVxuICAgICAgICAgICAgICAgICAgICAgICAgLnNsaWNlKDAsICQkaSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jb25jYXQoJCRhLnNsaWNlKCQkaSArIDEpKSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgX3ZtLnN0dWRlbnRzID0gJCRjXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBfdm0uc3R1ZGVudHNPbmx5Q2hhbmdlZFxuICAgICAgICAgICAgXVxuICAgICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgICAgIF92bS5fdihcIiBTdHVkZW50cyBPbmx5XCIpXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJmZXRjaGVyXCIsXG4gICAgICAgIHsgYXR0cnM6IHsgZmV0Y2hlcjogX3ZtLmZldGNoZXIsIGZldGNoaW5nOiBfdm0uZmV0Y2hpbmcgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX3ZtLl90KFwiZGVmYXVsdFwiLCBudWxsLCB7IHVzZXJzOiBfdm0udXNlcnMsIHN0dWRlbnRzOiBfdm0uc3R1ZGVudHMgfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfdm0udXNlcnMubGVuZ3RoID09IDBcbiAgICAgICAgICAgID8gX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiY2VudGVyYm94IGNvbXAgY2VudGVyXCIgfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICBUaGVyZSBhcmUgY3VycmVudGx5IG5vIG1lbWJlcnMgZW5yb2xsZWQgaW4gdGhpcyBzZWN0aW9uLlwiXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICBdLFxuICAgICAgICAyXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGVudFwiIH0sIFtcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7IHN0YXRpY0NsYXNzOiBcImZ1bGxcIiB9LFxuICAgICAgW1xuICAgICAgICBfYyhcImZldGNoZXJcIiwgeyBhdHRyczogeyBmZXRjaGluZzogX3ZtLmZldGNoaW5nIH0gfSwgW1xuICAgICAgICAgICFfdm0uZmV0Y2hpbmdcbiAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2wtYWJvdXRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcInBcIiwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIkNvdXJzZSBNZW1iZXI6IFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoX3ZtLnVzZXIubmFtZSkpXSlcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwiQXNzaWdubWVudDogXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhfdm0uYXNzaWdubWVudC5uYW1lKSldKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCJRdWl6OiBcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5xdWl6dGFnKSldKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJ0YWJsZVwiLFxuICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJzbWFsbCBjZW50ZXJcIiB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInRyXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInRoXCIsIHsgc3RhdGljQ2xhc3M6IFwiY2VudGVyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiV2hlbiBUYWtlblwiKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiRmluaXNoZWQ/XCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJQb2ludHNcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIk1heFwiKV0pXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLnRyaWVzLCBmdW5jdGlvbih0cmllZCkge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidHJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHRyaWVkLnRva2VuID09PSBfdm0udG9rZW4gPyBcInNlbGVjdGVkXCIgOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIShcImJ1dHRvblwiIGluICRldmVudCkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9rKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5rZXlDb2RlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGVmYXVsdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQua2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zZWxlY3RUcnkodHJpZWQudG9rZW4pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS50aW1lKHRyaWVkLnN0YXJ0KSkpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmVsYXBzZWQodHJpZWQuc3RhcnQsIHRyaWVkLmVuZCkpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KF92bS5fcyh0cmllZC5wb2ludHMpKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoX3ZtLl9zKHRyaWVkLm1heHBvaW50cykpXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfdm0uYW5zd2VycyAhPT0gbnVsbCAmJiBfdm0uYW5zd2Vycy5sZW5ndGggPiAwXG4gICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwidGFibGVcIixcbiAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInNtYWxsIGNlbnRlclwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0clwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIiNcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiUG9pbnRzXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIkFza2VkXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIkFuc3dlcmVkXCIpXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0uYW5zd2VycywgZnVuY3Rpb24oYW5zKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5hbnN3ZXIgIT09IG51bGwgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5zLm51bSA9PT0gX3ZtLmFuc3dlci5udW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwic2VsZWN0ZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhKFwiYnV0dG9uXCIgaW4gJGV2ZW50KSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9rKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQua2V5Q29kZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkZWZhdWx0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LmtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uc2VsZWN0QW5zd2VyKGFucy5udW0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihfdm0uX3MoYW5zLm51bSkpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KF92bS5fcyhhbnMucG9pbnRzKSldKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0udGltZShhbnMucXVlc3Rpb250aW1lKSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0udGltZShhbnMuYW5zd2VydGltZSkpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfdm0uYW5zd2VycyAhPT0gbnVsbCAmJiBfdm0uYW5zd2Vycy5sZW5ndGggPT09IDBcbiAgICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImNlbnRlcmJveCBwcmltYXJ5IGNlbnRlclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIk5vIGFuc3dlcnMgcHJvdmlkZWQgZm9yIHRoaXMgcXVpeiB0cnkuXCIpXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfdm0uYW5zd2VyICE9PSBudWxsXG4gICAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2wtcXVpelwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImgyXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiUXVlc3Rpb246IFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uYW5zd2VyLm51bSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgb2YgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5hbnN3ZXJzLmxlbmd0aClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJxdWVzdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyBpbm5lckhUTUw6IF92bS5fcyhfdm0uYW5zd2VyLnF1ZXN0aW9uKSB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImgzXCIsIFtfdm0uX3YoXCJTdHVkZW50IGFuc3dlcjpcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInByZVwiLCB7IHN0YXRpY0NsYXNzOiBcImNvZGVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmFuc3dlci5zdHVkZW50YW5zd2VyKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5hbnN3ZXIucmlnaHRhbnN3ZXIubGVuZ3RoID4gMFxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaDNcIiwgW192bS5fdihcIkNvcnJlY3QgYW5zd2VyOlwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwicHJlXCIsIHsgc3RhdGljQ2xhc3M6IFwiY29kZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uYW5zd2VyLnJpZ2h0YW5zd2VyKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgIF0pXG4gICAgICBdLFxuICAgICAgMVxuICAgIClcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGVudFwiIH0sIFtcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7IHN0YXRpY0NsYXNzOiBcImZ1bGxcIiB9LFxuICAgICAgW1xuICAgICAgICBfYyhcIm1lbWJlcnNmZXRjaGVyXCIsIHtcbiAgICAgICAgICBhdHRyczogeyBmZXRjaGluZzogX3ZtLnJlc3VsdHMgPT09IG51bGwgfSxcbiAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAga2V5OiBcImRlZmF1bHRcIixcbiAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKGZldGNoZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidGFibGVcIixcbiAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJzbWFsbFwiIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidHJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiVXNlclwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJOYW1lXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIkVtYWlsXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIlJvbGVcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5xdWl6VGFncywgZnVuY3Rpb24odGFnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwidGhcIiwgeyBzdGF0aWNDbGFzczogXCJzbWFsbFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3ModGFnKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnJlc3VsdHMgIT09IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwidGhcIiwgW192bS5fdihcIlRvdGFsXCIpXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woZmV0Y2hlci51c2VycywgZnVuY3Rpb24odXNlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInRyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoX3ZtLl9zKHVzZXIudXNlcklkKSldKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihfdm0uX3ModXNlci5uYW1lKSldKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihfdm0uX3ModXNlci5lbWFpbCkpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoX3ZtLl9zKHVzZXIucm9sZU5hbWUoKSkpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLnF1aXpUYWdzLCBmdW5jdGlvbih0YWcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5zdGF0dXModXNlciwgdGFnKSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5xdWl6UmVzdWx0KHVzZXIsIHRhZykgIT09IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyb3V0ZXItbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgdG86IF92bS5saW5rKHVzZXIsIHRhZykgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfYyhcImltZ1wiLCB7IGF0dHJzOiB7IHNyYzogX3ZtLmV5ZSB9IH0pXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5yZXN1bHRzICE9PSBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwidGRcIiwgW192bS5fdihfdm0uX3MoX3ZtLnRvdGFsKHVzZXIpKSldKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF0pXG4gICAgICAgIH0pXG4gICAgICBdLFxuICAgICAgMVxuICAgIClcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIFtcbiAgICBfdm0ucXVpei5sZW5ndGggPiAxXG4gICAgICA/IF9jKFwiaDJcIiwgW1xuICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgIFwiUXVlc3Rpb24gXCIgK1xuICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnF1aXoucXVlc3Rpb24pICtcbiAgICAgICAgICAgICAgXCIgb2YgXCIgK1xuICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnF1aXoubGVuZ3RoKVxuICAgICAgICAgIClcbiAgICAgICAgXSlcbiAgICAgIDogX3ZtLl9lKCksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcbiAgICAgIFwiZm9ybVwiLFxuICAgICAge1xuICAgICAgICByZWY6IFwiZm9ybVwiLFxuICAgICAgICBhdHRyczogeyBtZXRob2Q6IFwicG9zdFwiIH0sXG4gICAgICAgIG9uOiB7XG4gICAgICAgICAgc3VibWl0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICByZXR1cm4gX3ZtLnN1Ym1pdCgkZXZlbnQpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IGRvbVByb3BzOiB7IGlubmVySFRNTDogX3ZtLl9zKF92bS5xdWl6LmFuc3dlcikgfSB9KSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX3ZtLnF1aXoucXVlc3Rpb24gPCBfdm0ucXVpei5sZW5ndGhcbiAgICAgICAgICA/IF9jKFwicFwiLCBbXG4gICAgICAgICAgICAgIF9jKFwiYnV0dG9uXCIsIHsgYXR0cnM6IHsgdHlwZTogXCJzdWJtaXRcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCJOZXh0IFF1ZXN0aW9uXCIpXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgIF1cbiAgICApLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX3ZtLnF1aXoucXVlc3Rpb24gPj0gX3ZtLnF1aXoubGVuZ3RoXG4gICAgICA/IF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiZG9uZVwiIH0sIFtfdm0uX3YoXCJUaGlzIFF1aXogaXMgQ29tcGxldGVcIildKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJjZW50ZXJcIiB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihcIllvdSBtYXkgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnJldGFrZSgkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJyZXRha2UgdGhlIHF1aXpcIildXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBpZiB5b3Ugd2lzaFwiKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJyZXN1bHRzXCIsIHsgYXR0cnM6IHsgcXVpejogX3ZtLnF1aXogfSB9KVxuICAgICAgICAgIF0sXG4gICAgICAgICAgMVxuICAgICAgICApXG4gICAgICA6IF92bS5fZSgpXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfdm0uX20oMClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIFtcbiAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImNlbnRlcmJveCBjb21wIGNlbnRlclwiIH0sIFtcbiAgICAgICAgX3ZtLl92KFwiVGhlIHF1aXogaXMgY2xvc2VkIGFuZCBub3QgYXZhaWxhYmxlIGF0IHRoaXMgdGltZS5cIilcbiAgICAgIF0pXG4gICAgXSlcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIFtcbiAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJjZW50ZXJib3ggY29tcFwiIH0sIFtcbiAgICAgIF92bS5fdihcbiAgICAgICAgXCJUaGUgcXVpeiBoYXMgZXhwaXJlZCBhbmQgY2FuIG5vIGxvbmdlciBiZSB0YWtlbi4gUXVpenplcyBleHBpcmUgYXQgdGhlIHRpbWVcXG4gICAgdGhlIGFzc2lnbm1lbnQgaXMgZHVlLiBcIlxuICAgICAgKVxuICAgIF0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJwXCIsIFtcbiAgICAgIF92bS5fdihcbiAgICAgICAgXCJZb3UgY2FuIHByb2NlZWQgdGhyb3VnaCB0aGUgcXVpeiBmb3IgcHJhY3RpY2UgcHVycG9zZXMsIGJ1dCBuZXcgZ3JhZGVzIGFuZFxcbiAgICBzdWJtaXNzaW9ucyB3aWxsIG5vdCBiZSBwb3NzaWJsZS5cIlxuICAgICAgKVxuICAgIF0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJwXCIsIFtcbiAgICAgIF92bS5fdihcIldoZW4gcmVhZHksIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImFcIixcbiAgICAgICAge1xuICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgIF92bS5wcm9jZWVkKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtfdm0uX3YoXCJjbGljayB0byBwcm9jZWVkIHRvIHRoZSBxdWl6LlwiKV1cbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgWW91IGNhbiBhbHNvXFxuICAgIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImFcIixcbiAgICAgICAge1xuICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgIF92bS5yZXN1bHRzKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtfdm0uX3YoXCJqdW1wIGRpcmVjdGx5IHRvIHlvdXIgcXVpeiByZXN1bHRzLlwiKV1cbiAgICAgIClcbiAgICBdKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgW1xuICAgIF9jKFwiZGl2XCIsIHsgZG9tUHJvcHM6IHsgaW5uZXJIVE1MOiBfdm0uX3MoX3ZtLnF1aXouc3BsYXNoKSB9IH0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX3ZtLnF1aXoubGlnaHRuaW5nID09PSBudWxsXG4gICAgICA/IF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImNlbnRlclwiIH0sIFtcbiAgICAgICAgICBfdm0uX3YoXCJUaGlzIHF1aXogaGFzIG5vIHNwZWNpZmllZCB0aW1lIGxpbWl0LlwiKVxuICAgICAgICBdKVxuICAgICAgOiBfdm0uX2UoKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF92bS5xdWl6LmxpZ2h0bmluZyAhPT0gbnVsbFxuICAgICAgPyBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJjZW50ZXJib3ggc2Vjb25kYSBjZW50ZXJcIiB9LCBbXG4gICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgXCJUaGlzIGlzIGEgbGlnaHRuaW5nIHF1aXouXFxuICAgIFlvdSBoYXZlIFwiICtcbiAgICAgICAgICAgICAgX3ZtLl9zKF92bS5xdWl6LmxpZ2h0bmluZykgK1xuICAgICAgICAgICAgICBcIiBzZWNvbmRzIHRvIGFuc3dlciBlYWNoIHF1ZXN0aW9uLlwiXG4gICAgICAgICAgKVxuICAgICAgICBdKVxuICAgICAgOiBfdm0uX2UoKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFwicFwiLCBbXG4gICAgICBfdm0uX3YoXCJXaGVuIHJlYWR5LCBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJhXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICBfdm0ucHJvY2VlZCgpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbX3ZtLl92KFwiY2xpY2sgdG8gcHJvY2VlZCB0byB0aGUgcXVpei5cIildXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFlvdSBjYW4gYWxzb1xcbiAgICBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJhXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICBfdm0ucmVzdWx0cygpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbX3ZtLl92KFwianVtcCBkaXJlY3RseSB0byB5b3VyIHF1aXogcmVzdWx0cy5cIildXG4gICAgICApXG4gICAgXSlcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicHJldmlld1wiIH0sIFtcbiAgICBfdm0ucXVlc3Rpb24gIT09IG51bGxcbiAgICAgID8gX2MoXCJkaXZcIiwgW1xuICAgICAgICAgIF92bS5xdWl6Lmxlbmd0aCA+IDFcbiAgICAgICAgICAgID8gX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwicHJldmlld1wiIH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICBcIlByZXZpZXcgb2YgXCIgK1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnF1aXoucXVlc3Rpb24pICtcbiAgICAgICAgICAgICAgICAgICAgXCIuIEF2YWlsYWJsZSB0byBzdGFmZiBvbmx5LlwiXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJmb3JtXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHJlZjogXCJmb3JtXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7IG1ldGhvZDogXCJwb3N0XCIgfSxcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBzdWJtaXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uc3VibWl0KCRldmVudClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiaGlkZGVuXCIsIG5hbWU6IFwicXVlc3Rpb24tdGltZVwiIH0sXG4gICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS50aW1lIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgZG9tUHJvcHM6IHsgaW5uZXJIVE1MOiBfdm0uX3MoX3ZtLnF1ZXN0aW9uKSB9IH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfdm0uX20oMCksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiaHJcIiksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiaDNcIiwgW192bS5fdihcIkFuc3dlcnNcIildKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX3ZtLl9sKF92bS5hbnN3ZXJzLCBmdW5jdGlvbihhbnN3ZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBkb21Qcm9wczogeyBpbm5lckhUTUw6IF92bS5fcyhhbnN3ZXIpIH0gfSlcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX3ZtLmNvbW1lbnQgIT09IG51bGxcbiAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJoM1wiLCBbX3ZtLl92KFwiQ29tbWVudFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY2VudGVyYm94IHByaW1hcnlcIixcbiAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyBpbm5lckhUTUw6IF92bS5fcyhfdm0uY29tbWVudCkgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMlxuICAgICAgICAgIClcbiAgICAgICAgXSlcbiAgICAgIDogX3ZtLl9lKClcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwicFwiLCBbXG4gICAgICBfYyhcImJ1dHRvblwiLCB7IGF0dHJzOiB7IHR5cGU6IFwic3VibWl0XCIgfSB9LCBbX3ZtLl92KFwiU3VibWl0XCIpXSlcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJwcmV2aWV3ZXJcIiB9LCBbXG4gICAgX2MoXCJoMlwiLCBbX3ZtLl92KFwiU3RhZmYgUXVlc3Rpb24gUHJldmlld3NcIildKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF92bS5fbSgwKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHsgc3RhdGljQ2xhc3M6IFwic21hbGxcIiB9LFxuICAgICAgX3ZtLl9sKF92bS5wcmV2aWV3cywgZnVuY3Rpb24ocXVlc3Rpb24pIHtcbiAgICAgICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsga2V5OiBxdWVzdGlvbi5udW0gfSwgW1xuICAgICAgICAgIF9jKFwiaDNcIiwgW192bS5fdihcIlF1ZXN0aW9uIFwiICsgX3ZtLl9zKHF1ZXN0aW9uLm51bSkpXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBxdWVzdGlvbi5maWxlcy5sZW5ndGggPiAwXG4gICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgIFwidWxcIixcbiAgICAgICAgICAgICAgICBfdm0uX2wocXVlc3Rpb24uZmlsZXMsIGZ1bmN0aW9uKGZpbGUpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcImxpXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnByZXZpZXcoZmlsZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoZmlsZSkpXVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgXSlcbiAgICAgIH0pXG4gICAgKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJwXCIsIFtcbiAgICAgIF92bS5fdihcbiAgICAgICAgXCJUaGVzZSBsaW5rcyBhbGxvdyB5b3UgdG8gcHJldmlldyBxdWl6IHF1ZXN0aW9ucy4gSWYgdGhlIHF1ZXN0aW9uIGlzIHJhbmRvbWx5IHNlbGVjdGVkXFxuICAgICAgZnJvbSBtdWx0aXBsZSBmaWxlcywgdGhlIGZpbGVzIGFwcGVhciBiZWxvdyB0aGUgcXVlc3Rpb24uIFwiXG4gICAgICApLFxuICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwic21hbGxyZWRcIiB9LCBbXG4gICAgICAgIF92bS5fdihcIlRoaXMgcGFydCBvZiB0aGUgcGFnZSBhcHBlYXJzIGZvclxcbnN0YWZmIG1lbWJlcnMgb25seS5cIilcbiAgICAgIF0pXG4gICAgXSlcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIFtcbiAgICBfdm0ucXVlc3Rpb24gIT09IG51bGxcbiAgICAgID8gX2MoXCJkaXZcIiwgW1xuICAgICAgICAgIF92bS5xdWl6Lmxlbmd0aCA+IDFcbiAgICAgICAgICAgID8gX2MoXCJoMlwiLCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgXCJRdWVzdGlvbiBcIiArXG4gICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0ucXVpei5xdWVzdGlvbikgK1xuICAgICAgICAgICAgICAgICAgICBcIiBvZiBcIiArXG4gICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0ucXVpei5sZW5ndGgpXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJmb3JtXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHJlZjogXCJmb3JtXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7IG1ldGhvZDogXCJwb3N0XCIgfSxcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBzdWJtaXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uc3VibWl0KCRldmVudClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiaGlkZGVuXCIsIG5hbWU6IFwicXVlc3Rpb24tdGltZVwiIH0sXG4gICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS50aW1lIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgZG9tUHJvcHM6IHsgaW5uZXJIVE1MOiBfdm0uX3MoX3ZtLnF1ZXN0aW9uKSB9IH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfdm0uX20oMClcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApXG4gICAgICAgIF0pXG4gICAgICA6IF92bS5fZSgpXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcInBcIiwgW1xuICAgICAgX2MoXCJidXR0b25cIiwgeyBhdHRyczogeyB0eXBlOiBcInN1Ym1pdFwiIH0gfSwgW192bS5fdihcIlN1Ym1pdFwiKV0pXG4gICAgXSlcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2wtcmVzdWx0c1wiIH0sIFtcbiAgICBfdm0udHJpZXMgIT09IG51bGwgJiYgX3ZtLnRyaWVzLmxlbmd0aCA+IDBcbiAgICAgID8gX2MoXCJkaXZcIiwgW1xuICAgICAgICAgIF9jKFwicFwiLCBbXG4gICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgIFwiWW91ciBjdXJyZW50IGJlc3Qgc2NvcmUgZm9yIHRoaXMgcXVpeiBpcyBcIiArXG4gICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5oaWdoKSArXG4gICAgICAgICAgICAgICAgXCIvXCIgK1xuICAgICAgICAgICAgICAgIF92bS5fcyhfdm0ucXVpei5wb2ludHMpICtcbiAgICAgICAgICAgICAgICBcIi4gVGhlIHN5c3RlbSByZXRhaW5zIHlvdXIgYmVzdFxcbiAgICAgIHJlc3VsdCBhcyB5b3VyIGdyYWRlIGZvciBhIHF1aXouXCJcbiAgICAgICAgICAgIClcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ0YWJsZVwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJzbWFsbCBjZW50ZXJcIiB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfdm0uX20oMCksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF92bS5fbChfdm0udHJpZXMsIGZ1bmN0aW9uKHRyaWVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgXCJ0clwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uaGlnaCA+IDAgJiYgdHJpZWQucG9pbnRzID09PSBfdm0uaGlnaCA/IFwiYmVzdFwiIDogXCJcIlxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KF92bS5fcyhfdm0udGltZSh0cmllZC5zdGFydCkpKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5lbGFwc2VkKHRyaWVkLnN0YXJ0LCB0cmllZC5lbmQpKSlcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihfdm0uX3ModHJpZWQucG9pbnRzKSldKVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiY2FwdGlvblwiLCBbX3ZtLl92KFwiUmVzdWx0cyBmb3IgUXVpelwiKV0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMlxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInBcIiwgW1xuICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICBcIklmIGEgdmFsdWUgaXMgaW5kaWNhdGVkIGluIHRoZSBGaW5pc2hlZD8gY29sdW1uLCB0aGUgcXVpelxcbiAgICB3YXMgY29tcGxldGVkIGluIHRoYXQgYW1vdW50IG9mIHRpbWUgKGluIG1pbnV0ZXMgYW5kIHNlY29uZHMpLlwiXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSlcbiAgICAgICAgXSlcbiAgICAgIDogX3ZtLl9lKCksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfdm0udHJpZXMgIT09IG51bGwgJiYgX3ZtLnRyaWVzLmxlbmd0aCA9PT0gMFxuICAgICAgPyBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJjZW50ZXJib3ggcHJpbWFyeSBjZW50ZXJcIiB9LCBbXG4gICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgXCJZb3UgaGF2ZSBub3QgeWV0IGNvbXBsZXRlZCB0aGUgcXVpeiwgeWV0LCBzbyB5b3UgZG8gbm90IGhhdmUgYSBzY29yZS5cIlxuICAgICAgICAgIClcbiAgICAgICAgXSlcbiAgICAgIDogX3ZtLl9lKClcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwidHJcIiwgW1xuICAgICAgX2MoXCJ0aFwiLCB7IHN0YXRpY0NsYXNzOiBcImNlbnRlclwiIH0sIFtfdm0uX3YoXCJXaGVuIFRha2VuXCIpXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiRmluaXNoZWQ/XCIpXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiUG9pbnRzXCIpXSlcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICBbXG4gICAgICBfdm0uZGVsYXllZEZldGNoaW5nXG4gICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmZXRjaGluZ1wiIH0sIFtcbiAgICAgICAgICAgIF9jKFwicFwiLCBbX3ZtLl92KFwiRmV0Y2hpbmcgZnJvbSBzZXJ2ZXIuLi5cIildKVxuICAgICAgICAgIF0pXG4gICAgICAgIDogX3ZtLl9lKCksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgKF92bS5mZXRjaGVyID09PSBudWxsIHx8ICFfdm0uZmV0Y2hlci5mZXRjaGluZykgJiYgIV92bS5mZXRjaGluZ1xuICAgICAgICA/IF92bS5fdChcImRlZmF1bHRcIilcbiAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0uZmV0Y2hlciAhPT0gbnVsbCAmJiBfdm0uZmV0Y2hlci5tb3JlXG4gICAgICAgID8gX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwibW9yZVwiIH0sIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5mZXRjaE1vcmUoJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW192bS5fdihcIk1PUkVcIildXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSlcbiAgICAgICAgOiBfdm0uX2UoKVxuICAgIF0sXG4gICAgMlxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1F1aXpSZXN1bHRDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ZDk4MTE0MmMmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCIzNTgyYmUxMlwiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUXVpelJlc3VsdENvbXBvbmVudC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1kOTgxMTQyYyZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1F1aXpSZXN1bHRDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ZDk4MTE0MmMmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1F1aXpTdGF0dXNDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9YzI2OGRmOTYmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCIyM2NhY2ZjMlwiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUXVpelN0YXR1c0NvbXBvbmVudC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1jMjY4ZGY5NiZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1F1aXpTdGF0dXNDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9YzI2OGRmOTYmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ZldGNoZXJWdWUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NDNiMjZiY2ImbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCI0NTFlYzFhNFwiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRmV0Y2hlclZ1ZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD00M2IyNmJjYiZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ZldGNoZXJWdWUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NDNiMjZiY2ImbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9NZW1iZXJzRmV0Y2hlckNvbXBvbmVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9M2VhYjQ0ZDImXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vTWVtYmVyc0ZldGNoZXJDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9NZW1iZXJzRmV0Y2hlckNvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXGNoYXJsXFxcXERvY3VtZW50c1xcXFxDbGFzc2VzXFxcXENTRTMzNVxcXFx3ZWItbmV3XFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCczZWFiNDRkMicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCczZWFiNDRkMicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vTWVtYmVyc0ZldGNoZXJDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTNlYWI0NGQyJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzNlYWI0NGQyJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJ2ZW5kb3IvY2wvY291cnNlL2pzL0NvbnNvbGUvTWVtYmVycy9NZW1iZXJzRmV0Y2hlckNvbXBvbmVudC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NZW1iZXJzRmV0Y2hlckNvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL01lbWJlcnNGZXRjaGVyQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NZW1iZXJzRmV0Y2hlckNvbXBvbmVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9M2VhYjQ0ZDImXCIiLCIvKipcclxuICogVXNlIG9mIGxvY2FsIHN0b3JhZ2UgdG8gbWFpbnRhaW4gdGhlIHN0YXRlIG9mXHJcbiAqIFwic3R1ZGVudHMgb25seVwiXHJcbiAqL1xyXG5cclxuY29uc3QgTE9DQUxfU1RPUkFHRV9TVFVERU5UU19PTkxZID0gJ2NsX3N0dWRlbnRzX29ubHknO1xyXG5cclxuZXhwb3J0IGNvbnN0IFN0dWRlbnRzT25seSA9IGZ1bmN0aW9uKCkge1xyXG59XHJcblxyXG5TdHVkZW50c09ubHkuZ2V0ID0gZnVuY3Rpb24oKSB7XHJcblx0Y29uc3QgbG9jYWxTdG9yYWdlID0gd2luZG93LmxvY2FsU3RvcmFnZTtcclxuXHRsZXQgcyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKExPQ0FMX1NUT1JBR0VfU1RVREVOVFNfT05MWSk7XHJcblx0cmV0dXJuIHMgPT09ICd5ZXMnO1xyXG59XHJcblxyXG5TdHVkZW50c09ubHkuc2V0ID0gZnVuY3Rpb24oc3R1ZGVudHMpIHtcclxuXHRjb25zdCBsb2NhbFN0b3JhZ2UgPSB3aW5kb3cubG9jYWxTdG9yYWdlO1xyXG5cdGxvY2FsU3RvcmFnZS5zZXRJdGVtKExPQ0FMX1NUT1JBR0VfU1RVREVOVFNfT05MWSwgc3R1ZGVudHMgPyAneWVzJyA6ICdubycpO1xyXG5cclxufSIsIi8qKlxyXG4gKiBAZmlsZSBNZW1iZXIgb2YgYSBjb3Vyc2VcclxuICogQXR0YWNoZXMgdG8gYSB1c2VyIE9iamVjdFxyXG4gKi9cclxuXHJcbmltcG9ydCB7TWVtYmVyc2hpcH0gZnJvbSAnLi4vLi4vLi4vdXNlcnMvanMvVXNlcnMvTWVtYmVyc2hpcC5qcyc7XHJcblxyXG5sZXQgTWVtYmVyID0gZnVuY3Rpb24oanNvbikge1xyXG4gICAgTWVtYmVyc2hpcC5jYWxsKHRoaXMpO1xyXG5cclxuICAgIGxldCByb2xlID0gJ0cnO1xyXG5cclxuICAgIGlmKGpzb24gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHRoaXMuaWQgPSBqc29uLmlkO1xyXG4gICAgICAgIHRoaXMuc2VtZXN0ZXIgPSBqc29uLnNlbWVzdGVyO1xyXG4gICAgICAgIHRoaXMuc2VjdGlvbiA9IGpzb24uc2VjdGlvbjtcclxuICAgICAgICByb2xlID0ganNvbi5yb2xlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmlkID0gMDsgICAgLy8gU3lzdGVtIG1lbWJlcnNoaXAgSURcclxuICAgICAgICB0aGlzLnNlbWVzdGVyID0gbnVsbDsgICAvLyBTZW1lc3RlciBjb2RlXHJcbiAgICAgICAgdGhpcy5zZWN0aW9uID0gbnVsbDsgIC8vIFNlY3Rpb24gSWRcclxuICAgICAgICByb2xlID0gbnVsbDsgICAgICAgLy8gTWVtYmVyc2hpcCByb2xlXHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5yb2xlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHJvbGU7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zZXRSb2xlID0gZnVuY3Rpb24ocm9sZV8pIHtcclxuICAgICAgICByb2xlID0gcm9sZV87XHJcbiAgICB9XHJcbn1cclxuXHJcbk1lbWJlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKE1lbWJlcnNoaXAucHJvdG90eXBlKTtcclxuTWVtYmVyLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IE1lbWJlcjtcclxuXHJcbi8qKlxyXG4gKiBHZXQgdGhlIGNvdXJzZSBzZWN0aW9uIGZvciBhIG1lbWJlclxyXG4gKiBAcGFyYW0gc3RvcmUgVnVleCBzdG9yZVxyXG4gKiBAcmV0dXJucyB7Kn1cclxuICovXHJcbk1lbWJlci5wcm90b3R5cGUuZ2V0U2VjdGlvbiA9IGZ1bmN0aW9uKHN0b3JlKSB7XHJcbiAgICByZXR1cm4gc3RvcmUuZ2V0dGVyc1snY291cnNlL3NlY3Rpb24nXSh0aGlzLnNlbWVzdGVyLCB0aGlzLnNlY3Rpb24pO1xyXG59XHJcblxyXG4vKipcclxuICogR2V0IGFuIGFzc2lnbm1lbnQgZm9yIGEgbWVtYmVyXHJcbiAqIEBwYXJhbSBzdG9yZSBWdWV4IHN0b3JlXHJcbiAqIEBwYXJhbSBhc3NpZ250YWcgQXNzaWdubWVudCB0YWdcclxuICovXHJcbk1lbWJlci5wcm90b3R5cGUuZ2V0QXNzaWdubWVudCA9IGZ1bmN0aW9uKHN0b3JlLCBhc3NpZ250YWcpIHtcclxuICAgIGNvbnN0IHNlY3Rpb24gPSB0aGlzLmdldFNlY3Rpb24oc3RvcmUpO1xyXG4gICAgcmV0dXJuIHNlY3Rpb24uZ2V0QXNzaWdubWVudChhc3NpZ250YWcpO1xyXG59XHJcblxyXG5cclxuLy8gVGhlIHBvc3NpYmxlIG1lbWJlciByb2xlc1xyXG4vLyBNdXN0IG1hdGNoIHZhbHVlcyBpbiBNZW1iZXIucGhwXHJcbk1lbWJlci5HVUVTVCA9ICdHJzsgICAgIC8vLzwgR3Vlc3QgdXNlciB2aXNpdGluZyB0aGUgc2l0ZVxyXG5NZW1iZXIuVVNFUiA9ICdVJzsgICAgICAvLy88IFN0YW5kYXJkIHVzZXIgZnJvbSBVc2VyLCBkb24ndCB1c2UgZm9yIE1lbWJlclxyXG5NZW1iZXIuRFJPUFBFRCA9ICdEJzsgICAvLy88IFVzZXIgaGFzIGRyb3BwZWQgdGhlIGNvdXJzZVxyXG5NZW1iZXIuU1RVREVOVCA9ICdUJzsgICAvLy88IEVucm9sbGVkIHN0dWRlbnQgaW4gY291cnNlXHJcbk1lbWJlci5TVEFGRiA9ICdTJzsgICAgIC8vLzwgQW55IGNvdXJzZSBzdGFmZlxyXG5NZW1iZXIuR1JBREVSID0gJ1InOyAgICAvLy88IEdyYWRlcnNcclxuTWVtYmVyLlRBID0gJ0UnOyAgICAgICAgLy8vPCBUZWFjaGluZyBhc3Npc3RhbnRcclxuTWVtYmVyLklOU1RSVUNUT1IgPSAnSSc7ICAgIC8vLzwgQ291cnNlIGluc3RydWN0b3JcclxuTWVtYmVyLkFETUlOID0gJ0EnOyAgICAgLy8vPCBBZG1pblxyXG5cclxuTWVtYmVyLnByb3RvdHlwZS5nZXRSb2xlcyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgbGV0IHJvbGVzID0ge307XHJcbiAgICByb2xlc1tNZW1iZXIuR1VFU1RdID0ge25hbWU6ICdHdWVzdCcsIHByaW9yaXR5OiAxfTtcclxuICAgIHJvbGVzW01lbWJlci5EUk9QUEVEXSA9IHtuYW1lOiAnRHJvcHBlZCcsIHByaW9yaXR5OiAyfTtcclxuICAgIHJvbGVzW01lbWJlci5VU0VSXSA9IHtuYW1lOiAnVXNlcicsIHByaW9yaXR5OiAzLCBza2lwOiB0cnVlfTtcclxuICAgIHJvbGVzW01lbWJlci5TVFVERU5UXSA9IHtuYW1lOiAnU3R1ZGVudCcsIHByaW9yaXR5OiA0fTtcclxuICAgIHJvbGVzW01lbWJlci5TVEFGRl0gPSB7bmFtZTogJ1N0YWZmJywgcHJpb3JpdHk6IDUsIHNraXA6IHRydWV9O1xyXG4gICAgcm9sZXNbTWVtYmVyLkdSQURFUl0gPSB7bmFtZTogJ0dyYWRlcicsIHByaW9yaXR5OiA2fTtcclxuICAgIHJvbGVzW01lbWJlci5UQV0gPSB7bmFtZTogJ1RlYWNoaW5nIEFzc2lzdGFudCcsIHByaW9yaXR5OiA3fTtcclxuICAgIHJvbGVzW01lbWJlci5JTlNUUlVDVE9SXSA9IHtuYW1lOiAnSW5zdHJ1Y3RvcicsIHByaW9yaXR5OiA4fTtcclxuICAgIHJvbGVzW01lbWJlci5BRE1JTl0gPSB7bmFtZTogJ0FkbWluJywgcHJpb3JpdHk6IDEwMH07XHJcblxyXG4gICAgcmV0dXJuIHJvbGVzO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IHtNZW1iZXJ9O1xyXG5cclxuXHJcblxyXG4iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz9zb3VyY2VNYXAhLi9fcXVpei5zY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjI0YmQxYzA3XCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzP3NvdXJjZU1hcCEuL19xdWl6LnNjc3NcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz9zb3VyY2VNYXAhLi9fcXVpei5zY3NzXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCIvKipcclxuICogQGZpbGVcclxuICogVGhlIG1haW4gUXVpeiBlbnRyeSBwb2ludFxyXG4gKi9cclxuXHJcbmltcG9ydCB7UXVpekZhY3Rvcnl9IGZyb20gXCIuL2pzL1F1aXpGYWN0b3J5XCI7XHJcbmltcG9ydCB7UXVpekNvbnNvbGV9IGZyb20gJy4vanMvQ29uc29sZS9RdWl6Q29uc29sZSc7XHJcblxyXG4vL1xyXG4vLyBDcmVhdGUgdGhlIFF1aXogY29tcG9uZW50c1xyXG4vL1xyXG5RdWl6RmFjdG9yeS5jcmVhdGUoU2l0ZS5TaXRlKTtcclxuXHJcbi8vXHJcbi8vIEluc3RhbGwgdGhlIGNvbnNvbGUgY29tcG9uZW50c1xyXG4vL1xyXG5cclxuaWYoU2l0ZS5TaXRlLmNvbnNvbGUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgUXVpekNvbnNvbGUuc2V0dXAoU2l0ZS5TaXRlLmNvbnNvbGUpO1xyXG59XHJcbiIsIi8qKlxyXG4gKiBAZmlsZVxyXG4gKiBRdWl6IHN5c3RlbSBjb25zb2xlIGNvbXBvbmVudHNcclxuICovXHJcblxyXG5pbXBvcnQgUXVpelN0YXR1c0NvbXBvbmVudCBmcm9tICcuL1F1aXpTdGF0dXNDb21wb25lbnQudnVlJztcclxuaW1wb3J0IFF1aXpSZXN1bHRDb21wb25lbnQgZnJvbSAnLi9RdWl6UmVzdWx0Q29tcG9uZW50LnZ1ZSc7XHJcblxyXG5leHBvcnQgbGV0IFF1aXpDb25zb2xlID0gZnVuY3Rpb24oKSB7XHJcbn1cclxuXHJcblF1aXpDb25zb2xlLnNldHVwID0gZnVuY3Rpb24oQ29uc29sZSkge1xyXG4gICAgQ29uc29sZS50YWJsZXMuYWRkKHtcclxuICAgICAgICB0aXRsZTogJ1F1aXonLFxyXG4gICAgICAgIG9yZGVyOiAxNSxcclxuICAgICAgICBhcGk6ICcvYXBpL3F1aXovdGFibGVzJ1xyXG4gICAgfSk7XHJcblxyXG4gICAgQ29uc29sZS5jb21wb25lbnRzLmFkZFJvdXRlKFxyXG4gICAgICAgIHtyb3V0ZTogJy9xdWl6L3Jlc3VsdHMvOmFzc2lnbnRhZycsIGNvbXBvbmVudDogUXVpelN0YXR1c0NvbXBvbmVudCwgcHJvcHM6IHRydWV9XHJcbiAgICApO1xyXG5cclxuICAgIENvbnNvbGUuY29tcG9uZW50cy5hZGRSb3V0ZShcclxuICAgICAgICB7cm91dGU6ICcvcXVpei9yZXN1bHQvOm1lbWJlcmlkLzphc3NpZ250YWcvOnF1aXp0YWcnLCBjb21wb25lbnQ6IFF1aXpSZXN1bHRDb21wb25lbnQsIHByb3BzOiB0cnVlfVxyXG4gICAgKTtcclxuXHJcbiAgICBDb25zb2xlLmNvdXJzZS5hc3NpZ25tZW50TGluaygncXVpeicsICdxdWl6emVzJywgJy9xdWl6L3Jlc3VsdHMvOmFzc2lnbnRhZycpO1xyXG59XHJcblxyXG4iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1F1aXpSZXN1bHRDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWQ5ODExNDJjJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1F1aXpSZXN1bHRDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9RdWl6UmVzdWx0Q29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9RdWl6UmVzdWx0Q29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWQ5ODExNDJjJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiZDk4MTE0MmNcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxjaGFybFxcXFxEb2N1bWVudHNcXFxcQ2xhc3Nlc1xcXFxDU0UzMzVcXFxcd2ViLW5ld1xcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnZDk4MTE0MmMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnZDk4MTE0MmMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1F1aXpSZXN1bHRDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWQ5ODExNDJjJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2Q5ODExNDJjJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJ2ZW5kb3IvY2wvcXVpei9qcy9Db25zb2xlL1F1aXpSZXN1bHRDb21wb25lbnQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUXVpelJlc3VsdENvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1F1aXpSZXN1bHRDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9RdWl6UmVzdWx0Q29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWQ5ODExNDJjJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9RdWl6UmVzdWx0Q29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWQ5ODExNDJjJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9RdWl6UmVzdWx0Q29tcG9uZW50LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1kOTgxMTQyYyZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vUXVpelN0YXR1c0NvbXBvbmVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YzI2OGRmOTYmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vUXVpelN0YXR1c0NvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1F1aXpTdGF0dXNDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL1F1aXpTdGF0dXNDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9YzI2OGRmOTYmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCJjMjY4ZGY5NlwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXGNoYXJsXFxcXERvY3VtZW50c1xcXFxDbGFzc2VzXFxcXENTRTMzNVxcXFx3ZWItbmV3XFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdjMjY4ZGY5NicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdjMjY4ZGY5NicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vUXVpelN0YXR1c0NvbXBvbmVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YzI2OGRmOTYmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignYzI2OGRmOTYnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInZlbmRvci9jbC9xdWl6L2pzL0NvbnNvbGUvUXVpelN0YXR1c0NvbXBvbmVudC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9RdWl6U3RhdHVzQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUXVpelN0YXR1c0NvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1F1aXpTdGF0dXNDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9YzI2OGRmOTYmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1F1aXpTdGF0dXNDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9YzI2OGRmOTYmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1F1aXpTdGF0dXNDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWMyNjhkZjk2JnNjb3BlZD10cnVlJlwiIiwiLyoqXHJcbiAqIEBmaWxlXHJcbiAqL1xyXG5cclxuaW1wb3J0ICcuLi9fcXVpei5zY3NzJztcclxuaW1wb3J0IFF1aXpWdWUgZnJvbSAnLi9WdWUvSW5pdGlhbC52dWUnO1xyXG5pbXBvcnQgUXVlc3Rpb25WdWUgZnJvbSAnLi9WdWUvUXVlc3Rpb24udnVlJztcclxuaW1wb3J0IEFuc3dlclZ1ZSBmcm9tICcuL1Z1ZS9BbnN3ZXIudnVlJztcclxuaW1wb3J0IEV4cGlyZWRWdWUgZnJvbSAnLi9WdWUvRXhwaXJlZC52dWUnO1xyXG5pbXBvcnQgQ2xvc2VkVnVlIGZyb20gJy4vVnVlL0Nsb3NlZC52dWUnO1xyXG5pbXBvcnQgUmVzdWx0c1Z1ZSBmcm9tICcuL1Z1ZS9SZXN1bHRzLnZ1ZSc7XHJcbmltcG9ydCBQcmV2aWV3ZXJWdWUgZnJvbSAnLi9WdWUvUHJldmlld2VyLnZ1ZSc7XHJcbmltcG9ydCBQcmV2aWV3VnVlIGZyb20gJy4vVnVlL1ByZXZpZXcudnVlJztcclxuXHJcbmltcG9ydCB7U3RhdGVzfSBmcm9tICcuL1N0YXRlcyc7XHJcblxyXG5leHBvcnQgbGV0IFF1aXogPSBmdW5jdGlvbihzaXRlKSB7XHJcblxyXG4gICAgdGhpcy5zdGFydCA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcclxuICAgICAgICBsZXQgcXVpeiA9IEpTT04ucGFyc2UoZWxlbWVudC50ZXh0Q29udGVudCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHRlbXBsYXRlID0gYFxyXG48ZGl2IGNsYXNzPVwiY2wtcXVpelwiPlxyXG4gIDxjb21wb25lbnQgOmlzPVwicGFnZVwiIDpxdWl6PVwicXVpelwiIDpmaWxlPVwiZmlsZVwiIHYtb246YW5zd2VyPVwiYW5zd2VyKCRldmVudClcIiB2LW9uOm5ldy1zdGF0ZT1cIm5ld1N0YXRlKCRldmVudClcIj48L2NvbXBvbmVudD5cclxuICA8cHJldmlld2VyIHYtaWY9XCJxdWl6LnByZXZpZXcgIT09IHVuZGVmaW5lZFwiIDpxdWl6PVwicXVpelwiIHYtb246cHJldmlldz1cInByZXZpZXcoJGV2ZW50KVwiPjwvcHJldmlld2VyPlxyXG48L2Rpdj5gO1xyXG5cclxuICAgICAgICBuZXcgU2l0ZS5WdWUoe1xyXG4gICAgICAgICAgICBlbDogZWxlbWVudCxcclxuICAgICAgICAgICAgdGVtcGxhdGU6IHRlbXBsYXRlLFxyXG4gICAgICAgICAgICBkYXRhOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcXVpejogcXVpeixcclxuICAgICAgICAgICAgICAgICAgICBzdGF0ZTogU3RhdGVzLklOSVRJQUwsXHJcbiAgICAgICAgICAgICAgICAgICAgcGFnZTogJ2luaXRpYWwnLFxyXG4gICAgICAgICAgICAgICAgICAgIGZpbGU6IG51bGxcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNvbXBvbmVudHM6IHtcclxuICAgICAgICAgICAgICAgICdpbml0aWFsJzogUXVpelZ1ZSxcclxuICAgICAgICAgICAgICAgICdxdWVzdGlvbic6IFF1ZXN0aW9uVnVlLFxyXG4gICAgICAgICAgICAgICAgJ2Fuc3dlcic6IEFuc3dlclZ1ZSxcclxuICAgICAgICAgICAgICAgICdleHBpcmVkJzogRXhwaXJlZFZ1ZSxcclxuICAgICAgICAgICAgICAgICdjbG9zZWQnOiBDbG9zZWRWdWUsXHJcbiAgICAgICAgICAgICAgICAncmVzdWx0cyc6IFJlc3VsdHNWdWUsXHJcbiAgICAgICAgICAgICAgICAncHJldmlld2VyJzogUHJldmlld2VyVnVlLFxyXG4gICAgICAgICAgICAgICAgJ3ByZXZpZXcnOiBQcmV2aWV3VnVlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG1vdW50ZWQoKSB7XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLnF1aXouZXhwaXJlZCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFnZSA9ICdleHBpcmVkJztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZih0aGlzLnF1aXouY2xvc2VkID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYWdlID0gJ2Nsb3NlZCc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG1ldGhvZHM6IHtcclxuICAgICAgICAgICAgICAgIG5ld1N0YXRlKHN0YXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoKHN0YXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgU3RhdGVzLlNUQVJUOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFN0YXRlcy5RVUVTVElPTjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRoaXMucXVpei5xdWVzdGlvbiA8IHRoaXMucXVpei5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnF1aXoucXVlc3Rpb24rKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhZ2UgPSAncXVlc3Rpb24nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFN0YXRlcy5SRVNVTFRTOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYWdlID0gJ3Jlc3VsdHMnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBzdGFydCgpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlID0gU3RhdGVzLlFVRVNUSU9OO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucXVpei5xdWVzdGlvbiA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYWdlID0gJ3F1ZXN0aW9uJztcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBhbnN3ZXIoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBTdGF0ZXMuQU5TV0VSO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFnZSA9ICdhbnN3ZXInO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucXVpei5hbnN3ZXIgPSBkYXRhLmF0dHJpYnV0ZXMuYW5zd2VyO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHByZXZpZXcoZmlsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsZSA9IGZpbGU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5xdWl6LnF1ZXN0aW9uID0gZmlsZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlID0gU3RhdGVzLlBSRVZJRVc7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYWdlID0gJ3ByZXZpZXcnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4iLCIvKipcclxuICogQGZpbGVcclxuICpcclxuICovXHJcblxyXG5pbXBvcnQge1F1aXp9IGZyb20gXCIuL1F1aXpcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBRdWl6RmFjdG9yeSA9IGZ1bmN0aW9uKCkge1xyXG59XHJcblxyXG5RdWl6RmFjdG9yeS5jcmVhdGUgPSBmdW5jdGlvbihzaXRlKSB7XHJcblxyXG4gICAgY29uc3QgcXVpeiA9IG5ldyBRdWl6KHNpdGUpO1xyXG5cclxuICAgIHNpdGUuc3RhcnQoICgpID0+IHtcclxuICAgICAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Rpdi5jbC1xdWl6Jyk7XHJcbiAgICAgICAgaWYoZWxlbWVudCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBxdWl6LnN0YXJ0KGVsZW1lbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxufVxyXG4iLCJcclxuZXhwb3J0IGxldCBTdGF0ZXMgPSBmdW5jdGlvbigpIHtcclxufVxyXG5cclxuU3RhdGVzLklOSVRJQUwgPSAwO1xyXG5TdGF0ZXMuU1RBUlQgPSAxO1xyXG5TdGF0ZXMuUVVFU1RJT04gPSAyO1xyXG5TdGF0ZXMuUkVTVUxUUyA9IDM7XHJcblN0YXRlcy5QUkVWSUVXID0gNDtcclxuXHJcblxyXG4iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0Fuc3dlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzEyMDBiNDAmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQW5zd2VyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQW5zd2VyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcY2hhcmxcXFxcRG9jdW1lbnRzXFxcXENsYXNzZXNcXFxcQ1NFMzM1XFxcXHdlYi1uZXdcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzMxMjAwYjQwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzMxMjAwYjQwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9BbnN3ZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTMxMjAwYjQwJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzMxMjAwYjQwJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJ2ZW5kb3IvY2wvcXVpei9qcy9WdWUvQW5zd2VyLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Fuc3dlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Fuc3dlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQW5zd2VyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zMTIwMGI0MCZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vQ2xvc2VkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zMzk3MTUwZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9DbG9zZWQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9DbG9zZWQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxjaGFybFxcXFxEb2N1bWVudHNcXFxcQ2xhc3Nlc1xcXFxDU0UzMzVcXFxcd2ViLW5ld1xcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMzM5NzE1MGUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMzM5NzE1MGUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0Nsb3NlZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzM5NzE1MGUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMzM5NzE1MGUnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInZlbmRvci9jbC9xdWl6L2pzL1Z1ZS9DbG9zZWQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ2xvc2VkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ2xvc2VkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9DbG9zZWQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTMzOTcxNTBlJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9FeHBpcmVkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xNjNkMDk3MyZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9FeHBpcmVkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vRXhwaXJlZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXGNoYXJsXFxcXERvY3VtZW50c1xcXFxDbGFzc2VzXFxcXENTRTMzNVxcXFx3ZWItbmV3XFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcxNjNkMDk3MycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcxNjNkMDk3MycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vRXhwaXJlZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MTYzZDA5NzMmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMTYzZDA5NzMnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInZlbmRvci9jbC9xdWl6L2pzL1Z1ZS9FeHBpcmVkLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0V4cGlyZWQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9FeHBpcmVkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9FeHBpcmVkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xNjNkMDk3MyZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vSW5pdGlhbC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjU0NDkyMTImXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vSW5pdGlhbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0luaXRpYWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxjaGFybFxcXFxEb2N1bWVudHNcXFxcQ2xhc3Nlc1xcXFxDU0UzMzVcXFxcd2ViLW5ld1xcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNjU0NDkyMTInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNjU0NDkyMTInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0luaXRpYWwudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTY1NDQ5MjEyJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzY1NDQ5MjEyJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJ2ZW5kb3IvY2wvcXVpei9qcy9WdWUvSW5pdGlhbC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Jbml0aWFsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSW5pdGlhbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSW5pdGlhbC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjU0NDkyMTImXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1ByZXZpZXcudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTYyNmI4NmQ0JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1ByZXZpZXcudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9QcmV2aWV3LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcY2hhcmxcXFxcRG9jdW1lbnRzXFxcXENsYXNzZXNcXFxcQ1NFMzM1XFxcXHdlYi1uZXdcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzYyNmI4NmQ0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzYyNmI4NmQ0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9QcmV2aWV3LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02MjZiODZkNCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc2MjZiODZkNCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwidmVuZG9yL2NsL3F1aXovanMvVnVlL1ByZXZpZXcudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUHJldmlldy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1ByZXZpZXcudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1ByZXZpZXcudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTYyNmI4NmQ0JlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9QcmV2aWV3ZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWJhYTBiOTdhJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1ByZXZpZXdlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1ByZXZpZXdlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXGNoYXJsXFxcXERvY3VtZW50c1xcXFxDbGFzc2VzXFxcXENTRTMzNVxcXFx3ZWItbmV3XFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdiYWEwYjk3YScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdiYWEwYjk3YScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vUHJldmlld2VyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1iYWEwYjk3YSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdiYWEwYjk3YScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwidmVuZG9yL2NsL3F1aXovanMvVnVlL1ByZXZpZXdlci52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9QcmV2aWV3ZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9QcmV2aWV3ZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1ByZXZpZXdlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YmFhMGI5N2EmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1F1ZXN0aW9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01NDE0MDgwOCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9RdWVzdGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1F1ZXN0aW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcY2hhcmxcXFxcRG9jdW1lbnRzXFxcXENsYXNzZXNcXFxcQ1NFMzM1XFxcXHdlYi1uZXdcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzU0MTQwODA4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzU0MTQwODA4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9RdWVzdGlvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTQxNDA4MDgmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNTQxNDA4MDgnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInZlbmRvci9jbC9xdWl6L2pzL1Z1ZS9RdWVzdGlvbi52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9RdWVzdGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1F1ZXN0aW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9RdWVzdGlvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTQxNDA4MDgmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1Jlc3VsdHMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTA2NmU2NDc4JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1Jlc3VsdHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9SZXN1bHRzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcY2hhcmxcXFxcRG9jdW1lbnRzXFxcXENsYXNzZXNcXFxcQ1NFMzM1XFxcXHdlYi1uZXdcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzA2NmU2NDc4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzA2NmU2NDc4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9SZXN1bHRzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wNjZlNjQ3OCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcwNjZlNjQ3OCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwidmVuZG9yL2NsL3F1aXovanMvVnVlL1Jlc3VsdHMudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUmVzdWx0cy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Jlc3VsdHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Jlc3VsdHMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTA2NmU2NDc4JlwiIiwiLypcclxuICogVXRpbGl0eSBmdW5jdGlvbnMgdG8gZm9ybWF0IHRpbWVzLlxyXG4gKi9cclxuXHJcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuXHJcbi8qKlxyXG4gKiBVdGlsaXR5IGZ1bmN0aW9ucyB0byBmb3JtYXQgdGltZXMuXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxuZXhwb3J0IGxldCBUaW1lRm9ybWF0dGVyID0gZnVuY3Rpb24oKSB7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0IGEgdGltZSB0byB0aGUgZm9ybWF0IHdlIGRpc3BsYXlcclxuICogVGltZSBpcyByZWxhdGl2ZSB0byBhIHNwZWNpZmllZCB0aW1lIChvciBjdXJyZW50IHRpbWUpXHJcbiAqIEBwYXJhbSB7bW9tZW50fSB0aW1lIFRpbWUgdG8gY29udmVydCAobW9tZW50KVxyXG4gKiBAcGFyYW0ge21vbWVudH0gY3VycmVudFRpbWUgQ3VycmVudCB0aW1lIChtb21lbnQpXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBmb3JtYXQgTW9tZW50IGZvcm1hdFxyXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxyXG4gKi9cclxuVGltZUZvcm1hdHRlci5yZWxhdGl2ZSA9IGZ1bmN0aW9uKHRpbWUsIGN1cnJlbnRUaW1lLCBmb3JtYXQpIHtcclxuICAgIGlmKGN1cnJlbnRUaW1lID09PSB1bmRlZmluZWQgfHwgY3VycmVudFRpbWUgPT09IG51bGwpIHtcclxuICAgICAgICBjdXJyZW50VGltZSA9IG1vbWVudC5ub3coKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBlbGFwc2VkID0gY3VycmVudFRpbWUuZGlmZih0aW1lKTtcclxuXHJcbiAgICBpZihlbGFwc2VkIDwgNjAwMDApIHtcclxuICAgICAgICByZXR1cm4gJzwxIG1pbiBhZ28nO1xyXG4gICAgfVxyXG5cclxuICAgIGlmKGVsYXBzZWQgPCAzNjAwMDAwKSB7XHJcbiAgICAgICAgLy8gV2l0aGluIGFuIGhvdXIgYWdvXHJcbiAgICAgICAgY29uc3QgbWlucyA9IE1hdGguZmxvb3IoZWxhcHNlZCAvIDYwMDAwKTtcclxuICAgICAgICByZXR1cm4gJycgKyBtaW5zICsgJyBtaW4gYWdvJztcclxuICAgIH1cclxuXHJcbiAgICAvKlxyXG4gICAgICogRGV0ZXJtaW5lIGlmIGl0IHdhcyB0b2RheVxyXG4gICAgICovXHJcbiAgICBpZih0aW1lLmRhdGUoKSA9PT0gY3VycmVudFRpbWUuZGF0ZSgpICYmXHJcbiAgICAgICAgdGltZS5tb250aCgpID09PSBjdXJyZW50VGltZS5tb250aCgpICYmXHJcbiAgICAgICAgdGltZS55ZWFyKCkgPT09IGN1cnJlbnRUaW1lLnllYXIoKSkge1xyXG4gICAgICAgIGxldCBob3VyID0gdGltZS5ob3VyKCk7XHJcbiAgICAgICAgbGV0IGFtID0gJ2FtJztcclxuICAgICAgICBpZihob3VyID09PSAwKSB7XHJcbiAgICAgICAgICAgIGhvdXIgPSAxMjtcclxuICAgICAgICB9IGVsc2UgaWYoaG91ciA9PT0gMTIpIHtcclxuICAgICAgICAgICAgYW0gPSAncG0nXHJcbiAgICAgICAgfSBlbHNlIGlmKGhvdXIgPiAxMikge1xyXG4gICAgICAgICAgICBhbSA9ICdwbSc7XHJcbiAgICAgICAgICAgIGhvdXIgLT0gMTI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBtaW51dGUgPSB0aW1lLm1pbnV0ZSgpO1xyXG4gICAgICAgIGlmKG1pbnV0ZSA8IDEwKSB7XHJcbiAgICAgICAgICAgIG1pbnV0ZSA9ICcwJyArIG1pbnV0ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBcIlRvZGF5IGF0IFwiICsgaG91ciArICc6JyArIG1pbnV0ZSArIGFtO1xyXG4gICAgfVxyXG5cclxuICAgIGlmKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgZm9ybWF0ID0gJ00tREQtWVlZWSBoOm1tOnNzYSc7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRpbWUuZm9ybWF0KGZvcm1hdCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBEaXNwbGF5IGEgVW5peCB0aW1lIGFzIGFuIGFic29sdXRlIHRpbWUuXHJcbiAqIEBwYXJhbSB7aW50fSB0aW1lIFVuaXggdGltZSAoc2Vjb25kcylcclxuICogQHBhcmFtIHtzdHJpbmd9IGZvcm1hdCBNb21lbnQgZm9ybWF0IG9yICdsb25nJyBvciAnc2hvcnQnIGZvciBkYXlzIGluY2x1c2lvbi5cclxuICovXHJcblRpbWVGb3JtYXR0ZXIuYWJzb2x1dGVVTklYID0gZnVuY3Rpb24odGltZSwgZm9ybWF0KSB7XHJcbiAgICBsZXQgdCA9IG1vbWVudC51bml4KHRpbWUpO1xyXG4gICAgaWYoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBmb3JtYXQgPSAnTS1ERC1ZWVlZIGg6bW06c3NhJztcclxuICAgIH0gZWxzZSBpZihmb3JtYXQgPT09ICdzaG9ydCcpIHtcclxuXHQgICAgZm9ybWF0ID0gJ2RkZCwgTS1ERC1ZWVlZIGg6bW06c3NhJztcclxuICAgIH0gZWxzZSBpZihmb3JtYXQgPT09ICdsb25nJykge1xyXG5cdCAgICBmb3JtYXQgPSAnZGRkZCwgTS1ERC1ZWVlZIGg6bW06c3NhJztcclxuICAgIH0gZWxzZSBpZihmb3JtYXQgPT09ICdsb25nLWRhdGUnKSB7XHJcblx0ICAgIGZvcm1hdCA9ICdkZGRkLCBNLURELVlZWVknO1xyXG4gICAgfSBlbHNlIGlmKGZvcm1hdCA9PT0gJ3Nob3J0LXRpbWUnKSB7XHJcblx0ICAgIGZvcm1hdCA9ICdoOm1tYSc7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHQuZm9ybWF0KGZvcm1hdCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBEaXNwbGF5IGEgVW5peCB0aW1lIGFzIGEgcmVsYXRpdmUgdGltZS5cclxuICogQHBhcmFtIHtpbnR9IHRpbWUgVW5peCB0aW1lIChzZWNvbmRzKVxyXG4gKiBAcGFyYW0ge2ludH0gY3VycmVudFRpbWUgQ3VycmVudCB0aW1lIGFzIFVOSVggdGltZSAob3B0aW9uYWwpXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBmb3JtYXQgTW9tZW50IGZvcm1hdCBvciAnbG9uZycgb3IgJ3Nob3J0JyBmb3IgZGF5cyBpbmNsdXNpb24uXHJcbiAqL1xyXG5UaW1lRm9ybWF0dGVyLnJlbGF0aXZlVU5JWCA9IGZ1bmN0aW9uKHRpbWUsIGN1cnJlbnRUaW1lLCBmb3JtYXQpIHtcclxuICAgIGxldCB0ID0gbW9tZW50LnVuaXgodGltZSk7XHJcbiAgICBsZXQgYyA9IGN1cnJlbnRUaW1lICE9PSBudWxsID8gbW9tZW50LnVuaXgoY3VycmVudFRpbWUpIDogbW9tZW50KCk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMucmVsYXRpdmUodCwgYywgZm9ybWF0KTtcclxufVxyXG4iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0ZldGNoZXJWdWUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQzYjI2YmNiJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0ZldGNoZXJWdWUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9GZXRjaGVyVnVlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9GZXRjaGVyVnVlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTQzYjI2YmNiJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNDNiMjZiY2JcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxjaGFybFxcXFxEb2N1bWVudHNcXFxcQ2xhc3Nlc1xcXFxDU0UzMzVcXFxcd2ViLW5ld1xcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNDNiMjZiY2InLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNDNiMjZiY2InLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0ZldGNoZXJWdWUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQzYjI2YmNiJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzQzYjI2YmNiJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJ2ZW5kb3IvY2wvdXNlcnMvanMvTGliL0ZldGNoZXJWdWUudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRmV0Y2hlclZ1ZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ZldGNoZXJWdWUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9GZXRjaGVyVnVlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTQzYjI2YmNiJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9GZXRjaGVyVnVlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTQzYjI2YmNiJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9GZXRjaGVyVnVlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00M2IyNmJjYiZzY29wZWQ9dHJ1ZSZcIiIsIi8qKlxyXG4gKiBAZmlsZVxyXG4gKiBBIG1lbWJlcnNoaXAgYXNzb2NpYXRlZCB3aXRoIGEgdXNlci5cclxuICpcclxuICogVGhpcyBpcyBhIGJhc2Ugb2JqZWN0IHRoYXQgd2lsbCBiZSBpbmhlcml0ZWQgYnlcclxuICogYWN0dWFsIG1lbWJlcnNoaXAgb2JqZWN0cy5cclxuICovXHJcblxyXG52YXIgTWVtYmVyc2hpcCA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgIC8vLyBUaGUgVXNlciBvYmplY3QgZm9yIHRoaXMgbWVtYmVyc2hpcFxyXG4gICAgdGhpcy51c2VyID0gbnVsbDtcclxufVxyXG5cclxuZXhwb3J0IHtNZW1iZXJzaGlwfTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==