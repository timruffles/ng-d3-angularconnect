## Using d3 + ng
{tags:{state:"title"}}

## How to use D3's powers

## Without 3,269 line file of doom

## Or losing benefits of Angular?

## I brought 'best practice'

## `ng` view concerns live in?

## `<directives>`

## App-flavoured HTML

```html
<!-- BOOO!! -->
<div class='profile'></div>

<!-- YAAAAY! -->
<profile></profile>
````

## One directive per chart

## Approach lots of libraries have taken

## `<bar-chart>`

    <div ng-controller='ReportCtrl as ctrl'>
      <bar-chart
        series="ctrl.series"
        y-scale="ctrl.yScale"
        >
      </bar-chart>
    </div>

## Sometimes, great!

## e.g cool inputs
{todo: "add clock demo"}

## No giant files!

## But...
{tags:{state:"bad"}}

## They were not impressed

## Remember collaboration?

![transitions](img/transitions-b.gif)

## First d3 + ng bust up
{tags:{state:"bad"}}

## The selfishness of `<components>`

## `<components>` won't share their DOM

## No overlapping behaviours
{todo: "ugly"}

![overlap](img/oo.png)

## OO view of DOM

Implementation detail to be hidden

## D3 view of DOM

Simple data, ready to be used

## Embrace data

>  Better have 100 functions for 1 data structure than 10 functions for 10 data structures

Alan Perlis

## Why the radical difference?

## Idempotence tames DOM

## To D3, DOM is another data-set

## Many functions one data-structure

- functions = d3 components
- data-structure = DOM





