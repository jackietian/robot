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
} = require('./constants');

class Robot {
    constructor(xLength = 5, yLength = 5, x = 0, y = 0, f = NORTH) {
        this.xLength = xLength;
        this.yLength = yLength;
        this.x = x;
        this.y = y;
        this.f = f;
    }

    /**
     * receive commands and execute each commond in sequence
     * @param String commondStr
     */
    execute(commondStr) {
        const commands = commondStr.split('\n');
        commands.forEach(command => {
            if (command.includes(PLACE)) {
                const {
                    x,
                    y,
                    f
                } = this.parsePlaceCommand(command);
                this.place(x, y, f);
            }
            if (command === MOVE) this.move();
            if (command === LEFT) this.left();
            if (command === RIGHT) this.right();
            if (command === REPORT) this.report();
        });
    }

    /**
     * parse place command
     * @param String placeCommand 
     * e.g. PLACE 0,0,NORTH
     */
    parsePlaceCommand(placeCommand) {
        const arr = placeCommand.split(' ');
        const params = arr[1].split(',');
        return {
            x: parseInt(params[0], 10),
            y: parseInt(params[1], 10),
            f: params[2]
        };
    }

    /**
     * place robot in the table
     */
    place(x, y, f) {
        // when placing invalid positions, do nothing
        if(x < 0 || x >= this.xLength) return;
        if(y < 0 || y >= this.yLength) return;

        this.x = x;
        this.y = y;
        this.f = f;
    }

    /**
     * turn left based on facing direction
     */
    left() {
        switch (this.f) {
            case NORTH:
                this.f = WEST;
                break;
            case SOUTH:
                this.f = EAST;
                break;
            case EAST:
                this.f = NORTH;
                break;
            case WEST:
            default:
                this.f = SOUTH;
        }
    }

    /**
     * turn facing direction to right
     */
    right() {
        switch (this.f) {
            case NORTH:
                this.f = EAST;
                break;
            case SOUTH:
                this.f = WEST;
                break;
            case EAST:
                this.f = SOUTH;
                break;
            case WEST:
            default:
                this.f = NORTH;
        }
    }

    /**
     * move position based on facing direction
     * and also prevent robot from falling to destruction
     */
    move() {
        switch (this.f) {
            case NORTH:
                if(this.y + 1 < this.yLength) this.y++;
                break;
            case SOUTH:
                if(this.y > 0) this.y--;
                break;
            case EAST:
                if(this.x + 1 < this.xLength) this.x++;
                break;
            case WEST:
            default:
                if(this.x > 0) this.x--;
        }
    }

    /**
     * print the output
     */
    report() {
        console.log(`output: ${this.x} ${this.y} ${this.f}`);
    }
}

module.exports = Robot;