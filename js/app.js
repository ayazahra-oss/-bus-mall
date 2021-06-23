let pictures = document.getElementById('pictures');
let leftPicture = document.getElementById('leftPicture ');
let centerPicture = document.getElementById('centerPicture');
let rightPicture = document.getElementById('rightPicture');
let imageArr = ['bag.jpg', 'banana.jpg', 'bathroom.jpg','boots.jpg' ,'breakfast.jpg' ,'bubblegum.jpg' ,'chair.jpg' ,'cthulhu.jpg' ,'dog-duck.jpg' ,'dragon.jpg' ,'pen.jpg' ,'pet-sweep.jpg' ,'scissors.jpg' ,'shark.jpg' ,'sweep.png' ,'tauntaun.jpg' ,'unicorn.jpg' ,'usb.gif','water-can.jpg', 'wine-glass.jpg' ];


 function images(name , path) {
    this.name = name;
    this.imgSrc = `./imegs/${path}`;
    this.view = 0;
    this.click = 0;
    images.all.push(this);
}
images.all = [];

for( let i=0 ; i<imageArr.length ; i++) {
    let imageName = imageArr[i].split('.')[0];
    new images(imageName, imageArr[i]);
}

function renderImages(){
    let leftSignal = getRandom(0 , imageArr.length -1);
    let centerSignal; 
    let rightSignal;
    
    do{
     
     centerSignal = getRandom(0,imageArr.length -1);
     rightSignal = getRandom(0,imageArr.length -1);
    } while(leftSignal === centerSignal || leftSignal === rightSignal || centerSignal === rightSignal );
    


 leftPicture.setAttribute('src,  images.all[leftSignal].imgSrc');
 centerPicture.src = images.all[centerSignal].imgSrc;
 rightPicture.src  = images.all[rightSignal].imgSrc;
 images.all[leftSignal].view++;
 images.all[centerSignal].view++;
 images.all[rightSignal].view++;
}
 renderImages();
 console.log(renderImeges());
 console.log(imeges.all);
    

function getRandom(min, max) {
   
    return Math.floor(Math.random() * (max - min + 1) + min); 
  }

