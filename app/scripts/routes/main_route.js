Sheet.MainRoute = Ember.Route.extend({
  model: function(model) {
    return Sheet.Main.find(model.main_id);
  }
});

