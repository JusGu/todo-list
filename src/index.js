import createPage from './page.js';
import './style.css';
function component (){
    var element = document.createElement('div');
    element.appendChild(createPage())
    return element;
}

const todoFactory = (status, description, dueDate) => {
    return {status, description, dueDate};
}

const changeStatus = (todo, newStatus) => {
    todo.status = newStatus;
}

const changeDescription = (todo, newDescription) => {
    todo.description = newDescription;
}

const changeDueDate = (todo, newDueDate) => {
    todo.dueDate = newDueDate;
}
document.body.appendChild(component());