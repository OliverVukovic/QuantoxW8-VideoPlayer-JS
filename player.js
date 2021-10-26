var video = document.getElementById("video");
var mute = document.getElementById("volume-btn");

// --- Video play ---

function play() {
    if (video.paused) {
        //play video
        document.getElementById("icon-play-pause").src="./images/pause.png";
        video.play();
    } else {
        // pause video
        document.getElementById("icon-play-pause").src="./images/play.png";
        video.pause();
        clearInterval(interval);
    }

    // current time

    setInterval(function() {
        document.getElementById("time").innerHTML = video.currentTime;
    }, 100)


    var progressLine = document.getElementById("progress-in");
    var width = 1;
    var interval;

    clearInterval(interval);
    interval = setInterval(frame, 100);

    function frame() {
        if (width >= 100) {
            width = 1;
            clearInterval(interval);
        } else {
            width++;
            progressLine.style.width = width + "%";
        }
    }

}


// --- Audio mute ---

function audioMute() {
        video.muted = true;
        document.getElementById("volume-btn").style.display = "none";
        document.getElementById("mute-btn").style.display = "flex";
}

function audioVolume() {
        video.muted = false;
        document.getElementById("mute-btn").style.display = "none";
        document.getElementById("volume-btn").style.display = "flex";
}


// --- Dropdwn settings ---

var dropdown = document.getElementById("drop-down");
var dropdownMenu = document.getElementById("dropdown-menu");

dropdown.addEventListener("click", event => {
    dropdownMenu.style.display = "flex";
});


// --- Fullscreen --- 

var fullScreen = document.getElementById("fullscreen");
var exitFullscreen = document.getElementById("exit-fullscreen");

var element = document.documentElement;
var tv = document.getElementById("tv");
var settingsBar = document.getElementById("move-up");


fullScreen.addEventListener ("click", () => {
    if (element.requestFullscreen) {
        tv.requestFullscreen()
        fullScreen.style.display = "none";
        exitFullscreen.style.display = "flex";
        settingsBar.style.marginTop = "-115px";
        settingsBar.style.opacity = "50%";
        settingsBar.style.background = "black";
    }
})

exitFullscreen.addEventListener ("click", () => {
    if (document.exitFullscreen) {
        document.exitFullscreen()
        exitFullscreen.style.display = "none";
        fullScreen.style.display = "flex";
        settingsBar.style.marginTop = "0px";
        settingsBar.style.opacity = "100%";
    }
})



// --- Progress bar ---



// function videoProgress() {
//     barSize = 80;
//     video = document.getElementById("video");
//     playButton = document.getElementById("icon-play-pause");
//     bar = document.getElementById("progress-out");
//     progressLine = document.getElementById("progress-in");

//     playButton.addEventListener("click", videoProgress, false);
//     bar.addEventListener("click", clickedBar, false);
// }

// function playOrPause() {
// 	if (!video.paused && !video.ended){
// 		video.pause();
// 		playButton.src="./images/play.png";
// 		window.clearInterval(updateBar);
// 	} else {
// 		video.play();
// 		playButton.src="./images/pause.png";
// 		updateBar = setInterval(update, 57.5);
// 	}
// }


// function update() {
// 	if (!video.ended) {
// 		var size = parseInt(video.currentTime*barSize/video.duration);
// 		progressBar.style.width = size + "%";
// 	} else {
// 		progressLine.style.width = "0%";
// 		playButton.src="./images/play.png";
// 		window.clearInterval(updateBar);
// 	}
// }

// function clickedBar(e){
// 	if(!video.paused && !video.ended){
// 		var mouseX = e.pageX-bar.offsetLeft;
// 		var newTime = mouseX*video.duration/barSize;
// 		video.currentTime = newTime;
// 		progressLine.style.width = mouseX + "px";
// 	}
// }
// window.addEventListener('load',videoProgress,false);





// var i = 0;
// function move() {
//   if (i == 0) {
//     i = 1;
//     var elem = document.getElementById("myBar");
//     var width = 0;
//     var id = setInterval(frame, 100);
//     function frame() {
//       if (width >= 100) {
//         clearInterval(id);
//         i = 0;
//       } else {
//         width++;
//         elem.style.width = width + "%";
//         elem.innerHTML = width  + "%";
//       }
//     }
//   }
// }


// <div id="myProgress">
//   <div id="myBar">0%</div>
// </div>










// --------------------------------------------------- stackoverflow

// var interval;
// var width = 1;

// function move() {
//   var elem = document.getElementById("progress-in");
 
//   clearInterval(interval);
//   interval = setInterval(frame, 100);

//   function frame() {
//     if (width >= 100) {
//       width = 1;
//       clearInterval(interval);
//     } else {
//       width++;
//       elem.style.width = width + '%';
//     }
//   }
// }

// function pause() {
//   clearInterval(interval);
// }
// #myProgress {
//   width: 100%;
//   background-color: #ddd;
// }

// #myBar {
//   width: 1%;
//   height: 30px;
//   background-color: #4CAF50;
// }
// <h1>JavaScript Progress Bar</h1>

// <div id="myProgress">
//   <div id="myBar"></div>
// </div>

// <br>
// <button onclick="move()">Play</button>
// <button onclick="pause()">Pause</button>