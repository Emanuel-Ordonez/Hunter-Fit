var comp = require("../../app/start-workout/cardio-workout/cardio-workout.component");

// A sample Jasmine test
fdescribe("Cardio Workout:", function() {
    var component;

    beforeEach(function() {
        component = new comp.CardioWorkoutComponent();
    });

    it("Initialization", function() {
        expect(component).toBeTruthy();
    });

    describe("Enter Distance:", function() {
        it("should store new distance when change to distance", function() {
            //arrange
            var distanceLabel = {
                object: {
                    text: "1.2"
                }
            };
            var expectedValue = 1.2;

            //act
            component.onDistanceChange(distanceLabel);

            //assert/verify
            expect(component.getDistance()).toBe(expectedValue);

        });
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