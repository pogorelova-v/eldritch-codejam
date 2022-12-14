const blue1 = "url('assets/MythicCards/blue/blue1.png')";
const blue2 = "url('assets/MythicCards/blue/blue2.png')";
const blue3 = "url('assets/MythicCards/blue/blue3.png')";
const blue4 = "url('assets/MythicCards/blue/blue4.png')";
const blue5 = "url('assets/MythicCards/blue/blue5.png')";
const blue6 = "url('assets/MythicCards/blue/blue6.png')";
const blue7 = "url('assets/MythicCards/blue/blue7.png')";
const blue8 = "url('assets/MythicCards/blue/blue8.png')";
const blue9 = "url('assets/MythicCards/blue/blue9.png')";
const blue10 = "url('assets/MythicCards/blue/blue10.png')";
const blue11 = "url('assets/MythicCards/blue/blue11.png')";
const blue12 = "url('assets/MythicCards/blue/blue12.png')";

const green1 = "url('assets/MythicCards/green/green1.png')";
const green2 = "url('assets/MythicCards/green/green2.png')";
const green3 = "url('assets/MythicCards/green/green3.png')";
const green4 = "url('assets/MythicCards/green/green4.png')";
const green5 = "url('assets/MythicCards/green/green5.png')";
const green6 = "url('assets/MythicCards/green/green6.png')";
const green7 = "url('assets/MythicCards/green/green7.png')";
const green8 = "url('assets/MythicCards/green/green8.png')";
const green9 = "url('assets/MythicCards/green/green9.png')";
const green10 = "url('assets/MythicCards/green/green10.png')";
const green11 = "url('assets/MythicCards/green/green11.png')";
const green12 = "url('assets/MythicCards/green/green12.png')";
const green13 = "url('assets/MythicCards/green/green13.png')";
const green14 = "url('assets/MythicCards/green/green14.png')";
const green15 = "url('assets/MythicCards/green/green15.png')";
const green16 = "url('assets/MythicCards/green/green16.png')";
const green17 = "url('assets/MythicCards/green/green17.png')";
const green18 = "url('assets/MythicCards/green/green18.png')";

const brown1  = "url('assets/MythicCards/brown/brown1.png')";
const brown2  = "url('assets/MythicCards/brown/brown2.png')";
const brown3  = "url('assets/MythicCards/brown/brown3.png')";
const brown4  = "url('assets/MythicCards/brown/brown4.png')";
const brown5  = "url('assets/MythicCards/brown/brown5.png')";
const brown6  = "url('assets/MythicCards/brown/brown6.png')";
const brown7  = "url('assets/MythicCards/brown/brown7.png')";
const brown8  = "url('assets/MythicCards/brown/brown8.png')";
const brown9  = "url('assets/MythicCards/brown/brown9.png')";
const brown10 = "url('assets/MythicCards/brown/brown10.png')";
const brown11 = "url('assets/MythicCards/brown/brown11.png')";
const brown12 = "url('assets/MythicCards/brown/brown12.png')";
const brown13 = "url('assets/MythicCards/brown/brown13.png')";
const brown14 = "url('assets/MythicCards/brown/brown14.png')";
const brown15 = "url('assets/MythicCards/brown/brown15.png')";
const brown16 = "url('assets/MythicCards/brown/brown16.png')";
const brown17 = "url('assets/MythicCards/brown/brown17.png')";
const brown18 = "url('assets/MythicCards/brown/brown18.png')";
const brown19 = "url('assets/MythicCards/brown/brown19.png')";
const brown20 = "url('assets/MythicCards/brown/brown20.png')";
const brown21 = "url('assets/MythicCards/brown/brown21.png')";

const blueArr = [blue1, blue2, blue3, blue4, blue5, blue6, blue7, blue8, blue9, blue10, blue11, blue12]
const greenArr = [ green1, green2, green3, green4, green5, green6, green7, green8,  green9, green10, green11, green12, green13, green14, green15, green16, green17, green18]
const brownArr = [brown1, brown2, brown3, brown4, brown5, brown6, brown7, brown8, brown9, brown10, brown11, brown12, brown13, brown14, brown15, brown16, brown17, brown18, brown19, brown20, brown21]

/*const blueSnowflakeArr = [blue3, blue4, blue5, blue10]
const greenSnowflakeArr = [green1, green12,  green16, green17, green18]
const brownSnowflakeArr = [brown11, brown12, brown13, brown14, brown21]

const blueNormArr = [blue7, blue9, blue11, blue12]
const greenNormArr = [green7, green8,  green9, green10, green11, brown13, brown14, brown15]
const brownNormArr = [brown1, brown2, brown3, brown4, brown5, brown15, brown16, brown17, brown18, brown19, brown20 ]

const blueTentaclesArr = [blue1, blue2, blue6, blue8]
const greenTentaclesArr = [green2, green3, green4, green5, green6]
const brownTentaclesArr = [brown6, brown7, brown8, brown9, brown10] */


const randomNumb = (arrStart) => {
  let lengthArr = arrStart.length;
  let randomRange = Math.floor(Math.random() * (lengthArr - 0 + 1)) + 0;
  return randomRange;
};

const jobArrFunc = (num, arr) => {
    let jobArr = [];
    let jobArrSet;
    jobArr.push(randomNumb(arr))
    while(jobArr.length < num){
      jobArr.push(randomNumb(arr))
      jobArrSet = new Set(jobArr);
      jobArr = [...jobArrSet];
    }
  return jobArr
}


let greenArrJob = jobArrFunc(5, greenArr);
let brownArrJob = jobArrFunc(9, brownArr);
let blueArrJob = jobArrFunc(2, blueArr); 

const numberPicture = (arr, megaArr) => {
  let newArr = [];
  for( let i = 0 ; i < arr.length ; i++) {
     let n = arr[i];
     newArr.push(megaArr[n]);
  }
  return newArr
}

let greenArrJobNew = numberPicture(greenArrJob, greenArr);
let brownArrJobNew = numberPicture(brownArrJob, brownArr);
let blueArrJobNew = numberPicture(blueArrJob, blueArr);

let green1Arr = greenArrJobNew.splice(0, 1);
let green2Arr = greenArrJobNew.splice(0, 2);
let green3Arr = greenArrJobNew.splice(0, 2);
let brown1Arr = brownArrJobNew.splice(0, 2);
let brown2Arr = brownArrJobNew.splice(0, 3);
let brown3Arr = brownArrJobNew.splice(0, 4);
let blue1Arr = blueArrJobNew.splice(0, 1);
let blue2Arr = blueArrJobNew.splice(0, 1);
let blue3Arr = [0] ;

const green1Card = document.querySelector('.green-1');
const green2Card = document.querySelector('.green-2');
const green3Card = document.querySelector('.green-3');
const brown1Card = document.querySelector('.brown-1');
const brown2Card = document.querySelector('.brown-2');
const brown3Card = document.querySelector('.brown-3');
const blue1Card = document.querySelector('.blue-1');
const blue2Card = document.querySelector('.blue-2');

green1Card.textContent = green1Arr.length;
green2Card.textContent = green2Arr.length;
green3Card.textContent = green3Arr.length;
brown1Card.textContent = brown1Arr.length;
brown2Card.textContent = brown2Arr.length;
brown3Card.textContent = brown3Arr.length;
 blue1Card.textContent = blue1Arr.length;
 blue2Card.textContent = blue2Arr.length;


const deck = document.querySelector('.deck');

const backgroundCover = () => {
  if( green1Arr.length > 0) {
    for(let i = 0 ; i < green1Arr.length; i++){
    deck.style.backgroundImage = green1Arr[0];
    green1Arr.shift();
    green1Card.textContent = green1Arr.length;
   }
  } else if ( brown1Arr.length > 0) {
    for(let i = 0 ; i < brown1Arr.length; i++){
      deck.style.backgroundImage = brown1Arr[0];
      brown1Arr.shift();
      brown1Card.textContent = brown1Arr.length;
     }
  } else if ( blue1Arr.length > 0) {
    for(let i = 0 ; i < blue1Arr.length; i++){
      deck.style.backgroundImage = blue1Arr[0];
      blue1Arr.shift();
      blue1Card.textContent = blue1Arr.length;
     } 
  }  else if ( green2Arr.length > 0) {
    for(let i = 0 ; i < green2Arr.length; i++){
      deck.style.backgroundImage = green2Arr[0];
      green2Arr.shift();
      green2Card.textContent = green2Arr.length;
     }
  } else if ( brown2Arr.length > 0) {
    for(let i = 0 ; i < brown2Arr.length; i++){
      deck.style.backgroundImage = brown2Arr[0];
      brown2Arr.shift();
      brown2Card.textContent = brown2Arr.length;
     }
  } else if ( blue2Arr.length > 0) {
    for(let i = 0 ; i < blue2Arr.length; i++){
      deck.style.backgroundImage = blue2Arr[0];
      blue2Arr.shift();
      blue2Card.textContent = blue2Arr.length;
     }
  }  else if ( green3Arr.length > 0) {
    for(let i = 0 ; i < green3Arr.length; i++){
      deck.style.backgroundImage = green3Arr[0];
      green3Arr.shift();
      green3Card.textContent = green3Arr.length;
     }
  } else if ( brown3Arr.length > 0) {
    for(let i = 0 ; i < brown3Arr.length; i++){
      deck.style.backgroundImage = brown3Arr[0];
      brown3Arr.shift();
      brown3Card.textContent = brown3Arr.length;
     }
  } else ( alert('reload the page to play again'))
}

deck.addEventListener('click', () => {
  backgroundCover();
})