let tasks = [];

function addTask() {
    const title = document.getElementById('title').value.trim();
    const description = document.getElementById('description').value.trim();
    const deadline = document.getElementById('deadline').value.trim();
    const priority = document.getElementById('priority').value;

    if (title === '') {
        alert('Veuillez entrer un titre pour la tâche.');
        return;
    }

    const newTask = {
        title: title,
        description: description,
        deadline: deadline,
        priority: priority,
        completed: false
    };

    tasks.push(newTask);
    displayTasks();
    clearForm();
}

function displayTasks() {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        const taskItem = document.createElement('li');
        taskItem.classList.add('task');
        taskItem.innerHTML = `
            <h3>${task.title}</h3>
            <p>Description: ${task.description}</p>
            <p>Date limite: ${task.deadline}</p>
            <p>Priorité: ${task.priority}</p>
            <button onclick="markAsCompleted(${index})">Marquer comme terminée</button>
            <button onclick="editTask(${index})">Modifier</button>
            <button onclick="deleteTask(${index})">Supprimer</button>
        `;
        taskList.appendChild(taskItem);
    });
}

function markAsCompleted(index) {
    tasks[index].completed = true;
    displayTasks();
}

function editTask(index) {
    const editedTitle = prompt('Entrez le nouveau titre :', tasks[index].title);
    const editedDescription = prompt('Entrez la nouvelle description :', tasks[index].description);
    const editedDeadline = prompt('Entrez la nouvelle date limite :', tasks[index].deadline);
    const editedPriority = prompt('Entrez la nouvelle priorité :', tasks[index].priority);

    tasks[index].title = editedTitle || tasks[index].title;
    tasks[index].description = editedDescription || tasks[index].description;
    tasks[index].deadline = editedDeadline || tasks[index].deadline;
    tasks[index].priority = editedPriority || tasks[index].priority;

    displayTasks();
}

function deleteTask(index) {
    const confirmDelete = confirm('Voulez-vous vraiment supprimer cette tâche ?');
    if (confirmDelete) {
        tasks.splice(index, 1);
        displayTasks();
    }
}

function clearForm() {
    document.getElementById('title').value = '';
    document.getElementById('description').value = '';
    document.getElementById('deadline').value = '';
    document.getElementById('priority').value = 'basse';
}

displayTasks();
