var anotherusernames = [];
if (anotherusernames.length === 0) {
    console.log("We need to find some users!");
}
else {
    for (var _i = 0, anotherusernames_1 = anotherusernames; _i < anotherusernames_1.length; _i++) {
        var username = anotherusernames_1[_i];
        if (username === "admin") {
            console.log("Hello admin, would you like to see a status report?");
        }
        else {
            console.log("Hello ".concat(username, ", thank you for logging in again."));
        }
    }
}
