fetch("https://raw.githubusercontent.com/Laboratoria/LIM011-data-lovers/master/src/data/potter/potter.json")
.then(x => x.json())
.then(y => megjelenit(y));
var tomb = []

function megjelenit(y){
    console.log(y)
    tomb = y
    var szoveg=""
    var index = 0
    for (const elem of y) {
        szoveg+=
        `
        <div class="col-sm-3">
            <div class="kepek">
                <p class="nevek">${elem.name}</p>
                <img src="${elem.image}" alt="" class="img-fluid kiskep">
                <button id="${index}" onclick="kattintas(this)" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">${elem.name} </button>
            </div>
        </div>
        `
        index++
    }
    document.getElementById("nevek").innerHTML=szoveg
}

function kattintas(gomb){
    //alert(gomb.id)
    document.getElementById("cim").innerHTML = tomb[gomb.id].name
    document.getElementById("tartalom").innerHTML = `
    <img src="${tomb[gomb.id].image}" alt="">
    <p><b>Színész:</b> ${tomb[gomb.id].actor}</p>
    <p><b>Neme:</b> ${tomb[gomb.id].gender}</p>
    <p><b>Ház:</b> ${tomb[gomb.id].house}</p>
    <p><b>Haja színe:</b> ${tomb[gomb.id].hairColour}</p>
    
    `
}
//több oszlopos gridbe legyenek a szereplők képei, ha kattintunk az alatta lévő gombon, akkor modális ablakban részletes adatok jelenjelenk meg//



