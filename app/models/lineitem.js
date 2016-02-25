import DS from 'ember-data';

export default DS.Model.extend({
  productname: DS.attr(),
  productprice: DS.attr(),
  quantity: DS.attr(),
  total: DS.attr()
});
