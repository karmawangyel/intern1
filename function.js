// //regular function
// function add(a, b) {      //parameter=>function le accept garne kura
//     console.log(a + b)
// }
// add(3, 4)  //arguement-> pathaune kura

//named function
// let add = function add(a, b) {
//     console.log(a + b)
// }
// add(4, 4)

//Arrow function
// let add = (q, t) => {
//     console.log(q + t)
// }
// add(4, 5)

// find square of numbers
// let square = (a) => {
//     console.log(a ** 2)
// }
// square(4)

// const square = (a) => {
//     return a * a     
// }
// const result = square(5)
// console.log(result)



//Anonymous function
// (() => {
//     console.log("I am anonymous")
// })()
//one way To call anonymous function we have to wrap in round bracket.


//Callback function      is a function passed as arguement. 
// function sayHello(name, callback) {
//     console.log(name)
//     callback()
// }
// function sayGoodBye() {        //sayGoodBye is a callback function
//     console.log("GoodBye")
// }
// sayHello("karma", sayGoodBye)

// Higher Order function is a function that take accept one or more function(callback)or return a function.
// const fruits = ['apple', 'banana', 'Mango']



//HOF

//forEach HOF ==   for loop in  array  //forEach ma return garna mildaina

// fruits.forEach((fruit) => {
//     console.log(fruit)
// })

// const numbers = [1, 2, 3, 4, 5]
// const squarednumber = []

// numbers.forEach((number) => {
//     squarednumber.push(number ** 2)
// })
// console.log(squarednumber)



//MAP    loops a data and updates a data  
// const squaredNumbers = numbers.map((number) => {
//     return number ** 2
// })
// console.log(squaredNumbers)

// const users = [
//     {
//         id: 1, firstName: "karma", lastName: "sherpa", address: "Boudha"
//     },
//     {
//         id: 2, firstName: "hari", lastName: "lama", address: "Chabahil"
//     },
//     {
//         id: 3, firstName: "krishna", lastName: "tamang", address: "Jorpati"
//     }
// ]

// const result = users.map((user) => {
//     return {
//         ...user,  //spread Operator 
//         fullName: user.firstName + " " + user.lastName
//     }
// })
// console.log(result)

// const numbers2 = [1, 2, 3, 4]

// const result = numbers2.map((number) => {
//     return {
//         number: number,
//         name: "A"
//     }
// })
// console.log(result)


// //filter      -- to filter    --  object return gardaina 

// const numbers3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const evenNumber = numbers3.filter((number) => {
//     return number % 2 == 0
// })
// console.log(evenNumber)


const books = [
    {
        title: "mahabir pun",
        author: "Mahabir pun",
        year: 2023
    },
    {
        title: "Think like a monk",
        author: "jay Shetty",
        year: 1990
    },
    {
        title: "Book3",
        author: "ambani",
        year: 2014
    },
    {
        title: "mahabir pun",
        author: "ARENA",
        year: 2023
    },
    {
        title: "mahabir pun",
        author: "Mahabir pun",
        year: 2016
    },
]

// const years = books.filter((book) => {
//     return book.year > 2000
// })
// console.log(years)

// const files = ["app.js", "index.js", "script.js", "app.css"]
// const result = files.filter((file) => {
//     return file.endsWith(".js")
// })
// console.log(result)

// const data = [10, null, "karma", undefined, null, 50]

// const output = data.filter((a) => {
//     return a !== null && a !== undefined
// })
// console.log(output)

// const result = books.filter((a) => {
//     return a.author == 'Mahabir pun'
// })
// console.log(result)

// REDUCE   -- for mathmatical calculation 
// const numbers = [1, 2, 3, 4, 5]

// const result = numbers.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue
// }, 0)   //0 is accumulator value.
// console.log(result)

// const cartItems = [
//     {
//         name: "Product A",
//         quantity: 2,
//         price: 2
//     },
//     {
//         name: "Product B",
//         quantity: 4,
//         price: 23
//     },
//     {
//         name: "Product C",
//         quantity: 5,
//         price: 234
//     },
//     {
//         name: "Product D",
//         quantity: 1,
//         price: 554
//     },
//     {
//         name: "Product E",
//         quantity: 6,
//         price: 23
//     },
// ]
//total quantity,total kati amount ko product cha

// const output = cartItems.reduce((accumulator, currentProduct) => {
//     accumulator.totalPrice = accumulator.totalPrice + (currentProduct.quantity * currentProduct.price)
//     accumulator.totalQuantity = accumulator.totalQuantity + currentProduct.quantity
//     return accumulator
// }, { totalPrice: 0, totalQuantity: 0 })
// console.log(output)