
var allmessage;
function Message(name, email, message) {
    this.name = name;
    this.email = email;
    this.message = message;
}
function getData() {
    var name = document.getElementById("input-name").value;
    var email = document.getElementById("input-email").value;
    var message = document.getElementById("input-message").value;
    var myEmail  = "?cc=zokzok95@gmail.com" +
        + "&subject=" + escape("This is my subject")
        + "&body=" + message;
    window.location.href = link;
    //allmessage = new Message(name, email, message);
}

// $( "#toggle" ).hover(function() {
//     $( this ).effect( "shake" );
// });

$('#toggle').hover(function(){
    if(!$(this).hasClass('animated')){
        $(this).addClass('animated');
        $(this).stop().effect('shake', {distance:3}, 200);
    }
}, function(){
    $(this).removeClass('animated');
});