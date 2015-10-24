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
{class:"bigCode"}

```
d3.selectAll(".bars")
.style("background",
  function(data) {
    return data.risk > 0.9 
      ? "red" : "green";
  });
```

## Data -> visual
{class:"bigCode"}

```
d3.selectAll(".bars")
.style("background",
  function(data) {
    return data.risk > 0.9 
      ? "red" : "green";
  });
```

## ...and where does the data come from?

## `data()`
{class:"bigCode"}

```
d3.selectAll("h3")
  .data([
    {title: "jQuery"},
    {title: "D3"}
  ])
```

## The data-join!

## Driving the document with data

## 

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

## Sync `DOM` + `data`

```javascript
var update = d3.selectAll('circle')
  .data(data)
  .attr("r", getRadius)

var enter = update.enter()
  .append("circle")


var exit = update.exit()
  .remove()
```

## 

<svg id="contextsDemo" height=200></svg>

```
var circleData = [
  {id: 1}, {id: 2}, {id: 3}
];

// renderCircles
```

<div class=little-console></div>

<script type=cheat>
  renderCircles(circleData);
</script>

<script>
onSlideWithElementShown(document.getElementById("contextsDemo"), function() {
  contextsDemo.apply(null, arguments);
})
</script>

## 

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
{tags:{state: "title"}}

## Idempotency

## d3 components = functions that sync `<DOM>` & `{data}`

## Same input, same output

```
component(elements0, data1) // elements1

component(elements1, data1) // elements1

component(elements1, data2) // elements2

component(elements2, data1) // elements1
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

## d3 components = function over 2 data-sets

## `{data}` + `<DOM>`

## Idempotency = DOM is predictable

## Idempotency = collaboration via <br>  `f · g · h`

