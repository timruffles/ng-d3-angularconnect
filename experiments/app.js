angular.module("demo", [])
.controller("DemoCtrl", DemoCtrl);

main();

function main() {

  var data = [
    {
      name: "one",
    },
    {
      name: "two",
    },
  ];

  var PADDING = 10;
  var r = innerWidth / data.length / 2 - PADDING;

  var scales = {
    fill: d3.scale.category20b(),
  }

  var enter = d3.select("body")
  .append("svg")
  .attr({
    width: innerWidth,
    height: innerHeight,
  })
  .selectAll(".demo")
  .data(data)
  .enter()

  enter
  .append("circle")
  .attr("r", r)
  .attr("cx", getX)
  .attr("cy", r)
  .attr("fill", function(d, i) {
    return scales.fill(i);
  })

  enter
  .append("foreignObject")
  .attr({
    width: r,
    height: r,
  })
  .attr("x", function(d, i) {
    return r/2 + i * 2 * (r + PADDING);
  })
  .attr("y", r/2)
  .append("xhtml:body")
  .angularise({
    templateUrl: "/template.html",
    modules: ["demo"],
  })

  function getX(d, i) {
    return r + (i * 2 * (r + PADDING)); 
  }
}

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
