const fs = require('fs');
const prompt = require('prompt-sync')();

const create = prompt("Do you want to sign up or login? Enter 'sign up' or 'login': ");
const formattedCreate = create.replace(/\s+/g, '').toLowerCase();

if (formattedCreate === 'signup') {
    const name = prompt('Enter your name: ');
    const userName = prompt('Choose a username: ');
    const passWord = prompt('Choose a password: ');

    const writeUser = fs.createWriteStream(`./users/user_${name}.txt`);
    writeUser.write(`${userName}\n`);
    writeUser.write(`${passWord}\n`);

} else if (formattedCreate === 'login') {
    const name = prompt('Enter your name: ');
    const userName = prompt('Enter your username: ');
    const passWord = prompt('Enter your password: ');

    fs.readFile(`./users/user_${name}.txt`, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err.message);
            return;
        }
        const [storedUserName, storedPassWord] = data.trim().split('\n');
        if (userName === storedUserName && passWord === storedPassWord) {
            console.log('Logged in successfully');
        } else {
            console.log("Info didn't match");
        }
    });
} else {
    console.log("Invalid choice. Please enter 'signup' or 'login'.");
}