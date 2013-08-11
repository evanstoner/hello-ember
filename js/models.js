App.Server = DS.Model.extend({
  name: DS.attr("string"),
  ip: DS.attr("string"),
  hostname: DS.attr("string")
});


App.Server.FIXTURES = [
  { id: 1, name: "Server 1", ip: "10.10.1.101", hostname: "server01" },
  { id: 2, name: "Server 2", ip: "10.10.1.102", hostname: "server02" },
  { id: 3, name: "Server 3", ip: "10.10.1.103", hostname: "server03" }
];