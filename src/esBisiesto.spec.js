import Bisiesto from "./esBisiesto.js";

describe("Es Bisiesto", () => {
  it("", () => {
    expect(Bisiesto()).toEqual(false);
  });
  it("El 2000 es un anio bisiesto", () => {
    expect(Bisiesto(2000)).toEqual(true);
  });
  it("El 1999 no es un anio bisiesto", () => {
    expect(Bisiesto(1999)).toEqual(false);
  });
  it("Un numero dividible entre 100 no es un anio bisiesto", () => {
    expect(Bisiesto(1700)).toEqual(false);
  });
  it("Un numero dividible entre 4 es un anio bisiesto", () => {
    expect(Bisiesto(2008)).toEqual(true);
  });
  it("Un numero dividible entre 4 es un anio bisiesto", () => {
    expect(Bisiesto(2017)).toEqual(false);
  });
});