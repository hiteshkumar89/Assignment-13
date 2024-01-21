const $ = id => document.getElementById(id)

function bankAccount(ownerName) {
    let balance = 0;
    let owner = ownerName;
  
    function validateAmount(amount) {
      return typeof amount === 'number' && !isNaN(amount) && amount > 0;
    }
  
    return {
      deposit: function(depositAmount) {
        if (validateAmount(depositAmount)) {
          balance += depositAmount;
          displayAccountInfo();
        } else {
          alert('Please enter a valid deposit amount.');
        }
      },
      withdraw: function(withdrawalAmount) {
        if (validateAmount(withdrawalAmount) && withdrawalAmount <= balance) {
          balance -= withdrawalAmount;
          displayAccountInfo();
        } else {
          alert('Invalid withdrawal amount or insufficient funds.');
        }
      },
      getBalance: function() {
        return balance;
      },
      getOwnerName: function() {
        return owner;
      },

      updateName: function(newName) {
        owner = newName;
        displayAccountInfo();
      }
    };
  }
  
  const account = bankAccount('');
  
  $('setNameBtn').addEventListener('click', function() {
    const newName = prompt('Enter your name:');
    if (newName) {
        account.updateName(newName);
    }
  });
  
  $('depositBtn').addEventListener('click', function() {
    const amount = parseFloat(prompt('Enter the deposit amount:'));
    if (!isNaN(amount)) {
        account.deposit(amount);
    } else {
      alert('Please enter a valid number for the deposit amount.');
    }
  });
  
  $('withdrawBtn').addEventListener('click', function() {
    const amount = parseFloat(prompt('Enter the withdrawal amount:'));
    if (!isNaN(amount)) {
        account.withdraw(amount);
    } else {
      alert('Please enter a valid number for the withdrawal amount.');
    }
  });
  
  function displayAccountInfo() {
    $('nameDisplay').textContent = `Name: ${account.getOwnerName()}`;
    $('balanceDisplay').textContent = `Balance: ${account.getBalance()}`;
  }