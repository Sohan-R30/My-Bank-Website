// add event for Deposit
const depositBtn = document.querySelector("#deposit-btn");
depositBtn.addEventListener("click", function(event){
    const depositAmount = document.querySelector("#deposit-amount").value;
    const depositAmountNumber = parseInt(depositAmount);
    if(!isNaN(depositAmountNumber)){
        if(depositAmountNumber > 0){
            const totalDeposit = document.querySelector("#total-deposit").innerText;
            const totalDepositNumber = parseInt(totalDeposit);
            
            const newTotalDeposit = totalDepositNumber + depositAmountNumber;
            document.querySelector("#total-deposit").innerText = newTotalDeposit;
            
            const totalBalance = document.querySelector("#total-balance").innerText;
            const totalBalanceNumber = parseInt(totalBalance);

            const newTotalBalance = totalBalanceNumber + depositAmountNumber;
            document.querySelector("#total-balance").innerText = newTotalBalance;
        }
        else{
            alert("Please Enter Positive Values");
        }

}    
document.querySelector("#deposit-amount").value = '';
    // if(){
    //     console.log(depositAmountNumber,typeof depositAmountNumber)

    // }
})


//  add event for withdraw

const withdrawBtn = document.querySelector("#withdraw-btn");
withdrawBtn.addEventListener("click", function(event){
    const withdrawAmount = document.querySelector("#withdraw-amount").value;
    const withdrawAmountNumber = parseInt(withdrawAmount);
    if(!isNaN(withdrawAmountNumber)){
        if(withdrawAmountNumber > 0){
            const totalWithdraw = document.querySelector("#total-withdraw").innerText;
            const totalWithdrawNumber = parseInt(totalWithdraw);
            
            const newTotalWithdraw = totalWithdrawNumber + withdrawAmountNumber;
            
            
            const totalBalance = document.querySelector("#total-balance").innerText;
            const totalBalanceNumber = parseInt(totalBalance);

            const newTotalBalance = totalBalanceNumber - withdrawAmountNumber;
            if(newTotalBalance >= 0){
                document.querySelector("#total-balance").innerText = newTotalBalance;
                document.querySelector("#total-withdraw").innerText = newTotalWithdraw;
            }
            else{
                alert("Insufficient Balace")
            }
        }
        else{
            alert("Please Enter Positive Values");
        }
}  
document.querySelector("#withdraw-amount").value = '';
})