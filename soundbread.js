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
      {src: "crickets.mp3", id: 'crickets'},
      {src: "downer.mp3", id: 'downer'},
      {src: "rimshot.mp3", id: 'rimshot'},
      {src: "gaaay.mp3", id: 'gaaay'},
      {src: "shame.mp3"}
  ];

  createjs.Sound.addEventListener("fileload", createjs.proxy(soundLoaded, this));
  createjs.Sound.registerSounds(sounds, assetsPath);

  $(".soundItem").click(function() {
    var self = this;
  	//Play the sound: play (src, interrupt, delay, offset, loop, volume, pan)
  	var instance = createjs.Sound.play($(self).attr('id'));
  	if (instance == null || instance.playState == createjs.Sound.PLAY_FAILED) {
  		return;
  	}
  	$(self).addClass("active");
  	instance.addEventListener("complete", function (instance) {
  		$(self).removeClass("active");
  	});
  });

  // Simple keybinding
  $(document).keydown(function(e){
    keyCode = '' + e.which;
    $('.soundItem[data-keycode="' + keyCode + '"]').click();
  });
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
