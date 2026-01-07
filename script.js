function addTask() {
const task = document.getElementById('new-task').value;
const list = document.getElementById('todo-list');
if (task.trim() !== '') {
    const item = document.createElement('li');
    item.innerText = task;
    list.appendChild(item);
    document.getElementById('new-task').value = '';
}
}