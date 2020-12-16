var app = require("./index.js");

describe("Addition",function() {
  it("The function should add 2 numbers",function() {
    var value=app.AddNumber(5,6);
    expect(value).toEqual(11);
  });
});
