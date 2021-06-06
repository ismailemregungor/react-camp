/*
Rest: Değişken sayıda ve farklı türde 
parametre alan metotlar oluşturmak.
JavaScript: rest
Java: varargs
C#: params
*/

let showProducts = function name(id,...products) {
    console.log(id)
    console.log(products)
}

//rest parametre
console.log(10, ["Apple","Banana","Watermelon"])

/*
Spread: Dizi değişkeninin önüne üç nokta ekleyerek 
dizi değişkeninin elemanlarını ayrı ayrı parametre 
olarak aktarabiliriz.
*/

let points  = [1,2,3,4,5,6,7,8,9,10]
console.log(...points)
console.log(Math.max(...points))
console.log(..."ABC","D",..."EFG","H")

/*
Destructuring: Array veya Object gibi nesneleri küçük parçalara
ayırma amacıyla yapılan nesneleri bölüp değişkenlere atama işlemidir.
*/

//Array Destructuring 
let populations = [10000,20000,30000,[40000,50000]]
let [small,medium,high,[veryHigh,ultra]] = populations
console.log(small)
console.log(medium)
console.log(high)
console.log(veryHigh)
console.log(ultra)

function somePopulation([small1],number){

    console.log(small1)

}
somePopulation(populations)

//Object Destructuring
let category = {id:1, name:"İçecek"}
console.log(category.id)
console.log(category["name"])

let {id, name} = category
console.log(id)
console.log(name1)


