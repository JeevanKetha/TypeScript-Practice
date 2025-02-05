export class Transaction {
    // Constructor
    constructor(clients, toFrom, details, amount) {
        this.clients = clients;
        this.toFrom = toFrom;
        this.details = details;
        this.amount = amount;
    }
    // Method to format the transaction details
    format() {
        return `${this.toFrom} owes £${this.amount} for ${this.details} (${this.clients.toUpperCase()})`;
    }
}
