This line chart is constructed from a TSV file storing the daily average temperatures of New York, San Francisco and Austin over the last year. The chart employs [conventional margins](http://bl.ocks.org/3019563) and a number of D3 features:

* [d3.tsv](https://github.com/mbostock/d3/wiki/CSV) - load and parse data
* [d3.time.format](https://github.com/mbostock/d3/wiki/Time-Formatting) - parse dates
* [d3.time.scale](https://github.com/mbostock/d3/wiki/Time-Scales) - *x*-position encoding
* [d3.scale.linear](https://github.com/mbostock/d3/wiki/Quantitative-Scales) - *y*-position encoding
* [d3.scale.category10](https://github.com/mbostock/d3/wiki/Ordinal-Scales#wiki-category10), a [d3.scale.ordinal](https://github.com/mbostock/d3/wiki/Ordinal-Scales#wiki-ordinal) - color encoding
* [d3.extent](https://github.com/mbostock/d3/wiki/Arrays#wiki-d3_extent), [d3.min](https://github.com/mbostock/d3/wiki/Arrays#wiki-d3_min) and [d3.max](https://github.com/mbostock/d3/wiki/Arrays#wiki-d3_max) - compute domains
* [d3.keys](https://github.com/mbostock/d3/wiki/Arrays#wiki-d3_keys) - compute column names
* [d3.svg.axis](https://github.com/mbostock/d3/wiki/SVG-Axes) - display axes
* [d3.svg.line](https://github.com/mbostock/d3/wiki/SVG-Shapes#wiki-line) - display line shape