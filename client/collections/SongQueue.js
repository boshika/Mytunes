// SongQueue.js - Defines a backbone model class for the song queue.
//Is a collection module, that inherits from the songs.js collection module which extends the song model
var SongQueue = Songs.extend({

  initialize: function(){
    //will have bunch of functions that interact with the SongModel(add, remove, play)
    //we need a add song 
    //dequeue
    //ended

    // this.on('dequeue', function(song) {
    //   this.remove(song);
    // });
 
  this.on('ended', function(song) {
     this.shift();
    if(this.length > 0) {
      this.playFirst();    } 
  }, this);

  this.on('add', function() {
    if (this.length === 1) {
      this.playFirst();
    }
  }, this);

  this.on('dequeue', function(song) {
    this.remove(song);
  }, this);
  
  // this.on('play', function() {
  //   this.playFirst();
  // });
  }, 

  // dequeue: function() {
  //   this.shift();
  //    if(this.models.length > 0) {
  //     this.models[0].play();
  //   } 
  // }, 

  playFirst: function() {
    this.at(0).play();
  },
  
  // ended: function() {
  //   this.shift();
  //   this.playFirst();
  // }
//ended: removing the song from top position in the array
//when you set this.on(ended, you are actually calling the ended function first, thn playfirst to play the song)
});

// playthis: 