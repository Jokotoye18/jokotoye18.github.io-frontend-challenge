"use strict";

// const selectElement = function(element) {
//     return document.querySelector('element')
// };
// const body = selectElement('body');
// console.log(body)
var menuToggler = document.querySelector('.menu-toggler'); // console.log(menuToggler)

menuToggler.addEventListener('click', function () {
  var body = document.querySelector('body'); // console.log(body)

  body.classList.toggle('open');
});