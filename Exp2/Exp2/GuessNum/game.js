let ranNum;

ranNum = Math.floor(Math.random()*100);
console.log(`Actual number: ${ranNum}`);

let count=0;
let button=document.getElementById("clickButton");
button.addEventListener("click",()=> {
    count++;
    if(count > 10)
    {
        document.getElementById("attempts").innerText="You have done with 10 attempts,please restart the game";
        let rebtn=document.getElementById("restartBtn");
        rebtn.style.display="block";
        rebtn.innerText="Restart";
        rebtn.addEventListener("click",()=> {
            location.reload();
        })
    }
    else
    {
        getUserInput();
    }
})

function getUserInput() {
    
    let userInput = prompt("Guess the number:");
    document.getElementById("u-input").innerText=`Your Guessed number: ${userInput}`;

    let h=document.getElementById("hint");
    if(userInput > ranNum)
    {
        h.innerText="Entered number is bigger than actual number";
    }
    else if (userInput < ranNum)
    {
        h.innerText="Entered number is smaller than actual number";
    }
    else
    {
        h.innerText=`Congratulations!!You Guessed correctly\nActual number is:${ranNum}`;

        let rebtn=document.getElementById("restartBtn");
        rebtn.style.display="block";   //to make an HTML element visible
        rebtn.innerText="Replay";
        rebtn.addEventListener("click",()=> {
            location.reload();
        })
    }
}



