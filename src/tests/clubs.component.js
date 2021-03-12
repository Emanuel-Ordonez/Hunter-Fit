var reflect = require("reflect-metadata");
var comp = require("../app/navigation/clubs/clubs.component");

// A sample Jasmine test
describe("A suite Clubs Component:", function() {
    var component;

    beforeEach(function() {
        component = new comp.ClubsComponent();
    });

    it("Initialization", function() {
        expect(component).toBeTruthy();
    });
});