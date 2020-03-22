describe("", function() {
  it("extraer(100, 20) == 80", function() {
    assert.equal(extraer(100, 20), 80);
  });
  
  it("extraer(100, 10) == 90", function() {
    assert.equal(extraer(100, 10), 90);
  });
  
  it("extraer(100, 0) == 100", function() {
    assert.equal(extraer(100, 0), 100);
  });
  
  it("extraer(100, 100) == 0", function() {
    assert.equal(extraer(100, 100), 0);
  });
  
  it("extraer(100, 120) == 0", function() {
    assert.equal(extraer(100, 120), 0);
  });
  
  it("extraer(100, 220) == 0", function() {
    assert.equal(extraer(100, 220), 0);
  });
});