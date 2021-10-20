const firstname = prompt("Inserisci il tuo nome:");
const lastname = prompt("Inserisci il tuo cognome:");
const color = prompt("Inserisci il tuo colore preferito:");
const number = 21;
const password =`${firstname}${lastname}${color}${number}`;
const lunghezzaPassword = password.length;

console.log(firstname);
console.log(lastname);
console.log(color);
console.log(password);
console.log(lunghezzaPassword);

document.getElementById('password').innerHTML = password;
document.getElementById('lunghezza').innerHTML = lunghezzaPassword;