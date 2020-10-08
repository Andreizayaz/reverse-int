module.exports = function reverse(n) {
    let str;
    let arr;

    str = (n < 0) ? Math.abs(n).toString() : n.toString();

    arr = str.split('').reverse();

    str = (arr[0]===0)?arr.slice(1).join(''):arr.join('');

    return str;
}
