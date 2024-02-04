let paddle;
let ball;
let bricks = [];
let darkThreshold=80;
var gameState;
let inCollision=false;
let score=0;
let hands;
let isVideoRemoved=false;
let playerImg;

let[x1,y1,z1]=[0,0,0];
let[x2,y2,z2]=[0,0,0];
//let rows = 5;
//let cols = 10;
let scaleFactor=3;
bWidth=scaleFactor*6;
bHeight=scaleFactor*2;
pixelSize=bWidth;
let vidH=540;
let vidW=720;
function preload() {
  P2P = loadFont('PressStart2P-Regular.ttf');
}

function setup() {
  frameRate(60);

  createCanvas(720, 720);
  paddle = new Paddle();
  ball = new Ball();
  capture = createCapture(VIDEO);
  capture.size(vidW, vidH);
  capture.hide();
  handpose = ml5.handpose(capture, modelReady);
  gameState='notStarted';
  textFont(P2P)
}

function draw() {
  print(bricks.length);
  bWidth=scaleFactor*6;
  bHeight=scaleFactor*2;
  pixelSize=bWidth;
  background(0);
  textSize(10);
  fill(255);
  textAlign(LEFT);
  text('Score: '+score,10,height-10)
  text('Scale: '+scaleFactor,width-120,height-10)
  if(gameState=='notStarted'){
    textAlign(CENTER);
    text('Press space bar to start.',width/2,height-150);
    text('Use LEFT and RIGHT to control the paddle.',width/2,height-135);
    text('Hold your hand in front of the camera,',width/2, height-105)
        text('move it front and back to adjust the brick size.',width/2, height-90)
  }
  if(gameState==='notStarted'){
  showVideo();
      ball.reSize();
    paddle.reSize();

  }else{
    textAlign(CENTER);
    if(bricks.length==0){
      text('YOU WIN!',width/2,height-150);
       image(playerImg,0,0);
    }
   
  }
  paddle.show();
  paddle.move();

  ball.show();
  ball.move();
  ball.checkCollision();

  for (let brick of bricks) {
    brick.show();
    if (ball.hits(brick)) {
      ball.reverse('y');
      brick.toRemove = true;
      score++;
    }
  }

  // Remove bricks that are hit
  bricks = bricks.filter(brick => !brick.toRemove);

  // Draw bricks
  for (let brick of bricks) {
    brick.show();
  }
  if(gameState=='notStarted'){
    handDist();
}
}
function handDist(){
    if (hands && hands.length > 0) {
    // if(dist(x1,y1,z1,x2,y2,z2)-fingerDist[fingerDist.length-10]>100){
    //   print("yay");
    // }
    // print(hands[0].landmarks[0])
//     let hand = hands[0];


//     let landmarks = hand.landmarks;
    [x1,y1,z1]=hands[0].landmarks[3];
    [x2,y2,z2]=hands[0].landmarks[20];
    //     fill(color(0,0,255));
    // circle(x2,y2,10);
    // fill(color(255,0,0));
    // circle(x1,y1,10);
    //print(x1,y1,x2,y2);
    

    print(dist(x1,y1,z1,x2,y2,z2));
    scaleFactor=int(dist(x1,y1,z1,x2,y2,z2)/80)+1;


  }
}
function showVideo(){
  capture.loadPixels();

  for (let y = 0; y < vidH-pixelSize; y += pixelSize+pixelSize/3-1) {
    for (let x = 0; x < vidW-pixelSize; x += pixelSize+pixelSize/3-1) {
      noStroke();
      let index = (x + y * width) * 4;
      let r = capture.pixels[index];
      let g = capture.pixels[index + 1];
      let b = capture.pixels[index + 2];
      if(r>darkThreshold){
          fill(color(r,0,0));
          rect(x, y, bWidth, bHeight-1);
      }
      if(g>darkThreshold){
          fill(color(0,g,0));

          rect(x, y+pixelSize/3,  bWidth, bHeight-1);

      }

      if(b>darkThreshold){
                  fill(color(0,0,b));

        rect(x, y+pixelSize/3*2, bWidth, bHeight-1);
      }

    }
}
}
function createBricks() {
  let brickWidth = bWidth;
  let brickHeight = bHeight;
  //capture.loadPixels();

  for (let y = 0; y < vidH-pixelSize; y += pixelSize+pixelSize/3-1) {
    for (let x = 0; x < vidW-pixelSize; x += pixelSize+pixelSize/3-1) {
      let index = (x + y * width) * 4;
      let r = capture.pixels[index];
      let g = capture.pixels[index + 1];
      let b = capture.pixels[index + 2];
      if(r>darkThreshold){
          let brickR = new Brick(x, y, brickWidth, brickHeight-1, color(r,0,0));
          bricks.push(brickR);
      }
      if(g>darkThreshold){
          let brickG = new Brick(x, y+pixelSize/3, brickWidth, brickHeight-1, color(0,g,0));
          bricks.push(brickG);
      }

      if(b>darkThreshold){
        let brickB = new Brick(x, y+pixelSize/3*2, brickWidth, brickHeight-1, color(0,0,b));
        bricks.push(brickB);
      }

    }
  }
  
  
  // for (let y = 0; i < int(vidH/bHeight); i++) {
  //   for (let j = 0; j < int(vidW/bWidth); j++) {
  //    // let brick = new Brick(j * brickWidth, i * brickHeight, brickWidth, brickHeight, color(200+random(0,55),0,0));
  //     bricks.push(brick);
  //   }
  // }
}

class Paddle {
  constructor() {
    this.width = scaleFactor*35;
    this.height = 10;
    this.x = width / 2 - this.width / 2;
    this.y = height - 40;
    this.speed = scaleFactor*2;
  }
  reSize(){
    this.width = scaleFactor*35;
    this.x = width / 2 - this.width / 2;
        this.speed = scaleFactor*2-1;


  }
  show() {
    fill(255);
    rect(this.x, this.y, this.width, this.height);
  }

  move() {
    if (keyIsDown(LEFT_ARROW) && this.x > 0) {
      this.x -= this.speed;
    }
    if (keyIsDown(RIGHT_ARROW) && this.x < width - this.width) {
      this.x += this.speed;
    }
    if(gameState==='notStarted' || gameState==='waitToRestart'){
        ball.x= this.x+this.width/2;
    }
  }
}

class Ball {
  constructor() {
    this.radius = scaleFactor*2;
    this.x = width / 2;
    this.y = height -(40+scaleFactor*2);
    this.xSpeed = 0;
    this.ySpeed = -0;
    this.state=0;
  }
  reSize(){
    this.radius=scaleFactor*2;
        this.y = height -(40+scaleFactor*2);

  }
  start(){
    this.xSpeed = 0;
    this.ySpeed = -scaleFactor*2;
    this.state=1;
  }

  show() {
    fill(255);
    ellipse(this.x, this.y, this.radius * 2, this.radius * 2);
  }

  move() {
    this.x += this.xSpeed;
    this.y += this.ySpeed; 

    // Bounce off walls
    if (this.x < 0 || this.x > width) {
      this.reverse('x');
    }
    if (this.y < 0) {
      this.reverse('y');
    }

    // Game over if ball goes below the paddle
    if (this.y > height) {
      // Reset ball position
      this.x = width / 2;
      this.y = height-(40+scaleFactor*2);
      this.xSpeed = 0;
      this.ySpeed = -0;
      this.state=0;
      gameState='waitToRestart'
      // Reset paddle position
      paddle.x = width / 2 - paddle.width / 2;
    }
  }

  checkCollision() {
    // Bounce off paddle
    if (
      this.y + this.radius > paddle.y-paddle.height/2 &&
      this.x > paddle.x &&
      this.x < paddle.x + paddle.width &&
      inCollision===false
    ) {
      inCollision=true;
      let relativeX = this.x- (paddle.x + paddle.width / 2);

      // Calculate a normalized value between -1 and 1 based on the relative position
      let normalizedX = map(relativeX, -paddle.width / 2, paddle.width / 2, -1, 1);
      // Calculate the original angle of the ball's movement
      normalizedX+=random(-0.02,0.02);
      // Use a fixed bounce angle based on the normalizedX value
      let bounceAngle = normalizedX * PI/3 ; // Adjust the angle as needed

      // Combine the original and bounce angles to determine the new direction

      // Change the direction of the ball based on the combined angle
      let speed = sqrt(sq(this.xSpeed) + sq(this.ySpeed));
      this.xSpeed = speed * sin(bounceAngle);
      this.ySpeed = -speed * cos(bounceAngle);
      //this.reverse('y');
  }
    if( this.y + this.radius > paddle.y-paddle.height*2 ){
      inCollision=false;
    }
  }
   




  hits(brick) {
    let distance = dist(this.x, this.y, brick.x + brick.width / 2, brick.y + brick.height / 2);
    return distance < this.radius + (brick.width) / 2;
  }

  reverse(axis) {
    if (axis === 'x') {
      this.xSpeed *= -1;
    } else if (axis === 'y') {
      this.ySpeed *= -1;
    }
  }
}

class Brick {
  constructor(x, y, width, height, brickColor) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.brickColor=brickColor;
    this.toRemove = false;
  }

  show() {
    fill(this.brickColor);
    rect(this.x, this.y, this.width, this.height);
  }
}
function mousePressed(){
   // createBricks();

}
  
function keyPressed(){
  if (key == ' '){ 
    
    if(gameState==='notStarted') {
      createBricks();
      ball.start();
      playerImg=capture.get(0,0,vidW,vidH);

    }else if(gameState==='waitToRestart'){
      ball.start();

    }
    if(isVideoRemoved==false){
      capture.remove();
    }
    gameState='started';
    

  }
  if (key =='r'){

  }

}

function modelReady() {
  console.log("Model ready!");
    handpose.on('predict', gotPose);

}

function gotPose(results) {
  // do something with the results
  hands = results;
};