class Bank {
  #name; //private field
  constructor(name) {
    this.#name = name;
  }

  get Name() {
    return `${this.#name}`;
  }
}

let b1 = new Bank("SBI");
console.log(b1.Name);

//class Account extends from Bank
class Account extends Bank {
  #balance; //private field
  constructor(name, balance) {
    super(name);
    this.#balance = balance;
  }

  //get
  get Balance() {
    return this.#balance;
  }
}

let a1 = new Account("Sumit", 200000);
console.log(a1.Balance);
console.log(a1);

//Class SavingAccount extends from Account
class SavingsAccount extends Account {
  #interestRate; //private field
  constructor(name, balance, interestRate) {
    super(name, balance);
    this.#interestRate = interestRate;
  }

  //get
  get interestRate() {
    return this.#interestRate;
  }

  //set
  set interestRate(val) {
    return (this.#interestRate = val);
  }
}

let s1 = new SavingsAccount("Sumit", "200000", 5);
console.log(s1);
console.log(s1.interestRate);
s1.interestRate = 10;
console.log(s1.interestRate);
