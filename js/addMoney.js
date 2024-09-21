document.querySelector('#add_money_btn').addEventListener('click',function(event){
    event.preventDefault()
    const addMoneyAmount = inputValueCollect('#amount_input')
    const addMoneyPin = inputValueCollect('#pin_number_input')

    if(isNaN(addMoneyAmount)){
        alert("Warning! Please correct input provide here.")
        return
    }
    
    if(addMoneyPin === 1234){
        const mainBalance = mainBalanceAvailable('#main_balance')
        const newBalance = mainBalance + addMoneyAmount;
        console.log(newBalance)
        document.querySelector('#main_balance').innerText = newBalance

        const transactionContainer = document.querySelector('#transaction_section')
        const div = document.createElement('div')
        div.innerHTML = `
            <div class="p-2 bg-green-400 rounded-2xl">
                <h3 class="underlined">Cash In</h3>
                <p>Cash in ${addMoneyAmount} Tk. Now, your main balance is: ${newBalance} Tk.</p>
            </div>
        `
        transactionContainer.appendChild(div)
    }else{
        alert("Wrong pin number! Please try Again.")
    }
 
})