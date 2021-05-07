var comp = require("../../app/start-workout/start-workout.component");

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

        it("should store when select cardio workout selected", function() {
            //arrange
            var selectedWorkoutButton = {
                object: {
                    class: "cardioWorkoutButton",
                    id: "walking",
                    text: "walking"
                }
            };

            //act
            component.selectWorkoutType(selectedWorkoutButton);

            //assert/verify
            expect(component.workoutTypeClass).toBe("cardioWorkoutButton");
            expect(component.workoutType).toBe("walking");

        });

        it("should store when select weightlifting workout selected", function() {
            //arrange
            var selectedWorkoutButton = {
                object: {
                    class: "wlWorkoutButton",
                    id: "squats",
                    text: "squats"
                }
            };

            //act
            component.selectWorkoutType(selectedWorkoutButton);

            //assert/verify
            expect(component.workoutTypeClass).toBe("wlWorkoutButton");
            expect(component.workoutType).toBe("squats");

        });

        it("should store when select extreme workout selected", function() {
            //arrange
            var selectedWorkoutButton = {
                object: {
                    class: "extremeWorkoutButton",
                    id: "extreme",
                    text: "extreme"
                }
            };

            //act
            component.selectWorkoutType(selectedWorkoutButton);

            //assert/verify
            expect(component.workoutTypeClass).toBe("extremeWorkoutButton");
            expect(component.workoutType).toBe("extreme");

        });
    });
});