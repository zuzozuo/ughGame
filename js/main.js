document.addEventListener('DOMContentLoaded', function() {

	const FOREVER = window.requestAnimationFrame ||
		window.webkitRequestAnimationFrame ||
		window.mozRequestAnimationFrame ||
		window.msRequestAnimationFrame ||
		function(callback) { return setTimeout(callback, 1000 / 60); };

	let frontCanvas = document.getElementById('gameWindow');
	let frontContext = frontCanvas.getContext('2d');

	let backCanvas = document.createElement('canvas');
	let backContext = backCanvas.getContext('2d');

	let width = frontCanvas.width;
	let height = frontCanvas.height;

	backCanvas.width = width;
	backCanvas.height = height;

	let game = new Game(backContext, width, height);
	game.setup();

	
	function mainloop() {
		game.update();
		game.render();
		frontContext.drawImage(backCanvas, 0, 0);
		FOREVER(mainloop);
	}

	mainloop();

});