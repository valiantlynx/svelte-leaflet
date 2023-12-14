const workBtn = document.getElementById('work-btn');
workBtn.addEventListener('click', () => {
    // let final = 0;
    // for (let i = 0; i < 1000000000; i++) {
    //     final += i;
    // }
    // document.getElementById('output').innerHTML = final;

    // Create a new worker
    const worker = new Worker('worker.js');
    worker.postMessage('get to working!');
    worker.onmessage = function(e) {
        document.getElementById('output').innerHTML = e.data;
    }
});

const otherBtn = document.getElementById('btn');
otherBtn.addEventListener('click', () => {
    document.querySelector('#random').innerHTML = 'Clicked!';
});