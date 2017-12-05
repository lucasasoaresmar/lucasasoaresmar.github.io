const mainChild = document.querySelector("main").childNodes;
let mainChildsList = [];
let slideDisplay = 0;
let store = {};

mainChild.forEach((variable) => {
	if (variable.className == "slide") {
			mainChildsList.push(variable);
	}
});

display = (plus) => {
	if (slideDisplay + plus >= 0 && slideDisplay + plus < mainChildsList.length) {
		mainChildsList[slideDisplay].style.display = "none";
		mainChildsList[slideDisplay + plus].style.display = "block";
		slideDisplay += plus
		return slideDisplay;
	}
}

getName = (name) => {
	mainChildsList[1].querySelector("span").textContent = name;
	display(1);
}