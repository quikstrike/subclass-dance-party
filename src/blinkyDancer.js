var BlinkyDancer = function(top, left, timeBetweenSteps){
  //var blinkyDancer = Dancer(top, left, timeBetweenSteps);
  Dancer.call(this, top, left, timeBetweenSteps);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  //this.oldStep = Dancer.prototype.step.bind(this);

  //return blinkyDancer;
  var closure = this;
  this.$node.on('mouseover', function(){
    BlinkyDancer.prototype.lineup.call(closure);
  });
};
BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;
BlinkyDancer.prototype.step = function(){
      // call the old version of step at the beginning of any call to this new version of step
    Dancer.prototype.step.call(this);
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    this.$node.toggle();
};
BlinkyDancer.prototype.lineup = function(){
  //this.$node.css('height', '150px');
  this.$node.css({
    'right': '0px',
    'left': 'auto'});
}
