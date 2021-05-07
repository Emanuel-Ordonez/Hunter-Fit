var tim = require("../../app/services/timer.service");

// A sample Jasmine test
describe("A suite WeightLifting Component:", function() {
    var timer;

    beforeEach(function() {
        timer = new tim.TimerService();
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