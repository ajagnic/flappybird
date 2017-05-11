function Bird() {
  this.y = height/2;
  this.x = 35;
  this.gravity = 0.8;
  this.velocity = 0;
  this.lift = -20;

  this.show = function(){
    ellipse(this.x, this.y, 20, 20);
    fill(255);

  this.up = function() {
    this.velocity += this.lift;
  }

  this.update = function() {
    this.velocity += this.gravity;
    this.velocity *= 0.9;
    this.y += this.velocity;

    if(this.y > height) {
      this.y = height;
      this.velocity = 0;
    }
    if(this.y < 0) {
      this.y = 0;
      this.velocity = 0;
    }

  }
  };
};
