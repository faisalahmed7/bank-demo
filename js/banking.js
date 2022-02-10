// handle deposit button event
document.getElementById('deposit-btn').addEventListener('click', function () {
    // get amount deposited
    const inputDeposit = document.getElementById('deposit-input');
    const newDepositAmountsText = inputDeposit.value;
    const newDepositAmounts = parseFloat(newDepositAmountsText);

    // update deposit total
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);
    const newTotalDepositAmount = previousDepositAmount + newDepositAmounts;
    depositTotal.innerText = newTotalDepositAmount;


    // update acout balance field
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotaltText = balanceTotal.innerText;
    const previousBlanacetAmount = parseFloat(previousBalanceTotaltText);
    const newBlanaceTotalAmount = previousBlanacetAmount + newDepositAmounts;
    balanceTotal.innerText = newBlanaceTotalAmount;

    // clear the input field
    inputDeposit.value = '';

})



// handle withdraw button event

document.getElementById('withdraw-btn').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const newWithdrawAmountsText = withdrawInput.value;
    const newWithdrawAmounts = parseFloat(newWithdrawAmountsText);


    // set withdraw total

    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawText);
    const newWithdrawTotal = previousWithdrawAmount + newWithdrawAmounts;
    withdrawTotal.innerText = newWithdrawTotal;

    // update acout balance field
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotaltText = balanceTotal.innerText;
    const previousBlanacetAmount = parseFloat(previousBalanceTotaltText);
    const newBlanaceTotalAmount = previousBlanacetAmount - newWithdrawAmounts;
    balanceTotal.innerText = newBlanaceTotalAmount;


    // clear the input field
    withdrawInput.value = '';


})