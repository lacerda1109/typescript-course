// Type void

/**
 * Um retorno vazio, como alguma função por exemplo, que
 * pode executar ações, mas não tem um retorno.
 */

function withoutReturn(): void {
  console.log("Executei uma ação, e não retornei nada :)");
}

const pessoa = {
  name: "Luiz",
  lastName: "Otávio",

  showName(): void {
    console.log(this.name + " " + this.lastName);
  },
};
