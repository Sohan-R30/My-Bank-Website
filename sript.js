const depositBtn = document.querySelector("#deposit-btn");
depositBtn.addEventListener("click", function(event){
    const depositAmount = document.querySelector("#deposit-amount").value;
    const depositAmountNumber = parseInt(depositAmount);
    if(!isNaN(depositAmountNumber)){
        const totalDeposit = document.querySelector("#total-deposit").innerText;
    const totalDepositNumber = parseInt(totalDeposit);
    
    const newTotalDeposit = totalDepositNumber + depositAmountNumber;
    document.querySelector("#total-deposit").innerText = newTotalDeposit;
    
    const totalBalance = document.querySelector("#total-balance").innerText;
    const totalBalanceNumber = parseInt(totalBalance);

    const newTotalBalance = totalBalanceNumber + depositAmountNumber;
    document.querySelector("#total-balance").innerText = newTotalBalance;

    document.querySelector("#deposit-amount").value = '';
    }
    console.log(typeof depositAmountNumber);
    
})