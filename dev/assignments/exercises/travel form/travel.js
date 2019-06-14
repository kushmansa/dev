var f = document.passengerInfo.fname 
var l = document.passengerInfo.lname 
var a = document.passengerInfo.age
var mfo = document.passengerInfo.radioInput 
var de = document.passengerInfo.destination 
var fo = document.passengerInfo.foodoptions
var checkedRestrictions=[]
var myButton = document.getElementById("mybutton")


document.passengerInfo.addEventListener("submit", function(){
    event.preventDefault()

var i = 0   
for(var i=0; i <fo.length; i++){

    if(fo[i].checked ){
        checkedRestrictions.push(fo[i].value)
    }
}
    alert("mybutton" +": " +f.value +": " + l.value +": "+ a.value +": "+ mfo.value + ":"+ de.value+ ":" +fo.value +":" )
})
