$(".menu-collapsed").click(function() {
  $(this).toggleClass("menu-expanded");
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