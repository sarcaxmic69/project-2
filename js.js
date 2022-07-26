document.getElementById("myButton").onclick = function () {
var n=Math.floor((Math.random()*6)+1);
var m=Math.floor((Math.random()*6)+1);
var k="images/dice"+n+".png";
var l="images/dice"+m+".png";
var img1=document.querySelectorAll("img")[0];
img1.setAttribute("src", k);
var img2=document.querySelectorAll("img")[1];
img2.setAttribute("src", l);
if(n>m){
document.getElementById("#title").innerText = "Player1 wins";
}
else if(n<m){
document.getElementById("#title").innerText = "Player2 wins"; 
}
else{
document.getElementById("#title").innerText = "Draw!"; 
}
}
document.getElementById("reset").onclick = function () {
    document.getElementById("#title").innerText = "Lets Play Again!!";
}