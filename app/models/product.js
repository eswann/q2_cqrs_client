import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  imageurl: DS.attr(),
  price: DS.attr()
});
