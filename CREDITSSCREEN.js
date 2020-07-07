//taehoon lim
//cs099
//spring2020
//final project
class CREDITSSCREEN{
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
    textSize(40)
    text('made by Taehoon Lim',200,600)
    text('help:Ludy Castan,',200,700)
    text('현진Kim',300,750)
  }
  
  
}