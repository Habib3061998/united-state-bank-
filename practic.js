

document.getElementById('Deposite-btn').addEventListener('click', function(){

const DepositeField = document.getElementById('Deposite-field')

const DepositeFieldvalue = DepositeField.value;

const valueConvert = parseFloat(DepositeFieldvalue)

DepositeField.value ='';



const DepositeAmmoutn =document.getElementById('Deposite-ammoutn')

const DepositeAmmoutnValue =DepositeAmmoutn.innerText;

const DepositeAmmoutnValueConvert = parseFloat(DepositeAmmoutnValue)

const DepositeAmmoutCalculte = DepositeAmmoutnValueConvert + valueConvert;

 DepositeAmmoutn.innerText=DepositeAmmoutCalculte;




 const BalanceAmmount =document.getElementById('Balance-Ammount')

 const BalanceAmmountValue =BalanceAmmount.innerText;
 
 const BalanceAmmountConvert =parseFloat(BalanceAmmountValue)

const BalanceAmmountCalculate =BalanceAmmountConvert+valueConvert;

BalanceAmmount.innerText=BalanceAmmountCalculate;


})








