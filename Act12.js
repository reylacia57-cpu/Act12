// Requirement 1: Class 1
class Account {
  constructor(balance) {
    this.balance = balance;
  }
  // Requirement 3: Method 1
  withdraw(amount) {
    // Requirement 4: Conditional 1
    if (this.balance >= amount) {
      this.balance -= amount;
      return true;
    }
    return false;
  }
}

// Requirement 1: Class 2 & Requirement 2: Inheritance
class SavingsAccount extends Account {
  // Requirement 3: Method 2
  checkStatus() {
    // Requirement 4: Conditional 2
    if (this.balance < 100) {
      return "Low Balance";
    }
    return "Healthy Balance";
  }
}

const acc = new SavingsAccount(150);
acc.withdraw(60);
console.log(acc.checkStatus());
