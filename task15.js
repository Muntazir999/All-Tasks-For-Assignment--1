var DinnerGuests = ["Gauhar Zaman", "Irfan Younas", "Haider Ali"];
DinnerGuests.forEach(function (guest) { return console.log("Dear ".concat(guest, ", you are invited to dinner.")); });
console.log("".concat(DinnerGuests[1], " can't make it."));
DinnerGuests[1] = "Hussain";
DinnerGuests.forEach(function (guest) { return console.log("Dear ".concat(guest, ", you are still invited to dinner.")); });
