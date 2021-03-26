var reflect = require("reflect-metadata");
const { range } = require("rxjs");
var comp = require("../app/start-workout/start-workout.component");

// A sample Jasmine test
fdescribe("Start Workout:", function() {
    var component;

    beforeEach(function() {
        component = new comp.StartWorkoutComponent();
    });

    it("Initialization", function() {
        expect(component).toBeTruthy();
    });

    describe("Select Workout type:", function() {
        it("should __ when __", function() {
            //arrange

            //act

            //assert/verify

        });

        it("should store when select workout selected", function() {
            //arrange
            var selectedWorkoutButton = {
                object: {
                    class: "wlWorkoutButton",
                    id: "squats"
                }
            };

            //act
            component.selectWorkoutType(selectedWorkoutButton);

            //assert/verify
            expect(component.workoutTypeClass).toBe("wlWorkoutButton");
            expect(component.workoutType).toBe("squats");

        });
    });
});