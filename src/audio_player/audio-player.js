var audio, playbtn, mutebtn, seekslider, volumeslider, seeking, seekto, currentTimeText, durationTimeText;
function initAudioPlayer() {
  audio = new Audio();
  audio.src = "audio/lotus.mp3";
  audio.loop = true;
  audio.play();
  // Set object references
  playbtn = document.getElementById("playpausebtn");
  mutebtn = document.getElementById('mutebtn');
  seekslider = document.getElementById("seekslider");
  volumeslider = document.getElementById('volumeslider');
  currentTimeText = document.getElementById('currentTimeText');
  durationTimeText = document.getElementById('durationTimeText');
  // Add Event Handling
  playbtn.addEventListener("click", playPause);
  mutebtn.addEventListener("click", mute);
  seekslider.addEventListener("mousedown", function(event){ seeking=true; seek(event); });
  seekslider.addEventListener("mousemove", function(event){ seek(event); });
  seekslider.addEventListener("mouseup", function() {seeking=false});
  volumeslider.addEventListener("mousemove", setVolume);
  audio.addEventListener("timeupdate", function(){ seekTimeUpdate(); });
  // Functions
  function playPause() {
    if (audio.paused) {
      audio.play();
      console.log('agghgh')
    } else {
      audio.pause();
      console.log('blurrp')
    }
  }
  function mute() {
    if (audio.muted) {
      audio.muted = false;
    } else {
      audio.muted = true;
    }
  }
  /////////////////////////////////////////// Seek Function
  function seek(event) {
    if (seeking){
      seekslider.value = event.clientX - seekslider.offsetLeft;
      seekto = audio.duration * (seekslider.value / 100);
      audio.currentTime = seekto;
    }
  }
  //////////////////////////////////////////// Volume adjust function

  function setVolume() {
    audio.volume = volumeslider.value / 100;
  }
  //////////////////////////////////////////////////// Seek time update function
  function seekTimeUpdate(){
    var nt = audio.currentTime * (100 / audio.duration);
    seekslider.value = nt;
    var curmins = Math.floor(audio.currentTime / 60);
    var cursecs = Math.floor(audio.currentTime - curmins * 60);
    var durmins = Math.floor(audio.duration / 60);
	  var dursecs = Math.floor(audio.duration - durmins * 60);
		if(cursecs < 10){ cursecs = "0"+cursecs; }
	  if(dursecs < 10){ dursecs = "0"+dursecs; }
	  if(curmins < 10){ curmins = "0"+curmins; }
	  if(durmins < 10){ durmins = "0"+durmins; }
		currentTimeText.innerHTML = curmins+":"+cursecs;
	  durationTimeText.innerHTML = durmins+":"+dursecs;
  }

}


window.addEventListener("load", initAudioPlayer);
