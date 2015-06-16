var DancingBannana = function(top, left, timeBetweenSteps){
  //var BreakDancer = Dancer(top, left, timeBetweenSteps);
  Dancer.call(this, top, left, timeBetweenSteps);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  //this.$node = $('<img src="./src/dancingBannana.gif" height="80" width="80">');
  //Dancer.prototype.setPosition.call(top, left);
  this.$node.addClass("dancingBannana")
  var $img = $('<img />', {
    src:"./src/dancingBannana.gif",
    height: "80",
    width:"80"});
  $img.appendTo(this.$node);
  var closure = this;
  this.$node.on('mouseover', function(){
   // console.log(closure)
    DancingBannana.prototype.lineup.call(closure);

  });

};
DancingBannana.prototype = Object.create(Dancer.prototype);
DancingBannana.prototype.constructor = DancingBannana;
DancingBannana.prototype.step = function(){
      // call the old version of step at the beginning of any call to this new version of step
    Dancer.prototype.step.call(this);
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    //this.$node.toggle();
};
DancingBannana.prototype.lineup = function(){
  //this.$node.css('height', '150px');
  this.$node.css('left', '0px');
}
