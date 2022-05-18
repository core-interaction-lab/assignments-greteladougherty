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
        const tasksCopy = state.tasks.slice();
        tasksCopy.splice(index, 1);
        setTasks(tasksCopy);
    }

const buildTask = (item, index) => {
    const taskEl = document.createElement('article');
    const textEl = document.createElement('p');
    const deleteBtn = document.createElement('button');

    deleteBtn.innerHTML = 'Delete';

    deleteBtn.addEventListener('click', evt => {
        removeTask(index);
        buildTasks(state.tasks);
    });

    taskEl.innerHTML = item;
    
    taskEl.append(textEl, deleteBtn);
    return taskEl;
};

const buildTasks = items => {
    taskContainer.innerHTML = '';
    const taskEls = items.map(buildTask);
    taskContainer.append(...taskEls);
};

const main = () => {
    addTaskBtn.addEventListener('click', evt => {
        const taskValue = taskTextArea.value;
        if (taskValue.length > 0) {
            addTask(taskValue);
            buildTasks(state.tasks);
        }
    });
};

main();