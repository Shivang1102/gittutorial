// // console.dir(document);

// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// // document.title=123;
// console.log(document.doctype);
// console.log(document.body);
// console.log(document.head);
// console.log(document.all);
// console.log(document.all[10]);
// // document.all[10].textContent="Hello";
// console.log(document.forms[0]);
// console.log(document.links);

// console.log(document.getElementById("header-title"));
// var headertitle = document.getElementById("header-title");
// var header=document.getElementById("main-header");
// console.log(headertitle);
// headertitle.textContent="Hello";
// headertitle.innerText="Goodbye";
// headertitle.innerHTML='<h3>Hello</h3>';
// header.style.borderBottom="solid 3px #000";

// var additem= document.getElementById("Add");
// console.log(additem.textContent);
// additem.style.color="green";
// additem.style.fontWeight="bold";
// var items=document.getElementsByClassName("list-group-item");
// console.log(items);
// items[0].textContent="Hello1";
// items[1].textContent="Hello2";
// items[2].textContent="Hello3";
// items[3].textContent="Hello4";

// for(var i=0;i<items.length;i++){
//     items[i].style.backgroundColor="green";
//     items[i].style.fontWeight='bold';
// }

// var li=document.getElementsByTagName('li');
// console.log(li);
// li[0].textContent="My name";
// li[0].style.backgroundColor="green";
// for(var i=0;i<li.length;i++){
//     li[i].style.backgroundColor='Yellow';
// }


//Query selector//

// var header=document.querySelector('#main-header');
// header.style.borderBottom ='solid 4px #ccc';
// var input=document.querySelector('input');
// input.value='Hello World';

//  var submit=document.querySelector('input[type="submit"]')
//  submit.value='send';

//  var item=document.querySelector('.list-group-item');
//  item.style.color='green';


//  var lastitem=document.querySelector('.list-group-item:last-child');
//  lastitem.style.color="red";

//  var seconditem=document.querySelector('.list-group-item:nth-child(2)');
//  seconditem.style.color="yellow";
//  seconditem.style.backgroundColor='green';

//  var thirditem=document.querySelector('.list-group-item:nth-child(3)');
//  thirditem.style.visibility = "hidden";


//Query selector all
// var item=document.querySelectorAll('li');
// console.log(item);
// item[2].style.color='green';


// var odd=document.querySelectorAll('li:nth-child(odd)');
// for(i=0; i<odd.length;i++){
//     odd[i].style.backgroundColor='green';
// }

//traversing 

var itemList=document.querySelector('#items');
//parent node
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor='green';
// console.log(itemList.parentNode.parentNode.parentNode);

//parent element

// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor='green';
// console.log(itemList.parentElement.parentElement.parentElement);

//child node

// console.log(itemList.childNodes);
// console.log(itemList.children);


//Firstchild

// console.log(itemList.firstChild);
//last child
// console.log(itemList.lastChild);
//first element child

// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent='Hello';
//last element child
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent='Hello';

//next silbling and nextelement sibling
// console.log(itemList.nextSibling);
// console.log(itemList.nextElementSibling);
//previous sibling and pervious elemnet sibling

// console.log(itemList.previousSibling);
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color='green';

//create element

// var newdiv=document.createElement('div');
// //add class
// newdiv.className='Hello';
// //add id
// newdiv.id='Hello1';
// //set attribute
// newdiv.setAttribute('title','Hello Div');
// //create textnode
// var newDivText=document.createTextNode('Hello World');
// //add text to the div
// newdiv.appendChild(newDivText);

// var container=document.querySelector('header .container');
// var h1=document.querySelector('header h1');



// console.log(newdiv);
// container.insertBefore(newdiv,h1);

var createli=document.createElement('li')
createli.className='list-group-item';
var newtext=document.createTextNode('Hello');
createli.appendChild(newtext);

console.log(createli);

var parentNode=document.getElementById('items');
console.log(parentNode);
// parentNode.appendChild(createli);
parentNode.innerHTML= '<l1>Hello</li>'+parentNode.innerHTML;












