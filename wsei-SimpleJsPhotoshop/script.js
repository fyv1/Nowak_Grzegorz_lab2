let img;
let imgUrl = "vader.png";

let cv = document.querySelector("#cv")

let context;

context = cv.getContext('2d');
img = new Image();
img.src = imgUrl;

img.addEventListener('load', function(e) {
    context.drawImage(img,0,0);
}
);
let imgData =  context.getImageData(0, 0, cv.width, cv.height);

document.querySelector("#contrast").addEventListener("input", function(){ 
    contrast(document.querySelector("#contrast").value);
});

document.querySelector("#brightness").addEventListener("input", function(){ 
    brightness(document.querySelector("#brightness").value, imgData);
});

document.querySelector("#saturation").addEventListener("input", function(){ 
    saturation(document.querySelector("#saturation").value);
});

document.querySelector("#transparency").addEventListener("input", function(){ 
    transparency(document.querySelector("#transparency").value);
});

document.querySelector("#inversion").addEventListener("click", function(){
    inversion();
});


function contrast(c) {
    let imgData =  context.getImageData(0, 0, cv.width, cv.height);
    let tempImg = imgData;
    
    let factor = (259 * (c + 255)) / (255 * (259 - c));

    var i;
    for (i = 0; i < tempImg.data.length; i += 4) {
        tempImg.data[i] = factor*(imgData.data[i]-128) + 128;
        tempImg.data[i+1] = factor*(imgData.data[i+1]-128) + 128;
        tempImg.data[i+2] = factor*(imgData.data[i+2]-128) + 128;
        tempImg.data[i+3] = 255;
    }
       
    console.log(factor);
    context.putImageData(tempImg, 0, 0);
}   

function brightness(b, imgData) {
   
    let tempImg = imgData;

    var i;
    for (i = 0; i < imgData.data.length; i += 4) {
        imgData.data[i] = tempImg.data[i] + b;
        imgData.data[i+1] = tempImg.data[i+1] + b;
        imgData.data[i+2] = tempImg.data[i+2] + b;
        imgData.data[i+3] = tempImg.data[i+3];
    }
    console.log(b);
    context.putImageData(imgData, 0, 0);
}

function saturation() {

}

function transparency(t) {
    let imgData =  context.getImageData(0, 0, cv.width, cv.height);
    let tempImg = imgData;

    var i;
    for (i = 0; i < tempImg.data.length; i += 4) {
        tempImg.data[i+3] = 0 + t;
    }
    context.putImageData(tempImg, 0, 0);
}

function inversion() {
    let imgData =  context.getImageData(0, 0, cv.width, cv.height);
    let tempImg = imgData;

    var i;
    for (i = 0; i < tempImg.data.length; i += 4) {
        tempImg.data[i] = 255 - imgData.data[i];
        tempImg.data[i+1] = 255 - imgData.data[i+1];
        tempImg.data[i+2] = 255 - imgData.data[i+2];
        tempImg.data[i+3] = 255;
    }
    context.putImageData(tempImg, 0, 0);
}
