music_1="";
music_2="";

function preload(){
music_1=loadSound("music.mp3");
music_2=loadSound("music2.mp3");
}

function setup(){
    canvas=createCanvas(400, 300);
    canvas.position(480, 260);
    video=createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 0, 0, 400, 300);
}

function play(){
    
}