App = Ember.Application.create({
  LOG_TRANSITIONS: true
});


App.Adapter = DS.RESTAdapter.extend({
  url: "http://192.168.56.2:8080",
  serializer: DS.RESTSerializer.extend({
    primaryKey: function(type) {
      return "_id";
    }
  })
});

App.Store = DS.Store.extend({
  adapter: App.Adapter
});