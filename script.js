let path = document.querySelector('path')
let pathLength = path.getTotalLength()
let i = 1;

path.style.strokeDasharray = pathLength + ' ' + pathLength
path.style.strokeDashoffset = pathLength * i


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

let popmountain = document.querySelector('.popmountain');

const draw = async () => {
    i = 1
    for (j = 1; j < 1000; j++) {
        await sleep(4);
        i += 0.001
        path.style.strokeDashoffset = pathLength * i
    }
    i = 2
}

popmountain.onclick = draw