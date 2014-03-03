var ItemView = Backbone.View.extend({

  initialize: function(options) {

  }

});


var RowView = Backbone.View.extend({

  className: 'item-row',

  itemTemplate: _.template($('#item-template').text()),

  initialize: function(options) {
    this.models = options.models;

    $('.quiz-wrapper').append(this.el);
    this.render();
  },

  render: function(){
    var shuffled = _.sample(this.models, this.models.length)
    var that = this;
    _.each(shuffled, function(item){
      that.$el.append(that.itemTemplate(item.attributes));
    })
  }

})
