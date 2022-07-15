//object to store user details
let userDetailDatabase = {}

//function to get user details
function getUserDetails(){
    //for Username
    let userName = prompt("Enter your username")

    if (userName == null){
        return
    }

    function validateUserName (userName){
        if(userName.length < 10 && userName.length > 0){
            return true
        }else{
            return false
        }
    }
    while (validateUserName(userName) == false){
        userName = prompt("Username must be greater than 0 but less than 10")
    }
    userDetailDatabase["Username"] = userName
    
    //for email address
    let email = prompt("Enter your email address")
    
    if (email == null){
        return
    } 

    function validateEmail (email){
        const emailCheck = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        emailCheckResult = emailCheck.test(email);
        if (emailCheckResult == true) {
            return true
        }else {
            return false
        }
    }
    while (validateEmail(email) == false){
        email = prompt("Enter a valid email address")
    }
    userDetailDatabase["Email"] = email
    
    //for phone number
    let phoneNumber =prompt("Enter your phone number")
    
    if (phoneNumber == null){
        return
    }

    function validatePhoneNumber(phoneNumber) {
        if (phoneNumber.length == 11) {
            return true
        }else{
            return false
        }
    }
    while (validatePhoneNumber(phoneNumber) == false){
        phoneNumber = prompt("Phone number must be 11 digits")
    }
    userDetailDatabase["PhoneNumber"] = phoneNumber
    //for password
    let password = prompt("Enter your password")
    
    if (password == null){
        return
    }

    function validatePassword(password){
        if (password.length < 6) {
            return false
        }else{
            return true
        }
    }
   while (validatePassword(password) == false){
    email = prompt("Password must not be less than 6 digits")
   }
    userDetailDatabase["Password"] = password
   //for confirm password
    let confirmPassword = prompt("Confirm your password")
    
    if (confirmPassword == null){
        return
    }
    
    function validateConfirmPassword(confirmPassword){
        if (confirmPassword != password) {
            return false
        }else{
            return true
        }
    }
    while (validateConfirmPassword(confirmPassword) == false){
        confirmPassword = prompt("Passwords do not match")
    }

    
}

function displayUserDetails(){
    alert(`Your Details\n\nUsername: ${userDetailDatabase.Username}\nPhone Number: ${userDetailDatabase.PhoneNumber}\nEmail Address: ${userDetailDatabase.Email}`)
}