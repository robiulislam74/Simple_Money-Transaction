document.querySelector('#login_btn').addEventListener('click',function(event){
    event.preventDefault();
    const phoneNumber = document.querySelector('#phone_number_input').value
    const pinNumber = document.querySelector('#pin_number_input').value

    if(phoneNumber === "10" && pinNumber === "1234"){
        window.location.href = './home.html'
    }else{
        alert("Warning! wrong phone number or pin. Please Try Again!")
    }

})