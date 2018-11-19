"use strict";

const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

const login = prompt("Введите ваш логин!");

const addSucces = "Логин успешно добавлен!";
const loginBusy = "Такой логин уже используется!";
const loginError = "Ошибка! Логин должен быть от 4 до 16 символов";

const isLoginValid = login => login.length >= 4 && login.length <= 16;

const isLoginUnique = (allLogins, login) => allLogins.includes(login);

const addLogin = (allLogins, login) => {
  if (isLoginUnique(allLogins, login)) {
    return console.log(loginBusy);
  }

  if (!isLoginValid(login)) {
    return console.log(loginError);
  }
  allLogins.push(login);
  return console.log(addSucces);
};

addLogin(logins, login);
