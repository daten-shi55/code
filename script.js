document.addEventListener('DOMContentLoaded', function () {
    const audio = document.getElementById('background-audio');
    audio.volume = 0.5; 

    document.addEventListener('click', function () {
        if (!audio.paused) {
            audio.pause();
        }
    });
});