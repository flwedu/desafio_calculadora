export class MathOperation {

    public a;
    public b;
    public signal;
    constructor(data?: { a?: string, signal?: string, b?: string }) {
        this.a = data?.a;
        this.signal = data?.signal;
        this.b = data?.b;
    };

    clear() {
        this.a = null;
        this.b = null;
        this.signal = null;
    }
}