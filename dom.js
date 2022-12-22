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

 var seconditem=document.querySelector('.list-group-item:nth-child(2)');
 seconditem.style.color="yellow";
//  seconditem.style.backgroundColor='green';

//  var thirditem=document.querySelector('.list-group-item:nth-child(3)');
//  thirditem.style.visibility = "hidden";


//Query selector all
// var item=document.querySelectorAll('li');
// console.log(item);
// item[2].style.color='green';


var odd=document.querySelectorAll('li:nth-child(odd)');
for(i=0; i<odd.length;i++){
    odd[i].style.backgroundColor='green';
}

