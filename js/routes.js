App.Router.map(function() {
  this.resource("servers", function() {
    this.route("new");
    this.route("delete");
    this.resource("server", {path: "/:server_id"}, function() {
      this.route("edit");
      this.route("delete");
    });
  });
});
  
  
App.FailureRoute = Em.Route.extend({});
  

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


App.ServersDeleteRoute = Em.Route.extend({
//  model: function() {
//    return App.Server.find({isSelected: true});
//  }
});


App.ServerRoute = Em.Route.extend({
  // model set automatically via dynamic segment; child routes can use `needs` to get model
});


App.ServerEditRoute = Em.Route.extend({
  deactivate: function() {
    // rollback transactions when the user navigates away; this is ok even if we navigate away after
    // committing some changes, since there will just be no transaction to rollback
    var model = this.modelFor("server"); // server refers to ServerRoute
    if (!model.get("isSaving")) {
      model.get("transaction").rollback();
    }
  }
})