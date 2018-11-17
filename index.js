'use strict'

const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

const login = prompt("Введите ваш логин!");


const addSucces = "Логин успешно добавлен!";
const loginBusy = "Такой логин уже используется!";
const loginError = "Ошибка! Логин должен быть от 4 до 16 символов";

const isLoginValid = (login) => (login.length  >= 4 && login.length  <= 16);

const isLoginUnique = (allLogins, login) => (!allLogins.includes(login));

console.log(isLoginUnique(logins, login));

const addLogin = (allLogins,login) => {

  if (isLoginValid(login)) {

    if (isLoginUnique(allLogins, login)) {
      allLogins.push(login);
      alert(addSucces);
    } else {
      alert(loginBusy);
    }
    
  } else {
    alert(loginError);
  }
};

addLogin(logins,login);

