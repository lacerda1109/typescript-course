// Intersection types

/**
 * É tratado como uma interseção. Pode ser interpretado como "e", e
 * é utilizado através do "&".
 */

type hasName = { name: string };
type hasLastName = { lastName: string };
type hasAge = { age: number };

type Person = hasName | hasLastName | hasAge; // Pode ter qualquer um dos 3 tipos.
const person: Person = {
  name: "Gabriel",
  age: 24,
};
console.log(person);

type FullPerson = hasName & hasLastName & hasAge; // Obrigatoriamente deve ter todos os tipos.
const fullPerson: FullPerson = {
  name: "Gabriel",
  lastName: "Lacerda",
  age: 24,
};
console.log(fullPerson);

// Module mode
export {};
