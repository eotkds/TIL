const loginForm = document.querySelector('#login-form');
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");
//아래처럼 가능
const loginInput = loginForm.querySelector("#login-form input");
const loginButton = loginForm.querySelector("#login-form button");
console.log(loginForm);
console.log(loginInput);
console.log(loginButton);

function onLoginBtnClick(){
    console.dir(loginInput);
    
    console.log(loginInput.value);
}

loginButton.addEventListener("click", onLoginBtnClick);