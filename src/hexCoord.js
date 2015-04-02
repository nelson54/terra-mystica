function hexCoord(q,r) {
    this.q = q;
    this.r = r;

    this.getDirectionalCoord = function(dir) {
        if(dir == 0) {
            return {q: this.q + 1, r: this.r};
        } else if (dir ==1) {
            return {q: this.q + 1, r: this.r + 1};
        } else if (dir ==2) {
            return {q: this.q, r: this.r + 1};
        } else if (dir == 3) {
            return {q: this.q - 1, r: this.r};
        } else if (dir == 4) {
            return {q: this.q, r: this.r - 1};
        } else {
            return {q: this.q + 1, r: this.r - 1};
        }
    };
    this.getAdjacentCoord = function() {
        return [this.getDirectionalCoord(0), this.getDirectionalCoord(1), this.getDirectionalCoord(2), this.getDirectionalCoord(3), this.getDirectionalCoord(4), this.getDirectionalCoord(5)];
    };
}