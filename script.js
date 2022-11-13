let form = document.querySelector('form')
let input = document.querySelector('input')
let todos = document.querySelector('.todos')

function getTodo(value){
    let todo = document.createElement("div")
    let textEl = document.createElement("span")
    textEl.innerHTML = value
    todo.appendChild(textEl)
    let closeEl = document.createElement("span")
    closeEl.innerHTML = "&times;"
    closeEl.classList.add("delete")

    closeEl.addEventListener('click', function(e){
        todos.removeChild(todo)
    })

    todo.appendChild(closeEl)
    todo.classList.add('todo')
    return todo
}

form.addEventListener('submit', function (e) {
    e.preventDefault()
    let value = input.value
    if(!value.trim()) return
    todos.appendChild(getTodo(value))
    input.value = ''
})

// document.querySelector('.add-btn').onclick = function(){
//   if(document.querySelector('.todo-task input').value.length == 0){
//       alert("Please Enter a Task")
//   }

//   else{
//       document.querySelector('#tasks').innerHTML += `
//           <div class="task">
//               <span id="taskname">
//                   ${document.querySelector('.todo-task input').value}
//               </span>
//               <button class="delete">
//                   <i class="far fa-trash-alt"></i>
//               </button>
//           </div>
//       `;

//       var current_tasks = document.querySelectorAll(".delete");
//       for(var i=0; i<current_tasks.length; i++){
//           current_tasks[i].onclick = function(){
//               this.parentNode.remove();
//           }
//       }
//   }
// }