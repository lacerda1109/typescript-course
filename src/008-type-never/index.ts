// Type never

// Indica que a função ou método nunca irá retornar nada (casos: laços infinitos, ou funções que lançam erros).
function createError(): never { // Ou tipo void.
  throw new Error("Qualquer...");
}
