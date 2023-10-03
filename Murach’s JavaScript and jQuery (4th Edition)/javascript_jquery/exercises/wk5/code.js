"use strict";

const $ = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", function() {
    // ensure the DOM is loaded before we try to manipulate it

});

//what's wrong with this?
$("#writethere").innerHTML += "Hello World!";
