//taehoon lim
//cs099
//spring2020
//final project
class SEA{
   constructor() {
    this.sea = new NoiseLoop(5, -TWO_PI + 300, TWO_PI + 4)
    this.sea1 = new NoiseLoop(10,-TWO_PI + 350, TWO_PI + 4)
    this.sea2 = new NoiseLoop(8,-TWO_PI + 350, TWO_PI + 4)
  }
  update(a) {
    this.sea.Set(a)
    this.sea1.Set(a)
    this.sea2.Set(a)
  }
  draw() {
    push();
   translate(0,800)
    fill('blue')
    noStroke()
    circle(30,180,this.sea.Get())
    circle(90,180,this.sea1.Get())
    circle(120,180,this.sea2.Get())
    circle(140,180,this.sea.Get())
    circle(180,200,this.sea1.Get())
    circle(230,180,this.sea2.Get())
    circle(270,180,this.sea.Get())
    circle(350,180,this.sea1.Get())
    circle(450,180,this.sea2.Get())
    circle(600,180,this.sea.Get())
    circle(550,180,this.sea1.Get())
    circle(700,180,this.sea2.Get())
    circle(780,180,this.sea.Get())
    circle(900,180,this.sea1.Get())
    circle(950,180,this.sea2.Get())
    pop();
    
   

  }
}