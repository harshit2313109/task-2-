document.getElementById('myForm').addEventListener('submit', function(event) {
 event.preventDefault();  
    
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    var message;
   
    

    message = validateName(firstName, "First Name");  
    message = validateName(lastName, "Last Name");
    message = validatePassword(password);
    message = validateConfirmPassword(password, confirmPassword)
    message =validateform(firstName,lastName,email,password,confirmPassword);
    document.getElementById('message').innerText = message || "Form is valid!";
});
function validateform(a,b,c,d,e){
if(a==""||b==""||c==""||d==""||e==""){
    alert("all fields are mandatory");
    return false;
}

}
function validateName(name, fieldName) {
    if (!name) {
        return `${fieldName} cannot be empty.\n`;
    }
    if (name.length < 1 || name.length > 30) {
        return `${fieldName} must be between 1 and 30 characters.\n`;
    }
    for (let i = 0; i < name.length; i++) {
       
        
        const char = name[i];
        console.log(char);
        if (
            !(char >= 'A' && char <= 'Z') &&
            !(char >= 'a' && char <= 'z') &&
            (char !== '-' )&&
           ( char !== " ")
        ) {
            return `${fieldName} can only contain letters, hyphens, and apostrophes.\n`;
        }
    }
    return " "; 
}
function validatePassword(password) {
    if (!password) {
        return "Password cannot be empty.\n";
    }
    if (password.length < 6) {
        return "Password must be at least 6 characters long.\n";
    }
    return "";
}

function validateConfirmPassword(password, confirmPassword) {
    if (confirmPassword !== password) {
        return "Passwords do not match.\n";
    }
    return ""; 
}
