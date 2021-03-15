var reflect = require("reflect-metadata");
var comp = require("../app/navigation/profile/profile.component");

// A sample Jasmine test
describe("A suite Profile Component:", function() {
    var component;

    beforeEach(function() {
        component = new comp.ProfileComponent();
    });

    it("Initialization", function() {
        expect(component).toBeTruthy();
    });
});