function createRecipe(titlu, portii, ingrediente) {
  const recipe = {
    titlu: titlu,
    portii: portii,
    ingrediente: ingrediente,
  };

  console.log(recipe.titlu);
  console.log(recipe.portii);
  console.log(recipe.ingrediente.join(", "));
  return recipe;
}

// Example usage
createRecipe("Pizza", 3, ["sunca", "cas", "ketchup"]);
// Output:
// Pizza
// 3
// sunca, cas, ketchup
// finish

function removeProperty(obj, prop) {
  const newObj = { ...obj }; // Create a shallow copy of the object
  delete newObj[prop]; // Remove the specified property
  return newObj;
}

// Example usage
const obj = { a: 1, b: 2 };
console.log(removeProperty(obj, "b"));
// Output: { a: 1 }
// finish

function displayBooks(books) {
  books.forEach(book => {
    console.log(`${book.titlu} de ${book.autor}`);
    if (book.esteCitita) {
      console.log(`Ai citit deja "${book.titlu}" de ${book.autor}`);
    } else {
      console.log(`Trebuie sa citesti "${book.titlu}" de ${book.autor}`);
    }
  });
}

// Example usage
const books = [
  { titlu: "Carte 1", autor: "Autor 1", esteCitita: true },
  { titlu: "Carte 2", autor: "Autor 2", esteCitita: false },
];

displayBooks(books);
// Output:
// Carte 1 de Autor 1
// Ai citit deja "Carte 1" de Autor 1
// Carte 2 de Autor 2
// Trebuie sa citesti "Carte 2" de Autor 2
