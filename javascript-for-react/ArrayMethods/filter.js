/**
 * .filter()
 *Verilen dizi elemanlarına, girilen callback fonksiyonu uygular,
 *false döndüren sonuçları eler ve true döndüren sonuçlarla yeni bir dizi oluşturur.
 */

const products = [
  { id: 1, name: 'Kalem', price: 5 },
  { id: 2, name: 'Defter', price: 10 },
  { id: 3, name: 'Silgi', price: 2 },
  { id: 4, name: 'Kalemtraş', price: 7 },
];

console.log(products.filter((product) => product.price > 5));

console.log(
  products
    .filter((product) => product.price > 5)
    .map((product) => `${product.name} fiyatı 5'ten büyüktür`)
);

console.log(
  products.filter((product) =>
    product.name.toLowerCase().includes('kalem'.toLowerCase())
  )
);

/**
 * .filter() ve .map() her ikisi de yeni bir dizi döndürdüğünden,
 * birbirine eklenerek tek satırda kullanılabilir.
 */
