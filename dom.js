//console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
//document.title=123
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
//document.all[10].textContent="Hello sunil";
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);
// console.log(document.getElementById('header-title'));
// var headerTitle=document.getElementById('header-title');
// console.log(headerTitle)
// var header=document.getElementById('main-header');
// headerTitle.textContent="hello";
// headerTitle.innerText="Good Bye";
// headerTitle.innerHTML='<h3>Hello</h3>';
// header.style.borderBottom='solid 3px #000';

//Get Element by class name
// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[3]);
// //items[3].textContent='Hello 2';
// //items[3].style.fontWeight='bold';
// items[3].style.backgroundColor = 'blue';

// for(var i=0; i<items.length;i++){
//     items[i].style.fontWeight='bold';
// }
//Get Element by TAG Name
// var li = document.getElementsByClassName('list-group-item');
// console.log(li);
// console.log(li[1]);
// //li[1].textContent='Hello 2';
// li[1].style.fontWeight='bold';
// li[1].style.backgroundColor = 'yellow';

// for(var i=0; i<items.length;i++){
//     li[i].style.backgroundColor='#f4f4f4';
// }
//query selector
// var header1=document.querySelector('#main-header');
// header1.style.borderBottom='solid 4px #ccc';
// var input=document.querySelector('input');
// input.value='Hello world'

// var submit = document.querySelector('input[type="submit"]');
// submit.Value="SEND"

// var item =document.querySelector('.list-group-item');
// item.style.color='red';

// var lastItem=document.querySelector('.list-group-item:last-child');
// lastItem.style.color='blue';

// var lastItem=document.querySelector('.list-group-item:nth-child(2)');
// lastItem.style.color='coral';

// Query selector all//
// var titles = document.querySelectorAll('.title');
// console.log(titles);
// titles[0].textContent="hello";

// var odd=document.querySelectorAll('li:nth-child(odd)');
// var even=document.querySelectorAll('li:nth-child(even)');
// for(var i=0;i<odd.length;i++){
//     odd[i].style.backgroundColor='#f4f4f4';
//     even[i].style.backgroundColor='#ccc';
// }

//Task-8
// var form = document.getElementById('addForm');
// var itemList = document.getElementById('items');
// var filter = document.getElementById('filter');

// // Form submit event
// form.addEventListener('submit', addItem);
// // Delete event
// itemList.addEventListener('click', removeItem);
// // Filter event
// filter.addEventListener('keyup', filterItems);

// // Add item
// function addItem(e){
//   e.preventDefault();

//   // Get input value
//   var newItem = document.getElementById('item').value;

//   // Create new li element
//   var li = document.createElement('li');
//   // Add class
//   li.className = 'list-group-item';
//   // Add text node with input value
//   li.appendChild(document.createTextNode(newItem));

//   // Create del button element
//   var deleteBtn = document.createElement('button');

//   // Add classes to del button
//   deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

//   // Append text node
//   deleteBtn.appendChild(document.createTextNode('X'));

//   // Append button to li
//   li.appendChild(deleteBtn);

//   // Append li to list
//   itemList.appendChild(li);
// }

// // Remove item
// function removeItem(e){
//   if(e.target.classList.contains('delete')){
//     if(confirm('Are You Sure?')){
//       var li = e.target.parentElement;
//       itemList.removeChild(li);
//     }
//   }
// }

// // Filter Items
// function filterItems(e){
//   // convert text to lowercase
//   var text = e.target.value.toLowerCase();
//   // Get lis
//   var items = itemList.getElementsByTagName('li');
//   // Convert to an array
//   Array.from(items).forEach(function(item){
//     var itemName = item.firstChild.textContent;
//     if(itemName.toLowerCase().indexOf(text) != -1){
//       item.style.display = 'block';
//     } else {
//       item.style.display = 'none';
//     }
//   });
// }
//console.log("sunil");
// // task-7
// var itemList = document.querySelector('#items');
// //parent node
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode);
// //parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement.parentElement);

// //child node
// console.log(itemList.childNodes);

// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor ='yellow';

// console.log(itemList.firstChild);
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello 1';

// console.log(itemList.lastChild);
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Lat text one';
// // next sibling
// console.log(itemList.nextSibling);
// console.log(itemList.nextElementSibling);
// console.log(itemList.previousSibling);
// console.log(itemList.previousElementSibling);

// //create element

// //create a div
// var newDiv = document.createElement('div');
// newDiv.className='hello';
// newDiv.id ='hello1';
// newDiv.setAttribute('title', 'Hello Div');
// var newDivText = document.createTextNode('Hello World');
// newDiv.appendChild(newDivText);
// var container = document.querySelector('header .container');
// var h1 = document.querySelector('header h1');
// console.log(newDiv);
// newDiv.style.fontSize = '30px';
// container.insertBefore(newDiv,h1);

//task-9
var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e){
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById('item').value;
  var newItem2 = document.getElementById('item2').value;
    var sumitem=newItem+newItem2
  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  // Add text node with input value
  //li.appendChild(document.createTextNode(newItem));
  li.appendChild(document.createTextNode(sumitem));
    
// Create edit button element
var editBtn = document.createElement('button');
// Add classes to del button
editBtn.className = 'btn btn-blue btn-sm float-right edit';

// Append text node
editBtn.appendChild(document.createTextNode('Edit'));

// Append button to li
li.appendChild(editBtn);

// Append li to list
itemList.appendChild(li);

  // Create del button element
  var deleteBtn = document.createElement('button');

  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));

  // Append button to li
  li.appendChild(deleteBtn);

  // Append li to list
  itemList.appendChild(li);

}

// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Filter Items
function filterItems(e){
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  // Get lis
  console.log(text);
  var items = itemList.getElementsByTagName('li');
  // Convert to an array
  console.log("items =",items);
  Array.from(items).forEach(function(item){
    console.log("this is the item",item);
    //var itemName = item.firstChild.textContent;
    var itemName = item.firstChild.textContent;
    //var itemName2=item.childNodes.textContent;
    console.log("item name is = ",itemName);
    if(itemName.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}