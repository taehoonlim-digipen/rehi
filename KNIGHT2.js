
//taehoon lim
//cs099
//spring2020
//final project
class KNIGHT2 {
  constructor() {
    this.x = width / 2 - 300;
    this.y = height / 2 + 60;
    this.speed = 4;
    this.D = 80;
    this.F = 80;
    this.direction = 1;
    this.velocity = 10;
    this.minHeight = 600
    this.MaxHeight = 800

  }


  draw() {
    push();
    fill('red')
    circle(this.x, this.y - 70, 80)
    pop();
    push()
    fill('white')
    circle(this.x + 20, this.y - 80, 30)
    pop()
    push()
    fill('black')
    circle(this.x + 30, this.y - 80, 10)
    pop()
    image(redknightbody, this.x - 90, this.y - 120, 180, 190)
  }
  update() {
    if (duringjump1) {
      this.up()
    }
    if (this.y == 400) {
      duringjump1 = false
      duringdown1 = true
    }
    if (duringdown1) {
      this.callDown()
    }
    if (keyIsDown(65)) {
      if (this.x - this.D / 2 >= 0) {
        this.x -= this.speed;
      }
    }
    if (keyIsDown(68)) {
      if (this.x + this.D / 2 <= 1000) {
        this.x += this.speed;
      }
    }

  }
  callDown() {
    if (this.y <= this.minHeight) {
      this.down()
    }
    if (this.y == this.minHeight - 40) {
      duringdown1 = false
    }
  }
  up() {
    this.y = this.y - (this.direction * this.velocity)
  }
  down() {
    this.y = this.y + (this.direction * this.velocity)
  }
}