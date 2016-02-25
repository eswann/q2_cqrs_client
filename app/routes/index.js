import Ember from 'ember';

var products = [{
	id: 1,
	name: "Rigid Table Saw",
	price: 459.55,
	imageUrl: "http://www.homedepot.com/catalog/productImages/400/79/79aab6e4-a7f0-43f8-ae80-739b428bfae3_400.jpg"
}]

export default Ember.Route.extend({
	model() {
		return products;
	}
});
