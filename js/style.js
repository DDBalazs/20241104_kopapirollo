var pontszam = 0;
var geppontszam = 0;
var dontetlen = 0;
function reset(){
    document.getElementById('papirlathat').style.visibility = "visible";
    document.getElementById('ollolathat').style.visibility = "visible";
    document.getElementById('kolathat').style.visibility = "visible";
}
function nyertes(){
    if(pontszam == 5){
        document.getElementById('onvalasztasa').innerHTML = "Gratulálok ön nyert!"
        pontszam = 0;
        geppontszam = 0;
        dontetlen = 0;
    }
    else if(geppontszam == 5){
        document.getElementById('gepvalasztasa').innerHTML = "A gép nyert!"
        pontszam = 0;
        geppontszam = 0;
        dontetlen = 0;
    }
}
function ko(){
    document.getElementById('onvalasztasa').innerHTML = "Válasszon egyet: Kő"
    var valasztott = 1;
    var gep = Math.floor(Math.random() * 3) +1;
    reset();
    if(gep == 1){
        document.getElementById('gepvalasztasa').innerHTML = "Gép: Kő"
        document.getElementById('gepvalaszt').src = "img/ko.png"
        document.getElementById('papirlathat').style.visibility = "hidden";
        document.getElementById('ollolathat').style.visibility = "hidden";
        document.getElementById('pontszam').innerHTML = "Pontszám:"+pontszam+" - "+geppontszam;
        dontetlen = dontetlen+1;
        document.getElementById('dontetlen').innerHTML = "Döntetlenek: "+dontetlen+" db";
        
    }
    else if(gep == 2){
        document.getElementById('gepvalasztasa').innerHTML = "Gép: Papír"
        document.getElementById('gepvalaszt').src = "img/papir.png"
        document.getElementById('kolathat').style.visibility = "hidden";
        document.getElementById('ollolathat').style.visibility = "hidden";
        geppontszam= geppontszam+1;
        document.getElementById('pontszam').innerHTML = "Pontszám:"+pontszam+" - "+geppontszam;
        document.getElementById('dontetlen').innerHTML = "Döntetlenek: "+dontetlen+" db";
    }
    else{
        document.getElementById('gepvalasztasa').innerHTML = "Gép: Olló"
        document.getElementById('gepvalaszt').src = "img/ollo.png"
        document.getElementById('papirlathat').style.visibility = "hidden";
        document.getElementById('kolathat').style.visibility = "hidden";
        pontszam = pontszam+1;
        document.getElementById('pontszam').innerHTML = "Pontszám:"+pontszam+" - "+geppontszam;
        document.getElementById('dontetlen').innerHTML = "Döntetlenek: "+dontetlen+" db";
    }
    nyertes();
}
function papir(){
    document.getElementById('onvalasztasa').innerHTML = "Válasszon egyet: Papír"
    var valasztott = 1;
    var gep = Math.floor(Math.random() * 3) +1;
    reset();
    if(gep == 1){
        document.getElementById('gepvalasztasa').innerHTML = "Gép: Kő"
        document.getElementById('gepvalaszt').src = "img/ko.png"
        document.getElementById('papirlathat').style.visibility = "hidden";
        document.getElementById('ollolathat').style.visibility = "hidden";
        pontszam = pontszam+1;
        document.getElementById('pontszam').innerHTML = "Pontszám:"+pontszam+" - "+geppontszam;
        document.getElementById('dontetlen').innerHTML = "Döntetlenek: "+dontetlen+" db";
    }
    else if(gep == 2){
        document.getElementById('gepvalasztasa').innerHTML = "Gép: Papír"
        document.getElementById('gepvalaszt').src = "img/papir.png"
        document.getElementById('kolathat').style.visibility = "hidden";
        document.getElementById('ollolathat').style.visibility = "hidden";
        document.getElementById('pontszam').innerHTML = "Pontszám:"+pontszam+" - "+geppontszam;
        dontetlen = dontetlen+1;
        document.getElementById('dontetlen').innerHTML = "Döntetlenek: "+dontetlen+" db";
    }
    else{
        document.getElementById('gepvalasztasa').innerHTML = "Gép: Olló"
        document.getElementById('gepvalaszt').src = "img/ollo.png"
        document.getElementById('papirlathat').style.visibility = "hidden";
        document.getElementById('kolathat').style.visibility = "hidden";
        geppontszam = geppontszam+1;
        document.getElementById('pontszam').innerHTML = "Pontszám:"+pontszam+" - "+geppontszam;
        document.getElementById('dontetlen').innerHTML = "Döntetlenek: "+dontetlen+" db";
    }
    nyertes();
}
function ollo(){
    document.getElementById('onvalasztasa').innerHTML = "Válasszon egyet: Olló"
    var valasztott = 1;
    var gep = Math.floor(Math.random() * 3) +1;
    reset();
    if(gep == 1){
        document.getElementById('gepvalasztasa').innerHTML = "Gép: Kő"
        document.getElementById('gepvalaszt').src = "img/ko.png"
        document.getElementById('papirlathat').style.visibility = "hidden";
        document.getElementById('ollolathat').style.visibility = "hidden";
        geppontszam = geppontszam+1;
        document.getElementById('pontszam').innerHTML = "Pontszám:"+pontszam+" - "+geppontszam;
        document.getElementById('dontetlen').innerHTML = "Döntetlenek: "+dontetlen+" db";
    }
    else if(gep == 2){
        document.getElementById('gepvalasztasa').innerHTML = "Gép: Papír"
        document.getElementById('gepvalaszt').src = "img/papir.png"
        document.getElementById('kolathat').style.visibility = "hidden";
        document.getElementById('ollolathat').style.visibility = "hidden";
        pontszam= pontszam+1;
        document.getElementById('pontszam').innerHTML = "Pontszám:"+pontszam+" - "+geppontszam;
        document.getElementById('dontetlen').innerHTML = "Döntetlenek: "+dontetlen+" db";
    }
    else{
        document.getElementById('gepvalasztasa').innerHTML = "Gép: Olló"
        document.getElementById('gepvalaszt').src = "img/ollo.png"
        document.getElementById('papirlathat').style.visibility = "hidden";
        document.getElementById('kolathat').style.visibility = "hidden";
        document.getElementById('pontszam').innerHTML = "Pontszám:"+pontszam+" - "+geppontszam;
        dontetlen = dontetlen+1;
        document.getElementById('dontetlen').innerHTML = "Döntetlenek: "+dontetlen+" db";
    }
    nyertes();
}