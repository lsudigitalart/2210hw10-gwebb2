var balloons = [];

function setup() {
  createCanvas(750, 500);
  background(0);

  for(var i = 0; i < 100; i++) {
     var x = random(-750, 750);
     var y = random(0, 375);
     var w = random(100, 125);
     var h = 75;
     balloons[i] = new Balloon(x, y, w, h);
  };
}

function draw() {

background(0, 191, 243);

  for(var i = 0; i < balloons.length; i++) {
    balloons[i].move();
    balloons[i].display();
  }
}


function Balloon(tempX, tempY, tempWidth, tempHeight) {
  this.x = tempX;
  this.y = tempY;
  this.width = tempWidth;
  this.height = tempHeight;
  this.speed = 0.5;

  this.move = function() {
    this.x += this.speed;
  };

  this.display = function() {
    noStroke();
    ellipse(this.x, this.y, this.width, this.height);
  };
}
