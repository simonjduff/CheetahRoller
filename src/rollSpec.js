class RollSpecParser {
    constructor(spec){
        var specRegex = new RegExp('(\\d*)d(\\d+)', 'gi');

        var match = specRegex.exec(spec);
        this._specs = [];

        while (match != null){
            this._specs.push(new RollSpec(match[1], match[2]));
            match = specRegex.exec(spec);
        }
    }

    get specs() {return this._specs;}

    get isValid() {return this.specs.length > 0;}
}

export default RollSpecParser;

class RollSpec{
    constructor(count, size){
        this._count = count || 1;
        this._size = size;
    }

    get count() {return this._count;}

    get size() {return this._size;}
}