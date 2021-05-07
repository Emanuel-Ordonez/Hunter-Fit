var comp = require("../../app/start-workout/extreme-workout/extreme-workout.component");

// A sample Jasmine test
fdescribe("Extreme Workout:", function() {
    var component;

    beforeEach(function() {
        component = new comp.ExtremeWorkoutComponent();
    });

    it("Initialization", function() {
        expect(component).toBeTruthy();
    });

    describe("Enter Notes:", function() {
        it("should notes when onTextChange called", function() {
            //arrange
            var distanceLabel = {
                object: {
                    text: "Hello"
                }
            };
            var expectedValue = "Hello";

            //act
            component.onTextChange(distanceLabel);

            //assert/verify
            expect(component.getNotes()).toBe(expectedValue);

        });
    });
});