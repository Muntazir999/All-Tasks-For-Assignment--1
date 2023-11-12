function makeSandwich() {
    var ingredients = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        ingredients[_i] = arguments[_i];
    }
    console.log("Sandwich order:");
    ingredients.forEach(function (ingredient) {
        console.log("- ".concat(ingredient));
    });
    console.log();
}
makeSandwich("Bread", "Cheese", "Tomato");
makeSandwich("Turkey", "Lettuce", "Mayo", "Bread", "Pickles");
