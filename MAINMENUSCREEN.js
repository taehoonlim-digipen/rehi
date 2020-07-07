class MAINMENUSCREEN {
  constructor() {
    this.play = new Button(800, 500, "play");
    this.credits = new Button(800, 700, "credits");
    this.howtoplay = new Button(800, 900, "how to play");

  }
  update() {
    if (this.play.DidClickButton()) {
      currentScreen = PLAY
    } else if (this.credits.DidClickButton()) {
      currentScreen = CREDITS
    } else if (this.howtoplay.DidClickButton()) {
      currentScreen = HOWTOPLAY
    }

  }
  draw() {
    background(back1)
    this.play.DrawButton()
    this.credits.DrawButton()
    this.howtoplay.DrawButton()
    push()
    textSize(100)
    textStyle(BOLDITALIC)
    stroke('blue')
    strokeWeight(random(4))
    text('SHIPSHAKITROW', 100, 100)
    pop()
  }
 


}