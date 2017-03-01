var kbd = require('kbd');
var figlet = require('figlet');

var reponse = '-1';
var compteur = 0;
var secret;

// Génère un nombre entre 1 et 10.
// Math.random() entre 0 et 1
// Math.floor prend la partie entière du nombre
var secret = Math.floor(Math.random() * 10) + 1;

console.log("Il faut trouver un nombre entre 1 et 10 ? ");

while (!(Number(reponse) === secret) && compteur <3){
  console.log("Entre un nombre entre 1 et 10 ? ");
  var reponse = kbd.getLineSync(); // Pour lire une entrée et la stocker dans une variable
  compteur  =compteur +1;
   if (Number(reponse) > secret){
     console.log("Plus petit");
   }
   if (Number(reponse) < secret){
     console.log("Plus grand");
   }
}

if ((Number(reponse) === secret)){
  figlet('Bravo!!', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
});
}else{
  figlet('Perdu!!', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
});
}

// reponse = kbd.getLineSync(); // Pour lire une entrée et la stocker dans une variable


// Number(reponse) // Pour convertir une chaine de caractère en nombre
