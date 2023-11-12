
let countries = [
    { name: "Pakistan", capital: "Islamabad", population: 331002651, language: "Urdu" },
    { name: "Canada", capital: "Ottawa", population: 37742154, language: "English, French" },
    { name: "Australia", capital: "Canberra", population: 25499884, language: "English" },
    { name: "France", capital: "Paris", population: 65273511, language: "French" },
    { name: "Japan", capital: "Tokyo", population: 126476461, language: "Japanese" },
    { name: "Brazil", capital: "Brasília", population: 212559417, language: "Portuguese" },
    { name: "India", capital: "New Delhi", population: 1380004385, language: "Hindi, English" },
];


console.log("Information about countries:");

countries.forEach((country, index) => {
    console.log(`${index + 1}. ${country.name}`);
    console.log(`   Capital: ${country.capital}`);
    console.log(`   Population: ${country.population}`);
    console.log(`   Language: ${country.language}`);
    console.log("\n");
});
