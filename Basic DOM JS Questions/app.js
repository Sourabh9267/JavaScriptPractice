
var h1=document.querySelector('h1');
console.log(h1)


h1.textContent="Good"


var btn=document.getElementById("button1")
console.log(btn)

var pwdbtn=document.querySelector('#pwdbtn')
var pwd=document.querySelector("#pwd")
var clicked=true;
function showpwd(){

    if(clicked)
    {
        pwd.type="text";
        clicked=false;
        pwdbtn.style.color='red'
    }
    else{
        clicked=true;
        pwd.type="password";
        pwdbtn.style.color='green'
        pwdbtn.style.fontsize='2';

    }
}

h1.classList.add('h1')

h1.classList.remove('h1')

var h3=document.createElement('h3')
h3.textContent="Hiii"

document.querySelector("body").appendChild(h3)



