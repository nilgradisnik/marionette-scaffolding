define([
  'vm',
  'text!template/layout.html'
], function(Vm, layoutTemplate) {

 var appView = Backbone.View.extend({

    initialize: function() {
      this.render();
    },
    render: function() {
      var _this = this;

      this.$el.html(layoutTemplate);

      require(['view/header/header'], function(HeaderView) {
        var headerView = Vm.create(_this, 'HeaderView', HeaderView, {el: '.header'});
        headerView.render();
      });
    }
  });

 return appView;
});
