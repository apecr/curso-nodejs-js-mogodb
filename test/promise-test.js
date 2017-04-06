"use strict";

const get = require("../promises/promise");
const assert = require("assert");

describe("Using promises", () => {
    it("Should not get the url", (done) => {
        get("story.json").then(ok, ko);
        done();
    });
    it("Should get the url", (done) => {
        get("https://github.com/googlesamples/web-fundamentals/" +
            "blob/gh-pages/fundamentals/getting-started/primers" +
            "/story.json").then(ok, ko);
        done();
    });
});

var ok = function (response) {
    console.log("Success! ", response);
    assert.ok(response, "We have done  the job");
}

var ko = function (error) {
    console.error("Failed! ", error);
    assert.ok(false, "Error getting the url");
}