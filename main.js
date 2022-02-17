noseX=0;
noseY=0;
difference=0;
rightWristX=0;
leftWristX=0;

function setup(){
    video=createCapture(VIDEO);
    video.size(550, 500);
    canvas=createCanvas(600, 500);
    canvas.position(700, 100);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
    //we need a new joke...
    console.log("how do help a bug?")
    console.log("you console it")
    console.log("*cue laughter*")
    console.log("That was a very bad joke. Sorry...")
}
 
function modelLoaded(){
    console.log("poseNet Is Initialized!");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX + " and noseY = " + noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX= results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
    }
}

function draw(){
    document.getElementById("font_side").innerHTML = "Width And Height of a font will be be = " + difference + "px."
    background('#969A97')
    fill('#f90093');
    stroke('#7DF9FF');
    textSize(difference);
    text( "if you didnt know, this is some text.", noseX, noseY);
}