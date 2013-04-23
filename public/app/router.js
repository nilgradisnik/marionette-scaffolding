define([
  'marionette'
], function (Marionette) {

  return Marionette.AppRouter.extend({

    appRoutes: {
      "settings" : "settings",

      "*actions" : "index"
    }
  });
});
