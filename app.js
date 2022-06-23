// 1.declare variables,
// 2.create a function. when it is called, increase millisecond 10
// if ms equals to 1000 add 1 to second, reset ms to 0;
//  if s equals to 60 add 1 to minute, reset s to 0;
// if min equals to 60 add 1 to hour, reset min to 0;
// display time --> h:min:s:ms,

// 3. call the function when clicks on the START btn and let the function  keeps invoking every 10 ms,
// 4. stop the function when user clicks on the PAUSE btn,
// 5. when user clicks on the RESET btn stop the function and reset everything to 0.





const pause = document.getElementById('pause');
const start = document.getElementById('start');
const reset = document.getElementById('reset');
const timerDisplay = document.getElementById('timerDisplay');
let millisecond = 0,
second =0,
minute =0,
hour =0;
let loop;

start.addEventListener('click',()=> {
    clearInterval(loop);
    loop = setInterval(counter,10);
   
})

pause.addEventListener('click',()=> {
    
    clearInterval(loop);
})

reset.addEventListener('click',()=> {
    
    clearInterval(loop);
    (millisecond = 0), (second = 0), (minute = 0), (hour = 0);
    timerDisplay.innerHTML = "00 : 00 : 00 : 000";
})


function counter(){
    millisecond +=10;
    if(millisecond ==1000){
        millisecond =0;
        second++;

        if(second == 60) {
            second = 0;
            minute++;

            if(minute ==60){
                minute = 0;
                hour++;
            }
        }
    }

    timerDisplay.innerHTML = `${hour}:${minute} :${second}:${millisecond}`;
   
}

