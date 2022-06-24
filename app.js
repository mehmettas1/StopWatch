// 1.declare variables,
// 2.create a function. when it is called, increase millisecond 10
// if ms equals to 1000 add 1 to second, reset ms to 0;
//  if s equals to 60 add 1 to minute, reset s to 0;
// if min equals to 60 add 1 to hour, reset min to 0;
// display time --> h:min:s:ms,

// 3. call the function when clicks on the START btn and let the function  keeps invoking every 10 ms,
// 4. stop the function when user clicks on the PAUSE btn,
// 5. when user clicks on the RESET btn stop the function and reset everything to 0.






const start = document.getElementById('start');
const reset = document.getElementById('reset');
const timerDisplay = document.getElementById('timerDisplay');
const min = document.getElementById("mın")
const sec = document.getElementById("sec")
const ms = document.getElementById("ms")




let loop;

start.addEventListener('click',()=> {
    if(start.innerText = "start"){
        start.innerText = "stop";
        clearInterval(loop);
    loop = setInterval(counter, 1)
     

    }else {
        clearInterval(loop);
        start.innerText = "start"
    }
   
})


reset.addEventListener('click',()=> {
    
    clearInterval(loop);
    ms.innerText = "00";
    sec.innerText = "00";
    min.innerText = "00"
   
});


function counter(){
    ms.innerText ++;
    if(ms.innerText==100){
        ms.innerText ="00";
        sec.innerText++;

        if(sec.innerText == 60) {
            sec.innerText = "00";
            min.innerText++;

            
            
        }
    }

    
   
}


