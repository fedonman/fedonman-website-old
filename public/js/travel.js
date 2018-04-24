const init = () => {
    const videoElement = document.getElementById("travel-video");
    const playButton = document.getElementById("play-button");
    //videoElement.volume = 0;
    
    videoElement.onended = () => {
        videoElement.currentTime = 0;
        playButton.classList.add("paused");
    };

    const mainElement = document.getElementById("content");
    mainElement.classList.add("fade-in");
};

window.onload = init;