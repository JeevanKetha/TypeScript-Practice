type StringArray = string[];

const fruits: StringArray = ["Apple", "Banana", "Mango"];
console.log(fruits);

type User = {
    id: number | string;
    name: string;
    email: string;
    isActive: boolean;
    age?: number; 
};

type Admin = User & { role: "admin" | "superadmin" };

const adminUser: Admin = { 
    id: 100, 
    name: "Admin", 
    email: "admin@example.com", 
    isActive: true, 
    role: "superadmin" 
};

console.log(adminUser);

