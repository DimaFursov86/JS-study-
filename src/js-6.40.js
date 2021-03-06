// Пиши код ниже этой строки
const sortByName = users => {
  return [...users].sort((a,b) => a.name.localeCompare(b.name)); 
};
// Пиши код выше этой строки

// Задание
// Дополни функцию sortByName(users) так, чтобы она возвращала массив пользователей отсортированный по их имени (свойство name) в алфавитном порядке.

// Тесты
// Объявлена переменная sortByName.
// Переменной sortByName присвоена стрелочная функция с параметром (users).
// Значение параметра users не изменяется.
// Для перебора параметра users использован метод sort().
// Вызов функции с указанным массивом пользователей возвращает новый массив пользователей отсортированный по имени в алфавитном порядке.
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение.