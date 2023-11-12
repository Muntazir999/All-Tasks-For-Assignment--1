function showByMagicians(maggicians) {
    maggicians.forEach(function (magiciaan) {
        console.log(magiciaan);
    });
}
// Example usage
var magiciians = ["Merlin", "Houdini", "David Copperfield"];
showByMagicians(magiciians);
function makesGreat(maagicians) {
    return maagicians.map(function (magiccian) { return "The Great ".concat(magiccian); });
}
// Example usage
var greatMagiciansAre = makesGreat(magiciians);
showByMagicians(greatMagiciansAre);
