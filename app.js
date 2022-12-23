var form=document.getElementById('my-form');
form.addEventListener('submit',additem);
function additem(e){
    e.preventDefault();
    var user=document.getElementById('name').value;
    var keyvale=document.getElementById('email').value;
    var details={
        name:user,
        email:keyvale
    }
    localStorage.setItem(details.email,JSON.stringify(details));
    shoenewuser(details);

    // var itemlist=document.getElementById('users');
    // var li=document.createElement('li');
    // li.appendChild(document.createTextNode(user+' '+keyvale));
    // itemlist.appendChild(li);
    
    
    
}
function shoenewuser(user){
    var parenetnode=document.getElementById('users');
    var child=`<li>${user.name}-${user.email}</li>`
    parenetnode.innerHTML= parenetnode.innerHTML+ child;
}