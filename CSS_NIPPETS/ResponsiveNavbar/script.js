let btn = document.querySelector('.navbar-toggle');
const nm = document.querySelector('.navbar-menu');

btn.addEventListener('click', () => {
    btn.classList.toggle('active');
    nm.classList.toggle('active');
});
