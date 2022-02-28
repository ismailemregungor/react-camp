/**
 * Shorthand Property Names (Kısayol Obje Anahtarı İsimleri)
 * Javascript objesi, key-value (anahtar-değer) sistemiyle çalışan bir veri tipidir.
 * Bir obje oluştururken, değer bir değişkenden geliyorsa,
 * anahtarın açıkça belirtilmesine gerek yoktur.
 * Değişkenin direk olarak objeye girilmesi,
 * değişkenin ismini anahtar olarak, değerini ise değer olarak atar.
 */

//js'de kullanımı
const name = 'ieg';
const age = 23;
// {name: "ieg", age:"23"}
// {name: name, age: age} =  {name, age} aynıdır.
const user1 = { name, age };
console.log(user1);

//react'te kullanımı
//Burada object destructuring var.
function counter({ initialValue, step }) {
  //Burada kısayol kullanım var.
  const [counter, setCounter] = useCounter({ initialValue, step });
  return <button onClick={setCounter}>{counter}</button>;
}
