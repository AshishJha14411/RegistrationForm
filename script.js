let userData = document.querySelector("#name");
let emailData = document.querySelector("#email");
let passwordData = document.querySelector("#password");
let confirmPasswordData = document.querySelector("#confirmPassword");
let submitBtn = document.querySelector("#submitBtn");
let formSection = document.querySelector("body");
let showHidePwd = document.querySelector("#togglePassword")
let alertMsg = document.createElement("p");
// created alert
function createAlert(str) {
  alertMsg.style.color = "red";
  alertMsg.style.fontSize = "18px";
  alertMsg.style.padding = "30";
  alertMsg.innerText = str;
  submitBtn.parentNode.insertBefore(alertMsg, submitBtn);
  setTimeout(() => {
    alertMsg.remove();
  }, 5000);
}
// checked for empty
function checkEmptyData() {
  if (
    userData.value == "" ||
    emailData.value == "" ||
    passwordData == "" ||
    confirmPasswordData.value == ""
  ) {
    let str = "Please Enter Valid Non-Empty Inforation";
    createAlert(str);
  }
}
//email validation function
function emailValidation() {
    let email = emailData.value
    if(email.indexOf("@")==-1 || email.indexOf(".")===-1){
        let emailWarning = "Please Enter Valid Email"
        createAlert(emailWarning)
    }
}
//password check for alphanumber and confirm password
function passwordValidation() {
    let letter = /[a-zA-Z]/; 
    let number = /[0-9]/;
    let valid = number.test(passwordData.value) && letter.test(passwordData.value);
    if(valid && passwordData.value.length>5){
       if(passwordData.value!==confirmPasswordData.value){
        let pwdMatchWarning = "Please make sure Password and Confirm Password is same"
        createAlert(pwdMatchWarning)
       }
    }else{
        let passWarning = "Please Enter AlphaNumeric Password and more than 6 characters"
        createAlert(passWarning)
    }
}

submitBtn.addEventListener("click", () => {
  checkEmptyData();
  emailValidation();
  passwordValidation();
  if(alertMsg.innerText===""){
    alert("Form Submit.")
  }
});

/* 
showHidePwd.addEventListener("click",() => {
    console.log(first)
    const type = passwordData.getAttribute("type") === "password" ? "text" : "password"
    passwordData.setAttribute("type",type)
    this.classList.toggle("fa-eye-slash")
}); */