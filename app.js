
const addForm = document.querySelector('.add');
const But = document.querySelector('.but');



const search = document.querySelector('.search input');
const list = document.querySelector('.todos');
//De la otra
const items = document.querySelectorAll('#timeline li');
//FIn de la otra


//function descri(datos){
 //      datos = window.prompt("Please Works");
     //  return datos;
   // };
//   let event = function Evento(datos) {
 
//  log.innerHTML =  datos;
 
//}


const generateTemplate = (todo, data) => {

  const html = `
   
      <li class="show">
        <div>
          <h4><i class="fas fa-chevron-right"></i>10/08/2019: ${todo}</h4>
         
          <p>Detalles: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, soluta!</p>
          <i class="far fa-trash-alt delete"></i>
        </div>
      </li>

  `;
  list.innerHTML += html;
};



 //log.innerText = event.type + '\n' + log.innerText;


const filterTodos = term => {

  // add filtered class
  Array.from(list.children)
    .filter(todo => !todo.textContent.toLowerCase().includes(term))
    .forEach(todo => todo.classList.add('filtered'));

  // remove filtered class
  Array.from(list.children)
    .filter(todo => todo.textContent.toLowerCase().includes(term))
    .forEach(todo => todo.classList.remove('filtered'));

};

// add todos event
addForm.addEventListener('submit', e => {
  
  e.preventDefault();
  const todo = addForm.add.value.trim();
  

  if(todo.length){
    generateTemplate(todo);
   
    addForm.reset();
  }

});

//But.addEventListener('submit', e => {
//  
//  e.preventDefault();
//
// let data =  But.add.value.trim();
//  if(data.length){
//    generateTemplate(data);
//   
//    But.reset();
//  }
//
//});



// But.addEventListener("click", ()=>{
// let data = window.prompt("Please Works");
// generateTemplate(data);
//});






// delete todos event
list.addEventListener('click', e => {

  if(e.target.classList.contains('delete')){
    e.target.parentElement.remove();
  }

});

//
//log.addEventListener('click', e=> {
//  if(e.target.classList.contains('info')){
//  datos = window.prompt("Please Works");
//  }
//});




// filter todos event
search.addEventListener('keyup', () => {

  const term = search.value.trim().toLowerCase();
  filterTodos(term);

});

//FUNCIONAMIENTO DEL REALY
///dsgdfaghadhgaetrgh
const isInViewport = el => {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

const run = () =>
  items.forEach(item => {
    if (isInViewport(item)) {
      item.classList.add('show');
    }
  });

// Events
window.addEventListener('load', run);
window.addEventListener('resize', run);
window.addEventListener('scroll', run);
//const info = document.addEventListener('click', event, false);