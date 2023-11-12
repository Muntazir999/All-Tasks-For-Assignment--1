function carinfo(manufacturer: string, modelName: string, ...features: string[]): { manufacturer: string; modelName: string; features: string[] } {
    return {
        manufacturer,
        modelName,
        features,
    };
}

let car3 = carinfo("Toyota", "Camry", "Red", "Sunroof");
let car2 = carinfo("Honda", "Civic", "Blue", "Leather Seats", "Navigation");

console.log(car3);
console.log(car2);
