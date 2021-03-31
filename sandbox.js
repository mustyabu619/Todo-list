const addForm = document.querySelector('.add');
const addTodos = document.querySelector('.todos');
const search = document.querySelector('.search input');

// ADD TODOS

const generateTodos = (todo) => {
    const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center  text-light mb-2">
        <span>${todo}</span>
        <i class="far fa-trash-alt delate"></i>  
    </li>
    `;
    addTodos.innerHTML += html;
}

addForm.addEventListener('submit', e =>{

    e.preventDefault();
    const todo = addForm.add.value.trim();

    if(todo.length){
        generateTodos(todo);
        addForm.reset();
    }

});

// DELATE TODOS

addTodos.addEventListener('click', e =>{
    
    if(e.target.classList.contains('delate')){
        e.target.parentElement.remove();
    }
});

// KEYUP 

const filterTodos = (term) => {
  
    Array.from(addTodos.children)
        .filter((todo) => !todo.textContent.toLowerCase().includes(term))
        .forEach((todo) => todo.classList.add('filtered'));
   
    Array.from(addTodos.children)
        .filter((todo) => todo.textContent.toLowerCase().includes(term))
        .forEach((todo) => todo.classList.remove('filtered'));
};

search.addEventListener('keyup', () => {
    const term = search.value.trim().toLowerCase();
    filterTodos(term);
});  