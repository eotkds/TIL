const swiper_list = document.querySelector('#swiper_box ul');
const swiper_lists = document.querySelectorAll('#swiper_box .page')
const lastIndex =  swiper_lists.length - 1;
console.log(swiper_box);
console.log(swiper_box.clientWidth);
console.log(swiper_lists[lastIndex]);



const cloneElement =()=> {
    swiper_list.insertBefore(swiper_lists[lastIndex].cloneNode(true), swiper_list.children[0]);
    swiper_list.appendChild(swiper_lists[0].cloneNode(true));
};


cloneElement();