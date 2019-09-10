export default function Line(newGameMap, point1x, point1y, point2x, point2y, char){
    const deltaX = Math.abs(point2x - point1x);
    const deltaY = Math.abs(point2y - point1y);
    const signX = point1x < point2x ? 1 : -1;
    const signY = point1y < point2y ? 1 : -1;
    const nnewGameMap= [...newGameMap];
    let error = deltaX - deltaY;

    nnewGameMap[point2y-1][point2x-1] = char;

    while (point1x !== point2x || point1y !== point2y) {
      nnewGameMap[point1y-1][point1x-1] = char;

      const error2 = error * 2;

      if (error2 > -deltaY) {
        error -= deltaY;
        point1x += signX;
      }
      if (error2 < deltaX) {
        error += deltaX;
        point1y += signY;
      }
    }
return nnewGameMap;
}