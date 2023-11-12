
let currentusers = ['Ali', 'Asif', 'Ahmed', 'Hassan', 'Mohammed'];

let newusers = ['Salman', 'Hussain', 'Ahmed', 'Ali', 'Bilal'];

for (let i = 0; i < newusers.length; i++) {
   
    if (currentusers.map(user => user.toLowerCase()).includes(newusers[i].toLowerCase())) {
        console.log(`Sorry, the username '${newusers[i]}' is not available. Please enter a new username.`);
    } else {
        console.log(`Congratulations! The username '${newusers[i]}' is available.`);
    }
};
