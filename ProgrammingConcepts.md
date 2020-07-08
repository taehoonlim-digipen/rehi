1.shapes
For two knights I  use circle and rect. Circle for head, rect for body. I  use rect for woodbridge. I  use many circle for sea
```
circle(this.x, this.y - 70, 80)
rect(100, 600, 800, 100);
```
2.colors
For blue sea and brown woodbridge and for two knights and their eyes I  use blue, brown, red, black
```
   fill('#a26632')
   rect(100, 600, 800, 100);
   push();
   fill('blue')
   circle(this.x, this.y - 70, 80)
   pop();
   push()
   fill('white')
   circle(this.x - 20, this.y - 80, 30)
   pop()
   push()
   fill('black')
   circle(this.x - 30, this.y - 80, 10)
   pop()
 ```
3.variables
I w use some variables To easily represent the positions of the knights and various weapons.
This is because multiple objects can be easily expressed through a single variable.
```
this.x = width / 2 + 300;
this.y = height / 2 + 60;
```
4.conditional statements
I use if to vary the response depending on the location and behavior of the articles.
This is important because my game is a fighting game, so it's important to react to your opponent's actions.
```
if (keyIsDown(84) && keyIsDown(75) && knight2.x > knight1.x - 260 && knight2.x < knight1.x && knight2.y > knight1.y - 10 && knight2.y < knight1.y + 10) {
        knight1.x = knight1.x + 20
        knight2.x = knight2.x - 20
        swordS.play()
      }
```
5.loops
I'm not using loops because my game don't need it

6.function
I use a function to make the character act when a certain key is pressed.
The function is important because the game will not proceed until the character moves.
```
function keyPressed() {
  if (keyCode == 38 && knight1.y == knight1.minHeight - 40) {
    duringjump = true
  }
  if (keyCode == 87 && knight2.y == knight2.minHeight - 40) {
    duringjump1 = true
  }
  }
```
7.classes
I use class for each knihgt and sea.
This is because it is easier to distinguish each object and hard coding is not possible using this.x
```
class KNIGHT1 {
  constructor() {
    this.x = width / 2 + 300;
    this.y = height / 2 + 60;
    }
    draw(){
    circle(this.x - 20, this.y - 80, 30)
    }
    update(){
     if (this.y == 400) {
      duringjump = false
      duringdown = true
    }
    }
```
8.arrays
I'm not using arrays because my game don't need it
