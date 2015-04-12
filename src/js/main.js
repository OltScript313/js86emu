/**
 * Main application module loader
 *
 * @author Chad Rempp <crempp@gmail.com>
 */

require.config({
    baseUrl: "build/js",
    paths: {
        'jquery'      : '../lib/jquery-1.11.0',
        'backbone'    : '../lib/backbone-1.1.2',
        'underscore'  : '../lib/underscore-1.6.0',
        'es6-promise' : '../lib/es6-promise-2.0.1'
    },
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: ["underscore", "jquery"],
            exports: "Backbone"
        }
    }
});

//the "main" function to bootstrap your code
require([
    'jquery',
    'underscore',
    'backbone',
    'gui/gui'],
function (
    $,
    _,
    Backbone,
    GUI)
{
    // Polyfill the ES6 promise
    requirejs(['es6-promise'], function (es6_promise) {
        es6_promise.polyfill();
        GUI.init();
    });
});