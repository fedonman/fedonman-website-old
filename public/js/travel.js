const init = () => {
    const videoElement = document.getElementById("travel-video");
    const playButton = document.getElementById("play-button");
    let playing = false;
    videoElement.currentTime = 0;
    videoElement.volume = 1;
    
    videoElement.onended = () => {
        playing = false;
        videoElement.currentTime = 0;
        playButton.classList.remove("playing");
    };

    videoElement.onplay = () => {
        playing = true;
        playButton.classList.add("playing");
    };

    videoElement.onpause = () => {
        playing = false;
        playButton.classList.remove("playing");
    }

    playButton.onclick = () => {
        if (playing) {
            videoElement.pause();
        }
        else {
            videoElement.play();
        }
    };

    const mainElement = document.getElementById("content");
    mainElement.classList.add("fade-in");
};

window.onload = init;