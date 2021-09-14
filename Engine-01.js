/**
 * E:\Workspace\eclipse-workspace\HTYML CSS\Pong2\version-01\mainPage.html
 */

function mainLoop(engine){
	
	
	
	if(engine.game.paused == false){
		//console.log(engine.display.canvas.width);
		
		engine.display.drawOrder(engine.game);
		engine.game.gameLogic(engine.display);
		//engine.game.ballLogic();

	}else if(engine.game.paused){
		//console.log(engine.game.paused)
		if(engine.game.start == true){
			engine.display.drawOrder(engine.game);
			engine.game.gameLogic(engine.display);
		}
		else{
			
			void 0;
		}

		}

	setTimeout(function(){
		requestAnimationFrame(
				function(){mainLoop(engine)});
		} , engine.frames); 
		
	}
	
	

class Engine{
	constructor(game, display, control, framesPerSec = Math.floor(1000/30)){
		
		this.frames = framesPerSec;
		this.game = game;
		this.game.frames = this.frames
		this.display = display;
		this.control = control;
		//console.log(mainLoop(this));
		//const mainLoop = function (){mainLoop(this);};
		//console.log(this);
		mainLoop(this);
		//this.loop = 
		//requestAnimationFrame(mainLoop(this));
		
		
		
		
	}
	
	
}
//const engine = instance;
