//Arrays , objetos para probar las funciones
const students = ["Juan", "Alan", "Evan", "Ana"];
const notas = [1, 2, 3, 4, 5, 6];

interface Country {
  id: number;
  countryName: string;
  iso3: string;
}
const country: Country[] = [
  {
    id: 1,
    countryName: "Spain",
    iso3: "SPA",
  },
  {
    id: 2,
    countryName: "Peru",
    iso3: "PE",
  },
  {
    id: 3,
    countryName: "Italia",
    iso3: "IT",
  },
];
const country2: Country[] = [
  {
    id: 30,
    countryName: "Belgica",
    iso3: "BEL",
  },
];
//**********


//Head
/*Implementa una función head (inmutable), tal que, dado un array como
entrada extraiga y devuelva su primer elemento. Utiliza destructuring.
*/
const head = <T>([first]: T[]): T => first; // Implementation here.

//console.log(head<string>(students))
//console.log(head<number>(notas))
//console.log(head<Country>(country))

//Tail
/*
Implementa una función tail (inmutable), tal que, dado un array 
como entrada devuelta todos menos el primer elemento. Utiliza rest operator.
*/
const tail = <T>([_first, ...others]: T[]): T[] => others;
//console.log(tail<string>(students));
//console.log(tail<Country>(country));

//Init
/*Implementa una función init (inmutable), tal que, dado un array 
como entrada devuelva todos los elementos menos el último. 
Utiliza los métodos que ofrece Array.prototype.
*/
const init = <T>(array: T[]): T[] => array.slice(0, array.length - 1); // Implementation here.

//console.log(init<string>(students))
//console.log(init<Country>(country))
//console.log(init<number>(notas))

//Last
/*Implementa una función last (inmutable), tal que, dado un array 
como entrada devuelva el último elemento.
*/
const last = <T>(array: T[]): T => array[array.length - 1]; // Implementation here.

//console.log(last(students));
//console.log(last(notas));
//console.log(last(country));

//2. Concat
/*
Implementa una función concat (inmutable) tal que, dados 2 arrays como entrada, 
devuelva la concatenación de ambos. Utiliza rest / spread operators.
*/
const concat = <T, U>(a: T[], b: U[]): (T | U)[] => [...a, ...b]; // Implementation here.

//console.log(notas, students);

//3. Clone Merge
//Clone
/*
Implementa una función clone que, a partir de un objeto de entrada source devuelva un nuevo objeto con las propiedades de source:
*/

const clone = <T extends object>(source: T): T => {
  const copy = { ...source };
  return copy;
};

//console.log(clone(students))

//Merge
/*
Implementa una función merge que, dados dos objetos de entrada source y target, 
devuelva un nuevo objeto con todas las propiedades de target y de source, y en caso 
de propiedades con el mismo nombre, source sobreescribe a target.

Por ejemplo, dados estos 2 objetos:
*/

const a = { name: "Maria", surname: "Ibañez", country: "SPA" };
const b = { name: "Luisa", age: 31, married: true };

//el resultado de mezclar a sobre b sería:

//merge(a, b); // {name: "Maria", age: 31, married: true, surname: "Ibañez", country: "SPA"}
//TIP: Puedes usar la función "clone" del apartado A.
function merge<T extends object, U extends object>(
  source: T,
  target: U
): T & U {
  // Implementation here.
  if (Array.isArray(source) || Array.isArray(target)) {
    throw new Error("Ingresa dos objetos.");
  }
  const copy = clone(source);
  return { ...target, ...copy };
}

//console.log(merge(a, b))
// Read Books
/*
Crea una función isBookRead que reciba una lista de libros y un título y devuelva si se ha leído o no dicho libro. Un libro es un objeto con title como string y isRead como booleano. En caso de no existir el libro devolver false TIP: Existe un método de Array.prototype que te ayudará a buscar según un patrón.
*/
//Ejemplo

interface Book {
  title: string;
  isRead: boolean;
}
const books: Book[] = [
  { title: "Harry Potter y la piedra filosofal", isRead: true },
  { title: "Canción de hielo y fuego", isRead: false },
  { title: "Devastación", isRead: true },
];
function isBookRead(books: Book[], titleToSearch: string): boolean {
  const matchedBook = books.find((book) => book.title === titleToSearch);
  if (!matchedBook) {
    return false;
  }
  return matchedBook.isRead;
}

//console.log(isBookRead(books, "Devastación")); // true
//console.log(isBookRead(books, "Devastación")); // true
//console.log(isBookRead(books, "Canción de hielo y fuego")); // false
//console.log(isBookRead(books, "Los Pilares de la Tierra")); // false

/*### 5. Slot Machine

El objetivo de este ejercicio es crear una máquina tragaperras
 utilizando clases donde cada vez que juguemos insertemos una moneda. 
 Cada máquina tragaperras (instancia) tendrá un *contador de monedas* 
 que automáticamente se irá incrementando conforme vayamos jugando.badgemon

Cuando se llame al *método play* el número de monedas se debe 
incrementar de forma automática y debe generar **tres booleanos 
aleatorios** que representarán el estado de las 3 ruletas. 
El usuario habrá ganado en caso de que los tres booleanos sean 
true, y por tanto deberá mostrarse por consola el mensaje:

js
"Congratulations!!!. You won <número de monedas> coins!!";


y reiniciar las monedas almacenadas, ya que las hemos conseguido y han 
salido de la máquina.
En caso contrario deberá mostrar otro mensaje:

js
"Good luck next time!!".


//Contador => para mostrar  la cantidad de monedas

//Generar los 3 bolleans => similan la ruleta 

//

#### Ejemplo de uso
*/
type results = boolean;
class SlotMachine {
  currency: number;
  results: results[];
  constructor() {
    this.currency = 0;
    this.results = [];
  }
  verifyValues() {
    for (let i = 0; i < 3; i++) {
      const numberRamdom = Math.random();
      const value = numberRamdom < 0.5 ? true : false;
      this.results = [...this.results, value];
    }
  }
  showMessage() {
    this.verifyValues();
    const win = this.results.every((v) => v === true);
    console.log(this.results);
    this.results = [];
    console.log(win);
    if (win) {
      console.log(`Congratulations!!!. You won ${this.currency} coins!!`);
      this.currency = 0;
    } else {
      console.log("Good luck next time!!");
    }
  }
  play() {
    this.currency = this.currency + 10;
    this.showMessage();
  }
}

// const machine1 = new SlotMachine();
// machine1.play();
// machine1.play();
// machine1.play();
// machine1.play();
// machine1.play();
// machine1.play();
// machine1.play();
