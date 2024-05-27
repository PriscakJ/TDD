// StringCalculator.js
function Spaceship() { }
Spaceship.prototype.findSpaceship = function (map) {
	const rows = map.split('\n');
	const expectedWidth = 10;
    const expectedHeight = 6;

	// check if map empty
	if(map === ""){ 
		return "Spaceship lost forever"; 
	}

    // validate map size
    if (rows.length !== expectedHeight || !rows.every(row => row.length === expectedWidth)) {
        return "Map incomplete";
    }
	// loop though the map to find X
	let X_coord = [];
	for (let y = 0; y < rows.length; y++) {
		for (let x = 0; x < rows[y].length; x++) {
			if (rows[y][x] === 'X') {
				if(X_coord.length = 0){
					X_coord = [x, rows.length - y - 1];
				}else {
					return "Map faulty";
				}
			}
		}
	}

	return "Spaceship lost forever";
};
