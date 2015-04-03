(function(globals) {
	function GameState() {
		Phaser.State.call(this, arguments);
	}

	GameState.prototype = Object.create(Phaser.State.prototype);
	GameState.prototype.constructor = GameState;

	GameState.prototype.create = function() {
		this.textures = [
			this.createHexTexture('plains-hex', '0xB5955B'),
			this.createHexTexture('swamp-hex', '0x424242'),
			this.createHexTexture('lakes-hex', '0x4BDBA9'),
			this.createHexTexture('forest-hex', '0x4D8A42'),
			this.createHexTexture('mountain-hex', '0x9E9E9E'),
			this.createHexTexture('wasteland-hex', '0xC76D6D'),
			this.createHexTexture('desert-hex', '0xC9C547'),
			this.createHexTexture('water-hex', '0x70A3C4'),
		];

		this.hexes.forEach(this.createHex, this);	
	}

	GameState.prototype.createHexTexture = function(key, color) {
		var game = this.game;
		var texture = game.add.renderTexture(40, 40, key);
		var graphics = game.make.graphics(40, 40);

		hexSize(20);
		var c = hexVertices({x: 20, y: 20});
		graphics.beginFill(color);
		graphics.lineStyle(1, 0xffd900, 0);
		graphics.moveTo(c[0].x, c[0].y);
		graphics.lineTo(c[1].x, c[1].y);
		graphics.lineTo(c[2].x, c[2].y);
		graphics.lineTo(c[3].x, c[3].y);
		graphics.lineTo(c[4].x, c[4].y);
		graphics.lineTo(c[5].x, c[5].y);
		graphics.lineTo(c[0].x, c[0].y);
		graphics.endFill();

		texture.renderXY(graphics, 0, 0, true);

		return texture;
	}

	GameState.prototype.createHex = function(hex) {
		var pos = hex2pos(hex.q, hex.r);
		var texture = this.textures[hex.terrainType.value];

		this.add.sprite(pos.x, pos.y, texture);
	}

	globals.GameState = GameState;
})(this);
