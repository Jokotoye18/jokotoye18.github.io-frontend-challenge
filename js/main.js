// const selectElement = function(element) {
//     return document.querySelector('element')
// };

// const body = selectElement('body');
// console.log(body)

const menuToggler = document.querySelector('.menu-toggler');
// console.log(menuToggler)

menuToggler.addEventListener('click', function() {
    let body = document.querySelector('body');
    // console.log(body)
    body.classList.toggle('open');
});