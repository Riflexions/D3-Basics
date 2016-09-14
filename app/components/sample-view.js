import Ember from 'ember';
var data = [4, 8, 15, 16, 23, 42, 56, 72, 99];
export default Ember.Component.extend({
    didRender() {

        d3.select(".chart")
            .selectAll("div")
            .data(data)
            .enter().append("div")
            .style("width", function (d) {
                return d * 10 + "px";
            })
            .text(function (d) {
                return d;
            });

    }

});
