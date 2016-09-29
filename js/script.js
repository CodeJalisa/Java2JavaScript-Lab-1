" use strict ";

var display = document.getElementById("display");

function oneToTen(){
  var str= "***Output***"
  for(i=1; i < 11; i++){
    str+= "<br>" + i;
    display.innerHTML = str;
  }

}

function oddNumbers(){
 var str= "***Output***"
  for(i=1;i<20;i++){
    if(i%2==1){
      str+="<br>"+i;
      display.innerHTML = str;
    }
  }
}

function squares(){
  var str= "***Output***"
  for(var i=1;i<11;i++){
    current= Math.pow(i,2);
    // if(current<101){
    //   str+="<br>"+current;
    //
    // }
    str+="<br>"+current;
    display.innerHTML = str;
  }
}

function random4(){
  var str= "***Output***"
  for(var i=1;i<5;i++){
    var random = Math.floor(Math.random() * 100) + 1;
    str+="<br>"+ random;
    display.innerHTML = str;

  }
}

function even(n){
 var str= "***Output***"
  for(var i=1;i<n;i++){
    if(i%2==0){
      str+="<br>"+i;
      display.innerHTML = str;
    }
  }
}

function powers(n){
var str= "***Output***"
for(var i =0 ;i<n+1;i++){
  str+= "<br>" + Math.pow(2,i);
  display.innerHTML = str;
// display.innerHTML = "Yerrroooo"
  }
}

function areWeThereYet(){
  var answer = true;
  while(answer){
    var answer = prompt("Are we there yet?");
    if(answer.toLowerCase() == "yes"){
      display.innerHTML = "Good!";
      answer=false;
    }
  }
}

function triangle(){
  var str = "*";
	for(var i = 0; i<=5; i++ ){
		display.innerHTML += str.repeat(i) + "<br>"
	}
}

function tableSquare(){
display.innerHTML = "|1|2|3|4|" + "<br>" + "|2|4|6|8|" + "<br>" + "|3|6|9|12|" + "<br>" + "|4|8|12|16|";
}

function tableSquares(n){
  var row = ""
  for(var i=1; i<=n; i++){
    for(var j=1; j<=n ; j++){
      row += "|"+ i*j + "|";
    }
    row += "<br>";
  }
display.innerHTML = row + "<br>";
}
