## Back to the quest
{tags:{state:"title"}}

## How to use D3's powers

## Without...

![huge javascript file](img/huge-js.png)

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
  <form ng-controller="TimeCtrl as timeCtrl" name=timeForm>
    <clock-input ng-model="timeCtrl.item.time" name=time 
      >
    </clock-input>
  </form>
</script>

## `ngModelController` FTW!

## No giant files!

## But...
{tags:{state:"bad"}}

## Our most ambitious plans were thwarted

## Web-components selfishly horde `<DOM>`

## Remember collaboration?

![transitions](img/transitions-b.gif)






