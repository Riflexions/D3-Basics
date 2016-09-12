import Ember from 'ember';

export default Ember.Component.extend({
    didRender() {
        d3.selectAll("p").style("color", "red");
    }

});
