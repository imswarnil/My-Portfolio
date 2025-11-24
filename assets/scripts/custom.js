// Hero script: video toggle only 
document.addEventListener('DOMContentLoaded', function () {
    var hero   = document.querySelector('.home-hero');
    if (!hero) return;

    var playBtn = hero.querySelector('#hero-watch-btn');
    var iframe  = hero.querySelector('#hero-video-iframe');
    var isPlaying = false;

    function setPlaying(on) {
      isPlaying = !!on;
      hero.classList.toggle('home-hero--playing', isPlaying);

      if (iframe && iframe.contentWindow) {
        try {
          var msg = {
            event: 'command',
            func: isPlaying ? 'playVideo' : 'pauseVideo',
            args: []
          };
          iframe.contentWindow.postMessage(JSON.stringify(msg), '*');
        } catch (e) {}
      }

      if (playBtn) {
        var icon = playBtn.querySelector('i');
        if (icon) {
          icon.className = isPlaying ? 'ph-bold ph-pause' : 'ph-bold ph-play';
        }
        playBtn.setAttribute('aria-label', isPlaying ? 'Pause story' : 'Watch my story');
      }
    }

    if (playBtn) {
      playBtn.addEventListener('click', function () {
        setPlaying(!isPlaying);
      });
    }
 });
// Hero script: video toggle only end 