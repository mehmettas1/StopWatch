



const start = document.getElementById('start');
const reset = document.getElementById('reset');
const min = document.getElementById("mın")
const sec = document.getElementById("sec")
const ms = document.getElementById("ms")




let loop;

start.addEventListener('click',()=> {
    if(start.innerText == "start"){
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


