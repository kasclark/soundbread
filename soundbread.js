function init()
{
  var preload;

  if (!createjs.Sound.initializeDefaultPlugins()) {
		document.getElementById("error").style.display = "block";
		document.getElementById("content").style.display = "none";
		return;
	}

  var assetsPath = "./audio/";

  var sounds = [
    {src: "crickets.mp3", id: 'crickets'}
  ];

  createjs.Sound.addEventListener("fileload", createjs.proxy(soundLoaded, this));
  createjs.Sound.registerSounds(sounds, assetsPath);
}

function soundLoaded(event) {
  // Sound is loaded, show button
  var div = document.getElementById(event.id);
  // do stuff when loaded
}

function stop() {
	if (preload != null) {
		preload.close();
	}
	createjs.Sound.stop();
}

function playSound(target) {
	//Play the sound: play (src, interrupt, delay, offset, loop, volume, pan)
	var instance = createjs.Sound.play(target.id);
	if (instance == null || instance.playState == createjs.Sound.PLAY_FAILED) {
		return;
	}
	target.className = "gridBox active";
	instance.addEventListener("complete", function (instance) {
		target.className = "gridBox";
	});
}
