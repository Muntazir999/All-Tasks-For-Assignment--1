let DinnerGuests = ["Gauhar Zaman", "Irfan Younas", "Haider Ali"];
DinnerGuests.forEach((guest) => console.log(`Dear ${guest}, you are invited to dinner.`));
console.log(`${DinnerGuests[1]} can't make it.`);
DinnerGuests[1] = "Hussain";
DinnerGuests.forEach((guest) => console.log(`Dear ${guest}, you are still invited to dinner.`));
