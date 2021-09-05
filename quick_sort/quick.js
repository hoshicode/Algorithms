var arr = [];

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


