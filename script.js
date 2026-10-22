/*
const correctPassword = "javascript123"

function getPassword() {
  let password = prompt("Введите пароль: ")
  return password
}

function checkPassword(password) {
  if (password === correctPassword) {
    return true
  } else {
    return false
  }
}

for (let count = 2;; count--) {
  let password = getPassword()
  let response = checkPassword(password)

  if (response === true) {
    alert("Добро пожаловать!")
    break
  } else {
    alert(`Неправильный пароль. Осталось ${count} попыток`)
  }

  if (count === 0) {
    alert("Достигнут лимит попыток. Доступ заблокирован!")
    break
  }
}
*/



/*
let evenNumsCount = 0
let oddNumsCount = 0
let positiveNumsCount = 0
let negativeNumsCount = 0

function isEven(number) {
  if (number % 2 === 0) {
    return true
  } else {
    return false
  }
}

function getNumberType(number) {
  if (number > 0) {
    return true
  } else if (number < 0) {
    return false
  } else {
    return "Ноль"
  }
}

while (true) {
  number = +prompt("Введите число: ")

  if (number === 0) {
    break
  }

  if (isEven(number)) {
    evenNumsCount += 1
  } else {
    oddNumsCount += 1
  }

  if (getNumberType(number)) {
    positiveNumsCount += 1
  } else {
    negativeNumsCount += 1
  }
}

alert(`
  Положительных: ${positiveNumsCount}
  Отрицательных: ${negativeNumsCount}
  Чётные: ${evenNumsCount}
  Нечётные: ${oddNumsCount}`)
  */