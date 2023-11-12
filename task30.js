var usernames = ['Admin', 'Gauhar', 'Muntazir', 'Ali', 'Tahir'];
for (var i = 0; i < usernames.length; i++) {
    if (usernames[i] === 'Admin') {
        console.log("Hello Admin, would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(usernames[i], ", thank you for logging in again."));
    }
}
