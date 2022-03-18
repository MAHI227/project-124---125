noseX=0;
noseY=0;
difference =0;
rightWristX=0;
leftWristY=0;

function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550,550);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw(){

background : 'linear-gradient( #3f87a6, #ebf8e1, #f69d3c);'
fill('#F90093');
stroke('#F90093');
square( noseX,noseY,100);
}

function modelLoaded(){
    console.log('poseNet Is Initialized');
}

function gotPoses(results){
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX +"noseY"+noseY);

    }
}

