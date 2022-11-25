/*
무조건 오른쪽으로 이동, 0을 만나면 종료하고 한칸 내려가보기?

1. 양쪽 0을 만나거나 길이 없는경우 종료
2. length : length 를 갔을 경우 성공


*/

function solution(maps) {
    let answer = [];
    let trial = 0;
    let y = maps.length;
    let x = maps[0].length;
    let a = 0; //아래로 내려갈 경우 x축 기록
    for(let i = 0; i < y; i ++){
        
        
        while(a < x){
            if(maps[i][a] === 1) {
                a++
            }else{
                trial
                break;
            }
        }
        trial[1] = i;
        if(trial === [y-1, x-1]) break;
    }
    return answer;
}

/*
두번째 시도 1을 찾아가도록
*/
function solution(maps) {
    let answer = [];
    let trial = 0;
    let y = maps.length;
    let x = maps[0].length;
    let a = 0; //x축 기록
    let b = 0; //y축 기록 
    while(b < y){
        
        
        while(a < x){
            if(maps[b][a] === 1) {
                trial++
                a++
            }else{
                a-- // 시작점으로 가야 한다.
                break;
            }
        }
        b++
        trial++;
    }
    return answer;
}