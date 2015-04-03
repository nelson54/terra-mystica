(function(globals) {
	var hexSize = 32;

	function hexSizeProperty(size) {
		if(!!size)	
			hexSize = size;
		return hexSize;
	}

	function hex2pos() {
		var pos = { x: 0, y: 0 };
		var coord = qr(arguments);

		pos.x = coord.r * hexSize * 2;
		if(coord.q % 2 != 0) pos.x += hexSize;
		pos.y = coord.q * hexSize * 1.75;

		return pos;
	}

	function hexVertices(center) {
		return [0,1,2,3,4,5].map(function(i) {
			return vertex(center, i);
		});
	}

	function qr(args) {
		var coord = { q: 0, r: 0 };

		if(args.length === 2) {
			coord.q = args[0];
			coord.r = args[1];
		}
		else if(args.length === 1) {
			var val = args[0];

			coord.q = val.q || 0;
			coord.r = val.r || 0;
		}

		return coord;
	}

	function vertex(center, i) {
		var angle_deg = 60 * i + 90;
		var angle_rad = Math.PI / 180 * angle_deg;

		return {
			x: center.x + hexSize * Math.cos(angle_rad), 
			y: center.y + hexSize * Math.sin(angle_rad)
		};
	}

	globals.hexSize = hexSizeProperty;
	globals.hex2pos = hex2pos;
	globals.hexVertices = hexVertices;
})(this);
