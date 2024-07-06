document.addEventListener("DOMContentLoaded", function () {
    const preloader = document.getElementById('preloader');
    const content = document.getElementById('first');

    setTimeout(() => {
        preloader.style.display = 'none';
        content.style.display = 'block';
        document.body.style.overflow = 'visible'
    }, 5000);
});
