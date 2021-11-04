const input=document.querySelector(".todo-input");
const button=document.querySelector(".todo-button");
const list=document.querySelector(".todo-list");

button.addEventListener("click",addItem);
getTodos();
input.value=null;



function addItem(event){
    event.preventDefault();
    if(input.value===""){
        alert("Nessuna parola inserita");
    }
    else{
        const div=document.createElement("div");
        div.classList.add("div-todo");

        const li=document.createElement("li");
        li.innerText=input.value;
        li.classList.add("li-todo");

        const complete=document.createElement("button");
        complete.classList.add("green-button");
        complete.innerHTML="<img class='complete-button'></img>";
        complete.addEventListener("click",done);
        

        const trash=document.createElement("button");
        trash.classList.add("red-button");
        trash.innerHTML="<img class='trash-button'></img>";
        trash.addEventListener("click",undone);
        
        save(input.value);

        div.appendChild(li);
        div.appendChild(complete);
        div.appendChild(trash);

        list.appendChild(div);

        input.value=null;
    }
}

function done(e){
    const btn=e.target;
    const div=btn.parentElement;
    div.classList.toggle("completed");
}

function undone(e){
    const btn=e.target;
    const div=btn.parentElement;
    const li=div.textContent;
    remove(li);
    div.remove();
}

function save(todo){
    //check
    let todos;
    if(localStorage.getItem("todos")===null){
        todos=[];
    }
    else{
        todos=JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(todo);
    localStorage.setItem("todos",JSON.stringify(todos));
}

function getTodos(){
     //check
     let todos;
     if(localStorage.getItem("todos")===null){
         todos=[];
     }
     else{
         todos=JSON.parse(localStorage.getItem("todos"));
     }
     todos.forEach(function(todo){
    
        const div=document.createElement("div");
        div.classList.add("div-todo");

        const li=document.createElement("li");
        li.innerText=todo;
        li.classList.add("li-todo");

        const complete=document.createElement("button");
        complete.classList.add("green-button");
        complete.innerHTML="<img class='complete-button'></img>";
        complete.addEventListener("click",done);
        

        const trash=document.createElement("button");
        trash.classList.add("red-button");
        trash.innerHTML="<img class='trash-button'></img>";
        trash.addEventListener("click",undone);
        

        div.appendChild(li);
        div.appendChild(complete);
        div.appendChild(trash);

        list.appendChild(div);
     })
}

function remove(item){
    //check
    let todos;
    if(localStorage.getItem("todos")===null){
        todos=[];
    }
    else{
        todos=JSON.parse(localStorage.getItem("todos"));
    }
    console.log(item,todos.indexOf(item));
    todos.splice(todos.indexOf(item),1);
    localStorage.setItem("todos",JSON.stringify(todos));
}