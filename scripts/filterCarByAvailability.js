function filterCarByAvailability(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Tempat penampungan hasil
  const result = [];

  // Tulis code-mu disini
  // cars.map((car) => {
  //   if (car.available) result.push(car);
  // });

  for (let i = 0; i < cars.length; i++) {
    cars[i].available && result.push(cars[i]);
  }

  console.log('Filtered Cars : ', result);
  // Rubah code ini dengan array hasil filter berdasarkan availablity
  return result;
}
