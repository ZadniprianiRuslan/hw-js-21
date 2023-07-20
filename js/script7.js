const account = {
    balance: 5000,

    moneyWork() {
    const product = 1500;
    let newBalance = this.balance - product;
    return newBalance
    }
};

console.log(account.moneyWork());
