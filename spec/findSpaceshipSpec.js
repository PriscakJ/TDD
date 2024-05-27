describe('Find Spaceship', function() {
	beforeEach(function() {
		spaceship = new Spaceship();
	});

	it('should return 0 for an empty string', function() {
		expect(spaceship.add('')).toEqual(0);
	});
});
