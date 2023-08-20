let beginningtime;//declaring var
let intraval;// declaring var
/*below function convo take current time as parameter and use math to covert current time into hour minute 
,second and millisecond and declare a varaible in which use template literal to convert time var to string and put 0 in front of all string using string
function padStart() and  return it using return keyboard*/
function convo(ms){
const Hours = Math.floor(ms/3600000);
const minutes = Math.floor((ms % 3600000) / 60000);
const second = Math.floor((ms % 60000) / 1000);
const millisecond = Math.floor((ms % 1000));
const Formatts=`${Hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${second.toString().padStart(2, '0')}:${millisecond.toString().padStart(2, '0')}`;
return Formatts;
};

function displays(){
    //the variable current time represt current accurate time we are in using Date.now and time gone varible store
    //value by substracting current time to beginnigng time when timer press as diplay function is call 1 ms after start function is pressed
    const  currenttime = Date.now();//will be latest time
    const timegone = currenttime - beginningtime;
    document.getElementById('screen').innerText=convo(timegone);
    //change inner text of h2 00:00:00:00 by 1 milisecond value from convo() return value formatts is used .
};

function starts(){
    //we dont have intraval value as we didnt define it while declaring varible

    if(!intraval){
    //so if statement will be true and below code will run.
     beginningtime = Date.now();
     // we are letting our beginningtime var to function Date.now();
     intraval = setInterval(displays, 1); 
     //we are setting our Intraval varaible to function setInterval(//call display,every millisecond)
    }
}


function ends(){
    clearInterval(intraval);
    //release intraval id from varaiable above.(intraval = setInterval(displays, 1);) will be null 
   intraval=null;
}

function res(){
    document.getElementById('screen').innerText="00:00:00";
   ends();
   beginningtime = null;

}


document.getElementById('reset').addEventListener('click',res);

document.getElementById('start').addEventListener('click',starts);


//just using Dom for styling 
let backgroun = document.querySelector('body');
let havenly = document.querySelector('.main');
let togle = document.querySelector('.togle');
let newbegining = document.querySelector('#reset')
let checkboc = document.querySelector('#cir');
let header = document.getElementById('HEAD');
function change(){
backgroun.style.background='black';
havenly.style.background='white';
header.style.color='white';
}

togle.addEventListener('click',change)

document.addEventListener('click',function again(e){
    
if(e.target == newbegining){
    backgroun.style.background='';
    havenly.style.background='';
    checkboc.checked=false;
    header.style.color=''
}
});
