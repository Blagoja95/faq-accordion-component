
const active = document.getElementsByClassName('faq');

for (let i = 0; i < active.length; i++) {
    active[i].addEventListener('click', function () {
        active[i].classList.toggle('active');
    })
}