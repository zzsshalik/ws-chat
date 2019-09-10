import Line from './Line';
import Rectangle from './Rectangle';
import BucketFill from './BucketFill';

export default async function drawController(commands){
    let newGameMap;

    commands.forEach((command) => {
        const point1x = +command[1];
        const point1y = +command[2];
        const point2x = +command[3];
        const point2y = +command[4];
        if(command[0] === 'C'){   
            newGameMap = new Array(+command[2]).fill(null).map(() => new Array(+command[1]).fill(null));
        }
        if(command[0] === 'L'){    
            const char = 'X';
            newGameMap = Line( newGameMap, point1x, point1y, point2x, point2y, char );
        }
        if(command[0] === 'R'){     
            const char = 'X';  
            newGameMap = Rectangle( newGameMap, point1x, point1y, point2x, point2y, char );
        }
        if(command[0] === 'B'){   
            const char = 'O';    
            BucketFill(newGameMap, point1x, point1y, char);
        }
    });

return newGameMap;
}


// import Line from './Line';
// import Rectangle from './Rectangle';
// import BucketFill from './BucketFill';
// import CreateCanvas from './CreateCanvas';

// export default async function drawController(commands){
//     let newGameMap;

//     let i = 0;
//     const numCommans = commands.length;

//     return (function draw(transferredNewMap){

//         if (i === numCommans) return 2;
//         const point1x = +commands[i][1];
//         const point1y = +commands[i][2];
//         const point2x = +commands[i][3];
//         const point2y = +commands[i][4];

//         if(commands[i][0] === 'C'){   
//             CreateCanvas(+commands[i][2],+commands[i][1]).then((newMap) => {
//                 draw(newMap);
//                 i+=1;
//                 console.log(newMap);
//             });
//         }
//         if(commands[i][0] === 'L'){    
//             const char = 'X'
//             Line( transferredNewMap, point1x, point1y, point2x, point2y, char).then((newMap) => {
//                 draw(newMap);
//                 i+=1;
//             });
//         }
//     })()

//     // commands.forEach((command) => {
//     //     const point1x = +command[1];
//     //     const point1y = +command[2];
//     //     const point2x = +command[3];
//     //     const point2y = +command[4];
//     //     if(command[0] === 'C'){   
//     //         newGameMap = new Array(+command[2]).fill(null).map(() => new Array(+command[1]).fill(null));
//     //     }
//     //     if(command[0] === 'L'){    
//     //         const char = 'X';
//     //         newGameMap = Line( newGameMap, point1x, point1y, point2x, point2y, char);
//     //     }
//     //     if(command[0] === 'R'){     
//     //         const char = 'X';  
//     //         Rectangle( point1x, point1y, point2x, point2y, char);
//     //     }
//     //     if(command[0] === 'B'){   
//     //         const char = 'O';    
//     //         BucketFill( point1x, point1y, char);
//     //     }
//     // });
// }