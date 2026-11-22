/* Задача 1
const names = ["Анна", "Борис", "Виктор", "Дарья"]


for (let i = 0; i < names.length; i++) {
    console.log(`Участник N${i+1}: ${names[i]}`)
}
*/



/* Задача 2
const numbers = [10, 25, 30, 45]

let evenSum = 0


numbers.forEach((num) => {
    if (num % 2 === 0) {
        evenSum += num
        return evenSum
    }
})

console.log(evenSum)
*/



/* Задача 3
const numbers = [100, 250, 500, 1200]

const discountNumbers = numbers.map((num) => {
    num = num * 0.9
    return String(num) + "р"
})

console.log(discountNumbers)
 */



/* Задача 4
const users = [
    { id: 1, firstName: 'Иван', lastName: 'Иванов', age: 25 },
    { id: 2, firstName: 'Елена', lastName: 'Смирнова', age: 30 },
    { id: 3, firstName: 'Алексей', lastName: 'Попов', age: 19 }
];


const newUsers = [...users].map((user) => {
    let newUser = {id: user.id, fullName: user.firstName + " " + user.lastName, age: user.age}
    return newUser
})

console.log(newUsers)
*/



/* Задача 5
const words =  ['кот', 'собака', 'слон', 'жираф', 'тигр', 'бегемот']

const longWords = words.filter(word => word.length > 4)

console.log(longWords)
*/



/* Задача 6
const products = [
    { name: 'Ноутбук', price: 75000, inStock: true },
    { name: 'Мышь', price: 1500, inStock: false },
    { name: 'Клавиатура', price: 4500, inStock: true },
    { name: 'Монитор', price: 22000, inStock: false }
];


const filteredProducts = products.filter(item => item.inStock === true && item.price < 50000)

console.log(filteredProducts);
*/



/* Задача 7
const transactions = [
    { id: 1, category: 'Еда', amount: 500 },
    { id: 2, category: 'Транспорт', amount: 150 },
    { id: 3, category: 'Еда', amount: 1200 },
    { id: 4, category: 'Развлечения', amount: 2000 },
    { id: 5, category: 'Транспорт', amount: 300 }
];


const groupTransactions = transactions.reduce((newObj, item) => {
    if (Object.hasOwn(newObj, item.category)) {
        newObj[item.category].push({...item})
    } else {
        newObj[item.category] = [{...item}]
    }

    return newObj
}, {})


console.log(groupTransactions);
*/



/* Задача 8
const students = [
    { name: 'Ольга', grade: 92 },
    { name: 'Максим', grade: 74 },
    { name: 'Светлана', grade: 88 },
    { name: 'Дмитрий', grade: 65 },
    { name: 'Наталья', grade: 95 }
];


const bestStudentsInfo = students.filter(user => user.grade >= 85).reduce((newObj, user) => {
    if (Object.hasOwn(newObj, 'sum') && Object.hasOwn(newObj, 'count')) {
        newObj['sum'] += user.grade
        newObj['count'] += 1
    } else {
        newObj['sum'] = user.grade
        newObj['count'] = 1
    }

    return newObj
}, {})


console.log(bestStudentsInfo['sum'] / bestStudentsInfo['count'])
*/




/* Задача 9
const accounts = [
    { login: 'user1', email: 'User1@Mail.ru', isActive: true },
    { login: 'user2', email: 'USER2@mail.ru', isActive: false },
    { login: 'user3', email: 'User3@Yandex.ru', isActive: true }
];



const activeAccounts = accounts.reduce((array, user) => {
    if (user.isActive) {
        array.push(user.email.toLowerCase())
    }

    return array
}, [])


console.log(activeAccounts)
*/