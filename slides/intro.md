## My year
{tags:{state:"title"}}

## The proposition

## You built what?!

![transitions](img/transitions.gif)

## Of course I said yes

## I wanted to build cool things

![transitions](img/transitions-b.gif)

## Then I saw the code
{tags:{state:"bad"}}

![huge javascript file](img/huge-javascript-file.png)

## A quest!

## To unite mutual friend, and a new face

## 
{tags:{state:"title"}}

<img class='offset' src="img/ng.png" alt="angular js shield logo">

## Big ideas

"HTML for web apps"

## 
{tags:{state:"title"}}

<img class='offset' src="img/d3.svg" width=748 alt="d3 logo">

## Enables cool things

<svg id=d3Demo></svg>

<script>
onSlideWithElementShown(document.getElementById("d3Demo"), function(el) {
  var histo = sectorHistogram();

  function render() { 
    var randomData = d3.range(1000).map(d3.random.irwinHall(10));

    d3.select(el)
    .call(histo, randomData)
  }

  setTimeout(render, 125);

  return function() {
    d3.select(el).html("");
  };
})
</script>

## Has big ideas too


