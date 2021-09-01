

var arr = [];

function sendNumber(){
    const textbox = document.getElementById("number").value;
    console.log(textbox);
    arr = textbox.split(',').map(Number);
    console.log(arr);
    sort()
    //var testArray = arr.slice(1,arr.length);
    //console.log(testArray);
}

function sort(){

    console.log(arr);
    for(var i = 0; i <arr.length;i++){

    var testArray = arr.slice(i,arr.length);

    var min = Math.min(...testArray);
    var minIndex = testArray.indexOf(Math.min(...testArray));

    console.log(min);
    console.log(minIndex);

        function swapArray(left,minIndex){
          var s_left = arr[left];
          var s_min = arr[minIndex];
          arr[left] = s_min;
          arr[minIndex] = s_left;
        }

    swapArray(i,minIndex+i);


    console.log(arr);
    }
    //テキストボックスの値を使って、出力するメッセージを生成する
    const output = "sorted number is " + arr + ".";
    //出力用のp要素にメッセージを表示
    document.getElementById("sorted-number").innerHTML = output;

}
