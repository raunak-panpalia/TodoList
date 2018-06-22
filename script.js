var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var list = document.querySelectorAll("li");
//console.log(deleteButtonList);



function inputLength() {
	return input.value.length;
}

function updateListItem(event){
	if (event.target.tagName === "BUTTON"){
		event.target.parentElement.remove();
	}
	else {
		if (event.target.tagName === 'LI') {
			event.target.classList.toggle("done");
			event.target.childNodes[1].disabled = !event.target.childNodes[1].disabled;		//disable delete button if an item is marked as done
		}
	}
}

//adding delete with new list item
function addDeleteButton(li){
	var btn = document.createElement("button");
	var t = document.createTextNode("Delete");
	btn.appendChild(t);
	li.appendChild(btn);
	return li;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	li = addDeleteButton(li);  // adding delete button to the li tag                  
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", updateListItem);

//

