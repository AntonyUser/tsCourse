// const button = document.querySelector("button");
// const input1 = document.getElementById("num1")! as HTMLInputElement;
// const input2 = document.getElementById("num2")! as HTMLInputElement;

// function add(num1: number, num2: number) {
//   return num1 + num2;
// }

// button.addEventListener("click", function () {
//   console.log(add(+input1.value, +input2.value));
// });
1;
let age: number;
let Name: string;
let toggle: boolean;
let empty: null;
let notInitialize: undefined;
let callback = (a: number) => number;

age = 50;
Name = "Max";
toggle = true;
empty = null;
notInitialize = undefined;
callback = (a) => {
  return 100 + a;
};
2;
let anything: any;
anything = -20;
anything = "Text";
anything = {};
3;
let some: unknown;
some = "Text";

let str: string;

if (typeof some === "string") {
  str = some;
}
4;
let person: [string, number];

person = ["Max", 21];

5;
enum Result {
  LOADING,
  READY,
}

const Data = {
  dataResult: Result.LOADING,
};

if (Data.dataResult === Result.LOADING) {
  console.log("Data is not loading yet");
}

6;
let somestr: string | number;
somestr = 1;
somestr = "yes";

7;
let somenumb: "enable" | "disable";

somenumb = "disable";

8;

function showMessage(message: string): void {
  console.log(message);
}

function calc(num1: number, num2: number): number {
  return num1 + num2;
}

function customError(): never {
  throw new Error("Error");
}
9;

type PageData = {
  title: string;
  likes: number;
  accounts: string[];
  status: "open" | "close";
  details?: {
    createAt: string;
    updateAt: string;
  };
};

const page1: PageData = {
  title: "The awesome page",
  likes: 100,
  accounts: ["Max", "Anton", "Nikita"],
  status: "open",
  details: {
    createAt: "2021-01-01",
    updateAt: "2021-05-01",
  },
};

const page2: PageData = {
  title: "Python or Js",
  likes: 5,
  accounts: ["Alex"],
  status: "close",
};
