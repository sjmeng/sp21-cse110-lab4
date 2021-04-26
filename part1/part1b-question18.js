var myVar = setInterval(everySecond, 1000);

function everySecond(){
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}   