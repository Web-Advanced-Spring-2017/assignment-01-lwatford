
var removeSVG = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 268.5 268.5"><path d="M63.1 250.3c0 0 4 18.2 24.6 18.2h93.1c20.6 0 24.6-18.2 24.6-18.2l18.4-178.7H44.7L63.1 250.3zM170 98.4c0-4.9 4-8.9 8.9-8.9 4.9 0 9 4 9 8.9l-8.9 134.2c0 4.9-4 8.9-8.9 8.9 -4.9 0-8.9-4-8.9-8.9L170 98.4zM125.3 98.4c0-4.9 4-8.9 8.9-8.9 4.9 0 8.9 4 8.9 8.9v134.2c0 4.9-4 8.9-8.9 8.9 -4.9 0-8.9-4-8.9-8.9V98.4zM89.5 89.5c4.9 0 8.9 4 8.9 8.9l9 134.2c0 4.9-4 8.9-8.9 8.9 -4.9 0-8.9-4-8.9-8.9L80.5 98.4C80.5 93.5 84.6 89.5 89.5 89.5zM218.4 35.8h-39.4V17.9C179 4.3 174.6 0 161.1 0L107.4 0C95 0 89.5 6 89.5 17.9v17.9H50.1c-7.9 0-14.3 6-14.3 13.4 0 7.4 6.4 13.4 14.3 13.4H218.4c7.9 0 14.3-6 14.3-13.4C232.7 41.8 226.3 35.8 218.4 35.8zM161.1 35.8h-53.7l0-17.9h53.7V35.8z"/></svg>'
var editSVG = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300"><path d="M150 0C67.2 0 0 67.2 0 150S67.2 300 150 300s150-67.2 150-150S232.8 0 150 0zM221.3 107.9l-14.2 14.2 -29-29 -11 11 29 29 -71.1 71.1 -29-29L84.9 186.3l29 29 -7.1 7.1 -0.1-0.1c-0.8 1.3-2.1 2.2-3.6 2.6l-27 6c-0.4 0.1-0.8 0.1-1.2 0.1 -1.5 0-2.9-0.6-4-1.6 -1.4-1.4-1.9-3.3-1.5-5.2l6-27c0.3-1.5 1.3-2.8 2.6-3.6l-0.1-0.1L192.3 78.9c1.7-1.7 4.4-1.7 6.1 0l22.9 22.9C223 103.5 223 106.3 221.3 107.9z"/></svg>'
var completeSVG = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 191.7 191.7"><path d="M95.8 0C43 0 0 43 0 95.8s43 95.8 95.8 95.8 95.8-43 95.8-95.8S148.7 0 95.8 0zM150.9 79.6l-60.2 60.2c-2.6 2.6-6 4-9.6 4 -3.6 0-7-1.4-9.6-4l-30.7-30.7c-2.6-2.6-4-6-4-9.6 0-3.6 1.4-7 4-9.6 2.6-2.6 6-4 9.6-4 3.6 0 7 1.4 9.6 4l21.1 21.1 50.6-50.6c2.6-2.6 6-4 9.6-4 3.6 0 7 1.4 9.6 4C156.1 65.8 156.1 74.4 150.9 79.6z"/></svg>'
var list = document.getElementById('completed');

var change = document.getElementById("item");

document.getElementById("add").addEventListener("click", function() {
	var value = document.getElementById('item').value;

//function to add to list
	if(value) {
		addItemTodo(value);
		document.getElementById('item').value ='';
		// console.log(value);
	}

});
//function to edit from current list
// function updateItemStatus(){
//     var updateId = this.id.replace("edit_", "");
//     var itemText = document.getElementById("item_" + updateId);

//      if(this.checked){
//      itemText.style.textDecoration = "edit";
//      } 
//      else{
//      itemText.style.textDecoration = "completed";
//      }
// }
//create modal div
//set display to none in the css
//create a function that "calls" the modal. in the function set display to block. 
//button on modal. or if you click anywhere dismiss. 
//function to remove from list 
function removeItem(){
	var item = this.parentNode.parentNode; //GRAB LIST ITEM 
	var parent = item.parentNode;
	console.log(item.parentNode);

	parent.removeChild(item);
}

// function change() {
// document.getElementById("item").value="todo";
// }

function editItem(){
	var item = this.parentNode.parentNode;
	var text = item.childNodes[0];
	var parent = item.parentNode;
	console.log('clicked ' + item.childNodes[0]);


	parent.editChild(item, text);
}

	// document.get ElementById()
	// document.querySelector('body').removeChild()
	// console.log(this);
	// above consile log notesthe trash is being pressed

function completedItem(){
	var item = this.parentNode.parentNode;
	var parent = item.parentNode;
	var id = parent.id;

	//item to be completed and 
	var target = (id === "todo")? document.getElementById('completed'):document.getElementById('todo');


	parent.removeChild(item);
	target.insertBefore(item, target.childNodes[0]);
}
//function to check off as done from list


function addItemTodo(text){
	console.log(text);
	var list = document.getElementById ('todo');
	//  // console.log(item)

	 var item = document.createElement('li');
	 item.innerText = text;

	 var buttons = document.createElement('div');
	 buttons.classList.add("buttons");

	 var remove = document.createElement('button');
	 remove.classList.add("remove");
	 remove.innerHTML = removeSVG;

	 //add click event to remove from list
	 remove.addEventListener('click', removeItem);

	 var complete = document.createElement('button');
	 complete.classList.add("complete");
   	 complete.innerHTML = completeSVG;

   	 //once an item from the list has been completed
	 complete.addEventListener('click', completedItem);


	 var edit = document.createElement('button');
	 edit.classList.add("edit");
	 edit.innerHTML = editSVG;

	 //ediclick event to remove from list
	 edit.addEventListener('click', editItem);

	 buttons.appendChild(remove);
	 buttons.appendChild(complete);
	 buttons.appendChild(edit);


	 item.appendChild(buttons);
	 list.appendChild(item);

	 //insert list before the child of the list
	 list.insertBefore(item, list.childNodes[0]);

}