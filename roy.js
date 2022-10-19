// BTN js here 

document.getElementById('log_in-btn').addEventListener('click',function () {
    const logIn = document.getElementById('log-in');
    logIn.style.display="none";
    const bank = document.getElementById('main-bank');
    bank.style.display="block";
})

// parseFloat function is here 
function totalAmount(id,addAmount) {
    const currentDeposit = document.getElementById(id).innerText;
    const currentDepositNumber = parseFloat(currentDeposit);
    const totalDeposit = addAmount + currentDepositNumber;

    document.getElementById(id).innerText=totalDeposit;
}



// deposit section is here 

document.getElementById('deposit-btn').addEventListener('click',function() {
    const depositAmount = document.getElementById('depositAmount').value;
    const addAmount = parseFloat(depositAmount);

    totalAmount("total-deposit-taka",addAmount)

    totalAmount("balance",addAmount)

    document.getElementById('depositAmount').value = "";
})


// withdraw function is here 

function withdrawTotal(id,withdrawNumber) {
    const withdraw = document.getElementById(id).innerText;
    const withdrawAmount = parseFloat(withdraw);
    const totalWithdraw = withdrawAmount - withdrawNumber;
    document.getElementById(id).innerText = totalWithdraw
}



// withdraw section here 

document.getElementById('withdraw-money').addEventListener('click',function () {
    const withdrawInput = document.getElementById('withdraw-taka').value;
    const withdrawNumber = parseFloat(withdrawInput);

    totalAmount("withdraw",withdrawNumber);

    withdrawTotal('balance',withdrawNumber);

    document.getElementById('withdraw-taka').value = "";
})
