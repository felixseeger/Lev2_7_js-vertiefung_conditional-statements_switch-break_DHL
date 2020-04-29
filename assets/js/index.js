const bund01 = 'Baden-Würtenberg';
const bund02 = berlin;

let bundesland1 = 'Baden-Würtenberg hat 10 Mio. Einwohner';
let bundesland2 = 'Baden-Würtenberg hat 10 Mio. Einwohner';


let ergebnisText;


function check() {
	ergebnis = document.getElementById('BundeslandInfo').value;
	console.log('ergebnis');
    // document.getElementById('bundeslandInfo');
    
    switch [ergebnis] {
        case bund01;
        ergebnisText = bundesland1;
        break;
        
        case bund02;
        ergebnisText = bundesland2;
        break;
        
    }

    document.getElementById("bundeslandInfoErgebnis").innerHTML = ergbnisText;
}
