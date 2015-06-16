// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps){

  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.step();
  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.setPosition(top, left);
  //alert('top: ' + top + ', left: ' + left);
};

Dancer.prototype.constructor = Dancer;
Dancer.prototype.step = function(){
 //var closure = this;
 setTimeout(this.step.bind(this), this.timeBetweenSteps);
 //setTimeout(function(){closure.step()}, this.timeBetweenSteps);
}
Dancer.prototype.setPosition = function(top,left){
  var styleSettings = {
      top: top,
      left: left
    };
    this.$node.css(styleSettings);
}


