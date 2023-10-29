function stop(){
   document.getElementById("stop").style.backgroundColor="red"
   document.getElementById("stop1").style.backgroundColor="red"
   document.getElementById("ready").style.backgroundColor="gray"
   document.getElementById("go").style.backgroundColor="gray"
   document.getElementById("ready1").style.backgroundColor="gray"
   document.getElementById("go1").style.backgroundColor="gray"
}
function ready(){
    document.getElementById("ready").style.backgroundColor="orange"
    document.getElementById("ready1").style.backgroundColor="orange"
    document.getElementById("go").style.backgroundColor="gray"
    document.getElementById("stop").style.backgroundColor="gray"
    document.getElementById("stop1").style.backgroundColor="gray"
    document.getElementById("stop1").style.backgroundColor="gray"
    document.getElementById("go1").style.backgroundColor="gray"

}
function go(){
    document.getElementById("go").style.backgroundColor="green"
    document.getElementById("go1").style.backgroundColor="green"
    document.getElementById("ready").style.backgroundColor="gray"
    document.getElementById("ready1").style.backgroundColor="gray"
    document.getElementById("stop1").style.backgroundColor="gray"
    document.getElementById("stop").style.backgroundColor="gray"

}