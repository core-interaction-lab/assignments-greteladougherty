const taskTextArea = document.getElementById('task-textarea');
const addTaskBtn = document.getElementById('add-task-btn');
const taskContainer = document.getElementById('task-container');


const state = {
    tasks: [],
};
// OR let todoItems = [],

const setTasks = items => {
    state.tasks = items;
};

const addTask = item => {
    const tasksCopy = state.tasks.slice();
    tasksCopy.push(item);
    setTasks(tasksCopy);
};

const removeTask = index => {
    deleteBtn.addEventListener('click', evt => {
        const tasksCopy = state.tasks.slice();
        tasksCopy.splice(index, 1);
        setTasks(tasksCopy);
    });

const buildTask = (item, index) => {
    const taskEl = document.createElement('article');
    const textEl = document.createElement('p');
    const deleteBtn = document.createElement('button');
    taskEl.innerHTML = item;
    return taskEl;
};

const buildTasks = {
    taskContainer.innerHTML = '';
    const taskEls = items.tasks.map(buildTask);
    taskContainer.append(...taskEls);
};

const main = () => {
    addTaskBtn.addEventListener('click', evt => {
        const taskValue = taskTextArea.value;
        if (taskValue.length > 0) {
            addTask(taskValue);
            buildTaskItems(state.tasks);
        }
    });
};

main();