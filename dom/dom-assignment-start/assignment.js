// const lit = document.getElementById('task-1');
// lit.style.color = 'white';
// lit.style.backgroundColor = 'black';


const lit = document.querySelector('li:first-of-type');
lit.style.color = 'red';
lit.style.color = 'white';
lit.style.backgroundColor = 'black';

const title = document.querySelector('title');
// title.textContent = 'Problem Solved!';

const docHead = document.head;
const docTitle2 = document.head.querySelector('title');
docTitle2.textContent = 'Problem Solved';

// const h1 = document.querySelector('h1');
const h1 = document.getElementsByTagName('h1');
h1[0].textContent = 'Assignment Solved!';




