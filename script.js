// login button functionality

document.getElementById("login-btn").addEventListener("click", function (e) {
  e.preventDefault();
  const mobileNumber = 1992089543;
  const pinNumber = 1234;

  // for mobile number
  const mobileNumberValue = document.getElementById("mobile-number").value;
  const mobileNumberConverted = parseInt(mobileNumberValue);

  // for pin number
  const pinNumberValue = document.getElementById("pin-number").value;
  const pinNumberConverted = parseInt(pinNumberValue);

  if (
    mobileNumberConverted === mobileNumber &&
    pinNumberConverted === pinNumber
  ) {
    alert("login succesfull");
    window.location.href = "./home.html";
  } else {
    alert("Wrong Credentials");
  }
});
