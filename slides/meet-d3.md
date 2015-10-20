## Meet d3
{tags:{state:"title"}}

## d3 ≃ jQuery + data

## jQuery-ish

- select elements
- affect those elements via chaining API

## e.g
{class: "notitle"}

<script type=eg code-sample>
  <svg id=meetD3 width=600 height=220>
    <circle r=50 cx=300 cy=110 fill=black />
  </svg>
</script>

<div class=little-console></div>

<script type=cheat>
  d3.selectAll("#meetD3 circle").attr("fill", "pink");
</script>

## Nothing new so far

## One callback API turns jQ into D3
{tags:{state: "subtitle"}}


## D3's callback
{todo: "demo"}

```
d3.selectAll(".bars")
.style("background",
  function(data) {
    return data.risk > 0.9 ? "red" : "green";
  });
```

## `(data, ...) {`

- the data for an element


## Data -> visual

```
function aD3Callback(data) {
  // transform data value, into visual value
  return data.count + "px"
}
```

## e.g

```
d3.select("#root")
  .selectAll("div")
  .style("width", function(d) {
    return d.count + "px";
  });
```
## ...and where does the data come from?

## `data()`

```
d3.selectAll("h3")
  .data([
    {title: "jQuery"},
    {title: "D3"}
  ])
```

## The data-join!

## Driving the document with data

## e.g

<script type=eg code-sample>
  <svg id=join width=600 height=220>
    <circle r=50 cx=250 cy=110  />
    <circle r=50 cx=450 cy=110  />
  </svg>
</script>

<div class=little-console></div>

<script type=cheat>
  d3.selectAll("#join circle").data([{risk:0.9},{risk:0.1}]).attr("fill", (d) => d.risk > 0.5 ? "red" : "green");
</script>

## Synchronising data and screen

- updating 
- adding
- removing

## Synchronising data and elements

```javascript
var update = d3.selectAll('.x').data(data);
var enter = update.enter();
var exit = update.exit();
```

## Contexts explained
{class:"notitle", todo: "remove title"}

<div class=contexts-explained>

  <div class=situation>
    <h2>Selection</h2>
    <h3>Elements</h3>
    <div class='elements track'></div>
    <button class=addEl>Add element</button>
    <button class=delEl>Remove element</button>
    <h3 class=code>.data()</h3>
    <div class='data track'></div>
    <button class=addData>Add data</button>
    <button class=delData>Remove data</button>
  </div>

  <div class=contexts>
    <h2>d3 Contexts</h2>
    <div>
      <h3 class=code>enter()</h3>
      <div class='enter track'></div>
    </div>
    <div>
      <h3 class=code>update</h3>
      <div class='update track'></div>
    </div>
    <div>
      <h3 class=code>exit()</h3>
      <div class='exit track'></div>
    </div>
  </div>

</div>


## Big idea
{tags:{state: "subtitle"}}

## Idempotency
{tags:{state: "subtitle"}}

## d3 components = functions that sync `<DOM>` & `{data}`

## Components are just a function

```
render(elements0, data1) // elements1

render(elements1, data1) // elements1

render(elements1, data2) // elements2

render(elements2, data1) // elements1
```

## So what?

## Composition

```javascript
var drawLineChart = lineChart();
var drawAxis = axis();
var addLabels = labelGenerator();

function renderXyPlot(data) {
  d3.select("#chart")
  .call(drawLineChart, data)
  .call(drawAxis, data)
  .call(addLabels, data)
} 
```

## Collaboration

```javascript

function renderXyPlot(data) {
  d3.select("#chart")
  .call(drawLineChart, data)
  .call(drawAxis, data)
  .call(addLabels, data)
} 

function renderHeatMap(data) {

  var sectors = heatmap();
  var laidOut = heatmap.nodes(data);

  d3.select("#chart")
  .call(renderSectors, sectors)
  .call(renderNodes, laidOut)
} 
```

## d3's big ideas

## d3 ≃ jQuery + data = data-join
{class: "big-text"}

## Sync via `enter()`, update and `exit()`

## Composition + collaboration (from idempotency)


