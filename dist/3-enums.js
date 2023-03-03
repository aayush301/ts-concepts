"use strict";
// enum
var direction1;
(function (direction1) {
    direction1[direction1["up"] = 0] = "up";
    direction1[direction1["down"] = 1] = "down";
    direction1[direction1["left"] = 10] = "left";
    direction1[direction1["right"] = 11] = "right";
})(direction1 || (direction1 = {}));
// {0,1,10,11}
var direction2;
(function (direction2) {
    direction2["Up"] = "up";
    direction2["down"] = "down";
    direction2["left"] = "left";
    direction2["right"] = "right";
})(direction2 || (direction2 = {}));
// {"up", "down", "left", "right"}
const dir = direction2.down;
