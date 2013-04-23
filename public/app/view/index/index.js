define([
  'marionette',

  'hbs!template/index/index'
], function(Marionette, index) {

  return Marionette.ItemView.extend({
    template: index
  });
});
