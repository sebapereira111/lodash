// Object which will represent our library containing all the functionality we add to it.
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

        Math.floor((length - string.length) / 2);
        
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
    }
}




// Do not write or modify code below this line.
module.exports = _;