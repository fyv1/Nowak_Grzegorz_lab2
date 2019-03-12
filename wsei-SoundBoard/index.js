document.body.addEventListener('keypress', (e)=> {
    console.log(e);

    switch(e.key){
        case 'q' :
            playSound("c1");
            break;
        case '2' :
            playSound("c1s");
            break;
        case 'w' :
            playSound("d1");
            break;
        case '3' :
            playSound("d1s");
            break;            
        case 'e' :
            playSound("e1");
            break;    
        case 'r' :
            playSound("f1");
            break;
        case '5' :
            playSound("f1s");
            break;
        case 't' :
            playSound("g1");
            break;
        case '6' :
            playSound("g1s");
            break;
        case 'y' :
            playSound("a1");
            break;
        case '7' :
            playSound("a1s");
            break;
        case 'u' :
            playSound("b1");
            break;
    }

})

let record = [];
let startTime;
let recordingStatus = false;
let playButton = document.querySelector("#play");
let recordButton = document.querySelector("#record");
let stopButton = document.querySelector("#stop");

recordButton.addEventListener('click', () => {
        startTime = Date.now();
        recordingStatus = true;
    
})

stopButton.addEventListener('click', () => {
    recordingStatus = false;
})

playButton.addEventListener('click', () => {
    record.forEach(id => {
        setTimeout(
            () => {
                
                // odtwarzaj player
                id.currentTime = 0;
                id.name.play();
                console.log(id.name);
            }
            , id.time);
    });

    // for(i in record) {
    //     i.name.play();
    // }
})

function playSound(id) {
    let idS = "#" + id;

    KeySound = document.querySelector(idS);

    KeySound.currentTime = 0;
    KeySound.play();

    if(recordingStatus) {
        record.push({
                name: KeySound,
                time: Date.now() - startTime
            })
        
    }
}