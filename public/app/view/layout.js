define([
  'marionette',

  'hbs!template/layout'
], function (Marionette, layout) {

  return Marionette.Layout.extend({
    template: layout,

    regions: {
      header: "#header",
      content: "#content"
    }
  });
});