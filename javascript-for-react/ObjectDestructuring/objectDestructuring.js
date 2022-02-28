/**
 * Object/Array Destructuring (Obje/Dizilerin parçalarına bölünüp değişkenlere atanması)
 * Objelerde destructring yaparken obje anahtarları ile değişkenin ismi aynı olmak zorundadır.
 */

//js örnegi

const user1 = { name: 'ieg', age: 23 };
const { name, age } = user1;
console.log(name);
console.log(age);

/**
 * Rest/Spread operatörü (...)
 * Eğer sadece tek bir değere ihtiyacınız varsa,
 * onu alıp diğerlerini tek bir değişkene obje olarak atayabilirsiniz.
 */
const user2 = {
  name: 'ieg',
  age: 23,
  address: 'Kocaeli-Ankara',
  job: 'Computer Engineering Student',
};

const { job, ...others } = user2;
console.log(job);
console.log(others);

//react ornegi
/**
 *Prop'lardan alınan veriler olay yerinde parçalanıp değişkenlere atanabilir.
 */

/**
 *Normalde KullaniciYasGoster(props) yapabilirdik,
 *ama props içinde isim ve yas olduğunu biliyoruz.
 */
function showUser({ name, age }) {
  return `${name} isimli kullanıcı ${age} yaşındadır. `;
}

/**
 *Dizilerde destructuring yaparken ise elemanların sırası önemlidir.
 *İlk eleman, ilk girilen değişkene atanır.
 */
const numbers = [1, 2, 3, 4, 5];
const [one, two, tree, four, five] = numbers;
console.log(one, two, tree, four, five);

/**
 * İlk elemanı bir değişkene atamak,
 * geri kalanları tek bir diziye atamak isterseniz,
 * objede olduğu gibi rest/spread (toparlama/yayma) operatörünü kullanabilirsiniz.
 */
const [first, ...otherNumbers] = numbers;
console.log(first);
console.log(otherNumbers);

/**
 * Spread operatörüyle oluşturulan kalanlar değeri, Rest element olarak adlandırılır.
 * Bu eleman. her zaman objenin veya dizinin son elemanı olarak gelmek zorundadır.
 * Örneğin şöyle bir kullanım geçerli değildir.
 */

// const [...otherNumbers, fifth] = numbers; // Uncaught SyntaxError: Rest element must be last element
