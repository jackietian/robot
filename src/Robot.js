const { NORTH, SOUTH, EAST, WEST } = require('./direction');

class Robot {
    constructor(x = 0, y = 0, f = NORTH) {
        this.x = x;
        this.y = y;
        this.f = f;
    }

    place(x, y, f) {
        this.x = x;
        this.y = y;
        this.f = f;
    }

    left() {
        switch(this.f) {
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

    right() {
        switch(this.f) {
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

    move() {
        switch(this.f) {
            case NORTH:
                this.y++;
                break;
            case SOUTH:
                this.y--;
                break;
            case EAST:
                this.x++;
                break;
            case WEST:
            default:
                this.x--;
        }
    }

    report() {
        console.log(`${this.x} ${this.y} ${this.f}`);
    }
}

module.exports = Robot;