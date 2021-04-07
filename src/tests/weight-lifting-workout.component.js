var reflect = require("reflect-metadata");
var comp = require("../app/start-workout/weight-lifting-workout/weight-lifting-workout.component");
var tim = require("../app/services/timer.service");

// A sample Jasmine test
describe("A suite WeightLifting Component:", function() {
    var component;
    var timer;

    beforeEach(function() {
        component = new comp.WeightLiftingWorkoutComponent();
        timer = new tim.TimerService();
    });

    it("Initialization", function() {
        expect(component).toBeTruthy();
    });

    it("Initial Timer", function() {
        expect(component.currentTime).toBe(0);
    });

    it("Format Timer with seconds", function() {
        expect(timer.formatTime(58)).toBe("00:00:58");
    });

    it("Format Timer with minutes", function() {
        expect(timer.formatTime(120)).toBe("00:02:00");
    });

    it("Format Timer with hours", function() {
        expect(timer.formatTime(3600)).toBe("01:00:00");
    });
});