 export class Transaction {

    clients: string;
    toFrom: string;
    details: string;
    amount: number;

   // Constructor
   constructor(clients: string, toFrom: string, details: string, amount: number) {
       this.clients = clients;
       this.toFrom = toFrom;
       this.details = details;
       this.amount = amount;
   }

   // Method to format the transaction details
   format(): string {
       return `${this.toFrom} owes £${this.amount} for ${this.details} (${this.clients.toUpperCase()})`;
   }
}