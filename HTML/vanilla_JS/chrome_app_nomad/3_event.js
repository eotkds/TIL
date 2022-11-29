const title = document.querySelector(".hello:first-child");
console.dir(title);


function handleTitleClick() {
    console.log(title.style.color);
   
    if(title.style.color === "blue"){
        title.style.color = "tomato";
    }else{
        title.style.color = "blue";
    }
}

function handleWindowResize(){
    document.body.style.backgroundColor = "tomato";
}


function handleWindowCopy(){
    alert('copier');
}

function handleWindowOffline(){
    alert('no WIFI');
}

function handleWindowOonline(){
    alert('ALL GOOD');
}


title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", function(){
    console.log("mouse is in hello class div!!")
});

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOonline);