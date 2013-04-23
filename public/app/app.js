define([
  'backbone',
  'marionette',

  'router',
  'view/layout'
], function (Backbone, Marionette, Router, Layout) {

  var App = new Marionette.Application();

  App.addRegions({
    mainRegion: "#main"
  });

  App.addInitializer(function(options) {

    require(['controller'], function(Controller) {
      
      App.appRouter = new Router({
        controller: new Controller()
      });

      Backbone.history.start();
    });

    App.layout = new Layout();
    App.mainRegion.show(App.layout);
  });

  return App;
});