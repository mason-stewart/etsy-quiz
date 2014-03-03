var Item = Backbone.Model.extend();

var ItemsCollection = Backbone.Collection.extend({
  model: Item,

  url: "https://api.etsy.com/v2/listings/active.js?&limit=25&includes=Images&api_key=gpby6hrhuzepnv0rx17946lk&callback=?",

  parse: function(response){
    return response.results;
  }
});
