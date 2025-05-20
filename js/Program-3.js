function generateOddUpToInput(a) {
  const result = [];
  const limit = (a % 2 === 0) ? a - 1 : a;
  for (let i = 1; i <= limit; i += 2) {
    result.push(i);
  }
  console.log(result.join(', '));
}

generateOddUpToInput(1) 
generateOddUpToInput(2) 
generateOddUpToInput(3) 
generateOddUpToInput(4) 
generateOddUpToInput(5) 
generateOddUpToInput(6) 
