(function() {
/**
 * demo using d3, d3.angularise()
 */
angular.module("demo", [])
.controller("DemoCtrl", DemoCtrl)
.directive("integercost", function() {
  return {
    require: "ngModel",
    link: function(scope, el, attrs, ngModel) {
      ngModel.$parsers.push(Math.round);
    },
  } 
})
.directive("isRatio", function() {
  return {
    require: "ngModel",
    link: function(scope, el, attrs, ngModel) {
      ngModel.$render = function() {
        console.log(ngModel.$modelValue);
        
        el[0].value = ngModel.$modelValue * 100;
      }

      ngModel.$parsers.push(function(v) {
        return v/100; 
      });

      ngModel.$validators.isRatio = function(v) {
        return !isNaN(v) && v >= 0 && v <= 1;  
      }
    },
  } 
})
.filter("percent", function() {
  return function(v) {
    return (v * 100).toFixed(0) + "%";
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
      name: "A nice cup of tea",
      risk: 0.001,
      reward: 0.1,
      cost: 0.1,
    },
    {
      name: "Cliff jumping",
      risk: 0.2,
      reward: 0.5,
      cost: 50,
    },
    {
      name: "Mountain biking",
      risk: 0.8,
      reward: 0.6,
      cost: 200,
    },
    {
      name: "Gliding over erupting volcano",
      risk: 0.99999,
      reward: 0.9,
      cost: 1000,
    },
  ];


  var PADDING = 10;
  var w = opts.width - 100;
  var h = opts.height - 200;
  var r = w / data.length / 2 - PADDING;
  var constrainingDimension = Math.min(w,h);

  var scales = {
    fill: d3.scale.category20b(),
  }

  var root = d3.select(el)
  .attr({
    width: opts.width,
    height: h,
  })


  labels();
  xyPlot();

  return function cleanup() {
    root.html(""); 
  }

  function labels() {
    root.append("text")
     .text("Risk")
     .attr({
       x: w/2,
       y: h - 10,
       "font-size": "2rem",
     }) 

    root
     .append("g")
     .attr("transform", function() {
       return translate(25, h/2); 
     })
     .append("text")
     .attr({
       "font-size": "2rem",
       "text-anchor": "middle",
     }) 
     .style({
       "transform": "rotate(-90deg)"
     })
     .text("Reward")
  }

  function translate(x,y) {
    return "translate(" + x+ "," + y+ ")";
  }

  function handoverToEditor(selected) {
    var editorR = constrainingDimension/2 - 50;

    root
    .selectAll(".point")
    .filter(function(d) {
      if(d === selected) {
        return true;
      } else {
        // clean up editing
        d.previous = null;
        return false;
      }
    })
    .select("circle")
    .transition()
    .attr("r", 0)

    var editedPoint = this;

    // ensure lower layer
    $(this.parentElement).append(this);

    d3.select(editedPoint)
    .transition()
    .attr("transform", center)
    .select("circle")
    .attr("r", editorR)
    .each("end", function(d, i) {
      // selection of 1
      editor();
    })

    function center() {
      return translate(w/2,h/2);
    }

    function render() {
      d3.select(editedPoint)
      .transition()
      .select("circle")
      .attr("r", editorR)
    }
    
    function editor() {
      root
      .selectAll(".editor")
      .data([selected])
      .enter()
      .append("foreignObject")
      .attr("class", "editor")
      .attr({
        width: editorR,
        height: editorR,
      })
      .attr("x", function(d, i) {
        return w/2 - editorR/1.5;
      })
      .attr("y", h/2-editorR/1.5)
      .append("xhtml:body")
      .angularise(function(d, i) {
        return {
          locals: {
            $render: render,
          },
          templateUrl: "experiments/template.html",
          injector: "demo" + i,
          controller: DemoCtrl,
          controllerAs: "ctrl",
          modules: ["demo"],
        }
      })

      back();

      function handoverToPlot() {
        root.select(".back-x")
          .remove();

        root.select(".back")
          .transition()
          .attr("r", 0)
          .call(onEndRemove)
          .each("end", function() {
            d3.select(this).remove();

            root.select(".editor")
            .transition()
            .attr("opacity", 0)
            .each("end", function() {
              d3.select(this).remove();
              xyPlot();
            })
          })
        
      }

      function back() {
        var x  = w*0.9;
        var y  = h*0.1;
        var r = w*0.05;

        root
        .append("circle")
        .attr("class", "back")
        .on("click", handoverToPlot)
        .attr("cx", x)
        .attr("cy", y)
        .attr("fill", "hsl(197, 74%, 66%)")
        .attr("r", 0)
        .transition()
        .attr("r", r)
        .each("end", function() {
          root
          .append("text")
          .attr("class", "back-x")
          .on("click", handoverToPlot)
          .attr("x", x)
          .attr("y", y)
          .attr("dy", "0.35em")
          .text("X")
          .style({
            "text-anchor": "middle",
            "fill": "white",
          })
        })

      }
    }
  }

  function xyPlot() {

    var xPadding = 50;
    var padding = 25;

    var rRange = [10, 50];
    var xScale = d3.scale.linear()
      .range([xPadding + rRange[1], w - xPadding - rRange[1]])

    var yScale = d3.scale.linear()
    // flip so we have higher values higher on screen
      .range([h - padding - rRange[1], padding + rRange[1]])

    var rScale = d3.scale.linear()
      .range(rRange)
      .domain(d3.extent(data, _.property("cost")))

    axes();

    var update = root
    .selectAll(".points")
    .data(data, function(d) {
      return d.name; 
    })

    var enter = update.enter()
    .append("g").classed("points", true)
    .classed("point", true)
    .on("click", handoverToEditor)
    .attr("transform", function(d, i) {
      return translate(xScale(d.risk), yScale(d.reward))
    })

    enter
    .append("circle")

    update
    .transition("basic")
    .select("circle")
    .attr("r", function(d) {
      return rScale(d.cost)
    })
    .attr("fill", function(d, i) {
      return scales.fill(i);
    })

    update
    .transition("position")
    .duration(function(d) {
      return d.previous ? 2000 : 500; 
    })
    .attrTween("transform", function(d, i) {
      if(!d.previous) {
        return d3.interpolateString(translate(d.x, d.y), translate(xScale(d.risk), yScale(d.reward)));
      }

      var snapBack = 0.2;
      var snapBackInterpolate = d3.interpolateString(
        translate(d.x, d.y), 
        translate(xScale(d.previous.risk), yScale(d.previous.reward))
      );
      var newValueInterpolate = d3.interpolateString(
        translate(xScale(d.previous.risk), yScale(d.previous.reward)), 
        translate(xScale(d.risk), yScale(d.reward))
      );

      return function(dt) {
        if(dt < snapBack) {
          return snapBackInterpolate(dt / snapBack);
        } else {
          dt = (dt - 0.2) / 0.8;
          return newValueInterpolate(dt);
        }
      }
    })

    function axes() {
      var xAxis = d3.svg.axis()
        .scale(xScale)
        .tickFormat(function(v) {
          return Math.round(v * 100) + "%";
        })

      var yAxis = d3.svg.axis()
        .scale(yScale)
        .orient("left")
        .tickFormat(function(v) {
          return Math.round(v * 100) + "%";
        })

      axis("xAxis", xAxis)
        .attr("transform", translate(0, yScale(0)))

      axis("yAxis", yAxis)
        .attr("transform", translate(xScale(0), -5))


      function axis(klass, axis) {
        return root.selectAll("." + klass)
        .data([1])
        .enter()
        .append("g").classed(klass + " axis", true)
        .call(axis);
      }
    }
  }

  function onEndRemove(sel) {
    sel.each("end", function() {
      d3.select(this).remove();
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
  this.data.previous = _.clone($data);

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
