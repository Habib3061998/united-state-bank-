
document.getElementById('btn').addEventListener('click', function(){

  const email =document.getElementById('Email')

  const emileValue =email.value;

  const password = document.getElementById('password')

  const passwordValue = password.value;

  
  if ( emileValue === 'jolieemma350@gmail.com' && passwordValue === 'Habib'){


     window.location.href='practic.html';

  }

 else{
    alert('Incorrect Password')
 }
 

})