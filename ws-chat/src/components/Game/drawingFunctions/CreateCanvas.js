export default function CreateCanvas(width, heigth){
    const newGameMap = new Array(width).fill(null).map(() => new Array(heigth).fill(null));
return newGameMap;
}