## Collaboration
{tags:{state:"title"}}

## Attempt 1

## Best practice

## `ng` view concerns live in?

## `<directives>`

## Making HTML a language fit for your app

Not `<div class='profile'>`, but `<profile>`

## One directive per chart

## Approach lots of libraries have taken

## `<bar-chart>`

```html
<bar-chart
  series="ctrl.series"
  y-scale="ctrl.yScale"
  >
</bar-chart>
```

## Ok for completely generic bits

## e.g sparklines

## But...
{tags:{state:"bad"}}

## We had more ambition

## Moving data between charts

## Element consistency

## First clash
{tags:{state:"bad"}}

## The selfishness of `<components>`

## `<components>` won't share their DOM

## No overlapping behaviours

![overlap](img/oo.png)

## Attempt 2
{tags:{state:"subtitle"}}

## Stacking attributes

## Attribute directives

```html
<svg
  bar-chart='{
    data: ctrl.data,
  }'

  line-graph='{
    data: ctrl.data,
  }'
  >
</svg>
```

## Can share!
{tags:{state:"good"}}

```html
<svg bar-chart line-graph>
  <g class='some-data'>
  </g>
</svg>
```

## But..
{tags:{state:"bad"}}

## No isolate...
{todo: "show dupe isolate error"}

## Not idiomatic

## Loses D3's insane composability

## Attempt 3
{tags:{state:"subtitle"}}

## Take a step back

## Why declarative?
{todo: "talk about - is it worth it"}

## Break apart concerns

## Angular holds state

## D3 renders

## But...
{tags:{state:"bad"}}



