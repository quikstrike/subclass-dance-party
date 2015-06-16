var PkDancer = function(top, left, timeBetweenSteps){
  //var BreakDancer = Dancer(top, left, timeBetweenSteps);
  Dancer.call(this, top, left, timeBetweenSteps);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  //this.oldStep = Dancer.prototype.step.bind(this);

  //return BreakDancer;
  this.$node.addClass("PkDancer");
  var $img = $('<img />', {
    src:"./src/carlton.gif",
    height: "160",
    width:"160"});
  $img.appendTo(this.$node);
  var closure = this;
  this.$node.on('mouseover', function(){
    PkDancer.prototype.lineup.call(closure);
  });
  this.lightUpTheDanceFloor()
};
PkDancer.prototype = Object.create(Dancer.prototype);
PkDancer.prototype.constructor = PkDancer;
PkDancer.prototype.step = function(){
      // call the old version of step at the beginning of any call to this new version of step
    Dancer.prototype.step.call(this);
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
};
PkDancer.prototype.lineup = function(){
  //this.$node.css('height', '150px');
  this.$node.css({
    'right': '0px',
    'left': 'auto'});
}
PkDancer.prototype.lightUpTheDanceFloor = function(){
  //this.$node.css('height', '150px');

  this.$node.css({
    'top': ($("body").height() / 2),
    'left': ($("body").width() / 2)
  });
}
