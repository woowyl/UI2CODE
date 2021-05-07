
function isObject(obj) {
    if (Object.prototype.toString.call(obj) == "[object Object]") {
        return true;
    } else {
        return false;
    }
}

function deepcopy(target) {
    let result;
    if (isObject(target)) {
        result = {}
        for (let item in target) {
            if (isObject(target[item]) || Array.isArray(target[item])) {
                let dresult = deepcopy(target[item]);
                result[item] = dresult;
            } else {
                result[item] = target[item]
            }
        }
    } else if (Array.isArray(target)) {
        result = [];
        for (let item of target) {
            if (isObject(item) || Array.isArray(item)) {
                let dresult = deepcopy(item);
                result.push(dresult);
            } else {
                result.push(item);
            }
        }
    } else {
        result = target;
    }
    return result;
}

export default deepcopy;

/**
 * 
 * let copy = {'a': {'a1': 11, 'a2': 22}, 'b': [{'b1': 'b111', 'b2': 'b222'},23,[1,2,4]], 'c': 'hello world'}
 */