/**
 * Promise sonucu olumlu veya olumsuz gelecekte belli olacak bir işlemi ifade eder,
 * bir kaynağa bağlanıp veri almak gibi. Kaynağa bağlanıp verinin alınması
 * ne kadar süreceği bilinmediği için bu tarz işlemler Promise olarak oluşturulur.
 * Bu işlemlere Javascript'te asynchronous operations (eş zamanlı olmayan işlemler) denir.
 */

const getData = new Promise((resolve, reject) => {
  const getDataStatus = true;
  if (getDataStatus) {
    resolve('veri getirme başarılı!');
  } else {
    reject('veri getirme başarısız!');
  }
});

getData
  .then((response) => console.log('gelen cevap: ', response))
  .catch((error) => console.log('gelen hata: ', reject));
