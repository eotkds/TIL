function random() {
    let number = 50
    let competitor = Math.floor(Math.random()* 100) + 1
    console.log(competitor)
    if(number > competitor){
        console.log("Win")
    }else if(number === competitor){
        console.log("Draw")
    }else{
        console.log("Lose")
    }

  }
  
  