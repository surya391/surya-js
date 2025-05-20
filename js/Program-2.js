function generateOddSeries(a) {
  const result = [];
  for (let i = 0; i < a; i++) {
    result.push(2 * i + 1);
  }
  console.log(result.join(', '));
}

generateOddSeries(1)
generateOddSeries(2) 
generateOddSeries(3) 
generateOddSeries(4) 
generateOddSeries(5) 
generateOddSeries(10) 

