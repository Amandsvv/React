//Defining a constructor Bankaccount with some properties
function BankAccount(type, customerId,accountNumber){
    this.type = type;
    this.customerId = customerId;
    this.accountNumber = accountNumber;
}

//Inheritance by prototype : prototypical inheritance

BankAccount.prototype.ShowDetails = function(){
    console.log(`Type : ${this.type},
    CustomerId : ${this.customerId},
    AccountNumber : ${this.accountNumber}`);
}
SavingAccount.prototype= Object.create(BankAccount.prototype); //Shallow copy
function SavingAccount(type,customerId,accountNumber,details){
    BankAccount.call(this,type,customerId,accountNumber);
    this.details = details;
}
SavingAccount.prototype.Details = function(){
    console.log(`Type: ${this.type},Details : ${this.details} `);
}

const account = new SavingAccount('Saving',"cb101",101,'Mohan');
account.Details();
account.ShowDetails();