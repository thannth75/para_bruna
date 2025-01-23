document.addEventListener('DOMContentLoaded', function() {
    const yesButton = document.getElementById('yesButton');
    const clearButton = document.getElementById('clearButton');
    const obviousButton = document.getElementById('obviousButton');
    const playButton = document.getElementById('playButton');
    const confetti = document.getElementById('confetti');
    const backgroundMusic = document.getElementById('backgroundMusic');

    // Função para iniciar a música
    const playMusic = () => {
        backgroundMusic.volume = 0.1; // Começa com volume baixo
        backgroundMusic.play();

        // Aumentar gradualmente o volume da música
        let volume = backgroundMusic.volume;
        const fadeIn = setInterval(function() {
            if (volume < 1) {
                volume += 0.01;
                backgroundMusic.volume = volume;
            } else {
                clearInterval(fadeIn);
            }
        }, 100);
    };

    playButton.addEventListener('click', playMusic);

    const showConfetti = () => {
        confetti.style.display = 'block';
        setTimeout(function() {
            alert('Eu te amo e quero estar ao seu lado para sempre!');
        }, 500);
    };

    yesButton.addEventListener('click', showConfetti);
    clearButton.addEventListener('click', showConfetti);
    obviousButton.addEventListener('click', showConfetti);
});
