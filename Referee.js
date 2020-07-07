//taehoon lim
//cs099
//spring2020
//final project
class Referee {
  constructor(a, b) {
    this.x = width / 2 
    this.y = height / 2 
    this.off1 = 0
    this.off2 = 0
  }
  draw() {
    var noising1 = map(noise(this.off1), 0, 1, -10, 10);
    var noising2 = map(noise(this.off2), 0, 1, -7, 7);
    image(referee1, this.x - 160, this.y - 480, 300, 300);
    push();
    fill('black');
    circle(this.x - 30, this.y - 430, 100);
    pop();
    circle(this.x - 55, this.y - 430, 40);
    circle(this.x - 5, this.y - 430, 40);
    push();
    fill('black');
    circle(this.x + noising1, this.y - 440 + noising1, 10);
    circle(this.x - 60 - noising2, this.y - 440 - noising2, 10);
    this.off1 += random(0.4);
    this.off2 += random(0.5);
    pop();
  }
}