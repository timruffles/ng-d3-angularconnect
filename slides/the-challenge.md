## A new quest
{"tags":{"state": "title"}}

## No more programmer vision

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

## I needed `ng` & `d3`

<div class=two-up>
  <img class='offset' src="img/ng.png" alt="angular js shield logo">
  <img class='offset' src="img/d3.svg" width=748 alt="d3 logo">
</div>

## Beat the tools into submission!

## `d3.angularize()`

## Flip the hierarchy!

## On demand

```javascript
editedSelection
.angularize(function(d, i) {
  return {
    controller: "ComplexFormCtrl",
    locals: {
      // provide Ctrl a way to hand back to D3
      $edited: edited,
    },
    templateUrl: "editors/complexForm.html",
    controllerAs: "ctrl",
    injector: "app",
    modules: ["app", "someFormModule"],
  }
})
```

##  

<svg id='resolutionDemo' class="demo"></svg>

<script>
onSlideWithElementShown(document.getElementById("resolutionDemo"), function() {
resolutionDemo.fromHook.apply(null, arguments);
})
</script>

## Coding `===` enabling
{tags:{state:"title"}}

## Let's not find excuses

## Let's remember why we got into code

## Let's find reasons to say...

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

