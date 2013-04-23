define([
  'backbone'
], function(Backbone) {

  var User = Backbone.Model.extend({
    url: '/users'
  });

  return User;
});