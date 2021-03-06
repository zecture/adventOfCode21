import * as fs from 'fs';
const data = fs.readFileSync('./data/01-data.txt','utf8').split('\n').map(string => {
    return parseInt(string);
})

function firstPart(data:number[]){
    let increases: number = 0;
    let int: number = 0;

    data.forEach((value:number,key:number) => {
        if (value > int){
            if (key != 0){
                increases++;
            }
        }
        int = value;
    })
    return (increases);
}

function secondPart(data:number[]){
    const totalNumber: number = data.length;
    let increases:number = 0;
    let int: number = 0;

    data.forEach((value, key) => {
        if (key+2 < totalNumber){
            let total = ( value + data[key+1] + data[key+2] );
            if (total > int && key != 0) {
                increases++;
            }
            int = total;
        }
    })
    return increases;
}

console.log('first test: ', firstPart(data));
console.log('second test: ',secondPart(data));