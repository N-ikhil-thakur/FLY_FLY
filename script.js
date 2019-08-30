
var x=0;
var y=0;
var z=0;
var ym=0;
var interval;
function run(){
    // x=z;
    ym++;
x+=1;
document.querySelector(".box").style.transform=`translatey(${x}px)`;
if(x==800){
    x=0;
}

if(x==-40){
    x=800;
}



}

interval=setInterval(run,10);  

function up(){
    // y++;
    z=x-55;
    x=z;
    document.querySelector(".box").style.transform=`translatey(${z}px)`;
    // clearInterval(interval);
}
