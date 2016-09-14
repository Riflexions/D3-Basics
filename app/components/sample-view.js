import Ember from 'ember';
var data = [4, 8, 15, 16, 23, 42, 56, 72, 99];
var x = d3.scaleLinear()
    .domain([0, d3.max(data)])
    .range([0, 420]);

export default Ember.Component.extend({
    didRender() {
        d3.select(".chart")
            .selectAll("div")
            .data(data)
            .enter().append("div")
            .style("width", function (d) {
                return x(d) + "px";
            })
            .text(function (d) {
                return d;
            });

    }

});
