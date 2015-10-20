(function() {
/**
 * demo using d3, d3.angularise()
 */
angular.module("demo", [])
.controller("DemoCtrl", DemoCtrl)
.directive("integerValue", function() {
  return {
    require: "ngModel",
    link: function(scope, el, attrs, ngModel) {
      ngModel.$parsers.push(Math.round);
    },
  } 
})

window.resolutionDemo = main;

main.fromHook = function(realisationDemoEl, slideEl) {
  var bbox = slideEl.getBoundingClientRect();
  var w = bbox.width;
  var h = bbox.height;

  var hide = resolutionDemo(realisationDemoEl, {
    width: w,
    height: h,
  });

  return hide;
}

function main(el, opts) {

  var data = [
    {
      name: "one",
      risk: 0.1,
      reward: 0.2,
      value: 5,
    },
    {
      name: "two",
      risk: 0.3,
      reward: 0.5,
      value: 6,
    },
  ];


  var PADDING = 10;
  var w = opts.width - 50;
  var h = opts.height - 50;
  var r = w / data.length / 2 - PADDING;
  var constrainingDimension = Math.min(w,h);

  var scales = {
    fill: d3.scale.category20b(),
  }

  var root = d3.select(el)
  .attr({
    width: innerWidth,
    height: innerHeight,
  })

  xyPlot();

  return function cleanup() {
    root.html(""); 
  }

  function translate(x,y) {
    return "translate(" + x+ "," + y+ ")";
  }

  function handoverToEditor(selected) {
    root
    .selectAll(".point")
    .filter(function(d) {
      return d !== selected; 
    })
    .select("circle")
    .transition()
    .attr("r", 0)

    d3.select(this)
    .transition()
    .attr("transform", function() {
      return translate(w/2,h/2);
    })
    .select("circle")
    .attr("r", constrainingDimension/2 - 50)

    
    function editor() {
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
      .angularise(function(d, i) {
        return {
          locals: {
            $render: xyPlot,
          },
          templateUrl: "experiments/template.html",
          injector: "demo" + i,
          controller: DemoCtrl,
          controllerAs: "ctrl",
          modules: ["demo"],
        }
      })
    }
  }

  function xyPlot() {

    var padding = 25;
    var xScale = d3.scale.linear()
      .range([padding, innerWidth - padding])

    var yScale = d3.scale.linear()
      .range([padding, innerHeight - padding])

    var rScale = d3.scale.linear()
      .range([10, 50])
      .domain(d3.extent(data, _.property("value")))

    var update = root
    .selectAll("g")
    .data(data, function(d) {
      return d.name; 
    })

    var enter = update.enter()
    .append("g")
    .classed("point", true)
    .on("click", handoverToEditor)

    enter
    .append("circle")

    update
    .attr("transform", function(d, i) {
      return translate(xScale(d.risk), yScale(d.reward))
    })
    .select("circle")
    .attr("r", function(d) {
      return rScale(d.value)
    })
    .attr("fill", function(d, i) {
      return scales.fill(i);
    })

  }

}

function DemoCtrl(
  $data
  , $scope
  , $render
) {
  var self = this;

  this.name = $data.name;
  this.lastDigest;
  this.totalDigests = 0;
  
  this.data = $data;

  this.updated = function() {
    $render(); 
  }

  $scope.$watch(function() {
    setTimeout(function() {
      self.lastDigest = Date.now();
      self.totalDigests += 1;
    });
  })

}

})();
