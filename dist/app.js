"use strict";
1;
let age;
let Name;
let toggle;
let empty;
let notInitialize;
age = 50;
Name = "Max";
toggle = true;
empty = null;
notInitialize = undefined;
let callback = (a) => {
    return 100 + a;
};
2;
let anything;
anything = -20;
anything = "Text";
anything = {};
3;
let some;
some = "Text";
let str;
if (typeof some === "string") {
    str = some;
}
4;
let person;
person = ["Max", 21];
5;
var Result;
(function (Result) {
    Result[Result["LOADING"] = 0] = "LOADING";
    Result[Result["READY"] = 1] = "READY";
})(Result || (Result = {}));
const Data = {
    dataResult: Result.LOADING,
};
if (Data.dataResult === Result.LOADING) {
    console.log("Data is not loading yet");
}
6;
let somestr;
somestr = 1;
somestr = "yes";
7;
let somenumb;
somenumb = "disable";
8;
function showMessage(message) {
    console.log(message);
}
function calc(num1, num2) {
    return num1 + num2;
}
function customError() {
    throw new Error("Error");
}
9;
const page1 = {
    title: "The awesome page",
    likes: 100,
    accounts: ["Max", "Anton", "Nikita"],
    status: "open",
    details: {
        createAt: "2021-01-01",
        updateAt: "2021-05-01",
    },
};
const page2 = {
    title: "Python or Js",
    likes: 5,
    accounts: ["Alex"],
    status: "close",
};
//# sourceMappingURL=app.js.map