class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
      this.title = createElement('h2');
      this.reset = createButton('Reset');
    this.text = createElement('h2');
    this.radio = createRadio();
    this.radio.option('blue');
    this.radio.option('white');
    this.radio.option('red');
    

  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
    this.text.hide();
  }

  display(){
    this.title.html("Swimming Competition");
    this.title.position(displayWidth/2 - 50, 0);
    this.radio.style('margin-left', '50%');
    this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
      this.button.position(displayWidth / 2 + 30, displayHeight / 2);
      this.reset.position(displayWidth-75, 25, 10, 100);
      this.radio.position(100,500);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      
      this.greeting.html("Hello " + player.name)
      this.text.html("Welcome to the Swimming Competition.<br> You have journey miles, maybe even countries to get to this point.<br> This is the competition of a lifetime and ...");
      this.greeting.position(displayWidth/2 - 70, displayHeight/4);
      this.text.position(displayWidth/4, displayHeight/2+100);
      if(this.radio.selected()==='blue'){
        //console.log("blue");
        player.look='blue';
      }else if(this.radio.selected()==='red'){
        //console.log('red');
        player.look='red';
      }else{
        //console.log('white');
        player.look='white';
      }
      swimmer1.visible=false;
      swimmer2.visible=false;
      swimmer3.visible=false;
      this.radio.hide();
      player.update();
      player.updateCount(playerCount);
    });

      this.reset.mousePressed(() => {
          game.update(0);
          player.updateCount(0);
          Player.updateWinner(0);

      });

      
  }
}
