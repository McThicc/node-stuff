const fs = require('fs');

if (!fs.existsSync('./files/text.txt')) {
    const writeStream = fs.createWriteStream('./files/text.txt');

    for (let i = 0; i <= 2000; i++) {
        writeStream.write("For Loop Reset\n");
        writeStream.write(`${i}\n`);
    }
} else {
    const readStream = fs.createReadStream('./files/text.txt', {encoding: 'utf8'});

    readStream.on('data', (chunk) => {
        console.log("New Chunk Recieved");
        console.log(chunk);
    })    
}