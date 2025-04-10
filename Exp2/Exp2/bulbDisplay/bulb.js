let imgDiv=document.getElementById("img");

let btnOn=document.getElementById("on");
btnOn.addEventListener("click",()=>{
    imgDiv.style.backgroundImage = "url('bulbON.png')";
})

let btnOff=document.getElementById("off");
btnOff.addEventListener("click",()=>{
    imgDiv.style.backgroundImage = "url('bulbOFF.png')";
})