var currentusers = ['Ali', 'Asif', 'Ahmed', 'Hassan', 'Mohammed'];
var newusers = ['Salman', 'Hussain', 'Ahmed', 'Ali', 'Bilal'];
for (var i = 0; i < newusers.length; i++) {
    if (currentusers.map(function (user) { return user.toLowerCase(); }).includes(newusers[i].toLowerCase())) {
        console.log("Sorry, the username '".concat(newusers[i], "' is not available. Please enter a new username."));
    }
    else {
        console.log("Congratulations! The username '".concat(newusers[i], "' is available."));
    }
}
;
