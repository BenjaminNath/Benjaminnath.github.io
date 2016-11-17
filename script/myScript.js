$(".menu-collapsed").click(function() {
  $(this).toggleClass("menu-expanded");
});

var target = $('div.slide');
var targetHeight = target.outerHeight();
var containerHeight = $('.rightCol').height();


var maxScroll = containerHeight - targetHeight;
var scrollRange = maxScroll/(target.length-1);

$(document).scroll(function(e){
  var scrollY = $(document).scrollTop();
  var scrollPercent = (scrollRange - scrollY%scrollRange)/scrollRange;
  var divIndex = Math.floor(scrollY/scrollRange);

  target.has(':lt(' + divIndex + ')').css('opacity', 0);
  target.eq(divIndex).css('opacity', scrollPercent);
  target.has(':gt(' + divIndex + ')').css('opacity', 1);
});



















var coffee = new CountUp("coffeeCups", 0, 1528, 0, 5, options);
var code = new CountUp("codeLines", 0, 100000, 0, 5, options);
var bugs = new CountUp("bugsFixed", 0, 130, 0, 5, options);

// Changing the defaults
window.sr = ScrollReveal({ reset: false });

// Customizing a reveal set
sr.reveal('#meText', {duration: 2000 });
sr.reveal('.col', { duration: 2000 });
sr.reveal('.skill_section', {duration: 2000});
coffee.start();
code.start();
bugs.start();


//coffeeCups
var options = {
  useEasing : true,
  useGrouping: true,
  separator: ',',
  decimal: '.',
  prefix: '',
  suffic:''
};


var controller = new ScrollMagic.Controller();
var portController = new ScrollMagic.Controller();

$(document).ready(function(){
  var scene = new ScrollMagic.Scene({triggerElement: "#trigger", duration: 400}).setPin("#pin1").addTo(controller);
  var portfolioScene = new ScrollMagic.Scene({triggerElement: "#trigger2", duration: 1800}).setPin("#pin2").addTo(portController);
  var weatherScene = new ScrollMagic.Scene({triggerElement: "#weatherTrigger"})
                          .setClassToggle("#animate", "weather")
                          .addTo(portController);
});

$(function() {
  var scrollMagicController = new ScrollMagic();

  var tween1 = TweenMax.to('#animation-1', 0.3. {
    backgroundImage: '../img/jgames.png'
  });
  var scene1 = new ScrollScene({
    triggerElement: '#jgames',
    offset: 50
  })
  .setClassToggle('body', 'scene-1-active')
  .setTween(tween1);
  addTo(scrollMagicController);

});