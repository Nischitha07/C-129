leftWristX = 0;
rightWristY = 0;
leftWristY = 0;
rightWristX = 0;
harry_potter = " ";
var_score = 0;
function preload()
{
    harry_potter = loadSound("music.mp3");
}
function setup()
{
    canvas = createCanvas(500, 400);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on('pose' , gotPoses);
}

function draw()
{
    image(video , 0 , 0 , 500 , 400);
    stroke("#ff0022");
    fill ("#ff0022");
    if(var_score > 0.2)
    {
    circle(leftWristX,leftWristY,30);
    numberLeft = Number(leftWristY);
    remove_number = floor(numberLeft);
    volume = remove_number/400;
    document.getElementById("volume2").innerHTML = "volume = " + volume;
    harry_potter.setVolume(volume);
    }
    
}

function modelLoaded()
{
    console.log("modelLoaded");

}
function play_sound()
{
    harry_potter.play();
    harry_potter.setVolume(1);
    harry_potter.rate(1);
}
function stop_sound()
{
    harry_potter.stop();
}
function gotPoses(results)
{
    if(results.length > 0)
    {
console.log(results);
var_score = results[0].pose.keypoints[9].score;
console.log(var_score);

leftWristX = results[0].pose.leftWrist.x;
leftWristY = results[0].pose.leftWrist.y;
console.log("leftWristX  " + leftWristX + "leftWristY  " + leftWristY);

rightWristX = results[0].pose.rightWrist.x;
rightWristY = results[0].pose.rightWrist.y;
console.log("rightWristX  " + rightWristX + "rightWristY  " + rightWristY);
    }
}