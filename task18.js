var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var placesToVisit = ["Paris", "Tokyo", "New York", "Sydney", "Dubai"];
console.log(placesToVisit);
console.log("Sorted in alphabetical order:");
console.log(__spreadArray([], placesToVisit, true).sort());
console.log("Reversed alphabetical order:");
console.log(__spreadArray([], placesToVisit, true).sort().reverse());
