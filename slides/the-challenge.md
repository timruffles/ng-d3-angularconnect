## A new quest
{"tags":{"state": "title"}}

## To go back to the place where

## I didn't know the limitation of my tools

## Brief

- x/y plot
- editable data
- update on change

## Pfff! Too easy

## Auto-pilot

![boring chart](img/chart-boring.png)

## Add modal

![boring modal](img/chart-modal.png)

## NO! PROGRAMMER VISION!
{"tags":{"state": "bad"}}

## Direct access

![cool idea](img/chart-boring.png)

## Show don't tell

![cool idea](img/direct-access.png)

## But `<form>` + `<svg>`?

## How will you validate?

## Are you casting aside `ng`?

## Writing HTML with D3?!

```js
// the horror
var form = d3.select("#form-root")
.append("form")
.on("submit", handleSubmit)

form.append("input")
.attr("type", "range")
.attr("required", true)

form.append("input")
.attr("type", "number")
.attr("required", true)
// ... and on, and on
```

## I need `ng`'s & `d3`'s powers

## Beat the tools into submission!

## `d3.angularize()`

## Flip the hierarchy!

##  

<svg id='resolutionDemo' class="demo"></svg>

<script>
onSlideWithElementShown(document.getElementById("resolutionDemo"), function() {
  resolutionDemo.fromHook.apply(null, arguments);
})
</script>

## Coding `===` enabling
{tags:{state:"title"}}

## When we have ambition

## Let's find reasons to say

##  

<a class="tweet" style="opacity: 0" href="http://twitter.com/">@timruffles</a>

<svg id='yes'</svg>

<script>
onSlideWithElementShown(document.getElementById("yes"), function(el, slideEl) {
  setTimeout(function() {
    d3.select(slideEl)
    .select(".tweet")
    .style("opacity", 1)
  }, 1250);
  yesDemo.apply(null, arguments);
})
</script>

