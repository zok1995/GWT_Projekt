
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

// $('#logo').hover(function() {$(this).vibrate();});
// це вже має бути анімація, приклад взяв з https://api.jqueryui.com/shake-effect/
$( document ).click(function() {
    $( "#toggle" ).effect( "shake" );
});
// це чисто для перевірки
$( document ).click(function() {
    alert("it works");
});