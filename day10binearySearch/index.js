
function binarySearch(arr, low, high, x)
{
    if (high >= low) { //5>3
        let mid = low + Math.floor((high - low) / 2); //2  //3
        if (arr[mid] == x)
            return mid;
        if (arr[mid] > x) // 4>10
            return binarySearch(arr, low, mid - 1, x);

        return binarySearch(arr, mid + 1, high, x);//mid== low 3
    }
    return -1;
}

let arr = [ 2, 3, 4, 10, 40 ];
let x = 10;
let n = arr.length
let result = binarySearch(arr, 0, n - 1, x);

if (result == -1)
    console.log("Element is not present in array");
else
    console.log("Element is present at index " + result);