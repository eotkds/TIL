const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input"); // document 뿐만 아니라 tag로도 검색 가능.
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"
let toDos = [];

const savedToDos = localStorage.getItem(TODOS_KEY);


function saveToDos(){
    const JSON_toDos = JSON.stringify(toDos);
    localStorage.setItem("todos", JSON_toDos);

}

function deleteToDo(e){
    /*
    console.log(e);
    console.log(e.target);
    console.log(this.parentNode);
    this.parentNode.remove();
    */
   const li = e.target.parentNode;
   /*
   li태그를 찾아서 index로 array를 지워주었다.
   let lis_arr = toDoList.querySelectorAll("li");
   lis_arr.forEach((el, i) => {
    if(el === li){
        toDos.splice(i, 1);
        saveToDos();
    }
   })
   */
   let newToDo_arr = toDos.filter((el)=> el.id != li.id);
   toDos = newToDo_arr;
   saveToDos();
   li.remove();

}

function paintToDo(newTodo){
    const liTodo = document.createElement("li");
    const spanTodo = document.createElement("span");
    const button =document.createElement("button");
    liTodo.id = newTodo.id;
    button.innerText ="❌";
    button.addEventListener("click",deleteToDo)
    liTodo.appendChild(spanTodo);
    liTodo.appendChild(button);
    spanTodo.innerText = newTodo.text;
    toDoList.appendChild(liTodo);
}

function handleToDoSubmit(event){
    const newTodo = toDoInput.value;
    toDoInput.value ="";
    const newToDoObj = {
        text: newTodo,
        id: Date.now(),

    };
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos()
    e.preventDefault()
}

toDoForm.addEventListener("submit", handleToDoSubmit);


if(savedToDos){
    const parsedToDos = JSON.parse(savedToDos);
    /*
    toDos를  let으로 선언하고,
    toDos = parsedToDos;
    */
    parsedToDos.forEach((el)=>{
        paintToDo(el);
        toDos.push(el);
    })
}