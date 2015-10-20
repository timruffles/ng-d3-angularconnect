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

```
d3.selectAll(".bars")
.style("background",
  function(data) {
    return data.risk > 0.9 ? "red" : "green";
  });
```

## Data -> visual

```
function aD3Callback(data) {
  // transform data value, into visual value
  return data.count + "px"
}
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

## 

<svg id="contextsDemo" height=200></svg>

```
var circleData = [
  {id: 1}, {id: 2}, {id: 3}
];

renderCircles(circleData);
```

<div class=little-console></div>

<script>
onSlideWithElementShown(document.getElementById("contextsDemo"), function() {
  contextsDemo.apply(null, arguments);
})
</script>

## 
{class:"notitle", todo: "remove title"}

<div class=contexts-explained>

  <div class=situation>
    <h3 class=code>.selectAll(</h3>
    <div class='elements track'></div>
    <h3 class=code>)</h3>
    <button class=addEl>Add el</button>
    <button class=delEl>Remove el</button>
    <h3 class=code>.data(</h3>
    <div class='data track'></div>
    <h3 class=code>)</h3>
    <button class=addData>Add data</button>
    <button class=delData>Remove data</button>
  </div>

  <div class='eq'>
    =
  </div>

  <div class=contexts>
    <div>
      <h3 class=code>.enter()</h3>
      <div class='enter track'></div>
    </div>
    <div>
      <h3 class=code>update</h3>
      <div class='update track'></div>
    </div>
    <div>
      <h3 class=code>.exit()</h3>
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

## Collaboration


## 

<div id="collaborationDemo">
  <svg height=200></svg>
</div>

```
var colData = [
  {id: 1}, {id: 2}, {id: 3}
];

renderCollaborator(colData);
```

<div class=little-console></div>

<script type=cheat>
  switchCollaborator();
</script>

<script>
onSlideWithElementShown(document.getElementById("collaborationDemo"), function() {
  collaborationDemo.apply(null, arguments);
})
</script>

## How?

## Idempotent components

```
function xyPlot() {

  plot.itemClass = setterGetter();

  return plot(selection, data) {
    selection.selectAll("." + plot.itemClass())
    .data(data)
    // ... etc
  }
}
```

## d3 components = ƒ over 2 data-sets

## Data + elements

## Idempotency = simplicity

```javascript

// our renderers are simple functions
var xy = xyPlot().itemClass(".point");
var bar = barChart().itemClass(".point");

var active = xy;
var data = [{id: 1}, {id: 2}, {id: 3}];

function render() {
  d3.select("#demo")
  .call(active, data)
} 
```

## Idempotency = DOM is just data

