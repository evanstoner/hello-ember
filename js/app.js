App = Ember.Application.create();


App.Store = DS.Store.extend({
  adapter: DS.FixtureAdapter.create()
});


App.Router.map(function() {
  this.resource("servers", function() {
    this.route("new");
    this.route("server", {path: "/:server_id"});
  });
});