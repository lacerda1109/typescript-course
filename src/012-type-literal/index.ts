// Type literal

/**
 * É um conceito que não tem no TypeScript, e consiste basicamente em
 * utilizar valores como tipos. Pode-se dizer que a principal diferença
 * está no armazenamento do dado por uma variável (let) ou constante (const).
 */

let x = 10;
// Aqui é inferido que x é so tipo number por conta do valor atribuído.

const y = 10;
/**
 *  No caso da constante, onde o valor não pode ser alterado, podemos dizer
 * que o tipo de x não é simplesmente number, mas sim LITERALMENTE 10.
 */

let z1: 100 = 100;
/**
 * Com isso, podemos tipar da maneira acima, onde a variável z é literalmente
 * 100.
 */

let z2 = 100 as const;
/**
 * Porém, por ser mais recomendado utilizar const ao invés de tipos literais,
 * podemos fazer da maneira acima.
 */

const person = {
  name: "Gabriel" as const,
  lastName: "Lacerda",
};

function chooseColor(color: "red" | "green" | "blue") { // O parãmetro é dos tipos literais listados ao lado.
  return color;
}
console.log(chooseColor("green"));
