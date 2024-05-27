describe('Find Spaceship', function() {
	beforeEach(function() {
		spaceship = new Spaceship();
	});

	it('should return "Spaceship lost forever" for an empty string', function() {
		const map = "";
		expect(spaceship.findSpaceship(map)).toBe("Spaceship lost forever");
	});
});

/*
ToDoList:
const map="" -> "Spaceship lost forever"
const map="..........\n..........\n" -> "Map incomplete"
const map=".X........\n..........\n..........\n..........\n..........\nX........." -> "Map faulty"
const map="..........\n..........\n..........\n..........\n..........\n.........." -> "Spaceship lost forever"
const map="X.........\n..........\n..........\n..........\n..........\n.........." -> "[0,5]"
const map="..........\n..........\n..........\n..........\n..........\nX........." -> "[0,0]"



*/