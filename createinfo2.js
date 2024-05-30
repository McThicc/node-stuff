const fs = require('fs');
const prompt = require('prompt-sync')();

console.log('---------------------------------------------------------------');
console.log('Hello, would you like to create an account or login?');
console.log("To create an account, type 'signup', to login, type 'login'");
console.log('---------------------------------------------------------------');
const intro = prompt();
const answer = intro.replace(/\s+/g, '').toLowerCase();

var users;
fs.readdir('./users', (err, files) => {
    if (err) {
        console.error('Error reading user directory');
    } else {
        users = files;
    }
});

if (answer === 'signup') {

    console.log('---------------------------------------------------------------');
    const name = prompt('Enter your name: ');
    console.log('---------------------------------------------------------------');
    const username = prompt('Choose a username: ');
    console.log('---------------------------------------------------------------');
    const password = prompt('Choose a password: ');
    console.log('---------------------------------------------------------------');
    const info = prompt('Enter some sort of information about you to remember: ');
    console.log('---------------------------------------------------------------');

    const writeUser = fs.createWriteStream(`./users/${username}.txt`);
    writeUser.write (`${username}\n${password}\n${name}\n${info}`);

} else if ('login') {

    const username = prompt('Enter your username: ');
    const password = prompt('Enter your password: ');

    fs.readFile(`./users/${username}.txt`, 'utf8', (err, data) => {
        
        if (err) {
            console.error('An error has occured, please try again');
            return;
        }
        const [storedUsername, storedPassword, storedName, storedInfo] = data.trim().split('\n');
        if (username === storedUsername && password === storedPassword) {
            console.log(`\n\n\nWelcome back, ${storedName}!`);
            console.log(`I have this info saved about you: \n${storedInfo}\n`);
        } else {
            console.log('Either your username or password was incorrect, please try again.\n');
        }
    });
} else {
    console.log("Sorry, please type 'signup' or 'login'");
}

