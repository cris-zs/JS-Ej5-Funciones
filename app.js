let trafficLight = document.getElementById("current-color");
let colors = ['red', 'yellow', 'green'];

function light(){
    const color = colors.pop();
    if(!colors.length){
        colors = ['red', 'yellow', 'green'];
    }
    trafficLight.src = "./img/"+color+".png";
    return color;
}

const interval = setInterval(light,3500);