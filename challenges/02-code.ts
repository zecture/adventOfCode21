import * as fs from 'fs';
const dir = { y: 0 , x: 0 } // First Challenge directions
const dir2 = {y: 0, x: 0, aim: 0 } // Second Challenge directions

let commands = {
    'forward': (n)=>{
        dir.x += n;
        dir2.x += n;
        dir2.y += (n * dir2.aim);
    },
    'down': (n)=>{
        dir.y += n;
        dir2.aim += n
    },
    'up': (n)=> {
        dir.y -= n,
        dir2.aim -= n
    }
};

fs.readFileSync('./data/02-data.txt','utf8').split('\n').map((line) => {
    const arr: string[] = line.split(' ') || null;
    let cmd = commands[arr[0]]
    cmd(parseInt(arr[1]))
})

console.log('First step: ',dir,'\nAnswer: ', dir.y * dir.x);
console.log('Second step: ',dir2,'\nAnswer: ', dir2.y*dir2.x);