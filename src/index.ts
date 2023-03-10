(() => {
    const todo = { //lista
        description: 'todo',
        dome: false, //marca se o todo já foi feito ou nao
    };

    const reminder = { //lembrete
        description: 'reminder', //descrição do reminder
        date: '15.12.2021', //data do lembrete
    };

    const taskView = {
        render(tasks: Array<Object>){ //função 
            const tasksList = document.getElementById('tasksList');
            while (tasksList?.firstChild){
                tasksList.removeChild(tasksList.firstChild);
            }

            tasks.forEach((task) => {
                const li = document.createElement('LI');
                const textNode = document.createTextNode(JSON.stringify(task));
                li.appendChild(textNode);
                tasksList?.appendChild(li);
            });
        },
    };

    const TaskController = (view: typeof taskView) => {
        const tasks: Array<Object> = [todo, reminder];

        const handleEvent = (event: Event) => {
            event.preventDefault();
            view.render(tasks)
        }

        document.getElementById('taskForm')?.addEventListener('submit', handleEvent);
    };

    TaskController(taskView);
}) ();