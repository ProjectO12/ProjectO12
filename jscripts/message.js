let code = prompt("Enter Chaitra's Secret Code (or) Chaitra's Usual Nickname");
let text;
if (code == "😂" || code.trim().toLowerCase() == "cherry") {
  	alert("Correct");
	document.getElementById("mainContainer").style.display = "block";
} else {
	document.getElementById("mainContainer").style.display = "none";
  	alert("Incorrect!!. Try Reloading the page (or) Exit");
}