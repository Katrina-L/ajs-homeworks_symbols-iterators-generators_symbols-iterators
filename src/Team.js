export default class Team {
    constructor() {
      this.members = new Set();
    }
  
    add(character) {
        this.members.add(character);
    };
  
    [Symbol.iterator]() {
        let _index = 0;
        let { members } = this;
        let _arr = [...members];
        return {
            next() {
                if (_index < _arr.length) {
                    return {
                        done: false,
                        value: _arr[_index++]
                    }
                } else return {
                  done: true, 
                  value: undefined
                };
            }
            // ------------------------ Второй вариант ------------------------
            // next() {
            //     return {
            //         done: !(_index < _arr.length),
            //         value: _index < _arr.length ? _arr[_index++] : undefined
            //     }
            // }
        }
    }
};
