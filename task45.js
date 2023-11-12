function carinfo(manufacturer, modelName) {
    var features = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        features[_i - 2] = arguments[_i];
    }
    return {
        manufacturer: manufacturer,
        modelName: modelName,
        features: features,
    };
}
var car3 = carinfo("Toyota", "Camry", "Red", "Sunroof");
var car2 = carinfo("Honda", "Civic", "Blue", "Leather Seats", "Navigation");
console.log(car3);
console.log(car2);
