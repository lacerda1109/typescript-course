// Type Annotation

/**
 * Type Annotation é quando dizemos para o TypeScript que uma variável é
 * de determinado tipo, através de ":".
 */

// Basic types
let name: string = "Gabriel";
let age: number = 24;
let adult: boolean = true;
let sym: symbol = Symbol("any-symbol");

// Arrays
let numberArray: Array<number> = [0, 1, 2];
let numberArray2: number[] = [0, 1, 2];
let stringArray: Array<string> = ["a", "b", "c"];
let stringArray2: string[] = ["a", "b", "c"];

// Objects
let person: {
  name: string;
  age: number;
  adult?: boolean; // O sinal de interrogação indica que o valor naquela chave é opcional.
} = {
  name: "Luiz",
  age: 30,
};

// Functions
function sum(x: number, y: number): number {
  return x + y;
}

export {};
/**
 * The statement above indicates that the file is an ES module. In TypeScript, any file
 * containing a top-level import or export is considered to be a module.
 */
