App.Server = DS.Model.extend({
  name: DS.attr("string"),
  ip: DS.attr("string"),
  hostname: DS.attr("string")
});


App.Server.FIXTURES = [
  {
    id: 1,
    name: "Server 1",
    ip: "10.10.1.101",
    hostname: "vine01"
  },
  {
    id: 2,
    name: "Server 2",
    ip: "10.10.1.102",
    hostname: "vine02"
  }
]