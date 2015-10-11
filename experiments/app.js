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
  , $scope
) {
  var self = this;

  this.name = $data.name;
  this.lastDigest;
  this.totalDigests = 0;

  $scope.$watch(function() {
    setTimeout(function() {
      self.lastDigest = Date.now();
      self.totalDigests += 1;
    });
  })

}
