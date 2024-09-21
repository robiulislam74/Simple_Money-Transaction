function inputValueCollect (id){
    const inputValue = document.querySelector(id).value
    const convertOfType = parseFloat(inputValue)

    return convertOfType;
}

function mainBalanceAvailable(id){
    const mainBalance = document.querySelector(id).innerHTML
    const convertOfType = parseFloat(mainBalance)
    return convertOfType
}

// Toggle Button code
function toggleFeaturesButton(id){
    document.querySelector('#add_money_form').classList.add('hidden')
    document.querySelector('#cash_out_form').classList.add('hidden')
    document.querySelector('#transaction_section').classList.add('hidden')

    document.querySelector(id).classList.remove('hidden')
}