// Type null and undefined

// null - É utilizado como "nulo".
function squareOf(x: any) {
  if (typeof x === "number") return x * x;
  return null;
}

const squareOfTwoNumber = squareOf(2);

/**
 *  Verificamos se é igual a null e não usamos a negação, pois se o valor for 0,
 * (!squareOfTwoNumber) seria igual a "true".
 */
if (squareOfTwoNumber === null) {
  console.log("Invalid.");
} else {
  console.log(squareOfTwoNumber);
}



// undefined - É utilizado pela linguagem para indicar que algo não foi definido.
function createPerson(
  firstName: string, // Parâmetros da função
  lastName?: string
): {
  firstName: string; // Type annotation
  lastName?: string; // (string ou undefined)
} {
  return {
    firstName, // Retorno da função
    lastName,
  };
}
