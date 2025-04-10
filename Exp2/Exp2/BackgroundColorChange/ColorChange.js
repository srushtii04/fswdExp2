let stopit=setInterval(changeBackgroundColor,5000);  // 1sec = 1000milisecond
function changeBackgroundColor()
{
    let ranColor= "#" + Math.floor(Math.random()*16777215).toString(16); //generate random color
    document.body.style.backgroundColor = ranColor;
}

