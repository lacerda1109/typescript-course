// Type Assertions

/**
 * Como se fosse uma conversão de um tipo para outro. Usamos de diferentes formas
 * para dizer ao TypeScript que sabemos que algo realmente existe (não tendo a
 * possibilidade de ser null, por exemplo).
 * 
 * Podemos dizer que é usado para verificar uma condição que o desenvolvedor supõe
 * que seja verdadeira em determinado ponto.
 */

// Conditional
const body1 = document.querySelector("body");
if (body1) body1.style.background = "red";

// Non-null assertion (!)
const body2 = document.querySelector("body")!; // O exclamação indica que o objeto não pode ser nulo.
body2.style.background = "red";

// Type assertion
const body3 = document.querySelector("body") as HTMLBodyElement;
body3.style.background = "red";

// HTML element
const input = document.querySelector(".input") as HTMLInputElement;
input.value = "Anything";
input.focus();
