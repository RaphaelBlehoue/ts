let Encore = require('@symfony/webpack-encore');
const CopyWebpackPlugin = require('copy-webpack-plugin');

Encore
    .setOutputPath('public/build/dash')
    .setPublicPath('/build/dash')
    .cleanupOutputBeforeBuild()
    .enableBuildNotifications()
    // css entry
    .addStyleEntry('css/app.bundle','./assets/css/app.css')
    .addEntry('js/app.bundle','./assets/js/app.js')
    .enableSassLoader()
    //.enableLessLoader()
    // allows legacy applications to use $/jQuery as a global variable
    // .autoProvidejQuery()
    .enableSourceMaps(!Encore.isProduction())
    .enableSourceMaps(true)
    .enableVersioning(Encore.isProduction())
    .addPlugin(new CopyWebpackPlugin([
        { from: './assets/static', to: 'static' }
    ]))
;

const dashConfig = Encore.getWebpackConfig();
dashConfig.name = 'dashConfig';

Encore.reset();

Encore
    .setOutputPath('public/build/dash2')
    .setPublicPath('/build/dash2')
    .cleanupOutputBeforeBuild()
    .enableBuildNotifications()
    .addEntry('js/app.bundle', './assets/dash2/js/app.js')
    //.enableSassLoader()
    .enableSourceMaps(!Encore.isProduction())
    .enableSourceMaps(true)
    .enableVersioning(Encore.isProduction())
    .addPlugin(new CopyWebpackPlugin([
        { from: './assets/dash2/static', to: 'static' }
    ]))
;
const dash2Config = Encore.getWebpackConfig();
dash2Config.name = 'dash2Config';

Encore.reset();

module.exports = [dashConfig, dash2Config];