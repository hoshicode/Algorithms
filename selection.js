var arr = [];

function sendNumber(){
    const textbox = document.getElementById("number").value;
    console.log(textbox);
    arr = textbox.split(',').map(Number);
    console.log(arr);
    sort()
}

function sort(){

    console.log(arr);
    for(var i = 0; i <arr.length;i++){


    var min = Math.min(...arr.slice(i,arr.length+1));
    var minIndex = arr.indexOf(Math.min(...arr.slice(i,arr.length+1)));

    console.log(min);
    console.log(minIndex);

        function swapArray(left,min){
          var s_left = arr[left];
          var s_min = arr[min];
          arr[left] = s_min;
          arr[min] = s_left;
        }

    swapArray(i,minIndex);


    console.log(arr);
    }
    //テキストボックスの値を使って、出力するメッセージを生成する
    const output = "sorted number is " + arr + ".";
    //出力用のp要素にメッセージを表示
    document.getElementById("sorted-number").innerHTML = output;

}
