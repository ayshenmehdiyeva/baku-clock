function startclock(){
var d=new Date();
var saat=d.getHours();
var deq=d.getMinutes();
var san=d.getSeconds();

document.getElementById("hours").innerHTML=saat;
document.getElementById("min").innerHTML=deq;
document.getElementById("sec").innerHTML=san;

}

setInterval(startclock,10);



















