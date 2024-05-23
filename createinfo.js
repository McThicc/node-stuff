const fs = require('fs');
const prompt = require('prompt-sync')();

const create = prompt("Do you want to sign up or login? Enter 'sign up' or 'login'\n");
const formattedcreate = create.replace(/\s+/g, '').toLowerCase();

if (formattedcreate === 'signup') {

    const name = prompt('Enter your name: ');
    const userName = prompt('Choose a username: ');
    const passWord = prompt('Choose a password: ');

    const writeUser = fs.createWriteStream(`./users/user_${name}.txt`);
    writeUser.write(`${userName}\n`);
    writeUser.write(`${passWord}\n`);

} else if (formattedcreate === 'login') {

    const name = prompt('Enter your name: ');
    const userName = prompt('Choose a username: ');
    const passWord = prompt('Choose a password: ');

    const writeUser = fs.createWriteStream(`./tempUsers/tempUser_${name}.txt`);
    writeUser.write(`${userName}\n`);
    writeUser.write(`${passWord}\n`);

    fs.readFile(`./tempUsers/${name}.txt`, (err, data1) => {
        if (err) throw err;
        fs.readFile(`./users/${name}.txt`, (err, data2) => {
            if (err) throw err;
            if (data1.equals(data2)) {
                console.log('Logged in successfully')
            } else {
                console.log("Info didn't match");
            }
        })
    })

    fs.unlinkSync(`./tempUsers/tempUser_${name}.txt`);
}