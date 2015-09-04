// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
//intercts with the SongQueue.js collection for queuing a song 
var SongQueueEntryView = Backbone.View.extend({
    // your code here
    tagName: 'tr',

    template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

    events: {
      'click': function() {
        this.model.dequeue();
        this.render();
      }
    },

    render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }
  
});
