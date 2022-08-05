import createPage from './page.js';
import './style.css';
import * as request from './requests.js';
const curList = [];
const curListInit = () => {
  for (let i = 0; i < 31; i++) {
    curList.push(request.todoFactory(-1, '', ''));
  }
}
curList.push('TITLE');

function component() {
  var element = document.createElement('div');
  element.appendChild(createPage());
  curListInit();
  console.log(curList);
  return element;
}
document.body.appendChild(component());

const statuses = document.querySelectorAll('.status');
function handleStatusClick(target){
  alert('Status changed');

}
statuses.forEach(status => {
  status.addEventListener('click', e => handleStatusClick(e.target));
}
);

const descriptions = document.querySelectorAll('.description');

function handleDescriptionChange(e) {
  const nextDueDate = e.target.nextSibling.nextSibling;
  if (e.target.value === '') {
    nextDueDate.type = 'text';
    nextDueDate.value = '';
    nextDueDate.disabled = true;
  } else {
    nextDueDate.type = 'date';
    nextDueDate.disabled = false;
  }
  const id = e.target.id.slice(-1);
  request.changeDescription(curList[id], e.target.value);
};
descriptions.forEach(description => {
  description.addEventListener('change', handleDescriptionChange);
}
)

const dueDates = document.querySelectorAll('.dueDate');
function handleDueDateChange(e) {
  const id = e.target.id.slice(-1);
  request.changeDueDate(curList[id], e.target.value);
  console.log(curList);
}

dueDates.forEach(dueDate => {
  dueDate.addEventListener('change', handleDueDateChange);
}
)



