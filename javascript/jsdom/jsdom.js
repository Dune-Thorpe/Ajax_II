// declaring new variables
const date = new Date();
const hour = date.getHours();
// demostrating the if statement to get the current time
if (hour >= 22 || hour <= 5) {
    document.write("You should probably go to sleep NOW!")
} else {
    document.write("Hello You!");
}