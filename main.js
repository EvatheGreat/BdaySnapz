function setup(){
    canvas=createCanvas(500,450);
    canvas.position(600,300);
    video=createCapture(VIDEO);
    video.hide();
    colorrr="";
}
function draw(){
    image(video,0,0,500,450);
}
function takesnap(){
    save("BDAY🎂PIC.png")
}