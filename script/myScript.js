$(".menu-collapsed").click(function() {
  $(this).toggleClass("menu-expanded");
});


$(document).ready(function () {
    var scroll_pos = 0;
    $("#slide").scroll(function () {
        scroll_pos = $(this).scrollTop();
        if (scroll_pos > 210) {
            $("#slide").css('background-color', '#1A1A1A');
        } else {
            $("#slide").css('background-color', 'red');
        }
        console.log(scroll_pos);
    });
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
var scrollMagicController = new ScrollMagic.Controller();

$(document).ready(function(){

  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
    var scene = new ScrollMagic.Scene({triggerElement: "#trigger", duration: 200}).setPin("#pin1").addTo(controller);  
    console.log('is this working on firefox');  
  } else {
    var scene = new ScrollMagic.Scene({triggerElement: "#trigger", duration: 500}).setPin("#pin1").addTo(controller);
  }

  var portfolioScene = new ScrollMagic.Scene({triggerElement: "#trigger2", duration: 1700}).setPin("#pin2").addTo(portController);


  var scene1 = new ScrollMagic.Scene({
    triggerElement: '#scene-1',
    offset: 50
  })
  .setClassToggle('.imacBg', 'scene-1-active')
  .addTo(scrollMagicController);

  var scene2 = new ScrollMagic.Scene({
    triggerElement: '#scene-2',
    offset: 50
  })
  .setClassToggle('.imacBg', 'scene-2-active')
  .addTo(scrollMagicController);

  var scene3 = new ScrollMagic.Scene({
    triggerElement: '#scene-3',
    offset: 50
  })
  .setClassToggle('.imacBg', 'scene-3-active')
  .addTo(scrollMagicController);

  var scene4 = new ScrollMagic.Scene({
    triggerElement: '#scene-4',
    offset: 50
  })
  .setClassToggle('.imacBg', 'scene-4-active')
  .addTo(scrollMagicController);

});
