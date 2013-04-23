/**
 * marionette-scaffolding
 *
 * @author Nil Gradisnik <nil.gradisnik@gmail.com>
 * https://github.com/nilgradisnik/marionette-scaffolding
 */
require.config({

  paths: {

    // jQuery
    jquery: '../lib/jquery/jquery',

    // Backbone & Underscore
    // AMD enabled: https://github.com/amdjs
    underscore: '../lib/underscore/underscore',
    backbone: '../lib/backbone/backbone',

    // Marionette 
    // https://github.com/marionettejs/backbone.marionette
    marionette : '../lib/backbone/backbone.marionette',
    'backbone.wreqr' : '../lib/backbone/backbone.wreqr',
    'backbone.babysitter' : '../lib/backbone/backbone.babysitter',

    // Handlebars templating plugin
    // https://github.com/SlexAxton/require-handlebars-plugin
    hbs: '../lib/handlebars/hbs', // use 'hbs!' prefix to render handlebars templates
    handlebars: '../lib/handlebars/handlebars',
    i18nprecompile : "../lib/handlebars/i18nprecompile",
    json2 : "../lib/handlebars/json2",

    // templates location
    template: '../template'
  },

  // hbs config
  hbs: {

    disableI18n: true, // localization file is read from 'app/template/i18n'
    disableHelpers: true // handlebars helper files are read from 'app/template/helpers'

    //templateExtension: "html" // default is hbs
  }
});

// kick off the app
require(['app'], function(App) {

  App.start();
});