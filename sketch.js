var bird;
var pipes = [];

function setup() {
  createCanvas(400, 600);
  bird = new Bird();
  pipes.push(new Pipes());
};

function draw() {
  background(0);
  bird.show();
  bird.update();

  if(frameCount % 60 === 0) {
    pipes.push(new Pipes());
  }

  for (i=pipes.length-1; i >= 0; i--) {
    pipes[i].show();
    pipes[i].update();

    if(pipes[i].hits(bird)) {
      location.reload();
    }
    if(pipes[i].x < 0) {
      pipes.splice(i, 1);
    }
  }
};

function keyPressed() {
  if (key == ' ') {
    bird.up();
  }
}
