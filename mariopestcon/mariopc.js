const marioPc = document.mariopc
marioPc.addEventListener("submit",function(event){
    event.preventDefault()
    const totalval = document.createElement("h1")


    const total = parseInt(mariopc.goomba.value * 5)+ parseInt(mariopc.bobomb.value * 7) + parseInt(mariopc.cheepcheep.value * 11)

    totalval.textContent = " congrats " + total + " you win "
    const grandtotal = document.getElementById("grandtotal")
    grandtotal.appendChild(totalval)

    mariopc.goomba.value = ""
    mariopc.bobomb.value = ""
    mariopc.cheepcheep.value = ""
    
})







// let goombas = document.getElementById(goomba);
// let bobomb = document.getElementById(bobomb);
// let cheepcheep = document.getElementById(cheepcheep);
// let totalvalue = document.getElementById(totalvalue);





