
// ====== Menu toggle

const   btnMenuHead     = document.querySelector('#btn-head'),
        navMobile       = document.querySelector('#nav-mobile');
    


btnMenuHead.addEventListener('click', () => {
    toggleClass(btnMenuHead, navMobile)
});

function toggleClass (btn, element) {
       
    btn.classList.toggle('menu-toggle_open');
    element.classList.toggle('nav-mobile_open');
}






