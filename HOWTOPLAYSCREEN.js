//taehoon lim
//cs099
//spring2020
//final project
class HOWTOPLAYSCREEN{
  constructor(){
     this.mainmenu = new Button(width/2,height/2+400,"Close")
  }
  update(){
    
    if(this.mainmenu.DidClickButton()){
      currentScreen = MAINMENU;
      
    }
  }
  draw(){
    this.mainmenu.DrawButton();
    textSize(30)
    text('redknight: A=<-, W=jump, D=->, T=and attack',0,500)
    text(' Y=defense, R=ultimate skill',0,530)
    text('blueknight: Left_Arrow=<-, K=attack, Right_Arrow = ->',0,580 )
    text('Up_Arrow=jump, L=defense, J=ultimate skill', 0,610)
  
    
  }

  
}