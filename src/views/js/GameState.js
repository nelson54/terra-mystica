(function(globals) {
	function GameState() {
		Phaser.State.call(this, arguments);
	}

	GameState.prototype = Object.create(Phaser.State.prototype);
	GameState.prototype.constructor = GameState;

	GameState.prototype.addBuildingToHex = function(building){
		var pos = hex2pos(building.pos.q, building.pos.r);
		var sprite = this.add.sprite(pos.x + 15, pos.y + 15, 'building');
		sprite.anchor.setTo();
	};

	GameState.prototype.create = function() {
		this.map = this.add.group(this, 'map', true);
		this.textures = [
			this.createHexTexture('plains-hex', '0xB5955B'),
			this.createHexTexture('swamp-hex', '0x424242'),
			this.createHexTexture('lakes-hex', '0x4BDBA9'),
			this.createHexTexture('forest-hex', '0x4D8A42'),
			this.createHexTexture('mountain-hex', '0x9E9E9E'),
			this.createHexTexture('wasteland-hex', '0xC76D6D'),
			this.createHexTexture('desert-hex', '0xC9C547'),
			this.createHexTexture('water-hex', '0xFFFFFF'),
		];

		this.hexes.forEach(this.createHex, this);
		this.buildings.list.forEach(this.addBuildingToHex, this);
		//this.addBuildingToHex({pos:{q:5,r:5}});
	};

	GameState.prototype.update = function(){

	};

	GameState.prototype.preload = function(){
		this.load.image('building','/public/images/building.png');
	};

	GameState.prototype.createHexTexture = function(key, color) {
		var size = 64;
		var radius = size/2;

		var game = this.game;
		var texture = game.add.renderTexture(size, size, key);
		var graphics = game.make.graphics(size, size);

		hexSize(radius);
		var c = hexVertices({x: radius, y: radius});
		graphics.beginFill(color);
		graphics.lineStyle(0, 0xffd900, 0);
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

		var sprite = this.add.sprite(pos.x, pos.y, texture);

		sprite.inputEnabled = true;


	};

	globals.GameState = GameState;
})(this);
