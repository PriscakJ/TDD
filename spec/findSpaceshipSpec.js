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