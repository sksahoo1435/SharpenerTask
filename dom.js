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

  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));

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
  var items = itemList.getElementsByTagName('li');
  // Convert to an array
  Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}
