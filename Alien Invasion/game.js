var sprites = {
	ship : {
		sx : 0,
		sy : 0,
		w : 37,
		h : 42,
		frames : 1
	},

//	enemy : {
//		sx : 37,
//		sy : 0,
//		w : 42,
//		h : 42,
//		frames : 1
//	}
};

var startGame = function() {
	SpriteSheet.draw(Game.ctx, "ship", 100, 100, 0);
//	SpriteSheet.draw(Game.ctx, "ship", 200, 200, 0);
//	SpriteSheet.draw(Game.ctx, "enemy", 250, 250, 0);
};
window.addEventListener("load", function() {
	Game.initialize("game", sprites, startGame);
});
