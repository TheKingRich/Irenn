document.addEventListener("DOMContentLoaded", function() {
    var audio = document.getElementById("background-music");
    
    // Menggunakan play() dengan interaksi pengguna untuk menghindari pembatasan browser
    function playAudio() {
        audio.play().catch(function() {
            // Gagal memutar audio, menunggu interaksi pengguna
            document.body.addEventListener('click', playAudio);
            document.body.addEventListener('touchstart', playAudio);
        });
    }

    // Memulai pemutaran audio
    playAudio();

    // Menghapus event listener setelah audio berhasil diputar
    audio.addEventListener('playing', function() {
        document.body.removeEventListener('click', playAudio);
        document.body.removeEventListener('touchstart', playAudio);
    });
});
