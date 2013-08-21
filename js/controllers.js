App.ServersController = Em.ArrayController.extend({
  multiEditCount: function() {
    var dirty = this.filterProperty("isDirty");
    var dirtyCount = dirty.get("length");
    if (dirtyCount > 1) {
      return dirtyCount;
    } else {
      return 0;
    }
  }.property("@each.isDirty")
});


App.ServersManageController = Em.ArrayController.extend({
  selectedCount: function() {
    var selected = this.filterProperty("isSelected");
    return selected.get("length");
  }.property("@each.isSelected")
});


App.ServersNewController = Em.Controller.extend({
  name: "",
  ip: "",
  hostname: "",
  
  create: function() {
    //TODO: validation
    App.Server.createRecord({
      name: this.get("name"),
      ip: this.get("ip"),
      hostname: this.get("hostname")
    });
    
    this.get("store").commit();
    this.clear();
    this.transitionToRoute("servers.manage");
  },
  
  clear: function() {
    this.set("name", "");
    this.set("ip", "");
    this.set("hostname", "");
  }
});


App.ServerIndexController = Em.ObjectController.extend({
  // an empty controlle is required in order to use this.controllerFor("serverIndex") in
  // ServerRoute.setupController()
});


App.ServerEditController = Em.ObjectController.extend({
  save: function() {
    var model = this.get("model");
    model.get("store").commit();
    this.transitionToRoute("server", model);
  }
  
  // reverts are handled by ServerEditRoute.deactivate
});


App.ServerDeleteController = Em.ObjectController.extend({
  delete: function() {
    var model = this.get("model");
    model.deleteRecord();
    model.get("store").commit();
    this.transitionToRoute("servers.manage");
  }
});