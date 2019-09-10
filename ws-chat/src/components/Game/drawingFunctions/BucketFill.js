export default function BucketFill(newGameMap, point1x, point1y, char){
    const nnewGameMap= [...newGameMap];

    const normalizedStartX = point1x-1;
    const normalizedStartY = point1y-1;

    const pickedChar = nnewGameMap[normalizedStartY][normalizedStartX];
    const canvasHeigth = nnewGameMap.length;
    const canvasWidth = nnewGameMap[0].length;


    const paintingStack = [{ x:normalizedStartX, y:normalizedStartY }];


    function updatePaintStack(xx, yy) {
        const leftX = xx - 1;
        const rigthX = xx + 1;
        const bottomY = yy + 1;
        const topY = yy - 1;

        if (leftX >= 0 && nnewGameMap[yy][leftX]  === pickedChar) {
          paintingStack.push({ x: leftX, y: yy });
        }
        if (topY >= 0 && nnewGameMap[topY][xx]  === pickedChar) {
          paintingStack.push({ x: xx, y: topY });
        }
        if ( rigthX < canvasWidth && nnewGameMap[yy][rigthX]  === pickedChar) {
          paintingStack.push({ x: rigthX, y: yy });
        }
        if ( bottomY < canvasHeigth &&  nnewGameMap[bottomY][xx]  === pickedChar) {
          paintingStack.push({ x: xx, y: bottomY });
        }
      }

    while (paintingStack.length !== 0) {
        const pixel = paintingStack.pop();
        nnewGameMap[pixel.y][pixel.x] = char;
        updatePaintStack(pixel.x,pixel.y);
      }


    return nnewGameMap;
}