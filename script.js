var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var css = document.querySelector("h3");
var body = document.getElementById("gradient");
var btn = document.getElementById("random");



function print(){
	css.textContent = color1.value + " " + color2.value;
}
print();
function setGradient(){
	try{
		body.style.background = 
		"linear-gradient(to right, " 
		+ color1.value 
		+ ", " 
		+ color2.value 
		+ " )";
		print();
	} catch(error) {
		color1.value = #FFFFFF;
		color2.value = #000000;
		body.style.background = 
		"linear-gradient(to right, " 
		+ color1.value 
		+ ", " 
		+ color2.value 
		+ " )";
		print();
	}
	
}
btn.onclick=function randomColour() {
	color1.value = "#" + Math.floor(Math.random()*16777215).toString(16);
	color2.value = "#" + Math.floor(Math.random()*16777215).toString(16);
	setGradient();
}


color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
