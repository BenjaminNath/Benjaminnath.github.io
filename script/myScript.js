$(".menu-collapsed").click(function() {
  $(this).toggleClass("menu-expanded");
});

var coffee = new CountUp("coffeeCups", 0, 1528, 0, 5, options);
var code = new CountUp("codeLines", 0, 100000, 0, 5, options);
var bugs = new CountUp("bugsFixed", 0, 130, 0, 5, options);

// Changing the defaults
window.sr = ScrollReveal({ reset: true });

// Customizing a reveal set
sr.reveal('.title', { duration: 2000 });
sr.reveal('#meText', {duration: 2000 });
sr.reveal('.col', { duration: 2000 });
sr.reveal('.skill_section', {duration: 2000});
sr.reveal('.work',{duration: 2000});
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

$(document).ready(function(){
  var scene = new ScrollMagic.Scene({triggerElement: "#trigger", duration: 400}).setPin("#pin").addTo(controller);
});

$(function () { // wait for document ready
    // init
    var controller2 = new ScrollMagic.Controller({
      globalSceneOptions: {
        triggerHook: 'onLeave'
      }
    });

    // get all slides
    var slides = document.querySelectorAll("section.panel");
    // create scene for every slide
    for (var i=0; i<slides.length; i++) {
      if(slides[i] == 4){
        new ScrollMagic.Scene({
          triggerElement: slides[i]
        }).setPin('.slide').addTo(controller2);
      } else{
          new ScrollMagic.Scene({
            triggerElement: slides[i]
          }).setPin(slides[i]).addTo(controller2);
        }
    }
  });
