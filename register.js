const state=document.getElementById("State")
const city=document.getElementById("city")

const AP=["Vizianagaram","Visakhapatnam","Parvathipuram Manyam","Alluri Sitharama Raju"]
const KL=["Kottayam","Kollam","Thiruvananthapuram","Ernakulam"]
const TN=["Chennai","Coimbatore","Salem","Kanjipuram"]
const KKA=["Bangalore","Vijayapura","Udupi","Belagavi"]

function dropdown(){
    city.innerHTML="";

    if(state.value=="KL"){
        for(var i=0;i<KL.length;i++){
            let newOption=document.createElement("option");
            newOption.value=KL[i];
            newOption.textContent=KL[i];
            city.appendChild(newOption);
        }
    }
    else if(state.value=="AP"){
        for(var i=0;i<AP.length;i++){
            let newOption=document.createElement("option");
            newOption.value=AP[i];
            newOption.textContent=AP[i];
            city.appendChild(newOption);
        }
    }
    else if(state.value=="TN"){
        for(var i=0;i<TN.length;i++){
            let newOption=document.createElement("option");
            newOption.value=TN[i];
            newOption.textContent=TN[i];
            city.appendChild(newOption);
        }
    }
    else{
        for(var i=0;i<KKA.length;i++){
            let newOption=document.createElement("option");
            newOption.value=KKA[i];
            newOption.textContent=KKA[i];
            city.appendChild(newOption);
        }
    }
}
state.addEventListener("change",dropdown);

function setError2(input,message){
    input.style.border="1px solid red";
    const registerform=input.parentElement;
    const small=registerform.querySelector("small");
    small.className="smallshown";
    small.innerHTML=message;
    let submitbtn=document.getElementById("signup");
    submitbtn.disabled=true;

}
function setSuccess2(input){
    input.style.border="1px solid green";
    const registerform=input.parentElement;
    const small=registerform.querySelector("small");
    small.className="smallhidden";
    small.innerHTML=message;
    let submitbtn=document.getElementById("signup");
    submitbtn.disabled=false;

}
function firstNamevalid(){
    let firstName=document.getElementById("Firstname");
    if(firstName.value.trim()===""){
        setError2(firstName,"First Name is empty");
    }
    if(isNaN(firstName)){
        setError2(firstName,"First Name is invalid");
    }
    else{
        setSuccess2(firstName);
    }
}
function lastNamevalid(){
    let lastName=document.getElementById("Lastname");
    if(lastName.value.trim()===""){
        setError2(lastName,"Last Name is empty");
    }
    if(isNaN()){
        setError2(lastName,"Last Name is invalid");
    }
    else{
        setSuccess2(lastName);
    }
}
document.addEventListener("DOMContentLoaded", function() {
    var currentDate = new Date();
    var formattedDate = currentDate.toISOString().split('T')[0];
    document.getElementById("dateofbirth").setAttribute("max", formattedDate);
  });
  
  function dateofBirthvalid() {
      var dobInput = document.getElementById("dateofbirth").value;
      var currentDate = new Date();
      var selectedDate = new Date(dobInput);
  
      if (isNaN(selectedDate) || selectedDate > currentDate) {
          setError2(selectedDate, "Selected date is invalid");
          return;
      } 
  
      var age = currentDate.getFullYear() - selectedDate.getFullYear();
      var monthDiff = currentDate.getMonth() - selectedDate.getMonth();
      if (monthDiff < 0 || (monthDiff === 0 && currentDate.getDate() < selectedDate.getDate())) {
          age--;
      }
  
      if (age < 18) {  
          setError2(selectedDate, "You must be at least 18 years old.");
          return;
      } else {
          setSuccess2(selectedDate);
      }
  }
  


function gendervalid(){
    let gender=document.getElementById("Gender");
    if(gender.value.trim()===""){
        setError2(gender,"Gender is empty");
    }
    else{
        setSuccess2(gender);
    }
}

function validateNumber(input) {
    var re = /^(\d{3})[- ]?(\d{3})[- ]?(\d{4})$/

    return re.test(input)
  }


  function phonevalid() {
    let phone = document.getElementById("PhoneNumber");
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

function setError2(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
    formControl.className = "box error";
    small.innerText = message;
}

function setSuccess2(input) {
    const formControl = input.parentElement;
    formControl.className = "box success";
}

function validateNumber(number) {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(number);
}

function validateAlphabets(text) {
    const alphabetRegex = /[a-zA-Z]/;
    return !alphabetRegex.test(text);
}

function phonevalid() {
    let phone = document.getElementById("PhoneNumber");
    let phoneValue = phone.value.trim();

    if (phoneValue === "") {
        setError2(phone, "Phone Number is empty");
        return;
    }

    if (isNaN(phoneValue)) {
        setError2(phone, "Phone Number is invalid");
        return;
    }

    if (!validateNumber(phoneValue)) {
        setError2(phone, "Phone Number is invalid");
        return;
    }

    if (!validateAlphabets(phoneValue)) {
        setError2(phone, "Phone Number cannot contain alphabetic characters");
        return;
    } 

    setSuccess2(phone);
}






function mailvalid(){
    let email=document.getElementById("email");
    if(email.value.trim()==="" || !email.value.trim()==="@" || !email.value.trim()==="."){
        setError2(email,"Email is empty");
    }
    else{
        setSuccess2(email);
    }
}
function addressvalid(){
    let address=document.getElementById("Address");
    if(address.value.trim()===""){
        setError2(address,"Address is empty");
    }
    else{
        setSuccess2(address);
    }
}
function statevalid(){
    let state=document.getElementById("State");
    if(state.value.trim()===""){
        setError2(state,"State is empty");
    }
    else{
        setSuccess2(state);
    }
}
function usernamevalid(){
    let username=document.getElementById("Username");
    let minUsernameLength = 5;
    let maxUsernameLength = 20;
    if(username.value.trim()===""){
        setError2(username,"Username is empty");
    }
    else if (username.length < minUsernameLength || username.length > maxUsernameLength){
        setError2(username,"Username is empty");
    }
    else{
        setSuccess2(username);
    }
}
function cpasswordvalid(){
    let password=document.getElementById("password");
    let cpassword=document.getElementById("Password2")
    if(password.value.trim()!=""){
        if(password.value.trim()===cpassword.value.trim())
        {
        setSuccess2(cpassword);
        }
    else{
        setError2(cpassword,"password  not matched");
       }
    }
} 