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
    }

    // current time

    setInterval(function() {
        document.getElementById("time").innerHTML = video.currentTime;
    }, 100)

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

fullScreen.addEventListener ("click", () => {
    if (element.requestFullscreen) {
        tv.requestFullscreen()
        fullScreen.style.display = "none";
        exitFullscreen.style.display = "flex";
    }
})

exitFullscreen.addEventListener ("click", () => {
    if (document.exitFullscreen) {
        document.exitFullscreen()
        exitFullscreen.style.display = "none";
        fullScreen.style.display = "flex";
    }
})



// --- progres bar ---

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