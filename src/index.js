class TaskList {
  constructor() {
    this.tasks = [];
  }

  createNewTask(description) {
    //create new task object
    const newTask = new Task(description);
    this.tasks.push(newTask);
  }

  renderTasks() {
    //add tasks to object as they appear
    return this.tasks.map((task) => task.render()).join("");
  }

  deleteTask(description) {
    this.tasks = this.tasks.filter((task) => task.description !== description);
  }
}


document.addEventListener("DOMContentLoaded", () => {
  const taskList = new TaskList();
  //initialize task class
  //get user input from form
  const newForm = document.getElementById("create-task-form");
  const newTask = document.getElementById("new-task-description");

  //get list of tasks
  const newTasks = document.getElementById("tasks");

  //display created tasks to list
  const displayTasks = () => (newTasks.innerHTML = taskList.renderTasks());
  
  //add event listeners
  newForm.addEventListener("submit", (event) => {
    //preventDefault() to stop submit if empty
    event.preventDefault();
    taskList.createNewTask(newTask.value);

    //to reset form after submission
    event.target.reset();
    displayTasks();
  })
  newTasks.addEventListener("click", (event) => {
    if (event.target.nodeName == "BUTTON") {
      taskList.deleteTask(event.target.dataset.description);
      displayTasks();
    }
  })

});

class Task {
  constructor(description) {
    this.description = description;
  }
  // add delete button
  render() {
    return `
      <li>
        ${this.description}
        <button data-description="${this.description}">Delete</button>
      </li>
      `;
  }
}


