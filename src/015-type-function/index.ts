// Type function

/**
 * Podemos criar tipos para funções. É muito útil para manter nosso código seguro
 * e inteligente, usando em callbacks, por exemplo.
 */

type MapStringsCallback = (item: string) => string; // Tipagem de função.

// function mapStrings(array: string[], callback: CallableFunction): string[] { // Note o tipo da callback usado anteriormente.
function mapStrings(array: string[], callback: MapStringsCallback): string[] { // Agora usamos a tipagem da função criada.
  let newArr: string[] = [];

  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    newArr.push(callback(item));
  }

  return newArr;
}

const abc = ["a", "b", "c"];
// const abcUppered = mapStrings(abc, function (item: any) { // Antes sem a callback tipada.
//   return item.toUpperCase();
// });
const abcUppered = mapStrings(abc, (item) => item.toUpperCase()); // Agora com a callback tipada.
console.log(abcUppered);
