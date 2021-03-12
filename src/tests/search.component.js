var reflect = require("reflect-metadata");
var comp = require("../app/navigation/search/search.component");

// A sample Jasmine test
describe("A suite Search Component:", function() {
    var component;

    beforeEach(function() {
        component = new comp.SearchComponent();
    });

    it("Initialization", function() {
        expect(component).toBeTruthy();
    });
});