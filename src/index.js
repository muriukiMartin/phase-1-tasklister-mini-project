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
  const TaskList = new TaskList();
  //initialize task class
  //get user input from form
  const newForm = document.getElementById("create-task-form");
  const newTask = document.getElementById("new-task-description");

  //get list of tasks
  const newTasks = document.getElementById("tasks");
});
