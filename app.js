const menuBtn = document.querySelector('.iconMenu');
const navDiv = document.querySelector('.navDiv');

menuBtn.addEventListener('click', function () {
    navDiv.classList.toggle('navDiv-show'); // Toggle class to show/hide menu
});
