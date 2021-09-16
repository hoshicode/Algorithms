

//var arr = [];
var s_index = "";
var random_arr = [];
var random_arr_forSort = [];
var css_index =[];

function swapArray(arr,left,right){
    var s_left = arr[left];
    var s_min = arr[right];
    arr[left] = s_min;
    arr[right] = s_left;
  }

function sendNumber(){
    quicksort(random_arr_forSort,0,random_arr_forSort.length-1);
    console.log(random_arr_forSort);
}

function createNumber(){
  //初期化
  s_index = "";
  random_arr = [];
  random_arr_forSort = [];
  css_index =[];
  if(document.querySelector('style') != null){
    const element = document.querySelector('style');
    element.remove();
  }

  const how_many = document.getElementById("how_many").value;
  const max = document.getElementById("max").value;
  const min = document.getElementById("min").value;
  for(i=0; i<how_many;i++){
    var r_number = getRandomInt(min, max);
    random_arr.push(r_number);
    var temp_ = [random_arr[i],i];
    random_arr_forSort.push(temp_);
  }
  console.log(random_arr);
  console.log(random_arr_forSort);
  const loop_n = Math.floor(how_many/10);
  var output1 = "<table border=1>"; 
  for(j=0;j<=loop_n;j++){
    output1 = output1 + "<tr>";
    for(i=0;i<10;i++){
        if(random_arr[j*10 + i] === undefined){

        }else{
        output1 = output1 + "<td id='td"+ (j*10 + i) + "' align='center' width='20px'>" + random_arr[j*10 + i] + "</td>";
        }  
      }
    output1 = output1 + "</tr>";
    }    
  output1 = output1 + "</table>";
  document.getElementById("created-number").innerHTML = output1;
  sendNumber();
  
}

function sendSearchNumber(){
    if(document.querySelector('style') != null){
      const element = document.querySelector('style');
      element.remove();
    }
    css_index =[];

    const s_textbox = document.getElementById("s_number").value;
    console.log("検索値"+s_textbox);
    binary_search(random_arr_forSort,s_textbox,0,random_arr_forSort.length-1);
    console.log("index値"+s_index);
/*    var output_index ="";
      if(s_index == "no index"){
        output_index = "Your search number is none.";
      }else{
        output_index = "Your search number is index[" + s_index + "].";
      }
    document.getElementById("search-number-index").innerHTML = output_index;
*/
    createCSS(random_arr_forSort,css_index);  

  }

function binary_search(arr,searchNumber,low,high){
    console.log(arr,searchNumber,low,high);
    if(searchNumber == arr[low+Math.floor((high - low)/2)][0]){
      s_index = low+Math.floor((high - low)/2);
      console.log("searchIndex:"+s_index);
      searchAll(arr,s_index);
    }else if (arr[low][0] != searchNumber && arr[high][0] != searchNumber && high - low == 1) {
      s_index = "no index";
    }else if (searchNumber > arr[low+Math.floor((high - low)/2)][0] && searchNumber <= arr[high][0]) {
      binary_search(arr,searchNumber,low+Math.floor((high - low)/2)+1,high);
    }else if (searchNumber < arr[low+Math.floor((high - low)/2)][0] && searchNumber >= arr[low][0]) {
      binary_search(arr,searchNumber,low,low+Math.floor((high - low)/2)-1);
    }else{
      s_index = "no index";
    }
}

function searchAll(arr,s_index){
  var i = 0;
  while(arr[s_index+i][0] == arr[s_index][0]){
    css_index.push(s_index+i);
    i++;
    
  }
  var j_ = 1;
  console.log("s_index:"+ s_index);

  if(s_index == 0){}
  else{
    while(arr[s_index - j_][0] == arr[s_index][0]){
      css_index.push(s_index - j_);
      j_++;
      if(s_index - j_ < 0){
        break;
      }

    }
  }
  console.log(css_index);
}

function partition(arr,leftside,rightside){
    var pivot = arr[rightside][0];
    console.log(pivot);
    var i = leftside-1;


    for(var j = leftside;j <= rightside-1;j++){
        if(arr[j][0]<pivot){
            i++;
            if(arr[i][0] == arr[rightside][0]){
                i++;
            }
            swapArray(arr,i,j);
//            swapArray(random_arr_forSort,random_arr_forSort[i],random_arr_forSort[j]);
            console.log("swap"+ i +" & "+ j + " → " + arr);


        }

    }
    swapArray(arr,i+1,rightside);
//    swapArray(random_arr_forSort,random_arr_forSort[i+1],random_arr_forSort[rightside]);
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


//    const output = "sorted number is " + arr + ".";
    
//    document.getElementById("sorted-number").innerHTML = output;

}


function getRandomInt(min, max) {
  min_ = Math.ceil(min);
  max_ = Math.floor(max);
  return Math.floor(Math.random() * (max_ + 1 - min_) + min_); //The maximum is exclusive and the minimum is inclusive
}

function createCSS(moto_arr,index_arr){
  const style = document.createElement('style');
  var css_ = "";
  for(i=0;i<index_arr.length;i++){
    css_ = css_ +"#td" + moto_arr[index_arr[i]][1] + " {color: red;} ";
  }
  
  style.innerHTML = css_;

document.head.appendChild(style);
}