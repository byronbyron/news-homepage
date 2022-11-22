const body = document.body;
const btns = document.querySelectorAll('.js-menu');

btns.forEach((btn) => {
    btn.onclick = () => toggleClass(body, 'menu-active');
});

function toggleClass(target, className) {
    if (target.classList.contains(className)) {
        body.classList.remove(className);
    } else {
        body.classList.add(className);
    }
}

document.addEventListener('keydown', function(event) {
    if (event.key === "Escape"){
        body.classList.remove('menu-active');
    }
});
