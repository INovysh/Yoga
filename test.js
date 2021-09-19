let assert = require("chai").assert;
describe("Timer", function () {
  it("Возвращает ли функция объект", function () {
    assert.typeOf(getTimeRemaining(), "object");
  });
});

describe("Total sum", function () {
  it("Первоначальная сумма равна нулю", function () {
    assert.equal(0, 0);
  });
});
