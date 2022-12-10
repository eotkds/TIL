const loginForm = document.querySelector('#login-form');
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");
//아래처럼 가능
const loginInput = loginForm.querySelector("#login-form input");
const loginButton = loginForm.querySelector("#login-form button");
// console.log(loginForm);
// console.log(loginInput);
// console.log(loginButton);

function onLoginBtnClick(){
    const value = loginInput.value;
    if(value === ""){
        alert("Please write your name");
    }else if(value.length > 15){
        alert("Your name is too long");
    }
}
function onLoginSubmit(e){
    console.log(e);
    e.preventDefault();
    // if(value === ""){
    //     alert("Please write your name");
    // }else if(value.length > 15){
    //     alert("Your name is too long");
    // }
}
/**
 * form, submit 방식을 사용하면 
 * addEventListener 방식을 사용할 필요가 없다.
 * but
 * form submit 을 하면 페이지가 refresh 된다.
 */

// loginButton.addEventListener("click", onLoginBtnClick);
loginForm.addEventListener("submit", onLoginSubmit);