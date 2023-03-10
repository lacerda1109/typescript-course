// Structural typing (tipagem estruturada)

/**
 * Basicamente significa que a compatibilidade e a equivalência de tipo são
 * determinadas pela estrutura ou definição real do tipo e não por outras
 * características, como nome ou local de declaração.
 */

type VerifyUserFn = (user: User, sentValue: User) => boolean;
type User = { username: string; password: string };

const verifyUser: VerifyUserFn = (user, sentValue) => {
  return (
    user.username === sentValue.username && user.password === sentValue.password
  );
};

const bdUser = { username: "joao", password: "123456" };
const sentUser = { username: "joao", password: "123456", permissions: "" };

/**
 * Com isso, abaixo o TypeScript se importa apenas se os tipos são equivalentes,
 * como é o caso dos parâmetros passados, onde "bdUser" e "sentUser" não são
 * explicitamente do tipo "User", o que nos permite por exemplo ter a chave
 * "permissions" em um deles.
 */
const loggedIn = verifyUser(bdUser, sentUser);

console.log(loggedIn);

/**
 * "Um sistema de tipo estrutural é uma classe principal de sistemas de tipo em que
 * a compatibilidade e a equivalência de tipo são determinadas pela estrutura ou
 * definição real do tipo e não por outras características, como seu nome ou local
 * de declaração." - Wikipédia
 */
