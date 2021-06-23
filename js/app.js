/*let pictures = document.getElementById('pictures');
let leftPicture = document.getElementById('leftPicture ');
let centerPicture = document.getElementById('centerPicture');
let rightPicture = document.getElementById('rightPicture');
let imageArr = ['bag.jpg', 'banana.jpg', 'bathroom.jpg','boots.jpg' ,'breakfast.jpg' ,'bubblegum.jpg' ,'chair.jpg' ,'cthulhu.jpg' ,'dog-duck.jpg' ,'dragon.jpg' ,'pen.jpg' ,'pet-sweep.jpg' ,'scissors.jpg' ,'shark.jpg' ,'sweep.png' ,'tauntaun.jpg' ,'unicorn.jpg' ,'usb.gif','water-can.jpg', 'wine-glass.jpg' ];


function Images(name , path) {
  this.name = name;
  this.imgSrc = `./imegs/${path}`;
  this.view = 0;
  this.click = 0;
  Images.all.push(this);
}
images.all = [];

for( let i=0 ; i<imageArr.length ; i++) {
  let imageName = imageArr[i].split('.')[0];
  new Images(imageName, imageArr[i]);
}

function renderImages(){
  let leftSignal = getRandom(0 , imageArr.length -1);
  let centerSignal;
  let rightSignal;

  do{

    centerSignal = getRandom(0,imageArr.length -1);
    rightSignal = getRandom(0,imageArr.length -1);
  } while(leftSignal === centerSignal || leftSignal === rightSignal || centerSignal === rightSignal );



  leftPicture.setAttribute('src,  Images.all[leftSignal].imgSrc');
  centerPicture.src = Images.all[centerSignal].imgSrc;
  rightPicture.src = Images.all[rightSignal].imgSrc;
  Images.all[leftSignal].view++;
  Images.all[centerSIgnal].view++;
  Images.all[rightSignal].view++;
}
renderImages();
console.log(renderImeges());
console.log(Imeges.all);


function getRandom(min, max) {

  return Math.floor(Math.random() * (max - min + 1) + min);
}*/

let pictures    = document.getElementById('pictures');
let leftPicture  = document.getElementById('leftPicture');
let centerPicture  = document.getElementById('centerPicture');
let rightPicture = document.getElementById('rightPicture');
let viewResult = document.getElementById('viewResult');
let listOfResults = document.getElementById('listOfResults');

let round = 25;
let counter = 0;


let leftIndex;
let centerIndex;
let rightIndex;

let imgArr = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.png', 'tauntaun.jpg', 'unicorn.jpg', 'usb.gif', 'water-can.jpg', 'wine-glass.jpg'];

function Images(name, src) {
  this.name = name;
  this.imgSrc = `./imegs/${src}`;
  this.view = 0;
  this.click = 0;
  Images.all.push(this);
}

Images.all = [];

for(let i = 0; i < imgArr.length; i++) {
  let imageName = imgArr[i].split('.')[0];
  new Images(imageName, imgArr[i]);
}

console.log(Images.all);

function renderImages() {
  leftIndex = getRandom(0, imgArr.length - 1);

  do {
    centerIndex = getRandom(0, imgArr.length - 1);
    rightIndex = getRandom(0, imgArr.length - 1);
  } while (leftIndex === centerIndex || leftIndex === rightIndex || centerIndex === rightIndex);

  leftPicture.src = Images.all[leftIndex].imgSrc;
  centerPicture.src = Images.all[centerIndex].imgSrc;
  rightPicture.src = Images.all[rightIndex].imgSrc;

  Images.all[leftIndex].view++;
  Images.all[centerIndex].view++;
  Images.all[rightIndex].view++;

}

function clickFunction(event) {
  if((event.target.id === 'leftPicture' || event.target.id === 'centerPicture' || event.target.id === 'rightPicture') && counter < round) {
    console.log(event.target.id);

    if(event.target.id === 'lefPicture') {
      Images.all[leftIndex].click++;

    }

    if(event.target.id === 'centerPicture') {
      Images.all[centerIndex].click++;

    }

    if(event.target.id === 'rightPicture') {
      Images.all[rightIndex].click++;
    }

    console.log(Images.all);



    renderImages();
    counter++;
  }
}

function handleEvent() {
  for(let i = 0; i < Images.all.length; i++) {
    let li = document.createElement('li');
    listOfResults.appendChild(li);
    li.textContent = `${Images.all[i].name} had ${Images.all[i].click} votes, and was seen ${Images.all[i].view} times.`;
  }

  viewResult.removeEventListener('click', handleEvent);
}

pictures.addEventListener('click', clickFunction);
viewResult.addEventListener('click', handleEvent);

renderImages();

console.log(Images.all);
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
