localStorage.setItem("userName", "Sara"); 
localStorage.setItem("passWord", "qwe123");  

const userName = document.getElementById("userName"); 
const passWord = document.getElementById("passWord"); 
const logInBtn = document.getElementById("logInBtn");  
let bodyTag = document.querySelector("body"); 
let goBackBtn = document.createElement("button");
let logOutBtn = document.createElement("button");

logInBtn.addEventListener("click", function(){ 
    let userName = document.getElementById("userName").value; 
    let passWord = document.getElementById("passWord").value; 
    if(userName=="Sara" && passWord=="qwe123"){ 
        inLoggad(); 
        loggaUtKnapp(); 
    }
    else{ 
        wrong(); 
        GåTillbakaKnapp(); 
    }
})

function inLoggad(){
    let divTag = document.createElement("div");
    let divTagText = document.createTextNode("Välkommen, du är nu inloggad"); 
    divTag.appendChild(divTagText); 
    bodyTag.appendChild(divTag); 
}

function GåTillbakaKnapp(){
    let goBackBtnText = document.createTextNode("Gå Tillbaka"); 
    goBackBtn.appendChild(goBackBtnText); 
    bodyTag.appendChild(goBackBtn); 
}

function loggaUtKnapp(){
    let logOutBtnText = document.createTextNode("Logga ut");
    logOutBtn.appendChild(logOutBtnText); 
    bodyTag.appendChild(logOutBtn); 
}

function wrong(){
    let divTag = document.createElement("div");
    let divTagText = document.createTextNode("Fel användarnamn eller lösenord");
    divTag.appendChild(divTagText); 
    bodyTag.appendChild(divTag); 
}

function rensa(){
    document.body.innerHTML = " "; 
    location.reload();
}

goBackBtn.addEventListener("click", function(){ 
    rensa();
})

logOutBtn.addEventListener("click", function(){ 
    rensa();
})
