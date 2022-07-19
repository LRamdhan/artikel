// pengambilan element html
const luar = document.getElementsByClassName('luar');
const hamberger = document.getElementsByClassName('hamberger')[0];
const scroll = document.getElementsByClassName('scroll')[0];

// pemberian event
hamberger.addEventListener('click', function() {
    luar[0].classList.toggle('putar-kiri');
    luar[1].classList.toggle('mengecil');
    luar[2].classList.toggle('putar-kanan');
    scroll.classList.toggle('memanjang');
});