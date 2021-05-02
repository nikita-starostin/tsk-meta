export class NextIndex {
    constructor(private curr: number, private max: number) {
    }

    next(): number {
        const result = this.curr;
        this.curr++;
        if (this.curr >= this.max) {
            this.curr = 0;
        }

        return result;
    }
}
