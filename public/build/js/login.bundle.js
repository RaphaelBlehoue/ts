/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/snippets/pages/user/login.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/snippets/pages/user/login.js":
/*!*********************************************!*\
  !*** ./assets/snippets/pages/user/login.js ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

//== Class Definition
var SnippetLogin = function () {

    var login = $('#m_login');

    var showErrorMsg = function showErrorMsg(form, type, msg) {
        var alert = $('<div class="m-alert m-alert--outline alert alert-' + type + ' alert-dismissible" role="alert">\
			<button type="button" class="close" data-dismiss="alert" aria-label="Close"></button>\
			<span></span>\
		</div>');

        form.find('.alert').remove();
        alert.prependTo(form);
        alert.animateClass('fadeIn animated');
        alert.find('span').html(msg);
    };

    //== Private Functions

    var displaySignUpForm = function displaySignUpForm() {
        login.removeClass('m-login--forget-password');
        login.removeClass('m-login--signin');

        login.addClass('m-login--signup');
        login.find('.m-login__signup').animateClass('flipInX animated');
    };

    var displaySignInForm = function displaySignInForm() {
        login.removeClass('m-login--forget-password');
        login.removeClass('m-login--signup');

        login.addClass('m-login--signin');
        login.find('.m-login__signin').animateClass('flipInX animated');
    };

    var displayForgetPasswordForm = function displayForgetPasswordForm() {
        login.removeClass('m-login--signin');
        login.removeClass('m-login--signup');

        login.addClass('m-login--forget-password');
        login.find('.m-login__forget-password').animateClass('flipInX animated');
    };

    var handleFormSwitch = function handleFormSwitch() {
        $('#m_login_forget_password').click(function (e) {
            e.preventDefault();
            displayForgetPasswordForm();
        });

        $('#m_login_forget_password_cancel').click(function (e) {
            e.preventDefault();
            displaySignInForm();
        });

        $('#m_login_signup').click(function (e) {
            e.preventDefault();
            displaySignUpForm();
        });

        $('#m_login_signup_cancel').click(function (e) {
            e.preventDefault();
            displaySignInForm();
        });
    };

    var handleSignInFormSubmit = function handleSignInFormSubmit() {
        $('#m_login_signin_submit').click(function (e) {
            e.preventDefault();
            var btn = $(this);
            var form = $(this).closest('form');

            form.validate({
                rules: {
                    email: {
                        required: true,
                        email: true
                    },
                    password: {
                        required: true
                    }
                }
            });

            if (!form.valid()) {
                return;
            }

            btn.addClass('m-loader m-loader--right m-loader--light').attr('disabled', true);

            form.ajaxSubmit({
                url: '',
                success: function success(response, status, xhr, $form) {
                    // similate 2s delay
                    setTimeout(function () {
                        btn.removeClass('m-loader m-loader--right m-loader--light').attr('disabled', false);
                        showErrorMsg(form, 'danger', 'Incorrect username or password. Please try again.');
                    }, 2000);
                }
            });
        });
    };

    var handleSignUpFormSubmit = function handleSignUpFormSubmit() {
        $('#m_login_signup_submit').click(function (e) {
            e.preventDefault();

            var btn = $(this);
            var form = $(this).closest('form');

            form.validate({
                rules: {
                    fullname: {
                        required: true
                    },
                    email: {
                        required: true,
                        email: true
                    },
                    password: {
                        required: true
                    },
                    rpassword: {
                        required: true
                    },
                    agree: {
                        required: true
                    }
                }
            });

            if (!form.valid()) {
                return;
            }

            btn.addClass('m-loader m-loader--right m-loader--light').attr('disabled', true);

            form.ajaxSubmit({
                url: '',
                success: function success(response, status, xhr, $form) {
                    // similate 2s delay
                    setTimeout(function () {
                        btn.removeClass('m-loader m-loader--right m-loader--light').attr('disabled', false);
                        form.clearForm();
                        form.validate().resetForm();

                        // display signup form
                        displaySignInForm();
                        var signInForm = login.find('.m-login__signin form');
                        signInForm.clearForm();
                        signInForm.validate().resetForm();

                        showErrorMsg(signInForm, 'success', 'Thank you. To complete your registration please check your email.');
                    }, 2000);
                }
            });
        });
    };

    var handleForgetPasswordFormSubmit = function handleForgetPasswordFormSubmit() {
        $('#m_login_forget_password_submit').click(function (e) {
            e.preventDefault();

            var btn = $(this);
            var form = $(this).closest('form');

            form.validate({
                rules: {
                    email: {
                        required: true,
                        email: true
                    }
                }
            });

            if (!form.valid()) {
                return;
            }

            btn.addClass('m-loader m-loader--right m-loader--light').attr('disabled', true);

            form.ajaxSubmit({
                url: '',
                success: function success(response, status, xhr, $form) {
                    // similate 2s delay
                    setTimeout(function () {
                        btn.removeClass('m-loader m-loader--right m-loader--light').attr('disabled', false); // remove 
                        form.clearForm(); // clear form
                        form.validate().resetForm(); // reset validation states

                        // display signup form
                        displaySignInForm();
                        var signInForm = login.find('.m-login__signin form');
                        signInForm.clearForm();
                        signInForm.validate().resetForm();

                        showErrorMsg(signInForm, 'success', 'Cool! Password recovery instruction has been sent to your email.');
                    }, 2000);
                }
            });
        });
    };

    //== Public Functions
    return {
        // public functions
        init: function init() {
            handleFormSwitch();
            handleSignInFormSubmit();
            handleSignUpFormSubmit();
            handleForgetPasswordFormSubmit();
        }
    };
}();

//== Class Initialization
jQuery(document).ready(function () {
    SnippetLogin.init();
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNThjZmJkM2M4MmJhOTY3MjAzYWIiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NuaXBwZXRzL3BhZ2VzL3VzZXIvbG9naW4uanMiXSwibmFtZXMiOlsiU25pcHBldExvZ2luIiwibG9naW4iLCIkIiwic2hvd0Vycm9yTXNnIiwiZm9ybSIsInR5cGUiLCJtc2ciLCJhbGVydCIsImZpbmQiLCJyZW1vdmUiLCJwcmVwZW5kVG8iLCJhbmltYXRlQ2xhc3MiLCJodG1sIiwiZGlzcGxheVNpZ25VcEZvcm0iLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwiZGlzcGxheVNpZ25JbkZvcm0iLCJkaXNwbGF5Rm9yZ2V0UGFzc3dvcmRGb3JtIiwiaGFuZGxlRm9ybVN3aXRjaCIsImNsaWNrIiwiZSIsInByZXZlbnREZWZhdWx0IiwiaGFuZGxlU2lnbkluRm9ybVN1Ym1pdCIsImJ0biIsImNsb3Nlc3QiLCJ2YWxpZGF0ZSIsInJ1bGVzIiwiZW1haWwiLCJyZXF1aXJlZCIsInBhc3N3b3JkIiwidmFsaWQiLCJhdHRyIiwiYWpheFN1Ym1pdCIsInVybCIsInN1Y2Nlc3MiLCJyZXNwb25zZSIsInN0YXR1cyIsInhociIsIiRmb3JtIiwic2V0VGltZW91dCIsImhhbmRsZVNpZ25VcEZvcm1TdWJtaXQiLCJmdWxsbmFtZSIsInJwYXNzd29yZCIsImFncmVlIiwiY2xlYXJGb3JtIiwicmVzZXRGb3JtIiwic2lnbkluRm9ybSIsImhhbmRsZUZvcmdldFBhc3N3b3JkRm9ybVN1Ym1pdCIsImluaXQiLCJqUXVlcnkiLCJkb2N1bWVudCIsInJlYWR5Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FB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LyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvYnVpbGQvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2Fzc2V0cy9zbmlwcGV0cy9wYWdlcy91c2VyL2xvZ2luLmpzXCIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDU4Y2ZiZDNjODJiYTk2NzIwM2FiIiwiLy89PSBDbGFzcyBEZWZpbml0aW9uXHJcbnZhciBTbmlwcGV0TG9naW4gPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICB2YXIgbG9naW4gPSAkKCcjbV9sb2dpbicpO1xyXG5cclxuICAgIHZhciBzaG93RXJyb3JNc2cgPSBmdW5jdGlvbihmb3JtLCB0eXBlLCBtc2cpIHtcclxuICAgICAgICB2YXIgYWxlcnQgPSAkKCc8ZGl2IGNsYXNzPVwibS1hbGVydCBtLWFsZXJ0LS1vdXRsaW5lIGFsZXJ0IGFsZXJ0LScgKyB0eXBlICsgJyBhbGVydC1kaXNtaXNzaWJsZVwiIHJvbGU9XCJhbGVydFwiPlxcXHJcblx0XHRcdDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2xvc2VcIiBkYXRhLWRpc21pc3M9XCJhbGVydFwiIGFyaWEtbGFiZWw9XCJDbG9zZVwiPjwvYnV0dG9uPlxcXHJcblx0XHRcdDxzcGFuPjwvc3Bhbj5cXFxyXG5cdFx0PC9kaXY+Jyk7XHJcblxyXG4gICAgICAgIGZvcm0uZmluZCgnLmFsZXJ0JykucmVtb3ZlKCk7XHJcbiAgICAgICAgYWxlcnQucHJlcGVuZFRvKGZvcm0pO1xyXG4gICAgICAgIGFsZXJ0LmFuaW1hdGVDbGFzcygnZmFkZUluIGFuaW1hdGVkJyk7XHJcbiAgICAgICAgYWxlcnQuZmluZCgnc3BhbicpLmh0bWwobXNnKTtcclxuICAgIH1cclxuXHJcbiAgICAvLz09IFByaXZhdGUgRnVuY3Rpb25zXHJcblxyXG4gICAgdmFyIGRpc3BsYXlTaWduVXBGb3JtID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgbG9naW4ucmVtb3ZlQ2xhc3MoJ20tbG9naW4tLWZvcmdldC1wYXNzd29yZCcpO1xyXG4gICAgICAgIGxvZ2luLnJlbW92ZUNsYXNzKCdtLWxvZ2luLS1zaWduaW4nKTtcclxuXHJcbiAgICAgICAgbG9naW4uYWRkQ2xhc3MoJ20tbG9naW4tLXNpZ251cCcpO1xyXG4gICAgICAgIGxvZ2luLmZpbmQoJy5tLWxvZ2luX19zaWdudXAnKS5hbmltYXRlQ2xhc3MoJ2ZsaXBJblggYW5pbWF0ZWQnKTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgZGlzcGxheVNpZ25JbkZvcm0gPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBsb2dpbi5yZW1vdmVDbGFzcygnbS1sb2dpbi0tZm9yZ2V0LXBhc3N3b3JkJyk7XHJcbiAgICAgICAgbG9naW4ucmVtb3ZlQ2xhc3MoJ20tbG9naW4tLXNpZ251cCcpO1xyXG5cclxuICAgICAgICBsb2dpbi5hZGRDbGFzcygnbS1sb2dpbi0tc2lnbmluJyk7XHJcbiAgICAgICAgbG9naW4uZmluZCgnLm0tbG9naW5fX3NpZ25pbicpLmFuaW1hdGVDbGFzcygnZmxpcEluWCBhbmltYXRlZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBkaXNwbGF5Rm9yZ2V0UGFzc3dvcmRGb3JtID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgbG9naW4ucmVtb3ZlQ2xhc3MoJ20tbG9naW4tLXNpZ25pbicpO1xyXG4gICAgICAgIGxvZ2luLnJlbW92ZUNsYXNzKCdtLWxvZ2luLS1zaWdudXAnKTtcclxuXHJcbiAgICAgICAgbG9naW4uYWRkQ2xhc3MoJ20tbG9naW4tLWZvcmdldC1wYXNzd29yZCcpO1xyXG4gICAgICAgIGxvZ2luLmZpbmQoJy5tLWxvZ2luX19mb3JnZXQtcGFzc3dvcmQnKS5hbmltYXRlQ2xhc3MoJ2ZsaXBJblggYW5pbWF0ZWQnKTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgaGFuZGxlRm9ybVN3aXRjaCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICQoJyNtX2xvZ2luX2ZvcmdldF9wYXNzd29yZCcpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBkaXNwbGF5Rm9yZ2V0UGFzc3dvcmRGb3JtKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoJyNtX2xvZ2luX2ZvcmdldF9wYXNzd29yZF9jYW5jZWwnKS5jbGljayhmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgZGlzcGxheVNpZ25JbkZvcm0oKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJCgnI21fbG9naW5fc2lnbnVwJykuY2xpY2soZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGRpc3BsYXlTaWduVXBGb3JtKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoJyNtX2xvZ2luX3NpZ251cF9jYW5jZWwnKS5jbGljayhmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgZGlzcGxheVNpZ25JbkZvcm0oKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgaGFuZGxlU2lnbkluRm9ybVN1Ym1pdCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICQoJyNtX2xvZ2luX3NpZ25pbl9zdWJtaXQnKS5jbGljayhmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgdmFyIGJ0biA9ICQodGhpcyk7XHJcbiAgICAgICAgICAgIHZhciBmb3JtID0gJCh0aGlzKS5jbG9zZXN0KCdmb3JtJyk7XHJcblxyXG4gICAgICAgICAgICBmb3JtLnZhbGlkYXRlKHtcclxuICAgICAgICAgICAgICAgIHJ1bGVzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW1haWw6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBwYXNzd29yZDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIWZvcm0udmFsaWQoKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBidG4uYWRkQ2xhc3MoJ20tbG9hZGVyIG0tbG9hZGVyLS1yaWdodCBtLWxvYWRlci0tbGlnaHQnKS5hdHRyKCdkaXNhYmxlZCcsIHRydWUpO1xyXG5cclxuICAgICAgICAgICAgZm9ybS5hamF4U3VibWl0KHtcclxuICAgICAgICAgICAgICAgIHVybDogJycsXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXNwb25zZSwgc3RhdHVzLCB4aHIsICRmb3JtKSB7XHJcbiAgICAgICAgICAgICAgICBcdC8vIHNpbWlsYXRlIDJzIGRlbGF5XHJcbiAgICAgICAgICAgICAgICBcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblx0ICAgICAgICAgICAgICAgICAgICBidG4ucmVtb3ZlQ2xhc3MoJ20tbG9hZGVyIG0tbG9hZGVyLS1yaWdodCBtLWxvYWRlci0tbGlnaHQnKS5hdHRyKCdkaXNhYmxlZCcsIGZhbHNlKTtcclxuXHQgICAgICAgICAgICAgICAgICAgIHNob3dFcnJvck1zZyhmb3JtLCAnZGFuZ2VyJywgJ0luY29ycmVjdCB1c2VybmFtZSBvciBwYXNzd29yZC4gUGxlYXNlIHRyeSBhZ2Fpbi4nKTtcclxuICAgICAgICAgICAgICAgICAgICB9LCAyMDAwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGhhbmRsZVNpZ25VcEZvcm1TdWJtaXQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAkKCcjbV9sb2dpbl9zaWdudXBfc3VibWl0JykuY2xpY2soZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICB2YXIgYnRuID0gJCh0aGlzKTtcclxuICAgICAgICAgICAgdmFyIGZvcm0gPSAkKHRoaXMpLmNsb3Nlc3QoJ2Zvcm0nKTtcclxuXHJcbiAgICAgICAgICAgIGZvcm0udmFsaWRhdGUoe1xyXG4gICAgICAgICAgICAgICAgcnVsZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICBmdWxsbmFtZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZW1haWw6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBwYXNzd29yZDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgcnBhc3N3b3JkOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBhZ3JlZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIWZvcm0udmFsaWQoKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBidG4uYWRkQ2xhc3MoJ20tbG9hZGVyIG0tbG9hZGVyLS1yaWdodCBtLWxvYWRlci0tbGlnaHQnKS5hdHRyKCdkaXNhYmxlZCcsIHRydWUpO1xyXG5cclxuICAgICAgICAgICAgZm9ybS5hamF4U3VibWl0KHtcclxuICAgICAgICAgICAgICAgIHVybDogJycsXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXNwb25zZSwgc3RhdHVzLCB4aHIsICRmb3JtKSB7XHJcbiAgICAgICAgICAgICAgICBcdC8vIHNpbWlsYXRlIDJzIGRlbGF5XHJcbiAgICAgICAgICAgICAgICBcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblx0ICAgICAgICAgICAgICAgICAgICBidG4ucmVtb3ZlQ2xhc3MoJ20tbG9hZGVyIG0tbG9hZGVyLS1yaWdodCBtLWxvYWRlci0tbGlnaHQnKS5hdHRyKCdkaXNhYmxlZCcsIGZhbHNlKTtcclxuXHQgICAgICAgICAgICAgICAgICAgIGZvcm0uY2xlYXJGb3JtKCk7XHJcblx0ICAgICAgICAgICAgICAgICAgICBmb3JtLnZhbGlkYXRlKCkucmVzZXRGb3JtKCk7XHJcblxyXG5cdCAgICAgICAgICAgICAgICAgICAgLy8gZGlzcGxheSBzaWdudXAgZm9ybVxyXG5cdCAgICAgICAgICAgICAgICAgICAgZGlzcGxheVNpZ25JbkZvcm0oKTtcclxuXHQgICAgICAgICAgICAgICAgICAgIHZhciBzaWduSW5Gb3JtID0gbG9naW4uZmluZCgnLm0tbG9naW5fX3NpZ25pbiBmb3JtJyk7XHJcblx0ICAgICAgICAgICAgICAgICAgICBzaWduSW5Gb3JtLmNsZWFyRm9ybSgpO1xyXG5cdCAgICAgICAgICAgICAgICAgICAgc2lnbkluRm9ybS52YWxpZGF0ZSgpLnJlc2V0Rm9ybSgpO1xyXG5cclxuXHQgICAgICAgICAgICAgICAgICAgIHNob3dFcnJvck1zZyhzaWduSW5Gb3JtLCAnc3VjY2VzcycsICdUaGFuayB5b3UuIFRvIGNvbXBsZXRlIHlvdXIgcmVnaXN0cmF0aW9uIHBsZWFzZSBjaGVjayB5b3VyIGVtYWlsLicpO1xyXG5cdCAgICAgICAgICAgICAgICB9LCAyMDAwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGhhbmRsZUZvcmdldFBhc3N3b3JkRm9ybVN1Ym1pdCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICQoJyNtX2xvZ2luX2ZvcmdldF9wYXNzd29yZF9zdWJtaXQnKS5jbGljayhmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBidG4gPSAkKHRoaXMpO1xyXG4gICAgICAgICAgICB2YXIgZm9ybSA9ICQodGhpcykuY2xvc2VzdCgnZm9ybScpO1xyXG5cclxuICAgICAgICAgICAgZm9ybS52YWxpZGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBydWxlczoge1xyXG4gICAgICAgICAgICAgICAgICAgIGVtYWlsOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbWFpbDogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIWZvcm0udmFsaWQoKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBidG4uYWRkQ2xhc3MoJ20tbG9hZGVyIG0tbG9hZGVyLS1yaWdodCBtLWxvYWRlci0tbGlnaHQnKS5hdHRyKCdkaXNhYmxlZCcsIHRydWUpO1xyXG5cclxuICAgICAgICAgICAgZm9ybS5hamF4U3VibWl0KHtcclxuICAgICAgICAgICAgICAgIHVybDogJycsXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXNwb25zZSwgc3RhdHVzLCB4aHIsICRmb3JtKSB7IFxyXG4gICAgICAgICAgICAgICAgXHQvLyBzaW1pbGF0ZSAycyBkZWxheVxyXG4gICAgICAgICAgICAgICAgXHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgXHRcdGJ0bi5yZW1vdmVDbGFzcygnbS1sb2FkZXIgbS1sb2FkZXItLXJpZ2h0IG0tbG9hZGVyLS1saWdodCcpLmF0dHIoJ2Rpc2FibGVkJywgZmFsc2UpOyAvLyByZW1vdmUgXHJcblx0ICAgICAgICAgICAgICAgICAgICBmb3JtLmNsZWFyRm9ybSgpOyAvLyBjbGVhciBmb3JtXHJcblx0ICAgICAgICAgICAgICAgICAgICBmb3JtLnZhbGlkYXRlKCkucmVzZXRGb3JtKCk7IC8vIHJlc2V0IHZhbGlkYXRpb24gc3RhdGVzXHJcblxyXG5cdCAgICAgICAgICAgICAgICAgICAgLy8gZGlzcGxheSBzaWdudXAgZm9ybVxyXG5cdCAgICAgICAgICAgICAgICAgICAgZGlzcGxheVNpZ25JbkZvcm0oKTtcclxuXHQgICAgICAgICAgICAgICAgICAgIHZhciBzaWduSW5Gb3JtID0gbG9naW4uZmluZCgnLm0tbG9naW5fX3NpZ25pbiBmb3JtJyk7XHJcblx0ICAgICAgICAgICAgICAgICAgICBzaWduSW5Gb3JtLmNsZWFyRm9ybSgpO1xyXG5cdCAgICAgICAgICAgICAgICAgICAgc2lnbkluRm9ybS52YWxpZGF0ZSgpLnJlc2V0Rm9ybSgpO1xyXG5cclxuXHQgICAgICAgICAgICAgICAgICAgIHNob3dFcnJvck1zZyhzaWduSW5Gb3JtLCAnc3VjY2VzcycsICdDb29sISBQYXNzd29yZCByZWNvdmVyeSBpbnN0cnVjdGlvbiBoYXMgYmVlbiBzZW50IHRvIHlvdXIgZW1haWwuJyk7XHJcbiAgICAgICAgICAgICAgICBcdH0sIDIwMDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLz09IFB1YmxpYyBGdW5jdGlvbnNcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgLy8gcHVibGljIGZ1bmN0aW9uc1xyXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBoYW5kbGVGb3JtU3dpdGNoKCk7XHJcbiAgICAgICAgICAgIGhhbmRsZVNpZ25JbkZvcm1TdWJtaXQoKTtcclxuICAgICAgICAgICAgaGFuZGxlU2lnblVwRm9ybVN1Ym1pdCgpO1xyXG4gICAgICAgICAgICBoYW5kbGVGb3JnZXRQYXNzd29yZEZvcm1TdWJtaXQoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59KCk7XHJcblxyXG4vLz09IENsYXNzIEluaXRpYWxpemF0aW9uXHJcbmpRdWVyeShkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcbiAgICBTbmlwcGV0TG9naW4uaW5pdCgpO1xyXG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvc25pcHBldHMvcGFnZXMvdXNlci9sb2dpbi5qcyJdLCJzb3VyY2VSb290IjoiIn0=