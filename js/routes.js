App.Router.map(function() {
  this.resource("servers", function() {
    this.route("new");
    this.route("edit");
    this.route("delete");
    this.resource("server", {path: "/:server_id"}, function() {
      this.route("edit");
      this.route("delete");
    });
  });
});
  

App.ServersRoute = Em.Route.extend({
  model: function() {
    return App.Server.find();
  }
});


App.ServersIndexRoute = Em.Route.extend({
  model: function() {
    return App.Server.find();
  }
});


App.ServersEditRoute = Em.Route.extend({
  deactivate: function() {
    // rollback transactions when the user navigates away, if the transactions aren't being saved
    var model = this.modelFor("servers").get("firstObject"); // "servers" refers to ServersRoute
    if (!model.get("isSaving")) {
      // changes are stored in the default transaction, so all changes are rolled back, not just the
      // changes for the firstObject
      model.get("transaction").rollback();
    }    
  }
});


App.ServerRoute = Em.Route.extend({
  // model set automatically via dynamic segment; child routes can use `needs` to get model
});


App.ServerEditRoute = Em.Route.extend({
  deactivate: function() {
    // rollback transactions when the user navigates away, if the transactions aren't being saved
    var model = this.modelFor("server"); // "server" refers to ServerRoute
    if (!model.get("isSaving")) {
      model.get("transaction").rollback();
    }
  }
});