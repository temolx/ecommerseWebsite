const burgerLogo = document.querySelector('.burgerMenu');
const mobileList = document.querySelector('.mobileMenu');

burgerLogo.addEventListener('click', () => {
    if (mobileList.style.display === 'contents') {
        mobileList.style.display = 'none'; }

    else {
        mobileList.style.display = 'contents'
    }
})

$(document).ready(function() {
    $('.galleryImage').click(function() {
        $('.mainImage').html($(this).html());
    })
})