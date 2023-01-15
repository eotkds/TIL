const swiper_list = document.querySelector('#swiper_box ul');
const swiper_lists = document.querySelectorAll('#swiper_box .page')
const lastIndex =  swiper_lists.length - 1;
const prevBtn = document.querySelector(".button .prevBtn");
const nextBtn = document.querySelector(".button .nextBtn");
let selected = 0;


console.log(swiper_box);
console.log(swiper_box.clientWidth);
console.log(prevBtn);


const setTranslate=(idx)=>{
    swiper_list.style.transform = `translate(-${swiper_list.clientWidth * (idx + 1)}px, 0)`;
};

const setTransition=(value)=>{
    swiper_list.style.transition = value;
};

const cloneElement =()=> {
    swiper_list.insertBefore(swiper_lists[lastIndex].cloneNode(true), swiper_list.children[0]);
    swiper_list.appendChild(swiper_lists[0].cloneNode(true));
};

const prevEvent =()=>{
    setTransition(`1s ease-in-out`);
    selected -= 1;
    setTranslate(selected);
    if(selected < 0){
        selected = lastIndex;
        setTimeout(()=> {
            setTransition("");
            setTranslate(selected);
        }, 1000);
    }
    
};

const nextEvent =()=>{
    setTransition(`1s ease-in-out`);
    selected += 1;
    setTranslate(selected);
    if(selected > lastIndex){
        selected = 0;
        setTimeout(()=> {
            setTransition("");
            setTranslate(0);
        }, 1000);
    }
    
};

cloneElement();
prevBtn.addEventListener('click', prevEvent);
nextBtn.addEventListener('click', nextEvent);