// Type any

// any representa uma falta de tipo (ou qualquer tipo).

/**
 * Não colocar um tipo para determinado valor (e/ou parâmetro e etc), o TypeScript
 * declara o tipo implicitamente como any. Se mesmo assim quisermos prosseguir, em
 * último caso devemos colocar explicitamente o tipo ": any".
 */
function showMessage(msg) {
  return msg;
}
