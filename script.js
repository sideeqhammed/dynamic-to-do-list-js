document.addEventListener("DOMContentLoaded", function() {

  // const tasks = [];
  // localStorage.clear();
  // console.log(JSON.parse(localStorage.getItem("tasks")))
  const storedTasks = JSON.parse(localStorage.getItem("tasks")) || []

  // console.log((storedTasks))
  // console.log(typeof(storedTasks))
  
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");
  const doneList = document.getElementById("done-list");
  const h3 = document.getElementById("h3")
  


  


  
  function loadTasks() {
    if (storedTasks != null && storedTasks.length != 0) {
      console.log(storedTasks)
      storedTasks.forEach(task => {

        // create li element
        const li = document.createElement("li")

        // create remove button
        const btn = document.createElement("button")
        btn.textContent = "Remove"
        btn.classList.add("remove-btn")

        li.innerText = task;
        li.appendChild(btn);
        taskList.appendChild(li)
        
        
        // console.log("why?!")

        btn.addEventListener("click", () => {
        
          console.log("hey again")

          const task = li.firstChild.nodeValue
          const index = storedTasks.indexOf(task)
          console.log(index)
          if (index > -1){
            li.remove();
            storedTasks.splice(index, 1);
            localStorage.setItem("tasks", JSON.stringify(storedTasks))
          }
          
          
          
          console.log(storedTasks)
        })
      });
    }
  }

  loadTasks()
  // document.addEventListener("DOMContentLoaded", (loadTasks));


  
  // // checks if a list of items exist in done list (Done list)
  // if (li && doneList.contains(li)) {
  //     h3.innerText = "Tasks Done"
  //   } else (h3.innerText = "")



  // function to add tasks
  const addTask = () => {
    const taskText = taskInput.value.trim()
    if (taskText == "") {
      alert("Enter a task")
    } else if (storedTasks.some(task => taskText === task)) {
      alert("This task has been added to your list");
    } else {

      // create li element
      const li = document.createElement("li")
      li.textContent = taskText
    
      // push tasks array and localstorage
      storedTasks.push(taskText)
      // console.log(storedTasks)
      localStorage.setItem("tasks", JSON.stringify(storedTasks));
      // console.log(localStorage.getItem("tasks"))
      
      // create remove button
        const btn = document.createElement("button")
      btn.textContent = "Remove"
      btn.classList.add("remove-btn")


      // remove button click function
      btn.addEventListener("click", () => {
        
        console.log("hey")

        
        li.remove();
        
        console.log(storedTasks)

        // loadTasks();
        


        // // remove from to do and add to done (Done list)
        // doneList.appendChild(li);
        // btn.remove();
        // h3.innerText = "Tasks Done";
      })


      // add button to li and li to taskList
      li.appendChild(btn);
      taskList.appendChild(li);
      taskInput.value = "";



      // console.log(taskList)
    }

    
  }

  // if (storedTasks) {
  //   storedTasks.foreach(task => {
  //     addTask(task)
  //   })
  // }

  addButton.addEventListener("click", addTask);
  taskInput.addEventListener("keypress", () => {
    if (event.key == "Enter") {
      addTask();
    }
  })

  document.addEventListener("DOMContentLoaded", (addTask))


  // addTask()
})


