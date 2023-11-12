var Dinnerguest = ["Gauhar Zaman", "Irfan Younas", "Haider Ali"];
Dinnerguest.forEach(function (guest) { return console.log("Dear ".concat(guest, ", you are invited to dinner.")); });
console.log("".concat(Dinnerguest[1], " can't make it."));
Dinnerguest[1] = "Hussain";
Dinnerguest.forEach(function (guest) { return console.log("Dear ".concat(guest, ", you are still invited to dinner.")); });
console.log("Good news! Found a bigger dinner table!");
Dinnerguest.unshift("Qurban Ali");
Dinnerguest.splice(2, 0, "Irfan Younas");
Dinnerguest.push("Ismail");
Dinnerguest.forEach(function (guest) { return console.log("Dear ".concat(guest, ", you are invited to dinner.")); });
console.log("Sorry, can invite only two people for dinner.");
while (Dinnerguest.length > 2) {
    var removedGuest = Dinnerguest.pop();
    console.log("Sorry, ".concat(removedGuest, ", we can't invite you to dinner."));
}
Dinnerguest.forEach(function (guest) { return console.log("Dear ".concat(guest, ", you are still invited to dinner.")); });
Dinnerguest = [];
console.log(Dinnerguest);
