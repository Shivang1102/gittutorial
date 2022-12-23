var form=document.getElementById('my-form');
form.addEventListener('submit',additem);
function additem(e){
    e.preventDefault();
    var user=document.getElementById('name').value;
    var keyvale=document.getElementById('email').value;
    var details={
        user ,
        keyvale
    }
    
    localStorage.setItem(user,JSON.stringify(details));
}