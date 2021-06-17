// Пиши код ниже этой строки
const getTotalBalanceByGender = (users, gender) => {
  return users.filter((value) => value.gender === gender).reduce((totalBalance,value) => totalBalance + value.balance,0); 
};
// Пиши код выше этой строки

// Задание
// Дополни функцию getTotalBalanceByGender(users, gender) так, чтобы она возвращала общий баланс пользователей (свойство balance), пол которых (свойство gender) совпадает со значением параметра gender.

// Тесты
// Объявлена переменная getTotalBalanceByGender.
// Переменной getTotalBalanceByGender присвоена стрелочная функция с параметрами (users, gender).
// В теле функции используется цепочка методов в правильном порядке.
// Значение параметра users не изменяется.
// Если значение параметра gender это строка 'male', функция возвращает число 12053.
// Если значение параметра gender это строка 'female', функция возвращает число 8863.
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение.