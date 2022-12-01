const h1 = document.querySelector("div.hello:first-child h1");

console.dir(h1);

function handleTitleClick () {
    let h1_class_name = h1.className;
    if(h1_class_name){
        h1.className = "";
    }else{
        h1.className = "active";
    }    

}
h1.addEventListener("click", handleTitleClick);


