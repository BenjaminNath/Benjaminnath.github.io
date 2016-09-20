$('#enterSite').click(function(){
  $(this).parent().fadeOut(1000)
});

$('#name').hide().delay(1000).fadeIn(2000);
$('#occupation').hide().delay(3000).fadeIn(2000);

$('#jgames').hide().fadeIn(2000);
$('#weather').hide().delay(250).fadeIn(2000);
$('#wikiviewer').hide().delay(500).fadeIn(2000);
$('#calculator').hide().delay(750).fadeIn(2000);


function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    document.getElementById("toggleMenu").style.display = "none";
    document.getElementById("portrait").style.left = "65%";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
    document.getElementById("toggleMenu").style.display = "initial";
    document.getElementById("portrait").style.left = "50%";
}