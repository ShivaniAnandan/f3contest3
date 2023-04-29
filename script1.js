const signUp = document.getElementById('signup');
const message = document.getElementById('message');


function Profile(){
    if(localStorage.getItem('token')){
        location.href='./index2.html';
    }
    else{
        alert('Sign Up First')
        location.href='./index1.html';
    }

}

function SignUp(){
    location.href='./index1.html';
}


signUp.addEventListener('click',()=>{
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const pass = document.getElementById('pass').value;
    const confirmPass = document.getElementById('confirm-pass').value;

    if(name=='' || email=='' || pass=='' || confirmPass==''){
        message.innerHTML=`<div style='color:red;'>Error : All the fields are mandatory</div>`;
        return;
    }

    if(pass!=confirmPass){
        message.innerHTML=`<div style='color:red;'>Error : Passwords MisMatch</div>`;
        return;
    }

    let user = {
        name:name,
        email:email,
        password:pass
    }

    localStorage.setItem("user",JSON.stringify(user));

    let token = '';
    for (let i = 0; i < 16; i++) {
      token += String.fromCharCode(Math.floor(Math.random() * 256));
    }
    
    // Store the token in local storage
    localStorage.setItem('token', btoa(token));

    message.innerHTML=`<div style='color:green'>Successfully Signed Up!</div>`;

    location.href='./index2.html';
})