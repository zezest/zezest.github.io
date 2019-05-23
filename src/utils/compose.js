const compose2 = (f, g) => (...args) => f(g(...args))
const compose = (...fns) => fns.reduce(compose2);
const pipe = (...fns) => fns.reduceRight(compose2);

export {
  compose,
  pipe,
}