var reflect = require("reflect-metadata");
var comp = require("../app/start-workout/start-workout.component");

// A sample Jasmine test
describe("A suite", function() {

    var component;

    beforeEach(function() {
        componenet = new comp.StartWorkoutComponent();
    });

    it("Initiation", function() {
        expect(component).toBeTruthy();
        //expect(<componentname>.<functionName>).toBe(<comparingStatement>);
    });

    it("Initiation of timer", function() {
        expect(component.currentTime).toBe(0);
        //expect(<componentname>.<functionName>).toBe(<comparingStatement>);
    });

    it("1", function() {
        expect(true).toBe(true);
    });

    it("2", function() {
        expect(true).toBe(true);
    });
    it("3", function() {
        expect(true).toBe(true);
    });
    it("4", function() {
        expect(true).toBe(true);
    });

    it("Start Time", function() {
        component.startWorkout();
        component.stopWorkout();
        expect(component.currentTime).not.toBe(0);
    });
});