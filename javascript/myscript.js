// Inserimento variabile nell'html
const resultnickname = document.getElementById("Main-title");

// Richiesta nome
const yourName = prompt("Qual é il tuo nome?");
console.log(yourName);

// Richiesta cognome
const yourSurname = prompt("qual é il tuo cognome?");
console.log(yourSurname);

// Richiesta colore
const favColor = prompt("Qual é il tuo colore preferito?");
console.log(favColor);

// Definizione anno corrente
let currentYear = "24";
console.log(currentYear);

// Creazione nome utente
const nickname = yourName + yourSurname + favColor + currentYear;
console.log(nickname);

// Stampo la variabile del nickname
alert("Il tuo nickname é:" + " " + nickname);
resultnickname.innerText = "Il tuo nickname é:" + " " + nickname;
