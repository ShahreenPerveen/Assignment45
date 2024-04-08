// List of current usernames
var current_users = ['Mahnoor', 'Sheza', 'Abiha', 'sarah', 'Horia'];
// List of new usernames
var new_users = ['Pareeshay', 'Mahnoor', 'Areeba', 'Wania', 'sarah'];
// Function to check if a username is already taken
function checkUsername(username) {
    return current_users.some(function (user) { return user.toLowerCase() === username.toLowerCase(); });
}
// Loop through new_users list
new_users.forEach(function (username) {
    if (checkUsername(username)) {
        console.log("The username '".concat(username, "' is already taken. Please enter a new username."));
    }
    else {
        console.log("The username '".concat(username, "' is available."));
    }
});
