alien_color = 'green';
if (alien_color === 'green') {
    console.log("The player just earned 5 points for shooting the alien.");
}
else {
    console.log("The player just earned 10 points.");
}
//Version running the else block (alien color is not green):
alien_color = 'red'; // or 'yellow'
if (alien_color === 'green') {
    console.log("The player just earned 5 points for shooting the alien.");
}
else {
    console.log("The player just earned 10 points.");
}
