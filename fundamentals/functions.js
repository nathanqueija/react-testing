const sum = (a, b) => a + b;
const sumAsync = (a, b) =>
  new Promise((res, rej) => {
    setTimeout(() => res(a + b), 1000);
  });
const subtract = (a, b) => a - b;

module.exports = {
  sum,
  subtract,
  sumAsync
};
