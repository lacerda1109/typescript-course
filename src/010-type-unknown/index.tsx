// Type unknown

/**
 * É como um "any", porém mais "seguro", e na hierarquia, vem antes do "any".
 */

let x: any;

x = 100;
x = "Teste";
x = "15";

console.log(x + 15);

/**
 * Como vimos acima, o "any" diz que a variável pode ser qualquer coisa, o que torna
 * possível a operação indesejável que executamos. O unknown funciona como uma espécie
 * de "any", porém seu comportamento indica que a variável é desconhecida, e após
 * atribuírmos um valor à ela, ele recebe aquele tipo por inferência.
 */

let y: unknown;

y = 100;
y = "Teste";
y = "15";

console.log(typeof y);
if (typeof y === "number") console.log(y + 15);

/**
 * Em execução, funciona da mesma maneira, porém a diferença é o erro apontado em
 * desenvolvimento, o que nos influencia a lidar com a situação com mais cautela
 * (no caso fizemos uma verificação de tipo).
 */
