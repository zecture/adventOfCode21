"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const inputData = fs.readFileSync('./data/01-data.txt', 'utf8');
const data = inputData.split('\n');
const numberArray = [];
function parseStringToNumber(string) {
    const number = parseInt(string);
    return number;
}
data.forEach((value, key, array) => {
    numberArray.push(parseStringToNumber(value));
});
function firstPart(data) {
    const object = {
        increases: 0,
        int: 0
    };
    data.forEach((value, key) => {
        if (value > object.int) {
            if (object.int != 0) {
                object.increases++;
            }
        }
        object.int = value;
    });
    return (object);
}
function secondPart(data) {
    let sumOfThree = 0;
    const totalNumber = data.length;
    let int = 0;
    const returnObject = {
        increases: 0,
    };
    data.forEach((value, key) => {
        if (key + 2 < totalNumber) {
            let total = (value +
                data[key + 1] +
                data[key + 2]);
            if (total > int && int != 0) {
                returnObject.increases++;
                console.log('Increased');
            }
            console.log(total);
            int = total;
        }
    });
    return returnObject;
}
console.log(secondPart(numberArray));
//console.log('first test: ', firstPart(numberArray));
//console.log('total input amount: ',data.length); 
