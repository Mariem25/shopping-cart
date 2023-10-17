let userName = document.querySelector('#username');
let password = document.querySelector('#password');
let signIn = document.querySelector('#SIGNIN');
console.log(signIn)
signIn.addEventListener('click',checkValue);

function checkValue(e){
    e.preventDefault()
    if(userName.value!=''  && password.value!=''){
        if(localStorage.getItem('uesrName') && localStorage.getItem('password')){
            setTimeout(()=>{
            
            window.location = 'index.html';
        },500);
        cleanInput();
        }
       
        
    }
    else{
        alert('Please Enter Correct Info')
    }
}
console.log('d');

function cleanInput(){
    password.value = '';
    userName.value = '';
}