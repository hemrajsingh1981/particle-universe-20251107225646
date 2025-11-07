let particles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  // Initialize particles
  for (let i = 0; i < 150; i++) {
    particles.push(new Particle(random(width), random(height)));
  }
}

function draw() {
  background(30, 30, 30); // Dark gray background

  for (let particle of particles) {
    particle.update();
    particle.show();
  }
}

class Particle {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = p5.Vector.random2D();
    this.vel.mult(random(0.5, 3));
    this.size = random(4, 10);
    this.color = color(random(150, 255), random(150, 255), random(150, 255), 180);
  }

  update() {
    this.pos.add(this.vel);
    this.vel.mult(0.995); // Slow down over time

    // Bounce off edges
    if (this.pos.x < 0 || this.pos.x > width) {
      this.vel.x *= -1;
    }
    if (this.pos.y < 0 || this.pos.y > height) {
      this.vel.y *= -1;
    }
  }

  show() {
    noStroke();
    fill(this.color);
    ellipse(this.pos.x, this.pos.y, this.size, this.size);
  }
}

// Adjust canvas size if window is resized
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
