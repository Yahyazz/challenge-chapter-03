function sortCarByYearAscendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const result = [...cars];

  // Tulis code-mu disini
  // result.sort((a, b) => a.year - b.year);

  for (let i = 0; i < result.length - 1; i++) {
    for (let j = 0; j < result.length - 1; j++) {
      if (result[j].year > result[j + 1].year) {
        let temp = result[j];
        result[j] = result[j + 1];
        result[j + 1] = temp;
      }
    }
  }

  console.log('Sorted Cars : ', result);
  // Rubah code ini dengan array hasil sorting secara ascending
  return result;
}
