self.onmessage = function(e) {
    console.log("recieved order:",e.data);
    let final = 0;
    for (let i = 0; i < 10000000000; i++) {
        final += i;
    }
    console.log("finished work");

    self.postMessage(final);
}