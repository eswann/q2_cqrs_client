import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		addToCart() {
			alert('Adding "' + this.get('product.name') + '" to cart');
		}
	}
});
