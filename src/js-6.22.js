// Пиши код ниже этой строки
const getActiveUsers = (users) => {
  return users.filter(({isActive}) => isActive); 
};
// Пиши код выше этой строки
// Задание
// Дополни функцию getActiveUsers(users) так, чтобы она возвращала массив активных пользователей, значение свойства isActive которых true.

// Тесты
// Объявлена переменная getActiveUsers. Переменной getActiveUsers присвоена стрелочная функция с параметром users.
// Для перебора параметра users используется метод filter().
// Вызов функции с указанным массивом пользователей возвращает массив объектов пользователей с именами Sharlene Bush, Elma Head, Carey Barr и Sheree Anthony.
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение.