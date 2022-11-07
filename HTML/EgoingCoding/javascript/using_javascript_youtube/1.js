// 예제
var times = document.querySelectorAll('.pl-video .pl-video-time .timestamp span');
var duration = 0;
for(var i=0; i<times.length; i++){
   var t = times[i];
   t = t.innerText;
   t = t.split(':')
   min = t[0];
   sec = t[1];
   duration = duration + parseInt(sec) + parseInt(min)*60
}
console.log(duration/60/60);

// 실습
let times = document.querySelectorAll('#overlays > ytd-thumbnail-overlay-time-status-renderer #text');
let duration = 0;
for(let i =0; i < times.length; i++){
    let t = times[i];
    t = t.innerText;
    t = t.split(':');
    let min = t[0];
    let sec = t[1];
    duration = duration + parseInt(sec) + parseInt(min)*60;
}
console.log(duration);