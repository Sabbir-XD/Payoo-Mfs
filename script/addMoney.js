// add-money method in js

document.getElementById('btn-add-money')
    .addEventListener('click', function(event){
         event.preventDefault();
         const amountNum = document.getElementById('Amount-number').value;
         const convertAmountNum = parseFloat(amountNum);
         const mainBalance = document.getElementById('main-balance').innerText;
         const converMainBalance = parseFloat(mainBalance);
         const pinNum = document.getElementById('pin-number').value;
         const convertPinNum = parseInt(pinNum);
         if(convertPinNum === 1234){
            if(convertAmountNum > 0){
                const sum = converMainBalance + convertAmountNum;
                document.getElementById('main-balance').innerText = sum ;
            }
            else{
                alert('typed a Amount');
            }
            
         }
         else{
            alert("typed a wrong pin")
         }
    })


// cashOut method js

document.getElementById('btn-cashout')
    .addEventListener('click', function(event){
        event.preventDefault();
        const cashOutAmountNum = document.getElementById('cahout-amount-num').value;
        const convertCashOutNum = parseFloat(cashOutAmountNum);
        const mainBalance = document.getElementById('main-balance').innerText;
        const convertMainBalance = parseFloat(mainBalance);
        const cashOutPinNum = document.getElementById('cashOut-pin-num').value;
        const convertPinNUm = parseInt(cashOutPinNum);

        if(convertPinNUm === 1234){
            if(convertCashOutNum > 0){
                const sum = convertMainBalance - convertCashOutNum;
                document.getElementById('main-balance').innerText = sum;
                console.log(sum)
            }else{
                alert('typed a valid amount number');
            }
        }
        else{
            alert("your pin is wrong");
        }

    })