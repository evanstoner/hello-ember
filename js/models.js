App.Server = DS.Model.extend({
  name: DS.attr("string"),
  ip: DS.attr("string"),
  hostname: DS.attr("string")
});