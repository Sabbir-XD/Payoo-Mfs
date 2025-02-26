handleToggle('cashOut', "none");
handleToggle('transactionHistory', "none");
handleToggle('TransferMoney', "none");
handleToggle('bonusCoupon', "none");
handleToggle('payBill', "none");

document.getElementById('Add-Money-box')
    .addEventListener('click', function(){
        handleToggle('cashOut', "none");
        handleToggle('AddMoney', "block");
        handleToggle('TransferMoney', "none");
        handleToggle('bonusCoupon', "none");
        handleToggle('payBill', "none");
        handleToggle('transactionHistory', "none");

    })

document.getElementById('CashOut-box')
    .addEventListener('click', function(){
        handleToggle('cashOut', "block");
        handleToggle('AddMoney', "none");
        handleToggle('TransferMoney', "none");
        handleToggle('bonusCoupon', "none");
        handleToggle('payBill', "none");
        handleToggle('transactionHistory', "none");

    })

document.getElementById('transactionHis')
    .addEventListener('click', function(){
        handleToggle('cashOut', "none");
        handleToggle('AddMoney', "none");
        handleToggle('TransferMoney', "none");
        handleToggle('bonusCoupon', "none");
        handleToggle('payBill', "none");
        handleToggle('transactionHistory', "block");
    })

document.getElementById('Transfer-Money')
    .addEventListener('click', function(){
        handleToggle('cashOut', "none");
        handleToggle('AddMoney', "none");
        handleToggle('transactionHistory', "none");
        handleToggle('TransferMoney', "block");
        handleToggle('bonusCoupon', "none");
        handleToggle('payBill', "none");
    })

document.getElementById('Bonus-Coupon')
    .addEventListener('click', function(){
        handleToggle('cashOut', "none");
        handleToggle('AddMoney', "none");
        handleToggle('transactionHistory', "none");
        handleToggle('TransferMoney', "none");
        handleToggle('payBill', "none");
        handleToggle('bonusCoupon', "block");
    })
document.getElementById('Pay-Bill')
    .addEventListener('click', function(){
        handleToggle('cashOut', "none");
        handleToggle('AddMoney', "none");
        handleToggle('transactionHistory', "none");
        handleToggle('TransferMoney', "none");
        handleToggle('bonusCoupon', "none");
        handleToggle('payBill', "block");
    })