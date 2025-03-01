document.getElementById("new-date").textContent =
  new Date().toLocaleDateString();

document.getElementById("clear-log").addEventListener("click", function () {
  document.getElementById("activity-log").innerHTML = "";
});

document.getElementById("discover-box").addEventListener("click", function () {
  window.location.href = "./main.html";
});
function changeBackgroundColor() {
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = randomColor;
}

const today = new Date().toLocaleDateString("en-GB", {
  day: "numeric",
  month: "long",
  year: "numeric",
});
const dateElements = document.querySelectorAll(".date");
for (let i = 0; i < dateElements.length; i++) {
  dateElements[i].textContent = today;
}

document
  .getElementById("task-container")
  .addEventListener("click", function (event) {
    let button = event.target;
    if (!button.classList.contains("completed-btn") || button.disabled) return;

    alert("board update successful");
    button.disabled = true;
    button.classList.replace("bg-blue-500", "bg-gray-400");

    document.getElementById("task-count").textContent--;
    document.getElementById("completed-count").textContent++;

    let taskTitle = button
      .closest(".add-history")
      .querySelector("h2").textContent;
    taskTitle = taskTitle === "Fix Mobile Button Issue" ? "null" : taskTitle;

    document.getElementById(
      "activity-log"
    ).innerHTML += `<p class="text-md font-semibold">You have completed the task: ${taskTitle} at ${new Date().toLocaleTimeString()}</p>`;
  });
