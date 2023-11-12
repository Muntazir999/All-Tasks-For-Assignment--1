function makeSandwich(...ingredients: string[]): void {
    console.log("Sandwich order:");
    ingredients.forEach(ingredient => {
      console.log(`- ${ingredient}`);
    });
    console.log();
  }
  
  makeSandwich("Bread", "Cheese", "Tomato");
  makeSandwich("Turkey", "Lettuce", "Mayo", "Bread", "Pickles");
  