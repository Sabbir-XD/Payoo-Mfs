// Add-money method in js
document.getElementById('btn-add-money')
    .addEventListener('click', function(event){
         event.preventDefault();
         const amountNum = getInputValueID('Amount-number');
         const mainBalance = getInnerTextValueID('main-balance');
         const pinNum = getInputValueID('pin-number');
         const addAccountNumber = document.getElementById('bank-acc-num').value;
         
         if(addAccountNumber.length === 11 && addAccountNumber.startsWith('01')){
            if(pinNum === 1234){
                if(amountNum > 0){
                    const sum = mainBalance + amountNum;  
                    setInnerTextIDandValue('main-balance', sum);

                const container = document.getElementById('transactionHistory');

                const div = document.createElement('div');
                div.innerHTML=`
                <div class="flex justify-between items-center bg-white px-2 py-1 rounded-2xl mt-5">
                 <img src="assets/image/wallet1.png" alt="">
                 <div class="text-lg text-gray-600 font-semibold">
                     <p>Added a Money ${amountNum} tk </p>
                     <p>From ${addAccountNumber} This Account</p>
                 </div>
                   <i class="fas fa-ellipsis-v"></i>
                 </div>
                `
                container.appendChild(div);

                }
                else{
                    alert('typed a Amount');
                }
                
             }
             else{
                alert("typed a wrong pin")
             }
         }
         else{
            alert("plz write a valid account number")
         }
    })



// cashOut money method js
document.getElementById('btn-cashout')
    .addEventListener('click', function(event){
        event.preventDefault();
        const cashAmountNum = getInputValueID('cahout-amount-num');
        const cashMainBalance = getInnerTextValueID('main-balance');
        const cashPinNum = getInputValueID('cashOut-pin-num');
        const cashAccNum = document.getElementById('cashOut-acc-num').value;
        console.log(cashAccNum)
      
            if(cashPinNum === 1234){
                if(cashAmountNum <= cashMainBalance){
                    const sum = cashMainBalance - cashAmountNum;
                    setInnerTextIDandValue('main-balance', sum);

                    const container = document.getElementById('transactionHistory');

                    const div = document.createElement('div');
                    div.innerHTML=`
                    <div class="flex justify-between items-center bg-white px-2 py-1 rounded-2xl mt-5">
                     <img src="assets/image/wallet1.png" alt="">
                     <div class="text-lg text-gray-600 font-semibold">
                         <p>Cash Out ${cashAmountNum} tk </p>
                         <p>From ${cashAccNum} This Account</p>
                     </div>
                       <i class="fas fa-ellipsis-v"></i>
                     </div>
                    `
                    container.appendChild(div);

                }else{
                    alert('typed a valid amount number');
                }
            }
            else{
                alert("your pin is wrong");
            }

    })



// Transfer Money money method in js
document.getElementById('btn-transfer')
    .addEventListener('click', function(event){
         event.preventDefault();
         const transferAccNum = document.getElementById('tarnsfer-acc-num').value;
         const transferAmount = getInputValueID('transfer-amount-num');
         const transferPinNum = getInputValueID('transfer-pin-num');
         const tranferMainBalance = getInnerTextValueID('main-balance');

         if(transferAccNum.length === 11 && transferAccNum.startsWith('01')){
            if(transferPinNum === 1234){
               if(transferAmount <= tranferMainBalance && transferAmount > 0){
                    const sum = tranferMainBalance -  transferAmount ;
                    setInnerTextIDandValue('main-balance', sum);
                  
                    const container = document.getElementById('transactionHistory');

                    const div = document.createElement('div');
                    div.innerHTML =`
                    <div class="flex justify-between items-center bg-white px-2 py-1 rounded-2xl mt-5">
                     <img src="assets/image/wallet1.png" alt="">
                     <div class="text-lg text-gray-600 font-semibold">
                         <p>Transfer ${transferAmount} tk </p>
                         <p>From ${transferAccNum} This Account</p>
                     </div>
                       <i class="fas fa-ellipsis-v"></i>
                     </div>
                    `
                    container.appendChild(div);
    
               }else{
                   alert('invalid Amount Number')
               }
            }else{
                alert('invalid Pin Number')
            }
         }else{
           alert('invalid account number')
         }
    })

    
//pay bill money method in js
document.getElementById('btn-Pay-Bill')
    .addEventListener('click', function(event){
        const selectValue = document.getElementById('payBillSelect').value;
        console.log(selectValue);
        const payAccNum = document.getElementById('biller-Number').value;
        const payAmountNum = getInputValueID('pay-Amount-Num');
        const payPinNum = getInputValueID('pay-pin-number')
        const payMainBalance = getInnerTextValueID('main-balance');

        if(payAccNum.length === 11 && payAccNum.startsWith('01') ){
            if(payAmountNum <= payMainBalance && payAmountNum > 0){
               if(payPinNum === 1234){
                const sum = payMainBalance - payAmountNum;
                setInnerTextIDandValue('main-balance', sum);

                alert('Deducted Successfully')

                const container = document.getElementById('transactionHistory');

                const div = document.createElement('div');
                    div.innerHTML =`
                    <div class="flex justify-between items-center bg-white px-2 py-1 rounded-2xl mt-5">
                     <img src="assets/image/wallet1.png" alt="">
                     <div class="text-lg text-gray-600 font-semibold">
                         <p>${selectValue} Bill Pay ${payAmountNum} tk </p>
                         <p>From ${payAccNum} This Account</p>
                     </div>
                       <i class="fas fa-ellipsis-v"></i>
                     </div>
                    `
                    container.appendChild(div);

               }else{
                 alert('invalid Pin Number')
               }
            }else{
                alert('invalid Amount Number')
            }
        }else{
            alert('invalid Account Number')
        }
       

       
    })



