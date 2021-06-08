function countProps(object) {
   let propCount = 0;

  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      propCount += 1;
    }
  }

  return propCount;
  // Change code above this line
  
}
console.log(countProps({ name: "Mango", age: 2 }))


//  const count = Object.keys(object);
//   // Change code below this line
// for (const key of count) {
//         if (object.hasOwnProperty(key)) {
//           propCount = count.length;  
//     }
//  }
//   return propCount;