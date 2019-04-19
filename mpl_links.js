"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 13
   Case Problem 1

   Author: Nicholas Le
   Date: 04/18/19  
   
   Filename: mpl_links.js

*/

// the allselect variable references all select elements nested within the govLinks form.

window.addEventListener("load", function () {
    var allSelect = document.forms.govLinks.getelementsbyTagName("select");
    for (var i = 0; i < allSelect.length; i++) {
        allSelect.addEventListener("onchange", function () {
            allSelect.location.href.value = allSelect;
        })
    }
})