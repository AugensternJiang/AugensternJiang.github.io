<script src="/assets/js/APlayer.min.js"> </script>!(function() {
  var oldLoadAp = window.onload;
  window.onload = function () {
    oldLoadAp && oldLoadAp();

    new APlayer({
      container: document.getElementById('aplayer'),
      fixed: true,
      autoplay: false,
      loop: 'all',
      order: 'random',
      theme: '#b7daff',
      preload: 'none',
      audio: [
        {
          name: 'River Flows in You',
          artist: '李闰珉 (이루마)',
          url: '/Bandari - Snowdreams.mp3',
          cover: '/img/cover.jpg'
        }
      ]
    });
  }
})();
