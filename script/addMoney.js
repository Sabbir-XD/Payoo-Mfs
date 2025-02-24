document.getElementById('btn-add-money')
    .addEventListener('click', function(event){
         event.preventDefault();
         const amountNum = document.getElementById('Amount-number').value;
         const convertAmountNum = parseFloat(amountNum);
         const mainBalance = document.getElementById('main-blance').innerText;
         const converMainBalance = parseFloat(mainBalance);
         const pinNum = document.getElementById('pin-number').value;
         const convertPinNum = parseInt(pinNum);
         if(convertPinNum === 1234){
            if(convertAmountNum > 0){
                const sum = converMainBalance + convertAmountNum;
                document.getElementById('main-blance').innerText = sum ;
                console.log(sum)
            }
            else{
                alert('typed a Amount');
            }
            
         }
         else{
            alert("typed a wrong pin")
         }
    })