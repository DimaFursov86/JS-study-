// Пиши код ниже этой строки
const getUserWithEmail = (users, email) => {
   return users.find((mail, index) => mail.email === email);
};
// Пиши код выше этой строки

// Задание
// Дополни функцию getUserWithEmail(users, email) так, чтобы она возвращала объект пользователя, почта которого (свойство email) совпадает со значением параметра email.

// Тесты
// Объявлена функция getUserWithEmail(users, email).

// Для перебора параметра users используется метод find().

// Если значение параметра email это 'shereeanthony@kog.com', функция возвращает объект пользователя с именем Sheree Anthony.

// Если значение параметра email это 'elmahead@omatom.com', функция возвращает объект пользователя с именем Elma Head.

// Если значение параметра email это 'blackburndotson@furnigeer.com', функция возвращает объект пользователя с именем Blackburn Dotson.

// Если в массиве users нет пользователя с почтой из параметра email, функция возвращает undefined.

// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение.