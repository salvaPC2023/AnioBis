import Bisiesto from "./esBisiesto.js";

describe("Es Bisiesto", () => {
  it("", () => {
    expect(Bisiesto()).toEqual(false);
  });
  it("El 2000 es un anio bisiesto", () => {
    expect(Bisiesto(2000)).toEqual(true);
  });
});