var a=0
var myVar = setInterval(load,100);

function load(){
  a+=5
  document.getElementById("load")
  .innerHTML= "Loading "+a+ "%";
  console.log("a:",a);
  if(a >= 100){
    clearInterval(myVar);
    }
}
