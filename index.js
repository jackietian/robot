const Robot = require('./src/Robot');

const robot = new Robot();
robot.place(1,2,"EAST");
robot.move();
robot.move();
robot.left();
robot.move();
robot.report();
// PLACE 0,0,NORTH MOVE REPORT