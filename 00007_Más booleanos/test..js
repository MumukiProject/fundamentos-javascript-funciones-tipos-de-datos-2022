describe("", () => {
  it("esNumeroDeLaSuerte(2) es verdadero", () => {
      assert(esNumeroDeLaSuerte(2));
  })
  it("esNumeroDeLaSuerte(4) es verdadero", () => {
      assert(esNumeroDeLaSuerte(4));
  })
  it("esNumeroDeLaSuerte(6) es verdadero", () => {
      assert(esNumeroDeLaSuerte(6));
  })
  it("esNumeroDeLaSuerte(8) es verdadero", () => {
      assert(esNumeroDeLaSuerte(8));
  })
  it("esNumeroDeLaSuerte(9) es verdadero", () => {
      assert(esNumeroDeLaSuerte(9));
  })
  it("esNumeroDeLaSuerte(81) es verdadero", () => {
      assert(esNumeroDeLaSuerte(81));
  })
  it("esNumeroDeLaSuerte(12456) es verdadero", () => {
      assert(esNumeroDeLaSuerte(12456));
  })
  it("esNumeroDeLaSuerte(3003) es verdadero", () => {
      assert(esNumeroDeLaSuerte(3003));
  })
  it("esNumeroDeLaSuerte es verdadero si es multiplo de 2", () => {
      assert(esNumeroDeLaSuerte(4654));
  })
  it("esNumeroDeLaSuerte es falso si no es multiplo de 2 ni de 3", () => {
      assert(!esNumeroDeLaSuerte(49));
  })
  it("esNumeroDeLaSuerte es falso si no es positivo", () => {
      assert(!esNumeroDeLaSuerte(-3));
  })
  it("esNumeroDeLaSuerte(-4) es falso", () => {
      assert(!esNumeroDeLaSuerte(-4));
  })
  it("esNumeroDeLaSuerte(7) es falso", () => {
      assert(!esNumeroDeLaSuerte(7));
  })
  it("esNumeroDeLaSuerte(15) es falso", () => {
      assert(!esNumeroDeLaSuerte(15));
  })
})

// errores comunes, ver reglas de asistencia
describe("esNumeroDeLaSuerte", () => {
  let numeros = [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  
  it("no tiene los paréntesis mal puestos", () => {
    assert.notDeepEqual(numeros.filter(esNumeroDeLaSuerte), [ 0, 2, 3, 4, 6, 8, 9, 10, 12, 14, 16, 18, 20 ]);  
  })
  
  it("no tiene los argumentos de esMultiploDe invertidos", () => {
    assert.notDeepEqual(numeros.filter(esNumeroDeLaSuerte), [ 1, 2, 3 ]);  
  })
  
  it("no tiene los argumentos invertidos y los paréntesis mal puestos", () => {
    assert.notDeepEqual(numeros.filter(esNumeroDeLaSuerte), [ -1, 1, 2, 3 ]);  
  })
})
