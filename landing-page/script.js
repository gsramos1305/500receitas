let player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('youtube-video', {
        events: {
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerStateChange(event) {
    if (event.data === YT.PlayerState.PLAYING) {
        setTimeout(checkVideoProgress, 1000);
    }
}

function checkVideoProgress() {
    const videoDuration = player.getDuration();
    const currentTime = player.getCurrentTime();

    // Defina 90% do vídeo como o ponto de disparo
    const triggerPoint = 0.9 * videoDuration;

    if (currentTime >= triggerPoint) {
        document.getElementById('content').style.display = 'block';
    } else {
        setTimeout(checkVideoProgress, 1000);
    }
}
