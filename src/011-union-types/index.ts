// Union types

/**
 * Quando dizemos ao TypeScript que algo pode ter mais de um tipo.
 * Funciona como se fosse um "ou", e é utilizado através da barra vertical: |.
 */

function addOrConcat(a: number | string, b: number | string) {
  if (typeof a === "number" && typeof b === "number") return a + b;
  return `${a}${b}`;
}

console.log(addOrConcat(20, "30"));
