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
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/app/js/dashboard.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/app/js/dashboard.js":
/*!************************************!*\
  !*** ./assets/app/js/dashboard.js ***!
  \************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

//== Class definition
var Dashboard = function () {

    //== Sparkline Chart helper function
    var _initSparklineChart = function _initSparklineChart(src, data, color, border) {
        if (src.length == 0) {
            return;
        }

        var config = {
            type: 'line',
            data: {
                labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October"],
                datasets: [{
                    label: "",
                    borderColor: color,
                    borderWidth: border,

                    pointHoverRadius: 4,
                    pointHoverBorderWidth: 12,
                    pointBackgroundColor: Chart.helpers.color('#000000').alpha(0).rgbString(),
                    pointBorderColor: Chart.helpers.color('#000000').alpha(0).rgbString(),
                    pointHoverBackgroundColor: mUtil.getColor('danger'),
                    pointHoverBorderColor: Chart.helpers.color('#000000').alpha(0.1).rgbString(),
                    fill: false,
                    data: data
                }]
            },
            options: {
                title: {
                    display: false
                },
                tooltips: {
                    enabled: false,
                    intersect: false,
                    mode: 'nearest',
                    xPadding: 10,
                    yPadding: 10,
                    caretPadding: 10
                },
                legend: {
                    display: false,
                    labels: {
                        usePointStyle: false
                    }
                },
                responsive: true,
                maintainAspectRatio: true,
                hover: {
                    mode: 'index'
                },
                scales: {
                    xAxes: [{
                        display: false,
                        gridLines: false,
                        scaleLabel: {
                            display: true,
                            labelString: 'Month'
                        }
                    }],
                    yAxes: [{
                        display: false,
                        gridLines: false,
                        scaleLabel: {
                            display: true,
                            labelString: 'Value'
                        },
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                },

                elements: {
                    point: {
                        radius: 4,
                        borderWidth: 12
                    }
                },

                layout: {
                    padding: {
                        left: 0,
                        right: 10,
                        top: 5,
                        bottom: 0
                    }
                }
            }
        };

        return new Chart(src, config);
    };

    //== Daily Sales chart.
    //** Based on Chartjs plugin - http://www.chartjs.org/
    var dailySales = function dailySales() {
        var chartContainer = $('#m_chart_daily_sales');

        if (chartContainer.length == 0) {
            return;
        }

        var chartData = {
            labels: ["Label 1", "Label 2", "Label 3", "Label 4", "Label 5", "Label 6", "Label 7", "Label 8", "Label 9", "Label 10", "Label 11", "Label 12", "Label 13", "Label 14", "Label 15", "Label 16"],
            datasets: [{
                //label: 'Dataset 1',
                backgroundColor: mUtil.getColor('success'),
                data: [15, 20, 25, 30, 25, 20, 15, 20, 25, 30, 25, 20, 15, 10, 15, 20]
            }, {
                //label: 'Dataset 2',
                backgroundColor: '#f3f3fb',
                data: [15, 20, 25, 30, 25, 20, 15, 20, 25, 30, 25, 20, 15, 10, 15, 20]
            }]
        };

        var chart = new Chart(chartContainer, {
            type: 'bar',
            data: chartData,
            options: {
                title: {
                    display: false
                },
                tooltips: {
                    intersect: false,
                    mode: 'nearest',
                    xPadding: 10,
                    yPadding: 10,
                    caretPadding: 10
                },
                legend: {
                    display: false
                },
                responsive: true,
                maintainAspectRatio: false,
                barRadius: 4,
                scales: {
                    xAxes: [{
                        display: false,
                        gridLines: false,
                        stacked: true
                    }],
                    yAxes: [{
                        display: false,
                        stacked: true,
                        gridLines: false
                    }]
                },
                layout: {
                    padding: {
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0
                    }
                }
            }
        });
    };

    //== Profit Share Chart.
    //** Based on Chartist plugin - https://gionkunz.github.io/chartist-js/index.html
    var profitShare = function profitShare() {
        if ($('#m_chart_profit_share').length == 0) {
            return;
        }

        var chart = new Chartist.Pie('#m_chart_profit_share', {
            series: [{
                value: 32,
                className: 'custom',
                meta: {
                    color: mUtil.getColor('brand')
                }
            }, {
                value: 32,
                className: 'custom',
                meta: {
                    color: mUtil.getColor('accent')
                }
            }, {
                value: 36,
                className: 'custom',
                meta: {
                    color: mUtil.getColor('warning')
                }
            }],
            labels: [1, 2, 3]
        }, {
            donut: true,
            donutWidth: 17,
            showLabel: false
        });

        chart.on('draw', function (data) {
            if (data.type === 'slice') {
                // Get the total path length in order to use for dash array animation
                var pathLength = data.element._node.getTotalLength();

                // Set a dasharray that matches the path length as prerequisite to animate dashoffset
                data.element.attr({
                    'stroke-dasharray': pathLength + 'px ' + pathLength + 'px'
                });

                // Create animation definition while also assigning an ID to the animation for later sync usage
                var animationDefinition = {
                    'stroke-dashoffset': {
                        id: 'anim' + data.index,
                        dur: 1000,
                        from: -pathLength + 'px',
                        to: '0px',
                        easing: Chartist.Svg.Easing.easeOutQuint,
                        // We need to use `fill: 'freeze'` otherwise our animation will fall back to initial (not visible)
                        fill: 'freeze',
                        'stroke': data.meta.color
                    }
                };

                // If this was not the first slice, we need to time the animation so that it uses the end sync event of the previous animation
                if (data.index !== 0) {
                    animationDefinition['stroke-dashoffset'].begin = 'anim' + (data.index - 1) + '.end';
                }

                // We need to set an initial value before the animation starts as we are not in guided mode which would do that for us

                data.element.attr({
                    'stroke-dashoffset': -pathLength + 'px',
                    'stroke': data.meta.color
                });

                // We can't use guided mode as the animations need to rely on setting begin manually
                // See http://gionkunz.github.io/chartist-js/api-documentation.html#chartistsvg-function-animate
                data.element.animate(animationDefinition, false);
            }
        });

        // For the sake of the example we update the chart every time it's created with a delay of 8 seconds
        chart.on('created', function () {
            if (window.__anim21278907124) {
                clearTimeout(window.__anim21278907124);
                window.__anim21278907124 = null;
            }
            window.__anim21278907124 = setTimeout(chart.update.bind(chart), 15000);
        });
    };

    //== Sales Stats.
    //** Based on Chartjs plugin - http://www.chartjs.org/
    var salesStats = function salesStats() {
        if ($('#m_chart_sales_stats').length == 0) {
            return;
        }

        var config = {
            type: 'line',
            data: {
                labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", "January", "February", "March", "April"],
                datasets: [{
                    label: "Sales Stats",
                    borderColor: mUtil.getColor('brand'),
                    borderWidth: 2,
                    pointBackgroundColor: mUtil.getColor('brand'),

                    backgroundColor: mUtil.getColor('accent'),

                    pointHoverBackgroundColor: mUtil.getColor('danger'),
                    pointHoverBorderColor: Chart.helpers.color(mUtil.getColor('danger')).alpha(0.2).rgbString(),
                    data: [10, 20, 16, 18, 12, 40, 35, 30, 33, 34, 45, 40, 60, 55, 70, 65, 75, 62]
                }]
            },
            options: {
                title: {
                    display: false
                },
                tooltips: {
                    intersect: false,
                    mode: 'nearest',
                    xPadding: 10,
                    yPadding: 10,
                    caretPadding: 10
                },
                legend: {
                    display: false,
                    labels: {
                        usePointStyle: false
                    }
                },
                responsive: true,
                maintainAspectRatio: false,
                hover: {
                    mode: 'index'
                },
                scales: {
                    xAxes: [{
                        display: false,
                        gridLines: false,
                        scaleLabel: {
                            display: true,
                            labelString: 'Month'
                        }
                    }],
                    yAxes: [{
                        display: false,
                        gridLines: false,
                        scaleLabel: {
                            display: true,
                            labelString: 'Value'
                        }
                    }]
                },

                elements: {
                    point: {
                        radius: 3,
                        borderWidth: 0,

                        hoverRadius: 8,
                        hoverBorderWidth: 2
                    }
                }
            }
        };

        var chart = new Chart($('#m_chart_sales_stats'), config);
    };

    //== Sales By mUtillication Stats.
    //** Based on Chartjs plugin - http://www.chartjs.org/
    var salesByApps = function salesByApps() {
        // Init chart instances
        _initSparklineChart($('#m_chart_sales_by_apps_1_1'), [10, 20, -5, 8, -20, -2, -4, 15, 5, 8], mUtil.getColor('accent'), 2);
        _initSparklineChart($('#m_chart_sales_by_apps_1_2'), [2, 16, 0, 12, 22, 5, -10, 5, 15, 2], mUtil.getColor('danger'), 2);
        _initSparklineChart($('#m_chart_sales_by_apps_1_3'), [15, 5, -10, 5, 16, 22, 6, -6, -12, 5], mUtil.getColor('success'), 2);
        _initSparklineChart($('#m_chart_sales_by_apps_1_4'), [8, 18, -12, 12, 22, -2, -14, 16, 18, 2], mUtil.getColor('warning'), 2);

        _initSparklineChart($('#m_chart_sales_by_apps_2_1'), [10, 20, -5, 8, -20, -2, -4, 15, 5, 8], mUtil.getColor('danger'), 2);
        _initSparklineChart($('#m_chart_sales_by_apps_2_2'), [2, 16, 0, 12, 22, 5, -10, 5, 15, 2], mUtil.getColor('metal'), 2);
        _initSparklineChart($('#m_chart_sales_by_apps_2_3'), [15, 5, -10, 5, 16, 22, 6, -6, -12, 5], mUtil.getColor('brand'), 2);
        _initSparklineChart($('#m_chart_sales_by_apps_2_4'), [8, 18, -12, 12, 22, -2, -14, 16, 18, 2], mUtil.getColor('info'), 2);
    };

    //== Latest Updates.
    //** Based on Chartjs plugin - http://www.chartjs.org/
    var latestUpdates = function latestUpdates() {
        if ($('#m_chart_latest_updates').length == 0) {
            return;
        }

        var ctx = document.getElementById("m_chart_latest_updates").getContext("2d");

        var config = {
            type: 'line',
            data: {
                labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October"],
                datasets: [{
                    label: "Sales Stats",
                    backgroundColor: mUtil.getColor('danger'), // Put the gradient here as a fill color
                    borderColor: mUtil.getColor('danger'),
                    pointBackgroundColor: Chart.helpers.color('#000000').alpha(0).rgbString(),
                    pointBorderColor: Chart.helpers.color('#000000').alpha(0).rgbString(),
                    pointHoverBackgroundColor: mUtil.getColor('accent'),
                    pointHoverBorderColor: Chart.helpers.color('#000000').alpha(0.1).rgbString(),

                    //fill: 'start',
                    data: [10, 14, 12, 16, 9, 11, 13, 9, 13, 15]
                }]
            },
            options: {
                title: {
                    display: false
                },
                tooltips: {
                    intersect: false,
                    mode: 'nearest',
                    xPadding: 10,
                    yPadding: 10,
                    caretPadding: 10
                },
                legend: {
                    display: false
                },
                responsive: true,
                maintainAspectRatio: false,
                hover: {
                    mode: 'index'
                },
                scales: {
                    xAxes: [{
                        display: false,
                        gridLines: false,
                        scaleLabel: {
                            display: true,
                            labelString: 'Month'
                        }
                    }],
                    yAxes: [{
                        display: false,
                        gridLines: false,
                        scaleLabel: {
                            display: true,
                            labelString: 'Value'
                        },
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                },
                elements: {
                    line: {
                        tension: 0.0000001
                    },
                    point: {
                        radius: 4,
                        borderWidth: 12
                    }
                }
            }
        };

        var chart = new Chart(ctx, config);
    };

    //== Trends Stats.
    //** Based on Chartjs plugin - http://www.chartjs.org/
    var trendsStats = function trendsStats() {
        if ($('#m_chart_trends_stats').length == 0) {
            return;
        }

        var ctx = document.getElementById("m_chart_trends_stats").getContext("2d");

        var gradient = ctx.createLinearGradient(0, 0, 0, 240);
        gradient.addColorStop(0, Chart.helpers.color('#00c5dc').alpha(0.7).rgbString());
        gradient.addColorStop(1, Chart.helpers.color('#f2feff').alpha(0).rgbString());

        var config = {
            type: 'line',
            data: {
                labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "January", "February", "March", "April"],
                datasets: [{
                    label: "Sales Stats",
                    backgroundColor: gradient, // Put the gradient here as a fill color
                    borderColor: '#0dc8de',

                    pointBackgroundColor: Chart.helpers.color('#ffffff').alpha(0).rgbString(),
                    pointBorderColor: Chart.helpers.color('#ffffff').alpha(0).rgbString(),
                    pointHoverBackgroundColor: mUtil.getColor('danger'),
                    pointHoverBorderColor: Chart.helpers.color('#000000').alpha(0.2).rgbString(),

                    //fill: 'start',
                    data: [20, 10, 18, 15, 26, 18, 15, 22, 16, 12, 12, 13, 10, 18, 14, 24, 16, 12, 19, 21, 16, 14, 21, 21, 13, 15, 22, 24, 21, 11, 14, 19, 21, 17]
                }]
            },
            options: {
                title: {
                    display: false
                },
                tooltips: {
                    intersect: false,
                    mode: 'nearest',
                    xPadding: 10,
                    yPadding: 10,
                    caretPadding: 10
                },
                legend: {
                    display: false
                },
                responsive: true,
                maintainAspectRatio: false,
                hover: {
                    mode: 'index'
                },
                scales: {
                    xAxes: [{
                        display: false,
                        gridLines: false,
                        scaleLabel: {
                            display: true,
                            labelString: 'Month'
                        }
                    }],
                    yAxes: [{
                        display: false,
                        gridLines: false,
                        scaleLabel: {
                            display: true,
                            labelString: 'Value'
                        },
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                },
                elements: {
                    line: {
                        tension: 0.19
                    },
                    point: {
                        radius: 4,
                        borderWidth: 12
                    }
                },
                layout: {
                    padding: {
                        left: 0,
                        right: 0,
                        top: 5,
                        bottom: 0
                    }
                }
            }
        };

        var chart = new Chart(ctx, config);
    };

    //== Trends Stats 2.
    //** Based on Chartjs plugin - http://www.chartjs.org/
    var trendsStats2 = function trendsStats2() {
        if ($('#m_chart_trends_stats_2').length == 0) {
            return;
        }

        var ctx = document.getElementById("m_chart_trends_stats_2").getContext("2d");

        var config = {
            type: 'line',
            data: {
                labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "January", "February", "March", "April"],
                datasets: [{
                    label: "Sales Stats",
                    backgroundColor: '#d2f5f9', // Put the gradient here as a fill color
                    borderColor: mUtil.getColor('brand'),

                    pointBackgroundColor: Chart.helpers.color('#ffffff').alpha(0).rgbString(),
                    pointBorderColor: Chart.helpers.color('#ffffff').alpha(0).rgbString(),
                    pointHoverBackgroundColor: mUtil.getColor('danger'),
                    pointHoverBorderColor: Chart.helpers.color('#000000').alpha(0.2).rgbString(),

                    //fill: 'start',
                    data: [20, 10, 18, 15, 32, 18, 15, 22, 8, 6, 12, 13, 10, 18, 14, 24, 16, 12, 19, 21, 16, 14, 24, 21, 13, 15, 27, 29, 21, 11, 14, 19, 21, 17]
                }]
            },
            options: {
                title: {
                    display: false
                },
                tooltips: {
                    intersect: false,
                    mode: 'nearest',
                    xPadding: 10,
                    yPadding: 10,
                    caretPadding: 10
                },
                legend: {
                    display: false
                },
                responsive: true,
                maintainAspectRatio: false,
                hover: {
                    mode: 'index'
                },
                scales: {
                    xAxes: [{
                        display: false,
                        gridLines: false,
                        scaleLabel: {
                            display: true,
                            labelString: 'Month'
                        }
                    }],
                    yAxes: [{
                        display: false,
                        gridLines: false,
                        scaleLabel: {
                            display: true,
                            labelString: 'Value'
                        },
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                },
                elements: {
                    line: {
                        tension: 0.19
                    },
                    point: {
                        radius: 4,
                        borderWidth: 12
                    }
                },
                layout: {
                    padding: {
                        left: 0,
                        right: 0,
                        top: 5,
                        bottom: 0
                    }
                }
            }
        };

        var chart = new Chart(ctx, config);
    };

    //== Trends Stats.
    //** Based on Chartjs plugin - http://www.chartjs.org/
    var latestTrendsMap = function latestTrendsMap() {
        if ($('#m_chart_latest_trends_map').length == 0) {
            return;
        }

        try {
            var map = new GMaps({
                div: '#m_chart_latest_trends_map',
                lat: -12.043333,
                lng: -77.028333
            });
        } catch (e) {
            console.log(e);
        }
    };

    //== Revenue Change.
    //** Based on Morris plugin - http://morrisjs.github.io/morris.js/
    var revenueChange = function revenueChange() {
        if ($('#m_chart_revenue_change').length == 0) {
            return;
        }

        Morris.Donut({
            element: 'm_chart_revenue_change',
            data: [{
                label: "New York",
                value: 10
            }, {
                label: "London",
                value: 7
            }, {
                label: "Paris",
                value: 20
            }],
            colors: [mUtil.getColor('accent'), mUtil.getColor('danger'), mUtil.getColor('brand')]
        });
    };

    //== Support Tickets Chart.
    //** Based on Morris plugin - http://morrisjs.github.io/morris.js/
    var supportTickets = function supportTickets() {
        if ($('#m_chart_support_tickets').length == 0) {
            return;
        }

        Morris.Donut({
            element: 'm_chart_support_tickets',
            data: [{
                label: "Margins",
                value: 20
            }, {
                label: "Profit",
                value: 70
            }, {
                label: "Lost",
                value: 10
            }],
            labelColor: '#a7a7c2',
            colors: [mUtil.getColor('accent'), mUtil.getColor('brand'), mUtil.getColor('danger')]
            //formatter: function (x) { return x + "%"}
        });
    };

    //== Support Tickets Chart.
    //** Based on Morris plugin - http://morrisjs.github.io/morris.js/
    var supportTickets2 = function supportTickets2() {
        if ($('#m_chart_support_tickets2').length == 0) {
            return;
        }

        var chart = new Chartist.Pie('#m_chart_support_tickets2', {
            series: [{
                value: 32,
                className: 'custom',
                meta: {
                    color: mUtil.getColor('brand')
                }
            }, {
                value: 32,
                className: 'custom',
                meta: {
                    color: mUtil.getColor('accent')
                }
            }, {
                value: 36,
                className: 'custom',
                meta: {
                    color: mUtil.getColor('warning')
                }
            }],
            labels: [1, 2, 3]
        }, {
            donut: true,
            donutWidth: 17,
            showLabel: false
        });

        chart.on('draw', function (data) {
            if (data.type === 'slice') {
                // Get the total path length in order to use for dash array animation
                var pathLength = data.element._node.getTotalLength();

                // Set a dasharray that matches the path length as prerequisite to animate dashoffset
                data.element.attr({
                    'stroke-dasharray': pathLength + 'px ' + pathLength + 'px'
                });

                // Create animation definition while also assigning an ID to the animation for later sync usage
                var animationDefinition = {
                    'stroke-dashoffset': {
                        id: 'anim' + data.index,
                        dur: 1000,
                        from: -pathLength + 'px',
                        to: '0px',
                        easing: Chartist.Svg.Easing.easeOutQuint,
                        // We need to use `fill: 'freeze'` otherwise our animation will fall back to initial (not visible)
                        fill: 'freeze',
                        'stroke': data.meta.color
                    }
                };

                // If this was not the first slice, we need to time the animation so that it uses the end sync event of the previous animation
                if (data.index !== 0) {
                    animationDefinition['stroke-dashoffset'].begin = 'anim' + (data.index - 1) + '.end';
                }

                // We need to set an initial value before the animation starts as we are not in guided mode which would do that for us

                data.element.attr({
                    'stroke-dashoffset': -pathLength + 'px',
                    'stroke': data.meta.color
                });

                // We can't use guided mode as the animations need to rely on setting begin manually
                // See http://gionkunz.github.io/chartist-js/api-documentation.html#chartistsvg-function-animate
                data.element.animate(animationDefinition, false);
            }
        });
    };

    //== Activities Charts.
    //** Based on Chartjs plugin - http://www.chartjs.org/
    var activitiesChart = function activitiesChart() {
        if ($('#m_chart_activities').length == 0) {
            return;
        }

        var ctx = document.getElementById("m_chart_activities").getContext("2d");

        var gradient = ctx.createLinearGradient(0, 0, 0, 240);
        gradient.addColorStop(0, Chart.helpers.color('#e14c86').alpha(1).rgbString());
        gradient.addColorStop(1, Chart.helpers.color('#e14c86').alpha(0.3).rgbString());

        var config = {
            type: 'line',
            data: {
                labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October"],
                datasets: [{
                    label: "Sales Stats",
                    backgroundColor: gradient,
                    borderColor: '#e13a58',

                    pointBackgroundColor: Chart.helpers.color('#000000').alpha(0).rgbString(),
                    pointBorderColor: Chart.helpers.color('#000000').alpha(0).rgbString(),
                    pointHoverBackgroundColor: mUtil.getColor('light'),
                    pointHoverBorderColor: Chart.helpers.color('#ffffff').alpha(0.1).rgbString(),

                    //fill: 'start',
                    data: [10, 14, 12, 16, 9, 11, 13, 9, 13, 15]
                }]
            },
            options: {
                title: {
                    display: false
                },
                tooltips: {
                    mode: 'nearest',
                    intersect: false,
                    position: 'nearest',
                    xPadding: 10,
                    yPadding: 10,
                    caretPadding: 10
                },
                legend: {
                    display: false
                },
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    xAxes: [{
                        display: false,
                        gridLines: false,
                        scaleLabel: {
                            display: true,
                            labelString: 'Month'
                        }
                    }],
                    yAxes: [{
                        display: false,
                        gridLines: false,
                        scaleLabel: {
                            display: true,
                            labelString: 'Value'
                        },
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                },
                elements: {
                    line: {
                        tension: 0.0000001
                    },
                    point: {
                        radius: 4,
                        borderWidth: 12
                    }
                },
                layout: {
                    padding: {
                        left: 0,
                        right: 0,
                        top: 10,
                        bottom: 0
                    }
                }
            }
        };

        var chart = new Chart(ctx, config);
    };

    //== Bandwidth Charts 1.
    //** Based on Chartjs plugin - http://www.chartjs.org/
    var bandwidthChart1 = function bandwidthChart1() {
        if ($('#m_chart_bandwidth1').length == 0) {
            return;
        }

        var ctx = document.getElementById("m_chart_bandwidth1").getContext("2d");

        var gradient = ctx.createLinearGradient(0, 0, 0, 240);
        gradient.addColorStop(0, Chart.helpers.color('#d1f1ec').alpha(1).rgbString());
        gradient.addColorStop(1, Chart.helpers.color('#d1f1ec').alpha(0.3).rgbString());

        var config = {
            type: 'line',
            data: {
                labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October"],
                datasets: [{
                    label: "Bandwidth Stats",
                    backgroundColor: gradient,
                    borderColor: mUtil.getColor('success'),

                    pointBackgroundColor: Chart.helpers.color('#000000').alpha(0).rgbString(),
                    pointBorderColor: Chart.helpers.color('#000000').alpha(0).rgbString(),
                    pointHoverBackgroundColor: mUtil.getColor('danger'),
                    pointHoverBorderColor: Chart.helpers.color('#000000').alpha(0.1).rgbString(),

                    //fill: 'start',
                    data: [10, 14, 12, 16, 9, 11, 13, 9, 13, 15]
                }]
            },
            options: {
                title: {
                    display: false
                },
                tooltips: {
                    mode: 'nearest',
                    intersect: false,
                    position: 'nearest',
                    xPadding: 10,
                    yPadding: 10,
                    caretPadding: 10
                },
                legend: {
                    display: false
                },
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    xAxes: [{
                        display: false,
                        gridLines: false,
                        scaleLabel: {
                            display: true,
                            labelString: 'Month'
                        }
                    }],
                    yAxes: [{
                        display: false,
                        gridLines: false,
                        scaleLabel: {
                            display: true,
                            labelString: 'Value'
                        },
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                },
                elements: {
                    line: {
                        tension: 0.0000001
                    },
                    point: {
                        radius: 4,
                        borderWidth: 12
                    }
                },
                layout: {
                    padding: {
                        left: 0,
                        right: 0,
                        top: 10,
                        bottom: 0
                    }
                }
            }
        };

        var chart = new Chart(ctx, config);
    };

    //== Bandwidth Charts 2.
    //** Based on Chartjs plugin - http://www.chartjs.org/
    var bandwidthChart2 = function bandwidthChart2() {
        if ($('#m_chart_bandwidth2').length == 0) {
            return;
        }

        var ctx = document.getElementById("m_chart_bandwidth2").getContext("2d");

        var gradient = ctx.createLinearGradient(0, 0, 0, 240);
        gradient.addColorStop(0, Chart.helpers.color('#ffefce').alpha(1).rgbString());
        gradient.addColorStop(1, Chart.helpers.color('#ffefce').alpha(0.3).rgbString());

        var config = {
            type: 'line',
            data: {
                labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October"],
                datasets: [{
                    label: "Bandwidth Stats",
                    backgroundColor: gradient,
                    borderColor: mUtil.getColor('warning'),

                    pointBackgroundColor: Chart.helpers.color('#000000').alpha(0).rgbString(),
                    pointBorderColor: Chart.helpers.color('#000000').alpha(0).rgbString(),
                    pointHoverBackgroundColor: mUtil.getColor('danger'),
                    pointHoverBorderColor: Chart.helpers.color('#000000').alpha(0.1).rgbString(),

                    //fill: 'start',
                    data: [10, 14, 12, 16, 9, 11, 13, 9, 13, 15]
                }]
            },
            options: {
                title: {
                    display: false
                },
                tooltips: {
                    mode: 'nearest',
                    intersect: false,
                    position: 'nearest',
                    xPadding: 10,
                    yPadding: 10,
                    caretPadding: 10
                },
                legend: {
                    display: false
                },
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    xAxes: [{
                        display: false,
                        gridLines: false,
                        scaleLabel: {
                            display: true,
                            labelString: 'Month'
                        }
                    }],
                    yAxes: [{
                        display: false,
                        gridLines: false,
                        scaleLabel: {
                            display: true,
                            labelString: 'Value'
                        },
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                },
                elements: {
                    line: {
                        tension: 0.0000001
                    },
                    point: {
                        radius: 4,
                        borderWidth: 12
                    }
                },
                layout: {
                    padding: {
                        left: 0,
                        right: 0,
                        top: 10,
                        bottom: 0
                    }
                }
            }
        };

        var chart = new Chart(ctx, config);
    };

    //== Bandwidth Charts 2.
    //** Based on Chartjs plugin - http://www.chartjs.org/
    var adWordsStat = function adWordsStat() {
        if ($('#m_chart_adwords_stats').length == 0) {
            return;
        }

        var ctx = document.getElementById("m_chart_adwords_stats").getContext("2d");

        var gradient = ctx.createLinearGradient(0, 0, 0, 240);
        gradient.addColorStop(0, Chart.helpers.color('#ffefce').alpha(1).rgbString());
        gradient.addColorStop(1, Chart.helpers.color('#ffefce').alpha(0.3).rgbString());

        var config = {
            type: 'line',
            data: {
                labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October"],
                datasets: [{
                    label: "AdWord Clicks",
                    backgroundColor: mUtil.getColor('brand'),
                    borderColor: mUtil.getColor('brand'),

                    pointBackgroundColor: Chart.helpers.color('#000000').alpha(0).rgbString(),
                    pointBorderColor: Chart.helpers.color('#000000').alpha(0).rgbString(),
                    pointHoverBackgroundColor: mUtil.getColor('danger'),
                    pointHoverBorderColor: Chart.helpers.color('#000000').alpha(0.1).rgbString(),
                    data: [12, 16, 9, 18, 13, 12, 18, 12, 15, 17]
                }, {
                    label: "AdWords Views",

                    backgroundColor: mUtil.getColor('accent'),
                    borderColor: mUtil.getColor('accent'),

                    pointBackgroundColor: Chart.helpers.color('#000000').alpha(0).rgbString(),
                    pointBorderColor: Chart.helpers.color('#000000').alpha(0).rgbString(),
                    pointHoverBackgroundColor: mUtil.getColor('danger'),
                    pointHoverBorderColor: Chart.helpers.color('#000000').alpha(0.1).rgbString(),
                    data: [10, 14, 12, 16, 9, 11, 13, 9, 13, 15]
                }]
            },
            options: {
                title: {
                    display: false
                },
                tooltips: {
                    mode: 'nearest',
                    intersect: false,
                    position: 'nearest',
                    xPadding: 10,
                    yPadding: 10,
                    caretPadding: 10
                },
                legend: {
                    display: false
                },
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    xAxes: [{
                        display: false,
                        gridLines: false,
                        scaleLabel: {
                            display: true,
                            labelString: 'Month'
                        }
                    }],
                    yAxes: [{
                        stacked: true,
                        display: false,
                        gridLines: false,
                        scaleLabel: {
                            display: true,
                            labelString: 'Value'
                        },
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                },
                elements: {
                    line: {
                        tension: 0.0000001
                    },
                    point: {
                        radius: 4,
                        borderWidth: 12
                    }
                },
                layout: {
                    padding: {
                        left: 0,
                        right: 0,
                        top: 10,
                        bottom: 0
                    }
                }
            }
        };

        var chart = new Chart(ctx, config);
    };

    //== Bandwidth Charts 2.
    //** Based on Chartjs plugin - http://www.chartjs.org/
    var financeSummary = function financeSummary() {
        if ($('#m_chart_finance_summary').length == 0) {
            return;
        }

        var ctx = document.getElementById("m_chart_finance_summary").getContext("2d");

        var config = {
            type: 'line',
            data: {
                labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October"],
                datasets: [{
                    label: "AdWords Views",

                    backgroundColor: mUtil.getColor('accent'),
                    borderColor: mUtil.getColor('accent'),

                    pointBackgroundColor: Chart.helpers.color('#000000').alpha(0).rgbString(),
                    pointBorderColor: Chart.helpers.color('#000000').alpha(0).rgbString(),
                    pointHoverBackgroundColor: mUtil.getColor('danger'),
                    pointHoverBorderColor: Chart.helpers.color('#000000').alpha(0.1).rgbString(),
                    data: [10, 14, 12, 16, 9, 11, 13, 9, 13, 15]
                }]
            },
            options: {
                title: {
                    display: false
                },
                tooltips: {
                    mode: 'nearest',
                    intersect: false,
                    position: 'nearest',
                    xPadding: 10,
                    yPadding: 10,
                    caretPadding: 10
                },
                legend: {
                    display: false
                },
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    xAxes: [{
                        display: false,
                        gridLines: false,
                        scaleLabel: {
                            display: true,
                            labelString: 'Month'
                        }
                    }],
                    yAxes: [{
                        display: false,
                        gridLines: false,
                        scaleLabel: {
                            display: true,
                            labelString: 'Value'
                        },
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                },
                elements: {
                    line: {
                        tension: 0.0000001
                    },
                    point: {
                        radius: 4,
                        borderWidth: 12
                    }
                },
                layout: {
                    padding: {
                        left: 0,
                        right: 0,
                        top: 10,
                        bottom: 0
                    }
                }
            }
        };

        var chart = new Chart(ctx, config);
    };

    //== Quick Stat Charts
    var quickStats = function quickStats() {
        _initSparklineChart($('#m_chart_quick_stats_1'), [10, 14, 18, 11, 9, 12, 14, 17, 18, 14], mUtil.getColor('brand'), 3);
        _initSparklineChart($('#m_chart_quick_stats_2'), [11, 12, 18, 13, 11, 12, 15, 13, 19, 15], mUtil.getColor('danger'), 3);
        _initSparklineChart($('#m_chart_quick_stats_3'), [12, 12, 18, 11, 15, 12, 13, 16, 11, 18], mUtil.getColor('success'), 3);
        _initSparklineChart($('#m_chart_quick_stats_4'), [11, 9, 13, 18, 13, 15, 14, 13, 18, 15], mUtil.getColor('accent'), 3);
    };

    var daterangepickerInit = function daterangepickerInit() {
        if ($('#m_dashboard_daterangepicker').length == 0) {
            return;
        }

        var picker = $('#m_dashboard_daterangepicker');
        var start = moment();
        var end = moment();

        function cb(start, end, label) {
            var title = '';
            var range = '';

            if (end - start < 100) {
                title = 'Today:';
                range = start.format('MMM D');
            } else if (label == 'Yesterday') {
                title = 'Yesterday:';
                range = start.format('MMM D');
            } else {
                range = start.format('MMM D') + ' - ' + end.format('MMM D');
            }

            picker.find('.m-subheader__daterange-date').html(range);
            picker.find('.m-subheader__daterange-title').html(title);
        }

        picker.daterangepicker({
            startDate: start,
            endDate: end,
            opens: 'left',
            ranges: {
                'Today': [moment(), moment()],
                'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
                'Last 7 Days': [moment().subtract(6, 'days'), moment()],
                'Last 30 Days': [moment().subtract(29, 'days'), moment()],
                'This Month': [moment().startOf('month'), moment().endOf('month')],
                'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
            }
        }, cb);

        cb(start, end, '');
    };

    var datatableLatestOrders = function datatableLatestOrders() {
        if ($('#m_datatable_latest_orders').length === 0) {
            return;
        }

        var datatable = $('.m_datatable').mDatatable({
            data: {
                type: 'remote',
                source: {
                    read: {
                        url: 'https://keenthemes.com/metronic/preview/inc/api/datatables/demos/default.php'
                    }
                },
                pageSize: 20,
                saveState: {
                    cookie: true,
                    webstorage: true
                },
                serverPaging: true,
                serverFiltering: true,
                serverSorting: true
            },

            layout: {
                theme: 'default',
                class: '',
                scroll: true,
                height: 380,
                footer: false
            },

            sortable: true,

            filterable: false,

            pagination: true,

            columns: [{
                field: "RecordID",
                title: "#",
                sortable: false,
                width: 40,
                selector: {
                    class: 'm-checkbox--solid m-checkbox--brand'
                },
                textAlign: 'center'
            }, {
                field: "OrderID",
                title: "Order ID",
                sortable: 'asc',
                filterable: false,
                width: 150,
                template: '{{OrderID}} - {{ShipCountry}}'
            }, {
                field: "ShipName",
                title: "Ship Name",
                width: 150,
                responsive: {
                    visible: 'lg'
                }
            }, {
                field: "ShipDate",
                title: "Ship Date"
            }, {
                field: "Status",
                title: "Status",
                width: 100,
                // callback function support for column rendering
                template: function template(row) {
                    var status = {
                        1: {
                            'title': 'Pending',
                            'class': 'm-badge--brand'
                        },
                        2: {
                            'title': 'Delivered',
                            'class': ' m-badge--metal'
                        },
                        3: {
                            'title': 'Canceled',
                            'class': ' m-badge--primary'
                        },
                        4: {
                            'title': 'Success',
                            'class': ' m-badge--success'
                        },
                        5: {
                            'title': 'Info',
                            'class': ' m-badge--info'
                        },
                        6: {
                            'title': 'Danger',
                            'class': ' m-badge--danger'
                        },
                        7: {
                            'title': 'Warning',
                            'class': ' m-badge--warning'
                        }
                    };
                    return '<span class="m-badge ' + status[row.Status].class + ' m-badge--wide">' + status[row.Status].title + '</span>';
                }
            }, {
                field: "Type",
                title: "Type",
                width: 100,
                // callback function support for column rendering
                template: function template(row) {
                    var status = {
                        1: {
                            'title': 'Online',
                            'state': 'danger'
                        },
                        2: {
                            'title': 'Retail',
                            'state': 'primary'
                        },
                        3: {
                            'title': 'Direct',
                            'state': 'accent'
                        }
                    };
                    return '<span class="m-badge m-badge--' + status[row.Type].state + ' m-badge--dot"></span>&nbsp;<span class="m--font-bold m--font-' + status[row.Type].state + '">' + status[row.Type].title + '</span>';
                }
            }, {
                field: "Actions",
                width: 110,
                title: "Actions",
                sortable: false,
                overflow: 'visible',
                template: function template(row) {
                    var dropup = row.getDatatable().getPageSize() - row.getIndex() <= 4 ? 'dropup' : '';

                    return '\
                        <div class="dropdown ' + dropup + '">\
                            <a href="#" class="btn m-btn m-btn--hover-accent m-btn--icon m-btn--icon-only m-btn--pill" data-toggle="dropdown">\
                                <i class="la la-ellipsis-h"></i>\
                            </a>\
                            <div class="dropdown-menu dropdown-menu-right">\
                                <a class="dropdown-item" href="#"><i class="la la-edit"></i> Edit Details</a>\
                                <a class="dropdown-item" href="#"><i class="la la-leaf"></i> Update Status</a>\
                                <a class="dropdown-item" href="#"><i class="la la-print"></i> Generate Report</a>\
                            </div>\
                        </div>\
                        <a href="#" class="m-portlet__nav-link btn m-btn m-btn--hover-accent m-btn--icon m-btn--icon-only m-btn--pill" title="Edit details">\
                            <i class="la la-edit"></i>\
                        </a>\
                        <a href="#" class="m-portlet__nav-link btn m-btn m-btn--hover-danger m-btn--icon m-btn--icon-only m-btn--pill" title="Delete">\
                            <i class="la la-trash"></i>\
                        </a>\
                    ';
                }
            }]
        });
    };

    var calendarInit = function calendarInit() {
        if ($('#m_calendar').length === 0) {
            return;
        }

        var todayDate = moment().startOf('day');
        var YM = todayDate.format('YYYY-MM');
        var YESTERDAY = todayDate.clone().subtract(1, 'day').format('YYYY-MM-DD');
        var TODAY = todayDate.format('YYYY-MM-DD');
        var TOMORROW = todayDate.clone().add(1, 'day').format('YYYY-MM-DD');

        $('#m_calendar').fullCalendar({
            header: {
                left: 'prev,next today',
                center: 'title',
                right: 'month,agendaWeek,agendaDay,listWeek'
            },
            editable: true,
            eventLimit: true, // allow "more" link when too many events
            navLinks: true,
            defaultDate: moment('2017-09-15'),
            events: [{
                title: 'Meeting',
                start: moment('2017-08-28'),
                description: 'Lorem ipsum dolor sit incid idunt ut',
                className: "m-fc-event--light m-fc-event--solid-warning"
            }, {
                title: 'Conference',
                description: 'Lorem ipsum dolor incid idunt ut labore',
                start: moment('2017-08-29T13:30:00'),
                end: moment('2017-08-29T17:30:00'),
                className: "m-fc-event--accent"
            }, {
                title: 'Dinner',
                start: moment('2017-08-30'),
                description: 'Lorem ipsum dolor sit tempor incid',
                className: "m-fc-event--light  m-fc-event--solid-danger"
            }, {
                title: 'All Day Event',
                start: moment('2017-09-01'),
                description: 'Lorem ipsum dolor sit incid idunt ut',
                className: "m-fc-event--danger m-fc-event--solid-focus"
            }, {
                title: 'Reporting',
                description: 'Lorem ipsum dolor incid idunt ut labore',
                start: moment('2017-09-03T13:30:00'),
                end: moment('2017-09-04T17:30:00'),
                className: "m-fc-event--accent"
            }, {
                title: 'Company Trip',
                start: moment('2017-09-05'),
                end: moment('2017-09-07'),
                description: 'Lorem ipsum dolor sit tempor incid',
                className: "m-fc-event--primary"
            }, {
                title: 'ICT Expo 2017 - Product Release',
                start: moment('2017-09-09'),
                description: 'Lorem ipsum dolor sit tempor inci',
                className: "m-fc-event--light m-fc-event--solid-primary"
            }, {
                title: 'Dinner',
                start: moment('2017-09-12'),
                description: 'Lorem ipsum dolor sit amet, conse ctetur'
            }, {
                id: 999,
                title: 'Repeating Event',
                start: moment('2017-09-15T16:00:00'),
                description: 'Lorem ipsum dolor sit ncididunt ut labore',
                className: "m-fc-event--danger"
            }, {
                id: 1000,
                title: 'Repeating Event',
                description: 'Lorem ipsum dolor sit amet, labore',
                start: moment('2017-09-18T19:00:00')
            }, {
                title: 'Conference',
                start: moment('2017-09-20T13:00:00'),
                end: moment('2017-09-21T19:00:00'),
                description: 'Lorem ipsum dolor eius mod tempor labore',
                className: "m-fc-event--accent"
            }, {
                title: 'Meeting',
                start: moment('2017-09-11'),
                description: 'Lorem ipsum dolor eiu idunt ut labore'
            }, {
                title: 'Lunch',
                start: moment('2017-09-18'),
                className: "m-fc-event--info m-fc-event--solid-accent",
                description: 'Lorem ipsum dolor sit amet, ut labore'
            }, {
                title: 'Meeting',
                start: moment('2017-09-24'),
                className: "m-fc-event--warning",
                description: 'Lorem ipsum conse ctetur adipi scing'
            }, {
                title: 'Happy Hour',
                start: moment('2017-09-24'),
                className: "m-fc-event--light m-fc-event--solid-focus",
                description: 'Lorem ipsum dolor sit amet, conse ctetur'
            }, {
                title: 'Dinner',
                start: moment('2017-09-24'),
                className: "m-fc-event--solid-focus m-fc-event--light",
                description: 'Lorem ipsum dolor sit ctetur adipi scing'
            }, {
                title: 'Birthday Party',
                start: moment('2017-09-24'),
                className: "m-fc-event--primary",
                description: 'Lorem ipsum dolor sit amet, scing'
            }, {
                title: 'Company Event',
                start: moment('2017-09-24'),
                className: "m-fc-event--danger",
                description: 'Lorem ipsum dolor sit amet, scing'
            }, {
                title: 'Click for Google',
                url: 'http://google.com/',
                start: moment('2017-09-26'),
                className: "m-fc-event--solid-info m-fc-event--light",
                description: 'Lorem ipsum dolor sit amet, labore'
            }],

            eventRender: function eventRender(event, element) {
                if (element.hasClass('fc-day-grid-event')) {
                    element.data('content', event.description);
                    element.data('placement', 'top');
                    mApp.initPopover(element);
                } else if (element.hasClass('fc-time-grid-event')) {
                    element.find('.fc-title').append('<div class="fc-description">' + event.description + '</div>');
                } else if (element.find('.fc-list-item-title').lenght !== 0) {
                    element.find('.fc-list-item-title').append('<div class="fc-description">' + event.description + '</div>');
                }
            }
        });
    };

    return {
        //== Init demos
        init: function init() {
            // init charts
            dailySales();
            profitShare();
            salesStats();
            salesByApps();
            latestUpdates();
            trendsStats();
            trendsStats2();
            latestTrendsMap();
            revenueChange();
            supportTickets();
            supportTickets2();
            activitiesChart();
            bandwidthChart1();
            bandwidthChart2();
            adWordsStat();
            financeSummary();
            quickStats();

            // init daterangepicker
            daterangepickerInit();

            // datatables
            datatableLatestOrders();

            // calendar
            calendarInit();
        }
    };
}();

//== Class initialization on page load
jQuery(document).ready(function () {
    Dashboard.init();
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNThjZmJkM2M4MmJhOTY3MjAzYWIiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9kYXNoYm9hcmQuanMiXSwibmFtZXMiOlsiRGFzaGJvYXJkIiwiX2luaXRTcGFya2xpbmVDaGFydCIsInNyYyIsImRhdGEiLCJjb2xvciIsImJvcmRlciIsImxlbmd0aCIsImNvbmZpZyIsInR5cGUiLCJsYWJlbHMiLCJkYXRhc2V0cyIsImxhYmVsIiwiYm9yZGVyQ29sb3IiLCJib3JkZXJXaWR0aCIsInBvaW50SG92ZXJSYWRpdXMiLCJwb2ludEhvdmVyQm9yZGVyV2lkdGgiLCJwb2ludEJhY2tncm91bmRDb2xvciIsIkNoYXJ0IiwiaGVscGVycyIsImFscGhhIiwicmdiU3RyaW5nIiwicG9pbnRCb3JkZXJDb2xvciIsInBvaW50SG92ZXJCYWNrZ3JvdW5kQ29sb3IiLCJtVXRpbCIsImdldENvbG9yIiwicG9pbnRIb3ZlckJvcmRlckNvbG9yIiwiZmlsbCIsIm9wdGlvbnMiLCJ0aXRsZSIsImRpc3BsYXkiLCJ0b29sdGlwcyIsImVuYWJsZWQiLCJpbnRlcnNlY3QiLCJtb2RlIiwieFBhZGRpbmciLCJ5UGFkZGluZyIsImNhcmV0UGFkZGluZyIsImxlZ2VuZCIsInVzZVBvaW50U3R5bGUiLCJyZXNwb25zaXZlIiwibWFpbnRhaW5Bc3BlY3RSYXRpbyIsImhvdmVyIiwic2NhbGVzIiwieEF4ZXMiLCJncmlkTGluZXMiLCJzY2FsZUxhYmVsIiwibGFiZWxTdHJpbmciLCJ5QXhlcyIsInRpY2tzIiwiYmVnaW5BdFplcm8iLCJlbGVtZW50cyIsInBvaW50IiwicmFkaXVzIiwibGF5b3V0IiwicGFkZGluZyIsImxlZnQiLCJyaWdodCIsInRvcCIsImJvdHRvbSIsImRhaWx5U2FsZXMiLCJjaGFydENvbnRhaW5lciIsIiQiLCJjaGFydERhdGEiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjaGFydCIsImJhclJhZGl1cyIsInN0YWNrZWQiLCJwcm9maXRTaGFyZSIsIkNoYXJ0aXN0IiwiUGllIiwic2VyaWVzIiwidmFsdWUiLCJjbGFzc05hbWUiLCJtZXRhIiwiZG9udXQiLCJkb251dFdpZHRoIiwic2hvd0xhYmVsIiwib24iLCJwYXRoTGVuZ3RoIiwiZWxlbWVudCIsIl9ub2RlIiwiZ2V0VG90YWxMZW5ndGgiLCJhdHRyIiwiYW5pbWF0aW9uRGVmaW5pdGlvbiIsImlkIiwiaW5kZXgiLCJkdXIiLCJmcm9tIiwidG8iLCJlYXNpbmciLCJTdmciLCJFYXNpbmciLCJlYXNlT3V0UXVpbnQiLCJiZWdpbiIsImFuaW1hdGUiLCJ3aW5kb3ciLCJfX2FuaW0yMTI3ODkwNzEyNCIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJ1cGRhdGUiLCJiaW5kIiwic2FsZXNTdGF0cyIsImhvdmVyUmFkaXVzIiwiaG92ZXJCb3JkZXJXaWR0aCIsInNhbGVzQnlBcHBzIiwibGF0ZXN0VXBkYXRlcyIsImN0eCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJnZXRDb250ZXh0IiwibGluZSIsInRlbnNpb24iLCJ0cmVuZHNTdGF0cyIsImdyYWRpZW50IiwiY3JlYXRlTGluZWFyR3JhZGllbnQiLCJhZGRDb2xvclN0b3AiLCJ0cmVuZHNTdGF0czIiLCJsYXRlc3RUcmVuZHNNYXAiLCJtYXAiLCJHTWFwcyIsImRpdiIsImxhdCIsImxuZyIsImUiLCJjb25zb2xlIiwibG9nIiwicmV2ZW51ZUNoYW5nZSIsIk1vcnJpcyIsIkRvbnV0IiwiY29sb3JzIiwic3VwcG9ydFRpY2tldHMiLCJsYWJlbENvbG9yIiwic3VwcG9ydFRpY2tldHMyIiwiYWN0aXZpdGllc0NoYXJ0IiwicG9zaXRpb24iLCJiYW5kd2lkdGhDaGFydDEiLCJiYW5kd2lkdGhDaGFydDIiLCJhZFdvcmRzU3RhdCIsImZpbmFuY2VTdW1tYXJ5IiwicXVpY2tTdGF0cyIsImRhdGVyYW5nZXBpY2tlckluaXQiLCJwaWNrZXIiLCJzdGFydCIsIm1vbWVudCIsImVuZCIsImNiIiwicmFuZ2UiLCJmb3JtYXQiLCJmaW5kIiwiaHRtbCIsImRhdGVyYW5nZXBpY2tlciIsInN0YXJ0RGF0ZSIsImVuZERhdGUiLCJvcGVucyIsInJhbmdlcyIsInN1YnRyYWN0Iiwic3RhcnRPZiIsImVuZE9mIiwiZGF0YXRhYmxlTGF0ZXN0T3JkZXJzIiwiZGF0YXRhYmxlIiwibURhdGF0YWJsZSIsInNvdXJjZSIsInJlYWQiLCJ1cmwiLCJwYWdlU2l6ZSIsInNhdmVTdGF0ZSIsImNvb2tpZSIsIndlYnN0b3JhZ2UiLCJzZXJ2ZXJQYWdpbmciLCJzZXJ2ZXJGaWx0ZXJpbmciLCJzZXJ2ZXJTb3J0aW5nIiwidGhlbWUiLCJjbGFzcyIsInNjcm9sbCIsImhlaWdodCIsImZvb3RlciIsInNvcnRhYmxlIiwiZmlsdGVyYWJsZSIsInBhZ2luYXRpb24iLCJjb2x1bW5zIiwiZmllbGQiLCJ3aWR0aCIsInNlbGVjdG9yIiwidGV4dEFsaWduIiwidGVtcGxhdGUiLCJ2aXNpYmxlIiwicm93Iiwic3RhdHVzIiwiU3RhdHVzIiwiVHlwZSIsInN0YXRlIiwib3ZlcmZsb3ciLCJkcm9wdXAiLCJnZXREYXRhdGFibGUiLCJnZXRQYWdlU2l6ZSIsImdldEluZGV4IiwiY2FsZW5kYXJJbml0IiwidG9kYXlEYXRlIiwiWU0iLCJZRVNURVJEQVkiLCJjbG9uZSIsIlRPREFZIiwiVE9NT1JST1ciLCJhZGQiLCJmdWxsQ2FsZW5kYXIiLCJoZWFkZXIiLCJjZW50ZXIiLCJlZGl0YWJsZSIsImV2ZW50TGltaXQiLCJuYXZMaW5rcyIsImRlZmF1bHREYXRlIiwiZXZlbnRzIiwiZGVzY3JpcHRpb24iLCJldmVudFJlbmRlciIsImV2ZW50IiwiaGFzQ2xhc3MiLCJtQXBwIiwiaW5pdFBvcG92ZXIiLCJhcHBlbmQiLCJsZW5naHQiLCJpbml0IiwialF1ZXJ5IiwicmVhZHkiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7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QXFOLHlCQUFLQyxXQUFMLENBQWlCMUksT0FBakI7QUFDSCxpQkFKRCxNQUlPLElBQUlBLFFBQVF3SSxRQUFSLENBQWlCLG9CQUFqQixDQUFKLEVBQTRDO0FBQy9DeEksNEJBQVFxRSxJQUFSLENBQWEsV0FBYixFQUEwQnNFLE1BQTFCLENBQWlDLGlDQUFpQ0osTUFBTUYsV0FBdkMsR0FBcUQsUUFBdEY7QUFDSCxpQkFGTSxNQUVBLElBQUlySSxRQUFRcUUsSUFBUixDQUFhLHFCQUFiLEVBQW9DdUUsTUFBcEMsS0FBK0MsQ0FBbkQsRUFBc0Q7QUFDekQ1SSw0QkFBUXFFLElBQVIsQ0FBYSxxQkFBYixFQUFvQ3NFLE1BQXBDLENBQTJDLGlDQUFpQ0osTUFBTUYsV0FBdkMsR0FBcUQsUUFBaEc7QUFDSDtBQUNKO0FBN0l5QixTQUE5QjtBQStJSCxLQTFKRDs7QUE0SkEsV0FBTztBQUNIO0FBQ0FRLGNBQU0sZ0JBQVc7QUFDYjtBQUNBaks7QUFDQVE7QUFDQWtDO0FBQ0FHO0FBQ0FDO0FBQ0FPO0FBQ0FJO0FBQ0FDO0FBQ0FTO0FBQ0FJO0FBQ0FFO0FBQ0FDO0FBQ0FFO0FBQ0FDO0FBQ0FDO0FBQ0FDO0FBQ0FDOztBQUVBO0FBQ0FDOztBQUVBO0FBQ0FrQjs7QUFFQTtBQUNBc0M7QUFDSDtBQTlCRSxLQUFQO0FBZ0NILENBM29EZSxFQUFoQjs7QUE2b0RBO0FBQ0F5QixPQUFPbEgsUUFBUCxFQUFpQm1ILEtBQWpCLENBQXVCLFlBQVc7QUFDOUI5TixjQUFVNE4sSUFBVjtBQUNILENBRkQsRSIsImZpbGUiOiJqcy9kYXNoYm9hcmQuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2J1aWxkL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9hc3NldHMvYXBwL2pzL2Rhc2hib2FyZC5qc1wiKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA1OGNmYmQzYzgyYmE5NjcyMDNhYiIsIi8vPT0gQ2xhc3MgZGVmaW5pdGlvblxyXG52YXIgRGFzaGJvYXJkID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgLy89PSBTcGFya2xpbmUgQ2hhcnQgaGVscGVyIGZ1bmN0aW9uXHJcbiAgICB2YXIgX2luaXRTcGFya2xpbmVDaGFydCA9IGZ1bmN0aW9uKHNyYywgZGF0YSwgY29sb3IsIGJvcmRlcikge1xyXG4gICAgICAgIGlmIChzcmMubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGNvbmZpZyA9IHtcclxuICAgICAgICAgICAgdHlwZTogJ2xpbmUnLFxyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICBsYWJlbHM6IFtcIkphbnVhcnlcIiwgXCJGZWJydWFyeVwiLCBcIk1hcmNoXCIsIFwiQXByaWxcIiwgXCJNYXlcIiwgXCJKdW5lXCIsIFwiSnVseVwiLCBcIkF1Z3VzdFwiLCBcIlNlcHRlbWJlclwiLCBcIk9jdG9iZXJcIl0sXHJcbiAgICAgICAgICAgICAgICBkYXRhc2V0czogW3tcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogY29sb3IsXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IGJvcmRlcixcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRIb3ZlclJhZGl1czogNCxcclxuICAgICAgICAgICAgICAgICAgICBwb2ludEhvdmVyQm9yZGVyV2lkdGg6IDEyLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvaW50QmFja2dyb3VuZENvbG9yOiBDaGFydC5oZWxwZXJzLmNvbG9yKCcjMDAwMDAwJykuYWxwaGEoMCkucmdiU3RyaW5nKCksXHJcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRCb3JkZXJDb2xvcjogQ2hhcnQuaGVscGVycy5jb2xvcignIzAwMDAwMCcpLmFscGhhKDApLnJnYlN0cmluZygpLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvaW50SG92ZXJCYWNrZ3JvdW5kQ29sb3I6IG1VdGlsLmdldENvbG9yKCdkYW5nZXInKSxcclxuICAgICAgICAgICAgICAgICAgICBwb2ludEhvdmVyQm9yZGVyQ29sb3I6IENoYXJ0LmhlbHBlcnMuY29sb3IoJyMwMDAwMDAnKS5hbHBoYSgwLjEpLnJnYlN0cmluZygpLFxyXG4gICAgICAgICAgICAgICAgICAgIGZpbGw6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGRhdGEsXHJcbiAgICAgICAgICAgICAgICB9XVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZToge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHRvb2x0aXBzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW5hYmxlZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgaW50ZXJzZWN0OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBtb2RlOiAnbmVhcmVzdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgeFBhZGRpbmc6IDEwLFxyXG4gICAgICAgICAgICAgICAgICAgIHlQYWRkaW5nOiAxMCxcclxuICAgICAgICAgICAgICAgICAgICBjYXJldFBhZGRpbmc6IDEwXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgbGVnZW5kOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZVBvaW50U3R5bGU6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBtYWludGFpbkFzcGVjdFJhdGlvOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgaG92ZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICBtb2RlOiAnaW5kZXgnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgc2NhbGVzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgeEF4ZXM6IFt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBncmlkTGluZXM6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzY2FsZUxhYmVsOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxTdHJpbmc6ICdNb250aCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1dLFxyXG4gICAgICAgICAgICAgICAgICAgIHlBeGVzOiBbe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZExpbmVzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2NhbGVMYWJlbDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsU3RyaW5nOiAnVmFsdWUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpY2tzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZWdpbkF0WmVybzogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfV1cclxuICAgICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAgICAgZWxlbWVudHM6IHtcclxuICAgICAgICAgICAgICAgICAgICBwb2ludDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByYWRpdXM6IDQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcldpZHRoOiAxMlxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgICAgIGxheW91dDoge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDEwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgQ2hhcnQoc3JjLCBjb25maWcpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vPT0gRGFpbHkgU2FsZXMgY2hhcnQuXHJcbiAgICAvLyoqIEJhc2VkIG9uIENoYXJ0anMgcGx1Z2luIC0gaHR0cDovL3d3dy5jaGFydGpzLm9yZy9cclxuICAgIHZhciBkYWlseVNhbGVzID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIGNoYXJ0Q29udGFpbmVyID0gJCgnI21fY2hhcnRfZGFpbHlfc2FsZXMnKTtcclxuXHJcbiAgICAgICAgaWYgKGNoYXJ0Q29udGFpbmVyLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBjaGFydERhdGEgPSB7XHJcbiAgICAgICAgICAgIGxhYmVsczogW1wiTGFiZWwgMVwiLCBcIkxhYmVsIDJcIiwgXCJMYWJlbCAzXCIsIFwiTGFiZWwgNFwiLCBcIkxhYmVsIDVcIiwgXCJMYWJlbCA2XCIsIFwiTGFiZWwgN1wiLCBcIkxhYmVsIDhcIiwgXCJMYWJlbCA5XCIsIFwiTGFiZWwgMTBcIiwgXCJMYWJlbCAxMVwiLCBcIkxhYmVsIDEyXCIsIFwiTGFiZWwgMTNcIiwgXCJMYWJlbCAxNFwiLCBcIkxhYmVsIDE1XCIsIFwiTGFiZWwgMTZcIl0sXHJcbiAgICAgICAgICAgIGRhdGFzZXRzOiBbe1xyXG4gICAgICAgICAgICAgICAgLy9sYWJlbDogJ0RhdGFzZXQgMScsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IG1VdGlsLmdldENvbG9yKCdzdWNjZXNzJyksXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgMTUsIDIwLCAyNSwgMzAsIDI1LCAyMCwgMTUsIDIwLCAyNSwgMzAsIDI1LCAyMCwgMTUsIDEwLCAxNSwgMjBcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgLy9sYWJlbDogJ0RhdGFzZXQgMicsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZjNmM2ZiJyxcclxuICAgICAgICAgICAgICAgIGRhdGE6IFtcclxuICAgICAgICAgICAgICAgICAgICAxNSwgMjAsIDI1LCAzMCwgMjUsIDIwLCAxNSwgMjAsIDI1LCAzMCwgMjUsIDIwLCAxNSwgMTAsIDE1LCAyMFxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9XVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHZhciBjaGFydCA9IG5ldyBDaGFydChjaGFydENvbnRhaW5lciwge1xyXG4gICAgICAgICAgICB0eXBlOiAnYmFyJyxcclxuICAgICAgICAgICAgZGF0YTogY2hhcnREYXRhLFxyXG4gICAgICAgICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZToge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHRvb2x0aXBzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW50ZXJzZWN0OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBtb2RlOiAnbmVhcmVzdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgeFBhZGRpbmc6IDEwLFxyXG4gICAgICAgICAgICAgICAgICAgIHlQYWRkaW5nOiAxMCxcclxuICAgICAgICAgICAgICAgICAgICBjYXJldFBhZGRpbmc6IDEwXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgbGVnZW5kOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmFsc2VcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICByZXNwb25zaXZlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgbWFpbnRhaW5Bc3BlY3RSYXRpbzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBiYXJSYWRpdXM6IDQsXHJcbiAgICAgICAgICAgICAgICBzY2FsZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICB4QXhlczogW3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyaWRMaW5lczogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YWNrZWQ6IHRydWVcclxuICAgICAgICAgICAgICAgICAgICB9XSxcclxuICAgICAgICAgICAgICAgICAgICB5QXhlczogW3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YWNrZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyaWRMaW5lczogZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICB9XVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGxheW91dDoge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAwXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy89PSBQcm9maXQgU2hhcmUgQ2hhcnQuXHJcbiAgICAvLyoqIEJhc2VkIG9uIENoYXJ0aXN0IHBsdWdpbiAtIGh0dHBzOi8vZ2lvbmt1bnouZ2l0aHViLmlvL2NoYXJ0aXN0LWpzL2luZGV4Lmh0bWxcclxuICAgIHZhciBwcm9maXRTaGFyZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmICgkKCcjbV9jaGFydF9wcm9maXRfc2hhcmUnKS5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgY2hhcnQgPSBuZXcgQ2hhcnRpc3QuUGllKCcjbV9jaGFydF9wcm9maXRfc2hhcmUnLCB7XHJcbiAgICAgICAgICAgIHNlcmllczogW3tcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogMzIsXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnY3VzdG9tJyxcclxuICAgICAgICAgICAgICAgICAgICBtZXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBtVXRpbC5nZXRDb2xvcignYnJhbmQnKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDMyLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ2N1c3RvbScsXHJcbiAgICAgICAgICAgICAgICAgICAgbWV0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogbVV0aWwuZ2V0Q29sb3IoJ2FjY2VudCcpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogMzYsXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnY3VzdG9tJyxcclxuICAgICAgICAgICAgICAgICAgICBtZXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBtVXRpbC5nZXRDb2xvcignd2FybmluZycpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBsYWJlbHM6IFsxLCAyLCAzXVxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgZG9udXQ6IHRydWUsXHJcbiAgICAgICAgICAgIGRvbnV0V2lkdGg6IDE3LFxyXG4gICAgICAgICAgICBzaG93TGFiZWw6IGZhbHNlXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNoYXJ0Lm9uKCdkcmF3JywgZnVuY3Rpb24oZGF0YSkge1xyXG4gICAgICAgICAgICBpZiAoZGF0YS50eXBlID09PSAnc2xpY2UnKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBHZXQgdGhlIHRvdGFsIHBhdGggbGVuZ3RoIGluIG9yZGVyIHRvIHVzZSBmb3IgZGFzaCBhcnJheSBhbmltYXRpb25cclxuICAgICAgICAgICAgICAgIHZhciBwYXRoTGVuZ3RoID0gZGF0YS5lbGVtZW50Ll9ub2RlLmdldFRvdGFsTGVuZ3RoKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gU2V0IGEgZGFzaGFycmF5IHRoYXQgbWF0Y2hlcyB0aGUgcGF0aCBsZW5ndGggYXMgcHJlcmVxdWlzaXRlIHRvIGFuaW1hdGUgZGFzaG9mZnNldFxyXG4gICAgICAgICAgICAgICAgZGF0YS5lbGVtZW50LmF0dHIoe1xyXG4gICAgICAgICAgICAgICAgICAgICdzdHJva2UtZGFzaGFycmF5JzogcGF0aExlbmd0aCArICdweCAnICsgcGF0aExlbmd0aCArICdweCdcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIENyZWF0ZSBhbmltYXRpb24gZGVmaW5pdGlvbiB3aGlsZSBhbHNvIGFzc2lnbmluZyBhbiBJRCB0byB0aGUgYW5pbWF0aW9uIGZvciBsYXRlciBzeW5jIHVzYWdlXHJcbiAgICAgICAgICAgICAgICB2YXIgYW5pbWF0aW9uRGVmaW5pdGlvbiA9IHtcclxuICAgICAgICAgICAgICAgICAgICAnc3Ryb2tlLWRhc2hvZmZzZXQnOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiAnYW5pbScgKyBkYXRhLmluZGV4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkdXI6IDEwMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyb206IC1wYXRoTGVuZ3RoICsgJ3B4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG86ICcwcHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlYXNpbmc6IENoYXJ0aXN0LlN2Zy5FYXNpbmcuZWFzZU91dFF1aW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBXZSBuZWVkIHRvIHVzZSBgZmlsbDogJ2ZyZWV6ZSdgIG90aGVyd2lzZSBvdXIgYW5pbWF0aW9uIHdpbGwgZmFsbCBiYWNrIHRvIGluaXRpYWwgKG5vdCB2aXNpYmxlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsOiAnZnJlZXplJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ3N0cm9rZSc6IGRhdGEubWV0YS5jb2xvclxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gSWYgdGhpcyB3YXMgbm90IHRoZSBmaXJzdCBzbGljZSwgd2UgbmVlZCB0byB0aW1lIHRoZSBhbmltYXRpb24gc28gdGhhdCBpdCB1c2VzIHRoZSBlbmQgc3luYyBldmVudCBvZiB0aGUgcHJldmlvdXMgYW5pbWF0aW9uXHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5pbmRleCAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbkRlZmluaXRpb25bJ3N0cm9rZS1kYXNob2Zmc2V0J10uYmVnaW4gPSAnYW5pbScgKyAoZGF0YS5pbmRleCAtIDEpICsgJy5lbmQnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIFdlIG5lZWQgdG8gc2V0IGFuIGluaXRpYWwgdmFsdWUgYmVmb3JlIHRoZSBhbmltYXRpb24gc3RhcnRzIGFzIHdlIGFyZSBub3QgaW4gZ3VpZGVkIG1vZGUgd2hpY2ggd291bGQgZG8gdGhhdCBmb3IgdXNcclxuXHJcbiAgICAgICAgICAgICAgICBkYXRhLmVsZW1lbnQuYXR0cih7XHJcbiAgICAgICAgICAgICAgICAgICAgJ3N0cm9rZS1kYXNob2Zmc2V0JzogLXBhdGhMZW5ndGggKyAncHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICdzdHJva2UnOiBkYXRhLm1ldGEuY29sb3JcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIFdlIGNhbid0IHVzZSBndWlkZWQgbW9kZSBhcyB0aGUgYW5pbWF0aW9ucyBuZWVkIHRvIHJlbHkgb24gc2V0dGluZyBiZWdpbiBtYW51YWxseVxyXG4gICAgICAgICAgICAgICAgLy8gU2VlIGh0dHA6Ly9naW9ua3Vuei5naXRodWIuaW8vY2hhcnRpc3QtanMvYXBpLWRvY3VtZW50YXRpb24uaHRtbCNjaGFydGlzdHN2Zy1mdW5jdGlvbi1hbmltYXRlXHJcbiAgICAgICAgICAgICAgICBkYXRhLmVsZW1lbnQuYW5pbWF0ZShhbmltYXRpb25EZWZpbml0aW9uLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gRm9yIHRoZSBzYWtlIG9mIHRoZSBleGFtcGxlIHdlIHVwZGF0ZSB0aGUgY2hhcnQgZXZlcnkgdGltZSBpdCdzIGNyZWF0ZWQgd2l0aCBhIGRlbGF5IG9mIDggc2Vjb25kc1xyXG4gICAgICAgIGNoYXJ0Lm9uKCdjcmVhdGVkJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGlmICh3aW5kb3cuX19hbmltMjEyNzg5MDcxMjQpIHtcclxuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh3aW5kb3cuX19hbmltMjEyNzg5MDcxMjQpO1xyXG4gICAgICAgICAgICAgICAgd2luZG93Ll9fYW5pbTIxMjc4OTA3MTI0ID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB3aW5kb3cuX19hbmltMjEyNzg5MDcxMjQgPSBzZXRUaW1lb3V0KGNoYXJ0LnVwZGF0ZS5iaW5kKGNoYXJ0KSwgMTUwMDApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vPT0gU2FsZXMgU3RhdHMuXHJcbiAgICAvLyoqIEJhc2VkIG9uIENoYXJ0anMgcGx1Z2luIC0gaHR0cDovL3d3dy5jaGFydGpzLm9yZy9cclxuICAgIHZhciBzYWxlc1N0YXRzID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKCQoJyNtX2NoYXJ0X3NhbGVzX3N0YXRzJykubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGNvbmZpZyA9IHtcclxuICAgICAgICAgICAgdHlwZTogJ2xpbmUnLFxyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICBsYWJlbHM6IFtcIkphbnVhcnlcIiwgXCJGZWJydWFyeVwiLCBcIk1hcmNoXCIsIFwiQXByaWxcIiwgXCJNYXlcIiwgXCJKdW5lXCIsIFwiSnVseVwiLCBcIkF1Z3VzdFwiLCBcIlNlcHRlbWJlclwiLCBcIk9jdG9iZXJcIiwgXCJOb3ZlbWJlclwiLCBcIkRlY2VtYmVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJKYW51YXJ5XCIsIFwiRmVicnVhcnlcIiwgXCJNYXJjaFwiLCBcIkFwcmlsXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBkYXRhc2V0czogW3tcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJTYWxlcyBTdGF0c1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiBtVXRpbC5nZXRDb2xvcignYnJhbmQnKSxcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXJXaWR0aDogMixcclxuICAgICAgICAgICAgICAgICAgICBwb2ludEJhY2tncm91bmRDb2xvcjogbVV0aWwuZ2V0Q29sb3IoJ2JyYW5kJyksXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogbVV0aWwuZ2V0Q29sb3IoJ2FjY2VudCcpLFxyXG5cclxuICAgICAgICAgICAgICAgICAgICBwb2ludEhvdmVyQmFja2dyb3VuZENvbG9yOiBtVXRpbC5nZXRDb2xvcignZGFuZ2VyJyksXHJcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRIb3ZlckJvcmRlckNvbG9yOiBDaGFydC5oZWxwZXJzLmNvbG9yKG1VdGlsLmdldENvbG9yKCdkYW5nZXInKSkuYWxwaGEoMC4yKS5yZ2JTdHJpbmcoKSxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDEwLCAyMCwgMTYsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDE4LCAxMiwgNDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDM1LCAzMCwgMzMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDM0LCA0NSwgNDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDYwLCA1NSwgNzAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDY1LCA3NSwgNjJcclxuICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICB9XVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZToge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHRvb2x0aXBzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW50ZXJzZWN0OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBtb2RlOiAnbmVhcmVzdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgeFBhZGRpbmc6IDEwLFxyXG4gICAgICAgICAgICAgICAgICAgIHlQYWRkaW5nOiAxMCxcclxuICAgICAgICAgICAgICAgICAgICBjYXJldFBhZGRpbmc6IDEwXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgbGVnZW5kOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZVBvaW50U3R5bGU6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBtYWludGFpbkFzcGVjdFJhdGlvOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGhvdmVyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZTogJ2luZGV4J1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHNjYWxlczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHhBeGVzOiBbe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZExpbmVzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2NhbGVMYWJlbDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsU3RyaW5nOiAnTW9udGgnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XSxcclxuICAgICAgICAgICAgICAgICAgICB5QXhlczogW3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyaWRMaW5lczogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjYWxlTGFiZWw6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbFN0cmluZzogJ1ZhbHVlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfV1cclxuICAgICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAgICAgZWxlbWVudHM6IHtcclxuICAgICAgICAgICAgICAgICAgICBwb2ludDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByYWRpdXM6IDMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcldpZHRoOiAwLFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaG92ZXJSYWRpdXM6IDgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhvdmVyQm9yZGVyV2lkdGg6IDJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB2YXIgY2hhcnQgPSBuZXcgQ2hhcnQoJCgnI21fY2hhcnRfc2FsZXNfc3RhdHMnKSwgY29uZmlnKTtcclxuICAgIH1cclxuXHJcbiAgICAvLz09IFNhbGVzIEJ5IG1VdGlsbGljYXRpb24gU3RhdHMuXHJcbiAgICAvLyoqIEJhc2VkIG9uIENoYXJ0anMgcGx1Z2luIC0gaHR0cDovL3d3dy5jaGFydGpzLm9yZy9cclxuICAgIHZhciBzYWxlc0J5QXBwcyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIC8vIEluaXQgY2hhcnQgaW5zdGFuY2VzXHJcbiAgICAgICAgX2luaXRTcGFya2xpbmVDaGFydCgkKCcjbV9jaGFydF9zYWxlc19ieV9hcHBzXzFfMScpLCBbMTAsIDIwLCAtNSwgOCwgLTIwLCAtMiwgLTQsIDE1LCA1LCA4XSwgbVV0aWwuZ2V0Q29sb3IoJ2FjY2VudCcpLCAyKTtcclxuICAgICAgICBfaW5pdFNwYXJrbGluZUNoYXJ0KCQoJyNtX2NoYXJ0X3NhbGVzX2J5X2FwcHNfMV8yJyksIFsyLCAxNiwgMCwgMTIsIDIyLCA1LCAtMTAsIDUsIDE1LCAyXSwgbVV0aWwuZ2V0Q29sb3IoJ2RhbmdlcicpLCAyKTtcclxuICAgICAgICBfaW5pdFNwYXJrbGluZUNoYXJ0KCQoJyNtX2NoYXJ0X3NhbGVzX2J5X2FwcHNfMV8zJyksIFsxNSwgNSwgLTEwLCA1LCAxNiwgMjIsIDYsIC02LCAtMTIsIDVdLCBtVXRpbC5nZXRDb2xvcignc3VjY2VzcycpLCAyKTtcclxuICAgICAgICBfaW5pdFNwYXJrbGluZUNoYXJ0KCQoJyNtX2NoYXJ0X3NhbGVzX2J5X2FwcHNfMV80JyksIFs4LCAxOCwgLTEyLCAxMiwgMjIsIC0yLCAtMTQsIDE2LCAxOCwgMl0sIG1VdGlsLmdldENvbG9yKCd3YXJuaW5nJyksIDIpO1xyXG5cclxuICAgICAgICBfaW5pdFNwYXJrbGluZUNoYXJ0KCQoJyNtX2NoYXJ0X3NhbGVzX2J5X2FwcHNfMl8xJyksIFsxMCwgMjAsIC01LCA4LCAtMjAsIC0yLCAtNCwgMTUsIDUsIDhdLCBtVXRpbC5nZXRDb2xvcignZGFuZ2VyJyksIDIpO1xyXG4gICAgICAgIF9pbml0U3BhcmtsaW5lQ2hhcnQoJCgnI21fY2hhcnRfc2FsZXNfYnlfYXBwc18yXzInKSwgWzIsIDE2LCAwLCAxMiwgMjIsIDUsIC0xMCwgNSwgMTUsIDJdLCBtVXRpbC5nZXRDb2xvcignbWV0YWwnKSwgMik7XHJcbiAgICAgICAgX2luaXRTcGFya2xpbmVDaGFydCgkKCcjbV9jaGFydF9zYWxlc19ieV9hcHBzXzJfMycpLCBbMTUsIDUsIC0xMCwgNSwgMTYsIDIyLCA2LCAtNiwgLTEyLCA1XSwgbVV0aWwuZ2V0Q29sb3IoJ2JyYW5kJyksIDIpO1xyXG4gICAgICAgIF9pbml0U3BhcmtsaW5lQ2hhcnQoJCgnI21fY2hhcnRfc2FsZXNfYnlfYXBwc18yXzQnKSwgWzgsIDE4LCAtMTIsIDEyLCAyMiwgLTIsIC0xNCwgMTYsIDE4LCAyXSwgbVV0aWwuZ2V0Q29sb3IoJ2luZm8nKSwgMik7XHJcbiAgICB9XHJcblxyXG4gICAgLy89PSBMYXRlc3QgVXBkYXRlcy5cclxuICAgIC8vKiogQmFzZWQgb24gQ2hhcnRqcyBwbHVnaW4gLSBodHRwOi8vd3d3LmNoYXJ0anMub3JnL1xyXG4gICAgdmFyIGxhdGVzdFVwZGF0ZXMgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAoJCgnI21fY2hhcnRfbGF0ZXN0X3VwZGF0ZXMnKS5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgY3R4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtX2NoYXJ0X2xhdGVzdF91cGRhdGVzXCIpLmdldENvbnRleHQoXCIyZFwiKTtcclxuXHJcbiAgICAgICAgdmFyIGNvbmZpZyA9IHtcclxuICAgICAgICAgICAgdHlwZTogJ2xpbmUnLFxyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICBsYWJlbHM6IFtcIkphbnVhcnlcIiwgXCJGZWJydWFyeVwiLCBcIk1hcmNoXCIsIFwiQXByaWxcIiwgXCJNYXlcIiwgXCJKdW5lXCIsIFwiSnVseVwiLCBcIkF1Z3VzdFwiLCBcIlNlcHRlbWJlclwiLCBcIk9jdG9iZXJcIl0sXHJcbiAgICAgICAgICAgICAgICBkYXRhc2V0czogW3tcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJTYWxlcyBTdGF0c1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogbVV0aWwuZ2V0Q29sb3IoJ2RhbmdlcicpLCAvLyBQdXQgdGhlIGdyYWRpZW50IGhlcmUgYXMgYSBmaWxsIGNvbG9yXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IG1VdGlsLmdldENvbG9yKCdkYW5nZXInKSxcclxuICAgICAgICAgICAgICAgICAgICBwb2ludEJhY2tncm91bmRDb2xvcjogQ2hhcnQuaGVscGVycy5jb2xvcignIzAwMDAwMCcpLmFscGhhKDApLnJnYlN0cmluZygpLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvaW50Qm9yZGVyQ29sb3I6IENoYXJ0LmhlbHBlcnMuY29sb3IoJyMwMDAwMDAnKS5hbHBoYSgwKS5yZ2JTdHJpbmcoKSxcclxuICAgICAgICAgICAgICAgICAgICBwb2ludEhvdmVyQmFja2dyb3VuZENvbG9yOiBtVXRpbC5nZXRDb2xvcignYWNjZW50JyksXHJcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRIb3ZlckJvcmRlckNvbG9yOiBDaGFydC5oZWxwZXJzLmNvbG9yKCcjMDAwMDAwJykuYWxwaGEoMC4xKS5yZ2JTdHJpbmcoKSxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy9maWxsOiAnc3RhcnQnLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMTAsIDE0LCAxMiwgMTYsIDksIDExLCAxMywgOSwgMTMsIDE1XHJcbiAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgfV1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB0b29sdGlwczoge1xyXG4gICAgICAgICAgICAgICAgICAgIGludGVyc2VjdDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZTogJ25lYXJlc3QnLFxyXG4gICAgICAgICAgICAgICAgICAgIHhQYWRkaW5nOiAxMCxcclxuICAgICAgICAgICAgICAgICAgICB5UGFkZGluZzogMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FyZXRQYWRkaW5nOiAxMFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGxlZ2VuZDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2l2ZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIG1haW50YWluQXNwZWN0UmF0aW86IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgaG92ZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICBtb2RlOiAnaW5kZXgnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgc2NhbGVzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgeEF4ZXM6IFt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBncmlkTGluZXM6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzY2FsZUxhYmVsOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxTdHJpbmc6ICdNb250aCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1dLFxyXG4gICAgICAgICAgICAgICAgICAgIHlBeGVzOiBbe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZExpbmVzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2NhbGVMYWJlbDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsU3RyaW5nOiAnVmFsdWUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpY2tzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZWdpbkF0WmVybzogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfV1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50czoge1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGVuc2lvbjogMC4wMDAwMDAxXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBwb2ludDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByYWRpdXM6IDQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcldpZHRoOiAxMlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHZhciBjaGFydCA9IG5ldyBDaGFydChjdHgsIGNvbmZpZyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy89PSBUcmVuZHMgU3RhdHMuXHJcbiAgICAvLyoqIEJhc2VkIG9uIENoYXJ0anMgcGx1Z2luIC0gaHR0cDovL3d3dy5jaGFydGpzLm9yZy9cclxuICAgIHZhciB0cmVuZHNTdGF0cyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmICgkKCcjbV9jaGFydF90cmVuZHNfc3RhdHMnKS5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgY3R4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtX2NoYXJ0X3RyZW5kc19zdGF0c1wiKS5nZXRDb250ZXh0KFwiMmRcIik7XHJcblxyXG4gICAgICAgIHZhciBncmFkaWVudCA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCAwLCAwLCAyNDApO1xyXG4gICAgICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcCgwLCBDaGFydC5oZWxwZXJzLmNvbG9yKCcjMDBjNWRjJykuYWxwaGEoMC43KS5yZ2JTdHJpbmcoKSk7XHJcbiAgICAgICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKDEsIENoYXJ0LmhlbHBlcnMuY29sb3IoJyNmMmZlZmYnKS5hbHBoYSgwKS5yZ2JTdHJpbmcoKSk7XHJcblxyXG4gICAgICAgIHZhciBjb25maWcgPSB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdsaW5lJyxcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgbGFiZWxzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCJKYW51YXJ5XCIsIFwiRmVicnVhcnlcIiwgXCJNYXJjaFwiLCBcIkFwcmlsXCIsIFwiTWF5XCIsIFwiSnVuZVwiLCBcIkp1bHlcIiwgXCJBdWd1c3RcIiwgXCJTZXB0ZW1iZXJcIiwgXCJPY3RvYmVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJKYW51YXJ5XCIsIFwiRmVicnVhcnlcIiwgXCJNYXJjaFwiLCBcIkFwcmlsXCIsIFwiTWF5XCIsIFwiSnVuZVwiLCBcIkp1bHlcIiwgXCJBdWd1c3RcIiwgXCJTZXB0ZW1iZXJcIiwgXCJPY3RvYmVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJKYW51YXJ5XCIsIFwiRmVicnVhcnlcIiwgXCJNYXJjaFwiLCBcIkFwcmlsXCIsIFwiTWF5XCIsIFwiSnVuZVwiLCBcIkp1bHlcIiwgXCJBdWd1c3RcIiwgXCJTZXB0ZW1iZXJcIiwgXCJPY3RvYmVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJKYW51YXJ5XCIsIFwiRmVicnVhcnlcIiwgXCJNYXJjaFwiLCBcIkFwcmlsXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBkYXRhc2V0czogW3tcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJTYWxlcyBTdGF0c1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogZ3JhZGllbnQsIC8vIFB1dCB0aGUgZ3JhZGllbnQgaGVyZSBhcyBhIGZpbGwgY29sb3JcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJyMwZGM4ZGUnLFxyXG5cclxuICAgICAgICAgICAgICAgICAgICBwb2ludEJhY2tncm91bmRDb2xvcjogQ2hhcnQuaGVscGVycy5jb2xvcignI2ZmZmZmZicpLmFscGhhKDApLnJnYlN0cmluZygpLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvaW50Qm9yZGVyQ29sb3I6IENoYXJ0LmhlbHBlcnMuY29sb3IoJyNmZmZmZmYnKS5hbHBoYSgwKS5yZ2JTdHJpbmcoKSxcclxuICAgICAgICAgICAgICAgICAgICBwb2ludEhvdmVyQmFja2dyb3VuZENvbG9yOiBtVXRpbC5nZXRDb2xvcignZGFuZ2VyJyksXHJcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRIb3ZlckJvcmRlckNvbG9yOiBDaGFydC5oZWxwZXJzLmNvbG9yKCcjMDAwMDAwJykuYWxwaGEoMC4yKS5yZ2JTdHJpbmcoKSxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy9maWxsOiAnc3RhcnQnLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMjAsIDEwLCAxOCwgMTUsIDI2LCAxOCwgMTUsIDIyLCAxNiwgMTIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDEyLCAxMywgMTAsIDE4LCAxNCwgMjQsIDE2LCAxMiwgMTksIDIxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAxNiwgMTQsIDIxLCAyMSwgMTMsIDE1LCAyMiwgMjQsIDIxLCAxMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgMTQsIDE5LCAyMSwgMTdcclxuICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICB9XVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZToge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHRvb2x0aXBzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW50ZXJzZWN0OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBtb2RlOiAnbmVhcmVzdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgeFBhZGRpbmc6IDEwLFxyXG4gICAgICAgICAgICAgICAgICAgIHlQYWRkaW5nOiAxMCxcclxuICAgICAgICAgICAgICAgICAgICBjYXJldFBhZGRpbmc6IDEwXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgbGVnZW5kOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmFsc2VcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICByZXNwb25zaXZlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgbWFpbnRhaW5Bc3BlY3RSYXRpbzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBob3Zlcjoge1xyXG4gICAgICAgICAgICAgICAgICAgIG1vZGU6ICdpbmRleCdcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBzY2FsZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICB4QXhlczogW3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyaWRMaW5lczogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjYWxlTGFiZWw6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbFN0cmluZzogJ01vbnRoJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfV0sXHJcbiAgICAgICAgICAgICAgICAgICAgeUF4ZXM6IFt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBncmlkTGluZXM6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzY2FsZUxhYmVsOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxTdHJpbmc6ICdWYWx1ZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGlja3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJlZ2luQXRaZXJvOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVsZW1lbnRzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW5zaW9uOiAwLjE5XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBwb2ludDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByYWRpdXM6IDQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcldpZHRoOiAxMlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBsYXlvdXQ6IHtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHZhciBjaGFydCA9IG5ldyBDaGFydChjdHgsIGNvbmZpZyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy89PSBUcmVuZHMgU3RhdHMgMi5cclxuICAgIC8vKiogQmFzZWQgb24gQ2hhcnRqcyBwbHVnaW4gLSBodHRwOi8vd3d3LmNoYXJ0anMub3JnL1xyXG4gICAgdmFyIHRyZW5kc1N0YXRzMiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmICgkKCcjbV9jaGFydF90cmVuZHNfc3RhdHNfMicpLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBjdHggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1fY2hhcnRfdHJlbmRzX3N0YXRzXzJcIikuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG5cclxuICAgICAgICB2YXIgY29uZmlnID0ge1xyXG4gICAgICAgICAgICB0eXBlOiAnbGluZScsXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIGxhYmVsczogW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiSmFudWFyeVwiLCBcIkZlYnJ1YXJ5XCIsIFwiTWFyY2hcIiwgXCJBcHJpbFwiLCBcIk1heVwiLCBcIkp1bmVcIiwgXCJKdWx5XCIsIFwiQXVndXN0XCIsIFwiU2VwdGVtYmVyXCIsIFwiT2N0b2JlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiSmFudWFyeVwiLCBcIkZlYnJ1YXJ5XCIsIFwiTWFyY2hcIiwgXCJBcHJpbFwiLCBcIk1heVwiLCBcIkp1bmVcIiwgXCJKdWx5XCIsIFwiQXVndXN0XCIsIFwiU2VwdGVtYmVyXCIsIFwiT2N0b2JlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiSmFudWFyeVwiLCBcIkZlYnJ1YXJ5XCIsIFwiTWFyY2hcIiwgXCJBcHJpbFwiLCBcIk1heVwiLCBcIkp1bmVcIiwgXCJKdWx5XCIsIFwiQXVndXN0XCIsIFwiU2VwdGVtYmVyXCIsIFwiT2N0b2JlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiSmFudWFyeVwiLCBcIkZlYnJ1YXJ5XCIsIFwiTWFyY2hcIiwgXCJBcHJpbFwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgZGF0YXNldHM6IFt7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiU2FsZXMgU3RhdHNcIixcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZDJmNWY5JywgLy8gUHV0IHRoZSBncmFkaWVudCBoZXJlIGFzIGEgZmlsbCBjb2xvclxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiBtVXRpbC5nZXRDb2xvcignYnJhbmQnKSxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRCYWNrZ3JvdW5kQ29sb3I6IENoYXJ0LmhlbHBlcnMuY29sb3IoJyNmZmZmZmYnKS5hbHBoYSgwKS5yZ2JTdHJpbmcoKSxcclxuICAgICAgICAgICAgICAgICAgICBwb2ludEJvcmRlckNvbG9yOiBDaGFydC5oZWxwZXJzLmNvbG9yKCcjZmZmZmZmJykuYWxwaGEoMCkucmdiU3RyaW5nKCksXHJcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRIb3ZlckJhY2tncm91bmRDb2xvcjogbVV0aWwuZ2V0Q29sb3IoJ2RhbmdlcicpLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvaW50SG92ZXJCb3JkZXJDb2xvcjogQ2hhcnQuaGVscGVycy5jb2xvcignIzAwMDAwMCcpLmFscGhhKDAuMikucmdiU3RyaW5nKCksXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vZmlsbDogJ3N0YXJ0JyxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDIwLCAxMCwgMTgsIDE1LCAzMiwgMTgsIDE1LCAyMiwgOCwgNixcclxuICAgICAgICAgICAgICAgICAgICAgICAgMTIsIDEzLCAxMCwgMTgsIDE0LCAyNCwgMTYsIDEyLCAxOSwgMjEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDE2LCAxNCwgMjQsIDIxLCAxMywgMTUsIDI3LCAyOSwgMjEsIDExLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAxNCwgMTksIDIxLCAxN1xyXG4gICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgIH1dXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgdG9vbHRpcHM6IHtcclxuICAgICAgICAgICAgICAgICAgICBpbnRlcnNlY3Q6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGU6ICduZWFyZXN0JyxcclxuICAgICAgICAgICAgICAgICAgICB4UGFkZGluZzogMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgeVBhZGRpbmc6IDEwLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhcmV0UGFkZGluZzogMTBcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBsZWdlbmQ6IHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBtYWludGFpbkFzcGVjdFJhdGlvOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGhvdmVyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZTogJ2luZGV4J1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHNjYWxlczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHhBeGVzOiBbe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZExpbmVzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2NhbGVMYWJlbDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsU3RyaW5nOiAnTW9udGgnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XSxcclxuICAgICAgICAgICAgICAgICAgICB5QXhlczogW3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyaWRMaW5lczogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjYWxlTGFiZWw6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbFN0cmluZzogJ1ZhbHVlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aWNrczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmVnaW5BdFplcm86IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1dXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZWxlbWVudHM6IHtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbnNpb246IDAuMTlcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHBvaW50OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhZGl1czogNCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDEyXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGxheW91dDoge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogNSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAwXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdmFyIGNoYXJ0ID0gbmV3IENoYXJ0KGN0eCwgY29uZmlnKTtcclxuICAgIH1cclxuXHJcbiAgICAvLz09IFRyZW5kcyBTdGF0cy5cclxuICAgIC8vKiogQmFzZWQgb24gQ2hhcnRqcyBwbHVnaW4gLSBodHRwOi8vd3d3LmNoYXJ0anMub3JnL1xyXG4gICAgdmFyIGxhdGVzdFRyZW5kc01hcCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmICgkKCcjbV9jaGFydF9sYXRlc3RfdHJlbmRzX21hcCcpLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHZhciBtYXAgPSBuZXcgR01hcHMoe1xyXG4gICAgICAgICAgICAgICAgZGl2OiAnI21fY2hhcnRfbGF0ZXN0X3RyZW5kc19tYXAnLFxyXG4gICAgICAgICAgICAgICAgbGF0OiAtMTIuMDQzMzMzLFxyXG4gICAgICAgICAgICAgICAgbG5nOiAtNzcuMDI4MzMzXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vPT0gUmV2ZW51ZSBDaGFuZ2UuXHJcbiAgICAvLyoqIEJhc2VkIG9uIE1vcnJpcyBwbHVnaW4gLSBodHRwOi8vbW9ycmlzanMuZ2l0aHViLmlvL21vcnJpcy5qcy9cclxuICAgIHZhciByZXZlbnVlQ2hhbmdlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKCQoJyNtX2NoYXJ0X3JldmVudWVfY2hhbmdlJykubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgTW9ycmlzLkRvbnV0KHtcclxuICAgICAgICAgICAgZWxlbWVudDogJ21fY2hhcnRfcmV2ZW51ZV9jaGFuZ2UnLFxyXG4gICAgICAgICAgICBkYXRhOiBbe1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIk5ldyBZb3JrXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDEwXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIkxvbmRvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiA3XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIlBhcmlzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDIwXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIGNvbG9yczogW1xyXG4gICAgICAgICAgICAgICAgbVV0aWwuZ2V0Q29sb3IoJ2FjY2VudCcpLFxyXG4gICAgICAgICAgICAgICAgbVV0aWwuZ2V0Q29sb3IoJ2RhbmdlcicpLFxyXG4gICAgICAgICAgICAgICAgbVV0aWwuZ2V0Q29sb3IoJ2JyYW5kJylcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLz09IFN1cHBvcnQgVGlja2V0cyBDaGFydC5cclxuICAgIC8vKiogQmFzZWQgb24gTW9ycmlzIHBsdWdpbiAtIGh0dHA6Ly9tb3JyaXNqcy5naXRodWIuaW8vbW9ycmlzLmpzL1xyXG4gICAgdmFyIHN1cHBvcnRUaWNrZXRzID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKCQoJyNtX2NoYXJ0X3N1cHBvcnRfdGlja2V0cycpLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIE1vcnJpcy5Eb251dCh7XHJcbiAgICAgICAgICAgIGVsZW1lbnQ6ICdtX2NoYXJ0X3N1cHBvcnRfdGlja2V0cycsXHJcbiAgICAgICAgICAgIGRhdGE6IFt7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiTWFyZ2luc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAyMFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJQcm9maXRcIixcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogNzBcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiTG9zdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAxMFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBsYWJlbENvbG9yOiAnI2E3YTdjMicsXHJcbiAgICAgICAgICAgIGNvbG9yczogW1xyXG4gICAgICAgICAgICAgICAgbVV0aWwuZ2V0Q29sb3IoJ2FjY2VudCcpLFxyXG4gICAgICAgICAgICAgICAgbVV0aWwuZ2V0Q29sb3IoJ2JyYW5kJyksXHJcbiAgICAgICAgICAgICAgICBtVXRpbC5nZXRDb2xvcignZGFuZ2VyJylcclxuICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAvL2Zvcm1hdHRlcjogZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHggKyBcIiVcIn1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLz09IFN1cHBvcnQgVGlja2V0cyBDaGFydC5cclxuICAgIC8vKiogQmFzZWQgb24gTW9ycmlzIHBsdWdpbiAtIGh0dHA6Ly9tb3JyaXNqcy5naXRodWIuaW8vbW9ycmlzLmpzL1xyXG4gICAgdmFyIHN1cHBvcnRUaWNrZXRzMiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmICgkKCcjbV9jaGFydF9zdXBwb3J0X3RpY2tldHMyJykubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGNoYXJ0ID0gbmV3IENoYXJ0aXN0LlBpZSgnI21fY2hhcnRfc3VwcG9ydF90aWNrZXRzMicsIHtcclxuICAgICAgICAgICAgc2VyaWVzOiBbe1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAzMixcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICdjdXN0b20nLFxyXG4gICAgICAgICAgICAgICAgICAgIG1ldGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IG1VdGlsLmdldENvbG9yKCdicmFuZCcpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogMzIsXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnY3VzdG9tJyxcclxuICAgICAgICAgICAgICAgICAgICBtZXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBtVXRpbC5nZXRDb2xvcignYWNjZW50JylcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAzNixcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICdjdXN0b20nLFxyXG4gICAgICAgICAgICAgICAgICAgIG1ldGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IG1VdGlsLmdldENvbG9yKCd3YXJuaW5nJylcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIGxhYmVsczogWzEsIDIsIDNdXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBkb251dDogdHJ1ZSxcclxuICAgICAgICAgICAgZG9udXRXaWR0aDogMTcsXHJcbiAgICAgICAgICAgIHNob3dMYWJlbDogZmFsc2VcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY2hhcnQub24oJ2RyYXcnLCBmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhLnR5cGUgPT09ICdzbGljZScpIHtcclxuICAgICAgICAgICAgICAgIC8vIEdldCB0aGUgdG90YWwgcGF0aCBsZW5ndGggaW4gb3JkZXIgdG8gdXNlIGZvciBkYXNoIGFycmF5IGFuaW1hdGlvblxyXG4gICAgICAgICAgICAgICAgdmFyIHBhdGhMZW5ndGggPSBkYXRhLmVsZW1lbnQuX25vZGUuZ2V0VG90YWxMZW5ndGgoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBTZXQgYSBkYXNoYXJyYXkgdGhhdCBtYXRjaGVzIHRoZSBwYXRoIGxlbmd0aCBhcyBwcmVyZXF1aXNpdGUgdG8gYW5pbWF0ZSBkYXNob2Zmc2V0XHJcbiAgICAgICAgICAgICAgICBkYXRhLmVsZW1lbnQuYXR0cih7XHJcbiAgICAgICAgICAgICAgICAgICAgJ3N0cm9rZS1kYXNoYXJyYXknOiBwYXRoTGVuZ3RoICsgJ3B4ICcgKyBwYXRoTGVuZ3RoICsgJ3B4J1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gQ3JlYXRlIGFuaW1hdGlvbiBkZWZpbml0aW9uIHdoaWxlIGFsc28gYXNzaWduaW5nIGFuIElEIHRvIHRoZSBhbmltYXRpb24gZm9yIGxhdGVyIHN5bmMgdXNhZ2VcclxuICAgICAgICAgICAgICAgIHZhciBhbmltYXRpb25EZWZpbml0aW9uID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICdzdHJva2UtZGFzaG9mZnNldCc6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6ICdhbmltJyArIGRhdGEuaW5kZXgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGR1cjogMTAwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnJvbTogLXBhdGhMZW5ndGggKyAncHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0bzogJzBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVhc2luZzogQ2hhcnRpc3QuU3ZnLkVhc2luZy5lYXNlT3V0UXVpbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFdlIG5lZWQgdG8gdXNlIGBmaWxsOiAnZnJlZXplJ2Agb3RoZXJ3aXNlIG91ciBhbmltYXRpb24gd2lsbCBmYWxsIGJhY2sgdG8gaW5pdGlhbCAobm90IHZpc2libGUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw6ICdmcmVlemUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnc3Ryb2tlJzogZGF0YS5tZXRhLmNvbG9yXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBJZiB0aGlzIHdhcyBub3QgdGhlIGZpcnN0IHNsaWNlLCB3ZSBuZWVkIHRvIHRpbWUgdGhlIGFuaW1hdGlvbiBzbyB0aGF0IGl0IHVzZXMgdGhlIGVuZCBzeW5jIGV2ZW50IG9mIHRoZSBwcmV2aW91cyBhbmltYXRpb25cclxuICAgICAgICAgICAgICAgIGlmIChkYXRhLmluZGV4ICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uRGVmaW5pdGlvblsnc3Ryb2tlLWRhc2hvZmZzZXQnXS5iZWdpbiA9ICdhbmltJyArIChkYXRhLmluZGV4IC0gMSkgKyAnLmVuZCc7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gV2UgbmVlZCB0byBzZXQgYW4gaW5pdGlhbCB2YWx1ZSBiZWZvcmUgdGhlIGFuaW1hdGlvbiBzdGFydHMgYXMgd2UgYXJlIG5vdCBpbiBndWlkZWQgbW9kZSB3aGljaCB3b3VsZCBkbyB0aGF0IGZvciB1c1xyXG5cclxuICAgICAgICAgICAgICAgIGRhdGEuZWxlbWVudC5hdHRyKHtcclxuICAgICAgICAgICAgICAgICAgICAnc3Ryb2tlLWRhc2hvZmZzZXQnOiAtcGF0aExlbmd0aCArICdweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3N0cm9rZSc6IGRhdGEubWV0YS5jb2xvclxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gV2UgY2FuJ3QgdXNlIGd1aWRlZCBtb2RlIGFzIHRoZSBhbmltYXRpb25zIG5lZWQgdG8gcmVseSBvbiBzZXR0aW5nIGJlZ2luIG1hbnVhbGx5XHJcbiAgICAgICAgICAgICAgICAvLyBTZWUgaHR0cDovL2dpb25rdW56LmdpdGh1Yi5pby9jaGFydGlzdC1qcy9hcGktZG9jdW1lbnRhdGlvbi5odG1sI2NoYXJ0aXN0c3ZnLWZ1bmN0aW9uLWFuaW1hdGVcclxuICAgICAgICAgICAgICAgIGRhdGEuZWxlbWVudC5hbmltYXRlKGFuaW1hdGlvbkRlZmluaXRpb24sIGZhbHNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vPT0gQWN0aXZpdGllcyBDaGFydHMuXHJcbiAgICAvLyoqIEJhc2VkIG9uIENoYXJ0anMgcGx1Z2luIC0gaHR0cDovL3d3dy5jaGFydGpzLm9yZy9cclxuICAgIHZhciBhY3Rpdml0aWVzQ2hhcnQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAoJCgnI21fY2hhcnRfYWN0aXZpdGllcycpLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBjdHggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1fY2hhcnRfYWN0aXZpdGllc1wiKS5nZXRDb250ZXh0KFwiMmRcIik7XHJcblxyXG4gICAgICAgIHZhciBncmFkaWVudCA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCAwLCAwLCAyNDApO1xyXG4gICAgICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcCgwLCBDaGFydC5oZWxwZXJzLmNvbG9yKCcjZTE0Yzg2JykuYWxwaGEoMSkucmdiU3RyaW5nKCkpO1xyXG4gICAgICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcCgxLCBDaGFydC5oZWxwZXJzLmNvbG9yKCcjZTE0Yzg2JykuYWxwaGEoMC4zKS5yZ2JTdHJpbmcoKSk7XHJcblxyXG4gICAgICAgIHZhciBjb25maWcgPSB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdsaW5lJyxcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgbGFiZWxzOiBbXCJKYW51YXJ5XCIsIFwiRmVicnVhcnlcIiwgXCJNYXJjaFwiLCBcIkFwcmlsXCIsIFwiTWF5XCIsIFwiSnVuZVwiLCBcIkp1bHlcIiwgXCJBdWd1c3RcIiwgXCJTZXB0ZW1iZXJcIiwgXCJPY3RvYmVyXCJdLFxyXG4gICAgICAgICAgICAgICAgZGF0YXNldHM6IFt7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiU2FsZXMgU3RhdHNcIixcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGdyYWRpZW50LFxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAnI2UxM2E1OCcsXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHBvaW50QmFja2dyb3VuZENvbG9yOiBDaGFydC5oZWxwZXJzLmNvbG9yKCcjMDAwMDAwJykuYWxwaGEoMCkucmdiU3RyaW5nKCksXHJcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRCb3JkZXJDb2xvcjogQ2hhcnQuaGVscGVycy5jb2xvcignIzAwMDAwMCcpLmFscGhhKDApLnJnYlN0cmluZygpLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvaW50SG92ZXJCYWNrZ3JvdW5kQ29sb3I6IG1VdGlsLmdldENvbG9yKCdsaWdodCcpLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvaW50SG92ZXJCb3JkZXJDb2xvcjogQ2hhcnQuaGVscGVycy5jb2xvcignI2ZmZmZmZicpLmFscGhhKDAuMSkucmdiU3RyaW5nKCksXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vZmlsbDogJ3N0YXJ0JyxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDEwLCAxNCwgMTIsIDE2LCA5LCAxMSwgMTMsIDksIDEzLCAxNVxyXG4gICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgIH1dXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgdG9vbHRpcHM6IHtcclxuICAgICAgICAgICAgICAgICAgICBtb2RlOiAnbmVhcmVzdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgaW50ZXJzZWN0OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ25lYXJlc3QnLFxyXG4gICAgICAgICAgICAgICAgICAgIHhQYWRkaW5nOiAxMCxcclxuICAgICAgICAgICAgICAgICAgICB5UGFkZGluZzogMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FyZXRQYWRkaW5nOiAxMFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGxlZ2VuZDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2l2ZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIG1haW50YWluQXNwZWN0UmF0aW86IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgc2NhbGVzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgeEF4ZXM6IFt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBncmlkTGluZXM6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzY2FsZUxhYmVsOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxTdHJpbmc6ICdNb250aCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1dLFxyXG4gICAgICAgICAgICAgICAgICAgIHlBeGVzOiBbe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZExpbmVzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2NhbGVMYWJlbDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsU3RyaW5nOiAnVmFsdWUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpY2tzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZWdpbkF0WmVybzogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfV1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50czoge1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGVuc2lvbjogMC4wMDAwMDAxXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBwb2ludDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByYWRpdXM6IDQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcldpZHRoOiAxMlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBsYXlvdXQ6IHtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDEwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3R0b206IDBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB2YXIgY2hhcnQgPSBuZXcgQ2hhcnQoY3R4LCBjb25maWcpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vPT0gQmFuZHdpZHRoIENoYXJ0cyAxLlxyXG4gICAgLy8qKiBCYXNlZCBvbiBDaGFydGpzIHBsdWdpbiAtIGh0dHA6Ly93d3cuY2hhcnRqcy5vcmcvXHJcbiAgICB2YXIgYmFuZHdpZHRoQ2hhcnQxID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKCQoJyNtX2NoYXJ0X2JhbmR3aWR0aDEnKS5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgY3R4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtX2NoYXJ0X2JhbmR3aWR0aDFcIikuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG5cclxuICAgICAgICB2YXIgZ3JhZGllbnQgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgMCwgMCwgMjQwKTtcclxuICAgICAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoMCwgQ2hhcnQuaGVscGVycy5jb2xvcignI2QxZjFlYycpLmFscGhhKDEpLnJnYlN0cmluZygpKTtcclxuICAgICAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoMSwgQ2hhcnQuaGVscGVycy5jb2xvcignI2QxZjFlYycpLmFscGhhKDAuMykucmdiU3RyaW5nKCkpO1xyXG5cclxuICAgICAgICB2YXIgY29uZmlnID0ge1xyXG4gICAgICAgICAgICB0eXBlOiAnbGluZScsXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIGxhYmVsczogW1wiSmFudWFyeVwiLCBcIkZlYnJ1YXJ5XCIsIFwiTWFyY2hcIiwgXCJBcHJpbFwiLCBcIk1heVwiLCBcIkp1bmVcIiwgXCJKdWx5XCIsIFwiQXVndXN0XCIsIFwiU2VwdGVtYmVyXCIsIFwiT2N0b2JlclwiXSxcclxuICAgICAgICAgICAgICAgIGRhdGFzZXRzOiBbe1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIkJhbmR3aWR0aCBTdGF0c1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogZ3JhZGllbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IG1VdGlsLmdldENvbG9yKCdzdWNjZXNzJyksXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHBvaW50QmFja2dyb3VuZENvbG9yOiBDaGFydC5oZWxwZXJzLmNvbG9yKCcjMDAwMDAwJykuYWxwaGEoMCkucmdiU3RyaW5nKCksXHJcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRCb3JkZXJDb2xvcjogQ2hhcnQuaGVscGVycy5jb2xvcignIzAwMDAwMCcpLmFscGhhKDApLnJnYlN0cmluZygpLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvaW50SG92ZXJCYWNrZ3JvdW5kQ29sb3I6IG1VdGlsLmdldENvbG9yKCdkYW5nZXInKSxcclxuICAgICAgICAgICAgICAgICAgICBwb2ludEhvdmVyQm9yZGVyQ29sb3I6IENoYXJ0LmhlbHBlcnMuY29sb3IoJyMwMDAwMDAnKS5hbHBoYSgwLjEpLnJnYlN0cmluZygpLFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvL2ZpbGw6ICdzdGFydCcsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAxMCwgMTQsIDEyLCAxNiwgOSwgMTEsIDEzLCA5LCAxMywgMTVcclxuICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICB9XVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZToge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHRvb2x0aXBzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZTogJ25lYXJlc3QnLFxyXG4gICAgICAgICAgICAgICAgICAgIGludGVyc2VjdDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICduZWFyZXN0JyxcclxuICAgICAgICAgICAgICAgICAgICB4UGFkZGluZzogMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgeVBhZGRpbmc6IDEwLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhcmV0UGFkZGluZzogMTBcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBsZWdlbmQ6IHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBtYWludGFpbkFzcGVjdFJhdGlvOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHNjYWxlczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHhBeGVzOiBbe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZExpbmVzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2NhbGVMYWJlbDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsU3RyaW5nOiAnTW9udGgnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XSxcclxuICAgICAgICAgICAgICAgICAgICB5QXhlczogW3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyaWRMaW5lczogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjYWxlTGFiZWw6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbFN0cmluZzogJ1ZhbHVlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aWNrczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmVnaW5BdFplcm86IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1dXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZWxlbWVudHM6IHtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbnNpb246IDAuMDAwMDAwMVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgcG9pbnQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmFkaXVzOiA0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJXaWR0aDogMTJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgbGF5b3V0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAxMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAwXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdmFyIGNoYXJ0ID0gbmV3IENoYXJ0KGN0eCwgY29uZmlnKTtcclxuICAgIH1cclxuXHJcbiAgICAvLz09IEJhbmR3aWR0aCBDaGFydHMgMi5cclxuICAgIC8vKiogQmFzZWQgb24gQ2hhcnRqcyBwbHVnaW4gLSBodHRwOi8vd3d3LmNoYXJ0anMub3JnL1xyXG4gICAgdmFyIGJhbmR3aWR0aENoYXJ0MiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmICgkKCcjbV9jaGFydF9iYW5kd2lkdGgyJykubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGN0eCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibV9jaGFydF9iYW5kd2lkdGgyXCIpLmdldENvbnRleHQoXCIyZFwiKTtcclxuXHJcbiAgICAgICAgdmFyIGdyYWRpZW50ID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIDAsIDAsIDI0MCk7XHJcbiAgICAgICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKDAsIENoYXJ0LmhlbHBlcnMuY29sb3IoJyNmZmVmY2UnKS5hbHBoYSgxKS5yZ2JTdHJpbmcoKSk7XHJcbiAgICAgICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKDEsIENoYXJ0LmhlbHBlcnMuY29sb3IoJyNmZmVmY2UnKS5hbHBoYSgwLjMpLnJnYlN0cmluZygpKTtcclxuXHJcbiAgICAgICAgdmFyIGNvbmZpZyA9IHtcclxuICAgICAgICAgICAgdHlwZTogJ2xpbmUnLFxyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICBsYWJlbHM6IFtcIkphbnVhcnlcIiwgXCJGZWJydWFyeVwiLCBcIk1hcmNoXCIsIFwiQXByaWxcIiwgXCJNYXlcIiwgXCJKdW5lXCIsIFwiSnVseVwiLCBcIkF1Z3VzdFwiLCBcIlNlcHRlbWJlclwiLCBcIk9jdG9iZXJcIl0sXHJcbiAgICAgICAgICAgICAgICBkYXRhc2V0czogW3tcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJCYW5kd2lkdGggU3RhdHNcIixcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGdyYWRpZW50LFxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiBtVXRpbC5nZXRDb2xvcignd2FybmluZycpLFxyXG5cclxuICAgICAgICAgICAgICAgICAgICBwb2ludEJhY2tncm91bmRDb2xvcjogQ2hhcnQuaGVscGVycy5jb2xvcignIzAwMDAwMCcpLmFscGhhKDApLnJnYlN0cmluZygpLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvaW50Qm9yZGVyQ29sb3I6IENoYXJ0LmhlbHBlcnMuY29sb3IoJyMwMDAwMDAnKS5hbHBoYSgwKS5yZ2JTdHJpbmcoKSxcclxuICAgICAgICAgICAgICAgICAgICBwb2ludEhvdmVyQmFja2dyb3VuZENvbG9yOiBtVXRpbC5nZXRDb2xvcignZGFuZ2VyJyksXHJcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRIb3ZlckJvcmRlckNvbG9yOiBDaGFydC5oZWxwZXJzLmNvbG9yKCcjMDAwMDAwJykuYWxwaGEoMC4xKS5yZ2JTdHJpbmcoKSxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy9maWxsOiAnc3RhcnQnLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMTAsIDE0LCAxMiwgMTYsIDksIDExLCAxMywgOSwgMTMsIDE1XHJcbiAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgfV1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB0b29sdGlwczoge1xyXG4gICAgICAgICAgICAgICAgICAgIG1vZGU6ICduZWFyZXN0JyxcclxuICAgICAgICAgICAgICAgICAgICBpbnRlcnNlY3Q6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnbmVhcmVzdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgeFBhZGRpbmc6IDEwLFxyXG4gICAgICAgICAgICAgICAgICAgIHlQYWRkaW5nOiAxMCxcclxuICAgICAgICAgICAgICAgICAgICBjYXJldFBhZGRpbmc6IDEwXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgbGVnZW5kOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmFsc2VcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICByZXNwb25zaXZlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgbWFpbnRhaW5Bc3BlY3RSYXRpbzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBzY2FsZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICB4QXhlczogW3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyaWRMaW5lczogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjYWxlTGFiZWw6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbFN0cmluZzogJ01vbnRoJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfV0sXHJcbiAgICAgICAgICAgICAgICAgICAgeUF4ZXM6IFt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBncmlkTGluZXM6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzY2FsZUxhYmVsOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxTdHJpbmc6ICdWYWx1ZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGlja3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJlZ2luQXRaZXJvOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVsZW1lbnRzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW5zaW9uOiAwLjAwMDAwMDFcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHBvaW50OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhZGl1czogNCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDEyXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGxheW91dDoge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHZhciBjaGFydCA9IG5ldyBDaGFydChjdHgsIGNvbmZpZyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy89PSBCYW5kd2lkdGggQ2hhcnRzIDIuXHJcbiAgICAvLyoqIEJhc2VkIG9uIENoYXJ0anMgcGx1Z2luIC0gaHR0cDovL3d3dy5jaGFydGpzLm9yZy9cclxuICAgIHZhciBhZFdvcmRzU3RhdCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmICgkKCcjbV9jaGFydF9hZHdvcmRzX3N0YXRzJykubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGN0eCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibV9jaGFydF9hZHdvcmRzX3N0YXRzXCIpLmdldENvbnRleHQoXCIyZFwiKTtcclxuXHJcbiAgICAgICAgdmFyIGdyYWRpZW50ID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIDAsIDAsIDI0MCk7XHJcbiAgICAgICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKDAsIENoYXJ0LmhlbHBlcnMuY29sb3IoJyNmZmVmY2UnKS5hbHBoYSgxKS5yZ2JTdHJpbmcoKSk7XHJcbiAgICAgICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKDEsIENoYXJ0LmhlbHBlcnMuY29sb3IoJyNmZmVmY2UnKS5hbHBoYSgwLjMpLnJnYlN0cmluZygpKTtcclxuXHJcbiAgICAgICAgdmFyIGNvbmZpZyA9IHtcclxuICAgICAgICAgICAgdHlwZTogJ2xpbmUnLFxyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICBsYWJlbHM6IFtcIkphbnVhcnlcIiwgXCJGZWJydWFyeVwiLCBcIk1hcmNoXCIsIFwiQXByaWxcIiwgXCJNYXlcIiwgXCJKdW5lXCIsIFwiSnVseVwiLCBcIkF1Z3VzdFwiLCBcIlNlcHRlbWJlclwiLCBcIk9jdG9iZXJcIl0sXHJcbiAgICAgICAgICAgICAgICBkYXRhc2V0czogW3tcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJBZFdvcmQgQ2xpY2tzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBtVXRpbC5nZXRDb2xvcignYnJhbmQnKSxcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogbVV0aWwuZ2V0Q29sb3IoJ2JyYW5kJyksXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHBvaW50QmFja2dyb3VuZENvbG9yOiBDaGFydC5oZWxwZXJzLmNvbG9yKCcjMDAwMDAwJykuYWxwaGEoMCkucmdiU3RyaW5nKCksXHJcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRCb3JkZXJDb2xvcjogQ2hhcnQuaGVscGVycy5jb2xvcignIzAwMDAwMCcpLmFscGhhKDApLnJnYlN0cmluZygpLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvaW50SG92ZXJCYWNrZ3JvdW5kQ29sb3I6IG1VdGlsLmdldENvbG9yKCdkYW5nZXInKSxcclxuICAgICAgICAgICAgICAgICAgICBwb2ludEhvdmVyQm9yZGVyQ29sb3I6IENoYXJ0LmhlbHBlcnMuY29sb3IoJyMwMDAwMDAnKS5hbHBoYSgwLjEpLnJnYlN0cmluZygpLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMTIsIDE2LCA5LCAxOCwgMTMsIDEyLCAxOCwgMTIsIDE1LCAxN1xyXG4gICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJBZFdvcmRzIFZpZXdzXCIsXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogbVV0aWwuZ2V0Q29sb3IoJ2FjY2VudCcpLFxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiBtVXRpbC5nZXRDb2xvcignYWNjZW50JyksXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHBvaW50QmFja2dyb3VuZENvbG9yOiBDaGFydC5oZWxwZXJzLmNvbG9yKCcjMDAwMDAwJykuYWxwaGEoMCkucmdiU3RyaW5nKCksXHJcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRCb3JkZXJDb2xvcjogQ2hhcnQuaGVscGVycy5jb2xvcignIzAwMDAwMCcpLmFscGhhKDApLnJnYlN0cmluZygpLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvaW50SG92ZXJCYWNrZ3JvdW5kQ29sb3I6IG1VdGlsLmdldENvbG9yKCdkYW5nZXInKSxcclxuICAgICAgICAgICAgICAgICAgICBwb2ludEhvdmVyQm9yZGVyQ29sb3I6IENoYXJ0LmhlbHBlcnMuY29sb3IoJyMwMDAwMDAnKS5hbHBoYSgwLjEpLnJnYlN0cmluZygpLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMTAsIDE0LCAxMiwgMTYsIDksIDExLCAxMywgOSwgMTMsIDE1XHJcbiAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgfV1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB0b29sdGlwczoge1xyXG4gICAgICAgICAgICAgICAgICAgIG1vZGU6ICduZWFyZXN0JyxcclxuICAgICAgICAgICAgICAgICAgICBpbnRlcnNlY3Q6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnbmVhcmVzdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgeFBhZGRpbmc6IDEwLFxyXG4gICAgICAgICAgICAgICAgICAgIHlQYWRkaW5nOiAxMCxcclxuICAgICAgICAgICAgICAgICAgICBjYXJldFBhZGRpbmc6IDEwXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgbGVnZW5kOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmFsc2VcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICByZXNwb25zaXZlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgbWFpbnRhaW5Bc3BlY3RSYXRpbzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBzY2FsZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICB4QXhlczogW3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyaWRMaW5lczogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjYWxlTGFiZWw6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbFN0cmluZzogJ01vbnRoJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfV0sXHJcbiAgICAgICAgICAgICAgICAgICAgeUF4ZXM6IFt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YWNrZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBncmlkTGluZXM6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzY2FsZUxhYmVsOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxTdHJpbmc6ICdWYWx1ZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGlja3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJlZ2luQXRaZXJvOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVsZW1lbnRzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW5zaW9uOiAwLjAwMDAwMDFcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHBvaW50OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhZGl1czogNCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDEyXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGxheW91dDoge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHZhciBjaGFydCA9IG5ldyBDaGFydChjdHgsIGNvbmZpZyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy89PSBCYW5kd2lkdGggQ2hhcnRzIDIuXHJcbiAgICAvLyoqIEJhc2VkIG9uIENoYXJ0anMgcGx1Z2luIC0gaHR0cDovL3d3dy5jaGFydGpzLm9yZy9cclxuICAgIHZhciBmaW5hbmNlU3VtbWFyeSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmICgkKCcjbV9jaGFydF9maW5hbmNlX3N1bW1hcnknKS5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgY3R4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtX2NoYXJ0X2ZpbmFuY2Vfc3VtbWFyeVwiKS5nZXRDb250ZXh0KFwiMmRcIik7XHJcblxyXG4gICAgICAgIHZhciBjb25maWcgPSB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdsaW5lJyxcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgbGFiZWxzOiBbXCJKYW51YXJ5XCIsIFwiRmVicnVhcnlcIiwgXCJNYXJjaFwiLCBcIkFwcmlsXCIsIFwiTWF5XCIsIFwiSnVuZVwiLCBcIkp1bHlcIiwgXCJBdWd1c3RcIiwgXCJTZXB0ZW1iZXJcIiwgXCJPY3RvYmVyXCJdLFxyXG4gICAgICAgICAgICAgICAgZGF0YXNldHM6IFt7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiQWRXb3JkcyBWaWV3c1wiLFxyXG5cclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IG1VdGlsLmdldENvbG9yKCdhY2NlbnQnKSxcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogbVV0aWwuZ2V0Q29sb3IoJ2FjY2VudCcpLFxyXG5cclxuICAgICAgICAgICAgICAgICAgICBwb2ludEJhY2tncm91bmRDb2xvcjogQ2hhcnQuaGVscGVycy5jb2xvcignIzAwMDAwMCcpLmFscGhhKDApLnJnYlN0cmluZygpLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvaW50Qm9yZGVyQ29sb3I6IENoYXJ0LmhlbHBlcnMuY29sb3IoJyMwMDAwMDAnKS5hbHBoYSgwKS5yZ2JTdHJpbmcoKSxcclxuICAgICAgICAgICAgICAgICAgICBwb2ludEhvdmVyQmFja2dyb3VuZENvbG9yOiBtVXRpbC5nZXRDb2xvcignZGFuZ2VyJyksXHJcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRIb3ZlckJvcmRlckNvbG9yOiBDaGFydC5oZWxwZXJzLmNvbG9yKCcjMDAwMDAwJykuYWxwaGEoMC4xKS5yZ2JTdHJpbmcoKSxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDEwLCAxNCwgMTIsIDE2LCA5LCAxMSwgMTMsIDksIDEzLCAxNVxyXG4gICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgIH1dXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgdG9vbHRpcHM6IHtcclxuICAgICAgICAgICAgICAgICAgICBtb2RlOiAnbmVhcmVzdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgaW50ZXJzZWN0OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ25lYXJlc3QnLFxyXG4gICAgICAgICAgICAgICAgICAgIHhQYWRkaW5nOiAxMCxcclxuICAgICAgICAgICAgICAgICAgICB5UGFkZGluZzogMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FyZXRQYWRkaW5nOiAxMFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGxlZ2VuZDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2l2ZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIG1haW50YWluQXNwZWN0UmF0aW86IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgc2NhbGVzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgeEF4ZXM6IFt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBncmlkTGluZXM6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzY2FsZUxhYmVsOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxTdHJpbmc6ICdNb250aCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1dLFxyXG4gICAgICAgICAgICAgICAgICAgIHlBeGVzOiBbe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZExpbmVzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2NhbGVMYWJlbDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsU3RyaW5nOiAnVmFsdWUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpY2tzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZWdpbkF0WmVybzogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfV1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50czoge1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGVuc2lvbjogMC4wMDAwMDAxXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBwb2ludDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByYWRpdXM6IDQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcldpZHRoOiAxMlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBsYXlvdXQ6IHtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDEwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3R0b206IDBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB2YXIgY2hhcnQgPSBuZXcgQ2hhcnQoY3R4LCBjb25maWcpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vPT0gUXVpY2sgU3RhdCBDaGFydHNcclxuICAgIHZhciBxdWlja1N0YXRzID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgX2luaXRTcGFya2xpbmVDaGFydCgkKCcjbV9jaGFydF9xdWlja19zdGF0c18xJyksIFsxMCwgMTQsIDE4LCAxMSwgOSwgMTIsIDE0LCAxNywgMTgsIDE0XSwgbVV0aWwuZ2V0Q29sb3IoJ2JyYW5kJyksIDMpO1xyXG4gICAgICAgIF9pbml0U3BhcmtsaW5lQ2hhcnQoJCgnI21fY2hhcnRfcXVpY2tfc3RhdHNfMicpLCBbMTEsIDEyLCAxOCwgMTMsIDExLCAxMiwgMTUsIDEzLCAxOSwgMTVdLCBtVXRpbC5nZXRDb2xvcignZGFuZ2VyJyksIDMpO1xyXG4gICAgICAgIF9pbml0U3BhcmtsaW5lQ2hhcnQoJCgnI21fY2hhcnRfcXVpY2tfc3RhdHNfMycpLCBbMTIsIDEyLCAxOCwgMTEsIDE1LCAxMiwgMTMsIDE2LCAxMSwgMThdLCBtVXRpbC5nZXRDb2xvcignc3VjY2VzcycpLCAzKTtcclxuICAgICAgICBfaW5pdFNwYXJrbGluZUNoYXJ0KCQoJyNtX2NoYXJ0X3F1aWNrX3N0YXRzXzQnKSwgWzExLCA5LCAxMywgMTgsIDEzLCAxNSwgMTQsIDEzLCAxOCwgMTVdLCBtVXRpbC5nZXRDb2xvcignYWNjZW50JyksIDMpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBkYXRlcmFuZ2VwaWNrZXJJbml0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKCQoJyNtX2Rhc2hib2FyZF9kYXRlcmFuZ2VwaWNrZXInKS5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgcGlja2VyID0gJCgnI21fZGFzaGJvYXJkX2RhdGVyYW5nZXBpY2tlcicpO1xyXG4gICAgICAgIHZhciBzdGFydCA9IG1vbWVudCgpO1xyXG4gICAgICAgIHZhciBlbmQgPSBtb21lbnQoKTtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gY2Ioc3RhcnQsIGVuZCwgbGFiZWwpIHtcclxuICAgICAgICAgICAgdmFyIHRpdGxlID0gJyc7XHJcbiAgICAgICAgICAgIHZhciByYW5nZSA9ICcnO1xyXG5cclxuICAgICAgICAgICAgaWYgKChlbmQgLSBzdGFydCkgPCAxMDApIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlID0gJ1RvZGF5Oic7XHJcbiAgICAgICAgICAgICAgICByYW5nZSA9IHN0YXJ0LmZvcm1hdCgnTU1NIEQnKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChsYWJlbCA9PSAnWWVzdGVyZGF5Jykge1xyXG4gICAgICAgICAgICAgICAgdGl0bGUgPSAnWWVzdGVyZGF5Oic7XHJcbiAgICAgICAgICAgICAgICByYW5nZSA9IHN0YXJ0LmZvcm1hdCgnTU1NIEQnKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJhbmdlID0gc3RhcnQuZm9ybWF0KCdNTU0gRCcpICsgJyAtICcgKyBlbmQuZm9ybWF0KCdNTU0gRCcpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBwaWNrZXIuZmluZCgnLm0tc3ViaGVhZGVyX19kYXRlcmFuZ2UtZGF0ZScpLmh0bWwocmFuZ2UpO1xyXG4gICAgICAgICAgICBwaWNrZXIuZmluZCgnLm0tc3ViaGVhZGVyX19kYXRlcmFuZ2UtdGl0bGUnKS5odG1sKHRpdGxlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHBpY2tlci5kYXRlcmFuZ2VwaWNrZXIoe1xyXG4gICAgICAgICAgICBzdGFydERhdGU6IHN0YXJ0LFxyXG4gICAgICAgICAgICBlbmREYXRlOiBlbmQsXHJcbiAgICAgICAgICAgIG9wZW5zOiAnbGVmdCcsXHJcbiAgICAgICAgICAgIHJhbmdlczoge1xyXG4gICAgICAgICAgICAgICAgJ1RvZGF5JzogW21vbWVudCgpLCBtb21lbnQoKV0sXHJcbiAgICAgICAgICAgICAgICAnWWVzdGVyZGF5JzogW21vbWVudCgpLnN1YnRyYWN0KDEsICdkYXlzJyksIG1vbWVudCgpLnN1YnRyYWN0KDEsICdkYXlzJyldLFxyXG4gICAgICAgICAgICAgICAgJ0xhc3QgNyBEYXlzJzogW21vbWVudCgpLnN1YnRyYWN0KDYsICdkYXlzJyksIG1vbWVudCgpXSxcclxuICAgICAgICAgICAgICAgICdMYXN0IDMwIERheXMnOiBbbW9tZW50KCkuc3VidHJhY3QoMjksICdkYXlzJyksIG1vbWVudCgpXSxcclxuICAgICAgICAgICAgICAgICdUaGlzIE1vbnRoJzogW21vbWVudCgpLnN0YXJ0T2YoJ21vbnRoJyksIG1vbWVudCgpLmVuZE9mKCdtb250aCcpXSxcclxuICAgICAgICAgICAgICAgICdMYXN0IE1vbnRoJzogW21vbWVudCgpLnN1YnRyYWN0KDEsICdtb250aCcpLnN0YXJ0T2YoJ21vbnRoJyksIG1vbWVudCgpLnN1YnRyYWN0KDEsICdtb250aCcpLmVuZE9mKCdtb250aCcpXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgY2IpO1xyXG5cclxuICAgICAgICBjYihzdGFydCwgZW5kLCAnJyk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGRhdGF0YWJsZUxhdGVzdE9yZGVycyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmICgkKCcjbV9kYXRhdGFibGVfbGF0ZXN0X29yZGVycycpLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgZGF0YXRhYmxlID0gJCgnLm1fZGF0YXRhYmxlJykubURhdGF0YWJsZSh7XHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdyZW1vdGUnLFxyXG4gICAgICAgICAgICAgICAgc291cmNlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVhZDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL2tlZW50aGVtZXMuY29tL21ldHJvbmljL3ByZXZpZXcvaW5jL2FwaS9kYXRhdGFibGVzL2RlbW9zL2RlZmF1bHQucGhwJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBwYWdlU2l6ZTogMjAsXHJcbiAgICAgICAgICAgICAgICBzYXZlU3RhdGU6IHtcclxuICAgICAgICAgICAgICAgICAgICBjb29raWU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgd2Vic3RvcmFnZTogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHNlcnZlclBhZ2luZzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHNlcnZlckZpbHRlcmluZzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHNlcnZlclNvcnRpbmc6IHRydWVcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIGxheW91dDoge1xyXG4gICAgICAgICAgICAgICAgdGhlbWU6ICdkZWZhdWx0JyxcclxuICAgICAgICAgICAgICAgIGNsYXNzOiAnJyxcclxuICAgICAgICAgICAgICAgIHNjcm9sbDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMzgwLFxyXG4gICAgICAgICAgICAgICAgZm9vdGVyOiBmYWxzZVxyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgc29ydGFibGU6IHRydWUsXHJcblxyXG4gICAgICAgICAgICBmaWx0ZXJhYmxlOiBmYWxzZSxcclxuXHJcbiAgICAgICAgICAgIHBhZ2luYXRpb246IHRydWUsXHJcblxyXG4gICAgICAgICAgICBjb2x1bW5zOiBbe1xyXG4gICAgICAgICAgICAgICAgZmllbGQ6IFwiUmVjb3JkSURcIixcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIiNcIixcclxuICAgICAgICAgICAgICAgIHNvcnRhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA0MCxcclxuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M6ICdtLWNoZWNrYm94LS1zb2xpZCBtLWNoZWNrYm94LS1icmFuZCdcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkOiBcIk9yZGVySURcIixcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIk9yZGVyIElEXCIsXHJcbiAgICAgICAgICAgICAgICBzb3J0YWJsZTogJ2FzYycsXHJcbiAgICAgICAgICAgICAgICBmaWx0ZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxNTAsXHJcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogJ3t7T3JkZXJJRH19IC0ge3tTaGlwQ291bnRyeX19J1xyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZDogXCJTaGlwTmFtZVwiLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiU2hpcCBOYW1lXCIsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTUwLFxyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2l2ZToge1xyXG4gICAgICAgICAgICAgICAgICAgIHZpc2libGU6ICdsZydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgZmllbGQ6IFwiU2hpcERhdGVcIixcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIlNoaXAgRGF0ZVwiXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkOiBcIlN0YXR1c1wiLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiU3RhdHVzXCIsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwLFxyXG4gICAgICAgICAgICAgICAgLy8gY2FsbGJhY2sgZnVuY3Rpb24gc3VwcG9ydCBmb3IgY29sdW1uIHJlbmRlcmluZ1xyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGU6IGZ1bmN0aW9uKHJvdykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBzdGF0dXMgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0aXRsZSc6ICdQZW5kaW5nJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICdtLWJhZGdlLS1icmFuZCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgMjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RpdGxlJzogJ0RlbGl2ZXJlZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAnIG0tYmFkZ2UtLW1ldGFsJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGl0bGUnOiAnQ2FuY2VsZWQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJyBtLWJhZGdlLS1wcmltYXJ5J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGl0bGUnOiAnU3VjY2VzcycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAnIG0tYmFkZ2UtLXN1Y2Nlc3MnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0aXRsZSc6ICdJbmZvJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICcgbS1iYWRnZS0taW5mbydcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgNjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RpdGxlJzogJ0RhbmdlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAnIG0tYmFkZ2UtLWRhbmdlcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgNzoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RpdGxlJzogJ1dhcm5pbmcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJyBtLWJhZGdlLS13YXJuaW5nJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJzxzcGFuIGNsYXNzPVwibS1iYWRnZSAnICsgc3RhdHVzW3Jvdy5TdGF0dXNdLmNsYXNzICsgJyBtLWJhZGdlLS13aWRlXCI+JyArIHN0YXR1c1tyb3cuU3RhdHVzXS50aXRsZSArICc8L3NwYW4+JztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgZmllbGQ6IFwiVHlwZVwiLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiVHlwZVwiLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCxcclxuICAgICAgICAgICAgICAgIC8vIGNhbGxiYWNrIGZ1bmN0aW9uIHN1cHBvcnQgZm9yIGNvbHVtbiByZW5kZXJpbmdcclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlOiBmdW5jdGlvbihyb3cpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgc3RhdHVzID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAxOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGl0bGUnOiAnT25saW5lJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdzdGF0ZSc6ICdkYW5nZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0aXRsZSc6ICdSZXRhaWwnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3N0YXRlJzogJ3ByaW1hcnknXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0aXRsZSc6ICdEaXJlY3QnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3N0YXRlJzogJ2FjY2VudCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICc8c3BhbiBjbGFzcz1cIm0tYmFkZ2UgbS1iYWRnZS0tJyArIHN0YXR1c1tyb3cuVHlwZV0uc3RhdGUgKyAnIG0tYmFkZ2UtLWRvdFwiPjwvc3Bhbj4mbmJzcDs8c3BhbiBjbGFzcz1cIm0tLWZvbnQtYm9sZCBtLS1mb250LScgKyBzdGF0dXNbcm93LlR5cGVdLnN0YXRlICsgJ1wiPicgKyBzdGF0dXNbcm93LlR5cGVdLnRpdGxlICsgJzwvc3Bhbj4nO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZDogXCJBY3Rpb25zXCIsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTEwLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiQWN0aW9uc1wiLFxyXG4gICAgICAgICAgICAgICAgc29ydGFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6ICd2aXNpYmxlJyxcclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlOiBmdW5jdGlvbihyb3cpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZHJvcHVwID0gKHJvdy5nZXREYXRhdGFibGUoKS5nZXRQYWdlU2l6ZSgpIC0gcm93LmdldEluZGV4KCkpIDw9IDQgPyAnZHJvcHVwJyA6ICcnO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ1xcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93biAnICsgZHJvcHVwICsgJ1wiPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwiYnRuIG0tYnRuIG0tYnRuLS1ob3Zlci1hY2NlbnQgbS1idG4tLWljb24gbS1idG4tLWljb24tb25seSBtLWJ0bi0tcGlsbFwiIGRhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIj5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwibGEgbGEtZWxsaXBzaXMtaFwiPjwvaT5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZHJvcGRvd24tbWVudSBkcm9wZG93bi1tZW51LXJpZ2h0XCI+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwiI1wiPjxpIGNsYXNzPVwibGEgbGEtZWRpdFwiPjwvaT4gRWRpdCBEZXRhaWxzPC9hPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cIiNcIj48aSBjbGFzcz1cImxhIGxhLWxlYWZcIj48L2k+IFVwZGF0ZSBTdGF0dXM8L2E+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwiI1wiPjxpIGNsYXNzPVwibGEgbGEtcHJpbnRcIj48L2k+IEdlbmVyYXRlIFJlcG9ydDwvYT5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cIm0tcG9ydGxldF9fbmF2LWxpbmsgYnRuIG0tYnRuIG0tYnRuLS1ob3Zlci1hY2NlbnQgbS1idG4tLWljb24gbS1idG4tLWljb24tb25seSBtLWJ0bi0tcGlsbFwiIHRpdGxlPVwiRWRpdCBkZXRhaWxzXCI+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwibGEgbGEtZWRpdFwiPjwvaT5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cIm0tcG9ydGxldF9fbmF2LWxpbmsgYnRuIG0tYnRuIG0tYnRuLS1ob3Zlci1kYW5nZXIgbS1idG4tLWljb24gbS1idG4tLWljb24tb25seSBtLWJ0bi0tcGlsbFwiIHRpdGxlPVwiRGVsZXRlXCI+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwibGEgbGEtdHJhc2hcIj48L2k+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgJztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfV1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgY2FsZW5kYXJJbml0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKCQoJyNtX2NhbGVuZGFyJykubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgdmFyIHRvZGF5RGF0ZSA9IG1vbWVudCgpLnN0YXJ0T2YoJ2RheScpO1xyXG4gICAgICAgIHZhciBZTSA9IHRvZGF5RGF0ZS5mb3JtYXQoJ1lZWVktTU0nKTtcclxuICAgICAgICB2YXIgWUVTVEVSREFZID0gdG9kYXlEYXRlLmNsb25lKCkuc3VidHJhY3QoMSwgJ2RheScpLmZvcm1hdCgnWVlZWS1NTS1ERCcpO1xyXG4gICAgICAgIHZhciBUT0RBWSA9IHRvZGF5RGF0ZS5mb3JtYXQoJ1lZWVktTU0tREQnKTtcclxuICAgICAgICB2YXIgVE9NT1JST1cgPSB0b2RheURhdGUuY2xvbmUoKS5hZGQoMSwgJ2RheScpLmZvcm1hdCgnWVlZWS1NTS1ERCcpO1xyXG5cclxuICAgICAgICAkKCcjbV9jYWxlbmRhcicpLmZ1bGxDYWxlbmRhcih7XHJcbiAgICAgICAgICAgIGhlYWRlcjoge1xyXG4gICAgICAgICAgICAgICAgbGVmdDogJ3ByZXYsbmV4dCB0b2RheScsXHJcbiAgICAgICAgICAgICAgICBjZW50ZXI6ICd0aXRsZScsXHJcbiAgICAgICAgICAgICAgICByaWdodDogJ21vbnRoLGFnZW5kYVdlZWssYWdlbmRhRGF5LGxpc3RXZWVrJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlZGl0YWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgZXZlbnRMaW1pdDogdHJ1ZSwgLy8gYWxsb3cgXCJtb3JlXCIgbGluayB3aGVuIHRvbyBtYW55IGV2ZW50c1xyXG4gICAgICAgICAgICBuYXZMaW5rczogdHJ1ZSxcclxuICAgICAgICAgICAgZGVmYXVsdERhdGU6IG1vbWVudCgnMjAxNy0wOS0xNScpLFxyXG4gICAgICAgICAgICBldmVudHM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ01lZXRpbmcnLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0OiBtb21lbnQoJzIwMTctMDgtMjgnKSxcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBpbmNpZCBpZHVudCB1dCcsXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBcIm0tZmMtZXZlbnQtLWxpZ2h0IG0tZmMtZXZlbnQtLXNvbGlkLXdhcm5pbmdcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ0NvbmZlcmVuY2UnLCAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdMb3JlbSBpcHN1bSBkb2xvciBpbmNpZCBpZHVudCB1dCBsYWJvcmUnLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0OiBtb21lbnQoJzIwMTctMDgtMjlUMTM6MzA6MDAnKSxcclxuICAgICAgICAgICAgICAgICAgICBlbmQ6IG1vbWVudCgnMjAxNy0wOC0yOVQxNzozMDowMCcpLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogXCJtLWZjLWV2ZW50LS1hY2NlbnRcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ0Rpbm5lcicsXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IG1vbWVudCgnMjAxNy0wOC0zMCcpLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IHRlbXBvciBpbmNpZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBcIm0tZmMtZXZlbnQtLWxpZ2h0ICBtLWZjLWV2ZW50LS1zb2xpZC1kYW5nZXJcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ0FsbCBEYXkgRXZlbnQnLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0OiBtb21lbnQoJzIwMTctMDktMDEnKSxcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBpbmNpZCBpZHVudCB1dCcsXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBcIm0tZmMtZXZlbnQtLWRhbmdlciBtLWZjLWV2ZW50LS1zb2xpZC1mb2N1c1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnUmVwb3J0aW5nJywgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnTG9yZW0gaXBzdW0gZG9sb3IgaW5jaWQgaWR1bnQgdXQgbGFib3JlJyxcclxuICAgICAgICAgICAgICAgICAgICBzdGFydDogbW9tZW50KCcyMDE3LTA5LTAzVDEzOjMwOjAwJyksXHJcbiAgICAgICAgICAgICAgICAgICAgZW5kOiBtb21lbnQoJzIwMTctMDktMDRUMTc6MzA6MDAnKSxcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IFwibS1mYy1ldmVudC0tYWNjZW50XCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdDb21wYW55IFRyaXAnLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0OiBtb21lbnQoJzIwMTctMDktMDUnKSxcclxuICAgICAgICAgICAgICAgICAgICBlbmQ6IG1vbWVudCgnMjAxNy0wOS0wNycpLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IHRlbXBvciBpbmNpZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBcIm0tZmMtZXZlbnQtLXByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ0lDVCBFeHBvIDIwMTcgLSBQcm9kdWN0IFJlbGVhc2UnLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0OiBtb21lbnQoJzIwMTctMDktMDknKSxcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCB0ZW1wb3IgaW5jaScsXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBcIm0tZmMtZXZlbnQtLWxpZ2h0IG0tZmMtZXZlbnQtLXNvbGlkLXByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ0Rpbm5lcicsXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IG1vbWVudCgnMjAxNy0wOS0xMicpLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlIGN0ZXR1cidcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IDk5OSxcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ1JlcGVhdGluZyBFdmVudCcsXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IG1vbWVudCgnMjAxNy0wOS0xNVQxNjowMDowMCcpLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IG5jaWRpZHVudCB1dCBsYWJvcmUnLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogXCJtLWZjLWV2ZW50LS1kYW5nZXJcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogMTAwMCxcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ1JlcGVhdGluZyBFdmVudCcsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgbGFib3JlJyxcclxuICAgICAgICAgICAgICAgICAgICBzdGFydDogbW9tZW50KCcyMDE3LTA5LTE4VDE5OjAwOjAwJyksXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnQ29uZmVyZW5jZScsXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IG1vbWVudCgnMjAxNy0wOS0yMFQxMzowMDowMCcpLFxyXG4gICAgICAgICAgICAgICAgICAgIGVuZDogbW9tZW50KCcyMDE3LTA5LTIxVDE5OjAwOjAwJyksXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdMb3JlbSBpcHN1bSBkb2xvciBlaXVzIG1vZCB0ZW1wb3IgbGFib3JlJyxcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IFwibS1mYy1ldmVudC0tYWNjZW50XCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdNZWV0aW5nJyxcclxuICAgICAgICAgICAgICAgICAgICBzdGFydDogbW9tZW50KCcyMDE3LTA5LTExJyksXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdMb3JlbSBpcHN1bSBkb2xvciBlaXUgaWR1bnQgdXQgbGFib3JlJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ0x1bmNoJyxcclxuICAgICAgICAgICAgICAgICAgICBzdGFydDogbW9tZW50KCcyMDE3LTA5LTE4JyksXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBcIm0tZmMtZXZlbnQtLWluZm8gbS1mYy1ldmVudC0tc29saWQtYWNjZW50XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgdXQgbGFib3JlJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ01lZXRpbmcnLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0OiBtb21lbnQoJzIwMTctMDktMjQnKSxcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IFwibS1mYy1ldmVudC0td2FybmluZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnTG9yZW0gaXBzdW0gY29uc2UgY3RldHVyIGFkaXBpIHNjaW5nJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ0hhcHB5IEhvdXInLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0OiBtb21lbnQoJzIwMTctMDktMjQnKSxcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IFwibS1mYy1ldmVudC0tbGlnaHQgbS1mYy1ldmVudC0tc29saWQtZm9jdXNcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZSBjdGV0dXInXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnRGlubmVyJyxcclxuICAgICAgICAgICAgICAgICAgICBzdGFydDogbW9tZW50KCcyMDE3LTA5LTI0JyksXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBcIm0tZmMtZXZlbnQtLXNvbGlkLWZvY3VzIG0tZmMtZXZlbnQtLWxpZ2h0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgY3RldHVyIGFkaXBpIHNjaW5nJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ0JpcnRoZGF5IFBhcnR5JyxcclxuICAgICAgICAgICAgICAgICAgICBzdGFydDogbW9tZW50KCcyMDE3LTA5LTI0JyksXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBcIm0tZmMtZXZlbnQtLXByaW1hcnlcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBzY2luZydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdDb21wYW55IEV2ZW50JyxcclxuICAgICAgICAgICAgICAgICAgICBzdGFydDogbW9tZW50KCcyMDE3LTA5LTI0JyksXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBcIm0tZmMtZXZlbnQtLWRhbmdlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIHNjaW5nJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ0NsaWNrIGZvciBHb29nbGUnLFxyXG4gICAgICAgICAgICAgICAgICAgIHVybDogJ2h0dHA6Ly9nb29nbGUuY29tLycsXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IG1vbWVudCgnMjAxNy0wOS0yNicpLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogXCJtLWZjLWV2ZW50LS1zb2xpZC1pbmZvIG0tZmMtZXZlbnQtLWxpZ2h0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgbGFib3JlJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG5cclxuICAgICAgICAgICAgZXZlbnRSZW5kZXI6IGZ1bmN0aW9uKGV2ZW50LCBlbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5oYXNDbGFzcygnZmMtZGF5LWdyaWQtZXZlbnQnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuZGF0YSgnY29udGVudCcsIGV2ZW50LmRlc2NyaXB0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmRhdGEoJ3BsYWNlbWVudCcsICd0b3AnKTtcclxuICAgICAgICAgICAgICAgICAgICBtQXBwLmluaXRQb3BvdmVyKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChlbGVtZW50Lmhhc0NsYXNzKCdmYy10aW1lLWdyaWQtZXZlbnQnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuZmluZCgnLmZjLXRpdGxlJykuYXBwZW5kKCc8ZGl2IGNsYXNzPVwiZmMtZGVzY3JpcHRpb25cIj4nICsgZXZlbnQuZGVzY3JpcHRpb24gKyAnPC9kaXY+Jyk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGVsZW1lbnQuZmluZCgnLmZjLWxpc3QtaXRlbS10aXRsZScpLmxlbmdodCAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuZmluZCgnLmZjLWxpc3QtaXRlbS10aXRsZScpLmFwcGVuZCgnPGRpdiBjbGFzcz1cImZjLWRlc2NyaXB0aW9uXCI+JyArIGV2ZW50LmRlc2NyaXB0aW9uICsgJzwvZGl2PicpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICAvLz09IEluaXQgZGVtb3NcclxuICAgICAgICBpbml0OiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgLy8gaW5pdCBjaGFydHNcclxuICAgICAgICAgICAgZGFpbHlTYWxlcygpO1xyXG4gICAgICAgICAgICBwcm9maXRTaGFyZSgpO1xyXG4gICAgICAgICAgICBzYWxlc1N0YXRzKCk7XHJcbiAgICAgICAgICAgIHNhbGVzQnlBcHBzKCk7XHJcbiAgICAgICAgICAgIGxhdGVzdFVwZGF0ZXMoKTtcclxuICAgICAgICAgICAgdHJlbmRzU3RhdHMoKTtcclxuICAgICAgICAgICAgdHJlbmRzU3RhdHMyKCk7XHJcbiAgICAgICAgICAgIGxhdGVzdFRyZW5kc01hcCgpO1xyXG4gICAgICAgICAgICByZXZlbnVlQ2hhbmdlKCk7XHJcbiAgICAgICAgICAgIHN1cHBvcnRUaWNrZXRzKCk7XHJcbiAgICAgICAgICAgIHN1cHBvcnRUaWNrZXRzMigpO1xyXG4gICAgICAgICAgICBhY3Rpdml0aWVzQ2hhcnQoKTtcclxuICAgICAgICAgICAgYmFuZHdpZHRoQ2hhcnQxKCk7XHJcbiAgICAgICAgICAgIGJhbmR3aWR0aENoYXJ0MigpO1xyXG4gICAgICAgICAgICBhZFdvcmRzU3RhdCgpO1xyXG4gICAgICAgICAgICBmaW5hbmNlU3VtbWFyeSgpO1xyXG4gICAgICAgICAgICBxdWlja1N0YXRzKCk7XHJcblxyXG4gICAgICAgICAgICAvLyBpbml0IGRhdGVyYW5nZXBpY2tlclxyXG4gICAgICAgICAgICBkYXRlcmFuZ2VwaWNrZXJJbml0KCk7XHJcblxyXG4gICAgICAgICAgICAvLyBkYXRhdGFibGVzXHJcbiAgICAgICAgICAgIGRhdGF0YWJsZUxhdGVzdE9yZGVycygpO1xyXG5cclxuICAgICAgICAgICAgLy8gY2FsZW5kYXJcclxuICAgICAgICAgICAgY2FsZW5kYXJJbml0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufSgpO1xyXG5cclxuLy89PSBDbGFzcyBpbml0aWFsaXphdGlvbiBvbiBwYWdlIGxvYWRcclxualF1ZXJ5KGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuICAgIERhc2hib2FyZC5pbml0KCk7XHJcbn0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9hcHAvanMvZGFzaGJvYXJkLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==