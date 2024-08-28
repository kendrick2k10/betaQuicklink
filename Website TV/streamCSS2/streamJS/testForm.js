let category = []

const genre = []

const trendItems = []


const render = {}


//Where Everything Starts
headerFunctions()
eventListener()




const player = videojs('my-video');
player.on('ready', function() {
    document.querySelector(".vjs-big-play-button").onclick = evt => {
        evt.currentTarget.style.display = "none"
        player.addClass('vjs-waiting');
        download(urlParams.get('fileID').trim())

        
    }
    
})


// Ensure the spinner is shown initially before the video is played
/*player.on('ready', function() {
        document
        
        
});


.video-js .vjs-big-play-button {
    display: none;
  }
*/

/*
player.on("canplay", myfun);
function myfun() {
    document.querySelector(".video-js .vjs-big-play-button").style.display = "block"
}

player.on("playing", function () {
    document.querySelector(".video-js .vjs-big-play-button").style.display = "none"
})
*/


//



















