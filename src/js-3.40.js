const atTheOldToad = {
  potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
  updatePotionName(oldName, newName) {
    // Change code below this line
      for (const potion of this.potions) { 
      if (potion === oldName) {
        this.potions.splice(this.potions.indexOf(oldName), 1, newName);  
      }
    }
    return this.potions;
    // Change code above this line
  },
};

console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"))

// Дополни метод updatePotionName(oldName, newName) так, чтобы он обновлял название зелья с oldName на newName, в массиве зелий в свойстве potions.

// Тесты
// Объявлена переменная atTheOldToad
// Значение переменной atTheOldToad это объект
// Значение свойства atTheOldToad.potions это массив ["Speed potion", "Dragon breath", "Stone skin"]
// Значение свойства atTheOldToad.updatePotionName это метод объекта
// После первого вызова метода atTheOldToad.updatePotionName("Dragon breath", "Polymorth"), в свойстве potions будет массив ["Speed potion", "Polymorth", "Stone skin"]
// После второго вызова метода atTheOldToad.updatePotionName("Stone skin", "Invisible"), в свойстве potions будет массив `["Speed potion", "Polymorth", "Invisible"]``