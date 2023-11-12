let DinnerGuestForToday = ["Qrban Ali", "Irfan Younas", "Haider Ali"];
DinnerGuestForToday.forEach((guest) => console.log(`Dear ${guest}, you are invited to dinner.`));
console.log(`${DinnerGuestForToday[1]} can't make it.`);
DinnerGuestForToday[1] = "Hussain";
DinnerGuestForToday.forEach((guest) => console.log(`Dear ${guest}, you are still invited to dinner.`));

console.log("Good news! Found a bigger dinner table!");
DinnerGuestForToday.unshift("Gauhar Zaman");
DinnerGuestForToday.splice(2, 0, "Irfan Younas");
DinnerGuestForToday.push("Ismail");
DinnerGuestForToday.forEach((guest) => console.log(`Dear ${guest}, you are invited to dinner.`));
console.log("Sorry, can invite only two people for dinner.");
while (DinnerGuestForToday.length > 1) {
    const removedGuest = DinnerGuestForToday.pop();
    console.log(`Sorry, ${removedGuest}, we can't invite you to dinner.`);
}
DinnerGuestForToday.forEach((guest) => console.log(`Dear ${guest}, you are still invited to dinner.`));
DinnerGuestForToday = ['1'];
console.log(DinnerGuestForToday);
console.log(`Number of people invited to dinner: ${DinnerGuestForToday.length}`);
