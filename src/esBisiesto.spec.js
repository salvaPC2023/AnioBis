import generarFizzBuzz from "./fizzbuzz.js";

describe("EsBisiesto", () => {
  it("El 4 deberia ser anio bisiesto", () => {
    expect(Bisiesto(4)).toEqual(true);
  });
});