var reflect = require("reflect-metadata");
var comp = require("../../app/navigation/navigation.component");

// A sample Jasmine test
describe("A suite Navigation Component:", function() {
    var component;

    beforeEach(function() {
        component = new comp.NavigationComponent();
    });

    it("Initialization", function() {
        expect(component).toBeTruthy();
    });
});