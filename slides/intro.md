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

## Angular
{tags:{state:"title"}}

<img class='offset' src="img/ng.png" alt="angular js shield logo">

## Hefty

## Big ideas

"HTML for web apps"

## D3
{tags:{state:"title"}, todo: "add logo"}

## Builds cool things

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

## Just a library

## Has big ideas too


