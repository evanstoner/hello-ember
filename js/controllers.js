App.SelectableArrayController = Em.ArrayController.extend({
  selected: function() {
    return this.filterProperty("isSelected");
  }.property("@each.isSelected"),
  
  selectedCount: function() {
    var selected = this.get("selected");
    if (selected.get("length") === this.get("length") && this.get("length") !== 0) {
      return "all";
    } else {
      return selected.get("length");
    }
  }.property("@each.isSelected"),
  
  allSelected: function(key, value) {
    if (arguments.length === 1) {
      // getter
      return this.everyProperty("isSelected");
    } else {
      // setter
      this.setEach("isSelected", value);
    }
  }.property("@each.isSelected")
});


App.ServersController = Em.ArrayController.extend({

});


App.ServersIndexController = App.SelectableArrayController.extend({

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
    this.transitionToRoute("servers");
  },
  
  clear: function() {
    this.set("name", "");
    this.set("ip", "");
    this.set("hostname", "");
  }
});


App.ServersDeleteController = Em.Controller.extend({
  needs: ["servers"],
  
  selected: function() {
    return this.get("controllers.servers").filterProperty("isSelected");
  }.property("controllers.servers.@each.isSelected")
});


App.ServerIndexController = Em.ObjectController.extend({
  needs: ["server"]
});


App.ServerEditController = Em.ObjectController.extend({
  needs: ["server"],
  
  save: function() {
    var server = this.get("controllers.server.model");
    server.get("store").commit();
    this.transitionToRoute("server", server);
  }
  
  // reverts are handled by ServerEditRoute.deactivate
});


App.ServerDeleteController = Em.ObjectController.extend({
  needs: ["server"],
  
  delete: function() {
    var server = this.get("controllers.server.model");
    server.deleteRecord();
    server.get("store").commit();
    this.transitionToRoute("servers");
  }
});