/**
 *Rest/Spread Operator (toparlama/yayma operatörü)
 * Yayma operatörü, bir obje veya bir diziyi alıp,
 * içindeki tüm elemanları tek tek döndürür.
 * React projelerinde en önemli kullanım amaçlarından bir tanesi,
 * immutability (değişmezlik) kuralına riayet edebilmek içindir.
 */

//js ornegi
let user = { name: 'ieg', age: 23, city: 'Ankara' };
user.city = 'Kocaeli'; // Yanlış Kullanım
/**
 * ...user = name: 'ieg', age: 23, city: 'Ankara'
 */
user = { ...user, city: 'İstanbul' };
console.log(user);
/**
 * Yukarıdaki örnekte, kullanici objesinin hafızadaki (RAM) yeri değişmedi.
 * Sadece objenin bir elemanı güncellendi. React bu şekilde yapılan değişiklikleri
 * algılayamıyor. State üzerinde yapılan bir değişikliğin algılanamaması demek,
 * rendering (ekrana yazdırma) işleminin tetiklenememesi demek.
 * Bu da değişikliğin tarayıcıda yansıtılamaması anlamına geliyor.
 */

/**
 * Oysaki bizim yapmamız gereken şey, sehir değeri güncellenmiş
 * yeni bir obje oluşturmak ve onu mevcut kullanici objesi ile yer değiştirmek.
 * Bu durumda güncellemeyi şöyle yapabiliriz:
 */
//react ornegi
INITIAL_STATE = {
  loading: false,
  errorMessage: '',
  cars: ['Mercedes', 'BMW', 'Audi'],
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_CAR':
      return { ...state, cars: [...state.cars, action.payload] };
    default:
      return state;
  }
};
console.log(INITIAL_STATE.cars);
/**
 * ADD_CAR action çağırıldığında return kelimesi ile yeni bir obje döndürüyoruz,
 * oradaki bir çift süslü parantez yeni bir objeyi ifade ediyor.
 * Bu objenin içine mevcut state'deki her şeyi dolduruyoruz,
 * ...state bunu ifade ediyor. Arkasından cars değerini güncelliyoruz.
 * Onun içine de yeni bir dizi koyuyoruz, oradaki köşeli parantezler yeni bir
 * diziyi ifade ediyor. Hemen arkasından ...state.cars ifadesiyle state.arabalar
 * dizisindeki bütün arabaları o dizinin içine kopyalıyoruz,
 * üzerine bir de Porche ekliyoruz. Bu sayede ADD_CAR action her çağırıldığında,
 * yeni bir state objesi döndürmüş oluyoruz, döndürdüğümüz state objesinin
 * hafızadaki (RAM) yeri değişmiş oluyor. Bu sayede React değişikleri algılayabiliyor.
 */

/**
 * Spread operatörü ile bir dizi elemanlarını fonksiyonun parametrelerine atama
 */

function sum(s1, s2, s3) {
  return s1 + s2 + s3;
}
const numbers = [1, 2, 3];
console.log(sum(...numbers));

/**
 * Spread operatörü ile dizileri ve objeleri birleştirme
 */

const numbers2 = [1, 2, 3];
const numbers3 = [4, 5, 6];
//const mergedSeries = numbers2.concat(numbers3);
const mergedSeries = [...numbers2, ...numbers3];
console.log(mergedSeries);

const customer = { name: 'ieg', age: 23 };
const address = { city: 'Ankara', disctrict: 'Yenimahalle' };
const mergedObject = { ...customer, ...address };
console.log(mergedObject);
