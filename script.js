document.addEventListener("DOMContentLoaded", function() {
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");
  const doneList = document.getElementById("done-list");
  const h3 = document.getElementById("h3")
  const li = document.querySelector("li")

  
  // checks if a list of items exist in done list
  if (li && doneList.contains(li)) {
      h3.innerText = "Tasks Done"
    } else (h3.innerText = "")

  // function to add tasks
  const addTask = () => {
    const taskText = taskInput.value.trim()
    if (taskText == "") {
      alert("Enter a task")
    } else {
      const li = document.createElement("li")
      li.textContent = taskText

      const btn = document.createElement("button")
      btn.textContent = "Remove"
      btn.classList.add("remove-btn")

      // button click function
      btn.addEventListener("click", () => {
        li.remove()
        doneList.appendChild(li)
        btn.remove()
        h3.innerText = "Tasks Done"
        
      })
      li.appendChild(btn);
      taskList.appendChild(li);
      taskInput.value = ""
      console.log(taskList)
    }
  }

  addButton.addEventListener("click", addTask);
  taskInput.addEventListener("keypress", () => {
    if (event.key == "Enter") {
      addTask();
    }
  })

  document.addEventListener("DOMContentLoaded", (add))


  // addTask()
})
