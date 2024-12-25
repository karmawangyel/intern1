
//Array
// let person = ['sita', 'gita', 'rita']
// // let person1 = new Array('sita', 'gita', 'rita')     //two ways to assingn value in array

// console.log(person)
// console.log(person[2])
// console.log(person.length)    //gives the no. of item.
// person[2] = 'sherpa'
// console.log(person)
// console.log(person.pop())    //removes the last item in array.
// console.log(person)
// person.push('shyam')        //add the last item in array.
// console.log(person)
// person.shift()        //removes the first item in array.
// console.log(person)
// person.unshift('kaka')   //add the first item in array.
// console.log(person)

// var fruits = ['mango', 'apple', 'banana', 'kiwi']
// var veg = ['ppp', 'ttt', 'aa', 'bb', 'ee']
// console.log(fruits.sort())    //manages in alphabetically order
// console.log(fruits.reverse())   //reverse in alphabetical order
// console.log(fruits.join('-'))   //join between items
// console.log(fruits.concat(veg))   //join the two items 

const numbers = [1, 2, 3, 4, 5]

//slice ==> used to create a copy of a portion of the array.It doesn't modify the original array.
//slice(startIndex,endIndex)==>where start index is inclusive, endIndex is exclusive
// const slicedArray = numbers.slice(1, 4)
// console.log(slicedArray)

//splice==>is used to change the content of an array by removing or replacing existing and/or adding new elements
//splice(startIndex,deleteCount,item)
// numbers.splice(2, 1, 10)
// console.log(numbers)

//split
// let text = "I love javascript"
// const newArray = text.split(" ")
// console.log(newArray)