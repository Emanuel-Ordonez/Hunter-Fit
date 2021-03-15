var reflect = require("reflect-metadata");
var comp = require("../app/navigation/workouts/workouts.component");

// A sample Jasmine test
describe("A suite Workouts Component:", function() {
    var component;

    beforeEach(function() {
        component = new comp.WorkoutsComponent();
    });

    it("Initialization", function() {
        expect(component).toBeTruthy();
    });
});