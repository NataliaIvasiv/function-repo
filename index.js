function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;

  orderedItems.forEach(function (number) {
    totalPrice += number;
  });

  return totalPrice;
}
console.log(calculateTotalPrice([12, 85, 37, 4]));
