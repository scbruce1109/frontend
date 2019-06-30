


function initAudio(){
	var audio, dir, ext, mylist;
	dir = "audio/";
	// ext = ".mp3";
	// Audio Object
	audio = new Audio();
	audio.src = dir+"Lotus.mp3";
	audio.play();
	// Event Handling
	mylist = document.getElementById("mylist");
	mylist.addEventListener("change", changeTrack);
	// Functions
	function changeTrack(event){
		audio.src = dir+event.target.value;
	    audio.play();
	}
}



window.addEventListener("load", initAudio);
