var reflect = require("reflect-metadata");
var comp = require("../app/app.component");

// A sample Jasmine test
describe("A suite App Component:", function() {
    var component;

    beforeEach(function() {
        component = new comp.AppComponent();
    });

    it("Initialization", function() {
        expect(component).toBeTruthy();
    });
});