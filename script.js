const input = document.querySelector ('input');
const submit = document.querySelector ('button');
const list_el = document.querySelector('#list_el')
let counter = 1;

submit.addEventListener('click', (e) => {
    e.preventDefault();
    const task = input.value;
    input.value = '';
     
    if(!task) {
        alert('Please enter some text')
        return;
    }

    const taskList = document.createElement('div');
    taskList.classList.add('task')

    const content = document.createElement('div');
    content.classList.add('taskContent');
    content.innerText = `${counter++}. ${task}` ;

    const deleteButton = document.createElement('p');
    deleteButton.innerText = 'Delete';
    deleteButton.classList.add('delete');


    taskList.appendChild(content)
    list_el.appendChild(taskList)
    content.appendChild(deleteButton)

    document.addEventListener('click', (e) => {
        let el = e.target;
        if(el.classList.contains('delete')) {
            taskList.removeChild(content)
            counter = 1;
        }
    })
    
})

// getting the delete button when created

