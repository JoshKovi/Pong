/**
 * 
 */

class Display{
	constructor(){
		this.canvas = document.getElementById('myCanvas');
		this.ctx = this.canvas.getContext('2d');
		this.colors = {
				'PURPLE' : "rgba(122,34,210,.5)",
				'RED': "rgba(232,12,12,.7)",
				"AQUA" : "rgba(12,232,232,.52)",
				'ORANGE' : "rgba(244,168,35,.95)",
				'GREEN' : "rgba(106,220,40, .95)",
				
		};
		
		
	}
	drawOrder(game){
		//This is the draw function that calls all other draw functions
		//This will be called once per loop and should be the only call 
		// to the display class excluding for colors or canvas size
		this.resize();
		this.ctx.clearRect(0,0,this.canvas.width, this.canvas.height)
		this.background();
		this.drawPaddle(game);
		this.reference(game);
		this.drawArrow(game);
		this.drawBall(game);
		this.drawLives(game.player.lives);
		this.drawScore(game.player.score);
		this.drawBricks(game.bricksRemaining, game)
	}
	resize(){
		//This resizes the canvas to width 80% of window innerWidth
		// And the height the lesser of 70% window innerHeight or
		// 75% of canvas width
		this.canvas.width = window.innerWidth *.8;
		this.canvas.width * 3/4 > window.innerHeight * .7 ? 
				this.canvas.height = window.innerHeight * .7 : 
					this.canvas.height = this.canvas.width *3/4;
	}
	background(){
		//draws the background, then a dividing line at 45 px from top
		//this is the background
		this.ctx.beginPath();
		this.ctx.rect(0,0,this.canvas.width, this.canvas.height);
		this.ctx.fillStyle = this.colors.AQUA;
		this.ctx.fill();
		this.ctx.closePath();
		//this is the line
		this.ctx.beginPath();
		this.ctx.lineWidth = 3;
		this.ctx.strokeStyle = 'black';
		this.ctx.moveTo(0,45);
		this.ctx.lineTo(this.canvas.width,45);
		this.ctx.stroke();
		this.ctx.closePath;
	}
	drawPaddle(game){
		if(game.paddle.hasOwnProperty('topLeft')){
			this.ctx.beginPath();
			this.ctx.rect(game.paddle.topLeft[0], game.paddle.topLeft[1], game.paddle.width, game.paddle.height);
			this.ctx.fillStyle = game.paddle.color;
			this.ctx.fill();
			this.ctx.closePath();
		}
		else{void 0;}
	
	}
	drawArrow(game){
		if(game.start == true && game.arrow.hasOwnProperty('x')){
			var length = -90 + (game.arrow.x - game.ball.x);
			this.ctx.beginPath();
			this.ctx.lineWidth = 3;
			this.ctx.fillStyle = this.colors.RED;
			this.ctx.arc(game.ball.x, game.ball.y+15, 80, (length)*Math.PI/180, (length)*Math.PI/180);
			this.ctx.arc(game.ball.x, game.ball.y+15, 60, (length-10)*Math.PI/180, (length+10)*Math.PI/180);
			this.ctx.arc(game.ball.x, game.ball.y+15, 60, (length-10)*Math.PI/180, (length+10)*Math.PI/180);
			this.ctx.arc(game.ball.x, game.ball.y+15, 80, (length)*Math.PI/180, (length)*Math.PI/180);
			this.ctx.fill();
			this.ctx.stroke();
			this.ctx.closePath();

			
		}
	}
	drawBall(game){
		
		for(let i = 0; i<game.ball.count;i++){
			this.ctx.beginPath();
			this.ctx.arc(game.ball.x, game.ball.y-10, game.ball.radius, 0, Math.PI*2);
			this.ctx.fillStyle = this.colors.PURPLE;
			this.ctx.fill();
			this.ctx.closePath();
		}
	}
	drawLives(lives){
		
		for(let i = 0; i<lives; i++){
			var bottomX = i == 0 ? this.canvas.width - 40: this.canvas.width -(40 +(i*20) );
			var topLeft = bottomX-10;
			var topRight = bottomX+10;
			//Draws Line to topLeft
			this.ctx.beginPath();
			this.ctx.lineWidth = 3;
			this.ctx.strokeStyle = 'black';
			this.ctx.lineJoin = "round";
			this.ctx.fillStyle = "red";
			this.ctx.moveTo(bottomX, 40);
			this.ctx.lineTo(topLeft, 25);
			this.ctx.arc(topLeft+5, 25, 5, Math.PI,0);
			this.ctx.arc(topRight-5, 25, 5, Math.PI,0);
			this.ctx.lineTo(bottomX, 40);
			this.ctx.stroke();
			this.ctx.fill();
		}	
	}	
	drawBricks(bricksRemaining, game){
		
		
		for(let i = 0; i<bricksRemaining.count; i++){
			if(bricksRemaining.hasOwnProperty(i)){
			
				this.ctx.beginPath();
				this.ctx.strokeStyle = "black";
				this.ctx.lineWidth = 6;
				this.ctx.moveTo(bricksRemaining[i]['topLeft'][0],bricksRemaining[i]['topLeft'][1]);
				this.ctx.lineTo(bricksRemaining[i]['topRight'][0],bricksRemaining[i]['topRight'][1]);
				this.ctx.lineTo(bricksRemaining[i]['botRight'][0],bricksRemaining[i]['botRight'][1]);
				this.ctx.lineTo(bricksRemaining[i]['botLeft'][0],bricksRemaining[i]['botLeft'][1]);
				this.ctx.lineTo(bricksRemaining[i]['topLeft'][0],bricksRemaining[i]['topLeft'][1]);
				this.ctx.fillStyle = this.colors.ORANGE;
				this.ctx.stroke();
				this.ctx.fill();
				this.ctx.closePath();
			}
		}
		
	}
	drawScore(score){
		this.ctx.font = '20px Arial';
		this.ctx.fillStyle = 'black';
		this.ctx.textAlign = "center";
		this.ctx.fillText("Score: "+ score, 80, 35);
		
	}
			
	
	
	
	reference(game){
		
		this.ctx.beginPath();
		this.ctx.lineWidth = 3;
		this.ctx.strokeStyle = 'green';
		this.ctx.moveTo(this.canvas.width/2, 0);
		this.ctx.lineTo(this.canvas.width/2,this.canvas.height);
		this.ctx.stroke();
		this.ctx.closePath;

		
	}
	
	
	
	
}