
var ones = [];
var breakPoint = [[400, 500], [40, 50]];
var romans = [["CM","D", "C"],["XC", "L", "X"]];
function convert(number, array, breakPoint) {
  debugger;
  var result = "";
  if ((number - breakPoint[1])>=breakPoint[0]) {
    result+=array[0];
    } else if (number === breakPoint[0]) {
        for (var i = 0; i < (breakPoint[1] - number)/100; i++) {
          result+=array[2];
        }
      result+=array[1];
    } else if ((number - breakPoint[1])<0) {
        for (var i = 0; i < (number)/100; i++) {
          result+=array[2];
        }
    } else {
      result+=array[1];
        for (var i = 0; i < (number - breakPoint[1])/100; i++) {
          result+=array[2];
        }
      }
    return result;
  }

function getDividedInput(input) {
  var arr = [];
  var wholeNum = 0;
  for (var i = 1000, j = 0; j < 4; j++) {
    wholeNum = (Math.floor(input/i))*i;
    input-=wholeNum;
    arr.push(wholeNum);
    i = i/10;
  }
  return arr;
}

function getConvertedNumber(input, romans, breakPoint) {
  console.log(romans.tens);
  var dividedNumber = getDividedInput(input);
  var result = "";
  debugger;
  for (var i = 0, j = 0; i < dividedNumber.length; i++, j++) {
    result+=convert(dividedNumber[i+1], romans[i], breakPoint[j]);
  }
  return result;
}

$(function(){
  $("#form").submit(function(event){
    var number = parseInt($("#number").val());
    console.log(getConvertedNumber(928, romans, breakPoint));
    event.preventDefault();
  });
});


// var value = [[1000, "M"], [900, "CM"], [500, "D"], [400, "CD"], [100, "C"], [90, "XC"], [50, "L"], [40, "XL"], [10, "X"], [9, "IX"], [5, "V"], [4, "IV"], [1, "I"]]

// var array = [];


// function getInput(input) {
//   if (input === 0) {
//     return "null";
//   }
//   else if (input < 0) {
//     return "We only recognize whole numbers."
//   }
//   else if (input > 3999) {
//     return "Please enter a number between 0 and 4,000."
//   }
//   else if (input >= 1) {
//     for(var index = 0; index <= value.length; index ++){
//       if(input >= value[index][0]){
//         array.push(value[index][1]);
//         input -= value[index][0]
//         getInput(input)
//         return array.join("");
//       }
//     }
//   }
// }
