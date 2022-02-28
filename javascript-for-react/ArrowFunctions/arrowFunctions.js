/**
 * Arrow Functions (Oklu Fonksiyon İfadeleri)
 *Oklu fonksiyon ifadeleri, Javascript'te fonksiyon oluşturmanın 
 yeni bir yöntemidir. En önemli ve sık kullanılan özelliklerinden 
 bir tanesi implicit (üstü kapalı) return özelliğidir. 
 Dikkat edilmesi gereken bir başka farklılık ise, 
 oklu fonksiyon ifadeleri hoist edilmezler, 
 yani bir değişkene atadığınız oklu fonksiyonları, 
 function ifadesiyle oluşturduğunuz fonksiyonlar gibi, 
 oluşturmadan önce çağıramazsınız.
 */

//normal fonnksiyon
// 8 döndürür, çünkü function ifadesi hoist edilir (kod bloğu çalıştırılmadan önce kodun en yukarısına çıkarılır)
console.log(sum1(1, 2));

function sum1(n1, n2) {
  return n1 + n2;
}

//arrow function
//console.log(sum2(3, 4)); --> ReferenceError: Cannot access 'topla' before initialization at <anonymous>:1:1

const sum2 = (n1, n2) => {
  return n1 + n2;
};

console.log(sum2(3, 4));

/**
 * Fonksiyon içinde herhangi başka bir ifade olmaksızın
 * tek bir ifade döndürülüyorsa implicit return özelliği kullanılabilir:
 */
const sum3 = (n1, n2) => n1 + n2;
console.log(sum3(5, 6));
