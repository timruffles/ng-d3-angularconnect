/**
 * demonstrating composing multiple components with d3
 */
(function() {
"use strict";

function(el) {

  var xScale

  var xyPlot = xyPlot()
  .xScale(xScale)
  .yScale(yScale);

  var xAxisEl = el.append("g").attr("class", "xAxis");
  var yAxisEl = el.append("g").attr("class", "yAxis");


  function xyPlotRender() { 
    d3.select(el)
    .call(xyPlot, data)
    .call(labels);

    xAxis.call(xAxis);
    yAxis.call(yAxis);
  }

  function barPlotRender() { 
    d3.select(el)
    .call(xyPlot, data)
    .call(axisLines)
    .call(labels);
  }

  setTimeout(render, 125);

  return function() {
    d3.select(el).html("");
  };
}

function() {
  
}
  
})();

