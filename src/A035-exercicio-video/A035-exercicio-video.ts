interface VideoPlayerElements {
  videoPlayer: HTMLVideoElement;
  playButton: HTMLButtonElement;
  stopButton: HTMLButtonElement;
}

interface VideoPlayerProtocol {
  playToggle(): void;
  stop(): void;
  startEvents(): void;
}

export default class VideoPlayer implements VideoPlayerProtocol {
  private videoPlayer: HTMLVideoElement;
  private playButton: HTMLButtonElement;
  private stopButton: HTMLButtonElement;

  constructor(videoPlayerElements: VideoPlayerElements) {
    this.videoPlayer = videoPlayerElements.videoPlayer;
    this.playButton = videoPlayerElements.playButton;
    this.stopButton = videoPlayerElements.stopButton;
  }  

  startEvents(): void {
    this.playButton.addEventListener('click', () => {
        this.playToggle()
    });

    this.stopButton.addEventListener('click', () => {
        this.videoPlayer.pause();
        this.videoPlayer.currentTime = 0;
        this.playButton.innerText = 'Play'
    });

  }

  playToggle(): void {
    if(this.videoPlayer.paused) { // verifica se o video está pausado usando uma propriedade do JS.
        this.videoPlayer.play(); // Esse método ".play()" faz o video tocar.
        this.playButton.innerText = 'Pause';
    } else {
        this.videoPlayer.pause(); // Esse método ".pause()" faz o video pausar.
        this.playButton.innerText = 'Play';
    }
  }

  stop(): void {
    //
  }
}

const videoPlayer = new VideoPlayer({
    videoPlayer: document.querySelector('.video') as HTMLVideoElement,
    playButton: document.querySelector('.play') as HTMLButtonElement,
    stopButton: document.querySelector('.stop') as HTMLButtonElement,        
});

videoPlayer.startEvents();