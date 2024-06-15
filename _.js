// Object which will represent our library containing all the functionality we add to it.
// my alternative solutions are commented with the comment characters on the first column
const _ = {
    // receives a number and two limits, returns the closest value to number between those limits
    clamp(number, lower, upper) {
        // temporal variable for the lower clamped value and final clamped value
        let lowerClampedValue;
        let ClampedValue;
        // clamp the lower limit
        lowerClampedValue = Math.max(number, lower);
        // clamp the upper limit
        ClampedValue = Math.min(lowerClampedValue, upper);
        return ClampedValue;
        // alternatively can be only the following line (all other lines inside the method must be commented)
//        return Math.min(Math.max(number, lower), upper);
    },
    inRange(number, start, end) {
        if (end === undefined) {
            end = start;
            start = 0;
        }
        if (start > end) {
            const temp = end;
            end = start;
            start = temp;
        }
        const isInRange = start <= number && number < end;
        return isInRange;
        // my alternative solution (all other lines on the method must be commented)
        // first we check if end was passed, if not end is assigned to 0 (next step orders it)
//        if (end === undefined) end = 0;
        // then we order both values
//        if (end < start) [start, end] = [end, start];
        // if start is more than start and less than end we return true, otherwise it is false
//        if (start <= number && number < end) return true;
//        return false;
    },
    words(string) {
        const words = string.split(' ');
        return words;
        // alternative one line solution (all other lines on the method must be commented)
//        return string.split(' ');
    },
    pad(string, length) {
        // if string length is above target length the original string is returned
        if (string.length > length) return string;
        const startPaddingLength = Math.floor((length - string.length) / 2);
        const endPaddingLength = length - string.length - startPaddingLength;
        const paddedString = ' '.repeat(startPaddingLength) + string + ' '.repeat(endPaddingLength);
        return paddedString;
        // alternative solution below (all other lines on the method must be commented)
        // we execute a while loop as long as desired length is above string length
//        while (length > string.length) {
            // first we add a space at the end
//            string = string + ' ';
            // then check if they are both equal length, if true we exit the while loop
//            if (string.length === length) break;
            // lastly we add a space at the start
//            string = ' ' + string;
//        }
//        return string;
    },
    has(object, key) {
        const hasValue = (object[key] != undefined);
        return hasValue;
        // alternative solution below (all other lines on the method must be commented)
        // if the key at object is undefinded false is returned
//        if (object[key] === undefined) return false;
        // true is returned by default
//        return true;
    },
    invert(object) {
        const invertedObject = {};
        for (const key in object) {
            const originalValue = object[key];
            invertedObject[originalValue] = key;
        }
        return invertedObject;
        // alternative solution below (all other lines on the method must be commented)
        // temporal variable to store the inverted object
//        const invertedObject = {};
        // for ... in loop to cycle trough the object
//        for (const element in object) {
            // new object key - value stored
//            invertedObject[object[element]] = element;
//        }
//        return invertedObject;
    },
    findKey(object, predicate) {
//        for (const key in object) {
//            const value = object[key];
//            const predicateReturnValue = predicate(value);
//            if (predicateReturnValue) return key;
//        }
//        return undefined;
        // for ... in cycle trough every key
        for (const key in object) {
            // the predicate function 
            if (predicate(object[key])) return key;
        }
        return undefined;
    },
    drop(array, number) {
        if (number === undefined) number = 1;
        const droppedArray = array.slice(number);
        return droppedArray;
        // alternative solution below (all other lines on the method must be commented)
        // number is set to 1 as default (if it is not set on the method call)
//        if (number === undefined) number = 1;
        // the new array is returned with filtered elements
//        return array.filter(element => {
//            if (number <= 0) return true
//            number--;
//            return false;
//        });
    },
    dropWhile(array, predicate) {
        const dropNumber = array.findIndex((element, index) => {return !predicate(element, index, array)});
        const droppedArray = this.drop(array, dropNumber);
        return droppedArray;
        // alternative solution below (all other lines on the method must be commented)
        // auxiliary index value
//        let i = 0;
        // cycle through the array until the predicate returns false
//        while (predicate(array[i], i, array)) {
            // the index is incremented on every cycle
//            i++;
//        }
        // an array is returned with the first "i" elements sliced
//        return array.slice(i);
    },
    chunk(array, size) {
        if (size === undefined) size = 1;
        const arrayChunks = [];
        for (let i = 0 ; i < array.length ; i+=size) {
            const arrayChunk = array.slice(i, i + size);
            arrayChunks.push(arrayChunk);
        }
        return arrayChunks;
        // alternative solution below (all other lines on the method must be commented)
        // we check if size is undefined, if it is 1 is asigned
//        if (size === undefined) size = 1;
        // array where the result will be stored
//        const chunkedArray = [];
        // while loop to cycle as long as there are still values on the received array
//        while (array.length > 0) {
            // variable where the small chunk is stored
//            const chunk = [];
            // for loop which stores received size values from received array to chunk one by one 
//            for (let i = 0 ; i < size ; i++) {
//                chunk[i] = array.shift();
                // if all the values from received array are used we can exit the loop
//                if (array.length === 0) break;
//            }
            // chunk mini array is pushed to array where the result is stored
//            chunkedArray.push(chunk);
//        }
//        return chunkedArray;
    }
}




// Do not write or modify code below this line.
module.exports = _;