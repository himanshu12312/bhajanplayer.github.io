console.log("Play buttons found:", document.getElementsByClassName('itemplay'));


let songIndex = 0;
let audioElement = new Audio('songs/5.mp3');
let masterplay=document.getElementById('masterplay');
let mastersongname= document.getElementById('mastersongname');
let progressbar=document.getElementById('progressbar');




let songs=[
    {songname:"nand k anand bhayo", filepath:"songs/1.mp3"},
    {songname:"Damodara Ashtakam", filepath:"songs/2.mp3"},
    {songname:"Krishnashtakam", filepath:"songs/3.mp3"},
    {songname:"Madhurashtakam", filepath:"songs/4.mp3"},
    {songname:"Shree Hari Stotram", filepath:"songs/5.mp3"},
    {songname:"Vishnu Shatpadi Stotram", filepath:"songs/6.mp3"}
]

masterplay.addEventListener('click', ()=> {
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.src="./svg/pause-solid-full.svg";
    }
    else{
        audioElement.pause();
        masterplay.src="./svg/play-solid-full.svg";
    }

})


audioElement.addEventListener('timeupdate', ()=>{
    let progress= parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log('progress');
    progressbar.value = progress;
})

progressbar.addEventListener('change', ()=>{
    audioElement.currentTime=(progressbar.value*audioElement.duration)/100;
})


Array.from(document.getElementsByClassName('itemplay')).forEach((element) => {
        element.addEventListener('click', (e) => {
        songIndex=parseInt(e.target.id);
        audioElement.src=`songs/${songIndex}.mp3`;
        mastersongname.innerText=songs[songIndex-1].songname;
        audioElement.currentTime=0;
        audioElement.play();
        masterplay.src="./svg/pause-solid-full.svg";
    })
})

document.getElementById('forward').addEventListener('click', ()=>{
    if(songIndex>5){
        songIndex=1;
    }
    else{
        songIndex +=1;
    }
    audioElement.src=`songs/${songIndex}.mp3`;
    mastersongname.innerText=songs[songIndex-1].songname;
    audioElement.currentTime=0;
    audioElement.play();
    masterplay.src="./svg/pause-solid-full.svg";
})

document.getElementById('back').addEventListener('click', ()=>{
    if(songIndex<=1){
        songIndex=6;
    }
    else{
        songIndex -=1;
    }
    audioElement.src=`songs/${songIndex}.mp3`;
    mastersongname.innerText=songs[songIndex-1].songname;
    audioElement.currentTime=0;
    audioElement.play();
    masterplay.src="./svg/pause-solid-full.svg";
})