let mesInput = document.getElementById("new-mes"); 
let addButton = document.getElementById("add");
let messages = document.getElementById("messages");
let empty = document.getElementById("empty");

let createNewTaskElement = function(taskString) {
	// create List Item
  let listItem = document.createElement("li");
  // p
  let p = document.createElement("p");
  // button.delete
  let deleteButton = document.createElement("button");
  

  deleteButton.innerText = "X";
  deleteButton.className = "delete";
  
  p.innerText = taskString;
  
  // Each element needs appending
  listItem.appendChild(p);
  listItem.appendChild(deleteButton);

    return listItem;
}

let checkEmpty = function(ul) {
    if(ul.children.length == 0) {
        empty.classList.toggle("hidden");
    }
}
let getAnswer = function(answer) {
    setTimeout(() => { 
        console.log("Add Answer..."); 
        let sub = ['Ваня', 'Катя', 'Женя', 'человек', 'редиска', 'девочка'];
        let adj = ['красивая', 'маленький', 'жестокий', 'лечебный', 'волшебный'];
        let verb = ['кушал', 'ест', 'учится', 'спит', 'переживает'];
        if (answer == '') {
            answer = adj[Math.floor(Math.random() * adj.length)] + ' ' + sub[Math.floor(Math.random() * sub.length)] + ' ' + verb[Math.floor(Math.random() * verb.length)]
        }

        let listItem = createNewTaskElement(answer);
        listItem.classList.add('left');
        bindTaskEvents(listItem);
        messages.appendChild(listItem);    
    
    }, 1000);
    
}

//Add a new task
let addTask = function() {
    console.log("Add Task...");
    //Create a new list item with the text from the #new-task:
    if(mesInput.value != "") {
        let flag = false;
        let input = mesInput.value;
        if(mesInput.value.indexOf('calc:') == 0) {
            try {
                eval(mesInput.value.slice(5));
                flag = true;
            } catch {
                console.log("error occures");
                flag = false;
            }
        }
        
        let listItem = createNewTaskElement(input);
        //Append listItem to incompleteTaskHolder
        bindTaskEvents(listItem);
        mesInput.value = "";
        checkEmpty(messages);
        messages.appendChild(listItem);
        if(flag) {
            console.log('Im here math')
            getAnswer(eval(input.slice(5)).toString());
        } else {
            getAnswer('');
        }
        
    }
}
let deleteTask = function () {
    console.log("Delete Task...");
		//Remove the parent list item from the ul
  	let listItem = this.parentNode;
  	let ul = listItem.parentNode;
  
    ul.removeChild(listItem);
    checkEmpty(ul);
}
let bindTaskEvents = function(taskListItem) {
    console.log("Bind List item events");
    // select listitems chidlren
    let deleteButton = taskListItem.querySelector("button.delete");
    //bind deleteTask to delete button
    deleteButton.onclick = deleteTask;
    
}

addButton.addEventListener("click", addTask); 
mesInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      // code for enter
      addTask();
    }
});
for (var i = 0; i < messages.children.length; i ++) {	
    bindTaskEvents(messages.children[i]);
}