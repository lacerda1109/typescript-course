// Type alias

/**
 * Funciona basicamente para criar um apelido para um tipo.
 */

type Age = number;

type Person = {
  name: string;
  age: Age;
  salary: number;
  favoriteColor?: RGB | CMYK;
};

type RGB = "Red" | "Green" | "Blue";
type CMYK = "Cyan" | "Magenta" | "Yellow" | "Black";

/**
 * Ao usarmos na declaração abaixo a tipagem criada com apelido, o typescript
 * nos ajuda a preencher os campos corretamente.
 */
const person: Person = {
  name: "Gabriel",
  age: 24,
  salary: 3000,
  favoriteColor: "Green",
};

/**
 * Podemos ainda utilizar a mesma funcionalidade para implementar regras em uma
 * função como no exemplo abaixo.
 */
function setFavoriteColor(person: Person, color: RGB | CMYK): Person {
  return { ...person, favoriteColor: color };
}
console.log(setFavoriteColor(person, "Black"));

// Module mode
export {};
