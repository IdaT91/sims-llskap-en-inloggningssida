localStorage.setItem("userName", "Sara"); /* sparar användarnamnet Sara i localstorage*/
localStorage.setItem("passWord", "qwe123");  /* sparar lösenordet qwe123 i localstorage*/

const userName = document.getElementById("userName"); /*deklarerar användarnamn */
const passWord = document.getElementById("passWord");  /*deklarerar lösenord */
const logInBtn = document.getElementById("logInBtn");  /*deklarerar logga in knappen */
let bodyTag = document.querySelector("body"); /*skapar min bodyTag i bodyn i html här utanför så alla funktioner som behöver nå den gör det. */
let goBackBtn = document.createElement("button");/*skapar min gå tillbaka knapp */
let logOutBtn = document.createElement("button");/*skapar min logga ut knapp */

logInBtn.addEventListener("click", function(){ /* skapar en eventlistener till min logga in knapp där jag säger att vid klick ska funktionen köras */
    let userName = document.getElementById("userName").value; /* deklarerar användarnamns värdet */
    let passWord = document.getElementById("passWord").value; /* deklarerar lösenord värdet */
    if(userName=="Sara" && passWord=="qwe123"){ /* om användarnamnet är Sara och lösenordet är qwe123 så ska funktionerna köras */
        inLoggad(); /* meddelande om att du är inloggad */
        loggaUtKnapp(); /* logga ut knapp */
    }
    else{ /* om användarnamnet eller lösenordet är annat så ska ett felmmeddelande visas samt en gå tillbaka knapp */
        wrong(); /* felmeddelande */
        GåTillbakaKnapp(); /* gå tillbaka knapp */
    }
})

function inLoggad(){
    let divTag = document.createElement("div"); /* skapar en div */
    let divTagText = document.createTextNode("Välkommen, du är nu inloggad"); /* skapar en text node i min div */
    divTag.appendChild(divTagText); /*det jag vill stoppa i min divTag dvs divTagText */
    bodyTag.appendChild(divTag); /*för att stoppa i divTag i BodyTag */
}

function GåTillbakaKnapp(){
    let goBackBtnText = document.createTextNode("Gå Tillbaka"); /*skapar en text node till min gå tillbaka knapp */
    goBackBtn.appendChild(goBackBtnText); /*för att stoppa i texten i min gå tillbaka knapp */
    bodyTag.appendChild(goBackBtn); /*för att stoppa i min gå tillbaka knapp i bodyTag */
}

function loggaUtKnapp(){
    let logOutBtnText = document.createTextNode("Logga ut");/*skapar en text node till min logga ut knapp */
    logOutBtn.appendChild(logOutBtnText); /*för att stoppa i texten i min logga ut knapp */
    bodyTag.appendChild(logOutBtn); /*för att stoppa i min logga ut knapp i bodyTag */
}

function wrong(){
    let divTag = document.createElement("div");/*skapar en div */
    let divTagText = document.createTextNode("Fel användarnamn eller lösenord");/*skapar en text node till min div */
    divTag.appendChild(divTagText); /*det jag vill stoppa i min divTag dvs divTagText */
    bodyTag.appendChild(divTag); /*för att stoppa i min divTag i bodyTag */
}

function rensa(){
    document.body.innerHTML = " "; /*för att rensa hela html innehållet */
    location.reload();/*laddar om sidan utan att ta bort allt*/
}

goBackBtn.addEventListener("click", function(){ /*när jag trycker på gå tillbaka knappen så körs functionen rensa */
    rensa();
})

logOutBtn.addEventListener("click", function(){ /*när jag trycker på logga ut knappen så körs funktionen rensa */
    rensa();
})
