const calculateTotalPrice = (quantity, pricePerItem) => {
  // Пиши код выше этой строки
  return quantity * pricePerItem;
}

console.log(calculateTotalPrice(3, 100))

// Задание
// Выполни рефакторинг функции calculateTotalPrice() так, чтобы она была объявлена как стрелочная.

// Тесты
// Объявлена переменная calculateTotalPrice.
// Переменной calculateTotalPrice присвоена стрелочная функция с параметрами (quantity, pricePerItem).
// Вызов calculateTotalPrice(5, 100) возвращает 500.
// Вызов calculateTotalPrice(8, 60) возвращает 480.
// Вызов calculateTotalPrice(3, 400) возвращает 1200.
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение.