const days=document.getElementById('days');
const hours=document.getElementById('hours');
const mintues=document.getElementById('mintues');
const seconds=document.getElementById('seconds');

 const currentyear=new Date().getFullYear();
 const currentmonth=new Date().getMonth();
 const currentdate=new Date();
 const month=currentmonth+1
 const Newyear=currentyear+1;
 console.log(Newyear);
 console.log(month);
 console.log(currentdate);
 const NewYearcountdown=new Date(`january 01 ${Newyear} 00:00:00`);
 function countdown(){
    let currentTime=new Date();
    const diff=NewYearcountdown-currentTime;
    let day=Math.floor(diff/1000/60/60/24);
    let hour=Math.floor(diff/1000/60/60)%24;
    let mintue=Math.floor(diff/1000/60)%60;
    let second=Math.floor(diff/1000)%60;

    days.innerHTML=day < 10 ? "0" + day: day;
    hours.innerHTML=hour < 10 ? "0" + hour: hour;
    mintues.innerHTML=mintue < 10 ? "0" + mintue: mintue;
    seconds.innerHTML=second < 10 ? "0" + second: second;
 }
 setInterval(countdown,1000)