/**
 * .map()
 * Verilen dizi elemanlarına, girilen callback fonksiyonu
 * uygular ve elde edilen sonuçlarla yeni bir dizi oluşturur.
 */

const products = [
  { id: 1, name: 'Kalem', price: 5 },
  { id: 2, name: 'Defter', price: 10 },
  { id: 3, name: 'Silgi', price: 2 },
  { id: 4, name: 'Kalemtraş', price: 7 },
];

//js örneği
/**
* console.log(
  products.map((product) => `${product.name} fiyatı ${product.price} liradır.`)
);
*/

const productBuilder = (product) =>
  `${product.name} fiyatı ${product.price} liradır.`;

console.log(products.map(productBuilder));

//react örneği

function showProduct({ productList }) {
  return productList.map((product, index) => (
    <li key={product.id}>
      {product.name} fiyatı {product.price} liradır.
    </li>
  ));
}
