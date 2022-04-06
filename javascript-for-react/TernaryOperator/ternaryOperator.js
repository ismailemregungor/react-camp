/**
 *Ternary Conditional Operators (üç değişkenli koşul operatörleri)
 *koşul ? doğruysa : yanlışsa
 *Ternary operatörleri üç adet ifade alır.
 *İlk ifade koşuldur. Koşul true yani doğru olarak hesaplanırsa soru
 *işaretinden sonraki kısım işleme alınır, false yani yanlış olarak
 *hesaplanırsa iki nokta işaretinden sonraki kısım işleme alınır.
 */

const status = 'belirsiz';
status === 'open' ? console.log('açık') : console.log('kapalı');
status === 'open'
  ? console.log('açık')
  : status === 'closed'
  ? console.log('kapalı')
  : console.log(status);

/**
 * Javascript'te yanlış olarak hesaplanan ifadeler:
null
NaN
0
"" (empty string)
undefined
*/

const number1 = 0;
const number2 = 1;

number1 ? console.log('sayı geçerli') : console.log('sayı geçersiz');
number2 ? console.log('sayı geçerli') : console.log('sayı geçersiz');
