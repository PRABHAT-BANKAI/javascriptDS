
// document.write("<h1>hello world</h1>")
//[4,3,1, 33,5,32,1]
function printNGE(arr, n)
{
  var next, i, j;
  for (i = 0; i < n; i++) 
  {
    next = -1;
    for (j = i + 1; j < n; j++)
    {
      if (arr[i] < arr[j]) 
      {
        next = arr[j];
        break;
      }
    }
  console.log(arr[i] + " -- " + next);

  }
}


var arr = [4,3,11, 33,5,32,1]; //33//11//33//-1/32/-1/-1
var n = arr.length;
printNGE(arr, n);