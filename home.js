// add money btn functionality

document
  .getElementById("add-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();

    // stores input value in  variables
    const bank = document.getElementById("add-bank").value;
    const accountNumber = document.getElementById("add-account-number").value;
    const amount = parseInt(document.getElementById("add-amount").value);
    const pin = document.getElementById("add-pin").value;

    console.log(bank, accountNumber, amount, pin);

    // available balance
    const availableBalance = parseInt(
      document.getElementById("available-balance").innerText
    );

    const totalNewAvailableBalance = amount + availableBalance;

    // value update to available balance
    document.getElementById("available-balance").innerText =
      totalNewAvailableBalance;
  });
