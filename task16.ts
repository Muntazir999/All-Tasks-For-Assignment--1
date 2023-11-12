let DinnerGuest = ["Gauhar Zaman", "Irfan Younas", "Haider Ali"];
DinnerGuest.forEach((guest) => console.log(`Dear ${guest}, you are invited to dinner.`));
console.log(`${DinnerGuest[1]} can't make it.`);
DinnerGuest[1] = "Hussain";
DinnerGuest.forEach((guest) => console.log(`Dear ${guest}, you are still invited to dinner.`));

console.log("Good news! Found a bigger dinner table!");
DinnerGuest.unshift("Qurban Ali");
DinnerGuest.splice(2, 0, "Irfan Younas");
DinnerGuest.push("Ismail");
DinnerGuest.forEach((guest) => console.log(`Dear ${guest}, you are invited to dinner.`));