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
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/src/js/apps/layout/base/layout.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/src/js/apps/layout/base/layout.js":
/*!**************************************************!*\
  !*** ./assets/src/js/apps/layout/base/layout.js ***!
  \**************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

var mLayout = function () {
    var horMenu;
    var asideMenu;
    var asideMenuOffcanvas;
    var horMenuOffcanvas;

    var initStickyHeader = function initStickyHeader() {
        var header = $('.m-header');
        var options = {
            offset: {},
            minimize: {}
        };

        if (header.data('minimize-mobile') == 'hide') {
            options.minimize.mobile = {};
            options.minimize.mobile.on = 'm-header--hide';
            options.minimize.mobile.off = 'm-header--show';
        } else {
            options.minimize.mobile = false;
        }

        if (header.data('minimize') == 'hide') {
            options.minimize.desktop = {};
            options.minimize.desktop.on = 'm-header--hide';
            options.minimize.desktop.off = 'm-header--show';
        } else {
            options.minimize.desktop = false;
        }

        if (header.data('minimize-offset')) {
            options.offset.desktop = header.data('minimize-offset');
        }

        if (header.data('minimize-mobile-offset')) {
            options.offset.mobile = header.data('minimize-mobile-offset');
        }

        header.mHeader(options);
    };

    // handle horizontal menu
    var initHorMenu = function initHorMenu() {
        // init aside left offcanvas
        horMenuOffcanvas = $('#m_header_menu').mOffcanvas({
            class: 'm-aside-header-menu-mobile',
            overlay: true,
            close: '#m_aside_header_menu_mobile_close_btn',
            toggle: {
                target: '#m_aside_header_menu_mobile_toggle',
                state: 'm-brand__toggler--active'
            }
        });

        horMenu = $('#m_header_menu').mMenu({
            // submenu modes
            submenu: {
                desktop: 'dropdown',
                tablet: 'accordion',
                mobile: 'accordion'
            },
            // resize menu on window resize
            resize: {
                desktop: function desktop() {
                    var headerNavWidth = $('#m_header_nav').width();
                    var headerMenuWidth = $('#m_header_menu_container').width();
                    var headerTopbarWidth = $('#m_header_topbar').width();
                    var spareWidth = 20;

                    if (headerMenuWidth + headerTopbarWidth + spareWidth > headerNavWidth) {
                        return false;
                    } else {
                        return true;
                    }
                }
            }
        });
    };

    // handle vertical menu
    var initLeftAsideMenu = function initLeftAsideMenu() {
        var menu = $('#m_ver_menu');

        // init aside menu
        var menuOptions = {
            // submenu setup
            submenu: {
                desktop: {
                    // by default the menu mode set to accordion in desktop mode
                    default: menu.data('menu-dropdown') == true ? 'dropdown' : 'accordion',
                    // whenever body has this class switch the menu mode to dropdown
                    state: {
                        body: 'm-aside-left--minimize',
                        mode: 'dropdown'
                    }
                },
                tablet: 'accordion', // menu set to accordion in tablet mode
                mobile: 'accordion' // menu set to accordion in mobile mode
            },

            //accordion setup
            accordion: {
                autoScroll: true,
                expandAll: false
            }
        };

        asideMenu = menu.mMenu(menuOptions);

        // handle fixed aside menu
        if (menu.data('menu-scrollable')) {
            var initScrollableMenu = function initScrollableMenu(obj) {
                if (mUtil.isInResponsiveRange('tablet-and-mobile')) {
                    // destroy if the instance was previously created
                    mApp.destroyScroller(obj);
                    return;
                }

                var height = mUtil.getViewPort().height - $('.m-header').outerHeight() - ($('.m-aside-left .m-aside__header').length != 0 ? $('.m-aside-left .m-aside__header').outerHeight() : 0) - ($('.m-aside-left .m-aside__footer').length != 0 ? $('.m-aside-left .m-aside__footer').outerHeight() : 0);
                //- $('.m-footer').outerHeight(); 

                // create/re-create a new instance
                mApp.initScroller(obj, { height: height });
            };

            initScrollableMenu(asideMenu);

            mUtil.addResizeHandler(function () {
                initScrollableMenu(asideMenu);
            });
        }
    };

    // handle vertical menu
    var initLeftAside = function initLeftAside() {
        // init aside left offcanvas
        var asideOffcanvasClass = $('#m_aside_left').hasClass('m-aside-left--offcanvas-default') ? 'm-aside-left--offcanvas-default' : 'm-aside-left';

        asideMenuOffcanvas = $('#m_aside_left').mOffcanvas({
            class: asideOffcanvasClass,
            overlay: true,
            close: '#m_aside_left_close_btn',
            toggle: {
                target: '#m_aside_left_offcanvas_toggle',
                state: 'm-brand__toggler--active'
            }
        });
    };

    // handle sidebar toggle
    var initLeftAsideToggle = function initLeftAsideToggle() {
        $('#m_aside_left_minimize_toggle').mToggle({
            target: 'body',
            targetState: 'm-brand--minimize m-aside-left--minimize',
            togglerState: 'm-brand__toggler--active'
        }).on('toggle', function () {
            horMenu.pauseDropdownHover(800);
            asideMenu.pauseDropdownHover(800);
        });

        $('#m_aside_left_hide_toggle').mToggle({
            target: 'body',
            targetState: 'm-aside-left--hide',
            togglerState: 'm-brand__toggler--active'
        }).on('toggle', function () {
            horMenu.pauseDropdownHover(800);
            asideMenu.pauseDropdownHover(800);
        });
    };

    var initTopbar = function initTopbar() {
        $('#m_aside_header_topbar_mobile_toggle').click(function () {
            $('body').toggleClass('m-topbar--on');
        });

        // Animated Notification Icon 
        setInterval(function () {
            $('#m_topbar_notification_icon .m-nav__link-icon').addClass('m-animate-shake');
            $('#m_topbar_notification_icon .m-nav__link-badge').addClass('m-animate-blink');
        }, 3000);

        setInterval(function () {
            $('#m_topbar_notification_icon .m-nav__link-icon').removeClass('m-animate-shake');
            $('#m_topbar_notification_icon .m-nav__link-badge').removeClass('m-animate-blink');
        }, 6000);
    };

    // handle quick search
    var initQuicksearch = function initQuicksearch() {
        var qs = $('#m_quicksearch');

        qs.mQuicksearch({
            type: qs.data('search-type'), // quick search type
            source: 'inc/api/quick_search.php',
            spinner: 'm-loader m-loader--skin-light m-loader--right',

            input: '#m_quicksearch_input',
            iconClose: '#m_quicksearch_close',
            iconCancel: '#m_quicksearch_cancel',
            iconSearch: '#m_quicksearch_search',

            hasResultClass: 'm-list-search--has-result',
            minLength: 1,
            templates: {
                error: function error(qs) {
                    return '<div class="m-search-results m-search-results--skin-light"><span class="m-search-result__message">Something went wrong</div></div>';
                }
            }
        });
    };

    var initScrollTop = function initScrollTop() {
        $('[data-toggle="m-scroll-top"]').mScrollTop({
            offset: 300,
            speed: 600
        });
    };

    return {
        init: function init() {
            this.initHeader();
            this.initAside();
        },

        initHeader: function initHeader() {
            initStickyHeader();
            initHorMenu();
            initTopbar();
            initQuicksearch();
            initScrollTop();
        },

        initAside: function initAside() {
            initLeftAside();
            initLeftAsideMenu();
            initLeftAsideToggle();
        },

        getAsideMenu: function getAsideMenu() {
            return asideMenu;
        },

        closeMobileAsideMenuOffcanvas: function closeMobileAsideMenuOffcanvas() {
            if (mUtil.isMobileDevice()) {
                asideMenuOffcanvas.hide();
            }
        },

        closeMobileHorMenuOffcanvas: function closeMobileHorMenuOffcanvas() {
            if (mUtil.isMobileDevice()) {
                horMenuOffcanvas.hide();
            }
        }
    };
}();

$(document).ready(function () {
    if (mUtil.isAngularVersion() === false) {
        mLayout.init();
    }
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNThjZmJkM2M4MmJhOTY3MjAzYWIiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NyYy9qcy9hcHBzL2xheW91dC9iYXNlL2xheW91dC5qcyJdLCJuYW1lcyI6WyJtTGF5b3V0IiwiaG9yTWVudSIsImFzaWRlTWVudSIsImFzaWRlTWVudU9mZmNhbnZhcyIsImhvck1lbnVPZmZjYW52YXMiLCJpbml0U3RpY2t5SGVhZGVyIiwiaGVhZGVyIiwiJCIsIm9wdGlvbnMiLCJvZmZzZXQiLCJtaW5pbWl6ZSIsImRhdGEiLCJtb2JpbGUiLCJvbiIsIm9mZiIsImRlc2t0b3AiLCJtSGVhZGVyIiwiaW5pdEhvck1lbnUiLCJtT2ZmY2FudmFzIiwiY2xhc3MiLCJvdmVybGF5IiwiY2xvc2UiLCJ0b2dnbGUiLCJ0YXJnZXQiLCJzdGF0ZSIsIm1NZW51Iiwic3VibWVudSIsInRhYmxldCIsInJlc2l6ZSIsImhlYWRlck5hdldpZHRoIiwid2lkdGgiLCJoZWFkZXJNZW51V2lkdGgiLCJoZWFkZXJUb3BiYXJXaWR0aCIsInNwYXJlV2lkdGgiLCJpbml0TGVmdEFzaWRlTWVudSIsIm1lbnUiLCJtZW51T3B0aW9ucyIsImRlZmF1bHQiLCJib2R5IiwibW9kZSIsImFjY29yZGlvbiIsImF1dG9TY3JvbGwiLCJleHBhbmRBbGwiLCJpbml0U2Nyb2xsYWJsZU1lbnUiLCJvYmoiLCJtVXRpbCIsImlzSW5SZXNwb25zaXZlUmFuZ2UiLCJtQXBwIiwiZGVzdHJveVNjcm9sbGVyIiwiaGVpZ2h0IiwiZ2V0Vmlld1BvcnQiLCJvdXRlckhlaWdodCIsImxlbmd0aCIsImluaXRTY3JvbGxlciIsImFkZFJlc2l6ZUhhbmRsZXIiLCJpbml0TGVmdEFzaWRlIiwiYXNpZGVPZmZjYW52YXNDbGFzcyIsImhhc0NsYXNzIiwiaW5pdExlZnRBc2lkZVRvZ2dsZSIsIm1Ub2dnbGUiLCJ0YXJnZXRTdGF0ZSIsInRvZ2dsZXJTdGF0ZSIsInBhdXNlRHJvcGRvd25Ib3ZlciIsImluaXRUb3BiYXIiLCJjbGljayIsInRvZ2dsZUNsYXNzIiwic2V0SW50ZXJ2YWwiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwiaW5pdFF1aWNrc2VhcmNoIiwicXMiLCJtUXVpY2tzZWFyY2giLCJ0eXBlIiwic291cmNlIiwic3Bpbm5lciIsImlucHV0IiwiaWNvbkNsb3NlIiwiaWNvbkNhbmNlbCIsImljb25TZWFyY2giLCJoYXNSZXN1bHRDbGFzcyIsIm1pbkxlbmd0aCIsInRlbXBsYXRlcyIsImVycm9yIiwiaW5pdFNjcm9sbFRvcCIsIm1TY3JvbGxUb3AiLCJzcGVlZCIsImluaXQiLCJpbml0SGVhZGVyIiwiaW5pdEFzaWRlIiwiZ2V0QXNpZGVNZW51IiwiY2xvc2VNb2JpbGVBc2lkZU1lbnVPZmZjYW52YXMiLCJpc01vYmlsZURldmljZSIsImhpZGUiLCJjbG9zZU1vYmlsZUhvck1lbnVPZmZjYW52YXMiLCJkb2N1bWVudCIsInJlYWR5IiwiaXNBbmd1bGFyVmVyc2lvbiJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDN0RBLElBQUlBLFVBQVUsWUFBVztBQUNyQixRQUFJQyxPQUFKO0FBQ0EsUUFBSUMsU0FBSjtBQUNBLFFBQUlDLGtCQUFKO0FBQ0EsUUFBSUMsZ0JBQUo7O0FBRUEsUUFBSUMsbUJBQW1CLFNBQW5C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S0MsU0FBTDtBQUNILFNBSkU7O0FBTUhELG9CQUFZLHNCQUFXO0FBQ25CbEY7QUFDQVk7QUFDQThDO0FBQ0FNO0FBQ0FjO0FBQ0gsU0FaRTs7QUFjSEssbUJBQVcscUJBQVc7QUFDbEJqQztBQUNBckI7QUFDQXdCO0FBQ0gsU0FsQkU7O0FBb0JIK0Isc0JBQWMsd0JBQVc7QUFDckIsbUJBQU92RixTQUFQO0FBQ0gsU0F0QkU7O0FBd0JId0YsdUNBQStCLHlDQUFXO0FBQ3RDLGdCQUFJN0MsTUFBTThDLGNBQU4sRUFBSixFQUE0QjtBQUN4QnhGLG1DQUFtQnlGLElBQW5CO0FBQ0g7QUFDSixTQTVCRTs7QUE4QkhDLHFDQUE2Qix1Q0FBVztBQUNwQyxnQkFBSWhELE1BQU04QyxjQUFOLEVBQUosRUFBNEI7QUFDeEJ2RixpQ0FBaUJ3RixJQUFqQjtBQUNIO0FBQ0o7QUFsQ0UsS0FBUDtBQW9DSCxDQS9QYSxFQUFkOztBQWlRQXJGLEVBQUV1RixRQUFGLEVBQVlDLEtBQVosQ0FBa0IsWUFBVztBQUN6QixRQUFJbEQsTUFBTW1ELGdCQUFOLE9BQTZCLEtBQWpDLEVBQXdDO0FBQ3BDaEcsZ0JBQVFzRixJQUFSO0FBQ0g7QUFDSixDQUpELEUiLCJmaWxlIjoianMvbGF5b3V0LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9idWlsZC9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vYXNzZXRzL3NyYy9qcy9hcHBzL2xheW91dC9iYXNlL2xheW91dC5qc1wiKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA1OGNmYmQzYzgyYmE5NjcyMDNhYiIsInZhciBtTGF5b3V0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgaG9yTWVudTtcclxuICAgIHZhciBhc2lkZU1lbnU7XHJcbiAgICB2YXIgYXNpZGVNZW51T2ZmY2FudmFzO1xyXG4gICAgdmFyIGhvck1lbnVPZmZjYW52YXM7XHJcblxyXG4gICAgdmFyIGluaXRTdGlja3lIZWFkZXIgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgaGVhZGVyID0gJCgnLm0taGVhZGVyJyk7XHJcbiAgICAgICAgdmFyIG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIG9mZnNldDoge30sXHJcbiAgICAgICAgICAgIG1pbmltaXplOnt9ICAgICAgIFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGlmIChoZWFkZXIuZGF0YSgnbWluaW1pemUtbW9iaWxlJykgPT0gJ2hpZGUnKSB7XHJcbiAgICAgICAgICAgIG9wdGlvbnMubWluaW1pemUubW9iaWxlID0ge307XHJcbiAgICAgICAgICAgIG9wdGlvbnMubWluaW1pemUubW9iaWxlLm9uID0gJ20taGVhZGVyLS1oaWRlJztcclxuICAgICAgICAgICAgb3B0aW9ucy5taW5pbWl6ZS5tb2JpbGUub2ZmID0gJ20taGVhZGVyLS1zaG93JztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBvcHRpb25zLm1pbmltaXplLm1vYmlsZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGhlYWRlci5kYXRhKCdtaW5pbWl6ZScpID09ICdoaWRlJykge1xyXG4gICAgICAgICAgICBvcHRpb25zLm1pbmltaXplLmRlc2t0b3AgPSB7fTtcclxuICAgICAgICAgICAgb3B0aW9ucy5taW5pbWl6ZS5kZXNrdG9wLm9uID0gJ20taGVhZGVyLS1oaWRlJztcclxuICAgICAgICAgICAgb3B0aW9ucy5taW5pbWl6ZS5kZXNrdG9wLm9mZiA9ICdtLWhlYWRlci0tc2hvdyc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgb3B0aW9ucy5taW5pbWl6ZS5kZXNrdG9wID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoaGVhZGVyLmRhdGEoJ21pbmltaXplLW9mZnNldCcpKSB7XHJcbiAgICAgICAgICAgIG9wdGlvbnMub2Zmc2V0LmRlc2t0b3AgPSBoZWFkZXIuZGF0YSgnbWluaW1pemUtb2Zmc2V0Jyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoaGVhZGVyLmRhdGEoJ21pbmltaXplLW1vYmlsZS1vZmZzZXQnKSkge1xyXG4gICAgICAgICAgICBvcHRpb25zLm9mZnNldC5tb2JpbGUgPSBoZWFkZXIuZGF0YSgnbWluaW1pemUtbW9iaWxlLW9mZnNldCcpO1xyXG4gICAgICAgIH0gICAgICAgIFxyXG5cclxuICAgICAgICBoZWFkZXIubUhlYWRlcihvcHRpb25zKTtcclxuICAgIH07XHJcblxyXG4gICAgLy8gaGFuZGxlIGhvcml6b250YWwgbWVudVxyXG4gICAgdmFyIGluaXRIb3JNZW51ID0gZnVuY3Rpb24oKSB7IFxyXG4gICAgICAgIC8vIGluaXQgYXNpZGUgbGVmdCBvZmZjYW52YXNcclxuICAgICAgICBob3JNZW51T2ZmY2FudmFzID0gJCgnI21faGVhZGVyX21lbnUnKS5tT2ZmY2FudmFzKHtcclxuICAgICAgICAgICAgY2xhc3M6ICdtLWFzaWRlLWhlYWRlci1tZW51LW1vYmlsZScsXHJcbiAgICAgICAgICAgIG92ZXJsYXk6IHRydWUsXHJcbiAgICAgICAgICAgIGNsb3NlOiAnI21fYXNpZGVfaGVhZGVyX21lbnVfbW9iaWxlX2Nsb3NlX2J0bicsXHJcbiAgICAgICAgICAgIHRvZ2dsZToge1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0OiAnI21fYXNpZGVfaGVhZGVyX21lbnVfbW9iaWxlX3RvZ2dsZScsXHJcbiAgICAgICAgICAgICAgICBzdGF0ZTogJ20tYnJhbmRfX3RvZ2dsZXItLWFjdGl2ZSdcclxuICAgICAgICAgICAgfSAgICAgICAgICAgIFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGhvck1lbnUgPSAkKCcjbV9oZWFkZXJfbWVudScpLm1NZW51KHtcclxuICAgICAgICAgICAgLy8gc3VibWVudSBtb2Rlc1xyXG4gICAgICAgICAgICBzdWJtZW51OiB7XHJcbiAgICAgICAgICAgICAgICBkZXNrdG9wOiAnZHJvcGRvd24nLFxyXG4gICAgICAgICAgICAgICAgdGFibGV0OiAnYWNjb3JkaW9uJyxcclxuICAgICAgICAgICAgICAgIG1vYmlsZTogJ2FjY29yZGlvbidcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgLy8gcmVzaXplIG1lbnUgb24gd2luZG93IHJlc2l6ZVxyXG4gICAgICAgICAgICByZXNpemU6IHtcclxuICAgICAgICAgICAgICAgIGRlc2t0b3A6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBoZWFkZXJOYXZXaWR0aCA9ICQoJyNtX2hlYWRlcl9uYXYnKS53aWR0aCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBoZWFkZXJNZW51V2lkdGggPSAkKCcjbV9oZWFkZXJfbWVudV9jb250YWluZXInKS53aWR0aCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBoZWFkZXJUb3BiYXJXaWR0aCA9ICQoJyNtX2hlYWRlcl90b3BiYXInKS53aWR0aCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBzcGFyZVdpZHRoID0gMjA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICgoaGVhZGVyTWVudVdpZHRoICsgaGVhZGVyVG9wYmFyV2lkdGggKyBzcGFyZVdpZHRoKSA+IGhlYWRlck5hdldpZHRoICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9ICAgIFxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyBoYW5kbGUgdmVydGljYWwgbWVudVxyXG4gICAgdmFyIGluaXRMZWZ0QXNpZGVNZW51ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIG1lbnUgPSAkKCcjbV92ZXJfbWVudScpO1xyXG5cclxuICAgICAgICAvLyBpbml0IGFzaWRlIG1lbnVcclxuICAgICAgICB2YXIgbWVudU9wdGlvbnMgPSB7ICBcclxuICAgICAgICAgICAgLy8gc3VibWVudSBzZXR1cFxyXG4gICAgICAgICAgICBzdWJtZW51OiB7XHJcbiAgICAgICAgICAgICAgICBkZXNrdG9wOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gYnkgZGVmYXVsdCB0aGUgbWVudSBtb2RlIHNldCB0byBhY2NvcmRpb24gaW4gZGVza3RvcCBtb2RlXHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDogKG1lbnUuZGF0YSgnbWVudS1kcm9wZG93bicpID09IHRydWUgPyAnZHJvcGRvd24nIDogJ2FjY29yZGlvbicpLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHdoZW5ldmVyIGJvZHkgaGFzIHRoaXMgY2xhc3Mgc3dpdGNoIHRoZSBtZW51IG1vZGUgdG8gZHJvcGRvd25cclxuICAgICAgICAgICAgICAgICAgICBzdGF0ZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib2R5OiAnbS1hc2lkZS1sZWZ0LS1taW5pbWl6ZScsICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZTogJ2Ryb3Bkb3duJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB0YWJsZXQ6ICdhY2NvcmRpb24nLCAvLyBtZW51IHNldCB0byBhY2NvcmRpb24gaW4gdGFibGV0IG1vZGVcclxuICAgICAgICAgICAgICAgIG1vYmlsZTogJ2FjY29yZGlvbicgIC8vIG1lbnUgc2V0IHRvIGFjY29yZGlvbiBpbiBtb2JpbGUgbW9kZVxyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgLy9hY2NvcmRpb24gc2V0dXBcclxuICAgICAgICAgICAgYWNjb3JkaW9uOiB7XHJcbiAgICAgICAgICAgICAgICBhdXRvU2Nyb2xsOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgZXhwYW5kQWxsOiBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgYXNpZGVNZW51ID0gbWVudS5tTWVudShtZW51T3B0aW9ucyk7XHJcblxyXG4gICAgICAgIC8vIGhhbmRsZSBmaXhlZCBhc2lkZSBtZW51XHJcbiAgICAgICAgaWYgKG1lbnUuZGF0YSgnbWVudS1zY3JvbGxhYmxlJykpIHtcclxuICAgICAgICAgICAgZnVuY3Rpb24gaW5pdFNjcm9sbGFibGVNZW51KG9iaikgeyAgICBcclxuICAgICAgICAgICAgICAgIGlmIChtVXRpbC5pc0luUmVzcG9uc2l2ZVJhbmdlKCd0YWJsZXQtYW5kLW1vYmlsZScpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZGVzdHJveSBpZiB0aGUgaW5zdGFuY2Ugd2FzIHByZXZpb3VzbHkgY3JlYXRlZFxyXG4gICAgICAgICAgICAgICAgICAgIG1BcHAuZGVzdHJveVNjcm9sbGVyKG9iaik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHZhciBoZWlnaHQgPSBtVXRpbC5nZXRWaWV3UG9ydCgpLmhlaWdodCAtICQoJy5tLWhlYWRlcicpLm91dGVySGVpZ2h0KClcclxuICAgICAgICAgICAgICAgICAgICAtICgkKCcubS1hc2lkZS1sZWZ0IC5tLWFzaWRlX19oZWFkZXInKS5sZW5ndGggIT0gMCA/ICQoJy5tLWFzaWRlLWxlZnQgLm0tYXNpZGVfX2hlYWRlcicpLm91dGVySGVpZ2h0KCkgOiAwKVxyXG4gICAgICAgICAgICAgICAgICAgIC0gKCQoJy5tLWFzaWRlLWxlZnQgLm0tYXNpZGVfX2Zvb3RlcicpLmxlbmd0aCAhPSAwID8gJCgnLm0tYXNpZGUtbGVmdCAubS1hc2lkZV9fZm9vdGVyJykub3V0ZXJIZWlnaHQoKSA6IDApO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vLSAkKCcubS1mb290ZXInKS5vdXRlckhlaWdodCgpOyBcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBjcmVhdGUvcmUtY3JlYXRlIGEgbmV3IGluc3RhbmNlXHJcbiAgICAgICAgICAgICAgICBtQXBwLmluaXRTY3JvbGxlcihvYmosIHtoZWlnaHQ6IGhlaWdodH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpbml0U2Nyb2xsYWJsZU1lbnUoYXNpZGVNZW51KTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIG1VdGlsLmFkZFJlc2l6ZUhhbmRsZXIoZnVuY3Rpb24oKSB7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpbml0U2Nyb2xsYWJsZU1lbnUoYXNpZGVNZW51KTtcclxuICAgICAgICAgICAgfSk7ICAgXHJcbiAgICAgICAgfSAgICAgIFxyXG4gICAgfTtcclxuXHJcbiAgICAvLyBoYW5kbGUgdmVydGljYWwgbWVudVxyXG4gICAgdmFyIGluaXRMZWZ0QXNpZGUgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAvLyBpbml0IGFzaWRlIGxlZnQgb2ZmY2FudmFzXHJcbiAgICAgICAgdmFyIGFzaWRlT2ZmY2FudmFzQ2xhc3MgPSAoJCgnI21fYXNpZGVfbGVmdCcpLmhhc0NsYXNzKCdtLWFzaWRlLWxlZnQtLW9mZmNhbnZhcy1kZWZhdWx0JykgPyAnbS1hc2lkZS1sZWZ0LS1vZmZjYW52YXMtZGVmYXVsdCcgOiAnbS1hc2lkZS1sZWZ0Jyk7XHJcblxyXG4gICAgICAgIGFzaWRlTWVudU9mZmNhbnZhcyA9ICQoJyNtX2FzaWRlX2xlZnQnKS5tT2ZmY2FudmFzKHtcclxuICAgICAgICAgICAgY2xhc3M6IGFzaWRlT2ZmY2FudmFzQ2xhc3MsXHJcbiAgICAgICAgICAgIG92ZXJsYXk6IHRydWUsXHJcbiAgICAgICAgICAgIGNsb3NlOiAnI21fYXNpZGVfbGVmdF9jbG9zZV9idG4nLFxyXG4gICAgICAgICAgICB0b2dnbGU6IHtcclxuICAgICAgICAgICAgICAgIHRhcmdldDogJyNtX2FzaWRlX2xlZnRfb2ZmY2FudmFzX3RvZ2dsZScsXHJcbiAgICAgICAgICAgICAgICBzdGF0ZTogJ20tYnJhbmRfX3RvZ2dsZXItLWFjdGl2ZScgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0gICAgICAgICAgICBcclxuICAgICAgICB9KTsgICAgICAgIFxyXG4gICAgfTtcclxuXHJcbiAgICAvLyBoYW5kbGUgc2lkZWJhciB0b2dnbGVcclxuICAgIHZhciBpbml0TGVmdEFzaWRlVG9nZ2xlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJCgnI21fYXNpZGVfbGVmdF9taW5pbWl6ZV90b2dnbGUnKS5tVG9nZ2xlKHtcclxuICAgICAgICAgICAgdGFyZ2V0OiAnYm9keScsXHJcbiAgICAgICAgICAgIHRhcmdldFN0YXRlOiAnbS1icmFuZC0tbWluaW1pemUgbS1hc2lkZS1sZWZ0LS1taW5pbWl6ZScsXHJcbiAgICAgICAgICAgIHRvZ2dsZXJTdGF0ZTogJ20tYnJhbmRfX3RvZ2dsZXItLWFjdGl2ZSdcclxuICAgICAgICB9KS5vbigndG9nZ2xlJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGhvck1lbnUucGF1c2VEcm9wZG93bkhvdmVyKDgwMCk7XHJcbiAgICAgICAgICAgIGFzaWRlTWVudS5wYXVzZURyb3Bkb3duSG92ZXIoODAwKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJCgnI21fYXNpZGVfbGVmdF9oaWRlX3RvZ2dsZScpLm1Ub2dnbGUoe1xyXG4gICAgICAgICAgICB0YXJnZXQ6ICdib2R5JyxcclxuICAgICAgICAgICAgdGFyZ2V0U3RhdGU6ICdtLWFzaWRlLWxlZnQtLWhpZGUnLFxyXG4gICAgICAgICAgICB0b2dnbGVyU3RhdGU6ICdtLWJyYW5kX190b2dnbGVyLS1hY3RpdmUnXHJcbiAgICAgICAgfSkub24oJ3RvZ2dsZScsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBob3JNZW51LnBhdXNlRHJvcGRvd25Ib3Zlcig4MDApO1xyXG4gICAgICAgICAgICBhc2lkZU1lbnUucGF1c2VEcm9wZG93bkhvdmVyKDgwMCk7XHJcbiAgICAgICAgfSlcclxuICAgIH07XHJcblxyXG4gICAgdmFyIGluaXRUb3BiYXIgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAkKCcjbV9hc2lkZV9oZWFkZXJfdG9wYmFyX21vYmlsZV90b2dnbGUnKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgJCgnYm9keScpLnRvZ2dsZUNsYXNzKCdtLXRvcGJhci0tb24nKTtcclxuICAgICAgICB9KTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgIC8vIEFuaW1hdGVkIE5vdGlmaWNhdGlvbiBJY29uIFxyXG4gICAgICAgIHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAkKCcjbV90b3BiYXJfbm90aWZpY2F0aW9uX2ljb24gLm0tbmF2X19saW5rLWljb24nKS5hZGRDbGFzcygnbS1hbmltYXRlLXNoYWtlJyk7XHJcbiAgICAgICAgICAgICQoJyNtX3RvcGJhcl9ub3RpZmljYXRpb25faWNvbiAubS1uYXZfX2xpbmstYmFkZ2UnKS5hZGRDbGFzcygnbS1hbmltYXRlLWJsaW5rJyk7XHJcbiAgICAgICAgfSwgMzAwMCk7XHJcblxyXG4gICAgICAgIHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAkKCcjbV90b3BiYXJfbm90aWZpY2F0aW9uX2ljb24gLm0tbmF2X19saW5rLWljb24nKS5yZW1vdmVDbGFzcygnbS1hbmltYXRlLXNoYWtlJyk7XHJcbiAgICAgICAgICAgICQoJyNtX3RvcGJhcl9ub3RpZmljYXRpb25faWNvbiAubS1uYXZfX2xpbmstYmFkZ2UnKS5yZW1vdmVDbGFzcygnbS1hbmltYXRlLWJsaW5rJyk7XHJcbiAgICAgICAgfSwgNjAwMCk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIGhhbmRsZSBxdWljayBzZWFyY2hcclxuICAgIHZhciBpbml0UXVpY2tzZWFyY2ggPSBmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgcXMgPSAkKCcjbV9xdWlja3NlYXJjaCcpO1xyXG5cclxuICAgICAgICBxcy5tUXVpY2tzZWFyY2goe1xyXG4gICAgICAgICAgICB0eXBlOiBxcy5kYXRhKCdzZWFyY2gtdHlwZScpLCAvLyBxdWljayBzZWFyY2ggdHlwZVxyXG4gICAgICAgICAgICBzb3VyY2U6ICdpbmMvYXBpL3F1aWNrX3NlYXJjaC5waHAnLCAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBzcGlubmVyOiAnbS1sb2FkZXIgbS1sb2FkZXItLXNraW4tbGlnaHQgbS1sb2FkZXItLXJpZ2h0JyxcclxuXHJcbiAgICAgICAgICAgIGlucHV0OiAnI21fcXVpY2tzZWFyY2hfaW5wdXQnLFxyXG4gICAgICAgICAgICBpY29uQ2xvc2U6ICcjbV9xdWlja3NlYXJjaF9jbG9zZScsXHJcbiAgICAgICAgICAgIGljb25DYW5jZWw6ICcjbV9xdWlja3NlYXJjaF9jYW5jZWwnLFxyXG4gICAgICAgICAgICBpY29uU2VhcmNoOiAnI21fcXVpY2tzZWFyY2hfc2VhcmNoJyxcclxuXHJcbiAgICAgICAgICAgIGhhc1Jlc3VsdENsYXNzOiAnbS1saXN0LXNlYXJjaC0taGFzLXJlc3VsdCcsXHJcbiAgICAgICAgICAgIG1pbkxlbmd0aDogMSwgICAgICAgICAgICBcclxuICAgICAgICAgICAgdGVtcGxhdGVzOiB7XHJcbiAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24ocXMpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJzxkaXYgY2xhc3M9XCJtLXNlYXJjaC1yZXN1bHRzIG0tc2VhcmNoLXJlc3VsdHMtLXNraW4tbGlnaHRcIj48c3BhbiBjbGFzcz1cIm0tc2VhcmNoLXJlc3VsdF9fbWVzc2FnZVwiPlNvbWV0aGluZyB3ZW50IHdyb25nPC9kaXY+PC9kaXY+JztcclxuICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTsgICAgICBcclxuICAgIH07XHJcblxyXG4gICAgdmFyIGluaXRTY3JvbGxUb3AgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAkKCdbZGF0YS10b2dnbGU9XCJtLXNjcm9sbC10b3BcIl0nKS5tU2Nyb2xsVG9wKHtcclxuICAgICAgICAgICAgb2Zmc2V0OiAzMDAsXHJcbiAgICAgICAgICAgIHNwZWVkOiA2MDBcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBpbml0OiBmdW5jdGlvbigpIHsgIFxyXG4gICAgICAgICAgICB0aGlzLmluaXRIZWFkZXIoKTtcclxuICAgICAgICAgICAgdGhpcy5pbml0QXNpZGUoKTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBpbml0SGVhZGVyOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgaW5pdFN0aWNreUhlYWRlcigpO1xyXG4gICAgICAgICAgICBpbml0SG9yTWVudSgpO1xyXG4gICAgICAgICAgICBpbml0VG9wYmFyKCk7XHJcbiAgICAgICAgICAgIGluaXRRdWlja3NlYXJjaCgpO1xyXG4gICAgICAgICAgICBpbml0U2Nyb2xsVG9wKCk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgaW5pdEFzaWRlOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgaW5pdExlZnRBc2lkZSgpO1xyXG4gICAgICAgICAgICBpbml0TGVmdEFzaWRlTWVudSgpOyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpbml0TGVmdEFzaWRlVG9nZ2xlKCk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgZ2V0QXNpZGVNZW51OiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGFzaWRlTWVudTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBjbG9zZU1vYmlsZUFzaWRlTWVudU9mZmNhbnZhczogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGlmIChtVXRpbC5pc01vYmlsZURldmljZSgpKSB7XHJcbiAgICAgICAgICAgICAgICBhc2lkZU1lbnVPZmZjYW52YXMuaGlkZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgY2xvc2VNb2JpbGVIb3JNZW51T2ZmY2FudmFzOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgaWYgKG1VdGlsLmlzTW9iaWxlRGV2aWNlKCkpIHtcclxuICAgICAgICAgICAgICAgIGhvck1lbnVPZmZjYW52YXMuaGlkZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufSgpO1xyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcbiAgICBpZiAobVV0aWwuaXNBbmd1bGFyVmVyc2lvbigpID09PSBmYWxzZSkge1xyXG4gICAgICAgIG1MYXlvdXQuaW5pdCgpO1xyXG4gICAgfVxyXG59KTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL3NyYy9qcy9hcHBzL2xheW91dC9iYXNlL2xheW91dC5qcyJdLCJzb3VyY2VSb290IjoiIn0=