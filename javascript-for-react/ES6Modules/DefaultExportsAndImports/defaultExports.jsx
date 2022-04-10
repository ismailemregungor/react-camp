export const name = 'ieg';

export const user = { name, age: 23 };

export default function sayHello(name) {
  return `Hello $(name)`;
}

// export {sayHello as default, name, user};
// export default sayHello;
