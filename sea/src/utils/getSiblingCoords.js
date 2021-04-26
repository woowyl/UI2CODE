export default function(ele) {
    let coordsArray = [];
    let siblings = ele.children;
    for (let element of siblings) {
        let coord = {};
        let clientRect = element.getBoundingClientRect();
        coord.x = clientRect.x;
        coord.y = clientRect.y;

        coordsArray.push(coord);
    }
    return coordsArray;
}