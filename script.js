/* Задача 1
const user = {
  name: "Alex",
  age: 25,
  city: "Berlin",
  isStudent: true
}


const showUserInfo = (user) => {
  alert(`Зовут ${user.name}, возраст ${user.age}, живет ${user.city}, ${user.isStudent ? "студент" : "не студент"}`)
}

const isAdult = function(user) {
  return user.age >= 18 ? true : false
}

function changeCity(user, newCity) {
  user.city = newCity
}

const city = prompt("В каком городе вы живёте?")

changeCity(user, city)

showUserInfo(user)
*/




/* Задача 2
const product = {
  name: "Keyboard",
  price: 100,
  quantity: 5,
  discount: 10
}

function getDiscountPrice(product) {
  return product.price - product.discount
}

function getTotalPrice(product) {
  return (product.price - product.discount) * product.quantity
}

function showProduct(product) {
  alert(`
  Товар: ${product.name}
  Цена: ${product.price}
  скидка: ${product.discount}%
  цена со скидкой: ${getDiscountPrice(product)}
  количество: ${product.quantity}
  общая стоимость: ${getTotalPrice(product)}`
  )
}

if (product.quantity <= 0) {
  console.log("Нет в наличии")
} else {
  showProduct(product)
  if (getTotalPrice(product) > 300) {
    alert("Покупка дорогая")
  }
}
*/



/*
const student1 = {
  name: "Alex",
  age: 20,
  grade: 85
}

const student2 = {
  name: "Maria",
  age: 19,
  grade: 95
}

const student3 = {
  name: "John",
  age: 21,
  grade: 45
}


function getGradeStatus(student) {
  if (student.grade > 100 || student.grade < 0) {
    return "Не корректные данные"
  }

  if (student.grade >= 90 && student.grade <= 100) {
    return "Отлично"
  } else if (student.grade >= 70 && student.grade <= 89) {
    return "Хорошо"
  } else if (student.grade >= 50 && student.grade <= 69) {
    return "Удовлетворительно"
  } else {
    "Не сдал"
  }
}

const sumGrade = student1.grade + student2.grade + student3.grade

const averageScore = sumGrade / 3

alert(`Средняя оценка студентов: ${averageScore}`)
*/



/* Задача 3
const product1 = {
  name: "Laptop",
  price: 1000,
  quantity: 3
}

const product2 = {
  name: "Mouse",
  price: 25,
  quantity: 0
}

const product3 = {
  name: "Monitor",
  price: 300,
  quantity: 5
}


function restockProduct(product, quantity) {
  product.quantity += quantity
}

function sellProduct(product, quantity) {
  if (product.quantity >= quantity) {
    product.quantity -= quantity
  } else {
    console.log("Такого количества нет в наличии")
  }
}

alert(`Общая стоимость всех товаров: ${product1.price + product2.price + product3.price}`)
*/









/* Задача 4
const client = {
  name: "Alex",
  balance: 2000,
  creditLimit: 500,
  debt: 0,
  isBlocked: false
}


function showAccount(client) {
  return `
  Имя: ${client.name}
  Баланс: ${client.balance}$
  Можете взять в кредит: ${client.creditLimit}$
  Задолженность: ${client.debt}$
  Пользователь заблокирован: ${client.isBlocked ? "Да" : "Нет"}
  `
}

function deposit(client, amount) {
  if (amount < 0) {
    alert("Некорректные данные")
    return false
  }

  client.balance += amount
}

function whitdraw(client, amount) {
  if (amount < 0) {
    alert("Некорректные данные")
    return false
  }

  client.balance -= amount
}

function takeCredit(client, amount) {
  if (amount < 0) {
    alert("Некорректные данные")
    return false
  }

  if (client.creditLimit >= amount) {
    client.creditLimit -= amount
    client.debt += amount
  } else {
    alert("Вы не можете взять столько в кредит")
  }
}


function repayCredit(client, amount) {
  if (amount < 0) {
    alert("Некорректные данные")
    return false
  }

  if (amount > client.balance) {
    amount = client.balance
    client.balance -= client.balance
  } else {
    client.balance -= amount
  }

  if (amount > client.debt) {
    client.creditLimit += client.debt
    client.debt -= client.debt
  } else {
    client.creditLimit += amount
    client.debt -= amount
  }
}


function blockClient(client) {
  client.isBlocked = true
}

function showMenu() {
  const flag = true
  while (flag) {
    let userChoice = +prompt(`
      1 - Проверить баланс
      2 - Пополнить счёт
      3 - Снять деньги
      4 - Взять кредит
      5 - Погасить кредит
      6 - Заблокировать счёт
      0 - выйти
    `)
    
    switch (userChoice) {
      case 1:
        alert(showAccount(client))
        break
      case 2:
        if (client.isBlocked) {
          alert("Вы заблокированы")
        } else {
          amount = +prompt("Введите сумму для пополнения")
          deposit(client, amount)
          alert(showAccount(client))
        }
        break
      case 3:
        if (client.isBlocked) {
          alert("Вы заблокированы")
        } else {
          amount = +prompt("Введите сумму для снятия с счёта")
          if (amount > client.balance) {
            const userWantCredit = prompt("На вашем счёте недостаточно денег. Хотите взять кредит? Ответь: Да или Нет")
            if (userWantCredit === "Да") {
              const creditAmount = +prompt(`Сколько вы хотите взять в кредит? Ваш кредитный лимит: ${client.creditLimit}`)
              takeCredit(client, creditAmount)
            }
          } else {
            whitdraw(client, amount)
          }
          alert(showAccount(client))
        }
        break
      case 4:
        if (client.isBlocked) {
          alert("Вы заблокированы")
        } else {
          amount = +prompt(`Сколько вы хотите взять в кредит? Ваш кредитный лимит: ${client.creditLimit}`)
          takeCredit(client,amount)
          alert(showAccount(client))
        }
        break
      case 5:
        if (client.isBlocked) {
          alert("Вы заблокированы")
        } else {
          amount = +prompt("На какую сумму вы хотите погасить кредит?")
          repayCredit(client,amount)
          alert(showAccount(client))
        }
        break
      case 6:
        alert("Клиент заблокирован")
        blockClient(client)
        break
      case 0:
        flag = false
    }
  }
}

showMenu()
*/