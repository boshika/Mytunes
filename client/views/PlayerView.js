// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  el: '<audio controls autoplay />',

  initialize: function() {
    // //console.log('this' + this, "$el" + this.$el, 'self' + self);
    this.$el.on('ended', this.end.bind(this));
      //console.log(self, 'model' + model);
      // this.model.ended();
  },


  end: function() {
    this.model.ended();
  },
  //  events: {
  //   'ended': function() {
  //     this.model.ended();
  //   }
  // }, //alternate for binding

  setSong: function(song){
    //console.log('song' + song);
    this.model = song;
    this.render();
  },

  render: function(){
    return this.$el.attr('src', this.model ? this.model.get('url') : '');
  }

});
