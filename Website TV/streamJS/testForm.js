let category = []

const genre = []

const trendItems = []


const render = {}


//Where Everything Starts
headerFunctions()
eventListener()


const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);


var player = videojs('my-video');

// Ensure the spinner is shown initially before the video is played
player.on('ready', function() {
        player.addClass('vjs-waiting');
});
player.on("canplay", myfun);
function myfun() {
    document.querySelector(".video-js .vjs-big-play-button").style.display = "block"
}



player.on("playing", function () {
    document.querySelector(".video-js .vjs-big-play-button").style.display = "none"
})



download(urlParams.get('fileID'))



















