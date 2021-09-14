/**
 * 
 */
class Game{
	constructor(display){
		this.display = display;
		//Paused State variable
		this.paused = true;
		this.start = true;
		//Paddle Object creation and then addition of more properties
		this.paddle = {
				'isPaddle' : false,
				'height' : 10,
				'width' : 75,
				'color' : this.display.colors.RED,
				'count' : 1,
				
		};
		this.paddle.dx = this.display.canvas.width / (this.paddle.width/1.5);
		
		this.ball = {
				'isBall' : true,
				'x' :  this.display.canvas.width/2,
				'y' : this.display.canvas.height-30,
				'radius' : 10,
				'dx' : 0,
				'dy' : -1,
				'count' : 1,
		};
		
		//console.log(this.ball.dx, this.ball.dy)
		
		this.arrow = {
				'moved' : false,
				'width' : 10,
				'height' : 50,
		}
		this.player = {
				'lives' : 3,
				'score' : 0,
				'firstLoad' : true,
		}

		this.brick = {
				"height" : 18,
				'width' : 60,
		}
		
		this.brickScore = 40;
		this.bricksRemaining = {
				'count' : this.brickScore,
				'isBricks' : true,
		};
		
		
		
		
		
	}
	gameLogic(display, loops = 1){
		this.display = display;
		
		//This is the main game logic that will call all game methods
		//and is the only non-object or non-variable called outside
		// of the class excluding player controlled objects i.e
		// paddleLogic, pausedState and shoot
		this.paddleLogic();
		this.ballLogic();
		if(this.start == true){
			this.arrowLogic();
		}
		this.checkCollision(this.ball, this.paddle);
		this.brickLogic()	
		this.checkCollision(this.ball, this.bricksRemaining)
	}
	findColliders(object){
		//This finds four collision points of an updates them in the object
		// i.e it finds the four corners of the paddle and returns them as
		// "topLeft", "topRight", "botLeft", "botRight"
		if(object.hasOwnProperty('isBall')){
			object.topLeft = [object.x - object.radius, object.y-object.radius];
			object.topRight = [object.x + object.radius, object.y-object.radius];
			object.botLeft = [object.x - object.radius, object.y + object.radius];
			object.botRight = [object.x + object.radius, object.y + object.radius];
		}
		else{
			object.topLeft = [object.x - object.width/2, object.y];
			object.topRight = [object.x + object.width/2, object.y];
			object.botLeft = [object.x - object.width/2, object.y+ object.height];
			object.botRight = [object.x + object.width/2, object.y+ object.height];
		}
	}
	paddleLogic(direction=0){
		
		//this resets the  paddle x and y 1 time, then resets the paddle Y upon resize
		if(this.paddle.y != this.display.canvas.height - this.paddle.height -5){
			this.paddle.y = this.display.canvas.height - this.paddle.height -5;
			
			this.paddle.isPaddle == false ? this.paddle.x = this.display.canvas.width/2: void 0;
			this.paddle.isPaddle == false ? this.paddle.isPaddle = true : void 0;
		}

		// if the direction is anything other than zero this moves the paddle left or right
		if(direction != 0){
			var direction1;
			direction > 0 ?  direction1 = direction: direction1 = -direction; 
			for(let i = 1; i <= direction1; i+= direction1/5){
				console.log()
				if((this.paddle.x>=0 && direction<=0)||
						this.paddle.x <= this.display.canvas.width && direction>=0){
					this.paddle.x = this.paddle.x + direction/3;
				}else{void 0;}
			}
		}
		//this updates the colliders on the paddle
		else{
			this.findColliders(this.paddle);
			}
		
		
		
	}
	arrowLogic(direction = 0){

		
		if(this.arrow.hasOwnProperty('x') == false || this.arrow.moved == false){
			//this sets the initial value of arrow x and y, only ran once until the player
			//has moved the arrow for the first time
			this.arrow.x = this.display.canvas.width/2;
			this.arrow.y = this.ball.y - 50;
		}
		else if((this.arrow.x + direction < this.display.canvas.width/2+5 && 
				this.arrow.x + direction >= this.display.canvas.width/2) || 
				(this.arrow.x + direction > this.display.canvas.width/2-5 && 
						this.arrow.x + direction < this.display.canvas.width/2)){
			//This checks that the arrow x + direction (1) is within 5 px of the center
			// of the canvas. stopped issue of y slowly decreasing each time you crossed center
			this.arrow.y = this.ball.y -50
			this.arrow.x += direction;
			
		}
		else if(this.arrow.x + direction >= this.display.canvas.width/2 && 
				((this.arrow.y + direction  - this.ball.y)/20 < 0)){
			//if arrow x will be on right hand side and that ball dy would be negative
			this.arrow.x += direction;
			this.arrow.y += direction;
			this.ball.dx = (this.arrow.x - this.ball.x)/3.5
			this.ball.dy = (this.arrow.y - this.ball.y)/3.5
		}

		else if(this.arrow.x + direction <= this.display.canvas.width/2 &&
				((this.arrow.y - direction  - this.ball.y)/20 < 0)){
			//if arrow x is on left hand side and that ball dy would be negative
			this.arrow.x += direction;
			this.arrow.y -= direction;
			this.ball.dx = (this.arrow.x - this.ball.x)/3.5
			this.ball.dy = (this.arrow.y - this.ball.y)/3.5
		}
		else{
			//The arrow does not move if ball.dy would be positive aka down
			void 0;
		}

		

	}
	
	ballLogic(direction=0){
		if(this.start){
			//This relocates the ball upon initial resize
			this.ball.x = this.display.canvas.width/2;
			this.ball.y = this.display.canvas.height-30;
		}
		if(this.ball.y  > this.paddle.botLeft[1]){
			//Is ball y(center) below the bottom of the paddle
			
			this.player.lives--;
			this.brickScore = this.brickScore;
			this.paused = true;
			console.log()
		}

		this.findColliders(this.ball)


	}
	checkCollision(object1, object2){
		// "topLeft", "topRight", "botLeft", "botRight"
		//object1 is ball, object2 is paddle (for Now) and bricks
		for(let i = 0; i<object2.count; i++){
			//This checks that object1 is ball and object2 is paddle
			if(object2.isPaddle == true && object1.isBall == true){
				if(object1.botLeft[1]  >= object2.topLeft[1] &&
						(object1.topLeft[0] + object1.dx <= object2.topRight[0] &&
								object1.topRight[0] + object1.dx >=object2.topLeft[0])){
					//did the ball contact the paddle and amplify angle
					let amp;
					if(object1.x + object1.dx > object2.x){
						amp = (object1.x+ object1.dx)/object2.x;
					}else{
						amp = (object1.x+ object1.dx)/-object2.x;
					}
					object1.dx += 1*amp;
					object1.y -= object1.radius*2;
					object1.dy = -object1.dy;
					
				}
				else if(object1.topLeft[0]+object1.dx <= 0 || object1.topRight[0]+object1.dx >= this.display.canvas.width){
					//did the ball contact the wall
					object1.dx = -object1.dx;
				}
				else if(object1.topLeft[1] + object1.dy <= 45 + object1.radius){
					//did the ball
					object1.y += object1.radius;
					object1.dy = -object1.dy;
				}
				else{
					// The ball is moving through open space, the other code is for 
					// player launches + or - 5px of center of canvas
					if(this.ball.dy == -1 && this.start == false){
						this.ball.dy < this.ball.dx ? this.ball.dy -= 10 : this.ball.dx +=10;
					}
					else{
						this.ball.x += this.ball.dx;
						this.ball.y += this.ball.dy;
					}
					
				}				
			}
			if(object2.isBricks == true && object1.isBall == true && object2.hasOwnProperty(i)){
				if((object1.topLeft[0] + object1.dx <= object2[i].topRight[0] &&
						object1.topLeft[0]+object1.dx >= object2[i].topLeft[0]) ||
						(object1.topRight[0] + object1.dx <= object2[i].topRight[0] &&
								object1.topLeft[0]+object1.dx >= object2[i].topLeft[0])){

					
					if((object1.topLeft[1] + object1.dy >= object2[i].topRight[1] &&
							object1.topLeft[1] + object1.dy <= object2[i].botRight[1]) ||
							(object1.botLeft[1] + object1.dy >= object2[i].topRight[1] &&
									object1.botLeft[1] + object1.dy <= object2[i].botRight[1])){
						
						this.player.score +=10;
						this.brickScore--;
						console.log(this.ball.dx, object2[i], object1)
						if((object1.botLeft[0] <= object2[i].botRight[0] &&
								object1.botRight[0] <=object2[i].botLeft[0])||
								(object1.botRight[0] >= object2[i].botLeft[0] &&
										object1.botLeft[0] >=object2[i].botLeft[0])&&
										object1.y> object2[i].botLeft[1] && object1.y<object2[i].topLeft[1]){
							console.log("Here")
							this.ball.dx = -this.ball.dx;
						
						}	
						delete object2[i];
						
						this.ball.dy = -this.ball.dy;
						
					}
						
					
				}
				
				
				
			}
			
			
			else{
				//console.log(object2)
			}
			
		}
		
		
		
		
		
	}
	brickLogic(){
		
		if(this.start == true && this.player.firstLoad == true){
			let column = 0;
			var center = 1;
			for(let i = 0; i<this.brickScore; i++){
				var row = Math.floor(i/Math.floor((this.display.canvas.width-100)/(this.brick.width+10)));
				row == 0? column++: void 0;
				center = Math.floor((this.display.canvas.width+100)/(this.brick.width-10));
				//console.log(column, row, i, i%column, center);
				if(row==0){
					this.bricksRemaining[i] = {
							'topLeft' : [((i*this.brick.width)+(i*10))+50+center, (this.brick.height*row+(row*10))+80],
							'botLeft' : [(i*this.brick.width)+50+(i*10)+center, (this.brick.height*row+(row*10))+80+this.brick.height],
							'topRight' : [(i*this.brick.width)+50+(i*10)+this.brick.width+center, (this.brick.height*row+(row*10))+80],
							'botRight' : [(i*this.brick.width)+50+(i*10) +this.brick.width+center, (this.brick.height*row+(row*10))+80 + this.brick.height],
					};
				}else{
					this.bricksRemaining[i] = {
							'topLeft' : [((i%column*this.brick.width)+(i%column*10))+50+center, (this.brick.height*row+(row*10))+80],
							'botLeft' : [(i%column*this.brick.width)+50+(i%column*10)+center, (this.brick.height*row+(row*10))+80+this.brick.height],
							'topRight' : [(i%column*this.brick.width)+50+(i%column*10)+this.brick.width+center, (this.brick.height*row+(row*10))+80],
							'botRight' : [(i%column*this.brick.width)+50+(i%column*10) +this.brick.width+center, (this.brick.height*row+(row*10))+80 + this.brick.height],
					};
				}	
				
			};
		}
		
	}
	
	
	
	
	pausedState(keyCode = 0){
		//Upon pressing of the escape button this method checks
		// if the game is paused or unpaused and changes the 
		// paused variable accordingly. This is the only item
		// called outside of the mainGame Logic
		if(this.start == true && keyCode == 32){
			this.start = false;
			this.paused = false;
		}
		else if (this.paused == true && keyCode == 27){
			this.paused = false;
		}else{
			this.paused = true; 
		}
		
	}
	reload(keyCode = 0){
		if(this.player.lives<1){
			location.reload();
		}
		else if(keyCode == 32){
			//Paddle Object creation and then addition of more properties
			this.paddle = {
					'isPaddle' : false,
					'height' : 10,
					'width' : 75,
					'color' : this.display.colors.RED,
					'count' : 1,
					
			};
			this.paddle.dx = this.display.canvas.width / (this.paddle.width/1.5);
			
			this.ball = {
					'isBall' : true,
					'x' :  this.display.canvas.width/2,
					'y' : this.display.canvas.height-30,
					'radius' : 10,
					'dx' : 0,
					'dy' : -1,
					'count' : 1,
			};
			
			//console.log(this.ball.dx, this.ball.dy)
			
			this.arrow = {
					'moved' : false,
					'width' : 10,
					'height' : 50,
			};
			this.player.firstLoad = false;

			this.start = true;
			
			
		}
		
	}
	
	
	
	
}