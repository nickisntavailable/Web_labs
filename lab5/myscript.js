let getRandom = (max) => { return Math.floor(Math.random() * max); }

let getMax = (arr) => {
    let max = arr[0];
    for(i=0; i<arr.length; i++) {
        if (max < arr[i]) max = arr[i];
    }
    return max;
}
let getMin = (arr) => {
    let min = arr[0];
    for(i=0; i<arr.length; i++) {
        if (min > arr[i])  min = arr[i];
    }
    return min;
}

let swap = (items, left, right) => {
    var temp = items[left];
    items[left] = items[right];
    items[right] = temp;
}

let partition = (items, left, right) => {
    var pivot   = items[Math.floor((right + left) / 2)],
        i       = left,
        j       = right;
    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(items, i, j);
            i++;
            j--;
        }
    }
    return i;
}
let quickSort = (items, left, right) => {
    var index;
    if (items.length < 2) {
        return items;
    }

    index = partition(items, left, right);
    if (left < index - 1) {
        quickSort(items, left, index - 1);
    }
    if (index < right) {
        quickSort(items, index, right);
    }
    return items;
}





console.log('Lab5 started');

let arr = [];
for(i=0; i<1000; i++) {
    arr.push(getRandom(1000));
}
console.log('array : ' + arr);
console.log('max: ' + getMax(arr), Math.max(...arr));

console.log('min: ' + getMin(arr), Math.min(...arr));
console.log('quick sort: ' + quickSort(arr, 0, arr.length-1));






