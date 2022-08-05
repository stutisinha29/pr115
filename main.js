function preload(){

}

function setup(){
canvas= createCanvas(600,350);
canvas.position(350,200); 
video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
} 

function modelLoaded(){
    console.log('PoseNet Is Initialized');
}

function gotPoses(results){
    if(results.length > 0 ){
        console.log(results);
        nose_x= results[0].pose.nose.x - 15 ;
        nose_y= results[0].pose.nose.y - 15 ;
        console.log("nose x = "+ results[0].pose.nose.x );
        console.log("nose y = "+ results[0].pose.nose.y);

    }
}
