requirejs.config({

    baseUrl: 'js',
    paths: {
        jquery: 'http://cdn.bootcss.com/zepto/1.1.3/zepto',
        //jquery: 'http://cdn.bootcss.com/jquery/2.1.0/jquery',
        underscore: 'http://cdn.bootcss.com/underscore.js/1.6.0/underscore',
        backbone: 'http://cdn.bootcss.com/backbone.js/1.1.2/backbone',
        text: 'http://cdn.bootcss.com/require-text/2.0.10/text',

        template: '../template'
    },
    //Remember: only use shim config for non-AMD scripts,
    //scripts that do not already call define(). The shim
    //config will not work correctly if used on AMD scripts,
    //in particular, the exports and init config will not
    //be triggered, and the deps config will be confusing
    //for those cases.
    shim: {
        'jquery': {
          exports: '$'
        },

        'underscore': {
            exports: '_'
        }
    }
});


require(['mainRouter'],function (Router) {
    // body...
    var router = new Router();

})