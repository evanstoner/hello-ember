App.Router.map(function() {
  this.resource("servers", function() {
    this.route("manage", {path: "/"});
    this.route("new");
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


App.ServersManageRoute = Em.Route.extend({
  model: function() {
    return App.Server.find();
  }
});


App.ServerRoute = Em.Route.extend({
  setupController: function(controller, model) {
    controller.set("model", model);
    // set the model for the child routes; this is not automatic, since the dynamic segment is not
    // part of the path associated with the child routes
    this.controllerFor("serverIndex").set("model", model);
    this.controllerFor("serverEdit").set("model", model);
    this.controllerFor("serverDelete").set("model", model);
  }
});


App.ServerEditRoute = Em.Route.extend({
  deactivate: function() {
    // rollback transactions when the user navigates away; this is ok even if we navigate away after
    // committing some changes, since there will just be no transaction to rollback
    var model = this.modelFor("server");
    if (!model.get("isSaving")) {
      model.get("transaction").rollback();
    }
  }
})