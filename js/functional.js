// console.log('3333');
function getInputValue(fieldId){
    const inputField = document.getElementById(fieldId);
    const valueInText = inputField.value;
    const value = parseFloat(valueInText);
    inputField.value = '';
    return value;
}
function updateTotal(fieldId, amount){
    // console.log(fieldId, amount);
    // const totalTag = document.getElementById(fieldId);
    // const previousTotalInText = totalTag.innerText;
    // const previousTotal = parseFloat(previousTotalInText);
    const previousTotal = getInnerTextValue(fieldId);
    const newTotal = previousTotal + amount;
    document.getElementById(fieldId).innerText = newTotal;
    return newTotal;
}
function getInnerTextValue(fieldId){
    const fieldTag = document.getElementById(fieldId);
    const fieldValueInText = fieldTag.innerText;
    const value = parseFloat(fieldValueInText);
    return value;
}
function updateBalance(amount, isAdd){
    // const balanceTag = document.getElementById('balance-total');
    // const balanceInText = balanceTag.innerText;
    // const previousBalance = parseFloat(balanceInText);
    const previousBalance = getInnerTextValue('balance-total');
    let newBalance;
    if(isAdd == true){
         newBalance = previousBalance + amount;
    }
    else{
        newBalance = previousBalance - amount;
    }
    // const newBalance = previousBalance + amount;
    document.getElementById('balance-total').innerText = newBalance;
}
document.getElementById('deposit-button').addEventListener('click', function(){
    // console.log('deposit clicked');
    const amount = getInputValue('deposit-input');
    // console.log(amount);
    if(amount > 0){
        updateTotal('deposit-total', amount);
        updateBalance(amount, true);
    }
});

// handle withdraw
document.getElementById('withdraw-button').addEventListener('click', function(){
    const amount = getInputValue('withdraw-input');
    const balance = getInnerTextValue('balance-total');
    if(amount > 0 && amount <= balance){
        updateTotal('withdraw-total', amount);
        updateBalance(amount, false);
    }
});