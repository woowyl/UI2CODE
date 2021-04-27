export default function (baseCoords, coord) {
    let index = 0;
    baseCoords.forEach((item, idx) => {
        if ((coord.x > item.x) && ( coord.y > item.y)){
            index = idx + 1;
        }
    });
    return index;
}