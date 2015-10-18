## d3 ≃ jQuery + data
{tags:{state:"title"}}

stuff

## jQuery-ish

- select elements
- work with that selection via chaining API

<section>
<script type=code-example-alongside>
  <div id=familiar>
    <h3>Hi</h3>
    <a>jQuery</a>
    <a>MDN docs</a>
  </div>
</script>
<div class=little-console></div>
<script type=cheat>
  d3.selectAll("#familiar a").attr("href","http://google.com");
</script>
</section>

## One callback turns jQ into D3
{tags:{state: "subtitle"}}


## D3's callback

```javascript
d3.selectAll(".bars")
.style("background",function(dataForElement,indexOfData) {
  return dataForElement.alert ? "red" : "green";
});
```
## `(data,...) {`

- the data for an element

## `(...,index) {`

- where that data sits within the current data-set (order)

## The bridge, el -> data

```javascript
function(data,index) {
  // return value from data + index
}
```

```javascript
d3.select("#root")
  .selectAll("h3")
  .text(function(d) {
    return d.title;
  });
```
## ...and where does the data come from?

## `data()`

```javascript
// make a selection, then call data()
d3.selectAll("h3")
  .data([
    {title: "jQuery"},
    {title: "D3"}
  ])
  // now data can be related one-to-one with elements
```

## Driving the document with data

<script type=code-example-alongside>
  <h3 class=drive-me></h3>
  <h3 class=drive-me></h3>
</script>
<div class=little-console></div>

<script type=cheat>
  d3.selectAll(".drive-me").data([{title:"hi"},{title:"jquery"}]).text(function(d) { return d.title })
</script>

## Datums -> elements via key function

## `ƒ(d,i) { return d.id }`

- by default, just `{ return index }`

## El consistency vital for animation

<div id=comparisons></div>
