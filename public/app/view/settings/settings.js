define([
  'marionette',

  'hbs!template/settings/settings'
], function(Marionette, settingsTemplate) {

  return Marionette.ItemView.extend({
    template: settingsTemplate
  });
});