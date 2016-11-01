var balloons[];

function setup() {
  createCanvas(750, 500);
  background(0);

  for(var i = 0; i < 50; i++) {
     var x = random(0, 750);
     var y = random(0, 250);
     var d = random(20, 75);
     balloons[i] = new Balloon(x, y, d);
  }
}

function draw() {
  for(var i = 0; i < balloons.length; i++) {
    balloons[i].move();
    balloons[i].display();
  }
}

function Balloon(tempX, tempY, tempDiameter) {
  this.x = tempX;
  this.y = tempY;
  this.diameter = tempDiameter;
  this.speed = 2.5;

  this.move = function() {
    this.y += random(-this.speed, this.speed);
    this.x += random(-this.speed, this.speed);
  };

  this.display = function() {
    ellipse(this.x, this.y, this.diameter);
  };
}
