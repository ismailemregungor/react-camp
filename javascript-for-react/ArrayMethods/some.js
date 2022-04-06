/**
 * .some()
    Dizide en az bir elemanın, girilen koşulu sağlayıp 
    sağlamadığıyla ilgili true/false döndürür.
 */

const products = [
  { id: 1, name: 'Kalem', price: 5 },
  { id: 2, name: 'Defter', price: 10 },
  { id: 3, name: 'Silgi', price: 2 },
  { id: 4, name: 'Kalemtraş', price: 7 },
];

console.log(
  products.some((product) => {
    return product.price < 2;
  })
);
