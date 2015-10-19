## Using d3 + ng
{tags:{state:"title"}}

## Attempt one
{tags:{state:"subtitle"}}

## Best practice

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

## But...
{tags:{state:"bad"}}

## We had more ambition

## Remember collaboration?

## Seamless transitions between components

## Same elements

## First clash
{tags:{state:"bad"}}

## The selfishness of `<components>`

## `<components>` won't share their DOM

## No overlapping behaviours

![overlap](img/oo.png)

## OO view of DOM

Implementation detail to be hidden

## D3 view of DOM

Simple data, ready to be used

## Embrace data

>  Better have 100 functions for 1 data structure than 10 functions for 10 data structures

Alan Perlis

## Why different?

D3 is idempotent, DOM is just more data

## Attempt two
{tags:{state:"subtitle"}}

## Stacking attributes

## Attribute directives

    <svg

      bar-chart='{
        data: ctrl.data,
      }'

      line-graph='{
        data: ctrl.data,
      }'
      >
    </svg>

## Can share!
{tags:{state:"good"}}

DOM nodes accessible to all directives

    <svg bar-chart line-graph>
      <g class='some-data'></g>
      <g class='some-data'></g>
      <g class='some-data'></g>
    </svg>

## But..
{tags:{state:"bad"}}

## No isolate...
{todo: "show dupe isolate error"}

## Not idiomatic

Too many WTFs from people new to the team

## Gain collaboration, loses composability

## But...
{tags:{state:"bad"}}



