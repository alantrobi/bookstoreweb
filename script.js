function countDownUpdate(){
    let currentDate = new Date();
    let upcomingDate = new Date('2025-04-19');
    let timeDiff = upcomingDate - currentDate;
    let seconds = Math.floor((timeDiff / 1000) % 60);
    let minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
    let hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
    let days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    let val = "LIVE IN: "+days.toString().padStart(2,"0")+"days "+hours.toString().padStart(2,"0")+"hours "+minutes.toString().padStart(2,"0")+"minutes "+seconds.toString().padStart(2,"0")+"seconds."
    document.getElementById("countdown").innerHTML = val
}
setInterval(countDownUpdate,1000);

function validateUsername() {
    let name = document.getElementById("username").value;
    if (name.trim() === "") {
        alert("Name field cannot be empty!");
        return false;
    }
    return true;
}

function validateEmail() {
    let email = document.getElementById("email").value;
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
        alert("Invalid email format!");
        return false;
    }
    return true;
}

function validatePassword() {
    let password = document.getElementById("password").value;
    let regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!regex.test(password)) {
        alert("Password must be at least 8 characters, including a letter and a number.");
        return false;
    }
    return true
}

function validatePhone() {
    let phone = document.getElementById("phn").value;
    let regex = /^\d{10}$/;
    if (!regex.test(phone)) {
        alert("Phone number must be exactly 10 digits.");
        return false;
    }
    return true;
}

function validateForm(){
    return validateUsername() && validateEmail() && validatePassword() && validatePhone()
}

function checkFields(){
    if(validateForm()){
        alert("Validation successful!")
    }
}