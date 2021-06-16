// Пиши код ниже этой строки
const isEveryUserActive = (users) => {
   return users.every(({isActive}) => isActive);
};
// Пиши код выше этой строки

// Задание
// Дополни функцию isEveryUserActive(users) так, чтобы она проверяла все ли пользователи сейчас активны (свойство isActive) и возвращала true или false.

// Тесты
// Объявлена переменная isEveryUserActive
// Переменной isEveryUserActive присвоена стрелочная функция с параметром (users).
// Для перебора параметра users используется метод every().
// Вызов функции с указанным массивом пользователей возвращает false.
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение.