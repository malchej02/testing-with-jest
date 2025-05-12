const _ = require('underscore');

let stack = [];

// Lägger ett element överst i stacken
exports.push = function (x) {
    stack.push(x);
};

// Returnerar det översta elementet i stacken och tar bort det
exports.pop = function () {
    return stack.pop();
}

// Returnerar det översta elementet i stacken
exports.peek = function () {
    return _.last(stack);
}

exports.pop = function () {
    return _.last(stack); // Ett medvetet FEL, det tar inte bort elementet
}