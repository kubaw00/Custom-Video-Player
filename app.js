const video = document.getElementById('video')
const playBtn = document.getElementById('play')
const stopBtn = document.getElementById('stop')
const range = document.getElementById('progress')
const time = document.getElementById('timestamp')


// Play and Pause Video on click
function togglePlayPause(){
    if(video.paused){
        video.play();
    } else{
        video.pause()
    }
}

//Change Play icon to Pause 

function changePlayIcon() {
    if(video.paused){
        playBtn.innerHTML = '<i class="fa fa-play fa-2x"></i>'
        
    } else {
        playBtn.innerHTML = '<i class="fa fa-pause fa-2x"></i>'
    }
}

//Stop video
function stopMovie() {
    console.log(video.currentTime)
    video.currentTime =0;
    video.pause();
} 

//Update progress 
function updateProgress(){
    range.value = (video.currentTime/video.duration) * 100;
    // time.textContent = `00:${video.currentTime.toFixed(0) <10 ? "0"+video.currentTime.toFixed(0): video.currentTime.toFixed(0)}`;

    let mins = Math.floor(video.currentTime / 60)
    if(mins<10)
    mins = "0" + String(mins);
    let secs = Math.floor(video.currentTime % 60)
    
    if(secs<10)
    secs = "0" + String(secs);
    time.textContent = `${mins}:${secs}`
}

//Set video time to progress
function setProgress() {
    video.currentTime = (video.duration*range.value)/100;
    // video.play();
}






playBtn.addEventListener('click', togglePlayPause);
video.addEventListener('click', togglePlayPause);

video.addEventListener('pause', changePlayIcon);
video.addEventListener('play', changePlayIcon);
stopBtn.addEventListener('click', stopMovie);

video.addEventListener('timeupdate', updateProgress);





range.addEventListener('change', setProgress);


