const body = document.querySelector('body');
const root = document.getElementById('root');

// create input
const input = document.createElement('input'); // <input></input> -- böyle bir değer üretmeni sağlıyor. html içersine henüz eklenmedi.
input.setAttribute('id', 'todo-input');


// create label
const label = document.createElement('label'); // <label></label> -- böyle bir değer üretmeni sağlıyor. html içersine henüz eklenmedi. -- label elemanı elimizde. özellikleri ile oynayabiliriz.
label.innerHTML = 'Bugün ne yapacaksin? <b>Lütfen kaydet.</b>'; // innerHTML: elemanın içersine istediğimiz değeri girmemizi sağlar. // b: bold kalın yazdırmak için html elemanı
label.setAttribute('for', 'todo-input'); // for attribute'u önemli çünkü etiketin ne için olduğunu dökümanda vurgular. for attribute'u id'ler ile kontrol edilir.

// create button
const button = document.createElement('button');
button.innerHTML = 'Kaydet';
button.addEventListener('click', addTodo);

root.append(label);
root.appendChild(input); // <div id="root"><input></input></root> -- root elemanının içine ekledim.
root.appendChild(button);

const todoListSection = document.createElement('div');
todoListSection.setAttribute('id', 'todo-list-section');

const listText = document.createElement('p');
listText.setAttribute('id', 'todo-list-text');
listText.innerHTML = 'Bugün Yapılacaklar Listesi';

const todoList = document.createElement('ul');
todoList.setAttribute('id', 'todo-list');

todoListSection.appendChild(listText);
todoListSection.appendChild(todoList);
body.appendChild(todoListSection);


function addTodo () {
  const todoListItem = document.createElement('li');
  const removeElement = document.createElement('span');
  removeElement.innerHTML = 'X';
  removeElement.addEventListener('click', removeTodo);

  const itemValue = input.value;
  todoListItem.innerHTML = itemValue;
  todoListItem.appendChild(removeElement);

  todoList.appendChild(todoListItem);
  input.value = '';
}

function removeTodo (event) {
  event.target.parentElement.remove();
}
