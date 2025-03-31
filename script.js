function countDownUpdate(){
    let currentDate = new Date();
    let upcomingDate = new Date('2025-04-05');
    let timeDiff = upcomingDate - currentDate;
    let seconds = Math.floor((timeDiff / 1000) % 60);
    let minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
    let hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
    let days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    let val = "LIVE IN: "+days.toString().padStart(2,"0")+"days "+hours.toString().padStart(2,"0")+"hours "+minutes.toString().padStart(2,"0")+"minutes "+seconds.toString().padStart(2,"0")+"seconds."
    document.getElementById("countdown").innerHTML = val
}
setInterval(countDownUpdate,1000);