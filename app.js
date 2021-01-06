const totdoInput = document.querySelector(".todo-input");
const totdoButton = document.querySelector(".todo-button");

const totdoList = document.querySelector(".todo-list");

totdoButton.addEventListener('click', addTodo)
totdoList.addEventListener('click', deleteCheck)

function addTodo(event) {
   event.preventDefault();
   
   const todoDiv = document.createElement('div');
   todoDiv.classList.add("todo");

   const newtodo = document.createElement("li")
   newtodo.innerText = totdoInput.value;
   newtodo.classList.add('todo-item');
   todoDiv.appendChild(newtodo);
   
   const  completedButton = document.createElement('button');
completedButton.innerHTML ='<i class="fas fa-check"></i>';
completedButton.classList.add("complete-btn");
todoDiv.appendChild(completedButton);

const  trashButton = document.createElement('button');
trashButton.innerHTML ='<i class="fas fa-trash"></i>';
trashButton.classList.add("trash-btn");
todoDiv.appendChild(trashButton);

totdoList.appendChild(todoDiv);

totdoInput.value = "";
}


function deleteCheck(e) {
    const item = e.target;

    if(item.classList[0] ==="trash-btn"){
        const todo =item.parentElement;
        todo.remove();
    }

    if(item.classList[0] === "complete-btn"){
        const todo =item.parentElement;
        todo.classList.toggle('completed');
    }
    
}