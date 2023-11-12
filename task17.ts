let Dinnerguest = ["Gauhar Zaman", "Irfan Younas", "Haider Ali"];
Dinnerguest.forEach((guest) => console.log(`Dear ${guest}, you are invited to dinner.`));
console.log(`${Dinnerguest[1]} can't make it.`);
Dinnerguest[1] = "Hussain";
Dinnerguest.forEach((guest) => console.log(`Dear ${guest}, you are still invited to dinner.`));

console.log("Good news! Found a bigger dinner table!");
Dinnerguest.unshift("Qurban Ali");
Dinnerguest.splice(2, 0, "Irfan Younas");
Dinnerguest.push("Ismail");
Dinnerguest.forEach((guest) => console.log(`Dear ${guest}, you are invited to dinner.`));
console.log("Sorry, can invite only two people for dinner.");
while (Dinnerguest.length > 2) {
    const removedGuest = Dinnerguest.pop();
    console.log(`Sorry, ${removedGuest}, we can't invite you to dinner.`);
}
Dinnerguest.forEach((guest) => console.log(`Dear ${guest}, you are still invited to dinner.`));
Dinnerguest = [];
console.log(Dinnerguest);
