$('#enterSite').click(function(){
  $(this).parent().fadeOut(1000)
});

$('#hello').hide().delay(1000).fadeIn(2000);
$('#welcome').hide().delay(3000).fadeIn(2000);


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