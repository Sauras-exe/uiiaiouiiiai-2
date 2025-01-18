// script.js

// Inisialisasi file audio untuk setiap tombol
const suara1 = new Audio('suara1.wav');
const suara2 = new Audio('suara2.wav');
const suara3 = new Audio('suara3.wav');
const suara4 = new Audio('suara4.wav');

// Fungsi untuk memainkan dan menghentikan suara
function tambahEvent(tombol, audio) {
    tombol.addEventListener('mousedown', () => {
        audio.loop = true; // Putar suara terus-menerus
        audio.play();
    });

    tombol.addEventListener('mouseup', () => {
        audio.pause();
        audio.currentTime = 0; // Reset suara ke awal
    });

    // Untuk perangkat layar sentuh
    tombol.addEventListener('touchstart', () => {
        audio.loop = true;
        audio.play();
    });

    tombol.addEventListener('touchend', () => {
        audio.pause();
        audio.currentTime = 0;
    });
}

// Ambil elemen tombol dan tambahkan event listener
const tombol1 = document.getElementById('tombol1');
const tombol2 = document.getElementById('tombol2');
const tombol3 = document.getElementById('tombol3');
const tombol4 = document.getElementById('tombol4');

tambahEvent(tombol1, suara1);
tambahEvent(tombol2, suara2);
tambahEvent(tombol3, suara3);
tambahEvent(tombol4, suara4);