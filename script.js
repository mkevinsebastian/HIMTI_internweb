var formInput = document.getElementById("form-input")
var formBtn = document.getElementById("form-btn")

function validateEmail(email){
    var len = email.length;
    if(!email.endsWith("@gmail.com") && !email.endsWith("@binus.ac.id"))return false;
    return true;
}

formBtn.addEventListener("click", ()=>{
    var inputEmail = formInput.value

    if(inputEmail!=="" && validateEmail(inputEmail)){
        alert("Welcome, " + inputEmail + "!")
    }
    else if(inputEmail!=="" && !validateEmail(inputEmail)){
        alert("Email must be ended with '@gmail.com' or '@binus.ac.id'!")
    }

})