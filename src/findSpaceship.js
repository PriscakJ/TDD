// StringCalculator.js
function Spaceship() { }
Spaceship.prototype.findSpaceship = function (map) {
	const rows = map.split('\n');

	for (let y = 0; y < rows.length; y++) {
		for (let x = 0; x < rows[y].length; x++) {
			if (rows[y][x] === 'X') {
				return [x, rows.length - y - 1];
			}
		}
	}

	return "Spaceship lost forever";
};
