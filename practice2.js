



document.getElementById('widrow-btn').addEventListener('click', function(){

    const widrowfield =document.getElementById('widrow-field')
   
    const widrowfieldValue = widrowfield.value;
   
    const widrowfieldValueConvert = parseFloat(widrowfieldValue)
   
    widrowfield.value='';
   
   
   
   const widrowAmmount =document.getElementById('widrow-ammount')
   
   const widrowAmmountValue = widrowAmmount.innerText;
   
   const widrowAmmountValueConvert = parseFloat(widrowAmmountValue)

   
   const widrowCalculate = widrowAmmountValueConvert + widrowfieldValueConvert;

   widrowAmmount.innerText=widrowCalculate;
   
   
     


   const  DepositeAmmoutn =document.getElementById('Balance-Ammount')

    const  DepositeAmmoutnValue =DepositeAmmoutn.innerText;

    const  DepositeAmmoutnValueConvert = parseFloat(DepositeAmmoutnValue)

    const  DepositeAmmoutnCalculate = DepositeAmmoutnValueConvert - widrowfieldValueConvert;

    DepositeAmmoutn.innerText = DepositeAmmoutnCalculate;



   
   
   })
   
   