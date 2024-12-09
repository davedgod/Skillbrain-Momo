function findSquare(num) {
  return num * num;
}

// Example usage
console.log(findSquare(6));  // Output: 36
console.log(findSquare(0));  // Output: 0
console.log(findSquare(-12));  // Output: 144

function getRandom(start, end) {
  return Math.floor(Math.random() * (end - start)) + start;
}

// Example usage
console.log(getRandom(3, 5));  // Output: Random number between 3 and 5 (e.g., 3 or 4)

function letterCount(sir, litera) {
  const regex = new RegExp(litera, 'gi'); // 'gi' for case-insensitive search
  return (sir.match(regex) || []).length;
}

// Example usage
console.log(letterCount("Îmi place programarea", "a"));  // Output: 4
console.log(letterCount("Vreau să lucrez în IT", "r"));  // Output: 2

function addNumber(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}

// Example usage
console.log(addNumber(1, 2, 3));  // Output: 6
console.log(addNumber(1, 2, 3, 4, 5));  // Output: 15
