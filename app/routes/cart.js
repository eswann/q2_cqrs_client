import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return {
			lineitems: this.store.findAll('lineitem'),
			cartsummary: this.store.queryRecord('cartsummary', 'abc')
		}
	}
});
