const h1 = document.querySelector("div.hello:first-child h1");

console.dir(h1);

function handleTitleClick () {
    let h1_class_name = h1.className;
    let h1_class_list = h1.classList;
    console.log(h1_class_name);
    console.log(h1_class_list);

    /* 
    class_name 방식
    기존 className을 지워버려서 css를 활용하기 어렵다
     */
    // if(h1_class_name){
    //     h1.className = "";
    // }else{
    //     h1.className = "active";
    // }

    /*
    classList방식
    클래스를 추가, 제거 할 수 있다.
    */

    const clickedClass ="clicked";
    // if(!h1_class_list.contains(clickedClass)){
    //    h1_class_list.add(clickedClass);
    // }else{
    //     h1_class_list.remove(clickedClass);
    // }
    
    /* toggle 방식 */
    h1_class_list.toggle(clickedClass);

}
h1.addEventListener("click", handleTitleClick);


