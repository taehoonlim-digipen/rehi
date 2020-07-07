//taehoon lim
//cs099
//spring2020
//final project


let knight1
let knight2
let referee
let sea
let noiseloop
let count = 0
const frame = 1000
let duringjump = false
let duringdown = false
let duringjump1 = false
let duringdown1 = false
let x = 1
let MAINMENU = 1
let PLAY = 2
let CREDITS = 3
let HOWTOPLAY = 4
let currentScreen = MAINMENU
let mainmenuscreen
let playscreen
let creditsscreen
let howtoplayscreen
let power = 0
let power1 = 0


let ddd = false;
let aaa = false;
let IsKnight1 = 80;
let IsKnight2 = 80;

function degree1() {
  push()
  fill('red');
  rect(knight2.x - 60, knight2.y - 150, power, 20);
  rect(knight1.x - 40, knight1.y - 150, power1, 20);
  pop()
  if (power > 110) {
    power = 0

  }
  if (power1 > 110) {
    power1 = 0
  }
  if (keyIsDown(84) && keyIsDown(75) && knight2.x > knight1.x - 260 && knight2.x < knight1.x && knight2.y > knight1.y - 10 && knight2.y < knight1.y + 10) {
    power += 2;
    power1 += 2;
  }
  if (keyIsDown(75) && keyIsDown(89) && knight1.x > knight2.x && knight1.x - 200 < knight2.x && knight2.y > knight1.y - 30 && knight2.y < knight1.y + 30) {

    power += 6

  }
  if (keyIsDown(84) && keyIsDown(76) && knight2.x > knight1.x - 220 && knight2.x < knight1.x && knight2.y > knight1.y - 30 && knight2.y < knight1.y + 30) {

    power1 += 6

  }
  if (knight1.x > knight2.x - 80 && knight1.x < knight2.x + 80) {
    power += 4
    power1 += 4

  }
  if (keyIsDown(84) && knight2.x > knight1.x - 170) {
    power += 8


  }
  if (keyIsDown(75) && knight2.x > knight1.x - 170) {

    power1 += 8
  }
}



function preload() {
  back1 = loadImage('mainmenu.jpg')
  back1sound = loadSound('Thunder Sound FX Sound.mp3')
  sword1 = loadImage('New Piskel.png')
  sword2 = loadImage('New Piskel1.png')
  shield = loadImage('defence.png')
  swordS = loadSound('sword sound1.mp3')
  swordS1 = loadSound('Shooting Star Sound.mp3')
  thrust = loadSound('thrusting.mp3')
  referee1 = loadImage('referee.png')
  background0 = loadImage('thunder.gif')
  shieldS = loadSound('Tick Sound.mp3')
  ultimateS = loadSound('ultimateS.mp3')
  defense = loadSound('defenseS.mp3')
  heatS = loadSound('Realistic Punch Sound.mp3')
  blueknightbody = loadImage('blueknight.gif')
  redknightbody = loadImage('redknight.gif')
  blueknightwalk = loadImage('bluknightwalk.png')
  redknightwalk = loadImage('redknightwalk.png')
  SWORDS = loadSound('Woosh Sound.mp3')
  ULTIMATE1 = loadImage('ultimateskill.png')
  ULTIMATE2 = loadImage('ultimateskill1.png')
  ultimit = loadImage('ultimit.gif')
}

function mouseReleased() {
  if (mouseX > 950 && mouseX < 1000 && mouseY > 0 && mouseY < 50) {
    knight1.x = width / 2 + 300
    knight1.y = height / 2 + 60
    knight2.x = width / 2 - 300
    knight2.y = height / 2 + 60
    power = 0
    power1 = 0
  }



}



function setup() {
  createCanvas(1000, 1000);
  knight1 = new KNIGHT1();
  knight2 = new KNIGHT2();
  sea = new SEA();
  noiseloop = new NoiseLoop();
  referee = new Referee();
  mainmenuscreen = new MAINMENUSCREEN();
  creditsscreen = new CREDITSSCREEN();
  howtoplayscreen = new HOWTOPLAYSCREEN();
  back1sound.loop();
  back1sound.setVolume(0.3);


}

function draw() {

  switch (currentScreen) {
    case MAINMENU:
      mainmenuscreen.update();
      mainmenuscreen.draw();

      break;

    case PLAY:
      back1sound.stop()
      background(background0);
      push();
      fill('#a26632')
      rect(100, 600, 800, 100);
      pop();
      square(950, 0, 50);
      text('R', 960, 40);
      textSize(50);
      let p = float(count % frame) / frame
      count++
      sea.update(p * TWO_PI);
      sea.draw();

      knight1.draw();
      knight1.update();
      degree1()

      knight2.draw();
      knight2.update();


      referee.draw();
      if (keyIsDown(84) && keyIsDown(75) && knight2.x > knight1.x - 260 && knight2.x < knight1.x && knight2.y > knight1.y - 10 && knight2.y < knight1.y + 10) {
        knight1.x = knight1.x + 20
        knight2.x = knight2.x - 20
        swordS.play()

      }

      if (keyIsDown(75) && keyIsDown(89) && knight1.x > knight2.x && knight1.x - 200 < knight2.x && knight2.y > knight1.y - 30 && knight2.y < knight1.y + 30) {
        knight1.x = knight1.x + 150
        knight2.x = knight2.x + 10
        defense.play()
        defense.setVolume(0.5)
      }
      if (keyIsDown(84) && keyIsDown(76) && knight2.x > knight1.x - 220 && knight2.x < knight1.x && knight2.y > knight1.y - 30 && knight2.y < knight1.y + 30) {
        knight2.x = knight2.x - 150
        knight1.x = knight1.x - 10
        defense.play()
        defense.setVolume(0.5)
      }
      if (knight1.x > knight2.x - 80 && knight1.x < knight2.x + 80) {
        knight1.x = knight1.x + 30
        knight2.x = knight2.x - 30
        heatS.play()



      }
      if (keyIsDown(84) && knight2.x > knight1.x - 170) {
        knight1.x = knight1.x + 30
        knight2.x = knight2.x - 30
        heatS.play()
      }
      if (keyIsDown(75) && knight2.x > knight1.x - 170) {
        knight1.x = knight1.x + 30
        knight2.x = knight2.x - 30
        heatS.play()
      }
      if (keyIsDown(76)) {
        shieldS.play()
        shieldS.setVolume(0.1)
        image(shield, knight1.x - 133, knight1.y - 70, 160, 100)
        knight1.x = knight1.x + 1




      } else if (keyIsDown(LEFT_ARROW)) {
        swordS1.play()
        swordS1.setVolume(0.01)
        image(blueknightwalk, knight1.x - 10, knight1.y - 70, 200, 150)
      }
      if (keyIsDown(84)) {
        SWORDS.play()
        SWORDS.setVolume(0.1)
        image(sword1, knight2.x - 30, knight2.y - 70, 160, 100)
      }
      if (keyIsDown(75)) {
        SWORDS.play()
        SWORDS.setVolume(0.1)
        image(sword2, knight1.x - 133, knight1.y - 70, 160, 100)

      }
      if (keyIsDown(89)) {
        shieldS.play()
        shieldS.setVolume(0.1)
        image(shield, knight2.x - 30, knight2.y - 70, 160, 100)
        knight2.x = knight2.x - 1

      } else if (keyIsDown(68)) {
        swordS1.play()
        swordS1.setVolume(0.01)
        image(redknightwalk, knight2.x - 190, knight2.y - 70, 200, 150)

      }



      if (knight2.y > -100000000 && knight2.y < 300 && knight2.x > -11111110 && knight2.x < 1000) {
        text('Blue Win!', 350, 300);
        text('Click R to Restart', 300, 400);




      }
      if (knight2.x > 0 && knight2.x < 60) {
        knight2.y = knight2.y - 1000
        if (knight2.y > -1000 && knight2.y < 800) {
          thrust.play()
        }

      }
      if (knight1.y > -10000000 && knight1.y < 300 && knight1.x > -111111 && knight1.x < 1000) {
        text('Red Win!', 350, 300);
        text('Click R to Restart', 300, 400);


      }
      if (knight1.x > 940 && knight1.x < 1000) {
        knight1.y = knight1.y + -1000
        if (knight1.y > -1000 && knight1.y < 800) {
          thrust.play();
        }
      }
      break;

    case CREDITS:
      creditsscreen.update();
      creditsscreen.draw();
      break;


    case HOWTOPLAY:
      howtoplayscreen.update();
      howtoplayscreen.draw();
      break;
  }
  
  if (ddd == true) {
      IsKnight1 -= 1;
     if (IsKnight1 <+30 && IsKnight1>0){
      image(ultimit,0,0,1100,1100)
    }
    
    if (IsKnight1 < -10) {
    image(ULTIMATE1, 0, 0, 900, 900)
    }
     if (IsKnight1 < -80) {
        ddd = false;
      IsKnight1 = 80;
        }
   
      }
  
  if (aaa == true) {
      IsKnight2 -= 1;
    if (IsKnight2 <+30 && IsKnight2>0){
      image(ultimit,0,0,1100,1100)
    }
    
    if (IsKnight2 < -10) {
    image(ULTIMATE2, 100, 0, 900, 900)
      
    }
    if (IsKnight2 < -80) {
        aaa = false;
      IsKnight2 = 80;
        }
      }

}



function keyPressed() {
  if (keyCode == 38 && knight1.y == knight1.minHeight - 40) {
    duringjump = true
  }
  if (keyCode == 87 && knight2.y == knight2.minHeight - 40) {
    duringjump1 = true
  }
  if (keyCode == DOWN_ARROW && keyCode == LEFT_ARROW) {


  }
  if (keyCode == 82 && power > 100 && ddd == false) {
    ddd = true;
    push()
    strokeWeight(20)
    stroke('white')
    line(0, 500, 1000, 500)
    pop()
    power = 0
    ultimateS.play()
    ultimateS.setVolume(0.8)
    knight1.x = 930

  }
  if (keyCode == 74 && power1 > 100 && aaa == false) {
    aaa = true;
    push()
    strokeWeight(20)
    stroke('white')
    line(0, 500, 1000, 500)
    pop()
    power1 = 0
    ultimateS.play()
    ultimateS.setVolume(0.8)
    knight2.x = 70
  }

}