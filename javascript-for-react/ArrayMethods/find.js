/**
 * .find()
    Dizide bir eleman bulmaya yarar. Eleman bulunduğu anda 
    arama işlemi durdurur ve bulunan elemanı döndürür. 
    Aynı koşulları sağlayan başka bir eleman olması durumunda 
    ilk bulunan eleman döndürülür.
 */

const products = [
  { id: 1, name: 'Kalem', price: 5 },
  { id: 2, name: 'Defter', price: 10 },
  { id: 3, name: 'Silgi', price: 2 },
  { id: 4, name: 'Kalemtraş', price: 7 },
];

// products.find((product) => product.price > 5);
console.log(
  products.find((product) => {
    return product.price > 5;
  })
);
