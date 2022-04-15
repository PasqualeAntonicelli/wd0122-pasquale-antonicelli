/* stringhe ed escape*/

var saluto = "ciao"
var domanda = "com'è oggi il tempo?"
var domanda2 = 'com\'è oggi il tempo?'
var html = '<div class=" blocco "></div>'
var html2 = "<div class=\"blocco\"></div>"


var nome = 'Giovanni';  //valore ipoteticamente definito dall'utente
var frase = "Ciamo " + nome + " come stai?";
var frase2 = `Ciao Mario come stai?`//backtick


console.log(frase2)
console.log(frase2.length)
console.log(frase2[0])

console.log(frase2[frase2.lenght -1])



const PASSWORD = 'IDHIWWKSNWIKNKL23IN'
console.log(PASSWORD);


var x = 1;

{
    console.log(x);
}

let y = 2;
{
    console.log(y);

}

{
    var x2 = 1;
    console.log(x2);
}

console.log(x2)

{
    let y2 = 2;
    console.log(y2);
}


function scriviSaluto(){
    var s ='Ciao';
    document.write(s)
    return s;
}

console.log(scriviSaluto());

scriviSaluto();