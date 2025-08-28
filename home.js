// logout functionality -------------------------------------
document.getElementById("logout").addEventListener("click", function () {
  window.location.href = "./index.html";
});

const validPin = 1234;

// Global transaction data array
const transactionData = [];

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

// function for active toggle button

function handleToggleButton(id) {
  const formBtns = document.getElementsByClassName("form-btn");
  for (const btn of formBtns) {
    btn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]", "font-semibold");
    btn.classList.add("border-[#0808081a]");
  }
  document
    .getElementById(id)
    .classList.add("border-[#0874f2]", "bg-[#0874f20d]", "font-semibold");

  document.getElementById(id).classList.remove("border-[#0808081a]");
}

// reusable function for transactions
function addTransaction(name) {
  const data = {
    name: name,
    date: new Date().toLocaleTimeString(),
  };
  transactionData.push(data);
}

// Toggling features ---------------------------------------------------------

// for add-Money
document.getElementById("addMoney").addEventListener("click", function () {
  handleToggle("add-money-parent");
  handleToggleButton("addMoney");
});

// for Cash Out
document.getElementById("cashOut").addEventListener("click", function () {
  handleToggle("cash-out-parent");
  handleToggleButton("cashOut");
});

// for transfer Money
document.getElementById("transferMoney").addEventListener("click", function () {
  handleToggle("transfer-money-parent");
  handleToggleButton("transferMoney");
});

// for get bonus
document.getElementById("getBonus").addEventListener("click", function () {
  handleToggle("get-bonus-parent");
  handleToggleButton("getBonus");
});

// for pay bill
document.getElementById("payBill").addEventListener("click", function () {
  handleToggle("pay-bill-parent");
  handleToggleButton("payBill");
});

// for transactions
document.getElementById("transactions").addEventListener("click", function () {
  handleToggle("transactions-parent");
  handleToggleButton("transactions");

  // transaction history functionality
  const transactionContainer = document.getElementById("transaction-container");
  transactionContainer.innerText = "";

  for (const data of transactionData) {
    const div = document.createElement("div");
    div.innerHTML = `
     <div
            class="mt-4 bg-white rounded-xl py-[13px] px-4 flex justify-between items-center"
          >
            <div class="flex items-center gap-4">
              <div class="p-3 bg-[#f4f5f7] rounded-3xl">
                <img src="./assets/wallet1.png" />
              </div>
              <div>
                <h1 class="font-semibold text-[#080808b3]">${data.name}</h1>
                <p class="text-[#080808b3] text-[12px]">Today ${data.date}</p>
              </div>
            </div>
            <i class="fa-solid fa-ellipsis-vertical fa-lg text-[#080808b3]"></i>
          </div>

    `;
    transactionContainer.appendChild(div);
  }
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

    addTransaction("Add Money");
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

  addTransaction("Cash Out");
});
