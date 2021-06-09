const btnAdd = document.getElementById('btnAdd');
const btnEdit = document.getElementById('btnEdit');
const btnDone = document.getElementById('btnDone');
const btnDelete = document.getElementById('btnDelete');
const list = [];

const newTask = (title, dueDate) => 
  ({
    title: title,
    dueDate: dueDate,
    done: false,
  });

  const createTask = () => {
    const title = prompt('Que tarea vas a guardar?');
    const dueDate = prompt('Para cuando la vas a hacer?');
    return newTask(title, dueDate);
  }

  const processCreateTask = () => {
    const task = createTask();
    list.push(task);
    print(list);
  }

  const catchId = () => {
    let id = prompt("Cual es el id de la tarea?");
    if(isNaN(id) || id < 0) {id = 0};
    return parseInt(id, 10);
  }

  const processEditTask = () => {
    const id = catchId();
    if(!id || id > list.length) {
      alert("Valor no valido");
      return false;
    }
    const task = createTask();
    list[id-1] = task;
    print(list);
  }

  const getIsDone = () => {
    const isDone = prompt("Digite 1 para true, cualquier otra tecla para false");
    if(isDone==='1') return true;
    else return false;
  }

  const processDoneTask = () => {
    const id = catchId();
    const done = getIsDone();

    list[id-1].done = done;
    print(list);
  }

  const processDeleteTask = () => {
    const id = catchId();
    if(!id || id > list.length) {
      alert("Valor invalido");
      return;
    }

    list.splice((id-1), 1);
    print(list);
  }

  btnAdd.addEventListener('click', processCreateTask);
  btnEdit.addEventListener('click', processEditTask);
  btnDone.addEventListener('click', processDoneTask);
  btnDelete.addEventListener('click', processDeleteTask);