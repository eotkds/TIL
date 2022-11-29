const title = document.querySelector(".hello:first-child");
console.dir(title);

function handleTitleClick() {
    console.log("title was clicked!")
    title.style.color = "blue";
}

function handleWindowResize(){
    document.body.style.backgroundColor = "tomato";
}


function handleWindowCopy(){
    alert('copier');
}

function handleWindowOffline(){
    alert('copier');
}

title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", function(){
    console.log("mouse is in hello class div!!")
});

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("copy", handleWindowOffline);