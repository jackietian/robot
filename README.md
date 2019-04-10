# robot movements
NodeJS solution with object oriented design.
 - Robot is on a table 5 * 5
 - Robot has properties: 
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