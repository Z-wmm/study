//打印斐波那契数列
function fibonacciArray(n){
  let arr = [];
  if (n == 1){
    arr = [1];
    return arr;
  }else if(n == 2){
    arr = [1,1];
    return arr;
  }else{
    arr = [1,1];
    for(let i = 2;i < n; i++){
      arr.push(arr[i-1] + arr[i-2]);
    }
    return arr;
  }
}
//打印第n个斐波那契数的值
function fibonacci(n){
  if( n == 1 || n == 2){
    return 1;
  }else{
    return fibonacci(n-2) + fibsonacci(n-1);
  }
}