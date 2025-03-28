//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function () {
	const form = document.getElementById("userForm");
	const inputs = form.elements;

	for(let input of inputs){
		if(input.name && localStorage.getItem(input.name)){
			input.value = localStorage.getItem(input.name);
		}
	}

	form.addEventListener("input", function (event) {
  if(event.target.name){
	  localStorage.setItem(event.target.name, event.target.value);
  }		
	});

	document.getElementById("clear").addEventListener("click", function () {
		localStorage.clear();
		form.reset();
		
	})
	
})