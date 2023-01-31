// Type array

// Array<T> ou T[]

function multiply(...args: Array<number>): number {
  return args.reduce((ac, value) => ac * value, 1);
}

function conc(...args: string[]): string {
  return args.reduce((ac, value) => ac + value);
}

function toUpperCase(...args: string[]): string[] {
  return args.map((value) => value.toUpperCase());
}
// console.log(toUpperCase("a", "b", "c"));
