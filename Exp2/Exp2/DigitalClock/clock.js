const d =new Date();
document.getElementById("all").innerText=d;

document.getElementById("dateDay").innerText=d.toDateString();

let stopit = setInterval(digiTime,1000);

function digiTime() {
    const d=new Date();
    document.getElementById("time").innerText=d.toLocaleTimeString();
}