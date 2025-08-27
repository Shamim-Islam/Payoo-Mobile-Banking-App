//

const validPin = 1234;

// Reusable function to get the input values --------------------------------------

// for number type -- in details
// function getInputValueNumber(id) {
//   const inputField = document.getElementById(id);
//   const inputFieldValue = inputField.value;
//   const inputFieldValueNumber = parseInt(inputFieldValue);

//   return inputFieldValueNumber;
// }

// for number type -- in short
function getInputValueNumber(id) {
  const inputFieldValueNumber = parseInt(document.getElementById(id).value);
  return inputFieldValueNumber;
}

// for string type number -- in short
function getInputValue(id) {
  const inputFieldValue = document.getElementById(id).value;
  return inputFieldValue;
}

// function to get innerText
function getInnerText(id) {
  const elementValueNumber = parseInt(document.getElementById(id).innerText);
  return elementValueNumber;
}

// function to set innerText
function setInnerText(value) {
  const availableBalance = document.getElementById("available-balance");
  availableBalance.innerText = value;
}

// function for toggle functionality
function handleToggle(id) {
  const forms = document.getElementsByClassName("form");
  for (const form of forms) {
    form.style.display = "none";
  }
  document.getElementById(id).style.display = "block";
}

// Toggling features ---------------------------------------------------------

// for add-Money
document.getElementById("addMoney").addEventListener("click", function () {
  handleToggle("add-money-parent");
});

// for Cash Out
document.getElementById("cashOut").addEventListener("click", function () {
  handleToggle("cash-out-parent");
});

// for transfer Money
document.getElementById("transferMoney").addEventListener("click", function () {
  handleToggle("transfer-money-parent");
});

// for get bonus
document.getElementById("getBonus").addEventListener("click", function () {
  handleToggle("get-bonus-parent");
});

// for pay bill
document.getElementById("payBill").addEventListener("click", function () {
  handleToggle("pay-bill-parent");
});

// for transactions
document.getElementById("transactions").addEventListener("click", function () {
  handleToggle("transactions-parent");
});

// add money btn functionality ----------------------------------------------------------
document
  .getElementById("add-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();

    // stores input value in variables
    const bank = getInputValue("add-bank");
    const accountNumber = getInputValue("add-account-number");
    const amount = getInputValueNumber("add-amount");
    const pin = getInputValueNumber("add-pin");

    // available balance //innerText
    const availableBalance = getInnerText("available-balance");

    // account number validation for 11 characters
    if (accountNumber.length < 11) {
      alert("Please provide valid account number");
      return;
    }

    // pin validation
    if (pin !== validPin) {
      alert("Please provide valid pin number");
      return;
    }

    // sum of inputed amount and available amount
    const totalNewAvailableBalance = amount + availableBalance;

    // value update to available balance
    setInnerText(totalNewAvailableBalance);
  });

// Cash out btn functionality ----------------------------------------------------------

document.getElementById("cash-out-btn").addEventListener("click", function (e) {
  e.preventDefault();

  // stores input value in variables
  const agent = getInputValue("agent-number");
  const cashoutAmount = getInputValueNumber("cashout-amount");
  const cashoutPin = getInputValueNumber("cashout-pin");

  // available balance
  const availableBalance = getInnerText("available-balance");

  // account number validation for 11 characters
  if (agent.length != 11) {
    alert("❌ Account number must be exactly 11 digits");
    return;
  }

  // pin validation
  if (cashoutPin !== validPin) {
    alert("Please provide the valid pin number");
    return;
  }

  // Calculate the Difference of inputed value and available balance
  const totalNewAvailableBalance = availableBalance - cashoutAmount;

  // Final value updated to available balance
  setInnerText(totalNewAvailableBalance);
});
