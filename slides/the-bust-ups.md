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

## 

<script type=eg code-sample>
  <form name=timeForm ng-controller="TimeCtrl as timeCtrl">
    <clock-input name=time ng-model="timeCtrl.item.time"
      valid-time="pm"
      >
    </clock-input>
  </form>
</script>

## No giant files!

## But...
{tags:{state:"bad"}}

## They were not impressed

## Remember collaboration?

![transitions](img/transitions-b.gif)






