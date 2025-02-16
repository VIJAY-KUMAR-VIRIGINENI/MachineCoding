let counter = 1;
function handleDelete(id) {
  console.log(id);
  const task = document.getElementById(id);
  if (task) {
    task.remove();
  }
}

function handleClick(id) {
  const task = document.getElementById("task");
  const taskList = document.getElementById("task-list");
  taskList.innerHTML += `<li id="task+${counter}">  <p> ${task.value}</p> 
  <button id="${counter}"  onclick="handleDelete('task+${counter}')">Delete</button> </li>`;
  counter++;
  console.log(counter);
  task.value = "";
}
