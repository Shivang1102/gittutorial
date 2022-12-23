var form=document.getElementById('addForm');
var itemList=document.getElementById('items');
var filter=document.getElementById('filter');


//form submit event
form.addEventListener('submit' ,addItem);

// delete event
itemList.addEventListener('click', removeItem);


//filter event
filter.addEventListener('keyup', filterItems);
//add item
function addItem(e){
    e.preventDefault();

    //get input value
    var newItem=document.getElementById('item').value;
    //create li element
    var li=document.createElement('li');
    //add class
    li.className='list-group-item';
    
    //second box
    var nextitem=document.getElementById('item1').value;

    //addtext nodewith input value
    li.appendChild(document.createTextNode(newItem));
    li.appendChild(document.createTextNode(' '+nextitem));
    

    //create deletebtn element
    var deletebtn=document.createElement('button');
    //add class
    deletebtn.className='btn btn-danger btn-sm float-right delete';
    //add text
    deletebtn.appendChild(document.createTextNode('X'));
    var editbutton=document.createElement('button');
editbutton.className='btn btn-primary btn-sm float-right ';
editbutton.appendChild(document.createTextNode('Edit'));


    
    li.appendChild(deletebtn);
    li.appendChild(editbutton);
    

    itemList.appendChild(li);


    

}

//removeItem

function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are u sure')){
            var li=e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}
//filter item

function filterItems(e) {
    e.preventDefault();
   // convert lower case
   var text = e.target.value.toLowerCase();
   //get list
   var item=itemList.getElementsByTagName('li');
   //convert to array
   Array.from(item).forEach(function(item){
    var itemName=item.firstChild.textContent;
    var decb=item.childNodes[1].textContent;
    if(itemName.toLowerCase().indexOf(text)!=-1 || decb.toLowerCase().indexOf(text)!=-1){
    item.style.display='block';
   }
   else{
    item.style.display='none';
   }
   })
}

// var editbutton=document.createElement('button');
// editbutton.className='btn btn-danger btn-sm float-right delete';
// editbutton.appendChild(document.createTextNode('Edit'));

var li=document.getElementsByTagName('li');
for(var i=0;i<li.length;i++){
    var editbutton=document.createElement('button');
editbutton.className='btn btn-primary btn-sm float-right ';
editbutton.appendChild(document.createTextNode('Edit'));
    li[i].appendChild(editbutton);
}


//addind new decsribtion

// var box=document.getElementById('addForm')
// var decribtion=document.createElement('input');
// decribtion.className='form-control mr-2 ';
// decribtion.id='item1';
// decribtion.setAttribute('type','text');
// box.appendChild(decribtion);
