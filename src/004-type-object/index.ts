// Type object

/** O TypeScript "reclama" se utilizarmos o tipo ": object" diretamente,
 * e com isso foi usado a sugestão abaixo (do próprio typescript):
 */

const objectA: Record<string, unknown> = {
  example1: "test1",
  example2: "test2",
};

/**
 * O exemplo abaixo funciona como o de cima, porém escrito de maneira um
 * pouco mais verbosa. A última declaração chama-se "Index Signature", e
 * nos ajuda a informar que o objeto pode receber mais chaves, ou não.
 */
const objectB: {
  example1: string;
  example2: string;
  example3?: string;
  [key: string]: unknown;
} = {
  example1: "test1",
  example2: "test2",
};
