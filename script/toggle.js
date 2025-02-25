document.getElementById('cashOut').style.display = "none";

document.getElementById('Add-Money-box')
    .addEventListener('click', function(){
        document.getElementById('cashOut').style.display = "none";
        document.getElementById('AddMoney').style.display = "block";

    })

document.getElementById('CashOut-box')
    .addEventListener('click', function(){
        document.getElementById('cashOut').style.display = "block";
        document.getElementById('AddMoney').style.display = "none";

    })