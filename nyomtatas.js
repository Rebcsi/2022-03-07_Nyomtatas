function kalkulal(){
    //Űrlapadatok
    //const szelesseg=297;
     const szelesseg = 420;document.getElementById('szelesseg').value;
    //const magassag=420;
    const magassag = document.getElementById('magassag').value;
    const papir = document.getElementById('papirtipus').value;

    //Számítások
    let terulet = Math.round((szelesseg * magassag) / 10000);    
    let koltseg = terulet * papir;

    //Megjelenítés
    document.getElementById('terület').innerHTML = terulet;
    document.getElementById('papír').innerHTML = papir;
    document.getElementById('koltseg').innerHTML = koltseg;
    document.getElementById('valasz').style.visibility = "visible";
}

