"use strict";
class Services {
    constructor(service, company, cost) {
        this.service = service;
        this.company = company;
        this.cost = cost;
    }
    displayInfo() {
        console.log(`Service: ${this.service}, Company: ${this.company}, Cost: ${this.cost}`);
    }
}
let service = [];
service.push(new Services("ec", "aws", 45000));
service.push(new Services("amplify", "aws", 34000));
service.push(new Services("iam", "aws", 5600));
service.forEach(service => service.displayInfo());
