import * as fs from 'fs';

const inputData  = fs.readFileSync('./data/01-data.txt','utf8');
const data = inputData.split('\n');


const numberArray: number[] = [];


function parseStringToNumber(string: string) {
    const number:number = parseInt(string);
    return number;
}

data.forEach((value,key, array) => {
    numberArray.push(parseStringToNumber(value)); 
})

function firstPart(data:number[]){
    
    const object = {
        increases: 0,
        int: 0
    };


    data.forEach((value:number,key:number) => {
        if (value > object.int){
            if (object.int != 0){
                object.increases++;
            }
        }
        object.int = value;
    })
    return (object);
}


function secondPart(data:number[]){
    let sumOfThree: number = 0;
    const totalNumber = data.length;
    let int = 0;
    const returnObject = {
        increases: 0,
    }

    data.forEach((value, key) => {
        if (key+2 < totalNumber){
            let total = (
                value +
                data[key+1] +
                data[key+2]
            );
            if (total > int && int != 0) {
                returnObject.increases++;
                console.log('Increased');
            }
            console.log(total);
            int = total;
        }
    })

    return returnObject;
}

console.log(secondPart(numberArray));
//console.log('first test: ', firstPart(numberArray));
//console.log('total input amount: ',data.length); 