const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')

function showError(input,message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';

    const small = formControl.querySelector('small')
    small.innerText = message
}

function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

const checkRequired = (inputArray) => {
    inputArray.forEach(element => {
        if (element.value.trim() === ''){
            showError(element,`${getErrorName(element.id)} is Required`)
        }else{
            showSuccess(element)
        }
    });
}

//Check's Username
checkUsername = (username,min,max) => {
    if(username.value.length < min){
        showError(username, `Username must be greater than ${min} character`)
    }else if (username.value.length > max) {
        showError(username, `Username must be less than ${max} character`)
    }else{
        showSuccess(username)
    }
}

//checks Password
checkPassword = (password,min,max) => {
    if(password.value.length < min){
        showError(password, `Password must be greater than ${min} character`)
    }else if (password.value.length > max) {
        showError(password, `Password must be less than ${max} character`)
    }else{
        showSuccess(password)
    }
}

checkEmail = (email) => {
    console.log(email.value)
    regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if ((!regex.test(String(email.value).toLowerCase()))){
        showError(email,'Enter valid email')
    }else{
        showSuccess(email)
    }
}

//check if Password is same
function checkPasswordMatch(input1,input2){
    if (input1.value !== input2.value){
       showError(input2,'password do not match')
    }
}


function getErrorName(id){
    return id = id.charAt(0).toUpperCase() + id.slice(1)
}
//Event Listeners
form.addEventListener('submit' , function(e){
    e.preventDefault();

   checkRequired([username,email,password,password2])
   checkUsername(username,6,15)
   checkPassword(password,6,25)
   checkEmail(email)
   checkPasswordMatch(password,password2)

})