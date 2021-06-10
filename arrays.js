const simpleArray = [1, 4, 5, 2, 9, 8, 6, 2]

const complexArray = [
  { name: 'Jane', age: 19, city: 'Saint-Petersburg', company: 'Timeweb', },
  { name: 'Serg', age: 22, city: 'Moscow', company: 'Apple' },
  { name: 'Anna', age: 18, city: 'Rostov', company: 'Google' },
]

// массивы, как объекты

const key = simpleArray[0] // доступ по ключу

// создание нового массива с одинаковыми значениями для simpleArray
const simpleArray1 = [1, 4, 5, 2, 9, 8, 6]

// создание ссылки на массив simpleArray
const simpleArray2 = simpleArray

delete simpleArray1[3] // удаление элемента массива в объектном стиле

// typeof, Array.isArray

const typeArr1 = typeof simpleArray // не может отличить объект от массива

const typeArr2 = Array.isArray(simpleArray) // можем точно сказать, что это массив

// push, pop

const newPushArr = simpleArray.push(1) // возвращает длину

const newPopArr = simpleArray.pop() // возвращает удалённый элемент и меняет изначальный массив

// shift, unshift

const newShiftArr = simpleArray.shift() // возвращает удалённый элемент

const newUnshiftArr = simpleArray.unshift(54) // возвращает длину

// splice

// const spliceArr = simpleArray.splice(1, 2) // возвращает массив удалённых элементов

const strArr = ['привет', 'как', 'дела']

strArr.splice(2, 0, 'твои')

// slice

const sliceArr = simpleArray.slice(1, 4) // возвращает массив скопированных элементов
const copySliceArr = simpleArray.slice() // полная копия массива

// concat

const newConcatArr = sliceArr.concat(copySliceArr) // возвращает новый объединенный массив

// forEach

for (let i = 0; i < complexArray.length; i++) {
  // console.log(complexArray[i])
}

for (let el of complexArray) {
  // console.log(el)
}

complexArray.forEach(function (person, index, arr) {
  // console.log(person)
})

complexArray.forEach(person => { person })

// indexOf, lastIndexOf

const arrIndexOf = simpleArray.indexOf(2) // возвращает -1, если нет совпадений или индекс, если нашёл
const arrLastIndexOf = simpleArray.lastIndexOf(2)

// find, findIndex

const findComplexArr = complexArray.find(p => p.name === 'Jane')
const findIndexComplexArr = complexArray.findIndex(p => p.name === 'Serg')

// includes

const includesComplexArr = simpleArray.includes(2)

// filter

const filterArr = complexArray.filter(e => e.age > 20) // возвращает новый массив со всеми вхождениями

// map

const mapArr = complexArray.map(e => e.age * 2) // возвращает новый массив после преобразования

// sort

const sortArr = simpleArray.sort((a, b) => a - b) // сортирует "на месте"

// reverse

const reverseArr = simpleArray.reverse() // переворачивает "на месте"

// split, join

const strSimpleArr = 'Вася, Петя, Коля'

const splitArr = strSimpleArr.split(',')

const joinArr = splitArr.join(',')

// reduce, reduceRight

simpleArray

const reduceArr = simpleArray.reduce((sum, cur) => sum + cur, 0)
const reduceRightArr = simpleArray.reduceRight((sum, cur) => sum + cur, 0)

// комбинирование методов

const combArr = complexArray
  .map(e => e.age)
  .sort((a, b) => a - b)
  .filter(e => e > 20)
