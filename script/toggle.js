handleToggle('cashOut', "none");
handleToggle('transactionHistory', "none");

document.getElementById('Add-Money-box')
    .addEventListener('click', function(){
        handleToggle('cashOut', "none");
        handleToggle('AddMoney', "block");
        handleToggle('transactionHistory', "none");

    })

document.getElementById('CashOut-box')
    .addEventListener('click', function(){
        handleToggle('cashOut', "block");
        handleToggle('AddMoney', "none");
        handleToggle('transactionHistory', "none");

    })
document.getElementById('transactionHis')
    .addEventListener('click', function(){
        handleToggle('cashOut', "none");
        handleToggle('AddMoney', "none");
        handleToggle('transactionHistory', "block");
    })