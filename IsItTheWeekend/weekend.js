var day = new Date();


switch (day.getDay()) {
    case 0:
        $('#no').html("Tis the end of the weekend.");
        break;
    case 1:
        $('#no').html("Not even close.");
        break;
    case 2:
        $('#no').html("It's is still forever away.");
        break;
    case 3:
        $('#no').html("Well, we're kinda sorta maybe almost there?");
        break;
    case 4:
        $('#no').html("One. More. Day.");
        break;
    case 5:
        $('#yes').html("It's finally Friday!");
        break;
    case 6:
        $('#yes').html("Today's a special occasion. It's Saturday! Now go have a drink.");
}