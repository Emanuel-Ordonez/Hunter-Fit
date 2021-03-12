var reflect = require("reflect-metadata");
var component = require("../app/app.component");

// A sample Jasmine test
describe("A suite", function() {

    var appComponent;

    beforeEach(function() {
        appComponent = new component.AppComponent();
    });

    it("Something", function() {
        expect("hello").toBe("hello");
    });
});