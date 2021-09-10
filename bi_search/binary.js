var arr = [];
var s_index = "";

function swapArray(left,right){
    var s_left = arr[left];
    var s_min = arr[right];
    arr[left] = s_min;
    arr[right] = s_left;
  }

function sendNumber(){
    const textbox = document.getElementById("number").value;
    console.log("入力値"+textbox);
    arr = textbox.split(',').map(Number);
    console.log("最初の配列"+arr);
    quicksort(arr,0,arr.length-1)
}

function sendSearchNumber(){
    const s_textbox = document.getElementById("s_number").value;
    console.log("検索値"+s_textbox);
    binary_search(arr,s_textbox,0,arr.length-1);
    console.log("index値"+s_index);
    var output_index ="";
      if(s_index == "no index"){
        output_index = "Your search number is none.";
      }else{
        output_index = "Your search number is index[" + s_index + "].";
      }
    document.getElementById("search-number-index").innerHTML = output_index;
}

function binary_search(arr,searchNumber,low,high){
    console.log(arr,searchNumber,low,high);
    if(searchNumber == arr[low+Math.floor((high - low)/2)]){
      s_index = low+Math.floor((high - low)/2);
    }else if (arr[low] != searchNumber && arr[high] != searchNumber && high - low == 1) {
      s_index = "no index";
    }else if (searchNumber > arr[low+Math.floor((high - low)/2)] && searchNumber <= arr[high]) {
      binary_search(arr,searchNumber,low+Math.floor((high - low)/2)+1,high);
    }else if (searchNumber < arr[low+Math.floor((high - low)/2)] && searchNumber >= arr[low]) {
      binary_search(arr,searchNumber,low,low+Math.floor((high - low)/2)-1);
    }else{
      s_index = "no index";
    }
}

function partition(arr,leftside,rightside){
    var pivot = arr[rightside];
    var i = leftside-1;


    for(var j = leftside;j <= rightside-1;j++){
        if(arr[j]<pivot){
            i++;
            if(arr[i] == arr[rightside]){
                i++;
            }
            swapArray(i,j);
            console.log("swap"+ i +" & "+ j + " → " + arr);


        }

    }
    swapArray(i+1,rightside);
    console.log("分割完了" + arr);
    return i+1;

}



function quicksort(arr,leftside,rightside){
    if(leftside < rightside){
    console.log("index:"+leftside+"to"+rightside);
    var piPoint = partition(arr,leftside,rightside);
    console.log("piPoint:" + piPoint);



        quicksort(arr,leftside,piPoint-1);
        quicksort(arr,piPoint+1,rightside);
    }


    const output = "sorted number is " + arr + ".";
    document.getElementById("sorted-number").innerHTML = output;

}
