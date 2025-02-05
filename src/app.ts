import{Transaction} from './Transaction.js'

const Trans1 = new Transaction('jai', 'wer', 'nft', 200);
const Trans2 = new Transaction('ram', 'asd', 'upi', 870);

let transaction: Transaction[] =[];
transaction.push (Trans1);
transaction.push (Trans2);

Trans1.clients = 'swiss';
Trans1.amount =  80000;

console.log(Trans1,Trans2);

// Selecting elements from the DOM
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".new-item-form") as HTMLFormElement;
    const type = document.getElementById("type") as HTMLSelectElement;
    const toFrom = document.getElementById("tofrom") as HTMLInputElement;
    const details = document.getElementById("details") as HTMLInputElement;
    const amount = document.getElementById("amount") as HTMLInputElement;
    const itemList = document.querySelector(".item-list") as HTMLUListElement;

    if (!form || !type || !toFrom || !details || !amount || !itemList) {
        console.error("One or more elements not found!");
        return;
    }

    // Handle form submission
    form.addEventListener("submit", (event: Event) => {
        event.preventDefault(); // Prevent page reload

        // Create a new transaction instance
        const transaction = new Transaction(
            type.value,
            toFrom.value,
            details.value,
            parseFloat(amount.value)
        );

        // Create a new list item with formatted details
        const li = document.createElement("li");
        li.innerHTML = `<strong>${transaction.format()}</strong>`;
        itemList.appendChild(li);

        // Clear input fields
        toFrom.value = "";
        details.value = "";
        amount.value = "";
    });

    console.log("DOM fully loaded and script running!");
});
