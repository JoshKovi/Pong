/**
 * 
 */
class Controller{
	constructor(display, game){
		this.display = display;
		this.game = game;
		

	}
	
	handler(event, game){
		this.game = game;
		this.event = event;
		if (this.event.type == 'keyup'){
			this.keyCodeCheck(event);
		}else if(this.event.type === 'keydown'){
			this.keyCodeCheck(event);
		} else if(this.event.type == 'resize'){
			//Only use this for game object resizing and repositioning
			
			
		}
		
	}
	
	keyCodeCheck(){
		if(this.game.paused == false){
		
			
			switch(this.event.keyCode){

			case 8:
				//backspace
				this.event.type == 'keyup'? 
						void 0 : void 0;
				break;
			case 9:
				//tab
				this.event.type == 'keyup'? 
						void 0 : void 0;
				break;
			case 13:
				//enter
				this.event.type == 'keyup'? 
						void 0 : void 0;
				break;
			case 16:
				//shift
				this.event.type == 'keyup'? 
						void 0 : void 0;
				break;
			case 17:
				//ctrl
				this.event.type == 'keyup'? 
						void 0 : void 0;
				break;
			case 18:
				//alt
				this.event.type == 'keyup'? 
						void 0 : void 0;
				break;
			case 19:
				//pause/break
				this.event.type == 'keyup'? 
						void 0 : void 0;
				break;
			case 20:
				//caps lock
				this.event.type == 'keyup'? 
						void 0 : void 0;
				break;
			case 27:
				//escape
				this.event.type == 'keyup'? 
						void 0 : this.game.pausedState(this.event.keyCode);
				break;
			case 32:
				//Space Bar
				this.game.paused ?
						this.game.reload(): void 0;
				break;
				
			case 33:
				//page up
				this.event.type == 'keyup'? 
						void 0 : void 0;
				break;
			case 34:
				//page down
				this.event.type == 'keyup'? 
						void 0 : void 0;
				break;
			case 35:
				//end
				this.event.type == 'keyup'? 
						void 0 : void 0;
				break;
			case 36:
				//home
				this.event.type == 'keyup'? 
						void 0 : void 0;
				break;
	/*		case 37:
				//left arrow
				this.event.type == 'keyup'? 
						void 0 : void 0;
				break;*/
			case 37:
				//left arrow
				this.event.repeat? 
						this.game.paddleLogic(-this.game.paddle.dx*1.15) : this.game.paddleLogic(-this.game.paddle.dx);
				break;
				
				
			case 38:
				//up arrow
				this.event.type == 'keyup'? 
						void 0 : void 0;
				break;
			case 39:
				//right arrow

				this.event.repeat? 
						this.game.paddleLogic(this.game.paddle.dx*1.15) : this.game.paddleLogic(this.game.paddle.dx);
						//this.game.paddleLogic() : this.game.paddleLogic(this.game.paddle.dx/3);
				break;
			case 40:
				//down arrow
				this.event.type == 'keyup'? 
						void 0 : void 0;
				break;
			case 45:
				//insert
				this.event.type == 'keyup'? 
						void 0 : void 0;
				break;
			case 46:
				//delete
				this.event.type == 'keyup'? 
						void 0 : void 0;
				break;
			case 48:
				//0 
				this.event.type == 'keyup'? 
						void 0 : void 0;
				break;
			case 49:
				//1
				this.event.type == 'keyup'? 
						void 0 : void 0;
				break;
			case 50:
				//2
				this.event.type == 'keyup'? 
						void 0 : void 0;
				break;
			case 51:
				//3
				this.event.type == 'keyup'? 
						void 0 : void 0;
				break;
			case 52:
				//4
				this.event.type == 'keyup'? 
						void 0 : void 0;
				break;
			case 53:
				//5
				this.event.type == 'keyup'? 
						void 0 : void 0;
				break;
			case 54:
				//6
				this.event.type == 'keyup'? 
						void 0 : void 0;
				break;
			case 55:
				//7 
				this.event.type == 'keyup'? 
						void 0 : void 0;
				break;
			case 56:
				//8
				this.event.type == 'keyup'? 
						void 0 : void 0;
				break;
			case 57:
				//9
				this.event.type == 'keyup'? 
						void 0 : void 0;
				break;
			case 65:
				//a
				this.event.type == 'keyup'? 
						void 0 : void 0;
				break;
			case 66:
				//b
				this.event.type == 'keyup'? 
						void 0 : void 0;
				break;
			case 67:
				//c
				this.event.type == 'keyup'? 
						void 0 : void 0;
				break;
			case 68:
				//d
				this.event.type == 'keyup'? 
						void 0 : void 0;
				break;
			case 69:
				//e
				this.event.type == 'keyup'? 
						void 0 : void 0;
				break;
			case 70:
				//f
				this.event.type == 'keyup'? 
						void 0 : void 0;
				break;
			case 71:
				//g
				this.event.type == 'keyup'? 
						void 0 : void 0;
				break;
			case 72:
				//h
				this.event.type == 'keyup'? 
						void 0 : void 0;
				break;
			case 73:
				//i
				this.event.type == 'keyup'? 
						void 0 : void 0;
				break;
			case 74:
				//j
				this.event.type == 'keyup'? 
						void 0 : void 0;
				break;
			case 75:
				//k
				this.event.type == 'keyup'? 
						void 0 : void 0;
				break;
			case 76:
				//l
				this.event.type == 'keyup'? 
						void 0 : void 0;
				break;
			case 77:
				//m
				this.event.type == 'keyup'? 
						void 0 : void 0;
				break;
			case 78:
				//n
				this.event.type == 'keyup'? 
						void 0 : void 0;
				break;
			case 79:
				//o
				this.event.type == 'keyup'? 
						void 0 : void 0;
				break;
			case 80:
				//p
				this.event.type == 'keyup'? 
						void 0 : void 0;
				break;
			case 81:
				//q
				this.event.type == 'keyup'? 
						void 0 : void 0;
				break;
			case 82:
				//r
				this.event.type == 'keyup'? 
						void 0 : void 0;
				break;
			case 83:
				//s
				this.event.type == 'keyup'? 
						void 0 : void 0;
				break;
			case 84:
				//t
				this.event.type == 'keyup'? 
						void 0 : void 0;
				break;
			case 85:
				//u
				this.event.type == 'keyup'? 
						void 0 : void 0;
				break;
			case 86:
				//v
				this.event.type == 'keyup'? 
						void 0 : void 0;
				break;
			case 87:
				//w
				this.event.type == 'keyup'? 
						void 0 : void 0;
				break;
			case 88:
				//x 
				this.event.type == 'keyup'? 
						void 0 : void 0;
				break;
			case 89:
				//y
				this.event.type == 'keyup'? 
						void 0 : void 0;
				break;
			case 90:
				//2
				this.event.type == 'keyup'? 
						void 0 : void 0;
				break;
			case 91:
				//left window key
				this.event.type == 'keyup'? 
						void 0 : void 0;
				break;
			case 92:
				//right window key
				this.event.type == 'keyup'? 
						void 0 : void 0;
				break;
			case 93:
				//select key
				this.event.type == 'keyup'? 
						void 0 : void 0;
				break;
			case 96:
				//num 0
				this.event.type == 'keyup'? 
						void 0 : void 0;
				break;
			case 97:
				//num 1 
				this.event.type == 'keyup'? 
						void 0 : void 0;
				break;
			case 98:
				//num 2
				this.event.type == 'keyup'? 
						void 0 : void 0;
				break;
			case 99:
				//num 3
				this.event.type == 'keyup'? 
						void 0 : void 0;
				break;
			case 99:
				//num 4
				this.event.type == 'keyup'? 
						void 0 : void 0;
				break;
			case 100:
				//num 4
				this.event.type == 'keyup'? 
						void 0 : void 0;
				break;
			case 101:
				//num 5
				this.event.type == 'keyup'? 
						void 0 : void 0;
				break;
			case 102:
				//num 6
				this.event.type == 'keyup'? 
						void 0 : void 0;
				break;
			case 103:
				//num 7
				this.event.type == 'keyup'? 
						void 0 : void 0;
				break;
			case 104:
				//num 8
				this.event.type == 'keyup'? 
						void 0 : void 0;
				break;
			case 105:
				//num 9
				this.event.type == 'keyup'? 
						void 0 : void 0;
				break;
			case 106:
				//multiply
				this.event.type == 'keyup'? 
						void 0 : void 0;
				break;
			case 107:
				//add
				this.event.type == 'keyup'? 
						void 0 : void 0;
				break;
			case 109:
				//subtract
				this.event.type == 'keyup'? 
						void 0 : void 0;
				break;
			case 110:
				//decimal point
				this.event.type == 'keyup'? 
						void 0 : void 0;
				break;
			case 111:
				//divide /
				this.event.type == 'keyup'? 
						void 0 : void 0;
				break;
			case 112:
				//f1
				this.event.type == 'keyup'? 
						void 0 : void 0;
				break;
			case 113:
				//f2
				this.event.type == 'keyup'? 
						void 0 : void 0;
				break;
			case 114:
				//f3
				this.event.type == 'keyup'? 
						void 0 : void 0;
				break;
			case 115:
				//f4
				this.event.type == 'keyup'? 
						void 0 : void 0;
				break;
			case 116:
				//f5
				this.event.type == 'keyup'? 
						void 0 : void 0;
				break;
			case 117:
				//f6
				this.event.type == 'keyup'? 
						void 0 : void 0;
				break;
			case 118:
				//f7
				this.event.type == 'keyup'? 
						void 0 : void 0;
				break;
			case 119:
				//f8
				this.event.type == 'keyup'? 
						void 0 : void 0;
				break;
			case 120:
				//f9
				this.event.type == 'keyup'? 
						void 0 : void 0;
				break;
			case 121:
				//f10
				this.event.type == 'keyup'? 
						void 0 : void 0;
				break;
			case 122:
				//f11
				this.event.type == 'keyup'? 
						void 0 : void 0;
				break;
			case 123:
				//f12
				this.event.type == 'keyup'? 
						void 0 : void 0;
				break;
			case 144:
				//numlock
				this.event.type == 'keyup'? 
						void 0 : void 0;
				break;
			case 145:
				//scroll lock
				this.event.type == 'keyup'? 
						void 0 : void 0;
				break;
			case 186:
				//semi colon ;
				this.event.type == 'keyup'? 
						void 0 : void 0;
				break;
			case 187:
				//equals sign =
				this.event.type == 'keyup'? 
						void 0 : void 0;
				break;
			case 188:
				//comma ,
				this.event.type == 'keyup'? 
						void 0 : void 0;
				break;
			case 189:
				//dash -
				this.event.type == 'keyup'? 
						void 0 : void 0;
				break;
			case 190:
				//period .
				this.event.type == 'keyup'? 
						void 0 : void 0;
				break;
			case 191:
				//forward slash /
				this.event.type == 'keyup'? 
						void 0 : void 0;
				break;
			case 192:
				// grave accent `
				this.event.type == 'keyup'? 
						void 0 : void 0;
				break;
			case 219:
				// open bracket [
				this.event.type == 'keyup'? 
						void 0 : void 0;
				break;
			case 220:
				// backslash \
				this.event.type == 'keyup'? 
						void 0 : void 0;
				break;
			case 221:
				// close bracket ]
				this.event.type == 'keyup'? 
						void 0 : void 0;
				break;
			case 222:
				// single quote '
				this.event.type == 'keyup'? 
						void 0 : void 0;
				break;
			}
		}
		else if(this.game.start == true){
			//console.log(this.event.keyCode, this.game.start, this.game.paused)
			switch(this.event.keyCode){
			
			
			case 37:
				//left arrow
				
				this.game.arrow.moved == false ? 
						this.game.arrow.moved = true : this.game.arrowLogic(-2);
				break;
			case 39:
				//right arrow
				
				this.game.arrow.moved == false ? 
						this.game.arrow.moved = true : this.game.arrowLogic(2);
						//this.game.paddleLogic() : this.game.paddleLogic(this.game.paddle.dx/3);
				break;
			
			case 32:
				//Space Bar
				if(this.event.type == 'keydown'){
					this.game.pausedState(this.event.keyCode)
				}else{
					void 0;
				}
			}
		}
		
		
		
		else{
			switch(this.event.keyCode){
			case 27:
				//escape
				this.event.type == 'keyup'? 
						void 0 : this.game.pausedState(this.event.keyCode);
				break;
			
			case 32:
				//Space Bar
				
				if(this.game.paused && this.game.lives <= 0){
					location.reload()
				}else{
					this.game.reload(this.event.keyCode);
				}
				
				/*
				this.game.paused ?
						this.game.reload(): void 0;
				*/
				break;
			default:
				break;
			}
		}
		
		
		
	}
	
	
	
}