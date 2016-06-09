"use strict";
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


    //allmessage = new Message(name, email, message);
}

