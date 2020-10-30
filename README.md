# Chartjs API

## Multiple X&Y axes: how many axes can you have, is there a limit

* Multiple Y Axes is supported it is possible to have at least three Y Axes.
* It is possible to have several X Axes but it does not quite work, because no way to specify different labels

**Conclusion**: Chartjs only supports multiple Y Axes

## Zooming and panning: can you auto range zoom to fit on axis

No

## Multiple Charts (mixed Charts): can you have more than two series on a chart

Yes

## Vertical charts - can you have any series rotated as vertical? or just bars

Only column chart can be vertical

## Elements selection

No selection API

## Do they have Axis label programmatic string-formatting

Yes you can specify callback function

```js
ticks: {
    callback: function(label, index, labels) {
        return label/1000+'k';
    }
}
```

## Can you Override Axis gridline, label frequency

Yes using stepSize one can change label frequency.
GridLine can be styled - https://www.chartjs.org/docs/latest/axes/styling.html#grid-line-configuration

However there is no way to style gridBands.
