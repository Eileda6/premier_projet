function createGameGrid()
{
    const grid = document.getElementById("game-grid");
    const tab=["🎄","🎁","❄️","⛄","🎉","💐","🥂","🌠","🎄","🎁","❄️","⛄","🎉","💐","🥂","🌠"];
    for(i=0;i<16;i++)  
    {
        const div=document.createElement("div");
        div.innerHTML=tab[i]; 
        div.classList.add("emoji");
        div.classList.add("transparent");
        div.addEventListener("click",onFlip);
        grid.appendChild(div);
       
    }
    
}
let firstCardFlip = null;
let secondCardFlip = null;
createGameGrid();
function onFlip(){
    this.classList.remove("transparent");
    
    if (firstCardFlip === null)
    {
        firstCardFlip = this;
    }

    else if (firstCardFlip !== null && secondCardFlip===null)
    {
        secondCardFlip = this;
    }
    else if (firstCardFlip !== null && secondCardFlip!==null)
    {
        checkForMatch();
        firstCardFlip = this;
        secondCardFlip = null;
    } 

}

function checkForMatch(){

    if(firstCardFlip.innerHTML !== secondCardFlip.innerHTML)
    {
        firstCardFlip.classList.add("transparent");
        secondCardFlip.classList.add("transparent");
    }
    
}