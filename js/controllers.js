App.ServersController = Em.ArrayController.extend({

});


App.ServersIndexController = Em.ArrayController.extend({
  selectedCount: function() {
    var selected = this.filterProperty("isSelected");
    if (selected.get("length") === this.get("length")) {
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
    var model = this.get("model");
    model.get("store").commit();
    this.transitionToRoute("server", model);
  }
  
  // reverts are handled by ServerEditRoute.deactivate
});


App.ServerDeleteController = Em.ObjectController.extend({
  needs: ["server"],
  
  delete: function() {
    var model = this.get("model");
    model.deleteRecord();
    model.get("store").commit();
    this.transitionToRoute("servers");
  }
});