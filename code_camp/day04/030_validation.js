let validation = (pw1, pw2)=>{
    if(pw1.length < 8 || pw2.length > 16){
        console.log("비밀번호는 8~16자리여야 합니다.")
        return
    }else if(pw1.toUpperCase() === pw2.toUpperCase()){
        console.log("true")
        return 
    }else if(pw1 !== pw2){
        console.log("비밀번호를 다시 확인해주세요.")
        return
    }
}

let pwd1 = "a1B2c3D4"
let pwd2 = "A1b2C3d4"
validation(password1, password2)