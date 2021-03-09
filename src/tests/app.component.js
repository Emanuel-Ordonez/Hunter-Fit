var reflect = require("reflect-metadata");
var component = require("../app/app.component");

// A sample Jasmine test
describe("A suite", function() {

    var appComponent;

    beforeEach(function() {
        appComponent = new component.AppComponent();
    });

    it("Verify default message", function() {
        expect(appComponent.message).toBe("hello");
        //expect(<componentname>.<functionName>).toBe(<comparingStatement>);
    });

    it("Something", function() {
        expect("hello").toBe("hello");
    });
});