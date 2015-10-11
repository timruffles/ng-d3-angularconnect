angular.module("demo", [])
.controller("DemoCtrl", DemoCtrl);

d3.selectAll(".demo")
.data([
  {
    name: "one",
  },
  {
    name: "two",
  },
])
.enter()
.append("div")
.angularise({
  templateUrl: "/template.html",
  modules: ["demo"],
})

function DemoCtrl(
  $data
) {
  this.name = $data.name; 
}
