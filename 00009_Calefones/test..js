describe("", function() {
  it("cuantoCarga(10, 5)", function() {
    assert.equal(cuantoCarga(10, 5), 5);
  });
  it("cuantoCarga(15, 5)", function() {
    assert.equal(cuantoCarga(15, 5), 5);
  });
  it("cuantoCarga(20, 5)", function() {
    assert.equal(cuantoCarga(20, 5), 5);
  });
  it("cuantoCarga(20, 2)", function() {
    assert.equal(cuantoCarga(20, 2), 2);
  });
  it("cuantoCarga(22, 5)", function() {
    assert.equal(cuantoCarga(22, 5), 3);
  });
  it("cuantoCarga(24, 2)", function() {
    assert.equal(cuantoCarga(24, 2), 1);
  });
  it("cuantoCarga(25, 5)", function() {
    assert.equal(cuantoCarga(25, 5), 0);
  });
});

