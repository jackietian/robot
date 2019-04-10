const fs = require('fs');
const path = require('path');
const Robot = require('./src/Robot');

// read all files in test data directory
const testDataDir = path.join(__dirname, 'src/data/');
fs.readdir(testDataDir, 'utf8', (err, content) => {
    const filesInBasePath = content;
    // loop through every test data file
    filesInBasePath.forEach(file => {
        fs.readFile(path.join(testDataDir, file), 'utf8', function (err, content) {
            if(err) throw new Error(err);
            // execute each commond
            console.log('-------------------');
            console.log(`input:\n${content}`);
            const robot = new Robot();
            robot.execute(content);
        });
    });
});
