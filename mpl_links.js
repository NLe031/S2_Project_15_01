"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 13
   Case Problem 1

   Author: Nicholas Le
   Date: 04/18/19  
   
   Filename: mpl_links.js

*/


window.addEventListener("load", function () {
    // the allselect variable references all select elements nested within the govLinks form.
    var allSelect = document.forms.govLinks;
    //this for loop loops through all the links to find which one was selected
    for (var i = 0; i < allSelect.length; i++) {
        allSelect[i].onchange = function (e) {
            document.location.href = e.target.value;
        };
    };
});