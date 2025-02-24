document.getElementById('btn-login')
    .addEventListener('click', function(event){
        event.preventDefault();
        const inputNumber = document.getElementById('input-number').value;
        const inputPin = document.getElementById('input-pin').value;
        const convertPin = parseInt(inputPin);
      if(inputNumber.length === 11 && inputNumber.startsWith('01')){
         if(convertPin === 1234){
            window.location.href="./main.html";
         }
         else{
            alert('typed a wrong pin')
         }
      }
      else{
        alert('typed a valid Number plz')
      }
    })