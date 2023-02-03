// Type enum

/**
 *  É uma estrutura de dados não ordenada utilizada quando queremos
 * mais de uma opção para algo.
 */

enum Colors1 {
  RED, // 0
  GREEN, // 1
  BLUE, // 2
}

console.log(Colors1.RED);
console.log(Colors1[0]);

enum Colors2 {
  RED = 10, // 10
  GREEN = 100, // 100
  BLUE = 200, // 200
}
// Usando o mesmo nome de um enum criado, eles acabam por ser unidos.
enum Colors2 {
  ROXO = "ROXO",
  VERDE = 201,
  ROSA, // Ao atribuírmos um inicializador numérico, o próximo valor recebe um número adjacente.
}

function chooseColor(color: Colors2): void {
  console.log(Colors2[color]);
}

chooseColor(Colors2.ROSA);

// Module mode
export {}
