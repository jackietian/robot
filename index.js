const fs = require('fs');
const path = require('path');
const Robot = require('./src/Robot');

/**
 * Read test data in src/data folder and then execute callback
 * @param function cb
 */
const readTestData = (cb) => {
    try {
        // read all files in test data directory
        const testDataDir = path.join(__dirname, 'src/data/');
        fs.readdir(testDataDir, 'utf8', (err, content) => {
            const filesInBasePath = content;
            // loop through every test data file
            filesInBasePath.forEach(file => {
                fs.readFile(path.join(testDataDir, file), 'utf8', function (err, content) {
                    if (err) throw err;
                    cb(content);
                });
            });
        });
    } catch (error) {
        console.error(error);
    }
}

/**
 * execute the command
 * @param String command 
 */
const callRobot = (command) => {
    console.log('-------------------');
    console.log(`${command}`);
    const robot = new Robot();
    robot.execute(command);
}

readTestData(callRobot);