// 1 

function doIt() {
     console.log('I am done');
}
setTimeout(doIt, 5000)
function myFin(startFirst, stopFirst, threeCallback, fiveCallback) {
	let arr = [];
	for(let i = startFirst; i <= stopFirst; i++){
		arr.push(i);
	}
	console.log(arr);
	arr.forEach(function(val){
		if(val %3 === 0)
			threeCallback();
		if(val %5 === 0)
			fiveCallback();
	});
}
function myThree(){
	console.log("myThree");
}
function myFive(){
	console.log("myFive");
}
myFin(10, 15, myThree, myFive);

// 2

function repeatStringNumTimesOne(str, num) {
  let strOne = "";
  if (num > 0)
    //return strOne;
  for(let i = 1 ; i <=num ; i++)
    strOne += str;
  return strOne;
}
function repeatStringNumTimesTwo(str, num) {
  let strTwo = "";
  if (num > 0) {
   // return myStr;
  let i = 0;
  while(i < num){
    strTwo += str;
    i++;
      }
  }
  return strTwo;
}
function repeatStringNumTimesThree(str, num) {
  let strThree = "";
  if (num > 0) {
    //return myStr;
  let i = 0;
    do{
      strThree += str;
    i++;
  }
    while(i < num);
  }
    return strThree;
}

console.log(repeatStringNumTimesOne("abc", 3));
console.log(repeatStringNumTimesTwo("abc", 3));
console.log(repeatStringNumTimesThree("abc", 3));

