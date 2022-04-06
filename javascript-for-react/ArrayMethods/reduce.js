/**
 * .reduce()
 * Verilen dizinin elemanları üzerinde, reducer olarak verilen callback fonksiyonu uygular.
 * Bu fonksiyonun döndürdüğü sonuç her bir döngüde hatırlanır ve bir sonraki döndürülen sonuç
 * bir öncekine eklenir. Reducer fonksiyonu dört adet parametre alır:
 * accumulator (her döngüden çıkan sonucun toplandığı değer),
 * current value (sırası gelen dizi değeri),
 * current index (sırası gelen değerin dizideki konumu),
 * source array (üzerinde reduce uygulanan dizi.)
 * .reduce() ayrıca ikinci parametre olarak başlangıç değeri alabilir.
 * Matematiksel işlemler için başlangıç olarak bir sayı girileceği gibi,
 * string, dizi vs. de girilebilir.
 */

const products = [
  { id: 1, name: 'Kalem', price: 5 },
  { id: 2, name: 'Defter', price: 10 },
  { id: 3, name: 'Silgi', price: 2 },
  { id: 4, name: 'Kalemtraş', price: 7 },
];

const sumProductPrice = products.reduce(
  (sum, product) => (sum = sum + product.price),
  0
);
console.log({ sumProductPrice });

const combineString = products.reduce(
  (combine, product) => (combine = `${combine} ${product.name}`),
  'Ürün İsimleri: '
);
console.log(combineString);

const connectArray = products.reduce(
  (connect, product) => (connect = [...connect, product.name]),
  []
);
//const connectArray = products.map((product) => product.name);
//const connectArray = products.map((product) =>`${product.name} ${product.price}`);
console.log(connectArray);
