function divider(){
    const divider = document.createElement('hr');
    divider.setAttribute('id', 'divider');
    return divider;
}
function createPage (){
    const page = document.createElement('div');
    page.setAttribute('id', 'page');

    const header = document.createElement('h1');
    header.setAttribute('id', 'header');
    header.innerHTML = 'TO DO <span>List</span>';
    page.appendChild(header);
    page.appendChild(divider());

    const title = document.createElement('input');
    title.setAttribute('id', 'title');
    title.setAttribute('value', 'TITLE');
    page.appendChild(title);
    page.appendChild(divider());

    const lines = document.createElement('div');
    lines.setAttribute('id', 'lines');
    for(let i = 0; i < 31; i++){
        const status = document.createElement('div');
        status.setAttribute('id', `status${i}`);
        status.setAttribute('class', 'status');
        lines.appendChild(status);

        const description = document.createElement('input');
        description.setAttribute('id', `description${i}`);
        description.classList.add('description');
        lines.appendChild(description);

        const space = document.createElement('div');
        space.setAttribute('id', `space${i}`);
        space.classList.add('space');
        lines.appendChild(space);

        const dueDate = document.createElement('input');
        dueDate.setAttribute('id', `dueDate${i}`);
        dueDate.classList.add('dueDate');
        lines.appendChild(dueDate);
    }
    page.appendChild(lines);

    page.appendChild(divider());


    return page;
}

export default createPage;