/**
 * .includes()
 * Bir string içinde, verilen ifadenin olup olmadığını kontrol eder, küçük/büyük harf duyarlıdır.
 */

const name1 = 'ieg';
console.log(name1.includes('i')); //true
console.log(name1.includes('E')); //false
console.log(name1.toLowerCase().includes('ieg'));
const newName1 = name1.toLowerCase();
console.log(newName1);

const products = [
  { id: 1, name: 'Kalem', price: 5 },
  { id: 2, name: 'Defter', price: 10 },
  { id: 3, name: 'Silgi', price: 2 },
  { id: 4, name: 'Kalemtraş', price: 7 },
];

console.log(products.filter((product) => product.name.includes('Kalem')));

console.log(
  products.filter((product) => product.name.toLowerCase().includes('Kalem'))
);

console.log(products.filter((product) => product.name.includes('kalem')));

console.log(
  products.filter((product) => product.name.toLowerCase().includes('kalem'))
);

const otherProduct = 'KALEM';

console.log(
  products.filter((product) =>
    product.name.toLowerCase().includes(otherProduct.toLowerCase())
  )
);
