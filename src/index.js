import './sass/main.scss';

const printButtonNode = document.querySelector('.Print-button');
printButtonNode.addEventListener('click', onClick);

function onClick(e) {
  if (e.target.tagName !== 'BUTTON') {
    console.log(e.target.tagName);
    false;
  }
  window.print();
  return onClick;
}
