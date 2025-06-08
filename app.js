document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.getElementById("taskForm");

  if (taskForm) {
    taskForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const taskName = document.getElementById("task").value;
      const taskDate = document.getElementById("date").value;

      let tasks = JSON.parse(localStorage.getItem("trackifyTasks")) || [];
      tasks.push({ name: taskName, date: taskDate });
      localStorage.setItem("trackifyTasks", JSON.stringify(tasks));

      alert("Task added successfully!");
      window.location.href = "dashboard.html";
    });
  }
});

// Function to display tasks on dashboard
function viewTasks() {
  const taskList = document.getElementById("taskList");
  if (!taskList) return;

  taskList.innerHTML = ""; // Clear old list
  const tasks = JSON.parse(localStorage.getItem("trackifyTasks")) || [];

  if (tasks.length === 0) {
    taskList.innerHTML = "<li>No tasks added yet.</li>";
    return;
  }

  tasks.forEach(task => {
    const li = document.createElement("li");
    li.textContent = `📌 ${task.name} (Due: ${task.date})`;
    taskList.appendChild(li);
  });
}
