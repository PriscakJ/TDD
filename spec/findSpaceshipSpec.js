describe('Find Spaceship', function() {
	beforeEach(function() {
		spaceship = new Spaceship();
	});

	it('should return "Spaceship lost forever" for an empty map', function() {
		const map = "";
		expect(spaceship.findSpaceship(map)).toBe("Spaceship lost forever");
	});
	it('should return "Map incomplete" if the map is incomplete', function() {
		const map = "..........\n..........\n";
		expect(spaceship.findSpaceship(map)).toBe("Map incomplete");
	});
	it('should return "Map faulty" if the map has more than one X', function() {
		const map = ".X........\n..........\n..........\n..........\n..........\nX.........";
		expect(spaceship.findSpaceship(map)).toBe("Map faulty");
	});
	it('should return "Spaceship lost forever" if the map has no X', function() {
		const map = "..........\n..........\n..........\n..........\n..........\n..........";
		expect(spaceship.findSpaceship(map)).toBe("Spaceship lost forever");
	});
	it('should return spaceship coordinates if the map has one X', function() {
		const map = "X.........\n..........\n..........\n..........\n..........\n..........";
		expect(spaceship.findSpaceship(map)).toEqual([0,5]);
	});
	it('should return [0,0] if the X is in the bottom left corner', function() {
		const map = "..........\n..........\n..........\n..........\n..........\nX.........";
		expect(spaceship.findSpaceship(map)).toEqual([0,0]);
	});
});

/*
ToDoList:
1. const map="" -> "Spaceship lost forever"
2. const map="..........\n..........\n" -> "Map incomplete"
3. const map=".X........\n..........\n..........\n..........\n..........\nX........." -> "Map faulty"
4. const map="..........\n..........\n..........\n..........\n..........\n.........." -> "Spaceship lost forever"
5. const map="X.........\n..........\n..........\n..........\n..........\n.........." -> "[0,5]"
6. const map="..........\n..........\n..........\n..........\n..........\nX........." -> "[0,0]"
*/