var video = document.getElementById("video");
var mute = document.getElementById("volume-btn");
var volume = document.getElementById("mute-btn");
var playIcon = document.getElementById("icon-play-pause");
var progressLine = document.getElementById("progress-in");
var progress = document.getElementById("progress-out");
var time = document.getElementById("time");

// --- Video play ---

function play() {
    if (video.paused) {
        //play video
        playIcon.src="./images/pause.png";
        video.play();
    } else {
        // pause video
        playIcon.src="./images/play.png";
        video.pause();
        // clearInterval(interval);
    }



    function scrub(e) {
        const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
        video.currentTime = scrubTime;
        console.log(e);
    }
    
    let mousedown = false;
    progress.addEventListener("click", scrub);
    progress.addEventListener("mousemove", () => {
        if (mousedown) {
            scrub();
        } 
    });
    
    progress.addEventListener("mousedown", () => mousedown = true);
    progress.addEventListener("mouseup", () => mousedown = false);




    // ------> time interval function (odbrojava samo sekunde)

    // setInterval(function() {
    //     document.getElementById("time").innerHTML = video.currentTime;
    // }, 100)    --------------------------------------------------------

    
    // ------> progress frame function (radi velikom brzinom)

    // var progressLine = document.getElementById("progress-in");
    // var width = 1;
    // var interval;

    // clearInterval(interval);
    // interval = setInterval(frame, 100);

    // function frame() {
    //     if (width >= 100) {
    //         width = 1;
    //         clearInterval(interval);
    //     } else {
    //         width++;
    //         progressLine.style.width = width + "%";
    //     }

    // }  ----------------------------------------------------------



    // var time = document.getElementById("time");  -----  progres radi, ali se f kosi sa vremenom

    // video.addEventListener('timeupdate', function() {
    //     time.innerHTML = Math.floor(video.currentTime);
    //     let progressWidth = video.currentTime / video.duration * 100;
    //     progressLine.style.width = progressWidth + '%';
    // })

 
}



  // --- FF / Rew ---

function skip(value) {
    var video = document.getElementById("video");
    video.currentTime += value;
}   


// --- Audio mute ---

function audioMute() {
        video.muted = true;
        mute.style.display = "none";
        volume.style.display = "flex";
        volumeSlider.value = "0";
}

function audioVolume() {
        video.muted = false;
        volume.style.display = "none";
        mute.style.display = "flex";
        volumeSlider.value = "50";
}

var volumeSlider = document.getElementById("volumeslider");

function setVolume() {
    video.volume = volumeSlider.value / 100;
    if (volumeSlider.value == "0") {
        mute.style.display = "none";
        volume.style.display = "flex";
        video.muted = true;
    } else {
        volume.style.display = "none";
        mute.style.display = "flex";
        video.muted = false;
    }
}

volumeSlider.addEventListener("mousemove", setVolume);


// --- Dropdwn settings ---

function dropDown() {
    var dropdownMenu = document.getElementById("dropdown-menu");
    if (dropdownMenu.style.display === "none") {
        dropdownMenu.style.display = "flex";
    } else {
        dropdownMenu.style.display = "none";
    }
}



function playPoint5() { 
    video.playbackRate = 0.5;
  } 

  function playPoint75() { 
    video.playbackRate = 0.75;
  } 

  function play1Point5() { 
    video.playbackRate = 1.5;
  } 

  function play2Point() { 
    video.playbackRate = 2.0;
  } 

  function playNormal() { 
    video.playbackRate = 1.0;
  } 


// --- Fullscreen --- 

var fullScreen = document.getElementById("fullscreen");
var exitFullscreen = document.getElementById("exit-fullscreen");

var element = document.documentElement;
var tv = document.getElementById("tv");
var settingsBar = document.getElementById("move-up");
var body = document.getElementById("body");


fullScreen.addEventListener ("click", () => {
    if (element.requestFullscreen) {
        tv.requestFullscreen()
        fullScreen.style.display = "none";
        exitFullscreen.style.display = "flex";
        settingsBar.style.marginTop = "-100px";
        settingsBar.style.opacity = "50%";
        settingsBar.style.background = "black";
        tv.style.padding = "0";
    // } if (body.style.width < "430px") {
    //     settingsBar.style.marginTop = "-75px";
    // } else {
    //     settingsBar.style.marginTop = "-100px";
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



 // current time & progress

function timeUp() {
    var curTimetext = document.getElementById("current-time-text");
	var durTimetext = document.getElementById("duration-time-text");

        var newTime = video.currentTime * (100 / video.duration);
        progressLine.value = newTime;
    
        var currentMinutes = Math.floor(video.currentTime / 60);
        var currentSecundes = Math.floor(video.currentTime - currentMinutes * 60);
        var durationMinutes = Math.floor(video.duration / 60);
        var durationSecundes = Math.floor(video.duration - durationMinutes * 60);
    
        if (currentSecundes < 10) {
            curTimetext.innerHTML = currentMinutes + ":" + "0" + currentSecundes;
        }
        else curTimetext.innerHTML = currentMinutes + ":" + currentSecundes;

        if (durationSecundes < 10) {
            durTimetext.innerHTML = durationMinutes + ":" + "0" + durationSecundes;
        }
        else durTimetext.innerHTML = durationMinutes + ":" + durationSecundes;


        let progressWidth = (video.currentTime / video.duration) * 100;
        progressLine.style.width = progressWidth + "%";
}

video.addEventListener("timeupdate", timeUp);



 



