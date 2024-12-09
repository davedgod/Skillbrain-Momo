// Clasa Mașina
class Masina {
  constructor(marca, model, culoare, kilometraj) {
    this.marca = marca;
    this.model = model;
    this.culoare = culoare;
    this.kilometraj = kilometraj;
  }

  // Getter pentru a returna proprietățile mașinii
  get proprietati() {
    return `Masina[marca=${this.marca}, model=${this.model}, culoare=${this.culoare}, kilometraj=${this.kilometraj}]`;
  }
}

// Funcția main pentru a crea instanțe și a afișa proprietățile
function main() {
  const masina1 = new Masina("VOLVO", "XC-60", "Negru", "234 000");
  const masina2 = new Masina("Mazda", "CX-5", "Verde", "111 000");
  const masina3 = new Masina("Dacia", "BIGGSTER", "Albastru", "20 000");

  console.log(masina1.proprietati);
  console.log(masina2.proprietati);
  console.log(masina3.proprietati);
}

// Apelăm funcția main
main();

// Clasa MasinaDeCurse care moștenește clasa Mașina
class MasinaDeCurse extends Masina {
  constructor(marca, model, culoare, kilometraj) {
    super(marca, model, culoare, kilometraj);
  }

  // Metoda participaLaCampionat
  participaLaCampionat(pozitiaInCampionat) {
    if (pozitiaInCampionat > 0) {
      console.log(`Am castigat locul ${pozitiaInCampionat}`);
    } else {
      console.log("Nu am castigat niciun premiu");
    }
  }
}

// Funcția pentru a crea mașini de curse și a le testa
function masiniDeCurseMain() {
  const masinaDeCurse1 = new MasinaDeCurse("Toyota", "Turbo", "Rosu", "100 000");
  const masinaDeCurse2 = new MasinaDeCurse("Ferrari", "F1", "Galben", "50 000");

  // Participarea la campionat
  masinaDeCurse1.participaLaCampionat(2); // Va afișa: Am castigat locul 2
  masinaDeCurse2.participaLaCampionat(0); // Va afișa: Nu am castigat niciun premiu

  // Afișăm proprietățile mașinilor
  console.log(masinaDeCurse1.proprietati);
  console.log(masinaDeCurse2.proprietati);
}

// Apelăm funcția pentru mașinile de curse
masiniDeCurseMain();