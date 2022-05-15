console.log('keuzescherm.js');

var naamveld = document.querySelector("#naamveld");

    function groet(naam) { // Een parameter is een soort variabele die je meegeeft in een functie
        console.log("groet persoon") ;
        naamveld.textContent = naam;
}
groet("Vanessa");