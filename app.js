var hourHeading=document.getElementById("hr");
var minHeading=document.getElementById("min");
var secHeading=document.getElementById("sec");
var msecHeading=document.getElementById("msec");

var hour=0;
var min=0;
var sec=0;
var msec=0;
var interval;

function startTimer(){
    msec++;
    msecHeading.innerHTML=msec;

    if(msec>=100){
        sec++;
        secHeading.innerHTML=sec;
        msec=0;
    }
    if(sec>=60){
        min++;
        minHeading.innerHTML=min;
        sec=0;
    }
    if(min>=60){
        hour++;
        hourHeading.innerHTML=hour;
        min=0;
    }
}

function start(){
    var btn=document.getElementById("btnStart");
    interval=setInterval(startTimer,10);
    btn.disabled=true;
}
function pauseTimer(){
    var btn=document.getElementById("btnStart");
    clearInterval(interval);
    btn.disabled=false;
}

function reset(){
    hour=0;
    min=0;
    sec=0;
    msec=0;

    hourHeading.innerHTML="00";
    minHeading.innerHTML-"00";
    secHeading.innerHTML="00";
    msecHeading.innerHTML="000";

    pauseTimer();

}