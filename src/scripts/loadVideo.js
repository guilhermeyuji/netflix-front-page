function loadVideo(videoId, targetElement) {
  if (!document.querySelector('script[src*="https://www.youtube.com/iframe_api"]')) {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  }

  let player;

  function onPlayerReady(event) {
    console.log('play');
    console.log(event.target);
    // player.seekTo(5);
    // player.playVideo();
    // window.player = player;
  }

  function onPlayerStateChange(event) {
    setInterval(() => {
      if (player.getCurrentTime() > (player.getDuration() - 30)) {
        event.target.seekTo(12);
      }
    }, 1000);

    if (event.data === 1) {
      player.i.classList.add('playing');
    } else {
      player.i.classList.remove('playing');
    }
  }

  function onYouTubeIframeAPIReady() {
    // eslint-disable-next-line
    player = new YT.Player(targetElement, {
      videoId,
      events: {
        onReady: onPlayerReady,
        onStateChange: onPlayerStateChange,
      },
      playerVars: {
        autoplay: 1,
        mute: 1,
        start: 12,
      },
    });
  }

  window.onload = () => {
    onYouTubeIframeAPIReady();
  };
}

export default loadVideo;
