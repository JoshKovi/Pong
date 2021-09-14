/**
 * 
 */

window.addEventListener('load', function(){
	
	//build canvas object and context object


	//instantiate all classes
	const display = new Display();//canvas, ctx);
	const game = new Game(display);
	const control = new Controller(display, game);
	
	//window.addEventListener('resize', function(){engine.control.handler(event)});
	window.addEventListener("keyup", function(){engine.control.handler(event, engine.game)});
	window.addEventListener("keydown", function(){engine.control.handler(event, engine.game)});
	
	
	const engine = new Engine(game, display, control);
	

	
});