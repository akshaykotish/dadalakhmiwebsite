      // 2. This code loads the IFrame Player API code asynchronously.
      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      var isplaying  = false;
      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      var player;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          height: '390',
          width: '640',
          videoId: 'JRN4JX4Xv8g',
          host: 'https://www.youtube.com',
          playerVars: {
            'playsinline': 1,
            'autoplay': 1,
            'controls': 0,
          },
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
      }

      // 4. The API will call this function when the video player is ready.
      function onPlayerReady(event) {
        if(player != undefined){
            //event.target.setVolume(100);
            event.target.playVideo();
        }
      }

      // 5. The API calls this function when the player's state changes.
      //    The function indicates that when playing a video (state=1),
      //    the player should play for six seconds and then stop.
      var done = false;
      function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING && !done) {
          //setTimeout(stopVideo, 6000);
        }
      }

      function stopVideo() {
        if(player != undefined){
            player.stopVideo();
            isplaying = false;
        }
      }

      function pauseVideo() {
        if(player != undefined){
            player.pauseVideo();
            isplaying = false;
        }
      }


      function PlayNow(){
        if(player != undefined){
        isplaying = true;
        player.playVideo();
        }
      }

      function LetsPlayTrailer(){
        if(player != undefined){
            if(isplaying == false)
            {
                player.loadVideoById("JRN4JX4Xv8g", 0, "large");
                PlayNow();
                isPlaying = false;
            }
        } 
        else{
            setTimeout(PlayNow, 8000);
        }
      }



      