let Encore = require('@symfony/webpack-encore');
const CopyWebpackPlugin = require('copy-webpack-plugin');

Encore
    .setOutputPath('public/build/')
    .setPublicPath('/build/')
    .cleanupOutputBeforeBuild()
    .enableBuildNotifications()
    // css entry
    .addStyleEntry('css/style.bundle', './assets/apps/layout/base/style.bundle.css')
    .addStyleEntry('css/vendors.bundle', './assets/vendors/base/vendors.bundle.css')
    .addEntry('js/layout.bundle', './assets/src/js/apps/layout/base/layout.js')
    .addEntry('js/dashboard.bundle', './assets/app/js/dashboard.js')
    .addEntry('js/login.bundle', './assets/snippets/pages/user/login.js')
    //.addEntry('js/vendors.bundle', './assets/vendors/base/vendors.bundle.js')
    //.addEntry('js/dashboard', './assets/js/app/dashboard.js')
    //.enableSassLoader()
    //.enableLessLoader()
    // allows legacy applications to use $/jQuery as a global variable
    //.autoProvideVariables()
    .enableSourceMaps(!Encore.isProduction())
    .enableSourceMaps(true)
    .enableVersioning(Encore.isProduction())
    .addPlugin(new CopyWebpackPlugin([
        { from: './assets/static', to: 'static' }
    ]))
;
module.exports = Encore.getWebpackConfig();