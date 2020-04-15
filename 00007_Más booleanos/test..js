describe("numeros positivos menores a 100 y diferentes de 15", () => {
  it("esNumeroDeLaSuerte(2) es verdadero", () => {
      assert(esNumeroDeLaSuerte(2), "esNumeroDeLaSuerte(2) debería ser verdadero");
  })
  
  it("esNumeroDeLaSuerte(5) es verdadero", () => {
      assert(esNumeroDeLaSuerte(5), "esNumeroDeLaSuerte(5) debería ser verdadero");
  })
  
  it("esNumeroDeLaSuerte(9) es verdadero", () => {
      assert(esNumeroDeLaSuerte(9), "esNumeroDeLaSuerte(9) debería ser verdadero");
  })
  
  it("esNumeroDeLaSuerte(45) es verdadero", () => {
      assert(esNumeroDeLaSuerte(45), "esNumeroDeLaSuerte(45) debería ser verdadero");
  })
  
  it("esNumeroDeLaSuerte(97) es verdadero", () => {
      assert(esNumeroDeLaSuerte(97), "esNumeroDeLaSuerte(97) debería ser verdadero");
  })
})

describe("numeros negativos", () => {
  it("esNumeroDeLaSuerte(-10) es falso", () => {
      assert(!esNumeroDeLaSuerte(-10), "esNumeroDeLaSuerte(-10) debería ser falso");
  })
})

describe("el 15", () => {
  it("esNumeroDeLaSuerte(15) es falso", () => {
      assert(!esNumeroDeLaSuerte(15), "esNumeroDeLaSuerte(15) debería ser falso");
  })
})