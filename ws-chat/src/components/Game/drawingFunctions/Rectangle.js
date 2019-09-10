import Line from './Line';

export default function Rectangle(newGameMap, point1x, point1y, point2x, point2y, char){
    let nnewGameMap= [...newGameMap];

    nnewGameMap = Line(nnewGameMap, point1x, point1y, point2x, point1y, char);
    nnewGameMap = Line(nnewGameMap, point2x, point1y, point2x, point2y, char);
    nnewGameMap = Line(nnewGameMap, point2x, point2y, point1x, point2y, char);
    nnewGameMap = Line(nnewGameMap, point1x, point2y, point1x, point1y, char);

    return nnewGameMap;
}