# robot
NodeJS solution with object oriented design.
 - Robot has properties:
    - sizeX: table size of x, default is 5
    - sizeY: table size of y, default is 5 
    - x: position on x axis
    - y: position on y axis
    - f: facing direction
 - Robot can
    - RIGHT: turn right based on current facing direction
    - LEFT: turn left based on current facing direction
    - MOVE: move position based on current facing direction
    - REPORT: print out its current status
 - Test data is stored on src/data folder. index.js will read all files inside the folder and execute them

## start
``` npm install && npm start ```

## test
``` npm test ```