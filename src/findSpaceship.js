// StringCalculator.js
function Spaceship() { }
Spaceship.prototype.findSpaceship = function (map) {
	const rows = map.split('\n');
	const expectedWidth = 10;
    const expectedHeight = 6;

	// check if map empty and map size valid
	if (map === "" || rows.length !== expectedHeight || !rows.every(row => row.length === expectedWidth)) {
        return map === "" ? "Spaceship lost forever" : "Map incomplete";
    }
	// loop though the map to find X
	let spaceshipCoordinates = null;

    for (let y = 0; y < rows.length; y++) {
        for (let x = 0; x < rows[y].length; x++) {
            if (rows[y][x] === 'X') {
                if (spaceshipCoordinates === null) {
                    spaceshipCoordinates = [x, rows.length - y - 1];
                } else {
                    // Found a second 'X', map is faulty
                    return "Map faulty";
                }
            }
        }
    }

	return spaceshipCoordinates ? spaceshipCoordinates : "Spaceship lost forever";
};
