define([
  'marionette',
  'app',

  'view/header/header',
  'view/index/index',
  'view/settings/settings'
], function (Marionette, App, HeaderView, IndexView, SettingsView) {

  return Marionette.Controller.extend({

    initialize: function() {
      App.layout.header.show(new HeaderView());
    },

    index: function() {
      App.layout.content.show(new IndexView());
    },
    settings: function() {
      App.layout.content.show(new SettingsView());
    }
  });
});
