const inputBox = document.querySelector('#input-box');
const addBtn = document.querySelector('#add-btn');
const listContainer = document.querySelector('#list-container');
const error = document.querySelector('#error');

addBtn.addEventListener('click', (event) => {
    event.preventDefault();

    const taskName = inputBox.value.trim();
    if(!taskName){
        error.style.display = 'block';
        error.innerHTML = 'input must not be empty!!!';
        setTimeout(() => {
            error.style.display = 'none';
        }, 1500);
    }
    else{
        let listitem = document.createElement('li');
        listitem.innerHTML = taskName;
        listContainer.appendChild(listitem);
        let img = document.createElement('img');
        img.src = 'imgs/delete.png';
        img.style.width = '22px';
        listitem.appendChild(img);
    }

    inputBox.value = '';
    updateTasks();
});

listContainer.addEventListener('click', (event) => {
    event.preventDefault();

    if(event.target.tagName == 'LI'){
        event.target.classList.toggle('checked');
        updateTasks();
    }
    else if(event.target.tagName == 'IMG'){
        event.target.parentElement.remove();
        updateTasks();
    }
});


function updateTasks() {
    localStorage.setItem('tasks', listContainer.innerHTML);
}

function showTasks() {
    listContainer.innerHTML = localStorage.getItem('tasks');
}

showTasks();