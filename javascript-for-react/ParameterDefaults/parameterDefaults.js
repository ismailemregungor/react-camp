/**
 * Parameter Defaults (varsayılan parametreler değerleri)
 * Bir fonksiyonun aldığı parametreler için varsayılan değerler girilebilir.
 * Eğer fonksiyon çağırıldığında bu değerler girilmezse, varsayılan değerler hesaba katılır.
 */

//js  örneği
function sum(n1 = 1, n2 = 2) {
  return n1 + n2;
}

console.log(sum()); //1 + 2

//react örneği
const initialState = { loading: false, articles: [] };

const reducer = (state = initialState, action) => {
  // burada state değerine başlangıç olarak initialState değeri atadık.
  // reducer detayları
  return state;
};
