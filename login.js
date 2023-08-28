const form=document.getElementById('form1');
const username=document.getElementById('username');
const password=document.getElementById('password');

   

function showError(input, message){
    const inputName=input.parentElement;
    inputName.className='input-name error';
    const small=inputName.querySelector('small');
    small.innerText = message;
}

function showSuccess(input, message){
    const inputName=input.parentElement;
    inputName.className='input-name success';
    
}
form.addEventListener('submit',function(event){
    event.preventDefault();

    if(username.value ===''){
        showError(username,'username is invalid');
    } else{
        showSuccess(username);
    }
    if(password.value ===''){
        showError(password,'password is invalid');
    } else{
        showSuccess(password);
    }
   
});