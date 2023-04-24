const noTasksContainer = document.querySelector('.no-tasks');
const clearButton = document.querySelector('.btn-clear');
let tasks = [];

const addTask = (text) => {
    const taskItem = document.createElement('div');
    taskItem.classList.add('task-item');
    taskItem.innerHTML = `
<p class="task-text">${text}</p>
<input type="checkbox" class="task-checkbox">
`;
    document.querySelector('section:last-of-type').insertBefore(taskItem, clearButton.parentNode);
    tasks.push(taskItem);
    checkTasks();
}

const clearTasks = () => {
    tasks.forEach(task => task.remove());
    tasks = [];
    checkTasks();
}

const checkTasks = () => {
    if (tasks.length === 0) {
        noTasksContainer.style.display = 'block';
        clearButton.disabled = true;
    } else {
        noTasksContainer.style.display = 'none';
        clearButton.disabled = false;
    }
}

document.querySelector('form').addEventListener('submit', e => {
    e.preventDefault();
    const input = document.querySelector('.input-task');
    const text = input.value.trim();
    if (text) {
        addTask(text);
        input.value = '';
    }
});

const makeNotice = () => {
    const tasks = document.querySelectorAll('.task-item');
    if (tasks.length === 0) {
        noTasksContainer.classList.add('no-tasks__notice');
    } else {
        noTasksContainer.classList.remove('no-tasks__notice');
    }
}

clearButton.addEventListener('click', clearTasks);

makeNotice();
checkTasks();