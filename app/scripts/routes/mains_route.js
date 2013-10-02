Sheet.MainsRoute = Ember.Route.extend({
  model: function() {
    return Sheet.Main.find();
  }
});

