/*var modalx = document.getElementById("myModal");
document.getElementById("clsBtn").addEventListener("click", () => {
  modalx.style.display = "none";
});
document.querySelectorAll(".modal-btn").forEach(btn =>
  btn.addEventListener("click", () => {
    modalx.style.display = "block";
  })
);*/

var modal1 = document.getElementById("mysimpleModal");
function simpleModal() {
  modal1.style.display = "block";
}

function simpleModalclose() {
  modal1.style.display = "none";
}

var modal2 = document.getElementById("myinputModal");
function inputModal() {
  modal2.style.display = "block";
}

function inputModalclose() {
  modal2.style.display = "none";
}

function myFun(val) {
  alert("name is :" + val.value);
  val.value = "";
}
var modal3 = document.getElementById("myloginModal");
function loginModal() {
  modal3.style.display = "block";
}

function loginModalclose() {
  modal3.style.display = "none";
}

var emailregularexpression = /^([A-Za-z0-9-\.]){1,}\@([A-Za-z0-9_\-\.]){1,}\.([A-Za-z]{2,4})$/;
var passwordregularexpression = /^[a-zA-Z0-9!@#$%^&*]{6,15}$/;
var gmailvalue = document.getElementById("gmail-id").value;
var passwordvalue = document.getElementById("password").value;

function validate() {
  if (
    emailregularexpression.test(gmailvalue) &&
    passwordregularexpression.test(passwordvalue) == true
  ) {
    alert("successfully loged-in");
  }
}

function emailValidation(email) {
  console.log(email);

  var message = document.getElementById("emptyEmailerror");
  var gmailborder = document.getElementById("gmail-id");
  var invalidemail = document.getElementById("invalidEmailerror");

  message.style.display = "none";
  //  message.classList.add("hide");
  gmailborder.style.border = "1px solid #000";
  invalidemail.style.display = "none";
  // r.classList.add("hide");

  if (!email.value) {
    message.style.display = "block";
    //  message.classList.add("show");
    gmailborder.style.border = "1px solid #ff0000d0";
  } else if (!emailregularexpression.test(gmailvalue)) {
    invalidemail.style.display = "block";
    gmailborder.style.border = "1px solid #ff0000d0";
  } /* else {
    message.classList.remove("show");
  }*/
}

function passwordValidation(pwd) {
  var message = document.getElementById("emptyPassworderror");
  var passwordborder = document.getElementById("password");
  var invalidpassword = document.getElementById("invalidPassworderror");

  passwordborder.style.border = "1px solid #000";
  message.style.display = "none";
  invalidpassword.style.display = "none";

  if (!pwd.value) {
    message.style.display = "block";
    passwordborder.style.border = "1px solid #ff0000d0";
  } else if (!passwordregularexpression.test(passwordvalue)) {
    invalidpassword.style.display = "block";
    passwordborder.style.border = "1px solid #ff0000d0";
  }
}

function preventFun(e) {
  e.preventdefault();
}
