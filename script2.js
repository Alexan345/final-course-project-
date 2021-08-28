const currency = {};
const elUSD = document.querySelector('[data-value="USD"]');
const elEUR = document.querySelector('[data-value="EUR"]');
const elGBP = document.querySelector('[data-value="GBP"]');
const elCAD = document.querySelector('[data-value="CAD"]');
const elRON = document.querySelector('[data-value="RON"]');
const input = document.querySelector('#input');
const result = document.querySelector('#result');
const select = document.querySelector('#select');

let converterMDL = "";

getCurrData();

//setInterval(getCurrData, 10000);
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