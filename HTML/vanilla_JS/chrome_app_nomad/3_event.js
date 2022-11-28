const title = document.querySelector(".hello:first-child");
console.dir(title);

function handleTitleClick() {
    console.log("title was clicked!")
    title.style.color = "blue";
}

title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", function(){
    console.log("mouse is in hello class div!!")
});
