define([
  'marionette',

  'hbs!template/header/header'
], function(Marionette, header) {

  return Marionette.ItemView.extend({
    template: header
  });
});
