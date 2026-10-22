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