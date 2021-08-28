let  indexSlide = 1;
showSld(indexSlide);

let arrowArr = document.querySelectorAll('a');
console.log(arrowArr);

for(let i = 0; i < arrowArr.length; i++){
  arrowArr[i].addEventListener('click', function(){
    console.log(this.className);
    if(this.className == 'previous'){
      showSld (indexSlide -= 1);
    } else if(this.className == 'next')
      showSld(indexSlide += 1);
     else {
      showSld(num);
    }
  })
}

function showSld(num){
  let slides = document.querySelectorAll('.item');
  if(num > slides.length) {
    indexSlide = 1;
  } else if(num < 1) {
    indexSlide = slides.length;
  }

  for( let slide of slides){
    slide.style.display = "none";
  }

  slides[indexSlide - 1].style.display = "block";
}



let countdateDown = new Date("Aug 30, 2021 18:30");
 const dOut = document.querySelector('#outdate');
 let clear;
 console.log(new Date)
 function endDate(){
   let now = new Date().getTime();
   let timeInterval = countdateDown - now;

   let days = Math.floor(timeInterval / (1000 * 60 * 60 *24));
   let hours = Math.floor((timeInterval % (1000* 60 * 60 * 24)) / (1000 * 60 * 60 ));
   let minutes = Math.floor((timeInterval % (1000 * 60 * 60)) / (1000 * 60));
   let seconds = Math.floor((timeInterval % (1000 * 60 )) / 1000);

   dOut.innerHTML = days + " " + "zile" + " " + hours + " " + "ore" + " " + minutes + " " +"minute" + " " + seconds + " " + "secunde" + "." + " " + "Grabestete" +" "+ "sa" +" " + "prinzi" + " " + "promotia";
   
   if(timeInterval <0) {
     clearInterval(clear);
     dOut.innerHTML = 'Tu ai prins promotia?'
   }

 }  

 clear = setInterval(endDate, 1000);


 const price = document.querySelector('#car-price');
const priceOut = document.querySelector('#price-out'); 
price.addEventListener('input', function() {
  priceOut.value = price.value;
  rest(priceOut.value);
  monthpay(restpayOut.value);
})

const avansOut = document.querySelector('#avans-out'); 
const credittime = document.querySelector('#credit-time');
const finResult = document.querySelector('#fin-result');



function sumOut(value){
  if(value == 20) {
    let total = priceOut.value * 0.2; 
    finResult.value = total;
  }
  else if(value == 40) {
    let total = priceOut.value * 0.4; 
    finResult.value = total;
  }
  else if(value == 60) {
    let total = priceOut.value * 0.6; 
    finResult.value = total;
  }
} 


const timeOut = document.querySelector('#time-out'); 
credittime.addEventListener('input', function() {
  timeOut.value = credittime.value;
  if(credittime.value == '12') {
    avansOut.value = 20;
  } else if(credittime.value == '24') {
    avansOut.value = 40;
  } else if(credittime.value == '36') {
    avansOut.value = 60;
  }

  sumOut(avansOut.value);
  rest(priceOut.value);
  monthpay(restpayOut.value);
})

const restpayOut = document.querySelector('#rest-payOut');

 function rest(value){
    if (value == '5000'){
      let r = priceOut.value - finResult.value;
      restpayOut.value = r;
    }else if(value == '6000'){
      let r = priceOut.value - finResult.value;
      restpayOut.value = r;
    }else if(value == '7000'){
      let r = priceOut.value - finResult.value;
      restpayOut.value = r;
    }else if(value == '8000'){
      let r = priceOut.value - finResult.value;
      restpayOut.value = r;
    }else if(value == '9000'){
      let r = priceOut.value - finResult.value;
      restpayOut.value = r;
    }else if(value == '10000'){
      let r = priceOut.value - finResult.value;
      restpayOut.value = r;
    }
 }
  


   const monthpayOut = document.querySelector('#month-payOut')
  
function monthpay(value){
  if(value = '12'){
    let m = restpayOut.value / 12;
    let n = m + (restpayOut.value * 0.1);
    let round = n.toFixed(1);
    monthpayOut.value = round;
  }else if (value = '24'){
    let m = restpayOut.value / 24;
    let n = m + (restpayOut.value * 0.15)
    let round = n.toFixed(1);
     monthpayOut.value = round;
  }else if (value = '36'){
    let m = restpayOut.value / 36;
    let n =  m + (restpayOut.value * 0.2)
    let round = n.toFixed(1);
    monthpayOut.value = round;
  } 
}
  

/* let buttdisc = document.querySelector('#butt-disc');
buttdisc.addEventListener('click', function(){
  let brand = document.querySelector('#discount');
  console.log(brand)
  console.log(brand.dataset.name);
  let description = document.querySelector('#description1');
  let img = document.querySelector('#car')
  let service = {
    name: brand.dataset.name,
    description: description.innerHTML,
    img: img.src,
  }
  localStorage.setItem('service',JSON.stringify(service));
  let serviceData = JSON.parse(localStorage.getItem('service'));
      
      document.querySelector('#servdisc-out').innerHTML= `
      <p>${serviceData.name}</p>
      <p>${service.description}</p>
      <img src="${service.img}"/>
      `;
})


let buttcred = document.querySelector('#butt-cred');
buttcred.addEventListener('click', function(){
  let name2 = document.querySelector('#credit');
  let description2 = document.querySelector('#description2');
  let img2 = document.querySelector('#creditimg')
  let service2 = {
    name: name2.innerHTML,
    description: description2.innerHTML,
    img: img2.src,
  } 
   localStorage.setItem('service2',JSON.stringify(service2));
  let serviceData2 = JSON.parse(localStorage.getItem('service2'));

  document.querySelector('#servcred-out').innerHTML= `
      <p>${serviceData2.name}</p>
      <p>${service2.description}</p>
      <img src="${service2.img}"/>
      `;
})

let buttcons = document.querySelector('#butt-cons');
buttcons.addEventListener('click', function(){
  let name3 = document.querySelector('#consult');
  let description3 = document.querySelector('#description3');
  let img3 = document.querySelector('#expert')
  let service3 = {
    name: name3.innerHTML,
    description: description3.innerHTML,
    img: img3.src,
  }
  localStorage.setItem('service3',JSON.stringify(service3));
  let serviceData3 = JSON.parse(localStorage.getItem('service3'));

  document.querySelector('#servcons-out').innerHTML= `
      <p>${serviceData3.name}</p>
      <p>${service3.description}</p>
      <img src="${service3.img}"/>
      `;
})*/


const buttondisc = document.querySelector('#butt-disc');
let elements = anime({
  targets: '.anime',
  translateY: 100,
  autoplay: false,
  easing: 'spring(1, 80, 10, 0)',
});
buttondisc.onclick = elements.restart
 

const buttoncred = document.querySelector('#butt-cred');
let elements2 = anime({
  targets: '.anime2',
  translateY: 100,
  autoplay: false,
  easing: 'spring(1, 80, 10, 0)',
  
});
buttoncred.onclick = elements2.restart


const buttoncons = document.querySelector('#butt-cons');
let elements3 = anime({
  targets: '.anime3',
  translateY: 100,
  autoplay: false,
  easing: 'spring(1, 80, 10, 0)',
  
  
});
buttoncons.onclick = elements3.restart



const currency = {};
const elUSD = document.querySelector('[data-value="USD"]');
const elEUR = document.querySelector('[data-value="EUR"]');
const elGBP = document.querySelector('[data-value="GBP"]');
const elCAD = document.querySelector('[data-value="CAD"]');
const elRON = document.querySelector('[data-value="RON"]');
const input = document.querySelector('#input');
const result = document.querySelector('#result-car');
const select = document.querySelector('#select');

let converterMDL = "";

getCurrData();

setInterval(getCurrData, 10000);
async function getCurrData() {
  const response = await fetch('https://www.cbr-xml-daily.ru/daily_json.js');
  const data = await response.json();
  const result = await data;

  currency.USD = result.Valute.USD;
  currency.EUR = result.Valute.EUR;
  currency.GBP = result.Valute.GBP;
  currency.MDL = result.Valute.MDL;
  currency.CAD = result.Valute.CAD;
  currency.RON = result.Valute.RON;

  converterMDL = (currency.MDL.Value / currency.MDL.Nominal).toFixed(2);
  console.log(converterMDL);
  console.log(currency);
  console.log(response);

  elUSD.textContent = (currency.USD.Value / converterMDL).toFixed(2);
  elEUR.textContent = (currency.EUR.Value / converterMDL).toFixed(2);
  elGBP.textContent = (currency.GBP.Value / converterMDL).toFixed(2);
  elCAD.textContent = (currency.CAD.Value / converterMDL).toFixed(2);
  elRON.textContent = (currency.RON.Value / converterMDL).toFixed(2);
  
 
}

input.addEventListener('input', convertCurrency);
select.addEventListener('input', convertCurrency); 


function convertCurrency() {
  result.value = (parseFloat(input.value) / (currency[select.value].Value / converterMDL).toFixed(2)).toFixed(2);
  console.log('it work');
}

