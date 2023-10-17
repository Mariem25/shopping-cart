let userName = document.querySelector('#username');
let email = document.querySelector('#email');
let password = document.querySelector('#password');
let signUp = document.querySelector('#SIGNUP');
console.log(signUp)
signUp.addEventListener('click',checkValue);

function checkValue(e){
    e.preventDefault()
    if(userName.value!='' && email.value!='' && password.value!=''){
        localStorage.setItem('uesrName',userName.value);
        localStorage.setItem('email',email.value);
        localStorage.setItem('password',password.value);
        setTimeout(()=>{
            
            window.location = 'index.html';
        },500);
        cleanInput();
    }
    else{
        alert('Please Enter Correct Info')
    }
}
console.log('d');

function cleanInput(){
    password.value = '';
    email.value = '';
    userName.value = '';
}