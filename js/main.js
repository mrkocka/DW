let ChaGenbutton = document.getElementById("ChaGen");
let dowbutton = document.getElementById("Dow");
let usefulbutton = document.getElementById("useful");
let inpressbutton = document.getElementById("inpress");
let backButton = document.getElementById("js-backButton");

//Area

let buttonList = document.getElementById("homeButton");
let downloadArea = document.getElementById("js-dArea");

//Evemt

dowbutton.addEventListener("click", buttonDelete);
backButton.addEventListener("click", back);

//Function

function buttonDelete() {
  buttonList.classList.add("invisible");
  downloadArea.style.display = "block";
}

function back() {
  buttonList.classList.add("visible");
  downloadArea.style.display = "none";
}
