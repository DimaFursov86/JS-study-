const products = [
  { name: 'Radar', price: 1300, quantity: 4 },
  { name: 'Scanner', price: 2700, quantity: 3 },
  { name: 'Droid', price: 400, quantity: 7 },
  { name: 'Grip', price: 1200, quantity: 9 },
];

function getAllPropValues(propName) {
  // Change code below this line
    
    const productValues = [];
    const productNames = [];
    const productPrice = [];
    const productQuantity = [];
    for (const product of products) {
        const productNamesAll = Object.keys(product);
        
        productNames.push(product.name);
        productPrice.push(product.price);
        productQuantity.push(product.quantity);

      if (productNamesAll[0] === propName) {   
         productValues.push(product.name);     
        }

       if  (productNamesAll[1] === propName) {
         productValues.push(product.price); 
        }

        if  (productNamesAll[2] === propName) {
         productValues.push(product.quantity);
        }
        
    }
  return productValues;
  
  // Change code above this line
}
console.log(getAllPropValues("quantity"))

// Напиши функцию getAllPropValues(propName) которая принимает один параметр propName - имя (ключ) свойства. Функция должна вернуть массив всех значений свойства с таким именем из каждого объекта в массиве products. Если в объектах нет свойства с таким именем, функция должна вернуть пустой массив.