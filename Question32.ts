// List of current usernames
const current_users: string[] = ['Mahnoor', 'Sheza', 'Abiha', 'sarah', 'Horia'];

// List of new usernames
const new_users: string[] = ['Pareeshay', 'Mahnoor', 'Areeba', 'Wania', 'sarah'];

// Function to check if a username is already taken
function checkUsername(username: string): boolean {
    return current_users.some(user => user.toLowerCase() === username.toLowerCase());
}

// Loop through new_users list
new_users.forEach(username => {
    if (checkUsername(username)) {
        console.log(`The username '${username}' is already taken. Please enter a new username.`);
    } else {
        console.log(`The username '${username}' is available.`);
    }
});