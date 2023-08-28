function setError(input,message){
    input.style.border="1px solid red";
    const formcontrol=input.parentElement;
    const small1=formcontrol.querySelector("small");
    small1.className="smallshown";
    small1.innerHTML=message;
    let submitbtn=document.getElementById("btn");
    submitbtn.disabled=true;

}
function setSuccess(input){
    input.style.border="1px solid green";
    const formcontrol=input.parentElement;
    const small1=formcontrol.querySelector("small");
    small1.className="smallhidden";
    small1.innerHTML=message;
    let submitbtn=document.getElementById("btn");
    submitbtn.disabled=false;

}
function firstnamevalid(){
    let firstname=document.getElementById("firstName");
    if(firstname.value.trim() ===""){
       setError(firstname,"First Name is empty");
    }
    else{
        setSuccess(firstname);
    }
}
function lastnamevalid(){
    let lastname=document.getElementById("lastName");
    if(lastname.value.trim()===""){
        setError(lastname,"Last Name is empty");
    }
    else{
        setSuccess(lastname);
    }
}
function validateNumber(input) {
    var re = /^(\d{3})[- ]?(\d{3})[- ]?(\d{4})$/

    return re.test(input)
  }


  function phonevalid() {
    let phone = document.getElementById("phone");
    let phoneValue = phone.value.trim();

    if (phoneValue === "") {
        setError2(phone, "Phone Number is invalid");
        return;
    }
    
    if (isNaN(phoneValue)) {
        setError2(phone, "Phone Number is invalid");
        return;
    }

    if (!validateNumber(phoneValue)) {
        setError2(phone, "Phone Number is invalid");
        return;
    }else{

    setSuccess2(phone);
    }
}
function emailvalid(){
    let email=document.getElementById("email");
    if(email.value.trim()==="" || !email.value.trim()==="@" || !email.value.trim()==="."){
        setError(email,"Email is invalid");
    }
    else{
        setSuccess(email);
    }
}
function messagevalid(){
    let message=document.getElementById("msg");
    if(message.value.trim()==="" ){
        setError(message,"message is empty");
    }
    else{
        setSuccess(message);
    }
}