import * as fs from 'fs';

/*  x == forward,
    y == down/up */
const dir = { y: 0 , x: 0}
const dir2 = {y: 0, x: 0, aim: 0 }

function forward(number) {
    dir2.x += number;
    dir2.y += (number * dir2.aim);
}

function firstStep(heading, weight){
    (heading === 'forward') 
        ? dir.x += weight
        : (heading === 'down')
            ? dir.y += weight
            : (heading === 'up')
                ? dir.y -= weight
                : console.log('Error! ', heading, weight)
}

function secondStep(heading, weight){
    (heading === 'forward') 
    ? forward(weight)
    : (heading === 'down')
        ? dir2.aim += weight
        : (heading === 'up')
            ? dir2.aim -= weight
            : console.log('Error! ', heading, weight)
}

fs.readFileSync('./data/02-data.txt','utf8').split('\n').map((line) => {
    const arr: string[] = line.split(' ') || null;
    const weight = parseInt(arr[1]) || null;
    const heading = arr[0] || null;

    if (heading && weight){
        firstStep(heading, weight);
        secondStep(heading, weight)
    }
})

console.log('First step: ',dir,'\nAnswer: ', dir.y * dir.x);
console.log('Second step: ',dir2,'\nAnswer: ', dir2.y*dir2.x);