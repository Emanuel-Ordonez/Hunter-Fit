var reflect = require("reflect-metadata");
var comp = require("../app/navigation/home/home.component");

// A sample Jasmine test
describe("A suite Home Component:", function() {
    var component;

    beforeEach(function() {
        component = new comp.HomeComponent();
    });

    it("Initialization", function() {
        expect(component).toBeTruthy();
    });
});