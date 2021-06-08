function checkStorage(available, ordered) {
  let message;
  // Change code below this line
  if (available >= ordered) {
    message = `Order is processed, our manager will contact you.`}
  else {
    message = `Not enough goods in stock!`}
  // Change code above this line
  return message;
}
console.log(checkStorage(100,50))