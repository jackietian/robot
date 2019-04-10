const Robot = require('../Robot');
const {
    NORTH,
    SOUTH,
    EAST,
    WEST,
    REPORT,
    MOVE,
    PLACE,
    LEFT,
    RIGHT
} = require('../constants');

describe('test Robot', () => {
    it('test Robot initialization', () => {
        const robot = new Robot();
        expect(robot.x).toBe(0);
        expect(robot.y).toBe(0);
        expect(robot.f).toBe(NORTH);
    })

    it('test Robot place', () => {
        const robot = new Robot();
        robot.place(1,1,EAST);
        expect(robot.x).toBe(1);
        expect(robot.y).toBe(1);
        expect(robot.f).toBe(EAST);
    })

    it('test Robot place edge cases larger than length', () => {
        const robot = new Robot();
        robot.place(5,5,EAST);
        expect(robot.x).toBe(0);
        expect(robot.y).toBe(0);
        expect(robot.f).toBe(NORTH);
    })

    it('test Robot place edge cases lower than 0', () => {
        const robot = new Robot();
        robot.place(-1,-1,EAST);
        expect(robot.x).toBe(0);
        expect(robot.y).toBe(0);
        expect(robot.f).toBe(NORTH);
    })

    it('test Robot turn left', () => {
        const robot = new Robot();
        robot.left();
        expect(robot.f).toBe(WEST);
    })

    it('test Robot turn right', () => {
        const robot = new Robot();
        robot.right();
        expect(robot.f).toBe(EAST);
    })

    it('test Robot move', () => {
        const robot = new Robot();
        console.log(robot);
        robot.move();
        expect(robot.x).toBe(0);
        expect(robot.y).toBe(1);
        expect(robot.f).toBe(NORTH);
    })

    it('test Robot move beyong xLength', () => {
        const robot = new Robot();
        robot.place(4,4,EAST);
        robot.move();
        expect(robot.x).toBe(4);
        expect(robot.y).toBe(4);
        expect(robot.f).toBe(EAST);
    })

    it('test Robot move beyong yLength', () => {
        const robot = new Robot();
        robot.place(4,4,NORTH);
        robot.move();
        expect(robot.x).toBe(4);
        expect(robot.y).toBe(4);
        expect(robot.f).toBe(NORTH);
    })
})