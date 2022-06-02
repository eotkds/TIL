function boolean(input1, input2) {
	if(input1 === true || input2 === true ) {
        console.log(true)
  }else{
        console.log(false)
    }
}

boolean(true, false) // true
boolean(false, true) // true
boolean(false, false) // false