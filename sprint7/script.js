function isDivisibleBy10(num) {
  return num % 10 === 0;
}

// Example usage
console.log(isDivisibleBy10(100)); // true
console.log(isDivisibleBy10(23));  // false

function tellFortune(numarCopii, numePartener, locatieGeografica, locMunca) {
  console.log(`Vei fi un ${locMunca} în ${locatieGeografica}, căsătorit cu ${numePartener} și vei avea ${numarCopii} copii.`);
}

// Example usage
tellFortune(3, "Emanuel", "Italia", "Programator");
// Output: "Vei fi un Programator în Italia, căsătorit cu Emanuel și vei avea 3 copii."

function getDayOfWeek(dayNum) {
  switch (dayNum) {
    case 1: return "Luni";
    case 2: return "Marți";
    case 3: return "Miercuri";
    case 4: return "Joi";
    case 5: return "Vineri";
    case 6: return "Sâmbătă";
    case 7: return "Duminică";
    default: return "Număr invalid";
  }
}

// Example usage
console.log(getDayOfWeek(1)); // "Luni"
console.log(getDayOfWeek(5)); // "Vineri"
