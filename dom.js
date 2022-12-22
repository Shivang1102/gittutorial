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
var items=document.getElementsByClassName("list-group-item");
console.log(items);
items[0].textContent="Hello1";
items[1].textContent="Hello2";
items[2].textContent="Hello3";
items[3].textContent="Hello4";

for(var i=0;i<items.length;i++){
    items[i].style.backgroundColor="green";
    items[i].style.fontWeight='bold';
}

// items[1].style.backgroundColor="green";
// items[0].style.backgroundColor="green";
// items[2].style.backgroundColor="green";


// items[1].style.fontWeight='bold';
// items[2].style.fontWeight='bold';
// items[0].style.fontWeight='bold';
// items[3].style.fontWeight='bold';




