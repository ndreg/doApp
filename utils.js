const print = list => {
  const listHtml = document.getElementById('list');
  listHtml.innerHTML = ``;

  if(list.length == 0) return;

  let fragment = document.createDocumentFragment();

  for(let i=0; i<list.length; i++) {
    const task = document.createElement('li');
    task.classList.add('list-item');
    task.textContent = `${list[i].title} | ${list[i].dueDate}`;
    if(list[i].done) {task.classList.add('done')}
    fragment.appendChild(task);
  }

  listHtml.appendChild(fragment);
}