export default function() {

  this.get("/products", function() {
    return {
      data: [{
        type: "products",
        id: 1,
        attributes: {
          name: "Rigid Table Saw",
          price: 459.55,
          imageurl: "http://www.homedepot.com/catalog/productImages/400/79/79aab6e4-a7f0-43f8-ae80-739b428bfae3_400.jpg"
        }
      }]
    };
  });

  this.get('/lineitems', function() {
    return {
      data: [{
        type: "lineitems",
        id: 1,
        attributes: {
          productname: "Rigid Table Saw",
          productprice: 459.55,
          quantity: 1,
          total: 459.55
        }
      },{
        type: "lineitems",
        id: 2,
        attributes: {
          productname: '18" Dewalt Clamp',
          productprice: 27.99,
          quantity: 4,
          total: 111.96
        }
      }]
    }
  });

  this.get('/cartsummaries', function(request) {
    return {
      data: {
        type: "cartsummary",
        id: 1,
        attributes: {
          total: 571.51
        }
      }
    }
  })
}