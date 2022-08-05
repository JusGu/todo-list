export const todoFactory = (status, description, dueDate) => {
    return {status, description, dueDate};
}

export const changeStatus = (todo, newStatus) => {
    todo.status = newStatus;
}

export const changeDescription = (todo, newDescription) => {
    todo.description = newDescription;
}

export const changeDueDate = (todo, newDueDate) => {
    todo.dueDate = newDueDate;
}