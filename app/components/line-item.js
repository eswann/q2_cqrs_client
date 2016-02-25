import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		incrementQuantity() {
			alert("Incrementing quantity of " + this.get('lineitem.productname'));
		},
		decrementQuantity() {
			alert("Decrementing quantity of " + this.get('lineitem.productname'));
		},
		remove() {
			alert("Removing " + this.get('lineitem.productname'));
		}
	}
});
