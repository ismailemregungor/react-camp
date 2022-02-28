/**
 * Template Literals (Şablon Dizileri)
 * Bir Javascript ifadesini düz bir yazı yazar gibi
 * tek bir satırda yazmamızı sağlayan string çeşidi olarak tanımlanabilir.
 * Template literals, back tick dediğimiz tırnak işaretleri içinde yazılmalıdır.
 */

const name = 'ieg';
const message = `Merhaba, ${name} `;
console.log(message);

const unitPrice = 100;
const quantity = 3;
const currency = 'TL';
const totalAmount = `Toplam: ${unitPrice * quantity} ${currency}`;
console.log(totalAmount);
