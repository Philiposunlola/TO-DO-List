const addBtn = document.querySelector("#add-btn");
const newTaskInput = document.querySelector("#wrapper input");
const taskContainer = document.querySelector("#tasks");
const error = document.querySelector("error");
const countValue = document.querySelector(".count-value");
let taskCount = 0;

const dispalyCount = (taskCount) => {
    countValue.innerText = taskCount;
};


const addTalk = () => {
    const taskName = newTaskInput.value.trim();
    error.style.display = "none";
    if (!taskname) {
        setTimeout(() => {
            error.style.display = "block";
        }, 200);
        return;
    }

    const task = `<div class="task">
        <input type="checkbox" class="task-check">
        <span class="taskname"${taskName}</span>
        <button class="edit">
        
        </button>
        <button class="delete">
        
        >`
};