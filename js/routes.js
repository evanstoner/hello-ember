App.ServersRoute = Em.Route.extend({
  model: function() {
    return App.Server.find();
  }
});


App.ServersServerRoute = Em.Route.extend({
  model: function(params) {
    return App.Server.find(params.server_id);
  }
});