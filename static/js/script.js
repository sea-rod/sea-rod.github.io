var h1 = document.getElementById("animin");
var msg = h1.innerHTML;
h1.innerHTML = "";
console.log();

document.getElementsByTagName("body")[0].onload = function animin_fun(){
    var i = 0
    setInterval(
        ()=>{
                if (i>= msg.length)
                    return 0;
                h1.innerHTML += msg[i];
                i++;
            },200
        )
}