
let container = document.getElementById("js-DWarea"); //célállomás
let Generalbutton = document.createElement("button"); //Nyomógomb létrehozása
let DWbutton = document.createElement("button"); 
let useful = document.createElement("button"); 
let info = document.createElement("button"); 




/*Középső Rész létrehozása*/ 

div = document.createElement("div"); //Elem létrehozása

div.style.backgroundColor = "white"; //Stílus beállítása
div.style.color = "white";

div.setAttribute("class","DWarea"); //Egyéni paraméter(class) beállítása

/*div.append("Element"); //Szöveg beillesztése*/

container.appendChild(div); //Létrehozott elem tárolóhoz adása



/*Kezdőképernyő Gombjai*/

/*Karakter Generálás Gomb*/
Generalbutton.append("Karakter generálás"); //Felirat beállítása
div.appendChild(Generalbutton); //Hozzáadás az előző elemhez
Generalbutton.setAttribute("class","button");

DWbutton.append("Letöltés"); //Felirat beállítása
div.appendChild(DWbutton); //Hozzáadás az előző elemhez
DWbutton.setAttribute("class","button");

useful.append("Hasznos holmik"); //Felirat beállítása
div.appendChild(useful); //Hozzáadás az előző elemhez
useful.setAttribute("class","button");


info.append("Hasznos holmik"); //Felirat beállítása
div.appendChild(info); //Hozzáadás az előző elemhez
info.setAttribute("class","button");



Generalbutton.addEventListener("click",clickHandler); //Eseménykezelő
DWbutton.addEventListener("click",clickHandler); //Eseménykezelő
useful.addEventListener("click",clickHandler); //Eseménykezelő


function clickHandler(){ //Az eseménykezelővel futtatott funkció

    alert("He he Pina!");
    
    }
    
