// Type tuple

/**
 * O tipo tupla não existe no JavaScript puro, pois é um tipo
 * exclusivo do TypeScript, que por sua vez, usará um array
 * comum do JavaScript.
 */

// A tupla seria um array com tipos e tamanho fixos.

const clientData1: [number, string] = [1, "Luiz"];

clientData1[0] = 100;
console.log(clientData1);

const clientData2: [number, string, string?] = [1, "Luiz", "Almeida"];
const clientData3: [number, string, ...string[]] = [1, "Luiz", "Almeida"]; // Dessa forma liberamos mais elementos
const clientData4: readonly [number, string] = [1, "Luiz"]; // O readonly torna a tupla imutável
