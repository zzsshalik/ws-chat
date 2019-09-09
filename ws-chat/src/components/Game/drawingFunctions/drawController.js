import Line from './Line';
import Rectangle from './Rectangle';
import BucketFill from './BucketFill';

export default function drawController(commands, setGameMap , gameMap){
    commands.forEach((command, index) => {
        const point1x = command[1];
        const point1y = command[2];
        const point2x = command[3];
        const point2y = command[4];
console.log(command)
        if(command[0] === 'C'){   
            console.log(command[1],command[2]); 
            // setNumColumns(+command[1]);
            // setNumRows(+command[2]);
        }
        if(command[0] === 'L'){    
            const char = 'X';
            Line(gameMap, setGameMap, point1x, point1y, point2x, point2y, char);
        }
        if(command[0] === 'R'){     
            const char = 'X';  
            Rectangle(gameMap, setGameMap, point1x, point1y, point2x, point2y, char);
        }
        if(command[0] === 'B'){   
            const char = 'O';    
            BucketFill(gameMap,  setGameMap, point1x, point1y, char);
        }
    });

}