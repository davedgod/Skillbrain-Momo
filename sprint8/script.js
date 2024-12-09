function printEvenNumbers(n) {
  for (let i = 0; i <= n; i += 2) {
    console.log(i);
  }
}

// Example usage
printEvenNumbers(10);
// Output: 0, 2, 4, 6, 8, 10


function sumArray(arr) {
  return arr.reduce((acc, curr) => acc + curr, 0);
}

// Example usage
console.log(sumArray([1, -5, 20, -34, 16, 29, 36, -4])); 
// Output: 59
console.log(sumArray([3.45, -2.68, 356, -75.96, 64, 19.28])); 
// Output: 364.09000000000003


function reverseArray(arr) {
  return arr.reverse();
}

// Example usage
console.log(reverseArray([1, -5, 20, -34, 16, 29, 36, -4]));
// Output: [-4, 36, 29, 16, -34, 20, -5, 1]


function countVowels(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;
  
  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  
  return count;
}

// Example usage
console.log(countVowels("string de test")); 
// Output: 3
